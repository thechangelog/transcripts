**Adam Stacoviak:** We're speaking with Martin Woodward... Mark, you're doing a cool job at GitHub, leading a pretty interesting mission. Recently we had a space achievement happen powered by open source... In part at least; not so much in total, but in part... And this is a big deal, this Mars mission badge, the involvement with NASA and JPL. Can you take us into what that's all about?

**Martin Woodward:** Sure.

**Adam Stacoviak:** What's gone on in open source to make us go to Mars?

**Martin Woodward:** \[laughs\] Building on the shoulders of giants, as it always is.

**Adam Stacoviak:** Yeah.

**Martin Woodward:** It's funny - you found out this news, Linux was running on the rover kind of thing, and running on the helicopter. We sort of found that out. And a member -- I think it was end of February, some dev from Stripe tweeted Nat, my boss, to sort of say "Hey, this is like the Martian code vault, isn't it? This is amazing. We've got Linux running on Mars. This is cool." And Nat was just "Oh, that's such a good idea..."

**Adam Stacoviak:** That is cool.

**Martin Woodward:** We reached out to some friends over at JPL - JPL have been long-time users of GitHub and long-time contributors to open source as well... And we reached out to some buddies over there and we were like "Hey, what's running on that helicopter then? Is that something that we could do? Is that something that we could talk about?" And they were very kind, they provided us a list of open source dependencies the helicopter depended on, and we can dig into those if you want... And then created a badge... We sort of analyzed the projects, and then took the exact versions that JPL were telling us they were using, and then analyzed those back, and did a match if those people have GitHub accounts, and if they do, we stuck a badge on them and saying "Well done, your code made it to Mars" kind of thing. "You contributed to \[unintelligible 00:03:18.10\] of the Ingenuity Helicopter."

**Adam Stacoviak:** Yeah.

**Martin Woodward:** So we did that, and it is just over 12,000 people actually got the badge. It was pretty cool. That's just over double how many people work at JPL as well. So it shows you the power and all the developers that you can work with and the size of your community when you do engage with open source, and when you contribute back, as well as when you're consuming open source. It's cool. We couldn't have done it, like you said, in large part without them. Obviously, the team of scientists at JPL had a large amount to do with it as well...

**Jerod Santo:** They had something to do with it, yeah.

**Martin Woodward:** ...and the American tech space, thank you for that, for funding it... But yeah, it's just awesome.

**Adam Stacoviak:** \[00:03:56.19\] That's why I said partly, for sure. Partly. Not in whole, in total, but partly, for sure.

**Martin Woodward:** And \[unintelligible 00:04:01.01\] on the time scales that came together without building on a bunch of -- JPL called them \[unintelligible 00:04:04.22\] products, but off-the-shelf components and things; pulling those together, and then pulling together open source components... It certainly couldn't have come together as quickly as it did, as the technology demonstrated, without building on open source. So that's a fantastic achievement, and we just wanted to share it with everybody and let people know.

It's funny, I was listening to an episode you had with Dan from the \[unintelligible 00:04:24.03\] and we were working on this at the time that episode got broadcast; I'm not sure when you recorded it, but anyway...

**Adam Stacoviak:** I saw that tweet, I was like "Wow, okay..."

**Martin Woodward:** Yeah, yeah, yeah. He was trying to reach out to people at GPL to see if the random people that always bother you when you're an open source maintainer, asking you to fill out that random compliance documents, and things - he was asking those "Hey, did my code make it to Mars?" And this person is so far down the procurement chain they don't know... So yeah, we went and asked the people, and it turns out they did. \[unintelligible 00:04:49.23\] that made it to Mars, so that's pretty awesome.

**Adam Stacoviak:** That's interesting, now there's a process to discover that. Instead of being a maintainer wondering, it's more like GitHub helping to sort of pin back to GitHub accounts and repository commitments and whatnot. That's interesting. I didn't consider really that this would be a Mars code vault as well. We talked with John Evans - Jerod did at least - talking about GitHub's Arctic Code Vault, which is an interesting topic in itself... Just to preserve the long-term future of our source code, because it's really that important to leave the planet, escape velocity and all that, to get to another planet, and fly a helicopter, which is a massive human achievement to do... How does that play out though? Is it really a code vault, or is it sort of just named that, to some degree? Is it really that way?

**Martin Woodward:** Yeah, we didn't name it that. We named it the Mars 2020 Mission Contributor, or something like that.

**Adam Stacoviak:** Okay, yeah.

**Martin Woodward:** Because unlike the Arctic Code Vault, where they actually archived the actual source code storage and stuck it in the Arctic, in Mars they were under very strict weight limits to the grounds...

**Adam Stacoviak:** Right. Every kilobyte counts.

**Martin Woodward:** Yeah, every kilobyte counts... \[laughs\]

**Jerod Santo:** Plus a helicopter is not the best place to put your code vault, you know? On a helicopter...

**Martin Woodward:** Yeah... So yeah, so it's all compile code.

**Adam Stacoviak:** That's what I figured.

**Martin Woodward:** In fact, the engineers of the helicopter itself is -- basically, there's a bunch of papers on it that you can go read, but... It's basically two Arduinos and a Raspberry Pi Zero. That level of technology is what powers the helicopter.

**Adam Stacoviak:** What?!

**Martin Woodward:** So it's two microcontrollers that act as flight controllers, and then a larger sort of Qualcomm-powered board, which is where Linux is running embedded; it's a Linaro-based distribution 34 kernel... And these, again, off-the-shelf Qualcomm kind of dev board for building drones and things, they grabbed that, and it was running Linaro 34, a distribution of Linux on there... I'm like, okay, that'll do. It's got all the IO I need, it's got working cameras, because we all know how fun cameras and audio can be to get rolling on Linux at times... But yeah, working camera drivers, working everything... Let's go, let's use this.

I took those, and that's what we ran with once we got the tendencies... All compiled down though. So we asked the JPL team which open source dependencies have contributed to the success. So we don't have access to that code, or anything like that. They told us the dependencies, and then we did the analysis from those. That included things that were central for the Mars mission that are actually part of the flight software, like Bootstrap and stuff. I'm guessing Bootstrap isn't running on the helicopter. I'm guessing that that's part of the flight control system where they're running that, and things... And some of the Python analysis stuff is definitely happening locally. Though there is Python running on Mars, for sure, but not so much in the helicopter.

**Adam Stacoviak:** So not exactly on Mars in terms of the Mars mission badge; it's more like involved in getting us to Mars as part of this mission, to be super-clear.

**Martin Woodward:** Yeah, and getting the data back, analyzing that data as well from the helicopter. We're limited as well to the helicopter mission in particular... Because there are I think three Linux boxes that I know of on Mars, the helicopter itself, then there's the radio system, the control board that it talks to on the rover, and then there's another Linux box that we're now actually including, because it's currently not being used as part of the Ingenuity mission.

\[00:07:56.18\] When you saw the rover landing, you saw those amazing videos of that parachute flying, and you saw the videos as it's coming down, and all that sort of stuff - that's actually running on a Linux... It's a ruggedized PC that is powering that one... Because again, it had a bunch of USB cameras plugged into it, because it was all working, and they could get it going... And so because it wasn't mission-critical, they could run on what they call a class D system, like Ingenuity. So it's a lower-risk experimental. If it didn't work, we just didn't get video of that sky crane flying away, and all that stuff; it wasn't the end of the world. But that's running a 415 kernel, I think, and that's actually got Python on, and FFmpeg, and all those cool things... Because it took the video and it did the compressing onboard, the little PC, before sending it over to the rover. I'm a bit of a space nerd, as you can probably tell...

**Adam Stacoviak:** I'm liking it, keep going.

**Martin Woodward:** Yeah, yeah, we can talk about the open source... So I did my degree in physics, astronomy and all that sort of stuff, so this is kind of my background... But anyway, it did all the compression on the ruggedized PC and sent it over, and then they sent it back. Because the rover itself is radiation-hardened, like Power PC is what the rover runs... And this is like a 1990's era Mac kind of thing is what it's basically running on, but it takes a lot of power, because it's like a big radiation-hardened processor. The helicopter is the most powerful computer on Mars, like 100 times the rover itself.

**Adam Stacoviak:** Is that right?

**Martin Woodward:** Yeah, a hundred times slower than the helicopter in terms of processing... But it's ten times faster than the previous rovers. You see progress going along, but yeah. It's good stuff.

**Adam Stacoviak:** And that's running two Arduinos and a Raspberry Pi Zero?

**Martin Woodward:** Equivalent... It's actually a Qualcomm chip, not a Broadcom chip. But it's a Qualcomm chip that runs on the helicopter. And that runs as a navigation computer...

**Adam Stacoviak:** Okay.

**Martin Woodward:** Because over here on Earth, drones navigate using GPS, and all that sort of stuff, but you ain't got no GPS on Mars... So the way you navigate is using ship reckoning, dead reckoning, basically - how far are we moving using a gyroscope that's build into this same board, this drone board... And it has a black and white camera that looks down, and the black and white camera takes -- I think it's a number of frames per second. I can't remember what it is; it's like 50 fps, or 500, I can't remember. It takes a bunch of black and white photos looking down, and then it looks at surface features, and then it maps the tracking of surface features and uses that to basically dead reckon where it is on the surface.

That's why the navigation computer needs to be powerful, because it's taking all those images looking down, it's handling all the processing from all the IO, and then it talks to the microcontrollers. So there are two microcontrollers, and it talks to them to say "Move me up\\ move me forward (where it wants to go), move me down", and those flight control computers are the things that are actually keeping it in the air, because they're real-time, so they need to work fast in response to things... So that's kind of how all that works.

And the reason there's two of them is in case one of them argues with the other, because again, none of this is radiation hardware, and stuff. It's just literally -- you've got a block of batteries, and then all four sides of PCBs, very lightweight, really small PCBs around the batteries, and then there's a heater, and then you've got the motors and the propeller, and things. It's mostly batteries from what I've seen... So yeah. But those are microcontrollers. If they disagree with each other, they reboot. They switch off and on again.

**Jerod Santo:** \[unintelligible 00:11:07.13\] pretty fast.

**Martin Woodward:** So that's how they handle the -- I don't know if it's actually rebooting up, but that was the plan as far as I could read from looking at these papers.

**Adam Stacoviak:** Wow.

**Martin Woodward:** It's cool. It was a cool mission; it was an amazing achievement. And the photo of the black hole at Event Horizon -- yeah, the Event Horizon telescope teams took a picture of this black hole... Did you do a show about that? I can't remember.

**Jerod Santo:** I can't remember either. We talked about it... I'm not sure.

**Adam Stacoviak:** I think that it might have been mentioned, because I recall talk about it somehow, someway on the show... We do have our transcript open source on GitHub, so we can grab those to see what's in there for that, but...

**Jerod Santo:** We can confirm that a little bit easier than Daniel could confirm his code running on Mars, you know?

**Adam Stacoviak:** That's right.

**Martin Woodward:** Yeah, there we are... It's similar to that. With the Event Horizon telescope we looked who is all involved in helping the team pull together this image of a black hole. It's a massive distributed team, and they were doing all that work on GitHub as well... It ended up being 21,5k people roughly had contributed to all the -- it was all Python and all SciPy, NumPy, and all this sort of stuff... And over 20k people ended up contributing to this project.

\[00:12:15.19\] Back then we didn't have this notion of the badges, otherwise we could have done... So when we were doing the Mars stuff, we were thinking, "Oh, this is cool. We've gotta do something here", so we decided to do a badge, and then we made it an achievement, because we wanted it to be a nice, colorful badge, rather than the old black and white badges we used to have.

**Jerod Santo:** Is this badging thing new? I mean, GitHub was social coding. That was where it came out as. And a lot of the social sides, like achievements, badges... It's kind of a thing that they'd do. I remember Coder Wall back in the day was kind of like a badging sister site to GitHub, in a sense; not related in terms of the people operating it, but it was kind of like they would link back and forth to each other... But Stack Overflow, the Dev platform... A lot of these social sites - like, "Badges, badges. Win stuff. Achievements", and that's supposed to encourage use... But I don't remember GitHub really having anything like that until recently.

**Martin Woodward:** We had Highlights. So the Arctic Code Vault was a highlight, and if you were a sponsor as well, that was a highlight before. But we didn't have anything that was quite as big or prominent. But with the Mars achievement, with the Mars highlight we did the initial designs, and the black and white -- so the helicopter things looked a bit boring, and the design I did, this amazing color version, we were like "Oh, that's so cool. We've got to use that." So we were kind of like "Well, let's do an achievement section and we'll bring that in..." Very mindful although, as we don't wanna \[unintelligible 00:13:31.05\] We added in the Arctic Code Vault; we sort of back-dated it as an achievement now, rather than a highlight.

**Adam Stacoviak:** It was an achievement, yeah.

**Martin Woodward:** The same way with Sponsors. So you've got a nice, colorful batch. But there you're being rewarded for things that you've done. What we wanna be careful of is going too far down the gamification front... Because you know, we don't wanna encourage burnout with open source maintainers.

**Jerod Santo:** A streak badge would be counter-productive.

**Martin Woodward:** Yeah, exactly. And then anyway, we've got the legendary green graph of commits kind of thing. That's good enough as a streak badge encouragement for the new people... Whereas if you're more experienced, you get quite proud of seeing the gaps in there; you're like "Oh yeah, look, I took a proper vacation. I can prove it to my family that I actually didn't log into GitHub this weekend."

**Jerod Santo:** Yeah, that's right.

**Adam Stacoviak:** I saw somebody recently -- somebody who's more deep into code became a founder, and then CEO, and you can see their GitHub graph... They shared this on Twitter recently, where when they were CEO and founder -- well, I guess more CEO; and this is no knock against CEOs, by any means. It's just this person's history... Where you can see their graph essentially being more white and less green, which is how it works. As they became this new founder, stepping away from their CEO role into this new founder role, where they're sort of coding more, and exploring more, and you can see the green come back, essentially... Like, "This is my journey from CEO to founder", for example.

**Martin Woodward:** Yeah.

**Adam Stacoviak:** And you see that. It's a journey, it's informant.

**Martin Woodward:** Did you hear about the Skyline project? Have you heard about that one that we did as well?

**Adam Stacoviak:** No.

**Martin Woodward:** Oh, wow. We did this project -- if you go to skyline.github.com, it was a thing we did just in the new year, where we kind of...

**Adam Stacoviak:** Oh, I did see this.

**Martin Woodward:** ...had a bit of fun with the commit graph. Kind of one of these in-house "Look at this. Isn't this fun" kind of thing. We did it because we were shipping contribution graphs to some of the top maintainers, some of the people who've just done amazing work over the year, like Dan, for example... We sent them a steel contribution graph with 3D printed in steel.

**Jerod Santo:** Oh, I did see a few of those coming up on Twitter that people were sharing.

**Martin Woodward:** Yeah, a version of the contribution graph, and we sent it to them. But we wanted a link for them to go to to be able to share it with their friends, because it's quite hard to share a picture... So we built this site. Originally, it was some dodgy PM code that then got made pretty by our awesome team... Yeah, we shipped that, and it was cool. You can sort of zoom around in it. If you've got an Oculus, you can go in and around it in 3D, and things. So that's cool.

**Jerod Santo:** That is cool.

**Martin Woodward:** \[00:15:53.10\] But what I like about that is that we're actually encouraging -- it looks better if there is variance. The most valuable real estate, like Manhattan, has -- the most valuable real estate in Manhattan is this stuff around the gap, around Central Park or whatever, and it should be the same with contributions; it looks better when there's variance. It looks better if there isn't too much stuff in the weekend, if there is some gaps. And you've got the peaks, and then you can think "Oh yeah, I remember that. That was when I was coming to this release of my library" or whatever. Or "That was when I was coming up to this particular demo", or go live, or whatever it was, and you can look at those highlights and go "Oh, yeah, I remember those." But also look at the gaps and say "Yes, that was an amazing vacation. What a great Thanksgiving that was." It's good stuff.

**Jerod Santo:** So is this the kind of projects that you head up as the executive director? Sorry, I'm reading the wrong thing. You were the executive director of the .NET Foundation, but you're senior director of dev rel. Is the Skyline project - is this what dev rel is all about, or is there other things that are...

**Martin Woodward:** Dev rel-y.

**Jerod Santo:** ...tangential to these kind of cool -- yeah, what is dev rel exactly?

**Adam Stacoviak:** Dev rel-y, I like that.

**Martin Woodward:** Yeah, so it's different, again, from what it is in quite a lot of places... Because quite a lot of places if you're doing dev rel, you're trying to raise awareness of your product amongst developers...

**Jerod Santo:** That's like your GitHub.

**Martin Woodward:** ...and help people use it. \[unintelligible 00:17:12.15\] different problem. So what we try to do, and what my team does -- it's a small team, and we're just basically trying to help open source maintainers... We spend a lot of our time talking to open source maintainers, and also just regular developers and helping them get the most out of GitHub, and trying to see what we can do to help them be successful. So in some ways as well it's like a traditional dev rel, because you're going out, you're talking to people all the time, you're talking to developers, you're helping them use stuff... "Hey, did you know you could go do this and it'll save you a bunch of time? And you could do that thing..." So you can help people, and then you also bring that feedback back into the engineering team. Because we kind of sit on the engineering team, so we come in and we sort of say "Hey, this pull request thing - it would be great if you could do auto-merge" or "Sponsors - it'd be great if you could do one-time payments in Sponsors." We're hearing this around and we're just an extra data point then for the people who are building the features, and they can help make the product better over time, hopefully.

Just trying to have these connections between -- because GitHub's great, and it's amazing its scale. But for a lot of people -- a lot of people don't really think of GitHub as a thing. GitHub is just GitHub; it's just there. It's like water. And again, because of the large scale that GitHub's working at, sometimes the maintainers who are running massive projects - they wouldn't know anybody at GitHub they could go talk to to go help them with a problem... And that's bad. These people are incredibly busy, so I want to kind of try and help put the human face, and make sure the team are out there putting the human face in front of the company, and so when a maintainer has an issue or a problem and they're having trouble -- you know, we've got full-on support and everything else, and that's what we should all use all the time... But I also want them to know that they know people at GitHub if they need the help, or if they want to give some feedback, or something. That's what my team do.

**Jerod Santo:** So what's the best way for a maintainer to get your attention?

**Martin Woodward:** Personally, as I say, @martinwoodward on Twitter, or just martinwoodward@github.com on email if you wanna drop me a line. I'm very happy for people to reach out, and they do. It's probably easier than -- if you @NatFriedman, that also works, but it's generally better not to go straight to the -- you know, he does get a lot of tweets sent to him, and he tends to forward them along to me, so... Yeah, just hit me up anyway that way... Or as I say, the community support and the community forums are all great places; that's where we tend to hang out as well a lot of the times. If you need particular attention, feel free just to reach out, for sure.

**Adam Stacoviak:** Yeah. Speaking of Nat, I saw a recent Twitter exchange between Max Lynch, talking about when you view a file in the commit history, being able to actually see that file at the exact point in the history.

**Martin Woodward:** Yeah.

**Adam Stacoviak:** \[00:19:50.03\] And he just said "Number one feature I wanna see on GitHub." And he @GitHub-ed on Twitter, and then at the very end, CC @NatFriedman. And then three days later, Nat responds - "New button below." And then boom, you can kind of see that this is being driven in the wild; so a person on Twitter dating their best request, he's the CEO and founder of Iconic Framework, so somebody out there in open source, a maintainer of course, but getting the attention of Nat and making that possible pretty quickly.

**Martin Woodward:** Yeah. That one actually -- it's one of those ones where it kind of had been in the hopper for a week or two, but yeah...

**Adam Stacoviak:** It was okay. It wasn't like a three-day "Hey, let's do this now, because Max says this..."

**Martin Woodward:** Yeah... Well, let's let Max think that, but yeah, no...

**Adam Stacoviak:** Okay, gotcha.

**Jerod Santo:** It might have even been a feature already. Wasn't it? I feel like I've done that, View File...

**Martin Woodward:** No... You could view the problem -- it drove me mad for ages, because I was one of the ones that put it on the backlog, actually...

**Jerod Santo:** Okay.

**Martin Woodward:** You could go in and you could browse the history at that point in the commit. So you'd hit Browser History in the web UI of a file, it would show you where that filed had changed, but then what you could do was browse to the repository at that point in time, and then you'd have to navigate back to the file and find it. It was infuriating. So somebody called \[unintelligible 00:21:02.04\] added a button which takes you straight to that file at that point in history, which is like "Why did we never have that?"

**Adam Stacoviak:** Yeah, that's exactly what you wanted. It's the UX anyway, so it should have been that.

**Martin Woodward:** Exactly. But there's a lot of these little small things that you can do that really help improve the quality of life of everybody... And that's one of the things I enjoy the most - just going out and listening and chatting to people... "Oh yeah, if you just did this tiny little thing over here..." What did we do the other day -- it was just so simple... When you don't want a pull request, or when you're assigning it... When you're assigning a pull request, your name is at the top now, and it's there before you -- like, well d'oh, of course it is. But again, there's little things like that that just speed things up, rather than just typing your name in every time and having to find it. Let's just put your name on top, using code inside of a pull request if you wanna include a code snippet inside of the title of the pull request, or you wanna improve markdown... It's just all these little things.

So while we're building the big features, while we're building things like GitHub Codespaces, or while we're building the next version of Actions, and improving Actions, and all that sort of good stuff - we wanna do those, but we can't forget the papercuts \[unintelligible 00:22:06.06\] general quality of life improvements; how can we make the platform faster, how can we make it better for everybody to use, how can we improve maintainers' lives... Because again, these people are just doing awesome stuff, that -- genuinely most maintainers are the nicest people you'll ever meet in the world, as you know, because you talk to them all the time... They're just lovely people.

**Adam Stacoviak:** Yeah.

**Martin Woodward:** You know you get people who volunteer, you get the people who stand up in the community and volunteer and go do stuff, and then you've got the people who take anything... They just give. They just give, all the time. Sometimes too much, more than they've got. It's just trying to do what you can to help these people, help them be able to do things fast, to help them be able to spend more time with fingers on keyboards, and less time taking care of stuff they don't really wanna worry about.

**Adam Stacoviak:** At the place of value.

**Martin Woodward:** That's the job. It's the best job in the world, because you just get to have fun, you get to talk to people, you get to go build stuff, you get to help people use things... And then you get to go talk to JPL occasionally, and do fancy Mars badges, and nerd out over hardware that's running in space... So it's awesome.

**Break:** \[00:23:06.28\]

**Jerod Santo:** So the timing of this whole thing was really funny for us. Like you said, we had that episode with Daniel Stenberg of Curl, and we were speculating about whether or not it was on Mars. And Adam and I were both pretty sure, like "Hey, you're on Mars." We've just gotta get some confirmation. Daniel probably thought it was as well. And of course, I think it was just days later that this whole announcement came out... Maybe days later after the episode came out. So we had a lot of listeners who had just listened to that conversation, and then here it was. It was really cool, and Daniel had this great chart - I'm not sure you saw that chart he put out, where he's like "Number of planets that Curl runs on", and there's all those years for which it's one, it's flat line, up until this year, and it's like two. And it just launches at the two.

**Martin Woodward:** \[laughs\]

**Jerod Santo:** I mean, he was just tickled to have that confirmation, and I'm sure there's many other people - like you said, around 12,000 - that got the badge, also probably tickled to find out "Hey, you've contributed to this awesome mission." So do you wanna tell us, in addition to Curl (and you metioned Python generally), some of the other projects that are involved on Ingenuity?

**Martin Woodward:** Yeah. On that graph -- I saw another one of those graphs, by the way, which was planets with the highest ratio working audio drivers in Linux, and Mars is at 100%, so...

**Jerod Santo:** \[laughs\]

**Martin Woodward:** ...yeah, there is that.

**Jerod Santo:** That's a good one, too. I like that one.

**Adam Stacoviak:** Yeah, that's good.

**Martin Woodward:** So there's a bunch of -- you know, in the scientific community, Python is massively big. So obviously, in a lot of the analyses to the data that comes back, that's a lot of Python, that's a lot of SciPy, and NumPy, and all those sorts of projects that allow you to do big data analysis... As well as some of the charting like matplotlib. I saw the maintainer of matplotlib saw a matplotlib graph on the screen that proved the helicopter had taken off... That was really weird, watching mission control during the analysis of the data as it was inbound... Because you see them bringing up GitHub, which everyone who's at GitHub is like "Aaaah, this is amazing!!" And then you see people executing Python commands, executing charts, and then somebody stuck their altitude data into matplotlib and then brings up this graph on the screen of going up to three meters and then back down again kind of...

So that was really cool. It was really just great to see the recognition, as well as the stuff they're doing, the data analysis and the data transfer. Obviously, Curl used in data transfer between devices, and all that sort of stuff. There's also other things on the analysis side, which is where a lot of that Python code runs... And then just in rendering of that stuff and doing what they call the flight control systems... So that's where you've got a website. Everybody needs a website to be able to show data internally, and all this... So that's where you've got kind of Bootstrap and Elasticsearch and some of those sorts of applications... But yeah, it's great.

And then another project that's used very heavily -- so that's on the Python side. A lot of that Python -- while there is Python running on Mars (or so we're told), the vast majority of the Python stuff that we mentioned in the helicopter project is running Earth-side. But Fprime is a project that NASA have up on GitHub, and that's a C project. It's a framework for building flight control systems that's used in the helicopter, but it's also used in \[unintelligible 00:27:25.21\] And it's a framework that they open-source; so the entire codebase of that helicopter - you can't go send a pull request to make their helicopter do donuts, or something... Sadly.

**Jerod Santo:** That's too bad, yeah.

**Martin Woodward:** Yeah, too bad. But the entire flight control system for that actual instance of Fprime that's running isn't all available. Some of it is JPL proprietary, and it's not publicly available. But the Fprime framework that they used to build that flight control system is. And you can take that Fprime framework and -- the people over at... I'm trying to remember the name of the company. Oh, it's just blanked my name. That's where they bought the laser altimeter from. I'm blanking -- it's a shop I've been to many times, and spent ridiculous amounts of money or random bits of Raspberry Pi hardware. You can take the Fprime project and run it on a Raspberry Pi locally. You can take it and run it in different systems locally, and have it running, and build your own simulated environment, so use real hardware.

\[00:28:21.28\] We're seeing -- there's this massive boom of space tech, as access into space is getting cheaper; we're starting to see a bunch of these startups getting into space technology now. So while the Mars mission is like the first mission where consumer-grade electronics hardware has kind of made it onto the surface of a planet, and it's proving itself... Consumer-grade electronic hardware has been running for a long time in orbit and has been working fine... So you're sort of seeing more and more of those sorts of things. So I think there's a lot more open source in space than we probably know, and that probably even we are aware of. And there'll be more and more as we get more and more \[unintelligible 00:28:57.19\] and more and more access into space. It's cool... Open source has not just won this planet, it's winning the Universe.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Right. I was thinking even in our local atmosphere, with a lot of the military-grade drones and stuff, there's a lot of open source that has penetrated the drone market... Crazy as well. So all over the place.

**Martin Woodward:** Yeah. They used this Qualcomm demo board, which basically was a board for building drone hardware... It's a very lightweight, sort of credit-card-sized, two-sided PCB, and that was the base of this other platform. So that was all sort of drone hardware, but the helicopter is a counter-rotational thing. They couldn't do a quadcopter or something like that, because the propellers need to be so big to run in the atmosphere, and there's only a certain amount of room that they could take under the rover's belly, so that's why they've done it with that design.

**Jerod Santo:** Is that what differentiates a helicopter from a drone, is the quad/four? Because I don't know...

**Martin Woodward:** I don't think there is, actually--

**Jerod Santo:** Yeah.

**Martin Woodward:** Because people overuse that word. From my reading drones is kind of one of these words like "hackers", that really people don't use often in the real world kind of thing. The people in the field don't tend to use it as much; it tends to be people outside the field talking about it... Because a drone can be anything that's autonomous, and sort of self-managing. Like, is the rover a drone? But I think when my 70-year-old father talks about drones, he's talking about one of those quadcotper or hexacopter thing that --

**Jerod Santo:** Right.

**Martin Woodward:** ...might not even be autonomous. It might be flown by radio control, but they think it is a drone, even though it's being stick-controlled.

**Adam Stacoviak:** Yeah. The politically-correct terms is "unmanned aerial vehicle", UAV.

**Martin Woodward:** There we go.

**Adam Stacoviak:** You've gotta say that...

**Jerod Santo:** Unmanned aerial vehicle...

**Adam Stacoviak:** Unmanned aerial vehicle.

**Jerod Santo:** Okay.

**Adam Stacoviak:** Yeah.

**Martin Woodward:** But people call drones -- like, the UAVs, that's like the military-grade, and all that sort of stuff. But people call a DJI kind of thing -- they call that a drone.

**Jerod Santo:** And DJI calls it a drone themselves. It's not just people. The company even calls it that, right?

**Martin Woodward:** Yeah, exactly. But that's not a -- \[unintelligible 00:30:53.07\] It's kind of like a fly-by-wire...

**Jerod Santo:** Yeah, totally. Well, I think they're starting to have some -- they can fly themselves sometimes. There's modes. But it's controlled by a remote, generally speaking.

**Martin Woodward:** Oh, yeah. But if you've ever tried to fly one of those without the computer helping you, it's -- I've built one once, and tried to fly it myself, and it didn't stay in one piece for very long... So the computer is doing a lot to help you. So I guess it's fly-by-wire, like a plane.

**Adam Stacoviak:** In regards to Daniel and this two planets thing, and lower Earth orbit, and drones, and where code might be, I responded back, I said "Hey, I know Curl is on Mars now because of this confirmation, but I would like to also think it's probably on the ISS, or in low Earth orbit with other space things." I mean, there's more hope... And then we also have the Artemis Mission happening soon, which is this mission back to the Moon.

**Martin Woodward:** Yeah.

**Adam Stacoviak:** I've gotta consider how -- you know, with badges, and this achievements thing, how will GitHub continue to track open source not on the planet, essentially? Low Earth orbit, ISS, the Moon, Mars...

**Martin Woodward:** Yeah, I think the Artemis one's great. If you hadn't read that, that's NASA mission to the moon... And that's really interesting, because it's so much closer, so you've only got eight minute delay, rather than hours delay of communication... And \[unintelligible 00:32:06.21\] already confirmed it's gonna use some of the same lessons that we've learned from this rover... So that's fantastic.

\[00:32:14.06\] In terms of GitHub tracking it - we can do one-offs, or this sort of thing, because it's just cool. And we celebrated this amazing achievement of powered fly on another planet, which is awesome. It doesn't scale once that becomes common, once that becomes everyday... So what we're trying to do is help people see their dependencies, and then what I'd love to do is do some stuff that gave more visibility to maintainers about where their stuff was being used, or how much it was being used. You throw something out into the world, and then like six years later somebody sends you a pull request, and then you learn that actually they'd been taking a critical dependency on this for their entire lives, as far as they're concerned. You didn't know anybody but you was using this particular bit of code. I think we've all had that kind of experience, so it'd be very cool trying to get some feedback loops going on there in terms of people using it... And when you've got things like Actions coming into play as well, you can see the potential there would be amazing, if you could kind of say "Oh, hey, people who were dependent on my release - let's go try the new release and see if it breaks your code", that sort of stuff. So yeah, there's lots of opportunities I think in the future.

**Jerod Santo:** That'd be cool, for sure.

**Martin Woodward:** I mean, we should say the planet -- you were talking about code running... At the International Space Station there's a thing called Astro Pi; there are a couple of Raspberry Pi's running on the International Space Station from ISA, and kids can send up code to run on a Raspberry Pi in the near Earth orbit and the International Space Station.

**Jerod Santo:** That's neat.

**Martin Woodward:** Yeah. So the Raspberry Pi is in space. So Curl - there's almost 100% multiple copies of Curl running on the space station.

**Adam Stacoviak:** I was speculating more with him again, because he was like "You know, just planets", and I'm like "Great achievement, of course", knocking this slide that Jerod had mentioned from Daniel, but more like "It's probably more than just you think." I mean, we've heard about, I believe, China landing on an asteroid, I think... I pay attention to some space science news, and I think there's an asteroid landing, to some degree... So I've gotta imagine that -- you can't confirm that, but speculation is interesting, because it's a source of motivation, as you said, the feedback loop. And I think that we all do things in this world sometimes, and we're generous, and we put it out there, and sometimes as you said before, beyond what we're capable of doing... But it's that feedback loop and it's that motivation, because - I think of it like when you ask a child in school, like "Hey, what do you wanna be when you grow up?" Fireman, police officer, doctor, veterinarian, astronaut... We might not all make it to astronaut status, but our code might.

**Martin Woodward:** Yeah, it's amazing.

**Adam Stacoviak:** It's cool.

**Martin Woodward:** But just anyone using your stuff - there's two things that kind of motivate you when you're creating things - it's a) what it does; so you create a bit of code, and you run it, and you're like "Wow, this is cool" and you keep clicking the button ten times, because you're just impressed that it even works at all. But then you also have the seeing other people using your code; 65 million people using GitHub every day - you kind of get used to that. We were all giggling like schoolchildren when we see them using it during the NASA mission control... Like, "That's GitHub! That's the button that I did!"

**Jerod Santo:** Totally.

**Martin Woodward:** And it's just amazing seeing people use your stuff. So the more we can help people know when their stuff is being used, and hopefully there is that reward of "Hey, yeah, isn't this cool? It's being used." And what we also need to do, of course, is help companies especially be more cognizant of the open source dependencies that they've got, and think about that and try and help them make sure that they're supporting some of their open source dependencies. You've spoken to Devon about sponsors and things - that's where some of the motivation for that comes from, but also showing dependency trees. So you can think "What open source have I got a critical dependency on? What am I doing to help make this sustainable in the future? How can I contribute back there?" And at the minute we're kind of leaving money on the table that we could be helping people to do more work on the projects that they love, so... Yeah, we're trying to do that as well.

**Adam Stacoviak:** \[00:35:59.21\] I also see the Arduino, and the Raspberry Pi you've mentioned on the International Space Station, that the Ingenuity was powered by these micro-controllers... That's something that I can go buy today. That's kind of a representation way. It's like, if you want to be able to influence not only just this world, but humanity's possibility of exploration of space - well, you can go and buy a Raspberry Pi today. You can play on the same kind of hardware, for example.

**Martin Woodward:** And you can advance the state of the art as well. You can figure out how to do \[unintelligible 00:36:27.25\] navigation. You can do these machine learning applications that are looking for surface features and then showing which direction they're moving in, all that sort of stuff. You can advance the state of the art, which then other people can use to go build other stuff. And what's great is it's not like competition either. You look at the countries that we're contributing to Fprime and all the projects that got to Mars - nearly half of the contributors were based in the U.S, but a huge chunk of contributions to those libraries didn't come from the United States. And whereas previously these sorts of missions would be kind of national rah-rah, aren't we amazing and what can we do kind of thing, it becomes a lot more about the science and a lot more about what humanity can do together, which is what the scientists have always wanted...

Sometimes the politicians get in the way, but it's just amazing when you see the scale of international collaboration and international cooperation that happens. None of it so we could put a helicopter on Mars; it was done to solve problems and everybody come together, and then it was by doing that and by sharing the goodness that we've got out there, and the generosity of people by saying "You might find this useful." Then somebody from JPL can come along and go "Oh, that's a cool bit of LEGO", stick them together and build a helicopter, land it on another planet and take it for some flights...

**Adam Stacoviak:** That's tremendous.

**Martin Woodward:** Yup. You've gotta love just being part of that community as well, the people that got the badge; it's awesome. And seeing the reactions from a lot of these people - they're like "I wanted to be an astronaut, and now my code is running on another planet." That's cool. But what's also cool is seeing the reactions of people -- I've got teenage kids, and I've seen the reactions of those... They're like "Wait, did you have something to do with that Mars mission?" I'm like "Not really. None of my code made it to Mars, but I talked to somebody whose code was there."

**Adam Stacoviak:** I know somebody who knows somebody.

**Martin Woodward:** Yeah, exactly. Now I'm cool. But now also getting into software development and getting into open source is cool, and like "Oh yeah, I see where this is going." So having these moments is great for us as a community as well, to kind of celebrate, and "Look at what we're doing. This is amazing."

**Adam Stacoviak:** Exactly. This is celebrating a win.

**Martin Woodward:** Yeah, yeah.

**Adam Stacoviak:** This is celebrating a win which I'm a huge fan of, and Jerod knows this... I think too often -- not so much that we don't celebrate the wins, but we don't give them enough attention. And we talked about the gamification, and sort of hedging that to some degree, and I don't think that's what you're doing here at all. And I'm glad you asked that question, Jerod, because we don't want GitHub to become a game. It may be behind the scenes if you make it that, to win open source and become an awesome maintainer or whatever it might be that you wanna achieve... But too often do we just not celebrate the wins, and take the time for that. I think that's what that is. And you've got nearly 12,000 people that contributed code to this... That's a lot of people involved in open source, and that's a big win for them, and it's a big win for (I suppose) open source at large.

**Martin Woodward:** Yeah, because we recognized everybody in that project who commits, up to the period where JPL said "This is the commit that we used; this is the version that we used." I saw some people who were like "Well, all I did was fix a one-line change in a readme or a doc or something like that, and now I've got the badge." That's awesome. That's cool. You helped make this project be a success, no matter how small you might think your contribution was. That line in the documentation you might have fixed might have been the line that helped the team at JPL understand how to use this particular library and how to make it more accessible to them. It's just cool... So let's celebrate the wins, let's try not to be too much a \[unintelligible 00:39:43.00\] You see a few comments about their code not making it, so it is like "Whatever..." So you've gotta celebrate the wins and just be successful.

**Adam Stacoviak:** Well, I was excited about Arctic Code Vault as an achievement for me, and I've gotta say, I fixed a lot of readmes and I went to my profile, very excited, and no Mars badge for me, so I was pretty bummed...

**Martin Woodward:** \[00:40:04.20\] Oh, man, I'm sorry... \[laughter\] If it helps, I did have a Mars badge either.

**Adam Stacoviak:** I'm joking, of course.

**Martin Woodward:** And you can guarantee that was the first thing I did when I got access to the queries also. "Am I in it? No. Damn it! What's the point of doing all this work?"

**Adam Stacoviak:** I didn't expect the Arctic Code Vault either. Not everybody gets that one, so I was like...

**Jerod Santo:** Yeah...

**Martin Woodward:** Well, that one was a little easy; you had to have your code in by a certain day, and make sure -- you could uncheck it. You could opt out of the Arctic Code Vault if you wanted... But yeah, it does worry me, because most of the time they seem to be trying to delete my code out of codebases nowadays. I think I've got one changes in GitHub, which was like to help Gradle do something super-small; it was a tiny, tiny thing. Now we are where we are, so that's great.

**Jerod Santo:** So we used to do this Changelog badge, and we would give it to you on your readme, where it'd be your episode number, and it was just a nice way to link to your episode. I used to open pull requests on a lot of popular repos, because they'd come on the show -- and we'd do it for you, so it was the Easy button... So I got a lot of merges onto pretty prominent...

**Martin Woodward:** Nice...

**Jerod Santo:** But I'm just literally adding the Changelog badge; I'm not improving anything, or even fixing a type... So I thought "Well, I wish I had a chance that I've put a badge on one of these", and so I actually had high expectations to be on Mars, and I got to my profile "Nope. I'm not on there." I'm like "Ahhh...! So close!"

**Martin Woodward:** Yeah... You need to have more Python people on there...

**Jerod Santo:** Yeah, clearly.

**Martin Woodward:** If you're gonna have more of these, that seems to be where all the cool kids are at. Or Curl. You've got the Curl one now. We're good. Curl is everywhere. One of my favorite things I like to do - you probably do the same; or you probably did - go to the license on things you're using, and go see how many people you know in that list... Like, see how many of my friends I can find in this particular third-party usages text file, or whatever... Daniel is always up there. He has his email address in these third-party usages.

**Adam Stacoviak:** Yes! We talked about that, which you probably know... We covered some of those things, where he got random emails because of his email being out there so much in the license, and whatnot.

**Martin Woodward:** Oh yeah, the one about somebody who thought he'd hacked them, or something like that.

**Adam Stacoviak:** Yeah, an Instagram hack.

**Martin Woodward:** Again, he's so nice! He actually answers people. He actually replies back to them. You find this across the board. Most of the maintainers you talk to are just such lovely humans, and just take time, and are nice... Especially the ones that have large communities around them, because the reason they have a community is because they've been so nice, so inclusive and so welcoming to people... They just can't help themselves, even when it's emails that are obviously from confused people.

**Break:** \[00:42:20.14\]

**Adam Stacoviak:** Martin, you've mentioned that you've got some education behind you... Physicist, as I understand, so you're in a good place to be in dev rel, with GitHub and all this fun stuff happening around science, and space and whatnot. What other fun things are happening? As a physicist or someone whose studied it, give me an understanding of what your education was, and then how that dovetails into some of the things you get to tinker with or play with, or communities to sort of encourage in their open source journeys.

**Martin Woodward:** Yeah, sure. So I did my undergrad in physics. I was always doing a bunch of astronomy and a bunch of that research. Originally, I was playing with Hubble Space Telescope data, and doing data analysis of that. That was back in the days where even having a TCP stack wasn't guaranteed. Trying to do a bunch of that sort of stuff back then involved getting DVDs sent over, and paying for them, with the Hubble Space data on them, and putting them in the one computer in the lab that has a \[unintelligible 00:44:47.14\] interface, so you could actually load that data up and do some analysis, some code...

It was very hard to share that code, and that's why astronomers and physicists and all the scientific community have been kind of quick to latch onto open source, and always been sharing a bunch of their code. That's obviously where a lot of the internet infrastructure came along as well, especially; it was from a lot of those networks of sharing those things.

So I did that, and then me personally, I went from doing some of that sort of stuff to -- I had like real jobs for a while, like working in banks, and insurance companies, and all the good stuff that you do... But when I was doing those jobs, I was always involved in open source on the side, to scratch that itch that everybody has \[unintelligible 00:45:28.07\] whether that be using a different language, or using a different thing... That's what we do.

So I was doing some open source, and ended up getting together with a few friends who were also interested in the same project, and we ended up building a company around it. It was this company called Teamprise. It was a super-small, five-person company. We did start it on open source, working together, we did a commercial application, and then we ended up selling that to Microsoft actually, funnily enough, about ten years ago. So we got acquired, as this little five-person startup coming in.

I figured that would last a couple of years, just do my time and then move on, because I was coming from this Java, Eclipsy, open sourcy world, and back then it wasn't really the thing it is now... Then it was around helping change -- you know, you've interviewed a cast of characters on that side of things in the past, so I don't need to dig into that... But I worked on that team, helping change Microsoft and change how they approached open source, brought Git into the company... I was on the creating Microsoft's GitHub account. There you go. There's my claim to fame.

**Jerod Santo:** Nice!

**Martin Woodward:** Yeah, it was running on my credit card for a little while. Then I did the open source stuff, and then moved over. Then I came to GitHub February last year; that was a great move. Now I feel like I'm home, because everybody cares about the same things I care about. We're all remote, and it's fantastic. I love it over here.

But in terms of why it was new, there's a lot of stuff going on in the science space. I mentioned a lot of these space tech startups... But even what we're seeing is the more established players, like NASA and people like that, and NISER... They're finding ways to use open source technology and to use more rapid technology, and integrate them as part of missions. So that's what you saw with Ingenuity, it was part of the main Perseverance mission. NASA have these levels of risk, class A, class B, C, D, and the rover itself is a class B mission in terms of how important it is in terms of scientific results and all that sort of stuff.

So that's a very high level of compliance to do to manage that risk... But instruments on it like the helicopter - it's classed as an instrument that's attached to the rover - they can be of different risk categories. Because if they fail - so what? As long as it doesn't hit the rover, then they haven't lost anything. They've tried it, it failed, and it's fine, whatever; we didn't lose anything. So as long as it doesn't affect the main mission, then they've got a bit more risk to play with. So that's why the helicopter can happen, that's why the things like the DVR box, the Linux box that recorded the video landing - that's why those things can happen.

\[00:47:59.01\] But then you also get them doing stuff like -- there's a James Webb Telescope that's coming up, which is kind of the success at the Hubble. Back before I started my career, back when I was doing analysis on Hubble data, this new James Webb Telescope was gonna be launching soon, and that's a massive, massive investment from NASA, and set to be like Hubble. Hubble has revolutionized astrophysics and revolutionized so many areas of humanities knowledge, and the James Webb Telescope is set to do the same thing. And it's got a bunch of technologies to keep things cold...

The platform itself is very class A. It's super -- they're making sure everything works; they don't particularly wanna send astronauts to go fix mirrors and things, like they have previously... But on the ground, the innovation never stops. You send some hardware, you send the platform up in space and you can get data from it. But just like when you're collecting data from IoT devices, or I've got little Raspberry Pi's out my window and I'm collecting data about a plant, because I'm trying to grow some basil and I fail... So I'm sciencing that, and I've stuck a Raspberry Pi on it, because now \[unintelligible 00:49:01.00\]

**Adam Stacoviak:** With Alex Ellis, right.

**Martin Woodward:** Exactly. With Alex, yeah.

**Adam Stacoviak:** I was paying attention to that little grow lab thing... I was like, "I should try that", because I love tinkering.

**Martin Woodward:** So just like that, you can innovate. You can keep innovating on the data and the analysis data. So with the James Webb Telescope - it's this big, important, massive mission, with billions of dollars being invested into it on the ground. All that analysis, and all -- just like with the Event Horizon Telescope; all the analysis done using Python, using lots of machine learning, using lots of new, different data techniques, and things... And it helps really kind of innovate and extend the life of these missions way past what people originally thought.

And the scientific community in open source has got so much in common, because... Like, with open source, code is what matters. Talk is easy in open source, as we all know. Everyone can talk. But if you show up and you regularly show up and you bring code and you help all the time, that's when people value what you're saying and what you're doing. In the scientific community, this whole notion of peer review and the whole notion of showing your working is what's important. So open source is amazing for that, because you can show exactly how we analyze this data. You can give the code to the people, so they can run exactly these experiments again. Take the data, run their analysis through it, look for issues, make sure you haven't made mistakes, and repeat things.

We see more and more scientific papers actually linking to GitHub repos, which is just super-cool. So I love it. There's electronics, physics nerds... I'm not a computer science person, so I always have a bit of C++ envy kind of thing, of people who did proper computer science degrees, whereas I was just coding Fortran in the lab, in physics, and just doing coding on the side at home... But yeah, I love doing what I'm doing.

**Jerod Santo:** It seems like it's served you well...

**Martin Woodward:** It was good. The Fortran side wasn't probably the most useful thing that I've done, but I was building website also to show my results with Fortran, and that definitely paid off... Because that was back in the Mosaic days. That's how old I am... But yeah.

**Jerod Santo:** So you've mentioned you only have one commit as of late, which was a deletion... Did you get to break the code editor out, or was it mostly hobby stuff? At work you're the senior director...

**Martin Woodward:** Oh yeah, I mean, on GitHub-GitHub it's mostly just little fixes and things they let me get away with... And then my code is all just hobby stuff, generally, or demo stuff, or showing things off. Some examples... I'm building the Raspberry Pi - this is with Alex Ellis - the growlab project right now. So if you wanna check out growlab, I can send you a link for the show notes... But it's using Raspberry Pi's and cameras and sensors, and just having some fun, and doing data capture, and sending that data up, and doing that.

So I'm playing with that at the minute. I've got my Raspberry Pi cluster behind me... You can't quite see it, but I've got a Raspberry Pi cluster that I'm trying to play with at the moment. I've automated my Christmas trees, obviously.

**Jerod Santo:** Nice!

**Martin Woodward:** I've hooked them up to GitHub Actions... You know, just a bit of fun. I mostly spend most of my time helping other people with their open source projects and helping make sure they can be successful. I'm trying to get them what they need. In fact, one thing that we're doing is we're bringing all these maintainers together... We're trying to do the best thing that we can do to do an unconference, given COVID times...

\[00:52:08.12\] So we're running this thing called GlobalMaintainersSummit.GitHub.com, and what we're gonna try and do is bring maintainers together and have a big group therapy session in a way, but also share knowledge. Because again, maintainers are awesome, and people have developed different tricks for handling different situations and different people... So we kind of want to bring those people together and provide a space for maintainers to get together.

So if you are a maintainer of a big project, then feel free to come along to GlobalMaintainersSummit.GitHub.com. I actually got the domain name -- I misspelled maintainers the other day, and spelled it as maintainerds...

**Jerod Santo:** Ooooh...!

**Martin Woodward:** And that was too good a typo to miss, so I went and registered all those domains. So if you do "maintainerds", that'll forward you off to GlobalMaintainersSummit, because I just thought that was an awesome domain name to add to my collection of domain name side projects that I'll probably never ever get to.

**Jerod Santo:** That's a nice one.

**Adam Stacoviak:** But worth collecting.

**Martin Woodward:** Yeah. I'll need it one day.

**Adam Stacoviak:** Very cool. Yeah, this upcoming thing with Maintainer Week is pretty cool. We're helping to play a fun role in it; we have a special secret, very secret guest that we're hoping to appear... We'll see, we'll see. But it's gonna be fun. June 7th is the week of Maintainer Week.

**Martin Woodward:** That's right.

**Adam Stacoviak:** Maintainer Summit is part of that, we're part of that, and some others are part of that, from Tidelift and whatnot... So it's all about finding ways to support maintainers, because as you said before, burnout is totally possible. We don't wanna gamify GitHub to the point where you feel like you have to overachieve. It's really about participation. It's about showing up, as you said before, consistently, bringing what you have of value to the table of open source. That could be docs, it could be code, it could be community, it could be governance, it could be management, it could be all these different things. It definitely is everybody working to the greater good of what open source can do. And I think coming back to celebrating this mission to Mars is part of that; that's a win. So Maintainers Summit, Maintainer Week - awesome. I like it. I'm excited about it.

**Martin Woodward:** Great.

**Jerod Santo:** And going back to what you said earlier about surfacing to maintainers their dependence in better ways... That's such a great goal. Because when you think about open source in its purest, it's a gift to the world. And I think you said these people are like the most helpful, nice, giving people. I mean, they're givers, like you said. It's what it is, you're giving code out there for anybody to have, and to hold, and to change, and to do what they're going to do according to the license... And that's a gift. And it's a weird gift, because so often, you're standing there, giving something to somebody, and you hand it to them; you say "Oh, open it. Quick. I wanna see your reaction. I wanna have that delight of you receiving this and enjoying it." And in open source you don't always get that part of it. You give it to the world, and then you find out six years later somebody was using it... It's also weird that it's one of the only places where you give somebody a gift and then they complain about your gift and tell you how much it sucks, and how you need to fix it, and stuff, and all those things.

So I like the idea of letting people know, without having to get reports back from your users, and teasing -- I was teasing Daniel about putting a phone-home in Curl, so he can know the actual use... Those kind of things. I mean, some people do put metrics in, like "I wanna know who's using this, so here's what I do." And that's their prerogative with their software. But it'd be great if we could let people know how much impact -- because there's lots of motivations for open source. One of those motivations is "I wanna maximize my impact with my software" and helping power a mission to Mars is one of those things. Like, look at that leverage - you wrote this code, and now you are part of something bigger than yourself, and you have massive amounts of impact... And sometimes you just don't know if you're having the impact you wanna have.

So if you guys can help in that way, I know there's like the dependency graph and stuff like that now... There's a new section, like how many repos depend upon this package or this repo... That stuff's starting to get in there. How are you thinking it can go further, or what else could you do beyond what you've already done, which is some dependency stuff inside GitHub.com to help maintainers really know who's out there using their stuff?

**Martin Woodward:** \[00:56:04.23\] Yeah, I think it's two ways. We need to help people know what their dependencies are, and then help them keep them up to date as well, because the amount of old security vulnerabilities and things you've got kicking around and you didn't realize... So we need to do that side. The people who are consuming - help them figure out what it is they are consuming, and how to keep it up to date, because that's kind of the problem they have.

And then how to support the projects that they're taking the critical dependencies on. Which projects are out there... If they can't support them with time, if they can't support them with resources, then maybe they can provide financial resources to, again, help that project, if that's something that we can do.

On the user/developer side - yeah, helping know how many people are dependent on this project would be awesome. My dream would be to someday do even more stuff around that... It's tricky to do, but now we've got Actions and things. I would love to do a way where if you've got a dependency, one of the ways you could donate would be to say "Yeah, I will donate anonymously the results of my \[unintelligible 00:57:01.21\] to these dependencies." And then as a dependency, you could say "Okay, well let's go run this thing, and run it with people who take a dependency on me and see if I break them. Because I'm gonna release this as a minor release kind of thing. I don't think it should break anybody, but... Oh, apparently it broke 90% of my dependencies, people who are dependent on my code." That's something I would love to know if I was an open source maintainer.

Now, doing the compute for that is a different question, and doing the opt-ins and making that be done in a GitHub way, that's kind of invisible to you, and lightweight, and easy, and things like that - it's all hard to do. But I think that there's just tons that we could go do to give value back to the maintainers, because they're the ones that are doing the awesome, they are the ones that are giving all these gifts out into the world... And so the more things that we can go build to try to give that value back, I think the better. So yeah, we keep on looking and see what we can do.

**Jerod Santo:** And that's the kind of stuff that you are seeking maintainer input on, right? Like, what could we do to--

**Martin Woodward:** Maintainer input on anything. \[laughter\] Bearing in mind, if it's -- I'm trying to think of an example... Certain changes we probably know, and there's probably good reasons why we've got them that way... But what it is that we can do to help you. Like, what is it that we can do to make your life more sustainable, easier as a maintainer, and give you more joy as a maintainer. How can we help your communities work better? Hacking communities is fascinating, how the psychology of crowds works, and all that sort of stuff. Stack Overflow are obviously doing a lot in that space, and we're doing this stuff in that space as well when it comes to discussions, and how we've added capabilities recently where you can temporarily switch interaction limits on, and things... So if the community needs a bit of a timeout, or if you need a timeout, or whatever, if you wanna go on vacation, then add these capabilities in.

I like that we added the ability to set your status, and you can sort of say you're on vacation, and stuff like that... Things like that. Even though it doesn't mean anything really, it doesn't stop too much, it's you as a maintainer, me being able to say "I'm on vacation right now. I'm not gonna answer for two weeks" makes me feel less guilty about taking a vacation for two weeks. So there's little things we can do like that, that help you psychologically not get burnt out, and help you survive and help you maintain, as well as the things of value. So it's about managing the entire person. It's fascinating.

So this is one of the reasons why I'm looking forward to this Maintainers Week as well that you mentioned... Just to join, and tease out the humans behind how we can make some changes to help everybody's lives, and help everybody thrive when we are getting these wins... Because open source is amazing, and the communities in there -- I owe my career to open source. I owe my children's education to open source, and to the friends I've made. Most of my friends I've made from the open source communities I've been lucky to be a part of, so I just want more and more people to be able to have these experiences.

**Adam Stacoviak:** This is such a breath of fresh air, honestly. I wanna celebrate this win, because there was a day when it seemed like that kind of response wasn't coming from GitHub... And I think this is prior to the Microsoft acquisition. If you recall, there was a "Dear GitHub repository..." out there. And it wasn't so much -- it was around maintainers and the voices of maintainers not being heard. So I think, together with you, Martin, celebrating that win for GitHub, that you are listening, that you are inviting maintainers to come and speak to you and to evolve the all-things GitHub, essentially, to make it better for maintainers... And better for everybody, really. There was a time when it seemed like GitHub was listening less. They were dogmatic in their ways, or whatever it might have been... And that repository is out there; we'll link it in the show notes for just posterity's sake... But I think that's a good thing, to celebrate that win, because you are listening, and you've already said your email on this podcast, so you're on the hook...

**Martin Woodward:** Yeah, exactly.

**Adam Stacoviak:** If somebody emails you, you're gonna have to answer, right? And that's how it works.

**Martin Woodward:** I'll send you a screenshot of my own \[unintelligible 01:00:56.07\] That email, again, is martinwoodward@github.com, or @martinwoodward on Twitter... But yeah, that's all good.

**Adam Stacoviak:** Exactly. Or when you're talking on Twitter, CC @NatFriedman, and there you go. You might get your change. It might already be in the works.

**Martin Woodward:** Yeah, yeah... Try to go to me first, that'd be great. It'd make my life easier. I'll have less dramas.
