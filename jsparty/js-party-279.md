**Nick Nisi:** Ahoy-hoy. Welcome to another exciting JS Party. I'm your host this week, Nick Nisi, and I am joined by two very exciting guests. First, I have Aiden Bai. Aiden, how's it going?

**Aiden Bai:** I'm doing great. Happy to be on the show.

**Nick Nisi:** Awesome. Welcome to the show. And we also have Tobiloba. Toby, how are you doing?

**Tobiloba Adedeji:** Hey, Nick. Yeah, happy to be on the show today.

**Nick Nisi:** Awesome. Yeah, thank you. Very excited to have both of you on, and we're talking about Million.js, which is an amazing project to make React and other virtual DOM environments a lot faster by replacing the virtual DOM. Is that right?

**Aiden Bai:** Exactly.

**Nick Nisi:** Awesome. So first off, Aiden, why don't you tell us a little bit about yourself?

**Aiden Bai:** Hey, I'm Aiden Bai, I'm currently a high school senior up in Washington State. Next year I'll be going to the University of Washington for Computer Science. But what we're here for is Million.js. So for the past few years I've been working with several other contributors on this project. Essentially, it's a virtual DOM replacement for React. By wrapping your components in a block function, kind of how you do with Nemo, you can speed up the virtual DOM. So essentially, imagine if you wrote React Components, but they were actually fast.

**Nick Nisi:** Nice. Yeah. And as we established in the pre-show, you are graduating from high school, which means you were born in the year that I graduated from high school, so you officially have made me feel older than any guest that we've had on so far, so thank you for that... \[laughs\]

**Aiden Bai:** No problem.

**Nick Nisi:** And Toby, why don't you tell us a little bit about yourself as well?

**Tobiloba Adedeji:** Yeah. Thank you, thank you very much, Nick. Yeah, so a bit of intro about me. I'm Tobiloba, and I'm a software engineer, frontend specifically. So yeah, I started my entire tech journey last year. I went to a three-month bootcamp to learn these basic skills, and then started open source journey around October, it was October 1st. Yeah, that's a bit of the backstory for me.

**Nick Nisi:** Nice.

**Tobiloba Adedeji:** I'm obviously a student, second year, and... Yeah, pretty much.

**Nick Nisi:** Nice. And did you get involved with Million.js through Hacktoberfest?

**Tobiloba Adedeji:** Actually - funny story. I actually got involved in open source websites; there's this community called \[unintelligible 00:02:52.05\] So I maintain the website. I maintained it through Hacktoberfest, and now I've got my T-shirt as well. So that was my venture into open source. \[unintelligible 00:03:03.05\] So Million started this year.

**Nick Nisi:** Awesome. Nice. Yeah, so tell us a little bit more about what Million is, and how you got started with it.

**Aiden Bai:** Yeah. It started in June 2021. Basically, I was bored, and I was "What if we made a virtual DOM?" And I've gotten a lot of comments about it, just "Why would a high-schooler -- why would any software engineer, let alone a high-schooler want to learn about the virtual DOM?" When I initially pitched it to my mom, she was "Are you sure you're not going on the internet?" Because there's different connotations to the same word, right?

So long story short, I just tried to make this virtual DOM thing, and I kind of figured out that React developers kind of compromised with this really slow virtual DOM. Not saying that the React team has not created a great product, it's just that there are some shortcomings that we've probably all faced, whether it be bundle size or vendoring performance.

So in November, I shipped v1. November of last year, I shipped v1, where I tried to literally recreate React, and make everything kind of how Preact compatibility is, and make it faster. And to be frank, it utterly failed. All the benchmarks. It was actually slower than React. And so I spent the next three months working on this new thing called the block virtual DOM. And the block virtual DOM is very cool, because it's a new concept we can introduce to the virtual DOM that makes it significantly faster, on par with libraries Solid.js and other fine-grained reactive libraries. And so yeah, that's what it really has become, and it's awesome to see so many people who've been using it, and React users taking advantage of it.

**Nick Nisi:** Wow. So I have never heard of that before, the block virtual DOM. Did you say that other projects are doing similar things, Solid or Qwik?

**Aiden Bai:** So Solid and Qwik are kind of using something called fine-grained reactivity, or signals. They use the data, they develop abstractions over the data in order to pinpoint those DOM nodes. So you change the data that only that specific dominant changes. But the block virtual DOM takes -- it inverts that control, where the data is arbitrary, but the relationship between some sort of data and the DOM node, there's a relationship there. And so essentially, you can have random props, and it will figure out where it goes. It's kind of the Svelte model.

**Nick Nisi:** Okay. Okay. This is blowing my mind right now... Only because - yeah, maybe we should start with what the current React virtual DOM does, and how that differs. Maybe give an intro into that.

**Aiden Bai:** \[05:47\] Yeah. So React's philosophy is we can represent the user interface or the JSX as a function of the state. Essentially, what that means is state flows down to the user interface, and it gets updated that way. That's what we call a render. But during that reconciliation process, after it's been rendered, where it figures out what needs to be changed in the DOM, that's where the expensive part is. Because basically what it's doing - let's say your JSX is 50 elements. 50 divs in a row. Obviously, that's not realistic, but we're just in this fantasyland. What it does, it compares those 50 div notes to see if there's a difference. And if it finds a difference, it can make that dominant change. But you can see how the more nodes we have, the more divs we have, the more computation we're going to do, and the more slow it's going to be. And so that's the bottleneck of React. Obviously, you can architect great React applications that are very performant if you use components right. But oftentimes, that's not the case.

**Nick Nisi:** Okay. Yup. And so it's doing that diff on all of those in it. As the DOM grows, it computationally grows more, but Million -- so how does it invert that?

**Aiden Bai:** So essentially, we have two stages. The first stage is static analysis. Essentially, we use a compiler to run over the component you want to analyze. So you wrap that component with a block function, and it runs that component. Essentially, what it can do is it can see where the dynamic places are. So for example, if you have some hook state that goes to this specific nested div, it can figure that out. And with that, you don't need to do that tip every single time, because we assume that only dynamic data changes, and static nodes don't. Essentially, we just skip the static and only change the dynamic.

**Nick Nisi:** Okay, okay. So that's making more sense. Like, if you had a text field component, and you might have a lot of classes and divs around that, where you're creating the text field itself, the input, but you might also have a label associated with that, and other things - like, those more static pieces, where it's maybe just for styling purposes only; a class, a div with a bunch of Tailwind classes on it, for example... Your compiler is going to go look at that and say "That will never change." So it just excludes that from any DOM diffing, and only keeps the input, for example, as the piece that's actually going to get changed. Is that kind of --

**Aiden Bai:** That's exactly right, yeah.

**Nick Nisi:** Okay. So that made it so much simpler in my head. That's awesome. So how did you come up with this idea to do that?

**Aiden Bai:** There is already an existing library called Blockom, which kind of introduces this sort of concept. But it wasn't really accessible to most developers. It was just kind of another JavaScript library you can use. And the way you defined the view was in one big string. And obviously, it's cool, but I don't want to use that in my own application.

So Million kind of makes that block virtual DOM concept accessible to most developers through React or Preact. That's kind of how it got started. There are further optimizations on top of Blockdom. Blockdom is our runtime base, and so essentially you have to do that static analysis during the page load, which can have a little bit of initialization cost. But using a compiler, we can just skip that. So essentially, you get the performance benefits of Blockdom during the runtime, and also, you don't have that initialization cost, which is really cool.

**Nick Nisi:** Nice. Are there certain types of components or certain use cases where it doesn't work super-well, just maybe because there's so -- it sounds like you need to know more about it at build time, the structure of the actual component... But maybe that for one reason or another might not be set up. So would it just kind of exclude that from it, or include all of the virtual DOM, and not exclude anything? How does that work?

**Aiden Bai:** Right. Initially, what we had was we only allowed stateless components. So essentially, no hooks, no local state. Because what it does - it kind of runs that function, and then you kind of get the view from that. And so essentially, you can't \[unintelligible 00:09:57.12\] because the function doesn't run. But with a compiler, we can kind of bypass that.

Essentially, what we can do is we can analyze and see those hooks and dynamic expressions, and split it into two components. One component has all the hooks and data, and then it calls that block, and one component is just for the reference during compilation.

\[10:19\] And so there are limitations. Mainly, there are three. Number one, it doesn't work well with UI libraries. Million can't figure out the components that are used within components yet. So essentially, what I mean is, let's say you have a component, and you're using a UI library that calls a text component. And then inside that text component, it has a bold component, or something that. It can't figure out how to optimize those components yet. And so essentially what it does - it defers that rendering to React. So essentially, you don't have any performance benefit there.

Another limitation is conditional rendering. Million assumes that components are deterministic. Essentially, they return stable or similar views over time. We also defer that to React, if there's conditional rendering. And the third one is - man, I just totally forgot the third one. But those are the two main limitations.

**Nick Nisi:** Yeah. Nice. Toby, how did you get involved with Million?

**Jerod Santo:** Jerod here. Unfortunately, Toby's audio went haywire for about 10 minutes, and you won't be able to understand anything he's saying. We did our best to fix it up, but nah. So let's take a quick news break, and then we'll drop you back in when things clear up. You'll have to pick up the context on the other side, but the rest of the show is nice and clear, so I hope you stick around for the remainder.

**Break**: \[11:44\]

**Aiden Bai:** To kind of expand on what Toby said, it's basically -- we do have constraints, and we do have a rules of blocks page, kind of a rules of hooks... But obviously, no one reads documentation, so we do compiler warnings. Essentially, anytime you do something that kind of doesn't fit with Millions' model, it first defers to React. It just progressively degrades. But it also gives you kind of a tip, a warning, and explains how this works.

**Nick Nisi:** Okay. And this would be at build time? I run vite build, and it spits out -- like, Millions compiler takes over and kind of spits out a few things?

**Aiden Bai:** Exactly. It gives you a tip how to fix this, it gives you the line where you're having the problem, and also the rules of blocks page.

**Nick Nisi:** Okay.

**Aiden Bai:** And also for our -- I understand nobody reads the documentation, but trust me, if you want to get into Million, absolutely read the docs. There's a reason you can't just -- when you're at the rendering place, you can't just do a block, and then you're done. There are some constraints. It can't be that easy, right? We're trying to make your life hard here... Just kidding. But basically, we have a great quickstart guide; it's literally just five minutes, and you can just jump-start really quickly.

**Nick Nisi:** Yeah, nice. So from that piece though... I was kind of looking at the quickstart guide, and it looks really the only difference from a typical Vite-React app that I would create are adding in the plugin into your viteconfig, but then also on those components that you're going to use it on, wrapping that in a call to block that you import from Million, and then it kind of just takes over from there. So is that really the only API surface layer that you have?

**Aiden Bai:** We do have a forward component. It's kind of how Solid works, but for people who don't know Solid, it's basically a special component we have for block rendering. One thing about React rendering is that we have a lot of elements, and it gets really slow. So we have this special component that optimizes that for you. You don't need to deal with trying to figure out how to make that fast.

**Nick Nisi:** That's awesome. Okay, so we've been using Vite as an example here, but what about other kind of runtimes or build tools that you might use? For example Next. Is it compatible with Next.js, is it compatible with React Server Components? What's the story there? I know all of that is pretty new, and you're pretty new as well, so I'm just curious...

**Aiden Bai:** \[16:00\] Yeah. And Toby has been helping a lot with educating Discord about this, but we have support for Next.js, Gatsby, Astro, Vite, WebPack, etc. etc. But we don't want support for Remix, because I -- I'm gonna go on a little bit of a rant here... We tried to get Remix support, but they don't have a plugin system. I don't understand why -- okay, not to hate on the Remix team, but please add a plugin system. Literally, you could have -- they just added Tailwind support, and... Yeah.

**Nick Nisi:** Yeah, I did not know that, actually. That's a good plea for a plugin system. Cool. So it does work with Next, Astro, Gatsby... And does it work with the Next 13's app directory?

**Aiden Bai:** It does within client components. So you have to make sure you have that use client.

**Nick Nisi:** Got it. Awesome. That feels it would work everywhere. I'm just thinking, could I start using this today? And it is something that I'm gonna go play around with after this. So tell me more about what that block is actually doing. Is it just using that as some kind of way to identify which components to hone in on for the compiler, and then the compiler just kind of goes through...? What is the compiler actually doing? Is it walking the AST and kind of figuring out things from there? What's it actually doing?

**Aiden Bai:** Right, it's exactly what you say. It walks the AST and it tries to figure out what's up. So right now we have two compilers, or two modes. We have a React mode, and also an optimizer mode. The optimizer mode is still experimental. It kind of further reduces the initialization time. But essentially, our current React transform, which is what most users use - it does that component splitting thing I said earlier. Essentially, it figures out, it separates the data from the user interface.

One limitation with the runtime model is that it requires a stateless component, because it just runs that component as a reference. And so once we've compiled that, we separated it, we can use the runtime API. There's two parts of the runtime API. I know this is getting a little complicated; even some of the core contributors are "Oh, my gosh." But essentially, we have the core virtual DOM, and then we have a wrapper that masquerades as React.

The core virtual DOM is what I described earlier, with the Svelte model thing for making static and dynamic separate. But we also have a layer that masquerades as React. Essentially, we have a React component. So essentially, when you run block, it consumes your component. Inside that block function, it returns a new component. That new component is what we call a loader component. A loader component can essentially load the Million virtual DOM. Imagine it as an empty element with a ref on it. Once it loads, that ref gets added to the element. And then we can use that element to render the Million virtual DOM, too. It's a parachute almost; when you fall into the sky, that parachute bag is your loader component, and once you start falling, that parachute comes out. That's your Million virtual DOM, essentially.

**Nick Nisi:** Nice, I love that analogy.

**Aiden Bai:** Actually, we just posted a new blog post on how we do that loader component. And the cool thing about it is it's not just Million that can use that pattern, but also frameworks Solid, or maybe Svelte or Preact can use that model as well.

**Nick Nisi:** Oh, nice. So it can grow beyond React. So how does that work, I guess? Just based on what I understand about Svelte, for example - is Svelte using a virtual DOM?

**Aiden Bai:** So actually the loader pattern, or a loader thing - you don't need to have the rendering kind of tied to the React virtual DOM. Essentially, it's kind of Astro islands, but the static content is the React, and then the whatever framework is your whatever framework. But instead of an island being a field of static, you're being in a field of dynamic virtual nodes. And so you're kind of escaping React's rendering reconciliation responsibility into your own React framework. I mean, it's just a DOM node, but React will eventually put a DOM node onto the page, and we can take advantage of that DOM node to load our own content.

**Nick Nisi:** \[20:09\] Nice. So one other question that I had that was coming up for me was -- you mentioned, for example, with Next; it only works with client components. Specifically in the app directory. It only works with client components, and there are some -- like, the components need to be deterministic, right? So do you offer any helpers to help developers with that? I'm thinking ESLint plugins, or things that, that can help them identify the right places where Million makes sense, and where it might not?

**Aiden Bai:** Yeah, currently we're planning -- ESLint is on our roadmap, because it's absolutely essential. We need a plugin to show where developers use this, how developers should use this... It just needs to be built-in, because is just so unintuitive.

**Nick Nisi:** Yeah.

**Aiden Bai:** And what we currently have is compiler warnings, or compiler errors. So that's the best we have right now. But we're definitely working on an ESLint plugin to make it a lot more seamless.

**Nick Nisi:** Yeah, no, that's great. I mean, you're coming in so quick with all of this that I can't imagine having all of that just immediately set up as well. But it's great to hear that it's on the roadmap... So that's awesome, because I think that could make a big difference in... I'm not always the biggest fan of things like ESLint, but where they make sense... Specifically, the React hooks rules is so helpful. So that's where I feel plugins like that really shine. And Million just seems -- it makes sense, from what I understand... It makes sense that would -- it would naturally just have that at some point. So... Awesome to hear.

**Aiden Bai:** Totally. For me - I love it when the linter yells at me for dependency arrays. I always forget how to use them, and it just tells me, and it kind of does it for me. It's amazing.

**Nick Nisi:** Yes. I love, too -- there's things that... I've been really getting into Next 13's React Server Components and stuff, and the ESLint rules for that are super-helpful. It's like "Oh, you can't do this in a client component." Or "This has to be a client component to be able to access this. Super-helpful to just keep you on track, instead of just fail, and why did it fail... So yeah, that's great.

**Break**: \[22:23\]

**Nick Nisi:** Now, I have the hard-hitting question next, and that is where did the name Million come from?

**Aiden Bai:** Frankly, there is this great package on npm called Available, and it's a CLI command, and you can just get all very commonly used words from Google, and it just lists a bunch of available npm packages. And the great thing about it is that - when I was just looking through it, I saw the name Million, and I was like "This is it." It just matches. Because Million kind of feels like "Oh, we could do a Million operations per second", or "It can handle a Million UI nodes."

**Nick Nisi:** Yeah.

**Aiden Bai:** Unfortunately, it can't, so it's a little bit of a false marketing... We do have a mascot. We call it MilLion the Lion, where it's M-i-l-L-I-O-N.

**Nick Nisi:** \[24:02\] Okay. Yeah.

**Aiden Bai:** So that's where the logo comes from.

**Nick Nisi:** I was wondering, yeah... After staring at it for a minute, I was like "Oh, okay." And I think I might have seen that somewhere... But I saw the Mil + Lion, and I was wondering if that's like millisecond + lion...

**Aiden Bai:** I didn't even think of that one...

**Nick Nisi:** Yeah. There you go. \[laughter\]

**Aiden Bai:** That's good. We're patenting that. Yeah. Actually, Toby was the one who suggested we should actually clarify...

**Nick Nisi:** Oh, that's awesome. Yeah, I like that a lot. So another question I had is - you know, in terms of this... This definitely has a lot of potential to make React a lot faster, and I'm curious if you've been in touch with the React team at all, or if you've had any kind of conversations around that, or like why they don't do things this. Is it maybe just backwards compatibility issues, or...? Yeah, I'm curious your thoughts on that.

**Aiden Bai:** Yeah, I have had the opportunity to talk with Theo and some React influencers, but not necessarily the React team. The React team has a very staunch position on this, and for valid reasons, right? If you work in the React model, and if you can create great React applications, and use well-written code, it's going to be good, or good enough. Or more than good enough, actually. And with the advent of Server Components, a lot of these kind of performance problems can be changed based on the architecture. Basically, if you build good React applications, they're gonna perform well. And that's great. You know what? Totally valid. But React developers don't write good React applications.

**Nick Nisi:** How dare you...? \[laughter\]

**Aiden Bai:** You know what - as someone who does not write good React apps... I'm totally in that camp. And I very empathize with most React developers. And I don't think most developers will adopt \[unintelligible 00:26:03.06\] And so a lot of these kind of solutions are tailored for the 90th percentile, or - I don't know how percentiles work, but 90th percentile, where the 10% of power users, React developers will be able to benefit a lot from this. But that other 90% - it's not going to be there. How can we make React apps better, without having 20 years of React experience, and also knowing every single performance optimization? And that's where Million kind of plays in.

Most performance optimizations you kind of think as bundle sizes, or images. And a lot of it is, right? Like, how can we make images load faster? Or how can we not ship every single icon and three icon packs into his website? From personal experience. But another part of it is rendering. Some apps require very dynamic rendering; they have very dynamic pages, they load a lot of content, and that's really important. And so the way we kind of remedy that is with Millions. So how can we introduce faster rendering strategies into React for that 90% of developers?

**Nick Nisi:** Yeah, that makes sense.

**Tobiloba Adedeji:** Thinking of it from a business perspective, at companies now... I mean, most companies started in 2017-2018 probably have legacy React code in their application; that might take a lot of work to optimize, or update, or something. And Million kind of fits in that case, where it solves the problem of -- you know, maybe you're going to fix some optimization issues; you don't can actually help them \[unintelligible 00:27:36.07\] Nobody wants to deep-dive into legacy code. You don't want to break stuff. So Million kind of helps out in that case.

**Nick Nisi:** \[27:51\] Yeah, no, that's great. And totally right. And I think that there's definitely a use case where you could bring this in and experiment with it. And it's relatively low-effort, I guess, for lack of a better word. You can get going pretty easy. And could you kind of start small, and scale, and maybe see -- I could immediately see me wanting to use this on something like a data grid or something, where I just have a ton of React nodes that get rendered, and you're trying to eke out as much performance on that as you possibly can. So could you use this as a "I'm just gonna start there and see. I'm trying to render a million rows or something, and see how it goes from there."

**Aiden Bai:** Yeah, totally. That's, that's exactly what we intended. One thing - I assume a lot of developers kind of have this perspective, where when they hit those React roadblocks, they can't do much with it. They can use virtualization libraries for data grids, or literal data grid libraries for data grids... But sometimes your application doesn't fit their constraints. It's not just data grids. There's different patterns. For example, if you have a color picker, how do you optimize the color picker performance?

So there's a lot of applications that's not just certain libraries that are specialized for that. And when people hit those roadblocks, what they do is they either deal with it, provide bad UX, or they have to switch to another framework, like Svelte or Solid, to render it. And that's not a great choice, right? You don't want bad UX, but you don't also want to migrate your entire codebase, or a big part of your codebase into another framework. So that's that kind of niche that Million services.

**Nick Nisi:** So where do you see this going in the future? What are the future roadmap plans for Million, and do you have any big goals in mind with it?

**Aiden Bai:** I can start off, and Toby can talk about the dev rel stuff. I think our team's goal, and kind of my goal as well, is for Million to just kind of perpetuate an idea. Right now it's a cool utility, a cool experimental thing, but fundamentally, how can we make our applications faster, without compromising? That's what we want to kind of push. And the tech we're pushing is the block virtual DOM. We're trying to get like "React, you can maybe try this out", or "Preact, maybe you can try this out." But more so I think there is kind of a disconnect here, especially from someone who's very new to the web space; there's often a trade-off between UX and DX, if you're not very good at web development. You either have to pick a fast framework, or you have to use React, or you have to -- there's choices, and it's often a trade-off. But fundamentally, how can we make UX and DX not a trade-off? That's what Million tries to push for.

But yeah, we're literally just a group of volunteers just going at it with basically no funding. We're just doing it because it's fun, and we believe that there's a purpose for Million.

**Nick Nisi:** Yeah, no, that's great.

**Aiden Bai:** Toby, you can talk about what we're doing for developer relations as well.

**Tobiloba Adedeji:** Yeah, let me start off by saying working at Million has been fun, and Aiden is right, we're just a bunch of people that are probably crazy and don't have anything to do with their free time... \[laughs\] But we just want to do open source and have fun.

At the moment, Million is \[unintelligible 00:31:16.27\] because most people, when they see Million, they're like "Oh, yeah, I can totally use this and optimize my entire application, and I don't have to worry about my application being slower." But yeah, we're educating developers... I mean, we're trying to gather as much information to improve developer experience for developers. Sometimes developers need a million applications, and they're like "Okay, this is when I need Million. I don't need Million for that, I need Million for this."

\[31:53\] So that's pretty much the goal. And if we can get to that level where the developer knows "If I have this amount of applications - okay, Million can solve this problem for me." So it's pretty much -- it's not about marketing, it's not about selling stuff to developers. We're not doing \[unintelligible 00:32:05.21\] We're trying to give you a solution that helps you as a developer.

**Nick Nisi:** Yeah, that's great. One other question that I meant to ask was around, like, do you see any -- I'm trying to think of the right word, but immovable rocks? Like, problems that you haven't quite figured out how to work around, or that could be stumbling blocks for Million as it grows, or as it tries to take on other use cases? And that could be anything. Like you mentioned, non-deterministic components, or things that. Are there just things that might be difficult to take on a 90% to 99% use case of all components?

**Aiden Bai:** Right. I remember I was in a Twitter Space with Theo a month ago, or something; or two months ago. And he was talking about Million. And the one thing I remember he's been saying is "Million is a very difficult problem, with not as much ROI as it should have." Just like projects like Bun. You're rewriting the entire JavaScript runtime to make marginal -- like, okay, in the grand scope of things, it's just so much performance optimization. And so the reason we kind of labeled Million as an experiment that you can try is because it is. We're taking a big, big bet on rewriting the virtual DOM, and making it compatible with React, and making an entire compiler for it... But I think it's a bet that we should take.

Obviously, there's a lot of technical constraints, like deterministic returns, or whatever. And our hope is the compiler can solve that for us, where we're able to statically analyze our component, and make it work. It's why Solid can work. Solid uses static analysis to optimize their JSX. But yeah, it's definitely a huge challenge, and sometimes most applications aren't apps, or web apps, and most applications aren't data grids either. And so the ROI there isn't super-high, unless it is super-high for you. But for us, it's okay, because if it does help that whatever percentage of people, that's worth it for us.

**Nick Nisi:** Yeah, totally. Yeah, I just love that. I remember coming into React and just struggling with it initially... And I was at JSConf when they announced it, and I have a tweet that's like "Oh, this is not gonna work. This is silly." So that was super-fun... But I don't know, I guess what I'm trying to say is I love how I came into the problem, and I was trying to work within the constraints of React. And you come in and you're just like "What if we could just dig through that, and make React faster?" To most, including myself, for the longest time the virtual DOM was just this nebulous black box that I never touch, and it just does the magic. And you're just like "Well, what if we just peer into that and we see exactly what it's doing, and we just change it and make it so much better?" I just love the curiosity of that, and it's just such a highlight of why it's good to be curious about these things.

**Aiden Bai:** Yeah. I don't think I'm the only one either. With things Preact Signals, where we bring literal signals to React, and direct rendering - that's also a cool model. Preact is also doing their own compatibility library in \[unintelligible 00:35:40.29\] If you look at the JS framework benchmark, it's sometimes faster than Solid, which is crazy. It uses a virtual DOM, but it's faster. And so it's really, really cool.

\[35:54\] I think I'm also reflecting -- if you know Ryan Carniato, the creator of Solid.js - his sentiments are... The Solid community has been such an inspiration for us, not only because their technology is super-cool, but also kind of their curiosity; their curiosity to explore very experimental things like signals, and over here we are exploring things like block virtual DOM. And I think Million is one in many of these new things. People are excited about new rendering solutions, and people are tired of dealing with slow React applications. And so it's really, really cool to see a lot of innovation around RFC, around signals, around off-screen rendering, about concurrent rendering, about block virtual DOM... There's so much cool stuff happening, and I'm really, really excited for the future.

**Nick Nisi:** Likewise. And yeah, I would definitely put Million up there with projects like that, that are not just sitting on the technology as it is, but actively looking, like "What if we go our own way?" and in the case of Solid, or Qwik, or those, "and we just fundamentally change things, but we prove out that it doesn't have to be in this one way, and this one way only?" And that's the same thing with Deno, and Bun, and just up and down the JavaScript ecosystem chain; there is people just pecking away at the status quo, and changing it, and Million's up there, too. So that's just so exciting, and I love projects like this, that really - they change the way you think about things, they make you question "What is the virtual DOM doing? What can we do to make it better? Could that be something that we incorporate back into React, or could it be something that gets incorporated into build systems?", in just the way that you're doing, with plugins into Vite, and Next, and all of that? And yeah, just constantly questioning it; not just being like "This is the way that it is, and the way that it'll always be." It's how we get better things, and so I appreciate your curiosity and willingness to push that forward.

**Aiden Bai:** Yeah, I really appreciate it. We're not on the level of Solid, or Qwik innovation, but we hope to be there someday.

**Nick Nisi:** These projects all start out with just finding some fundamental question, or constant, and saying "That doesn't have to be a constant. Let's change it and figure out some different way." So yeah, that's awesome.

**Tobiloba Adedeji:** I mean, one thing I'm looking forward to is having more developers \[unintelligible 00:38:18.25\] work with Million and want to test it out. That might actually help us discover more things we could explore with Million, and maybe add us features, or something. Because it's not that \[unintelligible 00:38:35.00\] It would be nice.

**Nick Nisi:** Yeah. So that is one call-out that we can ask of the audience, is to go check it out at -- it's Million.dev, right?

**Aiden Bai:** Yes.

**Nick Nisi:** Awesome. Awesome domain name. Go check it out, go give it a try. And what else? How can folks get involved with this project?

**Aiden Bai:** I think one thing is -- first try Million. But second, be excited about new technologies. I think the JavaScript community has been really good on Twitter, because we're all nerds on Twitter. We're all the fringe nerds who like new stuff. But if you have a co-worker, a friend, or maybe if you have a cousin who is coding, or something that, tell them about these new technologies. It shouldn't be the 1% of people who have access on Twitter; everyone should have access to these new technologies and try them out. So be excited about these things, share these ideas, and we can make a better web together.

**Nick Nisi:** I love it. I think that's a perfect place to end it, and we will have links to all this in the shownotes. We'll have links -- I believe you also mentioned there's a Discord for Millions. We'll have links to that as well. Anything else that you'd like to say before we play us out?

**Aiden Bai:** Subscribe to JS Party, or whatever the thing is...

**Nick Nisi:** Yes, that's great advice. JSParty.fm. \[laughs\] How about you, Toby? Anything that you'd to let us know, or how can we keep in touch with you - and you as well, Aiden? On Twitter? Is that a really good place to reach out?

**Aiden Bai:** Yeah, I'm on Twitter at @aidanybai, or just look up Aiden Bai on Google. You'll find me.

**Tobiloba Adedeji:** Yeah, so you can check me out \[unintelligible 00:40:25.18\] and on Twitter. But I'd actually like for you to join - for new developers, or whoever, if you want to help out, join the Discord. You can do documentation work, and do code contributions... And as always -- this is open source anyway, so there's always room for people to join. So that's \[unintelligible 00:40:45.04\]

**Nick Nisi:** Awesome. Well, Aiden, Toby, I want to thank you both so much for joining me today, and telling us about Million. Like I said, it's a really cool project. I love the curiosity that obviously went into it, and the solutions that you have coming out of it, and it's definitely something that I'm gonna be playing around with, and adding some blocks to see what mischief I can get into. So thank you both so much for coming on, and we'll catch you next time.

**Aiden Bai:** Bye.
