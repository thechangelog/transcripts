**Justin Garrison:** Hello and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison. And with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Hey, everyone.

**Justin Garrison:** I feel like we haven't recorded for a couple of weeks, even though the show has been regular; we got ahead a little bit, and now we have a couple episodes that we're catching up on... But it's great, because we haven't actually -- you and I haven't talked on video for a couple of weeks.

**Autumn Nash:** I got puked on, and then I had to give a Grace Hopper talk.

**Justin Garrison:** That happens. And that actually brings up a great point... So this episode is going out the week of October 21st. If you're listening to this while it goes out - I think it goes out on the 25th - Autumn, you're going to be at GitHub Universe...

**Autumn Nash:** I'll be at GitHub Universe the next --

**Justin Garrison:** Yeah, the following week.

**Autumn Nash:** Yeah.

**Justin Garrison:** You're giving a talk over there. What's your talk on?

**Autumn Nash:** "Women and data are important to the future of AI." Well, I'm writing talks for Scale, while doing this talk... And then I just did one at Grace Hopper, and they're all like married in my brain right now.

**Justin Garrison:** Yeah. And you totally \[unintelligible 00:04:41.26\] So I'm going to be at All Things Open that same week. I'm giving a talk there about why I was wrong about the cloud, and I have a lot of opinions that I've learned over the years...

**Autumn Nash:** The fact that they haven't tried to take you out yet...

**Justin Garrison:** I might be doing my talk behind some shields, or something.

**Autumn Nash:** I'm going to get you one of those vests, just to keep you safe...

**Justin Garrison:** But you also mentioned Scale, which - the CFP for scale closes on November 1st. So anyone that is looking to give a talk at a conference, please submit one to the Southern California Linux Expo. I've given, I think, four talks over 15 years going there.

**Autumn Nash:** You gave like two at once half the time.

**Justin Garrison:** It is the best first beginner conference, because the vibe is just so community-driven, and there's such a variety of topics... If you want to come to Pasadena in March - great weather. Autumn will show you where to get some tacos.

**Autumn Nash:** Honestly though, if you have to pick one conference next year, Scale is like a nerd summer camp, or like spring break camp, for like the coolest people in open source and DevOps and Kubernetes. I'm still never going to run anything in Kubernetes after the way that y'all made talks last year. Like, you scared me to death. But the coolest people. And really kind people, and community-driven, and it's not like super-fancy, like a lot of conferences... But the people working on cool stuff that you probably use with open source being 70 percent of infrastructure... Like, the people that you'll meet have worked on really influential things, but somehow they remain like the kindest, most humble people. Really cool people.

**Justin Garrison:** And it's family-friendly. I'll probably bring my son, at least one of the days. Autumn, you will probably bring some of your kids.

**Autumn Nash:** I'm bringing all of them. They want to give talks, and everything. But then I'm dropping them off at their dad's, so we can do hoodrat stuff together...

**Justin Garrison:** And the whole conference is pretty cheap. It's community-driven, so it's not like big budget, thousand-dollar tickets. I think the tickets last year were like one hundred and twenty bucks. If you have student discounts... I went as a student when I worked at university, and so they were 50 percent off. I think there were like 30 bucks at the time, when I went. I think now they may be 60. So definitely check it out...

If you're interested in submitting a CFP, I'm actually doing a livestream with them, because I help organize it... So November 1st, if you're listening to this ahead of time, go look at the Scale of YouTube. We have a live stream on just like feedback for CFPs. Because we want to get new speakers. We love getting people that are first-time speakers. If you are working on something interesting, or found something cool in technology, submit a talk proposal, and it might be a great fit, it might not. But either way, you can check it out. So...

**Autumn Nash:** There's a kids track too, and it's one of the most -- it's also one of the most diverse speaking... Like, there's so many women, there's so many people from all over different companies, big companies, small companies... And the amount that you learn about what big companies and different people contribute to open source... I did not know that Meta and so many people committed so much to open source until going and listening to them talk. And the talks are about things, but a very -- they're not trying to sell you things, because it's not a big conference. So they're like very real life.

**Justin Garrison:** \[00:07:59.03\] It's not company-sponsored, it's not \[unintelligible 00:08:00.03\]

**Autumn Nash:** Yeah. The talks are so good. I was sitting there and people were walking around with their babies, and I was like "This is awesome." I met women founders with their babies in their hands, and I was like "This is my people. I love it."

**Justin Garrison:** So that's enough selling of things that we're talking about. This conversation, Pete Naylor's on the show. And Pete, you're a product manager at EnterpriseDB. We've been looking forward to this. I've been looking for this for a while. This is the first time we met. I know we rescheduled this show once already... Autumn keeps hyping you up, like nonstop.

**Autumn Nash:** Wait, wait, wait, wait, wait. Pete is one of my favorite people that I've met in my entire career. This man was like -- okay, when you get thrown into being a specialist SA, and everyone else has been doing stuff since like before you were born... He was like the nicest, kindest person, but he's also one of the most knowledgeable people I've ever met. He's been a DBA, you've worked on hardware and data centers, he's been a solutions architect, he's been in product... He's done all the things, but still is like humble, and one of the kindest people you'll ever meet. You can meet people that know Pete, and in two seconds they're saying the same exact thing about him. I met someone randomly, and we were like "Do you know Pete Naylor?" And we were like fangirling and having the same moment, and we were saying the same thing back to each other. He is one of the kindest people.

**Pete Naylor:** Oh, man. That's quite the introduction. Now, I think maybe people are getting the impression that I probably started in the computing industry in about 1873, I've been everywhere, kind of done everything... That sounds like one of those job descriptions where they want someone to have 20 years with Kubernetes, or something.

**Justin Garrison:** Yeah.

**Autumn Nash:** I went to a job interview and they were like "We want you to have 20 years experience of Postgres, and then like this other database, and this", and I was like "Pete's the only person that has 20 years of experience."

**Justin Garrison:** Like, I know the person \[unintelligible 00:09:56.23\]

**Autumn Nash:** And it's not me.

**Pete Naylor:** You can't see this, because I think this is just going to be an audio-only thing, but I have a lot of gray in my beard... And there wasn't so much of that before I started at Amazon, by the way.

**Autumn Nash:** I'm taking pictures. We have to have a reunion of -- like, an SA reunion moment. But Pete also does the craziest outdoor stuff. He's like a wildlife rescue volunteer... You are a firefighter. What have you not done?

**Pete Naylor:** Let's see... I never went hang gliding. That's on my my list. I really \[unintelligible 00:10:31.20\]

**Autumn Nash:** How have not been hang gliding, because you -- look, I go outside, there are Pete's LinkedIn and Twitter pictures. They're always like --

**Pete Naylor:** I went to a surprise birthday party at this place that was on acreage, kind of a farm, in a barn once... And I was hanging out out there, drinking a beer, and these guys flew in on hang gliders and landed out in the field behind. And I went over to talk to them, and like they had -- I had no idea. I thought hang gliding was like jumping off a thing, and 20 minutes later you're on the ground. These guys have been up there for six hours.

**Autumn Nash:** What?! You can do that?

**Pete Naylor:** They had bicycles in their beards, and they'd been all through the cascades, and I was just like "Okay, I've got to do that."

**Autumn Nash:** How have you not figured out how to do this by now? Because I feel like that is so up your alley.

**Pete Naylor:** I might be a little bit scared, but...

**Autumn Nash:** All the things that are too outsidey and give me anxiety, that's Pete's hobbies.

**Justin Garrison:** So Pete, how did you get started in tech? What were you doing at the time, and what drove you into it?

**Pete Naylor:** Yeah, so like I said, back in 1873... I was actually -- so I grew up in a little mining town in the middle of nowhere in, Australia... And I went off to Brisbane to go to university, and I ended up studying -- I had this opportunity to do a dual degree, because I had gone to Japan as an exchange student, just got back, and had to figure out what course I was going to take. And they offered me this dual degree where I could do mechanical engineering and Japanese language.

\[00:12:00.13\] So I went for it, and I really liked a lot of it, but I kind of didn't really like the university experience. It kind of felt like -- the whole time I was like "I want to get out there and actually have a career and make some money." Which - now I look back and I think "I should have kind of enjoyed that. Why didn't I get it?" Because I had all these friends that traveled the world, and worked running lifts at ski areas, and they just hop back and forth from the Northern hemisphere to the Southern hemisphere. I didn't really do that. \[unintelligible 00:12:27.08\]

But while I was at university, we had these CAD/CAM systems that were on some microsystems boxes, and things like that. So I kind of started getting into computing already, and I like BBS'es, and getting this open source software, and stuff... But when I got to university and I got introduced to some of these Unix operating systems and some of the really nice hardware, and then the Internet... Like, the Internet was super, super-early stage at this point. It was like early '90s. Now you know how old I really am.

And so it was things like Usenet News, and IRC, and email, and FTP to get software, and stuff like that... And very early days of the web. So it was like Netscape version 0.9, and we had all of the very old web servers... And it was a super-cool time, because it was like all of this information was out there and hadn't commercialized yet. But I got really enthusiastic about learning about Unix operating systems and the Internet.

So this is a long story, I know, but I --

**Justin Garrison:** You were still in Australia at the time, right?

**Pete Naylor:** Still in Australia, still in Australia.

**Justin Garrison:** I don't know how the Internet spread. I was not in technology at the time, and I came to it much later in life. How did that kind of spread across the world from what was \[unintelligible 00:13:48.13\]

**Pete Naylor:** Like a virus. People got on planes and carried it with them, took it to other places... But yeah, I mean, at a university level it was ARPANET. There were all these connected universities around the world, that were exchanging information, and it kind of grew out of that... So it was a lot less commercialized, a lot less compelling, but it was super-cool to me. I just really wanted to dig into that.

And of course, I spent a lot of nights staying up very late, trying to figure out how to run Unix stuff, and learn this stuff... And I just reached this point where I was like "I don't know about this mechanical engineering thing." It seemed kind of cool at the time... "But I'm way too distracted and more interested in this other stuff." And I actually had a friend that went to a university in Sydney, that I'd kind of been emailing, and it was like pen pals back then. But he introduced me to this woman that was in the US, and we kind of ended up exchanging emails, so we met online, which... I tell people that now and they think of dating.com, or something. It was nothing like that at all.

**Autumn Nash:** That is so adorable.

**Pete Naylor:** We exchanged emails for a while, and did the IRC thing, and chatted, and then I had a university break, like the summer break or whatever, and I decided "Well, I'm going to go there and meet this person, and hang out, and get to see the US." And in fact, she paid for my flight, which was a big part of it, because I was broke. It was like "Well, once we actually meet in person, that's probably going to go out the window. That's going to go badly. But I'm not going to miss a chance to go to the US and see something different."

So off I went, and I discovered that I kind of liked it a lot. And so I packed up my stuff, I went to the US, I stayed there, and I ended up starting a little business where I was providing dial-up internet service in this little tiny rural community. So I was building all of these services, and helping people get online... And I was reminded of something... Just the other day I was talking to someone about whether you're screen-sharing something. I think I was on a call or something, and I thought people were seeing what I was seeing on my screen and I'd forgotten to share... But I always remember, people at that point were trying to dial in. They'd have trouble or something, and they'd call, and they'd want help, and I was trying to do support. And they would get frustrated with me, because it was like "What? You can't see what's on my screen?" And I'm like "Nope. You're not connected, for one thing."

\[00:16:22.06\] But yeah, so I stayed in the US and I just got more and more involved in that. All of the Internet stuff kind of consolidated. There was a lot of smaller companies, a lot of ISPs that were out there, and the big companies were kind of sucking all of that up... And I actually -- the company that we had our uplink through, they had an open position for a systems admin. And I thought, "Well, I'll go work for them." And that company was called Northwest Net. They actually spun out of the University of Washington, because it was becoming clear that companies like Boeing and Microsoft and everybody were wanting to connect to this thing and make use of it... And the university couldn't do it as a nonprofit. So they kind of spun it out, and many, many really, really cool people there. A very foundational time for me. There were people there that I worked with that wrote the RFCs for DNS, and these kinds of things. Super-cool time.

**Autumn Nash:** So when you came to the US, did you come to Washington and you've been in Washington the whole time?

**Pete Naylor:** Same place the whole time.

**Autumn Nash:** Oh, that's cool. I didn't know you've been here the whole time. That's really cool.

**Pete Naylor:** Yeah. Hardly moved around. I feel like that's pretty boring. I should mix it up a little bit. I've traveled across a fair bit of the US, and I love it, because there's a longer history here, and a lot of different culture. I feel like in Australia it's kind of like - you can leave Queensland and go to New South Wales, but people have the same accent, and they eat the same stuff... Everybody eats Vegemite, you know?

In the US you can travel, you can go to New Orleans, or some of these places, and there's so much variety. You don't have to go out overseas to really get a different experience.

**Autumn Nash:** That is really cool. That's true. So where did firefighting come into all this?

**Pete Naylor:** So at some point I was still doing all my regular full time stuff in IT, and technology, and I actually had a neighbor that he was into fishing, and diving, and all those kinds of things... And he talked me into going out, because I had my own little boat at the time. He saw me on the driveway and he was like "We need someone to run the boat when I go diving. Do you want to come out and do that?"

So I was sitting on the boat... And the very first time, by the way, when you're the last person on the boat, everybody jumps in the water and there's just a few bubbles, and that's all you see for 40 minutes... It's really eerie. You're like "This is not natural. This can't work out well." But yeah, I did that. I got really interested in the diving, and that buddy of mine - he was an emergency room physician for a long time, and kind of got involved in emergency response... And because he was a diver, he helped out with the local dive rescue program, volunteer program. I say rescue because once you get into it, you realize there's not very many rescues in the diving thing. It's mostly recoveries.

So he talked me into learning to dive, and getting involved there... And then that led to being given a chance to become an EMT, and get the training for free... Once I got that EMT credential, I was kind of near the end of the course, and they were like "Wait a minute, you're not part of a fire department? You're never going to get to use this stuff when you're in search and rescue. You're not going to get to like do CPR very often, or anything. You should think about joining a volunteer fire department." So I did that. I also got into mountain rescue, which was really, really cool.

**Autumn Nash:** You have no regular hobbies. Like, your hobbies are all the most extreme. Do you just ever sit down, ever?

**Pete Naylor:** I do. More and more I sit down. I take I take naps often now. It's back to the gray beard and starting out in 1873... Yeah.

**Autumn Nash:** Though with the way that you do activities and work, I think you deserve the nap...

**Justin Garrison:** I don't deserve my naps. It's true.

**Autumn Nash:** \[00:20:20.22\] You take naps because you refuse to drink coffee. What is wrong with you?

**Pete Naylor:** Yeah, I don't know what it is about me... I always feel like life is short. When I was a kid I actually lost an older sister, and I think maybe that's part of what makes me think you don't get that many chances... And I want to fit in like as much variety and meaningful things in my life.

**Justin Garrison:** And somewhere along those life decisions you decided to do databases.

**Pete Naylor:** Yeah. Yeah. That was that was all Amazon, actually. Well, I worked at these companies and it was mostly about systems admin stuff. I've never been a developer. A lot of my stuff that I used to do was building packages for automated installation on all of these servers. They were mostly C. There was also a lot of Perl at the time, and Perl drove me nuts... I hated it, because it was like -- we couldn't just have something that was prepackaged, because of our policies. We had to build everything separately. And then the developers loved Perl, because it was so nice. But then they were like "Oh, there's hundreds of modules that I can add." And every one of those modules I had to package separately, and build... It was brutal.

**Justin Garrison:** And this was the '90s, or 2000s? Were you doing like spec files? What was this?

**Pete Naylor:** '90s and early 2000s. So that company --

**Justin Garrison:** Okay. It was just TARS.

**Pete Naylor:** Yeah. A lot of TARS. Yeah. Unpackaging things, running the builds, make files... Yeah.

**Break**: \[00:21:47.02\]

**Autumn Nash:** How'd you get into like Dynamo, and like all the different NoSQL, and all that? Because Pete's really, like really, really good with all of that. But Pete has got that -- Pete won't bullsh\*\* you. You know what I mean? A lot of people will be like "I sell this thing, and I'm just going to say it is the best thing ever." Pete will keep it real.

**Pete Naylor:** I still have that little bit of like where I grew up in Australia.

**Autumn Nash:** That's why I love you, though.

**Pete Naylor:** My hometown, there is no cooth. Nobody holds anything back.

**Autumn Nash:** Look, we were in the room with some of the most popular-ish database nerds of like all of the tech people, and a lot of people are scared to like disagree with people sometimes, and like they'll be like "Well, this person is so good at this, and they invented all these things." Pete will be like "Look here. That's not true." And I'm just like "He's my hero."

**Pete Naylor:** So I developed through that. My company got bought out, and all of that stuff happened. And eventually, it was like Verio. I don't know if anybody remembers them, but they were this company that bought up 50 of the most successful ISPs all around the US. And when they did that, they were like "Well, we've got to like move all of the email, and glom everything, and centralize stuff." And they kind of cherry picked like a dozen engineers, like sysadmins from across all of those companies, and they said "You're going to travel around and you're going to glom all of this together and migrate everything." So this was the beginning of my migrations stuff. Autumn, that never ended. It seems like you're always migrating something.

**Autumn Nash:** I think that's just like the cycle.

**Pete Naylor:** So I did that, and eventually I kind of got into these roles where I was managing, and looking after teams... And a lot of the folks that I supported were DBAs. When you're running the sysadmin stuff, there's -- usually, when things went wrong, there was a lot of finger-pointing... It's like, "No, it's the network." And you point to the network engineers and "No, no, that's not it. Everything's fine. Oh, it's the disks. It's the operating system." So I got to work pretty closely with them, also with developers, and got to know a lot of the challenges there.

When I joined AWS, I actually applied as a TAM, so a technical account manager. At AWS, that's part of the enterprise support org. And when I joined, it was like in my first week, they took me aside and they were like "Well, we're going to assign you your customer, and your customer is going to be Amazon.com."

**Justin Garrison:** Oh, shoot.

**Pete Naylor:** Yeah. I was like "I don't know what this really means. It sounds kind of cool, it could be fun..." And then I started telling some of the other TAMs about it, and their eyes were like "Oh, man, you're in for a ride. It's going to be crazy", because they're just a huge, huge customer, and very, very demanding. And they didn't have to use any of the regular process. They would just look up the phone tool, call up the principal engineer on DynamoDB, and harass them with their DynamoDB questions.

But yeah, I started in that role, and it was a very small team of us that did grow over time... And we had to teach all of those internal teams to like "Please use enterprise support, because this is the only way this can scale."

**Justin Garrison:** And for anyone that's not familiar with how that relationship works - Amazon, the company, amazon.com uses AWS as kind of a customer, where they use the services and they are supposed to go through some sort of support channels for standard things... But it's the largest, most important customer, to many regards. So they get some special treatment.

**Pete Naylor:** Kind of overwhelming to work with them and support them. But it was also really cool. They were really pushing a lot of the AWS services harder than most of the customers. So we got to be involved in things where - you know, there were some sharp edges in DynamoDB, for example. And when we could go and describe "This is not working for our customer", it really improved all of those products.

\[00:28:15.02\] So it was it was cool to be a part of, but very, very stressful, intense. None of the tooling that was there, that all of the other teams used to support their customers, none of them would work for us. They just, they didn't scale. They would fall over. So yeah, I worked on that... So to your point about Amazon using AWS, I think a lot of people when they think about Amazon, it's like "Oh, they were born in the cloud." Right?

**Justin Garrison:** No.

**Pete Naylor:** No. And at this point, they were still doing things where they would kind of share data centers, and they would rack stuff up... But for example on a prime day, these teams would go on and choose really basic, bare metal stuff and have it racked up, and that's how they were scaling a lot of stuff. But they had these two really big initiatives at the time that they wanted to work on... One was just about adopting cloud in general, so going to EC2, and getting out of that kind of stuff... And then the other one was migrating off of Oracle.

**Autumn Nash:** Oh yeah, that was a big one.

**Pete Naylor:** So I think in my first couple of weeks there had been some major event. One of the teams who had just started using DynamoDB had maybe not figured out how that works, and had some hot key things, and it was a big operational issue, and a review of that. And I got sent off to deal with that, with no knowledge of DynamoDB. I had like a half hour whiteboard discussion with one of the other TAMs on my team, who'd been there a little bit...

**Autumn Nash:** For context - so going from Oracle, which is a relational, you know, and then going to like one of the biggest, like, no SQL databases... That might not have been the biggest at the time, but just the access pattern, and how you use DynamoDB is very, very, very different than a relational database.

**Pete Naylor:** Yeah. There was a lot to teach. And for the Amazon teams, it's like, you hear about the whole two pizza thing... And that is such a reality that it's painful to try and move them through something like this. It's like, how do you reach out and get all of those people to know about "We're going to do this session on DynamoDB data modeling." It's like, there's there's very little directives overhaul that guide people to "This is what we want you to do." You kind of get to do your own thing. And so it was a constant struggle trying to reach out and get to every one of all of those teams.

So there was a lot of stuff... It was done by tiers, so anything that was really, really critical, the kind of stuff that Jeff would get paged within an hour of an impact - that was the tier that all had to go to DynamoDB. And then there was a little bit lower tier, where it could stay on a relational database, but it had to be Postgres, or something like Aurora. And then there was the data warehouse, which is - it was also on Oracle. And it was literally one of the biggest data warehouses in the world... And so it was kind of a painful thing, where if they were going to run into some something that was going to blow up and go wrong, it was them first. And no other customer was going to encounter that first. So they were always the ones dealing with the scalability bugs and things. Not a good place to be. So they had to go to Redshift, and I had to I had to work on all of those different things and support all of those teams.

I think the DynamoDB thing really spoke to me most, because of that whole change to the completely serverless model, and the scale. It's super-cool. I got to go in and do things like sit in the war rooms for Prime Day, and help all of those teams trying to plan for scaling... And I think a lot of those teams didn't see the picture of what happened over those two or three years. It's like, they very quickly came to take DynamoDB for granted. But for me, I watched it end to end and I was like "There's this thing where people are spending six months a year trying to plan and scale and be ready for these events." And now, a couple of years later - yes, it was painful. It was hard to get there. But now it's literally like dial it up and dial it back down.

**Justin Garrison:** \[00:32:04.16\] Yeah.

**Pete Naylor:** And so I got to see like how much time that gave back to them. It was pretty cool.

**Justin Garrison:** According to the announcement when Amazon announced that they had moved off of Oracle officially, which was October 2019... So five years --

**Pete Naylor:** I'm in that video.

**Justin Garrison:** You are?

**Pete Naylor:** You can see me drinking champagne. Yeah.

**Justin Garrison:** Yeah, that's awesome. But it says there was 75 petabytes of data, 7500 Oracle databases, and moving them to, like you said, all of the different options, depending on what the right choice was at the time.

**Pete Naylor:** Yeah.

**Autumn Nash:** Which is like why those products are actually like really good managed databases, because they tested them out like with that scale of data. Like, you're never going to get scale like that from just random customers; to be able to find the edge cases of your products with those -- for one, with the requirements and the standards that you have to hold... And then with that type of scale. That's a great way to make sure you've hardened your products, and like have really good databases, because --

**Pete Naylor:** It was very cool to be a part of that. And I think, through that process, as hard as it was, that's where I really -- I drank the Amazon Kool-Aid. I loved the LPs, and I really got to see some of those processes happen from both sides, where I would go to meetings where there were a bunch of people on the retail side saying "Hey, this is not working out very well for us", and AWS would try to push back a little bit... And then ultimately, someone would stand up and say "This is not customer-obsessed", and everything would change, and it would happen.

So I really loved those LPs. I really believed in it because I saw it from both sides of the org. They're slightly different cultures, I think, Amazon retail versus AWS. So I just got really sucked into that. I loved it, and I learned so much. After a lot of that, those programs were kind of wrapping up, and then I had what was beginning to be the global specialist solution architect team reach out to me and say "Hey, do you want to come and be one of the first DynamoDB specialists globally?" And I was like "Yeah, that sounds pretty cool."

So I went and basically worked with all of these other really big companies. We'd each get a few of them, a handful, that was like "You need to guide these folks through this whole modernization journey, and in particular help them to adopt DynamoDB."

**Autumn Nash:** Being a specialist, I'd say, is one of the coolest jobs, because you get to see all the contrast between different databases... And it's the perfect mix of business and technology, and seeing all of that contrast, and watching migrations, and seeing when you need to move from like a relational -- because you have to know all of your competition stuff, and then you have to know your technology really well and how to compare those... And Pete is one of the best at it, especially with the fact that he knows so much about relational databases, and then you've got like NoSQL... And just the way that he can compare it, he's very, very good at his job.

**Pete Naylor:** I try to -- like, when I first started as an SA, I really liked the idea... Because I never had like a sales kind of background, and I think I'm probably not the right person to have a lot of those discussions... Because I usually just -- I really would just want to solve the problem and make it awesome. I don't want to be part of the money side of things so much. So I really loved that. I thought there's actually something we can achieve here that will be meaningful. It really moved these companies forward.

So I did that for a few years. I had a lot of really great experience there, too. And then eventually, the product management team - because I worked so closely with all of the engineers on DynamoDB, and some of the product managers, and I really got to loving some of those folks. Some amazing, amazing engineers within the DynamoDB team, and...

\[00:35:51.27\] It's big numbers. It's super-cool. I still can't really share any of this kind of thing, but if people could hear the number of nodes and the number of servers and things that are behind DynamoDB... It's just absolutely astounding. It's an incredible service.

**Autumn Nash:** They created real magic in real time. That's technological magic right there.

**Pete Naylor:** Yeah. So yeah, I mean, that was that next stage. And then and the product management team kind of reached out to me and said "Hey, we need more product managers. And you know the product so well, you're really well connected... Have you thought about trying product management?" It's kind of like -- you've made that transition recently too, right, Justin? You've kind of moved into product...

**Justin Garrison:** Yeah.

**Pete Naylor:** And I think at that point I was like "I've seen so many things that customers are asking for, and we've asked for them, and the SAs have asked for them before... It's like, I'm so frustrated that a lot of them are not just getting done. How can this be?" And I thought, "Okay, I can move into this product management role, and product managers just get to decide. And it's like, we will make this happen." And I'm just going to go in there and say "We will solve all of the customer problems." But of course, it's harder than that. There's a lot of resource management, there's a lot of figuring out, like reading between the lines on what counts and what doesn't... And then there's a lot of organizational constraints too, that don't allow you to deliver what you would like to deliver, maybe.

**Autumn Nash:** What's your favorite job out of all the jobs that you've had?

**Pete Naylor:** Oh, gosh...

**Autumn Nash:** Because you had a lot.

**Pete Naylor:** The early job at Northwest Net was super-cool. That was a relatively small team of super-smart people, and it was all groundbreaking work. Yeah, I think that's probably still my favorite.

**Justin Garrison:** I find it funny for myself, looking back on -- like, one of the the best roles I had was being a manager of like a help desk team. We were just like front line support. And it's super-small scale when you think about it. We were just helping people do laptops and printers and whatnot. But like being able to work so well with people I think makes an impact on just how much you look fondly on what you did as a team. There was nothing I was doing individually. It was like, we as a team worked so well together... And I loved that role when I look back on it. Even if it wasn't like -- I didn't get paid a whole lot, none of that stuff. We were just behind the help desk, and we just went in and helped people replace the laptops, scan viruses, do that sort of stuff, but it was so -- everything worked so well together that we were all learning stuff, we were all pushing each other... And that sort of like teamwork I feel has been missing in a lot of my other jobs.

**Autumn Nash:** I think people is one of the most important parts of a job. Having good people and working with good people, and smart people, and getting to solve problems together is like my favorite thing about tech.

**Pete Naylor:** Yeah. Ultimately, that's how it is for me, too. You go through a whole career in this, and you look back, and it's the people. It's the people that made the difference. And I think maybe, going back to me wanting to be a volunteer firefighter and EMT, and doing all of those things I did, to me it's the helping people; making a difference in their lives that's very rewarding. But you don't get there without good teamwork.

**Autumn Nash:** How do you think that your other activities, like the rescue and the helping people part - how do you think that influences your tech career? I think it makes you much better with people. I think a lot of people who are very technical aren't as good with other humans, and people, and seeing like a customer's pain point is you... But from your perspective, how do you think those two relate, I guess?

**Pete Naylor:** I mean, maybe it's helped me a little bit to kind of be patient with people. When you're working with people, you're in a team, it's stressful, and it's very easy to forget that everybody has their own problems they're working through. If you're a firefighter, for example, it's a huge honor that in their worst possible moments, people let you just walk right into their house. It really means a lot to be able to have that kind of thing. So maybe seeing people and understanding that people are actually all the same... You look at people and you think "Well, they're a God, right? You can't just talk to them." But every one of those people has the same basic stuff. Everybody's going to go through some rough times, and everybody needs a hand up.

**Autumn Nash:** \[00:40:14.08\] Dude, I have the best Pete story ever. So I was going through A/B's, which is like this thing where you get -- it's like the worst SA call you can have, but they test you to make sure you survive it, you know... And I went through a bunch, and we had this one like super-fancy principal, fancy person, that like put me through one for his test, and he made me cry. It was horrible. I wanted to give up. I was like "This is horrible. I'm not good at it." And my next person was Pete. And I show up to this meeting in tears, I'm ready to quit my job... It was horrible. And Pete was the sweetest, kindest person and he was like "It's okay. Let's just walk through some of your slides." And he gave me all this advice, advice I still use in public speaking when I give talks today. And he's like "We'll schedule another one for next week", and I was just sitting there like "I'm horrible at this. I give up", and like just a puddle. And he was -- he was there with his dog... It was the sweetest thing ever. It's so sweet.

I think that you bring so much technological like know-how, and like just experience... Like, you watched the like Internet like born, and you saw it from like where it started to where we are now... But you also bring so much like empathy to tech. And I think that makes you much more different than most people with that same technological --

**Pete Naylor:** Wow. You make me feel pretty good. But I have to say --

**Autumn Nash:** I am one of your biggest fans. Like, if there was a fan club, I'd be the president. You made so much impact on my life and my career... You are good peoples.

**Pete Naylor:** Thank you. Well, when I first started working with you I'd heard about this program, but it was kind of optional. It was like a mass email sent to everybody, "Hey, we're trying to --" It was the Military Spouses program, I think. And I was involved in the fire department, and doing all that kind of thing, and I've always thought military families, they deserve all the opportunities we can give them, because it's hard. It's a sacrifice you make. So I thought "Yeah, I should get involved in that. Maybe I can help someone. I've been around a long time..." There's the grey beard again. "Maybe I have some tips that I can help someone, and mentor them." And I think the first conversation I had with you, I was just really impressed by how driven you were, and also how much you personally cared about the quality of your work... To the point where you cried. You really cared. You really cared, when it seemed like you weren't able to get to the level that you wanted to get to. And it's like "Well, you've just got to be patient and stick with it." And you did. You've done really awesome.

**Autumn Nash:** It was so intimidating being with people that were like -- they've been doing something for like 20 to 40 years, and you're like the new kid... And it was so nice to have like kind people.

**Break**: \[00:43:04.10\]

**Autumn Nash:** What are you doing now? Tell us about your new company and what you're doing.

**Pete Naylor:** So I had a year off at a little tiny startup between Amazon... Because by the time I finished up at Amazon, I just thought "This is really feeling kind of standard big corporate America." I wasn't feeling as driven by the LPs anymore. So I gave up on that, and I went to the direct opposite. I went to a super-small, super-early stage startup, and it was really scrappy and fun... But at the time, it's kind of an unstable time. Lots of people were getting laid off from small startups, and that was me and a bunch of other folks. And then I thought "Well, I want that perfect Goldilocks story size company." And I was looking around for a while... I always liked the idea of Postgres; even though I became kind of the DynamoDB person and I had such a focus on that, I still really loved a lot of what I saw in those migrations with some of the teams that were moving from Oracle to Postgres. And I love open source. So I was looking at Postgres and I thought it's a cool open source product, I like the way the community is working. Some of the rough edges around licensing issues and things that have happened for a lot of other projects haven't really happened for Postgres...

**Autumn Nash:** That's actually true.

**Pete Naylor:** And it's databases, right? It's databases. So I thought "Well, I can give that a try." And I was an SA again at a little startup, and I kind of had both options in mind when I thought what I wanted to do, but I ended up taking a product role.

Yeah, the company I'm at now has been around a really long time, and actually pays many of the engineers that contribute probably most of the changes that happen in Postgres. So that's super-cool to see. It's a little bit like when I was at AWS and I could literally go drop in on principal engineers and like ask them about indexing, and you could scribble on a whiteboard and learn so much. There's really, really smart folks involved, and it has a great culture, which is refreshing, after feeling very much burned out at Amazon.

**Autumn Nash:** Yeah, that makes sense.

**Pete Naylor:** And this is another little shift that I know is going to be interesting for Justin, because I've seen some of the things that he's been posting, and... You know, when I was an SA, while I saw what really worked super-well for Amazon and for a lot of other bigger companies or whatever, there was always this push to say "Well, it's all about being on the cloud, and you only need one cloud", and all of those kinds of things. And in some ways it was easy to believe. But over time, I just realized that no, there are like different scenarios, different companies... Certain products that when you scale to a certain point, then maybe it's something you consider running yourself... There is this whole other reality around needing to still run things on prem. People need databases on submarines. They're not connected. You need to run truly air-gapped. So there's very real use cases and reasons, I think, to still be able to run where you want to... And I just think having flexibility around that is great.

\[00:49:53.10\] So a lot of the stuff that we're working on at the moment is trying to give people flexibility around where you actually want to run this stuff, and have a nice experience that's easy everywhere. One of the things that I saw at AWS was - there was DynamoDB, there was Aurora, and some of these things... But over the years, the number of these purpose-built databases just kept growing and growing, and it got more and more difficult to try and tease them apart and explain to people which you should choose.

**Justin Garrison:** You've been in technology long enough to see those pendulum swing of just "Oh, everything should be single-purpose and finely-tuned to this use case", and then swinging back to "Actually, those can all just be plugins, the general purpose thing over here." And like that keeps going back and forth, even with databases, it happens with web servers... It happens even with the cloud and data centers. Right? It's "Oh, we need this one thing" and "Now we need multiple." And then we go back and forth every time.

**Pete Naylor:** Absolutely. It's kind of like this hype cycle thing. Once you've been around it long enough, it's like, every new one, you're like "Well, there's probably some element of truth to this, but..." Almost any time you start to take some approach where you say there's absolutes, it's all this way, and it should be this one, history is going to kick your butt. It's going to come back and people are going to change, and you're going to realize that the absolutes don't fit everything. So you have to be a bit flexible.

**Justin Garrison:** For most things that I've looked at in the past, it's always like "How does this relate to something we had before? And what problem were they trying to solve then and what problem are they trying to solve now? And are those the same things, or are they different things? Does this new thing have to exist?" And that's worked fairly well. Again, it's not an absolute. It's like "Oh, well, that looks like this other --" "Service meshes look like proxies." Is that a proxy that you're building over here? I'm like, actually, yeah, it is. It is a lot like a proxy. Okay, well, why did proxies work really well? Why do load balancers work? Okay, well, when do we want to use those things?

In your career, what's something that you think that maybe was one of those bad decisions you made about "Oh, we picked a technology or we tried to implement it in a certain way that maybe wasn't the right decision"?

**Pete Naylor:** Well, I think continuing on with the whole purpose-built databases story, at some point there were really valuable things. There were things that made sense. And it almost got to a point where, I don't know, the database leadership was like "Well, we're going to create all of these pigeonholes, all these different categories of database, and we want to check the box on every one of them." And then they continued on to "Well, there is these other databases out there that we're kind of competing with. They have a different API, so let's make something compatible with that." And it blew out into this array of different options that was very hard to describe, and it kind of, I think, pulled away from the fundamentals of what people really needed... And "Oh, by the way, we already have this database. Maybe we could build this new thing into that database, instead of creating dozens of them."

And the other part of the story that I didn't really like was it was always a story with like "We've got all of these dozens of choices, and you need these different things, different query patterns fulfilled... Just link five of these together, and shuffle all the data back and forth between them." And it was like, "You know, that's not that easy. People make mistakes with it. Things break... And maybe we could take a different approach to this."

Even the whole NoSQL thing. I think there's incredible value in what DynamoDB has done... And it still has certain strengths, niches that make it the best choice for certain things. But in the fullness of time, I just came to realize that this NoSQL concept was maybe more confusing than anything, because... I like to tell a story; it's like, well, if you went to someone and you asked them "Hey, what kind of car do you do you have?" and they answered "I drive a not-Camry", that's not really answering much. Right?

**Autumn Nash:** A not Camry...

**Pete Naylor:** You can say, "Well, this is NoSQL", but there's like -- I don't know how many different variations on that. And they're all very, very different. So I'd rather just say database. And by the way, it has these properties that maybe can solve your problem.

**Justin Garrison:** \[00:54:09.24\] I think your point also on like compatibility, API compatibility, with "Oh yeah, we're wire-compatible with that other database" causes so much extra confusion. Because you're like "Oh, should I use it like that other database?" And like "Actually, no. Not at all. But you can send us the same data." That causes so much more just forks of "What are you actually good for?"

**Pete Naylor:** And is it ever really wire-compatible? Is it ever truly all the way there? It's never going to be.

**Justin Garrison:** No. There's always this edge case, like "Not that one, though." What's your thought on -- now I'm blanking on the word.

**Autumn Nash:** I'm scared, because when he makes that face, it's going to be something ridiculous...

**Justin Garrison:** No, stored procedures.

**Pete Naylor:** Stored procedures. Those are kind of interesting. One of the things that I saw with the Amazon teams was they had for the longest time totally avoided them. And it was to their benefit in the end, because they could migrate easily, and everything was great. On the flipside though, there's sometimes a lot of reason for doing stored procedures, because performance-wise you're not having to go back and forth across the network to do these things, and build it out in the client. Why not simplify it? So I think it's another one of these spectrum kind of things. You can't you can't take an absolute on that. Sometimes they're a really great idea and they're a good fit, other times they're not.

**Justin Garrison:** Well, that was such a non non-controversial take on storage procedures.

**Pete Naylor:** It was kind of a non-answer, right?

**Justin Garrison:** Way to sidestep that one, like a good SA.

**Pete Naylor:** Yeah, I'll just tiptoe right around the edge of that one, because... You know, I was a bit worried; going back to the fact that we rescheduled this, and there was time for you to really think of the tough questions...

**Justin Garrison:** Well, do you have any database hot takes?

**Pete Naylor:** I guess one of them is just like the whole purpose-built database story doesn't add up anymore. The categories that they have and the way that they break things out doesn't actually make sense.

**Autumn Nash:** I'm surprised you didn't say it was one table.

**Pete Naylor:** Oh, yeah.

**Autumn Nash:** Did you see Pete's face? He's like "Oh, God."

**Pete Naylor:** Yeah. Right. Right. That's another one of the things that I think kind of took on a life of its own, and everybody really wanted to --

**Autumn Nash:** It really did.

**Pete Naylor:** \[unintelligible 00:56:22.16\] view on things... And over time, you just start to realize "Well, let's look at the reality of this. Is it really that different? Maybe you're making some poor decisions."

**Justin Garrison:** In a lot of ways, people are making the right decision to simplify their view of the system... But there's so many other ways that people are trying to view the system, that like "One table for me is good, because it's my table." But once someone else wants to access it, I'm like "Actually, now this sucks."

**Pete Naylor:** Yeah. And it's like, there is never any free lunch in databases. So you look at it and you go "Well, you could stuff everything in one table, and maybe you think that's beneficial... But let me show you why that's costing you more."

**Autumn Nash:** Yeah. The way that people think that one size fits all - databases are so complicated, because there's so many... It just goes back to the CAP theorem. You have to pick what's most important, and then not looking at the data and not having the context, assuming that you can give one magical concept to solve all the problems...

**Pete Naylor:** And I think that's the thing with relational databases, right? They're really, really cool, they're very powerful, very flexible... And I think it allows developers, people who maybe haven't really thought through exactly what it means to have those asset properties - not all of them really want to dig into that in detail... But it gives them this opportunity to make assumptions that kind of feel intuitive, and allows them to move forward more quickly.

\[00:57:54.06\] You could also take a relational database, and many of them now - there's a lot of different extensions for Postgres - and you could shard that out, and kind of build your own DynamoDB, in a way. Once again, there's no absolutes in any of this stuff... And for me, rather than getting wound around like new terms or new things that people want to sail off on, I'd rather just come back to "What's the real problem we're trying to solve here?" Because so many of the fundamentals - like, the more I learned about databases, the more I realized they're all the same. It's all about the storage. The storage and the indexes. And I don't like that it's spun out into a bazillion different options. I think I'd rather make it easier for developers to use one interface.

**Justin Garrison:** SQLite.

**Pete Naylor:** Just use SQL, right? Because, for one thing, it works from the whole transactional and all the way into analytics. Everybody learns it. Just - it can make things a lot easier.

**Autumn Nash:** Do you think that you can scale a relational database and give it like the distributed -- like, same kind of architecture as like a relational, a non-relational database, and it can still be as performant?

**Justin Garrison:** A not-Camry? Yeah...

**Pete Naylor:** Yeah, so I think you can. You can take Postgres and if you just choose to make only those very simple queries, you can definitely do the same indexing, and you can split things out. What DynamoDB does that's still very, very special, even in the whole NoSQL space, where people took this sharded approach... DynamoDB has the operations side of things; they build in a level of durability and availability that aren't necessarily givens if you configure your own other Cassandra, or something. So it brings a little bit of ease to that... And then the whole splitting of partitions thing, the level of automation that's there - you don't find that in other places. I remember working --

**Autumn Nash:** Dynamo is a beast.

**Pete Naylor:** Yeah. I mean, it's just like, here's this thing that if you have a certain simplified kind of a use case, you can just throw a load at it and every half hour it can double its ability to carry extra load, and double its ability to carry extra storage. And there's no limit.

I remember going and working with some customers that were maybe using a MongoDB, or something... And MongoDB is interesting, because it started kind of in this NoSQL sharded approach, but then they really followed the developer side of things a lot, which - more power to them, right? They've had a lot of success with that.

**Autumn Nash:** Well, I think it's also because they're one of the easiest databases to just throw some stuff in, and you don't have to have any background of like access modeling, or schemas, or anything.

**Justin Garrison:** They should have called it YoloDB.

**Autumn Nash:** It is! It is YoloDB! No, but honestly, it's one of those things where like sometimes I don't even think it's like picking the right tool. It's picking a tool that people that you employ can use, and MongoDB -- and they've also focused a lot on making like documentation and things friendly, for people to like be able to really like get up to speed.

**Pete Naylor:** It's a lesson, really, to me. The way that they documented things, the way they've taken the hearts of developers. Everybody should be paying attention to that. But I think over time --

**Autumn Nash:** That is one of their most underrated sales, is the way that they help people learn how to use their products. Everybody should steal that. Like, it is so good.

**Pete Naylor:** But the flip side is it's kind of like "Well, we're going to give you these really nice features, that let you do these super-simple queries. And here you are, take this candy..."" And then if you actually start building around that and then you scale out, then it doesn't work quite as well with the whole totally sharded approach anymore. And it's actually the same story with relational databases. If you look at -- now you have these distributed SQL options, which are which are super-cool... There's Spanner, right? But there's certain operations you can make that are just very key-value-like, where you can just go get a key, or update a row... Those things can scale really well. But then if someone then expects they can do the really complex queries across many, many shards, there's going to be a lot of price to pay in latency and all of the back and forth across networks, and things.

**Justin Garrison:** \[01:02:19.20\] One thing I find interesting in just infrastructure in general is... Like, that database and storage layer has typically stayed pretty - I don't wanna say closed source, but more proprietary than compute infrastructure. Getting a VM and running compute is pretty just generic, and it's all open source stuff... But I feel like networking and databases have stayed on the "This is critical to your business, so you're going to pay for something in this realm", because a) if their data is gone, you've got nothing. And at some level, networking just never commoditized the same way. There are some commodity open source stuff, but it's like a lot of work.

**Autumn Nash:** Networking is really complicated. You're either good at that...

**Justin Garrison:** Yeah, and there's no like MongoDB of networking.

**Autumn Nash:** Because you can't like make that that simple. Like, one of the best parts of MongoDB is simplifying it so anybody can use it. And networking - I swear, if you're good at networking, you're good at it. And if you're everybody else, it's like watching Charlie Brown's teacher talk to you.

**Justin Garrison:** Which is also funny, because think of think of every house that has a LAN. They don't have databases at their house, but they've all got LAN, and they've all got DNS, and they all somehow connected to this interconnect network of like wireless working place. Some people - they can learn that ability, and it's so fascinating to me that that was never commoditized, as much as just straight up compute has been.

And then databases - there are the core open source, the Postgreses that are still like "Yeah, no, this is fundamental. You should be able to do this with all these extensions." But like a lot of it is still proprietary, and is still like "Nah, you're going to pay someone millions of dollars for that privilege."

**Autumn Nash:** I think it's also because it's not sexy tech.

**Justin Garrison:** It's so critical.

**Pete Naylor:** \[unintelligible 01:03:59.02\]

**Autumn Nash:** Well, I like databases, but how many people do you know wake up and they're like "I can't wait to become a database engineer"? And it's so abstracted half of the time... You know how we were talking about how like cloud has made infrastructure more abstracted, so people don't always have the context... I think a lot of times databases and networking are afterthoughts, and they're so abstracted away that people just depend on other people's specialties or something else to make it work, and they want nothing to do with it, because they're like "Oh, it's too complicated."

**Pete Naylor:** This kind of gets at something that's a little bit new for me. When I was on DynamoDB, there's no open source version of DynamoDB, right? There's no option there.

**Justin Garrison:** Yeah. Same with Spanner. I mean, Spanner has Cockroach, or whatever... But there's a lot of -- like CosmosDB... Like, there's so many clouds that have this proprietary, big database that like you're just going to pay a bunch of money for.

**Pete Naylor:** And I look to that as like "Man, there's no open source." And that's actually like -- it's good to give people that flexibility. There were reasons why people might have wanted to have like a DynamoDB-like thing on-prem. Didn't solve that for them. And I just think -- like, EnterpriseDB is really about like working particularly with big, big companies. These are financial companies, it's governments, it's things like this... And what's interesting to me is - when I moved into this product role, I thought "It's going to be interesting to learn about how do you balance this open source thing, but then actually have a business?" And one of the realizations I had was many of these companies, the people that are there are just like "Take my money. Take my money. This is something I don't want to manage, and I want to have someone I can call." And that's kind of what enables us to have the engineers on our staff that we pay.

**Justin Garrison:** You get the experts. You are paid for the responsibility.

**Pete Naylor:** You get the experts, and then they also do contribute back to the core project. It's like "What features? How do we do this?" and it's something that evolves over time. It's a really interesting balance to try and manage for... Because I can I can see it both ways, but you've really got to hit it just right, so that you're not making the open source project upset with you, and you're also still being respected and used, and having people willing to pay.

\[01:06:13.24\] So it's an interesting space... But databases are like -- the more I look at them, it comes back to storage. Recently I was looking at like - you make certain choices about replication within Postgres, for example... Or you could say "Well, I'm going to push this down and have this distributed storage, block storage. A file system." And the reality is why would you do it twice? It's kind of the same thing. It's just replication. It's making sure that the data is OK. And it is it is crucial.

I had the opportunity recently to actually go in and see a data center, and actually touch servers, which I had not done in a really long time...

**Autumn Nash:** Did you have flashbacks?

**Pete Naylor:** Yes, I did. Many, many scary moments, like getting paged, going into a data center with a big rack full of drives, and like accidentally grabbing the wrong one... And it's like "Okay, this thing had a RAID volume that was okay if it lost one drive, and I needed to replace that one..." I pulled a different one, and now it's all dead. And it's just like that chilling moment. The hair stands up on the back of your neck, and you know you're going to be in that data center for like the next 48 hours of your life, and everybody's going to hate you. Everybody's going to hate you.

**Autumn Nash:** What did you go to the data center for?

**Pete Naylor:** Oh, on that occasion?
**Autumn Nash:** Yeah.

**Pete Naylor:** I was just getting paged because one of the drives in this drive array had failed.

**Autumn Nash:** No, this time that you went back.

**Pete Naylor:** Oh, the new thing is we're actually kind of working on more of a holistic platform approach for Postgres. So kind of merging the transactional stuff, some of the analytics that's happening now with data lake houses... Iceberg and some of the newer formats. Which is interesting to me, because there's a lot of stuff that's kind of merging; like, that gap between transactional and analytical is getting much easier to deal with, which makes me so happy. So we're working on having this nice, contiguous experience that you can run anywhere. And one of the options will be to to buy it prepackaged on hardware, that you can just put in there.

**Justin Garrison:** Appliance. Yeah.

**Pete Naylor:** Yeah. So it was just meeting with like a hardware partner and looking at what they're building, and thinking about what this thing would look like. They had a lab there, we could go in and see all the blinky lights; that made me happy. It was loud. It was very, very loud, by the way, and hot. They're actually -- like, one of the things that I saw that was super-crazy for me was water cooling. Water cooling in compute and hardware.

**Justin Garrison:** Oh, the bubbles? See it boiling?

**Pete Naylor:** Two approaches. One where it was pumping water through these pipe channel things and they go to the heat sinks on the CPUs... But there's this other approach where they take the whole piece of equipment and it's submerged...

**Justin Garrison:** Yeah. You immerse it in like an oil...

**Pete Naylor:** ...in this fluid in it.

**Justin Garrison:** Yeah. No heat sinks or anything on it. Just bare chips, and they're just bubbling away. It's amazing.

**Autumn Nash:** That gives me anxiety, because if there's one leak, I'm just like "Oh...!" Like...

**Justin Garrison:** It sucks to work -- I've never worked in a data center that had that, but I've seen them, and it sucks to... If you have to replace a piece on the board, you've got to pull it out, dry it off, do all this stuff...

**Pete Naylor:** I didn't think about that. You ruined it for me, man. I was so excited. I thought "This is really cool."

**Justin Garrison:** It runs warmer. It's silent pretty much when you go in there, and you're just like "Wow, it's like 85 in here. 85 Fahrenheit. This is kind of warm. Where's the fans? What's going on right now?" And it's just weird.

**Pete Naylor:** Yeah. Things are changing so much. So much. It's great.

**Autumn Nash:** Talking about building databases under the water -- not databases, data centers; underneath the water. It's crazy what they're going to do to be able to support the amount of compute power that we're going to need for AI.

**Justin Garrison:** \[01:10:00.21\] Well, we like hurricanes, and boiling the water is one way to get more hurricanes, so...

**Autumn Nash:** It's like, this is the beginning of a horror movie, with the before times, before you ruined things...

**Pete Naylor:** Some of that's kind of been going on for a while, where they choose to -- I guess Intel... Different companies have chosen --

**Justin Garrison:** Microsoft had that for a while. They had like a submerged --

**Pete Naylor:** ...chosen to locate their big data centers in places where the electricity is cheaper. These kinds of decisions \[unintelligible 01:10:25.18\]

**Justin Garrison:** Well, Washington and Oregon - that's why US East or West 2 is where it is, because it was cheap power, nice cooling. And I know Facebook has white papers about putting their data centers in Arctic zone areas, where "Hey, guess what? We just open the windows, and it cools things down. That's amazing." Maybe that's not -- I don't know. Good business decision.

**Autumn Nash:** Yeah. But it's always like "Are you raising the environmental heat?" I don't know.

**Pete Naylor:** There's always a price to be paid.

**Justin Garrison:** No free lunch.

**Pete Naylor:** You see some of the stuff that's proposed about like underwater power generation, and those kinds of things... And I'm a diver, I'm like "I like to dive there." You're not going to let people like dive in and swim through these big turbines, right?

**Autumn Nash:** Not just that, but please don't break the world for us. Sometimes we want to go outside. Can we not ruin the forest and the ocean? Because I think it's really pretty.

**Pete Naylor:** Yeah, these will be more things, 10 years from now, when I have a lot more gray and you guys are on, I don't know, episode number whatever, you'll be looking back on some of this stuff and going "Oh, this was a bad idea, some of these things... It seemed good at the time."

**Autumn Nash:** Is there anything during your long career that you're like "This is a horrible idea"? And then everybody was like "It's great!" And you were like "It's horrible." And it turned out to indeed be horrible. Because with as many things that happen over and over and over again, and it's all the same, I feel like it's got to be wild having your type of experience. Because you're probably just like "We're doing this again."

**Pete Naylor:** Well, I don't know if this is a popular opinion or not, but I look at AI and a lot of the stuff that's happening around there... There's a ton of hype around it. And to me, it feels a little bit like the early days of the Internet... And it seems like it's cool, there's going to be something neat that comes out of that, but it's a little bit selective. But it's going to be bazillions of dollars and so much effort expended on it, and most of it's just going to fall aside, and not really mean much in time. I think you still have to do that.

**Justin Garrison:** I mean, I saw the Gartner report just recently. It was from July. 30% of AI projects will be retired by 2026. And I'm like "This is great news."

**Autumn Nash:** Wow. 2026?

**Justin Garrison:** 30%, they said by the end of 2025. I'm like "Awesome. Let's go. I am ready for it. Let's figure out what's noise and what's actually usable."

**Pete Naylor:** Well, I mean, back to the whole thing of like this bazillion different database options... It's kind of like, when that stuff was going on, it was like, everybody's building a vector database. Everybody. They're all over the place. So you're creating this new database category, and... Where's the data going to come from? It's going to come from your transactional database. Why don't you just make this a new index?

**Autumn Nash:** Even Cassandra's asset now, it can do asset transactions. So it's what you were saying about how transactional and analytics and stuff, it's like, they're trying to do so much of both. It's interesting where this is all going to go.

**Justin Garrison:** Pete, thank you so much for coming on the show.

**Pete Naylor:** You're going to get rid of me now? I've talked too much...

**Justin Garrison:** No, this has been fantastic. I love this conversation. But actually, we don't ever do Changelog Plus Plus stuff, like an after the show... We've already been going for over an hour. Can you explain vector databases to me in the Plus Plus portion of this episode? Because I've asked so many times, and no one can give me a good answer.

**Autumn Nash:** Pete's like "This is a lot of pressure."

**Justin Garrison:** No, it's okay. I know what a graph database is... And everyone's like "It's a graph database with direction." And I'm like "That tells me nothing."

**Pete Naylor:** I'm willing to give you my spin on it. I'm not 100 percent confident it's accurate, but it's the way that I think about it.

**Justin Garrison:** So everyone -- thank you, Pete, for coming on. If you are a Plus Plus subscriber, stick around. We'll have a few more minutes of what Pete's spin of vector databases is. And maybe this will be a clip somewhere, I don't know. I don't ever do Plus Plus content, but I think it's a great topic, because I want to learn more. So thanks everyone for coming, and we'll talk to you again soon.
