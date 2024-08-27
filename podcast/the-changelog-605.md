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

**Autumn Nash:** That is so cool.

**Andrew Guenther:** We ship Nvidia hardware up to space. We're running Nvidia dev board in low Earth orbit.

**Justin Garrison:** I'm just thinking of Nvidia drivers now, and I'm like "Oh, that's the worst", like trying it on a Linux embedded system.

**Andrew Guenther:** Oh yeah, a Linux embedded system that you never get to touch again, right? It goes up and you're locked in.

**Autumn Nash:** If something goes wrong, how do you fix it, when it's like in orbit?

**Andrew Guenther:** Yeah, I mean, this really gets into redundant systems. So a lot of the components on board, there's at least two, our own component, so our own dev board - you know, there's one or two of those, but there's kind of like a main control computer that exists separate from ours, that kind of handles a lot of the boring stuff, like pointing the satellite, and doing the actual hard work of transmitting data back down to the ground... And then our dev board basically handles all that image processing, sending commands to the camera.

\[00:08:15.22\] So effectively, we have capabilities to like failover from one component to the other. Or if we're rolling out an upgrade, we roll it out to XCOM 2, and then we primary-swap to XCOM 1... So it's almost like an A/B test in space, right? Kind of like a canary. So you upload it to one of the XCOMs, you swap over to that, make sure everything still works - great. Roll it up to the second XCOM, everything still works - great.

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

**Andrew Guenther:** Oh man, there's so many great questions to unpack here... So I'll try and go at it one at a time. So one of the saving graces to some degree is that as we launch more satellites, they're all based on the same hardware designs. Very minor, minor revisions between them. Like, you have a satellite that works - don't mess with it. Continue to launch more of the same. But then also, on the flipside, when the first one goes up, and we realize "Oh, we really should have done some things differently", as we learn, that iteration cycle is even slower, so there's a lot of things that we have to kind of deal with on ground, and we're making notes for what the next gen hardware is going to look like, and additional concerns...

\[00:11:42.02\] And when you talk about what kind of packages are we going to use, that's a huge concern of ours. Again, it's running 18.04 in space, we're trying to do machine learning and data analysis, and a lot of those libraries move very fast. They're very quick to drop support for older operating systems... So we have to make the call as a small team, are we going to compile these ourselves? Are we going to build our own versions of these dependencies to maintain them? So we're very cognizant, especially on the onboard data processing side, of what libraries we pull in... More so than anywhere I've ever been. Because not only is maintenance a concern, size is a huge concern. Pushing software updates to space is hard. It takes a while, you're gonna test the hell out of it, and you want to make sure that it works. I always like to pick on Node.js, because you have like the Npm package system, where just everything sprawls out to infinity. You install --

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

**Autumn Nash:** Yeah. Like \[unintelligible 00:14:55.05\] in real life. It's awesome.

**Andrew Guenther:** Yeah, so it's important to not fall into the trap of "We're in space, so we're safe." And especially in that startup culture of like wanting to move really fast, and compete with these bigger guys. That's something that we're very cognizant of, and trying to find those right balances.

**Autumn Nash:** How do you make decisions, and what kind of tenets do you have to, I guess, develop? Because you both want to develop quickly, because everybody wants to innovate and develop quickly, and that's how you get an edge in your market... But also, how do you make that last for so long? And then how do you do it with like -- I was writing an automation script, and we were trying to get rid of like dependencies. So it's like "Okay, I won't use Panda, I'll use Python", you know, the things that come with Python. So trying to develop on that level on just a small automation script made it so much more complicated. So I can only imagine image processing...

**Andrew Guenther:** \[00:15:47.10\] It's a big push-pull, because you definitely want to try and keep your space systems as simple as possible, and we're very much breaking that mold by saying we're going to do imagery analysis on board of a satellite. And so it's definitely something that we're cognizant of. And we have this nicety that we can test a lot of things out in the ground segment. We can use those libraries on ground initially, before we make the call of, you know, "This is something that we want to run in space, so let's retrofit." We can use all those nice libraries, have 100 gigabytes of dependencies to prove out those analyses on ground... And then when we want to say "Okay, this is high value. We want to run it on board", we can take that step to say "Alright, let's strip this back. Let's make this bare bones. How do we leverage what's already on board to now ship this thing out to space?"

**Autumn Nash:** \[unintelligible 00:16:32.28\] working backwards.

**Andrew Guenther:** Yeah. Yup.

**Justin Garrison:** Fundamentally, a customer comes to you and says "I need you to look at something on the ground." You're not running customer code in space, where they're giving you a job to say like "Coordinates... Please send me this data", right?

**Andrew Guenther:** Yup, exactly.

**Justin Garrison:** You're gonna go "Point the iPhone 25 at those ground spots, and get this image back." It's gonna transmit down just like a terabyte a day out of this - you're just taking pictures constantly - and then you process that a little bit more, and then send them either raw data, or whatever it is that they're looking for, right? Like, that's the general pipeline here.

**Andrew Guenther:** Yup. You got it.

**Justin Garrison:** What was the benefit there of not making the satellite a dumb client, and putting intelligence in the satellite, and on the ground? Because it feels like you could put that either place, and you chose the hardest decision to put it in both places.

**Andrew Guenther:** Yes.

**Justin Garrison:** Like, there has to be value that you're getting out of doing that process before -- I mean, if you're just sending a terabyte... I don't know, was that just a big antenna with a satellite dish up there, just like beaming down \[unintelligible 00:17:28.21\] of pictures?

**Andrew Guenther:** So that antenna that actually performs that one terabyte a day downlink - we get a pass on that antenna every 90 minutes. So if you have a really critical, high-priority workload, and your objective is to deliver some insight to a customer as quickly as possible, you might not want to wait that 90 minutes. And even after that 90 minutes is up, it has to get to the ground, it has to be processed then on the ground before it finally gets delivered. So the idea being if we a) can prioritize - because we're also not able to get down all the data we may have on board with every pass. So it's kind of twofold. If you can say on board "Hey, I have very high confidence that there is a methane leak at this position", that is a much smaller piece of data, and there are other antennas that we can use to transmit that data more instantaneously... And then secondly, maybe you have a little bit less confidence, but if something is suspect, you can say "Alright, on our next pass this data skips the line. We're going to downlink that first, and we're going to make sure that gets analyzed as part of this pass, so we can get that information out as quickly as possible to customers." But it is definitely the hardest of all the options, you're right.

**Autumn Nash:** So kind of like how they're using machine learning to look through ultrasounds, but you're using it to like basically prioritize data from satellites to bring that down first?

**Andrew Guenther:** Yup.

**Autumn Nash:** That's really cool.

**Justin Garrison:** How do you debug that? Is that only like you have a dev box on your desk, and you're saying "Oh, I think this is what's happening"? At some point when you debug it, you just have to kind of poke at it... But I can't imagine -- like, that latency, you have a 90-minute window. I don't know how long that window lasts, where you're like "Oh, I've got a shell for 89 seconds. I've gotta jump on the box and like poke at something."

**Andrew Guenther:** Yeah, you can SSH into space for like a hot five minutes, and take a look around. So there has to be some planning ahead of time. If you want to run some set of debug scripts, you're going to want to know ahead of time, and just run that in an automated way, rather than just like maybe having a terminal open... Which we've done. We've done this, especially after the sats first went up, and we were trying to better understand the characteristics of the first one, and just get a sense of what was happening live... There was a lot of "Alright, time to SSH." \[laughs\]

**Justin Garrison:** \[00:19:47.09\] I can only imagine that constant Tmux session that's like "Oh, it's coming back around. Let me connect to it again. Hold on." That's just amazing.

**Andrew Guenther:** We don't have space for Tmux, man. It's a fresh shell every time. \[laughter\]

**Justin Garrison:** Your SSH hangs and you're like "Dang yeah...!"

**Andrew Guenther:** Yeah, yeah. \[laughs\]

**Justin Garrison:** Man, that is exactly what I would hope to be.

**Andrew Guenther:** Yeah, it's the dream.

**Justin Garrison:** There's so many challenges in this. What would you say is like one of the things that stood out to, something you didn't expect? Because you're going into this knowing this is going to be a hard thing to do, there's a lot of variables and things at play... What was something that surprised you about shipping software into orbit, that you're like "Wow, I didn't see that one coming"?

**Andrew Guenther:** Yeah, I think -- and maybe I was uniquely naive, in that... You know, I think everybody has that vision built up of like how NASA does things. And you imagine clean rooms, and this perfection, and just everything is immaculately tested... And not to say that there's not problems, but you have that vision of that much slower pace... And I think what was surprising to me is the speed at which we can move, and the amount of chaos that introduces, and that it's okay.

Like, there was a lot of thought put in up front around those failure modes, and understanding and basically protecting our future selves, so that when things do get chaotic and things do break, we have the levers that we can pull. So it's not clean rooms that -- I mean, there are clean rooms, but... You take a drill, do a test, and it's like "Oh man, we need to route this connection somewhere else", and somebody just like takes a drill to a frame, and they're like "Alright, let's send it to space." That just kind of like shatters your view of the way NASA does things... And I think that kind of goes to what I was saying earlier about this meeting in the middle of this startup culture wanting to move fast, and that entrenched aerospace culture of moving very, very slow. If we can launch a satellite for, say, $5 million, why are we going to run a $5 million on-ground test for that satellite, or a $10 million on-ground test for that satellite? We can launch three for that price. And if one of them works, we're great.

So I think that's kind of where that push and pull really comes into play, and I think that was really surprising to me, was just how much leniency there was towards moving fast. I didn't expect it to be able to move as fast as we've been able to move.

**Justin Garrison:** I wonder what the culture was like In the '60, where it's like "We're landing on the Moon..." They had to move fast. My grandfather actually worked on the Apollo missions, which is just like, his pictures were absolutely amazing. And I never got to hear stories from him of what the culture was like, but I can only imagine that at some point you're just like "No, this has to happen this decade." Someone said "We're going to the Moon." And the fact that so many people and so much funding and money was in place to do that... And now on the opposite side, where it's like, no one told you to do this; no one told you "This is the thing we have to do." And so the initiatives are very different, of like "Hey, we see where we can add value to people that maybe had to drive their truck for two days to go see this pipeline", or something like that. Like "Hey, I got you in an hour and a half. And you're gonna get your images, and they're gonna be processed, and we'll see all that stuff that maybe you couldn't see before." And that's just pretty amazing, to be able to add that value that quickly.

**Andrew Guenther:** Yeah, it's nuts. I mean, this is something that even 10 years ago wasn't possible. Launches have become way cheaper... $5 million is a lot, but in the grand scheme of like Silicon Valley VC money, that's not a lot. And it's become super-accessible for startups to launch payloads into space. It's high cap ex still, for sure, but it's possible, when it really just wasn't before. And I think, to your point, we're seeing that transformation in a lot of industries. For oil and gas, the state of the art was like once a quarter they would pay some kid trying to get their pilot's license to just like fly and look out the window of a Cessna, and like "Do you see any leaks?" "Nope." Right? That's what we're going up against. That's what we're replacing. It just feels like such a huge quantum leap forward for that industry... And we see that with customers; they're super-excited. I mean, a) because it's space, and it's cool, but also just, it is such a faster feedback loop than anything that they'd worked with before.

**Autumn Nash:** \[00:24:11.01\] That's wild, that you can do something in space that much quicker... Also, I think it's really going to add - I don't even know if I'd say add value, but it really sets you apart if you can move fast and cheaper, because of the market that we're in right now, and less VC funding, and higher interest rates... That's awesome that you've been able to add so much value, but also iterate faster, and I guess at a smaller cost... Even though $5 million isn't anything to like --

**Andrew Guenther:** Well, still our cap ex, but lower than it used to be cap ex.

**Autumn Nash:** Yeah. I mean, back in the day, the only people that launched anything into space was NASA. So the fact that it is even an industry that multiple companies can do is kind of just wild in itself.

**Andrew Guenther:** So my dad also worked in aerospace, and when I told him \[unintelligible 00:24:58.24\] company, he was like "You mean you're just a bunch of guys and you put some satellites in space?" Like "Yeah. Yeah, they just let us." You just apply for your FCC license, and let Noah know, and they're like "Yeah, go for it."

**Autumn Nash:** Which is like wild. There's no space license, or something?

**Andrew Guenther:** It's interesting, because there kind of is. It's governed by the FCC, because they control the radio waves. I got into like a whole conversation with somebody on Hacker News a while ago about this, because I just find this fascinating how the US finds really unique ways to have regulatory vectors over stuff like space. And the FCC is like the main body for that, because they govern the airwaves. So it's basically, if you want to transmit within the US, you need an FCC license. And if you're launching a satellite, you probably are going to want to transmit in the US, so you need a license from the FCC to launch a satellite.

**Autumn Nash:** It's wild, because I think \[unintelligible 00:26:00.18\] we've seen what happens when we don't have regulations... But then sometimes you're just like "Where did these things come from?" Like, the FCC is not what I \[unintelligible 00:26:08.21\] of your space license, you know what I mean? So that's like, who would have even thought? But also, at the same time - you know, when you're a kid and you think of space, you think of doing so much more to be able to launch something into space, and that's just wild that it's just like "Check with the dudes that do airwaves, and then you can put whatever you want up there."

**Andrew Guenther:** Yeah, even better - the FCC issued their first fine for space junk a couple months ago.

**Autumn Nash:** Oh, that's cool.

**Andrew Guenther:** The Federal Communications Commission, the champions of litter in space. \[laughter\]

**Autumn Nash:** But it's also interesting though, because so many things get launched, right? And even if it doesn't go wrong, there's just so much that doesn't go with your, like, rocket, or whatever. They're made to have parts that break off... So did people even think about what we're gonna do with all that at some point, and how we're gonna collect all that?

**Andrew Guenther:** It was just like "Let it all burn up." A lot of these satellites -- our satellites don't have propulsion. So after X number of years, the orbit decays, and they burn up, and that's... That's game.

**Autumn Nash:** Do they really just burn up completely?

**Andrew Guenther:** Mostly so.

**Justin Garrison:** What's the lifespan? We're talking like servers are like seven years. Like, I could buy a server, put it in a rack, and I hold it for seven years. You launch a spaceship, and how - not a spaceship. I don't know what the technical term -- it's obviously a satellite, because there's no propulsion, or anything. What is the lifespan of those first three satellites?

**Andrew Guenther:** So the actual -- so there's a difference between orbit decay and mission life, because the components on board, in theory, will go out long before the actual orbit will decay. So I believe that satellites are slated to be a five-year mission from the onboard component perspective. But this is like -- that's still kind of like NASA-grade ratings. Ideally, you get way longer than five years. And then I think the orbital decay is like 15 years, closer to 10-15 years it'll take, before --

**Autumn Nash:** \[00:28:02.05\] But do they completely dissolve? Because you know how the rovers -- like, one will live way longer than they're supposed to, and then one gets like too much dust, and then solar plates can't keep powering it. Also, I cried; I was so in my feelings about the rover... I was like "Noo, but I love your pictures...!"

**Andrew Guenther:** It's just out there, all alone...

**Autumn Nash:** I know...! It was so lonely, and I was so sad. I was so sad. My kids were like "What's wrong?" and I was like "The rover..."

**Andrew Guenther:** You build up feelings around these things. It's funny, because each of our satellites we name after a sidekick... The official designations are like Ghost 1, Ghost 2, Ghost 3, but we call them Robin, Goose and Chewy.

**Autumn Nash:** Oh my God, what if Goose dies? Like, I would be all, like --

**Andrew Guenther:** Yeah, Goose is ill-fated...

**Autumn Nash:** Are you trying to make us cry, Andrew? You had to name it Goose...

**Andrew Guenther:** That's definitely not the objective. This is just a plug that we have... We have a Slack bot that announces telemetry and new imagery, and it uses a picture of the appropriate sidekick, and speaks as if like "Goose checking in. Got new imagery."

**Autumn Nash:** You have a Slack bot with pictures? Andrew, hire me. Wait... You get paid to do this? I literally stalk all of James Webber, and all the different satellites, and like post them like a crazy person... Just -- we're best friends now. It's happening.

**Justin Garrison:** Like Starlink, do you have satellites and satellite communication to help with that 90-minute delay, and will five satellites reduce that for you significantly?

**Andrew Guenther:** Yeah, so we have a radio for satellite-to-satellite communication. They're not enabled yet. But feasibly, yes. The more satellites you have, the better network you have, and you can kind of communicate in between. There's also proposals kind of going through for a larger network, so we could over encrypted communication talk to satellites that aren't ours, and kind of like everybody working together to get data down faster.

**Justin Garrison:** Would that be like the outronet? I don't know what you call that, instead of the internet.

**Autumn Nash:** You guys have to name it something cool. After Space Force, you can't just -- and like you named the satellite Goose... The bar is high.

**Andrew Guenther:** Yeah, inter-satellite communication networks are definitely something that's up and coming, and trying to get off the ground. It's a bad joke...

**Justin Garrison:** I got the pun. I was late on that.

**Autumn Nash:** Are you about to dad-joke us? \[laughs\]

**Justin Garrison:** Who's the jerks in space? Is Starlink like -- do they just litter everywhere, and we can't see around them? Is there some other country that's like "Well, they're not working with the FCC, so they just threw --" If you can't answer it, that's fine, but I'm curious now, is there space beef between like satellite vendors now?

**Autumn Nash:** You're gonna get Andrew in trouble...

**Andrew Guenther:** I mean, there's only -- like, low Earth orbit is smaller than you think... And I would say, without naming names, the jerks are the people who are just launching tons and tons... Which is pretty much anybody who's looking to offer satellite-based internet. Satellite-based internet takes an absurd number of satellites... It's easy to pick on Starlink, because they were the first, but they're not the only... And that's going to continue to crowd lower Earth orbit, which again, is the most accessible orbit for people like us. And these things -- like, you can't understand an orbit out with accuracy multiple years. These things -- like, they're going to collide at some point. There will be collisions, and there have been close calls. And what's crazy is we got a call -- we actually got a call for one of our sats, and they were like "Hey, you're gonna pass really close to a Starlink satellite. Just heads up."

**Justin Garrison:** \[00:31:58.28\] How close is really close? I think in space it's like you're hundreds of miles away... But no, this is really close, probably...

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

**Autumn Nash:** Do they give you Santa's number when you call though?

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

**Andrew Guenther:** \[00:35:59.12\] I just -- I'm far enough into dadville that they just roll out, and I don't even think about it anymore...

**Autumn Nash:** I was gonna say, are you a dad, Andrew?

**Andrew Guenther:** I am.

**Autumn Nash:** Dude, can we talk? Like, I went to talk at my kid's school, and they're like "Oh, cool. You're an engineer." But like, Andrew wins every time. My kids are like "Oh, you build Java", and the only thing I can say is that Java builds Minecraft. That's the only cool thing. Like, my kids don't care if I build Java. But when you get to say "I work in space", you win Coolest Career Day Dad ever, every time.

**Andrew Guenther:** I do it appreciate that I have a job that my kid kind of gets. I can be like "Satellites", and she's like "Yes. Space. Understood."

**Autumn Nash:** Like, rockets... Space... That's a whole childhood -- you know how they get into dinosaurs, they get into... Space is like a whole thing. That's like a chapter in childhood.

**Andrew Guenther:** But then she brings home pinkeye, and I'm like, "Come on, man..."

**Autumn Nash:** Dude, my kids brought home Hand-foot-and-mouth \[unintelligible 00:36:51.12\]

**Andrew Guenther:** I'm currently on drops for pinkeye, and it's just the worst...

**Autumn Nash:** Oh, my God... Why do they always get us sick? They're just like "Oh, we love you so much, and we're so cute."

**Andrew Guenther:** Please don't include this in the outro... I just imagined this episode is gonna end with this conversation on pinkeye...

**Autumn Nash:** Dude... Have you seen the meme where the alien is breathing in the lady's face, and it says "When your kid's sick...", and they're like "I love you!" and you're like \[unintelligible 00:37:18.09\] Okay, wait, before we leave - what's the craziest thing you've had to fix in space?

**Andrew Guenther:** Oh, this is a great one. So the craziest thing... So I mentioned these radios, that we have multiple radios on board, right? We have this super-high bandwidth one, and it's one way. And that's where that one and a half terabytes down comes from. We have this kind of like satellite to satellite, we have a much slower one that's more for like command and control sort of deal...

**Justin Garrison:** SSH.

**Andrew Guenther:** Yeah, that's where all the SSH magic happens. And effectively, the way this is all supposed to work is imagine like TCP, where your packets come down over this fast one, and then we send the x back up the slower connection. And we could not connect over that slower connection when we first launched. And so you basically like ran into flow control, where we would try and like downlink imagery, and it would give up after like a few megabytes... Because it's like "Oh, I'm not getting any x." And so I got pulled into that, and we basically had to -- we pushed this really small patch up to the spacecraft to basically like ignore x. Pretend x do not exist, and just blast this data down. Because we're -- I mean, we're a startup, and we've launched our satellites, and investors and customers are waiting for like those first pictures. And we're trying to like as quickly as possible--

**Autumn Nash:** A lot of pressure.

**Andrew Guenther:** Yeah, as quickly as possible get these things down. So we ended up putting up this patch to basically ignore the x, and we ditched the file transfer client entirely on the ground, and we just started running packet captures. We just ran TCP dump on this thing, and just started to like built this catalogue of like terabytes of TCP dumps. And then we wrote a script that would basically analyze these and try to piece together files from the TCP dumps across multiple passes. So the same file would get transmitted like 10 times, but as you can imagine, your packet loss from space is quite high...

**Autumn Nash:** Oh, my gosh...

**Andrew Guenther:** So it was the most infuriating thing to watch, because it's also this long tail... Like, we couldn't tell -- we didn't have the control to tell a satellite "Oh, we only need these five remaining packets." It would just blast down the whole thing, so you would get like 50% on one pass, then on the next pass 75, the 90 the 95, then 99, then 99.9. And because these bundles are encrypted, you need the whole thing. Like, you can't be like "Ah, screw that last packet." For encryption to work, you need the whole thing. So we like basically wrote this -- we call them DJPCAP...

**Justin Garrison:** \[00:39:55.05\] Yeah, PCAP file, read it in and parse the data...

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

**Break**: \[00:42:32.24\]

**Justin Garrison:** So today on the show we have Anita Zhang from Meta. Anita, you are an engineer D, manager D is your title. Is that correct?

**Anita Zhang:** Yup.

**Justin Garrison:** I think that's fabulous, as a Linux user and a longtime restarter of services. Tell us about what you're responsible for at Meta.

**Anita Zhang:** Well, I support a team that basically -- well, my manager supports the Meta's Linux distribution. I like to call it operating systems. It sounds better. But we primarily contribute to Systemd, to eBPF-related projects, building out some of the common components at the OS layer that other infrastructure services build on top of.

**Justin Garrison:** So you're the kernel of Meta's infrastructure.

**Anita Zhang:** We have like an actual kernel team to do the kernel, but... One layer up, I guess.

**Justin Garrison:** \[laughs\] One layer above that. So describe the infrastructure, describe the sources. I have been following what Facebook and Meta have been doing for a long time as a Red Hat user at other places, and seeing the upstream contributions... But I know many people to this podcast may not know what that infrastructure looks like, and what you actually do.

**Anita Zhang:** Yeah, I mean, we've been around a while. We personally -- the company owns millions of hosts at this point. A mix of compute, storage, and now the AI fleet. Teams primarily work out of a shared pool. So we have a pool of machines called Twshared, where all of the container jobs run. There are a few services that run in like their own set of host prefixes, but for the most part the largest pool is Twshared. A lot of our infrastructure to support this scale is homegrown.

**Justin Garrison:** I don't know anything off the shelf that's gonna do a million hosts.

**Anita Zhang:** Yeah... Me neither.

**Autumn Nash:** That's amazing. So Meta has their own flavor of Linux, I guess?

**Anita Zhang:** No, we actually use CentOS for production, all of our production hosts, and even inside the containers we're using CentOS. Desktops are primarily some flavor of Fedora, Windows or macOS.

**Justin Garrison:** And what does that look like for what you're doing at the fleet level? You're provisioning the OS, or have some tooling to provision the OS, and from talks that you've given that I've watched - you had a great talk at Scale, by the way... If anyone wants to see that talk, it's on the Scale website. But you're doing upgrades. If I want to upgrade a million hosts, I'm like "Hey, I needed to roll out a new version of the operating system", that's gonna take a little while. There's a lot of processes and there's a lot of risks there, right? Because you could be causing other things to fail. So how do you do that in a safe way, and at that size?

**Anita Zhang:** You know, we've gotten a lot better at it over the years. When I started, we were doing like CentOS 6 to 7, and I think that probably took like a year or two to actually reach over like 99% of the fleet. And there's always that trailing 1% that for some reason they can't shut down their services, or they don't want to drain \[unintelligible 00:48:52.01\] traffic, and things like that. But now we're able to complete I'd say like 99% of the fleet in a year or less. We started doing a lot of validations sooner, so now we actually hook in Fedora ELN into our testing pipeline, and we start deploying parts of Fedora ELN and running our internal container tests against them. And so \[unintelligible 00:49:14.13\] a few system-wide distribution changes that will be ready once CentOS -- I guess now CentOS Stream 10 is going to be released later this year.

**Justin Garrison:** Describe Fedora ELN. Why is that different than what you're running?

**Anita Zhang:** So Fedora ELN is -- man, I don't know what exactly it stands for. Fedora-something Next. So it's going to be like the next release of Fedora that will eventually feed into things like CentOS Stream.

**Justin Garrison:** Basically like the rawhide equivalent of like "Hey, this is a rolling kind of new thing", but eventually that gets cut down. How does that relate? Or I'm actually really curious - CentOS Stream, when they moved to this rolling release style of distribution, how did that affect how you're doing those releases and doing upgrades for those hosts? Because you have to at some point say "This is the thing we're rolling out", but the OS keeps going.

**Anita Zhang:** \[00:50:08.04\] Yeah. I'd say the change to Stream didn't really affect us much, because we were already kind of doing rolling OS updates inside the fleet. So when new point releases get released, we have a system that syncs it to our internal repos, and then updates the repositories. And then we have Chef running to actually pick up the new packages and things, and just updates depending on what's in those repositories. So the change to stream didn't really change that model at all. We're still doing that picking up new packages on like a two-week cadence.

**Autumn Nash:** Do you guys use a lot of automation that you build in-house?

**Anita Zhang:** Yeah. We kind of have to.

**Justin Garrison:** The repo syncing - I had a project at an animation we had \[unintelligible 00:50:46.25\] that we would sync all the repos internally, it all sits on NFS, and then we mount everything to NFS to pull in repos... And I forget, it was like a Jenkins tree of syncing jobs that would all run to like register a system, and pull down 300 or something repos that we would sync every night, and like "Okay, let's fetch all the files now." And then squirrel those away somewhere on a drive, and then host them, so that everyone else can sync to it, and then have it like rollout to the testing fleet. It's a lot of data, and it's a lot of stuff that you just have to -- as packages get removed from upstream, and you're using them in places, I'm assuming you have some isolation there, because as far as I know, most of your workloads are containerized on Twine, on Twshared as like the base infrastructure, right?

**Anita Zhang:** Yup. So containers, they don't get the live updates that the bare metal hosts get. So users can just find their jobs in a spec, and for like the lifetime of the job, the packages and things that go into it don't change. I mean, there are certificates that also are used to identify the job; those get renewed... But we have a big push to get every job updated at least every 90 days. Most jobs update more frequently than that.

**Justin Garrison:** Is that an update for like the base container layer, or whatever they're building on top of?

**Anita Zhang:** Yeah, they'll actually have to shut down their job and restart it on like a fresh container, and they'll pick up any new changes to the images, or any changes to the packages that have happened in that time.

**Justin Garrison:** Can you describe Twshared for the audience as well? ...because that's one of the things that I think is really fascinating, that you have your own container scheduler, and as far as I know, all those containers are running directly with Systemd. You're not having like a shim of like an agent... I mean, you have agents, but go ahead and describe it.

**Anita Zhang:** So I used to work on the containers team, the part that's actually on the hosts. The whole Twine, our team, consists of like the scheduler, and there's like resource allocation teams to figure out which hosts we can actually use, how to allocate them between the teams that need them... And then on the actual container side, we have something called the agent, that actually talks directly to the scheduler and translate the user specification into the actual code that needs to get run on the hosts. And that agent sets up a bunch of namespaces and starts Systemd, and basically just gets the job started.

**Justin Garrison:** And that's Systemd inside the container?

**Anita Zhang:** Yeah. So the bulk of the work that is done in the agent, at least where the Systemd set up, is it translates the spec into Systemd units that get run in the container. So if there are commands that need to run before the main job, those get translated to different units, and then the main job is in like its own unit as well. And then there's a bunch of different configuration to make sure the kill behavior for the container is the way we expect, and things like that.

There's a sidecar for the logs specifically. So logs are pretty important, as you'd imagine, to users being able to debug their jobs... There is a separate service that runs alongside the container to actually make sure that no logs get lost. So those logs get preserved in the hosts somewhere.

**Autumn Nash:** \[00:54:07.27\] Twine sounds really cool, too. I was reading the white paper about that yesterday...

**Justin Garrison:** How does that work with like the sidecar? I would assume - I've never really actually done this side the of... Like, Systemd inside the container, running on Systemd... So if I log into a host, and not the container, I see just services all the way down, right? They just look like standard Systemd units, they're just isolated from each other, right?

**Anita Zhang:** Yeah. So the container job, it will be like one Systemd unit, and you'll see a bunch of processes in it, and you'll also see a couple of agents that we run, but mostly just the usual Systemd PID 1 one inside the container, and their own instance of Journald, Logind, and all that stuff.

**Justin Garrison:** And that was the question I actually had, is like, I assumed that Journald would handle the unit login. But you said there's a sidecar that I'm assuming is like getting that logs out to Journald on the host, or at least some way so that you don't lose those logs inside the container.

**Anita Zhang:** Yeah.

**Justin Garrison:** That's cool. At that point, it's just native Systemd, really? Like, you're just using every feature of Systemd to isolate and run those jobs... And then you have an overarching scheduler, resource allocator, all that stuff.

**Anita Zhang:** Yeah, pretty much.

**Justin Garrison:** One of the things that I've found super-interesting in the white paper was host profiles, where different workloads - you basically like virtually allocate clusters, I guess, for a lack of better... Entitlements is what you call them, for like "Hey, this job gets this set of hosts", and then you can dynamically switch those hosts to needing different kernel parameters, file systems, huge pages, and you have a resource allocator that does that, as far as I understood... How does that affect what you're doing? You have a set of host profiles, you say "Hey, you can pick from a menu", and then we know how to switch between them? How does that typically work?

**Anita Zhang:** So that part's a little newer than from the time I was in containers. So you create a host profile, you work with the host management team to do that, and then you can, I believe, specify it in your job spec. And then when you need to either restart your job, or move the job around, they actually have to drain the hosts. Most host profiles require a host restart, because things like huge pages - you need to restart the hosts to apply... And then the jobs gets started back up on the host with the host profile you're asking for.

**Justin Garrison:** How does that affect you as the OS team? Is there anything that you're doing specifically for that?

**Anita Zhang:** Not specifically, but they do -- so the host agent actually builds a lot of their components on top of Systemd as well. So they've been doing things like moving more configuration out of Chef into host agent, where it's more predictable... So things like Systemd, Networkd configs, or the sysctl configs that also go through Systemd as well.

**Autumn Nash:** Is that a Linux penguin on your sweatshirt? Because that's the coolest sweatshirt I've ever seen if it is.

**Anita Zhang:** Oh, yeah. The \[unintelligible 00:56:55.19\] hoodies... Yes, this is the one that Justin was talking about.

**Autumn Nash:** That is so cool.

**Justin Garrison:** Yeah, they had them at Scale, and I was very jealous, because they're cool. And this is an audio podcast, so no one knows what we're talking about... But basically, there's a bunch of little, small tuxes inside the hood of the hoodie.

**Anita Zhang:** If anyone from Scale is listening, they probably have hoodie.

**Autumn Nash:** I'm sad that I missed your talk at Scale. It was on my schedule, and then I think -- I forget what we were doing, but somehow I ended up somewhere else, and I'm super-sad to miss your talk. Do you get to contribute a lot to open source? Because Meta seems really big on contributing, or releasing things for free, I guess.

**Anita Zhang:** Yeah... I'd say at least the way the kernel team and our team operates is that we're mostly upstream first. So everything that we write, we write it with the idea that we're gonna be upstreaming it. And that's how we managed to keep our team size small, so that we don't have to maintain like a bunch of backports, things like that.

**Justin Garrison:** \[00:57:59.16\] But you have to wait for it though, right? You're like "We're gonna write this internally, we're gonna hope this gets upstreamed, and then we have to either wait for the release to consume it. Or we're just going to keep running it", but then if upstream needs changes, you have to kind of like merge back to it.

**Anita Zhang:** Yeah. So the kernel - we actually build and maintain internally, so we can kind of pull from the release whenever you want. And we can kind of do the same thing with CentOS too, because we all contribute to the CentOS Hyperscale SIG. That's where any bleeding edge packages that we want to like release immediately, it goes into like the Hyperscale SIG.

**Autumn Nash:** It's really cool that you guys contribute to upstream first, but also kind of maintain your own stuff, so that way you can kind of pick and choose if you want to put something -- you know, it's like a bug fix that you need earlier, you can already apply that.

**Anita Zhang:** I mean, I'd say Meta is super-into release frequently... And so if we always stick to like upstream, then we'll always get like the newest stuff, and we're less likely to run into some obscure bug from like two years ago, that was really hard to debug.

**Justin Garrison:** How does release frequently, and a million hosts go together? Because you mentioned that it takes about a year to basically rollout an update to every host? But if you're pushing out updates to the OS every month, then you have like 12 different stages of things that are going through release, and that makes it really hard to debug... Like, "Oh, what version are you on? Did we fix that bug somewhere else?" How do you manage that?

**Anita Zhang:** Yeah, so it's mainly the major upgrades that take like up to a year. And we're about to go from CentOS Stream 9 to 10. That will probably take a long time than if we were just doing our rolling OS upgrades. So the thing about CentOS is that we do maintain kind of like ABI boundaries. So we expect that the changes that Red Hat and CentOS are making to packages are mostly like bug fixes that won't break compatibility in the program... And that's remained true. We haven't run into a lot of major issues with rolling OS upgrades. Most issues come from like when we personally are trying to pull in like the latest version of Systemd or something, and we're rolling that out. Those we have to do with more intention.

**Justin Garrison:** You mentioned an AI fleet... From what I've heard Zuckerberg talk about is like Meta has more GPUs than anyone else in the world, basically. How do you manage that? Not only how are the drivers installed, because Linux and Nvidia aren't always known to be the best friends, but then how do you like isolate those things, and roll out those changes?

**Anita Zhang:** Yeah, I'm probably not like the best person to ask about it, but we do you have a pretty sizable team now of production engineers dedicated to supporting the AI fleet and making sure that it's stable, and that our train jobs don't crash, and things like that...

**Justin Garrison:** Under Twshared, do they just show up as a host profile? Or do I get an entitlement that says "I need GPUs for this type of workload"?

**Anita Zhang:** It's more like the latter. So even though everything's in Twshared, we know what kind of machine type they are. So you can specify what purpose you're using the machine for, and things like that.

**Autumn Nash:** What's the difference between a production engineer and a system engineer?

**Anita Zhang:** Well, I'm a software engineer technically, I guess...

**Justin Garrison:** The title? \[laughs\]

**Autumn Nash:** So a software engineer, then there's a production engineer, and a system engineer...

**Anita Zhang:** There are a lot of titles...

**Autumn Nash:** I know...

**Anita Zhang:** I'd say production engineer and software engineer are the most similar. Especially in infrastructure, when I was in the containers team, the production engineers and software engineers pretty much all just did the same stuff. We were all just focused on scaling, and making the system more reliable. I'd say in like a product team, production engineers focus more on operationalizing and making the service production ready, while the software engineer is kind of like creating new features, and things like that.

**Autumn Nash:** \[01:02:00.09\] Okay, that's interesting.

**Justin Garrison:** One thing I've found fascinating about some of the talks you've given and information is the fact that Meta is still notably an on-prem company. You have your own data centers, you have your own regions, you have machines... And it doesn't seem like you try to hide that from people. You don't try to abstract it away. At least I haven't ever seen a reference to like "It's our internal cloud." No, it's like a pool of machines, and people run stuff on the machines. And the software and the applications running on top of it are very much like a -- this is just like a Systemd unit; you're just running it containerized.

What other types of services do you have internally that people need? I mean, I saw references to things like sharding for like "Hey, we need just fast disk places, and we need some storage and databases externally." But what are the pieces that you find that are like common infrastructure for people to use?

**Anita Zhang:** Yeah, I mean, I'd probably dispute the fact that people have to understand kind of like the internals of how the hosts and things are laid out... So the majority of services - we're talking like millions of hosts in Twshared - they are running containers. And I'd say a lot of their knowledge about the infrastructure probably stops at when they write the \[unintelligible 01:03:11.00\] and to the point where they go into the UI and look at the logs.

So if you're just writing like a service, a lot of that's abstracted away from you. You don't even have to handle load balancing, and stuff. There's a whole separate team that deals with that as well.

**Autumn Nash:** That's awesome.

**Anita Zhang:** Yeah. But if you're on the infrastructure side, sometimes you need to maintain those widely-distributed binaries on the bare metal hosts. So us running Systemd, or the team \[unintelligible 00:34:07.21\] that does the load balancing, they also run a widely-distributed binary across the fleet on bare Metal. There's also another service that does specifically fetching packages, or shipping out configuration files, and things like that. But yeah, most of the services people write, they're running in containers. Databases - they have kind of their own separate thing going on as well. Most of them are moving more into Twshared as well, but they have more specific requirements related to draining the hosts and making sure there's no data loss.

**Justin Garrison:** Right. All those shards... Making sure that enough of the data replicas are available.

**Anita Zhang:** Yeah. But they're like one of those teams that - they just want their own set of like bare metal hosts as well, to do their own thing with. They don't care about running things in a container if they don't have to.

**Justin Garrison:** Yeah, typical DBAs. \[laughs\] What would you say are some of the challenges you're facing right now on the OS team, or just in general on the infrastructure?

**Anita Zhang:** The AI fleet's always a challenge, I guess. Making sure jobs stay running for that long. I think every side event is kind of an opportunity to see where we can make our infrastructure more stable, adding more validation in places, and things like that. Just removing some of the clowniness that people who have been here a long time have kind of gotten used to.

**Justin Garrison:** And you mentioned that as far as like moving more things out of something -- traditional configuration management like Chef, and moving it into more of like a host-native binary that can manage things, I will say more flexibly... And I guess more predictably. I think you've mentioned that, where it's just like "Yeah--"

**Anita Zhang:** Yeah, making things more deterministic, removing cases where teams that don't need to have their own hosts, shifting them in Twshared, so that they're on more common infrastructure... Adding more safeguards in place, so that we can roll things out live, and stuff like that...

**Justin Garrison:** You also mentioned in the -- again, referencing the paper, because I've just recently read it... All of your hosts are the same size, right? It's all one CPU socket, and I think it was like 64 gigs of RAM, or something like that.

**Anita Zhang:** Yeah, that's probably not true anymore. But yeah, the majority of our compute fleet looks like that, yeah.

**Justin Garrison:** Okay, so the majority of Twshared is like "We have one size", and you're just like "Everyone fit into this one size, and we will see how we can make that work", right? Because you can control the workloads, or at least help them optimize in certain ways... Because not all AI jobs or big data jobs are going to fit inside of that envelope.

**Anita Zhang:** \[01:06:10.12\] Yeah.

**Autumn Nash:** Especially with databases in AI.

**Anita Zhang:** Yeah. And we're trying to shift to a model now where we have bigger compute hosts, so that we can run more jobs side by side, stacking... Because realistically, one service isn't going to be able to scale to like all the resources on the hosts forever... So yeah, we're getting into stacking. Yeah.

**Justin Garrison:** So yeah, it's more like a bin packing approach and saying like "Hey, maybe we do have some large hosts", I'm assuming especially for the jobs that do need like "Hey, I don't fit in \[unintelligible 01:06:38.14\] of RAM", and a local NVMe isn't fast enough for whatever reason, or is going to cause the job to run longer.

**Autumn Nash:** Do you think AI is going to change the way that Meta does infrastructure, because you're adapting to the change in how much bigger the hosts you need, and how much more GPUs, and all that kind of stuff?

**Anita Zhang:** Oh, I mean, even in like the past year, we've made a few notable infrastructure shifts to support the AI fleet. And it's not even just like the different resources on the host, but all of the different components, a lot of them have additional network cards, managing how the accelerators work, and how to make sure they're healthy, and things like that.

**Justin Garrison:** Yeah, I suppose once you have any sort of specialized compute or interface, whether that's network, some fabric adapters, you always have snowflakes in some way, where it's like "Hey, this is different than the general compute stuff."

**Anita Zhang:** Oh, yeah, for sure.

**Justin Garrison:** How has that affected your global optimization around things? And I know - again, the paper is old now. It's like 2020, I think is when it was published... Which is probably looking at 2019, 2018 data. But in general, something like 18% overall total cost optimization because of moving to single-size hosts, because you're just like "Hey, our power draw was less overall, globally." So I think the web tiers was like 11% -- I should have had it up in front of me... 11% more performance by switching to host profiles and allowing them to customize the host. Have you had things like that over the past four years, with these either optimizations in specialized compute, that have allowed you to even gain more global optimization? Because at a million hosts, a 10% gain in efficiency or lower power requirements is huge. That's like megawatts of savings.

**Anita Zhang:** Yeah, we are also working on our own ASICs to do like inference and training. That's probably the place where we're gonna see not just like the monetary gains from developing in-house, but also on the power and resource side as well.

**Justin Garrison:** That's fascinating.

**Anita Zhang:** That's starting to come out this year in production.

**Justin Garrison:** Have you been enabling that through FPGAs that you allow people to program inside the fleet? Or how does that -- how do you come out of like "Hey, we have an ASIC now, and it does some specialized computing tasks for us"?

**Anita Zhang:** Yeah, that's a better question for the silicon team.

**Justin Garrison:** That's right.

**Anita Zhang:** I only see the part where we actually get the completed chip, but I'm sure they're doing their development on FPGAs.

**Justin Garrison:** And at some point they have like "Here's a chip, go install it for us. And here's a driver for it." Right? They need to give that to you as a host team.

**Anita Zhang:** Oh, we have a team that actually I work pretty closely with, that writes \[unintelligible 01:09:22.04\] over the kernel. I think the accelerator is just over PCIe.

**Autumn Nash:** Meta sounds awesome. It sounds like you get to actually really dive deep on what you're learning, and like your part of infrastructure, or development... Because it seems like you have teams for everything.

**Anita Zhang:** Yeah, you can really go as deep as you want to here.

**Justin Garrison:** Yeah, I really want to see an org chart now. There's so many of these teams that just keep popping up, like "Oh, yeah, no, we have a team that does that."

**Autumn Nash:** I know. That's cool that it almost gives you enough abstraction that you can really focus on your specialty, because you get to really be deep in that area, because you're not having to worry about all the extra components, I guess.

**Anita Zhang:** \[01:10:05.12\] Yeah. That's my favorite part. I mean, some people are just really into developing C++, or like the language. But then I'm on the infrastructure side; I just really like working directly with hosts.

**Justin Garrison:** And you've been there for a little while now, right?

**Anita Zhang:** Almost eight and a half years at this point.

**Autumn Nash:** I feel like people go to Meta and stay there forever... Because you probably get to get really good at whatever you're doing. Plus, I feel like it would be cool to talk to those other teams, because when you have questions, they must be really good. If they're so specialized in that area, then they must know so much about that when you go to like collaborate with other teams.

**Anita Zhang:** Yeah, it's super-nice \[unintelligible 01:10:41.00\] Like, literally anyone, if you have a question. Everyone's super-nice about helping you out, as long as you're nice, too.

**Autumn Nash:** What did you do before Meta? Or is this like -- have you worked at Meta your whole career?

**Anita Zhang:** Yeah, I started here out of graduation. I did one internship before I started here full-time.

**Justin Garrison:** What are you looking forward to working on in the next year? Are there big projects or big initiatives that you would like to tackle? Or even things in the open source, or like things that you want to give back and make sure other people know about?

**Anita Zhang:** I mean, I'm always interested in doing more stuff with Systemd. I think there's still a bunch of components internally that could be utilizing Systemd in more ways, making sure that we're on a common base. That's kind of the main general goal that I'm always going to be focused on, I guess.

There are also some bigger -- I mean, Journald, I've been trying to get us to replace our syslog completely, and move entirely to systemd-journald. That's an ongoing effort.

**Justin Garrison:** That was one of my best claim to fames at Disney Plus, was I disabled our syslog. I was like "No, we're just doing Journald now", and it saved us so much just like IO throughput on the disk, and everything... And there was a lot of problems with it, too. Maybe we weren't ready to do that, but I was like "We can't ship Disney Plus until our syslog's off."

**Anita Zhang:** Yeah, I wanna be there.

**Justin Garrison:** It was great. It was a great feeling one day, when I'm like "I don't need this anymore. I don't need our syslog."

**Anita Zhang:** I mean, \[unintelligible 01:12:17.20\] Systemd Networkd was pretty cool, but... I mean, now that that's done, I can just like be happy with it. There's probably some more stuff we're going to be doing with like systemd-oomd, the out of memory killer. I think we're about ready to get Senpai upstreamed into Systemd. Senpai is like a memory auto-resizer that we wrote... And I don't think that that's been open-sourced in any way. I mean, we have like an internal plugin to do that with the old \[unintelligible 01:12:48.23\] I think it's time to get that into systemd-oomd as well.

**Justin Garrison:** Is that for resizing the container, the cgroup, and saying how much memory they have available? Or is that something different?

**Anita Zhang:** It's a way to kind of poke a process and make sure that they're only using the amount of memory that they actually need... Because a lot of services and things will allocate more memory than they need.

**Justin Garrison:** Interesting. Like a "Get back in line. You don't get that memory."

**Anita Zhang:** A little bit.

**Justin Garrison:** Yeah. Have you been doing anything with immutable file systems, or read-only, or like A/B switching hosts for -- Fedora has Silverblue... I use a distro called Bluefin, which is kind of built on top of that, which does like A/B switching for upgrades to do reboots every time. It sounds like you're doing rolling updates, so you would still be writing packages to disk instead of like flipping between partitions.

**Anita Zhang:** I mean, we're trying to shift to like more of an immutable model internally. We have something called \[unintelligible 01:13:48.15\] And right now we're rolling out a variation of \[unintelligible 01:13:51.08\] It's similar to -- the goal is like kind of an immutable file system, but it's making strides to get there. We still have to rely on Chef to do a lot of configuration, but a lot of it has shifted to a more static configuration, that is more deterministic and gets updated at a cadence where we can more clearly see what the changes are.

**Justin Garrison:** \[01:14:20.03\] And I was asking that because leading into you said you want more Systemd stuff, and I'm curious if you're trying to use things like Systemd system extensions, or sysext, or whatever it's called, that are like layering different things on top of Systemd... Which is typically for an immutable file system, but still allow changes to happen.

**Anita Zhang:** Yeah. I haven't looked too deeply into what that team's been up to... But I do know that they did make use of some of the bleeding edge Systemd features to build these images, and things like that. We're not using Systemd sysext just yet. I mean, I wouldn't count it out.

**Justin Garrison:** Yeah. It's one of those things that looks really interesting, especially if you're trying to move more into immutable filesystem layers... Lik, "Hey, I still need to configure this. How do I do that in a composable, immutable way?"

Well, Anita, this has been great. I'm just nerding out, because I'm trying to learn all the things that I've done in the past, and still doing in the future... And I think it's great that Meta is not only doing this at like just a core level of just like "Hey, we just have Systemd, and things run in that", but also giving back upstream with the Systemd builds, and all the stuff that you've been publishing in the white papers, which Autumn and I were reading, and talks, but also just the open source work... So I think that's fascinating. And we didn't even get to talk about eBPF really that much... Because that's a whole other topic.

**Anita Zhang:** Oh, yeah... \[laughs\]

**Autumn Nash:** You have to come back. I think Meta gets a really bad rap for a lot of things, but I don't think that you guys get enough credit for the amount of open source you guys do, and the white papers... The white papers you guys have written on databases and the database contributions alone is amazing. And there's been so many things given away for free, so people can gain knowledge. I don't think Meta gets enough credit for that.

**Anita Zhang:** Yeah, I think from the engineering standpoint we just kind of get the warm fuzzies when people actually use and like the stuff we write...

**Autumn Nash:** That's like the best part of being an engineer.

**Justin Garrison:** Well, I find it fascinating because Meta is one of the few places that doesn't sell the things that they talk deeply technically about. Amazon and Google and Microsoft are like "Hey, we've built this amazing thing. Now go buy it from us." And Meta is like "No, we're solving our own problem, and we're just giving it back to you." And that's a really \[unintelligible 01:16:27.25\]

**Autumn Nash:** That's what I'm saying. I think that people talk about what Meta does wrong, but rarely do people talk about the fact that they'll be like "Hey, I just figured this really cool way to do this at a crazy scale. And here it is. You can read about it and learn about it for free." And I'm like "That's awesome." So... I think I've learned a lot from the different database papers, and different white papers that you guys have released... And it's crazy that you guys released an entire AI model for free. It's insane.

**Anita Zhang:** Yeah.

**Justin Garrison:** Yeah, I've been running a Llama. I haven't done Llama 3 yet though, but it's on my list of things to play with.

**Anita Zhang:** Awesome.

**Autumn Nash:** I feel like white papers are a great way to learn and really get in-depth for something, so you can go and like do that project or try something out, because you get to see why that solution was made for that problem, and kind of like figure out how to use the projects that you guys release. I think it's cool the way you do that.

**Anita Zhang:** Yeah, I really appreciate the academic side of things.

**Justin Garrison:** Yeah. And then having a podcast, we get to have people come on like you, that are hands-on all the time, and just like figuring out those problems. So this has been great.

**Autumn Nash:** That's so cool, to read a white paper and then get to talk to you about it.

**Justin Garrison:** Anita, thank you so much... And we'll reach out, I'm sure, in the future with more things. Maybe in the future we'll talk about eBPFs and ASICs, and more work that you're doing on the OS layer... Because that's just a fun thing, and seeing how it grows.

**Anita Zhang:** Alright. I'm looking forward to it. Thank you.

**Autumn Nash:** Have a great day.

**Break**: \[01:17:41.23\]

**Justin Garrison:** Thank you so much, Gina Häußge, for joining us on the show today. Can you tell us about yourself and how you got started with creating OctoPrint?

**Gina Häußge:** Yeah, so you already said my name, but I'm also known as foosel around the world, and especially around the net... So if anyone has come across that name, then yeah, that's me. Hi. And yeah - well, OctoPrint. That happened basically when I got myself a 3D printer back in late 2012, and found myself in the position that it was sitting here next to me in my home office, producing noise, producing fumes, and annoying the hell out of me, because I just wanted to not sit next to it while it was doing stuff, but it took hours to finish whatever it was doing... And so I figured there must be some way to just put it in another room, but still monitor it from afar, through Wi-Fi and such... And I figured there's probably something out there that does this. It turns out nope, there wasn't something like this. And I happened to be a software engineer, so that became a bit of my vacation project over Christmas, pretty much... And I threw it on GitHub after that in January, and thought I was done. Back then it was just a really, really basic thing... Monitoring temperature, already having this feedback loop where you also had some webcam implementation and all of that, to be able to see what your 3D printer was doing while it was running through your jobs, and some basic file management and such... But definitely way smaller a project than it is now, over 10 years later.

I threw it on GitHub up, and within a week or so the emails started coming in, and the feature requests started coming in. Then it took over my life, and now I've been doing it full-time for almost 10 years, and crowdfunded for -- wait, we do have 2024 now, so that must be eight years, I think... Yeah, eight years full-time crowdfunded work and an open source project.

**Justin Garrison:** That's awesome. That's one of those success stories of open source and crowdfunding. That's not a common thing, where it's like "Oh, one person started a project, and now you can actually make your living off of this hobby, or originally hobby sort of thing." That's really awesome just to hear that. The community around it has come together to be able to support such a cool project.

**Gina Häußge:** Yeah, and it's always something that I can talk about at parties, even if people don't know what 3D printing is, or what open source is. If I tell them people give me money even though they don't have to, then I always get interest from people around me. \[laughs\]

**Justin Garrison:** 2012... What printer was even available 2012? That's like the CNC cupcake machine.

**Gina Häußge:** In my case it was an UltiMaker that was - yeah, a big, wooden box. No heatbed...

**Justin Garrison:** Yeah, no one even knew what to do there.

**Gina Häußge:** Very slow, and very weird... And the filament was still thicker... Like, it printed with the three-millimeter stuff, which actually was 2.85 millimeters, but still, yeah, almost twice the diameter of what we use these days, mostly... So 1.751.

**Justin Garrison:** It's like melting crayons.

**Gina Häußge:** \[01:25:47.24\] Yeah. \[laughter\] It was weird when I got my first roll of filament, of 1.75-millimeter filament in my hands; it felt so weird, and not good, and like it would break just by looking at it and such, because I was just used to all of this 2.85. And then I think last year or so I threw out all of the old 2.85 that I still had, and look at it, and it looked so heavy, and strong, and "What? I was able to print with that? No way." So yeah, things really changed.

**Justin Garrison:** So in 10 years of OctoPrint, how many printers do you support? It seems like it grows every time I check it out?

**Gina Häußge:** Yeah, so the thing is that most printers out there actually run on open source firmware, and have more or less agreed on a communication protocol. I say more or less, because a lot of the printer vendors actually adjust the firmware, often without really knowing what they are doing, with the result that they break the firmware in the process, and then things get really tricky for the users, because then usually they do not know how to fix it, and... Yeah, in the end, that is always when I'm very happy that I also built a plugin system into OctoPrint, because that allows us to work around these things, so that people can just -- if they have a printer like that, and also happen to know how to code or can find someone who can see the issue and work around it, or maybe if it's a large enough community, then maybe I can also do that... Just build a little plugin that pretty much translates from the broken firmware into something that is more standard-conform.

And that way - yeah, pretty much everything that is old out there is supported by OctoPrint, but these days it's a bit more tricky, because a whole bunch of printers are now currently coming out that have a full-blown host system... So OctoPrint is a so-called printhouse, and a lot of printers now come with something similar fully blown on board. So they only now have a Wi-Fi interface, they often have an integrated full graphical display and such, and it is really tricky now to access these and use them with something that the vendor did not plan on... Which is a bit sad.

**Autumn Nash:** That's how my son's printer -- well, he has a toy box, so it's meant for little kids to use with their iPads, so in a way it kind of monitors, but it kind of makes it limited what you can do with it, because it comes with its own software, and everything.

**Justin Garrison:** Yeah, I switched off from Ender Pro to a Bambu. And the Bambu is pretty much self-contained...

**Gina Häußge:** Closed source?

**Justin Garrison:** Yeah, closed source... And I had such a hard time, because I had so many printers in the past that I always wanted them to be open source, and I wanted them to work certain ways, and I always spent more time fiddling with them than using them in printing... And so I saw recommendations for the Bamboo and I'm like "I'm gonna try it. I'm gonna go with this one. I know it's closed source, they have a whole ecosystem of stuff..." And I think the problem is going to be when things break, and I can't fix a problem, or I can't troubleshoot and find a community around "Hey, how does this work?" It's all just gonna be like "Oh, well, here's a janky fix we have, that shows you how to do something."

**Gina Häußge:** There's good news for you, though. Someone wrote a plugin that allows Bamboo printers to work with OctoPrint.

**Justin Garrison:** Really?

**Autumn Nash:** Oh, that's awesome!

**Gina Häußge:** Really.

**Autumn Nash:** I really want a Bamboo. So that's why I'm just like...

**Gina Häußge:** I'm not sure if it works with all of the models and such, but it's THE plugin developer, basically, on OctoPrint. He's the one with the many plugins.

**Autumn Nash:** I keep watching everyone's videos on Twitter and like TikTok, and I want a Bamboo so bad, but I'm like -- I don't want to get locked into the software. Yeah.

**Gina Häußge:** I'm not touching that with a 10-foot pole. I saw one in-person with a buddy, and mechanically, I was very, very impressed, but then also this news hit recently - well, not recently; that's almost been a year now also, I think... Where they had this funny security issue where some printers suddenly fetched the wrong stuff from the cloud, and started printing in the middle of the night some models from strangers... And that is just something --

**Autumn Nash:** I did not hear about that.

**Gina Häußge:** \[01:29:57.05\] Yeah, and if stuff like this happens, then this is a big, big no for me. And also the part with all of what 3D printing is these days, what 3D printing has come to over the last 10 years - that was done on the shoulder of open source. And now all of these companies - it's not just Bamboo, it's a bunch of others as well - are just rolling in and trying to lock everything down, and trying to lock everything in, and creating their own little gardens... And it's just not the way that I want to see all of this happening. I'm a bit afraid that we will lose all of the open access that we have now if stuff continues like that.

**Autumn Nash:** I think open source as a whole, like databases, everything has gotten really weird with where do we go from here, with having companies in open source stuff...

**Justin Garrison:** License changes...

**Autumn Nash:** Yeah. It's been very interesting.

**Justin Garrison:** Now, back to OctoPrint for a bit... I saw you had a release last week. What does that release process look like? Because you have this huge system that supports all of these printers, and you have these plugins, and all of these features... How do you actually go about releasing and testing that, to say like "This is a new release of OctoPrint?"

**Gina Häußge:** So it should be obvious that it's pretty much impossible to test every possible printer, firmware, plugin, operation system, starting state of software situation. So what I do before I actually roll out the full release is there goes a long, long phase of release candidates. And OctoPrint has a release branch system built in, so if you feel fine with testing stuff that is not necessarily fully stable yet, then you can just switch over to another release branch, and then you will get release candidates whenever I push those out. And they actually get the same procedure that I do for every single release, and I will go quickly over it later as well.

But the idea behind that is that if I have something like 1,000-2,000 people out there testing a release candidate and putting it through several years of print duration over the course of the release candidate phase, and then I can be pretty sure that a lot of these combinations that I would never be able to test have been tested. And yeah, it usually takes something like three to four release candidates until no more bugs come in... And at that point, then I declare this stable.

And of course, after I've pushed out a stable release -- so the current stable version is 1.10, but we are now already at one point 1.10.1. So there are bug fix releases that I also push out. Those do not go through a full release candidate phase, again, but they only get bug fixes and maybe small minor improvements of existing functionality. They do not get new features, they do not get big changes... They obviously also get security fixes, stuff like that, but I try to really limit what goes in there... And if it feels too risky, then it goes into the next stable release that will actually get the full release candidate phase again.

And what I do for every single release is -- so OctoPrint can basically run anywhere where you can run Python. But most people run it on a Raspberry Pi, so that is also what I concentrate on for testing. And there is this dedicated image that someone else is maintaining, Guy Sheffer, for OctoPrint, which is called OctoPi. And a lot of people confuse the image with the software and the software with the image, which also causes a lot of complications in support... But anyhow, so OctoPi is the most common environment that OctoPrint will be installed on out there.

So what I have here is I built myself a little test rig that has three Raspberry Pi threes, which is the current basic option that I suggest... So get the three, because that basically is the best thing that you can get, the lowest supported version. And if you want something with more power, then of course you can get something else, but the three is like the base version that I look at.

\[01:34:05.07\] So I have three Raspberry Pi threes there, and all of these have a little card adapter in there that can be switched through USB, either to act as a mass storage device through a host, on the one end, or as an SD card on the other hand. So that is slotted into the SD card slot of each of the Raspberry Pi's, and all of these then go into a USB hub to a fourth Raspberry Pi, a Raspberry Pi 4, actually, which I call the flash host. And that thing also has control over the little powered USB hub, through which I power the three Raspberry Pi's. And now I can individually power them on and off, and I can also individually unmount and mount their SD cards, and flash them, without having to physically release the SD card, and push it into a flashing stick... That is what I did until 2020, and it was driving me nuts.

**Justin Garrison:** Well that's what I've been doing. No, this sounds fascinating. I don't even know you could have like an SD card on one hand, and it's like connected to the USB on the other side, and you can switch it back and forth.

**Gina Häußge:** Yeah, one of these things costs me $100, but they exist, and... Yeah, a little --

**Autumn Nash:** Hey, sometimes that $100 is worth it.

**Justin Garrison:** Yeah. It saves how much time...?

**Gina Häußge:** Yeah, I mean, I have three. That was really worth the money that I spent on that, because what I do on every release is basically I flesh a whole bunch of starting versions on the Raspberry Pi's. Like OctoPi version x with OctoPrint version y. And then I look if I can upgrade to the release to be from that version, through all of the regular update mechanism. And for that, of course, I need not only flash the SD card, but also provision it with the Wi-Fi credentials, and then SSH into that thing, and do all of that... And all of this is automated now, thanks to this little test rig that I built. So I just tell it "flash device a to this version of OctoPi, make sure OctoPrint is at that version, and also switch it to this release branch, and then please also fire up the browser when it's done with that."

And so before every release, I have this huge checklist in my tooling, and go through all that... And of course, the usual stuff, like create new tags, create a change log, make sure the translation is up to date, the German one - this is the only one that I maintain. Everything else needs to be supplied by people who actually speak the language fluently that they are targeting. Also add \[unintelligible 01:36:35.20\] names, and all of that.

And then there's also always a whole test matrix that I write down in JSON, that gets rendered into a little table, and that then tells me exactly what command line I have to enter into my scripting, so that all of this will be done. Then I wait, then a browser window pops up, then I click "Update", then I look if everything works... And once I've gone through all of these, usually something between 7 to 10 test scenarios, which used to take a whole day, and now takes less than an hour, if I'm lucky...

**Justin Garrison:** Wow. That's cool.

**Autumn Nash:** Your automation is very impressive.

**Gina Häußge:** It saves me so much time. Every single release, I'm sitting here and I have this huge smile, because that saved me so much time. Yeah, and I also have a blog post about this test rig...

**Justin Garrison:** Does it have pictures?

**Gina Häußge:** It has pictures.

**Justin Garrison:** I need to find that, so we can add it.

**Gina Häußge:** I can drop you the link, and you can put it in the show notes.

**Justin Garrison:** Yeah.

**Gina Häußge:** And what happens then is at some point I'm through all of this, and then I'm happy, and stuff, and then I do the regular release thing. So I just click on Release on the GitHub release, I have already filled in the change log on all of that... And what now happens is a whole workflow runs through GitHub Actions, which first of all runs the whole test suite against everything, the unit tests are done, the end-to-end tests are done... And if all of this is green, and stuff is actually even released on PyPI and such as well, it triggers the test rig again. Because what it will do now is it will automatically build an updated image with the new OctoPrint version, so a new OctoPi version, with the new OctoPrint version. All of that will happen in GitHub Actions.

\[01:38:26.17\] And then when this image is built, then the flash host in my network here at home on my desk will be triggered to download this image, fire it against the Pi, flash it, run the end-to-end tests against it, and if that is green, I get a little an email in my inbox that says "Hey, this image tested green. Do you want to release it?" And if I then click "Yes", then it will be released to the wild basically.

**Autumn Nash:** This is like the software engineer's dream. You've found something that you're interested in. You've built it over like Christmas break, and then you solved this awesome problem, and then you automated it and solved all these problems to make it efficient. It's so cool. I'm so impressed.

**Justin Garrison:** How many core maintainers are on OctaPrint? Is it just you?

**Gina Häußge:** It's just me.

**Justin Garrison:** What software were you writing before OctoPrint?

**Gina Häußge:** Enterprise Java stuff?

**Justin Garrison:** There you go. So you went Java to Python, basically.

**Gina Häußge:** Yeah. Python was self-taught. I started when I was -- yeah, my career was a bit weird. I started actually working at university because I wanted to do a PhD... And I worked at university -- so in Germany it's like you have some work, either you are teaching or you are doing something administration, and at the same time, you're working towards your PhD. And I ended up in the administration part. So I was administering the whole department's servers, all of them on really old Unix; not Linux, Unix machines. The main server was older than me. And not really finding much time for my PhD, but automating a lot of stuff back then, even already for the administrative tasks, with Python.

And then at some point I decided "Yeah, okay, so the PhD thing isn't happening. I'm not getting really enough time to work on that." And to be honest, I was more drawn to doing something, like really with my hands, and not just writing stuff, and having students do the stuff with their hands. So I ended up as a software engineer in the industry, and ended up writing a bunch of software like in Java, IPTV-related actually for a big telecommunication company... And that went on for half a decade, and then I got myself a 3D printer, and the rest is history. So...

**Autumn Nash:** That's so cool.

**Justin Garrison:** And you said you've been crowdfunded for eight years now...

**Gina Häußge:** Yeah.

**Justin Garrison:** So eight years ago you had to make this decision to leave your job and go do --

**Gina Häußge:** That decision was forced on me, because the thing was 10 years ago already I left this Java job, because I was hired by a Spanish company who also was vendor of 3D printers back then. They found me, they found OctoPrint, they liked what I was doing, and they hired me full-time to work on that back in 2014. But then in 2016, they ran out of money, and have since also gone under completely, as far as I know... So they had to let me go. And now I found myself in the position that I had been doing OctoPrint for almost two years, at this point, full-time. Like, it had grown a lot the amount of work that it needed, maintenance work, community and all of that had grown... But yeah, I was no longer getting paid for it. So it was the decision that I had to do, either try to do it as a side project again, which was an absolute no at this point already, because when I was still doing it as a side project, the first two or so years, that was already bad for my health... Drop it all together, which was something that I really did not want to do, and go back to a regular, normal nine-to-five kind of job, or do something that I never thought I would ever do, and try to just take the step into the darkness, where I did not know at all what was going to happen and try to do this crowdfunded, and basically self employed, and... Yeah, I figured if I would not at least try that, I would probably kick myself for the rest of my life, and asking myself what could have been... So I jumped into the cold water, and did it. And so far, it's been working.

**Justin Garrison:** \[01:42:39.25\] I do find it interesting that the commercialized spin wasn't even an option for you there. You could have tried to raise money and say "This is gonna be a product. I'm gonna make a new business out of it", and you have this open core model, sort of like paid plugins, whatever you want to do... So many companies do that. And that's how they get started, because it was a side project, or it was something they were interested in. And for you, it was like "I either abandon it, or I do it all community." And that's awesome.

**Gina Häußge:** Yeah. I'm really not that big of a fan of this whole open core thing... And personally, I also felt like I could not really do that, because I forked off of open source software... So the part that talks to your printer was something that I basically took from a slicer, of all things, because that already was talking to -- \[unintelligible 01:43:26.11\] had a communication part that I could just take over... A lot of people had contributed, so going like "Yeah, I'm going to close this down now, and we are only going to keep an open core" - it just feels felt wrong, and to this day feels wrong. And I believe in open source, and I find it a bit weird that it's still news for people out there, that yeah, open source in general should be something that should be funded. We shouldn't have to jump through hoops by selling stuff around it, because what we do with maintaining open source is already a full-time job.

**Justin Garrison:** Now, I don't know if you can go into details, but where does your funding come from? Is that from recurring businesses that say "Hey, we want to pay for you to --"

**Gina Häußge:** No, that's mostly users. I have some business sponsorships, but most of the people are really just -- yeah, your average OctoPrint user, who has one or two or something printers, and just likes what I'm doing, and throws me something between one to five bucks per month. And if you have a whole lot of people who do that, then this matters.

So...

**Justin Garrison:** Do you know how many installs you have, or roughly how many --

**Gina Häußge:** Yeah, so I have anonymous usage tracking built into OctoPrint; all of this also self-built, completely GDPR okay-ish, and only on my own servers, with my own tech stack and all that... And this is completely opt in, however. So if people do not say "Yes, it's okay to track me", then I will never know about the install. But according to that, I have around 150,000 instances out there... And based on some fun installed stats from the Piwheels project, who suddenly saw huge download spikes on the packages they host for Raspberry Pi, whenever I pushed out a new update, I know that the number is likely around 10 times higher.

**Justin Garrison:** Yeah. I was gonna say, 150,000 opted in.

**Gina Häußge:** Yeah.

**Justin Garrison:** That is usually a very small percentage of people that were like "Yes, I will let you get this information." That's awesome.

**Autumn Nash:** Which means it's probably like even more people...

**Justin Garrison:** Well, yeah. So if you estimate ten times more, that's... 1.5 million? I could see that. That's totally not even out of realm.

**Gina Häußge:** The first time that I saw the first numbers come in, after the first release with the anonymous users tracking, I literally hid under my desk, because that was just... I felt so much responsibility in that moment, and it felt so heavy, literally heavy on my shoulders. I just had this -- I just had to hide. So I just sat down under my table, and breathed deeply, and took a minute...

**Autumn Nash:** \[01:46:11.19\] I hope that your success story -- I hope people hear about it, because that's so cool that you... I feel like you did the moral right thing, that people say that you can't do and still be successful... And you not only have been successful, but just as like an engineer, people are using something that you made; tons of people. And they like it so much that they want to pay you for it. That is so cool, just to see that many people using your stuff.

**Gina Häußge:** Yeah, and I also consider it my life's work. I mean, I don't know if I will do this forever, especially not given the whole open source printer situation that we talked about briefly... Because at some point, I might just get pushed out of the market by a tendency to locking everything down... But yeah, it definitely feels like I have done something that actually has helped people, which is not something that I can say about my previous job, I have to say...

**Justin Garrison:** \[laughs\] Enterprise Java, helping people? I don't know...

**Gina Häußge:** Yeah...

**Justin Garrison:** Sorry, Autumn. No shade.

**Autumn Nash:** A lot of stuff runs on Java, okay...?

**Justin Garrison:** A lot of stuff does. It's just, when you mix those two words, of enterprise and Java, I don't have any good memories.

**Gina Häußge:** It's more the enterprise bit also that gets me nervous in hindsight.

**Justin Garrison:** Yes, yes. It's more the enterprise than the Java, for sure.

**Gina Häußge:** The Java itself was okay. I mean, you can also build good software in that, and you could also build performant software in that, and it's not as slow as people always said... But on the other hand, I also have to say that with Python, everything got even faster... Not in the run speed, but in the development speed. So much less overhead, and --

**Justin Garrison:** Well, that's just because your variable names aren't sentenced long. It's just... \[laughs\]

**Gina Häußge:** You didn't see the first kind of Python that I wrote when I was writing Java during the day, and then at night... So a bunch of stuff is still not in snake caps, but in the other one, so...

**Justin Garrison:** Camel case...

**Gina Häußge:** Came case, thank you. Yeah. Because - yeah, I mean, I was a Java developer.

**Autumn Nash:** Going back and forth, I always mess up like the for loops in certain things. You can tell I've gone back and forth too many times...

**Gina Häußge:** I can top that. I mean, OctoPrint pretty much is a web application, and the backend is written in Python, but the frontend is JavaScript... And switching between Python and JavaScript is almost as bad as switching between Python and Java... Because I go back to Python, I start putting semicolons behind every single line, and I go from Python to JavaScript, and I just try to start my blocks with colons instead of braces... It's just annoying.

**Autumn Nash:** It's so funny... There's certain things that you can definitely tell that you've gone back and forth between two languages when you look at yours, and you're like "Damn it, I did it again." \[laughs\]

**Gina Häußge:** Yeah. And it happens daily. Just yesterday, I can't remember what exactly it was, I just remembered that yesterday I was again "No, Gina, this is not Python", when I was editing a JavaScript file...

**Autumn Nash:** I do that all the time.

**Gina Häußge:** It's tricky.

**Justin Garrison:** So where do you want to bring OctoPrint from here? What's the next thing that you would like to do? What is the next sort of big -- it's not just... I mean, more printers are fine... I mean, I still think that you have influenced that standard of communication by having this early project so long that was able to talk to all these printers. You have this plugin system... What's the next thing you want to do? What's the next cool thing that you're like "I would love if OctoPrint could do this"?

**Gina Häußge:** \[01:49:41.08\] There's a bunch of stuff that actually needs to be done, which boils down more or less to taking care of some tech stack situations, because I'm still on a very old version of all of the stuff that runs the UI... But because of the plugin system, it's really tricky to update that, or to swap that for something new... Because all of the UI of all of the plugins out there would suddenly stop working. And I have spent a lot of thought into how to approach this, and especially how to best get this working, and I'm still in the process of doing this... This is one of the bigger parts that I'm working on.

Also, for the better part of the decade, actually, I've now been also working on a new communication layer, and that is also a very tricky thing to pull off... And I also have had really bad luck with it, because every time that I actually get on it and get it to a point where I'm almost ready to like -- I'm 80% or 90%, something happens.

So the first time I ran into a complete and utter problem with my whole approach, because of some firmware issues out there that I wasn't aware of... So I had to scrap everything and start anew. The second time I lost the job and had to go crowdfunding. The third time I ended up in a breakup after over 15 years of a relationship... The third time - or fourth time, I don't remember - something like COVID happened... So I'm almost too scared now to work on it anymore, but...

**Autumn Nash:** That's a lot.

**Gina Häußge:** It's like this huge project that really needs to get done to make everything more modular, and to be able to make it easily adaptable to new developments out there, and to possibly also swap the whole communication stack out to target something else, and serial communication... Like something like network or so. But the only problem is that it is a project in and of itself... I don't know English at this time of the day. And as I already said, I am the only maintainer, so I also have to take care of all the bug fixes, all the security fixes, all the other new features, all of the community management, architecture, stuff...

**Autumn Nash:** How do you push all the developers and different people that are making the plugins to the next version, so you can eventually do an update?

**Gina Häußge:** I deprecate stuff, write big, big nasty warnings into change logs, and hope that someone actually reads them, and that at some point, some versions later remove the deprecated stuff after it was logging warnings and warnings and warnings to the logs for several months... And if stuff then breaks, plugin developers can suddenly react quite fast, I learned.

**Justin Garrison:** Only after it breaks.

**Autumn Nash:** Yeah. Nobody listens to the warnings for like 5 years, 10 years...

**Gina Häußge:** I have this quite nasty situation that -- yeah, Python 2 to Python 3.

**Autumn Nash:** That was such a horrible jump, though. Like, it was so bad.

**Justin Garrison:** Was? It's still going on. \[laughs\]

**Gina Häußge:** And I was right in the middle of it, because all of the plugins out there were Python 2-only. OctoPrint was Python 2-only. And it took a long, long time to get OctoPrint up and running, and that was also thanks to a lot of very, very nice contributors, who helped there, doing a lot of the legwork, and then spending half a year or so ironing out all the bugs that were introduced in the process... Pushing out blog posts, pushing out tools that would help people to move over, marking plugins as Python 2 or Python 3-compatible automatically on the plugin repository basically by looking at the code automatically and detecting if it would compile under Python 3 or not. And it was an absolute nightmare, but somehow we pulled it off. But --

**Autumn Nash:** That sounds exhausting.

**Gina Häußge:** It was exhausting, and 5% of OctoPrint's user base, according to the anonymous usage tracking, is still on Python 2...

**Justin Garrison:** Wow...! \[laughs\]

**Gina Häußge:** And at this point, I just have given up trying to motivate them.

**Justin Garrison:** They'll never die.

**Gina Häußge:** Yeah, I mean, OctoPrint is Python 3-exclusive now, since version 1 point -- oh, God. Six? Five? I have no idea, actually. Something like mid-2020 or so, I can't remember exactly. And there are still people who are left on the Python 2-only version, who I redirected to take their updates from somewhere else just in case there was anything that I still needed to push out, but so far have never done anything, and will now also not do, because those 5%, they can just... Like, if a security issue or something like that shows up, they really should just finally do the jump.

**Justin Garrison:** \[01:54:16.23\] Yeah, they need to.

**Autumn Nash:** It's like when we try to get people off of Java 8. It's like never dying...

**Gina Häußge:** Yeah.

**Justin Garrison:** Yeah. Old software doesn't die.

**Gina Häußge:** I can't imagine. My knowledge is still stuck on Java 7... \[laughter\]

**Justin Garrison:** You talked about some things you'd want to make changes in the future... Looking back of more than 10 years of building this project, what do you wish you would have done differently, at the beginning?

**Gina Häußge:** I wish I would have done so many architecture decisions differently, that are now biting me in my behind over and over again...

**Justin Garrison:** How do you make sure you -- because a lot of that comes from just learning... Either scaling the projects, and it needs to change over time, or you didn't know how it worked back then, and you just learned a new way of doing it now. How would you go back in time and teach yourself "Oh, you should do it this way instead?" Is there a way?

**Gina Häußge:** Do we have a time machine? \[laughter\] Apart from that... I mean, I think most of the stuff, if I just had known any better, so if I had found some more information on some things, then yeah, that would have saved me a lot of work. I mean, some of the problems I actually just managed to iron out with the current release... Because I basically have two web servers situations going on; I have Tornado sitting in there, single-threaded, async... And on that, I have Flask sitting, which is sync. That is really a bad idea; you do not want to mix that up. But in 2012, Gina didn't know any better than that... And now I know.

**Autumn Nash:** Flask talked a big game at that time. It's not even your fault. \[laughter\]

**Gina Häußge:** The good thing is that I've found a solution for that, which means we had huge performance gains in the latest version that I just pushed out now, because now I managed to make the whole connection between the two things async as well, so that they don't block each other anymore... And so the whole webpage loads faster now, and it's way less likely that some third-party plugin can now block the whole server as well... But yeah, these are things that if I had known them back then, if I just better understood the kind of stuff that I was working on... I mean, I didn't know about 3D printing protocols back then, I didn't know about Flask, I didn't know about Flask, I didn't know about Tornado, I didn't know about all of that. I was just like "Okay, this might maybe work, and if I connect this here, and then there, and blah..." And then I added a plugin system on top, and that made everything way more complicated, because now you have an ecosystem you cannot just rip out parts anymore without destroying parts of the ecosystem in the process. And so that is what is now making things way more complicated.

**Autumn Nash:** In your defense though, 3D printing has grown so much in the last decade, and releasing software in general has grown so much... You sound extremely knowledgeable about all of these things, and I don't know if anyone could learn them as well if he weren't just doing it. You know all these things because you built it, and you maintained it, and you had to make those hard decisions. So it seems like you're doing a great job...

**Gina Häußge:** Thank you. \[laughs\] Yeah, I mean, I'm still here, right? So it can't be too bad. And yeah, the things I now know about 3D printing firmware, and especially about the differences between the various variations... Honestly, I wish I didn't know as much, sometimes... There be dragons... \[laughter\]

**Justin Garrison:** The curse of knowledge... Yeah.

**Autumn Nash:** Not just that, but I feel like it's always that struggle of you learned it at like 2am, because of something went wrong... Because it went sideways, and you had to learn it.

**Gina Häußge:** \[01:58:05.02\] Oh, that's something, by the way, I also learned... I never do releases after Wednesday anymore... Because it gives me Thursday, and even though it's usually my day off, because I'm on a four-day work week, if push comes to shove, it gives me Friday, and it doesn't ruin my whole weekend. I did a bunch of releases on Fridays, and it cost me one too many weekends.

**Autumn Nash:** Never push to prod on Friday.

**Justin Garrison:** Yeah, that is the real wisdom of this podcast right now. People say like "Don't push on Friday", and you're like "No, don't push after Wednesday." Like, if you're pushing on Thursday or Friday, you're just asking for it.

**Autumn Nash:** That is the perfect bake time to get --

**Justin Garrison:** Someone else to try and then call you. And that is like -- they need a day.

**Autumn Nash:** There's no testing real users wanting to use your software in a way that you never imagined... You obviously do as much testing as you can, but getting real people to try it, the way that you said that you do, like that release where people can try your other branches so they can bake properly...

**Justin Garrison:** I feel like that needs \[unintelligible 01:59:08.20\] It's like "Test with users."

**Autumn Nash:** I mean, there's nothing -- like, it is nothing like some real person being like "I wonder what you could do if I put this here..." And you're like "Why would you do that?"

**Justin Garrison:** Or they have some crazy workflow, where you're just like "What?! When you do what?!" Like "Oh, yeah, no, I drop to the web console every time, and I type my commands manually in JavaScript." And you're like...

**Autumn Nash:** They're like "But I want to use the UI, and the CLI, and then do this" and then you're just like "But why? Why would you do that?"

**Gina Häußge:** But you know you have produced some stable software if after a huge new point release -- not point release, a minor release, only such stuff comes in.

**Justin Garrison:** It's only the weird use case.

**Gina Häußge:** And this time I can't say that I managed to do that. I got only really, really weird, really odd stuff.

**Autumn Nash:** That's an achievement.

**Gina Häußge:** Right? I thought so as well.

**Autumn Nash:** Not just that, but the fact that you automated all that by yourself, and you were the main maintainer... You are amazing. Amazing.

**Gina Häußge:** You need to keep in mind, I automated that because I am the only maintainer, so I had more time to do the maintenance. \[laughs\]

**Autumn Nash:** Yeah, but you still had to do the automation... I know it makes your life easier, but sometimes you'll sit there and it takes longer to automate stuff than... I mean, you get it back, obviously, after a while, but...

**Justin Garrison:** Well, not always... I mean, you could spend the whole week automating something that you do once a year, and in this case, you're like "Oh, this went from a day to an hour", and it's a good use of automation.

**Autumn Nash:** Because we've all automated something, and we were like "This is gonna be great", and then it takes longer to automate than it does to do it manually, and you're like "Why? Why did I do this to myself?" Like eight hours in.

**Gina Häußge:** I'm into home automation, so I have this a lot...

**Autumn Nash:** I love that stuff. Me too. But I'm just like, there's certain things that I'm just like "That was such a bad idea." But you'll never know until you do it.

**Gina Häußge:** The good thing is you often still learn something new in the process. So even if it's all for the --

**Autumn Nash:** That's what I'm saying. Just listening to your talk about it, I'm like "Man, your knowledge is just insane." Like, you must just know the ins and outs of so much of this, because of the way that -- and then you're like "And then I had this problem, and then I found this awesome way to fix it", and I'm like "How did you do this by yourself?" That is amazing. Okay, but what do you print at home? Did you make your own 3D printer, or do you have --

**Gina Häußge:** No, I actually always just get something from the shelf, basically.

**Autumn Nash:** So what's your favorite 3D printer?

**Gina Häußge:** I'm not sure if I would call it a favorite. I have a very old \[unintelligible 02:01:49.21\] now that I have modified a whole lot... And that works, and works, and works, and works... And I actually just printed a guitar with it that I gave away as a birthday present to the father of my partner... Who was really, really happy about that.

**Autumn Nash:** \[02:02:10.23\] That's awesome. Do you have anywhere that you post the stuff that you 3D-print? Because I just want to like follow all the stuff that you print, because it has to be awesome.

**Gina Häußge:** Sometimes on Mastodon, sometimes on Printables... But mostly probably on Mastodon. So chaos.social/@foosel. And that's also where I post everything pretty much that I make. Currently, I'm more into making print and play board games, for some reason; that just suddenly started to make --

**Autumn Nash:** Ah, that's cool.

**Gina Häußge:** I just made a card game again this morning. So yeah, it's a weird thing.

**Autumn Nash:** Because I feel like at the amount of -- like, you were 3D-printing when it wasn't even like a big hobby. And the fact that you created all this software, I'm like, you have to be making cool things.

**Gina Häußge:** Mostly functional stuff, really, I have to say... So I printed some parts for my bike, like for mounting the two locks that I have to the frame, and for mounting the radar unit that I have to tell me when a car is coming from back, and such stuff like that... Then together with a buddy we did a whole project for the Chaos Communication Congress at the Chaos Communication Camp last year... Which were basically little environment sensors that we put into little gnome figures. And I printed all of these gnome figures...

**Autumn Nash:** You're like the human problem solver.

**Gina Häußge:** That is actually my superpower.

**Autumn Nash:** How many problems has she talked about that she's solved? She's the epitome of engineering brain. She's like "I had this problem, and then I made that." I'm just like, I just want to be your friend. You're amazing. You're just like "And then I solved this automation problem. And then I realized we needed this", and I'm just like... You make all the things.

**Gina Häußge:** Yeah, and this is actually the reason why I got a 3D printer, because I had all of these ideas constantly how to solve certain issues in a household, just around the home, but I never had a way to do that. And then I got a 3D printer, and suddenly everything looked like a nail for my new hammer. And then later I got a laser cutter. And then I got a \[unintelligible 02:04:13.02\] cutter.

**Autumn Nash:** Can we just talk about you should be Gina Foosel the problem-solver...?

**Justin Garrison:** Official title now.

**Autumn Nash:** Yes.

**Gina Häußge:** That is actually one of my best skills, yeah. That is something that also back when I was still a Java engineer person, I was constantly...

**Autumn Nash:** You're always gonna have problems, and always end up with adversities, but just the fact that your attitude is like "Okay, we have this problem, and we're going to fix it this way", that is amazing. You are going to be successful forever.

**Gina Häußge:** \[02:04:49.11\] The only downside of it is that sometimes my brain won't shut up. You know, like, when you're laying in bed and you're trying to sleep, and your brain is going "Oh, by the way, you might be able to solve this that way, or you could do this, and such." So I've now taken to listening to audiobooks, so that I can actually fall asleep... Because otherwise this stupid thing just won't shut up.

**Autumn Nash:** But then the audiobook gets good. I live that problem all the time.

**Gina Häußge:** I have a trick up my sleeve. I only listen to audiobooks I have already read. So I know what happens.

**Justin Garrison:** She solved that problem, too. \[laughter\]

**Autumn Nash:** See? She's a problem solver. Because I have the same brain, and I feel like it doesn't do the same cool problem-solving that you do. Like, I'm trying to get on your level one day. I'm not there yet... But it's always like "And then this, and then you should do this. And then you need to make a list for this." And I'm like "Can you shut up? I'm trying to sleep." But then I'm like "Oh, the book just got good."

**Gina Häußge:** I just give it something to listen to, and then it shuts up, and because I already know it, I get tired and I sleep. It doesn't work with podcasts, it doesn't work with books I don't already know. Because then I want to actually listen and know what happens...

**Autumn Nash:** Gina has all the secrets, guys. All the secrets.

**Justin Garrison:** Gina, this has been a fantastic conversation. Thank you so much for coming and sharing all about OctoPrint, what you do... For anyone that's listening, if you're not familiar, if you have a 3D printer, go check it out, run it on a Raspberry Pi 3... Donate to the project, because this is one of those successful open source projects that has been around for a while. I was a user for a long time, I am also a donator... So I encourage everyone else to like go out there and -- and it's great having integrated GitHub sponsorships, and all those things that you have for the project to make it really easy to say "Oh, yeah, here's $10, here's a recurring buck or two." All those things go a long way to help promote the work, and really promote the idea behind successful open source that can be community-run and community-funded. It's an awesome success story.

**Autumn Nash:** Yes. I hope that people take this success story and it proves to them that this can be a model for open source.

**Justin Garrison:** It's possible. Thank you so much, Gina.

**Gina Häußge:** Thank you for having me. It was a blast.
