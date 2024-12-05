**Kevin Ball:** Hey, hey! Coming to you live from the top of the tower at the Planetarium for React Summit. I'm Kball from JS Party, I'm one of your hosts, and I'm here with Nick Nisi.

**Nick Nisi:** Hoy-hoy.

**Kevin Ball:** And we are joined by the one, the only, Kent C. Dodds.

**Kent C. Dodds:** Hello. Thank you very much for having me.

**Kevin Ball:** Kent, just in case there's one person out in the audience who has not heard of you before, maybe, why don't you introduce yourself? Let people know who you are.

**Kent C. Dodds:** Well, I'm sure that if you don't know who I am, you're not alone. There are a lot of people who don't know who I am.

My name is Kent C. Dodds, I am from Utah, I live there with my wife and five children, and I help developers build quality applications through education. So I teach people full stack web on epicweb.dev, I go really deep into React on epicreact.dev, and testing, testingjavascript.com.

**Nick Nisi:** Very cool. And you're also the author of very popular libraries and things that I use day to day, things like Testing Library.

**Kent C. Dodds:** Yeah, yeah. Thank you. I'm glad that that worked out... \[laughter\]

**Nick Nisi:** It's really nice.

**Kent C. Dodds:** Yeah, good. I'm glad that's helpful.

**Kevin Ball:** So you're talking about learning, and we'll try to get out of learning some as well... But like diving into learning, one of the things that's interesting right at this moment in learning is - you know, you have all this new AI stuff, and people are using it to learn, or to bypass learning, or to do things. What are you seeing in terms of trends, in terms of folks learning web dev for the first time, learning new concepts? Is it changing, or is it same as it ever was?

**Kent C. Dodds:** I think it is changing, and I think that there are new skills that we need to develop as developers. The skill of being able to properly prompt AI to help generate good code, and then review the code that it generated, to make sure that it is in fact good code.

In my teaching, I record videos and things, and I have the AI assistant turned on, and I encourage my students to also have their AI assistants turned on... Not because the handholding is helpful or whatever, but because that's just how we develop software now. And you should practice the way that you actually develop. And so it's important for you to get a whole bunch of code that's generated for you and be like "Huh, that's interesting", and internalize that process of an automatic review once it's been generated. And then also the ability to debug things when they're not right. So yeah, things are changing at a rapid pace, it's constantly getting better at generating code... But this is a really important skill that all developers need.

**Nick Nisi:** As your students are going through these and you're encouraging them to use AI to assist with that, do you see the kind of questions that you might get as like support changing? Does it get influenced by the AI at all? Or does it make it harder or easier to reason about problems that might arise?

**Kent C. Dodds:** I think I get fewer questions about -- well, I never got a lot of questions about syntax, because I mostly am teaching experienced developers. But simple questions about APIs and things, especially also with TypeScript now - all my stuff is in TypeScript - I'm not getting questions about which argument goes where, and stuff like that. But I am still getting questions about "Why does it work this way?" And those are the kinds of questions that I think are still important for us to understand the why behind things, because that makes us more effective reviewers, also even authors of the code as well... Sometimes the AI is not going to generate the code that you're looking for, so you still have to author the code.

But the understanding of why things work a certain way has always been a question that I get. So yes, I am getting fewer questions about simpler things. I will occasionally get questions about things that I'm like "I can tell you didn't ask AI, because AI would have told you an answer to that question right off, and it would have been right, and everything." So I think people are still learning to incorporate AI into their regular process of learning, and I think that's also an important thing.

\[00:08:01.25\] Sometimes, especially when you're learning something new, AI is really good, because it can fill in the holes that you didn't know were there. The "you don't know what you don't know" sort of thing, and AI can fill you in on those things... So anyway, long way to answer your question - yes, I'm still getting the important or like the really key questions, I think, that we as engineers are more suited to answer, and I'm starting to see fewer of the simpler questions that AI can kind of answer.

**Kevin Ball:** One of the things you mentioned there is debugging output. And I feel like debugging has long been the sort of neglected stepchild of software development, where we don't -- at least in university, there was not much taught about how to debug...

**Kent C. Dodds:** Yeah, not at all. Not for me.

**Kevin Ball:** I don't know if you teach debugging skills in particular, but it feels like that is rising. So how would you go about helping someone learn to debug?

**Kent C. Dodds:** Yeah, I think the reason that debugging isn't a topic that's taught in college classes, or even like a bootcamp, or even most courses, is because it's the sort of thing that it's difficult to manufacture a scenario. So at least as an educator thinking about "Okay, what are the examples?", it's just really difficult to come up with the example, because once you figure out what the problem is - "Well, now I know what the problem is. I'll just like fix that, and now I don't have to deal with the bug."

And one of the things that I do is teach performance debugging in Epic React. And so I'm showing you the different tools that we can use in the browser, and things, to optimize things in that way, and figure out where the problem is in the first place. But it is a harder skill to teach, which I think is part of why it doesn't really show up in much curriculum... And it also seems to be a skill that you have to learn through experience, and just try. And frankly, it's also something that AI is pretty bad at helping us with. If you say, "What is wrong with this code?", it's not really gonna know, because lots of times the bug has to do with some business logic or something, too. And so yeah, that's an interesting skill that I think is still very valuable for engineers to have.

**Nick Nisi:** Yeah, I do feel like one area that AI helps me with on that is like "Here's a stack trace that I just got from something that failed." And I would normally have to cut pieces out of that, like my file name, my specific file name. If I Google for that, it's not gonna find anything. But I can just take the whole stack trace and pass it to an AI and say "Hey, what's wrong with this?" and it can usually, at least help me to decipher - especially with like something that's like a long TypeScript error...

**Kent C. Dodds:** Yeah, a huge stack trace... Yeah, yeah.

**Nick Nisi:** Yeah. It can be like "Oh, that just means that you didn't have a proper type here", or something. "You're missing this property."

**Kent C. Dodds:** Yeah, I have found AI to be really helpful for that as well. And it kind of goes back to -- I see this problem a lot with new learners, too. They just don't read the error message.

**Kevin Ball:** Guilty.

**Kent C. Dodds:** Yeah. Also, right?

**Kevin Ball:** And you know, the first thing I do when I sit down to help somebody who asked for help debugging is "Alright, let's go look at the error message. What does it actually say?"

**Kent C. Dodds:** Yeah, read the error message. If somebody shows you an error message that says "Cannot call dot map on undefined", they say, "What does this mean?" and you say "Well, it looks like you tried to call dot map on undefined. \[laughter\] Yeah, and look, there's a line there, and there's where that's at. Yeah, it looks like that variable is probably undefined. And this is why we use TypeScript.

**Nick Nisi:** That's where the biggest problems come in, though. For me, the most common error message that I get, that is just like "What is going on?" is like I'm trying to pass an object with these properties, and it says "Oh, this object with these properties", and it lists them all, "does not match this object with these properties." And then it just like trails off and goes "and 96 more."

**Kent C. Dodds:** Yeah. Dot dot dot. It's like, there's something very important in that dot dot dot.

**Nick Nisi:** Yeah.

**Kent C. Dodds:** Yeah. Which might say more about the the types that we have in our program. They maybe could be simplified, than anything else.

**Nick Nisi:** \[00:12:04.28\] True. So you mentioned that in your classes you're teaching and in your videos you have the AI on. What does that mean for you? Is it like Copilot? Is it something more in depth, like a Cursor?

**Kent C. Dodds:** Yeah, yeah. So I started with Copilot. I recorded all of the Epic web videos with Copilot, all 452 of them. And then I got into -- I used Supermaven for a while. That was really great. Really fast. Basically, just like Copilot at the time that I used it, just way faster. I also used -- there was another one I used for a little bit in there. I forgot what it was called. And then Codeium... I got into Codeium for a while, and I recorded all of the Epic React videos, v2 videos, with Codeium. I like that a lot, because I just like their business model better. And the team was good, and the editor was just -- well, it was just an extension.

And then Copilot got better, got some features that Codeium couldn't implement, because Copilot - you know, the special child of VS Code... But around that same time, I discovered Cursor. Well, people kept on saying "You've got to try Cursor", and I was like "Could it really be that much better?" Yes, it is that much better. It's way, way better. And this comes back to one of the most important principles of software development is the UX always wins. It doesn't matter anything else. You could be technically better in 60 million different ways, but if your UX is not better, then you will lose. Or at least it lost in my own business.

So yeah, Cursor just has a really, really great user experience. Codeium has come back around and just in the last couple weeks they launched their Windsurf editor. They've also forked VS Code, so they can have the APIs they need to build the experience they want. So that's also very interesting. But now I see these are just kind of competing against each other. We win for that. But yeah, long answer to your question - yeah, I use Cursor for all that.

**Nick Nisi:** I wonder if VS Code loses, because everybody's just forking them now... Does it become like a Blink -- I forget what it was called in Safari...

**Kent C. Dodds:** Yeah, yeah. It is -- I think that VS Code is always going to be dominant. Even these other editors are probably going to be contributing back to VS Code in some ways... And GitHub Copilot is also improving and adopting ideas from these other editors as well. So it is like inspiring each other... At least from the outside looking in that's what it looks like. What I tell people is if you're happy with your AI assistant, probably just stick with it, because if it's not as good as the others, it will get there before long. That said, because they're all VS Code-based, it takes like five minutes to move all of your plugins and everything to the next one. So it's not really that challenging.

**Kevin Ball:** So we've talked a lot about learning and AI... Putting those aside, what are you excited about right now in tech?

**Kent C. Dodds:** Oh, I think the thing I'm most excited about is what the Remix team is doing with React Router v7, and taking the majority of React apps in the wild and giving them an incremental migration to modern React. Whereas everything else that we had before was "Okay, now rewrite your app so that you can take advantage of all these nice React features." And for most apps, that's irresponsible from a business perspective. And also, now because of what they're doing with React Router v7, it's unnecessary, because you can do all of the things, if you want to. You can continue to use React Router the way you always have, but if you want to add server rendering, if you want to add file system routing, or not, or if you want to start doing RSCs and server functions - all of that stuff will be soon, when React Router v7 is released in the next week or two, that will be available to people. So they just incrementally migrate themselves to v7, and they start opting into these different features...

\[00:16:22.29\] And then because Remix is kind of morphing into React Router v7, they're going to take the Remix brand and make a new framework, that's from scratch. Now we have RSCs and server actions in React. Let's build a new framework that is RSC-first.

And based on the over a decade work that Ryan and Michael have put into React Router, and in the last few years the Remix team has put into Remix, I'm very confident that what they've put together for what Remix becomes is going to be the way I like to build software. My favorite. So that's what I'm most excited about right now.

**Nick Nisi:** I like that. So the incremental migration to React, to modern React - does that mean... You mentioned RSC. So React Router v7 will support that in some ways, so that'll be like an alternative to Next?

**Kent C. Dodds:** Yeah, yeah. I mean, it currently is, and React Router is the most widely used framework for React... And the RSC support kind of depends on the bundler, because the RSCs kind of need the bundler to work properly. So React Router doesn't require Vite, but if you want to use these features, then you'll use Vite. You'll probably make it work with Rspack and all the other cool ones now, but I think they're focused on Vite right now. So if you're good to opt into all of that, or migrate to it, which is very possible - people are migrating from WebPack to Vite all the time - so you're good to do that, then you can start opting into these different features. And it's implemented differently from how Next.js implements it, but it is the full feature set that you're looking for. And I think it's really well implemented.

And actually, a lot of the confusion that people have had around React Server Components over the year or two, I think are mostly confusion pieces because of Next.js and the way that Next.js implemented it. So I think actually it's going to become a lot easier when people see it with React Router.

**Nick Nisi:** Yeah, I agree. And I think just having two implementations, you can see the commonalities, and then what are the borders where it's Next and Remix.

**Kent C. Dodds:** Yeah. And this is why an Epic React, my React Server Component workshop - we are building a framework from scratch based on React Server Components. And that's in part because I didn't want to use Next.js, but even if Remix had support for RSCs already, I would still do it this way, because I think there's a lot of value to understand where are the lines between these abstractions. What is the RSC part, and what is the bundler, and what is the compiler, and what is the framework? And so the RSC workshop is the one workshop that doesn't use TypeScript in Epic React v2. It doesn't even use JSX. It doesn't use a compiler. It's just Node and the browser, and that's it. And how they run natively. So I think there's a lot of value in doing that, even though it's not the way you'd write your application, because it helps you get a sense for the landscape and what is responsible for what.

**Nick Nisi:** I love that. When I was learning React, I wrote my own virtual DOM, because I wanted to understand how it works, not because I would ever use it in production...

**Kent C. Dodds:** Yeah, of course you don't want to. But maybe. It could be the next one.

**Nick Nisi:** \[laughs\]

**Kent C. Dodds:** But yeah, I think it's really valuable. And when I'm teaching React, in Epic React, the first workshop, we start -- the first lesson actually doesn't even use React. We're just creating DOM nodes. And then the next lesson, we create elements and render those, but we don't use JSX yet, and then we introduce JSX.

\[00:20:08.17\] And also, when I teach Testing Library, we implement our own render function first, and then we bring in Testing Library. When I teach testing from the very beginning, we don't use a framework. We use Node, and just run a script, and we build our own mini testing framework, and then we swap it out for a real one.

Another example - when I'm teaching the use hook in React 19, we build our own version of the use hook, and then we swap it out for the real one. So anytime I can, I try to say "Okay, we're going to build a naive version of this. It's not going to cover all the edge cases, and that's fine. But now you have an understanding that it's not magic, it's just code, and it's actually simpler than you think."

**Kevin Ball:** I think that is a hugely valuable way to teach, and something that a lot of the boot camp style things fail on, because they come the other way in. I'm curious -- so you mentioned a number of things that you have done that for. Are there other technologies you see out in the ecosystem where you're like "Hey, people are treating this like it's magic. You should go and just build a naive version"?

**Kent C. Dodds:** Yeah, you know, there are especially some things that really do feel like magic... I'm thinking about like the Svelte compiler, and how that works... If I were to start learning that, I would want to build a naive version of that, or at least -- maybe I don't want to build the compiler itself, but I want to use the building blocks that they use to build the compiler to come up with something, or at least look at what the compiled code looks like, and how my changes impact that. I'm guessing they've actually got a tool for this. I would be surprised if they didn't. But that would be the way that I would want to learn Svelte. I think probably the same thing with Vue and others.

I think that there's just a lot of value in understanding how -- in fact, this is one of my programming principles. I'm working on the Epic Programming Principles, and one of them is you go down to level up. Every one of us, as we're shipping product, we do want to deliver value; we might get to a place where things are working and we don't quite understand why, and we think we understand... And we thought we understood it, and then it didn't work, and so you play around, and then it works, and then you move on to the next task... And you just have a bunch of holes you don't even know are there. And so if you're tired of doing that, and you're ready to like just take some time to really understand it, you go down the level of abstraction, you understand how the abstraction works, you build your own version or whatever, and that is what levels you up. And so yeah, whatever tool people are using, I think they should -- when they're ready to actually understand and become more efficient, they should go down to level up.

**Kevin Ball:** Yeah, I like that. And diving into compilers is a really interesting one, for a number of reasons. They're becoming much more a part of the frontend ecosystem. You have Svelte, but you also have things like Qwik React Compiler, all these different pieces... But yeah, some of those fundamental abstractions around transforming code with code will carry you all over.

**Kent C. Dodds:** Yeah, I know -- astexplorer.net is just an amazing resource... Becaue especially when ES6 came out, and there were a lot of new syntax features and things, and as we get new syntax over time, it's really nice to be able to take some code that you don't recognize, paste it in there, and now you have a name for what that thing is. "Oh, that's an identifier", or "Oh, that's a member expression", or whatever. And "Now an import specifier. Now I can google that." Of course, now we have ChatGPT, and you just ask it "What is this?" And if it was trained recently, then maybe it knows... \[laughter\] But yeah, I think there's a lot of value in seeing the data behind the code.

**Nick Nisi:** \[00:24:01.26\] Have you written any code mods?

**Kent C. Dodds:** I did, yeah. So JSCodeShift, or -- yeah, JSCodeShift? That's what it's called.

**Nick Nisi:** Yeah.

**Kent C. Dodds:** I never connected with that one.

**Nick Nisi:** Same.

**Kent C. Dodds:** It was a very complicated tool. It was supposed to be like jQuery for code... I tried it three times, never got it, and so I helped to kickstart the Babel code mod project. And that allowed you to write a code mod as a Babel plug-in. And I much prefer the visitor pattern that the Babel plugins work with... So I actually do have a course on Frontend Masters that I released for -- It was the AST workshop. So ESLint plug-in, writing a custom ESLint plug-in, writing a custom Babel plug-in, and a code mod as a part of that.

**Nick Nisi:** Nice.

**Kent C. Dodds:** Yeah, it was fun. Code mods were really helpful when I deprecated my css-in-js library called Glamorous in favor of Emotion. Tejas Kumar wrote a code mod to help people migrate... And yeah, they're really, really nice.

**Kevin Ball:** Well, and I feel like there's a rising trend of doing that, or doing the types of things you're talking about with React Router 7, of like "Okay, let's acknowledge that most of us are working in legacy applications. And if we want to get people to the cutting edge, we need to provide migration paths, whether that's code mods, or flags, or what have you."

**Kent C. Dodds:** Yeah. Yup, 100%. And the React Router team, Remix team has done a really good job of that in particular - feature flags and code mods to help the... I mean, they're only on version 2 in Remix, and going from version 2 of Remix to version 7 of React Router will just be another code mod. And they've got a bunch of feature flags for even bug fixes that change semantics, and behavior, and stuff. You turn on that feature flag, and now it probably doesn't affect you, but maybe it does, and so you have a quick and easy way to turn it off... And it drastically complicates things for their team, because now they have different code paths they have to follow, and lots of duplicate code, and things... But that effort is worth it for the number of people who depend on their code.

So this is another thing I just really appreciate about the React team, is how much thought they've put into making sure that the millions, hundreds of millions of lines of code that are out there for React - honestly, it's probably billions of lines of code, really... How much of that exists, and how much they care to allow it to continue to exist.

**Kevin Ball:** So we're on the topic of React, we are here at React Summit... What keeps you coming out to conferences like this?

**Kent C. Dodds:** Oh, dude, there are so many reasons... I miss my family terribly, so I'm actually -- the more I travel, the less I enjoy it, just because I want to be with my family... But it is so great to be in-person with people. It's just -- at a time when, if you're looking for a job, you submit your resume to the company, and you're competing against hundreds and thousands of people who are submitting AI-generated resumes, to... Like, you have no hope at all. And then on the other end of that, you're a hiring person, and you're seeing thousands of resumes, some of them are real, and some of them aren't, generated by AI, and it's basically impossible to tell the difference. Sometimes it's pretty obvious, but... It's very difficult.

I've just talked to a sponsor who actually had one person who submitted the application twice, with two different resumes, different names and everything. And they got accepted, both of them... And so they come to the first one, and they knew, in the first couple minutes, "This guy's just typing in ChatGPT and waiting for the response to answer all my questions." And so he shut it down. And then a couple days later, he has the next person on, and it's just -- "You're the same person. I already shut you down."

\[00:28:04.00\] So how do we solve this problem? This is how we solve this problem. You see the person in-person, and you develop a relationship of some kind, and that is how we avoid these problems. Every job I've had was not a resume I submitted, since I became a professional. And I think that the challenges -- and on top of that, the people who are hiring are using AI tools to filter the resumes as well. And so it's just AIs talking to AIs.

If you want any hope at getting a job that you like, and that you're just not sending hundreds of resumes to all these different places, you just have to go and make a human connection. And there's a really -- there are good ways to do that. You can just walk into the office. 100 percent, just go walk into the office, and "I'm a person, I'm here, I want to talk to somebody about a possible employment." They might tell you "Just send me an email." But look at that. When you send the email --

**Kevin Ball:** They remember you.

**Kent C. Dodds:** ...put a picture of yourself. "I came in." And they'll remember you. Human connection. That matters. So you could do that. There's also meetups, and there's conferences. And in my business -- I'm not looking for a job. I'm happy as an educator, and I don't think that I'll ever be employed by somebody else again. That could change, but I don't expect that to. But even for me, I think that there's a lot to be said for the human connection as an educator, and people saying that I'm not just a talking head, but I'm actually a human who knows my students, cares about their education and the knowledge that they're acquiring... That human connection is huge. And that's why I run my own conference, I also have a camp event that I run... Because I just think it's that critical to get people together, and really cool things can happen when you get smart professionals together.

**Nick Nisi:** Yeah. That says it, right? Most of the jobs that you're going to get are going to be from connections, from your network. Or the best jobs that you're going to get could be from that. And I still have connections from the first conferences that I went to, and I just talk to them all the time online... I see them at other conferences as we go, and rejuvenate those connections.

**Kent C. Dodds:** Yeah, and the cool thing about that too is you might have known those people online before, but meeting them in-person deepens that relationship much further than it ever could have been.

**Kevin Ball:** A hundred percent. Yes.

**Kent C. Dodds:** Yeah. So now when you're reading their posts, you're reading it in their voice... You have such a better sense. And even people that you don't like that much, you don't jive with them very well, whatever - once you've met them in-person, you might still not like them very much, and that's fine, but even that relationship is better.

**Nick Nisi:** Yeah.

**Kent C. Dodds:** So yeah, you can understand them better, they understand you better... It humanizes the whole experience. So I wish that I could help everybody understand how valuable being in-person is... And I understand not everybody can travel across the world to go to -- but you don't have to travel across the world. You can start a meetup in your local area. It's a lot of work. It is. But everything that is worth anything is a lot of work. So I just value that human connection so much. Now, I still want to work from home. I don't want to go into an office or anything like that. But just having those regular connections once a quarter or so - it really, really is valuable.

**Nick Nisi:** Any tips on making those connections when you're at the conference?

**Kent C. Dodds:** Yeah. Get off your phone... Unless you're taking a selfie with somebody or something and then posting it. But yeah, I sometimes will see sponsors where the employee is sitting on their phone at the booth, just waiting for somebody to come to them... And that doesn't make any sense to me at all. Because you're literally paying a bunch of money to be here. Maybe their boss doesn't know what they're doing, probably... And then they go to their boss and say "Oh yeah, that was worthless, because nobody came and talked to me." What the heck? What is your job here?

\[00:32:04.02\] So yeah, go and talk to people. Don't be afraid. Most of the speakers that you're interested in talking with are excited to talk with you. So don't be afraid to go up and talk to speakers. And if they are bothered by you coming to talk to them, then - well, that happens sometimes, I guess... They're mean. Don't talk to them again. \[laughter\] Just talk to somebody else.

But yeah, I think you just have to break out of your shell a little bit... And if the conference does its job, then they're going to have extended breaks, and a long lunch, and activities and things that kind of break the ice for you... But it doesn't always work that way. A meetup is just -- people just show up. So you've got to put the work in to make those human connections, and it can be harder for some people. I'm more extroverted, so it's a little easier for me... I do get tired and everything, but it doesn't come super-easily for people... But yeah, life is hard, and you can do it.

**Nick Nisi:** And conferences really are an easy way to do that. It's an easy track. This morning on the way here, we were in the shuttle, coming to React Summit, and I just -- it was a silent shuttle, and I just said, "Hey, y'all like React?" \[laughter\]

**Kent C. Dodds:** Oh, I love it when I get into an elevator and everybody's quiet, and I say "Um, I bet y'all wonder why I brought you here..." \[laughter\] But it gets a chuckle out of them.

**Kevin Ball:** We all feel awkward in that moment, right? And then somebody's Nick Nisi, and breaks it with an awkward question, and now the ice is broken, and we're all talking.

**Kent C. Dodds:** And now we can talk. Yeah.

**Kevin Ball:** So you too can be Nick Nisi. \[laughter\] Well, we're getting close to the end of our time here. Is there anything you would like to leave folks with to make sure that they know coming away from this?

**Kent C. Dodds:** Here's the interesting thing.. Being a good, kind person is the selfish thing to do. But it's also the selfless thing to do. It's both. If you want to have happiness and satisfaction and joy in life, then you're going to be a nice person. That's the best way to do that. You're going to develop good, positive relationships, inside the ecosystem and outside, and you're going to take care of those really important relationships in your life. I'm married and have five children. The top relationship that I have in my life is with them. And then my relationships with the different partners that I have matters a lot. And I've found that my relationships with all of those people make my success more full. And I feel like if I were successful without those relationships, it would be empty.

And so be a kind person. It's the selfish thing to do. If you only care about yourself, you will care about others. Because otherwise, if you really just care about yourself, and you don't think about other people, then you're not going to be as happy, or even fulfill your potential.

The biggest and most amazing things are accomplished by people working together. There's not a single building here in New York City that was built by one person. And so being able to work with other people is really important. Be a kind person. Be the kind of person that people like working with, and you'll be able to accomplish much more than you could on your own.

**Nick Nisi:** It's very well said.

**Kevin Ball:** Cut there. Let's stop with that. That's great.

**Kent C. Dodds:** Thank you.

**Break**: \[00:35:34.06\]

**Nick Nisi:** Ahoy-hoy! I'm Nick Nisi, and I'm joined by Kball here at React Summit. Kball...

**Kevin Ball:** Hey, hey. I'm Kball.

**Nick Nisi:** And we have the privilege of interviewing Theo Browne. Theo, how's it going?

**Theo Browne:** Pretty good. Awesome to be here. It's been a crazy event so far.

**Nick Nisi:** Yeah, it's been great. Why don't you tell us a little bit about yourself?

**Theo Browne:** What do I start with?

**Kevin Ball:** Assume nobody knows who you are. They've never seen any of your videos, or anything.

**Theo Browne:** But then I have to also assume things about them, because there's so many different... Like, I do a lot, is what I'm trying to say. I'm a software dev that's worked in the industry for a bit over a decade now, I used to be a backend guy, now I'm mostly known as the frontend guy, which is funny, because that's not where my history is at all... I make YouTube videos about software dev stuff, mostly focused on senior, full-stacky topics, that went way bigger than I expected... I've only been doing it for two years, and I'm top three software dev YouTubers now by viewership. It's nonsense. I just like nerding out with my friends, and all of a sudden it's a brand. I also run a company, ping.gg. We started by building tools for creators, now we're also building tools for developers, like UploadThing, which is without question the best way to do file uploads in your Next.js apps.

**Kevin Ball:** Among the many things that you do, looking into you, I was like "Wow, what is Theo known for? What can we dig into?" and I saw T3 stack as a thing. I see --

**Theo Browne:** Never heard of it.

**Kevin Ball:** ...your branding... What are the origins of that? Is it still something that you're paying attention to, investing in, and all that?

**Theo Browne:** Of course. It's an interesting history. When I was getting really into application development when I was in college, that was the peak of the MEAN stack, MERN stack era, and it was nice to have this set of technologies that admittedly don't perfectly plug together, but there are resources in an ecosystem around how to do that plugging, and it gives you a confident starting point to build a real, full application. Before then, you needed an all-in-one framework like Rails, or you would just make everything fully separate, or just deal with whatever was going on in the .NET world at the time. And MEAN stack and MERN stack taught me this idea that you can have a composable stack. And then I went and got a job at Twitch, working in their stack for about five years, and then I left, joined a startup, built my own stack, left, made my own startup... I kept adjusting the stack, adding and removing things, with the goal of making it simple and composable... And I ended up settling on this set of technologies. Next.js was obviously the core of it, but at the time, Next was really heavy on the Pages Router. They had no other router yet. And there were so many things that I would say are wrong about Pages Router.

\[00:40:02.12\] I was actually just arguing with the guy who made it, earlier today... It wasn't just bad in the like "Oh, it's unorganized." It's fundamentally missing almost everything you need to do data correctly in a React application... And I just got so frustrated with it that I was looking for solutions to fix those parts, and eventually settled on one named tRPC, which is the TypeScript RPC, that lets you write backend code that is just a TypeScript function, and then call that code on the frontend, just with a TypeScript function, and it infers the types from back to front... And it was a really good experience. It was obnoxious to set up properly, but actually using it was great. So I brought that in.

I was really hesitant about Tailwind initially, but ended up liking it. I brought that in. Prisma was a solid ORM, so I brought that in. We needed Auth, so I added Next Auth, and I realized "Oh, I've piecemealed my own modular stack here." Any one part could be swapped for another solution, or if you don't need any one part, you can just not include it at all. But this is a lot of different technologies that combine together well.

I proposed this to a friend in the Twitter space, that thought it sounded cool, but just didn't see how good it could be. He had an open source project that was a giant Firebase mess, and I rewrote the whole thing in two hours using my stack. It was one-fifth the code, it was a faster app... And he realized, "Oh, this is so cool. Why is nobody else doing this?" More people wanted to hear about it and see it, so I went live on Twitch for the first time in a while, and just streamed myself building with this stack. I posted it on YouTube, because I wanted to \[unintelligible 00:41:33.04\] I was building tools for creators... They did pretty well.

Then Dan Abramov was offering to do mock job interviews. I'm a big nut about interview culture, and how to do hiring well, so I offered to have him on to do that. He did it, and of the four or five mock job interviews he did, a lot of them were really good, but to be a little arrogant for a second, mine was the best, because all the others weren't people who have done hiring for years, and I've done like 500-plus interviews... So I think I did a really good job highlighting his talents and showing what an interview of someone like him looked like. That video went viral almost immediately... But then it brought up the T3 stack demo, which slowly became one of the most popular videos in dev, which is still weird to me, because it was me just \*bleep\* around on stream, showing people this tech that I liked... And it got retconned into a tutorial of this stack that people were really hyped on. I was pumped that it went as well as it did.

The missing piece is that I never built the starting point... Because the point is that it's modular. You start with the next step, and you add and remove the parts that you need. Everyone's asking me for a template, and I was like "No. If I give you a template, you're going to make your blog with Prisma and Next Auth. You don't need these things for these problems."

**Kevin Ball:** Isn't that what being a developer is, over-applying the tools...?

**Theo Browne:** If there's anything that I want my impact to have on this industry, it is a reset going as far back as possible to simple as best. Simple scales incredibly well.

**Kevin Ball:** Preach...

**Theo Browne:** And I pushed this so hard. And that was like the goal of the stack. And if I made a template, I would be running against that specific goal. I did say that if somebody wanted to make a CLI where you pick the tech that you do and don't need, I would support it, but I'm not going to make that. And a 16-year-old kid from India named Nexel did, and it was awesome. He started Create T3 App. I tried it when I was working on a project when I was at a conference... I was like "Wait, this solves almost all of the problems that people were asking about with this, and I'm going to start my apps using this now." A couple other contributors started getting more and more involved, and now it's the third or fourth most popular way to start a React app, which is nuts. I still can't believe it got as big as it did. It outpaces Remix somewhat regularly still.

**Kevin Ball:** And T3, just to make sure I'm clear, stands for tRPC, TypeScript, which - we'll go into TypeScript because Nick is a TypeScript... How would you describe it? Aficionado. And then Tailwind - was that the last?

**Theo Browne:** \[00:44:01.21\] No, it's the three letters after the T in my name. It always has been. It's been retconned to be Tailwind TypeScript tRPC, but it never was. It was called T3 Stack before I was even using Tailwind.

**Kevin Ball:** Oh, it's just the Theo stack.

**Theo Browne:** I've owned the T3.gg domain for 10 years, and I've used that as my main domain. It was the Theo Stack. That was the point. And people now treat it like it is this specific set of technology.

**Kevin Ball:** That's delightful.

**Theo Browne:** But if I had named it after the tech, then Prisma would have been the name. I don't even use Prisma; not that it's bad, but Drizzle fits my needs and expectations slightly better than Prisma does... And tRPC - I still end up using it now \[unintelligible 00:44:32.24\] I'm not going to pretend otherwise. But with Server Components and App Router, I find my need for tRPC to be less, and I'm not using it for all of my data fetching, I'm using it for client-heavy data interaction stuff now. The goal of the stack was to be modular in that way, where you can swap different parts out. Also, I don't use Next Auth much anymore. I lean towards Clerk, because I don't want to deal with the deployment and maintenance of an auth service. I just want to have my auth work.

So it's been interesting that the T3 Stack, by design, by being modular, has let me drift from the original T3 stack as far as I have, while still having it be that way. But on the other hand, since it's been retconned to mean these specific technologies, I'm scared to do an update to the T3 Stack, where "No, now it's this." \[laughter\] Because people use it to describe a specific thing, that is out of my control. I'm at the point where I'm in the process of doing a rebrand where I move off of T3 as my branding and let it just be the T3 Stack, and I'm just Theo. I spent a lot of money on that Twitter handle.

**Kevin Ball:** I was going to say, is T3 a persona for you? If you think of "Oh, T3", that's a different person than Theo?

**Theo Browne:** No, I don't do that persona thing. To a fault, I am me. Online, offline, in videos, in person... I regularly get the feedback "Wow, you are just that." I'm not putting on a character. It's just how I am. I'm a loud \[unintelligible 00:45:58.19\]

**Kevin Ball:** And you own it.

**Theo Browne:** I don't pretend otherwise. Yeah, T3 Stack has been a weird journey, and there's definitely people who are confused right now... And I get it. I'm confused too about what it is now and how I should brand it... But for now, it's the best way to start a Next.js application with the option to include a few other technologies that I think make a lot of sense. I'll often use Create T3 app, turn off all of the things it adds, or just use the app router version, because it has better ESLint rules, and a better environment variable management solution than what you would get from the Next template. And I just like that a lot.

The first question I ask is "TypeScript or JavaScript?" And if you pick JavaScript, you get an error, wrong answer, and it picks TypeScript instead. \[laughter\]

**Nick Nisi:** Nice.

**Theo Browne:** We've left that in now for two years, and every couple of weeks we'll get an issue like "Hey, support JavaScript." I'm like "Hey. No."

**Nick Nisi:** That's the right answer, for sure. So you mentioned the Pages Router, and... Do you think that the App Router solves a lot of the problems that you were having with the Pages Router?

**Theo Browne:** Not only does it solve the problems I was having with Pages Router, it solves problems I didn't know could be solved with a router. I was really skeptical going in, notoriously... So I pushed "Don't bother with App Router" for a while. "Just stick with Pages Router. It's fine." I'm at the point now where even if you're building things the traditional SSR, Pages router way, you should move to App Router and just mount everything as a client component, because the DX and the new functionality that's introduced is just so good that it's hard to justify missing out.

**Nick Nisi:** Can you give an example?

**Theo Browne:** Layouts. Layouts in Pages Router weren't just bad. They were tragic. I just did a video... I built the same app in five stacks. I went through all the stacks I've used in my career and built the same app five times, with all of them. And the last two were \[unintelligible 00:47:59.00\] with Pages Router, and then modern Next.js with Server Components. And I had forgotten until that moment just how bad layouts were.

\[00:48:01.17\] So for context, if you're on a web page and you have your top nav and your side bar, and you click something on the side bar and it opens up a dashboard inside that has a top nav, and then you click something inside and it navigates further, the idea of a nested layout that has the core content in the middle is a concept that does not exist in Next.js Pages Router. There is no concept of a layout at all. You can't have a wrapper component that every subpage gets mounted in. The closest thing they have is a pattern they recommend where you bind a get layout function to the page function. So if you have your home page component, underneath you do \[unintelligible 00:48:34.17\] a function that isn't a component. It can't be a component. It has to be a getter that takes in not a prop, but a child, that it then returns as JSX with that child. And then it doesn't just work, by the way. You have to go to the app TSX file and add a check grabbing this weird prop you just defined on the function that you're trying to render itself, to rip out that layout function, wrap the thing, and then return it. And this only works at a depth of one. As soon as you have two layouts, this entire pattern just stops working. It's five times more work to get one layer of depth. Or with App Router, it's no work, and infinite depth. It's just obvious, which makes more sense. And every single site I've ever worked in benefits from having a shared layout structure of some form. I can't remember the last time I worked in a codebase that didn't need layouts in some way.

**Nick Nisi:** That makes sense. I skipped over Pages completely. I just jumped right into App Router.

**Theo Browne:** I think a big part of why T3 stack exists is because of how bad Pages Router was.

**Nick Nisi:** So digging down the stack a little bit more, I'm curious your journey into TypeScript. Were you just immediately sold on it? Did it take some work to get there?

**Theo Browne:** I've been an anti-JavaScript person for almost my entire career. When I joined Twitch, I was a Ruby and Python guy, and I joined an Elixir team and got really functional programming pills really early. I fell in love with FP. Then Twitch moved off of the... I don't even know how to describe the Ember codebase. It's not even that Ember was bad, it's that we used it at the wrong time, in the wrong way, and the result was a disaster, with this Ember codebase on top of a Rails codebase. We decided -- we didn't even decide. We purchased a company named \[unintelligible 00:50:22.15\] that was all in on React and TypeScript. They were told they had to get the Twitch site working in their Electron app. They said it would be faster to rewrite the site. And before Twitch could say no, they had finished a third of the rewrite in React and TypeScript, which is to this day the codebase that is hosting all of Twitch. I was so excited seeing that movement happen, seeing this team that was so motivated by the DX that they knew we could have, but didn't, that before anyone could say no, they'd already built half of it. And that got me interested.

Then I got team transferred to a Go team, and I hated working in Go. It's not a bad language, it's a badly designed language. And it allows you to do really powerful things. And the fact that you can write code that is so simple and readable and performant is cool, but it makes me feel like a monkey, not an engineer. And I was miserable. So my manager, who was a frontend guy, said "Theo, you're clearly miserable. You're not getting anything done. I know you're not a frontend person, but this React TypeScript thing is pretty cool. By the way, I heard a rumor they're going to go in the functional programming direction soon. You might want to get in now."

So I started learning React, I got decent at it, I was starting to \[unintelligible 00:51:38.18\] I was about three weeks in when the Hooks announcement happened, and then I was all-in. I got to be the person who brought functional programming to the 500-plus person codebase at Twitch for the whole site, and that was a magical moment. A huge part of my career trajectory skyrocketed, because I got to go from just a junior engineer, barely understanding things, to making real impact. And TypeScript was just the obvious way to do it.

\[00:52:04.19\] I guess for me JavaScript was this necessary evil for the web, and then I avoided the web for like five years, and then when I came back - this was late 2017, early 2018 - the thought of not using TypeScript just didn't cross any of our minds. Like, you used TypeScript, and this is a codebase that needs to keep working. You don't have another choice.

And my only previous experience with TypeScript was I was working on a Chrome extension that my roommate was helping out with. He was a big TypeScript guy in 2017, and it broke all of my experience trying to work on this extension, because I had never used Npm really before even, so it was miserable for me at that point. I avoided it for a year, and then when I came back in, things were in a good enough state.

I think the key for me was having a codebase that had it already all working and set up, and then once you started working in that codebase, if I didn't have TypeScript, I would be miserable now.

**Nick Nisi:** Yeah. I think I was working on a Chrome extension around that time too, and doing it in TypeScript was not fun.

**Theo Browne:** Still isn't. It still isn't. I've tried recently. It sucks.

**Nick Nisi:** Yeah. So you went from a Ruby/Python person to TypeScript. Did you feel a change in velocity with that?

**Theo Browne:** The change in velocity happened Ruby/Python to Elixir for me. Like, Elixir, I went from roughly getting what was going on sometimes, to overhauling infrastructure in hours, and building things we didn't think were possible, quickly. And that was -- the power of immutability and composition is unreal once it clicks. And the productivity I have in TypeScript - I don't think of it as like "I'm productive in TypeScript" so much as "I'm productive in the technologies that happen to be using TypeScript, or work well with it." TypeScript's just -- I don't know how to put it. I'm not the TypeScript enthusiast that a Matt Pocock is, or a \[unintelligible 00:53:58.03\] is. I'm going to do a TypeScript course in the near future, I've started working with Boot.dev on it... And that course isn't going to be "Here are all of the crazy types you can write." The goal of the course is to -- if I do it right, the first two to three lessons will have no type definitions at all other than maybe a function argument.

It's also what I like about tRPC. If you look at a tRPC router, the file is a vanilla JS file. There is no type definitions, because the types for the input come from Zod, because you're writing a Zod validator to take the input and make sure it is valid and follows your expectations. The type's inferred from that. And then when you return something in that procedure, whatever you return also can have a type inferred from it. I write less TypeScript than I've ever written when I'm working in things like the T3 stack, because the only types I have to write are the props for functions in React.

**Nick Nisi:** Yeah, that makes sense. And that's how I approach it as well. This question kind of came up because just before this argument we were actually downstairs at React Summit, talking to an attendee who had a question about whether -- they're just like all-in on removing TypeScript completely, and going full JavaScript.

**Theo Browne:** No, they're wrong. It's fine.

**Nick Nisi:** I kind of agree... But their pushback was "I just have so much velocity." And I think it came down to just writing TypeScript wrong. You don't have to write -- you can infer or let TypeScript infer a lot, so that you're really only writing the things like those prop definitions, or argument function definitions.

**Theo Browne:** Yeah. That's the mistake I see the most with TypeScript, for sure, is typing everything. If the average function in your code -- if more than one 15th of your functions in your codebase have a return type, you're using TypeScript wrong. Actually, one of my favorite videos I did is the case against return types, because I \[unintelligible 00:55:43.05\] my friend Primeagen, he's coming from the Rust world, where you put return types on everything. I'm like "No, don't. That's not how JavaScript works." And my argument wasn't like "Oh, this pattern is better." It's "Here are three examples of where adding a return type entirely breaks your expectations with TypeScript." You can just lie to TypeScript by adding a return type and it will infer terrible things as a result. You shouldn't use them unless you really know what you're doing.

\[00:56:09.03\] And I think I've done a good enough job demonstrating it. My favorite part of the video is the end. I reached out to all my TypeScript higher up friends, and had all of them record a quick short \[unintelligible 00:56:15.23\] like "Hi, I'm Josh Goldberg, and I don't think you should use return types." \[laughter\] And it just went through the \[unintelligible 00:56:24.02\] 15 people, because I think it's important that people don't -- if you have a hundred line of code JavaScript file, and adding types adds more than five lines to it, you're using TypeScript wrong.

**Kevin Ball:** I think this guy - he was saying TypeScript and he was imagining Java code, essentially.

**Nick Nisi:** God...

**Theo Browne:** I'm happy I don't have the imagination to think of Java anymore.

**Nick Nisi:** Same.

**Theo Browne:** Component, factory, factory, worker, actor, model, top nav model.

**Kevin Ball:** Precisely. I want to dig onto a slightly different topic. So you mentioned when you got into -- you started moving into React, and you had to refactor all these different pieces when Hooks came out, and that changed your career to a different trajectory. And you're someone who -- you've mentioned career a couple of different times, you are someone who's published on Twitch, who has published on YouTube, and those sorts of things... What do you think people right now need to think about if they're trying to take their careers to the next level? Should they be publishing? Should they be focusing on what project they can tackle?

**Theo Browne:** "Stay away from YouTube and content" is the distraction. It's there if you're -- if you have things you want to say to the point where you're struggling to sleep at night... That's why my YouTube channel exists, because I had these fun, nerdy deep-dives at lunch and dinner at Twitch that I lost when COVID happened. And then I joined a startup and no one wanted to nerd out. I made my own startup, joined Y Combinator, and nobody wanted to nerd out... My YouTube channel came out of my inability to sleep, and my poor roommate who had been driving up a wall... Because he had only really learned to code about a year ago, and I was like deep-diving on like the crazy new compiler stuff that Svelte is doing, and he just didn't care. My YouTube channel came out of the need to rant about these things. And that's the reason to do it.

Like, content isn't a lever that's going to help your career. The lever that will help your career is a thing you're excited about. And if that thing is making a video game, if that thing is building an app to like keep track of the state of your plants in your garden, if that thing is a library that just clicked in your head that you love, and you want to show people why it's so cool - whatever is energizing you, that is what your focus should be. Because career growth doesn't stop because you picked the wrong tech. Career growth stops because you lose the energy to push through those hard parts. You grow via suffering, and you grow via feeling really dumb.

I learned this from skateboarding... You don't get better at skateboarding by going to a lecture and having somebody tell you the history of the skateboard, and how the wood was crafted, and the dynamics of the physics of how it flips. You learn to skateboard by hitting the ground over and over again. You learn to code by hitting the ground over and over again. And I'm tired of pretending that if you make the right YouTube video, or you go to the right class, or you pick the right framework that you're going to level up faster. It's just the energy and the excitement. That's all it is. And the reason my career started growing is because I fell in love with this thing called functional programming, I had to be moved away from it for a bit, and then when I got to like reembrace it with Hooks, my excitement combined with the experience I've had over the last few years resulted in me getting to make significant changes at Twitch.

**Nick Nisi:** I'm curious... I don't want to change subjects too much, but just based on what you said, the skateboarding analogy... I like that a lot. Do you think that the rise of AI is making it harder for people to hit the ground on their skateboards?

**Theo Browne:** \[00:59:52.01\] I've been thinking about this a lot today. The reality is I don't spend a lot of time interacting with junior engineers right now, because my content is very much \[unintelligible 01:00:00.23\] PSA - if you've been coding for less than five years, don't watch my videos too much. They're just going to distract you. If you've been coding for less than two years, actually stop watching my videos. They're going to hurt. I know my content, I know what it's there for, and it isn't there to tell people what they should be learning right now. It's there because I'm excited about things and I want to talk about them. It doesn't mean I'm shipping them. I try to be clear when I am and I'm not shipping things, but for me the point of this is to explore and talk about these things that are fun and exciting. It's easy to fall in the trap of thinking you have to keep up with and learn all of these things. And my concern with AI is that you can go way further without actually learning the thing.

If you use AI to make the process of learning easier - like, when I try to deploy on CloudFlare, because CloudFlare's docs are a master class in gaslighting your users... \[laughter\] It's genuinely incredible how many lies and misconceptions they can fit into a page, that I end up in a group chat with three CloudFlare engineers, all telling me different things. All of them are wrong. It's unbelievable. But for whatever reason, Claude has a 60% success rate with this, where CloudFlare engineers have a 20%. So it's hard for me to use something like CloudFlare without something like AI smoothing out those rough edges. But I think the where it is in your process, and the -- the biggest signal for me is if you run some code and you get an error, are you fixing the code or are you telling the AI to fix the code? If you're a beginner and you're telling the AI to fix the error, you're screwed. If you're a beginner and you copy the error you got, and you paste it into a new prompt and you're like "Hey, I just got this error. Can you explain it to me and what it might mean?" And then you learn what that error means and you go back and you change the code yourself, now you're using the AI to accelerate your learning, not to replace the act of learning. And that's a subtle difference of seeing different people go one or the other way in. Are you copying the error message or are you copying the source code and throwing that into Claude? Which one you pick tends to have a very apparent effect on the way that you're learning.

**Kevin Ball:** And I think that's a great principle for using AI in general. Are you using it to accelerate what you're trying to do or are you using it to try to replace the act of thinking?

**Theo Browne:** Yes.

**Kevin Ball:** If you're replacing your thinking, you're doing it wrong. Yeah. The thing \[unintelligible 01:02:18.14\] realistically speaking, I run two companies, I'm an investor, I'm an advisor, I spend my time doing a lot of different things... I don't get to code -- in terms of the raw time I'm spending writing code, it's significantly lower than it's been in years, and I miss it and I hate it. But what's cool is I can spend all my idle cycles thinking through how I would architect this thing. And then when I do sit down, the combination of my pre-compute that I've done in my head, plus the AI, lets me gun out some super-complex thing absurdly quickly, not because the AI is doing the complex part. The complex part happened here over the last few weeks...

**Kevin Ball:** A hundred percent.

**Theo Browne:** ...now I'm combining that with the AI to accelerate my own development.

**Kevin Ball:** A hundred percent, yeah.

**Nick Nisi:** So what does that look like for you? Is that just -- you've got it all and you're completing with Copilot? Are you typing into ChatGPT?

**Theo Browne:** I'm all in on Cursor now. I churned twice before really sticking with it... And I've been really, really happy.

**Kevin Ball:** I'm telling you, Cursor is the way.

**Nick Nisi:** You too... I'm the odd one out.

**Theo Browne:** Bias disclosure - I'm an investor. I threw them some money, because I really liked what they were doing... I also invested in Supermaven, the super-fast VS Code model. \[unintelligible 01:03:28.00\] a code model that trains on your diffs, instead of training just on your codebase, so it knows recency really, really well. And it's so fast that it's like literally every character press - and I type at 120, 130 words per minute - every character would make a new suggestion. It was nuts. And they were pretty good suggestions.

\[01:03:45.24\] So I love Supermaven, and I invested a decent bit of my own money there. Supermaven just got acquired by Cursor to improve the speed of their model for the autocomplete. But honestly, what I'm at the point at now is it's -- I don't want the autocomplete while I'm typing, I want it when I've decided what I'm doing next. And I'll write the name of the function, or - what I do now, because it's Cursor - Command+K, say what I want, and it does a pretty good job.

My favorite thing though - and I do this all the time now - is like when I'm working on a project that has a lot of pieces, and I build feature 3 and realize "Oh, this is how I should have built features 1 and 2." Previously, I'd go back and make those changes. Now I just open up the Cursor thing and say "Hey, these three files. I like this one. I don't like those. Make the other two like this", and it does it so well.

**Kevin Ball:** Yes. Brilliant.

**Theo Browne:** So good.

**Kevin Ball:** Same thing, of like "Build this like this one." And it just does it. Or conceptual transformations. "Refactor this file to approach this way."

**Theo Browne:** Yup. With the \[unintelligible 01:04:44.21\] video I just did, as I did each stack, I improved the styles of the site each time. By the time I got to the end and I had styles I really liked for the final version, I was like "Oh, the rest should match this style." So I just copied the JSX from the main page component on the main thing, and just copied that, went to the Rails app, selected it, dropped in the code I wrote in the TypeScript one, and said "Hey, make this style like this." And it just does it.

**Kevin Ball:** Yeah. I did one recently where I was like "We have this old legacy Prisma JS app, and we have this new Rails app.

Here's the Prisma code. Make it work in Rails."

**Theo Browne:** Yup.

**Kevin Ball:** Bonkers.

**Theo Browne:** It's so cool.

**Nick Nisi:** I'm clearly just not approaching AI in the same way as you guys...

**Theo Browne:** I was so skeptical initially... And once you have it in your editor in that way, and you train yourself to -- before this, I would avoid doing the tedious tasks. I have a team, I have other engineers, I have open source contributors... I can scaffold out, make this work, leave it ugly, but functioning... What I used to do is I would rewrite the same project three times until I settled on the version I liked. Now the first one, as I'm incrementally working on it, and -- I've always had this when I work in a new feature, a new project, codebase, whatever, where as you're working in it, your own intuition on how to do it right improves. The reason the Rust rewrite is faster isn't just because Rust is faster, it's because you're realizing the things you could have done the first time. And if you talk to somebody like Ryan Carniato, the creator of SolidJS, one of the things he says a lot is "Stop treating rewrites like they say anything about the tech you used, because the second time you write the system, you're going to write it better." With AI, I can adjust the system as I find these things much faster.

**Kevin Ball:** Yes. Well, and there's a key there that I think is important, and we've been talking about this, which is those adjustments - you are refining your mental model of what the thing is. And the gap I see between people who fail trying to apply AI to code, and those who seem to use it to thrive, is those who delegate their mental model to the AI, versus those who use the AI to do the tedium, as they evolve the mental model.

**Theo Browne:** Yes. I've never asked an AI how to do something. I've asked it to do this thing. And that's a huge difference.

**Kevin Ball:** Different topic... We're here at React Summit, not AI Summit, so we should be coming back a little bit...

**Theo Browne:** \[unintelligible 01:07:01.29\] It only came up once during the panel...

**Kevin Ball:** It's everywhere, right?

**Nick Nisi:** It's on everyone's mind.

**Kevin Ball:** And then I translate AI, AI, AI, to AY, AY, AY... But what brings you out to conferences? Why be here?

**Theo Browne:** Before COVID, I did one tech conference my whole life. It was a random Elixir meetup. It was either the Yelp or the Pinterest office in SF. I can't remember which. It was a small little 20-person gathering with some nerds about functional programming. And then I just didn't do conferences. I didn't have a reason to. I fell in love with Rich Harris's talks. That was a huge moment for me. Rethinking Reactivity and "Computer, build me an app", I tried to watch them at least once a year, because they were so fundamental for me and how I think about this stuff. And I owe him so much for showing me how powerful it is to communicate a story, plus a way of thinking, intertwined into something technical. I fell in love with that way of expressing things. And I started doing that myself with my 60 followers on Twitter.

\[01:08:09.10\] I got real lucky that Ryan Carniato, the creator of Solid, did an awesome blog post about -- I can't remember what it was. I ended up offering to do a quick copy pass. I'm like "I'm a nerd about formatting language." He said, "Sure." I did it, and he's like "Wow, this is so much better. Thank you so much." I did the same thing for Fred Schott, the creator of Astro. And then I joined a Tanner Linsley Twitter space about whatever. He would do spaces when he was driving home from work every day, during like peak COVID 2020, 2021. And I had written a proposal called "Use backend query." It was a compiler hook that you would use in Next.js, that would let you write backend code in a hook. And then the compiler would yank that out, throw it in an API endpoint, and put a use query call in there. Tanner was like "Oh, that sounds really cool. I heard two things working on similar stuff. Blitz.js and tRPC, I think. I don't know anything about them, but are you down to go look into them and come back and share what you've found?" I was so hyped. Went and did it, ended up thinking Blitz was okay, but fell in love with tRPC once it clicked.

I went back, ranted about it forever... That was kind of like the start of my creator journey, was being egged on by Tanner and Ryan and Fred to -- I had something that these people who I still to this day greatly look up to could get value from. And then at that point, conferences were a place to go hang out with these guys. And that's why I started doing it, so I could meet them in person and be involved in these things. Even then -- I think last year was the first year I actually did conferences. I did like three, and two of them were in SF. This year I did 15, and I want to die. Not again. My limit now is five a year, and I've already picked the five for next year. I picked them based on the fact that I did literally all of them. And now I know what I am and I'm not looking for.

For me, hallway tracks are \[unintelligible 01:09:54.19\] I've been to 15 conferences, I've probably watched four talks across all 15. I watch the talk on YouTube later, because then I can make it a YouTube video. But when I'm here, it's to talk and hang out and have these conversations that are best had in person with these people. And just putting a face to the persona can help so much with that.

**Nick Nisi:** Yeah. The hallway track is definitely a running theme with everyone that we talk to. It's just best way to meet people, people like yourself, just people that are doing cool things, that are interesting to you, and they're also interested in it... It's just -- yeah.

**Theo Browne:** So one of the things I like the most about this conference is not the hallway track. There isn't actually much of that here of notice. But what they do have is after a talk, there's a discussion room where you can just go talk with people about the thing. I'm actually kind of sad that this got scheduled over my discussion room time with the React team about the future of React. I should have came straight to this, but I ended up there and had to be dragged by the conference host out for this, because I just wanted to nerd out with the React team more.

But this event did a good job of blending the talks and the formality with that type of thing... And it's nice to see somebody challenging that. My dream conference is just hallway track, though... Which means you can't get sponsors, which means it won't succeed, but... Open offer - if somebody can figure out the way to do a proper open hallway track conference that low to no talks, it's just for nerds like us to come hang out, I'll attend.

**Kevin Ball:** Have you ever done an unconference? It's essentially that concept, except some of the things do turn into talks. But people show up, propose discussion topics, everybody congregates.

**Theo Browne:** \[01:11:36.06\] The key is the people part. \[unintelligible 01:11:36.23\] if I don't have Tanner Linsley, Ryan, or Fred at an event, or React team people that I'm friends with, if none of them are there, it's really hard to get me to go. I don't like being the one that is first on the list to convince others to show up. I like joining the list once I see enough of my friends on it. I don't want to be a \[unintelligible 01:12:02.08\] I don't want to be the reason people are going to a thing. I'm okay with being a reason when they're already on the line. But there's one conference I do drive a lot of traffic to... It's OpenSauce. Not OpenSauced, BW's thing. OpenSauce is by Will Osman, who's an engineering YouTuber. He built an X-ray in his garage. A lunatic.

**Kevin Ball:** Of the best type.

**Theo Browne:** The absolute best type. I love him so much. He's also like the nicest dude. We chat all the time. I love Will. He missed OG Maker Faire and OG VidCon. Nobody was doing anything like that. He was sad. He wanted the ultimate science fair with his nerd YouTube friends, and made it. And he hit me up, \[unintelligible 01:12:43.10\] I was like "Wait, this is engineering, but how much am I allowed to infect this with software?" He's like "Software engineering is engineering. Do whatever you want." So the first year I brought a few of my friends... It was the best conference I've ever attended, simply because it was creators and YouTubers who understand that dynamic, and the community management, and all of that well... As well as little things like when I showed up, they gave me a little index card \[unintelligible 01:13:08.25\] if I needed to get out of the crowd. All those little details they'd figured out. I never felt so understood as a creator at an event before.

So when they did it again this year, I dragged all of my creator tech friends to it. I told them - not mincing words - "You have to be at this one", and I think that went really well, because all of them were hyped. They're all trying to help fund it next year, because it was so fun. That's the one conference I'll be like "No, you have to go to this one." I'm getting there with React Miami. That one's really fun and cool, and I love Michelle so much...

This is my first time at a React Summit, and I can see how I could be convinced there as well... But I'm going to a conference because I have friends there. If I'm surprised by the quality of the experience I have there, I'll become an advocate for it. But I don't want to be the first person in hopes that my friends show up later.

**Nick Nisi:** It's really interesting. It's different from the way I approach it, obviously... I don't have a phone number to call to get out of tech crowds... But I do really enjoy -- I do feel like there's a pretty good hallway track here, just down where the sponsors are. We've spent all day yesterday and today...

**Kevin Ball:** Jamming with people.

**Nick Nisi:** ...yeah, meeting random people.

**Kevin Ball:** And it is fun, you'll run into a Rich Harris, or a Chantastic. We were talking to somebody and you wondered by, and we hadn't met in person before, things like that. So it's a great way... It is still all about the people.

**Nick Nisi:** Yeah, for sure.

**Kevin Ball:** You go for the people. You go to a tech conference or a meetup or whatever, you go out for food or drinks afterwards, and you're still geeking out with people. People talk about networking and it sounds scary. Networking is geeking out about the stuff you like, with people who also like that stuff. It's great.

**Nick Nisi:** Yeah. The conference is a perfect way to have an excuse to get those people together to geek out all day, and then go get food later, and continue it.

**Theo Browne:** Yeah. My thing I'm super-excited for right now is when this wraps up, I get to go hang with Tanner for a little bit before his talk, and then after that, I get to nerd out with him a whole bunch after. My list of excitement is who I get to go talk to next.

**Kevin Ball:** Yes. Awesome. Well, I think we are just about at time. Any last things you want to leave people with?

**Theo Browne:** I had something and I already lost it, so it's not that big a deal... Just build stuff and follow your excitement. If you're doing a thing because you feel like you have to, it's probably not the right thing. If you're doing a thing because you can't sleep because you want to do it so badly, you're probably doing the right thing. And in an era where more and more of the boring stuff is being taken over by our tools, you've got to follow the excitement and the energy. Like, what gets you excited to do what you're doing. I don't think the future has a lot of engineers that are only in it for the money. I think the future is the people who are the most excited getting 10 times more productive.

**Nick Nisi:** I think that's a perfect place to leave it. Thank you so much.

**Theo Browne:** Of course. Thank you guys.
