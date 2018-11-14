**Nick Nisi:** Welcome to another fantastic episode of JS Party. I'm your host this week, Nick Nisi, and today I'm joined by a very special guest, Mr. Ives van Hoorne. Ives, would you like to introduce yourself?

**Ives van Hoorne:** Hello! Yeah, my name is Ives van Hoorne, and it's super-cool to be here. Thank you for inviting me.

**Nick Nisi:** We're really excited to have you here. We're talking about a project that you've created and maintained call CodeSandbox. For anyone in the audience that hasn't heard of that, can you give us a quick summary of what CodeSandbox is?

**Ives van Hoorne:** Yeah, CodeSandbox is an online editor where you can start web application projects, like a React project, or Angular, or a Vue project, and the cool thing is that whenever you save the project, you can share the URL with others and they can work on it as well. They can fork it, or they can work on it with you together. That's CodeSandbox in a very summarized way.

**Nick Nisi:** Very cool. So it's basically an online environment for running Javascript projects of all different shapes and sizes.

**Ives van Hoorne:** Yeah, exactly.

**Nick Nisi:** Cool. Some of the things that I'm sure you get asked about all the time - where did this idea come from, for CodeSandbox?

**Ives van Hoorne:** I think that's a nice story... I think two or three years ago I was working full-time for a company called Catawiki, and we were converting our Ruby on Rails pages to React; we were on Ruby on Rails 2, and we were converting them to a kind of single-page application. I was doing with some co-workers, and at some point I went on a vacation to St Ives, and I didn't have my laptop with me. At that point I started getting questions from my co-workers about React, or about React in combination with an Npm library, and I didn't really have any way to answer their questions, because I couldn't spin up my local environment to test what they meant. So I had to kind of get their code snippets from Slack, put them through an interpreter in my head, and then give back the answers. It was pretty hard to do; my interpreter is not that good. So that's when the idea came with "What if I put the local development environment on the web, in a very accessible way?" Then you would be able to access their code snippets from anywhere, even if you're on your mobile phone, or if you don't have your working laptop with you.

\[00:04:06.20\] That idea came into my head, and I didn't do anything with it until I started studying, I started going to university, and we started getting lectures about Java development. The first two lectures were like, "Okay, this is pretty interesting", but at some point it started to get pretty boring, so I went to the ideas that I wrote down and I started working on the first one that came up, and that was an online code editor. I started working on it during the lectures, and we started getting more lectures, and I started working more and more, and at some point I got very enthusiastic and I started to invite my friend \[unintelligible 00:04:49.02\] to help me. We started to work on it more and more, and in April we released it, with not many intentions; we weren't expecting a lot of response, but the response was much bigger than we expected. That's kind of how CodeSandbox started.

**Nick Nisi:** Wow. So give me a timeframe... April - is that of 2017, or 2016...?

**Ives van Hoorne:** That's a good question... 2017, yeah.

**Nick Nisi:** Cool. And out of the box did it just have support for React?

**Ives van Hoorne:** Yeah. I initially wanted to call it ReactSandbox, but then I saw that the domain CodeSandbox was free, and I thought "Okay, let's not limit ourselves to one framework", so we called it CodeSandbox. But initially, for the first 2-3 months, I think it was only in React. The reason for that was that we wanted to kind of polish the experience as much as we could. If we only support React, our possibilities get less, and we can just focus on making this React experience perfect. Then once we think it's perfect, we can move on to other things, and that's still something that we follow right now.

**Nick Nisi:** Very cool. That's a really interesting start to the project; you had this problem, and you thought, "Oh, I'll just create my own online environment, and go from there." Definitely the hacker way of thinking about that, so that's awesome. We've all benefitted it from it now, going forward... It has grown into so much more than that. It obviously supports anything, really, it seems; it supports much more than React at this point. What led you to that, to supporting more projects, like Angular, and Vue, and Preact, and others? What was the motivation for adding support for that? Was it just to be kind of a more useful tool for a greater number of people?

**Ives van Hoorne:** Yeah. Once we started with React and it got more popular, we started to get more questions from other people, like from the Vue community, if they could use Vue in CodeSandbox, and our GitHub issues were piling up with these kinds of requests. The initial version of CodeSandbox was super-simple. We execute all the code in the browser, so we had to have a kind of bundler in the browser where it supports multiple files, but it was fairly simple; we would transpile all the code using Babel, and then evaluate it, and we would do this for every file.

Once we wanted to get Vue support, we needed to rewrite the bundler to support .vue files, and maybe Webpack loaders... So we had this idea that we first wanted to get React very good, so to say, and once we have more resources, I start working on this new bundler in the meantime. And once that was out, once we had this bundler, it was super-easy to start supporting Preact, Angular and Vue. That's the way that we started doing things; once we think that this experience is good enough, we put more time into rewriting some stuff to make the new frameworks or other frameworks doable, and then start implementing it for them as well. That's how it kind of went.

**Nick Nisi:** \[00:08:07.12\] Very interesting. I wanna dig into that a little bit more with how the bundler actually works. The code that it's pulling, I assume it's pulling from -- is it like Npm, or Unpackage, and then doing all of that bundling locally in the browser?

**Ives van Hoorne:** Yeah, that's it. That's kind of it. We've had many iterations for making Npm packages be supported in the browser, because Npm packages are huge. If you see an average React project, it can have like 800 MB of Node modules. Then you have to support that in the browser, and you don't want everyone that opens a project to have to download 800 MB. That would be the worst kind of web application you can build... So yeah, we had to take a different approach.

In the first version we pre-bundled dependencies using Webpack. We created a Webpack \[unintelligible 00:09:04.05\] bundle, and for every entry point we had a separate function exported. That worked for some time, but when we started supporting other frameworks, like Preact, Preact relies on aliases, and since we were using a pre-generated bundle, aliases didn't really work, because those were pre-computed. So we started to move to something like you mentioned now, Unpackage. For every dependency request, for every file request, we did a request to Unpackage to download the file.

Now we have a bit more advanced system, where we use some serverless functions to pre-compute the dependency graph, and also pre-compute which files are probably needed by the sandbox, and then we catch that result. So we send one big JSON blob with the probable files that are needed, either by checking from the entry points and then traversing the AST and the dependency graph, including all the files of that, or by just thinking like "Oh, if this file ends with .min.js, we probably don't need to include it in the bundle." It works now that it takes this big JSON file and uses those files, and for every file that was not accounted for in the JSON file, we do a separate Unpackage request. That's how it currently works.

**Nick Nisi:** Very cool. So it has some kind of algorithm that it runs then to try and figure out, based on what you said, the most probably files the project or the sandbox will need, and then bundles those and sends them down, and is able to run from there.

**Ives van Hoorne:** Exactly. Pre-computing the files needed. Yeah, that's exactly it.

**Nick Nisi:** Very cool. That's kind of how I got started with CodeSandbox a little bit... About a year ago I was one of those people making a request for another project to be supported. I was trying to get Dojo supported on there.

**Ives van Hoorne:** Yeah. \[laughs\]

**Nick Nisi:** That was a very fun learning experience, getting that going... But Dojo is a supported project on there now, and it's very fun and very nice being able to not only share code snippets, but also use CodeSandbox as a tool for bugs and things like that, where we can have a reproducible environment immediately from users, or be able to pass that around.

**Ives van Hoorne:** Yeah. I was so impressed by your pull request, because all the templates that were created before were created by me... And you just looked at the code and started to do a pull request for Dojo support, and I was super-impressed by seeing that. That's the power of open source - people can build their own things, and we can merge it in. That's really cool.

**Nick Nisi:** Yeah, that was really great, and the code was really easy to follow along... So it's definitely a good project to take a look at if you're looking to get into open source. And with that, it seems like the one thing that I did notice with it is there's a lot of different technologies in there. Do you wanna talk about what you built CodeSandbox on?

**Ives van Hoorne:** \[00:12:09.10\] Yeah. CodeSandbox was a learning project for me. The server is not written in Ruby on Rails or Javascript, it's written in Elixir, in Phoenix; I had to rewrite the server three times to grasp the functional programming patterns, but now I think that we have a pretty okay server... But the server is in Elixir. Then we have some microservices, for example for imports in GitHub repositories. Those are in Node.

The front-end is in React, and Javascript in general. The bundler is just in vanilla Javascript. Then the database is Postgres, and we have two Redis stores. The cool thing about implementing the server in Elixir is that Elixir is a language that is super-concurrent. When you have a normal Elixir application running, you have like 10,000 processes running, and they communicate with each other. That makes an Elixir server very concurrent, and it can handle so many requests with so little resource at the same time. This allowed us -- for example, we have a functionality called CodeSandbox Live, where you have live collaboration, kind of like Google Docs. This allowed us to have our Elixir server handle everything with not that many resources.

We now have like 400 websocket connections at the same time, and this server is not really breaking a sweat... I think. At least from what I notice. \[laughs\] I fell in love with Elixir, it's a really cool language.

**Nick Nisi:** Very cool. That is a part of it I haven't looked at. The back-end is not open source, is that correct? It's just the front-end and the microservices.

**Ives van Hoorne:** Yeah, that's true.

**Nick Nisi:** Cool. So it seems like with frameworks specifically, it's written in React, but also it's using Flow in a lot of areas, and a little bit of TypeScript...

**Ives van Hoorne:** \[laughs\] Yeah, this is the evolution of our application. It started with Flow. Then I didn't have that much discipline, so some parts are not in Flow, just Javascript.

**Nick Nisi:** Okay.

**Ives van Hoorne:** We are now trying to make the move to TypeScript, we're slowly rewriting the codebase to TypeScript, especially for some reasons. In the coming months we want to grow a team that works on CodeSandbox, and using TypeScript - I think that helps with onboarding new people to get started with the codebase really quick. Another reason is that we since recently have VS Code running in CodeSandbox, and VS Code is in TypeScript... So we now have kind of an interoperability layer between VS Code and CodeSandbox's codebase... But it would be better if we would have CodeSandbox in TypeScript, VS Code in TypeScript, and then make them interoperable with full type definitions. That would be super-nice.

And generally, for every library that we have, we opted to go for TypeScript, because it's very easy to generate TypeScript definitions. Now we're in this big mix of different things, and it's counter-intuitive, so we wanna move everything to TypeScript.

**Nick Nisi:** Obviously, I'm a pretty big fan of TypeScript, and I think that it's a great solution for a project like this, and for really any Javascript project... But for this, I think that it's really awesome because -- there was Flow in there, so when I came in and started looking at the code, I was able to get a little bit of help with understanding what things were, and how things flowed through the application, and where to look for things. I think that having those types there really helped with that, and I think that adding TypeScript will probably only make that simpler... So that's awesome.

**Ives van Hoorne:** \[00:16:23.09\] Yeah, I'm a fan of TypeScript, how they handle big projects, and the speed of it... It's really cool.

**Nick Nisi:** Yeah, definitely. Awesome, I can't wait to help out with that, too. So you touched on a few features of CodeSandbox. You mentioned specifically things like live support, and VS Code... I wanted to talk a little bit about those and what features are available within CodeSandbox. Can you give us an idea of that?

**Ives van Hoorne:** Sure. So you can fork CodeSandbox, you can embed CodeSandbox in Medium or any place - we have a separate application of CodeSandbox that's for embeds.

**Nick Nisi:** Wow.

**Ives van Hoorne:** Yeah, it's really cool... It's because it's a lower application size, so that makes it easier. We also support importing from GitHub repositories, and the cool thing with this is that when the GitHub repository updates, we automatically update the sandbox, so they stay in sync.

**Nick Nisi:** That is THE single coolest feature, I think, of CodeSandbox - being able to keep it in sync with GitHub repositories, and just being able to say "Oh, I have some example code here. Push it to GitHub" and then "Oh, here is a CodeSandbox link to it." It's just so nice and easy.

**Ives van Hoorne:** Yeah. I really am a fan of this, because it's kind of like an immutable system where people cannot edit the sandbox directly, and this allows us to sync it with GitHub. A nice thing that we added half a year ago (or maybe a big longer) is that you can also commit back to GitHub. So if you fork the sandbox and make changes, you can click on Commit and then it will create a new commit in the GitHub repository, or you can create a pull request, or you can create a new branch and fork the GitHub repository, those kinds of things. Those are kind of the new things in GitHub support.

**Nick Nisi:** I did not even know this. I did not know that you could commit right back to GitHub from CodeSandbox.

**Ives van Hoorne:** Yeah, it's super-cool. \[laughter\] That is one of the nice, new things with CodeSandbox. Another thing that you can do is create a live sessions. For a sandbox that you own, you can create a live session and you can share this URL with others. Everyone with the URL can then join the sandbox and you can see each other editing live at the same time. There's also a special mode called Classroom mode. If you enable that mode, as the owner, you can say who can make edits and who cannot make edits. So you can use it in a workshop scenario, for example, or in any other kind of scenario where you just wanna show someone how something works, and they can follow along, fork along the way... And you can give them access to edit, as well.

Another feature that we have recently is Dashboard. You now have a very cool dashboard where you can see all your sandboxes, and you can organize them kind of in a Google Drive way, in different directories and folders, and they can be nested. A cool thing is that you can also share directories with teams. That's a new thing. So you can create a team, you can invite people to the team, and they will get a notification that they are invited to the team. And everyone that has the same directory in the team -- if someone opens a sandbox that's owned by the team, and someone else in the team opens the same sandbox, they automatically go in a live session together. So they can kind of work together in a live way.

**Nick Nisi:** Oh, wow.

**Ives van Hoorne:** Yeah, it's kind of like an unnoticed feature, I think.

**Nick Nisi:** \[00:19:58.15\] That's really cool. That live session feature - how does that work? I assume that's doing it over websockets, but it is using some kind of like CRDT (conflict-free replicated data type) or something along those lines?

**Ives van Hoorne:** Yeah, we're using operational transforms. At the start, when I wanted to develop this feature, I was considering using CRDTs, but CRDTs is kind of like a new way to do conflict resolution, and operational transforms were there I think already since the '80s... So there was more documentation on operational transforms, especially since the Google Drive team has written so much documentation on how they made operational transforms work for the Google Doc scenarios... So I decided to go with operational transforms, because that was the most documented. And that's how it currently works - it's kind of a peer-to-peer system, and you have one host that has all the state, and then when people make edits, they communicate with the hosts and maybe time-travel to resolve all conflicts.

**Break:** \[00:21:14.29\]

**Nick Nisi:** Some of the things that I wanted to talk about a little bit more going forward into the next section is maybe a little bit about some struggles... It seems like you're doing a lot with a lot of different things - a lot of different technologies and a lot of different paradigms, like operational transforms and all sorts of different languages and frameworks... So maybe talking about some of the challenges with that, or some of the harder parts of a project like this.

**Ives van Hoorne:** Yeah, I mostly started using these technologies because my way of learning is by doing, so I need to have a goal in mind when I want to learn a new technology... And it's not perfect; for example, the Elixir server -- is pretty hard to get contributions in Elixir, because you're building an application for a Javascript community, and naturally, the Javascript community will be most interested in contributing. If you have your server in Elixir, then there is this learning curve that they have to go through first before they can start contributing. For the same reason, it's pretty hard to find people interested in joining the team knowing of Elixir.

If I would start CodeSandbox again, maybe I wouldn't have written the whole API server in Elixir, even though I do love the language... But it's just a unique situation where you're building something for developers, and the developers in this case are not Elixir developers. That's one of the things.

I also have some other things that were kind of hard... For example, for CodeSandbox Live - I wanted to do it before we released it. The CodeSandbox Live that we have currently was my second try. The first try was I was researching, and like I said before, operational transforms - there's lots of documentation available, and it started to get a bit overwhelming, so I canceled my research for that feature at some point, and then I opted in for going for a more basic version.

\[00:24:10.28\] So the idea was that when someone is editing the file, that no one else can edit at the same time. But I started showing it to Kent C. Dodds, and he was so enthusiastic, and then he asked "Would it be possible to edit at the same time?" and I thought "Oh, that was something that I tried to evade here..." \[laughs\] So I went back to the drawing board, started thinking of how we could implement this still in an operational transform way, and then I found a way to do it... That's how we have CodeSandbox Live right now. But initially, there was so much information available -- I got an information overflow, so to say.

**Nick Nisi:** Yeah. Kent is definitely somebody on Twitter who I've seen be very enthusiastic about CodeSandbox, and specifically CodeSandbox Live. It's really cool seeing that. And even seeing him talk about using CodeSandbox as a primary editor in some cases, which is really cool.

So there's definitely some features in there that would allow you to do that where you could use CodeSandbox as a complete primary editor, that you would use just like VS Code or others, and in fact, you've made that even easier in the most recent versions with a new experimental feature, which is VS Code running in CodeSandbox. Do you wanna talk about that a little bit?

**Ives van Hoorne:** Yeah, yeah. This is the thing that I'm most excited about currently. I'm a big fan of VS Code, and the only reason that we were able to get VS Code working in CodeSandbox is because they have such a good infrastructure; their code is so organized in VS Code. They even separate the files based on if they need Node utilities or not.

**Nick Nisi:** Oh, wow.

**Ives van Hoorne:** Yeah. VS Code has such a nice -- yeah, their code is very clear. Initially, I tried it before getting VS Code running in the browser, and I did it from a bottom-up approach, I believe. I just tried to run the Javascript in the browser, and I got errors, and then I would mock the APIs of Electron and continue from there. I've spent some days trying this, and it didn't really work. More and more errors were \[unintelligible 00:26:29.14\] up, and it got more and more hacky.

The second time I went from a top-down approach, where I tried to implement some very simple services first. I wanted to get the Quick Open working in the browser, so I just started to import that part of VS Code, and I tried to get that working. It was interesting, because I found out that Quick Open uses a lot of different services in VS Code. So it took a while to get everything -- like, there were so many dependencies that Quick Open had... If you open Quick Open in VS Code, it has so much functionality; it can go through the outline view, it can run the whole Command Palette, it can have the Quick Open for files, it can also show a Help menu to help you if you don't know what to do with the Quick Open even; you can go to Symbols, and Workspace... \[unintelligible 00:27:23.29\] so much that you can do with Quick Open, so in hindsight it wasn't the best way to start... But I got more vendoring than before, and that was very promising, so I started to implement more and more VS Code. I slowly started to replace functionality of VS Code, like the file service, with a service that's connected to CodeSandbox... So the file service would normally use fs to get all the files, and in the CodeSandbox version it would just use the CodeSandbox state to return the files.

\[00:27:59.21\] Slowly, more and more started working, and I got the editor working, and the really cool thing right now is we have implemented so many different functionalities with the CodeSandbox side for VS Code that, for example, I tried last week to get the Find All Files working, the search bar in CodeSandbox, the Search All Files, and it worked on the first try, because it was already using the services and the functionalities that I had kind of reimplemented with the VS Code side. So it's really cool to see how this opens up -- it's like a game where you unlock skills, and then you get new functionality for those skills. It's really cool to see that it now works so well.

I started doing this with the idea that I don't wanna change existing code, and I don't wanna delete code either... So almost everything is new code added to VS Code, which makes merging with their master really easy. I don't get many merge conflicts when I merge with their master, and the last time that I merged with their master, it was a month later after the initial implementation, and it took about an hour to implement everything. So the cool thing is that whenever you see a VS Code changelog, I hope that it wouldn't take much time to implement it in CodeSandbox, and we can just kind of copy/paste the VS Code changelog and make it a CodeSandbox changelog.

**Nick Nisi:** Wow...

**Ives van Hoorne:** Yeah, I'm really excited about this functionality. It's really nice.

**Nick Nisi:** That's great. So you'll be able to pretty quickly stay on top of new features coming down the pipe in VS Code.

**Ives van Hoorne:** Yeah.

**Nick Nisi:** That's really cool. I love that you mentioned how you got started with this idea is "I'll just try and run it in the browser and see what breaks, and just go from there." That's just such an uneasy response, but when you think about -- like, if I were thinking about doing this, I would stress about that so much before I actually got into it, because... I don't know, just being scared of that initial 1,000 errors that I would probably see, or something like that... Just trying to run something where it wasn't meant to be run initially... But that's really cool.

So just for my own sanity, to understand this better - I know that before this, CodeSandbox was using... It actually had two editor implementations, or it still has them... It has CodeMirror and Monaco. And Monaco is also -- this is where I was confused a little bit initially, because Monaco is kind of the editor within VS Code, but when you're talking about adding more VS Code support, it is for things that are beyond the editor... Is that a correct way of saying that?

**Ives van Hoorne:** Yeah, that's true. Monaco is like the core editor of VS Code, and then they started reimplementing some functionalities, kind of like I did, to make it work in the browser. They also mocked some functionality... But it's the core editor, and that already has helped me with thinking about how to approach this.

With CodeSandbox we now have something called the workbench of VS Code implemented as well. The workbench is kind of the UI around the core editor. For example, the Settings view, or the Quick Open, or Breadcrumbs, User Snippets, Key Bindings, \[unintelligible 00:31:23.22\] all those things now work directly in the browser, and that is kind of the new functionality that you get with this. And the nice thing about this is that we were able to add this functionality on top of our existing Monaco editor. So we now load the Monaco editor, but when you have VS Code enabled, we also send a separate package to the browser, that enables this workbench functionality, and this package is like 320 kb minified in gzip. I think it's really cool that this functionality fits into this small size; well, it's a pretty big size if you think about it, but the functionality that you get with it - I think that's worth it.

**Nick Nisi:** \[00:32:08.09\] Oh yeah, definitely. Adam in the chat is saying "Interesting to see if there's any overlap with Microsoft in the future." Have you had anyone from Microsoft talk about this, or see this and give feedback?

**Ives van Hoorne:** Yeah, so when I got VS Code to work in the browser I sent out a tweet and a video, and Kenneth of the VS Code team contacted me and we just did a meeting to talk about how it works. They said that if I have any questions, I can go to them and ask them. I sometimes send Kenneth a message to show what we have at this point, and they're very supportive; that's really cool. They are as enthusiastic as I am with getting this working in the browser. So yeah, I did talk a bit with them.

**Nick Nisi:** That's really cool, and really encouraging to hear. There's a lot of features in CodeSandbox with this, and a lot of features that we haven't even touched on yet. When I started looking at this, one of the big things was being able to take the Dojo code and run it in the browser without having to do any compilation, and you make that really easy because the environment can do transpilation of TypeScript really easy in the browser and then deliver that... But you've simplified that even more, or expanded CodeSandbox's usability with pretty much anything now, it seems, with the introduction of containers.

Now you can actually run code that has build steps, and deliver that, and it's all still within the same friendly CodeSandbox environment. Do you wanna talk about that a little bit?

**Ives van Hoorne:** Yeah, because the initial version of CodeSandbox - all the code was executed in the browser. And this was really nice, because it allowed us to bootstrap CodeSandbox kind of with low server costs; for the first year we did everything on a $30/month server, because all the code was executed by the users. We were sort of -- I don't know if you can call it Bitcoin mining, but we let the user execute the code, and we don't do anything the code; we were just a data server. This has many advantages. You can run code offline, it's very responsive, and we can do some custom functionality... But it's also quite hacky. For example, for our Create React App template we don't use the real Create React App to run the code; we kind of simulate the Webpack configuration in our own bundler to run the code. This can cause some confusion sometimes.

It also doesn't support everything, because for example if a framework needs to use the shell, or if they need to use, for example, a Node utility, then that's not possible. So we were working on something called CodeSandbox Containers, where for some templates we execute the code on the server, in a Docker container, and we kind of then send the contents of what is generated by the \[unintelligible 00:35:30.27\] back to CodeSandbox. That's like a two-way communication.

This functionality, the whole infrastructure of this is entirely built by Bogdan. That's really cool, he's been a huge help for CodeSandbox. He also did the latest infrastructure of CodeSandbox with Kubernetes. We've released it very recently, I think a month ago, and we already see so many interesting things built on CodeSandbox, like Reason sandboxes, also React Native has been built on CodeSandbox now... We also see lots of Nuxt, Gatsby templates... We can now run everything that works locally.

\[00:36:11.12\] Another cool thing is that the computation is not done in the browser anymore for those templates. When you have not a very beefy computer, then that doesn't really matter, because the Yarn install, the transpilation, the bundling all happens on an external server, so that makes it a bit easier, as well.

**Nick Nisi:** Very cool. So just to summarize that, we can run code in the browser, with all of these different templates, we can run code in containers and use the build steps if they have them for certain templates, and then also with this you can deploy straight to Zeit's Now service... Is that correct?

**Ives van Hoorne:** Yeah, yeah. We also have a deploy functionality where you can deploy the production version of your code to Zeit Now.

**Nick Nisi:** That's just crazy. So you can do all of this in the browser, and push to GitHub, commit to GitHub or send a pull request... It really is a full development environment in the browser, which is really awesome. And with that - is that kind of the motivation that you have with CodeSandbox and where it's going? Do you want it to be a competitor with more traditional offline editors like VS Code or Vim or something that I would run on my machine?

**Ives van Hoorne:** Yeah, that's an interesting question, because CodeSandbox is kind of with both legs in a separate world, so to say. CodeSandbox is still mostly used for code prototyping, so whenever someone has a problem, or if someone wants to show something, then they share it by creating a sandbox on CodeSandbox, and sharing it with other people. But there are also people who create their whole personal website, or any kind of new project CodeSandbox. I think both use cases are very valid.

When we started CodeSandbox, we set out some goals, and these fit the goals. The first goal was that we wanted to make it easier to get started with web development, so no local tool installation before you can get started. The second one is that we should encourage discoverability and shareability between different people. The third one is that we wanted to have a local development experience, like as if you are in your local editor, and that you can use it as your local editor.

There are some touching grounds between the two worlds. For example, when someone gets started with web development, they probably want to start building something like a personal website, and we wanna not make people leave the browser; we wanna implement this functionality so that they don't have to leave the browser to build this, because then they do have to install the tooling. We're getting there more and more with the VS Code implementation, and also with the containerization. We still have a lot to do to make it viable for full production applications. For example, I don't think CodeSandbox would be able to run in CodeSandbox right now, but that's certainly a goal that we wanna achieve. \[laughter\]

**Nick Nisi:** Awesome.

**Ives van Hoorne:** Yeah, that would be super-cool. At the same time, we also wanna make it easier for the community to share examples. I think that we've been neglecting this for a while. We should definitely make it easier for people to share sandboxes within CodeSandbox. We should also make it easier for people to discover new CodeSandboxes, those kinds of things... That's also one of the points that we're working on.

So we're working really on two points right now, and that's make it more viable for full-blown web application development, and also make it easier to share your sandboxes so we can kind of create a community behind CodeSandbox.

**Nick Nisi:** \[00:40:02.05\] Very cool. In the past I've taught some workshops on Javascript development, and specific frameworks, or testing, things like that, and as our toolchains have gotten more complex, teaching has become a lot harder... And that has been kind of a complaint in the web world, because Javascript was a perfect beginner language because it was just so easy to have a browser and notepad, or just a simple editor, and be able to write and run code. And while you still can do that in a lot of ways, it's getting harder and harder, because we have things that we need to transpile if we wanna use new features, or if we wanna use JSX, or TypeScript, or introducing all of these more complex build chains...

And the workshops that I was teaching - they got more complex too, where we'd have to spend more time getting people's environments set up for the workshop, and making sure that everybody's on the same page with that, and that can take away from the learning of everyone, because we're stuck fixing small bugs in someone's environment that's running Linux or Windows, or something that we didn't test enough in... But this is really a nice alternative environment for that, where you can basically code up and deliver an environment that can run exactly what you need to teach, but also you can share and you can work on it together... And there's just so many possibilities with teaching when it comes to this. That's really cool, and it feels like it's filling in a gap that we've created by making our toolchains more complex.

**Ives van Hoorne:** It's kind of like bringing \[unintelligible 00:41:41.20\] back.

**Break:** \[00:41:52.06\]

**Nick Nisi:** There's a lot of functionality within CodeSandbox already, and things that are growing, and you shared the three goals of where you'd like to take CodeSandbox. Along those lines, is there anything big that you're working on right now that you'd like to share?

**Ives van Hoorne:** \[00:44:00.28\] We've just released two big features, and at this point I'm kind of stabilizing those features. We have VS Code, which is in a beta phase, and also Containers, which is not stable yet. So we're trying to stabilize them right now, make them the defaults... Not for Containers, by the way; we just wanna stabilize Containers. And I'm not working that much on new functionality right now; mostly small things of UX problems that we've had before.

I did an internship at Facebook, and I finished that internship two months ago, I think, and at that point I had to make a decision if I wanna go full-time with CodeSandbox or if I wanna go work at Facebook, and I made the decision to go full-time on CodeSandbox... So we're going to try to make this a viable full-time business. So we're mostly doing startup things now, like meetings, building a pitch stack, building pitches as well... It's a very different world. I think I enjoy development a bit more, but it's still interesting to experience this. That's what I'm currently mostly obsessed with.

**Nick Nisi:** Very cool. That's really interesting, and really exciting, that you're going to be growing this and continuing it. Do you always see CodeSandbox as being an open source project?

**Ives van Hoorne:** Yeah. Yeah, we'll stay true to the open source side of things.

**Nick Nisi:** Very cool. You said that you started this while you were attending university, and CodeSandbox has exploded in popularity, it's got over 5,000 stars on GitHub for the client project... How has that been, growing and maintaining an open source project, and growing and maintaining a community around that, while also attending university and interning at Facebook, and doing all of these other things?

**Ives van Hoorne:** \[laughs\] Yeah, it's quite challenging. In April we've released CodeSandbox, and yeah, it's so hard to combine with studies. I did try to continue studies with CodeSandbox at the same time, but as CodeSandbox got more popular, my grades declined, so to say. At some point, since September 2017, so when the new school year started - at that point I only passed a few tests, and I decided to start to focus full-time on CodeSandbox last February... Because at that point I was trying to combine both, and it made both not very successful, so to say. I didn't focus on one thing, which made the two other things worse. So I decided to work full-time on CodeSandbox in February, and then the internship at Facebook started, and that was also a full-time thing... So I did CodeSandbox mostly in the evenings; I had a pretty rigid schedule, but it was still very nice to work at Facebook, because you were in the same world, so there was not that much context switching. I was working on the Javascript Foundation team, I was working on Metro, the Javascript bundler, and it had so many parallels with CodeSandbox; that was pretty cool.

All the VS Code functionality was also built during my time at Facebook. It's a really inspirational environment, and you meet so many interesting people, so I'm really happy that I did that internship there. But my main takeaway from it is that if you -- I should have worked full-time on CodeSandbox earlier; I was trying to tell myself that I could combine them, but I think I kind of knew that it was pretty impossible to combine them, and I still tried to believe it, and I kept on doing that for half a year. Only after half a year I decided, "Okay, now I need to pause my study for a bit and work full-time on CodeSandbox, because working on both is not getting me anywhere."

**Nick Nisi:** \[00:48:22.29\] Yeah, I can't even imagine the strain of that. It's understandable, for sure, and it definitely allows you to focus more on features, and now growing CodeSandbox into a full business is really cool.

How has it been maintaining an open source community? Is this kind of the first larger community that you have fostered and maintained

**Ives van Hoorne:** Yeah, this is really my first open source project, I'd say. I can be pretty bad at it, because I am someone who likes to focus on one thing and then let everything around it go. That's also why my study and CodeSandbox didn't work well together. For example, when I was working on CodeSandbox Live, I was just working full-time on this feature and didn't want any distractions, so I didn't check my GitHub for four or five days, or something. That's not a good habit to have to build a community. I started to get better at it, keep more up to date with the issues; it still takes a lot of time... But it also bears its fruits, because we've had so many different contributions in open source right now, and CodeSandbox has benefitted so much from the contributions, and that's really cool.

I'm very happy that we decided to go open source with this, because this open source project -- there is now a community behind it, there are people who contribute often, we have core contributors, and this definitely reduces some strain to development.

**Nick Nisi:** Very cool. From my experience, contributing to the project has been very pleasant. You've always been very quick and cheerful with things that we want to do, like bring Dojo to it, or other fixes... So that's definitely very much appreciated.

This was the first project that I had contributed to that uses -- and I can't remember the name of it, but it basically allows you to add your name and your picture from GitHub to the Contributors list, which I thought was really cool.

**Ives van Hoorne:** Yeah, that's such a cool tool. It's built by Kent C. Dodds. The nice thing about it is that you can also add yourself as a contributor when you haven't contributed code. For example, if you have contributed to the docs, we can still put you on the readme file; or if you have contributed with an idea, for example... It's a way to also acknowledge people who don't write code for you, but help you in another way, and I think that's a really good idea.

**Nick Nisi:** Yeah, and that also can be very motivating for someone... Not necessarily that they would contribute just to get their picture on there, but to be able to say "Oh, I'm on the CodeSandbox client readme. That's really cool." It can be a good motivator, I suppose. If things like Hacktoberfest work, that can definitely work as well... Which is really cool, because it's all positive.

**Ives van Hoorne:** Yeah, and we also highlighted on CodeSandbox itself - when you are a contributor, we show a small icon next to your username, where it says "This is a contributor to CodeSandbox."

**Nick Nisi:** I noticed I have a little -- I think it's a hard hat icon...

**Ives van Hoorne:** Yup.

**Nick Nisi:** That's really cool. But there are other ways to support CodeSandbox, and there's this idea of becoming a patron, where you actually donate or pay monthly to CodeSandbox and you get a little bit more features and functionality... Things like private sandboxes, and other things. What's the conversion been?

**Ives van Hoorne:** \[00:52:11.08\] I don't think we have a very high conversion. We have many people who go to the website and create an account, but not that many who become patrons. It's funny, because we can see a direct correlation between features that we enable for patrons and how many patrons we get. For example, at the start, when CodeSandbox just got CodeSandbox Live, we only enabled it for patrons, because we wanted to handle the load... And suddenly we saw a four or five times increase in patrons a day, and that was so interesting to see...

**Nick Nisi:** Oh, wow.

**Ives van Hoorne:** Yeah, and then we removed the feature for patrons -- well, we made it available for everyone, and suddenly our patrons/day went down, too. That's really interesting to see... But I don't wanna build features for a small percentage of our users, so that's why I'm always leaning towards building it for everyone. The nice thing is patrons generate us enough money to pay for our server costs, so we don't have really a burn rate. That allows us to survive... So I'm super-happy with this patron feature. Now most people who pay for patron - they want private sandboxes, or they like the project so much that they want to support it... And knowing that, that's really nice.

**Nick Nisi:** Yeah. That's such a great way to give back to open source, so it's definitely appreciated. There's so many features that a project like CodeSandbox has that it definitely makes sense to give back... Either in code, or filing bugs, or becoming a patron. So that's really cool.

What motivates you with CodeSandbox? What would you like to see added to it? What do you wish you could change?

**Ives van Hoorne:** I am most motivated by lots of people using it. I really like to see how many people use it. I also like to see everything that has been created on CodeSandbox. Today for CodeSandbox we did our first thing on our Twitter account, where we kind of send out the five most popular sandboxes of the past week... And I think that we should do this far more often. We should make it easy for people to explore what has been created, because we now have this goldmine of information.

Recently, we hit the one million sandboxes milestone. We should use this information to inspire people, to help them find new popular sandboxes, or maybe share sandboxes within CodeSandbox. The thing that I'm most excited about in the future is enabling people to collaborate, make it easier for people to collaborate, kind of connect people to work on different sandboxes together, and also to help them explore the new sandboxes. We should be a valuable tool for the ecosystem to find inspiration, or to find new ideas, and we're currently lacking on it. We have a good editor experience, but we don't have good exploration. That's something that I'm super-excited about to get into the short-term.

In the long-term, we should have an editor that is viable for creating any kind of project, and we should have it connected to containers, and from then on, every computer that you will see is your development environment... Because when you just get some random computer, open CodeSandbox, you can continue working on your project. Or you get this other random computer, even if it's like a $100 Chromebook and it doesn't have any specs, we use cloud computing, the CodeSandbox containers, to execute the code... So it doesn't need resources. Imagine that you can just see every device that you have as your development device. That is such a powerful idea, and in the long-term I wanna get this.

**Nick Nisi:** \[00:56:15.28\] That's really cool, and that's a good thing to mention - it can run anywhere; I've used it on an iPad before, and it's a good environment on there. I have problems with the keyboard on the iPad, but those aren't your problems... So it's just really cool. With that, there's really no limit to where you can run it. You can run on it on really cheap laptops, or very expensive equipment, and it works all the same... So that's really cool.

With that kind of expansion that you were talking about, did you mean expansion into other languages as well, besides just being a front-end development tool?

**Ives van Hoorne:** Yeah, we kind of have the same mantra - we wanna make the Javascript experience super-good, and once we get that super-good, we wanna explore adding more languages.

**Nick Nisi:** Very cool. There's definitely other tools like this out there, and you recently had a blog post about this, and how comparing CodeSandbox to those other tools is kind of demotivating, and I totally agree with that... Instead, you focused on some of the big features that CodeSandbox has, and talked about that. That's a really cool, positive way of talking about that and distinguishing CodeSandbox, I think... So that's really cool.

Also, one other thing that I learned - I did not realize that CodeSandbox had a CLI tool that you could import projects with. I think tools like that, and knowing that, and being able to run any project is just going to be so big for CodeSandbox going forward, because you'll be able to share anything. And the tight integration that you have with GitHub, and being able to really take potentially any repo in the future and being able to run it in this environment, and edit, and then commit back, all within CodeSandbox - I think that's going to be such a huge feature of it going forward; just the interoperability and ease of being able to go where the code is, which is GitHub in many cases, and then get it running, which can be deploying it right from within the tool.

**Ives van Hoorne:** Yeah, I agree. The accessibility is really important here, that it's easy to get started with your existing code. That's something I'm super-excited about as well.

**Nick Nisi:** Is there anything else that you'd like to chat with us about CodeSandbox, that we haven't covered?

**Ives van Hoorne:** There is one feature that came to mind, which I'm super-enthusiastic about, but nobody really notices it... Which is a good thing, but I still wanna talk about it someday, so maybe I can talk about it now...?

**Nick Nisi:** Sure.

**Ives van Hoorne:** Okay. So for most projects we execute the code in the browser, and sometimes people experience this as slow. Imagine that you have a project with Webpack - you expect it to boot up only after like 40 seconds, for example, or 30 seconds, and that's even fast. But if you go to a website, you suddenly expect the project to show in 3 seconds. You don't have the 30-40 seconds to let this transpile... And we were often pretty fast with transpiling the code, because we use web workers to transpile everything, so we try to parallelize everything, but sometimes it can be a bit slow.

\[00:59:51.08\] So we now have -- whenever someone loads a sandbox project, we cache the bundler result (the transpiled files, the dependency graph etc.), we kind of put it in the browser, in IndexedDB, and we also send it to our API. So a codesandbox has one Redis cache with all different compilations results of sandboxes, like transpilation results etc., and we have a very cool way of invalidating this cache... But for example, when someone loads a sandbox and then sends the compilation result to the server, then when the next person loads the sandbox, we just send this transpilation result back to the user, and they don't have to transpile anything. So we kind of have a cache for all the sandbox projects, for all the compilation results hosted on our server.

I think that's a super-cool idea, that you can cache your bundler results. I know that Metro is also exploring these ideas a lot and they're very good at it, but in this case, we're trying to cache all the projects that have been created on CodeSandbox, and make it easier for people -- if they open a sandbox, that they don't have to do any computing; we pre-computed everything that takes a lot of resources.

**Nick Nisi:** Very cool. Where can people reach you at, Ives?

**Ives van Hoorne:** I'm on Twitter, @CompuIves. I have a new e-mail since this week. It's ives@codesandbox.io. \[laughs\] So if people wanna reach me that way, that works as well.

**Nick Nisi:** Cool, thank you so much.

**Ives van Hoorne:** Yes, thank you. You're a very good host.
