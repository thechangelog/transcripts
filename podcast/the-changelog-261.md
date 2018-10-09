**Adam Stacoviak:** So Tim, you're giving a talk at ElixirConf coming up, and it's kind of gotten some interesting responses to this problem. We've covered something similar to this on an episode of Spotlight, which we'll link up.

People with type 1 diabetes have to monitor their insulin, there's devices involved, and you've kind of tackled this problem of combining your technical prowess in software to mitigate this problem. Can you kind of open that problem up for us, help us understand what the problem is and how you're helping solve it?

**Tim Mecklem:** Sure. A little over a decade ago my wife was diagnosed with type 1 diabetes. It's a misunderstood disease, partly because there's two kinds - there's type 1 and type 2. Type 1 in particular is an autoimmune disease. It means that your body is fighting against its own production of insulin, and insulin is the thing that your blood needs and that your body needs in order to absorb sugar and energy out of your bloodstream.

People with diabetes are often -- I mean, there's a lot of jokes about diabetes cat and things like that... Those don't go over very well with people with diabetes. So really ultimately what got me into this was my wife; she wasn't really informed at the beginning of this disease about what it was that we needed to do to monitor her blood sugar. It's been a journey, and it's been pretty fantastic for us, because we've been able to grow closer as a result of it, but type 1 diabetes is kind of a monster.

Nobody fully really understands why it happens, but once you have it, it's essentially there for life and you have to be able to figure out how to adapt and monitor and control your diabetes as well as you can. Up until recently, that hasn't even really been a concept; you haven't really been able to manage it well. That's really what the background of this whole story for me is.

**Adam Stacoviak:** Managing it involves obviously monitoring it, so you have to have something in today's age - whether I think it was blood on a strip and the device would read it, and you'd do that several times a day; you'd have to prick your finger. Is that what you're talking about?

**Tim Mecklem:** \[00:03:58.07\] Yeah. I mean, insulin was discovered a long time ago, but how to manage diabetes has come about much more recently. There's some really cool technology that's come out since my generation, which is like continuous glucose monitoring, and insulin pumps that can deliver insulin automatically through a little motor. There's just really neat technology, but at the end of the day most of it still requires for you to draw blood in order to measure and to calibrate the devices that you're using to do this stuff.

I actually have a little bit of a personal context with that now, because I'm actually wearing a continuous glucose monitor myself, and I'm going through a lot of the first-person empathy, I guess you could call it, that my wife has been going through for years... Just waking up in the middle of the night to something telling you "Check your blood sugar." That kind of thing is distracting, but it also wrecks a lot of other parts of your life. If you don't get a good night of sleep, it can affect everything.

Ultimately, yeah, the technology is coming around and there's a lot of really cool things out there, but at the end of the day you're monitoring through a finger prick, most of the time.

**Adam Stacoviak:** You know, some doctors will suggest that anybody - whether you have been diagnosed with diabetes or not, to monitor and be aware of your glucose levels, because it plays such a role in thyroid and metabolism; it's such a key component to overall body health. And not to be morbid, but I've got some personal history with this, and people often end up dying -- not directly because of diabetes, but because of the things it causes. They may die of a heart attack, they may die of something else, but ultimately it was diabetes where it began.

**Tim Mecklem:** Yeah, so there's two kinds of trouble that could come up as a result of having (especially) type 1, and that is if you go too high and you maintain that high blood glucose for too long, then you have all kinds of health complications - it affects your heart, if affects your vision, it affects your blood vessels... It affects a lot of your body, so in the long-term it's very bad to have high blood sugar.

On the short-term though, if you go too low for too long, then you have the problem where you could pass out, you could not be able to address that by taking some form of glucose. So the short-term impact of being really low is actually much more acute than the long-term effects of being high for too long. So it's really a game of playing the balancing game in the middle of these highs and lows, and trying to keep your sanity while you're doing it.

**Adam Stacoviak:** So the type of scenario you're talking about is constantly monitoring so you don't go too low for those short-term scenarios...?

**Tim Mecklem:** Yeah. I mean, in the past, with my wife having a CGM and having an insulin pump, so having something that is monitoring her every five minutes, and also is able to deliver insulin, we still had many nights where her pump would alarm and wake me up, and I would have to roll over and kind of touch her and say "Hey, you're going low. I can hear your pump beeping." She got so accustomed to it she would just sleep right through it sometimes. It's dangerous even when you have technology helping you.

**Jerod Santo:** So I don't understand in terms of the blood draw - is that happening at intervals, or continuously? I haven't had experience with modern tooling around this. Explain exactly when the blood is being drawn and what continuous monitoring means.

**Tim Mecklem:** It depends on which CGM you use. As far as I know, there's still only two that are FDA approved in the United States. One of them is the Medtronic one, the other one is one called Dexcom. Medtronic has a pretty hard limit - every 12 hours you prick your finger and you tell it what your blood sugar is, and it uses that to calibrate. It's not actually measuring blood sugar through the continuous glucose monitor, it's actually just measuring a proxy variable, so it needs calibration periodically.

Dexcom works similarly. I believe you can go longer, and it will still give you readings if you don't calibrate, but I'm not as familiar with the Dexcom.

**Jerod Santo:** Obviously, a lot of people are working on making this something more integrated or smoothed in people's lives; I know there's people who have been trying to do this kind of monitoring through eyes, and there have been rumors that Apple is working on something with the watch... Is there anything that's heartening with regard to maybe research and development that you know about, where perhaps it becomes in the next couple of years a little less (what's the word?) intrusive?

**Tim Mecklem:** \[00:08:18.26\] Yeah, there's a few things going on. They're actually growing (I believe they're called) islet cells, and they're embedding them under people's skin. They're doing some really interesting things where basically they're giving people the function of a pancreas without necessarily having to try to do a transplant, or something like that. That's really exciting. I know Amanda is following that really closely.

I think there's really nothing more that I would like as an end result to all of this work that I've done, to be able to just throw it away and say "You know what? Diabetes is a thing of the past. We don't need any of this technology anymore. People's bodies can function the way they were supposed to." But ultimately right now, on the horizon, Medtronic has a new FDA-approved closed-loop pump and they're doing some really cool research with embedding or implanting these cells into people.

**Adam Stacoviak:** So back to Jerod's question of the constant monitoring, you're not actually pricking several times a day... It's like maybe twice.

**Tim Mecklem:** Yeah, two times a day for the Medtronic one, and about the same for Dex, if I remember correctly. You're supposed to prick it every time that you eat for the Medtronic one; you're supposed to do that everytime you bolus, which is when you deliver a large amount of insulin for a meal, whereas the Dexcom I believe has been approved for treatment without having to finger prick and calibrate it every meal.

**Jerod Santo:** So before you get to your dream of getting to just throw all this stuff away, in the meantime you've done a lot of work and perhaps you have some more work ahead of you with solutions around the monitoring, the predicting and the controlling, which these are things that the computers are very good at. Tell us the story about what finally prompted you to start breaking out your editor and writing some code, and what you're building in order to help address some of these issues.

**Tim Mecklem:** My wife is actually the one who discovered the Open APS project - I believe it still stands for Open Artificial Pancreas System - and she asked me if I would look into it and I said no... \[laughter\] I would have really basically nothing to do with something that would control insulin delivery to her body. That just kind of scared me, and for good reason.

I think everybody who does something like this should pause and this about whether or not it's really the right thing for them.

**Adam Stacoviak:** You mean the responsibility, right?

**Tim Mecklem:** Yeah, there's a huge amount of responsibility. I mean, not ultimately for me, but for the person who has diabetes and is really thinking about closing the loop -- as people within the community call it, "closing the loop."

**Adam Stacoviak:** What's closing the loop?

**Tim Mecklem:** It's when you take that monitoring and the predicting and you turn that into control. So you can have an open loop which monitors and predicts, but doesn't control; it will just give you guidance as to what to do, and you can choose to (based on your own experience) ignore it or heed its advice. A closed loop is when a computer is actually sending a signal to the pump to say "Okay, you're starting to go low, so I'm gonna cut off your insulin supply", or vice versa.

**Adam Stacoviak:** Well, especially with what you said earlier, with how important it is to control it short-term - low/high - how severe it could be affecting that person to trust the person writing the code and/or the computer doing all the work, basically, that part of it... It takes a lot of trust.

**Tim Mecklem:** Yeah, so Open APS itself actually has built into it some safeguards, one of which is that it never issues a bolus. Now, that's kind of not true anymore; they're doing some work with the next revision or the next iteration, but up until very recently the only thing that it would do was to change the basal rate, which is more like a background drip that you have, just to keep the sugar being absorbed into your body. So there are safeguards, and that's really the only reason that I was okay moving forward.

**Adam Stacoviak:** Back to Jerod's question, which was "What got you to get out your editor and take the first step...?"

**Jerod Santo:** Yeah, because you said no at first.

**Tim Mecklem:** \[00:11:57.19\] I said no, and I said "Okay, think about this for a month, Amanda. If you really want me to go forward with this, I want you to be purposeful about it. I want you to come back and tell me without any reservation this is something you want me to look at", knowing that I'm just in a support role and she's the one that has to deal with the consequences of whatever's happening there.

At the end of about a month or so she said "Yes, I want you to look into this", so I began a journey... A journey of learning, specifically around Open APS. It has many strengths; its community is one of them. One of its weaknesses, I would say, is that you essentially have to be a Linux system administrator to set it up. You are installing a Linux operating system on what I like to call "tiny computers" - just an embedded device, like a Raspberry Pi - and then you are going through many, many steps to get to the end. They've done a lot of work to improve that, but when I started out with it, it took about two weeks just to wrap my head around what the loop would even look like.

**Jerod Santo:** So how long ago was this when you first started to dig into it?

**Tim Mecklem:** I think we were headed in the fall of last year. That may not be true... I think she's been looping for about a year now, so it was a little bit before then. But I didn't crack open my editor at that point.

**Adam Stacoviak:** Looping.. I like how there is a term for it. Looping...

**Jerod Santo:** Yeah, it sounds like science fiction.

**Tim Mecklem:** The thing that people use to loop is their rig; it's just the tiny computer and the battery and everything, but they call them "the rigs." Amanda has a few rigs, and they're all of different sizes and varying technologies and things, but yeah, the loopers use rigs.

**Adam Stacoviak:** Wow.

**Jerod Santo:** Has she bumped into Bruce Willis?

**Tim Mecklem:** No...

**Adam Stacoviak:** Not yet. I mean, how about you though? How did you gain the confidence? We don't know much of your technical background or where you came from to even feel comfortable with YOU being responsible, let alone her trusting you to do it. How did you get there?

**Tim Mecklem:** I like to solve problems, I like to tinker with things, I like to understand how things work, and I remember early on when Amanda would download all of the glucose information and everything else from her pump and upload it to the internet. That process was really, really difficult. I mean, it was just a pain. They had to use this special USB stick and everything, and I just remember thinking "Man, somebody should really fix that and make it better." Ultimately, that's what Open APS did.

Ben West is somebody who worked on it very early on, and has done a lot of things to contribute to the community. He ended up reverse-engineering some of the communications of the insulin pump and determined how to send commands to it and get responses, and what those responses should look like. So he was, along with Dana Lewis and Scott Leibrand - they're really the triangle of people who started all of this seven years ago, or something like that.

**Jerod Santo:** So what was your initial goal? You said you took two weeks of just studying Open APS - was it to get Amanda looping on Open APS? Was that the initial "We're gonna do that", or was it just to dip your toe in the water, so to speak? What were you guys thinking at the outset, when you first started to get involved?

**Tim Mecklem:** The end goal was to loop. I had no idea how to get there. I started very slowly, just trying to wrap my head around all the different components. There's a lot of moving pieces to an Open APS install, so it really just depended on me ramping up my understanding of how to do a Linux install on top of how to install some Python packages, some Node packages, and set up some cron jobs. There was a lot to it, so there were documents upon documents that I was reading through, and ultimately trying to understand how does this work.

**Jerod Santo:** So Open APS, if you had to describe the system at a high-level, the architecture - you said it's a Linux-based thing; I'm sure there's a bunch of tooling, programs... What's it comprised of? What is it?

**Tim Mecklem:** That's kind of a hard question to answer, because it's really hard to pin down exactly what Open APS is. It's clearly not a product; they're very forthcoming with that, because products have commercial responsibilities, and they're usually monitored and regulated by the FDA and things like that.

\[00:15:59.05\] Each Open APS install is essentially a custom thing. You may buy some hardware that gets you there faster, but ultimately at the end of the day you're pulling down packages and repos and you're building something and trying to understand the algorithms as you're going. It's not an easy process.

**Jerod Santo:** Wow.

**Adam Stacoviak:** It seems like it has a small window of a goal though, where it's mainly about the safe ranges when you're sleeping, or right after meals... Not so much like an all-day, 24-hour duration constant.

**Tim Mecklem:** Well, some of the early adopters of Open APS were actually parents. Their kids were going off to school; they had no ability to control what their kids were eating, what kind of gym classes they were taking, what they were experiencing in terms of all that, and I don't think a lot of people realize that there's a lot more than goes into blood sugar levels than just food. It's food, it's activity, it's hormones... Stress will cause problems for you if you have that. Actually, public speaking is interesting, because it affects your blood sugar.

**Adam Stacoviak:** I heard also that if you just imagine if you just put a piece of cake in your mouth and you took it right back out, it would do the same effect as if you ate it.

**Tim Mecklem:** I don't know, I'm not sure about that one.

**Adam Stacoviak:** I'm not a doctor, but I've heard that just the thought--

**Jerod Santo:** \[laughs\] This is not medical advice...

**Adam Stacoviak:** Well, mostly that your brain is so powerful that it knows like, "I've gotten an induction of sugar. I should respond accordingly", and it doesn't know that you took it back out. It gets that neural sensor--

**Jerod Santo:** How could your brain not know that it didn't -- I mean, if your brain is smart enough, it should know that you took it back out.

**Adam Stacoviak:** Maybe it's my brain. \[laughter\]

**Jerod Santo:** Tim, you mentioned that Open APS is not a product, and I have a hard evidence of that on the homepage OpenAPS.org. At "How do I get started?" it says "The documentation and reference design implementation code is available on GitHub. Take a look at the FAQs, reference design and links to the open source repository...", so basically it's "Okay, look, you're gonna spend two weeks reading if you wanna get started with this. There's no handholding whatsoever."

**Tim Mecklem:** That's exactly right.

**Jerod Santo:** So what has your work been with Open APS after -- maybe take us down the road a little bit, and then tell us where you're at now, roughly a year or so later... You're giving this talk at ElixirConf all about it... What's been your progress through Open APS and getting involved, and where have you ended up with Amanda in using this stuff?

**Tim Mecklem:** So my path through the Open APS community has been kind of meandering; there's actually another project called Loop - it's an iOS application that has an Apple Watch app and some really cool other stuff. Amanda really wanted to try it, and so I got everything that we needed hardware-wise... There's a great guy named Pete Schwamb; he created the hardware called RileyLink... His daughter's name is Riley. He built this hardware and he built integration in the iOS application to monitor her blood sugar.

Another guy named Nate Racklyeft - I think he went to work at Apple - ended up actually building the Loop application with Pete, and they have essentially what's Open APS on the iOS phone and on the Apple Watch. So it didn't support a particular feature, the CGM on an insulin pump that my friend was using, and I thought "This is a great opportunity for me to dig in and really understand and feel more secure in my knowledge of how these insulin pumps work. So I started there... I learned Swift, but I didn't do anything with that. I had been an iOS developer before, but it was pre-Swift. So I learned how to implement the pump communication stuff in Swift and released that, and then I kind of went back to the Open APS community and said "Hey, I learned some things about the CGM decoding of these binary chunks of data that come from the insulin pump and I think we're kind of doing it wrong a little bit here..."

So I contributed back to that project, but as I was doing those things, I kept thinking "Man, this is supposed to be what Elixir is really good at." It's supposed to be able to decode binary chunks like this and split them out and make them meaningful data very quickly and very easily, and it should be handling all of the problems that you get with insulin pump communications. There's just wireless interference, there's multiple pumps in the same room, people's looping rigs can interfere with each other... This is something that Elixir should do really well at.

\[00:20:01.24\] As I was building up my understanding of how the insulin pump works, I was implementing a reference implementation for myself; I was learning how to do this in Elixir. So I was picking up the language at the same time that I was really understanding a problem domain that was new to me. So it was fun - I got to build it with tests, I got to really drive through some examples, and then what I took from that, I contributed back to the Loop application on the iOS side, and then back to Open APS on the tiny computer side.

**Adam Stacoviak:** Coming up after the break, we talk with Tim about the Open APS project, which stands for Open Artificial Pancreas System. This allows those who are willing to build their own system to loop. Looping is a process which involves monitoring glucose levels, predicting where a person's glucose levels area heading, and then delivering insulin based on that prediction. Needless to say, it's a complex problem to solve.

We also talked to Tim about Elixir and Phoenix, how he's learning it, and how it's fitting into the solution he's building. All this and more, after the break.

**Break:** \[00:21:14.10\]

**Jerod Santo:** Tim, you said that you contributed back, the things that you were doing in Elixir, back to the Open APS project. What does that contribution look like in terms of technical logistics? You have some Elixir code and you're trying to get it back to them? Is it another implementation of their reference? What's the actual contribution, what does it look like?

**Tim Mecklem:** The code that drives pump communications for the reference Open APS implementation is in Python, so what I did actually was I just went back and ported the code over to Python. I had my reference implementation for myself in Elixir, I used that to help drive the Swift code and drive the Python code, and then I just basically wrote the tests for those things separately, pushed those back into their own repos and kind of moved on from there.

**Jerod Santo:** So you're keeping your own Elixir implementation, and then you're porting for them the results of that into things that they can use directly. Is the reason for the Elixir version, beyond that you wanted to have a project and learn things about Elixir and all that, is to have another fully-working implementation of Open APS that's Elixir only, or is it something that I'm missing?

**Tim Mecklem:** At the beginning of it was really -- I won't say it was a toy; it was a learning experience for me. I wanted to just understand how the promises that people make about Elixir and how it can do binary decoding and do all these things really well, whether or not those things measured up, what I found was pretty overwhelming evidence that it's an amazing language for this kind of thing.

Elixir also lends itself to philosophies like "Let it crash", and if you're allowing parts of the loop to crash but you're resilient to those things, you're fault-tolerant to those things, then that's great; the pumps are gonna be unreliable... You're gonna walk away from your pump when you leave the restroom one day and then you're gonna come back 30 minutes later; your loop can't start making really poor decisions because it couldn't talk to the pump. So what I wanted to see was how well Elixir would fit the problem space. What I ended up with was essentially a dream at the end of that experience. I said, "Wow, wouldn't it be really cool if we could take Elixir and its abilities to handle these problems and my outside knowledge at the time of the Nerves Project, and start building a system where people don't have to know Linux system administration, they don't have to know how to schedule cron jobs, they don't have to pull down a certain Python repository here and a Node repository there.

What if they could just pull down one set of code, one project, and build it into a firmware that burns onto an SD card in less than a minute, and they're booting up in less than seven seconds into a loop?" How cool would that be, if you had Phoenix running a configuration screen so when they're plugged into their computer it gets power over the line, but it also serves up a website, and you could just go there and say "This is my pump serial number, this is my Dexcom, and I'm looping"? I need to understand the algorithm, I need to understand the pieces behind it, because if I can't do those things, then I'm doing a disservice to myself and I'm taking a risk... But ultimately, I don't see where a Linux system administration or cron jobs fit into the problem space. I shouldn't have to know those things in order to be able to loop.

**Jerod Santo:** Yeah. When you were describing our first steps, I was thinking "This sounds like something that Docker or similar would help address all of this configuration and dependency installation, and all that kind of stuff that those of us who've done Linux network administration, like myself, setting up mail servers back in the day - install this, and then that, and configure this and configure that, and you're like "This is really..."

**Adam Stacoviak:** It's so nuanced.

**Jerod Santo:** It's so nuanced and so easy to just get stuck for hours or days on like some--

**Adam Stacoviak:** It's also very limited.

**Jerod Santo:** ...obscure spam assassin configuration. Yeah, absolutely; it limits the reach for people like Tim or like us, who can plumb those depths. So bringing that -- I thought maybe like a Docker thing would be good, but it sounds like Elixir would be a great fit, if you can have it on an embedded device... Which you've mentioned the Nerves Project a couple of times; give us the high-level of Nerves, for those who aren't familiar with the project.

**Jerod Santo:** Nerves - I think the tagline is something about building bulletproof firmware. I should probably know this better, because I'm on the Core team... But ultimately, what drew me to Nerves is that I had a Raspberry Pi; I bought it literally the day they came out, like 2:30 in the morning, and I thought "This is gonna be great", and I had no idea what to do with it. I put Linux on it, it's out on a shelf, nothing happened. Nerves project actually takes custom Linux kernels built off of a thing called Buildroot, and takes those kernels, puts your Elixir OTP application on top of it and runs it. There's no init script outside of just booting up the Elixir application and running it. So you have essentially full-control of all the hardware and all the software... And in some ways, the OS is a commodity at that point for your firmware. You've got a packaged application into a operating system, on an SD card, booting up in about seven -- under 20 seconds, let's just say under 20 seconds.

Docker fits well on the laptop or server space; Nerves fits great it really tight spaces on small computers that don't necessarily the hardware available to them to run containers and things like that.

**Jerod Santo:** So by the way, when you were describing your dream, you had me all excited as well.

**Adam Stacoviak:** I have to agree.

**Jerod Santo:** I feel like, wouldn't it be cool.. I wonder if they can.. Yeah, yeah, that would be really cool. \[laughter\]

**Adam Stacoviak:** I was right there with you.

**Jerod Santo:** \[00:27:56.06\] So your dream translates pretty well... Hopefully it translates into some people willing to help you out, and maybe break out their editors as well. How far are you down the road on this dream and what you've been putting together on the Elixir side of things?

**Tim Mecklem:** I really wanted to put together something that was compelling. The first thing that I wanted to do - I didn't wanna go too far and try to really just accomplish everything, because I can't do this by myself. I also didn't wanna aim too low and just have people look at it and say "Meh... Okay, whatever" and then move on. What I've decided on was an open CGM monitoring loop, and that's actually why I'm wearing a sensor right now. I'm gathering the data from it. Every five minutes, these pumps - or whatever CGM you're using - will store a new blood glucose number.

You can pull those things off of there and push them off to a website. There's a project called Nightscout, which is just amazing. It's the thing that I think most parents use with their kids, to be able to monitor remotely so they know what's happening with their child, more than even the school administrators or wherever they're at. But it pushes up the state of the Nightscout, and then on Nightscout you can basically see what my blood sugar is every five minutes, and be able to, if I go low, get an alarm and call me and say "Hey, are you doing okay?" Or if I go really high, you can say "Hey, look, it looks like you need to deliver some insulin."

So my first goal - and I've basically accomplished that as of a couple weeks ago - is to push up CGM data every five minutes to Nightscout so that it acts and behaves like Open APS does in that sense.

**Adam Stacoviak:** It just gets deeper. Nightscout... Developed by parents.

**Jerod Santo:** Yeah, Nighscout.info... This is the second website I've been on that has the hashtag \#wearenotwaiting; is that like the rallying call around parents and people?

**Tim Mecklem:** I think that really ultimately it was born out of frustration over more than a decade of promises. We're on the cusp of being able to close the loop, and it just never happened. Nothing ever came out through the FDA's approval system that closes the loop for people, and they were finally just fed up with it. As of right now, I believe there's about 360+ people looping.

**Jerod Santo:** That's all?

**Tim Mecklem:** It seems like maybe a small number because there's a lot of setup, but I also, I don't know that a lot of people are necessarily self-reporting that are doing this, considering they want privacy or things like that... But still, a pretty significant number of people are willing to go through all of that setup to close the loop.

**Jerod Santo:** Yeah, considering how hard it is, I guess 360 is kind of a success number. When I heard it, I thought "Really?", because how many people with type 1 diabetes are there? There's probably a statistic that you at least can estimate for us... Do you know that one?

**Tim Mecklem:** I have no idea.

**Jerod Santo:** Oh, my gosh... Come on, Tim! \[laughter\] No, let's google that one...

**Adam Stacoviak:** About 86 million... Americans, at least

**Jerod Santo:** Is that with type 1, or is that with...?

**Adam Stacoviak:** Sorry, I read the first headline. I'll read it, since it's the context here - "About 86 million Americans had pre-diabetes that year. Type 2 diabetes represents about 90%-95% of all diabetes cases." So if the other 5%-10% is...

**Jerod Santo:** I have a direct quote - "As many as 3 million Americans have type 1 diabetes", according to the Juvenile Diabetes Research Foundation.

**Adam Stacoviak:** That's a lot of people... So less than 400 looping out of -- I mean, we're talking about 0.001%-ish.

**Jerod Santo:** But in absolute terms, it's a good number.

**Tim Mecklem:** Yeah. I mean, I guess if you at look at like a percentage, it might seem low, but if you look at it as individuals -- individuals have value, right? There's intrinsic value that every person has, and we're making their lives better in what we're doing.

I gave a talk and at the end of my talk -- I mean, it was totally right in line with the things that I'm saying today, and I thought "Okay, this is cool. I get an audience, people are listening to me." After it was over, I couldn't believe the response of people who came up and said "My parents, my father and my mother had type 2 and died because of complications."

\[00:31:59.16\] Some of the solutions that are being done here, like some of the monitoring that's coming to the market and being able to be distributed to people through the commercial means, a well as the things that the community is doing are amazing. This wasn't available ten years ago, and people are willing to pay a lot of money for it, and now we have a community of people who are just developing it and giving it away for free, and that's just amazing to me.

**Adam Stacoviak:** That's an interesting perspective there - as a society, up until maybe... Like, I don't know if open source has done this, but technology seems more tangible to everyday human beings I guess is the perspective. We've been a society that has trusted some sort of for-profit company to create some edge device that we use to save our lives every day. That's the society we've been. And over the last 5-10 years or more, we've become more of a grassroots like this, Nightscout and the tagline there, which is "We are not waiting. We're taking it on our own, we're asking, we're demanding (in many cases) that it be open."

**Jerod Santo:** It seems like maybe some sort of - I don't know, I'm missing something - a failure of capitalism or something, that so many people... Because everybody who has this problem would want this and would pay money for this solution, right? For the closed loop, the ability to let it feedback in and manage it... But 360 people have set it up themselves, but like you said, that's just a number... That could be bigger with the people who aren't reporting, but why aren't there for-profit companies that are providing this as a product? Why isn't Open APS -- and I'm not saying that the open source society is bad or anything, I'm just trying to think of why there's this huge gap. Maybe it's regulation? I don't know... Tim, what are your thoughts on that?

**Tim Mecklem:** That's a pretty constant conversation that my wife and I have around the dinner table. We're just trying to figure out why did it take so long for us to get here? Medtronic has a closed loop that they are approved with. It doesn't have exactly the same kind of level of control that you have with Open APS, but at the same time it's better than nothing.

I think one of the issues is cost. People can't just go and trade their insulin pump in and get a new one. They have to wait for the process through their health insurance and do a lot of things there. So even though it's come to market, it may be a while before people can even use this. Not everybody who's type 2 actually is insulin-dependent. In fact, I think there's quite a few that aren't. I'm not sure exactly of the differences here; I don't really understand what it is about type 1 and type 2 that would really cause such a huge shift between... There's the people with type 1 - it's an autoimmune, right? Type 2, I don't know as much about that space.

I have noticed that there are a good number of people who come up to Amanda and ask her questions about what she's doing, and she walks away and says "They're not managing this disease at all. They're not aware of even the basics of what it means to test your blood sugar and what it means when you're 200 or 400..." She's just baffled by these things.

You say that everybody would want this if they could have it - I'm not sure that's true, but at the same time, it would be great if it was available to more people.

**Jerod Santo:** Well, just generically everyone; I'm sure there'd be people that wouldn't want it, but given opportunity and education, it seems like a straight and forward win.

**Adam Stacoviak:** Maybe the better way to say it may be "Everybody who needs it will want it." Right? Because if you needed something and you didn't have it, it would solve a huge problem, you'd probably want it.

**Tim Mecklem:** \[00:35:46.10\] Yeah, I think what definitely matters in all of this, even when you go to the commercial solutions that are coming out, is that people really have to take ownership of their own disease management.

**Adam Stacoviak:** That's so true.

**Tim Mecklem:** You can't just assume that an insulin pump is going to go and solve all your problems for you, that's not how that works. Disease management, especially with type 1, is a constant process. You may be able to delegate some of your responsibility to technology, but at the end of the day you're responsible for your own body and your outcome. I think that that is a potential shift in mentality for some people who would really benefit from the technology but don't really understand it well.

**Adam Stacoviak:** I could see how, like you said, delegating the responsibility - I can see how looping for some might be too much trust. That's why I said earlier, your wife must really have to trust you, because you've got food, you've got exercise, you've got various things that affect your blood sugar, so not just simply a medication curbing it. It's a holistic approach to the disease for you.

**Tim Mecklem:** Right. So before we started this whole process, it was a pretty regular event for me to wake up in the middle of the night, and in a very rude way - but of course, I didn't think about it at the time - I would just kind of smack her and say "Hey, your pump's going off. Something's bad, you need to fix it. I'm too tired to deal with it", and she would either take more insulin or take some kind of glucose tablet or something to regulate that.

We actually had a couple other more scary things happen, because when you go low and there's nothing cutting off the insulin supply, your pump doesn't do it. So you're continually going a little bit lower, a little bit lower, and then you have to come out of that. And the rollercoaster ride of coming out of it, going too high, coming down and then crashing - all of that was really painful for us, trying to just get a good night of sleep. Since Amanda has started doing these things we've been sleeping pretty well. I don't get alarms from her anymore.

**Adam Stacoviak:** I can say that -- I don't know about you, Jerod, but I've been politely (as Tim said) smacked by my wife in sleep, so I can imagine the version taking a turn.

**Jerod Santo:** Who hasn't?

**Adam Stacoviak:** Who hasn't, right? Snoring, whatever. For whatever reason, I'm getting it, you know? \[laughter\]

**Jerod Santo:** Absolutely. Tim, one thing we haven't cleared specifically on the air is the project that you're working on, the Elixir and Nerves code - your wife is not yet using that; she's looping, but not with your code, correct?

**Tim Mecklem:** That's correct, yes.

**Jerod Santo:** Okay. Do you guys have like a countdown timer on the wall, or like a zero-day since the last -- no, that's a ops kind of thing. Do you have like a goal in mind when that might be the case?

**Tim Mecklem:** I have a long-term goal with that happening. One of the things that's gonna cause a little bit of difficulty is that she's is a different CGM technology than the one that the pump uses, and I have specifically chosen the pump first because it's a lot easier to get the comprehensive data. The pump has all the CGM, and also has all of the history of like boluses and basal rates and everything like that. So I already have to talk to the pump; to pull the CGM is not much more work, but for people who use Dexcom, which is a different CGM, there's no support for that yet in Elixir.

My real goal is that Elixir becomes the communications platform, it becomes the thing that talks to the devices, and at the inner core is the initial Open APS for reference implementation. I'd like to as much as possible leave that part unmodified.

**Adam Stacoviak:** You'd mentioned "different CGM", is that right?

**Tim Mecklem:** Yeah.

**Adam Stacoviak:** What does that stand for, by the way?

**Tim Mecklem:** Continuous Glucose Monitor.

**Adam Stacoviak:** Okay, so she uses a different CGM than you're producing with your Nerves and Elixir code. Can you give us kind of a breakdown of the architecture? You've got maybe a pump, you've got an algorithm that decides based on information... What are all the components involved in looping with this kind of technology?

**Tim Mecklem:** On the monitoring side there is communication with the pump. You need to know what the current basal rate is, how much insulin you have on board, which is like how much is in your body that's still waiting to be absorbed or is absorbing, and there's just general information from the pump, like you have to make sure the timestamps are right.

So there's monitoring the pump side, then there's monitoring the CGM, which may be on the pump, and it may be something separate. From that, you pull every five minutes a trend, essentially. You're pulling in "What's my current blood glucose value? What's maybe one or two previous to that, and where am I headed? Am I going high, am I going low, am I staying where I'm at?" Once you have all that information, that's where the prediction and the control come in and that's where I would like to leave most of what is an Open APS unmodified.

\[00:40:22.22\] So the prediction side is take all these variables and do a count, guess about 30 minutes out into the future where you're headed, plot you along a curve, and then if you're gonna head outside of the boundaries, then apply more insulin or remove some of it on the basal rate.

**Jerod Santo:** Does your project have a name or a website or a place to go for the people who are interested, where they can contact you?

**Tim Mecklem:** I have a few GitHub repos. I mean, ultimately it's very barebones right now. I didn't really decide until ElixirConf's proposals that I was actually gonna push forward with this idea. I was really excited about it, I had the dream, I sat there and I would talk to my wife about it and say "Wouldn't it be cool if we could do this?" and eventually I decided "It's gonna be cool. We're gonna do this." So I'm basically in the infancy of this project.

I understand a lot of things about the other communities. I like to believe that we can build one around this, and really improve the experience for people who are trying to get into this looping community but don't have the desire or maybe just the ability to learn about Linux system administration or all those things that make it difficult.

**Adam Stacoviak:** If someone was to listen to this show - you've mentioned you've given some talks around this and you were surprised by the reaction; the crowds came up and said parents, friends, loved ones had diabetes, and what a great mission to be on... You know, if someone's listening to this show and they're like "Dang, Tim, I could totally help you!" or "I wanna help you", are you open to doing this kind of thing? Is this a mission to do it full-time, or is it simply "a pet project" for your wife and the passions you've already shared during this show? Is this something you would like to do on a full-time basis? Is this a mission for you on the long-term?

**Tim Mecklem:** If the Open APS community really embraced the work that I'm doing and we could push it forward from there, that would make me ecstatic. If it grew its own, similar to how Loop, the iOS side kind of grew their own community as well, that would also make me really excited. The question of "Do I wanna do this full-time?" - the answer to that is no. I really love, first of all, working at Gaslight and doing the consulting work that I do.

Second of all, this was sort of a mission that thrust itself upon me, it wasn't something that I sought out, but I don't really want this to be a solution forever. I want to see everybody, including the community, including the FDA, I wanna see the device manufacturers forge ahead and solve this problem for everybody. As long as people have to do this for themselves, by themselves, without commercial solutions, then it's a little bit harder for me to see the end vision.

My end goal is really for my work to go away; that's long, long term. I would love to see adoption. If anybody has any interest in helping with this project, at this point I would absolutely love it. I've had people here at Gaslight offer to do some things; I hadn't really felt like it had moved along enough for me to be able to pull more people on. I'm getting close to the point where I feel like I have the vision that I can present to somebody and we could start working on things in parallel and really knock some of these really hard features out. I would love to see that, but I don't have any interest in working on it full-time.

**Adam Stacoviak:** Coming up after the break we talk with Tim about Elixir and Nerves, and why they're a great fit for this project. We talk about pattern-matching Elixir, how his work applies to other CGMs (Continuous Glucose Monitoring) and how his work can scale to allow for wider adoption. We also talk about the human equation... You know, all of you out there listening to the show right now - how can you get involved with this project? How can you help Tim solve this problem? To find out, stay tuned.

**Break:** \[00:44:35.11\]

**Jerod Santo:** Alright, Tim, earlier on you were talking about Elixir and how it got you all excited when you began to dive in and solve this problem and write some tests and see them pass - that's always a good feeling. We didn't really dive into why that was a good fit. You mentioned binary matching, and I've been doing some work with Elixir in parsing ID3 tags, and the bit string syntax and pattern matching, and I can see where -- in that case it's definitely a good fit, and I'm thinking it's probably very similar... So open that up for us and tell us why Elixir and then (as a follow-up) Nerves - when we get to there - fit... So where into the kind of work that you're doing...?

**Tim Mecklem:** Underneath the covers, when you're talking to one of these insulin pumps, it uses a relatively proprietary protocol, but it's running on packet radio. So you're getting these packets of data, you're sending commands to the pump, getting things back, and it's giving you frames of data that you have to peel away and do CRC checks on and make sure that everything looks right, and then you can add that to the bundle of things that you've already received.

Once you get enough of those things together, then you have this page - it's 1,024 bytes full of stuff, and you have to figure out what to do with it. That's the way both the history and the continuous glucose monitor data comes from the pump. So these pages of information have various kinds of events encoded in them. At the simplest, it's a single byte that tells you what your blood sugar is. At it's most complicated, it's "Hey, I changed the date and time on the pump. The old one was this, the new one is this", and it's like 20 bytes, or something like that.

So there's just lots of different varying links and varying types of data that are stored in these pages, and you have to be able to walk through multiple pages, sometimes, to get to where you want. If I just flipped a page on the CGM, if I just filled up the last byte of the previous page and I'm on a new one, then if I need 20 minutes worth of CGM data, I've gotta go fetch two pages - I've gotta fetch the one I'm on, turn around, make another request, get all these packets back, reassemble them, and then get another page and then walk through that.

So there's just a lot of manipulation of data and streams and binary that when you look at it in the Python code or you look at it in the Swift code, they handle it reasonably, but you're going a bunch of different places to try to figure out how it works. And then Elixir - I mean, it's right there in the function head; you're just saying "Okay, if it's this kind of an event based on that first byte, it's gonna be twelve long, and then the first four are gonna be the timestamps; let's go decode those." It's just all right there.

\[00:48:15.20\] There's no indirection and there's no "Oh, this is scary because it's binary, so I have to treat it differently, and I have to have a raise", and scary things like that. It's just regular function head processing, just like everything else in Elixir. It's really exciting, because you can see how it's processing the data without having to go jump around and jump through hoops.

**Jerod Santo:** So because in Elixir you can pattern-match inside your function signatures, inside your arguments, and it's treating these binaries as bit strings or as binary data type that also can be pattern-matched, you can just pattern-match on the first byte and call a different function based on what that is, and pass the rest of the blob down into the function... And it's all right there, right? You just have your different functions that match based on what that first byte is, and then passes the rest on and you can slice and dice that as well.

**Tim Mecklem:** Yeah. I mean, like with any project, like any software, there's edge cases; there's weird things that come along that look kind of like everything else, but they're slightly different. For instance, when I'm working with the history in the pump, it just reads like a book; you just go from byte to byte and you figure out what's going on. The CGM - it's inverted.

Everything is timestamped backwards, so you have to flip the page around backwards before you process it, because somebody had a bright idea and they found a way to save some bytes, and they can do that. Some of the history, for instance, when you're talking to two different models of pump, are different links. So there's edge cases about "Okay, am I dealing with a newer one or an older one? How do I actually decode all this information?"

With a lot of other previous experiences I've had, that kind of breaks assumptions in a way that makes you have to refactor a lot, and what I found with the Elixir work that I did on this, it was just kind of like taking it in stride; I don't know how else to better describe the experience that I had, except that Elixir was just ready for everything before I was.

**Jerod Santo:** Is this work so specific to the CGM that you're working with? And how do you know it's a particular protocol? Are you reverse-engineering, like waiting to see what you get and then seeing what it is, or do they have a specification, like "This is how you speak to this device"?

**Tim Mecklem:** Most of what I do is based off of work from other people; I'm really standing on their shoulders. So at the very base of this pyramid, if you wanna call it that, is Ben West. He reverse-engineered the pump protocol and the communications protocol, and the CGM sort of follows alongside that. Getting history in CGM is a little bit different than everything else, like "Give me your date and time, or what's your battery level", because they give you this binary thing that you have to unpack. But ultimately, it all came from those projects. I learned a little bit from those things -- well, I learned a ton from those things, and then I learned how some of it needed to be modified, and I went back and contributed back to those things. I don't know if that answers your question there, but that's ultimately where it came from - somebody else's work, and me learning and expanding on that.

**Jerod Santo:** So somebody else reverse-engineered it though...?

**Tim Mecklem:** Yeah, I did not do the reverse-engineering myself.

**Jerod Santo:** But somebody reverse-engineered it?

**Tim Mecklem:** Yes.

**Jerod Santo:** Where I'm trying to get is like is it scalable? Or is it always gonna be tied to a very specific product or device because that's the one that's been reverse-engineered?

**Tim Mecklem:** This one in particular is for a specific insulin pump; various models, but this specific kind. But basically, everybody uses that if they wanna loop.

**Jerod Santo:** So anybody who wants to loop says "You've gotta get this one, because we know how to talk to it."

**Tim Mecklem:** \[00:52:00.02\] Yes, at the moment. There are actually groups doing some of that work with other pumps on the market; I don't know much about their efforts, but I know they've had some recent breakthroughs.

**Jerod Santo:** That's where I'm trying to get to in my mind, because I'm starting to think of adoption, you know? Like, how do we get more people who want to loop to be able to? Like you said before, a lot of it is, well, they've gotta switch pumps, or something. A lot of it is cost, or timing around healthcare and blah-blah-blah that holds them back, and it seems like, well, if we had interfaces into more of these devices and we had a layer of abstraction where this product that you're thinking about had a layer where it could talk to not just this specific pump that you're coding against now, but could work against these seven, which cover 90% of the market, or something like that, you open it up to a lot more people without having to have them own specific hardware.

**Tim Mecklem:** Yeah, so the community really understands. There are only specific versions of the pump, and they have to be older in order to loop. It's a definite drawback. You have to really understand what you're doing when you're going to -- you're saying building a product... I'm not really looking to do that. I'm looking to enhance what's out there and be able to support the community better, but I'm not looking to build something that I could sell here.

**Jerod Santo:** No, when I say product, I just think about a holistic--

**Adam Stacoviak:** The end result, yeah.

**Jerod Santo:** Yeah, I don't think about it as like a commercial product. I think of it as like a packaged thing that more people could use, and currently could. Because are you trying to get looping to more people if they wanted, or not? I guess that was the distinction I was trying to...

**Tim Mecklem:** At the end of the day for me is really "How do I improve the experience of the people who are willing to do this?" I'm not sure how much I'm really desiring to expand the outreach of this thing; I think that would naturally flow from a better onboarding experience for people, I guess, if you wanna call it that... But really, I see a lot of the difficulties and struggles that I had early on trying to support my wife with this, and I want to improve that experience for people.

**Adam Stacoviak:** Are there any concerns at all about DRM, or is there a Terms of Service when using those pumps or buying those pumps, where it says "I will not reverse-engineer, and be able to talk to it..." - is there any of that concern whatsoever?

**Tim Mecklem:** There's no encryption in the sense of like there's keys, or anything like that. It's encoded, but I think you have to do that for any kind of data. I don't know of any terms of service for that. I don't believe --

**Adam Stacoviak:** I only ask that because we talked to Cory Doctorow and he said "When I use my printer, if I use the wrong printer driver or something like that, I could be in violation of it." It's very different, those are two different things, but it just seems like they kind of make it easier to break the DRM, or be in violation of it. Because the one thing -- like Jerod's asking, like "Hey, this thing you've done - can it work with other pumps or other CGM models?" and the answer is "Well, it's kind of tied to this one." Well, wouldn't it make sense to create some sort of collective where these pump manufacturers understand what some of the technologists like you are trying to do and start speaking the same language or making the job a little easier to reverse-engineer it?

**Tim Mecklem:** Yeah, I think that that doesn't necessarily play well into the business model, I guess, of the pump manufacturers. They are aware of some of the early efforts of Open APS. I know that there were people who had conversations with developers within those companies, but I think at the end of the day they never really could get publically behind that, especially now that they have a competing product. They want that to go to market, and ultimately, I wanna see that product get better.

When people ask me what I'm doing, I'd love to be able to say "Well, there's another adequate solution out there, and let's eventually move there." It's kind of weird, I have these competing intentions, but I really wanna see this experience improve; I want to support the community, and at the same time, I'd love for it to all kind of go away, and for us to solve diabetes in a completely different way.

**Jerod Santo:** \[00:56:02.19\] Right. But one is real; one you can actually effect, and the other one is completely out of your hands, right?

**Tim Mecklem:** Right, absolutely.

**Jerod Santo:** I wouldn't call it a pipe dream, because I would be perhaps wrong, but it's what you wish would happen in the world, and hopefully it will, and hopefully sooner than later... But it's all just a hope, whereas here it's like something tangible, something real, and something inside of your control and the control of other people who are \#notwaiting... Or what was that? \#wearenotwaiting?

**Adam Stacoviak:** \#wearenotwaiting. It's in the now, it's not in the future that you can effect those changes is what you're trying to say.

**Jerod Santo:** Right. So I can see where you have this confliction, because you're not trying to turn this into like a long-term -- and when I say "product", I'm referring to like an end goal, because you're hoping that it will be obsoleted soon enough... \[laughs\] I can see where that would be a multiple hearts there.

**Adam Stacoviak:** And all this is going down -- this podcast is a precursor to the potentially bigger (I guess) hour-long talk you'll give at ElixirConf, and this all kind of began with that proposal, which you were even surprised (you mentioned before the call) that it was accepted. Why was that?

**Tim Mecklem:** Yeah... So going into all this, I've been very hesitant to really speak about this very publicly. There's privacy concerns here, there's a lot of things going on. Ultimately, what drove me over the edge was the ElixirConf call for proposals. People just kept asking me how my project was doing, what's going on with it, and I thought "Okay, fine. I'll put something together." I think everybody in the office here except me thought (or just knew) that it was gonna get accepted... But I was a hold out. I was like "This is interesting, but it's pretty niche. This only affects certain people", but at the end of the day, I think everybody likes to understand -- when there's somebody that's out there working hard to improve the lives of others, they like to hear that story. They like to understand more about that. And the fact that it happens to use the technology that they are embracing, that makes things even better for them.

I see now, in retrospect, why the talk was accepted, but that's really what drove me over the edge to say "This could be a real project. Let's really go with this. People are excited about it. I can talk about it and move things forward."

**Jerod Santo:** Well, I can definitely echo that sentiment. Even from a person who -- a lot of us spend our work hours writing crud apps for businesses that are not improving the lives of other humans in such a basic, foundational way, of like people who live with this problem... Even though in America there are three million of them, of the 350 million - I don't know how many people are in America anymore, but anyways, not very many of us... A small percentage of people have this problem, but the ones that do, live with it day in and day out, and unchecked, it's something that they could die from tomorrow, or the next day.

**Adam Stacoviak:** It's a very serious problem.

**Jerod Santo:** It's very serious, so just the idea that our skillsets that we have, that we used a lot of times, we are cogging the machine of the capitalistic society that we live in, can do something for somebody else that you're trying to do... It's incredibly inspiring and exciting, so I can see absolutely why your talk was selected, and I think it'll be a bit hit. I hear this is your first one as well, so there'll be lots of interesting times coming up.

**Tim Mecklem:** Yeah... The anxiety and the nerves are already growing a little bit. You did say something that I wanted to touch on. One of the owners here, Doug, you mentioned him earlier - Doug likes to say something that we found to be true, out of the book called User Story Mapping. What he says is you don't write software to build features, you write software to change the world; it's just a lot of times we lose sight of that. We don't catch on that the things that we're building impact people's lives.

This is one of those things that for me -- I could find that direct line to exactly where I want it to go. I can see exactly how this is going to impact people positively, and I just latched on... I mean, that's exciting.

**Jerod Santo:** \[01:00:16.25\] Absolutely.

**Adam Stacoviak:** That's the truth. We often lose touch with the fact that there's human beings on the other side of our code, in pull requests, in the actual thing we deliver, and it's so easy to forget those humans out there... I don't know why, there's so many of them, right? But it's just like we just forget why we're doing what we're doing, you know? It's easy to remove the human equation, for some reason... I don't get that.

**Jerod Santo:** Well, you're just writing code all day... You're not interacting with too many other humans sometimes, so I guess that's why it's easy to forget.

**Adam Stacoviak:** Tim, if you had the ear of the open source community to some degree, and developers out there, and getting people excited with the vision you see, where you're taking things, even though it may not be a long-term thing for you, if you were in a position like that like you might be right now, what would you wanna share about where you're going, call to arms...? How can people step in and help you with your mission?

**Tim Mecklem:** There's a lot of things that still remain. I already mentioned that only one of the two major CGMs are supported here. I would love to see the integration with the Open APS Loop code become tight and become real. I wanna see us be able to improve the battery life of these computers, I wanna be able to add mobile data and GPS...

Actually, it's kind of funny - James Smith here at Gaslight is also gonna be talking at ElixirConf. He'll be talking about tracking buses - GPS devices, and having cell technology. I'd love to be able to integrate some of that. If you could imagine, you go on a hike somewhere and you start to go low, and you're not able to respond to it well. Somebody remotely could get the data over the cell signal, that "Here's your location, here's your current blood sugar. You look like you're dropping", and they could actually do something to help you remotely, without you having to do anything. There's a lot of really interesting things that I think could push forward the community and what we're doing here, and I would just love to see that.

I know very, very little Phoenix so far, which is kind of funny. Most people who get into Elixir go straight into Phoenix, because you know, Rails, Ruby and the conversion there. I tend to take the weird path in the new languages, and so here I am, writing this thing and I need to be able to configure it and be friendly with that; I'd like to build a Phoenix configuration site that you just load up and it boots, but I know very little Phoenix. I've done some just outside tinkering with it.

So there's lots of really interesting ways that people could get involved with this. I'd love to see the community just come behind me and say "Hey, what are the things that you need us to pick up? Because we know that you can't do it all yourself." I would really appreciate that, I'd love it.

**Adam Stacoviak:** Well, we'll certainly link up to your GitHub from the show notes, so listeners know that. So if you're thinking "How can I see Tim's code? What's he doing?", Tim mentioned he's putting what he has there on GitHub, so that will be in the show notes. It is tmecklem at GitHub, so check that out.

Tim, thanks so much for taking your time out, and especially with how touchy this is, how personal it is to you, to take your time and share this story with everybody else. We need more people like you, more Tims out there solving problems like this. We appreciate your time.

**Tim Mecklem:** That's really kind of you, I appreciate those words.
