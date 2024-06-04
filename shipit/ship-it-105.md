**Justin Garrison:** Hello, and welcome to Ship It, the podcast all about what happens after you get push. I'm your host, Justin Garrison, and with me as always, Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Good. Also, I feel like the last 20% of all software projects, and then the maintaining it part is almost more painful than the beginning part.

**Justin Garrison:** The lifecycle -- 80% of software is not to the writing of the code, right?

**Autumn Nash:** Nobody tells you that in college.

**Justin Garrison:** We cover most of software on this podcast, if we want to just group that in the 80% of the lifecycle of software...

**Autumn Nash:** The part where the struggle gets real...

**Justin Garrison:** This is where you cry. This is the episode where --

**Autumn Nash:** Okay, can we talk about that? Why are all the memes and TikTok videos and Instagram videos, they're like "I'm a software engineer", and then they're crying? I'm "There's a pattern..." No one told me that 50% to 75% of this job would involve crying at your desk, and then asking the computer and compiler gods to fix your life.

**Justin Garrison:** A lot of the memes are like "Writing code is hard." Figuring out that algorithm, or that loop, or the clever way to do something is the hard part.

**Autumn Nash:** That's the fun part.

**Justin Garrison:** Right. You've got to figure out a problem, and you're not -- you're like figuring it out on your own time.

**Autumn Nash:** And then the edge case ruins your entire life...

**Justin Garrison:** When software interrupts your life...

**Autumn Nash:** And it's like "Just kidding..."

**Justin Garrison:** Yeah.

**Autumn Nash:** let's stop lying to people. Okay? We just want you to know it's real fun, but you may cry.

**Justin Garrison:** It does happen sometimes.

**Autumn Nash:** There will be tears. Just saying.

**Justin Garrison:** On today's episode we have Jon Johnson, who's going to talk all about tars, and compression.

**Autumn Nash:** His excitement for tars just makes my heart happy.

**Justin Garrison:** Oh my gosh, the Plus Plus content on this episode is the best.

**Autumn Nash:** That is the cutest poem I've -- he dads hard. And we know how he dads hard because the way that he read it was like perfect storybook nighttime daddying... And the way that he made it like rhyme... Fire.

**Justin Garrison:** He's read some Dr. Seuss in his life, that's for sure.

**Autumn Nash:** Right?! he's the Dr. Seuss of tars. Whoever did Deflate needs to call them and like write that poem into their documentation. Just a little video snippet of him.

**Justin Garrison:** Yes. If you want an episode with links to RFCs, and also poems, this is the episode for you.

**Autumn Nash:** But how wild is that? That's why I love tech. People get so -- it's just like all of us like in our random, nerd hyperfixation about what you just like really love, and seeing people's eyes light up, and they get all excited just makes me happy on the inside.

**Justin Garrison:** Yes. It is great. To start the episode, before the interview, we're gonna go ahead and go into a couple links for this week... And Autumn, I'm gonna have you go first this time. What have you got?

**Autumn Nash:** Okay, so I'm reading all the tweets from Microsoft Build, which I think are actually pretty exciting. It's really cool to see the new Snapdragon chip...

**Justin Garrison:** Yeah, the new Qualcomm Snapdragon X. I want one of those. As soon as I find a desktop or a dev reference board... I don't want a laptop; I want an actual just like stick it in a corner and run with my home lab.

**Autumn Nash:** I know. I'm the way that you love like Linux, I can't imagine you buying like a straight Windows computer... But I do want to see what you do with that chip. But it's interesting, because they're saying that the Snapdragon was created to basically filter all of the AI data that it's going to take off of your laptop. So basically, these laptops are going to constantly be viewing what you're viewing, and like collecting data to help you search. But then you get into data privacy. Is that FedRAMP and HIPAA compliant if it's constantly looking at what you're doing, and your bank account numbers, and your medical and health -- you know what I mean?

**Justin Garrison:** Anything on your computer...

**Autumn Nash:** Yeah. I think there's some stuff that we don't need to know about every nerdy Google search that I do... You don't need to know my full shopping history at 11 o'clock at night. But in some ways, data collection can be really helpful. We all love when the algorithm tells you about this really cool thing you didn't know about, so you can buy it... But it's interesting - is this going to be the new way that we do it, where you can take in all this information because a chip is going to filter out how to process that away from your other information? I don't know. I'm excited to see where the things that AI helps us do to make it where we can be more efficient to do things that we want, but I feel like we're getting in this weird --

**Justin Garrison:** Collect all the things?

**Autumn Nash:** Yes... And it's like, is this spyware, or is this better? Like, it's getting weird. Not just that, but the lady from Bumble said she wanted, instead of us doing like dating, she wants us to basically have two AI secretaries talk to each other... And I'm like "Yo, I thought AI was gonna do all the stuff we didn't want to do. Why are we giving it art and music, and writing, and...?"

**Justin Garrison:** You've seen plenty of people on the dating apps. They don't want to talk to people either. Social anxiety is real...

**Autumn Nash:** My dating history - it's been rough. I think I might need therapy from dating at this point... But --

**Justin Garrison:** There's an AI bot for that.

**Autumn Nash:** \[06:02\] ...I don't know if it's gonna get better... You know what I mean? It will just be even more like fakeness...

**Justin Garrison:** Two people show up in real world, they're like "Oh, so our bots talk to each other, right?" \[laughs\]

**Autumn Nash:** I don't know if that makes it better. Like, you're just sitting there... It's like, there's so much fake stuff that we already have to present this version of us on social media or on dating apps... Doesn't that make a layer more of trying to figure out who's a creeper or not? The AI might make you think they're normal, and then they're secretly super-creepy. I don't know.

**Justin Garrison:** Yeah. It's gonna be really weird. I don't know. We're putting it in everything because it's making money. Right now, this announcement with Copilot and Microsoft's - whatever the new Windows feature is that's making Copilot plus...

**Autumn Nash:** Which Copilot - regular Copilot and an IDE is really good. This is like -- I don't know...

**Justin Garrison:** Well, and that's GitHub Copilot, because there's -- like, Copilot is also the Microsoft-branded thing, which is just generic, like the Bing chat side of things. That's not coding. But there's GitHub Copilot, there's Bing Copilot... This is like the PC plus Copilot thing...

**Autumn Nash:** Yeah, they're kind of naming everything Copilot, which makes it hard to differentiate what --

**Justin Garrison:** They went hard on that naming, and now it's really hard to figure out which one's which.

**Autumn Nash:** Yeah. I love using ChatGPT and different AI as like the rubber duckie to get out your ideas. I feel like it's made me so much faster of a writer for different talks and things, just because you can be like "Okay, I have all these ideas. What's interesting? What's already been done about it? Where would you start an outline?" And then I get over that writing block of being able to fill in "Okay, give me like a template to fill in" type of deal.

But this is like -- we're almost taking the fun out of everything. I don't want it to create content for me, I want it to catch my spelling errors and like help me make it sound better. You're taking all the fun.

**Justin Garrison:** Well, I mean I have spellcheck in my Vim without an AI bot, right? Those are things that a known dictionary of words also works.

**Autumn Nash:** But I do think that at some point we can make better -- just regular things that we have, but we can make it better and more efficient with technology. But this is -- I don't know where we're going with this.

**Justin Garrison:** To me, one of the best things about using a chatbot or AI in some way is the hallucinations, the actual extreme sides of things... For real. I'll use ChatGPT, or Midjourney, all of the other ones - like "Hey, do something along these lines", but then I try to trip it up enough to get something outside of what I would normally think of, just to help me think of something else.

**Autumn Nash:** That's kind of what I'm saying... But maybe not to that extreme. But it helps you -- not just that, but sometimes things can get so repetitive, and being able to quickly search what's out there, what is like the coolest, most off the wall ways to do this? Or like the different perspectives... But I just think that -- like, I love talking to you about different perspectives on stuff, because I feel like you always have the Justin approach \[unintelligible 00:08:48.00\] that I've never tried before.

**Justin Garrison:** I guess most AI, if you're an expert on something, you're gonna be smarter than the AI is for just like general knowing things. But to summarize something else... And for me, thinking outside of the box. Like, "Hey, I want to think of this in a different approach."

**Autumn Nash:** I also like it as a fun way to learn. Sometimes you can only read so much, and you can only watch so many videos... Sometimes having that back and forth conversational approach to learning a new subject, and then you can ask questions, and then you can be like "Okay, I get this and this. Now let's go deeper on this." Using it as like almost a way to have a conversation to learn... I really enjoy that.

**Justin Garrison:** Just being able to direct your interest, because you're like "Oh, that sentence was interesting. That one wasn't." And then it's like "Let's dive into this piece of it." And I do think that there is some value in like PDFs summarizations, and white papers, and those sorts of things.

**Autumn Nash:** Yeah. And having somebody sort of explain something back to you is a different way of learning than reading it, right? Because you can ask questions when you're confused somewhere... But then there's also a lot of times where I've gotten that and it's been the wrong question... So I don't know.

**Justin Garrison:** Yeah. Well, and so what was -- Google recently had their developer conference, Microsoft Build is having their dev conference... Both of them all about AI. Apple's I think is next month.

**Autumn Nash:** \[10:03\] Yeah, they're next.

**Justin Garrison:** It's all going to be AI, I'm sure. So for anyone that wants to jump on Linux on the desktop, hit me up...

**Autumn Nash:** Yo...! Half of Twitter's like "If Apple goes in hard, where's Linux?" And then somebody was like "Linux had 200 CVEs", and I was like "..."

**Justin Garrison:** That is less than every other OS.

**Autumn Nash:** I'm like, I don't know if you're making a case... Like, I think the case that you think you're making, you're not making...

**Justin Garrison:** So yeah, it's been interesting... My article is similar, in that it's about Microsoft and AI... And this one's specifically calling out that Microsoft's AI obsession is jeopardizing its climate ambitions.

**Autumn Nash:** I think this is really interesting, and I don't think we should just dog out Microsoft on this one, because this is everybody. When it comes to a data center, you're either picking between using a ton of water, or a ton of electricity. You know what I mean? And this is going to be everybody. We were talking so much about wanting to fight climate change, and AI is like -- we've completely gone backwards on all of the goals.

**Justin Garrison:** Yeah. And I think this one specifically is -- this article is calling out Microsoft, because in 2020 they said they were going to be carbon-neutral by the end of the decade. And in the last year, they increased their carbon output by a lot, because of the new data centers and AI training... Because AI training and GPUs consume a lot more power than traditional web workloads, and whatever we were doing before.

I also wanted to call out - this is kind of ridiculous... They have a sustainability report Microsoft puts out, that this article is referencing... It is 88 pages of complete marketing nonsense. And I'm thankful for whoever was at The Verge who went through this and found the differences of like "Oh, this was hidden somewhere in these thousands of words." Maybe AI pulled it up for them, I have no idea...

**Autumn Nash:** I just wanna thank tech reporters, because sometimes they at least tell you where to go look, so that you know what you're getting yourself into, but your know what you're looking for... You know, you can go back and check their sources, but at least they tell you what's up.

**Justin Garrison:** And this was one thing -- I like to look at sources a lot. And so I opened up the sources, and I was like "There's no way that you could decipher what this one says, compared to the one they said from three years ago."

**Autumn Nash:** But see, this is why I don't understand how people are so all-in on any source that is just kind of giving you like answers for something. We double-check our sources on Google. When you were in college, could you just submit any link that you wanted? No. You had to like verify your sources. We don't let news reporters do that. We don't just take their word. So the fact that they're willing to just take an AI's word... It's not even like AI is bad. It's just that you should always check your sources and make sure you're learning stuff. And the fact that we're just like willy nilly giving them control over everything... You're like "But this is a terrible idea." We don't even do that with humans.

**Justin Garrison:** It's a non-determinate system. When you're trusting this big blob of information that gets spit out some way... And it's the same thing for humans; there's biases, and there's things that happen over time, and...

**Autumn Nash:** And us humans are honestly going to mess up AI. Even if it had a chance of being great, we're going to put biased data into it, because we are biased. You know what I mean? So there always has to be -- you can't just trust one human, and you can't just trust AI. It's got to be checks and balances for everything.

**Justin Garrison:** But specifically for my article, I just found it interesting that -- well, four years ago, when your stock price would go up by being carbon-neutral, that's what Microsoft did. Four years later, when AI will make your stock price go up, that's what Microsoft did. And I feel like company over company is just chasing the stock price, and it is very dangerous.

**Autumn Nash:** First, it's the carbon neutral. It's also like -- people are like "We should hire people that are like diverse perspectives", and now they're like "Screw your perspectives." So I feel like we're on that in a lot of areas. Tech is getting weird.

**Justin Garrison:** Yeah. There is a lot of -- especially in big tech, I feel like a lot of just chasing the stock price, and doing whatever is going to drive that price... Because that is the ultimate thing.

**Autumn Nash:** \[14:11\] Which kind of sucks, because we were building some cool stuff. And so much cool stuff just kind of like -- I mean, there are people, of course, still building cool stuff, but it's just like it seems like we're just doing the same thing over and over... And it's hard to get excited like we used to. There was like \[unintelligible 00:14:25.26\] pretty exciting, but it's just... It's hard to get excited. All these different conferences, you'd be like "Oh, did you see this new thing? I totally want this!" It would be like "I can't wait to try this out!" And now it's like the same flavor, over and -- I mean, to a certain extent, there's always a trend, but this is like...

I think we've already found the cool things to do with it. And of course, there's going to be other cool things, but I'm just like --

**Justin Garrison:** There's a lot that might shake out still... But it's definitely not bubbling up to the surface, and the mainstream stuff is not what I'm asking for. It's not what a lot of people are asking for.

**Autumn Nash:** Yeah, because I'm like "Dude, there's so many cool things that I feel like we haven't even scratched the surface on, or really like looked into."

**Justin Garrison:** So with that depressing news, let's jump into the interview with Jon...

**Autumn Nash:** We could be more depressing. We could talk about the market...

**Justin Garrison:** Let's just sidestep all that. We're gonna talk about tars, we're gonna talk about Deflate, and we're gonna learn a lot about just how basically tars -- tars rule the world. And really, if you think AI's taking over, really, tars are the OG. They were here before AI.

**Autumn Nash:** This is also a great example of when a developer is interested in something, their natural curiosity will go through the ends of the earth to find a good solution. It is the best. It's jut like, this is the epitome of software development right here. Like the warm and fuzzies.

**Justin Garrison:** So let's jump to the interview and we will talk to you again after.

**Break**: \[15:59\]

**Justin Garrison:** Alright, welcome to the show today, Jon Johnson. Thanks for joining. Tell us a little bit about yourself.

**Jon Johnson:** Hi.

**Autumn Nash:** We're gonna stop laughing at some point...

**Justin Garrison:** For anyone that's just joining this conversation, we've been talking for like a half hour now, and it's been a great conversation before the show, so we're just going to carry this right into the podcast.

**Autumn Nash:** Like, I'm at two cups of coffee and I still can't focus. ADHD. We're just gonna be here for like --

**Justin Garrison:** Does coffee help you focus? I don't think so.

**Autumn Nash:** It does...

**Jon Johnson:** You need some tea, maybe.

**Justin Garrison:** There you go. See, Jon's dropping the wisdom.

**Autumn Nash:** Don't be on his side.

**Justin Garrison:** So Jon, what do you do?

**Jon Johnson:** What do I do? I do container things at Chainguard. In a previous life I did a lot of container things at Google... But that entails, say, building, debugging, publishing, serving etc. of containers and all of our various container tools.

**Justin Garrison:** What software are you responsible for?

**Jon Johnson:** A lot. So I am responsible for the Chainguard registry at cgr.dev, and our build tooling, both Apko and Melange... I am responsible for Go Container Registry stuff, and the Google library, and also the Crane CLI that is derived from Go Container Registry... I'm responsible for the co-build tool for building Go containers... And probably more things I can't remember, but which sound very similar to that.

**Autumn Nash:** I feel that.

**Justin Garrison:** If it has Go in it, if it has container in it, Jon's probably touched it.

**Jon Johnson:** I have touched most to container Go things, yes, I think. Even if you talk about Containerd, Docker, or even the Red Hat ecosystem of container tooling, I think my name is somewhere in that commit blog somewhere.

**Justin Garrison:** And when you reached out, we were talking about coming on the show, it was like you were talking about tars. The container's base is three tars in a trench coat. And that's it.

**Jon Johnson:** So earlier today I was coming up with jokes for the show, and I thought I'd come up with that. I was like "Oh, I'm gonna say it's like three gzips in a trench coat." And then I open this, I was like "Oh, Justin made this joke already to me." And I was devastated.

**Justin Garrison:** \[laughs\] It's collaborative. It's fine. I'm pretty sure you probably said something along those lines in the email, so we're good.

**Autumn Nash:** So you guys work on your dad jokes ahead of time? You don't just come with them?

**Justin Garrison:** These are planned. Oh, yeah.

**Autumn Nash:** I felt like I've been lied to. That's like you just told me Santa's real. Those like dad jokes don't just like live?

**Justin Garrison:** I mean, my second joke was a mistake. So... Unplanned.

**Jon Johnson:** You know, you practice... And then they come out naturally.

**Justin Garrison:** You're waiting for the moment. You have a backlog, and you're just like "Oh, is now the time?" And you're like "No, not at the funeral. That's not the time."

**Autumn Nash:** My kids have started telling dad jokes, and I'm like "You're too young for this stuff."

**Jon Johnson:** You have to start them early...

**Justin Garrison:** So about tars and gzips. Explain to us -- I mean, you're you've been doing so much stuff with registries, and you're either packing or unpacking gzips over and over again, in pretty much every situation, right?

**Jon Johnson:** Yes. I do have -- I have a small confession to make, is that I'm here mostly because of the episode you had with Jason... And I want to correct the record on something he said.

**Justin Garrison:** Oh, okay. Here we go.

**Jon Johnson:** So first of all, I was very excited that he was coming on the podcast, because he's way more eloquent than I am, and has a lot of more interesting things to say... But when I listened to it, I was devastated that when you asked him "Was there any surprises from moving to Terraform?", that he totally didn't mention anything that I had been working on... Because I was so excited about it. And I accused him. I was like "Jason, surely the stuff I was working on is interesting", and he's like "I did. I swear I talked about it. I mentioned it." It's like "I don't know..."

**Autumn Nash:** Did you side-eye him in like your next one on one, and you were just like...

**Jon Johnson:** \[22:09\] No. I gave y'all $10. So it made it into the Changelog Plus Plus bonus content at the end, where I get named-dropped... So I was like "Oh..." So now I've been baited into being a Changelog Plus Plus subscriber.

**Justin Garrison:** We will mention your name. Anyone that wants to send $10...

**Autumn Nash:** I love how out of vanity, he was like "Look, I'm gonna find my name in here somewhere..."

**Jon Johnson:** Surely. So he said "No, I did talk about it." So I got it. I was very excited. I paid $10 to listen to someone talk about me... And then he missed the numbers. So like... Um, flashback to Changelog Plus Plus content, I guess, is that Jason made this claim that we were spending something like 30% of our time marshaling JSON, which was a huge waste of time. And I was like "No, Jason. We were spending 30% of our time just indenting it. We were actually spending 75% of our time marshaling it."

**Autumn Nash:** Good Lord...

**Jon Johnson:** The reason I remember this so distinctly is that once I had figured this out, our GitHub Actions, which were timing out after an hour, took 15 minutes. And so we were spending three quarters of the time just marshalling and unmarshalling JSON.

**Autumn Nash:** Someone At Hashi get this though on a commercial, or like a testimonial for your next talk...

**Jon Johnson:** Right?

**Justin Garrison:** So wait... So originally, you were sending these giant JSON blobs in and out of packaging container -- is that where the JSON was coming from? Where was this coming from?

**Jon Johnson:** No. So this was just TerraForm state files. And so basically, every state transition incurred serializing the entire state, and then like diffing it, and then saving that. And then the next step would load it from disk. And so our state files were tens of megabytes at one point.

**Justin Garrison:** Wow. That's a big state file.

**Autumn Nash:** That's also a lot of overhead cost of storing all of it...

**Jon Johnson:** Yeah, yeah. Well, you end up throwing it away immediately.

**Justin Garrison:** Yeah. It's ephemeral.

**Jon Johnson:** Right. So what is funny is that I did all this work to figure that out...

**Autumn Nash:** He's making the Justin face... What are you thinking?

1:Oh, God. I'm just listening. I'm trying to figure, like --

**Autumn Nash:** His face was the best. I was like "Oh no, something's in there..."

**Jon Johnson:** So I did -- I spent weeks basically figuring this out, and figuring out how to fix this... And I found a bunch of to-do's in like the TerraForm codebase about this, and I to-did them...

**Autumn Nash:** To-did them... I'm using that.

**Justin Garrison:** The Git commit right there. "To-did all of the to-do's."

**Jon Johnson:** This was in the middle of kind of the drama around TerraForm relicensing stuff... And so I ended up sending a PR to Open Tofu. I think it was called something else at the time, but I sent them a PR, and I was like "Cool. We just have to wait for them to release it." And then that took a while... So I ended up actually stumbling upon the solution we went with, which was like this in-mem state store that just throws it away anyway... And so we didn't even end up using

this work I did for like two weeks to fix this problem, because I found a workaround. But it is in Open Tofu now, so you should not run into these problems if you end up building several thousand containers with TerraForm with state marshalling.

**Autumn Nash:** Playing it forward.

**Jon Johnson:** Yes.

**Justin Garrison:** As you just pointed out, there's multiple ways to fix that problem, right? Essentially, you can make the marshaling and unmarshaling faster or better, or you can just like speed up your disk, essentially, to put it in memory; make it the fastest disk possible, and just say "It's gonna be in memory."

What other benefits -- like, could you do this in a different language that is better at marshalling? Like, if TerraForm wasn't in Go, and you were doing it in another language that had better JSON handling, would that also --

**Autumn Nash:** Is Terraform written in Go?

**Jon Johnson:** It is, yes. I think probably because -- I mean, you may be familiar with the fact that the JSON package in the standard library is going through a v2 design phase right now... But there's not like any way to do random access of stuff with JSON in Go... And so I think if you had something like this, you might end up with people writing code that took advantage of it. But obviously, from TerraForm's perspective, it's like "Oh, writing JSON to disk is really slick-fast, relative to all these expensive infrastructure operations, so we're not going to pay attention to that." That should be the fastest part of this whole operation, but when you do it, say, 30,000 times, it ends up slowing you down quite a bit.

**Justin Garrison:** \[26:25\] Yeah. And I remember a long time ago there was a service that they did a comparison between -- they're rewriting it from probably Scala, or something, and they're like "Oh, we want to rewrite it, and we're gonna go with Go, because it's fast. It compiles fast, and everything." And then the comparison with a Go version of the service and a Kotlin version of the service... And it was a GraphQL API, and actually, Kotlin was a lot faster, just because we had to keep marshalling and unmarshaling JSON over and over again. And there's actually -- just the handling that Java and Kotlin gave us was faster than Go. And it's like, that was an eye-opener for me, because I was just all-in on "Go must be fast, right?" It's like, well...

**Autumn Nash:** I'm just happy we're talking about Java right now...

**Justin Garrison:** \[unintelligible 00:27:03.06\] Because Java is really good at handling JSON.

**Autumn Nash:** And it has gotten considerably faster, you know? \[unintelligible 00:27:10.15\]

**Justin Garrison:** But again, back to that "How do you solve this problem?" - just having the fastest disk possible is.

**Autumn Nash:** Also, I think it's interesting just to point out that it's funny that there's so many ways to solve the same problems in tech, and there's so many different tools that are made to do it, and then sometimes it's still the legacy thing that we've had for 40 years... Even though everybody wants to do the hippest, new Go and Rust, and sometimes I'm like "You know Java could work for this, and we could save so much time... You don't have to reteach a whole team of engineers to write Rust. We could just do it in Java."

**Justin Garrison:** But then how are they going to put that on their resume?

**Autumn Nash:** You're not wrong. Somebody wants to write some sort of doc to propose it some way, but...

**Justin Garrison:** So setting the record straight...

**Jon Johnson:** Yes. Apologies for the digression.

**Justin Garrison:** No, it's fine.

**Jon Johnson:** It also, I think, is relevant, kind of, to the rest of this. So I got into thinking about Gzip deeply for a lot of reasons, but one of them is performance.

**Autumn Nash:** So it's when you go down that rabbit hole, when you start googling stuff, and like looking at eight different projects, and you're like "Three hours later..."

**Jon Johnson:** Yeah, I --

**Autumn Nash:** That's my life. I feel you.

**Jon Johnson:** Yeah... I know that I'm doing like real interesting work when I'm reading RFC, the text format, and it's like "Okay... I feel like maybe software engineer isn't a made-up term. I feel like this is actual work." The RFC 1951, it's a good one.

**Autumn Nash:** Highly recommended.

**Justin Garrison:** We'll put it in the show notes.

**Jon Johnson:** So I don't know... Should I take you back to why I started caring about Gzip at all, or should we segue through containers?

**Autumn Nash:** I'm just sad that podcast people can't see the faces that have been made, and this emotional roller coaster of like Terraform... Justin has made several great faces, Jon has made some great faces, and I'm just sad that they are being lost on the audience right now...

**Jon Johnson:** Well, we can make some shorts...

**Justin Garrison:** Yeah. They'll show up somewhere. But yeah, start with -- what are you doing Gzips? Why was this important to solve the next problem?

**Jon Johnson:** Sure. Okay, so there are two places in my life where my caring about Gzip is actually useful, and not just some weird thing that happened to me... Going back to three tars in a trench coat - I don't know how you came up with that. Maybe I -- surely I didn't... But it's obscenely accurate as a description. So before I joined Chainguard, I had spent about a year just kind of being nerd-sniped by Gzip in general, for other reasons we'll get to. But when I joined, I learned that I would have to do a lot of things with APKs, and I didn't know what an APK was. It's a package format. I believe APK stands for Alpine Package Keeper. But what I learned is that it is three gzipped tar balls in a trench coat.

**Autumn Nash:** \[30:10\] He's not wrong.

**Jon Johnson:** Yeah. It was surprising to me that like all of the stuff I have learned about Gzip and tarballs for container reasons is like directly applicable to now my day job... And so I kind of double-dipped on this weird obsession that I have, which was very useful for a lot of reasons. But for the purposes of performance, it is really useful to us that APKs are just gzipped tarballs... Because if you think about how we build a container image with Apko, a container image is also just a gzipped tarball, plus some JSON stitched into a DAG. But the gzipped tarball bits are like the same as the APK.

So you have a bunch of packages, you want to put them in a container image... It's actually really straightforward to turn gzipped tarballs into another gzipped tarball without going through disk in the middle. So when I was tasked with this performance work on our image release process, the first thing I did was look at the Apko tool. I was like "What are we doing? Where are we spending our time?" And I learned that the majority of it ended up being writing hundreds of files to disk, and then immediately reading hundreds of files from disk, and putting them in a gzipped tarball, when they had originally been a gzipped tarball.

And so lots of optimizing, lots of profiling \[unintelligible 00:31:31.21\] where it's like "Okay, we don't write every single file out to disk anymore, and it's way, way faster." So the build I was using as a test case went from 30 seconds to like two seconds. And that was huge for our build times. It turns out it didn't help our build times at all, because we were just marshaling and unmarshaling JSON the whole time. But once I fixed that bottleneck, it dropped down tremendously. It was like four times faster.

I don't know why we're talking about this anymore, but... Yeah, this kind of like insight, of like "Oh, there's actually something here with Gzip and performance" is why I wanted to talk to you, because it's like "Oh, other people should know. This is interesting, actually. I care about it. You should, too."

**Justin Garrison:** One of the things I wanted to talk about too was about -- like, we take all these gzips, and APKs, or containers, or whatever you want to call them, and then we put them in on a website. And we call that a registry, or a repo, or something that is just a form of a collection of tars or gzips with some metadata on which ones to download when. That's basically the whole thing.

**Jon Johnson:** Yes.

**Justin Garrison:** Except for, I guess, yum packages, which should be cpios, right?

**Jon Johnson:** I actually don't know what that format is... If I come across it --

**Justin Garrison:** It's old... \[laughs\]

**Jon Johnson:** It looks almost like tar, but it's not. I don't understand --

**Justin Garrison:** It was before tar. Cpios are very ancient, and they ran all of yum.

**Jon Johnson:** Terrifying.

**Justin Garrison:** But - so yeah, we have all these things, and then we throw them in websites, and then just everyone downloads them from there. And we say "Okay, we have a website, you can download all the tars you want... Here's how you discover which tar you want", whether that's an APK file for installing a package, or layers of containers... And those layers are broken up into other things, and referenced by other JSON files, right? So my container image is a collection of other tars. What work have you done on that side? Because you've got that distribution side of it. We could package it performantly, and then distribute it, and then as people are downloading it, it's usually like "Oh, we make them small." It's like "Well, that's not the only way."

**Jon Johnson:** Right. So my introduction, I think, to all of this Gzip nonsense was Stargz. So a while ago - I don't know how long ago - Brad Fitzpatrick, who was at Google at the time working on the Go build system, trying to make the Go builds faster, ran into the reality that polling was really slow.

\[33:54\] So they had packaged up in their Go-based images for testing, many, many gigabytes. I think tens, or hundreds of gigabytes of stuff... Very little of which was actually accessed on each build. So he came up with this thing which he called Crfs, which is a container registry file system that used Fuse to mount effectively your container image from the registry onto your local file system. And it would give you the ability to access the files directly, instead of having to first pull them... But it required pre-processing those images a little bit to be amenable to this mounting format.

So what he ended up doing is effectively rewriting the container image layers to be more like a zip file, instead of a gzipped tarball, which maybe is a good digression to talk about the difference...

**Justin Garrison:** Yeah, why would that be a benefit?

**Jon Johnson:** So zip files are essentially a bunch of individually-compressed files. And then at the end, there is a directory for those files. So when you open a zip file, if you want to look at the contents, your software's going to seek to the end of the file, find an offset that says how far back to seek, it's going to seek back to the start of a directory, and then within the directory it has offsets to all the other files in the zip file. So it gives you the ability to seek quickly to any of the individual files that are contained in the overall zip file... If that makes sense.

**Justin Garrison:** An index. It's like if I have a book and I want to find a chapter, I can go to the index, I can find the chapter... And I'm like "I can just jump right there, and we can get the thing that I wanted."

**Jon Johnson:** Exactly. Let's contrast that... So targz's are a tar file, which is just a concatenation of all the files, with metadata in between them, and there's no index at the end. So if you want to access a file on a tar file, you have to read through the entire thing until you find the file you're looking for, and then you can read it.

**Autumn Nash:** Oh... So that's why the zip files are faster.

**Justin Garrison:** Yeah, there's no index on that. Yeah. Okay...

**Jon Johnson:** Exactly, exactly. So the benefit of Targz over zip is that Gzip compresses the entire stream all at once, whereas zip compresses each file individually. And so with gzipped tarballs, if you have a bunch of files that are really similar, and fairly small, then you're going to end up being able to compress that way smaller than if you've compressed each file individually, like with zip files.

**Autumn Nash:** But do you still get the indexing?

**Jon Johnson:** You don't, unless you use Brad Fitzpatrick's crazy invention that he called Star-gz file.

**Autumn Nash:** Oh... So you've got the compression of the tar file, but you've got the indexing of the zip file. So it's not only faster and compressing better, but then it's indexing to find stuff easier.

**Jon Johnson:** Right. It kind of strikes a middle balance between the two... So the way that works, briefly, is that when you're going through the startgz file, every so often you just stop the Gzip stream and reset it. So instead of being one giant Gzip archive, it's actually several Gzip archives, just concatenated together.

**Justin Garrison:** \[38:00\] So you're just like chunking a certain -- so you're not getting as good a compression, but much faster read time, because you're like "Hey, this first meg is compressed", but then I get some metadata to say what's in the next meg.

**Jon Johnson:** Right. So I think it's every two, or four, or something... Maybe it's every file, honestly, but every so often, you just reset that stream. And then at the end of this stream, you have a table of contents index thing, that is "Hey, here's all the offsets of all the files I just ripped", you write that file to the targz, and then at the very end you include "Here's the offset to that table of contents", and it's essentially identical to like a zip file, it's just in targz clothes, right?

**Justin Garrison:** Because you're not getting as good a compression as compressing the entire stream, but you get that faster read time.

**Autumn Nash:** But you're basically meeting in the middle between performance and read time, which is like a balance that is hard to strike. So that's like really very functional.

**Jon Johnson:** Yeah. It was super, super-clever. And what I learned from that is that "Oh, Gzip is kind of this interesting format, where you can have multiple Gzips, just concatenated together, and Gzip decoders are cool with that." They're like "Oh, that's fine. I will just keep reading through. Now that I've found a new Gzip archive, I'll just keep going \[unintelligible 00:38:37.02\]

**Justin Garrison:** And one thing that -- I mean, I didn't know this for a very, very long time... When you say "concatenate together", you literally mean, like, I can use the cat command with two Gzip files, and I can pipe it to another file. And that is literally just -- you just append the two things together, and the cat command will just like "It's one file now." And that's how that works.

**Jon Johnson:** Yeah. It's really bizarre, but it works. And so I was very excited about this, because it's like "Oh, great, we can get lazy access container images. Everyone should adopt this. Let's do it." And some folks kind of took that and ran with it. And there's another format called eStargz, which is basically the same, but if I understand correctly, they have some metadata around like optimizing access patterns. So you can prioritize certain files to be prefetchable, so that you can speed up the startup time even further.

**Autumn Nash:** That is really smart.

**Jon Johnson:** I no longer am championing Stargz, because I learned more things, and I think there's a better option...

**Autumn Nash:** I love the rabbit hole that you went through... We've gone down an emotional roller coaster of like files, and I love it.

**Justin Garrison:** This gz roller coaster is taking us for a ride.

**Jon Johnson:** It has been like a two or three-year journey for me, which is like just so lame... \[laughter\] But I just can't get away from it. And every time I try to, I find out a new thing that I find interesting.

**Autumn Nash:** That's when you know you're doing good work, though... Like a work that's interesting to you is when the rabbit hole is -- like, that's when you are on the right project.

**Jon Johnson:** Right. It just keeps going. Like, "Okay, yeah, there must be something here." So the drawbacks to that, right? ...as you mentioned, it doesn't compress quite as well as, say, a zip file would. You also now have in your Gzip archive this table of contents. So when you decompress that container image, there's a weird file in the file system that's like "What is this? What's this giant JSON file?"

**Justin Garrison:** It's a bonus! \[laughs\]

**Jon Johnson:** And so that's like "Uhh... The in-band stuff - not great." The other thing is that it doesn't work for existing container images. You have to rebuild with like this special tool, that processes the layers to put them in this format.

**Justin Garrison:** And yet, just to give the listeners like "This was specifically designed for containers, for speeding up that poll process." Because usually, you're going through and you're like "I have a container image", and that's sending you a metadata list of like "Here's 10 other Gzips you have to download." And in with Stargz, or at least with extended Stargz, you can say, "Hey, I need to start this NGINX container, so just give me the layer that has the binary NGINX and whatever libraries it needs. All the other cruft in the container, I don't need right away. I can load that after the fact. We're still going to download it, but I can start my container faster", and that's a big win when you have tens of gigs in a container. You're like "Actually, this container is really large, and the download takes a long time." Because usually, it's just like "Download, decompress, start." And you're like "Hey, let me just download the bits I need first. We'll decompress that and we'll start it." And this Stargz allows you to optimize "Hey, I'm going to rebuild my container and say -- look, we're going to profile it basically, and say "Which files are access-first? Let's put those in their own layer. And then when I tell you to download this, you're just going to fetch that one piece. And we're still going to download the stuff in the background, but the piece to start will come down a lot faster than waiting for 10 gigs."

**Jon Johnson:** \[42:03\] Right, right. And just to contextualize that with some numbers, the public ones I've found, that everyone references, are from this paper Slacker from 2016, and their number -- I wrote these down, because there's no way I could remember this. They claim that 76% of the startup time for a container is in copying and installing stuff, whereas to actually start up, you only need about 6% of the data in the image. So it's a pretty substantial amount, especially when you aren't doing stuff like we are, where you're trying to slim down your images as much as possible, and have actually everything in that image is something you need. Most people don't do that, and so for most people these kind of lazy filesystem things are super-useful.

I'll pause, because in my life this is where I had this cutoff point. So I obsessed with Stargz a little bit for a while... There was a lot of efforts from people to switch from Gzip to Zstandard, which we could talk about... But let's get back to that later. I had a -- well, my wife had a child with me in the interim. And so there was a point where I was just sitting around a lot, holding a baby, or not able to sleep, and thinking about Gzip, and thinking about this stuff... Because right before we had this child, I learned some things from someone on Twitter, who kind of nerd-sniped me into this.

So I have this website I maintain for exploring container images, because that's most of my job. And especially at work, people just ask me stuff... And so I was like "Oh, let me make a website for you, that can answer your question, so I don't have to, and I can do other useful things." So the website is oci.dag.dev. And if you go there, you can like put in a container image, and it'll show you what that looks like, and you can click on the dag links to layers, and then it'll load the layer and show you the contents. You can click on the files and it will show you the actual file contents.

So I made this, and then someone on Twitter made something very similar. So Agent Steel made a very similar website. And I liked a lot of it, but I didn't like other parts of it... But the thing that I couldn't believe is how fast his website was to load file contents. Because in my mind, you would have to store -- you'd have to like decompress the whole thing, and store these files separately on a disk somewhere, so that you could very quickly load them. Because with the tar-gz you have to seek through the entire thing until you find the file you want to use. And so I was like "I have to talk to you, because I have to understand how you're doing this. Because as far as I can tell, it's impossible." And so I got him on a Google Meet, and he showed me that you can do even more clever things with Gzip if you drop down even further a layer into Deflate.

So there is a tool called I think Gztool, and it allows you to get random access with a tar-gz file without modifying it... Which is something that I thought was impossible. To the point that when I learned how it worked, I couldn't stop thinking about it, and I even wrote -- I wrote a poem basically about Deflate.

**Autumn Nash:** But you have to read this poem. We need to hear it.

**Jon Johnson:** So I have an abridged version of it that I might share if I get very comfortable... But yeah, so I was reading like a lot of children's books right at the time, to a toddler, or I guess an infant...

**Autumn Nash:** \[45:42\] I love that you did this while like not sleeping, because if I told you the amount of times that I figured out code in the middle of the night, or like while holding a sleeping child - it's a low-key flex, okay? Because when you have kids, you are forced to walk away from code sometimes, when you're like trying to beat your head against it... And I used to think that made me a bad engineer, until my kids went to go hang out with their dad for two weeks, and I was almost less productive, because I didn't know when to walk away... Because I have all these breaks that inside my day, like you've gotta pick up kids, and do all that... And then it was just amazing. I sucked so bad, because I was just -- I'd sit there and try to bang my head against the wall... I get the best -- I can write a doc in my head while holding a sleeping child.

**Jon Johnson:** There's something to it, where you have no options; you are only in your mind. And so you're just like "How can I --"

**Autumn Nash:** And it stops you from writing code too fast. I was reading a book, and it's like about thinking -- it's about doing technical, mathematical and like technical things, and how to like teach yourself more efficiently... And there was a whole part about -- there were different ways that famous people in history have learned how to teach themselves things... And one was like a guy swirling ice in a glass, and then another one was like -- you know those balls that people have, that back in the day were used for concentration, and like squishy balls and all that kind of stuff? Like, they talked about all these different ways, but it all came down to like - have you ever cleaned, when you should be doing something, but instead you end up cleaning or doing something random, but it's something that's mindless?

**Justin Garrison:** It's part of the process.

**Autumn Nash:** Yeah, it is a whole proc-- but this whole time you're like "I'm being unproductive", but you're not being unproductive. It's like hacking your mind. And I was like "Oh, my God."

**Justin Garrison:** Daniel Kahneman has a great book called "Thinking, Fast and Slow", and it's 15 years old now, or something like that, but it's an amazing book on lik, hey, when you're in the moment, you think of things quickly; you have to take a step away, you have to just think slowly... Not necessarily about the problem, because you have to think around the edges of the problem, and then ideas come back.

**Autumn Nash:** It's amazing. Like, that's why people think of like fixing your code, or whatever, in the shower, or like when you go to sleep, because your brain is working through it subconsciously.

**Justin Garrison:** Oh, yeah. Naps are my superpower for debugging things.

**Autumn Nash:** You're such an old man. I love it.

**Justin Garrison:** I've debugged o many things by like "You know what? I can't think of a solution right now. I'm gonna close my eyes for 15 minutes, and I'm gonna come back." And if I still don't have a solution, I'm gonna go for a walk.

**Autumn Nash:** Dude. And I thought that was being unproductive. And then I learned how to go for a walk, and take a break... And I was like "No, I have to figure it out now", and you have to be perfect. My favorite TED talk is "Learning how to be brave, not perfect." Shout-out to the lady who created it, Girls that Code. She did that one. But it's so true... See, Justin's been doing these secrets this whole time; and you were doing the secrets holding a baby...

**Jon Johnson:** I think the only time I can solve problems is really when I'm not trying to, and you're forced to sit with your own thoughts. And I'll share one more example of this. I went with some friends to -- I don't know what... It was like Handel's Messiah, I think, a Christmas play... I was just so bored, because I didn't understand what they were saying. It wasn't English, or I just couldn't hear anything... And so we were just all sitting there, like "This is not that pleasant." And so then my mind just started wandering to this stuff we're talking about, actually, and I solved a problem I was having with my oci.dag.dev website, and I realized I could store things in a particular format to make it amenable to like seeking -- so I wouldn't have to buffer anything at all in memory. I was like "Oh, I've done it. I've figured it out!"

**Justin Garrison:** "I have to go!" \[laughs\]

**Jon Johnson:** \[unintelligible 00:49:15.15\] "I've figured this out." She's like "I don't care." Okay...

**Autumn Nash:** Dude, I told my son that, and I felt like the most old person ever, but I was like, sometimes you have to learn how to be bored. And I was like "Oh, God, I sound like my parents."

**Jon Johnson:** This is good for you.

**Autumn Nash:** But it's true, though. I was like "You keep going from one thing to another. You don't ever let your brain sit and think." And my brain is always going from one thing to another, so it's like... To learn to just be like --

**Justin Garrison:** So you discovered Deflate, right, Jon?

**Jon Johnson:** Yeah, yeah. Back on track.

**Justin Garrison:** All the way back to -- we're giving up on Stargz, you had a kid, you discovered Deflate, and you're thinking of this stuff.

**Jon Johnson:** Wow. That's a great summary. \[laughter\]

**Justin Garrison:** That's why I'm here.

**Autumn Nash:** This is why we keep Justin around.

**Jon Johnson:** \[50:00\] So I want to try to describe Deflate to you... I think without a visual aid, it's basically impossible. But I've also on podcasts -- I think basically what we're describing... If I'm forced to try to visualize something, just from hearing someone describe it, I actually have a way better chance of understanding it than if they give me like a really good visual diagram, because I'm actually flexing my mind, trying to grasp what they're saying...

**Autumn Nash:** It's like when you read a book, and you have to imagine the scene, and it's not a movie.

**Jon Johnson:** Yeah, exactly. So let me try to explain this. And if it doesn't make sense, that's fine. So Deflate is essentially the body of Gzip. If you were to look at a container image layer, I would attribute maybe 16 bytes of it to Gzip, total, and then the rest of it is all Deflate.

And so when you talk about Gzip, what you're really saying is like "Deflate with a header that's Gzip, and a trailer that's Gzip." And so the Gzip parts of a Gzip archive are just a header that says like, optionally, the file name, definitely it says "Hey, I'm Gzip", and then there's some places to put metadata.

And then the trailer is "Hey, here's a checksum of all that data you just read, and the size that you expect it to be." But because Gzip \[unintelligible 00:51:13.22\] And so that's annoying, for a lot of reasons. But yeah, the Gzip part of Gzip is actually very small. The Deflate part is the actual like "Hey, here's how a compression works, part of a Gzip archive." And it's based on something called Lz77, which is math, basically, that I don't understand... But the Deflate algorithm is something you can understand pretty easily.

Deflate is made of a sequence of blocks. And it's kind of like a linked list, where you just keep going through it until you find a block where there's a header that says "Hey, I'm the last block." And so you read through a bunch of Deflate blocks and decode them individually, and then you stitch those contents together.

So the header is just three bits of a Deflate block. A Deflate block starts with BFINAL, which is a bit that's either zero or one. If it's one, it means "Hey, I'm the last block. When you finish reading this, you're done. Stop reading." And the next two bits are the type. So there are three types of Deflate blocks. It could be 4-bit. The fourth one is reserved, and not used.

So the first block is "Hey, I am uncompressible data. The encoder just gave up, because this data can't be compressed very easily. Or you didn't give me enough time to figure this out." And so that just starts off with a length that says "I have 100,000 bytes, and it's all binary data. So just copy the next 100k bytes out of this block." That's great for if your container image contains, say, literal images, like JPEGs. Those are also Deflate-encoded already, so you're not going to be able to compress them any further.

So that's BTYPE=00, the first one. The next block is fixed-compressed, which means that it's a compressed block, but the Huffman tables are hardcoded. So what does that mean? So the compressed blocks have a header themselves, which is like two Huffman trees. If you're not familiar with Huffman encoding, I'm not going to try to explain it. But I'll do it very quickly... You can imagine that most data is not uniformly distributed. So say you have some English text. If you think about ASCII, there are 256 possible ASCII character bytes, right? English is not many of those. So if you just have a bunch of text, you're going to want to prioritize, say, the letter E over a zero with space, or something.

\[54:01\] And so what Huffman encoding does is it basically sorts all your data by frequency, and then it encodes them in a way where the most frequent things are small, and the less frequent things are large. And so it's just a way to basically make a bunch of stuff smaller, in a generic way, that's very clever.

**Autumn Nash:** That's like a complicated tree, basically.

**Jon Johnson:** It's trees. Yeah.

**Justin Garrison:** And roughly, if it's a text file or a book, I could say "Hey, I see the\_ a lot. So I'm gonna just say that's in here the most, and so I'm just gonna say that's number one." And then anytime you see a number one, it means this. Right?

**Jon Johnson:** Are we willing to be very pedantic? Because that's not quite right in the context of Deflate.

**Justin Garrison:** Yeah, why not?

**Jon Johnson:** Okay. So there are actually two trees that they themselves become Huffman-encoded. So the start of a compressed block is a tree, that contains two trees' worth of data. One of those trees is for literals. And so each byte is encoded as a Huffman-encoded literal. So you have 255 of these. Those are Huffman-encoded, but it's just one character. Whereas what you're talking about is multiple bytes as a sequence, that are repeated often. That's the second bit.

So beyond just Huffman encoding, you also have -- I don't remember what the RFC calls it, but basically pointers. So it is a pair of bytes - maybe more than one byte, but it's two numbers, essentially. And it says "Hey, I'm a pointer. If you go back 12 bytes, and then copy the next four, that's it. That's all you need. So do that, please."

And so what was your example? You've got the\_, and that happens a lot; you're going to end up with this pair of numbers that represent the previous time you saw the\_ space. And so you just go back, you copy that, and then you keep going. And so it's those two things together that give Gzip really good compression ratios.

The other cute thing that I didn't realize before staring at RFC 1951 for a long time is that with those pointers you can actually like predict the future. So let's say you have 1,000 zero characters, which happens at the end of a tar stream. So this is a real thing. You can say "Hey, go back one character (that's a zero), and then copy the next 1,000." And it knows, "Okay, the next character will be a zero after I copy the first one", and so it can just like kind of predict that. So you can get -- if you have like ABC, ABC, ABC, you can say "Go back three, and then copy that for the next nine." So it's this cute little trick that allows you to get long spans of like padding down.

I kind of lied a little bit. You can't do it 1,000. I think the maximum length is like 100-something, or 200-something. 263, or something. But it's a good thing.

So popping the stack a little bit... So the other type of blocks are compressed. So we have compressed blocks. With BTYPE=01 these are fixed trees, basically. So they're hardcoded in the spec, and you don't put them in the block themselves. They're out of band, and everyone knows them. This is useful for compressing really small data, where it's not something you want to like encode an entire Huffman tree in, because that's going to end up being bigger than the data itself. So if you were to compress "Hello, my name is John", it would end up being BTYPE=01, and it would be fairly small.

**Autumn Nash:** Why is it immutable, though? What makes that?

**Jon Johnson:** \[57:45\] It's just a little optimization -- so Deflate itself is a cute engineering trade-off of a lot of things that are aspects of like Lz77... But it's just an optimization where if you have a small amount of data to encode, it's better if we all just agree ahead of time on what those trees would be, so that we don't have to put it in the data stream, it's just part of the algorithm.

**Justin Garrison:** It's just hardcoded in the spec, right? You're like "Hey, we're gonna do this type of data, and if you're decoding this type of file, if I reference it, I don't need to add it myself."

**Jon Johnson:** Exactly. The last block type is compressed dynamic, where at the start of the Deflate block you have this inline encoding of the Huffman trees, where you have the literals encoded, and the lengths encoded. And that's it, actually. So that's all of Deflate. So writing an encoder - very complicated, and like a lot of magic and wizardry and stuff... But to decode, it's actually kind of straightforward. Y'all seem to understand that, right? So now, ta-da! You've learned how Deflate works. The magic trick, now that you understand Deflate, is turning that into a seekable tar-gz stream.

**Justin Garrison:** And not seekable as what Stargz was doing with those blocks of metadata.

**Jon Johnson:** Exactly.

**Justin Garrison:** Now you can go right to the Deflate block, and pull out the smaller blocks in there, and know how to decode just those bits, right?

**Autumn Nash:** So are you then like almost indexing Deflate?

**Jon Johnson:** Yes. So I'll describe this algorithm... It's very cute. And then maybe we can do the --

**Autumn Nash:** You're the only person that makes things cute. I'm loving this. We just made compression cute. This is amazing, and I'm so here for it.

**Jon Johnson:** It's so, so clever. I can't believe it. So the last piece of information that you have to understand for this to make sense is - with those pointers, when you're seeking backwards to copy some data you already saw, there's a limit to how far back you can go. And that's very, very important for this. So because Gzip is circa early '90s, how far back you can seek to copy some data is limited by the computers of the time, and the amount of memory we have available to us. And so a reasonable number was chosen. That was 32 kilobytes. And so you can only reference data that's within the last 32k that you read, so that it can be like hot in memory; it's fast to decode that.

What that means is that if I have that 32k around somewhere, I can give it to the decoder if it asks for it. So the trick of this seekable Deflate stuff. And if you want a good implementation of it, Amazon actually put out something called the SOCI Snapshotter, which is seekable OCI. So SOCI Snapshotter is this trick applied to container images. What you do is every so often when you're decoding this Gzip stream, similarly to how Stargz works, you would just cut off the Gzip stream and restart a new one. Instead of doing that, you take a little checkpoint, so you hit like a Deflate block, and you say "Hey, I'm going to just save off to the side the previous 32 kilobytes I just read of uncompressed data. And I'm going to do this every, say, four megabytes." And if you do that, then you can also seek to that point in the future and start decoding from there.

**Autumn Nash:** So you're making your index as you Deflate it.

**Jon Johnson:** Yes. And notably, you don't have to change the input at all.

**Autumn Nash:** Does that also help if, say, your download got interrupted? You could then start at those same intervals?

**Jon Johnson:** Yes. You could also do that with -- well, so yes...

**Autumn Nash:** Would that help for like data recovery also? Say stuff got interrupted, and for when you need to learn when to start later, if you do get interrupted?

**Jon Johnson:** Yes... So it kind of depends on how you do that. If you download the whole thing first, and then g-unzip it, then yes, you don't need this. But let's say you're downloading the whole thing, and as you're downloading it, you're unzipping it and writing it somewhere, and you're not keeping track of any of the previous stuff you've downloaded. You could use this technique to restart from more recently than the very beginning. So yeah, this could work as a way to restart a download... Which is clever. I haven't done that. But yeah.

\[01:02:10.09\] So the other thing you need for this to work is the table of contents, of like - okay, I have a tar file; I need to know where in the stream that offset is. And so you end up with this index of checkpoints, which tells you how far into the Gzip stream you can seek, both like the compressed and uncompressed offsets... And then you have this table of contents for the tar file that's the uncompressed offsets for each file. And then you do effectively a join of those, and say "If I want this tar file, I need to seek 30 megs in. Let me find the closest checkpoint I made to that 30 megs in. Oh, there's one at like 28 megs. Cool. I will seek to that 28 meg point, and then start discarding until I reach the tar file." That lets you skip the first 28 megs entirely, and only download that slice of the data that you actually need. So that's the trick, that's how SOCI works. That's how my container image website viewer thing works. And it's really fast, right? I'm in love with it.

**Justin Garrison:** And at that point, for something like a container image, you don't have to package it a special way. You have to build an index of the package contents.

**Jon Johnson:** Exactly. And this gets into some OCI stuff, but - you know, "Where do you store those?" was kind of a question that people had for a long time. And there wasn't really a good way with OCI to associate one artifact with another without just rebuilding the thing. We kind of hacked around this... I was once responsible for Cosign; that's another one. So the way that Cosign works is you have like a specially formed tag in the container registry, that gives you that edge from like "Hey, this is metadata about this image, and I'm going to push it to this magical tag name." In OCI, kind of recently, we standardized 1.1, which adds a field, it lets you associate one artifact with another artifact. What the SOCI folks do is they use that, and they say -- they push to the registry the SOCI index, which has all this information, and associates that index with a container image that it's referencing.

So as a client, if you're like "Hey, I want to access this lazily", you can ask the registry, "Give me all the metadata that references like this image", and if one of those things happens to be a SOCI index, then ta-da, you can lazily access it without modifying it... Which is the whole trick, right? It's like, we want to do this without actually touching customer images, or images we built from some other way.

**Justin Garrison:** Right. And you don't want to force people to rebuild everything with a special tool that isn't globally supported maybe, or they don't use it everywhere... So then you're like "Oh, I have this one version of the image that is compressed in a certain way, and another version that's just straight Docker", and it's like "Oh, well, but if I'm pulling it, will my tools know how to do that? Will my Kubernetes cluster get the right thing?" And instead, you could say "Oh, it's an extra metadata thing." If someone ignores it, that's fine; they'll download the whole image. It's still a standard OCI image, with all of the normal stuff you'd expect. But if they do support that metadata and say "Oh, I can download this faster", there's a separate piece of metadata attached to this image, and I can go and fetch that piece, which is much, much smaller, and then seek through the image for the files that I want, in an order I want them, or however I'm associating... Like, I just want the startup bits for that first.

**Jon Johnson:** Exactly. And the crucial bit for me is that I can use this technique on all existing container images that have ever been built, and it works. And so that's great. Because for my purposes, I want you to be able to look at any image quickly. And you can.

\[01:05:52.11\]"The size of the index ends up being -- it depends, but heuristically, if you decide "Every four megabytes I'm going to take a checkpoint", then it works out to be about 1% the size of the original archive, because you're paying for 32 kilobytes for every four megs.

For really big images, that 1% actually ends up being big still... And so the clever thing I did, I think, as a contribution to this whole idea, is that my index format, I made also a tar-gz file. And so if I decided that that index is too big for me to hold in memory, I reindex it. And so that thing itself is indexed. So if your image is over 20 gigabytes, then I'll end up creating a secondary level of indexes, so that I can lazily access my index, to lazily access your image. And because you get like 100x every time you do that, it ends up -- I think you only ever need two levels, because most objects stores only let you store like a five-terabyte image, or something.

**Justin Garrison:** Right. But even like a five-terabyte, you shrink that to 1% for your index, and then shrink that to 1% again, for your index of index... And you're not downloading a five-terabyte image to get the files you need.

**Jon Johnson:** Yeah. This was my eureka moment during the symphony. I was like "Oh, I know what to do...!"

**Justin Garrison:** \[laughs\] And that applies beyond just containers. I mean, you're obviously doing it with containers now, but even for things -- when I think of large language models, if we are compressing those, and we want to like decompress pieces of them, or if we only want to get like some portion of any large file that's in a tar, this indexing applies.

**Jon Johnson:** Yeah. And in fact, something that's interesting about that is that certain projects store their large language models as OCI things. So the Ollama stuff, you can look at it using my tools, because they're just in a registry somewhere. The other application of this, as we talked about at the beginning, is that APKs are three gzipped tarballs in a trench coat... And I also made apk.dag.dev, because I was tired of debugging our packages, and I was like "Wait a minute, these are just Gzip tarballs." And so I forked it a little bit and just changed a couple of things, and I was like "Great. Well, this technique now works for all our APKs." I was very proud of that. It's great.

**Autumn Nash:** You should be.

**Justin Garrison:** Yeah, that's awesome. Anything that makes debugging easier - all for it.

**Justin Garrison:** And faster, right? Same thing with like when you're marshalling and unmarshalling JSON. Like hey, what if we could speed up how fast this disk is, and just get past the problem by making that as extremely fast as possible? And in this case, what if we can get beyond the "I have to download this big thing" by saying "I only want to download these bits", right? You could like throw away or ignore all the rest of it, and just say "I just want this piece."

**Autumn Nash:** I feel like those are the hardest parts, too. Those are the things that you spend the most time on. Debugging, and trying to find things. If you can make that easier, you've already cut a lot of your engineering hours.

**Jon Johnson:** Yeah. But what I do now is if I'm ever doing something where I'm just twiddling my thumbs, waiting on something really slow, it's like "I should spend this time making it not slow." And so anytime I'm waiting on CI, or whatever, for something, I'm like "Let's whip the profiler out and actually see what's going on." And that's what led to all this, basically.

**Justin Garrison:** Well, Jon, thank you so much for coming on and telling us all about RFC 1951, and how Deflate and Gzips work. That's just awesome. I love all the nitty-gritty in that, of how broadly that applies, and how specifically it allows things like your DAG to work, and to be performant, and to let people have those tools.

**Autumn Nash:** Can we get the poem, though? We need the poem.

**Justin Garrison:** Oh, that's a Plus Plus thing, right?

**Jon Johnson:** It could be. We could put a teaser in... So no joke, it's like a 10-minute read.

**Autumn Nash:** Dang, you wrote a poem-poem.

**Jon Johnson:** Yeah, I'm kind of embarrassed. I think maybe it should be Plus Plus subscriber content, but --

**Justin Garrison:** No, that's fine. If you are a Plus Plus subscriber and you want to hear the poem, Jon can read it out for us... If you're feeling comfortable.

**Jon Johnson:** Well, I feel like I kind of owe it to you, because I spoiled --

**Justin Garrison:** And you did tease it, so...

**Jon Johnson:** ...Jason's episode, you know... Let me take a sip of water, because this is -- it's gonna go \[unintelligible 01:10:07.15\]

**Autumn Nash:** I'm really excited about this.

**Break**: \[01:10:14.02\]

**Justin Garrison:** Thank you so much, Jon, for coming on and sharing everything about tars, and Deflate, and all the things that I learned through this. It was fantastic. I knew about Jon's container websites before, to explore layers and containers, and I --

**Autumn Nash:** I wanna go back and listen to it, so I can like -- you know when you're just like "This is so cool, but I can't process all of it." I need to listen to it like three more times, and then draw some pictures and stuff, and then go check his website, and I'm gonna know all the things about tars.

**Justin Garrison:** Yeah, getting hands-on with some of the tools would definitely help.

**Autumn Nash:** Yeah.

**Justin Garrison:** But for the outro today, I have like a weird -- I don't wanna say a story, but a history lesson maybe. Because something that we were talking about in the interview reminded me of something that I read in a book. And this book was called "A mind at play", and it was about Claude Shannon. And Claude Shannon was someone who lived in the '20s through '60s timeframe; at least that's when they were active in work. And one of the things that I remember was he basically created how we transmit data, and how we're able to transmit data in technology in general. And one of the cool things about it was he was working on checksums for lik "How do you verify that information is the same?" And how do you just like say "Hey, when I send this information, I can validate that I sent you the right thing." And the cool thing about it was he associated that compression - when you compress something, you're finding the patterns and you're taking them out. When you're encrypting something, you're doing the opposite of compression; you're removing all the patterns, and you're making sure that no patterns exist, and so you cannot --

**Autumn Nash:** That is super-interesting.

**Justin Garrison:** It was really -- like, when I read that, I'm like "Oh, my gosh." That is the simplest way that I can think about compressing something and encrypting something, where encrypting - you're making noise out of structure, and compression, you're trying to like take out all of that structure and make sure that it repeats itself over and over again.

**Autumn Nash:** I just had like a whole epiphany about encryption... To give context, okay? ...this is how me and Justin's relationship grows. I get really excited about something, and then I text it to him, and then he's like "I read this book", and then he tells me about it... And at some point, both of our eyes light up and we get really excited, or we get really into it, and it's great. To be Justin friend and for him to be like "I just randomly read this", and like -- it's just a whole roller coaster. I highly recommend it. But that is like really interesting...

**Justin Garrison:** Right. Compression and encryption are just opposites of each other. And so let me walk through just a couple of his major things that he did in his life, because he was such a fascinating person. And the book, "A mind at play", it was really good, because it starts out as basically like --

**Autumn Nash:** Do you read audiobooks, or do you actually read these?

**Justin Garrison:** I do audiobooks, yes. I can't sit down and look at words to consume the words. I consume them with my ears, not my eyes.

**Autumn Nash:** It's good that you \[unintelligible 01:14:09.10\] That's really important in learning.

**Justin Garrison:** He was a very eccentric person in a lot of ways, where he was a master unicyclist, he was a great juggler, and he also would have trumpets that would blow fire. He had all these toys and things that he would like to play with and explore and do... And he worked at Bell Labs, and he was kind of known as more of a silly kind of extrovert person.

**Autumn Nash:** Okay, low-key though, is this not the best buy-in for neuro-spicy people? For one, me and you are here. Like, hello...

This dude, \[unintelligible 01:14:42.08\] stories about Steve Jobs... It's so funny, from hyperfixation food, to just like wearing one thing over and over again, because your brain doesn't have to do the work of thinking about what you're going to wear... And then you think about how many people in tech just wear a T-shirt, or just wear a sweatshirt... You know what I mean? And how many people just got straight black shirts, or like regular socks or whatever... You know what I mean? It's just so funny... We're talking about patterns, but there's also so many patterns of this that you see in like people that work in this industry. I don't know, I feel like all the patterns \[unintelligible 01:15:17.04\] And it's always these really eccentric or like different people, they have the coolest minds. My son has autism, and I always tell him, "You don't need to be the same as everyone else. You're going to be so cool because your brain works differently."

**Justin Garrison:** In 1937, Claude Shannon has his master thesis... And it is described as the most important master thesis ever written.

**Autumn Nash:** Shut up...

**Justin Garrison:** \[01:15:44.20\] In this master thesis je describes how you can take a switch and make Boolean logic circuits with switches. He basically invented -- this is before transistors, this is before they knew how to make AND gates, and OR gates... He described it. And he said "Oh, you can solve logic puzzles with just true and false, just ones and zeros, with these logic gates." And this was in his master's thesis at 21. He was just like "Yeah, this is how you would do these things, and this is how you can solve this." Again, this is 1937, before computers were a thing.

**Autumn Nash:** This is why I think real revolutionary moments in tech or technology or industrial or whatever happened in simplicity. That is timeless. Look at -- between him, \[unintelligible 01:16:23.09\] That was a time when we didn't have anything close to computers. But they were already thinking in a way that is still completely valid. I use checksums all the time in engineering. You know what I mean? So just think about how that not only withstood the test of time, but it's still completely -- you can implement it today. And that just shows you, when it's really a thing that is groundbreaking, it lives forever.

**Justin Garrison:** Yeah. And that was -- for Claude, it was about 11 years later. He had a paper called "A Mathematical Theory of Communication." And that is literally where he lays out what checksums are.

**Autumn Nash:** That's amazing.

**Justin Garrison:** How would you communicate two things over a wire? And he's like "Mathematically, this is how we can prove how this would work." And it was known as the Magna Carta of the information age. The very beginning of "We can send data to someone else and verify those things." And this is also -- he was working as a cryptographer in World War II, and he has still to this day - the Vernam Cipher is what it's called. It's the strongest cipher that exists, that cannot be broken.

**Autumn Nash:** Which is wild, because so many ciphers have been -- and just the fact that encryption libraries have had to advance so much to keep up with it... Nowadays people don't even really want you to write your own encryption, because it's so easy to break them.

**Justin Garrison:** Right. And so he was proving that -- again, this is without computers. Mathematically, how could we essentially encrypt something? How do we add noise to structure, and then send it to someone, and then make sure that they can get the same message out?

There's a really cool -- if you go look up that cipher, the Vernam Cipher, there's a Python script that's like not even 50 lines. And you can actually follow it, like "Okay, this is where this changes, and this is how this changes..." I was like "That's fascinating", because it's so simple, but he proved it with the math, to say "This is how you would make sure that --"

**Autumn Nash:** The best stuff is simple, though. The best stuff in fashion, and design, technology - it's always simple, because it's really got the value there, and it doesn't need a bunch of other stuff to prop it up.

**Justin Garrison:** Yup. And then the last thing I was gonna point out that he did was in the '50s he was the first person doing machine learning, back in the '50s. He had this mechanical mouse that he would train how to solve mazes, and he had one of the very first computer-human interfaces for playing chess. Or it was a chess-like game; I don't think was actually chess. But he has pictures of him with his big box of circuits, that was like playing, and you could like move the pieces and it would light up where it would want to move the pieces. So you're playing chess with a computer back in the '50s, and that was the very first time. And he was like "How do we learn how this stuff works?"

So it was super-fascinating. His life was incredible. And so "A mind at play" was a really good book, but also, there's a documentary that I rented, and I'm gonna watch it before this --

**Autumn Nash:** Will you send it to me?

**Justin Garrison:** Yeah, I'll send it to you. It's called "The bit player." You can rent it... I think it's only on Amazon. It was the only place I found it. But it's a documentary about it.

**Autumn Nash:** Do you ever read about these people and wish that they were still alive, so you can meet them in real life? Like, somebody like Albert Einstein, and like this guy, and Grace Hopper... Some people, you're just like "Dude, they're probably so fun and eccentric, but brilliant..." You know?

**Justin Garrison:** Yeah.

**Autumn Nash:** If there's one person from history that you could meet in real life, who would it be?

**Justin Garrison:** That's too hard.

**Autumn Nash:** Like an inventor, or someone like that.

**Justin Garrison:** I would love to meet Tesla. I've read so many books about him...

**Autumn Nash:** He got screwed by Edison hard, dude.

**Justin Garrison:** Oh, man. He was a horrible businessperson. He was not the businessperson.

**Autumn Nash:** \[01:19:47.15\] Because he was so creative. And Edison was a better businessperson, but kind of a douche.

**Justin Garrison:** A lot of these lives, it's really unfortunate to hear how they don't see the outcome of what they invented, and what they did...

**Autumn Nash:** That's like a major correlation between art and technology too, because look at like -- a lot of times it's like they're using it to work through other problems also. Look at Van Gogh, and Monet, and people were like "Their art's terrible. Impressionism is horrible." And you're lik "Dude, he's gonna be one of the most prolific--" He started his own movement almost, and he's gonna be one of the most prolific artists.

**Justin Garrison:** Those are all kind of tragedies, where -- even if you think of like Ada Lovelace. She was like alone and on laudanum for the ending of her life, and...

**Autumn Nash:** Yes...!

**Justin Garrison:** Like, all of these things happened, that's just like "Uhh..."

**Autumn Nash:** Mary Carrie - literally, they killed themselves for science, and we wouldn't have X-rays without them. That's amazing.

**Justin Garrison:** Right. Yeah.

**Autumn Nash:** That's my kids' favorite scientist.

**Justin Garrison:** There's a lot. But for Claude, I actually don't remember how he ended up passing away...

**Autumn Nash:** Einstein had kind of a happy life, sort of... But the first part of it was sad. They called him all kinds of names, and thought he was not that bright, when he was a frickin' genius. He actually got a D in physics, which is like hilarious, because now they're like teaching the theory of relativity.

**Justin Garrison:** Yeah. So anyway, I just wanted to go over that, because again, this interview reminded me of the book, and his life was pretty remarkable, and everything that's --

**Autumn Nash:** I'm gonna go look him up. I want to know how his life went.

**Justin Garrison:** Yeah. The book is good. I'll watch the documentary, and I'll send it your way, too. It'll be in the show notes for the podcast.

**Autumn Nash:** I love the rabbit holes that we go down, of like interesting things. I can't believe we get to do this on a podcast. It's awesome.

**Justin Garrison:** Right. I personally love technical history... Partially because I was born in the '80s, but I never had a computer until the 2000s... And so I feel like I missed out on a golden era of the internet and computing. And so there's a lot of it that I try to relive through books, and figure out what happened in the '50s through the '90s, where I was not involved at all with technology.

**Autumn Nash:** But it's so crazy that so many major breakthroughs happened before computers were ever really a thing, if you think about it.

**Justin Garrison:** Yeah. They all led up to it. All these things that are new in the last 20 to 30 years have at least 100 years of lineage of like where people started doing it...

**Autumn Nash:** Which is funny, because I wonder what else you could learn from history to create the new influential computer breakthrough... Now that we got super-philosophical...

**Justin Garrison:** Thanks, everyone, for listening to this show. When this episode comes out, I actually am going to be at a couple conferences in June. So if anyone's out there and going to conferences, I will be at SRE Day in San Francisco, and Cloud Native Security Day in Seattle.

**Autumn Nash:** We're gonna have so much fun. We have to hit up all the donut spots, we've got to go to coffee spots, we've got to -- we're getting all the food. It's gonna be so much fun.

**Justin Garrison:** But if anyone's at those conferences and wants to meet up, feel free to reach out. I'm available online, and I'll hopefully see you around.

**Autumn Nash:** You're gonna sneak me into the security one like in your backpack, right?

**Justin Garrison:** Sure. Yeah. I've got a big luggage bag. We'll just carry you right in.

**Autumn Nash:** Okay, cool. We can get a surf bag. It'll be awesome.

**Justin Garrison:** So thanks, everyone, for listening, and we'll talk to you again soon.
