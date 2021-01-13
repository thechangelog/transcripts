**Erik St. Martin:** Welcome back, everybody, to another episode of GoTime. Today's episode is number 65. Today on the show we have myself, Erik St. Martin, Brian Ketelsen...

**Brian Ketelsen:** Hello!

**Carlisia Thompson:** Carlisia...

**Erik St. Martin:** Oh, weird... \[laughter\] No, my Skype just told me that it was reconnecting...

**Brian Ketelsen:** Whaat...?!

**Erik St. Martin:** Yeah. Okay... \[laughs\] So we also have Carlisia Pinto here...

**Carlisia Thompson:** Hi, everybody.

**Erik St. Martin:** And our special guest for today is Vitor De Mario. You're one of the organizers of [GopherCon](https://2017.gopherconbr.org/). Something else, you spoke at -- it was a lightning talk, I think, at GopherCon last year...

**Vitor De Mario:** Yes.

**Erik St. Martin:** And you were talking about how you were working on genetics in Go. And calm down, people, I said genetics, not generics. \[laughter\]

**Vitor De Mario:** I didn't think about that, but it's gonna be a problem.

**Carlisia Thompson:** You know, I did that, and [Scott Mansfield](https://twitter.com/sgmansfield) I think corrected me on Slack -- oh no, it was somebody else that corrected me... And I'm like, "Oh, I had never realized they were two different words", like they sound different, genetics and generics. I'm sure I said it the same way...

**Vitor De Mario:** I'm probably gonna have the same problem. I'm Brazilian, just like Carlisia, and I don't have a lot of years living in the U.S., so it's probably gonna be a bigger problem for me.

**Erik St. Martin:** Let's talk about the stuff you're working on first, because it's actually a really interesting use case for Go, and I know I get particularly excited about things people work on that are kind of outside the standard RESTful APIs and things.

**Vitor De Mario:** So I started working at a company called Mendelics about four years ago in Sao Paolo. I'm not originally from here, but I came here to work at it. I was told I was gonna work in Python at the beginning, I started learning Python, but then when I came here there was a small project built by our CEO, who is not a programmer, and he had started it in Go because he liked the language; he thought it was a language that he understood relatively well, so he started doing it on his own. He named the project Abracadabra, and it was supposed to be an annotator and classifier for mutations. We call them variants usually, but it's the same thing, it's just a mutation.

So what Mendelics does is we receive patients here who are sent to us by a physician who thinks they have a genetic disease, and we take their blood, we process it in our lab and we work with all our bioinformatics tools and then we generate reports in the end saying whether we found something, if they have a genetic disease or not... And one of these steps was built here. We have this software, Abracadabra; it added a lot of information into each one of the variants, which is the part that we call annotation, and we built a machine learning model we have run on forest in Go. There is a very cool library for doing that called [Cloud Forest](https://github.com/ryanbressler/CloudForest), built by [Ryan Bressler](https://github.com/ryanbressler).

\[00:03:53.08\] We used it, and we built a model here, and we started telling our physicians which variants were relevant in each case and which weren't, because everyone has a lot of mutations. So if we receive a patient -- back in the day we had 50,000 mutations for each one of us, even if we are healthy, and that's normal, so finding the one that is relevant in the middle of all of it is a big problem. In the beginning it was a very manual process, it had a lot of errors, and then we built this software in Go to try to find these mutations better and delivering them to our physicians before they had to start working on each case.

**Carlisia Thompson:** So you did like a free sorting of sorts to sort out who had malignant mutations?

**Vitor De Mario:** We usually say the word pathogenic.

**Carlisia Thompson:** Pathogenic mutations?

**Vitor De Mario:** Yes, yes. It's more like filtering, because we don't show the ones that are not relevant, because there is a lot of data in any case, even if it's a relatively simple case. But what we do is we filter it with the results of the machine of the machine learning software. All of that is written in Go, and all of that inside only one program.

**Carlisia Thompson:** That is pretty cool.

**Brian Ketelsen:** Alright, so I think we need to back up a little bit. You used about 30 words that meant nothing to me in that whole description. Something-something forest, something-- can you kind of back up and tell us about the process that gets used and what you're actually computing, where the data comes from? Help me out here, because I feel stupid, I'm sorry.

**Vitor De Mario:** No, it's fine.

**Carlisia Thompson:** Before I come across as smarter than Brian, because I didn't ask those questions - I've watched his [lightning talk](https://www.youtube.com/watch?v=GYLOmwIqP-M), so it sort of made sense to me... \[laughter\]

**Vitor De Mario:** You came prepared.

**Carlisia Thompson:** I came prepared, that's all.

**Vitor De Mario:** Yeah, so there are two pieces to this, two about the data. Usually, we have very little data. What comes out of our lab and comes out of the bioinformatics software is just a list of mutations. It says "Oh, for this person, she has a mutation on the chromosome tree, this specific mutation. She should have an [A](https://en.wikipedia.org/wiki/Adenine) here; she has a [G](https://en.wikipedia.org/wiki/Guanine). That's it. And we have a whole list for each person, saying every mutation that they have. But those don't mean much, because in this list of mutations there is the color of your hair, the color of your eyes - all the kind of things that make you who you are, make you special. And in the middle of all of it there's also things that cause diseases, so what we wanna do is we wanna separate these mutations from the ones that don't cause any problem.

The way we do it is the first part, without any machine learning, is just we have a lot of databases from bioinformatics tools; most of those we didn't build them, they are things that can be used by anyone working with bioinformatics. That tells us more information about each mutation, or about each position in the genome. They say, "Oh, this position is very conserved", so pretty much all of the species we know that we have the sequence of their DNA, they have the same position, and we never see any different. So this becomes a number, which was created by a specific research project, and then this number is used by our software later to say if this is very relevant, to say if a mutation causes diseases or not.

So we add a lot of information to each one of these variants, so our lists become -- each position in this list of mutation becomes a lot of data. We know which proteins were affected... Everything that can be calculated using knowledge from biology and from genetics, and this becomes a huge list. There are thousands of small points like this for each mutation. So that's the point where we are before we start talking about machine learning.

After that, we have a huge matrix; you can think about this list, and a lot of these features become columns, so there's a quite big matrix, and we built a machine learning model using an algorithm called [random forest](https://en.wikipedia.org/wiki/Random_forest).

\[00:08:02.24\] It's not very popular these days; you're probably thinking a lot about deep learning and [TensorFlow](https://www.tensorflow.org/) and these kinds of things, but three or four years ago we weren't talking that much about it, and there are some studies that say that this algorithm (random forest) works well for genomics, for genetic data.

We started working on a library that is built in Go to create these kinds of models. The library is called Cloud Forest; it's pretty much just an implementation of this algorithm, and we've started passing our data with all of those extra columns into this software for it to build a big model trying to predict new mutations, if they were causing diseases or not, if they were pathogenic or not. So we did a lot of rounds, like cleaning up our data, trying to understand how each feature of this software works, because I'm not a specialist in machine learning... I don't know much about it, so I had to learn it while I was doing it.

In the end, we created several models, we started working with them, and one of those was better, and then we put it into the real software and we started passing new data into it and trying to predict whether new patients that were coming in we could find their mutation earlier, or at least filter out a lot of the things that don't matter before we put it into a web page for our doctor's work. Does it make better sense now?

**Brian Ketelsen:** Much better sense.

**Erik St. Martin:** So I'm imagining there's not a whole lot of libraries for things like this already in Go...

**Vitor De Mario:** No.

**Erik St. Martin:** Was it really time-consuming to create this sort of stuff? I know this is why a lot of people keep falling back to Python in the machine learning and data science spaces, just because there's a lot of good libraries there.

**Vitor De Mario:** Yeah, we were kind of lucky in that scenario, because there was already, before we started working on this software, this library that I mentioned called Forest... And that's all it did - it did random forest models. This algorithm - that's the only thing it did. They created a few others, but the most important was this one, since it even had the name. It was pretty much luck... There was this guy that created it, Ryan Bressler; he was a researcher in genetics, and he liked Go, too... A few months before we started working on it, I guess. So since he liked both of those things, he started building the tool by himself, or just playing around with data, and it grew a little bit, and other people started picking it up, not just us.

So when we started working on it, we kind of knew that this algorithm will probably work well for the kind of data that we had, and we started looking for what's available... There was Ryan's library waiting for us, and it worked well.

Machine learning and Go in general, it's a bigger problem because there isn't that many good libraries, and if you wanna use other things that don't necessarily fit your data that well, you don't have as many options as you do in Python and other frameworks and languages.

**Erik St. Martin:** I think it's getting better though...

**Vitor De Mario:** Yes, definitely.

**Erik St. Martin:** I've been seeing more and more stuff come out, especially over maybe the last year or two, but for a long time it was kind of a big deterrent from the scientific communities was like the lack of libraries, especially around some of the -- like Pynum and things like that.

**Vitor De Mario:** It's definitely better now. There are a few people working with it. The name that comes to my mind immediately is [Daniel Whitenack](https://twitter.com/dwhitena); he is working on [Pachyderm](https://github.com/pachyderm/pachyderm) and he has a book that came out recently, which is [Machine Learning With Go](https://www.packtpub.com/big-data-and-business-intelligence/machine-learning-go). I haven't read it yet unfortunately, but I believe he shows in the book many algorithms and how they can be implemented in Go.

So there are people trying to get Go to be a good language for it... Because of the performance and all those things, it can be theoretically a good language to do machine learning in the future, and it's getting better, definitely.

**Erik St. Martin:** Yeah, I know Daniel has been working with a lot of those communities and creating some stuff, and a lot of content, too. He spoke at GopherCon -- actually, he's teaching Machine Learning With Go Workshop this year at GopherCon in Denver.

**Vitor De Mario:** \[00:12:13.25\] Yeah, it's gonna be great.

**Erik St. Martin:** Yeah, if you're into machine learning and Go, you definitely wanna make friends with Daniel.

**Vitor De Mario:** Yes, he is THE guy in this area.

**Carlisia Thompson:** And we also interviewed him here.

**Erik St. Martin:** Yeah, he was [one of the first episodes](https://changelog.com/gotime/40)... I wanna say it was within the first 20-25 episodes.

**Brian Ketelsen:** It was definitely early.

**Vitor De Mario:** There is also now an official client for TensorFlow. It's not that easy to build a model in Go if you're trying to use TensorFlow, but you can build a model in Python and upload it to Google Cloud ML, or maybe host it yourself and use your software to use it, to send you data into it. That's what we are doing now. We ended up moving away from Random Forest recently, in the last year, and now we are using TensorFlow and the software that talks to the TensorFlow model is still in Go.

**Erik St. Martin:** Okay, so you basically have your data scientists and things like that create the model in the tools that they're used to, but then you can of consume the model in Go.

**Vitor De Mario:** Exactly. In the beginning, the Random Forest story that I've told, it was pretty much just me with a few other people here, but most of it was built by me. Later, I told them "Okay, I'm not a specialist at this. We need people that actually know what they are doing." I can't really do a trial and error forever.

Now we have a person, Fernanda, who is a data scientist and she knows a lot more about machine learning than we do, and she built a new model using TensorFlow. Most of our work was in Python, but then we integrated it into the Go software and it consults her model through Go software.

**Erik St. Martin:** That's really awesome. And the performance of it, I imagine, is one of the key reasons why you're using it in this space, right?

**Vitor De Mario:** Yes, yes. As pretty much everything in Go, the performance is really good. It's one of our bottlenecks, because there are a lot of things that are happening when we are trying to classify variants. We had it being one of the bottlenecks in the Random Forest world too, and same thing with TensorFlow now, because there is a lot of data going around and you have to do a lot of computation in each mutation to try to find the result... But we are also experimenting a little bit with hosting the TensorFlow model inside the program, inside a container, we have our binaries, and it's working really well and are probably gonna have really good results. We already have pretty good results, but they are gonna be really fast in the near future.

**Erik St. Martin:** I'm imagining this is CPU-bound, right?

**Vitor De Mario:** Yes, it is.

**Erik St. Martin:** Now, was this written in something prior, or was it just kind of a whole new project and you kind of--

**Vitor De Mario:** It was a whole new project, yeah. In the lightning talk that Carlisia saw in Denver - I usually show a slide where the first version of the software is entirely in that slide; there's like 800 or 1,000 lines all in one file. Our CEO who was our programmer thought that was fine. That was one of the first things that we changed... "Okay, this is not a decent program. We've gotta do some work on top of it." But it was completely new, he showed it to us. It was pretty much just an idea before, and there wasn't any prior software before it.

**Erik St. Martin:** All your IP in a single slide... \[laughs\]

**Vitor De Mario:** Yeah, pretty much. Now, of course there were other things that we were doing, but this whole annotation and classification thing - it was all there, in the first version.

**Erik St. Martin:** That's awesome.

**Carlisia Thompson:** Now, it's pretty striking too that a doctor -- he probably knew how to program before, I would imagine...

**Vitor De Mario:** \[00:16:01.01\] Yes, a little bit.

**Carlisia Thompson:** But he just picked up a brand new cutting-edge language that maybe didn't have that much documentation back then and examples, and just said "Hey, this looks great, and simple enough."

**Brian Ketelsen:** "Yeah, what the hell, I'll just write some code..."

**Carlisia Thompson:** "...and put it in production."

**Vitor De Mario:** He said many times to us, since that day, that if he could come back in time, he wouldn't be a doctor, he would be an engineer. So since he didn't do that, now he tries to do as much engineering as possible, when he has time for it. He's not only a doctor, he's also running the company, so there isn't much time for him to do that, but he's trying to do all of it at once.

**Brian Ketelsen:** Like the commercial "I'm not an engineer, but I play one on TV"?

**Vitor De Mario:** \[laughs\] Yeah.

**Erik St. Martin:** I'm not an engineer, but I play one on TV... \[laughs\]

**Vitor De Mario:** Yeah, nobody knows why he looked into Go and thought "Oh, this is better than Python" or "This is friendlier to me", but well... It worked, and it was a kind of a happy accident.

**Erik St. Martin:** It could just be the amount of hype... You know, you go on a lot of programming forums and things, and a lot of people are experimenting with Go and Rust, because the past couple years that's really two of the main languages that have -- I guess Scala a bit, too... I'm trying to think of some other ones that have kind of got super-hyped in the last couple of years, but...

**Vitor De Mario:** I think he enjoyed the simplicity as well, because there wasn't much to learn in terms of the syntax of the language and that kind of thing. You could pick it up and start working in it pretty fast. He didn't have to learn what list comprehension is, or something like that, compared to other languages.

**Erik St. Martin:** That's sure, too. I mean, you look at some languages and they're extremely confusing, and then you have languages that seem simple if you have programming background beforehand, but I guess it's hard to look at any language and think about what it might look like to somebody who's never programmed before.

I remember Ruby - "Oh, super, super readable", right? Well, not if you show a non-programmer, right?

**Brian Ketelsen:** That's true.

**Vitor De Mario:** Yes. If you have a background, you'll probably see things familiar there. I also think the explicitness, the fact that everything is quite clear in it helps you. Some of the more complicated topics like understanding why he should use an interface in a place, or why a big interface is a problem - that kind of thing is not that clear, but if we're talking about handling errors and seeing why something failed in a program, it's all very... Almost obvious. So he can read the code and he can understand what it's going on. That helps a lot, too. Not only in terms of the syntax of the language.

**Carlisia Thompson:** Yeah, this is one thing that really strikes me about Go. You can write a very complex system without using any interface, or goroutines or anything that could be complicated, depending on your experience in programming. Now, of course, the more code you write without using these things, the more you have to keep in your head, and you could potentially simplify it by using interfaces, and making it more efficient by using goroutines... But you don't have to. You can have a perfectly functional program.

**Vitor De Mario:** Yeah, you can still survive without those things. The first version of the program that he showed us had none of those things, and for a while there wasn't anything. We were trying to separate things into packages, and we had our own problems trying to rebuild things in the way we were used to in other languages. We came from Java or from C\#, depending on who was working on each part of the code... So we tried to do the things that we thought were natural and they didn't necessarily fit Go, so there was all of that, but... He had his own issues not knowing those things, and we also had them. After a while, we all kind of converged, understanding the language better.

**Brian Ketelsen:** \[00:20:06.12\] So you are one of the organizers of GopherCon Brazil?

**Vitor De Mario:** Yes, I am. We are a team of five.

**Brian Ketelsen:** I heard it was a very successful event this last year. That was November...?

**Vitor De Mario:** Yeah, it was in November.

**Erik St. Martin:** I think this was year two...?

**Vitor De Mario:** The first one was November 2nd. Yes, the first one was in 2016, in November as well, and the second one was November last year. Carlisia was there.

**Brian Ketelsen:** I heard.

**Carlisia Thompson:** I was there... \[laughs\]

**Erik St. Martin:** I still wanna make it. I was trying to get a passport and a visa turned around in time, and it just wasn't happening.

**Vitor De Mario:** Yeah, that's a big problem for people in the U.S.

**Carlisia Thompson:** I'm here to give a testimony - it was a fantastic event. The organizers -- I consider them all my friends, and I don't wanna be like a fangirl, but they did everything they said they were going to do. There was no disappointment. All of the speakers who were supposed to be there were there, as per the latest roster, and it was just great. The talks were great, the hangout afterwards, and... I don't know, I had a great time, learned a ton, met new people... There were -- what, 200 people there? 200 attendees?

**Vitor De Mario:** We were saying about 250, more or less.

**Carlisia Thompson:** Yeah, I thought there was more than 200.

**Brian Ketelsen:** That's really awesome.

**Vitor De Mario:** Something around that. Yeah, we had about 180 in the first edition, something like that. We don't have the exact numbers, but based on the tickets here, it's what we were close to. So we can see that that's not that big of a growth from one year to the other, but one thing that changed a lot, that since things worked out for the first year - we didn't know how it was gonna go - we invested a lot in the infrastructure and we had a much better setup this year for audio, for video, for everything. So it kind of gave us the sensation that things were for real; now we are doing a professional conference.

I don't know if Carlisia had the same sensation, but for me - I was there for the first year, and then for the second, and there was a really huge difference.

**Carlisia Thompson:** I wasn't there for the first year, but I felt -- like I said, everything that was supposed to happen, happened. I didn't see any glitch. I was very pleased. It was very professional, very well put together, everything worked on the schedule, and I was very happy to see Google sponsoring the conference this year, and hopefully they will continue to do it. Sponsorships are so important; it's what allows conferences to get better and better, right? And as they learn what they need, they will be able to address things and make it better.

**Erik St. Martin:** You know what's funny - that was probably one of the first things Brian and I wanted to fix after our first year, too... We were like "We've gotta do better A/V!"

**Brian Ketelsen:** Yeah... We had no idea what we were doing, and the second year it got a lot better.

**Vitor De Mario:** Yeah, I understand the feeling really, really well.

**Carlisia Thompson:** When are the videos gonna be out?

**Vitor De Mario:** I don't know, we had some problems with it. It was supposed to be out already, but I can't give you a date yet. I hope soon, but I'm not really directly involved in that now, so I can't give you a date.

**Carlisia Thompson:** Okay. So for people thinking about going to the GopherCon Brazil conference, if you're from outside Brazil and you need a visa, just heads up that you need to start working on the visa way before the trip.

**Erik St. Martin:** Yeah, months...

**Vitor De Mario:** Yeah, because it takes a while.

**Carlisia Thompson:** It takes a while.

**Erik St. Martin:** Speaking of people coming in from other countries, what kind of geographic demographics -- was it mostly a lot of people from Brazil and South America, or was it a lot of people flying in from other countries?

**Vitor De Mario:** \[00:24:06.20\] Most of the attendees were from Brazil. In the first year especially there were a lot of people coming from other places in South America, like Argentina and Peru, and they've even given talks. This year I don't think that many came; there was a group from Columbia... I think there was another group, but I don't remember exactly which country it was from. Other than that, we get mostly people from the U.S. that come to speak at the events, so...

Some of our talks are in English, and it's okay, we consider part of the conference to be bilingual. [Aditya (Mukerjee)](https://twitter.com/chimeracoder) who was one of the speakers this year, he wanted to submit a talk to us exactly because of this reason - he wanted to show how the Go language itself could be rewritten in other languages, how he could change the keywords into Bengali or Portuguese, and he said this is the place to do it, because the conference is bilingual.

We have a few people from the U.S. because of that, because of the talk submissions, and a few people from the rest of South America too, because of the proximity. But Brazil itself is huge. Some people come from bigger distances than the people from Argentina or Chile, just from inside Brazil.

**Erik St. Martin:** Oh, wow.

**Vitor De Mario:** Yeah. Brazil is a considered a continental country. It's bigger than a few continents, so... It's huge.

**Erik St. Martin:** Now I can't wait for the videos to come out, because I didn't even see Aditya's talk about translating. That's pretty cool.

**Vitor De Mario:** Yeah, because he did a [lightning talk](https://www.youtube.com/watch?v=oDFerBdr2J0&index=14&list=PL2ntRZ1ySWBfhRZj3BDOrKdHzoafHsKHU) with the same topic in Denver, and then he expanded it for GopherCon Brazil.

**Erik St. Martin:** We got so caught up on the final day... I didn't catch any of the lightning talks, and that's one thing I haven't got a chance to do, is watch any of the videos for those.

**Brian Ketelsen:** He did a similar talk at Golang UK and it was really, really good... Actually, beyond good. It blew my mind. It was awesome.

**Vitor De Mario:** Yeah, I haven't seen anything similar to what he did, it was really impressive.

**Erik St. Martin:** So are you confident you're having a 2018 version?

**Vitor De Mario:** Yes, we already have everything set up with the venue. We're gonna repeat the venue for the third time, and the date is already out, too. It's gonna be at the end of September, from the [27th to the 29th](https://2018.gopherconbr.org/), I believe. We don't have yet speakers and we haven't confirmed any of the sponsors yet, but the conference is definitely gonna happen.

**Erik St. Martin:** So it sounds like your CFP will be out soon, too...

**Vitor De Mario:** We are probably gonna start it in the beginning of April, I think.

**Erik St. Martin:** Okay, so a little later. If you wanna speak at a Go conference, now is the time. What were we talking about the other night, Brian? There's like three or four Go conferences with CFP's...

**Brian Ketelsen:** Yeah, there's several CFP's open right now, which means it's a good time to polish off your editors and start writing proposals. We want yours, we want everyone's proposal.

**Vitor De Mario:** Yeah, I wanna be one of the people sending a proposal to you as well, and to [GopherCon in Iceland](https://gophercon.is/) and in other places too, but I haven't yet.

**Brian Ketelsen:** Excellent.

**Erik St. Martin:** So I heard that the [KubeCon CFP](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2018/) for Copenhagen has something like 3,000 submissions. I don't wanna see that many...

**Vitor De Mario:** I can't imagine having to select talks with that many... It's pretty much impossible.

**Erik St. Martin:** We had over 300 last year, or something like that. That was painful. I don't wanna say painful, because I like reading the CFP's and things like that, and I find all the content really interesting, but trying to squeeze in time to review 300 proposals is a challenge... Especially because 200 of them wait till the last 48 hours.

**Vitor De Mario:** And some of them are really good, but you have to say no anyway, because there aren't enough slots. I think this is one of the hardest parts.

**Erik St. Martin:** Oh, without a doubt. When you're looking at the ones that didn't make it and it's not a reflection of them or the quality of their talk, it's just -- you've got 15 or 20 speaking slots and 300 proposals.

**Vitor De Mario:** \[00:28:15.16\] Yeah. We had between 50 and 60, and there were a few talks that I wanted to see in the conference and there weren't enough slots. I can't imagine with 300, like you, or like 1,300 or 3,000. I don't know the exact number for KubeCon... There are definitely gonna be a lot of good materials that can't fit in the conference.

**Erik St. Martin:** I think we should just rent a city for like a month, and it's just Oprah Winfrey "You get a talk! And you get a talk! Everybody gets the talk!"

**Carlisia Thompson:** Yeah... And pay people's salary too for a month, like, "Take a sabbatical, we'll pay your salary. Just come to watch...", because we need people to watch the talks, too.

**Erik St. Martin:** Yeah, that's always difficult too, and this is why Carlisia was talking about sponsorships... With sponsorship money you're able to pay travel and accommodation and all that stuff for speakers, which is important, because not everybody works for a company that will fund them to go speak at a conference... Or even specific ones, depending on the technologies they work with versus where they wanna go to talk.

**Carlisia Thompson:** But you know, sponsorships and volunteers - those things really make or break a conference. I remember last year - talking about CFP's - I was one of the people who helped review the CFP's, and I remember sitting... It was two weekends of coffee and nothing else but reviewing those CFP's, at the very end, and I reviewed every single one of them. [Dave Cheney](https://twitter.com/davecheney) was the one - I think he's always the one - to lead that effort of reviewing the CFP's, and at the end he said "All reviewers reviewed all of the CFP's." It's a lot of work and it makes a huge difference, but the more eyes that are on the process, the better the selection process is.

**Erik St. Martin:** Yeah, I was actually quite amazed that every talk was reviewed by every person.

**Vitor De Mario:** You get different opinions, and sometimes you say something and you think the talk is good, or you think it isn't, and another person comes in and says, "No, but you didn't think about that." It changes my point of view completely. That happened a lot in our CFP, which was much smaller.

**Carlisia Thompson:** Yeah, absolutely.

**Vitor De Mario:** It definitely happened a lot on yours, too.

**Erik St. Martin:** And we actually tried to rotate our review committee too, every year, just to kind of make sure that it's not like an echo chamber where it's the same five or ten people selecting talks every year. This year maybe there weren't as many talks that target your experience, but next year there might be, because the committee is all different.

**Vitor De Mario:** Yeah, it makes things fresh.

**Brian Ketelsen:** Well, this year we have a new program chair at GopherCon... It's going to be [Ashley McNamara](https://twitter.com/ashleymcnamara). Dave has handed over the scepter.

**Vitor De Mario:** Yeah, given the reception to her talk last year, I think she's a great choice.

**Carlisia Thompson:** She's gonna do a great job, for sure.

**Erik St. Martin:** We all love Ashley.

**Vitor De Mario:** Actually, I'm gonna be a little bit mean here, because I met her in Denver for the first time and she didn't know who I was, of course, because nobody knew back then, but she actually told me she would do a version of the logo of the software - I was talking about Abracadabra... He's a bunny these days, and he should become a gopher. And we never spoke about it again and it never happened, so... I'd still like to do it.

**Carlisia Thompson:** Wait, a logo for your company?

**Vitor De Mario:** No, for the software, Abracadabra.

**Carlisia Thompson:** Which is a commercial software.

**Vitor De Mario:** \[00:31:55.23\] Yeah, yeah.

**Carlisia Thompson:** As far as I understand, she doesn't take money to do these -- logos for commercial products should be paid, but then...

**Vitor De Mario:** Yeah, that's a problem.

**Carlisia Thompson:** I'm sure she's like, "Well, if I'm not gonna get paid, I'll just..." -- I don't know what she focuses on, but maybe something related to a commercial product is probably low on her priority list.

**Vitor De Mario:** It was never official. I only used it in the slides I do internally here, and the ones I did in Denver and at the first edition of GopherCon Brazil. But now we are thinking about - not thinking, we're already working on - splitting the software into several parts, and some of it is going to be open source, or perhaps it can be a new logo for the open source version. We are gonna need one.

**Brian Ketelsen:** Well, I know they take a lot of time, so...

**Vitor De Mario:** Oh yeah, definitely.

**Brian Ketelsen:** It's not an easy thing to do.

**Vitor De Mario:** Of course, she does a lot more than that, and logos for several cool open source software, so it's not guaranteed, but I'm kind of jealous of everyone that already got one. \[laughter\]

**Brian Ketelsen:** Everyone else has a logo... Yeah, I can understand that.

**Vitor De Mario:** Well, it's not fair. She has a lot on her plate.

**Brian Ketelsen:** Well, she has a day job, for sure.

**Vitor De Mario:** Yeah. My co-worker is saying here on the chat that we should open-source the software as soon as possible to get a cool logo. \[laughter\]

**Brian Ketelsen:** Well, there are several other people in the community that are making logos, too. We should get you connected with some of them, so that you can get some good gopher logos if Ashley is too busy.

**Carlisia Thompson:** Yeah.

**Vitor De Mario:** That would be great.

**Brian Ketelsen:** I know she's been trying to focus a lot of her time lately on doing her main job, which is writing software... So we'll have to get you connected and see if she's got time.

**Vitor De Mario:** I'm sending in the chat the current version of what the bunny looks like.

**Erik St. Martin:** That's actually pretty funny. I can see this as like a pitch deck to the business on why you should open-source your proprietary project. \[laughter\] It's like, "Number one - to get a cool logo." \[laughter\] They're like, "But how do we make money?" "Do you not see? I said cool logo!"

**Brian Ketelsen:** Yeah. "We have a logo from Ashley McNamara? Hello!

**Vitor De Mario:** Priority!

**Brian Ketelsen:** Yeah, that's an instant series A right there.

**Erik St. Martin:** Yeah, I mean, step one, have cool Ashley McNamara logo. Step two, question mark. Step three, profit.

**Brian Ketelsen:** Profit! Exactly.

**Vitor De Mario:** Sounds great to me.

**Erik St. Martin:** So looking at the time... Does everybody wanna roll into interesting Go projects and news?

**Brian Ketelsen:** Yes!

**Carlisia Thompson:** Let's do it!

**Erik St. Martin:** Let's do it. I wanna go first, because I think this is ridiculously cool.

**Brian Ketelsen:** Why do you get to go first?

**Erik St. Martin:** Because I never go first... So I'm stealing first.

**Brian Ketelsen:** Fine...

**Erik St. Martin:** So I came across -- I think it was last week sometimes... I think the GitHub username is hunterloftis, and the name of the project is called [PBR. It's a 3D renderer](https://github.com/hunterloftis/pbr)...

**Brian Ketelsen:** Wait a minute, PBR like Pabst Blue Ribbon?

**Erik St. Martin:** Correct.

**Brian Ketelsen:** Okay.

**Carlisia Thompson:** Is that in a document? Because I don't see it.

**Erik St. Martin:** It is, it's further down. I'm gonna drop it in the channel. But it's a 3D renderer written in Go, and I just think that's ridiculously awesome.

**Brian Ketelsen:** Oh, wow!

**Erik St. Martin:** Yeah. I'm just really addicted to non-standard things written in Go, and I thought a 3D renderer in Go was pretty badass.

**Brian Ketelsen:** Wow, if you look at the examples on their GitHub repo, that's mind-blowing.

**Vitor De Mario:** Yeah, really impressive.

**Brian Ketelsen:** Impressive.

**Vitor De Mario:** This Millennium Falcon is so detailed. Wow.

**Brian Ketelsen:** Yup. Alright, I forgive you for going first, Erik. Carry on.

**Erik St. Martin:** \[laughs\] Alright, who's next?

**Brian Ketelsen:** \[00:35:59.27\] I have exciting news - the folks at Wallaroo Labs released the Wallaroo API for Go. [Wallaroo](https://github.com/WallarooLabs/wallaroo), if you haven't seen it, is some pretty amazing statistical software, streaming software... I don't even know how to describe it. It's really cool stuff, and it's written in [Pony](https://www.ponylang.org/), which is one of my favorite little side-languages to play with... And they have an [API now that's written in Go](https://github.com/WallarooLabs/wallaroo/tree/master/go_api), so if you want to learn about streaming and messaging and play with it in Go, the Wallaroo Go API is now available and it's pretty slick. I played with it this morning.

**Erik St. Martin:** I actually didn't see that... I'm looking at it now. There's too many cool things to play with.

**Brian Ketelsen:** Oh, it's ridiculous. I could quit my job and just play with things full-time and still run out of time to play with cool things.

**Erik St. Martin:** Yeah, there needs to be some sort of filter for whether or not we should play with stuff.

**Carlisia Thompson:** Isn't that us? Isn't that our job?

**Brian Ketelsen:** Oh, that's righ, we're the filter. Dammit! Alright, so go play with this! I'm telling you, go play with Wallaroo, because it's really awesome. And Pony, too. If you like playing with languages, Pony is awesome, and it's named Pony because when the designer of the language told people everything he wanted to put in the language, somebody replied with "Well, why don't you just ask for a pony, too?" Because it has all of the features.

**Erik St. Martin:** That's awesome.

**Carlisia Thompson:** That's hilarious.

**Erik St. Martin:** I think we've mentioned it before, but another cool language to play with is [Nim](https://nim-lang.org/).

**Brian Ketelsen:** Yeah, I like Nim, too.

**Erik St. Martin:** We'll have to do a Language of the Week/Month, or something, and just recommend some new language for people to play with.

**Brian Ketelsen:** Yeah, that's a good idea. Let's add that as a to-do note - talk about interesting languages every once in a while. Alright, so another project that came out yesterday, hit the wires hard is [Twirp](https://github.com/twitchtv/twirp), from Twitch, which is a competitor for [gRPC](https://grpc.io/). Twirp is a big deal because it does not require HTTP/2, and that's important if you're behind a load balancer that doesn't support HTTP/2. Twirp looks fast, and it looks pretty lightweight, and it looked to me particularly like the cognitive overhead of using Twirp might be just a little bit lighter than using gRPC. So I'm interested to try Twirp out, but I haven't yet.

**Vitor De Mario:** It also allows JSON payloads in the messages. So you can handcraft messages in it, and you can't with gRPC.

**Brian Ketelsen:** That's correct.

**Carlisia Thompson:** That's a good flexibility.

**Brian Ketelsen:** Yeah, very nice.

**Erik St. Martin:** I always wonder how people come up with these names, like Twirp. I mean, it looks almost like Twitch and RPC, except it's missing the C...

**Brian Ketelsen:** Yup. Naming is hard.

**Erik St. Martin:** Maybe it's just because it's other people's names, I like them better. But I feel like I couldn't come up with a name that's cool like that. Mine are very descriptive, like Go Database Client, you know?

**Brian Ketelsen:** \[laughs\]

**Carlisia Thompson:** Let's not talk about naming... I have currently a folder called Common, with a file named "shared.go"

**Brian Ketelsen:** Nice!

**Carlisia Thompson:** I know, help me...

**Brian Ketelsen:** That's an anti-pattern, by the way. Just FYI.

**Carlisia Thompson:** No kidding!?

**Vitor De Mario:** Is the package named "utils"?

**Carlisia Thompson:** The package is called "common", with one filename called "shared.go"

**Brian Ketelsen:** We're taking away your badge.

**Carlisia Thompson:** I need help, people... Seriously.

**Brian Ketelsen:** \[00:39:55.21\] We're sending [Ben Johnson](https://twitter.com/benbjohnson) over for an immediate Go Package intervention. \[laughter\] Are there any other interesting news?

**Carlisia Thompson:** I will go then. My friend Scott Kurowski - he works with Mongo, and he sent me news that they are doing an official MongoDB Go driver. This is interesting, because there is a heavily used Go driver already, but they decided to do what they're gonna call [the official one](https://github.com/mongodb/mongo-go-driver), and put it on their repo, I suppose. And there is a big [blog post](https://engineering.mongodb.com/post/considering-the-community-effects-of-introducing-an-official-golang-mongodb-driver) explaining why they decided to do that.

I'm just saying this because for people who do use MongoDB, which is a lot of people, this might be relevant for them, and they might want to participate in this development, or not.

**Brian Ketelsen:** I'm confused, because I saw this headline and I didn't realize that this was talking about [MGO](https://github.com/go-mgo/mgo)... So [Gustavo Niemeyer](https://twitter.com/gniemeyer) was the head of the MGO project forever; 2011 I think is when that came out. And everybody in the community uses MGO, and for the longest time, the people at Mongo recommended MGO as one of the best-written drivers that took advantage of all of the possible features of Mongo, and this blog post they wrote makes it sound like it's limiting and not really a great driver... So this is quite a flip in opinion for a company.

**Erik St. Martin:** Yeah, that's really interesting. I actually remember borrowing some of the BSON logic out of that driver, just because it was done so well.

**Brian Ketelsen:** Yeah, the driver is beautiful, and I don't know what the word count on this is, but it looks like 2,000 words talking about why this open source driver written by the community and contributed freely from people's spare time doesn't meet their needs. That's kind of a kick in the teeth for open source, isn't it?

**Carlisia Thompson:** I think it might be saying that, but it's also saying that they need more control as far as to what gets in, they need to have more say. Apparently, there are things that they wanted to get it that weren't getting in, as per community consensus, so they decided "Well, I guess we form our own community, with the ideals that will fit our goals better."

I don't know, I'm not taking sides, just trying to...

**Erik St. Martin:** So if I'm understanding this correctly, they're still going to do an open source driver, but now they are basically going to be the core maintainers of it, instead of trying to be a contributor to somebody else's.

**Brian Ketelsen:** Right. And they're not forking, they're just starting new.

**Carlisia Thompson:** Yeah.

**Vitor De Mario:** I heard another announcement by Gustavo himself that he wasn't gonna work on the MGO driver anymore, and he was looking for someone else to take over him some time ago; i don't think he's doing that anymore. But with this post from the MongoDB guys, I kind of feel like they missed an opportunity in communication, so if they had talked to Gustavo, maybe they could take over the project themselves and we would have the best of both worlds, perhaps.

**Brian Ketelsen:** It's also possible that this is a reaction, or that Gustavo's wanting to not maintain anymore as a reaction to this, I don't know... But no use attributing drama or malice where we don't know that there's any, but this certainly smells like it might have some.

**Carlisia Thompson:** We don't know that any conversation did or did not take place.

**Vitor De Mario:** Yes, that's true.

**Erik St. Martin:** \[00:43:52.05\] Yeah, it's actually interesting too, because... Like, I haven't read the post, so I don't know whether it speaks to this, but it's also quite possible that since the MGO library came out, MongoDB as a database and platforming company has changed a lot, and evolved, and they may have learned new practices and things like that, and it would be a tremendous amount of work to put those into the existing library, and they felt it's easier to design from scratch. It seems more like a vision and planning and stuff that they mentioned here, just kind of scanning through it; there's not a lot that I see about like a technical nature. So it could be driven by some sort of technical thing, refactoring it to fit their new design.

**Brian Ketelsen:** Yeah. Well, I hope they treated Gustavo well, because he was a huge champion for the Go community and for Mongo.

**Carlisia Thompson:** Yeah. And I actually owe him a contact to bring him on the show. I can't believe I haven't done that yet. Right? We wanna have him on the show...?

**Brian Ketelsen:** Well, you can get him on the show when Vitor gets his Ashley gopher, and we'll just do all of it at once.

**Erik St. Martin:** I still remember the very first GopherCon, and Gustavo was a speaker, and was helping us pack bags, stuff swag bags...

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** I love seeing the community and the conferences and stuff like that all evolve, but I have very fond memories of the early days, where if you were given enough time, you could almost list everybody in the community.

**Brian Ketelsen:** Yeah, and the real central figures were the ones that were downstairs at the Marriot in Denver, helping us fill out swag bags and showing up early for the conference and working te -- like, [Cory LaNou](https://twitter.com/corylanou) working the registration desk while everybody else was watching conference talks. He didn't have to do that, but that was his contribution to the community. Those were nice days. And that sense of community has never left Go, which I love. I've got little goosebumps right now, because our community is so awesome.

**Erik St. Martin:** Now, Vitor, do you get a lot of volunteers for GopherCon Brazil?

**Vitor De Mario:** We did a lot more this year than the last one, in 2017 than 2016, because I think a lot of people heard about it. Actually, one of the volunteers helped us a lot, and I kind of wanna name her, which was [Ellen Körbes](https://twitter.com/ellenkorbes). I hope I'm saying her name right. She did a lot for us and she was there -- before the conference started, she was already helping us, and she did a lot as the conference continued, and even in the last day he did one of the workshops with [Daniela Petruzalek](https://twitter.com/danicat83).They both teamed up and in the end they did one of the best workshops at the conference. So Ellen did a lot for us, and a lot of other people also talked about maybe helping as volunteers, but she was the main one.

**Erik St. Martin:** That's awesome.

**Brian Ketelsen:** Yeah, that's great.

**Erik St. Martin:** I applaud everybody who volunteers and helps out, especially for some of the conferences and stuff like that where they're not commercial events. It's a lot of people making sacrifices of their personal time... So for anybody who's willing to do that, I applaud them.

**Vitor De Mario:** Daniela wasn't actually a volunteer, but she kind of ended up being in a similar way to Ellen, because she spoke, she did a workshop, she came up with the idea of doing a diversity scholarship for us for the first time as well, and she helped [Carlisia](https://twitter.com/carlisia) as well with her talk... She was pretty much everywhere. I don't know how she survived the conference doing everything that she did, but we wouldn't be the same without everything that Daniela did.

**Brian Ketelsen:** Well, speaking of that, if you go to her Twitter, which is [@Danicat83]((https://twitter.com/danicat83)), she's running a fundraiser to go talk at a conference in San Francisco, and I donated to that this morning because I would love to see her talk. So if you are able to go donate to that, it's definitely a worthy cause. She's an amazing helper in our community, so go help if you can.

**Carlisia Thompson:** \[00:48:19.22\] Absolutely.

**Brian Ketelsen:** Alright, how about \#FreeSoftwareFriday? Are we ready?

**Erik St. Martin:** Sounds good to me!

**Brian Ketelsen:** Alright, I've gotta start this one, because Erik, I can't even believe you kicked me out of the last one. What the hell...? So \#FreeSoftwareFriday, this is big, too - how long have we waited for a new version of Bootstrap? A couple years. [Bootstrap 4](https://github.com/twbs/bootstrap) dropped today, and it's looking good. And I'm sorry, but I know I'm gonna lose my hipster credentials... I think pretty much anything made with Bootstrap looks good, and they did a great job with it, and I think Bootstrap websites are pleasing. Showing my age probably, but dammit, I like Bootstrap.

**Erik St. Martin:** It's interesting, because I cut my teeth in web development. I've gone from the table-based design, to DIV based in CSS and all that stuff, then the grid frameworks... Grid frameworks in CSS were like JavaScript frameworks now - so many new ones are getting kicked off all the time, and Bootstrap has kind of come around, and that's one of my favorites. There's two now that I kind of look at. I'll admit, I'm not as connected to that world, so there may be more now, and I may be wrong about the fact that CSS frameworks aren't popping up every day again.

**Brian Ketelsen:** They are, but Bootstrap is still the reigning champion.

**Carlisia Thompson:** And just for the fact that they were out there early on, when there was nothing... That was like, "Oh, wow... Life is changing."

**Brian Ketelsen:** Yeah, so big love to all of the people contributing to Bootstrap and to Twitter for having the foresight to release that as a framework, thank you. Who's next?

**Carlisia Thompson:** I can go next. So today I felt virtuous for like a second and a half when I opened up my Twitter and I saw Francesc tweets saying that he didn't know about something that I knew about... \[laughs\] I'm like, "Check that out!"

**Vitor De Mario:** That felt good, didn't it? \[laughter\]

**Brian Ketelsen:** Yeah, check me!

**Carlisia Thompson:** Not only I knew about it, but I've used it, and he's like "How did I not know about this?" So it just goes to show, you know, it bears repeating... Some of the projects bear repeating; not everybody knows about even the really good stuff that's out there, so my shoutout goes to [Kelsey Hightower's](https://twitter.com/kelseyhightower) configuration library called [envconfig](https://github.com/kelseyhightower/envconfig), which is really neat. It just lets you hide your environment variables in a file, and using it in the application. It's pretty neat.

**Vitor De Mario:** Yeah, I've used it for many years and I love it. It's really flexible, it's really easy to use, and it solves a lot of problems.

**Erik St. Martin:** Yeah, I'm trying to remember... It's probably been a couple years; I actually forgot about it, too. I know I used it a couple years ago, but it's definitely been a while.

**Brian Ketelsen:** Yeah, we used it together back at that other job... Whatever that was.

**Erik St. Martin:** Yeah, it's actually surprising how many times Brian and I end up working together... I feel like we just can't get away from each other. We're like magnets. "I'm gonna go off and work for this company", and then "Shhhhttt!" \[laughs\]

**Brian Ketelsen:** Yeah, I'm like that thing that's stuck on your shoe from the parking lot.

**Erik St. Martin:** Yeah, and Brian got a promotion -- was it last week, or the week before? Last week...

**Brian Ketelsen:** Last week, yeah.

**Erik St. Martin:** \[00:51:59.00\] So Brian now runs his own team and now Brian will be my boss again.

**Brian Ketelsen:** \[laughs\] Hurray!

**Erik St. Martin:** When Brian and I first met, he was my boss.

**Carlisia Thompson:** Congratulations, Brian.

**Brian Ketelsen:** Thank you, it's very exciting. We're running a team doing all open source work at Microsoft, and who would have thought those days were here? I love it so much...

**Vitor De Mario:** Yeah. If you would have said that a few years ago, nobody would have believed you.

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** Yeah, it really is amazing to see the evolution, and for us to -- you know, the developer advocates... Everybody kind of contributes to open source and stuff, but I think that Microsoft has been seeing that and loving that, so they wanted to kind of spin something up where at least a subset of us get to spend more of our time doing that than some of the other things that we do as developer advocates. And I am ridiculously excited to be working for Brian again, and on open source.

**Vitor De Mario:** You make a good team.

**Brian Ketelsen:** It's gonna be kind of awesome.

**Vitor De Mario:** Pretty much everyone in the Go world knows about that.

**Erik St. Martin:** \[laughter\] Speaking of team, I still remember the first GopherCon, because at this time everybody only knew each other by handles and names on mailing lists, and everybody was asking Brian and I how they would be able to recognize us, and Brian -- I forget who he told... He was like, "We're the ones that look like Penn and Teller", and I'm like "What?!" \[laughter\] Because he's so much taller than me...

**Brian Ketelsen:** I feel a little bit bad about that now...

**Erik St. Martin:** Does that mean I'm not allowed to talk?

**Brian Ketelsen:** Yes, it does. I'm sorry, no more talking for you.

**Erik St. Martin:** I think we were doing \#FreeSoftwareFriday, weren't we?

**Brian Ketelsen:** We were somewhere around there.

**Erik St. Martin:** Vitor, did you have somebody you wanted to give a shoutout to?

**Vitor De Mario:** Yeah, I have a library to talk about here on the show called [GoReleaser](https://github.com/goreleaser/goreleaser). It's done by another guy in Brazil, his name is Carlos Becker, and it's got like more than 2,000 stars on GitHub and it creates Go binaries from pretty much every platform you can imagine, it helps you create GitHub releases, push your software as a homebrew formula and all those kinds of things. I've heard of other project using his software to make the release of new versions easier, and it's been pretty successful.

**Brian Ketelsen:** Yeah, GoReleaser is awesome. I have a confession to make... At my GolangUK talk I announced -- was it GolangUK? Some talk late last year I announced gopher.rocks, which was the same thing - the ability to tag and release stuff to GitHub, and then three weeks after I did that talk, I found GoReleaser, and it's done and it's beautiful and it had a million better features than gopher.rocks', and I just abandoned it, because GoReleaser does it all already, so... Yeah, thank you for that.

**Erik St. Martin:** I feel like that's almost every open source project I create... It's like, "Oh, this is awesome. Oh wait, somebody did it better than me."

**Brian Ketelsen:** "Aaand moving on!"

**Erik St. Martin:** And I'm actually happy about that.

**Brian Ketelsen:** Yeah, it doesn't hurt my feelings, it's kind of awesome that it exists and it's far better.

**Vitor De Mario:** Yeah, I wanted to highlight it too because of the fact that a Brazilian did it, so I kind of had to talk about it. And envconfig, which Carlisia talked about - I saw someone saying in the same thread that she mentioned (with Francesc) that it's also kind of a competitor made by a guy from Sao Paolo here, which participates a lot in our meetups, which is... I don't remember the name of the library -- something-config, but it's from [crgimenes](https://github.com/crgimenes) on GitHub... So I'm kind of happy to see these projects coming out of Brazil. Sometimes we are kind of silent here, nobody knows what's going on, but there are a few cool projects coming out of the country as well.

**Carlisia Thompson:** \[00:56:07.05\] So people have to go to Brazil and meet all these amazing developers.

**Vitor De Mario:** Yes, and GopherCon Brazil is the best opportunity for that. Everyone is gonna be in the same place.

**Brian Ketelsen:** Isn't [Tsuru](https://github.com/tsuru/tsuru) come out of Brazil, too?

**Carlisia Thompson:** Yeah.

**Brian Ketelsen:** Okay.

**Vitor De Mario:** And I heard about GoReleaser because of Tsuru. One of the Tsuru guys, who is also one of the organizers of GopherCon Brazil, [Guilherme](https://twitter.com/gbrezende), he was talking about it with the GoReleaser created on Twitter, so... Tsuru is one of our most successful projects, for sure.

**Carlisia Thompson:** Guilherme or [Andrews](https://twitter.com/andrewsmedina)?

**Vitor De Mario:** No, I saw Guilherme talking with Carlos.

**Carlisia Thompson:** So there are two Tsuru guys who are organizers of the Brazilian GopherCon.

**Vitor De Mario:** Yes, one former, Andrews, and one current, Guilherme.

**Carlisia Thompson:** Yeah.

**Vitor De Mario:** They kind of switched places. Andrews left the team, they hired Guilherme. So they are both from the GopherCon Brazil team. I think that was gonna happen anyway. Tsuru is probably the biggest Go project in Brazil, and one of the teams that talk more on conferences everywhere, so one of them was gonna be in the GopherCon Brazil team. That was pretty much guaranteed.

**Brian Ketelsen:** How about you, Erik? Did you have a \#FreeSoftwareFriday today?

**Erik St. Martin:** I did. So last week or the week before we were kind of talking about serverless a little bit, and there's this really cool project by Alex Ellis called [OpenFaaS](https://twitter.com/andrewsmedina), which is Open Functions as a Service. It can basically have your functions backed by Docker containers, and kind of a way to do serverless that way. I think they call it like OpenFaaS Netes, which allows you to have it backed by [Kubernetes](https://kubernetes.io/).

**Brian Ketelsen:** Yeah, OpenFaaS by itself doesn't' require Kubernetes, but there is a -- I think they've got the Kubernetes bit merged in, so that you can use Kubernetes as part of OpenFaaS if you want to, so you can deploy it on Kubernetes or off. It is really slick stuff.

**Erik St. Martin:** I'm actually really interested to see how this project itself advances, too... Especially with the building over Kubernetes, and stuff. I really am digging watching people build abstractions over the top of Kubernetes and Docker, and I feel like we're just getting more and more innovative.

**Brian Ketelsen:** Well, you've been preaching that for years now, that Kubernetes is just the foundation that we should be building our software on... Not a deployment platform, it's an architectural foundation, and I've been listening to you, because you're smart and it makes sense to do that.

**Erik St. Martin:** \[00:58:55.16\] Yeah, but I mean, I think it's really going to be interesting over the next couple of years to see what people build to abstract even Kubernetes away... And I feel like I don't -- I have a vision enough to see that that's the thing that's going to happen, but I don't have a vision enough to be the creator of that thing.

Okay, so did we make it through everybody?

**Brian Ketelsen:** I think we did.

**Erik St. Martin:** Alright, anybody have any other projects or people you wanna give shoutouts to before we close the show up? I will take that as a no. So thanks everybody for being on the show, especially thank you to Vitor for coming on and talking to us about genetics and not generics... \[laughter\]

**Carlisia Thompson:** Thanks, Vitor, for not talking about generics. \[laughter\]

**Vitor De Mario:** Yeah, I wouldn't go there. Thanks for having me on the show, and I'd like to thank Carlisia especially for talking with me about it and opening this opportunity.

**Carlisia Thompson:** Of course, it was so great to have you here. It was a great show.

**Vitor De Mario:** Thank you.

**Erik St. Martin:** Thanks everybody for listening. You can find us at GoTime.fm online, or on Twitter @GoTimeFM. If you wanna be on the show, have suggestions for guests or topics, create an issue on GitHub.com/gotimefm/ping, and with that, goodbye everybody, we'll see you next week.

**Brian Ketelsen:** Goodbye!

**Carlisia Thompson:** Bye!

**Vitor De Mario:** Goodbye!
