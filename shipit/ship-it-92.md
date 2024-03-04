**Justin Garrison:** Hello, and welcome to another episode of Ship It. I am your host, Justin Garrison, and as always, Autumn Nash is joining me. How's it going, Autumn

**Autumn Nash:** Hi. How are you?

**Justin Garrison:** I'm doing great, and I am so excited for this episode. I want people to hear it, like right now. And they are. That's the cool part.

**Autumn Nash:** I think this is my favorite episode so far.

**Justin Garrison:** Yeah. And this episode is called "Shipping in SPAAACEE!" I just wanted to do that really loud... \[laughs\]

**Autumn Nash:** Be ready for the Justin dad jokes that will come from this.

**Justin Garrison:** It's going to be -- well, you know, Andrew gave me some dad jokes, too. It wasn't just me. But I know I have some, so...

**Autumn Nash:** \[laughs\] like how you're trying to pretend like it wasn't like your idea, and you didn't fool Andrew into the dad jokes...

**Justin Garrison:** You know, dads kind of orbit each other... And so we just -- we'd have a gravity, and... \[laughter\] And that's how we start the show. So...

**Autumn Nash:** That's such a dad joke.

**Justin Garrison:** We want to start the shows with giving y'all links to some neat things. We've found some - not news, necessarily. This isn't a news show, this is really about the infrastructure and people that build and maintain infrastructure, and today's episode is all about infrastructure and code that's running in space. Or as a technicality, I know it's low Earth orbits... Let's just say what happens when your code is falling all of the time. And it's not fail, it's not falling down, it's not crashing yet, but at some point it's going to, and that's pretty exciting. But we will get to that interview in just a few minutes.

Right now, we wanted to go into a couple links that we thought you all might like. And so I'm going to start first... And it's a blog post from SST, which is a full stack deployment tool for deploying applications on top of AWS. And this was a really fascinating article from January 29th 2024, about moving away from the CDK, from AWS CDK... Because their tooling was originally built on top of the CDK. It still is currently, as of writing this blog post, built on the CDK, but they're saying that they're moving away from it, and they're actually moving to Pulumi instead of the CDK. And the article has a lot of details about why they're doing that. And I've found it very fascinating, because a lot of the things that they call out explicitly are things that -- I've just had feelings about the CDK and CloudFormation in general, that I've never really liked. I've never been a big fan of CloudFormation. I think it has some great use cases, but in general, if I'm going to deploy and manage infrastructure with code, I always would reach for TerraForm over the CDK or CloudFormation. And they call out exactly some of those reasons, about CDK is just kind of a hack on top of CloudFormation, and CloudFormation as a service is kind of a black box to them... And there's a lot of things they can't do, for ordering, and -- they had kept having to do hack over hack over hack, to make sure that their users could deploy things reliably. And so they're just saying that's enough, and they're going over to Pulumi, because of these reasons in the blog post. So I've found it really fascinating, and if you've ever felt like CloudFormation had some gotchas, and some things you maybe didn't like, you probably will agree with this article.

Autumn, I know you've used a lot of CloudFormation, currently and in the past... And you don't have to get into all the details of your feelings about it, but... Yeah, I've found it really cool that they laid it all out, just like "We're done. We're not going to try to hack around this anymore."

**Autumn Nash:** I think it's interesting to learn people's whys of why they pick different infrastructure, and why they make those choices. My link is about deep fake scammers walking away with $25 million in the first of a kind AI heist, which I think is extra interesting being that Open AI released Sora this week... And I think the video of Sora, the video on the fly, and the ability that Sora has has made a lot of people super-concerned about deep fakes... And I think we've all been sort of concerned, but now the fact that it is readily available and easily available is going to make people even more concerned... So this was a highly-convincing fake video and audio that they use to fabricate content to get $25 million from a bank in Hong Kong.

It's kind of amazing, because it was a multiperson video, in a multiperson video conference, where it was fabricated images and individuals... So it's not like it was a video that somebody just gave, and they just assumed it too. They like actually used this in a video conference, and posed as like bank officials to get them to release this information. So with elections coming up, with banks, with so many different aspects of how this could hurt the community...

I mean, there were Taylor Swift pictures of her doing not appropriate things, or whatever you would call it, and they made these fake pictures, and even though places like Open AI, and Sora, and these different AI companies are saying "We're gonna have all these guardrails", how long until people learn to pick just what they want, without those guardrails, and start using it maliciously? So it's interesting where this could go and what effects it could have. I think it'll also make some really cool things, which is exciting, but...

**Justin Garrison:** \[00:06:00.03\] Tools are tools, and they can be used for both. This article specifically, I heard another breakdown of what at least they thought happened, or what came out from happening... Because I know at least the original article didn't say what bank it was, or why, but basically, someone had access to transfer funds, and they sent them emails and invites and made fake accounts on that video call for people that would be in charge of telling them, "Hey, you need to transfer this money." So like the CTO, or legal advisors, or whoever that worked at the bank, calling the person that had the access to say "Okay, transfer these funds", and then multiple people on a fake call, basically, all AI-generated, with audio, and saying, "Hey, I need you to transfer this. It's urgent, yada, yada." It's like, if I had three people at my company telling me I need to do something...

**Autumn Nash:** That's a scary thing, because they didn't even need real accounts. They could have found one person, and if you have somebody high enough level, they would have had a way to do a wire transfer... Because they're thinking that their boss, or a CTO, or these high-level officials are giving them these direct orders. And it's more than one person. So it's even if they didn't have those accounts -- and it's like, how many other ways could this start to affect...? They fooled grandmas with IRS scams on the telephone... And then they're gonna have video? How do we now educate people about this? How do we educate people around misinformation? Think about just what happened with memes on Facebook during our last election. This is going to be like -- I don't know if we're ready at a level of how to educate our community on a global scale to fight the amount of misinformation that this is going to be able to churn out, and it's going to be able to churn it out so quickly that -- how do we bring people's awareness to this? If you don't work in tech, do you even know that videos like this exist? How do we then differentiate between the two?

**Justin Garrison:** Yeah, and even all of the guardrails and laws that we might have in this country - that doesn't apply when someone's calling from another country, or...

**Autumn Nash:** Exactly. And not just that, but what happens when countries weaponize this? You know what I mean? Like, it would be very easy for two countries to weaponize us against each. All you need is one fake video of a public government official from another country to start a war. So that in itself is very scary and dangerous.

**Justin Garrison:** Yeah. For sure. At some point there's real people and real money on the line.

**Autumn Nash:** Exactly. It's not just servers... You know?

**Justin Garrison:** Yeah, fascinating. I'm interested to just keep following these sorts of things, as I'm 100% positive this is not the last time we're gonna hear of AI being involved in either scamming, or some sort of heist, or money being stolen... And especially -- $25 million is a lot, but I don't think that's going to be the maximum. This is gonna keep going until we figure out how to identify that.

**Autumn Nash:** It's amazing. Every time I see anything, I'm like "This is gonna be so cool. You could use it for this, you can use it for that..." Can you imagine as a little kid being able to think up a story and then telling a computer "Hey, go act this out with my favorite cartoon characters." That is wild! But at the same time, please don't cause a nuclear war... \[laughs\]

**Justin Garrison:** The good and the bad, right? Because I hear so much around like AI for education, and for helping like a kid who needs this very specific, either special needs, or special tutoring to say "Hey, I need someone to explain this to me the way I understand it." And that's super-powerful, because the teacher can't do that when they have a class of 20 or 30 or 40 kids. But a chatbot - sure. They can give them the diagrams and the things that would help individuals learn things better, but then - yeah, you can turn that right around and say "Oh this is unlimited power for whatever I want to do and create."

**Autumn Nash:** Just like at a point -- like, I love BeautifulSoup as a Python library, and I love Twitter, but people were doing horrible things with scraping the internet and then having chatbots regurgitated on Twitter, and use it to be hateful... Which you could also post a bunch of really cool things you're interested in. I mean, I made one about coffee and video games, and then somebody used it to harass Meghan Markle. It's just insane. I guess it's whatever floats your boat.

**Justin Garrison:** Alright, well, let's jump right into the interview, because I'm sure everyone wants to hear from Andrew about what it's like to run software on satellites in space... And we're gonna jump right into that and we'll see you afterwards.

**Break:** \[00:10:31.07\]

**Justin Garrison:** Alright, thank you so much, Andrew Guenther for being on the show today. And today, we're talking all about shipping in space. Welcome to the show. My first question is when you have some code that's running in space on a rocket ship, and if it's a class that maybe is undeclared... Is that an unidentified flying object?

**Andrew Guenther:** Oh, that's a boo. That's a boo for me, dawg. \[laughter\]

**Autumn Nash:** We don't even have all the context here. What do you do with these? I have so many questions.

**Justin Garrison:** I literally was up last night, and I thought of that. I woke up and I was like "That's the joke", and I'm like "Oh, I'm such a dad." Anyway.

**Autumn Nash:** He didn't wake up with a line of code, he woke up with a dad joke about space. Like, I love it.

**Andrew Guenther:** I get that though. We all go through that phase.

**Autumn Nash:** \[laughs\] He's like "I feel you. It's okay."

**Justin Garrison:** So anyway, bad jokes aside... Andrew, tell us about yourself and what you were doing at Orbital Sidekick.

**Andrew Guenther:** Yeah, for sure. So I'm Andrew Guenther, I work for a company called Orbital Sidekick... So Orbital Sidekick operates a constellation of hyperspectral imaging satellites. And basically, what that means is they have these cameras that can see way outside of the visible spectrum of light, so they can effectively perform spectroscopy from space. So gases that would normally be invisible to the naked eye are things that their cameras can see.

Their primary market right now is customers like oil and gas, who are like "Hey, let us know if our pipelines are leaking." So OSK basically processes their own imagery, determines where leak sites are, and forwards those on to customers. They have customers in government, who buy raw imagery looking to expand out into other industries. As you can imagine, with these kinds of cameras there's all kinds of cool stuff you can do. You can monitor plant health, you can help with mining prospecting... Very, very cool technology. Still in the early stages. Three satellites in orbit right now, two more launching in March-ish. I don't have exact dates yet.

A little bit more about me... So I am principal software engineer at Orbital Sidekick. Prior to that, I worked at AWS for seven years... So basically, I left AWS, joined OSK as lucky employee number 13, and got to build a lot of their ground segments systems from the ground up. As time went on, I got to be a little bit more involved and help out on payload side as well... So kind of the v1 of all of OSK systems I got to sort of touch, and then moved into this role of wherever the fires are, I move around to put those out.

**Justin Garrison:** And hopefully not physical fires. I mean, these are spaceships and rockets...

**Andrew Guenther:** No, thankfully no physical fires.

**Autumn Nash:** Okay, we just became best friends. I'm so excited right now. \[laughter\] I'm trying to parse the amount of questions in my brain, because that's how excited I am. So you're building the software that processes the images, but also, are you building the software that is on the satellites?

**Andrew Guenther:** So it's interesting... OSK company of about 30 people.

**Autumn Nash:** Do you need 31?

**Andrew Guenther:** Applications are open.

**Autumn Nash:** Okay, cool.

**Andrew Guenther:** It's interesting... So being that small, we have to work with a lot of vendors to sort of pull things together... But the payload design and a lot of the core software for image processing we write ourselves.

**Autumn Nash:** What language do you write image processing in?

**Andrew Guenther:** So the image processing on the ground is all in Python, and the firmware for the sat is C++, as well with some Python mixed in. So one of the big value props for OSK is that we try and perform some of the imagery analysis onboard the satellite before it even comes to the ground.

**Autumn Nash:** What...?!

**Andrew Guenther:** Yeah, because you have this incredibly wide spectrum imagery, the data is huge. I mean, we're talking these satellites can bring down one and a half terabytes of imagery per day, per satellite. And so part of the idea is, the more processing we can do onboard to understand what imagery might be a priority versus not a priority, really helps us get that information to our customers faster. So there's also this aspect of the analysis we write on ground should be an analysis that we can hopefully perform onboard as well.

**Autumn Nash:** \[00:20:04.26\] That is so cool.

**Andrew Guenther:** We ship Nvidia hardware up to space. We're running Nvidia dev board in low Earth orbit.

**Justin Garrison:** I'm just thinking of Nvidia drivers now, and I'm like "Oh, that's the worst", like trying it on a Linux embedded system.

**Andrew Guenther:** Oh yeah, a Linux embedded system that you never get to touch again, right? It goes up and you're locked in.

**Autumn Nash:** If something goes wrong, how do you fix it, when it's like in orbit?

**Andrew Guenther:** Yeah, I mean, this really gets into redundant systems. So a lot of the components on board, there's at least two, our own component, so our own dev board - you know, there's one or two of those, but there's kind of like a main control computer that exists separate from ours, that kind of handles a lot of the boring stuff, like pointing the satellite, and doing the actual hard work of transmitting data back down to the ground... And then our dev board basically handles all that image processing, sending commands to the camera. So effectively, we have capabilities to like failover from one component to the other. Or if we're rolling out an upgrade, we roll it out to XCOM 2, and then we primary-swap to XCOM 1... So it's almost like an A/B test in space, right? Kind of like a canary. So you upload it to one of the XCOMs, you swap over to that, make sure everything still works - great. Roll it up to the second XCOM, everything still works - great.

**Autumn Nash:** I feel like you have to write really good code, because and you have to really think about your hardware, because you're never get to touch it again. And you could miss a picture...

**Andrew Guenther:** A hundred percent. And this is one of the crazy things. I mean, even in a startup, like an aerospace startup, the dev cycle on hardware is super-long. So a lot of the hardware was designed and locked in and figured out before a lot of people got hired. The hardware was decided before I even got hired...

**Autumn Nash:** Which is crazy. You said you were number 13, right?

**Andrew Guenther:** Yeah.

**Autumn Nash:** So that's like really early.

**Andrew Guenther:** Yeah. So there's a lot of -- by the time these things go up... You know, you've got three new generations of Nvidia dev boards that have come out; you're running like Ubuntu 18.04 in space for the next half decade.

**Justin Garrison:** Yeah, long-term support has a different meaning when it's flying around the world.

**Andrew Guenther:** Yeah, it's like L-L-LTS. Long, long, long-term support. \[laughter\]

**Autumn Nash:** Well, it's funny, because people kind of make jokes about like NASA, and different places in the government, and how they use outdated technologies... But when you really think about it in context, there's a reason why they're still using that very reliable technology... Because hey, you can't go change it every week.

**Andrew Guenther:** Yeah, because you've gotta test the hell out of it before it goes up. And it's so interesting to kind of see this boon of aerospace startup... Before I came to OSK, I didn't work in aerospace. Like I said, I was at AWS, and I also had the draw of like "I want to work on space stuff. That sounds awesome." And seeing this smashing of startup culture in aerospace, this culture that wants to move incredibly fast, and this culture that's traditionally very slow, trying to like figure out "Where does this all meet in the middle? How do we speed this process up, become more agile?" That was, to me, one of the most interesting things to observe.

**Justin Garrison:** First of all, that's really cool, when I think about like 30 people, three satellites, right? Ten people per satellite in space, you're gonna have a couple more... And that's like the opposite of scaling when I think of running systems, where it's like one sysadmin could do 100 machines... But like a spaceship... It's literally a satellite, and it takes so much time and process. What does that actually look like for you, of "We're gonna make another satellite. It's gonna go out next year"? What is that lead time for what you're writing today, what decisions you're making around libraries, and code... How do you get feedback for that? How do you make sure that that thing that you think is going to be accurate next year gives you any kind of feedback loop?

**Andrew Guenther:** \[00:23:53.00\] Oh man, there's so many great questions to unpack here... So I'll try and go at it one at a time. So one of the saving graces to some degree is that as we launch more satellites, they're all based on the same hardware designs. Very minor, minor revisions between them. Like, you have a satellite that works - don't mess with it. Continue to launch more of the same. But then also, on the flipside, when the first one goes up, and we realize "Oh, we really should have done some things differently", as we learn, that iteration cycle is even slower, so there's a lot of things that we have to kind of deal with on ground, and we're making notes for what the next gen hardware is going to look like, and additional concerns... And when you talk about what kind of packages are we going to use, that's a huge concern of ours. Again, it's running 18.04 in space, we're trying to do machine learning and data analysis, and a lot of those libraries move very fast. They're very quick to drop support for older operating systems... So we have to make the call as a small team, are we going to compile these ourselves? Are we going to build our own versions of these dependencies to maintain them? So we're very cognizant, especially on the onboard data processing side, of what libraries we pull in... More so than anywhere I've ever been. Because not only is maintenance a concern, size is a huge concern. Pushing software updates to space is hard. It takes a while, you're gonna test the hell out of it, and you want to make sure that it works. I always like to pick on Node.js, because you have like the Npm package system, where just everything sprawls out to infinity. You install --

**Autumn Nash:** They're ridiculous. 65 warnings. \[laughs\] Like, "What?!"

**Andrew Guenther:** Yeah, you install one thing, and suddenly now you've got like 100 gigabytes of dependencies. And even in Python, we have to be really careful of that, like what does our dependency sprawl look like. And we've made conscious decisions to say "That sprawls out a little too much. We're not going to use it." And something we really try to hold, to our own frustration sometimes, is parity between space processing and ground processing. So there's a library where it's like "Alright, well, we don't want to ship it to space. Are we going to use it on the ground? I don't know. Maybe." Now we've kind of separated these paths, and it makes it harder for us to verify results between the two. So those are the kinds of things that we have to think about. It's interesting that to some degree even space decisions can slow down ground decisions, to some degree.

**Autumn Nash:** It's really interesting, because you're kind of developing in the paradox of all developer angst, I guess, or problems... Like, okay, so you want to build something with low dependencies, something that's not going to be vulnerable, something that's going to last for a long time, but then how do you pick that? You have no control over software life cycles of other people...

**Andrew Guenther:** And you have to know like three years in advance. \[laughs\]

**Autumn Nash:** That's what I'm saying. And how do you account for vulnerabilities? You're gonna have to patch things eventually... So how do you patch in space? There's going to be a CVE for something.

**Andrew Guenther:** Yeah, I don't want to fall into the trap of "It's in space, so it's safe..." \[laughter\]

**Justin Garrison:** Right, the attack surface is a little different than what a typical server might have.

**Andrew Guenther:** Yeah, it's a very different attack surface... But I will kind of pull that card a little bit, at least as far as the Python side of things goes. That system is very isolated. We're not running a web server up in space. But to the point of security and CVEs happening in space, Space Force is actually making a huge push. They were at DEFCON last year; I got to go and watch the -- they held the Hack-A-Sat hackathon, which was very cool. They actually -- Space Force launched a satellite for a hackathon...

**Autumn Nash:** I still can't believe Space Force is real, and every time someone says that, it makes me happy.

**Andrew Guenther:** It's pretty amazing.

**Autumn Nash:** That sounds just so cool. Like, "I work at Space Force. No big deal." Right?

**Andrew Guenther:** Central Space Command, you know...

**Autumn Nash:** Yeah. Like \[unintelligible 00:27:41.10\] in real life. It's awesome.

**Andrew Guenther:** Yeah, so it's important to not fall into the trap of "We're in space, so we're safe." And especially in that startup culture of like wanting to move really fast, and compete with these bigger guys. That's something that we're very cognizant of, and trying to find those right balances.

**Autumn Nash:** \[00:28:02.07\] How do you make decisions, and what kind of tenets do you have to, I guess, develop? Because you both want to develop quickly, because everybody wants to innovate and develop quickly, and that's how you get an edge in your market... But also, how do you make that last for so long? And then how do you do it with like -- I was writing an automation script, and we were trying to get rid of like dependencies. So it's like "Okay, I won't use Panda, I'll use Python", you know, the things that come with Python. So trying to develop on that level on just a small automation script made it so much more complicated. So I can only imagine image processing...

**Andrew Guenther:** It's a big push-pull, because you definitely want to try and keep your space systems as simple as possible, and we're very much breaking that mold by saying we're going to do imagery analysis on board of a satellite. And so it's definitely something that we're cognizant of. And we have this nicety that we can test a lot of things out in the ground segment. We can use those libraries on ground initially, before we make the call of, you know, "This is something that we want to run in space, so let's retrofit." We can use all those nice libraries, have 100 gigabytes of dependencies to prove out those analyses on ground... And then when we want to say "Okay, this is high value. We want to run it on board", we can take that step to say "Alright, let's strip this back. Let's make this bare bones. How do we leverage what's already on board to now ship this thing out to space?"

**Autumn Nash:** \[unintelligible 00:29:19.27\] working backwards.

**Andrew Guenther:** Yeah. Yup.

**Justin Garrison:** Fundamentally, a customer comes to you and says "I need you to look at something on the ground." You're not running customer code in space, where they're giving you a job to say like "Coordinates... Please send me this data", right?

**Andrew Guenther:** Yup, exactly.

**Justin Garrison:** You're gonna go "Point the iPhone 25 at those ground spots, and get this image back." It's gonna transmit down just like a terabyte a day out of this - you're just taking pictures constantly - and then you process that a little bit more, and then send them either raw data, or whatever it is that they're looking for, right? Like, that's the general pipeline here.

**Andrew Guenther:** Yup. You got it.

**Justin Garrison:** What was the benefit there of not making the satellite a dumb client, and putting intelligence in the satellite, and on the ground? Because it feels like you could put that either place, and you chose the hardest decision to put it in both places.

**Andrew Guenther:** Yes.

**Justin Garrison:** Like, there has to be value that you're getting out of doing that process before -- I mean, if you're just sending a terabyte... I don't know, was that just a big antenna with a satellite dish up there, just like beaming down \[unintelligible 00:30:15.02\] of pictures?

**Andrew Guenther:** So that antenna that actually performs that one terabyte a day downlink - we get a pass on that antenna every 90 minutes. So if you have a really critical, high-priority workload, and your objective is to deliver some insight to a customer as quickly as possible, you might not want to wait that 90 minutes. And even after that 90 minutes is up, it has to get to the ground, it has to be processed then on the ground before it finally gets delivered. So the idea being if we a) can prioritize - because we're also not able to get down all the data we may have on board with every pass. So it's kind of twofold. If you can say on board "Hey, I have very high confidence that there is a methane leak at this position", that is a much smaller piece of data, and there are other antennas that we can use to transmit that data more instantaneously... And then secondly, maybe you have a little bit less confidence, but if something is suspect, you can say "Alright, on our next pass this data skips the line. We're going to downlink that first, and we're going to make sure that gets analyzed as part of this pass, so we can get that information out as quickly as possible to customers." But it is definitely the hardest of all the options, you're right.

**Autumn Nash:** So kind of like how they're using machine learning to look through ultrasounds, but you're using it to like basically prioritize data from satellites to bring that down first?

**Andrew Guenther:** Yup.

**Autumn Nash:** That's really cool.

**Justin Garrison:** How do you debug that? Is that only like you have a dev box on your desk, and you're saying "Oh, I think this is what's happening"? At some point when you debug it, you just have to kind of poke at it... But I can't imagine -- like, that latency, you have a 90-minute window. I don't know how long that window lasts, where you're ilike "Oh, I've got a shell for 89 seconds. I've gotta jump on the box and like poke at something."

**Andrew Guenther:** \[00:32:00.20\] Yeah, you can SSH into space for like a hot five minutes, and take a look around. So there has to be some planning ahead of time. If you want to run some set of debug scripts, you're going to want to know ahead of time, and just run that in an automated way, rather than just like maybe having a terminal open... Which we've done. We've done this, especially after the sats first went up, and we were trying to better understand the characteristics of the first one, and just get a sense of what was happening live... There was a lot of "Alright, time to SSH." \[laughs\]

**Justin Garrison:** I can only imagine that constant Tmux session that's like "Oh, it's coming back around. Let me connect to it again. Hold on." That's just amazing.

**Andrew Guenther:** We don't have space for Tmux, man. It's a fresh shell every time. \[laughter\]

**Justin Garrison:** Your SSH hangs and you're like "Dang yeah...!"

**Andrew Guenther:** Yeah, yeah. \[laughs\]

**Justin Garrison:** Man, that is exactly what I would hope to be.

**Andrew Guenther:** Yeah, it's the dream.

**Justin Garrison:** There's so many challenges in this. What would you say is like one of the things that stood out to, something you didn't expect? Because you're going into this knowing this is going to be a hard thing to do, there's a lot of variables and things at play... What was something that surprised you about shipping software into orbit, that you're like "Wow, I didn't see that one coming"?

**Andrew Guenther:** Yeah, I think -- and maybe I was uniquely naive, in that... You know, I think everybody has that vision built up of like how NASA does things. And you imagine clean rooms, and this perfection, and just everything is immaculately tested... And not to say that there's not problems, but you have that vision of that much slower pace... And I think what was surprising to me is the speed at which we can move, and the amount of chaos that introduces, and that it's okay. Like, there was a lot of thought put in up front around those failure modes, and understanding and basically protecting our future selves, so that when things do get chaotic and things do break, we have the levers that we can pull. So it's not clean rooms that -- I mean, there are clean rooms, but... You take a drill, do a test, and it's like "Oh man, we need to route this connection somewhere else", and somebody just like takes a drill to a frame, and they're like "Alright, let's send it to space." That just kind of like shatters your view of the way NASA does things... And I think that kind of goes to what I was saying earlier about this meeting in the middle of this startup culture wanting to move fast, and that entrenched aerospace culture of moving very, very slow. If we can launch a satellite for, say, $5 million, why are we going to run a $5 million on-ground test for that satellite, or a $10 million on-ground test for that satellite? We can launch three for that price. And if one of them works, we're great.

So I think that's kind of where that push and pull really comes into play, and I think that was really surprising to me, was just how much leniency there was towards moving fast. I didn't expect it to be able to move as fast as we've been able to move.

**Justin Garrison:** I wonder what the culture was like In the '60, where it's like "We're landing on the Moon..." They had to move fast. My grandfather actually worked on the Apollo missions, which is just like, his pictures were absolutely amazing. And I never got to hear stories from him of what the culture was like, but I can only imagine that at some point you're just like "No, this has to happen this decade." Someone said "We're going to the Moon." And the fact that so many people and so much funding and money was in place to do that... And now on the opposite side, where it's like, no one told you to do this; no one told you "This is the thing we have to do." And so the initiatives are very different, of like "Hey, we see where we can add value to people that maybe had to drive their truck for two days to go see this pipeline", or something like that. Like "Hey, I got you in an hour and a half. And you're gonna get your images, and they're gonna be processed, and we'll see all that stuff that maybe you couldn't see before." And that's just pretty amazing, to be able to add that value that quickly.

**Andrew Guenther:** \[00:35:57.18\] Yeah, it's nuts. I mean, this is something that even 10 years ago wasn't possible. Launches have become way cheaper... $5 million is a lot, but in the grand scheme of like Silicon Valley VC money, that's not a lot. And it's become super-accessible for startups to launch payloads into space. It's high cap x still, for sure, but it's possible, when it really just wasn't before. And I think, to your point, we're seeing that transformation in a lot of industries. For oil and gas, the state of the art was like once a quarter they would pay some kid trying to get their pilot's license to just like fly and look out the window of a Cessna, and like "Do you see any leaks?" "Nope." Right? That's what we're going up against. That's what we're replacing. It just feels like such a huge quantum leap forward for that industry... And we see that with customers; they're super-excited. I mean, a) because it's space, and it's cool, but also just, it is such a faster feedback loop than anything that they'd worked with before.

**Autumn Nash:** That's wild, that you can do something in space that much quicker... Also, I think it's really going to add - I don't even know if I'd say add value, but it really sets you apart if you can move fast and cheaper, because of the market that we're in right now, and less VC funding, and higher interest rates... That's awesome that you've been able to add so much value, but also iterate faster, and I guess at a smaller cost... Even though $5 million isn't anything to like --

**Andrew Guenther:** Well, still our CapEx, but lower than it used to be CapEx.

**Autumn Nash:** Yeah. I mean, back in the day, the only people that launched anything into space was NASA. So the fact that it is even an industry that multiple companies can do is kind of just wild in itself.

**Andrew Guenther:** So my dad also worked in aerospace, and when I told him \[unintelligible 00:37:46.19\] company, he was like "You mean you're just a bunch of guys and you put some satellites in space?" Like "Yeah. Yeah, they just let us." You just apply for your FCC license, and let Noah know, and they're like "Yeah, go for it."

**Autumn Nash:** Which is like wild. There's no space license, or something?

**Andrew Guenther:** It's interesting, because there kind of is. It's governed by the FCC, because they control the radio waves. I got into like a whole conversation with somebody on Hacker News a while ago about this, because I just find this fascinating how the US finds really unique ways to have regulatory vectors over stuff like space. And the FCC is like the main body for that, because they govern the airwaves. So it's basically, if you want to transmit within the US, you need an FCC license. And if you're launching a satellite, you probably are going to want to transmit in the US, so you need a license from the FCC to launch a satellite.

**Autumn Nash:** It's wild, because I think \[unintelligible 00:38:47.21\] we've seen what happens when we don't have regulations... But then sometimes you're just like "Where did these things come from?" Like, the FCC is not what I \[unintelligible 00:38:55.15\] of your space license, you know what I mean? So that's like, who would have even thought? But also, at the same time - you know, when you're a kid and you think of space, you think of doing so much more to be able to launch something into space, and that's just wild that it's just like "Check with the dudes that do airwaves, and then you can put whatever you want up there."

**Andrew Guenther:** Yeah, even better - the FCC issued their first fine for space junk a couple months ago.

**Autumn Nash:** Oh, that's cool.

**Andrew Guenther:** The Federal Communications Commission, the champions of litter in space. \[laughter\]

**Autumn Nash:** But it's also interesting though, because so many things get launched, right? And even if it doesn't go wrong, there's just so much that doesn't go with your, like, rocket, or whatever. They're made to have parts that break off... So did people even think about what we're gonna do with all that at some point, and how we're gonna collect all that?

**Andrew Guenther:** It was just like "Let it all burn up." A lot of these satellites -- our satellites don't have propulsion. So after X number of years, the orbit decays, and they burn up, and that's... That's game.

**Autumn Nash:** Do they really just burn up completely?

**Andrew Guenther:** Mostly so.

**Justin Garrison:** what's the lifespan? We're talking like servers are like seven years. Like, I could buy a server, put it in a rack, and I hold it for seven years. You launch a spaceship, and how - not a spaceship. I don't know what the technical term -- it's obviously a satellite, because there's no propulsion, or anything. What is the lifespan of those first three satellites?

**Andrew Guenther:** \[00:40:16.20\] So the actual -- so there's a difference between orbit decay and mission life, because the components on board, in theory, will go out long before the actual orbit will decay. So I believe that satellites are slated to be a five-year mission from the onboard component perspective. But this is like -- that's still kind of like NASA-grade ratings. Ideally, you get way longer than five years. And then I think the orbital decay is like 15 years, closer to 10-15 years it'll take, before --

**Autumn Nash:** But do they completely dissolve? Because you know how the rovers -- like, one will live way longer than they're supposed to, and then one gets like too much dust, and then solar plates can't keep powering it. Also, I cried; I was so in my feelings about the rover... I was like "Noo, but I love your pictures...!"

**Andrew Guenther:** It's just out there, all alone...

**Autumn Nash:** I know...! It was so lonely, and I was so sad. I was so sad. My kids were like "What's wrong?" and I was like "The rover..."

**Andrew Guenther:** You build up feelings around these things. It's funny, because each of our satellites we name after a sidekick... The official designations are like Ghost 1, Ghost 2, Ghost 3, but we call them Robin, Goose and Chewy.

**Autumn Nash:** Oh my God, what if Goose dies? Like, I would be all, like --

**Andrew Guenther:** Yeah, Goose is ill-fated...

**Autumn Nash:** Are you trying to make us cry, Andrew? You had to name it Goose...

**Andrew Guenther:** That's definitely not the objective. This is just a plug that we have... We have a Slack bot that announces telemetry and new imagery, and it uses a picture of the appropriate sidekick, and speaks as if like "Goose checking in. Got new imagery."

**Autumn Nash:** You have a Slack bot with pictures? Andrew, hire me. Wait... You get paid to do this? I literally stalk all of James Webber, and all the different satellites, and like post them like a crazy person... Just -- we're best friends now. It's happening.

**Justin Garrison:** I mean, talk about like pets \[unintelligible 00:42:25.12\] right? This is the epitome of -- you have a 15-year decay... But also, $5 million for a five-year mission. A million bucks a year per satellite, and you are gonna get more than a million dollars of value or revenue from that... That's an interesting just calculation, to be able to say "Hey, this is how much it costs us to upfront it." And you've upfronted the money for the FCC license, and all the other things... Like, "We need to push this thing into orbit." It's just really amazing to really think about.

**Andrew Guenther:** Well, you want to talk about crazy scale - look at Starlink. They have some rudimentary propulsion, but they're even, I think, on a less than 15-year mission cycle, and they're launching thousands of those. It's just crazy.

**Justin Garrison:** Like Starlink, do you have satellites and satellite communication to help with that 90-minute delay, and will five satellites reduce that for you significantly?

**Andrew Guenther:** Yeah, so we have a radio for satellite-to-satellite communication. They're not enabled yet. But feasibly, yes. The more satellites you have, the better network you have, and you can kind of communicate in between. There's also proposals kind of going through for a larger network, so we could over encrypted communication talk to satellites that aren't ours, and kind of like everybody working together to get data down faster.

**Justin Garrison:** Would that be like the outronet? I don't know what you call that, instead of the internet.

**Autumn Nash:** You guys have to name it something cool. After Space Force, you can't just -- and like you named the satellite Goose... The bar is high.

**Andrew Guenther:** \[00:43:59.23\] Yeah, inter-satellite communication networks are definitely something that's up and coming, and trying to get off the ground. It's a bad joke...

**Justin Garrison:** I got the pun. I was late on that.

**Autumn Nash:** Are you about to dad-joke us? \[laughs\]

**Justin Garrison:** Who's the jerks in space? Is Starlink like -- do they just litter everywhere, and we can't see around them? Is there some other country that's like "Well, they're not working with the FCC, so they just threw --" If you can't answer it, that's fine, but I'm curious now, is there space beef between like satellite vendors now?

**Autumn Nash:** You're gonna get Andrew in trouble...

**Andrew Guenther:** I mean, there's only -- like, low Earth orbit is smaller than you think... And I would say, without naming names, the jerks are the people who are just launching tons and tons... Which is pretty much anybody who's looking to offer satellite-based internet. Satellite-based internet takes an absurd number of satellites... It's easy to pick on Starlink, because they were the first, but they're not the only... And that's going to continue to crowd lower Earth orbit, which again, is the most accessible orbit for people like us. And these things -- like, you can't understand an orbit out with accuracy multiple years. These things -- like, they're going to collide at some point. There will be collisions, and there have been close calls. And what's crazy is we got a call -- we actually got a call for one of our sats, and they were like "Hey, you're gonna pass really close to a Starlink satellite. Just heads up."

**Justin Garrison:** How close is really close? I think in space it's like you're hundreds of miles away... But no, this is really close, probably...

**Andrew Guenther:** Close enough that somebody called, right? \[laughter\]

**Autumn Nash:** Can you change the course of direction if you're gonna get too close? Or you're just kind of out of luck and you're gonna hit each other?

**Andrew Guenther:** Us, no. Starlink has some rudimentary propulsion, so they can do some stuff... Even the space station had to move to dodge -- I think there was like a Chinese satellite where they were like "Hey, there's a satellite that we have, and you need to move the space station so that our satellite doesn't hit it."

**Autumn Nash:** Just move the whole space station, no big deal.

**Andrew Guenther:** Yeah, you can just like shift altitude control a little bit, and... Yeah, just real fast.

**Justin Garrison:** But what's the heads up for that? Is that like you have 10 orbits, and then you're done? Or is this like "Hey, 90 minutes"?

**Autumn Nash:** How long does it take to move a space station? Like, this is wild...

**Andrew Guenther:** I don't know the answer on a space station, but for ours, it was just this like tense hour and a half, because we get that telemetry down, and then it's like "Alright, this is the orbit." And so we're sitting there, waiting, and --

**Autumn Nash:** Hope Starlink moves...

**Andrew Guenther:** Yeah. And then like 90 minutes later, we get that ping, and we're like "Ah, thank God..."

**Justin Garrison:** I could just imagine you're like wiggling the camera, trying to focus back and forth to get out of the way... "Maybe we can move something."

**Autumn Nash:** That goes back to like -- it is the lower cap of like $5 million, but still, that would really suck if somebody just runs into your $5 million space satellite...

**Andrew Guenther:** Yeah. Just game over, right?

**Autumn Nash:** Yeah, the work that you -- I mean, I can't imagine how much work it takes to get them into space, and then like the cost, and then someone just runs into it really quick. "My bad..."

**Andrew Guenther:** Especially for us, when it's like one of three. That's a 33% reduction in our total capacity, which is like super-meaningful to the business. Each of these satellites matters for us. I do have -- in terms of the bullies in space, I do have one other very funny anecdote... Because I have beef with the Vatican.

**Justin Garrison:** Hold on... \[laughs\]

**Autumn Nash:** Wow. That is a powerful person to beef with... Like, I'm here for it.

**Andrew Guenther:** The Vatican has a space program, fun fact.

**Autumn Nash:** What?! Okay...

**Andrew Guenther:** The Vatican has a space program... You can read all about it. It's called SPEI Satellites, funny enough... But it's SPEI. It's Italian, cut them some slack... But the humor of it is not lost on me. So they actually launched with -- the launched on the same rocket as one of ours... And so one of the processes you have to go through when you launch a satellite is you basically call up NORAD, and you're like "Hey, this unidentified object you're tracking in space, that's ours." They know who's who, what's what -- well, they don't know who's who; you've gotta tell them.

**Autumn Nash:** \[00:48:08.00\] Do they give you Santa's number when you call though?

**Andrew Guenther:** Yeah, yeah, that's the first thing. It's press one for Santa, press two to claim your satellite... \[laughter\]

**Autumn Nash:** Yes...!

**Justin Garrison:** But every time the call options have changed...

**Andrew Guenther:** Yeah, yeah, call options are changed. Press one for Santa, two for satellites. So when we launched, the Vatican called NORAD and claimed our satellite, incorrectly.

**Autumn Nash:** You got scalped by the Vatican?

**Andrew Guenther:** We got scalped by the Pope, man. We got scalped by the Pope. It's greatest meme of all time internally.

**Autumn Nash:** Dude... When you're like a great-grandpa, you should be like "This one time I worked in space, and then the Pope tried to steal my satellite..." Think about baller work stories...

**Andrew Guenther:** Coming from the outside, the conversation I had with our main space systems guy of like "How do we get our satellite back from the Vatican?" He's like "It's just a naming thing. It's not a big deal." I was like "No, tell me it's a big deal. I want to believe this is a huge deal."

**Autumn Nash:** You just wanted to start a fight with the Pope, didn't you? You were like "Send me to Italy. We will have this out."

**Andrew Guenther:** A hundred percent, yeah. We got beef.

**Justin Garrison:** So your satellite is forever -- NORAD always thinks your satellite is now...?

**Andrew Guenther:** No. So we managed to correct this clerical error, and we've properly identified... Yeah.

**Justin Garrison:** Clerical, that was good. That was a pun. \[laughter\]

**Andrew Guenther:** I just -- I'm far enough into dadville that they just roll out, and I don't even think about it anymore...

**Autumn Nash:** I was gonna say, are you a dad, Andrew?

**Andrew Guenther:** I am.

**Autumn Nash:** Dude, can we talk? Like, I went to talk at my kid's school, and they're like "Oh, cool. You're an engineer." But like, Andrew wins every time. My kids are like "Oh, you build Java", and the only thing I can say is that Java builds Minecraft. That's the only cool thing. Like, my kids don't care if I build Java. But when you get to say "I work in space", you win Coolest Career Day Dad ever, every time.

**Andrew Guenther:** I do it appreciate that I have a job that my kid kind of gets. I can be like "Satellites", and she's like "Yes. Space. Understood."

**Autumn Nash:** Like, rockets... Space... That's a whole childhood -- you know how they get into dinosaurs, they get into... Space is like a whole thing. That's like a chapter in childhood.

**Andrew Guenther:** But then she brings home pinkeye, and I'm like, "Come on, man..."

**Autumn Nash:** Dude, my kids brought home Hand-foot-and-mouth \[unintelligible 00:50:22.18\]

**Andrew Guenther:** I'm currently on drops for pinkeye, and it's just the worst...

**Autumn Nash:** Oh, my God... Why do they always get us sick? They're just like "Oh, we love you so much, and we're so cute."

**Andrew Guenther:** Please don't include this in the outro... I just imagined this episode is gonna end with this conversation on pinkeye...

**Autumn Nash:** Dude... Have you seen the meme where the alien is breathing in the lady's face, and it says "When your kid's sick...", and they're like "I love you!" and you're like \[unintelligible 00:50:49.14\] Okay, wait, before we leave - what's the craziest thing you've had to fix in space?

**Andrew Guenther:** Oh, this is a great one. So the craziest thing... So I mentioned these radios, that we have multiple radios on board, right? We have this super-high bandwidth one, and it's one way. And that's where that one and a half terabytes down comes from. We have this kind of like satellite to satellite, we have a much slower one that's more for like command and control sort of deal...

**Justin Garrison:** SSH.

**Andrew Guenther:** Yeah, that's where all the SSH magic happens. And effectively, the way this is all supposed to work is imagine like TCP, where your packets come down over this fast one, and then we send the x back up the slower connection. And we could not connect over that slower connection when we first launched. And so you basically like ran into flow control, where we would try and like downlink imagery, and it would give up after like a few megabytes... Because it's like "Oh, I'm not getting any x." And so I got pulled into that, and we basically had to -- we pushed this really small patch up to the spacecraft to basically like ignore x. Pretend x do not exist, and just blast this data down. Because we're -- I mean, we're a startup, and we've launched our satellites, and investors and customers are waiting for like those first pictures. And we're trying to like as quickly as possible--

**Autumn Nash:** A lot of pressure.

**Andrew Guenther:** \[00:52:09.27\] Yeah, as quickly as possible get these things down. So we ended up putting up this patch to basically ignore the x, and we ditched the file transfer client entirely on the ground, and we just started running packet captures. We just ran TCP dump on this thing, and just started to like built this catalogue of like terabytes of TCP dumps. And then we wrote a script that would basically analyze these and try to piece together files from the TCP dumps across multiple passes. So the same file, we get transmitted like 10 times, but as you can imagine, your packet loss from space is quite high...

**Autumn Nash:** Oh, my gosh...

**Andrew Guenther:** So it was the most infuriating thing to watch, because it's also this long tail... Like, we couldn't tell -- we didn't have the control to tell a satellite "Oh, we only need these five remaining packets." It would just blast down the whole thing, so you would get like 50% on one pass, then on the next pass 75, the 90 the 95, then 99, then 99.9. And because these bundles are encrypted, you need the whole thing. Like, you can't be like "Ah, screw that last packet." For encryption to work, you need the whole thing. So we like basically wrote this -- we call them DJPCAP...

**Justin Garrison:** Yeah, PCAP file, read it in and parse the data...

**Andrew Guenther:** Just spinnin' those PCAPS, yeah. Spinning those PCAPs. So DJPCAP was just trying as hard as it could to assemble from these TCP dumps, and that's how we got our first imagery. This issue has since been resolved, but the first imagery from our satellites was basically rebuilt through this crazy kind of bespoke process. And again, I think it kind of like goes towards the whole theme of the space segment moves much slower than we can move on the ground, so we're always trying to think of ways like "How can we deal with this on the ground? How can we fix this on the ground?" And I think that's probably the most harrowing story out of all of them.

**Autumn Nash:** What a way to get started...

**Andrew Guenther:** Yeah, yeah, that was a stressful couple of weeks... \[laughs\]

**Autumn Nash:** Oh, man, it was for weeks? And then I just feel like - images, it's so easy to mess up; to like mess up imagery. You know what I mean? You need high resolution to really be able to do things...

**Andrew Guenther:** Well, and then the even better wrench that got thrown into this is that some of the packets would be corrupted, so we would try and reassemble, and then we would dedupe multiple of the same piece of imagery to make sure it was the same on multiple passes... So it's almost like you kind of needed like two copies of an image to make sure that it was all good...

The other thing I will say is - so a lot of this work we did at one of our vendor partners down in Sunnyvale, and I took back to our office... They had Baja Blast there, and it was the first time I'd ever seen Mountain Dew Baja Blast in the wild... And when I tell you -- like, we completed that first piece of imagery, and my coworker and I were just like "Baja Blast time." And that is a core memory for me now, is "Baja Blast is success."

**Autumn Nash:** Love it.

**Andrew Guenther:** \[laughs\]

**Justin Garrison:** Awesome.

**Autumn Nash:** That is awesome.

**Justin Garrison:** Andrew, thank you so much for coming on the show. This conversation has been a rocket of a ride... \[laughter\] I had to go at it, it's alright. And I learned so much...

**Autumn Nash:** Justin, you're killing me.

**Justin Garrison:** Where can people find you to ask more questions, or -- I mean, I know OrbitalSidekick.com is the website for the company... But I know you're available, or at least somewhat social online... Where should people reach out and find you?

**Andrew Guenther:** Yeah, so I'm @codebrewed on Twitter. I also hang out in the Ship It Slack... I'll give you guys that Slack plug.

**Justin Garrison:** A great place to go.

**Andrew Guenther:** Yeah, a great place to go, so check that out. I'd say those are probably the two best places to get a hold of me.

**Autumn Nash:** And by people he means me, so we can be besties.

**Andrew Guenther:** Oh, I'm also Mastodon now. I'm on Mastodon, also as @CodeBrewed.

**Justin Garrison:** Awesome.

**Autumn Nash:** It was nice meeting you. That was so cool.

**Andrew Guenther:** It was great to meet you as well.

**Break:** \[00:56:06.13\]

**Justin Garrison:** I feel like that interview could have gone for at least two hours, because I had so many more questions, and every time I learned something new, I just wanted to dive into it even more.

**Autumn Nash:** I have to like fight myself from finding Andrew on LinkedIn, and like talking his ear off, because I know he has a day job, but... \[laughs\] I'm gonna try to like not be the obsessive podcast friend, and be like "We need to talk about it."

**Justin Garrison:** "Andrew, Andrew, we need to have another call." He's like "Oh, is the podcast okay?" "No, the podcast is fine. I've got three more hours of questions..."

**Autumn Nash:** Can we just have like another space episode? Can we have like the space continuum to continue the episode?

**Justin Garrison:** Well, anyone listening to the show right now, if you have topics or people you'd like to hear on the show, email us, alright? Shipit \[at\] changelog...

**Autumn Nash:** Like Andrew, in space?

**Justin Garrison:** Andrew, come back. \[laughter\] I mean, I'm actually -- now curious, like, the entire chain of the software supply chain... Are they doing signing and security? Is that even a thing, because it's isolated in space? I don't know, we didn't even go into some of those details. But I know there's a lot of components in running software on literally these metal devices flying through the air. That sounds just so fascinating in a lot of ways, that now whenever I have like a failed hard drive in a datacenter, I'm not going to grumble \[unintelligible 01:01:11.18\]

**Autumn Nash:** I was thinking that. I was like, okay, there's a lot of ways and reasons of writing software that makes me like severely nervous in production... But I didn't even think about how you break stuff in space. That's hardcore.

**Justin Garrison:** Or how you get around it. That's so cool.

**Autumn Nash:** Yes. That part where he was saying how they had to get down the packets, and they were all broken up and stuff... I was like "Oh man, trying to solve that in real time..." How do you solve for like "Hey, we're gonna send this up, and you have no control over dependencies, and how people are gonna keep something long-term or not?" And you have to make these decisions before you have -- I mean, I guess they have a lot of release notes, but kind of like, you don't know what's gonna happen in two years. A company could dissolve, and they could stop updating said software... And then what do you do? It's just running in space. That is a lot.

**Justin Garrison:** Yeah. For the outro. On this show, on today's episode, we'll talk about what I've deemed as fresh open source software; fresh OSS, I don't know what we want to call it... But some cool, something that you might want to look at. These are libraries or command line tools or something that we've just found that we thought was neat. And for this week, for mine, I was actually making some random TikToks about networking, and people replied with some tools that I had never heard of before. The first one is called Dogg, which is like, if you're used to looking up DNS names, and you're using Digg, someone wrote Dogg, which is a Rust CLI tool to look up similar tools. The command line syntax is similar, but it has cleaner outputs, or at least cleaner for a human to parse. And so that was the first one, which I had heard of, and someone actually replied back that there's another one called DogGo, or Doggo, which is dog written in Go, because they wanted different headers and things in the output. And so in both cases, they're Digg replacements that are a little more human-friendly, and I really liked that... Because sometimes when I'm using Digg, I'm just like "Alright, I should just use it", and then I'm looking at a paragraph of output and I don't know which part I need. And in this case, Dogg and DogGo were both a lot easier just to run. Same sort of syntax, look up a hostname, find an IP address, MX records, something like that, but much easier for me as a person to read the output and to filter it with things like grep and sed.

**Autumn Nash:** Also, I think it just shows how excited people are to rewrite things in Rust. I think Rust is really efficient and awesome, but I think if you ask people to rewrite anything in Rust, they will try to do it at this point.

**Justin Garrison:** \[01:03:46.14\] Yeah, there's a lot going on with rewrites of all the old tools in Rust... And some of them add functionality, some of them break what you might be expecting... But in my opinion, a lot of them are better, and that's just cool, to have tools that are easier to use.

**Andrew Guenther:** Not just that, but I hope that when people get more excited about open source projects, they're more willing to contribute to them, and maintain them, and to kind of give back... So I think it's really good, because Rust adds so much value, in like security, and being better performance-wise... And the fact that people are getting so excited about it means they'll have more tools for it, people will contribute more, and it will help it grow, so that's awesome.

**Justin Garrison:** Yeah. What do you have?

**Autumn Nash:** So I had to find a way to make first-graders think that Java was cool, and I needed to say other things besides Minecraft, and the fact that -- you know, Netflix.

**Justin Garrison:** But that is the coolest, so...

**Autumn Nash:** Yeah... Then you had to explain to them how Java and Minecraft work together, and that was a whole other thing... So I was looking for different projects that Java is the basis for, but that would appeal to a younger audience. So what kid doesn't love space? I love space, right? And you always have to be cool when you're going to your kids' class, because you have to like not let them down. You have to be the cool parent. And I was like "How do I become the cool parent?" So I've found this really cool Java open source project that is a NASA project. And I didn't know that NASA actually had open source projects, so that made me super-excited, because I love NASA... And it's a Java astrodynamics toolkit. It's an open source software library, but it has all these cool software components for space missions, like design trajectory, optimization, analyzing navigation and guidance and control systems... And it also does spacecraft simulation, including 2D and 3D visualization, and I just -- I thought it was so cool that this is not only like an open source project, but... Like, we all grew up learning about space, and that's like a phase that's up there with dinosaurs as a kid... And the fact that you could maybe contribute to this, and just see how it all works... And I was always a kid who wanted to take things apart and be like "Oh my God, look at all the cool parts on the inside." So just like the fact that this code lives and exists, and you can just see all the classes and methods that makes like a spaceship work - it just is unreal to me.

**Justin Garrison:** And then you could have just closed that loop of like "Now if you can put this inside of Minecraft, then you will have Minecrafts in space, or on the Moon, and you could make rockets, and..." That'd actually be really cool.

**Autumn Nash:** Yeah, I had like a class of first graders who were all trying to be engineers, okay? Like, I definitely converted like four little girls. We were gonna have like pink-haired engineer day. It was gonna be great.

**Justin Garrison:** That does sound good. Well, thanks everyone for listening to today's episode. Again, if you would like to come on the show or suggest a topic for the show, or know someone that you would like to hear on this show, please email us at shipit \[at\] Changelog.com. We do read the emails, and we get back to you. And not everything may be a fit for what we're doing right now, but we have a great lineup of guests coming on the show, and topics. So we're interested in that, but we're still just trying to find out more. And if you're wanting to share this show with people, please do, because we are restarting it now, and we want to hear from more people, and getting a larger audience to be able to learn more about what you're doing and what you're interested in. It helps us a lot just to know what to talk about, and what you'd want to see on a future show.

**Autumn Nash:** More space...

**Justin Garrison:** More space. That is one thing, for sure. So thank you, Autumn, for joining, and thank you everyone for listening, and we'll see you next week.
