**Adam:** Welcome back everyone, this is The Changelog and I'm your host, Adam Stacoviak. This is episode 203, and today Jerod and I are joined by Sara Chipps, the creator of Jewelbots, a friendship bracelet for the Smartphone era. We're also joined by George Stocker, the VP of Engineering and we talked about connected wearables for kids, keeping UX simple, Open Source and building your business around Open Source, influencing young girls to the possibilities of coding.

Our sponsors for today's show are Linode and Rollbar.

Our first sponsor of the show is our friends at Linode, and we want to invite every single listener of the Changelog to try out Linode, one of the fastest, most efficient SSD cloud servers on the market. You can get a Linode cloud server up and running in seconds, you can get a choice of Linux distro, resources, node location. They've got eight data centers all across the world: North America, Europe, Asia-Pacific. Plans start at just $10/month. They've got hourly billing, and you get full root access for more control. They can run VMs, run containers or even a private Git server. Enjoy the native SSD cloud storage, Intel E5 processor, a 40Gbps network. Use the code 'changelog20' with unlimited uses to get $20 of credit in your account. Tell your friends, it expires later this year so you've got plenty of time to use it. Head to linode.com/changelog, tell them we sent you, and now onto the show.

Alright, we're here today joined by Sara Chipps and George Stocker. Jerod, you know that I love kids, right?

**Jerod:** I do know that, yes.

**Adam:** And more importantly, I love when kids are encouraged by technology, and here's two awesome people joining us. You and I have talked about getting Sara on this show several times, and here she is.

**Jerod:** Yeah, thanks so much for joining us.

**Sara:** Thanks for having us. We're super excited to talk to you all today.

**Adam:** So one of the ways we open up the show is sort of a quick introduction. We'll start with you, Sara, and we also George, your CTO on the line with us as well, which we'll introduce to you in just a second. So tell us who you are, Sara. How do you introduce yourself to the hacker world?

**Sara:** Usually I like to say that I'm Sara Chipps, I am a Javascript developer; I've been building software for 15 years and now I'm building a hardware company called Jewelbots.

**Adam:** George, you're part of that too, so tell us your story.

**George:** Well, I've been a software developer for the last ten years - first with the army, finishing college and then several different industries, and I've jumped around different tech stacks and I've landed in hardware as well, most recently doing firmware for the Jewelbots.

**Adam:** Interesting. I don't think we've ever had anybody on this show, Jerod, that's been a software developer for the army, have we? That's a first, right?

**Jerod:** Not that I can think of, yeah.

**Adam:** Tell us about that, George. What's that part of your history?

**George:** Yeah, so I joined the army on my 17th birthday, and then on my senior year of college we were called up to act duty, to go over to Iraq. I was there, was injured, came back and spent some time state-side at an army base called Fort Bragg.

**Adam:** Airborne?

**George:** Airborne, right. I wasn't, though. But at that time there was no real infrastructure in place for reserve or National Guard soldier who were injured. They would typically stay on the act of duty to get their medical care. The problem was there was no infrastructure in place, so I was there when one of the first units really started cropping up. At the time they were called 'medical holdover' units, now they're called 'wounded warrior' units, I think. And they had an access database they used to take care of these soldiers. It was a one-table database, and it must have had four or five hundred columns in it. They used this database for everything - they used it to track soldiers' care, they used it to track their disability, they used it to generate reports for different agencies... And because I was taking programming in college and I knew this, they said "Hey, why don't you work in the admin section? We need some help here." So while I was there I went about automating lots of different reports and different functions that needed automating, so that they could work more effectively. Not what I signed up to do in the army, but I'm kind of glad I was able to be useful during that time.

**Jerod:** Jewelbots seems like quite a different deal than you were up to previously...

**George:** Yeah, as I said, I've jumped around industries, and I've gradually gone backwards... Where most people may start at a small company, a startup, and work their way towards the corporate world, I've started at really large companies and have worked my way back to a startup.

**Jerod:** Very cool. And just for the listeners, Jewelbots is the world's first programmable friendship bracelet. It's focused on young girls and getting them interested in coding. It's all programmable and open source, and built around Arduinos. Sara, I believe this is your brainchild, as the founder of the company. But before we get into Jewelbots, can you kind of tell us - you said you've been doing Javascript and you're active in the New York community Javascript stuff. You've also written a lot, done some speaking... Can you give us a bit of your background, how you got into programming, what exposed you to Javascript and how you got to where you are today?

**Sara:** Yes, so I started programming when I was about 12, and I discovered it because I was a homeschooled kid; I'm part of the generation of people that got into programming because they had no friends, I always say. \[laughter\] Now it's a lot cooler than it was... But I discovered BBS's before the internet was a thing, and I ended up getting really involved in my local community of BBS's, and dialing into local communities and helping to host a BBS down the line with local high-school students. Then I went to high-school and I took a C++ class and it was just one of those situations where I was like, "This is the first thing that's ever made so much sense to me. Programming - this is speaking my language, literally." I knew then what I wanted to do for the rest of my life.

I studied Computer Science at Penn State and then my first job was at a company \[unintelligible 00:07:09.24\]. It was in 2001, when there was no jobs, so when I was out of school my first job was I was an executive assistant... It had to be like the first week out there, and an older woman came up to me and she was like "You know you're supposed to be wearing pantyhose, right? We have to wear pantyhose." \[laughter\] "Okay... This is great. I can't wait to do this for the rest of my life." \[laughter\]

**Adam:** Are you being serious there? Of course not, right?

**Sara:** No, no... So, you know, I just really tried to apply to everything, and this was a time where everyone was losing their job, so there wasn't much to go around, but I finally found a role working at a helpdesk. That's where I got started in technology. So I started there and then I moved over to Applications Development Department focusing on Visual Basic .NET and Visual Basic applications, and then after that I got more involved in database administration and data warehousing and things like that. Then I moved over to the world of C Sharp and ASP.NET and became and became an ASP.NET MVP with Microsoft. Then I discovered Javascript... I discovered Javascript around the same time that jQuery came out and Firebug had just recently come out as well. Before that, Javascript was such a pain to work with, but those two inventions really made it a lot easier. Then when people started working with Node - that was amazing, because I love backend development, and being able to do frontend and backend in the same language makes everything so much easier. So it was kind of a natural progression.

**Adam:** I totally remember when Firebug really made a big difference, when Firefox was... It was "Get Firefox!", and it was all about the \[unintelligible 00:09:06.27\] movement of making the web better. All these new tools came out to enhance the web development process in the browser.

**Jerod:** Before that, all you could do was throw an alert in your code and have it pop up, and half of the time it would just say, "Object Object". \[laughter\] If you could get some sort of information out of the browser it was a huge thing, and Firebug really - I don't know if coining it 'revolutionary' is overstating that, probably not; it definitely changed things dramatically for the better.

**George:** Yeah, definitely. It was really awesome.

**Jerod:** So it seems like you probably came to open source by way of Javascript. Is that fair to say, or was there some open source influence in your life before that?

**George:** No... I came to open source by way of .NET. I had some really great mentors while I was doing that, and got involved in some open source projects doing that. It's not something that's rampant in the world of .NET, but there's definitely a group of people focused on that, and that was pretty neat.

**Adam:** Interesting.

**Jerod:** Yeah, you don't hear that very often, especially during that time period. Nowadays Microsoft has promoted open source so much with open source in .NET itself, and it seems like that community has really exploded in the last two or three years. But in the time period that you were talking about, you don't necessarily -- or I don't, at least in my mind, think of the .NET community in relation to open source. That's interesting.

**Sara:** Yeah, most people don't, but it was a really big part of my maturity as a developer.

**Jerod:** One thing I gotta ask you about since we have you here is your Twitter bio, which is just spectacular. It says, "Just a girl, standing in front of a microprocessor, asking it to love her."

**Adam:** Yes, I've always loved that one, too.

**Jerod:** I don't really have a question, I just wanted to say that out loud, and say that's just a great Twitter bio.

**Sara:** \[laughter\] I feel like that's often my life. Just like, "Come on, just please love me." \[laughter\]

**Adam:** What made you come up with that? \[unintelligible 00:11:12.07\] Does that share more about your personality than we get to see through your code and just how we know you from the internet?

**Sara:** Yeah, I guess so. I think that I had just found myself in another situation where I was coding and just begging the system to work for me. You know, it's really always funny when you take a step back and you decide it's not you, it's the machine.

**Adam:** Right.

**Sara:** So I think that's a good perspective when you just keep coming up against a wall.

**Jerod:** Prior to Jewelbots you also were a CTO of Flatiron School and you started Girl Develop It. Can you tell us a little bit about those two things?

**Sara:** Yeah, so Flatiron School is a great organization that does programming boot camps for adults that wanna learn how to code, and one thing I really appreciate about what they do is they place all their students in jobs. I think they have a 99% placement rate, which is huge. The reason I joined them is because they build programmers and then give them careers, which is really awesome, and they do a lot of good work. It was a great experience to be able to work with them and see what they were doing. It was kind of a natural progression after building Jewelbots - (Girl Develop It) which is a non-profit that focuses on teaching adult women how to code. That kind of was born from some time I spent with a friend where we both realized that we had both run into the same scenario where often we were the only females in a class full of men, and being really awkward and nervous when it came to asking questions, and never wanting to look like we didn't know something. So that was a neat experience, to be able to provide that for a lot of people, that turns out really needed it - a place where they can feel free to ask stupid questions and not feel weird about it.

**Adam:** I'm kind of curious of a little bit more about you and George, your backstories - not so much how you joined up as a team, but what initially struck both of you, your curiosity with software development. I think you kind of touched on it a little bit Sara, but I'm curious of a particular moment, if you can remember it, where you felt like this was your thing, that software development was something that you could do - and maybe not do, based on your Twitter bio... But maybe both of you can share this visionary moment where you were like "This is something I can do. I actually like this. This is something for me."

**George:** For me, I got into computers really young. My father was a magazine editor, he worked remotely in the '80s for a magazine publisher in New York City, and as such we had a computer and we had a dial-up modem, and all that. And I was the first kid on my block with a Local Area Network \[unintelligible 00:14:33.28\] I don't remember, but it was very neat to actually have two computers talking to each other and to be on Prodigy back when it was still on full DOS, in the mid to late '80s. So that's when I knew, "Hey, I wanna do something with computers." I would just tinker with them, learn how to crash them, do various things with them, but I never realized that programming was anything other than magic. That's how I always saw it. I didn't have any mentors that said, "Hey, this is all you really need to program. You need a text editor, you need a compiler, and poof!" I never knew that, and it wasn't until college when I actually took my first programming class, where I realized, "Wow, I can do this." That's when I finally realized I can fuse my passion for technology with programming. That's how I became a programmer.

**Adam:** The reason why I wanted to ask you both this question, it's good for perspective too, because this is your business, right? We're gonna talk about Jewelbots here in a bit, at depth - not only about its purpose, its mission, its goals, but also the technology behind it, and I think it's important to share what got you excited in light of you exciting other people, and introducing other people into technology. So I thought that that would be just a little anecdote to share before Sara goes.

**Sara:** Yeah, that's great. That makes a lot of sense. I think I found it because, like I said, I wanted to make friends and not because I thought engineering or programming was cool, because they weren't then and they're still not cool now. \[laughter\] I was never super talented at school; it's not something that I ever really excelled in. I was never super academic, and I remember even the same year - I'll never forget this - the same year that I started taking C++ as a class is the year my chemistry teacher said to me, "Sara, I didn't know it was possible to get a 13 on a homework assignment, but you have proved me wrong", in front of the entire class. \[laughs\] That was not a stellar moment in my life. But it was when I started taking that C++ class, it was the first time I was able to just sit down and be amazing at something. It really just felt too like a fish to water, where I was like, "All of this makes so much sense to me, and I'm really enjoying this. And also this is a class", which was a pretty neat experience.

**Adam:** It's interesting to hear that, because I'm sure that there's some parallels into Jewelbots and into your work there... Sara, you as the originator of the idea, and George, I think your perspective for you is you joined the team. Were you part of the original idea, or was this simply your idea, Sara?

**Sara:** Well, I worked on Jewelbots for a little over a year before anyone joined up.

**Adam:** Okay, so this is clearly something as a brainchild, simply from you, and everyone else is sort of joining your party, so to speak.

**Sara:** Yeah, but since people have joined it's definitely evolved a ton, and that's what's really neat about being a part of a team that's growing. Every time someone joins, their voice gets added to the project, which is very cool.

**Adam:** Right. We're getting close to our first break here, so it's a good place to pause, definitely teeing up the next segment which is diving deeper into Jewelbots. So stick around, listeners. We're gonna dive deeper in when we come back from this break.

**Break:**

**Adam:** Alright, we're back from the break. Jerod, I swear, I wish we can release the breaks to our listeners because I think sometimes we have more fun in the breaks than we do on the show - that's not exactly true, but... We have fun in the breaks. Y'all missed it, so we're gonna try and bring a lot of what we just talked about in the breaks out. Sara, when we talk about Jewelbots we think about just the exposure for children, the exposure for young girls into technology. You said you had worked on this idea for a year by yourself. Take us through the journey - how did this begin for you, what's the origin story for Jewelbots?

**Sara:** Yeah, I mean, I talk to a lot of my peers about how they got involved in programming early on, and I think the majority of the time I heard from them, "When I was a kid I played games, and when I grew up I just wanted to make games."

**Adam:** We've heard that one on here a lot.

**Sara:** Yeah, exactly. Like, "I wanna be a game developer when I grow up", and then people grow up and they realize how lucrative it is to develop literally anything else. \[laughs\] \[unintelligible 00:21:24.03\] but I'll got to work as a defense contractor or something, because that's a lot more profitable. But I think that the stuff that we're building for girls around that age is consumable technology. It's all things they consume and it's all things that they partake in, but they're not encouraged to be creators or to build, like we are doing for boys. And I think no one's ever entered this... I mean now, because people make money, right? Now building software is pretty lucrative, so I think people are like, "Hey, I'm gonna do this software thing if I'm gonna make money doing it." But when you're 12-13 no one thinks it's cool to be an engineer; to date no one thinks it's cool. I've gone to talk to a lot of high schools and I've tried to hype it up for them - it's really hard to do. Everyone that I know that really loves it and is passionate about the field got into it for some other reason. So the question that I found myself asking was, "Can we create that reason?" Can we artificially create a scenario in which we can turn girls on to coding younger?

Also, if you look at things like Minecraft or MySpace or Neopets, those are all situations where kids find something that they love and they teach themselves to code to make it better.

**Adam:** Yeah, my daughter's doing that now. She loves Minecraft and she is learning things I didn't even know she would learn without my guidance. Not that I'm super awesome, but I figured that I would be the one that would open that up for her. It's these other avenues, like Jewelbots and like Minecraft that's exposing these children to this idea that they can create something and learn to code.

**Sara:** Yeah, it's really crazy. I know that all the stuff from Minecraft is in Java, and like who wants to learn Java? Java's the worst! \[laughs\] I was 19 when I learned Java and I was like, "This is gonna ruin my life." \[laughs\]

**Adam:** Wow... Tell us how you really feel about Java.

**Sara:** \[laughs\] So yeah, kids are really motivated and really smart. You have to be smart to teach yourself Java, so that's really given me a lot of faith in this stuff that these kids can do. So the first idea was to make a bracelet that changed color based on your outfit. So you'd get up in the morning and put on your bracelet and decide what color it would be. If I was wearing blue, my bracelet would be blue - that kind of thing. So we've built a prototype of that and brought it to a few schools and after-school programs. Across the board we heard that that was stupid and the girls would never wear it. We were like, "Alright, thanks. Because we just spent months building this, but whatever." So we started talking to them about what they do like and what they do enjoy, and looking at what they are wearing now, and just their friendship thing kept coming up over and over again - "Communicating with my friends", "Being near my friends", "Hanging out with my friends", and they're all wearing friendship bracelets already, and the signaling part of that is really important to them. So we were like, "Can we build a smart friendship bracelet that you could code?" So that's what we did.

**Adam:** So the first version of it wasn't quite that. It was a version of it, but not quite the friendship bracelet or going down the path of, "Here's something that's already in the hands of these young people that you wanna influence." It was already there, and you kind of went into I guess the environment in which they were already in - school, and things like that, and thought "Hey, you're already sharing these things, you're already doing these things with your friends. Why not make them smarter?"

**Sara:** Yeah, exactly. If there's anything we learned from this whole process - or that I've learned - is that I have no idea what teenage girls like. So whenever we need to make a decision about design or functionality or any of those things, we talk to them first.

**Adam:** Wow. So you have a small panel of children that give you big ideas?

**Sara:** Yeah, we've talked to so many different groups in so many different ages. We have an ambassador program where kids can sign up to start getting stuff from Jewelbots in the mail, and sometimes we pull some of our ambassadors to ask them, "What do you like - this color or this color? This design or this design? What's more fun to you?" That's a really fun part of my job.

**Jerod:** One aspect that I really like about the friendship bracelet is not only does it help you guys in terms of marketing because it's more fun when your friend has one, but also it kind of speaks to your initial intro into software and engineering, Sara, where you were on BBS's trying to make friends. You were reaching out socially and using technology to do so, and that blossomed into your career, so now you're providing really what is a social accessory/toy - I'm not sure what specific category you guys put it into... Jewelry/toy that really promotes girls being social together.

**Adam:** It's like the young Sara would have loved this thing.

**Sara:** The young Sara would have loved this thing. \[laughs\]

**Jerod:** Yeah, exactly.

**Sara:** Yeah, and I think that's one of the reasons why diversity is so important. We have eight million fitness trackers out there, and my theory about the fitness trackers... The quantified self-movement is very much a developer thing. Everyone for a long time really wanted to track everything they ate, every movement they made, report against it, see what they can learn about themselves, and that wasn't an average person thing, that was a very developer/technical engineer community thing to do. So when wearables came out, everyone made a fitness tracker. It turns out fitness trackers have a horrible retention rate. People buy them and don't wear them, and even the people that wear them, most of them don't use them; they just wanna look like they... I heard a great quote from the CEO of a fitness tracker company that said, "People don't wear our wearable because they work out, they wear it because they want to look like they work out." So I think that when you introduce diverse people to building companies and building products, you get to serve the diverse world of people that are buying them.

**Adam:** Maybe now is a good chance to break down exactly what the current feature set is, and maybe even share some of the future, or some of your dreams that aren't quite there yet, but soon might be. Help our listeners understand exactly what Jewelbots is, what it does, how it looks... Give us a description.

**George:** Jewelbots, as we've said, are programmable friendship bracelets. They come with a motor, four LEDs and with a removable plastic charm that goes over the assembly so that you can actually customize what you want your charm to look like - if you have a 3D printer, or you can buy customized charms from us. They work by -- when you have two friends that are close to each other you tap on the bracelet and it goes into a friend-finding mode, and then when both bracelets have done that, then you can actually pair it with your friend and choose what your permanent tone is, or what color your Jewelbot should react whenever you two come into each other's presence. And when that happens, when you see each other from there on out, your Jewelbot will always light up with whatever color you share with that friend. If you have multiple friends from multiple different color groups around, then your Jewelbot will pick the four closest and react with those four different colors. Then if you have all of your friends around in a single group that you have on your Jewelbot, then it will actually go with a customized animation.

**Adam:** I've been kind of curious about this aspect of it - is all the interaction on the device itself, or do they need to go over and hop on mom or dad's computer and do some hacking and then sync it via Bluetooth, or something like that. How is the programming to device interaction? How does that take place?

**George:** The device is meant to be used without needing a cell phone or a computer to interact with. You pick your Jewelbots out of the box, you'll be able to get other Jewelbots and pair with them using the bottom. To do more advanced things like programming them you'll need a computer, but you can also interact with the Jewelbot through the app. We're releasing an iOS and an Android app that allows you to do things like manage your friends and program custom interactions through the app as well.

**Adam:** So they'll be able to actually write some code in the app that goes back onto the device itself?

**George:** For the app it will be limited to things like "When this happens, do this", and we'll have a few basic interactions that we allow you to do for the app. Most of it though will be through Arduino and through actual code examples that we'll host on our community site.

**Adam:** I guess when I look at this I see sort of two camps. You can be the - I hate to say the word user, but you can be someone who uses this thing as the version where you don't have to program and you don't have to go that route, or the person that picks up and says "Wow, I can hack this thing. I can make it my own", which I'm not even sure if kids are saying that. Sarah and George, maybe part of your research is finding out whether kids even think or care that they can hack something or change something or create something like that. So how do you focus on the divide there of someone who might just use it through the app, and is that part of your mission? Or how do you focus on the people that are wanting to go a little further and actually open up a computer, learn a language and do something interesting with it?

**Sara:** Yeah, that's a great question, and I think the answer to that is I think a very big portion of our users won't code the device, and that's okay with us. It's funny, one thing that we've done - I just wrote a medium post about this - is we've gone to a lot of different schools to talk to girls in our demographic to learn more about them. And when we go to the more affluent school, the private schools where the girls may have a little bit more spending money, we see them wearing the Jawbone UP, or a Fitbit, or a Nike FuelBand, and...

**Adam:** Really? Wow...

**Sara:** Yeah, and so I would see that and I would ask them, "Hey, how many steps have you taken today? Are you fulfilling your goals?" and they would say things like "Oh, I don't know" or like "I have no idea."

**Jerod:** Yeah, it's just a fashion accessory.

**Sara:** Yeah, and I'd be like, "Well, why are you wearing that?" and they would just be like "It's a wearable. It's cool, I guess." None of them care about tracking their steps; no one's building for them. So we're so excited to be the ones building for these girls, building something for them and their interest.

**Adam:** So it seems like maybe then - and maybe this might clarify it - the coding side of it and the influencing, exposing that next generation as you say, of women to the possibilities of technology is the bonus to this.

**Sara:** It definitely is. And it's fun making something they love. Our first goal is to make a product that they love, and my theory is that if we make something that they love and we give them the ability to code it, that they will. We'll always be focused on that percentage of conversion, how many of them are coding it. And if when we release it a very small percentage of them are coding it, we're gonna ask ourselves, "What can we do to make this percentage larger?" But if we can make a product that millions of girls are using and we can convert 15% of those girls into coders, that's a lot of coders that \[unintelligible 00:34:39.24\]

**Adam:** Absolutely. So what age group is it that is the focus then?

**Sara:** Eight to thirteen is the ages that we've worked with, that we've seen this really resonate with.

**Adam:** What happens at 13? Is it like, "I turned 14, it's not cool anymore" or what?

**Sara:** At 13 they're still in middle school. When they hit high-school a few things happen. Our design in general, we've gotten the feedback aimed at that age group, and when they hit high-school, those girls are going for the accessories that I would buy. If you look at the sites that they frequent and where they shop, these are all things that feature 35-year-old models; we shop in the same stores.

We've heard a lot of interest from older girls, but I think we'll resonate the most from middle school age.

**Jerod:** I like that, the strategy of providing this great out-of-the-box experience that realistically only a majority of your customers will use. But maybe just start off with and then have this kind of superpowers built into it if you're willing to cross that divide that Adam talked about. My frame of reference - I have a 7-year-old daughter who's coming upon 8 here and I'm watching her; she just got exposed to Minecraft through friends at church, and she's very much in that phase of Minecraft where she just wants to play the game. But she's seen a couple of the older boys who have mods doing stuff in Minecraft, and she has no idea how they can do it. They have these great things they've built and so on and so forth, and she's starting to get the itch of "How do I do that also?" And I see a very similar path here, where some of your more coding requirement features or things like sending SMS, notifying your parents, things that are tantalizing... And maybe you wear it and you just use it for the friend detection for two years, and then one of your friends sends an SMS on there, on their Jewelbot, and then you have that synapse-fire. You're like, "Oh, I wanna do that."

**Adam:** Yeah, the social proof kind of thing; your friends influence one another.

**Sara:** Yeah. And I think another part of that is there are plenty of educational toys out there. If you want to buy an educational toy for your child, they exist and we don't need to build another one of those. Parents that care about this - and there are a lot of parents that care about this, and there are a lot of parents that know how important this is, and they care, and they're buying educational toys, and that's a very important part of the community. The things is though, kids don't want educational toys. Your average kid out there isn't like "What can I buy that's gonna teach me?" The average kid out there is saying, "What can I get that's gonna entertain me?"

**Adam:** Right.

**Sara:** So if we can figure out how to entertain them first and then introduce the programming aspect after that, I think that that will be better for the community.

**Adam:** Well, let's talk about a topic then that I can only imagine is the hidden gem here to a degree - the user experience. I can't even imagine how simple this thing has to be, one because it's for children, and then two, that it will allow the interaction with friending and these different things that are happening in the social space of meeting their friends - that has to be very fine-tuned. Can you share any interesting notions about the user experience here, or any new revelations you've had on the user experience of this device and how it works?

**Sara:** Yeah, I think George will be the best person to talk about this because he is the one that is elbow-deep in this every day.

**Adam:** Oh boy... Tell us, George.

**George:** So programming is hard enough as it is, and when you're trying to get young people into programming, you've got to make it as easy as possible. What that means for us is right now we've sent out wearables kits (we're selling wearables kits on our sites), and what we're doing is some of the support questions that are coming in from that will shape what we do when we release Jewelbots to make it easier for people to start programming. Simple things, things that need to be done but haven't really been done yet, like making Arduino tooling easier to deal with, making it easier to install, getting that ramp from "Okay, I'm installing this and now I've shipped my first program to my Jewelbot", making that ramp as low as possible, to the Jewelbot. That means making sure that we have a community site setup where they can talk to each other, making sure that we have code examples, having good documentation, as well as actually having the onboarding experience, kind of take them through something really simple and really useful at the same time. So it starts with the app.

**Adam:** I can't imagine how hard that is.

**George:** It's incredibly hard, and it's not something that we're even obviously close to having perfected, but I take notes every day on any little problem that I have, and that's another action item to fix before we release it. If your users have a Windows computer, then you've gotta be able to make sure that they can set up Arduino easily on a Windows computer, or a Mac, or whatever it is they have. So that means figuring out what our users use, and programming for that. It also means making sure that I take the designs that I look at when I'm writing the APIs or when I'm designing the APIs that they're going to be using, I take it to someone who has no idea about what programming is. I'm saying, "Okay, look at this. What does this mean to you?"

**Adam:** Right.

**George:** My wife is a teacher and she's got a lot of teacher friends, and they all love the idea of Jewelbots, and they keep asking me, "When will they be ready? When will they be ready?" And in return, I say, "Hey, can you take a look at this? Just try this, and tell me how it goes." That's how I come back with, "Okay, this word and this API doesn't make any sense to them." It makes sense to me as a programmer, but it's not going to make sense to people who aren't already programmers. So it requires a lot of introspection into why is each step the way it is, and what steps can be removed, and what can we make easier for people.

**Jerod:** Well, we're bumping up against our second break here, and I can already hear some of our listeners firing up their \[unintelligible 00:41:48.27\] command line tool to tell us, "Hey, this is an open source show, this is a technology show." We've covered the history, we've covered the purpose, we've talked about the features and the user experience... We would like to dig deep on some of the technologies inside of Jewelbots, the open source aspect of it, even the programming languages that you're exposing for these young girls to code with. So we will camp out on those topics after this quick break.

**Break:**

**Jerod:** Alright, we're back, talking about Jewelbots, and we wanna look at the open source side of this. In the video you say that it's 100% open source, the whole thing is open source. Of course, we know it's programmable and extendable, and that's great. We also wanna hear some of the technologies that are inside it - you mentioned Arduino, there's an iOS app, there's IDE surely, you have some programming language that's exposed to the customers, whether it's just Javascript or something specific... So that's a wide-ranging opportunity there to talk; share with us what open source is involved and also the underpinnings of Jewelbots.

**George:** For Jewelbots itself, obviously the firmware itself is written in C; not open source yet, but when it's released, the plan is to open source the firmware as well. We also have an open source app that's written in Ionic, which is a UI framework for Cordova. As part of that, to actually talk to the Bluetooth on the phones, on the iOS and on the Android phones, we wrote a wrapper for the Bluetooth Elite Plugin for Cordova, that we actually open-sourced as well.

As far as the languages that we'll expose to the user, initially it's going to be the same things that you'd see in Arduino, so C, C++ and then later on as it becomes more mature, we definitely wanna get Javascript in there if we can.

**Jerod:** I was gonna say, Sara, you mentioned that Java is something that kids are now dealing with with regard to Minecraft. It seems like dealing with C and C++ is even asking more of them, to get to the programming side of things.

**Sara:** It is, and we'll see how it goes. We've done a couple hackathons to see how they would do in that environment, using Arduino and a \[unintelligible 00:44:49.25\] Some of the younger ones needed parents, some of the older ones were able to just fly with it.

The first language I've learned was C++, so we'll see... If we do find that they have a problem with it and we aren't converting, then we'll look towards doing a visual programming language, a drag-and-drop type interface. But I think they're smart enough, I think they can do it. We'll see.

**Jerod:** I guess that leads me into the question that maybe we have just avoided so far, but George, you mentioned previously that some of the teacher friends of yours, they wanna get their hands on it, and I guess we haven't really given a status of where Jewelbots stands with regards to shipping product, or anything like that. So just briefly, can you guys tell us where it is as a product?

**Sara:** Yeah, so we're going to be doing an alpha shipment later in April, where we'll send out our first units to our customers and test them, get their feedback. These are gonna be customers that signed up to be part of a special program, because we're gonna need a lot of feedback from them. We wanna make sure that the bulk of Jewelbots have been thoroughly tested and we're getting feedback from folks that are implementing it. Then the rest are gonna be shipped over the next few months. We've just started the manufacturing process, we signed with the manufacturer this week.

**Jerod:** Very cool. And when it comes to technology and the Arduino stuff, Sara, yourself a Javascript developer, probably web-focused - I'm just assuming, from what I know - and yet you have this idea for a hardware product... Maybe share some of the ways that you went about developing out a hardware product. That's interesting both to myself and probably to some of our listeners who would love to have tinkering with Arduinos and robots and whatnot, but maybe haven't had a chance to tackle that particular challenge.

**Sara:** Yeah, well I started attacking on hardware when Nodebox first started being a thing and people started doing Javascript and Arduino, which is very cool. It's a project built by Rick Waldron, who made Johnny-Five and a way to talk to Arduino using Javascript. The thing about building a hardware product is you start with the worst possible version, like a big ole Arduino and whatever you can take to it, and then you start iterating to make it smaller and faster, and something that you could build.

So in the beginning it was me doing it, and now we have the privilege of working with people who have studied this and have done this in the past, and they know what they're doing as far as building an actual product.

**Adam:** So you obviously have - and George, you do as well - roots in open source, users of it, contributors to it. I'm kind of curious, as we're on this open source flare here, why open source matters so much to the future of Jewelbots? Why is it important to open source the firmware whenever it's ready? Why is that important, to open source this stuff?

**George:** With what we're doing, which is a wearable that kids can learn to code, there's not a lot out there publicly on firmware for open source projects. You have Tassel, but for what we're doing there is not a lot in public regarding this chip and what you can do, and actually real uses of it. So the most selfish reason I have for wanting to open source this is because it'll help give eyes onto what we're doing and make our product better, and it provides a way of sharing the knowledge of what we've learned. Spending the last 6-8 months on firmware I've learned a ton, and I know that there's a ton that I don't know, and I hope that by open-sourcing it we'll get more eyes on it, and get more people either interested in it or providing feedback, or making it better. And that's something you just don't get if your software isn't open source; there's no feedback loop.

**Adam:** Alright, we've had somebody...

**Sara:** Yeah...

**Adam:** Sorry, go ahead, Sara.

**Sara:** No, I just wanted to take it a step further and say I think that everything we do at Jewelbots, we try to be as transparent as possible; I think open sourcing is part of it. You see the open-source community in software, and even taking from George's example, if you compare the innovation in software versus the innovation in firmware in the past ten years, you'll see that software is light years ahead of firmware, because everything is closed-source, everything is proprietary, and people don't share what they learned. That's the culture. And firmware takes so much longer to build because of it, and one thing I've always believed strongly is that we should all be learning from each other, and if someone could be doing what you're doing better than you can, then they probably should. We think we're the people that are most qualified to build Jewelbots, but if someone out there can ignite girls in a better way or can do this better, they should be.

**Jerod:** One of the more interesting features - in my opinion, of course - is how you do the Bluetooth stuff out of the box, where the Jewelbots will detect nearby friends. It seems that you have some secret sauce there in terms of how that network is set up and how that Bluetooth functionality works.

Correct me if I'm wrong, I think I read in the Wired articled that you do have a patent filed around that implementation, or something similar. I'm just curious on your thoughts around that decision and how it jives or doesn't jive with the spirit of open source, so to speak. I know business and open source sometimes butt heads. Just curious about your thoughts around the patent.

**Sara:** Yeah, I think that's an excellent point, and an excellent question that I often ask myself, too. One thing that we're doing that other people aren't is using wearable devices for communication purposes, rather than for step tracking and notifications, things like that. That's something that came up in our research with girls, as they have to turn their phones off in the school; they're not allowed to have them, so we couldn't depend on their phones for communication, which is what devices do now. So we jumped on the opportunity to start using the different devices as nodes and to build a mesh network around communication in the wearables. We immediately jumped on that patent mostly to protect ourselves from the larger companies that would shut down someone like us, and also it makes the company more valuable in general, I think. But we're definitely not out to become patent trolls, so there's definitely a balance that you have to reach there. And I think the reason why we're the first ones doing it actually is the ability to talk to multiple devices, both as a central and a peripheral -- you know, you have Bluetooth devices act as either a central device or a peripheral device, where one is sending information and one is receiving commands. The microprocessor that we're using is one of the first to allow first of all a device to be both a central and a peripheral, and also to have conversations with many devices at the same time. In fact it's so funny - George and I joke a lot about this, because I found about this microprocessor about two years ago and I was so excited. I talked to a sales person and I was so excited about it, and so we decided "This is definitely what we're gonna use." At the time it was just me, and I was like "Oh, this is definitely what we have to use for Jewelbots", and they'd just released the library for this particular microprocessor to do it, a few months ago. \[laughs\] The salesperson was like, "This can definitely happen", and he didn't mention the fact that it was gonna take a little while. So yeah, this is something that's fairly recent, which is why we're one of the first few doing it.

**Jerod:** Very cool.

**Adam:** That's an interesting point around the patent, Jerod. We have had that question that you asked before once on the show, and on Twitter there was some backlash - we won't name names just because it doesn't make any sense to do it here on the show, but just as you mentioned, Jerod, patents and open source... But Sara, I think your point - to protect yourself from other companies who might stop you - is certainly a good point, to have a patent, and also to make your company more valuable. Because investors are gonna say, "Well, can somebody else come on the market and do exactly what you're doing?" If the answer is yes, then you become less valuable.

**Sara:** Yeah, exactly.

**Jerod:** Yeah, I go back and forth on my level of open source purism or idealism. I tend to lean on the more pragmatic side of saying, you know, we do have proprietary things in business, and we're not required, in order to participate in the open-source community and everything that we do open source - GitHub.com, which is one of our favorite open source companies in terms of how much they give back to the community, not just as a host, but with Atom and all these other tools that they provide... But GitHub.com is closed source.

**Sara:** Yes.

**Jerod:** So sometimes we think, "Well, everything has to be completely open" and patents fly in the face of it, but at the end of the day sometimes there are tools that we need to protect ourselves against bigger players, and in order to continue as a business, and then provide more open source. So we encourage you guys for the decision.

**Sara:** Yes. Jacob Thornton has a really good talk around the open source field. He talks about the world of open source where the emotional guilt that you have when you build something, you release it out in the world and everyone just berates you to make it better and asks you why you made the decisions you did, and you're just like, "Man, I just wanna make this thing, and you guys can have it. Come on!"

**Adam:** Right.

**Sara:** So I think there's definitely a balance between what we release and, you know... There's a lot to be learned.

**Jerod:** Well speaking of balance, I kind of have another question that's a little bit upstream from that, but I thought of it as you were mentioning that many girls cannot have phones at school, and whenever you make a product for children you serve two masters because those children have parents, and the children have specific needs and the parents have other needs. And thinking about my own circumstance with my child, there are things on this that I think are spectacular, and there are other aspects of it that my wife and I have decided, "Well, you can't SMS until you're a certain age", or "We don't want you to have a phone until this time." So you're making a hackable, programmable thing for kids... Have you thought about parental controls or concerns of the parents with regards to what their daughters can do with this? I know it says you can do whatever you dream up. That may actually turn away some parents.

**Sara:** Yeah, I think that we had the awesome experience to get some mentorship from the gentleman that invented Guitar Hero when I first started building Jewelbots. And one thing he said to me is that when they designed Guitar Hero, they worked hard to have the wink to the parents. Because you can't just build for kids, you do have to keep in mind that the parents are involved, as well. So the way they did that with Guitar Hero is they picked classic rock as the music that these kids would be rocking out to. So this kid would have this new video game, would be so excited, love their video game, and their parents would be in the kitchen listening to Led Zeppelin, being like "This is awesome!" So for us that wink to parents is the coding part. It's the fact that we're trying to incentivize girls to code, and this may be the only way that you can incentivize your daughter to become a creator of technology, instead of just a consumer. And if some parents aren't into that, then that makes sense; we're not for everyone. It's hard to build for everyone that's out there, so we'll see.

**Jerod:** Yeah, and just to kind of tee one up for you, you've taken another aspect of that parental control, and also privacy and safety, and you do have privacy and safety - at least you're thinking about that as you're going about building, correct?

**Sara:** Yeah, exactly. That's a huge part of it. George, do you want to talk a little bit about Copa?

**George:** Right. So as part of the process to actually bring girls who are able to learn to code, we had to figure out for this community site, when they log into this community site and they wanna share recipes or talk about their Jewelbots, what can we do? And Copa is very stringent about the data that you can collect and the data that you can share. So if you someone's under 13, you can't collect their data without their parent's consent. You can't let them sign up, you can't let them share their personal information without that. And because part of the Jewelbots experience is to have a gentle onboarding, and to have a very good first user experience, we designed the app so that out of the box there is nothing in the app that requires your personal information. Even if you wanna use your contacts, if you want to invite your friends to be a part of your Jewelbots friend group, you don't need to sign in, you don't use login, you don't need to give us any information. It's all encrypted, stored on the device, sent to our server server encrypted, so no personal information is ever leaked out.

For our community site, we're very strict in what we can let you share. If your parents decide that they don't want to allow you to share personal information, we actually have a path for that so that you can still take part on the site. And that's how we're taking it - by default, we're not storing any data that we don't absolutely need to function, and we're not gonna make it easy for you to share data either, that as a parent you may not want your kid to share.

**Adam:** Well, we are getting close to the tail end of our show. Typically we have a little bit more, but we have a hard stop so we're getting close to our timing, but Sara, I can't let you go... Give me one minute - you have to tell me who your programming hero is. Jerod and I, we've wanted to have you on the show for a while, so we gotta know that before we can let you go.

**Sara:** Yeah, I think that's a really good question. I can say that Miguel de Icaza is definitely my programming hero. He's someone that has always cared a ton about open source, and really just been an advocate of it since the beginning, and built a company around Microsoft products and making them more accessible for open source developers, that just got purchased by Microsoft. He's always been a really big advocate for open source, he's always done what he can to make the community better, and it's really been cool to watch Xamarin getting built and grow into a huge company that just got acquired. So he's definitely my hero.

**Adam:** Very cool. And whenever our listeners go to Jewelbots.com, you're encouraged to sign up for the newsletter. When you do that, you'll get told about a certain code to save $10 if you pre-order for your child, but Sara has offered us a special code just for our listeners. It will give you the same $10, but it's just a different code. So if you go there and you pre-order, you can use the code 'changelog' when you pre-order your first Jewelbot or your first kit. So where can people go online to kind of catch up with Jewelbots? It's jewelbots.com of course, but you've got GitHub, you've got Twitter... Where else can people catch up and take a peek at what's happening behind the scenes here?

**Sara:** Yeah, the best thing to do is to sign up for our newsletter. We send frequent updates to our subscribers, and then you can always catch us on Jewelbots on Twitter and on Facebook.

**Adam:** Very cool. Well, Sara, I'm sure we can ask you so much more, because this is a deep, fun topic, and I'm sure that it's interesting to you because you're doing it. We love children, obviously, we love encouraging not only children, but specifically women to get more encouraged by technology, to find their passion in it, and we're big supporters of that here at the Changelog, so it was a blast to have you on this show. We thank you so much for pursuing your dreams and giving back in this way, and creating a company around it, and giving back to open source, and being so encouraging and so inviting to so many people what this really means. So thank you for coming on the show today, and George thank you for helping Sara with this dream. It's such an awesome thing you're doing, and thank you for your service in the military - we obviously appreciate that, as well. Anything else you two wanna say before we close out the show?

**Sara:** No, thanks so much for having us.

**George:** It was a lot of fun, thanks for having us.

**Adam:** Awesome. We'll leave it there... Listeners, thank you so much for tuning in, and for now let's say goodbye.

**Jerod:** Bye!

**Sara:** Bye!

**George:** Bye!
