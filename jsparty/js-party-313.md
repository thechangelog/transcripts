**Jerod Santo:** Hello, friends. We are here for another excellent JS Party podcast. We are glad to have you with us, and I'm glad to have with me my friend, Amal. What's up, Amal?

**Amal Hussein:** Hey, hey, Jerod. How are you doing?

**Jerod Santo:** Doing great. It's Fri-yay. That's what the kids say. It's Fri-yay.

**Christopher Hiller:** No, they don't.

**Amal Hussein:** I was gonna make a joke, and then I was like "Have some mercy... It's Friday." Right?

**Jerod Santo:** Yeah. You thought better of it. There you go. That's what the kids call it.

**Christopher Hiller:** No, they don't.

**Jerod Santo:** Also, Chris Hiller's here. The kids call him b0neskull. What's up, Chris?

**Christopher Hiller:** Hi. I'm here on the podcast.

**Jerod Santo:** We're happy to have you here as well.

**Christopher Hiller:** Thanks!

**Jerod Santo:** You're welcome. We have a brand new voice here with us today... It's our new panelist, a one-time guest, and now a recurring panelist, our friend, Jessica Sachs. Jess, welcome to the show.

**Jessica Sachs:** Hi. It's really exciting to be here. I'm nervous.

**Jerod Santo:** Exciting to have you. I think we met probably two years ago or so. I'm not sure when you came on the pod. It was me and Kball, we talked FakerJS, we talked...

**Jessica Sachs:** 2022, yeah.

**Jerod Santo:** Yeah, we talked open source...

**Jessica Sachs:** Yeah. That was a while ago. 2023 felt like it felt like it didn't happen for me...

**Jerod Santo:** Yeah. Time is a vortex, and things... But we're glad to have you here now with us. And then we connected again at THAT Conference, we got to hang out and chat, and so that was cool... And now you're here. So we'd like to get to know you, let our audience get to know you a little bit... We're gonna get into the news today, we're going to discuss some goings on... It will be a segment show, but we thought we'd start off with getting to know Jess by playing a little game of 20 questions. However, I only wrote 15, so we're going to call this 15 questions... And we're going to pass them around, so it's not just me talking to Jess. I have 15 questions written here, I'm going to hand them to Amal and to Chris, and we'll just throw them at you, round robin style, and see what's going on. Now, Amal and Chris, you have to promise to read these verbatim, as you receive them. No edits. Okay?

**Amal Hussein:** No pressure...

**Jerod Santo:** I'll ask the first question, and then I will DM the other ones in the background as Jess responds. Alright, number one - tell us about a time when you shipped a bug to production.

**Jessica Sachs:** Okay, probably -- it was a boring one. There was one time where I broke Expedia... And I didn't work at Expedia. \[laughter\]

**Jerod Santo:** \[00:06:15.03\] Okay... So that's a twist.

**Jessica Sachs:** Yeah. So I noticed it because we -- I did build Canary deploys. I was working in an ad tech company, and we were a third-party script, and they put us in top, window.top. And so we had access to the entirety of Expedia, and all user data on the search page. And so when you would type in like San Francisco to JFK, our ads would run. And so my code ran on millions and millions of page loads. And that gave us a lot of volume, and on IE whatever, I broke Expedia by like messing up some CSS. And I think also the Back button. I think they had just switched routers in the Back button. We messed it up. So that was bad... We reverted within five minutes.

**Jerod Santo:** Well, not bad...

**Jessica Sachs:** So...

**Jerod Santo:** I think breaking the Back button is kind of a time-honored tradition amongst web devs, right? We've all done it.

**Jessica Sachs:** Someone else's. Someone else's Back button though.

**Jerod Santo:** \[laughs\] True. That does up the ante a little bit, doesn't it?

**Amal Hussein:** I mean, I say shame on them for giving you so much privilege, you know...

**Jessica Sachs:** Millions of dollars. The tech team did not like us. It was constant questions about like every kilobyte of gzipped file we would send. There was this one guy, Chad or something...

**Amal Hussein:** It's always a Chad.

**Jessica Sachs:** I don't think it's his real name... But he built a monitoring script on our JavaScript bundle sizes 2014-2015, and if it went up, we heard about it.

**Amal Hussein:** I'd say I'd say good hygiene there, Expedia. So you get points for being conscientious about your third party scripts, but you definitely get way more points deducted for giving them way too much privilege...

**Jessica Sachs:** Money will make people do crazy things...

**Amal Hussein:** Yeah, that's true.

**Jerod Santo:** Alright, Amal, your turn. Got a question for Jess?

**Amal Hussein:** Yeah. So what a web development myth you'd like to debunk once and for all?

**Jessica Sachs:** iFrames make your page really slow... They don't necessarily make your page really slow. It's what you put in the iFrames.

**Amal Hussein:** That's true.

**Jerod Santo:** It's what you put in the iFrames that makes your page really slow. \[laughs\] That's an interesting distinction. I like that.

**Amal Hussein:** A universal one almost, right? It's a universal one.

**Jerod Santo:** Yeah.

**Jessica Sachs:** It just happens that the stuff you put in your iFrames is a lot.

**Jerod Santo:** Alright, Chris, here comes your question. There you go.

**Christopher Hiller:** Tell Nick Nisi why TypeScript sucks.

**Jessica Sachs:** TypeScript sucks for app developers because you have to work around the type system... And it's really great for library authors.

**Jerod Santo:** Spitting truth. Did you hear that, Nick? Alright, next question, number four. You have to pick a frontend framework. You cannot pick Vue.

**Jessica Sachs:** Solid.

**Jerod Santo:** Oh, you didn't even let me finish. That was fast. Okay, why?

**Jessica Sachs:** Because it's a reactivity-first framework. That's it. Period. Finished.

**Jerod Santo:** Okay.

**Jessica Sachs:** And I don't care. And I'm not married to meta frameworks. If I had to pick a meta framework, I don't know what I'd do... That wasn't Nuxt. Because Nuxt is de facto the best right now.

**Amal Hussein:** I want to double-click into that. Why is Nuxt de facto the best meta framework?

**Jessica Sachs:** Bro, if I showed you the DX right now, you would be floored. I just showed my manager for like 45 minutes all of the dev tools. You can see API routes... They built frickin' Postman into the dev tools. It has end-to-end type safety, all of the SSR edge stuff on Vercel... Same stuff. It's insane.

**Jerod Santo:** Is that like on the nightly builds, or is that like shipped, like production?

**Jessica Sachs:** No, prod. Npm nstall. Pnpm install, or bun install.

**Jerod Santo:** Okay. Alright, Amal, your turn.

**Amal Hussein:** Really, Jerod?

**Jerod Santo:** \[00:10:13.00\] Just read the question.

**Amal Hussein:** Who is your favorite JS Party panelist, and why is it Jerod? \[laughter\]

**Jerod Santo:** That's a good one.

**Jessica Sachs:** Because of how red his face gets...

**Jerod Santo:** When I'm happy?

**Jessica Sachs:** Yeah.

**Jerod Santo:** Good answer.

**Jessica Sachs:** We share that. I get progressively redder. Do you have sunburn right now?

**Jerod Santo:** Me?

**Jessica Sachs:** Yeah, yeah.

**Jerod Santo:** No, I'm just naturally flush. It's my youthful exuberance.

**Jessica Sachs:** Yeah, later on in the episode you'll start to see my collarbone. I'll start to get like red here, and here...

**Jerod Santo:** That's a sign of good health, I think. Alright, Chris, your question.

**Christopher Hiller:** You've been debugging for hours, and you cannot figure out the problem. What's your next move?

**Jessica Sachs:** Phone a friend. That's not even hours. I just ask.

**Jerod Santo:** Who do you ask?

**Jessica Sachs:** Whoever's problem it is...

**Jerod Santo:** What if it's your problem?

**Jessica Sachs:** Um, ask a friend... Like someone else on my team... Yeah, if it's my problem by myself, I'll just go to the docs eventually... But generally, I'm going to ask a person, because I'm doing something really stupid or easy incorrectly. Yeah.

**Jerod Santo:** Good answer. How long would you wait? You wouldn't wait an hour, obviously...

**Jessica Sachs:** It depends. 30 minutes, maybe...

**Jerod Santo:** You just have lots of friends.

**Jessica Sachs:** 30 to 45 minutes.

**Jerod Santo:** \[laughs\]

**Jessica Sachs:** The good thing about the Vue community is that they're very global. And then I also have friends in the West Coast... So open source has given me a lot of time zones to make friends.

**Amal Hussein:** Yeah, that's nice. I also just want to say... I mean, I think this is like an age-old thing, but women are much better at asking for help than men. \[laughs\] Period.

**Jerod Santo:** How rude... How true, but how rude... \[laughs\]

**Amal Hussein:** Guys will just sit and wallow in your indirection for hours, you know? ...whether it's getting lost, or whatever it is.

**Jerod Santo:** Right.

**Amal Hussein:** This applies so many things.

**Jessica Sachs:** The reason I do it is because I actually learn when I talk to somebody. I can't learn unless it's conversational, usually. Chat GPT has been really helpful in this, because I just tell it to be really profane, and like short and concise, and then it treats me like -- I don't know, like Ken Wheeler might treat me. Just like straight up bro talk. And I'm like "Yeah..." I'm always like "Why do I even care?" And it'll do like "Here's why..."

**Jerod Santo:** So it may replace by emulation a few of your friends over time.

**Jessica Sachs:** I think that's true.

**Jerod Santo:** All of the things you like, with none of the problems. That's the problem with people, is we have baggage that we bring to relationships, but...

**Jessica Sachs:** Yeah, I have to care.

**Jerod Santo:** But the GPT's, they're just there for you. Yeah, exactly.

**Jessica Sachs:** I'll have to care about ChatGPT.

**Jerod Santo:** They'll give, give, give, and they'll never take. Alright, question number seven. Is it my turn? I think it is. If you weren't working in tech, what would you be doing?

**Jessica Sachs:** I wanted to be an anesthesiologist when I grew up... Specifically an anesthesiologist.

**Jerod Santo:** Okay...

**Jessica Sachs:** It was a weird thing for an eight-year-old to say, but yeah...

**Amal Hussein:** I don't think I even knew what anesthesia was when I was eight, so... It's impressive.

**Jerod Santo:** Yeah, how did you know?

**Jessica Sachs:** I don't think I did either. It was just the number one paying job in the little software program that they had us play with...

**Jerod Santo:** Yeah, I definitely remember doing that when we were in school... They had all these different career paths, and you'd just basically sort it by most money, and you're like "I guess I'll just do that one."

**Jessica Sachs:** My mom was really upset when I told her I was going into software. She was like "That doesn't make money."

**Jerod Santo:** Wow. She's no-profit, is she?

**Jessica Sachs:** No, she understands now. She's like "Oh. It made money."

**Jerod Santo:** Alright, Amal, your turn.

**Amal Hussein:** Alright, where is your favorite place to code that's not your room or office?

**Jessica Sachs:** I code from the couch, or... Yeah, I code from the couch, or... Is there anywhere else? Yeah, room -- WeWork. I would consider WeWork not my office, because I don't go there at office hours. Like, I go there at like 12am, after I go to a bar.

**Amal Hussein:** \[00:14:08.22\] Yeah, 12am, WeWork... It's so funny, I think I used to do something very similar, in the sense that some of the best views in the city were at some of the co-working spaces that I had access to like a very, very long time ago... And yeah, we'd just like get food, we'd get takeout and like eat, and like watch TV in like a conference room, or whatever... It's like a city apartment that's not a city apartment, you know... So yeah, I feel you on that. Respect. It's also good utilization of the space, you know...?

**Jessica Sachs:** They're not using it. I mean... I read a really decent article actually about that. At some point we could talk about it.

**Amal Hussein:** They should just convert WeWorks into senior centers in the evening, or what do you mean?

**Jessica Sachs:** Because the MeetUp acquisition didn't work?

**Amal Hussein:** Exactly. \[laughs\] Communal housing. I mean, really, honestly, multipurpose spaces - that's a whole episode of Changelog & Friends.

**Jerod Santo:** That's a whole episode of a whole different podcast. Yeah.

**Amal Hussein:** Yeah. What are we going to do with all those malls? That's what I want to know. All those like shopping malls.

**Jerod Santo:** I think the answer to that is just rollerblading. I feel like we could just all go rollerblading.

**Amal Hussein:** I thought housing, you know... But whenever.

**Jerod Santo:** I guess... Okay... Alright, Chris. You're up.

**Christopher Hiller:** What is the coolest place you've ever visited?

**Jessica Sachs:** I would say, Park City, Utah. Park City, Utah was really cool.

**Jerod Santo:** I've been to Park City. Yeah.

**Jessica Sachs:** Hm?

**Jerod Santo:** I've been there. It's beautiful.

**Jessica Sachs:** Yeah, it's gorgeous.

**Jerod Santo:** What were you there for, and what did you do?

**Jessica Sachs:** I was there at a conference that was unrelated to frontend whatsoever. I was at my friend's conference, and I just got to hang out and see the city... It was like a work-only thing, so it wasn't even that I could like watch them talk... And so I took a bike out by myself and just went around Park City in 2017. It was summer too, which makes it weird, because it's a ski town, so it was dead empty.

**Jerod Santo:** Right. I was there also in summer. I went mountain biking... And they convert the ski lifts into mountain bike lifts in the summer. And it was just a blast. I saw a moose from like 15 feet away, but I was in a ski lift, and so I wasn't even afraid... It was beautiful.

**Amal Hussein:** Oh, wow.

**Jerod Santo:** Yeah, it just walked underneath us, and I was like "That's a moose."

**Amal Hussein:** What an amazing way to see a moose.

**Jerod Santo:** Yeah, it was the best, because you're not afraid, but you're super-close. Yeah.

**Amal Hussein:** Yeah. Of getting like run over, or whatever, you know...

**Jerod Santo:** That's the day I learned that a moose is way bigger than you think a moose is.

**Amal Hussein:** Yeah, they say that if you're like in a sedan, you're seeing a moose when it looks like there's trees on the road... I was like "What?!"

**Jerod Santo:** Yeah, I mean, they are absolutely massive beasts. They are so big.

**Christopher Hiller:** You know what else is really big, that I didn't know?

**Jerod Santo:** What's that?

**Christopher Hiller:** Camels. Huge. They are so tall. They're way bigger than horses.

**Jerod Santo:** Wow.

**Christopher Hiller:** I didn't know that until I saw a camel.

**Jerod Santo:** I'm not sure if I've seen a camel in real life before.

**Jessica Sachs:** I've seen a camel next to a person... And also really liked the word dromedary, which is like the formal word for camel, and camel-type animals...

**Jerod Santo:** It is a cool word.

**Amal Hussein:** Yeah. My parents are from -- well, I mean, they left when they were teenagers, but they're from the country that like I think is the number one exporter of camel meat and camel milk, and camel everything... Yeah, so... I wish I could say I've never --

**Jerod Santo:** They kill the dromedaries?

**Amal Hussein:** \[laughs\]

**Jessica Sachs:** They kill the dromedaries, oh my God...

**Jerod Santo:** So you've seen part of a camel, right?

**Amal Hussein:** Yeah, I've definitely seen a camel.

**Jerod Santo:** One more thing that's big before \[unintelligible 00:17:36.04\] listing things that are big... \[laughter\]

**Jessica Sachs:** Let's keep going.

**Jerod Santo:** Wolves. Wolves are not just like a dog, but a little bit bigger... Wolves are like twice the size of a dog. I would not want to see a wolf up close.

**Amal Hussein:** Game of Thrones I think helped me understand how big wolves can get.

**Jerod Santo:** The size of wolves...

**Amal Hussein:** Dire wolf...

**Jessica Sachs:** And turkeys. Huge turkeys.

**Jerod Santo:** Turkeys are big.

**Jessica Sachs:** When I was in Cambridge, I got a lot of experience with turkeys...

**Jerod Santo:** \[00:18:05.29\] Alright, would you rather fight one wolf or 50 turkeys? I'm sorry, that's not a question. I just added that one.

**Jessica Sachs:** 50 turkeys.

**Jerod Santo:** And the answer is 50 turkeys, of course...

**Jessica Sachs:** Well, maybe one wolf...

**Jerod Santo:** Alright, let's go to Amal. I think you have a question ready. Did you write this one?

**Amal Hussein:** Oh yeah, I wrote it with my bare hands... How many programming languages do you know? HTML and CSS don't count. What the hell...?

**Jerod Santo:** Amal...!

**Amal Hussein:** Oh, wow, Jerod...

**Jerod Santo:** Amal... Come on.

**Jessica Sachs:** That's fine.

**Jerod Santo:** Stop gatekeeping.

**Amal Hussein:** Gosh... Wow...

**Jessica Sachs:** I answered this yesterday for friends...

**Jerod Santo:** Okay...

**Jessica Sachs:** So what do you count? Do you count like languages what you would, without needing to read any documentation, do like a network request in? What do you count?

**Jerod Santo:** Similar to languages, you know?

**Jessica Sachs:** Or have I ever programmed in professionally. That's different.

**Jerod Santo:** I don't think it has to be like professionally.

**Jessica Sachs:** Oh.

**Jerod Santo:** You know, if I went to Mexico, I know enough Spanish to find my way to the supermarket, and acquire an orange. You know?

**Jessica Sachs:** Okay. That's big.

**Amal Hussein:** I thought you were gonna say like be overcharged for goods, and services, you know...

**Jerod Santo:** Right. \[laughter\]

**Jessica Sachs:** To be overcharged for goods and services; to pay more than the local taxing rate?

**Amal Hussein:** Yes!

**Jerod Santo:** When they're whispering about me in --

**Amal Hussein:** Yes. People will be like "Tourist!" You know? Got it.

**Jerod Santo:** Yeah. Like, I can ask you -- I can know where the bathroom is, I can get to the library... But I don't know Spanish. So that doesn't help... Does that help at all?

**Jessica Sachs:** Yeah, "Donde esta el biblioteca..." Yeah. It's probably "la biblioteca"...

**Jerod Santo:** La biblioteca, because it's feminine. Why are books feminine? I don't know... Because women read better as well?

Hm?

**Jessica Sachs:** Yeah... Languages, in order - it would be Objective C was my first language, and then I went Ruby, Python, and then we went from Python to Java, JavaScript... I count TypeScript as separate, but -- oh, no, that was much later. Kotlin, and... Let's see. Then TypeScript. HTML, CSS... I don't know. So I think we're at seven.

**Jerod Santo:** Oh, Amal doesn't count those.

**Jessica Sachs:** It's fine. So seven not counting HTML and CSS. No, also Lisp, Bash... Nine?

**Jerod Santo:** It's pretty good.

**Amal Hussein:** That's a pretty solid list. I'm amazed you stuck with it after Objective C, because that's probably the most painful programming language I've ever even attempted to read, or learn, or use...

**Jerod Santo:** I learned Objective C. I kind of liked it over time.

**Amal Hussein:** Really? Oh, my God...

**Jessica Sachs:** I like it a lot. Wait, did I mention Swift?

**Jerod Santo:** No.

**Jessica Sachs:** Ten. And I was starting on Rust... Somebody mentioned in the chat... I was starting on Rust about two weeks ago, for the first time. But I didn't get far into it. The reason that I know so many languages is because I resented being called a frontend engineer for a very long time... And I refused to put on my resume JavaScript at the top. So I just listed -- I got proficient and listed all of the languages... Not all of them, because that's weird, but I listed the languages that I was most proficient in, with Python being the number one. So Python was the first language I got good in. Like, good-good.

**Amal Hussein:** The zen of Python is real.

**Jerod Santo:** Cool. That's a lot of \[unintelligible 00:21:26.10\]

**Amal Hussein:** It's definitely my favorite programming language after JavaScript.

**Jerod Santo:** I wrote some Python a couple weeks ago, and I thoroughly enjoyed myself. I had written it probably like 10 years prior, for about six months full-time, and really got to know it... And then I hadn't used it for a very long time. And I was writing some just because it had to do some AI thing, and I got pulled in... And I was like "You know what? I like this language."

**Jessica Sachs:** List comprehensions. List comprehensions are still my favorite programming language feature of all time.

**Jerod Santo:** That's a good one. Explain that feature to the plebs out there.

**Jessica Sachs:** \[00:22:03.17\] Oh, my gosh... List comprehensions allow you to -- how would you say...? Allow you to do a map in a single line... Is that about right?

**Amal Hussein:** Yeah. Pretty much, yeah. It's an elegant iteration over like iterable objects, you know?

**Jerod Santo:** Right.

**Jessica Sachs:** Yeah. And get the result out of it.

**Amal Hussein:** Exactly.

**Jessica Sachs:** Yeah. So it's like if map was built into the language in syntax and stuff as a function. That's how I would explain it. I haven't written Python in seven years, eight years... But it was the first. It was good.

**Jerod Santo:** Let's move on. Number 11. This is more of a request than a question. Please read us your favorite line of code. You have it on your wall over there, don't you? Do you frame your code? Chris has given us the side eye over there...

**Christopher Hiller:** I don't have a favorite line of code. Am I supposed to have that? Do you have that?

**Jerod Santo:** DO you have a favorite movie? Do you have a favorite song? Do you have a favorite line of code?

**Christopher Hiller:** No...? No...?

**Jerod Santo:** Okay. Alright. Well, good thing those are Jessica's questions and not yours. \[laughs\]

**Jessica Sachs:** Um... Console.table?

**Jerod Santo:** You forgot the parentheses...

**Jessica Sachs:** I mean, it's assumed that there are parentheses...

**Jerod Santo:** I thought you were gonna read it for us.

**Jessica Sachs:** Oh, okay, so do you want me to -- okay, so what I wrote two days ago... Yeah, two days ago. It was type UT-- so this is a library did not export a public type, and from their API response; not going to name names, but it was upload thing. Sorry, Theo. He knows I wrote this. And they promptly fixed this within a day. They texted me back about it two hours in, but I had written the code already. So \[unintelligible 00:23:43.25\] This is because they didn't return the type from the API request. \[unintelligible 00:24:03.05\] Does that help?

**Jerod Santo:** Excellent job.

**Jessica Sachs:** Alright. Did you like console.table better?

**Jerod Santo:** I love console.table. But I also appreciate the literality of your response... b0neskull, you were going to read something as well, weren't you? What's your question?

**Christopher Hiller:** What's your current banking password?

**Jessica Sachs:** Hunter2.

**Jerod Santo:** Oh, wow. That's a really low-quality password...

**Jessica Sachs:** It's for all people who grew up playing Runescape... Yeah. It's a meme.

**Jerod Santo:** It's a meme... \[laughs\]

**Jessica Sachs:** It's actually in docs now. It's in documentation now. They put it in the Pickle docs.

**Jerod Santo:** Really?

**Jessica Sachs:** Yeah, they did. And I was so proud. I was like "I'm represented. My age group has started to ship, and be in charge of stuff."

**Jerod Santo:** "My age group has started to ship stuff." \[laughs\]

**Jessica Sachs:** Yeah.

**Jerod Santo:** Yeah, now your age group's gonna sign into your bank account and drain it.

**Jessica Sachs:** Yeah.

**Jerod Santo:** \[laughs\] Okay. We're getting to the end here... I want Amal to read this one. Hold on, Amal, while I get this one to you...

**Amal Hussein:** Oh, my God... Why do you keep giving me like the -- these are not good.

**Jerod Santo:** This is a good one.

**Amal Hussein:** By whose standards?

**Jerod Santo:** These are great.

**Amal Hussein:** Oh, my gosh... Okay.

**Jerod Santo:** Just read that out loud, please.

**Amal Hussein:** Okay, fine, Jerod... Thrown any objects into the air and caught them in a continuous cyclical pattern, ensuring that at least one object is airborne at all times lately.

**Jessica Sachs:** Juggling.

**Amal Hussein:** Okay. Juggling.

**Jessica Sachs:** Sorry.

**Amal Hussein:** That's okay. No, I'm just like trying to read this oddly-constructed...

**Jerod Santo:** Amal, what are you talking about over there?

**Amal Hussein:** Yeah, so essentially, have you been juggling lately?

**Jessica Sachs:** Yes, I've been juggling lately.

**Amal Hussein:** Tell us about this. Are you like a circus nerd, too? Because there's definitely a fun intersection of tech nerds that are also circus nerds... And I find them to be utterly like the most delightful people.

**Jessica Sachs:** \[00:26:05.26\] Yeah, the Venn diagram's good. Yeah, circusy stuff - I did contortion. So I did rhythmic gymnastics growing up, which is really good if you're hypermobile... So I can still do over splits, even though I don't train them anymore. So my legs go like over 180 degrees. They just do. And then my back's still -- you know, feet touch head. But then I had a back injury, totally unrelated to contortion, and I couldn't do the exciting dynamic circus arts anymore. I couldn't do trapeze. I have a trapeze... And I couldn't do lira. So I was like "What can I do that's weird and circusy?" And I was like "I can stand straight and throw balls, and make small movements with my core." So that's why juggling.

**Christopher Hiller:** What's lira?

**Jessica Sachs:** Lira is the metal hoop thingy.

**Christopher Hiller:** Ah...

**Amal Hussein:** Yeah, I hear people that are really flexible can like over-injure themselves sometimes, because they're like "Oh, I can do this", and then their tendons are like "Oh, no. Maybe you shouldn't do this too much or too long."

**Jessica Sachs:** It was a kettlebell lift. It was a kettlebell lift in front of a personal trainer... Yeah, it was like super-tragic. I was 24. It was December 2019.

**Amal Hussein:** Well, I'm sorry to hear that. But I'm glad you've discovered juggling. That sounds really fun. And there's just so much math involved in juggling, for me... That's just the part that I find fun. Like, the math and physics of it all.

**Jessica Sachs:** Yeah. I want to build a syntax parser for -- there's a language called SiteScript. Am I getting that right?

**Amal Hussein:** SiteScript?

**Jessica Sachs:** SiteSwap?

**Amal Hussein:** I don't know.

**Jessica Sachs:** Yeah. I always mess up the word for it. There's a language that lets you describe how many balls are in the air at a given moment, and at what times and what hands they're going to. So you can throw the same ball to the same hand, or you could throw one ball to the other hand. Or you could throw a ball high, and there's actually a mathematical language, with parentheses and brackets and stuff, and repeats, that allows you to describe the math of juggling, and throwing things, and catching them in different times. And I want to write a little syntax parser for that.

**Amal Hussein:** Yeah, that'd be cool. That's like the nerdiest thing I've learned all year, so thank you for enlightening me.

**Jerod Santo:** I just figured you just throw stuff up and catch it, you know? I didn't really think there'd be much more to it than that... Although it does get increasingly -- I can juggle three just fine, generally; same-sized balls, tennis balls. But yeah, I've never really gone beyond that. I've tried four. It gets way more hard with four.

**Jessica Sachs:** Yeah, I've never done --

**Jerod Santo:** But no one ever taught me how, so I just was guessing, you know?

**Jessica Sachs:** Yeah. Yeah. I learned from the MIT juggling club.

**Jerod Santo:** Yeah, that probably would help. I saw -- was it online? I think you had a picture, you're doing bowling pins as well.

**Jessica Sachs:** That's the first thing that they hate, the jugglers. They're like "They're not pins. They're clubs."

**Jerod Santo:** Oh, gosh...

**Jessica Sachs:** Yeah, that's the first thing that you'll get corrected on if you ever go to a juggling meetup.

**Jerod Santo:** I'm not too worried about it... \[laughter\] I probably won't go to a juggling meetup, especially now that I know they're gonna ridicule me.

**Jessica Sachs:** They're the best. You find your people there. If you're looking for nerds, nerds of all ages - juggling club. Any city.

**Jerod Santo:** So they're not called bowling pins? Because I've bowled a lot in my life, and I feel like they're always referred to as pins.

**Jessica Sachs:** Yeah. In juggling they're referred to as clubs.

**Jerod Santo:** Oh, just because you're juggling them. Okay.

**Amal Hussein:** Yeah, I lived in the community that I think Jess also lived in for a while, in the Cambridge area, Camberville area...

**Jessica Sachs:** \[unintelligible 00:29:46.16\] Cambridge...

**Amal Hussein:** Yeah, I think my husband and I when we were first -- we never really dated, we were just in a relationship... But that's where we had all of our -- our first everythings were in that area. But yeah, there's just so many circus nerds that are like concentrated there. Have you noticed that?

**Jessica Sachs:** \[00:30:08.00\] Yeah. They have a circus school...

**Jerod Santo:** Oh, there's a school there.

**Jessica Sachs:** Yeah. They have a certain circus school in the middle of Cambridge and Somerville called Esh Circus Arts. And it's huge. It's right next to a rock climbing gym, and a makerspace... It's nerd heaven.

**Amal Hussein:** Yeah. Artisan Asylum, and... Yeah. There's just a lot. It's a nexus for nerds, Cambridge... And - yeah, I mean, also like the Red Line, which is like the train that serves that community, the subway... It's the train that's ridden by the most Nobel laureates in the world; the most intelligent people, by far, in terms of degrees, but also just like international awards, like the Nobel laureate prize.

**Jessica Sachs:** You would think that it ran on time...

**Amal Hussein:** Yeah, you would think. No, no. Nope. Everyone gets to have a crappy commute into wherever they're going, because we're still in America, so... But anyways, different show. Different podcast.

**Jerod Santo:** Different show altogether. Alright, here's our 15th and final question of this game of 20 questions. Finish this sentence, "JS Party would be even more amazing if..."

**Jessica Sachs:** I don't know... If that was a question. That wasn't a question.

**Jerod Santo:** If...? There, now it's a question. \[laughs\] Okay, let me reword that into the form of a question, Alex Trebek. How would JS Party be even more amazing? Question mark.

**Jessica Sachs:** What is more games? For $3,000.

**Jerod Santo:** Correct. Excellent answer. Excellent job. You are officially part of the gang now. We've added a juggler to our list of...

**Jessica Sachs:** Nerds.

**Break**: \[00:32:01.29\]

**Jerod Santo:** Alright, nerds, let's turn now to the news, because Amal is - I was gonna say hot and bothered, but that implies something else. You're just bothered by this. This is big... This is Apple versus the world here. The OWA, a group of people that you've been working hard, Amal, to get a show together with, the Open Web Advocates, I believe, or Advocacy, has been fighting hard to have the web be more and more open. These are often legal battles, or lobbying, or those kinds of things, political arenas in order to have that... And they've had some wins of late, or maybe what they thought was a win, and now Apple maliciously complying in Europe with regards to the DMA - which I don't know what that stands for... But there's a deal going on with PWAs, specifically in Europe. And there's a post on the OpenWebAdvocacy.org called "It's official: Apple kills web apps in the EU." Amal, do you want to give us the rundown of exactly what's going on here, and then we can discuss?

**Jessica Sachs:** Yeah, sure. But I think before we do that, I just want to go back to Jess for a second and just say we're really excited to have you on the show... And yay... And yeah, I just want to say that. So I think with this Apple thing, we kind of have to set the stage a bit, and we're gonna have hopefully a whole show on this. We just keep pushing the date back, because the guests that would be on the show are literally talking to like nation-states right now... So they're like "We are in a battle against Apple", and every day there's something different, and they're just really busy preparing for that... So we hope to get their time as soon as they have it to give. But essentially, just really kind of we have to go back - like way, way back, to the birth of the iPhone, and think of like 2007... Where iPhones actually helped birth web apps, mobile web apps. After the iPhone came out, there was another announcement, I think later that year, where Steve Jobs was like really excited about bringing full Safari to iPhones, and like "Hey, app developers, you don't have to worry about like going through us for distribution. You get this browser, and you can get all the things..." You know, there's a historical speech, you can go look it up, where Steve Jobs is just kind of all pro the open web.

**Jerod Santo:** Yeah. He called it a real sweet deal, or something like that. "We've got a real sweet deal for you." And it was all web apps. That was the deal.

**Amal Hussein:** Yeah. So fast-forward just even to 2011, the App Store becomes a thing, and Apple's getting their 30% cut... And throughout all these investigations that have been happening lately, with the Epic Games debacle, there's emails that date back to 2011 where the Chief Marketing Officers is like "Do we think that our 70/30 split is going to last forever? We're making a billion dollars a year right now. Do you think we should maybe think about going down to 75/20, or 80/20, and still be able to get that same billion over time?" They're fully aware that it's a racket, it's like this little mafia fee, where like in-app purchases, and all this stuff - they just get 15% to 30% of pretty much all financial transactions done on iOS... So what they've done is, you know, there's no browser choice, o there's no -- sure, you can get Chrome and Firefox on iOS, but it's really just a thin wrapper for WebKit... So any limitations that the WebKit engine has, any bugs, are kind of gone across all of these -- pretty much like mobile on iOS is just WebKit.

And so there's no browser choice, they've kind of pushed off and kind of systemically underfunded WebKit for years... And all the kind of rich APIs that have come to the web, that have been added to multiple browsers - they're just either missing, or lagging, or they're buggy in Safari... You know, so there's all this kind of like intentionality to kind of hold the web back on mobile... And then there's the whole battle with the App Store, which is like its own separate thing...

Anyway, so the Open Web Advocacy group has been doing a lot of advocacy to kind of fight for browser choice on mobile devices, so that there's just fair competition across the board... Oh my God, I'm getting worked up just like explaining this...

\[00:40:11.27\] Anyway, so long story short, they made some really good strides in the EU; however Apple trying to comply with the EU means that they basically just came up with a bunch of really not-so-friendly - I don't even... Not responses. There's like a bunch of new really bad laws...

**Jerod Santo:** Changes.

**Amal Hussein:** Changes, yes. both with the App Store... They're like "Oh, fine. Sure, people can create their own third-party digital marketplaces, but you have to basically still go through us, you still have to give us some money... If your app gets downloaded over a million times, we're going to come after you for more money..." Basically, everything has to still get notarized by them. It's basically just lip service. They're like "Okay, sure, we'll comply, but here's how we will comply", in the most douchey way... And then on the flipside of that with browsers - so they've basically now been forced in the EU to allow for browser choice. So hopefully now we'll have other browser engines starting with iOS 17.4, which I think is set to release in March... However, the big kind of hoopla this week is that two weeks ago they released a beta of 17.4, and basically that broke existing PWA support, where you had an app on the homescreen, it would launch in like full-screen mode - now that same app is basically just like a bookmark. It's like just a regular browser app. It's not like a -- it doesn't take advantage of all the other rich APIs. And they came out with an excuse today, where they said that "Oh, yeah, that wasn't a bug. We intentionally broke that because of some--" They were handwavy about security, and a bunch of other things that really just don't make sense. They're "Yeah, we have to kind of protect users, and if we lift that homescreen thing in, users will be able to see each other's data, and this and that..." I'm like "Oh, really, Apple? You multibillion dollar company, you really couldn't find a way to design this in a secure way?" You're basically just intentionally breaking the PWA experience, because you now are forced to sort of not only support it, but now there's going to be other browsers that are also going to enable this experience for users.

So long story short, they're just being really problematic, and they've been silent, they've haven't really -- there's been journalists and all these people trying to get them to comment, explain, and all they came out with today is these few paragraphs on the developer.apple.com, under a section called titled "Why don't users in the EU have access to homescreen web apps?" So yeah, Apple's really -- I mean, this is just like a fight for... This is a fight where it's about money, clearly. They're not gonna just give up their 30% without a fight. But I just didn't think it would be this dirty of a fight. And I just didn't think that they would consider -- do they think people are stupid? I just really don't -- I don't get that. So yeah, so anyways... I'm done talking now, but yeah...

**Jessica Sachs:** I mean, a lot of those points hit... And especially with developers, I think, right? So developers - we're very aware of what could be, and what could exist... What's that future meme? It's like "The world if so and so happened." I think there was actually literally one about Apple and PWA's. Somebody posted that on Twitter. It's like "The world if Apple actually allowed PWAs." We think about that. I don't think my mom does. And my mom doesn't know that Apple's taking a 30% cut of all the downloads once you play Solitaire... So the capitalism just kind of like flies under the radar.

And they're going to do what's in their best interest. Money first over a lot of stuff. And that's kind of -- I don't know, I think that's the way of the world, which is toxic to people who are paying attention, like us... We could create something better if we were in a position of an Apple. We could have chosen differently. And so that bothers us a lot. That's what gets us bothered, because we know.

**Amal Hussein:** \[00:44:24.24\] 100%.

**Jerod Santo:** And there's engineers inside of Apple, and there's swirling rumors - these are just rumors - that there's a divide in the company, because there's people on both sides of this particular decision-making... And you have those who get it and would love to see the open web available on their platform... They're the WebKit engineers, and a lot of the people who are down there doing the things. And then there's the pointy-haired bosses, so to speak, who are on the other side, adding up the money...

**Amal Hussein:** Trying to protect shareholder value.

**Jerod Santo:** And I'm sure it's not that cut and dried, but there is dissent, I've heard, inside the company... And that's a good thing, I guess. Chris, what do you think about all this?

**Christopher Hiller:** Yeah, I mean, I'm with Jess. Nobody except developers knows or cares about this stuff, honestly... And it's just one of those things, it's too bad, but Apple's counting on that. And so, OWA has a steep hill to climb, I think, to get the attention of lawmakers and whatnot.

**Amal Hussein:** Regulators are paying attention, though. I mean, what they've been able to bring to the table so far... So this - what is it, DMA?

**Jerod Santo:** The DMA.

**Amal Hussein:** DMA, so Digital Markets Act. That's kind of what's been put forth, that's made Apple have to kind of comply. They are listening, people are paying attention. I agree with both of you. It's really a shame that this isn't something everyone knows about. In theory, they shouldn't have to. This is so arcane and so esoteric, but...

**Christopher Hiller:** Sure, the EU... Can you imagine that sort of thing happening in the States? It's hard to imagine. It's hard to imagine -- something like that would get in front of... It'd get through the House and get through the Senate, you know what I mean?

**Jessica Sachs:** That's an incredible -- yeah, so the entire discussion... And this is not, I don't think, something -- I don't know if you guys talk about this kind of stuff, but the entire discussion on the EU being able to regulate tech decisions of large companies... So think USB-C charger and dongles for your iPhone and your headphones. So now when I want to plug these in, I've gotta get an adapter, instead of the existing lightning cable adapter I had. And that's not "great" for US consumers that have already gone down that road, or US companies that have already gone down that road. And we don't have representation in the EU, and the largest companies that will be affected by it are the ones that we use the most. There was another thing with -- didn't Apple bend on China and the Great Firewall?

**Jerod Santo:** That I don't know.

**Jessica Sachs:** That was about three years ago, I think.

**Amal Hussein:** Yeah, I think Apple's done whatever they can to appease the Chinese market. So yeah, absolutely...

**Jessica Sachs:** But they weren't able. Yeah, they weren't able to sell, I don't think, in China for a long time... And they had to do something to appease the government. And they did, because it's a freaking huge market.

**Amal Hussein:** It's a billion plus people, yeah.

**Jessica Sachs:** It'd be crazy not to.

**Jerod Santo:** \[00:47:33.27\] The interesting thing there, Jess, the divide there, the hardware/software divide is interesting. So when it came to you have to have USB-C in your phones, or whatever the actual rules became in the EU, it's like "Okay, we're just gonna do that now." And then it affects everybody around the world. When it comes to software though, they've taken a completely different stance, of like "Okay, we're only going to do that in the EU. We're going to actually bifurcate the codebase, we're going to have --" Think about the complexity inside of the code for the App Store, and for all the things, in order to only enforce this stuff in the EU, and then everybody else around the world it's different. A, that's gotta be tons of tech debt inside of Apple. B, it actually creates so many problems for people who are outside of Apple, but are shipping apps to these stores... Because now they have to have certain forks in their code in order to apply these rules, depending on where the thing gets downloaded. I mean, it's so messy that - gosh, it seems untenable in the long run.

**Jessica Sachs:** I mean, it speaks to the bets that they're making on their own ecosystem being such a lock-in. And it speaks to probably what the truth is about how much money they take in. Bifurcating the codebase versus (b)billions? I don't know, that seems easy to me. I'll bifurcate the codebase all day for that.

**Amal Hussein:** Yeah, I mean, they make a ton of money off of their kind of - whatever their mafia fees, whatever \[unintelligible 00:49:04.05\] whatever you want to call them... They make a ton. And again, it's not just Apple here. I'm sure Google's not --

**Jerod Santo:** Well, they have the exact same cut in Android.

**Amal Hussein:** They're all doing something very similar.

**Jerod Santo:** 30%.

**Amal Hussein:** The kind of difference with Google is that part of their business still relies - not "still". Heavily relies on the open web, and so they have these kind of their two-headed dragon, as opposed to like this one-headed dragon. And even just internally within Google for years there's been tension between the Chrome platform folks and the Android platform folks, because one is trying to eat the other, really; one is trying to cannibalize the other. Android is trying to take over everything; everything be native. And the Chrome folks are like "No, we're trying to go the other way. We're trying to kind of save the web, and trying to give the web legs, and give the web these richer APIs", things like filesystem access, and push notifications, and homescreen kind of access... All this stuff that will give us the ability to kind of compete with native apps. And there's no question that -- obviously, the browser sandbox is much more secure, much more private for users... There's tons of benefits for this on the user side. But Apple -- ultimately, they've been systemically kind of... And I should say "allegedly", because these are all allegations... But systemically, they've been kind of allegedly underfunding WebKit. Even though they make billions of dollars on the web. And how do they do that? Google gives Apple billions of dollars every year. Like, I think it started at like 10 billion in 2020, it went up to 15 billion in 2021... I think it was like 17 or 18 billion in 2022... It's like well over $15 billion now annually, so that Google is the default search on Safari. So they have the money; they have the money to fund the engineers, they have the money to beef up and staff up Safari... There's no excuse here other than just like it hurts their other business. There's no incentive for them to support the open web.

**Jessica Sachs:** Anti-competitive.

**Amal Hussein:** Yes.

**Jerod Santo:** Here's a side question... How many users do you have to get on your web browser to get a billion out of Google for your search bar? I mean, what percentage do you -- I mean, it can't be that much... Because how much is Firefox getting? I mean, they're down in like the 1%, 3%? I can't remember what they are in browser share right now. It's not high anymore. And they're still getting paid for that search bar.

**Amal Hussein:** So you have to understand, the difference with iPhone users is that they represent the wealthiest people in the world. It's very different -- like, I don't know, is it 16% of the global market share, 18% of the global market share is iPhones? It's under 20%. But that 20% represents the majority of the world's kind of purchasing power. Does that make sense?

**Jerod Santo:** Totally.

**Amal Hussein:** \[00:52:07.27\] So any numbers or ratios have to kind of be taken into account with that other metric... Which is why this fight is so important.

**Jerod Santo:** I'm just thinking we should start a browser, that's all I'm thinking. It seems like there's good money in it. \[laughs\]

**Amal Hussein:** You know what? People are doing that.

**Jerod Santo:** They are.

**Amal Hussein:** I have someone -- they're a group of folks that I would like to invite on the show in the future... \[unintelligible 00:52:28.01\] the Browser Company... I would love to hear from them on their ambitious goals.

**Jessica Sachs:** I can talk to it, if you're curious.

**Amal Hussein:** Please, yeah.

**Jessica Sachs:** Yeah, so they recently released - I think in the last two months, they released a video about their vision for Arc. And the line that stuck with me is that they feel that we're in an era where we're hunting and pecking, the gatherer/hunter -- the gatherer, there we go... The gatherer stage of finding information, where we have to manually type into a browser, and kind of go through the links, and be like "Is this the right one? Is this the right one?" and eventually, we find the right source of information. So I think they're gonna go search bar. I think they're gonna try to infer user intent, and redirect you to the right page. My bet, if I was the front door of the internet, I get in before the user types in google.com, right? I'm building a browser. So I think they're gonna go and try to make money off of building a browser. They said that "We'll look back at this time period and be like "Wow, how primitive." Kind of the way we look at books and the indices inside of the back of a book, and we're like "Oh, how do I find this material?" Scan for the chapter page and open the book.

**Jerod Santo:** Which was really cool tech back in the day.

**Amal Hussein:** Yeah. So how does AI fit into Arc's model? Specifically with ChatGPT and Bing kind of having a little love festival... Are they planning on using AI to kind of supercharge that experience as well?

**Jessica Sachs:** I can't remember -- I mean, everybody is, but I can't remember if they explicitly mentioned it. The one thing Arc does really well is UX and frequent releases, and the publicity of those releases, and the features that they've added. So they have release notes every single week on Thursdays is their release week. And it'll show up in my sidebar, it'll be like "Release." It's a really cool browser, try it out. It's a different way of organizing stuff. I no longer have tabs at the top of my screen, or a URL bar.

**Jerod Santo:** The URL bar is my favorite part.

**Jessica Sachs:** It's useless.

**Jerod Santo:** It's useless...! \[laughs\] I've never felt more obsolete than right now. My favorite part's useless.

**Jessica Sachs:** I have an entire rant on why URLs are actually a construct that we've made because we have to use text specifically to send information over the wire.

**Jerod Santo:** Okay...

**Jessica Sachs:** Versus something like AirDrop. AirDrop has no URLs.

**Jerod Santo:** True. I definitely want to hear that rant. Save that for an upcoming rant episode. Maybe we do some unpopular opinions, or some hot takes or something... Rant hour...

**Jessica Sachs:** Nobody agreed with me, by the way, when I gave that hot take on a Twitter space...

**Amal Hussein:** I mean, I see your point, I think we just need a better protocol. I agree that protocol's outdated. But for me, it's like, show me what's the replacement.

**Jessica Sachs:** Oh, yeah. This is 15-20 years \[unintelligible 00:55:35.29\]

**Amal Hussein:** Hopefully not that long... But yeah, I agree, it might be that long. I mean, yeah, for it to become a standard, let's say 40.

**Jerod Santo:** \[00:55:49.21\] Right. That's what we need, is one more standard. Well, the blog post right now - this is a moving target, so as we record, February 16th -- as you listen, seven days later, it'll be like 10 days left... They have a survey that they want you to fill in if you are somebody who ships a web app in the EU. They think that will help. I don't know what the OWA's next move is here, if they even have one... But iOS 17.4 ships 19 days from now, according to this, and they have a Digital Markets Act countdown on the website. So we will link to that in the show notes. And then stay tuned for a full episode with the people who are the movers and shakers on the OWA's side, as Amal's trying to put that one together. I'm definitely excited about that.

**Amal Hussein:** Yeah. I was literally just chatting with Bruce this morning, Bruce Lawson, who's one of the folks... And he -- I asked him "Okay, what can I do to help?" I'm gonna read his response to you. "You could encourage anyone who operates a PWA in the EU - they could be a US company with EU customers, or an EU company - to fill the survey at the top of our blog posts." So thank you, Jerod.

**Jerod Santo:** Yes.

**Amal Hussein:** And he said, "This will give us evidence to take to the European Commission. And doing it this weekend would be great." Doing it as soon as possible, basically, would be great. And he said that they don't need to give their names. It would be nice if they do, but it can be anonymous. I will collate it and submit it to the right people. So yeah, they're collecting that... Collecting data. Yeah.

**Jerod Santo:** Alright, we have two other links that I gathered for this, but we've spent plenty of time talking about that. Is anybody excited to talk about either of the following two topics? Topic one, LLRT. Amazon's new low-latency JavaScript runtime. That's one. And then two is a new library called Tempo, a new date library for JavaScript and TypeScript. Anybody excited to talk about either of those? Happy to talk about either, happy to just call it a show... What are you all thinking? What are you all feeling?

**Amal Hussein:** I'm excited about the LLRT thing, but I don't know if anyone else is...

**Jessica Sachs:** I didn't dig deep into it, so I don't have much to say except for we have another runtime... That's all I have to say about that.

**Amal Hussein:** What I have to say about that is like Amazon needs to contribute and fund Node.js, and support the ecosystem --

**Jerod Santo:** Instead of doing this work?

**Amal Hussein:** Support the ecosystem that everyone else uses, yes, instead of just rolling their own... Specifically when Lambda basically is so heavily dependent on Node, and essentially this is kind of a clone of Node... So fix the performance and runtime issues in Node core, as opposed to reinventing your own wheel. But whatever. Capitalism...

**Christopher Hiller:** So as I understand, they pulled in something called QuickJS? I don't know what QuickJS is, though. It sounds like it's -- if LLRT is to Node as V8 is to QuickJS, or something like that. I don't know what QuickJS is. I'm interested in that.

**Jerod Santo:** Yeah, QuickJS they say is the JavaScript engine. The point of this particular low latency runtime, if it's not obvious by the name, is they're trying to specifically optimize for fast and efficient serverless applications. So boot time is really what they're optimizing for, which makes sense because of lambda and all of the serverless things that they offer...

I haven't heard of QuickJS either. I'd be interested in that. Maybe we could do a deep-dive with some folks if that's like an open source thing that they're working on, or that they've just pulled in from a different group... But yes, we have one more of these. It seems like it's been - not the year of, but maybe like the couple years of proliferating JS runtimes... And there's pros and cons to that. Amal, obviously, you are thinking "Let's all contribute to Node.js." Other people are thinking different techniques, different approaches... Worth perhaps reinvention, worth competition... I don't know. I kind of flip flop on that myself.

**Amal Hussein:** \[00:59:48.25\] Yeah. I think just relying on a new engine as well... Like, someone who's worked with JavaScript engines very closely in the past, specifically when it comes to like bugs and interoperability - you know, there's a whole matrix of bugs that you're now potentially introducing... Like, how spec-compliant is this, you know, and are these being run against the same tests that all the other engines are being run against? It's a lot of work to have a spec-compliant JavaScript engine, so I'm very curious to see how spec-compliant Quick is... Because obviously, what that means to developers if something is not spec-compliant is that you think fetch is doing something, or you think a map is doing something, and it's doing something different.

**Jessica Sachs:** I can talk a little bit about the development of Bun, if you're interested...

**Amal Hussein:** Sure. Yeah.

**Jessica Sachs:** I had the pleasure of listening to Jared Summer talk a lot over the last year... I did his interview on his Twitter space on Bun 1.0, and they took a lot of the tests, actually, specifically from Node. So they just read the tests, and tried to comply with them. And that was really interesting to hear. I was like "That's really smart."

The second thing is that if you're a runtime and a company, what's your end game? Why do you want to be a company that builds a runtime? Why would investors invest in you? What's the end game plan for Bun's parent company, Oven? Which is currently only Bun. But what end game? If you are a founder, what would you do?

**Amal Hussein:** Yeah, I mean, my guess is there's some compute, like cloud-hosting thing that they're gonna try to hopefully leverage to fund the open source. I hope so. Ultimately, the best thing for the community is for there to be some path towards sustainability for Bun, so I really hope that like they find that. Because otherwise, that would really suck. But yeah, I agree. I'm personally a little perturbed with the whole VC dev tooling space. In some cases it makes sense, in some cases I don't understand how this is going to make money... But I think the verdict is still out for Bun, so I'm very eager to see...

**Jessica Sachs:** Yeah. So I think that they're going to try to be both. I think they're going to try to sell really fast, serverless compute. Really fast spin-up times. And I think that Amazon is trying to do the same... But what I think is good about Bun and is different about Amazon is they're doing the whole thing, and they're doing it open source, and they're being friendly with every layer. You don't need to use -- if you're using let's say Node, tsnode, or whatever as your executable, you can still use bun as a package manager. And that's an interesting thing. You can use bun test to test your code. That's interesting to me, because they're playing nice, and being really interoperable. And eventually, you might be like "I like Bun as a runtime, because it has extra features." They added the ability to use Bash. And this is really critical, because also this means Windows support. Bash scripts that have Windows support. I don't know how many times you guys have done an npm install rimraf as a Node package, so that you can support Windows rmrf in your development environments.

There's interesting things happening in the Bun... In Buntime. It needs to be called Buntime. I'm over it being the Bun runtime. So many people are on board with me that it's the Buntime. Jerod won't do it. I don't care. Every platform I'm on, I'm going to call it the Buntime. So the Buntime is doing some really interesting things that are extra. Built-in server. Built-in ability to serve web apps.

**Amal Hussein:** \[01:03:46.22\] Yeah, I mean, it's super-cool. It's what I think the community also just generally needs. Without competition, it breeds stagnation. So I think everything is gonna get better because somebody threw the goalpost a little further this time. So that's great. And I think for me the difference with Bun and this new runtime, LLRT, is that Bun was strategic enough to use a very battle-tested JavaScript engine, which is JavaScript Core. Ironically, the same -- it's the WebKit engine. And so - what is Quick? I've never even heard of Quick. So I don't know how battle-tested that is, so I'd be curious to see how well-supported JavaScript is.Or is it like limited JavaScript? I don't even know.

**Jerod Santo:** QuickJS is a small and embeddable JavaScript engine. It supports the ES2023 spec, including modules, asynchronous generators, proxies, and bigint. It has had two releases, one in December and one January of this year. So it's brand new. I haven't been able to figure out who's developing it...

**Christopher Hiller:** Does this sound like it's targeted to microcontrollers, or...?

**Jerod Santo:** The main features are small and easily embeddable. Just a few C files, no external dependency. x86 code for simple Hello World program. Hard to say... But it seems like that, because easily-embeddable is a point... Bellard.org. Is this the guy -- Fabrice Bellard. Oh, this is Fabrice Bellard. He's built tons of awesome stuff.

**Christopher Hiller:** Yeah. He's supposed to be good with --

**Jerod Santo:** Yeah, he's the author of lots of stuff that I can't think of right now. QEMU... FFMPEG, that's the big one. FFMPEG.

**Amal Hussein:** Yeah, so the open question is how spec-compliant -- can you take your existing legacy JavaScripts ad just plop it and it'll work 100% as expected? Or are there gotchas? Are there certain parts of the spec that are not supported because they're starting in 2023?

**Jerod Santo:** Right.

**Amal Hussein:** So I don't know. These are all questions I would love to have answers to.

**Jessica Sachs:** For Bun the answer is no, it's not. You said building on the existing JavaScript engine, right?

**Amal Hussein:** Yeah. So Bun uses JavaScript Core, JSC, which - that's like the Bun equivalent of V8. So Node uses a JavaScript engine to parse JavaScript. It doesn't build its own engine, in the same way Bun didn't build its own JavaScript engine that uses JavaScript Core. So JavaScript Core's maintained primarily at Apple, V8's maintained by Google.

**Jessica Sachs:** Wait, I don't think that's correct, but I want to be fact-checked on this. What I do know is correct is it doesn't even use libuv. Like, they wrote their own OS-specific bindings.

**Amal Hussein:** Yeah. So libuv is like a Node dependency, and so that's the difference. It's kind of like a series of shells, and layers. So the JavaScript engine is like the first layer, and then there's other layers built on top of that, that are Node dependencies, are Node-specific. And so that's the kind of delta, right? So Bun has a JavaScript engine because it's way too much work to create a new one, and then on top of that, they have their own Zig layers, and their Zig layers are going to be different than Node's.

**Jerod Santo:** C++ layers, right?

**Amal Hussein:** Yeah. There's a bunch of things in Node that are either third-party dependencies, or Node-specific code that kind of create the API surface. I don't know if I'm making sense, Jess, but...

**Jessica Sachs:** You're doing fine. You're doing fine.

**Jerod Santo:** That's correct. I fact-checked Amal. JavaScript Core is the engine inside of Bun.

**Amal Hussein:** Thank you.

**Jerod Santo:** And QuickJS is the engine inside of Amazon's new thing. QuickJS is brand new, and written by one guy, even though he's very talented. My guess is -- it says it supports ES2023, so there's probably no backwards-compatibility with like old stuff. But definitely an interesting project.

**Amal Hussein:** \[01:07:57.12\] Yeah. You'd have to run the Test262 conformance suite with QuickJS, and then we'd have an answer for "How good is this thing?" It could be perfect. Who knows? It's just...

**Jerod Santo:** Yeah. It says right here it passes nearly 100% of the ECMAScript Test Suite tests when selecting the ES2023 features.

**Amal Hussein:** Yeah. So that's what it is. It's a select subset of features.

**Jerod Santo:** Yeah. Which makes sense when you have a very specific thing you're trying to do, which exactly - Amazon's trying to create this engine that is really, really good at booting fast, because that's a problem with serverless runtimes, is the - cold start times. And everyone's trying to work that out, but that's a trade-off. Even inside of their own readme they state that there are limitations... There are many cases, they say, where LLRT shows notable performance drawbacks compared with JIT-powered runtimes, such as large data processing Monte Carlo simulations, or performing tasks with hundreds of thousands or millions of iterations. So it's a trade-off, as all engineering is...

So I like the fact that there are now going to be different runtimes with different trade-offs, depending on your particular use case, like Chris alluded to. If you're really trying to get it onto microcontrollers, or really small places, that's a trade-off you're willing to take in order to not have 100% coverage of the entire language. That kind of stuff. So diversity in that case I think is cool. And I don't know how this plays into the whole Cloudflare/Deno --

**Amal Hussein:** Well, my guess is there's probably no observability layer probably either... Because maybe in this use case you wouldn't need to. And that's also one of the things that makes Node very different than Bun, is having that enterprise-level observability. Being able to trace, and all that stuff. If there's no need here, then yeah, strip the chassis, right? Strip it!

**Jerod Santo:** Right.

**Amal Hussein:** I mean, I'm all for --

**Jerod Santo:** Stripping the chassis.

**Amal Hussein:** Yeah, not only stripping the chassis, but creating these different use cases. I think this is great. It's just more like -- really, it's important to advertise the trade-offs to people. It's important to like explain to people what the difference is. This is not your every use case runtime. So as long as people know that...

**Jerod Santo:** Right. It's 2024, there's still no silver bullets, and somebody who's trying to sell you a silver bullet either deceives themselves, or trying to take advantage. Alright, Chris, last word. Not just on this, but on the entire episode. This is the end, man. You get the final word, Chris. What are you thinking?

**Christopher Hiller:** Well, I'm glad Jessica is here, and we have some fresh -- no, I mean, new blood on the podcast... And yeah, looking forward to doing the podcast.

**Jerod Santo:** Love it.

**Christopher Hiller:** With Jessica, the new person.

**Jerod Santo:** With Jessica, the new person. Jessica, thanks so much for being our new person. Amal, thanks for being here as well, and b0neskull, of course. Tons of fun. This conversation has for me sparked other episodes I would like to do. I think we should do a show about QuickJS. Obviously, OWA is coming on at some point... And more Bun, maybe some people from Amazon... Who knows? Lots of conversations to be had. But that's our time for today, so we will say goodbye, and we will kick on that BMC outro song, and we'll talk to you all on the next episode.
