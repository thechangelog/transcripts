**Adam Stacoviak:** Evan, welcome to Founders Talk. It's been I think a little while... We've had you coming on the show for a bit, we had to reschedule a couple times, but man, I'm such a fan of Influx data, such a fan of what you guys are doing over there really, and I'm just so happy to have you on the show today, so welcome.

**Evan Kaplan:** That's great, Adam. Thanks for having me, man. Looking forward to it myself.

**Adam Stacoviak:** You know, there's a couple different lenses of this show... We frame the journey of the entrepreneur, the founder, the CEO... There's some framing around that too, where CEOs tend to have a different role than really anybody else in the organization; they tend to be isolated, to some degree, because they carry a lot of the troubles and the challenges and the stresses... So really, this show can go a lot of different directions; we can go in a product direction, we could talk about the ups and downs of being a CEO, the isolation, or even the possibility of being a CEO. But really, just kind of going in and out of the different lenses, from product vision, to leading the company, to all the different things... But I know a little bit about your story with InfluxData; I'd like to go back, maybe if you agree that's the beginning for your story really is when you met Paul initially. You can tell me that journey there with your Trinity Ventures, maybe even some of the struggles that preceded that, which was your prior CEO roles... I mean, you've been a CEO for 22+ years, from my math... So help me understand - you've been a CEO for a while, so you've got to have some stories. So let's do that.

**Evan Kaplan:** \[00:04:05.12\] I do have some stories, man. When I take it back a little bit about my history, and how I show up meeting Paul at Influx, and all the dynamics around it... So my background is a native New Yorker, and I moved to the West Coast because I was really interested in climbing and skiing... And I didn't have a real job until late twenties. I'd mostly been working for organizations like Outward Bound, or guide in climbing or skiing, or working with \[unintelligible 00:04:33.24\] things like that. So totally nothing to do with tech. Always interested in tech, but just from a distance.

My first job was working in aerospace, actually not doing anything technical, but doing management training and development... I did that for a year, and got really into the technical side, and I jumped into a program management role for flight computers, working closely with Boeing, and Airbus, and companies like that... And I just really enjoyed working with engineers and developers, software and hardware.

I had a climbing buddy who had started a company in Seattle; probably people don't know that anymore, it's now part of \[unintelligible 00:05:14.17\] it's a super fast-growing company... And I got involved with them, and I joined them, and was around for the early days of TCP/IP...

**Adam Stacoviak:** Okay.

**Evan Kaplan:** ...when it first started coming up in enterprise networks, early stuff like that. I was involved with the licensing of the original Spyglass browsers... So that sort of places me in age and time, which makes me old as... Old. Let's just call it old.

**Adam Stacoviak:** Experienced, I like to say. I liked to say experienced.

**Evan Kaplan:** Yeah, experienced. That's a nice way to put it. And then I started a company out of my house with a friend of mine, to do the first SSL VPNs; very much a networking and security layer; five VPNs built on SSL... And went on a really wild ride with that. Kind of a unicorn of our day, and then post the 2000 we lost everything, and rebuilt it again, and eventually sold it to a company called SonicWall, a part of DELL...

**Adam Stacoviak:** I used to be in IT and sold SonicWall firewalls.

**Evan Kaplan:** Yeah, they're still around.

**Adam Stacoviak:** Yeah. Hardware appliances.

**Evan Kaplan:** You're part of DELL now, yeah.

**Adam Stacoviak:** This was 2005 for me... So not too long ago, but... It feels like ages for me. 2004-2005.

**Evan Kaplan:** Yeah. I was there... That was just before we sold the company. So that was a wild ride; it was, you know, pretty inflated during the first part, pretty deflated after the second part, but working through that, and I would say earnings stripes and maturity as a CEO, and going through it... Super-proud, we had a great team there. The company was called Aventail.

Then I took a year off and moved to Jackson Hole, Wyoming, and did some more skiing, and stuff like that. At my point we had a two or three-year-old. Then I got an offer here in the Bay Area, to run a public company focused on global WiFi called iPass. And that was a difficult process, a really interesting process, of a change of a business model, and a bunch of other stuff, and active as shareholders, and developing all kinds of experiences as a CEO that I probably didn't need, but got anyway.

It wasn't a ton of fun, but I met some really wonderful people, and moved to the Bay Area from Seattle, and I enjoyed that... And then, during the break from that, I went to Nepal, after the earthquakes, and helped out... And then worked at Trinity as an executive in residence, which is where my path crossed with Paul.

So I think Paul and I bonded originally on what this entrepreneurial journey is about. Really the ups and the downs, and the fundraising, and all the things it takes to build a company from nothing. I was super-impressed with Paul, and at that time his co-founder, Todd, what they had been able to do. They were about 20 people.

\[00:08:05.20\] So while I was at Trinity, I was advising them, and then they asked if I would join as CEO. It wasn't my plan at that point to join that early of a stage company, but there were 4-5 things I really liked about Influx, that really laid the foundation for it. One was - it's pretty hard for a CEO to come in where a founder is. It's a pretty narrow path to do that successfully, and it takes a fair amount of emotional maturity on both sides of the equation.

With Paul particularly I felt like we could do that. It turns out five years later we have been able to do that really well... But it's a tricky, tricky thing, and underestimated, and I think the benefit there is that I was a founder.

**Adam Stacoviak:** You had your stripes, as you said. You had your scars and your stripes.

**Evan Kaplan:** Yeah. I didn't see myself as a CEO for hire. I saw myself as a \[unintelligible 00:09:00.16\] So Paul and I struck up this agreement that I think has held us really well for a long time now, which is he's never treated me as anything but a founder, even though I'm not, technically... And I've never treated him as anything but a partner. I don't make any major decisions about the product, the company without he and I being in alignment about it... Which is wonderful, because we fight, we make fun of each other, we do a lot of stuff together, but we've maintained that relationship.

**Adam Stacoviak:** That's good.

**Evan Kaplan:** And it's actually been really great. You've had Paul on your podcast, so you know.

**Adam Stacoviak:** Yeah. I'm a big fan of Paul. I like how he looks at things. I like just how he decision-makes, I like the way he thinks about open source, I like the way he thinks about business, and the community, and how it all intertwines; the necessity of all parts, really, to get to where we all wanna go. And that's what I love most about Paul.

**Evan Kaplan:** Yeah, I think he does a really nice job with being an advocate in the open source community. Paul would always say, strong opinions, loosely held. And that works really well between us, which is -- but it's because we've had to make some major decisions along the way together which have really cemented our partnership.

So kind of back to the Influx thing - when I was running the public company, we had a couple of pretty significant open source projects. One was based on Mongo, it was pretty ad hoc, and we plug and played, and we were able to be very successful... And one was based on the Hadoop infrastructure, with Cloudera and a bunch of other open source components, and it was really difficult. It was a super-difficult integration. And what happened in that process - I developed a lot of conviction about open source, and I also developed some conviction about how and how not to open source. And the thing that appealed to me about Influx at the time - it still does - was that sort of ease of use, the quickness, following in the same footsteps as Mongo is... How quickly can a developer be productive, how quickly can they do stuff, how quickly can they build stuff. That really drew me in. And Paul had a really compelling vision around that; this notion of "time to awesome", he called it.

**Adam Stacoviak:** Is that right?

**Evan Kaplan:** Which has held the brand. Yeah.

**Adam Stacoviak:** I like that, "time to awesome." But how does he frame time to awesome? What does that mean?

**Evan Kaplan:** He frames it in the context of -- if you ask him, he goes back to his Ruby on Rails days, and how that framework helped people quickly do stuff very quickly, and how it empowered developers... And that matched with my personality theory, which is something like - people at work wanna feel powerful, they wanna feel effective, and they wanna feel like the tools they're using are helping them... And Paul had this view that he could create a time series platform. It was that kind of effective tool that very quickly you could be up and running, build something in a schemaless fashion; find it highly pragmatic, but allow it to scale later also. That was a unique point of view he had, and I think he executed really well. I know he executed it well.

**Adam Stacoviak:** \[00:12:00.15\] Yeah, absolutely. You mentioned some convictions about open source... What were the positives, I suppose, and negatives to those convictions?

**Evan Kaplan:** You know, I think it became clear to me that, particularly as a data and the infrastructure framework, there was a huge displacement gonna happen from what was classic during most of my career; you could use Oracle, and you could do Db2, and if you were super-adventurous \[unintelligible 00:12:23.24\] And obviously, over the last 15 years, starting with MySQL and the other database platforms, you saw the fragmentation of most franchises, and you were seeing a slow and sure, steady replacement of those franchises, too... And they were all open source.

**Adam Stacoviak:** Yeah.

**Evan Kaplan:** Steady replacement is happening in the open source, or open source-based world. So that became clear to me, that the next generation of infrastructure was gonna be built on open source. And then if you look at the cloud providers, what they for better or worse were starting to build on was open source, whether it was Amazon, and... You know, that's a controversial topic, but the other platforms and things like that...

**Adam Stacoviak:** Oh, let's go there as much as you want to. Don't shy away from it if you've got thoughts and feelings.

**Evan Kaplan:** You know, I don't have really strong feelings, it's just the factoids of Amazon taking advantage of the open source platforms to build their commercial platforms, having a significant competitive advantage because the infrastructure costs to them are dramatically cheaper than anybody can... But I'm not willing to cede that that's a competitive barrier that people can't get through, because people are getting through it. If you look at Databricks with Spark, if you look at Confluent with Kafka, if you look at Mongo with Mongo... But there are competitors with each of the cloud providers for those offerings, but the brand names, the ones that have the open source community, are truly thriving as independents. And certainly we fit in that world. Even Elastic - they were probably the most hurt by this, and even they are thriving pretty well, very well, as independents.

So I think the communities you build around this open source are more important the fact that it's hosted on infrastructure as part of your Amazon account or your Azure account. That's at least our belief.

**Adam Stacoviak:** One part of the conversation that we actually had - and Paul was a part of this as well -was the Amazon versus Elastic essentially, this idea... And one of the opinions shared there from Adam Jacob was around essentially AWS being the marketing funnel for an open source project, because they're just so massive and just so big... While they may compete with you, they're also giving you extreme brand distribution. So if you can win... I even recall Paul talking about how with IOx and some feature products that we might talk about here on the show today, that you're by design designing some of the futures of Influx data, by design, to be competed with... With InfluxData Cloud, for example.

So I think there's some disadvantage there, but I think it's also important to talk about the advantages of AWS choosing Elastic or some sort of other thing. And sure, there definitely is some misuse there, but I think there's also an opportunity to say "That's a significantly larger audience that hears about my thing, that would not have heard about it..." Because open source is all about adoption, and adoption requires distribution.

**Evan Kaplan:** Yeah, it's interesting. I did actually listen to Adam's take, the podcast, when you did it. Actually, Paul forwarded it to me and I listened to it. I have a bunch of thoughts about this, Adam, so cut me off, but... I think there really is a different thing... I think the dynamic that I think at Chef - am I remembering that correctly...?

**Adam Stacoviak:** Yeah.

**Evan Kaplan:** ...that Chef had with Amazon was a strategic partnership...

**Adam Stacoviak:** Exactly.

**Evan Kaplan:** ...and that sort of stuff. That is not the relationship that Elastic had, right? My view is that Amazon's -- I personally don't need Amazon's \[unintelligible 00:15:56.06\] to make our products successful. I need developers who are engaged in the community, who can see it. Now, we run our stuff on Amazon, so we definitely use their marketing partnership...

**Adam Stacoviak:** \[00:16:11.07\] Yeah.

**Evan Kaplan:** ...but I don't need Amazon to run it as a product for us to be successful. I don't wanna put words in the mouth of Jay at Confluent, or the folks at Mongo, or Databricks, but I would suggest that they probably need to be able to host it on their platform, but don't need them to run and to be successful. I think that was a little bit overstated. That was probably a year and a half ago when you did that, Adam, I don't remember...

**Adam Stacoviak:** That particular show I believe was earlier this year, if I recall correctly...

**Evan Kaplan:** Oh, was it that? Okay.

**Adam Stacoviak:** Yeah, it was. It's been a long two years, let's say, Evan... So was it last year? Was it this year? It was actually February this year. It was right after \[unintelligible 00:16:50.07\] which I agree with, and we have a future episode release with \[unintelligible 00:16:59.14\] here on Founders Talk, that is gonna be awesome, that we haven't had the chance to release yet, but... And I don't wanna dwell too deeply on this, but... You know, what I wanna focus on really is your particular challenges at InfluxData around open source, and this particular thing... Because from what I understand about Paul's vision of open source and for Influx is to be permissive, and to be -- to be permissive, but then something he also mentioned on that show is... And maybe we're jumping the gun a little bit here, getting kind of into vision and product direction, and maybe tactical advantages in how you do things, but... He described a world where you have two teams inside of InfluxData - one working on the open source and one working on InfluxData the IOx platform that he had talked about as a future thing for you all. I'm sure we'll talk about that, but... He just talked about how you can create a world that by design you can be competed with, but you have that advantage too, because you're the creators of InfluxData, and everything else that goes along with that - Telegraph etc.

So I wanna understand, from a leading an open source company, leading a company that's built upon open source, what are those challenges? What are those hurdles that you face? What are those decision that you, Paul, and others have to make year-by-year, week-by-week, to deliver to your customers and to the open source world, but also thrive as a company.

**Evan Kaplan:** Yeah, Adam, it's a great way to frame the question, and I think \[unintelligible 00:18:23.07\] So when I first started with Paul, I referred to that process of making decisions. But when we first started together, I had joined the company, and I was thinking we didn't need to do much about monetization for a year, a year and a half, while we worked on building the community and putting really good stuff out into the community.

When I went to raise money back in -- this was 2016, the headlines in the venture world, which we were on that path, so we had to pay attention to that, were "Nobody in open source makes money expect Red Hat." That was the headline. So it was a time when Mongo had done a down round, Couchbase had done a down round... It had been a little bit of a blip in this open source rising tide, right? So it was difficult. So Paul and I had to figure out how to monetize relatively quickly.

We had much discussion, we went through a process, I talked to other CEOs at the time who were running open source companies, and we made the decision to monetize around open core. It wasn't what we wanted to do at the time, but we felt like we needed to do if we were gonna keep the company going. We needed to find a way to monetize in order to raise capital \[unintelligible 00:19:46.05\] company decision, because if the community had died off, or really reacted negatively - and they did, for a little bit; some people, the normal Hacker News threads were pretty tough... It is "Hey, you're taking out the scaling capability. Not taking it out, but you're only putting in scaling into the closed source stuff." We caught some flack for that. But the community continued to grow and grow, and it still grew very fast. Would it have grown faster? Yeah, I think it would have grown faster if we would have put that closed source stuff in... But we had to make the choice to be open core.

\[00:20:21.26\] And the other part is what if nobody was willing to buy based on that? So both things turned out to be true. We grew pretty fast, and they were willing to buy, and the community grew. So that was \[unintelligible 00:20:29.24\] but we never really wanted to be an open core company in that way... So we rode that model for a long period of time. But when it came to the next big decision about our software, which was IOx, about what we were gonna do, we continued to MIT-license the core, and all that sort of stuff.

Paul -- we had a habit of saying "Make a decision when it needs to be made, but make a working decision as soon as you can." So we make a working decision about the way we were gonna approach this, and all that. And on the licensing, the working decision was we would keep IOx open source. But I had some significant concerns about that, because if you watched the other open source vendors during that period of time, Elastic came up with their licensing, and sort of secondary licensing, other people were doing it... It seemed like most everybody was trying to do AGPL writ large in 2020. And the former CEO of Mongo is on my board, who's a really phenomenal board member, so we talked a bunch about this... But Paul and I eventually came to the decision, with a lot of the folks on the team, we were gonna do open source for IOx. Complete, permissively-licensed.

And Paul's point of view was - and I think this is what won the day for me - if you can't compete on your own product and your own technology, that you're doing the developing on, then you have a different problem. Now, I get it, there are structural advantages to cloud providers and things like that, but you should be able to compete. You should be able to build a development organization that's capable of innovating on top of your product. So that was one point.

Secondly is if you really wanna be successful, then you have to build community around your stuff. If you're gonna be open source, you can't be half open source. And anything, even the small things that inhibit community - Paul was allergic to that. Even though you could argue with some of these secondary licenses you get the source code, you get all this other stuff and all that, Paul's argument was "The great projects started with complete open source", whether it be Spark, whether it be Kubernetes, or whether it be Linux, or whether it be the \[unintelligible 00:22:40.16\] Let's start out like we're gonna build a great project.

And I thought that was pretty clear thinking. I mean, I had to sit on it for a while, because you know, I have to make this business commercially-viable, too. But it was a really good process for us.

**Break:** \[00:23:00.07\]

**Adam Stacoviak:** We jumped ahead a little bit, but to rewind a tiny bit, when it comes down to the way you came in as CEO, you mentioned this pathway where it's a narrow pathway to do it successfully, where you had a founder in place, to come in as a CEO next to that founder... And then you'd mentioned an agreement; I'd love to go back to that at some point. I'm curious about some of the details that might be in there, that might be something we can extract... But just how you come down to making decisions day to day. Is it Evan CEO, Paul is CTO, and do you have challenging decision-making? How do you come to decisions like that even?

**Evan Kaplan:** I think we're comfortable with the process. And the process isn't just Paul and I, obviously; it's other members of the team, and other employees, and things like that... So my view is if I have ever have to use power, I've already lost. In other words, if I have to say "We're doing it this way because I'm the CEO", if I ever come close to that, I'm saying "Listen... I'm gonna make the call here. I need you to support me. If you can't support me, let's talk through it." But that's the worst it ever gets.

**Adam Stacoviak:** Yeah, I like that approach.

**Evan Kaplan:** It is very rarely a dictate. I've got kids, I've got 15 and 16-year-olds... You just can't use power that way. It just doesn't work, especially with the super-smart people, and qualified. So I don't really attempt it. And with Paul and I - it's not even hard. It's like, if Paul has a big idea and a big investment... You know, like "We move to the total cloud-native platform as the way to monetize" - it was a big, big investment, a big bet in the company. It wasn't like I said, "Okay Paul, let's just do that." I said "Okay, you've gotta sell. We are the constituents around the team." And then we've gotta go sell our investors that this is what we're doing.

You know, one of the things you learn as years of doing this -- \[unintelligible 00:26:15.29\] a big part of your job is selling.

**Adam Stacoviak:** Yeah.

**Evan Kaplan:** And selling not in the bad, pejorative way, but selling in a positive way, which is bringing people on board with you, whether it's investors, employees, or customers - how do you bring people on board? That becomes the really important part. So with Paul and I - he has to bring me on board, I have to bring him on board... By the time a decision is made, neither of us gets to be where "Oh, I wasn't really into that decision" or "It was off board." That doesn't happen.

**Adam Stacoviak:** I like your framing around if you're using the title alone... Because chief executive officer is the role that makes the decisions, but it doesn't have to be "Well, because I'm CEO, I say we go this way." When you're using your title or your power in that way, I like how you say you've already lost. Because I've got kids too, and if you juxtapose the two in parallel, if I have to force my way with anybody working with me - I have a business partner; if I have to force my way because of my role or his role... Same with kids, "Well, you're doing this because dad said so." That almost never works. It might work -- and I've got younger kids. I've got 5, I've got less than 2, and then a 17-year-old. So a quite spectrum there, but...

**Evan Kaplan:** Wow.

**Adam Stacoviak:** If I have ever have to make a decision as "Because dad said so", I might win at five years old, but I lose at 17... You know what I mean? If he's five, I might win. "Well, okay, dad. Cool." But 10, 12, 15, 17... I'm gonna lose. So that's when the awareness, and the intellect comes in... "I've got my own power. I've got my own ways, I've got my own thoughts. I'm gonna go my way."

**Evan Kaplan:** \[00:27:58.13\] You have a great view of that if you have kids with that age range. I have a 15 and a 16-year-old, and... Yeah. So yeah, I don't have that power anymore, and they're more likely to make fun of me than do anything else.

But it actually goes to the core value of the company, and we spend a lot of time on values at our company... But it comes to a core value, which is humility. Because I'm just not smart enough. And trusting that the people around the table, and trying to gather the multiple perspectives, and coming to that with some humility is really important. So the cup's already full, and it's very hard for people to add... So I try to take the approach -- and we as a company try to take the approach that we wanna face up to these challenges with humility. So if that's the case, you can't be dictatorial in your approach. It just doesn't work.

**Adam Stacoviak:** Help me understand then... Is there any details in the agreement that you'd come up with? Because you alluded to something; I'm not sure if there was details to surface or not, but... I'd love to know what made you feel comfortable coming on as CEO in this narrow pathway, as you've described it. Between your relationship with Paul, what made you comfortable taking on the role and the challenge, given your 22 -- I guess now with this CEOship at 22 years of experience leading.

**Evan Kaplan:** So first of all, there was no official agreement. I think we operated together for 3-4 months and we realized that this is the implicit agreement. So I think at some point I just said "This is it. This is how we're doing it." Certainly, when I joined - you know, I was sitting at a venture firm, so it could easily feel like the investors are trying to tell you "You need a professional CEO, so get this one", and all that sort of stuff... I've been the founder in those kinds of discussions, and it's super-uncomfortable and anxiety-provoking... So it had to be Paul asking me, and at the time the other co-founder, Todd, asking me... And they did. We had a number of dinners, and we talked about it, and at some point you were just like "Okay. Whatever. I'm gonna plunge in. I like these guys, I like what they're doing."

I should also say that Paul and I were both into crossfit, still are, and so we bonded around that stuff. And if you know anything about crossfit, if anybody is into crossfit, they can't stop talking about it, so that helped.

**Adam Stacoviak:** Yeah. So there was some symbiosis. You guys gelled very well, basically. You understood what he was trying to do. You weren't suggesting it by force, "Hey, you're not CEO enough, Paul..."

**Evan Kaplan:** No. Definitely not.

**Adam Stacoviak:** Yeah. Given the trajectory of InfluxData though, this seems like a very wise choice, to bring you on as CEO, in that narrow pathway, as you mentioned... Because you've been able to be commercially viable, you've been able to succeed, you've been able to fundraise... It seems like this was successful, for you and for the company. This choice, six years ago.

**Evan Kaplan:** Yeah, I certainly am super-proud of what we've been able to do, but it's easy for both Paul and I to see all the warts along the way. So neither one of us would say we're super-successful, even though the business is doing quite well, and we're growing quite fast... Both of us realize "Oh, we could have done this..." So there's some of those dynamics. But yes, I think it was a good choice for both of us. It worked out.

**Adam Stacoviak:** I ask a few questions to prime the conversation, so to speak, and I asked you about successes, and you said "I tend to discount successes." So because of what you've just said there, I'm gonna pull that in... You said "I tend to discount successes..."

**Evan Kaplan:** Yikes.

**Adam Stacoviak:** "...and tend to focus on how I (or we) can do better. But I'm proud of navigating difficult times." Can you extrapolate on that? Why do you tend to see the challenges, I suppose -- you discount the successes.

**Evan Kaplan:** It's a really good question...

**Adam Stacoviak:** \[00:31:52.24\] I'm a "celebrate the wins" kind of person. That's why I frame that question like that, because I think you have to celebrate the wins, and I think it does take some effort to see the wins, because sometimes you're just so focused on the horizon that you kind of forget all the little narrow pathways and all the different things you've done to get there, as a team, as an individual. I'm personally a "celebrate the wins" kind of person; I feel like that really amps things up, and you can see that, and then also do it.

**Evan Kaplan:** Yeah. So I know this about myself, for better or worse, and I would say generally for worse... So if given the choice of the kind of genetics or the kind of things that \[unintelligible 00:32:30.17\] or that sort of stuff, I would be a better "celebrate the wins" kind of person... But you know, I anticipate the wins, I anticipate the wins, and when they happen, they're fleeting... As opposed to "I'm onto the next challenge. I can do better."

But what I do do a pretty good job is make sure people know that about me, so I work with folks who make sure we celebrate the wins as a company... But we can always do better. I think Paul and I are a little common that way, so we tend to be self-reflective and critical, so we're always trying to say "Better, better, better, better...", so we lose some of that thread... I don't personally think it's a great quality of mine, but it's something I'm at least aware of, to try to compensate for. And in fact, there are specific times when I'll tell the team "Okay, just remind me. We'll celebrate the wins. Let's do it. Remind me. Let's go."

**Adam Stacoviak:** That's good too though, because if you can recognize -- I think that's a skill that it sounds like you're born with, to recognize the wins and celebrate them. I think if you can recognize that you lack in that area, but you surround yourself with teammates that see that clearly and can remind you of the wins, I think that's good, too.

Tell me about the difficult times. Give me some of the examples of navigating some difficult times, when you discount the successes and you navigate towards those things.

**Evan Kaplan:** You know, I've been through multiple turnarounds... When I started my own company and we thought we were really great, we had built a really great team, and then we were about to go public and working with bankers, and then 2000 hit and all of a sudden we were burning a huge amount of cash, and I had to raise money in a really urgent fashion, and everything changed - then I had to rebuild the company, reestablish a vision... I had to de-enroll employees; I said earlier, it's really hard to enroll folks in that motion, when you're bringing employees on, but when you have to de-enroll them it's even harder. And that was during a difficult time, and so we survived that, we rebuilt the business, and then we were able to break it up and sell it in the right points, and at least try to return some of the capital and make the best we could out of the situation. But that was a long hill to climb... And I would credit -- you know, just in orientation... I've been a climber... I don't consider myself a climber much anymore, but I was a pretty serious climber when I was younger, and so that orientation of just staying with it... I often say that I'm not particularly talented, but I'm relentless, so working through those hard times. I take a lot of pride in honoring my investors, employees, and doing the best I can during those periods of times... So I take a lot of credit for that.

The same thing happened in the public company, the turnaround was difficult, and trying to do the same sorts of stuff... So I'm aware of those struggles, and that sort of stuff. And in some ways, Influx has been much easier than that, because it's been a really nice ride in the right direction the whole time... And knock on wood, that continues; I don't see any reason why it wouldn't. So I take a lot of pride in doing that, in working through difficulties... And I should take more pride in the successes; I just forget \[unintelligible 00:35:43.28\]

**Adam Stacoviak:** That's okay, too. I mean, we all have different ways we look at things. Clearly, you've been successful, so it's working, Evan. Don't stop. But as a position of encouragement, I would just say - you obviously see this, but for some reason, I've gotten some really good benefit in slowing down enough to celebrate the wins... Because you can just get so bogged down in the go-go-go, or the seemingly losses, even though they were wins, because you can't really see the details of them... There's just a lot of value I've personally seen in that, so anytime I get a chance to advocate it, I like to do so.

**Evan Kaplan:** \[00:36:23.00\] You know, that's a philosophy of life, man. That's really well said. I'm certainly better at it now than I was 25 years ago when I first took the CEO role, and I had all these illusions about what a CEO is... So I'm certainly better at it now, but that's a life-long journey for me. So it's great to hear your point of view about it, that you've arrived at it. I think that's really healthy.

**Adam Stacoviak:** Well, maybe I learned young, I don't know. I've read a lot of books... I like to read things from people who are smarter than me, who've got better frameworks than me, that have done the research, and have the data, and have analyzed it... They've maybe even used Influx to do so...

**Evan Kaplan:** \[laughs\]

**Adam Stacoviak:** I like to pay attention to those people, because -- you know, I just borrow a lot of things from a lot of people. Simon Sinek, \[unintelligible 00:37:09.00\] a lot of different folks.

**Evan Kaplan:** That's cool.

**Adam Stacoviak:** A lot of people who think just -- James Clear is an example for habits around that stuff...

**Evan Kaplan:** Yeah, I agree. I think your attitude is the right one. I think that's right. So I think the fact that you take your podcast and you advocate for it - it's a good reminder for me, too. I could be better at it. I'm not super-proud, I'm just saying this is what -- you know...

**Adam Stacoviak:** That's alright. Let's go into maybe some feedback loops then... Because you'd mentioned this has been a fun ride, at InfluxData, and... Help me understand where the business is going right now. Where are the successes that you see happening? I know that you have Influx Cloud out there, I know that you've got the forthcoming IOx... Help me understand the direction of product, and where success is coming from - from a commercial standpoint, from a community standpoint... Whatever success is to you - let's extrapolate that.

**Evan Kaplan:** Yeah. So the big transition over the last few years has really been building a cloud-native platform. So we had had a managed service cloud - we still do - that's pretty successful, and has large customers, like Salesforce, and Google, and that stuff on it. But Paul particularly advocated \[unintelligible 00:38:16.10\] that the right model for the future is something like an Amazon native database, or an Azure native database in which people are paying for \[unintelligible 00:38:27.29\] they pay for what they use; if developers find it useful, they build interesting things on it, and they run it in the cloud... And then they only pay for what they use. And his view was that's the best way to monetize open source. There will always be people in the open source world, of course, who won't wanna use that, but that's the best way to monetize if you're a company. And I think we're seeing that; certainly, the predecessor for us was Mongo Atlas doing that really well, which now represents I think more than 50% of the revenue, and growing faster than \[unintelligible 00:39:00.01\] and that is a core feature of our business, and that's going phenomenally well.

And then IOx... The work on IOx was - you know, after 7 years of working on time series storage engines, realizing that there are always gonna be issues around cardinality, and performance, and query performance, and things like that. You could do this way better. So we started the IOx project, and its relationship with Apache Arrow, and the Parquet file format... I thought it was a super-clever way to go about it. We've invested in that now for well over two years, and we're super-excited. That will be an accelerant to the cloud. But we don't get to just be cloud, because a lot of our business and a growing portion of our business is in IoT. Most IoT architectures have an edge in cloud, sort of a two-tier or even a three-tier architecture of local storage, and analytics, and so building that edge capability and the on-prem capability continues to be in the raw open source... The fact that we continue to produce new open source that people will use at the edge, or in the enterprise, and that sort of stuff - all these things come together into what we view as our competitive advantage, a comprehensive platform. Cloud-native, at the edge, in the enterprise, being able to use this all together, with a common API, and that sort of stuff.

\[00:40:26.22\] So that's our view of where our tech goes. In terms of where the market goes - to me, that's what's super-exciting. Listen - obviously, sensors are getting cheaper and cheaper, we're sensorifying all the physical world, in every way, shape and form, whether it's the 12 sensors I have on my body from this Apple Watch, to the Whoop band, to the Oura Ring, to whatever. They're not slowing down, whether it's your car, or your home, or your new Tesla Powerwall - whatever you're doing, we're seeing the physical world being instrumented in really meaningful ways, and building that sort of in the broader... I think we are well-positioned for that, because the lingua franca of IoT is time series. It's pressure, volume, temperature, humidity, light, whatever it is... What happened, what happened, what happened, what happened... And that kind of data, super-fast processing in real time... So we're super-excited about that, and having the vehicles to serve it. So that's what's driving our product vision, things like that. And to continue the foundation in open source.

**Adam Stacoviak:** So when you think about something like the aspect of observability, for example - InfluxData, InfluxDB is beyond simply just observability in terms of infra or cloud, like say a Grafana might be, where it's really focused on the dev ops world... Influx is really focused on literally the global world; all the different sensors, not simply just a slice or sliver of it, and that's what makes your business so multi-faceted. Not just simply cloud, but also edge.

**Evan Kaplan:** That's exactly it. And I think that distinction between dev ops and developers is a pretty significant distinction for us. We want people particularly on the cloud platform, but on Influx and InfluxDB at the edge - we want to build stuff. And observability is something you build, don't get me wrong, but there are a lot of good off-the-shelf products that do observability. We want people to build applications that run their businesses, and that tends to be a pure developer with a wide variety of stuff. Now, don't get me wrong, we have a fair amount of business in the observability world, specifically, as we do with metrics at scale, because we do that pretty much better than anybody else... But I wouldn't say we're an observability vendor per se.

**Adam Stacoviak:** Yeah. The reason why I asked that question is we have a lot of developers who listen to this show, not just simply entrepreneurs or would-be entrepreneurs coming here to think "What's Evan doing? How is he helping InfluxData lead and win?" But from a technical standpoint, I think the lines between, say, a Grafana dashboard or the things that Grafana is doing around Bit Te Tent - it's challenging to look at InfluxData and what y'all are doing as well, and how do you differ. And that's the way I would differ them; I would say "It seems as though Grafana is focused on the Bit Tent philosophy; not just simply their own brand products, but also observability as it relates to dev ops." Whereas InfluxData, InfluxDB, Telegraf - all the different ways... I mean, you're used on CISCO routers and sensors inside of big ol' data centers, you're used on the edge, with maybe your Apple Watch, or your Tesla Powerwall, all these different -- you're build for metrics at large, than just simply... And I don't mean simply as a negative, but simply - a sliver, which is dev ops. And that's how I would see the difference. And it hadn't been that clear to me until recently, how you're very similar, but also very different.

**Evan Kaplan:** \[00:43:47.22\] Yeah, I think that's well said, actually. That's exactly right. I'm not sure I could have said it better myself. For you to see that is -- dashboarding is not the core of our stuff. A dashboard is important in our world, but it's only one component \[unintelligible 00:44:00.04\] people build all of that... And also, our objective in the world isn't to compete directly against Datadog, or New Relic. Our objective in the world is find developers who wanna build time series-based applications, and then provide the whole platform for them to do that. The collectors, the engine, the scale, the UI sorts of stuff, the configuration... And particularly in the cloud, not even the servers. Just dump it in and start working with it. That's \[unintelligible 00:44:30.06\] that's our audience. So we love dev ops people, but we lean a little more towards dev. The dev side of that.

**Adam Stacoviak:** And what's interesting too is that you tend to be sort of hidden in the greater details, so to speak. Whenever I -- let's say I'm in a data center and I'm using the CISCO platform, for example... And I'm just familiar with the case study around that because also Influx is one of our sponsors, so I've spoken about this in particular in some of our ad spots, and I've had the chance to actually speak with some people at CISCO around their usage of InfluxDB, and Telegraf, and how that all works. But my eyes have been open in terms of how you operate. What's interesting is how I could be a customer of CISCO and I could be on their data center platforms and whatnot, and be using Influx and not even really know that I'm using InfluxDB... Because the way that you've designed your business, your technology is to almost be behind the scenes. Your brand isn't out there saying "Hey! InfluxData, InfluxData!" It's just like "Here's a great tool for developers to use."

**Evan Kaplan:** That's exactly -- that's the audience. Listen, we want people to know that we're \[unintelligible 00:45:40.27\] but that's not the prime issue. The prime issue is "Do the developers know? Do they know the toolset to turn to? Do they feel comfortable taking that toolset from job to job, and building around it? Do they feel powerful when using it?" If that happens, everything else works out just fine. Everything else works out really just fine. So that's our orientation... It's almost like you wanna be anonymous in your hometown... Right?

**Adam Stacoviak:** Yeah, I suppose.

**Evan Kaplan:** You want the people to know about you who need to know about you, and you want them to really like you. So hopefully the people at Salesforce, the people at Google, at CISCO, who build around our stuff - they know us. They like us. The rest works out.

**Break:** \[00:46:33.10\]

**Adam Stacoviak:** How do you factor in the community aspects, since you mentioned a prime component isn't just simply where you could monetize, but how does InfluxData specifically look at community? How do you nurture and embrace aspects of open source and aspects of community? How does that play out?

**Evan Kaplan:** Obviously, we have the normal sort of setup where we have a team of developer relations, a community manager, the different channels that people can communicate with us, the GitHub, and the PRs, and all that sort of stuff. But we track the community, the size and the growth, and it's been quite healthy now for 4-5 years, and continues to grow... And we try to pay attention to it. If you noticed when we do our -- you probably don't; we do a lot of education stuff. When we do our Influx days, it's mostly focused around the community. It's just always been sort of core to us, and particularly the contributors... And now in IOx, where we're participating in other communities in bigger ways than we ever have, like the Apache Arrow community, and the Data Fusion community... You know, there's just a richness to it that we just like as a company. Could we do a better job? Yeah, we always feel like we can do a better job. But in general, I think we do alright.

**Adam Stacoviak:** Gotta celebrate those wins, Evan...

**Evan Kaplan:** Yeah, right. I knew you were gonna say that.

**Adam Stacoviak:** \[laughs\] I know once it's ingrained, it's challenging to see things a little differently... But hopefully, when you step away from this, the next time you have a win, I want you to hear my voice, "Celebrate the wins, Evan."

**Evan Kaplan:** \[laughs\] I'm actually gonna call you up the next time we have a win, and make you part of the company celebration.

**Adam Stacoviak:** Please. That'll be awesome. I mean, really celebrate those wins. It's so much fun. It's encouraging. I guess on that note then, what are some big wins that you've had? This is six years now you're CEO at Influx... What are some of the big wins? Call two out, three out, whatever you've got. What's some of the big wins?

**Evan Kaplan:** So there's a couple of obvious wins, that would be headline wins, but then a couple that ain't obvious. So the headline wins are the company has grown successfully every year, and done really well. So that's a big win; you knew that. Two is we've been able to raise money at compelling valuations, so that we're able to continue to grow and fund the business. I think it's a big win to get this cloud-native product out there, and successful; that would just feeling really great. People are using it, people are signing up, and it's happening... It feels so good. And that's something I actually do feel, because I can track those numbers every day. In a normal enterprise sales cycle you can't do that, but in this cloud-native world I can see how many queries are happening today on the platform, all the billing metrics... So that feels awesome.

I think it's a pretty big win... I have a really great executive win. I think it's a pretty good win to surround myself with people who are - and I mean this in not a self-effacing, people who are smarter than I am... And we have a really great culture, that I think I might not have appreciated when I was a younger CEO, but really appreciate now, the quality of people that I feel surrounded and honored to work with; that's a huge win for me... Because at the end of the day, these things are all about relationships. Consistent with what I said about the enrolling or the selling of things. They're about the relationships you build, and I just feel honored. I know that sounds kind of corny... But I should also say, I have a really great group of investors around the table, who I generally enjoy spending time with, and that's no small thing. Not to say that all board meetings are fun, but generally...

**Adam Stacoviak:** \[laughs\] In regards to relationships, you're definitely speaking my language, and I don't think that sounds cliché at all, because... Because I'm a podcast by trade now - we were saying before on the call, I've done things other than just simply podcasting, as you might know... But one thing I get to say a lot is we came for the tech, but we stayed for the humans... And I think just so often is it about relationships. Because at the end of the day, the reason why I have these calls here on Founders Talk, and why we have these conversations, is I generally wanna know about your life. I wanna know what you've done, I wanna know what matters to you, because I really care. I really wanna care, and I wanna do that for a lot of people.

\[00:52:11.04\] So we show up -- and that's a part of relationship, you can't just transaction your way to success. Just so often, especially as a CEO, you have to do a lot of selling, which means you tend to be transactional often. But I think if we can sort of like take a couple clicks back and be relational AND think about the transaction, but more about the relationship involved - that's the win.

**Evan Kaplan:** You know, I wasn't expecting this, Adam... I think that's extremely well said. I particularly like "I came for the tech and I stayed for the humans." I hadn't heard that, and it's really well said. I couldn't agree with you more. And actually, very few things are transactional. I mean, \[unintelligible 00:52:51.04\] that whole process of enrolling all these folks - they're not like they're enrolled or not enrolled; it's a constant revisioning, rehashed storytelling, resharing... And you put a lot of yourself into the role. Being the CEO, you put a lot of yourself in the role. And sometimes that's for better and worse.

**Adam Stacoviak:** Is there any part of the role for you, current or prior, that you can speak to -- can you speak to the aspects of the isolation that a CEO... Like, some of the decisions you might have to make, some of the things you have to do where because the knowledge you hold about the future, or the vision... I mean, you could speak to the way you lead in vision as well, but I'm curious if there's anything that's challenging from an isolation standpoint that you've encountered in your journey.

**Evan Kaplan:** Yeah, I don't think you heard that a bunch about CEOs... Over the years I've been a part of different CEO groups, with other CEOs, and we share stories, and it's been super-helpful. I'm part of one now, and I really enjoy it... I think the theme -- I don't' wanna over-dramatize it, because it's not worth over-dramatizing, but the thing about this role is you never put the ball down. You're always carrying the ball; every weekend... You just never put it down. You may not be working all the time, and you're not, but the ball never puts down; you're thinking about the next quarter, the next month, the next day, the next decision... So the few times in my career when I did take those long breaks and the ball goes down, it gets pretty relieving. So then you're aware, like "Okay, I can't \[unintelligible 00:54:28.25\]"

Now, obviously, there's a lot of benefits. I do not have a hard life in the large scope of things in any way, shape or form... But you're aware that there's a constant kind of weight that you carry around if you take the job the way it is. And the weight is not just numbers, it's people. Feeling that obligation, and that dynamic. But yes, it can be isolating.

**Adam Stacoviak:** Over this weekend, my example of "Always be dribbling" or not putting the ball down, as you said, was I was just washing the dishes, and I shared an idea with my wife... And it was not at all work o'clock; it was not "Think about dayjob, think about this business..." And I shared this idea with her because she's my partner, so I always share things with her, and she gives me so much wisdom really, more than I deserve... And she's like "Are you always on?" I forgot exactly how she framed it, but it basically like -- it reminded me when you said "You never put the ball down." It was like that. It was like, I was washing dishes, we were hanging, she was folding clothes, and we were hanging together after the kids went to bed, and we were just sharing ideas and whatnot... But I like to wash dishes at our house; I'm the dishwasher at our house. And people are always surprised by that. So I just get in my mind and think... And I didn't have the ball down; I was carrying it, and I was just -- it wasn't work o'clock, but I was thinking about just an idea.

**Evan Kaplan:** At least you're talking to your wife about it. That's great.

**Adam Stacoviak:** Yeah.

**Evan Kaplan:** \[00:56:01.10\] I think my sort of fail is sometimes when I come home, I'm so tired of thinking about it myself, I don't wanna talk to anybody about it. So I think that's good. So I actually have to work on that side... Because my wife is also -- she runs a non-profit, and so she's the head of something too, and so we end up... We could spend all day talking about work. So we try to structure that time now, and it's worked out really well.

**Adam Stacoviak:** You mentioned having kids earlier... I think you said a 15 and a 16-year-old... Is that what you said?

**Evan Kaplan:** Yeah, yeah.

**Adam Stacoviak:** And so you mentioned your wife now, she's the head of something as well... Tell me about family to you; what does family mean to you? How does it play into your ability to show up every day?

**Evan Kaplan:** It's everything, man. Let's just put it that way. It's everything. It's the foundation, it's the stability, it's the reason for all of this. And we're clear about that as a company, too. We're really clear about that. Your families come first. We understand, your families come first. I didn't talk about it as accommodations, or whatever; it's just -- your families come first. So for me, that was not true when I was single and I started a company out of my house, and there were 11 people working out of my house... That was not true. I didn't kind of understand it all. But the moment we had kids, I was like "Okay, this is very different, and I'm different as a result." What I do with my kids, what I do with my wife and my family is the most important to me. My role as a CEO is important, but not at the same level. I'm not supposed to say that, am I? \[laughs\]

**Adam Stacoviak:** No, you absolutely are. There's no wrong answers here. The reason why I say that is because -- the reason why I produce this show isn't to make a show that is something that people necessarily listen to because they get the perfect sound bites. I want the raw, real approach to what it takes to be a leader, to lead, the decisions that go into that... And the reason why I also asked you that question is because I can complement it. For me, my family, as you probably can tell with washing dishes, hanging out with my wife - that's everything to me. I wake up every single day excited about what I do, but my family comes first. And even so much that I tend to have to make choices that limit my business' ability because of the things that matter more to me than the business itself. Because we have certain limitations in our lives, we wanna in this place where we live at... You know, there's certain criteria that we have set for our life; there's certain things that eventually becomes immediate no's in our business, or not-right-nows at least. Because of certain family constraints we've chosen, my business has inherited constraints.

And I've got a business partner that has a very similar alignment when it comes to family. And I love talking about that aspect, because too often do we go to work and it's just work, and then we separate work from life, or work from family... And I think -- you know, every day I bring my family with me to work. I mean, I won't be surprised here -- in just a few minutes my son's coming home from school... He might drop in on this Founders Talk. I hope not, because I like to keep things flowing... But if he does, I'm gonna say "Come say hi to Evan." And then he'll probably say hi, and --

**Evan Kaplan:** That'd be awesome.

**Adam Stacoviak:** He's never made a cameo yet, but he definitely has made it into a few meetings with me, that's for sure. So family is such a critical component, and almost no one -- not too often do you hear people go on about why they are the way they are at their role, because of their family. And explain that in detail.

**Evan Kaplan:** Yeah. You and I are on the same page, yeah. And you try to encourage that with other folks, too. I think it's one of the reasons why we're able to draw some of the talent, is we're clear about that. We're clear about -- in a company like ours, what we say is "Listen, we wanna build a strong community, but we don't wanna pretend to be your family. That's a different role. But we want to be a community, we want you to respect each other, we want you to approach stuff with humility, we want you to have fun... But we expect you to have a life outside of work." And it's not about work/life balance or not, it's about - we expect you to have a life outside of work." Because we do. Because I do.

**Adam Stacoviak:** \[01:00:05.12\] Yeah. And it's your fuel. I know for me, if something happened to my family, it'd be super-challenging for me to show up in the same way.

**Evan Kaplan:** Yeah.

**Adam Stacoviak:** My family is my fuel.

**Evan Kaplan:** And by the way, if we work together, nobody would expect you to. We get it.

**Adam Stacoviak:** Yeah.

**Evan Kaplan:** But in terms of switching from family to work, I'd say one thing that keeps me going at work is - and I don't know if you feel that in you, but maybe it's the podcast itself, but I'm inspired by the people I work with. That's my inspiration. When somebody does, like "You're amazing. You've figured that out", or this analysis, or that sort of thing... You're like, "Wow. That was really freaking sharp." Those are the things that get me going; those are the things that make me excited.

So coming back to why it's a people-oriented thing - you know, I came for the tech, but I stayed for the humans; that is so perfect, man...

**Adam Stacoviak:** Nice.

**Evan Kaplan:** ...because that's exactly the way it works for me. The humans cause me to stay.

**Adam Stacoviak:** Yeah, that's what it's all about, man, that's for sure. You mentioned again humility, and I didn't get to go into some of the values you'd mentioned with InfluxData... What are some of the values? You mentioned humility... So what are some of the other values that are pillars to your culture?

**Evan Kaplan:** So there are five core values to the company - and by the way, this wasn't something... It's not a dorm room poster; we didn't put it up and say "These are them." When we had the first 20-25 employees we started with a process that said "What do you love about being here now, and what do you feel like you need to be successful?" We got all that input, we had small groups, and then we post-processed that, and that became the values. They won't change, they're part of the fundament of who we are. We're not arrogant, we're humble, we face up, we learn quickly, all that sort of stuff. We value -- the second is "Failure is okay. I want you to fail fast and do it often." I'm not quoting these exactly.

The third is around really diversity. We respect who you are, wherever you're coming from. We wanna be inclusive and this to be a safe place for people to work. The fourth is we get stuff done. We just get stuff done, because we get a fair amount of satisfaction from getting stuff done... And lastly, it's that commitment to open source. It's part of every interview process that we're doing for folks...

In my mind, and in the rest of my team's - we wanna be held accountable for it, and people held me accountable before, when they didn't think I was acting in that way. And I offer that up pretty continually - I wanna be held accountable that I am true to those values.

**Adam Stacoviak:** Yeah.

**Evan Kaplan:** And I'm not interested in that being dorm room posters or website things; I'm interested in them being alive.

**Adam Stacoviak:** You know, values are something that really -- they give you, I guess, constraints, and maybe even some freedoms within it, too... Because you mentioned the interview process for joining the team. You know, if you don't embody some of those things, or these don't resonate with you, you're probably not gonna get success here, or see the success you want from this place... Because if you can't approach these things humbly, or get things done, or some of the other values you mentioned, you're probably gonna have a challenge doing what you wanna do here. It's a velvet rope, you know? It's like getting in, it's a velvet rope.

**Evan Kaplan:** And I wanna be clear, that doesn't mean that you're creating a cult, right? We've got a lot of heterogeneity, right? It just means we're asking you if these values are important to you as they are to us. This feels like a place you wanna be.

**Adam Stacoviak:** What about -- you mentioned crossfit, and the early days with Paul, and that resonance there... Is there any other particular habits or principles that are sort of crucial to --

**Evan Kaplan:** Oh, yeah...

**Adam Stacoviak:** Do you have a morning routine, do you have a certain way you go to bed? Give me some examples of things that you do that are consistent for you, that shape your objectives and your abilities and the way you show up.

**Evan Kaplan:** Yeah, that's pretty straightforward stuff for me. I have a very specific morning routine, and I don't really vary very much... I try to get a good night's sleep, and I measure that... Because that's what I do.

**Adam Stacoviak:** \[01:04:06.27\] With sensors, and InfluxData...

**Evan Kaplan:** Right, because it's sensors, and InfluxData... So I measure it, and I track it, and I try to get a good night's sleep \[unintelligible 01:04:12.05\] I work out about an hour and a half every morning...

**Adam Stacoviak:** Nice.

**Evan Kaplan:** ...and I pay a lot of attention to how, and what... And it was crossfit, but after Covid we ended up building a small home gym of stuff, so I've got my whole routine... And then I try to get at least 20 minutes of meditation during the course of the day.

As a company, we have a daily stand-up every day, the whole company... And we usually get 75% to 80% attendance every day. It's nine minutes, it's on and off. We see each other, there's a couple of jokes, somebody gives an update on something, there's a word of the day, we introduce new employees, and then we're off. You'd be surprised at how effective that is, in just sort of holding the fact that you're part of something bigger than yourself. And we've done that ever since the beginning when we had an office in San Francisco, and we were probably still 70%remote, but now we're 100%.

So that's held us really well, and that's part of my routine. I make pretty much 90% to 95% of those meetings. And then - you know, I try not to zoom myself to death here...

**Adam Stacoviak:** Mm-hm. Or podcast yourself to death...

**Evan Kaplan:** The nights are to let my kids abuse me for a while, and make fun of me, all that sort of stuff... And then we start again.

**Adam Stacoviak:** Yeah. What about meditation for you? You said over the course of the day, 20 minutes over the course of the day. Do you have certain moments where you --

**Evan Kaplan:** I try to get it first thing after my workout... But some days, when I've got earlier meetings, I can't get there. I get up super-early, like at 5:15. But sometimes when I have earlier meetings I can't get it, so I'll try to find a point during the day to get it... And that's been very helpful to me. It's something I've been doing the last 7-8 years. Part of this is also stress management; it's how I wanna live in the world.

**Adam Stacoviak:** How did you learn some of these things? Did you just do them -- some of the things you do in your day, like the meditation... Obviously, the stand-ups is something that people do pretty ritually, through the course of a workday... But how did you learn these things work for you? What is some of the feedback process that you get, that says "Okay, I've gotta meditate at least 20 minutes every day" or "I've gotta do it right after I workout"? How do you know that's working for you? Give me some examples of how it plays out.

**Evan Kaplan:** So I'm always curious about this... I view myself as an aggressive-curious learner. I'm just always sort of playing at the edge of stuff, trying to figure it out, whether it's things like nutrition, or health, or meditation, or that sort of stuff. And that's only gotten more true as I've gotten older, I suppose, too... So the exercise \[unintelligible 01:06:44.23\] has always been part of my life. I just feel better, and so I do it. It's that simple; it's not even confusing. But the other stuff - eating better, sleeping better, all that sort of stuff... That's stuff you just sort of -- as you get older, the variation that you get to have gets somewhat narrower. That ability to stay up late with your friends and then hit the work in the morning - it's just not as effective and it's not as much fun. So you just learn more about yourself, that's what works.

So the variation narrows, but the curiosity continues. I'm a crazy podcast listener. Almost all of my workouts I get an hour and a half of podcast listening every morning, so I'm always plugged into different stuff... That's where I listen to you, and Paul, and Adam Jacob, \[unintelligible 01:07:34.14\]

**Adam Stacoviak:** Very cool.

**Evan Kaplan:** Yeah.

**Adam Stacoviak:** Give some plugs. What other shows have you listened to? What are some of the staples for you? What's in your must-listen list for podcasts?

**Evan Kaplan:** I listed to The Daily regularly, from The New York Times. I listen to Tim Ferriss' podcast, occasionally I'll listen to Joe Rogan, I listen to Sam Harris religiously... Doctor Peter Attia; he talks a lot about nutrition, and health... I don't know - do you know any of these?

**Adam Stacoviak:** I know Sam Harris, I know Joe Rogan, I know Tim Ferriss...

**Evan Kaplan:** Yeah, so you know.

**Adam Stacoviak:** The Daily is new to me.

**Evan Kaplan:** \[01:08:07.23\] Yeah, The Daily is just sort of -- it's The New York Times.

**Adam Stacoviak:** A catch-up, yeah.

**Evan Kaplan:** A half an hour story... What's nice is I'm listening to the news less and less, and more of just general topics I find interesting.

**Adam Stacoviak:** Yeah, I feel you on that. I like digging into some of the habits. It's a new thing that I'm trying to incorporate into the show... Because I never really dig into the habits, but I figure -- like, there's a routine to everybody. Even if you don't have a routine, you an un-routine, basically.

**Evan Kaplan:** \[laughs\]

**Adam Stacoviak:** You know, what is it that you do that are some staples for you, that kind of shape the different things you've got going on...

**Evan Kaplan:** Yeah, I didn't expect you to ask me about those. But I've noticed you talking about James Clear, and some of the micro-habits, and that sort of stuff. I'm kind of a systems guy; I like having -- \[unintelligible 01:08:50.13\] and I like having my systems down. I know it gives me a lot of freedom if I have my systems down. So I like having a system, I like organizing around a model... So it helps.

**Adam Stacoviak:** It's all about mindset, really. I think to excel, you have to have a mindset that's capable of excelling. And you can iterate towards this, too. You don't have to have the perfect mindset, or whatever it might be, but it definitely is about mindset. An example of this that I can share - and this may not be the perfect example, but I listened to something that Simon Sinek said recently, and he was sharing an example where he had just done this marathon... And it wasn't like he's a marathoner, he just happened to do a marathon with a friend. And at the end of the marathon, there's sponsors, typically... And at the end of this one, there was a sponsor that was a sponsor that was giving our free bagels. And he said to his friend, "Hey, there's free bagels." And the guy is like "Well, there's a big line. I can't go get that bagel. There's a big line, I'm not interested in the bagel, because there's a big line." And Simon is like "But there's a free bagel", and his friend's like "But there's a long line." And he says one more time, "But it's a free bagel." And the guy is like "Well, there's just a big line."

So mindset for me is like, okay, sometimes you see the obstacles only that prevent you from getting to where you want, and then sometimes the mindset is you can just see what you want and you go get it. And I think there's a lot in routines, there's a lot in the way you think, and there's a lot in systems that help you shape a mindset to do what you wanna do, and to accomplish the goals you wanna accomplish. And speaking of goals and future thinking, I'm curious if there's anything on the horizon. What's on the horizon for you, or for InfluxData, that's something you can share on the show? What's upcoming? What's coming soon?

**Evan Kaplan:** Obviously, the commercialization of IOx, I'm pretty excited about that. It should power our cloud stuff towards the end of the year, so we're excited about that, and some of the more open source, and some of the things we're doing there... The team is growing. I've added two new execs that are about to get announced, so I'm super-excited to onboard those execs, and enrich the team. That's most of it.

**Adam Stacoviak:** No big deal. IOx is no big deal, execs are no big deal...

**Evan Kaplan:** No, but that's -- and I'm just so excited about the progress of our cloud products, but mostly I'm excited hearing what the customers are saying about it. So that's the stuff that feeds me. That kind of stuff feeds me. I'm less oriented towards ends goals than I am about process goals.

**Adam Stacoviak:** Well, then you should definitely be a celebrate the wins kind of person, because process is all about the wins, right?

**Evan Kaplan:** Yeah, I know. You're exactly right, Adam. What you've just said is exactly correct. But it's possible that I am also a process guy, but don't celebrate enough along the process.

**Adam Stacoviak:** Yeah. Well, I know too many people who just see the big picture and they don't see the process. It's almost back to James Clear and habits, that kind of idea. A goal is simply a manifestation of the process, right? If you can focus, like you do with crossfit, and this daily hour and a half workout - that's a process. But some people just think "I want this fantastic body, or this great mindset", and they think that's the thing. Well, it's really the process. That's why I say that the way I say that.

**Evan Kaplan:** Yeah. Listen, you and I -- it sounds like we're tuned to some of the same orientations, so I would agree with you completely on that. And it's been a pleasure to hear that... I wasn't expecting the interview to go this way, but it's great that it did.

**Adam Stacoviak:** Is there anything else that I haven't asked you, that you wanna share before we go?

**Evan Kaplan:** No. You're good. You've been great. I'd be happy to come on your show again. You're doing a really nice job, Adam.

**Adam Stacoviak:** Thanks, Evan.

**Evan Kaplan:** I don't know if you'll edit that out, but... Yeah, really nice job. You've got a great way of doing this, and I really enjoyed it. So... My pleasure.

**Adam Stacoviak:** Cool. We're not gonna edit it out. It's standing here. This is the outro. This is the outro.

**Evan Kaplan:** \[laughs\]

**Adam Stacoviak:** Evan, you've been awesome. Thank you so much for all you do. I appreciate what you shared today, and your wisdom... Thank you.

**Evan Kaplan:** And thank you, man, for the supporting the developer and the open source community, and then your broader interests around family and life and all this stuff. Take care of yourself.

**Adam Stacoviak:** Will do, thank you.
