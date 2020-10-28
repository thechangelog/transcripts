**Jerod Santo:** Maxime, we teased this conversation when we had your colleague, Simon Eskildsen, on the show a few weeks back, episode \#412... But he was here to talk about napkin math, and he was part of this Shopify Storefront rewrite, but we didn't wanna talk about it with him, because we knew you were coming up and we wanted to talk about it with you... So first of all, thanks for joining us on the Changelog to talk about this project of yours.

**Maxime Vaillancourt:** My pleasure. Thanks for the invite.

**Jerod Santo:** So it's a big thing to rewrite anything, but especially something as big and powerful and successful as Shopify. I think the main piece of the news that people latched on to was the monolith versus microservices implication here, as Shopify has been a poster child of Rails monoliths at scale, right?

**Maxime Vaillancourt:** Yup. And it's something that we learn about every day, I think, the more we figure out what should go in the monolith and what shouldn't. That kind of let to the decision to split that specific domain into a separate application.

**Jerod Santo:** Yeah. So maybe as we lay the foundation for this conversation, we're gonna go through the decision-making process for the rewrite, we're gonna go through the process of actually getting it done, because it was a couple-year endeavor, and at scale you had to move slowly and carefully. You guys built some really cool stuff with some NGINX Lua rewriting things, to make sure you're doing it right along the way - we're gonna dive into those details. But first of all, lay the groundwork of what the monolith looks like maybe before you started, what all is involved... People know Shopify as an e-commerce platform, where people can run their own online shops, so it's multi-tenanted in that way... I assume a lot of our listeners know what Shopify is, but what does the monolith look like and what all is it doing?

**Maxime Vaillancourt:** \[00:04:24.23\] Right. So Shopify was started almost 15 years ago now, and this all started as a simple Rails application, the majestic monolith approach, where everything would be into that one application... Which we're still using today, 15 years later, and that's the main place where most Shopify developers tend to ship code into.

Of course, with scaling you run into challenges with how you get to handle multiple hundreds of developers working on the same platform, shipping that codebase at scale, but also dealing with should go in the monolith. And as we eventually ran into a point where it was impossible to use Rails as it is into its base form, we hit the limits of what we could do with basic Rails.

As you mentioned, Shopify is a multi-tenant application, so just dealing with the implications of that, and making sure that there's no cross-tenant access for data - that sort of thing required some patches to the monolith. So the monolith is an application where most of the code is present in there. We're now splitting it into separate components, so that we have business domain-specific components in the monolith, and that makes it so that for example Storefront and online store specifically was this own component, where everything would be into that directory. So it kind of gives us a nice way to create these boundaries between the different components, so that there's no cross-component access, and hopefully eventually everything has to interface between each component, and there's no violation.

There was one article on the Shopify Engineering Blog that we've just posted about this, that explains how we're starting to enforce more the boundaries between those components to make sure that we don't run into issues with different class names that don't make sense, or that sort of stuff.

**Jerod Santo:** So these are code boundaries though... You're still inside of a process, or inside of a codebase; these are not services that talk over a network, correct?

**Maxime Vaillancourt:** Right. Same process, correct. So it's really more kind of a developer experience thing more than it is a topology thing for networking, for example.

**Jerod Santo:** Okay. So if we talk about the monolith's parts, we mentioned the Storefront; you can explain exactly what the Storefront is. Then there's the admin. If anybody's run a Shopify shop, they know what the admin is, at least to a certain degree; surely, there's more to it. There's the payment processing, the checkout part... So there are some logical sections. Am I missing any? I'm sure I'm missing some. I'm sure there's tons on the backend...

**Maxime Vaillancourt:** Yes.

**Jerod Santo:** What else is there?

**Maxime Vaillancourt:** So there's a ton of them...

**Jerod Santo:** Yeah, I mean the big ones.

**Maxime Vaillancourt:** Of course, the billing stuff is in there, there's payment processing, as you mentioned; there's of course the Storefront, everything that's about pricing, returns - that kind of stuff is all separated into its own components, and it typically lines up with a specific team owning that component to build it. So the way those components work is essentially a tiny Rails app within each component, with its own app directory, tests and everything that's kind of wrapped up into this one component... And the online store is one of them, for Storefront-specific stuff.

**Jerod Santo:** Okay. So it's worth noting that the Storefront, which is the topic of conversation here, has been rewritten, with a strenuous process that we're gonna go through here. It's still a Ruby app...

**Maxime Vaillancourt:** Yes.

**Jerod Santo:** Is it still a Rails -- is it its own Rails app, or is it somehow different than that?

**Maxime Vaillancourt:** \[00:08:03.07\] So we started with a base Ruby application. We are using some parts of Rails, but not Rails itself directly. And the reason for that is the way that Shopify's Storefronts are implemented don't really line up with the CRUD pattern that typically a Rails app would use. So if you go on a Shopify Storefront, you go on the index page, for example. You're gonna have the index pages, the product pages, the collection pages, and all of those different endpoints that you would see on a Storefront.

Now, all of those things could be implemented as a Rails actions to be rendered, but starting out from scratch we kind of realized that we don't need everything that Rails provides, and we could simplify this with a Ruby application to get started with at first.

**Jerod Santo:** So the Storefront is kind of a simplified part of a full stack, insofar as - I'm assuming now, so correct me here - it's taking in a request, and then basically once it determines which Storefront it is, then it says "Okay, get all of my templates which are writeable by the Storefront owner (they're liquid templates by whoever owns that theme, or whatever it happens to be), grab those templates, grab all the data, merge them together and spit out some HTML", in the most simplified form, is what it's trying to accomplish, right?

**Maxime Vaillancourt:** That's exactly what it is. And because of that, the goal of that specific application is to do that really well, really quickly, and at scale. So because we don't necessarily want the same performance criteria that we would for the admin, for example, separating that application gives us a "do one thing and do it well" kind of Unix philosophy thing for that specific service to do.

**Jerod Santo:** So what were the goals with the rewrite? You mentioned there's like three aspects that you wanted to accomplish by going through this process.

**Maxime Vaillancourt:** Right. Of course, success criteria - the first one was to make sure that we had the same features and the same behavior in the new one that we did with the older application. By that, we say that for a given request, for the same input, if both are treated as black boxes, you get the same output, and they're just behaving the same way for whatever input you give them. That's where we use the verifier mechanism to make sure that for a given input we get the same output, and make sure that we never serve something to buyers that is not equivalent, and that's incorrect or invalid.

The second one would be to improve performance, of course. Improving performance with the new application, we're able to really focus and drill down into the performance criteria that we've set for this application, but not only the application itself in terms of infrastructure; we've kind of thought about what we want out of this in the next 10, 20, 30 years in terms of how we want to set up Shopify Storefronts to scale with time... For example, running on an active-active replication setup allows us to read data from different locations without needing to go all around the world if we don't have to... And thinking about how we write the code within the Ruby application is something that -- we're using different Ruby patterns that you usually wouldn't; so it's not really idiomatic Ruby, it's not really something that you kind of just write your pretty Ruby as you usually would. We are thinking about certain things that do have an impact on performance in the end. Something like thinking about the memory allocations underneath is something that I know I certainly didn't do before that product in Ruby, but now we think about those things to make sure that there isn't anything that we're -- basically, to make sure that we're doing the right thing for performance.

And finally, the last one was to improve the resilience and capacity. So Shopify has this major, kind of like Super Bowl part of the year, which is Black Friday and Cyber Monday...

**Jerod Santo:** Coming up.

**Maxime Vaillancourt:** \[00:12:04.14\] Yes, coming up in a month, roughly, now... Or even two months, I think. End of November. That's typically the place and time when we find out if everything we did during the year was good enough. So far, it's been going well. This year is going to be the first year that we're powering most of the Storefronts on the platform with that new implementation. So it's our first real game day for us, for actual daytime events in the wild. Hopefully, everything goes well; these may be famous last words, but hopefully, everything goes very well and we're doing great.

But that's the third goal of the application, to basically take what we had with the monolith and make it even better, because we're optimizing those exactly just for that one use case.

**Jerod Santo:** So a big question that I would have at that point, when you decide "Here are our goals, and they're around performance, they're around scalability, resiliency", and you're extracting this section which has -- let's just call it a limited scope; I'm sure it's very complicated, but a limited scope logically... Is did you consider other languages, other runtimes altogether?

**Maxime Vaillancourt:** Yes, we did. The one thing that made us decide to keep using Ruby is 1) all of Shopify is on Ruby. So in terms of developer knowledge transfer, that's the most accessible thing to do as an organization. Another thing is that the liquid library that we're using to render Storefronts is Ruby-based, so keeping that runtime is something that at the very beginning of the project kind of made sense to get started with.

The other thing that we're now starting to see is we're just starting to explore alternative runtimes for Ruby. TruffleRuby is something we're trying to explore, to see if that could help with performance in terms of a Storefront rendering.

So it's not something that we've really wanted to move away from. We're committed to Ruby, committed to Rails, and that decision still makes sense today. Maybe eventually we'll start to think about a different runtime for this, but so far it's been working for us.

**Jerod Santo:** Well, the amount of stuff that you'd have to rewrite - your rewrite is already hazardous enough, and we all know the treachery that is a big rewrite. This is a pretty substantial rewrite, and it took you two years, soup to nuts. You're not 100% on it, but you're getting close, right?

**Maxime Vaillancourt:** Correct, yeah.

**Jerod Santo:** Imagine how much longer that would have been if you had to rewrite liquid in a new language. I'm sure you're pooling in lots of shared code throughout Shopify into the new Storefront that you can just build on top of. it's like starting with a bunch of Lego blocks; if you had to switch languages altogether, you'd have to build each Lego block, and you may never finish.

**Maxime Vaillancourt:** Exactly. I think in this paradigm, extracting everything into this different application I think is the first step. And once that's done, we're able to work with it and do something different, eventually. But the first step, of course, is to take everything out and have this isolated thing that we can then play around with and experiment with... And it's so much easier to do that once you have that out as a separate service, that you can really have the smaller scope of -- rather than trying to work with different languages into the monolith, which would definitely be a bit harder to do.

**Jerod Santo:** I'm curious why the Storefront was chosen. Or maybe it was just your team's project. Is each part of this monolith gonna get a similar treatment, or are they parallelizing that effort, or was it just Storefront first, and see what happens?

**Maxime Vaillancourt:** So far it's only Storefront, and I don't think there's any other plans to extract any other major blocks from there.

Something to keep in mind is Shopify's platform receives a lot of traffic, and the majority of that traffic is for Storefront requests. The admin, of course, takes a good chunk of that, but mainly it's Storefront traffic, so it made sense for us to optimize that specific place of the code, simply because that's where most of the traffic goes, and that's something that we could leverage in terms of impact.

\[00:16:11.12\] The other thing is that storefronts don't necessarily have the same requirements as you would need from the admin, for example. The admin is something where you want to have valid information at all times. For example, payment processing and billing is something where you want the right amount of dollars being taken in and out of your accounts. So performance is less of a criteria there, because you want to ensure that you have proper calculations and logic going on there. On the storefront, there is a bit less of that strong requirement...

**Adam Stacoviak:** Yeah... It's spot on. A storefront is rendering correct information, obviously; it's not about not correct or incorrect, it's more like an admin is for a limited scope of type of person, whereas the storefront is literally anybody on the internet.

**Maxime Vaillancourt:** Exactly, yeah.

**Adam Stacoviak:** And if you look at Shopify as a up or down scenario, the majority of that up or down scenario is likely looking at storefront, not so much admin or others. You might get a limited and a small of portion of the world is gonna care, but the majority is gonna care about the storefront being open and fast.

**Maxime Vaillancourt:** Exactly. So Storefront - the main criteria there is performance, and especially as people run onto mobile devices from all around the world, you wanna get people to have their storefronts to be loading as fast as possible from any sort of circumstances.

In this case, there's a bit less requirement to get the right data at all times, to be precise at any given second. It's really more to get the response in their devices to start doing something.

**Adam Stacoviak:** Yeah. You think about this from a standpoint -- you mentioned that Rails CRUD scenarios didn't really fit in with the criteria of this, which is worth kind of defining... What was it that pinpointed this, as Jerod mentioned? Why Storefront? Why would you rewrite this, and would you parallel other opportunities inside of Shopify? And I think you think about the right tool for the right job. And while we're not dismissing the fact that Rails isn't amazing; as you had said, you're committed to both Ruby and Rails, so this isn't a matter of "Done with Rails. See you. Bye", it's more like "Well, maybe in this scenario performance and speed and optimization, all these different things outweigh that." I think the bigger play here might be to help us understand why Rails didn't fit anymore, and why a rewrite made more sense. And in particular, to Jerod's question, why Ruby still yet, which makes sense, because hey, you've got a lot of Ruby knowledge inside of Shopify... It would make very little sense to move away from it, unless you had a really good long-term plan for that.

But more so, why the rewrite for Ruby, but so much the right tool for the right job? Ruby is still the right tool for the right job, but Rails didn't fit anymore in that realm. What did you gain by going pure Ruby, and non-idiomatic Ruby, and all those things?

**Maxime Vaillancourt:** One thing that's interesting is we're still using a fair amount of Rails components in that new implementation, that aren't necessarily the whole Rails app itself, but we are using some bits of Active Support for compatibility purposes, to make sure that what we have in the monolith still works in the new application. There's various gems that are still using Rails, that we do use in the new implementation.

The way I see it - it's more of a hybrid in between a barebones Ruby app and what Rails would provide. What we're kind of putting behind is everything that's the Rails routing, for example with something that we didn't necessarily need for that implementation, because of how storefronts are routed can be implemented fairly simply, without going with everything that Rails provides with routing. But there's a fair amount of behavior and features that Rails does provide, that we are using still in the application, through gems and modules that we've imported there.

**Jerod Santo:** \[00:19:59.20\] It sounds like to me when you talk about the non-idiomatic Ruby, when I read the blog post, a lot of the things you're doing is using the self-destructive style method calls like map! where it's not going to return you a new array (or whatever it happens to be) of objects, it's gonna actually modify itself in place. And the reason why you do that inside of Storefront is because you are optimizing the heck out of memory consumption, right? You're trying to get memory consumption to as small as it could possibly be. So there's your "Why not Rails?" right there. I mean, one reason, of course; there's plenty of reasons. But if you could load as little bit of that code in the memory as possible of what you need of Rails, and not the entire stack, you are undoubtedly gonna save in memory allocation; all those objects you're not using...

**Maxime Vaillancourt:** Exactly. There was a -- I think it was Sam Saffron from Discourse who posted an article about how Active Record takes so much memory, and I think he compared it to simple SQL, or -- I don't remember the name; it's a library he wrote himself.

**Jerod Santo:** I'm assuming it's a library where you're basically writing raw SQL with some help, I guess?

**Maxime Vaillancourt:** Kind of, yeah...

**Jerod Santo:** "How I learned to stop worrying and write my own ORM"?

**Maxime Vaillancourt:** There's this one, but there's also an analysis of memory bloat in Active Record 5.2, which is a different one... Which is interesting. So that's a good example of memory usage that we've kind of skipped with the new implementation. For example, because Storefront is -- almost all of it is read traffic, there's no writes involved, there's no deletes involved, there's no updates involved; it's really "I have a request, generate a read response, and you just have to get data from the database and send it back" - that sort of thing does not necessarily warrant using Active Record or anything that's heavier in terms of ORM to read data. Straight SQL kind of works to get the data out of there, and having access to that data directly through reads is enough. So in this case it's a matter of reducing memory allocations to getting the garbage collector to run for either less time, or less often, and that has a major impact on the response times that we're seeing.

**Adam Stacoviak:** What was it that really drew you to this rewrite? When did the worst begin to show, so to speak? Obviously, Rails has worked quite well for many years. You've IPO-ed, you're worth lots of money in terms of a company, you're doing amazing... What were the main things that popped up that said "You know what - we really need to get this down"? Was it simply speed and uptime? Was it memory, was it servers falling over? Was it servers on fire? What was it that really struck this cord and said "We need to really fix this two years ago"?

**Maxime Vaillancourt:** I think it was a progressive pain point that kind of -- it never was a big thing that kind of appeared one night. It's just something that with time we started to see performance slowly degrading in terms of response times on the server, and eventually we kind of had to do something about it to improve things.

Interesting story - the initial commits for that applications were Toby himself, who took it upon himself to start something, and as a prototype gets something up and running and make it as lean as possible to get started. And then eventually, that became a team, and we picked it up, and that became the project that we're working on.

But there never was really one thing that kind of said "Okay, that's it. We're doing this thing now." It was a slow process, that eventually kind of arrived at the conclusion that we had to do something; why not try something that's a bit different than what we would usually do, and let's see where this goes, where this leads. That's where we are now. We realized that the approach made sense, and we kind of went along with it, and we're still there now.

**Adam Stacoviak:** That makes sense too, why you mentioned the black box approach in terms of one of the success criteria, meaning that feature parity. Obviously, if you're gonna replace something, you wanna be replacing it as equally as possible, so that as you begin to switch over, they act very similar.

**Maxime Vaillancourt:** \[00:24:08.04\] So not only similar, but also ideally by equal. We wanted the exact same responses to be returned.

**Jerod Santo:** Identical.

**Maxime Vaillancourt:** Yeah, but it depends. So that's a good question... In some cases we had to ignore certain things to go closer to what you're saying, closer to equivalent, rather than byte equal. One example of that - and that's something that's in the blog post - when we do the verification requests to send the initial request to both backends, to see if they output is equivalent, or ideally the same, what would sometimes happen is on some storefronts you can try to render some random values, and those values may change on a render-by-render basis. So if I try to do a request to one of the applications and then I do the same to the other application, but both use different random values, that's not gonna be byte equal And because of that then, to us that would be a verification failure, and would be "Hey, those two applications are not doing the same thing. There's an issue. What's wrong?"

But then looking into those, we realized that it wasn't really an issue. It's more of the output was using something that relied on either time, or randomness-based values, and because of that, that's something we have to ignore and say "That's a false negative. We have to just accept it. It's fine", and move on to real issues.

**Break:** \[00:25:30.24\]

**Jerod Santo:** Alright, Maxime, so you and the team defined your success criteria - feature parity, improving performance, and improving resilience and capacity - and then you set out to rewrite the thing. You had to somehow have some guide rails to know whether or not you were totally screwing up or not. We've talked about it a little bit, but guide us through the whole process. It's taken a while, and you had to invent a few tricks and tech just to help you get this rewrite written and deployed out into the greater Shopify ecosystem. So tell us how you tackled this problem.

**Maxime Vaillancourt:** \[00:28:06.05\] The initial vision around this was to -- of course, when you're starting from scratch, there's always like a transitional period where you don't have anything, and up to a certain point you don't have anything working well enough to say "We have something that's equivalent to the previous implementation."

So that whole starting phase of the project is very much exploratory, and you don't really know if what you're doing works. To reduce the risk of that, we've implemented what we call a verifier mechanism. What that allows us to do is to compare real-world production data and see if what we're doing is close to our reference baseline, which is a monolith in this case.

So the previous implementation lives in the monolith; we wanted to make sure that what we're doing in the new service is doing the equivalent behavior or the equivalent output in terms of what it does, and that mechanism allows us to say "Okay, we're looking at the responses from both applications, and we see a discrepancy. On line 117 there's a missing module that's not included", or something, so that gives us an idea "Okay, we have to fix this."

Most of the time it's something that we haven't implemented in the new application, or it's something that's a bug that we've noticed that we didn't know was there, but because we have this verification mechanism that now we realize "Oh, maybe there's been a bug in that application, in the monolith, that we didn't really know about." And that's something that we've ran into; like, it's a bug that's been there for six years, we never really knew it was there, but upon doing that verification process, we realized that we had implemented something that was the right thing in the new application... And upon comparison, we realized it's never been the right thing in the previous one.

So it helped us figure out how to go and implement what's most impactful to get towards completion and parity in terms of features as quickly as possible. So that's why at first, when we first started the project, we started to look at a single shop, to say "Okay, that's the one shop we want to try to support and target for the release of that new thing." Running the verifier mechanism gets us to a point where we're able to say "We're THAT close to getting that response to be exactly the same for the new application", and from there move on to other endpoints, other shops, and then figure out how to scale to the rest of the platform.

**Jerod Santo:** So I've done this at a tiny scale, where I'd take one endpoint, I curl the endpoint, take the response, take the other endpoint - the one that's in development, the one I'm building - curl the same thing, take the response, pipe it to Diff, and then I look at the Diff, and I hope Diff says "These two files are identical", or whatever it says, right?

**Adam Stacoviak:** \[laughs\]

**Maxime Vaillancourt:** Yup.

**Jerod Santo:** You never quite got there because of all this randomness, and stuff... But was your verifier essentially a differ that you just lodged into your request pipeline? Tell us how that worked.

**Maxime Vaillancourt:** Exactly. So that's exactly what the mental model around this is. It's just instead of us doing the curls and the devs manually by hand in the command line, it's something that's happening --

**Jerod Santo:** Your customers did it. \[laughs\]

**Maxime Vaillancourt:** Exactly. And automatically for us we're getting some data coming back from everyone just requesting Storefronts from all around the world.

**Jerod Santo:** Right.

**Maxime Vaillancourt:** So of course, there's that part of the process, but there's also the one that we're doing locally, on our own machines. So this thing runs in production, where the verifier gives us data about "Okay, there's that many failures in terms of verification that you have to fix for shop XYZ, and then over these different endpoints." But also, once we know that there's an issue on a given Storefront or a given endpoint, we then have to go on our machines and try to figure out "Okay, what's the issue? How can I fix it? How can I bring it back to parity with the baseline implementation?"

\[00:31:56.06\] So that specific mechanism is into an NGINX routing module, where it's written in Lua; we're using OpenResty... And what it essentially does is - at the very beginning of the project, all Storefront traffic was going to the monolith for Storefront traffic. Nothing was really going to the new implementation, as we were just getting started.

The nice thing about that is for every -- I don't remember exactly what sampling we had, but something like for one in every thousand requests that are coming into Shopify for Storefronts, take it, but also do the request to the new implementation, and compare the output of those two requests, do a diff on them, and then upload whatever diff results happen to an external store, so we can look at them later and see what is the issue.

That helped us figure out that certain shops have more diffs than others, certain endpoints have more diffs than others, but also seeing the traffic patterns of where we should try to tackle at first was a super-nice signal for us to say "Okay, there's that many failures there. Let's try to do this one first, to get as much impact as we can there", and then move on to the other ones eventually.

**Adam Stacoviak:** What kind of diffs are we talking about here? What kind of non-parity? What's an extreme example, and maybe a non-extreme example of a diff gone wrong, let's just say?

**Maxime Vaillancourt:** Oh, diffs... I could talk about this for hours. One of the most extreme examples is you try to open the page -- so I'm talking about a buyer's perspective. You open up a storefront, and assuming that the new implementation was going to render that page, all it would see is a blank page. Nothing else. That's one of the most extreme examples, where we're like "This cannot go out in production." One of the reasons behind that could be a missing head tag; for whatever reason, there's a missing thing, and the page does not work at all.

Some of the more extreme examples - not in terms of how a buyer would perceive it, but in terms of how we would perceive it - is there's a missing newline. But that's it. There's just one missing newline somewhere; for some reason, we're not returning the same string for whatever method, and the verifier screams "Hey, that's not the same thing. There's a missing newline there, which is not in the old one", and that's something that we have to deal with.

Of course, all of those non-problematic issues we were seeing - we started to say "Oh, that's not actually an issue." We can just ignore that away, and say "That newline is not really a problem", or fix it, of course. But there's some cases where there's issues that we realized -- just like the time-based and the randomness-based issues, that we didn't really want to block us as we started to get more and more support for certain requests... And we were able to say "Okay, these patterns that look like this, for example, if there's a time stamp in the responses, we can just ignore that away. If there's a script ID that's being generated by the script, or something, ignore that away."

And then as more patterns started to come up, we came up with a pool of patterns that we knew weren't problematic, and knowing those, we were able to focus on the actual issues.

**Adam Stacoviak:** Let's talk about that thing, because this isn't like a typical error tracker that you're doing. This is parity, and I'm curious how you log these things. How do you keep track of and organize this? Not only you, but others can triage this, and say "Okay, these are the ones we should pay attention to, these are the ones we shouldn't." So it's probably not your typical bug tracker that's doing this for you, or maybe it is; I don't know. How did you log these things, and then organize them?

**Maxime Vaillancourt:** Great question. And it actually ties into "How would you do this?" Assuming I'm asking you the question "You have to do this project where you implement this new thing, and you have a million merchants on your platform that are using -- so many storefronts on the platform, you have to get parity for all of them. Do you go with a breadth-first approach, where you try to support as many shops as you can for, say, a single endpoint?" Like, all index pages - you support all index pages across all of the merchants... Or do you try to go for a single merchant and cover everything for that single merchant. But maybe that merchant has some features that the other merchant does not use, and you have to think about "Well, maybe I should consider other merchants first... Should I consider the bigger merchants? The smaller merchants, because there's more people? Do I want to look at it as a theme-based approach, because usually there's gonna be a mass amount of shops that use the same theme?" Different ways of looking at this.

\[00:36:38.04\] In this case, it kind of ended up being a thing where we started with a handful of shops at first, that were the most -- I guess I could say problematic shops in terms of performance, where they would cause a high amount of load on the platform because of their storefront traffic... And from there, getting the diffs from them to fix them eventually. There are two ways of seeing this. It's either breadth-first, or depth-first.

To analyze the actual diffs that we see in terms of parity, we upload that to cloud storage, where all the diffs are aggregated, and later on we can figure out how those are... And then the other side of this is that we keep track of where the diffs happen, in terms of "Is it Shop XYZ, is it endpoint ABC?", and based on that, we can run through our logging pipeline to see where do most of the issues happen - is it on that job, is it on that endpoint? And that gives us an idea of what we should try to tackle at first.

On Splunk we have so many dashboards that are just trying to figure out "You should look at this first, because this is where most of the issues are happening." Datadog is also giving us a bunch of information in terms of where we should focus on first... And later on, what's happening is that on the developer side of things we have tooling locally to be able to comb through the diffs that we have stored on the cloud storage part of it, and read through what are the most frequent ones.

**Adam Stacoviak:** I don't know what I would have done here, honestly. It seems, as you describe it, quite overwhelming. As you'd mentioned, I might have gone down both roads and tested both sides of the water, and sort of drawn some consensus from the team, to say "Okay, which direction do we feel is better - breadth or depth?" And I think I might have done a little bit of both to get a sampling of each direction. But it seems like just daunting. Millions of merchants, unlimited amounts of traffic, tons to dig through, and anomalies everywhere... So I have extreme empathy for you. It seems like a daunting task.

**Jerod Santo:** There's a team, right?

**Maxime Vaillancourt:** Yeah, it's not just me, of course. We're a team of...

**Adam Stacoviak:** Of course, yeah. I mean, the proverbial "you", meaning like, you, many.

**Jerod Santo:** So then you're like "Divide and conquer", right? So you said one team depth, and one team breadth, and then you meet in the middle.

**Maxime Vaillancourt:** Interesting. Yeah, that's something we did try to do. Some people were focusing on a single shop, while others were trying to cover as many shops as possible... And I think what eventually happened is -- you know, when you look at things, you have to do everything at some point anyway.

**Jerod Santo:** Right.

**Maxime Vaillancourt:** So you're gonna have to go through both paths, as a balance, try to do both at the same time, and eventually, you'll reach a critical mass of supported requests from where you can move on to go into the more specialized things, for depth.

**Jerod Santo:** So this is my kind of problem, by the way... I'm a completionist, I love this kind of problem. Here's a big goal... We know what the end looks like, it's called 100%. We're not there yet; we know we're at 32%, or whatever your numbers indicate... And we have a clear path to getting there. What do you do? Well, you check the next diff, and then you fix that problem. And then you're like "Oh, now we're at 33%. Okay." And you try to find the ones where you can implement a module and chop off a whole leg... You know, and you're like "Oh, look at that. That module just solved these 15 problems." And you're just on your way to the end. This is like a good video game, where you're like "I've got my main quest and my side quests. I've gotta get them all, so let's just start hacking away and making some progress." I would enjoy this... And I'm sure you get down in the mucky-muck and you're like "Ugh, these newlines are killing me..."

**Maxime Vaillancourt:** Yeah, very much.

**Jerod Santo:** But still, I'm sure there were those huge wins, where you just slice off one big chunk and you see all these different stores go to parity. It has to be pretty cool.

**Maxime Vaillancourt:** \[00:40:20.20\] That's super-interesting you say that. So the person \[unintelligible 00:40:20.26\] we do have that. We have a dashboard that says "This is the current support we have. We're going towards 100%."

One of the funnier moment during the project - at the very beginning it was easier than it is now, because we're seeing diminishing returns now, because it's more edge cases, and we're trying to fix all the tiny, small things that are left to be fixed... But in the very beginning of the project every single PR could potentially unlock so many more shops and so many more endpoints... So on every deploy, we kind of look at that percentage metric and say "How much is my PR gonna do there? Is it gonna bump by 0.5%? Is it gonna be 1%?"

**Jerod Santo:** Yeah, that's fun.

**Maxime Vaillancourt:** "2%? That would be amazing!" So that kind of gamification of the thing also made it fun, and helped us run towards 100%.

**Jerod Santo:** Yeah. So two questions about monolith in the meantime. The first one is - and I guess they are related. So was monolith a moving target, or is it pretty static in its output?" As you build it -- because it takes a couple of years. Were there changes going into the monolith storefront, so you had to play catch up?

**Maxime Vaillancourt:** We did.

**Jerod Santo:** That sucks.

**Maxime Vaillancourt:** So... Play catch-up for different things. We had to play catch-up with internal changes, in terms of other developers working on the monolith and us trying to catch up with that. There was also catching up in terms of what merchants do. If merchants start using a given feature that we just do not support in the new application yet, then that's another source of potential catching up we have to do.

**Jerod Santo:** So you could go backward. You could wake up in the morning, you were at 3%, and now you're at 28% because somebody used a new feature.

**Maxime Vaillancourt:** Exactly. That's happened multiple times, exactly that. You go out in the evening and you're like, "Oh, nice, we're at 37%", and then the next morning it was something like 17%. "We didn't do anything. What happened?!"

**Adam Stacoviak:** Or you go to lunch and you're like "We left for lunch at 32%, and we came back at 20%. What happened here?!"

**Jerod Santo:** Well, that's demoralizing.

**Maxime Vaillancourt:** Exactly, exactly. That sort of thing was one of the harder parts. Of course, you have to deal with how do you get people to onboard your new project, to get them to help and support that new project, as well as you trying to get them to work on it. Eventually, I decided to make it my quest to make it as easy as possible for others to start contributing to that project by making the documentation amazing, as welcoming as possible, to reduce the friction, and to basically get people to say "Hey look, it looks more exciting to work on that new thing than it is to work on what I'm currently doing." In that approach, people started eventually to come onto the project and on their own contribute to the new thing, rather than only keep working on the previous implementation. So that's something that really helped.

I think in terms of how we drew the line was if it's something that was already in the monolith by the time we started the project, that's something that we would have to take on ourselves, the team working on the rewrite. If however it's something that's not in the monolith yet, it's not anywhere, it's a new project, then that team should be able to consider both projects, because they know it exists they know they have to build for the future and make it into the new application as well... And that's how we got that line drawn, to say who's handling what. Eventually, we kind of reached a point in the project where most people were also writing that code in the new application, so they knew they had to do it to be future-proof.

**Jerod Santo:** My second question about the monolith is because you were going for parity, did you ever have to reimplement bugs or sub-optimal aspects of the monolith, because you had to have the exact same output?

**Maxime Vaillancourt:** Yes.

**Jerod Santo:** \[00:44:02.17\] That also sucks. It's like, "This is my brand new thing. I have to put the bad stuff in the new thing?"

**Maxime Vaillancourt:** Yeah. Well, it's a bad thing I guess for us as developers in terms of "It doesn't feel good."

**Jerod Santo:** Yeah, demoralizing.

**Maxime Vaillancourt:** But in terms of how a buyer or a merchant would see it, people using Shopify - to them, that's good. One of the goals we have is to basically make it so that - for Storefront specifically, for an online store - if you have a theme archive that you have from eight years ago, for example, and you try to upload that today, it should work the same way it did eight years ago. We try to be as backwards-compatible as possible. Of course, if there's something that was introduced eight years ago, we have to make sure that's still there.

And the other thing is Liquid, the gem that we built and we used for Storefront templates, is almost Turing complete. So the possibilities of what Liquid can do is almost infinite. There's features that we shipped at some point that kind of became used in ways that we did not expect, and that we did not really think about, that we still have to support today. Even though that's not what we want it to be used for, we have to keep it this way.

Of course, we had to port some bugs that unfortunately you're kind of "It doesn't feel good", but for the people using that I think it's a service to them to say "Look, your thing you had from a few years ago still works today. There's no breaking change in there."

**Break:** \[00:45:35.03\]

**Jerod Santo:** Max, over the process of the rewrite you had this verifier in place; it's getting some traffic to it via the NGINX routing module... But this is for your learning, so it's still going to the main monolith. It's also going to the verifier running your code, doing the diffs... At a certain point, I assume, since the blog post is out there, and we've got Black Friday coming up, you are confident enough, you have a high enough percentage on a high enough number of stores or themes that you say "We're gonna start rolling this thing out." The routing module I think played a role here. You kind of automated this process... Tell us about that, because I think it's pretty neat.

**Maxime Vaillancourt:** Yeah, so along with the process of verifying traffic we wanted to start rendering that traffic for real people out there buying stuff, to serve that traffic using the new implementation. And we simply leverage to the existing verifier mechanism to say "If you have a certain amount of requests that have been equivalent, and that's happened in a given timeframe, then consider that endpoint for that specific shop to be eligible to be rendered by the new implementation."

\[00:48:15.11\] So that was all kept tracked as a very -- it's very much a stateful thing, a stateful system to keep track of what those requests are, should they be considered, and if they are, start rendering. So all of that was being kept track in the verifier mechanism, again, in NGINX, storing that into a key-value store to just keep track of how many requests we're getting, whether they're the same or they're not... And we have this whole routing mechanism that we control, to say "Okay, assuming that we have that amount of traffic and that amount of time, that is equivalent to the baseline reference implementation, then the routing module will start to send traffic to the new implementation \[unintelligible 00:48:54.29\]"

From there came the need to do some verifications as well, against the monolith this time. So because we now start to route traffic to the new implementation, you also wanna make sure that what you're doing is still valid. So you're not just sending traffic to the other place and saying "Okay, we're done. We're just moving on to the other thing." You wanna keep making sure that what you're doing is still valid. So we keep verifying traffic, kind of reverse verification, where you're doing the verification usually from a monolith to the other one - now you're doing the opposite, because you're serving traffic from the other application.

And that kind of started out as a few shops that we wanted to take care of, because those were the main winners from what the new application was doing in terms of impact on performance, and resilience, and everything... And once we started to gain confidence, I think that's when we opened up the -- we pressed on the throttle and just moved it up to a lot more shops, to say "Okay, that mechanism works. We're seeing that it scales. We're comfortable with opening it up to more merchants." That's where we kind of reached the critical mass of serving the traffic for more merchants on that new implementation.

**Jerod Santo:** So it's shop by shop.

**Maxime Vaillancourt:** It is shop by shop, also split up by endpoint itself. So for a single shop we're not necessarily rendering the entire shop with the new implementation. We're maybe rendering half of that storefront's endpoints with the new one, and still the other half with the old one. That should not change anything for the people browsing that storefront. To them it's really the same thing, or just maybe a bit faster, depending on what endpoint they're on.

**Adam Stacoviak:** How long do you keep that up, in terms of this reverse parity? Because -- kind of going back to the last segment, when you mentioned you're enticing people to write new features in the monolith and new application, and I suppose to keep this reverse parity at some point you've gotta keep the same features in both codebases... So do you reverse the idea of like "Okay, we're gonna build it new, but also we're gonna build an old too, for a certain period, to keep that..." Is that what you've done? Did that force you to do that, to kind of keep that overlap in terms of parity over time?

**Maxime Vaillancourt:** Pretty much. And that's one of the main challenges, in terms of if I'm a developer at Shopify that has to ship something, for a specific period of time you had to write the thing in both applications... Which is not ideal. There's additional work pressure added onto this. The goal was to make that period as short as possible. So now our focus is really on removing the old code from the monolith, to say "Okay, there's only one canonical source of truth now. That's the new implementation; this is where the code should be going", and reducing that period of time where there's two implementations going on.

**Adam Stacoviak:** How long would that be then? What's your anticipation for that overlap?

**Maxime Vaillancourt:** It's been interesting, because the way we kind of advertised the project internally, there was a bit of time where it was more considered as an experiment, and we didn't really want to go and shout off rooftops to say "Hey, there's this new thing." It was more of a thing where we're kind of internally experimenting with something, seeing if it works... And there was a point eventually where we realized "Okay, this is going to be the future of Storefront at Shopify internally, and this is how we should be doing things."

\[00:52:12.20\] From that moment on is when we kind of wanted to get people to be aware that they should be writing their features with that new implementation in mind, to think of how they would build it based on the fact that we now had this new thing. It's not the old one anymore; you may still write the thing in the older one if you need it to be available for the previous implementation, but in terms of making sure that people don't have to write that code twice. Of course, they have to for some period of time; it's not great, and we want to make that as short as possible, but that's something that did happen for a while, and it still happens for certain parts of the storefront based on what we do support and what we don't at the moment.

**Adam Stacoviak:** This is a trade-off, really. I mean, anytime you do a rewrite, you have to ask yourself "What am I willing to sacrifice to do this rewrite? Should I do it at all?", which is kind of the bigger picture; we haven't really asked you that. To some degree it's in between of the lines we're drawing here... But this is a trade-off; having to do that is a trade-off of something that's worth pouring into in the future.

So to me, it's like -- it's not ideal, but in order to rewrite in a smart way, all the steps you've talked about, like the verification service, the diffing, the double implementation for a time period, the overlap, and the continued reverse verification - to me, that's necessary... Maybe, in particular, with your style of application, in terms of your customer base, all the routing you have to do just generally... But that's a necessary trade-off that you have to do, when you say "Okay, we have to solve this problem for the future. Unfortunately, this lab experiment gone right is the future, so we have to do it this way in order to rewrite this thing." To me, that's just a necessary trade-off.

**Maxime Vaillancourt:** It's like a tiny bit of pain now, that is going to be so much better later on... So why not do it now. Ripping off the band aid and just dealing with it now. Of course, it's a bit painful, but there's gonna be so many benefits from this, so let's not think about it too much for now.

**Jerod Santo:** So are you beyond the pain, or are you still in the pain, in terms of the double implementation? Your fellow devs...

**Maxime Vaillancourt:** We're way beyond the pain.

**Jerod Santo:** So the monolith doesn't get any new features.

**Maxime Vaillancourt:** It does in rare cases. In very, very rare cases. And again, I said earlier about how the storefront implementation we're doing now is mostly a read application; the rest of the features would be mostly for everything that updates or writes - that may still be going in the monolith for now, and with time, we may be thinking about doing something where writes would also go to the new implementation. It's not clear yet if that's something we want to do... But at the moment, we're really focusing on getting those reads served by the new implementation.

**Jerod Santo:** So here you are, you've ripped out the band aid, you're at the end of this process, you've made the necessary trade-offs... Was it all worth it? Would you do it again? What are the wins? What are the takeaways from Shopify and your team?

**Maxime Vaillancourt:** I think one of the main things I keep in mind in this is I've read so many articles and blog posts and opinions everywhere on the internet over the years that say "Don't do rewrites." That's like the main takeaway to remember for all of those articles, and I want to be the person who does the opposite and says "Rewrites are possible. You can do rewrites if you do them right. How do you do them right? There's many key things involved in there." It's not a thing where you have to push the rewrite option aside if it's something that you don't think is possible.

\[00:55:47.03\] The main thing, of course, I think is communicating early and often with the people that are involved into that process... Of course, in the example of Shopify developers it's getting them aware that there's going to be this new application that's coming out, that you have to think about in terms of when your features and your roadmaps and everything have to be aware of that new application... And one mistake I did myself was trying to send an email at some point to say "Hey, this is the new implementation of how storefronts work." One email is not gonna cut it. You have to be frequently getting in touch with people, and making sure that they're aware.

Eventually, the word gets on, people get excited about the thing, and that's when you kind of get this excitement going on for that new implementation, along with making sure that you have the most frictionless process to work on that new thing. When you get those two things combined, that's where magic happens, and people want to work on the thing, but people also realize that it's easier, it's more fun to work on the new thing... So it becomes a self-realizing prophecy where you want it to happen, but people kind of make it happen for you... And that happens through communication, I think. So that's one thing.

Of course, in terms of how people using Shopify benefit from this, we're seeing some great results in terms of performance. On average, overall traffic coming up on the platform, we're seeing around 3x-5x performance improvements for storefront response times on cache misses. Of course, we're focusing on cache misses because cache hits are almost always fast; but whenever there is a cache miss, that's what we want to optimize and make sure is always fast. So that was kind of the first rule, I guess, of the project, to say "Don't really think about caching, because we want to first have very, very fast cache misses. And only when we know that we have some very fast cache misses do we want to start thinking about caching on top of that."

So we don't want to cheat away the cache misses by saying "Oh, it's not a problem, because we just add caching onto there." Sure, but what happens when you don't have a cache hit? That's when we want to be extra-fast. And in this case, we're seeing some good performance there.

Some storefronts kind of surprised us in terms of how they performed, where we were seeing up to 10 times faster cache misses. So that's something we were very surprised to see in the early process, and we kind of knew that this was the right way to go, because we were seeing those good results.

**Adam Stacoviak:** If we've got somebody listening to this show right now that are thinking "You know what, Maxime's right. I think we could probably do a rewrite." You've obviously made them believe in the potential, if done right. What are some of the steps you would take to do it right? We've talked about a lot of them, but if you could kind of distill it down to like 3-5 core pieces of advice, what might those be for our listeners?

**Maxime Vaillancourt:** I think one of them is to make sure you have the shortest feedback loop possible when you get off-track. For example, our verifier mechanism gets us there in a way that if we implement something that's not equivalent to the previous implementation, we're aware of it really quickly. In terms of minutes, when we deploy, we know "Okay, we shipped something that's different. Let's look into it, figure out what's going on, and then move on to the next thing." So that's number one.

The second one would be to start with a tiny scope, to scope it down to a small thing that validates the approach, to say "Is this something we even want to go down? Is this a road we even wanna go down towards? Or is it not something that's realistic?" If it is something that's realistic, having that smaller scope will get you to a point where you know "Okay, this seems to make sense so far. I don't see why it wouldn't be okay as well for the rest of the project. Let's make it happen." So that is the second one.

I think the third thing - I said communicating early and often, but also making it easy and enjoyable to work on the new thing. Reducing friction, the bar to entry to work on the new thing is a critical thing to get adoption internally for people that need to ship their features and their roadmaps on the different applications. If it's enjoyable for them to do it on the new one, they're gonna do it. You don't have to force them to do anything, it's just gonna happen by itself.

**Adam Stacoviak:** \[01:00:09.07\] Yeah, if you're gonna cause them pain, cause them the least amount of pain, right?

**Maxime Vaillancourt:** Exactly. Trying to balance this out. If you have to get people to write code in both applications, at least make it enjoyable in the new one. Or more enjoyable than it would be in the previous one.

**Adam Stacoviak:** Maybe distill that one a bit more. You mentioned documentation being a critical piece for you... What beyond documentation helps that?

**Maxime Vaillancourt:** The one thing I'd say is if you have a public Slack channel, be the best customer service person you can be. If people arrive with question, be available; help them. They are the people that eventually are going to make that a success or not. You are kind of the messenger, to say "Hey, we have this new thing we're trying to build. Can you help us?" And if they are there and they receive the help, that's going to help tremendously to get everyone on board... Because that person that receives the help is gonna talk to the project to their own team. And the team will eventually get to that point where because someone on their team is familiar with it, they kind of become that expert on their team... And the word spreads.

So helping people, creating these kind of expert networks within the company that are aware of your app and they're excited about it kind of share the word for you. So helping people I think would be the best thing, and being a good customer service person to just get them closer to what they need to achieve.

**Jerod Santo:** One reason that a big rewrite is scary is because it's difficult or even impossible to bind your risk. It's unbound risk. And there's steps you can take to fix that... You guys have very clear goals - I think that was one of the reasons you succeeded - and you had a way of measuring that as you went; that's clear and awesome. Were there any failure mechanisms? Like, a kill switch, "We're not gonna make it"? Because you said it was an experiment, but the other thing you can say is like "Well, what would failure look like?" Obviously, you succeeded, but did you have failure thresholds, where it's like "You know what, we're gonna abandon this and go back to the monolith, or try something totally else new"? Or were those things not thought about.

**Maxime Vaillancourt:** No, they definitely were. They definitely were. Internally, we call those tripwires. Eventually, you get to a point where you have to figure those out. If you don't, you'll just keep going, and you're gonna get yourself deeper and deeper into the problem. So figuring out what those tripwires are, at what point are you comfortable with those tripwires and saying "Okay, we're just getting too deep now, and now we have to come back and go to something else" - that's something we did.

For example, some of them - we talked a bit about how we've got some catching up to do with internal changes; that's one of the tripwires. If we're not able to catch up in time with whatever's been happening and whatever is being changed in the internal monolith, that's something we have to be careful with. If it's something about we're bi-rolling out the application, for example, in production - if we're causing some incidents in production, that's a tripwire. Because if the monolith is not doing that and we are, potentially we're not ready to go in production and we have to be careful with that.

So there's multiple tripwires we set to make sure this does not happen. Thankfully, we did not hit those. We didn't hit them too often, to say "Okay, it's a problem we should look into and maybe reconsider the entire approach." So in this case, figuring out those tripwires way before you're getting to a point where you want to roll out is critical to make sure you're doing the right thing.

**Adam Stacoviak:** Yeah. I like the word tripwire. It's a very good, concise word for exactly what it means in this case. Is there anything else we haven't asked you, that you're like "Man, I wanna talk about this before we tail out"? We're at that point, so what else have you got?

**Maxime Vaillancourt:** \[01:03:58.24\] One experience that was quite interesting to me personally was - when we started the project, we were around 4-5 people. That's in the first few months; we were starting to get progress. We eventually realized that we're getting closer to rendering certain pages for certain merchants - and that's only internally; we're not in production yet. And at some point, we get a request to showcase it to everyone, all developers, everyone at Shopify internally, during our Friday town hall meeting. So everyone's kind of watching this, we're sharing context, and everything... And this is streamed to all employees at Shopify.

So the one thing we did was to have a simple web page that shows you the same page being rendered by the monolith, and then by the new implementation we were doing. So side by side, two iFrames, just requesting the same page and seeing which one's faster. And when that thing ran, and during the livestream when we showed it up, the new implementation was way faster than the old one. And I think that's when it kind of clicked into my head and in many people's heads, "Okay, this is the right path forward. They're doing the right work, and we have to continue doing this thing."

So from that moment on I think there was kind of a turning point in the heads of developers working on this, to say "This is the thing we're now focusing on in terms of the future, to make sure this happens."

**Adam Stacoviak:** That's awesome. I can imagine that feeling, because you were expecting that call, like "Hey, can you demo this to everybody?"

**Maxime Vaillancourt:** Yeah, we weren't.

**Adam Stacoviak:** Were you like about to throw up, were you antsy, were you like...? \[laughter\]

**Maxime Vaillancourt:** Of course, we had tried it before a few times, to make sure it was okay...

**Adam Stacoviak:** Sure.

**Maxime Vaillancourt:** But seeing the real thing in the live demo, of clicking the button and both pages come up - seeing the new implementation coming up way faster, it was like "Whew. Okay, good. We're in a good place, we're gonna be fine, and we can keep working on the next endpoints to make sure that we're doing this for everyone on Shopify."

**Adam Stacoviak:** That's a cool story, I'm glad you shared that... And congratulations to you and the rest of the team making this happen. I know this has been a multi-year road, with many facets, opportunities for tripwires. Obviously, we hit success, which is great... You're at +90% parity right now, on your way to 100%. Is that still the case, based on your blog post, or are you closer to 100% now?

**Maxime Vaillancourt:** We're getting towards 100%. Exact numbers vary by the day, again, because we're catching up with certain things, and there's external circumstances... But we're getting very close to 100%. The majority of traffic is being served by that new implementation now, so it's really a matter of fixing the last few diffs, and figuring out how can we get to that place faster. Of course, like you said earlier, Jerod, it's a game where you have to pick up the issues one by one and just fix them until you get to a point where everything's fine... But yeah, massive team effort to get there. A lot of \[unintelligible 01:07:00.05\] a lot of parity diff fixing issues, a lot of external communications as well with the merchants... It's a Shopify-wide initiative, and seeing the thing take off and work is super-rewarding in the end.

**Adam Stacoviak:** Well, we've appreciated this conversation, and thank you so much for sharing this story with Jerod and I and the rest of the audience here on Changelog.

**Maxime Vaillancourt:** Thanks so much for everything. It was very fun.

**Adam Stacoviak:** Thank you.
