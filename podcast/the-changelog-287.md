**Jerod Santo:** So Truffle is called an "Ethereum Swiss Army knife." We're gonna dive into all of the details of Truffle, Tim, and we're gonna have you explain it soup to nuts to us... But let's get to know you a little bit and understand your relationship with the Ethereum ecosystem and how you got into this game in the first place, and how you became the Truffle developer. Can you tell us that story?

**Tim Coulter:** Yeah, sure. The short version of it is when the Bitcoin boom hit in 2013 when it went from $5,000 to $1,000, I got into cryptocurrency after that, and got really excited about what it is and what it could do. In early 2014 I started mining, I mined on a bunch of different altcoins at the time now worth nothing... It was a fun experience for me, and I did it mostly on the side. I was working for startups and have worked for startups my whole career coming out of college, and the startup I was working at I eventually got laid off, and by that time I had been doing other work in cryptocurrency, I had built an application on my own time to track all of the price data for a bunch of different trading pairs; basically, every trading pair on ever exchange available at the time. I was trying to aggregate all those and eventually sell that data...

In any case, that whole thing got me in interested in the blockchain world itself, so when I got laid off from this company, I told myself "You know what, I'm gonna go work in blockchain." So I searched around, I eventually found a post on angel.co, and that led me to consensus. That was around April of 2015. The post was actually for a web designer job. Excuse me, not web design, a graphic designer job... And I can't actually do graphic design, but I sent them a message anyway and said "Hey look, I could try this. I'm really excited to work in the blockchain world, I'd love to work with you", and they responded the next day.

\[04:13\] The rest from there is kind of history, but as far as Truffle is concerned, my past history in software development is actually in the software testing world. In college -- I have a software engineering degree, but I worked a lot with a professor in software testing, and that was big in the software testing community... So when I came out of college, I used that network to find jobs in the software testing world.

What that means is that for most of my career, effectively 8 years leading up to coming into the Ethereum world, I was doing developer support. This is everything from performing manual testing, to writing software testing frameworks around new technologies. When I came to Ethereum, it was very clear that there were no tools at all; you had a compiler and a JavaScript library for interacting with the Ethereum blockchain, and that was about it. From there, it seemed very easy to fall back into this developer support role, and I ended up building tools through the Ethereum ecosystem.

**Jerod Santo:** Yeah, it's very apparent looking at Truffle that there is a lot of tooling around Ethereum that has been lacking. I was actually commenting to Adam before the show, as we were doing a little bit of reading, how we found EthPM, which is like npm for the Ethereum ecosystem. I was just telling him, it seems like everything is being recreated in this particular Web3 Ethereum world, and it kind of reminds me of when Node first came out, and I remember Ryan Dahl announced it, and it was like a bunch of interest and a bunch of developers like "Okay, this is cool. I wanna dive into this", and there was just nothing. It was completely greenfield. If you wanted to be influential and helpful in Node, it was very easy at the outset, because there was so -- I mean, pick a library, pick a domain, and there was just no tooling. So it very much feels like the early days in that regard, with Ethereum.

**Tim Coulter:** Yeah. Everything you just said is probably applicable to how it is now, even with Truffle and other tooling, but it was even more applicable in 2015. There was one other tool or framework available; I looked at it, I didn't like the way it was built, and instead of going into that project and telling them to re-architect their whole thing, I created Truffle, and really, it was formed out of a bunch of scripts that I had built for myself to do all the 17 steps that I needed to do in order to build an Ethereum application. So it just started out that way. As far as being influential, this is just something that I needed, and now I've built the most popular Ethereum framework so far.

**Jerod Santo:** I kind of wanna go back to a small point you made a little bit in your back-story that struck me, which is that you said that posting by ConsenSys -- by the way, will you just fill in for all listeners what ConsenSys is, so that everybody knows?

**Tim Coulter:** Yes, ConsenSys is a startup incubator for the Ethereum ecosystem. So effectively, we have something like 40 different projects or teams - we call them "spokes". These spokes are working with ConsenSys to become their own companies eventually.

**Jerod Santo:** Okay, very good. So you had -- this ConsenSys job post was out there for a graphic designer. And like you said, you don't know graphic design, but you applied anyway or you contacted them anyways, and it reminded me of that meme - I don't know if you guys have seen it - where it's a picture of a cat in front of a computer, on a keyboard, and it says "On the internet nobody knows that you're a cat." \[laughter\] Have you guys seen that?

**Adam Stacoviak:** That's pretty funny.

**Jerod Santo:** \[08:07\] And it's so true. Every once in a while I just kind of think about the power and the beauty of the web, and what it provides to people, in the sense of not even anonymity in this case, but just kind of allowing yourself to kind of define who you are, and giving us the confidence and the ability to say "Yeah, I wanna go after that anyways." I feel like there's a liberty that the web provides that is a beautiful thing.

**Tim Coulter:** Absolutely. Previous to ConsenSys, I worked at startups... I think it was eight startups in roughly eight years -- no, that would be seven in eight years. And obviously, if I'm not staying at any of these places, I didn't really feel like those companies were something that I wanted to build my career on. And so far, I've been at ConsenSys for three years, which is almost as long as you can be at ConsenSys...

**Jerod Santo:** \[laughs\] It can't be that much older of a company, since Ethereum is about maybe four years old...?

**Tim Coulter:** Right. And I don't wanna leave; I feel like I've been the most influential I've ever been in any company that I've ever worked for, and I see myself -- maybe I'm getting to the right age and settling down, but really, this is probably gonna my career company for a long time.

**Adam Stacoviak:** What is it that you do day to day? Just curious. So you started Truffle, but what do you do day to day?

**Tim Coulter:** Yeah, that's changed a lot. When I started Truffle, I was literally coding every day, most of the time... Coding or interacting with our users, in our Gitter channel. Now, since the team has grown - in three years we've grown from one to six - my job now is mostly vision and management. Effectively -- well, this is a story on its own, but when I hired developers, I felt like what I was doing was handing my baby away over to people that were gonna go develop it themselves and go figure out what the right way is, and that was actually a hard thing to figure out. But once we've figured out the right way to work together, what we found now is that - what I do is I work on the product and where Truffle and the other product are going to go, how those are communicated (go on podcasts like this, for instance), and I'm spending a lot less time coding. I would say I'm in that transition period now where my whole job and what I expected my job to be has completely changed.

**Jerod Santo:** Well, that's awesome. It sounds like it's an exciting change at this point, and hopefully in the long run -- I'm sure it will just continue to move and evolve, as the company and the industry does. I know there's a lot of CTO-style positions where there's satisfaction to the work, and there's also this deep inward desire to get into the terminal, the text editor and code things up.

**Tim Coulter:** Right, right.

**Jerod Santo:** So hopefully there's some balance there for you. But nonetheless, coming on a podcast, getting to talk about these things, helping to guide a team of talented people sounds like definitely fulfilling work.

**Tim Coulter:** Yeah, it's fulfilling and a huge learning experience at the same time. I have to take this time to give a shoutout to my team, but I've got a great group of people working with me and I couldn't ask for anything less.

**Adam Stacoviak:** When you said the headcount - that was just for Truffle though, right? Not ConsenSys at large.

**Tim Coulter:** Yeah, yeah, just for Truffle.

**Adam Stacoviak:** I was gonna say -- because that was a little small for ConsenSys at large.

**Tim Coulter:** Oh, super small for ConsenSys... Super small. In fact, when I say one to six, I was worried myself, I'm like "Oh, that doesn't sound like big growth..." You know, at Truffle we're trying to keep things lean, so six in a period of three years is okay. ConsenSys though - I believe we're over 600 people now, so...

**Adam Stacoviak:** \[12:16\] I wanted to put that clarity for those listening, because I'm like "I know that ConsenSys is bigger than one to six."

**Tim Coulter:** \[laughs\] Yeah. So ConsenSys is huge, and we're only going to continue to grow as we bring on more projects, or as projects scale... For instance, I know that one of our spokes, the MetaMask team, is roughly the same size as Truffle right now, and they are getting huge traction (we're talking millions of users), so that team needs to scale, and this is happening all across the Ethereum ecosystem.

**Jerod Santo:** Yeah. Well, let's get into Truffle a little bit. I already quoted one of your taglines when you say it's the Ethereum Swiss Army knife; here's another one, a description: "Truffle is a world-class development environment testing framework and asset pipeline for Ethereum, aiming to make life as an Ethereum developer easier." When we had Kevin Owocki on the show with Gitcoin, I'm not sure if he said it on the show or after the show, but he says Truffle is like Ruby on Rails for Ethereum...

So those three things: Swiss Army knife, testing framework, asset pipeline, Ruby on Rails - does that pretty much encapsulate what all Truffle has to offer?

**Tim Coulter:** That's a bit of it. Two of those phrases that you said I actually wrote; the Swiss Army knife one...

**Jerod Santo:** So you agree with those two... \[laughter\]

**Tim Coulter:** Yeah, well, kind of. Actually, one of them is pretty old. Truffle has evolved from when it was originally created, and if you look at Truffle now versus where it was, the features and the scope have completely changed. Originally, it was meant to only help you build web applications, Ethereum-enabled web applications. Now it's' meant to help manage the whole workflow of building an Ethereum-enabled application, no matter what your user interface is; no matter whether it's a console application, a web application, a desktop application or what have you.

So the asset pipeline part of one of those phrases is no longer true. We decided to get out of the asset pipeline game and push that off to libraries that do that better, for instance like Webpack, or Browserify, of whatever you'd like to use.

But what we do, and Truffle's main focus is giving you the tools to build a smart contract. And if you come into Ethereum, you're not gonna know what to do. The paradigm, the way you program on Ethereum is completely different from the way you might program in other environments. This goes back to one of those things that you said where things are completely new in this space, and that's part of the reason why.

As far as the Rails phrase is concerned, that is pretty close to true. Rails was an inspiration for me when I was building Truffle originally. I come from a Rails background; on the side, when I was doing all the testing work I told you about for those startups, I had a Rails app that I'd built... And what Rails does, among other things, is provide that workflow for web applications, and we do the same thing for Ethereum applications.

**Jerod Santo:** Very cool. Well, I think it's a very apt comparison then. Let me give you a little bit of the lay of the land from Adam and my perspective, as well as our listeners, what I would expect in terms of developer knowledge, what we've covered on the show, and then we'll have you walk through -- because one of the reasons why we have you on is to a) understand what Truffle offers, but also using Truffle as a lens, learning what all it takes to build these decentralized applications and what all the moving parts are, because as we've said, it's all kind of new and different, and that means it's also kind of intimidating and maybe difficult to approach.

\[16:25\] So we've covered Ethereum conceptually... Way back in the day we've had Gavin Wood on the show; we had shows about blockchains, and Hyperledger, Bitcoin, distributed exchanges... We had shows about the concepts around blockchains, cryptocurrencies, what have you - Ethereum specifically, we've covered smart contracts both generically and a little bit specifically with regard to Gitcoin, which was our most recent show. And with Gitcoin, we talked a little bit about how that application specifically works with regards to MetaMask, and Web3, and those kinds of things.

That being said, from a developer's perspective, building an Ethereum-based application all the way through, even after myself having all these conversations, is still kind of a black box... So why don't you give us the high level of all the parts that are involved, and then we'll kind of dive into the specific regions?

**Tim Coulter:** Yeah, so if you're building an application for Ethereum, you have to execution environments you need to worry about. You have the execution environment that your app is running in - if it's a web app, that would be the browser - and then you have the execution environment of the Ethereum blockchain. Now, if you're a web developer, you would understand this separation as just client and server architecture. What makes things different in this case is that every action you want to perform on the Ethereum blockchain has to go through a transaction, and that transaction has to be mined, there's some wait time involved... You have less control over the architecture and you can't create the responses that you'd like to create if this were your typical server client architecture, that would return the right answer as a response to the request. Instead, you have to make requests, wait for the results to be mined and on the blockchain, and then do something with those results. That kind of turns things on its head a bit, and you have to program a little bit differently.

First off, you have to get code on the Ethereum blockchain, which is a completely separate process than, say, building your own web server. You have to build your front-end application - that's pretty similar to how you would do it now, except you would need software to connect your typical way of building your web application with the Ethereum blockchain. Then you need to take all of the (we'll say) locations of the code - or I guess you've talked about Ethereum, so the addresses of the code and where it exists... You need to take all that and hook it up to the front-end so everything knows how to talk to each other.

**Break:** \[19:31\]

**Jerod Santo:** So what does that look like in terms of Truffle and the code that's provided and the code that you actually write?

**Tim Coulter:** The biggest thing you need to and the first thing that you're likely going to do is worry about your contracts that are going to exist on chain. The contracts are the code that's effectively gonna run your back-end of your application. You can build more complex applications that also use a server that interacts with the blockchain and all that stuff, but let's just ignore that for now, and let's just say that the Ethereum blockchain is your...

**Jerod Santo:** It's your whole back-end, okay.

**Tim Coulter:** Yeah, exactly. So what you need to do is you need to write all those things, which you're using a whole new language, you're writing code in a way that you've never really thought about writing code before... For instance, if there have been bugs in the past that two lines were swapped and it cost people 150 million dollars... So you're writing code and thinking about security and finances and all these things that generally as coders we don't think about, unless we're in the finance world.

**Jerod Santo:** So when you say it's a whole new language, this is Solidity, right?

**Tim Coulter:** Correct.

**Jerod Santo:** This is the language built by the Ethereum team to run on the VM and to interact with the blockchain. So you said you write those - those are obviously a big part of your deal, especially if it's in this case of our hypothetical example, it's your entire back-end. Where I would start with that and where I'm assuming Truffle comes in almost immediately is I would love to write a smart contract in complete isolation with like unit tests, because like you said, swap two lines and you lose a lot of money, or you lose somebody's money... Is there tooling around writing those smart contracts a little bit at a time, and testing that they're working according to you, or before you're even doing any of the other stuff?

**Tim Coulter:** Yes. So you can write your contracts and write tests with them and test them before even deploying them to any Ethereum blockchain. So what Truffle is gonna do is, believe it or not, help you compile those contracts, because the compiler itself is pretty simple... So it's gonna make that experience nice for you. It's going to help you write tests, if you're a JavaScript programmer, in a way that you're familiar with, and interact with those contracts within your tests, as easy as possible. And then after you're done writing the contracts and testing them, it's actually gonna help you provide a simple way of deploying those contracts to your blockchain of choice; this could be the main net, it could be some test net, it could be a network you've set up between a few people...

\[23:55\] And so all of these things - except for perhaps testing, but compilations and deployment - produce very important (what we call) artifacts, which include for instance the address of where that code lives on the network. These artifacts are super important because you're gonna take this output from Truffle and then you're gonna go integrate that into your front-end using various different tools and libraries, or roll something your own, if you like... And after doing that, you'll be able to easily build a front-end that interacts with those contracts that you've just built.

**Jerod Santo:** Okay. Let me ask you something about Solidity, as somebody who's intimately familiar with it, but also didn't build or design or choose it... Why Solidity? Why do we need another language, one that I've looked at and it doesn't look like it has any particularly interesting aspects to it...? Why not just Python or JavaScript for writing the smart contracts? Do you know why that had to be its own thing, that now millions of people are learning and struggling through?

**Tim Coulter:** Right. I think there's a couple reasons. First is we needed a language that compiled down to the EVM, which I know we could probably do with a different language, but it's scoped around things that the EVM needs. For instance like the cost of every instruction has a Gas cost to it, and Solidity is kind of built around that as far as its internals... But more importantly, the EVM supports (I believe it's) 256 bits of information, or bytes, or -- shoot, I'm getting this mixed up right now. But regardless, huge data types that effectively don't exist in other languages, and these data types have to be perfect because you're dealing with money... You can't use JavaScript to deal with large numbers, because JavaScript only goes up to like 14 bazillion, which isn't that large of a number...

So my hunch - I'm not from the Ethereum Foundation, but my hunch is that they needed a language specific to what it's like to build for smart contracts, with respect to the needs of smart contracts.

**Jerod Santo:** It makes sense with the Gas primitives and all those things, that something specific would make a lot of sense.

**Tim Coulter:** Now, I think that's where they started. The ideas around smart contract languages is evolving, and so we're thinking - well, not we, but the community - about working on other ways of incorporating other languages... For instance, I don't know if you've ever heard of eWASM, but we can get a lot of the languages that currently exist in the world to compile down to eWASM, and then eWASM would be translated to the EVM. eWASM is WebAssembly.

**Jerod Santo:** What's the e in front of it? Is that like Ethereum WebAssembly?

**Tim Coulter:** Actually, I believe so.

**Jerod Santo:** Okay... See? You're reinventing everything. EthPM, eWASM...

**Adam Stacoviak:** ERuby...

**Jerod Santo:** Can I get your eBrowser?

**Adam Stacoviak:** EJS? \[laughter\]

**Jerod Santo:** What about email? We could do email...

**Tim Coulter:** Ethereum Mail? Absolutely. \[laughter\] So I think with the eWASM project what they're actually doing is compiling normal languages down to WebAssembly that somehow Ethereum can know about. I'm not too well-versed on that project, but I do know that it's supposed to be the big connector of all of our current languages. The hard part there is how do you take advantage of the specific things that make the blockchain the blockchain? Like, I don't know, if you're writing Java or something, how do you specify that this is like a storage variable? A storage variable, for those listening, is data that's actually going to be stored in the blockchain, and you're paying as part of the transaction to store, versus like something in memory that you're just using as part of a computation.

**Jerod Santo:** \[28:06\] Okay, so Solidity is what we have today; maybe there will be better things down the road. Another is competing blockchains, they are trying to do things like native JavaScript smart contract language, but none of those have the size and steam that Ethereum has at this point...

**Tim Coulter:** Right.

**Jerod Santo:** But Solidity is what we have --

**Adam Stacoviak:** What about here, before you go there Jerod. The question is this isn't the only blockchain, right? You do have other places you could do cryptocurrencies; we're talking about Ethereum here in this case, and building on Ethereum... Obviously, Solidity is for Ethereum. Is there other languages you use elsewhere? This is only for Ethereum...

**Tim Coulter:** Yeah, as far as I understand, Solidity is only used for Ethereum. There are actually other new Ethereum languages, if you guys are interested in those. Viper is one that takes its ideas from Python, LLL (Lisp-Like Language) is another one, which obviously takes its ideas from Lisp... I don't know if any of those languages are -- if people have written compilers for the other blockchains or if they'll work on other blockchains.

Now, I have heard of many other blockchains that use the EVM, so for instance they will change the consensus protocol around, or change something about the blockchain itself, but still use the Ethereum Virtual Machine under the hood, and in that case those languages are likely to work.

**Jerod Santo:** Very interesting.

**Adam Stacoviak:** Gotcha. But for now Solidity is the primary language most people working with Ethereum use.

**Tim Coulter:** Right, yeah.

**Adam Stacoviak:** Okay.

**Jerod Santo:** I know there's a Bitcoin team that are building a language called Simplicity, I believe, which is going to be some smart contracts on the Bitcoin blockchain. It caught my eye because I thought the name Simplicity was awesome for a language, and that was pretty much as far as I went into researching it. I have no idea of the state, or anything.

**Adam Stacoviak:** They got you right there with the name...

**Jerod Santo:** Yeah, I was like "Simplicity - now, that's a language I wanna use." \[laughter\] So back to Solidity then - we talked about testing them in isolation, and then generating these artifacts... Are the tests that you write against the smart contracts also written in Solidity, or is there more leniency and leverage there to use other tools?

**Tim Coulter:** They can be. Right now we support writing your tests in JavaScript, as well as Solidity, so you could think of these as two separate, but very similar testing frameworks, built within Truffle. Both of them take after Mocha, so you build individual tests, and then you have hooks that can happen before or after certain tests are run, or before a suite is run...

The Solidity ones work slightly differently in that you're actually writing smart contracts that will act as your tests. So these contracts are being deployed to an internal test network that Truffle spins up as part of running the tests; they're deployed to that network, and then transactions - the same transactions you make to the blockchain - are sent that will run those tests, that will run each test function that you've specified.

There's benefits to both JavaScript and Solidity testing. In the JavaScript testing you get to write tests that kind of act or interact with the blockchain from the outside, whereas with Solidity tests you can write more detailed, more fine-grained tests that interact with the individual pieces of code itself. So you can write tighter unit tests, I guess.

\[31:57\] Now, something on this which -- we've been thinking a lot about testing, and as I mentioned, these are Mocha-inspired, and actually use Mocha under the hood in order to run. Mocha is one way to write unit tests, to write automated tests. What we're trying to do is build a plugin system for Ethereum that will allow other frameworks for writing smart contract tests. That's on the horizon, probably Truffle 5, which might be a few months away. With that plugin system you might see more advanced ways of testing or user-contributed plugins that provide different frameworks.

**Jerod Santo:** Very cool. So that tells the smart contracts and the testing story, to a certain degree. Also, we're getting a little bit into the deployment story - like you said, the artifact generation. Deployment to me is scary and black box... But then you also have these Truffle boxes, and so in my mind I thought "Maybe that has to do with the deployment", but I'm not sure. So can you talk about what Truffle offers in terms of "Okay, I've written my smart contracts..."? There's probably more to my application -- we haven't really talked too much about the client side that interacts with it, maybe we should go there... Actually, let's start there, and then we'll get to deployment.

I have my smart contracts... What's the other moving parts on the client side of my application, where I'm interacting with those artifacts?

**Tim Coulter:** Right, so the artifacts just provide information to your front-end, that will allow your front-end to easily interact, and it will allow you to write code that's easy to write for those smart contracts. Some of the information - for instance, I've mentioned the address of where that contract might exist on the network, but also, it includes information about what functions are in your smart contract, and the function signatures of those... And what happens when you pull those artifacts into your application, especially if you're using the libraries that we've written, is it'll actually create JavaScript objects for you that represent those contracts, and then you can make function calls against those contracts, and built into that library, it will actually make those transactions for you... So you don't have to worry about the nitty-gritty of sending all the transactions over what we call the Ethereum RPC protocol and how to deal with all that. Instead, you actually have a representation of your contract in JavaScript that you can just call directly.

**Jerod Santo:** Well, that makes it super easy, as you're basically referencing functions and objects, and you don't have to think about any of the other nuts and bolts once you have that set up.

**Tim Coulter:** That's the idea, you still have to understand that your transactions do take time, so it's not like you're making a request to a server and the server, as part of the response to that request, returns whatever information you're looking for; instead, the library itself needs to wait perhaps 15 seconds for it to get the right response. So what we've done is we've written that code for you, that effectively makes building that frontend a breeze, so you don't have to worry about every transaction or every button click that calls a transaction, or whatever... You don't have to worry about what's going on under the hood. All you have to worry about is "Did my transaction succeed, or did it fail?" and we'll take care of the rest from there.

**Jerod Santo:** So you provide those via callbacks, or async/await type of things...? How is the actual interface into what Truffle's providing from the JavaScript side look like?

**Tim Coulter:** \[35:49\] Yeah, so right now the library that I've described so far is what we call Truffle Contract, and this is actually a library that's existed for quite a while. This one turns everything into a promise, so you can use async/await with Promises, but it doesn't use callbacks because what generally happens when writing a front-end for a smart contract application, or what you generally do is you say "Make this transaction, then do this transaction" after a specific request happened. There's also other pieces of that, so not all interactions with the blockchain are right, not all of them are transactions. Sometimes you can call a function that will get executed, but it's actually just there for reading data, so it doesn't get recorded on the blockchain, it doesn't cost you any Ether to do that... So a lot of the times it becomes like "Perform this transaction, read some data, perform another transaction..." and so this library provides it to you as sort of a promise chain - "I'm doing this, then I'm doing this, then I'm doing this...", so you can have easy control flow.

Something that we released today actually is a library called Drizzle, which is the next evolution of this idea. The JavaScript world and the front-end world has been moving away from effectively home-grown transactions, direct interaction with the server, and instead you're moving to a React and a Redux architecture. Well, wouldn't it be great if you could take those Truffle artifacts that Truffle creates for you, throw them into a library and you've all of a sudden got a Redux store that is tailored to your smart contracts? That's what Drizzle provides - if you like the React and Redux world, there's almost no work involved to fit your contracts into your front-end application.

**Jerod Santo:** Well, if there's anything that us developers do like, it's having almost no work involved... \[laughter\] That's always gonna get us to have the emoji with the heart eyes, for sure.

**Tim Coulter:** Right.

**Jerod Santo:** So Tim, how do you get all this stuff finally up and running in production for Web3 denizens to use it?

**Tim Coulter:** Right, so two parts you need to think about, as we've mentioned before - you have your contracts on the Ethereum blockchain, and then you have the front-end. The one we haven't really talked about is the contracts on the Ethereum blockchain. In putting your contracts on the Ethereum blockchain, if you just go do it yourself, there's a lot you'd have to do. We've mentioned these artifacts before; you'd have to save all those artifacts, somehow create a way for you to save them in a specific format, and then integrate that into your front-end, and XYZ to make that work. Instead of worrying about all that during your deployment process, what you'd rather worry about is the steps of actual deployment, of "Get this contract on the network, then get this one and pass the right data to that contract, and then get this one...", perhaps make a few transactions to configure those contracts after they're on the network, and then you're done. That's what you wanna think about.

So what we have in Truffle is a system that got its ideas, as I mentioned before, from Rails. So our deployment mechanism is actually called Migrations, and what you do in Migrations is you write steps for deployment. Effectively, they're small deployment scripts. You use a library that we provide you as part of the migrations - it's called the Deployer - and you just say "I would like to deploy this contract. Deployer dot deploy this contract". Then you can write multiple lines and deploy another one, or deploy a contract passing variables... And then what this sets up for you is you get these first sets of contracts that make, let's say, version one of your application out, and then you've already got a system with which you can change, alter or perhaps update your contracts later in a migration system very similar to Rails.

\[40:15\] So the short version of this is ideally you can write deployment scripts with Truffle; you're gonna worry about what you need to do, rather than all the nitty-gritty details, and then Truffle will save all that data for you and make it easy for you to integrate with your front-end.

**Jerod Santo:** And then you just push your front-end out to a CDN somewhere, or on your web server, and just serve it up...?

**Tim Coulter:** Yup. So what we've found is that the front-end, and how to do the front-end, and how to build and release the front-end is hotly debated, and changes effectively depending on your developer preferences. Like I mentioned, we got out of the pipeline game... The way that Truffle is built now, you can use this same workflow to build a web-based application as you can to build a desktop application, for instance. You have the artifacts, and then you integrate that with your front-end, depending on what your front-end actually is.

**Adam Stacoviak:** So what exactly is a front-end?

**Tim Coulter:** Well, it's the part of the application that the user interacts with, and it's very different depending on what type of application you're working on. If you're working on a web application, it's gonna be something that runs in the browser and you'll have to deal with all the details of deploying a browser-based application, for instance like taking all of your assets, your JavaScript, bundling them and putting them into a single file, and then somehow pushing that off to a server that's going to host that.

For an Electron-based application, for instance, it's kind of similar, but a bit different. You have to get those artifacts injected into the application itself, and then actually create builds that are compiled to create the desktop application... But there's even a front-end in the console application, and that front-end is what you type into the terminal itself.

**Adam Stacoviak:** So it's the interface.

**Tim Coulter:** Oh, absolutely, yes. Maybe that was the easier way to say it. \[laughter\] Yes! The interface, yeah. But the interface is always different, and whatever interface you're working with changes what you're gonna do. Truffle doesn't do that for you anymore, and we guide you how you might do that, but otherwise let you do it yourself.

**Adam Stacoviak:** Gotcha.

**Jerod Santo:** Very cool. Well, I would be remiss not to mention another feature of Truffle that made me very excited, as it is basically where I live with building Ruby on Rails applications, or building Elixir and Phoenix-based applications is - Truffle provides an interactive console for direct contract communication. Please tell me that that's not something you've moved away from, because that right here is how I do most of my coding - just dorking around in the console until I figure something out.

**Tim Coulter:** We have not moved away from that, we 100% still support that. There's two features now. You can type in Truffle console and connect to a currently running Ethereum client, so maybe the main net or something, or you can type Truffle develop and it will spin up an in-memory blockchain for you that you can just use for development. In both cases, you get a console that takes your contracts that you have, takes those artifacts, turns those into that JavaScript representation of those contracts and it allows you to interact with those right from the console itself. So you're not typing Solidity in that console, you're typing JavaScript, but you have access to your contracts just like you would if you were writing that code in your front-end.

**Jerod Santo:** Very cool. That is worth the price of admission for me right there, especially since the price of admission is always zero with open source software.

**Tim Coulter:** \[44:06\] \[laughs\] That's actually really great to hear, because I don't actually program with the console so much.

**Jerod Santo:** How do you do it, man? How do you do it...?! I guess you write tests, huh? \[laughs\]

**Tim Coulter:** I don't even wanna say... Actually, this is something that we should talk about. Well, I write tests, but I almost hate to say it - I use console.log() a lot in the browser, it's terrible... But one thing that we're now actively working on and will likely be released in a week or two weeks, depending on how this works, is an interactive Solidity debugger. This goes back into the things we've talked about as far as having to recreate the things that we all love in development. Here we're going to have a debugger where you can make a transaction and then debug that transaction no matter what Ethereum client you're on or using; it doesn't matter if you're in Geth, or Parity, or something else, or using our own internal Ethereum client... And you could actually see in the Solidity code, step through the Solidity code and see what happened.

If you've used a debugger and you've used one to figure out tough issues before, well you obviously know the value of this, but really, this is kind of opening up the black box that is the Ethereum Virtual Machine. That's something that's gonna be a huge, huge feature and should come out in, like I said, a couple weeks.

**Jerod Santo:** Very cool. Two other quick things that we will mention - we've mentioned before Truffle boxes, which you can tell us about real quick, and then also we do wanna hear about EthPM and what all is on offer there... So what are Truffle boxes?

**Tim Coulter:** Yeah, so they're effectively our answer to rolling your own front-end. You have to integrate Truffle's artifacts with different kinds of front-ends; what we do with Truffle boxes is give you boilerplates for how to do that in different styles of applications. It depends heavily on what you wanna use, and front-end developers seem very attached to some of the libraries that they're using (and for good measure); so we have Truffle boxes that show you how to use Truffle with React, we have Truffle boxes that show you how to use Truffle with Webpack in order to build your application, we have Truffle boxes with 8-10 boilerplates of how to build different styles of applications, and we're building more as necessary, as fast as we can.

**Jerod Santo:** Very cool. And EthPM - we're very familiar with npm; this has to be an Ethereum-based packet manager. What are the kind of packages that you could pull into a Truffle framework app that would do some heavy-lifting for you? What are some examples?

**Tim Coulter:** Yeah, so the basic package that you'd want from EthPM or even npm is a source package. So literally, it downloads the source for you, and then it runs as part of your application. In this case, you would download Solidity code as a source package. But because people can deploy contracts to any network - let's just say the main net for now... Because you can deploy contracts to the main net, you can actually create packages that connect your application with their application.

For instance, if you are downloading a package and it contains artifacts of addresses of contracts that the package maintainer deployed, you could then integrate those easily into your application and build off of their code. That's part of the visions of Ethereum or the promise of Ethereum - not only we're gonna be able to build our own applications and deploy them, but we're gonna be able to build applications that build off of everything other people have deployed. That's the idea of EthPM. It's still having a bit of trouble gaining adoption, but we're working on that and hopefully we'll have new versions in the future.

**Break:** \[48:11\]

**Jerod Santo:** So Tim, one thing that I've been thinking as you talked, especially back when you were talking about the anatomy of a Web3 decentralized application is you have to wait... You have to wait, because it has to go on the blockchain, it has to be confirmed, what have you; consensus has to happen, these things have to happen on chain... And we've talked a few times I guess, Adam, I think - was it Preethi Kasireddy who talked about Ethereum scaling...?

**Adam Stacoviak:** Yes.

**Jerod Santo:** And we've had scaling problems, we've had CryptoKitties... You know, all of the transactions going on the blockchains are causing many people to talk about how we're gonna scale, proof of stake versus proof of work, sharding - all these different things, right? And so the question is "Why are we doing all of this?", if we get a little bit big picture again. What's the big wins? Because we're talking about the details, but when we look at the forest instead of these cute little truffle trees... Why are we going through all these hoops to get dapps? What's the big win?

**Tim Coulter:** You know, everybody looks at CryptoKitties, and some people might laugh or not take it seriously, but it's actually a great example of something you could do on the Ethereum blockchain. The thing here is that they created - we'll just call it digital art, and created ownership of digital art, and something that people can interact with. Now, that use case in and of itself isn't necessarily the most compelling use case, but it brought Ethereum to the forefront of like what we can do.

You can take applications like this that create ownership or manage finances or script trustless interactions with people using the Ethereum blockchain, and it kind of changes the way we build things.

I mentioned CryptoKitties because I wanna give you an example of something else that you can do, and this is going on to the vision of Ethereum... They built CryptoKitties because they thought they were building a fun application that people can interact with, and I'm sure they've made -- they have a fee system in there, so I'm sure they made quite a lot of money in doing it. Something that Truffle is doing on the side for fun is creating an application that we call the Pouncing Dead; we were gonna call it CryptoZombies, but somebody stole our name.

What's cool about this is we can do what I was talking about before - building our own application that extends the use cases of somebody else's application. In ours what you do is you send the ownership of your kitty - you send ownership over to what we call the Horde. You essentially sacrifice your kitty over to the horde and you get a zombie out of it.

**Adam Stacoviak:** \[54:16\] Oh, my gosh...

**Tim Coulter:** You kill your kitty. But in killing this kitty, you get a new token, you get a new (for lack of a better word) piece of digital art. And what you can do from there is trade them just like you would CryptoKitties, but you can also feed other people's kitties to your zombie to create even more zombies... And this zombie apocalypse comes up.

Now, what we can do with that (with the Pouncing Dead) instead of making money, we can take that fee structure and give it to the Horde itself, so that whenever you sacrifice a kitty over to the Horde, that money gets paid out to you. We could actually create this really interactive -- and in doing so... I mean, you guys reacted yourself, like "This is so cool!" We can create this really interactive system where people are interacting with CryptoKitties, they're interacting with Crypto Zombies... It becomes a narrative that's fun to talk about and fun to interact with.

Like I mentioned, this is just one thing that you can do. People are using the Ethereum blockchain to manage provenance of fish or products that get created and make sure that the authentic things finally make it to consumers... People are using it to check out oil production and make sure that we're producing things right, blood diamonds don't need to happen anymore, we can create applications like decentralized eBay... For instance, eBay is great in that it brings people together, but along with PayPal they take a 17,5% cut, which is outrageous; that doesn't need to happen anymore. The value transfer can happen over Ethereum. So what we're going to do is reduce what we call the amount of rent-seekers that are in our industry today, that are just kind of building an asset and then sitting on that asset, and instead put that value over to everybody else.

And part of this question was really hard for me to answer because there's so many cool things that people can build, but a lot of this stuff we haven't even thought of yet. The promise of Ethereum is there, we just need things like CryptoKitties and the Pouncing Dead to show us how cool this stuff is.

**Adam Stacoviak:** Well, it's certainly a place to jump in and in a fun way understand and learn, you know?

**Tim Coulter:** Right.

**Jerod Santo:** It's right for innovation.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** You can see the potential, but all of the uses so far have either been -- admittedly, I thought CryptoKitties was kind of brilliant as a game, as a piece of digital art (I love weird internet art things), but not revolutionizing the world.

**Adam Stacoviak:** I think you can learn better by fun. You learn while having fun very well.

**Jerod Santo:** Sure. I think crowdfunding was a great example of a capability that was unlocked, and then we see the positives and the drawbacks of that with the scams and what have you... But that's kind of just the market sorting itself out. But I think we all can agree that, like Adam is saying, it's a good place to jump in and be bleeding edge and have fun and learn something that has tons of opportunities... But I don't know if any of us have even seen where the real killer use case is, where they're coming, you know?

**Adam Stacoviak:** Right. I have one question before we go to that... In a world where we have to -- I think it's always been this way, but in a world where we need verifiability or trust in a marketplace, like you had said, to ensure authenticity, how do you attach the real world to a blockchain in terms of knowing that I've authentically sent you this eBay item, or given you this blood diamond, or non-blood diamond? How do you track real world in blockchain? How does that attach itself?

**Tim Coulter:** \[58:23\] Yeah, that's the hard part. You only transfer digital value. You can only easily transfer digital value over Ethereum itself. You'll have to use external systems that connect to the blockchain in order to transfer real-world value. For instance, I mentioned the eBay example... The value transfer that I mentioned there is only the value transfer of the buyer paying the seller; it's not the value transfer of the actual product, or...

**Adam Stacoviak:** The physical good.

**Tim Coulter:** ...the physical good being sold, being transferred over. Here there will always be a level of trust involved when you deal with the physical world. You're gonna have to trust FedEx in this case. But FedEx could implement features that track the location of the good and where it's at and who's handling that, on the blockchain, if that actually makes sense for them.

The FedEx example of actually putting that on there - that may or may not make sense for this example, because basically we're all fine with checking our tracking number online and using their current existent databases. Blockchains don't make sense all the time. But there are cases where you might want to track physical goods and where they're coming from, and pair identity - which is something we're solving - with the blockchain itself, so you then have this person making a statement that something about the real world is true, whether it's the location of a physical good or something else. If we can do that right and we get the identity thing down, then it can unlock quite a bit of things.

It's gonna come down to, you know, I suppose I could lie in person to you, talking to you, as much as I could make a transaction on the blockchain. But if we can build systems that make that harder or make it very clear that I'm the one who embezzled whatever this thing was, then perhaps we can increase accountability or what have you.

**Adam Stacoviak:** Right. The blockchain provides one side of the equation of truth...

**Tim Coulter:** Right, right.

**Adam Stacoviak:** ...and then it's up to us to have the other side, which is physical truth.

**Tim Coulter:** Right, yeah.

**Jerod Santo:** Or somehow bridge those, the analog and the digital systems with RFID chips, and FedEx integrations, although admittedly at that point your trusted third-party is FedEx... So yeah, sometimes I feel like we're the cat and the hat, where they have the stain on a tub, and then clean up the tub and now it's on the rag, and then it gets off the rag and now it's on the wall... And it's just kind of pushing that smudge around and you can't actually get rid of it... But it's progress, I think.

**Adam Stacoviak:** Yeah.

**Tim Coulter:** Right. Yeah, and there's some things that -- I've mentioned identity, because that's really important to effectively everything we do on the blockchain... But for instance, if we get identity solved and the politics around voter ID laws or such that it's fine, we could actually have secure voting online, without the possibility of...

**Adam Stacoviak:** Tampering.

**Tim Coulter:** Tampering, exactly.

**Adam Stacoviak:** Or coercion, or all the things...

**Tim Coulter:** Right, yeah.

**Adam Stacoviak:** \[01:01:54.18\] You were explaining -- I think where we were trying to go is like real-world examples... Like, who's using it? Why are they using it? What are they building with it? We kind of know some examples now, like we've mentioned ICO's and fundraising and different things like that... Actual value, which is a cryptocurrency, or in this case maybe the FedEx example, or eBay for example, but other examples might be pretty interesting to share... Can you share more about what people are building with it and why they're building with it? Maybe what the value is happening in a certain community, around what they're building?

**Tim Coulter:** Yeah, so the current things that are being built are mostly around financial transactions. That's because our money has been digitized for years now, so it's really easy to write code or systems that mimic the ones we already have, but in a trustless manner. For instance, I forget the word, but there's this idea of taking two assets - if both of us own an asset of a different type, and we want to swap the risk of owning each asset, we can actually perform those swaps... Those things are terribly hard to do in the real world, of just getting everybody involved, but when it's a blockchain where you have tokenized assets and people can just send the transaction that gets them into the swap, everything is taken care of. There's a word for that that I'm looking for, but really the financial use cases are the ones that are winning out right now, and we're still figuring out how the real world...

**Adam Stacoviak:** Fits into that.

**Tim Coulter:** Exactly.

**Adam Stacoviak:** That's blockchain at large, or maybe even Ethereum at large. What about Truffle at large, specifically? Like dapps, Web3... This kind of thing.

**Tim Coulter:** Truffle -- you know, I hate to use this example, because it's of negative... But if you have a gold rush, somebody's gotta build the shovels, and I feel like that's where we're at with Truffle. We need to build the tools that people need in order to unlock these new use cases of blockchain or the next generation of blockchain applications... And that's where we see ourselves as Truffle.

We know that there's huge opportunity here, but his opportunity isn't going to be taken advantage of if the tools don't exist. We're working to build the tools, we have a heck of a good time building tools that people find are useful for them and we get great feedback, and hopefully we can build a platform that people use in order to build that next generation application or that -- what did you call it? The app that's gonna win, whatever it is... There's a word for that.

**Adam Stacoviak:** The killer app.

**Tim Coulter:** Thank you, the killer app! \[laughter\] Yeah.

**Adam Stacoviak:** I think it's interesting though with what you said using the shovel analogy... You know, t think of the way that, Jerod, you were just saying earlier how you love how the internet makes it available to you that you can define who you are, and in the same way our ancestors, maybe even one or two generations up, parents up, you've got people who literally made physical shovels. Now we're making digital shovels, so to speak. I think it's just interesting how the world has changed and is changing and will continue to change to just essentially -- we're makers. This age is makers.

**Jerod Santo:** Very true. Tim, while you were talking there I did find, just probably to trigger your brain on a few of the companies and projects that are using Truffle in production, you do have some listed... To give you some more - you mentioned the Stablecoins, so there's one called Stable; ShapeShift, which is like a currency exchange. Colony and Aragon, which I believe these are decentralized, democratic organization type of operations...

**Tim Coulter:** Yup.

**Jerod Santo:** \[01:06:03.07\] So there's definitely interesting and new things being built with the digital shovels you all are building, so... It will be interesting.

**Tim Coulter:** Yeah. Another one on that list who has been an active Truffle user for a long time and they've been using Truffle perfectly is Digix Global. They manage tracking and selling -- or we'll just say tokenizing actual gold, so you can sell it, and make those markets more fluid.

**Adam Stacoviak:** That's interesting, you remind of actually when I asked the question about how can you track a diamond... They actually have tiny lasers -- well, I guess I don't know how big the laser is, but the laser is probably just as big as it needs to be... \[laughter\] But the thing that lasers onto the diamond is a sequential number, so that number could be a token, so to speak, for the blockchain.

**Jerod Santo:** They hatched it in.

**Adam Stacoviak:** Yeah.

**Tim Coulter:** Right.

**Adam Stacoviak:** So there you go, Adam, you answered your own question on your own podcast.

**Jerod Santo:** There you go. \[laughter\] Why do we even have guests, Adam? You could just answer all your own questions.

**Adam Stacoviak:** I don't know, man... Geez. \[laughter\] It's interesting.

**Jerod Santo:** I love that - perfectly-sized lasers. \[laughter\]

**Adam Stacoviak:** The laser is as big as it needs to be, I don't know.

**Jerod Santo:** It's just as big as it needs to be. Like, "Boss, how big is that laser you ordered?" He's like, "The exact size it needs to be." "Okay, good."

**Tim Coulter:** Excellent.

**Jerod Santo:** Well, Tim, anything else before we let you go? Do you have a call to action, a way that people can get involved, help out Truffle, help the community effort around this framework and people building on the Ethereum network?

**Tim Coulter:** Yeah. So I mentioned previously that Truffle is six people... I haven't looked in the last couple days, but since Truffle's inception we've had something over 300,000 downloads of Truffle itself, not to mention downloads of Ganache, our blockchain tool. So we are six people working as hard as we can to build these tools for you. What we need and what helps us the most is your feedback. So whether or not you're building an application for your company or you're building something for yourself, we need to hear what problems you're having, what you're getting stopped up on, so we can make our tool better, make our documentation better, and make the whole developer experience better for you.

The best way to do that is to hit us up on our Gitter channel, which is Gitter.im/consensys/truffle, or you can send me an email at Tim@TruffleSuite.com. Please, please reach out.

Oh, and I didn't mention that we are heavily tracking our issues list on GitHub for Truffle and Ganache and Drizzle. Please feel free to write an issue there if you're having one.

**Adam Stacoviak:** I guess since you've mentioned your stats too, we should also mention that awesome dashboard, which does share a lot of the information you just shared there, so you've got... It's actually 327,704 downloads lifetime, which is up 42% from the past month, and there's quite of an uptick there too, from like September/November timeframe to now, of downloads, so that's -- you can see that real-time.

**Tim Coulter:** Yeah. This is open data, so it's pulled straight from the services that provide you those stats. For instance, the downloads is pulled directly from npm, GitHub stars is pulled directly from GitHub; your browser is actually doing the pulling of that data, so you can keep checking back there... I roughly check that every day or every other day.

This huge growth, this huge up-tick has actually been really surprising to me. It reflects the growth in the Ethereum community in general, because many of the other up-ticks, if you're looking at our download graph, are related to us putting out a new major version, where in this case that uptick just happened.

**Adam Stacoviak:** \[01:10:11.00\] Yeah. To put it into perspective too for the listeners, we're looking at I think 29,925 downloads - and this is total downloads in a month; that number is for that month. So roughly 30,000 downloads in November, and then come January, they're pushing almost 48k downloads in the month of January. That's a significant difference.

**Tim Coulter:** Right.

**Jerod Santo:** I wonder how well this chart correlates on top of the price of Eth, as it has also risen quite substantially... \[laughter\]

**Adam Stacoviak:** We need a second plot there...

**Jerod Santo:** Because, you know, there's a reason why the people who were selling shovels were selling them to people who were going after gold... Because there's a lot of money to be made and lost in this ecosystem, for sure.

**Tim Coulter:** That's true, absolutely. If it means anything, we're not actually selling any shovel yet. However, we are thinking about getting into the support and consulting world, so if you're a new user to Truffle that needs your team onboarded, or you need some custom work done for you, please reach out.

**Adam Stacoviak:** Very cool. Well, Tim, thanks so much for schooling us on all things shovel-making. This has been a lot of fun.

**Tim Coulter:** \[laughs\] Absolutely. Thanks for having me. I really appreciate being here.
