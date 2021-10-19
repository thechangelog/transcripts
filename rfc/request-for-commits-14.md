**Nadia Eghbal:** On today's show Mikeal and I talk with Ryan Bigg. Ryan is known for his work on Rails documentation, including the Rails guides and Rails 4 in Action. In 2015 he announced he is quitting all open source work, as he wanted to spend his free time elsewhere.

**Mikeal Rogers:** Our focus with Ryan was burnout. We talked about his time as a community manager for Spree, writing documentation for Rails, and what lead him to quit open source. Twice.

**Nadia Eghbal:** We also talked about his occasional contributions since then, getting paid to work in open source, and whether there's a sustainable, happy medium.

**Mikeal Rogers:** So why don't we start off by just telling me a little bit about how you got into open source and how you got into Ruby?

**Ryan Bigg:** Sure. I was interested in Ruby on Rails from about 2007 when a friend of mine showed me the 15-minute blog by DHH, where he used Whoops a lot, and he's like "Look at all the things I'm not doing", and from that point on I was really interested in building a forum system in Rail. I started building that, and I open-sourced it and started doing work on that, and people were contributing to it through the SVN repository at the time.

Then a few years later GitHub came along and I moved the project over to GitHub and people were contributing through that. So that's really where I got my start, with my own little forum project.

**Nadia Eghbal:** You have a background as a developer, but then you made a lot of contributions to Rails through documentation, right?

**Ryan Bigg:** Yeah, that's right. In 2011 I ran this little Pledgy campaign; I raised $2,500 to document Rails. I think it was around that time that Rails 3 was coming out, and the router had been rewritten by Sam Stephenson, but while the code had been rewritten, the documentation hadn't. So I went through all the code and documented all the methods that you could use in the Rails router. Out of that, then I think it was Mike Gunderloy who wrote the Rails routing from the outside in guide, and that's what I refer everyone to if they wanna understand what the Rails router is. From that documentation came better documentation. It's nice to see that evolution.

I've also rewritten the Getting Started guide, which is probably the one that people know the most about. My first contribution though was the Active Record Query Guide, which was previously called the Active Record Finders Guide; because it does more than finders, we renamed it to querying. The Configuring Rails Applications Guide was mine, the Asset Pipeline Guide started because I was baiting DHH on Twitter, I was like "Hey, this asset pipeline is pretty good, but where's the documentation?" and he's like "Why don't you put on your big boy pants and contribute to Rails? What have you ever contributed to Rails?"

\[03:59\] This was about after my 400th commit to Rails... So I replied to him and I said "Here's the list. Here's why I am on the contributors' list." I think he was busy that day, because he didn't end up replying back.

Anyway, after baiting him on Twitter, I ended up writing the beginning of the Asset Pipeline Guide. That's how that came about. Then the last guide that I wrote that I can remember is the engines guide, which was actually a chapter of Rails 3 in Action and I extracted the content from that and built that into the official engines guide.

**Mikeal Rogers:** What was it like being a documentation contributor on Rails? Was it something that was really encouraged, was there a lot of infrastructure to support for it, or was it something that you really had to drive yourself?

**Ryan Bigg:** There was a lot of infrastructure support for it. Xavier Noria ([fxn](https://github.com/fxn) on GitHub) started that project, I think with Pratik Naik ([lifo](https://github.com/lifo) on GitHub). They started the doc Rails project, so looking for contributors, and they were really encouraging people from the community to contribute; I was one of those people, and I reckon we had a team of around ten people who were running the documentation at one point. That's why we've got the Rails guides that we have today, because of the work of Xavier and Pratik That's how I got my start.

**Nadia Eghbal:** So you mentioned - you kind of glossed over this, but you mentioned the first documentation project you did you crowdfunded?

**Ryan Bigg:** Yeah, that's right.

**Nadia Eghbal:** I was curious, why did you decide to crow fund that?

**Ryan Bigg:** I was in between freelancing jobs at the time, and I was like "Rails needs documentation and I need money, so let's combine the two and we'll start this crowdfunding project, and hopefully I'll raise enough money to survive a month", and I did. It was really nice to be able to spend an entire month working on -- I worked primarily on my book, Rails 3 in Action, and also... I reckon it's more of a 50/50 split actually between Rails 3 in Action and Rails documentation, and just helping out in the community, answering questions on Stack Overflow and that sort of thing. It's really good to be paid to do that kind of work, I really enjoyed it.

**Mikeal Rogers:** You mentioned that there was some support inside of the Rails project for people doing documentation, but you eventually kind of transitioned into more of a community manager role for an open source project with Spree, so what was that transition like and what are your thoughts on how to do community management?

**Ryan Bigg:** That transition was completely by accident. I was working for a company - you probably haven't heard of it, because it's an Australian-based company... It's called the ABC, and it's the Australian equivalent of the BBC. Everyone's heard of the BBC, no one's heard of the ABC. They are a big government-funded broadcaster, they do a lot of interesting programs, and from these programs they sell DVDs and merchandise and whatnot, and to sell that online, they had an old ASP store, and then they were switching it over to Rails and they wanted the Spree.

The company I was working for at the time, ReInteractive was hired as the consultant on that project. That project persisted for eight or nine months or so, and I got involved in the Spree forums (the Google groups, I should say) and a friend of mine, Phil Arndt (who does the Refinery CMS), pointed out this post in the Spree list asking "We wanna make Spree a Rails engine, so how can we do that?" I was like, "Well, you know, I've got some time to reply; I'm gonna just write a couple of paragraphs and then they can take it from there." It ended up being a page and a half of my thoughts, and out of that Sean Schofield, the creator of Spree, contacted me and he's like "By the way, we've just received this funding and we're looking for a community manager, and you're really passionate about this because of all your answers on the forum. Would you like to come and join us?"

I was like, "I get to work on open source, and I get paid not a pittance, so I can actually do things." And the other offer on the table was that I get to go around the world, speaking at conferences, and I was like "Yes, yes, yes. Absolutely. I will do this, because this is an amazing offer." So I said goodbye to my consulting gig and moved over to Spree. From then on it was really just about -- it sounds glamorous that you have to travel the world and speak at conferences and maintain open source and get paid for it, but then eventually after two and a half years I ended up burning out from it, and that wasn't very good.

**Nadia Eghbal:** \[08:14\] It's like a totally different function from documentation as well, right?

**Ryan Bigg:** Yeah, totally. I'm always interested in helping out communities and building communities and helping people understand code. Documentation is one of the ways that I do that, and the community manager role was definitely another way I could do that... Because I got really involved with the spree project and I could understand the code better than most people could, and that feeling when you can transmit an idea from your brain into somebody else's brain and they go "A-ha, I get it now!" - that's where I get my biggest thrill from, it's when people understand something because I was able to explain it clearly enough to them that they could understand it.

**Mikeal Rogers:** Did you bring any kind of particular focus on non-code contributions, since that's kind of the world that you came from when you started community management?

**Ryan Bigg:** I welcomed all kinds of contributions; we did eventually have Spree guides, so we did end up doing that, but a lot of the contributions I would say on Spree were code contributions, people improving the framework and that sort of thing. Documentation wasn't kind of our focus on that project.

**Nadia Eghbal:** Maybe this is a dumb question, but because Spree is a user-facing application, which is kind of different from the types of open source project we've had on here before, was Spree being open source - did that change how you thought about the community manager role? Was it like being a community manager at any other company? Was anything about that particular to open source?

**Ryan Bigg:** I've never been a community manager at any other company so far; Spree is my only experience with that. What we were doing at Spree was mainly answering emails, maintaining the GitHub issues, doing new releases and that sort of thing. I don't know if it's any different to any other community manager role. I didn't really get to talk to many other community managers and I really wish I did, because I think I would have got a lot better -- I would have built up a support network, and that may have prevented the burnout.

**Mikeal Rogers:** You mentioned that you were traveling a lot and going to conferences and stuff like that - what was your schedule like? How much were you actually traveling?

**Ryan Bigg:** Well, I think it was 2013 that I traveled six and a half times around the world, the equivalent of... So about 180,000 kilometers. That was a lot of flying. My longest flight was 42 hours I think it was, from point to point. It was crazy.

There was this time where I was consulting in the U.K., then I flew back to Melbourne and then had to fly back to New York for a conference the week after, so I spent three or four days of that week in airports. That's the less glamorous side of going around the world and traveling and speaking at conferences.

The glamorous side is that you get to meet all these people and they're like "Oh my god, it's Ryan Bigg! He wrote the book and he maintains Spree! He's actually real, he exists! He's been really helpful, and I love him!" That kind of fanboyism is hilarious. My wife got approached at a conference that we both attended; she came along with me to DC, and this guy kind of cornered her and he's like "I have this idea I wanna tell Ryan, but he looks busy at the moment so I'm gonna tell you and hope that you pass it on." She doesn't remember what the idea was... \[laughter\] She was just like "He's right over there, you can just go up and speak to him", and he didn't... So I don't even know who the guy was, but if he's listening, I'm keen to hear what his idea was, still.

**Nadia Eghbal:** Do you think some of that contributed to the feeling of burnout in that type of a role?

**Ryan Bigg:** Yes, absolutely. It's this -- what's the word I'm looking for? Not Messiah complex... Fanboyism, hero worship probably is the better term for it. People think you're the most amazing thing and you do all this amazing work, and therefore my feelings for that were "People think I'm amazing, so I have to continually be amazing, I have to continually push the envelope and continue working and reply to all these issues and reply to all these emails and just keep going, keep going, keep going." I think that's definitely a contributing factor to the burnout; I felt like I had to be the hero.

**Nadia Eghbal:** \[12:26\] Do you feel the same way about documentation as well? That sort of hero worship?

**Ryan Bigg:** Yeah, in a different kind of way. With documentation typically the projects are a much slower burn, if that makes sense; the open source projects are -- you know, if an issue or a pull request sits there for a couple of weeks, people are like "Why is it taking so long? He doesn't love me anymore." But if you're writing a book or a guide, people don't care that it's taking you weeks to write, because it's this slow process of getting the content right, getting it ordered, reviewing it, editing it, making sure it's perfect before releasing it out into the world.

With the Rails guides there was never any pressure to get them done. With the books I've written, there was pressure from the publisher, but as Douglas Adams says, "I love the sound that deadlines make when the whoosh past."

**Nadia Eghbal:** One of the reasons I was interested in having you on this show was because you've contributed in a variety of different ways to projects, which I don't know that a lot of people can say they've written code and done documentation and done community management, so you've seen sort of like the whole view... A topic that's come up before has been code versus non-code contributions, and kind of reading about your background - I'm just sort of thinking out loud here, but sometimes people portray that as like you have to find the non-code people to make those non-code contributions, or that's the implication, and there's this sort of like false dichotomy between developers code and non-developers do non-code things, but you're a good example of someone who does all of that, right?

**Ryan Bigg:** I don't see any point in writing code if you can't explain what it does in the form of documentation. If you're developing an open source project and you want people to use it, yes they can look at the code, but having documentation where it's like "Step one, step two, step three, step four, and now you're winning" - that is extremely helpful. And even documentation explaining the thought process is sometimes useful as well. And you're right, there is that dichotomy of people who -- developers are like "No, I don't write documentation, I write code", and they're all hoity-toity about it.

It's a very strange dichotomy and I'm trying to crack it, but I can't convince people to write documentation. They think they suck at writing documentation, but typically they don't, they're okay. Documentation is sometimes sparse, and that's why they think that documentation sucks, because the documentation they write is sparse. I don't know if you know the meme of like "Draw two circles, and then draw the rest of the owl." So it's like "Step one, step 16", but there's like 15 more steps in between they're missing out.

My job then, if I'm working with somebody like that, is to encourage the documentation to be written, however they wanna write it, and then I work with them in reviewing the documentation, like "Hey, by the way, did you think about adding this in? We could explain the wording here. How about having an image describing the flow of this state machine, for instance?"

Like Spree's payment gateway - you've got to authorize the capture, the refund, all of that; you can explain it with words, but you can also explain it with a pretty picture, which helps people understand the flow much better.

**Nadia Eghbal:** It's almost just like having those methods I guess out there... It helps people help themselves, right?

**Ryan Bigg:** Yeah, that's right.

**Nadia Eghbal:** Just thinking about it, I feel like there's almost -- the explanation that developers don't do that kind of stuff is almost just trying to pass the buck to some mythical person who's gonna come in and write all this stuff, but there's value in just having people learning how to do at least a little bit of it themselves.

**Ryan Bigg:** \[16:02\] Yeah, try it. I mean, I didn't just instantly become good at writing documentation; I don't even think that I am good at writing documentation still. It's a practice, it's an art, it's a craft; any skill that you learn - you get good at if from practice. You learn the piano by playing the piano a lot. You get better at writing code because you write a lot of code. You get better at writing documentation because you write a lot of documentation, and that's what I have done. Again, I don't' think I'm any good at it, and if people feel like they aren't good at writing documentation, I'd still encourage them to try it. Trying is at least practicing, and you will get better through practice.

**Nadia Eghbal:** It's better than zero documentation.

**Ryan Bigg:** Exactly.

**Nadia Eghbal:** Do you think that that changes for a big project versus smaller projects? I know you've maintained smaller projects on your own and then you've contributed to bigger ones like Rails - do you think that responsibility changes when it's a small project versus a big one?

**Ryan Bigg:** Yeah, on a small project you probably -- if it's a really small team, it's up to the developers of that project to do that documentation, whereas on Rails it's not necessarily up to the Rails core team to do that documentation, although I wish it were, because then they would have had routing documentation, they would have had the asset pipeline documented, and probably engines as well.

On the larger projects you've got people who add new features, and you probably have people who want to write the documentation, and getting them to work together is the key there.

**Mikeal Rogers:** Also, the smaller projects probably don't have anything as complicated as the asset pipeline to document, right?

**Ryan Bigg:** No, absolutely not. I still don't understand the asset pipeline.

**Adam Stacoviak:** Coming up, Nadia and Mikeal talk with Ryan about his departure from open source. In November 2015 he wrote a post announcing his departure, so we asked why he wrote it, what were the events leading up to it and what was the response from the community. We also talk about how he stepped down and handed off his projects, and which strategies he might suggest for those wanting to do the same.

The interesting thing is that Ryan didn't actually quit open source; he still occasionally contributes, but the big thing we figured out is if quitting was the right decision for him... And you might be surprised what his response is. Stay tuned.

**Break:** \[18:30\]

**Mikeal Rogers:** I wanna get into this whole time when you burned out for a minute. So before you burned out, before you wrote this blog post, what were your days and your weeks like? What were you doing on the daily?

**Ryan Bigg:** On the daily I'd get up in the morning and I'd check my inbox and see what open source stuff there was; I'd reply to issues that people had left comments on overnight, and then I would go to work and do my full day of work. On the train home I would check my inbox, and then before going to bed I'd check it again and do the same thing. And that was every single day, even on weekends. Especially on weekends I had free time, so I was able to do some actual coding work on these open source projects. That just meant that I was working all the time.

The same thing happened at the end of my Spree term. That was a similar kind of feeling where I had all this work to do and it felt endless, and I kind of just collapsed in me. With Spree for instance, there were several days, I reckon, several months of this where I would wake up and there would be 200 new messages in my inbox... Over 200. This is the day before completely clean, empty, and then the next day there's be 200 messages from the user group from GitHub, from the open source projects I was maintaining, and it just felt overwhelming to have to jump through that every single day.

When I quit open source in 2015 I felt the same way. I had all this work to do, I was trying to write Multitenancy with Rail, the second edition of that, and I had my wife -- I was trying to spend time with my wife and not be feeling guilty that I'm having a good time while all these open source projects are sitting there stagnating and nobody is working on them, and people are actually using them, but nobody cares about them enough to contribute.

It was a really difficult time, and I just felt like something has to give; either I have to spend less time with my wife, I have to spend less time at work, or I have to spend less time on open source. The wife situation isn't going away, absolutely not; that would be terrible. Absolutely terrible if that went away. Work is enjoyable and it gives me money that I can use to spend on actually having a roof over my head and food on the table, and open source usually brings me joy. At that point in time it wasn't bringing me joy, so I decided that's the thing I was gonna cut out of my life, it's the open source work. I would spend my time that I was spending on open source focusing on Multitenancy with Rails.

What happened after that was from November through to (I think it was) June or July 2016, I was able to complete Multitenancy with Rails, and I got a big thrill out of that when I finally did complete it.

**Mikeal Rogers:** You mentioned that you were a community manager at Spree. A lot of people, when they go for these kings of roles, they go for them because part of that role is usually working on open source. So I think the assumption when you said community manager was that a lot of that open source work was part of your job now. So was it that it actually wasn't part of your job and that it was entirely separate, or just that there was so much extra open source stuff that you couldn't get it done in your regular workday?

**Ryan Bigg:** Yeah, there was just so much extra stuff I just couldn't get done in the regular work day. Because the work day wasn't just all about the open source issues and code and pull requests and documentation, it was about replying to users on IRC, there were long discussions there; big issue threads on GitHub and also on the mailing list. It was just all of these conversations that were ongoing, kind of like "touch this one, touch that one, touch that out. Okay, good, now I can get back to open source." And it felt like this massive pile of work that I had to do. It was very tough.

**Nadia Eghbal:** Had you tried anything prior to straight up quitting? Like "Maybe I just need to manage my email better" or whatever, and then did you just hit a point where it was like "Nope. No, this is more than that."

**Ryan Bigg:** Yeah, I kept trying to manage the email, but it's hard. "This news stuff that wasn't important, bounce it to the next day" sort of thing; I was trying to ask for support from Spree (the organization), I was just asking for somebody else to help maintain the open source issues, because that was just me doing that.

\[24:04\] There was interest from this company called FreeRunning Technology who is now called Stembolt, and they were doing some open source maintenance, but they weren't as interested as they are now. They actually run the fork of Spree called Solidus and they're maintaining that, because after I quit, Spree kind of fell down; it had to lie down. So these Stembolt guys picked it up as Solidus... I wish they would have done that earlier; I would probably be continuing my work with them, but you know... Things happen.

So yeah, it was just hard. I did try to manage it better, I did try to get support, and I guess I just didn't reach out to enough people or the right people to get that kind of support. I felt like that was the only thing I could do, it was quit.

**Nadia Eghbal:** What was the response like when you wrote that post? Were people understanding? Yeah, people were very understanding of the quitting open source part; more understanding than I thought they would be. I thought people would be like "But, but hold on, I've still got this issue... Can you just look at this issue?" People were actually not like that. They were really respectful, and they were like "Okay, that's fine. I can fork your project and merge my pull request, that's cool... And I'll just run off this fork for the time being."

Other people in the community were actually volunteering their time to help out. I've got this guy called [Johnny Shields](https://github.com/johnnyshields) who's maintaining [by_star](https://github.com/radar/by_star/), John Hawthorn ([jhawthorn](https://github.com/jhawthorn) on GitHub) is maintaining [Paranoia](https://github.com/rubysherpas/paranoia). The forum - I wish there was a maintainer for that, but there isn't. I can't think of any other projects now.

Redis - I was maintaining the Redis suite of gems But still, these projects will have a single maintainer. I wish there was a community around that was interested in maintaining these, not just people who are using it passively, but people interested in actually the ongoing support of these projects.

**Nadia Eghbal:** It's funny, this makes me think about Mikeal's post actually... When Nolan Lawson recently wrote the post about starting to feel burned out by open source and Mikeal wrote a response just being like "You need to step away in those situations, and someone will always take over" - Mikeal, I'm putting words in your mouth, but...

**Mikeal Rogers:** Well, I wouldn't say always, but stepping away is an opportunity for other people to step up, right?

**Nadia Eghbal:** Right. That was the thing that stuck out in my head about your post. It sounds like there's often this fear that if I step away people might be mad, or everything will disappear or fall down or whatever, but often times people are okay, and if you just say you're not doing it, then you're just not doing it, right?

**Ryan Bigg:** Yeah. I should have just asked for support. It's absolutely what should have happened. It shouldn't just come down to quitting, it should be like "Hey, by the way, I'm having a hard time here. Here's what I need help with." But it's the anxiety about it; I couldn't phrase it that way before. Of course, with hindsight I can, but at that time I just couldn't. It just felt overwhelming; it was like "By the way, that's it. I'm pulling the plug."

**Mikeal Rogers:** Well, I think when it's that overwhelming, the right thing probably is to just say "You know what, I'm stepping away entirely." Maybe six months before that it might have been good to be like "These are the things that I need help with", but once you're in a certain point, your mental health is more important than whatever you feel like you owe to the project.

**Ryan Bigg:** Yeah. And I do feel a lot more mentally healthy (is that a thing?), I feel happier now that I've got less responsibilities in terms of open source work.

**Nadia Eghbal:** I was wondering about that, because you still make occasional contributions, and it seems like you're still paying attention to things in open source. Was that post more just about having to draw this line in the sand and say "I'm not maintaining projects, and I can contribute when I feel like it", or did you have a point where you were like "Oh, I kind of miss this and I wanna come back"?

**Ryan Bigg:** It's true, I do continue to maintain some open source projects. I've got this open source project called Elastic which talks to ElasticSearch servers using Elixir. I actually use it at work, so when I'm working on that, I maintain it at work, and I never do any maintenance on it outside of work, because it's a work project, technically speaking. And they're completely cool with that; Culture Amp is great for that sort of thing.

\[28:10\] And then I also have another open source project that I'm maintaining called Twist, which is my book review software, which I've been tinkering on for about six years. It's open source, but nobody else contributes to it, pretty much it's just me.

**Nadia Eghbal:** I'm curious just to hear more about how you handed off your projects and facilitated that process of stepping down. You said you just put out a call for volunteers and you found some maintainers; was there anything that you officially had to do on your repos? Just for other people that might be interested.

**Ryan Bigg:** Yes. So when I quit, I left a big note in the readme saying "This project is no longer maintained. If you want to maintain it, please contact me at ryanbigg.com." I also put that in the blog post, too. I've got several emails from people who were interested in maintaining it, and I was like "Well, these people I don't really know and they've never really contributed anything", but then there's these other emails from people who I do know and that have contributed, so I made those people maintainers, because I felt like they would have more longevity with the project than the ones who didn't, who were just like "Oh, it's an open source project I can probably maintain."

**Nadia Eghbal:** That I wanna hear more about. I noticed you had something on -- I think it was translation-gem maybe... You were helping to triage issues, and then expressed a little bit of frustration that whoever brought it up wasn't helping out.

**Ryan Bigg:** Oh, you saw that too...

**Nadia Eghbal:** I was just wondering, how do you know who's gonna be a "good maintainer" or committed maintainer? How do you actually pick someone to hand off to?

**Ryan Bigg:** So there was this guy in the community who I've known since I was a pup... There was this guy called Jason King, and he has a lot of opinions, and some of them are right. This particular opinion was that the i18n gem was unmaintained and abandoned and nobody loved it, and Sven is a horrible person for doing that. That was his opinion, and that opinion happened to be horribly, horribly wrong, and I disagreed with it so much that I came out of my open source hiatus and triaged every single issue on i18n that was still open, every single pull request, and assigned them into milestones, and just on the train to work and train home I was able to "maintain" the i18n gem, and actually did a new release of the i18n gem and fixed a lot of long-standing issues. I think the oldest one was from 2011, so that's a six-year-old issue now that I've been fixing on i18n gem.

I'm probably going to step away from the i18n project now that it's done and maintained in a relatively healthy state. So if anyone else wants to step up and maintain... I'm sure Sven and I can find somebody else who can do that.

**Nadia Eghbal:** Do you feel like because you sort of made a conscious decision to step in, did that make it easier to contribute where maybe others didn't? Is it just you cared more than other people? It sounds like it was an easy problem to solve, or you kind of just came in, did it and then you left.

**Ryan Bigg:** That's a tough question. I think it needed to have two things - it needed to have somebody who cared somebody who had time; well, that person needed to have both of those things. They needed to have the care and they needed to have the time. I happened to have both at the time, because I'd finished writing Multitenancy With Rails and was kind of between books, and I was looking for stuff to do on the train, and I found i18n needed help, and that's what I did.

If anyone else feels the same way, I'm sure Sven and I could find somebody else to maintain it as well over the long haul.

**Nadia Eghbal:** Would you recommend handing -- for people that are newer to open source and looking to build their reputation, would you trust someone like that to take over a project that has been handed off, versus a project that they started themselves? Does that make sense? Is that the right kind of role?

**Ryan Bigg:** \[32:02\] I wouldn't recommend, like, for Sven and I to hand off i18n to somebody who's new to open source. I reckon what we could do is have this handover period of probably a year where we monitor the issues and just give guidance, that kind of thing, so if people are interested in open source, they can be like "Hey, what kind of issues are there?" and they could try and triage the issues themselves and they can give them guidance on like "You know, maybe don't call users idiots because they don't understand how the software works. Maybe don't disparage them using a lot of horrible languages..." It happens on a lot of open source projects. "Be kind, be generous with your time, but don't overdo it and don't burn out..." Kind of give them that guidance of like "It's not critically important that you work on this and if you feel like it's too much, then it's okay to step away at any point. But while you're here, we'll give you guidance, we'll give you love and we'll support you 100% of the way."

So yeah, I think if new open source contributors wanna come in, by all means...

**Nadia Eghbal:** Do you feel like you had that mentorship for yourself as a maintainer?

**Ryan Bigg:** In the early days no, but with practice and Spree and a lot of the community discussions around that I believe I did get a lot of mentorship there. And there was also a lot of people who kind of grate on you a little bit. There's this one guy - I'm not gonna name him, because you know, name is withheld to protect the innocent - one day he just really got on my nerves; I was so mad at his petulance, his entitlement, and I was like "Screw this, I'm going for a ride on my bike."

So I get on my bike and I ride two kilometers, a mile from my house, and I have an accident. I come off my bike and break my left arm. So I'm mad from this guy, and then this car cut me off and I broke my arm and I just cracked it really hard. I pick my bike up off the road and threw it over to the curb and I just went to the driver and stuck my arm out towards her, finger extended, I'm like "You!!!" and she's like "I'm sorry, I'm sorry... Do I need to take you to the hospital?" and just that sentence, like "Do I need to take you to the hospital?" completely simmered me off. I just had the crappiest day, and that was not a good way to end it, but then they gave me some really good painkillers, and that made my day so much better.

**Nadia Eghbal:** \[laughs\] Worth it!

**Ryan Bigg:** Yeah, it's that kind of thing -- in open source people can be discouraged because of the hatred and vitriol and entitlement; every open source maintainer comes across it. I know Aaron Patterson talks about it a lot on Rails, and there's other Rails contributors who talk about it a lot... That sense of entitlement, of like "Why aren't you paying attention to what I'm saying? I'm right, you're wrong." It's hard to deal with as a new open source maintainer, and having that guidance of like "It's okay, just be nice."

One person who I think does this really ridiculously well, who always seems cheery and happy and chirpy is Jose Valim on the Elixir project. He consistently is happy, treats people with respect even if they're being a bit blunt or a bit obtuse, and he's just an inspiration absolutely. I wanna be more like Jose.

**Mikeal Rogers:** It seems like you still pick up new projects here and there... Do you think that to some extent you enjoy picking up a new project and getting involved in new projects more than the inevitable maintenance of them? Is that kind of part of why this continues to happen as well?

**Ryan Bigg:** I'm a sucker for it. I'm such a sucker for it. With i18n I think I am not going to maintain that any longer with anything else, but the Elastic package - I'm probably going to maintain that as long as I work at Culture Amp or as long as I need it. But I try and realize that I'm slipping back into that lifestyle I guess you could call it, of like "Oh, I'm just gonna check these issues. I'll just reply here and I'll help out here", and that sort of thing.

\[35:59\] I try and catch myself doing that, and I go "No, that wasn't healthy before, and it's probably not gonna be healthy now, so let's just not do that. Let's find something else to distract our brain with", so that's what I'm doing with my writing at the moment; that's my distraction from open source, if that makes sense.

**Mikeal Rogers:** Have you had any projects that you picked up like that or sort of working on that then did grow the community and that you were able to just kind of step away from without people noticing? Are there any practices that you might have learned along the way?

**Ryan Bigg:** Paranoia is probably the only project that did that. It's in accessparanoia.alternative/equivalent for active record, and then when I did quit this open source work there was a substantial community around - I guess substantial is like 20 people - it who were using it actively. One guy stepped up and that was really good, and he maintains it now. But I wish there was more of a community ethos around maintaining the open source projects, not like "Oh, Ryan will merge this pull request..." Or maybe it should have just been that I should grant people permission to do that, I don't know.

**Nadia Eghbal:** So sort of wrapping up this segment - so people use the term burnout a lot to talk about when they leave or step down or whatever... Do you think that people need to call it burnout in order to leave? Is it okay just to leave because you're kind of done with something and you wanna focus on something else? Do we always have to call it this failure?

**Ryan Bigg:** Yeah, burnout is used as this convenient excuse; it's like "My mental health is being affected by this project and now I feel like leaving. I'm going to leave now." I think while that is mostly true, in some cases it may not be true; it may just be used as a convenient excuse.

Also, the reason I didn't quit or hand over the projects earlier is because I had the anxiety around "If I quit, then people will hate me, they'll not use the project and this will have all been a waste of time. It will all just crumble into dust", and that's not true at all. That didn't happen. People continually use the projects now, and there's people who still maintain it and they didn't crumble into dust. It's the anxiety that I had about maintaining it that kept driving me to that point of burning out.

I think what we need to have is more of a discussion in the open source community like "If you are no longer interested in the project, if your heart is no longer interested, just like a regular job, you're allowed to leave. You're not chained to your desk, you're not forced into the building every single day." You can choose to leave at any point in time, but it's polite and encouraged that you tell people you're thinking about leaving and you commence hand over procedures if possible.

**Nadia Eghbal:** That's what made me start thinking about it, because it is like with a job, where... I imagine for people - if you're really passionate about your job and you might be afraid to leave because you're like "Well, who's gonna everything that I was doing?" or "The next person may not be as good" or whatever and it's hard to leave a job, but I mean... In the end it's possible to just quit and move on, not because you hated the company or it didn't work out, but you're just sort of like "I'm done and I've done the things I wanted to do." I feel like there's something to be learned there for the open source as well, or any kind of -- I mean, whether it's volunteer or a paid hobby/activity.

**Ryan Bigg:** Yeah, absolutely. I agree.

**Nadia Eghbal:** Something that Adam was musing about that I also wanted to ask you about is do you think that we're hearing more about burnout now, just because open source as a practice or community has started to mature, and there's sort of this question now if it's not just about creating stuff in open source, but now we're kind of getting to the point where people are starting to wanna age out of a project or move on? Do you think that's contributed to why we talk more about burnout now?

**Ryan Bigg:** \[39:51\] I think that's definitely the case. I think what we're seeing is the first generation of open source contributors - or at least on GitHub projects... I mean, I'm only new to this game; open source has been around longer than I've been alive. I think we're seeing these first-generation open source contributors go "I'm no longer passionate about this project. I'm thinking on moving on, but my work is going to crumble into dust and it will be meaningless if I do so", and then they burn out from it and move on.

So what we should be encouraging is the second generation or next generation of open source maintainers to come along. Encourage the first generation to say "By the way, I'm looking for help", exactly like what I should have done. "I need help with these projects. I'm trying to maintain them, but I'm struggling." It's okay to admit defeat in that way.

So when they do that admission, then they should look around the community, like "Who's been contributing to this project? Who can I tap on the shoulder to be the next maintainer or the next group of maintainers for this project?" That's probably why we're hearing more about burnout, because that first generation is getting tired.

**Adam Stacoviak:** Coming up we talk with Ryan about getting paid for open source work and whether or not money actually helps. We talk about his thoughts on compensating open source developers, funding an individual contributor versus funding a project, a happy path to maintainership if there is one, and so much more. We'll be right back.

**Break:** \[41:25\]

**Nadia Eghbal:** I wanted to touch on what it's like to get paid for open source and how money and open source mix. When you were at Spree, you were being paid to work on open source, and it sounds like even some of your open source work now is on work hours. Do you think that the presence of money helps keep you in open source?

**Ryan Bigg:** Certainly. It absolutely does. If for instance I was not paid to work on Spree, I probably wouldn't have done as much work as I did. It allowed me to live my life, have my roof over my head, have food on my table sort of thing, for two and a half years. Within that two and a half years I did a substantial amount of contributions to Spree; I think it's over 4,000 commits. Without that pay I wouldn't have contributed 4,000 commits; maybe 40, maybe 400, who knows? But it allowed me to do a lot of good work on open source, and not worry about where my next -- how I'm going to pay rent or how I'm going to get food. It was really beneficial.

With regards to culture and paying me to do open source contributions, they benefit indirectly from that because we're using the Elastic package at work, and if that Elastic package didn't exist, then we would probably use another package or somebody else would have to contribute to another open source project to do the things with Elastic that we wanted to do. And even then we would be contributing to open source, so either way we're going to have to spend time, and time is money, so we're gonna have to be spending money on open source contributions, too.

**Nadia Eghbal:** Are there tradeoffs to it? Are there things where being paid to work on open source makes things harder, or just compromises you in some way?

**Ryan Bigg:** Yeah, your ethics are kind of compromised in the way that "We're paying you to do open source, so these are the things we think are important and these are the things you should work on." At Spree, because I was paid to do Spree work, you've got this large group of work that you can do, and there's a large boundary around the work that you can do; there's this huge area of the work that you can do. There's a never-ending stream of work there, and you could contribute to the Spree main project, or you could contribute to extensions, you could contribute to the Google group, you could contribute to the IRC discussions... And they didn't mind as well that I was contributing to other things at the same time.

If I was paid to work on a particular open source project -- let's say I worked at Facebook and worked on the Babel project for instance, even though I'm not a JavaScript developer; a large open source project like that, used by thousands of people, because I'm paid by Facebook, Facebook gets their say of what I contribute to Babel, for instance. I think that compromises the ethics in that regard, because they get the features they want, rather than the project getting the features the community wants/needs.

**Nadia Eghbal:** Yeah, it's a different kind of project, right? Which I guess again goes to show that open source is not all the same across all projects.

**Mikeal Rogers:** I mean, I think it's rarely that direct... It's usually pretty indirect, right?

**Ryan Bigg:** Yeah, it is... It's not like "By the way, we're gonna fire you if you don't add these features in." It's never that direct.

**Mikeal Rogers:** Yeah. I think maybe a better example is the Go project, where the majority of the committers are at Google, and Google's certainly not telling these people what to do, because they are the kind of developers that are not told what to do... But they are sort of constantly inundated with Google's problems, and Google's scale problems, and the types of engineers that Google has, and that really paints who they view as their audience, right?

**Ryan Bigg:** That's exactly right, yes.

**Nadia Eghbal:** \[47:39\] I guess part of me wonders what makes open source not something that is fun as a volunteer hobby...? That's sort of going through my head right now, but then I think "Well, some people do enjoy contributing to open source in their spare time... And I guess I was just kind of thinking about, like, are there different stages of open source either in your own career as a contributor, or different stages of a project where doing it for free or doing it as a volunteer makes sense, and then there's a point where it's kind of like "I need to be paid for this, or it doesn't work"? Does that seem coherent?

**Ryan Bigg:** Yes, it does. it does absolutely seem coherent. So when I was starting my contributions to Spree, it was a lot of times of doing Google group answering, and a couple of issues here and there, but nothing substantial. And then working on the project itself is enjoyable, so when I was contributing to other open source projects, you start out like "Oh, I'm just gonna make this contribution here" and then "It feels great, because people get to use my code; that's mainly why I contribute to open source. There's going to be somebody else out there - there's a market, in a sense, of people that wanna use my code", and that's a good feeling. "I wrote something that people are using and benefitting from", and that is why you contribute to open source in the first place.

But then open source is not free as in beer, it's free as in puppy, and you have to maintain it, and people come up with weird and wonderful feature requests, and bug reports that are literally a single line of like "It didn't work." I'm like, "What didn't work?" That grinds on you, that just gets to you over (I don't know) years and years of maintaining the same open source project.

And you know, your interests change over time as well. That's another issue. You get started with an open source project and you love it and you work on it every day because it's something that you're passionate about. Then if the passion kind of fades with time, you're like "Well, that's no longer interesting to me, so I'm not gonna contribute to that anymore."

The money helped a lot with Spree. While I wasn't in love with the code as much as I was at the start, after two and a half years, the money kept me going. I was like, "I get paid to do this; I'm just gonna keep thinking about these problems and trying to solve them, even though the code is no longer enjoyable to work with", like it wasn't really my passion at that time, at the end of it.

**Nadia Eghbal:** It's almost like there has to be some reward at some point, whether it's building your reputation that's a suitable reward, or at some point then it just kind of becomes money.

**Ryan Bigg:** Yeah, the reputation definitely came out of that, and I still get approached at conferences, like "Oh my god, it's Ryan Bigg. Oh, it's him!" "Oh, hello." "You wrote the book, you contributed to Spree", I'm like "That was years ago... I've done a lot more now." I don't know, it's very strange having this reputation... This reputation is a niche of a niche; the general layman view of a celebrity is somebody who's famous everywhere - their photos are in magazines and whatnot. And so when I tell people that I'm a celebrity - jokingly, mostly - they're like "Oh, what do you do?" and I say "Well, I write books and documentation and I contribute to open source", and they're like "Oh... What, what do you do?" \[laughter\]

But in the niche of a niche of a niche of a niche where we exist, in this Rails world, people are like "Oh my god, it's Ryan Bigg!" It's so weird to see that change of people who are like "Oh, I don't care about you", and other people who are like "Oh my god, it's you!"

**Nadia Eghbal:** It's kind of the best of both world, right? Because then you can go to something else outside of open source and no one knows your name.

**Ryan Bigg:** Yeah, that's right; lots of anonymity there.

**Mikeal Rogers:** It reminds me of like actual celebrities that are on a sitcom, and then they move past that sitcom and do like major independent films, and everybody's like calling them the name from their character 20 years ago... \[laughter\]

**Nadia Eghbal:** Yeah, totally.

**Mikeal Rogers:** You're like, "I've done more than Rails, come on!"

**Ryan Bigg:** \[51:54\] Oh no, that's okay... Any contribution is fine; they can name anything I contributed to. I don't care if it's Rails 3 in Action or Multitenancy with Rails. Anything. It's just good to be known, and I try to get to know them as well. I just don't want to be like hero worship, but I wanna know who is doing the worship, if that makes sense. Because by talking to these people and not just going "Oh, that's good that you like what I do." I'm like "What do you do?" and I find out a lot of interesting stuff in the community through just that. So the fame comes with a lot of finding out information from people and finding out these cool things they're working on, or projects they're looking into. It's really good.

**Nadia Eghbal:** Does any of it surprise you, that people from totally random walks of life that take interest in it?

**Ryan Bigg:** Yeah, it does. Absolutely. I had all kinds of people - old, young; all sorts of things - approach me, and it's just... And when they come up to you and they're like "I read your book, and now..." So, that's right. I went to a Rails meetup in Sydney, and this lady called Metanya introduced herself to me and she said "Hi, I'm a real estate agent. Or at least I was until I read your book. Now I'm a Rails developer, so thank you." That was awesome, and I keep thinking of that when I'm writing and I'm getting down in the dumps about that, kind of that writer's block, like "Oh, I'm never gonna finish this project; no one loves me anymore and this project is no longer useful to anyone." I think well, maybe this project will be useful to another Metanya down the line. Maybe somebody will read this book and go 'I understand this concept now. I'm gonna become the most amazing Rails developer', or the most amazing whatever developer. It's a really good feeling.

**Nadia Eghbal:** That's awesome.

**Mikeal Rogers:** There's been a lot of self-reflection -- I'm just trying to think, like, is there anything else that you've learned in the last few years about managing your workload, and just sort of being better at managing your work and not burning out, and just kind of feeling happy in your daily life? What would you tell yourself two years from now, and by extension, to a lot of developers out there, before they hit burnout as well?

**Ryan Bigg:** So I'm good at really thinking about how terrible I am at managing my workload, and my wife is also really good at thinking about how terrible I am at managing my workload; not only that she's good at telling me how terrible I am at managing my workload, and...

**Mikeal Rogers:** Your advice is to get married? \[laughter\]

**Ryan Bigg:** My advice is not necessarily to get married, to have somebody like a close friend for instance - even that; you don't have to go the whole way of getting married, but somebody who can say "You're being a ridiculous idiot. Stop working so hard. How can I help you? How can we stop this burnout? You're grumpy, you're really easily agitated, you're not paying attention to these things... Why are these things happening?" and having somebody there to talk through it is great.

For a new developer - two years from now, I hope that he would know better practices of maintaining workload. If I was able to speak to Ryan from two years ago, I would say it's not that critical that you continue doing all this work. None of it matters that much that you have to kill yourself to do it, that you have to spend all this time doing it. You're allowed to go out and have fun, you're allowed to go out to a movie and watch the movie and not think about open source. You're allowed to go for a walk in nature and not think about open source. You're allowed to go out for dinner with your wife or an anniversary and not think about open source. It's okay, nobody is going to die if you think about open source. It's not important.

**Nadia Eghbal:** It's a good advice for open source communities too, right? Even reinforcing that to each other, and not expecting that the other person is always gonna be there all the time.

**Ryan Bigg:** Yeah.

**Mikeal Rogers:** Yeah, I have a similar story to this, except I've been with my wife for like 12 years now. She would be like "You're being ridiculous now", but now I can actually recognize it before she needs to tell me. This is exactly what happens, actually - there's certain things that she's just never gonna do and I'm never gonna do and we'll slightly annoy each other, and when I start to get really mad about one of them, I know that I'm actually not mad about that, I'm getting sick of my job. \[laughs\] Literally, I'll start to be like "Man, she did not refill the water thing again that goes in the fridge", and I'll start to get really mad about it and I'll be like "Ohhh, I need a new job..." \[laughter\]

**Nadia Eghbal:** \[56:28\] That's a good degree of self-reflection there. \[laughter\]

**Mikeal Rogers:** It's taken a long time to get there, but yeah.

**Ryan Bigg:** I realized that when I come home grumpy it's probably not a good thing -- if it's a single day, like, everyone has bad days. People ask me like "When does programming become easy?" It doesn't. You just have more easier days than you have hard days. You still have those hard days. And when you have those hard days you come home grumpy. But if you have a series of hard days in a row or hard weeks in a row and you're constantly grumpy, that wears you out and it wears the people around you out. Personally, I need to realize when I'm getting grumpy and how long I've been grumpy for, and go "What's making me grumpy and what can I eliminate that..." -- eliminate sounds bad, doesn't it? It's like I'm asking for an assassin. "What can I get rid of out of my life that will make it easier for me to be happier? Can I stop contributing to open source? Do I need to put down the writing projects that I'm on? Do I need to pay more attention to my wife and my daughter? What do I need to do to make me happy?" It's about setting aside that time to have that retrospective thought of "What's been making me grumpy and how can I fix it?"

**Nadia Eghbal:** Hypothetically, is there anything in open source that would need to change or that could change that would make you come back and start contributing more regularly?

**Ryan Bigg:** You could pay me to do it. You could pay me what I get paid to work full-time on proprietary software to work on open source software, just like I did on Spree. That definitely helps a lot. To come back to open source projects -- I just simply don't have time anymore. I've got my wife, I've got my daughter, I've got work, I've got stuff I do on the weekends, I've got stuff I do at night... There's just no room in the schedule for it.

When I do have free time is on the train to work - it's half an hour in and half an hour out. I spend that time writing usually, so there's really no time for open source.

If you gave me a full-time job where my purview was literally "contribute to open source however you see fit" and you paid me a livable wage, by all means, I'm open to job offers.

**Nadia Eghbal:** Good answer. When I've seen you advocate for people getting paid to work on open source, do you think that just has to come from companies, versus raising money for yourself, or whatever?

**Ryan Bigg:** Yeah, I'm a hard left-wing kind of guy and socialism is high on my agenda, and it's not high on people who have the money, it's high on people who don't have the money. With regards to that, while I would love if Culture Amp would hire me purely just to contribute to open source projects that they use, or funnel money into open source projects they use... Like, we use Webpack extensively, we use React extensively, Babel, Rails, Ruby... We're not contributing anything back to these projects directly, and while we do encourage open source contributions that are relevant to the work we're doing now, we don't encourage developers necessarily to go trolling through the open source projects and lending a hand.

\[59:55\] It's not like we have a day where it's like "Go and work on open source, it's fine...", because it doesn't make sense financially for the company to do that; you're wasting the company's -- that's why they say it's wasting the company's time contributing to these open source projects. But the way I personally see it, you're not wasting the time -- you're spending money now to save money later. You're spending money now to maintain these open source projects, and because they are maintained in a good state, those projects will be around longer and you'll be able to benefit from them longer.

For instance, let's say Spree, which uses the Active Merchant gem extensively - if that was maintained by one person... It's maintained by Shopify, but if that was maintained by one person, and that one person decided to quit, and that project then fell into disrepair, Spree would have to pick up the maintenance of Active Merchant, because it seriously depends on it, or the community would need to exist around Active Merchant. But because Active Merchant belongs to Shopify, Shopify pays its developers to work on Active Merchant because it's important to Shopify's business.

With a project that isn't directly important to a business, the business doesn't see any value in contributing to that open source project. Culture Amp doesn't see any value in, well, I'm speaking for another organization. My view of Culture Amp, my experience of Culture Amp is that there isn't a view of "We should contribute more to Rails and spend time helping out Rails." Even though we usually use it extensively, we shouldn't spend time contributing to React and Webpack, because that isn't relevant to the work we're doing right now, and that isn't earning the company dollars. But in the future, if those projects were unmaintained and fell into disrepair, then we would need to do work and probably switching to a different project, and that would be more money that we would spend doing that work, if that makes sense.

**Nadia Eghbal:** So wait, are you advocating for only in a situation when a company directly benefits should they encourage those contributions? Do you think that's right, or do you think it should be different? I can't tell which side you are.

**Ryan Bigg:** I'm sorry, yes, I did speak for a while...

**Nadia Eghbal:** It's good, you spoke both sides really well.

**Ryan Bigg:** Thank you. It's like that quote from Lord Of The Rings, if you're gonna ask the elves, they're gonna say "Yes and no." I'm on the side personally of companies should probably allocate at least one, two, three developers to work on open source, and not necessarily full-time, but perhaps a day every two weeks would be good... Just to say, like, "Go and work on whatever open source project you feel valuable", and if there's no open source work, then they can come work on regular work.

I think because these open source projects are vital to the work that the companies are doing - it's like you report, the roads and bridges, right? It's the underlying infrastructure to these businesses; if these open source projects didn't exist, these businesses would struggle. If Rails didn't exist, Culture Amp would probably be on Asp.net, and I wouldn't wish that on my worst enemy. If Active Merchant didn't exist, there'd be all this buggy payment process, and someone would have gotten hacked, or credit card details would have gotten stolen, or something. If Webpack didn't exist, we'd all be stuck using Gulp, or whatever else there is.

\[01:03:14.11\] These are vital parts of the infrastructure, and we do need to spend company's money - and we do need to spend time convincing the people with the money at the companies to contribute developer time to these projects, because they are our infrastructure and it is vital that they are maintained. So that's what side I'm on.

**Nadia Eghbal:** Awesome. Well, I can't think of a better note to end on.

**Mikeal Rogers:** Yeah, me neither.

**Nadia Eghbal:** Thanks for coming on, Ryan.

**Ryan Bigg:** Thank you!
