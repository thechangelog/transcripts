**Jerod Santo:** Hello, world. It's your internet friend, Jerod Santo, and I am excited for JS Party today. I have three of our regular panelists here with me. Amelia, how are you?

**Amelia Wattenberger:** I'm good. Thanks for asking.

**Jerod Santo:** You're welcome. Thanks for being good. If you would have said "I'm bad", I would have felt awkward...

**Amelia Wattenberger:** \[laughs\] You're welcome.

**Jerod Santo:** So I'm glad you're good, or at least willing to lie about it. Kball, what's up, man?

**Kevin Ball:** I'm bad.

**Jerod Santo:** Bad to the bone.

**Kevin Ball:** You just set me up for that.

**Jerod Santo:** \[laughs\]

**Kevin Ball:** No, I'm happy to be back on. Excited to be here.

**Jerod Santo:** Well, that's how it works around here - I set them up and you knock 'em down, Kball. We also have b0neskull, who is a fan of knocking things down. What's up, Chris?

**Christopher Hiller:** What's up?! Here I am...

**Jerod Santo:** \[laughs\] See? He's already knocking things down, and we're just getting started. So we have a couple of awesome recurring segments for everyone today, and we're gonna start off with story of the week.

**Jingle:** \[03:35\] to \[03:50\]

**Jerod Santo:** Story of the week is one of our recurring segments where we just take turns sharing what we believe is the most important or the biggest story of the week, or recently, or maybe just the one that we've found before the show started... So take it for what you will. Some of these are newsy, some of these are just cool things that we think are interesting. Here we go! Let's start off with Kball. What's your story of the week?

**Kevin Ball:** \[04:14\] Yeah, so the story I picked up is not JavaScript-specific, but it was a study that came out recently, looking at the impact of the dramatic shift to remote work, looking at a whole bunch of Microsoft employees that apparently gave access to all sorts of tracking info about how they work, and who they meet with, and all these other things. So these researchers dug into it, and found a couple of interesting things about the impact, and how generalizable this is to remote work globally is an interesting question, because we all have seen working in a pandemic is not the same as just working remotely... But one of the things that stood out to me is how communication across different parts of the company changed. And what they said is they've found that the networks kind of ossified and shrunk. So people communicated as much or more with the people they were really, really close to, but those kind of weak connections across different parts of the organization went away, and there was a lot less communication across kind of outside of your immediate team, or beyond your department.

It got me thinking a lot about remote work practices... I'm somebody who worked remotely long before the pandemic... I spend a ridiculous amount of time just scheduling random meetings with people. Having seen this, I'm like, "Oh. That's why." Because when you're remote, you don't get those casual connections; you have to be extremely deliberate about it.

**Jerod Santo:** Right.

**Kevin Ball:** I thought it was interesting, I thought it was worth considering for, both as individuals, like "How do we make sure that if we're still working remotely, we're maintaining those connections?", but then also for folks who are running teams, to say "Okay, check in with your team. Are they still connecting to people outside their team?" How do we make sure that we maintain those diverse connections? Because that's where -- I mean, for me, that's where the fun stuff is. I know what my team is working on. It's neat to learn about what other teams are working on, and often, those conversations generate new ideas and breakthroughs.

**Jerod Santo:** Yeah, absolutely. Amelia, you joined GitHub, and you probably have never been -- I mean, did you go to the HQ? I'm guessing you've been remote-only since you joined...

**Amelia Wattenberger:** I actually had a full job during the pandemic before GitHub, where I met one of my co-workers really briefly, but I basically still haven't met any of them... And it's strange. And I definitely get that my team is really small, we're four people, and we hang out with each other a lot, and we hang out with other people very much not a lot.

It's also interesting - in a physical office there's proximity between teams; there's other teams who you sit near... So I wonder what the remote proximity is like. Is there anyone who's closer than anyone else, like, digitally? Probably not.

**Jerod Santo:** You need a study. You need to perform a study to find the answers to these things.

**Amelia Wattenberger:** It's too much work.

**Jerod Santo:** Yeah. \[laughs\] \[unintelligible 00:07:06.05\] Chris, what about you? Were you remote the entire time, or you went remote? I can't recall.

**Christopher Hiller:** I've been remote for like a decade now. I don't really remember what it's like to work in an office.

**Jerod Santo:** Yeah. Same. So one thing I've read which ties in with what you've found, Kball, is interesting, about the culture changes in and around Apple because of their adoption of company-wide Slack. I think it's a Verge article which maybe I can find and link up... And I'm not sure if the move to Slack coincided with the remote or came before that. Whatever it is, still, you're using mostly these chat and digital tools to communicate company-wide... And how that changed dramatically the relationships cross-functionally, or even vertically inside the company, because now you have direct access to folks that you otherwise would have had to go upstairs and talk to if you were at HQ. There's lots of things that change, and change quite dramatically, because so many people went remote in dramatic fashion, thinking it was temporary, and now kind of having pushback by employees saying "No, no, no. This is better."

\[08:13\] So we can find that one as well, but I think things are changing inside of organizations due to this. Some for the better, and some for the worst.

**Kevin Ball:** Apple is a really interesting example too, because they are historically so incredibly private and siloed.

**Jerod Santo:** Yeah. Not so much anymore. In fact, I just saw today that Tim Cook made some sort of statement that people who leak are not Apple people. And that information came from a leak out of Apple. \[laughter\] It was a private thing that leaked... So the irony there is quite thick.

Well, let's get to some other stories. Definitely, the remote work thing is an ongoing and very important story and aspect of our lives... Amelia, yours are a little bit more technical and nitty-gritty. Do you wanna share your story of the week?

**Amelia Wattenberger:** Yeah... I couldn't think of anything that happened recently, so I just picked two things. The first one is a little bit newsy, but it's CSS container queries are in the Chrome Canary. Super-exciting. This is like -- so you know how you can have \[unintelligible 00:09:16.12\] in CSS, and you can say something is 10% of the width? Well, now in (only) Chrome Canary you can base it on its container. So you can say "I want this image to be 10% of the width", but you can also do more complicated things, like stack things differently... I haven't totally read into it yet, but it's very exciting. I'm excited to read about it, I'm excited to use it sometime in the future.

The other thing that's not newsy, that I think is really cool is Harry Roberts - he did some talk that you can't listen to, but you can see the slides, and he released this CSS snippet where it basically turns all of the links and scripts and things in the head of your document into visible things. Basically, they exist, they're just not visible. With a little bit of CSS, you can make these things visible. And if you use it on any web page, you can see things that are maybe not as performant as you want them to be. It'll highlight if your title is blocked by some blocking JavaScript that has to execute before crawlers \[unintelligible 00:10:33.04\] I don't know, I think it's super-cool that you can just use a litlte bit of CSS and get this kind of performance report.

**Jerod Santo:** That is cool. So it provides a bookmarklet; drag and drop the following link in your bookmark bar. So you can do that on any website, right? You just click that and it's gonna show you that.

**Amelia Wattenberger:** Mm-hm.

**Jerod Santo:** That's spectacular. This is very cool. And it gets an award for Pun of the Day, because it's called Check your Head. Get it? Check your Head...

**Amelia Wattenberger:** Yeah, he's got a ton of puns in his slides. If you like puns, you should go through the slides. I don't remember them though.

**Christopher Hiller:** I like the Beastie Boys...

**Jerod Santo:** \[laughs\] There you go. If you like puns or if you like the Beastie Boys, this is an article for you. Well, since yours aren't exactly news, I think it's fit to share mine, because mine's not newsy at all. In fact, mine is an article that wasn't even posted recently. It was posted in July.

**Kevin Ball:** Hey, that's recent... Isn't it?

**Jerod Santo:** Actually, that's gonna be a part of this conversation. Very poetically so, months later I'm reading this... And it's by Rach Smith, and her article says "I completely ignored the frontend development scene for six months. It was fine." And it's not the "It was fine" with the dog and fire who's saying that everything's fine; this is like actually okay. So if you don't know who Rach Smith is, she is a long-time developer. She works at Codepen, and has been publishing on the web for many years, so I've read her stuff over the years. In fact, she says in this post she first started coding professionally -- it was with Adobe Flash. Then Steve Jobs decided to kill Flash, and it forced her to learn how to animate things with JavaScript, CSS 3 and HTML Canvas.

\[12:20\] She goes on to talk about a long progression in her career in which things moved fast and she was always trying to keep up... And then nine years passed, she took six months off, and as many of us do, we think if we're taking six months off from the frontend scene, or heck, from the web scene in general, that you're gonna be light years behind when you come back. But she found that not to be the case... So she says what she learned through this experience is that the number of languages she's learned, or the specific framework she's gained experience with matters very little. What actually matters is her ability to upskill quickly and effectively.

I appreciate Rach for sharing this, because it's something that -- I think it's a nice reminder that things do move fast, and the list of technologies on any given job post are changing all the time... And many times they'll want you to have ten years experience, and I think this has been out for eight years, or such monstrosities as that... But our fear of missing out, our fear of falling behind isn't not real, but isn't always well-placed. The technologies change, shift, but the foundations, the fundamentals and the skills that you're building transcend those technologies... So you're gonna be just fine. You're gonna be okay. I thought that that was a good story for this week, even though it was a story for a week in July. What do you think, Kball?

**Kevin Ball:** I've spent 2,5 or 3 years publishing a weekly frontend development newsletter... And I stopped doing that a few months ago. One, I wanna say that I'm so much happier not keeping up on what's happening every week... \[laughter\] It's so stressful to feel like there's this constant churn, and you've gotta constantly keep up, and do this, and do that.

So I'm personally happier not trying to keep up with everything all the time. I like to catch up every now and then, but if something's big it'll get to me eventually. I don't have to keep \[unintelligible 00:14:16.13\] But the other thing that I learned from doing that is even though there's this sense of constant churn, and I could find tons of articles every week, all the time... Like, the amount of actually new content is pretty low. A lot of times I'd be linking something and I'm like "Oh, this is another take on that thing. That's pretty well done. Maybe this one will work for you." But after doing that for three years of like "Okay, I'm just seeing all the content that's coming through in this space", actual legitimate, new, interesting changes - they're not as frequent as they feel like. We've just got this industry of churn, and this feeling of "I've gotta keep publishing, and I've gotta keep reading, and I've gotta keep doing all these things to keep up." And at the core, it's like - no, there's change, but it's built on the same fundamentals.

**Christopher Hiller:** Where do you think this sort of fear comes from? I see a lot of junior developers lamenting on Twitter that it's hard to keep up, or on Reddit, and they're complaining about it... So is it just you wanna keep up to maximize your career potential, or is it something else? What is the root of that fear of not keeping up with JavaScript?

**Jerod Santo:** Yeah, I think it's fear of irrelevancy. I used to say that tongue-in-cheek, that my greatest virtue as a software developer is fear of irrelevancy, because that means I'm always abreast of what's new and shakin'. And I said that kind of tongue-in-cheek, because it's true, but it's overstated. And as a person who has been in the news for many years - I'm always logging with Changelog News what's fresh and new in open source; it's kind of what we do at Changelog - so I see a lot of things come and go... And I will say that in the last - let's just call it 10 years, the pace of releases and the announcements and the blog posts have multiplied exponentially at the merger of, let's just say, capitalism and open source.

\[16:28\] When everybody jumped on open source as a way of getting ahead for whatever your goals are, waaaay more things came out. I remember when Rails took over back in '04, it was like THE big announcement of the year. There's other projects, but it wasn't like now, where there'll be 5, 6, 7 credibly awesome new things that actually launch on a weekly basis, that you're like "This is a whole world that is really interesting, and is powerful, and it's legit..." And there it is. And you see that across your feeds. So I think social media, to a certain degree, drives that; the FOMO, the feeling that other people are shipping things and you aren't, and then other people that you respect are also liking those things that are being shipped, and maybe you should jump on that ship...

I don't know, there's a lot of just hype, and it's gotten louder and louder and louder. So disconnecting is a nice way to appease those fears... But that's what I'm seeing. Amelia, what do you think about why people have this fear of not catching the next wave, or whatever it is?

**Amelia Wattenberger:** Yeah, that's a really good question. I'm talking through this, I don't actually believe this, but I think there's a lot of ground to cover; more and more things are possible on the web, and there's more and more types of applications, and corporate websites, and marketing websites, and they have to do all these things... Like, you can't just publish a website that doesn't have any CSS on it, even though that's a perfectly functional website.

So I wonder if -- joining the industry, there's just so much to learn, and people don't specialize, at all. When you're just learning, you're not like, "Oh, I'm gonna be a developer for marketing websites." You're like, "I have to learn everything." And then it takes years, five years to get your feet down and actually figure out "Oh, okay, I don't need to know everything. I can only pay attention to things in my own niche", and figuring out where your niche is.

I think really experienced developers probably have all gone through a period where they're really stressed out, and then have hopefully found some sanity and found their own niche they can pay attention to, and not to other things... I wonder if that's just learning what's important. We don't have any tracks, but hopefully in the future we'll have "I wanna be this kind of developer." But I don't know. Maybe not.

**Kevin Ball:** I also wonder how much of this is that -- like, getting your first job in tech is hard.

**Jerod Santo:** Yeah.

**Kevin Ball:** Getting your second, your third, your fourth - not so hard. Once you're kind of in and you have a little bit more of a track record, it becomes a lot easier to find those jobs. And some of that is problems in our hiring practices, and the fact that companies don't wanna hire entry-level folks, because they've gotta invest in them... Some of it is we've got a glut of folks coming in from bootcamps, so there's just a way larger number of entry-level... But getting that first job is hard. So people are kind of looking at these job rec lists and they're like "Oh, this one wants these five things. Well, maybe if I learn those things, I'll have an opportunity there." And "Oh, this one over here - this wants these other five things", and they're trying to bridge across all the different things, so they can apply to all the different jobs to get their first job... Because it's hard, and they're getting a lot of rejections along the way.

\[19:53\] This is pure speculation, because it's been a long time since I was in that boat; I won't date myself on that, but... I have this feeling like the way that we hire junior folks is contributing to the FOMO. Those of us who are more senior or who are helping make hiring decisions or things like that - there are things that we can do, that would reduce some of that FOMO.

**Jerod Santo:** I think so. I think focusing in on individual technologies is one of the things. I was just also, I guess, thinking about the fact that this blog post comes from a very experienced developer, so it's kind of a mature thought, and why is that... And I think it's because when you just get started, maybe you only know one thing. If you're just like, "I learned React, sorta, and I can do stuff with it", something else coming and replacing React is existential at that point. Maybe that's where it comes from. I mean, if all I knew was Ruby on Rails, and all of a sudden Django was all anybody was hiring for, I need to learn something else, or get a different career.

So I think maybe over time, as you realize you can kind of collect to yourself these different technologies -- but as I said earlier, and as Rach says in that post, the underlying, foundational understanding of software is what really transcends and matters, then you can kind of chill out and relax. But when you don't know any better, you don't know any better. And when the jobs are so focused on these hiring practices that target these specific things, then something replacing that is legitimately scary, with regards to career at least.

Lots of thoughts there... A couple of good things coming out in the chat. One thing that Matt said which I thought was good is it's a good idea to wait to see what sticks, too. The other thing you see over time is how many things come and go, and jumping onto something too early, that's gonna fail, is gonna end up being a waste of time as well. So yeah, not following so closely, or at least not investing too much in brand new things, and waiting to see how it shakes out before you decide "Yeah, that's something worth investing my time in."

**Christopher Hiller:** Yeah, it's like these job postings that list all these technologies - you know, React, or AWS, whatever they want you to do... And then you get to the interview, and the interview is like whiteboard questions. It has nothing to do with any of that stuff.

**Jerod Santo:** Right.

**Christopher Hiller:** So maybe you weren't really prepared for it, maybe you're not good at that stuff... It's like, "Okay, I went out and I learned React so I could get jobs like this, but now I can't get jobs like this because I've gotta go back and \[unintelligible 00:22:25.08\]" I don't know, it's busted.

**Jerod Santo:** It's busted. Well, let's turn briefly to something that is still kind of busted, but gets better every single time a new release comes out. Chris, you wanna talk about iOS 15, right?

**Christopher Hiller:** Well, yeah. So I've been heads down on a thing that I've been working on for the past couple of weeks, and I saw there was some sort of announcement about iOS 15... But I am completely ignorant, and I have no idea what's in it, and I have no idea what that means, especially for the mobile web, and Safari, and iOS. Can anybody help me, please?

**Kevin Ball:** Well, I heard that it does some bizarre design change to where the address bar is. Like, it moves it to the bottom instead of the top, which is just messing with my brain here...

**Jerod Santo:** Yes. So I actually like it on the bottom. I did not run the betas, but I know there's a lot of discussion around the betas, because it moved a lot, throughout. It was a very dramatic redesign, which has been changed throughout the betas, and finally settled; it still is at the bottom. You can put it back at the top. This is the address bar and the tabs. So the nice thing about it on the bottom is that it's easier to get with your thumb, and just to swipe, and stuff... So there are some virtues to having it there.

There are other aspects of the browser which the UI also has thrown people for a loop, but in terms of web development, I guess -- I'm not sure how relevant that topic is for us web devs. I think in web developer world the main thing is it's still one rendering engine to rule them all, and Apple has not released their grip on WebKit-only-based browsers in iOS 15. That would be an amazing change and boon for web developers, to allow the Chromes and the Firefoxes and the Edges and the mobile Brave browsers to bring their own rendering engine. That didn't change. In fact, JS Party panelist Feross has taken to Twitter and started posting these very interesting and fun browser-ban tweets with some memes he's created to try to convince Apple to release their grip on the browsers inside of iOS. But that has not changed. That would be huge.

\[24:44\] There are a few things that are new. I think the biggest one is probably the web extensions. Apple brought web extensions to Safari and macOS last year, and now they're bringing it to iOS, so people can write extensions for Safari, with web technologies, and they will run inside of Safari to do various things. That's pretty cool.

**Christopher Hiller:** So you can run any sort of extension on mobile Safari?

**Jerod Santo:** Yes, you can run extensions on mobile Safari.

**Christopher Hiller:** Like uBlock Origin?

**Jerod Santo:** Yeah, exactly. Well, that was already available. Content blockers were already approved prior to this. But this opens it up even more so. One example of that that I have been running is Apollo - which is a popular Reddit app, which is better that Reddit's Reddit app - has built in an extension, so now inside of Safari if you click a Reddit link, you can set it up to automatically open an Apollo, versus going to Safari's mobile view that wants to launch the Reddit app, and if you don't use the Reddit app, it won't blah-blah-blah.

So that's like just one example. Another one that's cool is there's a macOS extension called Apple Keywords Search, or Safari Keywords search, which allows you to throw in shortcuts into the search bar, and automatically search Amazon, automatically search Imdb, whatever you can imagine. And that was only on macOS Safari for a while, and now, since iOS 15, you can now get that on mobile Safari... Which is great, because on mobile you're already trying to type less letters to get to searches. So that's extending the built-in search inside the address bar in mobile Safari. So those are a few examples of what people are doing with them.

**Kevin Ball:** I wanna go back to that address bar more again. Do they expose that via media query, or something? Because I know a lot of folks will write mobile web apps and they'll try to do the style of like the bottom nav bar that mirrors the iOS thing, or things like that. And I feel like that gets kind of weird if you've shifted around where the address bar and things are. So is that exposed to developers, to be able to tell?

**Jerod Santo:** That I don't know. But I feel like those UI's fell by the wayside when Apple did their big redesign back in iOS 5, or something... I haven't seen those tabbed brow-- like, that was a thing that people did with Mobile jQuery, or jQuery Mobile, but I'm not sure people are really doing lower tabbed base navigation in their web apps like they used to, unless they're maybe a litlte bit older. But I don't know if you can actually detect it or not. To me I just think it's the viewport starts above wherever that is, and that's just kind of how it works. Maybe you can.

There's also some other small improvements, things that were in beta, web features... But apparently, the link that I've put into our show notes is dead now, so I can't click on it and read those... So let's forget about it. I'll put that in the show notes if people are interested in certain small things, like new CSS features, new JavaScript features, can read through those. We'll be right back with Explain It like I'm Five."

**Break:** \[27:50\]

**Jerod Santo:** Alright, we are here, and it is time for Explain It like I'm Five. Kball, what have you got? Virtual DOM. That sounds complex. Can you explain it like I'm five?

**Kevin Ball:** So this is something that I think was initially made famous by React, and has been adopted by many, but not all advanced JavaScript frameworks. To explain it like I'm explaining it to a five-year-old, I'm gonna go into the physical world. Imagine that you have a room with furniture in it - a bunch of couches, and tables, and chairs... And you wanna move it around. You wanna reorganize things.

Now, one way you could approach this is you could say "Okay, to do this in order - so I'm gonna move that chair over across the room. And in order to do that, I actually need to move this couch out of the way, and then I'm gonna move the chair, and then I'll put the couch back where it started...", kind of moving things around.

Then you say "Okay, now that chair is where I want it to be. Let me move something out. Okay, this table. I wanna move this table. So let me pick this table up, move it -- ohh... Where I want it to go has something else in, and I've gotta push that out of the way. Now I'll put the table there."

So you're doing these changes one by one, and they're fairly expensive. You've gotta move a bunch of stuff around to move things. That is changing things in the DOM. I have a web page, I'm moving stuff around... Anytime I touch something in the DOM itself, it's pretty expensive. It takes a bunch of time; maybe I've gotta move other things around, reflow the browser, all that sort of thing.

Now, in a physical world, I could do this faster by saying, "Okay, let me first actually make a little model of my room. I'm gonna have a toy version of the room, or I'm gonna have papers, or maybe I'm advanced and I have a computer model of my room..." I wanna move around all the different pieces, and I'm gonna say, "Okay, I'm gonna move the chair there, and the couch there, and the chair there... Okay. Now I've got every change that I wanna make", and I look at that and I say "Okay, what's the smallest possible difference from my room as it is? What's the smallest change I can make? Okay, I still need to move this couch out of the way, but I know where it's going, so I'll move that first, put it where it's going, move the chair over, move the table, do all the moves at once, so I can minimize the amount of work I'm actually doing, and speed it up a lot."

That little model that I did, that is the virtual DOM. So what React and one of these other frameworks will do is it'll pool together a set of changes that you wanna make to the DOM and it'll say "Okay, we're gonna rearrange things, we're gonna put this title there, we're changing the text here, we're moving this around... Let's gather up all those changes, analyze to say "Okay, what's the smallest possible difference that we can make to make those changes true?" and then do that change all at once, so that all our shared work of moving things out of the way, or reflowing, or whatever it happens to be, happens exactly once.

So the virtual DOM is a representation of the DOM as a model, in JavaScript, that lets you do all that manipulation the cheap and easy way, and figure out what's the smallest possible change I need to do in the real, expensive, physical world, in this case the DOM, and do that all at once. There you have, the virtual DOM, as if you're five.

**Jerod Santo:** Pretty good, Kball. Pretty good. I'm starting to feel like mine is gonna be terrible.

**Amelia Wattenberger:** Yeah, I'm feeling really bad about mine after that... \[laughter\]

**Jerod Santo:** This is why we should have saved Kball for last. Alright... Pass it over to Chris, who said "Please don't make me go first", so I'm making him go second. Chris, you're gonna explain variable hoisting, right?

**Christopher Hiller:** \[32:24\] Yeah. So I'm trying to explain hoisting in JavaScript.

**Jerod Santo:** Hoisting.

**Christopher Hiller:** So it's kind of like -- so you... Oh, my God. Come back to me, come back to me...

**Jerod Santo:** \[laughs\] I love his game. I'm gonna come back to Chris. We're gonna go to Amelia.

**Amelia Wattenberger:** Alright. I'm going to explain the CSS cascade as if I were five. I mean, as if --

**Jerod Santo:** Oh, that's a whole different angle at the game, explain it as if you were the one who's five...

**Amelia Wattenberger:** It's gonna be some combination; I think we're both five in this scenario... \[laughs\] Alright. So what's a game that kids play? Let's say it's like playing Thumb War, where I want something to be a certain way, and you want something to look a certain way... Let's say we want our toy to be orange or green. Alright, so there's four stages to this Thumb War, and if anybody wins any of the stages, then they win, and the toy is whatever color they want it to be.

So the first stage of our Thumb War is basically looking at importance. This is where the metaphor is gonna break down... \[laughter\]

**Jerod Santo:** My thumb's more important than your thumb.

**Kevin Ball:** Exactly. Jinx!

**Amelia Wattenberger:** \[laughs\] Okay, okay... Let's keep going with that. So there's four levels of how important your thumb is. The first is if one of our thumbs is in an act of transition, then we're on the first tier of this tier. The second level is if one of our thumbs uses "bang important." The third level is if it's in an active animation, and the fourth is everything else.

So in this tier, each thumb has a level -1, 2, 3 or 4. The smaller number wins. So most likely, both of our thumbs are in the normal category, so - ding-ding-ding, we ran out of time; no one wins this round of the thumb war.

The second tier of the thumb war is origins. So where your thumb came from. \[laughter\] Alright, there's three levels to this. There's whether your thumb came from the website, so it's website styles - which is usually what you're dealing with as a web developer. And then the second one user-defined styles. So maybe you painted your thumb. And the third level is browser-defined styles; so whether a browser painted your thumb.

**Jerod Santo:** Like, somebody else painted it before you got there.

**Amelia Wattenberger:** Yeah.

**Kevin Ball:** So that's like when I paint my nails, versus when my kids paint my nails.

**Jerod Santo:** There you go.

**Amelia Wattenberger:** Exactly. So... This metaphor is making it more confusing, isn't it? So if it's on a website vs. a user-defined style, then the website styles win. If it's going up against the browser default styles - like there's a default button style - then that gets overridden really easily; you can basically just write any styles for your website.

Alright, tier two is over. We're both website-defined styles. Nobody wins. Tier three - this is the longest one, and this is the one you're usually dealing with when you're writing styles for a website... The first level is in-line styles. So... I cannot relate this to a thumb, but basically, you have a style attribute on an element, you say "color red", that's the first level. The second level is whether it's based on an ID; so if this is like a CSS rule that's targeting a selector that has an ID in it. The third level is classes, attributes, or pseudo-classes, so CSS rules that target any of those, and the fourth rule is a type or pseudo-element.

\[36:18\] So in-line styles always win, and then for the rest of them, you kind of have to add up how many IDs, which are level two classes attributes, or pseudo-classes, which are level three, and types or pseudo-elements, which are level four. And whichever number is largest or smallest - that style wins.

Alright, we're almost over. Let's say there's a tie on that one, which - there very rarely is. Say there's two in-line styles. The last tier is position. So if one CSS style comes first and the other comes last, that later one will win. So that'll pretty much make sure there aren't any ties, because you can't define things at the same time.

And that is how thumb wars work in the web world. \[laughter\]

**Jerod Santo:** I like it. I wonder if a Paper, Rock, Scissors metaphor would have also been able to be used...

**Amelia Wattenberger:** It might have been better.

**Jerod Santo:** Because like, this one always beats that one, for example.

**Kevin Ball:** I was just trying to figure out in-line styles - is that like if I tattoo under my thumbnail, or something? \[laughter\]

**Amelia Wattenberger:** Yeah, I don't know... You have to inject it into your thumb, which - not advisable.

**Jerod Santo:** Maybe it'd have to be like a Henna tattoo, because JavaScript can always come and change those. Nothing's permanent.

**Kevin Ball:** Somehow the color of your thumb influences if you capture the other player's thumb... I'm digging this.

**Jerod Santo:** I like it, too. Although, whenever I'm ready to thumb war, I always bring my separate hand in and just put it over the top, and declare victory... So maybe that's like --

**Kevin Ball:** Oh, my kids do that 100%. They like to have both of them. So one gets one hand, and they have both of their hands on that, and the other gets the other hand, and both of their hands on that...

**Jerod Santo:** Right. There's your "bang important" right there.

**Amelia Wattenberger:** Yeah, exactly.

**Jerod Santo:** Alright, Chris, are you ready? Or should we stall a whole other round? Because I could go.

**Christopher Hiller:** No, no, no. Let's do it.

**Jerod Santo:** Okay, here we go.

**Christopher Hiller:** I'm gonna explain the function hoisting like you are five. So say you are at the park, and you see a playground. In your hand is a muffin. You have a muffin. And so you see the playground, and you run over there, and you wanna climb up to the top. And you need both hands to climb up to the top, because there's like a ladder, so you dropped your muffin in the sawdust. And you climb all the way to the top, and it's awesome, and you are hungry now. You wanna eat your muffin, but it's in the sawdust. So function hoisting would allow you to eat your muffin even though you're on top of the play structure.

**Kevin Ball:** But is it the Invisible Sawdust Fairy that picks the muffin up and raises it to the top?

**Christopher Hiller:** Yes, Sawdust Fairy, Muffin Fairies get your muffin. They will magically take the muffins out of the sawdust and put them in your mouth.

**Jerod Santo:** That sounds magical. It sounds kind of scary, too.

**Amelia Wattenberger:** Yeah, now I wanna use it. \[laughter\]

**Jerod Santo:** It's like, all of a sudden there's a muffin in your mouth, and you're like "What?!" \[laughter\]

**Kevin Ball:** JavaScript! The language of Sawdust Fairies.

**Christopher Hiller:** The muffin fairy is actually your mom or dad... And they hide it from you, but they give you the muffin.

**Jerod Santo:** Alright. That's less scary. Thank you for changing that for me. So I should say that all of these topics were submitted by people in the chat, so I appreciate that...

**Christopher Hiller:** Okay, but wait - did that make sense?

**Jerod Santo:** Yeah, man.

**Kevin Ball:** Nah...

**Jerod Santo:** Magical Sawdust Muffin Fairies. I was with it. Kball, you're saying no. You're against.

**Christopher Hiller:** Did it, or no?

**Jerod Santo:** Amelia's just staring off into the sky, thinking about it. She's like "Does it? Does it make sense...?"

**Amelia Wattenberger:** I was trying to think, but then I kept listening.

**Jerod Santo:** Yeah.

**Kevin Ball:** So your muffin is your function or variable? Is that right?

**Christopher Hiller:** Yeah.

**Kevin Ball:** And you wanna use it, but you're up at the top.

**Christopher Hiller:** \[40:09\] Mm-hm...

**Jerod Santo:** And it was down there in the sawdust.

**Kevin Ball:** Your muffin started down in the sawdust, because you defined it later?

**Jerod Santo:** Yeah, you defined it down there, but actually it got hoisted up.

**Kevin Ball:** Sure. Okay.

**Christopher Hiller:** I did my best.

**Kevin Ball:** I don't have anything better... \[laughter\]

**Jerod Santo:** He's like, "Come on, man...!"

**Christopher Hiller:** I did my best.

**Kevin Ball:** "I don't have anything better, and I love the Muffin Fairy." We were talking about this a little bit earlier... The real truth is that hoisting just doesn't actually make any sense... Like, why do you do that?

**Christopher Hiller:** No, it's magical. I'm sitting here, I'm trying to think of "Okay, how can I explain this in real-world terms, in things that actually make sense?" and you can't, because it's nonsense, and you've gotta come up with a Muffin Fairy.

**Kevin Ball:** It's nonsense, exactly...

**Jerod Santo:** \[laughs\]

**Kevin Ball:** So I think given the nonsense that is variable and function hoisting, your Muffin Fairy is an excellent explanation.

**Christopher Hiller:** Yeah.

**Jerod Santo:** There you go. It doesn't make any sense... Why is this muffin suddenly in my mouth? I don't know why it's here. I thought I'd put it down in the sawdust.

**Christopher Hiller:** I think this is actually a great argument against hoisting.

**Jerod Santo:** Exactly. \[laughs\] You well elucidated why I don't like hoisting.

**Kevin Ball:** Yup, 100%. You've done it well. Chris, I withdraw my objection; given the nonsense that is hoisting, your explanation is perfect.

**Jerod Santo:** On the same note though, this is like the principle of least surprise. I mean, the thing should be defined where I define it. Don't magically move it somewhere else. That to me is a surprise, and I'm always surprised. I'm like, "Oh, I have to remember this random thing it does for me on my behalf. Thanks a lot, mom and dad. I don't even like muffins, so I've put it in the sawdust."

Alright, now can we move on? Because I have Docker. And while Chris had to invent just off the top of his head an amazing metaphor for hoisting, Docker is a metaphor. So I'm just gonna use that one. So hey, kids - do you know how computers programs are flaky, and they always break, and stuff, and that's annoying? Like, it works on this machine, but not on that machine? Or it always crashes? Well, that's because computer programs are a lot like the way people ship produce around the world.

So in the old days, if I had some bananas in Asia, and some oranges in Africa, and some pineapples also in Africa - these also grow other places, but that's just where they were... And I wanna ship them to America to eat them here - you would have to have a different way of handling it for each kind of good. So bananas have their own rules, pineapples... What's the other thing I said? ...it also has its own rules... And so everybody along the way that shipped that to me so I could eat it here - they would have to handle it in a very specific way, and that's flaky; it can break. Until the invention of shipping containers.

The cool thing about shipping containers is they're all the same exact size, and the same dimensions, and they're stackable. And so you can take your shipping container, you can throw your bananas in it, you can throw your pineapples in it... I still can't remember the third piece of produce that I name - so you still throw that one in there, and now every single boat, every single train, the forklifts, everything along the way doesn't have to care what kind of thing it is, they just move the containers from where they started to where you want them, and you can just eat those bananas and those apples, and that third mystery fruit.

**Amelia Wattenberger:** It's oranges.

**Jerod Santo:** Oranges, thank you. \[laughter\]

**Kevin Ball:** For some reason, they're coming from overseas, instead of Florida.

**Jerod Santo:** I didn't think about this very long. And that's what Docker is for computers. You just package up all the details of that particular thing that you wanna ship somewhere else and run, and you put it into this Docker container, and nobody has to care how the insides work. They just run it over there, it's all self-contained, like a shipping container. It's almost like you have a docker/shipping container metaphor that's just waiting to be used. There we go. How did I do?

**Amelia Wattenberger:** \[44:06\] It was great. I was just thinking about how much money I would pay for a kid's book with all of these things in it.

**Jerod Santo:** Oh, that would be kind of cool... Because we've done these throughout the years; we could actually gather up a bunch of them.

**Amelia Wattenberger:** That would be so good.

**Jerod Santo:** And then pay someone to animate it.

**Kevin Ball:** I was gonna say, what about an animated short? I think Nick's story - from whenever that was - would just be priceless.

**Jerod Santo:** Yeah, Nick went on like a 15-minute tale. What was he explaining that one day?

**Kevin Ball:** React Hooks.

**Jerod Santo:** And he used Moana?

**Kevin Ball:** He used Moana and Coco.

**Jerod Santo:** And he merged the movies...

**Kevin Ball:** Yeah, the merge was a little stretched. I felt like there was a lot of good Moana stuff, and then the Coco reference was a little bit like, "Um, okay..."

**Jerod Santo:** Yeah. He was grasping at straws, but he still got an episode named after him. I think it's called Monad's Hook.

**Kevin Ball:** Yes.

**Jerod Santo:** So go look that one up and listen to that one.

**Kevin Ball:** I regularly referenced that to folks who are like, "What's a good episode?" and I'm like, "Well, if you wanna laugh, go listen to Nick in this episode."

**Jerod Santo:** Yeah, totally. \[laughs\] Or "The Tailwind beneath my wings", which is to this day my most pride moment on JS Party...

**Kevin Ball:** That one was delightful.

**Jerod Santo:** ...when we managed to work in all the lyrics to "Wind beneath my wings" into a conversation about Tailwind. And only had the grace to tell Adam Wathan and Feross about it midway through the show... And then managed to put it all together, and land it with our own cover of the song to open up the show. So definitely also, if you wanna laugh and just be super-impressed by our musical talents, go listen to that episode as well.

**Kevin Ball:** Nick Nisi once again carried that episode. He did incredible.

**Jerod Santo:** Yeah. Because I was gonna bail on the idea, because it was getting so awkward, and Nick just stuck to it, and I'm like "This is happening. We're doing it all the way through." Alright, this has been Explain it like I'm Five. We'll be right back for "I'm excited about X", where X is literally... Anything!

**Break**: \[45:59\]

**Jerod Santo:** So Chris, do you have anything you're excited about?

**Christopher Hiller:** This is hard for me.

**Jerod Santo:** It can be anything. I know... This is against your personality. \[laughter\]

**Kevin Ball:** My six-year-old has got me into Taylor Swift recently. I was never a TSwift fan, and then my six-year-old is mad about TSwift... And there's a song that is "This is me trying", and I just saw you, and I was like, "Yeah, this is Chris trying."

**Christopher Hiller:** This is me trying.

**Jerod Santo:** He's \[unintelligible 00:47:47.13\] to be excited about something.

**Christopher Hiller:** So - alright, you know Legos? I like Legos.

**Jerod Santo:** Yeah.

**Christopher Hiller:** \[47:54\] So I'm gonna talk about Legos. They've got this Lego Ideas. If you don't know what that is - it's kind of like a contest. You make something with a Lego, you upload it to the site, and then people come and they vote on it. And if you get like 10,000 votes on your thing that you made, the Lego team and their designers will make sure that they can get the rights to whatever you've made, if it's like a licensed thing. But they'll work with you to actually make it a real Lego set, and they'll release it. There have been a whole bunch of these over the years. There was like \[unintelligible 00:48:34.05\] there was a fishing cabin, like a great, big fishing thing... Lots of other ideas. And birds, and things like that. Just random stuff. And I always get kind of excited when I see that another thing has made it to 10,000, because the ones that get that many votes are always really awesome, and I'm like, "Wow, I can't wait to not justify spending $300 on that when it comes out." But they're cool. There's so many things people make, and... I don't know, I'm just really impressed. And that's what I'm excited about, I guess.

**Jerod Santo:** How could would it be to have your thing made into an actual Lego set? That would be just amazingly cool.

**Christopher Hiller:** Yeah.

**Kevin Ball:** That's super-cool. And it's such a great example of a company that is not just listening to their customers, but it's really engaging with them, and being like "Okay, Lego superfans, let's make stuff together!"

**Christopher Hiller:** The people that are submitting these things - these aren't kids. They're adults with lives, and they enjoy Lego... Which makes me not feel so stupid and nerdy. People like me - maybe not like me, because I suck at doing that sort of thing... But they build these things out of this toy, and they get real Lego sets. And then when the set comes out, there's always a really fancy booklet about the design, and it talks about the designer... So that must be a real thrill for people.

**Jerod Santo:** Mm-hm. Have you watched the Lego Masters game show on TV?

**Christopher Hiller:** I tried to watch the first episode, but I don't really like things like that.

**Jerod Santo:** The stuff they built is absolutely amazing... But if you don't like things, and stuff, it is one of those.

**Christopher Hiller:** I don't...

**Amelia Wattenberger:** I don't have kids as an excuse to have Legos, although you definitely don't need that excuse... But I got to play with them recently, because GitHub had swag for our internal conference of like - you put together a little \[unintelligible 00:50:38.00\] and you get this whole kit... And it was so much fun. I'm gonna break it apart and do it again, I had that much fun.

**Christopher Hiller:** Buy some Legos.

**Jerod Santo:** I've never been the break it apart and do it again kind of person... I would just do it once, put it on the shelf, and stare at it. \[laughter\]

**Amelia Wattenberger:** I might also do that. It was a lot of work.

**Christopher Hiller:** It's cool, because you're building a thing and you get this feeling of accomplishment, even though what you have done isn't really that hard... But it looks cool, and you did it.

**Jerod Santo:** But it does prove you can follow directions.

**Christopher Hiller:** True.

**Amelia Wattenberger:** I actually failed at that part. I didn't follow the directions, and mine turned out weird, but... It doesn't always prove that.

**Jerod Santo:** Did you also color outside of the lines in kindergarten?

**Amelia Wattenberger:** I definitely did.

**Jerod Santo:** Yeah.

**Kevin Ball:** We do a lot of Legos in our house, and anytime you have something like that, or you can't find the right color block so you fill it in, we just call it "That's being creative." You've gotta be creative with your Legos.

**Jerod Santo:** I hate that, because I'm a perfectionist/completionist. So I'll look forever for that color... Like, hours. I've gotta find a black, flat, 2x1. If I don't find it, I'm not gonna finish the piece.

**Kevin Ball:** Yeah, that's what we're trying to cut off \[unintelligible 00:51:47.07\] with my kids.

**Jerod Santo:** That's smart. I'm not saying my way is good, I just can't stand having that one weird colored thing.

**Christopher Hiller:** I'm like you, Jerod... And basically, it creates paralysis, where you can't finish the thing until you find the right piece, the black 2x1 tile.

**Kevin Ball:** Just reimagine it. You're practicing being creative.

**Jerod Santo:** \[laughs\]

**Christopher Hiller:** \[52:09\] I don't wanna be creative. I wanna follow directions and make the thing.

**Jerod Santo:** Right. I want it to look awesome.

**Christopher Hiller:** Yeah.

**Jerod Santo:** Different personalities. Hilarious. Alright, let's move on. Amelia, what are you excited about?

**Amelia Wattenberger:** I have two things. The first one is just a concept... WebRTC - I was playing with it recently, it's super-cool. I had never played with it. Multiplayer web things are very easy when you're using it.

**Kevin Ball:** Have you hung out with Feross?

**Amelia Wattenberger:** I haven't, actually. But I want to.

**Jerod Santo:** I've gotta get you two across those streams, because yeah, he's a WebRTC fiend.

**Amelia Wattenberger:** Yeah, it's super-cool. It just connects your browser to other people using the same... Connection? I don't know what they're called. But it's really hard until it clicks, and then it's really easy to do things that I am very impressed by.

And the other thing I'm really excited about right now is generative art, which - there's a lot of opinions here, but I feel like as developers we wanna be creative with our code... Unless maybe we're being perfectionist about what we wanna create... \[laughter\] It's like Legos in the browser, where you can use random as part of what creates the art, or some other input that you don't totally have control over, so you're kind of like working with a computer to make something cool, and you don't have to do it all yourself, and you can use these skills that you use every day to make things that please you visually... So it's been something I've been really enjoying recently.

**Jerod Santo:** Very cool. I like the conversation around generative art, especially when you get into the full deep learning generated art, and authorship, and intellectual property, and these things... Because it gets very grey in terms of who actually created what, and do we assign authorship to GPUs etc. Kball, what are you excited about?

**Kevin Ball:** I am excited about a virtual conference that happened recently, that I did not attend, but they have posted all their videos online and I've been going through them... Which is LeadDev did a conference focused on Staff+, so like senior IC engineers, that has a bunch of really cool stuff in it. I find it -- I'm really happy to see people publishing content that is focused on senior folks that are still in very technical roles, and not just assuming that as you get senior, you become a manager, and only providing engineering manager content. So yeah, go check that out. You create a free account and you can access all of it... And we will, I'm sure, have a link in the show notes.

**Jerod Santo:** Absolutely. Very cool. Well, last but not least, I'm excited, because we're getting close to episode number 200, and we'd love to do something special, since it's a nice, round number. We don't have any ideas as of yet, so we are soliciting ideas from listeners in teh JS Party channel. We'll of course be thinking as well about something we can do to celebrate a little bit our 200th episode, which is five recordings away.

What I'm not so excited about is that our rival podcast, Go Time, those ghouls over there at Go Time are hitting 200 this week. And they have stolen our Frontend Feud format. They're calling it Gophers Say... And they're recording that one live. So if you love Frontend Feud and you don't mind, you can stomach a little bit of people talking about Golang and stuff, then I guess you could listen to that, because it'll probably be a lot like Frontend Feud... But just a poor impression. So I can't exactly recommend it, but I'm not gonna stop you from going to GoTime.fm/200 and listen to that episode... And then come right back to us and help us figure out an even better thing to do for our 200th episode coming right up.

**Kevin Ball:** Hey, there's a Golang Web Assembly compilation and runtime, right? So you could imagine that they're talking about that, and it's for the web, and therefore, if they knew what they were doing, they would be talking about it on JS Party; but since they don't, they can do it on their own episode.

**Jerod Santo:** I like that. This is kind of like GoTime web dev fan fic. Like, you're just listening, but you're tricking yourself into a whole other storyline, where there are actually web people. This might work... If you can pull that off, you should come on JS Party for our next Explain it like I'm Five, because you have a great imagination, and you can probably explain things much better than I can, like I'm five.

Well, that's our show for today. Thanks for hanging out. Hopefully, you learned something. Hopefully, you laughed a little, or at least rolled your eyes a lot. Kball, Amelia and Chris - thanks for partying with me today. That's JS Party for this week. We'll talk to y'all next time!

**Outro:** \[56:55\]

**Horse JS:** Don't be the last kid on your block to get Firebase JS SDK 9.0.0. Don't be.
