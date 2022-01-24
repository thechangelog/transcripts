**Nick Nisi:** Hello, JS Party, hello 2022! Welcome to another exciting episode. We have a very exciting panel today, and I'm very excited to show you and say "excited" one more time. \[laughter\] So joining me today is Ali Spittel. Ali, what's up?

**Ali Spittel:** Hey. How's it going?

**Nick Nisi:** Good, good. This is our first show together. I'm so excited!

**Ali Spittel:** Me too, me too. I'm so excited to be joining this podcast. I think it's really fun to just talk about the JavaScript things.

**Nick Nisi:** Yeah. So exciting. And we also have a guest, and that is Shawn Wang, who goes by Swyx. Swyx, how's it going?

**Shawn Wang:** Hey. Excited to be on. I think a lot of firsts today, huh? My first time on JS Party, your first time together, first podcast of the year... We're starting the year bright.

**Nick Nisi:** Yeah. Very exciting. There's that word again. \*sound bite from Pee-Wee's Playhouse secret word segment\*

**Ali Spittel:** It's a good crunch word to have. Instead of "um", you say "exciting".

**Nick Nisi:** Yeah. \[laughter\] So Swyx, why don't you tell us a little bit about yourself? We have definitely seen you around a lot, and I have followed you for a long time on Twitter, but as we mentioned in the pre-show, this is our first time actually chatting together... So yeah, why don't you introduce yourself?

**Shawn Wang:** Sure. Hi, everyone. Shawn, also known as Swyx, originally from Singapore, and moved to the States for college, doing a completely different career in finance... And I did that until I realized that I was no good at the finance bit, but I actually picked up programming along the way. I did basically the standard progression in finance, which is you start in Excel, and then you realize Excel is not good enough, then you have to automate it with VBA, and then you go into Python. Ali knows all about this stuff. That's her exact dream

**Ali Spittel:** Yeah. Yup. \[laughter\]

**Shawn Wang:** \[04:05\] But I did the weird thing - I worked in currency derivatives in London, I had to do option pricing, and you have to use a functional programming language for that. My company used Haskell, so I did two years of production in Haskell before I was a developer...

**Nick Nisi:** Oh, wow.

**Ali Spittel:** That's my fun, sort of, claim to fame. Then I decided to learn JavaScript, and I've found JavaScript harder than Haskell, and I took a whole year going through FreeCodeCamp, and a paid bootcamp (Full Stack Academy) before landing my first job as a frontend developer. Since then, I've been slowly making my way towards the backend. So I started as a frontend developer, then I went to Netlify, started working on CLIs in serverless, and then I was Ali's co-worker for a hot minute, working on AWS Amplify. Then I left to join Temporal as a head of developer experience. Here, I am entirely backend.

**Nick Nisi:** Nice. Yeah, that is quite a progression, and I really like that journey, that beginning story, too... Because it's really, like -- the idea of using programming in that way, as almost a way to automate your job, or as a super-power in another profession... It just seems so cool to me as like a way to do that, and then building out from there, into full-blown development full-time. And the progression - you did talk about this on the Changelog podcast, which I wanted to bring up, because you were recently on that, episode 467, which was "Connecting the Dots in Public." You really talked about your progression from frontend to backend, where you're at now, kind of doing more full-blown backend. And one quote from that really stuck out to me, of something you said, "A lot of CTOs in high-level roles come out of the backend, more than the frontend", traditionally. As a purely frontend developer for most of my career now, I've been thinking a lot about that...

**Shawn Wang:** Yeah, it's something that -- it's obviously an impolite conversation to talk about, but there is a sort of career ceiling, and I've been asking people what they think about it... And also just giving it a name, and having a real conversation about it. I mean, it's not a fact that you're not -- you know... But it's interesting.

**Nick Nisi:** Yeah. I was mentioning that, and I also wanted to lead into the discussion that we have about connecting the dots in public, or really learning in public. I hear that a lot, and it always references back to you, or a tweet that you've had, or a talk that you've given... And it's really just like a methodology for learning and being open about not just successes and failures, but especially those - successes, failures, and just the general process of learning not being behind any barriers. I really like that methodology. Can you talk more to it?

**Shawn Wang:** Yeah. I generally embrace it as a different form of career progression from my finance career, which was very much learning in private and going through the traditional path... And I think when I switched careers to tech - tech is a fundamentally much more open field, and positive sum, so people don't mind when you share what you learn... And I think the only requirement really is that you have to have a thick skin, and then you have to not mind when you get things wrong. And you will get things wrong, and you will be embarrassed, and people will call you out on it, but if you have a positive attitude to that, you could take it in your stride and say "That was yesterday's version of me, and today I'll be better and I'll know more, because I've got things wrong in public", and you never forget it.

**Nick Nisi:** That's so great, because that probably eliminates so much of a barrier that people have to -- you know, I wanna learn in public, for sure, but I don't wanna be wrong in public. That's just kind of part of it; embracing that as part of the process of learning I think is something that's often overlooked... So that's really good to remind people of that.

**Shawn Wang:** I think it also helps this whole thing become a bit less lonely. It's better to do it in a group and learn together, and you can actually help a lot of people who are just a little bit behind you. But you can even help people who are more knowledgeable and more advanced than you, because if you prove yourself to be a good co-worker or like a good foil for them to test their messaging, then it gets really helpful. I think that's something that has really benefitted my own career.

\[08:03\] Something that I did, actually, was as I was going through Netlify and I was at AWS and I wrote this, I actually wrote down what I thought was missing from cloud... And that's how I've found Temporal, because I was like, "Let's list down the jobs to be done of the monolith that we lost when we broke everything apart into distributed cloud services." And then I've found that there's some things that were just not answered that well, and that's eventually how I made my way to Temporal - because I wrote a blog post, and they found me.

**Nick Nisi:** Oh, wow. Nice. So there's immediate benefits from learning in public. That's great.

**Shawn Wang:** Tons, yeah.

**Nick Nisi:** Very cool. Building off of that, why don't you tell us what Temporal is? And maybe touch on what it's solving from that list that you made up about what's missing from cloud services?

**Shawn Wang:** Yeah. So at its most humblest form, Temporal is a workflow engine where you can write long-running processes. So anything that goes beyond the single request/response cycle. It's not immediately obvious why that's a big deal at all, but if you look at the jobs to be done of the cloud, you can think about compute, storage, memory... There's long-term storage, there's short-term storage, there's all these sorts of variations, and one of the things that I was looking at when I was looking at the serverless ecosystem versus the traditional serverful and monolith ecosystem was the ecosystem of job runners, or anything long-running. And I've been very inspired by it ever since I heard about Sidekiq from the Indie Hackers Podcast.

Sidekiq is the default Rails job runner, and Sidekiq is run by Mike Perham, who is just one developer who makes two million dollars a year selling support contracts on his open source software. And I was like, "Oh, wait. Job running is actually a very valuable thing." So I started to dig into that a little bit more, and I would have taken another 15 years - because that's how long the founders of Temporal took to create it - to eventually find my way towards something like this.

So essentially, Temporal is a workflow engine, which means it handles a lot of things for you, and you sort of write things on top of it, which is why I like to make the analogy that it's React for the backend. In other words, you write your components -- you sort of componentize your services, and you send it to one central orchestrator, which on the frontend is React DOM, and on the backend it's Temporal. And it helps to handle consistency, it helps to handle declarative rendering, anything like that, which is a really useful mental model for breaking up your business logic. So I really like it on that front... I'm not sure if I'm nailing the "What is..." We're still trying to figure out how to explain what it is. Really, it depends on your background.

**Ali Spittel:** I think it's really interesting that you talked about serverless, because ui.dev has this really fun, hilarious frontend newsletter, and this week they did predictions for the frontend for 2022, and one of those predictions was that serverless was going to allow more frontend developers to be full stack developers... And I wanted to get your thoughts on that, because we're talking about this frontend ecosystem, and serverless... Maybe that serverless may be an easier bridge into building backends for frontend developers.

**Shawn Wang:** I think it definitely is. That's a lot of what I saw at Netlify, that's a lot of what you're doing at AWS... It's giving frontend developers more and more powers... Which is good and bad. Good in the sense that they have more capability, bad in the sense that they don't have the training sometimes to -- they don't have the same tooling. So you get a lot of back-and-forth over like "Is this the right way to do this or not?" But the sheer fact that there's so many frontend developers is going to help push along the market by itself. It doesn't need any support.

So I think there is a lot of growth, and I think the JAMstack movement was a big part of that... But yeah, I'm a strong believer that serverless is helping give frontend developers more powers.

I think the main place I'll point people to is Chris Coyier's talk on "The All-Powerful Frontend Developer", and I was very lucky to be referenced in that, because I think he's really seeing that from his perch at CSS-Tricks, where a lot of services are just catering more and more to frontend developers because of the JAMstack movement, because serverless makes things so much easier. And yeah, I think it's continuing to go.

\[12:15\] I've actually been thinking more about like serverless as a business model, more than a technology. The main break in the mental model was actually at Amplify, when we started offering serverless containers. A lot of people are like, "Wait, what do you mean serverless containers?" I thought serverless was all about Lambda functions. And it really starts to flex a little bit on the meaning of serverless. You know, scale to zero, charge only for what you use, and having a very light deploy model. I think that idea of serverless is being stretched more and more. You're also seeing more and more companies adopt the concept of a serverless database, where you also don't have to provision some instance upfront. You just use it as much or as little as possible, and they charge you based on what you use. So that philosophy is much more of like a business model than a single specific technology.

**Ali Spittel:** Yeah. I did a Twitter Space with the developer advocate for serverless at AWS, and they were talking about this as well... Serverless is really difficult to define; people think of functions as a service, but then there's also other serverless services too, like DynamoDB, or serverless databases that have some traction right now, like FaunaDB... So it goes far beyond that. So I think this is a really interesting conversation, of defining what serverless even is.

**Shawn Wang:** Yeah. So one thing which I'll introduce here is that one way in which you want to be serverless is that you often also want things to be stateless, in the sense that for it to be horizontally-scalable, for it to be spun down, it should not have any state, otherwise you might lose data. In other words, it needs to be a pure function; whatever that item of compute is, it needs to be a pure function of input, you get some output, and that's kind of it.

So then there's the question of "Where do you store the state?" And usually, it's in some sort of database... But for me, one of the things that was really interesting to me was that you have to check in and out of state so much. Every single time you write logic. Imagine you provision 100 different Lambda functions just to model every single piece bit of your execution that is broken up by something stateful. Something that Temporal does is actually it helps you write all of those things as a single function, from top to bottom. And as they need to store state, it actually persists in the background for you, and then it continues whenever you need it to.

So I've been thinking of pitching Temporal as "The single stateful service in your whole cloud, that makes everything else stateless." Because we handle state as an orchestrator, and everything else is stateless as well. I think it's a very interesting pitch. I haven't tested it yet, so I'm testing it out here for the first time. \[laughs\]

**Nick Nisi:** So as a way to do that orchestration, I guess, the -- I'm trying to think of how myself as a frontend developer might tie into this as being slightly more than a frontend developer jumping into serverless to do backend things. Would I start writing Lambdas, or serverless functions that then are orchestrated by something like a workflow engine? How does it fit between a serverless function and then tying into a greater workflow, or storing off state to a database?

**Shawn Wang:** Totally. It would orchestrate your services, so it'd be the central brain and it'd be calling out to all those different services. It doesn't matter if it's a microservice, a macroservice, or a serverless function. It doesn't really care, as long as it hands over a part of that responsibility for organizing the central state to someone else. That is the kind or architecture that we're talking about here.

**Nick Nisi:** Okay.

**Shawn Wang:** Maybe the best way to do it is I'll talk a little bit about a specific use case...

**Nick Nisi:** Yeah.

**Shawn Wang:** \[15:50\] ...because I think that is the best way to do this. I often talk about three different use cases. One of them is YouTube video processing. YouTube gets something ridiculous like 10,000 hours of video per hour... And then they have to break it down, they farm it out to a fleet of machines, and then they have to stitch things back together and post that upload up. That takes the span of minutes, but also the scale of this is also unimaginable.

So how would you normally do that? You would write the logic, you would provision schedulers to continually check, like "Is the processing done? Is the processing done?" You would have to write a state machine somewhere to say "If this is in this state, then proceed to the next state, then proceed to the next state." And then don't forget logging. Because once you've done all that stateful stuff, you probably just did the very bare minimum as an MVP. Now you have to start logging the state transitions and how long things took.

Then you have to add queues, because sometimes you may get spikes in traffic, and you need to balance that out over time. Then you have to add dead letter queues, because sometimes video formats are kind of weird, and you need to retry them; or your services are down, or whatever.

Then you have to make it secure. You have to isolate it such that one region or one cloud doesn't coincide with others. Sometimes it may be private or encrypted information... So there's just a lot of things that you have to write. So what if you had a single framework that did all of that for you? That's kind of like the overall pitch.

**Nick Nisi:** Okay. So Temporal would be what's in charge of like "First, this function is gonna get called. Then it's going to give me back something in a purely functional way."

**Shawn Wang:** Yeah.

**Nick Nisi:** Then from Temporal's point of view, Temporal knows "Okay, now that I got that back, now I call this next, or I wait for this, and then call..." So it's kind of doing all of that orchestration...?

**Shawn Wang:** Yeah, exactly. So Temporal is not the only workflow engine out there. There's AWS Step Functions, there is Argo, there is Airflow... The traditional way that a lot of these orchestrators take a form is they have a simple JSON or YAML representation of "if this, then that." So essentially, what we're talking about is enterprise "if this, then that." But it's not very flexible, and you end up learning the DSL. It's just like an arbitrary language that was just invented ad-hoc inside of a JSON format.

If you look at some of the code examples, you're actually just kind of writing what looks like abstract syntax tree of something that should be a general-purpose programming language. So our opinion is that you should be writing software with general-purpose languages, rather than some invented language that you have to learn just for this task.

So as a benefit of that, then you can start versioning it, you can start testing it, and so and so forth. So it's a really interesting way to do it.

**Ali Spittel:** I think this also comes really in handy when you're working with heavy data. I started my career as a data engineer, which somehow ended up as a frontend engineer a few years later... But back in my day and when I was starting out, a lot of the time I was using these task services like Cucumber, RabbitMQ, which sound very similar to what you've been talking about... So you do all these tasks in sequence, so you do one, and then it passes off the next piece of functionality, and you can really break your app into these different tasks that are queued up.

**Shawn Wang:** Yeah. People use a lot of these things, like Sidekiq, they'll use Bulljs in the JavaScript world, they use RabbitMQ or SQS if they just want to have the queues, and then they have to have some consumers and they'll pick off of those queues.

But then product requirements do not stay stable. They just increase from there. So yes, if you're just going top-down, kick some job off, and then you can go do something else for four hours and come back - that's fine. But what if you have to cancel halfway in the middle, and that work has been distributed somewhere that you cannot really find. Or what if you wanna send in some signal that changes how that click behaves as you go along? So there's a lot of different edge cases that can come along here.

The story I like to tell about this is that -- so this technology originated at Uber. If you imagine modeling the entire journey of Uber Eats, it's everything from matching pricing, to sending the driver to the restaurant, the restaurant handing it over, and then them dropping it off, and then rating, and tipping, and all that. All those little individual functions are individual teams of people and developers maintaining their own systems, and they all have to be orchestrated in one way. And that's only the happy path. What about cancelations, what about missed drivers, what about all that? So you need to be able to respond and create your systems in a maintainable fashion. So the complexity of this just starts to explode really quickly once you start considering anything complex.

**Break:** \[20:20\]

**Ali Spittel:** I love it when people give examples for things, because it makes it so, so tangible for the listeners... So thank you for that example. And I really do want to tie this back into the frontend though, just because our listeners are primarily JavaScript developers... So what would you say that this correlates to for them?

**Shawn Wang:** Yeah, totally. That's why I actually have been using the tagline that it's kind of React for the backend... Mostly, not in the sense that it's exactly like React's model, but in the sense that it helps to componentize your systems on the backend. And that's kind of the order that React brought to the frontend.

Imagine in the days of jQuery's spaghetti code - you'd be wiring up handlers, and you'd be rendering out elements all over the page, and there'd be no organization, no event pooling, and ensuring of consistency. That's what React brought with the component model. And the real contracts actually that people don't really think about is that React's promise to you is that "Okay, you write things in our way, in our special way, which is that every UI is a pure function of data. And then you send it over to us. As a central, core team, we maintain React, the renderer and the reconciler, and then we'll make sure to commit it to your DOM and write it all for you." So each developer only handles the components, but they don't handle the core React rendering engine. You would never want to build that yourself. You just kind of trust the React core team to do it. And that's a bargain; you sort of lose control to them, but in exchange you get much more predictability and you get an ecosystem that you can build on top of, because you now know a very tight contract between yourself and the central framework.

\[23:56\] And what's amazing is that when I started exploring the backend space, this doesn't exist for the backend. Everyone's rolling their own, with queues, and databases, and all sorts of frameworks to do that.

**Nick Nisi:** Sounds familiar...

**Shawn Wang:** Yeah, exactly. So when I realized -- actually, I was talking with Guillermo Rauch, who created Next.js and runs Vercel. I was like, "Wait, is it true that the backend developers do not have as good a developer experience as the frontend developers? Are we more advanced than them?" And he was like, "Yeah..." \[laughs\] And then it really clicked for me. I was like, "Oh, okay." A frontend developer who takes the lessons that we have learned from a lot of competition in the frontend development space and applies it to the backend can do a lot of damage.

**Ali Spittel:** I will say though that the frontend space has also learned a lot from the backend space, like with Ruby on Rails and the code generation... all that they did so that you don't need to reinvent the wheel every single time you build an app. I really think that's a very interesting idea for the next generation of frontend dev tools as well.

**Shawn Wang:** Exactly. Well, for this specific part, I guess. The analogy hopefully holds, in the sense that people are wiring together a lot of systems... I love to share this complicated AWS chart where it's like that Charlie Day meme from It's Always Sunny in Philadelphia. It's a lot of systems that they're wiring together, and these services are just multiplying; a lot of them are going to be your own team's, but increasingly, as the API economy increases, you're gonna be relying on external teams that you pay for as vendors... You need a way to coordinate and componentize all these. You need a way to do even very basic things like a retry. And that's something that you don't really think about as a developer, like what's the big deal about retries. Retries make your service stateful. So just because you call some external API, you now have to make sure that, okay, in case they fail for rate limiting, or they're temporarily out, or whatever, you now have to provide some kind of dead letter queue, you have to provide some kind of scheduler to retry the service, and you need to write some state into a database. That's all incidental complexity to the service that you're trying to actually afford.

So the number of times that you make hops across systems, whether it's your own or external API systems, the amount of defensive programming and provisioning of infrastructure you have to do just to make sure that your overall end-to-end user experience is reliable. So what Temporal does as an orchestrator is it centralizes all of that.

We handle the retries, we handle the state which every request is going, and we tie them all together so that if anything goes wrong, you can pull that up as a central workflow that you can check out as part of our UI.

**Nick Nisi:** That's really nice, because then you're left with -- going back to the React analogy a little bit... You're left with this ability to create these atomic components of your backend, and you don't have to worry about that, because you would just worry about input and output, and then the orchestrator will help manage retries, or edge case things like that. Is that customizable per node, or whatever, within the system?

**Shawn Wang:** Yeah. At every single point that you're calling in an activity - which is what we call it - yes, it is customizable. There's a very nice philosophy of how to think about retries, how to think about limiting timeouts for the overall length of the retry, versus an individual attempt, versus how often you should be checking in for a long-running task, for a heartbeat. And if there's no heartbeat, you assume that it's dead and you try it again, you start over from new. That's just a very well-designed system that has been one out of a lot of experience. \[laughs\] That's something I really like as well.

Imagine if you're a product engineer and -- I don't care if you're a frontend or a backend developer, but let's say you're a frontend developer and you've been recently empowered by all the fun serverless functions that have been available to you... And you're tasked to do a one-click purchase. If you have an e-commerce experience, typically if a customer buys something, they typically add to cart, and then they go to the cart and then they check out. But it turns out that if you switch everything to a one-click buy experience, purchase rates/checkouts increase by 70%, because the cart abandonment rates are 70% as well. People check things into a cart and then they never buy it. So you'd much rather actually frontload that experience.

\[28:04\] But just that reversal from changing the experience from a synchronous experience, like a request/response, set a state and that's it, to an asynchronous experience, which is set a state, and then also set a timer for that to expire, so that when the timer expires, the one-click buy goes through - that actually is a hurdle; it's extra-friction, right? You have to add extra infrastructure, like a timer, and you have to make sure that it's well-maintained with the rest of your system. And that's only like the most basic requirement. There's a lot of that as well.

So what I'm most interested in is the increase in developer velocity from this when you don't have to provision this anymore, and you can just kind of play with "Well, what if we made this asynchronous? What if we made this long-running?" It doesn't matter, right? You stop having to prevent yourself from trying all these things out, because they often turn out to be a better user experience.

**Nick Nisi:** That's really cool. Nice. Now, one thing I wanted to touch on as well that you mentioned previously, I think in the last section, was about using an actual language to write out how this orchestration works. What language is that right now?

**Shawn Wang:** Yeah, so we have four first-party supported SDKs. Go, Java, PHP and TypeScript.

**Nick Nisi:** Oh, nice.

**Shawn Wang:** TypeScript is the newest one that we've just launched last month. And yeah, there's more and more SDKs that we'll be adding, but that's really an opinion about developer velocity as well as the using software engineering tools and best practices to create software, instead of writing a proprietary JSON or YAML config language... Which is the vast majority of workflow engines.

**Nick Nisi:** Right.

**Shawn Wang:** So yeah, we actually take a lot of investment. The TypeScript SDK took us a year from start to finish to write... Because under the hood, what we have to do actually is to lock down non-deterministic issues. Something that we do for you, for example, is that for the entire system to be reliable, it has to recover from crashes. So the first thing that we do is we do event sourcing. We store every state transition, so that we can replay it back to you if you ever need to recover from a failure. And that also means that everything has to be deterministic. So if you do a math.random call, we have to give you the same response every time, because you might be relying on the subsequent result afterwards. Stuff like that. We have to mock out everything that is non-deterministic in JavaScript.

**Nick Nisi:** Gotcha. Yeah, that is interesting. Another question I was gonna ask around that... So it seems like around those parameters, of like when you should retry, or like -- you can correct me if I'm wrong, but maybe conditional logic about "This finished, and now I go here to this next --" did you call them activities?

**Shawn Wang:** Yeah.

**Nick Nisi:** Yeah, like maybe conditionally calling all of that... It seems like there's business logic that gets caught up in that code that you're writing to manage temporal. What does the testing scene look like for that?

**Shawn Wang:** Honestly, testing is -- pretty much you can write unit tests with standard tooling that you're used to, and the only thing that we provide for testing is time skipping...

**Nick Nisi:** Oh, cool.

**Shawn Wang:** ...which is a lot of the reason why the company is called Temporal. If you have to wait for five years or five months or whatever, we can just kind of skip that ahead for you, so you don't have to try it. For us, our test suites are more integration tests, so that you don't have to run Temporal in order to run your tests. You can just kind of run the tests with our test suite mocking out every single API. And that means your CI is much faster. That's a good one.

But the other thing that I'm also very curious on is versioning... Because these things are long-running, which means that you're probably going to have stuff in flight when you wanna roll out updates and changes. So do you have a framework or format for doing that? Most people don't. Most people when they hand-roll their own systems, they just kind of cut over to the next thing and hope stuff works, and they get very nervous. Well, with us, because we are event-sourced, we can actually take the entire history of things that are currently running and just replay it on your new code, and make sure that nothing's broken. If there is stuff that's broken, you mark out the parts that are branched, and you can keep old code running while new code is being forced on a different branch. So that's just a really nice and neat way to organize migrations.

**Nick Nisi:** \[32:02\] Mm-hm. Is this like an analogy to git rebase?

**Shawn Wang:** Oh, yeah. Yeah. Very much so.

**Nick Nisi:** Nice.

**Shawn Wang:** React Suspense is the other analogy, which I haven't really gotten to dive into, mostly because I'm not sure people's understanding or care about React Suspense...

**Nick Nisi:** No... You throw a lot of promises, huh?

**Shawn Wang:** Yeah, yeah, yeah. React Suspense - they actually did use the rebase analogy in the original introduction of concurrent React, but the other thing that comes out of this programming model, which -- it's very interesting; it's conversion evolution. The other thing that comes out of this programming model is that React's components become long-running jobs as well. Now you can see -- you know, before we started you asked me about React Server Components... React, as it's rendering the component, it can stop and then go get data from a database, which takes orders of magnitude longer than it takes to render a React component, it comes back, and then uses that data to continue rendering with the rest. This actually is the right way to do server-side rendering, as opposed to the previous paradigm, where you would have to do something like a double-pass rendering that nobody liked. That's actually very analogous to what we do.

So we organize the code into two parts - workflows and activities. Workflows are the pure functions, activities are the side effects. Workflows, top to bottom, have to be deterministic, and they suspend to activities, which go get that data, do stuff out in the real world, and then come back to the workflows and continue with whatever else that has been decided. So it's very much React Suspense for the backend, which originally was the branding I was gonna go with, but I would have to then explain React Suspense, which I don't think most people know.

**Nick Nisi:** Yeah.

**Shawn Wang:** So I was actually kind of listing -- in my finance career, there's several ways to value a stock, right? You can value it based on comparables, like "Okay, I value this company by its three nearest competitors. Their valuations are much lower, therefore this thing is overpriced" or "This thing is too cheap", whatever. But then you can also value based on the sum of the parts... Like, what would it take you to put all the component pieces of this company together, and would it add up to what this company is worth today?" So that's an interesting exercise.

So I always think about this in terms of Temporal - what jobs does it combine? It combines a database, queues, timers, rate limiting gateway, a fleet of workers, service discovery for those workers, an event sourcing schema, and then client SDKs, UIs and CLIs to work with all those things. \[laughs\] Hopefully, that gives a sense of the system that needs to come together to achieve something like this.

**Nick Nisi:** Yeah, it definitely gives an idea of the scope of the problem that Temporal is trying to solve, which is really vast...

**Shawn Wang:** Yeah.

**Nick Nisi:** I mean, I haven't been super-involved in backend development, but it's really interesting that -- it makes a ton of sense, I guess, from my understanding of how I would do things on the frontend.

**Shawn Wang:** The overall impression I think I'm for it, which is why I start with that "Temporal is a workflow engine", is that it's like other engines that you would never want to write yourself. So two examples that you're already familiar with is a search engine - you would never want to write a search engine yourself. Of course you could build your own, with just a database and some fancy filters, but they're not gonna be as good; they're not gonna be as full-featured -- this is a specialized problem that people have been studying for years; just use someone's dedicated search engine when you need search.

Analytics engine - people have dedicated tons of years to storing, calling their data, and very high OLTP vs OLAP transactions; automizing those kinds of trade-offs. So you should use a specialized analytics engine for that. Similarly, I think the new emerging category of software -- I always call these special-purpose databases... The new emerging category of special-purpose database that you shouldn't write yourself is workflow engines.

**Nick Nisi:** Yeah, definitely. You mentioned that Temporal -- I think you mentioned that it started out as an open source project... Is that right?

**Shawn Wang:** Oh, yeah. The origin actually goes back to AWS, actually... So our CEO was the tech lead for what became AWS SQS. This is old school. \[laughs\] This is like 15 years ago. And then a tech lead for AWS Simple Workflow Service, which is kind of like the predecessor to AWS Step Functions, which most people know today. And then CTO left to eventually wind up at Uber, where they created an open source version of this for Uber's needs... So it runs everything from like a lot of Uber Eats, to Uber's driver onboarding.

\[36:13\] Imagine when you onboard a driver you have to go check things like their criminal background, their driving record, whatever. 17 things need to be true before you say "Alright, I'll proceed to the next step." Imagine if you could write all of that in a single function and say "Alright, just block until all these things are true. And then continue -- just let me know when it's freed up." It's a very nice programming model for that.

So they open sourced it at Uber four years ago, and then it got a lot of traction at places like Airbnb and Stripe and Netflix, all of whom have been public -- even HashiCorp as well... And Mitchell Hashimoto is one of our advisors. One of the fun things that he said, which I really loved, was that if Temporal didn't exist, then he would have had to write it. So I think we kind of scooped one from HashiCorp, which is pretty fun.

**Nick Nisi:** Yeah, that's great.

**Shawn Wang:** Yeah, so the company is two years old, and hopefully it's an open source project that is continuing to grow, and hopefully the commercial cloud offering can grow along with it.

**Break:** \[37:06\]

**Nick Nisi:** Alright, so you joined Temporal and began working, and your position there - is it head of developer experience, or...?

**Shawn Wang:** Yup.

**Nick Nisi:** Yeah. So can you tell us what that is, and is that the same as a developer relations type thing? I'm always confused on the terminology... And titles don't matter anyway, but I'm just curious what falls into your purview as creating a better developer experience, which I assume is part of it, or most of it.

**Shawn Wang:** Yeah. I kind of think of it as developer relations if you took it to its logical conclusion, which is that -- you know, I did dev rel at Netlify and AWS, and there's only so much that dev rel can do, actually... Because so much of the products and developer experience is decided before it even hits developer relations. Developer relations is very much at the most public face of the value chain; it all starts all the way from product design.

So yes, you can do blogs, yes, you can do workshops or podcasts or talks, but if you're not involved in the documentation, or if you're not involved in the API design, then you're gonna have a lot of ground to make up for if you're the ultimate end user is not represented in there.

So I wanted to approach this job with a more holistic view of what developer experience can look like... Because if you design everything with the single idea of how someone experiences your product, hopefully you come out of it with a better experience. People don't care that these are shipped by different departments; people just care what does it feel like to go through your product. So it doesn't matter who I'm talking to; what does it feel like to start to use you, to learn you, and then also to run into issues with you, like billing, like upgrades, and stuff like that. So it's a very holistic view of what a developer's journey goes through as they experience your product.

**Nick Nisi:** Nice. I assume that that is a very important role, specifically for a company like Temporal, where developers are really the clients or the customers of the product. Does it differ, I guess, if -- or is there also an analogy for internal developer experience, or...?

**Shawn Wang:** \[40:06\] Yes. I have not been involved as much, but definitely, the other half of developer experience, which I don't really mess with, is internal developer experience. The model for this though which I like is from Netflix actually, which invests a lot in their developer productivity tools... And their three big buckets, I think -- it's pretty interesting; it basically covers the lifecycle of software development, if you slim it down a lot. That's kind of how it looks like.

So how long does it take to set up? There's a lot of developer environment bootstrapping tools from -- I think Shopify has one, I think Spotify... I think Spotify, not Shopify; whatever. \[laughs\] And Netflix also has one. They have a cool codename for it, I don't remember what it is.

**Ali Spittel:** Shopapify.

**Shawn Wang:** \[laughs\] Facebook also has one... People really care about time to spinning up their environment. But then there's the whole continuous integration, continuous deployment model, and a lot of big tech companies have their own platforms for that. And then finally, there's the feedback from production back into development, so the observability platform that they have. So those are the three big buckets, which kind of cover, if you look at it in the abstract, the entire lifecycle of software development.

So for me, I like this as a model, because you can justify it based on numbers. If you can improve the productivity of the rest of your developers by 1% a quarter, then you should have, for every 50 engineers, one internal developer experience person just focus on that. And you have a budget for two of them a year, something like that. That's kind of like the math that I did. And yeah, there's a lot of improvement. There's a lot of room for improvement for building internal infrastructure.

So I don't necessarily get involved there. I get involved to the extent that I work on developer tools, which are external things that you can buy off the shelf; you can choose to buy off the shelf, or you can build in-house. And so we are one of those developer tools that you can buy off the shelf, that helps you provide a platform for building reliable microservices systems. That's a really interesting way to think about the blending of internal and external developer experience teams.

**Ali Spittel:** If a team was looking to improve their external developer experience, what are three things that you would tell them to do as a first step? \[laughs\]

**Shawn Wang:** Oh, Jesus... That's a very general question. Wow. So I tend to think of it in terms of radiating circles out from the product. I'm gonna stretch it to four, not three. So the first thing I always think about is products design. API design. Sweating the things like naming, and sweating the things like "Okay, is this product ready for release?" Some of the most impactful things that we did as developer relations at Netlify was to say no to launches. Like, "This thing is not ready, guys. Hey, we've gotta call this off." And it's unglamorous work, you are nobody's friend, but you've gotta do it. It saves the company in the long rung.

Stuff like that, getting really involved in API design and product design to make sure that everything else down the road goes much smoother. So then you radiate out from core product into something that's maybe like first-party media channels. That's where a lot of developer relations comes in, which is very much like how do you evangelize the products, whether it's from positioning, from doing a lot of talks, doing a lot of learning materials and docs as well.

By the way, no amount of developer advocates can overcome bad docs. You do wanna sort of get that in that first circle, as well. The second circle of this externalist community. The really engaged users that help people go up the ramp... Because there's only so much of introductory material and workshops and blog posts and talks that you can do... And once they get past that initial stage, there's often a big lack of content. So you wanna really think about that end-to-end developer experience, you have to provide a community where they can ask and answer questions... But even more than that, start to really build a reputation.

\[43:53\] They come to this community for answers about that general field. Sometimes I really like this area to be about category creation. A lot of companies' forums are just glorified support channels, and that's not really inspiring to hang out in. But if that's the place where you talk about news and talk about "Hey, there's this interesting paper that came out. Let's talk about it", then it becomes a real community.

For me, the litmus test of whether or not it's a community versus a support forum is "Do you expect your relationship with this company to outlast your current employer?" The other metric is like "Is it many-to-many, or is it employees-to-people?" Once you have a kind of self-sustaining many-to-many connection, I think that's a really good community, and that enhances the experience, because people can really connect and get help and get things going and collaborate.

And then finally, I think for me the last group - which I haven't really solved yet. So this is just me thinking out loud, okay? It's third-party content. It's the third-party ecosystem that's building on top of you, that has nothing to do with you. They just think it's a good idea for them to associate themselves with you, because you made it such an appealing place to be in.

So you might want to lump that in with community, but this is more about like people actually building careers, writing their books and blog posts, and doing trainings, and workshops, or whatever, with none of your involvement. But it builds that huge third-party ecosystem that we really go after in sort of a late-stage technological adoption. That's what people say when they are like "Oh yeah, yeah, you choose this technology because not only the core technology is good, not only is the company around it good, but the third-party ecosystem is vibrant around it." That's kind of what you're looking for there.

**Nick Nisi:** Yeah. How do you as a director of developer experience -- how can you grow that? Are there strategies that you can do to try and grow that third-party content and ecosystem? Or is it something that just kind of has to happen naturally?

**Shawn Wang:** There's a huge amount of luck in all these things. You have to just luck into having the right people, and then you have to nurture them. Something that people do - and I think increasingly more companies are doing - is what I've been calling super-user program; you can also call them champions programs. It's where you give them some special status, and then you give them special access to like "Here's stuff that's upcoming." You might wanna write some blog posts about it. Or "We wanna get your feedback, because we value you so much."

Sometimes it's just a naked -- like, very obvious influencer ploy, like "We wanna give you swag so you tweet about us." But a lot of the times you're actually giving really good product feedback. So I'm a Stripe community expert, and I've been involved in the naming of something that Stripe is releasing this year. And it makes me feel really good, it makes me feel really involved, but also, I think that's how you sort of bootstrap it. You have to get something going before it becomes self-sustaining. And I think all these attempts are really good.

For me -- apparently, this is a very novel idea, but I thought that was pretty natural... I started listing my users' jobs on our Jobs page. In other words, help people get hired and they'll be loyal to you for life. So why not. And we can show that -- like, you know, Stripe has us in their job descriptions. That's also a social proof for us. But more importantly, if we get them hired, they'll be loyal to us, Stripe will be saying "This is a career path that people can build on." That's something that we can provide the space for, and then hope that the right people come along to help us grow with it.

So I think maybe the analogy is a bit like farming - you make the first hoed ground and then you hope the right seeds fall in your flade. You can't really force these things. I'm curious what other good ideas have you guys come across, that I could learn?

**Ali Spittel:** My biggest thing that I really enforced with my team is friction logs. Every time we're building something with the product, it's like, green this thing is "Good", yellow is "It could use some work", red is "I didn't work for this. I would be quitting right now." And making sure that that's seen and prioritized by the product owners, whether that's the engineering manager, or the PM, or whoever, making sure that there's buy-in for improving the developer experience, especially if you are a developer experience product, which a lot of us who are building stuff for developers - we are that. So... That's my two cents.

**Shawn Wang:** \[47:59\] Yeah. Have you heard of the Kubernetes Empathy Sessions that Kelsey Hightower used to run? So he actually promised to write about those and then never did... I've been dying to learn how he did it, and what it's like to run one... Because a lot of the times people just don't wanna do it, or you feel like it's an imposition on their existing roadmap, which is like "They already have stuff to do. Why are you adding more for them to do?"

But it is true that a lot of teams who build developer tools, if you put them in a room and you give them two hours to use their own docs, they couldn't actually get it running. \[laughs\] And that's very motivating, I think, if you can manage to get it working.

**Ali Spittel:** Yeah, for sure. And before anything new launches, you should have somebody who has not used the thing before test it completely coming in brand new, so that they don't have the bias of knowing "I was in this product meeting, I know why we built it this way." Instead, they're just coming in as a total new user, because they're gonna be in the same boat as the eventual customer. So I super-agree with that. And using what you build, too; if you can build your stuff on your stuff, that becomes pretty powerful. You know that it works in production, and that it's something that you personally would actually use.

One of my biggest things as a developer advocate is if something is not something that I feel proud of talking about in public, I should block that launch. It's something that should not be out there yet, because I probably know this better than the third-party user trying the thing out. So if I cannot put my stamp of approval on it, it should not be out there. It's just my two cents though...

**Shawn Wang:** Sometimes you don't have that control though... \[laughter\] So there's a lot of politics that may come into play there, but - yes, that is the ideal. Also, one thing about this which is also -- Patrick and John Collison, they were very famous in the early days of Stripe for the Collison installation, which is that for you to onboarded to Stripe, they would come to your office and be an engineer to integrate for you, and manually get you onto Stripe. And I think sometimes you have to do things that don't scale... So I do a lot of one-on-one calls with people just explaining Temporal. Even though I could be recording a video and doing it in a more scalable way. But that gets me the reps to understand, and also the long-form narrative understanding of the customer, so that I can do things like re-pitch it in the way that makes sense to them, or use their words to reflect it in our marketing copy, or whatever... But also to kind of customize and get feedback. Sometimes people are just not that comfortable giving feedback outside of a small little private one-on-one session.

**Nick Nisi:** I like that a lot too, because that will let you really experience the common pain points that lots of people might bring up, and then you can use that to preempt that, in a lot of ways... Be like, "Oh, I know that this might be tricky, so what you actually wanna do is think about it from this perspective", or whatever. It's like teaching over and over and over; you eventually hear every possible question or issue that people have around it, and then you just kind of preemptively, without even having to think about it, know how to address that in a quick way.

**Shawn Wang:** I have maybe a controversial opinion here... I mean, it's a podcast, we need to do hot takes, right?

**Nick Nisi:** Absolutely.

**Shawn Wang:** So one thing that developer relations or developer experience teams don't do well - and I'm including myself in this. I'm just like, this is very obviously something I'm kind of going through... We don't pay for our own product. The view is that you work for the company, of course we have to give you an employee account, of course you should never worry about billing. But because you don't really worry about billing, that's a huge part of experience you never touch.

At Netlify I never knew what the paying experience was like, I never knew the fear that people have when they get DDOSed and then we charge them for it, and what it's like to talk to support, and try to talk it down, and stuff like that.

Even recently, actually, Corey Quinn had an interesting point about AWS - all AWS employees do not log into AWS the same way that most AWS customers do. We use Isengard. Ali, you know this... \[laughs\] Isengard is great for AWS employees, but we don't experience the same pain, because we don't dogfood. And maybe dev rel or dev experience people should dogfood in exactly the same way. Like, straight up give people a Brex, with a separate credit card. And put it on that Brex. But have them worry about, "Hey, this thing costs way more than I thought.' Or "I don't understand this billing statement. How come it's so hard to identify the components of it."

\[52:21\] Or even for me at Netlify, my eternal complaint was we went from a sear-based model where it's very predictable, to seven different dimensions of pricing, and you needed an Excel sheet to price it. I was like, "Wait, this is necessary usage-based billing is important, but how do we communicate this? Are enough people at the company feeling this?", so that there is a cost to adding more and more complexity.

**Ali Spittel:** Yeah, I appreciate that I still all my AWS account billing alerts, even though it's expense for me... But I still get that email every single month, that is like, "Hey, you spent seven dollars this month", which I think is kind of funny that it's like that. Usually, the services that I'm spinning up, like an EC2 instance instead of the service that I actually work on, but...

**Shawn Wang:** No, I actually ran on the free tier so fast at AWS.

**Ali Spittel:** Really?

**Shawn Wang:** Yeah.

**Ali Spittel:** I don't know... For me, I filled like 30 Amplify apps a month, or so. All my charges are the other random AWS stuff that I play with.

**Shawn Wang:** Oh, okay.

**Ali Spittel:** But I think it is valuable to get those emails still, in my inbox. I don't have to pay for it, but I still see that breakdown of like "Hey, I spent $2 on DynamoDB, and I've spent $5 on S3", or whatever. I think that that is valuable.

**Shawn Wang:** Sorry to talk a lot about billing... Money is important; money is part of the developer experience.

**Ali Spittel:** Oh, for sure.

**Nick Nisi:** It really is. And that's something that I never thought about either. There's a lot of pain points that can come in through that part, that if you're working on that piece, you're just not -- or you're working on it for free. You're not paying to do it.

**Shawn Wang:** I'll tell you a fun story... So I have a vendor that I'm paying something like $200/month for, and they -- I'm gonna mess up the exact numbers, but let's say $200/month. And then December 20th last year they emailed us and said "We're changing our pricing model. Your cost next year is gonna be $3,000." And I was like, "Wait, hang on..." \[laughs\] Like, this is panic. Most of my company is off. If we have to change platforms, we can't do this that quickly. And that's a Go backchannel, with their developer relations, who had no idea that it was a 15 times price increase on us, for the same usage.

We basically papered it over, but I was just like "Yeah, did no one see this would happen?" This is a very standard thing. Basically, we're on the edge of the enterprise tier and they cut us over to the enterprise tier. I don't know \[laughs\] That's developer experience, right? Money. I don't know... \[laughs\] I have to be responsible for their tech choice, because their tech choice is also contingent on cost.

**Nick Nisi:** Well, cool. Yeah, I wanna thank you so much for coming on today and talking to us. There is one more question that I wanna ask you, that I'm sure our audience has been dying to know... And that is, as a former - I guess I can say former - now frontend developer, what are your thoughts on the Temporal API in JavaScript?

**Shawn Wang:** Very awkward naming for us as a company, because we were named at the same time as that proposal was released... But I think it looks great, but I haven't used it personally, to be honest. Is it in stage three yet? Is it alive in most browsers in Node?

**Nick Nisi:** It is in stage three last I checked.

**Shawn Wang:** Okay. I mean, I wanna use it, I just haven't had the occasion to yet. But I think it's great. Moment.js used to be a huge dependency on people, and then Date-FNS came along and i was much better... Now the more that's built in, the more standardized -- we can rely on it, just assuming it to be a part of JavaScript.

It's pretty funny, because I always thought that it would not happen, actually. I actually thought that, because a design goal of JavaScript is for it to be embedded in all sorts of our environments including really low system memory requirement stuff... And I think the compromise for that is just that it won't be available in embedded environments. So that's okay, it's just like a compromise on the premise of JavaScript, which is that you can write this code and it runs in most places that run JavaScript.

**Nick Nisi:** Mm-hm. I'm sorry, I had to ask, just with the naming collision...

**Shawn Wang:** \[laughs\] It's all good, but I think people get over it really quickly.

**Nick Nisi:** Oh, for sure. Definitely. Well, thank you so much for coming on and learning with us in public, and teaching us in public on Temporal and the rules of developer experience.

**Shawn Wang:** Yeah, thanks for having me. A pleasure to be on.

**Ali Spittel:** Thank you so much.

**Outro:** \[56:46\]

**Horse JS:** The web is the only modern programming platform.
