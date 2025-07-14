**Jerod Santo:** Today we're joined by Thorsten Ball from Sourcegraph, working on Amp... Excited to dig into this with you.

**Thorsten Ball:** Hi. Nice to be here, guys. Thanks for having me.

**Jerod Santo:** I was very impressed by your blog post back in April on ampcode.com, "How to build an agent, or the emperor has no clothes", in which you walk us through, kind of line by line, a pretty -- a basic, but functional coding agent written in Go. And it really did a good job of demystifying it for myself. Can you talk us through some of that? Your motivation for writing that blog post, and then maybe just help our listeners as well as you did for myself understand just how easy, or I guess basic it is to get a working agent in your terminal.

**Thorsten Ball:** Yeah, the reason why I wrote the blog post is I had my mind blown so much that I couldn't shut up about it, and I had to get it out there... And the blog post ended up resonating with a lot of people. That's the most likes I've ever had on a tweet, I think, and the most visits, surely... But it started before, as an internal blog post, that I wrote for the rest of the team here at Sourcegraph. And before that, what happened was that Quinn, Sourcegraph's CEO, and I - we started hacking on what is now known as Amp. And we basically started with the realization that came up while experimenting with the models; back then it was Claude 3.7, Sonnet 3.7... The realization that "Wow, the game has changed. You don't need a lot anymore to make these models work, to get them to edit code." And I can go into what previously you would have to have... But you just give them these tools, and they go off. And I had this moment -- I don't know, we could edit a screenshot... I sent a text message this long to a friend of mine, and the text message was basically "Man, I think I just felt the AGI." I was in San Francisco at that point, so you have to talk like someone in San Francisco...

**Jerod Santo:** "I felt the AGI." Okay...

**Thorsten Ball:** Yeah. And I felt the AGI, because what I had running was a super-tiny prototype. It was Claude 3.7... And I gave it a read file tool, so it could access files, I gave it a list directory tool, and a run terminal tool, so it can run Bash commands. And I was playing around with it and I was like "Oh, it goes through the directories, it reads the files... That's crazy." And then while testing, I said "Can you change this file to something-something?" I can't remember. And suddenly, the program stopped. It hung. And I was like "Where's the loop? Why does it hang? What's going on?" And then suddenly I saw in my editor show up "File modified." And I'm like "I didn't give it a tool to modify files." I didn't give it an edit file tool. How -- what?! And then I looked at the transcript, and what it did on its own, with a system prompt this big and like three tools... It wrote an echo command that echoed the contents of the file, including the modifications, and redirected it over the file. So it figured out that me, the user, wants the agent to edit a file, but it doesn't have an edit file tool, so it resorted to running terminal commands, and echoing the contents and overwriting the file. And I was sitting there, thinking "There's engineers that I could give this challenge to..." Like, "You don't have the ability to edit files, you can only list directories and read files, and you can only run shell commands. How do you make this edit?" And that model figured it out. And I was sitting there, mindblown, how -- this is crazy; this is changing everything. This is nuts, when you see this truly happening and how little code it is.

\[07:44\] So to spread the message inside of Sourcegraph, I wrote this blog post about how to build an agent, which is basically a modification of what I've just described to you... Like, Claude 3.7, three, four tools, and then off it goes. And pretty well received... And then still, I saw more and more people talking online about how to build these agents, or working with agents, and a lot of stuff about what's agentic and whatnot... And I got so, I guess, anxious, restless, nervous about "Guys, you really need to see this." Friends of mine who are AI skeptics, or were skeptical about AI, they didn't know or they didn't really know what an agent was, and have not seen how powerful these models are... And I'm like "I've got to get this out there." So I wrote it all up, basically in one go... "Here's what you need, and it's only 300 lines of code", and it was pretty well received. And the amount of people that still tag me and say "Hey, I wrote an agent in Python", or in whatever it is, "with this model, based on this blog post." And "Oh my God, I had a mind=blown moment."

I don't know, I think it's one of the most well received things I put on the internet in the last 15 years, or something. Yeah, it was really, really nice; a really nice response to it. And I think the nicest one was somebody -- basically, it was saying that this is the first non-hype thing that makes this approachable and tangible. It's not this magical thing, and "Here, go watch 18 Karpathy videos, and learn about neural networks", and all of this. It was like "Write some code. You roughly know how an LLM works... Tool calling is not that fancy of a thing. Just type this out and look at it yourself, and play around with it, and you will have a light bulb moment." And they were saying "It feels like you're democratizing this. Making it more accessible to others." And that made me happy to hear, really happy.

**Adam Stacoviak:** You said the word, or at least the acronym, AGI, implying general intelligence, artificial general intelligence... What makes you feel like that brute force nature was AGI, or you felt the AGI?

**Thorsten Ball:** I mean, I was half kidding, right? Like, just making fun of this. I'm not saying that --

**Adam Stacoviak:** Okay. I was just checking your literalness there on that.

**Thorsten Ball:** Yeah, no, it's -- I mean, half kidding, because... I mean, we could talk about what does it even mean to be intelligent, and whatnot. But what I said is "Look, you have this model that can have tools, and then you give it a problem." For example, I can build \[unintelligible 00:10:40.01\] I mean, that's what all of these agents can do. You start it on your Linux server, and then you say "Restart my Nginx instance." And I'm pretty sure what it will do is -- or at least Sonnet 4, or Claude 3.7, Sonnet, is it will check like sysctl Nginx restart. Does that exist? \[unintelligible 00:11:01.01\] Does that exist? And if it fails and it doesn't get a response back, it will look at the error messages, and then it'll try a different thing. And I've seen this happen, it will say "Wait, is there an Nginx running? Let me do a ps, grab Nginx... Oh, what's the PID of this process?" And then it will look in the proc directory with that PID and figure out in the exe file -- what is it, proc/pid/exe, or something... Like, what's the binary location? And then based on that, figure this out. And it will do this with only the prompt, "restart my Nginx." That's it.

And we could talk about what AGI is or what it isn't, but I don't have another word to describe this as to say it did something smart here; it looked at what it's doing, and it looked at the feedback it got back from what it's doing, and it acted on that feedback, and tried to achieve this goal. And that's not -- it's not AGI. Who knows. But it's still --

**Jerod Santo:** \[12:06\] It looks like it.

**Thorsten Ball:** Yeah, it looks -- yeah, you know.

**Adam Stacoviak:** What did the transcript describe? I know that you alluded to this transcript. I've never read one of these transcripts. What is -- can you describe the transcript? What is it? What details are in there? Can you allude to like the thinking part of this?

**Thorsten Ball:** Oh, you mean the transcripts of like --

**Adam Stacoviak:** Right, you said you saw it do this and you're like "How did this happen?" and you looked at the transcript. When that transcript was revealed to you, what did you see?

**Thorsten Ball:** I mean, the transcript is just the conversation. So every time you talk to an LLM, at the basic level, you send text in, and you get a completion back, right? So if you say what numbers are in the flag of the US, and you say "blue, red", and then it will come back and complete with white, right? And they're trained on completing conversations between a user and an assistant. So if the user says "Hello, my name is Bob" and the assistant says "My name is Joe", and then you want it to complete "What's my name again?", then it comes back based on this with "Your name is Bob", or whatever I just said. And -- I mean, that's it. That's a transcript for me. That's a conversation.

And the funny thing is that with tool calling, you add another element to this. So I described this in the article, that tool calling sounds super-fancy, it sounds like there's a lot of stuff going on, but in some sense the way I describe it in the blog post is you're having a conversation with a friend, and you say "Hey, Adam, I'm going to talk to you, and in the following conversation if you want me to raise my arm, I just need you to wink. And then you wink, and then I raise my arm."

**Adam Stacoviak:** Okay... \[laughs\]

**Thorsten Ball:** Yeah, it sounds --

**Adam Stacoviak:** Yeah, I'm digging that analogy.

**Thorsten Ball:** It's a weird conversation starter, right? Like, you don't get people excited. But with tool calling, you basically start a conversation with the LLM and you say "In the following conversation, when you feel the need to, say, read a file, or list files, or..." What else? "Run a terminal command, respond in this specific way. Respond with a message that starts with "tool call, name, read file", like in a specific syntax. And they're trained on this. So when the model "thinks", in quotes, air quotes, for everybody listening, if it thinks it needs to call a tool, it will respond in a specific way. And that's it. That's the whole magic trick.

So what you say to the model is "You are a coding assistant. You have access to the following three tools: read file, list directory, run terminal command. Here's the conversation with the user." And then the user says "What's in the readme file?" And then the model thinks "I'm going to wink..."

**Jerod Santo:** He's still using air quotes...

**Thorsten Ball:** Yes. \[laughs\] I'm air quoting everything. But then the model comes back and says "Let me read that file. Like, that's the thing that I want to do." And then how it works on a practical level is that you send that up to the provider, to Anthropic, to Google, OpenAI, and the response comes back, and it says "The assistant or the model didn't complete the task. It wants to call a tool." And then you look at what specific tool it wants to call. And then you (air quote) "execute the tool" by just running that function with the given parameters, and you send the result back up. So it's pretty simple. If you draw it out on a UML diagram or something, it's pretty simple. And the magic is in how much is enabled through that.

\[15:52\] So if we go back to the first example, you would ask -- you have three files; list file, read file, run terminal command. And you say "What kind of project is this?" That's what you ask. And then the model just -- that's why I keep saying, just like us, just like us... What it will do is "Well, let me list the files. Let me see what's in this directory." And then you execute the list file thing, and you send back up the list file results... Which can just be a list of strings, or a string with new lines in it. Or just ls-l, or something. And it has this list of files, and then on its own, it will say "Oh, I see you have a go.mod file." Or "I see you have a package.json." Or "I see you have a pnpm log file. I'm assuming this is a web app because of blah, blah, blah. Let me check in this other file how you define, or what's in this file, how this is documented." And then it goes on its own, and explores these other files. And it's -- again, I'm saying this 18 times now I think in the last 20 minutes: t's mind blowing. It's truly -- it's crazy. It's crazy to see how much that enables these; these tiny, tiny tools.

**Jerod Santo:** What's interesting about it is that it's a very basic algorithm, right?

**Thorsten Ball:** Yeah.

**Jerod Santo:** It's like "Loop until you have a solution."

**Thorsten Ball:** Yeah.

**Jerod Santo:** And really, that's kind of what we do as human engineers, or we give up. And that's the difference. This thing's not going to give up. So it very much is a brute force. But if you come to me with a problem and you say "Jerod, I've got to solve this thing. I'm going to read from a file", I'm going to pick my most obvious known solution, I'm going to try that.

If that doesn't work, I'm going to get another idea, I'm going to try that. If that doesn't work... Until I've exhausted all of my ideas. And then what? Then I go ask a friend, or I go out to Stack Overflow, or now I go to an LLM and get more ideas. "Okay, I need more ways of doing it until I eventually get there." And one proxy for like good programmer in the past 50 years has been "How long will you persist through that process until you get to the solution?" Like, some people just give up. "I'm stuck. Roadblock. Whatever. I'm done." And there's other people who actually power through, and then they learn, because they've had experience, to like jump straight to the right one sometimes. You can just early exit from your loop. And it's amazing how that simple algorithm, which is like "Try a thing, loop until it works", when brute forced with something that is inexhaustible... Like "I'm just going to loop, I'm going to try things really fast, and just keep looping until my problem is solved..." It approximates to like human intellect, doesn't it? Like, that's what we're doing, in different ways. And so it's very effective, too. And that's why it's mind blowing, because you're like "Oh, it tried this." And because it has a corpus of all these ideas, because it's already ingested them... So it has all these different ways of doing it, ways that maybe I wouldn't have thought of... And it didn't think of them either. It just indexed them, and has access to them. And the end result is very impressive and very productive. And yeah, I think mind blowing is fair.

**Thorsten Ball:** On that, the simplicity of this algorithm, what we kept saying last few months is -- what we've seen over, say, the past year is that a lot of tooling or a lot of stuff that has been built around this model has collapsed into the model. Meaning, say a year ago, they weren't that good at tool calling. So what you would do is you would say "Here's the contents of this file. Can you edit this file?" And it would come back, and you would prod it and you would say "Reply in this really specific way, reply in this diff format." And then you parse out that diff format, and then you apply this, or you use another model to apply this. And this has collapsed into the model, because now you can give them tools, and they do this on their own. And it's truly like just a for loop.

And the funny thing is if, I don't know, if you ask a hundred engineers, half of them would say "It's just a for loop." And the others would say, with a smile on their face, "It's just a for loop. Like, this is crazy."

**Jerod Santo:** Right.

**Thorsten Ball:** \[20:02\] It's all in this model. You just give it output of five commands and then say "What should I do next?" And it goes and tries 15 other things, because it knows -- based on the previous conversation, it then thinks the next best step is to do the following. And it's -- again, I'm not going to use the same word again. I'm going to say it's nuts. It's bananas.

**Adam Stacoviak:** It's bananas!

**Jerod Santo:** My mental model for that, which is not a super-complicated thing to think about, but I compare it to -- tool calling specifically, I compare it to like shelling out of a programming language. It's like, you know, Elixir has all these things you can do in it... When it comes time to tag an MP3 with ID3 tags - well, Elixir can't go there unless you build it. But you could also just call FFmpeg, right? Now you're just tool calling. And wait for that to do its thing, and then hand back to what you need... And we've been doing that forever in programming languages, right? You just shell out, wait for the response, and then move on. And now you can do all kinds of things you couldn't do otherwise... And really, that's what this tool calling is doing with these agents. It's like, yeah, it doesn't know how to do these things, but you tell it how it can do those things, you tell it to wink when it needs to, and then it waits for something else to do it. And if you tie those things together in a tight loop, magic happens.

**Thorsten Ball:** I mean, that's how they've been trained, right? A year ago, one of the big topics was hallucinations. And that's because - to use your analogy here - the model was only inside the programming language. It couldn't shell out. It only knew what was in its standard library. I'm going to break down the analogy, but...

**Jerod Santo:** \[laughs\] All metaphors break down eventually... Some really quick.

**Thorsten Ball:** \[laughs\] Yeah. It didn't know that there's a world outside, in some sense. So if you would ask it, like, "What's in this directory?" I mean, we've all tried this... People tried this, and without telling it what's in the directory, it will come up with something. It will then say "In this directory, there's probably a readme file", because in whatever context, that's the most likely thing. But now they've trained them to use these tools, and then they shell out. It's like, "I don't know what's in the directory. Let me run list files, or lsl as a Bash command", or something. And yeah, it's nice.

**Jerod Santo:** Right. So this unlocked a huge opportunity, which of course, Sourcegraph is trying to jump on, and other people are. We were talking before we started recording, Google just got into the game... We know OpenAI is in the game... We know that Anthropic is in the game... There are open source players of this game... Because there's huge value here, there's lots of opportunity. So you are one of the creators inside of Sourcegraph, of Amp. We talked with Steve Yegge a few weeks back now, and he's like saying "Just try Codex AI, OpenAI Codex, try Amp, try Claude Code, and mix and match. These have different things." And that's when Adam was like "We want to talk about Amp, and learn more about Amp specifically." Of course, all of us probably want to learn more about Gemini's CLI, just announced today... I think you were playing with it before we hopped on. I know I downloaded it, and it has some interesting stuff. I mean, Google is going to be a good player in any game. So Gemini CLI - free of charge, open source, unmatched usage limits... It looks pretty good. So I'm curious, eventually, your opinions on that. But let's talk about Amp. What's Sourcegraph's angle, its view of the world? Steve kept saying it's for enterprises... But I wonder your thoughts.

**Thorsten Ball:** \[23:43\] My thought is that Amp was built in February, which seems like an eternity ago, when basically this phase shift happened where suddenly, with Claude 3.7, people started to realize that these models are really good at tool calling. That you can quickly get something running, hence the blog post. And Amp is built on the assumption that the results are amazing if you just get out of the way of the model. Give the model tokens - which is what we do, and that's why Amp is also more expensive than maybe other providers... But give the tool more tokens, and don't try to match like your $20 a month subscription, and restricting stuff, and cutting output... But just let the model run, and give it access to tools, a curated set of tools; a set of tools that you think is good for doing coding. And just get out of its way, and give power to the model.

And we started working on this, and we're amazed by how well it works. Like, Quinn and I quickly started building Amp with Amp, and just all day long sending each other messages, "This is amazing. It just did this, it just did that." And then nobody's going to believe me, but we actually started working on this before Claude Code came out, and then Claude Code came out. And I think it's still Amp and Claude Code that are the most agentic of these tools. I think Cursor and Windsurf - great products, but I think their agentic mode feels a little bit slower, feels a little bit more like there's some sort of abstraction between you and the model, and there's other stuff going on... And we specifically made a distinction or the decision to say "No, no, forget about accepting each change. Forget about not giving the model real access to the file system. Forget about being able to modify the previous conversation of this." No, no. Give the model, the transcript, the whole conversation, give it access to the tools, give it access to the file system, and let it go. And let it run.

And I think that's what people are now discovering. Like, this is powerful stuff. And is it for the enterprise? Is it for individual devs? I'm an individual dev, I love using it. I know a lot of other individual devs love using it.

When it comes to enterprise. I think it's just -- our expertise at Sourcegraph of working with large scale customers and some of the best software companies in the world gives us customer trust. It gives us the ability to build something for their need. We know what their codebases look like. We've seen how many thousands of large repos they have... So that plays into it. But it's not -- I wouldn't market it as "Well, Claude Code is for the individual dev, and Amp is for the enterprise dev." To me, Amp is for everybody. Everybody who wants a powerful tool.

And of course, it sounds ridiculous now, because we're in times where individual devs spend hundreds of dollars a month to use these tools, and you two have also been around a while, you know how crazy that is, that even two years ago if I would have said to you "An individual dev for this side project will spend 50 bucks on a weekend just to blow some tokens and ship stuff." That sounded crazy.

And I think we've accepted this change, and that this is now how you are productive and how this stuff works... And if you want to say "Well, the individual dev cannot afford this, and it's costing maximum five bucks and you get only that many tokens and whatnot, or requests", that's not what Amp is, you know? Amp is -- if you want the best agent, and you want to put some money in the agent and let it rip, and let it go, that's what Amp is for.

And the other thing is, on a super -- coming up from the level of product principles, or product vision, on a purely practical level, we are a CLI application; Amp is in the CLI. We are in a VS Code extension, which works in Cursor, Windsurf, and VS Code, obviously, and Codium, and it even works in the - what's it called? Firebase, the web-based VS Code version... So you can use it in all of those. You don't have to use a different editor, you don't have to use a different IDE.

\[28:16\] And what also is different to the others is that we have a server component, so all of your conversations, you can share with your team. They can see how you talk to the agent. You can share links to these conversations, you have a leaderboard, you see how many tokens everybody burns, and you see how many lines of code everybody generates... And that's been pretty nice. And that also resonates a lot with large enterprises, where I'm sure you can imagine -- well, maybe not; I was surprised when I heard this, but apparently, in large enterprises there's a big divide between people who've seen what these tools can do, and want to encourage the rest of the engineering org to use these tools, and people who are really skeptical. There's a big divide. And there's a big divide in how successful each of them is with these tools.

And when we show these customers - or potential customers - we show them "Look, with Amp you can share the threads, and you can share the prompts, and you can see what the results are", they go "Perfect. Then I can send this around and can show others. This is how I would prompt it. This is the trick that I use. This is how I set up this feedback loop", or something.

So yeah, that's roughly the overview. And the other meta thing to mention here is that we specifically started on Amp with the assumption that every week a model might get stronger and better, and stuff might collapse into it again, and we need to be prepared for changing our product again. Like, if you get Beyang on, the CTO of Sourcegraph, he said something that stuck with me a couple months back... He said, "In these times, when you build with AI, the old startup playbook of "Try stuff out, find product-market fit, scale it up", that playbook has worked for last 15-20 years, but maybe that's over." Because now, as soon as you find product-market fit, there's another huge technological change that might pull the rug out from under you. And you need to be prepared that you cannot say "We've found this. Let's scale this up." You need to be able to move with the technology, because we're in a phase of upheaval, phase of change.

And we tried to embrace this from the start, by saying - our products get out of the way of the model. The picture I use is built light scaffolding, wooden scaffolding around the model, so when the model gets better and bigger and stronger, the scaffolding falls away, and you again get access to the raw power of this model.

And yeah, that's the meta thing - keep it simple, be able to move fast, move as fast as you want, be able to -- I should have mentioned this at the start... We don't have a model selector. We pick the best model for the job, that we think is the best model for the job right now, and we are prepared to change this. So if tomorrow a new model comes out, we wanna be able to say "This is now the best model for coding." But we wanna provide the best experience, without the user having to select, you know, "Out of these premium models, low-cost models, fast models, select one of 18 for this given task. Now you need to activate ask mode, and then go into planning mode, and then go into execute mode." We wanna say "No, this is the best way to do this." And you don't have to worry about this, we pick the best model for you. Right now under the hood it's a mixture of different providers models, and we just wanna provide the best experience.

**Adam Stacoviak:** Yeah. When we talked to Steve, one thing that stuck out, I suppose, was the copy - the web copy, when I say this, the word copy - on ampcode.com. And it said -- I just can't believe some of the words that was written here... And this is Quinn, apparently, because I asked Beyang who wrote this, and he said it was Quinn. So there you go.

**Thorsten Ball:** It was me.

**Jerod Santo:** Oh, it was you?

**Adam Stacoviak:** \[32:08\] Was it you?!

**Thorsten Ball:** Yeah, it was me.

**Adam Stacoviak:** You wrote all this. Okay, so I'm gonna read your words then.

**Jerod Santo:** Okay. Now you're talking to the right guy.

**Adam Stacoviak:** Well, Beyang credited Quinn, and you're crediting yourself. Let me read the words, confirm that it is for sure you.

**Thorsten Ball:** It's awkward, but it's true.

**Jerod Santo:** Awkward, but true. I believe you..

**Thorsten Ball:** Let's get Quinn on the line...

**Adam Stacoviak:** Okay. It says -- and this is older, because the website has changed. I had to go use the Wayback Machine. Thankfully, that still exists... And I'm able to actually see back to like last month, or earlier this month, or something like that. So the heading says "Everything is changing." And it says "We believe programming with AI is going through massive changes... Again. The models yearn for the tools and tokens, we hold them back if we make them..." And this is kind of harkening to some of the things you just said... "We hold them back if we make them ask before they can change a file. Give them tools and tokens and everything changes. What we use them for, how we use them, how many we run at the same time, how they talk to each other, how they talk to you... What they even are. It's all going to change."

I'm not going to read the whole page, because we should -- it missed a few more lines. But really good copy, for one. Very profound. And then you mentioned how you and Quinn have been working on this, and kind of chatting back and forth, like "This is what it did today..." He says that, and you say that... What exactly are you doing with this thing to build this thing? Give us a glimpse into what it's like to have this be true for you, and put this to work.

**Thorsten Ball:** Yeah. So first of all, thank you for the compliment on the copy.

**Adam Stacoviak:** Amazing copy.

**Thorsten Ball:** This is a dramatic reading of my copy that I --

**Jerod Santo:** Yeah, does that feel good?

**Thorsten Ball:** Yeah.

**Adam Stacoviak:** It was really good. I mean, the reading, as well as the copy.

**Thorsten Ball:** Yeah, the reading was excellent.

**Adam Stacoviak:** Can I read the rest of it, actually? Now that I think of it, there's only a few more lines...

**Thorsten Ball:** Go ahead.

**Jerod Santo:** Finish it off, man...

**Adam Stacoviak:** Yeah. It says "It's all going to change. Amp is embracing it." So that's what Amp is. "Our way of keeping up? Shipping.

We add and remove every day. We're building for where these models are going. If that means Amp will look completely different in three months, so be it."

It's like this -- it's almost like a rap song. It's like this anthem against this \[unintelligible 00:34:21.07\] away. And it goes on to say "If you want long-term support and the same UI in 2032, if you want to spend a maximum of 20 bucks per month, Amp is not for you. If you want to find out where this is all going, come with us." And then it says "Read the manual." I think that is just like so cool. It's like, you're going off into this sort of like Burning Man journey, in a way. It's like, I don't know who we're going to be when we come back, but we're going on this journey, and we're opening the flood gates. We're letting go of all the restrictions, and what happens, happens." Is that kind of what's going on?

**Thorsten Ball:** Yeah, I think -- so I didn't have a rap song in mind. It was more like '60s, like the Rolex copy, or whatever... You know, like the magazine advertised. But I think this "Come with us" thing builds on this idea that we've had, that is -- you know, I said this to Quinn and Beyang, that I want to spread excitement and curiosity and the joy of discovering these new things. And if people want to come along and they are open-eyed and are also excited by this, let's pull them along. Let's explain how this works, and let's -- don't act like this is something that nobody else can do, and it's magic... "You wouldn't even understand. Just click Run Agent, and accept what the agents do." No, no. This is a tool by professionals, for professionals, a power tool, and you can understand how it works, and I want to show you how this works, and I want to pull you along, which is also where the blog post comes from.

\[36:04\] The subtitle of the blog post is "The emperor has no clothes", because a lot of the copy from other AI software is this "AI, magic... It knows everything about you... It's going to replace you, and it's going to replace your job, and whatever you're doing." And for me, the fascinating bit is that these are incredibly powerful tools. Let's figure out how to yield them, let's figure out how to make real use of them, and just... Come along, let's use this. Everything is changing. These are incredible tools, that will change software in the next years tremendously. Let's come along.

And to go back to your question, like "What does it look like in practice?", when Quinn and I started building this -- so Amp started out as the VS Code extension, and it's written in a standard web stack, in VS Code, the sidebars is usually a web view, so in our case we use Svelte for this... And what we would do is we would hack on this -- and we started with the normal... Like, what everybody knows - the user message, the assistant message, tool calls... The display of this. And then, for example, we would add a new tool call, like say "format file". There's even a video recording of me and Beyang doing this. You add a new tool and say "The agent can now format files." And then in the UI, it would show up as just an unstyled JSON message, like, "Tool, format, file, arguments." And then you would go "Let's see if the agent can build me a nice-looking component for this." And then I would take a screenshot of this thing, and I would open a new conversation with the agent and say "Can you make this look better? It's this tool call, and here's all of the other components that we already have. And also, check your work by opening this URL." And then what the agent would do is it would go "Oh, let me look at these other components. Oh, this is how tool calls are displayed, by using these components. Let me look at this. Oh, so it's missing this. Let me add a new component. Let me add a storybook entry. Let me open the storybook in the browser. Oh, here's a screenshot. Now it looks good."

And then you're sitting there, and you send a message to Quinn and you go "You won't believe what just happened...! It used the browser and took screenshots, and then it ran into an error and it figured out how to fix this error, and it got the diagnostics..."

It's just this excitement of seeing -- when you put it on the right tracks... An image I use is that you cannot just scream at an agent and say "Fix this issue that I have." What you have to do is you kind of have to set some rails, and say "Here's a file. Here's an example file. Here's how you get feedback about your work. Here's the command you have to run to get linter output or compiler errors, or whatnot... Go and do it." And then it goes off and it will run into obstacles and issues, and it usually will jump over those hurdles. And it then comes back and says "And here's a new component."

And there was another thing where -- we at the same time started sending so many DMs back and forth, that I was on a bike ride, and I was listening to another podcast, and they were also talking about agents... And I'm like "Oh yeah, we should do this, and this, and this..." I got so excited I stopped the bike and I sent Quinn a message. We should record a podcast, just to share this excitement. So also on ampcode.com we have six episodes, I think, of podcast, where we just talk about what we do.

And in that first episode, I described something that I also couldn't shut up about. And that was - I was working with Amp on the right as the assistant on Amp itself, and I was refactoring some tests. And what I was doing was, you know, standard TypeScript tests, with like this describe, and test, test, test, test... Pretty repetitive stuff. So I started refactoring these tests, and back then we didn't have Amp tab, which is completion... And I was like, I wish I could have recorded what I just did to five of these eight tests, and then say to the agent "You now do the rest."

\[40:20\] So I started to type out a prompt to the agent. I said, "I want you to rebuild the feature that records the keystrokes. Like, once you hit Record, it should record the keystrokes that you make in the editor." And then when I stop recording, it generates a prompt, and sends it to the agents. It's like "Here's all of the keystrokes I just did. Go and finish the work I was doing."

And I sent this off to the agent, and the agent went off, and as they say, one-shotted it. It went off and it actually built something... And I was like "Surely this isn't gonna work." So I've pulled up the debugged build, I start modifying -- no, I start the recording command, and it shows like a little recording icon in VS Code... And I was like "Okay, cool... But now it's gonna fall apart." So I started modifying the tests again. I changed two out of eight tests. I hit recording, and it says "Recording stored." Surely, now it's gonna break. So then I hit this other command that it added to add the keystrokes to the agent and say to the agent "This is the edits I just made." And I hit that button, and at that moment I realized that what it did was a pretty naive version. It truly recorded every keystroke. Not as a diff, but truly like T-E-S-T, new line, Return, all of this. And it sent like 60 lines or something, or 160 lines of just keystrokes. And I was like "Yeah, what the hell?" And I send it off to the agent, basically saying "You know what I just did?" And then it's 160 lines of keystrokes. And it came back and said "I see you're trying to refactor these tests to switch from assert to expect. Let me finish up the rest of the tests."

**Adam Stacoviak:** Get out of here...

**Thorsten Ball:** And it went and did it. Yeah, exactly. So then I sent Quinn a message, like "Dude, we've gotta record the podcast. This is crazy."

**Adam Stacoviak:** \[laughs\]

**Thorsten Ball:** You know, is this something that you would use every two minutes? No. Is it like a little feature that I built in 50 minutes? Yes. Is it amazing? 100%. The ability that you can just build a tiny feature by just describing it roughly, it comes back and it works... And then this mind-blowing thing of sending 160 characters, and then you realize "Yeah, they are somewhat like us... But they're also not."

**Adam Stacoviak:** They...

**Thorsten Ball:** They can make sense of 160 characters, and say "Okay, this is what you're trying to do here."

**Adam Stacoviak:** Couldn't you make the same sense as a human, though? I know this is amazing, I'm not arguing against this... But what are you arguing for by saying they can comprehend 160 lines of code?

**Thorsten Ball:** Well, as a human, yeah, you could. If I give you 160 lines of one characters, you could.

**Adam Stacoviak:** For sure. It just takes a little longer, maybe.

**Thorsten Ball:** It takes a little longer, that's what I'm saying. But that's the other thing, where you can sometimes just paste some error messages in that are not formatted. And if you do this with a human, they're like "What is this?" And then you realize, "Oh, it's one file path broken up into four lines, and not four separate", whatever, stuff like this. And for these models, it's not an issue.

**Jerod Santo:** It's like their bread and butter. That's what they're good at.

**Thorsten Ball:** Yeah, yeah. Making sense of text. And then the other thing is you can sometimes send them like the ROT13-encoded text or something, and talk to them in that...

**Jerod Santo:** Just to troll it, or why?

**Thorsten Ball:** Yeah, but they get it. Sometimes they get it, and they're like "Oh, this is ROT13-encoded", and reply also encoded back.

**Jerod Santo:** Oh. It's a trollback.

**Thorsten Ball:** They're really like us in some sense, but they're also strange...

**Jerod Santo:** \[laughs\] "You're going to encode your question? I'm going to encode my answer."

**Thorsten Ball:** Yeah, exactly.

**Jerod Santo:** "Let's see you do what I just did."

**Thorsten Ball:** "How do you deal with this?"

**Jerod Santo:** Yeah.

**Break**: \[44:07\]

**Jerod Santo:** Let me ask you this... You said earlier there's this divide in the enterprise. And for lack of a better term, let's just call it believers and unbelievers. So you have the bulls and the bears. And of late, on this podcast, we've been just \[unintelligible 00:46:17.08\] Yourself, Chris McCord was just on the show, he's into it... Obviously, Steve Yegge, he's into it... Chris Anderson, who's got Vibes DIY, they're building a vibe coding thing... All these stories are in alignment. But there is a lot of people that are super-skeptical, for various reasons. And I can list off what I think are some reasons that I've heard, but... You said with your enterprise customers there is this inside enterprises like skeptics and believers... What's the skepticism's argument that you're hearing? Maybe if you could steelman it for them and not just dismiss it, but... Like, what are the skeptics skeptical about inside the enterprise about these tools and their future?

**Thorsten Ball:** I don't want to distinguish between enterprise and whatever... Let's just say in general, I think -- I had a conversation last year at a Rust conference in Italy with a senior engineer who has done some amazing stuff in the last 20 years; apparently a crazy good programmer... And back then I was working on Zed, and talking about the text editor, and he's like "So you have AI features?" And I said "Yeah." And I knew, by the tone - not a believer. And he's like "Can I turn them off?" And I was like "Yeah, sure you can." And then I said "Have you not played around with it? Just curious. Have you not played around with it?" And he's like "Ah, well, I played around with it a year ago, two years ago, and it just gave me back garbage." And I'm like "What did you use? ChatGPT?" And he's like "Some website." And it stuck with me... It stuck with me so much that I wrote a whole blog newsletter post about it, because it was this -- there was no interest at all. There was no curiosity at all. It was just "I tried it once, it doesn't work."

So I think there's a lot of -- I don't want to say willful ignorance, but I think there's a lot of ignorance where people have kind of tuned out all of this. And just like some of us have tuned out crypto, or whatever it is, blockchain in general, you know... And I think some people have just tuned this out, and whenever AI pops up, their eyes get blurry and they just ignore what's next. And I think that's a big thing, that some people just -- it's not like they looked at stuff and thought, "It's not for me", they just don't realize how much has changed in the last few years. And that's one part that I see.

And then the other thing is that some people describe it with the bell curve meme, where the junior engineers get a lot out of it, because they don't know that much, so the AI takes care of a lot of stuff for them. They never have to learn how to center a diff with CSS; you know, nice...

And then on the other end of the bell curve is the senior engineers get a lot out of it, because they know a lot, and they basically know how to review what the AI is doing, and they know where the pitfalls are, and the trap doors, and what tests to write, and what not to do, and how to architect the thing. So they're like "Hey, nice. I don't have to type all of this. I know what goes in this file, I know what goes in that file... I don't have to do this."

And then there's the middle part of the bell curve, where it's the engineers who are trying to get better at what they're doing, and they wanna learn all of this, and they are not, I think, comfortable with "Agent take the wheel" kind of thing. They're like "I don't know what's going on here. I wanna know what's going on. I don't know/understand this", and they get skeptical. And that's also what a lot of people describe in the enterprise.

\[50:06\] And then the third problem is that it's something you have to learn. Like, you have to get better at this. The first time you try an agent, you won't have amazing results, possibly. On a small scale, yes, but some people do crazy stuff, but others will fail. And I think there's this problem that -- all of the hype and marketing over the last few years hyped it up as "You just say build me a website" and it's gonna look amazing. And the expectations were made so high that now some engineers try this stuff out and they go "Fix this distributed database. Oh, look, it doesn't do it. It doesn't know how to fix a distributed database." And so they bump up against these expectations, and then they're kind of let down when it doesn't work on first try, and then they give up.

And what Mitchell Hashimoto recently said, I think last week, he's like "When have you ever become more productive with a tool after using it for just a single day?" You have to put some effort in. You have to get better at this. And I think that's a problem. These models are anthropomorphized, which is also what I've been doing in the last hour, right? I'm at fault. And talking about intelligence, and "the agent", and whatnot.

**Jerod Santo:** Right.

**Thorsten Ball:** And there's this mode of thinking where "Well, these things are smart, and these are like humans, and these are close to AGI", and whatever else somebody somewhere says... But the reality is that these are large language models, based on a transformer architecture. They have a certain way of taking the context that you put in and producing something.

And they cannot do everything, they don't know everything. You have to know about what goes into the context, and what shouldn't go into the context to not derail them.

So there is a learning curve, but it's not something that somebody tells you on the website, you know? Like "Hey, you've gotta learn this", you know? Because nobody says "We have a learning curve. That's amazing." Those last 20 years of software has said "Learning curves are bad", you know? Same as a Vim user, you know? Like, learning curve's \[unintelligible 00:52:21.01\]

**Jerod Santo:** Do you even use Vim anymore? I hear the IDE is dying. I mean, don't you just let Amp take the wheel?

**Thorsten Ball:** Yeah. Yeah, yeah, yeah. That's a hot topic. \[laughter\]

**Jerod Santo:** I know it is. I've been bringing it up nonstop.

**Adam Stacoviak:** Do you use Vim or not? Yes or no?

**Jerod Santo:** Yeah, exactly.

**Thorsten Ball:** Not anymore. I use Vim mode in VS Code. But honestly, I don't type that much code by hand anymore. It's truly crazy. I mean...

**Adam Stacoviak:** Say that again. Say that one more time, clear.

**Thorsten Ball:** Okay, so the journey in some sense of the last one and a half years was that I worked at Sourcegraph, I wanted to try something else... I wanted to go as hardcore programmer as I can. And I went to Zed, and we built a text editor in Rust from the ground up, with our own GPU framework, and whatnot. Truly some of the best programmers in the world work in that team. And it's truly an amazing product, it's an amazing codebase. I feel like I've reached the core of what programming can be.

But then over the year, with AI getting better, and then trying out stuff, like back then CursorTab, where I was sitting down and I just want -- we were building the completion for Zed, so I was working on that, the tab completion, the fancy AI completion, and... Figure out what the competitors are doing, you know? So I tried out CursorTab. And I was sitting there, and I would change a switch statement or whatever it was, like some repetitive thing, where back in the day I would have been so proud to pull out an amazing, impressively good Vim macro... And I would just start typing a console log or something in one of the switch statement cases, and it would say "Oh, you want to add this down here too?" Tab. "You want to add this, too?" Tab. Tab, Tab, Tab, Tab, Tab.

\[54:24\] And I hit Tab 10 times and it had the whole thing. And I sat there thinking, "Damn this is faster than I will ever be." Like, all of the Vim "I'm going to use Colemak, and I'm going to use Quickscope in Vim", and blah, blah, blah... You now have models that are faster than you at doing this.

If you have like a CSV file or something, and you, I don't know, remove the last column... I would have done this - selecting normal mode, jump to the end, delete, blah, blah, blah; or a macro, and repeat it for 990 times and whatnot... Now, with these models, you could just remove the first column, second column it would go "Do you want to remove all of the columns? The last column?" Tab, Tab, Tab. I was like, that's crazy. That changes a lot of things.

And then I worked on the Zed completion and we built this ourselves and I realized "I'm not an ML guy", and Antonio, the guy I worked with, he's maybe the best programmer I ever worked with, but he's also not an ML guy. But we could build something of equal quality as CursorTab was. And I was sitting there thinking, "This truly is going to change a lot of stuff." Like an open source model - you can use a Qwen, or DeepSeek, or whatever... If you can turn this into a completion model that edits code faster than somebody who's really good at Vim (myself), if it's faster than I can be... That has to change stuff. That has to change stuff in dev tooling. And then after that moment, I had this thought of -- I don't know how to phrase this in a way that doesn't offend anybody, but...

**Jerod Santo:** Go ahead.

**Thorsten Ball:** This thought of...

**Jerod Santo:** Offend away.

**Thorsten Ball:** Yeah, am I working on a horse carriage? Like, by working on a text editor. Am I working on a--

**Adam Stacoviak:** Oh, dang...

**Thorsten Ball:** I don't mean it to -- but it's just this like...

**Jerod Santo:** \[laughs\] It's a really good text editor though, you know? It's really good.

**Thorsten Ball:** It's an amazing product, but it's just this -- I've worked in the Vim mode with Conrad at Zed, and all of that stuff, and it's amazing.... But then you're like "I want to be efficient, at the end of the day." I'm not somebody who loves programming and being fast at stuff because of macros and key bindings. I like doing stuff fast. Like, I like being efficient. And now suddenly I realized that all of my Vim macro stuff was kind of invalid, because I could just Tab, Tab, Tab in another editor to get rid of this brute force, whatever, chores. And that changed a lot of stuff. That changed a lot of stuff with how I look at developer tooling.

And then basically, just to round this up, I looked at different other companies, and talked to different other people, and then I ended up coming back to Sourcegraph because I talked with Quinn, and I told him everything I just told you, and I'm like "Dude, everything is changing." He's like "Do you want to come build the future here? I agree with you, a lot of stuff is changing."

And now I'm working in VS Code, which I've never wanted to do, and I don't like VS Code... Like, aesthetically, I don't like it. I also realized I don't care that much anymore. And then I thought "Am I the leper here? What's going on?" And then I talked with a bunch of other people, colleagues at Sourcegraph and people I met in San Francisco, or at conferences, and they use Amp too, or they use Cursor, Windsurf... And there was at least five of them that said "I was a hardcore Vim person, but I switched to using VS Code/Cursor/whatever, because I realized it's just a 10X multiplier, and the other stuff doesn't matter that much anymore."

\[58:12\] And if you were to ask Primeagen, or TJ, or whatever, they would give me \*bleep\* for saying this, of course... But I had this feeling, and a lot of other people have this feeling too, that the age of fast mechanical movement in an editor - it's kind of over when you have these models that are much faster than you. And when you project that out in the future, that these things are getting faster and cheaper, and that maybe surely you will have this running on your laptop... And then it's like, instead of having your Vim key bindings, and Colemak, and a split keyboard that you can put up vertically, or whatever it is, you just talk to your computer... Maybe, I don't know, but...

**Jerod Santo:** Sure.

**Thorsten Ball:** Yeah.

**Jerod Santo:** It goes back to your bell curve...

**Adam Stacoviak:** Well, I was gonna say, you said horse carriage... I kind of want to come back there; not to like slap the offense on there, but to really think about that, though. You have to think about -- I'm trying to do this in the moment. I'm trying to like listen as a podcaster would, and I'm trying to think about where we can go, and I'm trying to think about this idea too... But what you had me thinking about really is "What do I do today?" Automatically, go to the easy choice, because that has become the 10X multiplier in my life. And I think the easiest response would be vehicular movement. How do I get from A to B? For example, I took my kid to -- he's in golf now, and he went to a camp today. I didn't walk him there. We didn't get onto our horse carriage with horses and go there... Although distant family members may have done it that way.

**Jerod Santo:** Sure.

**Adam Stacoviak:** No, we got into our new version of the carriage, which is called an F-250. It's still -- it's a diesel truck, but you can't modernize that quickly and that fast. But we got into a vehicle and we went back and forth, from here to there. I didn't think about or cry about the fact that my grandfather, my great grandfather may have traveled via horse at one point. And they loved it, because of the nature of the care of the horse, and all the things that go into, the pasture, and all the pure things that are beautiful. It doesn't take away the beauty, but it changes the utility of day-to-day life. The utility of me maintaining a pasture with space for my horse so I can go from A to B is over. That way is over. Right? There's no one doing that. I now take a vehicle, and that's just how it is.

And so that's what you had me thinking, this most obvious thing of like - I would never go back to the way... Or maybe I would if I could retire, if I had a few money, and it's like "Yeah, now I can afford the pasture, and I can take horses everywhere, because time doesn't matter", you know? Maybe that's a different kind of thing. But yeah, the obvious answer is a vehicle that moves faster, because that's the way of the world.

**Thorsten Ball:** I think that's a good point. There's a generational divide, too. And I forgot to mention this, but also last year I gave a talk in Munich at -- something from the university. Basically, there were a lot of people much younger than me hanging out at this meetup. And we started talking about AI... And you know, back then - I'm sure you could confirm this - a lot of hand-wringing about "Is it pure programming? Is this still programming when you use Cursor, and these other tools, and Cody, and Windsurf? Is this real programming? Do you unlearn stuff? Do you get dumber by doing it? Do you really learn it the right way?" All of this, and "Is it not artisanal code if it's not written by hand?"

\[01:02:05.12\] And I talked to these young people at this meetup and I realized they don't care. That's over for them. They never think "My code is not real code because I didn't use Emacs to write." They just use the tool available. And they would tell me "Oh yeah, I organize my docs in this way, so I can use Cursor to pull in this whenever it needs this, and I also have this library of these rules, and I organize my files like this because then it's easier to do this..." And they didn't even spend two seconds thinking about "Is this the right way to do this?" It's just the way they now program. They grew up with AI. And if they cannot get this out of their editor, they ask ChatGPT, or Claude, or whatever, and they ask stuff here.

\[unintelligible 01:02:53.00\] made me realize that \*bleep\*, maybe a lot of this hand-wringing is just like old man wondering about the clouds, you know? Like, is this still true programming? It turns out younger people don't care, you know? And it felt like somebody in 1965 "Oh, the electric guitar - is this real music, if it's not a violin, or something?" It turns out the young people don't care. They don't wanna hear it. They moved on. And that's how I felt about a lot of stuff there.

And yeah, like you said, it's a generational thing. And if you're the young generation... I mean, go to any 20-year-old at university right now studying computer science, or programming in their spare time... I will guarantee you they use AI, and they don't bat an eye about it. Like, they don't worry about "Is this true programming?"

**Adam Stacoviak:** Okay. Here's something visual for those tuning in via video and they can see me. What am I doing here? What is this?

**Jerod Santo:** You're calling somebody.

**Adam Stacoviak:** Taking a phone call. What is this? Or maybe this, since it's like a real object. This is taking a phone call, to folks these days. This is not. And so there's a generational divide. It's like, that is not the way the phone operates anymore. The phone has moved to this other thing, that is not connected to a line, to the house. It is now free range, and roaming to wherever you go, and it's personalized. The phone has changed even. So as much as we wanna stay in the past, the future comes no matter what. Time is linear, we cannot stop time. We're only in the -- we literally only have this present moment. The past is gone, we can't change it, because all we can do is this moment, and the future is coming, no matter what we do. That's how time works, by the way... \[laughter\] Is this analogy -- and what I mean by doing that gesture of the phone and not the phone is that what if writing code or being a software developer is not in Vim anymore? What if it is not in even VS Code really that much longer? What if it's in a version of what these tools are evolving into? You know what I mean?

**Thorsten Ball:** Yeah, I 100% agree.

**Jerod Santo:** It hurts if you have a Vim tattoo though, you know? \[laughs\] I mean, I kid, but there is an identification factor which is actually baggage to change, is that identification. Just like we identify perhaps with the music of our youth or our formative years and not the current music. There's an aspect of that because so much of what we do with our computers is who we are, and what we care about, and we can express that through our tool choice, our editor choice... And that's why there are flame wars, because like, who really cares? Well, we do. Why? Because we're the kind of people who care. And so of course we're going to care when you call Vim or Zed a horse carriage, for instance. Like, yeah, you didn't want to offend anybody, but it might be the case.

\[01:06:19.24\] Now, there's also rational skepticism, that I think comes from being around enough to see a lot of fads come and go. And I think if it weren't for my particular perspective through this podcast, I would have written these things off pretty early myself... And you could probably go back, if you had copious free time, and like track my change of mind throughout episodes... Because the results I was getting early on were really bad, and I was like "This is not useful. This is a distraction. I'll just keep coding." And it came through like prolonged exposure and progress to actually get to the point where -- I think it's just recently I'm like "Yeah, this is amazing. The mind blow is happening." But I could have easily just been like heads down, going back to my work... Because I've seen a lot of things that are quote-unquote promising, or game-changing, and they weren't, you know? And so that's part of it. I'm just going back to some of your thoughts around resistance, Thorsten, and people who are not on board yet.

And then the other one is the -- you went to the bell curve, and that... I think they call that the midwit theme, or midwit meme, where like the one in the middle thinks they're like the smartest and has the worst take. It's like the junior gets it for a different reason, the senior gets it, and the middle ones don't get it. And I think in this particular case it's because of the skills. Like, Vim is a skill. And you put a lot of effort into learning that. Maybe it was easy for you, but for most people it's not easy... And so there's some sunk cost fallacy there, like "Well, I've worked really hard at these skills."

And if you look at that bell curve - well, the junior doesn't really have any skills, so they don't care. They're like "Cool, this helps me do stuff I couldn't do." And the senior, I think, if they are continually curious and self-aware, they realize that the skills are a means to an end, and really what they're about is the end, and they can also get to the end better, faster, stronger with this tool, versus the ones that they... I mean, I know Vim. I've spent a lot of time learning Vim. And yet, I don't identify myself with Vim, and so I can just set Vim aside when I think that it's no longer the best thing for me to do the thing.

But when you're at the peak of that bell curve, you've spent a lot of time, a lot of money, a lot of effort maximizing your engineering skills... And so it's the hardest for you to say "These skills aren't actually all that useful anymore, all that valuable." And I think that, for a lot of us, just hurts.

**Thorsten Ball:** I think there's a lot of identity wrapped up in this. Like you said, people identify with "I'm the guy who never has to look up a method in Rust. I'm the guy who knows all of the syntax. I'm the guy who's really good at Vim." And to use that example again that you brought up with the senior engineer... I mean, I guess you can confirm this - as a senior engineer, there's these moments where you realize that the code does not matter that much. Like, what matters is also the marketing, and the business, and the team, and how you ship stuff.

**Jerod Santo:** Right. There's so much more to it. Like, it matters, but there's so many other things...

**Thorsten Ball:** It matters, but you realize that code might be a liability even, and whatnot. And that same curve, I think you can go through over time when it comes to tools, where you're like "Well--" I mean, I had this experience early on. I was pretty good and fast in Vim, super-proud of it, and I thought "Everybody who is a really good programmer has to use Vim", and whatever.

\[01:10:02.27\] And then I had a senior colleague and he used Sublime, and I don't think the guy has ever configured any keyboard shortcut ever in his life, and he was still incredibly fast... And he did a lot of amazing stuff, and made a lot of smart decisions, and he was a senior engineer for a reason... And I realized maybe that's not the differentiator.

And I think there's a lot of this going on, where right now people are running around with AI as the sledgehammer to hit people over the head and say "This is over. What you've put a lot of effort in is not worth a lot anymore." And to some extent that's true, to some extent that's harsh, and you have to empathize with people... But I also went through it. I struggled with it for a long, long time, you know. I get it.

**Jerod Santo:** Yeah. I think what we have to recognize in order to accept that harsh reality, but also overcome it and really leverage it is that it's not that our skills are useless, it's that they've lost value. But because of where we've been as engineers, we are well positioned to leverage the new tools better than other people. And to adapt quicker, and understand when things do go wrong, what went wrong. And like help the agent better than a neophyte could help the agent do its thing. Even though it's pretty good, you just tell it what you want and it's getting better, you know... But I feel like skilled people can adopt new tools, as long as they don't have the baggage that we're talking about, probably more effectively than people who don't know how to use tools at all.

**Thorsten Ball:** Yeah. There was this amazing Kent Beck quote that popped up, I think yesterday or a couple of days ago, in the Pragmatic Engineering Newsletter. And I think Kent Beck said this even two years ago about ChatGPT... And I'm getting the numbers wrong, but I think he was saying that "Oh, I just realized that 90% of what I can do as a programmer is now worthless, and the other 10% have just gone up in value by 100x."

**Jerod Santo:** Exactly. Yeah, he drills it.

**Thorsten Ball:** Yeah. And it's this - a lot of the mechanical stuff, like "Which framework do you configure, how, and what goes into which config file, and how do you type this, and how do you do that? How do you construct an FFmpeg command? What command line arguments?", all of that stuff... Pretty worthless right now. But what to build, and when, and how to, say, organize it, how to architect it, what dependencies to pull in, what pitfalls to avoid, how to build this for future use - all of those meta... Or let's say engineering skills. It's about trade-offs, it's about making decisions of how to build something under a set of constraints... That's now super-valuable. Like, that's the multiplier now; not how fast you can type.

**Jerod Santo:** 100%. Analog to this, I just told this to my kids this morning, because of course, as parents and teachers, we're trying to figure out how to approach these new things as well... There's a lot of upheaval in school systems right now. I mean, it's a mess out there. There's a lot of cheating that's just way too good to keep up with the cheating detection tools... And what I said to my kids, which I think applies specifically to our work as well, is there's a big difference. It's a small delineation, but there's a huge difference between using AI to help you think, and using AI to think for you. And if you're using it to think for you, then we're headed towards idiocracy, and you're not going to make it. Like, you're going to be one of those. But if you're using it to help you think, now you're basically just a superhuman. And I think when it comes to coding, it's very similar. We do have to be engaged and be making those decisions and judging the results, and doing all the things that are unique to us, and our context, and our business goals, and the things that we know... Because the coding agent just knows what you tell it to do, and it's going to do its best to get it done; and it'll probably do it better than you can do it, but it can't decide what to do. Not yet. We're not there yet.

\[01:14:27.26\] And so use these things that help us build way better than we could before, versus just building for us and just being along for the ride. Even though it does feel like a ride along the way, which is kind of why it's fun, right? You're like "Wow, it's just happening."

**Adam Stacoviak:** Yeah. I mean, \[unintelligible 01:14:42.22\] I was just arguing back really just to this idea -- maybe to the Vim folks who have the tattoo, and all that...
**Jerod Santo:** You're just picking on the Vim folks...

**Adam Stacoviak:** It's like, you can still SSH into a machine today.

**Jerod Santo:** Sure.

**Adam Stacoviak:** It's not common to do it. You usually you use a CLI to do it, and at some point you'll have an agent use a CLI to do it. Or maybe today you should be doing that. But SSH still exists. You still have a username and login, and you can still control how you access a Linux machine. It's just not common. It doesn't mean that you can't use Vim anymore. It doesn't mean that those skills go by the wayside either. Or even nurturing and curating your Vim file. Those are still truths, but they just live in a different world now, where that used to be a productivity tool for the Ultra X programmer, and now that version of a programmer is sort of flatlined in a way, because the agent can go faster than it, in a way. Or the person controlling babysitting, as Steve said, babysitting the agents. And Thorsten, you didn't describe it as that. You didn't seem like it was tedious toil. Maybe Steve's in a different realm than you are, but... I think of it like that. It doesn't mean that Vim doesn't exist, or that SSH doesn't exist. You still SSH into a machine. It's just Kubernetes orchestrates your sea of machines, versus you individually doing that, and SSH-ing into each one of them and provisioning them. That's just like not how you do it now. It's just not the way. So SSH still exists. Vim still exists. It's just used differently.

**Thorsten Ball:** I think what you're saying also touches on something else, which is that in these discussions a lot of stuff gets thrown into one bucket, that is programming. Will AI be able to replace programmers? And I think people need to understand there's a thousand different types of programmers out there. There's a programmer who works at Big Tech on distributed systems, there's a programmer who works at a hardware company on embedded systems, there's a programmer like me, who works on dev tools, and there's programmers with web stuff, and people that work in agencies. And I live a small town in Germany. If I would try and go meet the hundred programmers closest to me, most of them work in companies that are not software companies, and they modify old Java programs and whatnot. And some of them do WordPress websites.

And I think when we say it's gonna change a lot of programming, and then people push back with "Oh, it cannot modify the storage layer of Postgres", and it's like, "That's not what I mean." But what I mean is that every day, 10,000 of times, somebody gets a phone call to call somebody else to say "Can you change this on our WordPress website?" And that person who makes that change - maybe he's called a programmer, but he needs some skills to do this... And I'm thinking that a lot of this will change in the future. Maybe not in the next four, six, eight, whatever months, but a lot of the stuff on the fringes will change heavily.

\[01:18:09.05\] And to come back to your point of SSH into a machine - when the cloud got big, a lot of people were saying "Oh, the cloud is just another computer. It's not different. We will always have sysadmins. We will always have sysadmins that administrate those machines." And yes, we do have sysadmins still. In 2025 we still have sysadmins.

**Adam Stacoviak:** Yeah, they just graduated in different areas.

**Thorsten Ball:** Exactly. And if you look at the number of job postings that hire for sysadmins, I'm pretty sure that's changed in the last 15 years. And I think some of those changes will happen to programming. I don't think you will find the same amount of -- in Germany it's called a web designer, or frontend developer... People who build websites for a living, for like companies and whatnot... I think a lot of that might change in the next couple of years. But if you work on a distributed storage layer at Google, an agent is not gonna take your job in the next two years. Probably not.

**Adam Stacoviak:** Yeah, if you're working on like really edge, fringe, R&D, those are areas that are more protected. I would say if you're in the 80% realm, where 80% of the development is done by a common, hireable, typical developer these days - that job is probably more in jeopardy of either getting compressed, or agentic, and you become a babysitter, and you have taste and curation and humanistic tendencies, which is like care, and humanity... You know, things that thus far machines can probably reason it, but not really feel the way we feel it. Those are still traits and qualities that remain, you know...

It's such a wild thing to think about how this is changing, though. Even in the moment - this podcast is for software developers, okay? Just in case you didn't know that, listener...

**Jerod Santo:** And agents... \[laughs\]

**Adam Stacoviak:** You're a human. This is not a podcast for robots... Yet.

**Jerod Santo:** Jinx.

**Adam Stacoviak:** So... That's a profound thing to even think about, too. I've been thinking too about the kind of code you're writing. Have you been amping with Amp? Can you kind of give us maybe a more clear picture of the behind the scenes? Because I asked you for that and you kind of alluded to it, and you basically described what you did, versus literally how it looks. What it looks like to sort of like write this level of code... It seems like I would describe your job today - maybe not the R&D version of Amp and where you're taking that platform, but your job as a trained professional software developer... You're not writing code these days, you're trying to generate as much code as possible, and solve as many big problems as possible. Is that pretty accurate to what you're doing?

**Thorsten Ball:** Well, I guess my title is still software engineer, and I wrote this other blog post about how I use Amp that's also on ampcode.com, that kind of goes into this... And I think the bigger picture idea is that -- I call it paint by numbers programming. So that means my job as a senior engineer is to think of "How will I implement this?" And then what I have constantly running in my head in the last few months is "Will the agent be able to write this code for me? Can it do this?" And if the problem is too large, or there's a lot of implicit knowledge in my head that I couldn't write down, or it's too cumbersome to write down, I go in and paint by numbers programming, I put in the lines. I say "I want this file, and this file, and this new service, and it should have these methods, and it should do this and these arguments. Please write this code for me."

\[01:22:08.03\] And on a practical level, I think 50% - or more; say 60%, 70% - of the code in our codebase, which is standard TypeScript, Svelte, SvelteKit, a standard-looking codebase, a lot of that is generated. And a lot of the, say, load-bearing parts, the stakes in the ground parts, where you say "This is the architecture, these are the central pieces", that has been kind of written by hand or revised by hand... But I'm gonna guess, I would say the test suite, 90% of that is generated. Like "Oh, cover all of these cases." Then we have a storybook that is pretty long by now, which is just a web service website that shows all of our UI components, the Svelte components, and it shows them in all of those different configurations. "Show arrow two. What's the active state? Is it active/deactive?", all of that stuff. So you have one page and you can see one component in all of the different states. And imagine an activity indicator. It can be blue, red, green, or idle, or whatever it is, and it has a tool tip. So when you develop this, you wanna see "What does it look like in all of those different states?"

What I previously would have done is create the storybook page, create one version of this, create some mock data, do some Vim stuff, duplicate the mock data in like different states and different configurations, and then render it, or put in other terms. You have a test suite, and you have some mock data, like "Five different users. One user is deactivated, one user is activated, one user is an admin, one user is a group admin", or whatever it is. And previously, you would have used your editor to duplicate that information multiple times, or you write other helper scripts to remove the code duplication. But what I'm doing now with the agent, when I wanna do like tests, or storybook, or whatever, I'm like "Here's the component, here's where I wanna render it", or "Here's the tests that I wanna write. Go and type out this code for me." Most of it is not super-smart; it's not coming up with amazingly new algorithms, or whatever it is, but it's just the chores, and this -- just typing, you know?

And one other thing that people kept saying is that I didn't realize how much dumb typing I did while programming. We've all heard this, "Oh, thinking is the bottleneck. Typing speed doesn't matter." But then you're doing it and it's like "Okay, yeah, fix the import statement. No, add that missing import. No, no, no, align this. Autocomplete this", blah, blah, blah. There's a lot of typing still involved, and that's what I try to get rid of. I don't try to get rid of the thinking part, like you put it. It's more that I know what the structure is, please write out the rest for me.

I'll give you a concrete example from two hours ago. I have two components in the UI, and they should do the same thing. One of them has two buttons, and the other one has one of two buttons. And I'm like "Why are they inconsistent?" They both should have these -- let's call them sign in and sign out buttons. One only had sign in, and the other had sign in and sign out. Dumb example, it doesn't make sense; it should be the same button. But you get the point, two buttons. And I was like "Okay, if I do this, then I have to duplicate the code from here, update the import statements, adjust this, make sure that this is Flexbox aligned, and it renders correctly, and adjust the height of this, so this button..." Blah.

\[01:25:55.17\] So I say "Agent, this component has one button, this component has two buttons. The first one should also have two buttons. Please make it happen." And it looks at both components, it figures it out... It's not a hard task. It copies it over, and 20 seconds later it's done. And I didn't have to type this out.

And that obviously goes -- that's one of the smallest examples. And what I did earlier today was I built -- I wanted to have some... I don't know, let's call it a testing script, where I have like a bunch of data, and I wanna go through the data, and for each piece of data I wanna run it, send it against the API and see what comes back. And because I noticed that my feedback loop is "Start up the dev build, try this out manually, hit the button, do this", I'm like "Ugh. I could build a tool where I can do this 50 times in a row and see all of the results on the same page." And half a year ago, I would have never attempted to do this, because I don't wanna build another thing, and type out 300 lines of code, and I would need to figure out how to do a three-pane layout... But then I was like "I can generate this." If I say "Here's the data in this folder, here's the API. Give me an ability to put an API key in, and then render me a website with a three-pane layout where on the left side you list the data, when you click on one, you show the data, and then you have a button to send the request, and then you see the results on the third pane." It goes and does it. Like, there's no issue. And I don't care about how it looks, like is it styled or not. It's just -- yeah, it's useful. It's like a little -- what do you call this? ...when you're woodworking, you build like tools to... A tool for the tool, right?

**Jerod Santo:** Ad hoc, yeah. It's like a tool-specific --

**Thorsten Ball:** A shim? Is it a shim? I don't know. But basically -- I'll give you a really concrete example, another one, from a few months ago. This was early days of Amp... And yes, for everybody listening, this is not in production. This was early, early days. But just --

**Adam Stacoviak:** Like two months ago...

**Jerod Santo:** Yeah, it was forever ago.

**Adam Stacoviak:** This was two months ago... Early days. \[laughs\]

**Thorsten Ball:** So we had the agent fail sometimes, to edit a file. So users would say -- early alpha testers, okay? They would say "It sometimes fails. And then I would go "That doesn't help me. I need the data. Like, what was the input? What was the actual file on disk? What's the thing that happened?" And in order to figure out what went wrong, I guess in the past what I would have done was figure out some logging, like some error reporting. Use Sentry, or logging, or something, and then put the data in some form that makes it readable for me to figure out what the problem was.

But then I thought, "I now have at my hand a code spewing -- a machine that can spit out code really fast. And if that code is a standalone project under a thousand lines, it will 99% of the time get it." So what I did was I put in the code -- don't do this at home, but I put in the code something like "If you are on Thorsten's machine and you run into this error, put the raw data dump", like a JSON that was this big; for everybody listening, I've made a huge gesture. Let's say 600, 700, 800, whatever lines big. Take the raw data, put it in this folder on Thorsten's computer. And I just ran this for two days, and I collected a thousand files.

And then I said "Amp, let's build something. Here's a folder full of data. What I want you to build is a data viewer. I want you to build a little web app in Go" - and I've never seen the insides of this code. Built me a Go web app that lists all of these files, it takes out these two fields, it syntax-highlights them, and then it shows me a diff between these two fields. And then give me a keyboard control so I can go through the data. And it did this in 45 seconds. I open up the website, I go click, click, click, go through, and I go through like 50 examples, and just by being able to look at the data, I spotted a bug. I realized "Oh, it's a white space issue." And that's only because I had syntax highlighting and a diff, and I could easily go through data.

\[01:30:22.19\] And I never would have built this on my own, because syntax highlighting - pain in the butt. The diff in the JavaScript, the three-pane layout... I would have given up. But the barrier to entry with the agents, or the AI in general, is so low that you can build stuff that you never would have attempted before. And to come back to what I would originally have tried, like logging and whatnot - imagine you get logs of like "Input this, output this", and it's just this line of logs... Would you have spotted a white space issue in those logs? Like "Oh, it used two spaces instead of a Tab", or whatnot. And I don't think I would have. But just... Being able to say "With the push of a button, I can generate 500 lines of code", I changed how I approached this problem from an engineering perspective. And I think a lot of people are now realizing this, where they say "Oh--" Somebody tweeted yesterday. Jeffrey Lit, I think. He's like "Oh, I kind of wanted to figure out--" What was it? "How many words are in each section of this Markdown document", or something. What would you have done in the past? Would you have sat down and written a tool to do this by hand? Probably not. It would have been an idea that you brush off immediately. And he's like "Claude, built me like a one-file, whatever script to do this", and it did it. Just because it's affordable now.

So now, come back to real software engineering - how many tests, and debug tools, and test suites, and like introspection tools or analysis tools have we not written because it would have been too much effort? And that's now affordable. We're starting to realize this, and the question is, when will we really leverage this? When will we make use of this?

And to go one even further, back -- I've worked at Sourcegraph since 2019, with one year break... And a lot of large scale customers, they say "Can you make this work for our codebase? Can you make the tool that you have work for our large codebase?" What we're seeing now is that people change the codebase to leverage AI more. They're like "Oh, these files are too long for an agent. It blows up the context window. You know what? Let's split it up in five files." And I'm telling you, two years ago nobody would have split up their files, for any tool. They would have said "This is our file.

This is like our 20,000 lines. You're not gonna touch this." But now the levers changed, and the amount of leverage you get out of these tools changed. And now, suddenly, the codebase will adapt -- that's my bet. The codebase will adapt to these tools.

And the really interesting bit for me is how will our engineering practices change? What code will we write by hand? What code will we generate? Thinking even further, will there be code that we won't check in, but instead we just check in the prompt or whatever it is, and just generate it on the fly? Or will all codes still be checked in, you know?

**Jerod Santo:** \[01:33:45.08\] Yeah... This actually opens up a whole new line of thinking for me, which I haven't thought before... How does this impact open source? Because I was thinking through your situation, I was like "Well, in the past, that one-off tool to help me do something else--", it's like a side quest, basically. Like, I either would have forgot about it, like you said, "Nah, too much work. It'd be nice to have it, but I don't need it." Or I'd say "Screw it. I'm gonna write it, I'm gonna open source it, and then other people can use it, and now it's worth it for me." Or I'd say "Well, let's go see if someone else has done it and see if I can just use somebody else's." Maybe not in that order. I probably would go look first, and then decide to build it or not.

But in a world where we can just ad hoc generate one-off tools, and check them into the codebase or not, keep the prompt or throw the prompt away, does the amount of open source diminish? Does my use of open source not matter as much because I can just generate anything I need? Have you thought through this? Because I haven't even thought about the impact on open source.

**Thorsten Ball:** Yeah. Quinn and I talked about this in our podcast, that - let's be honest, the GitHub contribution graph is not worth as much as it was ten years ago, five years ago, two years ago. And it had a sharp drop, I think, in the last, whatever, year or something. And you also know Go, and you know that, say, on one end of the extreme -- one extreme is the JavaScript community, where it's like "Here's one function. I've published this as a package" and on the other end there's the Go community, which is like "A little copying is not bad. I don't have to pull in this dependency." So now I'm thinking with AI, why would I pull in a tiny package? Or why would I write it by hand if I just need like a -- why would I even go somewhere and look up a function that formats a timestamp in whatever format I want? I can literally ask the LLM, "Here's the timestamp, here's all of the five formats. If you don't have all of the five formats, here's the command.

Well, write me a program that generates all of the possible formats. So you see all of the possible formats and then write me a function to parse them." Even the act of code as a way to reduce duplication is not up for grabs, but it's kind of changing, because --

**Jerod Santo:** You start to question it, at least.

**Thorsten Ball:** Dumb example, and somebody listening will say "Thorsten is an idiot", but just to illustrate the point... Say you have a function that validates something, and you want to make sure that it validates these 50 cases of whatever. Or say 150. It always was best practice to type out these 150 cases. You would write a regex or something, right? And you're like "Ah, let's not regex, blah, blah, blah, because we cannot maintain this list." Now with LLMs you can generate 150 examples. You can literally add code write time, generate all of the variations. You don't have to let the CPU go through all of the variations. It's just stuff like this, where -- even frameworks; the goal of a, say, web framework is to help you reduce the amount of code you have to write. But if the amount of code that you can generate is suddenly large, and it's fast, and it's getting cheaper, do I need fancy templating helpers when I can just say "Change all of the user avatar components and make them all green?" Something like this.

**Jerod Santo:** The DRY principle becomes Do Repeat Yourself.

**Thorsten Ball:** Maybe, I don't know. A lot of code is based on the assumption -- or a lot of code and a lot of the way we write code is based on the assumption that writing code takes time, is hard, and we wanna avoid it as much as possible, you know? But now, will that change? Because I can generate your websites with one push of the button now, in like 50 different variations.

\[01:38:00.05\] And then coming back to the original question of open source - well, does it make sense to store pre-generated pieces of code, and build libraries that are available and configurable for 15 other use cases, when you could just say "Well, here's like one version of this", and then maybe you feed it into an LLM and you generate your own versions of this? This is a bit sci-fi and obviously it's not performing, blah, blah, blah, but it's just... This stuff is changing.

And one thing that -- to go one level higher even, and it's also one of why I think the business I'm in is so interesting, is Eric Meyer, ex director of engineering at Facebook, or one of the ex... He's a Haskell guy, really smart functional programmer, has done programming for 40 years... And he had a presentation two years ago, I think - pretty early - where he's like "Why search for code when you can have an LLM generate it for you?" And what he means is that when you go and you search for Stack Overflow, and you search your own codebase, or you search the codebases of your company, what you want to answer is "I wanna build a user avatar component, or something." How do we usually do this? Because you don't know how, or you don't wanna do it. But if you have a model that knows how, and can do it in less than a second, why go and find those examples? Why not generate this here?

It's the same as you're trying on new clothes, and it's like "Oh, I'm gonna try on the red shirt, and the blue shirt and whatnot", but instead you could have a photo taken of you and then say "Give me 15 variations where I wear the same shirt in 50 different colors." Stuff changes when you don't have to go look for it, but you can generate it on the fly.

**Adam Stacoviak:** Well, what you're saying is that the efficiencies or the perceived efficiencies we've done in the past have been based upon human efficiency.

**Jerod Santo:** Exactly.

**Adam Stacoviak:** Right? We thought it was efficient to write shared code, so that it was more efficient to stand up a new project, so that it was more efficient for teams to unify around codified ways, standards etc. Those were all the efficiencies. But if those efficiencies are under mute - or moot, sorry - is that they're no longer important. So those efficiencies to an LLM, or the thing that begins to generate this code is like "Well, you know what? I don't need to worry about this one unified way for 25 applications to connect, because I can just write it on the fly." For the bespoke need it has, very specific, and that efficiency, versus the efficiency of some other ephemeral efficiency that doesn't really matter anymore.

**Thorsten Ball:** Yeah. The analogy I used in the past was, you know, at the end of a book, you have an index with different words that you can look up quickly. And you have that index because it takes a long time to find that specific thing in the book. If you're able to read 1,000 pages per second, do you need an index still? The thing itself is optimized for how it's consumed right now, but if the way you consume it, and suddenly we -- why would I need an index at the end of the book if I can just have photographic memory and can read 1,000 pages per second? And I think a lot of code is still like this. It has to be. It's based on how we write and consume code, and how hard it is to write code. But when the capabilities change, the tools or what we produce with those tools will also change.

**Jerod Santo:** \[01:41:49.18\] The kids are gonna totally get this. The kids, the next generation, the AI natives, they're not gonna ask these questions, because they're gonna grow up in a world without that constraint, you know? They'd say, "Why would I share -- why do you have to have a shared library? Why would I share my library when I could just tell my thing to make a new library? Why would I refactor, when I could just rewrite? Or why would I maintain when I can replace?"

When the cost of replacing -- maintain your car because it's expensive to replace it. But if the cost of replacing is approaching zero, why maintain? I don't know, you start to ask a lot of questions that we've assumed were fundamentally unaskable, right? ...because all the calculus changes.

**Thorsten Ball:** I'll give you one funny example... I've started to build this because I posted it and people got riled up about it. It's a little bit philosophical, but basically, a lot of stuff we do when we work with computers is about putting things in a certain form, in a certain structure, so the computer can work with it. Example - static site generator blog posts. Now the format is you have to have a YAML, front matter it's called; the slug, publish date and whatnot, and then the text of this. Now with LLMs, you could technically write a blog post with anything. You could have a folder called My Posts, and it could be a screenshot of a text message, that could be one blog post. You could have a screenshot of a post-it note, a photo of a post-it note, a Markdown file, a text file, and then you ask the LLM, "Here's my five blog posts, here's the basic template I want for these blog posts. Generate me my blog." And you don't have to put any structure in it, because these LLMs are now these - I call them the fuzzy to non-fuzzy adapters. You can throw pictures, screenshots, audio messages, videos, anything at them, and they can spit out text. It's sci-fi and philosophical, but when you think about it, it's - how many beautiful things can we build when we don't have to think in strict database column schemas, you know? Where we can say "Well, a blog post could be anything. It could be a picture, a video, an audio recording", you know? And we now have a tool that lets us transform this into another form. We don't have to put it in a specific thing.

**Jerod Santo:** That is interesting. So what exactly are you building then?

**Thorsten Ball:** I started to build a static site generator that at build time will just look through a folder called Posts and generate out of images and videos and audio files and screenshots an index of blog posts, and put them in a format. And the prompt is "For each blog post, modify the layout so it matches the content of the blog post", you know? Like, make it look serious, or make it look fun, or whatever it is. And I think that's just something we've never had in computing or software, where you could say "Make this one look like the handwriting", you know? "Is this orderly handwriting, is it fun handwriting? Is it a little throwaway note? Make the page look like this." And it comes up and probably does something that makes it look like this.

**Jerod Santo:** Yeah. So is it non-deterministic then? Or are you gonna have some sort of --

**Thorsten Ball:** Yeah, it's non-deterministic.

**Jerod Santo:** How are you gonna have a reverse chronological listing of posts? Isn't that what a blog is? Or does that also have to be non-deterministic?

**Thorsten Ball:** Okay, then the --

**Jerod Santo:** What is a blog...?

**Thorsten Ball:** I mean, a blog is a dumb example. But it's like, then the file names have a timestamp in them, or whatever it is. But, I mean, still, right? Like, it's a large step up.

**Jerod Santo:** Right, i'm with you, that's for sure. Because I don't like YAML front matter. I only do it because the computer likes it.

**Adam Stacoviak:** Me neither.

**Thorsten Ball:** Yeah, exactly. That's what I mean. That's what I mean.

**Jerod Santo:** Okay.

**Thorsten Ball:** \[01:45:51.05\] And what I did was -- this was two months ago, or something. Somebody sent me an email, and they were like "Hey, on your personal website it still says you work at Zed, but I heard you're back at Sourcegraph." And I was like "Oh, you're right." And I opened my website with Amp, and I took a screenshot of that email, pasted it into the agent and said "Fix this." And it went and it found that bit on my website where it says where I work right now, and it updated it based on that screenshot of that email. And I sat there thinking "Isn't that amazing, that I can take a screenshot of an email and something changes based on it?" And I send it back to that person who sent me the email, and that person was like "I'm sure you could have done it faster than asking the agent." I'm like "Don't you see, man? This is crazy." I could build you something where you forward an email and it opens a pull request on your website. That's not hard to build anymore.

**Adam Stacoviak:** Yeah, back in the day it was a startup, right?

**Thorsten Ball:** Exactly.

**Adam Stacoviak:** That was somebody with a pitch, and seeking funding.

**Jerod Santo:** Yes.

**Adam Stacoviak:** Now it's "Yeah, whatever." We got here though specifically by, Jerod, you asking about open source. Like, this entire last 35 minutes-ish has been about the question of open source...

**Jerod Santo:** Yeah, more or less.

**Adam Stacoviak:** And at first, I almost said everything by default is open source now then. Because if you can generate every line of code, then the critical factor is not what the code that gets produced, it's the thought and the intellectual property, potentially, that makes it proprietary or not around that idea. If by default then everything is just open source... But then now as the conversation goes on, it's like "Well, what if open source doesn't matter anymore?" Because when we need something, we just make it. There's got to be some living standards, though...

**Jerod Santo:** Because the value in the source -- I mean, where's value in the source anymore?

**Adam Stacoviak:** Right, that's what I'm trying to really --

**Jerod Santo:** There has to be some source out there, because the robots need to learn more.

**Thorsten Ball:** Yeah, well, that's a second-order effect. Like, if we all say there's no value in sharing stuff anymore, then the well dries up to make these models better.

**Adam Stacoviak:** I think we'll find value in sharing things though still yet. I think there will still be libraries and frameworks that will get made, and maybe at some point the source will be just a codified way of the LLMs using this stuff, and they'll be a user like we're a user, and we're only a user by proxy in the fact that we care about the name that gets associated to it.

**Jerod Santo:** But they don't want source necessarily, they want tools. Like, for training them they need source, but for their actual building, they need tools more than source. So I don't think we can answer this question in the next three to five minutes, let alone the next three to five years. I feel like this is a generational question. Like, if you go out now 20 years and say "What is the impact of open source on the world in 2045?", will it be dramatically different now? I think it might be. I'm not sure... I'm not sure.

**Thorsten Ball:** Can I make an optimistic prediction?

**Jerod Santo:** Sure, please do.

**Thorsten Ball:** \[01:49:00.05\] I think the value of what's creative and truly human and tasteful, and based on experiences, unique experiences - I think the value of that will rise. Like, I think if there's one thing that only you, only you in that moment, with that combination of this model and that model, in this scenario can produce, I think that's still valuable. But a really creative piece of code, a really insightful algorithm, a really efficient, good data structure, you know? But yet another TUI framework, or -- I don't know, a date parsing library or something, or a one-off function to check \[unintelligible 01:49:48.11\] existence, or something like this... I think the value of that will diminish. But the value of uniqueness and taste and the creativity will stand out.

**Jerod Santo:** I think that's a good note to end on, don't you think, Adam? I mean...

**Adam Stacoviak:** Yeah, I think so. I think the only thing I would add to really this conversation is just that it seems like perspective is in order... Because when you're closer to the problem, the specifics matter more. Like, for example, future humans may say "Do you remember when human validation was based upon lines of code, or characters written in their life, or whatever? And now it doesn't matter, because that's not a metric that matters to track when you zoom out." When you zoom in, that matters. When you zoom out, it's like, well, you measure things based upon the broad strokes, versus the specific definitives on the zoom in.

**Jerod Santo:** Well said. Thorsten, thanks so much for coming over to our podcast, and sharing... I know you've been on Go Time a few times, we've known you and known of you, especially back when you were writing those books about compilers and stuff, but... We haven't had you on the Changelog, so this was a joy. I'm fascinated, I'm inspired, I'm excited, more than scared... Sometimes I'm scared, but today I'm more excited about the future, with these agents helping us do better, cooler stuff, faster. I mean, mostly good, right?

**Thorsten Ball:** Thank you for having me. And small anecdote is, I told my wife, before we started recording, "I'm gonna go record this podcast." And she's like "What podcast is it?" And I said, "It's the first podcast I've ever been on in 2016." Back then Go Time...

**Jerod Santo:** Yeah, totally. Yup. That's awesome. Always happy to hear origin stories that include us. We've been around a while, so we have a few of those.

**Adam Stacoviak:** I remember that podcast, man. That was a long time ago.

**Jerod Santo:** It was a long time ago.

**Thorsten Ball:** Yeah. It's nice.

**Jerod Santo:** That's almost a decade, so...

**Adam Stacoviak:** It's good to be friends still yet all these years, you know?

**Jerod Santo:** Yup, it's pretty cool.

**Adam Stacoviak:** That's what it's all about, man. Right there.

**Jerod Santo:** Certainly not the last time. We'll have you back. We appreciate the conversations. Really enjoyable.

**Adam Stacoviak:** Very much.

**Jerod Santo:** Thank you.

**Adam Stacoviak:** Thank you, Thorsten.
