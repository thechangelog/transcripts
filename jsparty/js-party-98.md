**Jerod Santo:** Hey, hey! It's your JS Party friends! We are here to hang out and talk about JavaScript and the web. It's your boy Jerod, and I am joined by Suz, who's laughing at me... What's up?

**Suz Hinton:** It's great to be back! Thank you so much for having me.

**Jerod Santo:** If I can start off the show with Suz laughing, it's gonna be a good show. We'll see if we can get Divya going... Divya is also here. Hi, Divya! Say hello to the crowd.

**Divya Sasidharan:** Hello! How's it going?

**Jerod Santo:** It's going well, it's going very well. And we are here to talk about JavaScript and the web, celebrate such things, and we wanted to start off with a party with a little bit of catch-up. The new and noteworthy things in and around the JavaScript and web ecosystem. We have lots to talk about here. I wanna flip the script and actually start with a fun one... I started at first with the most interesting, but now I wanna start with a fun one.

Let's go to the JS13kGames - winners have been announced. If you're unfamiliar with this game, it's an awesome competition where you're supposed to make a game in JavaScript... And the website is down. \[laughter\] Are you serious...?

**Suz Hinton:** I have it up.

**Jerod Santo:** "Whoops! It looks like something went wrong." It's a game in JavaScript in less than -- what was it, 13 kilobytes of code. Correct, Suz?

**Suz Hinton:** Mm-hm. Yeah, I have it up. I was playing it earlier this morning.

**Jerod Santo:** Well, you crashed them, because their website is down. Sorry, JS13kGames.com. Is the winner still alive? Because we wanna talk about the winner, who has an awesome game, which I can no longer load, I don't believe...

**Suz Hinton:** I'm gonna have to cache this tab for life now.

**Jerod Santo:** \[laughs\] Suz, why don't you take over and tell us about the winner. It's a super-cool game. I can't load it, so please do.

**Suz Hinton:** Yeah, let's talk about it. I actually forget what it's called, just because I'm actually on the game. It looks like it's like XX142-B2.exe.

**Jerod Santo:** There we go.

**Suz Hinton:** That is what I'm reading from the title. I was really impressed with this immediately, because the first thing that happens with this game is you get thrown into what looks like a text-based narrative kind of description, like an opening scene of a text-based narrative... And I remember thinking, "This has so much text. This has to already eat into the budget of the 13 kilobytes that you have." I'm looking at it and I'm like "This is hundreds of bytes already", and I'm thinking maybe they do something tricky... Like, are they allowed to fetch swathes of text via Ajax, and things like that. So I was looking into it, and so I thought "Whatever. I bet you the rest of the game is really small. I'll look into this later." And then you click Continue and you just end up in this 3D game, and I'm like "Are you serious right now?! How are they doing this?"

\[00:04:13.29\] It's actually really cool. The idea is that you are this little sort of pointy avatar, and there's this concept of files... I think you understand this a little better, Jerod, but you're basically navigating through this 3D sort of path, and you have to use your previous ghosts of yourself expiring in order to sort of unlock gates to get through.

**Jerod Santo:** Yes, exactly. Thanks to pnevares in the chat who got us the direct link to the winning game, which is still loading... And the entry test that you're talking about - I'll just read it, because it's such a cool setup.

"The year is 2413. Humanity is enslaved by an alien race for more than two centuries already. You are an AI weaponized virus, built to infiltrate the alien network and deactivate all power generators and weapon systems. The alien antivirus will detect and delete you after 13 seconds. But remember, a file is never really deleted. Use the execution backtrace from your previous attempts to break in and destroy the main memory core."

So yeah, like you said, you basically move around and try to make it through certain gates. And the real gaming mechanism is the Backspace button, where you can start the level over and leave your previous trace there, and use it to advance. They say Backspace is kill -9 the executable, so... Super-nerdy, super-cool... Built by Ben Clarke and Salvatore Pravidi so congrats to them on an awesome game. I'm amazed by how you can fit so much into 13k.

**Suz Hinton:** Yeah, I'm looking through the source code and it's actually really nice to read. Even though it's minified, it's still incredibly readable. I've looked at the source code for these kinds of things before, like even JS1K and things like that, and it's always just been completely illegible. But this one's really cool, so you can see that in order to produce those large swathes of text at the beginning, they just created a string that had all the letters of the alphabet and the first numerical numbers from 0 to 9, all next to each other in one string, and then they're just using character code at, with the correct offset in the ASCII table in order to pull out the index of which one they need to express as the next text... Which I thought was really awesome.

And then you can actually see how they've set up a lot of the levels, too. They have a bunch of mappings with Xs and Ys, and things like that. So most of the actual source code is setting up all I guess the rooms, all the levels, and just plotting them out... I think that's really very cool, given that it feels like a very complex game.

**Jerod Santo:** It does. It's clever in so many facets. Just the idea itself is clever, and then the execution. The interesting thing about the way that I believe it would work is because the idea in the game is that you're replaying the previous run-through, there's so much recursive code, or just executing back the previous functions that were called, that you can squeeze a lot out of very little code, and make it feel complex, but really it's just rerunning something that's already run.

**Suz Hinton:** Yeah, it's super-cool. And yeah, I'm just surprised at how readable it is. They wrote some really beautiful code. A lot of the verbs and the variable namings really help you understand how it works. They didn't even have to do that, and I admire the fact that they were very thoughtful about how the code was presented as well, so... It was an absolute joy this morning to take a tour of it.

**Jerod Santo:** I've done one game jam in JavaScript and had a lot of fun doing it, but I've never done any code golf kind of competitions, or even really tried coding golf. I know those kinds of things began in the Perl world... That's a tongue twister, Perl world. Have either of you done code golfs, or trying to squeeze every single character down to the smallest you could possibly do?

**Divya Sasidharan:** I think I've seen the -- someone has done challenges within like 140 characters when Twitter used to be 140 characters... So you would write a problem, like a fizz buzz or something, within that character limit, as much as possible, which is really fun to see. It's still unreadable, but it worked.

**Suz Hinton:** \[00:08:13.05\] I think that the only stuff that I've really run into is just regular -- trying to write code for embedded devices, you are always resource-constrained... I think the biggest golfing expedition I went on recently was "How many frames of a gif can I fit in memory for this device to receive over the internet? And then what is the best data structure to try and make the most of memory?" I was like "Do I just use a continuous stream of memory on the device (contiguous), or do I use linked lists in order to use that fragmentation better?"

For me it's always like "I need to fit more than six frames of this gif on this device. How do I do that?" So my stuff is more like memory golfing more than actual file size golfing, I think.

**Jerod Santo:** The only bit that I've done - I've read the code golfs... I think it was like a Vim golf, which maybe I've tried that, which was fun back in the day... Like, "What are the fewest number of Vim commands that you can do to accomplish whatever task is out there?" Which is a great way to learn Vim if you're into that kind of a thing. I used to do these code games where I would create code - usually in Ruby or JavaScript - that represented a movie title. The goal is the person has to guess then what movie it represents. That's the only time I've really written code; not for readability, or just to get this stinking thing to work, but to write it in such a way that the form -- the form of the code is more important than what it actually executes. It's definitely mind-expanding.

Okay, let's move on to a little bit less fun, but probably more impactful for your general JavaScript audience, those who are not making super-tiny code games or want to play them... It's that top-level await has landed in V8, and is in Babel, and a bunch of other things. Myles Borins, a friend of the show - I think he's been on one or two episodes of JS Party back in the day - writing about top-level await on the V8 website... This enables developers to use the await keyword outside of async functions. So we've had async/await for a while now, but you've never been previously able to use it outside of an async function. Now you can use it right at the top-level of a module, and all sorts of interesting use cases fly out of that. Is this something that passed your guys' radar? What do you think about async/await top-level await?

**Suz Hinton:** I know that Myles for the last few years was actually trying to gather use cases for it... Because I think he was one of the ones that initially suggested it; people were pushing back on async/await because of that, so he was trying ask -- I remember he asked me about it, and I said, well, async/await is really nice for (again) embedded. I'm like a broken record about this topic, but for hardware-related things it just makes the code so much more readable and maintainable, to a point.

So for me, having to wrap things constantly just kind of made some of my code a little bit more convoluted. It was just wrapping things for the sake of wrapping things, just to get it to work, which feels like a code smell. So I like the idea of it... I'm actually kind of fascinated about how they would have implemented that in the engine more than anything. I think that it's gonna make my life easier, but other than that -- I'm not sort of pumped and shouting out into the streets about it, but I know that this was a very long game to float this by the implementers of the spec.

**Divya Sasidharan:** \[00:11:45.05\] Yeah. I find it really annoying to always have to remember to reuse async when I await stuff. So for instance, if you're calling an API, you're always awaiting it, but then in order for that await to work, you have to wrap the entire function in an async. So I always get that console error saying "Hey, you don't have async. You can't use await without async", which is like -- half the time I'm like "The async feels very redundant." It's almost like doing a return promise and doing a resolve when you just wanna do Promise.resolve() instead. It's the same idea, where I'm just wrapping and adding a lot of boilerplate to code that doesn't have to use that particularly.

Specifically, a lot of times -- I write Vue, so I would have to create an entire function that's async, even though only one part of it uses await and the rest doesn't.

**Suz Hinton:** Yeah, totally.

**Divya Sasidharan:** So in a method it's like, that method is async, and it does multiple things, but I need an await. So it makes it much cleaner this way, because there are a lot of times where you're just using -- the assumption is that there is a promise, you're making an API call or whatever, that's a promise, so you can just await it, you don't have the async.

**Suz Hinton:** I really like how you likened it to some of the boilerplate you have to do with promises, where you just wanna do the thing. I've definitely felt the same sort of cringey feeling as I'm trying to put things together, and it's just causing bloat.

**Divya Sasidharan:** Yeah, especially because for a long time whenever the async/await was starting to come into the fore, people were talking about how async/await is way better than promises... And I was like "Sure, it's great", but then -- because a lot of the times corollary was talking about promise hell, and how frustrating that is... Because with await you can basically just create a const, and then you would await, and then whenever that is ready, then you can use it, and so on. But the thing is the argument around less boilerplate never made sense, because I was like, okay, yeah, async/await is cleaner to read, because you actually get a return value, versus promises, but at the same time you still have that boilerplate, because in order to use await, you need async. So you need to wrap everything constantly.

I think that was the part that not a lot of people talked about. It's kind of like the handwavy, like "Oh, it's fine... It's better than what we had before", but that was the one annoyance I always had - just this constant having to remember...

It's almost similar to -- I was talking to someone about this... Whenever you create a button, you have to always create cursor pointer as a CSS.

**Suz Hinton:** Yes! Oh my god, yes!

**Divya Sasidharan:** It's like everyone needs that, and you still have to write that boilerplate.

**Suz Hinton:** \[laughs\]

**Divya Sasidharan:** Thank you, CSS working group...

**Jerod Santo:** Is that a fact?

**Suz Hinton:** Yeah.

**Jerod Santo:** I guess I've never noticed that...

**Divya Sasidharan:** Yeah. I mean, every time you want a button, you always want a pointer on it. Always.

**Jerod Santo:** Sure, yeah.

**Divya Sasidharan:** But it doesn't work by default, so you have to add cursor pointer. So the boilerplate is always button cursor pointer. \[laughs\]

**Jerod Santo:** Button cursor pointer.

**Divya Sasidharan:** Yeah.

**Suz Hinton:** It's like one of the first lines you write, because you just want a global for it. \[laughs\]

**Divya Sasidharan:** Exactly, yeah.

**Jerod Santo:** Yeah, throw that in your normalize, or whatever... So a couple of things -- you mentioned the pushback, Suz, and Myles does talk about some of the arguments about top-level await being a footgun, which I guess that's a term I hadn't really heard before, but it's something from which to shoot yourself in the foot with.

A couple of things Rich Harris wrote about is that it could be a way to block execution, it could also block fetching resources, and the team has done a pretty good job of addressing these potential pitfalls... At least accounting for them. Now, I think you still probably can shoot yourself in the foot, but you can do that with most tools, especially sharp ones... So check out the blog post that Myles wrote for more information on that, and get out there and try top-level await.

Now, maybe you're thinking "I already have this. It's in my dev tools." Well, that was the only place it previously existed. It was in dev tools as (I guess) syntactic sugar, or a nice way of using it without that extra anonymous function... But now you'll find it in the browsers, outside of the dev tools... So there you have it, top-level await.

**Suz Hinton:** I think that footgun actually does make sense... But the issue is that this says you can do a while loop that runs forever, and you can stuff it in an async function, and then that will actually stop it from blocking the whole execution main thread... Which is really interesting, so I'm just hoping that people remember that they still need to put that in there.

**Break:** \[00:16:14.18\]

**Jerod Santo:** Well, let's talk about a different thing, which is security-related, maybe not necessarily performance-related. It's a cool new tool by Liran Tal (I apologize if I pronounced your name wrong). He works for Snyk, and he's a sneaky security guy. We're actually talking with him to bring him on JS Party in a future episode and talk about security in JS and all of the different things that you have to think about to write secure JavaScript code.

He has a new tool called is-website-vulnerable, which uses public Zero-Day, or listening to the CVEs, the known vulnerabilities in JavaScript libraries. It's a command line tool that you can install, and then run on Npx is-website-vulnerable, pass it a domain, start with your own, and then you can move on to other people. Use it in a white hat way, please... And you can find known vulnerabilities in the front-end JS libraries.

The example is run it against example.com, and it will spit out basically "This is running jQuery 2.1.4, which has two known vulnerabilities", it will link you to more information about those, and you can run it against your websites, and then fix all your known vulnerabilities. What would be cool is if it could fix your unknown vulnerabilities, but that's a whole other step.

**Suz Hinton:** The first thing I thought of when I read about this news was some people are gonna feel kind of threatened, just because not everyone sees public security conversations as a good thing... They're basically gonna feel more vulnerable to attack from people and get afraid, but that's not the point of this.

And then the second thing I thought of was to do with bug bounties, and I was like "Oh, people have another tool for those who try to participate in security bounty programs to report vulnerabilities, and things like that." It gives them another tool in their toolbelt to try and find stuff when the source code of the website itself is not necessarily open source. It's kind of interesting, actually. It provides that weird middle ground.

**Jerod Santo:** Yeah, because it's publicly available information, but it's not easily-surfaceable. So I think probably script kiddies especially will have tools like these inside of tools like Metasploit, I believe... So I think if you're already malicious and you're bent that way, you probably have some of this information, or at least ways of getting at this information. This, I believe - its point is to point it at things that you care about and then fix them up. But yeah, any tool can be used both for good or evil, so therein lies the rub.

**Divya Sasidharan:** How does this work with the current Npm vulnerabilities thing? If you have things on GitHub or if you use Npm, you can do Npm audit and it shows you all of the security vulnerabilities in that. Is it similar, or...? I can't quite tell.

**Jerod Santo:** \[00:19:55.26\] Yeah, that's a great question, and somebody actually asked him that. The thing that separates it from the Npm audit is this is running on a remote website. So this is not a thing that you're using internally, or in your dev dependencies, or anything that you would have private on your backend, so any Node modules you're using, with Express, or server-side - it doesn't do those. It's just whatever you're shipping to your clients. It's basically just downloading whatever JavaScript that your website sends on requests, and then unpacking those, and detecting and running finger-printing tools to figure out what you're running against... So it says "Oh, you have jQuery 2.1.4", and then it basically takes that knowledge, runs it against the databases, probably does some sort of remote lookup and says "Well, what are the known vulnerabilities here?" and displays them to you.

**Suz Hinton:** I'm running it on my website right now.

**Jerod Santo:** Oh, stay tuned! We're gonna find out "Is Suz vulnerable?"

**Suz Hinton:** I have probably less than 2kb of JavaScript on it. I try to keep my website very deliberately tiny... And so yeah, I'm actually excited to see... Zero total vulnerabilities!

**Jerod Santo:** Yaaay!

**Suz Hinton:** Yesss! \[laughs\] And that, folks, is how you fix up all your vulnerabilities - just don't write JavaScript. \[laughter\]

**Jerod Santo:** Just don't write any, that's right.

**Suz Hinton:** I have a tiny amount of JavaScript that's sort of like -- I think there might be a small resize listener. I'm using CSS Grid in a weird way, to create sort of a Pinterest-style tile layout, but it's not quite perfect... So I have to run some JavaScript to adjust the heights, and things. That's pretty much the only JavaScript I think I have.

**Jerod Santo:** Okay. Well, I'm npm-installing it as we speak, and we'll run it against changelog.com and see if we're quite as cool as Suz. Spoiler alert, probably not.

**Suz Hinton:** I mean, I'm cheating; I don't think I'm using a single library. That's why, really. It's absolutely cheating.

**Jerod Santo:** Oh, yeah. That's totally cheating. Because I think they're mostly checking known libraries, right? Not your own--

**Suz Hinton:** Yeah.

**Jerod Santo:** They're not gonna be checking for malpractices in your own code, I'm guessing.

**Suz Hinton:** Yeah, that was the whole joke, sorry. \[laughter\]

**Jerod Santo:** Oh, okay. Good joke. It worked on me. \[laughter\] Okay, next up - we have Vue 3. So vue-next is the up-and-coming and not released version of the beloved Vue.js. The team has been working on this in a private repo, in the vue-next repo on GitHub, and they've just recently open-sourced that repo. So it's not ready; I think it's pre-alpha, which - alpha is pre-beta... So it's pretty pre at this point. \[laughter\] Don't use this; it's not documented, and it's still very much in development... But it's out there, and you can read it and you can check it out. That's exciting, because I didn't even know there was a Vue 3 coming, and now I can look at source code.

**Divya Sasidharan:** Yeah, it's been coming for a while. It's interesting, a lot of this, with Vue 3, were all in RFCs, so they were talking about what was to come in order to get people who were using Vue, and the community overall. So they had a lot of RFCs. The composition function API one was the huge controversial one, because it introduced huge changes in the way you write current Vue syntax... So that was a way for them to get audience and community feedback overall.

And then when they released vue-next, actually, there was a lot of people who were very angry about that, just because when it was released, they were like "Oh, it's all open source now", and I think people were like "Ha-ha! TypeScript was open source from day one. This is not really open source, because you do things in private and then you show it at the end...", which kind of begs the question of what counts as open source.

I think it's really unfair, because there was a lot of flack for people who were just basically tearing the Vue team apart, saying that they should have done this from the beginning, and why did they make this private, and so on. The RFCs were public, but how they were implementing things was still pretty private for a long time.

\[00:24:03.22\] So it seems from looking at GitHub -- they essentially have checklist of all the things that they're working on, so they check them as they finish them. I think there's a couple more items on there... Not that many. I think more than half is done. And they released it a week ago, from the time of recording... So yeah.

I think it's really great that they open-sourced it as they're working through it. I don't fault them for not open-sourcing it from the start, in a way. As I said, it's really unfair to claim something is not open source when it wasn't open source in the beginning. There are lots of projects that weren't open source in the beginning, and then they just were like "Oh, here you go. Here's the code that we worked on, that we used your money for." Yeah, it's a bizarre argument.

**Jerod Santo:** Yeah, I'm not a purist in any way. If you wanna work in private and then open-source something, go for it. I think maybe from the inside of the community, if there's an outer circle and an inner circle in the community - which I'm not claiming that's the case with Vue - I could understand where if I was on that somewhat outer circle, like I'm a casual contributor and a user, and then there's this inner core and they're working on something in private, maybe from that perspective I might be a little offended, like "Why couldn't I participate until now?" I don't know/believe that's the case necessarily with Vue.js, and I think from the outside perspective, the thing is pretty alpha. It's not like they just dropped version 3 on everybody and said "Here, have fun." It's still very much community-oriented.

**Divya Sasidharan:** Yeah. And even then, if you look at the trajectory of how things have been going, a lot of Vue's development has been through RFC. They didn't do it in the beginning of Vue, so Vue 1 and Vue 2 didn't do RFCs, but I think they started doing RFCs very recently.

In a way, a lot of the process around how exactly they came about with Vue 3 has been very public. Evan has been taking about Vue 3 forever, for a really long time, and just introducing the community to what is to come - TypeScript support, the function API, and all of that kind of stuff.

So they might not be showing the code that they've been working on, but talking about it means that they are pretty public with what exactly is happening and what the thought process is in terms of what's to come. In a way, it still counts, because they were pretty open. They weren't fully open, sure, but they were talking about it and trying to get feedback from everyone. I think just looking at the way the RFC process works, compared to other frameworks, they actually respond to every single person in the community; the core team members actually answered -- like, if someone had a question on there in RFC, they would answer them. And they'd even take conversations into separate channels, depending on the depth of someone's question, and if it was valid, and so on. So yeah, I think that's really cool.

**Jerod Santo:** So as I said, a couple times pre-alpha stage, but Divya, do you know, is there any sort of ETA, or anything?

**Divya Sasidharan:** They keep saying end of year, but I have no idea.

**Jerod Santo:** Well, that's pretty soon.

**Divya Sasidharan:** Yeah, end of year is pretty soon. It's already October. Maybe it'll be like a Christmas present, like an end-of-year thing.

**Jerod Santo:** There you go.

**Divya Sasidharan:** I have no idea. And I don't even think they've put a specific date on it. Perhaps the core team internally have a date, that they haven't publicly announced, just because it's hard to be accountable when there's so many variables. So end-of-year is what they've slated Vue 3 for, but there's a chance yeah..

**Jerod Santo:** Right. As the old joke goes, "They said end of year, but they didn't say which year."

**Divya Sasidharan:** \[laughs\]

**Jerod Santo:** So lots of room for slippage there.

**Divya Sasidharan:** That's true, yeah.

**Jerod Santo:** And as those of us who've done many estimates over the years, I will just say take the developers' estimated time and then triple it, and then you're gonna be about there. You'll be right on task, so... Wait and see.

Let's talk about Facebook VR/AR lifelike avatars. Divya, this was your bullet point in the list of news, so tell us what's interesting about this.

**Divya Sasidharan:** \[00:28:09.21\] Yeah, so this came up recently... I'm not super into VR or AR, I just constantly read stuff about it, because it seems really cool and totally outside of the zone of knowledge that I have... But one of the problems I've heard from the VR and AR community has generally been how terrible avatars are, and how there's not a lot of life-like features to them. It's very cartoony and silly-looking. So Facebook has been working on lifelike avatars, just because a lot of the times when you work in VR, the idea of VR and AR - I think they call it XR, like cross-reality, because it's both augmented and virtual reality...

**Jerod Santo:** There weren't enough acronyms, so they had to add one more.

**Divya Sasidharan:** Yeah, XR. So the idea of it is if you want to extend -- I think it's extended reality; yeah, extended reality. So the idea of that is if you want people to have this augmented version of the current world, you need to implement a way of making it very much more real-lifelike. So they've been working on trying to create avatars that are more akin to what you see IRL. They've been working on this - I don't even know how long, but essentially with the Oculus now it's able to capture gestures and facial features. It can even mimic how your face moves... Because in the past they would be pretty straight-faced; it would basically be your face, but they wouldn't be able to capture tiny gestures that your face makes... But I think with the way they've been working with Codec Avatars and real-life avatars, it's able to capture facial movements, which tend to be really minute... Which I think is really remarkable.

**Jerod Santo:** I'm just waiting for the day that we have what they had on the Starship Enterprise, with the holodeck. Once we're there, I'm ready for it. Until then, the uncanny valley appears to go on for days. Very cool - links to the research inside of that in the show notes. Facebook is building the future of connection with lifelike avatars. Very interesting.

**Divya Sasidharan:** Yeah. It's funny to see the -- they did the keynote at F8... That's the conference they do, right? Yeah. And it was interesting to watch... Because it seems so ridiculous. They had this interview with one person talking to another person, and asking them to do facial gestures... And then the other person is like "I can do a shocked face", and she does a shocked face. \[laughs\] "I can also roll my tongue", and I was just like "What am I watching...?"

**Jerod Santo:** So here's a conspiracy theory - maybe Zucerkberg is their beta test for their lifelike avatar. Because he seems to be almost human.

**Divya Sasidharan:** Isn't he like straight-faced? He has no facial gestures.

**Jerod Santo:** That's what I'm saying. Remember the video when he was being interviewed by Congress, or something? He was at a trial, and he was drinking the water, and everything was very robotic. He was, like, telling himself "Drink water now, because that's what humans do." So maybe he's just an avatar in progress.

**Divya Sasidharan:** The grand plan. But nonetheless, it's actually really interesting. As much flack as we give for all these companies, like Facebook and Uber, they do a lot of interesting work. Uber is doing a lot of driverless vehicle type things, which is super-interesting and cool. And Facebook is doing this cool XR work, which is interesting as well. If you just take aside the ethics part of things...

**Jerod Santo:** \[laughs\] If you just throw away the ethics, everything is cool.

**Suz Hinton:** Divya, are you serious...?! \[laughter\]

**Divya Sasidharan:** No, I mean like, ethics is important, I'm just saying...

**Jerod Santo:** Right, right, right. It's not all bad, is your point.

**Divya Sasidharan:** ...the technology is really interesting. But obviously, there are some -- I have a lot of qualms around these particular... Because I'm like, "It's cool to have lifelike avatars, but would I want to --" I'm still like "Do I want augmented reality to be a part of my reality?" I don't know...

**Jerod Santo:** If augmented reality is part of your reality, does that make it become just reality again? I don't know... These are the deep questions that we have.

**Divya Sasidharan:** Yeah, it's like the metaverse, and I'm just like "I don't know if I'm ready for the metaverse..." \[laughs\]

**Break:** \[00:32:32.10\]

**Jerod Santo:** Alright, we are back... And we're here for Pro Tip time. This is where we share our pro tips, whether we're an actual pro, or maybe not. But we have some lifehacks, we've got lessons learned from doing dumb things... Whatever it happens to be, we like to share them with you. Suz, please, share with us your pro tip.

**Suz Hinton:** Yeah, I wanna talk about Hamerspoon... Which is technically Lua, but I'm gonna try to sort of say it's similar syntactically to JavaScript.

**Jerod Santo:** \[laughs\] This is not Lua Party, Suz. But I'll allow it.

**Suz Hinton:** I'm sorry...! But it's really good. So it is relevant to JavaScript, too.

**Jerod Santo:** Okay.

**Suz Hinton:** This is only for OS10, so I'm sorry to those out there who run Linux or Windows. This is specifically for OS10 or macOS. Hamerspoon is a tool for scripting automation, so you can do certain tasks. The reason why I bring this up is because you can write AppleScript or you can write JavaScript, which ends up just getting compiled back down to AppleScript. But those APIs that the native operating system gives you, even the JavaScript ones, are just not fantastic.

**Jerod Santo:** I agree.

**Suz Hinton:** And so Hamerspoon is aiming to be an alternative to that. It is for the Lua scripting language, but if you do write JavaScript, you'll find it joyfully familiar. It's just not quite the same.

Hamerspoon was introduced to me by a colleague when we were running a bunch of demo stations at a conference recently. He wrote all of these scripts to set up four different demos, and we could just hit a shortcut and it would set everything up. It reminded me very closely of my Twitch stream setup, which I've written in AppleScript. This is so much better that I actually wanna move all my stuff to it.

So I do actually have -- my AppleScript for my Twitch stream is open source, and what it does is it pops up a bunch of Chrome windows that have things like lists of followers updating, so that I can read them out; it opens a specific Chrome window in a specific streaming profile for me... It also starts a bunch of programs and minimizes them, and then it starts playing music that I have in the background of my stream, and things like that.

You can check that out, I will include the link in the show notes... But it just has these weird -- AppleScript has these weird issues with it. I've actually had people open issues on my open-sourced AppleScript, because they'll say "What is that funny, weird, A ASCII character on the end of every single line that you have? Is that a bug when you were committing it, or is it something weird with your computer?" And I said "Well, no, AppleScript doesn't allow you to just do line breaks wherever you please. It will actually break."

\[00:36:14.06\] So the way to do it is to use ASCII code 182, and that is the A with circumflex accent. That's how you actually get your code to go to a new line. But that character is visible in your AppleScript, so it's extremely silly.

**Jerod Santo:** I'm looking at it right now, it does look silly.

**Suz Hinton:** It does look very silly, and it's only in certain locations, where I'm trying to define an array, or something like that, and you can't just have line breaks in an array. So you end up with these giant objects, long lines, which is really hard to read and maintain. Hamerspoon takes a whole bunch of that stuff away. There's already pre-written spoons (that's what they're called), which are like plugins that do very specific things. It can even do things like when your computer transitions between different Wi-Fi SSIDs, you can actually have something happen. Incredibly useful things to augment your everyday life on your computer with.

I want to get more into this stuff. Not necessarily automation to be lazy, but just having little things happen that increase the quality of life on my computer every day, that I've sort of smoothed over because I thought "I'm not able to do that on the operating system."

**Jerod Santo:** Yeah, I wonder if I can use this -- I have one desire which I have never quite filled... I want a copy as markdown system service. You basically take some HTML -- because we do a lot of stuff where we'll copy it and then we're basically covering it as a piece of news... So we wanna put the markdown in there as like a blockquote with markdown. I want a copy as markdown, and there's a Chrome extension - again, I don't use Chrome - or there's Safari things that don't really work... But I would love it to be a system service. That led me to writing some AppleScript. Then I was like "Well, I can use JavaScript now, right?" So I went and looked at the JavaScript APIs that Apple exposes, and it's like there be dragon.. what's going on there... \[laughter\] And I was like "I don't really need this that bad", so I just stopped. And I wonder if I can achieve that with Hamerspoon maybe.

**Suz Hinton:** I know that there's some markdowny things that you can do in it. The API is just so incredibly extensive, and it made our life so much easier with demo stations and automation, but it is really good for other little conveniences like that.

**Jerod Santo:** I didn't hear - did you say you're going to rewrite this Twitch setup, or you did rewrite this Twitch setup?

**Suz Hinton:** I was aiming to, but because it's not cross-platform, I'm just wondering what I should do about that... But mostly because I also wanna be able to run some very similar tasks on Windows as well. So it hasn't solved all of my problems, because I would have to use something like maybe autohotkey or something like that on Windows. So if anyone's got some good Windows automation suggestions... Otherwise I'm gonna have to use PowerShell, which is totally fine; it's just that I don't' feel as comfortable -- it doesn't feel as intuitive to me to use something like PowerShell.

**Jerod Santo:** Very cool. Alright, Divya, you are up. Pro Tip time.

**Divya Sasidharan:** Cool. Mine is not a super-technical pro tip, but I feel like I should stress this - it's really important to find balance in your life. It's more like a pro tip for me, myself... Because I find that oftentimes you get really wrapped up in work and you assume that work is always a priority. And sure, it is, but I think it's also important to note that your own health and well-being is also really important.

I feel like it's such a cliché to say self-care, but I like to think of it more as just like taking the time to basically refocus yourself. I've been using Headspace a lot, just because it's a really great tool to take however much time you need... They have various time increments, so you can do one minute if you don't have a lot of time and you're impatient...

**Jerod Santo:** \[00:40:08.06\] Is this a website, is this an app?

**Divya Sasidharan:** It's an app for meditation.

**Jerod Santo:** Okay.

**Divya Sasidharan:** It's also a great tool if you need a wind down before going to bed. They have various sleepcasts, they have bedtime stories... I know it sounds so childish, but it's kind of like a fun, little story -- I mean, people listen to stories like This American Life, and all of this stuff...

**Jerod Santo:** Sure.

**Divya Sasidharan:** Kind of similar, but it's just to take your mind off of the things that you were doing during the day, and to just wind down... Which I think is really important, because taking rest and just resetting is useful to being effective in your work, and so on.

**Suz Hinton:** I agree with this, and I also use Headspace. If you work in the U.S. and you have health benefit offerings, sometimes you are actually able to expense the subscription to Headspace as well, which is something to look into. In my last two jobs, including my current job, I'm able to actually expense things like Headspace, which is really cool.

**Divya Sasidharan:** Yeah, it's pretty cool.

**Suz Hinton:** I find that sometimes I accidentally get really pumped for something just before bed, which sucks... \[laughter\] Last night I was looking something up, and then I realized all of a sudden I could achieve something way easier in a technical sense for a project, and then I was like "Oh, I just wanna do that now...!", and then I obviously had to go to bed. So I usually use Headspace - one of the bedtime ones - to just let go of that, so that I'm not spinning all night, saying "And then I'm gonna do this, and then I'm gonna write it in this way, and then I'm gonna glue this piece together." Otherwise, I just don't sleep. And then of course, I get up the next day and I'm so ineffective and tired that I don't end up being able to do the thing.

**Jerod Santo:** I'm with you. Divya, you found out a couple weeks back on our learning lessons episode that I listen to podcasts before bed, or as I trail off to sleep... And one thing I try to do with those -- I don't do that to learn as much, although you do end up learning on accident... But I try to listen to ones that I don't really care about all that much, or that I'm not invested in, or trying to dig everything out... Like the stories, or people playing games, people hanging out, or comedy podcasts where I don't really care that much what they're saying. That helps me just turn my brain off, listening to somebody else's brain for a minute, until I can actually fall asleep. But I've never heard of this -- sleepcasts? Did you say sleepcasts?

**Divya Sasidharan:** Yeah, it's part of the Headspace app. Headspace has various tracks, and I think sleepcasts is a part of that; there's a track for it. It's technically this idea of like -- it's meant for nighttime use. And then they also have various sounds. If you need the sound of rain, or a rainforest or something, they also have sounbites that you can use, if that helps, as well.

**Suz Hinton:** Speaking of... My favorite podcast to fall asleep to lately has been Bilbcast. It is Bilbo the cat, purring for an hour.

**Divya Sasidharan:** That's adorable! That's so cute.

**Jerod Santo:** It's just a cat purring?

**Suz Hinton:** Yes.

**Divya Sasidharan:** Oh, my god...

**Suz Hinton:** And he's sitting in his owner's lap, and sometimes she'll change the way she's giving him attention, and then he'll just start purring in a different way, because he gets super into it. Maybe she's scratching him behind the ears, or something... And it's very cute. You should follow him on Twitter too, he's a great cat.

**Jerod Santo:** Love it.

**Divya Sasidharan:** That is amazing.

**Suz Hinton:** How about you, Jerod?

**Jerod Santo:** \[00:43:50.12\] Yeah, so for my pro tip - this is something I wanted to talk about during our communication episode that we did a few weeks back, we just never quite got around to it... And I thought I'd throw it in here, as a bit of a follow-up for communication skills. We talked about issues, we talked about PRs, we talked about how to convince people of things, and talk to users and whatnot... One thing we didn't address was just email in general, and how to write effective emails, and how to get back what you're looking for.

There is a fellow named Lazarus Lazaridis. Sorry, Laz, I messed up your last name there. A little alliteration and some rhyming, but... He wrote a post called "Composing better emails" specifically for developers, like how to quickly address what you're communicating, how to avoid misunderstandings, how to save time with your email... Because we can all waste tons of time in email, both as a recipient and then as a sender. You send an email and you're like "Well, that email sucked, because the person didn't understand me, or they didn't answer the question..." So he has a bunch of really cool tips.

The pro tip for me, which I've just started to do in the last couple of years and I've found to be the one small thing that I think has affected my emails for the better the most probably in my life, is if you have multiple things that you're asking for - lots of times you have a few things that you're saying, as the email tends to be a little bit longer form than a text, or a Slack, or what have you.

Let's say you have three things that you're asking of the recipient of the email. It's incredibly effective - I would love to have stats on this - if you number the things. And it's a small thing. But if I have three things to ask, I will just put "Number one, here's my question. Number two, here's my question. Number three, here's my question."

What happens oftentimes - maybe y'all have experienced this - is if you don't number them, or make them explicit, and you do ask a few things, maybe you even finish it with a sentence that's a question, or three questions at the end, is people will either answer the first one and that's it, or they'll answer the last thing you said and that's it... Or sometimes they're really bad and they don't answer anything that you're asking of them; you can't fix that. \[laughter\]

I've found so many more people will answer all n questions that I have, or address all n things that I say, if I just number them out explicitly. It's a visual cue... And receiving, as well, I appreciate it. I'm like "Okay, here's your four answers - one, two, three, four - for the four questions." So that's a little bit of a pro tip. Also, I'll link up his post, "Composing better emails" in the show notes. It's worth a read. He's got a lot of good ideas as well.

**Suz Hinton:** I could do with this. I'm definitely that person who is guilty of -- I'll read an email from start to finish and then I might reply to it half an hour later, because I got distracted by something... And then I just won't see all of their requests in there, and then I'll be pegging on extra emails, saying "Oh, and by the way, to answer your other question..."

**Jerod Santo:** Follow-ups, yeah.

**Suz Hinton:** That's very annoying.

**Divya Sasidharan:** Often, whenever I have to ask someone a question, I want to give context to that question, and then the question gets buried in that paragraph.

**Suz Hinton:** \[laughs\]

**Jerod Santo:** Right?!

**Suz Hinton:** Yeah, I've been doing that a lot lately, too.

**Divya Sasidharan:** Yeah. Because it's kind of rude to just start with the question... But at the same time, I'm like "If you started with it, they would be able to.. yeah."

**Jerod Santo:** Yeah.

**Suz Hinton:** I've started bolding stuff, which I feel is the more crass version of numbering things. I need to stop bolding things and actually just lay out my emails properly...

**Divya Sasidharan:** It's funny, because I know lawyers do that a lot. They'll be like "Blah-blah-blah... And **please remember** to do this thing."

**Suz Hinton:** I know exactly what you're talking about. I used to get ones from a certain attorney, highlighted in bright yellow... \[laughs\] In all caps. And I felt like they were yelling at me for being an incompetent client.

**Jerod Santo:** I think we all tend to use bolding. Rebecca in the chat says they also use bolding for most relevant bits. You've gotta use bolds like you use salt on your meal - sparingly; too much, and you just ruin it. If everything's bold, nothing is bold. Am I wrong? \[laughter\]

**Divya Sasidharan:** \[00:47:56.11\] You really improve the taste, but sure. Yes.

**Jerod Santo:** Well, you've never tasted one of my emails. They are tasty morsels. \[laughter\]

**Divya Sasidharan:** Short and salty.

**Jerod Santo:** Short and salty. So there you have it, our pro tips. I'm curious from you two, any other tips on emails specifically, besides the numbering bit that you've found to be helpful for folks? I'm putting you on the spot.

**Divya Sasidharan:** I think the other thing that gets often forgotten is the importance of the subject as well, and crafting the proper subject... Which is really hard. Because sometimes if I have a question that I want answered, I put the question in the subject, which is like -- I don't know if that's effective... Because sometimes I don't want it to be too direct. Like if I ask the question and I don't expect them to say yes, I'll be like "If they see the question, they'll say no and they won't even bother reading the email... So I try to create a hook of a subject, that gives enough information, but not enough, so that they have to read the email.

**Suz Hinton:** Uuh...

**Jerod Santo:** Uuuh...

**Suz Hinton:** So crafty.

**Jerod Santo:** This is akin to clickbait, right? I mean, it really is.

**Divya Sasidharan:** Yeah, it really is. \[laughter\]

**Jerod Santo:** It's kind of the same concept. It's like with the title of a blog post - "How do I make it intriguing, but also not giving away the content...?" It's tough.

**Divya Sasidharan:** Yeah, exactly. Being mysterious, but not -- I don't know.

**Suz Hinton:** I'm not that creative... Although one thing that a lot of people do at my new place of employment is instead of -- because we use G Suite. So instead of highlighting a word and then linking it to something, and then you have these paragraphs where there's all of these distractions, where you're like "Oh, there's a link there, and there's a link there; maybe I should read this and come back to the email." Like, you write the entire email and then you just do the markdown-style footnoting, where you'll just have like zero in square braces, straight after something that you're mentioning (like a document), and then you just number them all.

Then right at the bottom of the email, after signing off, you just list them one underneath each other, with those footnote numbers. And I've found that so helpful... Especially because new, I'm just like "I have to read all the documents, and I have to find out all these things!" But instead, I'll read the email all the way through and I'll be like "Yeah, I'm gonna look at them once I've actually got the gist of what's going on." I don't know, it just kind of shortcuts my brain away from wanting to click on all the links as I'm going along.

**Divya Sasidharan:** Okay. That's interesting.

**Jerod Santo:** That is interesting. Gerhard Lazu, who's a Changelog friend, who's done a lot of our infrastructure work, and has written some blog posts and whatnot - he wrote this big, long blog post about the new infrastructure a while back... And he put all of the relevant links at the very bottom, in the exact same style that you're saying. And I went back and I was like "Dude, you've gotta in-line those, because nobody wants to wait till the end..." \[laughter\] And he goes "Am I the only one who doesn't like to be distracted in the middle of a sentence by a link, and then I'm gonna click on it, I'm gonna go somewhere else and never come back?" I'm like, "Yes, you're literally the only one. You have to put those in-line." And now I can say "No, there's two people, because Suz loves it, especially in the context of emails."

**Suz Hinton:** \[laughs\] Yeah. I'm the person that has -- I have a browser extension to stop and hide gifs, because I can't read articles while there are gifs playing. I just stay off -- BuzzFeed.com is not my website. I just don't go on it, because that's just literally what it is. I just cannot deal with it... And that's the main reason why I use an AdBlocker too, because so many ads are videos, and all sorts of things; I literally can't concentrate on the text.

**Jerod Santo:** Well, Suz, Divya, thanks so much for hanging out with me today. Everybody listening live and in the chats, thanks for hanging out with us while we party. For those listening on the produced version - hey, come hang out 1 PM Eastern on Thursdays. We throw a JS Party each and every week. We love to have you participating.

Did you know we take requests as well? If you have a show topic, a guest, or even specific hosts that you're like "I would like to see this person talk to that person about this thing", head to Changelog.com/request, and you can pick JS Party from the dropdown and let us know what you would like to hear on this show. We want to be by and for the community, because that makes everything more awesome and more fun. So let us know what you would like to hear, that way we don't have to guess what you'd like to hear. It'd be awesome.

That's our show for this week. You don't have to stay here, but you can't go home. That's not how you say it... \[laughter\] You don't have to go home, but you can't stay here. There we go.
