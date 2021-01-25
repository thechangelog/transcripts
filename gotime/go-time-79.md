**Adam Stacoviak:** And we're live, too... Do you want a little music?

**Carlisia Thompson:** Yeah...

**Adam Stacoviak:** Let's get some music going here. This is our 8-bit, Steve. What do you think about the 8-bit? \[music playing\] Yes...! Yes! Get it, BMC! Do you like that?

**Erik St. Martin:** Adam's just having too much fun with this...

**Adam Stacoviak:** I've got problems, okay? I've got problems. Please do this show without me... \[laughs\]

**Break:** \[00:00:40.19\]

**Erik St. Martin:** Welcome back, everybody, to another episode of GoTime. Today's episode is \#79, and on the show today we have myself, Erik St. Martin, and Carlisia Pinto...

**Carlisia Thompson:** Hi, there.

**Erik St. Martin:** And joining us today from behind the curtains is also Adam Stacoviak...

**Adam Stacoviak:** It is me... I have arrived.

**Erik St. Martin:** And our special guest for today is the product lead on the Go team, [Steve Francia](https://twitter.com/search?q=spf13&src=typd). Welcome, Steve!

**Steve Francia:** Thanks for having me.

**Erik St. Martin:** Now, we've had you on the show before, so I don't know whether we need like a whole intro, but do you wanna give just a little bit of background about yourself and the role you play on the Go team?

**Adam Stacoviak:** Maybe what's changed since the last time we talked to you. Did anything change?

**Steve Francia:** I've gained weight since the last time you talked to me... \[laughter\]

**Adam Stacoviak:** Aside from your weight... Maybe along your role. Did anything change in your role?

**Steve Francia:** No. So I've been at Google about 18 months now, a little more... Actually, closer to two years. I've been the product lead at Google on the Go project the entire time. I think I've settled into that role a little bit more over time, but it's been the same role. That's it, there's not a lot new with me as far as roles and stuff, so... Yeah.

**Adam Stacoviak:** How excited are you?

**Steve Francia:** \[00:03:39.10\] It's an exciting time, it really is. I've had some good experiences in my career. I've been a part of MongoDB since the very beginning, and took it to when it was the third most popular database. I was an early part of Docker... So I've had some opportunities to be a part of something when it took off and it transformed, and Go is going through what I might even call a second surge, in that it's really hit its stride, and you can feel there's something tangible about it. This doesn't happen very often with languages or projects in general... And it's just a really exciting thing to be a part of.

**Carlisia Thompson:** Elaborate on that a little more, please. What makes you feel this tangible thing, that Go is going through a second surge?

**Steve Francia:** All projects kind of go through ebbs and flows, and that's just the nature of life. When I joined the Go project, we weren't tracking as close as we are now growth numbers, but it was lower than what we're seeing now, by a significant amount. In 2017 the Go adoption grew 76%, and that means over 700k developers adopted Go in 2017.

**Carlisia Thompson:** Are you tracking that by number of downloads?

**Steve Francia:** No.

**Carlisia Thompson:** How do you track it?

**Steve Francia:** We use two different metrics to arrive at that. They're both external surveys done of the broad developer community, and both of them paint Go as around 7% of developers using it... So that's how we arrived at it. It's the O'Reilly survey and the Stack Overflow survey. We found those are the most accurate way of telling broad developers, and between the two, we figured that's a pretty good check. They do appeal to different audiences, they don't always get the exact same numbers, but they're always pretty close to each other.

**Adam Stacoviak:** I was at a conference recently actually, just this past weekend, at [Zeit](https://zeit.co/day). A small internet company -- I guess I shouldn't say small; it's sort of maybe an up and coming cloud service, so it's still in a smaller phase compared to other clouds comparatively... And one of the talks had Go in it; it was more like a front-end developer space, and I would imagine even seeing Go, and there's Go in there. And if you do a little scroll-back in the [GoTime.fm channel](https://gophers.slack.com/messages/gotimefm) there, you'll see a [slide](https://files.slack.com/files-pri/T029RQSE6-FAJHS7DL7/dsc01933-2.jpg) that says "Why not write everything in Go?" I was floored.

**Steve Francia:** Yeah, on top of just the raw numbers we're seeing the number of conferences expanding, we're seeing more participation, we're seeing a greater diversity of talks, we're seeing talks from more diverse people as well, and all sorts and types of diversity. We're seeing an increase of Meetups, and not a day goes by really where you don't see some interesting project that was written in Go happening. There's just a lot of excitement happening around the whole ecosystem.

**Carlisia Thompson:** More conferences...

**Steve Francia:** Yeah, this year we've added five new conferences, if I remember right. So I think we're up to 15 or 16 [dedicated Go conferences in 2018](https://github.com/golang/go/wiki/Conferences).

**Erik St. Martin:** Wow, that's just wild how fast it's grown.

**Steve Francia:** \[00:07:57.22\] Yeah, crazy to think. I'm excited for [Go Europe](https://gophercon.is/), which is in Iceland; it's coming up in I think three or four weeks now. I know this week is [Go Singapore](https://2018.gophercon.sg/)... There's just a lot of conferences happening, and it's so much that it's hard to keep up with them all.

**Carlisia Thompson:** Yeah. So let's talk about this branding... What prompted Google to take on this project? What was the reason behind it?

**Steve Francia:** So I'll say it was mostly me... If you wanna blame someone, you can blame me. But it wasn't anyone from Google corporate that was saying "Oh, we need to brand Go." It came mostly out of, I think, two things. When I joined the team, one of the first things that happened - just a little experience - was we sponsored the [DotGo conference](https://2019.dotgo.eu/), and [Andrew Gerrand](https://twitter.com/enneff) had moved to a new project (he moved to [Upspin](https://upspin.io/)), so that left me in charge of sponsorships.

So we're sponsoring DotGo, and they asked us for a blurb to go along with our sponsorship... So I started asking everybody, "Well, what's our blurb? How do we talk about Go?" Nobody had one. We really didn't know, and I asked people, and I wrote something, and I got lots of feedback, but... I got lots of feedback, and a lot of it was not consistent. Then came the idea that we really needed a more consistent way of talking about Go.

The idea behind the [brand guidelines](https://golang.org/s/brandbook) that we published actually came out of -- in spite of it being quite visual, the genesis of it came from that we needed a better way to talk about ourselves, and what the project was, and we needed it clear, and we needed to have it very digestible. So the branding actually started completely as text, and the visual element was added later to it.

If you look at the brand book that we've now published, and there's a [blog post](https://blog.golang.org/go-brand) on blog.golang.org on it, you'll see the first part is the brand, and that makes up the entire first half of the book, and it's all words... And they're pretty looking words, right? There's decorations around them, but they're just words. And we spent the majority of the time focused on this, and trying to figure it out. So that was my personal experience.

Then I've done a number of [surveys of the Go community](https://blog.golang.org/survey2017-results), and two interesting things came out of those, as it relates to this. We found that there was a reoccurring theme of people that when they had tried Go, they fell in love with it... But they didn't know how to communicate its value to their teammates or to their managers. And historically, the best way we've actually talked about Go was we've had kind of an unofficial slogan of "Try it and you'll like it!" or "Try it and you'll love it!", and that's reinforced by our website. When you go to the Golang website, what's the first thing you see? Anyone?

**Adam Stacoviak:** [Try it](https://golang.org/).

**Steve Francia:** \[00:11:50.24\] You see "Try Go." It's right at the top. Then you see a happy gopher and Download Go, which is also a way to try Go. That's kind of the way we reinforce it, and that's good, and for the early adopter audience that we've served for a number of years, the idea that you can just try it is very valuable.

As we go to more mainstream programmers, people that might not come with a CS background, the idea of trying a static- compiled language is a bit intimidating, and a lot of them are looking just to find out more about it.

When we heard this very consistent feedback that people when they use Go they loved it, but they didn't know how to explain its value, we also heard feedback from people that are tech leads, or decision-makers, directors of engineering, CTOs etc. they didn't know what Go's value was. In our number of surveys and interviews we found they had heard concurrency and they've heard performance, but they weren't really sure what Go's value was... And it's a tough thing, because with Go it's not a single feature that really produces a value, rather it's the amalgamation of all the features; when you add them all up it produces an experience that's really unlike any other in computer science, and it's that experience and how it scales over time that really produces the value. That's a very hard thing to convey, and we tried to capture it the best we could with this brand.

**Carlisia Thompson:** That is a good point, an experience IS hard to communicate. People might have shared experiences, but also specific, distinct experiences, but I think having a guideline that helps them communicate different aspects of the experience could be very helpful.

**Steve Francia:** That was our intent. To go into a little bit more (if you'd like) of our process going through this - because I think it's pretty insightful...

**Carlisia Thompson:** Yeah.

**Steve Francia:** We worked with a branding agency. We recognized this was not a core strength of our engineering team, branding, and the first thing that he did - the person we worked with, his name is Adam, and his agency is [Within](http://withininternational.com/)... The first thing that he did was he just set a series of interviews; he interviewed all of the early project members, as well as a bunch of members of the Go team, to just get their feedback on what they thought Go was, and how they talked about Go. These were about 30-45 minute interviews.

Then he took all of that together and came up -- he tried to distill it down to really its core essence. Then he worked with myself a lot, [Chris Broadford](https://twitter.com/broady) worked a lot on this, as well as [Russ Cox](https://twitter.com/_rsc), and a bunch of other people. I think those were the primary three.

We just kept trying to distill it down further and further and further. It's amazing how much time it takes to come up with a small number of words. I believe it's Mark Twain who famously said "I'm sorry I wrote you a long letter, I didn't have time to write you a short one." I'm paraphrasing, that's not the exact quote, but... It really took a long time to distill it right down to the essence of what we believe Go is.

**Carlisia Thompson:** \[00:16:03.14\] And I particularly loved the Tone of Voice section of the brand book, because it tries to really narrow it down... Because it's one thing for you to say one word that tries to encapsulate what the language or what the community is all about; here we have a few words about what Gophers are, and corresponding words about what Gophers are not. I wanna go through the list, for people who are looking at this... Gophers are concise, Gophers are not verbose; they're genuine, not dubious; they're friendly, not exclusive; direct, not ambiguous; thoughtful, not reactive; humble, not haughty. Is that how you say that word?

**Steve Francia:** That's right.

**Carlisia Thompson:** So I really like that the effort was made to describe what Gophers are not. It's really helpful, and it's really helpful when you are thinking of how to behave in a community, what is acceptable, or how to write code, what are good idioms - you start thinking about these things, and it helps.

**Steve Francia:** Thank you. I think especially with the growth that we're going through, we can't expect our culture to spread through all of this growth unless we codify it, and try and lead... So that's a bunch of this, around like "Well, we need a single place as a reference to the entire global community", whether you're from Australia, you're from Singapore, you're from China, or you're from Brazil, or you're from Seattle, or anywhere, where you can have a single document that really reinforced what it meant to be part of Go. That was our goal of what we tried to do here.

**Adam Stacoviak:** I think branding was probably an extremely tough exercise, and the fact that you all started with words and interviews is a testament to the faithfulness to describe exactly what Go is, but then also what a programmer using Go may or may not be like, because a lot of branding is not really at all the visual part of it, while maybe some of the backlash or some of the surprise from the community is based on the visual pieces of it.

It's the understanding who you are and why you do what you do, to explain who you are, is really the core component of a brand. You can't show off who you are or visualize who you are unless you know who you are.

**Steve Francia:** What's that?

**Adam Stacoviak:** I guess maybe what are your hopes here? I know that this may have been not a surprise to you, obviously, because you were involved behind the scenes, but I think for many it was like, "Okay, Go is almost nine years old...", and here comes this - either brand or re-brand; I'm not really sure if this is a re-brand, because I'm not sure there ever was a true brand in place, to this degree... What are your hopes for the community to respond? When you released this, Steve - you wrote the article, the post on the Go blog - what was your anticipation? Were you surprised? What were you most surprised about? What were your hopes for releasing this to the world?

**Steve Francia:** \[00:19:47.24\] I'll answer the first question - is it a brand or a re-brand? I'll say there's not a lot new here. In a sense, our real goal here was -- as I said, I kind of started from that first experience I had maybe two weeks into joining the Go team, of having to write a blurb of who we are. I talked to Robert Griesemer and he gave me some feedback; I talked to Andrew, and he gave me completely different feedback; I talked to Ian, and it was different again. We really wanted to come up with what would be our story, our concise story that represents not only the Go team at Google, but the entire Go community, that we can have one way of talking about it. That really was the primary goal.

The other part was when everything is done kind of ad-hoc, you don't have a lot of opportunities to make decisions, and I would describe the historical brand as mostly ad-hoc. When we are asked a question, when we need a blurb for this - we wrote a blurb for that; when we needed a website that looked like this, we did that. [Renee](https://www.instagram.com/reneefrench/) has been fantastic in providing lots of wonderful Gopher designs, as well as a logo, which - I learned after that blog post launched - a lot of people didn't know we had a logo before.

Everything was kind of disconnected in how it was designed, and we often designed something for an immediate need, without looking at the holistic picture. With this, we really took the opportunity to say "Look at all these pieces we've done over the last 10 years. How can we put them together and make some real decisions about which are the ones that we want to be our voice, or our mission, or our look?"

Now, there's some new looks here. Definitely, the logo went through an evolution from Rene's hand-drawn into a vectored image... And Rennee has used a lot of different colors over the years, and we definitely used that as inspiration as we came up with our color palette here. But yeah, a lot of these ideas had been floating around, but most of it was to provide just a single point that people could use as an anchor, and hopefully answer that question when people ask "How do I communicate Go's value?" They can look at this and say "Well, this is what Go is."

We've written a real clear description, and I'll read it for those who don't have it: _"Go is an open source programming language that enables the production of simple, efficient and reliable software at scale."_ That's really what Go is, the best articulation we've ever heard or we were able to come up with of really what Go is. As we continue through it, our hope is that people use this as a reference, and that it can help unite the community.

**Carlisia Thompson:** Yeah, I got really caught up on the logo and the visual aspects of the branding, and I totally missed the point... I mean, the point is completely different, and I'm really glad you're here to tell us and people like me who might have missed the point, too. And in fact, I don't remember that we had a logo, and that was the question that I was gonna ask - so you just said that we did have a logo, but I don't remember what it was...

**Steve Francia:** You are not alone in that, as we learned very clearly from some of the feedback we got. People misunderstood that Go had a logo, and the logo was the Gopher.

**Carlisia Thompson:** \[00:24:03.10\] Yes.

**Steve Francia:** So when we said we have a new logo, I think this is really -- it was obviously a misunderstanding, but it came out of people's love for the Gopher. The people have fallen in love with -- this is the human side of a very technical project that we all love. I think there's no one that doesn't love the Gopher, and the reaction that we got was, I think, mostly stemming from that - people love the Gopher, and the thought of it not being around kind of gave people a shock.

That said, on our blog you can actually see the original logo. Not in the most recent post, but in a post a number of years ago, that we wrote on the Gopher... I'm actually looking it up right now, as we're talking. So it's on [blog.golang.org/gopher](https://blog.golang.org/gopher). This goes through the history of the gopher, as well as Renee's history with Plan 9 and other things, and it also talks about our initial logo, and it has a picture of it there.

**Carlisia Thompson:** With the black background?

**Steve Francia:** That's right, the one with the black background.

**Carlisia Thompson:** Okay.

**Steve Francia:** And if you watch some of the old videos, you'll actually see Brad and [Rob](https://www.youtube.com/watch?v=rKnDgT73v8s) and others wearing T-shirts with this logo on it.

**Carlisia Thompson:** That is true, I remember that. I remember those T-shirts.

**Steve Francia:** So this logo was the official Go logo, although it wasn't used very heavily. We used it on some of those T-shirts, and it ended up \[unintelligible 00:26:06.01\] but it's not on the blog, it's not in a number of other places. We've ended up using the Gopher far more when we created swag.

So that's the old logo... The new logo actually started from a very similar place, and you can see it ended in a very similar place.

**Carlisia Thompson:** It's very similar.

**Steve Francia:** And this logo... Renee drew it -- I might not be accurate on this, but a number of years ago. I wanna say 2008 or 2009. A very long time ago.

**Break:** \[00:26:46.09\]

**Adam Stacoviak:** What's interesting too is this blog post - I was actually gonna ask this question, in hopes of stirring up the \[unintelligible 00:27:39.20\] and story of the Gopher. I was not aware of this blog post, but this shares that; it has the history of Renee making it for a radio station called WFMU for a fundraiser they had, and it had a second appearance at Bell Labs, with Bob Flandrena's avatar, and then again for Plan 9 as a mascot, and then I guess when the open source happened for Go, Renee suggested to adopt the mascot, and the Gopher was born then, right around 2009.

\[00:28:15.10\] It's an interesting process, and you said, in a way, ad-hoc. So this gopher has kind of like made its way through several different forms and several different reasons for even being, to now be the beloved mascot of gophers.

**Steve Francia:** Yeah, it's amazing what an impact it's had on the project, and we owe Renee a huge amount of gratitude for her contribution to it. I think she really provided for us kind of our identity. We don't call ourselves -- in Python they call themselves Pythonistas, and everyone has different monikers. We don't call ourselves the Go-ers, or anything like that. We're gophers. And that comes from Renee's mascot. And even [GopherCon](https://www.gophercon.com/) and everything that's come since, it all really stems from Renee's mascot. I think she did an amazing job providing an identity for us, and our goal with the visual branding here was to really take Renee's work and to build on it, and to try and consolidate it down.

Renee did a lot of work with gophers, and colors, and the logo... She didn't do a lot of work with the website and other things, so our objective here was to really create a holistic presence for Go. You see the brand book, and it has some of the things... As I mentioned in our blog post, we're also working on revamping our website to follow this new brand, and we're pretty close to having the blog ready to launch. It should be a few more weeks. And that's where we're starting - we're starting with the blog; we'd like to get the community involved as early as possible, and we hope to be able to take the work that we did on the blog and apply it to the website, and keep going.

As a part of this, we're also extending our blog to support multiple languages, which is something we've never had before, and on follow-on reasoning using the same technology back-end for the website, which will also enable us to have multiple languages. There's lots of components to our website, and we're gonna focus more on the static content first, rather than things like [Play](https://play.golang.org/), where it's more interactive... But we're gonna stage it out, and hopefully have a consistent brand and feel across all of the different Go websites.

**Adam Stacoviak:** Was Renee involved at all in this process with Adam and the team, to interviewing and kind of self-examining the process?

**Steve Francia:** Rennee was - she was very involved. In fact, a lot of people were involved at the beginning for the interview, and then we spent a lot of time after their interview just working through everything and trying to consolidate things down, and that was a much smaller group. Then we'd go back to the larger group just for feedback every once in a while.

\[00:31:47.01\] Renee spent less time on the verbal part of the brand, but she spent a considerable part on the visual part of the brand, and she did so over time. She was very involved with it. She helped pick the color pallete, she helped name the colors, particularly the Gopher Blue one... She worked with us on every part of the visual aspect.

**Carlisia Thompson:** That sounds fantastic. I mean, I don't know... Whoever was involved, you guys did a really good job. I personally really like it, so I'm just gonna put my bias upfront. I love it, I think it came out really well. Good job!

**Steve Francia:** Thank you.

**Adam Stacoviak:** Not that this is that important to dive into, but I think it's kind of interesting the stark exact opposite response - and I know Hacker News isn't the best place to have comments, it's not the best place to meet the most loving programmers; however, there is such a [backlash](https://news.ycombinator.com/item?id=16935084) from so many people... I wonder why people feel like they should respond that way.

**Carlisia Thompson:** I didn't see that. I mean, I didn't look, either.

**Adam Stacoviak:** None of it seems really positive. Steve, I'm sure you had to dig into some of this, or at least be like "Come on - really, guys?" Someone says they're incredibly sad, the logo is awful, it looks like somebody else's logo... There's a lot of just immediate gut responses, it seems, from some people, potentially even the larger community here on Hacker News... But again, we understand what Hacker News is; comments can tend to be not very positive. They seem to be right on point with Hacker News' way of being somewhat negative about this process, and just bashing rather than uplifting; it drives me crazy.

**Steve Francia:** So what I saw-- first, I wanna say I think a lot of this just comes from the fact of how passionate people are. I think people love the Gopher, I think there's a lot of people that really love Go, and the thought of something changing has always been hard for people.

The brand is really the essence of something. There's a visual element, as well as all the text... It really defines what the essence of something is, and people were worried that their beloved language and mascot etc. were changing. I think what we saw was a reaction to -- you know, if people didn't love Go, if they weren't so passionate around it, we wouldn't have seen that. So I think it's a testament to how passionate people are around it.

Also, what we've noticed... The language on the blog post - I looked at it after this feedback and I've spent quite a bit of time on it... It's right in the very beginning that it says "Built upon the great foundation that Renee French established, and rest easy, our beloved Gopher mascot remains the center of our brand." As you scroll down, the Gopher is very present; it's featured in the video that shows our Go logo design process and all the different -- not all, but many of the iterations we went through with the logo. It's also very prominent in the slide presentation, as well as it's prominent in the brand book, all of which are featured.

\[00:35:33.00\] So I think we communicated the Gopher was very part of our brand well. Because the Gopher was a consistent part, but not the new part, we didn't heavily feature the Gopher here, but made sure that it was included... But we focused more on things that were new and different. In spite of that, I think what we saw was some people reacting to some people's reactions.

Some people misunderstood that the new logo was replacing our mascot, the Gopher, and they started tweeting about that, or posting comments about it, and then people reacted to that post, rather than finding out for themselves that that's not accurate. So it kind of escalates... When people have a misunderstanding, and then people look at that without going to the source, it always escalates things, and that's just a bit of a statement of where we live today, and the kind of world -- I remember life before the internet, and how hard it was to find information; you had to drive to places, or walk to the libraries...

**Adam Stacoviak:** And you had payphones...

**Steve Francia:** Payphones... I remember we had these card catalogs, you had to look up -- there were these giant dressers with all these papers in them that told you where to find things... It was very hard to find information, and now it's very easy, and still people are resistant to doing so.

**Adam Stacoviak:** I think that's funny too, because it seemed like the Gopher wasn't really going anywhere; it also didn't seem like - unless you read somewhere - visually, it didn't seem like the Gopher, unless you looked hard, at least just real quickly at this blog post, the Gopher was kind of missing, quickly... From a quick visual glance.

**Steve Francia:** Yeah, I agree. You have to either press play or just scroll down a little bit, or click on any of the things. Yeah, I agree, and especially when other people are saying it. So I think what we saw was people reacting to reactions, and...

**Adam Stacoviak:** Misinformation.

**Carlisia Thompson:** But it's sort of easy to see how people could have been misled, because like Adam was saying, the Gopher is not on the post itself; of course, if you go into the document, the Gopher is there... So maybe if they didn't go that far...

**Steve Francia:** First you [play the video](https://www.youtube.com/watch?v=V4t-ymImW6c), which I know not everybody wants to play videos. Or if you scroll to the bottom, the last image has multiple Gophers on it... But again, we didn't anticipate that people would have... I mean, shame on me; I should have anticipated more that people--

**Adam Stacoviak:** No, no, no, that's not what we're saying at all, either...

**Steve Francia:** I'm gonna say that... If I could have done it again--

**Adam Stacoviak:** \[laughs\] Shame on you, Steve.

**Steve Francia:** If I could have done it again, I would have put the Gopher more probably at the top. And I didn't anticipate that people would have made the misunderstanding. That's on me.

**Carlisia Thompson:** Can you not edit the post?

**Steve Francia:** I could, but we thought about it, and the reality is the post is pretty clear. The words are clear that the mascot is staying there, we're not intimidating anything about the mascot going, if you click through the things... And again, as most people reacting to reactions, by the time the post went live, that was the time that people needed to hear that the Gopher was there in the beginning. So the window was really before it was posted, and we missed the window, but you know, I think if you give it time...

First, here's a thing about change - people are always nervous at the beginning about change. Give them time - and I don't expect that everyone is gonna love it... It's a subjective thing; not everybody loves every painting, not everybody loves every color... You know, nothing appeals universally, but I think with a lot of people, give it time and it's gonna calm a lot of their fears.

**Carlisia Thompson:** \[00:39:47.00\] One really strong reaction that I saw people having was that the playfulness of Go was there and now it's not, because this logo is not as playful. Then, of course, it goes back to people equating the logo with the Gopher, and the Gopher is not going away (we've covered that), but that brings up a point too, which is when you codified something, it means now that is the right way of doing things, and if there is a right way, there is a wrong way, right? So how do we handle this, how do we know...? Because okay, Google sponsors things, you need to have your blurb, you need to have a logo... But how about us? How will we be using this in the wrong way, or what if we don't use any of this - would it be wrong? Are we gonna get a call from Google's lawyers, saying "Hey, you're not using the proper material"? \[laughter\] How does it apply to everybody else?

**Steve Francia:** So I'm gonna answer this in two ways. One, there's a few things here that are copyrighted, the logo being one of them, and the logo does have guidelines for its usage. So I wanna be clear that the logo needs to be used appropriately according to those guidelines. I wanna be clear with that upfront.

Beyond that, you are welcome to use this or not use this. This is meant as a guide for the community; no one came down from the mountain with stone tablets. We think it's gonna be a valuable asset. We hope it's something that the community embraces and uses. We fully expect everyone to continue to do their own thing, as they have. We just finished up [GothamGo](http://gothamgo.com/), and it continued to have its own brand... And I know [GopherCon](https://www.gophercon.com/) this year is using a theme of race cars, and we fully expect them to continue their brand.

**Carlisia Thompson:** I was gonna ask what was gonna be the theme for this year... \[laughs\] Thank you...

**Erik St. Martin:** It's all over the website already... Have you not been on the website?

**Carlisia Thompson:** Oh, okay... I didn't know that, sorry. \[laughs\]

**Adam Stacoviak:** [GopherCon.com](https://www.gophercon.com/), y'all.

**Carlisia Thompson:** Sorry, Steve, that was such a detour...

**Steve Francia:** Anyway, yeah. So I think people are welcome to use their own brand. We think this is something that can help inspire the community. We hope the community follows the values, we would like that to happen. We want people that are thoughtful, we want people that are friendly, but each group is welcome to adopt what they want to from this; there is no consequence for not-- as long as people follow the [code of conduct](https://golang.org/conduct), right? That's independent of this, and that does have consequences.

**Carlisia Thompson:** So what does it mean when you say that the Go logo is copyrighted? That sounds pretty serious. Does it mean that we have to credit Google when we use it? Does it mean we cannot alter it, or what is it?

**Steve Francia:** Our logo is more flexible that's used than most logos, but there's guidelines within the brand book on what acceptable use is. We talked about what to license it under and spent some time with our open source legal team, and their advice was _copyright the logo_ is the appropriate thing to do. It lets people use it under fair use rights and under the guidelines that we've set forth, but they can't make modifications, they can't sell it, they can't do different things to it because it's copyrighted.

**Carlisia Thompson:** But can I place it anywhere without crediting anybody, or do I have to worry about giving credits?

**Steve Francia:** There's no credit needed.

**Adam Stacoviak:** \[00:44:04.25\] The point of a copyright is just to say that it's their mark and that no one else can use the mark in a trademarked or copyrighted scenario, and as a copyright holder you have to protect your copyright, because otherwise you don't have a copyright.

**Steve Francia:** That's right. And I'll just say, I encourage people to ignore what I've said, but [read the document](https://golang.org/s/brandbook). There's two pages on what is acceptable use, with lots of diagrams and pictures of what to do and what not to do. We hope the Go community uses this, we hope it becomes -- I don't think it's gonna replace the Gopher in any sense, but I do think that it's a nice accent; it definitely reinforces our brand. The Gopher is wonderful, and it's fun, and it's playful; it's not immediately recognizable as the word "Go" is. If you're not familiar with the Gopher, and Go, but you see the word "Go", you're gonna associate that.

**Adam Stacoviak:** I think of it like maybe on product websites... Like when you go to a service and they support certain languages, what do you they put in place of Go now? They probably use the Gopher.

**Steve Francia:** They might, or a lot just come up with their own logo or their own thing.

**Adam Stacoviak:** Right. And what ends up happening is that there's never a match.

**Steve Francia:** Exactly. There's no consistency... So that's what we're trying to provide here, is that consistency, so that when you see this mark, you know it's the language. And yeah, please read the document; it talks about all the different ways to use it.
I was at GothamGo, I was the MC for the third or fourth year in a row, and I was thrilled that a number of the speakers used the logo on their decks. It was nice to see that consistency. Not everybody used it, and that was fine. I didn't expect anybody to, except [Cassandra](https://twitter.com/Cassandraoid), who used [the actual deck](https://golang.org/s/presentation-theme) that we distribute, but she was also part of the process of creating it...

**Carlisia Thompson:** So just to clarify for people - on the blog post that is on the Golang website there is a [link]((https://golang.org/s/presentation-theme)) to download the master slides that you can use, that are already branded with the colors and the logo.

**Steve Francia:** That's right, that's right. And there's also a [link](https://golang.org/s/brandbook) there to the brand book that we've been talking about. Those links are right next to each other under the download section.

**Carlisia Thompson:** And talking about the website, going back a little bit - is the website going to be decoupled from the language repo?

**Steve Francia:** Yes, the plan is to decouple the website from the language repo, and partly because -- there was value in coupling it, but as we need to scale into different languages and different things, we can't see another way but to decouple them. That said, there will remain documentation as part of the distribution, but the website itself will be decoupled, at least that's the current strategy.

**Carlisia Thompson:** Yeah, I hope so, because the website would only be updated once there was a release... \[laughs\]

**Steve Francia:** \[00:47:51.05\] Yeah, right now it's every six months, and... Yeah, part of the new design is also to provide a little more contextual information towards what's happening now, and trying to keep our community members, our users more informed... And every six months is just not frequent enough.

**Carlisia Thompson:** Yeah... If you have a typo you wanna fix, you've gotta wait six months. \[laughs\] Or some new information, like a new link you wanna add, you've gotta wait six months.

**Steve Francia:** I'm pretty sure we can fix typos within six months, but our goal is to -- it'd be great on our homepage if we had things like upcoming conferences, and keep our global community more informed, and that's not possible every six months. We don't have dates and links to the conferences; they are just too dynamic for that.

**Adam Stacoviak:** What are you doing to move faster on those fronts? You've just mentioned being decoupled... One of the things that helps a language succeed, other than obviously being a good language, is its supportive community, which Go does very well, but it does seem like there's some slowness around these kinds of things, that could be sped up. Not so much that it's bad, just like, how are you kind of optimizing for those things, to make those things a bit more faster?

**Steve Francia:** It's a good question.

**Adam Stacoviak:** I mean, obviously, Cassandra came on the team recently, so you've got community things happening, so there's some change happening; I'm just curious how it's playing out.

**Steve Francia:** Yeah, I would actually defer to Cassandra on that. She's doing an amazing job of really devising strategies and trying to help this community scale. I'll say one of the smartest things we've done is actually step out of the way as Google, and let the community do what it does. That's been very productive, it's been very beneficial.

We've also realized there's a balance there, and especially as we grow, there's a lot of value in adding support. One of the things we've recently done - which I don't know that we've talked about publicly, because it's not public - is we've set up a communication channel for the different conference organizers, so that they're able to talk to each other and start comparing things and trying to get more consistency. Google doesn't have any stake in that, it's not like they have to follow the guidelines or anything we're setting forth; we're not doing any of that, we're just providing a communication channel. But trying to do things like that more often I think is a way to let the community do the brilliant job that it's already doing, but also support them so they can support each other better, and do it better at scale. But the real answer is probably one that Cassandra could give you better.

**Carlisia Thompson:** So I get that a concise, clean brand is easier to communicate, so I get that part... I'm wondering if there is a hope that Go will be seen as mature as it is, that we will also have an impact on adoption not from the perspective of people understanding what Go does - that's, of course, a big part if you're going to adopt a language - but also because it will seem more serious and mature, and also that Google is investing in the language to the point of even wanting to do this... Is there anything like that in the general thinking for the reason to come up with this branding?

**Steve Francia:** \[00:51:59.26\] It's a great question. I'm gonna answer it by pointing us to another part -- in fact, it's the final part that we haven't really talked about yet, of the brand guide. There's a section in it called _Our Audience_ and... We've never done this before. Go has had kind of an implicit audience from the beginning, of generally systems programmers with a CS background. And even though we've never articulated that, if you read through our material that's been developed, and our documentation, it's kind of the implicit audience. We don't explain programming concepts anywhere, we expect that you know them, throughout our documentation. We often make comparisons to different languages (like C) in the documentation.

As part of this, we set forth that we really -- for where we are, and the growth that we're experiencing, and our goals, we believe that Go could be the next mainstream language, with broad adoption across the industry. And to get there, we recognize that there was three different audiences we needed to focus on, and we've articulated them in the brand book. The first one is potential in new programmers. These potential Go programmers and new programmers - meaning people new to programming - this is an audience that we haven't ever targeted in the way that we want to target now... So this is an explicit declaration that we believe our audience is now people new to Go and new to programming. That has broad impact across all that we do. And we talk about the key messages that we want to target for that audience, and I'll leave it to the listeners to read what they are in the brand book.

Our second is Technical Decision-Makers, which we use CIOs, CTOs and tech leads. These are the people that are often responsible for choosing architecture, approving architecture, and we wanna make sure that they have the support that they need. As someone who's been in that role many times, I'm familiar with the -- largely, your goal that's always running through the back of your mind is "What are the risks in doing something?" As you know, in technical decisions there's always trade-offs, and trying to understand what the risks are of a given trade-off or a given technology is important... So we have specific messages that we'd like to land for that, and this is part of the rebrand.

The third audience is existing Go users. We definitely want to embrace these new audiences, but also embrace our existing audience, and that's the audience that's served us well for ten years. We have key messages targeted towards that audience, as well.

So I think as you read through this, you'll see... This is an answer to your question - part of it is conveying maturity; not just in visual, but in our language and everything else. We really wanna communicate the reality that Go is ready for production use, that you're not taking a risk to use it.

\[00:56:01.06\] One of the challenges and opportunities of joining Google is you get to learn a lot of information that you didn't know as a member of the community. Now I've got an opportunity to work with many companies who've embraced Go, some of which have been vocal about it, and some of which have not... And it's amazing to see the ones who haven't, and how Go adoption is much broader than I ever knew as a community member... And how these companies have embraced Go, and how often thousands of programmers are using Go within these major companies, that for their own reasons haven't been vocal about talking about that yet.

We're trying to surface that a bit more, and let people know that Go is ready, and Go is mature, and Go is a safe decision to make. So I hope that answers the question... I think that part of it is really -- we're trying to target different audiences, with different messages than we have in the past, and a big part of that is letting decision-makers know the value of Go, and how it's not a risky decision to make.

**Carlisia Thompson:** It does answer the question, it makes very good sense... And it also made me very curious to ask you how is the adoption of Go inside Google now? Has that grown in the past year?

**Steve Francia:** I know we don't talk about things like this. I'll say broadly - Google does not share internal language usage, and I'll just point out what is public already, which is this week we announced [gVisor](https://github.com/google/gvisor), which is a new container runtime that works with Kubernetes and Docker. It is a sandboxed container runtime; it was announced a couple days ago. I believe it might have been announced at [KubeCon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2018/), which is also happening this week... But I think it's been a part of Google for years; we've just released it. It is I think a industry-transformative; it has the power to transform our industry, particularly in cloud. It brings a brand new approach to running containers in a secure and isolated way, and this entire application is written in Go.

I think you'll see a lot of core Google projects that are being open-sourced that are written in Go, and that's probably the best answer I have for that question.

**Carlisia Thompson:** Thank you. I know why you can say it's limited, but we always try to ask anyway. Someday, somebody will slip, I promise. I promise the listeners... \[laughter\]

**Steve Francia:** Yeah, as long as it's not me... \[laughter\] Yeah, I encourage people to check out gVisor. You can see it at [github.com/google/gvisor](https://github.com/google/gvisor). You can download it, it's open source. For all those people who are in our--

**Carlisia Thompson:** I haven't looked at it yet... What is the equivalent of it out there that I would know?

**Steve Francia:** There isn't any...

**Carlisia Thompson:** [Kubernetes](https://kubernetes.io/)? I don't know. What would it be...?

**Steve Francia:** \[01:00:07.01\] So it's a brand new approach to securing containers... And there's a post here that goes through it, but in short, historically we've used -- in spite of how light containers are and how much power and benefit they bring, they don't provide good isolation. It's not one of their strengths, it's not part of the design. So historically, there's been two approaches that were used to provide that kind of isolation to them. One is to use virtual machines to emulate hardware, and that approach is expensive, but effective.

There's a second approach, which is a rule-based execution, which is using things like SELinux and AppArmor. gVisor creates a third approach, that takes some of the advantages of each, but it takes a more simple approach. It's a lot lighter than the virtualized approach, and it's simpler than the AppArmor approach. Again, it's a runtime for containers in a secure way, that works with Kubernetes and works with Docker.

**Carlisia Thompson:** Cool. I see now what you're saying.

**Steve Francia:** I encourage people to read the [post](https://cloudplatform.googleblog.com/2018/05/Open-sourcing-gVisor-a-sandboxed-container-runtime.html), the readme around it. It's transformative in the way that it's gonna make containers... In my mind, it's really -- and I've been part of the containers space for a very long time... This really is the project that tackles the biggest gap in what containers can do. With gVisor, I think containers are in a place where they really are the future, and there's no more gaps. gVisor closes the last gap.

**Erik St. Martin:** Yeah, I'm actually really excited about it, and I'm kind of sad I haven't got to play with it yet. Just getting back from Chicago and getting caught up, and about to leave for Seattle, so I'm like, "Nooo....!"

**Steve Francia:** Airplanes are good places to do work. You've just gotta download stuff, because Wi-Fi is not that good.

**Erik St. Martin:** This is true.

**Steve Francia:** Yeah, it's fun to play with, and to look at... You know, written in Go.

**Erik St. Martin:** So I know we were running short on time... Do we have time for projects and news? Probably not. We might have to skip to \#FreeSoftwareFriday.

**Adam Stacoviak:** We've got about two minutes on the clock.

**Erik St. Martin:** Two minutes on the clock... Alright, how fast can we do this? So gVisor was in the projects and news thing, and Steve mentioned it. Go 1.10.2 and Go 1.9.5 is out... There will be a link in the show notes to this really cool [intro to the compiler](https://github.com/golang/go/blob/master/src/cmd/compile/README.md), that is actually in the Go GitHub repo.

I found a cool project called [Rat](https://github.com/ericfreese/rat/blob/master/README.md), we'll link to that in the show notes. That's a cool way of like running multiple commands and windowing them side by side, and then annotating them based on kind of patterns that show up in there. So that's super cool. I think that's everything... Did I get it in two minutes? \[laughs\]

**Adam Stacoviak:** Let's see... You have...

**Carlisia Thompson:** Let's say so.

**Adam Stacoviak:** Yeah, 35 seconds left.

**Erik St. Martin:** That should be a segment, once in a while... As fast as you can, 60 seconds or 120 seconds, as many things as you can mention...

**Adam Stacoviak:** Go in two minutes. I like it.

**Erik St. Martin:** \[01:04:05.26\] Alright. So \#FreeSoftwareFriday - did anybody have anyone or anything they wanna give a shout-out to?

**Carlisia Thompson:** No...

**Erik St. Martin:** I've got a good one... [Julia Evans](https://twitter.com/b0rk) - if you're not following her on Twitter, you should, but she always puts out these amazing little graphic cards, explaining complex things in very easy to digest ways. Speaking of her, she's releasing a zine with (I think there's like) 20 or something of them in there, called Bite Size Linux. We will [link](https://gumroad.com/l/bite-size-linux) in the show notes to where you can pick that up if you wanna give her some love.

**Adam Stacoviak:** Excellent.

**Steve Francia:** I'll give a shout-out to -- so we had, as I mentioned, GothamGo just last week, and I saw a brilliant talk from [Ron Evans](https://twitter.com/deadprogram) about [GoCV](https://gocv.io/). Ron Evans - I know he was on podcast very recently (maybe even last episode), but we know him from [Gobot](https://gobot.io/) and all the work he does with Go and embedded, and as part of that he started working on Go vision stuff - detecting different faces, and it can do different \[unintelligible 01:05:30.12\] and he gave a really interesting talk.

I'll give one more - there was another talk by a man named [Anthony Starks](https://github.com/ajstarks?tab=repositories) about Go SVG. I was blown away by this talk. The amount of work that he's done with [SVG in Go](https://www.youtube.com/watch?v=ze6O2Dj5gQ4) was phenomenal, and the maturity of the libraries that he's built is just -- I was blown away by it. So big shout-out to both of them. I learned about these projects and I just wanna pass them along, because I'm excited to play with both of them.

**Erik St. Martin:** Yeah, and Ron is an absolute trip to hang out with. So if you're ever at a conference he's at, walk up and talk to him, it's amazing. At GopherCon we always do a Gobot room that he hangs out in.

**Adam Stacoviak:** I met Ron a couple years back, I wanna say potentially our first year there... I don't know, I can't remember, but I just remember thinking like "This guy is fascinating!" Anyways... That's Ron. Always a pleasure.

**Steve Francia:** I'm gonna put a link to Anthony's GitHub account in the Slack channel. He also built this amazing [tool to generate slide decks](https://github.com/ajstarks/deck), and he presented with it, and his was by far the prettiest one there. Frankly, for me - I can't stand XML, I try to avoid it as much as possible, but that's why I'm glad people like Anthony exist... They make nice libraries so I don't have to write XML.

**Erik St. Martin:** Alright, so I think we are about at time, or probably over... But Adam, the producer, is on the show, so he can't really give us a hard time about that.

**Adam Stacoviak:** Nope. Nope.

**Steve Francia:** I wanna say I'm thrilled you all had me on the show, because it gave me a chance to tell the story around the branding, that it was clear that it needed to be told, and the blog post didn't come close to telling the story of how we created it, and why we created it, and all of the depth in that brand book. I hope that people take the opportunity to really read it. We spent -- I can't tell you how many countless hours. The Go team invested a considerable amount of time in writing that document, because we consider it of the highest value to the project. And to be able to tell that story - I'm very grateful to be able to be on this show today.

**Adam Stacoviak:** \[01:08:22.10\] I'll say you've got an open invite... When you have things like this, this important to the Go community at large, I would welcome even collaboration to give you all an opportunity to come on a show like this, that hopefully communicates to the largest Go community we can, in a larger podcast form... So we'd welcome having you back on again in the future.

**Steve Francia:** I appreciate it. It's always a pleasure to be here.

**Carlisia Thompson:** Yeah, keep this in mind, because we could time things. For example, it was pure luck that today was the opening; I think it was really good that you came on the show to talk about this. We weren't sure that we were gonna have enough things to talk about, but it turned out that we did, and I thought it was very insightful.

**Steve Francia:** I appreciate it. You're right, it was a... What do they call it? It was fortunistic. There's a better word for that...

**Carlisia Thompson:** Opportunistic.

**Steve Francia:** When things just work out right, and this was one of them.

**Adam Stacoviak:** Serendipitous?

**Steve Francia:** That's the word that I was looking for.

**Adam Stacoviak:** There you go. I got your back, Steve, don't worry.

**Steve Francia:** I was like... I knew I couldn't get it. It's serendipitous that this happened, and you're right, we need to be proactive about it.

**Adam Stacoviak:** Yeah, we're glad to work together however we can to make sure that the Go community at large has the right information to be excited, to be concise, and to be purposeful in their work.

**Steve Francia:** That's what our goal is. We're friendly, genuine... That's what we're going for. Concise - yes, but not so much in a 45-minute podcast... But definitely direct and thoughtful, we're trying.

**Carlisia Thompson:** Yeah, it looks like you guys are trying.

**Erik St. Martin:** Alright, so I think we are definitely over now, so I suppose that we should wrap things up. Thanks so much for coming on, Steve. I'm really glad we got to talk about that, and to talk about the real reason that the branding was done... That it wasn't so much about the logo, and that that was more a by-product of the core thing that you all were going for. Hopefully this clears up a lot.

So thanks, Steve, for coming on the show, thanks Adam for jumping in with us - it's always fun to have you walk out from behind the curtain...

**Adam Stacoviak:** I try.

**Erik St. Martin:** And as always, thank you to all of you, the listeners. Definitely follow us on [Twitter](https://twitter.com/GoTimeFM). You can hit us up at [ping](https://github.com/GoTimeFM/ping) to give suggestions for guests or topics, and with that, goodbye everybody! We'll see you next week.
