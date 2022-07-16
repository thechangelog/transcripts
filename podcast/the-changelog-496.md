**Jerod Santo:** Bryan, thanks so much for coming on the show.

**Bryan Cantrill:** Thanks for having me. It's great to be here.

**Jerod Santo:** We are super-excited to have you. We've had a lot of people say "Talk about Oxide. Get the Oxide people on", so we're happy to fulfill that demand. And joining me also today - it's not Adam. Whose voice is that? It's Gerhard Lazu. What's up, Gerhard?

**Gerhard Lazu:** Hey. I'll try to sound like Adam. I'll try to be the serious one. I'm not sure how well I'm going to pull that off. I will ask at least one Silicon Valley question...

**Jerod Santo:** There you go.

**Gerhard Lazu:** ...just to be a bit more like Adam. But yeah, this is a nice trio I like it.

**Jerod Santo:** Yeah. Adam is on vacation this week...

**Bryan Cantrill:** Silicon Valley - are we talking HBO's Silicon Valley?

**Gerhard Lazu:** Yes...

**Jerod Santo:** We are. Adam is somewhat obsessed with the show, and he brings it up pretty much every episode at some point, and so that's why I Gerhard --

**Bryan Cantrill:** You know, I've got an Aviato T-shirt that my 15-year-old gave me. I feel like I should go put that on.

**Jerod Santo:** Oh, yeah!

**Bryan Cantrill:** \[03:54\] My kids and I like to quote -- I think HBO's Silicon Valley is really extraordinary. It merits repeated watchings. I would like to say that I personally reject those in Silicon Valley who say that they can't watch it because it's too real. That's what satire is. Suck it up, and watch the -- I think it's extraordinary. So I'm glad that --

**Jerod Santo:** Funny enough, that's what a lot of our guests say when Adam brings it up, because he always inevitably asks me, "Jerod, do you watch it?" I'm like, "I watched season one and I kind of fell off. I thought it was really good, but I don't watch it currently."

**Bryan Cantrill:** Unacceptable.

**Jerod Santo:** Adam turns to the guest and they say it's too close to home. So...

**Bryan Cantrill:** I'm sorry, that is unacceptable. Everybody needs to grow up and be able to -- if you cannot watch satire about yourself, you are taking your life too seriously. And the satire is brilliant. I actually had a boss of mine that I was imploring to watch Silicon Valley... And he retains conversation extraordinarily well... So he inhaled it. And he started dropping stone cold Silicon Valley references... \[laughter\] In particular, we had some consultants in, and if you've not -- you've only seen season one, Jerod; I'm not talking to you, because you are not going to get this reference. And there were, some consultants and they were doing a very cringy -- they started doing a SWOT diagram... And my boss, the CEO of the company kind of leans back and says, "Should we let Blaine die?"

**Gerhard Lazu:** \[laughs\]

**Jerod Santo:** I'm sure that's funny.

**Bryan Cantrill:** And the consultant's like, "Wh- what? What's going on? Who's Blaine?" and I'm like, "Holy God..." This guy's got a very dry sense of humor, so he's totally happy to make a reference that no one else is getting in the room...

**Jerod Santo:** And just let it sit there for a while...

**Bryan Cantrill:** So I let it absolutely sit there. And I was just like, "Okay, this is impressive. This is really impressive." And he -- I mean, more or less ordered his direct reports. Like, I'm sorry - in order for us to be able to communicate with one another, you're going to have to actually not just watch this, but retain it. Just like with the news yesterday, and Trump throwing his lunch across the room - that is a Gavin Belson scene. That is Gavin Belson destroying his own house in a rage. Anyway...

**Jerod Santo:** You're talking right past me. I mean, I got The Office down, I can do Seinfeld, I can do New Girl... But Silicon Valley, I'm just gonna carry season one and then I'm gonna peace out. I'm sorry. It's just what happens.

**Bryan Cantrill:** You're making a huge mistake. You're making a huge mistake.

**Jerod Santo:** \[laughs\] Okay, enough Silicon Valley for now. Let's get into the meat of this conversation around what you and your team is up to at Oxide. You call it hardware with the software baked in, for running infrastructure at scale. It's allegedly shipping 2022. Let's start right in the fields though. As you guys put your principles right up front, your mission, your principles... This is a computer company, kind of like an old-school computer company... But you guys like - right on the front of the homepage, "Here's our mission, here's our principles." Can you lay out why that's important for you all, and what they are, and how that actually guides the company, and what you guys are doing?

**Bryan Cantrill:** Yeah, you bet. So the origin of this actually is a talk that I was asked to give by the RedMonk folks, by James Governor and Stephen O'Grady at RedMonk. And years ago, 2017, I was spun up into a lather over Amazon's 14 "leadership principles." I guess now 16... And I wanted to give my own as a rebuttal. And James responded to that tweet saying is that your "Monktoberfest talk submission?" I'm like, "I guess it is." So that, and coupled with kind of striking a contrast to Amazon did force me to think about that. And we were going through an acquisition, or had been acquired, and really suffering under a values mismatch. And part of the reason, honestly, I wanted to start a company is because I wanted to set the values from the cornerstone. And it's an important differentiation between values and principles... Principles are absolutes. Principles are the things that we can all abide by, that transcend culture, transcend company, and at Oxide, our principles are honesty, integrity, and decency. Those are our principles. That's what we expect everyone at Oxide to abide by, at all times. These are irrefutable.

\[08:26\] Values, in contrast, are intention. Values are not necessarily unequivocal goods; they are things that can be good, but they need to be not taken to an extreme. As an example, an Oxide value is rigor. Rigor is great. But rigor can also be taken to an extreme. Rigor can become paralyzing. You can be too rigorous. If you insist on "We are going to take rigor to an absolute and we are going to formally prove every program at this company." It's like, "Well, you are also not going to ship a product, because you will be formally proving programs the entire time." That is actually too rigorous. So rigor is intention with other values. Urgency is another Oxide value.

And when we kind of sat down to figure out the values, I think the important thing for us was -- the values were not aspirational. They were really trying to capture who we are. And you know, I'm old enough to know myself pretty well, to know what I wanted to build, what we wanted to build as a company. And perhaps the idiosyncratic step is that we have asked Oxide employees to commit those values to memory. So there are 15 values...

**Jerod Santo:** Wow. That's a lot to remember.

**Bryan Cantrill:** You know, it's actually not... So let's rip through the values: courage, candor, curiosity, diversity, empathy, humor, responsibility, resilience, rigor, teamwork, thriftiness, transparency, urgency and versatility.

**Jerod Santo:** You may have missed optimism.

**Bryan Cantrill:** Did I miss optimism? That's actually funny, because optimism is \[09:56\] That's the Keenan Feldspar one that I missed. \[unintelligible 00:09:58.04\] Thank you.

**Jerod Santo:** That's hilarious. Yes. Well, I was reading them along as you -- I was being impressed by how you hit them in order, even on the end, and then you missed one.

**Bryan Cantrill:** \[unintelligible 00:10:07.04\] Well, maybe I'm undermining my own point if I actually missed optimism.

**Jerod Santo:** See, it is harder than you think, isn't it?

**Bryan Cantrill:** And part of the reason that we know that we can commit these kinds of things to memory, is - that's just like an act of repetition, effectively.

**Jerod Santo:** Sure.

**Bryan Cantrill:** And, you know, I lead the kids' scout troops, and we asked 10 or 11-year-olds to memorize 12 points of a Scout Law, and they were all able to do it. So yeah, I was pretty confident that adults could retain 15, although apparently, except for me \[unintelligible 00:10:40.15\] optimism, so I'll have to go work on that one.

**Jerod Santo:** Well, you were optimistic about it.

**Bryan Cantrill:** But then we use those values as a lens for everything at Oxide. We use it as a lens for hiring, we use it as a -- so our approach to hiring is very different than other folks. We have a process that is very much upfront and written down. My big belief is that - I don't think this is controversial at all - interviews are a terrible way to assess a person... And you know, we have this long-standing tradition of using oral exams to evaluate software engineers, which doesn't work.

**Jerod Santo:** It's not what they do.

**Bryan Cantrill:** And you know, I think that for me, \[unintelligible 00:11:25.14\] relatively early in my career, you only have to have one of these, where you have someone who's just super-sharp in the interview, and is an absolute disaster of an employee... Not necessarily out of malice, but just out you've selected for in that interview is not what you actually want to select for to succeed in the role that you've got.

One's ability to be quick on one's feet in the conversation, to be able to dominate a conversation, which is what an interviewer often selects for - just not a good match for what we actually do in software engineering. What we do in software engineering is we spend time by ourselves thinking about problems, and writing down solutions. That's what we actually do. And there's a degree to which software engineering is a very solitary activity. You are alone with the problem, ultimately. It's you staring at your code.

**Jerod Santo:** \[12:19\] Yeah.

**Bryan Cantrill:** And how do we kind of capture that? And for us, it is by "I want to see a portfolio of your work. I want you to describe your work. I want you to write down. What is the work that you're proud of? I want an analysis sample." So you know, walk me through a hard problem that you've solved and the analysis that you applied when doing that. If you've given presentations, I definitely want to see those. So we kind of ask kind of portfolio-based questions, and then we go through the values-based questionnaire where we ask people some really basic questions. When have you been happiest in your career, and why? When have you been unhappiest, and why?

Then we take those Oxide values and we ask you to select one of those values and describe how it's been particularly reflected in your career. Take one of those values and describe how it's been violated in your career, and how you actually dealt with that.

And then one that I kind of threw in there at the last second, that has been proven to be kind of fascinating is take two of the Oxide values and describe how they came in tension for you and how you resolved it. And you won't be too surprised to know that at least a third of the people who applied to Oxide talk about rigor and urgency being in tension... Which I think is great. I mean, I never tire of reading that, because rigor and urgency is kind of a very fundamental tension in software engineering; it's tension that we navigate every day, all day, so I'm always happy when candidates want to describe. We're not necessarily looking for points for creativity on that one

**Jerod Santo:** Right.

**Bryan Cantrill:** But then you add all that up, and those are what we call the materials, and then we hire through that. So as a result, the values become really self reinforcing. And the values are really deeply held, deeply shared by folks at Oxide, and it has made navigating certain aspects of the company much, much easier. Like any group of people getting together to solve a problem, there is definitely -- now, there are differences of opinion, there's conflict... But navigating that conflict, navigating those differences is much easier when everyone can be really explicit about their own values. And it's been really interesting to watch people say like, "Okay, wait a minute, you and I are disagreeing right now, but I realize that actually rigor and urgency are in tension for us right now, and actually, we're disagreeing because I am biased right now more towards urgency, and you're biased more towards rigor." And that allows for a much more meaningful conversation when you actually need to go to resolve a dispute.

**Jerod Santo:** Yeah, it's actually providing like a shared lexicon inside the company...

**Bryan Cantrill:** Totally shared lexicon.

**Jerod Santo:** ...to have discussions. That's cool.

**Bryan Cantrill:** And you have to be careful, because it's very important to me at Oxide that we don't weaponize those values. What you can't say is like -- we don't want to start, you know, rating one another on values, because values are intention, there's ambiguity there, and that ambiguity is deliberate. So you've got to kind of balance that. But I think we have found that we've been able to navigate a lot together, and I think we've been able to achieve an extraordinary amount as a very, very small team, in part because there are so many problems we don't have when we built the company in this way, that is so explicit about values.

**Jerod Santo:** So did you have all of this right up front, or has it grown out of your \[unintelligible 00:15:34.22\] Because you started that back in 2019, so you've been working on for a few years. Are these things like observed over time, or did you have like a list, "Here's my list, and I'm bringing it to the company to start with."

**Bryan Cantrill:** So my big belief was - and remains - the values have to be set from the first cornerstone. You can't retroactively -- so we will never add values. There will be 15 Oxide values...

**Jerod Santo:** Will you remove any?

**Bryan Cantrill:** \[16:01\] We will not remove any. We will not remove any, despite whatever happened to optimism when I was rattling them off. No, we will not remove any, we will not add any. Those are our fingerprint. And the reason that you have to do that from the Cornerstone is because you do have to use those lines for hiring. Because even by the time you have, you know, four, five, six, seven employees, there are going to be differences. And if you haven't used those values as a lens, you're going to have to -- you know, I guess you could restructure your company around it. But I think you're really hard-pressed to do that. So for us, that is kind of the foundation upon which the company is built. And I would say also - I mean, this comes out of having done it the wrong way for many, many years, where I was too implicit about values. It is an easy mistake to think that someone else shares your values, when they in fact don't. Or when you think you are broadcasting values, when you in fact aren't. And then you end up in conflict with people that you don't understand; like, "Why are we disagreeing so much about this? I'm very surprised by this conflict." It's like, "Yeah, that's because we actually didn't share those values all along." So it has been a really important way for us to build the company,

**Gerhard Lazu:** While I understand the importance of values, how fundamental they are, and the principles, and everything builds on top of them... Not so good with names, we already said that, and I'm pretty sure I would stop after three or four... Maybe five, right? On a good day. But the one thing that really resonates with me is stories. And one story that I think you are starting amazingly well is when you start talking about the soul of the machine. That is such an important construct. The last person that I remember saying that was Steve Jobs. He was all about the soul, about the beauty, the combination of hardware and software, and what happens in between... So why is the soul of the machine important to you, Bryan?

**Bryan Cantrill:** Well, to me it's the entire system. I mean, hardware and software should be co-designed. We should be thinking of this holistically. And you know, there are things -- it's always troubling to me when I hear a jobs quote or speech that really deeply resonates, because there's so much about jobs that I don't like, and don't aspire to... And I think the unequivocal praise of jobs is a huge mistake, because the guy was really difficult to deal with.

I really recommend, by the way -- Isaacson's book is fine, but THE book on Steve Jobs to read is "Steve Jobs & the next big thing" by Randall Stross. He's written about Jobs at NeXT. It's written when Jobs is basically being left for dead, and it's a disaster story about NeXT. And I think the Isaacson bio does Jobs a disservice, because there's so little on NeXT. He was at NeXt for, what - 13 years, 15 years? I mean, he was at NeXT for well over a decade. It was a spectacular failure that should have been a zero, and only wasn't a zero because Jean-Louis Gassée \[unintelligible 00:19:09.11\] was worth more than Apple was willing to offer. If Jean-Louis Gassée had taken Apple's offer, NeXT is never purchased by Apple, Jobs does not return to Apple, and we are in an alternate timeline, and I've got no idea what happens. I mean, all of a sudden you're in a Bradbury short story. I've got no idea what happens.

**Jerod Santo:** Yeah, that'd make for good fan fiction, or something; you know, take that other timeline, make a story about it.

**Bryan Cantrill:** So Jobs gets a bunch of -- I don't like the way he treated people, and I think that honestly the next experience probably \[unintelligible 00:19:43.24\] I think it informed his return to Apple. And I would like to believe that he treated people a little bit better. But the what I do very strongly resonate with is his aesthetic about the way that these machines are engineered, and that we actually think of the entire system. And that's hard; it's hard to think of the entire system.

\[20:06\] Computers are really, really complicated. Exceedingly complicated. I mean, I like there's not a day that passes at Oxide that I don't think to myself, "God, I wish I knew how computers work." I mean, I've been doing this for -- whatever it is; I'm coming up on 30 years and I'm still learning how computers work, because it is so wildly complicated. And it's such a miracle that they work at all.

So it can be very hard to co-design hardware and software, because we're actually demanding of people this incredible depth of understanding across two disciplines that have a lot in common with one another, and have this very important surface area of contact, but are in fact different. And you know, software is not dictated by physical laws, really; and they are different. Software is not analog. The physical world is analog. Digital is a lie that we tell ourselves. But it's very important, I think, to build those things together... And that means building a team in which you've got software that has reverence for hardware, and hardware that has reverence for software. And you want everyone to kind of bring their domain of expertise to the table, but also appreciate what the other domains bring in. And that's a trick; that's hard to pull off. Jobs pulled it off? I do think he pulled it off a couple of times. I think it has been pulled off a couple times in history, certainly. And you know, we believe that in Oxide, because you know, there are there aren't as many opportunities I think to do that today, ironically, the companies that do believe in that are our most outsized successes. So it's like, you know, what are the companies that believe in hardware/software co-design? I don't know, Apple, Tesla, Amazon, Google... But other than that -- and yet, it's still considered to be iconoclastic, which is kind of ridiculous to me. I mean, this is so obviously the right way to build a system. But the reason it's iconoclastic is honestly because it's hard. It's really, really hard. It's much easier to focus on a narrower confine, and to dismiss those that are taking on the entire system. It's hard, it's expensive. We had to raise a lot of money to go build Oxide.

**Break:** \[22:23\]

**Jerod Santo:** So why did you decide to do it? I mean, you say you kind of asked yourself that question repetitively... But the very first time that you asked yourself the question and said, "Yeah, actually, I'm gonna do it", it's like, what was in the way? What was missing? Or what was in the way of you doing what you want to do, or you currently were working, or currently building?

**Bryan Cantrill:** Yeah.

**Jerod Santo:** Why decide to go ahead and raise the money, get the co-founders and take that huge leap that you took?

**Bryan Cantrill:** Well, so I was at a cloud computing company... I spent 14 years at Sun Microsystems, which I have to clarify was a computer company, because my now 10-year-old daughter thought it was a brewery, in a very strange exchange we had at some point...

**Jerod Santo:** It might be a brewery; there's lots of breweries out there.

**Bryan Cantrill:** First of all, what kid is thinking about breweries? What's going on? \[laughter\] Anyway... So now a defunct computer company. So I spent 14 years at Sun; Sun definitely did believe in that hardware/software co-design, for sure. \[unintelligible 00:26:42.12\] After Sun was invaded by the Nazis, I fled. So Sun was purchased by Oracle in 2010. I went to a cloud computing company, joined, and spent another nine years there. So it was kind of interesting to be on both sides of this. And Joyent was acquired by Samsung in 2016, and I and a colleague of mine that I had come to know at Joyent, Steve Tuck - Steve and I decided, like, we knew we wanted to start a company together... And we were kicking around some very bad ideas for things that we'd go do. And as we were kind of kicking around bad ideas, I was thinking, "Well, you know, maybe it's time to start talking, start lighting up some venture capitalists..." I wanted to go back to -- I had known VCs over the years, but needed to go kind of remind myself of them and maybe get some lunches or whatever. And I went back to the mail from a VC - actually, a pretty famous VC, and he and I would get lunch together with some regularity... And the last email that he had sent me was, "Hey, I really enjoyed lunch. Just wanted to remind you that I will fund literally anything you put in front of me."

**Jerod Santo:** Nice.

**Bryan Cantrill:** \[27:56\] Wow. Okay. So Steve, you know, \[unintelligible 00:27:57.14\] They were gonna find anything we put in front of them. Maybe we should solve the problem that we actually want to solve. And the ideas that we'd been kicking around were frankly small-ball; they were small problems that felt like startup-sized problems. But if we have got an opportunity to raise money for anything we wanted to go to, the problem that we actually wanted to go solve together was the one that we were suffering with every day inside of the walls of Troy, and then Samsung, which is the infrastructure that we were building a cloud on, out of commodity gear, Dell, HPE, Supermicro, had no end of problems; plagued by problems that we simply could not solve, because we did not control that layer of the stack. And if you look at what Google and Facebook, now Meta, Microsoft, Amazon have done for themselves, the machines that they were building for themselves looked nothing like the machines that we were trying to build the cloud on. And I'm like, "Steve, if we can actually get anything funded, we should go start a computer company." And I just remember vividly in Steve's office, being like, "Wow, do you think we could?" It was almost like, "Do we have permission to go do that? Because yeah, I mean - obviously, we should go do that."

Steve had spent a decade -- prior to his decade at Joyent had spent a decade at Dell. And so, you know, he and I -- and coming up on the go-to market side. So we felt like, "Boy, if we can go do this, let's go do it."

The thing that's really funny is that we -- so we kind of started to formulate this, and started to reach out to VCs and talk about it. And what we learned pretty early is that this is wildly contrarian, but intriguing, the VCs. In some ways, this is like the worst possible thing for VCs, because VCs always want to know more... But it requires a boldness that can be hard for venture capital to summon. So it's easy to have long conversations that lead to ultimately not getting across the finish line; but folks were intrigued, and... Great!

So the irony is that talking to a bunch of venture capitalists, getting a bunch of enthusiasm for it, and then finally went back to that VC that had sent the email, that honestly sent us down the path for Oxide... And I call him up, and I get like maybe a minute into kind of describing the problem that we were gonna solve. He's like, "Wait a minute, Bryan. I'm gonna stop you. I see where this is going. Please tell me you're not going to start a computer company." I'm like, "No, that's exactly what we're gonna do." He's like, "No, absolutely not. No. I want nothing to do with this." And I'm like, "You know, you sent me this email saying you'd fund "Literally anything I'd put in front of you." He's like, "No. No, I'm not doing that. Like no, definitely not."

**Jerod Santo:** "Oh, wow."

**Bryan Cantrill:** So the birth of Oxide is a kind of a lie from a VC, albeit a pretty harmless one... But you know, it got us to dream a lot bigger. This VC did. He did emphatically pass on us... \[laughs\]

**Jerod Santo:** Is he in now? Did he eventually get in, or is he out?"

**Bryan Cantrill:** No, no, no. He's out, which is fine.

**Jerod Santo:** Do you think he's gonna want back in later? Do you think he's gonna be kicking himself five years from now?

**Bryan Cantrill:** You know, that's the fantasy of every entrepreneur...

**Jerod Santo:** That's why I'm asking.

**Bryan Cantrill:** Yeah, I mean... Obviously, that'd be great.

**Gerhard Lazu:** Alright... \[laughs\]

**Bryan Cantrill:** You know, you try not to live your life to spite others, you know what I mean?

**Jerod Santo:** No, no, no, no, but you could say -- I mean, is there room for him on your cap table eventually? I'm sure there's other rounds. Are you done raising money for good?

**Bryan Cantrill:** We're definitely not done, but there is -- once you get beyond a certain stage, the early-stage folks, it's like the money is off the table. Their thesis is they need to be in earlier, and get the larger multiples. So that larger multiple will be off. No, actually it worked out great, honestly, from an investor perspective. We got -- and I guess when you're doing something bold, you will self-select for VCs that themselves are bold... And we got the boldest and the best. So Eclipse Ventures funded the company, and in particular a venture capitalist named Pierre Lamond. Do you know Pierre?

**Jerod Santo:** \[32:12\] No.

**Bryan Cantrill:** Okay, so Pierre hired Andy Grove at Fairchild. Fairchild Semiconductor.

**Jerod Santo:** Okay.

**Bryan Cantrill:** So Fairchild Semiconductor - this is the true birth of Silicon Valley, right? The birth of Silicon Valley is Shockley Semiconductor, and then the \[unintelligible 00:32:31.22\] leaving Shockley, going to Fairchild... And Fairchild was where you had this just incredible confluence of unbelievable talent. You've got Noyce, you've got Moore, you've got Andy Grove... Incredible folks. And this is Moore's Law, right? This is where you have this incredible growth of the integrated circuit. And Fairchild just explodes... And they end up leaving -- Fairchild is actually a subsidiary of Fairchild Instrument and Camera, and all those folks ended up leaving Fairchild and going to National Semiconductor, which is where Pierre went, Intel... The birth of Silicon Valley very much comes out of Fairchild.

So Pierre was at Fairchild... And he was at Sequoia for many years, \[unintelligible 00:33:16.10\] funded YouTube... And as you can imagine, you're like, "Wait a minute, how old is Pierre?"

**Jerod Santo:** Yeah, I was just wondering, because this seems like this goes back...

**Bryan Cantrill:** Yep, it goes back. Pierre is certainly the oldest venture capitalist in Silicon Valley, and he is absolutely the boldest.

**Jerod Santo:** Wow.

**Bryan Cantrill:** I mean, it's kind of amazing to me that you've got someone who is -- I mean, I think it's honestly a little bit embarrassing for younger venture capitalists when you've got... Pierre is so terrifically bold, and they are so afraid of things. So it's been singular; it's been so great to have... And I think it's highlighted for us the importance of when you're starting a new, bold endeavor, having an investor who is fit for that endeavor; having an investor who is as bold as the company itself has been really, really important for us.

**Jerod Santo:** If Wikipedia is right, it looks like he's in his 90's at this point.

**Bryan Cantrill:** He is.

**Jerod Santo:** Wow.

**Bryan Cantrill:** He turns 92 in September. And this guy is razor sharp. He's great. And not just sharp. I mean, sharp is great. But lots of people are sharp. It is the courage that he's got, the boldness... Because again, what we're doing is very bold, and it requires someone who shares that vision, but also understands what it means to actually solve a hard problem. And what it means to solve a hard problem is things are not always going to go well. And if you're solving a hard problem, if things are going well, you need to push harder, so that you are prepared when things aren't going well. And then you need to stand by the technologists who are solving a hard problem. And that is a balance that is increasingly rare to strike. Jobs was very good at it, actually. I disagree with some of his people management methods, but the reality is that Jobs had teams that were able to birth very bold ideas into the universe, because he understood that; he understood how to hit that balance of both pushing people towards those mountains on the horizon, and supporting them when things aren't going well, which is a challenge.

**Gerhard Lazu:** Speaking of big things, just to put this into perspective, we had the internet, we had a distributed version control system, Git for most, we had open source... There's something else coming, the next revolution. I think that's how big we're talking here. Like, a really big moment. How do you see that, Bryan? Because I know that you've been talking about this, I forget which talk exactly, but this is the scale that you're thinking at, and aiming for, and that's why you need people that see the challenge that lies ahead for what it is... Because it's really big, and it's gonna take a long time, and a lot of effort, and a lot of people to see through.

**Bryan Cantrill:** \[36:12\] Yeah, for sure. So what we are doing is, I would say, bringing those revolutions to the computer itself. I mean, it's kind of embarrassing that if you look at the server-side computer that is commercially available, it hasn't really evolved since the '90s. It is basically a personal computer, it is a racked personal computer.

**Jerod Santo:** Right.

**Bryan Cantrill:** And that's embarrassing. I mean, come on...

**Jerod Santo:** \[laughs\]

**Bryan Cantrill:** And the approach that we're taking is true rack-scale design. The revolution you may be referring to - do you think that the firmware, which is to say the proprietary software that sits between the hardware and the system software that runs upon it - that proprietary firmware has been a real problem. I don't necessarily view it as a revolutionary in its own right, so much as it's bringing the open source revolution to your firmware. We know that open source -- open source is really, really, really, really important. And the older I get, the more I appreciate how deeply important it is. And it has changed everything that we do. You know, when I was coming up in the '90s, it's kind of the era of the death march, right? And there are all of these tales of -- you know, Showstoppers is a terrific one, about the development of Windows NT. And if you read the development of proprietary software in the '90s, it feels otherworldly. And the reason it feels otherworldly is because there was no sharing of software, really. Everything was proprietary. Everything had to be either built from scratch, or bought. And that really - it served as an incredible impediment to innovation.

Software projects being canceled because they ended up being so large, the scope would expand, they would have to be canceled... I mean, there are all these kind of knock-on effects. And we know that software has this incredible property that it endures, right? It's not a physical machine, it doesn't wear out. And when you get software right -- if the software works for me, I can share it with you for free. There's no cost of goods sold. It's information. I'm giving you the answer to the homework. It doesn't cost me anything. And that is remarkable, because then you can build upon it. And you can go solve a new problem, that you couldn't solve previously. And I think that, you know, when it's all \[unintelligible 00:38:54.00\] I think that the development of open source is going to be viewed as a Gutenberg-esque moment. That software alone was actually -- software alone is like the written word. Extraordinarily powerful. But you actually need the printing press to have that kind of broad impact, broad societal impact you need to the printing press. And open source is the printing press for software. Absent the printing press, the software's efficacy, software's benefits were limited. And it's not an accident.

Every single one of these companies that one might talk about is built on open source components; up, down, and all around. Our programming languages are all open source; our databases are open source. Our systems are open source. And yes, obviously people are doing their own proprietary software in there, but those open source components have proved essential. That revolution has not yet come to firmware.

\[39:53\] Now, I would say that's a side effect of what we're doing. What we actually are doing is building a unified hardware software system, a rack-scale machine, that represents the kind of machines the hyper-scalers built for themselves for those folks who wish to run on-prem.

And I think the other big belief is that Jeff Bezos is not going to own and operate every computer on the planet. So that's our other renegade belief, that we're not all going to be renting compute in perpetuity.

**Jerod Santo:** There you go. That sets you up in a nice David and Goliath type scenario. So you can have that mission to be Goliath. So I'm wondering, when you talk about an open source revolution, bringing that to firmware, bringing that to the metal - does RISC-V fit into this conversation at all?

**Bryan Cantrill:** Yeah, it's a great question. I would like it to. I think we would like it to. RISC-V - so there are some great elements of RISC-V. I do love the instruction set. The instruction set is very thoughtfully designed. And the fact that we can have open cores for RISC-V is great. So the fact that you can have your own Bluespec core, what have you, RISC-V core - that's great. The challenge with RISC-V is that -- and we've seen this happen again and again, where you have something that has good intentions, and then kind of the tentacles of the existing way of doing things spread into it. And RISC-V has developed pretty proprietary firmware, for all of its openness. Yes, the instruction set is open. The actual systems based on RISC-V have got a lot of proprietary elements. And indeed, they have recreated some of the most gallingly proprietary elements of x86.

So things like SMM - SMM is the System Management Mode. It is a mode that the processor enters when it wants to, and does whatever it wants. And if you are accustomed to writing the operating system - I do OS Kernel development - the idea that there is some hidden mode that you can't see, that gets to do whatever it wants in the machine... Well, that operates across purposes. I mean, that's a source of security vulnerabilities, that's a source of performance problems... And those kind of management modes should not exist. Those are antithetical to hardware/software co-design, because those modes -- what those modes are saying is that there is some software beneath the system software, that is unseen, that is actually controlling the computer. And it makes it very hard to build a unified system. We actually -- of all the things we're doing at Oxide, and we're doing our own compute slide based on AMD Milan, we're doing our own switch based on Intel Tofino, we're doing our own cable backplane, we're doing our own operating system on a service processor, we're doing it on Hypervisor... So we're doing all these very big, bold bets. Maybe the boldest is there is no AMI bias in our system. So am I American Megatrends Incorporated, which even the name drips from the '80s...

**Jerod Santo:** \[laughs\] It does.

**Bryan Cantrill:** This is a BIOS manufacturer from the 1980s that has somehow remained at the brainstem of server-side computing. And right now, x86 parts, be it Intel or AMD, have got AMI-authored code, proprietary AMI code that you can't see, change or operate, that is part of that machine bring-up, that platform enablement. And it's a huge problem. It's a huge problem, because it's -- I mean, first of all, it's just bad. I mean, it's just poorly written; it is at the very lowest layer of the stack. It has got no idea what's running above it, and so it will kind of hijack the machine to its own purposes. The BIOS, in cooperation with SMM, with other aspects of the computer, will kind of do what it wants, when it wants to. And that's not the way you build a reliable system. That is not the way you -- again, antithetical to this idea of unifying, of taking this hardware/software codesign approach.

\[43:57\] So we have no UEFI in this system. So UEFI is a -- one of my colleagues says it's like MS DOS circa 2099. UEFI was designed as a mechanism actually originally to boot Itanium, but it is designed... It's kind of like the worst of all worlds, in that it requires these kind of interdependencies across layers of the stack, but it doesn't actually empower anything... So it ends up being kind of the worst of all worlds. We have no UEFI in our system. We have no ACPI in our system. We do not need to have these layers that allow arbitrary other layers of software to run on top of them. We can actually design the whole system together. And then because our revenue model is based on hardware, because we're selling the whole system, we can make the entire thing open. I think this is where we do diverge from a company like Apple. I love so much of what Apple does, but the secrecy with which Apple engages itself I don't think it's necessary. I think Apple would be an even more relevant company if they were a proponent of open source software. And they're really not, I mean, they kind of have been, they've flirted with it at various times...

**Jerod Santo:** Yeah.

**Bryan Cantrill:** ...but they are not really an open company.

**Jerod Santo:** It's like there's little bubbles inside of Apple that are, but...

**Bryan Cantrill:** They're absolutely bubbles, and then the bubbles will kind of persist for a while, and then they'll be hit with a hammer... I mean, Apple is a company that routinely goes backwards on open source, where things were open and are no longer open. And that's always a bad sign.

**Jerod Santo:** Well, they're still working on that FaceTime open standard, you know? They're still getting that thing rolling.

**Bryan Cantrill:** Right.

**Jerod Santo:** Just like Steve Jobs said they would.

**Bryan Cantrill:** To me, that's frustrating, because it's like look, Apple, you sell devices; like, pretty expensive devices. You should be incentivized to get your software out. People should be able to see how these systems work, but it's just not the way -- they believe their secrecy is at the core of their success, and I think that the core of their success is so deep, namely hardware-software co-design, and so successful that even their ridiculous secrecy has been unable to kill it.

**Jerod Santo:** Right. There are aspects of which -- and maybe we're too far afield here, but there are aspects of Apple's strategy that I think have paid off, with regards not necessarily to secrecy, but to propriety, if that's how you say it... Which is specifically - I'm thinking of messages, iMessage. I think keeping that Apple-device-only has been a brilliant form of lock-in, which is not pro-consumer, but it's pro Apple. That has worked out quite well, and I don't think they would be as relevant as they are today if you could get Apple messages, iMessage format, across any device... A lot of people say that the only reason why they still use Apple is because of those stinkin' blue bubbles.

**Bryan Cantrill:** That's right. They certainly believe that. I'm not sure that's true or not, honestly. I'm not sure that is true or not... But they certainly believe that. I actually think that the products are pretty good, and I think that they actually don't need to lock people in. I think they can actually allow people to make a -- and people do, they choose to use their products, because they're good.

**Jerod Santo:** Yeah, they do.

**Bryan Cantrill:** And they're good because they have taken on the whole system. So I think there's a lot of reasons to believe that \[unintelligible 00:47:06.24\] a better artifact. So we have no AMI bias. We believe that these layers of system software that are serving to make the machine look like a personal computer are dated. But they require doing things that really have not been done before, in terms of system enablement.

I mean, a long way of getting back to kind of the RISC-V - so I'm optimistic of elements of RISC-V, but it needs to not go down some of these same paths... Because there's this idea, and we certainly saw this happen in ARM, in the ARM ecosystem, where it's like, "We need to have UEFI to be successful." And they're like, "No, no. Stop." The x86 is successful despite UEFI, not because of it. And you want to actually allow people to use RISC-V, ARM, what have you, as a building block for a larger system, which means it needs to be truly open, it needs to be well-documented, and allow it to be used as a real building block. And that's what RISC-V needs to do... And you know, some days they're doing it, and some days they aren't. But we don't have any RISC-V in our system yet. We definitely evaluated it for certain aspects, for the hardware we trust in particular... I think we probably will in the fullness of time, but right now it's all ARM for the embedded use cases, and x86 for the CPU.

**Gerhard Lazu:** \[48:25\] I really like my hardware. I like my iMac Pro, the one that I'm using to record this on... It's been many years, I love it. The new M1 Max - great machine. But I also appreciate very much my fanless AMD system... Completely fanless; not even the PSU has a fan. So I'm wondering, if I wanted to add an Oxide rack to my hardware, first of all, would I do it? And how would I go even about it?

**Bryan Cantrill:** Yeah, so -- I really want to let people down easy, because we've got such a demographic that is following \[unintelligible 00:48:58.08\] "I can't wait to buy an Oxide rack." I'm like, I don't know that you're going to be doing -- I mean, do you have 15 Kw in your house? If so, why? You know, this is really destined... \[laughter\] This is destined really for a data center. Now, I don't think there's any reason architecturally we couldn't make a much smaller rack, but that's not what we're focused on. What we're focused on is building a rack for a data center. Actually, it's funny - it's like, 15 Kw is our power budget for the rack, which is arguably the worst of all worlds, because for the hyper scalars that are like, "Ugh, 15 Kw feels very tight." They're accustomed to being at, you know, 20, 25, 30, 35, 40 Kw per rack. And you talk to the enterprise folks and they're like, "Um, 50 - okay, maybe..." You're like "We're mainly more like 10-12 Kw per rack." But our belief is that by actually designing the whole rack together, we can optimize power across that rack.

All of that said, it's not gonna be destined for a home lab, so I don't think the -- actually, in terms of the fans, we are certainly not fanless; we very much have fans. We went through a great deal of effort to make the fans -- it drives me nuts when you plug in a Dell or Supermicro server, and the first thing it does is those fans go full tilt. Have you ever been around like a fan going -- these are...

**Gerhard Lazu:** I have one... A 1U. \[laughs\]

**Jerod Santo:** Great. So you've got those little 1U screamers, and those are like 25,000 RPM drives, 20,000 RPM fans, and these are super, super-loud. So I always view that as so -- and maybe this is my inner Steve Jobs... It's just so inartful to have. So the geometry of our SLED is a little bit different. So they are higher, so they're 100 millimeters high, roughly 20U, which is a little more than a 2RU... So the fans were part of the reason that the geometry is different, and this is what Facebook had initially done with OCP. But we wanted to have larger fans. So we wanted to have 80 millimeter fans. Because when you have a larger fan, then you can go at lower RPMs; they're just much more efficient, much more power-efficient as well.

But the fans that we wanted, at 0% PWM, which like at its off setting is at 5000 RPM. And 5000 RPM is loud. So we worked with our partner... One of the things that we do at Oxide that is actually a little bit different than certainly I've done in previous lives - I don't really believe in dual sourcing everything; I want to put rings on fingers. So I want to find the right partner, and I want to go deep with that partner.

\[51:57\] And actually, ironically, this is a belief that we had which was somewhat iconoclastic... Jobs did not have a dissimilar belief; Jobs believed the same thing. So for us, Sanyo Denki is our fan partner; we work with Sanyo Denki to have a 0% PWM fan, that's a 2000 RPM. And that is great; like whisper-quiet. So we've done all these things to get -- so when the rack power's on, it's just gonna whisper.

So we get the first rack together to do our compliance testing... And \[unintelligible 00:52:22.00\] and I'm like, "What the hell is this?" I'm like, "Our firmware is wrong." \[unintelligible 00:52:25.17\] but it's super-short. And I'm like, "What the hell was that?" And when I realized, like, "Oh, \*bleep\* sake, it's the \*bleep\* rectifiers. So we've got a power shelf. So we've got a DC bus board on the back, we've got a single-power shelf that has rectifiers; the rectifiers have their own fans. It's like, the only firmware in this system we did not write is the firmware that sits on the rectifier, and that thing turns the fans on full tilt. It's like "Ah, man..." Unfortunately, it's very, very brief. It's nowhere near as bad as the Dell/Supermicro kind of experience... But it's just an example of how like you do want to -- and maybe it's a bit of an aesthetic example, but actually, I believe that it's going to be very interesting to watch how this thing does at full speed, because we're going to be able to run these fans... We do not need to run these fans at I think even 5000 RPM to move the air that we need to move to actually keep the system adequately Cool.

**Gerhard Lazu:** I have a very important question. What happens when you shout at an Oxide rack?

**Bryan Cantrill:** \[laughs\] Right. So that's a reference to a video that I shot at Brendan Gregg many years ago, when he and I worked together at Sun. And Brendan was -- we were trying to debug a latency outlier, that we thought might be due to... Well, actually, I have to back up a little bit. We were trying to figure out with another colleague of mine, Eric Schrock, why we had a JBOD (just a bunch of disks) with a single latency outlier that we could not figure out; and we were trying to debug it, and it's like, this thing is -- only this drive is behaving badly. And we're about to go to lunch, and we had this lab space that was next to the office... And Eric was like, "Let's go look at the machine before we go to lunch." And I remember thinking like "That is the dumbest idea. Like, why are you gonna look at the machine? It's like, is your hypothesis that there's like a raccoon in the data center?"

**Jerod Santo:** \[laughs\] An old-school bug...?

**Bryan Cantrill:** Look at the machine... Sure, why not.

**Gerhard Lazu:** Actual bug.

**Bryan Cantrill:** Right. So we go in there, and he pulls out the drive that is the problematic drive. And I just remember my breath feeling like it was taken away, because what we saw is that all four of the mounting screws in the bracket had worked their way out, and the screws were gone. And it was sitting there, vibing just on the connector. And this should have been one of those moments -- I mean, it was one of those moments where you're just like "Oh, the system is a lot more complicated than I realized." And oh wow, yeah, this is where, you know, in terms of the education of why software/hardware co-design matters. It's like, right, oh yeah, right, vibe really matters. And in trying to reproduce those vibe issues, Brendan and I were alone in the office during Christmas and New Year's, if I recall correctly (it was years ago) and Brendan was trying various things to reproduce this. So we wanted to talk about how we debugged it, and Brendan comes running in and says, "You've got to see this", and runs out. And Brendan is just like not a person that ran all that frequently... So Brendan's that standard person, like, if this person is running, I'm running in the same direction. Like, I don't even know what we're running about, but I'm not gonna take my chances.

**Jerod Santo:** Yeah. It's worth checking out.

**Bryan Cantrill:** \[55:50\] Right. And then he -- what he showed me was that he had figured out that he could scream at the drives and induce the latency outliers. And I remember thinking like...

**Jerod Santo:** Wow.

**Bryan Cantrill:** ..."Oh, we should video this." So he had a camera there, I videoed it... \[recording 00:56:05.15\] "Hi, I'm Brendan. We're here in the \[unintelligible 00:56:07.00\] Sorry for screaming, it's very loud in here with the air conditionings and servers all around me. We just made an interesting discovery, and we thought we'd show you straight away. What I'm going to do is not recommended; this is not supported, do not try this at home. AAARRRGGGHHHH!!!"

So me videoing him screaming at the drives is the second take. It's the second time I've ever seen it. You can kind of hear me laughing, because I'm still delighted by this. I put it up on what was then the very young YouTube. Again, I think this is in like Christmas 2008, if memory serves. So YouTube is only a couple years old... And I'm thinking like, "This'll be good. It'll get like a couple hundred views, whatever..." I haven't checked recently. It's definitely over a million.

**Gerhard Lazu:** 1.8.

**Bryan Cantrill:** Yeah, 1.8. So it's had quite a few views. My kids view my career as a failure, because you know, I could have been a YouTuber. I tried to explain to them that I'm a one-trick pony. And by the way, it was Brendan anyway. Brendan was the talent. I just held the button down.

**Gerhard Lazu:** You were the cameraman.

**Bryan Cantrill:** I was the cameraman, really. I did nothing, more or less. And what was funny is that that video became more viewed than any content Sun had ever generated. I definitely remember talking to some of the marketing folks, being like, "Yeah, we didn't really ask permission on that one. We just kind of did it." And they're like, "Yeah, you know, it's alright. We just wish you had said Sun Microsystems in there, at all." I'm like, "Did we forget to mention the name of the company? Oh sorry about that. Sorry, that's awkward."

**Jerod Santo:** \[unintelligible 00:57:45.14\]

**Bryan Cantrill:** But yeah, screaming at an Oxide rack is going to be less interesting, for a couple of reasons. One, it's all NVMe drives, we don't have any spindles in there. So it's all flash. I also would say that we have spent quite -- again, we are big believers in learning from the failures that came in front of us. There have been lots of mechanical failures actually, in server design. The mechanicals of server design require some care, and we've got just an absolutely aces mechanical team at a partner of ours, Benchmark Electronics. They have done a terrific job on the mechanicals, and screaming at this thing - I don't think it's going to do very much. I think we're in a mechanically pretty good shape.

**Gerhard Lazu:** One test that's definitely green. The tick is green. If there is such a thing, it passed it.

**Jerod Santo:** There you go.

**Bryan Cantrill:** Yeah, absolutely.

**Break:** \[58:36\]

**Jerod Santo:** So despite Gerhard having secured his spot in line, we think that probably an Oxide computer is not destined for his home lab. I mean, you'll probably sell him one, just because why not, it's a sale, right? But the target audience is not the enthusiast, hobbyist home lab guy like Gerhard. Who then is your ideal customer? And to that ideal customer, can you tell them why? I mean, I'm looking at it; it looks cool, right? You guys got the aesthetic down, the black and the green, and the "Oh, it's sexy!" But I'm also not a guy who's gonna be acquiring racks upon racks for some sort of server farm. So to that person, can you sell them on Oxide? Versus just going back to their Dell rep and saying, "Hey, give us a reorder of what we did last time."

**Bryan Cantrill:** Yeah, well, you should talk to some of those folks, because those folks are in excruciating pain, for a bunch of reasons. First of all, they are all generally cloud-aware. Sometimes people are like "Oh, I love that Oxide -- you're a contrarian cloud play." It's like, no, no, we are not anti-cloud. We are very, very pro-cloud. Elastic infrastructure is an incredibly important development, and we are very, very pro Elastic infrastructure, to be clear; very pro cloud computing. We just believe that you shouldn't have to rent all of it. We believe that you should be able to buy some of it, because when you're renting compute, the Moore's Law dividend is going to your service provider, not to you. And we believe that there are folks who got compute at a scale where it makes sense to own a computer, and own a rack of computers.

So the folks that we are targeting are folks that are already on-prem; they are on-prem for good reasons. Those reasons - they may be security, maybe they're latency... They're very often economic. AWS is expensive. The public cloud is expensive, especially when you're at a certain scale. And there's a certain scale you get to where actually the public cloud is debilitatingly expensive. I can't even contemplate the cloud of this workload. So those folks - they are cloud-aware, they're running their own hardware, and they are stuck on this personal computer that hasn't meaningfully moved in 20 years. And when they buy something from Dell, or from HP, or from Supermicro they then are responsible for putting the software on top of it. It's like, you're not running Dell \[unintelligible 01:03:52.17\] you're running Dell + VMware; you're running Dell, plus VMware, plus Cisco, plus software to manage the network. And plus your distributed storage system, whatever that is. And whenever anything goes wrong - well, you assembled this thing, so this is on you. And every vendor points at everyone else. And boy, I lived this; we were Dell customers.

\[01:04:19.09\] I just remember -- I mean, I told Dell a lot of things over the years. One of them is "Never tell me you've never heard of this problem before. I'm not interested. All that is telling me is that your most technical customers are leaving Dell", which is actually what's happening. And so when you are having a problem, it's like "Yeah, Dell was telling me I'm the only one seeing this." It's like no, Dell was trying to gaslight you into believing you're the only one seeing this, because Dell itself does not have the depth of competence to actually understand what's going on, on their systems. Because Dell - and Supermicro is taking it to an even greater extreme, of... There's this self fulfilling prophecy that this is commoditized garbage, so we're going to treat it as commoditize garbage. But it's actually really expensive. I mean, if you look at a racked-out Dell 2U server, it's expensive. And we haven't even got the software on there yet. We haven't gotten VMware, or OpenStack, or whatever you end up putting on this thing to manage it.

For Oxide, not only are we taking the fresh approach to hardware, but also software co-design. We are actually developing the Hypervisor, the control plane. What you get is an actual cloud in that rack. You hit API endpoints, you provision. You don't buy VMware to put it on this rack.

So for our target demographic, they have been grossly underserved. In fact, the existing infrastructure providers have denied they even exist. They're like, "Well, every on-prem use case is going to the public cloud." It's like, \*bleep\*. I mean, I know about the public cloud, I understand the public cloud. This workload needs to run on-prem for economic reasons. But this is not a legacy workload; this is not going anywhere. And to be told that you effectively don't exist, and then be more or less treated that way - it's pretty aggravating.

So you know, our target demographic is kind of worked up. They've kind of had enough. Actually, when we were doing due diligence for the initial VC investment, and having VCs talk to some of our first prospective customers... They're angry. So one of the feedback -- we got some feedback from some of the VCs, like "Your early customers - they're agitated." I'm like, "Yeah, they're pissed. They're pissed. They're definitely pissed. And don't try to tell them that they don't exist. That's a mistake." Because what they have seen is all of this innovation happening in all of these dimensions around them. And all of the innovation around Elastic Compute happening on the public cloud, and where they need to run it, they have been entirely deprived. So what they see in Oxide is oxygen. "Someone who understands what I'm trying --" And yes, I mean, the aesthetics are extraordinary, and the rack really is beautiful, I've gotta say. The rack - it is so good-looking; it is a really good-looking rack. But what we're doing is much deeper than that. It's much deeper than the aesthetics. It is a true first-principles approach that allows them to actually appreciate some of those advantages that folks have in the public cloud. And then they can go focus their energies on their business, and on building the software and supporting the software, supporting the developers that they need to go build a better product, build a better service.

And what we see is, you know, our target demographic is really started on those excellent enterprises, excellent Dell customers. The customers that we see on the horizon are those folks that are born in the cloud, and then wake up to a business that is actually not sustainable, because their margin is actually going to Amazon.

\[01:08:00.27\] And over the years, there have been many of these folks who have come up to the edge and like, "We're going to build our own data centers", and they're naive about how bad the market is, so they go in like, "I don't know, I'm gonna buy some Dell, or whatever." It's like, "Oh, God... Yeah, you're gonna learn just how awful it is." And they ended up vacillating; you know, going on-prem a little bit, but then staying on the cloud. And we believe that if you give those folks a real off-ramp where they can have the power of cloud computing, but with the economics of an on-prem data center, there's real demand for that on these cloud-born SaaS companies. So that's the future that we see.

**Gerhard Lazu:** I would really like open source developers to one day be end users of an Oxide rack, of an Oxide system, because I think there's a lot of power in the little person, that has seen it all, that is so pissed at their internet connection, that is so annoyed why the UniFi doesn't work with Miktrotik... I'm talking about myself...

**Bryan Cantrill:** Oh... Totally.

**Gerhard Lazu:** That has tried SuperMicros, and it's like, they're okay, but seriously, after 20 years it's still the same. If I buy a new one, it's exactly like the old one which I had. I think there's a lot to be said about where computers are going these days, especially the latest Apple ones... Everything system on a chip, you just replace the computer. There's no way you can replace a component. I mean, modularity seems to have gone out the window, and I think it's the wrong direction.

So I'm not removing my place from when I registered interest. I'm somewhere on your list, 2020. I think it was February or March.

**Bryan Cantrill:** \[laughs\] Yeah.

**Gerhard Lazu:** I'm very curious about the pricing, like ballpark; like, how many years do I have to save for one? Because I'm really, really determined to get it; even if it has to live in the garage, that's okay. We will find a solution, but...

**Bryan Cantrill:** It's gonna be a lot of allowance, I've gotta tell you. I mean, it's going to be price competitive, but not price competitive with the things that you're looking at, right? Again, you're looking at what is more or less a personal computer. And what we are really focusing at is an enterprise rack-scale machine. So the pricing certainly of our initial product I think is probably going to be prohibitive, unfortunately for you...

**Gerhard Lazu:** So where could I get one from, for example? Will there be a place where I can go and get a slice of this rack? Or what would that look like?

**Bryan Cantrill:** Yeah, I think it's interesting, because, first of all, I totally agree what you're saying about the -- there's a tremendous power in individuals, and their ability to contribute. I mean, honestly, the thing that I would do \[unintelligible 01:10:32.07\] So what I would do is, if one wants to start playing around with Oxide, start playing around with these little single-board computers. I think this is an F411. So this is an STM Micro. This thing will run Hubris, which is our service. So this is running our service processor; this is not something you're going to run your arbitrary cloud workloads on. But it is actually really fun. Hubris is our operating system that is our -- I mean, appropriately named, because we did our own operating system; a Rust-based operating system, a de novo Rust-based system... And these single-board computers are incredibly cheap. For 20 bucks you can get a computer that's more powerful than the desktop that I had when I came into the industry; much more powerful. You know, 400 megahertz part. My first desktop as a professional was 143 megahertz UltraSPARC. And the fact that we are able to to have these incredibly powerful single-board computers -relatively valuable; we view them as underpowered. They're these kind of embedded use cases. But I think it's a great way to start exploring Oxide, and start exploring some -- and we love the fact that it's all open source, it's all out there, and there's going to be some terrific mutations that are going to be fun, and allow people to explore and contribute not in a customer sense, but more in a community sense. So that I would say is probably going to be the vector, unless you inherit a datacenter, and truly more money than you know what to do with.

**Gerhard Lazu:** \[01:12:06.17\] I like my options. Thank you. \[laughter\]

**Bryan Cantrill:** There you go.

**Jerod Santo:** Well, let's open up the hubris and humility conversation a little bit. I'll have you go a little bit deeper. You say Hubris is the operating system. Well-named as you said... And easy to say, Gerhard; really easy to say, Hubris.

**Gerhard Lazu:** Hubris, yes.

**Bryan Cantrill:** \[laughs\] There you go.

**Gerhard Lazu:** I've been practicing.

**Jerod Santo:** Humility is the debugger, which is just also brilliantly named, as a pair. I love that kind of -- that goes back to your, I guess, humor value. Do you want to tell the folks exactly why you built your own OS? And maybe give hooks into -- you know, a lot of our listeners are developers, tinkerers, hobbyists, operating system folks, programming language enthusiasts... What could they potentially clone Hubris, the repo, and like, what could they do with it? Or what could they learn, or what could they help, etc?

**Bryan Cantrill:** Yeah, so there's a bunch of great resources out there, actually. First of all, I would steer anyone to my colleague, Cliff Biffle, who coined the term Hubris for the operating system. He gave a great talk at the Open Source Firmware Conference, that is really just superlative. Must listen, must watch talk, where he walks through why Hubris. Why did we do our own operating system? Why did we not -- and there are a bunch of reasons. And actually, it was fun to bring together some really different perspectives... Because Cliff had done a ton of embedded work, and a ton of Rust work, and had a real belief of what an embedded operating system should be. And it's funny, because coming from really the more host CPU side, kind of industrial operating system kernel side, some of Cliff's beliefs that are the most iconoclastic are ones that feel like they shouldn't be iconoclastic at all. So in particular, Hubris, and most embedded operating systems, do not use the memory protection unit that is present on most embedded microcontrollers. So they are effectively single-address space applications. And that to me is crazy, because as I mentioned, these CPUs are more powerful than the desktop computer that I had when I came into the industry in 1996. And the idea that you would take a computer that's that powerful, that can do many different things, that can have true multitasking, and that you would run without memory protection - I mean, talk about something that the children don't appreciate.

When we were coming up, if you're running DOS and you're running a game, or editing a file, it was not unusual for the machine to just reset.

**Jerod Santo:** Yeah.

**Bryan Cantrill:** And that is something that humanity has rightfully left behind, because we actually have memory protection. Now, when your web browser does something that it shouldn't, it's an "Oh, snap!" and you've maybe lost that session, or that program has crashed, but the rest of the computer is intact. And of course it should be. That hasn't been true on the embedded side. And part of the real design center around Hubris was we want a system that is micro-kernel-based, that uses memory protection, that is an all Rust-based system that really has Rust as a first-class citizen.

My first job in the industry was working for a micro-kernel company, QNX Software Systems out of Canada, that later bought and sold a bunch of different times, was digested by BlackBerry at one point, and I think Harman... They've been a bunch of places. But QNX is an amazing operating system, a micro-kernel-based operating system. I always felt that was the right abstraction for a large cross-section of problems. So it was really exciting to me when we -- and we did our own system because we were evaluating others and realizing that nothing was doing what we wanted it to do. And that's where the Hubris comes from.

\[01:15:57.27\] My contribution, such as it was, was -- you know, we talked about hardware and software co-design. I'm also a big believer in system debugger co-design, where you are developing the debugger as you're developing the system. And I have always found that that yields a much more robust system, and gives you a much better platform to develop that system quickly. So as Cliff was starting in on hubris, I was starting in on Humility, the debugger for Hubris. And that's been really fun. I think we've taken the -- because amazingly, this doesn't really happen in the embedded world. The kind of debugger system co-design does not really happen. \[unintelligible 01:16:37.09\] only ones doing it. Most people are stuck using GDB and OpenOCD when they go to debug these things. And that is just galling. So not only do you have a system that has these wild aspects of exposure, because you've got a single system that's got no memory protection; then you're going to debug it with these terrible, terrible tools. And it's like, are you really expecting your firmware not to have the results that it has? I mean, are you really wondering why your Bluetooth stack is rebooting, or why all your devices are fighting with one another? It's because they are all on these systems that are these terribly antiquated software systems being debugged with terribly antiquated software tools, and we're trying to get them to do something modern.

So I think Hubris is really important. I think that we're going to see a lot of use cases. Our use case is this embedded use case; rather the embedded use case in kind of a single-board computer, but I think that there's going to be many other use cases.

I shall say that the other beauty of Hubris is -- Hubris is not a general-purpose system in that it is designed for that deeply embedded use case. It's not designed to load a new application that it has never seen before. So a general-purpose operating system - I've got the ability to add a program that that operating system has never seen before, and it will run it. And that's great on your desktop, that's great on a server. You don't want that on an embedded system. So at build time, Hubris knows all of the tasks; that's statically known. And there are lots of things you can go do when you know all of the tasks that are ever going to run on the system. You don't need to dynamically allocate tasks \[unintelligible 01:18:14.24\]

So there's a lot that comes out of that... I think it's been a lot of fun. It's also been super-valuable for us. It's been unquestionably the right decision. And I think it's a good opportunity for folks to, you know, mess around, because that is -- we open sourced it when Cliff gave this talk at OSFC. It's already been used as a great blog entry by Artemis Everfree on running Hubris on a watch, a PineTime. It was fun. And there's a bunch of interesting stuff that's out there where people are starting to mess around and take it to different applications. We see a really broad use case for Hubris out in that embedded world.

**Gerhard Lazu:** I read a lot of blog posts. The one on Hubris and Humility, the one that you wrote, Bryan, is really, really good. I'm sure that good writing goes very well with a good software company, and there's so many things to that... But it's a good one to go especially for enthusiasts that want to try this out. You mentioned the ST Nucleo...

**Bryan Cantrill:** Yup.

**Gerhard Lazu:** ...the device that people can buy and try this thing out. Just to your point, as you were saying earlier, you can try it out you know; you don't have to wait for a rack to be shipped from Oxide, even if you do have a multimillion allowance... The point being - it's a great one to learn more about Hubris, Humidity... And just start exploring a bit more of the Oxide blog posts, because there's many good ones.

**Bryan Cantrill:** There's many good ones, and then our entire control plane is also open source, so \[unintelligible 01:19:42.11\] We've done a de novo Rust Hypervisor. We call it Propolis. We've got our own control plane, which we felt we had a great name for, Futurama reference, actually. Omicron. It's like, \*bleep\* we were Omicron before Omicron was Omicron.

**Jerod Santo:** Oh, that's hilarious. Now, I'm a Futurama fan...

**Bryan Cantrill:** Okay!

**Jerod Santo:** And yet, when Gerhard said "This project is named Omicron" I thought to myself, "That's a terrible name. They must have done it before the pandemic."

**Bryan Cantrill:** \[01:20:11.11\] Right! It's like, God, what -- are you gonna name a project polio next? I mean, that is strange and morbid.

**Jerod Santo:** I went straight to COVID. I did not go to Futurama in my head...

**Bryan Cantrill:** No, this is Lrrr from the Omicron Persei 7, right?

**Jerod Santo:** Yeah, totally. Now I know what you're talking about.

**Bryan Cantrill:** Right. We're big Lrrr fans. So yeah, Omicron was a Futurama reference, and now it's just like a big mess, I guess.

Hopefully, the -- I'm optimistic that the Omicron as a Futurama reference will outlive Omicron as a COVID reference in the cultural zeitgeist, but we'll see. We'll have to be patient on that one.

**Jerod Santo:** We'll see. It depends on how far that thing continues to spread, I guess, or how many variants are called Omicron. Because it was just the one variant, right? Or just the one that I heard about... Well, Bryan, we've taken up so much of your time. I'm sure, Gerhard, you have many more questions, but you're not going to be able to ask them today, because this show is just about over. Bryan, I will give you one chance to say whatever you'd like here, and then for Gerhard's follow-up we might have --

**Gerhard Lazu:** First of all, I have to rewatch all of Silicon Valley. So that's the first thing.

**Jerod Santo:** \[laughs\] So it could be a while...

**Gerhard Lazu:** I have to do that. And only then am I allowed to invite Bryan.

**Bryan Cantrill:** And take notes, alright?

**Gerhard Lazu:** I will, trust me. The show will be all about Silicon Valley, okay? \[laughs\]

**Bryan Cantrill:** \[unintelligible 01:21:22.18\] Yeah, if I had one thing to say, I think that one thing that has been neat that we've been doing for the last year and change or so - we've been doing a weekly Twitter Space, which has been a lot of fun. And I would encourage folks -- Oxide and Friends is a weekly Twitter Space, and that's been... I've always wanted to be in a book club, and I think we've kind of created it.

**Jerod Santo:** Oh, nice.

**Bryan Cantrill:** It ends up being kind of an accidental book club, to a degree. We've got a wide variety of topics there... And that's been really interesting. I mean, I love podcasting; these kinds of conversations are great. It's also really fun when -- Gerhard, just to your earlier point about opening it up to individuals... You know, when you open yourself up to the internet, you're like, "Oh my God, how much of 4chan is going to show up, versus the kind of delightful aspects of the internet?"

**Jerod Santo:** Right...

**Bryan Cantrill:** But you know what - net-net it has been really delightful, and net-net it's been so much fun to hear from people. New voices, folks we haven't heard from, hear their perspective, their ideas... And I love it, actually. It's kind of like this "podcasting meets the AM radio dial", the old-school a AM radio dial. It's a really interesting kind of mash-up that I really enjoyed.

**Jerod Santo:** So you all had a podcast, or have a podcast as well.

**Bryan Cantrill:** Yeah.

**Jerod Santo:** Now, has this Twitter Space kind of usurped the podcast?

**Bryan Cantrill:** It has kind of usurped it, yeah. I mean, I love the podcast, I love On The Metal, it's been great... But as you know, it's a lot of work, it's a lot of editing, there's a lot of pre-work... You end up with these things, you have these great conversations that you then have to kind of wait months to get out... And I think we really liked the Twitter Spaces for that kind of immediacy. We've been able to get a lot of the bang for much less of the buck, and then I think we've also been able to get these kind of new aspects to it. But I still love On The Metal. If you want to check out On The Metal - I love those conversations. It was so much fun.

**Jerod Santo:** So how do people follow the Twitter? Is it just follow you on Twitter, o is there a link to a Twitter Space that we could put in the show notes?

**Bryan Cantrill:** \[01:23:33.13\] Yeah, definitely if they follow me on Twitter, we link it out. It's every Monday at 5pm Pacific. You can follow me, you can follow @oxidecomputer on Twitter, you can also follow my co-host, Adam Leventhal; he's @ahl, which is not the American Hockey League... So Twitter was a customer of Sun's early, and Adam realized he wanted to get into it with his OG initials, so it's @ahl to follow him.

**Jerod Santo:** Nice.

**Bryan Cantrill:** And we would love to have -- again, we really enjoy having new voices on there. I think it's a great medium. As with many Twitter properties, you know, I am filled with both hope and disappointment. There's so much that could be done with it, that I hope that they do go with it.

**Jerod Santo:** Yeah... It might just disappear, who knows. I mean, they cloned Stories... They cloned Stories as a feature, and then they just said, "Nah, we're done with Stories."

**Bryan Cantrill:** "We're done with stories."

**Jerod Santo:** But at least they're actually changing the product at this point. There were years where Twitter was stagnant; there were zero changes to the product for probably like darn near a decade. So at least things are changing now. But yeah, you never know when Spaces just might fall out of the cool kids club and be gone.

**Bryan Cantrill:** I really hope not, because I think social audio is a really interesting milieu. I think it's a different kind of -- you know, it doesn't replace anything. I think it adds to what we're already doing. Again, I love podcasts, and will always listen to that, but I really love this aspect of getting people together for social audio. I think it's a lot of fun.

**Jerod Santo:** Well, we appreciate you getting together with us for this conversation. Listener, all the links to all the things are in your show notes. There's lots of cool references on this one, so definitely check those out. Of course, you can find all of Oxide's things in there as well, join the waitlist if you have a small fortune and are ready to spend it on loud, but sexy-looking computers...

**Bryan Cantrill:** Not loud, not loud. Only the power shelves, just for a moment. Then it's all whisper-quiet.

**Jerod Santo:** Okay, it's gonna blow you away for a moment, and then just disappear into nothingness, which is also nice. And Gerhard, thanks for sitting in for Adam. Thanks for, you know, faking like you had Silicon Valley--

**Gerhard Lazu:** It didn't work very well. That's okay, I've learned my lesson. I need to be myself, that's my take-away from this. Just be myself, seriously.

**Jerod Santo:** \[laughs\] Just be yourself.

**Bryan Cantrill:** That's a great take-away. That's a great take-away.

**Jerod Santo:** Well, you definitely brought the humor, which is one of Oxide's values, so you might fit in there as well. Alright, that's our show for this week, thanks for listening. We'll talk to you all next time.

**Outro**: \[01:25:59.14\]

**Gerhard Lazu:** I'm going to ask something that Adam would ask if he was here... Bryan, who do you identify with from Silicon Valley? Is there a character that you identify with?

**Bryan Cantrill:** Oh...!

**Gerhard Lazu:** Don't tell me too many. It has to be one.

**Jerod Santo:** \[laughs\] Just one.

**Bryan Cantrill:** Okay, so how do you want me to take it? So in terms of like the -- because if I would be critical of myself... I'm going to be my own critic.

**Jerod Santo:** Yes. Please do.

**Bryan Cantrill:** This is really -- I'm gonna expose myself here... \[laughter\]

**Jerod Santo:** Metaphorically.

**Bryan Cantrill:** Keenan Feldspar.

**Jerod Santo:** Do you watch the show, Gerhard, or...?

**Gerhard Lazu:** I did, all of it, but it was too long ago, and I forgot... \[laughter\]

**Jerod Santo:** You don't remember... \[laughs\]

**Bryan Cantrill:** Listen, if we're gonna roll, we've gotta roll. No, so Keenan Feldspar is a -- now he's a bit of a composite character, and he's got some Palmer Luckey in him. I definitely don't identify with that at all. But the thing about Palmer Luckey is that I actually do -- I mean "identify with" is maybe putting a bit too strong, but super-enthusiastic, optimistic guy, who puts together these teams that do these kind of extraordinary things. And to the crew at Pied Piper, it feels like he's constantly lucking into things. Everything is gonna work out in kind of the Palmer Luckey... And I have often imagined that if I were to criticize myself, I would criticize myself as being Palmer Luckey.

**Gerhard Lazu:** Great with faces, terrible with names.

**Jerod Santo:** I don't think he was in season one, was he?

**Gerhard Lazu:** Like, what's his face? Can you describe --

**Jerod Santo:** I've googled him, I've looked him up, I don't think he's in season one. I think I'm off the hook here.

**Bryan Cantrill:** No, it's Joel Osment playing Keenan Feldspar.

**Jerod Santo:** Oh, yeah.

**Bryan Cantrill:** And it's the Keenan Vortex, is that what they call it? Dinesh and Gilfoyle call it the Keenan Vortex.

**Gerhard Lazu:** Yes...

**Jerod Santo:** Adam, where are you? Adam? We need you. \[laughs\]

**Gerhard Lazu:** I need to find this--

**Jerod Santo:** Save us. \[laughter\]

**Bryan Cantrill:** Honestly, I wasn't gonna go here. I feel like you took me here, and then I'm like, I'm by myself. I'm the only one that's done the homework. You guys haven't done your homework.

**Gerhard Lazu:** No, no, no, no, I forget... So he's not Dinesh, he's not like the main characters. Who is he...? \[laughter\] I'm terrible with names, I really am. Great with faces.

**Bryan Cantrill:** Look, you were to open this one up... I mean--

**Jerod Santo:** This was your question, Gerhard.

**Bryan Cantrill:** You're asking me the question.

**Gerhard Lazu:** It's on me. It's on me, it's on me.

**Bryan Cantrill:** Like, what am I supposed to say, like Dinesh or Gilfoyle? Am I supposed to just be like Richard Hendricks now?

**Gerhard Lazu:** No, no, no. Whoever you want to. \[laughs\]

**Bryan Cantrill:** Okay.

**Gerhard Lazu:** Alright, let's go. Main characters...

**Bryan Cantrill:** You know, I have considered -- because the folks that are in... There are a lot of great character actors that are in HBO's Silicon Valley, and I wanted to have like... So you can get the actual Ron LaFlamme, who's the lawyer - you could have him like join an all-hands for like 3,000 bucks. \[unintelligible 01:31:28.05\] "And now our new general counsel, we'll have Ron LaFlamme in there..."

**Jerod Santo:** That's a kind of nice side-gig for them. You think they get the royalties, but now it's like a kind of IRL royalty, where people will just hire you to come to their party and basically be that character for you.

**Bryan Cantrill:** Yeah, that is the way that once you reach -- there's a certain critical mass of celebrity that once you have attained, you can effectively live off your own fat for the rest of your life by doing these kinds of things... Even if you're a C-list celebrity, you can go open a carwash for a couple hundred bucks, or whatever it is.

**Jerod Santo:** Yeah, totally. Well, that Cameo app has made it even easier now. They can actually just sit in their house and just hold up their phone and just say hi to people, or whatever it is, and charge 400-500 bucks a pop. You can do those 30 seconds, a couple hundred bucks... You know, why leave bed? Just live off the fat.

**Bryan Cantrill:** And I'd pay for it. I'd pay for it, and I would get these obscure Silicon Valley character actors, but neither of you two would appreciate it, honestly. I don't know.

**Jerod Santo:** No, I would be totally lost. Totally lost.

**Gerhard Lazu:** I would... Faces, please. Not names.

**Jerod Santo:** What would you want him to do? Hold up a picture of who he identifies with, Gerhard?

**Gerhard Lazu:** \[unintelligible 01:32:41.07\] It just shows you, great with faces... Well, maybe. We will see. Not very good with names, we already know that.

**Jerod Santo:** We will see.
