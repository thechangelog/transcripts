**Jerod Santo:** Hello, and welcome back to JS Party. My name is Jerod Santo, and I'm very excited to be here with you all today to celebrate JavaScript, the web, the platform, the people... We are excited, as always, to bring to you an awesome conversation about JS and the web.

I am here, and I am also joined by a few awesome panelists. First up, Nick Nisi. What's up, Nick?

**Nick Nisi:** Hey, how's it going?

**Jerod Santo:** Pretty good. You know, life's getting back to normal after any JS Conf... It finally wrapped up last week; tell us about your experience there.

**Nick Nisi:** Oh, it was a great conference. I think probably the best line-up that we've had yet, and it was just so much fun... The talks were really well put together and the days went off pretty smoothly, except for a few minor things... But overall, I think it was a great experience.

**Jerod Santo:** Absolutely, and as every conference organizer will attest, it's always fun and exciting, but it's such a relief the day after, so we're both enjoying that...

We're also joined by Chris Hiller... Chris, we got to meet out in Portland at OSCON, that was awesome. How are you doing?

**Christopher Hiller:** Yes, that was fun. I'm doing great! I'm just thinking about biscuits and gravy, and I'm having a good old time. \[laughter\]

**Nick Nisi:** Very good, very good... So perhaps a lot of breakfast-themed conversation on this show; we'll just have to wait and find out. Today we're joined by a very special guest, Jeff Lembeck, who's the engineering manager at Npm. Jeff, thanks so much for joining us on the show.

**Jeff Lembeck:** Thank you for having me!

**Jerod Santo:** So the genesis of this conversation, the reason why we invited Jeff on - it goes back to July 12th, which I think was a Thursday, because I believe I actually posted it in the JS Party chat room; maybe even during a different show, or leading up to a show... But you had basically what I would call an epic Twitter rant, which every once in a while - not often, but every once in a while - gets you invited on podcasts... And this one happened to.

**Jeff Lembeck:** \[laughs\]

**Jerod Santo:** You kicked off just by saying, "Hi, I'm Jeff, and I'm an engineering manager at NpmJS, and I'd like to talk a little bit about open source humans and general empathy." Now, this caught my eye, and a few people backed me up in our chat, saying "Yes, this would be great to talk about." So that kicked it off, but before we get into the content of that thread, we would like to learn kind of the motivation behind it - what prompted you to say "Okay, I need to go out on Twitter and vent", or make a statement about these things, which are very real and concerning topics for all of us. What prompted this?

**Jeff Lembeck:** \[00:04:15.06\] Wildly enough, you'd think that that would be the start of some epic subtweet...

**Jerod Santo:** Exactly.

**Jeff Lembeck:** ...but it totally was just being tired at the end of a day, and having had weeks upon weeks of just kind of the same stuff, barreling through and watching people be crappy to each other on Twitter about whatever projects that they're on, and then having it fly back in my general direction a bunch, and going "We've gotta do better than this..." And just sitting there, with my head on my desk, like "Why are we struggling to do better than this?"

So then it just started, and I just started typing. I had the full intention of that being seen by like six people, because you know, late-night tweet... But that didn't happen.

**Jerod Santo:** That's not what happened.

**Jeff Lembeck:** That is not what happened. \[laughter\] I was really lucky to have had my boss, Laurie - he had already given the sign-off on letting people know what those numbers are before... Because good God... Just like, "Oh yeah, here's how much it costs to run part of our business" is typically the level of transparency that people are not super-comfortable with... And then also having had the next day the thumbs up, our marketing guy not want to strangle me. So you know, it all worked out.

**Jerod Santo:** It all worked out in the end. So here we are -- I should say that we did have Laurie... He keynoted the NEJS Conf, the conference that Nick and I were just talking about, just last week, and he came out with tons of numbers, tons of data... Super interesting all the insights you all are able to pull, especially with a survey -- like, 16,000 results to a survey (spectacular!) and then all the numbers going on, with downloads and whatnot. I love how transparent that is to the community.

Let me just start by saying that Npm Inc., Npm the command line tool, Npm the registry - these are all relatively new things in the world of developers, and a lot of us are still figuring that out and it's very strange interfacing with a black box, which is also a command line, which is also a company, and it's open source, and then there's a business, and then there's people, and then there's issues... So very much the reason why I think this resonated and why it got seen by way more than six people is because it's peeling back a bit the veil of who is Npm, what is Npm, and I think that's something that's changing and difficult to always comprehend as just a user or a member of the community or a customer of yours...

So these are all things that are very new to us, so I think very worth talking about and try to sort through together. As engineering manager, what's your role there and how does it get to be where you were, first of all, one who was feeling this way, and had your head down at the end of the day...? And then secondly, I guess maybe the empowerment or the freedom to even just go to Twitter and maybe represent Npm as a company, or as being Jeff - you know, those lines are hard to draw... But first of all, as engineering manager, what's your role and how were you seeing things that brought you to this conclusion?

**Jeff Lembeck:** \[00:08:02.12\] Management - just to start there - is a purely people position. Well, 85% people position. There's some coding, but it's mostly a people position, so it is effectively talking with and planning and working with people that are on my teams... The people that I happen to manage just put me in this spot a little bit more, because I manage the application engineering group, and that means everything that is public-facing - our website, the CLI... Anybody who works on those, that's my team... And therefore, most people don't necessarily outwardly curse or have critique of our infrastructure for example, because they don't see it, they don't necessarily know... But they can see a big ol' error notification in their face.

So I happen to get a lot of the conversation that comes through with that, and the application engineering team also happens to handle quite a bit of the community response, too... So the tweets that come in that aren't directed toward our support, where people are just asking "Hey, why isn't this working?", frequently, those questions are answered by, say, Kat or Rebecca, if they're CLI problems etc. So that's how I end up being in the position of seeing this stuff as it comes in quite a bit.

There's also a little bit that I've been at Npm for a little over three years, which is a pretty long period of time at the company... Which, as you mentioned, it's relatively new as far as things go... And thus have a little bit of -- I have some background in many of the moments of high passion that people have had over time. That puts me on Twitter every once in a while; the tweet storm is nothing out of character for the general theme for how I talk about things in public, but I think that's the first time I've ever just brought data to the table as part of it.

**Jerod Santo:** Yeah. So it may be worth pointing out at this point - here's one section of these tweets, which specifically speak to what you're referring to when we talk about the reactions from the outside, the support requests, or really the stuff that makes you say "I wanna talk about humanity and empathy." One of the things that you said is that there's a dark side to all of this. "We make decisions that make people angry, and wow do they get violent. Ever get hate mail at your job? What about hate tweets? People making dupe Reddit accounts with your name to talk crap about you and blame it on you?"

So these are things that are happening -- is this like a daily basis inside Npm? How much of this is going on?

**Jeff Lembeck:** I wouldn't say daily for that stuff, but it's common. There have been some pretty big campaigns in the past, and they've been pretty bad. I have not been the direct target of quite a few of them, as much as I've been on the team that also received it... But these things happen.

\[00:12:04.28\] There's always the interesting, creative ones. I still laugh about one that was -- and I'm going to edit myself here, because somebody did a wonderful job of sending us... They spoofed an email address... So that's from \[fill in the expletive\] f@u.com, and then the subject was just F U. And that was that. \[laughs\] And it was like "I applaud your work... The work ethic you have in order to do something like that." That's intense.

**Jerod Santo:** A lot of effort.

**Jeff Lembeck:** So much effort, for so little gain... But things like that, they pile up pretty quickly. I ran SeattleJS for a while, for quite some time, and there gets to be a point where going out into JS-related events, going to conferences etc. I already know what questions are gonna be asked here that are gonna be trolly. Someone's gonna walk up and do it at some point, and they're gonna hope for a soundbite out of me... And that gets tiring. I've never had to deal with that at a job before, but alas that happens here. Public-facing is public-facing.

**Break:** \[00:13:55.08\]

**Christopher Hiller:** So I've kind of been working in Node for a while, long enough to see Npm from kind of a project and become a company... And I've noticed over this time Npm, whether that's the CLI, whether that's whoever makes decisions at the registry - it's just a huge target for abuse from the community... And many frustrations, whether or not Npm really has much to do with it at all, seem to get directed at Npm.

This is just my perspective as an outsider, and maybe you have a different perspective, but why do you think that is? What is it about Npm that makes it catch all this heat from people?

**Jeff Lembeck:** \[00:16:21.07\] There's gonna be a few things that go into this... First and foremost, while I actually believe that this is a small subset of people that get frustrated or upset, they're a loud subset... But there are trolls; those do exist. Trolls are gonna troll. I can't even -- I'm almost not interested to find out why someone would do that; that is who they are, and they've decided to do that. But on the other end of things, there are a lot of people who get upset at Npm.

I used to work with Forest, and Forest said something to me at one time, when I asked him how he dealt with complaints about things like this... For people that expect things to just work, technology is something that's just happening to them; and Npm is -- I'll pat myself on the back for this, even though I don't... I'll pat my team, I'll pat a bunch of people on the back about this kind of stuff - like, Npm just works, so frequently that people forget. They just forget. A lot of people don't even know it's a company. They're just like, "Yeah, this is a thing... It's just here. I type and it does the thing that I need it to do while I have JavaScript."

And if you are just trying to do your job, like "I'm just trying to do my job" and that seems to be the source of your ire at the time... Like if you're just trying to do your job and then one day you can't because something broke, then you're probably pretty mad at it... Because you didn't even think about it before, but now it's blocking you.

If this was something that you had to think about regularly, maybe it would make you less explosively angry. But I speak from some level of personal experience in that if you ever wanna see me lose my temper at something, it will probably be like my phone... A thing that I depend on all of the time, that works for me 99.99% of the time, but like that one time I wanted to get a picture of my kid it didn't work. I've got like 6,000 pictures of my kid on my phone that it worked perfectly for every other time... But that one time, like "To hell with Apple!" and I throw my phone at the ground... That kind of thing - people do that; that's human.

If you have something big, and drawing of that much attention -- you rarely notice; you just use it, and then one day it gets in your way, and then let's say with as big as it is, other people have had that recent feeling - that'll get a little storm of humans real quick.

It's amazing what a group of people on Twitter or an Orange website will do once validated feeling about these things. Maybe they don't intend to. I mean, I certainly don't... People made something, it had a bug in it, it got released; maybe it wrecked a half of a person's day... I feel bad that that happened to them, and rightfully so they're mad about it.

\[00:20:16.09\] I guess my thought process, even when writing the tweets, was like "Yeah, people get mad. They sometimes should." How you add once you're there though is the way that we need to get a little bit of a hold of on ourselves as a community.

Npm gets a lot of vitriol because of 11 million users, so there's gonna be...

**Christopher Hiller:** What's the difference then between -- because it feels like it's different to me... If you are upset at Npm and you go on Twitter and you blast people on Npm, or you have a problem with your Apple phone, your MacBook or something, and you start writing crap about Apple on Twitter? That feels different to me. Why? Apple is so big, and the people there seem so well-insulated from this sort of thing... I don't know, I'm speculating...

**Jeff Lembeck:** Yeah, there's some of that, I think... There's definitely forums after forums after forums just dedicated to hating on Apple. The internet is filled with that... But there is some level of insulation once you get to big that big in size as a company, once you have groups of human beings who handle that line of defense... Npm is not big enough yet.

We have a user base that is big enough to maybe take that on, or to create that kind of situation where even just law of averages is at play and we're gonna have some people that are mad... But the amount of people that we have as a company, even though growing, is not necessarily there to where we can have full teams of people who insulate and keep away from that, or that you get the comfort of the insulation of having a huge company, big office with cubicles, etc.

**Nick Nisi:** That's kind of what I was thinking too, from an outside perspective... In an example like Apple there's a very small amount of key people that you can think of that might be influencing the iPhone, like Jony Ive, for example. And I'm sure he gets his fair share of hate mail and stuff that goes to him. But when it comes to day-to-day things, you're not complaining directly to the people at Apple who are actually making decisions or working on the software or hardware that goes into your phone... Whereas with Npm it seems like if you do have a bug and you file it, you got to GitHub and do that, and then you do start up a conversation with a real human who works on that product - and that's because, like you said, Npm, the size of it... I think you said in your Twitter thread that it's 37 people total?

**Jeff Lembeck:** Yes.

**Nick Nisi:** So when you interact with somebody at that company, you have a much bigger -- influence isn't the right word, but you have a much bigger audience with the company on average... So you're able to do that, and you're able to put people's GitHub handles to problems as they're responding and trying to help you with that, and I think that that can cause some of that - not that it should, but it definitely can.

\[00:24:01.02\] But I do like also in your thread that you did provide those numbers, like 37 employees (I think 17 in engineering) that are working on that, and I think that that really does help humanize the company, because Npm is something that if you use Node, you use it whether you're using the CLI, or the registry, you're using Npm in a lot of ways and I think that it's good to know that it's just 37 people that have a huge influence over JavaScript.

**Jeff Lembeck:** Yeah, it's pretty exciting to be part of the 37... But yeah. Before working at Npm -- there were 10 people when I started, and it was an interesting thing to walk in and go "Whoa...! Wait, the office is very small."

I was kind of blown away on my first take on it, too; I'm like, "Oh... I use this tool like every day... Huh! Okay..." \[laughter\] But yeah, it's grown a lot since then. We have an exponential growth pattern.

Having that few people, having that level -- having that big of a surface area that each person can cover for being able to make decisions and help things through... Yeah, that might be inviting - you're definitely right there - for people to go "Hey, I can get a hold of \_\_\_\_\_ from the web team and thus maybe I can convince them to change this thing that drives me nuts." There's some power in that.

**Jerod Santo:** We're also living in a world now where 37 people (17 in engineering) can service 10 million users (this is the other stat that you brought out). Five billion (with a B) downloads every single week... And that's an amazing amount of leverage (is it not?) to be able to affect that many people with so few?

**Jeff Lembeck:** It's very cool. Side note on what you've just said, I got a message the next morning from Laurie, and I was like "Oh no, Slack message from my COO..."

**Jerod Santo:** Your numbers were bad?

**Jeff Lembeck:** Totally! It's six billion... \[laughs\] And I laughed. I'm like, okay, alright, so I'm not in trouble; six billion is the actual number. So yeah, it is, it's an interesting amount of leverage. It shows the power of the tooling a lot of the way, a lot of the product planning has gone -- it's a testament to quite a bit of that...

I can't speak highly enough of some of the service that we use that allows us to do this. I could probably talk later for a long time about my feelings about how CDNs work and how cool they are... But yeah. It's quite a few people that we serve, and with such a small team.

**Jerod Santo:** It's a double-edged sword, or I guess it's a gift and a curse more than a double-edged sword, where on one hand you have such a small amount of people who are then taking the brunt of support, and sometimes that support is thoughtful and normal, and other times it's vitriolic and hateful... So that's what we're here -- a lot of what you were talking about is the fact that it's humans behind this, it's people... And a lot of times, especially on the internet -- the layer of abstraction of the internet gives us sometimes an unfortunate freedom to pile on and to think about things in an abstract, non-human way... So that's what you're pointing out.

\[00:28:25.00\] On the one hand you have that, but on the other hand - this is now quoting you back to yourself, which is one of my favorite things to do - you said "Knowing that every day I can make a difference in the lives of millions of people is wild, it's motivating, it keeps me going. We build products that make life a lot easier for development than it used to be, and we give away a lot of it for free." So it's not all bad.

**Jeff Lembeck:** Yeah, it's very motivating, it's very awesome to be able to just -- going to speak at conferences as frequently as I can, and one of the reasons I do that is because being of being able to get off the internet and get face-to-face with people that use these things, and talk about these things... It's such a fantastic moment of going, "Alright, you know what? Overall people are psyched. They like to do what they do, and at times we same hundreds of hours off of their lives." That made last week, where I got mad about -- or I just sat there, saying "Don't respond to that person on Reddit. Close the window" all worth it.

**Christopher Hiller:** So I actually got in with somebody on Twitter, and I don't remember what it was exactly, but basically, somebody was complaining about -- I don't know... I hope it was Npm... \[laughter\] But at any rate, it doesn't really matter... But this person was complaining about an open source project - I wanna say it was a CLI, but I could be wrong.

And I was like, "You could send pull requests, and stuff like that. Maybe it's not so nice to trash on this open source project. Maybe you should try to make things better, and this sort of thing." The response I got, of course, was not positive... But what they said was something about "Such and such project is run by a company, therefore I'm not gonna give any free labor to that company, and I'm not gonna send any PRs." This kind of feeling like "Well, because this open source project was run by a company, they owe me something." At that point I muted that and I didn't really wanna get sucked into it... But I'm kind of wondering, what do you think -- have you encountered that sort of feeling before, and what would you say to people that think "Oh, it's a company and I don't want to work with them and basically give them free labor, and try to make this thing better"?

**Nick Nisi:** I wonder if they had the same sentiment about React and Angular, and other projects like that.

**Christopher Hiller:** Yeah, I would assume so...

**Jeff Lembeck:** \[00:31:48.26\] I mean, from my perspective... I get it, I definitely do; I understand that viewpoint pretty well. I've got some not so secret opinions about people making a lot of money off of open source, without paying out for it. That's definitely a thing that happens on a pretty large scale. So if somebody goes, "Okay, well I don't want to contribute to the product because I don't want to put in any free labor here", I firmly understand that. That is a completely valid, and not just valid, but strong -- there's a good argument to be made there.

On the other hand, if somebody has a complaint, there are viable channels to go through. If this is the thing that they want... Say you have a bug in the CLI, or on the website, or whatever, we have a whole Discourse Npm community that you can go to, and people frequently search for it to see if it's happened before, and then post. And that thing gets triaged on the regular by people who either visit the site themselves and have had the same problems and can talk things out with people, or by the Npm team members themselves.

Then if features are missing that you think should be there, we have a whole RFC process, and we would love if people's companies would go "Hey, let me pay you for the time that you spent working on this thing for the CLI. The CLI is a big open source project..." I say this with some level of privilege, as I've been a person who in the past has gone "This open source library that I'm working on is broken for the thing that we need, but it's really close", and a boss going "Well, it'd take you four hours to fix it or 15 hours to write a new one, so go fix it. Go fork it and fix it." And I've definitely done that before at work, and that saved the company that I was working for money, a lot of it... And especially when it comes to having to maintain it later, in the future.

So there is some validity to that, but I think that there are channels beyond getting on Twitter and yelling. Getting on Twitter and yelling is cathartic, it is, but it's also almost devastatingly bot useful. People are gonna get in fights about it... I mean, you mentioned that you didn't quite remember what the tool was or how the argument fully came about, and that's frequently how Twitter arguments go.

I don't even remember 99% of the people that I've muted, which is terrible... You're sitting there and you're going, "Ugh... God, this is wasting my time, and my energy, and... MUTE." Back in the day, just block... Because you don't wanna spend time with it, but it's sad that our level of discourse with one another has gotten to the point where it's like "I've gotta a megaphone and I'm gonna yell in a direction, and then hope that other people hear it and yell back." It gets frustrating.

**Nick Nisi:** \[00:35:57.22\] That might be something good to point out, is that when those things occur and when you feel the need to yell at someone on Twitter or yell about some big problem, that might be cathartic for you at the time, but the person or project that you're yelling to probably won't remember it, and it can have lasting implications when it comes to having people burn out on that project and others, so... Yeah, definitely there's better ways to go about that.

**Jeff Lembeck:** That's an excellent way to put that.

**Christopher Hiller:** I've also heard if you're a jerk on Twitter, people find out. \[laughter\]

**Jeff Lembeck:** Oh, yeah! There's definitely that network of things, of "Hey, this person has been kind of --" You'll hear it in open source groups and stuff, where somebody will say "Hey, this person's been making this request and they've been a little bit forceful about it", and there's definitely the people who are like "Oh, no, I know them, and you can look back through things... I think they're just really frustrated. Let's talk them through it."

And then there's a known bad actor...

**Jerod Santo:** Yeah... You get written off. You ruin your future influence because you get written off.

**Jeff Lembeck:** Yeah, if you're consistently being a jerk on the internet, people are gonna remember that you're a jerk on the internet. That goes for all life, not just the internet. It turns out reputations will precede you in that way.

**Jerod Santo:** So here's a pro tip that I have never put into practice but I've heard it, and it sounds like a good idea. I actually don't have this problem very often because I tend to be on the other side of the spectrum, where I don't have much of a temper, but there's times where a temper would have actually served me where and I should have said what I was thinking, and I end up regretting on the other end... So I don't really have that "I need to sound off and just tell somebody off", it's just not my personality...

But I've heard, and I think this would serve a lot of people well - if you do have that tendency of quickly getting angry and needing to vent, is that you pop open your email editor and you draft an email to the person to whom you are angry at Npm-ing, or Jony Ive, or \[insert target here\], and you just write that email, and you just say everything you wanna say and you get it all off your chest, and then when you're done, you just hit the delete button and you just let it go. And that, I think, gives you the catharsis without any of the major consequences of sending that email or posting that tweet.

**Jeff Lembeck:** That's a pretty good -- I definitely have written a lot of things and deleted them. I mostly run or go -- I've picked up lifting over the last year or two...

**Jerod Santo:** Like exercising?

**Jeff Lembeck:** Just like go to the gym and pick heavy things up and put them back down. It turns out it's significantly more helpful for both me and anybody that could be working on that project. They wouldn't have heard what I was trying to say in the first place if I came out swinging, because people naturally are going to get defensive when you come out swinging...

And I might live longer, be stronger, be able to throw my kid in the air higher... \[laughter\] So everybody wins. Instead of yelling on the internet, just go get swole.

**Jerod Santo:** Or give yourself a hernia, or pull your groin, or something... \[laughter\]

**Jeff Lembeck:** Yeah, also possible.

**Christopher Hiller:** So the Twitter analog to the email suggest might be send a DM to yourself.

**Jerod Santo:** You can DM yourself?

**Christopher Hiller:** Yeah, I just tried it.

**Jerod Santo:** I didn't know you could do that. You can also message yourself inside of Slack, which I do use it once in a while, especially if I'm testing slash commands, and stuff... A lot of people don't know that, but you can definitely have a private message with yourself in Slack. Sometimes you ...

**Christopher Hiller:** You can also take out your frustrations on the Slack Bot...

**Jeff Lembeck:** \[00:40:08.13\] I actually do that daily. I have little conversations with myself in there all the time. I'm just planning things, so I can get thoughts out before I have to actually express them to other humans. It's like rubber ducking, except in writing form.

**Jerod Santo:** Yeah, I like it. Well, let's wrap up this part of the conversation here. One of the things that I thought was funny about this thread is that you opened it up by saying you wanna talk about open source humans and general empathy, and then the majority of the thread was very Npm-specific. At the very end there you're like "Wait a sec, I didn't get general at all", and then you do get general at the end.

In lieu of me reading more of your writing back to yourself, which does feel kind of strange, why don't you go ahead and give us your general takeaway, and what you're trying to message and tell people with this thread, and something that you'd like people to walk away, even from this conversation here on JS Party thinking or doing.

**Jeff Lembeck:** I think the general takeaway is that when you have your moments where you're frustrated, you're angry, you're dealing with something and you want to yell and scream at the person who you deem responsible for this frustration that you're having, just remember that that's a person, that that's an actual real-life person sitting there, not a faceless company a lot of the time... You're talking to a person, and they may or may not be able to actually affect change on the thing that you want changed, but you getting upset - all it does is muddy the water. That's the takeaway, that's my hope - that everybody kind of goes "Let's take a breath."

**Nick Nisi:** Before we go to break, I wanna just close and say that I do really appreciate the work that Npm does, and I appreciate this thread quite a bit... And specifically the humanizing that it does to Npm; I think that's important for everything, for everyone to understand that it's humans behind all of this, and it does help when there are problems, like big problems that are at Npm... I don't wanna bring up any one specific, but when those come up, it's good to know that those are humans, that make mistakes and that are learning and growing as we go.

As this thread pointed out and as Laurie kind of pointed out in this talk at NEJS Conf last week, Npm is growing and it's taking things very seriously. I'm very excited about all of the new security features that are coming and how important you're taking all of that... So just thank you for continuing that.

**Jeff Lembeck:** It's awesome, thank you.

**Break:** \[00:43:01.11\]

**Jerod Santo:** Alright, next up we have a fun little segment called "I'm excited about X", where X is literally anything... So we're all going to share just something that has us all excited, and hopefully we'll get you listeners excited as well; something that you can find interesting or check out.

Chris, what are you excited about?

**Christopher Hiller:** \[00:43:55.14\] So in the past weeks or so there's a pull request into Node.js by Ben Coe, who Jeff may know... He works at Npm, he also maintains stuff like Yargs, and Istanbul, and Nyc... Anyway, he made a pull request in Node that adds support for mkdir -p or recursive mkdir in the FS module. I'm excited to see that become part of Node core, because that is some really commonly used functionality that in my opinion just kind of needs to be in there. Thank you, Ben, for the implementation.

**Jerod Santo:** Excellent. Let's hop to the chat room. In the chat we have some people listening live and they've been participating in this conversation... The listener Mark is excited about Fusion.js. Fusion.js is a plugin-based universal web framework coming out of the Uber engineering team.

Mark says he's excited about it because "It's an evolution of Uber's framework that powers our hundreds of web applications, it's already in production and solving real-world problems across a range of application. The plugin architecture does a great job of consolidating concerns. I'm definitely a bit biased, since I work for Uber, and used to work with most of the web platform team who built it, but I didn't personally work on the project."

So Fusion.js - thanks, Mark, for submitting that. We'll link to it in the show notes. Let's kick it over to Nick. What got you excited?

**Nick Nisi:** I'm pretty excited about TypeScript version 3 that came out on Monday. I haven't actually had a chance to use it yet, but I'm very excited about some of the new features coming, including project references and being able to use tuple types with arguments, so I can use the Rest operator and then type that as a tuple type, and then use that... As I've wanted to use it for a long time in TypeScript, but it hasn't really been supported.

And then finally, just better error messages. There's a lot of other things, but those are kind of the big things that I'm really excited about.

**Jerod Santo:** Very good. Well, I will go next, and mine's a little bit of an abstract idea, but it is around a very specific thing... So what I'm excited about is thoughtfulness in software design and development. This is something that throughout my career has continued to excite me and make me want to write better software - it's when people really sweat the details and really are thoughtful in the way that they design, develop and deploy their software.

A very specific example of this - it requires a little bit of context. So as podcasters, we don't have very much in the way of analytics. We basically have the equivalent of like '90s era server-side analytics... Which is fine, we don't want the crazy targeting that's going on in the JavaScript space. But basically, we have like an IP address, we have bytes sent, we know the file you wanted, we know what your user agent string is, and that's about it... So we can track downloads. But we don't have too much more information about our listeners, and we would like to have a little bit more.

So Marco Arment of Overcast has put a little bit of thoughtfulness into his feed crawler, which is like -- isn't that the place where most people would just ignore and just kind of half-ass it? I think so. Well, Marco actually will put in his Overcast feed crawler - so when he's hitting your feeds, from his server-side feed, he puts the subscriber count in the user agent string... Which is super useful.

That gets me excited, because it's just a little bit of insight into who's subscribing to us on Overcast that we would have had before, and it's not obtrusive to the users, and it's not like leaking information about them, but as podcasters, it lets us know that "Hey, at least on Overcast, you have this many people subscribed", and that's useful, because we can actually track subscriber growth over time.

\[00:48:10.24\] So I'm very excited about that, and I'm actually writing a blog post right now, an open call to all other podcast clients who have their own feed crawlers to follow Marco's example and put those subscriber counts into their crawlers, so that we can pull that out and have a little bit of more information.

Very thoughtful. I'm glad he thought of it, because I wouldn't have. And I'm glad I've found it, just looking at our logs, and we can get that subscriber count. That's pretty cool.

Let's hop over to Jeff. What are you excited about?

**Jeff Lembeck:** I know it's been around for a bit, but I am excited about Discourse. If anybody doesn't know, the CLI team moved off of using GitHub issues pretty recently, and moving over to Discourse was a huge, huge, huge boon for us. Interesting things that it can do - it can tell you the amount of time something has been searched for, which is a whole different metric than like how many thumbs up somebody has given an issue. You don't actually know when somebody goes to visit an issue page what the really big issues are; you know the ones people are the loudest about. Those are two different things.

So we've been able to completely and totally change the way our roadmaps work, to "Here's the bugs that need the most amount of fixing, because here's the bugs where people are actually focusing on and going to and trying to get at, and trying to get to the bottom of."

It's changed the way that we work and cut several hours from time. Our GitHub issues ended up at some point just needing for us to call it quits, because there were thousands of them, so many of them... Almost nonsensical requests, or things that had nothing to do with Npm, or feature requests that didn't quite fit with things. Actual bugs were rare, because there were so many of them that were duplicates etc. For somebody to go through that would have been a full-time job just in and of itself, but having the Discourse toolset is awesome for it.

GitHub uses Discourse actually for Electron, which was a really big tell for us... \[laughter\] Like, "Oh, alright! This is a really good sell." And yeah, it's awesome. I firmly recommend it if you are in the business of creating some sort of form-related thing for where you need to capture data on how people interact. It's almost perfect for this exact use case.

**Jerod Santo:** \[00:51:11.04\] Very cool. I love finding solutions that are perfect, or very helpful like that... Especially when you've been living in ones that are subpar for your specific use case... So that's spectacular.

That's it, those are the things that we are excited about. Links in the show notes; if you have your podcast app, just click to the notes, find the links if you're interested in those things... If you're listening abroad, or on the web, that's Changelog.com/jsparty/37 is where you'll find those notes.

So that's our show for this week. Jeff, first of all, thanks so much for joining us, thanks for sharing your thoughts on Twitter and then sharing them here, having (I think) a very powerful conversation about the humanity that's inside the things that we all work and build with, and something that is very important to remember, so that we can be helpful and good internet citizens, and not just tear each other down all the time. I'm very thankful for that, as well as the work that you're doing on Npm.

Nick and Chris, as always, it's a pleasure. Hey, I wanna give you a couple of teases, because we have some cool stuff coming down the pipeline. First of all, next week - this is August 9th - the next episode of JS Party will be featuring the incomparable John Resig. He is excited about GraphQL; he thinks it's the new REST. And so John will be joining us next week to talk all about that.

Then also, we will be at JS Conf. We will have a live show on stage at JS Conf, so if you're going to JS Conf, look for the JS Party people; they will be out there, in force, and we are excited to put that show together as well.

So that's our show for this week, and we'll see you next time.
