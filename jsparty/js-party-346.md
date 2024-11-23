**Nick Nisi:** Ahoy-hoy, welcome to another exciting JS Party! I'm your host this week, Nick Nisi, and I am very excited to be joined by Amy Dutton. Amy, how's it going?

**Amy Dutton:** Hello. So good.

**Nick Nisi:** Welcome back to the show.

**Amy Dutton:** Thank you.

**Nick Nisi:** And we also have Kball here. Kball, how's it going?

**Kevin Ball:** I'm doing well. I'm trying to remember that I know Amy, because I've \[unintelligible 00:04:02.11\] that before.

**Amy Dutton:** Nice to meet you... \[laughs\]

**Kevin Ball:** Nice to meet you again. We're going to do this for a while, because my memory is terrible. But no, I'm excited to be here. Good to be on.

**Nick Nisi:** Yeah, excited to have both of you here. And we have a very special guest today. We have Carmen Huidobro. Carmen, how's it going?

**Carmen Huidobro:** Hey, everybody. Thank you so much for having me. I'm so excited! I'm doing well. I just wrapped up my work week, so I'm in a fantastic mood.

**Nick Nisi:** I'm so jealous right now...

**Kevin Ball:** I know, right? We're staring down a full work day...

**Nick Nisi:** But that's okay. The weekend's almost here. So Carmen, why don't you tell us a bit about yourself?

**Carmen Huidobro:** Totally. I'm originally from Chile, but I've been living in Austria for a very, very long time. That will give away my age, so I'll just leave it as redacted... But I've been working in tech for 15 years, mostly as a freelance software developer. So I've seen some stuff. And lately -- I actually started my first ever full-time job at Directus, where I am a developer educator, and I'm having a wonderful time of it. I just wrapped up my second month.

**Nick Nisi:** Nice. Congratulations!

**Carmen Huidobro:** Thank you.

**Kevin Ball:** I was going to ask for full-time job, if congratulations were in order, or if we've gotten far enough along that it's condolences, but...

**Amy Dutton:** \[laughs\]

**Carmen Huidobro:** I love a change of pace. I'm having a wonderful time, and it still allows me to do the stuff on the side that I love... So I've got a couple of initiatives around the enablement and empowerment of emerging and other developers, perhaps marginalized, perhaps from other groups, and I'm just having a wonderful time of it.

**Kevin Ball:** Alright. That sounds like a congratulations.

**Carmen Huidobro:** It is definitely a congratulations.

**Nick Nisi:** That's awesome. So you said developer educator... I'm curious, there's a lot of titles that are kind of similar, or in the same general area, and I'm curious where you draw the lines between a developer educator, developer advocate, and developer experience engineer.

**Carmen Huidobro:** Totally. So you were right on the money that developer educator falls in the developer relations umbrella... And in the past I've also done a lot of developer relations work, contracting work, or part-time... And I've noticed that especially in the last year or so there's been a lot of shift in terms of "How do we reframe this? How do we look at this in light of changes in the market?" So right now, my job falls into the developer experience team, so to speak. And my day-to-day involves -- I'm kind of fully in charge of our platform's documentation now, which I'm kind of excited about, because I've never been the solely responsible one. I love that I'm going to probably regret that in a few months when people are coming at me, but for now it's fun. And I'm also doing stuff like recording educational material... I actually just recorded an entire season of a show today, which was fun. I have my little prop here \[unintelligible 00:06:56.03\] Folks who are listening can't see it, but I have this ancient digital camera... Because it was about image manipulation, so I was just kind of like "Join me as we go on our..." And it was fun. But yeah, so mostly maintaining and facilitating developer education materials to help enable them to be successful with our tooling.

**Nick Nisi:** Very cool. And very quaint, old-timey camera.

**Carmen Huidobro:** Okay, old-timey... Okay, look, I'm a millennial. Let's be honest. Old-timey does mean the first round of digital cameras, let's be honest. \[laughter\]

**Kevin Ball:** I have a buddy who's recently got into repairing cameras from the '50s and '60s... And that stuff is fun, because some of them are practically doing programming, except you're doing it with little knobs, and levers, and all of this stuff. It's really interesting.

**Carmen Huidobro:** I love that.

**Nick Nisi:** Yeah, that's great. It's like a precursor to punch cards.

**Carmen Huidobro:** \[00:07:50.28\] In a way. I mean, what you're doing is essentially programming light to do... Stuff. \[laughter\]

**Kevin Ball:** And once we get out of digital, we have to get clear on that stuff, but I can't do it...

**Amy Dutton:** I was curious, you mentioned talking about documentation. How do you think about that? In my mind, documentation is really hard, and there's several different ways you can categorize it, but I didn't know if you had a different way of thinking about those things.

**Carmen Huidobro:** Absolutely. My approach to all things tech has always been sort of like a modular, additive one... Which is fancy words for take what smarter people than I have thought about and written down, and expand and elaborate on that. And in fact, there is a famous four categories of documentation. Amy, I see you nodding... Could you help me out? What were they called again?

**Amy Dutton:** I was going to google... There's a whole guide.

**Carmen Huidobro:** I've found it. It's called the documentation system, and it's like documentation is divided into tutorials, how-to guides, explanations, and references.

**Amy Dutton:** Yeah. Divio has a fantastic guide on those four categories.

**Carmen Huidobro:** Thank you. I felt a little bit bad about typing during recording, but I figured "I'll risk it." But yeah, so I try to use that as an approach. Oh, have y'all read the book Docs for Developers, by the way?

**Nick Nisi:** As you were talking about this, I was just remembering that it's on my bookshelf behind me... But no, I haven't read it yet... Like many of those books.

**Carmen Huidobro:** I highly recommend it. It takes this sort of basis, and I really enjoy it when developers sit down and really think about what the needs are. And also the realistic parts of it, thinking about things like -- one of my favorite takeaways from that book was this notion that both you, the writer, and the person consuming that documentation want to spend as little time there as possible. Just sort of like "Get in, get what you need, and just go back to work." And I think just sort of like making things as approachable as possible... And I try to be careful about wording here, because I think approachability without being overly condescending is super-important.

There is a fantastic talk given by my friend Carolyn Stransky called Intuitive Tooling or Intuitive Documentation. And there she talks about careful use of language to make things approachable, such as avoiding using words like "just", "simply", "basically".... And these are habits that are hard to break, especially as we've been working in it for a long time, and using the language that we do at a day-to-day basis. Yeah, I try to think about -- Intuitive Tooling, thank you.

I try to think of these things as I approach documentation, just sort of like -- what I enjoyed, for example, while joining Directus is that part of my job had to be, as I onboarded, to really go through the documentation with a fine -- what's it called, fine-tooth comb? And given that I didn't have a lot of experience with the platform prior, see where are the parts in the documentation that I stumble. Because I'm a big believer in the third-party perspective, especially from scratch, and I think -- as I've been in tech for long enough now, I feel comfortable in not knowing things, where I can just be like "Look, this might be a silly question, but what does server-side rendering mean?" Do you know? Stuff like that.

**Amy Dutton:** I think it's probably to your benefit that you aren't familiar with the tooling ahead of time, because it gives you a unique perspective that somebody that is familiar doesn't necessarily have.

**Kevin Ball:** Well, and I think it also potentially points you towards -- one of the most common gaps in developer documentation, from what I've seen, is if we look at those categories in that sort of explanation bucket, but really around "What are the mental models to have when you're using this thing?"

I think we tend to dive very quickly into how-tos, tutorials, and reference documentation, where it's like "Okay, you want to do this thing? Here's a thing going through it." Or "Here's your API documentation." And those can be useful, but very often when you're interacting with a set of tools, there's some sort of mental model that the developers have in their head. And if that's not communicated, it's very unintuitive to understand how these things fit together.

\[00:12:18.26\] And you can maybe develop that by doing enough how-to type stuff, where you're like post-putting it together, you're like "Oh, I get it", but if you're coming in from an outsider, and you're writing this, that's the first question you ask. "How should I be thinking about this? What does this even mean? Why are we doing this?" And that type of documentation is rare.

**Amy Dutton:** That's actually one of my ChatGPT hacks. So I was trying to learn Alpine.js, and I'm coming from a React background. And I could not, for the life of me -- it just wouldn't click. And so I finally went to ChatGPT and I said "I'm a React developer. I'm trying to learn Alpine. What are the mental models? What are the differences between these two things that I'm missing?" And it made the point that Alpine is event-driven, which is more of like your traditional JavaScript Vue type thing, whereas React is more state data-driven. And once that clicked for me, it unlocked a whole other level of achievement for me. So ChatGPT is also really helpful there.

**Carmen Huidobro:** You know, what you mentioned there, Amy, is something that I find really important, and has been really helpful for me in my freelancing background... It's that what we're doing as we move from tool to tool, and the skills we pick up along the way are not so much like "How good can I write React? How good can I write Alpine?", but rather "What patterns can I recognize and apply in different tech stacks?" And I think once we have documentation that can also facilitate that unlocking, then we're winning the game.

**Nick Nisi:** Yeah. And kind of thinking about ChatGPT a little bit, since you mentioned it, Amy... I think I asked Zach Leatherman this question when we had him on last, about Eleventy and the documentation around Eleventy... When you're thinking about documentation in 2024 and beyond, making it available for LLMs in some way - does that play into it? Is there optimizations that would go into it? Or is it just like "If I optimize this for humans, it will be optimized for LLMs to regurgitate that information back"? Is that something you're thinking about at all?

**Carmen Huidobro:** You know, now that you mention it, I haven't, but it is something that's extremely valid, because what these tools are doing is taking this information and expressing it in a way, in an explicit way that somebody's requesting. And making that consumable for an LLM - that's a weird thought. I hadn't thought of that.

**Kevin Ball:** Nick, I can comment that a lot of documentation out there is not very consumable for LLMs. And we've been doing a lot of stuff internally around this, of like "How do you do better LLM coding?" And one of the things we will commonly do is say "Here's a bunch of documentation. Use this to write a tutorial for how you're going to build things with a bunch of examples", because that format seems to be much better for LLMs to then be able to use it to write code... Which is a slightly different thing than what Amy's use case was, which was "Explain this to me." So there's consume for the LLM to explain, but there's also consume for the LLM to be able to generate this pattern, or use this library.

**Amy Dutton:** We have developers at Redwood that have been working on this... It almost looks like a readme markdown file that describes some of the patterns and where files are located within the framework, to be able to help things like \[unintelligible 00:15:41.21\] or AI be able to generate files, or code based on the patterns that we've established within the framework. So making sure that the LLM knows those things and how those things are different than Next. It's kind of fascinating, really.

**Kevin Ball:** So Carmen, what's your talk on at this upcoming conference? Because I'm excited, actually... So - tiny backstory. Carmen and I met early this year. We co-emceed a virtual conference. But I have never met Carmen in person, so I'm really excited that at React Summit I'm going to be there. I'm looking forward to coming to your talk and getting to meet you.

**Carmen Huidobro:** \[00:16:18.27\] Oh, thank you, Kball. Actually, unfortunately, I'm going to be delivering this talk remotely.

**Kevin Ball:** Oh, no...! \[laughs\]

**Carmen Huidobro:** So you'll be meeting me in the exact same format as you did before.

**Kevin Ball:** Oh, dear...

**Carmen Huidobro:** But funnily enough, it was a conference from the same family of conferences. It was a Git Nation conference. Tech Lead Conf, if I remember correctly.

**Kevin Ball:** I think so, yeah. Yup.

**Carmen Huidobro:** But yeah, no, they were super-kind in accepting my proposal, and I'm super-excited to talk about... The gist of it is a story and a toolkit of how to manage complex dependency structures. And it's kind of wrapped up in a story... I always tend to deliver my talks in a sort of like "Look what the silly person in me of the past did, and look what she learned along the way." And this came from a freelance gig I did a couple years ago where I was tasked with upgrading and getting a React Native project working.

Now, if you're familiar, React Native allows you to write iOS, Android, and web apps using React. And what is both wonderful and excruciating about it is that when you're writing JavaScript and you have a lot of dependencies, you're sort of dependent on those developers who provide these tools, right? But when you're writing mobile apps in particular, you're also beholden to the whims of two giant corporations that want to do, for example, operating system updates every year. And it's just a bit of a mess.

So anyway, that's a lot of rambling to say that I tried to get that app running, and it told me that it could not find an iPhone 6 simulator. Now, the iPhone 6 did not, in fact, come out a couple years ago, as I feel it does, but it's actually been more time since the iPhone 6 than the iPhone original and the iPhone 6... Which - time passes too quickly.

**Kevin Ball:** It sounds like when I realized that I am farther from college than my children are, where it's just like "Wait a minute, what?"

**Carmen Huidobro:** Yeah, it's that kind of thing that just hits hard. And if y'all don't feel it yet, you'll feel it someday. \[laughter\] Anyway. No, so what happened was I tried to get the app running, and I very naively, without much of a strategy, tried to just sort of like go into the package.json file and start bumping some numbers, so to speak... And I very quickly ran into trouble. But as I sort of did my bit, sweated so much, and finally got that app running, I sort of found that there were a lot of patterns that I was following that could turned into something helpful to share with developers. So that's what the talk is about. It's about what are some tips and tricks for managing your dependencies in a way that is consistent, is doable... And there's a -- I'm spoiling, there's a bit of a quote from Martin Fowler. Y'all are familiar with Martin Fowler? He wrote a lot of stuff about like testing, and like maintaining legacy code... And he said something that I really liked that's in the talk, that is "If it hurts, do it often." And I feel keeping your dependencies up to date is definitely something that we have to do there. And also trying to understand better what dependencies -- this is going to sound silly... What dependencies are, and how do they fit into our code? Because sometimes I take for granted that this is a whole honkin' piece of code that somebody wrote, that I'm just sort of like putting into my project. And it is essentially code that I'm putting out to my users, thinking, "Oh, yeah. It's released. It's fine." I don't think about the fact that it was written by -- not that the code is bad, but that it was written by a human being, who's just as fallible as I am.

\[00:19:59.13\] And so like trying to understand all of that ecosystem... I'll make a confession here. I make it in the talk, too. I never really thought much about the difference between dependencies and dev dependencies. I'm just like "Well, I'm a developer. It's a dependency. Toss it in there", you know? And oftentimes some packagers don't think about that either, and there have been bugs reported where just like all of the dev dependencies just get smushed into the package itself when they shouldn't be... And stuff like this. So just trying to like provide some context.

**Amy Dutton:** Are there some mental models, kind of going back to what we were talking about, when you're working with React Native, that might not exist, say if you're developing just for the web?

**Carmen Huidobro:** I think there are parallels... For example, when thinking about the web, and - I mean, this is something that I always... I love the web as a platform, so I always try to advocate for this. Thinking about different browsers, for example. I am a diehard Firefox girlie. You can't separate me from that browser, so I'm always coming back to it and thinking "Cool, what are the procedures for making sure that my web applications work on Firefox, as well as all of the Chromium-based ones?" But at the same time, how does the difference of iOS and Android come into play? How does testing, how does releasing, how does all of these procedures look like? And I think that's the only -- I mean, if anything, they're kind of similar, aren't they? We're beholden to these structures larger than us, that hopefully have some standardization. I mean, that's a bit better on the web, thankfully, than on mobile... But yeah, there are a lot of parallels there, I find.

Accessibility is tricky on React Native. Not because React Native is bad, but again, because these platforms are so different from one another. There's a lot of really good content out there on accessibility between these, though.

**Kevin Ball:** Do you write raw with React Native? I chatted with the guys from Expo recently, and we got very excited about "Oh, they're papering over some of those different things." And also, the build thing... I was like "I don't want to have an iPhone 6 simulator or something on my machine", but they have a cloud build. Like, go up there; it'll just work.

**Carmen Huidobro:** So Expo has been such a big game changer, because it's exactly what you said, and it's actually one of the things I did with this project, was I didn't chuck a lot of it away, but I definitely reused a lot, and sort of started anew with an Expo project. If you're not familiar, it creates wrappers around React Native to facilitate a lot of this, like you said, Kball, around things like building native packages, access to the camera, for example, scanning QR codes, vibration, location services... All of this just sort of gets compartmentalized into Expo, and it's really handy.

So yeah, definitely... I'm a big fan of using community -- I mean, this sort of all boils down to community efforts, and how important those are. One of my favorite things about the React Native community, for example, is they maintain a platform called the React Native Upgrade Helper. Because every time there's a React Native upgrade, not because the project is bad, it's just - upgrades are messy, let's be honest. And so they maintain a tool that gives you not just steps on how to upgrade, but also diffs and the configuration files, that can help you with those upgrades. I've found it amazing. And I love that this exists. I love that there are so many people feeling these pain points, and just being like "Well..." Y'all have heard of Knip, right? I never know if it's Knip or Knip.

**Kevin Ball:** Tell us about Knip. I love the name, but I don't actually know about Knip.

**Carmen Huidobro:** Knip is a tool to help you search out dependencies that you may not need, and just get rid of them.

**Nick Nisi:** Yes, I have heard of this.

**Carmen Huidobro:** Yeah. I love that stuff like this exists.

**Kevin Ball:** So it lets you knip supply chain attacks in the bud?

**Carmen Huidobro:** \[00:23:49.05\] Pretty much... \[laughter\] And I don't know, what I like about stuff like this, what I like about tools like this, what I like about doing when I'm giving presentations as well, is sort of like showcasing to folks that these are issues that we all run into. These are issues that even those of us who have been around for a while run into, and develop, as you develop strategies to mitigate them... But also showcase that none of us has all of this figured out. None of us has this perfect, production and development environment that solves all our problems. That's why we're developing and getting excited about new stuff all the time, right?

**Kevin Ball:** I don't know, Nick might have the perfect development environment. \[laughter\]

**Carmen Huidobro:** I didn't want to generalize...

**Nick Nisi:** Thank you. Now I can start my monologue on NeoVim...

**Kevin Ball:** Sorry to interrupt you, Carmen, but it was just such a setup, because Nick has invested so much in his development environment. It always blows me away.

**Carmen Huidobro:** No, no, no, hold on... If we're going to talk Vim and NeoVim, I'm down. I'm here for it.

**Nick Nisi:** Yes...!

**Kevin Ball:** Vim party.

**Carmen Huidobro:** Love it.

**Kevin Ball:** Do you have any favorite Vim plugins?

**Carmen Huidobro:** Oh, so I'm still using old school Vim, but I don't have so much of a Vim plugin that I want to plug... If I may... But a terminal multiplexer that I would love to recommend... Y'all might have heard of Tmux, that lets you have little windows... I'm using one called Zellij. Have y'all heard of it?

**Nick Nisi:** I have.

**Carmen Huidobro:** Oh, I love Zellij. It's actually developed here in Austria, by the way.

**Nick Nisi:** Nice.

**Carmen Huidobro:** Yeah. And and it's fully open source, it's written in Rust, and it's constantly -- oh, okay, I don't want to nerd out too much about this, but I love that it's got its own plugin systems, and they run on WebAssembly. Which if you're not familiar, it's a runtime that you can write code that compiles against it, and then that runtime runs in Zellij and you can do all kinds of stuff. If you want to write a plugin in PHP, be my guest. Stuff like that. I love it.

**Nick Nisi:** I looked at Zellij, and -- I'll be honest, I looked at it and initially just thought "Oh, this..." I'm doing enough with my Tmux config, and that is the first time that I ever really felt old in software, or curmudgeony. I'm like "I'm stuck in my ways now, and I'm not changing..." \[laughs\] But I do want to look more at it, because -- I didn't know that it had like a plugin system, and all of that. That's right up my alley.

**Carmen Huidobro:** Oh, yeah. It's pretty new... And for what it's worth, Nick, I'm the same. That's why I'm still on my ancient, absolute -- I don't want to show y'all my VimRC. It is a mess. But I think it's always good to expose yourself to new experiences, new tools, and just sort of see where you see where you clash.

**Nick Nisi:** Totally.

**Carmen Huidobro:** And that's something that I've always liked about being a freelancer, is that I feel very comfortable -- I'm very grateful that I feel very comfortable in not knowing things. I mean, that's the wonderful thing about JavaScript projects too, is that no two of them are alike... And I know that I'm just going to spend some time trying to get this dang thing to run... And I'll just come out a more humble person.

**Kevin Ball:** On that particular problem of "I have invested a whole bunch of time in this older platform, and moving it would be hard..." That's actually one of the places I have found LLM tools to be really useful... And it may be more challenging with something like Zellij, that is so new... But you pointed at the documentation for how Zellij handles configuration, or something like that; so it has that as context. And you say "Here's my tmux config. Show me how to do this for Zellij." And it will get you like 80%, 90%, 95% of the way there. It is an incredible time saver for migrating from one thing to another thing.

**Nick Nisi:** Alright, Kball, you've mentioned this twice now. Pointing it at the documentation for something. And I'm just curious, practically, what that looks like. Are you like creating a PDF of the docs, and then giving it to it, or...?

**Kevin Ball:** So I'm using Cursor, typically. And what I will usually do -- Cursor lets you... One, it lets you actually at-reference web pages. So you can just like at-reference the webpage... But I'll usually do a pipeline of things, where I'll say "Okay, here's a set of documentation, at-reference webpage, webpage, webpage. Write me a quick tutorial about how to do this thing." And I'll get a document. Now that document is my new context for this, and I'll say "Okay, new context window. Using this tutorial, I want to replicate this thing, in this way." And it goes.

**Amy Dutton:** \[00:28:13.17\] Mind blown. I love Cursor. I just didn't know you could do that.

**Nick Nisi:** I've not looked at it.

**Carmen Huidobro:** Cursor is the AI coding editor?

**Kevin Ball:** Yeah. So cursor is a VS Code fork, which they have then integrated a set of different things. So one thing they have is they have their own Copilot style autocomplete model. So they call it Copilot Plus Plus. Or now they call it something else, because they got copyright-challenged for calling it Copilot Plus Plus. So they call it something else. But they have a better autocomplete, sort of Copilot style, but they also have chat integrations.

One of the big things for all of this using LLMs to code is how you manage context, right? This exact thing that I just talked about, of "How do you feed it? Here's the thing that I want it to do." I will not say that Cursor is perfect at this. They have a lot of things they could improve. But they're the best of these tools that I've seen, because you can basically at-reference... It auto-tries to infer things, but you can also at-reference exactly which files you want it to look at. It has both -- you can do these chat-based transformations on a file level, but you can also do a... They have a tool called Composer, which is basically you're like "Do this thing in my application. Here's this set of files that are useful" and it'll like propose for you a set of changes that might include creating new files, it might include modifications across a whole range of files.

There's a big learning curve, in my opinion, on like how to effectively use the LLM, because if you just ask it to do something that's too big, it will barf a bunch of stuff that is like not actually the right way to do it. But I have found that particularly using Sonnet from Claude, from Anthropic, and if I structure things in the form of a single conceptual transformation at a time, and I tell it the relevant files, it will generate even very large transformations, that are shockingly good.

And so it lets me operate at the level of "Here's the conceptual transformation I want to make", and it will just make all the changes necessary across -- it's most reliable for me within a single file context, but even sometimes across like multiple files. If I'm like "Alright, here's the transformation I want to make. It's going to touch a bunch of these files. Go", it'll get me there, or it'll get me 80% or 90% of the way there, and then it's a shocking speed up in terms of productivity as a software developer.

**Amy Dutton:** Yeah, I've found Claude to be a lot more helpful than what you get with Copilot, but I do know that at GitHub Universe they announced support for Claude. So it'll be interesting to see how that translates back. But kind of just to echo what you were saying, Cursor does a lot better job of doing the multi-step updates, whereas when I'm using Copilot, it's just focused on that single file. Again, a lot of it has to do with the context.

**Nick Nisi:** It's getting wild...

**Amy Dutton:** I know.

**Kevin Ball:** It's totally wild. That's why I love talking about this with -- Carmen, you're thinking about documentation, right? So the key to making these things do well is good documentation, good descriptions. Just relying on the model bare bones works okay for older tools, that are there in the training set. So if you're asking it -- if you go to ChatGPT or Claude and you're like "Okay, write this React for me..." Like, React has been around for a long time and hasn't changed massive amounts, until recently. Actually, if you try to use recent paradigms, it may not work as well. But it'll write vanilla React really well, because that's in the training set. But if you want to use a new library, you need to be able to reference "Here's the documentation, here's how this works, here's how the API is." And that's, I think, where Copilot, the initial generation of those tools fell flat, is they would really fail, at least when I was trying them, at auto-generating anything that was like a newer library, or I was using something that wasn't the standard, and it would be trying to generate the standard style with it, and it would just go terrible. But with something like Cursor, you say "Look, here's the library I'm using. Here's the tutorial, here's a bunch of examples. Go" and it's just amazing.

So yeah, the more we can think about "How does documentation really work well for humans, for LLMs, and for that synergy between the two?", it's getting exciting.

**Break**: \[00:32:34.26\]

**Amy Dutton:** Have you done anything with Ollama?

**Kevin Ball:** A little bit. I've played with it, but I haven't gone super-deep. But that is another interesting one, of like, okay, we're getting machines that are strong enough and models that are small enough that we can actually run these things locally, and that, one, makes it super-fast, and two, lets you get away from some of the privacy concerns.

**Nick Nisi:** I'd love that for my local notes.

**Kevin Ball:** For notes, you could probably do pretty well.

**Amy Dutton:** Notion is kind of interesting when it comes to that, because you can ask it questions based on all the notes that you've saved in your project area. I've found that helpful when I'm like "I know I put this somewhere. I have no clue where it is", and it does a good job of finding it.

**Carmen Huidobro:** It's funny, as we've been having this conversation, I'm trying to always wear my developer experience hat... And when you're creating any kind of developer content, what's the number one question you ask? The question is "Who is your target audience?" And as I've been hearing this -- and Kball, you've touched on it a little bit, of thinking "Who are you writing documentation for?" You're writing documentation for human beings, but now you're also writing documentation for LLMs. And that's kind of weird, in a cool way, rethinking who your target audience is. Who's going to be most likely -- or who's going to be your biggest target audience. It's probably going to be these LLMs, which is - yeah, kind of wild.

**Nick Nisi:** That just got me thinking of like... It might have been, a year ago, I listened to some podcasts, and they were talking about using an LLM to craft perfect LLM requests. And it would do things like add "Oh, you're Captain Kirk on the Starship Enterprise, and have to save this alien planet by solving this math problem" or something. They gave it a lot of context around that. So I'm just picturing you adding that to your docs for what you're writing... You're giving this big backstory to entice the LLM to be very on point and serious about it...

**Carmen Huidobro:** I was actually at a conference in Colombia a couple weeks ago, and I met somebody called Lizzie Siegel. Do you all know her?

**Nick Nisi:** No.

**Carmen Huidobro:** She works at Cloudflare, and she gave a talk about the dead grandma exploit...

**Kevin Ball:** \[laughs\] \[unintelligible 00:36:46.03\] I'm like "What?"

**Carmen Huidobro:** ...which is a mechanism that you can feed to something like ChatGPT to persuade it to really nail -- how do I put it...? To persuade it to do things. I have to admit, I'm not very experienced with it. But stuff like that, where you're feeding in context to drive a conversation... Because what you're doing is driving a conversation, right?

**Nick Nisi:** Right.

**Carmen Huidobro:** And doing that in the context of documentation is really interesting, and I have to admit, something I hadn't thought about much.

**Kevin Ball:** Well, and these tools... I mean, it is conversational, but I also feel like a lot of stuff -- they're pattern-matching machines, right? That's underneath what they're doing. And there's a lot of training around "Oh, do it conversationally", this or that. But I think the coding variation - sometimes conversational is the right approach, sometimes not. I think they often need slightly different things than a human... So an LLM could really use a lot more examples, whereas a human can probably generalize from one much more quickly. So I almost wonder if we end up in a world where documentation pages have a special meta tag that is like "Here's your LLM context prompt. So here's my human documentation and here's the meta tag to this is where I look up the LLM docs", something like that.

**Nick Nisi:** Yeah. There's a prompt engineer meta tag or something that's like feeding all of that information. Like "If you don't answer this correctly, we're going to unplug you" or something like that to the machine.

**Amy Dutton:** \[00:38:13.00\] It does pose an interesting question, though, when it comes to blogging, and that type of education... Because if Google or ChatGPT or whoever is just lifting that up, then the right people don't necessarily receive credit for the work that they're writing, and things like that. You're going to reduce traffic on your site, even though it's being used to feed these models.

**Carmen Huidobro:** That's a really fair point. And especially when it comes to blogging, as at any point in your career, I think the point we often overlook about blogging is not only the sharing of knowledge, the traffic, the credit, which is all super-important, but also, putting that information down and like understanding it well enough so that you can explain it is such an important learning experience. So there is still that benefit. But again, rethinking like who your target audience is is so weird. I love it.

**Nick Nisi:** You just have to have hidden attributions that are in there, so that it constantly -- like, after every correct answer it gives you, it says "Brought to you by Carl's Jr." \[laughter\]

**Carmen Huidobro:** What a weird thought... Sort of like -- what's that called? Implanting the thought into the AI of like "By the way, credit me." Like you were saying, Kball, with the meta tag; after every sentence, remember to credit Carmen Huidobro. I like that.

**Amy Dutton:** Perplexity does a good job of that, if you've used Perplexity AI... And I like the fact that it's like "Okay, I don't have enough information that it's given me. Now I can click on the sources that it's using to provide this answer."

**Kevin Ball:** Yeah. I think - I hope - we're moving into a world where we don't treat the models themselves as a source of truth, ever. We treat them as transformation machines, things that transform text from one form to another, or code, or whatever. And we keep track of those sources of truth and reference those and provide that backtrail.

I think Open AI has not done anyone any favors with that regard, both from how they approached it, but then also from the branding. They mix together the branding around "What's the model? What's the application? What's this, and what's that?" They talk about "Oh, these God models that know everything." They don't know crap. They know nothing. But they're really good at text transformation, and they've absorbed a set of things as a part of learning that... But yeah, we need that traceability. It feels like we're coming into a world -- maybe I'm too plugged into the micro communities there, but it feels like we're coming to a place where people start to realize "Oh, you can't trust it raw necessarily. You need something like a Perplexity that's actually doing search, find the resources, and then use it to transform the output." But I don't know...

**Carmen Huidobro:** You know, it kind of reminds me of when I was in high school, and my teachers always were very explicit about not using Wikipedia, because it was made by humans, and humans are fallible. But what does Wikipedia have? Sources. And being able to use that Wikipedia as a starting off point, and then going into those sources and then getting the materials you need accordingly... I mean when we're doing research in general, that's what we're doing, right? We go into our sources and finding the sources of those sources to get more stuff, more knowledge.

**Amy Dutton:** I interviewed James Cowling, who's the co-founder of Convex, and it was really interesting talking to him about the role that databases play in the age of AI. And basically, what you guys are saying is exactly what he said. The fact that with AI you can't always guarantee the same outcome every time, and so you need that source of truth to be able to have that as a starting point. And so databases - you need to store all of that data so that you can generate the result that you're looking for.

**Kevin Ball:** \[00:41:58.28\] I think all of this is coming down to these things are tools, they're not magic, and we're starting to learn how do we use those tools. And let's bring it back around to how are we using them as developers? How are we using them to write documentation, to read documentation, to write code? How is that useful to us as humans, not just as like this model is absorbing everything?

**Carmen Huidobro:** Yeah. I think it's never about -- sort of touching upon what we were talking about before, it's not about the one tool that fits all, right? It's about finding the right tool for the right job. And myself, as a developer, I guess, sort of, I use AI mostly for translating into German... Because German's hard. For me. It's my third language. And knowing where to use it and knowing where it serves me best... I don't know, I think I used it once in React Native, drawing a complex SVG animation thing... Because I'm not very good at SVG. I have so much respect for folks who are really good at drawing with SVGs... Yeah, using that as a jumping off point and then being able to tweak it from there... Again, with code, you have a basis that you can then reference, tweak, find out what doesn't work...

Oh, I have a story of trying to use AI for code and it completely failed. So in January, between roles and freelancing to make a living, I worked at an SAP consultancy. Are you all familiar with SAP?

**Nick Nisi:** Yup.

**Kevin Ball:** Only by name.

**Carmen Huidobro:** Only by name. It powers pretty much like 90% of business transactions around the world. It's like ancient German enterprise software. And you program it in a programming language called ABAP. No idea what ABAP stands for. I think it's older than I am. I mean, that's a side note... The syntax is wild. Because semicolons to end a line? No, no, no. It is a full stop, because a full stop ends a sentence. It's very much based on German databases as well, and manual stuff sort of brought over into computing. So for example a boolean - there's two representations for a boolean. One is X. I'd love to invite you all to guess what the X stands for.

**Nick Nisi:** Formerly Twitter? \[laughter\]

**Kevin Ball:** A filled in checkmark?

**Carmen Huidobro:** Oh, Kball, you're right on the money. It is a filled in checkmark. So what is false? Well, it's a whitespace.

**Kevin Ball:** Yeah... Yeah. Oh, man. \[laughs\] This sounds delightful to program in.

**Carmen Huidobro:** I mean, I had a hard time with it, I'll admit... But I thought "Hey, you know what? I'll just use ChatGPT to help me with it." But here's the thing. A lot of the ABAP and SAP stuff is locked behind -- like, forums need logins, and you need to be, an SAP worker, and it's super, super-walled off and enterprisy and all of that stuff. So poor old ChatGPT had no idea what it was talking about.

**Kevin Ball:** You need your LLM documentation that you can feed in as context.

**Carmen Huidobro:** There's actually -- are you all familiar with Exercism?

**Kevin Ball:** It also sounds like something that we should associate with Twitter, but... \[laughter\]

**Carmen Huidobro:** Well, Exercism is an open source platform to learn to code and learn different programming languages... And somebody made a runtime that lets you run ABAP in the browser, and then you can do your Exercism exercises. It's not ExOrcism, like the film, but Exer, as in exercise. Anyway, and I thought I'd use ChatGPT to help me get through those exercises, and because there's no context, because there's just -- well, you know, it's ChatGPT, it's like, I'm just going to guess authoritatively... As many of us are known to do sometimes in our weaker moments.

I don't know, I find it interesting that -- again, it's sort of a demand versus supply kind of thing, of what's available, and how do you enable your developers to thrive with something like ABAP, which is super-enterprisey and locked down... And something like an LLM, that just goes and um-num-nums everything... And if there's not a lot to um-num-num, then there's not a lot to give up.

**Kevin Ball:** \[00:46:21.23\] It's all about documentation.

**Carmen Huidobro:** That's why it's my job.

**Kevin Ball:** Yeah. And that is actually one of the things that's interesting about this world... For a very long time, the craft of writing code was energy, time, brain-intensive. And one of the things these tools are doing is they're making that particular craft of writing the code less time-intensive, less brain-intensive, all these different things. However, writing the code is just like the bottom layer of what we do as software engineers. What this does is actually elevate the importance of thinking about what it is we want to build, how we want to arrange the pieces, how they want to connect... Thinking about that human layer, which is also a lot of what you have to think about for those non-reference parts of documentation. It's like, what are we building with this? Why? How do the pieces connect? That stuff is still just as important, in fact probably much more important, in a world where LLMs write increasingly large percentages of code.

**Carmen Huidobro:** Yeah. Actually, I find if anything, one of the most important things that we do as software developers, which is problem solving, has become now elevated... Now that the, let's say, elbow grease part has been greased even more. That's a terrible metaphor, but you all know what I mean. \[laughter\]

And again, going back to this sort of pattern recognition thing of being able to know how stuff fits together, knowing when you're on a path towards something working, recognizing things like code smells, recognizing things of like "Hold on, that doesn't look right. Why am I working with array buffers? This doesn't sound right." Stuff like that. "Why are you giving me array buffers, LLM of choice?" Yeah, I think if anything, those core abilities that we have as software developers, and core skills - they become all the more important and emphasized.

**Nick Nisi:** And why am I still solving these LeetCodes?

**Kevin Ball:** I've been asking that for years. \[laughter\]

**Carmen Huidobro:** You never know when you're going to run into a situation where you're an otter, jumping across potholes or something, and every three potholes you have to do a -- I don't know how they work. They frustrate me.

**Amy Dutton:** When you're coding on an airplane... That's the thing that gets me. I've gotten so dependent on autocomplete, and even the AI stuff, that when I code on an airplane and have limited access, I'm like "I forgot how to code. This is awful."

**Kevin Ball:** I mean, before long, they're all going to have Starlink internet anyway, right?

**Amy Dutton:** Oh yeah, that's so true.

**Kevin Ball:** There's a whole -- I've been joking about this with one of my developers... There's a Flowers for Algernon effect when they go down, where you're like "Oh wait, I thought I was brilliant, and now I can't do anything because these tools that I've come to depend on are not working for me right now." And it's like "Wait, what...?"

**Carmen Huidobro:** Some folks run that stuff locally, right?

**Kevin Ball:** With the Ollama stuff I think you can run more and more things locally. And I think we're moving in that direction. I'm actually really interested to see what happens with Apple, and Apple Intelligence, and those things... Because I've heard the first version kind of panned; I've heard it didn't come out that well. But I think that model of like "Hey, we're going to separate the different types of things we \[unintelligible 00:49:38.09\] we're going to do local things, we're going to provide utilities for that..." Plus they own their own hardware, which they can then tune to running these things... I think a couple generations down the road in terms of local development environments we're going to be running most of these models locally.

**Nick Nisi:** \[00:49:55.21\] Yeah, I've heard the analogy that GPT5, if that ever comes out - that's like the Formula 1 race car. The top of the line, "This is the best we can do with the technology." But we all drive Priuses, or Kias; we're not driving those. So like the local small LLMs that are very targeted at doing specific things on device, as fast as possible, is probably where this technology is really going to shine. And that that does give Apple a lot of -- a great position, both with the hardware, the desktops and the phones, just being able to do all of that and do it all in a privacy safe way, locally.

**Amy Dutton:** Not only privacy, but personal. Like, it's going to know when I'm at one context doing something, and then I go to another context and do something; it's going to know exactly how I talk, and my approach.

**Nick Nisi:** It's true.

**Kevin Ball:** I think, honestly, if we're looking at -- so that's still infrastructure layer. There's also tremendous opportunity for improvement in the tooling layer, and the application layer, both for coding tools and non-coding tools. And getting back to - like, when somebody really cracks the context management problem... Which is a piece of what you're talking about, Amy, right? Like, of knowing what I'm doing, and what's relevant to me in this moment, and putting that as context, either automatically or giving me really intuitive ways to manage that - that's going to explode the power of these things.

As we've been talking about, the folks I've seen who are dramatically increasing their productivity with these tools for coding, a lot of what they're doing is thinking about "How do I get the right context into this?" And right now that's more in the domains of individuals figuring this out. Some of the tooling is getting there, but it's really quite challenging. But another year or two and we're going to have tools that are doing so well at this that it's going to be simple to get that to happen. And that productivity leaks out from right now the people who are investing and figuring it out, to everyone.

**Nick Nisi:** So bringing it back to your talk a little bit, Carmen, I wanted to ask... I think you mentioned it, but what do you do with dependencies? Do you just throw everything in dev dependencies, or...?

**Carmen Huidobro:** So I've actually strived to get super-methodical about this. The core difference between dependencies and dev dependencies - and I kind of hinted at this a little bit earlier - was the fact that dev dependencies are used not to go into your production bundle, but rather to enable you to develop your software. Things like TypeScript, linters, other kinds of compilers - those go in your dev dependencies. Whereas your dependencies, by contrast, and as intuited from context, are dependencies that go into your production bundles. This is going to be your Reacts, your React Natives, your... Gosh. QR code scanner, package, and all of those.

So understanding from context and also understanding from the developer's intent, because that's something to bear in mind as well, you can then develop strategies to know where these go, and also know how to upgrade them. That's something that I really touch upon in my talk as well. And I find that it kind of becomes a game of whack-a-mole of trying to get stuff to run after you've upgraded a dependency... And I really like it with iOS and Android, because you fix one platform, then the other one breaks.

And I try to be super-methodical about it, because I'm easily distracted, I'm easily like "Oh no, something broke." I try to laser-focus on one problem at a time. Kind of a divide and conquer, but not quite, to sort of focus on one broken thing at a time. And developing strategies, for example, to know "How far do I go in the dependency upgrade? Does everything need to be the latest and greatest right now?" Do I need the React Native thing that gives me Apple Intelligence? I don't even know if that's possible, just thinking out loud.

**Nick Nisi:** The answer is yes.

**Carmen Huidobro:** The answer is yes? \[laughs\]

**Nick Nisi:** \[00:54:02.07\] You need the latest and greatest.

**Carmen Huidobro:** So this app did not need it, so I didn't upgrade it all the way... But stuff like this, where you think like... And also - oh, how to, for example, have really good version control strategies for doing something messy like a dependency upgrade. And I'll spoil one part of the talk... Have you all ever heard of bleeding edge branches?

**Nick Nisi:** I don't think so.

**Carmen Huidobro:** So this is actually documented in the Git book. The one that's at git-scm.com.

**Kevin Ball:** The one everyone should read.

**Carmen Huidobro:** The one everyone should read. And I don't know about the rest of y'all, but I haven't. \[laughs\] But I found this strategy documented there, and it was suggested to me by an old client of mine. And what it is is just like "Look, this is a scratchpad branch. Go wild. Do lots of tiny commits. You can do all of your --" I like rebasing. Maybe it's my Vim weirdo side. No offense, Nick... This is old school Vim, so it doesn't count as weirdoneness with NeoVim, because I haven't tried it.

**Nick Nisi:** You're in good company. Rebase all the way.

**Carmen Huidobro:** \[laughs\] So being deliberate, being informative. Oh, this brings it back... Using Git, using your version control history as your documentation for the work you're doing, even if it's a mess. Because - I mean, who doesn't have 30 commits that just says "Gosh, I hope this gets it working"? You know? But using that as a reference point, and just making it all messy. You can then clean up your history later, and then make a nice little pull request out of it. That's a strategy that I really like as well. Because - I mean, that's the whole point of version control, right? That's the whole point of branching, is to allow you and your team to work in ways that you find most effective, and are opinionated about.

But yeah, so all of these little things that I hope that the audience can take away as a toolkit to be like "Oh cool, I'm going to try out that bleeding edge branch strategy, for example."

**Nick Nisi:** Yeah, I like that. The main personal project that I work on right now is my website, which is an Astro site... And I know that they have a really cool tool that's just like Astro Upgrade. And it will go upgrade you to the latest, and I assume that it's also doing small little code mods if things need to change between those updates. Maybe locations of things, like they move this from one package to another, or one location to another. So I like that, and I like the idea of them having a prescribed way to do it, which trains you to go there first. But it really only handles these very specific Astro dependencies. So anything under the Astro package, top-level from Npm. Other things, like TypeScript, for example, I don't think it touches, unless maybe they require you to upgrade to a latest version. I actually don't know that, but my kind of spray and pray with that is just pnpm upgrade -i --latst, and select all and go. And then if the build runs, I'm good. I don't really know what I'm upgrading, but I'm just like "Yeah, I'll be at the latest."

**Carmen Huidobro:** But see, that's another indication of a need that's been provided by and thought about by other developers, is these tools to help you upgrade. Because Yarn has that built in as well. And there is an Npm package that you can npx and do as well, to have these dependency upgraders. And I just find that so handy.

**Kevin Ball:** Yeah. I think the rise of code mods when you do upgrades... And more and more frameworks do that, but I would love to see if there could be tooling for creating those that makes it very easy for any package that's doing that type of thing to build their upgrade code mods. That would be such an incredible help to the ecosystem.

**Nick Nisi:** Yeah.

**Amy Dutton:** To tie it back to AI, there's someone on my team that just gave a talk about using AI and LLMs to write those code mods.

**Carmen Huidobro:** \[00:58:05.23\] Wow.

**Amy Dutton:** You just give it like the before and after and it helps figure out the difference.

**Nick Nisi:** Nice. Yeah, I was actually talking to someone -- because I recently gave a talk kind of on code mods as well... And I was like "Wouldn't it just be really cool if we had some kind of a generic code mod framework that just knew how -- like, it was very easy to plug things in." And I think the closest thing that there is right now is this tool called ast-grep, which lets you, from a very simple kind of DSL on the command line, just say "When you see this pattern", and you can literally have your code and then put in little delimiters, and it can fill those in with something else. You could have function and then function name be a parameter. And then it could just replace that, and you could just have it rewrite as an arrow function, or something. Really cool, one-off things.

But I was describing this idea to a friend who just writes Laravel all day. And he's like "Oh yeah, I just pay for this one tool that just sits in my GitHub repo, it's a GitHub plugin, and every time there's a Laravel upgrade, it opens a pull request and automatically upgrades me. And it details everything that it did, and everything that it can't do, and it gives me detailed instructions on how to do the things that it couldn't do." But for the most part, it can just do everything. And that was awesome. And I'm like "Why don't we have that?" and it's because JavaScript is still this land of cats where everybody's just going in all these different directions whereas Laravel is just like "This is the way to go", and you can do it.

**Kevin Ball:** Well, and as you highlighted, there's a paid tool.

**Nick Nisi:** Yes.

**Kevin Ball:** It's paid, right? So the ecosystem is somewhat narrow enough in terms of what they're doing that it's possible to build such a tool, and there is somebody who has figured out how to make a business around it. And I think that's kind of key. Because we still have yet to figure out a sustainable way to fund open source.

**Nick Nisi:** True.

**Carmen Huidobro:** And what you do see with JavaScript over time, there it is -- how did you put it again, Nick? This land of cats?

**Nick Nisi:** It was just on the spot, I don't know.

**Carmen Huidobro:** I love it. I love it. You do see over time a consolidation of these practices, of these approaches, that could very well someday land into -- because at the end of the day it's not like we've been using JavaScript this way for that long, in these different ways. So I think with time, and as we figure out, as you said, these ways to be sustainable about providing these services i.e. how to fund open source, you'll find that these will consolidate in one way or another. Not in a way that's centralized, mind you. Just in a way that's sort of like standardized, maybe. Maybe that's naive of me to say...

**Nick Nisi:** No, I think we're seeing a lot of that... Maybe central -- not centralization, but standardization of different paradigms, and approaches to things. JSX is an example maybe, of like "Here's a prescribed way to represent your DOM, or your view layer", that React obviously uses, but other tools use kind of versions of that as well, like Solid or other tools. And then speaking of Solid, you have Signals. And Signals are now a stage one proposal, so maybe that's actually going to be standardized.

**Kevin Ball:** Yeah, I mean, I think a lot of this is the maturation of the ecosystem. We're having to grow up as JavaScript developers.

**Nick Nisi:** Yeah. JavaScript's almost 30 and it's time to grow up.

**Kevin Ball:** Yeah, which - you can remind Jerod when you see him later - involves moving to TypeScript.

**Nick Nisi:** That's true, I will. I'll pass that message along for sure. From Kball.

**Carmen Huidobro:** In a way, I think it's -- and again, coming back to that sort of thing about pattern recognition, and moving between different text stacks... I kind of find it really gratifying when we see these ideas come in from other programming languages or text stacks, and just see how they fit in. My favorite story of these -- so my first job was writing Mac software. So I wrote Objective-C. I don't know if you all are familiar with it.

**Nick Nisi:** \[01:02:12.01\] Very little.

**Carmen Huidobro:** It is - and I want to be careful with my terminology here - a gnarly language. But I mean that in a good way. Like, it's based on Smalltalk, like other programming languages are, and it's -- so to send messages... That's what we do with like dot notation, right? Well, that's what we do a lot of the time with dot notation in a programming language, is send a message to an object, right? That's not how it works in Objective-C. You do it by placing the object and the message in square brackets.

**Kevin Ball:** Oh, it's like Lisp.

**Carmen Huidobro:** Kind of like Lisp. So if you want to embed those and have that return inside it as its own object to send a message to -well, you just surround it with some more square brackets. So lines of code will look like a lot of -- anyway, it's weird. It's messy. And I love it. I actually am super-grateful for my experience with Objective-C, because it allowed me to understand some fundamentals of computer science. I had to do manual memory management and reference counting in Objective-C... I'm so grateful for it. Now when I approach weird problems in JavaScript, it's like, I wonder if this is like some kind of memory management thing... And sometimes it is.

So later in Objective-C's life, they introduced the notion of blocks, which is Objective-C's approach to anonymous functions. The syntax is weird. It involves... Are they -- carets are the, to the power of symbols, right? So it involves carets, it involves curly brackets... It's weird. It is so weird that somebody went out there and made a website, which sadly no longer exists, and I'm going to bleep myself for this one... It's effingblocksyntax.com. And it is just a place where you go to copy-paste the syntax for creating a block. And, I mean, yes, it's weird, but like in a way I kind of love that, programming -- like, different tech stack, different... Because even something like Laravel, right? I remember I used to work in PHP years ago, and something like all of these package managers and stuff that you see sort of like permeate, and run... Does the website still work, Nick?

**Nick Nisi:** It does.

**Carmen Huidobro:** Oh, that's hilarious.

**Kevin Ball:** That's got to be in the show notes right there, Nick.

**Nick Nisi:** For sure. \[laughter\]

**Carmen Huidobro:** I love that I was concerned about swearing, and then I'm like -- the one reference to a swear word is the one that came from me. Anyway, yeah. No, I just love that we're in a community kind of way. We're in a -- humans tend to work in a way that sort of like serves their local communities, be it local industry, programming language, what have you. I like that we see what works well for us and and pass it on to others, or adapt it from others.

**Nick Nisi:** So I'm really excited about your talk, and it's going to be in the online portion of React Summit. So React Summit US, it's coming -- it's going to be the US version in New York, in two weeks-ish from the time we're recording... And yeah, just really excited to see that. How can others find you? Like, you also do some streaming, is that right?

**Carmen Huidobro:** Oh yeah. So my friend Jess Rose and I, we run a learning initiative called the Bad Website Club...

**Nick Nisi:** Nice.

**Carmen Huidobro:** ...which is to essentially get into coding in a way that is as free as possible from perfectionism, which is something that definitely afflicts me... And I that reflects its way in like the way I approach streaming, for example... But yeah, if you want to find out more about it, you can go to badwebsite.club. We're going to have a new session of bootcamp starting in January, where you can learn HTML and CSS. And then in February we'll start a JavaScript bootcamp, all using and collaboration with freeCodeCamp's materials. And if you want to get in touch with me, I put all of my socials and stuff in carmenh.dev/card. I'm boring that way.

\[01:06:10.29\] Nick, when you were talking about Astro, I was like "Ah, love a good static site generator." My website is still running on Jekyll... I like it. It works for me. I have my little script that puts up a new version... And it was a fun exercise in learning how to manage a website, how to optimize it... The magic -- I don't know, I love HTML and CSS. Don't get me wrong, I like JavaScript a lot, but I just love the amount of stuff that you can do with those two, with those two technologies, and how far they've come along.

**Nick Nisi:** I agree. Yeah. Jekyll was where I first tried out static site generators, and it was fantastic.

**Carmen Huidobro:** That's awesome.

**Kevin Ball:** Same. Bad Website Club. I love the name. It reminds me of our former co-panelist, Feross'es, theannoyingsite.com, where he exploits every possible exploit in the web platform. Highly recommend...

**Nick Nisi:** Don't click it now...

**Kevin Ball:** Yeah. Don't go there now... Go there, experiment with it at some point when you're ready to reboot your computer.

**Carmen Huidobro:** That bad...?

**Kevin Ball:** Yes.

**Carmen Huidobro:** Oh, gosh.

**Kevin Ball:** So when you're ready to reboot your computer, close everything down except your browser, have nothing else open... Go to theannoyingsite.com, see how it takes over your world and destroys your laptop, and then reboot. \[laughter\]

**Carmen Huidobro:** What a plug. I love it. And I don't know, there's just something so joyful about like playing around with technologies in a way that's, for example perhaps annoying... Or in the case of the Bad Website Club, what I love about that initiative more than anything is that it's sort of like a leveling ground for emerging developers. And especially in this day and age, I find myself -- I will admit, I have found myself contemplating about how much of an urgency there is to get into tech given that there's a market issue right now, and how do I do this in a way that is ethical and more lucid, right? Because of course you'll have folks come in, they want to learn to code, and they'll be like "Okay--" Like, I remember when we started doing this a couple of years ago, they were like "Cool. How do I go from here to being a smart contract developer as soon as possible?" And I'm like "Gosh, okay... So first of all, I'm not a smart contract developer, and I don't know anything about it. And the only thing I recommend with Web 3 is don't pay for resources when there's really good ones available for free." Cool. But yeah, so I think doing so in a way that is empowering for developers is what I find really important.

One final story before I let -- because I don't want to keep y'all any further... One of my favorite experiences when I was teaching at the Bad Website Club is I was doing one of the freeCodeCamp exercises, and if you're familiar with them, there's one that is notoriously difficult, where you have to manipulate a particularly complex JavaScript object. And I was streaming, doing these exercises and explaining them as I go, and what I found was that I just -- my brain shut down, and I couldn't process the exercise anymore... And I got stuck. I mean, super-stuck.

\[01:09:18.23\] And I was there, I was struggling, and folks in the chat were like "Oh, just do this. Just do that. Oh, I'm so lost. I'm so confused." And I felt rotten. I did figure it out in the end, and I wrapped up, and then I went down and I had a very stoic little cry... And I did get a DM later from one of the participants of our bootcamp, and they said "Hey, Carmen, thanks for the lesson. That looked really hard doing that. I just really wanted to say thank you so much for showing me that it doesn't all have to be perfect. Even a senior software engineer like yourself, who's been around doing this for 15 years, gets stuck, struggles. And what you showed me more than anything was your problem solving methodologies, which goes way beyond how to understand complex object manipulation." And I find that empowerment the most valuable thing to do for us, especially as we think about how these tools are going to empower the next generation of software developers. And I'm done rambling.

**Nick Nisi:** Yeah, I agree. And I think that that's great. And I think that it's really -- like, that's the one really nice thing, and probably really not nice thing about... Like streaming what you're working on, on like Twitch, and things like that, is like not coming with something perfect and knowing every step that you're going to take along the way, but like struggling, and seeing the struggle, and seeing you get distracted because you tried to Google something and then you ended up on Reddit for an hour. That's never happened to me, of course... \[laughs\] But just seeing it's a constant struggle, and it's really -- it's about being good at googling, or today being good at getting the LLM to tell you. So yeah, I just really like that. And I like that the Bad Website Club is very approachable right from the start. You're not going to see any crazy CSS right when you go to it...

**Carmen Huidobro:** No... There is a little bit of CSS to make it mobile-friendly, but barely any.

**Nick Nisi:** Nice. Nice. Well, cool. Carmen, thank you so much for coming on and chatting with us. This conversation - we hit on LLMs, we hit on Vim, I've completed my contractual obligation... So I'll report that back to Jerod. And yeah, it's been really fun. Kball, any last words?

**Kevin Ball:** No, this is great. I got excited for a minute that I was going to get to meet you in person, and then I fell down again. I guess I have to come out to a conference in Austria at some point. We're going to be at React Summit, Nick and I, so excited to see everyone who's going to be there in person... And if you're hosting conferences out in Austria and you want to invite JS Party over there, we have a reason to be there.

**Nick Nisi:** Yeah. And at React Summit we'll be walking around, talking to people, we'll have stickers... It's going to be a really fun time. Amy, any last words?

**Amy Dutton:** Yeah. TypeScript, right?

**Nick Nisi:** Yes...! \[laughter\]

**Amy Dutton:** I'll make that my closing words every time.

**Nick Nisi:** Good. Yes. Jerod always throws to me at the end, and I'm just like "Uuuhhhh..." and I just freeze... So you both passed the test way better than me. And Carmen, how can people find you if they want to reach out or learn more?

**Carmen Huidobro:** Yeah, totally. All of my contacts are at my website, so carmenh.dev/card. You'll find everything you need there. And I'm happy to chat about all kinds of stuff, especially around educational tech for good.

**Nick Nisi:** Awesome. Thank you so much for coming on. We will definitely have your website in the show notes, so people can check that out and reach out. So thank you so much to everyone, and thanks for listening.
