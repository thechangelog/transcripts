**Adam Stacoviak:** Welcome back, everyone. This is The Changelog and I'm your host, Adam Stacoviak. This is episode 145, and today Jerod and I are talking to David Heinemeier Hansson, DHH as he's better known. He's one of the most influential software developers out there, and crazy as it might be, we've never had David on this show before... 145 episodes into The Changelog, several years into The Changelog and this is the first time we're having David on the show. But we have him on the show for a big show. One hour and forty-five minutes of nothing but me, Jerod and David talking about 10+ years of Rails... A fantastic show today, you're gonna love it.

**Break:** \[00:46\]

**Adam Stacoviak:** So we've got Jerod on the line... Jerod, say hello.

**Jerod Santo:** What's up? I'm excited to be here.

**Adam Stacoviak:** Jerod, this has been a show in the making for us. David, you don't know this, but we've had the idea of doing this show since roughly around the 10th anniversary -- well, I guess probably the tail end of last year, so around October/November I was like "Jerod, we should do a show called 10+ years of Rails with DHH", so that's what we're doing here today. It's the tail end of February 2015, so we're finally there.

**David Heinemeier Hansson:** I expect you to be impeccably prepared then.

**Adam Stacoviak:** We are impeccably prepared.

**Jerod Santo:** Well, we haven't been preparing that long, we've just been talking about it. \[laughs\]

**Adam Stacoviak:** Well, speak for yourself... Maybe our notes don't reflect a start date prior to today, but our thoughts have definitely been there.

**David Heinemeier Hansson:** Excellent.

**Adam Stacoviak:** You know, I can say that I take back my history to the beginnings of Ruby and the beginnings of Rails. I can remember first working on it in 2006. I think it was 2005-2006, so that's like forever ago to me. Let me look up the birthday of Rails... That was July 24th 2005?

**David Heinemeier Hansson:** '04.

**Adam Stacoviak:** 2004. So July 24th, 2004... Oh, I had it wrong then, when I was looking up my notes.

**David Heinemeier Hansson:** Which is really -- I mean, it's the release of Rails, or the first public release of Rails.

**Adam Stacoviak:** Right, which was 0.5...?

**David Heinemeier Hansson:** 0.5. There was a 0.4, 0.3, 0.2, 0.1 and before I was counting that went before that, which started in the summer of 2003 really. That was when the first bits of Rails started coming together.

**Adam Stacoviak:** Now I know you tend to walk into a situation like this, like a podcast, to have this conversation, you're typically known, but just in case there's a listener out there saying, "Who the heck is this guy?", who are you?

**David Heinemeier Hansson:** Sure. I am David Heinemeier Hansson, I am the creator of Ruby on Rails, and I continue to be involved with the development of Ruby on Rails. I'm also a partner and the CTO of Basecamp, which is a project management tool, the original Rails app, the app that Rails was extracted from. I'm a Dane, I'm from Denmark originally, I moved to the US in 2005... I could go on forever, but...

**Adam Stacoviak:** Author, racer...

**David Heinemeier Hansson:** \[04:13\] Yeah, I wrote a couple books.

**Adam Stacoviak:** I'm super interested to see that you actually drive a race car. That's so cool. I tried to drive a race car on the streets, it's called a Mustang, but whatever...

**David Heinemeier Hansson:** Yeah, on the track is a different animal altogether. Really, it's a fantastic \[unintelligible 00:04:30.11\] A great second way of getting to that magic called state of flow, which is what I really love about programming; when it really works, when it really clicks, you get into the state of flow, which is the straightest path I've found to continued happiness - to expose yourself to flow.

**Adam Stacoviak:** Yeah, absolutely. And how difficult it is to get there, sometimes... It's always a challenge.

**David Heinemeier Hansson:** Absolutely.

**Jerod Santo:** So you say you extracted Rails out of Basecamp back in the day... To this day, that seems to be one of its virtues - that it's had a large, very popular production app to track through time. Where did that initial insight come from?

**David Heinemeier Hansson:** So when I started working on Basecamp, it was basically there that I decided that Ruby was gonna be something I was interested in pursuing, because prior to Basecamp, I had been working on client projects, and clients back in 2003 and earlier, they wanted PHP, at least for the contracting work that I was doing together with 37signals. And if it wasn't PHP, then it was Java. Those were the two big ecosystems that I was exposed to back in the day... And I was not happy with either of them. I was not finding the craft of programming itself all that interesting. I was finding it interesting to get programs out of it, but working in PHP and working in Java was not exactly igniting my imagination.

But I then discovered Ruby through a number of articles by various -- it's kind of funny to say this word, because it's been mocked so much that people think you say it ironically now, whenever you mention it, but thought leaders. I still think of it as that, even if that word is contained...

**Jerod Santo:** Like who?

**David Heinemeier Hansson:** Martin Fowler, Dave Thomas... I remember those two names from IEEE magazine and a couple of other software development magazines at the time, just mentioning and explaining their thought patterns using Ruby. I thought, "Hey, here are all these very smart people who I look up to and have learned a lot from, and if they pick Ruby when they're free to pick, then why wouldn't I give Ruby a chance now that I'm free to pick?", which is what was the case with Basecamp - I was free to pick; it was just Jason and I saying, "Hey, let's build an app to make it easier for us to manage client projects." I didn't even ask Jason about like "Hey, would you mind if I did it in Ruby?" I sort of just decided "I'm gonna try Ruby for this", and that was the beginning.

To try Ruby for Basecamp, I obviously needed just to build some stuff, because there just weren't a whole lot of people using Ruby back at that time, and the people that were using Ruby, not a lot of them were using it for web stuff, and I came in from having had most of my programming exposure to PHP and Java, with a whole lot of things that I just assumed should be there, and I found that a lot of them just weren't there in Ruby, so I had to build them myself.

**Jerod Santo:** You seem to hit upon a lot of ideas that were avant-garde at the time; nowadays, people who are new to web development, these are kind of -- they're not clichés, but they're tried and true things that other frameworks have borrowed over time. I think a few shows back we had Taylor Otwell on, of Laravel, the PHP framework which was getting a lot of traction, and he mentioned you a few times as an inspiration, and Rails itself.

\[08:15\] Some of those things, like a conventional reconfiguration, the opinionated aspect of Rails and a few other things - where did those ideas come from?

**David Heinemeier Hansson:** I had been exposed to PHP and I had been exposed to Java, as I said, and that obviously taught me a lot... And a lot of what it had taught me was things I did not want. I did not wanna waste my time doing -- we called it in the early days "XML sit-ups." That was a stable of configuring any web application in Java, that there was just a ton, a mountain of XML. I remember looking at applications and talking to people working on apps where the XML configuration files were larger than a working, functional copy of Basecamp... And that was, of course, just crazy, right? But that was accepted at the time; people thought "What? A 2,000-line XML file? Why do you say that's crazy? That's decoupled. Now we have it in XML, that means it's magically good."

I just looked at that and thought, "No, it is not magically good." I need a framework that I can use myself, as one programmer, working spare time on Basecamp, and be productive enough that we're making substantial progress, and I have to feel like that's a good use of my time. I could do all sorts of other things. If programming is going to be the thing that I spend my time on, it damn well better be awesome. I need to have a good time. So I'm not gonna sit there and just be subjected to frameworks and ideas that just make me feel like crap.

That's a bit of an overstatement... Of course I wasn't feeling like crap all the time when I was programming in PHP or Java, but I was feeling like crap enough of the time that it just lit a fire. I shouldn't say "it lit a fire", it was sort of volatile elements that once I added Ruby to the mix just combusted. Because Ruby was really the key trigger, I think. Here was a programming language that took such a radically different approach to what is a programming language. It redefined the question for me. A programming language is no longer just about how do you make the bits and the bobs go in the right order, it was about "How does a programmer feel about it?" That to me was just such a huge breath of fresh air, that obviously no programmer would feel spending time on a 2,000-line XML file is a good use of time. But it wasn't questioned because that wasn't the question, right?

The question wasn't "How do we make the programmer feel good?", the question was "How do we do all these other things that are sort of sympathetic to the machine, sympathetic to the compile process" or whatever else have you. They were not about "How do you make the programmer feel?" and they were certainly not about how do we pick the human over the computer when the two are at odds?" which very often happens. We do ludicrously inefficient things in Ruby and in Rails, to this day, because we pick the human. If we were picking the computer, we'd do things in a totally different way, but we're not.

\[11:45\] That was just an a-ha moment, that Ruby sort of gave me permission to think those lines of thought. I already had this discontent, but I didn't know where to take the discontent and feeling like "This is not great... Ugh, it's frustrating! Why can't I get stuff done?" Then all of a sudden Ruby comes in and says "Ding! Let's turn on the light", and then all of a sudden I go "Oh, that's possible... Well, I'm gonna get on this horse, and I'm gonna ride it fast."

**Adam Stacoviak:** So that's where Rails came from with Basecamp then, basically... It was your love and passion for a rethinking of how you can program, and the idea that you had this open abyss, because Jason didn't care, and it was in your core to choose, so if you were choosing, you were choosing developer happiness, so if you're building something, you might as well do that. But at what point though when you were building Basecamp did you really think that you were building something that was a framework?

**David Heinemeier Hansson:** I think maybe halfway through. We started in the summer of '03, and we released something in -- was it February of '04? I think it was 1st February, 2004. So there was a process of about six months maybe... Six months of part-time, I should say. Because I was going to school at the time, and we also had other clients at 37signals that we were tending to. We didn't just abandon the entire consulting business to focus on Basecamp, like any "proper startup" would do, right? That's the startup law, abandon and risk everything.

Anyway, so there was this process of about six calendar months where I was working on it, and perhaps halfway through I realized that I had just made a bunch of tools, so I needed something to talk to the database, I needed something to create the templates, I needed some controllers... I needed a bunch of things, and I had started working on active support in the sense too I was extending Ruby such that it even better for creating web applications, and I just thought "Hey, this is a good grab bag of stuff... And this is a grab bag of stuff that's making it possible and enjoyable for me to create Basecamp in Ruby. Maybe other people would enjoy it, too."

I remember feeling this sense of actually obligation, which is otherwise a word I pushback against pretty hard in a lot of contexts, but... Even at that time, I had already spent years working with open source software. Open source just struck me as just such an obviously better idea, just such an obviously better paradigm for so much of the programming world that I felt obligated to contribute my part. And here I was, sitting with a bunch of stuff made in Ruby that I can share... And I was also thinking at the time, "Man, I am having so much more fun programming in Ruby than I ever was in Java or PHP or anything else I had touched before... It'd be awesome if other people could have that same experience."

I remember thinking, "Yeah, they're probably not gonna have that if they just come to Ruby as it looks today, without any of this additional stuff", because it was just too much they had to cook from scratch... And while I was enjoying that path, I could totally see somebody like "Hey, I'm on a deadline here. I've gotta make a project for a client. I'm not gonna freakin' reinvent every framework in the book just so I can deliver on this one thing...", so I thought "Hey, I can give them a jumpstart. I can give them enough cover and an excuse to pick Ruby, to learn Ruby, to fall in love with Ruby perhaps, if I release this Rails bundle."

**Jerod Santo:** You felt this sort of obligation to the open source community, and you have your Basecamp product coming out and you decided to go ahead and make a framework of it... You also did something which again was, I think, unique back in 2004, and nowadays is just kind of compulsory for everybody who wants to get a framework or a project out there that has some good coverages, which is you did a demo video... A 15-minute Rail demo. What did you do, building a blog in 15 minutes?

**David Heinemeier Hansson:** \[16:08\] Yup, building a blog.

**Jerod Santo:** That really seemed to work well... What made you decide to do that?

**David Heinemeier Hansson:** So given the fact that I had already been an open source user for quite some time, I also observed open source and programmer behavior for quite some time... And one of the things that always struck me as so very odd was this notion that programmers hated marketing, that marketing was dirty, that you shouldn't have to sell your ideas, you shouldn't have to sell your open source packages; they should just be known as obviously good. If you built it, they would come. And I always thought "That's a load of crap. That does not work."

If people do not know what you've created, it doesn't matter how great it is; they're not gonna get any value out of it. Why wouldn't you "sell your ideas"? If you think your ideas are worthy of releasing, you should also think your ideas are worthy of promotion.

**Adam Stacoviak:** Right.

**David Heinemeier Hansson:** So I just decided Rails was not gonna fall in that category, and perhaps to some extent Ruby, too... That I was just gonna put it out there and then whoever wants to use it can use it, but that's kind of on their own volition - hell no; this was gonna be an advocacy job, and I wanted it to be an advocacy job because I worked with plenty of programmers who had the exact same feelings that I did about working in their respective ecosystems or domains, and that was dread; they did not like the working environments of PHP and Java... And even for the people, I thought, who perhaps are not feeling that dread, I can still open their eyes. I can still show them that it does not have to be terrible.

A lot of people just accustomed themselves to acclimate to the environment that they're in, even if that environment is terrible. I thought, "Nope, I'm not gonna basically allow you to sit there and not know that there's a better way for it", which I recognize that that sounds arrogant; that's the word.

I remember from the early days of Rails advocacy that that was the insult that was most often swung at me, right? "You're arrogant. You think you have a better way? What gives you the right to say so?", and I thought "That is such a curious and peculiar argument. Of course I think I have a better way. Why the hell else would I spend my time on it? Why would I invest so much of my free time and my interest and my passions in this thing if I did not think it was a better way?" That doesn't mean there can't also be other good ways, but I certainly came into programming Rails as a reaction to feeling things were not good enough. It was not just "Oh, let me try something alternative and different and see if it's fun." It was like, "Damn, this is just too frustrating. There's gotta be a better way. If nobody else is gonna build it, I am." So of course I walk away from that experience thinking, "Yeah, I have a better answer, and I'm gonna tell you about it." That really rubs a certain kind of programmer the wrong way... And I think that's just deeply entrenched in the whole scientific association with programming, that scientists are not supposed to be promoters; we're supposed to just put out objective truths, and then everything will work out in the end. Nope, that's not how it goes. That's not how it goes for the scientific community, that's not how it goes for programming.

**Jerod Santo:** Yeah, it's an idealist idea, that the cream always rises to the top. I know my dad used to always say that to me, and he's a bit of a romantic as well. I wish I could believe that, but I'm with you that you have to actually put stuff out there and you do have to advocate, especially because there's so much noise. If you're gonna be heard through all the noise, you've gotta speak up. I can just see how people would take that confidence as arrogance, but it worked.

**Adam Stacoviak:** \[20:11\] I have a slightly different angle on this though, because while I remember your charismatic ways and your ability to get an audience enthusiastic about what you're showing off, I also remember the whoops, and I almost wonder if that was part of your marketing plea, because you were just so -- and you said you're a Dane, you've got an accent, and maybe that's something people say differently over there, I don't know... But I always remember that part being like the virality I guess of what you were doing, because you were like "Something that should be so easy, was so easy", and what you built, and then the whoops just sort of added to it.

**David Heinemeier Hansson:** That's pretty funny, because at the same time that's one of the things that rubbed other people the wrong way, especially back in... I think the video recording is from 2004-2005.

**Adam Stacoviak:** I was gonna ask you, where were you at, what were you doing to do this video?

**David Heinemeier Hansson:** It's funny, because one of the things I absolutely hate is repeating myself, which should come as no surprise to anyone working in Ruby; we all try to avoid, right? Well, I try to avoid it too in any type of public speaking, that's why I don't do a lot conference talks. Even before conference talks were recorded on video so that you basically couldn't give the same talk multiple times, I couldn't give the same talk multiple time, because I would just get so terribly bored. So the audio for that original 15-minute video actually came from a presentation I had made in Brazil. I had the audio from that because they had recorded it at the time.

What I then did was I basically -- I think I just played that audio in the background, and then I recorded a video to fit that, such that I didn't actually have to narrate the video one more time, because [laughing] I don't know, I just, like that would be a, that would be a hassle. So the whoops -- the whole thing was not a well-practiced or edited sort of flow; it was basically just the recording from me standing on stage in Brazil, talking about Rails. And I think that's why it has that intensity of it... It was not a polished piece of marketing, because I was just saying I actually believe in putting together a coherent marketing message, and here I am, I released this video that was incredibly unpolished in all sorts of ways... But unpolished things sometimes have their own charm, and I think perhaps that's what appealed to you and didn't appeal to others. That's at least the story. I don't know if there was a lot of intent necessarily, except "I don't really wanna narrate those again... Can I just use the video in this other one...?"

**Adam Stacoviak:** How do you like the fact though that Rails is - I guess to the early adopters, the early visibility people that were sort of watching this space back then, it may not be apparent if someone came into the Rails world in the last 4-5 years maybe to stumble upon that... But to those that have kind of been here along with you along the way, how do you like that Rails is known for this video?

**David Heinemeier Hansson:** I think it's great. I think it's even greater that people don't even realize it today. That to me is true progress, when you can lift up the level, the expectation to the point where the past seems obvious, and that is just not something we have to think about anymore.

These days of course any open source framework or library should have a slick marketing page. Of course it should have advocacy. These things were not true at that point, but now they are, and the world is a better place, in my opinion, for it. I don't care whether people remember that as how much did that video have to do with it... I just care about "Today is better", and that's really my primary motivation for a lot of things that I do; I just wanna make today and tomorrow better, and once they are, who cares what they byline really said?

**Jerod Santo:** \[24:08\] Well, open source has grown up quite a bit since then, and nowadays who's not gonna ship a fancy marketing page and a video with their project? Of course, there's also a lot of money floating around open source; we know you have opinions on that, so we'll probably get to that a little bit later... This video is actually on YouTube, so anybody who wants a trip down memory lane, we'll link that up in the show notes.

You can watch it on YouTube, but I got to thinking... You shipped this in 2004, but YouTube came around in 2005. Man, I don't even know how you'd get videos on the internet in 2004. Remember?

**David Heinemeier Hansson:** Yup, I FTP-ed it to a server that I had...

**Jerod Santo:** Old school...

**David Heinemeier Hansson:** ...and it was in MOV container. I don't even know what the recording itself was in, but it was just a .mov file -- and I think you could even play it on Windows, or something. I think the first version of whatever I uploaded to FTP could just be played on a Mac. I seem to remember that people were bitching that "Hey, I can't play this on my Windows machine", and then we encoded it, or whatever.

Yeah, there are a lot of things that we take for granted today that just didn't exist 10 years ago.

**Adam Stacoviak:** That's so funny. I remember talking about the internet as tubes, and whether or not YouTube was clogging them... That was crazy.

**David Heinemeier Hansson:** Which is funny, because that's still the same conversation today, just instead of YouTube it's Netflix, right? Netflix is literally clogging the tubes.

**Adam Stacoviak:** And now a word from our sponsor.

**Break:** \[25:32\]

**Adam Stacoviak:** You know, we were talking here a bit about beginnings and whatnot; we talked a little bit about why you chose Ruby, and I think another question that comes from maybe opening up this idea of 10+ years of Rails is did you intend to build a framework and did you intend to influence the open source community to sort of begin building more frameworks and more boilerplates; Jerod and I talked in the pre-talk before about Java and other open source projects having frameworks, but it seems like if you go back in history, the spark of Rails sort of sparked this idea of "Wow, I can framework something and ship it as open source and do what David did."

**David Heinemeier Hansson:** I don't know if there was a big intent at that point... Except, there was some intent; I don't know if that was the intent. The intent for me was "I have a lot of good stuff, I wanna share it. Ruby is a fantastic programming language that I'm having endless amounts of fun programming in; I wanna share that with other people, so let's make that happen." Because let's also be fair - at least at the time, I was certainly heavily influenced by the Java frameworks. Java was really the only environment that I was exposed to that had this notion of frameworks, but it was pretty well developed at the time.

Strut was one of the major ones back in the day when I got started working. There were a couple other things... But there was enough there for me to learn from. So certainly by no means was Rails like an original idea as sort of a framework. Perhaps the thing that I tried to push and was sort of original at the time was the notion of the full stack

**Adam Stacoviak:** \[28:00\] That's true.

**David Heinemeier Hansson:** Rails would ship with the whole thing, the whole enchilada. It would not be this compilation of just loosely coupled ideas that you had to piece together and configure yourself, because that was one of the things I truly hated about the Java approach - every single project, when they started out, they had to spend a week just configuring the bits and selecting the bits even, which required researching the bits, and contrasting the bits, and I just thought--

**Adam Stacoviak:** It didn't allow innovation, right? You could innovate in a situation like that, because you could think on the fly and riff and iterate, as Agile was becoming more and more practiced, too.

**David Heinemeier Hansson:** I'm not sure I see that that's a dividing line. What I did see was that it was slowing everyone down with needless decisions that they did not need to make, especially for this large category of applications where it just doesn't matter which of the thousand template languages you pick. Let's just pick one that works for most people most of the time, and it's good. Then, when somebody needs to start a new project, that's not our concern anymore. We were just talking about it, right?

**Adam Stacoviak:** Right, don't repeat yourself.

**David Heinemeier Hansson:** Exactly. Once Rails had gone to this point where it showed, to some extent -- or at least made more people aware that marketing was not a dirty word, you could use marketing for open source and marketing and advocating for your ideas was a good thing, now that's an assumption that everyone just takes for granted, right? I wanted the same thing to happen for all sorts of other technical decisions. I didn't want starting a revenue project to begin with "Oh, which template language should we pick?" Like, who the hell cares? That's just not an important decision for the vast majority of projects out there.

**Jerod Santo:** But those are our favorite decisions to make, right? We love to just sit around and twiddle our thumbs and talk about that stuff, right? I mean...

**David Heinemeier Hansson:** Yes, which is why it cuts against the grain... Which is why even to this day Rails is one of the very, very few full-stack frameworks. I mean, besides the fact that it's a very substantial amount of work to go full-stack, I think it's also deeply counter to the core of many programmers. They want to believe that every single application is a unique snowflake, that they're so brilliantly unique too, and that their value comes from their careful selection of which template language, which data mapper, which whatever the hell it is in your stack, that they tailor that in a bespoke fashion to that specific application, right? They derive a lot of joy from that, which is why the notion of the integrated system, the full stack system, dare I say it the monolithic system is so counter to what many programmers really feel is right.

Most programmers are enamored with this idea of loosely coupled bits, the unit philosophy. A variety of tiny, focused tools that are endlessly configured together, and yes, that works great for UNIX, and it works for a lot of other domains. In my contention, the web is one of those things, and building web applications is certainly one of those things. Rails is a large argument trying to refute that idea that every programmer should sit and make this minutiae decisions on technical assemblies every single time, on their own; no, Rails says we're gonna start with a curated set of defaults that will work great for the vast majority of people, for the vast majority of time, and - this is the important part too, of course - when it does not work, you're free to pick something else, and all the other decisions you can still benefit from.

If you have a very particular affinity for, say -- I love riffin' on this, so I'll do it again... RSpec as your testing environment - you can slot that into Rails, and it'll be great. If you don't have a specific thing -- Rails ships with something great in the box, with sort of a test unit style, and it'll work wonders for you, right? And everyone can do that. There's tiny little substitutions, but they don't have to prepare the whole thing from scratch.

\[32:12\] What we're giving you is not just a bunch of ingredients and say "Hey, here's how you mix it." We give your finished 21-course meal, and then you can say "Alright, I don't like shellfish, so skip fish number seven."

**Adam Stacoviak:** I like the analogy.

**David Heinemeier Hansson:** But the other 20 dishes, they're still designed, on the menu, because people sat down and thought, "Hey, what would make a good menu here?" Again, this is actually a contentious point which is why I love it. Rails is still a unique argument in the world. This is one of the many things that Rails have not won the majority mainstream argument on; I'd say this is why Rails is still an outlier when it comes to full-stack assemblies... Because most people, in their hearts, even if they sort of practically can recognize "Ugh, I guess Rails kind of makes it easy to get going fast, but ugh...!" Isn't that actually annoying that there's just something there that prevents more programmers from going down that path? I think that's both curious and a little funny, that people on the one hand can realize, "Okay, I get a lot of good out of this, but somehow it's just so deeply at odds with the philosophy that it allows them to produce that good, but they can't kind of hold those ideas in their head at the same time.

**Jerod Santo:** It has gotten a lot easier to swap in/swap out the shellfish or whatever, to pick and choose pieces as Rails matured over time. We'll talk about the history of the framework, but I do wanna go back to the point you said about "It works great for UNIX, but it doesn't work for the web." I'm wondering why you think that is.

**David Heinemeier Hansson:** I think part of it is that the web and the web application follows more of a template form than the use of an operating system. An operating system has to account for more different kinds of usage. The web application is a pretty well-defined space, at least for that majority template that we're trying to present, which is controllers, talking to a database, creating views. It's a very templated approach to software development. It's not blue sky. It's a well-trodden domain. I think the more blue sky you're working in, the more novel the application you're working in, the lower level tools you need. The more your application is just like everyone else's application, the higher level tools you can benefit from.

**Jerod Santo:** Yeah. I think people have said that, like the closer your app is to Basecamp as far as the way it's gonna work, the better Rails is for a fit for your app. Do you think that's fair?

**David Heinemeier Hansson:** It's funny, because most people say that as a point of derision, right?

**Jerod Santo:** Yeah. \[laughs\]

**David Heinemeier Hansson:** And I embrace it. I agree with that point. Yes, the closer your app is to Basecamp, the closer you will be to having the same opinions as me on most things. Now, the point of derision that I don't agree with, of course, is that Basecamp is so very unique, that Basecamp is this special application that is unlike most other applications. I believe that the first statement is true, that Rails is a better fit for you the more your application is like Basecamp, because I also believe that Basecamp is like most applications most of the time, when it comes to the web. In fact, I'll go even further than that, I'll say that -- this is perhaps the point where we cross into arrogance - more applications would be better off if they were more like Basecamp more of the time. And I'm talking about that on a technical level, not necessarily on a UI level, although there is some bleeding going back and forth there.

\[35:55\] I think that there's lots of applications out there that are trying to be needlessly novel in order to satisfy the egos of programmers who do not wanna feel like they're working in cookie-cutter domains, that they somehow attach their self-worth to how novel their application is... And then they create artificial novelness by picking technical stacks and so forth that are off the trodden path, just so they can feel special. That's a lot of third-party remote psychoanalysis, but there it is.

**Jerod Santo:** Yeah, I think there's probably some generalizations in there where, you know...

**David Heinemeier Hansson:** Oh, that's the only thing we can trade in when we talk about programmers as a mass.

**Jerod Santo:** Right.

**Adam Stacoviak:** And now, a word from our sponsor.

**Break:** \[36:42\]

**Jerod Santo:** Let's get back to a little bit of history, I think. 1.0, December 13th, 2005. What was Rails at 1.0? Was it just an ORM with an MVC? What all was in there?

**David Heinemeier Hansson:** It had Active Record, it had Action Pack, Action Controller and Action View, and it had -- I'm pretty sure we had extracted Active Support at the time, too... And we had Rails ties to bind it all together. So we had talking to the database, having a controller layer and having the view. As far as I remember, those were the bits.

We did not have Action Mailer, we did not have whatever else that we had if we did not have Action Web Services, which was a framework that was for a time in Rails... But the major components were there. It's funny, because I looked recently at an old Rails app, and it was surprising just how much I could recognize. There's still a lot of -- I'd say the vast majority of those ideas from back then, they're still there; they're still present. We've refactored them, we've made things better, we made them easier and we built on top of it and extended it in all sorts of ways, but that initial approach, initial architecture has held surprisingly stable over the years, I would say.

**Jerod Santo:** Yeah, it's funny, you have Basecamp, which is the de facto legacy Rails app, right? It's the longest one that's been around, but it's also made the migration step by step. Just to give a little bit of my background - I've been doing Ruby on Rails since about 2006 amongst other things, but I still support a Rails app for a customer that's sitting on 1.1.6. By the time I inherited it, it had been too far gone to get it up, and... It's really a maintenance project, just change this, change that, make sure things don't go down, but that -- what you've just said, it kind of resonates, because yeah, it's antiquated, there's things that are missing, that I go back to and I'm like "Oh, this is death", but the guts are still the same. It's still a Rails app. Not too far gone than what we're working with nine years later, or ten years later for 1.0.

**David Heinemeier Hansson:** \[40:31\] I think that's the DNA. You can recognize the DNA. Because the fundamental opinions about being a full stack framework and an integrated system and the idea of NBC as the basic skeleton and so forth - those decisions remain as valid today as they were back then for Rails, so that's why you still recognize the DNA. We've had all sorts of change, but it's been mostly evolutionary change, and it's been change to deal with new problems that have been thrown at us, less revisiting the core assumptions of the original framework. And that's not by design; I don't feel necessarily better about that.

There's a lot of people who are like, "Oh yeah, I set that five years ago and it's still true. Am I not awesome because of that?" and I'm like, I don't give a hoot whether Rails looked the same 1.0 as it does at 5.0. That's not the important thing to me. The important thing to me is that we continue to work with a framework that we love working with, and we're making it better and we're making it the best it can be at all times. That's really the core for me. I would hate it if Rails was somehow tied to decisions ten years back if it meant stopping us from realizing the best Rails that Rails can be.

There might be lots of people that are like "Oh, Rails is outdated" and they wanna pick a different paradigm or whatever - that's awesome. But at least for me, I wanna feel like Rails is the best it can be today because of what it is. That's sometimes hard. Migrations paths can be long and slow, but I also think that after working on Rails - for me it's close to 12 years now - I have enough faith in it rolling out over time. Okay, so here's a part of the framework I don't like. We're gonna deprecate it, and it's gonna take a couple of versions, but in a year or two maybe it's gonna be better, and I can maintain that that's okay. We can have this long timeline because we know that the timeline up until this point turned out pretty well, right? There's just some confidence you get from working on something for 12 years, that eventually things will pan out if you keep moving forward, which that's really the key. It's so easy to get stuck in the legacy, it's so easy to get stuck with "Oh, these are the past decisions we made. We have to keep them going forward, because it would be too much work to change things and go back", and so forth. I've always retained that is not going to be how we roll... Which sometimes creates work for people -- well, I shouldn't say sometimes. It creates work for people all the time, because when we do learn something new, when we have new and better insights, we change things, which require you to update your application, which means that sometimes upgrading from one version to another takes work. That's the trade, and that's a trade I'm exceedingly happy to make.

**Jerod Santo:** Early on obviously it was just you making commits, and I'm curious if by 1.0 you had contributors yet, but today we see over 2,600 contributors. It takes more than one guy to start a revolution, so to speak, so obviously you weren't the only one involved, at least not after the video went viral... Who were some of those early adopters that really jumped on board, started committing and helping out early on?

**David Heinemeier Hansson:** \[43:59\] Sure. Well, first of all, the 2,600 - that's just on GitHub. We actually track all the way back from when we were on SVN too, and I think we even have some history from CVS, and the full contributor count is I think 3,800. That was the tweet I was tweeting earlier today, it's just a staggering number of people.

In any case - yeah, some of those early people... Quite early, quite quickly I realized when I started talking about Rails on the mailing list that there were indeed other people who worked on web stuff in Ruby at the time, even though it didn't seem so, because it wasn't very visible. Ruby as a thing was not very visible back in 2003.

But I started talking about it on the Ruby Talk mailing list, and I got in touch with a number of people who were like, "Oh yeah, I'm also working on this. Hey, could you send me the early version?" So even before 0.5 was released, a number of people already had the Rails source code. And some of those people were -- I think Jeremy Kemper is next to me, the longest-running Rails core team member. He is all the way back from 2004, I think. And Toby, for example, from Shopify - he was one of the very early members as well.

Thomas Fuchs, famous for script.aculo.us, and he works on Freckle now, and so on...

Let's see, what else do we have on the list here...? Rick Olson - I think he's still at GitHub - did a lot of cool work in the beginning.

**Adam Stacoviak:** Technoweenie?

**David Heinemeier Hansson:** Technoweenie, exactly. We still have those IRC handles on the core alumni list, which is kind of funny.

**Adam Stacoviak:** Well, some may know him less as Rick Olson and more as Technoweenie, so...

**David Heinemeier Hansson:** Right, exactly. And the same thing with Thomas Fuchs, he was Mad Robbie. Sam Stevenson, who I work with alongside Jeremy Kemper at Basecamp to this day was one of the very first core contributors as well. He worked on the prototype back in the day, and of course continues to do all sorts of awesome open source stuff.

Perhaps some of those people are pretty well known. There's a couple other guys that were around in the early days that perhaps the open source community (at least the Ruby open source community) haven't heard from as much. Scott Barron was one of the guys; Florian Weber, who did a lot of the early work on Twitter was on the list. Nicholas Seckar - he did a bunch of the work for the router; I remember the router was one of those things -- as we say, some things sort of have stayed the same for 12 years, and the router is not one of them. The router is probably one of the most rewritten bits of Rails. We've gone through tons of iterations, and Nicholas I think had -- generation two or generation three was his masterwork.

**Jerod Santo:** Nice. One thing I wanna just double back, a question I was thinking of asking when we were talking about the initial release and just kind of got lost in the stuff there was you obviously prepared and you had an advocacy or a marketer's look at getting it out there... Still though, were you surprised by how successful it ended up being?

**David Heinemeier Hansson:** Of course.

**Adam Stacoviak:** Of course... \[laughter\]

**David Heinemeier Hansson:** That would be the height of arrogance, I think, beyond even my capabilities, if I just said "What? What are you talking about? In 2003 I knew that tens of thousands, if not hundreds of thousands of programmers would use Rails over the years." \[laughter\]

**Adam Stacoviak:** I had him at whoops.

**David Heinemeier Hansson:** \[47:48\] Yeah, there's no way that I think anyone could have foreseen that. What I did foresee though was that it was gonna be popular. The reason I knew this was it just felt so much better. I knew pretty quickly into it that "Holy crap, this is not just like 10% better, 15% better than what I was doing before... This is multiple times, if not an order of magnitude better", and by better defined as enjoyable, productive and all these other things. At least for me. And I thought if I'm feeling an order of magnitude jump in productivity and enjoyment, when I release it maybe people won't get that order of magnitude, but maybe they'll get two times or three times; they won't get 15%.

I thought if you're sitting on that kind of leap, there's no way that's not gonna have some uptake, there's no way that people are just gonna say "Meh, I don't care. So what if I can have like three times the amount of fun and be three times as productive...? No big deal to me" - absolutely not. But, it's still a huge, huge jump from that to where we are today.

**Adam Stacoviak:** Just on the note of not being surprised by the success, when we go back the line of the history of Rails, we also sort of indirectly parallel Basecamp too, because they were sort of side by side to a degree in terms of existing. How did the success of Rails lead into the success of Basecamp, and not just so much the product, but the company 37signals, and just how you took that to Backpack, and Ta-da, Writeboard, and all the other things you have done over the years? How did the success of Rails bleed into the success of Basecamp?

**David Heinemeier Hansson:** So one of the things when we started with Basecamp was we didn't have a lot of money, right? We did not take any VC funding; we were funding the development of Basecamp entirely off the consulting projects that we had at the time at 37 signals. And as anyone knows, if you have a four-person consultancy, you're not exactly swimming in cash. So it was simply not an option for us to outspend any competition there may have been on advertising, or anything else that was expensive.

The only thing that we had that we could do was we could share what we learned and we could use that as our marketing. We could build an audience. People were sort of interested in what we had to say, because we were sharing our techniques and thoughts about business, about technology, about programming, and then we were hoping that if they liked our thoughts on these matters, that they would give our product a try. So that was our marketing strategy, very intently so... And Rails, of course, played beautifully into that.

Basecamp was the original application, so anyone looking at Rails usually also looked at Basecamp, because that was sort of the validation. "I don't know about this Rails thing, but I guess if it can make Basecamp, it's worth a second look." I think that's one of those things that is just so important about extractions that frameworks invented out of thin air, or rational idea, and not through experimentation and sort of an empiricist approach \[unintelligible 00:51:21.10\]

Lots of people, they just look at "What was made with this? What can you make with this?", which in some ways is a funny test to put up, because everything is Turing complete; you can make anything with anything. We could still be making websites with Visual Basic; actually, for all I know, some people still are.

**Adam Stacoviak:** I'm sure there's a few.

**David Heinemeier Hansson:** Okay, so you can make anything with anything, right? So it's kind of a funny test, but I think it's also just a very primal one. We wanna see "What was it up to?" and I think at the very least it just lends credibility to the builders. If the first app that was made with Rails was some crappy piece of crap that nobody wanted to use, and it looked terrible and it didn't have any customers and so on, that would have made it harder to sell Rails, of course it would, right?

**Adam Stacoviak:** \[52:15\] We had a similar conversation recently with Rob Eisenberg. He created Durandal, and then recently two JavaScript client frameworks... And Durandal, the product he created with it, it had since failed not so much because of the framework, but because of the business model or the company or whatever - I'm not really sure the details, but I guess that's sort of unique to look at with Rails. It sounds like what you're saying is that Rails may have had some success because of the fact that you always had the great business behind Basecamp, and you always had one shining object at least -- you know, Shopify and many, many others of course; I'm not saying that Basecamp was the only one, because there's plenty of other really good successes out there, but you could always depend on Basecamp to say "Rails is good because Basecamp is good."

**David Heinemeier Hansson:** And there was this symbiotic relationship. Rails derived a lot of legitimacy from being extracted from Basecamp, and Basecamp got a lot of leads because people got interested in Rails. And sometimes people over-subscribe how much truly came out of that; these days, if you ask the vast majority of Basecamp customers do they know what Rails is, I guarantee you that they'll say "What? I don't know what that is", but in the early days it helped, and it helped because when you're sort of trying to get a business off the ground you don't need millions of people, you just need first a few hundred, and then a few thousand... And in those early days I think the association with Rails was part of that larger marketing strategy that we were gonna out-teach the competition. We were gonna share more than anybody else, we were gonna share more of our recipes and more of our technology...

**Jerod Santo:** Yeah, I think if nothing else, it probably helped on the talent side, helped you get talent early. I mean, you've got Kemper and Stevenson still there today, where it probably helped attract developers. Do you think that was the case early on, people that wanted to be working with Ruby?

**David Heinemeier Hansson:** Absolutely, yeah. Yes, we got to cherry-pick some amazing programmers, not just because of Rails, but in the early days just because of Ruby.

**Jerod Santo:** Right.

**David Heinemeier Hansson:** Most people would choose not being paid to do Ruby back in the day. I recall that first RubyConf I went to back in 2004, and I recall asking "Oh, so how many people are being paid to work on Ruby?" and literally I think two hands went up, out of the 40 people there; not exactly a huge sample in any case, right? But there just weren't people being paid to do Ruby... And here we came along, and we were paying people to do Ruby; well, "paying people" - that's even a big word. The first other programmer beside me that we hired at Basecamp was at the end of 2005, I think James Bach. But absolutely, James was working at the time doing Java at some university, if I remember correctly, and here we were, doing Ruby -- he was doing Ruby as a hobby, side thing, but wasn't able to use it at work, and we were saying "Come over here, we'll give you a job doing Ruby."

And of course, even to this day, it's still a great way of attracting people. Basecamp is a place that is still active in open source, still shares and helps steer Rails, and you're gonna get to work on all that. Of course that helps.

**Jerod Santo:** Absolutely. Let's move forward a little bit... 2.0 we said was in 2007; let's look at 3.0, which launched August 29th, 2010. If I recall, that was the big Merb and Rails merge release, is that correct?

**David Heinemeier Hansson:** That's correct.

**Jerod Santo:** Okay. Share a little bit on that; we don't have to go too far into the Merb and Rails history, but kind of how that came about and how Merb affected Rails during that time.

**David Heinemeier Hansson:** \[56:02\] Sure. So at that time one of the big Rails shops was Engine Yard. They were doing hosting for Rails applications, and Ezra started Merb initially I believe - I'm a little fuzzy on the history, but as a sort of "Oh well, if you have some performance issues with these parts of Rails (which was something that they were seeing in their deployments), you can use this smaller, targeted thing." It was kind of -- at least as I saw it, it started more as sort of a Sinatra kind of thing, like "Let's create some microservices for a few things", and then it kind of just grew from there, to the point where a lot of what was going into Merb was just (from my perspective) a bit of a reimplementation of many of the things we had in Rails. When I looked at Merb, I didn't actually see a lot of philosophical differences, I didn't see a lot of things that like "Oh yeah, of course this can't be in Rails." I started wondering, "This is great work... Why do we not have these things in Rails itself?"

If you're making let's say the router more efficient, why wouldn't we just make the Rails router more efficient? So I started talking to people at Engine Yard and -- I mean, it was still a little bit contentious at times, I'm not gonna lie... There was a little bit of -- obviously, Ezra and the team around it, they sort of had a thing of their own, even if they were reimplementing a fair amount of Rails stuff; they had created something standalone, and they had some affinity to that. So it took a fair amount of talks, both with Ezra and with Yehuda at the time to figure out "Do we actually have a shared philosophical base? Are these divisions that we're currently perceiving between Rails and Merb - are they really there? Or are we 'violently agreeing'?" I think it turned out, over a series of conversations, that we were violently in agreement.

**Adam Stacoviak:** There you go.

**David Heinemeier Hansson:** That the Merb group was focused on a number of real performance and other issues that we just hadn't addressed. It wasn't because we didn't want to address them, it was just because nobody had done the work... And here came a group that did the work. So we found a way to make that happen together, that that work could happen in Rails, and we could make Rails better. Since there were no philosophical differences, why should we have two frameworks pursuing the same philosophical goal? In my mind, competition is great when it's a competition of paradigms or it's a competition of different philosophical goals. Sinatra is a great example; Sinatra is so obviously not Rails. It's trying to pursue a very different path, that is tangential or sort of separate, not overalapping directly with what Rails is doing, so that makes sense as its own thing. Merb was moving in a direction that was far more like a reimplementation of Rails, to a large extent... And we just did the reimplementation in Rails.

We spent the time and ported over a bunch of these Merb advances in efficiency and so forth, and Rails turned out to be stronger for it. And we got some new members on the core team, and we enlarged the community, and we didn't splinter the community. I think some of the pains, for example, that Node is currently going through with Node and I/O, that split, we were able to...

**Jerod Santo:** Avoid it.

**David Heinemeier Hansson:** At least fold back in. We didn't avoid it 100%, because there were six months perhaps where there was some contentious debate back and forth, and splitting of the community, and in the end we ended up folding it and Rails turned out to be better for it, and everyone turned out to win, because we now had one strong ecosystem, that was even stronger.

**Jerod Santo:** Yeah, not doubt the community bolstered and not divided is a huge win. What were some of the technical wins, in your mind, of the merge?

**David Heinemeier Hansson:** \[01:00:05.29\] Efficiency. I'd say efficiency and extendability, to some extent. There was a perception that the dish of Rails, the 21 course meal, was completely fixed and that the chef would accept no substitutions, and that was not my opinion at all. It was my fault, obviously, for allowing that perception to be adopted out there, but what I just said was "Substitutions are fine, it's just not something I wanna work on. If you wanna work on it, if you wanna work on making it easier to swap in another testing framework, more power to you. I'll totally welcome your work. It's just not something I'm gonna spend my time on", and that was initially taken and my fault for not making that clearer, that the position was just not one that's saying like -- "Don't petition me to do it, because I'm not gonna do the damn work. Do you wanna do the damn work? Wonderful, we'll get along swimmingly", and so we did. We erased some of those misconceptions that had arisen, and we got a lot of extendability in for it.

I think it was after Rails 3 where RSpec, for example, didn't require a lot of monkey patching to do its work, because we had the hooks and extension points to make it possible, and we got a bunch of efficiency gains; I think the router was one of the things where a bunch of work went into that, and I think also in other places... They had just done some optimizations, because Engine Yard's work on Merb arose from watching a lot of people deploy apps on their platform and just falling over, because they had done something that either was inefficient, or -- they exposed inefficiencies in the framework, so they had a lot of data on where this went wrong, where I didn't have that data. I was sitting on the data from Basecamp, and when you were using Rails to build Basecamp, I wasn't hitting any of those things, right? And that is the power and wonder of a broad tent, of a broad community - everyone gets to bring their improvements to the table, and they can improve things even if I do not hit those problems.

So I was not hitting a lot of these issues, and still Rails became better. And maybe I was going to hit those issues three months later, and then I was thankful that they had done the work.

**Adam Stacoviak:** Just to clarify there, it sounds like Merb was created by Ezra and Yehuda when they were working at Engine Yard because they thought that you as the chef wouldn't welcome the additions to the menu - is that right?

**David Heinemeier Hansson:** That's part of the reason, yes.

**Adam Stacoviak:** Okay.

**David Heinemeier Hansson:** And that is a failure of open source governance. One of the things I took away from that was it's very easy to cultivate this perception of elitism, that there is this hallowed core of Rails developers - they make all the decisions, they take no input from anyone and anyone who posts contributions is gonna be ignored. To be honest, some of that was true. Some of that was true simply from a perspective of "Who's going to review these pull requests?" I was not gonna do it. My contribution to Rails has always been "I'm gonna put in my contribution to Rails. I'm not gonna spend that much of my time to review other people's contributions." Again, that was taken as "Well, you don't want contributions." No. I just said I don't have enough hours in the day to manage both Basecamp, run it as a business, program the application and put all the extractions I take from that into Rails, AND also do all the work with the pull requests.

We need a larger team of more diverse interests where some people find great pleasure and value in doing the review of contributions work, and we have that today. That's basically what I was celebrating when we were talking about the 12,000 pull requests process. There was no way that was gonna happen back in the Rails 2 days, because we just didn't have the bandwidth as a community to adopt that and deal with it, and we learned a lot from it.

\[01:04:10.19\] I think that the path today for new contributors is it's a lot nicer and friendlier than it was back then, and that's prevented us from running into the same issue with the next splinter group we thought that their input wouldn't be valued.

**Adam Stacoviak:** And now, a word from our sponsor.

**Break:** \[01:04:30.07\]

**Jerod Santo:** So there were a lot of changes that went into 3.0 around the modularity, and yet I think 3.1 was probably a bigger deal as far as upgrade trouble. I think GitHub famously stayed on the 2.3 (I think) branch for years because of difficulties upgrading. Most of that I think was around the asset pipeline. Now, to me the asset pipeline was a great idea and somehow a terrible idea all at once. Take us back to the time of the asset pipeline - who's idea it was? How was it implemented? Just give us kind of a gist of how that rolled out.

**David Heinemeier Hansson:** Sure. First of all, I don't think that the upgrade trouble was from the asset pipeline. The asset pipeline was an optional piece from day one; it still is. The difficulty was definitely from 3.0, because in 3.0 we just changed a bunch of APIs, and we had to to make those extendable points that people from the Merb camp wanted to bring to the table.

Some of the optimizations - they had API changes behind them, too. So we were changing a lot of internals, and when you change a lot of internals (and we had a lot of changes like that), it just becomes harder to upgrade, and especially it becomes harder to upgrade if you have a Rails 2.3 application where you've made a lot of modifications to the framework yourself, because those modifications no longer work. If you were digging into the internals of the Rails setup, those internals just got blasted to smithereens.

The upgrade from 2.3 to 3.0 was not actually terrible if you had no extensions to the Rails framework, but they were brutal if you had deep extensions to the Rails framework, because so much of the internal implementation changed, and that's of course exactly what a lot of big shops had... Because Rails 2.3 just didn't address as many concerns as Rails 4.2 does, and a lot of people at the time were making do with their own attachments to those implementations, and they weren't necessarily pushing that back upstream.

GitHub might have all sorts of extensions to let's say Active Record that dug deep into the bowels of how the query engine worked or something like that, and then if the query engine changes, then those didn't work anymore. So I think that was the core of it. But I think the asset pipeline is still a good story, because it was one in a long series of adoptions that Rails has made that was not universally liked at the time. Before that it was REST, and before that pluralization was one of the earliest ones I can remember having controversy around.

Rails has a very long history of making extensions to the framework and meeting resistance from certain camps, that like "Oh, this is not Rails' responsibility. You should not address this. Somebody can just deal with it in Gems or elsewhere", and the asset pipeline was certainly one of those things.

\[01:08:08.13\] I'm still a little fuzzy on what the actual core of the opposition was about, because at least as I saw it, the asset pipeline made it easier for us to deal with JavaScript and CSS in a structured manner, instead of just dumping everything into public. But I think the problem with the asset pipeline for a fair number of people was that it came a little too late; it came a little too late in the sense that they had already tried to hotchpotch their own solution to the problem, with their own in-house toolchain, and now here comes Rails and puts this into the core and all of a sudden they have to change from their own internal toolchains to something else, and that's a little painful.

But there's that, that's the practical concern, and then I also think that there was that philosophical concern, and we had that every day. Almost every week there's somebody in a pull request saying "Why does Rails need to do this?" Well, because it's better. Because Rails is better when it also addresses this issue. Is the handling of CSS and JavaScript assets, is that not something that most applications need to do most of the time? Of course it is. And since it is, we should make that experience as painless as possible, which perhaps that is the third point... The asset pipeline was a fair amount of work, and as any fair amount of work, it had rough edges, it had edge cases. And people would hit those edge cases that I hadn't hit and other people working on the asset pipeline hadn't hit, and they would think "Oh, it's broken." They confused hitting a bug with "Is this a fundamentally good idea?"

That reminds me of another big schism we had in the Rails community, which was the adoption of Bundler. I think actually the adoption of Bundler came with Rails 3.0.

**Jerod Santo:** I thought you were gonna say CoffeeScript.

**David Heinemeier Hansson:** That too, but that just follows the same pattern, so to me it's less interesting. I think the Bundler one was even more interesting, because the parallels to the asset pipeline are even clearer. To me -- I think it was probably Yehuda that showed me this, or maybe it was in a conversation with Yehuda, but very quickly after I saw Bundler I thought "This is obviously the solution." Obviously, there should be a way to declare your dependencies and have a way to resolve them, and that should not be checking in a copy of the engine you want to work with in your own source tree. That's a shitty solution. But there was so much pushback around Bundler, and a lot of the pushback came from "Bundler was broken", because Bundler was early and Bundler is solving a substantial problem, so there were just a lot of bugs in the beginning, and someone would get bitten by two or three Bundler bugs and they'd think "Bundler is a terminally flawed idea that cannot be trusted. Rip that s\*\*t up", right? And that's what they would take away.

It's funny, because this was not just novice users of Rails that had this opinion. I had epic debates with Jeremy Kemper over Bundler. He did not see the underlying value in Bundler for a very long time. There were some philosophical differences there too, which goes back to the debate of UNIX versus integrated systems, which was - I from the beginning said "I want (or rather I desire) the Rails dependencies to work as a bubble." When I declare that my Rails app uses this plugin, it should just be available. I don't wanna use 'require'. That's one of the underpinnings of most programming languages - you're explicit about your dependencies at the individual, sub-atomic level. In the individual file that uses a certain library, you include that specific library. I remember from my Java days where you'd just see those...

**Jerod Santo:** Imports, like a bunch at the top.

**David Heinemeier Hansson:** \[01:12:06.24\] Imports at the top of the file, and they would just be like pages long, and I thought "That is just retarded. That's not how we're gonna play this game over here", and we didn't... Like, today in Rails, most Rails applications do not call require very much. Everything is auto-loaded when it comes to your own models and controllers and helpers and so forth, and even the default for Bundler is to auto-require the gems such that it's loaded at boot... Which I thought was a universal good, lots of other people did not at all think that that was a universal good. So that took months (if not years) for that to become established practice. Today, of course, it's a total non-issue. Nobody is going back and saying "Oh, I wish Bundler didn't exist. I wish I manually had to assemble my dependencies" and so forth. The debate is over, and we moved on.

I think to a large extent the same is true for the asset pipeline. There are still some holdouts who have their own build pipes, but I think that the opposition moved on to a different spot, which is more around what should Rails do with client-side MVC, and how should it deal with that kind of stuff. Now their sort of new \[unintelligible 01:13:16.20\] position there. But the asset pipeline itself, for the use cases that Rails uses it for, that's no longer a point of controversy.

**Jerod Santo:** Right. The controversy nowadays, as you said, is on how Rails handles fat JavaScript clients, and how that plays nice in that ecosystem which is becoming more and more popular as time passes... So how does it play? How now and how in the future will it handle JavaScript?

**David Heinemeier Hansson:** So there's sort of two approaches there. One is some introspection about how large the Rails tent should be. At various times, I've been flip-flopping back and forth on this issue - should the Rails tent be so large that Rails is still a great fit for API-only servers, where Rails is not at all concerned with what the whole view aspect of things look like, which is kind of what the client-side MVC setup is, right? Treating Rails just as an API server. And for some time I thought "Well, that would dilute what Rails is and what it stands for." I've changed my position on that; I don't think that that's true anymore. I think whether you're doing client-side MVC or you're doing server-side generated HTML with JavaScript sprinkles, which is another term I love, because both sides see that as a -- it's a point of derision and a point of sort of praise at the same time. I love those terms. I love when opponents of the same idea can agree on the terms; it's kind of like Obamacare.

**Jerod Santo:** \[laughs\] Right.

**David Heinemeier Hansson:** Both sides can think that's a good term; that's one of those rare moments I think it's great. Anyway, the appreciation I've come to is that we share far more than we're different, so what if we don't generate the view in the same way? To me, in many ways, it's a bigger point, but it's related to, say, some people like Haml, and some people like ERB. Okay, so some people are gonna build their application in client-side MVC. Why should we not collaborate on Active Record, on Action Mailer, on Action Controller? Why should we not collaborate on those things? Just because we're different on how the view is generated? The Rails tent is large enough to fit people who want to build client-side MVC. Of course it is.

I can divorce that from my own personal opinions about how suitable or not suitable client-side MVC is for a large swathe of applications. I personally want to build my applications in that fashion.

**Jerod Santo:** Right.

**David Heinemeier Hansson:** \[01:15:53.09\] I think that's a key foundation of why Rails is such a big success, is because we've found a platform where many people can collaborate even if they disagree on some of the particulars. We're not blowing up the community just because there are different opinions on the value of client-side MVC. We share so much more than that, and I think that that's some of the fragility of certain small-tent open source projects, where they consider "This is the way. This is the only way." That's not how Rails is. Rails comes with a set of defaults; those I am far more particular about how they should be structured... But as we've just talked about, so what if you don't want dish number seven? You like the rest of the menu, right? We can agree on the rest of the menu, and we can still eat at the same restaurant and have a good time. That's what Rails is.

I think going forward, we're gonna make it even easier for people who want to say "Rails, I don't give a hoot what you have to--" Actually, let me restrain that - "I don't give a f\*\*k what you have to say about the view", which is often the level of contentiousness that we have in these debates.

**Adam Stacoviak:** Well, we couldn't get through the whole show without that, right?

**David Heinemeier Hansson:** No. "I don't give a f\*\*k about what you have to say on your opinions on the view, it's just... I'm not gonna follow that, and we can still be friends. We can still be friends. And we're gonna move towards that..." So the practical matter of that is perhaps less than the cultural matter. The cultural matter is basically Rails saying "You guys have a home here, too. If you wanna make a client-side MVC app where Rails does not generate any views whatsoever, fantastic! Come over here and I'll pass you the salsa." It's still gonna be a good party, and we can still work together at making Active Record better, and making all these other--

**Adam Stacoviak:** "I'll pass you the salsa", I love it.

**Jerod Santo:** So what does that look like? Does it look like you flip a switch in a config and just a whole bunch of stuff gets turned off?

**David Heinemeier Hansson:** Yes, I think so. I think it's like $ rails new myapp--api, or something like that, where it just does not include all those bits and bobs that relate to build logic and the generating of HTML, and the asset pipeline. Those things are just not relevant if you're treating Rails purely as an API server.

**Jerod Santo:** That sounds like a good idea to me. I've built Rails API servers and enjoyed using Active Record and Action Controller, and just not having a view layer rendering JSON; it's nice, so I'm glad to see... I used the Rails API project, which is a slimmed down version, so it's nice to see a lot of stuff is gonna get into--

**David Heinemeier Hansson:** That's basically the foundation, that's the spike.

**Adam Stacoviak:** So maybe we can pause for just a second... If someone out there is working on a project that does what Merb did in the past, which maybe now has come to the table with the same opinion as you, they're something different that's an offshoot of Rails or a forked version of Rails that is better for API, how could they come back into the fold?

**David Heinemeier Hansson:** I think the funny part is that the offshoot that we have is the Rails API project, which Yehuda and a bunch of other...

**Jerod Santo:** Steve Klabnik...

**David Heinemeier Hansson:** Yeah, Steve Klabnik and a bunch of others were involved in... That's probably gonna be a large part of the foundation of it. I wanna put a little bit of work into a serialization project that they've been using. One of the points of disagreement has been JBuilder versus...

**Jerod Santo:** Active Model Serializers?

**David Heinemeier Hansson:** Yeah, Active Model Serializer. I think there's values to both of them. I think JBuilder's probably a better fit when an API is just one of the things that you're doing, along with everything else, and then I think the serialization project makes a lot of sense when you're just building an API and you always want the same representation in all of your API setups. It works very well for, let's say, something that Amber expects. So we'll figure that out.

Again, there's no underlying fundamental philosophical differences here, and I think that that's a key realization that you have to make to be able to have progress and stay in the same tent.

**Jerod Santo:** \[01:20:01.06\] That's great. So is that Rails 5 stuff, or is that beyond Rails 5?

**David Heinemeier Hansson:** I'm hoping it's Rails 5, yup.

**Jerod Santo:** Awesome. What else is Rails 5? I saw on Twitter you were mentioning native websocket support. Is that...?

**David Heinemeier Hansson:** Yup. So I'm working on a bunch of new stuff for new ideas in Basecamp, and a ton of stuff is spilling out from that, and I'm super duper excited about putting that into Rails 5. Rails 5 I think in terms of breadth of features and what it's going to do, it's gonna be one of the biggest upgrades in Rails' history. I think at RailsConf I'll be ready to talk about that in more specifics, because I'm really just in the depths of extraction right now, still trying everything out and figuring out... It's a little premature to kind of announce anything in particular... Just to say that the things that I care about working on these days is the web applications beyond the desktop; making a desktop web experience is just one facet today of any major application, and any major application needs to address mobile applications, native applications, and how can you do that in a way where you're most productive and having the most fun and so forth. We've done a ton of work there now, and it's gonna be great to be able to share that.

I mean, I've already shared a bunch of sort of the fundamental ideas, which is the notion of the hybrid app, where you have a native shell that works on a lot of web view HTML content that's being served straight from a Rails app, and it's basically just third, fourth and fifth generation of that stuff.

**Adam Stacoviak:** And now, a word from our sponsor.

**Break:** \[01:21:45.24\]

**Adam Stacoviak:** RailsConf is 21st-23rd April this year. That's a couple months away.

**David Heinemeier Hansson:** Yeah, it's pretty close; it's not that far away. It's good, because we're also just at that point now where it's not like Rails 5 is gonna be released at that point, but it'll give me just enough time to collect my thoughts on the matters at hand, and be able to present something cohesive. I think a lot of people are gonna be excited about it, because I think -- again, Basecamp is not a unique snowflake; tons of other shops are getting exactly the same problems. We wanna serve the web, and it should be a great experience on the desktop, in a browser, but that's not enough anymore. We have to deal with native applications and so on, and how do we do that without either ballooning our teams to have these mega departments that just make native applications, or is there a different way that could work for a lot of applications? I absolutely believe that there's a different way.

**Adam Stacoviak:** \[01:24:10.17\] Well, if we're looking at the timeline of the releases, 4.0 was out June 25th, 2013, so how far -- do you often do that? Do you look back and like "Well, we've gotta release a new major release every two and a half years, three years", or do you just do it whenever it's ready?

**David Heinemeier Hansson:** It's funny because it's pretty much yesterday's weather. We came up with the internal clock that says "We should make a new point release every six months or so, and we should make a major release every two years or so." And how did we come up with that? We did not just sit down and...

**Adam Stacoviak:** Guess it...?

**David Heinemeier Hansson:** Exactly, guess it. We look back at yesterday's weather and we realize "Oh, that's how it's been turning out so far." It's been roughly two years between major releases and roughly six months between part releases, so let's just make that the policy, since that's what we're doing anyway. So that is thus the policy, which also means that Rails 5 is the next release. That is what Rails master is pointing at right now, and it's turning out that that miraculously is a great fit now, because we just have all this new stuff coming in.

On top of that, of course, Ruby 2.2 came out, and Rails 5 is going to be a Ruby 2.2+ exclusive. So Rails is gonna do its part to bring along the Rails community to use the latest version of Ruby.

**Jerod Santo:** Does Basecamp track master, or is it sitting on 4.2?

**David Heinemeier Hansson:** We have new developments for Basecamp that are tracking master.

**Adam Stacoviak:** Oh, okay...

**David Heinemeier Hansson:** We'll see how that stuff plays out.

**Adam Stacoviak:** Well, you're invited back on the show whenever you want, David. There's several offshoots to this conversation I'm sure we could have gone down, but we've been trying the best we can to cling to this 10+ years of Rails, and... I mean, in 10+ years you've got so much to cover that we really had to restrain ourselves from going down too many rabbit holes, but you're welcome back on anytime... Anytime you can make time to come back and talk through some of these offshoots.

One of the things that I kind of wanted to talk through just real quick was just looking back at these ten years, today thank you for going through some of the - either accidentally or in preparation for this call - you know, mentioning 3,800 people contributed to the core Rails framework; you talked about how many pull requests that have gone out there... There's still 419 open, but there was 12,000 pull requests processed; that was in the preamble, and we're gonna try and somehow get it out there as an audio clip. But 12,000 pull requests - that's crazy. We've talked about the man hours behind that...

One specific thing that I think I wanna ask you before we go into a couple closing questions - and I think it's because you share so much wisdom because of this 10+ years, is you mentioned Node, you mentioned io.js earlier... We've recently had Mikeal Rogers on, who heads up io.js, among many other people. We've invited Scott Hammond on from Node, the CEO of Node, to come on this show and talk about--

**Jerod Santo:** Joyent.

**Adam Stacoviak:** Yeah, sorry, Joyent, not Node. My bad. You know what I'm talking about. But we've invited him to come on the show and talk about the Node Foundation, what that's gonna be like... But what advice can you give that community as it relates to what you've learned from the Rails and Merb merge, and just in general these past ten years, when it comes to community, vision, opposition, good competition...? As you mentioned, Sinatra is not exactly a competitor, but it's a good-- you know what you said earlier...

**Jerod Santo:** Alternative.

**David Heinemeier Hansson:** Complement, or alternative, yeah.

**Adam Stacoviak:** So what advice can you share to that community, before we close another couple other questions we have for you?

**David Heinemeier Hansson:** \[01:27:52.16\] First of all, good luck. I think it's incredibly tough. Even just the -- I don't know... Spat, perhaps you could call it, at the hype of the Merb and Rails stuff. It was tough, and that was a very -- that included... I mean, yeah, there were two communities somewhat, but the core actors in the thing - it was a very small group of people, and yet it was still very hard. There was only one company involved, Engine Yard; on the Rails side there was no specific company, it was just the Rails core group... And that was still so hard, and it almost didn't happen.

So to think, like, just the amount of corporate, enterprisy stakes that have been placed in the Node camp - I cannot even imagine the complexity of that. It's kind of like trying to peace broker -- like, "Oh, let's have universal peace across Africa. Let's invite all the countries, sit down at the table and we'll figure it out." I mean, damn, good luck. It's a very hard problem. Somebody deserves the Nobel Peace prize if they can bring that split back together. I don't think it's gonna happen.

**Adam Stacoviak:** So good luck is what you're saying. So you're predicting potentially that io and Node will continue to be forked.

**David Heinemeier Hansson:** I think that that is the most likely outcome, yes. And again, I don't have any particular insight into any of the organizations, short of observations of the -- I mean, I've gotta laugh just a little bit, when the press release (I think it was from the Node Foundation) came out and you've got like "Oh yeah, this is Microsoft, and PayPal, and IBM" and I don't know, it was Prudential, or some financial institution or something... And just go like, "F\*\*\*\*n hell..." Can you imagine sitting down for a meeting with that level of stakeholder enterpriseness and just go like -- Jesus Christ, anyone who can sit through that is a more veteran person--

**Jerod Santo:** Diplomat.

**David Heinemeier Hansson:** Yeah, that was the word I was looking for - is a better diplomat than I would ever be. I mean, it just seems like such a hard intractable problem, I just don't see where the solution is gonna come from there. But also, it's not the end of the world. Obviously, Node and io, they have great momentum...

**Adam Stacoviak:** I think it's not a technology problem, it's a community problem they're dealing with... Not so much a technology problem at all, right?

**David Heinemeier Hansson:** Oh, absolutely.

**Adam Stacoviak:** It's about -- as you said earlier, you slapped yourself when you said "I want", and it's really about desires. Both camps have different desires and both camps have different places where the money is coming from, which sort of -- so let me ask you this one quick question and summarize that... So your advice is plain old "Good luck."

**David Heinemeier Hansson:** Well, that's not real advice, is it? \[laughter\]

**Adam Stacoviak:** Well, of course, that's your response to the question.

**David Heinemeier Hansson:** My advice is that there's not much I can offer to this.

**Adam Stacoviak:** Right, okay.

**David Heinemeier Hansson:** You're gonna be more likely to get advice out of a U.N. diplomatic envoy or something, and how they've dealt with the intractable problems of world peace, than you are with getting it out from my experiences. They're just not even at the same scale.

**Adam Stacoviak:** Well that's something to make sure of, you're not really giving advice, you're just sort of "Meh, I can't really give much, so good luck."

**Jerod Santo:** Commenting, yeah.

**Adam Stacoviak:** Okay.

**David Heinemeier Hansson:** It's accepting the limitations of my abilities, and my abilities to solve a problem at that epic scale are truly limited. It's kind of like saying, "Hey, you once broke up a schoolyard bully fight... Could you help out with the Palestinians and the Jews in Israel? They could really use some mediation." I'm just not qualified at all to deal with that level of mediation.

**Adam Stacoviak:** \[01:31:43.24\] Well, let's talk about some things you are qualified. We've got two core topics real quick; I don't think they should be long at all... Let's keep them as short as we can, because we're really getting -- basically, we're coming close to being over-time, but two things we can't leave this conversation without talking about, which is getting paid to work on open source... Since Rails has got so much breadth, and we've just talked about Node and the enterprise level, money being involved, things like that; you've put out a couple tweets recently that, you know, I kind of knew where you stood, but you've got a clear opinion on getting paid to work on open source full-time...

I'm just pulling some quotes from recent tweets from you, so they're your own words. "Rails is obligation-free software" is something you've said before. You \[unintelligible 01:32:29.16\] you've had a couple conversations recently, but you've got a clear opinion on getting paid to work on open source. Can you kind of summarize how that's played out for Rails?

**David Heinemeier Hansson:** Sure. First of all, my opinions stem from observing open source software largely within the web community. Some of the opinions that I have do not extend to other domains of software, do not extend to other aspects of software even. Some aspects of software and some domains of software actually work quite well with people being paid on open source.

I'd pull out security bounties as one example that has worked quite well - paying people to find vulnerabilities in your software; it's an area where if you did not pay those people, those vulnerabilities often would not be found. You're not taking something away that otherwise would have happened.

I think a lot of where I went sour on paid open source was watching much of the consulting business that sprung up around certain particularly JavaScript frameworks, and the complexity that came with that... And seeing what happened to API design when the API designers were removed from working on things themselves and were only working on them by proxy... That they were either just helping out clients or whatever, but they did not have long-term stakes in particular applications, and I did not like what I saw. And on top of that, I've been heavily influenced by a variety of research on sort of rewards.

There's a great book called Punished by Rewards (by Alfie Kohn) that deals with what happens to intrinsic motivation once you introduce extrinsic benefits, sticks and carrots. And the answer is it is not pretty. Often times money does corrupt things; it also facilitates things and it also has upsides, but being blind to the downsides and being blind to what it does to intrinsic motivation - that's not gonna do you any good either.

In certain domains, again, as I said, it doesn't matter. If somebody's finding a security hole, do you really care whether they were intrinsically motivated or extrinsically motivated? Perhaps not. If you care about keeping a framework like Rails going for 10+ years and not turning into consultingware, you do care. I care. And that's why for all this time we've rejected thoroughly that Rails was going to be driven by professional open source. Again, that doesn't mean we can't have and get value from some aspects of professional open source, and professional open source - I mean people who just work on open source. We do have people...

**Adam Stacoviak:** Right, full-time. Getting paid full-time to work on it.

**David Heinemeier Hansson:** Yeah. Aaron Patterson (tenderlove) has been paid to work on open source software for quite a while, and Rails is so much better because he is helping us, and being part of it, not just helping. He's an integral part of Rails today. So that's good. With all respect to Aaron, I don't think Rails would be the Rails it is today if the core group consisted entirely of professional open sourcers.

\[01:36:08.10\] I think that there are certain aspects of the professional open sourceness that work really well, and Aaron has done a superb job at improving implementation, making things more efficient, making them better, making them clearer on the internal side of things.

Dealing with API design, which is a large part - and perhaps the majority part of what makes Rails Rails, the DNA of Rails is the API design; that is an aspect I feel fares quite poorly in professional open source context, where somebody is being paid full-time to work on it.

**Jerod Santo:** What changes when you're being paid with your API design? Just because you have to answer to somebody, or...?

**David Heinemeier Hansson:** There's that; there's the fact that you get removed from sort of extracting problems. You're note extracting your own problems anymore, you're doing things on behalf of others.

**Jerod Santo:** You're isolated...

**David Heinemeier Hansson:** Well, I don't know if you're isolated, but it's just -- it's different to...

**Adam Stacoviak:** Motivations change.

**David Heinemeier Hansson:** Motivations change, but even the specific of the design changes. When you're making API's where you're imagining what somebody somewhere might want to use is maybe different than when you're extracting what you actually did use and what you actually did need for that particular application. So that's where those things are -- and the other thing too, it's a continuum.

I'd say the majority of -- actually not the majority, all of the people who work in Rails core, they are professional open sourcers to some extent, in the sense that they're being paid by their company to also put contributions into Rails, at least some of the time.

So it's not this hard line, I think... There's a place of the continuum where it tips, where you have too many people who are being paid to work on the open source on behalf of other people, instead of doing their own extractions from their own work, and that's where things in my opinion tend to go downhill.

**Adam Stacoviak:** Balance. You're really calling for balance.

**David Heinemeier Hansson:** Well, I am. I am calling for balance, and I think that that's also -- this is the nuance we can discuss when we don't have to boil things down into 140 characters, but...

**Adam Stacoviak:** Yeah, exactly.

**David Heinemeier Hansson:** The two flipsides is sort of "What happens to API design when you're being paid to work on behalf of somebody, versus when you work on your own stuff and extracting it?" And then secondarily, what happens to motivations, particularly around -- that's not so much the full-time dilemma, I think, as it is a dilemma of kickstarters and fundraising for individual projects, and sort of what that does. And Kohn's book is a great place to start for anyone who wants to look into the psychology of that.

**Adam Stacoviak:** Yeah, I found a link for that, so if you're listening, we're gonna put that in the show notes. So just camp out at the show notes; this is episode \#145, so go to changelog.com/145 and you'll find show notes there, if not already in your podcast listener/catcher thing or wherever you're listening to it.

David, one last question - we've had you for so long; we appreciate you taking the time to... I mean, again, 10+ years - you can't cover it quickly, so it's kind of... I don't wanna apologize too much, but you knew what you were in for.

The one thing I wanna clarify here, and I'm really glad this question came up today because this is what I wanted to clarify before we closed the conversation, which was to reinvigorate the community listening on leadership around Rails, and the question came to you just haphazardly today; three hours ago someone said "I remember running Rails 1.3 in production. So many hands had done good and bad in Rails, and it badly needs leadership again", and your response was "I think Rails has never been in a better position regarding code, community and leadership... Broader and more engaged than ever." Can you expand on that 140 that you had to condense it down to, with regards to the leadership around Rails?

**David Heinemeier Hansson:** \[01:40:10.05\] Sure. I think the group that we have - both the core group, but more importantly the contributor's group, the people who are invested and engaged and interested in working on Rails for more than just a single issue is richer, more diverse, broader and more skilled than it's ever been. When I look at the contributor's channel, when I look at the activity that we have on the pull requests, when I look at the stats we have for processing pull requests, and finally, when I look at the result of the Rails framework that I am so happy to get to use almost every day, it's just inescapable that it's never been better. Of course, that's my opinion - somebody can have a different opinion - but I would be the first, I guarantee you, to lambast if that was not the case, if I felt that things were heading in the wrong direction.

Rails does not mean anything. If I thought Rails was - as one famous blog post put it in (I think) 2007 - a ghetto, I'd just get the hell out of dodge. I don't need to continue to work on Rails. I continue to work on Rails only because I enjoy it, and I enjoy it in very large parts because of that community, because of that leadership group... And the leadership group -- that's not even that interesting to me. It's the collaboration group that's interesting to me. You're gonna have a strong leadership group, but if nobody wants to work with you, what are you leading? If you're all chiefs and no Indians, then you're not going anywhere. I mean, that's not even a good division right here, because good ideas are good ideas, regardless of where they come from.

What I see - I just see more good ideas flowing into Rails than I ever have, and that's why it was so shocking to me actually to see just the magnitude of that, when we look at those 12,000 pull requests, when we look at the almost 4,000 contributors... That is just an avalanche of good ideas, and I am incredibly thankful still to be able to partake in.

And I also think that we've just learned a lot over those ten years, that we have a much better process these days for having somebody show up at the Rails store and say "I kind of like how this looks... How can I help?" That path today is much better than it's ever been.

What led to Merb was I think in large part because that path was not clear at all, it was not illuminated; you could find it if you had a machete and you were willing to cut through the jungle. Today's it's a freakin' highway. You drive on it, and then you just keep on driving, and things just get better and better. And I think you see that when you also look at the number of new contributors that continue to flow into Rails. The pull requests are not just being opened by the same people; it's not the same group of 4,000 people. Every single month (if not week) we have new people who show up with their first pull request and say "Hey, guys. What can we do here? How can we work together?" and that's great.

The process has just gotten so much clearer over the years, and we've ironed out so many of the bugs in that. Friction of contribution is way, way down, which means that the flow of ideas is way, way up.

**Jerod Santo:** \[01:43:45.25\] Awesome, David. Well, we could probably keep you on the line all afternoon and just keep going down these different rabbit holes... I know I could, but...

**Adam Stacoviak:** We're not gonna do that.

**Jerod Santo:** We're gonna let you go with one closing question - we ask this to all of our guests; in fact, I think a few past guests have probably named you as their programming hero, so it'd be interesting to hear what you say here... If you've got one person - or if you've got a couple, that's fine as well - that you look up to in the community, who is your programming hero?

**David Heinemeier Hansson:** Sure. I definitely have to mention more than one. I'd go back to those early days, 2003, who were my main influencers, and I'd say it's Ward Cunningham, Kent Beck, Martin Fowler, Dave Thomas... That's probably a good group, just sort of rattling off of the top of my head, of people who really left a very large impression on my work, and I am ever-grateful to have learned - and still be learning - from these great programming heroes.

It's very satisfying for me to see that all of them are still kicking hard and pushing out great ideas that I continue to be provoked, inspired and motivated by.

**Adam Stacoviak:** Well, David, like I said, we definitely appreciate you taking so much time out of your Friday, close to drinking time -- or I guess if you're in Malibu it's not drinking time yet for you, but maybe, who knows? You might have been having some wine during this call, but...

**David Heinemeier Hansson:** I had a kombucha just before we got on, so...

**Adam Stacoviak:** There you go. Yeah, we definitely appreciate you taking so much time; I mean, 10+ years of Rails... Congratulations to you and everyone who's been a part of Rails, both as someone who's used it to build an application, or someone who's contributed back, to the companies that sponsored people being involved in that community... What a great legacy there is here, and I'm sure we're all excited about your talk at RailsConf here in April, and Rails 5 coming up, and all of the stuff you got to talk about today.

Thanks again for so much... So much you've put into it too, and just the time you've taken to come on the show today. Is there anything you wanna close with on your side, by any means...? Like how people can find you, how people can follow you if they don't know, or anything you wanna mention in closing?

**David Heinemeier Hansson:** Sure. So first of all, I'd say I wouldn't have been doing any of this work if it hadn't been for my pleasure, and it certainly has been and it continues to be. I continue to be involved in Rails because I'm enjoying it, not because of obligation, not because defending some legacy or something else... Simply because I'm having a lot of fun and I'm enjoying myself a bunch.

If you want to follow me, I guess Twitter @DHH will flood your timeline with all sorts of opinions on both matters of tech and politics, so I think -- there's probably even people who have heard me on some tech podcast, who then started following DHH, and thought "Hey, whoa-whoa-whoa, I did not sign up for your opinions on national security, or whatever..."

**Jerod Santo:** \[laughs\] Buyer beware.

**David Heinemeier Hansson:** Exactly. Fair warning given, if you choose to do so... But that is the main place. And of course, Signal v. Noise. Signal v. Noise is where I continue to blog about new techniques and so on. It's signalvnoise.com. And finally, my own personal website is david.heinemeierhansson.com, which you can probably not spell, so better click the link in one of the notes accompanying this podcast.

**Adam Stacoviak:** Yeah, we'll definitely link out to that, for sure. You're also DHH on GitHub, or did you have to do something else for that...?

**David Heinemeier Hansson:** Nope, I am DHH on GitHub. Yeah, I guess that's a good place to follow me, too. It's mostly Rails commits, obviously.

**Adam Stacoviak:** As GitHub makes the personal timeline of who you follow better and better over the years, it'll be more rewarding to follow you and see what you're commenting on and all that good stuff.

**David Heinemeier Hansson:** Sure.

**Adam Stacoviak:** David, again, thank you so much, and to all the listeners, thank you for tuning in for such a long show. It was a pleasure to have David on. I know 10+ years is a long road to go down, but thanks for keeping up this whole show, and with that, let's say goodbye, everybody.

**Jerod Santo:** Goodbye.

**David Heinemeier Hansson:** Goodbye, thanks for having me.
