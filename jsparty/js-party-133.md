**Jerod Santo:** Hello, and welcome back to JS Party. I'm Jerod Santo. Today we are here to talk about Blitz.js, a full-stack React framework built on Next.js, inspired by Ruby on Rails; it has a new full-stack data layer, lots of interesting stuff. I'm joined by Blitz creator, Brandon Bayer.

**Brandon Bayer:** Hello.

**Jerod Santo:** Thanks for joining me, Brandon.

**Brandon Bayer:** Thank you. It's great to be here.

**Jerod Santo:** Well, we're gonna have some fun today, and Brandon has a really interesting framework. It's a full-stack React framework, and it has a manifesto... So whenever you wonder "Where did we start with this thing?" Well, if the person has taken the time and put the thought in and written a manifesto, you've gotta start with the manifesto, right?

**Brandon Bayer:** Yeah...

**Jerod Santo:** That's where it all begins right there.

**Brandon Bayer:** Yup.

**Jerod Santo:** Did you write this before you started Blitz? Did you start Blitz first and then you wrote the manifesto? Tell us the story.

**Brandon Bayer:** The story of the manifesto or how Blitz started?

**Jerod Santo:** Give them to me both.

**Brandon Bayer:** Alright. Well, so how Blitz started was I've been a software consultant for a number of years, building apps for mostly small startups... So I've built multiple React applications from scratch, full stack. Throughout 2019 I kept feeling like we need Ruby on Rails for React. And if you go back, you can see I've tweeted about those every few months. One time I was like "Somebody please create this, so I don't have to."

**Jerod Santo:** Right. No one listened.

**Brandon Bayer:** Yeah... Anyways, so early as spring I had a phone call with a friend of mine who is a Ruby on Rails developer. We were going back and forth about the advantages and disadvantages of developing with Ruby on Rails, versus a single-page app with React, and a separated backend... And I got kind of frustrated because I couldn't win. Because with React you have this whole API layer that you have to have, where with Ruby on Rails that's an entire section of your app architecture that's not there, so it's a lot simpler. You don't have to do data fetching and all of that.

**Jerod Santo:** \[00:04:08.18\] So when you say you couldn't win, you're saying he was beating you to the ground with Ruby on Rails features? Is that where you're saying you couldn't win?

**Brandon Bayer:** \[laughs\] Well, you know, it's tongue-in-cheek, but...

**Jerod Santo:** Yeah.

**Brandon Bayer:** ...after the call I was thinking about it and I was like "You know what, I think we have all the pieces there now to build a real Ruby on Rails for React", which is Next.js; they had just come out with the `getServerSideProps` hook, and so you could just have direct database access, but still use Next.

**Jerod Santo:** Right.

**Brandon Bayer:** And then secondly, Prisma, too... Which is a really nice database client... So those two kind of matched together was a really nice combination.

**Jerod Santo:** Right. So you thought here's a good timing, good opportunity. Now, if you go way back in the day, pre-React perhaps, when Node first hit the scene, there were Rails clones for Node. Sails was one of them; I remember it because it rhymed with Rails... And there was something \[unintelligible 00:05:07.07\] But over the years, people have tried certain things...

**Brandon Bayer:** Meteor...

**Jerod Santo:** Meteor, which had some conventional reconfiguration, but it also had a bigger idea than Rails had... But even maybe Happy.js - maybe that's not quite a Rails, but it's definitely a framework. So there's been a lot of these things... But once React became a thing -- you talk about in your manifesto this bundling that Rails did, and the unbundling that React did because it is just a single-purpose (so to speak) focused library, that it doesn't bring a full application to the table. In fact, you kind of cobbled that together, or you created like a chef would put together a beautiful meal, right? So you decided to start Blitz to answer the call of a Ruby on Rails-inspired thing, with React in mind, not just with Node or with JavaScript in mind.

**Brandon Bayer:** Right, yeah.

**Jerod Santo:** And the manifesto came afterwards? You decided "I need to really describe what I'm doing here?"

**Brandon Bayer:** Yeah. Kind of codify all of the things that I had in my head...

**Jerod Santo:** So I'm an old man in this scene nowadays... I know Ruby on Rails inside out; I've worked with it for many years. I was first inspired by it when DHH made his video blog post "How to create a blog in 15 minutes", or whatever it was... And there was no YouTube back then, and he put it on his own website... I've been around, so when you say "Ruby on Rails-inspired", for me, I get it. I'm there for it. I'm excited about it. But there's a lot of folks who are like "Isn't that the thing we all escaped?" They didn't actually experience the transition from maybe a Ruby background, or from a Rails thing to JavaScript. They started with JavaScript, they started with React, they started with Redux, and they're wondering what does Ruby on Rails' inspiration even mean? Can you give that bit of a detail?

**Brandon Bayer:** Yeah, that's a great question. From just talking to people, a lot of people have said "I don't know what Rails is, but I've heard a lot of good things about it, so this is interesting."

**Jerod Santo:** Yeah.

**Brandon Bayer:** So I think where you get people that haven't done Ruby on Rails is building a full-stack application that is too hard. They understand that there's too many pieces to figure out, to put together; like, "How do you do it alright? There's so many different ways to do it... What's the right way? Am I messing something up that I don't even realize? Am I having security vulnerabilities?" etc.

**Jerod Santo:** Right. And so this appeals even if you aren't necessarily familiar with Ruby on Rails; you're at least familiar in these principles, the ones that you list off here... You have seven principles in your manifesto. I'm gonna list them off, and then maybe you can pick up a few that you would like to talk about; maybe they're highlights, or maybe they're ones that are easy to describe, to sell folks on what you're up to.

The first one is "It's full-stack and monolithic." Now, we might have to define full-stack, because now there's full-stack front, JAMstack frontend full-stack... So maybe we'll have to talk about what that means, full-stack; I think it means actually fully full-stack. Full-stack and monolithic is your first principle. API not required is principle two. Convention over configuration - that one lifted directly from Rails, which is awesome. "Loose opinions" is your fourth principle. Five is "Easy to start, easy to scale", six is "Stability" and seven is "Community over code." That's a lot... I like that last one quite a bit. Any that you'd like to start off with and say "This is what Blitz is all about?"

**Brandon Bayer:** \[00:08:32.12\] Well, API not required is definitely the biggest piece of Blitz.

**Jerod Santo:** I think it's also the biggest differentiator from other competitors. Somebody in our Slack chat was asking "Well, what about Redwood?" Because we've just had Tom Preston-Werner on the show, and Redwood is another full-stack front-end JAMstack framework, trying to provide some batteries-included, a lot like Blitz is... But Redwood very specifically is API and frontend, full separation, right?

**Brandon Bayer:** Correct. With GraphQL in the middle.

**Jerod Santo:** Yeah, exactly. So that's how a Redwood app would be. So differentiating a straight line from that is what Blitz does, which is no API required; maybe you can still put it in an API, but it doesn't have to be there. Can you explain that decision and why it's such a big deal?

**Brandon Bayer:** Sure. The very first prototype I threw together of Blitz, which I touched on earlier - it was server-side rendered. So you used to get server-side props; first request to Next was server-rendered, and then subsequent requests or page transitions were client-side, but Next still ran the code on the server automatically. But as we got into real research and development for Blitz, of like "What is the best architecture?", we were wanting to move away from that, so that you could still do client-side rendering. And we didn't force you into SSR.

So we were just exploring different ways, and one day I was brainstorming and I was thinking "How can we do this?" and I thought "What would this look like if it was easy?" Well, the answer is you would write a function that runs on the server, and then you could just import that directly into your frontend and run it. On Ruby on Rails that's how you do it - you can just import things and use it anywhere, if it's all in the same environment. So I was like "Well, that's pretty awesome if you could do that, but then have an API call automatically happen there somehow." And I was like "How can we do this?"

**Jerod Santo:** Yeah, somewhere in between you have to have the server talk to the client, and vice-versa. And since the API is not required, I assume that you're writing it on our behalf, or you're auto-generating some sort of...

**Brandon Bayer:** Yeah. Yup. So what we do at build time is we swap out that direct function import with an API call. And so when you're developing your app, you don't have to think about that, because it happened at build time for you... So you get static TypeScript and auto-completion and everything without -- like, your frontend is statically-typed all the way from your database...

**Jerod Santo:** Okay.

**Brandon Bayer:** ...which is impossible without GraphQL traditionally.

**Jerod Santo:** Right. So is it a GraphQL API in the middle, or does it matter what you're actually doing?

**Brandon Bayer:** It's not.

**Jerod Santo:** It's not.

**Brandon Bayer:** It doesn't matter, unless you wanna use that API directly, which you can... But it is a JSON API right now; basically, an RPC style...

**Jerod Santo:** So it's a remote procedure call style JSON API that you guys auto-generate, and can be invisible to the end developer, unless they need to peek under the covers and access it directly, or... Invariably, as you build more complex applications, the law of leaky abstractions comes into play; and that abstraction, no matter how hard you try to make it great, can't map over perfectly the real world, so you'll have to get in-between there and access it directly... Or can you modify it, can you tweak it or anything, or is it just purely generated out of your model layers, or something like that?

**Brandon Bayer:** \[00:12:19.17\] Most of it is purely generated. There's multiple things you can do. We have HTTP middleware that runs on the server, that can intercept that call. It's actually \[unintelligible 00:12:27.14\] Express-compatible, so you can use that on the server to intercept your Blitz queries and mutations which use the automatically generated API. And then if you need something else, you can do a custom API route, which is like the same as with Next, where you have your own endpoint, direct access to the \[unintelligible 00:12:49.16\] objects and you can do anything you want. So you can still use that like normal.

**Jerod Santo:** Can you give a concrete example of a function you would write server-side, import client-side and execute, that's a common thing, or that lots of apps are gonna do, so people can say "Oh, that's what he's talking about", versus trying to conceptualize it?

**Brandon Bayer:** Sure. Let's say you have a user model in your database, so you need to do CRUD operations (create, read, update, delete). So for each one of those you're gonna have a `getUsers` query and then correspondent mutations for create, update and delete. So in the `getUsers` function you'll directly access your database; by default, it's Prisma as your client. So you're gonna access a database, you're going to do anything you need to do on the server, whether it's talking to third-party APIs, doing some type of processing, triggering events... So this is kind of like a Rails controller.

**Jerod Santo:** Gotcha.

**Brandon Bayer:** And then you import that function into your client code, into your React components, and you pass it into the `useQuery` hook that Blitz provides. That's built on React Query, which we can talk about that... But that query hook will automatically do the data fetching for you, it will do automatic caching, it will do cache invalidation, it will do revalidation if you come back to the window, and it'll make sure it's up to date. You can do polling, and all of those sort of advanced features.

And then secondly, for the mutations, which is even a little bit more simple - you don't have a `useMutation` hook. The mutation you import into your React component, \[unintelligible 00:14:45.09\] you call await, create user, pass in the data... And that's just like a direct function import in your code, but at build time that's swapped out with the API call.

**Jerod Santo:** Very cool. So these auto-generated API calls that happen at build time - what can happen with auto-generated code (trust me, I've done it before) is that you have a hard time optimizing for the things that you need, and for fetching too much information, and joining across tables that maybe you had no idea you were joining across... These are some of the reasons why GraphQL is a thing, right? Only give me the data I need, not as much side-loading etc. How optimal are those API calls, and are they editable by the person that says "You know, actually I know more about this than Blitz does (in this particular context) because it's contextual." Can I edit those, or am I stuck with what you give me? How does that work?

**Brandon Bayer:** The beauty is that you as the developer have full control over everything that goes over the wire... Because exactly what's returned from your function on the server is exactly what's sent over the wire to the front-end.

**Jerod Santo:** So it's my fault. \[laughs\]

**Brandon Bayer:** \[00:16:01.16\] Yeah, we're not adding any extra stuff on there. It's just a simple connection between the function call and the server, and the client.

**Jerod Santo:** And you're just sending objects...

**Brandon Bayer:** Correct.

**Jerod Santo:** ...you're not having to serialize them, or anything like that.

**Brandon Bayer:** We are serializing it, and one thing we're doing now is adding full serialization to support the objects, regex, and sets and maps.

**Jerod Santo:** So when I say you, I meant the developer. Blitz does the serialization; the developer doesn't have to serialize?

**Brandon Bayer:** Yes, correct.

**Jerod Santo:** Okay. The "we" - you used the pronouns - is difficult here.

**Brandon Bayer:** Blitz does that for you.

**Jerod Santo:** Blitz does it for you. That's great. One of the things I always feel like is just drudgery in most application development is "Let me go ahead and just-- marshaling and unmarshaling data. Let me serialize this, let me json.parse it over here... I don't need these fields; I need that one to be a function" etc. It's nice if you can just pass objects around and not have to worry about any of that stuff.

**Brandon Bayer:** Exactly. So unlike overfetching, with GraphQL you can specify which fields you want to return... So we don't have anything backed in for that, but the Prisma client has the ability to select only certain fields. So you can accept that parameter as an argument to your query, and you can pass that to a Prisma client, and then you can only get whatever you want.

From the client, you could specify "Hey, I want this specific call to getUser to include some relationship entities." So at the various call sites, you can use the same query function at different locations, and each location in the frontend can specify different requirements for what it wants. It's just normal coding, just like you would in a local environment.

**Break:** \[00:17:53.16\]

**Jerod Santo:** So differentiated again from Redwood with the API not required. When I spoke with Tom about Redwood I was arguing for the simplicity of the design that you're espousing for Blitz, and one of the things he said is that with that architecture - which I think he agreed is simpler conceptually for developers, which is always nice - is that you give up the multi-client opportunity, which is... If you're gonna have a mobile app, if you're gonna have a public API, if you're gonna have multiple desktop -- if you have all these different clients that are gonna attach to your web app, you're gonna need that API anyways. You're gonna need a GraphQL API or a REST API. So not building it right away is myopic, is short-sighted. What do you think about that?

**Brandon Bayer:** Well, number one, you can use the generated APIs from anywhere. It's just a standard API endpoint that you can add token authentication to, and you can use. So it doesn't automatically nullify multi-client situations. Now, yeah, it's not gonna be as nice as a GraphQL API, but it's essentially similar to a REST API; you're gonna have to look at the documentation of how to use it... But you can do it.

\[00:20:05.14\] The other thing is definitely using the API from mobile apps is important, and we are planning on adding first-class support for React Native. I'm not sure quite how we're gonna do it yet, but the dream and what we're working towards is have a mobile app from the same repo, so you can share components if you want to, or at least business logic code. And then you could import those same queries and mutations into your React Native code, and then we could swap that out with a generated client.

**Jerod Santo:** That would be super-cool. Does that sound like it's long ways away, long ways down the road? Or are you working on it actively?

**Brandon Bayer:** We're not working on it actively. There's more important things we're working on right now, like authentication... But that's like the dream experience. If we can get that to happen, then we'll still have a way to an easily-generated API client that you can import. But either way, using your back-end with mobile apps is very important. It's just increasingly common where you need some sort of mobile app.

**Jerod Santo:** I like the fallback idea of an auto-generated client library that you can use from inside React Native. If it's not straight-up native React Native support, with components and what have you, but just like "Okay, here's all the function calls that you make in your web app. Here is a ported piece of code that's either in the mobile language of your choice, it's a Swift library, or maybe it's just a JavaScript library and you have to use React Native, or something..." and you can make the same function calls, but it's not quite as hand-holdy as your big goal. So that would be very cool.

Let's turn now to another one of your foundational principles, which seems like it's inspired by Ruby on Rails but does diverge a little bit. Principle four is loose opinions. Ruby on Rails has very strong opinions. And in fact, when it first came out, you did it the Rails way, you had a hard time doing it; over the years it got slowly more modular, so you could plug and play certain aspects of Rails, but it was very opinionated for a very long time... And it sounds like Blitz is opinionated, but not all that opinionated... What's loose opinions mean?

**Brandon Bayer:** Yeah, so loose opinions means that we take a less strong approach than Rails for a thing, like "This is how you should do it." Most of our opinions we don't enforce. And most of our opinions don't affect things in a certain way. It's basically easy to go outside of our opinions.

**Jerod Santo:** Okay. Can you give me an example? Like, "Here's an opinion that we have, but..."

**Brandon Bayer:** Sure. So Prisma 2 is an opinion that we have by default, but we don't depend on that. You can rip that out, you can use a type of ORM, or anything else. Fauna... We'll be adding plugins for things like Fauna. And actually, Prisma will be a plugin, too. So database-agnostic, but Prisma 2 as a default.

Another opinion is whenever you generate a new app, you have things already configured for you, like Prettier, ESLint, Husky Git hooks - all of the stuff most people have... But you can easily change that. We don't abstract any of that away. You still have full control over it.

**Jerod Santo:** What's your opinion on TypeScript?

**Brandon Bayer:** TypeScript is amazing. My analogy is TypeScript is like running through a maze with your eyes open, but JavaScript is running through a maze with your eyes closed.

**Jerod Santo:** \[00:23:56.24\] \[laughs\]

**Brandon Bayer:** You have to slow down and kind of feel your way, like "Does this actually work? Okay, yeah, I can go this way..."

**Jerod Santo:** I like that. That's a good metaphor.

**Brandon Bayer:** So right now JavaScript support is still lacking a couple things in Blitz, but that is an option... So whenever you generate a new app, you can say "Hey, I want this to be JavaScript instead of TypeScript." But it does come with TypeScript by default.

**Jerod Santo:** It wants you to navigate the maze with your eyes open. But we've gotta admit, running through a maze with your eyes closed is more fun; it's more exciting. You're not sure what's gonna happen...

**Brandon Bayer:** \[laughs\] Yeah, definitely more risky and dangerous.

**Jerod Santo:** Thrilling. See, it's just all how you talk about it. You call it dangerous, I call it thrilling...

**Brandon Bayer:** \[laughs\]

**Jerod Santo:** Stability is another one. It seems like this is something that no one's gonna disagree with. Everybody wants, especially in a framework, even more so than a library, stability... Because whenever you build on top of something, versus integrating something, you want that thing that you're on top of to be stable. Because if you build your house on a shaky foundation, it's not really a house after a little while. Or you spend all your time and money maintaining that foundation.

So stability is an important key and part of your manifesto, and it sounds like you're taking keys from Ember, which to me is a great idea.

**Brandon Bayer:** Yeah. I think Ember is doing a fantastic job. I was in the Ember community very briefly a long time ago, but I really like their release cycle where they have multiple release channels, with long-term support, stable beta... And they have things like "The next stable release has to be in beta for six weeks", I think is their stable release cycle. So it has to be in beta for that long before it can be actually released as stable. So it gives you this time to prove out any bugs. Also, the release cycle is very predictable. Every six weeks there's gonna be a stable version.

**Jerod Santo:** Right. So is that aspirational? Are you actually executing on that today? I know Blitz is somewhat early days...

**Brandon Bayer:** Yeah, right now we're still alpha. We're like 0.15, I think, on the version... So right now we're just fast and loose \[unintelligible 00:26:06.20\] But once we hit 1.0, then we'll institute that, some predictable release cycle.

Now, we're not set on exactly like Ember does, with six weeks. We're open to feedback, we want people's opinion on what would be good for Blitz.

**Jerod Santo:** The last one I wanna make sure that we mention is your "Community over code" foundational principle. You keep talking about "we"; I assume there's more people than just yourself, but it is early days, so these projects usually start off with a small community. Talk to me about your community's aspirations, and even realistically, what it looks like today; who's working on it etc.

**Brandon Bayer:** Sure. So back when I threw together that first prototype, it was just me. I put out this tweet and said "Hey, I'm building Ruby on Rails", and a bunch of people were excited; the tweet kind of went viral. So I got about 30 people interested in helping... And a fair number of those are still involved today, in some fashion. Rudi is one of the other core team members now. He came on at the beginning, and he's like the genius behind the whole compilation step, and all of this fancy stuff. We actually compile Blitz code into Next.js code.

**Jerod Santo:** I was gonna ask you about the compile step, but I got the wrong person, maybe... \[laughter\]

**Brandon Bayer:** So there's three of us, core team. The other one is Dylan. They've been working heavily on the graphical user interface. So you can do everything from a web interface instead of a terminal for running \[unintelligible 00:27:40.27\] etc.

**Jerod Santo:** That's neat.

**Brandon Bayer:** And beyond that, we're up to about 75 total contributors now. People come and go, it's open source, but there's probably roughly ten people that are fairly active. It's kind of hard to get a good estimate on it... But there's always PRs and things going on.

One thing that's really crazy is anytime you put up a good first issue, something that's pretty easy, a lot of times that's fixed within an hour.

**Jerod Santo:** \[00:28:20.27\] That's nice.

**Brandon Bayer:** So we really appreciate our contributors.

**Jerod Santo:** Start putting that in your harder ones, see if you can hack in a "This one's really easy, I swear..." \[laughter\] That's pretty cool. So is anybody using it in production? I know it's in alpha, but are people building websites with this?

**Brandon Bayer:** Yeah.

**Jerod Santo:** Is it still a toy project...? Yeah, they are?

**Brandon Bayer:** Yeah, a few people. Even before we added HTTP and middleware, they were doing authentication with a custom API around passing JWTs all around, in kind of a weird way. But they made it work, so...

**Jerod Santo:** Nice.

**Brandon Bayer:** Yeah, there's a couple that are using it in production, I think, but it's still early.

**Jerod Santo:** What about yourself? Are you just working on the framework? Are you also a user of the framework?

**Brandon Bayer:** Not a user yet, but I'm itching to be... Right now I am working on Blitz about 30+ hours a week, and then I'm consulting on the side part-time to fund that.

**Jerod Santo:** How long have you been doing that?

**Brandon Bayer:** I've been working on Blitz since middle of February, I think...

**Jerod Santo:** A few months...

**Brandon Bayer:** ...so I've racked up quite many hours by now.

**Jerod Santo:** Yeah. So it's definitely early days, but you've got a lot of work into it... And you're just supporting yourself with part-time consulting?

**Brandon Bayer:** Yes.

**Jerod Santo:** How long is this gonna last?

**Brandon Bayer:** Well, it can last forever. I'm running at a sustainable pace. But obviously, I wanna work on Blitz full-time. I'm accepting sponsorships, so I already have FaunaDB as a sponsor...

**Jerod Santo:** Nice.

**Brandon Bayer:** ...and I'm looking for more sponsors.

**Jerod Santo:** What does that mean, when they sponsor you? What do they get for that? What happens for them?

**Brandon Bayer:** They get logos on the GitHub repo, website etc.

**Jerod Santo:** Awesome.

**Brandon Bayer:** The other thing we're working on is plugins. We'll have an official plugin for Fauna, so that instead of Prisma you'll have a first-class Fauna plugin.

**Jerod Santo:** Very cool. Obviously, it's a React framework, but you've mentioned Next a few times... It's built on top of Next, or around Next, it uses Next... And I'm sure there's some people who are happily using Next and thinking "I don't know, it seems like it has most of the things that I need." I think you get this question often, because you have a whole web page for it...

**Brandon Bayer:** \[laughs\]

**Jerod Santo:** Why would you go from -- like, if I'm a happy Next person, would I still want Blitz, or would I have maybe reinvented a few things that Blitz does already... Why use Blitz instead of just directly using Next.js?

**Brandon Bayer:** So if you are happy with Next and you already have other APIs and things, then yeah, there's not necessarily a really compelling reason to switch to Blitz. But for new full-stack apps is where Blitz really shines, because it gives you out-of-the-box, everything all preconfigured, and then it gives you the data layer, where you don't have to build an entire API.

There's a few other things that Blitz does. It removes some restrictions that Next has, where Next requires all your pages to be in one single pages folder... So that thing's gonna get huge, and then -- but what Blitz does is it allows you to have multiple pages folders. And then we merge those together at build time.

So this allows you to organize pages by either domain model, or some type of domain context. So if you have multiple teams working on a project, you can have your files organized by team, and the pages that team A is responsible for can live in that part of the codebase, and other pages can live elsewhere.

**Jerod Santo:** And it sounds like in addition to that you do a lot of the scaffolding using Next. You'll code-generate a bunch of stuff in addition to allowing you to have separate pages directories, like you said, but you'll also do a bunch of code generation.

**Brandon Bayer:** \[00:32:07.24\] Yeah. Especially if you're using the Blitz API data layer, then we have generators, just like Rails does, for generating -- we can generate end-to-end code, so all your queries and mutations, your pages, an empty form stub... So that's really nice.

One thing we're going to add beyond what Rails has here is the ability to override the templates, like customize them, and have the template definition right in your project. So you can customize that to fit how you're building your app. You can add new templates, so instead of using \[unintelligible 00:32:41.07\] you can just hook into the Blitz generator and then everything is really nice.

**Break:** \[00:32:54.16\]

**Jerod Santo:** So let's talk about that compilation step... Does Blitz compile itself a lot like Svelte would? Is there a runtime API with Blitz?

**Brandon Bayer:** Basically, it compiles itself away, yes. So what's left is a Next.js codebase. It's actually the same .next folder. What's in there is Next pages, and Next API routes. And then it has some library code from Blitz that will handle the request at the API route, and then it has some client code that will receive that request and deserialize it etc.

**Jerod Santo:** Very cool. So it really is like a meta framework on top of Next, that manipulates Next and does things and generates some code... That data API layer in the middle injects it into a Next app, and that's what it produces.

**Brandon Bayer:** Yeah.

**Jerod Santo:** Pretty cool.

**Brandon Bayer:** For deployment, you can deploy it serverless, just like Next, run it Vercel or AWS, or you can deploy it as a server to DigitalOcean or Heroku and run blitz start --production, and then it's a long-running process. So you get the choice of whether you want it to be serverless or not, which is one thing I love about it, versus Ruby on Rails, where you're stuck with a server.

**Jerod Santo:** Yeah. Why would you pick a server, if you can go serverless?

**Brandon Bayer:** Right now there's still a bunch of issues with serverless, like how to do queuing and background processing... It's really hard and complicated to do with Vercel. There's only one or two providers, like CloudAMQP, which runs as RabbitMQ, and they allow you to post messages to a web endpoint, which can be Vercel. But you can't use any of the AWS stuff, because it has to be inside the Lambda ecosystem.

**Jerod Santo:** Right.

**Brandon Bayer:** So we have people running on Render now. So they're running Redis and Sidekiq alongside a long-running Blitz app, so they have their background processing there.

**Jerod Santo:** Gotcha.

**Brandon Bayer:** The other thing is cold-start issues and database connection pooling.

**Jerod Santo:** \[00:36:10.19\] Well, tell me more.

**Brandon Bayer:** So a Postgres database - let's say you have 20 connections, and so to run serverless you have to have a connection pool in front of that PgBouncer, or AWS's thing, which is RDS Proxy, I think... But that can only work inside AWS VPC (virtual private network), so you can't use that with Vercel... So right now, one of the only options is manage Postgres on DigitalOcean, which does have PgBouncer built in, so it's easy to turn on... But it's still another thing to think about.

**Jerod Santo:** So if you spun up your server-side Blitz app instead as a long-running process, that would do the connection pooling for you.

**Brandon Bayer:** Yeah. Prisma will do that, or whatever your database client is.

**Jerod Santo:** Right. It sounds like serverless is still a lot of work, even though it's not supposed to be.

**Brandon Bayer:** Yeah. Especially for a full-stack app. I think there's definitely a huge opportunity right now for building a platform for serverless full stack. Vercel has recently pivoted to frontend; that's their thing now, they are the platform for frontend. There's no longer full stack.

So now that there's something like Vercel for full-stack, that has actually first-class database integration, queuing, background processing, all of that - that's potentially something that I would pursue at some point for funding.

**Jerod Santo:** Yeah.

**Brandon Bayer:** Like, funding myself to work on Blitz full-time means having a platform that would make it super-easy to deploy Blitz.

**Jerod Santo:** Right. So that leads me into my next line of questioning, which is a lot about your plans... Because it's pretty early days - February you started, we're in the end of June here, early July, as this ships out... So what is that - four months, five months of effort? And you have a lot to show for it. Like you said, you've been putting 30 hours a weekend pretty much non-stop, so that's gonna produce a whole bunch of stuff... And it's not just yourself. But you have a lot of Coming Soon ideas that seem really cool. You have installer recipes, you've got some built-in authentication you're working on, you're gonna build a platform to take over the world... Just kidding on that last one, but - how do you prioritize, how do you think about what's next? Is it obvious, like there are big gaps that Blitz is missing, that you're just pounding out, or is it taking more thought? What order of operations would these things be coming in?

**Brandon Bayer:** It's pretty obvious right now the missing piece is authentication. That's what everybody's asking about. We're gonna get that shipped. It's built-in authentication, it's really secure, and it's easy to use, so it's gonna be so nice. Basically, you can think about it as \[unintelligible 00:38:57.06\] which is for Rails, but it will be kind of built into Blitz.

**Jerod Santo:** Yeah, that would be great. If there's one thing that every single web app pretty much does, it's authenticate users, right?

**Brandon Bayer:** Yeah, exactly.

**Jerod Santo:** So you're working on that one actively...

**Brandon Bayer:** Yeah.

**Jerod Santo:** And you have this plugins idea...

**Brandon Bayer:** Yeah, so plugins are gonna be a little bit later, but the next one up after authentication is the recipes, because we're gonna use recipes to install some of the authentication code.

**Jerod Santo:** So tell us what recipes are exactly.

**Brandon Bayer:** Recipes come from Gatsby. Gatsby Recipes is a thing they've announced relatively recent. It's in alpha, I think. Essentially, a recipe is an MDX file that defines certain operations in your codebase. It can add dependencies to your project, it can add files to your project, it can update files in your project... So a recipe is a way to describe some type of modification.

\[00:40:04.01\] For example, you can install a third-party library. So you could run blitz install styled-components, and that would install StyledComponents, it would add the necessary code in the Next.js root app component, so that SSR would work, and all of that stuff... So it's one command to do multiple things.

So if you're familiar with Next.js, all of their example apps - they have maybe hundreds of example apps on their repo of how to do these types of integrations... So we can basically take every one of those, turn it into a recipe, and you never have to go hunting the right repo, copy and paste... You just run a command and there you go.

**Jerod Santo:** What's an MDX file look like?

**Brandon Bayer:** MDX is a markdown file that allows you to have React components in it. For example, one of the React components would be "add dependencies". And then a prop to that would be an array of dependencies that you want to add, so like StyledComponents.

**Jerod Santo:** So you use a React component to instruct Blitz to add dependencies to your Blitz application.

**Brandon Bayer:** Yeah. So Blitz will provide you - and Gatsby does the same thing - a set of components of all the operations that you can do, and then as an MDX author of this recipe then you can compose those together however you want. And you can actually compose other recipes, so recipes can compose recipes... So you could construct kind of like a personal boilerplate. So like blitz install my-awesome-boilerplate would install 20 dependencies that you want for every project.

**Jerod Santo:** Right. I totally understand the purpose. I may have to go look at some MDX files to grok it... Because I just wonder, why are these React components -- it's a script, right? It's a setup script, but you're using React components to install dependencies. It just seems like it's React components all the way down...

**Brandon Bayer:** Yeah... So Gatsby is the brains behind this.

**Jerod Santo:** Okay.

**Brandon Bayer:** We wanted the concept of this installer idea, and then we realized they were doing the same thing, so we're joining forces with them. We've been talking with them about -- actually, we're gonna be sharing code. But they have a custom React renderer that parses the MDX file. So what it allows you to do is things like have a recipe that's added to your project, and then later if the recipe updates, the actual recipe runtime code can detect the changes between the version of the recipe, and make updates accordingly.

**Jerod Santo:** It's like virtual DOM diffing, but there's no DOM.

**Brandon Bayer:** Yeah, yeah.

**Jerod Santo:** \[00:42:54.13\] It sounds like Jekyll and Hyde kind of stuff. I'm gonna have to go look at some of this code.

**Brandon Bayer:** And then the other way -- it's composable. Just like you compose React components, you can compose all these different things together.

**Jerod Santo:** That part makes sense to me, why you'd wanna compose a recipe. Absolutely. I still am questioning the methodology or the actual way that this is being built... But let me go look at -- I'll blame Kyle and the Gatsby team; I'll go look at it.

**Brandon Bayer:** Yeah, you should definitely talk to them more about it.

**Jerod Santo:** It's kind of like, there's one big hammer called React, so all I have is a bunch of nails that I hit with the React hammer... But I like the concept, I think it's very useful, and I'm gonna go check out some MDX code to see if maybe just conceptually I'm missing it, and I'll see it when I see the code... For now, it seems a little bit strange.

So you've got built-in auth coming in, you've got recipes coming up - those are gonna be able to generate some Blitz apps with built-in auth and other boilerplaty things... You've got plugins, which you're gonna have a Fauna plugin, the built-in Prisma stuff is gonna become a plugin... And then what else is on the pipeline?

**Brandon Bayer:** Beyond that, a big one is the mobile React Native support.

**Jerod Santo:** Right, which is for the down the road. What does 1.0 look like? Do these things have to exist, or are you guys getting close to saying "Let's get stable, and then we can build from there"?

**Brandon Bayer:** 1.0 will not have mobile. 1.0 will have authentication and recipes. And then probably plugins, I'm not sure yet. I'm not sure yet when we're gonna move to beta, but probably once we get authentication - that's the last big piece of like "Hey, everything's here." And we know Next.js is already rock-solid, it's already battle-tested... So once we get it compiled and it's running, then it's battle-tested code. So we can go to 1.0 relatively soon, because we don't have a lot of custom runtime code.

**Jerod Santo:** It sounds really cool, Brandon. So the website is Blitzjs.com - is that the best place to go if people wanna get started, give it a try?

**Brandon Bayer:** Yes.

**Jerod Santo:** And what's the best way to get involved community-wise? Maybe they check out Blitz and think "This is cool, but do you know what would be cooler...?" and then they have an idea; what's the best way of getting involved in the community contributor-wise?

**Brandon Bayer:** Well, if you have an idea, open an issue on GitHub or a discussion there. You can also join the Slack community, which is a great thing; we have a lot of people on there, chatting back and forth about ideas and problems. If you get stuck with something, feel free to ask a question on Slack and somebody will help you.

And then definitely, we welcome anyone to contribute in any way. We love new contributors coming in. I'm happy to help anyone personally. If you're new to open source, I can help you out. We have a contributing guide on the website that says how to contribute; click on that, and we have a few things to go through.

**Jerod Santo:** Awesome. Well, thanks for joining me, thanks for giving us this intro to Blitz. Best of luck with the framework. It looks like you have a lot of exciting stuff to work on. We really appreciate you coming on JS Party.

**Brandon Bayer:** Thank you so much. My pleasure.
