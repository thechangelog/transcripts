**Mat Ryer:** Hello, and welcome to the final episode of season one of Grafana's Big Tent, the podcast all about the people, community, tools and tech around observability.

I'm joined today by Tom Wilkie. Hello, Tom.

**Tom Wilkie:** Hello, Mat. How are you?

**Mat Ryer:** I'm doing alright, thanks. And you?

**Tom Wilkie:** Well, you handled that question much better than the last time I asked you.

**Mat Ryer:** Yes, I fluffed it up one time, which I really won't do again... We're also joined by Matt Toback. Hello, Matt.

**Matt Toback:** Hey, Mat. What's your favorite thing?

**Mat Ryer:** Oh, it's you. It's questions that put me on the spot on stage in front of hundreds of people. That's my favorite thing. \[laughs\] How are you doing, Matt?

**Matt Toback:** I'm great. I don't know how you're doing, Mat... I'm doing great. You put me back in this place of being on stage, and all of a sudden all I saw was the spotlights and people just waiting for an interesting answer... And I blew it.

**Mat Ryer:** No, you didn't. I loved your answer. It got a good reception. People agreed with you that coffee is a great thing. \[laughter\]

**Matt Toback:** I touched on this very human connection of just abject terror, and everyone was like "Ah, I feel that..."

**Mat Ryer:** Yeah, exactly. It's everyone's worst nightmare, but it was happening to somebody else, so... It's fine.

**Matt Toback:** We're here!

**Tom Wilkie:** Yeah, we made it.

**Matt Toback:** End of season one. We did it.

**Tom Wilkie:** I think, if you can't tell already, this podcast is gonna be about self-referential podcasts back to previous episodes.

**Mat Ryer:** Yeah. It's like a retrospective really, isn't it?

**Matt Toback:** It is.

**Tom Wilkie:** Why did we agree to do this, and what are we gonna not screw up next time.

**Mat Ryer:** Yeah. That's it, that's what it's all about, isn't it, when we learn. What did we learn doing this? It was quite a ride...

**Tom Wilkie:** It was hard work.

**Mat Ryer:** Hm. Harder than you thought.

**Tom Wilkie:** Yeah, I think so. Yeah. Carving out time to record them is hard. We're all very busy.

**Mat Ryer:** Yeah, that's true.

**Tom Wilkie:** We started this project back in December last year.

**Matt Toback:** That's right. I thought it was easier to find the time, and harder to find interesting people. And it's not because there isn't interesting people everywhere, but trying to assemble it into an episode, and that there would be enough content to make it worth it for someone to listen to... That's where we got hung up, because we're like "Oh, we could do this, and we could do this, and we could do this..." But what fills the time in a way that's useful, and then also how do they all kind of fit together.

I think the Big Tent thing, in a way, is awesome, because it is huge, and everything is kind of covered under it... But then how do we know what someone expects when they're gonna listen to it.

**Mat Ryer:** Yeah. And also, people, when you ask them "Do you wanna be on a podcast?", it fills them with terror. Because everyone thinks "Oh, I have nothing interesting to say", or "I'm gonna say something and make a fool of myself..." I've just opened myself up there for some banter... Tom, do you wanna take the opportunity...?

**Tom Wilkie:** I don't really need to highlight that. I think you'll do that yourself.

**Matt Toback:** The prosecution rests.

**Mat Ryer:** \[laughs\] Yeah. But that's the thing... Part of my job when I do podcasts is sometimes to say the stupid thing; and you just notice everyone just relaxes. It's like, they're not gonna say anything worse than that... So they can have a good time now.

**Tom Wilkie:** I think we had some great guests. I think the... Frederic, back in January, and Mattias shortly after that...

**Matt Toback:** See - how useful and interesting... I do remember how to pronounce his last name. Branczyk. That's what I remember most about that episode, is how to pronounce Frederic's last name.

**Tom Wilkie:** That's probably not what you wanted us to take away from that... \[laughter\] No, we had some great guests.

**Matt Toback:** Hold on... January, continuous profiling... We touched on it, and that's kind of an early thing. What's happened? What's our perception here about where continuous profiling is in the world of observability now, eight months later?

**Tom Wilkie:** I mean, it's still early, but it's definitely -- I know Polar Signals, Frederic's company, has made a huge amount of progress. Quite a big hit at KubeCon a few months ago... Yeah, we're using it internally... It's definitely helpful for some of the problems we've got.

**Matt Toback:** \[04:15\] Do you have to convince people internally here to use it?

**Tom Wilkie:** I mean --

**Matt Toback:** Or do you rule with an iron fist?

**Tom Wilkie:** Neither. If you had to convince them to use it, then they're not gonna come back to it, if they \[unintelligible 00:04:25.24\] More like we install it and we use it, and it starts in one team, and they show some usefulness and some benefit from using it, and other teams notice... It kind of works virally internally. But tools live and die by their usefulness internally, and it's definitely proved useful.

**Mat Ryer:** Yeah, that's something I like, that we do a lot, and I think companies that do this - they get the benefits of this dogfooding. Not forcing people to use something, but make it available... And you're really sort of testing out those early -- whether those viral effects happen; whether people are interested, whether it actually solves a real problem for them...

If you're told "You have to now use this tool", then of course they're gonna just start using it, whether they like it or not. So one of the things I like about our incident tool that I'm working on with the squad is that we just kind of made it available, and we didn't tell anyone really to do it, and everyone just started using it, because of the benefits you get.

**Tom Wilkie:** And coming back to the podcast, that's one of the things, a recurring theme that I've really enjoyed on the podcast, is all the references that Mat makes to things that he's written or done. \[laughter\] There was a great reference to -- hold on a second, let me pull this one up, because it was...

**Mat Ryer:** Essentially, without me, no one writing Go code can be sure their code works.

**Tom Wilkie:** I think that was the quote I was looking for, yeah. \[laughter\] So Mr. Modesty here, you know, strikes again...

**Matt Toback:** Well, if you don't tell people, then how are they gonna know?

**Mat Ryer:** This is genuinely my thing, because naturally I don't brag.

**Matt Toback:** Really?

**Mat Ryer:** Yeah.

**Tom Wilkie:** Just when you put a mic in front of you. \[laughter\]

**Mat Ryer:** Well, that was tongue-in-cheek... But yeah, that is a thing, really. I often don't talk about stuff I've done. Tom, you didn't even know I had a book.

**Tom Wilkie:** Do you have a book?

**Mat Ryer:** \[laughs\]

**Tom Wilkie:** Is that because people tease you about it when you do, Mat?

**Mat Ryer:** No, honestly I think it's a very British thing. It's very -- you know, not to show off... And so we don't do it, do we...? But you know, I think that's funny. Testify is great though. Use it. I recommend it.

**Matt Toback:** It's written in JavaScript, right? \[laughter\]

**Tom Wilkie:** No. For the listeners - no. It's written in Go. I think one of the other things that's worked really well over the past eight months - the editing. The Changelog. \[applause\] They've done such a good job in making us sound much more witty, and funny, and clever than we actually are in real life... This is the first time I've ever been professionally edited before, and... Wow. I'm not normally this good.

**Mat Ryer:** You like edited Tom, don't you?

**Tom Wilkie:** I like it when someone gets to take what I say and make me sound better and smarter.

**Matt Toback:** Do they do real-time services?

**Tom Wilkie:** Yeah, can I have someone following me and going "What he actually meant to say was..."

**Matt Toback:** Just they remote-mute you. It's like a little 7-second delay... \[laughter\]

**Mat Ryer:** Yeah, but it's so true... I mean, in natural conversation, you talk over each other, and you sometimes step on each other's toes, or you start talking at the same time about something, and they try and make the same point... And it takes quite a good amount of work to stitch it together properly, so that you get this sort of seamless experience for the listener. But it is that, they're very obsessed with that -- it's basically a user experience thing. They want that to be as smooth as it can be, and we get the benefit of that.

**Matt Toback:** \[08:03\] You know, the other thing is banter... If you're at the pub, or if you're just hanging out, or even before we hit Record, it's like "Oh, it's all easy." Then you hit Record and you're like "Ah, s\*\*t..."

**Mat Ryer:** \[laughs\] We'll bleep that out, for example...

**Matt Toback:** Yeah, we don't wanna put the warning at the beginning... But it's just -- you know, it feels so easy and so natural, and then you hear it back and you're like "Oh, it has to be tight, it has to be funny..." And not all of us are built like that. Mat, you are... Tom, you are as well.

**Tom Wilkie:** I think my best banter was on stage at GrafanaFest. Mat, you turned to Matt and said "What's your favorite thing?" And I don't think it comes across in the cut, but there was a long, awkward pause.

**Mat Ryer:** Yeah. Honestly -- because they didn't know I was gonna ask that. It was just part of the intro... And he was sat right next to me on stage, and I just asked him. "What's your favorite thing?" and I just looked, and I could just see in his eyes his heartbreak. I could see the moment his heart broke... And I was just like, "Oh no, what have I done?!"

**Matt Toback:** It felt a little bit like that end of Interstellar, where I was just taken out into space, I'm looking \[unintelligible 00:09:12.17\]

**Mat Ryer:** You were just behind the bookshelf?

**Matt Toback:** Yeah. "What is...? I don't know..."

**Mat Ryer:** Well, you were close to a black hole, and that's why it seemed like time was going so long... \[laughter\] But when you listen to it back, it's not that bad. And you answered it great. You know, coffee. It was a great answer.

**Matt Toback:** It was the beginning of a long week, and I felt that that was helpful. And delicious.

**Mat Ryer:** Yeah. Other beverages are available...

**Matt Toback:** Tip your bartender...

**Tom Wilkie:** Which was your favorite episode then?

**Mat Ryer:** I personally really like the one with Ed Welch, where we were talking about logs... Because it was packed full of actionable knowledge for me. For example, I used to think logging in JSON was really clever, because it's structured, and you can query it later properly... But Ed makes the point that it's not so human-readable, and it also encourages you to do more complicated things than you should in the logs, which I think is a very good point. I've got a clip for it if you wanna hear it...

**Ed Welch:** ...like business intelligence - trying to know the number of orders that we processed that succeeded or failed, or generating metrics, and things. But there's an interesting crossroads here, which is that logs also need to be human-friendly. We have to go through, from time to time, and actually look through our logs, and -- this is where I kind of come at odds with JSON as a log format, because it's not human-readable. It's not. And you can pretty-print it, but what you've done is you changed what was horizontal space for vertical space. And if you're trying to scroll through thousands of log lines, you've taken something that was one line and you've made it 400 lines, or 20 lines.

I think it's fine to log JSON; I'm not gonna say don't log JSON, because it's ubiquitous, and all of the logging tools work with it well. So definitely use JSON, use structured logs. But my only opinion here is keep the objects really simple. Don't do complex, nested JSON objects in your log lines. Keep them very flat.

**Mat Ryer:** Yeah. And I think he's right. In fact, I would go as far as probably not using JSON now, based on his advice.

**Tom Wilkie:** What would you use instead?

**Mat Ryer:** Just probably something like logfmt, or log f-m-t, depending on how you wanna say it...

**Tom Wilkie:** I asked you because I wanted to hear how you said logfmt.

**Mat Ryer:** Yeah, I'm one of those people, I'll just say "fummt." And I don't even look embarrassed when I say it.

**Tom Wilkie:** How do you say the command line tool for Kubernetes?

**Mat Ryer:** I think I say kube cuttle.

**Tom Wilkie:** Is it not kubecuddle?

**Mat Ryer:** Maybe in an American accent... How do you say it, Matt?

**Matt Toback:** Kube cuddle...

**Mat Ryer:** Yeah, you sort of say cuddle...

**Tom Wilkie:** He says cuddle, yeah. It's kind of cute, isn't it? \[laughter\]

**Mat Ryer:** \[12:06\] For someone with so many t's in their name, you say a surprisingly few amount of t's.

**Tom Wilkie:** His name is \[unintelligible 00:12:11.02\]

**Matt Toback:** I save them for the name.

**Mat Ryer:** His name is Mad. \[laughter\]

**Tom Wilkie:** The SLOs episode, early on. I think that was only the third or fourth one... It's hard to remember which one recorded, because we did the first one as episode zero.

**Mat Ryer:** Yeah, that's right. Zero-bound index.

**Matt Toback:** I've got a big ol' bone to pick about this one... I feel like the entire industry is fooling each other. I wanna play this, and then I wanna rant for a moment.

**Tom Wilkie:** That was interesting; the difference between SLA and SLO is whether it's included in a contract, where there's penalties or not. I know it's a bit kind of off-topic for this, but what kind of penalties make an SLA? What have you seen in these contracts?

**Björn Rabenstein:** I mean, I'm not making the contracts most of the time. Perhaps Tom knows more about that...

**Matt Toback:** So just join me here for a second... So we have -- if you've listened to this episode, there's so much good stuff. So it's not this quote. But we have Björn - Tom, you were at Google; Google wrote the book on SRE, and widened the world to actually understand what you need to be tracking, how you need to track it, how software has gotten much more complex, which means that it is not a single up or down. And I think Björn said something about like a power switch, aside from different voltages and maybe some variations there. But it's not a power switch. And then you have contract folks, and you have the business, who is now, despite progress in all this, continuing to sign multi-million-dollar deals on SLAs. And then it's almost like they're just sitting there, and they sit across the table from each other and Go "99?" and someone else goes "99.1". Or "99.99999" "Ah, you got me... Alright." But then it's bull-- see, I caught myself. It's nonsense, right? Because then if anything happens, both people feel like they have a leg to stand on to argue with each other. And meanwhile, the SREs are sitting in the background, saying "I told you not to do this. This is nonsense." So tell me, what do we do?

**Tom Wilkie:** Yeah... We won't agree -- I won't agree to a particularly high SLA in a contract, because, to your point, we can't meet arbitrarily high SLAs. There are things we can do, and for customers that do have different SLAs, we do tend to - like, for instance, move them to the end of our deployment roll-out schedule, so the chance of them getting hit with a new bug introduced by the roll-out is lower the further down the deployment schedule you are.

So we can do some things to -- almost all of our \[unintelligible 00:14:44.04\] caused by us deploying changes... So we can mitigate those, to a certain extent.

Customers... You know, we do see -- one interesting thing, when customers come to us "Nope. It's gotta be six nines. It's gotta be five nines." We can't deliver that in a single region, because we don't get the same kind of SLA from our infrastructure providers. So it is a useful conversation, because once you tease that out as an actual business need for them, that they're willing to pay for, then we design and architect, i.e. we deploy them in multiple regions and it costs them twice or three times as much.

So there are some uses to that, but yeah, the general "Oh, we've had --" We've had customers that have come us and said "Ah, but every one of our suppliers gives us a better SLA than they give everyone else." I'm like, "Yeah, I'm gonna call BS on that." It's not really true. Can I say BS?

**Mat Ryer:** That's why that exists.

**Tom Wilkie:** I'm gonna call nonsense on that, yeah...

**Matt Toback:** Yeah, nonsense!

**Tom Wilkie:** Yeah... So we do various things, but I do in general agree. The other thing -- you know, it's not just that; the number of times in an agreement someone's asked for an uptime SLA... This is my pet peeve. If you wanna see me get riled up, talk about uptime SLAs.

**Matt Toback:** Tom, what do you think about uptime SLAs?

**Mat Ryer:** Yeah, we wanna see him get riled up... \[laughter\]

**Tom Wilkie:** \[15:58\] How do you measure uptime? We operate a SaaS service. Response to requests. If you don't send a request in a given unit of time, was it up or not? Does it even matter? Tree falls in the woods type thing.

So we try and offer customers a request-based SLA. Like, "We will respond to this proportion of requests successfully." We feel like we're doing the customer-friendly thing. We feel like we're giving them something that's measurable, and impactful, and meaningful, and customers come back and say "Can we have an uptime SLA, please?" I'm like, "But it doesn't mean anything." An uptime SLA can be defined in terms of a request-response SLA. You can say "Five-minute windows, you must respond to a certain number of requests successfully, and then a new count is up." That's why we just wanna give you a request-based SLA. But I feel like, to a certain extent, you can't tell people what they should care about. You just have to meet them where they are.

**Matt Toback:** Yeah... My issue is that I don't think they care about it. I think meeting them where they are - it's the mutually agreed-upon thing that you're supposed to ask for, and that you're supposed to do battle over. And then people just \[unintelligible 00:17:02.13\] In a way, I almost respect it more, because they're basically saying "I call your bluff. Nothing matters." \[laughter\]

**Tom Wilkie:** The people who ask for particularly high SLAs... You know, what I would never do, or what I would -- you know, I'll leave before we ever agree to this, is agree to an SLA we know we can't meet, and just be willing to pay credits when we don't meet it. I would never do that. I think that's borderline --

**Matt Toback:** It just becomes like a tax.

**Tom Wilkie:** Yeah, it's actually -- and I think that's kind of borderline improper. So I always push back against any suggestion that "Oh, why not just agree to four nines and then give them the credits when you don't meet it?" And in a lot of situations it would work out economically to do that...

**Matt Toback:** Would you go the other side, and get very specific and just put a buffer on all the things that you care about and are tracking? Like, all the things we talked about in that episode; the error budgets, and this, and that... Basically, you would have an appendix that was four pages long, and that you'd just give the person.

**Tom Wilkie:** Of things that are excluded. We've about -- you know, I don't wanna name names, because that would make it even more fun... But we've talked about with certain providers where maybe there's platform issues that we can't work around. We've talked about just passing them on to our customers in that kind of addendum... But honestly, that's not being very customer-friendly either. And our whole job here is to work around platform issues.

**Matt Toback:** That's right. The decisions that we make around how to deliver the service are our decisions.

**Tom Wilkie:** Exactly, yeah. And this is the difference. We are not a hosting provider, we're a SaaS company. And if we were a hosting provider, I feel like you would just pass on the platform issues... But no, we would never do that. But the interesting one is I do feel like we could offer a worse SLA for some customers in return for cheaper service. I think there are people out there who would look for something that's more cost-effective, but maybe slightly less reliable. And this is where I think maybe we could -- you know, we run all our services with a replication factor three, so that we can survive machine failures... But honestly, we see a very small number of machine failures. So why not run the services with a replication factor one; when there is a machine failure we have an outage, but design it so that our SLA is still covered. Like, would you accept a 95% SLA in that situation, for a third of the price?

**Matt Toback:** I would consider that if the buyer was the user, in that way... Because let's say you play it out and the person who's making the decision has budgets that are getting pinched, and they say yes, and they're gonna roll the dice... But then if it goes down, that still reflects poorly on whoever the vendor is. It reflects poorly on you, and I just -- I don't see a world in which that's... You know, like, "Well, Tom said..." \[laughter\]

But I don't know, it's tricky. I know what you mean. If you're the one taking on the risk yourself, then you're like "Alright, fine. This is not mission-critical. Cool."

**Tom Wilkie:** I feel like we could make this whole episode a retrospective on the SLOs episode, so... I think that tells us maybe season two we should revisit SLOs.

**Matt Toback:** Hey, I noticed that you two are wearing the same hat.

**Tom Wilkie:** I mean, again, another great conversation for a podcast, given that this is an audio format...

**Matt Toback:** Oh. Well, could you describe the hat?

**Tom Wilkie:** Well, it's a thing you put on your head...

**Matt Toback:** Oh.

**Tom Wilkie:** \[20:06\] It stops the sun or the rain from falling on your skin. Or in Mat and I's situation, falling on our massively-receding hairlines.

**Mat Ryer:** I can't argue with that. But what I lack in hair, I more than make up for in forehead. \[laughter\]

**Tom Wilkie:** I'm not gonna let that one slide, by the way... Why is your hat white, and why is Matt and I's hat black?

**Mat Ryer:** I don't know. I really don't know.

**Tom Wilkie:** You don't? I thought you were gonna use this as an opportunity to remind the audience that you won one of our hackathons internally.

**Mat Ryer:** But is that what it is, if you win you get the white hat?

**Tom Wilkie:** I assume it must be, yeah.

**Mat Ryer:** Yeah, I don't know...

**Matt Toback:** I don't know for sure though.

**Tom Wilkie:** Do you not remember the hackathon episode where we discussed the color of the hat you win in detail? Or was that cut from the episode?

**Mat Ryer:** I mean, if this hat is special because I won a hackathon, I'm gonna be wearing a lot more. \[laughter\] I had a manager once who wanted there to be no bugs in the code. He wasn't a technical person, but he just decided -- you know, a bit like how we have the lawyers saying they want a hundred percent SLAs. He wanted basically no bugs and no errors... And this was kind of like quite interesting when with Björn in that same episode we started talking about error budgets... Because I think that is interesting that we actually -- in the real world errors happen, things go wrong... If you optimized them all out and end up with the perfectly stable system, you're stuck with it. You sort of can't really innovate on it. So yeah, you can't take any risk.

So I like that the error budget admits realities that we face, which is yeah, it's risky. Building software is hard. We still wanna be able to do things, because that's how we make it better, and therefore we need to have some kind of error budgets. Check out this clip...

**Mat Ryer:** So we talked a bit earlier about error budgets... Can we dig into that a little bit? What is an error budget?

**Björn Rabenstein:** Yeah, an error budget is if you want an inverted SLO. Or let's say if you have a specific kind of SLO, which is based on error rates -- or success rates; let's first bring the positive way. You've promised the customer you will serve 99.9% of the requests correctly and in time. Then the inverse of that, the 0.1% you have left is your error budget, and now you need a kind of billing period, which usually if you have an SLA, is nicely formulated in your contract. If you just have users that come and go, because you serve a free product that just makes money with ads or something, it's not that formalized. But you might still wanna have some billing period, which is often a month.

Often, you say "Within a month I will serve you 99.9% of the requests correctly and in time", so your error budget is 0.1%. Then you get into this idea that you burn your error budget. If you have an outage one week into the month, and a certain number of request have failed, then you know you've burned 20% of your error budget, but you are also already 25% into the month, so that's kind of fine. You burned your error budget at the right rate. Then if you burn it too quickly, you can start to say "Okay, let's act a bit more cautiously, let's not do this risky new feature launch this month."

It's a bit artificial that you have this monthly boundary, but sometimes that's literally in your contract. You could do some floating thing if you want, but it's also not about precise numbers here. It's about getting the broad balance right. If you have to reimburse your customer because you're in breach of your SLA, it's a different thing. But from the developer perspective and this whole balancing between the ops people that always want stability and the devs who always want to push new features - that's a very useful tool.

**Mat Ryer:** Yeah, I think that's really -- oh, hang on; ah, I didn't press Record... I haven't been recording this.

**Tom Wilkie:** \[24:04\] You're sh\*\*\*\*\*g us, right?

**Mat Ryer:** Yeah, I'm joking... \[laughter\]

**Matt Toback:** Oh, my God...

**Tom Wilkie:** Oh, okay... \[laughter\]

**Mat Ryer:** But that did happen, didn't it?

**Tom Wilkie:** Ahhh, I was ready to lose my patience here...

**Matt Toback:** Stress...

**Tom Wilkie:** Yeah. I was looking at the clock, thinking "We've not got lot time left to record the rest of this episode."

**Mat Ryer:** Yeah. That was a joke, but that really did happen on our hackathons project episode, didn't it?

**Matt Toback:** With the best episode, just sadly...

**Tom Wilkie:** Which was the unreleased tapes of the hackathon. That was the best one, yeah. When we re-released it and repeated all the jokes. It didn't quite have the same punch...

**Mat Ryer:** Yeah, it was funny... The first time we went through it, just improvising, and then people came up with really funny things... And then the second time through it, because we had to just repeat it, people were just stealing each other's jokes... \[laughter\] Ash stole one of my jokes. In the thing, you hear me saying "That's a good joke, Ash..." \[laughter\] That's why, because it was my joke in the first take.

**Tom Wilkie:** That was a really good episode. So we've experimented with different things. One guest, two guests... I think that was the only episode where we had three guests... And it worked pretty well, but it's difficult to know who should talk when, when there's so many people.

**Matt Toback:** Yeah.

**Tom Wilkie:** I think one of the things I've definitely learned - one guest is kind of... One guest, two interviewers works really well. Two and two works well as well, but yeah, two and three maybe not.

**Matt Toback:** I did an internal one for picking up the season two of internal with the differently leads in the community calls... So like Tempo, Loki, Grafana, Mimir, the whole thing, and then also the agent, and it was just too many. It just went in the other side, because literally no one knew how to talk; there was no banter, there was no establishment, or people didn't know how to bounce off each other... And I think people were a little bit more nervous about what they were saying, because live they didn't wanna say something that maybe was an unpopular opinion. Nod to Unpopular Opinions... But you know what I mean? It didn't work quite as well.

**Tom Wilkie:** And Unpopular Opinions - that's something that died quite quickly. So for those who aren't aware, Mat, our co-host, also hosts another podcast, which he only plugs once every few episodes... And on that podcast --

**Mat Ryer:** I didn't bring it up this time...

**Tom Wilkie:** I thought I'd save you from having to do it, Mat. On that, they have an Unpopular Opinions, like a regular segment that appears in every episode. We tried to introduce that at the beginning of the season, with "Your favorite dashboard" segment.

**Matt Toback:** "Describe your favorite dashboard..."

**Tom Wilkie:** ...where one has to describe their favorite dashboard... Because again, it's a podcast. Yeah, that only lasted one episode, I think.

**Mat Ryer:** That's a shame, because I loved that idea... And yeah, that's it, you've gotta be able to fail. And this is the thing - making people comfortable enough so that you can try things, take risks... It's like, you need an error budget; you need an error budget for podcast ideas, too.

**Matt Toback:** For life...

**Mat Ryer:** For life, yeah. You do. You have to. Like, genuinely. If you're too cautious, you won't be able to -- like, you tie yourselves in knots.

**Tom Wilkie:** If you only ever do things the way everyone's always done them...

**Mat Ryer:** Yeah. It's not a recipe for innovating and pushing the boundaries, and stuff. So yeah, I think allowing things to fail, taking it on the chin, owning it - I think that's very healthy.

**Tom Wilkie:** And allowing people to do -- you know, giving people the freedom to do what they wanna do, and do it the way they wanna do it. For instance, reading off the notes that you've made before the recording to kind of set someone up for the next thing.

**Matt Toback:** I did like that bit on the hackathon episode, where Ash said at the beginning... What did he say? Now I'm losing it... But it was like allowing somebody to do what they wanna do, the way they wanna do it, but it's like off... Or off-vector, I think he said. It's not directly aligned with the roadmap. Basically, it's like "Shoot off wherever you wanna shoot off", and you have the time and space to do that. And I think that's cool.

**Mat Ryer:** Yeah, that's the thing I like about the hackathons. There's one coming up, there's another hackathon coming up at Grafana... And they're like "This is a spreadsheet of ideas." Anyone can just put any idea in, and then others just add their names if they're interested. So you get this kind of --

**Matt Toback:** \[28:11\] I thought you were gonna say "Others just add their names next to it", and it's like stealing the joke. So one person does all the work, and you just go and you're like "Oh, that one. I want that one."

**Mat Ryer:** Yeah, you can't do that, probably... Should I do that on one and see what happens?

**Matt Toback:** Just get another white hat...? \[laughter\]

**Mat Ryer:** I'll join every team. That's one way to do it. Yeah, but it's sort of that self-organizing thing, and not being too prescriptive about what you're gonna do. And some of the ideas are just great. And it's usually things that are annoying them, or things that they want to solve, but they just haven't had time to do it. So I think that's really great... That's why I really like the hackathons.

**Matt Toback:** I also think that there's so much to be said for like what it opens up after that. I don't remember who, but there was a project that was almost like a real-time RPG within Grafana. It wasn't the Doomfana, but it was like this real-time RPG... And I watched it and I was like, "Oh, this is really cool", but then I was thinking, I was like "Oh, this is like the beginnings... This is laying groundwork for real-time collaboration in a dashboard, in a remote work environment." That's what I saw seeing through that, and I hope that other people saw that, and then the next hackathon, or that there's another idea that grows out of now this whole \[unintelligible 00:29:21.24\] that didn't exist before. That's where I think -- it might take two or three iterations for something to grow out of it, but it's just like, why not, right? It's like "How did this start?" and you're like "Real-time RPG." Like, "Of course!"

**Mat Ryer:** Yeah, that's the thing about the spirit of borrowing ideas... No one's gonna be upset if someone does a project that is what their idea is, but different; or often a different angle, or just done in a different way... Or hopefully better. Like, that's really the spirit of it. Sort of borrowing from each other's ideas. I have no idea what the quality of the presentations are gonna be this time, because I know that the standards gets set each time... So I don't know, but my advice is to do something different. We're not gonna beat... Someone did -- a professional video editor did an actual amazing presentation, and no one's gonna beat that at video editing. But you have to do something else, come at it from a different angle... Otherwise there's no chance.

**Tom Wilkie:** I'm excited to see what comes up in the next hackathon, actually... Because it's been six months since the last one. We took a break, we took a quarter off because of GrafanaCon and GrafanaFest and all of the events going on in the org... So yeah, I think there's gonna be a lot of pent-up demand to...

**Matt Toback:** I think so too. You know, one of the things that I wanted to call back to... An episode that I really liked was with Nayana Shetty from the Lego Group... And I wanna play this little clip.

**Nayana Shetty:** ...shift left, and test early, release as small as possible, and continuous iterations, and stuff. So all of this I think kind of leads to that point of "How do you make your future better?"

And one of the quotes I've often used is being kind to your future self. How can you make your life easy in the future? Think about that today, when you're building whatever you're building.

**Matt Toback:** And what I loved about this episode in particular - and that's such a great quote; it feels like something you could repeat and remember when you're making almost any decision; any good software advice is probably a good life advice, too... But Nayana was different than a lot of the other practitioners because she's a practitioner, so she's the one that's taking and consuming all these things that we're talking about, and figuring out how to adopt it, how to reconcile it with all the other stuff that exists on the platform, how to push these groups forward... Those set of challenges I think are also massive, and I'm glad that she came on to share her perspective there. But I just loved distilling it down to the "Be kind to your future self" and just thinking like "How is that gonna work?" \[laughs\] What are you gonna think of that?

**Tom Wilkie:** \[32:07\] I think it's great. We talk about it in terms of technical debt, as software engineers. We say "Oh, you're adding a piece of technical debt here", and "debt" is the keyword there. You have to pay it back in the future, so you're kind of incurring a cost in the future, which is not being kind to yourself.

So I think that we internally have a term called organizational debt as well, when we do something repeatedly, the manual, hard way, and like "Oh, we probably should have a process for this." That's organizational debt. But I'd rather have a little bit of technical debt and a little bit of organizational debt than over-design and over-engineer everything upfront, and then waste time and effort. So it's kind of a balance, right?

**Matt Toback:** I like that. If you are choosing to take on that debt for a period of time because you know you can get to the other side. Is that like a technical mortgage that you can take?

**Tom Wilkie:** I mean, yeah, making a conscious choice and a conscious discussion of what you're doing and why you're doing it is the key here, right? Because it's when you accrue it without knowing. It's when you've developed a whole bunch of -- you know, a software with some technical debt that "Oh no, we've gotta go and pay this down, and we don't have time to pay it down." That's when problems arise.

**Mat Ryer:** Yeah, and I think big upfront designs also kind of do that, where you are making too many decisions, and you aren't giving your future selves the options that you might need. You're sort of tying it all up. And it feels good, because you feel like everything's solved...

**Matt Toback:** Yeah. Solved it!

**Mat Ryer:** Yeah, but it's not.

**Tom Wilkie:** You've just painted yourself into a corner.

**Mat Ryer:** Yeah, basically. And this happens to me in my normal life. Past Mat very often leaves work for me to do... Do you know what I mean? And I'm like, "Oh, I hate him. \[unintelligible 00:33:42.27\]

**Matt Toback:** I wish Nayana was here... Right? So "Be kind to your future self" etc, but you also... You have the individual; and individuals kind of change jobs, and move to different organizations... And then you have the company, or the team, or the tech, whatever; I don't care about the company. But the software, which now has a much longer horizon than any individual. How would you remix this a little bit to motivate the team to kind of be like -- is it like "Be kind to the future team?"

**Tom Wilkie:** Yeah, there's a bit of that. I think, interestingly, the intersection of this idea and DevOps... So when there's a normal developer-operations kind of split, there's potentially a lack of empathy for the ops team... Which is the future team, because they're the ones that are gonna have to operate the thing you've built. But when you merge those two functions into one team, when you're like "No, everyone in Grafana Labs is responsible for running the code that they've written", I think it brings to the forefront the idea that "Well, I'm gonna be on the hook for the pager for this if it goes wrong, if it doesn't meet its SLAs, and if it's kind of causing us issues and unreliable. I'm gonna have to be the one who deals with that in a high-stress situation."

So yeah, aligning those incentives, making the team responsible for the building and the operations does kind of, I think, force them, to an extent, to consider the future team's workload and burden.

So I think that brings us kind of to the final topic, right? What's coming next, what's next for Big Tent?

**Mat Ryer:** Yeah, well what do we think we could improve on? What didn't we get right? What can we do better?

**Matt Toback:** I do think there wasn't enough tent jokes.

**Tom Wilkie:** Yes.

**Mat Ryer:** Oh yeah, tent pun.

**Tom Wilkie:** I pitched you a few tent puns before, but you didn't go for them.

**Mat Ryer:** Oh, \[unintelligible 00:35:27.05\] That's good. That's good work.

**Matt Toback:** Save that for season two...

**Mat Ryer:** That is intense. What a good joke.

**Tom Wilkie:** Oh, Mat...

**Matt Toback:** I think I like the Grafanistas that we had on here, but I really like the external guests too, and I wanna make sure that we're continuing to go wider, and more and more other voices from the industry, but practitioners, people that are building new software... I really like that, just because it shows how all this stuff really ties together to me.

**Tom Wilkie:** Yeah. I agree. I wanna also get more Grafanistas on. I want both. So how do we get more external guests, and more Grafanistas, and have it not just be the three white men that it is presenting the panel all the time?

**Mat Ryer:** \[36:14\] Yeah, it's true. The most diverse thing on the panel here is that one of us is called Tom. \[laughter\]

**Tom Wilkie:** Nailed it. I'm not laughing at the joke, I'm laughing that I've heard the joke five times... \[laughter\]

**Mat Ryer:** It didn't make into -- we did it live, and it got a good laugh... But it didn't make it into the mix.

**Tom Wilkie:** We just don't have recorded evidence of someone laughing at it.

**Mat Ryer:** Yeah.

**Matt Toback:** Someone hit the Mute button on the recording just as everyone laughed.

**Mat Ryer:** Yeah... No, I think it was just sort of out of respect. Everyone just sat silent, in sort of quiet contemplation.

**Tom Wilkie:** In awe of the pun...

**Mat Ryer:** Yeah, it was just really lovely. It's a bit like how when I walk into a room, people spray deodorant in the air. It's sort of like a strange culture... Interesting... It's just a respectful thing, you know what I mean? Bless them.

**Tom Wilkie:** So one of the things I think we should do - I think we should open up the MC responsibilities to more people... I'm looking forward to having different voices from within the company interview their kind of favorite people from the industry. I think that could be really powerful.

**Mat Ryer:** Yeah, there's some people that would do such a great job... And they probably don't even know it yet. But yeah, so that's what we should do, is really encourage those to get on and run an episode, and have the conversations.

You know, when you met people in-person, on the off-sites, or in the on-sites, or at GrafanaFest, actually meeting people, you realize that so many people have really interesting perspectives, they speak very well, they deliver it very clearly... And especially for me, I keep thinking like "Oh, you'd be great on a podcast." That's kind of my default.

**Tom Wilkie:** A lot of enthusiasm for it, yeah. I think a lot of people in the company would step up and host a few episodes. But I'd like to hear from the audience, what would they like to see? Who would they like to hear from? Or topics that they'd like to discuss. We have an email address, don't we?

**Mat Ryer:** Yeah.

**Tom Wilkie:** It's bigtent, all one word, @grafana.com.

**Mat Ryer:** They're all one word.

**Tom Wilkie:** No, it's bigtentalloneword. That's the --

**Mat Ryer:** \[laughs\] You're gonna have to register than one now.

**Tom Wilkie:** My WiFi password is just alloneword.

**Mat Ryer:** \[laughs\]

**Matt Toback:** Have you ever had a WiFi password that is funny to you, and then you have to tell it to someone else who visits your house, and it immediately feels embarrassing?

**Mat Ryer:** Yeah, I had a WiFi network that was really slow, and the name of it was just the poop emoji... And then the electrician came around and had to connect, and I had to tell him, "Oh, it's the little poo..." It's embarrassing.

**Tom Wilkie:** \[unintelligible 00:38:52.19\]

**Mat Ryer:** \[laughs\]

**Tom Wilkie:** My WiFi network is called "Tell My Wife I Love Her."

**Mat Ryer:** Aww...

**Tom Wilkie:** No, no, "Tell my WiFi Love Her."

**Mat Ryer:** Oh, that's good.

**Matt Toback:** That's a good one.

**Tom Wilkie:** It's not an original one. I read it somewhere.

**Mat Ryer:** Yeah. I like "Pretty Fly For a WiFi." I've seen that one a few times.

**Tom Wilkie:** Better than "It hurts when IP."

**Mat Ryer:** \[laughs\]

**Tom Wilkie:** Should we wrap it up there?

**Mat Ryer:** Yeah. Well, thanks very much.

**Tom Wilkie:** On the WiFi jokes?

**Mat Ryer:** I think that's a good time to end it...

**Matt Toback:** \[laughs\] Do we land the plane before that happened?

**Mat Ryer:** Well, that's all the time we have, and this wraps up season one. I had a blast, I had a great time, so thank you very much.

**Matt Toback:** Mat, are we going anywhere for season two?

**Mat Ryer:** Are we going anywhere? What do you mean? Like on holiday?

**Matt Toback:** Like, will we be here when there's new voices that...

**Mat Ryer:** Yeah, I think we'll be around still.

**Matt Toback:** We'll be here. Okay. Alright.

**Mat Ryer:** Yeah. I'd like to be... But again, write in. If there's one of us in particular you don't wanna hear from...

**Tom Wilkie:** While we're looking at him... \[laughter\]

**Mat Ryer:** \[40:04\] Yeah. Then email bigtent@grafana.com. They can probably do it on Twitter as well, right?

**Tom Wilkie:** Yeah.

**Matt Toback:** You can't email on Twitter, no.

**Mat Ryer:** Oh, you can't? Oh...

**Tom Wilkie:** @grafana would be a good way of getting in touch with us.

**Mat Ryer:** Yeah, @grafana. Do \#bigtent. That'd be good.

**Matt Toback:** You did say -- I know you're trying to wrap up... You did say "on-site" before, and we didn't have a clip from it, but I wanna do a quick pitch for the episode that we did with Darren Murph where we talked about off-sites versus on-sites... And there's a lot of really great content there. I just enjoyed the conversation because we are now in this rapidly-evolving hybrid work-from-home, remote-only, remote-first environments, and... Yeah, I think he has a lot of great perspective there. So listen to that one, too.

**Mat Ryer:** Yeah, brilliant. And if you've got other ideas for subjects, or people that you'd like to hear from, then let us know. We're all ears. Well, we're mostly ears...

Well, that's it. That's the wrap for season one. Congratulations. It's been good, I've loved it, and... You know, I hope you've enjoyed listening to it. Join us for season two, which will be -- we don't really do estimations, but Tom, when do you think season two is gonna be out?

**Tom Wilkie:** Yeah, it will. Yeah.

**Mat Ryer:** It will. There we go. Well, thank you very much. See you next time!

**Tom Wilkie:** Thank you, Mat.

**Mat Ryer:** Thank you! Thank you, Matt, thank you, Tom.

**Tom Wilkie:** Thank you, Matt.

**Matt Toback:** Thank you.

**Mat Ryer:** Bye!

**Tom Wilkie:** Bye!

**Break:** \[41:28\]

**Tom Wilkie:** This is the longest talk show ever, Mat... \[laughter\] You know I said realy nice things about the editors...

**Mat Ryer:** Yeah. That's why we say nice things.

**Tom Wilkie:** We're gonna have to say even nicer things for this episode.

**Matt Toback:** Good one. "Good news - we recorded 45 hours, but we need to trim down to 30 minutes." \[laughter\]

**Tom Wilkie:** If there's even 30 minutes of content in here...

**Tom Wilkie:** Well, that was a good comment... It killed the conversation...

**Mat Ryer:** No, it's a good point for -- we've got this link audio which sounds like this... \[jingle 00:42:20.20\] It's got bongos in it.

**Tom Wilkie:** Would it be good if you played that as I finish talking? ...not like, you know...

**Mat Ryer:** Tom, you're not thinking fourth-dimensionally...

**Tom Wilkie:** Ah...

**Matt Toback:** The future self will be edited. \[laughter\]

**Tom Wilkie:** Great. Now they're gonna keep that in.

**Mat Ryer:** Yeah, exactly. That big gap. \[laughter\]

**Matt Toback:** "And welcome to season two of the Big Gap Podcast." \[laughter\]

**Mat Ryer:** Joined with, joined by...?

**Tom Wilkie:** Joined with would be a surgical procedure...

**Mat Ryer:** \[laughs\] Yeah. Normally, people go the other way, but we just felt like it was right for us to become conjoined... Just share resources...

**Tom Wilkie:** Just \[unintelligible 00:42:57.01\] the little finger as well. Just for awkwardity.

**Matt Toback:** Will season two have a new theme song?

**Tom Wilkie:** I have that written here, I was gonna ask...

**Matt Toback:** No... It's a classic no.

**Tom Wilkie:** We should do like a techno remix.

**Matt Toback:** Remixes! It's like The Wire. Every season had the same song, but in a different way.

**Mat Ryer:** Yeah. So we should open it out to people in Grafana, because there's a lot of people that do music production and stuff as a hobby.

**Tom Wilkie:** Done.

**Mat Ryer:** That would be great.

**Matt Toback:** Remixing for season two would be awesome.

**Mat Ryer:** I can give them the stems... That's what we call it in the biz. Biz is what we call business, in the biz...

**Matt Toback:** Is that the weed?

**Mat Ryer:** No, it's the stems... \[laughter\]

**Tom Wilkie:** I prefer the seeds...

**Mat Ryer:** They're each audio track separately, so that it's easier for mixes and things to chop up and edit.

**Matt Toback:** When I was listening to the recaps, or when I was listening back to the episodes for this episodes, I did it at 2X... And listening to theme song at 2X is really fun, because it's like \[43:59\] It gets pretty rock'n'roll quick.

**Mat Ryer:** It doesn't change the pitch, it's just faster, is that right?

**Matt Toback:** Um, it changes the pitch too, yeah.

**Mat Ryer:** Oh, it does? \[44:09\]
