**Jerod Santo:** So we are joined by Nora Jones, founder and CEO of Jeli. Nora, thanks for coming on the show.

**Nora Jones:** Thanks for having me, Jerod.

**Jerod Santo:** Happy to have you. First heard of Jeli on our episode with Brittany Dionigi. She's the Director of Platform Engineering at Articulate, and she mentioned you all during that episode on learning-focused engineering. I hadn't really heard about incident analysis as a formalized thing until then. And it just turns out that a colleague of yours, Daniela Hurtado, was listening to that episode. In fact, she became-- I think she was a Brittany fan, brought her to the show, and then she started consuming other episodes, and now she's a loyal listener. She's very excited to hear Jeli mentioned on that episode, and so she reached out - shout out to Daniela - and hooked us up. And that's kind of how we got here. Since then, you've posted a post on our blog called "Incident shouldn't be a four-letter word", and oftentimes it turns out it is, but doesn't have to be. So all that to say welcome... Tell us about Jeli and what you all are up to.

**Nora Jones:** \[04:26\] Yeah, absolutely. So like you mentioned, we just published the "How we got here" guide. So Jeli is an incident analysis-focused company like you said, and really what that means is taking incidents and looking at them under a lens that allows us to learn as much as we can from them. A big focus of ours is helping people learn like the experts of incidents, so that they can improve themselves as engineers, improve themselves as colleagues, improve how the company acts as a system overall. And we really take a socio-technical lens with that. What that means is figuring out how people work together too, figuring out how people learn, figuring out how people teach others. And the tooling that we make looks through or aggregates your coordination capabilities in Slack. On top of that, it aggregates pager duty and we aggregate some organizational information as well to kind of give you this full lens to learn as much as possible about your incident, so that you can improve in the future.

**Jerod Santo:** Now, I know that your history is in chaos engineering, you're kind of one of the pioneers of chaos engineering at Netflix, and this whole resilience engineering community, which is like this little sub-tribe of the software community, of which Jeli is a part of. I know it's bigger than just Jeli. There's more people doing these things. Tell us a little bit of your back-story and how you got from there to here, and why Jeli is a thing today.

**Nora Jones:** Yeah, for sure. I started getting really interested in this when I was doing chaos engineering at Netflix. So chaos engineering is a form of experimenting on production systems, creating turbulent conditions intentionally, to see how the systems react, with the hypothesis being they will react fine, which usually isn't the case, because we are always ever learning about our systems and we're learning that they don't actually react fine to some things.

So I got really into chaos engineering at Netflix, we were building pretty awesome systems around that, but I was trying to get people to think about what kind of chaos experiments to run. And I noticed that a lot of developers, especially developers working on features and such, didn't quite know how to get into to that mindset. They didn't quite know how to come up with a failure scenario, to explore a failure scenario to run... And so I wanted to give them something that they might actually know, which is reflecting on past incidents. Every developer can tell you a really bad incident that they were a part of, or a really bad bug that they had to go into. And I was helping them identify patterns behind them.

And doing that and surfacing some of those patterns kind of allowed them to get into that mindset a little bit differently. But from doing so, I learned that there was so much more capabilities behind just creating different chaos experiments from looking at those past incidents. And those capabilities were actually teaching engineers more about their systems, and teaching them to learn like the experts of the systems, and just really unearthing different capabilities. So I really think of the incidents themselves as kind of like a mirror reflecting back, and it's a catalyst for learning about your system, because it's something that you didn't expect to happen.

**Adam Stacoviak:** It's a natural list that gets born, too. It's like these things happened, chaos ensued, heads rolled... I don't know. I mean, you never know what happens, right? But it's a natural list that forms. And I think maybe before "incident management", this list didn't naturally form, but it was just like ad hoc, it was maybe a post mortem. I guess if it was big enough, there's a post mortem, that kind of thing. This post mortem tends to be the documentation that the public sees. But how did the team conjure this list of what to look back on, as you said, to reflect on - it didn't naturally form. And now with the way the world's working with incident management, it's a bit more formalized.

**Nora Jones:** \[08:15\] Yeah. And like you said, a lot of the times the goal of a post mortem - you kind of end up losing sight of actually learning from the incident, which should be the ultimate goal. And I think some people are like, "Oh no, I've learned everything I can", but actually taking the time to write a really good report and talk to your colleagues and interview them about the incident and talk together about the incident illuminates so much more than you might expect, just kind of creating a public write-up for your customers or a public write-up for the rest of the internet. And so I think as an industry, we've kind of lost sight of why we're doing incident reviews and why we're doing post mortems, and we're leaving a lot of ROI on the table for something that was already a really expensive and probably emotionally expensive event.

**Jerod Santo:** Yeah, I'm glad you bring up the emotional side of it, because there sure is that aspect of this. We've had an idea of doing a podcast all about post mortems, like large incidents that happen online. Maybe you have to wait a certain amount of time, but bring on the engineers who triage that, or lived through it, and have them tell the tale. And we've thought about that, but I always think, do people really want to come on a show and talk about--

**Adam Stacoviak:** Their fails?

**Jerod Santo:** A lot of it can be foibles, it can be mistakes. Adam joked about heads rolling, but it really does-- that doesn't really happen literally, but it happened in the sense of like a lot of times that post mortem is about who's at fault, and that can be emotionally damaging, it can be career damaging... These things are sensitive subjects, right?

**Nora Jones:** They can be sensitive subjects, yeah. And a lot of it is organizationally dependent, too. So I worked on a lot of this at Netflix, but then I went full-time to Slack after Netflix to be an incident analyst, and it was right around the time that they were IPO-ing. And you can imagine that emotions are kind of high during such a big event. And after being at Slack for a little while, I really got the urge and the push to start Jeli, like "Oh, whoa, this wasn't just a Netflix thing I was seeing. It's happening at Slack, it's happening at other organizations through the industry, too" which I learned about through the Learning From Incidents Slack community. And since being at Jeli, we're getting to see it everywhere. And every organization handles incidents a little bit differently, and they're very high stakes at some, they're a bit lower stakes at others.

There are organizations that are hesitant to even call incidents yet, because they're still trying to find their fit as a product in the market. It's different everywhere. And yeah, like you said, some people might view it as career damaging, and our whole focus as a tool and as a company is to help companies not view it like that. It's not any one person's fault, it's not any one piece of technology's fault. It's like a product of the system that you created at your company and how can you have a psychologically safe environment to talk about that in a way that everyone can become better engineers, better co-workers.

**Adam Stacoviak:** What was it that specifically you saw between Netflix and then Slack to be like, "Okay, I need, need to do something about this?" Can you give me a list? What were the specifics of like, "I'm done seeing this happen here and there. It's at scale. Others have this problem." Give me a hit list of what was like, "Okay, I've got to start Jeli."

**Nora Jones:** Yeah. I think one of the biggest things that had happened was my full job at Slack was doing chaos engineering and incident analysis, and I was full-time analyzing some of their incidents, and I would write these very large reports, disseminate them to the rest of the organization. So a lot of the focus was on good writing, a lot of the focus was on talking to people... But it wasn't going to be helpful if I was the one writing all of those reports. And so I was trying to teach other people how to effectively review incidents, how to effectively analyze incidents. And like you were telling me before, Jerod, how do you incentivize engineers to do that? Why would they care about that? Don't they have other stuff to work on? And you're absolutely right.

\[12:14\] And I think my biggest selling point to them was, you will be a better engineer. By studying an incident that you weren't a part of, or by studying a different part of the Slack system, you're going to get to know so much about how Slack works, and you're going to have this knowledge that other people don't have. You're going to know where to look. You're going to know who to page. And the more people that you do that with, the better the company is going to run overall.

And so that was my selling point, but it wasn't until someone-- I was working with someone that we trained on this, and this particular person had been waiting to get... He had been trying to get promoted to a staff engineer for a very long time, and he was kind of stalled out at the senior engineer level. And he did some of this training, and it wasn't like directly because he did the training that he got promoted to staff. He started learning about the system in ways that no one else knew. And right afterwards, he was like, "Okay, no, I actually get it now. I feel like I'm seeing in color." And he just became this ultimate resource. He really escalated his career there. He became someone that just knew a lot about the systems. And it looks like a superpower when you look at it from the outside, but really, he had been studying incidents. He had been studying the ways that the system had failed and gone wrong, and doing it in a very, very deep manner. Yeah. And so that's really amazing to see, and that really gave me the push like, "I want to create more of this in the industry. I want to enable engineers to learn more. I want to help companies be better at growing and teaching their engineers", because I really do think as an industry, we're not that great at it. We kind of incentivize people to stay a couple of years and then leave and go get another job. And engineers kind of feel like they're done learning at a certain job at some point. And I don't think that necessarily has to be the case. I think it'll be better for the companies. I think it's going to be better for the industry. I think it's going to be better for us as consumers of these products if people stick around and feel their systems and really become a part them.

**Adam Stacoviak:** I like how this is a win-win-win kind of scenario, where it's like there's a lot of winning happening whenever you really manage incidents well. So I imagine very small incidents become better to document, because there's always learning in there, but it's the company that wins, it's the technology that wins, because then consumers win, because it's better in the end, it's a better engineer piece of software.

**Nora Jones:** Right.

**Adam Stacoviak:** And then the engineers themselves and those involved in the systems, in building them and maintaining them win, because they now understand them better and they become more promotable, smarter in many more ways. And potentially, if there were incentives to stay beyond two years, maybe there's even an options bonus or just something that says, "Hey, stay here a little longer and retain that domain knowledge and dig deeper. Go vertical, versus horizontal."

**Nora Jones:** Yeah, absolutely. I think in a lot of incidents, too -- I mean, you can probably name some developer at your company that just seems to know more than everyone else. They're the person that you want when you have a horrible incident, and you're just not quite-- you're just like, "Oh, they're amazing. They're next-level." And you kind of think of them as this entity that you cannot get to, which I think is the wrong approach, and I think a lot of companies bump those people up like that, too... But really these people are just good at learning.

And there's this book called Minding The Weather. So a lot of our focus at Jeli is on cognitive interviewing and knowing how to ask questions in ways that Alyssa answers that allow you as the interviewer to learn more. And so it's a skill that you have to learn, is how to ask those questions in ways that experts can teach you how they're doing what they're doing, because a lot of the times they don't know. But anyway, this book called Minding The Weather - it's about expert weather forecasters, and how they do what they do. And a lot of the focus of the book is trying to teach people not how to be experts, but how to learn like experts. And flipping the script like that just makes a huge difference and you're able to make more and more of those people. It's really cool to see.

**Jerod Santo:** \[16:16\] So I had the opportunity early on in my career to sit next to one of those people at this organization, and he was one of these guys who had just internalized the entire system, from networking, to the database... They had one enterprise application that was custom, how that worked, domain expert, he understood - it was grain trading - he understood all that stuff. He wrote down nothing.

**Nora Jones:** Yeah.

**Jerod Santo:** He had yellow sticky notes all over his desk for different-- I don't know. I would never look at his sticky notes, but he was not going to document anything. And he was the guy who would just know what was wrong. It was almost like he intuited what had to happen. And I sat there and I observed this for a little while, just thinking, "This person's amazing." And he is. He is very good at what he does. And then I finally got to where I started asking him questions. I'd be like, "How did you know that?" And I started to prod, and I started to pull, and I learned so much about the system, about how to debug and troubleshoot, things that he skips over because he understands -- he's seven steps in, and I'm still on step zero. And it would be amazing if everything that was in his head, or at least some sort of synthesized version of what's in his head could be accessible to me async, without having to sit next and prod him, and have both of us-- and today we don't even sit in the same office as our colleagues, right? So I see the value. I see how easy it is to silo this domain expertise, the systems expertise, that one person who you always have to call because they'll know what's wrong... And then all that knowledge just lives in these little silos of their brains, where if that's shared in a repository - just so much value. So much value.

**Nora Jones:** Yeah. And I mean, what you were doing, Jerod, was interviewing him. You were doing cognitive style interviews, and you were asking him how. And that language shift - that's really important, not "Why did you do this?" but "How did you go about doing this?"

**Jerod Santo:** Right.

**Nora Jones:** What we encourage people to do when they're doing these interviews after incidents is pick the expert's interview and actually ask them to show you like, "Hey, you said this thing in channel. You said, 'Hey, I think it's the database.' Can you tell me how you got to that point?" And actually have them pull up their laptop, show you what they were looking at. Those are context pieces that they're not putting in channel, like you said, Jerod. They're not writing them down. They might be on a sticky note in their head, but they're not writing down how they're thinking through that. They're just like, "I think it's the database", and everyone else is kind of like, "He's just magic. She's just magic. They just know these things." And it's really not the case. Experts can be built.

**Jerod Santo:** Yeah. So one thing that happens with me at the end of an incident, whether big or small, is I've just exerted all of this energy and time, and probably stress, and I've fixed it, or somebody's fixed it, and then it's like all this work that I was supposed to be doing - because an incident is never planned, unless you have a chaos monkey, I guess, going on. But for most of us, we don't have that kind of resiliency. We don't have these things planned. And so your actual work is piling up behind you, and you spent six hours chasing down some stray index in a database column somewhere that's causing this server to spike, or whatever it was. The last thing you want to do is "Now let's document this for future generations." Isn't that why these things go oftentimes not written down, not documented, not analyzed, is because we've got to get back to our jobs?

**Nora Jones:** \[19:55\] You've got to get back to your job and you're tired. You're like, "I don't want to think about this thing anymore. Let's put it to rest." You're tired. You're emotionally exhausted. But one of the cool things about incidents is you're doing whatever you can to stop the bleeding, and so a lot of times rules and procedures go out the window. And it's one of the only moments where you can see the reality of how your system works, versus how you think it works. Like, "Oh, Adam's supposed to own this. Jerod's supposed to own this. We're supposed to go through these particular steps to get into this database." And that's not actually what happens. It's like, maybe you called Stacy, and Stacy hasn't been on that team in like six years.

So things like that happen. And so by not actually documenting how it went down, you're bound to repeat a lot of those same things and you're bound to keep that knowledge only in Stacy's head. But I get why the people that participate in the incident don't want to do it, because again, they're tired, they're stressed. They just went through this really traumatic thing and they don't want to dig it back up. And that's also part of why we recommend having someone that wasn't involved in the incident do the incident review, document everything, talk to these experts and try to think of it as conversations rather than interviews.

I would sometimes go get coffee with someone in the kitchen in Slack, and ask them about the incident. And a lot of the times, you can make it so comfortable with these people that they're actually really glad they have someone to talk to about it. You're there to be this trusted force, right? You're not there to document all the things that they did wrong. You're there to treat them like the expert they were, because they were an expert in some part of this incident, and your job as the interviewer is to unearth that expertise and write it down. And so I'm asking you, Adam, "How did you know to do this at this particular time?", or "Wow, this was two in the morning your time. You must have been a little bit tired", and slowly you start to get them to open up. I mean, you all are podcast hosts, right? You're good at this, too. You are good at making the guests feel comfortable, you're good at asking them questions, you're good at getting them to share their expertise. And that's a lot what incident interviewing is, too. And so, eventually, people get kind of excited to tell you, they're like, "Wow, no one's asked me all these questions. Let me tell you..."

**Adam Stacoviak:** Yeah, no one cares.

**Nora Jones:** No one cares.

**Adam Stacoviak:** Somebody finally cares. Yeah.

**Jerod Santo:** Somebody cares.

**Nora Jones:** "Someone finally cares about this database I've been screaming about for five years. Please get it to change." And so you're this trusted person that is going to write down their story in a way that gets people to listen... Because they're tired. They don't want to die on this hill anymore for this particular incident, even though it's been bothering them for a while.

**Adam Stacoviak:** Yeah. How did you surface, I guess, the third party, I guess? Because that's what I would call that person, is a third party; the person who's in charge of documenting. Is that just something that surfaced? Is this something that you surfaced? Is this a chaos engineering incident thing? How did this surface to get a third party?

**Nora Jones:** So a lot of what I learned about incident analysis is from other industries. There is a whole subset of research, dating back to three-mile island, about how to analyze incidents and accidents appropriately. And we do get lucky in software sometimes, in that our incidents don't necessarily -- not always make the news, and people have died, or certain safety things have happened... That does happen in other industries, and it can be really hard to productively surface what was actually happening in the event, because people are trying to save their asses. They're trying not to go to jail. Yeah, a lot of these other industries, they're required to hire a third-party person, because the people in the event can't see. They have such a nuanced view of what happened. But you end up getting more information. And so that was adopted from other safety-critical industries. And so myself, John Allspaw, a lot of the members of Learning From Incidents community have been really studying outside of the software industry and trying to bring this stuff into the software industry. Yeah. I mean, software - it doesn't always feel safety-critical, but it does run the world. The AWS outage, the Facebook outage - those impacted the world in a lot of strange, bizarre ways.

**Break:** \[24:27\]

**Adam Stacoviak:** When you mentioned going to jail, it reminded me of the movie Sully.

**Nora Jones:** Yes.

**Adam Stacoviak:** Tom Hanks. And that movie is just a really good, visible-- I actually attribute a lot of learning, even to movies. It was actually in a podcast at OSCON where I said, "I learned something about something from The Rock on some random movie." Do you remember that, Jerod? It was kind of a funny thing.

**Jerod Santo:** I remember that. It was years ago.

**Adam Stacoviak:** I do bring up movies often for learning processes, but that kind of reminds me of Sully; like, this whole landing, and they couldn't figure it out, and they ran all the simulations, they went through every single way, and they investigated to the N-th degree. And these guys could have lost their jobs, but they actually did a really good job of landing that plane in New York City, into the bay. And it was like, how did that even happen? But that kind of reminds me of that. It's like, do incidents have to be that bad? Probably not. But that's probably an extreme example of like, okay, maybe a Log4j kind of thing could be out there like "How did this happen?" This is an industry-wide sort of security incident, but you know...

**Nora Jones:** No, I'm actually really glad you brought up that story. So a lot of the stuff I learned about other industries was because I studied in the Lund course on human factors in system safety, and it's like a bunch of professionals from other industries. We had professionals and they're from maritime, from medicine, and they have all these regulations around their accidents. And I'm in there with software and I don't have any. And so they're all like, "You get to do all these cool things. I have to use X, Y, Z..." And there was one day in class where we actually talked about captain Sully, and the guest lecture that day-- because a lot of these industries are required to use runbooks. And not only are they required to use runbooks in incidents, they're required to follow them to a T. And if they deviate off the runbooks, they risk facing jail time.

But runbooks are only good until you develop expertise. And then like you said, Jerod, after that, you don't need something written down on a sticky note. I mean, the guy that you were sitting next to that you referenced earlier, he wasn't using runbooks a lot of the time. He was maybe leveraging the runbook, but also combining it with what he knew about the system. And that happens in other industries too, and that's what happened with captain Sully. He deviated off of what he was supposed to do. And the reason-- the guest lecture puts Tom Hanks on a slide and he goes, "Who wouldn't want to be played by Tom Hanks in a movie? He's America's sweetheart." He was like, "But the only reason this guy was played by Tom Hanks in a movie is because no one died." He was like, "If Sully had deviated from the runbook like he did and someone died, he would be in jail, even if he did the right thing."

\[28:35\] And so that's when the guest lecturer started talking about the Costa Concordia case, which was an Italian cruise ship that struck an underwater rock, capsized, sank in the waters of Tuscany, and 32 people died. And what happened was this captain-- there's a lot more nuances to the story, but he basically kind of did what captain Sully did. He deviated from the runbook. And his deviation made it so that less people died; but 32 people still died, and this guy is in jail.

**Jerod Santo:** Wow.

**Nora Jones:** And if you look him up - I encourage you to do that after the episode - he's shamed. They're like, "We saw the captain drinking. We saw him dancing with girls all night." They're really shaming this guy, even though he did have a lot of expertise in the moment, and his decisions made it so that it was not as bad an accident. And captain Sully, he kind of got a bit lucky with his.

**Adam Stacoviak:** It was a good movie, for sure. I mean, good story and a good movie.

**Nora Jones:** It's a really good story and a good movie. But the reason I bring that up is software - we do try to focus on our runbooks a lot, and that ends up being an action item after every incident, like "Update this runbook, update X, Y, Z, why didn't you follow the runbook..?" And the other folks in my class are like, "You don't have to use runbooks. Why are you doing this? We have to follow these checklists, or else we go to jail. You don't have to do this in the software industry. Why don't you trust your expertise and your cognition a little bit more?" And I don't think we quite know how as an industry. And so yeah, again, that's some of the stuff that Jeli is trying to help with as a product and as a company, is unearthing that.

**Jerod Santo:** Maybe our inclination towards using a runbook, even though it's not regulatory authorized or required, is because we spend our days telling computers what to do.

**Nora Jones:** Yeah.

**Jerod Santo:** And when we do that, it's step one, and then step two, and then if this condition, step three, but otherwise step four... And so we kind of live in an imperative, step-by-step world, and that's how we think. And so if you can give a script, that would be great. So we kind of think in scripts and in runbooks, and maybe don't rely enough on our expertise or our problem-solving skills. I don't know. It's an interesting thought experiment.

**Nora Jones:** Yeah, it is interesting. Runbooks serve an amazing purpose when you're learning. But then you pass this threshold where you're going to always be smarter than the runbook, and you need to work with it jointly, rather than over-reliance on it. I think that's a really great insight, Jerod. We do think in steps. We're programmers. We're trying to tell the computer what to do exactly, and we're upset when it doesn't work in the exact sequence, so we find the need to update it and update it, and allow ourselves to over-rely on it, when really we need to work with it. We need to be its teammate almost.

**Adam Stacoviak:** It might seem obvious what runbooks are, but what exactly is a runbook? Is it automated in most cases? Is it truly an if-then, kick-off scripts, move things around, backup data kind of things, or is it kick off a slab message, kick off a Zoom meeting, alert these people? What exactly is a runbook in the industry's terms? And then maybe product-wise, it probably gets specific, but what's the general terminology for a runbook? What does it do?

**Nora Jones:** Yeah. A runbook is a step-by-step list of what to do when a certain situation comes up. If you're not experiencing that situation a lot, it can be really helpful, because you are not working out that muscle all the time, so you don't have this expertise in it.

\[32:16\] And so that's kind of that threshold that I was talking about. You need a runbook in that particular case. But if you are working on this database all the time, you're going to be smarter than the runbook, because it's just not going to be updating with your mental model all the time. And I think there's some companies out there that claim to have these automatic runbooks, and they're continuing to update them automatically, but it's not going to be as powerful as the human expert's mind, ever.

But yeah, it's a step-by-step list of procedures that you're supposed to follow when a certain thing happens, and it can have anything in it. It can say, "Give a call to this executive." It can say, "Make sure this customer knows." It can say, "After you have called this customer, make sure you do X, Y, Z in the database." Yeah, it's just a list of reminded procedures that I think people constantly get tripped up on, or might forget if they're not written down.

But our whole thing at Jeli is to write down a lot of your incidents and write down how people think. And if you're constantly writing those things down, you don't need to leverage the runbooks as much, because you're actually documenting expertise. And not only are you documenting it - when you're taking that in, when you're reading it, you're inherently building more expertise, too. And so it's not like you'll never need runbooks, it's just there doesn't need to be an over-reliance on them and an over-reliance on them being up to date all the time.

**Jerod Santo:** So when you are advocating for this process at Jeli, or with potential customers or users of your platform, where do you find that the buy-in has to come from? Is it the teams, or the developers thinking, "Oh, yeah. We could really benefit from this", or is it more like a C level, "We're going to do incident analysis and we're going to have a corpus of data"? Where does the buy-in usually come from? What are you seeing out there?

**Nora Jones:** I would say that there absolutely needs to be trust all the way from the top, that that is a good thing to do. It just depends on how much the CEO and the executives trust that their engineers and trust that their people know how to learn, and have enough insights on the business to learn some of those things. It really depends on how transparent the company in question is. So I've seen it come from everywhere. Sometimes we do have to convince folks in the C-suite, sometimes an engineer or engineering managers have full rein and capability to drive this through. And I think those are the best organizations, because those engineers are trusted. Those engineers are trusted to learn more and to teach more. But it absolutely needs to be supported.

I've seen some organizations where it's claimed to be supported, but it is lip service a little bit. The engineers are then pulled into other things and don't have time to actually study what happened. And then an incident is going to happen again in the future, and they're just going to keep repeating the same cycle over and over and over again. Yeah, it super-depends, but it always needs support from the top. And not only that, the top needs to understand the value of incident analysis to their company, like why they should allow something like that to take place. And it really benefits them overall. The more you're doing stuff like this, the faster you're going to be at getting features out to your customers, the more you're going to be collaborating together in a really beneficial way. It's a really powerful thing. And some of our customers we've been working with for over a year, and just seeing the changes their organizations have made even in that small amount of time is really, really cool; like, just really transforming into this learning organization, collaborating better together, knowing who to put on certain projects, knowing how to organize themselves better. It's just really powerful. It's a big competitive advantage, honestly, when you figure that out and your competitors haven't.

**Jerod Santo:** \[36:15\] There's probably a lot of people not doing it. So it seems like it could be-- certain competitive advantages become table stakes at a certain point. It's no longer an advantage, like you need to be doing this, because everybody is. But it seems like-- and I don't know, so you can tell me if I'm right or wrong on this... But it seems like probably not that many organizations have adopted this as a formalized practice. Is that fair?

**Nora Jones:** Yeah. We're seeing it start to uptick. I mean, that's a big thing that we're honestly trying to change, is making it apparent... A couple of the customers that we've worked with, we started working with them last year, started working with a few engineers, are now hiring full-time incident analysts, which is pretty cool. They're seeing the value of hiring this person that is a bit of a distributed systems, cultural anthropologists, just continuing to tell the story and continuing to build this corpus, like you said.

**Jerod Santo:** Yeah.

**Nora Jones:** Yeah. So right now it's on the bleeding edge. It's very nascent. But as it picks up, people will be required to get on board, because they're just going to be moving slower than their competitors.

**Adam Stacoviak:** It's going to help the morale though, too. Learning, morale...

**Nora Jones:** Yeah.

**Adam Stacoviak:** The possibility to be promoted - that's going to be a good reason for a team to want to adopt a tool like this. When you look at the corpus, what is the corpus? What is the artifact of an incident? What does it look like to consume it as an outsider completely? As a newcomer to the team, how do you consume past incidents? What does it look like?

**Nora Jones:** It is interesting. Before folks adopt some of these practices and stuff, or they're doing postmortems just to kind of get them done, they're usually not very well written, or they vary drastically in quality, depending on who's writing them, depending what other things they have going on in their org, and they're just trying to get it out the door. A really good quality incident review write-up contains a narrative section on how the thing happened. And this is actually something that Jeli published in our Howie guide, something that we opened source recently, like how to make this a really good write-up that people want to read and participate in.

There's diagrams in it documenting how your system works, how it's functioning... You have talked to people that participated in this incident and they are kind of informing the writeup, too. It's not just done in a vacuum by one person. It's referencing different things. It's referencing GitHub links. It's referencing how folks talk to each other in Slack, or how folks talk to each other in Zoom. It's referencing maybe the JIRA ticket from three years ago that was latent. That led to this. It's mentioning the business reasons that this incident came to be, or this particular change happened, or something like that.

It's really just taking people on a journey with you. And so a lot of that involves good writing skills, too. No one wants to sit there and read a dry, boring post mortem, that's a page, and that you're not actually going to learn from. Especially if you own the system too, you're like, "Yeah, I already know all this." And so it contains things that people maybe didn't know, so that it hooks their interest. And I think a really good way to discover that too is seeing, are people reading these? Are people commenting on them? Are they asking you questions on them? Are they DM-ing you?

**Adam Stacoviak:** To quote from your Howie guide, under "distribute the findings" it says, "Your work shouldn't be completed to be filed. It should be completed so it can be read and shared across the business even after the learning review has taken place and the corrective actions have been taken", which is interesting, because it's by design meant to be shared. And when you write something, you always take the reader in mind. And so the reader really is the CEO to QA, to support, to sales potentially even. I mean, it's an organizational learning opportunity.

**Nora Jones:** \[40:06\] Yeah, it should be everyone. Exactly. And a lot of the time it just ends up being a room full of engineers, and that's a huge miss. It's not the engineer's fault. In some scale incidents, it may be that the big focus is on SRE, but a lot of it needs to be distributed. It's like, how did the SRE work with marketing? How did the SRE work with understanding the business? Yeah, you're absolutely right.

**Adam Stacoviak:** I'm just quoting you back, so you're right. I'm just quoting you all back.

**Jerod Santo:** She agrees with herself. \[laughter\]

**Adam Stacoviak:** On the note of blame though, I do appreciate the glossary, where you talk about - early on in the Howie guide, you talk about being blame-aware. I think that's important to note, because I think earlier on in part one of the show we kind of talked about this vulnerability and being blamed, and there's heads rolling and things like that. It's a bad thing, back to the four-letter word. This incident or incidents, in general, are a four-letter word, or why they shouldn't be. But under the glossary for blame-aware you say, "An evolution from "blameless". We recognize that everyone works with constraints." You mentioned before, "Adam, you might have been up at 2:00 in the morning, so obviously you're going to be tired and less cognitively loaded it at 2:00 in the morning." And then you say, "And sometimes those don't appear until after an incident." So the interview process reveals circumstances. Jerod may be a stellar A-plus rock star - put whatever adjectives you want on his ability to engineer - but at 2:00 in the morning--

**Jerod Santo:** Keep going... \[laughs\]

**Adam Stacoviak:** ...the best ever. But at 2:00 in the morning, maybe not so much. So you have to take those things into context. And so these things don't appear until after an incident, and you say, "We acknowledge our tendency to blame and name names, and move past it in order to be productive."

I think it's important in this process, because you're not trying to place, like in the Sully situation, where the circumstances are more moral, really, like more possible that somebody could die or be hurt forever. Maybe that's the case with software. If you're Uber and your software goes bad, maybe somebody doesn't get picked up when they're stranded or in a situation and they need to be... So the situation could be dire.

**Nora Jones:** Absolutely.

**Adam Stacoviak:** But to be productive and move past it and to learn, we have to remove all that blame game. It's how I read that.

**Nora Jones:** Yeah. And a lot of that goes up to the top of organizations, too. It's like, what are the CEOs and the executives doing to create that kind of learning culture to make it safe to name names? Yeah. And you learn a lot about people doing these interviews, too; like you were mentioning before, things that you might not learn if you hadn't spoken to them. And you're learning more about your organization and how people are working. And having that information really helps your system, too. It can help your tenure. It can help people feel heard. It can help people feel collaborative.

**Adam Stacoviak:** It might reveal, like, "Why was Jerod up at 2:00 in the morning?"

**Nora Jones:** Right.

**Adam Stacoviak:** Why was he on pager duty four times in a row? Why was he-- okay, so this scenario, okay, sure, he was here and this error occurred because of Jerod's inability to be normal Jerod, but why was he up at 2:00 in the morning, on this duty four times in a row? What's wrong with our cycles? Why aren't we cycling this enough? Why is this duty not shared more? How can we get him an apprentice in our backup? I mean, you start to reveal things about the organizational properties and how you promote potentially even, how you hire more people to help folks not be in these situations. It does really reveal a lot. And that's if you care, right? It comes down to caring about improving.

**Nora Jones:** Yeah. I mean, I see a lot of organizations where they're like, "Yeah, Jerod's a superhuman. He's always up doing all these things. He knows everything."

**Adam Stacoviak:** Look at Jerod just smiling.

**Jerod Santo:** This is my favorite episode.

**Nora Jones:** Yeah. \[laughs\]

**Adam Stacoviak:** The audience can't see this, but Jerod is just grinning over here, because we're just laying on him, compliment after compliment.

**Jerod Santo:** They're just talking about me like I'm not here.

**Nora Jones:** \[43:54\] Jerod's amazing. He's this great superhuman man. So your org might tell you, "Hey, Jerod, we need you to stop doing some of this stuff, and we need you to start documenting everything you know." Because they might realize that it's a bit of a problem that you're a knowledge silo. But the thing is, when a Jerod or someone else is an expert in something, they are inherently bad at knowing what they have expertise in.

**Adam Stacoviak:** They are. Yeah.

**Nora Jones:** They do not know how to write down what they know, because they just know it.

**Jerod Santo:** Good point.

**Nora Jones:** They have no idea what other people don't know. And so I see orgs - and the Jerods in that situation - get really stressed out. And that's another reason why it's good to train other people how to learn like experts, rather than having the experts learn how to teach. It's much better the other way. You get a lot more value out of it.

**Break:** \[44:47\]

**Jerod Santo:** So as we talk to you, and as we talked to Brittany about this and her emphasis on engineering learning and using incidents for learning, I totally am sold on the benefits. I think it's pretty obvious, through this conversation. I'm wondering if it's kind of a hard sell to corporations, because the benefits are, after our conversation, somewhat obvious, but they're not all that quantitative, it seems. It seems like this is very much in the realm of qualitative things, where it's like, yeah, there are, but show me numbers. Show me "I can reduce my error accounts by this much", or I can buy your product for X and it's going to save me Y. And Y is greater than X, and so it's an obvious purchase. Have you a hard time getting buy-in from folks, or how's that it going? And is it as I think it is, where it's kind of hard to quantify how this process benefits a corporation?

**Nora Jones:** Yeah. A lot of orgs index on the quantitative, like you said, because it's easier to see, it's easier to measure. And so I think, especially as orgs start to feel they're having a lot of incidents, they start counting things. They start counting how many incidents they're having. They start counting what days they're having them. They start counting how quickly they resolved them... All those things, because it gives them a sense of control. But really, I think, especially in times of desperation, orgs can over-index on them, and it can actually be pretty detrimental to their learning. And so when you over-index on them, you are kind of tanking the learning. And so those numbers are not going to get any better and people are just going to get more upset over them, and you're going to end up creating this culture that you were trying to actually improve.

And so one of my favorite equations is performance improvement is a combination of error reduction plus insight generation, and it's from cognitive psychologist Gary Klein. He studies organizations, like what makes them successful; he studies how experts think. And he put it in this book called Seeing What Others Don't, and it's about a lot of what we've spoken about today. But performance improvement can't happen with just one of those sides of the equation. It can't just happen with error reduction. It can't just happen with insight generation. It needs to be a combination of the two, right? It needs to be a combination of the quantitative and the qualitative. I mean, it goes back to KPIs and OKRs. Yeah, it's great to have those numbers, but if you don't have a story behind them, if you don't have context behind them, they're meaningless and harmful. It's the same thing with error accounts and such.

So you do have to get creative with how to quantify some of this learning. Maybe you like, "Hey, how many people are reading the report? How many people are voluntarily showing up to this incident review meeting? How many people are talking in this incident review meeting? Are we getting people from sales? Are we getting people from marketing to come, or is it still just engineers? There are little things you can do to track that improvement journey, too. You can track if people are interested, or if they're giving you feedback. There's a lot of things you can track, but I'd really index on the collaboration and the learning opportunities, or if people are having those moments where they're like, "Oh, I didn't know it worked that way." That is like the best ROI you can get from one of those meetings. So there are ways to quantify it and track if you're doing it well, it's just not as clear-cut.

**Jerod Santo:** Yeah. A-ha moments, it seems like.

**Nora Jones:** A-ha moments. Yeah.

**Adam Stacoviak:** For me, it's about pop culture. And I'll explain.

**Jerod Santo:** Please do. \[laughter\]

**Adam Stacoviak:** I kind of feel like this is the joke that Jeff Foxworthy shares a lot, "You might be a redneck if...", and it's almost like - turn it differently, "You need incident management if... The last time you had an incident, people left." Or the last time you had an incident, somebody was promoted, because they were actually learning how did they do that.

**Nora Jones:** Yeah.

**Adam Stacoviak:** You might need incident management and employ it in your organization if the last incident meeting you had had two people in it, and one person talked. You know what I mean? Some sort of chart, "You might need this if..." And I know it's pop culture. I'm going back to Sully as pop culture, and then Jeff Foxworthy is pop culture...

**Jerod Santo:** Does Jeff Foxworthy still count as pop culture? The '90s pop culture.

**Adam Stacoviak:** \[52:08\] Yeah. It's still out there on the internet. Sure. It was pop and it was part of culture. So there you go. But you might be a redneck if, or you might need incident manage if.

**Jerod Santo:** Yeah. There you go.

**Adam Stacoviak:** Because then if you can answer those questions, it's like - hey, if this is a result of some of these things happening in organization, then you could probably benefit. And if you've had this, then that's a direct sign to empathy, because somebody felt that pain; somebody lost their job, was demoted, left. I mean, you might leave an organization if they're not managing incidents properly. If you're not learning from mistakes, why stay?

**Jerod Santo:** Right.

**Nora Jones:** Right. Exactly. Yeah. And people are going to get stalled out and not feel great at the organization, which-- yeah, this whole thing has business benefits to it. And I think that's what a lot of executives will need to realize, is the business benefits behind enabling and allowing something like this to take place.

**Adam Stacoviak:** But if the SREs on the front line of this though - is it the SREs and those who are surrounding the SREs, their adjacents, are they the ones coming to Jeli and saying, "Hey, I need this thing"? Or are they already doing what Jeli does behind the scenes with bespoke internal software, and Jeli just makes it not have to manage anymore? How does Jeli become a useful tool for, I guess, teams at large?

**Nora Jones:** Yeah, so what Jeli does is we help you ingest and collect the data from the conversation that you had during the incident. So the conversation data, like how you talked to each other, who you pulled in, who you paged, that points to a lot of the areas in your system that need technical explanation, like "Wow, why did we need Adam here? Adam wasn't on call. He was on call for this incident yesterday. This incident looks like X, Y, Z." And so really what we're trying to get people to see is the power of studying that chat transcript after it takes place, and we're giving you tools to study and to analyze and to mark up and annotate that chat transcript. But not only that, you're aggregating it with that pager duty information, with that information from your HR systems, to really get a full, comprehensive view.

So I haven't seen any internal tools at a lot of companies do this. Most organizations are writing something up in a Google Doc or a Notion page, but the thing is those tools are not meant for incident analysis. They're not meant for learning. And so what Jeli does is gives you this playground to learn in all those tools at your disposal, so that you're getting the most out of it. And you're bumping up the quality of your review, but you're also kind of saving time, too.

**Adam Stacoviak:** I almost feel like it's akin to past scars for me, which was adopting Scrum/Agile, and you needed somebody to sort of guide you. Do you ever get into a situation where you need to employ a guide for the orgs that are hiring and buying your software, that they often need somebody as like a concierge service or something like that, to say "Okay, you're doing it right", somebody to kind of hold the hand of the process? Or is it pretty self-serve?

**Nora Jones:** It's a good question. It all depends on how much you want to invest in it. We strive to make the tool itself really self-serve, so you don't need that. We're trying to guide you through -- within the application itself, it doesn't assume that you've ever done any sort of incident analysis before. It kind of assumes that you have probably just written something up like in a Google Doc, or you haven't really thought about this space as much. So we really aim to make the tool self-serve. However, we do have a few customers that are really invested in getting good at this, and those are customers that are actually hiring full-time incident analysts... Whereas some organizations, they'll just have people do it as part of their job, and they're an SRE, they're software engineer. So I think with those organizations - yeah, they're really trying to build it up and really trying to make it a thing, but it doesn't necessarily need a human guide. It needs champions for sure.

**Adam Stacoviak:** Is this the next big job in an org like this? I mean--

**Jerod Santo:** Incident analyst?

**Adam Stacoviak:** Yeah.

**Nora Jones:** \[56:04\] Yeah, I think so. I mean, having done the job a little bit and getting to work with customers that are really amazing at it - it's fantastic to see. Indeed, the company, is creating jobs like this. Zero is doing that, too. It's really cool to see, and it's really cool to see how it impacts the organization.

So I do think it's probably a next big job, and it does require an engineering, technical background, because you need to be able to ask the nitty-gritty questions, and you need to be able to talk to experts of these systems in ways that like y'all can understand each other.

**Jerod Santo:** What did you call it earlier? Distributed systems cultural anthropologists, or something like that?

**Nora Jones:** Yeah.

**Adam Stacoviak:** It's a little long.

**Jerod Santo:** I mean, how cool would that to be your title, you know?

**Nora Jones:** Right.

**Jerod Santo:** That would be so cool. I mean, it does sound like a fun job; I mean, I guess as people that talk to others often as part of what we do, maybe Adam and I are predisposed to such a role, so maybe it's exciting for me, but other engineers are like, "I never want to talk to that human." That's certainly an ethos out there.

**Adam Stacoviak:** You can call me a DSCA. I'm a DSCA. What is that?

**Jerod Santo:** I'm a DSCA.

**Adam Stacoviak:** Distributed systems cultural anthropologist.

**Jerod Santo:** Right.

**Adam Stacoviak:** I mean, that's a mouthful. So just--

**Nora Jones:** It sounds super official.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** And DSCA - I mean, with an acronym like that, you've got to get paid pretty good money, I think.

**Adam Stacoviak:** But you can put a comma, and then DSCA after your name. It's like--

**Jerod Santo:** Put a comma in.

**Nora Jones:** Yeah.

**Adam Stacoviak:** That's right, because now--

**Jerod Santo:** There probably will be a whole little cottage industry of consultants popping up and selling things around this. Whenever there's a new opportunity, there's gold in them hills, these things happen. The interview process sounds like it's crucial to this. And I know the Howie guide obviously is a step-by-step guide through doing an interview and how to do it, and stuff. Are these usually recorded? Are there usually audio artifacts?

**Nora Jones:** I highly recommend recording them if you can. But the thing is, as the interviewer or the cultural anthropologists of sorts, you need to really assure the person you're interviewing that what they say will be confidential. Because you really want them to just fully share their experience. So part of it is knowing how to ask questions and unearth expertise, but the other part is having empathy and being a trusted source. And then you have to aggregate all the people that you interviewed. You have to aggregate all their stories, because none of them have the full picture.

**Jerod Santo:** Right.

**Nora Jones:** And try to tell the full picture within all their stories. And so you're giving them kind of an outlet to share. So I do recommend they are recorded, but some people aren't comfortable with that, and so I always ask the person I'm interviewing, "If it's okay, I'd like to record this, just for my eyes only, so that I can pay attention to you right now, and then look for things afterwards that you might have told me." But I always tell them, "If you want to cut at any point, just go like this." I have had people do that before. I've had interviews where people have gotten very upset, because they've been talking about a particular thing for so long and no one's quite listening to them; but that's data in it itself, right? And you have to figure out how to take that data and help make them look really good.

**Adam Stacoviak:** So you just pointed out a particular attribute about this job that I wasn't necessarily considering, and I think maybe having some sort of specification on it is important, because you want that person to gain the confidence and the trust of the people they're talking to, but then also hold that in confidence. And how do they shield themselves from the organization that employs them? How do they do-- you can give me that promise, but then, well, that's just yours to me. The employer may say, "No, no. All of your sources are revealed to me", kind of thing. It's almost like a journalist, "I can't reveal my source." How do we get to a point where we can actually make that a legitimate attribute for this position? Because at some point, you may lose that trust and you might break that fourth wall, so to speak, and share things you probably regret, basically.

**Nora Jones:** \[01:00:10.15\] Yeah. I mean, I've definitely had folks share things that they probably don't want to have said out loud, and it's really your role to keep it in confidence. Otherwise, as soon as you break that confidence, people are going to stop telling you stuff, and these incident reviews are not going to be that good anymore.

**Adam Stacoviak:** Right. They won't trust the process anymore.

**Nora Jones:** They don't trust the process. I mean, I've told people I'm training on this, it can feel a little bit like therapy... And that's okay, because they've honestly just had something stressful happen to them, and so you are their outlet to vent, honestly, a little bit, too. The goal of the interview is not to just have a vent session or have them be super upset the whole time. The goal is to - yeah, unearth what they have expertise on. And so an expert interviewer will know how to take some of that and say, "Wow, that must have been really hard for you", and kind of steer the conversation in productive ways, too. But yeah, I'm sure something could be said at some point that you kind of need to share, and ultimately, that should be avoided. Otherwise, it kind of ruins the program and the organization, and the people at the top need to be bought into it too, and not asking the person what people are saying.

**Adam Stacoviak:** It makes me think of HR in a way, because HR in an organization, you think, "Well, this team is for me." Not most cases, right? Maybe in some cases they are, maybe personally may have made a friend or whatever, but really HR is to the corporation to help the corporation; it just manages resources, which tend to be humans. In some cases, I guess we do have robots and software, but... I wouldn't want this role to get in the light of HR, because if you want this to be productive and be a learning process, we have to protect that role, in a way. So if this does become the next big job, how do we enable it to be a trusted resource?

**Nora Jones:** I mean, part of it is understanding the whole point of it. And the point is not to collect all the gossip or be an ear to the ground for the CTO. It's to help people learn. And so having the executives keep that in mind too, like "You are going to ruin this if you're asking these kinds of questions." I've actually been in orgs where I've interviewed the CTO after an incident. And they're not excluded from participating in this either, because they are parts of the system, too. And so I think that can actually be helpful.

**Adam Stacoviak:** And did you work for the CTO at the time, or you were a third party?

**Nora Jones:** No, I worked for the CTO at the time.

**Adam Stacoviak:** Was there a strange power dynamic in that circumstance?

**Nora Jones:** \[01:02:42.07\] It's interesting. I mean, obviously, inherently there was, but no. I mean, in that particular room, in that particular moment, I was the interviewer, and the CTO was a person that participated in the incident, and we both fell into those roles. But yeah, I think that's a really important thing too, is to not just be interviewing the engineers, it's to be interviewing everyone in the system, and that sometimes might involve someone in the C-suite.

**Adam Stacoviak:** Wow. It's like an investigator, right? It's like, "I'm a detective now."

**Nora Jones:** Exactly.

**Jerod Santo:** It's starting to sound like internal affairs, or something.

**Nora Jones:** Yeah.

**Adam Stacoviak:** Yeah. That's true. Like IF, yes.

**Jerod Santo:** So depending on how you do it, you could be despised by your colleagues if you're not good at it.

**Nora Jones:** Yeah. And that's the thing, you have to be really likable. I tell orgs that are trying to roll out these programs, like "You don't have to have this particular role to use Jeli. Jeli is meant to be used for any engineer, in any organization. This is just if you want to take things to the next level." But I always tell people, "You need to be likable. You need to be likeable by your colleagues. You can't be just writing things down that they're saying. You need to be trusted by them." You need to have a good reputation too, which is why I usually recommend hiring someone internally to do this, someone that has been a good engineer, because they've already built that trust with their colleagues.

**Jerod Santo:** So for somebody who would like to get started as a distributed systems cultural anthropologist, or an incident analyst, I guess, if you're more into brevity, we have the Howie guide link, of course, so everybody listening can reference that in the show notes. But in terms of anything else, in terms of like, "This is interesting to me as a career path or for my org", obviously jeli.io, but where do you send people? I know there's like a community of folks. This is not just yourself leading this charge. There's a community around this whole movement, right?

**Nora Jones:** Yeah. There's for sure, community. I started the Learning From Incidents community early 2019, with a few of my Netflix colleagues; there's a few other folks running it, too... And it's grown to over 300 people at this point. We try to keep it intentionally small, because we want people to be comfortable participating and sharing their incidents in their orgs, but it's across several different companies that are trying this and rolling this out. And we've open sourced a lot of the learnings from that community. You can go to learningfromincidents.io and you can see write-ups from folks all throughout the industry trying some of this stuff in their organizations.

**Adam Stacoviak:** I tell you I just get to an end of a show like this and I'm just thankful that someone like you and others out there that care about this are pouring so much into it. And then I guess being so fed up/inspired to literally found a company two and a half years ago - you're still here, so maybe you're successful, maybe you're not. We haven't really led into the success of the company, but I'm so thankful that you're out there fighting this fight, and that there could be a cottage industry of a brand new role for us to move into or for others to move into, because it's just good for the progress and entropy of how things work.

**Nora Jones:** Totally.

**Adam Stacoviak:** There are a lot of references at the bottom of the Howie guide, so I would reference those references to the listener. We'll link it up, obviously. Nora, anything else, anything in closing, anything that you want to share with our listeners before we call this show a show?

**Nora Jones:** There's a lot of ways to get good at this, and there's a lot of material out there in it. It can be overwhelming, and the whole reason for founding Jeli and the whole reason for doing what we do is to disseminate this more and make it more easily accessible, to allow people to kind of have the starting point without pouring through all this material, all these academic papers and such. So yeah, that's my closing thing, but it's been really great hanging out with y'all.

**Adam Stacoviak:** It has been fun, Nora. Thank you so much for your time. We appreciate you.

**Nora Jones:** Yeah. Thank you. Take care. Bye.
