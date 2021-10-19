**Adam Stacoviak:** This show is hosted by myself, Adam Stacoviak, as well as our managing editor today, Jerod Santo. Jerod, say hello.

**Jerod Santo:** Hey, how are you doing?

**Adam Stacoviak:** It's good to have you on the show again; it's been (what) a couple shows since you've been back?

**Jerod Santo:** I'm glad to be here, as always. I'm excited about our guest today.

**Adam Stacoviak:** Yeah, me too. This is episode 108, and today's show is sponsored by Digital Ocean.

**Break:** \[00:56\]

**Adam Stacoviak:** I'm excited to have our guest on today, Katrina Owen. She's an instructor at Jumpstart Lab, and maker of Exercism (I got that pronunciation right), which we hope to learn quite a bit about on this show today. Katrina, without further ado, welcome to the show.

**Katrina Owen:** Thank you.

**Adam Stacoviak:** So, where do we begin with you? I feel like we kind of know you from a few blog posts and a few talks, and the work you do in the community, but tell us a bit about yourself. What's the back-story on you?

**Katrina Owen:** I'm an accidental developer. I actually started out in biology a few years ago, and got a degree in genetics. I absolutely hated the idea of working in a lab, so before I even ever got a job with my genetics degree, I started helping people out with their websites and kind of messing around with a little bit of PHP mostly at first, and then finally I just knocked on someone's door and said "Hey, would you give me a job?" and they did.

**Adam Stacoviak:** So you studied genetics, which I'm sure is a deep subject... I mean, that's DNA, right? And other things, I'm sure; trust me, I'm not the first to not have a degree on that... So you're an accidental developer - is this recent? How long have you been programming?

**Katrina Owen:** About six years. I graduated from university in (I guess) 2006, 2007, somewhere around there, and I think I got my first job as a programmer in late 2007.

**Adam Stacoviak:** Wow. And from what I understand, you just came here to the U.S. -- you live in Denver, and we kind of mentioned in the intro that you're an instructor, and that's pretty freakin' neat that you're an instructor six years later after learning to program... And Jumpstart is not just anybody, they're really well respected, so... I mean, that's cool!

**Katrina Owen:** Jumpstart is awesome. Jumpstart Lab does amazing Ruby training, Rails training, that sort of thing; some JavaScript... They're starting to work on some iOS stuff, and ops code stuff. There's a lot of really interesting things going on with them.

**Jerod Santo:** So you got out of genetics because you didn't wanna work in a lab...

**Katrina Owen:** And here I am...

**Jerod Santo:** \[laughter\] Jumpstart Lab...

**Katrina Owen:** The irony...

**Adam Stacoviak:** Touché! Nice. So what was it about the lab (or a lab) that turned you off and what ultimately transpires back to that from what you do as a developer?

**Katrina Owen:** So the lab work during college is probably not very similar to the lab work that you would do in an actual lab, but it's very repetitive; lots of waiting, lots of turning a machine on and waiting for four hours for something to replicate, and then looking at it in some way...

**Adam Stacoviak:** It sounds like video rendering or something, doesn't it, Jerod?

**Jerod Santo:** It sounds like a bad test suite.

**Adam Stacoviak:** Yeah, there you go...

**Katrina Owen:** Yeah, right? And so I just couldn't bear the thought of doing that. I wanted to be a lot more hands-on, a lot more like problem-solving on a daily basis, rather than spending several years with a hypothesis and trying to make observations that might prove it right or wrong.

**Adam Stacoviak:** And then what's the ultimate product of doing all that? Is it just a yes or a no, I was right or wrong? Is there anything like real-world change?

**Katrina Owen:** Oh yeah, you cure cancer, and you clone people, and stuff...

**Adam Stacoviak:** Oh, that's no big deal, right...?

**Katrina Owen:** It's pretty awesome in theory.

**Jerod Santo:** So let's go back to you knocked on someone's door and said "Give me a job" and they did... Can you elaborate on that? It sounds pretty amazing.

**Katrina Owen:** \[05:53\] Yeah, so my resume basically was a bunch of like "I helped people do this" and "I built that", and it's basically not very impressive... But then it said "And I have a degree in Genetics" and the CTO looked at it and said "You must be pretty smart", so I got the job.

At first, all I really was gonna do was help them test stuff and write little scripts and debug and whatever, but within a very short time I was writing production code... So I think it took about three months before I was really productive. Absolutely dangerous. I wouldn't wanted to have me as the only developer, but a team of smart people - they absolutely kept me busy and I was producing content and being useful.

**Adam Stacoviak:** You had some pretty good guidance then, getting started.

**Katrina Owen:** I did, yeah.

**Adam Stacoviak:** So that's a good place to start from, and then now you're in the same position now - which we'll talk here in a bit more detail... Exercism is really about that crux there, which is learning, writing code, practicing, and then ultimately the other side of that, which is code reviews, and stuff like that. So it's about doing exercises and keeping it bite-sized and simple, but at the same time dealing with the problem.

**Katrina Owen:** Yeah, so one of the things -- I was very frustrated when I was learning how to program, because everything seemed so arbitrary, or confusing... Everything would explain it as though I knew all the things. The blog posts would be making assumptions about what I knew, or the readmes would be making assumptions about what I knew, and often I was just confused and frustrated.

A lot of the things -- when you're picking up programming without any formal background, at least six years ago there was very little guidance on doing well, like choosing good names, or structuring your code in a good way, or writing unit tests and proving that your code was behaving the way that you expected it to behave... It was all very, like, copy stuff from JavaScript websites or PHP websites and kind of mess with it until it works.

I found that to be very frustrating and I got kind of obsessed with the whole XP thing. I read everything I could find about XP and pair programming, and TDD, and all of those things, and tried to figure out how to make that work in my environment at work.

**Jerod Santo:** So the company that you worked at was not doing XP at the time, and you brought that to the equation? Or were they already engaged in it and you just wanted to learn more?

**Katrina Owen:** No, nobody at the company I was working at did any sort of testing or pairing or any of that. We didn't have a continuous integration server... We didn't actually have a test environment when I started working there; it was straight to production.

**Jerod Santo:** So I'm trying to just get an idea of your career arc... Was it from this job to Jumpstart Lab, or have there been things in between?

**Katrina Owen:** There's been one thing in between. At this job, the PHP job, it was a startup, it was very exciting; I stayed there for about 2,5 years, almost 3 years, and I kind of taught myself how to write tests at that job. I would write tests for everything I did, I put together a CI server that I just ran locally, and nobody else in the company really cared to run those tests, which was, I guess, fine. I mean, I just used it to help in my own development.

But after a while I got frustrated with that and decided to move to a different language, and at least find a company where they cared about testing than they did at the previous company. And this was at the time when I was also moving back to Norway.

\[09:57\] So I studied genetics in Norway, moved to L.A., worked at this startup, and then moved back to Norway after three years. And in Norway I went to a Ruby meetup, and I guess there were probably 15 people there. The next day a couple companies called me up and said "Hey, you should come talk to us." One of those companies hired me on as a developer, and I more or less learned Ruby on the job there. I stayed there for about 2,5 years.

From there, I did the talk Therapeutic Refactoring, which let me travel around and talk to people and meet people at a bunch of conferences... And I also was kind of done at the company. I loved the company I worked at in Norway; they are absolutely amazing. They always come up with great ideas, they're always inventing things... Their latest project is taking government map data and using it to show on the web 3D maps of Norway, and then you can select a square of Norway and click, and you get sent a 3D printed model of the landscape that you've selected... Which is awesome. So they're always making up things like that.

But I felt like I had kind of done what I had to do there; I really brought testing into the organization. That was kind of what I was hired to do, and I was ready to move on.

I met Jeff from Jumpstart Lab at a conference, and we talked, and eventually -- well, he sent me an email saying that I should work for him...

**Adam Stacoviak:** That's always nice.

**Katrina Owen:** It's always really nice.

**Adam Stacoviak:** You should work for me.

**Katrina Owen:** Well, I have a job now that I really like. \[laughs\] So I spent some time thinking that over, and ended up in Denver.

**Jerod Santo:** So - I may have missed it - is Norway home, or do you just go there for school?

**Katrina Owen:** I've been back and forth all my life. My mother is Norwegian.

**Jerod Santo:** Okay.

**Adam Stacoviak:** I understand that earlier this year was -- you're now in Denver, which we've mentioned a bit ago, but... So now you're in Denver, and this was like (I guess) January timeframe, or first part of the year timeframe; you came and officially began at Jumpstart, and moved... I guess you played on short end of Jumpstart Lab, and now you're in Denver, which is -- I was up in Denver in the summertime and I loved Denver; I think it's beautiful. The mountains, having that as the backdrop is just amazing for -- you know, just the scene...

**Katrina Owen:** Yeah, it is an amazing place. The weather here is absolutely amazing. Sunshine, except every once in a while, but only for a very short time, it will rain or snow.

**Adam Stacoviak:** When I was talking to Jerod before, then you keyed off this a little bit, you mentioned your talk, Therapeutic Refactoring, and kind of the ramifications I guess from that, which is more like the results... So you kind of gave this talk that was at Cascadia -- was that the first time you gave it, or was this the most recent time you gave it?

**Katrina Owen:** I gave it at Nordic Ruby in Stockholm, and they don't record.

**Adam Stacoviak:** Bummer.

**Katrina Owen:** Yeah, right? But there were several people at that conference who organized their own conferences, and among them Ben Bleything of Cascadia Ruby was in the room, and he said that I should fly to wherever that was - Seattle - and give it there, and it was recorded by Confreaks, so it ended up both on the Confreaks.tv website and YouTube.

**Adam Stacoviak:** I know that Jerod kind of put it off a little bit, because I guess somebody had suggested him to watch it, and he was like "I guess I'll watch it when everybody watched...", and he was really thrilled about it... So I guess talk a little bit about what Therapeutic Refactoring is.

**Katrina Owen:** When I was working at this Ruby job in Norway I felt very stressed out about always having to -- there was always this pressure to ship, and there always is, because that's what we do, that's the whole point, right? And I felt like I was always in so much of a hurry that I didn't really learn very much... I'd often be throwing code that I wasn't happy with into the repository, and I felt like I never had time to go back to it.

\[14:23\] One day I just realized that I wanted to spend time, just a little bit of time making sure that something was beautiful; I didn't care what... So I'd come in really early in the morning before anyone else got to work and spend about an hour just writing tests and refactoring some tiny piece of code in the project.

I did this on a daily basis for quite a long time, probably about a year, and it transformed how I thought about programming in many ways. The first thing was that because I was writing tests and refactoring for my own pure pleasure - it bothered me to wait for the test suite to run... So waiting for any number of seconds -- anything over a second was very frustrating, and not pleasurable, and I was there just to refactor for the pure pleasure of it. So I started looking into how to design my code in such a way that the test suite would be very fast and very responsive, and that led me into this refactoring loop that had this immediate feedback, and never really took me out of flow.

I ended up in this flow state for a long time, and it was very pleasurable. It felt very therapeutic. I felt smarter in a way... Normally, during the day, when all the pressure was on, I basically just felt like an idiot, like "I'm not smart enough to do this..."

**Adam Stacoviak:** I know that feeling.

**Katrina Owen:** Yeah, right? And I think most of us feel like that. I definitely know there are people who don't, but a lot of us do. It's really hard. And during those refactoring sessions I felt like I understood things and I was on top of things, and I kind of lost my sense of self... And it just felt really nice, so I wanted to talk about that. And I had a bunch of code examples that I wanted to share with the people, just because it's always so much fun to go show "Oh, this is what it looked like before and it was horrible, and now it looks awesome."

**Jerod Santo:** How many times have you given that talk since?

**Katrina Owen:** Eight maybe...

**Adam Stacoviak:** Wow...

**Jerod Santo:** That's when you know you've got a good talk. First you do it, it's not recorded, and that's kind of how legends are made... "Did you hear this one? Oh, it wasn't recorded, you can't see it. You should have been there..." And then you record it on Confreaks, and it's out there in the public for everyone to see, and watch, and enjoy, and spread, and then you have people at other conferences still ask you to come and give that same one, which we can just go to Confreaks.tv and watch it, and yet people still want to see it live and see it again, or for the first time... That's pretty astounding.

**Katrina Owen:** I'm actually gonna be giving it again in San Francisco on November 1st at FlowCon.

**Jerod Santo:** Really? Nice. So what is it about refactoring that just gets nerds like us excited? What is it? That feeling, that therapeutic feeling you said that you had - what do you think it is that generates that?

**Katrina Owen:** I have no idea... It's such a good question.

**Jerod Santo:** Because we all react that way... As you're even talking, I'm thinking about refactoring and I'm like, "Yes..." It's kind of like a cleansing feeling, like you have this dirty code that you wrote, and it works, it's okay, the tests pass, the code is functional, maybe the product owner is even happy, but it's not like up to I don't know what beauty, or it's not up to your standards perhaps... And then when you get a chance to do that, it's almost like you're taking a shower, or something... But I'm not sure what's at the core of that feeling.

**Adam Stacoviak:** One thing you did say, Katrina, was flow. I don't know if you're a fan -- I know that you've done some stuff with... I think it was JavaRanch you mentioned before, so you must be a fan of Kathy Sierra. She talks a lot about flow and the state of flow, and being in that -- I mean, you even said things like "I felt smarter." That's the study of the brain - if you go and study that stuff, you definitely are smarter in that moment in time because you're in a state of bliss mentally... You're just like the super-being of Katrina, that's who you are for that hour, those 40 minutes of flow.

**Katrina Owen:** Yeah, I think that's a huge part of it. I think another part of it is like -- I think as a group we tend to enjoy obsessing over details.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I mean, isn't that some of that where bikeshedding and yak shaving all come about so frequently? The more minuscule the details, the more we like to think about and argue about...

**Adam Stacoviak:** Yeah, maybe.

**Katrina Owen:** I think that makes sense.

**Adam Stacoviak:** I know for me, sometimes when I'm isolated and I can kind of lament a little bit with you on that state of bliss for the bit there... Even if it may not be super-useful when I'm done, whatever I've just shipped - it might be optimizing one line to be easier to read, and I can imagine how this is gonna change three other things I'm working on to make those smaller or more readable, more bite-sized, more translatable, whatever the reasons are for it... I think that that might also be part of the refactoring. It's like this constant kind of making things better, even if it's just for yourself.

**Katrina Owen:** \[20:03\] Yeah.

**Jerod Santo:** Moving from the refactoring over to your project, Exercism... It seems like that really is all about -- I mean, it's about code review, it's really about refactoring... Isn't it?

**Katrina Owen:** Oh, absolutely. It totally grew out of this love of obsessing over the details, and that's why I call it nitpicking on the site; all the comments are nitpicks. It's not really bikeshedding - even though sometimes it feels like it - because it can be a profound discussion about what we value in code and why we value these things, and the discussion becomes really interesting because different people value different things, or different things in different contexts... So there's a real breadth in those discussions there.

**Jerod Santo:** So just backing up, can you describe for the listeners Exercism? ...what its goals are and basically how it works.

**Katrina Owen:** Sure. Exercism is a site where we made up a bunch of exercises in the form of a test suite; a test suite for every exercise. You download the exercise, you get this test suite, and the first goal is to make it past. Write production code that will make the test suite pass.

Then you submit that code to the website and you get feedback on the code that you wrote - names, the choices that you've made for how you've named things, the methods, the classes if there are many, variable names, which methods from the core library you've chosen, or the data structures that you've chosen, or how you've chosen to arrange the code...

I've explicitly said on the site that I'm focusing on simplicity and readability and expressive code, but again, those are not objective terms; they're very subjective. So the discussion often becomes "Well, I find this readable." But more interestingly -- for example, about naming block variables when you're looping, this idea that "Well, the collection should probably named in the plural, and the block variable should be the singular of that plural...", rather than saying "I have a Monkey List, and each thing is a Monkey", it would be "Monkeys", looping through a list of Monkeys, and then each block variable would be the monkey.

But even beyond that, we have some really interesting discussions about the level of abstraction of the name that you might choose. If you have a block variable in an aggregate function, some people will call the block variable Hash, naming it for the underlying data structure; other people will call it Result, or Memo, or Accumulator, sort of labeling it based on its role in the calculation. Then other people will name it Frequencies, or Histogram. Naming it for the meaning, the thing that it represents in terms of the problem, not in terms of the calculation or the computation.

So these patterns emerge, and these discussions - by asking "Why did you name it this way? What are the tradeoffs that you're considering?" you get a lot of very interesting perspectives on what expressive code means, or what readable actually means.

**Jerod Santo:** So all of the feedback on the code review is by other users of Exercism, right? It's not by some -- it's not you there, giving everybody feedback...

**Katrina Owen:** No, you don't have like two geniuses giving feedback; everybody writes code, and then once you have completed an exercise - and you actually decide on your own when you feel like you've completed it, you've had enough feedback and you're done, you move on... At that point you gain access to everyone else who is currently doing that same exercise that you just completed.

**Jerod Santo:** \[24:15\] So you get to see all their code...

**Katrina Owen:** Yeah.

**Jerod Santo:** And then also the nitpicks on their code?

**Katrina Owen:** Yes. So the discussion becomes this global thing, on a per submission basis.

**Adam Stacoviak:** If I understand you right, you -- well, we jumped a couple steps; you've gotta get the CLI in place, and all that stuff...

**Katrina Owen:** Oh, right. Oh, goodness... It's actually really confusing; make no mistake, right now the UX is absolutely terrible. I'm talking to a design UX company to help me sort that out. So yeah, the first thing that you have to do is you have to install a command line client which is written in Go. This communicates with an API in the web app, and that is to fetch down exercises or submit up exercises.

Then once you've submitted it, all the feedback happens on the site itself... And that's about it, actually. It's not very complicated once everything is in place.

**Adam Stacoviak:** I think it's that first kind of original ceremony of getting in -- I was messing with it last night, and we'd actually... So for those of you listening that are subscribed to the newsletter too, we've plugged Exercism in (I think) Issue 8, and I've been meaning to get back to it since then... Because Beverly Nelson, who does a lot of work with RubyFriends, and just really is thriving in the area of kind of helping people get plugged into the right kind of resources to learn - I'm always kind of on the lookout for neat tools to suggest to her to check out... So I was just waiting for a chance to play with it.

I kind of got involved, and even I - I wouldn't say I'm seasoned; I'm certainly on brand new - had a couple stumbling blocks... I'd like to see how that pans out for the future.

But it was easy to get in place... So once you get your exercise -- let's say you wrap it up and you've got no failing tests, and you feel good about it, and then you do Exercism -- what's the ship version of that?

**Katrina Owen:** Submit.

**Adam Stacoviak:** Submit. So once you submit it and you get some feedback, and then once you finally get to a point where you wanna complete that - is that when you get access to nitpicking?

**Katrina Owen:** Yes.

**Adam Stacoviak:** So you can only nitpick the ones you've done though, right?

**Katrina Owen:** Right, that's correct.

**Adam Stacoviak:** Okay. That's what I wanted to clarify.

**Jerod Santo:** That makes sense.

**Katrina Owen:** Yeah. This might change, but currently I like that. I'd like to provide more guidance on what good nitpicking might look like, which key areas it is more useful to focus on, or what type of feedback is more helpful. I've seen feedback that says "Great job!" and I'm like "Great job how...? What do you like about it?" Once when someone said "Great job!" I was like, "Well, here, let me show you how it's done."

I was like, "I really like these names because - this, that and the other. I love how the tasks are separated into separate methods that really make sense..." So I managed to get a list of eight things that I liked about that code... Because if you know what someone likes about it, you can go and do it again. But if you just say "Great job!" it's like "Well, I don't know what was great about it. Was all of it great, or just something...?"

**Adam Stacoviak:** Since you're talking about how to nitpick, is the "How to Nitpick" documentation - is that a living document then?

**Katrina Owen:** \[27:54\] It's a living document, and right now it's nowhere near done. I keep seeing new things that I wanna address, and right now the documentation doesn't seem to be the best place to do that, so I'm gonna work with the UX people to figure out how to present that information in a way that's useful and timely, like getting that information when you actually are trying to nitpick, rather than when you decide to go read some documentation.

**Jerod Santo:** So you're a Ruby developer, you have a command line client written in Go...

**Katrina Owen:** Yes.

**Jerod Santo:** I think we can talk about that a little bit, but first, which languages have exercises? Is it just Ruby, or are there other languages supported?

**Katrina Owen:** It started off as just Ruby, because I was writing it mainly just to give it to my students here in Denver... And then one of my colleagues started porting the exercises to JavaScript. Then once I had launched it, someone probably in the second week was like "We need Elixir and Clojure", so they ported it to Elixir and Clojure. Then someone else said "Why don't we have Python?" and I was like "Because I don't know how to write Python, but you're totally welcome to..." \[laughs\]

I think now we have Clojure, Elixir, Ruby, JavaScript, Python and Haskell, and somebody is porting it to Rust, and I'm working on the Go exercises. And somebody is working on CoffeeScript... A couple days ago someone said they'd start working on Scala, and then I heard someone say Objective-C, but that's gonna take a little bit more -- there's a little bit more ceremony involved in getting that running.

**Jerod Santo:** So you're gonna start writing the Go version, and your command line is in Go - is this a newfound love for you, a new language?

**Katrina Owen:** Absolutely. Yeah, I really like it. I'm also gonna write -- a part of the API is gonna get ported over to Go instead of Ruby. I was at a conference a half a year ago maybe... Actually, almost a year ago is the first time I saw a talk on Go, and it was at ØREDEV in Sweden. The talk was by Andrew Gerrand, one of the developers who works at Google, working on the language Go.

I immediately liked it, but didn't do anything about it. A month later I was busy trying to move to Denver, and then I had a new job, and all of that... So I never really got into it. Then I was at a conference in Polland, and Andrew gave another talk on Go at that conference, and I was like "Okay, now I really have to do it." So I sat down and I went through their tour, and I started playing around with things.

I'm still not anywhere near competent, but I can get a little bit of stuff done and I can -- I know enough to pester people to help me out, so I'm more able to ask questions... So eventually -- I hope to be fluent by the time the first Go conference here in the states happens.

**Jerod Santo:** So you don't have to go into great detail, but just at a high level, what is it about Go that turned you on? What is it that got you?

**Katrina Owen:** It's very -- it's a small language, and it's very consistent, and it feels very zen; minimalistic and zen to me. So the way Ruby is more baroque and Shakespearian and expressive, and you can say things in a thousand different ways and they all smell just as nice, with Go it's more like a very tiny zen poem - very concise...

**Jerod Santo:** There's kind of just one way to do it, right?

**Katrina Owen:** There's just one way to do it, and that's kind of a relief. When I do so much Ruby, it's really a relief to be on the other end of that scale. I'm very excited about the concurrency model in Go, I'm also very excited about the fact that there's no inheritance... It's object-oriented, but it's all through composition. It has this incredible focus on the interface. The API of your object is very important, and I really like that.

**Jerod Santo:** \[32:21\] I can kind of relate on the "There's only one way to do it" being attractive. I'm also a Ruby developer and I've loved the freedom that Ruby gives us to express ourselves... And then over time I see actually my tastes in Ruby changing to where something that I used to think was a good way of writing Ruby, now I look at that and it's unattractive or it's silly, or whatever reason... Then I start porting my Ruby over to my new Ruby style, and I look at my old style and I'm like "I can't believe I used to write like that." And I'm not talking about readability and stuff, I'm just talking about pure style. After a while, that kind of just wears on you; it's like, "I wish they'd just tell me how to write it and let me think about the problem-solving." I know there's use cases for both scenarios, but that is an attractive thought, although I haven't actually got into trying Go yet, so...

**Katrina Owen:** Yeah. I really like both styles, or both this really very varied and expressive craziness that we're allowed in Ruby, and the concise expressive, minimalistic approach that we're encouraged to use in Go. I really like both, and I think that they can both inform the other.

**Adam Stacoviak:** I think when Rob and Andrew, that you've mentioned, that turned you on to Go - I think it was either somewhere out there on the ether that I've seen this, or when they were actually on the show, on episode 100... It was a fun episode too, because it was episode 100 of the show, which was great... But we had them on the show, and I believe it was Rob who said -- because he was one of the founding people to create the language... Rob said he wanted it to fit in his head, in memory.

Jerod, you and I have had some side conversations about the state of flow even - going back to some things you said earlier, Katrina... When you're working on something, you've got a lot going on in your brain; if you get like a text message or a tweet or something that kind of breaks that state of flow, you kind of lose that mental memory, and I think that's kind of what Rob was fighting against when creating the language - it was to kind of keep it like that as well, to keep it where you can kind of keep what you're doing in your brain a little longer.

**Katrina Owen:** Yeah. This morning I was pairing with someone, and they introduced me to an enumerable method that I had never seen before in Ruby... And it's awesome! It was exactly what I needed, but I had totally never seen it. Even though I've read through (I thought) all the enumerable methods, I just totally missed it. And I've been doing this for what - three years?

**Adam Stacoviak:** I mean, come on. You should have gotten it by now.

**Katrina Owen:** Right...?

**Adam Stacoviak:** That's funny... Yeah, I think that's kind of the adventurous part of Ruby; there's so many different ways that you could do things, but I can limit... like what you were saying Jerod, where you're like "Just tell me how to do it, the one way, so I can think about the real problem, versus the style that I have to execute this. I can do it 15 ways, but which way is really the right way to do it? Just give me those training wheels and I'll go."

So I guess we talked about Go a bit here... Originally, the CLI was written in Ruby, right? So was it something with Ruby that made you change, or was it simply to wanna play with Go, to do it in that?

**Katrina Owen:** Okay -- yes, the original command line client was a Ruby gem, so it was gem install Exercism. That worked really well when the only problems were in Ruby. But now you have people only on Exercism for the Clojure...

**Adam Stacoviak:** Oh, makes sense...

**Katrina Owen:** \[36:09\] ...and it's really a pain to set up all the Ruby -- like, setting up Ruby on your machine is actually quite an ordeal, especially if you don't know Ruby. So with the Go, it's possible to cross-compile for all the different operating systems and architectures, and people just have to download and install this one binary, and that's it. No dependencies.

**Adam Stacoviak:** So on the homepage that you have, the Try It version, the quickie, "don't worry about telling us your Github", "just do it now" version, I guess, will that eventually go away, or is it dead and you just haven't removed it yet?

**Katrina Owen:** Oh, the one that says "Ruby"?

**Adam Stacoviak:** Well, it's on your homepage and it says "Try It" and the instructions say "Gem install Exercism", you go to a Temp directory, and you know...

**Katrina Owen:** It's totally a mistake. I'm gonna fix that after this show. \[laughter\]

**Adam Stacoviak:** We didn't say that, we'll edit that out. \[laughter\]

**Jerod Santo:** Pay no attention to that...

**Katrina Owen:** The Go client allows you to do that now.

**Adam Stacoviak:** Okay...

**Katrina Owen:** So I will totally fix that. Thank you.

**Adam Stacoviak:** Hey, we're here for peer reviews, right?

**Katrina Owen:** Absolutely.

**Jerod Santo:** So Exercism seems like it has a really great foundation, and I'm halfway through the Bob exercise and having fun... It seems like this is the kind of project where you have bigger long-term goals... What are some of your thoughts on the future of Exercism? Would you like to see more languages, more exercises, more community? Are there changes coming down the road?

**Katrina Owen:** All of the above. I'd like better exercises. Right now, all the exercises that are there were just kind of made up by me while traveling, hoping to keep my students busy for half an hour.

Some of those exercises are absolutely excellent and have really interesting problems that they expose and really interesting discussions come out of them. Others have terrible design, terrible APIs, really boring discussions, and I'm kind of working on figuring out which exercises are good and which are less interesting, so that I can par that down... But I'd also like new exercises that expose different types of problems perhaps in the different languages. Not all the languages need the same exercises, because they have very different design constraints and different features that you should be able to explore in exercises.

I'd like more languages. I'd like all the languages, really... \[laughter\] It seems like there are two or three -- I'd say three different reasons to use exercises that people have told me about. Some people say "I'm learning how to program and this is the first time that I'm actually getting feedback on the code that I write, and so I'm learning a lot faster." So it becomes a type of mentorship.

Then other people are like "Well, I'm fluent in Java. I just wanna figure out how to write Clojure." So they're using it to try out a new language, kind of just for fun, and figure out what the idioms are in that language, as opposed to the language that they're fluent in.

Some people are doing exercises in the language that they use primarily, and using it to have really deep discussions about style and tradeoffs with other people who use that language on a regular basis

**Jerod Santo:** I'm logged into my homepage now on Exercism, and it looks like I got a zero in the upper right-hand corner; are there some gaming aspects that you've started, or what is that zero?

**Katrina Owen:** \[39:45\] No... It's notifications. No notifications. Again, I'm gonna be talking to UX people to help me clarify all of that. I don't actually want gaming aspects to this. It's really hard to game things well and encourage the right behavior, and it's so easy to get it wrong and encourage really arbitrary, wrong, uninteresting behavior and unhelpful types of competition, so I'm trying to avoid that.

**Adam Stacoviak:** I fully agree with you. I was actually thinking about that a bit ago. I just happened to be studying the characteristics of a social network; at my day job I work at Pure Charity, which I guess is kind of one part social network, one part crowdsource funding... I was just thinking about different things we've talked about, and for whatever reason gaming was on my -- these gaming things that have been all the rage, and then have kind of trickled off since then... Every time I kind of go into something that kind of gives me points, I'm just like "Stop that! It's annoying. Don't do that." I don't like that stuff, it drives me crazy.

**Katrina Owen:** A lot of the research around motivation has -- someone did some research with kindergarteners, where they gave the kindergarteners markers so that they could draw. They would draw things, and then they started rewarding them for their drawings, giving them gold stars or points or whatever, and those kindergarteners stopped drawing unless they were given the rewards. They started drawing only if they were going to be rewarded for it... So it took away that internal drive to do something for the pleasure of just doing it...

**Adam Stacoviak:** That's why I hate money.

**Katrina Owen:** Right?! \[laughter\]

**Adam Stacoviak:** That's why I hate money, because when you start working only because you wanna make the benzies or whatever -- it's not cool. It changes the perspective.

**Jerod Santo:** It's even worse on the internet where you're basically modifying your own behavior in order to affect the number in somebody's database on some server somewhere across the world... "Right now it's a 12, and I really want that number to be 13." It's so arbitrary and really valueless.

At the same time, sometimes it can be effective. It is kind of putting it to good use, and I think you're right that there's a lot of ways that that can be used and end up having negative effects on your community.

**Katrina Owen:** Yeah.

**Adam Stacoviak:** Let's maybe tail-end one piece here... I got a question on -- I like the learning aspect when it comes to something like this; not just learning with Exercism, but your specific learning, Katrina. You'd mentioned before we actually started recording yesterday when we were doing sound check that we're generally pretty bad at giving feedback, and you kind of want to learn; that was also one of the parts that kind of propelled you to do this... So what have you learned about feedback and people giving feedback?

**Katrina Owen:** I mentioned a little bit of it earlier - I realized that the sort of generic "Hey, great! Thumbs up!" type of feedback isn't helpful because it's not actionable, it's not specific. It doesn't give you something that you can use to either repeat it or improve it. The feedback that I really have liked on Exercism so far has been feedback that is very specific about the code that is there right now.

"I'm looking at this code and I'm seeing that this is repeating over and over. Is there a way to remove this duplication? Or I'm seeing that the same parameters pass to all of these methods. Perhaps there's a second object where these methods would belong in." So it's looking at the existing code and being very specific and actionable about the things that you see there, rather than either just being sort of generically positive ("Hey, that's great!") or pushing it in directions based on some future speculative "Well, maybe new requirements are coming down the line..." - we don't know anything about requirements; let's just look at the code that we have, and look at the code smells or whatever that we can identify here, and address those.

**Adam Stacoviak:** \[44:16\] I was just looking at my notes too, I also wanna glaze over this - I was thinking about your counterpart in writing the Go CLI... I'm not sure how you say his last name, so I don't wanna butcher it, but I know his first name is Mike.

**Katrina Owen:** Mike Gehard, yeah. He's a developer at Pivotal Labs. He's based out of Boulder, which isn't too far from Denver. He comes down to the office that I work at every once in a while, and we've talked about design and refactoring and pairing and teaching and a bunch of those things, and he's been working on the Cloud Foundry command line client in Go for the past few months... So he helped me get started with that, wrote all of the basic things, and then I basically ask him for feedback when I start mucking about with things.

**Adam Stacoviak:** Gotcha. I was just thinking about that, because I knew you had a counterpart... So when we talk about Exercism, is it just you? Were you the founder of it, the idea maker? Do you have any counterparts? Is Mike a long-time partner of this, or will he play a larger role later on?

**Katrina Owen:** No, it's just me. A lot of people have contributed. I think over 100 people have contributed commits on GitHub to the actual website, and several people have committed to both the Go client and the Ruby gem, which is now deprecated. I think people get kind of excited about the idea and spend a few hours doing something.

**Adam Stacoviak:** Doing something, that's cool. We're probably at the point where we ask these common questions, and I wanna ask an uncommon question today, because I like to throw curveballs here and there... I think you've kind of answered it a little bit, and I'm not gonna answer it for you, but I think you might have already answered though - if you weren't writing Ruby, what would you be writing?

**Katrina Owen:** I would be writing Go.

**Jerod Santo:** And if you weren't writing Go, what would you be writing? \[laughs\]

**Adam Stacoviak:** Good one.

**Katrina Owen:** I don't know... Erlang maybe?

**Adam Stacoviak:** A throwback to the days when Wynn was on the show, he used to always ask this -- and I miss this question, which was I guess not language-specific, but project-specific maybe... So what is out there in open source? What project is out there that you wouldn't mind spending a weekend forking and tweaking and maybe hacking with? Not like a language, but just a project itself.

**Katrina Owen:** There are actually quite a few. I would love to just go to -- there's a website that has a list of projects that need help...

**Adam Stacoviak:** Oh, really?

**Katrina Owen:** Yeah, I should look that up; I cannot remember what it's called. CodeTriage, I think...

**Adam Stacoviak:** It doesn't ring a bell, but if we don't get it in the show, it's okay, we'll put it in the show notes. So if you're listening and you're like, "Oh, man...!"

**Katrina Owen:** Okay, I'll find it.

**Adam Stacoviak:** CodeTriage.com, I hang out there; it hasn't rendered yet to the browser, but we'll see...

**Jerod Santo:** Yeah, I'm trying to load it, too.

**Adam Stacoviak:** Oh yeah, "Help your favorite open source project." I think you rung a bell.

**Katrina Owen:** Yeah, so I would just go there and find something that I actually use, and go spend a weekend working on it.

**Adam Stacoviak:** Anything in particular that you may have already earmarked?

**Katrina Owen:** I like Sinatra. I use Sinatra a lot, so I would totally love to spend a weekend just messing with Sinatra.

**Adam Stacoviak:** I've gotta imagine that, as an instructor, trying to get started quickly - it's probably the easiest to get started with if it's just one file, right?

**Katrina Owen:** Yes. And it's also very easy to explain. You explain the web, and then you say "Yeah, we have GET verbs and we have POST verbs, and you have a method named GET and a method named POST, and there you are."

**Adam Stacoviak:** Cool. Well, I'm anxious to hear your answer to this next one, which is who is your programming hero?

**Katrina Owen:** \[48:16\] Sandi Metz. Sandi Metz has been programming since 1978. She's been one of those people who just basically stayed in her caved and programmed always, until maybe 3-4 years ago, where she went to a conference and was caught in a hallway rant about design... \[laughter\] So this publisher from Addison Wesley overheard her ranting in the hallway at some Ruby conference, and spent two or three years convincing her to write a book, which she did.

That book - it took her two years to write - just got published in September, I think, of last year. It's a book that really changed how I think about code.

**Adam Stacoviak:** The book she's talking about is Practical...

**Katrina Owen:** It's Practical Object-Oriented Design in Ruby.

**Adam Stacoviak:** Yeah, I'm a big fan of that book. I haven't read it all, but I'm a big fan of it. I'm actually graduating up to it; I'm still working through Eloquent Ruby personally. Then also a friend of the show, Avdi Grimm - he's got a new book out, Confident Ruby, which is just phenomenal. Or no -- Confident is the one from before...

**Katrina Owen:** No, Confident Ruby is his latest.

**Jerod Santo:** Confident is the new one, yeah.

**Adam Stacoviak:** What was the other one? Because I keep getting them mixed up.

**Katrina Owen:** There was Exceptional Ruby.

**Adam Stacoviak:** Exceptional. Okay, sorry.

**Jerod Santo:** And then Objects On Rails.

**Adam Stacoviak:** I love his approach to that too, so that's pretty neat.

**Jerod Santo:** Another thing I'll recommend quickly if you don't have the time for reading these books, is to let the Ruby Rogues read the books, as Katrina is one on the Ruby Rogues Podcast... And then listen to them talk about it for about two hours, and you feel like you've read the book by proxy.

**Adam Stacoviak:** Is that right?

**Jerod Santo:** Yeah, it's outstanding.

**Katrina Owen:** We did an episode with Sandi Metz, and we couldn't all be on there at the same time, because six is just too many when we also have a quest... So I sat out that one because they were all such fanboys and totally wanted to be on the show, and fought to stay on.

**Jerod Santo:** That was pretty gracious of you, considering she is your programming hero and you sat out...

**Katrina Owen:** Well, I have stalked her in real life, so I've actually met her...

**Jerod Santo:** There you go.

**Katrina Owen:** Avdi's Confident Ruby is going to be our Book Club book tomorrow when we record...

**Adam Stacoviak:** Nice!

**Katrina Owen:** So that's also coming out soon.

**Adam Stacoviak:** On that same note, we're working on partnering with Avdi to provide that to our members. The Changelog is part sponsored, part member-based, or part member-supported, but we have this section which is called Member's Benefits, which when we partner with people like Digital Ocean and Avdi and a bunch of other learning and developer resources, we just work to get you a little bit of a discount to it... So keep an eye out for that. We'll work with Avdi on that.

I'm a fan of the book, but I think it's kind of neat... Just to kind of tie off on Sandi, what she says there - she says "If your code is killing you and the joy is gone, POODR has the cure." I'm pretty sure that's how you say it, right? POODR \[pawdr\]

**Katrina Owen:** POODR \[pooder\]

**Adam Stacoviak:** POODR \[pooder\], okay. Of course I get it wrong.

**Jerod Santo:** Quite the name...

**Katrina Owen:** Yeah, right? On poodr.info, I think if you -- and I'm not even sure... Poodr.info is the website though, for the book.

**Adam Stacoviak:** Poodr.com.

**Katrina Owen:** Poodr.com, that's right. Thank you.

**Adam Stacoviak:** No worries. No worries at all. But yeah, I mean -- Katrina, it was great having you on the show. I think just kind of hearing your enthusiasm for refactoring and the flow just made me smile quite a bit during this show, for sure. I don't know about you, Jerod, but I was smiling quite a bit during this show... It's a shame we don't actually do this with our faces showing to the world, like YouTube Live or whatever that thing is called... Because this is a fun show.

Thank you so much for taking the time to come on this show. Is there anything else you wanna riff on real quick on before we close out?

**Katrina Owen:** \[52:26\] No, I think I'm good. Thank you so much for inviting me.

**Adam Stacoviak:** Yeah, it's been an honor to have you on the show. I know that Jerod was a fan of yours with that talk that we've mentioned during the show, and I'm becoming more and more of a fan/stalker, whatever you wanna call it, but... Yeah, that's for sure.

Definitely thank you for what you're doing with Exercism. Keep in touch, too. Whatever's changing, whatever's happening, get back with us as you have time. I know you're really busy, but we'd love to help you keep this in front of the people who are wanting to do a lot of this... So whatever updates we can help you mention, we definitely wanna do that, for sure.

I also wanna thank our sponsor for this show, Digital Ocean. As I mentioned, we've been working with Digital Ocean for quite a while, and we're working with them over the next few months to kind of help them spread the news to the developer community about some of the awesome things that they're working on and ways they're supporting the community.

One really unique thing if you're really any developer out there, whether you have an open source project or something that is specific to a server or whatnot, they are paying $50 to write tutorials, basically. I'll put a link in the show notes, but some examples can actually be used on Digital Ocean, or just how to use your open source software.

One example was how to install Wordpress on a LAMP stack on Ubuntu, which I have no idea how to verbatim, so I kind of go back to a guide every time... Somebody got paid to write that article and make it really great.

Everything from -- we mentioned Ghost and their support of Ghost... So there's a how-to article on Ghost and the one-click install app they have for Digital Ocean...

And we've talked about Docker quite a bit; we've had Solomon Hykes on this show quite a while back... But if you're a fan of Docker and you still wanna play with it, even though it's not completely stable yet, they have a Docker application and you can play with it. It just makes it really easy, and as I understand too, Katrina, they do some pretty neat support with you guys for Jumpstart Lab.

**Katrina Owen:** They gave us 100 instances that we can use as we wish, any size. They're very generous with us.

**Adam Stacoviak:** Very generous. I think that's one part of why they've made some inroads into the community. One thing I've heard -- and this is kind of elongated, just because I absolutely love Digital Ocean... But I've just heard people say "They're not that expensive, so how can they be good?" Well, don't let the price fool you; they just really want your business because they wanna show you how awesome they are.

If you're the kind of person too that likes to decorate your laptop, you can send an email to barry@digitalocean.com. Just tell him your shipping address and he's gonna ship you some Digital Ocean stickers.

I've got a couple links in the show notes I'll put there for you, and I also wanna plug the coupon (promo) code we have, which is "the changelog october". If you use that when you sign up, you'll save $10.

That's it for this show. Check out Digital Ocean at DigitalOcean.com. Katrina, what's your website?

**Katrina Owen:** It's kytrinyx.com.

**Adam Stacoviak:** Awesome. We wanna thank you once again for coming on the show, and thank you listeners for listening. Jerod, thank you for being awesome on this show as well. Let's all say goodbye.

**Jerod Santo:** See ya.

**Katrina Owen:** Bye-bye.
