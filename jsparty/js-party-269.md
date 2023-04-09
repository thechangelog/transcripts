**Jerod Santo:** Hello, everyone. It is JS Party time. I am Jerod, your internet friend, and I'm joined today by Amal. What is up?

**Amal Hussein:** Hey!

**Jerod Santo:** Nick Nisi's here. What's up, Nick?

**Nick Nisi:** Hoy-hoy.

**Jerod Santo:** Kball is also here. What is up, Kball?

**Kevin Ball:** Hey, hey. Glad to be here.

**Jerod Santo:** Today we gather to talk about what's new and poppin'... And the answer is lots of AI things. Holy cow... I'm a little bit overwhelmed, honestly, both with the speed of "innovation", but also just the amount of people talking about it. So I apologize, I guess, in advance for adding to that list... But we're talking about what's new, and honestly, the biggest news to drop this week, as we record, March 23rd, as you listen to this produced a week later, hopefully there's not a bunch of other new stuff that makes this stuff irrelevant by then - is GitHub Copilot X. Or is it GitHub Copilot 10? I don't know. Were there nine previous versions, or is this X? What's your hot take, Amal?

**Amal Hussein:** I think it's X, yeah. I mean, 10 is so lame. Who needs to increment by number anymore? It's all about the mystery and the intrigue of X.

**Nick Nisi:** Every Apple fan who's been on OS 10 for 20 years is --

**Jerod Santo:** And they've been making us call it that, even though it's an X every time? \[laughter\]

**Amal Hussein:** Right...

**Jerod Santo:** Yeah. I mean, Roman numerals... Why? Why are we doing those? Didn't the Roman empire fall, and can't we use regular numbers? I don't know... But GitHub's using X, and I think they mean it to mean X, even though this is kind of like the second major release of GitHub Copilot. Now, they're calling it the AI-powered developer experience, and some pretty epic improvements over what we know and love.

First of all, anybody here a daily Copilot user even previous to this announcement?

**Nick Nisi:** I am.

**Jerod Santo:** Nick is?

**Nick Nisi:** I am, for sure.

**Jerod Santo:** Okay. How did you use it, what do you like about it, what do you dislike about it? This is prior to X. Just up until that point.

**Nick Nisi:** Well, Jerod, I use it in a little editor called Vim, or Neovim, which means I use the most barebones version of it probably; because I don't get the Code Brushes thing, I assume that all of this Copilot X stuff is not on the at least initial MVP for Copilot X... So I just use it to give me some simple autocompletes, and usually, I like it.

**Jerod Santo:** Okay. And is he the only one? Is anybody else using it? I did not use it.

**Amal Hussein:** Yeah, I played around with the preview, and that's about it. I haven't ever worked anywhere that has allowed it.

**Nick Nisi:** Was I supposed to ask...?

**Amal Hussein:** Probably... Depending on the size of your company, it doesn't matter. Yeah... And now, for what it's worth, that's probably been the biggest obstacle for many people that I know, is that they're not able to leverage it at work. They can only use it on their own little tinker projects... But maybe Microsoft Office will change the law and they'll just bundle it into Enterprise packages everywhere.

**Kevin Ball:** What is the exact reason for disallowing it?

**Amal Hussein:** It's just that it's closed source code, and they don't want to have the model unintentionally use closed source code for training.

**Nick Nisi:** I don't think it does.

**Kevin Ball:** Got it. So they don't want to feed it back to GitHub.

**Amal Hussein:** Basically. Correct. I think there's no guarantee that that's not gonna happen.

**Nick Nisi:** Right. And I'm sure there's a lot of telemetry or something that's being passed back and forth to gauge how it's working, and things like that.

**Jerod Santo:** And Kball, you don't use it because you don't write code anymore, right? You're like a high-level guy now. \[laughs\]

**Kevin Ball:** I know... I've been writing very little code recently, which actually probably makes me a good audience for this, because I'm getting out of practice... So why get back to writing code when I can just tell GitHub Copilot to write it for me?

**Jerod Santo:** Right.

**Kevin Ball:** I've been using Eleventy, but that's all about I'm putting in.

**Jerod Santo:** Okay. For your new website, and stuff. That makes sense. So up until now, Copilot has basically been like autocomplete on steroids. You give it some instructions, you tell it to do its thing, it's gonna spit out some code... This new version very much is integrating what came out after Copilot and took the world by storm last November, which is ChatGPT. That was 3.5, now GPT-4 has come out, better, stronger, faster, bigger... And Copilot now with Copilot X (which is gonna give it to ya'), a new AI-powered developer experience. They put a ChatGPT-like thing right inside the editor. This seems like a logical next step.

\[06:05\] For me, I don't use Copilot, but I do hop over to GPT to say "Hey, how do I do this thing?" Because it tends to be faster than googling if it gets it right the first time, slower than googling if you have to correct it a couple of times. But I'm starting to use that as kind of a -- before I go google it, I will ask ChatGPT "How do I do this regular expression?" and it gets it right once or twice. But it is still that context switch. So having it right there in your editor I think would be a pretty big win, especially since it's gonna be GPT4, and probably like prompt-engineered in order to give you better answers than what you do yourself.

**Nick Nisi:** I think it also flips the model of how we go about solving these problems, or have in the past at least... Because if you -- let's say you're running into a coding problem, you're getting this weird error, or something... You have to try and take a piece of that problem that you're getting and genericize it enough to search for it, hoping that you might find someone who has also been in a similar-ish situation. Where with ChatGPT you can write out paragraphs of "I'm doing this, with this version of this product, and this together, and I think the two of them coming together..." You can be very specific, or add as much context to your specific problem, knowing that no one's actually reading it, but - like, you're describing it...

**Kevin Ball:** Do you know that?

**Nick Nisi:** No. But I assume... I hope so. \[laughter\] But you can describe it like "I'm using these things", and it can really tie into the context a lot better than you having -- so it's like the opposite of having to make it as generic as possible to try and find the most specific answer, to "This is my environment, this is what I'm doing. Help me figure out what's going on." It's a lot closer to that, where it's just gonna figure out, or help you figure it out, at least.

**Kevin Ball:** One of the things I saw looking at Copilot that I thought was really interesting was less about when I'm writing new code, but more about understanding existing code. Because even when I was writing code for a living, rather than doing more process and coaching and other things for a living, I probably spent five times as much time reading code as writing code, if not more. "I have a bug I'm trying to trace down. Well, let me understand what this module is doing, and understand what that bizarre structure is there for", and things like that. And one of the things they're talking about is you can ask Copilot "Can you summarize this code block for me? Summarize this function. Explain what it's doing." That to me seems like a huge potential productivity boost; even if I never use Copilot to write a line of code, if it can help me understand code that exists as I'm exploring it, learning it, doing things - that's huge.

**Amal Hussein:** Yeah, that's mega-huge. It feels like onboarding for software engineers may have just completely changed... Because that deep, arcane knowledge that you need to understand all these different modules is now just -- you have somebody that's there to explain it to you, so you don't have to be reliant on that domain expert to kind of coach you along your onboarding process, so that's huge...

I think the other thing that was really exciting is the pull requests - being able to kind of leverage it for pull request summaries, and just say "Hey, Copilot: summary", and then Copilot will edit your thing just to describe it. That's huge as well.

**Jerod Santo:** Right. Yeah, so Copilot - just to summarize this... Copilot isn't really one thing; it's kind of a suite of tools that GitHub's building into various aspects of their products. So the ChatGPT in your editor - that's obviously a VS Code thing. And also Visual Studio. So it's GitHub-provided if you're using VS Code or Virtual Studio. If you're using Neovim, obviously you might have other GPT tools, but they're not gonna be GitHub's etc.

**Nick Nisi:** \[10:11\] But the one I use is GitHub's.

**Jerod Santo:** It is GitHub's. So that's GitHub's Copilot but doesn't have the new chat stuff in it?

**Nick Nisi:** No. Not yet.

**Jerod Santo:** Right.

**Kevin Ball:** It's just waiting for whoever wrote the plugin to incorporate it though, right?

**Jerod Santo:** Right. So get on that, Nick. It's open source, man...

**Amal Hussein:** Yeah, is the plugin open source? I was gonna just say... \[laughs\]

**Jerod Santo:** I'm sure it is. It's Neovim, it's gotta be.

**Kevin Ball:** Is the API open and documented?

**Nick Nisi:** Um, probably not.

**Jerod Santo:** It's probably brand new and moving very quickly. Wouldn't GitHub Copilot just document itself? Then there's what Amal said, which is the pull request thing. Now, this is built into github.com, right? This is now built into the service. And like you said, Amal, really cool stuff; summaries, other ways that they're making pull requests better.

And then the third thing that they talked about as part of this is AI-generated docs, which could be game-changing. The other thing that I noticed is GPT-4 specifically has such a big memory space; you can insert so many tokens into that thing, that it can keep contextually aware, that you can actually paste in like an entire project's documentation and get answers about it. So for docs that aren't that great, or docs that didn't previously exist, obviously having some help is gonna help... Right, Kball?

**Kevin Ball:** So one thing that occurs to me here that is - I'll say a danger... I'm not sure it's a danger, but it's something to keep in mind... Is if ChatGPT is summarizing a pull request, or it's generating documentation based on the code, it's living in the land of the what, "What is this thing?" And one of the things we've talked about on other shows around documentation and pull requests is if you're at that same level of context as the code, it's actually not that useful. What you really want is the why. Why are we making this change? Why is this code here? Why are we doing this, and what is the mental model? And it's less clear to me that something that is looking at the code and summarizing it, no matter how good that summary is - it's gonna be able to give those motivations and that higher-level mental model.

**Jerod Santo:** Mm-hm. It certainly can't replace outright. I think when it comes to the what and the how, it's gonna really get you further than having nothing, which is where a lot of these projects leave people; it's gonna be very spectacular... It's like, "Okay, how do I use this library?" Well, there's like this little readme that shows a few things. But that's like covering maybe 20% of the surface area, and we can generate the rest. And that will give me the how. I still probably don't understand the why, and these other things, and so maybe the developer has to come around and do that. Maybe that's a pull request by a contributor who's using the library and says "Hey, this docs was a good start, but here's why it works this way."

So this will always be -- I mean, I'm not gonna say "always", because that's a long time; but this will be very much human-augmented kind of things. But I think from zero to something, in a lot of cases, it's such a big win.

**Kevin Ball:** Totally agree.

**Nick Nisi:** Yeah, I think that there's a lot of potential in tools like this... And not specifically this. Like, I do think it's interesting that it can generate docs for you, and pull requests. I would love it to go through every pull request or pull review I've ever done, and then start doing them in my style from now on.

**Jerod Santo:** Make your decisions for you.

**Nick Nisi:** Like, "Oh, Nickbot made a first pass, and here's all of these nitpicks that I usually do." \[laughs\]

**Jerod Santo:** Right.

**Nick Nisi:** That'd be pretty cool.

**Jerod Santo:** Nickbot. I like that.

**Amal Hussein:** But then you're forever stuck in your ways. Nickbot should be allowed to grow and evolve, you know?

**Nick Nisi:** Yeah... \[laughs\]

**Jerod Santo:** Well, you train it as you go. Like we do with the real Nick, you know? We're training him as he goes. \[laughter\]

**Kevin Ball:** And merge people. Be like "Alright, take all of Nick's pull requests and all of Amal's pull requests and merge those styles together."

**Jerod Santo:** Oooh...

**Amal Hussein:** Oh, wow... Fusion...

**Jerod Santo:** ...for the most epic of bots...

**Nick Nisi:** It becomes sentient, between tabs, and spaces, and then...

**Jerod Santo:** \[14:10\] A bot would be really easy for me, because I just put LGTM on everything and hit the Merge button. \[laughter\]

**Kevin Ball:** Jerod style. "Looks good to me. Did it pass CI? No. Oh, well..."

**Jerod Santo:** "We'll find out what happens in production..."

**Nick Nisi:** It is really interesting where -- I mean, this has been a huge week. Copilot -- maybe it was last week where the other Copilot was introduced, which I've already had to clarify "No, I mean GitHub Copilot, not Microsoft Copilot."

**Jerod Santo:** Right... This is like Microsoft Copilot now, right?

**Nick Nisi:** Yeah. It's in the Office suite of products now... With the same branding.

**Kevin Ball:** Well, GitHub is owned by Microsoft...

**Nick Nisi:** It is... I just -- it's confusing. I've already had to clarify once, like "Oh, I think this Copilot stuff is really cool", and then I had to go back and put parentheses, "GitHub Copilot stuff." Because I haven't opened Office in years. But yeah, it's interesting, and I think that the AIs coming to meet you where you're at, in your documents, or in your -- you know, being in the Microsoft suite of products is huge, because that is the entryway into all of these businesses that are too afraid to actually bring it in with GitHub Copilot, for example. But bringing it in and being like "Oh, I see that you were writing this document over here, and this over here. Let's put those together, and here's a bunch of pretty charts that I randomly generated", etc.

Bringing the context of what you're working on to where you're working on it at, and seeing that come through with code as well is just really interesting. I see examples of this elsewhere, too. We've talked to Fred Schott about the Astro, Houston.astro.build, and the way that that's just trained on Astro's docs and can respond to more context-specific questions that you have about Astro. That's amazing; what if you could have that just everywhere, for anything? Like, all of a sudden, I have this book I read; let me ask questions, and it will answer in the style of one of the characters, or the author, or whatever. It's really cool.

**Kevin Ball:** That is a really interesting idea, what you've just said.

**Jerod Santo:** Is that easily achievable today? Could I take a stock Llama or some sort of model that's just like a text model and train it on a subset -- like, fine-tune it against, for instance, our transcripts? So each of you have a personality that exists inside our transcripts. All you've gotta do is grab them all and search for the lines that start with your name. And you have like a lot of text of things that you've said over the years. And then could you just fine-tune it and have a Nick Nisi chatbot that just says "Ahoy-hoy" everytime you ask it something?

**Nick Nisi:** "It looks like you're working on TypeScript."

**Jerod Santo:** "Well, hoy-hoy, it's TypeScript!" \[laughter\]

**Kevin Ball:** Not only that you have what we've said, but you also had what we said it in response to. So you are able to train the prompts piece as well, not just our voice.

**Nick Nisi:** To answer your question, I think that does -- I mean, that's what Houston did. They used something called Langchain... I don't understand it, but I went and looked at it, because I had this wild idea of like "What if we could siphon everything out of Slack, and everything out of Confluence, throw it all into this AI, and then I could just ask questions about my business and know everything?" ...or know nothing, which I currently have, so... I wouldn't be any worse off.

**Amal Hussein:** This idea of Copilot as a brand - very genius on Microsoft's part to start to use Copilot as almost like a verb, and a noun... Like the way Google became googling. So it's like genius, but also -- the idea that you can now just democratize assistive learning, and you can immediately kind of "scale up" your organization's productivity... I mean, that's a very smart business sell, and so I'm really eager to see from companies that start adopting this what's it gonna be like for them. Because I do think it will be really nice to actually see feedback from the wild on this, specifically around how has this actually really impacted your business... And hopefully, for the better.

**Kevin Ball:** \[18:23\] Well, we're in this rapid explosion of possibilities here... And we're seeing it in the code space, Copilot... I think both for code, and then for macros in Excel, and things like that. I saw that Sourcegraph is doing something similar. But I wonder - to your point about the business intelligence; all of these companies that maintain corpuses of docs for companies... Like, Google has Google Docs for anybody who's paying for the Google Suite. They've got all the docs in one place. Feed that into an LLM, and can I query against it in sort of an ad-hoc way? Any company selling business wikis, or things like that. Who else is containing all of business knowledge?

Or going back to your example, Nick, of books; it got me thinking - Amazon has the text of all these books... Between Kindle and their search inside the book feature, they have scanned all of these books. They could set up these models to be like "I want to ask this book a question."

**Nick Nisi:** Now we're running into the problem that we always run into though, with this future utopia of wonderful things where everything is interconnected and knows about each other... Except it's everything in THIS ecosystem knows about it, and in THIS ecosystem, but they can never intertwine.

**Jerod Santo:** Right. In these silos, these competing silos. Yeah, totally. So to speak to the name, Amal... You said Copilot is a great brand. I agree with you. I think that's really cool. If I was Microsoft, I would have done exactly what they did; just take it and move it over here. Right? You've got GitHub Copilot, and now it's like "Well, we're just gonna keep using Copilot all the things."

That got me thinking about the next release of GitHub Copilot. Because they already did X. They're not gonna go Y... So they're probably gonna go XX. So about a year from now GitHub Copilot XX. But you've gotta stop there, right? They're not gonna go XXX.

**Kevin Ball:** GitHub Copilot NSFW? \[laughter\]

**Amal Hussein:** Oh, my God...

**Jerod Santo:** They can't go there, it's against Microsoft's brand. So what they can do then, eventually, the biggest release is you remove the Co. Right? Now all of a sudden it's GitHub Pilot.

**Kevin Ball:** \[laughs\]

**Jerod Santo:** See you later, humans...

**Amal Hussein:** Speaking of that, Jerod... For those of us who may be worried about like "Hey, I don't want my code being used to make this thing smarter", or whatever - Salesforce has taken a codegen model and done a bunch of training on it, and open sourced it, and you can put together this thing called FauxPilot, where you run basically a Copilot-like thing on your own stack, on your own servers, and you basically can own the stack and own the integration. That does exist, and that was kind of like a thing that people were talking about on Hacker News earlier this week.

And similarly, we talked a lot about Microsoft - Google's very much in this space now as well. Last week, last Tuesday, March14th, they announced GSuite and AI are gonna have a baby, and it's coming to you. So - eager to see them compete in this domain as well.

**Jerod Santo:** \[21:46\] Right. Well, speaking to that point... So big tech, they're all making moves now. And Nick talks about this future where everything is silo-ed; that's kind of the big tech model. Open source is striking back, though. Mozilla announced, maybe just today, maybe yesterday, Mozilla.ai, which is a startup and community building trustworthy and open source AI. There are efforts in order to democratize the technology. We had on the Changelog a fella named Georgi Gerganov, who took Whisper, which was OpenAI's Whisper, and Llama, which is Facebook's Llama model, and he wrote C and C++ programs that take the models and allow you to run inference on the edge, on commodity hardware, on CPUs, really letting you to run it on your own stuff.

So there are cool things going on in addition to, or maybe against the big players, who are of course making big moves - Microsoft, Google, Facebook/Meta, Salesforce etc. So there's so much going on in this space; it is hard to track.

**Nick Nisi:** That is amazing, right there, by itself. Because if I'm understanding correctly, that Llama CPP is basically equivalent to ChatGPT-3, and it can run on your MacBook. That's quite amazing.

**Jerod Santo:** Yes. It is. It's 3, so it's a step behind state of the art, but at a certain point state of the art gets to be pretty stinkin' good, right? And you can go a long ways with a little. So I think there's a lot of interesting things going on for us little guys too, to where we can leverage this on our home projects, on our hobbies, in our small businesses, without having to just saddle up to the bar and give our credit card over to the same companies that always take our credit card.

**Kevin Ball:** I will note that Mozilla.ai was incorporated as a for-profit and funded by their for-profit arm, not as a --

**Jerod Santo:** Oh, was it?

**Kevin Ball:** ...not as a foundation, funded by their foundation.

**Amal Hussein:** Way to ruin it, Kball...

**Jerod Santo:** Yeah, thanks, Kball. I felt so good about it. That whole thing is so murky, the whole non-profit/for-profit split there...

**Kevin Ball:** Well, and you get OpenAI doing the same thing, right? They started their non-profit, they're doing it for the world. "Oh, we're gonna close this, we're gonna close this, we're gonna spin up this for-profit..."

**Jerod Santo:** Right...

**Kevin Ball:** I mean, there's so much money flowing into this space right now, and there's so much opportunity here that everybody's just trying to make a buck.

**Nick Nisi:** Where's Apple?

**Amal Hussein:** No, they're just gonna come up with the most sophisticated AI in October...

**Kevin Ball:** I feel like Apple has never been good at software though.

**Nick Nisi:** Oh, yeah.

**Jerod Santo:** I think Apple's waiting for WWDC, in which they're going to relaunch Siri, and it's gonna be good, finally.

**Nick Nisi:** I mean, I hope so...

**Amal Hussein:** It'll be Siria...

**Jerod Santo:** Siria... \[laughs\] Siri.ai.

**Nick Nisi:** If they just basically put ChatGPT-3 into Siri, that would be a thousand steps above where they're at.

**Jerod Santo:** They have embraced Stable Diffusion, which is interesting... You know, making ways that you can run it on their devices using the GPUs, and stuff, so it's cheap and energy-efficient... And that's a non-Apple kind of move. So that either says they're playing catch-up and they're behind, or they're maybe changing the way they look at these things... I don't know, Apple's been so silent on a lot of this stuff. I think they're waiting for WWDC, which is in June, which is when they usually make a lot of their announcements.

**Nick Nisi:** Agreed. And I think that's probably their plan; it's probably a safe assumption that that's their play, is that running on their hardware fits into the narrative they have about being the secure platform. Because if it's all local, you're not sharing that data out anywhere. Whether that's actually true or not - that's another story. But it does fit with their perceived motives.

**Kevin Ball:** Well, and as you mentioned, you can run Llama CPP on a MacBook. So imagine now they release a way to have a very tuned version of that, that you're accessing the GPUs, and they lean into -- like, their chips are now the dominant chips out there.

**Amal Hussein:** \[25:50\] Yeah. Well, speaking of chips - so NVIDIA is another company that's taking this really sharp pivot from like "We don't wanna be this company that just supports fancy gaming and graphics. We wanna power the AI revolution", and they've really heavily invested in all these new chips that are gonna be used in different capacities, to power the new revolution... And I'm curious where Apple -- you know, Apple being this closed system, like, where do they fit into that spectrum? Is it like developer machines, or is it like everyday machines are gonna require that level of compute power, because everyone's gonna be running like seven different pieces of software that have all these different things happening? I don't know, it'll be very interesting to see where they land on that. But yeah, NVIDIA's gotten really serious about this space as well.

**Jerod Santo:** Everybody's interested. Adobe as well is doing some cool stuff. Kball, you linked into the doc Firefly. Do you wanna tell us about that?

**Kevin Ball:** Yeah, so it's basically this generative AI on images, but integrated into Adobe's imaging tools. So you can say "Okay, I like this image. Give me something like it. Give me variations", they were talking about. "Tinker with this, clean up that." So it's still beta; I haven't played with it myself, I was just reading about it, but it seems to be trying to take this Copilot-esque model and apply it to image software. I mean, if anybody's gonna do it, Adobe's the one to do it, because now after purchasing Figma they have all the design tools in their pockets.

**Jerod Santo:** Right. They also have been doing some stuff in audio. They have some new podcasting stuff they've been working on, and they have a tool called Adobe Enhance, I believe, where you basically drop it a .wav file or an .mp3 and it's going to AI-enhance that audio, removing echoes, background noises etc. And it's so good so far that we've been dropping a lot of our files into it just as a first step towards our editing process, especially with a guest whose track is particularly noisy, or something... It just does a really good job of EQ-ing and removing a lot of that stuff so that we don't have to futz as much with the different settings and effects inside of Audition. It's kind of primed for us.

So that's like brand new, as of -- brand new to us as of two weeks ago, and it's so good at just making stuff sound better that it's like "Why not just drop all the things in there before we start editing?" It's really nice.

**Kevin Ball:** Do they have anything for video?

**Jerod Santo:** No. They have a brand new tool that's going to compete with Riverside, and Zencast... It's called Adobe Podcasting -- no, it has a name that's like \[unintelligible 00:28:34.03\] That might not be right, but it's something like that. And it's in private waitlist beta, and it's really slick. It's kind of like Descript. I would say it's closest to Descript, but it seems like it's audio-only, which I think at this phase of the game, I think video to a certain extent is table stakes for a tool like that. Even if podcasters don't care about it, most of them do anyways. So yeah, Adobe is definitely doing some interesting new tools with these tools.

Should we switch gears, or should we stick -- do we have anymore to say on the AI front, or should we switch to a different story?

**Nick Nisi:** I have a question... Just with the advent of all of this, kind of AI everywhere, and Copilot specifically - apparently, I'm the only one who's using it, but... If I were to go interview at a company and one of you were the ones interviewing me, would you let me use Copilot? Would you restrict me from using Copilot? What would your thoughts be on that?

**Jerod Santo:** Ooh... I think that's a good question for Amal to answer.

**Amal Hussein:** Oh, man... I mean, I think we just as an industry have to make a decision on are we querying or testing on somebody's ability to get the job done, or are we interviewing them for their ability to --

**Nick Nisi:** Regurgitate.

**Amal Hussein:** \[29:59\] ...retain and memorize information? So get the job done, or not? I mean, there's a balance, there's a fine line... I think it's important to understand what your Copilot is spitting out, and also being able to debug it, and scale it, and modify it etc. So I think this is just one of those things we're gonna have to learn the hard way where we find that balance and where we draw that line. I think it's still a little too early to say.

**Kevin Ball:** I have a different question.. At what point do you fail that interview if you don't use Copilot?

**Jerod Santo:** Oh...

**Amal Hussein:** That's the question that Microsoft executives want.

**Jerod Santo:** Right?!

**Kevin Ball:** Or a Copilot-like tool; because there's tons of them coming out. Everybody's trying -- right now it might be GitHub Copilot is the way, but... I mean, at this pace we're going, next week there'll be three more. It is very fast. But I think this -- I'm tired of AI. It feels like all the time "AI, AI, AI..." and I'm just like "Ay, ay, ay..." If you say it faster, "Ay-yay-yay! So much AI!" But this has the potential to skyrocket productivity in the software industry, and I think as scary as it is, adapting to that type of rapid change - there's also just tremendous potential there, because there are so many problems... As soon as you get out of the tech world and you go and see what people are doing \[unintelligible 00:31:26.24\] "That could be solved by software. That could be solved by software. That could be solved by software." And they're not attacked -- problems all over the world that are not attacked because we don't have enough software developers. Well, if a software developer is ten times more productive because they can use AI tools to do all the boilerplate and all this and all that, and whatever, how much cooler of a world do we get to?

**Nick Nisi:** Let me put it in totally non-controversial terms here; absolutely no controversy here at all.

**Jerod Santo:** Okay...

**Nick Nisi:** This AI is a lot like Tailwind, where you have to know CSS really well to effectively use Tailwind. But it's just going to keep you on rails, keep you focused, and let you be productive.

**Kevin Ball:** Can I take my mic out and drop it for you?

**Jerod Santo:** That says it right there... \[laughs\]

**Amal Hussein:** Honestly though, I think that's like the fancy marketing message. I think this is gonna be a learning curve for all of us. I really do. Because I think it's gonna be like "Oh, well if I don't have to, why should I?" Don't forget developers are -- we are inherently lazy, and it's a good thing; we conserve our mental energy. So you know, where do you draw the line for what you need to know and what you don't need to know? I think that's just where it gets murky, and I think that's where we're gonna have to learn the hard way, I think...

**Break:** \[32:52\]

**Jerod Santo:** It's now time for me to take a bathroom break and for Nick to talk about...

**Amal Hussein:** His beloved TypeScript!

**Nick Nisi:** Oh, God... \[laughter\]

**Amal Hussein:** \[unintelligible 00:33:51.20\]

**Jerod Santo:** Nick?

**Nick Nisi:** For the record, all of you audience listeners out there, I did not put this in the document. It was all Jerod. So as he takes his bathroom break, I want you to know that.

**Kevin Ball:** He's set you up, Nick. He's setting you up for success. What a friend.

**Nick Nisi:** I know, right?

**Jerod Santo:** \[34:10\] I can't even defend myself, because I'm in the bathroom, so... \[laughter\] It's not fair. Go ahead, Nick; TypeScript 5.0...

**Nick Nisi:** Yeah...! It came out.

**Jerod Santo:** That's a big number.

**Nick Nisi:** It's official, it's exciting... One note though on TypeScript releases is that they don't actually follow semver. 5.0 is just what came after 4.9.

**Jerod Santo:** They're just too cool for school, or what?

**Nick Nisi:** I've found a thread, I'll try and link it for the show notes on GitHub, where Ryan from the team was talking about like basically they're constantly fixing and updating types for standard libraries and things like that, that every release would be a breaking change... So they just don't follow that.

**Jerod Santo:** But 5.0 doesn't follow 4.9. 4.10 follows 4.9, Nick.

**Nick Nisi:** Not in their counting.

**Kevin Ball:** Decimal notation. You're going out by 0.1 each time.

**Nick Nisi:** Microsoft's 4.10 is like \[unintelligible 00:35:03.21\] They can't count to it, and so they just have to roll over.

**Jerod Santo:** When are we gonna get TypeScript X? That's what I wanna know.

**Nick Nisi:** \[laughs\]

**Amal Hussein:** I think improved decorator support and --

**Nick Nisi:** Official decorator support.

**Amal Hussein:** Yeah. And - what do you call it? Alignment with the spec, and all of that. I think that's big enough to warrant a major version.

**Nick Nisi:** Is it though...?

**Jerod Santo:** "Is it though...?"

**Amal Hussein:** ...a fake major version, since we know that they're not really real...

**Nick Nisi:** I'm sure it is for all of the Angular developers out there, but... Is anyone else using decorators for anything?

**Amal Hussein:** I don't think anyone else is. At scale anyway. I think it's just, yeah, pretty big in Angular, like you said.

**Nick Nisi:** Yeah. I could be getting my history wrong, but I think that at one point in the early days -- like, the reason we have experimental decorators is because Google actually wanted to fork TypeScript and call it AtScript, specifically to add decorators support. And instead, the compromise was "No, experimental decorators flag", and here we are.

**Jerod Santo:** Nick, now that we're alone, can I ask you a personal question?

**Nick Nisi:** Sure.

**Jerod Santo:** How much did it hurt your heart --

**Amal Hussein:** From the bathroom, Jerod?

**Jerod Santo:** Now that we're alone here in the bathroom... How much did it hurt your heart recently, when you heard two of your programming heroes, Dan Abramov as well as Zach Leatherman, take anti-TypeScript stances right here live on the JS Party podcast? How much did your heart hurt when you heard those things?

\[36:30\] \[Toni Braxton, Unbreak My Heart\]

**Nick Nisi:** You know, at points in all of our lives we're all misguided... And some people are just misguided at different times than others. No, I totally respect that, and that's fine. It is funny though, because I was just having this conversation today, that when someone says they write JavaScript, it's just assumed to me that they actually mean TypeScript. Is that the case for you all as well?

**Jerod Santo:** I feel like when people tell me they use TypeScript, it's kind of like when you do cross-fit, or you go vegan - you've gotta tell everybody about it. So like, no. If you say JavaScript, I assume you're using JavaScript. Because if you're using TypeScript, surely you're gonna have a .ts on your T-shirt, or something.

**Nick Nisi:** But do you think the TypeScripters are the vegans in this scenario?

**Jerod Santo:** I'm not going there. \[laughs\] I'm not touching that one.

**Kevin Ball:** I think it's gonna depend a lot on what part of the industry you're hanging out in.

**Nick Nisi:** Yeah.

**Kevin Ball:** If you're in Silicon Valley, or a startup, or something like that...

**Nick Nisi:** Silicon Prairie...

**Kevin Ball:** \[37:57\] ...if you're in Silicon Prairie, you and all five other developers are probably using TypeScript... But you know, if you're working doing software development in a non-software company, with legacy code that's probably been there for 10 or 15 years, you may or may not have gone through the work to upgrade to TypeScript, because you've got a whole mass of existing JavaScript to deal with.

**Nick Nisi:** Absolutely. And we should be humbled by that. I go in assuming that when you say you write JavaScript you're actually writing TypeScript, but at the same time I need to remember that still 80% of the top 100,000 sites have jQuery on them.

**Jerod Santo:** Right. I mean, most software is legacy software, right? Almost nothing is greenfield. Very few projects have started in the last 12 months. Even though there's probably a lot, but relative to the amount that exists already, it's minuscule. So yeah, those things move very slowly, and in our area where we live, kind of on the edge, I guess, early adopters part of the scene, we see all the new hotness and we adopt it, and we expect everyone is just right there with us.

I think I was talking with Liz Rice recently about even just Kubernetes adoption on like the CNCF side of the world, on the upside, and how long -- it feels like Kubernetes is everywhere, and everybody's using it... And it's like "Really, though?" Like, you go to these conferences and so many companies are still evaluating if this is - which is what you should do - if this is right for them. But so many of us just assume, "Yeah, of course you're gonna be using the newest React version." Which we could switch topics to if you guys want.

**Kevin Ball:** Wait, I just had a thought though... So if you're in one of those legacy companies, or in a legacy project, you've got all this vanilla JavaScript that it would be such a pain to upgrade to TypeScript. Can Copilot just do that for you?

**Nick Nisi:** I don't know about Copilot, but ChatGPT could. Just paste it in there. What could go wrong?

**Jerod Santo:** "Just paste it in there." \[laughs\] We need a T-shirt that says "Just paste it in there." I love that.

**Amal Hussein:** Yeah, just paste it in. That's like Nick's new motto.

**Jerod Santo:** Yeah.

**Amal Hussein:** No, I feel like we're underestimating that though. I think a lot more teams have been adopting and/or have adopted TypeScript. I think most teams working on even just a portion of -- maybe this is legacy software, but maybe the newer parts are in TypeScript, because there's interoperability... I don't know, I've seen pretty wide-scale TypeScript adoption across the board, for most people and companies I know of.

Of course, there's parts of the legacy software that maybe isn't getting touched, that is in JavaScript, but it does feel like the new normal in a way that isn't -- new normal for code that's in active development. Maybe that's the prefix.

**Jerod Santo:** Right. Well said. I think, speaking to that point, my particular comparison - it's a lot easier to incrementally adopt TypeScript because of the superset and because of the fact that you can do it on a project by project basis than it is to roll out a Kubernetes cluster. That's a much bigger thing to adopt.

**Amal Hussein:** Bigger commitment, with a bigger blast radius. Absolutely. But did we go a little crazy with decorators and doing a bunch of things that were totally not adhering to the spec? Just in general, you know, some things that weren't very JavaScripty - I think yes. So I'm happy to see 5.0, kind of more in line with JavaScript... But I think it's TBD.

**Jerod Santo:** Quick poll. Do we say enums? Is that what we say, is enums? Because it's short for enumerator, but I also say enums. Is that normal?

**Amal Hussein:** Yes, enums, yeah.

**Jerod Santo:** Okay. So I'm not weird.

**Nick Nisi:** I feel like I go back and forth between enum and enum, and tuple and tuple...

**Jerod Santo:** I hear enum sometimes and I don't know what people are talking about.

**Amal Hussein:** Tuple... Tupple?

**Jerod Santo:** Tuple and tuple, that's another tough one.

**Kevin Ball:** \[42:03\] Tuple doesn't sound as weird to me as enum. Enum I'm like "What?!"

**Jerod Santo:** Yeah. But enumerator also doesn't sound weird, I guess. But enumerator does.

**Kevin Ball:** Enumerator sounds like something you're gonna eat. "Mm, that's enum!"

**Jerod Santo:** Enum kind of sounds like the -- I guess I was gonna say the nom-nom thing, but I guess that'd be like enom, so... I proved myself wrong as I said it.

**Kevin Ball:** We should rebrand them all as enomerators.

**Jerod Santo:** We should. Enum-nomerators.

**Amal Hussein:** Enomerators...

**Jerod Santo:** Alright, anything else on TypeScript 5? \[unintelligible 00:42:34.04\] I don't know... I was in the bathroom when you were talking about this. The decorators, \[unintelligible 00:42:40.16\]

**Nick Nisi:** Yeah, there's jsut general improvements. It's very exciting, obviously; there's a lot of really cool things. The biggest thing probably in 5 is the decorators support, which is really cool to see. They're keeping up with their stated goal, which is to be a typed superset of JavaScript. And so as these new features get added into the language, they add them as well, and I think that that's a really good way to have like a blessed version of the future of JavaScript that you can start using in a very typed way today.

So now that they're there, you can start using them and they'll transpile down if you need to, or if you're targeting the latest environments, they'll just be there, which is great.

**Jerod Santo:** It's like having a polyfill built-in for you.

**Nick Nisi:** Exactly. Yeah. You don't have to worry about like "Oh, I'm using a very weird Babel plugin that's doing this one thing that may not be standard." It's gonna be standard, and it's Microsoft behind it, so it's going to be -- it's a big company; it's gonna be supported.

**Jerod Santo:** I think that's the most compelling part of your particular argument with TypeScript, Nick, is like having just like "It's all your tooling right there." It just -- it is the bus version, and if it supports it, it supports it; you don't have to pick and choose features etc. It's just like "Well, if it's in TypeScript, I can use it." And I think that's a compelling argument.

**Nick Nisi:** Yeah.

**Jerod Santo:** I mean, it wouldn't compel me to use it, but I think it's a compelling argument.

**Nick Nisi:** And going back to Dan Abramov, I was just looking -- I had to go confirm... The React codebase is still in Flow. I didn't know that that was still a thing.

**Amal Hussein:** I'm sure there's lots of Flow code in Facebook as well, or just Meta... It's a huge codebase.

**Kevin Ball:** It feeds into our next topic area a little bit... And particularly with the aspect of - like, it feels like React is kind of moving real slow these days.

**Nick Nisi:** Spice emoji...

**Jerod Santo:** That's what we were talking about. So when we had the React team on the show, we mentioned how the blog hadn't been updated since last June, and their last update then was about React Server Components, which we know is still being discussed. You can tell that Dan's very much fleshing it out, like the story, the narrative, the explanations... It's kind of fun; I listened back to that conversation, and just hearing Nick and I trying to follow along as they go, and just like "Am I understanding this right?" and like trying to have these analogies, and Dan would be like "No, that's not exactly a good analogy..."

It's very murky. It's very not clear right now, to me; maybe it's more clear to you all. React's story is a bit murky. But they did launch, as you mentioned (our next story) React.dev, which is the new doc site, which I think has been -- Amal, this is what you were talking about last year, wasn't it? With Rachel on the show...

**Amal Hussein:** Yes.

**Jerod Santo:** So this is really just a formalization and a public launch of what was the beta new docs. But nice to see it finally out there.

**Nick Nisi:** And they're great. It's finally like a legit non-beta for whatever URL to point developers to to learn modern React.

**Jerod Santo:** \[45:55\] Yeah, it's super-impressive, even just aesthetically pleasing... But a lot of examples, a lot of guides... There's touchpoints for the API, for quick start... All the things that you'd expect to be there, and more. So that's really cool. But I'm curious what are you guys' thought - I don't know if you guys had a chance, Kball and Amal, to hear the React team on the show, or listen to anything they've been saying on the internets recently, in light of the SPA fatigue and the web development's lost decade episode, Amal, that you did with Alex. How do you think this is going? Where do you think it's going? What are your feels?

**Amal Hussein:** Yeah, I think the React team is taking the steps that they need to take in order to support shifting needs in the community. And I think the server story for React has just been -- it's not a new thing; we've seen many iterations of this. But I think the missing ingredient has just been making this an important piece of the core library, and investing improvements, and making it really performant... That's what's been missing, which I think is being addressed now.

I think having a path or providing a path for people to easily switch from client-rendered to server-rendered, and making that seamless for teams that have large codebases - I mean, those are all really great things, so very excited to see that investment. And yeah, I can empathize and understand if they're still figuring it out or if it doesn't make sense. It's a small team that's serving a big community...

**Jerod Santo:** Totally.

**Amal Hussein:** ...and there's architectural decisions that take time to undo, or decompose...

**Jerod Santo:** Kball, you?

**Kevin Ball:** I think React is running into the incumbents challenge, of - they have a massive pile of history, they have massive market share, they have tons of people using React, they have tons of "can't break this." And historically, they've emphasized clean upgrades, and things like that... And that makes making big changes hard, and slow. I mean, you look at these docs. As you said, these docs are phenomenal. They are a huge update. How long was it since Hooks launched, before the docs launched?

**Nick Nisi:** It's probably been three years at least...

**Kevin Ball:** Three years, yeah. Because they're at the point - and this is something I've heard people at Google talk about as well; anytime they launch a new product, they have to be ready to face a billion users. React is in this place where the spotlight is so large, and the number of people depending on this is so huge that they have to move extremely slowly, and extremely carefully, and make sure every i is dotted and t is crossed. And what we're seeing in the ecosystem right now is that there are some needs that they are not currently meeting, and that may, in some ways -- I don't know if Fred K. Schott would say this... Certainly, Misko Hevery has said - it's by design. The core architectural choices that have been made, to lock them into a lot of things that make it very, very hard to optimize for minimal JavaScript and for super-high performance.

And so they're trying all of these things to try to address those things, but they cannot change that fundamental architecture because they have such a massive weight of usership and history. And so I think they're gonna continue to do interesting things there, they're gonna continue to try, but there is a huge opening right no,w that we're seeing filled by all these new frameworks. We're seeing tons of innovation in the framework space that we haven't seen for a while, with Astro, with Solid, with Qwik, that are looking at "Can we change some of those fundamental assumptions and break this legacy of so much JavaScript?"

\[50:06\] So the React team is in a really hard space. This is the classic innovator's dilemma; they have plenty of reasons to keep going down the road that they're going, but honestly, I don't see what they're doing as something that's gonna fundamentally change that trajectory. It will help, it will give some options for people who are locked into the React ecosystem, but I don't think that it's going to make a fundamental shift. I think to do that we're gonna need changes in the way that we think about JavaScript frameworks, and maybe those changes are already out there in one of those frameworks. I forgot to mention Svelte, but Svelte is also doing interesting things in this... Maybe one of those frameworks is the one that breaks this trend and has enough fundamental difference to get us out of this over-JavaScript world... But I don't think it's gonna be React.

**Nick Nisi:** But this does set them up on a good trajectory with that, I think... Given their legacy and where they're at right now, they're still pushing forward with all of this, and then Server Components on top of that really adds, again, like a most ablessed route for doing that within the React ecosystem as well. Whereas something like Remix is going a slightly different way to the same goal... But this is what the React team is prescribing, and there's a lot of weight that goes along with that as well.

**Jerod Santo:** I will say this... Everybody I've ever met on the React team is like top-notch amazing at what they do. Very smart, and clearly, driven, and doing great work. I feel like they're backed into a corner to a certain degree, because as we move away from client towards server... Like, React - they don't have that part of the stack. It hasn't been that, and they can come up with a spec and a technology and a way of doing things. But when it comes time to providing a solution, they're like "Well, Next.js has it built-in." It's like, "Well, that's not your project." Right? To me, that was one of the things that stuck with me, is how often they would say \[unintelligible 00:52:06.06\] which is a really great project, and all that; I have no problem with it. But that's outside of their control. And to me, that would be shaky ground, to be like "Well, the future of React is in Next." And Next is a great partner project, run by a company that is \[unintelligible 00:52:26.14\] but it seems like they almost need to have more of a holistic solution from React proper, in order, I think, to bridge the gap, ultimately.

So I tend to lean with you, Kball; not because of the fault of any individuals, or their quality of team. I mean, just spectacular. But just because of where it is, and what they don't offer. Because it hasn't historically had to be that. Your thoughts?

**Kevin Ball:** I totally agree it's not about the individuals. And this is a pattern we see over and over again. Once you reach some level of incumbency, the incentives and pressures on you make it very, very hard to innovate in fundamental ways, and fundamentally change your approach to things. And that's okay; that's the natural cycle of progress in technology. But yeah, they're stuck between a rock and a hard place.

**Nick Nisi:** Well, I think that they did try and clarify that Next's implementation of Server Components was their implementation, and it's the most stable implementation so far. They do also have like an internally codenamed one that I'm forgetting off the top of my head, that doesn't use Next at all... But it relies on so much more than what they're willing to support, because it's like a specific build system, and things like that, and they've traditionally kind of shied away from things like that.

There was a whole big debate about should they still be recommending Create React App as the go-to for starting a new React project... So I get that, and it's all like an open standard that anyone else can build onto as well, or choose not to.

**Amal Hussein:** \[54:04\] I guess what's interesting for me is the problem of React is for me a slightly wider problem, which is like "Do everything with JavaScript." That's the generic, core underlying problem. And so with the birth of React - it was so widely adopted, and so quickly skyrocketed... I think most people just immediately took Facebook as a brand and said "Oh, they know what they're talking about. Let's go ahead and do this, and we'll use this regardless of whether or not it meets our use case for what type of site we're creating."

And then fast-forward however many years later, it's so widely adopted, people are having problems scaling it... Because they're like "Wait, maybe this wasn't actually for me." I feel like as a community we kind of gave up -- there was no discernment, there was no evaluation for like "Does this actually meet my needs? Is this the right tool? Is this the right architecture?" And now we're trying to kind of like walk ourselves back from it, and it's really hard to -- as we're seeing, it's really hard to walk back from that kind of a situation. And I feel like we kind of gave up -- like, we chose DX over UX, because it's like "Oh, look how easy it is to use React. Look how fast it is to use React. Look how quickly it is to build."

**Kevin Ball:** I think that point is really key. So React wasn't just there because it was Facebook. It was fundamentally a better DX. And we went all-in on that, and walked ourselves into a hole where it makes it very hard to claw back some of those user-facing performance, and other things. And that's kind of where I was trying to get to with like - there's a fundamental choice that was made in the architecture that pushes that way. And it remains to be seen, from my perspective, if we can get that level of DX without that choice. There are people saying that we can. I think there's a reasonable argument that we can, but it hasn't proved out in the market yet.

**Nick Nisi:** I think that that's what I was gonna say exactly, Kball; we leaned so heavily into JavaScript because of that DX... Just as you said, Amal. We leaned into it too far, but now I feel like the clawback is only possible because of improved DX. And I'm thinking specifically if you take astro files, right? An astro file can have effectively build-time JavaScript or TypeScript, client-side JavaScript or TypeScript, and then Markup, and CSS, all in one file. And that's really only possible because there's such a good DX story that you can tell with a custom Astro language server that knows how to parse all of that, knows what parts are what, and how to present you with all of the modern coding DX standards that you would expect in any JavaScript file.

So it's because of the advent of things like that that we're able to start clawing back and getting into this spot where we can have like a nice medium between really good DX and efficiently separating out our code so that a build tool now knows how to properly build it for static sites, or server-side rendering any of that.

**Jerod Santo:** I don't think the DX versus UX dichotomy is as black and white as perhaps it has described, or maybe that you guys think it is... Because a lot of times -- you know, you can't say "Well, we chose DX over UX", because in many cases your ability to actually develop is the thing that creates a user experience in the first place. And how can you say - like, compared to the jQuery spaghetti code, that was just unmaintainable, bug-ridden... Like, just messes that were happening. Like, React comes in and changes the paradigm of building these things with a single-directional dataflow, with components that are composable etc, that are just like way easier to develop things good, and maintain. And that produces a user experience. It's like, "Hey--"

**Kevin Ball:** \[58:10\] Totally agree.

**Jerod Santo:** So a lot of times it's like this vs. that... I don't think it's quite so straightforward.

**Kevin Ball:** The user experiences that are on the web today are so much better than they were in the pre-React world, because of what you're saying. I'm remembering there were some things that I spent weeks building in Backbone, because they were too complex to do with just jQuery, that would be relatively straightforward to implement now in React. So there is progress on the user experience side. I do think, once again, we've kind of locked into this model of more and more JavaScript as a way to get that, and that works okay if you're on top of the line machines and top of the line networks, and is very hard to make performant across most of what people are using. And network speeds and device speeds outside of the top of the line have not been keeping up with the pace that JavaScript has been rising... And the architectural choices that go into building a React app, that are there, make it very challenging to walk that back. There's things you can try to do. You can try to implement lazy-loading, and you can do all these things, but it's a lot of work. It's very hard to get that to work well.

**Jerod Santo:** Right. I think it goes back to what Amal said with regards to - and I agree with everything you said there - kind of stop evaluating, and just use this for everything... You know, I built server-side rendered applications with jQuery, and then when I saw React come out, I was like "Wow, this could really help me." And then I found an area of my application that it would really help, which was like this dynamic form-builder thing, where you select these things and more elements come up, and maybe you toggle this thing and this part of the page hides, and all this kind of stuff... And I rewrote that with React, and it was spectacular. It was amazing. And then I just left the rest of my application as a server-side rendered Ruby on Rails thing. And it was like "This was great."

React for me was a blessing. But I didn't throw everything out and say "Now I'm gonna build an SPA", and all this kind of stuff. And I'm not trying to give myself kudos, I'm just saying, that evaluation of like "Okay, this is really gonna help me, but I'm still gonna evaluate its merits in these other areas, and not just go all-in", I think that's like the engineering part of the job that we all need to be doing.

We tend to be kind of lazy and just take the big hammer and hit all the nails with it, right? Like, "Oh, I've found the panacea. This is gonna solve all my problems", because it does solve some of your problems big-time. But it also is gonna create other problems, and it's also not gonna fit in every place that you can shove it. I mean, I know there's like React-based command line builders, and it's like, okay, if you like components, cool. That makes sense. But why is React building your command line app? I just don't understand.

**Nick Nisi:** I agree with all of that, unless you look at it from the light of TypeScript; then you can shove that everywhere, and there is no downside. \[laughter\]

**Amal Hussein:** Nick and his TypeScript blanket, and pillow, and shirt, and boxer briefs... All the above...

**Jerod Santo:** Yes. Stick around for the after-dark, where we show Nick where to shove his TypeScript -- \[laughter\]

**Amal Hussein:** Oh, God... So Jerod, I think you should give yourself kudos for that. I think what you did there demonstrated constraint, which is what we maybe need more of in our community. I think businesses didn't -- and this is the same point that Alex Russell was making, when we had them on the show a few weeks ago... Have businesses consciously opted into all this JavaScript and stayed on the client for every single use case on their platforms? No. Your login page...

\[01:02:11.04\] There's certain things that just need to be fast, and they need to kind of quickly serve the user, and we've kind of universally applied this tool that maybe just isn't the best for every single use case, and we've just put it everywhere.

This is where there's gaps maybe in our product management, and budgeting, and understanding that when we're building products we need to think about the architecture for the use case. That just needs to be part of how we build software. I think that's what's missing; we're just universally applying -- we're using the same tools, we're using the same little paintbrush to paint the house... Maybe that paintbrush doesn't work for painting a house.

**Jerod Santo:** Right. We need a roller, or a sprayer.

**Nick Nisi:** I feel like it's only recently thought that it feels like we have options to do these other things. I don't wanna rewrite everything in Ruby, but --

**Jerod Santo:** PHP, man.

**Nick Nisi:** I keep bringing up Astro as an example... That's a great example of opting into -- like, you could ship a React component to the client when you need it, but most pages probably don't. And that's really cool. A really easy way to get that for relatively little costs from a developer's perspective. But we've been building this way in React for a long time, and we're kind of locked in, in a lot of ways, to this ecosystem... Because it's not just React, it's the tooling in React; it's the data tables, and the components that we use, that are all built around this context-shared component lifecycle, all of that. We need better options for it to be able to move out. And those options are coming, and they're there in other projects. It just takes time to move over to them, and I think that React's seeing that and competing in their own way as well is a positive thing. It seems like we're trending in the right direction all around.

**Jerod Santo:** I agree. Shall we let that optimistic high note be the final word for the day, or does anybody else have anything to add before we call it a show? We're gonna let Nick have the final word, honestly? Alright...

**Nick Nisi:** Don't do it, don't do it...

**Kevin Ball:** I can add something... \[laughter\]

**Jerod Santo:** Thank you, Kball... With a save!

**Kevin Ball:** \[01:04:35.29\] ...which is - kind of to Amal's point... You know, we make trade-offs about what we're going to do in technology all the time. And businesses make trade-offs all the time. What has been missing, I think, is the realization that this is a trade-off that is being made. I think for a very long time - in web years anyway - React or a React-like framework has been the way. It is the way you do it; you're gonna win on how fast you can ship things, you're gonna win on how nice a thing you can ship, you're gonna win that your developers are gonna be happy, you're gonna win on you can hire people for just this one skill set...

So when everything's motherhood and apple pie and everything's positive, there's no trade-off being made. But what we're saying now, and what I think Alex has been sounding the bell on, and other things, is there is a trade-off, it's just been invisible. And the trade-off is your site is going to be so slow that if you want people who are not using top-of-the-line iPhone to use it, they won't be able to use it. If you want it to be usable in rural areas, or countries without fast internet, they won't be able to use it. All of these different pieces. And that's the trade-off you're making. And if we can make that trade-off explicit and visible, and then have options where you can choose different parts of the trade-off, and different layers... "Okay, we're gonna have a slightly more complex DX", because I think as good as Astro is, you do have to context-switch a little bit more. You have to be a little bit more specific. But we're gonna have a slightly bigger trade-off there, because for our use case and for our users that performance benefit is worth it, and that's a trade-off we're gonna manage explicitly as part of our technical and business decision-making, rather than implicitly, because this is the way things are done.

**Jerod Santo:** And that, Nick, is how you do a final word...

**Nick Nisi:** Wait. No, I have one more thing... Nah, I'm kidding.

**Jerod Santo:** You're done. You're done here. \[laughter\]

**Amal Hussein:** Honestly - I mean, I have something that's gonna tie this whole thing together...

**Jerod Santo:** Okay...

**Amal Hussein:** You know, with the AI shift that we're doing towards all having our little Copilot buddies... You're laughing at that. Is "buddies" the wrong word?

**Jerod Santo:** No, that's good.

**Amal Hussein:** Are we teachers, senseis? I don't know... Masters? \[laughs\]

**Jerod Santo:** Wing person?

**Amal Hussein:** Yeah. You know, I wonder if this is gonna hurt newer frameworks... Because is the model gonna be smart enough to work as quickly and make as helpful suggestions with Svelte and Qwik as it is React because there's just so much more out there?

So I do wonder how those two things are gonna play into each other, and I hope the answer is that the learn time, and the time to master is just gonna shorten, and/or maybe we won't need as many varied data inputs... But I hope that doesn't impede progress for us. I hope that "Oh, well, I can't use this on Copilot, so therefore I'm not gonna use it" - I hope that that doesn't happen.

**Kevin Ball:** I guess it depends on who Microsoft decides to bless. I was thinking about that with the TypeScript decorators. They could drive adoption just by having Copilot suggest decorators everywhere.

**Amal Hussein:** I mean, that's scary, and also cool, but you know... Who's making the decisions?

**Jerod Santo:** Embrace... Extend... And extinguish. Well, we are now ending on a very morbid though... But we couldn't let Nick have the final word, so I'd rather give it to Amal. But I am gonna end the show now, so on behalf of Amal, Kball and Nick, I'm Jerod, this is JS Party, and we'll talk to y'all in the next one.
