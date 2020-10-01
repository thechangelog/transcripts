**Jerod Santo:** Feross, we first met you on the Changelog back in 2016, three years ago now. We talked about WebTorrent. You were the creator and maintainer of that project; you're still the maintainer, I assume. Today we're here to talk about all things maintainery. I should say since then you've joined us on JS Party, you're a regular panelist on that show as well. You maintain 100+ open source projects, which are downloaded 100+ million times per month, according to your GitHub bio... So we've got a lot of maintainer things to talk about. First of all, thanks for joining us.

**Feross Aboukhadijeh:** Yeah, of course. It's awesome to be here.

**Jerod Santo:** One of the things we may or may not focus on, but which you shared recently on JS Party - for those interested, on episode \#83; I think it's called "An honest conversation about burnout." You shared your story about maintainer burnout in open source, so for those interested to go deep into that, definitely listen to that episode. But Feross, if you wanna give just a quick brief on that... It might be useful to get things started.

**Feross Aboukhadijeh:** Yeah, in that episode we talked about different kinds of burnout, and I brought the perspective of the open source maintainer to the table there... Because of course, there's other kinds of burnout as well - job burnout, or stuff like that. I think with being a maintainer the source of burnout is at some point your project that you're in charge of just gets too big for any one person to handle. Initially, the excitement about fixing issues because people are actually using your project turns into something different. Suddenly it's like "Oh my god, I got an issue. Somebody's using my code. This is so exciting!" becomes "Oh, no... I woke up again and there's another 15 issues. How come people don't like my code? How come I can't write code that has no bugs? When is this ever gonna end? Am I just gonna be fixing bugs in this code until the day that I die?" And it sometimes can feel a little bit hopeless.

**Jerod Santo:** Absolutely, no doubt a large part of your story... And one shared. I mean, it resonates, because it happens so often, and it's one of the reasons why even just by circumstance or happenstance this show so often is focused on things like burnout and sustainability, because it's systemic, or it's endemic across so many of us.

I was looking at your projects on GitHub, and you have 132 repos that you personally own. Of those, 123 of them are source repos. So that's like most of them. And then of course, WebTorrent has its own org, so it's not technically yours, but it's also one of your big projects... So it got me thinking, are you mostly a maintainer of your own projects, or have you contributed to others? Have you ever been on the side of contributor to open source?

**Feross Aboukhadijeh:** Yeah, that's a good question. I definitely think I've done more of the creating projects from scratch, to solve my own problems, and then becoming a maintainer of those. There is one time when I did a bit of contribution to something else, which was Browserify, which is a package for taking your JavaScript code and bundling it up so that it can work in a web browser. But besides that, yeah -- that's actually an interesting point. I've sort of come at it from like "I'm gonna make this stuff because it's useful for me, and I'm gonna put it out there" and then people just ended up using it, and then I became kind of responsible for keeping it in good shape.

**Adam Stacoviak:** \[00:04:25.07\] What about starting out? How did you even get into open source? Sometimes the path for maintainers is somewhat even accidental. Did you intend to be "an open source software maintainer"?

**Feross Aboukhadijeh:** No, I don't think I did. I think I admired open source, and I saw it as this thing that really great programmers could do, and I didn't really understand that anybody could publish open source at first... My first use of -- I remember actually installing open source when I was doing Ruby on Rails in college. I remember whenever I had a problem I would just google it and it would install this package, and it solves your problem. And I knew that somebody wrote that, and I remember thinking like "They must be really, really good", and it's almost like some kind of secret society that you have to be inducted into, or something. I didn't really understand the process for that. It wasn't really a thing I thought I could do.

But then I think where that started to change was -- I don't remember how I stumbled upon this, but I found a YouTube video where this guy named Paul Irish, who does a lot of JavaScript stuff (I think he works on the Chrome team now), he posted a video about himself just going through the source code of jQuery, line by line, and just talking about different aspects of it. And I think he called it "10 things I learned from looking at the jQuery source." And then he did another video where he said "10 more things I learned from looking at the jQuery source." So I watched those, and I think it made it clear to me that "Oh, this is actually a thing that I could understand", and that it's totally possible for somebody... If they have the time and they knew enough things, they could do this. I thought maybe one day I'll be able to do that. That's when I got the first seed of the idea that maybe if I get really good, I'll be able to do this someday.

**Adam Stacoviak:** Around what year was this, just timeline-wise?

**Feross Aboukhadijeh:** I was in college. I think it was my second-to-last year, or my last year of college. So that would be like 2011 or 2012.

**Adam Stacoviak:** That's still in the rise, or sort of reemergence of open source with GitHub. I think you speak to this exclusivity kind of factor, and I think some of that is just sort of like capability. We used to live in a system where it was just harder to collaborate on code, and now it's gotten easier, and easier to actually even publish ideas, too; thinking of source code as an idea, for example. So GitHub has really changed that a lot for, I would say, the future of software... Because while you may have come in the game 2010-2011, Feross, GitHub came on the scene around 2008, and that was sort of the beginning of open source moving fast.

**Feross Aboukhadijeh:** Absolutely, yeah. I think that was really a big change. I mean, I wasn't really around before. I wasn't contributing to open source before GitHub, but I definitely feel like GitHub has changed things. I mean, the ease with which you can publish stuff, and the fact that anyone can open an issue on your code is -- that's pretty paradigm-shifting. Because if you think about it, it's so much easier now to get involved. You don't have to just send code to like an email list, or something, and get people to review it that way. You can just send it directly to the person, and it's a standardized process for every project, instead of this bespoke thing where you have to go to the website and read about "What is this project's process...?"

**Adam Stacoviak:** Everybody has a different way, yeah.

**Feross Aboukhadijeh:** Yeah. I think that's part of the reason why a lot more maintainers are getting burned out, because this is one of those things where it's like a blessing and a curse. It's obviously good that more people can get involved, and we lowered the barrier to entry, but it also means that as a maintainer you're gonna get way more issues from people, who have a lot of the times put in less effort into their issues, and just say "It broke. Fix, please." With no information. And you're like "Okay, I can't really help you."

\[00:08:16.00\] You get way more people who less invested. But of course, the good that comes with that is that you get more people who would have never thought of contributing before, who find a GitHub page and open the code, crack it open and say "Oh wow, I actually can do this. This is cool."

**Jerod Santo:** So of all the projects that you have out there - I mentioned WebTorrent and StandardJS appear to be the two biggest, just in terms of stars, and maybe effort. I'm curious which ones require the most hands-on maintenance to this day? Are those the ones where you're actively maintaining, or are they passive? Tell us about the burden - which of your projects bear the most burden?

**Feross Aboukhadijeh:** This is a good question, because it wasn't obvious at first to me what projects would end up taking the most time and which wouldn't. Obviously, with more than 100 projects, if each one was taking a bunch of time, it obviously wouldn't really work. So most of those aren't that much work. Most of those are just a package that just does one thing; it's very clear what it does, it has an API that isn't gonna change... Although maybe now that Node is switching from callback-first pattern to promises, maybe a lot of them need to change, and I'm starting to do a little bit of work on that... But yeah, in general, the idea is that those types of packages - they don't change very often. Either they work or they don't; usually, they just change if there's some kind of API that's deprecated, that you use... Or if the entire ecosystem changes a paradigm of how you interact with stuff.

But the packages that really take up your time are ones where it's less clear what they should be doing and it's much more of a opinion thing, or a taste thing, or where the API surface area is quite large... There's a lot of discussion about "Should we add this feature? Does this feature belong in the library, or does it not?" That kind of discussion wouldn't happen on a package that just does one thing. If somebody proposed adding something to it that just didn't make sense, it's very simple - you say "No, this doesn't belong here. Make that in a different package." Problem solved.

With those larger projects it's sort of debatable, so you end up spending a lot of time trying to decide whether to add something or not... You usually have a huge list of features that you haven't really gotten to yet, that you want to get to; there's a lot of focus on making the thing easy to consume for people, so you try a lot of experiments with how the API should work, and you change that over time...

And then also, WebTorrent is built on a foundation of pretty experimental technology that's changing, so that ends up causing a lot of shifting under -- you know, if you build your project on a shifting foundation, it's gonna take a lot of work to keep things working as the browsers evolve the standards.

**Jerod Santo:** Right. It seems like most of your stuff -- maybe StandardJS isn't, because we should mention StandardJS is a coding style linter etc, which once you have certain opinions that are enforced... I'm not sure exactly how StandardJS works, but I assume that's relatively stable once it's set in stone... But a lot of your other stuff are built on the web, they're web projects; aside from some of your websites, stuff like BitMidi, which I guess those might be moving targets as well.

I guess my point here is it seems like lots of your stuff is on a shifting foundation. Not very much of the web is standing still, so bit rot is very much a thing.

**Feross Aboukhadijeh:** Yeah. I think a lot of it is pure functions, and doesn't need a lot of active work. But yeah, anytime you're interacting with a web API, that stuff shifts all the time.

**Adam Stacoviak:** \[00:11:52.01\] Since we're talking about these two projects in particular, WebTorrent and Standard - I'm noticing on both of them you have this notion of sponsors, one of them being Brave, which is the browser I tend to use day-to-day... What has open source enabled for you? These kinds of connections... I'm sure you've spoken with folks at Brave, there's some sort of relationship there. Can you share the back-story there?

**Feross Aboukhadijeh:** Yeah. The story there is that Brendan Eich, the creator of JavaScript - he's the CEO of Brave. At some point he reached out to me because he liked the web torrent stuff I was doing; so we got dinner and just talked --

**Adam Stacoviak:** Wait, so you had dinner with Brendan Eich?

**Feross Aboukhadijeh:** Yeah.

**Adam Stacoviak:** Wow...!

**Feross Aboukhadijeh:** There you go, boys and girls; that's what can happen to you - get dinner with the inventor of the language. \[laughs\] The cool thing about Brave is that because it's a new browser, they can do things that other browsers would be a little bit afraid to do, meaning they can take bigger technical risks. If you have a browser that's huge and has billions of users, then you're gonna be very conservative about what you ship to them. You wanna make sure it's really solid, and you're really worried about what can go wrong. But with Brave, they're building this browser from scratch, so they were looking for features that could differentiate Brave from other browsers, and were willing to add new protocols and new ideas to the browser. That's where our collaboration came from.

The idea there is that just like how a browser can open up a PDF file and show you the PDF directly there in the browser, without requiring you to have another program installed on your computer for that, we wanted to make Brave do the same thing with torrent files. So if you go to a site and there's a torrent file there, or there's a magnet link - which is just another form of the torrent file - and you click on that, instead of it popping you out to some program that you have on your computer, or just telling you "It doesn't work, because you don't have a torrent program", it will just work, right there in the browser. It will just say "Okay, this is a torrent. Do you wanna begin torrenting this?" You can say Start, and then there it goes.

**Adam Stacoviak:** Wow. Built right in.

**Feross Aboukhadijeh:** Built right in, yeah. That was the idea. So yeah, back in 2016 me and a friend went to Brave for like a couple of weeks and we built in WebTorrent into Brave. It only took a few weeks of work, because most of the work was already there in the WebTorrent library. They paid us for that, it was a contracting gig. It was actually one of the few times I've actually gotten paid for my work on WebTorrent.

**Adam Stacoviak:** Wow.

**Feross Aboukhadijeh:** Yeah... That and the sponsorship - a couple of sponsors that just put in money to get their logo on the website.

**Adam Stacoviak:** Right.

**Feross Aboukhadijeh:** Yeah. But I'm actually back at Brave right now. It's been a couple of years, and they had me back there now for a couple of weeks this summer.

**Adam Stacoviak:** Right now like literally right now, or timeframe right now?

**Feross Aboukhadijeh:** Like right now. I started working there again last week, and I'm gonna probably be there another week after this. This will be like 2-3 weeks total.

**Adam Stacoviak:** So did they pull you in for new features, new ideas, brainstorming how Brave is actually using WebTorrent, feedback loop etc?

**Feross Aboukhadijeh:** Yeah, both. There's a bunch of new projects; they wanna look into adding different kinds of syncing models for doing BrowserSync using peer-to-peer, instead of centralized services... So brainstorming some of that stuff, and other new things. And then also just updating the WebTorrent implementation to make it a little bit more solid, and add some features that users have been requesting.

Yeah, so that's one of the cool things - if you're the maintainer of a project and you have a lot of experience, then that is one model for how to sustain open source, is to have people who use your code call you in for expert advice, basically. Even though they could figure it out themselves, sometimes they prefer to just have the person who works on it to just come in there.

**Adam Stacoviak:** Why not, if you could... Right?

**Feross Aboukhadijeh:** Yeah. It's one of the funnest things I've done. It's definitely really cool. They're really cool people, I like working with them.

**Adam Stacoviak:** So this is kind of like a hero story. What about a war story? Something that other maintainers can sort of like latch onto, something that's like you're in the trenches, you've got some bloodied knuckles, you're fighting the fight... What's that for you? What's a war story for you?

**Feross Aboukhadijeh:** Hm... A maintainer war story... I haven't really thought of that before.

**Jerod Santo:** Surprise!

**Feross Aboukhadijeh:** Surprise! Yeah... \[laughs\] I've got one story, maybe it'll be interesting... Back when I was getting started -- actually, I don't know how far back to go here, because I could go back to the very beginning; it might be too much information.

**Jerod Santo:** Your birth?

**Feross Aboukhadijeh:** \[00:16:10.17\] Yeah, so... \[laughs\] I went to this conference called RealtimeConf. It was back in 2013, the first conference I ever spoke at... And I was giving a talk on WebRTC, which I had been learning a lot about at the time. I did a company called PeerCDN; this is what I did right after college, before I had really gotten into open source. I guess I will go a little bit into the back-story of that, since it's come up now... Is that okay?

**Adam Stacoviak:** We're pulling it out of you!

**Jerod Santo:** Keep going.

**Feross Aboukhadijeh:** Alright. Basically, I had this kind of mischievous idea that I wanted to figure out "What could I do with people's browsers, that they wouldn't expect me to be able to do? How can I push these APIs to their limits?", which by the way, it's funny, because I still think that way. If you know about my annoying website, TheAnnoyingSite.com, it's very similar.

**Jerod Santo:** I'd say mischievous ideas is kind of your whole brand.

**Feross Aboukhadijeh:** I guess, yeah... \[laughter\]

**Adam Stacoviak:** That also gives us a chance to plug JS Party once again, because you actually spoke about that annoying website on an episode of JS Party... I would say at least a year ago, I bet. But continue, continue...

**Feross Aboukhadijeh:** So I was thinking of different things I could do, and one of the things I was really curious about was could I do computation using WebGL, or workers, to do useful work on people's browsers? Sort of use it as a distributed computer. So I looked into that, and the browser wasn't really quite fast enough, so I then discovered WebRTC, which lets you do peer-to-peer connections between browsers... And the idea that I had was "Why don't we connect a bunch of sites together and build something kind of like a torrent network, where the resources for a site can come from the other people on the site? And we can reduce the cost of running a site."

So I ran with that idea for a little bit, and tried to make a company out of it, but I learned a ton about how not to do a company, I guess... One of the big problems we had was just being too focused on building stuff, writing code, and not really talking to customers and seeing if there were people who would ever wanna buy this stuff... So a little bit of time went by there, and we didn't really have any customers, but we spent about a year just building a bunch of really cool technology, learning all about WebRTC and making some cool demos... And in the end we got acquired by Yahoo!, which was a good outcome for us, because we didn't have any customers, and we worked on this thing for about a year... So it was a really exciting outcome, where we got to go and just basically join the video team at Yahoo! And made a little bit of cash, obviously.

And that's actually what enabled me to spend a lot of time on open source later, and not worry about having a job. I could just fully devote myself for years just working on stuff and giving it away, and not having to be worried about making ends meet.

Anyway, getting back on track - so right about when that happened, I gave this talk at RealtimeConf, and I was talking about WebRTC, and how cool it is, and what you could build with it... And at the very end of that talk I mentioned the idea for WebTorrent, because I knew that Yahoo! was gonna have the technology we had worked on, and my concern was that some of the ideas of connecting everybody's browsers together and making a really amazing peer-to-peer network that can decentralize, control things - that was a cool idea, and I didn't want it to die with this acquisition.

So I was like "What if we rebuilt PeerCDN, basically?" Rebuild it from scratch, but instead of saving money on bandwidth, we made a goal of decentralization, and we made it match the BitTorrent protocol as much as possible, because we know that already works, and that has a lot of users, and there's all this content on there, and there's a big community of people... So we could just make this -- basically, bring the BitTorrent protocol and put it into the browser. It was just an idea that I thought would be cool to work on, and I wanted to start working on it... So I threw in a slide at the very end of the talk, the last one minute or 30 seconds, and I said "I have this idea to make BitTorrent on the web. Here's what it would do. If you think this is a cool idea, come talk to me." I threw it out there, this thing that would -- I wanted people to come, I wanted to find collaborators.

\[00:20:16.10\] But one of the people in the audience misunderstood what I said, and I did have a GitHub repo up with a readme in it, that just said what the project would do one day... And he tweeted it, and he had quite a few followers who clicked through this link and said "Dude, there's no code here. What is this project?" So then he messaged me and was like "Dude, I thought you had code. What did I tweet this out to all my followers? There's nothing here." And I was like "Dude, you could have looked at the readme, man. It was clear that it was just an idea." \[laughs\] So this guy basically launched WebTorrent for me, before

there was actually any code.

I think it was a good thing that he did that, because I don't know if I would have built it otherwise. It was just this idea -- it wasn't clear whether people would wanna use it, or anything like that. But because of the reaction - all the people who started opening issues and saying "This is a cool idea. I really think you should do this", I got really motivated, and I really wanted to actually build it at that point.

**Jerod Santo:** That's a really great story. The thing I find funniest about it is you inadvertently fixed the problem. Your classic blunder - you build all this stuff without customers for PeerCDN, and then by way of the slide basically you got all these customers without any software. I mean, "customers." You proved the demand for WebTorrent without a single line of code, with a readme... And kind of by happenstance, by somebody tweeting it out. That's awesome.

**Adam Stacoviak:** That's the way you do it right there.

**Feross Aboukhadijeh:** Yeah, launch first, without anything. Vaporware, that's the way to go, right?

**Adam Stacoviak:** You should do a new talk, "Launch without code. Get customers."

**Feross Aboukhadijeh:** I mean, this is actually typical startup advice that people always give, but... You know, I'd never experienced it first-hand.

I think there's just far too many people who -- I don't wanna generalize here, but I think... I guess I will have to generalize a little bit. \[laughs\] As technologists, we get really excited about code. We wanna spend all of our time writing code, so we can sort of sometimes just get way too caught up in actually just only doing code, and not really thinking if everyone's gonna use it, or if it has any value to other people.

I don't wanna say that all code has to have utility to other people, because sometimes you just wanna do an art project, or you just wanna make something because it feels good to work on it, and that's great... But if you think that people will use your thing eventually, it's important to show it to people early and often, and to get people to see it and to give you feedback and to confirm that there's people who are actually excited... And to hone how you explain it to people. To make sure you can actually explain what you're doing.

I just came back from the Decentralized Web Summit, which is this conference where all these different peer-to-peer projects were presenting... So many people there couldn't explain what they were building in a few sentences. You could even give them a few paragraphs and they still couldn't explain why it was useful to anybody.

**Adam Stacoviak:** Yeah... This really speaks to the why and the how. The importance of the why to gain followers is not always as critical as the how. The code is somewhat the how. But the why is what I think is what you put out there with that last slide, of "Here's why I wanna do it, here's how I think I can do it", and the why was very crucial to the success of WebTorrent, as you said.

**Feross Aboukhadijeh:** And to get people who are interested to come and find you. By putting it out there, there were all these collaborators who sort of came out and actually introduced themselves to me and said "Hey, this is great. I wanna help." You can't really do that if you're just coding away by yourself.

**Jerod Santo:** \[00:23:55.11\] If I could try to generalize your generalization, to go one more step... If you take code as art off the table and say we're talking about utilitarian code, there's really two kinds of projects. There's one where you're scratching your own itch, and if it's that style, then the right methodology is "We'll create the back-scratcher. I've got an itch; I'm gonna create the code first, and then if other people find it useful, now I have a successful open source project."

Then there's the other kind, which is "I need to find people with an itch that I would like to scratch." Or "I have an idea of a really cool, new back-scratcher. Do I build it and then hope people..."

**Adam Stacoviak:** ...have the itch?

**Jerod Santo:** ...have the itch on their back? Killing the metaphor... But do I build first, or do I get the idea out there first? And in that case...

**Adam Stacoviak:** I like that first one.

**Jerod Santo:** ...it's foolish to actually build the thing first.

**Feross Aboukhadijeh:** I mean, you could try to do both at the same time. That's the best. If you can be scratching your own itch, and you know everybody else is dying for a solution... That's actually the perfect situation.

**Jerod Santo:** Oh, yeah... That would be nice.

**Adam Stacoviak:** In a perfect world.

**Jerod Santo:** So as a meta note, I love how Feross' war story is like "I won the war. It was easy. Everything went great at the end." It's kind of great; it's a successful war story.

**Feross Aboukhadijeh:** Maybe I don't understand what war story means. \[laughs\]

**Adam Stacoviak:** A war story is usually whenever things don't go right.

**Jerod Santo:** Battles, you know? You're sweating, you have blood... Usually, it's an opportunity to complain about some users who were opening issues that you hate...

**Feross Aboukhadijeh:** I mean, I guess I have a story of StandardJS... When that first launched, there was a bunch of haters. That's probably a more appropriate war story, right?

**Jerod Santo:** Well, StandardJS, because it is about style and whatnot, I assume it's open to the most bikeshedding of any project out there, right? Because it's like "This style is good/bad", for every little aspect of the code you write. Is that what happened?

**Feross Aboukhadijeh:** Yeah. Initially, the goal with StandardJS wasn't to tell everybody to write their code the way I write my code. The goal was to save time on WebTorrent, on pull requests, where people were sending in these pull requests that I wanted to accept, but I couldn't because they just completely didn't follow the style guide of the project. What I should have done is probably just added ESLint, or I think at the time it was JSHint that was popular... I should have just added that to the project and just moved on with my life. But the problem I faced was if you used JSHint, then you had to add this config file to each of the projects, to sort of say what the style rules were... And this was like a hundred-line file with all these options. I didn't wanna make a bunch of copies of it and put it into every different package.

So I was like "Oh, the solution to this is to just make another package!" Everybody problem in computer science can be solved by another level of indirection", right?

**Jerod Santo:** With one more package.

**Feross Aboukhadijeh:** Exactly. So I just made another package, and I put the little config file for the linter in there... And then I just made every different WebTorrent project require that project.

Then the question was "What do I call this package?" I was gonna call it WebTorrent Style, or Feross Style, or something like that... But then I was like "Wait a minute... I should search for dictionary words and see if there's a word relating to code enforcements, or something." I almost named it Enforcer, or something like that. Anyway, then I found the word Standard, that was available, and I thought "Oh, I should call it Standard", because that will annoy people.

**Adam Stacoviak:** That's right. \[laughter\]

**Feross Aboukhadijeh:** I actually thought that it would annoy people...

**Jerod Santo:** From the creator of the most annoying website comes a linter that's going to annoy people...

**Feross Aboukhadijeh:** Well, the thing is that it is a code standard. So the name Standard by itself shouldn't have offended that many people. But then it was like "Okay, since I'm naming it Standard, let's just go all out. Let's just call this JavaScript's Standard Style", instead of Feross' Style, or something. And then just that, that title of the readme just had everybody off. They were like "How dare you?! How dare you call yourself the Standard? Are you a standards body? Is this part of the ECMAScript? Are you part of TC39?" And I was like "I'm not saying I'm any of those things... I'm just saying that this is a style guide, and you're free to use it if you want."

**Adam Stacoviak:** \[laughs\] ...if you want.

**Feross Aboukhadijeh:** \[00:28:06.01\] If you want, yeah.

**Adam Stacoviak:** That's right.

**Feross Aboukhadijeh:** The thing that helped me at that time -- I did get quite a lot of backlash, but then there were these friends of mine who thought that Standard was a great idea, and they sort of dealt with all of the people on GitHub. They responded to all the issues and sort of just said "You guys are being haters. If you don't wanna use it, you don't have to use it. Take it or leave it." They dealt with that for me, and that made me feel really good; it made me feel like I shouldn't apologize and delete it.

**Adam Stacoviak:** You chose a provocative name, you got a provocative response, and that's cool. That's how it works.

**Feross Aboukhadijeh:** Yeah. And the funny thing is that the main advantage of Standard, I thought, was gonna be that you didn't have to include the same big configuration file in every one of your projects. But it turned out that actually the real benefit that people liked about it was that they could just adopt it without having to make all of the decisions themselves. And I didn't even know that that was gonna be what people used it for.

**Jerod Santo:** Sure.

**Feross Aboukhadijeh:** Actually, they were adopting it because they liked that they could tell their team who was fighting about style rules and changing the ESLint configuration constantly, and wasting a lot of time, they could just say "Hey everybody, there's this thing called Standard that we can just use, and we can just end all of these bikesheddy discussions."

**Jerod Santo:** It's a huge win.

**Feross Aboukhadijeh:** That was actually the huge win... Because it was called Standard, it could just end a bunch of fights in different people's companies... Which - who would have known that was actually the real benefit...?

**Jerod Santo:** We've seen languages with official implementations adding formatter tools to the tool kit, for that exact reason - gofmt (the Go formatter), Elixir recently added a formatter as part of its Mix tools... So that these conversations just don't have to happen. Like, "This is the format. You follow it, or you can have your own style if you want. We're not gonna enforce you to do that. But if you wanna just follow the style, run the tool; it's gonna reformat your code, and we don't have to have these bikeshed conversations."

It's interesting in the JavaScript land that there's no one implementation to rule them all. Maybe to a certain degree there is practically, but there's not a single company or entity that runs it. It's all based on boards, and what have you's, implementers. But here comes a one-off JavaScript library from a guy named Feross, who just calls it the Standard.

**Adam Stacoviak:** "Who does he think he is? Come on, now..."

**Jerod Santo:** Yeah, who did you think you were, Feross?

**Feross Aboukhadijeh:** Yeah, I mean... It was called Feross --

**Jerod Santo:** What did Brendan Eich have to say when you talked about it?

**Feross Aboukhadijeh:** He adopted it at Brave.

**Jerod Santo:** Well, there you go.

**Adam Stacoviak:** Dang!

**Jerod Santo:** It's the standard now.

**Adam Stacoviak:** Now it is the standard. \[laughter\]

**Feross Aboukhadijeh:** Exactly. The inventor of the language endorsed it. And then also, believe it or not, Tim Berners-Lee, the inventor of the web, also uses Standard, so...

**Jerod Santo:** Okay. That's all the street cred you need.

**Feross Aboukhadijeh:** I saw a sticker on his computer at the DWeb Summit in 2016. I was actually the one who gave him the sticker, but...

**Jerod Santo:** \[laughs\] Disclosure... "I put it on his laptop."

**Feross Aboukhadijeh:** No, no... I gave it to him because I knew he used it. I saw it on his GitHub... And then I was like "Yo, you should take this sticker", and then he put it on this laptop.

So I would not have guessed that that was really gonna be the benefit of Standard, that it would end all those style debates for people. The flipside of that is I basically took on all the style debates for other people. Now instead of every company fighting out whether or not they should put the curly brace on the same line or on the next line, or whatever - all these random discussions...

**Jerod Santo:** Same line.

**Adam Stacoviak:** Yeah.

**Feross Aboukhadijeh:** Obviously same line, yeah, but...

**Jerod Santo:** \[laughs\] D'oh.

**Feross Aboukhadijeh:** But instead of every company having to have this fight separately, the idea is we'll just take it to the standard repo and have the fight there. Then a decision gets made, and then we can all stop fighting about it, and all the different companies. But that just means that my life became a lot more about talking about style, and the whole point was that I was just trying to avoid writing style feedback in pull requests on WebTorrent... So it sort of backfired on me.

**Jerod Santo:** Maybe one of your all-time backfires, yeah.

**Feross Aboukhadijeh:** Yeah. Well, it helped a lot of other people, so... I'll take that backfire.

**Break:** \[00:32:14.04\]

**Adam Stacoviak:** Speaking of standards, at least on GitHub, and actually on the Standard repo, you've got the newest standard for sustaining and supporting projects, which is the Sponsor button, the funding.yml file. What has that done for Standard itself? Can you speak to GitHub sponsors, or just the sustainability of your projects? You mentioned before being at Brave, and that being one of the first times you were ever paid for your open source... So can you speak to the getting paid aspect, and what it means to you?

**Feross Aboukhadijeh:** Yeah, totally. Like I mentioned before, I worked on open source funded mainly by my savings that I got from working at Yahoo! I did that for like a year, saved some money up, and that was what enabled me to put so much time into open source and to not have to worry about other things, and to now have to squeeze it in after a day job.

So that was really great, but that obviously can't last forever. Savings run out, reality hits you eventually... I think it was the beginning of 2018 where I was like "Okay, this isn't gonna work indefinitely. I need to think about how to get paid for open source, or else I'm not gonna be able to keep doing it."

I mean, there's obviously other collaborators who help out with stuff, but there's no one really working full-time on WebTorrent and on any other code I've created... So my concern was that this stuff would just get unmaintained if I had left it, and it wouldn't be in as good of a shape as I would want it to be.

So I started having these feelings of guilt, like "I can't just abandon this stuff. I can't just not work on it anymore." I was like "Okay, the solution is I have to just get paid." If I could find some way to get paid, so that I could work on this at least 10 hours a week, or 20 hours a week, something like that... I could really do this thing that I enjoy, keep all this code in really good shape... That would be ideal.

So I started exploring different funding models in the beginning of 2018. I made this package called Thanks, which you could run it in your Node projects. You'd run "npx thanks", and that would just execute this Thanks program. And what it did is it would go through your package.json file and it would find all the packages you're depending upon, and their dependencies, and then it would look up and see, "Are any of the authors of these packages currently seeking donations on a platform like Patreon, or Open Collective?" And if so, it would print out a list of people you could donate to.

\[00:36:04.26\] Then I started a Patreon as well, to sort of solicit donations from my users. And I thought this would be a great solution for funding it, because people would just be happy to give you money for the work that they rely on, you know? It turned out it didn't really work out quite as nicely as that, because people -- I don't know... I think people are just too used to getting stuff for free, and it's this optional step that they can do afterwards.

A few people ran it, it raised awareness of what packages people were depending upon, and stuff like that... But it didn't really help me at all.

The main person who benefitted was Sindre Sorhus, the Node.js contributor, because he shows up at the top of pretty much everyone's list of things, because he just has so many of these tiny packages that everybody uses... So pretty much every time somebody ran it, it would say "You should donate to Sindre Sorhus."

I looked at his Patreon statistics, and you can see a little blip where his monthly money went up by like $200/month, right when I released Thanks.

**Jerod Santo:** Come on, Sindre... Send some of that back Feross' way.

**Feross Aboukhadijeh:** \[laughs\] But yeah, so then I started promoting my own Patreon on Twitter, and trying to get other people to make Patreons around that time. I was moderately successful, I would say, but not enough to allow me to work on open source full-time, or even part-time... And living in the Bay Area, where I live, it's just too expensive. I was kind of bummed by that.

**Adam Stacoviak:** I like the potentially accidental standard - additional standard here, I guess - because you've got Feross.org/thanks, which I think is pretty cool as an open source software maintainer to have this sort of "Whomever you are thanking." You've got your platinum sponsors there, your gold sponsors there... People who are helping you maintain this lifestyle of being an open source software maintainer. So you're not only putting your things out to the world, but you're also inviting those to come in to support you via Patreon, GitHub Sponsors... Even Bitcoin. I think this is an interesting thing that I'm curious if more software maintainers who desire to be sustained by their community could do to enable this.

**Feross Aboukhadijeh:** Yeah, I think that it is a thing that you can do, but... I've thought about this a bunch; I guess I can list off a few things that people should keep in mind if they wanna go this route.

**Adam Stacoviak:** Please do.

**Feross Aboukhadijeh:** Things that make it hard. So the first is that companies can't donate money to people, in general. It's a lot harder for a company to do a donation than it is for them to just buy a product. So if I was selling a license to a text editor, like Sublime Text, for $100, then pretty much any developer at that company could just buy that editor and then expense the $100 to their company, and their company would have no problem paying for that editor, because it's making their developers more productive.

But if that same developer goes to their boss and says "Hey, we use code by this guy named Feross, and a bunch of these other people. They're asking for donations... Can we donate to them?", their manager is gonna be like "How do we do that? We need an invoice saying that we're paying for something. We're not a charity, we're a company, so we can buy things for ourselves, but we can't just give money away."

And even if that manager happens to be one of the few managers who really would appreciate the value of open source and wants to donate, and they go to their CFO or their finance officer and say they want to do this, that person's gonna be like "Who's this person? We can't just give money to a random person. How are we gonna explain that to our shareholders, or on our taxes?"

One big problem is what are you actually asking for from these companies? If you're not giving the something that they can just pay for, then they're not gonna be able to support you. That's one huge lesson I learned.

An example, what can you actually ask for? You can say "Okay, this is not a donation, this is a sponsorship. You're buying advertising, basically, on the project's website. We're gonna get your logo there and we're gonna put a link to your site. We're gonna say you support open source."

**Adam Stacoviak:** \[00:40:21.19\] Right. You're not paying for the support, you're paying for the advertising of your support.

**Feross Aboukhadijeh:** Yeah. And that's something they kind of understand, because they actually already have a budget for advertising.

**Adam Stacoviak:** Yeah.

**Feross Aboukhadijeh:** That was a lesson that took me way too long to learn...

**Adam Stacoviak:** It might also increase your pool of money to access as well, because sometimes advertising and marketing budgets can be bigger, or brand association budgets can be bigger than just simply the donations pile, for example, which seems to be pretty small or non-existent.

**Feross Aboukhadijeh:** Yeah.

**Adam Stacoviak:** Or very hard to execute on.

**Feross Aboukhadijeh:** The thing that was sad about the donations thing was that a bunch of the people who were donating to me were other open source maintainers. So it was not really accomplishing the goal... And then I would donate back to them. We had a bunch of this really weird ring, where we were all donating $10 or $20 to each other in like a big circle. So it looked like we were getting $400/month, but I was actually giving a bunch of money to everybody, and then they were giving to everybody else, and it was all just coming back to us. So it wasn't really--

And then there's obviously other nice individuals who also were doing some donations... But I just think that the main people who have to fix this problem are gonna be companies. We have to find a way to make it so that they want to pay for something where they're actually getting value from it. That will be a much easier conversation to have with companies than what we've been trying, which is where we say "Here's all of our code for free. You can do whatever you want with it. Oh, and by the way, could you please consider giving something back?" That conversation doesn't work, if the goal is to get paid to work on open source. It just doesn't work.

**Jerod Santo:** I wanna ask you about what's working and what's not working, but before that I'd like to do a quick disclaimer. On your standard Standard you have in the funding.yml GitHub Feross, Patreon Feross, Tidelift Npm Standard. So you are a Tidelift supporter. This series is Maintainer Spotlight, and we are doing it in partnership with Tidelift; they are sponsors of this episode. That being said, we are not required to talk about Tidelift. We can say whatever we like; we did not invite Feross on the show because he is on Tidelift. We're here to talk to Feross because he is an awesome maintainer. We have complete editorial control, I wanna make that super-clear for our listeners that this is not like a Tidelift Pay-to-Play kind of a show. It's just in partnership with them, and we can say whatever we like, Feross, and you can say whatever you like.

Having said all that, you have these different things - you're an experimenter, you're a tinkerer... I'm curious if GitHub Sponsors is a game-changer for you. If you think it will be, maybe not yet... I'm curious how Tidelift is going. You mentioned how Patreon is kind of going... Where does your sustainability stand and what do you think the future looks like?

**Feross Aboukhadijeh:** I think obviously getting money from companies has to be the strategy that we adopt going forward. So one route is contacting companies directly, and that's what I've sort of tried. It sort of works if you are persistent and you're willing to email a lot of people and explain to them the benefits of getting their logo on your open source projects page. You can sort of end up getting a few thousand dollars a month if you really work hard at it.

Obviously, the downside to that is now you're spending a bunch of time emailing people and having meetings about sponsorship issues, instead of coding. And I think a lot of maintainers just don't wanna do that. So I think that's where the promise of something like Tidelift comes in.

The idea there is instead of maintainers having to interface with all these companies and trying to explain to them why they should be caring about their dependencies and the shape that those dependencies are in, Tidelift can just go out and do that, and they have a sales team of people who are just basically going out and talking to companies and trying to convince them to pay for open source.

\[00:43:58.12\] And then they turn around and they give half of the money that they collect from those companies straight to the maintainers. I think they've promised that they're always gonna give at least half of their profits indefinitely.

That's a cool model, because now suddenly I don't have to worry about talking to people, I don't have to worry about emailing people and doing all this sort of salesy stuff, which -- I mean, I don't mind doing it, because I like to push myself to learn new skills and to go outside my comfort zone, but I know a lot of maintainers don't wanna be spending their time basically being a salesperson... So this is actually a promising model.

The way Tidelift does it is they look at what their customers/subscribers are using, they look at what packages are their customers relying on, and then they have some kind of an algorithm that tries to calculate how much of the money that they've collected should go to the different dependencies. As a maintainer, you just sign up and collect that every month, and there's really very little you have to do in return at the moment. You just sort of collect it.

I'm right now making about $500/month from Tidelift. So it's great, but all these things are all just -- the thing that's not ideal about all these different approaches is just that if I were to go just get a job at Google, I can make way more money.

**Adam Stacoviak:** \[laughs\]

**Feross Aboukhadijeh:** This isn't about money, this is not really about trying to get rich. It's just that if we want open source to be -- how weird is it that open source creates all this value for people, and the people who actually get to capture all this value are the startups that are built on top of the open source, and not the people who actually make the open source.

**Adam Stacoviak:** If you assume the value is monetary value, right? Because you've just said it's not about money, and in that case you're saying the value... So the value in the case of a startup is generally revenue; in the case of, say, an Instagram with billions, for example, built on open source... In that case, if your value prop is simply revenue, then yeah, it's true.

**Feross Aboukhadijeh:** I agree. I don't wanna sound ungrateful about all the things open source has given me. I really do think that it's been amazing. I have so many friends everywhere in the world, and it's been really great for just me as a person... I'm such a better programmer, and--

**Jerod Santo:** There's definitely an imbalance... Sorry to cut you off, but I just wanna speak to your point about the people building profitable - or sometimes failing - companies on top of open source... There's definitely an imbalance that we see, and I think we all see it, especially from the inside, and especially with all of our friends burning out, or struggling, and making these things that huge corporations benefit from, and not seeing any kickback... So I see the imbalance.

There's also a side of it like "Well, we're open-sourcing our code. We're giving it away, it's a gift to the world."

**Feross Aboukhadijeh:** It's our decision, I totally buy that. I wanna give a gift to the world. That's why I got involved - I love the idea of giving away my code and just letting anybody do what they want with it.

**Adam Stacoviak:** But...

**Jerod Santo:** That's why it's like a -- I wouldn't call it a grey area, it's just that I have conflicting feelings about it, because I've built a career around this stuff, and so I've gotten tremendous value out of it. If I was to weigh in the balances how much I've put in, versus how much I've gotten out of open source, I've gotten out a lot more, just individually. And I think most of us can say that--

**Adam Stacoviak:** You're speaking for yourself, right?

**Jerod Santo:** I am speaking for myself. Jerod. And I am not a \[unintelligible 00:47:32.25\] who reaping in the profits...

**Feross Aboukhadijeh:** By the way - sorry to cut you off, but I just wanna say I totally agree with that, too. I think even though I've put in all this time, I think I still have gotten more from open source than I've given. Definitely.

**Jerod Santo:** So that's what's tricky about it. We all agree that these companies who are -- I think they're also getting... I mean, okay, I've gotten out more than I've put in, but I'll just go out on a limb and say Instagram Inc. or whatever that entity is got out way more than it put in, right?

**Adam Stacoviak:** \[00:48:08.16\] Especially if we're speaking in terms of monetary value.

**Jerod Santo:** Yeah, orders of magnitude. So that's where we stand, and I think it's the community's job to rally around this issue. \[unintelligible 00:48:20.05\] what we're doing, and finding solutions. That's why it's interesting to hear what's working for you, because as a single maintainer who does have some celebrity and audience, if it's not working for Feross, then if the person who's running that transitive dependency that nobody even knows about, and has a small following - it's really not working for that guy or that gal.

**Feross Aboukhadijeh:** I totally agree. Yeah, that's the thing I always think about - I'm fortunate to have some people who follow me, and I can talk to them about this issue... So if you look at the people who are making the most from open source and who are able to sustain themselves the best right now, it's not me for sure; but you can look at people like Evan Yu, who I think last I checked was making 16k/month on Patreon. I don't know if that's all for him or if that goes to other contributors as well... But there's like a couple other examples of maybe -- like, Sindre Sorhus I think is also doing alright, and he also lives in Thailand, which is one of the ways he keeps his costs low... But there's really not that many examples.

You'd think that the most well-known maintainers would be doing quite well, and then you could hope that people who are less good at marketing themselves or just don't wanna spam people on Twitter as much as I do... \[laughs\] Those people would also be able to make a living doing this... But it's just not the case.

Some of the things that would make it easier for me to do this than other people -- you can actually point to all these advantages I have, and it's not even working for me; that just tells you it's not gonna be a thing that most people can do full-time, unless they're just lucky enough to get a job that pays them to do open source.

I have a decent number of followers, and I fortunately work on projects which are user-facing. StandardJS and WebTorrent are things that users actually intentionally install. There's all these other maintainers who do amazing work that powers all this stuff, and they aren't making projects that people usually directly install. But oftentimes they're doing as much work or more work than the user-facing stuff. Those people have a lot harder of a time raising funds, because no one even knows that they're depending on this stuff.

And the really paradoxical and unfair thing is that the better job that they do as a maintainer, the less that people are gonna know that they exist... Because the better they do their job, the more invisible their software is. Their software will cause no exceptions, will cause no errors, so then no one will even bother to know that that's in their dependency tree. Versus if they actually did a bad job and there were all kinds of issues being caused by their package, then people would go to their GitHub page and they would file issues and they would complain, and they would at least get to see this readme where the person could say "Hey, by the way, I'm raising money for open source." It's so unfair... It's really hard for those types of projects to get sustained.

**Jerod Santo:** I have a draft blog post about these people, and I'm comparing them to the offensive line in a football team. I don't know if either of you are football fans, but the offensive line is the most thankless job in football. All you do is you protect the quarterback, or the runningback, whoever it happens to be... And when you're doing your job great, nobody notices that you're even there.

\[00:51:57.02\] And then the only time the camera comes on you is when you missed your block, and the quarterback gets sacked. Then everyone looks at you like "You dope... What are you doing?!" So it's a thankless thing, that only gets focused on when something goes wrong, and that's what these maintainers are. They're just like that. It's a shame...

That's why the quarterback is always thanking the offensive line when these get interviewed after the game is over, because they're the ones that made it possible... But they don't get any of the glory, they just get all the shame. It's really unfortunate, but it's just -- there's multiple positions in the game, and they play offensive line.

**Feross Aboukhadijeh:** Yeah. And sometimes these people didn't even ask to be maintainers.

**Jerod Santo:** Yeah, they didn't even try out. All of a sudden, "Hey, you're on the line! Get out there."

**Feross Aboukhadijeh:** Yeah, literally they just made a project and put it out there, and then suddenly they find that all these companies are basing their businesses on their code, and they suddenly feel like "Oh my god, I have to..."

**Adam Stacoviak:** Show up.

**Feross Aboukhadijeh:** Yeah, "I have to show up and take care of this, because people's builds will break."

**Jerod Santo:** "What if I miss my block and the internet goes down", you know...?

**Adam Stacoviak:** Before we round off this portion of the conversation, can you speak to the success of GitHub sponsors, for you at least?

**Feross Aboukhadijeh:** Yeah, I've just signed up for it, and so far I haven't really told anybody that I'm on there, so I can't really speak to it. I know some people are having quite good success with it.

**Adam Stacoviak:** Is it just Standard using the GitHub Sponsors button, or is it others? Just that one project?

**Feross Aboukhadijeh:** I think I just put it on Standard for now, yeah.

**Adam Stacoviak:** Okay. Because they've got the Sponsors button up in there, so they're telling people for you even if you're not.

**Feross Aboukhadijeh:** Yeah. One thing I like about GitHub Sponsors is that it puts it right there on the page, and it's built directly into GitHub. So in theory it should be a lot easier for people to contribute, especially if they already have their credit card added to GitHub, versus going over to Patreon. The other good thing too is that GitHub is matching the sponsorships for the first year, so it's pretty good.

**Adam Stacoviak:** Sweet.

**Feross Aboukhadijeh:** Yeah, we'll see. I'm really curious about other models, where there's more of an exchange of value, instead of this donation model. But in general, we need to try more things as a community, so I'm just glad that there's experimentation and that there are people talking about this. I just think we need to try more stuff and see where it goes.

**Adam Stacoviak:** Because Jerod put out that awesome disclaimer about our relationship with Tidelift and this show, I can share my free opinion without any concerns... And that's why I think I personally like the Tidelift model, because of that value exchange. Charity doesn't scale very well. It's nice, it does have its benefits, but when we talk about sustainability on the long-term, when you exchange value with a company in this case, if we're looking at the idea of companies being able to use open source and potentially in the Instagram models where others extract a massive amount of monetary value from it, how can we direct more of that value back to those who create and maintain and support the open source we rely upon?

If that's the idea, then you've got someone like Tidelift (or others who may come up) that say "Hey company, if you use Feross' project Standard, and it's in your dependency tree, if we can give you assurances, would you pay us so we can pay them?" That's why I like that model, because there's value exchange between the two; when value exchanges hands, money often flows... So that's a good model for me. Charity is great, it works... In the case of open source software I think it has its limits, and I think this is a more viable long-term option to learn upon.

**Feross Aboukhadijeh:** I wanna quote Dominic Tarr here... He's the guy who maintained EventStream. That was the package that was in the news a little while ago; I think we talked about it on JS Party... The one where somebody came along and said "Hey, you haven't been maintaining this. I'll take care of it for you", and then Dominic gave the package over to this person who was a complete stranger, and that person ended up putting a backdoor into the package to steal Bitcoin...

\[00:56:07.27\] One of the things that happened in the aftermath of that was he wrote this little post where he talked about what it's like to be a maintainer... And he said "If it's not fun anymore, you get literally nothing from maintaining a popular package." And then he gave this really funny anecdote about how he used to be a dish washer in a restaurant, and he did his job a little bit too well, so they promoted him to cook... And they only gave him 50 cents an hour more for that, but it was massively more responsibility... And he didn't feel like it was worth it, so I think he asked to be put back as a dishwasher. But he said that writing a popular module is like that, but times a million, and the pay increase that you get is zero. You just get infinite responsibility, no pay increase, and if you're not using the package anymore, then he feels like "What's the point?"

That's something that I think maybe Tidelift or something along these lines can change. Instead of popular packages being something that is a drain on you, especially if it's not fun anymore, if you're not using it anymore - what if instead it was an asset? Something like "Oh, if I take care of this package, Tidelift is gonna pay me however much per month", or some other kind of model.

Just imagine how different open source would be if that was the case. I think it'd be so different.

Now suddenly somebody who normally wouldn't be able to participate in open source because they need to get a job, or they don't have the free time, they could adopt a package, especially one that nobody wants to take care of, that someone's trying to literally give away at the first person who asks - they could adopt a package like that and even get paid to work on it. That would be so cool.

I really think that open source would just be in much better shape. People would say "I wanna maintain more packages, because I'm gonna make more money." That would be such a different world than what we live in today.

**Adam Stacoviak:** One lesson I've learned - you didn't say this word for word, but one thing I've learned this year, or something that's been on my forefront of like "What am I optimizing for?" is how can I turn my liabilities into assets? I think that's what you're talking about there - how can you turn what is often a liability, or what might be a liability to somebody, into an asset? That's what models like Tidelift do, is enable that.

**Jerod Santo:** One tool I'd like to mention, which is cool and speaks to this, and to the experimentation, comes from Open Collective. They have a website BackYourStack.com. We're talking about the problem with transitive dependencies, and not knowing who your offensive linemen are... This is a place where you can just put your GitHub organization in, and it'll analyze all your code and dig through it. I think it supports JavaScript, PHP, Go, Ruby and .NET right now; but it's open source, you can add other ecosystems.

And it will just analyze your software and show you all the different things that you're depending on. Probably similar to the way Thanks works. It's a nice, easy website that you could send to someone who's not a command line junkie and show them, "These are software projects in need", and we could support them via -- obviously for them it's via Open Collective, but whatever ways. So that's something worth checking out if the listeners haven't heard of BackYourStack.com.

**Adam Stacoviak:** Cool! Feross, let's close with maybe some hope, I suppose, for maintainers out there. You seem to have either thick skin, the tenacity, or all the above, to keep doing what you're doing... So what have you done to make being a maintainer a little easier day-to-day? What are some tips and tricks you can share on our way out of this conversation?

**Feross Aboukhadijeh:** I guess I should say that I think I could do a better job of all those things. I mean, I did get burned out a little bit in 2018, so... I think knowing when to take a step back and rest is really important. Also, there's this weird feeling of guilt you sometimes get as a maintainer, about "I owe all these people stuff, because they're relying on my code", and that's really not healthy.

\[01:00:16.09\] I've heard a lot of other maintainers talk about this... This weird sense of obligation that you have toward the users of your projects... I don't think it's helpful. I think that's been the thing that's been the least helpful to me as a maintainer. So finding ways to not feel that sense of guilt, and just remembering that open source is a gift to the world... It's like me saying "Here's some code I wrote. I'm gonna put it out there and you're free to use it to solve your problems and to help you... But I'm not necessarily promising that I'm gonna hold your hand forever with this code and I'm gonna fix every problem that might arise for the indefinite future. That's not part of the promise."

Just remembering that, and just contributing when I can, when I feel like I can, and just remembering that it's a marathon, not a sprint.

**Adam Stacoviak:** Well, we appreciate your willingness to experiment, your willingness to share your ideas... You said earlier that "I wanna give my code away as a gift to the world", and we certainly appreciate that as well. And we appreciate all the ways possible to enable open source software maintainers to live the lifestyle of a maintainer, whether it's a network of value or if it's financial value. Whatever the value it is that you're seeking, we here at Changelog wanna enable stories like these to be shared, and the opportunity to do the things we love... Because you quoted Dominic, "If it's not fun anymore, what's the point?"

**Feross Aboukhadijeh:** Yeah. And I don't wanna leave people with the impression that being a maintainer is not a good idea. I think that's really not the message, even though we've been focusing a little bit on maybe the darker side that isn't told as often. I really do feel like being a maintainer has been one of the best things in my life. I have friends all over the world now, from going to conferences, and I'm such a better programmer... It's been incredible. So if you're on the edge...

I also think that the financial model thing - I think we're gonna figure it out soon. It might not even be a bad time to start if you're thinking about spending more time doing open source. Maybe we will figure this out soon, and this won't be a thing where you have to choose between doing what you love and putting food on the table.

**Adam Stacoviak:** Well, Feross, thank you so much for your time today. It was awesome!

**Feross Aboukhadijeh:** Yeah, of course. I'm totally happy to be here. Thanks for having me.
