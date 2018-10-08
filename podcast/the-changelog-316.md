**Jerod Santo:** Oh yes, the sound of those beats means it's time once again for JS Party. Now, if you watched The Office, you already know that the first rule in roadside beet sales is that you put the most attractive beets on top; the ones that make you pull the car over and go "Wow, I need this beet right now." Those are the money beets. Special thanks to BMC (Breakmaster Cylinder) for helping us put the money beets right up top.

My name is Jerod Santo and I'm happy to be here today. We have Suz with us. Suz Hinton, say hi.

**Suz Hinton:** Hello! Coming to you from sunny Hawaii.

**Jerod Santo:** Suz, you're in Hawaii... I just got all jealous. Please tell us why.

**Suz Hinton:** I'm very excited. This is the first day of my vacation, so I'm gonna have a Javascript party with you all, and then I'm gonna go and have a party on the beach.

**Jerod Santo:** That sounds better than what I'm going to do next, for sure...

**Suz Hinton:** \[laughs\] I'm very excited. I haven't gone on a big sort of travel vacation since 2011, so I'm so freakin' excited.

**Jerod Santo:** Very cool. We appreciate you joining us from Hawaii, and waking up extra early to kick off this party with us... But you had to be here for John Resig, so... Special guest today - John Resig. You all know who he is. He's here to talk about GraphQL, why he's excited about it, why he thinks it's the new REST... John, thanks so much for joining us.

**John Resig:** Thank you so much for having me.

**Jerod Santo:** So let's just get a little bit of a catch-up with you and what you're up to these days. We know you've been working at Khan Academy for a while now... Is that still your day job? And what have you been up to?

**John Resig:** Yeah, so I've been at Khan Academy now for a little over seven years; I'm still working there. These days, my role is as a front-end architect, so thinking a lot about the systems that we're building, thinking about the hard problems like what sort of things do we need to have in place to ensure that we can write stuff quickly and be scalable, but then additionally working on things like our design system, and stuff like that.

So it's pretty wide-ranging, but it's all very front-end focused. I really enjoy it. I think being there seven years is probably a testament to that. I really, really like it.

**Suz Hinton:** It must be so cool to see how Khan Academy has changed as well, in both product and technically over the last seven years. I think that's really a wonderful opportunity to have, when you're so happy somewhere that you actually get to really be there to influence it to evolve, but also just watch the audience change over time, too.

**John Resig:** Absolutely. When I started, there was I think three -- I was the third engineer, and the whole team was incredibly small. I forget how many users we had at that point, but at this point now we have tens of millions of users every month, from all over the world, so the challenges of scaling up from those tiny beginnings up to where we are now - it's been very monumental.

I really enjoy, at least for myself, the technical challenge of working on these problems, but also I really appreciate the impact that we're having... Being able to bring educational materials to people all over the world for free - that's something that I feel very good about.

**Jerod Santo:** A little bit of insight into some of that impact, at least anecdotally, with myself and my family - we're homeschoolers, and we use Khan Academy extensively, so we're very grateful for it. It's been instrumental in teaching our children, so thank you very much for all your work there.

**John Resig:** Fantastic, I'm glad to hear it. You're very welcome.

**Jerod Santo:** Seven years is a long time in internet years; that's eternity. It must be very satisfying to keep you there that long.

**John Resig:** \[00:06:42.17\] Yeah, it definitely is. I think it's nice because as Khan Academy has grown, I certainly feel like I've grown a lot, too. I think one of the reasons why I decided to work at Khan Academy in the first place - and this might come up later, but when I joined Khan Academy, I stepped down from jQuery; I left the project. I left it in good hands, but I deliberately wanted to move on, to be able to work on a product, actually getting to ship something and get it out to users, and have that sort of flow and that process... So that's something I've been really just enjoying and really relishing.

We have excellent teams, really good designers, engineers, front-end and back-end, QA people, and being able to ship really high-quality stuff is -- I don't know, it's a lot of fun... So that's something that -- I feel like we haven't always been able to do that; certainly back in the beginning it was much more loose, and everyone had to do everything, but now we're larger(ish); we're still less than 200 people, but we're certainly a lot more professional and we're hitting things that at least I'm very proud of.

**Suz Hinton:** That's the dream.

**Jerod Santo:** So John, we have you here today not to talk about jQuery, but to talk about GraphQL. Khan Academy was an early adopted of React, and now you dove head-deep into GraphQL and you're so excited about it that you have a GraphQL Guide which seems to be in progress, but has some meat there book that you're writing with Loren Sands-Ramshaw. Tell us the back-story and the introduction, which we'll link up in the show notes the Introducing the GraphQL Guide post... You give kind of the insights into how GraphQL was exposed to your team there at Khan Academy, and then some of the transition of getting into it. Can you tell us that story?

**John Resig:** Sure. At Khan Academy I guess we take a very different approach to architectural decisions than maybe most organizations. My role - I'm a front-end architect; I'm THE front-end architect, but I don't dictate anything about what we do or what we should be doing, what technologies we should be choosing. I sort of see my role as a facilitator.

If people are interested and excited about things, my job is to help them define it and refine it, and get it to the point where we can start using it. For GraphQL, that was a thing that had come up in a number of our front-end guild meetings. We have these bi-weekly discussions with all the front-end folk there and we get to talk about things we're working on, or interested in, and GraphQL had come up a number of times. People had gone and seen different talks on GraphQL, or read blog posts, and started to experiment with it in side projects... It was at that point that we were like, "Hey, this is pretty interesting."

I think early on we were looking at a number of different technologies and GraphQL seemed interesting. Relay and then Apollo came later on, and all these different things... And it's like, okay, how do these play in together, how are these interacting, and how is this compared to what we're doing right now with our REST APIs?

At least for us - we have a lot of REST APIs, both public and private, and maintaining them was a real project, and it was really hard for us to kind of understand the data requirements that we had and that existed across all these different APIs.

So we knew we were kind of interested in GraphQL, but we needed to kind of understand whether or not this was going to work for us... So what we ended up doing was a number of experiments. We hold hackathons and Khan Academy, so during the hackathons we did some experimentation with trying out GraphQL on parts of our website. This was not intended to ship; obviously, it's a hackathon, you're just doing something to see if it works... But in that process, we were like "Hey, this is pretty cool."

\[00:11:08.11\] So the next phase of that was I was on the classroom team last year... The classroom is all developing products for teachers and students, in a classroom setting. And in there, we were gonna be redesigning and redeveloping a number of our products, and I realized "This is actually a really good opportunity to experiment with using GraphQL, because since it's a greenfield opportunity, we don't need to be relying upon existing REST APIs necessarily (we would be writing new ones anyway), so let's use this as a chance to define a GraphQL architecture, implement it, and start using it for these new products."

In doing so, it ended up working really well. As we were using this, we were just like "Hey, this is amazing. It is so much easier to use." Then we in the classroom team started talking to other teams, and we were like "Okay, this is actually really legitimate", and we started to get other teams to kind of like start experimenting with their architectures.

Then eventually, after a few months of this, we all kind of decided that this is actually what we wanna be doing... That GraphQL is just fundamentally so much better than what REST has provided for us. So we were willing to put in the hard work of moving over, rewriting a lot of our APIs, and all that. This is still very much an ongoing process; we sort of have a mandate now in place where we're using GraphQL for all new things that we're writing, and we're starting to convert existing things over to use GraphQL... But it's gonna be a lot of work... So we'll see. I don't know when the day is gonna arrive that 100% of our RESTful APIs are gone and we're using GraphQL for everything.

I mean, frankly, we're not even to that point yet with React. We still have some pages lingering somewhere on our website that we're using jQuery, and stuff... the process of cleaning up technical debt is a long one, but yeah...

**Jerod Santo:** About how many REST APIs are you talking about here? Give us an order of magnitude - hundreds, thousands, dozens...?

**John Resig:** I think maybe a hundred(ish) would be my guess, in stuff that is both public and private.

**Suz Hinton:** So it feels like the GraphQL guide is aimed to be that missing manual that you didn't have when you went through this with Khan Academy... Which is awesome, because now other people can learn from this journey that you've been on, and I think it's also really refreshing for you to say that "Well, this is an ongoing journey..." You know, because a lot of people feel that they have to do everything all at once, and that can be really scary.

I really appreciate that you wanted to go back and actually then create this missing manual. Is that sort of the thought process you had?

**John Resig:** Yeah... I think it's a couple things. One is having a missing manual -- and then there's a couple of things, which is that I think when we started using GraphQL versus now, there is just a lot more documentation and tool now than a year and a half ago... Which is the reality of pretty much any new technology. But additionally, I was very interested in getting people excited about this technology... I was, and am.

\[00:14:59.08\] I wanted to not only have there be a good resource for people to use, but also just that -- I feel like there's some work to be done to even convince people that GraphQL is interesting in the first place. I'm convinced, but yeah... So I think part of the \[unintelligible 00:15:20.13\] is explaining and looking at REST APIs, looking at GraphQL, and looking at the benefits that GraphQL provides. So yeah, that's where my heart and mind is at.

**Jerod Santo:** It's always interesting seeing large software companies adopt these new technologies... Especially when Facebook came out and announced GraphQL and released it, they had already had a successful track record with React, but then they also had Relay, and they wanted everybody to use Relay; that hasn't panned out quite as well, but with GraphQL I think you had early signs of success when GitHub decided that GraphQL was worth them investing in, and now we see Khan Academy - especially yourself, John - writing a book about GraphQL. That's going to, I think, sway a lot of people, if they were just saying "Yeah, no big deal", to take a look at it. Is that some of your intention, and then why would you necessarily want that to be the case - so that it has a brighter future?

**John Resig:** I think one of the things that has been most changing for me - and again, I will say that I just have an extremely heavy front-end bias in everything I do... \[laughter\] I mean, perhaps understandably so... But to me, GraphQL is the most front-end friendly API mechanic you can have.

So at least for me, the more GraphQL that's out there, the easier it's gonna be for developers - front-end developers, especially - to interact and use different APIs.

When we use GraphQL and we're developing new products, the rate at which we can iterate and prototype is so much faster than with REST API... At least with how we had our REST APIs designed. You would specify your data requirements on the server side and say "Okay, we need to get these fields from these models, and pass them up into a JSON object and send it up to the client..." Whereas with GraphQL, you're defining your schema; you're saying, okay, this is your model and what properties exist on it, and then on the client you've specified, and it completely changes everything.

Now, instead of having to do some server-side -- if you want a property that's missing, you have to change some server-side code with the REST API, then go to the client, and change the fields you're getting... Whereas now with GraphQL you can just do all on the client. Since everything's been specified in the schema, you can just say "Hey, I need the username here. I wasn't getting it before, but now I want it." You just add it in, and there it is. In that way, your ability to iterate is so dramatically improved, and you can just get stuff out very fast... And that's great for us - we're working with designers and we're doing a lot of testing in schools, and we can just try stuff out, get it out there, experiment, get the results back and just keep iterating again and again. So yeah, I think that's something that's worked out very well for us.

Break: \[00:19:00.21\]

**Suz Hinton:** So as you've been doing these iterations, has there been anything that's popped up that you didn't expect to run into with GraphQL? ...such as the way you write schemas, or even just how those queries end up connecting on the back-end... Or is there any sort of little polls that came out of it that you could share with us today?

**John Resig:** I will mention that at least at Khan Academy we -- I think we're probably different from most shops that would be using GraphQL, which is that our back-end is on Google App Engine, and we use Python for our back-end. I suspect that probably a lot of people who are using (or would end up using GraphQL) are gonna be probably with a Node.js back-end of some sort... I don't know what platform they were running on.

So yeah, I think some of the things that we learned were sort of about the differences in server-side implementation... And I think there may be some things that we are maybe a little envious now of. I've been seeing the exciting news and stuff coming out about Apollo server, for example, and all sorts of really interesting hashing mechanisms, and things like that that are there... But you have to be using Apollo server and kind of have it integrated in your stack, whereas for us, that would be challenging to do.

So yeah, I don't have a good answer to this at this point, other than to say that if -- I suspect that if you're sticking in Node.js land, you're gonna have a really good time. \[laughter\] And if you're kind of skirting out the edges like we are with Python and Graphene, and things like that. You can definitely make things work, and we are... It's just that it's gonna be a little bit different.

At Khan Academy we're also starting to experiment with Kotlin as a server-side language, and I'm not sure what their GraphQL store is like, but it can't be better than what's happening in Python, I can almost guarantee that.

So yeah, anyway, that's something that we've been actively learning. At least in my side projects where I've been using GraphQL, it's been very smooth sailing and I've enjoyed that.

**Suz Hinton:** That's great. Is this something that you're covering a little bit more in your guide, as well?

**John Resig:** Yes, absolutely. We're covering many of the different client-side implementations, and many of the different server-side implementations. We do have a bias towards sort of the primary stack, I wanna say, with a Node.js back-end and a front-end that's using React, because I think that's something that a lot of people are probably gonna be using who use GraphQL... But we do cover a lot of the other options as well, because that's the nice thing about GraphQL - it's relatively generic; nothing about GraphQL dictates that you have to be using React, or using Node.js.

What's interesting is that -- like, we're using Python on our back-end, and on our front-end we're actually going through old pages of our site and replacing REST API calls or GraphQL calls... And some of those pages are older; they aren't using the latest Apollo and all these wonderful frameworks... But we've kind of created little shims where we can stick these GraphQL calls.

\[00:24:10.27\] So yeah, you can really make it work wherever you want it to run, no matter what technology stack you have. So yeah, I think that's something that's nice, and I think people don't necessarily always realize that.

**Jerod Santo:** I can speak a little bit to the back-end ecosystem, because just as part of my work at Changelog and Changelog News, we obviously keep our thumb on the pulse of what's going around, in as much of a polyglot way as we can... And I would say in the last 18 months or so, across many of the different ecosystems - Node was very early and often in terms of tooling and support for GraphQL back-ends, but I've seen a lot of advancements in the Elixir ecosystem, in Ruby, as well as Python... So there's just a lot going on, and a lot of the different back-end technologies are racing to get their tooling and support for building GraphQL APIs as solid and quality as they can. So you've definitely seen a groundswell support across different ecosystems.

So John, what else from the front-end? This is obviously where you focus. You said GraphQL was just so much better than REST from your guys' perspective, so I guess just -- I know you've mentioned a few pieces of it, but maybe a chance to sing its praises and enumerate all the ways... You know, let me count the ways that GraphQL has won you over on the front-end. What's the biggest wins and how many are there?

**John Resig:** So I've mentioned rapid prototyping, but I think one of the things that so shocked me about GraphQL is that when you have your queries defined on the client or in your Javascript code, you can statically analyze the queries. The benefit of this is that -- we have a linting rule set up where if there are any changes to a GraphQL schema or something like that and it's gonna cause one of our queries to break, it'll produce an error about that.

Now, the cool thing about this is that it allows us to refactor our APIs, our GraphQL, in ways that were never possible with our REST APIs... Because with a REST API - at least the ones we had - it was just like, okay, here's a JSON blob; we don't know what data is being accessed or how it's being used or where it's being used, so therefore we don't know if it's ever safe to remove any data.

So if we wanna rework our API and be like, "Can we delete this data? Can we work this schema?" etc. it's a huge, very frustrating project... Whereas with GraphQL you can do that static analysis and just be like -- and we've done this, where you're like, "Oh, I wanna rename this property to be more descriptive." So you rename it, you run the linter, and you get a nice little list there of every file that's breaking now; you go through and change those names, and you're done.

**Suz Hinton:** Oh, my God...

**Jerod Santo:** \[laughs\] Suz likes that.

**John Resig:** Yeah... So the refactoring process takes minutes, as opposed to hours and things just breaking in weird ways that you can't quantify. So this is something that is -- for me, when I saw that, I was just like "Okay, that makes all this worth it." \[laughs\] It's the sort of thing that is truly important.

\[00:28:03.27\] I think one of the technologies we've been using a lot at Khan Academy additionally is Flow, with Flow types. The nice part is that if you have this GraphQL data come in, you can define the Flow types for the GraphQL data structure, and then you can sort of trace a whole path through your applications. So again, if we change the name of one of these props, I can just go change that in the Flow type definition and now I can see every single place in my application that's breaking as a result of that.

This sort of stuff - again, it's making refactoring possible in ways that really just weren't feasible before... So this is something that really, really excites me.

Other things that have excited me from a front-end perspective about GraphQL - I think I've really enjoyed the Apollo client-side implementation. We've been using it with React, and it makes it really nice to really understand things about like loading states, error states - all this sort of stuff. A good side effect of this is that it encourages you to write React components in a way that are very robust to changes... Because your data could be in a loading state or an error state, but you have to account for that, and I feel like in a Rust world it's very easy to write something where you're just like "Oh, when I get some data" and then like never handle the data failing. In the Apollo world I feel like you kind of have to do it. It's defined explicitly, and especially if you're using things like Flow types; you can verify -- you have to make your code more robust... Which is good; it's better coding practices, frankly.

That's something that I've also really enjoyed - I feel like the quality of the components that we're building that use GraphQL are just better than what we were building in REST land, because we're able to enforce these really good practices from the start.

**Suz Hinton:** Speaking of enforcing things from the start, I had a question just about back-end data and setting up databases, and things like that... You're obviously on a journey where you're taking existing data structures on the back-end and you're getting it to work with GraphQL. Is there anything that people should do differently if, let's say, they know immediately from the get-go that they're gonna be using GraphQL? Do you have any advice on how back-end developers could set up their databases and their data structures in the first place on the back-end in order for it to be as easy as possible to work the GraphQL?

I know that it's obviously a very generic technology, but are there any sort of nuances in there that you can share?

**John Resig:** That's a good question. It's not something I've had a ton of experience with, honestly... But as I've played around with GraphQL and experimented with it, I guess it really felt like it is able to handle lots of different cases and lots of different database styles or querying mechanics. I think generally it does work better or it's a little bit better-suited to document-centric databases.

\[00:31:55.22\] When I've gone through and implemented GraphQL on top of MongoDB or something like that, it's really simple; it couldn't possibly be much simpler. It's a little more work if you're doing a SQL database, or something... But again, it's not insurmountable at all.

Unfortunately, I don't feel like I have very good advice here to give specifically, and I wouldn't be surprised -- this is something I haven't done much research into at this point, but it wouldn't surprise me if there are people building just like databases design for GraphQL at this point, or kind of all-in-one type of deals, that are designed for performance in caching and all these sorts of things from the get-go, so you don't have to weld them on your own... But that's something that unfortunately I haven't done a lot of research into at this point.

**Suz Hinton:** Yeah, I think there's a certain -- I think you're very lucky if you are actually entering now and you're starting something from scratch, which generally isn't always the very common case, right? Unless you're a startup that just exploded onto the scene right now, you're going to be dealing with transitions and things like that, which is very similar to what you're going through at Khan Academy... But it's good to know that there are some sort of cases or situations where it is a lot easier to get started immediately. That's cool to know.

**Jerod Santo:** So from the front-end perspective, I've had a few of these conversations - we can link up a few old Changelog episodes... And not even that old; we had a Prisma and GraphQL episode just this spring even... About GraphQL, and I talked about it with a lot of people and it seems like from the front-end it is demonstrably - and I'll maybe even say objectively - better in terms of, like you said, prototyping, speed of development... I didn't realize at this point about refactoring, which is really cool... But it seems like on the back-end, building the back-end, dealing with caching, dealing with perhaps inappropriate or poorly-crafted queries - that's kind of where the "there be dragons" are.

I know you've been very much on the front-end of the Khan Academy team, but has that been a real issue? Put differently, is the back-end team - or the people who are doing both - as excited as you are, or is it like the front-end is driving this and the back-end is just like along for the ride?

**John Resig:** Yeah, so it's interesting... I think a couple things that I wanna caveat the work that we've been dealing with is that so far we have not exposed our GraphQL stuff public. We have not replaced our public REST APIs with GraphQL yet. That's gonna be a process in and of itself. But we are not letting people write arbitrary GraphQL against our servers.

GitHub allows people to do that, and I'm very curious to hear about how they do that in a way that they feel is safe. But at least so far, that has not been a priority for us.

Now, additionally, another thing that we do is we have lots of monitoring and logging for all of our GraphQL queries... So we track the performance of every query, we track this performance over time, and then we have alerts for when queries are being especially slow. That way, we can look at them and be like, "Hey, this query is taking five seconds. That seems excessive. What can we do to make this faster?" With this data, we can delegate this to the teams to work on and improve.

\[00:35:56.26\] But at least so far, what's interesting is that initially the front-end team - we were champing at this, we were like "We really want this. It's gonna make our lives easier", but I think an interesting part about the GraphQL switch here is that the back-end team now is very excited about this change, too... And one of the reasons for this is that it dramatically simplifies the back-end.

Previously, we would have a REST endpoint, and we would get some information about a teacher and their students, or something like that... And within that single REST endpoint is many different queries, data being transformed and mutated and all this sort of stuff, and then it gets mushed back into a JSON blob and put out.

This code ends up being pretty complicated... Like, it's hard to look at and reason about, and especially when you have a number of endpoints that are doing very similar things, but just pulling the data in slightly different ways. But in GraphQL land, since you define a schema, just a generic schema - this is the sort of thing that pretty much anyone can do... You know, front-end engineer, back-end engineer - it's relatively easy to write these schemas. Then once you have that, you don't really have to worry about the logic of mutating this data into a good form. GraphQL takes care of that for you.

So in a lot of ways, it's made a lot of our data structures much easier to understand, and the back-end team has been excited about that because it's reducing the surface area of the application. Now they can just look at one place and be like "Well, the only place where this data model is being used is in this one GraphQL schema, and that's it." They can just look at that one place and understand how it's being used entirely... As opposed to trying to hunt around the application through all the different REST APIs that could be using this thing; it's just very complicated.

So yeah, this is something that they're seeing as a way to reduce the amount of code that we have, and the amount of service area, and just simplify things overall.

**Jerod Santo:** That's interesting. I find myself often -- I often do small teams, or sometimes team of one style projects, so very often I'm the consumer of my own REST APIs, so I only have to nag myself for slightly different data or a new endpoint... But I still have that mental back and forth of like "Oh, I guess I need the data this way." I'm going to go add an endpoint or adjust an endpoint to massage it to be better, and I have worked in a situation where I was contracting to build a back-end API for a startup that had multiple devices. An iOS app as well as a web app for the first two; they weren't quite successful enough to make it to their eventual Android app situation... But in that circumstance it was me, a contractor working on the API, and then a completely different company building the iOS app... So if you look at the bottleneck of development speed there, it is the integration point between those two actors, and the slowdown when they are waiting on me or vice-versa was troublesome.

I could see where if it was a GraphQL API with a well-defined schema that a lot of the stuff that they were waiting on me for, waiting on back-end for, they wouldn't have to wait; they would just change the way the query worked, and as long as the schema supported that, then they would have been off to the races.

Have you felt less communication lag or maybe tension between -- I don't know how big your teams are, if you have walls and whatnot between them... I know some companies have very strong walls between teams. What are your thoughts on that?

**John Resig:** \[00:40:03.02\] Yeah, so one thing I'll mention briefly is that we do have a front-end team and back-end team, and we do have people who are full-stack... But additionally, we're pretty porous; front-end people are making back-end changes, back-end people are doing front-end changes.

**Jerod Santo:** Well, that's the way it should be, right? ...I think.

**John Resig:** \[laughs\] So we aren't one of those super-strict organizations. I think some people just may have preferences of just doing front-end or back-end, and as a result they do less... But yeah, I think one of the things that's been interesting is that even in cases where a front-end engineer has had to go in and add in an additional field to the scheme, I would say that it's just easier to do in general, even compared with how we had things previously... So even in the worst case, where a front-end engineer has to make back-end changes, frankly, any of our engineers escape all that, from our most junior to senior.

I think that's something that feels empowering. You don't have to wait and rely upon getting a more senior engineer or back-end engineer in to go work on this... But I think the thing is that there's far more common cases just like "Oh, we're just missing this field, but it already exists in the schema, so we just add it in and now we're done." That's the sort of thing that is -- yeah, the velocity impact is tremendous. And of course, that's helping the individual engineers so we don't have to go into the back-end, or we find someone else to finish it... Whatever the case might be. So yeah, it's been pretty great.

Break: \[00:41:47.26\]

**Suz Hinton:** John, we have some really cool community questions from our JS Party/Changelog community for you... We're gonna read some of them out to you on this segment.

**John Resig:** Okay.

**Suz Hinton:** The first question is from Dan McKlein. He says "Without subscriptions, what's the benefit of GraphQL over REST? With HTTP too you get maxing of connections, so the limit of open connections is higher, somewhat negating the benefit of grouping queries. And the pain point comes when one of those queries is slow in that group, causing your whole payload to be delayed until your slowest query returns, which is arguably worse than firing off ten REST requests."

I think the first part was the question, which is like "What is the benefit of it over REST if you don't have the HTTP bottlenecks?" So this less probably about the user experience, I guess, on the surface layer.

**John Resig:** \[00:43:42.07\] Yeah... So there's a couple things. One, GraphQL queries don't necessarily have to wait until everything is done before returning. I know that Apollo and with a compile server you can start to return data in batches. You can get some of the initial layers of requests and return those, and keep returning more as you're getting deeper and deeper.

So it isn't necessarily the case that it's an all-or-nothing proposition with GraphQL. Certainly, the simple implementation would be all or nothing, but I'm looking at a lot of the different tech stacks that exist now, like Apollo server... They're much more robust, and can handle incremental data.

I guess the question about performance... I think one of the things that is certainly a little bit tricky, and one thing that's trickier with GraphQL than with traditional REST APIs is that -- I guess typically the traditional REST APIs, especially the ones that aren't authenticated, it's a lot easier to do browser-based caching, or caching at an edge cache or stuff like that... Whereas with GraphQL, since typically you have a single endpoint, it's hard to do caching at that level.

So usually, what you end up having to do is either having a different sort of client-side cache, like in browser... We use Apollo, and in that case it caches the data that we've requested, and if it looks like we're going to try re-requesting data that we already have, it just pulls from that cached data, so we don't have to send off another request.

Then additionally, you can do caching on the server-side, but it's lower-level at like the software level, so you can see that you have certain queries coming in, and if you know that certain data is always gonna come back, you can just return that cash response.

Yeah, so I think there are definitely ways of improving the performance, improving the caching of GraphQL... One of the things is that it's just gonna work in a different way than what typically happens with the normal REST API.

**Jerod Santo:** So I guess as a side question or follow-up for that - I guess it's more of a side question... Dan says without subscriptions, but he's now assuming that we all know what subscriptions are in the context of GraphQL... Can you explain what subscriptions are?

**John Resig:** I'm gonna try and explain... I mean, essentially, you can subscribe to a data source and get periodic updates; as more and more data comes in, it gets updated with that additional data. Now, subscriptions are a little bit different from what I was describing before with the Apollo server, which is like a single query, but then the data that you're returning is complex, it's coming from multiple different queries, subqueries, and stuff like that. In that case, it could potentially come back incrementally, as the data is ready... Whereas a subscription is more like -- you would use a subscription to implement a chat room, or something like that... Or an ad where there's lots of updates coming in, or a stock ticker feed...

**Jerod Santo:** Right. So it's more like a real-time connection that gets pushed data from the GraphQL server?

**John Resig:** Yeah. That's more what the subscription is, rather than the other thing I was describing.

**Jerod Santo:** Gotcha. Very good. Okay, next question from the community... This one comes from Dylan Schiemann, who listeners may remember from the Dojo episode back on JS Party \#25... Dylan says "So jQuery... That's like a query language for GraphQL, right...?"

**John Resig:** \[00:48:06.13\] \[laughs\] Yeah, it's funny, because Dylan and I go way back... He was working at Dojo, I was working at jQuery... All this, at this point, old-timer Javascript framework folk... \[laughs\]

**Jerod Santo:** Yup. In our chat room, he mentioned that you guys have been trolling each other for years, so he thought that would be appropriate...

**John Resig:** \[laughs\] But I think it's funny... It's like one of those things where we -- at the time, the competition felt intense, or at least it did for me... It was just like, "Oh man, we're trying to change things and get recognition, and all this sort of stuff...", but then as things have changed and as the world has changed, and everything, now we just look back at those times... We're like, "Oh yeah, that was a thing that was happening..." \[laughs\]

He's jokingly saying is jQuery a thing for creating GraphQL databases, but like, back when I named jQuery, my first name was jSelect, just for like JavascriptSelect... But I couldn't, because the domain was taken, so I didn't choose that... And I saw that jQuery was available, but there was an open source project called jQuery, and it was like a Java library for doing SQL queries, or something like that. It looked like it hadn't been updated in a while, so I was like "Okay, it's probably fine. I can just use this name." If the domain is available, I'll get the domain and I can use it.

I remember at some point in the future the person running the open source project got in touch with me and was like "Hey, you're kind of using my name." I'm like, "Oh, sorry... I thought the project was dead. I didn't realize that it was still going on..." \[laughter\] But the thing is that yeah, obviously, I feel pretty certain that web-based jQuery is far more popular than the jQuery Java SQL querying thing... \[laughs\] But yeah, I did feel a little bit bad about that.

**Suz Hinton:** This is such a classic naming problem, you know what I mean? Like, "Is the domain available? Is there already a project called this?" These days it's like "Is the name taken on Npm?"

**Jerod Santo:** Right. The age-old programming problem is naming things, and cache invalidation, and \[unintelligible 00:50:36.21\]

Okay, so Dylan does actually have a serious question following up on his troll, which actually plays into some of the stuff you're talking about there, John, about jQuery... He says he's curious to find out what you think of jQuery's place in JS history now. "Do you have regrets with the project? Would you go back and focus more on architecture-type problems with jQuery before things got out of hand for people trying to build large apps, or do you see it as a good bridge for people from the days of old to the v-dom-based dev?"

**John Resig:** I do see it as a relatively good bridge. It's certainly of its time, where jQuery was so DOM-centric... Like, you are querying DOM elements, manipulating those elements directly... Certainly whenever I do stuff like that these days, it feels very antiquated. \[laughs\]

\[00:51:41.04\] Personally, I don't have regrets about not doing architectural things, and it's not because I feel like I missed out... At the time, I made very deliberate decisions not to work on that. We knew that jQuery was opinionated in some ways, in that "These are the ways of querying DOM elements", and things, but it was not opinionated about how you built your application. You can build it in any way you want it, you can use jQuery in that context, but we weren't dictating how that should work... So I'm okay with this.

If you look at React -- I was mentioning earlier that we were early adopters of React at Khan Academy, but we were (I believe) the first organization outside of Facebook to adopt React... And React is so dramatically different from the jQuery way of doing things. I don't think we could ever have iterated on jQuery to the point at which we arrived at React. It's a fundamentally different branch of the evolutionary tree, and frankly, I feel like React is a lot better for the kind of things that it's trying to do.

These days, as a front-end dev, I feel like I'm much, much happier trying to build the complex things that I'm trying to build, than I was a long time ago... And it isn't necessarily because of jQuery, it's just because that we as an industry have dramatically changed how we're doing things and what we're willing to consider to be acceptable. Essentially, the industry is growing up, and a part of that is having a lot of these frameworks that take care of things for you.

So yeah, I don't know; I don't have regrets about it. I think jQuery was great, it did a very good thing for a lot of people... I certainly enjoyed using it, and really when I first created it, that's all I wanted - I just wanted a framework that would solve my problems. Yeah, I'm okay. I sleep fine at night. \[laughter\]

**Jerod Santo:** As you should.

**Suz Hinton:** Our next question comes from Louis Montez; it relates a little bit to Dan's question earlier - it's about REST vs. HTTP, and the advantages outside of that. They ask "Since we've had things like JSON-RPC over websockets for years, how much of the GraphQL as "the new REST" comes from REST being typically tied to HTTP, while GraphQL is transport-agnostic?" I think that's a great point. They're asking "Is the query language itself the killer feature?"

**John Resig:** Yeah, I think so. I think the query language is really good, because a lot of the features that I describe are benefitting directly from that... Being able to specify the query on the client side, being able to do static analysis, and all this sort of things. So that's certainly a benefit.

I think additionally, having a schema defined on the back-end - like, you have the schema on the back-end and then queries on the front-end - those two together really make GraphQL what it is. So yeah, I don't think the transport layer -- as I'm developing in using GraphQL, I don't think about how it's getting to the client necessarily. That's not my primary concern; my primary concern is more about "Okay, what data am I requesting as the data that I need?" And I feel pretty good about that.

\[00:55:59.05\] So I guess to answer the question - yeah, I would agree that probably the query language itself, but then combined with the schema definitions is really what makes GraphQL special.

**Suz Hinton:** That makes a lot of sense.

**Jerod Santo:** The next question comes from Chris, a.k.a. CanadaUni in our JS Party chat room; Chris was just talking about an ArrowPress project to learn Apollo stack with GraphQL; we were talking about coffee during the break, so Chris was much into that conversation... Chris has a thought, a question, and a concern; I'll kind of give them to you in that order.

The thought is "It was really easy to set up a Node server with the new Apollo server" - good to hear that. The question is "When should someone not use GraphQL?"

**John Resig:** Personally - this is my opinion - I'm not convinced yet about using GraphQL for a project where you are the only developer working on it. If you're just building a thing for yourself, and you're doing the front-end and the back-end and everything, you can probably get some benefit from GraphQL, but I think there's gonna be diminishing returns.

I think you're gonna get the most benefit from GraphQL when you're on a team of engineers, and you're trying to all share and use the same API. Additionally, I'm also not sold about using GraphQL for a public-facing API. I know there are people who do it, and more power to them; it just seems like an unnecessarily complicated thing to implement, especially since you're letting people run semi-arbitrary queries against your data. That's the sort of thing you need to be very, very vigilant about.

Those are two things that (at least to me) I still have questions about. But at least the more common case of having a team of engineers, working against a single GraphQL endpoint - it's amazing. It couldn't be better. In that way, REST looks a bit inferior.

**Jerod Santo:** Finally, Chris shares a concern, which maybe you can just react to or not... They say "Sometimes it feels like there's too much magic, making it challenging to troubleshoot, sometimes. Maybe that's just with Apollo, but that has been my experience."

**John Resig:** Interesting. I'm trying to think of issues that we've had as we've used Apollo... And we have had some. I think the issues that we've had have been more when we were upgrading, like moving from one version to another, and things start breaking in ways that we don't understand... This has only happened maybe once or twice so far, and it just requires a little bit of debugging and trying to figure out how different state is moving around in different ways...

I think usually issues like that are happening - if they happen at all - in the very complicated parts of our application... So maybe that also kind of speaks to us, that our applications should be simpler, and then therefore be easier to reason about. But yeah, I'm not sure.

**Suz Hinton:** Our last question is from Rasmus Hanson, and they ask "What are some common mistakes people make when working with or implementing GraphQL?"

**John Resig:** \[00:59:53.07\] I feel like I don't have enough data looking at people at large, what mistakes they've made... I feel like there are mistakes that we made... \[laughs\]

**Suz Hinton:** Yeah, we'd love to hear that. Personal anecdotes would be amazing.

**Jerod Santo:** Absolutely.

**John Resig:** I've mentioned earlier about how we have tracking set up now for the GraphQL queries, to know how long they're taking, and that isn't something that we had initially, nor was it something that came out of the box... And that's a thing that's helped us a lot, because we were having a hard time figuring out which queries were taking a long time, and why, or even understanding which queries might get slower, given the different parameters that get passed in them.

So that's the sort of thing that is -- and I'm not sure it's a mistake that we made, other than that as we were using GraphQL, we were kind of realizing that we just didn't have the information that we needed to write good queries, so we had to build an additional layer on top to do this analysis.

I'm trying to think of other mistakes that we made... One mistake that I feel like we didn't make, but we could have, is that we didn't adopt GraphQL too early. I think now is probably the best time to be adopting GraphQL. We adopted it a year and a half ago; it was certainly rougher. I think if we had tried to adopt GraphQL when it first started coming out and being all buzzworthy and all that, we would have had a real hard go with it...

So I think from a mistake perspective, my takeaway from this is that if I'm starting a new project today, I'm just gonna go straight to the latest and greatest things. I'm gonna use Apollo both on the front-end and back-end personally, because their full stack takes into account a lot of the edge cases that exist.

I think it would definitely be a mistake today to kind of like roll your own thing from scratch. There's really no reason to do that. There's a lot of good frameworks to take care of this for you. I think that's probably my main takeaway right now.

**Suz Hinton:** That's great advice.

**Jerod Santo:** Well, that rounds out our community question & answers; thanks to all the awesome community members who submitted those questions, thanks John for hearing them.

Final thoughts from you, parting words, John, before we let you go?

**John Resig:** Thank you so much for having me. It's been nice getting to chat about this, and I guess a message to anyone who's listening is definitely check out GraphQL. I think it's pretty great, I think it's at the very least worth some time investigating. I think that's about it. Thank you.

**Suz Hinton:** Also, if people want to check out your GraphQL guide that you're currently in the works with, they can actually get the beta right now, right? So if they go to graphql.guide - is that the best place for them to start?

**John Resig:** Yeah, you can go there and you can pre-order and get access to the full beta book as we're working on it. There are both online and eBooks, as well.

**Suz Hinton:** Yeah, I'm excited. I see that it's compatible with Kindle, and because I travel so much, my Kindle is my best friend. That's where I get all my reading done, so that's great.

**John Resig:** Excellent.

**Jerod Santo:** Very cool. Well, that is our show. Suz, thanks so much for joining me all the way from Hawaii... And hey, go hit the beach and enjoy your vacation!

**Suz Hinton:** Will do. It looks like no one is there right now, because it's so early, so I'm very excited to get out there. Thanks for having me.

**John Resig:** Yes, please enjoy.

**Jerod Santo:** And one last word before we let you all go - we will be at JS Conf, so look for the JS Party T-shirts, look for many of our panelists... Suz, will you be there?

**Suz Hinton:** Yeah, I'll still be in vacation mode, so if you see me wearing lots of tropical-looking attire, it's because I've just come back from Hawaii. But I will definitely be there and I'm very excited.

**Jerod Santo:** Awesome, very good. Suz will be there, Kball will be there, I believe Nick and I think Feross as well. We plan on having stickers, we plan on having T-shirts; it might be first come, first served on those. And then also, there will be a live JS Party from the JS Conf stage I think on the first day, so stay tuned for that. If you're going to JS Conf, hit us up; we would love to connect with you.

That is our show for this week, so thanks so much for everybody, and we'll see you next time.
