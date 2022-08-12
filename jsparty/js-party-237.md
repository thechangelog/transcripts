**Jerod Santo:** Hello, hello, everybody. It's Jerod, your internet friend, and I am excited for a great JS Partytown today... We'll see about that. Teaser. I'm joined today by my friend, Kball. What's up, man?

**Kevin Ball:** Hello, hello! Excited for this show.

**Jerod Santo:** I'm excited too. We have Miško Hevery, you may know him from Angular. He's now working at Builder.io as the CTO, and he has a new framework for us to check out, Qwik. Miško, welcome.

**Miško Hevery:** Thanks for having me.

**Jerod Santo:** We're excited. We're gonna let you give us the sales pitch for Qwik. Why not just it's a good thing for people to use, but like Kball should be using it, Jerod should be using it. We're gonna get into that, and all the details. I'm sure we have plenty of questions for you around it. But first, it's time for our regular segment. It's time for Holla.

Of course, Holla is our opportunity to holla at different community events, meetups and things going around the JavaScript and web community. Today we are Holla-ing at React Brussels. This is the first in-person React conference in the heart of Europe. It's taking place October 14th, 2022. As I said in-person, it's a hybrid, so it'll also be online. Tickets are on sale now. They've announced the first round of speakers, some awesome speakers announced already, and they're announcing more on August 1st. So if you're listening live, you can get in on the cheapest tickets available today. If you're listening after we produced it, sorry, price has already gone up.

So check out React Brussels. I've talked to the organizers, they're very cool, very nice people. In fact, one of them was at JS Nation, hanging out with Nick Nisi while we were there... And it sounds like a really awesome conference. I've never been to Brussels myself. Have either of you been to Brussels?

**Kevin Ball:** \[00:04:18.21\] I have not.

**Jerod Santo:** Kball no. Miško?

**Miško Hevery:** I think I flew through there at some point.

**Jerod Santo:** Okay. Airports almost count. I've definitely -- I would upgrade my number of cities I've been through if I count the airports... But I've never been in Brussels either, and I would certainly love to go; if you're in the area October 14th, it sounds like a fun time. Check it out at react.brussels.

Okay, let's get into it, Qwik, an HTML-first framework. Miško, there's lots of frameworks out there. You're the creator of one of them. It's still out there, people still use it, Kball. Lots of people are still using it. But there's React, there's Vue, there's Svelte, there's new frameworks like Fresh, from the Deno side. "Why another framework?", the million-dollar question.

**Miško Hevery:** Yeah, and that's a very good place to start, "Why another framework?" And you're right, there is a dime a dozen for them, \[unintelligible 00:05:08.08\] out there. So I'm gonna go on a limb here, and hopefully I'm not going to be too controversial, and I'm gonna say that all the existing frameworks we are familiar with, Angular Vue, Svelte etc... And Angular - I'm going to maybe take some credit here - kind of started the trend of component-based client side frameworks... They all are essentially the same, in the sense that how they work. But of course, the syntax and the DX is very different, right? So do you like your templates in the form of a string? Do you like them in the form of a JSX? Do you like him inline, together with the code, or separated in the files, etc? These are all different kinds of trade-offs different frameworks make... But in the heart of them, like at the core of how they work, they're all essentially the same. And what I mean by that is that they really have one concern, and that is to just render things on the client... And that's pretty much what they kind of all do. And so Qwik is a different thing, right? Qwik is what I call resumable... And the best way I can explain resumable is -- well let me back off a second. So the existing frameworks that we have, I call them replayable, meaning that when they start up on the client - so if you do server-side rendering - they have to replay all of the work that the server did in order to get them in the correct state. And we have a word for that, and that word is hydration. And what that means is that when you navigate to a page, you might immediately see server-side-rendered content, but there is some time before you can actually interact with the page. And the problem is, the more complicated the page becomes, the more time it requires to wake up. And of course, we have tricks like lazy-loading, but it turns out lazy-loading doesn't quite work here, because lazy-loading is only useful for components that are not currently in the DOM tree. If a component is in the DOM tree, you have to hydrate it, and that means that even if it's a lazy-loaded component, you have to load it, and then do all this stuff.

So all of that means in practice that, especially on mobile devices and slow connections, the startup performance is kind of bad. And Google has this thing called Google Page Speed Score, and they measure and they look at different websites and how they do, and they're just trying to kind of push the industry towards faster, better experiences for the end users... And the Google Page Speed Score is not very good for most websites, right? And the reason, I'm gonna argue, for that is because all these frameworks have this thing called hydration. So I kind of spoke for a long time on this thing and I haven't really talked about Qwik, but does that make sense so far?

**Jerod Santo:** I'm with you. Kball, are you with him?

**Kevin Ball:** Yeah.

**Miško Hevery:** Okay. So before I kind of explain how Qwik works, I think it's useful to kind of go and do a parallel. So back in the day when VMware first came out, virtual machines, I was blown away with a particular thing about them, which is that on my host computer I can boot up let's say Linux as my virtual machine, and the Linux boots up, goes through its boot-up process, and finally, at some point, I can log in. And once I'm logged in, I can, let's say, open up a Chrome browser, and I can navigate to like Google Docs, for example, and I can start writing my document. And at some point, I can just save the virtual machine into a disk, and I can take that file and send it to a friend of mine, and that friend can then just open the file up and continue exactly where I left off...

\[00:08:17.20\] Specifically, they don't have to go through the boot-up process, the login process, the opening up of the Chrome, or Google Docs, or anything like that; they literally -- bam, they're in the final thing, and ready to go. And this is what I call reasonable. And it is specifically how our current frameworks do not work, right? They can't do that trick. Instead, what they do is they essentially - every time you need to navigate to a page, for all practical purposes they have to boot up. And this boot-up process, what we call hydration, is really the way the framework recovers all of the information about where the components are, where the listeners are, what is the data, and so on and so forth.

And we have some tricks... We can prevent the client application from doing fetch requests back to the server by prefetching, and pre-populating local caches that we can inline into our page... But at the end of the day, the application has to replay, it has to hydrate, it has to boot up, it has to go through all of these phases. And all of these phases kind of slow us down in terms of the startup. What it means in practice is that if somebody sends you a link on Twitter or somewhere and says "Look at these awesome shoes. You should go buy them." You get the link, you click on it, and you see the shoes immediately, and then you're like "Yeah, I want to buy it", I add to shopping cart and nothing happens for several seconds, right? And at some point, you're just like "You know what - I don't really need the shoes."

**Jerod Santo:** Right.

**Miško Hevery:** And you leave. And so if we can improve the startup performance, I think it's a huge impact for companies. And Amazon has done tons of studies on this that they basically published, and I don't know the exact numbers, but basically they say for every 100 milliseconds that we can improve rendering performance and \[unintelligible 00:09:51.06\] performance, it's like X million dollars worth of revenue for us, right? So they actually know this, and they spent huge amounts of time and effort making sure that they can be as fast as possible.

And so this is one of the reasons actually that Amazon actually doesn't use any framework... Because all frameworks have this hydration or replayability property, this startup cost property, and it would make the startup performance of Amazon slow... And so they have kind of a custom -- I don't know what they do, but it's not any existing framework, right?

**Jerod Santo:** I just wanted to comment real quick on the impulse buy of those shoes... The first three or four seconds, you're like "I want to buy these suckers." But the point is taken; it's just funny to think about somebody clicking a link and just like ready to buy shoes before the thing can even download the payload. That being said, around the world, different places - maybe that can be 8, 9, 10, 12 seconds if things are not going well.

**Miško Hevery:** So Google Page Speed emulates things, and you can go and navigate to many popular brands - I don't want to call anybody out - and Google Page Speed will say "30 seconds before the page is interactive."

**Jerod Santo:** Really?

**Miško Hevery:** And it's like common big brands, right? So the point is you can go and look at top 50 ecommerce websites, and what you will discover is that I think the number -- in terms of performance, Google puts them in the red, yellow and green bucket. Top 50 websites, right? Nobody's in the green. Green is a unicorn, it doesn't exist. And I know for your simple Hello World website you can probably get green, but I'm talking about a real ecommerce website with the real needs, right? Nobody's in the green. There are very few in the yellow. I believe Amazon is in the yellow, I believe IKEA is in the yellow, and Staples, which kind of surprises me, is in the yellow. And then everybody else - red for you.

**Jerod Santo:** Wow. Even like Nike.

**Miško Hevery:** Yeah, yeah.

**Jerod Santo:** I mean, assuming...

**Miško Hevery:** Everyone. And so the interesting thing for me is that we have this thing in the industry where - say your website is slow. What do we do is we kind of blame the developers, like "Oh, your developers are not very good. They messed up. They should have done this, this, this."

\[00:11:56.20\] It's easy to kind of blame the developer for this thing. But it turns out the developer has actually very little choice about this. Or to put it differently, if I practice the best practices for whatever framework I'm using, I will end up in a place that is less than ideal, right? Like, you don't get a performant website out of the box by just following the best practices, right? It's usually like some crazy hacks that you have to do and spend time on afterwards, in order to get there.

**Kevin Ball:** So I'd love to dig in a little bit, actually, on the virtual machine analogy... Because I think it's quite interesting to think about. And I don't know the numbers on this, but when you send a virtual machine, with state, it's booted up, I would assume and correct me if you know better on this, but you have to send much more data across, because you're sending application state and all of these different things, as compared to simply booting from a boot file, or something like that.

And I know in the sort of web world - was at CloudFlare, or someone was looking at doing web workers and trying to make them boot faster, so that if you were running JavaScript, you wouldn't have to boot up the whole JavaScript process. And they compiled it down to an image in Web Assembly, and it was much, much faster to boot. But they're doing that on the machine, where sending bytes over the wire is not a problem. So I'm kind of curious, first of all, do you happen to know what is the space differential in terms of how much data you need to send to kind of boot up in space, and how does that play out when we're talking about something that's going to happen over a web connection, potentially a slow one?

**Miško Hevery:** Yeah. So that's all excellent questions. Actually, I think the short answer is you're taking the analogy too far, I think.

**Kevin Ball:** Fair enough. Okay.

**Jerod Santo:** I was wondering that as well...

**Miško Hevery:** Yeah. So what I'm trying to get at is that we have this property we call resumability, which is that the application can resume where the server left off. And what we mean by that is that at no point should there be duplication of work. Like, if the server did some work, then the client shouldn't have to do that. Now, in a normal VM machine - yes, you serialize the whole memory, which is huge, and that's not kind of how this works. Like, we're not sending a serialized state in here. Instead, what we do is we basically say -- what we want to do is want to serialize the state of the application, as well as the state of the framework. People forget about the state of their framework, because usually the framework kind of deals for it on your own right. But when you're, let's say, using Next.js with React - and by the way, I'm not picking on any particular framework; they all kind of work the same way... So I'm just going to use React and Next.js because it's a common thing that people understand. So if you use Next.js and React, Next.js will serialize your state I think in something called a next data property, or something like that.

**Kevin Ball:** Yeah. And it'll just dump that on the page, and everything boots up from there.

**Miško Hevery:** Yeah, it'll just dump that on the page, right? So that's the state of the app, so to speak. But what it doesn't dump on a page, because React doesn't kind of expose it, is the state of the framework. What I mean by state of the framework is like the framework needs to know what are the components, what are the listeners, what do I do when you click on this button, and so on and so forth. There's a huge amount of state that exists inside of the React that isn't exposed to you; and you don't usually think about it, but it's there. And what Qwik does is it basically says "Not only am I going to serialize the app state, which others already do, I'm also going to serialize the internal state of the framework itself, which others don't do."

So that's one thing that we do differently. The second thing -- and by the way, the amount of data isn't that big; like, the amount of state information is not that big, right? The second thing we do is we now have to also serialize things like where are the component boundaries, and we can serialize that directly into the HTML by adding special tags. And we also need to serialize where are the listeners in a DOM tree, and we can do that as well by adding special attribute tags into the HTML. So between HTML and your JSON payload that represents the state of the system, we can basically serialize everything we need to make this thing run.

Now, of course, the next question is "Well, where's the code?" So that's the next big problem. And existing frameworks have this particular problem which I call single-entrypoint problem. What it means is that the existing framework has a single main method, so to speak, where the application boots up. And this main method is the only way to get into the application system, and therefore it is the only way to get the system up and running. So it's the only way to create chunks, bundles, and so on and so forth.

\[00:16:19.02\] When you have something that's resumable, like Qwik - let's say you just have a page with two buttons. If I click on button A, then I'm entering the system through a different path, different chunk, different code that I have to download than when I click on button B. And so Qwik not only has to figure out how to serialize all the state, it has a second problem, which is that it needs to take your source code and break it down into lots and lots of small JavaScript files. Or the other way to think about it is it has to break it up into lots of entrypoints. Every single interaction that you can do with a page is a potential entrypoint that re-enters the system in a different way.

In existing frameworks we have this problem that like, well, they end up with a single chunk, and therefore you have to download the whole thing at once. And not only there's the whole thing at once, you can't really resume it, because you have to kind of execute the main method in order to kind of build up the internal things. What Qwik needs to do is it needs to take the source code and break it up into lots and lots and lots of smaller ones, create lots of entry points, and then every component, every listener, every effect, and so on and so forth, becomes a separate entrypoint in a system. And then when I click button A, I only download the buttons A's behavior. And when I click on button B, I only download button B's behavior.

So the end result here is that we are actually downloading a lot less code than an equivalent, a regular application. And specifically, if you look at a typical app, lots of components are what I would call static. In other words, they're just kind of for the layout purposes, they don't actually do anything. And Qwik can basically look at all this stuff and say "This is all static stuff, it's already server-side rendered. I will never, ever need to re-render this on a client, and therefore this code never gets shipped to the client." So you end up with actually a lot less JavaScript than you would on an equivalent framework application.

**Kevin Ball:** So this is reminding me actually a lot about Svelte, which I think in some ways is different than React, Vue, Angular they take because of the pre-compile. And I am not a Svelte expert, but I have played around with it a little bit, and I think they do some amount of the same types of optimizations, where because they're pre-compiling, they can have multiple entry points. If there's no dynamism, you don't get any JavaScript for a component, and they don't have this sort of virtual DOM thing which creates that need for the centralized main loop that you have in like a Vue or a React. But I think they still do have a hydration problem.

**Miško Hevery:** Yeah.

**Kevin Ball:** So I'm kind of curious, are those problems deeply connected for you?

**Miško Hevery:** They are; they are absolutely connected. Actually, I'm also not an expert at Svelte, but my understanding is that they only have one entry-point; I don't think they can create separate ones. The thing that Svelte does really well is they can prune the tree; because they don't have VDOM, they can prune the tree and say "Oh, these things never change, and therefore I don't have to do updates on them." But they still have hydration, because in order to recover the state -- like, Svelte is also reactive, which means like if something changes, they know how to just update a specific part on the page, which is all great. But in order to rebuild the information about where the components are, where the reactivity are... Like, if I change this data, I have to change this component, and so on and so forth; in order to rebuild all this information, they have to execute the application, at least once, at the very beginning.

The theme for all of these frameworks is that in order to recover the internal state of the framework, they have to execute the application. The process of executing of the application is what rebuilds the internal state of the framework.

\[00:19:49.22\] And you're correct, that different frameworks you can say have different efficiency factors in terms of how good they are at rebuilding. But I think Qwik is in a category of its own, because it just serializes everything, and you don't have to download anything in order to make it page-interactive, right?

So imagine, anything you can build in Svelte, you can build in React, and vice-versa, right? We all agree that all these frameworks are kind of universally the same thing kind of apps that they allow you to build. And the same is true also for Qwik; whatever you can build in Svelte, React, Vue, Angular and so on, you can also build in Qwik. So the kinds of applications you build are absolutely identical. What's different is how the application resumes on the client, and all kinds of other implications we can get into in this show. But the resumability is kind of the key difference.

**Break:** \[00:20:40.14\]

**Jerod Santo:** So I'm thinking about the statement that you said about the server-side rendering and the client-side rendering. With Qwik there's never any duplication, there's never any work that's done twice... And I'm curious, is Qwik aware of server, is the server aware of Qwik? How does the server know the state of the page in order to not rerender things that have already been updated since it rendered last? Is there server-side -- is it full-stack, or...? I don't understand how it works.

**Miško Hevery:** Yes, it's an excellent question. So the big difference is that, as I said, existing frameworks, really they only care about client-side rendering. And the reason why Qwik can do all these things is that quack doesn't just care about client-side rendering, it also cares about server-side rendering, it also cares about serialization of the data, sending the data across, deserialization, bundling, breaking the application into chunks, and so on, and so forth. So in that sense, Qwik is full-stack; it cares about the whole thing, because that's the only way Qwik can deliver all these things. We also care about prefetching of the code as well...

So basically, all of the concerns that you as a developer need to worry about in terms of what makes an application performant are directly the responsibility or the things that the framework cares about, and has an opinion about, and lays everything out for you. And so that's kind of the biggest difference between these; because we own the whole thing end-to-end, we can do certain things that others cannot. Let me give you an example. In order to break up the application into pieces - let's take a simple example. Let's say you have a component that's a counter; there's a button, you click on a button, and it increments, right? We need to be able to take this listener for the button and be able to lazy-load it.

\[00:23:48.22\] Now, in this particular example, of course, when you click on a button, you're also going to rerender the component, and so they'll always come together. But let's say it's a more complicated example that sometimes you don't have to rerender it. So the problem is that you do something like a button \[unintelligible 00:24:00.04\] or something along those lines, right? You cannot take that function, that closure that increments the counter and lazy-load it because it closes over the state. Right? So if you pull out that function and make it lazy-loadable by itself, the function will not work, because it will say, "Well, what's the current count? Like, I'm incrementing something, but what is it? How do I get it?" And if you just lazy-load code, I say that the code has amnesia. It doesn't have the information that you need.

So as developers, we know how to serialize code. That's just JavaScript. We know how to serialize data - well, that's just JSON. But what we don't really know is how to serialize closures, right? Closure is function plus data. And so the thing that Qwik can do is it can serialize closures; so it can take the closure that represents your button that's add one to the count, and we know how to extract that on the top level and serialize the associated data with it, and then make that whole thing lazy-loadable. But the only way to do that is if the bundler and the runtime cooperate, right? But existing frameworks, they're like "Bundling is not my problem" and therefore, a bundler can't do anything that would change the semantics of the code. And so the bundlers are very limited in what they can do, because doing something crazy would make the application be broken, right? Whereas the frameworks are like "Well, bundling is not our problem" and so the amount of things you can do are very minimal. We aren't, because we own the whole thing. We can do magical things where we can be like "Oh, that's a closure that closes a bunch of variables. Let me extract it to a top-level function. I understand which variables you closed over, I know how to serialize them, I know how to recover them. I'm going to make a special kind of function for you that of course won't run by itself", but the framework expects this and the framework knows how to put everything back together in such a way to kind of recover everything. So this is where the magic is.

**Kevin Ball:** So you are transforming the code, you're applying custom compilations in order to make it resumable.

**Miško Hevery:** That's right.

**Kevin Ball:** Interesting...

**Miško Hevery:** So you write code... Qwik DX (developer experience) is extremely similar to React. So if you know React, you know Qwik. And this is intentional. This is not like -- we thought about this, and we're like" This is the way to do it." So we intentionally designed the DX to be like React. So you write your functions, your components, and so on and so forth.

Now, Qwik has a special thing where we add dollar signs to the API. So it's not use effect; we actually understand server and client, so we added an extra word in there; it's used client effect, dollar sign. And the dollar sign communicates two things - it both communicates to the developer and also to what we call the optimizer, the thing that can rearrange the source code. So the optimizer, it basically says, "Pull this out as a lazy-loadable thing" and to the developer it basically says "Special rules apply here. You can't just do anything here. You can do a lot of things, but special rules apply." And basically, the special rules that you have to understand is, one, this thing is going to be behind the lazy loaded boundary, which means it's a promise, it's not a direct thing. And two is we can serialize lots of things, but not everything. So you have to be careful about what kind of things are serializable. But the framework will eagerly tell you that you're trying to like capture something that's not serializable, so that we have a good developer experience. But for the most part, you'd be surprised how we basically figured out how to serialize just about anything.

So obviously, the basic things like objects, primitives are easy. But we know how to serialize closures, which is kind of mind-blowing. But I guess we know how to serialize that, so that already gives you a lot of things. And we recently figured out how to serialize promises, which is even more mind-blowing, right?

\[00:27:59.14\] And so certain things we cannot serialize, like -- I don't know, if you create a set interval, and then you get a number back, and it's a number -- like, that has no meaning outside of the server, or the place where you got it. So there are constraints you have to understand and work with. But for the most part, you could just like write your application the way you want. We know how to break it up into pieces... And that's extremely difficult. By the way, that's one of the blackest magic we have with Qwik. I mean, I'm happy to go into the details, it's not like a secret or anything... But it is this thing that was super-hard to figure out. And now because we have that, we get the resumability property.

So that on the client, let's say you have the counter example - on a client, let's say you click the button that says Add one. And let's say this button randomly decided whether or not to increment the value or not, right? So when you click on the button, the system has to download the closure that represents the incrementer. There is no choice about that. You have to download that. And then let's say that the button decides that it's not going to increment things, because it's random. Then the system is done. There's nothing more to download. But if the button randomly decides, "Actually, I am going to increment the value", then now the system has to be reactive and say, "Oh, you modified this thing. Which component is invalidated because of the action you have done?" And most frameworks are like "Oh, I give up. Just rerender everything." And then there's like ways to kind of prune the tree. But when you say "Give up and render everything", you just mean like "Oh, download the whole application." That's not a thing for us.

Reactive frameworks are like, "Oh, I know. You modify this, therefore I have to modify this component." And so they have an advantage. Except in order for them to rebuild the reactivity graph, they have to run the application once at the very beginning. So that's useless, right? So the thing that Qwik understands is what is the reactivity graph, but this reactivity graph is actually serialized into the HTML, so that when you go and modify the count value, Qwik can say, "A-ha, I know exactly which component I need to download and update." And so it can be extremely surgical about it.

Now imagine a page where you have Add to shopping cart, right? You have your prototypical shoe, you say Add to the shopping cart. So when you hit that button, the code behind it will go probably and update some shopping cart data object, which then means that I have to rerender the shopping cart. So you have to download the code for clicking on the button for Add to the shopping cart, and you have to download the code for the rendering of the shopping cart. But notice what you didn't download. First of all, you didn't download anything else on the page, but you didn't even download the component associated that originally rendered the button for adding to the shopping cart. Because you didn't change that part, you didn't \[unintelligible 00:30:40.16\] anything over there, so why should we even download this, right?

So the one way to think about it is one of the things that Qwik is trying to do is to say, "Look, if you're going to go through the trouble of downloading some JavaScript, then you'd better execute the whole thing, right?" We don't want to be in a situation where we download JavaScript, and then don't execute it. If you look at code coverage for a Qwik application, you should be pretty close to a hundred, because we're only downloading and executing stuff that we actually need to do, right?

And so the magical bit is like how do you take an application that is written in a standard React-like way, and break it up into lots and lots of entrypoints, create ideal bundle sizes, and do all of this magic that needs to happen, and then basically push all of this thing to the browser in a way where the developer doesn't have to think about any of this stuff?

**Kevin Ball:** So I want to dig into one particular thing there, and that's how are you thinking about how state moves through these different components? Because I was thinking about your example where you have a button somewhere on a page, and you have a shopping cart somewhere else on the page, and you change some state based on the button, and it only impacts the shopping cart.

**Miško Hevery:** Yeah.

**Kevin Ball:** In many component-based applications, that state may live in like a prop or something that is propagated through a number of parents to get down into whatever the actual component that's depending on it is.

**Miško Hevery:** \[00:32:05.24\] Yeah. Our current implementation is inspired by Mobex, or I believe what Svelte does as well. So we have stores, and stores have properties, and you pass stores around. And then when you read from the store, that's how we know that a subscription has happened. And when you write into a store, that's how we know that you modified something. That's one way to do it.

We're also actually thinking hard about what SolidJS does. They have signals, and that is another interesting thing that we would like to explore. We're kind of exploring it, we're liking it... We'll see what the thing actually lands. But yeah, the idea is that you pass stores rather than props, so that you don't do much prop drilling. You can also have context etc. But yeah, if you do the classical prop drilling, then you have the problem that you'll force rerendering all throughout the system, and you don't want to do that, right?

**Kevin Ball:** Yeah, that makes sense. Vue also has a store-based system a lot of the time so, yeah...

**Miško Hevery:** Yeah, what I'm kind of getting at is that like your developer experience for building in the application is very much unchanged. And it's probably closest to React, but maybe some things like stores from Vue, or Svelte etc. But fundamentally, the DX is something you're very, very familiar with, right? But that's not what we're selling here. We're not selling you a better DX, we're selling you a better experience for your end user, because we are smarter in the way we bundle, execute and deliver the information to the client.

**Jerod Santo:** So what's the practical difference then? What you're offering with Qwik - let's say the DX is relatively the same as using React; you put some dollar signs at the end of things, and there's a few more rules, or different rules. What's the practical difference? Is it an order of magnitude, in a complicated application? We're talking about your apps can be 10x faster, 100x? Like, what happens when I use Qwik instead of React?

**Miško Hevery:** Yeah. So we have our homepage, Builder IO homepage, and we actually have -- that home page originally was a Next.js React homepage... And we've just switched it over to Qwik, and actually, we have the ability to run both pages simultaneously. So if you go to \[unintelligible 00:34:00.27\] you get the Next.js one, if you just do without anything, you get the Qwik one.

If you open up in Google Page Speed, we get -- I think around 40 our score is on Google Page Speed on Next.js, and about 95 in Qwik. Now, I'm not picking up on Next.js. We could have done this in any other framework, and I think the numbers will be about the same, because they all fundamentally have hydration that's happening. And what you're really paying for is the hydration here, right?

**Jerod Santo:** Okay.

**Miško Hevery:** So no matter which framework you can choose out of that category, I think you'll see similar numbers. If you go to Chrome and if you open up DevTools and you go to the performance, and the performance you record at the startup thing, what you'll see is that the builder.io page on a desktop computers spends I believe something around 80 milliseconds executing JavaScript at startup, and that includes Qwik, and Partytown, and third party scripts, and everything. And in the Next.js version it takes, I believe, 800 milliseconds. So we're talking 10x improvement in the amount of JavaScript that the browser has to execute on startup.

But I think the improvement is even greater, because when you have a regular framework -- let's go to the example of somebody sends you a link to the shoe, and there is a Buy button you want to click. When you do the normal frameworks, you render everything, there's a button, and you click on the button, and nothing's happened, because you clicked on it too early, right? And so you'll have to wait until hydration is finished before you can click on a button. And that can take time. On a mobile device, it can take literally tens of seconds.

The nice property of Qwik is that the moment Qwik HTML loads, the HTML contains all of the information about where the listeners are, and it also includes a little tiny, what we call a polyfill, which is a piece of JavaScript that sets up a global listener for everything at the root, which is super-tiny; it's about one kilobyte, and it executes in under 10 milliseconds. It costs nothing, basically.

\[00:36:05.16\] And this polyfill is ready to listen for things immediately. So as soon as the HTML shows up with a button, inlined inside of the HTML is a script tag that already executed, is already listening for click buttons. So when you go and click, that click goes directly and gets immediately processed. And now of course you have to fetch the JavaScript, but instead of fetching this huge thing which is the whole application, you're fetching just the code necessary for that button. You cannot get any more efficient. We have removed everything that is strictly not needed, and we ended up with the absolute bare essentials. There's nothing else left to remove.

The other thing we do is we also know statistically - and also we can kind of guess through heuristics - as to what are the possible things that you as a developer can do. And so even before you click on a button, we already instruct the browser with a prefetch link to say "This is most likely what's going to happen, so go and start prefetching this JavaScript." We don't execute the JavaScript, we're just prefetching it. But the nice property is that if we guessed wrong, and you click on a button, your request goes in front of the prefetch request, right? So you immediately even pull yourself up.

So all of this basically means is that you are essentially ready to interact with the page immediately. It's hard to imagine a scenario where the interaction would be even better. I don't know what else could be removed out of this particular thing, this equation, right?

**Jerod Santo:** Just a blank page. Just white -- there's nothing.

**Miško Hevery:** Exactly. \[laughs\]

**Jerod Santo:** So why did you guys build this? Was builder.io too slow, and you hit a roadblock, and you're like "We can't possibly make it any better because of hydration, and so here comes -- I'm Miško, I'm good at making frameworks, I'm gonna make one", or what was the genesis of why would you build Qwik and not just do what the rest of us do, which is ship kinda slow websites that are still okay?

**Miško Hevery:** Yeah, so that's a good question. Actually, back in 2019, I think, I gave a talk in NGConf on crazy stuff I think about. And in this talk, I actually proposed this idea of resumability. Now, I think the idea is -- I don't know of any other frameworks at the time that had this concept of resumability. But Google internally had this thing called WiZ, or still has this thing called WiZ \[unintelligible 00:38:19.21\] around search, and Google Photos, and those are very interactive, fast sites, right? And it doesn't quite have resumability; depends on how you define it. But it has this idea of having these global listeners, and putting as much information into the DOM as possible, so that the client can, for all practical purposes, resume. The reason I'm kind of hesitating to use the word "resume" is because there is no equivalent, like execution on a server that saves the state and then sends it. It's more like the server runs Java code, it has nothing to do with anything, and it just pre-assembles everything in the correct order. But the effect is essentially the same, that you have these super-fast startup applications, right? So WiZ is kind of maybe the inspiration for this particular thing. And I wanted to see, could I take some ideas behind WiZ and turn it into, at that point, Angular?

But what I realized along the way is that the kind of changes you have to do to the framework are so drastic, that it would not be possible to -- basically, in a sense, you would be making a brand new framework, right? Like, you come to Qwik and you're like "Oh, it kind of looks like React." You think it's React. Well, yes, for 99% of the time; but the 1% of the time, it is so different that it will definitely break your stuff, right? You can't have a framework that's like 99% compatible, right? Like, that doesn't work, because even the simplest stuff usually has a huge number of things, and that 1% will basically make sure that your app will never run.

**Kevin Ball:** I'd be curious to dig into what that 1% is. If I were to take a React app and try to drop it in Qwik, what would break?

**Miško Hevery:** \[00:39:57.28\] Yeah, a few things. So first of all, Qwik has to have this concept of asynchronous rendering. What I mean by that is that all existing frameworks have this idea of a asynchronous rendering; when you call the render function, all the data has to be ready to go and you render. Now, there are, I would say, hacks, or like React Suspense, where like "Oh, we've come across a promise, so we basically stopped the rendering, quit, and then the promise gets resolved, and we restart the rendering from the route and hopefully we'll end up in a different place", right? That's not really what I mean by asynchronous rendering. What I mean by that is - no, our rendering system can actually render things, and then it comes across like a lazy-loaded boundary, like a component, and it says, "Well, I have to wait. It's a promise." And so it literally waits, and when the promise resolves, it continues where it left off, and continues going further. And it's not just lazy-loading components, but also lazy-loading data that also has this particular problem. And then when you do that, you have this problem of like "I can't render directly to the DOM immediately, because if I do, then the user will see intermediate values, and we don't want to do that." So you have to have kind of a journal that says "These are all the operations I have to apply to the DOM when everything is done." Once I finish rendering, so to speak, internally, I flush the DOM operation.

Now, the nice benefit of that is that when the framework runs, it doesn't run in like these huge, monolithic execution blocks, right? Instead, it's just all these tiny little promises being resolved. What it means is that for animation, this is great, because there is really no point where we have huge, large operations, right? It's always broken up into slots of small async operations, and if the browser needs to insert itself and do some updates or animations or something like that, it can always do so.

**Kevin Ball:** Yeah, that's great. You're never gonna freeze the browser that way.

**Miško Hevery:** Yeah, it's a nice benefit. And so when you actually look at Qwik applications running, if you look at Google Page Speed scores, you'll see that there is lots of stuff happening when you're updating things, but it's all tiny little things. And so the browser never basically gives you this red flag, saying "You took 40 milliseconds to do something, and therefore you messed up my rendering of the updates of animations." That doesn't actually happen. And it's an interesting side effect... Like, we didn't intend to solve this particular problem, but we just unintentionally solved it because of just how the system works.

**Break:** \[00:42:15.08\]

**Jerod Santo:** So you were telling us why you built Qwik, a builder; you're getting very excited, I can tell, you get very excited about these things... And we never actually learned the real nut of why -- finish the story, so to speak.

**Miško Hevery:** Yes, I gave the talk in -- I think was in May 2019 (I can't remember) at NGConf, and I've kind of laid it out. And even in that talk, I actually talked about the idea of resumability. If you have time, you should watch it. I think it's kind of hilarious, because whenever I watch it, I'm like, "This is exactly --", like, it's amusing to me just how many... Even the vocabulary how I got right.

Anyways, so I kind of made the talk, and then nothing happened for years, and it was kind of in the back of my head. And so I started kind of experimenting with it about last year. And at the same time, I kind of wanted to just try something different, something new, right? I mean, I was at Google for 16 years, and that's a long time to be anywhere. I kind of was feeling like "I'm either gonna like retire here, or I have to try new things and explore new things." And so I started exploring, and I came across a company called Builder.io. And what I found fascinating about them is that they had a kind of a visual editor that allows marketing folks to update the websites, but in a way where it's compatible with the engineers' vision of components, and engineers' vision of "Oh, I'm using React, and so I don't want you to just like randomly do random stuff. I want you to actually basically create a React component in my page."

So it was kind of a headless CMS system, but it's based on components, rather than fields. That's kind of the big differentiator about it. And because it's based on components, if the customer has a React application, then they generate a React component; and if the customer has an Angular application, they generate an Angular component, and so on and so forth. So that's a lot of work, to generate all the different outputs, and so they built this other tool called Mitosis. And Mitosis allows them to say, "Oh, we have this general concept of a component that needs to be built; it's like a counter or whatever", because whatever the marketing decided in the drag and drop editor to kind of build, and they can spit out whatever format that's canonical to whatever technology stack you happen to have, and that's how this whole thing works.

\[00:48:06.26\] Now, what's interesting about it - I was like "Hm... If I was to build another framework, one of the hard things would be to get customers." But if you have this thing called Mitosis, that spits out whatever output you want, it'll be trivial to get a quick output out of this as well. So that was the one thing that kind of attracted me to Builder. But why Builder was attractive to me is because they had this thing that they're building the headless CMS systems, and all the engineers are like "Oh yeah, but headless CMS systems are gonna slow my site down. You're gonna slow things down." And so they were always saying "No, no, we're fast. We're actually not slowing anything down." But then the people would build websites, and they'd be like "Well, the website is slow" and then you'd be like "Yeah, because like hydration, and things... Not because of us. We just gave you a React component that you just dropped into your page... And so if the application is slow, it's not because of us, it's because you have lots of components on the page", right?

And so the realization was it didn't matter whether they were using React, or Svelte, or Angular, or Vue. The websites all performed about the same. I know every single framework claims that they're the fastest, but if you actually look at what's actually happening in the real world, they're all about the same. There's two reasons why they're slow, right? One is hydration, which kind of we've been talking about all this time, and the other one is third-party code. But before I talk about those two things, let me just close the loop. So Builder was like "Gee, we would be awesome if we could come to a customer and be like "Yeah, the performance is about the same on all of these different things. It's not us, it's just the way these things work. But what if we could come up with a different framework that would just like blow the performance out of the way?" And because you have Mitosis, it's easy to come to the customer and be like "Just push this button over here and we'll generate Qwik instead of Angular or instead of Vue or instead of whatever you happen to be using. And when we generate Qwik, look, our fast this thing is."

And so it was kind of like a match made in heaven, and so we kind of joined on it and we started working on it together. I started working full-time, but also in the context of what Builder eventually will become. And so we're pretty close to this particular thing.

Anyways... So why is the website slow? The short answer is too much JavaScript. There are two pieces to that part. One you sort of control, but not really, which is the application code that you have written, your first-party code. And the second part is the third-party code, which you don't really control, because marketing comes in and says, "We need Google Analytics. We need HubSpot. We need Amplitude", we need whatever, like Facebook Pixel, right?

**Jerod Santo:** 25 things...

**Miško Hevery:** Yes. On average, like 30 things, or something.

**Kevin Ball:** Well, and that's frequently an order of magnitude slower than the first-party code, so until you address that, that frameworks is in the noise.

**Miško Hevery:** Correct. Correct.

**Jerod Santo:** Don't you just put an async on the script loader though and you're done? You just put async, and then you're just "Well..."

**Miško Hevery:** \[laughs\] No.

**Kevin Ball:** 'Have you seen how much CPU some of those advertising scripts chew up...?"

**Jerod Santo:** Yeah, but I use the async keyword on the attribute on the script...

**Miško Hevery:** So we started working on Qwik, and very quickly we basically realized exactly this, is that the third-party code is kind of ruining the party here, right? And so the realization we had is that if you just make a blank page with nothing on it, and you add Google Tag Manager by itself, it puts you at the precipice of no longer getting 100 out of 100 on Google Page Speed score. And so if that's the situation, and that's just one of 20 other things you have to add, you're not going to win this battle. And so Partytown was born.

The idea is, you take third-party code and you run it in the web worker. Now, that idea is not new, right? There's nothing clever about that thing. That's like an obvious thing. The problem is, how do you do that, because the web worker doesn't have DOM, and all of these scripts do something like document.title, or they say \[unintelligible 00:51:53.17\] or like whatever they do right in there. And so they don't have DOM.

\[00:52:01.09\] So people have tried to make fake DOMs in the web worker, and that doesn't really work, because they kind of go out of sync, and a lot of things actually want to measure things, like "Oh, how big is the box? And where am I on the page?" or things of that sort. So none of that stuff really works if you have kind of a fake DOM. So you need to have a real DOM. And one thing you could do is you could make a proxy, meaning that whatever operations you do on a web worker, you also do on the main thread. And by proxying everything over, you can just have the script running inside of the web worker, and if it says, "What's the document.title?" you just go to the main thread and say, "What is the document.title?" and then you return that back.

Now, all of that work's easy, except for one tiny problem... And that is that the communication channel between the web worker and the main thread is asynchronous, meaning that if the web worker says "What is document.title?", by the time you come back and figure out what the title is and report back, it's too late; the code has executed past this point, and it's probably crashed, because you couldn't really answer the question correctly. And so the magical bit that Partytown kind of figured out is how to make a synchronous call from the web worker to the main thread.

So we've figured out a way to block the execution of the web worker, so that we can go and talk to the main thread asynchronously, and then when we come back, we can resume running the web worker with the script from where we left off. So that's the whole magic, right? And so we put this together inside of Partytown, and Partytown is great, because people will just add it to their website and they'll increase their score 20-30 points on Google Page Speed score just by adding it. And it's not like you have to change anything, it's just third-party scripts. And so just moving them over to a web worker can have a huge impact on your performance.

**Jerod Santo:** So I'm sold on Partytown, because we have very little JavaScript on our site, and very little third-party JavaScript. But what we do have is reCAPTCHA, because freaking spam bots.

**Miško Hevery:** Yes.

**Jerod Santo:** And reCAPTCHA kills my scores. I'm just like, everything I do is fast, but I've got reCAPTCHA. And I can't take it off, because the spam bots would increase --

**Miško Hevery:** Partytown.

**Jerod Santo:** Yeah, Partytown. It's a drop-it; I don't have to do anything, I just drop it in. That's spectacular.

**Miško Hevery:** Right. So part of that was like a no-brainer; it's like, you just need to do Partytown. It's just a no-brainer. But now when you do Partytown and you move the third-party scripts over, now you have the next problem, and the next problem is the framework itself. And this is where it Qwik comes in. What really a builder wants to have is he wants to have kind of a solution where both the marketing people that are not code-aware can go and edit the page, and as well as engineers can edit the page in their own ways, and the whole thing kind of comes together, and we can be unbelievably fast. And so things like personalization, A/B testing etc, things that are historically very, very difficult to do with classical systems, become super-easy with Qwik and Partytown.

**Jerod Santo:** Kball, you wanted to say something, I could tell.

**Kevin Ball:** I was going to ask if there's any limitations on what can run in Partytown.

**Miško Hevery:** Yeah, it's a good question. Yeah, so there are some limitations. In theory, you can execute everything, but the question is, how good are our proxies about like simulating the environment? And we've been getting better and better about all these surprises; for that part, kind of most things can run. But there is a performance penalty for running them. Now, it's a third-party script, so I really don't care how long it takes for Google Analytics to boot up and send some data to Google, right? That doesn't really matter whether it takes 50 milliseconds or 200 milliseconds. Whatever, right?

**Jerod Santo:** Yeah.

**Miško Hevery:** What I care about is that the user isn't getting blocked on the main thread; that's the thing that matters. So if you try to run like a React application - or any framework, it doesn't have to be React - in a web worker, it works, but you can definitely see that it's kind of sluggish, right? But it is possible. But that's not the point of the thing. The point of it is not to run the application in the web worker, the point is to run all these analytics in a web worker off the main thread, so that the main thread is dedicated to the application and to the user.

**Jerod Santo:** \[00:56:04.12\] Good answer. So we're running short on time; we can have you back for a whole other hour probably, Miško. This thing goes deep.

**Miško Hevery:** Happy to come back, man.

**Jerod Santo:** We have a few questions from the chat... Let's do a few quick ones here. Jarvis asks if there's any real-world production websites using Qwik. We know Builder is using it, but are there anybody else? I know it's pretty new, but have you gotten any people using it? And are they seeing the same thing y'all are saying?

**Miško Hevery:** Yes, we are. So Builder has it; obviously, the Qwik homepage has it. Actually, Builder has a couple of customers that are actually using Builder in production. So that's exciting. And there also -- in our community, people have built their own personal pages etc. in Builder as well. It's happening, but we are still kind of early on in the game.

**Jerod Santo:** Right.

**Miško Hevery:** I think we're maybe a month or so away from declaring a beta. One of the things we are trying to do is we want to make sure that the whole stack works end to end, which includes -- so there's Qwik, which is the framework, Qwik City, which is kind of like Next.js, the meta framework that goes on top of it, and then on top of that we have this thing called Qwik SDK. And the Qwik SDK is the thing that glues the Qwik City website with Builder. So you would only use Qwik SDK if you wanted to integrate with Builder. But we wanted to kind of have the whole stack running before we declared beta. And we're getting very, very close. Also, loving the way Qwik City has turned out. Another talk, for another day.

**Jerod Santo:** Another talk, for another day.

**Kevin Ball:** I would love to dig into that with you.

**Jerod Santo:** Yeah, totally. Peter Banjo wonders "Can Qwik work with different JS server frameworks, like Fastify, Express or...?"

**Miško Hevery:** Yes. So that's another thing we kind of worked hard on. Qwik itself doesn't use any API, which means anywhere there's JavaScript available, it will run. So we have adapters for Deno, for Fastly, for CloudFlare, for just about anything you can imagine, including Node.js. So you could just set up your environment that you happen to be running in; as long as it is JavaScript, Qwik can run over there. We even have it running in a service worker, because when you go to our examples, to our tutorial pages, we actually allow you to play with the apps. And so instead of being a server-side rendered on the server, they actually get server-side rendered in the service worker.

**Jerod Santo:** Okay, interesting. What about debugging tools or anything special for Qwik, anything that you'd run into using it, built into --

**Miško Hevery:** It's a standard debugging story. In the browser you can just put breakpoints etc, as you would imagine. Same thing happens on Node.js or whatever; you just open up the Node.js debugger, place breakpoints, everything works. The only difference is kind of that you have to understand that there's a server and a client, and the code could be running on both locations, and so you might have to like execute things. You might have to debug things in a server, versus debugging in the client. But the source maps works, and all the other standard stuff.

Our transformations on a source code are usually very simple, as in like "Take this code and move it over here." And so the source maps work very, very well. So it's not like we renamed the variable names, or we introduced extra things, or moved the code around, or anything like that. It's very mechanical, of like "This code goes here, and this code goes there", and so the source maps work beautifully.

**Jerod Santo:** Last one - Partytown, what about the payload? What's the cost of including Partytown on our page? Is it significant, is it insignificant?

**Miško Hevery:** That's a good question. I don't remember... I want to say it's like a few kilobytes that goes into the main thread. And then - I don't know how big is what gets loaded in the web worker thread. Probably on the order of several kilobytes. I don't actually know. So I'm just making stuff up. But it's not that big. But the gains you get is that you offload these huge things, like Google Tag Manager, off of the main thread. And so any kind of additional costs that Partytown brings in is insignificant compared to the savings you get from moving this thing out.

**Jerod Santo:** Very cool. Well, the website is Qwik.builder.io. That's with a W and a k, because you can't spell things the normal way and still have a trademark. We've gotta spell things differently. So that's where it is... Of course, it's in your show notes, listener; all the links to all the things are in the show notes. So if you're interested in Qwik, if you're ready to drop Partytown into your page and enjoy the third-party -- sequestering your third parties into a web worker, definitely check the show notes for that.

Miško, anything else you have to say? We really appreciate this conversation, it's been very interesting. I think it's like tantalizing... There's still a lot of things that I have questions about, but we're gonna call it a show. Any final words before we let you go?

**Miško Hevery:** Thanks for having me.

**Jerod Santo:** You bet!

**Miško Hevery:** There's many things we haven't talked about, specifically the magic we can do on the server side optimizations, etc. So if you want to go into some crazy nitty-gritty stuff, I would love to come back and get in there. But thanks for having me.

The main thing I really wanted to get across is that there are lots of existing frameworks, and Qwik is not yet just another one that has a different DX. It's a fundamental rethink from the ground up of how a web application should work. And hopefully, I was able to kind of convey that in the chat.

**Jerod Santo:** I think so. And I will say this, KBall has been very polite. He's been biting his tongue the whole last 20 minutes. He has so many things to ask, and he's asked zero of them. So we can definitely have you back. Maybe Kball can go one-on-one and just have a deep dive into the nerdery of how these things are fitting together. Kball, does that sound cool, or...? Do you have any more questions? \[laughs\]

**Kevin Ball:** I was just thinking as you were saying, there was so much, obviously... I feel like we could talk for hours on this.

**Miško Hevery:** Yeah.

**Kevin Ball:** So if you're game, I'm game. Let's find some time.

**Miško Hevery:** Yeah, anytime. Anytime. I'm game.

**Jerod Santo:** Alright. Very good. Well, for Kball, I'm Jerod, this has been JS party. Thanks for listening, everybody, and we will talk to you all next week.
