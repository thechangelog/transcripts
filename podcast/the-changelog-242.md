**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode 242, and today James Long joined the show to talk about his recent blog post, "Why I'm Frequently Absent From Open Source." He shared several points in that blog post that struck a chord with us, so we invited him on the show. We pulled back the layers of open source, the people, the sustainability, the responsibility, the guilt and the balance it takes to keep it all together.

We have three sponsors - Rollbar, Toptal and Compose.

**Break:** \[00:01:09.24\]

**Adam Stacoviak:** Alright, we're back. We're talking to James Long today. James, welcome to the show, man. I'm so excited to have you here. I read your post, got all goosebumped after I read it; I felt that kindred spirit, so to speak.

**James Long:** Yeah, I know, I'm super excited to talk about it. I honestly am at the point where I really enjoy talking about things around tech, than tech itself. I'm super excited.

**Adam Stacoviak:** I guess we couldn't start the show without mentioning the fact that Jerod's not here, and the reason Jerod's not here is because Jerod shipped a long-time running side-project called Nora, which is his new baby girl; his wife launched that project - as he had said - on Monday, which is great. Jerod, thanks man... Glad you got your daughter here, and have fun with the time off.

Jerod actually teed up this conversation; he emailed you and said, "Man, I love this post." The post we're talking about is called "Why I'm Frequently Absent From Open Source." Here on this show we cover this quite a bit. We actually launched a whole separate show called Request For Commits with Nadia Eghbal and Mikeal Rogers to cover that human side of code, and I kind of feel like this is part of it... But we obviously have a deep passion for open source, a deep passion for the people of open source, the code that gets written because of it - all that good stuff. But at the end of the day it's about people.

Your post really struck a chord because at the end of it - and I may ruin it for somebody; maybe I shouldn't do that - it kind of felt like a love letter to your wife, but not really. It was more like, "This is why I'm absent, and I love you, my wife of six years."

**James Long:** \[00:04:10.09\] Yeah, it's kind of funny... I've been meaning to talk more about this, so this was supposed to mostly be a tribute to my wife. The first half of the post was probably a little bit more of a dump than I meant it to be, because I'd been meaning to write a separate post about that and just focus on that. So I wrote this in like an hour on Sunday before we went out to dinner, and then I showed her the post at dinner, and it was awesome. But I read it now and I'm like, "Wow, there were a lot of thoughts in my head that I just really dumped there." It's a good thing to talk about.

**Adam Stacoviak:** And that's why we're having you on the show, because I felt like it was a bit of a drive-by shooting, in a way. I kind of felt like you had more to tell... Obviously, you shared some pretty good points in there, clearly not simply to your wife. They were more towards the open source community, and more like warning signs/battle scars/advice, so it kind of made sense to say, "Hey, James, great post. Can we talk to you on the show and can I dig into some of these points and go from there?" But just to give some substance to where you're coming from, help us understand a bit of your history with open source.

**James Long:** Sure. It's interesting, because the more I think about it, I think I did sort of grow up with open source. I remember Netscape being probably the first browser that I used, and I remember Firefox... I don't really know why, but I guess I was really loyal to Firefox even in the early 2000s.

**Adam Stacoviak:** Oh yes, me too.

**James Long:** I guess because that was just the feel-good browser. It was open source, it had this really good aura around it compared to the dominance of Microsoft, which is this big, evil corporation. That sort of message I think was around a lot in the early 2000s, and somewhat for a good reason. So yeah, I think we all fell in love with Firefox, and it really did push a lot of the web forward and it was amazing. That was open source, and I don't remember ever reading the code of Firefox or anything like that, but I do remember... I guess it sort of just paved the way for when I actually started doing more development.

I'm one of those people who did development back when I was in middle school, which was back in the early 2000s. I think when I started doing development, it just make sense to just write code and keep it in the open. I don't ever remember thinking, "Oh, I need to hide this because one day I might make money off of it", or something like that. It was more like, "Yeah, the internet is this amazing thing; I'm meeting these people, so we can share code and we can talk about what we learned."

I don't think I really realized it was actually open source software; I think it was just me writing code and posting it on these forums. I remember being on this forum GameDev.net, because I did a lot of game development in high-school... And it was the classic '90s and 2000s way of doing stuff on the internet is you go to forums and you talk about stuff. So we would post a lot of code and we would talk about OpenGL and how to do a lot of stuff... There'd be crazy things that we would try to do, and we collaborated on code just by posting code blocks, or just style stuff - just place it on the forum, we would talk about the code, and then I'd go back to my code and try to do it.

**Adam Stacoviak:** Very scattered.

**James Long:** \[00:07:53.12\] Oh, totally scattered. Sort of just like posting a patch on the mailing list and stuff. So I guess it was just a very comfortable thing, and when I started actually developing real software, and I remember when GitHub was released in 2008, I think... I remember just being like, "Oh yeah, that totally makes sense." It made sense to me from the get-go, so I would publish a bunch of stuff.

This was back when I was involved -- I was involved a lot in the Scheme programming language. That language is a variant of Lisp, and there's a lot of stuff there why I think that's great. But it was a very, very small community; it was definitely a minor community, and still is.
It was interesting thinking back about my open source experiences there, because open source in a very small community really is a special thing, because there's just not that much work to be done. JavaScript is this huge, huge community, and open source in JavaScript -- you have to be careful in a lot more different ways, because you can just be overloaded with a lot of different stuff.

I remember developing stuff with these other 20 Scheme guys. We would share code on GitHub, I would write some stuff, I'd get an issue every three weeks... It really wasn't that big of a deal. That was also back when open source just was not as big as it is today either. I think it was just a lot easier back then.

Then I started doing a lot more stuff in the last ten years, and blogging a lot about myself and getting more followers on Twitter and GitHub... I'm still posting stuff to GitHub, but I think it has sort of evolved, and now I'm realizing today - and where we are today - it's just like, "Man, open source can be really hard as well."

**Adam Stacoviak:** I almost feel like it's changed. I feel like there's a lot more pressure. Maybe it's the accessibility of it. Maybe GitHub is, to its great abilities and to its great accomplishments, it's also to a fault, in way. Because I feel like the accessibility and maybe just the pressure of it or just the importance of it to the world, where they say "Open source has won", or "Software is eating the world, and open source is a big part of that", like Instagram wouldn't have been able to be a billion-dollar company if it hadn't stood on the shoulders of giants... And I kind of feel like maybe it's changed to some degree over the years. Maybe because as we become more of a tech society, there's a lot more pressure on it. Maybe the attributes around it have changed. What do you think?

**James Long:** I think that's true, for sure. I think in some ways, as it becomes more mainstream, there's almost this pressure to be almost sort of more commercial. Commercial products have like -- it's one product, you go to one place to report bugs and work with people, and you expect those bugs to get fixed. An indicator of this is I don't feel like people are very comfortable with forks. What forks of a project indicate are bad, right?

**Adam Stacoviak:** Something's cheap, something's fractured, something's not right... Like a revolution almost, even.

**James Long:** Yeah. I mean, are the maintainers at odds with each other now? Which one do I use? This one has this feature, this other one has this feature... If you think back to the older open source community, that was the whole point. You had four different forks and they would go off in their own direction, and it was awesome.
I don't really know what to do about that, or why... I don't know why that's changed, but I do feel like that's probably -- there's this pressure to have this really polished product that's just one product living under one space, and that is sort of where open source can get a lot harder.

**Adam Stacoviak:** \[00:11:56.26\] Yeah. Well, for the listeners, you know, we invited James on to have a conversation around this post - "Why I'm Frequently Absent From Open Source." We'll share that link in the show notes, so if you're already listening on a podcast app, go back to your app, look for the show notes, you'll find a link there at the very top. We'll make sure that post is the very first link on our show notes, so that you can easily follow along.

I wanna dive into some various sections of this post. You put a lot out there; you had said earlier that you dumped a lot of thoughts out there, and I wanna dig into some various points that you'd written. In the end of it all, it seems like what you were really trying to say was "Honey, I love you. It's your anniversary of six years, and the reason why you're not involved as much..." -- it was sort of like a two-part blog post, where it's a reason why you're not present as much and explaining why, but a the same time dropping some hints at some various problems.
The one thing I see that you started off with, the very first sentence was pivotal: "The goal of free open source development is empowerment." I wanted to talk to you about the breakdown of what that means. Why is the goal of free open source empowerment?

**James Long:** I think the reason for that is because -- and this is true... I think this an incredible thing about open source - it really gives users, whether or not they're tech people, just having the choice to go in and see the actual code that some product is running, even if it's a paid product; it doesn't even have to be free open source. It's a contrast to a lot of the ways things are today with these walled gardens and proprietary stuff. It is a little sad to me how the world has sort of moved towards more proprietary things, but that was the idea in the very beginning - if you wanted to, you could even learn a little bit about how code works, and going and seeing what that product is doing behind the scenes... Is it actually listening to your voice? Is it actually sending anything across the network? Is it actually doing stuff?

That's why Firefox -- or maybe it was still Netscape, I can't remember - released it for free, open source; it was a completely different model, and it empowered this whole community across the world to not only just see what it's doing, not actually verify that it's treating your privacy correctly, but also to even contribute back to it. If you see the code and you see, "Hey, this could actually be a lot better", you could actually send a patch back to the developers, and that's super empowering. Not only to be able to be involved in what it's doing, but to actually be able to have some influence over what it is as well. I think that's the crux of it.

**Adam Stacoviak:** Some of the things you mentioned there was being able to contribute to it and influence it. People can teach and learn from one another, business can be improved by it... We mentioned - at least I did - Instagram not being able to be Instagram as it is today, worth a billion dollars or more, being bought by Facebook, had it not been for the open source they built themselves upon. And then also being able to empower software developers or anyone in the software development ecosystem, whether it's someone who actually writes code or someone who leads communities, or leads great documentation, or does dev evangelism, which is a huge role that people don't really think about as often as they should... But essentially giving people the license and ability to influence, contribute, but also become one of the leaders in the space, and therefore progress their career.

**James Long:** Yeah, it's a multi-faceted thing. I think there are multiple different open source scenarios. One is a company has a product or a library and they open source it, and other companies collaborate on it. Or an individual writes something and releases it, and sort of gets a lot of credit for a really cool idea. There's a lot of positives in all of that stuff - just the ability to give something out and collaborate on it can produce a lot of benefits for people and for companies.

**Adam Stacoviak:** \[00:16:19.00\] Let's talk about "Open source is rife with problems, and ultimately unsustainable." That to me is true to some degree; certainly everything has problems, but the "ultimately unsustainable" part is the part I wanna talk with you a bit more about. You said somebody has to pay the cost of maintaining a project; you gave some of the details, but you seem slightly jaded. Where is this coming from?

**James Long:** Yeah, it's probably true... It's really hard when writing blog posts to not be a little hyperbolic. I don't think that's a bad thing; I think that's what gets people thinking. I think there needs to be maybe just a tiny bit of shock value. Ultimately unsustainable - maybe I shouldn't have used the word "ultimately" (maybe that was a little too strong), but I think the reason I wrote that is because the root of all of this. All of the times that I've released something because I thought it was really cool, and it seemed a shame to just hide it; at least other people could learn from it, but it's a good enough idea to where I care about it a lot, but when you put something up on GitHub...

Like I said before, there are two different scenarios. One is the personal scenario - I'm not a company; I was doing this on my own time, and I'm putting this up for myself. But then it's really cool and people start using it, and that's incredible. But then it's a very quick shift when you release something, when it's awesome, it's this really cool project, you were doing it on the side, and then it becomes this liability of your time, because then a bunch of people start filing issues... It just takes one day for it to become this burden, and that's why I say it's ultimately unsustainable - you become the person that isn't -- I think the most important part is what I say in the same paragraph, "the rest of the project is not nearly as much about just writing code, it's about all of the dealing with the people, talking to contributors..." Oh, they didn't understand that the code is written in that way for a specific reason. That was actually very intentional, but their PR changes that, so then you have to talk to them and explain that to them. It's a very, very time-consuming process.

I don't think it's ultimately unsustainable, I think it's very -- I don't wanna really focus too much on that statement. That was sort of to probably get people reading into this more. I just do think that if you look at the results, there are some pretty big problems that lead very frequently to people burning out really hard. To not say that that's a problem would be terrible, in my opinion, because we should care about the people way more than having open code that people can share.

I think it's super important that we take care of who is in our community. I don't think it's ultimately unsustainable, I just think either a company has to be subsidizing the costs, basically... If you're a company and you're letting your developers spend 20% of their time paid; they build this cool project...

I know Mozilla was very good at this, because they were an open source company. Even if they weren't really using your project, sometimes they would allow you to spend six hours a week maintaining an open source project that you had. And Mozilla really wasn't getting anything back for that, because they weren't using that project. It was just something that you thought was cool. So Mozilla is basically subsidizing that project, right? I mean, they were paying you to do all of that working with contributors, making sure that issues get closed and things like that.

\[00:20:08.28\] That's what I mean by "Somebody has to pay the cost of it." If it's not Mozilla, then you have to be spending those 6-10 hours a week at night, when you're tired, after you've put -- I mean, if you don't have family. If you do have family, it's after you put the kids to bed. If you don't have family, it's after you've relaxed some, maybe done some other side projects and hobbies, or just kept up with life - house maintenance, running errands and things like that. You're just tired a lot, and I think the result that I really wanna focus on is that it's 11 PM, you're super tired, you either wanna play a video game or just go to bed, but you feel this guilt, because you know there are those three pull requests opened...

You pull them up, and you just sort of get this depressed feeling, because you don't wanna do it. I don't think enough people talk about that feeling, and that's sort of at the core of all of this.

**Adam Stacoviak:** That's certainly a good place to take our first pause, because the guilt side of things is something I wanna dive deep into, so we'll tee that up real quick; we'll take this break, and when we come back, we'll dive deep into the guilt that we all feel from just not giving enough, it seems. We'll break and we'll be right back.

**Break:** \[00:21:22.03\]

**Adam Stacoviak:** And we're back... We're talking to James Long about this absence from open source and being okay with it; some pretty raw statements from you, James, and hopefully we can dig deep into each of those and uncover some of your feelings about them, and maybe even some solutions. We teed up the break with the idea of guilt, and I'm kind of curious what you mean by guilt towards open source, because my version and your version may differ. What do you mean by that?

**James Long:** One of the problems with open source is that you don't really have control over the activity, I guess. If you're working on a project internally in a company, you sort of can plan, you know what to expect... Everyone is working for the same company, so you can coordinate - "Okay, this quarter we're not gonna focus on this product very much, so any requests to this project aren't gonna get answered." For open source, you can take a weekend off and come back and there's 20 new issues, and it's just this constant, this slow trickle of work that builds up whether you want it or not. That is where the guilt comes in.

If you don't work on that project for a week, you know that that slow trickle is there, and that trickle is trickling guilt into your mind over time. It's a slow build up; if you have time, like an hour every day, or half an hour every day to at least respond to people, then you probably don't feel as guilty, but it sucks to have to feel that way, that you always have to be responding.

**Adam Stacoviak:** Yeah, it's almost like anytime you're watching a moving or hanging out with your wife, or going to the park in the middle of the day with your kids, or an extended lunch even... You're almost like, "I could be closing issues, I could be helping people..." Or just knowing that there's people out there thinking, "James, bump to this issue... Come on, man."

**James Long:** \[00:24:10.19\] Yeah.

**Adam Stacoviak:** Anybody bump your issues on you?

**James Long:** A little bit. I will preface this with... Probably about a year, or it's been a long time since I had to maintain a project, and some of this is coming up because I released Prettier in January, so I'm sort of reliving... I was able to avoid this for a long time, because I was like, "This is just not healthy for me", so I'm kind of relearning how to do all of this, especially with a family now. So that's sort of why I talked about it.

Honestly, it's been a really good experience with this project, but I think only because I've had one or two other people who are doing seriously a lot of work on it, and taking a lot of that burden off. So I honestly have to say not as much, but I've had that before; it doesn't happen all the time.

**Adam Stacoviak:** It's tough, though. It's a big burden to take on, but it's also a lot of responsibility. Each of us has gotten to the place we're at because of somebody else who has gone before us, right? But then to be in that position and to feel guilty because you're not giving enough, or you feel like you have to give more than maybe you're comfortable, or circumstances change, your grow your family, or you get a new job, or just anything that's outside of that burden... But it's also a great blessing to some people. Like we had said before, it allows people to break out and become leaders in this space, and to progress their career, and write books or give talks at conferences. There's a lot of upside to it.

We talked a bit about some of the unsustainable pieces in the first segment, so I wanna circle back to maybe some ideas you might have on how to make it a bit more sustainable. You mentioned that somebody has to pay the cost. Ultimately, it's sometimes often a company that subsidizes it, whether they get some benefit directly from it or not; in the case of Mozilla, you were referencing them... What other ideas do you have on ways to make open source more sustainable?

**James Long:** Let's talk about the common answer to this, which is to find other people to help, to delegate better; that's always what people say. And I just feel like that's not sustainable. If you're having to find other people to help - and by definition, eventually they're gonna have to find people to help, and you're sort of constantly fracturing off work, and people leave their project... That is a definition of unsustainability, right?

To me, sustainability is if I choose to, if I want to stay this project, then I can, even if I don't have time. That doesn't seem like a very good answer, especially because a lot of times it's really hard to find good people to do this, because it is a lot of work. And not even that, it's harder to find people who -- I'm trying to say this in a way that is kind... But I guess people that you can trust; people who have the same vision for this project as you. There are all sorts of different people; there are people that are incredibly smart, but they might not have the same vision for the project as you, so it's kind of hard... Maybe that's something that you just need to do, if it's just not healthy for you, or you don't have time for a project - maybe you just have to give it up.

What you would really like to do is find somebody who knew your vision and can help bring that vision into fruition, but that's so rare... I'm not sure if I've ever... I can't think of a time when that actually worked out, where I found somebody who literally had the same idea as I. Usually, if I pass a product out to somebody else, they make a lot of decisions that I would not have done... Which is totally fine. It's totally fine, but it makes it that much harder to start delegating, because when you start delegating, it starts splitting the vision up.

\[00:28:26.03\] People are a bottleneck for a reason sometimes, because you're the only person that could really say, "Yes, I wrote that code for a reason, because eventually I want this code to become this." I don't know if that makes sense...

**Adam Stacoviak:** It makes sense. You kind of reminded me of almost like you're hiring... Because you used the word 'trust', and you usually wanna hire somebody that you trust, and you can only trust them through shared experiences. Somebody doesn't often come into your life like in open source, typically not from your hometown or typically not from the desk across from you. It's typically someone somewhere else, distributed, and that's a good thing.

**James Long:** Sure, yeah...

**Adam Stacoviak:** But you've gotta start from some level playing ground, so it could be their GitHub profile, it could be their past experiences that build your trust; it could be their notoriety or who they are... The reputation could precede them to give you that trust. But if they don't have that and they're entering "your project"... And it depends on your project, too. Your project or your vision could be "This is more of a community project" versus "This is James' project". That certainly changes the dynamic of adding people to the team.
But it kind of reminded me of like almost hiring, and in that case it amps up the responsibility of your role as that project's organizer as something that's just not something you do in your spare time. It's like, "Well, now this is kind of like a mini organization, and my job is hiring and firing people. Or potentially just hiring the right people."

**James Long:** Yeah, and I think that... Maybe it's for my personality - I do like organized, high-quality code and projects. Maybe the answer to part of this is just that you have to give that up in open source, maybe part of it, because it's a community. Because it's such a communal thing, it doesn't fit as well, and it's not necessarily a terrible thing; it just may be a little bit more messy.

Delegation is an answer; I think it can be a cop-out, some ways... Some people who responded to my post were just like, "Oh, you're just not delegating enough", and that just seems like it's such a cop-out answer to a lot of the frustration here, where you look around and people are burning out all over the place. It's not because they're not delegating... There's something deeper there. I'm here to talk about answers about sustainability, sorry... I kind of derailed a little bit.

**Adam Stacoviak:** No, that's okay. So the answer number one is delegation, but that doesn't actually work all the time...

**James Long:** Yes.

**Adam Stacoviak:** What's number two?

**James Long:** I think companies that do open source tend to work better, because they're paying for the open source work to be done, and I think it does work a lot of the times if that is work that they are using very integral into the organization. I know Netflix used RxJS a ton, and they have a couple people who are core contributors to RxJS; I don't know how much they might spend -- like 30% of their time on RxJS. It makes sense for the company at that point, because they're literally paying people to build out a lot of their really powerful infrastructure. But doing it open source means that they get contributions back from other people, and it really can be a good way to invest a little bit of money to get a lot of return from that.
\[00:32:08.11\] I think that is another answer - if you work for a company and they allow you to do it on their time, that can definitely work. Outside of that... I think this post is mostly focusing on somebody who wrote something really cool on the side and they wanna release it, and they don't have a company to pay for it. I think that's really what my post is aiming towards.

Developers like us - we're just very passionate and creative people. Creative people like to do things and show it off to other people, so we tend to get ourselves in these situations... We sort of want it to happen, and then once it happens we're like, "Oh, well now I gotta maintain it."

I don't really know any answers, to be honest, about what to do about that side project that you release that becomes successful, that gets 3,000 stars and is getting seven issues a day. Besides finding one or two people to help a little bit, like the delegation we were talking about, I just don't really know... You could ask for donations, I know some people do that.

I think Sean Larkin from Webpack - I saw he was tweeting about this idea of like after you do an NPM install, it shows either an ad or like a request for a donation. I get the point of what that's trying to do and I have nothing philosophically wrong with that... I just feel like asking for donations is still not a very sustainable strategy. It can work, it's just I don't think that's the definition of sustainable. Sustainable means a predictable answer.

I don't know, there are these other things that can help, like delegation, trying to get donations... You could do a license if a commercial company has more than 100 employees or more than 1,000 users - "Pay me $100/year", or something like that. That's what GreenSock does with their GSAP (animation library). You have to pay $150/year if you're a commercial company to use that library. To a company, $150/year is nothing. I think a lot of that frustration that people feel is this idea that "We create this amazing work; we're creative, passionate people and we put that out there for free, because it's awesome", but then companies go off and make millions of dollars off that product and you don't see any of that money.

It's sort of a weird scenario - are we really entitled to that money? I mean, you put it out there for free... I don't know, there's not a clear answer.

**Adam Stacoviak:** You certainly can't expect that there be easy answers, because if there were easy answers to this problem, then we wouldn't have the problem. But while you were talking there, it kind of made me think, as you kind of better defined what your perspective was for some of the statements you made in your post... It kind of made me think of like - going back to what I mentioned earlier about how open source has changed over the years... And that made me think there could be this - and maybe there already is - term "indie open source", where just like independent software... You may have Adobe, who creates massive software, massive company, massive amount of employees, and then you may have an indie developer who creates an iPhone app or an iOS app or whatever, and they're totally one person or maybe a couple people (a small shop), and there's these different variations of what an open source project or who may be at the helm of that project.

\[00:36:01.19\] To me, it kind of feels like indie open source maybe have trouble sustaining themselves, because certainly Facebook really doesn't have any problems with sustaining React. There's no problems there because they're bankrolling it, they understand what they're getting into... They may have gone in, as you said, for the warm and fuzzies, but they have the money to back it up and the employees are backed up in there, allowing those people to dedicate their time towards the source, towards the people, towards the talks, towards whatever moves that community along. What do you think?

**James Long:** Yeah, I think it's definitely -- this indie camp is such a good environment for people... That's what's so hard about this - it is such a good thing for young people to write code and share it and collaborate on stuff, but this is what I've talked about in my post as well: we need to be very careful about the expectations that we put on these indie people. "These indie people" - that sounds terrible. Like, us. \[laughter\] Everyone who just does stuff on the side, which is practically most developers - and it's fine if you don't do anything on the side - it's okay, just accept... It's sort of what I was talking about before - I think we all need to accept that it's messy. Like, "There are gonna be weeks where I just don't respond to your issues."

I think the problem is that if it's going to be this free, on the side, personal project that you just -- I don't know, I've seen some people talk about having an actual badge that says, "Unmaintained" or "Not maintained frequently."

**Adam Stacoviak:** Side project.

**James Long:** Yeah, "Side Project. It's totally stable and I'm passionate about this, and I will be for a while, but understand that it's gonna be messy." That might be another answer, I suppose.

**Adam Stacoviak:** Well, part of it too is less about finding a solution and more about setting expectations.

**James Long:** Right.

**Adam Stacoviak:** Because you don't have to solve the problem if the people using the code, desiring their issues to be solved or their pull request to be accepted, or maintainers not feeling burdened, then maybe what you're saying - without saying it - is like setting the expectation properly. Because if that's done, then you can give forgiveness in areas where they're required, because "Hey, this is an indie side project", "This is an unmaintained...", however you wanna word that as a maintainer, as a budding open source community, then it's sort of like a beacon to those participating (users, contributors, drive-by contributors, future maintainers, onlookers, press etc.) that "Hey, this project is not my lifeblood. I'm here, I love it, it's great, but don't expect me to be here every night at 11 PM, answering issues or whatever."

**James Long:** Yeah. I guess that is sort of where the delegations answer sort of is supposed to come in, because if a company is really wanting to adopt this as a crucial part of their infrastructure, you sort of give one of those people at the company commit access, and you might just have to accept that they're gonna make some changes that you might not like. I don't know... Or if you just want it to always be -- I guess what I'm talking about now is that it can be hard for some people... We have this drive to make things successful as well, so accepting that if you put this on the side it might not be as successful; I think that some of us have to accept that as well.

That might be part of my struggle - I do like to be successful, but I can't assume something is gonna be successful if I don't put in extra work towards it as well. So there's expectations to other people, and there's also maybe expectations on ourselves in some degree as well.

1:\[00:40:00.20\] What do you have to say about the warm and fuzzies? I mentioned that it's something else you said - sometimes projects go open source... I think your perspective here is from a company's standpoint. They often go open source for the warm and fuzzies, but then they kind of get into it and it becomes charity, so to speak. How do you feel about the warm and fuzzy feeling of just open sourcing it because that's what everybody else is doing, basically?

**James Long:** I think that that might be one of the things that is the most frustrating to me, because I think the general tone of open source being this sort of noble cause is part of the problem, in my opinion. That's why it's almost like, "Oh, you're gonna charge for money? I can't believe you would ever do that, because you're an open source project. That defeats the whole cause."

I love some of the core drivers of open source, and they are very mission-driven... I worked for Mozilla, which is a very mission-driven organization, and it was a very powerful way to talk about things, and there is a big mission there, keeping things open source; they're one of the few browsers that really are an independent browser. But there still this -- I think we just can't let that trickle down become too much of this thing where we pressure people to make the world a better place with open source. I think I've seen a lot of different types of projects, and I think there's the ones where it's not just that they went open source - it's fine being open source; I think there are projects where we were like, "We're gonna invest in contributors", and Mozilla was all about contributors, because that's what Mozilla does; that's how they do a lot with a small company.

Firefox is localized across the world completely by contributors, or at least 98% by contributors. It's in a billion different languages because contributors for those languages will come and just localize everything; it's crazy. And it's a very interesting, powerful model, but I just feel like...

Some projects were like, "We're gonna go open source and we're gonna really invest in the contributors because that's where all the power comes from", and I just look at their projects and there's just so much time spent on teaching contributors and getting everything set up correctly and writing documentation so that they all know about it... Meanwhile, they're sort of ignoring some of these really core problems that are in their project, that contributors can't fix because they're too deep, and it just seems like the wrong focus.

I don't really know where this is going, but I think sometimes we get caught up in this idea that contributors are always this amazing thing. I think we just need to be careful about applying it too broadly.

**Adam Stacoviak:** I think the thing potentially with contributors and their significance is because of the position we're in with open source becoming more mainstream, which means growing, which means more people who were new, and not giving them a bad taste in their mouth, being very inclusive, being very inviting - maybe that's the side you're thinking of... They're valuable, because you don't wanna turn away someone who's like, "Hey, I heard of this great thing about open source" or "I listened to this podcast called The Changelog, and I've been listening for a while and I actually wanna step in now", and the first thing they get is this BDFL for life who's like, "You're in my project. I don't work at 11 PM. I've got this guilt and so I'll put this burden on you", and they're just trying to step in. We don't wanna turn them away or treat them badly because of our past experiences. We wanna respect their desire to communicate with us and to participate in the community, or even help us start one.

I'm not sure where I'm going with that either because I'm not arguing with you; I'm just saying that maybe that's why contributors are so significant, because you don't know where they're at in their path.

**James Long:** \[00:43:59.04\] Yes, and that's why it's such a hard problem. It's like, you're a jerk if you do that, so it's sort of this catch-22. I don't know, I think it's what we said before - expectations and communication, and somehow communicating to contributors in a very kind way that you just don't have time right now.

And usually, I have to say, I'm sort of jaded; you said that at the beginning of this, I think.

**Adam Stacoviak:** I said you seem jaded, you may be jaded.

**James Long:** I may be jaded, yes. I think it's because I have, just right now, with family and two kids, it's that thing where you're really tired at the end of the day, and it's like 11 PM and I either wanna work on my own side project, honestly, that's not even open source, or I wanna play video games, or something like that. But there's that guilt there.

Looking at that final result - that sucks; we're kind of rewinding, trying to look at the causes, and I just don't know what the answer is. It's such a convoluted, complicated issue. I don't really know the answer, but I think contributors are wonderful; I definitely don't wanna say that they're not, and I think Mozilla has gotten a huge, huge amount of work from contributors, and it did feel great. It did have this warm, fuzzy feeling, and it was this amazing collaboration with people. But I think finding ways that we can communicate with each other and shepherding contributors when we can, trying to find people who can do it for us when we can't, or just telling them that we might not have time...

I think there's a tone. I think some people in open source probably are as jaded as I am, and they'll respond to issues and be like, "No, we're not doing this" and just close the issue, which is not a very nice... Like, I at least try to say...

**Adam Stacoviak:** A "won't fix."

**James Long:** Yeah, a "won't fix." I at least try to say "I'm sorry." I think it has released some of my guilt, which realized how powerful this is. Just like doing two or three sentences. You're just like, "I'm sorry, I can't please everyone \*brownie face\*."

**Adam Stacoviak:** Right. It's almost like you have to put a signature with all of your negative or could-be-assumed negative responses, like "Sorry, I've got these other things going on and I can't", or "I'm not willing to", or "Here, you could, and here's the keys. Go ahead and open the door."

**James Long:** Right.

**Adam Stacoviak:** You said earlier though on the unsustainable piece, in your post you mentioned that humans are complex and full of conflict, and that was part of what you also said around the "ultimately unsustainable" mainly because of humans, not so much because of the code or the process or the philosophy of open source, but more like because of the humans involved. It seems like that's the case here, because at the end of the day you're talking to another human, and that's maybe the expectations we all have to remind ourselves of, because if we were standing face to face, you wouldn't simply say to me "Won't fix" and turn away, right?

**James Long:** Yeah.

**Adam Stacoviak:** You would be more human; you might shake my hand, you might pat me on the back, or if I'm crying, you might console me - which I would never cry over open source. But you would be a human about it. And I think because of -- not GitHub's fault, but because GitHub is so accessible, it's such a great tool, it's so easy to get in and get out, and you forget the human element.

**James Long:** Yes, it's made it super easy... It's true. It's made it super easy to file new issues, it's made it super easy to close issues, and it's definitely not GitHub's fault; it's just humans showing themselves. Humans are just mean on the internet. \[laughter\]

**Adam Stacoviak:** \[00:47:51.22\] It's become very mechanical. I think you may treat a robot differently, theoretically. A code robot, or whatever it might be - you might treat a robot different than you do a human, because they don't have feelings. So if you remove the human element, you remove the feelings. If you don't think you're dealing with a human, it's a little easier to be a jerk, because you're not really being a jerk, you're just not being human. You're sort of like removing the emotion, which is essentially what not being human is - lack of emotion. Humans are emotional beings, deep, methodical, thought-provoking - all those things, and when you remove that element, you're just simply talking to a machine, and that's not the case, because there's a human on the other side.

Let's pause here, because we wanna step away real quick... When we come back I wanna dive into other pieces that we haven't talked about quite yet, which is "How do we maintain balance?" One thing I think we really haven't talked about an awful lot in this show - maybe to some degree - is how to balance. Let's break here, and when we come back we'll talk about that.

**Break:** \[00:49:01.14\]

**Adam Stacoviak:** Alright, we're back, talking to James Long about all things open source: maintainability, sustainability, expectations, humanizing things - the full gamut. You've got this project Prettier... I wanna open this up more along the lines of what's happening with this project, because this is sort of where you're coming from with a lot of your perspectives, and then ultimately what's helping you find some balance in your own life, with your own open source project, your won ability to serve and love your family and to do the work you need to do with your consulting company and whatever else it is to you that is work.
So let's open up with Prettier - what is this project? How long have you been doing this?

**James Long:** Prettier is a JavaScript code formatter; it basically takes JavaScript as input, and then it compiles it to an AST and then it pretty-prints the AST. The goal of it is just completely ignore the original styling and always produce a consistent output.

There are a few things that we don't ignore in the original styling, but generally it forces all teams to have completely consistent styling. We have editor integration so that you can just format your code with a keystroke. It's kind of nice, because you can just like sloppily write code... I basically write code in the worst way, all on one line now, and then I'll just format it with a keystroke, and it looks pretty.

**Adam Stacoviak:** Wow.

**James Long:** \[00:52:05.10\] Yeah, it's a pretty interesting change to my development style. I started it very late November, and then kind of hacked on it some in December, and I open-sourced it the first or second week of January. It's been good; it's only been there for two or three months, but it already has a bunch of activity and a lot of people who are using it seem to like it.

**Adam Stacoviak:** So the pain you were feeling I guess has been pretty quick... The pain being going from a project with zero stars to now 5,367 stars, Facebook having an involvement with it, Christopher Chedeau, all that good stuff. You've gone from no code, to code, to community, really quick.

**James Long:** Yeah, and I think that was sort of blessed by the fact that I do have a pretty good following on Twitter already. People already sort of know me for my open source work, and Christopher Chedeau pushing it and Facebook pushing it is a huge part of that as well.
I had a hunch that this could be pretty big. I think it was a pretty intuitive, original project, so I guess it wasn't a huge surprise, but it was pretty quick.

**Adam Stacoviak:** We talked before on this show about 11 PM, closing issues, feeling the guilt, and then ultimately coming into this portion of the show where we're trying to cover some balance pieces... How do you balance and maintain this project? Did you desire for this project to be as "successful" as it is, meaning that it's used by more than just you, obviously, it serves a purpose to the community...? Was that your goal with this thing, or were you just hoping to share with the world this code that is in beta, not production-ready, so to speak, but something that serves your purpose? Is it where you thought it would be?

**James Long:** Back in early November and December I totally wanted it to just be my project. I was like, "I'm super tired of formatting code and I'm super tired of inconsistent styles when I get contributions from people, so I'm just gonna build something that I'm gonna use on my projects", because I knew that if I open this up to other people, there's all sorts of styling wars... But sometime in December, while talking to Christopher Chedeau from Facebook -- I don't know, at some point that goal changed. I think once I started implementing it, I was like, "Man, this is actually a super cool implementation that's actually pretty hard."

I just got caught by the bug. I was like, "This is a lot of good work, so I might as well share it." I think it did help a lot knowing that Christopher Chedeau was gonna be there and help as well. I'm not sure what I would have done without him, because if he wasn't there to encourage me to open source it and know that he was gonna be there and help triage issues, I may not have pushed it as hard. But at some point the goal changed, and I was like, "Yeah, we should try to see how many people we can get using this."

**Adam Stacoviak:** So right now Christopher is inside of Facebook trying to get everyone to use this, is that correct?

**James Long:** Yes. I don't' wanna speak for Facebook; I know it's probably super early on in that process, but that's the idea. It's just so helpful to have this formatting automatic, so that you can just focus on the real issues on code. I don't know if they're gonna use it or not, I know that they did contract me out for two weeks in January to work on this. I think they're pretty serious about trying to get them to use this, it's just obviously a lot of talking with people, talking with different teams to integrate it with all their infrastructure, and things like that.

Christopher is doing a lot of good work on that front, and yes, he's talking to everybody within Facebook right now and trying to convince them to see if it'll work.

**Adam Stacoviak:** \[00:56:02.26\] Prettier kind of reminds me of the concept of writing - not so much just writing code, but writing actual words onto a piece of paper... Almost like your personal experience with writing code is more like the rough draft, and Prettier makes it prettier, so that you can have it consistent with other team members, or a certain way -- it kind of gives you this permission to take it like a Hemingway portion, where you just sort of get the words out, don't worry about editing, and just let yourself know that Prettier will make it prettier on the other side.

**James Long:** Yeah, and I don't know if it's just me, but it's...

**Adam Stacoviak:** Liberating.

**James Long:** It's very liberating, yeah - that's in fact a very good point about it. It really helps my mind to just completely focus on the difficult, complex task at hand and I just don't have to care about formatting at all. It feels amazing to just write this long stream of code, and it formats it. If you're hacking on something so much because it's such a new and fragile idea, you're changing the code so much, and just to know that when you change the code every single time you can just reformat it, and it collapses the function call into one line when it gets smaller, and then it expands it back out when it's too big...

It's surprising how fluid it feels to your thought process. I actually didn't really expect it to be this liberating.

**Adam Stacoviak:** Wow. That's a good example of a project, as you had said, caught the bug - or the bug got you - and you had this idea for something and actually during the process of developing it, it becomes bigger than you expected. Now you're in this position of like, "Well, I've got my day things I'm doing, I've got my family, I've got all these other things happening - is this where I wanna be? Do I have to close out 10-15 issues a night every single night, and have that burden?" And now you find yourself in this position where it's a great project, people really see the vision of it, it serves a great purpose to the community... "Now I have to personally find balance in my life to actually continue with the mission of it." Let's open that conversation up around "What are some things you do to balance your life so that you can still do the things you love in open source?"... Still do the things you love around your day-to-day job tasks and needs, and then also still be there as a dad, as a husband.

**James Long:** That's a great question. I think I have learned a lot... Even though I am jaded, I still do love contributors, I still love open source, and I think I have learned a lot from this, and I sort of come into this in a way that I'm trying to be very aware of where I will get burnt out, basically... So I try to communicate -- even if there's an issue that is either really complex or is a PR that's been open for two days, I'll just comment on it and say "I'm sorry, I just don't have time yet. I will try to look at this soon." That sort of relieves some of the guilt.

I am a contractor, so I bill my client hourly. Some people don't like hourly billing; I'm not sure if I'm gonna do this for a long time, but the thing that's nice about it is I actually kind of like sitting down in the morning, and then I just get other stuff done for like two hours. Some mornings I'll sit down and just work on Prettier for two hours; that's within the confines of the work hours, and then I'll bill my client for the rest of the day. That's worked out pretty well.

Then some nights, if there's something that's really complex or something that I just really wanna get done or I just really wanna work on because it's fun, I will after the kids go to bed, and I spend some time with my wife - around 9 or 10 I'll sit down for an hour or two. But that's more rare, maybe once a week or even less than that. But that's just to sort of get caught up on things.

\[01:00:00.14\] I think it's good to structure your time; it's definitely really healthy to close your computer at the end of the day and at least spend some time doing something else. If you don't have a family, I'm sure you have other hobbies. Make sure that even if you have free time, spend it doing other stuff. Even if you have another side project that is a lot more fulfilling, work on that side-project; don't feel like you have to be working on that code right there. It'll still be there in a couple of days, and it's fine that people can wait. Having that mentality is good.

One last that I'll say is I really would advise people to not be getting GitHub notifications or emails on their phone, because - at least for me - that would be the worst way to make the guilt even more... You know, shouting at me on my phone every time I see something come through... I do not do that on my phone at all; that is just a complete no-no.

**Adam Stacoviak:** Yeah, that's a recipe for disaster, especially if you have a popular project or even a moderately successful project - you're always getting something, whether it's a pull request or an issue... There's always something that's happening. Even if it's just a comment... It doesn't even have to be an issue; it could be activity on issues. It's constantly pulling you away from the things you should be stepping away to enjoy, which is that balance portion.

It's almost getting permission, giving yourself permission, or even having someone like you come on a show like this to say, "Hey, it's okay to step away." Sometimes people just need to hear that. Maybe they already know it, but they're like "But I feel guilty!" and you're like, "Well, just feel guilty then. I can't help you with that part, but you CAN step away."

**James Long:** Yes, definitely. I think it's crucial to get to that point. If you feel like you have a couple hours at night that's totally free, even if you haven't looked at the issues in a couple days... If you don't wanna look at them, just don't look at them. I don't know what else to say. There's a balance... A balance, by definition, means there are going to be times when you are going to do that because you feel guilty (and that's fine), but as long as you just spend your time relaxing... Don't do it every night, that's basically the gist of it. Try to do it at least half of your time, or something.

**Adam Stacoviak:** Moderation. Back to the conversation around sustainability, or the - as you said it - "ultimately unsustainable" (I'm just throwing it back at you because it's fun) setting of expectations and understanding that we can't all eat Snickers for dinner, and there's a reason why: because that's not sustainable. Just like you're saying, you can't sit there and close issues or work on this code every single night, because that's not sustainable.
Whatever sustainable is to you - you being the general public who's listening to this show - is what you need to work on moderating around, because you can't just pour every ounce of you into this thing, because at the other end is potentially burnout, and that's not sustainable.

**James Long:** Yeah, it's good to diversify, basically... Diversify your interests and your time. I think that is a good way to guard against burnout.

**Adam Stacoviak:** One thing you said though at the end of your post, which as \[unintelligible 01:03:14.19\] this totally makes sense to me - you said there's no question in your mind that, by comparison (I'm assuming that also relates to open source) tech has little meaning in the greater context of life.

There's a lot of people that because we're technologists, because we're software developers, because we love what we do, we sort of put these blinders on and only see that. We may not forget that we have family, we may not forget that we have other human beings that love us and cherish us or vice-versa, but we certainly place a lot of meaning into software that it doesn't and hasn't earned. Because ultimately, when you pull back the layers of open source, it's people.

So when you say "by comparison, tech has little meaning in the greater context of life', I kind of think I know what you mean by that, but what do you mean by that?

**James Long:** \[01:04:10.13\] I think I mean that for some reason we do tend to put a lot of stock in what we're doing, even if it's a social media app where we're connecting people and there's a lot of good social aspect to this, or we're just making change in technology, we're furthering the progress of the world, sort of that noble mission... It's sort of that mission-oriented thinking - that sometimes can become too strong, and we do lose sight of the fact that going out for a walk with your family, you're gonna get more out of that than spending 20 hours working on a project.

Really what it comes down to it, a lot of people don't care about tech. I think that we put too much value on it, to be honest. I think tech has done amazing things in this world and connected us in amazing ways, and I'm not one of those people that think that everyone stares at their phones and that's a terrible thing - I think it's amazing how connected we are these days... So the product of tech every now and then can be revolutionary, but besides that, in this weekly, daily life, it's so much more important to make sure to spend those 4-6 hours at night doing other stuff sometimes.

I used to spend so much time at the computer, hacking and reading papers and doing stuff, and I really think I lost out on a lot of relationships back in my 20s, so that's sort of what that sentence is referring to.

**Adam Stacoviak:** So do you have some "shoulda/woulda/couldas" in your life? "Man, I wish I'd just spent two or three days doing that and one day pursuing a friendship"?

**James Long:** Yeah, I mean I wish I -- I don't know about relationships... I feel like I had pretty good relationships, but I definitely could have been a lot closer to people; I could have pursued people more. I wish I had definitely just closed my laptop at night when I was... You know, when you're in a house of guys or just a room mate, it's super easy to just sit on your computer at night and work on stuff. I definitely wish I had just gone out and hung out with friends and got to know other people more; I think it would have been a little bit richer life.
I had a great time in my 20s, I'm not saying I didn't, but it could have been even more fulfilling, and I would encourage anyone to seek balance in this world.

**Adam Stacoviak:** So what are some ways besides just closing your laptop, just dedicating 4-6 hours to loved ones, or hobbies, or whatever? What other ways can we be more mindful about balance?

**James Long:** I'm trying to think... I don't know, maybe just pursuing other hobbies, I guess. I mean really, the hours at the nights and on weekends, on Saturdays, going out and meeting other people are really the only things that I can think of. I can't really think of anything else.

**Adam Stacoviak:** So go out, make some friends, disconnect... Saturdays - no issues, no notifications on your email or your notifications from GitHub popping up; keep those things silenced. At least that would help you or help that person moderate to not feel like every waking hour is pulling them back into this thing they may be slightly jaded about, like "Oh man, I've launched this project and now it's super successful, and that's great, BUT now I've gotta keep giving my time to this thing..." Step away. Step away.

**James Long:** Yeah. It depends on every single person, right? Every single person's gonna have a different workflow. I think I would be careful about -- if you feel that trickle of guilt, it's okay. Like we were saying before, just take the time to yourself, it's absolutely critical that you do that.

\[01:07:58.04\] That's why I sort of struggle to come up with many other ways, because I know that those are the ways for me - spending time with my family at night, or spending time with other hobbies, like cooking, making pizza. That for me is what gets me out of the zone and makes me feel better. But I think each person needs to just kind of be aware of who they are and think about what they can do.

Some people really love getting GitHub notifications on their phone, I guess.

**Adam Stacoviak:** Maybe.

**James Long:** Maybe... If that's stressing you out, you should think about turning those off for a little bit.

**Adam Stacoviak:** Yeah. I know me, I have my best ideas not at a desk, and I don't care how many times I tell myself that, I don't care how many times I hear it from somebody else, the best ideas you can have tend to be away from a computer, an interface, a desk, whatever. I still do it, I still make that same mistake, so by no means are James and I saying, "This is so easy, you can do it." We're just here giving you permission to step away, permission to say, "It's okay to step away." Like you said in your post, it's okay to not answer an issue for a couple days; it's okay to step away and have friends.

It's more like just a reminder, rather than saying "Hey, this is how you fix your problems." It's more like reminding you that sometimes the best ideas come to you away from your desk, and sometimes the best relationships happen not in digital form, and to pursue those.

James, what else can you share with us? I know that we had said earlier that this post seemed to come from a jaded perspective, but there's lots of great insightful things you've said in this post, and a lot of this conversation is really revolving around things you'd mentioned there and some different advice we could share from that, but what else would you like to share with the audience of this show? It could be advice, it could be "Hey, I did this thing and here's how you could do it, too." What do you wanna close with?

**James Long:** There's only one thing that I can think of... Since I've mentioned pizza - you should try making pizza from scratch, because it is amazing. And I'm gonna just go ahead and pitch a book called The Pizza Book, that is written by a friend of mine, Michael Bernstein. Go to thepizzabook.com. It's an amazing book; when I read it, my pizza-making skills went up hugely. Yeah, try doing that someday, it's amazing.

**Adam Stacoviak:** What's the fella's name?

**James Long:** He's @mrb\_bk on Twitter. Michael Bernstein.

**Adam Stacoviak:** Okay, I just wanted to make sure I got the right website. It seems like it's make.pizza.

**James Long:** Oh, make.pizza, yeah.

**Adam Stacoviak:** It's an awesome domain name, by the way. I just wanted to make sure I was on the right one, because right here it says "Aaron Quint and Michael Bernstein, the co-authors of The Pizza Book, a successfully-funded Kickstarter project." That's cool, they started on Kickstarter and raised $50,000 and boom, they're gonna teach you how to make pizza. So you've been making pizza from scratch? Or at least trying?

**James Long:** \[01:10:50.00\] At least trying, yes. See, that's why this book was amazing, because I've been doing it for years, and I went from feeling like I was just trying, to feeling like I was actually doing it. Man, it's so good... The pizza is so amazing because you can put so many different kinds of toppings on it, and it's also a fun communal aspect, where you can have friends over and like "Let's make a cool pizza and put a bunch of different toppings on it."

**Adam Stacoviak:** That's great advice. I love advice closing, because it's not "Hey, go check out this repo" - which is great... But when you're here preaching moderation, you're here preaching balance, maybe the best thing isn't to say, "Hey, go check out this other repo, by the way, and dig deeper in", it's more like, "Hey, take a step back, check out this cool book and make some pizza." I like that advice, it's great advice.

**James Long:** Thank you.

**Adam Stacoviak:** Alright, James. Thank you so much for coming on this show, man. It's been a blast catching up with your story, hearing about Prettier, learning that one of your favorite hobbies is making pizza... I'm sure that your kids and your wife are totally loving this with you, so thanks again for coming on this show, I appreciate it.

**James Long:** Yeah, thanks for having me.
