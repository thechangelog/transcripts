**Jerod Santo:** So on episode 483 of the show we were talking with Jessica Kerr, and she brought up this practice, she was calling it ensemble programming, formally known - or also known - as mob programming... And I had heard of it. Adam, it was brand new to you...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Very interesting... And we were like, "What's up with this?" And so she mentioned Woody Zuill. And so we went out and found Woody Zuill and we brought him on the show. Hey, Woody. Let's start with the name, mob programming, starting to be called ensemble programming... Arose by any other name, smells just as sweet... What's your take on the naming of this practice?

**Woody Zuill:** Well, first of all, when I first started talking about this, I didn't really have a name for it, but I was thinking of it as whole team programming. And the very first talk I gave on this was at a conference where they had an open stage. If you were there-- I was there to do a talk on another topic, but if you had a topic that people were interested in, that you wanted to just take to the open stage, you could do that. So I signed up to talk about it. And I put on the slide, the first slide, "Whole team programming". But as people during this conference were coming up to me and say, "Boy, I heard about this thing you're doing. I want to know more about it", they were all calling it mob programming.

So clearly, somebody there had been telling others about it, and they were calling it mob programming. Now, that came from a name that I was using-- actually, the first writing I found with mob programming in it was from around 2001 or 2002. That came from the Extreme Programming conference that year, so that's a long time back now... And I kind of liked the idea. It was very similar to what we were doing. and I didn't mind it being called that.

\[04:25\] I had been using the term mob programming when I was doing user group meetups, where I would introduce pair programming, and then this programming with more than two people. And I would say, "Yeah, with pair programming, it can be pretty calm if we really watch for it. But when we start adding more people, it becomes chaotic." And we don't want to be chaotic. We don't want to be like a mob, where everybody's just-- they picked up their pitchforks and their torches, and they all have a general idea of what they're doing, but there's really no concentrated focus. We don't want that. So we don't want an unruly mob. We want a ruly mob. So that was just a little-- I joke about stuff too much. That was just a little joke, but that really stuck.

And so at this conference, people were coming up and saying, "Well, what is this thing they're talking about?" So I put together a talk, and I put "Whole team programming" on it, but everybody was calling it mob programming. So by the time I did my second talk, I started calling it mob programming.

As I started traveling the world, the first time I ever went outside of North America was to speak in a conference in 2013 in Sweden. And in Sweden, the idea of mobbing is bullying. And so this was-- it had a negative connotation, perhaps, and yet my talk was standing room only, there was lots of people there, and it was well accepted, and they just started doing this work, which I was calling mob programming then, all over Sweden. And they kept calling it that. But I can see where it's less than an ideal name. And if we don't take it with a sense of humor, then it's going to be maybe difficult for some people to accept. And I even then was saying, "I don't care what you call it. We're just a team working together. So call it whatever you want. Whatever works in your circles, call it that." So let's make it really clear - we are really the first visible group that started doing it, the team I was working with, but people have been working together since probably before they could call us humans. I think we're partly humans now, maybe, or we wouldn't exist at all if something before us didn't figure out how to collaborate. So I didn't invent anything. It was really just, "Why don't we do this in programming?"

So I'll add one last thing to that. In 1999, I worked at a place where I was put on a team. It was a three-month contract that they extended at the time, so I was there for six months. I don't think in that six months we ever did anything that you would call teamwork, and that started puzzling me. Why do we say we're on a team when we're not really doing anything? Why did we use the name team? And that really got me thinking. I started experimenting with more people sitting at a single computer. I had already learned about pair programming... So there's the whole, long story. You've asked a little bit, and I gave you too much. That's going to happen for the rest of today.

**Adam Stacoviak:** The details I think is what's really important, right? The nuance and the details is what really gets to this practice. And I like your obvious analogy that we've been working together as human beings for a very long time. This isn't a new thing, to team and work together. But I think applying the practice to a discipline, to a team that creates software and how that actually manifests is kind of crucial, because there's some sort of boundaries and some sort of limits that you want to set. And similar to TDD, or extreme programming, or agile, or scrum - they all have their limits and their parameters that make it a practice worth practicing.

**Woody Zuill:** Yeah.

**Adam Stacoviak:** The name, however, can inhibit the ability for things to be adopted. So in that sense, I kind of wish it wasn't called mob programming... I do like whole team, because that's kind of interesting.

**Woody Zuill:** Sure.

**Adam Stacoviak:** But--

**Woody Zuill:** So can I interject something on that?

**Adam Stacoviak:** Sure. Yeah.

**Woody Zuill:** \[08:08\] I don't think anybody would still be talking about this if we hadn't originally called it mob programming. Because the reason I got invited to that first conference in Sweden was they called me up -- or they sent me an email and they said, "Can you talk about these two topics?", that they saw me tweeting about. And it was very controversial. So I put together the descriptions of the talks and sent it to them, and they sent me back an email saying, "Couldn't you make it a little more controversial?" \[laughter\] So the two topics were mob programming and no estimates. So these are two things that I'm kind of deeply in the roots of.

So I think that without having called it mob programming, I probably would've never gotten invited to some of these conferences, and I'm not sure anybody would've paid attention at all. That the name is going to change over time - I'm really up for that; whatever it's going to be. Right now there are a lot of people calling this ensemble, but I don't think it has really excited the imagination, and I'd like to see what happens with that. I sometimes call it ensemble. Yeah. So I'm kind of open to whatever.

**Jerod Santo:** I like ensemble because it hearkens to - at least in my mind - a cast of awesome characters. Like, when you have an ensemble show.

**Woody Zuill:** Sure.

**Jerod Santo:** It's like, everybody here is a star and has their own unique-- it's not like staring this person plus the surrounding party, you know? It's not this person's band, it's an ensemble. And I really like the connotation there. That being said, I'm also not from Europe, so I never had any negative-- I mean, obviously, a mob can do bad things, but I never had the bullying connotation on mob.

**Woody Zuill:** Yeah, it can have a negative side to it. I'm perfectly open to understanding that.

**Jerod Santo:** Yeah.

**Woody Zuill:** I agree. So yeah, this is a kind of a difficult thing with everything. And when you're writing software, names of things are really important. Code doesn't express itself well if we name our parameters and our method names and stuff with nonsense or names that hide the real meaning. I've seen methods in code that if you read the name in the method, you would think it did maybe something very different than what it actually does. So names are important. We all know the story of George Foreman named all his kids George.

**Jerod Santo:** Right.

**Woody Zuill:** Now, I don't know how true that is, but we've got to think about names. If you yell "George" and the wrong George comes... You know.

**Jerod Santo:** I think he was thinking about names. I think he was thinking about his own name and how much he must have loved it.

**Adam Stacoviak:** Yeah.

**Woody Zuill:** Yeah, maybe that was it. So names are important, and I agree with that. I don't care what people call it. The day after I'm no longer on this Earth, I'm not going to be thinking about that at all. So I can start not thinking about it now. Whatever you want to call it, call it. Just find a way to work together. Collaboration, I think, is really important. As a matter of fact, if I could have called it colab programming I probably would've done that, but that kind of has its own meaning in music, so I don't know.

**Jerod Santo:** Well, I guess we can all, as a community, collaborate around the name and promote other names that we think might replace mob. I think for the sake of this conversation and having you here, Woody, we're just going to call it mob all three of us today.

**Woody Zuill:** Sure.

**Jerod Santo:** That way we're just referring to one thing and not accidentally confusing people. But really, it's the idea, this practice, which is somewhat kind of radical, in the sense of like how many people can you get into one room and have more productivity? I mean, it just seems like it's counterintuitive, and I'm curious, what's the case for it? Because even as Jessica was talking about it, she was romanticizing or she was speaking highly of it... And I liked what she was saying, but still, deep down inside, I'm like, "Still, is it actually better though? Because it seems like it's actually going to be worse."

**Woody Zuill:** So yeah, it can easily be worse. Anything can be worse, right? You can eat a piece of candy and that's pretty good. You eat like two tons of candy, maybe not so good.

**Jerod Santo:** There you go.

**Woody Zuill:** \[12:10\] So yeah, anything taken too far. But I would, first of all, start with this. We bring people together, in a company, in an organization, in an effort like this right now... There's three of us here. We bring these people together because we want to accomplish something that nobody would be able to accomplish alone. Because interviewing yourself would probably become a popular thing if you did it well enough...

**Adam Stacoviak:** Sure.

**Woody Zuill:** ...but that would be a weird \[unintelligible 00:12:33.07\] thing. So yeah, anything that we do can be done solo. I'd programmed for 15 years -- when I started programming in 1982, I believe, I wrote my first line of code, and I worked alone for 15 years. I was mostly writing software that was used in a little company that I owned, or a couple little companies, and I was often the guy with the idea of what software we needed, the guy who would determine what it did, the guy who would write the code, test the code and use it. So I was a whole team just in myself.

As soon as I started working for other people doing this, I could see that the communication doesn't work as well when I'm talking with other people. And they could write something down as clear as possible, and then when I worked on it, it turns out, I misunderstood, or they miswrote. And so I started realizing that when we're working with other people, I want to get a better communication, and I, very shortly after that, learned about pair programming. And I loved it, because we got more work done, it was better done, it was more what the customers want... A lot of good qualities came from that and I learned a lot. So I started doing the pair programming.

But after about five years of doing that, I had gotten to the point where I didn't want to work unless I had a pair. And a lot of companies in those days - so this would've been in 2002 or 2003 - the boss might even say, "You're not allowed to pair program." There was this attitude that, "We're paying twice as much for the work if two people are sitting there and working on it. They've got to be working separately. We bring people together in a company because we want them closer, we want all the skills they have, and then we make them work separately."

Now, I saw that at more than one company. It was a real pattern. I saw at four or five companies where they wouldn't let you pair program. So there's this mix-up here, I'm not quite understanding... And then I got on that team in '99. We were put on teams. There were 200 developers. Every developer was on a team, but the only purpose of the teams was they were working on similar parts of the features; each team had their focus, but they never did anything as a team, and that really got me thinking about this. It's like, we brought them all together - why don't we accentuate our ability to work well together?

**Adam Stacoviak:** Part of the reason that it makes sense is that when you have a team - like you had said before, you were in a situation where you're like, "Well, we're a team and we're not working together. How do you call that a team?" And part of, I would say, mob programming, the benefits of it would be to have consensus, right? A shared understanding, right? Part of delivering greatness in any organization is clarity, and if the team is not clear on what the expectation is and the outcome should be and what the customer needs etc. - well, then you don't have clarity and you don't have consensus. And so basically, you have a lot of misfirings. Or if each person is their own end and they're not taking the thing the right direction, that can end up badly for the product and the company. But it seems like the process is meant to bring together, provide consensus, provide clarity, and get a better output.

**Woody Zuill:** You bring up an extremely good point. I do workshops on this, and I have an exercise we do kind of early on, before I've tainted everybody's brain with my thinking... Because to be clear, what good is my thinking? I'm just sharing some ideas. And one of the things I ask is, "Why would we do this?" It's like an exercise to - before I told you why we would do this, think it for yourself. Imagine what might be good about this. And I usually get about-- if I have a team of 20 people that I'm training, maybe we'll get 30 responses or 40 responses. And one of them, the one that shows up the most is knowledge sharing. This is something that's really difficult in a lot of companies. And not everybody needs to know the same things, but this is something that really happens with this.

\[16:13\] But you were talking about the idea of consensus, and you used the terms "shared understanding". So the shared understanding is really important to me, and the consensus will come after we've had a chance to get a shared understanding. Then we can explore possibilities. And until we have a shared understanding -- I worked with a team once (oh, gosh) 15 years ago, where we worked on something... We picked it up to do during \[unintelligible 00:16:38.23\] and we started on it. And after we were at it for three or four days, we thought we understood it. But after three or four days, we felt we understood it less than when we started working on it.

So we were starting to realize we didn't have a shared understanding, and we called in the person who had written the requirement to get their take on it, and they read it for about 10 minutes, and then they said, "I don't know what I meant." \[laughter\] That was just so classic, because we thought we understood. Then as we got deeper into it, it didn't make sense to us, and the person who wrote it no longer could remember, because they wrote the requirement maybe six or eight months before we got it.

**Adam Stacoviak:** Oh, my gosh.

**Woody Zuill:** And I think what happened was they were under pressure to meet a deadline, to complete a set of requirements they were working on, and they rushed through it. So we need that shared understanding. And this points out something else. The team, ideally, in my opinion, is made up of more people than just the ones who are actually typing code or who write code for a living. I like to see the product owner, the testers, the database expert, the people who would deploy this stuff or set up the infrastructures. I like to see them all working as a team. That would be ideal to me. And I've accomplished that for myself on several teams, and I went to other companies where they've already, or were doing that. I think that really brings a lot of value. And there's a lot of reason I think it works. I don't know if we have time to go into all that.

But just by having us work together, we get that knowledge sharing and shared understanding. We may not still have agreement. Agreement comes later. We have to start from a point of understanding, and it will clarify itself over time. It's in the doing of the work that we discover the work that we must do. That doesn't happen by talking about it, and that doesn't happen by thinking about it. We often get to the point where this is really critical.

**Jerod Santo:** So that ideal team - you said you would like to have the product manager, the engineers, designers, deployers, database people, all on the team; I agree with that. Isn't the idea with mob programming though that they're not just all on the team, they're all actually physically - or maybe virtually - collocated in the same room, working together for the entire span? Is that the idea? Because that's where I would disagree, because I feel like the DBA should be there for certain aspects of the conversation, but then they can move on and come back... And it just seems like if they're there the whole time, they don't have to be doing things the whole time, and so what are they doing there? They could be doing other things.

**Woody Zuill:** So let's talk about that for a minute. This is a big stumbling point for a lot of people. Now, I'm not claiming that everybody has to sit together and work together all the time.

**Jerod Santo:** Okay.

**Woody Zuill:** There is a heuristic that we would use. But I will interject this - I have found that when the team can be formed in such a way that all the team members can work together all the time, we get a very different dynamic and approach to software development at all. This is a very good thing.

Normally, we think we need to divide the work up and have people working on it separately so we can take advantage of the output of these individuals. And I would argue that we are not interested in the output of the individuals. That's a false, that's a proxy measurement. I think that there are other values that we could be thinking about, that would take us beyond that. So I do see the value, the idea that-- and this is what most companies would do. I've been in a lot of companies - maybe you've experienced this - where the people who do the database work are in their own department.

**Jerod Santo:** \[20:22\] Yeah.

**Woody Zuill:** You make a request of them. They will find the time to meet with you and talk about the requirement. Then they will find if it's worthy of being done. They will find the time to schedule somebody to do that work. We've automatically extended the queue of this work by a great amount by doing that. So this really comes down to the concept of queuing. I'll quote Donald Reinertsen, "The majority of waste in product development is queuing", or the cause, he would say it that way. The root cause of the majority of waste in product development is queues.

What can we do to remove that, if that is true? I'm not saying it's true. I read a lot of books. I never take anything as truth, I take it as something worth thinking about. So if that's true, how far can we go -- and this comes from Kent Beck, you know... How far can we go towards turning up the collaboration before it does become no longer useful to us? There's so much more than thinking productivity is important. I don't think productivity is important at all. I think being effective is important.

So productivity is like another proxy measurement that a lot of managers need to use, because that's how they think work should be, and they do it. But there's a famous quote from Russell Ackoff, I think, who said, "Because managers can't figure out how to measure what they want, they start wanting what they can measure." This is like a critical thing to think about. What do we do in our daily work that we do because we can't really figure out how to do things a better way?

Here's the thing... If we're focused on flow, that is taking something from beginning to end directly, there are many benefits we get from that. As soon as we start introducing queuing, we also have to introduce the inventory. Inventory is as big of a waste-- well, maybe not \[unintelligible 00:22:10.14\] but I'd say it's a pretty big waste in the lean term of inventory. Inventory is anything that we've started on that hasn't yet been delivered to the end user. In other words, they're not getting value out of it until we deliver it to them, so it's waste. This is honest waste in the lean term for inventory. How much inventory do we need to introduce to make it easy for us to work separately from each other? And this is the problem we usually see.

If I'm working on something and I'm blocked because I have to ask somebody else a question, and they're not here for me to ask them that question, I'm now in a queue, waiting till I can hear back from them. I send them a message, an email, I even called them up and left a snarky remark, because "Why aren't you getting back to me", right? And so I'm in a queue, so what do I do? The common solution is work on something else, that we have introduced a waste to solve for a waste, and that doesn't really work.

**Adam Stacoviak:** Yeah.

**Woody Zuill:** We've introduced inventory to solve a queuing problem, but we didn't solve the queuing problem, we solved the "We are not busy right now", problem, and you can see that snarky tone come out. We are doing the wrong thing. Instead of solving the problem, we're masking or hiding the problem. So I've only begun the conversation here. It really does seem like that database expert should be just focused on database stuff, but there's something else that happens. If you don't mind me going on, I'll talk about that. It's silos.

**Jerod Santo:** I do. I want to interject for a second.

**Woody Zuill:** Please do.

**Jerod Santo:** So if we look at the way computers have achieved massive - let's just call it effectiveness, because you like that term... It's that they do more than one thing at once. So they have multiple -- the parallelism.

**Woody Zuill:** Absolutely.

**Jerod Santo:** \[23:56\] And so while I understand what you're saying with inventory and with queuing, I guess the question that comes out of my thought right now is, inside of this team, is there room for dividing and conquering inside of the team? Because it seems like-- you know, when you read the Wikipedia, it's like, well, there's only one computer. So you've got six people, eight people, four people, whatever it is, all there together, and one driver. Well, sometimes there's two things that need to be done, and we could be more effective if we were doing both of them at the same time.

**Woody Zuill:** Certainly. And that's just a thing for the team to decide. There's no rule that says you're just going to sit here the whole time, whether you're contributing or not. So mob programming doesn't replace pair programming or solo programming. It's just another way of working.

**Jerod Santo:** So is it something you do some of the time, and then you pair other points, or...?

**Woody Zuill:** Exactly.

**Jerod Santo:** Okay.

**Woody Zuill:** The team would decide.

**Jerod Santo:** Okay.

**Woody Zuill:** So let's say we're in the middle of something, and somebody goes, "Oh, you know, I don't think we all need to focus on this. We all know how to do this part. It's going to be easy enough if I just go off and do it alone." And if the team says, "Yeah, that's great..." And actually, the way I approach it is if somebody expresses an intent and we don't have some really critical reason to deny it, we would never. But often, somebody might say, "Yeah, but we're coming to a part we're really going to need you for. Can you go off and do that later?" So the team can decide.

**Jerod Santo:** Sure.

**Woody Zuill:** There's nothing saying-- now, I've watched teams work where they come together first thing in the morning, they have a really quick conference with the product owner because they already know what they're working on, and then they get down to their work. And then about an hour into it, somebody says, "Oh, yeah, we'll go off and do this. You guys keep working on that", and they just do it. And then maybe they come back together a half-hour later when that thing's done, and then somebody says, "I'm going to go do this. I've got to go talk to someone, too." This is dynamic.

So I'm just trying to say something we could probably better show in a video, but you can see it's dynamic. The team isn't saying, "This time from 3:00 to 7:00, we're going to be doing", depending on what your time zones are, "we're going to be mobbing. The rest of the time we're working solo." You can do that.

I've worked at two places, one where we mobbed three days a week for three hours each day, another place where we mobbed three hours a day every day. But I think that what we find if we get good at this is we'll want to do more and more of our work this way. But there's nothing saying it all has to be this way. Sometimes we need to be alone. As a matter of fact, we can't always drive a result. If we have the solo workers or everybody together, it doesn't matter, we can't force a result. After a few hours, we might go, "Boy, we're just not making progress on this", and like my dad used to say, "Let's sleep on it." So there's a lot of research that's been done on that. I often ask teams, "When do your best ideas come to you?" So I'll ask you guys, when do your best ideas come to you?

**Adam Stacoviak:** Check our transcripts, we've told them a ton of times. It's in the shower, for a walk, for a run, you know...

**Jerod Santo:** Yeah.

**Woody Zuill:** So those are-- the most common one I hear is in the shower.

**Adam Stacoviak:** Yeah.

**Woody Zuill:** The second most common one I hear has to do with sleep. Just before I fall asleep, just after I wake up, or in the middle of the night. And the third most common is on a run or walking. And I know some developers who just get out and they'll go, "Ah, God, I'm not sure what--" and they go take a walk.

**Adam Stacoviak:** Yeah.

**Woody Zuill:** Now, some of them will think about the problem while they're walking. There was some important writing on this a few years back where sometimes you just need to release it, and go do something else. Go watch a movie or whatever. The concept is it needs to incubate. So yeah, mob programming doesn't force that we're going to get a result, but it seems to make it more likely that we'll come to a good result quickly. This is what we've noticed. It's not about speeding up our work. It's about-- so you've mentioned this, divide and conquer.

**Jerod Santo:** Yeah.

**Woody Zuill:** The term divide and conquer really means divide the enemy, and then we put all of us on one aspect of that enemy. We don't say, "Okay, you soldiers, we're going to take three of you, go fight those guys, you three, go fight those guys." We want to split up the enemy, not us. We don't want to split us up. We then can focus all of our effort on one thing, where we have a chance of winning. And this is a concept that I think is really important here.

\[28:08\] We've found that when we-- so we've got this thing we're going to do, we break it down as small as we can. I like to use index card to just rip it up and show, this is the smallest thing that we can do. We don't estimate it to be small. We just can't break it apart any further, which means that's as small as we can break it down. Now we get that done. Now we look at the next thing. Almost always, we're going to pick out something that seems important to us, something that seems it could give value to the customer. We don't need to get too picky about these things. And then we just knock them off, one at a time. So we're dividing the work, but we're putting all of our force on that work.

So I would go either way. If you feel it's best for me right now to go work alone, you do it. And the team doesn't need to approve it. At any time if you feel you've got to be alone, you just go be alone. You might want to go take a nap. If your good ideas come to you just after you wake up, maybe you want to sleep more often. So lots of possibilities.

**Jerod Santo:** Well, I like the flexibility that you're speaking of now, because I think the read that I have - I guess it's more legalistic, and maybe that comes from most of my experience with organizations that are pair programming. It's like, "We're going to pair program. All day, every day."

**Woody Zuill:** Right.

**Jerod Santo:** And so when I think of mob programming, I think of that as like pairing with more people.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** And so I feel like it has to be legalistic. But it sounds like the way that you're talking about it - I get it, it's like, well, when it makes sense, we do it. And when it doesn't make sense, then we don't do it.

**Woody Zuill:** Yeah.

**Jerod Santo:** And then we come back together and do it again. That just sounds like teamwork to me.

**Woody Zuill:** So finding a way -- I would really want to stress this... Finding a way to think together well is something that's extremely valuable. We kind of ignore that. Now, I have plenty of examples in my past work where I worked on teams that were real teams. So when I was really young, I played music. We had a band. Nobody wanted to hire the bass player. "Well, we're going to have a dance, but we can't afford the whole band. We're just going to get a bass player." Somebody might want that. But at a time when I was really young and I was playing bass, I never got hired to be a solo musician. But with a band, now you have something. The bass and the drums provide the rhythm and part of the drive. You want that in the band. But you also want a couple good singers, and maybe a good guitar player, and in those days, maybe some other instruments. Nowadays I think that all limits are off, but you get the picture. Yeah.

So there are things that having the band is good for, and there's things that you don't need the whole band. And I would say other things I've done, I remember in-- so I ran track in high school. I wasn't a particularly good runner, but I was part of a team. And that team really mostly was a bunch of solo efforts brought together. Now, here's something my coach did and it was really brilliant. He couldn't depend on me to win what my specialty was, which was the two-mile. Nobody knows what a two-mile is anymore, because you don't do those. So that's what I chose to do for mine. And I couldn't always win. But what he would do, he would get to the track meet... I haven't told many of this story. I think it's really quite good. He'd to the track meet, and when you go with the other coach to the referees that are doing it, you make sure that everybody on the roster is there, and that they're on the list of things to do. And he would look for the events where there were only two competitors, because there's always a first place, a second place, and a third place, and he would write my name in for the third place. So if I could pick up five points--

**Jerod Santo:** Smart.

**Woody Zuill:** ...by doing the shot-put, the high jump, the pole vault, as long as I could get over the lowest height, run the two-mile, and maybe do a relay. He could bring in five points, and his very best miler would never bring in more than five points.

**Jerod Santo:** There you go.

**Woody Zuill:** \[31:51\] So I was pretty mediocre, but he had a good idea of how to use the team to its fullest advantage. I was really quite fascinated with that. So you get the picture here - it's that we really need to understand how each individual can be a top contributor, and most organizations don't set us up for that. Most organizations believe these brilliant people we've hired need to be told what they're going to work on, who they're going to work with, the process by which they can collaborate, and so on and so on.

So I don't think I came up with anything great with mob programming. I didn't really invent it myself. I can tell you the story of that, if you want. I was just there as it was happening. But most organizations don't have space to allow this to happen. Everywhere I go to do a workshop, they're kind of ready for the idea, but a lot of places just aren't ready to think, "Maybe there's another way we could work."

**Break:** \[32:42\]

**Adam Stacoviak:** So we've kind of covered the What of mob programming, and kind of some of the Why. There's probably some more we can cover, of course, but where I can really see the buy-in, at least from Jerod and even myself here in this conversation, is we seem to think that mob programming or mobbing is kind of rigid. But getting to the fluidity, which you shared in the previous segment - it kind of helped us understand more of how this actually executes. So when you introduce this idea, the What and the Why, but then the How. How do teams begin to execute this? You may have an individual contributor out there listening to this show, you may have a team lead who thinks, "Okay, these are good principles. I understand the What and the Why", but how? How do teams actually begin to execute mobbing, or mob programming?

**Woody Zuill:** Yeah, that's really a good topic to cover. So the way we did it originally - there was nothing much written about working as teams in software development. I had, over my career, talked to some old timers - they were older than I even am now - who had experienced programming back in the '50s and '60s, and I heard a lot more about teamwork from them. And then, by the time I was doing this for a living, there was very little real teamwork that I could see.

I talked with an engineer once who came up to me and said - he was quite a bit older than me. He said, "You know you didn't invent this." And I loved to hear his story, because I know I didn't invent this; as a matter of fact, that's something I'd like to cover here at some point. And I'd love to hear his stories about how they used to work together. And so that kind of went away after a while. As a matter of fact, there was a lot of big companies - I won't mention company names - they actually would design a building where programmers would work, and each person got a 12 by 12 room that had a door they could lock from the inside and a sign that would go out in front that says, "Do not disturb", because really, the belief is "We got to do this kind of thinking alone." And I'm not saying we don't have to do thinking alone. I'm just saying, we could also do thinking as teams.

**Adam Stacoviak:** Yeah.

**Woody Zuill:** \[35:54\] But we need to learn to do it. So we don't automatically have these skills I think in programming because we're not expected to ever really collaborate this way, except for in meetings. And there's a big difference between meetings and working as a team. It's the same thing as like, there's a difference between, "We're going to move all the furniture out of my house. All my friends will come over to help me move", and talking about moving, right? We could talk about who will do what, and how we're going to lift these heavier things, and so on. So we're not going to take the couch apart, except we're going to take the cushions off... So we've got to lift that up. At least two or three of us will lift it up. We'll talk about it a little bit, but that's not when things are going to happen. It's in the doing when we're going to go, "Wait, this won't get through this door" we'll discover those problems.

So anyways, we've been trained to really work alone - or we've allowed this to happen, I don't know - where maybe sometimes working as a team could help. The way it happened for us originally I think is worth expressing here. I was hired to work with a team that was doing poorly, and the team lead had been asked to manage the team, to become the manager of the team. And she called me and said, "I don't want to be a manager." I've heard that from a lot of developers over the years, "So I don't want to be a manager." And I worked with her for some projects, maybe 10 years earlier or so. She said, "I think you would be a good manager for this team", because I really wanted to start doing agile stuff, which I had a reputation for.

So I came, I reviewed what the team was doing, I looked at their code, I talked with the other managers, I talked with the director who would make the ultimate decision to hire or not, and I decided I'd like to work here, as long as we had some freedom. And I lined out four things. One is no interference. You're hiring me because you have a team that isn't working well. And clearly they're not working well because the managers don't know how to manage. And I did actually used those terms with them. I figured if I was that rude to them and they still hired me, I would have kind of a chance, because they'd know upfront that I don't think very much of them.

I told them, no interference. I have the right to cancel work. If they're working on something and they're not able to do it, why are we trying to do it? And even bigger, they had two projects that were about a year late, and I think being a year late is excessive by about a year. And so if we're working a year late on something, we should cancel that project, put our efforts on something that's delivering value. I'm not going to do estimates. We don't need to get into the estimates stuff here, but I needed assurance that they're not going to ask me or my team for estimates. I made them sign a document that claimed that.

And then we're not going to do projects. You've probably talked to people on your podcast that think of things as products rather than projects. A product is better than a project, because a project usually indicates that we're going to gather people together, figure out what to do, do it, then disperse the team. Whereas a product is an ongoing thing. And most software, including at this company - that's a product. It's being used and it has to be supported for decades, or at least for-- in their case, they had some stuff that was around for decades. It's got to be changing all the time. What happens when Windows XP is no longer supported? You've got to do something. What happens when VB 6 is no longer supported? Things are going to change.

So anyways, this is what-- I laid down those rules. And what I told the team was, "You're going to figure out how to manage yourselves. I'm here to block the rest of the organization from you, but you've got to figure this out. I'll guide you through it, I'll help the best I can, but you're going to make most of the decisions." We've made a lot of decisions about how we were going to accomplish this. They had a lot to learn. How are we going to learn?

We set aside three hours every week to sit together and study together. And we would pick the topics, the team would pick the topics and how we did it. They happened to pick to do a coding dojo, which is very similar to mob programming. We essentially have five or six people in one room, all working at one computer, and we switched the person who's at the keyboard and the person who's guiding them. Because in mob programming, we have this concept of -- I call it a navigator; who navigates as we go through it. As we rotate, we are just really switching out the pair at the computer. I've found this to be an effective way to learn things, and the team had decided themselves to use this technique. We put all the techniques we could try, and that's the first one we tried. I think if we hadn't done that, we probably would've never landed on mob programming.

We did that for almost six months. We were learning how to recognize what bad code looks like, recognize what it looked like so we could work on it and improve it and no longer write it. We were learning about how to decouple things, what cohesion is... All these sorts of things.

\[40:29\] At the end of that six months, we had a project that one of the developers had worked on before I got there that I was going to cancel, but I was really leaving that decision to the team. And they came to me and said, "Boy, we've got to get working on this again, because our second deadline is coming up really fast." So they took a look at the code, they came back to me and said, "This is a mess." Now they had learned how to look at code and see the problems in it. And we went into a room. I said, "What do you want to do about it?" They said, "Let's show it to the whole team and see what we need to do. Who's going to work on it?" Now, remember, we haven't yet worked as a team. We have been learning how to collaborate over this time. We went into the room, we looked at the code for just a few minutes, and somebody said, "Why don't we just start refactoring it?" And there's this concept of Read by Refactoring, where instead of reading the code to understand what it does, you just start refactoring it. And as you refactor it, you'll get a really good understanding. And now you have code that's easier to read, expresses itself, easier to work on. We started doing that.

After two hours, we had gotten pretty deep into this thing, and somebody came to the room and said, "Your time's up in here. We have this room reserved now." And somebody on the team, with the same kind of excitement in their voice, they said, "Let's just go find another room." I hope you can see this, the power of this. What they were doing was saying, "Let's turn up the good on this right now. I don't want to quit. This is really effective." It was in the tone of their voice.

We went, we found another room. In a company in the size where we were at, we had about 50 rooms, and most of them are always-- at the last minute, you can't find an empty room; we found one. We went there to work. And as soon as we got there, somebody said, "Well, why don't we just find rooms for the rest of the day?"

At the end of the day, we had this tradition of end of the day retrospective where we would ask each other, "What went well today?" And everybody said, "Boy, this working together was great." And I asked them, "What was good about it?" Well, I was there the whole day, I knew. But I wanted to hear it.

We got a lot done. It was fun. We learned a lot and it was really high quality. Any one of those is enough for me to want to do more of it. And so I asked them, "Well, what do you want to do about it?" They said, "Just find rooms for tomorrow, and whoever can come, they'll come."

So this is how we started doing it. We spent six months learning how to be together. The coding dojo that we followed has very strict rules. The only person allowed to speak is the one who's navigating the person at the keyboard. The person at the keyboard is not allowed to do anything, unless they've been given a clear instruction of what to do. We were learning how to explain ourselves, we were learning how to listen to someone else and do what they asked, and we were also learning to keep our mouth shut; because until it was your turn to talk, you weren't allowed to talk. Those are all good skills to have if you're going to work with other people. It's just like, if you're going to learn to play soccer or football or whatever, you're not just going to go in not knowing the rules, and you're not going to go in until you've learned the skills, so you've got to practice the skills. And that's what we had been doing; and we'd really been doing it by accident. We didn't know this was leaning up to this. But after that day, how do we turn up the good? Let's just do this again tomorrow. And for about five days, we just kept saying, "Let's do it more", and then somebody said, "To make this easier, let's find a permanent room."

It only took us a week or two for this to change into our way of working. Now, you can't do that at your company, probably, whoever is listening to this, in that same way, but you can see the hint about how could we go from working all solo to working as a team? But this doesn't get into the idea of how do we convince anybody else that might be in control of our time that this is worth doing?

**Jerod Santo:** \[44:13\] Yeah, that's harder.

**Woody Zuill:** That's much harder to do. So like I like to say, when I was a kid--

**Jerod Santo:** Have you cracked that nut?

**Woody Zuill:** Yes and no. So I learned through the years from 1999 till about 2009 that if you take the direct route, you almost never get anything done. So I learned that techniques like you fly under the radar, or you seek out a boss who is ready to try a new idea, and things like that.

In 2005, talking about pre-mob programming, group programming, I was at a company where they were having a lot of problems with some legacy code, and a lot of stuff needed to be refactored and nobody was given the time to do it. So I asked three or four of the team members that were interested in improving this code, "Would you mind meeting at lunch?" I was just another programmer. I was not anybody's manager. It was just me and other programmers. And they all said, "Yeah, let's do it."

So we started gathering in a room at lunch. I talked my boss into letting me buy sandwiches, which I think is like-- I learned that from Linda Rising. It's like, "He with the best food wins", or something like that, is one of her rules. So I got really good sandwiches and got a little crew, about five or six people and we meet daily to do this. After a while, we all became a lot better at what we were trying to learn to do; but I couldn't expand it out there. And that wasn't really mob programming the way we're doing it now, but it was very similar.

This is the technique that I started using, is like you find some willing people and you keep moving forward. What happened for me at this particular company was they hired me because I already had a reputation for making certain kinds of improvements. So I didn't need to convince them that, "Yeah, this team is working poorly because they're not being well managed. Let's leave them alone and let them figure it out." And that I was able to be there, and part of that just makes me feel extra good.

So how do you convince someone else? Do you want to go onto that?

**Jerod Santo:** Yeah.

**Woody Zuill:** I could tell you what I've been seeing lately. The big thing that I learned from this was once people heard me start talking about it at conferences - that sparks a lot of interest. So while I'm not out there seeking someone who's ready to move forward, I'm attracting people who are. So when they contact me and they say, "We want to start this", then I realized I've got to learn how to explain that, and really all I did at first was write some blog posts. Nobody ever reads my blog, but I wrote a few blog posts and I started sharing these ideas through the-- they would video or they would record my talks. So just planting the seed across organizations. But there's a lot of people who've taken it much further than me as far as introducing it at companies. I have done now about - I can make a good guess - over 500 workshops, because I've been doing the workshops since 2013.

**Adam Stacoviak:** Wow.

**Woody Zuill:** And some years I'm doing up to 100 in a year. But I don't know how to convince anybody. They usually come to me and say, "Could you come do the workshop?" Which means somebody there is already interested in this. And then I always tell them, "Don't invite people who don't want to do this. Invite the people who say, "Yeah, I'd like to learn about it. Don't force anybody to do it."' But I think I have one idea that really tends to work that, again, I learned from my dad... Look for the places that are really crumbling, that are really failing. They're desperate. They'll grasp at any idea that might make things better. You don't find those often, but boy, when you do - they're really willing to try these things. I wish I could give more than this. I wrote a book about this, I speak on any podcast I can... I'm just inviting people to join in. If you don't think this is good, then you might never try it. But if you think it's worth trying, there's lots of ways to go about trying it.

**Adam Stacoviak:** It seems that the first hurdle really is getting the people who can benefit most, which is the team, to try it.

**Woody Zuill:** Yeah.

**Adam Stacoviak:** \[47:58\] Like, you first ran interference with management or outsiders pushing in to intrude or to dictate or direct a poorly managed team, but the team itself needed to understand its actual effectiveness as a team. They had been acting as individuals. And I think that's the most challenging thing. I went to the military and I learned a lot about a team. And for me, I can't imagine not teaming anything these days, because that's really where you get your best outcomes. But convincing the actual individuals in the team that there is a team, and to leverage the team seems to be the first primary hurdle to even putting this into place.

**Woody Zuill:** Yeah. I listened to a podcast that you did with Jessica, and I think she mentioned Leonard \[unintelligible 00:48:42.27\] in Sweden. And I've talked with him quite a bit about these things. He was one of the earliest adopters of this concept. As a matter of fact, the earliest teams outside of the US that were doing this, that I know of, were in Sweden. Somebody in Sweden saw a recording of me or read a blog post that I wrote and they started experimenting with it, I think, in the latter part of 2012. So they were already doing it. I saw them post a conference talk, a 17-minute talk about mob programming, and I was surprised. And I looked at what they were doing; I couldn't understand Swedish, but I kind of saw they were talking about what we were doing. I think they even had a picture of me in there, which of course, made me feel like they're either making fun of me or they're actually honoring me.

So I got to know them, and an interesting thing happened... Somebody who was at that conference and watched their talk wrote a blog post in English - somebody in Sweden - and in there somewhere, they said this: "I've never tried this. I think we'd better try this." That is like a big step. But most people say, "That won't work."

Now, I learned this lesson -- before I heard about pair programming, I learned this lesson when I was a bit younger than that. If somebody I respect says "This is worth doing", I don't question it. If they say it's worth doing, then I'm going to do it. As soon as I get exposed to pair programming, I said, "I'm going to learn how to do this well enough to make a decision as to whether I should do it or not." I think that is a way to work and think that's well worth trying. Most people who've tried pair programming or test-driven development and they quit, they've only done it for a very short amount of time.

So Leonard had this technique where if he's brought in to help a team, he would set up their work area for mob programming. There's kind of good ways to make it comfortable. It's got to be comfortable. If it's not comfortable, you won't do it for very long. You've got to be spread out a little bit. You can't all be huddled around the computer. You spread out. So you want more than one keyboard; maybe two or three keyboards. So you set up an environment where it's easy to work together. But then he would set up a second work area that would be empty. I hope you can see what he's setting this up for. People would come by, notice the teams working as a team, and ask about it. And he would say, "Well, why don't you just join us for a little while? You'll see how it works."

After a while, they'll come by someday and they'll say, "My team wants to try this. We noticed that it's empty over there. Can we use that space? So he's created a space - this is just brilliant - where they can be drawn into it. They're not hidden away doing it. They're in the open and they have an empty space for you to come try it. Now, that's a nice thing.

I knew another guy who was a coach who said he would show the video-- "We have a video of us working back in 2012 of us mob programming", and he would show it and say, "Look at this. It's crazy." He said, "Nobody would do this. This is ridiculous." So the team would look at it and they'd talk about it, and he'd say "It looks like a fun thing to try. Can we set aside some time to try this, more as a fun experience?" So he kind of draws them in by saying, "Look at this. It must be crazy." I don't think he's actually being deceptive, because it looks crazy. When we posted this first on YouTube in 2012, this three-minute time-lapse video, most of the comments were, "This looks like the worst way in the world to work." And so I would respond to them and just say, "Yeah, it does, doesn't it? It seems crazy."

\[52:09\] There's a famous quote that's attributed to Einstein where he said, "If at first an idea doesn't seem absurd, it's probably not a good idea." If that's true, then I think we hit the jackpot. This just seems preposterous. How could this possibly work? But now, again, I know hundreds and hundreds of teams that are actually doing this in their daily work. And dozens and dozens of companies, going from the very tiniest to a couple of the really big financial firms with thousands of programmers who have lots of teams... And in all their training, they now train mob programming for new team members. So yeah, there's a lot -- from the smallest companies to the biggest, people working this way. So that didn't really tell you how to start, but that's kind of you're giving it a little bit about--

**Adam Stacoviak:** It's a taste.

**Woody Zuill:** My main advice would be practice a little bit just being together and working on simple exercises, and then maybe work on really contained work, like work on a bug fix or something that's pretty clear. Work on easy stuff to get the skills. And then there're three things we really need to learn: how to share our ideas, particularly using a whiteboard, how to listen better to each other, and how to be quiet, unless we have something meaningful to contribute. Because what often happens - we share all of our ideas. It's not the right time always to do that, so we learn those things. We can become effective pretty quick.

**Jerod Santo:** So you mentioned that coding dojo that you guys followed was pretty strict. Do you suggest to follow that to get started, to be as strict as you can be in order to kind of like train yourselves and your team on what is, I guess, good mob etiquette before-- do you suggest loosening those constraints eventually, or...?

**Woody Zuill:** It's interesting to me that you brought that up, because that's how I do my workshop, I do it in three phases. We first use very strict rules, then we do a hybrid where we release some of the rules, and then we go to the full-on mob programming.

My experience told me, after I did the first few workshops, that if we just go right into the mob programming, it's too chaotic. We need to learn how to only express when it's reasonable to express. So if somebody were to say, "Here's what I think we should try", and we can actually try it, then that's probably what we should do next. If somebody says, "No, I think I have a better idea", that's okay, but let's hold that idea until we at least saw the first idea come to its end. We will learn something. I have seen this so many times now. I've seen a group of programmers, mob programming \[unintelligible 00:54:33.08\] discuss something for an hour, that they could have tried in five minutes. They didn't need to discuss why they thought it wouldn't work, when they could easily prove whether it would or not work.

**Adam Stacoviak:** It's almost like egos in there, right?

**Jerod Santo:** Oh, yeah.

**Adam Stacoviak:** Who's right, who's wrong...

**Woody Zuill:** Yeah.

**Adam Stacoviak:** You discuss it more for ego's sake than it is practicality and actually execution of the idea and getting it done.

**Jerod Santo:** Yeah.

**Woody Zuill:** So that's the psychology of it, you're probably absolutely right.

**Adam Stacoviak:** It seems like this is a really a psychological kind of practice, really. Like, it's a lot about communication and being effective as a team. A lot of these things are not inner, they're external to who you are. And so in a lot of cases, how do you interact with other human beings effectively? In a lot of ways it's a psychological challenge that a lot of people have.

**Jerod Santo:** Yeah. How does that resonate with introverts? Because a lot of engineers are introvert. They are more comfortable speaking to a computer than to a human, more practiced at it, perhaps...

**Woody Zuill:** Sure.

**Jerod Santo:** And even if they can overcome those communication skill deficiencies and all the anxieties and stuff, would they want to? Wouldn't they rather just go work somewhere where they don't have to do this all day? It seems like there's a lot of that kind of pushback that you might receive.

**Woody Zuill:** And I do see that frequently. I don't know that I'm an introvert, but I know that before late '90 when I realized I needed to start speaking at user groups to share some of the ideas I was starting to work with, I couldn't get in front of a group and speak. When I was a kid, I played music. I'd get on a stage with some other musicians. I felt very comfortable doing that. But it wasn't me solo, and it definitely wasn't me-- I'm not a star, or anything. I'm just there supporting the rest of the band. But then when it got to where I had to talk in front of people, I couldn't even string a sentence together, let alone a paragraph. It was super-hard for me.

\[56:24\] The way I got over that at first was instead of talking about the subject - it was mostly coding stuff - I would just open up a computer and say, "Let's see how we can manipulate graphics in this language", and then I would open up a graphics library and start writing code. "Well, we want to do a gradation", and we would do that. And then, "Oh, we want to make it fade from this color to that color, and then we want to make a star", and whatever we were doing.

So I was learning to be in front of people, in front of user groups of programmers, who are there not because they're expecting you to be a great speaker, but because you have some good technical they want to know about. So they're friendly to you. They treat you nicely. And then it was something I was really familiar with in those days, writing code of that sort, and I didn't need to talk a lot. And somebody mentored me through it and they said, "Yeah, start this way and start introducing a little more talking." What we're doing right now - I'm not sure I could have done 20 years ago, this very minute as we do this podcast.

**Adam Stacoviak:** You seem very natural.

**Woody Zuill:** Thank you. Because that took years of practice. But I want to make this point. I know many people that are a great deal more introverted than me, that are working this way. And one of them was on our original team - he was our first hire to our original team after we started. And he wrote an article about it that he submitted to the papers at the Agile Alliance, and that was published, how he dealt with it.

I've worked with-- not worked with, but I've communicated with another person that I've done workshops at his company, he brought me in, and he can't work with a team very well, but he still does the mob programming. What he does about every hour - he has to go to a darkened room and do some meditation to calm himself because of all of the pent-up emotions and stuff that build up working with other people.

I haven't yet worked with anybody who completely can't work with others, but I'm sure that that exists. So most people at least do meetings, or they communicate through email, and so on. So there are forms of communication they can use, but I wouldn't say force somebody who can't do this to do it.

**Jerod Santo:** Sure.

**Woody Zuill:** That would be hideous, actually. So yeah, if you're an introvert and this just isn't for you, hopefully there's going to be plenty of work you can do anyways. I'd say 99% of the programmers out there are working solo. Mob programming and pair programming are a drip in the bucket, right? I've even spoke at Extreme Programming conferences where I would expect I'd see a lot of pair programmers, and I always do a poll, "How many of you pair program daily?" You'd be surprised. It's almost nobody at these conferences. Same thing with TDD. These practices are really good, but not many use them.

**Jerod Santo:** So I'm not sure if this is who you're referencing, but I did find "Mob programming for the introverted" published--

**Woody Zuill:** By Aaron?

**Jerod Santo:** ...on agilealliance.org. Aaron Griffith.

**Woody Zuill:** Yes.

**Jerod Santo:** So we will include that.

**Woody Zuill:** Brilliant, brilliant guy. I hired him because he was-- I knew him from previous work we had done together at another company, and I wanted a tester. The first thing I wanted to hire was a tester, because our testers were all on a different team, and it was really hard to rapidly get our work done if we had to wait for somebody to test it. And so we found a way to do testing as we go, and he was the one I brought in. And I knew he was an introvert. I worked with him on a team at another company several years earlier, but his qualities were terrific. And I asked him, "Can you handle this?" and he said he'll figure it out, and he did. It's a good article.

Break: \[59:48\]

**Jerod Santo:** So the world has changed in the last couple of year... Working together and alone has changed quite a bit. So many of us, especially in software teams, are remote now. And so while I love the idea of getting everybody literally in the same room and collaborating, I wonder if the spark, the fire, the learning, the shared knowledge, all that stuff can still happen when we're on Zoom calls and Discords and Slacks and emails. We're just not together anymore quite as often. Does it remove some of the virtues that mob programming introduces?

**Woody Zuill:** Yeah, that's an interesting way to approach it. First of all, I would say that there's benefits to having people work from home, but we still can collaborate pretty well. The tools are way advanced than what they used to be. In my talks, I have pictures from three companies that were doing remote mob programming long before we were sort of required to work from home. So it certainly can be done. And I've worked this way on teams going back to our very first team, when different team members, including myself, had to work from home, because of family situations or whatever. And so it's just different. So we have to understand the difference and what are we going to do with it.

We can collaborate pretty well remotely, the modern tools are allowing us to do this, but the protocol is going to change a little bit. The way that we typically worked ourselves when we worked collocated at \[unintelligible 01:03:33.11\] where we originated this concept - we would rotate the people at the keyboard. So the person at the keyboard every few minutes would switch out. Somebody else would take the keyboard. Anybody could take the keyboard, whether they were familiar with the particular tools we were using at that moment or not. This can stay when we're working remotely. We just might want to not rotate as frequently. We've found that somewhere between 4 minutes and 15 minutes was usually good. So do we want to even do a rotation? And I've found with a lot of teams we don't do a rotation, we do other things... But we do have this guideline that we learned from Llewellyn Falco, which goes - you know, for an idea to get from somebody's head into the computer, it must go through someone else's hands. And this is the basic guideline we follow. It's not really a rule... But if we follow that, then it can still be done collocated or remotely.

So the things that have to happen to make it work well remotely is we have to tighten up our collaboration protocol a little bit... Because if I'm saying something and somebody else starts talking and we're all sitting together, it's a lot easier to discern what's going on; with some of the tools that actually makes it very choppy or other problems. So we have to get good at pausing a bit before we say something. And a lot of times, if somebody is sharing something, it takes more than one sentence. If we're just waiting for them to be done with that sentence, then we are kind of destroying our ability to communicate well. So there's ways we can work around these things.

The hand-off - there's many tools that make this easier. People are using three or four mechanisms to be able to switch drivers, what I would call a person at the keyboard. Some people call them a typist, but I think of that as being a little too limiting way to think about the person at the keyboard. I call it a smart input operator. I actually heard Jessica - I think I heard her say a smart input device, and I would never say that publicly; but in my workshops, I often would say that, because I kind of think of them being as part of the computer that is a lot smarter than a keyboard. So when we say something to that person at the keyboard, they can understand a bigger idea. Like, I could say, "I'd like to have a dropdown, so the person using this can select a region." I haven't found an easy way to tell that to the computer through the keyboard, but I can tell it to a human and they can just simply put that in, if they're familiar enough with how to write that code. They might have to ask a question, "Where do we get the regions from?" And there's someone else on the team, maybe they wrote a service or they have a database that has the regions and they say, "Oh, that comes from over here." And then they would say, "Here's the query you need, or the service call you need", or whatever it is.

\[01:06:08.01\] So this can all be done remotely, just as well. Over the last two years, starting -- oddly March 1st of 2020, I boarded a plane to come home from Europe where I was doing a bunch of workshops. And as I got on the plane, it was clear that our plane was going to actually go all the way, but a lot of planes were being canceled. And they wanted to confirm that the flight I was going to switch off to wasn't being canceled. So it was kind of the start of that for me. What I realized was that, well, there's going to be a lot of remote work. And within a week of me getting home, I started getting calls from people saying -- and they hadn't been doing mob programming. And they said, "We've got to start working alone in our own homes, and we want to somehow be a little more like being at work." And we came up with lots of mechanisms for doing that, but one is remote mob programming.

Now, prior to this, there were groups like Cucumber IO. That's open source libraries about behavior-driven development. They've been doing mob programming for many years remotely. Zapier, and other teams, Corgibytes - I think I heard Jessica mention them - they've been doing it always. That's how they worked.

**Jerod Santo:** Oh, yeah.

**Woody Zuill:** So it can be done. It's not that more difficult. There's a guy and some folks in Germany that wrote a tool so that you can-- it simplifies the git commands to push your code to the repository, and the next person that's going to take over the keyboard can bring it back out. They have a website, it's called remotemobprogramming.org, and they have this tool freely available - it's open source - to let you do that. It works really good. It's called Mob.

So yeah, all the things that we do, we just have to change the protocols a little bit. I don't think it's that much different. Now, a funny thing happened on the two trips before the pandemic started. I was in Europe and I was speaking at a conference that was called Remote Work. So they wanted me to talk about doing mob programming remotely, but there was very little interest in people working remotely at that time. But it was very forward to them, because this conference was about the growing trend of people working remotely. So I thought that was kind of an odd coincidence. So I've prepared quite a bit of material on it. I just don't think it's that big of a deal. What we're doing right now is remote, and this works pretty well.

**Adam Stacoviak:** Sure. Do you think, given that you've done it collocated and then you've done it remotely, could you say that it's equally as effective like a one-to-one, or do you think it does have a diminishing return than collocated? I've got to imagine it's a little bit less fidelity; it's got to be a little bit less effective.

**Woody Zuill:** I think the best thing for me to share is this... I've worked with about 10 teams over the last two years for extended periods of time, usually six weeks, and sometimes longer, sometimes a little shorter. Not just doing the workshops, because that's mostly what I usually do, because I'm traveling a lot. So because I've been at home, I've been able to take these-- and what I've noticed, I could go back to every single group I've worked with, and they went from not ever mob programming because that wasn't what they were doing, but they needed to collaborate remotely now, to full-on mob programming. Almost every one of them went from never doing it to doing it all the time, which I would never require of a team. They make their own decisions. It actually turns out to be highly effective. We need to pay attention-- I think I mentioned these heuristics earlier. "Am I contributing, or learning? Then I probably belong here." The team, if they say, "We're always blocked, because we can't get this information, it's not on the team", that's telling us there's somebody else we need to add to the team. If we have the flexibility to do that, where we can decide "I'm not helpful here" and can go somewhere else, and decide what knowledge we need, we either get that knowledge or we get somebody who has it, then this can work really well.

\[01:10:00.21\] You asked a question earlier, where does the number of people-- do we get diminishing results? And one of the famous programmer gurus who speaks at all the conferences once asked me, I said, "I don't know what the upper number is. The most I ever worked with was 14." And if we didn't have that 14, we would've been stumped, because every time we got to a blocking question--" this was work that was really critical. Every time we got to a blocking question, we went out in the company, the CEO would send a message to everyone, "If this team asked for your help, go help them, because this is really critical." We'd go find that person, whoever it was, and they'd come and sit with us for the rest of this project. It only went on for two or three days. But 14 people were highly effective, and I could guess it would've taken us months to do it through normal channels. So he asked me, "What's the upper number?" And I go, "Well, I've worked with 14. What would be the upper number?" He said, "What if I filled the Michigan State football stadium with programmers? Is that too many?"

**Jerod Santo:** Yeah, the Big House.

**Woody Zuill:** And I said, "Well, I don't know." So you fill it with programmers, I'll come and we'll see what happens.

**Adam Stacoviak:** Yeah.

**Woody Zuill:** Because I have a feeling that those people can self-organize into a very effective mechanism, whatever it is.

**Jerod Santo:** I think that's about 110,000, I think, is the capacity of the Big House.

**Adam Stacoviak:** That's a lot of people. \[laughs\]

**Woody Zuill:** So 110,000 is about 109,990 people more than I would typically work with, so I don't know how it would work. I want to try that.

**Adam Stacoviak:** Yeah.

**Woody Zuill:** Yeah, let's try it.

**Adam Stacoviak:** Sure. Why not experiment?

**Woody Zuill:** People used to say, "What would it be like to fly?" Well, yeah, we still don't really know, but I always have this book near me... I'm going to pull it out, although people can't see. It's the Gossamer Odyssey. It's about human-powered flight. Dang, that's a good book to read, and there's some good videos to watch on this. How you can dynamically design something so you can reiterate on it every day... It's brilliant stuff.

**Adam Stacoviak:** Yeah.

**Woody Zuill:** But anyways--

**Adam Stacoviak:** You mentioned before the testers in that one team.

**Woody Zuill:** Yeah.

**Adam Stacoviak:** And it seems to be less about the emotions of the team and the ability of the fewer the many that might be in the team, and more about the work that needs to get done, the thing you need to get through or past, the potential blockers, the lack of feedback loop necessary, so a tester in that case. So if you have software you're rapidly producing as part of this mobbing, if you can't test it to continue building more, well, then that tester is the blocker. So this idea of queuing, as you said before, these kind of hardened principles of queuing, blocking and just throughput of a team - that seems to be the thing that makes success; and less about the specific criteria of how you actually play it out.

**Woody Zuill:** I think that there would be many ways that we could do this. So what we stumbled upon became interesting to other people. I would never make the claim that this is the way, or the one way. I am always quoting my dad, he used to say, "There's 1000 right ways to do anything. We must never think ours is the one right way." I think that's pretty wise. He was an engineer, and he worked for a phone company. So he was a pretty smart guy, but here's the thing... It really is critical that we have people who can learn to work well together.

**Adam Stacoviak:** Yeah.

**Woody Zuill:** We can start out not working well together, and we can use a very simple protocol of how we interact with each other, some kind of a simple team agreement. I always argue, we should never have team rules. They should be candidate rules, at the most. It's just a team agreement. Yeah, we're going to treat each other with kindness, consideration, and respect. When we find we can't do that, we have a way to resolve it. So yeah, we need to-- this is a holistic thing.

There's actually been research done on teamwork, and a thing that's called a team flow; researchers in the Netherlands I think did. And there's a whole bunch to this, that if we get this collaborative approach and we have high skill integration, it means we have all the skills we need, we are working holistically on something, we can really accomplish a lot that no human could ever do alone. We need to keep it where we can do it sustainably. And that means, at the end of the day if we find we're worn out from working this way, we might want to rethink how we work and find a way to work without that fatigue. Maybe we need to change our approach.

\[01:14:15.11\] We need to constantly be reflecting on, "Is this wearing us out, or is this sustainable?" And not allow that to happen. And it will happen. There'll be times when it's too tense, but it's going to take a sophisticated approach to our work. People need to get better at working with each other. I'm not good at it. I'm a better person today than I was 10 years ago because I focused on working well with others. But yeah, I wish I could say it's easy. Yeah.

**Jerod Santo:** I've been thinking about a lot of the interpersonal conflict and the problems that arise... I've been trying to think of like, "Well, how would you deal with this circumstance in mob programming?" But the more I think about it, there's no new problems here. It might exacerbate existing strengths and weaknesses. Like, if you have the alpha male or the person who's going to be bossy or egotistical, who's regularly in your meetings, and on your team, but not in the same room with you - well, that person's going to be in the same room with you, and so you may need to work through those things with that person quicker, or more often.

**Woody Zuill:** Yeah.

**Jerod Santo:** You can't get away as much. But those problems aren't fundamentally different. They're just, perhaps, exacerbated because of the constant contact.

**Woody Zuill:** That's a good point. So I would make a warning about that. There are some people who will be too disruptive on a team, and I'm sure I could be it sometimes. I had a team member once that I had to fire, because of these kinds of problems. I hate to have to say that. In my whole career of owning businesses and so on, I had to do very little firing, luckily... But there are sometimes people who can't work with others. And this was before we were really mob programming.

**Jerod Santo:** Yeah.

**Woody Zuill:** Yeah, I would say this is a skill we need to bring to the workplace. People used to say, "We need some teamwork training." I would hear that before the mob programming, "We need this", and I would think, "Yeah. So what does that mean to work on a team and what would that training be like?"

**Adam Stacoviak:** Yeah.

**Woody Zuill:** I remember when I was running a relay in high school, and what did we practice the most if you're on a relay team? You know the answer to that.

**Jerod Santo:** Yeah, the hand-off.

**Woody Zuill:** Boy, you've got to be really good at that one little bit, because that's going to win or lose the race.

**Jerod Santo:** It's crucial.

**Adam Stacoviak:** We've seen some Olympics where that didn't happen very well.

**Jerod Santo:** Oh, yeah. Even the best.

**Adam Stacoviak:** A lot of memes.

**Woody Zuill:** And it's not hard to screw that up. It's not hard to mess that up.

**Jerod Santo:** It's very calculated.

**Woody Zuill:** So to use another sports analogy here - my dad was really into baseball, so I watched a bit of that when I was a kid. And when you watch a short stop, get the ball, tag someone out and get the ball to the first base then, so you get a double play or maybe a triple play... So you know that didn't just happen. They probably practiced that. For every game, they probably practiced those moves 1,000 times throughout their career.

So these things take practice. I would argue, if we're going to work well with each other, we've got to practice this. We've got to practice listening. We've got to practice sharing ideas. We've got to practice even backing off when it's appropriate to back off, never insisting ours is the one right way... We have to be willing to listen to every voice...

We've found that we often would ask the least experienced person on the team for their idea and we try it first, because that usually leads to better learnings with an unpolluted mind. Because a lot of us pro people have been programming for years - we've got our tricks that we use over and over. They may no longer be valid, but they're the way we work. So yeah, there's lots of techniques to use. So we covered some of the things about remote mob programming. Is there anything else we want to cover?

**Jerod Santo:** Well, \[unintelligible 01:17:51.02\] nothing. You wanted to talk about silos earlier. I interjected; we didn't get a chance to talk about it. I'm out of interjections. So siloing - this was a topic that you were bringing up.

**Woody Zuill:** \[01:18:02.16\] Yeah. This we can cover real quick. When we work alone, we are automatically in a silo... If we think of a silo as a place where we have knowledge that is not general. So when we work in a silo and we have that knowledge there, it might be, let's just say, a database team, because I've worked that way before. And the knowledge about the database is really in this silo of that team. But along with that silo of knowledge comes a silo of ignorance. We don't know much about how our work affects others, or about how our work really fits in with everything else. So we end up with a territory that is the silo, right?

So when we start working this way, those silos break down, and a powerful thing happens... I now am aware of how the things I insisted on were making it hard for other people to work, when I was only worried about the things I'm supposed to be worried about. So spreading this out I think is really valuable, to understand better how what we do affects others and how what they do actually affects us. So this is how I think of silos now.

I don't want those silos, but you still need to have your expertise, because we need different skills on the team. So you have to have time to maintain your expertise. You don't do that by doing grunt work all day, which a lot of people, when they're working in their own silos, are doing kind of grunt work. We automate the grunt work. We elevate what we're working on to being the stuff we should be paid for doing. I've seen this over and over again... When the team gets good at this, we all get a little bit of a general knowledge of how what we do affects others and how what they do affects us, and we learn to do better with that.

I would see often a database person on the team while we're designing the UI, for example, interject stuff that's really important. Where are we going to store the data about the flags on this page? Where is that going to go? Is it going to be in a config file? Is that going to be hardcoded? Is that going to be in the database somewhere? Things like that.

This is the same with testers. When testers are stuck on at the end, they're not there to think about "How can we do this better, so it's easier to test?" One thing I've noticed with testing - sometimes the easiest thing to code for is really hard to test. And sometimes the really hard stuff to code for is really easy to test. So we want to have that tester in earlier, so we see the problems, how can we make it easier to test, and what is it we're probably breaking? The developer's mind is often on, "How do we get this working?" And a tester's mind - I've seen it over and over... I hate to use that term now, "over and over", but I see the tester will come in with a point of view that's different from us developers, and they will say something that changes how we have to think about this thing. And I've seen it with all those team members. I like the whole team. We usually can't get that. We get as close to it as we can.

There's no ideals that we can actually match here, but we can strive. I call them lofty goals. We can try to get a product owner full-time. That's really rare to get. The team itself will benefit. The results of what we do will benefit from us working together more frequently. Not just meeting, but working together. But I've covered a lot. I hope that was not too much.

**Adam Stacoviak:** No, it was good. I think this has been a great conversation. It's deep. It's deep, and as your dad has said, there's no one right way. There's many ways you can go about learning this or applying this. Thankfully, it seems to be rigid enough, but also fluid enough to be invitational on that note, like "What would be a good place?" So if there's teams out there that are not doing this kind of work, or doing it but not doing it so well, what are some resources that you point people to, to say, "Here's what my programming is. Here's how you apply it. Here's different spectrums you can apply to your team?" etc. Where do you point people to when they say, "How do I get started, Woody?"?

**Woody Zuill:** So I wrote my book... I wrote it with my friend, Kevin Meadows. What it contains is what I try to share in my workshops. We kind of finished that book off mostly in 2016, so we're working on a second edition... But sure, you can get that book. I'm not here to make money selling books. I didn't get into this to become an author. It's painful for me to write stuff.

\[01:22:22.24\] We have our blog, which is called mobprogramming.org, and then there's the guys that have the podcast called Mob Mentality, and they do a podcast like yours where they talk to people almost weekly, I guess, where they talk to people that are doing mob programming. They've had a lot of guests, a lot of episodes. So there's three places you can look.

There's also my blog. I mentioned it, mobprogramming.org. I think the last thing I wrote was three or four years ago, or a couple years ago. There's also the remotemobprogramming.org, where they talk about remote mob programming. There are a couple other books you might find out there. Another one on Leanpub, and one that was by the Pragmatic Publishers that you could find. I hate to say, I haven't read that again. I read it when it first came out, so I don't know how current it is.

You can always find me in Twitter, and I'm just @WoodyZuill on Twitter and/or LinkedIn. Send me a note, and then I can help you think about it, what you might want to do. I'm not really advertising that I do workshops. I mean, it's like, I've got plenty to do, but I'm always open to doing a workshop for you. And also, I speak at conferences, and I love to speak at user groups. So if you have a user group and you want somebody to say the exact same things you just heard, I can come and do that, because I think this is all stuck inside of me now. And there you go. So how's that? Is that enough? You can always get in touch with me, I will respond. I very rarely miscommunicate.

**Adam Stacoviak:** We'll put links in the show notes, of course. So everything that you just said, we're going to put in the show notes. So if you're listening to this and you're like, "Woody, that was a good idea. Let me go check it out", so check the show notes. It's there, obviously. I would also say too, I'm curious, to our audience, like who currently is doing this? Who has tried it and failed? Who's failed to try it? All the ins and the outs of this. We do have commenting on every episode... So Woody, I'm sure you'll see some of those comments as well. You'll probably chime back if you can. But I'm curious from our audience, like, who out there has applied this? Who has tried and failed? Etc. Chime out in the comments, we would love to hear from you.

Woody, thank you so much for just giving us all of your passion for this. That's the one thing I can think of. You seem very passionate about it. It's been a big part of your career. I think this is an interesting thing. Jerod knows I'm a big fan of teamwork, so if this brings in the whole team and they call it mob programming - whatever they call it, I don't care.

**Woody Zuill:** Exactly.

**Adam Stacoviak:** Just... If it's effective, try it. But Woody, thank you so much for your time. We appreciate you.

**Woody Zuill:** Thank you. Thanks for inviting me, and thanks to Jessica--

**Adam Stacoviak:** Big fan of Jessica.

**Woody Zuill:** ...for bringing it up. I really admire her and I love talking with her. And yeah, that's great.

**Jerod Santo:** Oh, can I give one more shout out real quick, Adam?

**Adam Stacoviak:** Yeah, please.

**Jerod Santo:** Let's give a shout out to James Simone, who is a listener of ours and wrote in about mob programming. He's a practitioner. So Adam, you wanted to know some of the people who've been doing this... That's one of them. He wrote to us. He gave us a lot of remarks, many things that helped form our thoughts and some of our questions today. So shout-out to James. Thanks for writing in and suggesting this episode. Hopefully, you enjoyed it.

**Woody Zuill:** Cool.

**Adam Stacoviak:** Yeah. Very cool.
