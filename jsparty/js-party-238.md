**Amal Hussein:** Al hello, party people. Well, you're like party nerds. It's Amal Hussein here today. I haven't been here in a hot minute; I have a lot going on... All as well now, and very happy to be back. I was a little worried, because we were dancing to the intro music, and Fred, our guest -- I ruined the surprise... But Fred started to pixelate, and I was "Oh, no, the dancing is too hot. You're burning up your wire..."

**Fred K. Schott:** I'm glad that was captured forever, for everyone to watch. That's great to know Definitely danced knowing that certain.

**Amal Hussein:** Yeah. So without further ado, it's just me here today, and we have a really special guest, Fred Schott with us. Fred will tell you all about himself in just a second. We're here to talk about Astro with Fred, which is really this bleeding edge, cutting edge, cutting all the JavaScript edges, Web UI framework that we're gonna learn tons about today. But before we dig into Astro, Fred, why don't you tell us a little bit about yourself? And welcome.

**Fred K. Schott:** Yeah, awesome. I'm really excited to be on. It's been like years, and a long time, and this is just really fun to be back on... So thank you for having me.

**Amal Hussein:** Yeah, thank you for being here.

**Fred K. Schott:** Yeah. My background is I've been working in open source for a long time now, mostly in JavaScript tooling, so a couple of projects that you might know me from - Snowpack, Skypack... Before that I worked on the Polymer team at Google, a bunch of other just small little open source repos... And most recently working on a project called Astro, which we're gonna get into here, because we -- I've gotta get this right with the time vortex we're in. It has just launched by the time you're listening to this. So I'm really excited to share it, because it's really new and exciting, and it's an awesome tool that we've been working really hard on.

**Amal Hussein:** \[04:06\] Yeah, exactly. And you were underselling yourself, because Fred, I feel like you're like -- I don't know, if there ever was JavaScript Illuminati, I feel like you would definitely be one of those members... Because, I really do think of you as somebody who's always pushed the community forward, and you've never really been afraid of putting yourself out there, and making bold bets, and also just really flipping the table on the status quo. I think you have even -- you did mention Pika, which was this package manager that really you were just "Yeah, I don't really care if npm exists. I'm going to just go head-to-head with npm and just try to create a mechanism to surface packages that have ECMAScript, ECMA modules, so how do I do this?"

I feel like you've always really been bold, and I feel like you've always tried to really push the community forward, so thank you for that.

**Fred K. Schott:** Oh, my God, thank you. That's very kind. And I don't know if it's deserved, but...

**Amal Hussein:** But it's true.

**Fred K. Schott:** Yeah, the last episode I was on actually Jerod was just telling me it was me pitching ES Modules, which now three years later, it's "Oh, yeah, that's \[unintelligible 00:05:09.00\] Vite is like the thing people are using now. That's all happened, so...

**Amal Hussein:** Right. Yeah.

**Fred K. Schott:** Well, thank you.

**Amal Hussein:** Yeah. So lesson to y'all who are listening is sometimes these arguments just take a while to settle, and like three years later, you can look back at old arguments on Twitter and say, "Okay, yeah, this person was clearly on the right side of this argument." Sometimes it just takes a while for the community to catch up.

So anyway, Astros just came out with this 1.0, but it's really not new. I mean, it's new, yes, but not really. I feel I've been hearing about Astro for a while, I've been seeing you all push stuff, and it's been this slow reveal... So can you give us some timelines and give us some insights into how long have you been working on this project and what motivated it?

**Fred K. Schott:** Yeah, it's like every overnight success, there's years in the making. This really traces back to even that Pika story, but Astro itself I think is about -- if you go back to the first commit, like a year and a half old, so we've really been working on this for a while, trying to get it right before we stamp it with that v1.

The best way to explain it is essentially a content-focused or content-driven web framework... So if you're thinking of how you want to build your website, and you're looking at like Next.js, SvelteKit, or Nuxt, or maybe you're looking at like a static JAMstack builder, like Eleventy or Hugo, we're trying to be the best choice for anyone who's building a content site.

So marketing sites, portfolios, blogs, personal sites - if the focus of what you're building is content, getting content to someone who's trying to read or consume that content, that's what we're trying to be the best at. And we have a lot of really cool features that are designed explicitly for that use case, where we see other frameworks optimizing more for apps and dashboards and really complex use cases, which are all well and good, but we see a real opportunity here to build a framework for people who build content sites... And so that's what Astro is.

**Amal Hussein:** Yeah, that makes a ton of sense, Fred. I feel like for me that's like a really refreshing motivator and perspective, because to some degree, even things like AMP were really created to focus on - well, we have all these static sites that need to get to users faster. What do we do? Oh, I know, let's just limit all the JavaScript, right? And also come up with our own cryptic set of rules... And oh, I don't know, use private servers to prioritize caching, and blah, blah, blah... And maybe a few years down the line, make a lot of publishers and whoever angry, right? So for better or worse...

**Fred K. Schott:** Yeah, we're gonna make by making it only what we let you do in this little sandbox, and therefore the web is fast now, and good. And yeah, that's pretty antithetical to Yeah, a lot of things about the web.

**Amal Hussein:** \[07:47\] Right. But again, for me, I appreciate the experiment, I appreciate the innovation and I appreciate the intent, right? So now how do we further evolve from that, and it feels like Astro is taking a step in that direction.

I think for me this focus on content, and websites that are -- that's your niche. I'd say okay, great job picking a niche, because that's really the majority of the internet, right?

**Fred K. Schott:** Yeah. As far as niches go, you can't really get much bigger... I think the last number I saw is like around 60% of the internet, or the top 500 sites, are that type of content-focused site... So yeah, as far as niches go, it's a big one.

**Amal Hussein:** Yeah. I totally agree. And where would you say places like Reddit fall into that spectrum? Because I feel like Reddit is so heavy on content... It's like read, read, read for the most part, and then there's some interactivity there as well from users... But that's like user-generated content, I feel like...

**Fred K. Schott:** Yeah.

**Amal Hussein:** So where does that fall in that spectrum for you?

**Fred K. Schott:** I think you used the right word, which is spectrum. It's definitely different sites, and even different pages within a site can take different forms. So yeah, Reddit, the creation of content is much more interactive than just reading the content. And then once you get into the comments, there's a lot of little interactive bits.

So we like that content focus, because it really is our Northstar. But there's really cool features that back that up. So the big one is thinking about how you architect your site. The biggest difference that Astro has from others is that we really like this idea of generating your page. It's all static HTML, and then you're hydrating the interactive bits around the page.

So for some things - if everything is connected data, like you post something here, it updates the dashboard, this doesn't work for every use case, but for content, when the majority of the site is actually the static thing that you're consuming, it really works well to color in almost within the lines, like a paint by numbers. "Well, here's the interactive comment here. Here's the button here. Here's the navigation there." The benefit of that is that you're actually only hydrating individual parts of the site, and the performance benefit there is that you're not sending down this entire JavaCcript app to users, you're sending them these little snippets.

So that's the biggest difference - Reddit works really well. Hacker News is kind of this like --

**Amal Hussein:** Clone...

**Fred K. Schott:** Demo that people like to benchmark Astro against. Yeah. The Next.js Hacker News versus the SvelteKit Hacker News, versus the Astro. And the interesting thing about Astro is unlike all those other ones, we don't have to send a JavaScript app to render that page and make it interactive. We're just making sure the comment button is interactive, the navigation is interactive. It's much more selective and therefore much more fast. We're just sending way less JavaScript down to your users at the end of the day.

**Amal Hussein:** Yeah. Again, that's another really refreshing take, and I think another way that I think Astro and the folks involved with the project as a whole have really helped push the community's thinking on this... And we'll get into some really cool stuff in a second, like islands... And no, not islands in the sun, which is what I always think of; I'm like "Islands in the--" No, different kinds of islands. But I think what's interesting for me is that thinking about architecture that way means that you're also always planning for that fast-by-default experience, and you're being very intentional about what you want to be expensive. Versus this opposite world that we've been living in for however many years, where by default everything is chunky and heavy, and we ship it, and then we start subtracting from there after the fact. It's kind of painful; no wonder teams have so much difficulty making their apps performance. We're speaking English when we need to be speaking Italian, or something like that. It's like, what are we even doing? So are we using the right tools? Are we using the right methodology? Are we using the right architecture? I would say, "No, no, no."

So I think -- yeah, I mean, I've said this before on the show, I'll say it again... It might make some people upset, but for me in 2022 - I love tools like React, but they come with their own set of problems and whatnot... But generally, if I wasn't designing for a multi-platform, use case where I needed this to run in a native application or in a VR headset, or whatever... Like, if I just needed this to be on the web, I would not be using a tool like React to create a simple website. I just wouldn't; it's just too chunky, there's too much overhead... It's got too many pieces of luggage, you know?

**Fred K. Schott:** \[12:04\] So I'll take the other side of that, and I -- you'll need to stop me, because I will talk about... I find the history of like how we got to where we are fascinating. But I actually don't -- and I think I'm in the minority of like the web perf diehards here, but I don't know if I find React the problem as much as I find the "Everything is React" kind of thinking. And then applies - like, everything is Svelte, everything is Vue, where if you imagine, even like a simple Hello World Next.js site... And not the index.js; this is like the model that they use that everyone else is using. You're not just sending down the -- a Hello World, there's nothing really interactive, but you're sending down JavaScript to power it. And this history goes all the way back to like Create React App... And JAMstack really kind of pushed this, because there were a lot of benefits to it. But the thinking that your whole site is a JavaScript app, it's rendering on the client, you're only thinking in one codebase, you have this really nice separation of concerns, your backends and API, your UI is all one codebase... Like, there's really nice organizational things that people love.

**Amal Hussein:** From the developers perspective, right? Isn't that DX though? That's like the DX is --

**Fred K. Schott:** Yeah, the DX is incredible. It's unbeatable. Versus like PHP - I worked on sites where you're rendering HTML with PHP, and then you're also rendering it again with React. It's like, you're trying to keep two codebases... I've seen some bad stuff.

But it's that idea of "The DX was so good, but then we just took that path and ten years later we've found ourselves where we keep adding complexity and adding more code to solve a problem that is inherently too much code."

That's our take on it, that it's not that React's \[unintelligible 00:13:29.10\] it's that we've way over-indexed on how much is powered by React or Vue or Svelte. At the end of the day, the more code you're asking the user to run, you're just fighting physics at that point; that's code that has to run on your user's device, and that's going to slow it down.

**Amal Hussein:** Yeah, that makes a ton of sense. And again, it just goes back to like the intentionality of what we're doing and how often we're all working under such constraints and such cow paths that also the community has paved... There's best practices, there's tools like CRA (Create React App) that make things so easy, and just one button... Right? If we're not careful about the complexities that we're abstracting... If we're abstracting away things like that are, okay, generally best practices and good decisions - great. But the risk of mass adoption and abstracting away some of those things - you're making bad decisions that you didn't even make... The tool made it for you, right?

**Fred K. Schott:** Yeah. The way we phrase it is like Create React App and a lot of others, they'll -- if you ever look in your node modules when you install something with Create React App, there's I think like 2,000 packages. 2,000 dependencies all sitting on top of each other. And we call that like -- it's complexity, but kind of wrapped and hidden from you. But then when you want to go and do something new, it's either the tool says, "No, you can't do that. There's too much here, you're gonna mess it up" or like "Okay, but be careful, if anything breaks, good luck finding which one of the 2,000 dependencies is causing that problem."

So it's like we've hidden complexity for so long... What I love about this kind of new wave of tools like Astro is was what if we just actually removed a lot of that complexity? What if we dropped down what you have to think about when you build and instead gave you something that starts from first principles, web Standards, HTML? I think that's a much better place than just continuing to wrap that complexity in more and more layers of abstraction.

**Amal Hussein:** Yeah, that makes a ton of sense. And like put the onus on the developer to intentionally make the decisions about where they want to take the app in terms of like "Which sections am I bulking up?" and being very intentional about those decisions also. Everyone, when they have the time to think about it, typically comes to the right conclusions. But it's just actually like "Have we even thought about what we're doing, really?" Most of us are just on autopilot, and in all fairness to Create React App, I don't think anybody could have predicted the way it was going to take off. Clearly, there was a need in the community for having more boilerplate templates that could serve and manage away all of the JavaScript tooling complexity, right? Because there is some fatigue there from the community, and that's something that we can't not talk about, because that is a real thing, a real problem.

\[16:12\] And React was also the first application - we've talked about this on the show before - that went to npm Land and said, "Okay, JavaScript frontend developers, we're gonna go hijack the Node community now, because we need Node tooling to build JavaScript apps now." That was a shift that happened, and then we ended up with a bunch of Node tools that needed to build your frontend app, right?

**Fred K. Schott:** Right. And then Node changed, and all the tools after...

**Amal Hussein:** Right.

**Fred K. Schott:** We really like this term, all-in-one, and I think it's a larger trend. I think Deno kind of falls into this... \[unintelligible 00:16:40.03\] if you've seen that... I think people are starting to feel more comfortable presenting something as a full, complete platform, and not a collection of 2,000 different packages, all hopefully working together.

**Amal Hussein:** Because it's hard to maintain.

**Fred K. Schott:** Yeah. So we like this idea of Astro being a really stable runtime almost, or platform, or foundation, whatever you want to call it, that is much more like "Build on top of this and we've got you."

**Break:** \[17:03\]

**Amal Hussein:** Fred, that was really insightful and super-interesting, kind digging into some of the context and history behind some of the motivations of Astro... Y'all make some pretty bold promises here; we'll list through some of those. So Astro is content-focused, server-first, fast by default, easy to use, and fully featured, but flexible, right? And I think that's interesting. That's a tough -- fully-featured, but flexible. I mean, that's -- how do you make it easy for newbies to get started and make good decisions without having to really think about it? And then how do you not hold back power users? That's always the struggle with API design.

So let's get into some of this... So we've talked a lot about the content-focused piece... Can we talk about the server-first piece? Because there's quite a bit here with just being server-first. For me, I kind of read that y'all are promising that this renders in the server. So you don't have to ever worry about any state management, or whatever else, unless you want to. But I'm just curious, what does that even mean? Can you explain that to folks?

**Fred K. Schott:** Yeah, no, definitely. So it really ties back to what we were just talking about, because what we see is we're flipping the model a bit, where if the last ten years have been all about "Let's build a big JavaScript app, that runs on the client and the server", we're saying, "Let's go back to when a lot of the work happened on the server", because there's really nice performance implications there.

\[19:50\] So this is a kind of message that a lot of other frameworks are starting to try to tell, but we have this really unique opportunity to just tell it from a fully fundamental "What we do best is generally HTML, and then make it interactive", versus what we do best being like a JavaScript application.

So the way that we see it is that we are very server-first. The templating language that comes built into Astro is essentially sugar on top of creating HTML templates. It's a nice way to work with HTML. And then we pair that with a way to bring different components in only when you need them. So if you like React, or you like Vue, or Svelte, you can actually use those components to build your UI. But again, by default, we're just going to render them out server-rendered HTML, and zero JavaScript being sent down the wire, unless you opt into it. You say "No, this component should be interactive. Give me the JavaScript. I'll pay the cost for the user's performance, but I'll get this really nice, interactive component", versus every other framework is default. "I'll send it all. They might need all it, so just send it all."

**Amal Hussein:** I see.

**Fred K. Schott:** We've flipped that model.

**Amal Hussein:** That makes sense. So how do you all handle this uncanny valley that we get with server-side rendering where like "Well, it looks great, because oh, this came fast, and it looks interactable", then I try to click it right away and like "Oh, nothing's happening. Oh, JavaScript's still parsing and loading" right? Some of that can be managed by reducing the amount of JavaScript that you send, but you're still just gaming the system, right? It's never going to be zero seconds, or zero milliseconds to process that JavaScript chunk. So how are you dealing with that, if at all? Are we just leveraging the fact that because the users have to be intentional and opt in, it's usually a lot less JavaScript, and then there's also no framework JavaScript that's being sent along with this? I'm just curious, how are you all managing that uncanny valley?

**Fred K. Schott:** That's the problem that Astro like exists to solve for, which - the uncanny valley is a result of the fact that, okay, we're going to server-side render your JavaScript application in one of these other frameworks, and then we're going to send the whole page down as a full application. And nothing's going to be interactive until all of it is. That's really a uniquely SPA kind of problem. That's really a uniquely kind of that model problem, that we just don't have.

You still do need to make sure that your components can handle what happens \[unintelligible 00:21:57.09\] but the nice thing about when we can kind of hydrate in different components - we're doing that in isolation, in parallel. So where large JavaScript applications suffer from the problem of everything has to load before anything can be interactive, there's this really nice model where we can actually treat every component on the page differently. So for example, if it's not visible, we're not going to run it. Until the user scrolls down to it, that's when we'll hydrate it. That's a really cool, uniquely Astro feature, because we're treating that component isolated from everything else on the page.

And the other being like if something's really high-priority, you can bump up how quickly it loads, and you can also load that without worrying that something really big and heavy is going to block it. So your big, heavy image carousel lower on the page - that's not going to block the Buy button that's somewhere in the middle of the page from becoming interactive and loading. So it's much more decoupled, and by result, things that are like really essential can load much faster, because we let you control what loads when and how high priority it is.

**Amal Hussein:** Yeah, that makes sense. So there's this like waterfall that you get with like unbundled ECMA modules, right? You have a bunch of different JavaScript chunks; true loading in parallel - is that even achievable really in the browser these days? I don't know, you tell me about it.

**Fred K. Schott:** Yeah, I mean, that gets into something else you mentioned, which is the fast by default. Just because these things can load in parallel doesn't mean we've blown away all the performance optimizations of bundling and minification. We still do do that. But it's a really interesting model. Instead of saying, "Okay, here's your whole page as a single JavaScript bundle", we're saying almost "Here's each component as its own-" island is a term we like to use. It's its own bundle, it can load in parallel. And so you actually are getting still bundled and optimized, without you really having to think too much about it. But it's a result of us behind the scenes still giving you the model, while handling the complexity of the behind the scenes for you.

**Amal Hussein:** That makes sense. So there is some intelligence being managed under the hood in terms of like optimizations that are still happening.

**Fred K. Schott:** \[24:01\] Yeah, it's a big thing of trying to keep that away from the user, having to -- it's a trick of how do you talk about your framework when every framework claims to be fast... But what we like to say is it's fast by default, which I don't think the other framework can really claim. What we mean by that is it should be hard to build a slow site with Astro... Because for content sites, performance is so key; it's key to conversions, and Google SEO, they're gonna rank faster sites over slower sites... And a lot of other frameworks you're kind of like "Okay, we've built a slow site. What do we do? Okay, well, we can optimize... Let's bring in a performance expert. Let's spend a sprint on just performance." And maybe you can make some progress. But we want to come from a principle of it should be really difficult. You should be having to try to make Astro slow for it to be slow. Otherwise, just keeping you out of that pit is really a main goal of the project.

**Amal Hussein:** Yeah, yeah. That makes sense. That's really great to hear, and I would say... I think that's an interesting nuance that I didn't even pick up on reading your docs, like fast by default. Yes, you're right. It is the "by default" part that I think you -- maybe you need to like bold that, or something, or put some confetti around it, or something.

**Fred K. Schott:** Yeah. You have to try. You've got to break Astro to break our performance story. That's our goal.

**Amal Hussein:** \[laughs\] That's cool, good marketing. And so another kind pitch on the Astro site is easy to use. And I noticed that there is a .astro UI language that's part of this framework. So can you tell me a little bit about that? And easy to use is a tough claim, because that's always relative, but... How easy is it? Is it as easy as JSX, where it looks like HTML, sort of, but still comes with its, I would say, dragons? So what's easy here?

**Fred K. Schott:** I will call out that what you're reading is kind of like our aspirations. Like, we want Astro to be easy to use, and we make design decisions for that goal, over maybe something else, like a really complex feature that's really hard to use. We'll avoid that, even if maybe there's some reason to do it, other than -- it's something that we really value, is we want to always be easy to use when we design Astro as a language, as a framework, as a platform, all these things.

So I agree, \[unintelligible 00:26:11.12\] "Why use this?" "Oh, it's easy to use" - everyone says that, but it's our aspiration; we really value that over other things that other frameworks might value over ease of use.

**Amal Hussein:** Okay, that makes sense. And so can you give me an example of like an easy to use API in the library? Like, something that's uniquely easy to use in Astro than some other framework that whoever might be using.

**Fred K. Schott:** Yeah, so you mentioned the .astro file, which I think is a really good example of how we're trying to give like basically two different paths you can go down, and you can mix them as you want. So if you love react, you love Svelte, you love Vue - bring those into your project; they're gonna work just like anything else to generate your UI.

So there's this idea of bringing something you know, to feel comfortable, pretty much from day one, using Astro. Even if you're migrating a site, bring that site; as long as there weren't framework-specific bits, if it's just a React component that's like super-agnostic - fantastic. It'll probably work in Astro, assuming you meet that -- you didn't bring in anything that was framework-specific from the old world.

The other side of that is that Astro is us building a templating language that's really just HTML. So one of these things about using React or Svelte or Vue is you're having to learn a framework that was built for the client-side. So it's dealing with reactivity, and hooks, and these atoms that are responding to state changes... Those were all frameworks that were designed first for the client, which has a much more complex interaction story. And then they've kind of been back-ported to the server.

Because we're so server-first in our thinking, Astro is just a templating language for the server. There's no reactivity to worry about, there's no hooks. Everything's going to run once and render, and that gives us essentially something that's just HTML. We call it like HTML with some nice-to-have features, like a JSX expression if you want to do some sort of templating. You can use components in it. So it feels a lot like a Svelte or a React, but we've stripped away all the bits that aren't really relevant on the server. So you have your framework that you love, and then also, we try and give you this baseline that's just HTML, with a couple of little things you can opt into if you want them.

**Amal Hussein:** \[28:13\] That's so cool. And yeah, honestly, I didn't even really put those things together in my head... Really, like, when you optimize for server first, and you're optimizing for HTML, you also by default - it's just easy to use, because you're not like, you know... Yeah, reactivity is really where things get complicated, right? That's like the 201, 301, 401, 501 classes... You know?

**Fred K. Schott:** \[laughs\] Yeah.

**Amal Hussein:** HTML is like beginner-friendly, but doesn't hold you back in terms of presenting structurally complex data, or sites either. So that's like the beauty of HTML.

**Fred K. Schott:** It's something that's always bothered me, like "Oh, this Hello World tutorial... Well, you need to learn a bundler, you need to learn JSX, you need to learn React, you need to learn a state management system, a router..." There's like a lot to learn in web development today, and it's all about rendering HTML at the end of the day. So could we build a kind of getting started flow that is just -- like, valid HTML works as a template, as a component in our syntax. So if you just want to copy in HTML from anywhere, put it in an Astro, that's a site. You've just built a site with Astro, and that's our Hello World.

**Amal Hussein:** Yeah, that makes sense. Fully-featured, but flexible is the other thing. Right? So you hinted a little bit about bring your own sites, bring your own -- you can kind of BYOF, which is a thing that you all have coined... Bring your own framework. Very cool. What does that even mean? There's over 100 Astro integrations to choose from. What are Astro integrations? It sounds like a physics seminar of some kind, but I could be wrong...

**Fred K. Schott:** \[laughs\] Yeah, you've got to put on your lab coat, put on your goggles, jump into your config files...

**Amal Hussein:** Current astral projection for this equation is...

**Fred K. Schott:** \[laughs\] Oh, no...

**Amal Hussein:** You know, it's okay. Listen, this is why I don't like writing -- it's hard to write Astro integrations; I'm sure it makes sense in the context of web development, and in the context of Astro. So why don't you tell us about what that is?

**Fred K. Schott:** Yeah, I'm just laughing because I'm never gonna be able to get that image out of my mind for the rest of my life. \[laughs\]

**Amal Hussein:** I'm sorry, Astro integrations...

**Fred K. Schott:** \[laughs\] It's okay...

**Amal Hussein:** It's hilarious.

**Fred K. Schott:** Yeah, it's our plugin ecosystem. We really liked this idea of our core providing all the things you need. So when you install Astro, you have the basic building blocks of a site. But then this idea of bringing your own framework - it's a pretty lofty, big scope kind of goal. We couldn't build everything into core without it just becoming this maintenance nightmare.

So what we offer is this idea of everything you need to build a site is built in Astro. We're going to focus on content sites, so stuff like RSS feeds... God, what else...? Rendering Markdown... There's all these nice little -- like, very much more coming from like a blog, or like an Eleventy, nice-to-haves that are essential in the content site. So we build stuff like that, and make it really easy to grab off the shelf. And then when you want to use something like Tailwind or React or Svelte, we essentially have not just a kind of plugin, an integration, but also even a command that you can run. So "astro add react" is going to do all the work to get that set up for you.

**Amal Hussein:** Oh, wow.

**Fred K. Schott:** It's gonna npm-install the package, it's going to add it to your config file, as you'd expect... And the idea is you run that, and now you can use a React component in your project, or Svelte, or Vue, or Tailwind, or whatever it is you need.

**Amal Hussein:** That is so cool. But I have to ask, as maintainers, what is it like trying to normalize the JavaScript community? Because it feels like that's what you're doing. You're like "We're just gonna run a big normalization query on the JavaScript community." Are you like hooking into the public interface, or like the output of these tools? Because it's too much to go any lower. But I'm just curious, how are you managing this and normalizing this experience?

**Fred K. Schott:** \[31:54\] Yeah, that's kind of the key of why the .astro syntax exists. It gives us that base layer, where you can then plug in these frameworks into it. So create your shell, and then put in your React component... And if you wanted to build an SPA, if you wanted your whole page to be one React component, or many React components, you never wanted to touch Astro's syntax - that's fine, too. But that's kind of the normalization there. I think that's actually pretty much exactly the magic that we've shipped.

**Amal Hussein:** Yeah.

**Fred K. Schott:** The reason it's not too much for us to lift is that server-side rendering a React component - that's essentially what every other framework is doing for your whole site. We're just doing it shrunken down to a single component. So it's almost this full-circle story where React started early days, and was like "Yup, here's a component, here's a component..." It was all frontend focused, and then the "build your app as a JavaScript app with React" - that all came later. But we're just tapping into that original story, which is use React to build this component on the page. All the same APIs work. So we're basically doing the same thing that Next.js is doing, or any React framework that is going to call the server rendering internally, to create that HTML.

**Break:** \[32:57\] \\

**Amal Hussein:** Okay, Fred, so this is the part of the show where I get to sing "Islands in the sun... We have something... One..." I don't even -- I don't know. Anyways. \[song 00:37:20.21\] Every time I see Astro Islands, that song pops into my head. But then on your actual documentation site you have a quote - islands, not as in real islands, but islands in a sea of static, non-interactive HTML.

**Fred K. Schott:** Yeah, very visual, right? Just a nice little island getaway, in the middle of an ocean of HTML.

**Amal Hussein:** Yeah, just swimming in the sea of div tags, you know...? Where's my span? Where's my head? Where's my footer? I'm getting a little uncomfortable here, you know? \[laughter\] Seriously. It's kind of hilarious, really. But I'm so excited to finally get to talk about this with you. I've been meaning to pick your brain about this. Now I get to do this on air. Yay. So opt into complexity is a core principle of Astro; opt into complexity. So can you tell us a little bit about opt into complexity and islands, and how those two relate? And what the hell are islands? Please, educate us.

**Fred K. Schott:** Yeah.

**Amal Hussein:** I think we might have hinted at it a little bit already, but we haven't explicitly called it out.

**Fred K. Schott:** Yeah, I mean, credit where it's due. We did not come up with this term. I would just say we were kind of the first framework to make it this like core primitive. Astro is a framework for building island architecture, for building sites with this idea of thinking in islands. I believe it was originally coined by -- I want to get her name right... Katie Sylor-Miller, who was Etsy's frontend architect... But then Jason Miller, creator of React - he did a kind of blog post really outlining it.

So this is going back to 2019 in terms of a concept, but now here in 2022 -- it was always this really hard thing to do, so it never really was very popular. And then we really -- I think our claim to fame, if anything, was making this pattern really easy and baked in by default.

I think we're going to tie it all together here, because this island architecture - it's really at the core of how we see ourselves as different from everyone else, which is the idea of thinking of your site as mainly static content, with islands of interactivity. I mean, choose any content site - it can be eCommerce, it can be a recipe blog, it can be cnn.com... The main thing that they're trying to do is get a lot of content in front of you. There's an article you've gotta read, maybe there's comments to interact with, but the majority of the focus is on this giving something to you to consume. That sounds lame, but it's what a lot of the internet is based on; it's a major part of why we go online.

**Amal Hussein:** Yes. Food for your brain.

**Fred K. Schott:** Exactly.

**Amal Hussein:** Sometimes it's healthy food, sometimes it's not. Just like life, you know? \[laughs\]

**Fred K. Schott:** Exactly.

**Amal Hussein:** Sometimes it's just fun, like cat content...

**Fred K. Schott:** Exactly.

**Amal Hussein:** I mean, let's be real - the internet was definitely invented just to show off cats, you know? \[laughs\] Everything else is just like "Yeah, who cares, really?" It's just there to fill in the spaces.

**Fred K. Schott:** \[40:09\] So you've got your cat photo site, built with Astro. The idea is that the majority of that is the cat photo; it's the comments, people being "Wow, cute cat!" That's all really, really lightweight for users' browsers to consume. So the browser can show that really quickly. And on the flipside then, everything that is proven to be true about performance in that for content sites gets to play out for you basically for free. So it loads faster, it means less users bounce off your site, especially in slower devices, like mobile devices, slower networks, developing countries...

We take for granted -- especially as web developers, we're working on like a MacBook Pro M2 chip, on our wired Ethernet that I've got plugged in right now... I load up any site on my computer, it's probably going to load pretty quickly; that's completely not realizing that there's a mobile phone out there that is just chugging along on even the most simple site. And that can be a large percentage of the world, especially if you're building something globally, or even for your own country; it's easy to forget that a lot of us do live in these bubbles of incredibly fast devices, incredibly fast internet... And that's what I think Google has done a really good job of pushing, with the Web Vitals and Lighthouse scores; it's really bringing people back down to Earth. This giant JavaScript application that you're sending down to some lower-powered devices - it's not going to cut it; you're going to lose users. That's the problem we're really existing to solve, because it's so, so important for content sites.

**Amal Hussein:** Yeah, that makes sense. You know, this is a podcast, so everyone's gonna have to close your eyes and use your imagination... But imagine your website page as the box, a big rectangle. And then in that rectangle are lots of other little boxes, that kind of really break up the architecture of your nav bar, your footer, or your main content etc. and it's like really carving out each thing as its own little island, and maybe optionally opting in complexity into one of those little boxes, right? You know, "Hey, I want JavaScript interactivity here." But maybe even that's conditional to maybe like internet speed, or whatever.

I think what's cool about this architecture is I think you get to insert your business logic wherever you want, right? I mean, ultimately, we're the designers of these applications as developers. We know the needs of our users the best; we know the thing that's important to them, we know the things that are less important... And so I think it's cool having a framework that allows you to like inject that intention into your application code in terms of its behavior and performance. I mean, I don't know if I'm allowed to say the word, but that's B, A D, A, S, S. I don't want to get censored, so... \[laughter\]

**Fred K. Schott:** Do we bleep on this podcast, or...?

**Amal Hussein:** We do...! I'll just say the word, badass. If it gets bleeped, I'm sorry, Jerod. But that's so cool. And I think for me, this is where -- again, I don't really care about usage here. Statistics, right? I don't care if people are using Astro or not. For me, it's the forward-thinkingness. This is like TED - technology, education, design...? I don't even know, I have no idea. Whatever TED stands for - their motto is "Ideas worth spreading." For me, this is like an idea worth spreading. And so I do hope to see this catch on as a principle and as a way of developing performant applications. And really, at the end of the day, performance is about creating the best user experience, and also just meeting the needs of your users, like having empathy and understanding that sometimes you're just trying to buy a ticket on a train, and you've got to optimize for that hot path. And I think what's cool about islands architecture - I feel like it gives you an easy way to optimize for the hot path, and progressively layer in the fluff. I think that's super-cool.

**Fred K. Schott:** \[43:57\] Yeah. I think what I loved on that point is these are like approaches... Amazon is still one of the faster eCommerce sites around because they can just throw engineers at solving this problem. Google has had a web framework that does something like this for a decade now. Internally only.

**Amal Hussein:** Clojure? \[laughs\]

**Fred K. Schott:** Oh, God, no... Of course I'm gonna blank on it now. It's not -- I'm blanking on it, but like an internal...

**Amal Hussein:** It's not called "Islands in the sea..." \[laughs\]

**Fred K. Schott:** No. Exactly, none of the fun.

**Amal Hussein:** No fun name...

**Fred K. Schott:** Yeah. But that idea that these are tools and technologies and approaches that were locked away in these larger enterprises, where everyone else was using these frameworks that were really nice DX, but didn't have the same performance story. So this is really fun, kind of unlocking something that the big players have known to be true for a decade now... And even going back further than that, this idea of server rendering - that's like a PHP, that's Rails... That's old-school. But what we're able to do is give you a single codebase. So you're not paying the legacy developer experience cost. You get the modern DX with the performance story that matches a big player who has Ph.D. software developers working on their projects. We're trying to give that to everyone.

**Amal Hussein:** Totally. Yeah, I totally agree. I mean, I think for me -- I don't know, this is kind of opening up its own can of worms and its own show, but I do have to say it... DX vs. UX has been a hot topic debate in our community for a while... And I'm personally in the UX camp; like, let's jump hoops to make the experience better. Yeah, it's important to optimize for developer experience for lots of reasons... Good DX leads to more time to work on UX, and less ways to break the UX... All good things. But at the end of the day, it's important for us to remember what our priorities are, and I think what's really difficult in our community is our open community space and all the sharing that we have between groups on the internet. There's folks working at all kinds of companies, talking about ideas, but I think what sometimes we fail to recognize is we don't contextualize the advice that we're getting, or we don't contextualize the practices that we're seeing.

Netflix has a world-class engineering team, they throw lots and lots of resources at X... What Netflix is doing is sometimes solving problems that are very unique to Netflix. And it's not supposed to be exported and copy-pasta-ed everywhere in the world, right? We have to examine that with a grain of salt. And also just a lot of companies using certain tools maybe have dedicated performance teams, or they have enough experts on staff to manage their usage of those tools, but it's not always one-to-one, right? So you have to choose carefully and also think critically when you see things working for certain groups, or being pushed or being used by certain communities... You have to just understand what their context is, and if it's not the same as yours, then you have the right to be skeptical.

**Fred K. Schott:** Yeah. I think it's one of my favorite things about this project... When we compare ourselves to all these other frameworks, we're not saying "And therefore we're the best for everyone." It's like, every other framework - the DX and the complexity that they add on, it's for good cause; you can build really powerful things, that are super-dynamic and interactive. If you're building the next Facebook, you shouldn't use Astro.

**Amal Hussein:** Uh-oh... \[laughs\] Uh-oh! Snap!

**Fred K. Schott:** Maybe you should use React, but I don't know...

**Amal Hussein:** Oh no, \[unintelligible 00:47:19.20\] it's okay, these hot takes... I feel like I should be drinking, or something, but yeah, okay...

**Fred K. Schott:** \[laughs\]

**Amal Hussein:** Yes, hot takes it is.

**Fred K. Schott:** We'll do the after show after... No -- yeah, Facebook is... You know, there's these really dynamic -- there's a lot of user state data flying around... Next.js and other things are great for stuff like that. And we get to say that while knowing that that lets us make trade. It's really kind scary to say, we don't work for all use cases; we're not optimizing for all use cases. Instead, that lets us focus on the use case that we think is really not being served by all the others, because they're focused on that other end of that spectrum you mentioned.

**Amal Hussein:** Yeah...

**Fred K. Schott:** \[47:57\] It's cool. It's acknowledging your weaknesses, and how they actually play to your strengths in other use cases.

**Amal Hussein:** Absolutely yeah. And I think it's good to know your audience and good to know your use case. I think it's important to do that, because I think more developers should be thinking about their use case and their needs. It's not just cargo culting and "Let's adopt this." "Does this work for you?" is the first question. Like, does this solve a problem that you have? So that's really cool. And I think what's interesting is Astro seems to be bridging that gap a little bit of for communities that were maybe served by traditional content platforms like WordPress, and other site CMSes... But now we're bringing in that DX, and all the fanciness of modern JavaScript development into that world, so that's really neat.

So we can't end this show without talking about the MPA versus SPA debate. So can you kind of set the context for us here, assuming that I'm a person who maybe has never even heard of a multi-page app? What is a multi-page app? I've heard of a SPA, but what's anf MPA?

**Fred K. Schott:** \[laughs\] Yeah, it's a little up at the end, MPA...

**Amal Hussein:** Yeah, MPA. What is the MPA? What is this MPA? Tell us about this thing.

**Fred K. Schott:** So MPAs were kind of -- it's a term that was almost coined in reaction to SPA... SPA being the other we've been talking about, the full JavaScript app.

**Amal Hussein:** Oh, it's a turf war.

**Fred K. Schott:** Yeah...

**Amal Hussein:** I knew there was some nerd beef behind this. JavaScript nerds, it's like - instead of having a dance-off where they battle, and like "Oh, I can dance better than you", it's like "I'm gonna come up with an acronym that's new."

**Fred K. Schott:** Yeah, that really sticks it to you, yeah...

**Amal Hussein:** Yeah. It's like "Oh, really? Next? Alright, well, here's Nuxt, okay?" \[laughter\]

**Fred K. Schott:** "I'm gonna write so many think-pieces about how I'm smart..."

**Amal Hussein:** This is Nuxter now... \[laughter\] I mean, it happened with Redux and all the Flexy things... But anyways. So okay, MPA versus SPA. Sorry to interrupt you.

**Fred K. Schott:** No, it's only relevant because before SPAs were a term, every website was an MPA. So it was like this term that just didn't need to exist, because it was the traditional way of thinking.

**Amal Hussein:** Right. You mean like Web 3.0? \[laughter\]

**Fred K. Schott:** Yeah, exactly.

**Amal Hussein:** It's like, what is this thing again? What are we coining? When did we \[unintelligible 00:50:12.10\] major version again? I missed this. Okay, so...

**Fred K. Schott:** So you can think of MPA as just - it's not a JavaScript app that you're shipping to the client to run your website.

**Amal Hussein:** Okay.

**Fred K. Schott:** So a lot of the new frameworks are -- again, I keep throwing out the same names, but Next, SvelteKit, Remix etc.

**Amal Hussein:** It's all good. This is our reality.

**Fred K. Schott:** Yes.

**Amal Hussein:** We are in the monoculture of JavaScript era. That's all good.

**Fred K. Schott:** Yes. The true monoculture of it is even though they're all different, React, Svelte, Vue, they're all following the same model, which is "We want you to build a JavaScript app, and then we're going to optimize it as much as we can, but at the end of the day you're going to send that full page content down to the user."

React Router is a really good example. It's doing routing on your device. Your website is running as an application, and it's all running in the browser, so it gives you really snappy navigation. It lets you think of your site as an application running on a user's device. Again, there's a lot of benefits to that model for certain use cases. Whereas MPAs - where the line is drawn is MPAs are still in that model of the routing is handled by the server.

So if I want to navigate to a page, my browser is asking the web server for a new page of HTML. And the optimizations that we can make on that end of things are much more about keeping --

**Amal Hussein:** Are much greater, too... Sorry.

**Fred K. Schott:** No, no, no, that's a much less explored future, and it's really interesting seeing some of the proposals that are coming out. Chrome is pushing this proposal that lets you, even when navigating from page to page with a full refresh, keeping your shell on the page, if it's going to exist on the next one. So you can imagine the SPA navigation story...

**Amal Hussein:** Oh, wow.

**Fred K. Schott:** ...where you click the link and your page doesn't actually change, because it's a JavaScript app fetching HTML, and all the complexity there...

**Amal Hussein:** Yeah, yeah, yeah.

**Fred K. Schott:** For the MPA story, it's much more about you're getting the server to generate a lot of the markup for you. And that's the big benefit for performance, is that you're not running an app on a low-powered phone, on a bad internet connection; you're streaming HTML down, using the model that's kind of existed for the last 20-30 years around web development, of the server is doing all the work. The frontend is just making it interactive where you need it.

**Amal Hussein:** \[52:20\] That makes sense. I know, it really feels like a lot of the problems that we have today are from us just kind of getting away from leveraging the strengths of the browser and the strengths of the web protocol, and trying to reinvent it and do everything... Like React handling scheduling, and thread management, and all of this inside of JavaScript land... It's like, "Whoa, super-hard job. Appreciate the effort. Wow, impressive stuff... But why are we reinventing that wheel with much less horsepower?" Right?

**Fred K. Schott:** Yeah. We can tie it back to what we were talking about at the start, which is that idea of a lot of the last decade has been more and more complexity to solve the problems that were introduced by that complexity.

**Amal Hussein:** Yes...

**Fred K. Schott:** You mentioned uncanny valley - that is very much a SPA problem that then the SPA needs to add more JavaScript to solve. And React Server Components, I think, are a good example of this - it's really cool tech, but you're just building more and more complexity on. Now you need a server framework to even use React, to use this feature. It's more and more complexity.

So that's why I love working on this, is it's a reimagining that strips away the complexity and goes back to some basics that we feel were lost, maybe not for the right reason; maybe they were lost to give a DX that we think we can now, ten years later, bring back without sacrificing that story. So instead of adding more and more complexity, we're trying to strip it all away, give you a basic story that beginners love, advanced users love, and we think we've kind of nailed that with this release.

**Amal Hussein:** That makes sense. And so now if I want to deploy this thing, use this thing, what's that story like for an Astro app? Because I can't tell if there's a bunch of pre-built stuff or not. I don't know where you fall on this spectrum. Can you tell our listeners about that?

**Fred K. Schott:** Yeah, a couple of things. One is that if you go to our website, astro.build, there's a themes showcase, there's an integrations showcase, there's a drop-in integration - Integration, I'll put it on my lab coat - for every deployed target.

**Amal Hussein:** Yeah, I know. "Astro integration commencing..."

**Fred K. Schott:** \[laughs\] So there's a Netlify integration if you just want to deploy to Netlify, Vercel, Cloudflare... And it's really more time than anything; we've grown up, this project has grown up in a world that's post Node being the only thing you need to worry about. There's new environments that we need to help you build for, like Cloudflare, that are much more restrictive. Edge - it's running close to users and data centers all over the world. We have been able to build a system that lets you essentially plug that in, and we'll match our output to what you've asked for. So Astro add Cloudflare is going to give you everything you need to start building your site and deploying it to Cloudflare.

\[54:57\] Another really interesting thing that we do is that we're a static site first, so if you're just trying to build something really quick, the idea of just outputting HTML, JavaScript and CSS is actually our default. So you can really get started, and that's something you can deploy pretty much anywhere as a JAMstack site, and then you opt in to the complexity, our favorite phrase... You opt in. If I need a server that needs to run, I will opt into it. I will tell Astro, "No, no, no, don't build a static site, build a dynamic server." It's going to respond to requests as they come in, it's going to handle user input... You kind of opt into that story when you need it, which for some content sites is never, for others it's day one. We let you make that jump when you're ready for it, instead of being, again, all this complexity on by default.

**Amal Hussein:** Absolutely. This is really great. I think it's always refreshing to see new projects - even though, again, we know that this has been something that has been in the works for a while. We're just going 1.0 now. We just went 1.0 this week with Astro... But it's so great to see where we're landing as a community; it always does feel like we are taking that spear and throwing it a little further every time, and we're taking best practices built up, and we're all standing on the shoulders of so many different giants... Giants from 60 years ago, 100 -- maybe not 100. 60 years ago, giants from 30 years ago, Giants from 5 to 1 year ago... Right?

So many best practices seem to be coming into Astro, everything from turnkey usage in terms of getting started is easy, turnkey deployments, integrations support with all of your favorite tools that you've been using and that you're familiar with... And then I think the really cool thing is you're really sticking true to that promise of easy to use. Just releasing this 1.0, with all of these integrations, and just even support for deploying to Cloudflare and Netlify... That's huge. So it's a very impressive 1.0. I feel like you're pushing the bar a little bit now for applications... I'm like "Hot damn, if this is 1.0, I don't even want to know what's in store for v2."

**Fred K. Schott:** It's gonna be really exciting when we can set the foundation in place... And yeah, I'm really excited for the roadmap we have ahead. And yeah, kind of to your point credit, where it's due - this is only possible because we can see and learn from other people in the open source ecosystem. So we're definitely taking some features that we love from Next, and SvelteKit..t. A lot of these things we're not building in isolation; there's real inspiration from pretty much everyone. From every framework we've found things that we love, that we brought into Astro. So we get to make our big bets, but then also rely on things that have been proven out by others, which is a really nice thing to be able to say.

**Amal Hussein:** Absolutely. Absolutely. Well, thank you so much, Fred. It's been an absolute pleasure. We'll have lots of links in the show notes for everything that we talked about today... And yeah, check out Astro. It seems like a really fun project to definitely play with, but also I'd say the docs alone are really, I think, a great read. There's just lots of great ideas and lots of fun little quotes... So you should go find them.

That's it for this week, everyone. We'll catch you next week, and thank you very much. It's great to be back today. Bye, all!
