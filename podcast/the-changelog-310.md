**Jerod Santo:** Ben, it's a big day for you. Tell us what's going on.

**Ben Halpern:** Yeah, so today at 1 PM Eastern we open-sourced the dev.to codebase for the whole community, and we are really hoping folks get as excited to take part in this project as they've sort of indicated to us every step of the journey... But today is the big day.

**Jerod Santo:** Today is the big day... So as we're recording this, it's August 8th, and it's about 3:15 PM Eastern Time, so it's been open source for a couple of hours; by the time you listeners are listening to this, it's a week later... But today is the big day, so I guess we should just start by saying congratulations!

**Adam Stacoviak:** Definitely.

**Ben Halpern:** Yeah, it's been a real journey. I kind of wish I'd thought to even open-source on day one; it just didn't even cross my mind when this was just still a little side project... But we took a lot of time in the past few months and weeks to really put this on our roadmap, and we finally made it happen.

**Jerod Santo:** Very cool. Well, let's back up a moment and let's get the full story. For those coming to this show, not familiar with dev.to and the dev community that you're building over there, you said it started as a little side-project - can you give us a little bit of the back-story of the website and how it came to be?

**Ben Halpern:** \[00:03:47.23\] Yeah, so the whole thing started as a project I wanted to solve developer issues in one way or another, but it was kind of vague, it was just an idea... I started with a Twitter account I called The Practical Dev, and I kind of started growing it little by little, I start by just actually posting programming links and things I found throughout the web, and things I thought people would be interested in... I quickly realized that the more I injected my own voice and my opinions in my tutorial, and my humor and my jokes, the more it caught on, and it really started taking off at that point.

The most notable jokes I was telling was the O'Reilly Parody Covers, the book covers... That was the first major chapter in the whole story; everything else was just kind of futzing around. But that wasn't really the end goal per se; I really wanted to create valuable resources, sort of solve some of the problems I was actually making fun of with the O'Reilly covers along the way... The chaos, the bizarre, windy path that is a software development career, the lack of consistency in some of the resources, and frankly the lack of tooling and actual community environments, and stuff like that.

As much as programmers always find a way to solve their problems, I just didn't think that this was being done in any special way, and I really thought we could do a little better if we kept at it.

**Jerod Santo:** So you said you were doing this as a side-project. This has since turned into not just yourself, but a team of people and a burgeoning business... So tell us that transition and where it became -- you mentioned the Twitter account The Practical Dev, and then you have the website dev.to... Tell us what the website started out as - I know it's been through many iterations - where it's come to, and we'll get back around to the open-sourcing of it all after we kind of understand it in holistic fashion.

**Ben Halpern:** Yeah, so the website really started out as just whatever I thought would be most valuable based on my resources at the time, my thoughts about the future... The thing about a platform where people share software knowledge and have discussions and all that stuff; it's obviously a huge chicken/egg problem, so at no point did I really try to get ahead of myself in terms of what the project could be.

The first thing that ever happened on the website was I did an interview with DHH, and I just sort of knew that if I e-mailed him and I asked nicely and made it pretty easy for him to say yes, then he would share some knowledge; Rails 5 was about to come out... So that was the first dev.to thing. Then I did a few other interviews with some open source folks, and it was kind of the first step to really make this happen... But I also had a different idea at the time; I thought it might be a little more high touch, like these interviews, and stuff like that... But then based on feedback, based on noticing what was going on, what people were most interested in, it really kind of more quickly became what it is today, which is a platform for anyone to write anything about software, and have a community really interact with it... One that's really backed by a code of conduct that we really care about and enforce... And really just kind of be a place that actually feels like a community, but it's also actually quite large right now.

So yeah, that's kind of like the journey on the product itself, the software... But really when it was just me, I was working on another startup that I'd been doing for a while; it was called texts.com, a student textbook exchange. I was sort of the hired technical person to really make that happen.

We had growth, and stuff like that, but it had issues as a business, and that's kind of when I started getting a little distracted. I was still working at that project, but finding a little bit more interest in this other thing from time to time. That's when I happened to meet Jess Lee, who is the first co-founder in this organization.

\[00:08:16.20\] She came to me through a friend, after she had recently graduated from a bootcamp, and she had a really interesting professional background, but was really brand new to coding... She just needed some mentorship, some advice, and I knew her through a childhood friend that she was a mutual friend with, and it really clicked right away; I felt like we got along, she was really easy to work with, and as we kind of started talking about dev.to a little bit more, she really clung to some of the visions, because herself was kind of a newer programmer and also a woman of color who is not necessarily part of some of the in-crowds that I think a lot of software developers really don't notice, because they... You know, they're part of the in-crowd, so they take it for granted that, like, some of these things are pretty straightforward... Even just simple things, like -- there's a lot of insidership in the whole thing. It's very cliquey, and a lot of things happen extremely organically, when really perhaps it should be a little bit more organized... Because the organicness is fun and natural, but it also leads to a lot of unhealthy situations, where a lot of really valuable software developers get alienated or left out, and it's really just a shame.

Her involvement as a friend early on really turned into more like "Okay, this is kind of a real thing." And it was really great, because she's so different from me. I'm extremely abstract, chaotic and disorganized, and she's totally the opposite, and really helped bring order and discipline to the whole thing... Traits I really appreciate in the process and in others, but is really not what I bring to the table.

She and I worked on it for a little while, while I still worked really hard on my other company at the same time... But ultimately, we were just getting so much momentum, while the other thing was actually kind of like -- we were trying to pull it off, but it wasn't necessarily working so much at the time... And what we wound up doing was I took the company back to the other company, because I thought I'd been working hard, but pretty distracted on the side project; I thought it was the fairest thing to do - to kind of fold it into the other company, which quickly just turned into this new company, which is Dev Community Inc. We've been working on it ever since. It's been about a year and a half since we became a real company.

**Adam Stacoviak:** You mentioned earlier in your relationship with Jess the discussions around vision, and Jerod mentioned burgeoning business, and I'm thinking "What were some of the vision things you shared that got her excited?" and then what were some of the indicators that made you think "Well, this can go from my thing I do on the side, because I'm kind of bored with my stuff and I wanna play", essentially, to "Hey, this could be a business and I should..." -- what were some of the vision things you shared to say "Hey, this could be a business and we should put a lot more effort into this"?

**Ben Halpern:** You know, I always treated it like as a -- you know, worked my butt off, trying to make the project grow, but wasn't so completely certain about all the directions... Like, it seems easy for me to think back linearly at the time, but thinking back to some of my conversations I had, it's very clear I had a lot of vision for the purpose of the project, but not necessarily how it would be organized, and stuff like that.

\[00:12:11.14\] Jess and I just kind of hung out and talked a lot; it really was just like a mentorship role at first, and naturally we just started talking more about dev.to and things we were doing with that... And I kind of tried to downplay things at the time, because I really was super loyal to the people I was working with, and stuff, so I always made sure people knew it was just a side project; that's really how I felt through and through, but it was really impossible to ignore how much momentum the project had. It's hard enough to get your friends and family to use something you're really trying to make succeed...

**Jerod Santo:** \[laughs\] Yes.

**Ben Halpern:** Seriously... As soon as I made the Login feature a thing on dev.to, and it was hidden in the footer, basically, I started getting people logging in; that was just a really remarkable thing. I've launched things that we've sat around, and like "Oh, where are all the people...?" I thought we were making something really valuable, that's way better than the alternative, but where are all the people?

But this was such a passion project... It was really clear that we didn't have to get things perfect, because we were really great at having people understand our purpose, our vision, our values. That was really something we sort of really put out there from day one. So it was something I put out there from day one, and then we, and then we always just kind of like put that front and center... Then things just kind of happened.

I remember I had a conversation with Saron from CodeNewbie when she lived in New York, and I recall that she was telling me how she ran her business, and that kind of clicked into me the idea that this really could be a business; I knew that was a possibility. I wasn't naive, but it really gave me a bit of courage.

She had just recently left her job to do CodeNewbie full-time when I sat down to just kind of pick her brain... That was a moment really early on, but it just sort of helps give a sense of like "Okay, this is possible. This is like a grounding moment." And not that I was afraid of entrepreneurship; I'd been doing that sort of my whole life.

So I'd put my heart into this project so much that the last thing I wanted to do was ruin it by making it a business... Because I knew this would succeed no matter what, like if it just existed as some kind of project, like something where the scope was smaller, where the expectations were smaller... So even though I'd been an entrepreneur in some way since I was 12 in one way or another, the notion that this could be an actual business was something I was really protective of, because I thought it was such a magnificent project, and if it was gonna be a business, I wanted that to be because that's actually the best thing for the project, and not -- we didn't wanna extract value; that's just something you can do with this kind of projects, and everything had to be additive.

We really have been extremely thoughtful at each step of the way, and I think that's our special super-power - we've given ourselves enough rope to be thoughtful with everything. It's easy once you start a business to be really sprinting the whole time, just trying to pay every bill, to pay all the expenses and stuff, but... Just due to the nature of how this started, the community took so well to everything, at every stage... It really was a reflection of my personal values at every step of the way. It just happened. It reflected on the skills of everyone I was involved with professionally, everyone who was able to come together and help out... Yeah, just timing, and the people involved - really great.

**Adam Stacoviak:** \[00:16:14.27\] If you ask me, something I've always appreciated and noticed has been this Ben Halperism kind of thing in there... This sort of like -- I don't wanna say weird, but just different type of humor that's very clear when you hear it and you see it; your humor is very you, so to speak... I don't know if that's clear to you, Jerod, but that's super-clear to me.

**Jerod Santo:** I agree with you. I would say it's a lot like a good author will inject their voice into their writing, and dev.to very much (from my perspective) has reflected Ben's personality, for a long time. Obviously, then that has other problems, like "Okay, how do we scale this and make it a brand that's equitable and not just Ben Halpern?" and I think you've been doing that along the way... But yeah, I would say that there's a reflection of Ben's personality or humor or geekiness, and that's why people like the Twitter account kind of embedded in the website. Is that something was intentional, or it just happened, or do you even disagree with that sentiment?

**Ben Halpern:** No, I think that's really -- I think that's definitely what's going on. Some stuff's intentional, some stuff just happens... I have a very multi-disciplinary background, a few sort of different types of attempted careers, and all in the sort of creative space... So when we talk voice, we know how to talk about that stuff within our organization, even though I'm a software developer; we have documents about what the dev.to voice is... It's all super-vague; it's like my random rant. I can read from the document... It's just like "Say this, not this" kind of things, and... I still myself do most of the communication, but any time -- there's a lot of stuff we do, and any time we have to take care of a thing, we really treat it like our... Yeah, we're really careful about that stuff. It comes through, and it's like -- we didn't just like take that on as a business initiative; it was very natural. We recognized what people cared about and what programmers cared about in general, the good and the bad of certain types of ways of engaging people, and little things like that...

Yeah, it's all an effort in like just being careful and nuanced, and not sprinting too fast that you kind of lose track of these things... Because that's what happens. We don't wanna be boring, we don't wanna lose our sense of values... The whole project works because we remain thoughtful about these things as we scale and as we grow. We try to get ahead of it when we think what we're doing might not scale, and stuff like that.

**Adam Stacoviak:** It's also clear to me too that the thoughtfulness, not just on what you say and how you say it, or not being boring, as you said, but also what you said before was making sure this should be a business, which I think is a wise move, because sometimes a side project is just fun... And sure, maybe it has some entrepreneurial parts to is, there is maybe some money to be made, but it doesn't have to be a full-fledged everybody-in business. I think that's kind of an interesting line to toe. Can you speak to that a bit, the on either side of that line of like when it was a side project to now it being a business and how that ended up playing out for you?

**Ben Halpern:** \[00:20:03.20\] Oh yeah, I mean... The whole thing was really a lot of clarity for me; I was just better at this than other things I'd done before, but from the get-go, even before I even knew what it was gonna be, I committed to giving this ten years to work...

**Adam Stacoviak:** That's a long time.

**Jerod Santo:** It is a long time...

**Ben Halpern:** Yeah, I mean I thought like "Well, I'm still gonna like programming in ten years." I thought that was pretty obvious. And the biggest issue I had with some other projects is like, I don't know, I didn't have such a fundamental care about them that if they didn't sort of take off quickly that I'd keep being excited about, and stuff. I love this stuff, and I can only do it if it's exciting to me.

Early on when it's just a project and you have ten years to do it, your job is to have long walks with an audiobook in to really sort of think about the purpose of something, or random little things... And I sometimes took like two weeks to make a decision, where like in a business you're kind of like "This has to be done by the end of the day" kind of stuff.

We've also instilled that kind of values since we have been in business; sometimes we have to hurry, but sometimes we just take our time to get something right, because a lot of the time the answer comes -- if you guys didn't ship this in two weeks, if nobody had the effort to ship this feature, maybe we shouldn't ship this feature in; stuff like that.

We really try to lean into how we feel about certain parts of the project. Obviously, we need to fix bugs, fix vulnerabilities, fix user experience issues, but in terms of the project, we try to instill that kind of project values, and that really only happens if it's really happening early on.

But then when it came to be a business, there's still that area where I myself am too scattered to make a lot of this stuff work. We have lawyers, and we have all sorts of stuff, so Jess was critical there. But then the third co-founder in the business, who isn't as front and center sometimes, but if you're part of the community, you know him... It's Peter Frank, who was my partner in the other business.

He really brings a lot of the need-to-know sort of experience and effort in certain areas; he actually loves some of the stuff that I don't find I have any patience for, and Jess is kind of the middle person in terms of like she writes code, but she also has a handle on some of the finer details in terms of -- like, I've never spoken to our lawyers, even though I founded this company... Because that's Peter's domain, or Jess', depending on the context.

You've gotta do what works for you, and stuff like that... I'm very thoughtful and careful about the actual business direction, the way we make money, the way we do this and that... But there's a lot of heavy lifting in terms of running a business that thank goodness I have people who are excited about doing that kind of stuff, because that's never been my thing.

**Break:** \[00:23:45.01\]

**Adam Stacoviak:** Ben, we're now at a point where it's a business, it's legit... Obviously, you're open-sourcing it today, that's a big deal... But, I mean, Jerod and I have been paying attention to what you've been doing for a long time; we've talked years ago, and have been to some degree involved in what you're doing, but not directly, just more so as a community, not so much as one of the co-founders of course... But now that it's here, I mean, you've \[unintelligible 00:25:13.03\] quite a community, lots of traffic, lots of fresh articles, we link to you often through our newsletter and our newsfeed and stuff like that, so we're very familiar with what you're doing here. You've done a great job on the community front. What do you think is the secret sauce to building this particular community? Not community in general, but this particular community.

**Ben Halpern:** I would say merging fundamental human community needs with practical software development needs... And not really giving either one of those things more attention than the other one.

There's so much humanity in software development, but there's also so much like "This is exactly how we do things and it's not gonna change" in terms of sharing, in terms of how we code... Like, we search for the answers, we search for opinions, we get consensus on what the right framework is to use... There's no going off and doing your own thing without really having to know exactly why you're doing that.

There's so much need for community, but a fundamental thing just for motivation, and things like that... One of our members just recently made a post talking about how he shut down the language he was writing, and the community gave him a lot of support in that; shutting down a project you've been working on for a few years is a pretty big moment, and he wasn't teaching anyone anything in that moment, but people who had been following him were just kind of there for him...

We try to deliver the space for people to find answers to things that are a little bit more nuanced, to discuss topics which are interesting to them, and maybe interesting to some people. We try to send the types of traffic to all sorts of different places and not just the lowest common denominator software stuff. We try to just be careful about the user experience, but also not too opinionated on it, because everyone kind of makes their own user experience.

The platform is really just a generic place where people can write blog posts and engage in a certain type of Reddit discussion, but we as administrators try to really make that happen in just the way software developers need it. \[unintelligible 00:27:47.03\] early on was, like, these things happen, but in really generic ways, and there's no reason we can't do it with a lot of care for the software developer experience.

**Jerod Santo:** \[00:28:00.03\] If you were forced to liken it to something else in terms of describing to somebody who may not know about it, even non-software things, what do you liken dev.to? Is it kind of like Medium, but different because of this...? Is it kind of like Stack Overflow without the rules? What is the best comparison for people who don't know about it?

**Ben Halpern:** The most straight up model (I think) for engaging right away is it's Medium, but more specific for developers. And everything that's different from the platform is really like that, except then we kind of take it in the direction that we give people the opportunity to really build their portfolio out a little bit, show off their GitHub projects... So in that sense it's a bit like LinkedIn, if LinkedIn wasn't full of recruitment spam and just friends from college who added you and you don't really care about their finance links, and stuff like that.

It's a little bit like a professional platform more devoted to software developers, but we're not too prescriptive, that like everyone in the world needs this right now. Hopefully, it will be so valuable someday that everyone will be on board, and everything like that... But the fact that it's really centered around the content and we don't log in while any of that stuff.

It's a place where a lot of people get to contribute back to the greater software development community no matter what... So the greater software development community probably lands on dev.to through Google searches, your newsletter, things like that... It's just kind of like part of the ecosystem, and in form factor, it kind of happens the same way -- Medium established this idea that you can sort of post your stuff on a different platform... We make it really easy for people to host on their own blogs, but then kind of cross-post to dev.to, because I think that's a really valuable -- we try to have a shared ownership of everything that's going on, if possible, and just be really thoughtful about it... Like, "This is your space, and it's our space." It's a shared kind of environment.

There's a lot of deep-down human things going on with those ideas. It's not so much an economic exchange as much as like a really complicated human exchange.

So yeah, Medium for software developers, in a way, but with a lot of little things that just make it different.

**Jerod Santo:** So as you have had success, you started to come up against other problems and things that I start to think of, where I think "I'm glad I'm not in Ben's shoes" as dev.to grows; and your team's shoes, of course... I just thought of this because you've mentioned the recruiters on LinkedIn... Well, eventually there's gonna be recruiters coming to dev.to, there's going to be spammers coming to dev.to, there will be trolls, which usually pop up first... As all of these little social networks and forums and things become larger - I mean, Twitter is having a huge problem right now; of course, it's massive, mainstream, but... If you're software mainstream, you're still gonna have a lot of people using it... Are these things you're starting to deal with, or is it too small yet - I mean big, but not big enough - where you're hitting a lot of trolls, you're hitting a lot of spammers, people who are generally there to create terrible content or do mean things?

**Ben Halpern:** Our sort of core differentiator -- as I said, we got really big on Twitter at first. We really know the Twitter universe, and our main differentiator is that there is any kind of moderation compared to Twitter; that whole kind of platform, as massive as it is, it really seems like a place that didn't even consider harassment and trolling and stuff as like a problem until the rest of the world called them out on it...

**Jerod Santo:** Well, Reddit took a hard stance for freedom of speech against moderation early on.

**Ben Halpern:** \[00:32:15.01\] Yeah, so we are certainly pro free speech in every way that's practical, but I think some of these other platforms are a little bit naive in terms of human behavior, and especially just how certain classes of people are a little bit more vulnerable - or a lot more vulnerable - than others. This is a shared space and a community effort, but -- so of course we have our code of conduct and our value we sort of profess, but we also really took a serious technical approach to dealing with moderation in what we think is a pretty scalable way, more so than I think a lot of other people are doing it...

In terms of like when people first sign up, there's a -- we purposefully make Sign Up only available to folks with existing social accounts; you don't really need to link anything so deeply to your Twitter or GitHub once you're on, but you actually need to come from one of those places to engage in the first place... Which is a pretty low barrier; I think between Twitter and GitHub most software developers are engaged, and anyone who for any good reason doesn't have either of those accounts, we work with them...

But when you sign up with an existing social profile, we have a lot of information on you. We know you didn't create this Twitter account today, because if you did, we might flag you for potential spam or potential harassment, because we've banned your other one... Little things like that.

It's not so complicated, but we really thought about it early on, and every time we've had an influx of more spam, we've had to kind of solve new problems, but we've also tried to get ahead of them as much as we can...

But also, it's very difficult, and we change our feature set subtly from time to time as we grow, and that's why we sort of evolved... I didn't really get into it too much, but we have a whole area for private messaging, and small chat rooms, and things like that, which are actually kind of a really great area to have like "This is a smaller area for conversation and help and things like that", and it's like a break-out room from some of the big, wide-open threaded conversations that might happen elsewhere on the site.

I think even just folks on the team... There's six total people, including the three founders, and not everybody -- somebody will start building something just because it's kind of how everyone else does it, and I'll kind of have to make a big fuss about how I think we don't wanna do it just how everyone does it, because that's where it leads to these terrible harassing situations.

So it's a lot of little things, but we have a technical solution; we have a form of sort of crowdsource moderation, which also kind of has a system which quickly can elevate things to the admins, and it hasn't been so massive -- like, scale isn't so big that we can't deal with that pretty well with the current system.

It's always a real shame though when we deal with any kind of harassment; it's almost always like something gets shared to Hacker News or Reddit and there's a big influx of jerks... It's a real shame; it happens from time to time, and we don't try to create a situation where that could never happen, because that's impossible... But we deal with it pretty quickly and we try to ensure that the dialog doesn't get toxic.

\[00:36:02.18\] We really try to be diplomatic with community members who are good, constructive community members most of the time, but then we hear they really weren't respectful, and things like that... We try not to make people feel like they're being policed, but of course, it's getting harder and harder and I do kind of freak out sometimes.

It saddens me if anyone ever has a bad experience, but at our scale, sometimes people do. The core people really understand that at the very least we're trying harder than the other platforms, and we always have, and that's what's -- \[Alexa voice in the background\] Oh, I'm being--

**Jerod Santo:** \[laughs\] Someone wants to talk to you.

**Ben Halpern:** \[Alexa voice in the background\] Alexa, stop! The office is calling me. Wait, hold on. I maybe should... Can I actually maybe answer that?

**Adam Stacoviak:** Sure, go ahead and answer.

**Ben Halpern:** Now I'm thinking there might be something on fire. Alright... Alexa, call HQ. \[Alexa: "Calling HQ"; HQ answers\]. Yeah, is there anything I need to do? Alright, I'll try to do that right now. Alright, bye. Alexa, stop.

**Adam Stacoviak:** Alright, bear with us here a second while Ben hacks on some funs stuff... Here's a little interlude from BMC. You're gonna love it.

**Break:** \[00:37:27.11\]

**Jerod Santo:** And we are back. We forgot what we were talking about, because... Reasons. This is what happens when people who run websites hop on Skype and talk for a while - things happen. Right, Ben?

**Ben Halpern:** Yeah... It's happening less these days in general, but today was a big announcement day, we moved the repo over... Little things were expected to go wrong, and it's just one of those things...

**Jerod Santo:** Just one of those days...

**Ben Halpern:** And you know, it's a small team. I don't have a VP of engineering who deals with these things.

**Adam Stacoviak:** You are the VP of engineering.

**Ben Halpern:** Yeah.

**Jerod Santo:** That's right. Well, when Changelog.com goes down, I'm the VP of engineering as well, so we are very well aware of such situations... I shouldn't say -- dev.to is not down, it's just... There were issues. Alexa was having some problems.

Let's continue talking... Let's turn towards the open source, because we'd keyed off the conversation around that, and we haven't quite made our way back to it yet... So let's get started on that.

One thing I wanted to talk to you about - and you mentioned in the opening that as it started as a side project, you just didn't think about it, and you had wished that you had just done it from the very beginning, because you probably would have done a lot of things subtly, or maybe even majorly differently.

One thing that you did do was pre-announce open-sourcing it - I'm not sure how long back - and then went about getting ready for it... So maybe tell us your strategy there and why there was a pre-announcement, and then time passed, and then finally today, August 8th, the final open-sourcing. Give us that story.

**Ben Halpern:** Yeah, so the pre-announcement was really a matter of letting people know where we stood on the issue and how excited we were about it. As soon as things kind of started falling in place, it got more and more exciting.

I really felt like at every stage, any time, we gave people the opportunity to have more creative control over the project \[unintelligible 00:39:33.11\] from my voice, and that kind of thing. It always led to exciting outcomes, in every way.

We started talking about it because we were just excited about it, and we're pretty transparent about everything we want to be doing... So if we haven't really talked about it, it's because we're not totally sure what our plan is.

\[00:40:04.11\] But that was a while ago, many months ago, and we didn't really ever create a deadline; we just kept having new things come up, new features we had to build, new things we had to do for the current scale of the project... But we were still just dying to do this, because it just seemed like such an exciting thing to do with the community.

We finally just kind of like realized we were actually getting closer and closer to feeling like we had the capacity to manage that part of the project, which is this whole new thing... There's a lot of benefits to not having to manage a bunch of people, taking part in different ways and stuff like that.

But we finally felt like we were kind of getting ready for that, and we put a date on it... We picked August 8th because it's 08.08, and it's a lucky number.

We worked hard, we worked with some outsiders to kind of audit the code for possible security vulnerabilities... We expect little things to possibly come up, but you can't really rely on obfuscation when all the code's out there... But we know that in the long run, when we are fully open, the long-term security story is really promising.

At our core, it became such a strong part of our values, and I just didn't think that this project was important enough to warrant open-sourcing at the time, and just... You know, in the future I wouldn't really care that much about the importance of a project, but honestly, early on it was just a Rails website I'd made over the holiday break one year when I wasn't doing anything else...

But when things started to turn, I started to kind of get my co-founders really pumped about the idea that the community is more valuable than the code, and we can really put ourselves out there and we don't have to worry that other people can now build a clone if they wanted to, with our exact... But it's really not the code that's so special, it's the community; the community is really what's gonna help make the code special. We really think that the future is strong, because we're gonna have a lot of really talented and really enthusiastic developers in our ear and in our codebase.

**Adam Stacoviak:** The security aspect is an interesting -- that's something that's come up recently with other things, but super-recent was Homebrew. There was somebody who gained access to Homebrew in 30 minutes, like commit access to it, via supply chain attacks... Basically, package maintainers having issues.

What made you decide to do a security audit? I don't think we did that, Jerod. Did we do that? You probably did it, but we didn't have a third-party do it.

**Jerod Santo:** Yeah, and we also open-sourced at an earlier stage in our software's history. Ben probably had multiple years of development going back, whereas we had maybe six months.

We did not open-source from the very beginning, from the relaunch, but we had had that in mind from the very beginning... So there's a huge difference just in your mindset, even just like subconsciously, I believe, when you know that that's eventually going to happen... So yeah, our security audit was probably just me thinking through everything, and then double-checking and making sure there was nothing super-stupid.

\[00:44:05.29\] And then of course, we've had plenty of people report situations publicly... And publicly meaning through the GitHub issues, and then even privately, stuff they'd found. So our security has improved from it, but like you said, Adam, there's definitely other security holes that it can open up as well.

Yeah, that's an interesting move, bringing in an outsider to do audits. Ben, can you tell us more about that?

**Ben Halpern:** Exactly to your point - we had obviously valued security; we had offered a modest bug bounty and we have uncovered a lot of things that way... Little exploits in terms of our -- you know, just in every little way, like how we host images maybe, in certain contexts, or little things... And thankfully, we've never had any major leaks or any major vulnerabilities, but little things along the way have been brought to our attention. The process is just to kind of deal with those as good as we can...

But when the entire codebase is open, we actually get much, much better at finding those vulnerabilities more quickly; the code gets way more eyes before it gets into the codebase... But the existing code becomes possibly a little more vulnerable in case there's just any kind of endpoints which expose an entire database model perhaps, instead of just a few columns, or anything like that... The user doesn't realize this, but any JSON endpoint that tells you one extra thing that maybe is not public information.

That process is just an ongoing battle. We thought that if there's anywhere we have blind spots too, it's security vulnerabilities we've already written ourselves and didn't notice, or anything like that... But I think we really paid attention to all the major hot spots.

Rails has a lot of convention that we follow pretty well, and we know not to run arbitrary code. We use whitelists and not blacklists... We take it all really seriously, but there's always just the unknown unknown. We have a lot of friends in the community though, and several people who were very helpful, and I think any possible vulnerabilities we find in this process I think are not gonna be severe, and we will deal with them as they come.

It's just a matter of programming, and had we been open source from the get-go - yeah, this is not a process we would have had to spend so much time on, and that's really my big, like "Damn, I wish we were open source right away", because we would have been much cleaner the whole way. You can't really get away with things just in passing, but overall, we got here and I'm always amazed at how successful this whole project has been and how much it impacts people, so... No major regrets, but definitely -- I don't think I would ever closed-source in the future something that didn't have a very good reason for being closed source.

**Break:** \[00:48:02.19\]

**Jerod Santo:** Ben, one of the reasons why I asked about that time span, the pre-announcement versus the open-sourcing - I was curious, and my intuition was maybe there was a little bit of accountability there... Like, once you announce a thing, you kind of have to do it, and open-sourcing, since it's not like a feature - although it can be considered one - on your product roadmap, it's the kind of thing that would just continue like "Yes, we're gonna eventually do it", but once you write a blog post and make an announcement, there's this expectation of "It's going to happen." So maybe there was a little bit of that in there, as well.

I'm curious also about the timespan and bringing in the third-parties for helping... Security is one aspect of being not prepared for open source. The other aspect, which is way more personal for me, and I'm curious if it's the same for you, and perhaps inappropriately prideful... Now it's like that dream where you're at school with your clothes off, and everybody's laughing at you... It's that fear of "Oh no, everyone's gonna see my code." Was there any of that involved?

**Ben Halpern:** That has been with me, and the whole thing... You're totally right on this is why we pre-announced it; we needed to give ourselves a deadline. But also, we pre-announced it so that we could kind of like benefit from the additional mojo that would come along. We got a month of being able to really keep people updated about something that was happening soon, so it gave us -- we get to really justify this as a feature more if we get to talk about it. If it's just a private thing, then we can't get people excited about anything that we don't talk about.

Yeah, it was about ripping off that band-aid, giving a deadline, forcing us to really make it happen, and then... Yeah, you're absolutely right about just the exposure to how terrible a programmer we all are. \[laughter\] It's a really terrifying feeling, and I really personally felt like I've been able to cross a barrier... I just feel like I've made myself the class clown enough as a programmer, enough times that I just can acknowledge that coding is hard and I don't know what I'm doing half the time.

But at the same time, we have the proof that we make good stuff. We have a lot of really good ideas, we know what we're doing -- we don't have all the answers, but we have a lot of good ones. That positioning, to be ready to just go do it, is totally what helps us happen.

\[00:52:19.12\] And also, with Rails -- like, I know different programming languages, I've done different kinds of development, different types of web frameworks, or other kinds of programming along the way, but Rails is something I'm pretty comfortable with. I feel like I get it and I know it, and it's also very boring and old, and that's a real feature as far as I'm concerned.

Before this project, I was working with a lot of newer technologies, which was kind of exciting, but you find this GitHub issue which is just like the only answer to how you can build this thing, is like hope that this feature ships at some point this year... So yeah, just happy to be using some pretty boring technology.

Jeff Atwood has a post about why they chose Rails for Discourse, and it's for a lot of the same reasons. It's -- yeah, just a lot of things went into it, but... I'm just pretty comfortable about that part; people get to see me with my pants down, but it's part of the spectacle now. I don't feel like I'm in my private space; it's a public spectacle and I get to put on a little song and dance.

**Adam Stacoviak:** Do you feel like -- you know, you mentioned that you wish you'd maybe done it earlier... Do you feel like it would have changed the direction? ...not so much of your mission as a platform or company or community, but more so maybe the speed at which you can deliver features, or the distraction, or the focus... Do you feel like given that it's been just the necessary eyes on the codebase has allowed you some level of focus, whereas had it been open source sooner, you may have had more shiny objects and more attraction and more just distraction, so to speak, around getting to where you're at now?

**Ben Halpern:** Yeah... It's hard to say that, given how much momentum we've built up and how much we've really been able to solve our own problems, as opposed to listening to all the random voices in the world... Yeah, it's hard to say that the alternate would have been better.

The interesting thing is that now that we have done this project - and I can't imagine leaving this project anytime soon to do something that has nothing to do with this community that we've been a part of... So I'm really in this for the long haul, so when I think about the future in terms of open sourcing from day one on things, I really put myself in the mindset of like "Wow, we already have these thousands of friends out in the world, committed to our vision, working towards our ideals", and things like that. So it probably was pretty okay that things went the way they did, but we're excited for the future projects, which we'll just kind of develop out in the open.

And really, I think open source is so magical, and I don't think people work towards the most ambitious things all the time; I think what we're doing is pretty ambitious, and doing it through open source is just remarkably cool. I don't think the world understands all the time just how amazing it is when many software developers get to have a say or contribute their expertise.

\[00:56:15.22\] We're also \[unintelligible 00:56:15.08\] solving the same problems without talking to one another very much, and the whole thing is just gonna be, at the very least, a fantastic project. And really, when we were justifying open source to ourselves, it's like "If the open source thing doesn't work out for some reason, it will be because we crashed and burned spectacularly, trying something pretty fun", as opposed to being overly concerned about the possible downsides of being out in the open, and with our pants down, and stuff like that.

We don't want to expose our user base to any danger or anything like that, but as far as the business goes, if we put ourselves out there as maintainers of a really cool, big open source project, our worst-case scenario is a spectacular failure, as opposed to petering off and not amounting to anything really notable or awesome. It's easy to justify even the worst-case scenario that way.

**Jerod Santo:** Let's talk about the tech for a real quick minute, because I know you're down-playing Rails as boring, and all that... I still think Rails is super cool myself, but I realize that the hype cycle has moved on. That being said, you've written and you've talked a lot about the way that you're going about using Rails, and one thing that you've done with dev.to which is awesome, and it's something that we strive towards - you've made it super-fast. And Rails is not known for being super-fast; I'm talking about load time, performance in terms of time to first paint, and all that kind of stuff. Is there interesting tidbits in the code, ways you've gone about using Rails, or things that you've written that we can link to in the notes, or points in the code that we can point people to, to show how you're going about doing things that might be a little bit different than normal, or are allowing you to achieve the speed that you have on page load?

**Ben Halpern:** Yeah, so because this was a side project, so much of it was like scratching my own itch, and I'm a very impatient internet user. In terms of people's blog posts, if it's not loading quickly when all I need to do is read texts on a page, like the most basic thing that ships with HTML version 1... You know, it's a frustrating thing. So from the technical perspective, this project was built around performance ideas, in a lot of ways, and also delivering performance around the whole world. Americans don't realize how slow the internet can be in other parts of the world because of latency...

But yeah, despite that, we chose Rails, which is not built for speed as the primary use case. But what we do is -- Rails doesn't do a lot of the work on most page loads, so 90% of traffic is handled exclusively on the CDN layer... So we deliver pages which don't have the users' sort of personal identified information on that first page load, but the additional stuff is a quick asynchronous call, so worst-case-scenario you're waiting longer for your image to show up... But even that is actually cached locally, in local storage.

Basically, you're getting the edge-cached version of pages on the site, and I have written about this and I actually did a talk at Rails Conf on the same subject, so we can put the links to all that stuff...

And yeah, it's just like a few new tricks, but also understanding -- as a team, you have to know you have these constraints; you can't use the current user method in the view, like in most cases, because we don't send over a server-rendered view; we send over an edge cache view.

\[01:00:14.11\] There's a few ways to do that with edge, with VLC and stuff like that on the edge... That's Varnish Caching Language - VCL, sorry... And there's a few different ways people do that, and we're taking kind of the less standard way to even do that, because most edge caching still kind of makes round trips home for certain information in certain cases... But we just said like "If 1,000 people are reading the same article, we don't want to recompute it 1,000 times." You're getting it once, and when the page changes, you get the new page. This is possible because of the services we use.

Fastly, our CDN, has basically -- they have instant purge, so if we have caching issues, it's a bug on our end, their API is really just virtually instant; 100-200 millisecond cache clear... So when a user updates an article, we serve a fresh one once, and then the rest of them are cached version.

That's just the architecture that makes sense for website content-driven stuff. I'm sure all the podcasts that are doing anything right are also coming from some kind of CDN... And really, people's location, the place things are getting served from, the way they're being cached - it's all kind of like fundamentals of computing, but I think some of this stuff gets abstracted away and then programmers forget it's part of the problem... But that was never my mindset. If anything, it's a very typical Rails app, with one differentiating feature, which would be the same kind of approach you would take with any framework. The big difference here is the speed of light is constant; you can't change that, so you need to bring the code closer to the people, and people are used to doing that with purely static content... But Fastly has always been trying to push people to do more stuff this way, from themselves, and I didn't coordinate with them, but I read their blog posts, and it was a great idea, so I ran with it.

It's funny - people themselves really know the best use cases for their own software, and sometimes you just have to listen. There's some really cool stuff out there, and we have the same concept with some of our other services. We use Algolia, which is a distributed search index; so we don't host our own search, because we actually have nodes distributed all over the world. So if you're in Tokyo, you're gonna get a search response and a site response both from the edge, within milliseconds.

I do live in the U.S., so this really wouldn't be a problem for me, but at some point in my life I became very interested in not being exclusive to the rest of the world, and from a business perspective it just made sense to do that right away... Trying to \[01:03:22.05\] that kind of optimization at the end, when you already have all your -- so if open-sourcing was tough because we had already kind of just been writing code without that in mind right away, optimizing edge caching like that would be ten times tougher if that wasn't initially your use case... Because you'd have to really start tearing things out, and it would be really frustrating and possibly not worth it.

\[01:03:44.25\] And the wonderful thing about being the coder, the founder, the project manager or whatever - I didn't have to convince anyone else that this is a good idea; I just had to really know in my heart that this was a good thing to try to do, and see if it worked... And it really did, and over time we've found things that are like "Damn, I wish we would have not gone so hard on this part, because it made everything else harder...", but things kind of work themselves out over time and we get to like a happy medium.

It's just really exciting, and I liken it to being a painter... If you're trying to found a project and you don't know how to code or do the thing that needs to get done, I feel like it's kind of like being a painter but you can't paint; trying to tell someone else live what you want the canvas to be, but you need to describe it instead of just doing it.

Early on in a project, a software developer has so many super-powers in terms of just being able to take that paintbrush and do whatever they want... Like, translate what it's their head to what's on the canvas.

I just felt like early on in the project, as a business, and as a project, just the fact that I could kind of work that all in myself, without too much pressure, and without too many external obligations... I really chose a technical project that was really on my alley; I didn't try to learn 100 new things to do this. It was like, "Okay, what do I actually know better than anything, and what's the most optimized thing I can do with what I know?"

A lot of this was really growing up for me. I've made mistakes in the past where I chose cool technology I didn't really have a good grip on, even if it was an interesting project, and then I didn't even really have cared too much about the project material, and stuff like that... So this really was just a coming together of a lot of different spaces and interests, and the tech really met with the human side, and the team was great... That's why it worked out to this point.

**Jerod Santo:** Very cool. Well, definitely give us those resources and we will link both of those up. Ben, one thing that you can do now which you could do previously, which I've found to be very fun, is when you are describing something that you're doing in software, or you're doing a talk, or you're trying to get somebody to add a feature - whatever it is, you can actually link to the line of code or the file on GitHub and say "This is exactly what I'm talking about."

You no longer have to talk in the abstract about your software now that it's open source. You can actually just send them the source, and it's super cool.

**Ben Halpern:** Yeah, and it's much easier to just do certain kinds of support in general when you always have that at your disposal, even if you're not talking to the person who might need it all the time... But the fact that so many things can just be described that way, just like "This is exactly what the problem is..." And with the project we expect there'll be flies on the wall, who anytime we describe something they might fix it, but even just being able to talk about it is, of course, half the battle.

We already have some folks who just go around refactoring all the time \[01:07:14.16\] because we invited some folks in early on, in addition to kind of the explicit auditing, just to kind of start working on stuff... It's just been so cool.

What we really have to get a little bit better at now is describing the path and the vision, because that really is not a strength of mine... Now I have to kind of have a different role, where I actually am trying to describe what we're supposed to be painting a lot more, and that's gonna be a challenge I think I'm up for. Mostly, I just need to take a liking to it more so than any new skill, or anything... Because it sometimes feels like time away from the code. But I like to have fun with it. I really love hanging around the website itself. I spend so much time on dev.to.

\[01:08:08.02\] The more we can make the future of dev.to jive with how we like to use dev.to ourselves, and this whole meta-concept of hanging out on the thing you're working on... It's all really fun. I just can't say enough about how exciting some of these new things we're doing are.

And I don't really have any sort of strong open source ties in my life. I've contributed a little bit, I've been a big fan of open source for a long time, but never had the urge to strongly become a part of any one project, because it's not really in my personality, the same way I see it with so many community members, and... Yeah, I'm just really excited to see it all happen and to be able to do it full-time. I'm not very good at splitting my time in that sense. It's just... Exciting things ahead.

**Adam Stacoviak:** Well, I'd say now that we've got the understanding of why open-sourcing matters to you, to your team, to the business, to the direction - that makes sense, but what about the community itself? What are you hoping for the community to contribute back? Part of the reason why you open-source is not just to "Hey, here's my code. Take a peek." Maybe there's some reasons for the community to get involved. What are some of your visions or aspirations there?

**Ben Halpern:** Yeah, so we really think of it as like, you know, not really one killer reason it has to happen... Lots of people have just been really excited to kind of like build the things they had been complaining are missing, and little things like that. That's one part of the puzzle... But I've really been driven by certain successful open source projects, namely Linux, which I think just really has a fascinating idea of how to develop software, where people can contribute in sort of greedy ways... You know, potential partnerships or platform concepts... People can really -- like, if they want something to happen and we agree that it should happen in theory, we just don't have the resources for it, they can kind of help code it up.

So we have partnerships with our -- our current sustaining business model is a few different things, including some sponsors and some partners, and we run some community contests, and things like that... And all of these things sometimes just need that extra special bit of effort to really make happen... But our core vision doesn't really work with that; we can't just take our minds and put them towards building all the little features that a contest needs, but we find these people we work with have a lot of willing contributors who, you know, their job is to kind of make this work... So like, "How can I make this work by finding folks within my team to kind of work with your team on the code, to make it happen?" That's just super-duper exciting.

Then the big, magical unicorn use case is people will develop ways for this application to be sort of a little bit more generic and possibly stand up their own communities... Not necessarily in tech, but maybe... We don't really feel like there's just room for one, but also dev.to for music, for activism, for just like news and media, and stuff like that... We have a sort of path that's kind of like a media organization kind of story, and we eventually settled on this platform.

\[01:12:10.22\] Our app right now is a pretty simple Rails app we've hacked together as best we can, but there's a lot of use cases that we can build on this, and the community really actually can make this better, so what we hope is that -- you know, today this is the dev.to codebase; you can't really actually use it as a different app, but we wanna support that use case in the long run, and we hope that there's a number of contributors who really contribute THAT goal, because that's the place where it's not for us, it's for the world...

**Adam Stacoviak:** Right. You're not hoping that people build features for dev.to itself, but maybe take what dev.to's platform is to maybe greater heights, outside of dev.to, potentially.

**Ben Halpern:** Yeah, and the features to make these things work - it's like, if one other group of people, like anyone who's a part of our platform, wants to build dev.to for their activist cause or music or anything else that interests them in their lives, they immediately then have to start caring about the quality of everything, working with us on missing features, arguing about whether something should exist or not in the concept of the codebase... And that's really cool.

I've seen that out there - there's a lot of these sort of "make your own social network" platforms, but none of them are meaningfully open-sourced, or if they are open-sourced, they're missing the whole caretaking (I think) we've done with this whole project in terms of molding the user experience, and the code, and stuff like that.

When I look out there, I see a void in the universe a little bit, but I think our goal will be to run the dev community. We are a dev platform for developers, but if there's future instances, we will be super-supportive of that, because that makes this whole thing an ecosystem. And we're not gonna build necessarily an abstract framework; we don't want this to be like a spin-your-own whatchamacallit, like Wordpress, or anything like that... But all these things are really good guideposts for how to make software that's much bigger than yourself and much bigger than the initial problem, and just more amazing.

If we could take on the Facebooks and the Twitters of the world with a number of individual sort of decentralized but compatible social networks, so be it; it's kind of grandiose, and that's why we don't really worry too much about that, but it's a use case we really wanna support.

The thing about open source is it's magical. Linux really bit a huge chunk out of what Microsoft wanted to be, and Microsoft, in order to survive, had to completely adopt and become sort of the biggest proponents in the world of open source.

**Adam Stacoviak:** It's true.

**Ben Halpern:** Yeah, I'm like a practical idealist; I don't want us to be in the business of toppling Facebook, but if a side use case is that somebody is trying, we'll say "Go get it!", and we'll support this as much as we can, as long as it also helps the dev community.

\[01:15:50.29\] So it's all just cool stuff, it's the magic of networks and people, and all these things that my team is interested in, I'm interested in... It's just fascinating. But ultimately, it happens by people fixing bugs, and coming up with new ideas, and refactoring some code here and there... It's just a process, and it's hopefully boring, and we don't need to innovate at every angle, we just need to be very craftsman-like and do a good job with our work... And who knows how big something can be when you really put in those sort of caring moments...?

**Adam Stacoviak:** Well, let me be the first to say it, if not the second - at least in this show - congrats on this launch! It's obviously a big deal, I think we said it first off, but... I mean, I'm excited about it, that it's open source. You promised a long time ago and finally it's here; you've put a lot of thoughtfulness into not only the user experience of dev.to, but also the fact that it's open source. I'm just stoked for you guys.

I know Jess was supposed to be on this call; we're bummed she couldn't make it, but make sure you say hi to her for us, and let her know we missed her.

**Ben Halpern:** Yeah, absolutely. It's been awesome hanging out with you two, and I hope to run into you again. We met at OSCON two years ago...

**Adam Stacoviak:** Two years ago, yeah.

**Ben Halpern:** Yeah, a lot has happened since then. I think Changelog has been really humming along, and we wanna work with you as much as possible, if there's anything we can do... I think that now that we're open source, those kind of chats can happen a little bit more smoothly. It's all just a benefit...

**Adam Stacoviak:** Yeah, absolutely.

**Ben Halpern:** There's so many great open source projects, and we already feel like we're -- it's a few hours into our adventure, but we're so much more steeped in the whole community, in the whole software world, and it's... Yeah, it's so exciting!

**Adam Stacoviak:** Well, cool. Ben, thank you so much for your time today, congrats on open-sourcing, and more importantly, thanks for coming on this show and sharing your story. It was a lot of fun going through that. Thank you.

**Ben Halpern:** Yeah, thanks so much for having me.
