**Justin Garrison:** Hello, and welcome to Ship It, the podcast all about running and maintaining software, anything that happens after you git push something. I am your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Hi. How are you?

**Justin Garrison:** I am doing great. I'm rested, finally, after Scale. It was last week and weekends, and it was busy. There was lots of stuff going on.

**Autumn Nash:** It was crazy. But it was so much fun.

**Justin Garrison:** Absolutely. And this was your first time coming to... And for anyone that -- sorry, I should start with the full actual conference side. It was Southern California Linux Expo. It was started as a Linux-focused conference and a meet up for people doing Linux and doing installs of Linux, and it has expanded over the last 21 years. This was the 21st Scale, and it has been going on for quite a while; it has grown a lot larger and a lot more topics. And I've been going for about 15 years. I think this is my 15th Scale. Autumn this was your first one. What do you think?

**Autumn Nash:** Someone said it was nerd summer camp, and that was the most accurate description. I've never enjoyed a conference so much, because people were all genuinely excited, and excited to share information on what they knew, you know, in the most accessible, non-gatekeeping way. I thought it was just an awesome community, and awesome information, shared in a very practical way. And I thought that was cool. And you could tell everybody was genuinely excited to share what they're working on, or what they contribute.

**Justin Garrison:** It is very different vibes than most other conferences that are vendor-backed, or they're a specific topic. And so it's "Hey, there are tens of thousands or hundreds of thousands of dollars for these other conferences, and this is just setting the stage for everyone that's coming need to close a deal, or they need to be there for their job, or they need to be there for some other thing." And at Scale, it is community-run, it is all volunteers... I am a volunteer that helps run Scale now, and it has been going on for a very long time. Tickets are cheap, especially compared to conferences...

**Autumn Nash:** It's so accessible. And the fact that you can bring your kids... Usually, as a mom in tech, especially a single mom, I have to -- I don't know, I wouldn't say hide that part of you, but you have to separate that part of you... And I thought it was so cool that it was kid-friendly, and people were bringing their kids, and booths even had play pins, and had their kids, and there were just kids running around with little baby Scale shirts, and it was adorable.

**Justin Garrison:** Especially on Saturday, because there's a family game night on Saturday night, and so it's a big -- they have arcades, they have all sorts of different things that families can do together. They have board games, all sorts of stuff. And it's encouraged on, especially Saturday, to bring your kids. There's a kids track. Talks by kids, for kids. And everyone that's giving a talk on that track is under 18. And they're ranging from high schoolers to middle schoolers.

**Autumn Nash:** Also, I felt for a lot of kids who are not super-well off -- I grew up totally not exposed to these things as a child... And I felt like that is such a cool way to expose your children to this world of -- kids love a lot of the things that technology builds, and to expose them to how it gets built and the way people contribute is awesome. Also, if you want to build a community or kind of grow a community, come to Scale, because that's community done right to me.

**Justin Garrison:** Yeah. And for a lot of people, a conference is the time that their mom or dad is gone. It's the time that they don't get to spend -- like "Oh, you're going to a conference, you're traveling", whatever. Those things are really sad, because it's like "I don't get to see you for a day or two." And in this case, it's like "Well, let's bring you along." Actually, it might be boring. "I'm gonna be in a talk for a little while. We're gonna sit there for an hour and I'm gonna learn something technical from someone that built this amazing system, or is involved in open source", or whatever it is. And for the kid, that's not going to be the thing they want to hear. But they understand more what their parent does.

**Autumn Nash:** But it's awesome, though. Usually, people are like "Oh, you're a mom", and nobody else is a mom. And everyone doesn't have kids, usually, at tech conferences. Or maybe a few guys will have kids. But usually, they are married, and their kids stay at home, and all that good stuff. But I saw women who are entrepreneurs, and starting startups with their babies, and their baby would cry, and nobody batted an eye. Nobody was rude...

**Justin Garrison:** It is a very common thing at Scale to just like "Oh, this talk has a baby crying, and that's fine."

**Autumn Nash:** Yes. It was a conference that you could legitimately bring your whole self to Scale. And that is just rad. I loved it. I want to volunteer next year. I'm gonna just -- I want to do all that. My kids are planning their talks, and I'm like "Okay, if I can get your dad to keep you on Friday and Sunday, and he can bring you up on Saturday..." I'm just so excited. They have their little Raspberry Pi's, and they're trying to build all the things, and it's great.

**Justin Garrison:** Yeah. If anyone wants to get involved with Scale, go to SouthernCaliforniaLinuxExpo.org. There's a volunteer signup. We already are starting planning for next year. It just wrapped up last week.

**Autumn Nash:** I want to help, Justin.

**Justin Garrison:** But yeah, there's mailing lists that you can say hey, where can you help? And it's not just like you have to run the event. If you want to come and attend the event, that's fine, too. There's a bunch of stuff leading up to it, like call for papers... And even just promoting the event. Because this isn't -- again, it's community-run. There's not a marketing budget, or big ad money behind this. No, this is people on social media that are like "Hey, I'm going to this thing. It'd be cool if you came, too." That's great.

**Autumn Nash:** \[00:06:12.16\] Also, I've never seen so many women talks that are technical. So many great talks. There were just so many smart women. And it was like 40% or 50% women, it looked like, on the feature page. It was so cool.

**Justin Garrison:** Well, and speaking of which, Autumn, you were one of those amazing technical talks. So let's dive into your talk at Scale, as this was your first conference presentation, or public conference, or...

**Autumn Nash:** I've done Apache World Party, and SheBuilds, and some other stuff... But I think this was my longest in-person talk, because a lot of my first talks were during COVID. And then I did some panels that were in-person... But as far as like an hour to fill, and...

**Justin Garrison:** It's you and a slide deck.

**Autumn Nash:** Yes.

**Justin Garrison:** How'd it go?

**Autumn Nash:** Everybody was so supportive. Usually, it's scary to give a tech talk, because people try to argue with you halfway through, or argue with you statistics... And everybody was so supportive. Also, Justin came with a rubber chicken, and it made me less nervous. Best friend ever.

**Justin Garrison:** Anything to lower that -- make it a little more fun, a little more just like "Oh, we're hanging out", and everyone in the room is there to learn from you.

**Autumn Nash:** They were so nice. And I met so many awesome people, and I got such good feedback... And I thought that was really cool.

**Justin Garrison:** I remember before you gave your talk, you're like "Afterwards, we're going to run over to this other talk", because - I forget her name. She was giving a talk about podcasts.

**Autumn Nash:** I'm so sorry we missed it.

**Justin Garrison:** And I was like "Autumn, you're not gonna be able to leave the room. People are gonna be talking to you for at least a half hour."

**Autumn Nash:** I didn't think anybody was gonna want to talk to me.

**Justin Garrison:** And sure enough -- I left, because you were just like "I have a crowd of people around me. They all have questions." I'm like "You will be good. You handle this, and I'm gonna go..."

**Autumn Nash:** Did you get to see the podcast talk?

**Justin Garrison:** No, I did not.

**Autumn Nash:** Darn it.

**Justin Garrison:** Because I was volunteering, because I was doing other things with -- Kubernetes Community Day was also collocated with scale, and I helped run KCD LA, so I was doing stuff for that the days before, and trying to kind of catch up on some things throughout the conference.

**Autumn Nash:** I really love the Kubernetes community. I've never seen so many people that had color-coordinated \[unintelligible 00:08:07.16\] They were just awesome. I might have to go run Kubernetes somewhere, just because.

**Justin Garrison:** We will get you into the Kubernetes community at some point. The gravity around it is fun.

**Autumn Nash:** I know...!

**Justin Garrison:** I've stayed in the Kubernetes community mainly for the community for the longest time.

**Autumn Nash:** The people are just amazing.

**Justin Garrison:** I mean, this is huge shout-outs to people early on in the community, like Sarah Novotny, and people that were building community intentionally from being like "We need to document stuff", and...

**Autumn Nash:** But that's what I'm saying. Even if you have nothing to do with Linux, if you have nothing to do with Kubernetes, if you want to learn how to make your community better in whatever technology you work in, go to Scale, because that's the epitome of how to grow actual community.

**Justin Garrison:** Yeah. So our links for this week in the show notes are Autumn's talk and my talk. Mine was at KCD LA, Autumn's was at the main portion of Scale... And if you want to see what the talks are like, they're sometimes very relaxed, sometimes very eclectic with some of the titles and things that happen, which is great... But all of the talks are currently being edited and put on the Scale YouTube channel. So you can go through and find all of them, but we'll put the links to ours if you want to see what we were talking about at Scale, and what we were kind of doing there.

**Autumn Nash:** Scale also taught me how to teach a technical concept, but in a fun way. I thought it was so cool how they had Game of Thrones, and Dungeons and Dragons-themed infrastructure talks, which I thought were so cool of a way to say "Hey, you know this thing. Now let me teach you something technical using that background." It totally inspired me to write this talk with one of my favorite movies of the year, and to teach CDK with it... So I'm super-excited.

**Justin Garrison:** We learned a lot of things from what we've known before, right? It's like, everything you learn is building on something you've known. So if you know how Dungeons and Dragons work, and if you know how -- I come from doing cars. I always use car analogies, because I'm like "I know how car engine works, and I know how a car suspension works." I know all those systems tie together, and actually, that's a more complicated system than pretty much anything else I've ever interfaced with in my life... And I do it all the time. And it's the most dangerous thing I do, constantly.

**Autumn Nash:** \[00:10:12.08\] Yeah. For sure.

**Justin Garrison:** And that is the thing; we just take it for granted, because like "Oh, well, it's just a car. I have a steering wheel and pedals." Like, yeah, because that's your interface. And so yeah, as people build out their own ecosystem of understanding, and try to understand more things, it's like "Hey, let's show you how this game is like that thing you're trying to learn, and how you can associate the similarities." How security is like a door lock.

**Autumn Nash:** That's my favorite way to teach, with analogies, and with something physical or real world to somebody... Or even if it's a movie, or just something that people -- to help give them better context into something that's abstract or technical, that they may have never encountered before. Because it makes it accessible.

**Justin Garrison:** My first KubeCon talk I was on stage, and I was literally -- I had balloons, and I was showing people how balloons were like pods. And we built a Kubernetes cluster with some people, some volunteers, and a spreadsheet, and some balloons. And that was my first talk. It was just like "This is how this works. And you can understand it."

**Autumn Nash:** I do really love the way that you find physical ways to explain Kubernetes...

**Justin Garrison:** It's the only way I understand them, so it's the only way I know how to teach it.

**Autumn Nash:** That's how I understand things. A lot of times I'll ask questions, and I'll be like "So it's like this", and people are like "Kinda, yeah." And I'm just like "I have to relate it to something else." I love the one that you did with the water, and you're explaining containers. I thought that was cool.

**Justin Garrison:** Oh, the autoscaling, sure. Yeah.

**Autumn Nash:** I need that physical realm to really understand something and grasp it.

**Justin Garrison:** For the interview this week, for the main show, we actually went through at Scale and we were interviewing people that were in the hallways. So we were finding people that were just around and we'd say "Hey, what do you do?" for the people that approached us. And a couple people said they listen to the show. So thanks, you're gonna hear yourself on this episode. But we really -- we wanted just to get people on the show and ask them five questions to everyone and just see what their responses were. So in case the recording was messed up... Audio is sometimes hard at conferences. We asked them who they are, what technologies they are responsible for, what their favorite open source software was, what their least favorite command is, why they came to Scale, and then what would they like to pass down to future generations; either a tip, or some practice, or whatever. So I thought we had a great mix of, again, broad community, just kind of focus on - some of them run open source software, some of them are just there for the community, some people are there for work... Whatever. It was a great sort of mix of interviews.

**Autumn Nash:** I thought that was really cool. My favorite one was the last question.

**Justin Garrison:** \[unintelligible 00:12:34.03\] We got you a little serious and deep.

**Autumn Nash:** It was so sweet.

**Justin Garrison:** Yeah, especially with kids around. We were doing this interview, and there was literally like Junior High and high school... I mean, there was a high school robotics team.

**Autumn Nash:** Oh my God, the robotics team gave me hope. I was all teary-eyed. I was like, "Oh, they're so cute."

**Justin Garrison:** Yeah. So we will cut to those interviews and see you afterwards.

**Break:** \[00:12:57.27\]

**Justin Garrison:** Hello and welcome to Southern California Linux Expo, also known as Scale. This is the first time Autumn and I have met in-person, and Autumn's first time coming to Scale. What do you think of the conference?

**Autumn Nash:** Best conference ever.

**Justin Garrison:** \[unintelligible 00:15:50.21\] What has been the part that's the best?

**Autumn Nash:** The people. The people are so nice. And all the talks are really good, but they're not just smart people trying to be smart. Like, they're real life applications. And I've never seen so many people so skilled in technology talk about people skills and how to bridge that with technology.

**Justin Garrison:** And talking about people, we actually have interviews to talk to people throughout this episode of Ship It, on what they do, and a few standard questions that we just wanted to get their opinions on. So that's what we did for this week's interview, and hope you like it.

**Autumn Nash:** I've also found several people that hair-match my hair, and we're color-coordinated. It's great.

**Justin Garrison:** Always finding your people.

**Autumn Nash:** This is like conference of my people. Everybody's so cool. Highly recommend Scale. It's awesome.

**Justin Garrison:** I'm trying to even think how to -- it happens every year, it's in Pasadena... What about the weather?

**Autumn Nash:** Someone described it as spring break camp for nerds, and that is the most legit -- like, you can tell when everyone's eyes light up about something cool that they really are passionate about... It's awesome. Everyone's so excited about whatever open source technology they work in, and just seeing everybody so passionate... It's so cool.

**Justin Garrison:** I feel like the spring break is really true with -- today is the last day of Scale, and everyone's like "I don't want to leave."

**Autumn Nash:** I'm super-sad. Usually, conferences are like a lot of peopling. Like, it's fun, but then at the end you're like "Okay, it's been real. I'm going home."

**Justin Garrison:** "I do just want to sit on the couch and watch some TV", yeah.

**Autumn Nash:** Yeah. And I'm legitimately sad. I'm just like "Oh, my people..." I'm just like "How many things can I volunteer for next year?" I need to start writing talks. My kids are at home, planning talks with Raspberry Pi's for next year.

**Justin Garrison:** That's good. Yeah, because there's a kids' track.

**Autumn Nash:** I mean, I said I was gonna bring them, but now I'm like "I don't know..." Like, you'll make me have to go home really...

**Justin Garrison:** There are lots of kids' events, and the game night...

**Autumn Nash:** Can we talk about how cute that is, and how inclusive that is, to have so many kids --

**Justin Garrison:** Did you make it to the game night?

**Autumn Nash:** I didn't make it to the game night. But did you see the girls' robotics teams that were going around? It's just, for one -- usually, it's harder to bring your whole self as a mom in tech... And the fact that there's so many kids and families... I've met entrepreneurs that are doing startups with their babies.

**Justin Garrison:** Yeah. No, I had multiple talks with babies that were starting to cry, and moms and dads \[unintelligible 00:18:16.24\] This is life. This is how this works.

**Autumn Nash:** Yes! That is a breath of fresh air, when you've been told for forever that you can't be a mom and be an engineer, and all kinds of stuff... And then you see these people, and everybody is bringing their families and their whole selves, and they're all different kinds of people, and they're all working together to make awesome open source. That's the essence of open source.

**Justin Garrison:** Yes. And kids like swag, too. \[laughs\]

**Autumn Nash:** My kids want those Fedora stickers that you have. They're like "Bring me the dinosaurs!" And I'm like "You can't have mine. I'll ask Justin if he has more."

**Justin Garrison:** "Get your own. Make your talk. Work on your Raspberry Pi, you'll get your own Fedora stickers."

**Autumn Nash:** They're over there like "Okay, we're gonna build this." And I'm looking at this robotic thing and I was like "Please don't buy anything else on Amazon." They're gonna be ordering stuff \[unintelligible 00:19:03.07\]

**Justin Garrison:** And as someone who - my son gave his first conference talk last year about running a YouTube channel. And it was absolutely fantastic, because --

**Autumn Nash:** I'm a little scared... I'm really excited for our kids to meet each other, but I'm just a tiny bit frightened. They're gonna gang up on us, Justin.

**Justin Garrison:** Yeah, they probably will. And I know his talk was way better than my ever first talk, because he had a room packed full of adults and kids...

**Autumn Nash:** No way.

**Justin Garrison:** They're ready to learn how to create YouTube channels, because they need -- some people need to do it for their jobs...

**Autumn Nash:** Was he nervous?

**Justin Garrison:** Oh, he was, absolutely. But it was so much fun. It was so much fun, because everyone was supportive, and everyone asked questions...

**Autumn Nash:** Did you see all the cute little kids, when they were doing their robotic speeches yesterday? It was so adorable...

**Justin Garrison:** No, I missed that.

**Autumn Nash:** They were so cute. And they're so brave... And there were so many girls. It was so cool. And they were talking about how this thing's outdated, and this thing is new... And I was just like, I was so proud of them.

**Justin Garrison:** So if we haven't hyped up Scale enough already, you should check it out. It's in Pasadena every year. And let's go ahead and cut to some interviews with people from around the conference.

**Autumn Nash:** Best conference ever.

**Break:** \[00:20:05.23\]

**Justin Garrison:** Who are you, and what technology are you responsible for?

**Jeremy Price:** Hi. I'm Jeremy Price. I am responsible for all the technology that underlays the managed hosting version of Snipe IT, which is our free and open source software that you can download and run all you like. But if you want somebody to host it for you, we'll do that, and I make that happen.

**Justin Garrison:** What is your favorite open source software?

**Jeremy Price:** My favorite open source software? That's a good one. Probably ElasticSearch. Oh, no. Wait. MongoDB -- no... TerraFo-- um, no. Ansible maybe...? Chef, definitely -- um, Puppet? How about SaltStack, for now?

**Justin Garrison:** Okay, sounds good. What is your least favorite command?

**Jeremy Price:** Terraform apply.

**Justin Garrison:** Final answer?

**Jeremy Price:** No, sorry. Open tofu -- no open tofu is fine. Tar... Don't we all just have to look up the flags every single time?

**Justin Garrison:** Why did you come to Scale?

**Jeremy Price:** You know, all the snark and joking aside, it's a conference with such a diverse set of talks, of people, of interests, of great attitudes and vibes... It's both a great place to come learn, to share some knowledge, and it's a reunion. There are a lot of great people that come back year after year, and... I get to meet new people, but also just see a bunch of really awesome people who keep coming back, because it's such a great conference.

**Justin Garrison:** And what lesson would you like to pass down to future generations?

**Jeremy Price:** Future generations, remember that it's okay to use boring tech. You don't always have to be on the bleeding edge. You don't always have to chase the shiny.

**Justin Garrison:** As long as it's open source. \[laughs\]

**Jeremy Price:** As long as it's open source. Hey, you know what? Make all the fun you want, Perl still runs an awful lot of the world. PHP still runs an awful lot of the world. And as my boss likes to say, "What do you call somebody who only knows how to code in PHP? Employed."

**Justin Garrison:** Thanks for coming.

**Jeremy Price:** You're welcome.

**Break:** \[00:22:22.04\]

**Justin Garrison:** Who are you and what technology are you responsible for?

**Elizabeth K. Joseph:** My name is Elizabeth K. Joseph, and these days I work on Linux on mainframes.

**Justin Garrison:** That's awesome. And what is your favorite open source software?

**Elizabeth K. Joseph:** Oh, that is a good question. I'm gonna be super-basic... I'm gonna say WordPress.

**Justin Garrison:** WordPress is a good one. That is -- yeah, and it runs a lot of the internet, and it's out there.

**Elizabeth K. Joseph:** Yeah. I mean, I have a blog, and I use it all the time, so it's... You know, it's my daily tools, along with Linux, you know...

**Justin Garrison:** How about your least favorite command?

**Elizabeth K. Joseph:** Sudo. It's so misunderstood. It's so powerful and so amazing, but people don't understand it.

**Justin Garrison:** That's pretty controversial, I think. I like that. Why did you come to Scale?

**Elizabeth K. Joseph:** I love Scale. It was the last conference I came to before the pandemic, and it was on my list of first ones to come back to.

**Justin Garrison:** I think it probably was the last conference before the pandemic. March 2020 was a very interesting Scale. And what would you to pass down to future generations, some of the kids and younger people that are here at the conference, or just generally an open source?

**Elizabeth K. Joseph:** Be curious about everything. That's pretty much how I did everything in my career. I've done all kinds of weird things, including what I'm doing now... And it was all just because I was curious about something and wanted to try a new thing out. And it's served me well. So just be curious and follow a path.

**Justin Garrison:** Awesome. Thanks.

**Elizabeth K. Joseph:** Yeah, thanks.

**Break:** \[00:23:44.22\]

**Autumn Nash:** Who are you and what technology are you responsible for?

**Gareth Greenaway:** So my name is Gareth Greenaway. I'm responsible for, in parts, the Salt Project.

**Autumn Nash:** What's your favorite open source software?

**Gareth Greenaway:** I mean, my obvious choice would be Salt, since I worked on it... But I think probably -- yeah, I'm gonna say Linux, because it opened up a lot of doors for me, allowed me to do things that I otherwise wouldn't have been able to do... I mean, that answer could apply to so many different pieces of software, but I'll keep it simple and I'll say Linux.

**Autumn Nash:** Linux is awesome. Why did you come to Scale?

**Gareth Greenaway:** So I was actually one of the original co-founders of Scale. So honestly, it seems like I never left. I'm always here, yeah. I feel like I can't miss a year, or people would start to question if reality is imploding on itself.

**Autumn Nash:** So it's not even FOMO. Everybody else would be like "Where is he?" And you're kind of tall, so I feel like people would miss you.

**Gareth Greenaway:** I stand out in the crowd, yeah. If I'm not here, I would be missed, for sure.

**Autumn Nash:** What's your least favorite command?

**Gareth Greenaway:** My least favorite command is not actually command. It's a horrible program that someone wrote called sl, which \[unintelligible 00:24:51.19\] No, it's not. It's horrible. Vengeful, angry...

**Autumn Nash:** Wow... Horrible and vengeful? I'm so excited...

**Gareth Greenaway:** Sysadmins, install it on systems to annoy people. If you've never seen this, it is a typo command. So one of the most mistyped commands on a Unix or Linux system is ls. And what the sl command does is it makes you wait while the animated train goes across the screen, mocking you for mistyping ls.

**Autumn Nash:** I do that all the time, and I'm so excited about this.

**Gareth Greenaway:** Yeah, it's horrible. It is horrible.

**Autumn Nash:** Okay. What lessons would you pass down to future generations?

**Gareth Greenaway:** I would say don't be afraid of breaking things. One of the things that I've noticed a lot of people are afraid of doing is breaking things. Just get in there, and... I mean, obviously back things up, so you don't royally get in a bad place... But don't be afraid of breaking things. Just try things out. See how they work.

**Autumn Nash:** That's good advice.

**Break:** \[00:25:50.05\]

**Justin Garrison:** Alright, so who are you, and what technology are you responsible for?

**Noel Miller:** Hi. So I'm Noel Miller. I am a project manager over at the Universal Blue Project. We do custom-based images on Fedora Atomic. It's a really exciting project, and I am very excited to be here.

**Justin Garrison:** And what is your favorite open source software?

**Noel Miller:** Well, I'm a little biased, but I really do like the Universal Blue Project. We do a lot of really great things. I run it day to day, so I use one of our projects called \[unintelligible 00:26:19.14\] which is a gaming distro... Well, not a distro, technically, because we're built on Fedora... But yeah, so that's one of my favorite ones.

**Justin Garrison:** And what is your least favorite command?

**Noel Miller:** Man... So far I haven't been loving using sed. One of the best usages of AI, if you ever use it, is to use it to write your sed commands, because you just ask it and it does it, so...

**Justin Garrison:** That is actually fascinating. I like that. I use it for SQL queries. Why did you come to Scale?

**Noel Miller:** I wanted to meet up with the community. All of our contributors to the U Blue Project are kind of spread apart, so we wanted to have an opportunity to have a few of us meet up and have some conversations... So it's been really great to be here, and it's my first time, so...

**Justin Garrison:** And What lesson would you like to pass down to future generations?

**Noel Miller:** Just be good to one another. Keep it as simple as that. So... Yeah.

**Justin Garrison:** Awesome. Thanks for coming.

**Noel Miller:** Yeah, thanks.

**Break**: \[00:27:18.21\]

**Justin Garrison:** Alright, so who are you, and what technology are you responsible for?

**Rit Li:** My name is Rit Li. What technology am I responsible --

**Justin Garrison:** Technology, software, infrastructure, anything that may be work-related, home-related, open source-related... Anything that you might be responsible for, that deals with technology.

**Rit Li:** Okay, I've been doing consulting work for over 10-15 years now... But mostly for other people, for start-ups and whatnot.

**Justin Garrison:** Oh, cool. So you help them get started with things, and then they run it, and they're responsible.

**Rit Li:** Right.

**Justin Garrison:** That's a good place to be, if you're writing and managing software, is not being responsible for it... It's a good move.

**Rit Li:** Yes. But on top of that though, recently my son - he's four and he out of the blue just said "Daddy cooks", and "Daddy's sitting at his desk." That got me thinking "What is it I do?" So yeah, that led to me doing some soul-searching, and at this moment I am working on my own project, and it's something that I'm planning to be working on for the next 10-20 years. Something that I can show my son "Hey, this is what I do." I'm not just cooking and sitting at my desk.

**Justin Garrison:** Yeah, that's awesome. What is your favorite open source software?

**Rit Li:** I would have to say SQLite and Lua.

**Justin Garrison:** That's a good combination right there. What is your least favorite command?

**Rit Li:** I don't know.

**Justin Garrison:** Probably also maybe SQLite and Lua? Sometimes we love and hate the same things?

**Rit Li:** I can't think of any right now.

**Justin Garrison:** That's alright. Why did you come to Scale?

**Rit Li:** It's almost like a tradition now. I live in SoCal, so it's the biggest Linux open source conference, so I have to be here...

**Justin Garrison:** Also a valid answer for "It's here, and we should come." What would you like to pass down to your future generation, like your son, or some of the younger people here at Scale?

**Rit Li:** I would say be less absolute about certain things. For my younger self, I was a bit too black and white, too absolute. Now as I have two kids, I would say be more flexible, open-minded, and... It's not always black and white.

**Justin Garrison:** Awesome. Thank you so much for interviewing.

**Break**: \[00:29:34.13\]

**Autumn Nash:** Who are you, and what technology are you responsible for?

**Paul Yu:** My name is Paul Yu. I am a cloud-native developer advocate at Microsoft, and I am responsible -- I don't want to say I'm responsible, but I do a lot of work in the Kubernetes space.

**Autumn Nash:** Me and Paul are besties now. What's your favorite open source software?

**Paul Yu:** That's rough. There's a lot of good open source softwares. I would have to say \[unintelligible 00:30:02.18\] only because of the people that actually run the project... Because open source is more about technology, it's all about the people. So...

**Autumn Nash:** It is though. People here are awesome. What's your least favorite command?

**Paul Yu:** My least favorite command is probably sed... \[laughter\] Man, I always get messed up with the regex, and all that stuff...

**Autumn Nash:** Can we just talk about the shade that question brings...? Everyone's like -- you can tell people start having bad flashbacks, and they're like "This one time..."

**Paul Yu:** Yeah. Regex.

**Autumn Nash:** When people are good at regex, I'm like "You're an alien." What lesson would you like to pass down to future generations?

**Paul Yu:** Geez... There was a lot of kids walking around at Scale yesterday, which is super-awesome, and I kept telling them, it's more than just the tech skills that you need; you also have to have the soft skills, the people skills. And I encourage everybody, go work a food job, go be a waiter, go be a hostess as your first job, just so you can know how to interact with people.

**Autumn Nash:** Oh my God, I think that would change tech for the better, y'all. Being a woman in tech, please do that. Yes. It was so nice interviewing. Thanks, Paul.

**Paul Yu:** Thank you.

**Justin Garrison:** So thank you everyone who interviewed with us at Scale. Thank you everyone who came up to us and said hi, and attended the talks. It was great to meet you all. And anyone that's listening to this and wants to get involved with Scale for next year - again, this is a community-run event. It is a lot of fun, but there is also work to do. There are things that you need to kind of put out there to make a conference happen for this many people. So if you want to get involved, check out Southern California Linux Expo, and we will see you all or talk to you all next week.

**Autumn Nash:** Best conference ever.
