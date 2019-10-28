**Adam Stacoviak:** Back by popular demand is this cool format, this debate topic, so to speak. We put a Twitter poll out there asking "Do you like our new Yep/Nope segment?" and an overwhelming (or a somewhat underwhelming?) 65% responded with Yep. So we took the bait, and we're doing it again.

Today's show will be a debate on modern JS tooling and whether or not it is too complicated. Basically, the question is "Is modern JS tooling too complicated?" We have two teams -- wait, wait, wait. Three teams now, because we had some changing... We've got team Yep, being represented by Divya, team Nope represented by Mikeal, and team It Depends, which is the moderate, represented by Feross. What's up everyone?

**Mikeal Rogers:** He's like Switzerland. \[laughter\]

**Adam Stacoviak:** You get to sit in the middle. It's so easy. You're not really picking a side. The rules for this are pretty simple - the first segment we'll have each person go through four minutes of their position in the argument from their side, and then when we come back to segment two, we'll do a shorter format, so we can be more conversational... But the thing to keep in mind, listeners, is that the panelists may not be representing their beliefs; they're just instead representing the side they've been assigned... So it's a good argument that way. Let's get into it. First up, team Yep. Divya, what have you got?

**Divya Sasidharan:** Hurray! Okay, so the premise of this conversation is "Is modern Javascript tooling too complicated?" and I would like to start with a haiku that I wrote specifically for this debate...

**Adam Stacoviak:** I love it. Go.

**Divya Sasidharan:** "Many packages. New frameworks built all the time. Config hell. Webpack." To start the conversation, it's worth talking about what exactly Javascript tooling is. Javascript tooling consists of tools, utilities, libraries that give developers the ability to build code for a specific target. I don't say web specifically or the browser, because now there's multiple build targets you can use for Javascript. You can build Javascript for mobile and for the browser, so any target you want. And then Javascript tooling is often optimized for developer ergonomics. So tools like hot reload, test suites, compilation and build config things are all specifically for developers' satisfaction and to make their processes easier.

\[00:04:09.12\] So in a way, Javascript tooling and the ecosystem is idyllic, because it gives developers the ability to wrangle an otherwise behemoth system... But the problem is that the tooling is overly complex. There's so many tools that you have to work with now. And that's mainly because working with modern Javascript you can't just take your code and put it on a browser and it runs; you have to go through multiple steps.

So with the current standard, which is ES2015 and future versions, often times they're not always compatible with browsers, because browsers kind of take a long time to implement them... So as a result, you have to do things like transpiling, and then there's also the issue of modularizing your code, which is often a performance benefit, because you don't want to put all of your Javascript and load that all at once, so you want to modularize. These add additional complexity, because you have to think about how exactly you want those systems to work.

What it boils down to with the ecosystem is we have a lot of options, which results in too many choices for developers to make, and that's why we hear the problem of Javascript fatigue - because there's so many different things that you can do, there's so many different ways in which you can approach building a web application or web things... I think that's how we defined it from the last episode. So that is a huge problem that has resulted because of the fact that the modern Javascript tooling is too complicated.

**Adam Stacoviak:** You've got a minute and a half left.

**Divya Sasidharan:** Okay, I guess I'll just keep going.

**Adam Stacoviak:** Do you wanna keep going or do you wanna pass it on?

**Divya Sasidharan:** I have one more point to make.

**Adam Stacoviak:** Okay, go.

**Divya Sasidharan:** The other thing that's also frustrating - and I've talked about this a little bit - is that Javascript tooling also includes frameworks, because it's things that we use in order to build web things, which users can then see on their browser. And the thing is we're currently in a time where people call it the framework wars; I don't know if that's actually a thing, but essentially you have multiple frameworks you can choose from... So not only do you have the choice to make between what transpile tool to use, what build tool to use, and so on, you also have to choose the framework. And these frameworks are great, again, for developer ergonomics, but the other thing is that they introduce abstractions, which actually make building with Javascript kind of frustration for a lot... Because there's a steeper learning curve. Not only are you learning just Javascript, you're learning the abstractions that those frameworks introduce. So the issue therefore is that overall, as a Javascript developer, you have so many things you need to take into consideration, and how all of these work together, and as a result, the Javascript tooling ecosystem is too complicated.

**Adam Stacoviak:** Nice. 20 seconds left, if you wanna use it. If not, we can move.

**Divya Sasidharan:** No. I will open the floor.

**Adam Stacoviak:** Nice, alright. Well, let's go then to Mikeal, representing team Nope. Because team Feross, which -- these aren't really teams, they're just people, individuals now; we had teams originally, and that's how it was, but it's just individuals... So Feross is representing "It Depends", for the moderate position, which I guess might be the better; we'll see. Mike, what have you got for team Nope?

**Mikeal Rogers:** Okay, I need to start with some context. When you think about programming and just technology in general, you're talking about an ever-expanding field. There's more code tomorrow than yesterday. The entire field is growing at a pretty exponential rate, and the future is much bigger than the past, so we should expect this to grow into the future.

When you think about programming languages or frameworks that "die", they often don't actually die. They may lose a couple of users, but for the most part what they actually do is they stagnate. They have the same amount of usage or the same amount of users that they always did, but the entire field has gotten much bigger.

What that essentially means is that unless you are in a part of the programming ecosystem that is growing, you have a problem; you are effectively sort of dying. If you aren't capturing at least as much growth as the entire field is growing, that can be problematic. It means that in the future you will just have less options than other developers. So I wanna come back - in that context I wanna come back to this lovely haiku, actually. It's perfect.

\[00:08:10.02\] Many packages - this is said like it's a problem. Like, what an amazing problem to have... Ask a Haskell programmer - love the fact that when they want to use a package, it does not exist and they have to write it from scratch every single time. So we've effectively graduated on to second-order problems because we have been successful. New frameworks built all the time, new things being built all the time is a sign of success. It's also a sign of health. If you don't have new things built all the time replacing the old things, then that's a huge problem.

One of the strange things that's happened actually in the last ten years - it used to be that languages only stagnated and they didn't really lose absolute users. But that actually did happen to Ruby a bit. If you look in the Ruby ecosystem, it's sort of a problem. Nothing is replacing Rails. It's just there, it's doing its thing forever; there is not a new thing that's coming in to replace it. In Javascript, because we're always expanding, because we have all these new use cases that we're handling all the time, that means a huge set of new tools and frameworks are always coming in to replace the previous ones.

Yes, that is painful to go through as a developer, to always be learning a new thing, but that is literally the job of working in the technology sphere. If you're not learning a new thing, you eventually will be off in a corner, still writing COBOL... Which is fine, COBOL is cool, but it may not be the most interesting thing in the world.

And as far as some of the configuration hell stuff goes, I think that a lot of what we complain about with these frameworks is not that there is a framework, it's that the way that these things have been developed is with vertical integration patterns, rather than horizontal integration patterns. So we build these frameworks that have these plugin stacks where everything sort of linearly depends on the next thing... Rather than building an ecosystem out of smaller components that are more leverageable independently, and interact with each other more independently.

So if you look at the earlier days of Node, that was how the whole ecosystem worked. Then eventually people started building these frameworks, and then you started to see a lot of packages that were literally just taking some package from the Node ecosystem and wrapping it in the plugin wrapper of some framework. That is a problematic to be building on, and I think that we are definitely at the height of this cycle for some of these bigger frameworks, and a lot of that needs to sort of implode, so that that can then be used... But we're still going to be left with an npm with a million plus packages, and sorting through all those packages, because that's what it's like to work in a healthy ecosystem. How am I doing on time?

**Adam Stacoviak:** 22 seconds left.

**Mikeal Rogers:** I think I'll hand it over to Feross, where he can take all sides and win by default. \[laughter\]

**Adam Stacoviak:** Feross, you have - I don't wanna say the easiest position here, but you can play in the middle. You've got It Depends, so how do you wanna represent It Depends?

**Feross Aboukhadijeh:** So I basically get to cherry-pick the best arguments from Divya and Mikeal, and restate them in my own words...

**Mikeal Rogers:** This is not fun for anybody. \[laughter\]

**Adam Stacoviak:** I want to hear this haiku again. Divya, before Feross goes, can you say that once again?

**Divya Sasidharan:** Oh yeah, of course. "Many packages, new frameworks built all the time. Config hell. Webpack." I feel really bad, because I essentially threw Webpack under the bus here, and I use it a lot and it's great, and their documentation is wonderful, and Sean Larkin is wonderful, but...

**Mikeal Rogers:** They do have a huge configuration file. \[laughs\] It's like an unbelievable to manage.

**Divya Sasidharan:** Yeah. \[laughs\]

**Adam Stacoviak:** Alright, Feross. It Depends.

**Feross Aboukhadijeh:** I guess I wanna just start off by saying that, in general, I'm very sympathetic to this argument that modern JS tooling is too complicated, and I've gone on my fair share of rants about it... Especially when dealing with some tool that I feel is more complicated than it needs to be. Whenever that happens, I do tend to feel like we've created a lot of problems for ourselves that we didn't need to create.

\[00:12:01.23\] A lot of times I feel like when nerds are being nerds, they can invent unnecessary problems for themselves. An example of this that I encountered a lot a few years ago was people would send a pull request to an open source project that I was in charge of, and they would be like "I converted everything to the newest syntax for you. Here you go. Oh, and also, I added 15 Babel plugins, so that we can compile it back to ES5." And they change every single line in the project.

**Mikeal Rogers:** You hated this so much you wrote standard.

**Feross Aboukhadijeh:** Yeah, basically... It's one of those things where it's like - we have to ask ourselves, what are we doing? What are we trying to do here? When we use these new features, are we being enabled to do something that we weren't able to do before? Certainly, some language features are actually game-changers in that way; they let us completely do something that we couldn't -- like a new browser API, for example. This is not exactly Javascript, but it's in the browser; if a browser gives you a new API, you can actually do entirely new things. Suddenly now I can do WebGL, or I can do WebRTC, or I can draw into a Canvas, or I can access Bluetooth devices. That's actually complexity that's worth taking on, if it actually gives you something in return.

But something like adding ES classes to your package, converting the old way to using new ES classes - doing that now maybe makes sense, actually. I'm starting to do that actually to all my packages. But doing that five years ago, back when you just had to take on all this complexity of a build toolchain, doesn't necessarily make sense to me. I'd rather just wait it out; wait a couple years till it's in more environments, and convert then.

So that's one thing. I think a lot of the problems is us doing it to ourselves. That's what I'd like to push back on. And I guess I'll also say that JS is kind of a lot like Perl in some ways. Perl's motto is that there's more than one way to do it. Python has sort of the opposite motto - there's only one way to do it. In JS there's always different competing approaches for doing things, and so that is also a source of this complicated tooling, because we sort of have a lot of options... And that's not necessarily bad, like Mikeal was saying. The best can win, and we can have this competition of ideas.

But I guess to represent the other side - the flipside of this is that when you ignore all the ways that we're creating unnecessary complexity, and you sort of zoom out and look at the problem we're trying to solve... Like, we're actually trying to solve pretty hard problems with Javascript, so it kind of makes sense that the tooling is gonna be a little bit complicated.

You can definitely find lots of examples where the tooling is just the right amount of complicated. There's this difference between essential complexity and incidental complexity. Essential complexity is like "This problem is actually hard, the solution therefore must be hard. There's no way around it." And there's incidental complexity, which is like "We just solved it in a bad way, and we created all this extra garbage that basically people have to deal with forever."

We are doing a lot of hard things, like trying to make a website that loads instantly, and has 60 frames pe second, and is accessible, and looks great, and handles all the error states, no bugs, beautiful animations... That's an example of actually a really hard problem, so I think that complexity is really unavoidable; that's essential complexity, a lot of the time. How am I doing on time?

**Adam Stacoviak:** You've got five seconds.

**Feross Aboukhadijeh:** Okay, great. I'll rest my case.

**Adam Stacoviak:** Ding-ding-ding. Alright, so we have three takes in here. We began this debate thinking we'd have two teams, but we ended up with three - so we've got team Yep, team Nope, and team It Depends. When we come back, we're gonna dive a little bit into more of some back-and-forth, a little bit shorter segments, so we can kind of conversate around the complexity, and maybe switch sides even. We'll see.

**Break:** \[00:15:29.10\]

**Adam Stacoviak:** We are back. The question on our minds here is "Is modern Javascript tooling too complicated?" We've got team Yep, team Nope, and team It Depends. Now we're moving into more of a section of shorter spurts; more conversational, some interruptions... But let's open it back up to Divya with team Yep. What do you wanna open up with here for your counter-argument? Or maybe an attack, who knows what's gonna happen here...

**Divya Sasidharan:** I'm gonna start by appealing to authority...

**Adam Stacoviak:** Oh, boy...

**Divya Sasidharan:** I'm gonna pull a Feross...

**Adam Stacoviak:** Back to Hacker News?

**Divya Sasidharan:** No, this is actually a credited source i.e. Yehuda Katz's blog.

**Adam Stacoviak:** Okay, alright... Bring it on, Yehuda...

**Mikeal Rogers:** That's not just an opinion, that's a fact... \[laughter\]

**Divya Sasidharan:** Exactly. It's not an opinion, it's a fact. He created a framework called Ember.js, and therefore whatever he has to say is valid. And he sits on TC39, so I guess that makes it valid. Anyway, in a blog post that he wrote, that was -- I can't find what it's called; I'll figure out where it's from exactly, but the point he was making - and I'm gonna quote:

"Another major impact of the massive shift in complexity in Javascript is that front-end tooling is no longer a nice-to-have. It's both a necessity and a glaring pain point. Tools exist for a purpose. Humans can only comprehend and handle so much complexity at a time. Tools allow us to encapsulate blocks of complexity into smaller pieces, letting us abstract away problems and create increasingly complex solutions."

This is a critique on the fact that the modern Javascript tooling is just frustratingly complicated, which is the point that I was making, but also the point he's trying to make here is that it's complicated but we made it such, which is what Feross was mentioning. We as Javascript developers almost shot ourselves in the foot, because we were like "We need all of these things. We have these problems, we need to solve them", and so we've created extra tooling in order to solve those problems... Which has been great, because yes, they have solved problems, but they've also added extra dependencies and extra things for us to think about whenever we think about front-end or we create a project in Javascript.

So the other thing also on top of that is that when you create applications in Javascript, a lot of the times you pre-optimize your application for problems that you imagine you would have, but you might not have at the moment. So you might be like "I want my application to run really fast, so I'm gonna optimize for performance", even though you don't have the numbers for you to need to do that just yet.

Yeah, performance is really important, but is it worth putting in that extra time and that extra tooling and dependencies in order to optimize for a problem you don't have? Maybe not.

So in a sense, within the ecosystem there's this push towards "Yes. New. Doing things better", which is what Mikeal was mentioning, which is great, but it's also "Do we need to do this all the time?" If we have a solution that works, do we need to constantly iterate on it at the speed that we're currently iterating on, in order for us to be more effective, or to build better applications? I'd argue that's not the case. A lot of the times we introduce this complexity when we don't need it half the time.

\[00:20:10.16\] For instance, React -- and I hate to throw specific frameworks under the bus... This is a specific part of it - they introduced Fiber, which is their new reconciliation algorithm... And to this day, I have no idea why I would use it. Maybe because the applications they've built have never been to the scale that it would require it... But I still can't fully grok why I would use it, and what use case. I've never actually put it in an application of any form, because for me that's a solution to a problem I do not have... But I know of use cases where people are like "This is great. I'm gonna start using it", even though you don't necessarily need it. And I hear this argument a lot.

Same for TypeScript. I'm not someone who uses TypeScript, and I understand the arguments for it. I will not start using TypeScript because I'm like "This is a problem I currently do not have", and I do not want to add the added complexity just to be like "Oh, it supports TypeScript", because that is just not necessary.

**Feross Aboukhadijeh:** Yeah. That's a sign of maturity, I think... To be able to be like "I've seen this before. I know it's gonna happen. We're all gonna jump on this thing, it's gonna be super-exciting, and then in a year from now we're all gonna be jumping on the next thing... And I'm just gonna opt out of this."

**Divya Sasidharan:** Yeah. And it makes it really painful too, because I've been on teams where you're constantly evolving your tooling, so it just causes - bringing back the term I've talked about earlier - this fatigue, because everyone is just frustrated all the time. They're like "I have to constantly learn something new, and my knowledge from two years ago is no longer valid now", which is incredibly frustrating. I can say that truly about frameworks. Like React - I knew React two years ago, and I cannot understand the React today with that knowledge.

**Mikeal Rogers:** I just wanna point out a limitation in what I can argue... Because I actually just don't even have the facility to argue that frameworks are good, and that the complexity of frameworks is fine. \[laughter\] So I actually have limit my argument to the complexity of modern tooling in modern Javascript is too much. I think that a lot of what we are talking about are actually problems with these vertical integration patterns, where you have so much value tied up in the framework that when it adds a new thing, you have no idea why you would wanna use it, or if you should use it, and why that code now belongs in your app. And you're also still using a framework that was built on a premise that no longer is valid.

One of the things that I wanna get into is we don't have perfect information about the future, so we don't know what is going to stick around and what's gonna die. That really informs what we can say we should or should not be doing or adopting, because we just don't know. On Twitter yesterday I was talking with Alex Russell, and he mentioned "Think about all the time that we've spent trying to work on things that were gonna live forever, and none of them did." I think particularly he was talking about Dojo. That's a really fun time in the framework wars, because literally everybody in Javascript that thought that they were gonna be maintaining a Javascript codebase for ten years worked on Dojo, and tried to make Dojo the thing for that. And ten years later Dojo is dead, and nobody uses it. But jQuery, the one that nobody was trying to preserve for the long-term, is still pervasive... \[laughs\]

We don't have good information, so we kind of have to just let a lot of stuff happen, and have a lot of churn happen. The issue that we get into though is that the platform is not static; the platform is a moving target. And as the platform improves, we need to be able to shed a lot of this tooling. And the issue with vertical integration patterns is that all of the value is locked up inside of one giant framework. So when the platform catches up, you can't just ditch a bunch of that.

I remember when React was launched, the whole thing was about DOM diffing. The value of it is this virtual DOM thing. Then we made the DOM fast, and who gives a shit now. But we're still using React because of -- I don't know, there's like other features that people rely on in it, so we're just using the whole thing...

**Feross Aboukhadijeh:** The component model has been useful for getting people to sort of all write their components in the same way.

**Mikeal Rogers:** \[00:24:06.24\] Yeah. And then now we have Web Components and they can't adopt it, because they're on their own pattern, so we can't take this feature upgrade from the platform. I think there's a ton of other examples of this where the platform starts to catch up, and then the frameworks can't.

If you wanna look for a model that is much better, look at what happened with CSS frameworks for the longest time. There was a new sort of bootstrappy thing every week for a couple years, and there's all these different grid frameworks, and Flexbox frameworks, and all these things, and they're all just like CSSthat you can add into a page. And because it's just that simple "Add that CSS into a page", when CSS Grid happened, we just stopped including those... CSS Grid is just better than all of those frameworks and components. When the platform caught up, we were actually able to remove complexity, even though we still have this big ecosystem; and now we're building a new, better ecosystem on top of Grid. And that's an argument for change, for more things happening, for more choices at the end of the day, and more complexity for you to deal with and sort through... But what you end up with is a toolchain and an application that fits your needs a lot better and is actually easier to reason that.

**Adam Stacoviak:** What about this concept of maturity? I don't think that the web platform is immature. It's been around for a while, it's got a lot of users, a lot of developers... But the concept of complexity and progress - it's not so much that it's unstable, because it is stable, but there's progress happening, so that means that tooling will always change.

Divya, you mentioned your knowledge of React two years ago will not really help you much today... Or something to that extent. Is the state of our Javascript tooling today - while it may be complicated; that's what we're debating - immature, or is it still maturing?

**Mikeal Rogers:** I think it's about to completely shift again, actually. You just had modules land in the browser. We haven't really taken that on yet, so... We're due for another big shift. So I wouldn't say at all that it's stable. The platform is changing faster than it's ever changed.

**Adam Stacoviak:** So would you agree with this then - as our tooling advances, so does the complexity around our tooling?

**Mikeal Rogers:** Well, I wouldn't call the platform tooling. The platform is what we build the tooling on and what we rely upon... And to some extent, if the tooling is masking over deficiencies in the language, you can basically say those things are gonna need to change in the future; you sort of know that those are gonna need to change in the future.

You can look at a lot of the patterns that Node developed internally, because they didn't exist yet, and now we've had to move past them once the platform caught up, and that's been really painful.

**Feross Aboukhadijeh:** Right. Buffer is a great example of that.

**Mikeal Rogers:** Yup. Buffer, the standard callback API, Streams... Jesus.

**Feross Aboukhadijeh:** Yeah...

**Mikeal Rogers:** Whenever you're inventing your own error-handling mechanism, you are covering up a deficiency in the platform that is like just dead. But sometimes you have to. You just have no choice. I don't think that Facebook stood out going "You know what we should really do - rewrite the DOM as a diffing mechanism in JS." They had a problem that they needed to solve because the DOM was too slow, and that was how they solved it. It's just that because of the way that they decided to prevent the solution to that problem, it was very hard to remove that when the platform had caught up.

**Feross Aboukhadijeh:** One thing we should mention is that it's important to make sure that the tools you're using solve problems that you actually have. I think that's a huge source of unintentional complexity, or what I call incidental complexity earlier. If you adopt a tool because everyone else is adopting it, and that tool was meant for a company that's a thousand times your size, you're gonna have extra complexity; that's gonna be solving problems you don't have yet... And you might argue that maybe it's good to be using a tool that can scale when you're ready to handle that much traffic, but let's be honest, your app is probably not gonna get that popular.

**Mikeal Rogers:** \[00:27:56.14\] If your app gets that popular, I guarantee you'll have very different problems. That' s the thing - any app of a particular scale is going to have unique problems to that app. This is the issue with cargo cult and culture in tech in general - if you're not Google, you don't have Google's problems; you probably don't need Kubernetes. Unless you're running a cloud provider, you don't need Kubernetes.

**Feross Aboukhadijeh:** Yes, I love this. I love that you brought this up.

**Mikeal Rogers:** Yeah, and unless you're Facebook, you probably don't need all of React.

**Feross Aboukhadijeh:** One of the things I'm super-impressed by - there was a post a few years ago on the High Scalability blog, which by the way, a lot of people who love to add complexity read this blog, because they're like "Oh, what are the biggest players doing? Oh, we need to adopt that as well." \[laughter\] But anyway, there's this great post on there about Stack Overflow; I think it was 2014. Maybe their architecture has changed a little bit since then. But in 2014, when they wrote this post, they were dealing with 560 million pageviews a month, and they were the 54th most popular website in the world. They also ran the entire Stack Exchange network, which at the time was over 100 different sites, all being powered by guess how many servers? 25 servers. Literally, 25 servers that they just directly SSH into to manage. Now, no Kubernetes, no auto-scaling, no magical fairy dust cloud functions...

**Mikeal Rogers:** It's called caching. Caching fixes most of your problems, actually... \[laughs\]

**Feross Aboukhadijeh:** Yeah, and this is a site that actually is quite cacheable... So maybe your problem is not exactly as easy as Stack Overflow's problem. Stack Overflow still has writeable stuff, dynamic websites, so it's not completely static... But yeah, the point is that they decided for them that they wanted to go with boring, well-understood technology, and that served them incredibly well, and I kind of admire the simplicity of it. The fact they managed to go that big and still have a system which they can fully understand... It's 25 servers. They're running basic things like a SQL server, and that's a well-understood technology.

I think that people don't think about the idea of technical risk enough, and what is the downside of adopting a tool in a few years when everybody who was using it has moved on, and now you're stuck using this tool that no one's maintaining, and that you don't even understand how it works, because you adopted it hastily, and now you're the one who has to fix the bugs in it.

**Mikeal Rogers:** But that's a good differentiator though, because that creates a very clear separation between the kind of like "I wanna use this boring thing because it's a thing that I know" or "I wanna use this boring thing because your new crazy thing might not work out. Because if you're talking about certain upgrades and certain shifts, you have some certainty that it's actually going to be around.

I usually don't adopt new language features when they're not even in the stable version of Node.js, but there were a bunch of applications where I took async generators and was running them under a flag, because it was so much better than using Streams... And I knew that this was gonna stick around. In the future we will be doing more things with async generators rather than with Streams, because that is an older API and we're moving past it in the language. There's some certainty there, and that's a level of certainty that you wouldn't have in adopting something like, say, TypeScript, where it's not actually on a path to be adopted in the language and everywhere. It is like its own sort of side community, and you don't know what the future of that is. And if you look at the future generally of compile-to languages, it's not great. Like, what happened to CoffeeScript...?

**Feross Aboukhadijeh:** There's this thing I like to say - technical bets are multiplicative. Basically, every time you make a decision to use a new piece of technology, you have to decide "What is the likelihood that this thing is gonna have a problem that's going to destroy my project, or be a huge source of work to rewrite?" You wanna know that adopting a new technology is not a pure good; there's a trade-off, and that trade-off is "What happens when it turns out it was a bad idea and I (obviously) thought that it was a good idea at the time? What happens if the community disappears, or it's replaced by another model and we have to rewrite everything?"

\[00:32:07.23\] You can do a certain number of technical bets, but you don't wanna just -- everytime you have a decision about whether to use a risky technology or a safe technology, you don't wanna always choose the risky technology; that's just a recipe for disaster. You wanna be very careful about the risk you take on.

Your example, Mikeal, of choosing a thing you know is on the standards track, and you know is very likely to stick around... I mean, you could have been wrong; decorators for example - those people thought were on a standards track, and now Javascript decorators are stuck in stage 3, or stage 2.

**Mikeal Rogers:** They had landed under a flag in Node, so they were past the point where they were gonna be changed to that degree, for...

**Feross Aboukhadijeh:** For async generators, yeah.

**Mikeal Rogers:** For generators.

**Feross Aboukhadijeh:** Yeah, sure. So my point is just that even things that seem like they're sure bets that they're on the standards track, you can still kind of get owned if you're unlucky... So I would say that your decision to do that was probably pretty good; you probably had like a 95% chance that it would work out, but you took on a little bit of risk that you decided was worth it, because you were getting quite a bit of benefit from it, right?

**Mikeal Rogers:** Yeah, yeah.

**Break:** \[00:33:09.14\]

**Adam Stacoviak:** So we're back, we've been debating this concept of -- I guess not really a concept; it's the truth, based on Divya, potentially... She may wanna switch sides here, but "Is modern Javascript tooling too complicated?" I might actually wanna throw in a caveat to the question, which is like "For whom?" You might have different styles of developers out there; is it too complicated for a seasoned developer, or is it too complicated for a newer or green developer, or someone who's newer to the field? Maybe one extended version of that could be that question; take it if you like. But this is a chance to play round-robin, and maybe switch sides, maybe go rogue, pick a different team, whatever... So who wants to go first?

**Divya Sasidharan:** I feel like Mikeal had an opinion... Yeah, you should go. You were like in the midst of finishing.

**Mikeal Rogers:** I think when you start out doing development, using something really high-level, like you were just talking about, is what you tend to do. You take an example, you poke at it, and you make it do the thing that you wanna do, and you sort of learn from there and you work your way down the stack.

I think where you start to run into problems is as you become a developer, as you become more familiar with your tools, all of that understanding of how those tools work ends up sitting in your head and becoming the context that you program in... And you have to, at some point, limit the amount of complexity that you're gonna keep in your head in order to get anything done.

When we talk about complexity, we're not just talking about the surface complexity of an API, but we're also not really talking about the entire implementation complexity either, because almost nobody keeps the entire implementation in their head when they do this stuff.

I'm somebody who severely limits my tooling. I've moved away even from graphical editors, and back to Vim, and back to doing all of my development on a remote server, just so that I can severely limit the amount of tools in-between me and my code, and running it and and reading it.

But that said, it's really important to have a diverse and broad and really high growth ecosystem. If you don't have all of those things, then you're sitting in a corner of just the technology sphere in general that might die off. We were also talking about risk earlier, and the risk that something may or may not be adopted... In ecosystems that do not have this growth problem, you literally run the risk of this whole thing that you're working with dying off and not that many people using it in the future...

\[00:36:22.04\] So I think that this is a very good problem to have in general, and that we shouldn't throw up our hands and say "Oh, Javascript fatigue" or "Tooling fatigue" or whatever. We want, and frankly we need an ecosystem of tools that is too many for you to know all of them and to make a decision, because that's the only sort of ecosystem that you can be confident will actually exist in the future and will still be solving the problems that you have.

**Divya Sasidharan:** I think the growth of the ecosystem is always good. The fact that we have a lot of tooling and a lot of options... That is a good thing, because it is a sign, as Mikeal said, of a healthy language, in this case Javascript. But one thing that I want all of this tooling to be more cognizant of is improving Javascript as a language, rather than having these forks of Javascript which currently exist.

For instance, there is tooling that pushes the envelope. I talked about how I don't use TypeScript, but there's a lot of things that people have talked about in the TypeScript world that has helped optional chaining, and I think the nullish coalescing thing... A lot of it was inspired by what was happening in TypeScript land. And same for CoffeeScript - CoffeeScript had arrow functions and a couple of other things, and then ES2015 now adopts that. So it's really nice, because this tooling that existed helped make Javascript better, but I would argue that that's not all tooling and all libraries.

Often times -- you know, we were talking about React and not being compatible with Web Components. Web Components is a standard that's been in conversation for a long time, and Google tried to create a framework called Polymer, and not a lot of people -- actually, I think only Google uses Polymer. And the frameworks don't necessarily feed back into improving Javascript, because they're kind of forking off... And so React, Vue, Angular - all these frameworks are kind of guilty of this in that they're like "This is the way Javascript should be", and that conversation of like "How can we make Javascript overall better" - that feedback doesn't come back in.

I've heard rumblings of conversations where TC39 has been trying to reach out to framework authors to get their opinions on how they've been solving specific things, and how they can take those ideas and integrate it into the language itself... I'm not sure how that conversation is going per se, because again, I think a lot of the times whenever you have these frameworks, a lot of it is "I want my framework to win" rather than "I want Javascript to win", or that is what the conversation seems to be... Which I think is terrible, because ultimately we're all Javascript developers; yeah, you do React, you do Vue, Angular, Ember, whatever, but we want the ecosystem to succeed, we want the language to succeed... And Javascript is always gonna be a first-class citizen of the web, it's always gonna be on the browser, so how can we make it better? I think that's something that I want our modern tooling to be more aware of, and to build towards, which I don't think they are...

**Adam Stacoviak:** What you're saying is that complexity is a given, so get over it or find a way around it, for a lack of better terms. Is that right, Divya? Maybe you said it more softly than I did. I'm a bit more abrupt about it.

**Feross Aboukhadijeh:** Yeah, I think the ecosystem is complex, and because of the arguments that we've made before, because we have problems and then we find solutions and then we open-source our solution, and then other people use the solution, even though they have no context of what the problem was, and then that results in overall it being complex... But I think there's two ideas - there's my application and the way that I use Javascript is complex, and then there's the overall "Is the ecosystem complex?"

\[00:40:11.19\] I think the point Mikeal was making, and I kind of agree with that, is that the ecosystem is incredibly lush with tools and libraries, so you can choose whichever you want. You can choose an incredibly pared-down version. If you want to use React Light, there's Preact. If you wanna use a more declarative framework, you can use Vue. There's all these options you can use, at your disposal... But I think there's also that part, which is "My application, or the thing that I'm working on, is complex, because I choose to add all these extra things to pre-optimize my codebase, because my application is obviously gonna be successful and scale."

That's kind of my issue with it - in a way, we shouldn't curb the growth of the community, because I think the fact that there's so many things means that people are actively contributing and actively working on things and thinking about problems, which I think is a great thing... But it's like, "How do we introduce that nuance to show developers, both seasoned and new, that certain tooling is not necessarily needed for every single use case?" Because a lot of the arguments I've heard for certain libraries have been "You have to use this, because your code will be better by it", which I think is incredibly subjective... Because I'm like "Sure, maybe. But will it, actually? And is it introducing more load and more weight to my codebase to solve one thing, that I might not even have a problem for?" So that's where I was coming from.

**Adam Stacoviak:** Before Feross jumps in, I wanna mention this topic of "You are not Google, Amazon, LinkedIn etc.", choosing the right tooling for the job... We actually had this conversation on the Changelog about two years ago now. As a matter of fact, August 4th, 2017, with Oz Nova at the time his last name was Onay, Oz Onay. He's actually an instructor at Bradfield School of Computer Science - president of, actually, and one of the instructors. So if you wanna hear more about that, we'll put that in the show notes... But episode \#260 of the Changelog we cover that, and that actually was based on a very thorough blog post and a very popular blog post as well from Oz. Feross?

**Feross Aboukhadijeh:** No, you go for it, Mikeal.

**Mikeal Rogers:** I was just saying, how much of this has really just been about Webpack, and React, and the actual Javascript ecosystem? \[laughter\] And I do feel like Ember deserves a little bit of credit, in that as the platform has changed over the last ten years, they have done massive rewrites in order to accept those changes and to move along with them, and not maintain a sort of hostile position to them the way that React has created Web Components.

**Adam Stacoviak:** We got 9 minutes left in the show. Maybe can we talk about the future, Mike... You mentioned Web Components and this very large potential change. So if we are on the fence of whether or not tooling is or is not overly complicated, how can we simplify? Mikeal, you mentioned when you write your own code and you start a project, you sort of simplify things... So what are other ways that developers out there can sort of resist the complication, or lack thereof if there isn't any?

**Mikeal Rogers:** I feel like this is a really bad time to answer that question. I would have had a really good answer a few years ago... But this is a very transitional period for Javascript and for the web. I feel like the tool that you probably wanna adopt does not exist yet, and that is a problem. I think that most of what we rely on right now in the ecosystem is probably gonna implode in the next year or so.

**Feross Aboukhadijeh:** Implode? I mean, it'll keep working...

**Adam Stacoviak:** Such as...?

**Mikeal Rogers:** I don't know, I actually don't think that a lot of it will keep working, to be honest.

**Divya Sasidharan:** And the registry will go downnn...!

**Adam Stacoviak:** Can you be more specific?

**Mikeal Rogers:** \[00:44:03.07\] I think that looking at pika package is sort of enlightening... Because by literally drawing a line and just saying "We're only using these new features that are available in the platform", they're able to provide an experience that's just really, really good. Way nicer than what you can get with npm plus a bundler, for instance.

**Feross Aboukhadijeh:** Can you go into that a little bit, what makes it nicer?

**Mikeal Rogers:** So they only use the new module syntax, and as a result do not actually need a bundler and a loader, because they can be directly loaded from the browser. So their job as a package manager is just fundamentally different.

**Feross Aboukhadijeh:** In practice though, when you ship your site, don't you still bundle because the performance from downloading 100 separate modules, with 100 separate HTTP requests is still too much?

**Mikeal Rogers:** Yes, that's the thing though - right now you have two options. You either load a hundred files, or you use a bundler. But if all of your dependencies were using these new standards, you would actually have quite a few options in between. You could actually use much more sophisticated loaders that did some bundling for you dynamically, that loaded a few packages together but not all of them, you can start to rely upon HTTP/2 and just say like "Oh yeah, we are gonna give you a 3m digital file and we're gonna do it all at once", so it would be the same as a bundle, for instance. Your options open up a lot wider once you say "We're just not going to support all of the old syntax", essentially.

The reason why I bring this is up is just it's something to look at and think about, because it opens up a lot of possibilities that we don't have with the npm plus bundler scenario, but adopting them would require us to basically drop almost all of the current npm registry, and reimplement a lot of things. A lot of this code would not be substantial code changes, but quite a few.

I'm still writing modules that have a require statement in them, so obviously I have not transitioned to that yet, being this tooling does not exist... But you can see something as coming up on the horizon that's gonna change things pretty fundamentally.

**Feross Aboukhadijeh:** It doesn't seem like it'll be too hard to switch your app to using this bundler when the time comes, if you wanted to... I guess the question I have is --

**Mikeal Rogers:** No dependencies in your entire dependency tree can not use the new syntax. That's a substantial change.

**Feross Aboukhadijeh:** But in theory, if I'm sitting there using Browserify, or Webpack, or something like that, and over time more and more of the modules that I depend upon are shipping an ES module version over time, my Browserify or Webpack tooling is just gonna keep working just fine. I might not be getting these benefits that you talk about from pika package, but one day when most of the things I depend upon are using this ES module syntax, then I can go ahead and swap out Browserify or Webpack for this new stuff... But in the meantime I can continue to ship a working app to my users, and my users will be happy that I'm not spending all my time debugging bundler problems, which isn't helping them with their problems in life...

**Mikeal Rogers:** I just don't think that that's how ecosystem upgrades work though. We've gone through a few sort of minor upgrades to the platform like this already, and we've had upgrades to Node.js as well... And when you look at the ecosystem, 1) we have not been able to drop anything old - basically anything - because somewhere in your giant 800 to 8,000 module dependency tree is something that relies on that, that nobody is touching, that's such a transitive dependency and so deep in the dep tree that you can't update everything to get at it.

So things like that just don't actually go away once you have these giant dep trees that continue to grow, so we have to support that stuff indefinitely, which means that if there is a new feature that in order to use we have to drop old support, we just don't have access to it until we make a hard shift.

The other thing too is that when you're building a new ecosystem or you're trying to adopt a new ecosystem feature, there are some pretty big advantages to breaking compatibility. If you just say "We actually don't work with everything before", you incentivize a new group of developers to be the first people to write all of those new things again.

\[00:48:04.12\] One of the reasons why Node was so successful in the early days was because we were so incompatible with everything. We had to take all these old C libraries that use blocking I/O and rewrite them in pure Javascript. Python and Ruby didn't have to do that, and so they ended up with just binding layers for all that, and we ended up with this big ecosystem.

**Feross Aboukhadijeh:** So are there actually packages that are written using ES module syntax that don't work with old-fashioned bundlers?

**Mikeal Rogers:** They work with bundlers, but again, move out of the -- so think about just not using a bundler; using something that looks very different from the way that current bundlers work.

**Feross Aboukhadijeh:** Sure, but isn't that a decision that the user at the end makes? I'm still confused... Are there gonna be packages that are on npm that I can't use unless I switch to using a different bundling system?

**Mikeal Rogers:** Yeah, because the bundling system does not have a way to compile down the old syntax. There are also issues that you get into that you can't resolve. You can't have recursive dependencies, for instance. That's a serious problem. If you have a large enough dep tree, with different versions of things, you usually end up with a recursive dependency somewhere.

**Feross Aboukhadijeh:** I'm still confused... Because it seems like basically what you're saying is that there's like a new bundler that is our there called pika, that if I use it, it actually restricts what modules I can use...

**Mikeal Rogers:** It's not a bundler.

**Feross Aboukhadijeh:** Well, whatever you call it. It's a tool that helps you ship your JS to your users, whatever you call it. What do you wanna call it?

**Mikeal Rogers:** It's basically a package manager. I would call it that. I'm trying to look at what they describe themselves...

**Feross Aboukhadijeh:** But it seems to me like basically it's requiring packages to follow a stricter set of rules; basically, you can't use all these other things.

**Mikeal Rogers:** Yes.

**Feross Aboukhadijeh:** But then if I'm using a tool which is more lax, in other words it never dropped support for old stuff, then wouldn't I just be fine? Now I can continue using all my own stuff, and also I can use these new things, because they're just using like a subset of the language. They're only using ES modules, so - great, I'll just use them. I'll just consume the same.

It seems like all I get from switching to pika is I can use less modules. Unless I really like the other benefits that you talked about. But as far as which modules I can select, basically pika is a subset of what I can use if I just stick with my current tooling.

**Mikeal Rogers:** I see what you're saying. You're saying that if you don't take this upgrade, then you can continue to use all of that value in the old ecosystem.

**Feross Aboukhadijeh:** Yeah, until pika is so useful -- like, I really want the features of pika, and enough of the ecosystem is updated that now I can sort of do this shift to pika a couple years after everybody else, and now I get all the benefits, and I had to do none of the suffering of trying to be like "Ugh, I can't use this package! Ugh, I can't use this package!" You know what I'm saying?

**Mikeal Rogers:** Sort of, yeah...

**Adam Stacoviak:** That's what happens when you get modern, right? Once you start moving forward, you have to leave something behind. It's a law of physics.

**Mikeal Rogers:** Yeah, yeah...

**Feross Aboukhadijeh:** So the question is "When do you wanna leave stuff behind?" Do you wanna just sort of take the leap right now, or do you wanna defer it until more of the ecosystem has moved forward?

**Mikeal Rogers:** I don't know, this may just be where I'm at in my head with the code that I've been writing lately, but I've been working in really restricted environments, where you can't take on a ton of dependencies, and I've effectively had to write all my dependencies again from scratch, because there just aren't enough packages that work like that. The average thing that does something tiny in Node pulls in like 100 dependencies. We're incentivized to do that because it is so easy to depend upon all that stuff. It's not a bad thing from the point of view of Node.js, but when I need that to run in the browser really fast in a tiny bundle size, it's problematic. When I need it to run in the Cloudflare worker and I have a limit on the amount of code I can put in it, it's really problematic... And I don't think we're gonna have less of these constrained environments in the future, so...

**Adam Stacoviak:** We've got three minutes left on the time right here. Divya, I haven't heard from you in a while... What do you have to say?

**Divya Sasidharan:** I was just listening in on this conversation... It's interesting, because I haven't used pika, so I have no reason, similar to what Feross was saying, for switching just yet. And if anything, I would wait until there's a reason for me to switch, like there's an actual problem that I'm trying to solve... Which I don't have.

\[00:52:02.19\] Because I know that pika apparently has -- I've heard a lot about its optimizations for tree shaking, and less module dependencies, and all of that, but I've never noticed that need in my applications for me to switch over. And I would use that argument for most tooling out there.

**Feross Aboukhadijeh:** I'm actually excited to try pika. I don't wanna come across as like a hater, or anything. I just think that, like I was saying, you have a limited number of technical bets that you can make. If I'm already at my maximum limit -- like, this thing I'm working on is probably not gonna work, it's already so hard for me to do it, do I wanna add on the additional risk of like "Oh, now I'm using a bundler that is really bleeding edge"? Do I wanna be the one who's filing the bug reports, or do I want the people who came before me to have already figured out all the obvious bugs? It depends on if I have the bandwidth for that or not; and if I don't, then I wanna stick with more trusted, reliable tools.

**Adam Stacoviak:** I think you're gonna always scrutinize the tooling you use, though... So I think your pushback on pika is wise, because you wanna understand why you should use it, and what problems it really solves, and whether or not it actually creates more for you.

**Feross Aboukhadijeh:** Exactly.

**Mikeal Rogers:** Yeah, pika right now is not what I would recommend people to use, actually. When you look at pika and understand what it can do in such a simple package by shedding a lot of the features in the past, and by wholly kind of adopting the new browser standards for modules, you realize that there's a very large opportunity in the future for us to shed a lot of that, and for us to build much simpler, more reliable tooling.

**Feross Aboukhadijeh:** That makes sense.

**Mikeal Rogers:** Yeah, yeah. So I think it's done more to just sort of expand what I think that the future is gonna look like around this, than it is currently a solution to this problem.

**Feross Aboukhadijeh:** Yeah. And there's something that's really aesthetically nice about that idea of like "We're just gonna get rid of all the legacy crap that's annoying."

**Adam Stacoviak:** And for those out there that are listening, if you're new to pika, like I am, you can find out more details at pika.dev. There's also a lengthy blog post titled "A future without Javasc--", sorry, not Javascript. Hang on a second, rewind... \[laughter\]

**Mikeal Rogers:** You already did that Yep/Nope. \[laughter\]

**Adam Stacoviak:** "A future without Webpack", written by Fred Schott, I believe the creator behind pika, on dev.to. We'll link it up in the show notes and put that on Changelog News as well, because I hadn't seen this yet, and that's something we should be spreading the news about.

This was a fun debate, I really enjoyed the format. I think even having to throw the curveball at ourselves with the It Depends section - Feross, I think you represented it really well; Divya, you represented Yep very well, and Mikeal, Nope... And I think in the middle there we sort of all huddled around and said "Bummer, it's so complex. Let's find ways forward", and talking about where we're going actually in the future.

Listeners, if you want to say hello to us, you can do so on Twitter. We're at @jspartyfm. You can head back to the show notes, there's a link there that says "Discuss in Changelog News." We love to hear feedback, we love to hear from you our listeners, so we encourage you to do that, but... Mikeal, Divya, Feross - thank you so much. It was fun.

**Divya Sasidharan:** Yeah, this was great!

**Mikeal Rogers:** Yeah.

**Feross Aboukhadijeh:** Happy to be part of it.
