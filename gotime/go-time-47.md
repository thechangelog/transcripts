**Erik St. Martin:** Alright everybody, welcome back for another episode of GoTime. Today's episode is \#47, and our sponsor for today is Toptal. Today on the show we have myself, Erik St. Martin, we also have Carlisia Pinto - say hello, Carlisia...

**Carlisia Pinto:** Hi, everyone.

**Erik St. Martin:** And standing in for [Brian](https://twitter.com/bketelsen) today we have Mr. Adam Stacoviak.

**Adam Stacoviak:** Whaddup!?

**Erik St. Martin:** It's always so great to actually get you to come out from behind the curtains. Anybody who hasn't heard the other episode Adam did -- Adam is one of our producers, and he always hides behind the curtains; we finally got him out.

**Adam Stacoviak:** That's right... Like a magician, just waiting, and every once in a while... And Solomon! I had to come out for Solomon, that's why.

**Erik St. Martin:** Speaking of which... So we are honored today to have our special guest, Solomon Hykes, CTO and founder of Docker.

**Solomon Hykes:** Hello! Thanks for having me.

**Adam Stacoviak:** Solomon, thank you so much for making the schedule; I know things kind of didn't smooth out there, but man... We've been waiting for this show to take place. [Docker](https://www.docker.com/) is such a huge thing, and obviously everyone has wrapped their brains and minds around it and just ran with it.

We had you on the Changelog way back on episode 89. I feel like that was (in your own words) 20 years ago, and it kind of feels like it... What do you think?

**Solomon Hykes:** Yeah, it feels like it was forever ago, and I have a really fun memory of it; it was a lot of fun having that conversation.

**Adam Stacoviak:** For the live listeners, I'll drop a [link](https://changelog.com/podcast/89) to that show in the chat, so earmark that. It'll be in the show notes too, but earmark it, go check it out... Listen to my (as they said before) young voice, back-in-the-day Adam, I guess...

**Erik St. Martin:** He linked that episode today in our admin channel and I started listening to it; it's like, wow, you sound young. \[laughs\]

**Adam Stacoviak:** I think it was just less EQ-ed maybe, I don't now... I'm not really sure what it is, honestly. But anyways... Docker! Man... It came from DotCloud, right?

**Solomon Hykes:** Yup.

**Adam Stacoviak:** What was DotCloud back then? I don't know if people need to know a full introduction of you, but maybe know that who you are today - you're a CTO, you're the founder of Docker... Take us back to the DotCloud days. Give us some nostalgia. What is something only you know that you could share on a show like this?

**Solomon Hykes:** Sure... I don't know if I'm the only one that knows it, but back when we did that Changelog (\#89), I was the founder and CEO of a company called DotCloud, which later became Docker. We had just launched, I think, the Docker project, but we had not yet pivoted to being only the company that supports Docker, although I think that was quickly coming. But before Docker, there was a whole six years of DotCloud. So all in all, I've been working on this company for a little over nine years now, and DotCloud was a platform-as-a-service offering. If you're familiar with [Heroku](https://www.heroku.com/), [Google App Engine](https://cloud.google.com/appengine/), things like that... It was a hosted service that developers could use to deploy and scale their applications.

Basically, you write the code, you send the code to us and we take care of everything else. We just scale it, run it etc. We did that using containers under the hood, and we used that technology to make things more efficient. A lot of people asked us, "Hey, that's really cool. How do you do it? I don't wanna pay for your service, but I wanna do it for myself."

**Erik St. Martin:** \[00:04:05.21\] People wanted stuff for free? \[laughter\]

**Solomon Hykes:** Incredible, I know. And you know, eventually we refined -- to be clear, we didn't invent that tech; we built on top of low-level building blocks of the system, and that was just at a period where Linux was getting better at supporting containers, but it was still a very niche thing to do. When we started out in 2008, you had to patch the kernel very heavily, so it was for very niche use only. Then around 2012-2013 it became kind of viable to do containers yourself on top of an unmodified Linux kernel, and that opened a lot of possibility.

Anyway, we heard the demand enough that we ended up just open-sourcing the underlying tech, and that became Docker. Of course, for reasons that are still a combination of mystery and luck (and hard work, as far as I'm concerned) it took off, and we ended up doing only that. We sold the platform-as-a-service business and we only do Docker.

**Erik St. Martin:** You talk about kind of like the surprise, that it's like that... And credit where credit is due, right? Yes, containers existed in the Linux kernel, but I think Docker made it significantly more approachable, right? Most people who built software for Linux didn't really know about or understand cgroups and namespaces. I think Docker really made that approachable for people, and the fact that there was this kind of portable image format...

**Solomon Hykes:** Yeah, I mean... The funny thing is containers as is Linux containers existed, they were known, although they were known only to a small, specialized group of people - systems engineers, operators - to build platforms on top of that. But you're right, it was a very obscure thing, and honestly, it was not that mature. Linux containers had not been stable and high-quality for that long... But really, what we did is we kind of played on the double-meaning of the word "container", because a Linux container is a really specific technical construct to sandbox your application when it's running... But we extended the use of that term to the shipping container, which is really something else. It's about moving things around and making them reusable and standardizing the format in which you move things around.

To this day, I think different people understand the word "container" differently, and it turns out the first definition of the word "container" is a really specialized, niche definition of the word, but shipping containers is something that everyone understands, it's a mainstream term, and really, that's what Docker is focused on.

Linux containers are really for Docker a feature that we use to deliver something broader, which is shipping containers for your code.

**Erik St. Martin:** Here's actually an interesting question, I'd love your feedback on this... The thing that I find with the VM's versus containers is that because Docker abstracted away the concept so well, there's a lot of confusion that they're very similar, so you get a lot of people who put TCP dump and random things and just load up their container, because they don't really understand that it's actually much closer to just a highly configured process than it is an actual virtual machine. Do you find that people have that same struggle?

**Solomon Hykes:** Yeah, it's definitely a general theme for us that different people understand or experience Docker or containers differently; they have different opinions. The Docker community at large has always been a diverse one. In other words, different people expecting different things from containers and Docker, and sometimes disagreeing strongly on what the right answer is.

\[00:07:55.23\] The challenge for us has been to manage that, but honestly, it's been by design from the beginning that we said, "You know what? Not everyone has to agree on everything to benefit from the same tools", and maybe it will make things more interesting for people to have to work out their different definitions of words, and that kind of constructive disagreement will help us move forward... And I think that's mostly worked out.

For example, there's a lot of developers and a lot of operators in the Docker community, and as we all know, developers and operators have very different priorities and opinions on things, and that's actually helped. So on the one hand, you have experts - Linux experts, systems engineers - that approach containers in one way, and on the other end we have a lot of people now who are frontend devs that are just getting into backends and Docker is just a really easy way for them to do backend things. And now we have people actually getting into programming and they are absolute beginners, and Docker is giving them kind of a safe, exciting place to get started where they don't feel too judged and they're surrounded by people who are just excited about helping them.

These are two pretty wide extremes, but somehow the challenge is "How do we get everyone to participate in the same community and talk about containers together?" It's not always easy.

**Erik St. Martin:** That's actually a really interesting point I had never thought of.

**Carlisia Pinto:** Solomon, I wanted to ask you to take us back to the point where you were transitioning from your platform-as-a-service to an open source project... Because what I'm thinking is - and there is no doubt that you were a success story now, which makes it even more fascinating... So what I'm thinking is you have this paid-per-use service, and people are demanding your service, but they are saying "We don't want to pay for it." And I'm asking this question from a business perspective, especially for people who think about going into business or are in business... I would have this question myself, and I think people will be curious too, so let's get to it.

So you were at this point that people are demanding your service, but they don't wanna pay for it. How was the rationale that instead of saying, "Well, let's change our pricing model" or "Let's make a better offering so people feel that they're getting more value, and therefore want to pay for it." To me seems a super counter-intuitive move to say "No, let's just extract this and offer it as an open source project." How did that leap of faith happen? Did you have a game plan? How did it happen?

**Solomon Hykes:** That's a good question. It's not so much that people didn't want to pay for our service and therefore we just abandoned the service... DotCloud was actually a pretty successful product; we had customers, we were growing nicely, and there was definitely a set of customers that were getting value from it, and there was no immediate catastrophe. We had plenty of money in the bank... I think we had two years of runway left when we pivoted, so it was not a money problem, and it was not an issue of "Hey, no one wants this. They don't wanna pay for it", but we had two problems. One was that the pool of potential customers, the market for our product was just too small, and we were seeing that none of the other companies addressing the same market were that successful. Every platform-as-a-service startup has failed, basically.

Some of them have failed by consolidating with larger companies, and that's worked out great for them, but clearly, there's no giant platform-as-a-service company that's just crushing it and you can point at it and say "I wanna compete with those guys." So there was a general sense that we were in a market that had no future, and separately, seeing this much, much larger pool of people that were coming to us and saying, "There's something I want from you. Please, can you give it to me?" They didn't want the service we had for free, they wanted something else; they wanted the building blocks to build their own service, and the key there is customization.

\[00:12:20.17\] The problem when you're doing everything for your customer - it's a cookie cutter solution; you have this monolithic platform that does everything for you, and it's take it or leave it. It's super convenient, but if you wanna customize things, you can't; you have to leave or wait for DotCloud to add that customization. But with containers, you have like a Lego set. You can mix and match, you can change a lot of things, you just need the building blocks to be available.

One comparison I make often is a regular toy and Lego. We had a specific toy that some people liked, but a lot more said "Hey, could I change this or that? Could you let me build my own toy? Just give me the Lego." So we started experimenting with that on the side. We did a side-project - which became Docker - to say "Okay, let's see what it would look like if we gave people the Lego", and instantly, people just loved it. From the very first private demo that we gave about four months before we launched, already people were excited. There was just this incredible interest, so we just followed the interest.

In the end, there was more interest for the new thing than for the old thing, and we just made the call. In your question you asked about the leap of faith - the leap of faith came when we had two things which were both viable, and that's why the decision was hard. It would have been an easier decision actually if DotCloud was very clearly a failure, because then there would be no choice. But because it was not at all obviously failing, we had to decide, and actually for a while I said "Let's do both. DotCloud is our phase one, and this exciting new thing will be our phase two" and we had this whole diagram where the first growth curve would be eventually replaced by the second growth curve... The theory was great, but in practice it became really clear very quickly that we had to focus. It was a tough decision, but we picked the new thing.

**Adam Stacoviak:** I would have thought you would have said that Docker was clearly a bigger play, that's what I thought you would have said.

**Solomon Hykes:** Well, that is the conclusion that we reached...

**Adam Stacoviak:** Okay...

**Solomon Hykes:** ...and that's why we made the leap of faith, but at the time it was not obvious at all.

**Adam Stacoviak:** It was hard to see that.

**Solomon Hykes:** We pivoted two weeks after -- you know that lightning talk at PyCon?

**Adam Stacoviak:** 2013.

**Solomon Hykes:** Yeah, 2013, Docker was introduced...

**Adam Stacoviak:** So this is [the very first talk](https://www.youtube.com/watch?v=wW9CAH9nSLs) you've given at all about the future of Linux containers, which is what it's called...? And that was Docker.

**Solomon Hykes:** Yeah.

**Adam Stacoviak:** And that blew up.

**Solomon Hykes:** That became our accidental launch, because we were not planning on that being our launch. There's a funny story there also, but the point is I think within weeks or maybe -- yeah, a few weeks after that we launched, and then we pivoted. So it was all within --

**Adam Stacoviak:** It was very quick, because when you were on the Changelog you were still talking about DotCloud... That talk actually -- we'll link it up in the show notes for those listening. I'll drop a link here in the Slack channel. That's actually the talk that at the time Andrew Thorp (who was the co-host on the Changelog with me then) and I saw, and we were like "This is super cool. This is gaining some ground." And to this day, it's got almost 70,000 views, and in developer land that's a lot of views. Maybe in YouTube land at large a million or a million and a half maybe is big, but this is big in developer land.

**Solomon Hykes:** \[00:15:56.25\] Yeah, I've got a lot of work to do if I wanna be a YouTube star.

**Adam Stacoviak:** That's right... We're working on it.

**Erik St. Martin:** I remember first seeing Docker when it was still DotCloud and Brian and I were playing with it, and it was one of those things that you knew this was gonna be big. It kind of changed everything, and I think I've heard -- it might have been that Changelog episode where I think Solomon was mentioning VM's and what people wanted out of them, and it didn't really happen. There were some tools that made them useful for development, things like Vagrant and things like that, but it really wasn't at the level that Docker was for the reproducibility and speed to get up and going.

**Adam Stacoviak:** So where does Go fit into this? This is GoTime after all, right? Where does Go fit into Docker?

**Carlisia Pinto:** Can I ask a question that would precede the Docker story? Did you use Go at DotCloud?

**Solomon Hykes:** Excellent question. The answer is no, we did not use Go. We were a Python shop, which is why we were presented at PyCon.

**Adam Stacoviak:** That makes sense.

**Solomon Hykes:** So DotCloud was written in Python, and although it ran applications of all types, written in all sorts of languages - which, by the way, was our differentiator - because we used containers, we had a common packaging system and deployment system for applications in all languages, which now seems like a given, but at the time that was a big deal, no one else did it... And when we started this prototype that would become Docker, this side-project, the very first version was in Python.

Then at some point, we went through a few iterations... The product wasn't quite right, and then I was being a pain in the ass to everybody because I had really strong opinions on how that thing should be designed, so the key engineer on the early project left, basically, in frustration... We had to kind of start over, and that's when we made a big decision to switch to Go.

That was more instinctive than anything and it was not a popular decision at DotCloud at the time, let's just say that... But basically, it was a few things - first, I just had a gut feeling that Go was awesome and I wanted to play with it, just being honest... And there was a deliberate choice also.

First, we wanted to optimize for contributions. We wanted this to be a very successful open source project, so we wanted a lot of people to contribute. So we wanted something that was easy to pick up and familiar for as many people as possible, and we didn't want anything too extreme or opinionated. I'm not a big believer in technology or religion wars it bores me. I just stay away from. What I like about Go is if you're a C programmer, you think "Okay, I can see it." If you're a Python programmer - same thing. It's familiar enough for enough people that we could expect to grow a mainstream group of contributors fairly quickly, so that was a big motivator.

The other one is in ops and devops tooling, the biggest problem for a long time has been tribal divisions. You have the Python devops tools, and you have the Ruby devops tools, and you have the Java devops tools. At the time at least, those were the three big tribes. And whatever language you picked for your tool of choice, only your tribe would use it. The other tribes would just replicate it, and you would have completely redundant tools for everything. You had Fabric, and -- you know what? I don't even remember the names of these things anymore... Capistrano.

**Erik St. Martin:** Oh, I remember Capistrano.

**Solomon Hykes:** And Java had their own... It was all duplicated, and we wanted to make a tool that everyone could use, so we wanted a language that would compile to a binary, so that -- you know, the old days of the good old UNIX daemons, SSHD... Who cares what language it's written in? It's a binary; you just drop it and it just works, right? So it was the ease of adoption, to not require an external runtime.

All these things rolled into one and we just went for Go all in, and Docker was my first Go project, and obviously, it was a good bet. We surfed the Go adoption wave for sure, and we contributed back. So that's why we picked Go.

**Adam Stacoviak:** \[00:20:03.12\] On that note, Erik, you mentioned you were at a meetup recently, and you had a conversation around this... The conversation around \[unintelligible 00:20:07.18\] that Solomon is pointing to, which is Ruby is probably pretty popular - and Matz even says so - because of Ruby on Rails. Do we feel that Go is popular because of things like Docker and other things that are written that are super popular, like Kubernetes? I guess it's sort of an evolution of Docker, but you get my point. What was said there at the meeting?

**Erik St. Martin:** So we were basically talking about the adoption curve of Go, and Solomon, you just kind of mentioned you picked Go because you wanted a lot of contributors... But back then, we're talking about 1.0 had only been released maybe within a year of the development, and I really think that 2014 to 2015 is where we started watching the hockey stick growth of the language. I'd argue that probably Docker is a big part of that... Like, "Here's this thing that's gonna kind of revolutionize development and operations for people. This is really gonna change things", and people were interested in the implementation; they wanted to build it, they wanted to contribute to it, which I think got more people looking at the language.

So I really feel that year was like a perfect storm of things. Conferences started popping up, you had Docker, and...

**Solomon Hykes:** Yeah, definitely when we decided to use Go it was at the very end of 2012.

**Adam Stacoviak:** That's early.

**Erik St. Martin:** So a month after 1.0.

**Solomon Hykes:** And definitely at the time it was not an obvious -- it wasn't hyped; we weren't seeing "Oh, we've gotta get on that. We've gotta jump on that." It was more, "Hey, I'm excited about that. The hacker in me just wants..." Sometimes there's just a tool or a language, you wanna use it, and then after the fact you're gonna make up rational reasons to justify it... That's how I felt about Go, and the entrepreneur in me thought, "Well, if I feel that way, then my audience - which is other hackers like me that I want to convince to use my tool - probably also feel that way, so let's just follow that gut feeling and surf that wave", and it turned out to be correct.

**Adam Stacoviak:** We're about six minutes out from our first break - or I guess our only break during this show - but take us back to some of the arguments internally that happened around your choice. To be clear, it was your choice to choose Go versus Python for the future Docker?

**Solomon Hykes:** Yes.

**Adam Stacoviak:** What were some of the sales things you had to do to sell the team on this choice, especially since you're pivoting and you're betting so much...? There was a lot of pressure to get it right, so how did you make this happen?

**Solomon Hykes:** So first, at the end of 2012 we were not pivoting yet, right? To be clear, we were a company of about 20 people, and 18 people were working on DotCloud. Then you had me and one engineer doing this side-project. So internally, for a while, it was like "Solomon's pet project. He wants to keep coding, let's just let him..."

**Adam Stacoviak:** "...let him do it."

**Solomon Hykes:** "...let him do his thing, basically." So when I said, "Hey, let's do it in Go", the biggest \[unintelligible 00:23:11.08\] was that it was new and it seems unnecessary to change just for the sake of picking something new. So there was a little bit of a "Get off my lawn, hipster!" kind of reaction, and to explain this, I would like to clarify that this comes too as a surprise to many people, because Docker now has this kind of weird reputation of being the hipster/newb developer thing, which I find hilarious because DotCloud was a company of ops. We were the largest deployment of Linux containers (I think) in the world exposed to the public; you had Google with their thing, but if you wanted to deploy containers, we ran the largest production cluster of Linux containers in production, period. So we were a company of ops and we ran databases in containers, we ran all sorts of language stacks in containers...

\[00:23:59.29\] Docker came out of raw operational experience, and then of course, it got picked up by a really excited developer community, and we had to manage this diversity of opinions and needs that we talked about earlier in the community. But the point is in 2012 we definitely were a company of cranky ops that looked at anything new with suspicion, because new things break, and new things sometimes are driven by fads, so that was the biggest pushback, to play with another toy... But then it really was, "Hey, I guess this is Solomon's toy project, so let him have it."

**Adam Stacoviak:** Wow... So you pretty much sold it based on you being (for lack of better terms) the boss, and hacking on things and "let him do his own thing."

**Solomon Hykes:** Well, what happened is I didn't have to sell it, because the engineer that got loaned to me for this side-project quit, and...

**Adam Stacoviak:** ...there was no pushback.

**Solomon Hykes:** It was only me... \[laughter\] So then I got another engineer - Andrea - who still today is a star engineer at Docker, and he wrote the hard system's interface... He wrote the interface to LXC, and I wrote the UI, the front-end, basically.

**Adam Stacoviak:** Any particular features early on in Go that drew you to it? That's kind of what I was trying to drive to what specifically about Go made you really-- I know you said compiling to a binary and you can kind of reduce the trouble and that kind of stuff, but what else?

**Solomon Hykes:** Those were the external reasons, specifically why Go for this project (Docker), but as a hacker, what drew me instinctively to Go was really -- by training I'm a C systems engineer that got into Python because at some point it was just a waste of time to do everything in C, and from there we got into this really cool framework in Python, which I can't even remember what it was called... It was called gevent, I think... So lightweight threads, green threads. So with Python plus gevent or greenlet - I forget the name - you had basically the same paradigm as Go and goroutines. You had these lightweight threads that you could write; you could write in a procedural style and you got a lot of the benefits of something using callbacks, but without the callback hell and spaghetti, which at the time in Python was something like twisted.

At DotCloud we did everything with Python plus gevent, and then sometimes we regretted not having an easier way to leverage C. So in comes Go, which is basically, from the perspective of a C hacker that uses Python, the perfect hybrid of the two. It's got all the benefits of C - it's compiled, it's lightweight, you have more fine-grained control over the memory etc. and you've got a convenient high-level syntax like Go, and also a great standard library. Python developers have learned to rely on a high-quality standard library, and Go delivered the same thing, unlike Ruby, which in my experience has been just like a giant mess of experimental stuff that you never know when they're gonna break.

I think Go brought the kind of reassuring focus on a quality, reliable standard library early on. So it just hit all the sweet spots.

**Erik St. Martin:** I know that we are a few minutes over the break that Adam was tracking, as he always does, so let's go ahead and take our sponsored break for this episode. Our sponsor for today is Toptal.

**Break:** \[00:27:39.29\]

**Erik St. Martin:** Alright, we are back, talking to Solomon Hykes. Carlisia, I know that you had a follow-up question to Adam just before the break... Do you wanna go ahead with that?

**Carlisia Pinto:** Yeah, so Adam asked a good question, and I don't think we got to the answer. Adam asked "What impact did Docker have on Go's popularity?" Was that question answered?

**Adam Stacoviak:** I don't know, I think he was talking towards the \[unintelligible 00:28:43.01\] and some of the features of Go, although I would love to hear that. We hear from someone like Matz, the creator of Ruby, and the impact that Ruby on Rails had to Ruby... You, Solomon, as someone early on in 2012 choosing Go for Docker, how do you feel Docker had an impact on Go the language?

**Solomon Hykes:** I sometimes ask myself that and I don't really know, to be honest. My feeling is I think early on Docker using Go was a validation for Go in the phase where it was clearly picking up, but it was still useful to be able to point to large scale projects using it... And I think at some point, briefly, we were the largest Go project, although I don't know if that's true today, honestly... But the point is now Go doesn't need that anymore.

I think now we're one citizen of a Go city among many others, so we're contributing in that way, but we're not longer at the phase where Go needs to point to any particular project to justify using it. I think it's a mainstream language now, which I think is great.

**Erik St. Martin:** That's really interesting, because kind of the same timeframe Brian and I, when we were planning the first [GopherCon](https://www.gophercon.com), didn't want to plan it in San Francisco for a similar reason, where we wanted to try to prove that this was an outside of Google thing, that it wasn't just Google using this language. So that whole year was mostly defending, like "No, it's not just Google that writes stuff in Go."

**Solomon Hykes:** Yeah, and I remember actually going through the process... We did a little bit of due diligence... Like I said, I decided in my heart and soul, and then after the fact I pretended to go through proper intellectual due diligence, and I remember we looked for proof points, and definitely there were no other projects that were really high-profile that were outside of Google that used Go that I could find, or that were mature or large enough. But I remember one point that did sway me is that within Google -- it wasn't clear at the time how much Google actually use Go in production, and at some point I remember there was a blog post on the Google blog about... I forget the name of their service, but they had a service that was basically their custom MySQL frontend for...

**Erik St. Martin:** Vitesse.

**Solomon Hykes:** Yes, exactly... I think they open-sourced it since, but at the time it was not open source... But they talked about it and they said it was written in Go, and they said that the whole critical path of MySQL queries for the frontend of YouTube.com went through that. I did a quick back of the envelope math and thought "Okay, I think I can use this language."

**Adam Stacoviak:** Nice.

**Solomon Hykes:** So that was my validation point at the time.

**Erik St. Martin:** Yeah, I remember trying to get Vitesse running... It was ridiculously cool. So we're kind of talking about nostalgia, and I'd like to start moving towards the growth and Docker in its current state. But one question I have is like, adopting so early, and even leading up to now, there wasn't a lot of -- like, you talked about the standard library and stuff... There wasn't a lot of libraries in existence back then, which is part of the overhead of adopting a new language - you kind of have to write everything on your own... What kind of stumbling blocks have you had in the decision?

**Solomon Hykes:** \[00:32:17.07\] Nothing major. We had a lot of tactical stumbling blocks, especially in the second year when we started really moving down closer to the system. The thing about Docker is in the early days it was a wrapper around this pre-existing command line tool called LXC, and actually one of the motivations for Docker was the LXC command line tools were just really not reliable at all, and operationally we had all sorts of horrible inconsistencies. The same command would either fail and return, or hang forever... There was no way to predict one or the other. We needed polyfill on top to have a stable, reliable layer... Which, by the way, hilariously now, we keep hearing cranky people (let's call them) saying "Oh, Docker, a hipster tool... LXC - that's the real man's, bearded man's tool." \[laughs\] Having run a few million containers in production using LXC, unlike those cranky people - let me tell you, it was not fun at all.

The point is because we did the wrapping, we did not need a lot of sophisticated interfacing to the system early on. We just literally shelled out to the LXC tools, and then we parsed the output and stuff like that. So we didn't really push the limits of the standard library... I mean, we had bugs and instabilities and performance issues, but nothing memorable really.

Then in the second year when we replaced LXC and we implemented this library called LibContainer that actually hits Linux kernel capabilities directly -- we had things there, but honestly, there's no particular instance that I can really remember... Honestly, given the level of adoption and maturity of Go, I've always been impressed by the quality and breadth of the standard library, relative to the stage of the language, if that makes sense. It's a really well-run project, it's really high-quality.

We've always adopted the latest version of Go for the latest version of Docker. We've never lagged behind, thinking "Oh, let's wait until someone else goes through the pain and then we'll upgrade." The Go project has trained us to just trust their latest stable releases... Which, by the way, I think it took us a while to get to the same points; I wish I could say the same for Docker since the beginning.

**Carlisia Pinto:** So how about today? Is there a point where you say, "Well, it makes sense to use an existing library that's external to the standard library"? Or does Docker or Moby have a philosophy of saying "We don't use external libraries; we use the standard library and we write everything ourselves"? Do you have that rule? If you don't have that rule, how do you make a decision to "Okay, now it's worthwhile using an external library"? Or are there categories of things that you consider that for and others you don't?

**Solomon Hykes:** Well, first, I heard the word "Moby", so can I suggest that I address that afterwards?

**Adam Stacoviak:** Yeah, we're gonna open that topic up soon.

**Solomon Hykes:** To answer your question, first of all, I don't really make those rules anymore... We've delegated these decisions to a lot of the maintainers, but I think we've just followed common sense rules. If the standard library does it, use the standard library; if there's an external library that does it, check for how up-to-date it is, how responsive the maintainers are, how many other people use it, and it if it feels okay, then use that.

\[00:35:53.10\] If none of the above is true, then write your own, but be careful to not waste too much time. If it turns out that a lot of other people needed that and they end up using your implementation, then as soon as possible spin that out into a separate, independent library so that it's not too tied into your project.

I think that's what we followed, but I think everything I just said applies to any \[unintelligible 00:36:18.05\] software project. I don't think we've done anything out of the ordinary.

**Carlisia Pinto:** That sounds sensible, yes.

**Adam Stacoviak:** So here we are today... We are four years(ish) later. Docker is cool, everybody is using it... We're in a whole new world where Docker is basically the Xerox of containers. You've owned the name. If you talk about containers, you essentially say Docker, right? That's the case we're in, and it seems like that's where we're at with even naming things. Solomon, you mentioned the GoTime FM chat room, so if you're listening to this after (not live), we do this show live on Thursdays, you can hang out with us in the GoTime FM channel in GopherSlack; I encourage you to do that, but if you're not, don't worry about it. But inside the chat we were talking about this transition of Docker to the new name, Moby.

News came out - I guess it's been about three weeks, maybe a month... I've kind of been in my own life for a bit and also I'm not really sure on the timeline, but you've transitioned to this new piece here and you've changed a lot about this brand name, this really well-known brand name of container/Docker, and... How dare you? Why did this happen? \[laughter\] I think that's what everybody said, in my opinion... It was like, "Why did you do this?" Did you all have the same opinion internally?

**Solomon Hykes:** Yeah... So it's definitely a big change, and it's a change that, like any big change, it will take a while for the dust to settle. So it's a change that's really incremental; it's an ongoing change. It's just that at some point you need to kick it off, and [DockerCon](https://events.docker.com/events/dockercon) last month is when we did kick it off.

**Adam Stacoviak:** Okay, so it was about a month ago then.

**Solomon Hykes:** Yes, exactly. So there has been a lot of work and gradual changes before that moment, and there's gonna be a lot of gradual changes and work afterwards, but I think for a lot of people this announcement of course is when they first heard about it. The point is really it's a fundamental shift and we've been working on it for a long time, and I think, honestly, we could have managed some tactical aspects of the announcement better... But first, I just wanna address the term everybody, because what's really interesting with Docker - it goes back to the initial topic we discussed, "Who is in the Docker community? How large is it? How homogenous is it? How diverse is it?" and the answer is "It's very, very large and it's very, very diverse", and I think you can see that in the reaction and the perception of that change.

Docker today, on the one hand, is a platform that developers use to develop their applications, and operators use to deploy and manage their applications, and we're seeing that in small projects (hobbyists), small businesses, and now enterprises. So there's some very large organizations that have developers using Docker all day long, and operators using Docker all day long to run all sorts of applications. That's one thing that Docker is, that's one aspect of the Docker community.

Then there's another aspect, which is an open source project where specialized, passionate hackers are working together on the code that leverages all this technology to do container things, right? Container runtime, container networking, container storage etc. We've got this whole open source community of system hackers. That community is much smaller, and it's also much more specialized. For us, it's about 1 to 1,000.

\[00:40:07.05\] So the key thing to realize is the switch to Moby affects that second group, the open source contributor community, in a positive way; that's the goal. The goal is to improve things for the open source community.

It does not affect our user community at all, or our customers. Or if it does, it's indirectly, meaning that if you zoom out from this community that we're in right now -- anyone that has ever gone to GitHub.com/docker/docker is in that group, the smaller group, the more specialized and better-informed group that is interested in how things work on the inside, that's actually participating in creating it.

But as far as everyone else using Docker is concerned, nothing has changed. Docker is Docker, it's still being updated in the same way, it's got the same features, it's got the same interfaces, it's got the same free version and paid version... So to set the context, it's an important dimension to keep in mind.

**Erik St. Martin:** So I guess that's one of those perception things, and a little bit of confusion, as... Yeah, I think a lot of people thought "Oh, it's a Moby container now, and now I run the Moby command", and what you're basically saying is if you're not touching the code of Docker, you would never know. If you're a Node.js developer and you're just deploying apps in Docker, you're still using Docker and you'd still going to Docker.com and getting the RPM's or whatever to install it.

**Solomon Hykes:** That's exactly right. I think part of the reason for that confusion is that we did not explain that well enough.

**Adam Stacoviak:** If you don't mind me saying it, it seemed like it was delivered -- I wouldn't say prematurely, but it just seemed like you didn't pay enough attention to the impact, maybe... I don't know, it seemed a little bit just sort of thrown out there. Do you feel like that's how it was executed, or do you feel like it wasn't handled with enough care? And I don't mean that negatively; I just mean that it seemed like you didn't think of it as being that big of a deal.

**Erik St. Martin:** I think when you're too close to the problem you don't necessarily see the way people on the outside see things, so working on the project, you're like "Oh, it makes total sense. We work on Moby; it's basically an upstream to Docker. People use Docker, all is good..."

**Adam Stacoviak:** Which is why I opened it up with the whole Docker compared to Xerox, because I think in my opinion - and I think in a lot of developers' opinion - when you think of containers, you think of Docker. So when you mess with the brand name of containers or this movement, so to speak, you were sort of like fudging the name you applied to containers, and that would upset a lot of people.

**Solomon Hykes:** Yeah, so I think it's a totally fair question. Definitely a lot of care has gone into the whole thing; a lot of us have been working on this change for a year and a half...

**Adam Stacoviak:** Right. It doesn't seem like you would just do this blindly, considering what you've shared with us, which is why we kind of began with the nostalgia; you put a lot of care into moving to Docker in the first place, so clearly you would take the same amount of care when transitioning to Moby.

**Solomon Hykes:** We did, but I think we made a few tactical mistakes along the way. It could have been smoother. I'm not gonna go into the whole back-story, but I think we made a few miscalculations. The big picture is it's day one, and what matters is how many contributions will continue to flow and how healthy will the project be going forward, and how healthy will the Docker product be going forward and how many people will use it and how happy will they be etc.?

I think, honestly, we're gonna look back in six months and think of it as a blip in the radar. What matters is the next six months, how well we execute... I've done a lot of launches; no launches go well. There's always something that goes wrong. Here I think what went wrong - just to pick a few details, a few examples - we optimized the hell out of the communication to two different groups at the opposites of a spectrum.

\[00:44:09.13\] We invested a lot in talking to the maintainers of the project. That's a very small group - it's less than 50 that actually have commit rights on the project or on one of the components of the project.

I started an e-mail thread with them about two months before the announcement, talking about the tension between Docker as an open source product and Docker as an open source project... The fact that the communities around these two (the product and the project) are different, they have different expectations, they have different needs and we're reaching a scale where it's becoming a problem to have those two things mixed, and what do you think of what Red Hat did with the split between Fedora and Red Hat Enterprise Linux...? So there was a whole thread that went on for two months, so we invested a lot in that.

On the other end, we invested in making sure it would not disrupt our users and our customers. Anyone using Docker, we wanted to make sure they would not be affected, and also how would they understand the change to Moby. So we spent a lot of time crafting a story that would be understandable for the mainstream, and I mean our mainstream. You still have to be a developer or someone who understands and cares about Docker, but you don't have to be an open source contributor to the container engine. We spent a lot of time thinking about the best way to explain it because it's a complex topic, because really, what we did with the switch to Moby is we changed our production model...

From the point of someone who's using Docker we're saying, "Hey, we're making a change in how Docker is produced under the hood, and if you're interested, here's a high-level explanation of what that means for you and why it's good." That's what we optimized for and that's the story we told at the keynote at DockerCon. I think it will be useful if you're interested in digging into this to watch that [keynote](https://youtu.be/hwkqju_BXEo?list=PLkA60AVN3hh_nihZ1mh6cO3n-uMdF7UlV&t=4337) (I think we put it online). It's the day one keynote and there's a bunch of drawings to explain... So that's the other thing we focused on - explaining it well to our mainstream user community.

So we did these two things, and then I think the mistake we made is that we underestimated this sort of middle population, which is a lot of people that go on our GitHub repo, that are involved in the open source projects but very superficially; they're not active committers. They're not stewards of the project, but they're not application developers who never looked at the source code of Docker either. They're kind of in the middle. I think, honestly, for that middle community we didn't really prepare an explanation.

Our plan was "Let's announce our intention, let's move the repo in a new place, and then let's invite the community to come and help us execute on the change together to be more open and let's see what happens", and I guess what happened is there was extreme confusion and anger at the change, for a while.

**Adam Stacoviak:** It felt like a band-aid being ripped off.

**Solomon Hykes:** Yeah, I think so, but we were hoping for -- again, another point of context... Sorry, I'm rambling a little bit...

**Adam Stacoviak:** No, that's okay.

**Solomon Hykes:** A lot of the criticism from the open source contributor community - a subset of it - was that we started at some point behaving more like a product... Docker started being more like a company-driven product than a community-driven project. I talked about this conflict, this override between Docker the project and Docker the product; the topic that we thoroughly discussed with the maintainers, but then forgot to discuss with everyone else.

\[00:48:05.03\] The typical example of that when we had the conversation is the announcement of Docker 1.12, when we rolled out built-in orchestration. That pissed off a lot of contributors for two reasons. One, we didn't warn them; we developed it in secret at Docker, and then we rolled it out, which is a typical thing to do for a product, but it's not a typical thing to do for a project. So it really kind of shone a light on the discrepancies between a project and a product.

The other reason people were pissed off is we did not use Kubernetes for that feature. There's a subset of people who contribute to Docker who are also contributing to Kubernetes and are big fans of that project, and they got really pissed off at us that we didn't use their project... How dare we? Which, by the way, I think Kubernetes is a great project. We did consider using it, but we decided against it; it was just an engineering decision.

Anyway, my point is because we got so criticized for that, for doing things behind closed doors and polishing it completely before we released it, we thought "Hey, with Moby let's do the opposite. Let's make the bare minimum viable change" - which was moving the repo from one org to the next - and make no other changes, and then explain the plan and then do every change together with the community in the open. That's what we did, but it caused the opposite backlash, which was "What is this? It's half-baked. It's not clear. What's going on?"

We thought we were being super-nice by making things super-open and involving everyone, but in fact I think we confused the hell out of a lot of people. So anyway...

**Adam Stacoviak:** But maybe it's true... Our production shipment was broken for a few days because of the name change... I think there's one question in the chat there, which is "Why were so many people \[unintelligible 00:49:59.06\]" I think it may have just been simply docker/docker versus moby/moby... One change, essentially, that may have broken a lot of things for people. That abrupted band-aid rip was what I meant by that...

**Solomon Hykes:** Actually, very few things were actually broken. I think we had a glitch in the redirects, but basically, everything that was broken was mildly broken and fixed within the day. Everything else was really confusion, mostly at the fact that we moved the repository - docker/docker to moby/moby. That made it look like we were renaming the Docker product to a Moby product.

**Adam Stacoviak:** Hence the Docker/Xerox comparison, because like "Why change that?" In all honesty, to tell you the reason why we wanted to have this conversation with you here on this show was so that you can share the details of that. I think hearing that now from you, versus a blog post, which is black and white text... You can't really see a face or hear an inflection or understand the genuineness from somebody and it's very hard to get the real reason why an organization would make a choice like that, and hearing it from you now makes sense. You were genuinely trying to do it in the open, you were trying to embrace the community, and that to me is so cool. I'm thankful that you have that feeling, because it shows that you care and embrace the hacker community, which you're very much a part of, of course. You're not just Docker anymore, you're still the same old Solomon, but I think it's cool that that's the approach you took with it. It's just a shame that it backfired that way.

**Solomon Hykes:** Yeah. Well, thank you, I appreciate that. I think the backfiring, honestly -- on the kind of stuff we've dealt with over the last four years, this was a pretty mild backfire. Right now we're just focused on improving it and focused on the cool things that we can do now that there's Moby.

\[00:51:55.00\] The really cool thing about Moby - separately from the name split - now there's a place for the open source projects and the open source product... The really exciting thing is it allows us to further break up the platform into components, and that's a really important aspect of it, because Moby is not one codebase, it's a collection of components. It's almost like a distro, really. It's not actually the home for any of the components of Docker, of which there are many - there's Containerd, there's SwarmKit, there's Libnetwork, there's Notary... There's a whole bunch of them, and each of them we're spinning out as independent projects.

If you like Containerd - and Containerd is the core container runtime that does all this, but without carrying any of the additional baggage, the additional opinions of Docker as a platform; so it just runs Linux containers, it's a low-level API to do that, and it's becoming the de facto standard for doing that. So even if you don't use Docker as a whole, most likely if you're doing containers, you're gonna use Containerd. That project we donated to an independent foundation - we donated it to [CNCF](https://www.cncf.io/)... So it's not part of Moby, but Moby integrates it into what we call assemblies - combinations of multiple components.

We're gonna do the same thing for every single component, so in the end you have these three phases which I drew in this little pencil drawing that you pasted in the chat earlier; we have three phases in the supply chain. All the way upstream we have the individual components, and then that gets integrated into Moby, but the key is because it's integrated in the community project, different participants in Moby can integrate these components in different ways.

Think of it as like a Lego club. You go to the Lego club, there's a giant box with all the pieces you could dream of, and then everyone's hanging out at this big table and everyone's doing their own castle or Thor or whatever, and if you wanna join a group of kids and play with them, you can join the fun... But the point is you can do your own \[unintelligible 00:54:08.03\]. Also, there's no mandatory Lego construction that you have to join. That's the aspect of Moby that I'm hoping we can emphasize more in the next few months, as opposed to the name change. It's really cool in that way, or it will be once we polish the tooling. There are gonna be infinite variations of your container platform, and Docker is only one of them.

Docker in this case is like a professional Lego artist, that has a lot of people that just love our Lego creations, but we're gonna come and hang out in the same club as everyone else and we're gonna build our Lego constructions on the same table and collaborate with everyone else, and if someone likes it, they can come and join it like before, because it is open source... But if they don't like it, or they only like a part of it and they wanna do something different, but with the same Lego bricks, then they can do that. Moby in that metaphor is the club - it's the table, it's the box with all the bricks. That's the goal of Moby, really.

**Adam Stacoviak:** Maybe we can have you back on the Changelog to talk about that deeper part. It's a shame we had to spend a lot of time here talking about just the name change, because I feel like that's -- it has to be talked about, but we can't talk about the other thing, which is the next six months that you keep alluding to, without discussing or addressing the name change, which as you mentioned, did confuse many people.

You have spent several years defending Docker and this open container spec and you've spent several years trying to do different things, and it seems like this transition, this move is out of a response of several years of flack, so to speak, that you've mentioned a couple of times that you've taken over the years.

**Solomon Hykes:** Yeah. Or let's call it constructive feedback. \[laughter\]

**Adam Stacoviak:** There you go, constructive feedback. Flack was my word... I don't think you directly said that, so I'm not putting words in your mouth.

**Solomon Hykes:** \[00:56:04.28\] The thing to remember is when we started Docker we had open-sourced things at DotCloud but never had the scale, right? And also, it was company open source; there was no serious effort in trying to create a community where everyone participating is equal. But Docker, from day one, that was the model; we firewalled it off. But we learned a lot along the way. We looked at what other projects did, we copied... We also tried things at scale that people told us were a good idea, and then we broke it because at our scale it was a bad idea. What people forget is there's very few projects that have ever operated at the scale of Docker.

There are projects, we're not the only one and we're not the largest, we're definitely in the top 0.1%. Just like systems behave differently at large scale and sometimes the rules change - what seemed obvious at a small scale suddenly starts breaking in mysterious ways at large scale; for projects, it's just the same thing.

So part of this is we have to explain things to people who do open source and are very proud of the fact they do open source and they're confident that they know open source - and they do, but they don't know open source at our scale. Now I hear myself, that sounds arrogant, but we have to deal with that, too. Sometimes the reality is we know better, but that's not a popular thing to say.

We just try it, and then we try to be responsive. If anyone points out something that's broken, we're always listening, and then we're actively working on fixing it. Internally, we have a culture as a team of always talking about the broken stuff, always talking about the problems, and I think maybe we should do a better job at showing that... But we really do.

The problem we have though is because we're such a big target, every day we get hundreds of points of feedback; we get criticized over a hundred things, and we have to kind of extract from that giant volume of criticism what is the most important and actionable stuff. To get to that, we need to sort through people who had a bad day, people who had a really niche use case and it's really only a problem for them, people who are talking about opinions versus facts... It takes time and it's just difficult, and we're always scared, "Are we missing an important piece of feedback drowned in the noise?" And by the way, if you know tools or techniques that help do that, we're always on the lookout for that.

**Erik St. Martin:** I know we only have a couple minutes left in this show... One thing I'm curious about is like here we are now with Moby and the split, and you've alluded a little bit to the next six months... What's your vision for Docker over the next one year, five years? If you had nothing but free time to hack on Docker yourself, what would drive you? What kind of features would you like to see?

**Solomon Hykes:** Excellent question. \[laughter\]

**Adam Stacoviak:** You stomped him.

**Solomon Hykes:** Sorry, I was daydreaming about me hacking all day... \[laughter\]

**Adam Stacoviak:** Good one, Solomon.

**Solomon Hykes:** You know, right now we've got two groups of users that are really excited about Docker and are just pulling for more stuff; there's developers and there's operators. Operators I think just have this massive problem that they need -- they did a new kind of operating system, because it's not individual servers anymore that they're administrating, it's as we know, large clusters of them, multiple clusters of them, and a machine could go away and come back somewhere else at any time, and it's just really complex infrastructure and it's fast-moving and it's large, and the tools and operating systems have just not kept up.

So you've got large technology companies that have built their own custom distributed operating system, but everyone else is left kind of cobbling together tools and components and adding generous duct tape around it to kind of create sort of an operating system to run their stuff... And we wanna build that.

\[01:00:23.21\] One thing we've learned is we've tried to build that with DotCloud, the operating system that would run all your things on a distributed system. What we've learned is you can't build that in a monolithic way; you have to build that in a modular way, so that's what we're doing. We're either building the missing pieces or partnering with others that are building the missing pieces and then we're learning how to tie that all together in a system that makes sense and that you can operate reliably in that scale. I'll be honest, we have a lot of work left to. So that's one thing I wanna hack on, that we're actively hacking on.

The other one is development. There's a lot of people out there that have a lot of cool ideas and they wanna build something with code, and it's still too hard. Honestly, I feel like we've regressed since the times of Basic, or Excel formulas. Those were incredible leaps forward in terms of making programming useable by more people to solve more problems.

**Erik St. Martin:** Or SQL.

**Solomon Hykes:** SQL was pretty cool, but you still had to plug into other things, right? But I guess you're right, you can express something, interaction with data. Yeah, actually SQL goes in that list, for sure.

**Erik St. Martin:** Yeah, before then you had to write your own storage layers and how you were gonna retrieve and do this stuff, and that really made it more approachable at a much higher level of \[unintelligible 01:01:41.24\]

**Solomon Hykes:** Yeah. So for us, because Docker now is really this kind of beacon for a lot of developers who wanna build something and they just have all these problems and they need tools to solve these problems, so they come to us and they tell us "Hey, I would like to do this... Can you help me?" And honestly, still today, with all the tools we developed, 90% of the time our answer is "No, we can't really help you. There's no tool for that", but it makes us wanna build them.

So I just wanna make things easier for developers. Honestly, I think we're at the very beginning of that... And I don't mean just Docker. I mean as a community of people who make tools for others, we've got a lot of work to do. I think we've gotta raise the bar; we're not doing a good enough job.

**Erik St. Martin:** So I think we're basically right at the tail end; we might be a couple minutes over... But there were a couple of questions, and we'll see how many we have time for. One of them was somebody - I think it was Marwin, if I recall - in the GoTime channel had asked that he had read about a change from the REST API to [gRPC](https://grpc.io), and kind of what the reasoning and details of that are.

**Solomon Hykes:** Oh, yeah. So that's part of the exciting part of Moby - we now have with the Moby project a nice framework to split up the Docker platform into distinct components that each are more specialized, like Containerd, Containerd being the best example of that. Each of these components is almost like a little microservice, right? In a way, we're saying "If every application is going towards a microservice model, why should the platform itself running these applications also not adopt a microservice model?" It seems like the right thing to do.

Once upon a time, we tried to write our own RPC layer for that... We had a project early on at DotCloud called ZeroRPC, and then we did a lot of experiments with extending that with HTTP/2, and SPDY before HTTP/2 existed. So I've always been a big fan of finding the right RPC layer, but we never had time to really push that project forward. gRPC came along, and it's getting a lot of traction, and I'm seeing a lot of engineers at Docker just use it.

Containerd is a gRPC interface... It's just popping up, so it's a pragmatic choice of just picking an RPC layer for the low-level interfaces. The fact that you can generate all the clients and SDKs etc. is really nice.

\[01:04:06.29\] The existing Docker API is a higher-level API, and it's currently and HTTP REST API. Right now we're working out what's the roadmap for that API. The absolute priority is to not break existing users. So there will continue to be an HTTP REST API, just because our current users and ecosystem use it and we don't wanna break them.

So it's more of a going forward for all new APIs. We're starting with gRPC by default, because that's what people are using in our particular community, but yeah... That's it. If you're interested in discussing any of this, by the way, you should join the Moby forums - [forums.mobyproject.org](https://forums.mobyproject.org/).

**Adam Stacoviak:** That's another good question, too - any closing thoughts? We're near the end, but that's a great plug there... If you have a discussion you wanna have, that's a great place to go, but anything else you wanna share, Solomon, before we tail out the show? Any closing thoughts, any words of wisdom back to the Go community adopting Docker/Moby?

**Erik St. Martin:** ... contributing to Docker?

**Adam Stacoviak:** Yeah.

**Solomon Hykes:** Yeah, I would say the whole point of Moby was to take the project or the collection of projects to the next level. If you're interested in any way, or if you're on the fence on contributing, I think now is actually an excellent time to contribute, because Moby is a sign that we're investing more in the open source side of things; we want more people to contribute and we wanna help.

Especially if you're an open source first-timer, one thing we've seen is even experienced programmers can really hesitate to make their first contribution to open source; it's a big leap of faith to take, it's unfamiliar... Sometimes you get the feeling that it's kind of a club and you may not be welcome, maybe there's private jokes that you don't get, and as we grow as a community, it's gonna be something that we really have to keep in mind.

We made a lot of efforts early on in the beginning of Docker to make it a really cool place to do your first open source contributions, and I would like Moby to do that, too. So if you're interested in any way, show up and we'll talk about that together.

**Erik St. Martin:** And I'd like to add one more note to that contribution - don't feel discouraged if your pull request goes a long period of time. There's so many pull requests on Docker that it can take a month before it makes it through there. I've had my own sit, waiting for staff. It's just... The project is so active.

**Solomon Hykes:** Yeah, and there's -- if you go to the Docker documentation, there's a whole section on how to contribute, and we're gonna continue to maintain that section. We also organize events, special Docker meetups where you can show up and there's a mentoring where we help you pick a contribution that's the right level for your first contribution, and then we help you make that contribution.

So these events can be a really good way to get started in open source in general.

**Adam Stacoviak:** \[01:07:07.20\] I'm really bummed we didn't actually talk about why Moby, why the name Moby, but we'll leave that for a different conversation... I just wanted to throw that out there, because naming is the hardest thing, right?

**Solomon Hykes:** Yeah, it's the name of the mascot. About two years ago we opened up a voting, we asked the community to pick a name for the mascot, for the whale, and the community picked MobyDoc. Now, two years later, we're creating a project and we want the connection to Docker to be clear, but we also want it to have its own identity, separate from Docker. We looked at what Red Hat did with Fedora - it's the hat, it's kind of a reference, and we did the same thing. And if you look at the logo, it's the tail of the whale. So that's it, really.

**Adam Stacoviak:** Easy said... Nice.

**Erik St. Martin:** So I think we are overtime here, but it's been so great to have you on the show, Solomon. I'm really excited that you got a chance to hop on and talk to us about Docker.

**Solomon Hykes:** It was my pleasure. Thank you for having me, I love talking about this stuff.

**Erik St. Martin:** Hopefully we can keep getting you on as Docker continues to grow and take over the ops world, and development world.

**Solomon Hykes:** I would love that. Anytime!

**Erik St. Martin:** And thanks everybody else for being on the show - Carlisia and Adam for popping out from behind the curtain to chat with us.

**Adam Stacoviak:** Anytime!

**Erik St. Martin:** Huge shoutout to our sponsor, Toptal, for sponsoring the show. Definitely share the show with fellow Go programmers. You can find us on [GoTime.fm](http://gotime.fm), you can subscribe to our weekly e-mail there... We are on [Twitter](https://twitter.com/GoTimeFM), and if you wanna be on the show, have questions for our guests, [ping](https://github.com/GoTimeFM/ping) us... With that, goodbye everybody! We'll see you next week.

**Adam Stacoviak:** Laterz!

**Carlisia Pinto:** This was great! Thanks, Solomon.

**Solomon Hykes:** Thank you.
