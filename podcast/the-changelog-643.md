**Jerod Santo:** Today, we're joined by Andreas Møller from Nordcraft. Welcome to the show.

**Andreas Møller:** Thank you very much.

**Jerod Santo:** Happy to have you. I first found you from this blog post called "They Lied to You. Building software is really hard." I found this to be very relatable... And one of the things that you said in that post I'd love for you to expand on for us, is you said "If you're looking for one trick that lets you get ahead and jumpstart your career", your advice to the reader is "Don't choose the path of least resistance." Can you unpack that for us? Why? Why not? What does it mean?

**Andreas Møller:** Yeah, absolutely. A little bit of context... Obviously, if you have a job and you've been tasked with building something, you don't always have to go the hardest possible way of doing everything, but I think there's something to be said for leaning into the challenges when they present themselves. So if your solution to every problem is "Is there a library that does that?", without looking into how to actually solve the problem. Or if you're the kind of person who likes to hang around Stack Overflow and see if there's an existing solution to everything. Like, it's good to look it up, but I always would say give it a try first.

Throughout my career, especially with a lot of junior developers, there's this sort of attitude that "Oh, I'll go and look here, I'll go and find it here", and a lot of the times, the part where you really learn something is when you sit down and take your time. So actually leaning into it, saying "This is a hard problem. It's going to be difficult to solve, but I'm going to try and figure it out. And I'm not going to look for the solution until I've at least analyzed the problem and feel like I have a good idea."

**Jerod Santo:** And you're here now today, building a thing called Nordcraft. How did you find yourself here? And you talked about your experience... What does your experience look like, how did you begin building this, et cetera?

**Andreas Møller:** So Nordcraft sort of came about a little bit out of frustration. I've been a software developer for a little over 20 years now, almost my whole career focusing on web development, because I really like the web. I think it's the greatest application platform ever built. And I've really enjoyed building anything from small websites to massive SaaS platforms. And through my career, I've sort of gotten to see -- like, we've gone from there were no frameworks, to gone through a few of them... React has stuck around for a long, long time, and now we're seeing the new generation of framework coming out and improving on React. There's a lot of talk about how things change every six months in web development... And yes, something changed, sure, if you're looking for it. But on the whole, for the last 10 years, things really haven't changed that much. React has been the dominant framework... There's a little bit of modification, a lot of the details, but overall, the way we build apps are very much the same.

\[07:41\] And so one of the things I noticed was this process when you're sitting in a product team, where a designer will -- usually, a product manager will come and say "We need this kind of feature, because..." For some reason. A designer will go and do a layout or a design of what that needs to look like, and then it will get handed off to the developer, which was me. And the handoff is something along the line of "Here's a picture of what you need to do. Please do it exactly the same way." We usually call it pixel perfect, right? And pixel perfect means don't add anything of yourself into this task whatsoever. Just do the exact thing that's been shown you, but in code. And I like my job, but that particular part was the least favorite part, because that's the bit where I don't really matter. I just need to repeat the task someone else did. My opinions don't really factor into this. Now, in actuality they do, because the design is never complete, but I always felt that part was kind of pointless. Like, if the designer already built it, why are we doing it twice? And so I wanted to play around with this idea of saying "Well, why do we duplicate this step?"

And I've seen tools like Webflow, and you can build visual tools for building websites, but there wasn't anything built for applications. There's sort of a limit, and like the second you get above a certain complexity, or you need some flexibility, some dynamic content, then we're going back to everything is done in code. And so I wanted to figure out why is that? If the UI can be done visually, why can't we build something like this, that would work for the kind of application I'm building? ...which was mainly SaaS applications.

**Jerod Santo:** That sounds an awful lot like Drew Wilson's thing he's working on, Adam. I just listened to your conversation with Drew Wilson, and he mentioned he's working on something similar, where the design manifests in DOM nodes, or something. The design tool is actually producing the DOM, versus --

**Adam Stacoviak:** That's the big thing he wants to work on. Yeah.

**Andreas Møller:** I don't know if I know -- what is it called?

**Adam Stacoviak:** It's not named, I don't believe. I don't think it has a name yet.

**Jerod Santo:** I think he said something like Opacity, or something like this...? Anyways, it's not like out there yet, so you're way ahead of him, Andreas, don't worry about it. But...

**Adam Stacoviak:** But he is a formidable opponent.

**Jerod Santo:** He is a formidable opponent, that is for sure...

**Andreas Møller:** There are a lot of tools in this sort of broader space, of sort of trying to make programming visible, visual. There's a lot of tools. What I thought was really interesting was that this sort of idea is not new at all. The broad idea of visual programming is very old. The oldest thing I know of is like 1967. So before we had personal computers, someone was drawing with a light pen on like an old -- like, what's called the \[unintelligible 00:10:35.11\] And they were drawing those together and programming by drawing on a... I mean, a tablet is what they called it. It was a very large monitor, and it'd take up most of the room.

**Jerod Santo:** Right. There was no iPad.

**Andreas Møller:** And it's been tried a lot of times before, but it never -- like, Visual Basic worked and took off a bit, but then it hasn't really taken off. It's always died down again. Except in one industry, which is gaming. And I thought "That is the weirdest thing in the whole world." So if you're building a AAA game that takes 10 years, and takes some of the brightest minds of our engineering industry, then you can use a visual tool to build most of the game. But if you do it in 2D, and it's just a website, then that doesn't work. And I'm like "That doesn't make any sense. There must be something I'm missing here. There must be something I'm not seeing", for why it is that that's the only industry where not only is it possible, it is an absolute necessity. Without those tools, you cannot compete.

**Adam Stacoviak:** Yeah, that's interesting. I've never developed a game before, so I don't know that for sure and how it works, but that does make sense. I mean, as a designer -- so I came up in design, came up in user experience design, product management... I was like a product owner for the company, leading and... I was that person between the business itself and the engineering to make sure the business goals were met, and engineering was able to accomplish the goal... A lot of my life.

\[12:15\] And I would say, on the flip side, it was a struggle as a designer to have to do all this in this pixel perfect way, in pixels, literally, and not in the web, and not have the tooling available. Sure, you can HTML code it, and you can use CSS, but it was just, you could make more progress, more efficiently, in higher fidelity, the oldest of day, in Photoshop, lately Figma, or even Sketch if you're not a Figma person... It was always a challenge to design something like that, to go through all the process, to go through the customer and the user stories, and talk to people, and talk to customers, and like gather all that feedback, to then create an artifact that is static, and attempt to hand it over.

**Jerod Santo:** And hope it looks like that...

**Adam Stacoviak:** And honestly, because you'd done all that work, because you've done all the thinking behind, you're like "Don't change anything, okay?! This is a brittle thing I'm handing you. Please don't change anything, because we've gotten signoff from here, we've gotten business concern handle there, we've got colors established here..." Hopefully, it was that thought through. But for the most part, it was pretty good and thought through, "Don't change it, please" and "Please, can we make this happen?" And so I've been on that side, and it's such a... It's tough for both sides, really. I think we all want better tools.

**Andreas Møller:** It really is. And the interesting thing is my co-founder - his name is Kasper - he is a designer. And his motivation for joining -- like, when I showed him this the first time, he almost to the word told me the same thing. He was saying, like, the frustration... Because it's not just that it's limiting, but it's also the frustration of then seeing what you've done interpreted through someone who thinks blue is blue.

**Adam Stacoviak:** Right.

**Andreas Møller:** And there is white, and I'm not sure what eggshell is. Right? It's just white, isn't it? And then see someone like that take your design and then say "Look, I made it." And then "No. No, that's not what I did." And having to wait, and then come back, and then we have to do a whole iteration again... I have to go back, critique all the things, and lastly say "That's the color, right?" And yeah, it's super-weird.

I'm a big fan of all the JavaScript frameworks. Actually, all of them. I think they're all great, to be honest. And in many ways, we've moved forward, because we were able to build more complex things. But one thing we really lost is it kind of put the final nail in the coffin of "Should designers code?" Before then, there were designers who worked in HTML and CSS. That's more or less not possible today. Because it's not just that you need to know HTML and CSS, you need to know Vite, you need to know how to install that that npm module that never wants to work, or figure out whatever happened to the build system since last when we cloned things from GitHub... The complexity of our builds, of the setup around building an app means that before you get to touch anything design-related, you're like three or four days in.

So we really sort of -- with the technology stacks we use today, we've moved even further away from the idea of a designer contributing anything directly to the application. I think that's probably the worst thing that happened with modern frameworks.

**Jerod Santo:** \[15:39\] Yeah, that does make it tough. I'm curious about -- perhaps a pivot that I'm sniffing out here, because when I first linked to you, which was March 27th, it was on toddle.dev. Now it's Nordcraft. I remember Toddle talking about a game engine for the web, or something like this... And Nordcraft itself is THE web development engine for web apps that delight your users. You talk about creating web experiences. A web game, a web experience - these things are very similar things... So I can see it being just as maybe a pivot of sorts, or perhaps just a rebrand. Can you tell the story of Nordcraft? We're kind of branding nerds. We think about naming, we rename things... And so it's more just intellectual curiosity there than anything else.

**Andreas Møller:** It is a rebrand, it's not a pivot.

**Jerod Santo:** Okay.

**Andreas Møller:** But it's a quite thorough rebrand.

**Andreas Møller:** Yeah.

**Andreas Møller:** The product, we always kind of knew what that was going to be. There was never much discussion on that. I invented this for myself. My co-founder, coming in, knew what he wanted to use it for... And the point was to build something for professional product teams. What we looked at and saw - there was this whole no-code community. And no-code tools are generally -- they're somewhat similar, but the big difference is that they're focused on people who don't come from a developer background. And generally don't want to be developers, in like they don't want to spend time learning to code. They are not interested in getting too deep into the technical part of software development. They kind of want a tool that takes care of most of it for them. A lot of them are very interested in vibe-coding right now, for the same reasons. It's about getting a product out, but the process of building is less interesting. A lot of developers often are actually drawn sometimes even more to the process than to the final product, right?

**Jerod Santo:** Sure.

**Andreas Møller:** And the way that happens in no-code is you try and simplify. You try and figure out "How can we take a process and something that's very complex and how can we simplify it down to a point where people can get started earlier?" And that generally just happens by creating high-level abstractions. What we would normally as developers call massively over-abstracting. It's just like, that's what you're building. And that comes with a certain set of limitations. You can build this kind of table component, but you can't build that kind of table component. You can make it behave like that, but you can't quite make it behave like that. And as long as you're okay with those, as long as you're saying "I'm solving a business goal; the specific details of what it looks and feels like aren't important as long as the business goal is solved", those tools are really great. But that's not what we wanted to build. We thought there was a space for us in that market of saying "Well, we can be in the professional segment of that." Once you hit a certain limit with those tools, we're right there for you to move up. And what we didn't quite realize was that's not that interesting for people, again, because most of them either already moved up and hit the limit, and then their next step is learning code, or they're just not interested in taking that extra step. And at the same time, I think we underestimated just how much a lot of software developers do not like no code, both as a term and as an industry.

**Adam Stacoviak:** Like NoSQL.

**Andreas Møller:** Yeah.

**Adam Stacoviak:** Right?!

**Andreas Møller:** Almost as much as they dislike NoSQL.

**Adam Stacoviak:** I mean, that was a big kerfuffle back then, too.

**Jerod Santo:** Oh, for sure.

**Andreas Møller:** Yes. And in many ways, honestly, it's not that unlike the whole Mongo story of "Look, we don't need SQL, because look how simple this is", and then you're like, now you need a transaction, and then you go "Now I have to invent transactions."

**Jerod Santo:** Right.

**Andreas Møller:** So yeah, for sure, there are certainly similarities. And to some degree, that's what the blog post is about. When you always seek the simplest and the easiest solution to every problem, what you end up doing a lot of time is you put yourself into a corner where it's really hard to get out of. So I've done that. I've chosen Mongo for a project that really needed a transactional and a relational database... And then gotten to a point where I need to figure out how we kind of build our own transactions, so we could roll back at the application layer. And I think we see the same thing in the no code space a lot of times, and I think a lot of developers will have experienced that.

**Jerod Santo:** \[20:18\] Sure. And all the vibe coders will certainly experience that, assuming that their idea is good, and they get past that first phase, which is -- I think it's great for getting that proof of concept, something to show somebody, get your idea out on paper... But extreme limitations, at least at this phase, the current state of the art.

So Toddle to Nordcraft. This was just a rebrand. What was Toddle holding back that Nordcraft unleashes?

**Andreas Møller:** So the name itself was a bit problematic, because Toddle is sort of a relation to toddlers and toddling... Which was actually a joke name my wife came up with in the very early phases. Because when I started working on this, I had no idea if it even could work. There was a part of me that thought "Since we don't have these kinds of tools, there's probably a really good reason why, and I just don't know what it is." But I had to try and figure out, so I kept working on it. And to some degree, when it came up, I'm like "That's kind of what I'm doing. Right now I'm trying something, and then I'm falling over, and then I'm trying something else..." I'm like "Yeah, okay, let's call it that." And then as it started working and we kept referring it to Toddle, and we kept going, eventually then VC investors came in, and then we had to talk to all of those, and that was a bad time to change the name... There was never a time to change it after that. We're not going to sit down and come up with the best name, because it's like, it was fine.

And there's a certain truth to the fact that a name is whatever meaning you give it, eventually. So had we kept the name, eventually Toddle would just mean our app, and it wouldn't matter, because that would be the ideas people had. But we could feel it was holding us back a bit from anecdotes from customers. And at the same time, we couldn't get a dot com... It's hard to search for, because we get so many other results... So there's a lot of small things about the name that wasn't so good.

So when we realized that we needed to make a branding pivot away from being a no code tool, and a more professional tool for beginners kind of thing - which is also a weird phrase to say out loud - we said "Well, let's take the name away as well." Because that at least -- everything will still redirect to the new site. But when people, say, think like "This is what I think about, Toddle", versus this tool that you really have no reason to compare us to, because we serve completely different sets of users... And a lot of that is sort of existing conversations we could actually a little bit leave behind. And that was very intentional. So we wanted a brand that sort of highlighted that this is meant to be for professional teams, it's meant to be for developers who know what they're doing.

**Jerod Santo:** Well, Adam seems to like it. I think I heard you say it's beautiful. Is that what you said, Adam? I think Andreas missed it.

**Adam Stacoviak:** The rebrand looks beautiful. I mean, the application looks beautiful too, and I was only able to find it because, thankfully, you were able to clone an application. So I'm hanging out at toddle.dev/project slash a bunch of slugs. Nordcraft is the next one after that, and so I'm actually like hanging out in the UI. It's all beautiful. It looks really nice.

**Andreas Møller:** Thank you. Thank you. That's my co-founder, who's the biggest -- well, I mean, it's not just him anymore. Right now we have a whole team. We have designers that are looking at that. But that's not my fault. There are old versions, pictures of the first versions, and that looks very much not like it does today. But yeah, I'm really happy about the work they put in there. I think it looks great. And again, the new design has a certain -- it has a little bit more gravitas to it. It looks a bit more serious.

\[24:07\] The other problem we sort of ran into is that we are not very serious people, my co-founder and I, and we love this part of startup life, when you can do ridiculous things for attention grabbing, and like send out content that is ridiculously silly, and people enjoy it... But when you stack that on top of a childish brand name, and everything being bright, childish colors, it becomes too much. So when we have a serious brand, actually being a little bit silly as founders isn't the problem. So I think that all aligns quite well with what we're trying to do.

**Adam Stacoviak:** Yeah, I'd actually -- I heard about Toddle by way of a friend through friends, I would say... Salma Alam-Naylor, I'm sure you know her.

**Andreas Møller:** Yes.

**Adam Stacoviak:** Amazing DevRel, amazing all the things... I admire her so much. She's so good at speaking, and so good at demoing, and just thinking how users feel, and like that intersection there... She's really just a star. So I'm sure you're glad to have her, but... I was like "Man, Toddle sounds pretty cool", but the name didn't really make me feel like "Oh, I should --" I don't know, it didn't spark my interest, let's just say.

**Andreas Møller:** It doesn't make you go "Oh, I need to use that for the next tool that I maybe focus my career around in the future."

**Adam Stacoviak:** It seemed like a toy. It seemed like whatever it is, it's cool, it's groundbreaking, but it's almost silly, just by name. That's it. The application - obviously, different scenario. Now, if I'm being honest though, Nordcraft is almost as ambiguous. Almost.

**Andreas Møller:** Oh yeah, but that's kind of on purpose. We don't want it to mean anything, really.

**Adam Stacoviak:** Well, I mean, Nordcraft sounds like buildings...

**Jerod Santo:** Nordcraft?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I mean, the crafting part makes me feel like this is for crafters. This is for builders.

**Adam Stacoviak:** Maybe.

**Jerod Santo:** I also think of Minecraft of course, because it's such a strong brand in the crafting space...

**Adam Stacoviak:** True.

**Jerod Santo:** So there's a bit of fun there. Nord - I wonder what it is. It sounds cold, Nordic. I don't know. I've been to the website, so I've seen some of the trees and stuff, so you do have like the forest thing going on... I like it. I think it's better than Toddle. I agree that it leaves -- if you just said Nordcraft to me, I wouldn't know what it is.. But you know, back when you first said Google, I didn't know what it was, because I didn't know what a Googleplex was back then.

**Andreas Møller:** One of the things we've found was that trying to explain what it is was extremely difficult, because everyone has -- especially when you're doing marketing content, people have a desperate need to find a bucket and put you in it.

**Jerod Santo:** Yeah.

**Andreas Møller:** And if you don't give them one, they'll take one. So I once had an entire 20-minute conversation with an investor, that never understood that we were not like Airtable, even though we do not have a backend or any database associated directly with it whatsoever. But he just couldn't -- he couldn't let go of that idea, because once he sort of tried to represent \[unintelligible 00:27:27.00\] it was locked. And when we say "visual editor", if you think it's kind of like Webflow, it's technically not wrong, but it doesn't quite communicate the important part, which is this is actually a tool that teams will use to build very complex applications. And Webflow is for building mostly marketing sites, and it's predominantly not used by developers.

\[27:57\] So even though there's a lot of similarities, it doesn't quite capture the point. And what we've found is actually, we think the best thing we've come to yet is this idea of a web development engine. It's essentially like "What if we had game engines, but designed for building web apps?" Not web games, but that same idea, that same concept of tooling that you have in the game world - how would that look if we built that for the web?

**Jerod Santo:** So go ahead, explain the tech to us, exactly what it is, how it works. We're all developers here, so... Hopefully, we don't get completely locked into something that is not.

**Andreas Møller:** No. So, I mean, probably the simplest way of -- again, we use a lot this analogy to the game engine. A game engine is sort of a big box of a lot of different things. It has rendering engines, physics engines, audio engines, animations engines... All these things. And then that's all tied into a central framework for building games, that sort of powers the game loop and everything. And then on top of that, they have this suite of visual tools. And most of the people working on them are like a mix of some developers, a lot of designers, but they're all working the same tools. And these tools essentially program the engine.

And we're not just talking like building characters. It's not just that they're using visual tooling for like 3D modeling etc. Most of the game logic is built in visual scripting. So in Unity it's called blueprint -- no, in Unity it's called... I think it's just called visual scripting. In Unreal engine it's called blueprint. And I didn't realize this at the time when we started, but actually, the AAA games today, most of the game logic is built with visual programming... Which for me was such a mindblowing moment, because we just rejected this concept, every other industry. We're going "Okay, that's cute. That's for Sketch. That's for children."

**Jerod Santo:** Right.

**Andreas Møller:** But when we look at these big, massive games we play, they've been built this way. Like, there is a lot of code involved, there's a lot of really talented engineers working there, but a lot of the logic is built using these visual tools. And so the basic idea was "What if we build web apps the same way?"

So the best way of describing it on a technical level is probably that it is, in effect, a programming language with a built-in framework, but the biggest difference between -- like, if you're familiar with Elm, that's actually a really good analogy as a programming language.

So Elm was this programming language with a built-in framework. The Elm architecture was the inspiration for Redux, when that came up... But it was a whole language built just around the idea of building frontend apps. And Nordcraft is actually the same, but instead of the code part -- normally, when you have a programming language, you have the code, that gets passed into an AST, which is this abstract representation of your program, and then that gets compiled to either code, or JavaScript, or whatever it is the engine you need to run it in. And all we did is we sort of cut off the code part, and we were saying "What if we just design the big syntax tree of what our program is going to be, and then we store that in a database? And then we build an editor for manipulating that tree."

And what that means is a lot of the things -- and that editor is where normally a visual program is like a big board of like a million nodes. We have some of that too, but what we've done is saying "Different problems have different needs in terms of how you build a tooling for it." So if you're building UI, obviously the editor is going to look like a UI editor. You're going to drag HTML elements, and you're going to click them, you're going to apply styling. And because we wanted to build for professionals, very early on we set on this path of saying "We're not going to try and reinvent new abstractions here", because that's really hard, and it usually takes a long time. And there's a reason why we haven't seen new abstractions since probably React, or Angular time. All the new frameworks are the same abstraction.

\[32:15\] So we're not going to try and invent a new abstraction. We are just going to create a very nice UI for working with the web platform. HTML, CSS, everything you set in our style panel maps to a CSS property. And we even in our tool tips show you what the CSS property is, and what the CSS is going to be rendered as. Because we want you to have full control.

So the HTML you see inside Nordcraft's visual editor is going to be the HTML we render for every component, on every page. The CSS you see is the CSS we render. We do hash some class names, but that's about -- other than that, you basically see exactly what it is.

And then different problems have different solutions. We have a workflow editor for like "When I click a button, what do I actually want to happen?" That becomes almost a flowchart. And it turns out that -- and we sort of separated, we made a distinction between what we call actions, which is I do something that's like I call an API, I update a variable, I trigger an event... Those kinds of things. Things that we in functional programming say have side effects. And pure functions. So pure computation, we call that formula, anything that has a side effect \[unintelligible 00:33:35.15\] And those are actually two different editors. And that allows us to sort of visually separate the two, which turns out is really nice, because you get the high level structure of what is it this thing does, and then you can dive into the details much easier. So it becomes a naturally nice way to organize your code, of saying "Take all the computations and actually hide them initially, and just show me what are the steps. And then if I want to dive into why you did that step or why you did that other step, then I can go and do that." And I think it's not far from how people often organize code anyway. But each of those kind of have their own UI. They're a separate problem. The editor for doing pure formulas, pure computation looks very different than the editor for doing a flowchart. And completely different from any of the UI stuff.

**Adam Stacoviak:** When I'm poking around the UI, I see the option to add formulas and variables. Is that what you're talking about when you say flowcharts, and stuff like that? That's pretty interesting, because you've got different types, and integers, and data coming from different places that connect via nodes. Is that what you're talking about?

**Andreas Møller:** So when I say flowcharts, obviously it's a bit abstract concept to apply directly, but I'm mainly referring to what we call the workflows. So if you select an element, there's an Events tab, and there you can click on the "click event", for example. And that sort of shows up this dialogue that says "Okay, what do you want to happen when someone clicks this element?" And there you can add nodes. And that's a different UI. It looks a little bit like the formula UI, but it's actually tipped on a different axis to sort of make it distinct.

And so we separate, like, what do you want to happen when I click? Okay, so I want to update this variable. But the value you set on the variable - that's probably something you compute, most of the time. And that computation is a formula. So in that, you open the formula. And by having those two separate, you actually - you get to a point where it's very easy to get a high-level overview of what's going on, and very easy to then dive in to exactly the point you want. And one of the benefits we see with that is also that when you're working in the same tool, both engineers and designers, designers can sort of opt into how much they want to get into. When my co-founder joined the project, he only touched the UI. He didn't touch any of the logic, none of the data fetching, none of that. It's just, "I'm only looking at the UI, I'm styling it", and he was super-happy about it.

\[36:17\] And it worked really well, because effectively we worked twice as fast as we would normally do, because we weren't doing all the UI work twice. He would just design directly in Nordcraft, I would just actually wire up the functionality. A lot of times I would build it first and not style it at all. Just add like the minimum amount of UI to make it functionally work. And then he would take over afterwards, and actually go on shipping it. But as a designer, you can choose "Do I care about how the formulas work? Do I care about the workflow? Do I need to know?" And initially, the answer is probably no, and over time, what we often see is that you can sort of get a high-level idea. "Oh, okay, so this is where it updates the variable. This is the button that eventually makes us fetch the data from the server." That kind of thing.

Or if you want to, you can go really into "Why is it that decision? Why did it do exactly that thing? And why was this the value that was set?" But if you're not a programmer, and you're just coming into this, you sort of have the option of saying "I don't really need to deal with that yet", but still get an idea.

**Jerod Santo:** Well, I also know how the editor open and I'm clicking around as we talk... It's very interesting. It reminds me of -- well, like Pixelmator, or Figma, with more things in there for like... Like actions, for instance. Is it baked? I mean, is this thing ready to rock? Are people using it? Is it -- how long you've been working on it? And is it -- I mean, nothing's done, but is it like the 1.0, is it ready?

**Andreas Møller:** It is. It is super-ready. We've launched a year and a half ago.

**Jerod Santo:** Okay.

**Andreas Møller:** And we've got quite a few -- obviously, we don't have any massive enterprises that built the whole stack in Nordcraft yet.

**Jerod Santo:** Right.

**Andreas Møller:** Because a year and a half is not quite enough for people to discover a tool and then build on it for several years. But we have some really interesting projects that's built in Nordcraft. One of my personal favorites is a guy in Malaysia, who built -- it was essentially a competitor to Shopify. It's not feature-complete like Shopify, but in Malaysia, apparently, the way Shopify does card payments means that it's almost impossible to use. So he built a e-commerce store platform like Shopify in Nordcraft. And it has its own visual editor, where you can build your shop, which has a nice sort of inception concept to it. And I think he's already processed orders for over $10 million in that project. And I think on the first day he launched, within the first three days, he processed the first $10,000. So like immediately successful, and he's done a ton with that. And we have a couple of projects like that, that's really successful.

A lot of people are building hobby projects and interesting things, things for fun to try out. Most of our users are always on the freemium plan, and just building interesting things. And of course, the biggest project, the whole editor that you're using right now - we're building it in Nordcraft as well.

**Jerod Santo:** Gotcha. So it's like self-hosted in that way. What's the language? I mean, you said you created a language and a framework together...? Would I learn the language as I build things, or would I not have to know...?

**Andreas Møller:** So language in this case... We haven't given it a name, because we don't really refer to it in that way. It's just the thing underneath, that powers the whole thing.

**Jerod Santo:** But you never have to poke under the covers.

**Andreas Møller:** No, we haven't invented a syntax for it. Like, the whole thing is just stored as ASTs and JSON.

**Jerod Santo:** \[40:11\] So what about when I'm hooking up my actions? When you click on this, here's what I want to do. Go hit this API, get the results back, display them in a table. Am I coding in the language then? Or am I clicking on things? What am I doing?

**Andreas Møller:** I think that's almost a philosophical question, isn't it?

**Jerod Santo:** \[laughs\] It almost is, yeah.

**Andreas Møller:** Because especially -- I used to say that it's not coding, but it's programming, just because coding for me was like code...

**Jerod Santo:** Sure.

**Andreas Møller:** But people use the word "code" a lot to refer to what they've done in Nordcraft.

**Jerod Santo:** Yeah.

**Andreas Møller:** And I'm -- I mean, I'm not sure it's wrong. But there is no textual representation of it.

**Jerod Santo:** Okay. So I am clicking on things and hooking them together.

**Andreas Møller:** Yeah.

**Jerod Santo:** I'm never going to be like --

**Andreas Møller:** So again, if you were writing a JavaScript function that says "Add two numbers together", what the browser actually does when it sees that initially, it starts passing the actual text, and then it builds up this tree structure in memory. And like the first node is going to say "This is a function node." And then it's going to have some attribute that says the name of it, probably whether it's async... I can't remember what the standard AST for JavaScript looks like, but something like that. And then it's going to say "And there's some parameters, or argument." That's going to be an array. And if you have numbers as input, it's going to show that you have parameter A, that's of type number, and parameter B of type number. And then it's going to say "And there's a block."

So it basically takes your code line for line, or bit for bit, and try and represent it as a large tree structure. And every compiler does this; that's the parsing part, right? And then if you're using Babel, what Babel does is it just applies a bunch of different transforms on this AST. If you're doing TypeScript, that's again - like, TypeScript runs type checking on this data structure, so that you can run all these different processes against it. And then the final bit of that is if your language is a compiled language, it turns that into a bunch of ones and zeros; a complex process that I feel like we can leave out of the scope.

**Jerod Santo:** Sure.

**Andreas Møller:** Also, I don't really know anything about it, because I've never built a compiler. Or if it's an interpreted language, there's literally a program that goes through that tree and then performs all the different actions that matches what that is. So if you're saying, okay, if this node is a function call, and this is the name of the function, it's going to go "Well, then I need to go look at my function stack and find that function and apply it." And that's the same thing that we do. So the only difference between, in this case Nordcraft conceptually as a language and any other one, is that we don't start out with text. We cut that off. And this AST that the parser normally generates is actually our source of truth. And that's what we store in our database. And the editor loads that in, and has that model in memory when you're working with it, and whenever you edit anything, it goes directly into that AST and saying "I'm going to change this property." So if you rename a function, it's going to go find that function in the AST and say "I'm going to change the name property."

**Jerod Santo:** So when you're building a formula, you are clicking, you were saying "add an if condition, here's a type of variable, it's a boolean..." You're like connecting things together. And so it's very visual, even when you're building formulae... Formulas? I'm not sure how --

**Andreas Møller:** Formulas.

**Jerod Santo:** Yeah, formulas.

**Andreas Møller:** Or maybe we should do formulae.

**Jerod Santo:** I think formulae might be the --

**Andreas Møller:** I kind of like it.

**Jerod Santo:** ...formal way of saying it. I know that because in Homebrew they have formulae, I think.

**Andreas Møller:** Oh.

**Jerod Santo:** And I always thought "Well, that's fancy..."

**Andreas Møller:** Maybe we should start saying that.

**Jerod Santo:** \[44:01\] Yeah, it's kind of cool. Anyways, I do find there's a button down there, because I'm building a formula, a test formula right now... And as a software developer, this is cool, but at a certain point you're like "I don't want to click and drag and do stuff necessarily..." And there's a button, "Convert to custom code." And now I'm looking at a JavaScript editor, with a JavaScript function. Is this kind of your solution for that situation, where you're like "Yeah, this thing is limiting me. I need to do something outside of the ordinary", and I can bypass the editor? Or tell me what's going on here when I click this "Convert to custom code", because there is an asterisk there about server side rendering.

**Andreas Møller:** Yeah. So the whole idea of custom code - we call them custom actions, custom formulas.

**Jerod Santo:** Okay.

**Andreas Møller:** It's basically that if you're building a new language, you are missing a lot, no matter what you're doing. There's a lot of things you can do in Nordcraft without ever touching any code, but not everything. I often use the example of like - I wanted to build something that I could use... I wanted to try the Bluetooth API, right? And so I made a simple example where I could use a PlayStation controller to browse a website. And that Bluetooth was not very high on our priority list of things that Nordcraft needed to do, because I've never actually used before in my 20 years... To be fair, it hasn't been there for 20 years, right? But it's not the most used web API. But you might still need it for your app. It might be that the thing you're building needs Bluetooth connectivity. And so there always has to be a way to solve your problems. And the way every programming language ever, I think, has done this is through a foreign function interface.

So when Node came out, it could do a lot of things, but most of the libraries were just bindings to C. It was just "Here is the JavaScript interface. I'm actually calling some C code underneath." And for a long time -- over time, it kind of changed, and a lot of things actually got written in JavaScript, and it stayed within the same ecosystem. But initially, it was all a different language, and it was just an interface for it. And that's the same thing we've done here, saying "Well, if you want to add to something that Nordcraft can't do yet, you can create this custom action." And it's essentially a foreign interface. You go and say "Well, the action is going to take this kind of input", it can emit some events back, and whatever it does in between, that's entirely up to you; you can write whatever code you want. And it allows you to effectively say -- there is no limit. Even if you hit a really weird edge case that your app needs to do, that's possible. If you want to bring in a third party library that does weird graph rendering things, because someone made that and you want to use that. Or if you really want to use AG Grid, you can use AG Grid. You just go and say "I'm going to define in Nordcraft and saying this div is where Nordcraft--" Just like you're doing in React, right? "This is the div where Nordcraft stops touching the content inside, and then I'm going to use JavaScript to render the rest." And that's perfectly possible. You just build an interface so that you can work with that inside of Nordcraft. Again, this is not us coming up with something fantastically new. This is the same thing React does whenever you're opting out of React for rendering, and it's the same thing every programming language has done for an interface.

There are also cases where it's just -- we ran into an example the other day with a markdown parser, where it's like, yeah, I mean, just use the JavaScript one. And we had an engineer who definitely felt like he wanted to build it natively into Nordcraft. But yeah, it's not a great tool for building a markdown parser. That's not the point. JavaScript can do that just fine.

**Jerod Santo:** \[48:03\] But when you're building Nordcraft with Nordcraft, do you find yourself ejecting often, the way that you guys have set this up, or not very often?

**Andreas Møller:** Ironically, almost never.

**Jerod Santo:** Almost never.

**Andreas Møller:** If you look at the project -- and we are we're in the process of taking it open source, so in the coming weeks we're going to open up the editor project, so anyone can dive in and see how we build it. And in there, there's a lot of custom code, but almost all of it is because we made it before -- like, maybe a couple years ago, before Nordcraft could actually do that thing. So it's really not a lot of times. It's quite rare we go in and do that. The most recent example I had is we rebuilt our whole style panel, and because we want to support the full CSS spec - so even if we don't have a UI for a specific type of style, you can still pop into... There's a CSS panel on the side where you can go and look at the actual CSS. And you can write CSS in there, and we want to support you doing that, whatever it is. But that also means we actually have to parse all that CSS, so we can figure out how to properly render it in the style panel. And so we had to sort of build one, sort of half open source, half built ourself parser... And that was a classic example of "Yeah, you can definitely do that better in code." That's not what Nordcraft is built for at all. But it is quite rare. Most things, it's just easier and works better to build it directly in Nordcraft.

**Adam Stacoviak:** It's interesting to build it inside of itself... How does it work?

**Andreas Møller:** I mean, it's a nice experience now, but I started doing that before we had version control. That meant if you made a mistake, you broke the tool you're going to use to fix it.

**Adam Stacoviak:** Oh, dang...

**Andreas Møller:** Yeah. So I had a few times where I had to like check out JSON from a big JSON tree from the database, and try and search through and figure out what did I do. How do I fix this.

**Adam Stacoviak:** So you're literally building the engine inside of Nordcraft? Is that what I'm hearing? What part are you building inside of Nordcraft?

**Andreas Møller:** Editors. Just the editors.

**Adam Stacoviak:** Okay, so the visual UI. All the UI you see is being built with Nordcraft.

**Andreas Møller:** Yeah. So the runtime, as we call it, the one that actually executes and renders HTML and CSS into the browser, that is built in TypeScript. And that is all open source, and you can see it on our GitHub repo.

**Jerod Santo:** And you're in the process of open sourcing more things. Or everything? More things?

**Andreas Møller:** Yes. So we've open sourced the runtime and a bunch of sort of utility functions, and a few examples that basically allows you to run your whole application. Like, anything you build in Nordcraft, you can run it by yourself, on your own infrastructure. And when you do that, all our code is -- what is it? GPL.

**Jerod Santo:** And your investors like this?

**Andreas Møller:** They were actually fine with it. They didn't have a problem. I mean, obviously, I had built a story before I went to them.

**Jerod Santo:** What was the story? Tell us the story.

**Andreas Møller:** So the basic story was saying like -- we never thought we were going to build a big company out of the no-code community... Because first of all, it's not nearly as big as the developer community. And it's, per definition, never going to be big enterprise customers. Because that's the big one. So if we want to take this thing where we think we can go, we need to get developers on board. And we had some, and they were interested, and all of them were asking "So is this going to be open source?"

**Jerod Santo:** Right.

**Andreas Møller:** And basically saying if we want companies to trust us with the kind of projects they're building, and that size, we've got to show them something. We've got to say "Well, actually, we're not gonna rugpull you halfway through and say "Hah! Surprise, now it's going to be twice as expensive."

**Jerod Santo:** \[52:10\] Lock-in is something that we're all thinking about... And if you want to build something serious on top of there, even your user in Malaysia, who's got now a platform that he's making money off of, and he needs some assurances that that's not going to dramatically change, or somehow lock him out, or whatever happens... Having open source is peace of mind.

**Andreas Møller:** Exactly. And personally, I'm not sure I would -- like, I would have that in mind. There's a limit to what I would build on a platform that literally -- because it's not just some of it, it's like all of it. It's literally your whole app that you're building. So if you don't have options, that would worry me.

**Jerod Santo:** For sure.

**Andreas Møller:** And I think it worries other people in the same way. But we didn't build like that from day one, mainly because - well, my experience and my understanding was that open source doesn't necessarily make you go faster.

**Jerod Santo:** No, not necessarily.

**Andreas Møller:** And especially in the early days, we wanted to go fast, so we didn't want to open source it there. We already had in mind that this was going to be something we would do... It wasn't something that came up a lot in the early days, from users... So therefore, it was like "Okay, we're going to keep it closed. We're going to keep going." And now there's a bit of process in sort of separating first "What is the platform code that's our hosting code?" And that part of the platform that's related to our hosting service and the actual editor. So we need to separate those two apart. And we also need to sort of have an open source backend for it. And that's not going to be 100% the same as the one we have that's custom built for Cloudflare at the moment.

**Jerod Santo:** That all makes sense. It's for web apps... Is it bad for websites, or just not built with that in mind? Is it just as good of a choice, or is Webflow the way to go?

**Andreas Møller:** I mean, almost every time when people ask "What should I use it for?" I say that the answer is the same as you would say for React. I think that for websites, we might have a little bit of a leg up, because it's quite easy to build a website. Like, React is a lot overkill, and so is Nordcraft. But you don't experience the overkill, the extra stuff in Nordcraft to build a website. It's kind of like building in Webflow.

So it totally works for websites, but you have options. There's a lot of other tools that can do websites as well as us. Where it begins to change and where we really sort of land as being our sweet spot is when you start pulling in data from different data sources or backends, and start making it more interactive and dynamic.

**Break**: \[55:00\]

**Adam Stacoviak:** What about things like authentication, authorization, when you get into those scenarios? I know it's an editor at this point, it's a visual interface to it, but how do you -- is that simply just part of the programmatic ways it has behind the scenes? You can enable that? How do you work that kind of stuff in?

**Andreas Møller:** So because most of authentication is a backend issue, we don't handle most of it, because we don't have a backend, we just work with whatever your backend is... Whether you coded your own, or whether you use like Supabase directly as a backend, or whatever you're going with. There's also some -- like, Xano is one of that more low code/no code style backend; it works really well with that as well. So from our point of view, again, we're frontend, so we're just doing HTTP requests to a server. So what we've done around authentication is say "What matters for us is how we store the token, in essence." Whatever strategy you have for authentication is possible.

What we sort of nudge people towards is storing your token in an HTTP-only cookie. Because that's generally the most secure way of handling it. And what we've done is we have an API proxy. So whenever you have an API from the frontend, if you run it through our proxy, we can actually authenticate that request. So let's say you need to send an authorization header with your user token to an API - that's the most common approach - well, you can actually set up "Well, that's what I want to send", and you don't actually have the token on the client, because that's stored in an HTTP-only cookie from when you authenticate it, but we actually put that token in before that request goes to the server. And that way, even if you have some script injection attacks, etc. they can't actually steal your token. That's not going to fit for everyone. Sometimes if you want to do -- especially if you're doing like real time WebSockets and stuff, that's not always an option, and you do need to have the token on the client. So whatever your authentication strategy is, is possible. And it sort of speaks to the general approach...

I sometimes say "We didn't really invent that much." And by that, I mean almost everything works the way you would expect it if you stopped looking at it as a visual tool, and started looking at it as a JavaScript framework. So when people ask "How do you do authentication in React?", it's sort of almost a half abstract question, because it's like "Well, however you like." And similar, "How do you store things on the client?" Well, there's local storage, there's session storage, there's IndexedDB, there's all these options... Because it's a web browser, right? And we are a framework, and we just build visual tools on top of that. But we didn't invent whole new abstracts. The web's pretty good. The HTML, CSS - it's the best we've come up with yet, I think... So we're not reinventing it.

Obviously, it's not running JavaScript, but it's very much stealing everything it can in terms of function names and making sure that everything is very familiar to someone coming from that world. And again, all the browser APIs, they're the same.

**Adam Stacoviak:** No need to install modules and bundles and things like that?

**Andreas Møller:** Well, there's always a question of like "How much do you want to build yourself, and how much do you want to use other people's code?" So we have packages, is what we call them, and you can install them. And basically -- so by default, when you open Nordcraft, I think people are often surprised that there's nothing there in terms of like pre-built stuff for you. So if you open it up, what can you add to your page? Well, you can add a header tag, or a H1, or you can add a button, or links... All those great HTML elements you can add. But there's no tabs. There's no complex media player or carousel. You can install those as packages, just like you would do in any framework, but that's not a built-in feature. You can build them yourself or you can use something made from the community.

**Adam Stacoviak:** What is deployment like then? I suppose, if it's the visual side, is it -- it's not hosted. I'm still trying to figure out what exactly -- where it lives, I suppose. Tell me more. I don't know how to ask this question, but are you deploying something? Is it living somewhere? You mentioned ASTs, and your database, but how does this application -- how do you deploy this, whatever this is? Or is it always deployed?

**Andreas Møller:** It is always deployed.

**Adam Stacoviak:** So you're live in production when you're building, or staging, or branching.

**Andreas Møller:** So how detailed do you want to go?

**Adam Stacoviak:** \[01:02:08.01\] As deep as you want.

**Andreas Møller:** Okay, so there's basically two --

**Adam Stacoviak:** Whatever a developer is gonna care about, I would say. If a developer is thinking "Okay, I get it. Adam doesn't, but I get it. React, but different." Take us there. What would a developer \[unintelligible 01:02:20.07\]

**Andreas Møller:** Okay. Well, we're dipping a bit into the developer space then. So we built our version, our hosting platform on top of Cloudflare, because Cloudflare kind of uniquely has a bunch of services that are very interesting for us. One of them is something called Durable Objects. And what a Durable Object is, is essentially a serverless worker with state. And so you can basically save things in memory, and it'll still be there next time you ask it. And it has this weird property where there can only be one instance of it deployed worldwide at the same time. And that is for most things really bad, because it doesn't scale. But it is essentially how we -- we kind of treat it like a shared file system.

So whenever you create a branch - and we have version control that's not technically Git, but we copied this as much as we could. So whenever you create a new branch, each branch has its own Durable Object associated with it. And the way these work, which is quite cool, is that they are always close to you. So if I connect to a branch, that Durable Object is going to be in a data center near me, whatever closest to me. Cloudflare has like 250, or something like that. If you connect to the same branch, or if you connect to the same branch later, it's going to move that instance closer to you, to make sure you have better rewrite performance. But there's always going to be only one. So whenever I'm working on a branch and I'm updating my data and sending that to the Durable Object, that instance always has the latest version of my project for that branch. So whenever I go and say "Actually, I wanna preview this one. I wanna see what it is live", whenever I open that, it connects to the same instance when you're on a branch, when it's not deployed.

So in real time, you can always see what is there. Because the second I make a change, that actually gets sent; it takes about seven to 16 milliseconds. Then that's saved, and then your application will see that. So branch deployment, those live preview environments, that is below 100 milliseconds from I make a save to you see it live.

For the actual main we don't do this, because it's actually a good thing to have a lot of different instances all over the world for that... So there, we just have the main version of that project, and we use that as the cache infrastructure to make sure that every single data center has a version of that. And we are rendering -- whenever you make a request to a page, we are rendering that whole page based on our code. And we actually looked into caching, and the funny thing is it didn't do much, because it renders it really quickly on this worker... So actually caching the final page for a static page didn't make it faster. Maybe on average three or four milliseconds, but it really didn't change much. When you start adding data, when that page needs data in order to render, obviously that's a different question.

**Jerod Santo:** Right.

**Andreas Møller:** Does that answer it? Does that make sense?

**Adam Stacoviak:** It does, yeah.

**Andreas Møller:** \[01:06:02.08\] But even our deployment, even our deployment is just saying -- all we're really doing is saying "This version that we have in the database, that is now the live version." So we are moving a pointer for when we're deploying. So deployments happen really fast as well.

**Jerod Santo:** How are you approaching education?

**Andreas Møller:** We hired a really great person for education, a common friend, I believe, to help us with that. Salma Alam-Naylor.

**Jerod Santo:** Was that Selma? That's her role?

**Andreas Møller:** Yeah.

**Jerod Santo:** Okay.

**Andreas Møller:** She's our head of education. So education is a big part of this, because even though a lot of this is actually familiar to developers, once you get past the interface you kind of have -- like, there is a little bit where it has to click. We've seen a lot of people where they're like "How do I submit a form?" And like, it's a form, right? You know how to submit a form. You just have to see that because the visual is -- you thought there was all sorts of other things, but it's the same way you think. There's a button inside, click the button, submits the form.

So there's those kinds of things that people often a little bit have to get over, but after that, it actually is very familiar, if you've used a framework before. But that being said, education is still a big part of it, because it is conceptually a new thing. Like, it isn't quite -- even the tools it looks like, it isn't quite that, and you wanna think about it a little bit different.

**Jerod Santo:** Yeah.

**Andreas Møller:** So it's something we've put a lot of focus on and effort into, both as a sort of "How do we approach it?" We just worked with an agency -- it's a Nordcraft-only agency. They only work in Nordcraft because they're kind of picky. They're like "We don't wanna do projects that aren't Nordcraft." So they're very focused on that. We just work with them and they actually helped us rebuild our whole documentation side, as well as a lot of the technical documentation, because they are incredibly good at it. They really understand the platform. And I think if you're looking into Nordcraft, go and check out the documentation. It's some of the best I've seen. There's a high level attention to detail. They did a fantastic job on this one. But also a lot of video content, a lot of sort of trying to "How do we try different medias, figure out what people learn?"

We also have these challenges we added when you first sign up, and the basic idea is -- I kind of hate these step-by-step tutorial, where it's just "Move the mouse to the right and click the button." Like, "Okay, yeah..." We wanted something a little bit more fun, but that still kind of held your hand. And so our approach is challenges where it kind of sets your challenge -- like, you're gonna build a weather app, and you need to add an API, fetch some weather data, and you need to add all that data to your UI, and this and this and this. And it shows you the steps; there's always a chance of it showing you, but it kind of like lets you try first, and saying, you know, "Give it a shot, and then if you're not sure, come back." So we're trying a lot of different things to sort of figure out what is it that kind of gets people to get it the fastest.

**Jerod Santo:** I noticed in your welcome email you allow people to book a personalized onboarding session, which reminded me of, I think, Paul Graham's essay, "Do things that don't scale." Something in this one's not gonna scale as you get popular... Is that with yourself? Is that with Salma? Is that with your co-founder?

**Andreas Møller:** No, it's literally with me. And the worst thing is, I think it might scale.

**Jerod Santo:** Because no one clicks it, or what?

**Andreas Møller:** \[01:09:55.01\] Because I don't get a lot. \[laughter\] And it's one of my favorite things. Obviously, at some point we can't do that, and it's probably not that far away. But I think I have two a week, of like 15-minute calls... It's not that bad. And it's not because there aren't people. I think it's just this idea of like --

**Jerod Santo:** Kind of intimidating.

**Andreas Møller:** ...going through a call with a -- for some people it's a little bit "Ah, I don't know." But developers aren't booking calls for new tools. That's \[unintelligible 01:10:23.02\] So we had it in because if someone wants do that, generally it's been a good thing. But actually, it's not -- like, yeah, we don't get a lot of people doing it. Most people very much prefer learning on their own.

We have a Discord server, and we really recommend everyone going there because it's such a great place to get help, and it's a fantastic community. But there's also a lot of people who don't wanna join a Discord server for a new tool. They wanna see it first, and figure it out, and then we'll see about community afterwards. That's fair enough.

**Jerod Santo:** Well, it's a cool tool. I mean, I'm impressed. Very polished... It seems like you thought through a lot of the things that would stop me as a developer from using something like this, such as a way of ejecting, such as a way of self-hosting... You're obviously getting there in case Andreas and co no longer exist, or get sold or whatever, and things change...

**Andreas Møller:** Or get really greedy. I mean, there's always an option saying "We just want more money."

**Jerod Santo:** Yeah, or you get greedy. Yeah, what's it costing right now? How does it work? What's the pricing look like today?

**Andreas Møller:** So we think it's very reasonable. You can build a lot for free. The only time we really start charging you is... Well, so by default, we call it the open source plan. And it basically says, if you're doing a public project that anyone can see and clone, then you don't have to pay for it... As long as like -- we have some traffic limits etc. And if you want a custom domain for your application, because you're starting to brand it, or if you want it to be a private app that other people can't see... Because maybe you don't want to build an open source product, right? That's fine. Then you need to go on a paid plan. And they start at 36 for monthly, dollars per month per developer, and then once you move up to a scale-up plan, which is either when you sort of move past the traffic limitations \[unintelligible 01:12:20.14\] or you get more than three seats, then it's $100 per seat.

**Jerod Santo:** And is that like collaborative? I guess we haven't talked about collaboration at all, but I assume those seats are -- like, it's multiplayer; you can be doing the same thing, doing different stuff, seeing each other move around...

**Andreas Møller:** Yes. You can do that. I would say that generally doesn't work as well as people think, because being in the same branch... It's kind of like being in the same branch in GitHub. It's rare that really that's how you want to work. You generally want to work in separate branches.

So you can, absolutely. And the way this works - if you go into the same branch, you'll see the update someone else makes almost as fast as they do... Assuming you're in a similar location. But most of the time people work async. So just like in Git, we check out our own branch, that's what we're working on. When we're done doing what we're doing, we'll commit that branch and publish it. If someone else did that since, we are merging their changes and our changes, and we can see what we're doing. And again, the workflow is exactly like if you're working in a codebase with Git. The big difference is that the way we actually diff the projects - because there's no code, therefore there is technically no Git, because that's file-based. So we had to change some of the implementation details, but the process and the workflows are the same.

**Jerod Santo:** Cool stuff. Adam, any other questions for Andreas before we let him go?

**Adam Stacoviak:** I don't think so. I don't think so. I'm excited about it. I think you're onto something good here. Don't stop.

**Andreas Møller:** \[01:13:59.01\] We want. We are going to keep going, because excitement is only building. We've got some really cool things coming. One thing I'm really excited about is that one of our engineers has been working on an animation editor. And I've always felt like animations on the web -- we really technically had the tools for doing great animations for like a decade... Like keyframe animations - you can do a lot just with keyframe animations and transitions. They're quite powerful. But if you go and look at people's web apps, especially SaaS apps, they're all super-static. They're all kind of boring. And part of it is that while we've had the tools, finally adjusting a keyframe animations in CSS... It's pretty painful. You have to go and say "Oh, actually, the timing is a bit off, so now I need to go and move keyframe number three. Am I going to move that 2% or 3%? Let's see", and then I go back, and then I'm waiting for live reload. That kind of work, adjusting animation to feel nice - that is fine-tuning work, and code is not great for that, because the feedback cycle is so slow.

So one of the really nice things is that once you have a visual tool with a fast upload, you can start actually building an animation keyframe editor, and you can visualize your keyframes as in the good old Flash stage. We lost something when that went away. We also gained something... But you can start adding in those kinds of keyframes, and actually really animate every aspect of something, and adjust them and fine-tune them. It's the same thing we're seeing now, just something like a gradient. Just having a gradient in it means that you will actually use gradients... Because nobody knows how to type gradients into CSS. You forget it the second you've done it.

**Jerod Santo:** Totally.

**Adam Stacoviak:** Every time.

**Andreas Møller:** So having a tool for those kinds of things means that you actually use them, and it means that the results, the output actually gets more interesting, and more sort of delightful, I think is the word \[unintelligible 01:16:07.08\] So I'm really excited about the animation. He's done such an incredible job, and we're going to have a ton of content and tutorials and stuff coming out when that launches.

**Adam Stacoviak:** How do you know you're on the right track? What is the feedback loop? I know you mentioned the other project, how they're doing some cool stuff... I didn't hear a big name yet necessarily. How do you know you're approaching or near product-market fit? What is that for you?

**Andreas Møller:** So the hardest part with product-market fit is actually for us -- because I think we have what we call a product-customer fit. Like, our customers really love it. They go and make videos about how much they enjoy this, they go and talk about it, sometimes ad nauseam to other people. We get complained about people going "Look, we get it, he likes your tool, but... Can we talk about something else sometimes?" I had a call with someone from an agency that's like "I kind of just took this because he wouldn't shut up about it." \[laughs\] Okay, fair enough. Maybe they'll try it, maybe they'll like it.

So we have a very strong fit. The number one guiding thing for me is that we are working in this tool every single day. Like, the whole team. Obviously, some of our engineers are working on the backend and different aspects, and we write code as well as part of it... But the vast majority of the work we do every day in the whole team is inside this tool. And because we're still a small team - we're only 10 people at the moment building this thing - it's a very advanced, very experienced team. So these are people who've been building -- I think our most junior has been doing it for 10 years. So "most junior" is the wrong way of phrasing it. But these are people who've been doing this for a long time, and they know how to build these things. They're exactly \[unintelligible 01:18:11.28\] of users we're looking for as well. And we know how this works. We dogfood, as you say, every single day.

\[01:18:22.15\] And once you get to that bit where it clicks and you start working with other people and you figure out how all these things work, that dynamic of designer and developer working together, the idea of letting go of that afterwards - that feels awful. The idea of me going back to having a design handoff with a Figma design that I had to go and replicate... I mean, that feels so backwards right now. And personally for me, I have like a couple of hundred apps now of projects I've built in Nordcraft. Because every time I have a new idea, that's always gonna be my go-to. Not just because I start a company, but because it's just so much easier to get started, it's so much easier to get your ideas out, it's so much easier to build UI, visually, than it is to sit and write code.

And a lot of the other bit, I think -- I find that most people I talk to... Because it is a big sell. It is a big difference. It's a big shift compared to what people are used to. It is quite a radical idea. Even though, again, when you think of the development engine, like gaming etc. it probably shouldn't be so radical... But it is a big shift. And it took me two years to convince myself it was a good idea. I didn't believe in it for the longest time. I've been the hardest one to convince, because - why wasn't it done? What was I missing? What was the thing -- okay, it looks fine now, but what about six months down the line? Is it still gonna be good? And that was the motivation for starting to rebuild the editor in itself, is because I needed a project that was big enough that I got that feel of "What is it like at scale?" And now understanding -- obviously, 10 people, you can debate whether that's scale. But it's enough to give you the right idea.

And now building this tool -- like, if we did that in anything else... I think doing that in React would slow us down a lot. We wouldn't be able to move at the same speed at all. Just the fact that 2 out of our 10 team members wouldn't be contributing directly, but just feeding in designs, right? Well, that's like a lot already. So our whole team, we're using it, we're building all sorts of stuff in it, we're constantly drafting... We also know all the bad parts, all the things that aren't as good. There's always "This thing is not as good as I want it to be", or "This thing annoys me, but we'll see when we get to fix it." We also get to feel all the bad parts way earlier than anybody else. But really being inside the project, having it be your daily driver for everything you do - it gives you a very good idea of what it's capable of.

**Adam Stacoviak:** I'm thinking -- I'm just kind of camping out on like this transitional period. So you've got this very uphill battle when it comes to marketing. That's what Jerod asked about education, because he's like "How do you convince people they should make this change, that they have a problem?" We all know there's a -- we've just defined the problem. Your co-founder had the problem, I had the problem, you've had the problem in the past, of like designers and developers working in the same tool, and not double-working or having this scenario. But I'm just thinking like \[unintelligible 01:21:35.25\] but who is coming into this thing initially? Is it developers? Because you've spoken about this allergy of no code, and things like that... So who is it that's coming in or seeing the light, so to speak, this a-ha moment, that is the early adopter?

**Andreas Møller:** \[01:21:59.29\] It's a good question, and it is a split. There's not a one clear... Most people who come in, when we ask them "What do you identify as? Are you a developer, a designer, or something else?", most say developer. And then that's like half, around half. And then there's a 50/50 split between designer and none of the above. One of the things that's really interesting is that I think there's more to win as a designer early on. Because as a developer, what we're basically saying is "This is a slightly nicer way of working, and you'll probably work a little bit faster." And also, if you -- again, a big part of the value prop is the fact that building UI is very valuable in a visual environment.

I think the logic itself, the reason why that's visual programming is not necessarily because -- it's not because there's anything wrong with code. It's just because context switching quickly gets annoying. So my initial draft, all the logic was done with code, and only the UI was built visually. And then I sort of realized that "Okay, but if I'm just binding a value to an attribute here, it's kind of annoying having to switch to a code editor to do that. Why can't I just do it right there?" And then over time that kind of kept growing, into a point where I'm saying "Actually, I kind of want the full power of a programming language, without having to context switch out of the app to a code block somewhere." But that wasn't really the point. The point was building UI. And that's where I think most of the value still is. And for that reason, as a designer, you go from "I make a Figma design, or maybe I can make a Webflow site" to "I can actually build an app. I can build probably a symbol to start with app." So that's a massive value change in what you can certainly do.

For developers it's a little bit less, because you could always -- like, anything you can build in Nordcraft, you could probably already build the same thing. But at the same time, the barrier of entry is lower. It's easier for developers to understand, because we see people who don't come from a developer background - it's not necessarily that they have a hard time using the tool, it's that they hit those developer problems, of saying "Well, I don't actually know how to solve this problem." And it wouldn't really matter what the medium was, it's just how do you solve the problem.

Let's say I have an array of 25 likes, and I need to figure out if I like this post. So you have to search through that list of likes to figure out the one that you made. Okay, how do I do that? And the answer is abstractly the same, whether you're doing it in Nordcraft or JavaScript. But if you've never done either, that doesn't help.

**Adam Stacoviak:** It certainly seems like a big win for designers who are consistently interfacing with their developers, building applications; not obviously building out other things that are not applications, because that's what this is for.

**Andreas Møller:** Absolutely.

**Adam Stacoviak:** Because you don't have the risk of your research and your baby and all your work not getting translated well... And you get to work directly in a tool that is essentially as real-time as real-time can be to your production interface. You can branch, you can do all these fun things... And you don't have to double the work. Your team doesn't have to double the work.

So from a business standpoint, it's like "Well, we could save a lot of money." And the tool is actually -- the one tool is the one tool. It's not "This tool, and that tool", and some sort of translation period. It's in this static design pixel-perfect world that has to get translated. So it sounds like designers are probably your first customers, and developers, engineers following suit because they're being pulled... Maybe happily, I'm not sure. I'm not sure.

**Andreas Møller:** \[01:26:03.18\] Whenever we talk to companies, that's how we go about it. We're saying "This is a tool for your designers that brings your developers in." And that's very much our strategy. Of course, when it's just people trying it out, people come in for whatever that interests them. But one of the interesting things about the design profession is that, as I said -- well, with frameworks we definitely push them out of the browser. They're not working in that anymore. But we sort of pigeonhole designers a little bit... And I think design tools are maybe a bit to blame as well. Because we have UI/UX designers working in Figma, but you cannot do UX design in Figma. There's nothing for you there. It can do a semi-responsive website, but what about keyboard interaction? Those things have to be designed. There's so many aspects of UX which is until you touch and feel the application, that is the user experience.

So we've kind of cut a lot of that roll off, and say "Actually--" So today, in a standard dev team, frontend developers -- there's more UX than UX designers, because they're the one who are actually hands on. I remember talking to my partner and saying -- I talked to him about tabindex, and he's like "What is tabindex?" Because -- I mean, he didn't know. And it's the -- well, that's basically how you decide what order you're going to go through the interface when you press the Tab key. And which things can be focused, which things can't. That is a big part of UX. But there's none of that in Figma. And I would probably guess that a lot of especially younger UX designers today have no idea... Because they don't have the tools to work with that. That is -- by the time that becomes relevant, that is way into the developer domain.

**Adam Stacoviak:** You also get to fast-forward a lot too, because you make -- I've made design choices that were incorrect. And it was evident immediately, as soon as you use the real application. It's like "Oh my gosh, we actually implemented it the way I wanted to, but it wasn't -- what I designed was static. It wasn't really usable." In modern tooling you can do a lot of the stepthroughs, things like that, but you can sort of define some of the UX, but not all of it. And so until you see the real thing \[unintelligible 01:28:25.20\] you're kind of making some educated guesses and hoping that your selections are right, and they weren't so wrong that you've got to do a bunch of rework.

**Andreas Møller:** Yeah. And we actually usually do what we sort of dubbed, jokingly, the reverse handoff, which is a lot of times I will build something hideous - and we actually almost made a sport out of making UI that's as ugly as possible before we hand it off to a designer... Because then the designer would actually do the UI. We just technically needed to get the data on the screen. Because when they're designing, they're designing with real data, real application right there. Everything they're doing. I mean, they'll be rearranging the stuff around, and making sure it's laid out right, everything. But it's the real app.

\[01:29:13.13\] And the funny thing is when we talk responsive design, we always talk about changing the width of the browser... But there's a lot more to it, because the content changes. So everyone, every developer has at some point received the design that looked great, and then come back and say "What do I do when the title is 120 characters?" And then it's like "Well, then actually, unfortunately, the whole design falls apart, because it can't break line, there's not enough room, and it can't overflow, and "Ah, do we do a tool tip?" Like, these kinds of things - what happens when there are no tags on this element, because then it just leaves this massive white space in the middle? All these things -- will design change based on data when you're building dynamic applications? So if you can't see the data, you don't know the cases.

**Jerod Santo:** Right.

**Andreas Møller:** And that's why we have this sort of like back and forth in our teams all the time, of like "Well, what about this case?"

**Jerod Santo:** Well, this has certainly been probably the most expensive part of most buildouts in the history of web development, is the glue between design and dev, and implementation, frontand/backend... All the seams where we come together and collaborate, it always gets very expensive, and you can save a lot of money if you have teams that are good at collaborating around those things, and catching stuff early. But that takes time and experience, and so having a tool where you can meet in the middle, develop in the middle, and design in the middle, and get that quick feedback, certainly I think needs to exist. So I'm excited that y'all are building one, and that's going to be open source, and that it's polished and ready to be used. So I'm going to give this thing a shot. I'm going to try to build a really ugly UI, and I'm going to pass it to Adam and see if he can make it look better.

**Andreas Møller:** Yeah. I mean, I find that all the named HTML colors are really good in this case.

**Jerod Santo:** Oh, yes...

**Andreas Møller:** There's a lot of -- yeah. There's a lot of good ones there. You don't need to go into any of this hex business. Just pick one that has a name... That's kind of the best ones. That's my strategy before I hand off to a designer.

**Adam Stacoviak:** This hex business. \[laughter\]

**Jerod Santo:** Very cool. Andreas, thanks for sharing with us, man.

**Andreas Møller:** Well, thank you very much for having me. It's been a pleasure. I've been listening to the show for so long... So it's really exciting to be on it.

**Adam Stacoviak:** Very cool. Glad to have you here.

**Jerod Santo:** Absolutely.
