**Adam Stacoviak:** John, I think the best place to begin is maybe with the initial email I sent you back in 2018... I think you were still at GitHub then, if my memory serves me correctly... And I was surprised and happy to hear that Speaker Deck was back in your possession... And I'm like "Hey, we should talk about what you've been doing." So that's kind of where I think we should begin, at least... Because Speaker Deck is one of those things you did sort of accidentally, if I understand it correctly... And a lot of people use it. You don't \[unintelligible 00:02:44.22\] but it's been sort of in your journey, in and around your story. It's what led you to GitHub... And maybe let's start there.

**John Nunemaker:** Yeah. Speaker Deck was definitely a happy accident. I literally just accidentally passed a PDF file into Image Magick... I mean, it was just like typing a command line thing wrong. And instead of an error, it just popped out an image. I was like "That's unreal. I didn't know that was possible." Of course, you probably remember SlideShare... We used SlideShare a whole bunch back then. And at that point, it was even worse. It was just like solid ads everywhere... You could hardly find the deck on the page. And we were like "Oh, let's just make this easier."

So we were like "Well, what is a slideshow? It's an array of images that you click Next and Previous through", and if we have an easy way to convert them, then that's really cool. I kind of stumbled on it, but then Steve, my business partner at the time - he's like the evil genius, and he went in and tweaked all the pixels and crazy things like that, and came out with a way to basically get a higher-quality image than my first attempt... And then Jon Hoyt, who we had been hanging out with a lot at the time, was like "Hey, I wanna get into programming. Let me work on this. You guys are busy, you're doing other stuff... I have some free time on the side. I'd like to get started on this."

\[00:04:12.03\] So that was kind of how it started out originally. Then from there, it was like, okay, everyone we talked to -- we were going to a lot of conferences, we were hustling, selling our wares, trying to get people to use our other apps... And everyone that we talked to was like "Can I use it? Can I use it?" This was -- I don't know what it was; a decade ago. Back then, it's like, beta accounts, and -- we were talking at pre-show about South by Southwest, and stuff, and I remember when we went to South by Southwest we actually for one of our apps had business cards with a blank spot, like an invite code, and then we would use our phone to generate an invite code right in front of someone and write it down with a marker as like this extra personal touch, instead of just this auto-generated printed thing.

**Adam Stacoviak:** That's cool, yeah.

**John Nunemaker:** So that was back in the day; it was like, how do you get beta people and keep them excited, keep it all hush-hush? It's kind of coming back around now, but for a long time then that was not popular. But that's how it started. Everyone just kept asking to use it... And then we were kind of big into MongoDB at the time, and we were relatively close with them, and did a lot of conferences with them where we spoke... And they were like "Hey, we just wanna use it for all the slides, at all of our conferences." And we were like "Oh, if we're gonna do that, we probably should launch." So we were like "Alright." We launched it, right before RubyConf, and headed down, all of us, in a van... We were big on road tripping.

We went to multiple Rails confs in a sprinter, two or three of them, with 10-15 people in it... This was just the four of us at the time. Maybe five. No, it was five of us, I think. We went down to RubyConf, and that's kind of where I went. It was starting with that.

I remember the first time after that RubyConf, Matz, the creator of Ruby, uploaded his deck on Speaker Deck, and we were like--

**Adam Stacoviak:** You were like "Yes...!!"

**John Nunemaker:** "Yes...!"

**Adam Stacoviak:** Mind blown...

**John Nunemaker:** Yeah.

**Adam Stacoviak:** Because you're a Rubyist at heart, right?

**John Nunemaker:** Yes.

**Adam Stacoviak:** You come from the world of Ruby, and so obviously Matz being the creator of Ruby is a big deal to you, because it's like "Well, this person who I probably idolize in many ways, godfather of Ruby essentially, is using the application I've built with Ruby..." Happy accident.

**John Nunemaker:** Yup, totally happy accident.

**Adam Stacoviak:** That's cool.

**John Nunemaker:** Totally built on the side, for fun... And then just kept picking up.

**Adam Stacoviak:** What do you think your life would be like if you didn't do that happy accident, that accidental command line mistake that turned into application? Have you ever thought about that?

**John Nunemaker:** I haven't before... I mean, I'd like to think that the other stuff we've built factored into where I've gotten today, but I think the one cool thing about Speaker Deck is, you know, every app has a level of friction to starting to use it... And our first app, Harmony, was a CMS; and that's a lot of friction, because you have to create it.

**Adam Stacoviak:** We used Harmony early on. We tested it for the Changelog.

**John Nunemaker:** Did you?

**Adam Stacoviak:** We did. Way back, when Wynn was part of the team.

**John Nunemaker:** Oh, that's awesome.

**Adam Stacoviak:** It was forever ago.

**John Nunemaker:** Yeah. It was ahead of its time back then, but now it probably feels a little rusty.

**Adam Stacoviak:** It was a rough architecture. It was a CMS. It was like WordPress, it was hosted. Was it like maybe Squarespace, to some degree... I know you can do your own templates, I think it had liquid templates, if I can recall correctly...

**John Nunemaker:** Yeah. It was set in the middle, between Wix, and Squarespace, where like anyone can go and just build their website and they don't need any help from a developer. And WordPress to some extent is also that way, but generally you end up with a lot of customizations, and stuff.

Then there's the other side where it's like you're building a custom app from scratch, and that's the MS... We were kind of in the middle. Our expectation was that a developer would build your site... You know, like "This template requires this data", and the pages would then be built based on whatever template you pick. So if you picked a template that was like a blog post template, it would change the form data that would be filled out. So you'd have a title description, tags etc. Whereas another piece of content would be something different.

\[00:08:06.13\] So it was kind of that in-between. It was - okay, what we wanna do is have a developer who's building a site have full control over all the little pieces of data that they wanna collect... And then have a content person who's actually fleshing out the whole site. Their only job is just to put the content in it. They don't think about how things look, how things work, any of that kind of stuff. So it was in that middle spot where Harmony kind of sat.

**Adam Stacoviak:** And how did that work out?

**John Nunemaker:** It worked out good. When we were acquired by GitHub I think we were maybe -- it was probably like in the five thousand a month range... Which - again, that was a decade. I have to believe if we had kept iterating on it, that it would fully support all of us at this point. And it probably would have for many years. It was growing well and it has zero churn. I think it had been out for maybe two years at that point. We had had two customers churn, and one, the business closed, and the other one was a friend who was paying us just because they thought it was cool... And at some point he was like "I probably should stop paying for this. I'm not using it."

**Adam Stacoviak:** Right.

**John Nunemaker:** And we were like "That's fine. You don't need to apologize." So yeah, we had literally no churn. So that's the upside when you have a lot of friction to get in... Usually, there's a lot of friction to get out as well. So churn is low, but getting people in is low. Our is also. So the next one is like you have a website and you wanna build analytics, because you wanna know what's going on. Google Analytics - same thing; it was a mess, it was chaos... How do you figure out -- like, I just wanna see who viewed what pages, and maybe a few other little details.

**Adam Stacoviak:** Yeah.

**John Nunemaker:** And that was super low-friction, because you can just slap a JavaScript in a CMS or a Rails app or anything really easily and start getting data flowing into the system... And just as easily you can take it out. So a lot higher churn, but a lot higher in people signing up, and stuff like that.

So then Speaker Deck, obviously, I feel like it -- going back all the way to the original question of what would have happened if we hadn't done it, the cool thing about it is way more people got to use our software and get a feel for how we build stuff... Because it was free, anyone could use it... We literally just built it because we thought this would be cool, and we knew we could support it. And if it grew big enough, we could figure out how to make money on it.

I think it was important, just from the standpoint of getting something out there that more people could use to kind of see what we're about from a building standpoint... But if it hadn't existed, I'd like to think that the other two pieces were still good enough or interesting enough that maybe things would have turned out the same.

**Adam Stacoviak:** To be clear, I wasn't trying to say that that was your best swing, so to speak, to come to some baseball terms, or sports terms... It seems like Speaker Threat -- Speaker Threat... That would be a cool name, too. Speaker Deck has been this thread in your story... And you mention in this blog post how in 2010 you met Chris Wanstrath, who was the CEO of GitHub... And this is early days GitHub, too. This is like two years into their story... And how that led to an opportunity there... Because we do things, and we go to conferences, and we meet certain people in our lives, and they play this pivotal role. And maybe it was because it was a decade ago, and you've been in your career for a while, and that's how it works... Eventually, you build a network and you meet people and they do things for you, or they help you, or they care about you, or they include you, or they invite you.

For me, I've got similar stories in my belt, where I've met specific people at conferences that 1) I wasn't even planning to go to. It was FOWA 2008, I think... Future of Web Apps 2008.

**John Nunemaker:** Yeah. Wow.

**Adam Stacoviak:** Forever ago. And I met Allan Branch and Steven Bristol, and we had the most wildest fun time.

**John Nunemaker:** Yeah.

**Adam Stacoviak:** I'll never forget meeting them. It was the coolest. We literally had the best time ever. I still remember all the stories... The point is that you meet certain people because of certain things you do, and it's like, have you ever considered if you didn't do those few things that were pivotal to your story or to your arc? Have you considered "Well, if I didn't do Speaker Deck I would have met Chris, wouldn't have worked at GitHub, wouldn't have had to do the acquisition, buyback", and all these things. I just wonder if you've ever considered how we do certain things in our lives and they play a key role...

**John Nunemaker:** \[00:12:18.27\] Yeah. There's definitely stuff that -- well, with Chris, the one thing with him was like I had met him before. We had met at several conferences before, so this was kind of just like us catching up from like "Oh, I haven't seen you in four months, or six months. What's going on?"

**Adam Stacoviak:** Right, okay.

**John Nunemaker:** At RubyConf in Charlotte, I think, or somewhere on the East Coast was one of the first ones, and then of course, the Portland Rails confs, and stuff like that. But it's very true - you just have these random... You know, by putting yourself out there, going to conferences... And I think I said it in the post, it's all about meeting people; it's about meeting people, making friends, stuff like that. That makes a huge difference.

When you said that about meeting Allen and Steven, I remember - I had a random one I wasn't gonna go to, a Rails conf in Vegas. I was gonna skip it that year, I didn't have any intentions of going... And then one of the organizers reached out and they were like "Hey, are you coming?" and I was like "No, I'm not coming this year." They were like "We kind of need you to come this year." And I was like "Okay..."

Well, it turned out -- I think they had just started doing Ruby Hero Awards, and that year I was gonna get one, so they kind of wanted the people who were getting one to show up.

**Adam Stacoviak:** To be there, yeah.

**John Nunemaker:** Yeah. So I showed up, and then randomly, they had like a poker night, we played poker, hit it off with Des and Eoghan from Intercom... And spent late into the morning -- and Brandon, this crazy Australian guy that we dubbed Crazy Steve, who was -- and we just had this totally random, weird night, where we made friends with them, and met up with them whenever they were in Chicago, and stuff like that... So yeah, it's definitely one of those things where if you put yourself out there and you try and do your best, put your work out there, and then also go to the conferences, go to places where you can meet people, and as long as you keep putting stuff out there, then people will be able to kind of keep up with you, and those relationships definitely - you know, they make a difference down the road.

**Adam Stacoviak:** Yeah, I think that's interesting... I mean, the point really is, to anybody listening - you know, as much as somebody can preach networking, even if you're not a networker, it really is just more about relationships. And it's specific people in my life... I got some of the best advice, and I would say in many ways that advice from Steven has led me to the path I'm on now. It wasn't the only piece of advice, but it was pivotal, in that he was like "Listen, if you can't trust this person, if you can't do--" I forget what the exact advice was, but it was exactly what I needed then. I thought I was attached to somebody else \[unintelligible 00:14:44.19\] and maybe you know this too, because -- and maybe not; you've always worked with Steve... You've always be a sidekick -- or not so much a sidekick, but you've been together; so you've been sidekicks together.

**John Nunemaker:** Yeah.

**Adam Stacoviak:** And it's like, "Well, am I valuable without Steve? Am I valuable without this other person?" You begin to -- not so much doubt yourself, but like attach yourself to someone else because they're comfortable. It's normal. It's normal for you, and we all gravitate towards comfort and ease and normality, just because.

And long story short, Steve gave me some great advice, and I really appreciated it. And Steve is no longer with us...

**John Nunemaker:** Yeah. Sad.

**Adam Stacoviak:** I don't know how much you knew him, but he was a good dude.

**John Nunemaker:** Yeah. I went on a \[unintelligible 00:15:26.22\] with them, which was one of the best - I'm air-quoting; you can't see it, but I'm air-quoting "conferences".

**Adam Stacoviak:** It wasn't a conference.

**John Nunemaker:** It wouldn't strike you as a conference, but we did happen to --

**Adam Stacoviak:** I wanted to go to that so bad. We would have hung out, man. I wanted to be there so bad... It just didn't work out that year.

**John Nunemaker:** It was amazing, yeah. We had a great time, sun, fun, all that kind of stuff... And then there was like a few talks here and there where we just like got in a room and people presented on various things, and stuff like that. But I just remember specifically about him. He peppered me... Because I was all about Mongo back then, so he peppered me with Mongo questions.

**Adam Stacoviak:** \[00:16:00.16\] Yeah. Well, you know, that's how it works out. What I find interesting, I think, with Speaker Deck, is how it led you to GitHub. So maybe give us a quick snapshot of that meeting with Chris, and some of the particulars there...

**John Nunemaker:** Sure.

**Adam Stacoviak:** ...to sort of get us to where -- and even some of the emotion; because you didn't really share it in your blog post, but some of the emotion behind the scenes of like "Do we wanna be acquired?" Orderedlist was a thing; you haven't mentioned that name yet, but Orderedlist...

**John Nunemaker:** Yeah.

**Adam Stacoviak:** I remember one of the -- I learned actually the phrase "form and function" from your tagline, essentially.

**John Nunemaker:** \[laughs\]

**Adam Stacoviak:** Because you were function, Steve was form...

**John Nunemaker:** Yup.

**Adam Stacoviak:** And you were very much yin and yang in that regard. But share some of the emotions behind meeting Chris, the email, and some of the other things that have happened to transpire into an acquisition.

**John Nunemaker:** Yeah. I mean, at that point GitHub was like 44 people, and they were amazing. Steve and I had Orederedlist, and we were doing fine; we felt like we were gonna continue consulting and having apps, and eventually we'd have just our apps and not do any consulting. So we kind of had that in mind... And then we just went to RubyConf, because we were like "Alright, let's just all load up and go to RubyConf. Why not?" And I think only a couple of us even went to the conference. Several just like tagged along, and just hung out and had fun.

But I remember it was in a hotel, and you meet in the hallway track; that's what people call it, and that's where you hang out with people... And I'd seen Chris, and we hadn't caught up in a while; so we chatted... I mean, it was totally nondescript. Both of us -- we were like "Oh, I love what you're doing at GitHub", or "I love what you're doing at Orderedlist..." We were just "Oh, how do you do this?" or "How do you do that?" It wasn't anything specific, it was pretty -- probably a boring... I mean, it was a fun conversation, we had a good time, but I wouldn't have dubbed it as fateful after leaving it.

**Adam Stacoviak:** Hah!

**John Nunemaker:** And then we got in the van, drove back home... And again, hadn't thought anything of it. I was just like "Oh, I got to catch up with my friend again." And then just out of nowhere -- I mean, it was maybe a week later, I got an email and he was just like super-short, and was just like "Hey, I love what you guys are doing. It was really good catching up. What if I invested?" He threw out an amount... I don't remember, it was like a typical angel invest amount; 10k-15k or something... And he was like "What if I invest?" And that was pretty much it.

I remember -- I got the email, I saw it, and it was probably like a Saturday, I was probably sitting in my sweatpants, just watching a TV show... And I just remember being super-fired up. Because GitHub was awesome. They were, like, everything back then. It was like "This is the coolest company..."

**Adam Stacoviak:** This was 2010.

**John Nunemaker:** Yeah.

**Adam Stacoviak:** What time in 2010? Was it early or late 2010?

**John Nunemaker:** Actually, this would have been 2011. It would have been November 2011, around then.

**Adam Stacoviak:** Okay.

**John Nunemaker:** But yeah, there were no managers, no anything, flat structure... At that point they had moved out of the first tiny office and into HQ 2.0, which is like the next one, which was the first one that was kind of like lavish...

**Adam Stacoviak:** It had the oval office, right?

**John Nunemaker:** Yeah.

**Adam Stacoviak:** Was it called the oval office, or was it octo office?

**John Nunemaker:** That one I think was HQ 3, was the oval office, where they had -- yeah, that was after funding. This HQ 2 was pre-funding, so it was not that lavish. But they had the situation room, and they had this other room, they had like fancy leather chairs, and old globes... I just remember -- it was cool. There was games, there was lots of work areas and lots of cool stuff was happening.

So that was huge. I remember texting Steve right away... I was just like -- I didn't even know how to respond, because I'm like... Steve and I didn't need money. We were doing fine; we weren't crushing it or anything, but we were doing fine... So we were like--

**Adam Stacoviak:** What do we do here?

**John Nunemaker:** Yeah, how do we respond? Because GitHub was obviously going to be successful, and so we were like, attaching yourself in some manner to somebody who is successful is a good thing to do, generally. It doesn't usually -- if somebody is on a rocket ship going up, and you grab on, that's a good thing. So we were like, "Well, that seems good, to have him." He would have connections, he would have ideas, we like him as a person... So that was really exciting, but I didn't respond, because I was just like "I don't know, we'll just think about it."

\[00:20:13.15\] So then the very next day he was like "Sorry, I just got excited. Let me tell you why you should do this." And then he went on this big sales pitch of like himself, which was hilarious, because we didn't need a sales pitch from him. It was like -- I literally just hadn't responded because I was so shocked and happy and excited that I didn't know how to respond... So he did this long pitch and we were like "Let's just meet up." He flew into South Bend... You know, not a huge town, but good size; 100k-150k people. So we hung out the one night, talked a bunch, had a good time...

Earlier in the day it had transitioned -- like, we had this tiny little office that was like this three-story building, and it's like a huge brick, square, totally boring... A bunch of healthcare, and boring things in it... And there was this tiny little tower on it, with two floors, four and five, and that was our office. We had bright colors in it... It was fun. So we were in there, and I remember it was always really hot, because the air conditioner never worked... So we were warm, and talking about what could happen... And Chris kept talking about investing, and then he changed to like merging... And we were like "Well, it wouldn't be a merger. You guys are huge, and we're small." And he's like "Yeah. It would be an acquisition. Well, what if we just acquired you?" And we were like "Oh, wow."

Then I remember we went off to dinner, and picked the nicest restaurant in South Bend at the time, and had a blast... The next morning - I think I wrote it in the post, we got... It stuck with me, because baked oatmeal was like my favorite food. Have you ever had it?

**Adam Stacoviak:** Oh, yeah. \[unintelligible 00:21:41.29\] recipes, as a matter of fact.

**John Nunemaker:** I mean, I don't have a recipe. I went to the restaurant for it.

**Adam Stacoviak:** Okay, okay...

**John Nunemaker:** But it was so good. It was this, like, conservative -- not Amish, but real conservative family, and they had this restaurant... It's not in South Bend anymore, so rest in peace, but it was the best baked oatmeal. And our office eventually moved to the same building as that, and I got baked oatmeal like way too many mornings in a row.

But yeah, so we had baked oatmeal. He had never had it before, and I was like, "You just need to trust me. Just get the baked oatmeal." That probably is what sealed everything.

**Adam Stacoviak:** Really? Make somebody happy in their stomach... I can appreciate that.

**John Nunemaker:** Yea... So he enjoyed the baked oatmeal, and I enjoyed the baked oatmeal. Steve was lame, he didn't get baked oatmeal. It's never been a big thing for him.

**Adam Stacoviak:** Yeah, you have to.

**John Nunemaker:** But it was fantastic.

**Adam Stacoviak:** Did it have walnuts in it, and raisins? Give me some of the highlights of their oatmeal. Was it just oatmeal, did it have apples in it?

**John Nunemaker:** I think this was a blueberry...

**Adam Stacoviak:** Okay...

**John Nunemaker:** It was different. Sometimes it would be apples, sometimes -- I think blueberry was the most consistent, and then plain, or like cinnamon, and stuff like that...

**Adam Stacoviak:** Yeah.

**John Nunemaker:** But they would have -- you know, randomly they'd just be like "Oh, we've got this fruit. Let's just throw this in it instead."

**Adam Stacoviak:** Sure. Like any kitchen.

**John Nunemaker:** Yeah. A big, old square, a baked oatmeal, and brown sugar, and you smother it in milk... It's basically just like baked oatmeal cereal. That should probably be a podcast alone.

**Adam Stacoviak:** Yeah, that should be a podcast. I wanna share my recipe, but this not the podcast for it, because... Actually, I haven't made my oatmeal in (I wanna say) about a year, for just who the heck knows why.

**John Nunemaker:** Yeah.

**Adam Stacoviak:** Covid, the pandemic... Who knows why.

**John Nunemaker:** Tomorrow.

**Adam Stacoviak:** I just haven't made it in a while. But every time I do make it, it's like "This is the best." Anyways...

**John Nunemaker:** Yeah. So he flew back to San Francisco, we thought it went really well... I think he was like "Here's the kind of jobs we would give you", but we didn't really discuss details of the acquisition... Just like, "If you start, here's where you would start salary-wise", or benefits, listed some of that stuff... But there wasn't any talk of actual numbers, and stuff. And he hadn't talked with anybody else...

**Adam Stacoviak:** Like an actual acquisition number? That wasn't concrete?

**John Nunemaker:** That was not concrete. We had just talked, and--

**Adam Stacoviak:** Was there a range discussed?

**John Nunemaker:** No, we hadn't even discussed the range.

**Adam Stacoviak:** How did you trust? How did you trust this system?

**John Nunemaker:** Well, at this point it was just like -- he hadn't even talked to the other founders, so he was like "I wanna do this, but I haven't talked to them..."

**Adam Stacoviak:** \[unintelligible 00:24:06.19\]

**John Nunemaker:** \[00:24:09.05\] Yeah. So like "We need to talk to them, and figure out from there what to do." So we were like "That's cool." And it was mostly just like "Should we do this or not?" And we hadn't said yes, and he hadn't said yes. It was kind of just like feeling it out. Neither of us had been involved in an acquisition of any sort. If you picture somebody in the dark, walking around, stubbing their toe and running into things - that's literally what was happening. A bunch of rookies.

And then we went out to San Francisco, Steve and I did, and I remember we met in the situation room, the founders and us, and then Kyle, and \[unintelligible 00:24:41.27\] and some of those guys were there, too... And they showed us a bunch of stuff they were doing, behind the scenes stuff. That was kind of cool. Atom, they showed Atom... It was just (I think) a dream in Chris' head at that point, but he had kind of got it working, and stuff...

So we were kind of excited about it. Then we talked some more concrete numbers and stuff like that, and they sent us back home... And at that point, again, we still hadn't said yes, so we were super-excited. Because again, going back to -- GitHub was everything. GitHub was the coolest company that we could imagine ever working for, and the only company we would leave Orderedlist to join. And so we were like, "Okay, that's awesome", but from the standpoint of "Should we do this or not?" it wasn't a wow offer, or anything.

We were gonna get great jobs, great benefits, and some options, and stuff like that, some cash upfront, but it wasn't like a wow, or anything like. So we were like, "I don't know..."

I think -- actually, if I remember right, and I could be conflating this, I was on the fence, and everybody else was like "Where do we sign?" Because everyone's like "I mean, it's GitHub." And especially the guys that worked for us, they were very fired up about it, because -- I mean, overnight they were gonna get much larger salaries. Because we were paying more like South Bend/Midwest ranges at that point.

So I remember going back and forth on it quite a bit... And then talking with my dad, and hilariously enough, I remember him saying -- we were talking about the emotions, and like... I was thinking at this point like, okay, there's five of us in the company, four of us are like "Yes, we should do this", one of us is like "I don't know. I think it can be good either way..." and how do you choose between two good options? It's pretty easy when you have one bad option and one good option. But when you have two good options or two bad options, then the decision's a little bit more difficult. And I'm like "Well, we're doing good as we are, so maybe we should keep doing that." And it's like "Well, would you rather own basically everything in something that's small, or a fractional percentage in something that's large?" And at that point you couldn't tell how big it was going to be, or any of that kind of stuff.

I remember talking with my dad, and he was like "You don't get anywhere being an employee." He was like "You wanna be an owner." And I'm like, "Okay. Yeah, that's a good point." And I was like, "Well, I respect what you're saying, but I have a pretty good feeling about GitHub."

**Adam Stacoviak:** I think GitHub's a good exception to the rule, honestly.

**John Nunemaker:** It turned out to be that way. I was very fortunate that it turned out to be that way. It's hard to predict, but it just seemed pretty obvious and inevitable that it was going to become a really big thing.

Then I remember it was the morning of my birthday... I had kind of mentally decided the week before that I was -- everybody else was yes and I was the only one holding it up, so I was like... That's how I remember it, again; memories are tricky, so I could be misremembering it... And if any of the OL guys are listening and they correct me, that's fine. But I remember telling my dad I was gonna do it, and he was like, "You know, you should at least negotiate once. You can't just accept what they're saying."

**Adam Stacoviak:** That's right, yeah. Never accept the first offer.

**John Nunemaker:** I'm like, "Oh, that's a good point."

**Adam Stacoviak:** Know your value and push back a little bit.

**John Nunemaker:** \[00:27:51.23\] It's funny, that's such a basic thing, but if you've never done before, you think "If I negotiate, then it might go away." But that's not what happens, usually. If you negotiate, they either say no, or they compromise in some fashion; they being the other side. So I've definitely learned that now; whatever comes to you first, always negotiate for better... Because why not? In anything. Especially in job interviews, things like that, you should always do the same thing. Always ask for 10% more, 20% more, or some other random benefits, and stuff. So yeah, it was one of those things, I'm like "Okay. Well, I'll try that." They had offered some amount of cash, and that we would all get option packages; so not equity, but options, and stuff like that. So we were like "Okay, cool." So what I thought was like "Well, we're all about the long-term. We're not about the short-term. Cash was short-term. Options were long-term. Let's go for that."

I think in the article I said I asked for twice the options, but I looked back and I've found the email... We asked for almost four times the options. Which was kind of funny.

**Adam Stacoviak:** Baller.

**John Nunemaker:** Yeah. Again, what's the worst thing that could happen? They could say no. Not a big deal.

**Adam Stacoviak:** And he's already expressed his deep interest in -- I mean, \[unintelligible 00:29:06.10\] It's not like you were on the phone, and he could hang up.

**John Nunemaker:** Yeah. That was a whole experience, too. They flew us out -- and GitHub, again, at this point they were making really good money; they were not as lavish as post-funding, but we went out for steak dinner, and all that kind of stuff as well. So it was definitely a good time.

But yeah, so we asked for like 3.5 times the options, and we were like "Cash is fine. We don't even really care about that. We care about the long-term and being more vested in the future of the company." I think that's probably the common thread that's worth pointing out. Steve and I have always been long-term focused, long-term value, even in our current company. We were like "Let's cap the short-term at where it is, and let's focus on using anything over the cap towards long-term value." That's definitely paid off. It's possible for that to not work, because long-term value cannot be realized... But it happened to work out okay in this situation.

But yeah, so that was kind of -- we asked for that, and Chris was like, "You know, we talked about it. We're not comfortable with increasing the options. We feel like it's a relatively fair amount. We think GitHub is gonna be huge. But we can do more with the cash." They ended up doubling the cash, so they did half upfront, and then half a year later... Which I guess now I've learned is a common acquisition thing; there's always a retained amount to cover potential --

**Adam Stacoviak:** \[unintelligible 00:30:27.21\] hedge bets...

**John Nunemaker:** Yeah. Lawsuits, all kinds of things like that. Anything that could possibly go wrong. Same thing happened with Microsoft later. It was like 4% or 5% that just got held back. So...

**Adam Stacoviak:** These options - were they taking away from Chris, Tom, PJ, the founders, those with equity in the company? Was it taking away from their positions, to your knowledge?

**John Nunemaker:** I can't say for sure. I don't think so. I think at some point they created a pool for employees when they came in. At that time, when you started at GitHub, you got X options, just by default. So all of the people who working with us basically came in with those default options, and then Steve and I, because we were the owners of the company and it would take more to entice us, then we got more than the default standard package. But yeah, as far as I know, they had a pool at that point, and I don't think it was coming out of any of their pockets.

**Break**: \[00:31:23.25\]

**Adam Stacoviak:** With Orderedlist you had certain upsides, obviously; you had your own control, as you mentioned, keeping it, owning 100% of something smaller, or owning a little bit of something bigger, and the ride along the way... What do you think about -- because it seems like it was a Speaker Deck acquisition, but I guess it was Orderedlist too, because you had some employees...

**John Nunemaker:** Yes.

**Adam Stacoviak:** Recalling back now, what do you think it was they were really wanting to buy? Was it an acquihire? Because not much was done with Speaker Deck once it became part of GitHub, and it wasn't really part of social coding, which is what GitHub founded upon. It seemed connected partly, but not fully. I guess it'd be different if you powered the Speaker Decks by repository and you just sort of consumed the API, which was probably still in its infancy back then, 2011...

**John Nunemaker:** Yeah.

**Adam Stacoviak:** Octokit was a thing back then? I think... I think it might have been -- gosh, I forget what it was called back then. Not Octokit, it was something else.

**John Nunemaker:** Yeah, I know what you're talking about, but I can't remember either.

**Adam Stacoviak:** I think \[unintelligible 00:34:05.19\] actually had a part in it, too.

**John Nunemaker:** He definitely did.

**Adam Stacoviak:** A 007 thing going on... I don't remember, but it was something. It was probably not safe for work, but... Yeah. What do you think? What do you think they were wanting to buy?

**John Nunemaker:** So I think it was basically an acquihire. I remember Chris saying several times that he wanted a strikeforce. He wanted a group of people -- like, obviously we had proven we worked together really well, because we had made three products in two years...

**Adam Stacoviak:** Successfully.

**John Nunemaker:** Yeah, they seemed to be doing well, and stuff like that.

**Adam Stacoviak:** With customers, sustainable, employees...

**John Nunemaker:** Yup. So they were like "Okay, we just want a team that works together that we can just throw at problems." So it was definitely an acquihire, but it wasn't an acquihire from the standpoint of -- like, they couldn't just acquihire us and just like "Okay, you stop what you're doing and switch over and do this." So from that standpoint, because we had created recurring revenue and other things, there had to be more than just the standard "Well, here are our jobs", and a little bit of signing bonus, or whatever, which would be like a typical acquihire.

I think that's another smart thing to do - build something that makes it more difficult to acquire you; that makes it so that the offer has to be better. But yeah, so for us I know that he definitely wanted a unit.

Hilariously, as soon as we started, we all five went in different directions and worked on completely different things. No two of us worked together in almost our entire time at GitHub.

**Adam Stacoviak:** You were there how long?

**John Nunemaker:** I was there seven years. I think Hoyt is still there, so he's now under Microsoft. I think it was somewhere in between 2-3 years, and Hoyt who's still there, for all of us. So it was Matt, Steve, and then myself, and then Brandon was like maybe a month after me, and then Hoyt's still there.

**Adam Stacoviak:** That's right, Brandon Keepers was part of the team. I'm trying to recall all the people of Orderedlist. This is so back in the day too, because I've paid attention, but I wasn't like a fanboy, or anything. So I knew who was involved, but I can't recall the names. So yeah, okay... Interesting...

**John Nunemaker:** Yeah, Matt Graham, Steve Smith, Brandon Keepers, Jon Hoyt, and then myself. All Midwest.

**Adam Stacoviak:** \[00:36:07.02\] Brandon Keepers was head of open source for a bit there, too.

**John Nunemaker:** He was, yeah. He did that for a while. He worked on a bunch of different stuff, so... And actually, he's probably gonna be joining us on Flipper pretty soon. He's been doing a bunch of work with us, and he kind of got excited about it, and I think we'll have some of the band back together again on that, so...

**Adam Stacoviak:** I think what's interesting too, I suppose, is that GitHub was built on Ruby on Rails. You were a Rubyist... And that's probably a big part of it; they were acquiring a lot of people at that timeframe... Yeah, what a wild ride, man. That's so crazy.

**John Nunemaker:** It definitely was.

**Adam Stacoviak:** Did you think, as part of it -- I mean, we all can see the inertia; at that time, even our tagline here at Changelog was "Open source moves fast. Keep up." Thanks to Wynn. Wynn came up with that one. And it was sort of a snarky ending; so if you know Wynn, and you know his humor... Wynn Netherland, by the way...

**John Nunemaker:** Yeah.

**Adam Stacoviak:** Just for the audience's sake; I know you know who he is, John...

**John Nunemaker:** \[laughs\]

**Adam Stacoviak:** But "Keep up." It was moving so fast, we knew open source was very much this center of gravity for what was happening... I describe it as a black hole, except for it seems negative, but more so in the fact that it's a positive, that it's got so much gravity; GitHub and open source. Open source was winning, people were moving towards it... Obviously, as a podcast - not this one in particular, but our primary brand, Changelog Media, was built around what is open source today. The Changelog began around that...

Did you know, really -- I mean, you were involved in open source, you were very successful with open source... Did you take all that into stock? Like, "If I don't get on this GitHub train, I may regret it." Was that part of -- I know you mentioned your dad in that conversation; did you have those inner thoughts, like "This is one of those moves one day, ten years from now, if I don't --" and we're more than ten years from then...

**John Nunemaker:** Yeah.

**Adam Stacoviak:** "If I don't take this move, if I don't do this, I might regret it."

**John Nunemaker:** I can't say that I thought I would regret it. I think I genuinely thought either way would be good. I didn't think either way, like going with GitHub or staying on our own path and just continuing to bootstrap - I didn't think either way would be bad... I felt pretty optimistic that either way would be good. I wasn't concerned about regretting it, I think. I think my only worries for regrets were probably losing control. I would say I'm the kind of person that would much rather have control over what I'm doing... So GitHub was like "Well, you have autonomy. You could do whatever you wanted." So I think as that autonomy went away, which - there's no way to foresee that when you start at a company. There's no way to foresee "Will you be involved in strategy, or will you be able to choose what you work on, or who you work with?", or stuff like that. That kind of thing -- it makes sense looking back that that's going to constrict and that's going to change; as the company gets bigger, it has to, pretty much.

I think that was my biggest worry, or if I were to think about regrets, it would be thinking about that. I remember back when we were trying to decide, I was like "Well--", that was one of the biggest things that Steve and I kind of push for, that wasn't financial in any way. We wanted to be involved in strategy. We didn't wanna just join and just work and not have any control, and not have any chance for impact. Control seems bad, impact seems good, but you know what I mean.

**Adam Stacoviak:** Yeah. I like that word better. I know what you're saying, but I think it's important to make that distinction... Because you were already making an impact, in my opinion. You've got a great product, Speaker Deck, the business you were running was very influential in terms of the open source you were producing, the design style that Steve had, and you had a very specific focus on the function, not just simply the form... And I think in many ways you had a strong brand for Orderedlist, in my opinion. So you wanna make sure that you can have impact, especially if you're an entrepreneur and you've got your own thing, you wanna give that up to have impact, not just simply show up and be an individual contributor with no real autonomy to where the thing is going, especially at that time of GitHub; it was still being shaped. It had a lot of inertia, but in many ways it was still being shaped. Every day there was a new feature of something, there was a new direction you can go... And you got to be a part of what that could be.

**John Nunemaker:** \[00:40:21.26\] Yeah. And I think it was amazing to look back and see how that kind of came about and how that went. Going back to the original - from the standpoint of my concern about regrets, I don't think I really had any concerns other than the impact. That was the only thing I was worried about. I was like "Will I be able to have an impact?" Because like you're saying, it was growing and changing so fast, it was like "How is that gonna be--" It was obviously going to be big, and so how am I going to have an impact on that... And I think to some extent, looking back, I didn't really have a huge impact. I spent a lot of time in the deep, dark corners, and things like that. I didn't ship anything public -- the most public thing was probably the traffic graphs, and some of that stuff... Which still exists today, and that's cool, but most of my stuff was behind the scenes. It was stuff that you didn't know if I did it, you only knew if I messed up. So if I messed up, then you would know about it. That was definitely neat and fun. Looking back, that was my concern, was impact, and that's probably -- if I were to go back and do it again, I think that's the thing I would change. I would probably go in and try and do more of the shaping and the public stuff. But you can't, and that's okay. It went fine.

**Adam Stacoviak:** Are you still in touch with Chris today?

**John Nunemaker:** Really, what's funny is I hadn't really even thought about it, because Covid's been the last year, or whatever, so I feel like not seeing people or not being in touch is definitely like...

**Adam Stacoviak:** Normal?

**John Nunemaker:** Yeah, it's normal. So I've actually the last 3-4 months been pretty proactive about reaching out to people again, former co-workers and stuff like that... Even if it's just like emoji on an Instagram post, just talking to people again, and stuff like that. But Chris was like -- I don't wanna say what he was thinking, or any of that kind of stuff, but it's not easy to run a company that grows like that. It puts you in pretty much like rock and a hard place all the time, especially when you spend the first four years hiring all your friends... And then the company grows and needs different things, and inevitably some of those friends are gonna part and it's not gonna go as well.

**Adam Stacoviak:** Yeah.

**John Nunemaker:** I feel like you become a CEO, or you are a CEO of a company that's that large and that public, and has things that go wrong, and they're public things that go wrong, and you just naturally step back publicly. I mean, we would say hi at summits and stuff like that when we got together, but I wouldn't say -- you know, once both of us stopped going to conferences, we didn't really talk a whole lot.

I remember I emailed him after -- probably the last time we had anything to say was after Microsoft bought GitHub, I emailed him and just thanked him, because I was like "I have no idea what you're feeling or thinking... But I appreciate it. This turned out great, and I just wanted to say thanks." I think I sent it to -- do you remember \[unintelligible 00:43:12.19\]

**Adam Stacoviak:** Mm-hm.

**John Nunemaker:** Yeah. I think I sent it to that email address, because that was the only one in my address book, and I'm like "I don't even know if GitHub addresses--" I mean, I assume they're still working, but I didn't know if he was checking it, because now he was like a fellow at Microsoft, or whatever...

**Adam Stacoviak:** Remind me what the name of that was... What was the name of the original company? That was his personal \[00:43:30.07\]

**John Nunemaker:** \[unintelligible 00:43:31.06\]

**Adam Stacoviak:** \[unintelligible 00:43:36.11\]

**John Nunemaker:** Oh, no, that was Tom. I think it was \[unintelligible 00:43:39.14\]

**Adam Stacoviak:** Yeah. I was trying to think of--

**John Nunemaker:** Yeah. I think that was what GitHub started under for a while, until they went legit with all the C-corp and all that stuff...

**Adam Stacoviak:** Right. Interesting. Well, at least you emailed him and said thanks, right?

**John Nunemaker:** Yeah. He ended up replying; he just didn't check that email hardly at all, so three months later he goes like "Dude, sorry, I totally don't check this email, ever..." But yeah, so that was probably the last time.

**Adam Stacoviak:** \[00:44:10.16\] Did he just say "You're welcome" and that was it, or was it just like --

**John Nunemaker:** Oh, it was typical Chris. He was just really--

**Adam Stacoviak:** "What about that oatmeal?", you know... "Can we meet up in South Bend?"

**John Nunemaker:** That's a good question, yeah... I don't know if we talked about that one. I honestly don't remember, because I didn't even look that one up. When I wrote the Speaker Deck post, I looked up some of the original emails, because I was like, "I don't remember the facts on this stuff." I've listened to enough psychiatry/psychology, all that kind of stuff to know that when you remember something, you change the memory every time you assemble it again...

**Adam Stacoviak:** Absolutely.

**John Nunemaker:** So I'm like, "I don't even know if I'm even saying accurate things here", so I went back and looked at some of them, but I didn't look back at that one, so I don't actually remember what he said. I remember it was just short and sweet, like "Hey. Oh, cool. You're totally welcome", whatever. So it was good. I need to email him again; I just have to find the right email address, I guess.

**Adam Stacoviak:** Yeah. This show isn't about Chris, but I have to say this as well, that I've always respected Chris. I know what a challenge it must have been to do what you said, to hire aggressively, if not your friends, friend of friends. So the last thing you wanna do is upset your friends, or hurt their feelings, or treat them badly, or not fully respect them or treat them, as a CEO. I don't know, are you a fan of Silicon Valley, by any chance, the TV show?

**John Nunemaker:** Yeah, yeah.

**Adam Stacoviak:** Do you remember -- I think it was episode number one. I hate that I know this show so well, but episode number one Erlich Bachman had to tell Richard Hendricks - and I can't say this word on the show... "You have to be an a\*\*hole", essentially. And the whole ending of this show was about him being not kind and sweet, that you had to do things that are this way because you're a CEO. And I don't know how much of that is cliché, and how much of that is real, but I know that at some point you get very ostracized.

**John Nunemaker:** Yup.

**Adam Stacoviak:** Or, sorry -- very isolated. Because you're the only one dealing with these particular problems. And in many cases you can't even share them.

**John Nunemaker:** Yup. Legal reasons...

**Adam Stacoviak:** In many ways, it's a lonely job. You don't wanna upset people, you don't wanna cause any distress, or too much excitement, potentially... It's a challenging position, so I have full empathy for Chris going through that. But hey, good thing that there was an acquisition from Microsoft, which - we talked to Jason Warner, CTO of GitHub now currently; I don't know how much you know of him, or if you were there when he was at GitHub...

**John Nunemaker:** I was for a little bit, yup.

**Adam Stacoviak:** He was very much the orchestrator. So if you personally don't know of that story, you should go listen to that episode, because Jason shares essentially a play-by-play of the acquisition of Microsoft at GitHub, and it's pretty awesome.

**John Nunemaker:** Yeah, I've heard some details. I just never know... When you hear things behind closed doors you're just never sure what's true and what's not... I mean, I've definitely heard lots of stories about it, and stuff, but at that point GitHub was huge. So to know anything that was going on at the C level, or VP level, or any of that kind of stuff - I had no clue.

I remember I counted up one time, towards the end of GitHub, and I was like -- I don't remember if it was 8 or 12 layers below Chris at that point... And I remember thinking how crazy that was. When we started, it was one layer, and then eight years later it was 12, or some ridiculous number like that.

**Break:** \[00:47:26.28\]

**Adam Stacoviak:** I said at the top of the show, let's go back and begin with my email. What's funny is my email to you was around me being happy for you that you were able to acquire Speaker Deck back from GitHub, and kind of give new life back into it; there's a story arc there, but that was 2018, and we've spent the better part of almost three years trying to get you on the show, essentially... Life's happened, I think you got an RV, I can't recall if a kid was in the email or not...

**John Nunemaker:** Yup...

**Adam Stacoviak:** ...but I've had a kid since then. 2019 my son was born, December 2019... So we've both been through some things, but I wanted to -- because I was a fan of Speaker Deck too, and I wanted to kind of catch up with you and just share... I know that that's not your full story; we've sort of dwelled there quite a bit, on Speaker Deck, and GitHub, and all those details...But I don't wanna close that off abruptly. Is there anything else you wanna share around that? I know you eventually acquired it back... What's worth sharing? What's some lessons learned worth sharing from this experience.

Obviously, you're a huge fan of open source, you're still involved in open source, a huge fan of what GitHub is and has become... And you have moved on since then, but Speaker Deck was acquired back... That was cool, that story.

**John Nunemaker:** Yeah, that was pretty cool. That was actually kind of like a -- I won't say accident, too... Because I was kind of maintaining it, because everybody else had kind of moved on, and so I just kept it running, and occasionally would add things to it, and stuff; honestly, in my free time. And I remember we started getting a couple support requests here and there, people wanting to buy it... They were like, "Hey, is it for sale?" And I remember asking, and everybody's like "I don't know if it's for sale. We'd have to vet the buyer." And that kept coming back. So finally, I was like, "Alright, this isn't gonna happen. It's just dying right now. So if we don't do something with it, it is gonna permanently die", and I was like -- I just like it, again, because looking back, it's the theme or the thread that ties a bunch of that story together. So I was like, "You know what - I'll vet the buyer. Are you guys okay if I vet the buyer?" And everyone was like "Yeah, that sounds fine." "Everyone" being my manager, and other people, levels up. So I was like, "Alright, I'll vet buyers."

And then as I was thinking about that over the weekend, I remember I was like, "Why don't I just buy it? I'm already maintaining it basically in my free time. I wouldn't be any different, except now I would have ROI if something good happens to it. I'd have ROI." That, again, comes back to impact. So I think on that front, that's kind of where -- so I was like, "You know what - let's try it." Again, I don't think I've thought about it until like we're talking about it now, but... Common thread - you never know it until you ask. So worst-case scenario, when you negotiate, they say no.

\[00:51:57.08\] I remember I think I offered -- I don't even remember. At that point it was losing like $1,000/month or more, just from hosting, and AWS bills, and stuff, and I was like, "Alright, I'll give you $5,000." So basically, this shows that I'm real, I'm genuinely offering for it, and I will take on the burden of $1,000/month, vetting the buyer, all the problems that could possibly arise from selling it, and any possible negative impact of closing it down, or any of that kind of stuff.

I sent that up the tree, and at some point they were like, "Yes." They dropped the price to like -- I don't know if I'm allowed to talk about any of that kind of stuff, but it was like an order of magnitude lower. They were just like --

**Adam Stacoviak:** Be vague so you don't get in trouble.

**John Nunemaker:** They were like, "Whatever. It's fine." Basically, \[unintelligible 00:52:38.02\] gave it to me. Which was kind of right, for like a negative 12k recurring revenue a year. So I was like "Alright." So I got it. Then there was all of this "When is this gonna happen? When is this gonna happen?" They said yes in August, and then it was like December, and then it was January, and it's like, "Oh, okay, we've got a document now kind of together, but we've gotta get it all approved."And finally it must have been just before June, like June 1st, or something like that; it was like a Friday, and I remember it was so weird, because they were like "Hey, we need to sign the papers today. Is that cool?" And I was like, "Today?" We went - how many months? Almost a year since they said yes, and now today it's gotta be signed. Whatever... So I was like, "Yeah, cool." I had already started a company, like maybe 3-4 months before, knowing that I would need it in order to acquire it, so I was kind of prepped... And I was like, "Alright, cool." And we signed the paperwork, and then the next day I was at the park, with my son, we were just playing, and I got a text message that was like "Hey, did you see the rumor?" I'm like, "What rumor?" "Oh, Microsoft is buying GitHub." I was like, "What?! No, I didn't see that." And then I was like, "Oh, wait a second..."

**Adam Stacoviak:** That makes sense now...

**John Nunemaker:** So you read all the articles... But there was a ton of rumors about like LinkedIn is gonna buy GitHub, X is gonna buy -- there was a bunch of people that were gonna buy GitHub, and it never happened, so I just kind of was like "Whatever..." And then all of a sudden, later that evening I started thinking about it and I'm like, "Well, if that's true, then that would make sense why they would all of a sudden get rid of Speaker Deck really quick, because they wanted to see it live." I think that's a really cool thing; it's just like another -- GitHub, sure, they've made a ton of mistakes in the past ten years, but they've also done a lot of really great things, too... And I just felt like that was one nice, last gesture.

So I got it back, signed the paperwork, three days later my daughter was born, and of course, right before that, literally like the day before that they announced the Microsoft rumor was true. Internally, they were like "It's true." So then we went through a waiting period where we had to get approved...

**Adam Stacoviak:** It was like 90 days, right?

**John Nunemaker:** It was longer than that, I think... Because it was June 1st or 4th, somewhere around there. June 4th, I think, all the way till November. It was November-something when they actually closed, the date they signed the paperwork, and stuff. But yeah, I mean - it had to get approved by the SEC, or somebody in the U.S, and the EU in Europe, all these... I remember there were these big dates, and everybody starts getting real nervous, because if this doesn't work out, then it's gonna push the date back, or change the price, or things like that.

But yeah, so that was kind of a nuts way of getting it back... And then obviously Microsoft acquired GitHub, and then I was on paternity leave, which was like the perfect to be on paternity leave, because everyone is running around like chickens and trying to get everything lined up for this Microsoft acquisition... And I was just on paternity leave, just chilling with my kids, which was pretty awesome and stress-free... Especially because at that time I was on the security team, and they were doing a ton of work. So I felt bad, but also I was like "Well... It was just good timing."

\[00:55:51.12\] And I was planning on coming back, mostly because I was like "I don't know if this is gonna go through, or any of that kind of stuff." I remember it closed on a Friday and my first day back was Monday and I was like "I'm sorry, but I'm resigning." That was pretty much it. So then it was like, "Okay, we've got Speaker Deck, kind of hacking on Flipper Cloud..." So that kind of is the end of that story. Then it kind of went on to Fewer & Faster, and joining up with Steve again on Fewer & Faster and then also on Box Out Sports, another thing that we're working on together. But yeah, it was definitely crazy.

**Adam Stacoviak:** So you were there really for the acquisition, but not so much for the ownership and stewardship of Microsoft.

**John Nunemaker:** Yeah, I was not... Literally --

**Adam Stacoviak:** What made you resign? Was it because you had these other opportunities already lined up, and you had planned to anyways, and this was just like, whatever? Or was it--

**John Nunemaker:** Yeah. I had no interest in -- honestly, at that point I was completely done with GitHub. I was kind of just nestled myself into, again, a small corner on the security team with people that I really enjoyed, just to try and make it through... You know, there was talk about golden handcuffs, and stuff like that, and it's like, at this point I still had some options; most of them were exercised because of various problems that had happened in the past with stuff... So most of them were exercised, but I still had -- I don't remember what it was, like 25% or something were options... And it was enough where I was like, okay, I can kind of get a sense, based on founding rounds and stuff, that as long as this doesn't totally crash and burn, what this would maybe be worth, so I should probably stay here...

So I just tried to show up every day and do something positive, but I did not like being in a 1,000 or 2,000-person company. Going back to impact, unless you're really high up or willing to put the time in... At this point I had family, I wasn't gonna work anymore than eight hours a day, or something... So that was really what it came down to. I just wanted to -- I didn't wanna try and put the time in to even see if I could make a bigger impact because of family... So if I'm not gonna do that, I'd like to just show up and do something positive every day until it is liquid, or something else comes along... So that's really what it came from. Then once it was done, I was like, "Okay, this seems like a good time as any to leave."

Part of me wanted to stay till -- December 5th would have been I think seven years on the dot, and I think I left November 21st, or something... So it was not quite that perfect seven years, or whatever, but I was like, "Well, it's close enough. That's okay."

**Adam Stacoviak:** No one's counting. Only you.

**John Nunemaker:** Yeah... And I was done. I was ready to go back to high impact.

**Adam Stacoviak:** And I suppose LinkedIn, if you maintain your LinkedIn... 6,5 years, not 7 years, John.

**John Nunemaker:** \[laughs\] Yeah, I probably fudged the date on that, just so it would say a seven. I wouldn't be surprised.

**Adam Stacoviak:** Is that right? Okay, I didn't check it.

**John Nunemaker:** I don't know. I didn't check it either, but I wouldn't put it past me.

**Adam Stacoviak:** Nice. Odd, round numbers, rather that6,5. That's interesting though, that you were able to, I guess, prioritize your family and your values over that. I mean, you'd been there seven years. I guess my first thought was maybe it was a Microsoft thing, Microsoft acquiring GitHub... And I think that we all had our suspicions of how it would turn out... And I don't know about you, but I'll share my opinion - I'm quite happy with where GitHub is today. They're listening, they're doing things, and I think we've been pleasantly surprised by the stewardship of Microsoft of GitHub. I think Nat Friedman's ability to CEO that company very well has been instrumental in its success of recent... So personally, I'm very happy with it. I don't know if you had some concerns around that; feel free to share them if you want to... But that's my perspective, is that we have a better GitHub today, that we need.

And going back to my -- I don't know if it's a shared opinion for the world or not, but I feel like GitHub is definitely a black hole; not in the blackness, but more like the gravity. Everything is circling around open source, and everything in open source is circling around GitHub. It's the center of gravity of software, essentially. I mean, the NASA mission recently, with Ingenuity, is interesting. That helicopter on Mars, for example, had open source code on it, and they worked with GPL and NASA to sort of go back through dependencies and all that stuff to confirm that curl was on there, and that certain Python things were involved in all this mission. That's cool. I think that's really cool. That's not something we had in open source back in the day. I guess ten years ago we kind of had some of those things, but we came from a CSV world; I forget what was even before Git, but...

**John Nunemaker:** \[01:00:22.29\] Subversion, yeah.

**Adam Stacoviak:** Subversion, right.

**John Nunemaker:** That's what I remember. I remember having my own Subversion server, yeah.

**Adam Stacoviak:** Svn, yeah. Exactly. We have a different world of creating, collaborating, and having impact in an open source world than we have had before. And you know, the GitHub you worked for was still that same GitHub it is today, but it's just different in terms of its functionality as a company, and I feel like they've done just a tremendous job of leading what we need as a society for open source, in my opinion.

**John Nunemaker:** I mean, I'm not in my office right now, but my office is basically octocats everywhere. To this day, I've got 4-5 different pieces of artwork that I got while I was at GitHub. You know, Monalisa, the Octocat, Hubot, plastic figurings... It's basically like a shrine to work in there for seven years and getting swag for free all the time. So I'm just starting to retire... After I left, I bought more T-shirts, because I couldn't get them for free anymore, and I'm kind of just at the end of those, and now I'm starting to switch to different stuff that's not GitHub.

**Adam Stacoviak:** Was it Fewer & Faster is the name of your current business?

**John Nunemaker:** That is. I don't have any sweat shirts or anything like that, any swag yet. I need to get some swag going. Probably soon. But yes, I have good feelings about it. It wasn't Microsoft -- I mean, I'm not gonna lie, I hated Microsoft for a lot of years. When I went from Windows to Mac... You know, the old commercials with "I'm a PC. I'm Windows" - I mean, I was totally on board with those commercials; I hated Windows, I thought it was terrible. I didn't like Microsoft. I ignored them. I didn't pay attention to them. I have not used Windows in 15 years probably. I didn't even know they existed anymore. I just totally did not pay attention.

But then when I started looking into them, when I saw the rumors and stuff like that, I was like "Oh, they actually seem like kind of a decent company." The CEO, Satya, or whoever, he seems --

**Adam Stacoviak:** Satya Nadella.

**John Nunemaker:** ...yeah, pretty interesting. So yeah, I thought it was pretty cool. So I had no problem with Microsoft, and I actually thought it'd be funny for me to work at Microsoft, except for I was just like "You know what - I've just had a second kid, I've had paternity leave... I don't need to go right back to work", so I was like "I'm just gonna take some time..." It's been seven years of ups and downs, and burnout, and all that kind of stuff. I was like "I'm gonna take some time off and just move on."

And now that I'm on the outside, I feel like I'm a bigger fan. Because at the end of GitHub, the last two years or three years, I wouldn't say I was a huge fan anymore... But it ended positively, so now, if I think back on GitHub, I hardly even remember the negative or the bad stuff. I just remember the stuff that's good, and happy. Time heals all wounds...

**Adam Stacoviak:** So we've covered lots of ground in terms of your history. I ask a few questions as a prompt for producing this podcast; not all the questions make it in. In many cases, the questions I ask is just to sort of prime the conversation; at least that's what I say. But I wanna ask you some lessons learned. I know that you've been down a long road, you've ran your own thing, you've been acquired (acquihired), you've worked at one of the most successful, impactful startups-turned-unicorn companies I would say in the world... You've gotta have some lessons learned. So if it's 20 of them, or one of them - I don't know how many lessons you've got, but share some lessons that you've learned along the way.

**John Nunemaker:** Yeah. It's funny, because I don't think back of like what my lessons are, but when I was writing that post, a bunch of them -- you know, as I was writing it, I was like "Actually, there's some things that I've learned. I should maybe highlight that." So there's definitely some things.

\[01:03:48.28\] Some of the obvious ones that come to mind we've already talked about. It's like, you don't know unless you ask. If you're not feeling fulfilled in your job, or things like that, just find out. "Can I do a side project? Is it allowed?" Make it above board, make it obvious. Say "I'm gonna do this, but I won't do it on work time." Start something on the side. I think that's one lesson.

Another lesson is "Always have a side thing." Financially, people always talk about investing, like do index funds, and diversify, and this kind of stuff. It's the same thing in your career. Your career should be diversified. You shouldn't just have -- and I think I learned this the hard way. For a long time -- I mean, it was all just on paper. Any financial net worth or something - it was just on paper, with GitHub. There was no diversification. And obviously, I was saving for retirement and things like that, but when everything is just in one company, whether you have options or not, if you just have a job and you work for that company, still everything is in that one company. Always have a side hustle. I think we definitely did that at Orderedlist. We consulted full-time, and we did products on the side. And it wasn't like, "Well, I have eight hours, so I'll do six for consulting and two for this." It was like, "Well, we'll do six or eight hours of consulting every day, and another two to four of app development." We worked kind of two jobs for quite a while. And I don't know that that's healthy or whatever, but I definitely think having something on the side is a good thing. It keeps you learning, it gives you something to control and make a large impact on, which is nice...

I think those are two really nice things - always negotiate/always ask, always have something on the side... Always focus on long-term value... I feel like saying "always" is probably the wrong way, but hopefully everyone knows what I'm saying. Take everything with a grain of salt. That's how I take everything everybody else says, so please do that. Don't just "Okay, he said this, so do it." That doesn't make any sense.

But focusing on long-term value, I feel like I've seen, just from me, and then also for people around me, and stuff like that - it always seems like it's the good thing. Long-term is the thing that really matters. Short-term if there's some suffering, or short-term there's some financial implications or stuff like that - that's fine. But focus on long-term value. I feel like that's something that I've picked up.

And then I think another thing that's kind of interesting (or maybe not) is the kind of two different paths you can go on, at least from like me looking at \[unintelligible 01:06:17.19\] as a programmer... One side is a startup, and it's high-impact, you can make a lot of changes... Probably not as good a benefits and salary and things like that. But that's one path. And the other path is you're just -- I don't wanna say "a cog in the wheel" in a bad way, but you have your one thing that you do. You don't wear a lot of hats. You're on the security team, or you're on the high availability team, or whatever it is. So those two paths have different pros and cons... And I think it's actually really good to do both of them. That's one of the things -- when I look back at the 10-15 years that I've been doing this, I actually really like that I started with some small consultancies, and then worked at the University of Notre Dame, which was really big. So there's thousands of employees, and there's a lot of really great benefits, a lot of nice pros and cons for working there... But I was like, "Oh, I don't have control over anything. I can't make an impact because I'm limited by X, Y and Z", which are just institutional things that aren't gonna change."

So then I was like "Okay, pop out to Orderedlist." Now I have a lot of impact again; everything I do directly affects my bottom line, and the people that I'm working with, and that's really neat." And then working at GitHub, same kind of thing, but then eventually it became kind of more like Notre Dame, where again, you don't have that impact, you don't have that ability to do it... And I feel like getting that oscillation between the two - now I feel like I'm in a nice place, where I have a really good idea of what I like to do. And if you don't do both, I feel like you can't really get that.

\[01:07:54.09\] That's the thing I've been thinking about a lot lately, is that I'm really thankful that I've worked at both big companies and at small companies... And not just small companies, but small companies that I don't own. I think it's nice to be an employee, it's nice to be an employee at a big company... There's lots of different pros and cons and you should go out and do both of them. If you're brand new, go out, get a job at a big company, make some money, and then go out and build your thing on the side, and then switch over to your side thing when you feel like you can make it happen. I feel like those are good paths, that aren't necessarily risky, but they're focused on long-term value, and they give you a lot of experiences, which will shape what you can actually do on your own later on. Those are probably the main things that I can think of off the top of my head.

**Adam Stacoviak:** Yeah. It's important to get experience, and I think that's sort of an aspect of "Be your own scientist" in terms of what you want from your career. What you want from your daily impact in your "work". Because I think it's kind of easy to accept the default. The default might be "Get a job", or you might have your eyes on a particular startup that you're like "I love that brand, I love that business. I wanna work there. I'll do anything to work there." And then you might get there and you're like "Well, that's not actually for me. I'm really more entrepreneurial and I wish I could do these things."

So getting that experience is sort of crucial to laying the foundation of really where you wanna go. And I guess all roads lead back to you and Steve, at least in your story, because that's where you're at now. What are you doing now, how did you get to this? What exactly are you guys working on? I know you've Box Out, and you've got Flipper Cloud... What are you guys working on? How did you guys get back together? Was it like, "Hey! I know we haven't worked together in like seven years, but we're still pals, right?" Or did you guys keep in touch? Are you neighbors? What's your relationship like?

**John Nunemaker:** We're like 20 minutes from each other... So he left GitHub maybe a year or two before, but he did the same thing at Notre Dame. We worked together there and he left a year before I did... So he had left, he was doing Box Out, so when I felt, it was just kind of natural... So I was like, "Hey, I don't know if you guys are looking for more people, but if you are..." And then at that point I was like "Well, actually, I would like to be an owner", so I ended up just kind of buying in... So I used some of the Microsoft money to buy into this.

So it's four of us who are owners equally, and Steve and I do all the dev stuff for the app, and then we have somebody who does design of the templates, and building of them, and then we have another guy who does sales. And the four of us just kind of split the tasks up and do them.

Steve and I - again, even when we have something that... Box Out is doing great; it totally pays all of our bills and is doing really well, we're looking to grow and probably hire soon... But even then, it's like, we always have something on the side. The problem is we had too many things on the side... We had both Speaker Deck and Flipper, and we were like, three apps for two developers, and trying to push them forward - it was just not possible. So we were like, "Okay, let's focus... Let's cut out Speaker Deck."

Flipper is my passion. We know dev tools, and stuff like that. That's what we've always built, with Harmony, and \[unintelligible 01:10:52.09\] and things like that, and GitHub... So we were like, "Let's focus on Flipper on the side, and Box Out is our primary thing."

It comes back to that form and function thing. We just work really well together. We appreciate each other's ideas, business-wise, development-wise, all the way through... And we also live probably 20 minutes from each other. Now, I finally led the way, so I got the RV first, and now he's got an RV as well... So we went on a trip last fall, during Covid. It actually worked out great. All the kids are in e-learning, so we're like, "Okay, let's just pick up as two families and basically have our own little road isolation trip."

**Adam Stacoviak:** Yeah.

**John Nunemaker:** It was great. We went down South-East, and Cape Hatteras, and \[unintelligible 01:11:36.02\] So yeah, I mean -- I think we work well together, we're better together than separate... At least I would say that; I'm not gonna speak for him. But I feel like either of us alone - you know, I don't care as much about the design, he doesn't care as much about the code. You put us together and then we both make each other better. So that's kind of how we ended up back together. It's just like a natural thing.

We live close, we hang out, we're good friends, and then additionally, we both do the same kind of skillset, so we just naturally end up working on the same stuff.

**Adam Stacoviak:** \[01:12:08.22\] Yeah. Why not, man? I mean, I can respect that... So Flipper Cloud is something you're working on... And if I understand, this began as open source from you... Is that right?

**John Nunemaker:** Yup.

**Adam Stacoviak:** And you turned it into -- would you call this a commercial open source company? How would you frame this? What's the license for it? What's some of the details on how you were able to monetize, I suppose, open source?

**John Nunemaker:** I have a post drafted of how to go from open source to paid. It'll eventually go out, when I have time to write it... But for us, Flipper is for feature flags, and stuff like that; it started as open source in 2013, it was just an idea... Whipped it together, didn't use it... A bunch of people started using it, and I was like "That's cool", but I wasn't a user, and then in 2015 we dropped it in GitHub, and it's been powering GitHub's feature flags ever since then.

I kind of saw how it changed things for us there. Chris could be on stage at Universe, and he'd be like "And here's our new features", and bam, our \[unintelligible 01:13:05.10\] would get enabled, and everything was just out. I was like, "That's awesome." It was really powerful.

**Adam Stacoviak:** Wow.

**John Nunemaker:** So seeing that, I was like, "Maybe there's some way I could do this like, you know--" There weren't really any hosted services at the time. It was like 2017. LaunchDarkly was just starting, Split, some others ones were just starting... And I saw them starting getting funding, and I was like, "Maybe this could be a thing."

Flipper is built on adapters. You can adapt the storage to whatever, so it's like, "Here's a basic format of what the adapter needs to return when these methods are called", and as long as it can do that, you can store on disk, in memory, in a database, multi-level caching, whatever you wanna do. So I was like, "What if there was a cloud version?" and the cloud version just centralized all the storage of things, and then locally, you would just kind of sync from that however you wanted - during a request, outside of a request, background thread... It didn't matter. Again, because it's all built kind of on that adapting storage idea.

So that's kind of how it started. So we started adding centralization and authorization, things that people would pay for. Audit history... Anything that is hard to do in the open source version, because adapting audit history to every single database that we support for the feature flag stuff would be hard. Analytics would be hard across every single -- you know, like, building the same analytics thing in every database is not my dream... So instead, we were like, "Okay, let's just centralize, and then just have one place where people can send everything." So that's kind of how it's going.

So \[unintelligible 01:14:29.14\] and it's Ruby on Rails only. We'll probably branch out to other stuff eventually, as people ask for more... But that's kind of the goal for now, is just that...

**Adam Stacoviak:** Interesting. Ruby on Rails only, yeah?

**John Nunemaker:** Yeah. I mean, Flipper's a Ruby gem, and that's how it started. So we were like, "Okay, there's two models. We can spread out and add JavaScript, and Node, and add Go, and add all these other client libraries..." Or we can just say "You know what - there's already hundreds of companies (maybe thousands) using Flipper. What if we just tried to build something that they would find valuable, that would solve their feature flag problems and centralize it, and just focused on that?"

**Adam Stacoviak:** So your model now is then converting open source users to paid users, essentially, because they have cloud needs, it makes it easier, hosted probably means managed... Right?

**John Nunemaker:** Yup, exactly it. So we have a central service, and that central service stores the feature flag config, the audit history, the authorization and permissions... All that kind of stuff. And all you've gotta do is just one little token, and pick a local adapter that you're gonna use, like ActiveRecord, or Redis, or Mongo... There's a billion of them. And if you need faster, you can cache those adapters two, in memcache, and all that stuff... And it just does nice, fast, local reads, and syncs from the cloud with WebHooks or however you wanna do it... And that's kind of the model.

It's just like, take those open source users and say "Alright, here's some things that would be hard for us to do for you in open source, but are easy to do in a central version... And here are things that you wish you could do in open source, but you can't. We're gonna take all those things, put them in a hosted version effectively..." That part is not open source, so it's more like an API and a regular SaaS web app. That's kind of how that works.

**Adam Stacoviak:** Interesting. Well, John, I know that we've taken a lot of your time... Interesting, fun story. Thanks for taking the time to catch back up. I'm kind of bummed it took so long to get this call in place, but I think it's been better delayed than it would have been maybe in 2018. I don't know about you, but--

**John Nunemaker:** I agree.

**Adam Stacoviak:** I appreciate you and Steve's working relationship, how you focus on business, you keep things simple, you have a focus on family, which I think is a great value... And I really appreciate you sharing your story here today, so... Thank you for your time.

**John Nunemaker:** Thanks for having me on. This was great. It's been way too long... It's probably been over a decade since our last Changelog interview. It was a long, long, long time ago.

**Adam Stacoviak:** Forever ago.

**John Nunemaker:** Yeah. So it was good to catch up again.

**Adam Stacoviak:** Good to talk to you, John. Thank you.
