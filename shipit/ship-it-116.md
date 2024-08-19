**Justin Garrison:** Hello and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Hey, I'm so excited about this episode. Tim Banks - I live for his tweets, and we finally get to virtually meet Tim, and we are going to talk about all the things.

**Justin Garrison:** Yes. We went all over the place in this episode, and it was a lot of fun.

**Autumn Nash:** Look, it was a roller coaster, okay? I was not prepared for that.

**Justin Garrison:** Surprisingly, we brought it all back to the same spot, which was amazing.

**Autumn Nash:** Are you proud of us? Because I'm proud of us. That was a feat. We deserve some sort of award for being able to touch that many topics. There were backflips, roller-coasters, and we still ended it with tech somehow.

**Justin Garrison:** Yeah. And this episode, actually, I think we only are recording or publishing probably half of what we recorded in general, because there was so much.

**Autumn Nash:** There's so many good clips. And then we stopped recording for all the good stuff. It went even longer.

**Justin Garrison:** Yes, Tim was great to have on the show, and just generally talk to. If you meet him at a conference, or...

**Autumn Nash:** Dude, he is just... Tim is -- he is a pleasure. That man is a gem, okay? And not only is he -- he really knows his stuff, technically. He's so amazing technically. But he's also just a totally dope person, hilarious, has the best stories, throws the best shade... He is just a joy to talk to.

**Justin Garrison:** And I even wrote down all of his jujitsu championships, and I have - a five-time Pan-American champion, three-time American national champion, and the three-time something champion that I did not finish writing. It was amazing.

**Autumn Nash:** No, but low-key though, the way that he will give a talk, and he will talk about jujitsu or just regular life stuff, and then relate it to tech, is like watching someone do magic. He's very good at the people part of tech, and teaching, and relating it back to real life... He's very, very good at that.

**Justin Garrison:** He's very good at being a whole person, and technology is a part of his personhood. And that is amazing, because you're not your job. You are not that thing you just learned. You are an entire person, and all of those things are interrelated, and you can tie them together in various ways. So let's jump into the interview, and then we'll come back afterwards with some links.

**Break**: \[03:28\]

**Justin Garrison:** Thank you so much, Tim Banks, for being on the show today. We have done 20 minutes of pre-show here, and Tim is not your typical dev advocate, because usually developer advocates will have all the badges from the conferences they've been to in the background... Tim has a line of all of the Brazilian jiujitsu championships he's won behind him, and that is just amazing. So Tim, thanks for coming on the show.

**Tim Banks:** Hey, I appreciate it, Justin. Autumn... Great to see you all.

**Autumn Nash:** Tim puts the personality in DevOps, okay? Y'all are not ready. If you want spicy tech tweets, but with actual personality, go check out Tim.

**Justin Garrison:** Usually we start the show with "What software are you responsible for?" And I know you've done a lot of things in the past, and you can pick any of them of what you want to talk about, where you want to go with the podcast.

**Autumn Nash:** Yeah, give us a brief overview of all the things you do, because you have such an impressive resume. You've done all the things.

**Tim Banks:** So tech is what I do to pay the bills, right? What I am is a Brazilian Jiu-Jitsu practitioner. I'm a two-stripe brown belt under Rui Fraga at Brazilian top team Austin. Crossing my fingers, I hope to make black belt by the end of the year, which would be after seven years of training... Which is kind of quick. I teach Jiu-Jitsu five days a week, I train six days a week... So I do a lot of Jiu-Jitsu. My body hurts all the -- I have not had in several years on both hands a situation where none of my fingers is dislocated. Currently it's this knuckle and that pinky.

**Autumn Nash:** Dang, Tim...

**Tim Banks:** You know how it is. But I've been a chef, I've done construction, I've been in the military, I've been in all kinds of stuff... And I landed on tech, not because I love it - it's okay, but it pays a lot.

**Autumn Nash:** He's not wrong.

**Tim Banks:** And so I think that framing of how I look at it has given me a lot of perspective on how I do it... Because it used to be I was like "Oh, my job is who I am", and everything like that. And that became real toxic for me. And I think it's toxic for a lot of people.

**Autumn Nash:** Oh yeah, definitely.

**Tim Banks:** So when I talk about my career, it's kind of like "What have I done?" Like the hired gun, is the thing. I've gone on in a lot of places, I've worked in a lot of things. I've been at some places you've heard of, like Amazon, Dell, or stuff like that. But with Object Rocket was probably one of my most fun jobs. I was with Elastic... Elastic was my last "actual" engineer job, where I spent most of my day doing engineering stuff, and had a pager, and all that kind of things like that.

I was a senior SRE there, working on Elastic cloud and a lot of their observability pipeline for observability stack, and did some really cool stuff there. And then I left, I went to AWS to become a TAM, and I was a TAM \[unintelligible 00:09:48.05\] Then I became a principal solutions architect over at Equinix, then principal cloud economist at the Duckbill group, and then I was lead developer advocate at Dell most recently. And it's interesting, because you can write all the code, you can sling all the bits, you can do whatever, whatever. And that's all well and good. The thing that I liked the most and that I appreciated the most is talking to people who are consuming the things that I was working on, because then I get context for what we're doing. And I think that's important.

A drum you'll hear me beat over and over again in my various \*bleep\* posts on Twitter is that that the tech is really the least interesting part of what we do. It's the actual collaboration, communication, interoperation, and getting context and understanding the problems that people are trying to solve. Because that is what matters. And tech is just the implementation detail.

So I care less about how many commits you have. I don't really care about what languages -- whatever less than caring is about whatever the JavaScript framework of the week is, I really don't care. What I want to know is "Well, what are you actually trying to do?" Because that's what I want to build off of, and not what thing you're writing etc. I have opinions on tech, but they're largely based on my experience, and therefore just as baseless as everybody else is. I just acknowledge that.

**Autumn Nash:** I think what you bring to the table that a lot of people -- a lot of people can be very technical, but most people do not know how to be... You bridge your life experience with tech, and the way that you talk about tech, you can relate it so many other things that makes it relatable and digestible for other people. And I don't think a lot of people have those both people skills, but also technical skills. But you are really good at knowing how to disagree with somebody, and to really be able to prove your opinion about something, and to then be able to back it up with the technical details, but still make it really digestible, and to communicate it.

**Tim Banks:** I think it's really interesting how engineers especially - and I will point the finger at software engineers...

**Autumn Nash:** Dang, why you've gotta do us like that?

**Tim Banks:** \[11:57\] Well no, because I feel like software engineers have captured most of the attention of the tech community... And for whatever it's worth, they feel like it's \[unintelligible 00:12:05.13\] It is software engineers who delineate people into technical or not technical at conferences, right? It is software engineers who I usually say "Oh, if you work in tech", and then they will give a very developer-specific point of view. And there's a lot more jobs in tech than just software developers.

And so what I think is interesting is because my -- first of all, my background is operations. I started off in system administration and things like that... So I know how to code. You know, I code like Taylor Swift sings - just good enough, I guess, to get the job done. But more importantly, I understand that the code is not the important part. It's what you're trying to do.

So when I talk about things, I'm talking about things at a process level. I'm talking about things at an architectural level. I'm talking about things in like a human impact level. And people assume that because I do that, that I'm not technical.

**Autumn Nash:** I have that problem too, I think, because being a solutions architect first and then being a software engineer and having a lot of people skills, people are always like "Well, you're really good at processes, and you're really good at this." And I'm just like "Why are we pretending like that's not important?" The fact that you can talk about those things - that makes you a better software engineer, a better technical person.

**Tim Banks:** Well, people are like "Well, yeah, but do you know how to do this small implementation detail?" And I was like "Yeah, 20 years ago. Why do I do that now?" Here's one thing you're \[unintelligible 00:13:26.09\] related to Jiu-Jitsu. Somebody's like "Yeah, but do you know how to do this one specific submission?" And I'm like "Well, I would never do that, because that's a submission when you have made 48 bad decisions and now you're in this one situation. I would never get there.

No. I mean, yeah, I know how to do it, but it's not important."

**Autumn Nash:** But be real - that part, this one implementation... I can google how to do that. Go find it, and if you know where to put it and you know the bigger picture, you know how to string that together. So yeah, that's cool, but let's be real, half of this job is googling stuff and getting an example... So the skill is knowing where to find what you need, knowing how to talk to people and get the information you need, and having the context. It's not that little implementation. But we put so much stress on that implementation. That's not even the hard part.

**Tim Banks:** Context is key. Whenever I'm mentoring, especially software engineers who want to go to like "Hey, I want to be more senior \[unintelligible 00:14:24.18\] whatever. I'm always like "Context. You have to have context." You are very, very specialized in typing on a keyboard a certain way right now. And all of that is just to get your foot in the door.

**Autumn Nash:** Yeah.

**Tim Banks:** If you do not understand the bigger picture beyond what you're typing into the keyboard, if you don't understand the architecture... Not just of the software, but of the infrastructure; if you do not understand the business and the financial needs of the business at large and all the pressures that go on there, if you don't understand what the sales people's pressures are, what the marketing people's pressures are, what the product developers' pressures are, what your customer's pressures are, then you have no context for what you're doing, and you may as well be \[unintelligible 00:15:00.29\] you write code.

**Autumn Nash:** But you want to know what though? I think that's our industry's fault.

**Tim Banks:** Oh, it absolutely is.

**Autumn Nash:** To get a job and to be a good junior developer, they just want you to code. Do you know how many times I've been told to just code, and not give talks, and not do processes better, and all that other stuff? I feel like sometimes you get almost your people skills and your extra stuff squeezed out of you, because they just want you to do the grunt work of coding, and they don't let you be all of those things that you just said.

**Tim Banks:** What I think is really interesting about the dawn of generative AI - because generative AI can do junior dev work, in theory. You give it enough direction, it'll write code, right? So it's imperative for you to understand the processes, and have context. Because the grunt work of writing a Terraform thing based on a problem description is now largely going to be automated away, for good or for bad.

**Autumn Nash:** \[15:55\] So do you think that will change what the industry is looking for? Because think about it, we've all been in the interview process, and it's like all LeetCode, and "Write this code", and "Do this, and do that." And now that I think a lot of the dev rel jobs have gone away and people are going back to more solutions architect jobs or more engineering jobs, it is just on the small version of skills that is not most of our job that you're tested on. So how do you think that will impact tech, and the roles there are, and how we interview?

**Justin Garrison:** Now, I don't know that that's a specific dev rel thing. All jobs are now more aligned with making money. They all have to show that they're valuable to the company, no matter what they're doing. And most of that value comes from having the context to give impact to your customers. Like, grow the customers or make them more successful. And that doesn't matter if you're doing it in dev rel, or as a TAM, or as a software engineer. You have to show your value to the company, meaning you fit into the broader whole of things, and not just you do that one thing on the keyboard.

**Autumn Nash:** But I think as a software engineer, that's all they want you to do a lot of the times, is just the one thing on the keyboard.

**Tim Banks:** Well, let me -- here's the thing. When you say "they", a lot of the software engineers place that burden on themselves and then on the other software engineers below them, because they weren't necessarily good at giving talks, they weren't necessarily good at communicating, they weren't necessarily good at all the other, what they called soft skills. They were just really good at typing on the keyboard.

**Autumn Nash:** Because I feel like I've run into that problem over and over again, where it's like "Well, you're a great solutions architect, and you're great at this, but we need you to just write the code and be a software engineer." And I'm like "How, though?" Because I feel like that's some of my best skills is that I'm technical and soft, and I feel like that's what you guys both bring to the table. So how did you get those skills to get you -- because you've both been in tech for like 28 years and 20 years.

**Justin Garrison:** And the ageism here...

**Autumn Nash:** No, but I think it's cool that you've found a way to make that work for you. How did you find a way to capitalize on all of your skills, and not just one of them, and to grow a career that way?

**Tim Banks:** Well, I mean, the long and short of it is that, first of all, your ability to network and communicate and relate to others is going to be a huge factor in you finding a job, no matter what. If you are a good coder, but nothing else, you're going to have a hard time working on a team, and that's going to come out real quick. So your ability to communicate effectively is critical... Whether it's talking, or whether it's writing a comment, or whether it's writing in docs, and stuff like that. It used to be not as critical. Now, one of the things that the advent of DevOps has done is it has emphasized communication as an ideal. Now, we still spend a crap ton of money on a bunch of tools that we don't actually have to talk one with another, where we should be doing more talking. But still, the notion that you can work on a team with interoperation and collaboration is still an idea. So that is table stakes. You can't just write code. You have to be able to work on a team. So you're career-limited right there if you're not good at working on a team.

**Autumn Nash:** I always say engineering is a team sport. It's something that you have to be good at working with other people, because especially when you work in like a very deep team, everybody has their specialty or a part that they're good at. And if you can't utilize your teammates and their specialties, and work together, you're going to be very slow and not very good at it.

**Tim Banks:** Yeah. So the thing I talk about, the debate -- I remember when there was a debate on the 10X engineer, or something like that..

**Autumn Nash:** But I think that's where the industry is going. They just want this person to write a million lines of code, and I'm like "Dude, that's not..."

**Tim Banks:** Here's the thing though - you don't need a person to write a million lines of code anymore. You don't need that. Again, that's something that AI is going to be able to do for you. What you need a person to be able to do is understand what it is you're trying to do. Because that's the only way you're going to be able to give good context for the tools that are going to write the code for you. Eventually, the actual code writing is not even going to happen, because when you have a machine talking to a machine, you don't need to write human-readable code. We are not far away from machines just writing assembly. I'm telling you that right now.

**Autumn Nash:** \[20:05\] Out of all the jobs that you've done - because you've had a very long career and you've done a lot of different jobs - what do you feel like, I guess, was your favorite, or the one that you had the most impact, or maybe the one that you learned the most out of your whole career?

**Tim Banks:** That's going to be a tie between being a DevOps engineer at Object Rocket and working at Elastic. Actually, I'll take that back. Let me -- I will say the DevOps engineer at Object Rocket. And the only reason I'll give that over Elastic is because the DevOps engineer at Object Rocket was a startup that had just gotten acquired. We were developing products. So literally, it was the first time I got to sit there and say "This is a product, this is an idea, and we need to bring this to fruition and actually realize this as a thing." This was before -- I mean, Docker existed, but you didn't use it in production for anything stateful. Kubernetes existed, but you didn't use it in anything -- so we ran OpenVZ, which I will still contend that OpenVZ does not get the respect it deserved for being a really awesome open source virtualization product. Because they were actually even called OpenVZ containers. So we were doing a container management system using OpenVZ, and the provisioning thing that me and others cobbled together with Python, using like Slack, and other stuff like that... We had observability, we had automation, we had chat ops, we had all the things we needed, that we wrote ourselves in Python using OpenVZ. And we used that to deploy very meticulously a well, high-performance architected deployment of Elasticsearch as a service and MongoDB as a service and Redis as a service. And I thought that was real cool. And the funny part was we had like one, maybe two sales engineers.

We were talking to customers all the time. We knew our customers, most of them by -- all of our like named customers, all our big... We knew them by name, they knew us, we knew them... One of our biggest customers was Tinder, back then before Tinder got bought by Match.

**Autumn Nash:** That's kind of funny.

**Tim Banks:** \[unintelligible 00:22:00.27\] some party boys out of L.A, and let me tell you what, boy... When they came in for a customer conference...

**Autumn Nash:** Oh, tell us, because I know you have good stories.

**Tim Banks:** Man, look...

**Autumn Nash:** What was your favorite Tinder story?

**Tim Banks:** Well, this is my favorite. Hanging out at ElasticCon with a good friend of mine now, Patrick Albert, who was the director of operations, a VP of operations, something of operations at the time... And we're hanging out in this pier, and ElasticCon was going on, but it was Microsoft talking about a bunch of stuff etc. So we're sitting there at either end of a table. So Patrick and I were both in the Marine Corps. So we're at either end of this table, holding court for a bunch of nerds, and hanging out, talking, chatting up all the service workers and stuff like that, having a generally good time. And then Patrick's like "Hey, man, do you have Tinder on your phone?" Now, at the time I'm married, with a kid, so I was like "No, I don't have Tinder on my phone." He's like "Well, how are you going to tell me if stuff is working if you don't have it on your phone?" And I'm like "Oh, man. Okay. Alright. Yes."

**Autumn Nash:** Why is he trying to get you in trouble?

**Tim Banks:** He takes my phone, he installs Tinder on it, and I don't know what he does, but he's like "What's your email?" etc. He goes back, busts out his laptop, and the next thing you know, I have Tinder in God mode.

**Autumn Nash:** What?!

**Tim Banks:** Yeah, even now. I still have it on my -- hey, Tinder, don't...

**Justin Garrison:** Don't remove Tim.

**Tim Banks:** If you're listening, just -- yeah.

**Autumn Nash:** See, this is why Tim's dating tweets on Twitter... I'd be still there for it, and I'm like "Okay, what happened now?"

**Tim Banks:** And now I'm like "Oh, wow." And now here I am, I'm in San Francisco, and I'm in God mode Tinder.

**Autumn Nash:** Oh, no...

**Tim Banks:** I'm like "No person should have this."

**Autumn Nash:** Wait, what is Tinder God -- what else was on it? You know what? I don't need to know...

**Tim Banks:** \[23:45\] No, you really don't. I promise you, you don't. But what I thought was real cool about that is because -- like, you're running out. Now, we had the 2016 Olympics, right? I don't know if you know this about athletes, but they like to have a lot of sex when they're done competing. And the people who go to watch it, they're all traveling like that. So we had some very real data sharding issues around performance around hyperlocal -- they used to call it the hot girl problem, right? The hot girl problem was whenever a hot girl would go on vacation, we would get a hot data shard, because she was in a new place, and everyone was matching her, and she's doing all this stuff like that, and we'd have huge amounts of data being written to one shard, that's allocated to one person, who was normally over here when she was a medium sized fish in a big pond, and now she goes to a medium sized city, she goes to like Indianapolis or something like that, and now Indianapolis is blowing up, because she's the hottest thing that they've ever seen in 20 years. So now we had to figure out, "Why is this shard hot? Oh, hot girl problem."

So knowing this was a thing, we had to have like huge preparatory deployments for the 2016 Olympics. Because we were going to have all these athletes in one spot, and all they want to do is, you know, that... And when they \[unintelligible 00:25:07.00\] or whatever.

**Autumn Nash:** Wait, wait, they were doing all this on cardboard beds?

**Tim Banks:** Look, man, you know as good as anybody else, you'll find a way to water.

**Autumn Nash:** We've just brought like two areas of my life together, dating apps and like databases, and I just wasn't ready... I wasn't ready.

**Tim Banks:** But so dealing with those kinds of real time data problems... And again, this goes back to understanding the context of what it is you're trying to do. We were writing code so people could get laid. And with that in mind -- like, you had to have that context in mind, because what you were doing had very real and big implications on infrastructure, on code, on processes, on observability, and everything like that. But if we didn't have that context, we don't understand why this is working like that, and we don't know how to build around it.

**Autumn Nash:** Which is wild.

**Tim Banks:** And so if you don't understand what it is your customer is trying to do and what their customers are trying to do, you don't have the right context for the things that you need to do to support that.

**Justin Garrison:** I think it was 2012 I interviewed at Tinder, not knowing anything...

**Tim Banks:** Yeah, I can already tell you, man... I know you now, I don't know what you were like in 2012, but I can tell you, you were not Tinder material back then.

**Justin Garrison:** I was not. And I was interviewing a lot of places. They had the most bizarre interview process I've ever had in my life, where I just showed up, and it was small, 2012-ish or whatever...

**Autumn Nash:** Wait, what is Tinder's interview -- what goes on?

**Justin Garrison:** No one was there for 20 minutes when I showed up. Literally, the entire office was empty. And then someone came in and they're like "Oh, I'm here for an interview." And they're like "Oh, okay. Come into this conference." And they're like "I was just up all night restoring Mongo database dumps that crashed." And then they left the interview three times and they got paged. They're like "I have to go. I have to go solve this problem." They brought in someone that just walked in the door... Like "Hey, come interview this person." And I'm like "What is going on right now?" And I'm like "This is not a well-run company", at that point. I knew nothing about it. But then also, what came out of that was one of my favorite puzzle questions of operations interviewing was "What happens if you \[unintelligible 00:27:13.18\] And I was like "Oh, what would you do?" And they're like "How would you fix that?" And I'm like "Okay." So I walked through... That was just like one of the interview questions I remember from that entire episode. But yeah it was a weird, weird day.

**Autumn Nash:** I feel like I must live in boring tech, because you all got stories.

**Tim Banks:** So these are the things that you get when you're dealing in operations and not software engineering. Because our app developers, people that wrote the interface, and wrote all the -- they didn't have none of these conversations. They didn't do none of that fun stuff.

**Autumn Nash:** \[27:51\] What was like the worst outage you've had to deal with as like a DevOps SRE engineer? Because you've done some stuff, and you're very, like...

**Tim Banks:** I think the worst outage, worst one that -- because there were outages that were caused by stuff that wasn't our fault, that we're just like "Oh, it's down." And whenever somebody fixes their login authentication, \[unintelligible 00:28:10.04\] The worst outage I ever had is I was at Elastic, an engineering all hands in Berlin. It was a great place. I loved it. So all the SREs were there. And we did this to ourselves. Let me just preface this by saying... Because we relied on something that you should never rely on, and it's called Zookeeper.

Half of the gray in this beard is from Zookeeper. So many things that you know, and probably love, and also hate... You probably love it if you don't have to actually do the operations for Zookeeper, and if you're on operations with Zookeeper, you absolutely hate Zookeeper. Zookeeper is the bane of your infrastructure, necessary as it may be.

**Autumn Nash:** Tell us what Zookeeper does.

**Tim Banks:** Zookeeper is essentially a key-value store. Same as Etcd, same as Consul, whatever like that. It just operates in the \[unintelligible 00:28:58.28\] just like anything else.

**Autumn Nash:** If y'all could see Tim's face right now while he's talking about how much you hate Zookeeper...

**Tim Banks:** My eyes have changed. I'm back in 'nam.

**Autumn Nash:** You look like you've been through some stuff... Tim's got like trauma in the eyes.

**Tim Banks:** But it's a key-value store, it's state store for state of this container, that container, whatever it is you're going to do state store for. Like I said, same as Consul, same as Etcd, whatever. God, it sucked...
So Zookeeper fell over. Oh, the reason I say we did this to ourself - because it was 2016, and we were running with what Found.io had started, which was we were doing our own stateful Docker container management system that we wrote ourselves. This is before Kubernetes was reliable enough... And we used Zookeeper at the time because that's, I think, what Mesos was using. Which is also why you don't see nobody run a Mesos now.

**Autumn Nash:** Shade...

**Tim Banks:** But so we ran that, and it did, like Zookeeper likes to do, and it fell over, at nine o'clock at night, Berlin time, on like a Thursday night... And everybody except the on-call was mostly shit-faced. So we had one -- and we're all at a happy hour at the Western Spy Museum in Berlin, in former East Berlin... And Zookeeper is down, and everything is blowing up. We got one on-call who's cuddled around a laptop, and everyone else who works in engineering at Elastic, we're all various levels of intoxicated, trying to be as helpful as we can.

**Autumn Nash:** Oh, no...

**Tim Banks:** And I wasn't the on-call, but... I think it was Ben. Sweating bullets, right? But he was also Australian, so he was kind of sweating bullets the way Australians sweat bullets...

**Autumn Nash:** Is that a different form of bullets, or --

**Tim Banks:** Culturally, they express stress differently than Americans do, for sure. So we're all trying to help... And we have an international team. We've got Spaniards, we've got folks from -- two folks from Spain, a few Americans, a couple of guys from Australia... Something like that. So everyone, in a cacophony of languages and accents, various levels of intoxication, trying to fix Zookeeper. And it was as absurd as it sounds, is exactly how it was.

**Justin Garrison:** With one person typing.

**Tim Banks:** One person typing, trying to fix Zookeeper, which --

**Autumn Nash:** And it's just one laptop...

**Tim Banks:** And so fixing Zookeeper is not a permanent state. It's like an electron, right? Yes, it is fixed now, but when you go back and look at it again, it's going to be broken. It's Schrodinger Zookeeper. And so we got it up and running, and then everyone was like kind of shook, but also celebrating, and we were now with in this semi-traumatized, "Is it okay to party? Should we celebrate? I don't know..." Because it's working, but no one ever \[unintelligible 00:31:55.21\] And so we were shook the rest of the time. But yeah, that's probably my most fun outage.

**Autumn Nash:** \[32:05\] I love that y'all were all partying, and the poor one dude on call... I guess at least he wasn't intoxicated...

**Tim Banks:** But we were all crowded around him in this Spy Museum, trying to be so helpful...

**Autumn Nash:** I love that you were supportive drunk people...

**Tim Banks:** And to be fair, helpful is relative, but the intent was there.

**Autumn Nash:** You probably made it worse.

**Tim Banks:** We may have.

**Autumn Nash:** Okay, so what was maybe not just like technical-wise, but what was your coolest job? Because you've had some -- like, what is being a cloud economist? You've got so many layers. Like, we heard about your DevOps career, but what about -- I feel like you've...

**Tim Banks:** Being a cloud economist is being a principal level SRE, but the thing you're solving for is cost.

**Autumn Nash:** How do you even get good at that?

**Tim Banks:** Be the one in charge of saving the company money sometimes before it actually -- before FinOps was an actual practice, right? And again, that's something we did to some extent at Object Rocket, but we owned all our own hardware... Because you should... At Elastic we used AWS and GCP and Azure, to some extent. So that's really when you've got into pulling levers on what costs, what, where and how much, and where should we run this, and things like that. But also, once you start looking at AWS builds, things start to make sense, especially when you're good at architecture.

And then also, I really got to see how the sausage was made at AWS, working there as a TAM, and some of the things that they were doing, not only to optimize costs, but to make sure they were still making their money on the backside. And so then when you go and then you compete against AWS, in that aspect, you're kind of informed about how the processes work. But a lot of the things that you're going to buy, that do cost optimization, do like maybe 10% of what you could possibly be capable of.

Cost optimization - I beat this over and over \[unintelligible 00:33:53.29\] about pretty much any problem. Cost optimization is done on the whiteboard, first and foremost. It's done on planning, it's done in your architecture. You cannot have a cost-inefficient architecture and make up for it with AI, or some like ML "Oh, we're going to reschedule containers using Kubernetes." That's -- no.

**Autumn Nash:** Because I think that's where a lot of people are right now. You know what I mean?

**Tim Banks:** Oh, yeah. Because it's easy.

**Autumn Nash:** People are not sure if they want to go back to on-prem, if they want to own their own hardware, if they want to be in the cloud, they're not sure which cloud... So I feel like your experience is really relevant right now. What was it like when you had three different clouds? Because people are selling multi-cloud everywhere, and it seems like the only startups that are really doing well are the ones that are observability into multi-cloud, because people want to be able to lift and shift, and put things everywhere, and nobody knows where they want to be...

**Tim Banks:** Oh yeah, yeah. Money's always in the data. Always money is in the data, and that's all observability is. That's why AWS charges so much for...

**Justin Garrison:** CloudWatch.

**Tim Banks:** CloudWatch. Thank you. You use it because you have to, but nobody really wants to.

**Justin Garrison:** It's terrible.

**Tim Banks:** It is the Zookeeper of observability. Oh, that's going to hurt... I'm so sorry, CloudWatch team. That was unfair. That was unfair.

**Justin Garrison:** Now, you've said something in the past that I wanted to get some background on. I know you've said that the cloud has made us irresponsible.

**Tim Banks:** Oh, absolutely.

**Justin Garrison:** I would love to hear more about that.

**Tim Banks:** So the reason that cloud has made us reckless is because in the before times - and back then when it would take you a couple of weeks to spin up a VM, which consequently is what a lot of these startups still think is how it runs... And it's not like that. But you still have to do forecasting, right? You had to figure out disk space, you had to figure out number of CPUs, you had to figure out network... And you had to figure out what it cost...

**Justin Garrison:** Right. A budget.

**Tim Banks:** ...before you could get a VM approved. Before they would launch anything for you. That was the thing. There was forms for it, there was a whole way of predicting and forecasting. And when the cloud says "You don't have to do that anymore. You can just spin up, and we'll bill you for it later." "Great." Okay. So you didn't have no dev environments that were just sitting there, hanging out, sucking up disk space. Not to the extent you do in cloud, right? You didn't have systems that just stayed on forever. You didn't have petabytes of data sitting out there, unsecured in a bucket because you copied it somewhere, and then now somebody got in and grabbed it, because you don't know how to secure it. You didn't have it like that back then. Not saying it never existed, but not to the extent it does today. Cloud has made us reckless, because it's too easy to do things.

\[36:21\] There are people that have money... And then you know, when they have so much money and the money don't really mean nothing to them, they just go and do anything with the money, and they get a little reckless with it. Cloud is kind of like that. You have, in theory, or a promise of unlimited resources... So what does it matter how much traffic something takes? How much this, how much that. And then you get the bill. And then you're like "Wow, this bill is a lot higher than I thought it was going to be."

**Justin Garrison:** Well, and you hide your bad architecture with bigger bills. You're just like "Oh, that was a bad choice" and "We'll just pay for it now."

**Tim Banks:** Now we're just going to pay more for it, right. And what people say is like "Oh, when you look--" And I've done this before when I've done contract negotiation. I'll look at your bill, I'm like, your bill is hundreds of thousands of dollars a month. And it's going to keep being hundreds of thousands of dollars a bill a month, and it's going to keep going up. And your idea to save money, it's like "Oh, well, I'm going to commit to spending this many hundred thousand dollars a month to AWS, so I get a discount on my CPU, with reserve instances, or with a private pricing agreement." And I'm like, you've taken your very large OpEx, and you're going to try and reduce your OpEx by turning it into a pseudo CapEx. You have functionally bought hardware...

**Justin Garrison:** Without the benefits. Yeah.

**Tim Banks:** Yeah. But instead, you're leasing it and you can't even claim it as depreciating assets on your taxes.

**Autumn Nash:** You know what's wild? For a while, we had legacy tech where people would make these huge commitments and they would get stuck, and then they'd take 20 years to move off of COBOL. And then it got to the point where now people are lift and shifting all these things, and they keep going back and forth between on-prem and cloud... Where do you think this all settles out? Because people -- now I've heard startups where they're buying hardware, but they're having it run for them in a data center.

**Tim Banks:** That's exactly how you should be doing it.

**Autumn Nash:** But there's so many different options, and I feel like people are -- it's almost like nobody knows what the right answer is.

**Tim Banks:** So my take on it is, I think more people are going to buy compute than are going to lease compute. If you have the money to do it, it is always more cost economic to buy your compute, especially if capacity is a concern.

**Autumn Nash:** What about the fact that you can scale in the cloud, and you don't have to wait for the hardware, you don't have to...

**Tim Banks:** Have you ever tried to provision instances in Azure?

**Autumn Nash:** No. We don't play with that here...

**Tim Banks:** You want to roll those dice of whether it's going to be there when you need it?

**Autumn Nash:** Oh, that's another thing I wanted to ask you about... What was your experience like when you were using three different clouds? Because I think that people talk about multi-cloud like it's the answer to everything... What was doing that in prod like?

**Tim Banks:** It sucks. And here's why. So in theory, it's like, oh, I could just write one Terraform codebase and replicate it across. You can do that more now, but you couldn't back then, and \[unintelligible 00:39:21.19\] The observability stacks were all different before OTel existed, before the... Oh God, don't even look at your bills. They're just now at least starting with the FinOps Foundation just released, I can't remember what it's called, but a unified kind of billing format throughout the cloud providers.

**Autumn Nash:** That's what I'm wondering... How do you get real observability and like context into what you're even doing with three different companies?

**Tim Banks:** You have to use a third party tool. The one that I really liked - this is not a paid endorsement, but the one I really liked was CloudHealth. CloudAbility to some extent, but CloudHealth was really good about ingesting this stuff and being able to visualize it from a resource usage and a cost standpoint. It is the one product from VMware that I think should continue on. And that's a spicy take.

**Autumn Nash:** You know what I think is wild?

**Tim Banks:** What's that?

**Autumn Nash:** \[40:11\] With all of the multi-cloud and all that good stuff, and then AI, I think the people that are really going to make money in the next couple of years are going to be the people that make really good tools for multi-cloud, or things to lift and shift... Because that's what people seem to be doing right now. And the chip companies. Because -- you know when they say that like during the mining gold rush back in the day, the people that made the money were the ones that sold the shovels...

**Tim Banks:** Sold the shovels. Yeah, yeah.

**Autumn Nash:** So I wonder if it's going to be the people that are making it easy to lift and shift from on-prem to like cloud, and the people that sell the chips.

**Tim Banks:** I think that ship has already sailed. I think it is now the default that someone is going to run -- when you reach a certain size, right? Whatever your certain size of operations is... That you are going to have a presence in more than one provider. Economically, it makes the most sense to buy compute, versus reserving it. I know I'm going to -- you reserve compute because you know you're going to need it. If I know I'm going to need it, I'm just going to buy it.

And then I will get some AWS essentially equivalent savings plan for any kind of elastic, or unpredictable scale.

My dev environments, I'm going to buy. My steady state compute batch jobs, all those kinds of things that I know I need every day, day in, day out, I'm going to buy. I'm going to buy 90% of my GPU fleet. You know why? Because I can sell it when I'm done with it.

But also, not every GPU needs to be newer, faster, whatever like that. The vast majority of the work we do, the GPUs are just -- they have more memory, they have some abilities, but for the most part, you can still get by with 90% of the stuff you're doing with whatever you buy today. Or whatever you bought last year.

**Autumn Nash:** What happens when all this stuff goes on sale though? You know what I mean?

**Justin Garrison:** I'm so excited for all the GPUs to hit the secondhand market. It's going to be so great.

**Autumn Nash:** Because honestly, that's what I want to know. Because at some point, all these data centers that are being built, all this compute power that people are buying - what are we going to do with it when they realize that AI is not going to make everything better? We are going to have such a surplus of these chips and compute power.

**Tim Banks:** Yes and no, because people were using these GPUs to do inference before. It's not going away. We may not have the boom of gen AI like we do, but I don't think it's ever going to go away. But that's the beauty of buying it. I don't need it anymore - I can get some of this money back by selling it.

**Autumn Nash:** But do you think it's going to get to the point where everybody is going to have it, and it's going to be like not even worth selling? You know what I mean? You know how cars, and --

**Justin Garrison:** It drives the price down. It's the supply and demand. And that's not new, because in the early 2000s, the dotcom boom, all these people got rid of servers and a new breed of people that could do stuff off this cheap hardware, like "Hey, I don't need that big fancy thing. I just need a couple of small pizza boxes, and I can run my whole business off it."

**Tim Banks:** What do you think powered the first Bitcoin miners for old servers? People's old desktops that \[unintelligible 00:43:01.17\] stuff like that. The notion of buying it means that when I'm done with it, I can sell it and get some of that money back. Is there a secondary market for it? Absolutely. There's already a burgeoning secondary market for buying older or used GPUs, and servers, and stuff like that. "Perfect. Let me make some money off of this." That's going to be far more economical than giving the money to AWS, because I'm never going to see that again. You know what I'm saying? This is the difference between investing -- this is the difference between "I'm going to do this thing as an investment and I'm going to get some money back on it", versus just giving it away to somebody else. But this is not a day one decision. Day one decision is growth, and it makes perfect sense to be in whatever cloud environments can allow you to grow, right?

**Autumn Nash:** Yeah. I think startups should start in the cloud, and then figure out what you're using, and when you figure out your scale...

**Tim Banks:** \[43:51\] But the thing that I think where startups mess up is startups build in the cloud as if they're always going to stay in the cloud. And what you should be is agnostic as possible, because it may behoove you to be able to move at some point. And you need to make good architectural decisions in the beginning, that don't make it extremely difficult or impossible for you to change down the road.

**Autumn Nash:** That's not even just for cloud, though. I think that's for -- how many times have you seen horrible tech debt come from the fact that people just didn't really spend a lot of time on their design and architecture in the beginning, even with databases? You know what I mean?

**Tim Banks:** Low-bearing tech debt is what we call it. It's too expensive to not move.

**Autumn Nash:** Especially working in databases for a few years, seeing the way that people did their database schemas and stuff, and you're just like "But why? Why would you do that?"

**Tim Banks:** Do you think Oracle database is still around because people are like "Hey, you know what would be great for this new project? Oracle." Nobody does that.

**Autumn Nash:** Yeah. So I think that is just sage advice in general in tech. People always want to code and build something cool, but it really pays to spend a little time up front.

**Justin Garrison:** Well, and I've completely changed my position on good cloud architecture, where I think that lift and shift is the best model for the cloud, because it's the easiest way to get out of it again. And the cloud should be temporary leasing, like you do if you go travel to someplace on vacation. You're not going to go buy a house; you're going to be there for a week and then you're going to leave. And that is how you should treat the cloud. You should lift and shift there, and then you should get out as fast as possible, back to stable things that you own and you know the long-term costs of.

**Tim Banks:** I think the most efficient way to run is by default to treat everything that you have as if it's spot. Because if it can go away, that means I can put it anywhere.

**Autumn Nash:** Yeah, I think you should do that in general, even when you're running on your own hardware, just because you always have options. And I think also just keeping it simple, because then if you realize something no longer works for you, it's easier to change your architectures and how you do things.

**Tim Banks:** You know how long it's taken some people to have to rewrite code just to be able to use ARM-based chips, because they were very, very --

**Autumn Nash:** I don't know. I feel like we have all seen how tech debt goes wrong, and being able to make things neat and simple enough - for one, it's easier to fix, but it's also easier to add, or to... You know what I mean?

**Tim Banks:** You want to be able to modularize it. You want to be able to tear stuff out and replace it. Or like if I want to switch providers, it should be as simple as changing a target or a variable. That's the ideal. Now, the practicality is it's never that easy, but you want to try to reach that ideal, so that way I'm not hemmed into anything. That gives me negotiating power when I go to negotiate a contract, or I want to discount, or something like that. Because in theory, the only thing that should have any gravity is data.

**Autumn Nash:** Yes.

**Tim Banks:** That's the only thing that's expensive to move, and that's why they charge you so much to egress, is because if you do it right, that's the only thing that's going to take some time and hard to move. Compute should be agnostic.

**Autumn Nash:** That's the crazy part. And I've learned so much going from a solutions architect and then being an engineer, because solutions architect - you're constantly telling people about like best practices, and what you should do... And then when you actually have to go build those things, best practices don't always work, but you have to find like a middle ground in between those to try to use as many best practices as possible.

**Justin Garrison:** Well, I'm sure -- like, Tim practices jujitsu six days a week, and then he goes out and fights someone... And the practices help, but it's not the real world. When he's about to get punched in the face, then he has to actually adjust and say "Oh, this is different than practice."

**Autumn Nash:** Y'all, Tim has one talk about -- what is that one that you did and it was all jujitsu? The last one you did, or like one of the more recent ones...

**Tim Banks:** Oh, the one talking about fundamentals versus techniques?

**Autumn Nash:** Yes. And then you had all this -- you had a bunch of jujitsu... Dude, it was so good, because it was like this real life thing, and you were bringing this real life experience with these pictures and these visuals, but it was also talking about technology. And it was wild... Like, it was such a good talk. Usually -- sometimes you can get very bored in the middle of a very technically depth talk, but you're like "Okay, I want the information", you know? That talk was so good. Can you tell us more about that? Kind of how Justin framed that, and about how you do that?

**Tim Banks:** \[48:09\] So we talk about techniques, and a lot of people in jujitsu, or anything, we talk about technique. Technique is the ideal way that something should work. So if I'm going to do what's called a scissor sweep... So I'm on my back and I'm in guard. I'm going to grab your lapel of your gi, and I'm going to grab a sleeve, and then I do what's called a shrimp.

So I'm going to move on my side, I'm going to scissor my legs, and you're going to fall over on your side. And that's going to work pretty well in a drill. If I do it like in a \[unintelligible 00:48:35.11\] it's never going to work, because I have to understand the fundamentals behind why a scissor sweep works.

A technique is the application of a fundamental. The fundamentals behind why a scissor sweep works is that I'm going to move your body to one side. So I have to take away a post. That's why I grabbed your sleeve. I need to control your posture and pull it down toward the ground, so that your shoulder hits the ground on the side where you don't have a post. That's why I pull your lapel. Now, I need to shift your body one way and then take your hips out from underneath you, which is why I scissor my legs. So because I understand that I have to remove your post, I have to break your posture down on one side and then shift your hips, when I do a scissor sweep, if you see me doing one in a fight, I'm never going to do it like you see in class. It's going to look different, because the scenario is you're never -- everyone knows how to do a scissor sweep, so no one's going to let you do a scissor sweep. I need to find some way to control your elbow and break your posture down, whatever that looks like. And then I'm going to scissor sweep you, and you're going to wonder why you were able to be scissor swept when I didn't have control of your sleeve or lapel. I understand the fundamentals of why something works, so that way I can apply it in any situation.

**Justin Garrison:** And know when to not use it in a real world... Like, is a scissor sweep the Zookeeper of jujitsu?

**Tim Banks:** No. No, no, no.

**Justin Garrison:** Sorry, I was just trying to bring it back...

**Autumn Nash:** What's the Zookeeper of jujitsu? We're about to get spicy right here...

**Tim Banks:** The jujitsu guys are going to be -- I'm going to get yelled at; I'm going to get screamed at in Portuguese, but the Zookeeper of jujitsu are guard pullers. The people that start a fight by sitting down. And under perfect, ideal scenarios that works just fine. Until you get a guy who knows how to pass guard and knows how to frustrate you. And then now, I have someone who can move in any direction, up, down, side to side, around and around and around, and I've got my butt on the ground and I'm hoping to scoot faster than you can run.

**Autumn Nash:** That's really interesting, because I feel like that's really simple and not what you would think... But also, it's -- see, my son does jujitsu, and I really wanna do it with him if I wasn't so scared all the time... But I love the fact that so much of jujitsu is in your head and it's strategy.

**Tim Banks:** It is chess. High stakes chess.

**Autumn Nash:** Yeah. But it's also -- like, you can be so much smaller and still be very competitive at it with someone bigger, because it's so much strategy. And I think that that is what makes you such a very unique -- like, you are so effective in technology, because for one, you have the fundamentals, you've done so many different jobs, you've done the actual in it stuff, the very high stakes in production, but you've also advised, but you are... Like, to really be successful and to really doing something operational, you need to be strategic, and there's so much strategy and being in your head in jujitsu and being able to really think about how to get in someone else's head... And what you just said, that's literally one of the simplest moves, but it's strategy, right? If you're using a simple thing... And I think that's what makes you really good at your job, but it shows the intersectionality about like your other activities and how good you are technically, and why you're successful in both.

**Tim Banks:** This is what it comes down to, is system and process analysis. Jujitsu is just a system. It's just a collection of processes.

**Autumn Nash:** It is. It's amazing.

**Tim Banks:** \[52:00\] So is tech. And so when I talk about -- going back to having context for what you're doing... If you're just doing a scissor sweep and you can do these moves and hope someone falls over, it's never going to work, because you don't have context for what's actually going on. When you understand the fundamentals, now you see the context of what you're doing. Now you can apply what's going to work in that situation, versus doing the technique.

So a coder who just knows coding is -- all they know is going to type code. But if they understand the fundamentals behind how the infrastructure works and how your architecture is laid out, and why things are the way they are, you're going to be able to make better choices about how you write code and how you fix problems.

**Justin Garrison:** I think that's a great place to wrap it up, because we went full circle on this. So Tim, thank you so much for joining the show. Where can people find you? Where should they reach out online?

**Tim Banks:** Oh gosh, I'm on Twitter at @elchefe. I talk adjacently to tech. I mostly don't talk about tech. I'll talk about dumb stuff, but... I like to talk about whatever. I don't have a professional and a personal Twitter account. I just have the one. So be advised.

You can find me -- I'm writing a blog, it's at tim-banks.ghost.io. It's on Ghost. It works out well. I'm also on LinkedIn. You can find me if you know what I look like. You can go to Twitter if you're not sure and then go find me on LinkedIn. And that's mostly it. Feel free to talk to me out at the conferences if you see me around. I'm actually a nice guy. I'm shorter than people think I am. I'm only five foot eight. But yeah, I'm happy to meet folks, and... Just don't be a jerk, and I'll be nice.

**Autumn Nash:** If you want someone to make your whole day from inside of your phone, follow Tim on Twitter. He'll make your whole day. If you're having a bad day, go read Tim's tweets and you'll have a better one.

**Tim Banks:** Yeah. No, I really appreciate it. This was a lot of fun.

**Autumn Nash:** It was so much fun. I had so much fun talking to you. I'm so glad to finally virtually meet you.

**Tim Banks:** Yay.

**Break**: \[53:51\]

**Justin Garrison:** Thank you so much, Tim, for coming on the show. It was a lot of fun. I don't think we've laughed that hard on any interview.

**Autumn Nash:** Oh, my God. It was so much fun. I think I got three ab muscles from laughing at Tim. I don't have words... I think this is my new favorite episode.

**Justin Garrison:** It was a good one. We'll mark this one as a recommended for sure in the feed. For the outro here, because -- let's see... A lot of things have happened, and we've got a couple of links this week. It's just how we used to do intros, we're just doing a couple of links now and talking about it a bit. Autumn, what have you got?

**Autumn Nash:** Okay. So I don't know if anyone saw it, but I feel like it's been pretty in the news lately... Google was going to acquire Wiz. And Wiz is -- I don't know, how would you describe Wiz? Maybe an observability software?

**Justin Garrison:** Or cyber security... Yeah. Security-focused...

**Autumn Nash:** Yeah. I am a fan. I think that their marketing's really good. I think their product can be used in a lot of really cool multi-cloud observability security kind of settings. I've spoke with some of their product managers and engineers at conferences... So Google was going to acquire them for - what, like 27 billion, I think?

**Justin Garrison:** 23 billion.

**Autumn Nash:** So people were kind of freaking out, because this is like one of the first really, really big acquisitions since tech has kind of been in this tech recession... Like, there's no more \[unintelligible 00:55:16.17\]

**Justin Garrison:** And it would have been Google's largest acquisition.

**Autumn Nash:** Yeah. So what is this, like 23 Motorolas, or something like that? When Motorola was acquired.

**Justin Garrison:** Was Motorola a billion? I know Instagram was a billion. I don't remember what Motorola was.

**Autumn Nash:** So that's like 23 Instagrams. And this is after -- like, we are no longer in zero...

**Justin Garrison:** Zero interest rate, ZIRP?

**Autumn Nash:** Yeah. So think about -- like, you are paying crazy interest. This is a lot of money for an acquisition. So people were shocked that Google was ready to pay this much money for a startup. And then they said, "Hey, never mind. We're going to IPO. We don't want your money." And turned it down.

\[55:59\] So it was wild, because the talk of this acquisition was so big. People were just like "They're going to do what? For how much money?" And for them to turn it down... I mean, in this era of people being really unsure about the future of tech and like products, a lot of people would have took that money and got out.

**Justin Garrison:** Yeah, that's a lot of money. And looking back -- I didn't realize Motorola was 2011... And they were $12.5 billion. And that was supposed to be an all cash deal for the shares, because Motorola was a public company...

**Autumn Nash:** So that's two Motorolas and 23 Instagrams?

**Justin Garrison:** Yeah. And Google at the time, according to this article, Google had $39 billion in cash. So they were spending 12 billion out of their 39 to buy this company, that they later got rid of. Like, they deprecated that purchase...

**Autumn Nash:** That's why it was super-interesting, because we were just talking about the things that Google has shut down on another episode... So then it was like really funny, because when the word of this acquisition came out, everyone was like "Are they going to buy Wiz and deprecate it?" So it was interesting.

Also, it was just like "What is your motivation for buying Wiz?" I mean, I think it's a good company, but $23 billion in the times of not knowing -- you know, we're talking about how we can't hire enough engineers in most companies, and how we're cutting all these projects because of money... And they were down to spend $23 billion. What did they want so badly?

**Justin Garrison:** There had to have been something there. And also the fact that this is not an AI company. This is a security company. They might have a future of "We're integrating AI into everything." I'm sure that's what Google may have saw in it... But who knows? Like, there was something that was worth $23 billion to Google, and in that case they were offering that money, according to -- again, we're not on the backend of this. We don't know what the actual -- like, was this an all cash deal...

The other thing that was interesting was Wiz raised a billion dollars recently, with a 12 billion valuation. So this was going to like double their valuation. But also, a billion-dollar raise is a billion dollars in raising money. And at this point, if you're exiting at $23 billion, you're only getting a 23-exit on that last round. I think this was like their series C, or something... So they had already raised money. So I'm assuming that at some point the investors were like "Oh, I don't want just a $23-x on my return, I want a 100x." And in many cases -- you know, it's a big number, but also, compared to the amount of money that went into it, it's not that big of a multiplier.

**Autumn Nash:** I feel like you're still knowing that you're getting your money multiplied in a very uncertain time...

**Justin Garrison:** Yeah.

**Autumn Nash:** To walk away from -- I mean, it is just very impressive to raise a billion dollars right now. Anything that's not AI is not getting a ton of money. Chainguard just -- how much money did Chainguard just raise?

**Justin Garrison:** Yeah, Changeguard just raised, too. Yeah. Series C for them.

**Autumn Nash:** Yeah. Series C, they raised...

**Justin Garrison:** It was hundreds of millions, but I don't remember...

**Autumn Nash:** $140 million, which is impressive in this time, with a $1.1 billion evaluation... Which - is this a shift that we're starting to go back and invest money into things that aren't just AI maybe?

**Justin Garrison:** In both cases, security-related companies. This is --

**Autumn Nash:** Yeah. So maybe that means we're finally spending more money in security, and putting money into important things, and not just in the AI hype... I don't know. But what do you have to think your product is worth that you're like "Nah, I don't want $23 billion of cash"?

**Justin Garrison:** Any company, if Google offers to buy you publicly, and then your -- your evaluation in general is just going to go up. Because then at that point, everyone notices. Oh, Google saw something in you. I will pay you more... At some point.

**Autumn Nash:** But these are all fake dollars though.

**Justin Garrison:** Exactly.

**Autumn Nash:** Evaluation's cool, but that's not the money in your bank account. You had the chance to put that money in your bank account. I mean, they weren't getting all $23 billion, but that's still -- it's not exactly a little amount of money.

**Justin Garrison:** \[01:00:13.20\] Yeah. So I don't know. Interesting decision for them.

**Autumn Nash:** Tech is wild right now.

**Justin Garrison:** Maybe they see something in either the stock market continuing to grow, or startups in general growing in the future... We'll see. My link of the week is a Wired story, which - sorry, it's paywalled. But for anyone listening to this podcast, you probably know things, archive.org, and whatnot... But it's the full story of the stunning RSA hack, which is also from 2011, when Google bought Motorola. But I remember this story. I listened to a lot of security podcasts back in the day, Security Now, and various other security shows... And this one was brought up multiple times, because it was always just like "Something happened, and we don't really know what", but RSA being the keeper of basically two-factor authentication before it was mainstream... Like, if you had two-factor back in the day, you needed it, for some reason. This wasn't like everyone had two-factor on their Gmail.

I actually have a semantic two-factor here that was an RSA key back in the day... And I had it for finance investments, or whatever. Some account, they wouldn't let me have a strong password, so I'm like "Send me a two-factor." And I've had it forever, but RSA got hacked back in 2011, and they stole the seeds for those keys, the physical keys. So you couldn't reseed these with new keys and say "Oh yeah, just scan a new QR code." No, these were physical devices that had it embedded in the hardware what the two-factor code was going to be.

**Autumn Nash:** So did they find out how it got stolen?

**Justin Garrison:** Yeah, so the story -- there was always speculation and stuff, and this was a really cool Wired article about... Yeah, it was basically an Excel spreadsheet that gave them a backdoor.

**Autumn Nash:** Wait, an Excel spreadsheet?

**Justin Garrison:** It was not a zero-day, but just some malware attached to it. It exploited Flash. This was 2011, Flash was a big deal... So an Excel file/spreadsheet exploited Flash. And the fascinating thing was they said that this was done in a -- it's not a sophisticated hack, to email someone something, and they got a backdoor in... But the thing that was interesting was they said that this was actually -- someone else wrote on the back of that person's backdoor. And there was two hackers in their network, one through this Excel spreadsheet, and the other one wrote on the back of the backdoor of the other team. And the other team was very sophisticated. And the other team was backed by Chinese government states trying to get the RSA private keys. And they're the ones that actually forked off from this other group that initially got their foot in the door.

**Autumn Nash:** I wonder how they even knew that the other group got their foot in the door and then they exploited it. It's like the Trojan horse, but wrapped up in an Excel file, but two Trojan horses in one Excel file... That is wild.

**Tim Banks:** The RSA hack was huge for security, because governments everywhere were using it. And this actually led to more companies -- like, government contractors got hacked through this two-factor hack. So they stole the seeds of all the two-factor things, and then they used those to go hack into other companies, because now they had ways to generate the correct two-factor codes.

And they had a server in a room that would burn CDs, and they would send the CD to a customer. And that customer had to seed their server with those seeds. And so the initial seeds were still stored on the RSA servers, and that's the only place they existed, where you can get them. And they went in, they grabbed - I forget how many gigs, or...

**Autumn Nash:** This is wild.

**Justin Garrison:** Yeah. And so this had been a mystery for over 10 years as like "Oh, this thing happened." I remember it happening.

And now all the NDAs for the executives have expired, so they were able to talk about it. And so I really enjoyed it, just because I remembered when it hit the news the first time... And I remember seeing, there was like "Oh, was that us? Was it actually from the RSA hack or not?" And sure enough - yeah, there was definitely outfall from this hack happening.

**Autumn Nash:** That is -- like, wow. It's supposed to make it more secure. "Just kidding. We gave it to everybody."

**Justin Garrison:** I mean, they were thinking "Oh, we did our best." It was on a single server that was supposedly air-gapped, but there was like one way to get into it, because they had to keep seeding those seed files and burning CDs.

**Autumn Nash:** But how wild is it that an Excel file took them down? Like, an Excel file.

**Justin Garrison:** Oh, it's not the only place where Excel has taken down a company, I'm sure... I mean, that's just like how you get every \[unintelligible 01:04:38.04\] don't click on links, but like back in the day it was "Don't open attachments." Don't open attachments from email. Now we don't have attachments in email, it's all links. It's phishing attacks. And this was just from the early 2000s, it was files. And that's how you got someone to click a link, and you got a backdoor, and you set up a listening server, and...

**Autumn Nash:** It's amazing how the backdoors and all the biggest hacks are always something so simple.

**Justin Garrison:** Well, and it's always the people. It's always the person that is the weakest link. And that's always where you -- if you're looking at any sort of like postmortem for something that was a hack, it's just like "Oh yeah, someone gave up something", either through spear phishing, or through some other means, someone got in the door. It's rarely ever this amazing... I mean, zero days you don't really care about, because no one knows they exist in a lot of ways; like, they shouldn't. So yeah, that was my link, because I was reading that one and I just was reliving what it was like almost 14 years ago, seeing this happen in real time.

**Autumn Nash:** It's very interesting.

**Justin Garrison:** So thank you everyone for listening to the show, and if you want to reach out, we are at shipit \[at\] changelog.com. We do read all the emails, I reply to most of them, for guests or topics you'd like to hear about... And we'll talk to you again soon.
