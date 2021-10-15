**Gerhard Lazu:** So in 2019 we spent a bit of time together. I found out about this new startup which is doing some interesting things with serverless, and we worked together for some number of weeks. It was basically a day in a week for some number of weeks... And that was a great experience. I really enjoyed myself, I met these wonderful people - Alan, Saul, Wycliffe and Damien, and it was a great experience overall. And now, Alan, Saul and Wycliffe are joining me today to talk about what has happened since, because we've been out of touch since 2019. So between 2019 and today, what happened?

**Alan Cooney:** Good question. Obviously, the big thing is there's been a pandemic...

**Gerhard Lazu:** Right.

**Alan Cooney:** ...and essentially, for your listeners, Skyhook is a travel website, so a website where you can book adventure holidays. So obviously, this has impacted us quite hard, and it's been a challenge to get through that. But at the same time, we've taken this big opportunity to really rethink how we're doing things and really improve our product, so that we can come out of this - and are starting to come out of this now - with a much, much better product for customers.

**Gerhard Lazu:** \[00:04:16.16\] So Skyhook Adventure - what does it do as a company?

**Alan Cooney:** Essentially, at its heart, Skyhook is basically a website where you can book adventure trips, like hiking to Everest base camp... Really unique trips. Or canoeing all the way across Scotland. And when you do that, you're actually booking with a local guide. Not a big company, typically a one-man operation. We find that gives you a really, really unique, authentic experience.

So that's kind of from the guest side or the customer side, in a way... But we're also on the other side, we're a business product as well; we're a place where the guides can manage their trips and do all this kind of admin that you usually do with your trip, that can take a few hours a day, and just automate \[unintelligible 00:05:00.09\] that way.

**Gerhard Lazu:** So from that, what you've just said, how did we end up with serverless? Because that's what's happening in the backend, right? What's the link between these adventures -- do you have to be really adventurous to choose serverless?

**Alan Cooney:** That's definitely true. It's probably one for Saul. Saul is the one who really introduced us first to serverless.

**Saul Cullen:** Yeah, it's a really good question, Gerhard. I think it probably goes back to when Alan got me along... So I initially got invited along to Skyhook to help out on the payments. Payments was causing quite a challenge. Payments in the travel world is quite a complex area. It's not as straightforward as your average e-commerce business. There's lots of rules and regulations that need to be complied with, and it's quite a specialized field of payments. And I'd got a bit of experience in the payments world before that, so Alan got in touch and said "Hey, can you come along and see what we could perhaps do?" So I spent a bit of time going through that with Alan, and we did come up with a solution at the end. It's still in place to this day, it's not all perfect, but it gets the job done for us for now.

What I said to Alan - we were using a Drupal system at the time... So this marketplace, the Skyhook marketplace was based on Drupal. And I said "Hey Alan, have you thought about using some different tech to do this? You know, there's lots of things out there, there's containers, and this new thing called serverless..." And I think where I was coming at it from was I was envisaging this travel business as -- I was thinking of it almost like a travel magazine, where it was made up of multiple parts.

One part would be the trips that you browse and you look at, and I could sort of envisage that as almost like a static website, with content not changing particularly much over time. And then all these other constituent parts - the payments, the booking side, accounting, and all of those kind of aspects as being very discreet, specific tasks that nicely suited this serverless paradigm, where you would just create these Lambda functions or whatever it may be that you choose, and you set and forget, and you allow all of these discrete tasks to be handled very specifically.

That's how we then obviously joined the team slightly later on, and we went down this track of diving into the serverless world, and created the first iteration of the new Skyhook platform, which was a serverless monolith really of sorts, based on AWS... And we're using RDS as the database. We've then gone on from that journey from there, really.

**Gerhard Lazu:** \[00:07:54.27\] Right. So even though you had all these Lambda functions - that's what serverless means to you, that's actually what it translates to, Lambda functions running on AWS - they were all backed by the same RDS database. Is that right?

**Saul Cullen:** Exactly, yeah. So we were using AWS' Aurora database initially. It took us quite a while to design it, and you had to zoom out to see the whole thing, which was an interesting experience the further we got... But yeah, that's exactly right, that's how we started.

**Gerhard Lazu:** So who can tell us a bit more about that, that zooming out part? ...how that happened, and what did you discover as you started zooming out.

**Alan Cooney:** It's funny, because Saul actually had at one point printed out a version of our database schema, and the thing was huge...

**Gerhard Lazu:** Right.

**Saul Cullen:** Yeah, I'd obviously worked with SQL databases quite a lot in the past, and that was where my experience lay at the time. There were conversations when setting out, "What route do we go down here? Do we start looking at some of the more serverless-centric databases here, some of the NoSQL databases that are available that fit the serverless paradigm nicely? Or do we stick with what we know?" And at the time, the decision was to stick with what we knew.

After much consideration, you're learning so much at an early stage of going into a new, bleeding edge technology of something that's new to you, that there's this constant trade-off between picking new tools and actually getting stuff done and shipping it. And it seemed at the time that they were going down the route of choosing Dynamo, which would have been the obvious choice, given that we had elected to use the AWS platform... It seemed like there was quite a steep learning curve to that, and a lot of room for error, and we could have got ourselves into a bit of a hole that was tricky to get out of... So we didn't go for that initially, and we dove head-first into Amazon Aurora, which was quite young at the time, and evolving quite rapidly, but still quite young and missing some of the basic features and functionality that actually would have been quite nice to have.

So we continued down that route for some time. The database grew and the zooming out got further and further back, and we started to run into challenges - database migrations, and updating, and changing, and the schema lock-in that we had, all started to... You know, it was something that worked for us and it worked for a long time, but we did start to find that there were challenges there, and we then started to look at other opportunities out there and think "Hey, should we be using something that's more purpose-built for this?"

**Gerhard Lazu:** And did you?

**Saul Cullen:** Yeah, we did, in the end.

**Gerhard Lazu:** This was the beginning, right? Aurora, all those challenges, SQL-based single database, migrations were challenging, a couple of other things... So this was like, what - two years ago? Three years ago?

**Alan Cooney:** Two years ago.

**Gerhard Lazu:** Two years ago. So what else did they look like from a database perspective?

**Alan Cooney:** It's super-interesting... So we've actually moved to really splitting up our services, like Saul mentioned. We have a service for managing displaying trips, and we have a completely separate one for managing bookings, another one for accounting... And actually, each one has its own database, which is almost entirely DynamoDB. For listeners who are not aware of it, it's very similar to MongoDB, or other document-based databases. At the same time, we've moved from having a REST API, which all the serverless functions interacted with, to using GraphQL...

**Gerhard Lazu:** Interesting.

**Alan Cooney:** ...AppSync in particular, which is sort of managed GraphQL as a service. Both the API and the data layer have changed, but a lot of the underlying logic is pretty similar and is often just kept the same, just with more testing, and things like that.

**Gerhard Lazu:** So what is better about the new setup?

**Alan Cooney:** \[00:11:56.22\] I can give you the business side, and it will be interesting to hear as well on the technical side. From a business side, it's way more reliable. And you know, you have these problems as a startup, but to give you the example of a host adding their trip - so the guest or customer experience of booking a trip has always been quite smooth... But in terms of adding trips and editing trips, it's been very clunky and very bug-prone, so we'd \[unintelligible 00:12:20.08\] support tickets every day. If you gave a demo, there was a good chance it would break \[unintelligible 00:12:25.01\] obviously quite embarrassing... And that's basically gone away.

**Gerhard Lazu:** So the system is a lot more reliable today than it was two years ago.

**Alan Cooney:** Yes, and that's transposed into other metrics, like many more host sign-ups, and many more trips on the website, just from having this much more robust and easier to use set of tools.

**Gerhard Lazu:** What about developing the new setup? What is it like writing code for the new setup versus the old setup?

**Wycliffe Maina:** Yeah, \[unintelligible 00:12:50.02\] It's always easy - or easier - to keep focus, easier to deploy, and easier to know when you have that separation of concerns. You're able to know when you're updating something or not updating something, that is your code is very specific.

Another thing that \[unintelligible 00:13:14.17\] is tests, which - we have increased the number of tests we have. We have a lot of unit tests, we have always been having \[unintelligible 00:13:24.02\] go for the 100% test coverage... And we are looking to sort of like bring in some integration testing there, and some \[unintelligible 00:13:33.00\]

But all in all, the scope of this task we are doing actually is, for instance, over the last few months, we have been implementing a few services, and because you're working on a very specific area and it's a Lambda function, it's a little bit easier to work through it, be able to test it, and \[unintelligible 00:13:50.27\] service in general.

**Gerhard Lazu:** That makes a lot of sense... Rather than changing a part of this big whole, now I have discrete units that you can focus your blast area, so to speak, so if there's a failure or a problem, it's limited to that specific service.

**Wycliffe Maina:** Yeah.

**Gerhard Lazu:** So did this change the deploy times, basically how quickly the code goes into production?

**Wycliffe Maina:** Yeah, this is actually the effect of that. The deploy times are like mostly three minutes. The tests are also--

**Gerhard Lazu:** Three minutes?

**Wycliffe Maina:** Yeah.

**Gerhard Lazu:** Wow...

**Wycliffe Maina:** Tests are also faster... And it's always easier to get feedback when you are doing deployment. You can even say like -- I would even have like a local \[unintelligible 00:14:29.15\] I would just push it to the CD and see \[unintelligible 00:14:33.03\] That's the one I'm using today, because having dealt with the old system, because I joined somewhere in the middle, it was always difficult to get a quick feedback cycle. Also, it took very long to deploy the whole service, because you'd have to deploy everything together.

**Gerhard Lazu:** How long did it use to take?

**Wycliffe Maina:** About 20 minutes? I'm not sure...

**Gerhard Lazu:** 20 minutes? Wow. And you think that's too long? Some people would say two hours is too long... So it's really interesting that you think 20 minutes is too long, which again, for some would be perfectly okay. So 20 minutes was too long, and now three minutes is just about right, would you say... Right?

**Wycliffe Maina:** I personally would like it to be a little faster... \[laughs\]

**Gerhard Lazu:** Wow. Okay...

**Wycliffe Maina:** Yeah. \[unintelligible 00:15:16.17\] the better.

**Gerhard Lazu:** Speed is addictive, right? And first of all, as you mentioned, very important - the quicker you can understand your mistake in production, the quicker you can fix it... And if you can do it so quickly that people don't even notice it, isn't that the best?

**Wycliffe Maina:** Yeah, that's even better.

**Gerhard Lazu:** Amazing. So back to you, Saul - from an architecture perspective, how many services do you have? Do they interact amongst themselves, do they share anything? What does that look like?

**Saul Cullen:** That's a really good question. Gosh, I don't know what they were at the last count. We seem to add about one a week as we move over... And as Wycliffe says, we've been doing a lot of this migration. So we keep the services very specific to tasks - we have reviews-related services that handle everything to do with customer reviews, and bookings-related services... So probably you could count our number of services on your hands at the moment. But we anticipate that growing over time, and this new architecture allows us to very quickly add new services, test them... And like you were just saying, you get to that point of failure and find where your failure is much more quickly, and then you can iterate correct and get out what the customer actually wants. And I think that's actually an interesting area.

\[00:16:36.14\] So these feedback loops is something that -- when you came along, Gerhard, I remember sitting down with you, and you said "We've got to get this DevOps cycle going, and get these feedback loops going really rapidly, so that you can learn from what you put out there and feed that back into what you're working on." That sticks in the back of my mind all the time really, and we're constantly thinking "How can we get these feedback loops going faster and faster?" And this new microservices-based architecture really has helped us with that, and we're shipping at much, much higher velocity than we were previously.

Another thing we're starting to try as well is including things like feature flags. Instead of pushing out large chunks of code, we'll every day push out multiple new features and just flag them off and show them to specific sets of customers, or ourselves internally, we'll test those. And all of these sort of architectural choices actually do have very direct impact on the customer, on how rapidly features reach them, on how rapidly we can improve those features, learn what the customer wants... So I think it's definitely something that I've put a lot of thought into, and as a team we've put a lot of thought into that as well.

**Break**: \[00:17:52.18\]

**Gerhard Lazu:** I would like to go back, Saul, to how those microservices talk amongst themselves. First of all, my understanding is that those microservices are just collections of serverless functions that get deployed as one unit. So it's just a grouping of serverless functions. They all have their own data store, which is DynamoDB... And what I'm wondering is how do they talk amongst themselves? Or do they even talk among -- I mean, is there any need to communicate between services?

**Alan Cooney:** I wish there wasn't... \[laughs\]

**Gerhard Lazu:** Wouldn't it be perfect if there was no network latency, nothing failed? Yeah, sure...

**Saul Cullen:** Absolutely... I mean, this is something that's an evolving area for us. There's lots of solutions that people tout out there... You know, people using gRPC to communicate between microservices... We're using AWS AppSync, and what we have is we have a separate API service. And that API service allows us to expose the AppSync service to each service. So everyone can use the API to query for whatever data it was.

\[00:20:07.15\] We're still at the early stages of running with this and using it, but at the moment it is working really very well for us, for the most part. Don't know if Alan wants to add anything to that, because it's an area where Alan has really pioneered a lot of that...

**Alan Cooney:** Yeah, so that's for synchronous communications specifically, which is actually quite a small part of total communication between services... And it's quite an unusual setup actually, in that the services are going back through AppSync -- because often you have a mutation to create a booking, and then the booking service will go back to AppSync, basically to the API, and say "How much availability does this particular date have? i.e. can we make the booking, or is already fully booked?" But the majority of communication happens asynchronously via an AWS Event Bridge, which is -- we ended up trying a lot of different services for this, but AWS Event Bridge has gained loads of traction recently in serverless communities, because... It's great. That's the short answer.

For example, the booking service, when you make a booking, that will put some events onto this sort of central event bus, and then the trip service will listen to that and say "There's a new booking. Let's reduce the number of spaces." And all of that happens in a few seconds, but it's asynchronous, so we don't have to worry about any problems with the services communicating, \[unintelligible 00:21:34.26\] and all the rest.

**Gerhard Lazu:** Okay. What sorts of messages do the services put on the Event Bridge?

**Alan Cooney:** A lot...

**Gerhard Lazu:** But are they JSON, do you have a specific protocol, do you have any versioning? How do they know how to read those events? Do you have any schemas? How does that look like?

**Alan Cooney:** Sure. It actually uses the same schema as our API, which makes things very simple. So the booking object on our API is the same as the booking object, as the JSON object that's put on the event bus... Alongside a standard name, so we can create booking updates, something like that.

**Gerhard Lazu:** Okay. So event bus, not even bridge.

**Alan Cooney:** Event bridge, which is an event bus, sorry.

**Gerhard Lazu:** I see, okay. That makes sense. So in terms of number of transactions, volume, latency, anything like that - can you give us some numbers? What looks like a good latency? Do you have such a thing? Do you have any SLOs, any SLIs? Anything around how well services interact?

**Alan Cooney:** Definitely I think we can get better at this, is the short answer... Most queries respond within 10 milliseconds. For a web app perspective, that's very fast... And that hasn't caused us any issues at the moment.

**Gerhard Lazu:** And that's internal, right? So the services, when they talk amongst themselves, they can expect asynchronous responses to come back within 10 milliseconds...?

**Alan Cooney:** Yeah.

**Gerhard Lazu:** Okay. And what about the public world? Do you have CloudFront? What's in front of the API?

**Alan Cooney:** This is probably one for Wycliffe, but basically Next.js sits on the front of it... But maybe Wycliffe you can explain a bit about that.

**Wycliffe Maina:** For the frontend we're using Next.js, which is based on React for those who don't know about that... So most of our important pages, that is the trips pages, the homepage with your trips, hosts, and so on, are SSR-ed. So Next.js goes to the API, fetches the data, and then sends in a fully SSR-ed static page to the frontend. \[unintelligible 00:23:36.21\] so that the page gets the data and can behave more like a \[unintelligible 00:23:43.01\] application rather than a static application, which is normally what you don't want. You want to be able to provide a rich user experience for the user.

So essentially, what this involves is the fetching between Next.js \[unintelligible 00:23:58.02\] The application is hosted on Vercel, which is the parent company of Next.js, or the company that builds Next.js and open-sources it.

\[00:24:10.02\] Essentially, that goes directly to AppSync. At the moment we don't \[unintelligible 00:24:13.05\] but that might be an option for the future. So AppSync directly goes to the individual services to get the requested data, and then it does that through Next.js, which sort of caches some pages that don't change that frequently, so that the users get some pages much faster than it would involve getting them directly through AppSync \[unintelligible 00:24:34.20\]

**Gerhard Lazu:** That makes sense. So Next.js - I imagine that is a JavaScript framework, right? Based on React. That's my understanding. So how do you serve that to users? So if a user goes, for example, to SkyhookAdventure.com, I imagine they load this Next.js-based response...

**Wycliffe Maina:** yeah.

**Gerhard Lazu:** Where does that get served from?

**Wycliffe Maina:** That's based on Vercel. Vercel.com I think is the website... Which basically is like Netlify. It's built on AWS as well, and uses Lambdas under the hood. Basically, each page we have is a Lambda function, but Next.js sort of abstracts that away from us.

**Gerhard Lazu:** So I still in my head am not understanding this... So the request comes in, the DNS... What does the DNS for SkyhookAdventure.com point to?

**Wycliffe Maina:** It points to Vercel servers.

**Gerhard Lazu:** Vercel, I've never heard of them. We'll need to put it in the show notes, because I've never heard of them. Okay... And they are similar to Netlify, right?

**Wycliffe Maina:** They are much similar to Netlify. In fact, they have a lot of similarities. Netlify is the more mature of the services, but Vercel has a zero config option, which means you give them an application, whether it's Next.js or any other framework, and you can get up and running without having to configure anything.

**Gerhard Lazu:** Interesting. And how do you give them this application?

**Wycliffe Maina:** They have a GitHub application. You connect your repository to their servers, and they determine which sort of application it is, and determine the configuration required \[unintelligible 00:26:04.21\] on their servers.

**Gerhard Lazu:** Right. That's really interesting.

**Wycliffe Maina:** Of course, we are using a custom deployment environment, because we need to pass in some environment variables from AWS, which means we have our own custom CI/CD environment to deploy that.

**Gerhard Lazu:** Okay. And where does the CI/CD run? What is CI/CD in your case?

**Wycliffe Maina:** In our case we basically use GitHub Actions. The faster step is usually to get the secrets from AWS, that is SSM mostly... And \[unintelligible 00:26:35.02\] the URL of the API, AppSync API, and then passes that over to Vercel, so that it can \[unintelligible 00:26:46.04\] the build.

**Gerhard Lazu:** That sounds really interesting. Okay... Again, I've never heard of this service. I definitely wanna check it out. I think you said why you chose it, because Netlify just requires more configuration, right? That was my understanding.

**Wycliffe Maina:** Yeah. With Netlify you have to do a lot of configuration for different environments. It too has improved over the last few years, but the zero config, and then also you factor in that Vercel is the parent company for Next.js, so it's their own product...

**Gerhard Lazu:** I see...

**Wycliffe Maina:** So it becomes a very good combination.

**Gerhard Lazu:** I see. That makes sense. Okay, that makes sense. And do you have multiple environments? Do you have like staging, or per-feature environments? Or is there just like a single production?

**Wycliffe Maina:** That's the beauty of using Vercel - another advantage is that each PR you have gets its own unique URL. So if multiple people build different \[unintelligible 00:27:42.14\]

**Gerhard Lazu:** That sounds really interesting, and I really like that idea. I know Netlify does something similar. But I've never understood... For a stateful service - great. You have a feature environment. But what about the data? How do you do the data migration for that? How do you solve that problem?

**Alan Cooney:** \[00:28:06.12\] We would love to have one complete backend built per PR a well, which is close to being feasible in the serverless world, because it costs pennies to run... And then really per PR you could have your own \[unintelligible 00:28:17.03\] your own environment. But we don't have that; it doesn't seem to be at least easy with AWS... So we have \[unintelligible 00:28:25.21\] but it goes to one staging backend which has a set amount of test data.

**Gerhard Lazu:** I see. Okay, and then I imagine that GitHub Actions does any migrations that it needs to do on the staging environment, so that the PR -- is that right? Or do you have like per-PR -- like, how does GitHub Actions know what to do on the staging environment based on the type of push or whatever action it is?

**Alan Cooney:** It's basically configured in a GitHub Action file, a workflow file, per microservice, or there's a separate one for the website, the frontend... And that defines a series of steps that it goes through specifically for that service or the website.

**Gerhard Lazu:** That makes sense. So I'm imagining that you have different repositories per microservice. Is that right?

**Wycliffe Maina:** No, we have a single repository for all our services.

**Gerhard Lazu:** Yes! I've got something right! Yes! \[laughter\] I'm a big fan of single repositories. Why? Because it keeps everything simple. Now, I know that's something we discussed in 2019... How well did it actually work in practice with all these changes? I'm so curious to hear about this.

**Alan Cooney:** This has been a super-pivotal thing in terms of leverage that you yourself have had on the company, Gerhard, in terms of saying "Both let's split it up into microservices, but also, at the same time, let's bring everything into one repo on GitHub." And the beauty of it is -- for example yesterday I pushed something which actually impacted every service, and you just see a list of 30-40 ticks as the different CD pipelines are running in parallel, and then you can push it out with a huge amount of confidence without worrying about synchronizing everything.

**Gerhard Lazu:** Wow... I'm getting so warm and fuzzy right now, and it's not the weather, I can tell you that... This feels great. I think this is the best feedback I received all week, all month... I don't know, this was like amazing. Okay... Wow, it makes me so happy; you have no idea. Great.

I'm wondering now, Wycliffe, what does a merge into the main branch look like? What happens between merging into main and the code appearing in production? Can you run us through that? You have three minutes, because that's how long it takes, right? \[laughs\]

**Wycliffe Maina:** Yeah, \[unintelligible 00:30:51.14\] so it's going to be a single commit... And the first thing it does is run a few tests, that is unit tests. And once that's done -- so that means also running the linting, and also trying to build it so that we can catch all errors that are \[unintelligible 00:31:13.27\] and tests written before. The reason we do this is sometimes something that happened on a PR and the test passed, the conditions might not be duplicated on production... So we have to be sure that all the tests are passing.

Then after that \[unintelligible 00:31:33.12\] The reason we do this is because sometimes we run integration tests \[unintelligible 00:31:39.01\] staging, which is the step that comes after deploying to staging. And \[unintelligible 00:31:44.26\] on the staging environment that is the integration tests, then the deployment to master takes place; that is the deployment to production.

So all in all, depending on the amount of tests and the size of the codebase, that may take anwyhere between one to three minutes. On our new smaller services it's even faster than that.

**Gerhard Lazu:** \[00:32:07.18\] Do you find yourself pushing changes at the same time to multiple services? Alan, you mentioned yesterday you made a change... What does that look like, I'm wondering, Alan?

**Alan Cooney:** Yeah. I don't do it that often, to that many services, for sure. That was actually a change for billing tagging in AWS. But basically how it works is - for example, you want to update the website and your backend service. You can push those through at the same time, especially if the website feature is feature-flagged, or not available to users yet; you can push them at the same time, and that lets you encapsulate maybe a small piece of code that's spread across several areas, and see the change very quickly.

There's actually quite another cool feature here, which is that we use GitHub Actions, which means we can have very specific tests for specific services. Saul mentioned our API service, which basically just has a GraphQL schema, and that checks for breaking changes to the schema on every push... Which is obviously super-important if you don't want to have to version your schema... And the accounting service spins up Puppeteer to run some tests, very specific tests, on our payments provider.

**Gerhard Lazu:** That's interesting... Okay. So you have all these tests, all these services... How do you configure them? How do you set everything up in the first place? Because there's quite a bit of things, like GitHub Actions, on AWS you have all those services... How do you set everything up? What do you use for that?

**Saul Cullen:** So before CDK there's Hygen that we use. When we first build a new service, what we'll do is we'll code-gen it using a tool called Hygen, and that sets up the basic template of each service. So the core things that we require in a service will be there, will be ready to use, and will be standardized across them. So anything that needs to be defaulted. And that's actually proven extremely useful for allowing us to go away maybe individually and create a new service that you can then pass on to another team member who will have an idea of what the service should contain, you can dive in and understand it at a high level very quickly.

**Gerhard Lazu:** Okay. Where do you store all this config?

**Alan Cooney:** Hygen is very interesting in that it actually stores your config in your repo, next to where it's being used. So that makes it super-easy to edit, because obviously -- so it contains things like testing and linting setups, so we can go in there and add something in very easily if we want to change how it's done for future services.

**Gerhard Lazu:** Okay.

**Alan Cooney:** So it's committed up, essentially.

**Gerhard Lazu:** Okay, that's great. It's version controlled. I love the sound of that. How does it get applied? How do all those changes get rolled out onto AWS?

**Alan Cooney:** When we were working together a couple of years ago, Gerhard, we were using CloudFormation...

**Gerhard Lazu:** Yup, I remember that. Oh my goodness me... \[laughter\]

**Alan Cooney:** And one of the things you said, which is obvious in hindsight, is "I really hate yaml, especially when it's 500 lines long for a service." And of course, our services - they're mostly not actually Lambda code; they're things like Simple Queue Service (SQS) queues, and lots of built-in AWS products to remove the amount of work we have to do. So we now deploy that using AWS CDK, which lets us write infrastructure in TypeScript, and it also means that we can create separate node modules. They basically have some pre-built defaults in them, so if you want to stream from DynamoDB to Event Bridge, so take your data and stream it to the event bus, you can add in three lines of code - basically a custom CDK construct that we've had - that behind the scenes creates a Lambda functions and queues and dead-letter queues that alarms if it fails; all this complexity. But it's just three lines of code that says "I want this DynamoDB table to stream to my event bus."

**Gerhard Lazu:** \[00:35:58.16\] Okay, that sounds like a very good setup, I have to say... And I also would like to add that my relationship with yaml went through different cycles. It's definitely a love/hate sort of thing, I have to say that... But I think my biggest distaste from abusing yaml came from seeing it being used in CloudFormation, where it'd literally do increment, like an inc - can you imagine the string inc put in a list, and then you had two numbers which had to be incremented? A variable would be generated out of that... So basically, you'd program in yaml, which I think was abhorrent. You should never do that.

I remember that moment, and I think I will remember it till the end of my days; that was horrible. Why would you do that? If you want to do that, then just use a programming language, like TypeScript. That makes a lot of sense. I remember that moment. So I'm really glad that you went down this path, because if you do have to do that, with any sort of templating, any sort of smart logic - don't do it in yaml, please. It's just horrible. So yeah, I'm very glad that that worked so well as well. Nice.

**Alan Cooney:** Yeah, that's had a big impact on us. One of the most depressing things is changing a small piece of CloudFormation and then waiting 15 minutes for it to tell you that there's something wrong in the CloudFormation.

**Gerhard Lazu:** That's right. I remember that. That was painful. Well, I'm glad that you're in a much better place now... And with that in mind, I know that things can always improve. It's one of my favorite things about this specifically - it's easy to improve. And the whole industry keeps improving all the time. So what I'm wondering now is what could be better about your current setup? Do you have some improvements in mind that you would like to do?

**Saul Cullen:** We're constantly looking for improvements. We're working with what I think a lot of people would consider as bleeding edge technology, and that means that some of the decisions that we make don't always pan out to be the best ones. It can take trying them out to actually realize that it isn't the best tool for the job for us. That was something we talked about previously. We went down the route of using RDS as a single database store, and found that actually it made more sense to go down the Dynamo route.

What we're always constantly struggling against those is how we use our time... So we can seek to change things like we are currently - we're doing a number of migrations \[unintelligible 00:38:23.17\] services, but what that means is we reduce the amount of business value that we ship. So there's this push and pull constraint that we're working against with what may be best for the dev side, and what we want to work on, what we want to chop out, change, improve, go back and fix, versus what we need to ship to customers to improve their lives and to release more business value and grow the company.

To answer your question, I think an area for me that is so important is development; the development experience is something where we still need to make quite a few improvements. You mentioned your questions about how our data is set up, and whether we refresh our data and things in our staging environment... And you know, we need to improve that so that the development experience is more fluid and more true to what we then push out to production. I know Wycliffe's got a few thoughts around this, so maybe you can jump in there Wycliffe.

**Wycliffe Maina:** I think what Saul also is talking about is more of like environment portability, so being able to create a whole bucket for a PR and being able to tear it down once the PR is done. One of the biggest challenges we have mostly when we're working is - if we're working with the same service, we end up having two or more different PRs. \[unintelligible 00:39:49.25\] so this can become a frustrating point whenever you're doing that.

So we are looking to technologies or solutions to help us into that area, so that we are able to \[unintelligible 00:40:06.23\] a little bit more, as different teams work on different solutions for different areas.

**Gerhard Lazu:** \[00:40:17.07\] I think that makes a lot of sense... Being able to experiment with data, being able to do things at maybe a larger scale, production scale... Like, how does this impact production without taking production down? That would be nice, especially if you have to do migrations or big changes... So if anyone is listening to this that has an idea of how to do this better, if someone knows \[unintelligible 00:40:36.10\] AWS that are solving this problem or are thinking about it, I'm sure that Alan, Wycliffe and Saul would love to hear from you. So don't be shy. We're all friendly, all of us.

**Break**: \[00:40:49.19\]

**Gerhard Lazu:** Is there any particular incident or war story that you would like to share? Something that you've learned from. It doesn't have to be tech-related - it can be business-related - but something that obviously impacted your users. Because at the end of the day, everything that we do, whether it's coding, shipping, has an impact on our users. And when we get things wrong, they are the ones that suffer the most. So it doesn't always have to be code changes, or migrations... Sometimes it can be providers that you depend on that fail you, and in turn, you fail your users.

**Saul Cullen:** Yeah, I'm sort of having to think through this... And obviously, as a young team, we come across a lot of challenges on a daily basis. I think perhaps an area that's been particular challenging for us over the last year to 18 months has been payments, actually. When I originally joined to help out with, we went down the route of choosing our payments provider... And obviously, this global pandemic suddenly hit at the early stages of 2020. And in the travel industry, as I mentioned earlier, there were lots of these rules and regulations that you need to follow to take payments for future holidays. It creates a lot of intricacies when you're taking these future payments. You've got chargeback mechanisms and things, and Section 75 that comes into play, and travel instantly becomes what's termed a high-risk industry from the card providers and the merchant banks' perspectives.

We certainly came across an earlier incident where our payment provider disables refunds for us, unbeknownst to us. And of course, in the early stages of a pandemic occurring there's all manner of changes to bookings going on, customers no longer able to travel... And that was something that had really a very significant impact on us from an operational perspective. Suddenly, the tasks that we were working on one day had to be immediately shelved, and the immediate issue jumped upon... Because at the end of the day you've got to look after your customers. I'm a strong believer in customer experiences. As you know, Gerhard, there's a great book out there - shout-out to to Joseph Pine and James Gilmore on the Experience Economy. Great book, have a read.

\[00:44:14.05\] So at the end of the day, experience for customers comes first from our perspective, so we jumped on this and tackled it in our own way, and patched the holes as best we could... But I think it was quite a realization for us that rolling with single providers for third-party services definitely -- it's an obvious thing, but it comes with a lot of risk. And when it's a core service such as payments, it's something that you really need to think about what your options are, in the worst-case scenario. It's something we're still working on.

We've talked a lot about it actually since that occurrence, and we've got a lot of ideas of how we can fix it, there's tools out there like -- some of your listeners might have heard of things like Spreedly, where you're able to hook in with multiple payment providers rather than running a single provider like Stripe, or whoever it might be; you can maybe have two or more different providers that get selected, depending on various criteria that you can define, or allow Spreedly to define. They are a potential solution, but again, all the complexities in the specific travel world add another layer to solving that challenge. So it's a really interesting one, and I expect something a lot of people are experiencing right now.

**Gerhard Lazu:** That's a really good one, because it makes you realize how even in the tech industry, where it's all about code and shipping, you hit against business realities like payments. Real money has to flow somehow -- well, real... It's mostly virtual these days, but still, money has to travel somehow, and you start integrating with all these providers. So nevermind it's just your technology partners or providers, it's also the payment providers. And for you that have to deal with trips... The trip agencies, I imagine, the travel agencies that you have to deal with as well - how were they like for you?

**Alan Cooney:** We deal with local guides rather than agencies. They're very small companies. So to take a step back, the way it works for payments on our website is you make a payment, and it actually gets protected in usually a trust fund. That's where the complexity comes from. So you can't just go through Stripe and send it on \[unintelligible 00:46:30.07\] straight to the provider. It gets protected until after the trip.

So from this perspective, there was not really any risk as far as we were concerned, in that all this money can simply be returned if the trip can't go ahead. It just so happens that at the time our travel payments provider, and indeed several others as well, prevented all automatic refunds across their API for all customers. So we were hit with this really challenging problem.

**Gerhard Lazu:** How did you solve it?

**Alan Cooney:** Yeah, it was actually a business solution in the end. We managed to convince our provider that we were a special case, that we were very safe, and they re-enabled at that time automatic refunds for us. So it took a few weeks to solve, which was obviously very stressful and we were really concerned for our customers, who are nervous and they want to see -- if they need a refund, they want to see that quickly. So they don't worry about the financial stability of the companies involved. But that was the solution in that case. We actually had a very related incident a while later, where - again, we had a system issue with payments, and we ended up solving it with a very interesting and unorthodox approach...

**Gerhard Lazu:** I like where this is going...

**Alan Cooney:** Yeah, it was really useful actually having this event system, because basically what happened was refunds \[unintelligible 00:47:47.01\] in various ways, and so we replayed our event stream, this time hooked up to a Lambda function which sent an email to the support team of our payments provider to resolve the issue, and triggered a to-do to ask for us to check that it had been resolved.

**Gerhard Lazu:** \[00:48:04.29\] That's very clever.

**Alan Cooney:** A bit of a complex solution, but you have to think outside the box with these, so... Much credit to the team for creating that.

**Gerhard Lazu:** That is really genius, because statements of facts - those things happened, and what you do about those things can change. And having the ability to replay and take a different course of action for thing that happened is so powerful. Wow. So tech solves this specific problem. Interesting. And it's obviously bright minds, it's not all tech.

Okay... So we talked about this particular incident, this particular tricky situation. A company fighting for their customers - I wish that was the case more often. And I know that many companies do the right thing, but I also know companies that don't do the right thing, so this is admirable... And especially when the travel restrictions hit, I know that a lot of people were affected in many, many ways. So it's great to have a peek behind the scenes as to what that looked like, and companies fighting for their customers - the payment providers, the... It wasn't trust funds; how did you call them, Alan?

**Alan Cooney:** No, exactly, it's trust funds \[unintelligible 00:49:11.28\] usually.

**Gerhard Lazu:** Having those relationships coming into play, and you having to lean on those, and eventually the right thing happening weeks after the fact - there's a lot that goes in the background. And at that point, does it matter to ship code? Does it matter to add new features? Not really, right? Because the most important thing is doing right by your customers. I think many sometimes can get carried away in this world of tech and forget about that critical, critical aspect.

Okay, so - still thinking about your customers, the Skyhook Adventure customers, which feature that you've shipped in the last six months made you most proud, most happy? And you can go around, maybe you have different favorite features... Wycliffe, how about we start with you? Do you have a specific favorite feature? It doesn't have to be customer-facing, but it would be nice if it was.

**Wycliffe Maina:** I'd probably say hosts sign-up. I sort of consider that my baby. I worked on it for a long time, I made a lot of mistakes in the process, and learned a lot over the last few months. \[unintelligible 00:50:14.12\] an increase in host sign-ups.

**Gerhard Lazu:** How did it work before this feature was developed? How did hosts get signed up?

**Wycliffe Maina:** The whole process is that we are moving over to a new service. We sort of \[unintelligible 00:50:38.11\] each of us took an individual task. I focus on the host, I think Alan was working on the booking service... Essentially, the idea was to improve reliability so that the process of signing up was to be much smoother. So we have an approach where we guide the hosts with a process of explaining to them what it entails, and then sort of like signing them up so they can have an account, and then creating a host profile, and then going on to our trips. \[unintelligible 00:51:13.15\] we also did some improvement on the UI. I also request a lot of information upfront; before I think it was being sent over a spreadsheet, or something.

**Alan Cooney:** I think it's important to emphasize that previously the hosts filled in PDFs and a spreadsheet...

**Gerhard Lazu:** Wow.

**Alan Cooney:** You know, these are very MVP things, so it's not just -- when we say "migration", okay, there was some migration involved, but actually it was changing an MVP into a brilliant experience for the hosts.

**Gerhard Lazu:** That sounds right.

**Alan Cooney:** And we've seen a fivefold improvement in the number of hosts signing up, so that's something to be proud of.

**Gerhard Lazu:** For sure, for sure. It just goes to show, there's many areas like that that you can always improve. Knowing which one to focus on, which is the most important one - that's where the business comes into play... And they say "You know what - this is what we need, because the company will be able to do these things if we do this thing first." This is the most important thing, because it unlocks other things...

\[00:52:11.21\] So that is a very nice business working well with tech, and working well with maybe marketing, who knows... I don't know -- I mean, even though you're four people, all of you wear different hats, I know that, and you're all hands-on. That's one of my favorite things about startups - everybody gets to do everything and grow in different ways that they never experienced.

So how about you, Alan? Which is your favorite feature?

**Alan Cooney:** Yeah, this is kind of a strange one, but cancellations. It's a bit different with the Covid pandemic, but they want to cancel or change dates or do something like that... And previously, they had to reach out to us, we'd get back to them within 24 hours, maybe they had some questions about availability, how they can do everything... And actually, this is something that happens the whole time - customers wanna switch dates, for example. Now they can just do that straight -- they go onto the website, click on their booking, they can click Cancel, they see all the details about what's gonna happen, they can choose the appropriate option to change date, or get a refund, or whatever they need... It's just a colossally-better customer experienced.

**Gerhard Lazu:** That's amazing. So let me guess - is there a cancelation service now?

**Alan Cooney:** It's actually in the booking service. That one is quite big, I have to confess. The backend code is pretty simple. It's just a really nice user experience, and I know Damien from the team - who's not here today - who works in operations, that also produced massive decrease in the number of support tickets during the pandemic, as you'd imagine... Because for those who want to use self-service, they can just do it instantly.

**Gerhard Lazu:** What about you, Saul?

**Saul Cullen:** There are a lot of new features that have been going our recently that are really exciting, I think, from both the hosts side and the customer side of the Skyhook marketplace... I think one that's been asked for many times by our customers, and internally, is the ability to discover new trips. As our number of trips and hosts on the platform has increased, so has that need to be able to find the right one to go on as a customer.

What we implemented recently, as we touched upon earlier, was utilizing an Algolia third-party site search tool to provide that functionality for us. Ordinarily, something in the past may have taken weeks or months to implement, was done within 7-8 days, fully integrated, with lots of capability behind it. I was certainly really proud to see it go out, and we're starting to get metrics back on that now from customers showing a lot of them using it.

Also, we're starting to see areas where we need to make improvements to that from those metrics, where we can add features and functionality and where we can remove them.

It sort of takes me onto a slightly tangential point actually about third-party tooling. It's something that we in the last few months have started to use more of. As developers, we often think "Hey, I could build that." We've got this great thing called serverless that will take a week to build a solution to whatever problem it may be... And invariably, it ends up taking significantly more timp to ship those features.

So what we started to do, given that we're a very small team at the moment, is to look for third-party tooling to give us rapid solutions that we can then -- you know, either they provide a long-term solution for us and they're really fully-featured and they do what we need without creating too many single points of failure or issues, or they can act as a proof of concept for us. "Is this something that customers really want, and should we invest team time in it?" Because as you mentioned earlier, when you've got a small team like this and you've got a pandemic going on, really prioritization is actually the crucial thing that we've got to get right. We've got a list of features as long as our arms that we could work on and we know customers would be asking for, but which one is gonna provide us with the most business value back and the most satisfaction for our customers?

\[00:56:15.23\] So that's an area where we're turning to these third-party tools to prove some of these ideas and concepts really quickly, and reduce those feedback loops that we talked about earlier.

**Gerhard Lazu:** Any tools that you would like to mention, Saul?

**Saul Cullen:** Certainly Algolia on the search is a great tool. I think they're probably a market leader at the moment, and that's been really positive; our experience was good. Third-party email services - you know, it's very easy to start linking services into AWS SES (Simple Email Service), and things like that... But you then find yourself building a lot of your own logic behind it, and actually it's easier to still outsource to the MailChimps of this world, the Drips, Customer.io or whatever may be your preference.

**Gerhard Lazu:** What do you use?

**Saul Cullen:** We're using Drip at the moment. Drip's a specialist e-commerce email marketing tool. Our integration is relatively light. It's primarily a frontend integration that we've done so far. We'd like to hook into more of the backend and some of the events that we fire off as well; that's something we will no doubt do in due course... But the key is they're a specialist e-commerce email provider.

So for us, choosing an email provider that offers all of the things that you need when you're essentially selling things on your site is pretty key, and actually a lot of the email services have gone down that route, to try and answer more specific customer questions... Whether they're the perfect one out there - it's one of the reasons we still maintain quite a light integration as well. We want to verify that it does everything for us that we need before we dive head-first in.

**Gerhard Lazu:** That's very good, Saul. Thank you for that. I have one last question... I think Alan is the one for this. If I've been listening to this for the last 45, 50, 60 minutes, however long it was, and if there was one key takeaway from this conversation, what would that be, Alan?

**Alan Cooney:** I think the big technical takeaway certainly is that we've really enjoyed working with all these serverless tools, and they've helped us ship code, and ultimately great features and experiences to customers much faster... So definitely, if you're a developer and you're looking at some of this stuff and maybe haven't used it yet, I'd really recommend checking out things like AWS Lambda, AWS Event Bridge, or the equivalent tools with the other providers. It's really, really useful for improving velocity and ultimately what the customer gets to do with your product.

**Gerhard Lazu:** That sounds great. Alan, Saul and Wycliffe, it was my pleasure. Thank you very much for taking the time and for sharing so many good things with us. Thank you.

**Alan Cooney:** Thank you very much.

**Saul Cullen:** Thank you, Gerhard.
