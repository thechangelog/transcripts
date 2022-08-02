**Mat Ryer:** Hello, and welcome to this very special live edition of Grafana's Big Tent, the podcast all about the people, community, tools and tech around observability. We're coming at you today live from Whistler, Canada, at the company all-hands in front of about 600 people, I think... So hello, everybody! I asked you to say hello... \[laughter\]

Okay, so today I'm joined by my usual co-hosts. It's only Matt Toback... Hello, Matt.

**Matt Toback:** Hello, Mat.

**Mat Ryer:** Matt, what's your favorite thing? \[laughter\]

**Matt Toback:** I'm glad we rehearsed it.

**Mat Ryer:** Oh, yes...

**Matt Toback:** You've gotta tell me these things... Yeah, today my favorite thing... It's coffee.

**Mat Ryer:** Okay, thank you. And also, we're joined by Tom Wilkie. Hello, Tom.

**Tom Wilkie:** Hello, Mat. How are you?

**Mat Ryer:** How are you enjoying Whistler so far?

**Tom Wilkie:** I asked you a question first.

**Mat Ryer:** I'm fine, thank you. How are you enjoying Whistler so far? \[laughter\]

**Tom Wilkie:** Very well, very well. I got stuck in the less good hotel, though...

**Mat Ryer:** Aww...

**Matt Toback:** Which one's that?

**Tom Wilkie:** The Hilton. But it's still good. It's comfortable and clean.

**Matt Toback:** I thought you were gonna say The Four Seasons.

**Tom Wilkie:** Okay, that would have been funny.

**Mat Ryer:** It's not Four Seasons Total Landscaping, is it? \[laughter\] So we're joined today by the founders of Grafana Labs, and this is a real, raw AMA, ask me anything, and it's gonna be your real questions. We're gonna hear from lots of you and gets lots of voices on there... But let's meet those founders again, shall we? Torkel, maybe you could introduce yourself.

**Torkel Ödegaard:** Yeah, my name is Torkel Ödegaard, I'm one of the co-founders in Grafana. It started as a little open source project of mine that I had no idea was gonna turn into this.

**Mat Ryer:** Who knew...? Yeah, amazing.

**Raj Dutt:** I'm Raj Dutt, I'm one of the co-founders and CEO. Really great to be here, Mat. I've been a huge fan of your podcast. You clearly have a voice for radio.

**Mat Ryer:** Very kind.

**Matt Toback:** Have you listened to the podcast?

**Raj Dutt:** I have. Like I said, Mat has a voice for radio, and I had the pleasure of meeting Mat for the first time yesterday. And Mat, you also have a face for radio. \[laughter\]

**Matt Toback:** You get your questions... \[laughter\]

**Mat Ryer:** Of all the options to make fun of, \[unintelligible 00:03:02.28\] my appearance? Hello?!

**Tom Wilkie:** I like the -- the hand signals work really well on an audio podcast.

**Mat Ryer:** Oh yeah, I pointed to Tom. Good point, yeah; it's a podcast, isn't it?

**Raj Dutt:** That was a good point.

**Mat Ryer:** Yeah, thank you. Do you know what is gold, it's absolute gold? \[unintelligible 00:03:19.16\]

**Anthony Woods:** Yeah, thanks guys. So I'm Anthony Woods, the CTO, and obviously co-founder. It's very exciting to be here. It's just amazing seeing so many people... We never dream we'd get here. And again, I apologize for my voice. I'll try and be quiet now.

**Tom Wilkie:** We actually have most of the questions for you though, Anthony, so... Just bear in there, there's another 90 to two hours recording.

**Anthony Woods:** That's alright, I'll just use a thumbs up or a thumbs down to--

**Tom Wilkie:** Again, great on a podcast. \[laughter\]

**Mat Ryer:** Right then. So, should we dive into the first question?

**Matt Toback:** Let's do it. And also, everyone, start thinking of yours.

**Tom Wilkie:** Yeah, we're gonna come to you very, very soon. So the first question - and this is for all of you... How does it feel, guys?

**Raj Dutt:** \[00:04:04.24\] Overwhelming. I mean, seriously... I think intellectually everyone knows that we've grown a lot as a company, and it just feels both long overdue and overwhelming, and just generally awesome to be here and meet everyone who's helped us get to this point.

On a personal level, I was in a hotel room in Singapore for two years, and during those two years the company grew so much. We raised hundreds of millions of dollars, we hired hundreds of people, we launched lots of products, we acquired companies, we got new investors, we got new board members, without meeting a single person. And that was really frustrating, you know? Ordering a bottle of champagne to celebrate a series D to my room, and to drink it by myself at 9 o'clock in the morning was... \[laughter\] Not so cool. So to answer your question, this feels (pardon my French) f\*\*\*\*\*g awesome. \[applause\]

**Tom Wilkie:** And Torkel, wildest expectations - did you ever think you'd have this many users, this many employees, this many GitHub stars?

**Torkel Ödegaard:** No, not in my wildest dreams. It's incredible. I had no vision at all that Grafana was gonna be something -- it's just an open source project, maybe we'll use it in my team at the time. It's really incredible. And I'm really proud as well that we rebranded the company. The company is so much bigger than Grafana today. We have so many other products. But that the company is named after it also means a lot to me. It makes me immensely proud that we have built all this together... But it has my name, or the name that I came up with. \[laughter\]

**Tom Wilkie:** About the name... Why have we got the f? Why is it not a ph?

**Torkel Ödegaard:** That's how you spell graph in Swedish.

**Tom Wilkie:** Okay. We probably should have known that.

**Matt Toback:** We had ten minutes slated for that answer. \[laughter\]

**Mat Ryer:** Is that just how Swedish works? It's just some of the letters are different? That'd be really easy and convenient if that were true.

**Matt Toback:** So do you spell phone "fone"?

**Torkel Ödegaard:** No... Well, yeah... \[laughter\] No.

**Mat Ryer:** Oh, okay.

**Tom Wilkie:** Anthony. \[unintelligible 00:06:21.04\]

**Anthony Woods:** Yeah, so this is just wild. When I talked to Raj about doing this, there was no way we felt we'd ever get to this stage. This just is unbelievable, and it's been such a great journey. But as Raj said, it's been tough over the last few years. I just remember Zoom calls where we were signing term sheets and we're like "Yay! Now back to work. Thanks..."

**Tom Wilkie:** And you've been trapped in Western Australia.

**Anthony Woods:** I have, yeah.

**Matt Toback:** For most of your life actually, right? \[laughter\]

**Anthony Woods:** I mean, you know, it's Australia. It's a penal colony. I'm just imprisoned there. But it's been frustrating not being able to travel. I'm so excited to be here now. This is my first trip in 2,5 years, and now I have trips planned for every month for the rest of the year, which is good. Well, I think it's good now; we'll see how long that lasts.

But it's so great to be here, seeing everybody in-person... It really is just mind-blowing. I was just overwhelmed last night seeing people out there having drinks, and just the fact that we filled the room... It was just confusing, I didn't understand how just our company could fill such a space.

**Tom Wilkie:** But serious question... Are the pubs still shut on Sundays? Because when I came and visited you, it was impossible to get a beer on a Sunday.

**Anthony Woods:** No, they're open, but they close at 10 PM every day of the week, which is really irritating...

**Tom Wilkie:** What...!?

**Anthony Woods:** Especially when you work at night.

**Tom Wilkie:** And you've been stuck there for two years...

**Anthony Woods:** I know, I know...

**Mat Ryer:** Have you been drinking a lot at home? \[laughter\] We can edit that out, it's fine. It is "Ask me anything." Although I didn't expect Tom to ask him about pub opening times.

**Tom Wilkie:** You've been on the podcast before, Mat, right?

**Mat Ryer:** Yeah.

**Matt Toback:** \[00:08:04.10\] Do we have anyone that wants to raise a hand and we'll get a runner over there?

**Tom Wilkie:** Yeah, we've got one over in the back.

**Matt Toback:** Alright.

**Audience Member:** Hey. So we were talking about all these acquisitions, and results, and stuff, and I'd love to hear if you've ever had a massive disagreement and fight, and not been able to talk to each other maybe, and said some words to each other during this...

**Raj Dutt:** I think we've definitely had disagreements... We've definitely gotten annoyed at each other. I think Anthony's gotten definitely annoyed at me; Anthony's wife has gotten very annoyed at me... \[laughter\] But we're just trying to work things out. I think we have an unwritten rule that we'll try to talk stuff through...

**Anthony Woods:** I agree, I don't think we've ever had any major issues. And often, just talking things through. We always get to a conclusion. We just keep talking it through until we make it clear. I certainly feel like if you're having a disagreement with someone and you can't convince them of your idea, then it probably means it's not a good idea.

**Torkel Ödegaard:** Yeah. I was talking about a similar topic with Mat the other day... The fact that we haven't had actually any major fights, or major issue, really. And I think it stems from what we've talked about earlier with the manifesto; we have this base of trust, and we know we all have good intentions, and if anything, it's just misunderstandings and we just need to talk it through.

**Anthony Woods:** Being remote I think really makes a big difference, because we don't get this situation where you're in somebody's face and you can't avoid it. We can always take time to be thoughtful about what it is we wanna say, what we wanna present, and then go and talk to the person. It makes it much easier, where you don't get in this situation where someone's coming at you and in the moment \[unintelligible 00:09:51.16\] I think being a remote company has really been an advantage for us.

**Mat Ryer:** That's really interesting, because you can see that in the company. Today is actually my one year at Grafana anniversary...

**Anthony Woods:** Congratulations! \[applause\]

**Mat Ryer:** Thank you! And you really get that sense, that foundation that you have, that relationship that you have there. That is what I noticed that was kind of spread throughout the company when I joined. It's that attitude of like being authentic, trusting each other, all these things we talk about. But you see it in reality.

**Tom Wilkie:** I think your remote-first point also really resonates with me. I mean, I've rage-quit most companies I've worked for... \[laughter\] And I really do feel that's like -- you have a disagreement, you go and sit back at your desk and you're kind of fuming, but the remote-first way... You know, you go out for a walk, you go and watch some YouTube, you go and do some cooking, or whatever it is. You calm down and realize "Okay, the other person means well. They want the same thing you do, you've just gotta get there."

**Matt Toback:** What's the day after a rage-quit feel like?

**Tom Wilkie:** It's good. \[laughter\]

**Matt Toback:** Is it good?

**Tom Wilkie:** Yeah. It's usually in a pub until 10 PM. \[laughter\]

**Matt Toback:** Yeah, "Go home, everyone."

**Mat Ryer:** Okay, have we got any other questions? Let's see your hands... We'll go over to this side of the room now. Okay, say your name first, please, if you don't mind.

**Audience Member:** Hey. I'm Jenn Via. So all three of you are from different countries and different cultures... I'm curious if you've learned anything fun or interesting about each other's cultures in your time working together.

**Matt Toback:** Phone starts with an f... \[laughter\]

**Raj Dutt:** Yup. I think Americans are generally more optimistic than Europeans. \[laughter\]

**Tom Wilkie:** I think this question was more focused --

**Anthony Woods:** I think Europeans are more honest... \[laughter\]

**Torkel Ödegaard:** To take more time off?

**Raj Dutt:** Yeah... \[laughter\] I think the Europeans know how to have better work-life balance, which was definitely a point of discussion several years ago when we decided to align on 30 days global vacation across the whole company... Which made Sweden go "Oh, whatever" and made the U.S. go "Wow, that's pretty cool!" So you know... \[laughter\]

**Anthony Woods:** Do you remember right at the beginning, the first summer, Torkel was like "Oh, and I'm gonna be on vacation in July." And I was like "Oh, when?" He's like "July." \[laughter\] "And a little bit of June, and the first bit of August."

**Mat Ryer:** \[00:12:15.17\] Good question. Thanks, Jenn. Okay, what about over on this side? Anyone? And if you asked one on GitHub as well, we want you to ask it in-person too, please. That'd be great.

**Audience Member:** Hey. My name is \[unintelligible 00:12:25.12\] I was just curious what you guys think the most impactful technology of the 2010s was.

**Tom Wilkie:** I mean, other than Grafana? \[laughter\]

**Raj Dutt:** I don't know...

**Torkel Ödegaard:** The smartphone, probably...?

**Matt Toback:** Probably the iPhone, right?

**Torkel Ödegaard:** Yeah, it must be...

**Tom Wilkie:** Kubernetes?

**Anthony Woods:** Yeah, I would say Kubernetes really has changed how products are built, how software is deployed...

**Tom Wilkie:** Raj, you don't agree.

**Raj Dutt:** No, Kubernetes is cool, for sure. \[laughter\]

**Mat Ryer:** Get that on a T-shirt...

**Raj Dutt:** You know, tech is like fashion, right? But I think I'd go with the smartphone, honestly. I just think when you look at the global impact of a technology... Same question I asked my dad a few years ago. I said "Dad, in your life, what piece of technology are you most amazed at?" and it wasn't even a question for him. But for us, maybe Kubernetes. And I know, Tom, you really like Kubernetes, so...

**Tom Wilkie:** I mean, love/hate.

**Torkel Ödegaard:** I think a technology shift that impacted what we do is the rise of cloud services and more complex software, that we wanna change multiple times a day. That's kind of what brought me into this space, was the shift to microservices and to wanting to deploy every day, and wanting to know what the hell was going on in production.

**Tom Wilkie:** I mean, that's a really interesting question, actually. You wrote Grafana when you were at the Swedish eBay.

**Torkel Ödegaard:** Yeah.

**Tom Wilkie:** And why did you need Grafana?

**Torkel Ödegaard:** Well, we had a pretty complex production environment, sort of microservice-esque, but we had really poor insight into what was going on, what the behavior was like, what the message rates were on the queues, and what the users were doing, as well. When someone from the ops team showed me Graphite, and that you can get these almost real-time graphs, and you just had to add one line in your code to get those graphs - I was sold.

**Tom Wilkie:** I think I'm showing my ignorance here... What did you use to visualize Graphite before Grafana came along?

**Torkel Ödegaard:** The default Graphite --

**Tom Wilkie:** Has it got a built-in --

**Torkel Ödegaard:** Yeah, you get PNG images in a black dashboard.

**Tom Wilkie:** Oh, nice.

**Torkel Ödegaard:** The graphs were great and powerful, but you couldn't interact with them, you couldn't zoom in on them, and it was really hard to build these dashboards as well through the \[unintelligible 00:15:00.05\] UI. So I struggled getting other people on the team to -- I started instrumenting all our services so we could build these dashboards, and it was super-valuable. People saw the value, but they couldn't bother learning how to build the dashboards or the query language... But it was so empowering when we started doing this to just -- yeah, you have an outage, and to say exactly how many bits that we lost, if we could compare it to the previous day, or... So when I got the whole site down on a Christmas break, I could tell the boss, "Yeah, this is how much we lost." \[laughter\]

But it was also just seeing -- when we started using Grafana, every team started using it. We were five developer teams, and it just quickly took over, and every team started using it. And during our weekly Friday all-hands, every team started using Grafana as a way to show the impact of what they've been working on.

**Tom Wilkie:** I mean, you must have known you were on to something if it spread so quickly...

**Torkel Ödegaard:** Yeah, it was very quick. I think three months after or something like that I released the open source project, I sort of handed my resignation.

**Mat Ryer:** \[00:16:13.28\] Wow.

**Matt Toback:** Did you rage-quit? \[laughter\]

**Torkel Ödegaard:** No...

**Tom Wilkie:** So let's get another question. I think we had a question down here at the front, if someone with a mic could run...

**Mat Ryer:** \[unintelligible 00:16:21.29\] But also, Torkel, what you've just said - it was a UX thing, really... Because Graphite had graphs, it just didn't have a good user experience. So that shows you really the power and importance of user experience, and of dogfooding and solving your own problems. I think there's great lessons there. And again, you see that throughout the company still.

**Audience Member:** \[unintelligible 00:16:42.25\] When I've joined the company, sometimes I've been brought in on projects and I'm like "How the heck do I even do this?" \[laughter\] And it's true to what I remember Dave \[unintelligible 00:16:55.18\] saying, where we're building and flying at the same time. So as all of you are building and flying Grafana, and creating, how did you guys navigate ambiguity?

**Raj Dutt:** With great difficulty, and kind of unsuccessfully... \[laughter\] Personally speaking, I actually enjoy being in a state of ambiguity, without a lot of process, and building things as we go... So that's always been something that I've enjoyed in previous startups. But the challenge is combining that with scaling things, and removing the ambiguity when you need to.

But I think we've just iterated. We've zigged and zagged as we've gone. We've been willing to do things that have failed, and just been like "Oh well, that taught us something." So we haven't been afraid of the ambiguity, we've kind of embraced it.

**Tom Wilkie:** I mean, part of the company culture... Perfect is the enemy of good, right? We really do prioritize shipping something before shipping the perfect thing. So that really helps in these situations. And I really love the hackathon. Our last podcast episode was with Ash and Ryan on the hackathon, and just showing what people can achieve in a week is so inspiring. It really helps solidify a lot of the ideas.

**Anthony Woods:** I'm a big believer... So when there's ambiguity, if you've got two choices and you're not sure which one is better, if it's not clear - it doesn't matter, just pick one.

**Tom Wilkie:** Yeah.

**Raj Dutt:** That's a really good point. Speed can be a weapon in terms of decision-making. And I think as we scale, obviously, decisions are slower and slower, for good reason. And what Anthony just said, in terms of, you know, pick one. Maybe try quick experiments on both. Do something. Perfection is the enemy of progress, like you said.

**Tom Wilkie:** Thank you, good question. Another question from the audience. Someone over here, maybe. Lovely. Yeah, go for it.

**Audience Member:** Hey all. What keeps you motivated in your day-to-day tasks? I'm looking for some inspiration... An inspirational answer. \[laughter\]

**Torkel Ödegaard:** For me, it's kind of simple; I see so much issues with Grafana, I see so many warts of usability, and things that have been there for ages, but are not intuitive, or areas where I think Grafana can be better still, and constantly trying to push that barrier of ease of use for existing users and new users.

Also, there are areas where Grafana can innovate. Where we have still unsolved -- especially on the dashboarding side. It's been the way it is for so many years. I think there's still a lot to explore, and improve, and rethink.

**Raj Dutt:** \[unintelligible 00:19:48.18\] my last company we were selling hosting, and data center services, and cloud services, and we watched how open source completely commoditized the whole infrastructure space. And we saw that, we were a part of that, but we kind of got swept away in that.

\[00:20:11.01\] And one of the things that motivates me about Grafana Labs is we think that that same commoditization within observability is happening. Open source is gonna win in observability... But instead of getting swept up in that, we have the opportunity to be on the tip of the spear on that, on the crest of the wave on that. Literally, making that happen. We have the opportunity to literally be the dominant company that changes the entire industry as it moves in the same way as the infrastructure industry, as open source and open standards take over. And that's really exciting, for one.

And for me, the other thing is just seeing people scale... Like, regardless of what happens in the future - I hope it's positive, whether it's a long-term, dominant company in the future, or an IPO, an acquisition, who knows - I really hope that the relationships that we all build for the people here and the people that are gonna join us are gonna continue on to our next thing, and wherever we go. That's something that's been personally a big part of who I am. I mean, that's why this guys is here, that's why so many of the ex Voxel crew are investors in this company, and that's what really motivates me. Regardless of what we do together, I hope that everyone here kind of has that, because that's so powerful. And of course, money, but that's the third. Honestly, the first two are what really gets me out of bed every day.

**Anthony Woods:** The thing that motivates me and gets me really excited is -- you know, I look around and we've done a lot of great things, but I also see so many areas of opportunity for us to do better, and it's always great kind of being reflective and being like "Look, I can't believe we got here given that we haven't done X or Y." And it's like, "Well, that's good. Now if we do that, look at how much better we could be." There's a lot of areas that we can continue to work on and improve, and I like knowing that.

Because if we got into a situation where we tried everything and it wasn't working, then that's a problem. But we've got so much opportunity to keep growing, to keep doing new things. There's no end; we don't know where this will end, there's so much we can just keep on doing.

**Mat Ryer:** They were really inspirational. Was that inspirational? By the way, you can't put acceptance criteria on questions... \[laughter\] "Oh, make it inspirational, please." "Can I ask a question, and can you do it in a British accent, please?" \[laughter\] What's going on...? Okay, let's have another question then.

**Tom Wilkie:** Marko, down at the front.

**Audience Member:** Hi, I'm Marko.

**Mat Ryer:** Hello, Marko.

**Audience Member:** What's the next big thing you foresee in the observability space? \[In a British accent!\] \[laughter\]

**Raj Dutt:** Well, I mean, you've got platforms that are kind of expanding, right...? \[laughter\] \[unintelligible 00:22:44.13\] I didn't notice it, so yeah. I mean -- oh, I'm gonna stop the British accent. \[laughter\]

**Mat Ryer:** I will, too.

**Raj Dutt:** Okay. Thanks. \[laughter\] The interesting thing to me that's -- there's so many ways to answer this question, but one interesting thing to me is sort of how the definition of observability is widening, in some ways... And you see this happening across the industry, it's not just us... Everything we're doing, like whatever you wanna call it, shift-left, shift-right, shift-up, shift-down, earlier in the software development lifecycle, later in the software development lifecycle... Observability isn't necessarily its own thing, it's just part of a continuum of how we build and run software. And I think that some of the moves that we've made, some of our upcoming strategies around stuff that Tom, Rob and others are talking about and defining, things like Grafana Ops, things like our new APM strategy... It's just an exciting time to be in observability.

**Torkel Ödegaard:** \[00:23:54.29\] One trend that I could see coming is increasing standardization of development platforms, application platforms, where we can have -- the observability experiences are gonna be so much more pre-made, out-of-the-box, because you're using some standardized application development frameworks, where all the metrics are already in place, and the experience in Grafana is gonna be already made for you. I can see that -- I'm \[unintelligible 00:24:18.06\] more manually built dashboards if you use more standardized development platforms.

**Mat Ryer:** Very cool. We have another question in the back from Dia. Oh, no, sorry, we're going into the middle first. Who's got a mic? Middle, there we go.

**Audience Member:** \[unintelligible 00:24:35.22\] part of the marketing team. I have a question related to the manifesto earlier... One of the key pieces in there that stood out to me was we wanna be really successful, but with our souls intact. I'd love to unpack that more; why is that important? Tell us more about how we plan to actually -- \[unintelligible 00:24:56.26\] why is that important to you? It sounds like there's a story there.

**Raj Dutt:** There is definitely a story there. I've been at companies and I've seen companies that make money, but the people who went through that experience - they went through an experience where they've made some money together, but it was a really frustrating experience. They screwed over their customers, they screwed over each other, they ended up hating each other... Classic story. We don't have this today at Grafana Labs, and when I say "souls intact", that's what I mean; that we won't ever have this.

But look at most companies in tech. The sales team hates the engineering team. The sales team is gonna say "Why can't the engineering team make products we can sell?" The engineering team hates the sales team. The engineering team will say "Man, those --"

**Tom Wilkie:** This is not Grafana Labs, right?

**Raj Dutt:** This is not Grafana Labs. \[laughter\]

**Tom Wilkie:** Just to be clear.

**Matt Toback:** Alright, the sales people - stand up. \[laughter\]

**Raj Dutt:** This is other companies. The engineering team will be like, "You know, the sales team - what did they promise the customer? What did they lie about?" That's kind of normal(ish), and we don't have that. So when I say "souls intact", I really wanna make sure that we're in this together, we are building relationships that are gonna last beyond this company on our next things; whatever our personal journeys are - that's really important. That's part of "soul intact." We are doing really good things for our customers, solving real problems, providing real value, not screwing them over. Not saying like "Well, the contract said this." Let's do the right thing for them long-term. That's souls intact.

And of course, we wanna make money, too. But I have no interest in pushing another 10% of growth if it means losing our souls. So that's the kind of company we are. \[applause\]

**Matt Toback:** What if it was like 15%? \[laughter\]

**Tom Wilkie:** Shall we go -- Rich, at the front, I think...

**Audience Member:** Yes. So other than the obvious numbers and such, what is the biggest or the most unexpected change between what you thought would the company be now, and it actually is.

**Raj Dutt:** Everything. We were wrong on so many things. The question that was asked earlier about ambiguity - every single assumption that we had about the company has basically been incorrect, and we've had to pivot. We thought we'd be a cloud-only company when we started. That was our original idea, cloud-only. That didn't happen.

We thought we would go after a whole bunch of small customers before we even started going after larger customers. That didn't happen. I mean, wow. There's so many fundamental things. We thought we would be Apache forever. That didn't happen.

So a whole bunch of assumptions about the company turned out to be completely incorrect. And like I said, we've zigged and zagged, we've evolved, but we've never held firm to preconceived assumptions.

**Tom Wilkie:** I mean, we used to have offices.

**Raj Dutt:** Yeah, we used to have offices. We used to be a remote-friendly company, rather than a remote-first company. Even though we started as a remote-first company.

**Matt Toback:** \[00:28:02.20\] Do you remember any hesitation on -- like when you knew it was wrong, but you still wanted to push... And finally that moment when you go "Oh no, I'm fighting against the stream, going the wrong direction." Has anything come to mind, where you're like "We're gonna do this, we're gonna do this. Oh, no, maybe that's a good idea."

**Anthony Woods:** I think for us the Graphite versus Prometheus - I think that was like... We really invested in Graphite; we thought "Hey, this is great." And I think one of the reasons we did is because of the usability, the user experience. It was so much easier to build dashboards in Grafana, with Graphite, because it was just point and click. Prometheus is "Wait, I need to learn PromQL." But we could see what was happening, and we could see how popular Prometheus was getting; we knew we had to make a change.

**Raj Dutt:** Yeah, that's a really good point. And I think it would have been relatively easy for us to say "Oh, we'll see how that develops." Because the Graphite hosted metrics product was doing reasonably well. And the work that \[unintelligible 00:29:00.02\] who was up here earlier, on metric tech was fantastic. That was a really good TSDB platform. And yeah, that's a good point, we kind of decided to go out on a ledge there, and it worked out, so...

**Matt Toback:** Yeah, thank you. So who's got the mic?

**Audience Member:** Hello. I have a mic back here.

**Mat Ryer:** Hello.

**Audience Member:** Hi, my name is Sheldon. I have a quick question that kind of feeds off of what Raj was just talking about. Earlier today we were kind of laughing at how you were super-excited for having ten employees, and now here today we have 800, give or take... So what is your collective dream of GrafanaFest 2023 people-wise? 2032? How do you see the company going?

**Raj Dutt:** So was your question a very slick and savvy way of getting me to confirm that there will be a GrafanaFest 2023? \[laughter\] We'll have to discuss that with Inferno, our CFO, who's \[unintelligible 00:29:54.29\]

**Audience Member:** Why are you excited about GrafanaFest in Bahamas, 2023? \[laughter\]

**Raj Dutt:** I mean, our plan, our model for the next few years is kind of coagulating in set. We're gonna be 1,100 people by the end of this year, hopefully(ish). We're gonna be encroaching on close to 2,000 people by the end of the following year... But I don't think that the metric for success is kind of the size of the team. Generally speaking, we wanna do really good things, with as few people as possible. The goal isn't to grow our headcount. That's not a measure of success. I wanna make sure that we have really good people, and few people who are really productive.

GrafanaFest '23, '24 - TBD, but I'd say that the headcount levels isn't something that in and of itself excites me.

**Matt Toback:** Oh. Actually, I'll ask a question... So this is like a big payoff for being in a hotel room alone in Singapore for two years... But what do you think should happen between now and GrafanaFest 2024 for teams individually? Because it can't always just be this "Oh, we'll get together in one room." It should be, but what should happen in between to maintain that sense of connection around being remote-first?

**Raj Dutt:** Yeah, I think that's really important, obviously, and what we did pre-pandemic, I think we're on the right track. What do you guys think?

**Anthony Woods:** Yeah, I think that's so important, for teams to come together. We're seeing it time and again; you've got a team that have been working well together, but as soon as they meet up in-person, get to know each other on a personal level, as a real person - it makes it so much easier to communicate and get things done during the day. It's something we really wanna continue; it's really important.

We've always been a remote-first company; that has its advantages. We don't have to pay for office space... But we've always understood that that means that we need to invest more in travel and getting people to meet up.

**Mat Ryer:** \[00:31:58.01\] By the way, up here, for some reason, it smells like new floppy disks, doesn't it?

**Tom Wilkie:** New floppy what?

**Mat Ryer:** New floppy disks. \[laughter\] Remember floppy disks? Doesn't it, Torkel? Can you smell it?

**Torkel Ödegaard:** What?!

**Mat Ryer:** There's a smell coming from the \[unintelligible 00:32:09.06\] \[laughter\]

**Tom Wilkie:** Mat, Mat, are you okay?

**Mat Ryer:** Yeah, no -- it's nostalgic, I'm just saying.

**Tom Wilkie:** Are you having a stroke? Can someone just quickly google if that's a sign of something? \[laughter\]

**Raj Dutt:** Do you also have a sudden metallic taste in your mouth? \[laughter\] It's the disk.

**Tom Wilkie:** So where are we going for the next question? Over there.

**Audience Member:** Hi. So I heard Bahamas, so that's nice... I'm looking forward to it. That was my take-away. Now, what's the last Grafana dashboard that you've built? For everybody.

**Tom Wilkie:** Oh, that's a good one.

**Torkel Ödegaard:** I've built a bunch for demo-ing the new Prometheus and Loki query builders, I think that's the --

**Tom Wilkie:** A little teaser...

**Torkel Ödegaard:** Yeah. Sorry, that was a spoiler. \[laughter\]

**Tom Wilkie:** We'll put this out after Grafana \[unintelligible 00:32:57.01\]

**Torkel Ödegaard:** Oh, that's good.

**Tom Wilkie:** Tell us a bit about the new Grafana Prometheus and Loki query builders.

**Torkel Ödegaard:** Yeah, they have a kind of special place in my heart, because as we've mentioned before around ease of use, Grafana's birth was around frustration around the current experience building dashboards and writing queries. So the first ever version of Grafana has a point-and-click kind of query builder for Graphite, that not only kind of made it possible to write it without knowing the syntax, but also helped you understand the query because it kind of unwrapped the nested expressions, so you could see what each transformation did, and which order they were being applied in.

So that was part of the first version of Grafana for Graphite, and that kind of simplified the query language through a UI. And I've always wanted/tried to do something similar with Prometheus, but never had the opportunity and time... And last year I did it through the hackathon, and then I've been working with Andrei and Ivana in the metrics and logs team to get this done for real, and turn that hackathon into something real. I'm really excited for the potential there to lower the barrier of entry, to use PromQL, and use LogQL for Loki, and make it easier to just get started using these amazing tools and projects, and making it more accessible for everyone.

**Tom Wilkie:** I'm really excited for the \[unintelligible 00:34:24.00\] query builders.

**Mat Ryer:** Torkel, when you make dashboards, do you use the UI, or just pure JSON? \[laughter\]

**Torkel Ödegaard:** No, I use the UI.

**Mat Ryer:** Oh, you do?

**Torkel Ödegaard:** Yeah.

**Mat Ryer:** Dogfooding is very important, \[unintelligible 00:34:37.06\]

**Tom Wilkie:** What was the last dashboard you've built, Mat?

**Mat Ryer:** Me?

**Tom Wilkie:** Yes.

**Mat Ryer:** I built one that actually instrumented some of our Grafana Incident bits. Playing around with that. It's very good, you should use it.

**Tom Wilkie:** Should I?

**Mat Ryer:** I mean, Grafana. You should use it. It's really --

**Tom Wilkie:** Oh, okay. You know, I just write HTTP requests in Prometheus. \[laughter\] I think my last one was cloud costs. Keeping track of how much we're spending on Google. Not quite as exciting.

**Mat Ryer:** That's quite exciting...

**Tom Wilkie:** Is it?

**Mat Ryer:** Nah, just kidding.

**Raj Dutt:** I mean, it's quite important.

**Tom Wilkie:** It's important.

**Raj Dutt:** Right, yeah. Sometimes we had to do things that are important, but not exciting.

**Matt Toback:** Would you like to follow up with anything? \[laughs\]

**Anthony Woods:** So I did a quick hack job last week, which was -- I think it was just a single panel pulling in some GitHub data, so we could identify when there was support escalations that weren't assigned to anybody.

**Tom Wilkie:** I mean, that's kind of interesting, because that's not a traditional IT observability thing to do with Grafana.

**Anthony Woods:** Yeah, I thought it was really good, because -- I was actually talking to \[unintelligible 00:35:44.21\] "Hey, there's been some support issues that have gone unnoticed, and weren't assigned to anyone, because they were missing a label, or something." I'm like, "Oh, we can alert on that really easily." So I just quickly threw it together.

**Tom Wilkie:** \[00:35:59.28\] And for the next 15 minutes I want you to talk exclusively about this, just you, on your own. See how much of this voice we can -- thumbs down emoji... \[laughter\]

**Raj Dutt:** Tom, you mentioned the non-IT use case, and people building dashboards... What's been really cool to see, I've been thinking, in the last few quarters is to see people at the company creating all these Grafana dashboards; people in the finance team, in the go-to-market teams... And I felt like I was being a little bit of a jerk, honestly, when I kind of asked or strongly requested that people used Grafana instead of Tableau or PowerBI or something like that... And I'm actually really impressed, and I think that maybe it's frustrating for these teams, I don't know - we should come and talk about it later - but it's really cool to see even the non-observability use cases within the company, like from finance, from go-to-market, using Grafana. That's really cool. And I know there's been a lot of work on the BigQuery data source, and things like that... But dogfooding is such an important part of our culture, and it's really cool to see other teams other than our R&D teams being part of that dogfooding DNA.

**Matt Toback:** That's only valuable though if that feedback loop is in place, right?

**Raj Dutt:** That's something I think we could definitely do a better job on...

**Matt Toback:** Yeah. Because then you've gotta make sure that if it's not working, you know why it's not working. Because otherwise it just feels like imposed Grafananess.

**Raj Dutt:** Maybe it is imposed Grafananess.

**Tom Wilkie:** I think the most important use case that we haven't covered yet though is home automation. That's clearly the next pivot for Grafana, right? So who here monitors their home power usage with -- wow, okay...

**Raj Dutt:** Quite a few.

**Tom Wilkie:** I was actually hoping for more than that. Maybe come talk to me later. So who's got the microphone? We've got one down here...? No. One over here.

**Audience Member:** Hello. I'm Samuel, from the K6 team over here... So Grafana is growing rapidly, as you said; It's gonna be over a thousand people. And when you grow this quickly, you'll stretch the teams, because of the pure acceleration of people that are coming in... So what are your views on doing this quick growth, but also maintaining the qualities and the culture of Grafana at the same time within the teams and within the company?

**Anthony Woods:** I think that's a really important topic and I think that's been our biggest concern as a company, and the biggest challenge and risk that we see, is that scaling, and being able to maintain that culture as we do. So it's something that we really put a lot of effort into. We really wanna have great hiring practices; the people ops team have been great around recruiting, we've got good processes to bring people on, the onboarding is so important, to make sure people understand how we work. Because as we get bigger, it's getting more and more challenging to do that, and it's great to see that we've built these processes in place... Because we really wanna make sure that we do maintain this really great culture that we've built.

**Raj Dutt:** Yeah, your stretching point is really interesting... And I have, I guess, a two-part answer to that. One is - look, we're a startup, we're a high-growth company, we're in a very competitive industry, and sometimes teams are gonna stretch; have to stretch. People are gonna have to stretch. Sometimes you're gonna have a really intense week. Sometimes you're gonna be up late, trying to fix something, and you're gonna be stressed out. And you know what? That is fine. What is not fine is if that becomes the norm. So that's the sort of work-life balance that we're -- you know, the stretching point, Mat, that you mentioned. We're so (I don't know) European... \[laughter\] We're so...

**Torkel Ödegaard:** Human?

5:Human, yeah... I don't wanna get away from the fact that this is a challenge, this is a startup, this is a high-performance company, and we expect everyone to bring their A game, and be able to really step up if necessary. But the commitment that we'll make, and the people ops team, and hopefully all our leaders will make is if that becomes the normal and you're stretched for weeks on end or months on end, that's really bad. We're a long-term greedy company, and that is not a long-term way to operate. It's just gonna burn people out.

So yeah, stretching is okay, but consistent stretching over time, or a culture where you're just overworked - that's what we really wanna avoid. \[applause\]

**Tom Wilkie:** \[00:40:15.21\] That deserves a round of applause, yeah. A question from the GitHub, from the listeners. We took questions on GitHub as well. A question for you, Torkel - what are some other tech companies and open source projects that you admire?

**Torkel Ödegaard:** At the start it was obviously Kibana, which is where Grafana started, the UI for Elasticsearch. When we started using that internally at the company I worked when I created Grafana, I saw just an amazing open source project that had a simple UI to explore logs in Elasticsearch. Contrary to almost all other alternative dashboards for Graphite at the time, Kibana had a UI for building dashboards. Because back then, the alternative \[unintelligible 00:41:04.14\] So that was the norm for some of the dashboarding tools. But Kibana had a great UI to do it. But also -- yeah, we took that and tried to push it even further in terms of the UI accessibility.

But more -- I mean, I think on the company side I was always kind of impressed with Automattic, WordPress, and their kind of remote-first culture. I read the book "A year without pants" (I highly recommend it), on remote-first work, which was really good. HashiCorp is also -- in terms of inspiring, another open source company.

**Tom Wilkie:** Yeah, yeah. What companies -- you know, you mentioned remote work... What about companies like GitLab? They put everything out there, and all their policies, and internal documentation.

**Torkel Ödegaard:** GitLab is another great option, yeah.

**Tom Wilkie:** Funnily enough, they were on the podcast, the previous episode. How about yourself, Raj and Anthony?

**Matt Toback:** Are you hoping they'll say Loki?

**Tom Wilkie:** I'm kind of waiting for someone to say Loki, yeah. \[laughter\]

**Mat Ryer:** He admits it. \[laughs\]

**Raj Dutt:** I mean, Loki is pretty cool, I have to say... And it's definitely one of the top open source projects \[unintelligible 00:42:21.11\] In terms of companies - this is kind of a strange answer in terms of the modern landscape of companies, but I actually really still admire Red Hat as a company, in terms of the early Red Hat... Because they truly pioneered a new way forward. They were the world's first billion-dollar open source company. The conventional wisdom was that there would never be another Red Hat. That was it. And before they became IBM-ers and lost their souls... \[laughter\] From everything I hear, it was a pretty cool place, particularly in the early days. And I know that's not really an open source project, but I feel like they were really good at bringing stuff together and making a community.

**Tom Wilkie:** I mean, they still contribute to many open source projects, and take a lot of the unglamorous roles, and maintain and keep the open source community working. I think it's still a company to admire.

**Raj Dutt:** Yeah.

**Anthony Woods:** Yeah, Red Hat is definitely -- that's the key one for me... A big focus on open source, and the fact that it is a viable business model. Certainly, when we started it wasn't as popular. It's certainly a lot more popular now; the open core model and starting with open source is how you get things done. It's very difficult to get into the market with a closed source product, because people can just go and use an open source option. And having that open source, where people can -- 1) it gives them access to it, where they can start using it, they don't need to pay for it, but also, something we really leveraged a lot is getting that community feedback; finding out where things are going, and letting the community kind of drive the product development.

**Matt Toback:** \[00:44:02.23\] Should we take --

**Tom Wilkie:** One last question from the audience. Over on the right here, I think.

**Audience Member:** Yes, thanks for the extra pressure of like the last question.

**Tom Wilkie:** Make it a good one.

**Mat Ryer:** Make it in British.

**Audience Member:** I like how Mat is looking -- Mat is, by the way, my manager. He's hosting the podcast, and he's looking at me like "Don't embarrass me in front of the audience." \[laughter\]

**Mat Ryer:** I wasn't until you admitted that I was your manager...

**Audience Member:** My question was gonna be - knowing what you know now, if you look back, what's the one thing you would do differently?

**Mat Ryer:** That's a great question.

**Matt Toback:** It's a good closing.

**Anthony Woods:** I wouldn't do anything differently.

**Raj Dutt:** That is a really good question. \[unintelligible 00:44:34.05\]

**Torkel Ödegaard:** Yeah, well, I think I have a few -- I mean, when we first made an alerting feature in Grafana, I think I would have made it more kind of standalone from dashboards.

**Tom Wilkie:** \[unintelligible 00:44:44.25\] to have used React immediately?

**Torkel Ödegaard:** I mean, if I knew that React was gonna be as big as it was... React was (I think) alpha when I first created Grafana. It came out like maybe the same year. But if I knew, I would probably switch from Angular to React way earlier, if I knew that React was gonna take off... Because we invested so much in a frontend framework that was gonna die.

**Raj Dutt:** I'll probably think, right after I say this, of something much more obvious that we should have done differently, but one thing that you reminded me of, Tom, is - you know, we started as a remote-first company, and we kind of degraded from like 2018, 2019. We started opening these offices all around the world. We had an office in New York, I think we had an office in Paris, we had and still have an office in Stockholm... Basically, we're creating these mini-hubs. And in probably six or seven cities around the world we were starting to have 5, 10, 15, 20 grafanistas show up consistently. And what was happening is even though we said we're a remote-first company, people who were really remote and were working in their homes, particularly in cities where we had these hubs, started feeling like second-class citizens. They weren't there for the watercooler conversation that was happening every day in the small office, and wherever. Especially if they're on the same time. If five people on that team were coming at the office three days a week because they wanted to, an the other people didn't want to, that was a really interesting dynamic.

So that, in retrospect, is something that I wish we'd been firmer on, that we are not a remote-friendly company, we're a remote-first company.

**Tom Wilkie:** Remote only.

**Raj Dutt:** Yeah, remote only company really is what we've ultimately landed on, and I think there was some zig-zagging there that we should have been clearer on that in the beginning, and really stayed true to that. That's one thing that I wish we'd done differently.

**Anthony Woods:** I strongly believe I wouldn't do anything differently. I'm so amazed with where we are today... I wouldn't wanna risk not being able to do that. \[applause\]

**Mat Ryer:** Yeah, that's a good point, because you never know the butterfly effect of what could happen. We could all have lizards legs... \[laughter\]

**Tom Wilkie:** Probably not that... I'm glad the last words of this podcast are "lizards legs".

**Matt Toback:** Well, you wrote it that way.

**Mat Ryer:** Yeah, it was always the plan.

**Matt Toback:** Lizards legs.

**Mat Ryer:** Lizards legs, there we go. Actually, I'm shocked how many legs there are. People have got legs. I've never realized that many people had legs. \[laughter\]

**Matt Toback:** When you said "A year without pants" - when that book came out, everyone's just like "Wow, that's impressive!" Now we're like, "Pff... Two years without pants." \[laughter\]

**Mat Ryer:** I suspect in the U.K. that would have a different title.

**Raj Dutt:** Yes. "A year without trousers"?

**Mat Ryer:** Yeah, without trousers. It sounds so quaint. "A year without trousers." Well, that's all the time we have for today, but thank you so much for all your great questions. Thank you to our panel, Torkel, Raj, Anthony. It was a pleasure. And of course, Toback...

**Matt Toback:** Mat...

**Mat Ryer:** And the Wilk...

**Tom Wilkie:** Mat...

**Mat Ryer:** Thank you very much, and we'll see you next time on Grafana's Big Tent! \[applause\]
