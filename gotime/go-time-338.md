**Jerod Santo:** Hello, fellow Gophers. Go Time's producer and co-host of the Changelog here, Jerod Santo. A month ago I put together an unpopular opinion roundup for 2022. If you like this episode, go back and listen to that one as well. I liked it, so I figured, why wait? We might as well find out who had the most popular and unpopular opinions in 2023. So let's get right into it.

First off, some stats. There were 62 opinions shared last year, down from 76 in 2022. Of those, 37 were generally popular, four were right at the 50% mark, and 21 were generally unpopular. That means, just like the previous year, we had more popular opinions shared than unpopular ones. Maybe that's a good thing. Every opinion shared by Go Time participants was expected to be unpopular... But hey, we agree with each other more often than we disagree. I like that.

Okay, here is your top five most popular opinions shared on Go Time in 2023.

Number five. On episode number 266, called, "Is htmx the way to go?" Carson Gross said "Too many tech decisions are driven by people's fear of looking dumb."

**chg:** My unpopular opinion is that in technology, a huge number of technical decisions are either made or not objected to out of a fear of looking dumb.

So someone comes in with an architectural decision or some code decision, or whatever, and it's crazy. And there's a bunch of engineers in there looking at it and going, "Man, that looks crazy to me. But if I say so, I'm going to look dumb. I'm going to look like I'm not smart enough to understand what they're doing, and so I'm going to keep quiet about it." And I think that that is a problem in general in technology, and it's understandable, because it is a pretty brutal industry. We rely on our intellect quite a bit, and there's ageism, and if you come across as not being intelligent, it can be really detrimental to your career... But I think that, unfortunately, it ends up in a lot of situations leading to bad architectural outcomes, and bad code outcomes, because people are unwilling to say, "This is too crazy. Let's do it a simpler way, if at all possible." So that's my unpopular opinion. The fear of looking dumb ends up driving a lot of technical decisions.

**Jerod Santo:** A whopping 93% of pollsters agree with Carson. Fear of looking dumb has a nice acronym too, by the way. F-O-L-D. FOLD. I guess you really do have to know when to hold them and when to fold 'em. And I'm going to fold 'em right now.

Number four, coming from that exact same episode, Chris James - not to be confused with Rick James - got 95% of gophers to agree with his opinion, that rather than starting a project by drawing 100 microservices on a whiteboard, just start with a monolith.

**Chris James:** So imagine you start a new project with a half a dozen developers, and the first thing you do is you write 10 Go interfaces describing the lumps of code that you think you're going to need to solve this problem. And then you divide them up between everyone, and say, "Go implement those interfaces, and we'll stick everything together in a few weeks time." You'd probably rightly question my judgment with this approach, because surely this is premature abstraction. How do I know that the design is correct? How do we know these interfaces are what we need? And is it not risky for us to work so independently at first? Are we not going to integration hell? And yet, there are loads of teams out there who will start a project with microservices. And that is just like what I've just described, but it's even worse, because there's a distributed system on top of all of these assumptions that you're making.

\[07:48\] So whatever mistakes you've made in your design are so much harder to fix than if it was just in a single codebase. And my unpopular opinion - maybe it's not unpopular, I don't know, but I believe in the vast majority of cases rather than starting a project by drawing on a whiteboard 100 microservices, just start with a monolith. Start with like one codebase. Because if you make mistakes in your assumptions, it's so much easier to fix within a single codebase than if you've just scattered it into a million services. And if you can write a good monolith, then you'll be able to break it out into separate distributed services when you actually need to distribute this work.

And I guess my second unpopular opinion on top of it, which is kind of the same, is if you can't write a good monolith, you're going to write a dreadful microservices architecture.

**Jerod Santo:** I left that last bit in the clip because it's probably as agreeable as his first take. I love you, Chris, but what you said there at the end is pretty much like saying "If you can't write good code, you're going to write bad code." Not controversial.

Let's move now to the number three most popular unpopular opinion, which is that the best tool for the job isn't always the best tool for the job.

**Lea Anthony:** So my unpopular opinion today, Mat, is that the best tool for the job isn't always the best tool for the job.

**Mat Ryer:** What?!

**Lea Anthony:** Now, what do I mean by that...? Yes, how unpopular will that be...?

**Mat Ryer:** \[laughs\] Yeah. Saying something isn't the thing it is is going to be quite unpopular, I think.

**Lea Anthony:** Controversial, one would say. So as engineers, we always try and use the best tool for the job, because we want to do a great job. However, if you're paying for your own time, that's fine. But if somebody else is paying for your time, then is the tool that you're designing the best tool for the job as a whole? I was made aware of this recently through an article that was written by a guy I do not remember the name of right now, who basically said that he had a new manager who came in and they wanted to implement - I don't know, like a queue, or something. I can't remember exactly what it was. And so they were like "Oh, well, let's go get this Kafka", or like some technology that's designed for that.

**Mat Ryer:** Oh, I thought you meant a pool cue.

**Lea Anthony:** Oh, well, I'm a big, big, big, big fan of pool; big fan of playing pool. We can definitely talk about that.

**Mat Ryer:** Do you swim much?

**Lea Anthony:** I swim. I've got a pool. So that's good.

**Mat Ryer:** Have you? Have you got a pool table?

**Lea Anthony:** No. I should though.

**Mat Ryer:** Have you got a pool, really?

**Lea Anthony:** Yeah. And I've got a table next to the pool, but I don't think that's what you're asking, is it?

**Mat Ryer:** No, you'd have to put it in for it to count, I think.

**Lea Anthony:** Well, I'll tell you what - I'll send you a photo later.

**Mat Ryer:** People living in Australia just having pools with it... It's mad. Okay, sorry to interrupt...

**Lea Anthony:** That's alright. Where was I? Oh yeah, so the new manager came in and said, "Well, what are you using currently?" and I think they were using Postgres, or something. And he said, "Well, for this use case, let's build it in Postgres." And the engineers were like "What are you talking about? That's crazy." But they did. And the reason why it was such a good idea was because it was a technology they fully understood, they had all the controls in place, so that if something went wrong, they could deal with it. Based on their use case, it was completely adequate enough. It was more than they need it. So whilst it's not the best tool for the job, it was the best tool for the job.

**Jerod Santo:** That was Lee Anthony on episode 271, "Cross-platform graphical user interfaces." And despite him literally saying a thing is not exactly what that thing is, 95% of people agreed with him. Fascinating. That'd be like me saying "Good code isn't always good code" and convincing 95% of y'all that I'm right about that. Actually, you know what? Now that I think about it, that doesn't sound impossible after all.

Let's move now to number two and number one. Yes, we had a two-way tie for first place, which is really last place. Isn't it? Both Ole Bulbuk and Johnny Boursiquot managed to score perfect one hundreds on agreement to their allegedly unpopular opinions. We'll give Johnny number one honors, because his poll received more votes. So here's number two. On Go Time 264, "Long-term code maintenance", Ole Bulbuk boldly declared that he believes more than 90% of business software is legacy software.

**Ole Bulbuk:** \[12:23\] I would estimate that in business software at least, more than 90% is legacy, and there is almost no greenfield.

**Natalie Pistunovich:** So your unpopular opinion is that this greenfield is not a thing, almost ever.

**Ole Bulbuk:** It is kind of a thing, and it's possible, but almost nobody achieves it. It's a technical possibility that some people have given up to strive for, and others say "Yeah, we might do this next year", and others don't have an idea where to look for it, even when they have the feeling that it could be a lot better. I think this is the first step that you need to know what you want to achieve. You want to have everything cleaner? Okay. And you can have clean code, which is a lot about details... But there's still something missing, even if you have everything technically according to the Clean Code book.

**Natalie Pistunovich:** So if you have to put that into a tweet, how would you phrase it?

**Ole Bulbuk:** Okay... Then I would say "Much more than 90% of all business software is legacy."

**Natalie Pistunovich:** And not greenfield. Okay.

**Ole Bulbuk:** Yeah. Brownfield, whatever you want to call it.

**Jerod Santo:** We 100% agree with you, Ole. Maybe 90% was too low of an estimate. Had you said 98% of business software is legacy, that might have gotten at least one person to disagree. Okay. Now the moment we've all been waiting for - who will we crown with the most popular opinion, which technically means the absolute worst submission to a segment about unpopular opinions in 2023? You already know the answer... It's our very own Johnny Boursiquot's opinion that workshops must be hands-on. Otherwise they're not workshops.

**Johnny Boursiquot:** My opinion - whether it's unpopular or not we will see... But my opinion is that if you have a workshop where none of the participants actually get to do hands-on stuff, that's a seminar, not a workshop. If you're doing most of the talking, and most of the demonstration, that's a seminar. People are just sitting there and watching you - that's not a workshop. So know and disclose what it is that you're going to -- what you're going to be putting on. Is it a seminar, where they just listen? Or are they actually going to be learning and doing stuff with the information that they're learning from you at the time? So yeah, workshops, not seminars. And I'm a big fan of workshops, hands-on; very hands-on. Not the "Let me talk at you for four to eight hours" thing.

**Kris Brandow:** I don't know, I feel like that's probably gonna be popular, Johnny... \[unintelligible 00:15:12.00\] with unpopular opinions.

**Kaylyn Gibilterra:** Yeah, whoever's workshop/seminar Johnny walked into at GopherCon - that's who's gonna find it unpopular. \[laughter\]

**Angelica Hill:** Now I'm wondering who you're referencing \[unintelligible 00:15:24.02\]

**Kaylyn Gibilterra:** It's like Bill Kennedy. He's like "Bill, you don't even..." \[laughter\] "Why are you even here?"

**Angelica Hill:** Oh, my gosh... I would say, on the workshop topic, in my order - and I have ranked all the moments at GopherCon in order... I obviously had Kaylyn and me lightning talks, RainGo Alliance... My second-best moment was walking into Johnny's workshop... Because it was packed, everyone was so engaged... I saw smiles, I saw interaction between individuals...

\[15:59\] Sometimes you walk into a workshop - no, I'm not referencing anyone specific, before you start grilling me - and it's a little bit dry, it's a little bit... Like, the atmosphere is not there. It doesn't feel like it's an exciting environment of learning. Whereas in Johnny's workshop, I walked in, and - Johnny's amazing, always going to be amazing... But like, the number of people in combination with Johnny's ability to really bring everyone along for the ride and make everyone in the room feel included, feel supported, is a skill that just needs to be upped in a public forum like a podcast.

So if you ever have a chance to go to one of Johnny's workshops, please jump at that opportunity. I've said this about seven times, and I feel like I'm gonna say it every time I have the opportunity - the reason I am in Go is because I went to a workshop that Johnny was running. That is THE primary reason, and the only reason that I was like "Oh, this Go thing, I love it." So Johnny, you can thank \[unintelligible 01:04:30.07\] that was the reason I am in the Go community. So...

**Johnny Boursiquot:** Wow, that is amazing. Thank you for that.

**Angelica Hill:** Anytime.

**Johnny Boursiquot:** My job is done. My job is done.

**Break:** \[17:03\]

**Jerod Santo:** Okay, now to the good stuff. But first, play that funky jingle, Mat boy.

**Jingle:** \[19:26\]

**Jerod Santo:** Here's your top five actually unpopular opinion makers of 2023, starting with number five. It's Natalie Pistunovich, with an interesting take on the usefulness of kitchens.

**Natalie Pistunovich:** Well, my unpopular opinion is in also the non-software world. Cooking. I think kitchens are overrated, and I think most households, all they need is a multicooker. Specifically, I can recommend for my personal use the Ninja Foodie. I forget, 16 in one, or something; 15 in one. I can remove my kitchen. If it would be less of an effort, I would just throw away the entire kitchen, take one square meter, put the pot there, and that's it. That and the disher.

**Roland Shoemaker:** I think it's very brave of you to say this in the presence of two Italians.

**Natalie Pistunovich:** I know. I'm sorry. \[laughs\]

**Filippo Valsorda:** I mean, honestly, I was here thinking that if it can make pasta, I might be down.

**Natalie Pistunovich:** It can do anything. It can make the sauce. So today what I did is the sauce for tomatoes, like vegan meatballs. So I took the vegan thing, fried it there, then put the tomato sauce there... Everything in one pot, and then it goes into the dishwasher. Not like -- you know, if you have a special fancy pan, you will have to hand-wash it, you're gonna have to have two pots maybe... No.

**Nicola Murino:** I'm Italian, but I'm completely unable to cook.

**Filippo Valsorda:** I'm actually also a terrible cook. I can cook pasta, which - okay, by Italian standards, I'm a terrible cook. By US standards, actually, I've always cooked pasta and risotto and be like "Oh yeah, I'll cook dinner for everybody. Don't worry", and then people would be like "Oh, yeah, this is so great. This is Italian pasta."

**Natalie Pistunovich:** It's with parmigiano.

**Filippo Valsorda:** Yeah.

**Natalie Pistunovich:** It's not parmesan. That's what makes pasta good. \[laughs\]

**Filippo Valsorda:** I mean, pretty much... The fewer ingredients, the better. So the easier, the better.

**Natalie Pistunovich:** Exactly. If this is your approach, a multicooker is all you need in life. Throw away the rest of the kitchen.

**Jerod Santo:** It turns out 81% of GoTime listeners won't be throwing away their kitchens anytime soon. By the way, Natalie shared that opinion on episode number 298, "What's new in Go's cryptography libraries, Part II."

Okay. Next up, number four is Ian Lopshire saying "Sorry, Chrome and Firefox." He thinks Safari is the best web browser out there.

**Ian Lopshire:** I might get some hate for this one.

**Kris Brandow:** That's the point.

**Ian Lopshire:** Safari is the best web browser.

**Kris Brandow:** Oh, God... \[laughs\]

**Ian Lopshire:** It is. It is.

**Ben Johnson:** I mean, I think it's great at downloading Chrome... I mean, I'll give you that. \[laughter\]

**Kris Brandow:** I mean, as far as web standards are concerned, it's objectively not the best. It's very far behind the other two when it comes to implementing the web standards.

**Ian Lopshire:** I agree with that, too... But it is my favorite to use, it's the most ergonomic for me; it's the least memory hungry, the best battery life... All the things I care about, Safari has. All the things I don't really care about -- it's not often I find a site that doesn't work in Safari... Aside from this podcast recording website, but... Yeah, it's what I use day to day, it's my favorite. It is what it is.

**Kris Brandow:** I do kind of daily drive Safari, but I don't know if that's because it's the best, or just because it exists in the Apple ecosystem, so everything is integrated very well with Safari. Everything just kind of works together in that nice little Apple magical way. Okay, okay...

**Ian Lopshire:** I think that one's gonna be unpopular.

**Ben Johnson:** Yeah, I would agree with you.

**Kris Brandow:** Yeah. Maybe if you said like "Firefox is the best."

**Jerod Santo:** That was from episode number 283, "The solo gopher", with guest Ben Johnson. Good episode, bad opinion, according to 85 percent of poll takers. But not according to me. I too am a Safari fan. It is my daily driver, at least until Ladybird is ready for primetime.

We move now to number three... This one was unpopular with 89 percent of respondents.

**Andy Walker:** \[24:11\] "Syntax highlighting sucks, and we shouldn't use it." That's my unpopular opinion. Now, I will be much more clear than that. I will say that I don't believe that you should have no kind of like indication of things. I mean, if I share, does it come up in the recording? Oh, no, okay. I won't do that. Maybe we can post a picture of it, like what I do... I have just basically black and white, and some bold and some metallics here and there. But for the most part, none. So yeah. And I feel like it has made me -- I think maybe I read some like wonky think piece on it about six or seven years ago, and then I just gave it a try... And I actually do think it has made me a better programmer.

**Jerod Santo:** That was Andy Walker on episode 276, "Hallway conf, a new style of conference." Yeah, that is a legitimately unpopular opinion, and I can't even understand why you'd hold it, let alone tell other people you do. Good on you, Andy.

Next up, the second most unpopular opinion of 2023 - it's Juan Andrés Guerrero-Saade, who goes by Jags, because surely, I butchered that, like many people do. Here's Jags.

**Juan Andrés Guerrero-Saade:** I don't know if it's an unpopular opinion... Well, I can make it an unpopular opinion in the context of this podcast. I feel like Python 3.11 is trying to copy some of the better syntactic features of Go for relevance. And the part where I think it's an unpopular opinion is I could see a world where it continues or further dominates in like programming language market share by just stealing a couple of decent ideas, and continuing to live as the lazy person's scripting language.

**Natalie Pistunovich:** So if you have to summarize that into a tweet that we can vote upon...

**Juan Andrés Guerrero-Saade:** If I had to tweet this out, like 140 characters, it'd just be "Python 3.11 is going to kill Go."

**Johnny Boursiquot:** Okay.

**Natalie Pistunovich:** Which is probably going to make it high in the Unpopular Opinion board...

**Juan Andrés Guerrero-Saade:** Yeah. I mean, it's super-unpopular. It's not that I agree with it, but I'm saying - like, if you just steal a couple of ideas, and then the laziest fricking programming language that most people use to just kind of script their way out of a paper bag, suddenly has a couple of like the nice features of Go, and you go "I'll just stick around here until I'm ready to wade into the pool of being an actual good developer. I'm gonna just be cool over here", right?

**Jerod Santo:** Natalie was absolutely correct. When you put it like that, Jags, you will get 94% of Go Time's audience to disagree with you. And in fact, the man himself commented on the poll thread that he disagrees, too. So there's that.

Okay, without further ado, here is your number one most unpopular opinion shared on the Go Time podcast in 2023. "TikTok is the best unbiased news source."

**Kaylyn Gibilterra:** Okay. I still don't know... Can you like not tag me? I don't know, I might deny later that I said this, but... I think TikTok is the most unbiased news that we have available to us... That's my opinion.

**Natalie Pistunovich:** Interesting.

**Kaylyn Gibilterra:** Don't @ me. But I would probably -- I would discuss it.

**Kris Brandow:** \[27:57\] Spicy. I guess it depends on which TikTok you're on...

**Kaylyn Gibilterra:** Yes, it does...

**Kris Brandow:** Because there's some TikToks that I'm just like "No, no, no, no. I don't want to be anywhere near that TikTok. Bring me back to my TikTok."

**Kaylyn Gibilterra:** Yeah. Yes, yes, yes. But I think you can find the most unbiased news on TikTok.

**Jerod Santo:** 95% of Gophers disagree with \[Redacted\]. They do not believe you can find the most unbiased news on TikTok. Congrats, \[Redacted\]. You are our 2023 Unpop Champ.

**Adam Stacoviak:** You've won a lifetime of yogurt. That's right, we'll fill your fridge with every type of creamy yogurt for years to come, ensuring you never run out of your favorite snack. \[unintelligible 00:28:40.14\] or restricted by law. No cash value. Taxes and delivery fees may apply. Not an actual prize.

**Break:** \[28:48\]

**Jerod Santo:** Since I have you here and since I spent way too much time reviewing way too many opinions from what feels like forever ago, here's a few bonus opinions for you. These weren't necessarily popular or unpopular. They are just ones I enjoyed stumbling across as I went through them all.

First up, Joe Davidson on episode 291, "Go Templating with Templ."

**Joe Davidson:** I do. It's not tech-related, but my opinion is that socks and sandals are actually an underrated combination. I think that for casual footwear, people are looking for like peak breathability. What's more breathable than a sandal.

**Kris Brandow:** So doesn't the sock defeat the purpose of that? If you want peak breathability, you would not want to wear socks. Like, why are you wearing socks? I don't understand it. That is unpopular with me.

**Jon Calhoun:** I'm on board here.

**Joe Davidson:** It's comfortable...

**Adrian Hesketh:** I mean, I would never wear sandals... I'd feel broke.

**Jon Calhoun:** I can say, after all sorts of sporting events, I've taken off shoes and slipped on sandals, and it's so comfortable at that point. And for whatever reason, if you take the socks off, it's just not quite as comfortable.

**Joe Davidson:** Exactly.

**Kris Brandow:** It just looks weird.

**Jon Calhoun:** Sure.

**Joe Davidson:** It's coming back. I'm calling it now, it's coming back.

**Jon Calhoun:** I mean, I will say this... I don't know that I'd wear it to an interview.

**Jerod Santo:** That utterly heinous opinion by Joe was popular with 67% of gophers, which is just nuts. Socks with sandals? Pick one or the other, please.

Okay, let's do this one. Matt Boyle blew my mind with his strong, yet completely inappropriate opinion that people should bring laptops to movie theaters.

**Matthew Boyle:** I think you should be able to take your laptop to the movies, or to the cinema with you if you're from the UK, and you should be able to sit there and like program and type while you're in there, in the movies.

**Mat Ryer:** \[laughs\] What?!

**Matthew Boyle:** Yeah, that's kind of the reaction I get.

**Mat Ryer:** What's the thinking there, mate? What's going on? Are you not interested in the film?

**Matthew Boyle:** No, not at all.

**Jon Calhoun:** How often does this happen?

**Matthew Boyle:** So I think I've seen probably thousands of movies, but I couldn't tell you what happened in any of them, because I usually sit and watch TV with my partner; she's watching something, and I'm just like working on a project, or writing a book, apparently, doing stuff like that. I love having the background noise, and I love having something to look up at and be like "Oh, that's interesting." But I'm not necessarily that engaged with the film. And truthfully, I struggle to sit there for like three hours, watching something, especially if it's not very good. However, it doesn't mean that I don't want to see parts of the latest and greatest films.I think it'd be very nice to sit and watch the latest and greatest and see snippets of whatever the Rock is up to this week whilst programming away on my side projects. And I feel like there's a market for this. I feel like there are other software engineers and other people who quite happily sit, not necessarily making a bunch of noise, but just have sort of that backlight on their laptop, where they could kind of sit and work on something while they're watching the latest and greatest film.

**Jerod Santo:** Matt and I can find common ground on one point he made. Most parts of most of the latest and greatest films aren't any good, but that's the only thing I'm going to agree with you on that. Last up, let's throw a conspiracy theory in there. Why not, right? It's always nice to finish with a conspiracy theory. Here's David Wicks theorizing that maybe single page apps aren't merely an accident in web dev's sordid history.

**David Wickes:** Okay, so mine isn't so much an opinion as a conspiracy theory which I'd like to inflict upon everybody, since it infected my brain a few years ago... And I call this the SPA conspiracy. The idea is this - the reason that all of frontend development has moved over to thick clients JavaScript applications is to make sure that we always have to have JavaScript enabled in our browsers, which makes sure that the large corporations, who are, I should point out, the developers of the single-page apps, so they can track us.

So basically, Google made Angular in order to make sure we turn on JS, in order to make sure Google tracking cookies could execute properly. Same for Facebook. You might notice that many of the other frameworks - I think of Svelte here - is also, its original design was for visual advertising, to make sure we also require JavaScript to run. So there you go, there's my unpopular opinion. The entirety of the last ten years of frontend frameworks is all there to make sure that Google can follow you on the web.
