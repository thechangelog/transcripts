**Jerod Santo:** Hello, world. It's your internet friend. I'm Jerod, and I am excited to party with two of my best friends. What's up, Nick?

**Nick Nisi:** Ahoy-hoy.

**Jerod Santo:** Ahoy-hoy back atcha. What's up, Kball?

**Kevin Ball:** happy to do this on a Friday. I started rocking out a little too much to the music though, and my body's like "What are you doing, man? You're 41."

**Jerod Santo:** \[laughs\] Wow, your body talks to you? That's kind of strange. That's a skill I don't have.

**Kevin Ball:** Yeah, it sounds like "Ouch!!" \[laughter\]

**Jerod Santo:** Love it. Love it. Well, as always, we are excited, which is I think probably - if JS Party had a word, especially if Nick had a word, as I listened to many of Nick's shows in production, it's the word "excited". Nick is always excited.

**Kevin Ball:** Ooh, what would my word be?

**Jerod Santo:** "Ah-hah! I've found ya, ya stinkin' bug!" That's your word right there. \[laughter\] Today we are going to talk about something that I had never heard of before, so that's cool... It's called class variance authority. Listener Michael brought this to my attention via our episode request form. Yes, we take requests at JSParty.fm/request. We do want to hear from you, what would you like to hear about on the pod. Michael says this thing, class variance authority - which sounds very official - seems like... He didn't say that, I just said that. Here's what he says. "It seems like a wonderful DX for applying Tailwind styles, but nobody seems to be talking about it yet. Would love to know more about it." This is a library from Joe Bell, and I think Michael wanted us to get Joe Bell on the show, but we didn't do that. Instead, we got this on the show. "Can you explain it like I'm five?" So yes, we are playing, for the first time in months, "Explain it like I'm five." And so we have the master explainer here, from Monads Hook - it's Nick Nisi...

**Nick Nisi:** Oh, no...

**Jerod Santo:** ...who can weave tales that we all enjoy listening to. Nick has volunteered to explain class variance authority to us like we're five. Nick, take it away.

**Nick Nisi:** Wait, you just said that I can explain tails. But today I'm just full of wind...

**Jerod Santo:** Ohhh...

**Kevin Ball:** Oh, no...

**Jerod Santo:** \[laughs\]

**Kevin Ball:** Is that gonna be the theme today?

**Jerod Santo:** Disclaimer, we're not actually five.

**Nick Nisi:** We're not, and... It's gonna be hard. I am so excited about this library though, and I do love the name, too. It's like, I don't live in a city that has like a port authority or anything like that, but that's what I think of when I hear this name. So it's really cool. But this tool lets you combine classes together. So it lets you define your own action figures, and then play with them, in a way. I'm trying to explain this to a five year old... And you get to -- so sometimes you have lots of different Legos, let's say. You have all of these Tailwind classes that --

**Jerod Santo:** Was it action figures or Legos? Where are you going with this?

**Nick Nisi:** Oh, I knew you'd call me out...

**Kevin Ball:** Two levels of abstraction, Jerod. The Legos are the styles, and the action figures are the classes...?

**Nick Nisi:** Yes...

**Kevin Ball:** Okay...

**Nick Nisi:** No... I don't --

**Jerod Santo:** I was gonna say, Kball, you're giving him too much credit here. \[laughter\] He just switched objects on accident, and he's like "Hmm... Legos make more sense than action figures."

**Kevin Ball:** Okay, so he's the AI with no memory. That's what's going on.

**Jerod Santo:** Yes, exactly. So he wants us to forget and start fresh. Okay, you're building Legos. Go.

**Nick Nisi:** So you've got these connects, and you build -- \[laughter\] You've got these Lincoln Logs...

**Jerod Santo:** Those are cool. All you can build is like a log cabin though. That's all it --

**Kevin Ball:** Oh, you can build a whole farm.

**Nick Nisi:** Yeah.

**Jerod Santo:** What? Alright...

**Nick Nisi:** You can build various log cabins...

**Jerod Santo:** What does this have to do with class variance authority?

**Nick Nisi:** \[laughs\] This authority is the one that gives you the permits to build those homes. No, but -- okay, so you've got these Duplos, and individually, they're great, but they come in all shapes and sizes individually; it's not very creative to just have them on their own. You combine them together to make something better. And sometimes, if you were a really skilled five-year-old, you're going to have like an assembly line where off site you're going to build the trusses for the roof, or whatever, and then you're going to ship those to the build site to actually put them together. You're not going to be like smelting everything right there; you're going to be building these things off site, and bringing them over. And so what CVA lets you do is to do that building off site, not in your React component, or in your component of Svelte, Astro, Vue, any of those. It can be used anywhere; you're not gonna be doing it directly in the component, instead you're going to be doing it in this class variants authority object. And you can define that when you're building this type of variance. So maybe you have your roof piece... Are those called trusses? I don't even know. I'm showing my ignorance here...

**Jerod Santo:** Don't ask me, man... I'm a software developer.

**Nick Nisi:** \[06:06\] Okay. The triangle things.

**Jerod Santo:** I think trusses sound good.

**Nick Nisi:** Sure. Those are built --

**Jerod Santo:** Can we go back to smelting for a moment? ...because surely, child labor laws come into effect at a certain point. I mean, can a kid be smelting at five? In certain states, it's probably found, including ours...

**Jerod Santo:** Okay... Including ours. Okay, fair enough. A five-year-old smelting. Keep going.

**Nick Nisi:** Yeah. We don't condone that on JS Party, by the way.

**Jerod Santo:** No. They should be at least six.

**Kevin Ball:** So Nebraska - it's not for everyone, but it is for five-year-olds smelting. \[laughter\]

**Jerod Santo:** That's right.

**Nick Nisi:** So yeah, you put those together; they're these variants that you can put together, with all of their building blocks that would be in that, and then you can have these different pieces that then you can combine into the actual components, or shapes, or Lincoln Log homes that you want.

**Jerod Santo:** Duplos, man. You were stuck on Duplos.

**Nick Nisi:** Yes... \[laughs\] And so when you actually go to use those, you've got those all defined and shipped and put together as separate pieces, and then you can use those pieces to combine together to make your actual components, and combine them together with mixing in your props and your styles to actually create the components that you want. And this is a really great idea, because it lets you manage those as your own custom blocks. Because when you're putting those little Duplos together, you're making bigger Duplos, that are your own custom Duplos. And then you can just apply those custom Duplos everywhere in a more manageable way. And that is what CVA is letting you do.

**Kevin Ball:** So I'm totally lost in the metaphor...

**Jerod Santo:** Can you explain it to Kball like he's 41?

**Kevin Ball:** Yeah, right. \[laughter\] Or maybe this time use Magformers. That's gonna help us, because they'll --

**Nick Nisi:** Whoa... Yeah, I don't know what Magformers are. I wasn't that cool.

**Kevin Ball:** They're these like cool, magnetic things that snap together. They're also number six on the list ChatGPT gave me for alternatives to Lego.

**Jerod Santo:** \[laughs\] Okay.

**Nick Nisi:** Yeah, maybe let me try --

**Jerod Santo:** Let's explain it in normal style, and see if we can follow... Because I super-didn't follow that.

**Nick Nisi:** Yeah, yeah, yeah. That's what I was gonna do, explain it to a 41-year-old.

**Jerod Santo:** Yeah, yeah, yeah.

**Nick Nisi:** So what this lets you do is it lets you define these variants in different fashions. And so you can say, "Give a list of variants", and they call them intents in there. And the intent would be what you would pass as like a -- you'd pass an object to the CVA function that you create, and they call them intents. So you could say, "My intent is primary." But I would call them like variants. Or I would call it variant, specifically.

So let's say you're creating like a button, and you might have like a primary button, and a secondary button. And your primary color is for one, secondary color is for the other, and it switches between the two of those. Then you might have other variant pieces of that, where you might have different sizes. You might have like a small button, a medium-sized button, or like a full-width button, where it takes up as much space as it can. So you'd have all of those together as different variants as well. And what you want to do is be able -- you call CVA, and you can pass in a number of classes that are just always applied as an array, as the first argument. And then the second argument is an options object that you can pass in these variants. And so we could call that - instead of the variants, we could have like a variant, or call it intent, and then you could have like size, and any other properties that you would normally pass to a button, whether it's disabled or not, for example... And then you can say that when the variant is of this value, meaning like primary, then you apply these colors; like, you could have like a green color for the primary button, and a white text color. And then for the secondary, you could have it be a blue background color, also with a white text color.

\[10:01\] And the way that you can apply those is through just passing in what values will be in the class name, like in React, for this style; so what classes you're passing. Which is why this works really well for Tailwind, because you've got tens of thousands of classes to pass and manipulate in there. So those are your Duplo blocks. And then it has this other cool feature... So when you do that, you just say in your React component, you say, "Return my button JSX", and then in the class name is where you can call CVA, and pass in those values. You can call the value that you got back from CVA, which would be the classes to apply for a button. And then you can pass in what you want the variant to be, what you want the size to be, and it will automatically generate the appropriate class list, and add it to that class name property for React.

**Jerod Santo:** Okay. I think I'm with you. Kball, are you with him?

**Kevin Ball:** I think so. So if I'm understanding, it's essentially a utility for central management of your CSS classes.

**Nick Nisi:** Correct, yes.

**Jerod Santo:** Right. And allowing you to group them based on some other semantic word that you choose, such as secondary. And secondary can represent these 10,000 Tailwind classes, and primary can represent these other ones. And all you have to do is say primary or secondary, and it gets the right class list, and then you can also have this merging/munging thing, where it seems like there's a tree there \[unintelligible 00:11:31.13\] the data structure itself. And you can kind of have melding of the class lists in order to get the right thing out with another name kind of a thing.

**Nick Nisi:** Yeah, it has this ability to make compounds of that. So you can say when it's a primary of size large, also apply these.

**Kevin Ball:** So I think there's value here, but it also feels like part of the value here is fixing the brokenness that is the way that Tailwind makes you think about CSS...

**Jerod Santo:** Well, if you think it's broken...

**Nick Nisi:** Yeah. I'm prepared to have this war.

**Jerod Santo:** Some people will prefer this over CSS-in-JS, or you know...

**Kevin Ball:** I'm being deliberately provocative there, but I do think -- so Tailwind solves a set of problems and introduces another set of problems. And part of that another set of problems is the incredibly verbose class lists that you end up with all the time, where in -- you know, one of the things that Tailwind does really nicely is it pushes you to standards, and it says, "Okay, you're not going to worry about thinking about your spacing for every component. You have a class that does your spacing, it's always going to be the same, and you have like five of them, and you can apply whichever one is appropriate." And that's great. And in a well-designed design system, you have that anyway, and you're composing them into your classes; you're not doing everything, starting your CSS over every time.

So I think what I'm understanding here is it's kind of taking you that step of - what I've heard in theory you're supposed to do with Tailwind is you start to recognize, "Oh, here's the pattern of things that I put together all the time. Let me pull that out and make a new class out of it, because then I can reuse it." But nobody actually does that. And this is saying "Here, let us make it easy for you to do that in JavaScript, so you don't have to worry about modifying your Tailwind config. And we'll solve the problem that Tailwind introduced in a new way, that maybe you're more likely to use than the one that Tailwind also introduced, and nobody uses."

**Nick Nisi:** Yeah. It's exactly that, I think. And if you were to just do this in CSS, you can use Tailwind's @apply in CSS, and combine a bunch of classes together into one. The downside of that is that you lose the dynamicness of doing it in JS, where like CSS-in-JS is more beneficial, because you can --

**Jerod Santo:** You can apply logic based on state, and stuff, right?

**Nick Nisi:** Exactly. You would have to predefine all of those different states in those classes in CSS, because you can't define them on the fly. And so this kind of lets you get the best of both worlds, where you're doing it in this JavaScript way, and you're just saying "When it's like this, I apply these classes. And when it's not like that..." And really, there's nothing that's stopping you from just doing it in a vanilla way too, but you just end up with a lot of conditional, or ternaries of like, you know...

**Nick Nisi:** \[14:16\] Right. It's moving you back to the declarative nature of CSS, rather than what often ends up happening when you write too much CSS in JavaScript, which is this very imperative "if this, then that", and do your ternary, and what have you.

**Nick Nisi:** Yup. But you also get the benefit of this working -- so one of the pain points that I'm running into right now with my CSS-in-JS stuff is that I'm trying to use like Next 13's new app directory, and play with React Server Components... But every component that I use or create has to be a client component, because it needs to access this JavaScript state to understand how to properly apply theme values, and things like that... Whereas all of that actually -- well, if we used Tailwind, all of that is predefined in Tailwind, and with the Tailwind config, and with those classes... So if it's just using JavaScript to try and figure out "apply this class versus that class", it can be a server component and still work 100%.

**Jerod Santo:** Right. So does Tailwind proper allow, like with this @apply deal, can you build the compound class list like this thing can? Is it feature for feature inside of Tailwind? Or is this giving you something you don't have there? I don't know.

**Nick Nisi:** It is feature for feature in that. I've only done that a number of times in Tailwind, with the @apply pragma... But it's just like, I can define .button, and then these are all the classes that it should apply from Tailwind whenever I use button somewhere.

**Jerod Santo:** Right. And I can have one called secondary, and I can say secondary button, and it gets both.

**Nick Nisi:** Right. You would have to have button and secondary together.

**Jerod Santo:** Or I can say a secondary checkbox, and it would get the secondary style -- well check box is actually an input type, but... I'm saying I can add some other component class, and merge secondary with that, and get the cross-section of those two. The union.

**Kevin Ball:** So the other interesting thing here that I think connects to that - so I'm going to jump in - is this is written in TypeScript, and you're doing type-safe composition. And this is a place where I think this actually has potentially unique or interesting value; or it's not unique, because I think there's other things... But what you can do with this then is, if I'm understanding correctly, is like your class that you've designed, or your variant, can specify what types of things you can mix into it, because you have like "Here's this set of types this will accept" as arguments, and you could pass in, "Okay, this as a primary, this as a secondary, and those must satisfy these particular values." And so that now lets you create reusable modifiers. Modifiers that you can statically verify upfront can apply correctly to whatever sets of components you're trying to modify them with.

**Nick Nisi:** Yeah, exactly. And it has this benefit of not having to redefine all of those types over and over. So if I say that I want to have a variant called intent, and it can be primary or secondary, all I have to do when I'm defining my React class, or the props interface for the React component, is extend it from a variant props interface, generic interface that CVA provides, and then pass in the type of the return type that I get from calling CVA with all of my defined things, and then it knows that I can pass in an intent of either primary or secondary. And if I don't pass it in, it has a default value of this. And so you end up not having to redefine everything over and over, which is - yeah, th cool TypeScript part of it. \[crickets\]

**Jerod Santo:** \[17:57\] Well, as always, TypeScript sucks all the air out of the room, and now we're all just basking in the glory of what is the cool TypeScript parts. Are there other cool parts? Is there more to plumb here? Maybe we go above and beyond and do an episode with Joe, who can probably explain it like we're five better than we can... But cool idea. Small, little library, so that's nice... But the ergonomics look great from where I'm sitting. And especially if you're using Tailwind, I think it makes a ton of sense. If you're not using Tailwind..

**Kevin Ball:** It looks like it works alright for those cases as well... And I was pushing a little bit snarkily there, because the value prop that Nick had laid out to me felt like it was mostly a value prop for Tailwind users who have this very long list of classes... But I actually think this type-safe composition piece of it is super-cool, and would be helpful for whatever approach you're taking to your CSS and design system.

**Nick Nisi:** I have been looking at it through the lens of Tailwind, because right now Tailwind seems like the really green grass on the other side of the fence that I really want to get to.

**Jerod Santo:** It's always greener over there. But then when you get there, you realize actually it's the same as it was over here. That's what the whole cliche is about, Nick; I'm not sure if you know that.

**Nick Nisi:** It is. But in this case, it's really --

**Jerod Santo:** \[unintelligible 00:19:21.03\] That's what you'll think until you get over there. Okay, the library is called Class Variance Authority. You can call it CVA. That's what the function name is. It's a lot easier to say. @cva.styke, so check it out. It can help you, especially if you're using Tailwind; as Kball says, it'll help fix some of those pain points that Tailwind has introduced. It's like fertilizer for that grass over there. Put some nitrogen into the grass, make it actually greener on the other side of the fence.

**Break**: \[19:53\]

**Jerod Santo:** Let's change gears now. Kball has a new stack.

**Kevin Ball:** I mean, I'm a week into playing with it.

**Jerod Santo:** He's got a one-week-old little stack; he's been working on it.

**Kevin Ball:** \[21:55\] One-week-old little stack. I got inspired by the last episode that Nick and I did, talking with the creator of Joist ORM... Because Joist sort of fit a couple of things that I'd been looking for in the JavaScript ecosystem for a while. One piece was just a nice ORM that got back to feeling like the sort of productivity levels that I used to have with Active Record in the Rails world, and Ruby on Rails... And the other was something that is async and performant by default, and does nice sort of coalescing and collection of different queries, so it makes it really easy to write very high-performance backend code. And I paired that with playing around or introducing with Qwik and Qwik City, which is something we've talked a couple of times with Misko Hevery about, because it does a very nice job of letting you get good developer ergonomics while still being extremely performant by default in frontend land, and having good performance by default.

And so where I've landed with this is frontend/backend with Qwik and Qwik City as how I'm structuring my app. Now, Qwik City has kind of a nice separation backend/frontend, so you can write your whole app, and then for my data management using Joist... And now I have a nice little full-stack JavaScript framework without having to pool together lots and lots of different pieces, that looks like, from my playing around with it for this week, is going to be pretty productive.

I still want to do a little bit more work to kind of -- I like generators, I like things like that to make it really fast to roll things out... And there's some already, but I want to do some more there. But the nice thing about it is it looks like I'll be able to reach very high levels of productivity, while also being extremely performant by default. And I think that is the thing that I've been looking for for a while... Because we've had a lot of conversations on the pod about - you build an app in the de facto framework, which is React, and it works great, and you're shipping a lot of JavaScript, and as you add more things, you're shipping more JavaScript, and everything has to be booted up, and your app just kind of slows down over time as it gets more complex, and you have to do a lot of work to make it performant. It's not performant by default. And I think a lot of solutions that we have for backend data management also just are not performant by default. You have to think about "How am I structuring my data access? How am I doing all these things?" And this gives me both of those out of the box, by default, and in an environment that feels like it's going to be very good for productivity as well.

**Nick Nisi:** Quick question for you, Kball... Could your Qwik City use a central variance authority to be responsible for the --

**Kevin Ball:** You know, I was just thinking about that. I was actually thinking that I might try pulling this in, and then I've got a full stack there; I'm dealing with my styles, I've got something there, and we'll see... So maybe I'll have to just -- I noticed there's a guy named Tanner who shipped TanStack; maybe this will have to be KballStack, and I'll ship a wrapped everything up together. I don't know.

I mean, as I said, I'm a week into tinkering with this, so I haven't had time to uncover all of the rough edges, all of the challenges... I haven't yet fully scaled something out, though having spent a while digging into these tools, I think that they should scale extremely well. They're built in a way that solves a lot of the scaling issues that I know I've seen in other places... But yeah, I will say the one big drawback I've found so far is these are tools that have been mostly developed after the training cut off for ChatGPT, and they've mostly developed, they're less well-known tools... So I'm playing around with Codium, which is a code completion thing, and it keeps trying to complete my migrations with configurations from a different migration tool; it keeps trying to complete things in ways where I'm just like "You know what, using newer technology means that the API's don't know about them yet", and that is not great.

**Jerod Santo:** \[26:05\] Yeah, I think at some point there will be standardized tooling for all libraries, services etc. where they can embed their docs or their knowledge into all of the AIs that you might want to use... And so you'll have more quick information about Qwik City, for instance. That being said, have you tried Bard? Because Bard now is competing with ChatGPT and has full access to the internet. I have found it to be just as wrong with certain things, but more up to date with its incorrect information.

**Kevin Ball:** I've not tried Bard for coding yet.

**Nick Nisi:** GitHub Copilot for docs is a natural home for things like this.

**Jerod Santo:** Is that part of GitHub Copilot X?

**Nick Nisi:** It is. I think it's still in beta right now, and it's like a limited subset. It's like React and TypeScript, and a couple of others. But you can ask questions to the docs. Kind of like Astro's Houston.

**Jerod Santo:** Right. Yeah, I think that will become standardized, to where everybody will be able to just roll out - you build a new library, you write your docs, and you just plug into the ecosystem, and all the tools know about it. Eventually we'll get there; it's still early days.

So Kball, on your full stack - what's your backend? It's Joist, but are you proxying to Postgres, SQLite, have you got a Mongo on the backend?

**Kevin Ball:** Postgres.

**Jerod Santo:** Postgres. Okay.

**Kevin Ball:** Because that's another piece... Like, Postgres just kind of works everywhere. You can run it locally, but you can also scale it way up. It's got all sorts of plugins, so if you want to do a fancy vector store, you can get started with a Postgres plugin and doing your vector stuff... We're all in this AI world, what are we doing here...? But you know, JSONB is really great, so if you have unstructured document data, or lightly structured document data you want to be able to dump in there, it's got support for that; you don't need something that's like a Mongo or whatever, with all of its challenges... But then also for the core relational data that makes up the bread and butter of many applications, it just works, and it's fast.

**Jerod Santo:** So is Qwik and Qwik City - and I don't understand the distinction between the two. I know one is like the UI deal, and the other one's like --

**Kevin Ball:** Qwik is to React as Qwik City is to Next.

**Jerod Santo:** Okay, so Qwik City is the framework. And that's a full-stack framework? ...like, you submit forms to yourself, and you have server-side code that you are still inside of Qwik City, writing endpoint handlers, or what's it look like on the back end? Like an Express kind of thing?

**Kevin Ball:** Yeah, basically. They have some affordances, because they kind of control the bundler piece for Qwik, so there's some things that you can -- you can actually do type safety across frontend and backend, and make sure you have the types the same, and things like that in a nice way, without having to bundle all of your backend code up to your frontend... Because they cheat, basically... \[laughs\]

**Jerod Santo:** What do you mean by that?

**Kevin Ball:** They do some things that are not -- so they kind of go down the Svelte road, where they're extending the JavaScript language and they're breaking semantics in a couple of places. And they do it in a predictable way. They do it so that they can make various types of optimizations, and other things... But they've essentially - and this is something we've talked about before, but they've extended the JavaScript language to make a little micro DSL, that has slightly different semantics than JavaScript, to allow them to make this super-fast by default framework that lets you kind of run end to end.

**Jerod Santo:** So I guess maybe I should go back and listen to the deep-dive episode, because some of this is ringing a bell... But what exactly are they doing to do that?

**Kevin Ball:** \[29:42\] So one of the big things - and this is something that I'm still... As I'm playing with this, wrapping my head around all the implications; so we could come back to this in a month or two and I'll be able to go much deeper on this. But one of the things that they do is they have essentially a way of identifying functions that tells their bundler "This can be run either server-side or client-side", and they kind of hoist those out of their context, and package them up in a way so that when you hit like a Qwik app, it'll run up to a point on the server, and essentially do a continuation over to the client, so then when somebody interacts with it, it's already ready to go, and it's sort of packaged up not just the application state of "Here's what's going on with my application", but actually the framework state of "Here's what was already rendered, and what state the framework got to on the server side before this went up to the page", so that if they then click on that button, or whatever it is, it can just keep running right from there. So to enable that, if you end a function in a dollar sign, it is saying "This is a function that is behaving in a way where you don't actually know if it's running on the server or the client", and so you have to kind of constrain yourself a little bit in how you --

**Jerod Santo:** Specific rules for those functions.

**Kevin Ball:** Exactly.

**Jerod Santo:** Makes sense. What if you're like me, and all your functions are just money, so you've got dollar signs on all of them?

**Kevin Ball:** Well, either you're gonna set yourself up for a world of pain, or you're going to adjust quickly, and then all your money will be fast, by default.

**Jerod Santo:** I like the sound of that... Fast Money. Easy come, easy... Go. What are you building Kball? What are you working on, man? Can you tell us? Is it too early?

**Kevin Ball:** No, I mean, I can tell you the idea. It's very early, and it's not my main thing, and so --

**Jerod Santo:** Do you have a pitch deck yet?

**Kevin Ball:** Nope. Here, we're developing it right now.

**Jerod Santo:** Alright, let's develop your pitch deck.

**Kevin Ball:** So the pitch deck here is a personal CRM that makes you the hero. So the idea is I have a lot of people that I wish I was better at keeping up with. And it's not that I mind reaching out to them, it's that I forget. Like, when should I reach out? And I'm terrible at that. I'm terrible at remembering "Oh, this is that person's birthday. I should send them a happy birthday" or whatever. And I'm not on Facebook, so I don't get those things... So the idea here is put somebody in, put important dates around it, set a sort of reminder, cadence of like "Hey, I'd like to talk with this person once every six months, or whatever", and then it just nudges me. Six months have gone by, it sends me an email or text or whatever, that says, "Hey, have you talked to so and so recently? You probably should."

And the vision, as I want to make it a little smarter, so it can pull in my calendar, I can pull in our email history... And from the calendar, it can keep track of when did I actually last have something with that person, so it could be smarter about reminding me. Or for some things, it might be a "Hey, so-and-so's birthday's coming up. You said you wanted to buy them a present. Now, would be a time to do it", that type of thing. And if I get really far down the road experimenting with LLMs, I can take my email history and summarize for me, and be like "Here's the things that you've --"

**Jerod Santo:** Don't you dare have it email them for you...

**Nick Nisi:** I was gonna say just that...

**Kevin Ball:** No, so here's a key thing. Here's a key thing. I never want it to do something for me, because I want to be the hero, not the app. It's never going to reach out to them for me, it's always going to nudge me and say, "Hey, you should reach out to this person. Maybe here's a suggestion of what you could talk about. I know you've talked about these five things... You could write them an email that looks like this." But it's always putting the person in the driver's seat, rather than, you know -- and it's always about them, not about the app.

**Nick Nisi:** "Dearest Bob, do you remember that time that I reached out to connect to you on LinkedIn?" That's scanning your email, and then passing it to an LLM...

**Jerod Santo:** \[laughs\] Right. "I would still like to add you to my professional network, but I haven't heard from you." Well, it's kind of like a politician will have their person right there who's like -- they're shaking hands, and they're like "Here comes somebody", and the person's like "That's Frank George Paul. He's 47, he's got three kids. Two went to Stanford..." And you're like "Oh, hey, Frank George Paul. How are the kids? How's Stanford going?"

**Kevin Ball:** \[34:05\] That is exactly what I want. I want something that is going to help me be the type of person in terms of remembering these people in these relationships that I would like to be, at a much greater scale than I actually have the capacity to be.

**Jerod Santo:** Okay.

**Nick Nisi:** I would use that.

**Jerod Santo:** Nick's buying.

**Kevin Ball:** Well, right now it's a side project that I'm putting a few hours a week into, so... We'll see where it goes.

**Jerod Santo:** I think you're underselling it. You had a buyer, now we're out again; we were in, now we're out. You know, I think I would use it -- it's really gonna depend on the execution, as all ideas do, right?

**Kevin Ball:** Totally.

**Jerod Santo:** Because I have some of that... Like, with calendars you have birthday reminders, you have certain things... Obviously, you can just use the Reminders app. You can kind of like --

**Kevin Ball:** Cobble it together.

**Jerod Santo:** Yeah, you could cobble it together. But having a solution that's really slick, and handles all these diverse use cases... You know, where people work and live... If it did that for me - yeah, I might be interested in this.

**Kevin Ball:** I don't know. It's also just fun to be coding again, because I hadn't been coding that much recently... And it's good to be diving in.

**Jerod Santo:** Right. What's the most fun part about coding?

**Kevin Ball:** The most fun part about coding?

**Jerod Santo:** Yeah, like, it's good to be coding again... Why? What do you like about it? Did you ever think about it?

**Nick Nisi:** I have been thinking about that.

**Jerod Santo:** Alright, Nick, go. It's Kball's chance to think.

**Nick Nisi:** Well, I don't know that I have an answer, but I've been thinking about this because...

**Jerod Santo:** Man, you really set me up, and then you just let me down there. Like, "I've been thinking about that, but I haven't come to any conclusions..."

**Nick Nisi:** How long have we talked on this podcast before...?

**Jerod Santo:** Ah, I should know better...

**Nick Nisi:** \[laughs\] No, like, I was thinking about this in terms of LLMs, and the future of this profession, and all professions, potentially... Like, what could it possibly do? And I think in the short-term at least - or maybe not the short-term, but one of the things that I think that it can do is suck all of the joy out of what we do in terms of what part of coding is actually fun, and that part can probably be done by the LLM, and you're stuck with all the crap parts... And is that really what we wanna do going forward?

**Jerod Santo:** Okay then, so you must have identified which parts are fun then... Like, actually typing into a keyboard?

**Nick Nisi:** Maybe not even that. Configuring my editor is \[unintelligible 00:36:23.28\]

**Jerod Santo:** That's where you and I diverge...

**Kevin Ball:** Nick, you can do that for me. In fact, you do. I just sucked down your dotfiles, and that's basically how my editor is configured.

**Jerod Santo:** That's right. Nick configures all of our editors for us. Who needs an LLM when you've got Nick Nisi on your editor config?

**Nick Nisi:** But then - yeah, from there I guess I want to write code, I want to test that it actually works, my editor config, I mean...

**Jerod Santo:** I think that's for me -- having put 30 seconds of thought into this, I think "it works", like those two words, is the fun part.

**Kevin Ball:** That's the fun part. Yeah. I think for me, I like the process of building up the mental model of "What is this system? And how do the pieces work together?" And honestly, I think I actually like that even more coming into an existing piece of software, not writing something from scratch. I love the exploration of like "Wait, how is this all working together, and how do I connect things?" And so in some ways -- like, the fun part of my project right now, and one of the reasons it's moving pretty slowly and I'm not promising any progress, is I'm using it as a way into starting to dig into "Wait, how is Qwik actually doing this? How are they working? What are those pieces?" And similarly, "How is Joist actually working? Why isn't that working? Why is this going that way?" And so using it as a kind of wedge into exploring these libraries, which to me is actually where a lot of the joy is. It's not in the writing the lines of code itself, it's not in the testing. It works as nice, but really for me the true joy is when something clicks around, "Oh, that's how these things are working together."

**Jerod Santo:** \[38:06\] That's funny. We're so different, because I couldn't care less... I don't want to know how it works. And when I have to, I get mad at the tool. I'm like "Why am I reading this tool's source code right now?", because it's not doing what the docs say, or what I expect it to do... And I'm rarely ever happy. Because I just want it to work. I'm, I guess, pragmatic in that sense. I really am goal-oriented, or I'm looking for a finished thing... And everything else is just busy work, and stumbling blocks, and this and that... And I do over time -- I appreciate tools that work well, and over time you do learn a tool, even when it does work well... And I do appreciate that. But I don't usually have like "Oh, that's why this thing won't lazy-load like it's supposed to. I'm so happy I've found out!" I'm like "You should be lazy-loading like you said you're going to."

**Kevin Ball:** Well, and let me be clear... It's the mental model of how the thing works that I'm looking for.

**Jerod Santo:** Everything fitting together.

**Kevin Ball:** Everything fitting together. If I can get that from the docs and using it, and I don't have to dive into the source code, like that's fine.

**Jerod Santo:** Sure. Fair enough. But \[unintelligible 00:39:07.10\] to just tweak our editor configs like Nick does.

**Kevin Ball:** No, no. It actually pains me every time I have to go and tinker with my editor config. That's why I just pull down from Nick, and the things that aren't working right, I'm kind of like 'Dang it... Alright. Well, dang it... Alright." And I just like kind of let it sit there, because it's more painful to go in and try to figure out what the heck is going on with the editor config.

**Jerod Santo:** Right.

**Nick Nisi:** If it's any consolation, I just sit there with them too, for years... So we're struggling together.

**Jerod Santo:** Yeah, but it's kind of your fault, Nick, because you're the one in charge here. He's just riding your coattails. \[laughter\]

**Kevin Ball:** I'm probably struggling with the same things you're struggling with, because I am literally using your config.

**Jerod Santo:** Kball, open up an issue on his repo. Come on. Be like "Why does this not work right?" That'll actually probably shamed Nick into working on it. \[unintelligible 00:39:51.02\]

**Nick Nisi:** It will. It will.

**Kevin Ball:** Noted.

**Jerod Santo:** \[laughs\] I know that about him.

**Kevin Ball:** Well, now I'm actually coding again enough that it may happen.

**Jerod Santo:** Yeah, that's cool. So there you have it, Kball's new stack. We'll catch up with you again in a few months and see how it's changed, or stayed the same, or what you've learned about how the whole system fits together... Or maybe you'll be you're ready to beta-launch an announcement for a waiting list of making you -- so is it called Zero to Hero? Is that what you said it was called?

**Kevin Ball:** That's what you said it was called.

**Jerod Santo:** Oh, okay.

**Kevin Ball:** My working -- this is not what a marketing name, but my working name for it for myself, the name of the repo is nudge CRM.

**Nick Nisi:** I like it. Can I give you a tagline?

**Kevin Ball:** Sure.

**Nick Nisi:** Don't drop the Kball on this conversation.

**Jerod Santo:** Oooh... That might be too insider Kball... Baseball, I mean. I do like that, "Don't drop the Kball." Like, what's a Kball? The guy who made it. They're like "Oh, why do I care who made it...?"

**Kevin Ball:** Yeah, \[unintelligible 00:40:53.01\]

**Nick Nisi:** It's like "Don't drop the ball", but "Don't drop the Kball."

**Jerod Santo:** No, I get it. It's just that your customers are not going to know who Kball is... \[laughter\] Here's a tip, Kball. Do not hire Nick as your chief marketing officer... At least not right away.

**Kevin Ball:** You know what? That was already on my list. \[laughter\]

**Jerod Santo:** Alright, we have a little time left... Let's turn to a few other things that are new, and perhaps interesting... In the news, Bun. Do you guys know Bun? The super-exciting alternative to Node, that's very fast, and has captured the hearts, at least the interest of people on certain websites... Well, it has a brand new bundler. So they really put the dler into bun, I guess, you could say...

**Kevin Ball:** I was gonna say, why did they call it the bun bundler, and not just the Bun-dler.

**Jerod Santo:** \[41:45\] I know. Well, missed opportunity... But this was just announced a few days back, the Bun fast, native bundler. It's in beta; you now have a bun build command. And I guess, as with all things with Bun, it's making news because their benchmarks show it to be very, very fast. Now, I guess buyer beware; we've had Bun's benchmarks called into question by other people in the community, such as Ryan Dahl from Deno, who just says "Just check the numbers, guys. You've gotta look at those numbers again." He didn't say much else. So who knows...? Synthetic benchmarks are what they are. But in their announcement post, Jarred Sumner writes that "Bun - we have a benchmark comparing 10 copies of three JS from scratch, with source maps and minification. Webpack 5 does this in 38 seconds, Rollup does it in 32, Parcel 2 in 26 seconds, RSpec 4,5... ESBuild-" pretty stinkin' fast, guys - 0.3 seconds. But Bun - 0.17 seconds. So this is a very fast thing. What do you guys think? Fast enough to give it a shot? Don't care, because ESBuild's good enough?"

**Nick Nisi:** I can think of a lot of things to do with that 0.13...

**Jerod Santo:** \[laughs\] You can do a lot of editor configs with that time... So think about that - every time you run it, you're saving yourself 0.13 seconds.

**Kevin Ball:** I guess I feel like I don't have the -- I don't really understand Bun's pitch. Like, why do I need to switch to a new runtime?

**Nick Nisi:** That is my question with this, because I know nothing about it. Is this building it for Bun's runtime, and then I can run it there? Or is this just the -- I guess it's just a generic, because it's building client-side apps, so...

**Jerod Santo:** Right.

**Nick Nisi:** I guess I answered my own question there.

**Jerod Santo:** Yeah, I wouldn't imagine you need to use Bun with this, because it's gonna end up with a client-side compile thing.

**Kevin Ball:** I mean, if we were still using WebPack - yeah, that's a huge difference. That's great. But I'm not. I'm using ESBuild.

**Jerod Santo:** Yeah. There you have it. I think there's other things they say is cool about it, but I didn't read the entire blog post... So let's go to the next piece of news. Because I'm not using Bun, so I'm just like "Oh, Bun bundler. It's fast. Interesting. Let's chat."

This one I did read more of, and I'm actually probably more excited about... But that's Baseline. Have you guys seen Mozilla's Baseline now? This is a new feature on MDN. So this is like when you go to MDN, and you see a particular feature such as CSS Grid, the grid property. And then you think to yourself, "Can I use?", right? And then you hop over to CanIuse, and you can see kind of the browser support. Well, they're gonna build this right into the docs on Mozilla Developer Network now, this baseline feature, where every page will have, if it's baseline-supported, a nice little label and a call-out right there saying "This is a baseline feature of the web", and they define that as being "It's supported across the most recent two versions of Firefox, Chrome, Edge and Safari."

So for me, this is something I always do; it's like save a step, right? So I look at a thing, I'm like "Cool, I want to use this push notification API." And then I think to myself, "Can I actually use it, or not?" And I usually hop over and check the compatibility tables, and all that... But for things that are broadly supported, they're just gonna throw a label on it right there, and save you a little time; maybe 0.3 seconds even. Before you had to go check for yourself.

**Kevin Ball:** Don't they already have browser compat on MDN?

**Jerod Santo:** It's on there, but it's always a click away. This is like "Bam! \[unintelligible 00:45:29.11\]

**Kevin Ball:** Why is it a click away? I think it's in page.

**Nick Nisi:** It's at the bottom of the page.

**Jerod Santo:** I thought you had to click to a separate page... Alright, well, now it's big and green, and right there in the top.

**Kevin Ball:** Okay.

**Jerod Santo:** You guys don't like big, green labels?

**Nick Nisi:** What page are you looking at?

**Jerod Santo:** Well, it's still rolling out, so I'm looking at their blog post where they show the CSS Grid page, and it says "Baseline -not widely supported." It shows the browsers in which it has broad support, and it says "Right there, right at the top center", I believe... But all I have is the image from the blog post.

**Kevin Ball:** \[46:04\] Well, I do see a -- so if I go to Subgrid, it's on there for that.

**Jerod Santo:** Oh, nice.

**Kevin Ball:** And it says "Baseline - widely supported." And actually, I do think it's kind of nice to have that front and center, at the top... Especially if I'm like -- I see that now before I'm learning about it, so if I were to come in to check out a new feature, and I'm excited about it, I read about it on a blog post and I'm like "Alright, I'm gonna go check this out on MDN." And before, I'm reading through it, and I'm like "Yeah, this looks cool. I'm gonna try it. I'm gonna try it. Okay." And then I get down to the bottom and it's like "Oh, sorry, this isn't supported anywhere except Chrome, or anywhere except Firefox", or whatever. And I'm like "Oh, well, I just spent all this time learning about it, but I can't actually use it for anything interesting, because nobody supports it." And here it is, right at the top... And they could have done that by putting the compatibility grid up there... But this is very tight, it doesn't take away as much. But it maybe catches me before I've gotten through that investment cycle.

**Jerod Santo:** Right.

**Kevin Ball:** So that's cool. I like it.

**Jerod Santo:** Yeah. So I do see it at the top of the \[unintelligible 00:47:03.22\] as well. So it looks like it has rolled out to at least some of the pages.

**Nick Nisi:** I mean, I guess it's a new classification, right?

**Jerod Santo:** Yep.

**Nick Nisi:** ...that these are all there. But the data was always there, it seems like. Because you could just go look at the compatibility tables... And they even had examples of like if you look up \[unintelligible 00:47:20.09\] on MDN, it has a big Deprecated banner on that one. It's kind of giving you the same information.

**Jerod Santo:** Yeah. Fair enough. Well, the compatibility table does -- now I'm looking at the one... It's why I say you always had to click away, is because it just shows the most recent for every browser, right? It shows like what's currently recent. So this is different information... So you had to click through and see -- like, if you had some reds, you have to click through and see and do the whole comparison yourself. That's why I usually do the CanIuse, because it gives you the full grid. Whereas this - they're dedicated to having it always be up to date for the most recent two versions of those; so as the browsers roll, those baseline labels will be accurate. I don't know, it seems like a sweet feature; I was excited about it.

**Kevin Ball:** Yeah, I dig it.

**Jerod Santo:** Sorry, I didn't code it up, guys. I'm not that attached to it.

**Nick Nisi:** I feel like we're just "Meh" on both of these...

**Jerod Santo:** Yeah.

**Kevin Ball:** I am less meh on this than I am on the bundler. \[laughter\]

**Jerod Santo:** Alright, here, I've got one more. Let's try one more... See what gets you excited about something. "A new frontend framework."

**Nick Nisi:** Is it jQuery?

**Jerod Santo:** It's called Van.js. It's in the doc. I'll throw it in here as well. Van stands for Van-illa. So it's kind of weird, because it's a Van-illa JS framework, which --

**Kevin Ball:** Oh boy, I get to write markup using JavaScript.

**Jerod Santo:** "Van.js, a 1.2 kilobyte grab and go reactive UI framework, without React or JSX." 1.2k. 1.2 K ball. "It's an ultra lightweight, zero dependency, unopinionated, reactive UI framework based on pure vanilla JavaScript and DOM. Program with Van.js feels a lot like React. Check out the Hello World code below." So Van.js. Are you guys excited?

**Kevin Ball:** Can I use JSX with it? Which -- I mean, honestly, I don't... JSX, I have mixed feelings about. However, ergonomically, I feel like it's closer to markup, and I like that. Like, that's a thing that I like. I like templating languages. I like HTML. I think that they are useful tools for what they do, because they're kind of nice and declarative... And if I'm having to write a bunch of nested functions to generate my HTML, you've kind of lost me.

**Jerod Santo:** Nick, Van.js supports TypeScript. Are you excited about it?

**Nick Nisi:** \[laughs\]

**Jerod Santo:** I'll remind you that the keyword of all JS Party is "excited".

**Kevin Ball:** Excited! \[laughter\]

**Nick Nisi:** I was excited about this when I used it 10 years ago, and it was called put selector, by \[unintelligible 00:49:51.29\]

**Jerod Santo:** Ah, sick burn. Sick burn. Apologies to the Bun team, the Mozilla Developer Network Team, and the Van.js team for --

**Kevin Ball:** \[50:05\] Okay, so let me highlight something I am excited about with this... Which is I am really excited to see more and more experimentation in this "How do we get developer ergonomics and reactive programming, and like this declarative and compositional way of thinking about UI components that has shown to be super-productive, without massive amounts of JavaScript shipping to and running on client devices?" Like, that is, in my mind, the big problem that we are trying to solve in the frontend space, and they are doing that here in Van.js. Now, do I think they've solved the developer ergonomics problem looking at this? It does not look like great ergonomics to me. However, ergonomics are something that vary by person, and just because they're not there today doesn't mean they won't be there... And I want to see, I'm really excited to see more experimentation in that space... Because I think that is, right now, the sort of seat of discontent in the frontend world. And we're seeing an explosion of people trying to address it. I think Qwik is doing this, Astro is doing this, Svelte is doing this, now Van is doing this... I missed one. Solid is doing this... Like, everybody's trying to solve this problem of "How do we maintain these really nice and productive developer ergonomics, while not bogging down our networks and our client devices with tons and tons of JavaScript?" And so seeing more takes on that is great.

**Nick Nisi:** I agree. And this is cool in that it's using a syntax that is familiar, and it's not augmenting the language, like JSX does. And it's not adding in these esoteric, weird things that are really hard to understand with template literals. It's just straight function calls and nested further function calls, which is really cool, because it's so straightforward.

**Jerod Santo:** Yeah. You want a paragraph, you've got a function called p; you want a list item, you have a function called li. And you can nest those suckers, call some sort of deal on them, and bam. \[unintelligible 00:52:06.14\] Cool idea. 1.2 kilobytes, I'll remind you, and TypeScript support. Look at me over here, selling TypeScript as a potential feature.

**Nick Nisi:** That's like table stakes at this point.

**Jerod Santo:** Is it though?

**Kevin Ball:** I'm with Nick on this, Jerod. Sorry. You're not up to the table yet.

**Jerod Santo:** I'm sitting at a different table.

**Nick Nisi:** If someone tells me they write JavaScript all day, I assume that they meant TypeScript.

**Jerod Santo:** You're probably right. But pretty soon, there'll be a backlash.

**Nick Nisi:** That's because the types as comments, or whatever it's called, is coming... \[laughs\]

**Jerod Santo:** Yeah, JSDoc is coming back. See?

**Nick Nisi:** Okay.

**Jerod Santo:** Svelte is going away from it.

**Nick Nisi:** There is a worthwhile rant...

**Jerod Santo:** Alright, go for it.

**Nick Nisi:** Why would you want to write JSDoc comments over TypeScript? I just can't put my head around that. What is so wrong with a compile step that you don't see 99% of the time, or care about, that you would rather write comments, and have all of this boilerplate above the code to facilitate the code, when you could just have it all in-line, so that as you're reading, and you're scanning with your eyes, it's there? I don't understand.

**Jerod Santo:** Yeah, I'd rather not do either one of those things personally, but... \[laughs\] But I don't know, I think Rich Harris tends to know why he makes certain decisions. I haven't heard his reasoning, but I did hear the headline of Svelte switching away from TypeScript for JSDoc.

**Nick Nisi:** Oh, was that where this came from?

**Jerod Santo:** Yes.

**Nick Nisi:** I'm out of the loop.

**Jerod Santo:** So maybe he'll tell you why. Go look that up, he'll probably tell you why your rant was silliness. I have no idea though.

**Kevin Ball:** Well, so one thing that Svelte is doing is that they are mucking around with the compile step themselves, and doing other interesting parsing things, and other stuff... And it may be that it's easier to do the kinds of additional magic they want to do, and integrate it cleanly with TypeScript, if the type information is in comments rather than having to deal with the syntactic piece. So I don't know either, I have not seen the rationalization here, but let's --

**Jerod Santo:** \[54:07\] Let me pull in a quote from Rich Harris. Here's the \[unintelligible 00:54:06.02\] entire stance. "My position is types are a fantastic. TypeScript is a bit of a pain. As soon as you use a .ts file, then you have to have the tooling to support that. There's all these points of friction when you use a non-standard language like TypeScript that I have come to believe makes it not worth it. So instead, we have put all our types in JSDoc annotations, and we get all the type safety, but none of the drawbacks, because it is JavaScript. Everything's in comments, you can just run the code. This is what we do in the Svelte codebase, and has worked out fantastically for Svelte 4. We're going to do the same for Svelte, because it's going to enable us to move much more quickly."

So actually, Nick, that doesn't seem to address your particular stance. He just doesn't like it. He'd rather write the JSDoc comments.

**Kevin Ball:** I feel like it's a pretty strong assertion that TypeScript is a non-standard language.

**Jerod Santo:** What browser doesn't it run in?

**Kevin Ball:** Who made browsers the sort of standard of what's a standard language?

**Jerod Santo:** Of what JavaScript is?

**Kevin Ball:** We're not talking JavaScript, right? I can compile Rust to run in the browser, I can compile TypeScript to run in the browser, I can compile a variety of other languages to run in the browser.

**Nick Nisi:** You have to compile Svelte to run in the browser.

**Kevin Ball:** I can even compile Svelte to run in the browser. But the fact that there's a compile step involved doesn't to me say anything at all. Like, that's orthogonal to standardization, or what's standard.

**Nick Nisi:** They also are doing the due diligence, because I think if they were to just be like "We are dropping types, and we don't care", and they're not generating types, well, third-party types would come up undefinitely typed the next day.

**Jerod Santo:** True.

**Nick Nisi:** But that would hurt them. They're supporting full TypeScript still, I would assume. So I don't think that because --

**Jerod Santo:** But they're writing documentation. And every library author should write documentation, right?

**Nick Nisi:** But they're still shipping types, so that you can use TypeScript when you use Svelte.

**Jerod Santo:** Yeah.

**Nick Nisi:** So they're not advocating for you to not use TypeScript.

**Jerod Santo:** No. Neither am I. I'm just advocating for me not to use TypeScript. That's different.

**Kevin Ball:** Well, and there is an interesting question there, of like "Here, we have these guardrails we can put in place for you. Do we ship things in a way that you have to use them?"

**Jerod Santo:** That's a choice, right?

**Kevin Ball:** It is.

**Jerod Santo:** Yeah.

**Kevin Ball:** And I think there are likely to be strong opinions on both sides.

**Nick Nisi:** Oh, yeah.

**Jerod Santo:** Right. Which is why I would not force it, if it was me. I wouldn't take that stance myself. But I could see why somebody might, and maybe that their library get popular, because it does enforce, require you to use TypeScript, for instance.

**Nick Nisi:** Well, there's plenty that do that, right. Angular, for example.

**Jerod Santo:** Yeah. But they're not getting my business.

**Kevin Ball:** And I think there's an argument to be said, which is if you use types, we know that a certain class of problems won't happen, and we know that you're not therefore going to blame those problems on us. If we ship a library in a way that you don't have to use types, and you use something, and it errors down in our code because you passed it something that was type-illegal, I know that's not my bug, but you're gonna find it on my GitHub anyway.

**Jerod Santo:** Yeah, but that's like the cat in the hat, where they take the streak and they rub it on something else, and then it moves to that thing. You just shift what you're going to complain about; people are still going to blame bugs on you that aren't yours. It's just they're gonna be different. So I don't know if that necessarily reduces support. Maybe it does. We'd have to have a longitudinal study on such things.

**Nick Nisi:** This would be bigger news if they weren't shipping types still, but they're shipping types, so it doesn't matter.

**Jerod Santo:** Oh, yes. I didn't mean to imply that. I knew their shipping type still. I said they switched to JSDoc was what I was saying.

**Nick Nisi:** Yeah.

**Kevin Ball:** b0neskull will be happy.

**Nick Nisi:** That's true. And Jerod.

**Jerod Santo:** For sure. I am happy about it. I just know that every action causes an equal and -- I can't even say the phrase. It's late on Friday, guys, let's end this show...

**Kevin Ball:** Yes, you made Jerod smile, and you made Nick frown. Equal and opposite.

**Jerod Santo:** There you go. Every lash has a backlash, okay? And TypeScript will have its day, and I'll be here waiting. Muhaha...

**Nick Nisi:** And I'll have a whiplash.

**Jerod Santo:** That's the final word from Nick Nisi... About as good as his opening remarks as well. Let's call it a show. Listener, if you're more excited about the things that I read off in the news section than these guys are, the links are in the show notes for you. If you want to check out the class variance authority, it's also in the show notes. Alright, that's JS Party. I've gotta play this outro music, because we are ready to dance it out.
