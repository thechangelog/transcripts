**Nick Nisi:** Hello, and welcome to another exciting party, your JavaScript party. It's JS Party time! I'm your host today, Nick Nisi, and I'm joined by my fellow co-host, Kball. Kball, what's up!?

**Kevin Ball:** Hey, hey!

**Nick Nisi:** And we also have the amazing b0neskull a.k.a. Chris Hiller. How's it going, Chris?

**Christopher Hiller:** Super! How are you doing?

**Nick Nisi:** I'm doing well. And we are talking all things Gatsby today, and with that we have from Gatsby Dustin Schau. Dustin, welcome to the show.

**Dustin Schau:** Hey, everyone! Glad to be here, thanks for having me.

**Nick Nisi:** Yeah, thanks for joining us. I'm really excited to talk about Gatsby. We did actually have an episode with Jason Lengstorf a year ago where we talked about Gatsby and kind of intro-ed it... So just to kind of summarize that, can you give us a brief summary of what Gatsby is?

**Dustin Schau:** Yeah, of course. Gatsby is interesting to describe, because I think the mental model that most people hold for Gatsby is that of the static site generators. People are like "Oh, it's kind of like Jekyll, or it's kind of like Eleventy. And that piece is true; Gatsby is an excellent static site generator... But I really think of Gatsby as like a progressive app compiler.

One of the key ideas of Gatsby is that you can source data from anywhere, and then the other key idea is you want to compile ahead of time as much as possible.

So the idea with Gatsby is source data from - insert CMS here: WordPress, Drupal, Contentful, what have you; stitch it together with GraphQL - so I think our data layer is a key piece of what makes Gatsby so interesting - and then produce a read-only clone (basically the static site) at build time.

Gatsby does generate sites statically, can write your application with React, with GraphQL, and you get a super-fast website as a result that your users will love.

**Nick Nisi:** Nice. So it's pretty much made up of those two -- would you condense that into two big pieces, the data layer and then the static site layer, that feeds from the data layer?

**Dustin Schau:** I think that's pretty fair. I think it's React as the presentation layer, and then GraphQL as the data layer, and then stitching them together, and then compiling them to a static HTML. What's really cool, and why Gatsby isn't just a "static site generator" is that there's also a runtime that gets shipped, which people have lots of opinions on, of course; moving into that later. But the idea is that once it hits the browser, everything has been optimized as much as possible, but then it's fully functional, dynamically, at runtime, so that you can make a data request, you can do interactions, you can do whatever you can in a React application, because it produces a React application.

**Kevin Ball:** \[00:03:52.10\] I have a question about that; I'm jumping in already. So one thing -- first off, I love the way that we're moving to compile-time stuff, and we're kind of precompiling everything, and doing this sort of static site plus approach... But one thing that has come up a couple of times is that often that creates sort of an interactivity gap. So rather than the traditional SPA approach of you get a loading screen, you get a loading screen, you're waiting, you're waiting, you're waiting, and then you get something that you can interact with right away, we show the user a page right away, because we're shipping out compiled HTML, but sometimes we're lying, because when you try to interact with it, it doesn't work until the thing fully hydrates.

So I'm curious if Gatsby is doing anything -- well, first off, how big of a problem does that end up being with Gatsby sites? What's that interactivity gap look like in terms of time? And then two, if there's anything on the radar to address that.

**Dustin Schau:** For sure. So are you kind of referring to metrics like TTI? It looks like it might be ready, but I'm still waiting for JavaScript to load in the background, and that kind of thing...

**Kevin Ball:** Yeah...

**Dustin Schau:** Yeah, cool. I mean, our runtime and what we ship, again, is we want to just ship the minimal amount of content, so HTML, JavaScript, CSS etc. to the end user, so that it is as interactive as possible. As a result, most Gatsby sites you'll see out in the wild - they have 100s across the board in Lighthouse... So as far as your actual question, it's really no different than it is in a React application. If you're going to ship gobs JavaScript that are required for that initial experience, it's still up to the developer to use discretion here.

In general, I think the problem is less impactful in Gatsby, because again, we do compile ahead of time what can be compiled ahead of time. And if some dynamic interaction or something is loading in the background, generally that's not required for the initial experience... So yeah, I haven't seen this as much of a problem in the Gatsby space as I've seen it in other different areas. Yeah, that's a really great question.

**Kevin Ball:** It's interesting, because we often measure that time to interactive, and in fact I think Lighthouse shows the time to interactive... And one of the really interesting questions that I think Addy Osmani published about was the gap between paint time and interactive is in some ways almost more interesting than just what is that time to interactive... Because that's this sort of uncanny valley period where it feels like we should be able to interact with it, but we can't yet.

**Dustin Schau:** Yeah, Addy is amazing. If you haven't seen his "Cost of JavaScript" - I'm sure you have - I used one of his GIFs on my slides in the past... It's exactly what you're describing - the user might see this shell that looks like it can be interacted with, and so they'll click things. The classic example is Amazon. It looks like Amazon is loading, you're trying to type in the search bar, but you're still waiting for JavaScript to load.

In general, I think the approach is just load as minimal amount of JavaScript as you can. So yeah, I think that's a really great metric. We almost need a secondary metric that's in-between those two, because yeah, that is a really frustrating end user experience.

**Kevin Ball:** So how much JavaScript do you end up shipping in a vanilla Gatsby app, if I'm not doing very much?

**Dustin Schau:** That's a really good question; again, I'm glad you're asking it. Most of our runtime is React. So React ends up being -- last I checked, I think it's at like 30 to 50k gzipped, and then our runtime itself is like 10 to 15, and that also includes the router... So I think total it's like 57 or 58 kb gzipped. What is kind of cool is because we have such a pluggable ecosystem, which - I should have sold that earlier on; I think that's another thing that's really great about Gatsby... There's a great plugin called gatsby-plugin-preact; I saw Andy Bell tweet about it recently... So Preact is doing largely the same kind of VDOM stuff that React is doing, but also it comes at a much smaller file size. You can drop your bundle size just by switching to that.

**Nick Nisi:** And do you have to use the JavaScript bundle?

**Dustin Schau:** I think it's worth it. There's a really great article that one of my co-workers Michal recently wrote on why Gatsby is better with JavaScript... So we do things like preloading and prefetching, so that it makes the actual experience not only faster, but it feels faster, so of course, that requires JavaScript.

\[00:08:04.15\] In general, I think it's absolutely worth it. I don't even really like to publicize it, but there is a Gatsby plugin that removes the JavaScript... But I think for us, most real-world applications you're going to ship to an end user - they require at least some JavaScript. And because I think React has the best implementation of how I wanna write my UIs, which I hope isn't too contentious of a take...

**Nick Nisi:** I'm shocked!

**Dustin Schau:** ...but I'm sure people have thoughts and opinions on that... It makes a lot of sense to me that I'm going to want to use some JavaScript in my application. Yeah, not a very surprising take from someone who works at Gatsby, that I'm a big fan of React.

**Kevin Ball:** Yeah... Though I would wonder -- so I hit you with questions early on, but don't get me wrong, I love Gatsby; I love what y'all are doing.

**Dustin Schau:** But these are great questions; I'm glad you're asking them. They're not easy, you know?

**Kevin Ball:** No, and I think they're questions that we need to address broadly as an ecosystem. I think one big area that I'd be curious on - I don't t think there's a good React Solution for this yet, but maybe there is - is exploring the potential for progressive hydration. I don't know if that's something that maybe Gatsby could add a layer related to, or something. Essentially, thinking about the hydration process as a top-down approach, saying "Okay, the things that are on-screen to start with need to be hydrated first, and maybe we can wait until some of the other things come into screen before we pay the cost of all that JavaScript."

**Dustin Schau:** That's right. There's a lot of interesting ideas in this space, so for us, it's definitely something we're interested in. To be totally honest, is something that the React team helps us out with, and they kind of paint a better picture there.

One really interesting space that we've done a little bit of exploration is that very thing, and I've seen some other frameworks, SSGs etc. that do this idea of "Everything that you render will be static", and then you use a separate component that's like "This is then dynamic." I think that's a really cool idea, and it's very much in line with what you're saying.

But as far as whether we're going to do that in Gatsby - probably not any time soon, but I do think it's a very interesting and exciting space. As React moves into that, us using React and having first-class support for React, means we'll get that for free if and when that comes around.

**Christopher Hiller:** Can you build a Gatsby site with Rome?

**Dustin Schau:** With Rome? \[laughter\]

**Christopher Hiller:** I'm joking.

**Dustin Schau:** Oh, my gosh... I was thinking Rome the note-taking tool. You mean Rome, the new bundler, do-all-things-well that launched yesterday? Actually, it's funny - in Slack there's a pretty good bet on in already, so we're definitely aware of it; it's an awesome, awesome tool. I haven't used it myself, but you never know.

**Nick Nisi:** He's joking about a tool that came out yesterday and you're saying you already have discussions ongoing about it... That's pretty cool. \[laughs\]

**Kevin Ball:** Yeah, I haven't heard about this. What is it?

**Christopher Hiller:** What's his name...

**Dustin Schau:** Sebastian McKenzie.

**Christopher Hiller:** He open-sourced it last night, so it's just kind of a big -- it's just a code dump right now. It's very new, is what I'm saying. Less than 24 hours ago, so...

**Dustin Schau:** Yeah, you're kind of trying to catch me off-guard, and making sure I know my JS ecosystem.

**Christopher Hiller:** Well, yeah... You'd know if you were probably paying attention to Hacker News or Twitter, or something.

**Dustin Schau:** For sure, yeah. Again, I haven't used it...

**Christopher Hiller:** Nobody has... It's a thing, so...

**Dustin Schau:** There are things that other tools can be inspired from in that. I've been following his work on that for the last year or two; the first-class support for error messages and the emphasis he placed on really clear, solid error messages - I think that's something that every framework, every JavaScript tool should strive towards. So I've been definitely interested in that space... And when and if we can use it for something, I'm gonna be checking it out.

**Christopher Hiller:** Very cool.

**Kevin Ball:** It does raise an interesting plugability question around Gatsby... So one thing that you highlighted that I think is really important to think about is Gatsby has these two conceptual layers. There's a very interesting data pipelining layer that does a lot of interesting stuff and packages things up into GraphQL, and then there's a React-based view layer. Do you see any possibility that those two things might be separated and you could have someone be building a Vue.js or Svelte, or something else-based view layer on top of the GraphQL data pipeline?

**Dustin Schau:** \[00:12:19.25\] It's a great question. If I recall correctly, Sarah Drasner from Vue opened up an issue on GitHub a while ago, asking that very question... So to me, to be totally frank, I think React is the way that applications should generally be written... But our idea of sourcing data from anywhere - it is very much an interesting space. You can source data from anywhere, and then you can also output using whatever mechanism you want...

So from a product perspective it's a little challenging, because a lot of what we're doing is React code, so our runtime would then kind of need to be forked into different languages, different frameworks... So is it something that could be done? Yes. Is it something that we plan to do at this time? No. But based on -- I've definitely been monitoring this space closely, and they're doing a lot of really cool stuff. Svelte is awesome, Rich Harris is incredible. Worth a follow on Twitter; if anyone doesn't follow him, he's amazing.

So yeah, I think we'd be foolish to not at least keep that option on the table, but it's not something that we're planning to do now.

**Christopher Hiller:** It seems to be so much that the Gatsby ecosystem is married to JSX. And there's NBX and everything... It's really hard to separate the two at this point. I mean, is it something that people really want or need? I don't know.

**Dustin Schau:** Yeah. And that's the thing - it's kind of like how we prioritize. How many people are actually asking for this; how closely is the user of Svelte -- is that even a user of Gatsby ever? Definitely not today, because it's literally not possible. But \[unintelligible 00:13:52.13\] So yeah, I think it's a really interesting question. It'd be definitely cool to do someday, especially if the competitive landscape changes, and React isn't the way people write the UIs. I started my career as a front-end dev, and I was learning jQuery and jQuery Mobile. A year later it was Angular, and now it's not Angular anymore.

Landscape changes fast. I think React is here to stay. I think it's kind of stabilized, and it feels to me that people are using React, Angular, Vue, maybe some people are using Svelte... But yeah, it's definitely an interesting space to keep monitoring.

**Kevin Ball:** I wonder if we could invert it and say -- instead of saying "Gatsby has to support all these view layers", instead saying (and maybe you already do this) "Gatsby is going to clarify the interface into the data layer, such that someone else could pull that in and use it for a different framework." But not having it be something that is like "Okay, Gatsby now has to do all these things, change the runtime", but rather you have Gatsby data and Gatsby UI, or whatever it is.

**Dustin Schau:** That's a really interesting idea. For context, one thing I didn't necessarily mention explicitly is Gatsby invokes GraphQL queries at build time, and so that's the data layer that we're referring... So you write your GraphQL query alongside your React component, and your React component gets injected with this data. Yeah, it's a super-interesting idea, whether we could abstract our data layer into just like a data pipeline, and then swap out the presentation layer. Again, not something on our roadmap, not something we're thinking about now, but I think it's a really interesting idea.

**Kevin Ball:** That also raises -- you talked about roadmap a couple of times. You've introduced a new process for how you think about roadmap and what's gonna happen, is that right?

**Dustin Schau:** Yeah, correct. Gatsby has a really thriving community and a thriving ecosystem. We lovingly refer to it as like our GitHub fire hose. Tons and tons of pull requests, tons and tons of issues. That is just honestly fairly challenging, but really rewarding to stay on top of.

One thing that we haven't as of yet captured - at least not on a broader scale... So we have, I think last I checked, 3,000(ish) contributors to Gatsby, which is pretty incredible... And most of the contributions we get, which are always valuable, are documentation, tests... What I'd call smaller changes. I think what we've maybe missed the mark on, or what we could definitely use some help with from the community is broader chunks of work.

\[00:16:15.23\] The RFC process is how other spaces do this, so React has an RFC process, Next.js, a similar React framework in the same kind of space we're in, has an RFC process... Our RFC process is really not so much something necessarily new. It's a tweak on the model, so we have it as a separate repo. We found as open source maintainers it's really hard to keep a pulse on disparate repos, outside of the main Gatsby flow. So what we're really looking for is more eyes on these RFCs by internalizing them into our main monorepo.

People look at the Gatsby monorepo sometimes as a bit overwhelming, but literally everything we do is in that monorepo. We have our starters there, we have all of our Gatsby packages as like a Lerna monorepo, and then now we'll have RFCs that if and when they get merged, you can help shape the Gatsby roadmap and propose a chunk of work that will benefit the broader Gatsby ecosystem. Super-exciting process that we're beginning to experiment with and roll out, and that hopefully we'll see some success with.

So yeah, my call-to-action for our community is if you have a great idea, something that you really wanted to be possible in Gatsby, and you have some insight into maybe implementing it, we'd love to see some RFCs, we'd love to see some chunks of work proposed... And I think it's a super-exciting thing as a contributor, because you'll get tons of replies from our direct open source maintainer line, and we can help guide what this feature could look like, when we should do it etc.

**Kevin Ball:** So you mentioned the broad community around Gatsby, which is wonderful, but Gatsby also is tightly associated, in some ways, with the company Gatsby, or -- I don't know how you distinguish the name... Gatsby Inc, I guess?

**Dustin Schau:** Yeah.

**Kevin Ball:** How much of the core team is embedded within that company, and are there folks who are not connected to the company, who are on the core team?

**Dustin Schau:** The core team, as we refer to it, is Gatsby employees... Although we do -- once you get a PR merged into the Gatsby repo, you become a maintainer, and that gives you a certain level of access in the repo. As far as what percentage -- for total context, Gatsby is an open source product, is free and will always be free, and then we have cloud tooling, that we can maybe get into in a little bit... As I can describe it, it makes using the Gatsby open source tool better and easier for teams.

As far as the breakdown, I think last I checked maybe 50% of the company is open source. There's a really great blog post that actually goes into detail on -- you know, we're doubling down on the open source ecosystem... So yeah, open source is and will always be a focus, and it's a focus of our hiring, it's a focus on all of what we do, and then that work directly leads into a better experience for everyone. And then Cloud also of course uses the open source product as well... So we want our product good for everyone, including ourselves.

**Break:** \[00:19:14.03\]

**Nick Nisi:** Talking about open source versus the business side, you did mention that there's this whole cloud aspect of Gatsby. Do you wanna give us an intro into what that is?

**Dustin Schau:** Yeah, absolutely. Our Cloud product is really composed of a couple of products. The elevator pitch of what I would say Gatsby Cloud is is kind of what I've just said... Gatsby Cloud makes using Gatsby - particularly for larger applications and teams of developers working on a Gatsby application - better and easier to use.

One thing I've hinted at or shown is I've mentioned how Gatsby plays really nicely with several CMSes, so Contentful, WordPress etc. So one of the key things that we're seeing is that the CMS is moving towards decouple, so the CMS is moving towards headless... So Gatsby is excellently positioned in this space to be able to source data from these headless CMSes, using \[unintelligible 00:20:49.15\] APIs, stitch it together with this GraphQL API, and then produce this application.

But when you decouple your CMS from your presentation layer, you're kind of leaving your content editors, your marketers, your people who are actually using these CMSes a little bit stranded... So our cloud product, as I see it, is making the pitch for the developer who's bringing in Gatsby as a tool as easy as possible.

Our first two products are Preview - the idea is that Preview is like a hot reloading Gatsby application that lives in the cloud, so your content editors can preview their content in context. So if you're writing a blog post, writing a press release etc. you can click this Preview button. This will link to a hosted Gatsby application that will then preview your changes... And honestly, usually in like a couple hundred milliseconds, but sub-second types is what we strive for. The idea is that we're replicating the CMS experience kind of like piece by piece. Does that answer your question?

**Nick Nisi:** Yeah, digging into that - where would they actually be making those changes? Where would you be drafting a blog post? Is it on Gatsby Cloud itself, or is it on like a CMS that's third-party?

**Dustin Schau:** That's a great question. You would be making the changes directly on a CMS today. One of our most common partners, or one of the most common CMSes that people use with Gatsby is Contentful. The idea is use the tools that you like to be effective, and keep using them, depending on who you are. I don't wanna try WordPress from my content editor's \[unintelligible 00:22:16.24\] Use the tools that you like, and then stitch them together, stitch these tool's outputs (content, data), and then stitch them together with the Gatsby application, the Gatsby framework.

So the typical workflow is keep using the tools you like, pull the data with GraphQL with a Gatsby source plugin, and then basically give the same experience to your content editors, with a better user experience of "I'm not using my WordPress for hosting. I'm not spending 8k \[unintelligible 00:22:43.15\] edge cache layer." Put it on a CDN, produce static assets. I think it's a much better model and a much cheaper model, and a better user experience I think as well.

**Nick Nisi:** Is there a hook that Gatsby cloud listens to, for like "I saved a draft of this blog post. Now generate a new version"?

**Dustin Schau:** Exactly, yeah. Behind-the-scenes, as with many things, it's just webhooks. One thing I didn't get into -- so that's just Preview. The CMS experience is more than Preview, it's also Publish. Our Builds product is the fastest builds for Gatsby in the cloud. When you publish content, you then trigger a build webhook, which can then optionally also deploy to like the CDN, like Netlify, S3 and CloudFront, Google Cloud etc.

To your question now, for Contentful let's say, they have this \[unintelligible 00:23:30.15\] If you're making some changes to copy, that would trigger the Gatsby Preview webhook, which would then hot-reload the changes in place and context, which is pretty cool.

**Kevin Ball:** You brought up Netlify, and a lot of the features that you're mentioning here remind me of Netlify... So how do you see yourself as different from them, particularly for somebody who's wanting to build a Gatsby-focused app?

**Dustin Schau:** Yeah, so I think in a lot of ways what our cloud offering is doing is pretty similar to Netlify. Our Build product is continuous deployment, in the same way that Netlify has continuous deployment. I think the big difference is that Netlify is a CD solution for any application - they're pretty agnostic - whereas we are a CD application and more, kind of replicating the CMS, for just Gatsby.

\[00:24:20.09\] So I think the interesting thing is that we can do some things on the open source product that then impact Cloud in a (of course) positive sense... So really, Netlify is kind of like a generalist who's building out any application, and then Gatsby is specializing in delivering Gatsby applications, and the use cases for (for instance) what could be built on Netlify could be different.

So we're kind of capturing the CMS space - and that includes Preview - and that isn't necessarily a space that Netlify has touched as much. We're kind of making a platform for collaboration for teams using Gatsby, and it's a little bit different than Netlify, which is \[unintelligible 00:25:01.29\].

So the really cool thing that I think is awesome is that Netlify is an awesome, awesome tool - I recommend it super-highly - but it also exposes a CDN. So the cool thing is that with Gatsby Cloud you can build your application with our cloud platform, and then you can even deploy to Netlify, because we produce static assets that can be deployed anywhere, which is pretty cool.

**Nick Nisi:** Being more specific, with Gatsby Cloud, that lets you specifically tailor that experience to the Gatsby experience. One of the things that probably is a big benefit over something more generic like Netlify from what I've been reading is builds, and specifically builds are a lot faster on there. Can you go into why that is?

**Dustin Schau:** Yeah, I'm really glad you asked that. It's a great illustration of what we can do with being more of a specialist in Gatsby applications. So what we launched on January 27th was our Build product. That was kind of painting a picture for completion on Gatsby Cloud. So what we launched on that day is what we call Distributed Builds. That enables, of course, faster builds, but the how of how we did that is the open source product exposed a communication mechanism over IPC, and then Cloud can then listen to that communication mechanism and then offload work to Cloud. So it's really just Lambda functions behind the scenes. What that's doing - it is offloading heavy work off of the main core process, single-threaded note, into a cloud environment.

What we did is that one of the heaviest and potentially slowest pieces of a Gatsby build is generating responsive images, which again, it's worth it; that's something that your users want. If anyone hasn't checked out the gatsby-image component, check it out. That's why you are generating these images. So what you'd often find is that builds were timing out, or they were taking 10-15 minutes for generating those images alone... So by off-loading it to the cloud platform we can 1) build out the application faster, and then 2) especially on subsequent builds, we just short-circuit that work that we've already done, so you don't redo work that you oftentimes do on other platforms.

**Christopher Hiller:** Can you somehow use this in a local build, to speed up a local build?

**Dustin Schau:** It's a really great question, and it's something that we definitely want to do. So that same communication mechanism that we enable \[unintelligible 00:27:16.07\] I think we could totally just offload that to those same functions in the cloud from your local machine. You're asking a lot of really good questions, that are kind of highlighting our future deliverables, so... It's a really good question.

**Kevin Ball:** Interesting. Can I dig in a little bit more...? You mentioned that you can reuse stuff from the previous builds. Does that mean you've gotten to the point where you can do complete incremental builds?

**Dustin Schau:** We're getting close. Incremental build has been and I think will be the holy grail for static site generators for a really long time. For context...

**Kevin Ball:** Yes...!

**Dustin Schau:** ...what incremental builds is - I think it requires some nuance, but I think the mental model that everyone holds is "I had a blog post. I just built out that blog post, not my entire application." What's really terrible about that is it unblocks using "static site generators" for more and more interesting use cases.

\[00:28:15.19\] One of the most common complaints we hear of users of Gatsby is "Well, I have a million pages, and I don't wanna wait 35-40 minutes for my build to complete. I've just been changing a blog post." Or "I have real-time edits. My content editors are making changes every ten, five, one seconds, and I can't wait for my build to complete." So what Incremental Builds does is -- I think of it quite simply as just fast builds. The ultimate goal is that builds are kind of just this seamless, obvious thing that just happened.

It's something that we're definitely working on, and we hope to have more to share on that soon... But it's a super, super-interesting space, and it's honestly what I think tons and tons of users have been asking for since the entirety of Gatsby as a tool. So anyone who decouples their content from their presentation layer, so using an SSG, has asked for this, in every framework. You could probably go through GitHub issues for anyone and be like "What about incremental builds?"

**Kevin Ball:** One hundred percent. I know you just said that you're gonna have some announcements soon, but I'd love to poke a little bit at the details there... And if you can't talk about it, you can't, but... I think one interesting thing about that is that different types of increments may be differently difficult, so changing content within a page is potentially much easier to isolate than adding a new page, because adding a new page then has to touch anything that links to it, automatically indexing anything like that, whereas within a page it may be easier to isolate... So I'm curious, as you look towards this, do you think you're gonna be able to get to a fully general solution, or is it going to work for particular use cases, or things like that?

**Dustin Schau:** Yeah, I'm really glad you asked this question. I think one of the most interesting things about Gatsby isn't the presentation layer - although I think that's great - it's the data layer. And so because we own that data layer, we can then associate which components, which pages then require which data...

**Kevin Ball:** Oh, interesting...

**Dustin Schau:** And so if I'm a user of Contentful and I add a blog post, I can then know what work I need to do to basically make the site consistent. A new blog post is a fairly trivial use case. But let's say I'm editing -- well, let's say I'm editing an existing blog post; that data is going to come through, we'll time it like a diff, in some sense like React diffs, and then we'll just generate that page that needs to be updated, instead of the entire application.

There are edge cases here. I don't wanna portray a silver-bulleted scenario ever, because you can make a data change that then invalidates the entire application. For instance, I might have a footer component that has data sourced from Contentful, or WordPress, or whatever; that change would then invalidate every single page, which then means the application will be regenerated. So again, an interesting space, where it's like, we wanna keep driving towards more and more incremental cases... So yeah, it's a super-interesting space, and yeah, that one's something we're exploring and working on.

**Kevin Ball:** Interesting. So to kind of dig into that idea a little bit more - so you're talking about essentially creating... If we think about the virtual DOM as creating a dependency tree of templates to what's happening, you're thinking about that in terms of your GraphQL layer. You could create a -- I don't know what you'd call that... A virtual data layer, or something that keeps track of the dependencies between different data points, so you understand "If this changes, here's the minimal set of changes that has to be re-rendered"?

**Dustin Schau:** Exactly. And what's really cool is that this is how preview works. I was mentioning earlier a tool called Gatsby Preview - that's the essential mechanism that enables that "hot reloading." We have this big blog of data, let's say; you know, this tree of data. So we know what components are plucking from this tree, and those are the components that we rerender.

\[00:32:10.12\] So the idea is that Preview is rerendering/hot reloading in the cloud, Incremental Builds is rerendering the build process. So it's like "Just do this work", because we know which pages require which pieces of data.

**Nick Nisi:** Is that utilizing React's DOM diffing, to effectively do that? Like saying "Oh, you have these components, and these props on them have effectively changed, so I need to rerender this."

**Dustin Schau:** No. Just kind of like an analogy. It's a diff in the same way that React's kind of like diffing.

**Nick Nisi:** Gotcha.

**Dustin Schau:** And actually -- you know, if Sebastian McKenzie was listening to this... I know they've talked a lot about how it's not just like a vdom diff. There's more nuance to it. But I'm just saying that its entire dataset, which components require which data, so what kind of diff, what changed between what was the previous state of the world, to the new state of the world.

**Nick Nisi:** Cool.

**Kevin Ball:** Is that diffing tool intended to be part of what is open-sourced as a part of Gatsby, or is that maintaining proprietary to the Gatsby Inc.?

**Dustin Schau:** Yeah, good question. Incremental Builds requires cloud tooling to be an effective solution today. In the future we definitely want to explore that space to see what's possible in open source. You've mentioned a couple things that I think are really interesting.

Earlier there was, you know, "Could we use distributed builds locally?", and the answer is "Not today." But it is something that we wanna keep exploring, because again, it's a really exciting space. One note here is that there's like a super-generous free tier, just like other platforms, so we will be able to use all of these features in Gatsby Cloud on the free tier, in general.

**Kevin Ball:** Yeah, I'm imagining two or three steps down the line... So if that diffing tool becomes a part of the open source product, so you have this concept of data layer that includes a way to understand for any data change what is the set of dependent pieces of data that are changing, and you get to that point where you're separating out the data layer as a package that could be reused for other frameworks... You've just enabled the next generation of static site generators, across every framework, not just across one.

**Dustin Schau:** Yeah, that's... I am glad I'm here on this podcast, because you have a lot of really excellent ideas that I would definitely want to explore more. So the answer is we haven't explored that particular space yet, but it's something to definitely think about, for sure.

**Kevin Ball:** I feel like I'm talking a lot... Anybody else wanna jump on this? \[laughter\]

**Nick Nisi:** You mentioned one thing that Gatsby Cloud does is image processing... What is it doing specifically?

**Dustin Schau:** Oh, that's great. I hope people don't mind my super-diving into the how, because this is really exciting... So we use an open source product called Sharp. Sharp is just a Node image processing library. What we do is -- I'll start with a simple example. You might have a markdown file that has a link to a local image. That image is going to exist in your GitHub repo. That image might be a 5 MB jpeg. So just by linking to that image as like an image with a source tag, you're shipping a 5 MB image to your end users, and that's not what your users want. They don't know they don't want that, but they don't want that.

So what we do is using this GraphQL and utilizing this plugin ecosystem - we use this library Sharp - we'll take this image and then generate the GraphQL query, and then we'll generate the different image sizes, so different viewports, different DPIs etc. And then that GraphQL query will contain a data shape that you can then directly pass to the gatsby-image component. That data shape includes things like source, source type etc. So gatsby-image constructs a picture element with a source and then a source set.

\[00:35:58.04\] This image transformation, what it's doing is it's generating images in (I believe) three or four different variants, in different sizes; it's optimizing them, it's compressing them, so that the end user experience - if you've seen a Gatsby application, you'll see this medium blur effect.

At build time we just do the base64 image, so it's super-small, and then with an Intersection Observer, once you scroll that image into the viewport, you then load in the image that you need for your viewport. On mobile you get a smaller image, on desktop you'll get a larger image, but the end user experience is that it's happening behind the scenes, using this JavaScript layer, and then it's loading just what you need, when you need it.

I kind of think of Gatsby, in this particular example, as like a family butler... Like, "Hey, I think you might need this. Okay, cool. Now it's ready." So we're trying to guess, using smart optimizations, when something is ready, based on when the user requests it.

**Nick Nisi:** Are those image sizes and variants dependent on how I'm using the image in the app? Like it knows that it's a big banner image, so it should have a really big size... Is it detecting the actual size that it would be in the viewport, and then doing that?

**Dustin Schau:** Yeah, it's a good question, too. It's all configurable. Because the mechanism for when these images are created is your GraphQL query, the GraphQL query just takes arguments. For like a hero image, you might say "Well, my users are typically on like a 1,200 to 1,500 pixel monitor, so my max width \[unintelligible 00:37:27.23\]" So that will be the largest image that you create. And then of course, it will stretch to this image based on however large you make it or however long you make it. So it's sometimes manual, but it's giving the developer the control as to where this image is used in context.

You can use gatsby-image in this image transformation layer for what are called fixed images, so things like an avatar, as well. So you still are only loading a small (less than 1 kb image) less than 1 kb image at load, and then you're loading in the full image when you scroll down to it, when you request it.

**Nick Nisi:** Is that image API -- I think I missed this... Is that something that is specific to the Gatsby Cloud version?

**Dustin Schau:** No, it's truly open source. When you're writing a GraphQL query, what actually happens is that that will then use the gatsby-transformer-sharp plugin, and that gatsby-transformer-sharp plugin will use the Sharp library to then generate the images in whatever dimensions I want... And that work in the open source project perfectly.

**Nick Nisi:** Gotcha...

**Dustin Schau:** So the idea is that we're offloading that very process to a cloud function in the cloud, instead of relying on the single-threaded Node process that runs \[unintelligible 00:38:38.15\]. But I've seen so many sites that have a 5 or 10 MB hero image, and I'm just waiting for that image to load... Or even worse, I refresh the page or something, and then an image below the fold is loading in, and my page jumps... Gatsby-image prevents both of those, because we know what the image size is, so we'll load in that small base64 image, so that you don't see those weird jumps. You get this nice, Facebooky, Mediumy-like blurring effects, and it's a really great user experience, without having to be an expert in that image optimization space. Honestly, I don't think people even know about the picture element. If you haven't checked it out, go check it out. It's really, really cool.

I think that's one of the cool values of Gatsby, is we kind of are the performance experts... So it's like "Hey, here's how the web should be. Here's an optimized image that looks for the end user experience", and you don't have to be that same expert to get that benefit, which I think is really cool.

**Nick Nisi:** Yeah, it's always nice when the tool will push you towards the standard that you should know about and should be using.

**Dustin Schau:** Yeah. It's funny... I saw and heard that Jason Lengstorf was on this podcast a year ago or something, and he said this a lot - I don't know if it's a Jason original, but I'll give him tons of credit \[unintelligible 00:39:52.04\] But it's like "Make the right thing the easy thing." I think that's what we do with Gatsby, which is pretty cool.

**Break:** \[00:40:05.28\]

**Kevin Ball:** Alright, something that you said in that last piece, talking about images and how it's all configurable, got me wondering "How configurable or accessible to developers is the Gatsby Cloud build process?" I have a particular use case in mind, something that I build for a site that I am hosting on Netlify... For each page there is a thumbnail that if that thumbnail doesn't exist in my repository during the build process, it will auto-generate it. So it'll auto-generate a thumbnail for every page that does not already have one... At least within the context of blog pages. So I did that; they have these various ways that you can hook into the build process as you go, and I'm kind of curious what Gatsby Cloud makes available to folks.

**Dustin Schau:** Without being intimately familiar with that exact use case, and seeing the code and what you're trying to do, it sounds like that's something that you would do in the open source product. And because the Cloud product just uses all the hooks, all the APIs that the open source product uses, it would just work in Cloud.

So that to me, based on what you're saying, sounds like it could be like a Gatsby plugin... So you could write that plugin, add it to your repo, or better yet, \[unintelligible 00:42:46.26\] has published it to the open source ecosystem, and then everyone can get that benefit. Again, you know, this is a bit caveated, because I don't know the exact use case, but that's probably how I would recommend doing it. So Cloud, being a consumer of the open source product, would just work the same way.

**Kevin Ball:** Awesome. So in some ways then your statement for -- how would you hook into the build process? Do it as a part of the general Gatsby build process; Cloud doesn't do anything different, it's just an extension, and it does it for you magically?

**Dustin Schau:** Exactly, yeah. Get it working in your Gatsby application, and that same process will "just work" in Cloud. It sounds like your use case is -- some blog posts don't have an image, and then you just generate that image on the fly... Is it based on the blog post's contents, or is it like a placeholder image?

**Kevin Ball:** Yeah, it's based on the content.

**Dustin Schau:** Oh, cool. Jason Lengstorf - he's coming up again - did some really interesting things generating an SEO image, which is pretty cool... He added a consistent -- I guess just his face, which is kind of funny... But it's his face on the card, and then the blog post title, and then a short little description.

**Kevin Ball:** This is very similar, though I got it from Shawn Wang (@swyx).

**Dustin Schau:** Oh, okay... Cool.

**Kevin Ball:** He was doing a similar thing. But yeah...

**Dustin Schau:** It's funny how it all coalesces.

**Kevin Ball:** It's a small world...

**Dustin Schau:** \[00:44:07.03\] He wrote it as like a React component, and then it hooks into Cloudinary behind the scenes. I think even better yet, that could be a Gatsby plugin that will then generate that. I'm getting really into the weeds, so I can broaden it up if we need to, but - Gatsby has these low-level Node APIs, and then those Node APIs are then what makes a plugin do something.

So the idea here is that you could listen to when a node in Gatsby is created, so when a blog post is created, and then you could at build time construct that SEO image, or that blog post image. So that plugin would, again, just work in the cloud.

**Kevin Ball:** Another question, since we're in "Kball asks questions" this episode, apparently... So I was reading through the post that you all did around all the cool stuff that you did in 2019, and what's coming in 2020... And I noticed there was a huge focus on developer experience and DX, and I didn't see as much talking about user experience and user-facing stuff... And that may be because you feel like Gatsby is already rocking that, and you're focused entirely on DX... But I wanted to ask, what is currently missing in the Gatsby experience for developing amazing user experiences? Are there things where Gatsby needs some work, or that is on the roadmap, or in discussion but not there yet?

**Dustin Schau:** Yeah, I have a \[unintelligible 00:45:32.19\] So the user experience, because Gatsby uses React, there's probably a component for it in that space, that does exactly what you're doing. By user experience I mean nice components, and a nice interaction in the application. Is that what you're thinking?

**Kevin Ball:** Potentially. When we talk about developer experience, we're usually talking about how do we make it faster, easier, better for a developer to build what they're trying to get to. I'm thinking about are there places that -- some of what we talked about earlier, places where you can improve performance, reduce uncanny valleys, places where it's hard to do some particular type of user-facing thing... Places that Gatsby is perhaps not the best fit from a user perspective, even if for a developer it would be delightful.

**Dustin Schau:** Yeah. Generally, that's why we're a framework on top of React. We provided the right bells and whistles so that the user experience is as optimized as possible. \[unintelligible 00:46:32.14\] because of course, that has an impact on user experience... So you don't have to be a webpack expert to get it optimized \[unintelligible 00:46:41.22\] with Gatsby.

I saw some really interesting things in this space. We actually did do -- I don't know if they're encapsulated in this blog post or not. Oh, yeah, they are. Some user-facing things is accessible routing... So because we internalized the router - @reach/router today, and so we actually did a really focused effort on making Gatsby as accessible as possible, by default. So of course, accessibility is a spectrum; it's not like, "Oh, cool, my app is accessible. I'm done." There's varying degrees.

What we do with Gatsby is we optimize - because we are the framework, we are the compiler - as much as possible. What's cool about that is you don't have to change your application to get those benefits, you just need to upgrade your version of Gatsby and then you get them for free.

So to your actual question as to what things are maybe slighted for more areas for improvement in user experience... Generally, I think we're hitting the mark there. We've optimized the things that we know about, we provided the right level of abstractions or right -- I mean, it is a component at the end of the day, but the right level of nuance that you need for a good user experience... But it's definitely is something that we're always thinking about.

\[00:47:56.24\] One of our key reasons -- our CEO, Kyle, always says Gatsby is a tool that for him is a way to create delightful user experiences... So it's like, we want to give the users all the control, all the power, all the right level of abstractions, so that they can do that without being a \[unintelligible 00:42:18.28\] expert, or without being an accessibility expert, or thing X, thing Y, thing Z. So definitely a good question...

**Nick Nisi:** You were talking about plugins... I'm curious what are your thoughts on cool plugins that people should check out, or really interesting community-provided plugins for Gatsby.

**Dustin Schau:** Sure, great question. I would recommend going to GatsbyJS.org/plugins. They're ranked by popularity, which honestly is probably not the best ranking mechanism. I think there are some really cool ones.

One of the nice things about having a plugin ecosystem is that you can encapsulate a fairly complex thing or a fairly complex use case in a plugin that you can just get by Npm-installing it to a Gatsby config.

Some of my favorites are gatsby-plugin-offline. That will then generate a service worker and it'll do some PWA-type things, and will kind of cache your application offline once it's been accessed. Again, any developer who has used or written service workers is like "Oh, there are some dragons here." So what's kind of cool about gatsby-plugin-offline is we have vanquished at least all the dragons that we know about... So just by adding that plugin you get this nice offline experience.

Gatsby-plugin-manifest - same space. I think a lot of the application space is moving towards making it more aligned with the web, and so this whole notion of progressive web apps -- with just those two plugins you get a pretty great progressive web app experience, just by Npm-installing.

Beyond that... There's a lot. Whatever you'd like to do or whatever you'd wanna do, there's probably a plugin for it. I think we have nearly 2,000 plugins, which is pretty incredible. For me, I feel like I'm coming here with a lot of opinions and hot takes, but... I'm a big CSS-in-JS fan, so there's a lot of really cool plugins that -- you know, I like the developer experiences, but oftentimes there's a runtime parse, and so with these Gatsby plugins you can then generate ahead of time that CSS file based on CSS-in-JS, and then statically optimize it as much as possible. For instance, there's a Gatsby plugin styled-components...

So the idea is that, you know, use these abstractions that you as a developer like, but then don't ship the cost of those abstractions to your end user. So I think those \[unintelligible 00:50:23.06\] you kind of get a smaller bundle size... I think those are awesome and great ones.

As far as user-generated ones, it's honestly hard to get a handle on them, because there's so many... Some other cool ones, other than -- I mean, even the ones that are in our repo, some of them have been contributed by users originally. Not only have they -- you know, the initial creation of them, but then also some of the maintenance, some of the "Hey, I've found a bug" and then a user comes in and fixes it for us. That's, again, the value of being open source and having that great community behind us, which is truly amazing.

**Nick Nisi:** Yeah, totally. Kind of tying that into my next question - have you seen any crazy or unusual use cases for Gatsby? When I think about it, I think "I'm gonna try rewriting my blog with Gatsby." But going beyond that, I know it's way more powerful... What are some cool use cases that you've maybe seen or thought about?

**Dustin Schau:** Yeah, okay. First, I'm gonna comment on the blog one, because I love it, and I can refer to a great meme. I don't know if anyone follows Mark \[unintelligible 00:51:33.07\] but he's the meme master...

**Nick Nisi:** \[laughs\]

**Kevin Ball:** Oh, Mark...

**Dustin Schau:** So one of my favorite ones he ever did is he talked about writing a blog, and he was like "Oh, I'll use TypeScript, and I'll use \[unintelligible 00:51:44.29\] and I'll use Webpack" for like a blog that has three posts... And it's like, "Well, you don't really need this stack for a static blog that's not particularly interesting." Of course, again, Gatsby is a great use case for it. I get the meme, it's pretty funny.

\[00:51:59.09\] As far as actual, novel use cases, it sounds a little arrogant... I think there's a kind of \[unintelligible 00:52:04.24\] People think of Gatsby as an SSG, so it's like hey, you can do apps with Gatsby; so it's just a React application... And the idea is that if you generate as much as possible upfront, ahead of time, and then you have a login experience... I used this tool called OneGraph, which is (again) kind of like a GraphQL stitching service, so I can query from Twitter, from GitHub, from Gmail. So I did a small little Gmail clone and \[unintelligible 00:52:35.06\] so clearly it's not Gmail-level, but I think that's a pretty interesting one. It's open source, look for gatsby-mail.

As far as other interesting Gatsby applications or use cases I hadn't seen--

**Kevin Ball:** Can I chime in with one that I saw?

**Dustin Schau:** Yeah, it'd be great!

**Kevin Ball:** There are some stunning e-commerce sites out there... Because e-commerce is one of these areas where we know there's hard data behind how performance impacts revenue and money and conversions and all of that... And there are some examples of e-commerce sites that are just so incredibly fast, you cannot believe it, built with Gatsby.

**Dustin Schau:** Sure. I didn't wanna get too brandy, but yeah, if you go to our site showcase, some of the more common ones are e-commerce applications... So yeah, exactly what you're saying - e-commerce applications especially. There's like a real dollars and cents value loss if your site is slow... So the optimization, the decoupling from your source of content makes for some really great e-commerce applications.

I think one of my favorites is Harry's, the razor. There is a women's variant called Flamingo, believe, and it's a really great application. You can see some of the benefits of Gatsby; you get that responsive image loading. It gets great Lighthouse scores out of the box. I also think Flamingo is another good one. I'll share these links in Slack.

**Kevin Ball:** This reminded me of another question that I have, that I think I asked Jason about a year ago, and the answer was "Well, not right now...", so I'm curious if the answer has changed... Which is - Gatsby has this incredible data layer we've been talking about, that is all happening at build time. Is there anything to expose that data aggregation and that GraphQL layer at runtime? If you're, for example, building out some of these applications that are more full-featured, that have some pieces that cannot be statically rendered, but still may need to access some of that data.

**Dustin Schau:** Yeah, it's funny, because the answer really hasn't changed there yet. Being in the React space, where because we're using GraphQL, we're kind of placing a bet there, and we're saying that "In general, our applications should be written in React, and then your data layer should be sourced in GraphQL", so we're seeing a proliferation of GraphQL APIs... So the runtime handling piece there is just use a GraphQL library in the React space, and because it's a dynamic application, you can then swap in a component that might have a GraphQL connection to your actual API.

As far as exposing our GraphQL API, I think the really interesting space - and there's actually a CMS that's doing this - is generate ahead of time as much as you can, and then also listen with this GraphQL API, with this shared component... So I think it's Prismic. Yeah, I believe it's Prismic. Prismic works very well with Gatsby, and so they're actually doing that. There's more to figure out there, because there is a runtime cost to that. You're loading this bundle of JavaScript, so the benefit is relatively clear to the end user. It's like, "I have the content and I don't need to wait for every build." Everything's up there. The future state is "Well, you don't have to wait for a rebuild." But if your rebuild is instant, you don't need to listen for that change.

**Kevin Ball:** \[00:56:04.26\] Yeah. The use case that I'm interested in is for example for gated areas. Maybe this has changed too, but my understanding is to create a gated area within a Gatsby application, you basically make it client-side only. You don't prerender.

**Dustin Schau:** Well, define what you're gating. Are you defining the whole experience, or a portion of it?

**Kevin Ball:** An authenticated set of pages. Or a logged in experience, something like that. Those are all client-side rendered.

**Dustin Schau:** If there is content that can be generated ahead of time, you can. And then you can still gate it, just by virtue of authentication and using an API. You are right though - once you authenticate, then you have content that requires an API; it' can't be built at build time. That is in Gatsby land what's called client-only routes. Gatsby-mail is an example of that; it's like, we can't generate your emails ahead of time, because we don't know what they are, and we don't know who you are. So that is the value of using React - in Gatsby it's a client-only route. Use whatever data fetching mechanism that you like, use whatever auth library you like. You could use Auth0, you could use your own one. It works just fine.

**Kevin Ball:** Yeah. But if you wanna mesh that content up with some of the stuff that you're preloading in the data layer, right now, as I understand it, you're SOL. You've gotta go back to those original sources to load--

**Dustin Schau:** As far as I know, you can get the best of both worlds. If you think of like a user page, if there is something that can be fetched ahead of time, that will be rendered ahead of time; then once it launches, then it's a React application. So if you're rendering your footer and your header and the hero image, and then the body within is then the authenticated content, that would work just fine. It depends on the use case; it depends on exactly what you're doing. I don't wanna make too strong of a commitment, because there's nuance to anything. Person X's use case could be a little bit different, and that answer wouldn't hold true. But generally, that's what I like to do.

**Kevin Ball:** Can you pass that preloaded GraphQL content into the authenticated region? The example I'm thinking of is there's some amount of content or data that is global, so it could be prerendered. There's some amount that is authenticated or shielded. And it's not as simple as gating that by component, because they are meshed together in some way... So in my ideal world, I can use the same -- I could basically use that pre-fetching layer for everything that's applicable, even if it's going into a piece of content that can't be prerendered.

**Dustin Schau:** Yeah. Because we're in the React space, everything is really a component. Let's say that you have this component that is -- let's say it's probably a user, or an admin, or something; something that would require a login to gate. So that component is just a regular React component, so you can pass in props \[unintelligible 00:58:53.14\] with the results of their GraphQL query, you could then just use it at the call site. That has a downside, that there's props spreading... So at your base level, you have to pass those all the way down, and that can be a little burdensome.

What Nick was referring to earlier, what we launched in 2019 - one of the coolest ones I think is what's called the useStaticQuery. It's a React hook that you can then query at build time with that GraphQL data, and you can use useStaticQuery in a React component.

**Kevin Ball:** Oh, got it. Nice. I see. So you basically generate your query at build time, it's gonna load, and then you have a hook to pull that into whatever component, which could be down inside your authenticated stack, or something like that.

**Dustin Schau:** Exactly. From main layout down to sub-footer component, you can use useStaticQuery, any layer, to thread in whatever you need. StaticQuery already existed as a component, but the hooks API makes it really easy to consume... So that's again a pure developer experience that is a really nice feature of Gatsby... And it's a good question.

**Nick Nisi:** Cool. I have one more question to end us on, and that is, going back to the open source side, what's the best way to get started contributing to Gatsby? Would that be to just go into the repo and start looking at issues, find tests to write? Or would it be to get started with the RFC process?

**Dustin Schau:** \[01:00:20.07\] That's great. Generally, I think the RFC would be for someone whose more familiar with the Gatsby repo and really the Gatsby's base, and kind of like what we're looking for... With that being said, if that's where you started this journey, that'd be amazing, too. I'm never gonna preclude someone from starting there.

For someone who's getting up and running with Gatsby and wants to contribute, we try to label as much as possible all of our issues with "Good first issue." There's actually a really cool \[unintelligible 01:00:45.15\] called "Good first issue", shockingly. So you can run npx.good-first-issue and then name of the project, so npx.good-first-issue Gatsby, and that will then show a list of where you could get started. I think that's probably a really great way. Those are the ones...

They're categorized as a good first issue intentionally, of course. They don't require as much context. They generally aren't some deep, core, internal thing that's a little harder to discover, and it requires a fair amount of context... So that's a really great way to start.

What's also amazing, and I'm really proud we have this program, is we have pairing sessions with the community. Generally, we want you to come with an idea, or something to work on, not just like "What is Gatsby?" That's a little harder, and better served in a video, or something.

You can actually go to our website, and I can share this link in Slack... But if you just look for community pairing sessions, you can sign up with an open source maintainer and we'll kind of walk you through getting your first contribution to Gatsby, which is pretty cool.

I think those are the two best ways to get started. Of course, many of the core maintainers - Gatsby in general - is really open and welcoming to the community, so reach out to us on Twitter, let us know if you have an idea, and we'd love to help guide you through your first contribution.

**Nick Nisi:** Awesome. I love that idea of being able to pair with a maintainer, yeah.

**Kevin Ball:** Yeah, it's super-cool.

**Dustin Schau:** Yeah, for sure. It's been awesome, especially when we can take someone without Gatsby context and help level them up. There's been a couple examples of when we've taken someone from "What is Gatsby?" to "I'm making a core change that required some context", and I think one of the key ways is doing that pairing session. So it's been really successful, several times.

**Nick Nisi:** Cool! Well, thank you so much, Dustin, for joining us this week. Definitely check out Gatsby. It's a really cool project. Can't wait to check in with the team next year. Cool, thanks for joining us for another great JavaScript party. We will see you next week!
