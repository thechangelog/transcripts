**Kevin Ball:** Hello, JS Party people! The sound of those BMC beats means that it is once again time for your favorite party about JavaScript and the web. I'm Kball, I'm your MC this week. I'm joined by my frequent, and after last week, I have to say favorite co-panelist, Amal.

**Amal Hussein:** Yes, there we go.

**Kevin Ball:** Amal, how are you doing?

**Amal Hussein:** Hey, hey. Happy to be here. Anytime I'm not host is a good day, right? I said, I get to relax, and just watch you sweat it, Kball. So this is great.

**Kevin Ball:** You got it. You get to be the one poking holes, and distracting us, and I'm the one who's trying to keep the ship on the track.

**Amal Hussein:** Exactly. Exactly.

**Kevin Ball:** No, it's all good. Well, this may be a very punny show, because we've got a couple of great guests today. I'm going to throw out to first Mark Texan from the Angular team.

**Mark Thompson:** Hey, good to meet everybody. Thanks for having us on. So glad to be here.

**Kevin Ball:** And his partner in puns, Jessica Janiuk.

**Jessica Janiuk:** Hello, I'm glad to be here. Although I don't know that anybody is Mark's partner in puns. He's probably just more annoyed that I'm the one throwing the puns out all the time.

**Kevin Ball:** So let's get started. We have Mark and Jessica here to talk about Angular. They're both involved with the Angular team. Let's have you each introduce yourselves a little bit, and tell us a little bit more about yourselves, and how you got involved with Angular. We'll throw out the Mark first.

**Mark Thompson:** Sure. So I actually started was Angular a long time ago, way back in AngularJS days. As a developer, I was working at a healthcare company, and I was "Hey, this frontend space is going to change quite a bit." And we're talking almost 5 years ago, right? I'm "The frontend space is going to change", and I just hedged my bets, believe it or not. I just guessed. "I'm gonna choose Angular. So many options... I'm gonna choose AngularJS." And that turned out to be right. And then lo and behold, many moons later, I ended up with an opportunity to actually work on the Angular team. And what's so special about that is, you know, my career changed because I chose AngularJS, and then I get to be a part of the same product that changed my career and changed my life. So it's really awesome to be a part of this team, and be a part of Google, and to really have this opportunity.

**Kevin Ball:** Nice. How about you, Jessica?

**Jessica Janiuk:** \[00:05:47.02\] A bit of a similar story, which is actually a common theme with Mark and I. We have an interesting background between the two of us. But the first web framework I learned - it was Knockout, if you want to call that a framework... The kind of precursor that inspired AngularJS... And then I started learning Angular JS, and then when Angular released, I built my own website out of the recently released Angular 2. And I happened to be going to Google IO pretty regularly, and I remember one year I went and I saw a couple of women on the Angular team presenting, and I thought "Man, what a couple of powerhouses doing some crazy, amazing work. Can you imagine what it would be to work on a team with them? Gosh, that'll never happen to me... But wow, what an amazing team." And then I ended up shockingly getting a job at Google I never expected to, and then found myself - after a year I joined the Angular team through connections to one of those people that I saw give a presentation. And now I call them my colleagues. And I'm still kind of baffled, "How did that happen?", but I'm also quite grateful. And unfortunately, I have to work with this Mark Texan guy. He's just awful... Just awful all the time. \[laughs\]

**Mark Thompson:** The worst... I am the worst.

**Amal Hussein:** Amazing backstories, both of you... And I just can't believe how similar you both are in terms of your energies; the level of jovialness that is on this podcast right now - it's not even able to come through on audio, because you need to just see their faces and how much smiling is happening. But thank you so much for sharing that. I want to share a story with Jessica and I, because I actually got to witness that little journey that Jessica told us about... Jessica and I have a backstory; we actually ran a community together in the Boston area, and I actually met her at Google IO many years ago, and that's how we first connected on that community... And one year I remember her saying "Yeah, my dream one day would be to give a talk at Google IO, and be a part of this community." And it was just amazing to see that happen for you. It was this fairytale that you wrote for yourself. So I don't know, Jessica, you're one of the nicest, kindest people that I've had the pleasure of knowing... And I just want to say you're awesome, and I'm so proud of you, and thank you for inspiring - not just me, but so many people. So many people. So just thank you.

**Jessica Janiuk:** That is so wonderful to hear. And yeah, working with you on that community was wonderful, and I've actually missed hanging out with you and chatting with you.

**Amal Hussein:** Same. Same. You're all the way in California now, so we're just going to have to figure this out, but...

**Jessica Janiuk:** A-ha! I am not.

**Amal Hussein:** Are you back in Massachusetts?

**Jessica Janiuk:** I am back in Massachusetts.

**Amal Hussein:** Oh, that's awesome. Okay, so we have we'd better connect. Yeah, I've swung the other way, so we'll have to catch up. But anyways, back to Angular, everyone.

**Kevin Ball:** So I wanted to ask a little bit... We had a couple of folks on from specifically the Angular Signals team recently... And Angular is a very big project. Can you maybe share a little bit about how is the team structured, and where do you all fit in? And maybe that can lead us into what we're going to talk about today with regards to Angular functionality.

**Jessica Janiuk:** Yeah. So you guys had Alex and Pavel on, didn't you?

**Kevin Ball:** Yup.

**Jessica Janiuk:** So they're on the Angular framework team, the core framework team. And I'm also on that team. So they're my immediate colleagues. And what's interesting is people think of Angular as a big project... And it is; it's definitely a big framework. But actually, the team that does the work on it is pretty small. There's several sub-teams that work on different portions of the framework. There's the core framework team... We have people that work on dev infra and tooling and whatnot... So all in all, it's actually a pretty small group of people that do that work.

I can't remember exactly how many sub-teams we have, but... Yeah, there's a small group and it's divided up such that we can kind of tackle things that are relevant to that specific area. Alex and Pavel, and myself and a couple few other people, we work on the actual core framework of the APIs that go out...

\[00:10:18.04\] There's some people that work on just stuff that affects how we roll out our code, and some people work on just the components... It helps us move forward as best and as quickly as we can. And then we also have our developer relations folks, which Mark, I think you might be familiar with that a little bit.

**Mark Thompson:** Well, I am. So that's my role. So on the team, we also have a dev rel team, which for the Angular team is really interesting, because depending on who you ask and where you work, developer relations means something different. But at Google, developer relations has a technical connotation that just goes along with it. So we're technically developer relations engineers, and so we're also responsible for some code, we're responsible for some technical contributions as well... But we also do other things. Like, for my work on the team, I lead our YouTube effort, and I lead our blog effort, but I also wrote a bunch of the documentation, and I'm right now I'm working on some other documents and technical contributions for some other projects that I can't talk about now. But keep your eyes open for some very special things coming along. But that's just how our team works. And so the dev rel team - we're big into knowing exactly what's happening with the framework team, and we work very closely together, Jessica and I work really closely together on lots of different projects. And so I get to support projects with her in different ways. And it's been really, really special, really, really fantastic.

**Jessica Janiuk:** Yeah, I to think of myself as an honorary dev rel team member. Even though I'm not on dev rel, I do a lot of dev rel-y stuff. I go and do talks and stuff at conferences, and I help with the video production work... It's a lot of fun. I appreciate the fact that on our team we actually do a lot of cross-team collaboration... And that actually spans beyond just dev rel and the framework. We see that happen across all of our teams, where we kind of just try to help each other out as much as we can.

**Amal Hussein:** I feel you're Miss Community; you've always been Miss Community, so not surprised to see you engage in the community, even when you're not formally in that capacity at work... So it makes sense. That's what the draw was for you, and so that's also how you engage. That's so cool.

**Kevin Ball:** Well, and one of the things we were commenting on in that prior episode was how strong the Angular community and engagement is. And I think a lot of that speaks to the fact that one, you have a solid dev rel team, and two, that the boundaries between relationships and community and the core development are very loose and fuzzy, and y'all are all working together. So Mark, you teased us a little bit with features you can't talk about... Let's talk about some of the features you can. So y'all suggested as a good thing to discuss a little bit about Angular's server-side rendering approach, and I'm kind of curious what you have there in terms of what does it look today, and what's exciting that you're looking to move forward into.

**Mark Thompson:** I would jump in and talk a little bit about what I think is really interesting, and then Jessica has a bunch of details about some of the really amazing stuff that she's worked on, that can help. I'll tell you this... We, as in the team - specifically Jessica and some other team members - made this new feature called defer. And it allows you to at the template level, at the component template level do lazy loading and deferred loading of parts of your component. And the reason that's so special -- because everyone says "Oh, well, I can do lazy loading right now. That works in everything." Yeah, but it's at the template level. So you can do parts of your component that can be lazy-loaded, and that gives you so much power to optimize your application. And I feel like when we released this feature as a team, it really is going -- so we released it, and I think it's going to just set this goalpost for other folks to continue to also develop features that are similar to that, because I think it's just honestly a good engineering idea.

\[00:14:07.29\] And the same way that we see signals as "Oh, this is a good engineering idea. We're going to use it in Angular", I think defer will be that for the community as well. But Jessica is part of the team who led this effort. She co-led this effort, so Jessica, please tell us more about how defer works.

**Jessica Janiuk:** Yeah, deferable views are pretty awesome, in my honest opinion, humble opinion. I never know if it's supposed to be honest or humble.

**Amal Hussein:** Humble, I think.

**Jessica Janiuk:** But yeah, so we look to -- typically nowadays when we're developing features for Angular in general, we take looks at like okay, is this being done by another framework? How are they doing it? What do we like about what they're doing with it? What do we think is missing? How would this be improved if we were to pull that into Angular in some way? And for deferrable views, we were definitely looking at Suspense, and some of the other frameworks approach... I can't remember what Vue calls their version of it. It's like async components, I think is what they call it... And all of it made sense; the higher order component version of it... And we originally had thought about doing defer as a higher order kind of component for Angular, or a dedicated directive that we would use for deferring views, and then have it be at the component level... But it was suggested that maybe - what if we were able to just have people do this as a part of their template? You just declare it in the template, and then whatever's inside that block gets deferred? Because when you do stuff with Suspense, you still have to write your manual, dynamic imports and whatnot. And we were like "What if people didn't have to do that? What if people were just able to say "Here's my HTML, here's your stuff that you want to be deferred. Let's just wrap that in at defer, and then under the hood we'll magically figure out those dependencies for you, and create a separate chunk, and then you don't have to even think about it. It just kind of does that for you."

And then - well, now we need some sort of intention for when those chunks are actually loaded. So we took a look at some internal stuff, we took a look at Astro, Astro having the triggers that they have built in... And we decided to create a set of built-in similar triggers, like on interaction, or on viewport, or on hover etc.

So right there, when you're declaring that at defer, you can put those "on interaction", as when that thing will be triggered. So you have a nice, declarative way of saying "Hey, this is how this stuff will actually work." And then we're like "Great, but there's still something missing here. What shows before the stuff loads?" So we added another area for you to put placeholder in, a loading block, a way to handle errors... And it's just this really nice, very usable API that makes deferred loading super-easy. And you can kind of combine all of those triggers, you can use multiple, you can create your own kind of custom conditions with a when clause, you can also handle prefetching with it... It's really powerful. And everybody's been really happy with it. Really well received. So that's essentially what defer is, or deferrable views... And it works both with server-side rendering and client rendering. It's just awesome. I'm quite proud of that feature. Yeah, that's differ.

**Kevin Ball:** \[00:17:57.09\] So I obviously have lots of different questions about this... And I'm gonna be open, I have not used Angular personally in a long time, so I'm not super -- I'm not a deep expert, I apologize. Mark, I see your face... I feel like I just admitted to something terrible, but...

**Mark Thompson:** \[laughs\] No, you're good...

**Amal Hussein:** Yeah, I have to hop onto this bandwagon. I managed a team that was part of a very big Angular project... But yeah, being a manager, I wasn't super into the code every day, so that's about as close as I've gotten to Angular recently. But I was pretty big in the 1x days; I'm sure Kball was as well. It's my guess.

**Kevin Ball:** Yeah.

**Mark Thompson:** But that also makes sense though, right? There are people who looked at Angular, it did not meet their needs at the time, and then they looked at other tools. That's not an unfamiliar story. What I think is so interesting now is how we've been able to take that feedback, and then revitalize Angular in a very special way. And that's been a really big part of our 2023 story. But we started this work way back years ago, when we had to rewrite our rendering engine, which I'm sure Pavel and Alex talked about, right? Making that massive thing, and \[unintelligible 00:19:06.02\] this time of kind of -- it felt like dormancy to the general public, because we were doing this really big rewrite. And then now, because we have that foundation, the things that we could do now - this is why things like defer can happen. This is what things hydration can happen. And they're like our new template syntax. \[unintelligible 00:19:22.27\] how it speeds up template rendering so quick that we were in like 17th place in an independent study, and now the only thing that's faster than us is Solid, and then native JS, because of all that work that we were able to do. So this is a great time for people to get back to Angular, to start just looking and saying "Hey, what are they doing over there? What's going on?"

**Kevin Ball:** Totally. So yeah, in that view then, so making sure I understand... Right now, templates are separate files in Angular. You're not doing the single file component style thing that Vue does. Is that correct? Because I'm trying to understand --

**Jessica Janiuk:** You can do single files if you really want, because you can actually just declare your template in the component... But yes, typically it's still a separate file.

**Kevin Ball:** So within your template, you're marking some part of that template as deferred. And I want to know, how are you figuring out which sets of JavaScript functions are specific to that, versus actually needed in multiple places? Like if it's triggered during an event handler that might be triggered from different places... What's happening behind the hood to chunk these things out?

**Jessica Janiuk:** Well, we're doing it at compile time. So it's not a JIT kind of behavior. So in that compile step, we're actually analyzing all of your your dependency structure, and we look in the template, we see your -- you kind of have to declare your component dependencies anyway, ahead of time... So we know which components you're going to use. We can actually look at that view and figure out what's inside of that defer block, and extract that out as a separate chunk, those dependencies out. The whole under the hood Angular, it can -- under the hood in any framework is a little confusing to follow, but there's all these internal structures that you have to be aware of... But yeah, there's a lot going on, but essentially, yeah, at compile time we're doing this analysis, and extracting the components out.

**Kevin Ball:** Got it. So let's imagine -- and I'm sorry, I like to geek really deep on this stuff, so I'm gonna push you a little bit... So you're pulling out the dependency chain, and you say "Okay, these sets of components, they're loaded below this." Now, I imagine they load some set of util functions, or something like that as well. And those might -- if you have, say, a set of utilities that are loaded in a couple of different deferred blocks, but not anywhere else, can you pull those out separately and only load them once across your two differs? Or do they get sort of two chunks with duplication?

**Jessica Janiuk:** \[00:22:04.22\] I can't remember exactly how this works. I think it loads once. Based on the analysis that we do, once a component is loaded, I don't think it has to be fetched again. But I don't remember, to be honest. I'd have to go back and look through that codebase.

**Kevin Ball:** Interesting. And then with the server-side, if you render a deferred block server-side, does it just do the placeholder, or will it go through things, but then defer --

**Jessica Janiuk:** Yes.

**Kevin Ball:** Okay, so it just does the place-- interesting. Because some of this sounds a lot like how Qwik does things, where they're trying to sort of identify which sets of things have to be done up front, and which sets of things are essentially deferrable, or resumable in different ways...

**Amal Hussein:** Yeah, I mean, I would say this is very much in line with, I think, what Pavel and Alex were talking to us at last time we spoke with them, which was very recently, actually... So we've gone from almost no Angular content in a few years, to having two amazing Angular shows back to back... It's fantastic.

**Mark Thompson:** Let's go...!

**Amal Hussein:** Let's do this!

**Mark Thompson:** Let's go.

**Amal Hussein:** But no, they were talking about how essentially there's really -- well, you can kind of categorize all frameworks into two buckets: ones that do dirty checking, and ones that don't... And I think mark the speed gain that you speak of, going from 17th, to basically second, slash first at this point... First if you think about frameworks that have extremely wide adoption... Solid is fantastic, huge thought leader, but obviously, you can't compare the adoption of Solid and Angular. And so this paradigm shift where Angular used to do dirty checking, which is also what React does with the virtual DOM tree, you're able to kind of -- you do that calculation upfront to figure out what needs to be watched, and then any changes are very scapular. You're not going through your whole DOM tree, looping through and figuring out stuff... So that's pretty cool.

I was just curious, with deferred views, how did -- I mean, I'm sure, given the scale of Angular, people were doing this before there was kind of built in support for deferred views. So how were they doing this kind of lazy loading pattern before this kind of built-in primitive?

**Jessica Janiuk:** I think the short answer is a lot of custom complexity. It was a challenging thing to do. At best, the easiest thing people were doing was lazy loaded routes, which is something we've supported for a long time... But if anybody ever wanted to do any sort of deferred dependency fetching, there were a lot of barriers in the way. So it wasn't common. We'll just say -- that's probably the easiest way to put it. There were some utilities out there, but they were complex, very hard to follow, and had a really difficult developer experience. And we knew people were having challenges with "How can I reduce my initial bundle size?" and... We'd been, quite frankly, asked for something like this for a long time; it was just a matter of when we could actually prioritize it.

The whole thing that's -- like, Mark mentioned the speed improvements, but the new control flow, part of the reason why it's so much faster... Well, actually, one of the main reasons why, is because what we were doing before, we had these structural directives... If you're not familiar with Angular, we have this kind of directive system, and a structural directive... It's like a special type of directive. You can only use one per element. And if you know anything about Angular syntaxes, anytime you have to put star in front of an attribute on a component... \[unintelligible 00:25:41.08\] that's something called a structural directive. It was initially built that way because we wanted people to be able to build their own, and customize to their heart's content. That came at the cost of performance. It also came at the cost, for at least control flow, with some DX. Just in general, the DX around for loops, if then, and trying to do if then else was awkward.

\[00:26:14.05\] So the whole control flow improvements solved that significantly, along with making it native. Rather than having something that is injected as a directive, we were able to improve the performance significantly. We don't have to go through the whole directive matching process... Yeah. So that's a big reason why.

**Kevin Ball:** Yeah, you're getting to what one of my questions would be, is "Why now?" And it sounds like it was kind of unlocked by this change in control flow.

**Jessica Janiuk:** Yeah, that's where that performance bump came from. The control flow thing - we knew we wanted to do that for quite a while as well, and actually, we hadn't planned on doing that when we did... But as we were writing out defer, we realized that it would be ideal if we could use the syntax we were thinking about for control flow. And in order to do that, we didn't want to introduce defer as the thing that introduced this new syntax. People were going to be like "What is this new syntax? I've never seen this in Angular before." So we decided to pair it with control flow, so that it all kind of meshed and made sense... And I think that was hugely successful for us.

**Kevin Ball:** Are there other new functionality that have been rolled out in this sort of control flow way, or that take advantage of that new approach to thinking about it?

**Jessica Janiuk:** At least from the block syntax perspective, no. Not yet. But they will very likely be other things that take advantage of that block syntax. We've talked about a few, but nothing that has been actively prioritized yet that we would actually start working on. But I think the syntax is great... But the thing that I think is funny is that the \[unintelligible 00:28:00.27\] syntax that we're using, which is actually inspired by Razor syntax, was not our first choice. The Angular team really actually liked Svelte syntax, so we had originally gone with -- like, if you go back and look at our RFC for it, you'll see all the Svelte syntax that's in there... But our community actually preferred Razor, and we did a bunch of user research, and got strong feedback that the Razor syntax was more preferred, so we switched to that instead... By a razor's edge.

**Break:** \[00:28:34.25\]

**Amal Hussein:** So I guess maybe switching into kind of Angular support for server-side rendering... Could you tell us the story of - when Angular 1x was first rolled out was in the SPA revolution days... So it was pretty famously a framework for building incredible single page apps. And so when did that transition to kind of SSR support happened, and then - it seems like that's maybe something that the framework is really seriously reinvesting in now.

**Jessica Janiuk:** It's a universal story.

**Amal Hussein:** Yeah, pretty much. Literally, right? Yeah.

**Mark Thompson:** So if you think about the way technology works in general, there's this pendulum that swings over time, right? So when we all started writing web apps, we all did the same thing. We wrote our code, probably in Perl... If you did it early enough, you were writing your web applications in Perl, and then you were uploading to cgi-bin on some server via FTP. That's what we all did, because everything was server-side rendered. And then, like you said, when the Angulars of the world and other tools started this single page application, we were like "Push everything to the frontend." Then we were like "We're gonna forsake the entire server side rendering story. Everyone does this, right?" And then now, we're like "Well, the pendulum's swinging again. What if we were to go back?"

So for Angular, we've had server side rendering for a long time in terms of the platform. Jessica says it's a universal story... It started off as this thing called Angular Universal, which was a contribution from the community. Community members wrote Angular Universal, which gave us server-side rendering. However, it was limited server-side rendering. We called it -- this is Jessica's favorite term for this. We called it a destructive hydration, where we would render the website, but it'd be almost like a static site, with no functionality. Then we destroyed the DOM, literally erased everything, and then rerender it with Angular and attached event handlers, get everything working. But then, over the last year, we've introduced just a better server-side rendering story, hybrid rendering story, with static site generation, server-side rendering, and now hydration, where we have actual hydration.

So that's really changed the game for us. As we're continuing to move -- not move with the times, because we can't chase every trend. As a framework, we just cannot look at every single thing and say "Yes, we're going to do that. We're going to do that. We're going to do that." We have to prioritize things based on the needs of our users, and where the industry is going, but within respect to still serving our users and staying true to our identity as a framework.

So now we've looked at it and said "Yeah, it makes sense to do server-side rendering. It makes sense to invest the time to make hydration work. It makes sense to do things like defer." So all this stuff, it makes sense for Angular. And we truly tried to find a place where we can move things for everyone. So some places we're catching up, and some places where I think we're innovating.

**Kevin Ball:** Yeah, that destructive hydration was the story of server-side rendering for a number of years everywhere... And it creates that whole -- I don't remember what it was, but the uncanny valley of "It looks I can interact with this thing. Why can't I interact with it?" So something you said there led me to a question... So we are obviously seeing much more innovation in terms of number of frontend frameworks these days, and there's people like Solid, and - I keep coming back to Qwik, because I love their technology story.. And then Astro, who's really getting tons of adoption... All these different people pushing the boundaries in different ways. And a lot of it comes down to sort of thinking about "What are the core unsolved problems right now for frontend developers?" And I'm curious what your sort of take or perspective is on that, and particularly from the Angular community. What are the big needs that the Angular community has right now that are not being met?

**Mark Thompson:** \[00:36:12.25\] I'll tell you the first need... And we're working on this, but for the Angular community specifically there's a performance need that -- okay, let's go a little bit back in time. So we do change detection, which is figuring out which thing needs to be rerendered on the screen, and at what time. We do it based on this thing called zones. And I think Alex and Pavel probably touched on this already, but... This is still one of those core needs, right? We're doing this thing called zones. And it's really magical when you think about it. If I told you "There's a framework where you can just update your properties in your classic component, and we will figure out what needs to change", that would make you super-happy probably. Because think about the developer experience around that. There is no use state, there is no set state, there's nothing. You just change stuff, update, and we'll handle the rest. We thought it was a good idea, too. We were like "Yeah, this is good."

**Kevin Ball:** That's that's the premise of all these purely state-driven UI frameworks. And they're incredible in theory.

**Mark Thompson:** In theory. Exactly, in theory. But at scale, guess what we've found out? It becomes problematic at scale. And then a lot of the Angular community -- we have very large customers. Large airlines, large enterprises, huge customers that are like "Hey, at scale this kind of sucks a little bit. Not gonna lie to you, this kind of sucks." And so that's why our reactivity story is starting to become this may focus, with the whole signals thing. Signal-based components, where the change section is based on those signals' model. So that's meeting our big user need, because again, people are like "Hey, we love Angular, we love the fact that you can -- out of the box, we give you everything." You don't have to go search for a router. Why? Why are you searching for a router? You don't need to spend no time on that. You don't have to go searching for lazy loading; you don't need to spend your time on that. We're not going to tell you do anything like that. We give you so much. But then that came at a cost with some architecture decisions that we thought were good in the beginning, and now we're finding what the limitations are.

**Jessica Janiuk:** I can probably add to that in terms of like part of that is that our learning journey along the way has actually been a bit of a challenge for new people coming to Angular... And a lot of the architectural decisions we're making right now kind of fall into us being aware that that learning journey is a challenge, because the decisions we made before are not necessarily easy for new people to come pick up. And so things like zones, things like our control flow situation. But signals was a big part of that too, because we know that a lot of people come into an existing Angular project, and they see all this RxJS syntax that can be - let's be honest, RxJS can be really confusing when you look at how it's written in a lot of these applications. And oftentimes, they're writing it that way in order to try to be as performant as possible. But in doing so, it's harder to follow... And it can be a little difficult... And by "a little" I mean a lot difficult for some people who want to come in and possibly learn it. So it maybe turns people off to the idea of spending time with Angular. So I think improving that user learning journey has been a big part of shaping the direction that we are going as a framework.

**Kevin Ball:** I mean, a lot of this, it strikes me as sort of the classic - I think of it as an Adobe problem, where you have these expert users who are trying to do really complex things, and you support them really, really well at the cost of your product, or in this case framework, becoming much harder for beginners to adopt and understand. And Mark, to your point, Angular has always been the batteries-included framework. They give you everything. And there are pros and cons to that; that's often -- or that hasn't been the JavaScript community's approach to many things, sometimes to their detriment... But definitely, it has made Angular this kind of choice that often makes sense if you're in an environment where you don't want to be making all those choices, you just want a standard. You want a norm, you want people to be able to come and go and understand how the pieces are going to work, like a large enterprise, or something like that.

\[00:40:20.07\] I do think there is this interesting balance that you're talking about, of supporting those users and their needs while making the onramp easier for folks. And I think there's something -- there's a whole thought process there I'd love to dig into... But before we go down another road, Amal, what did you want to cover with Mark?

**Amal Hussein:** Yeah, it really dovetails very well into what you just shared, Kball... Because for me, there's this interesting design principle that I came across while working on an MIT Scratch project... You know, there's the philosophy of when you're designing an API, you should kind of think about low floors, so that it's easy for everyone to get started. You think of like wide walls, so that you can do lots of different things with it... And you think of high ceilings, because you don't want to hold back power users. And so Angular is this interesting framework where there's this huge legacy, lots of enterprise users, and there's also just people who are looking at things that are happening across the web, I think we're seeing a lot of simplification of APIs... There's just a lot of swinging back to simplicity, right? I think signals is also just feeding into that story very well for Angular... And so it's really interesting to hear you talk about these tensions. And for me, I've always, at least in the recent years, have thought of Angular as THE framework for enterprise, doing proper enterprise JavaScript development, in the sense that if I'm working on a project that has multiple engineers, over multiple years, and I really just don't want to have spaghetti code at the end, I'm going to opt that we use Angular, actually... Because there's just so much convention.

And for me, this platform - I feel like Angular is a platform, and I'm just curious if you both think about it in that way, where it's, just like you said, Mark, there's no need to go look for a router, there's no need to look for... Even when you have new releases, you guys have code mods that do a lot of automation for you, and give you that tailwind. There's modules for the modules. There's everything you could think of, and then some right. The kitchen sink framework is what I think of with Angular. And I don't know, framework feels like the wrong word in that sense. It really just feels like a platform. I'm curious to hear from both of you on that.

**Jessica Janiuk:** Yeah, I mean, we're definitely viewed as the opinionated framework. I don't know about platform/framework... To me, I think either applies. I definitely know that one of the reasons that we are so strong in the enterprise space, it's because of the fact that we don't break people. The whole thing you were talking about with code mods, or - we call them migrations... Essentially, we have to be very careful with breaking changes, because we've made that mistake in the past. I feel like Vue is starting to learn this exact same thing. There was a recent blog post about the Vue 3 transition and this exact sort of situation. So it's just something that we learned in the Angular 2 days.

**Kevin Ball:** Learned through pain...

**Jessica Janiuk:** Yes, exactly. Exactly. I think the fact that we also have Google actually running thousands of Angular apps is a huge benefit for enterprise users as well. They know that "Hey, Google uses Angular. That means it must be a really safe framework to use if I want to make sure that my uptime is going to be reliable, I'm not gonna be broken..." And we have to make sure -- Google's famously a monorepo, so we can't break people. And that means that we can't break you, really, either.

\[00:44:13.29\] So we put a lot of effort into that, to make sure that if we're going to make something that is a breaking change, we find a way to migrate people. We see it as not really having a choice in that. We have to make sure that people are still up and running. And if we don't do that, we end up running into the problem of leaving people behind, which is something that is not within Angular's worldview. We don't leave people behind. It would be such a shame if in Angular 16 we released hydration, and it'd be years before anybody could actually use it. So yeah, it's a big factor in how we think through things.

**Kevin Ball:** I think something really interesting there is, at least right now -- very commonly, when folks have this very sort of bring people along mindset, it results in them being very conservative and not making big changes, and not trying new things too much. And it's part of sort of the natural stagnation curve of technology things, where early on you're doing something new and innovative, you don't have many people, you iterate really quickly, and then you get something that works, lots of people adopt it, and you slow down, because you have to; you can't break everyone. What seems interesting to me here is that based on what I'm hearing both the conversation we had before, and this conversation, y'all are starting to move fast again, but still with this mindset of introducing new capabilities without breaking people.

**Amal Hussein:** Move fast and don't break things. Wow. It's like, who knew...?

**Mark Thompson:** Who knew...? And so here's where I think that comes from for us. We learned such a hard lesson between AngularJS 1.x and then Angular 2. We learned such a hard lesson. And I think we just don't want to go back there. And then over time, as you practice -- so think about practicing anything that's challenging. So making a souffle is pretty hard at first, right? You get a regular cook in there, or somebody who doesn't really cook, and you say "Make a souffle", they can't really do it. But if you make souffles every day, what happens? You get really efficient at doing it, and then you learn techniques to make the process better. We have learned over time how to make optional upgrades as a part of our \[unintelligible 00:46:30.03\] how we can move at this speed. Because think about all the things that we've talked about in this conversation; everything is opt-in. Everything that we've talked about is opt-in. Even the one-line change to make hydration work in your application is an opt-in, and it's only one line. We've just gotten really good at that; that has become a part of our core ethos of how we develop software on the Angular team, and we just got really good at it. That sounds really arrogant. I'm not talking about myself, I'm talking about the team, okay? So I can say this, because I really do believe in the work that we do, and the people who do this work. And so that's given us a really good opportunity.

So if you also think about... We are able to release major features in minor releases, because of the way that we work. As of 17.2 -- so in React we have props. Props are immutable, and that's how you pass in values to components, to customize your components. We have something called inputs. And inputs were something, right? They're kind of mutable, not supposed to be there, then you could \[unintelligible 00:47:30.16\] if you want to track any changes... It was just really weird, right? And then people had lots of workarounds to handle it. We just released signal-based inputs in Angular 17.2. That is a major feature in a minor release, that you get to opt into when you're ready. As long as you stay up to date with Angular, as you're ready, you get to opt into it. And we'll do the same things when signal-based components are ready. You'll be able to opt into it. If you go to Angular, let's say Angular 30, whenever - and we don't give out dates for releases, because we release things when they're ready. That is just how we work. So whenever it's ready.

**Kevin Ball:** \[00:48:10.28\] A whole bunch of software devs just got real jealous...

**Mark Thompson:** It is a privilege that we get to work that. I will say that. It is a privilege.

**Jessica Janiuk:** Yeah... I think one of the things that's also helping us move faster is the developer preview concept. We have started utilizing developer preview for all of our new stuff. Typically, what happens when you release a new API, people start using that API, and now if in your initial release you did something wrong and you want to change it, you're stuck with waiting on a deprecation cycle. So you have to deprecate the original thing, create the new thing, give people time, so that they can switch over to the new thing, then remove the deprecated thing. We've created this thing called developer preview, that we've started using for the past couple of years. And what that label means is it's basically like "This is a solid feature, it's developed, but we reserve the right to make breaking changes until we remove dev preview from it." It doesn't mean you can't use it in production. For example, hydration was developer preview for a whole major version, and people were using it in production. What it means is "We may make breaking changes to this API. We probably won't, but we may. So just be aware of that."

And I think because of that, we've been able to put these things out there, get a sense for what people like and don't like, see what's working, what's not working, make quick changes before we announce it as like "This is stable now. You can use these APIs as is." It's helped a lot.

**Kevin Ball:** So I love this, and it feels like -- and there's actually a lot of similarities. Mark, you were talking about not waiting for major releases to introduce major features, it reminded me of the Ember.js approach that they used back in the day, where they would actually release all of their new features in minor versions; major versions were only for when they were getting rid of something, where there was something that wasn't going to work anymore. So they would deprecate, they would do things, and then at a major, they would actually cut out something that had been deprecated for several cycles, or something like that. And it had some of these same, very similar effects of like, you're only introducing backwards incompatibility in those majors, but you're giving people good stuff they can try, they can opt into.

Jessica, I love what you're saying about kind of the way that you've managed to separate the fast iteration exploratory piece, and getting feedback from "Okay, this is something that you can count on and build into your everything." And Mark - yeah, I would love to hear a little bit about your journey to getting to where you are today, and where you drew those inspirations, what you tried and didn't work... What did that look to get to this state, which once again, feels very much like Angular, this old, steady, reliable workhorse is now innovating at a pace to keep up with the new guns?

**Mark Thompson:** Yeah, a lot of that comes from the fact that we are an evidence-driven team. We look at evidence, we listen to feedback. When we put out a survey, for example, we read the feedback and we analyze it.

**Kevin Ball:** What?!

**Mark Thompson:** I know, it's bananas that we actually do that. And we listen to the community. And one of the things that we heard a ton about - Jessica mentioned this - it is so hard to learn Angular. We've heard that over and over again. The examples are not good, documentation is too dense, to terse... So then we come up with -- my colleague Emma Twersky led this effort for Angular.dev, which is our new website for Angular developers. New features in browser tutorials, brand new tutorials written from scratch.

\[00:51:48.27\] Now, my background is in education and engineering. So I worked as a senior software engineer for many years, but I also taught computer science at universities. And one of the things that I learned is how people learn. And here's what developers are not good at - we're not really good at teaching, because we take so many things for granted, for example, that we understand; we'll throw out concepts, we'll just say "Well, this is simple. Simply do this. Just do this." None of that means anything if I don't understand what you're talking about. Nothing is simple for me in that way.

**Kevin Ball:** All that context we've built up over the years...

**Mark Thompson:** Exactly. So then we went back to the drawing board and said "What does a new learning journey look like?" So just continue to go along with this... We're innovating in features, so we have to innovate in what we train developers. So we just started doing all kinds of stuff that. So we looked at the new learning journey, and then one of the critical things we wanted to do was let you build the examples in the browser, that you could go through, spend a couple of hours and get a fundamental breakdown of how Angular works by trying things. Do you remember the website codeschool.com? I loved Code School. I loved that work. I think they set a standard that everyone should follow. And I know that we drew inspiration from those types of things, too. Being able to learn and do in the browser; learn by doing. That was their big thing, Learn by Doing. And so we've adopted that for our learning journey now.

**Amal Hussein:** That's awesome. I mean, you want to basically reduce the friction. You don't want someone focused on learning how a bundler works, and how to get TypeScript to compile. You want folks learning Angular. You want them to learn how to use these APIs, and play around with them, and reduce the friction. It's kind of nice, because once you're ready to take on that friction, have at it. But it doesn't have to be the first thing that you deal with when you're trying to learn this thing. And I'm so glad to hear that... And great shout-out to Code School. It was such an innovative leader, because it was doing that stuff over a decade ago.

**Mark Thompson:** You're right. So long ago. And I just want to give them so much love and support, because when I was making that shift - because I was an enterprise Java developer for years.

**Amal Hussein:** I apologize. Just kidding, just kidding... \[laughter\]

**Mark Thompson:** Enterprise Java Beans, and facades, and all these patterns, and Spring, and Hybernate, and all these words. But I just remember, when I was switching to frontend, I went to Code School. I literally went to Code School. I paid for the subscription, and I would do as many courses as I could, because it was such good content. I actually dreamt of being an instructor on Code School someday. But then I think they sold, and then it no longer exists.

**Kevin Ball:** I love the way you're kind of leaning into that learning journey... And it's something that I think the JavaScript -- you as a batteries included framework have an advantage there, that a lot of things in the JavaScript community don't have. It reminds me back to when I was first learning Ruby on Rails. And Ruby on Rails was a server-side thing, but it had that same kind of batteries-included "We'll do everything." And what that lets you do is you can focus on a thing at a time. You can follow a recipe, and say "Okay, right now we're focused on this thing. How do in that case the models work?" Maybe in Angular, how do templates work? And everything else will just work. You don't have to customize it, and you get a functioning application. And you have that story with Angular, in a way that -- in React I might just focus on a thing, but then I need Create React App, or I need Next, or I need something, and all these different things before I can get to something that I can show and play with.

**Mark Thompson:** So before I was on the Angular team - this is a true story. I built a company as a startup, and I did not make any money, I did not get rich, hence me still working, right? No successful exit. I guess I got a job at Google as an exit. So let me explain. I was teaching React, and I was coding in React, and then I was like "Oh, let me use React Native to make my mobile app." And the reason I actually stopped using React Native was because I started to have to do research on the routing situation. I was like "So do I use Airbnb's router? Do I use the --" I think React Training had a router... All these different orgs had routers, and I'm like "Hey, but if I use one of their routers and a bug happens, who's responsible for it?"

\[00:56:06.16\] So then it made me literally switch to a different tool. Now, that is not a slight at React, because they've done a lot of very smart things... But it's just that that problem is a real problem for developers, especially when you have the experience to kind of even think like that, like "Who's responsible for this plugin if I'm relying on it for a major part of my application and support for that?" So it was just like "Yeah, I can't." So when you get to something like Angular, where everything's included, I think it just makes that story easier for you to get started. You can just start building right now. You just build everything you need right now.

**Amal Hussein:** Yeah, absolutely. I definitely can't +1000 that Angular has a huge advantage there, the batteries included... It's such a tailwind for developers. Just to so we're not pooping all over React - we had Dan Abramov on the show last week and he shared some interesting context on this actually, which was that the way Facebook was using React wasn't initially "Oh, everything in facebook.com was built off of React." They were using it in parts of their application. And I remember when React first came out, it was like "You can just add it to anywhere on your page. It's okay, add it to this legacy Backbone app, add it to your Angular app, whatever", you know. So that was just the way it was being used. And so the router really came from the community, because the community was like "We love this tool. We want to build everything with it." And then Create React App came to smooth over the paper cuts of all the tooling and all that other stuff. So interesting and a very different evolution, but I think it speaks to just how Google's using Angular, versus how React has been used internally at Meta. Very different ways.

**Kevin Ball:** Well, and I think - really quickly; we talked about the pendulum effect. I think this is another place where we see pendulums back and forth... And it's because each approach has benefits and has drawbacks. And depending on where you're at - pick the one where the benefits are important to you, and the drawbacks aren't a problem.

**Mark Thompson:** That's right.

**Kevin Ball:** But since we were talking about learning, I think the batteries-included can be very helpful in that learning journey. Anyway, Jessica, you were gonna say something...

**Jessica Janiuk:** Yeah, I think it's interesting, because the fact that Angular included everything used to be seen as almost like a detriment. Everybody was like "Oh, React is so much more lightweight. I have so much less to learn." But now things have pendulum-swung the other way, and now people are like "Well, React... There's just so much to it. And now I have -- do I have to learn React? Who owns react? Do I have to learn Next? Where do all the tools come from?" And you're starting to see a lot of these articles, like "I don't know how I feel about React anymore." And just like Mark, I worked in React also before joining Google. So yeah, we have really come full circle to the point where now this is considered a strength for Angular.

**Amal Hussein:** Absolutely. Angular is on the right side of the argument right now, you know? Lucky Angular. \[laughs\]

**Mark Thompson:** We're lucky for right now, but then there'll be a time where people are like "Man, Angular sucks again." You know what I mean? So here's the thing --

**Amal Hussein:** That's just web developers, Mark. I mean, that's just the way it rolls.

**Kevin Ball:** That's just humans. We all do this.

**Amal Hussein:** It's just the big pendulum swing, you know?

**Mark Thompson:** Well, so two things I just wanted to throw in real quick. So Tom Hanks was in this roundtable with all these other actors, and he goes "One thing that I learned in my career is that this too will pass." So it will pass that we are -- like, right now we're having a really great moment... This too will pass. We had a really bad moment - this too will pass. Same thing for React for everyone. This too will pass. If you stay in the game long enough, you will just be up and down. That is just the way that it goes. And we have to kind of like give a lot of grace.

And the second thing is this - even though I said "Well, my personal experience was...", I can still objectively acknowledge that as a web developer you are in such good hands with almost anything that you choose. Because everything is great. Literally, everything is great. React is great. Angular is great. Vue is great. Svelte is great. Solid is great. Red -- I think it's called Redwood, or something like that, that's like --

**Kevin Ball:** It's a React full-stack thing. Yeah, yeah.

**Mark Thompson:** \[01:00:06.08\] Yeah, they're doing great stuff. HTMX is doing great stuff. Qwik. Everything is great. So the only mistake that you can make as a web developer I think right now is not choosing something and getting to work, right? Get to work and build something great.

**Amal Hussein:** Amen to that. Really, just to click into this complexity pendulum swing a little bit - and that's a great point, Mark... How did we get here? If we just take a step back. So we got here because folks initially just wanted flexibility, but then flexibility comes with its own trade-offs, right? And not only that, the all-in-one model; Node versus Bun is maybe a good example here, just to kind of shift out of the frontend frameworks. Node is this Lego Land, composable, building block kind of ecosystem... And Bun is like "Oh, we're gonna just wrap it all in one." But the difference though is that the maintenance burden for something like Bun is very different now than maintaining Node, just from an implementer's perspective. And I don't know, there's power in hedging your bets with open source, pulling for many different things, and hedging your bets on "Okay, this community isn't so burnt out yet, so I'm gonna use this tool..." But going all-in-one is putting all your eggs in one basket, and you just have to make sure that that ecosystem has the -- that they're going to be able to support all of those eggs, right? So those are the trade-offs that you're typically evaluating, and it's really you just have to optimize for where you are as an engineering team, how much staff you have, how much bandwidth you have... There's so many things that you're optimizing for... But definitely, each of those things comes with a trade-off, all-in-one versus choose your own adventure.

**Mark Thompson:** And you said between Bun and Node. Think about WebPack. WebPack was massively composable. You can literally find a plugin for anything, and now we look at a WebPack configuration file and it's like, scary hours. I don't even know what to do, literally, because it's so flexible.

**Amal Hussein:** Right. And that's the other -- going to the deep end of the flexibility, WebPack is a great example to use. But anyways...

**Jessica Janiuk:** Yeah, with all these eggs that we have out there with the framework, really, whatever framework you pick, the sunny side is up.

**Amal Hussein:** \[laughs\] Jesus... Okay, for those who don't know, Jessica, she's literally the punmaster.

**Jessica Janiuk:** I'm the Punderwoman.

**Kevin Ball:** I do remember when I first learned JavaScript, and even jQuery was a revelation. So if you're learning JavaScript for the first time right now, or you're getting into web development for the first time, there is just so much goodness out there. And from an individual perspective, if you learn one of these frameworks and you go deep on it, and it turns out that you get a new job where that's not the framework of choice, many of the underlying concepts will transfer. Syntax changes are easy. Understanding what is a router, understanding component architectures, and how to design your reusable components, all those things - those things are skills that you can learn in any one of these frameworks, that will carry you through all of these frameworks.

**Mark Thompson:** Mm-hm. That's good point. Excellent point.

**Kevin Ball:** So we're getting close to the end of our time together... Are there any other Angular things that y'all want to share? Or - I'm kind of curious, you mentioned something in the pre-show about a band?

**Jessica Janiuk:** Yeah. So I think Mark and I might consider starting a band together. It would be Mark Texan and the Punderwoman, maybe... I don't know. We're thinking about that. Mark has some other ideas for the name of the band.

**Mark Thompson:** \[01:03:52.04\] No, I like that name. I think it's a good name. So Jessica and I, we worked so well together, and our relationship has blossomed so much since we started working together, just from like common things -- we both are into videography and photography, and then found out that for some time we both lived in the same neighborhood, didn't know, at the same time lived in the same neighborhood, then we moved again when we lived in California, and we lived in the same neighborhood again, unintentionally. And then all these things happen. And so anytime I get to work with Jessica it's just a real treat, and I love when she gets to cameo in videos.

Here's a fun thing about Jessica. She's so busy working on framework stuff, but I'm like "Hey, there's a video opportunity. Would you to do this thing?" and she always makes time. And her videos are always amongst the most popular whenever we post them, because she's so creative and so funny.

**Jessica Janiuk:** Thank you, Mark.

**Amal Hussein:** That's adorable.

**Mark Thompson:** It's true. Alright, now say nice things about me. Go ahead. \[laughter\] Just joking. Do not.

**Jessica Janiuk:** Mark is certainly a colleague. \[laughter\]

**Amal Hussein:** Can we do me next? Just kidding.

**Mark Thompson:** Okay, that was good. See, this is what I was saying; Jessica is really funny.

**Amal Hussein:** She's hilarious. She's too funny for her own good, honestly. Jessica is not who you want to have on a live CNN broadcast where they're talking about some very serious subject, because I can't count on her to not make everyone laugh...

**Kevin Ball:** Either that or she's exactly the person you want... \[laughter\]

**Mark Thompson:** Right. Right.

**Jessica Janiuk:** I'm the person that people would call in and complain about, because they'd be like "This is a serious topic, and he's making all these jokes..." \[laughter\]

**Mark Thompson:** Right, right.

**Amal Hussein:** You know, somebody's died, and she just comes up with the perfect pun, and then just everyone breaks character... Oh, gosh...

**Mark Thompson:** Do not encourage her. Do not encourage her.

**Kevin Ball:** Alright, wait, so to close out then, what is your best JS Party pun?

**Jessica Janiuk:** Oh, gosh... Here's the problem. When I'm put on the spot, usually my brain goes... So I end up running into this problem of like "Come up with a pun", and I'm like "No." And then two seconds later, I'm like "Oh, here's one." And then it's party time. So yeah, that's my best \[unintelligible 01:06:02.13\]

**Amal Hussein:** That was almost a pun.

**Jessica Janiuk:** Yeah, it was almost a pun.

**Amal Hussein:** That was actually pretty good. I mean, hey, look, that was a pun. Okay? Points for Jessica.

**Jessica Janiuk:** Not my best. Honestly, not my best.

**Amal Hussein:** So what's one thing you wish everyone could know about Angular, that you feel is either a misconception, or just either something that people just don't know about?

**Mark Thompson:** Oh, I have one ready. Angular is not as complicated as you've been told to get started. We had a really bad tutorial...

**Kevin Ball:** Go to Angular.dev, right?

**Mark Thompson:** Yeah, go to Angular.dev. We had a really bad -- I won't say bad tutorial. We had a really complex a tutorial, that left a bad experience with people. We've since then moved on past that and have a great tutorial that is really user friendly, and really even beginner friendly. Even if you don't really know a ton about web development, you can follow it. So check out Angular.dev/tutorial.

**Jessica Janiuk:** I think the thing that I would say is that often we hear "Oh yeah, I used Angular years ago, and haven't touched it since." And that is the impression that people still have, because first impressions matter... But Angular is much different now, and there's quite a lot to offer, and that you probably will really like. So give it a second shot since then, and see what you think.

**Kevin Ball:** Amal, do you have any things you'd like people to know about Angular?

**Amal Hussein:** I just feel like the team should have really considered changing the name of the framework, because it really is so different than the Angular that people knew... I feel like after the 2x, or maybe, I don't know -- it should have just been called something else. I it went from AngularJS to Angular, but that would just be my unsolicited feedback that's probably bad...

**Mark Thompson:** No, it's good feedback. It's good feedback, because when --

**Amal Hussein:** It's so different. It's so different.

**Mark Thompson:** When we talk internally, I always tell people - we did the same thing that the Wii and the Wii U did, and Nintendo made this mistake, when people didn't know that Wii U was something different... We literally did the same thing. And this is a hard lesson that -- if there's ever a re-something, we have to change the name. It has to be a new framework if it is a new framework.

**Kevin Ball:** I'm going to say though, Google and not changing names - it feels like there's a... That's got to be a, if not a first, at least a landmark.

**Amal Hussein:** Yeah. Angular is probably Google's longest-standing, most successful product outside of Google search, if I had to guess... And G-Suite. Let's be real, the legacy is amazing, you know?

**Jessica Janiuk:** No comment...

**Amal Hussein:** No comment, okay. \[laughs\]

**Kevin Ball:** Alright, I think with that we've gotta shut this ship down. Alright, thank you, Jessica. Thank you, Mark. It's been delightful. Amal, as always, and let us roll... I'm Kball, and this has been JS Party.
