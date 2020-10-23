**Jerod Santo:** So tell me what you're up to.

**Marc Beinder:** I'm a senior at Lindenwood University...

**Jerod Santo:** Where is it located?

**Marc Beinder:** Saint Charles, Missouri.

**Jerod Santo:** Okay, cool.

**Marc Beinder:** As a part of my senior project on the side I've been building out a podcast hosting platform, because why the heck not... I really enjoy podcasting, I love audio, I love radio, and I figured "Hey, I also like coding. Let's merge the two." So my senior project really has been the development and building of the marketing side for the platform. And through listening to you guys... I remember -- oh gosh, I don't know how long ago this was; there was an episode that you did about scaling out, how you had to build your own platform for everything... And I figured, well, since I'm building my own platform, I thought it'd be a good idea to reach out to talk about the challenges, both expected and unexpected that you guys faced when you guys were doing that.

**Jerod Santo:** Okay. So yeah, when we said "scale out", we were referring to multiple shows. We were just The Changelog for many years, and when we decided to add multiple shows to our portfolios, specifically Go Time was the first one that we added, and then shortly after that, Request For Commits... We now have about six shows that we do on a recurring basis... That's when we decided to actually build our own platform. Because we wanted all those shows to live under a single domain, on a single platform, with a single system, and a workflow that we appreciate.

At the time, we were on WordPress, and also double-publishing over to 5by5, because we were on Dan Benjamin's 5by5 network at the time as well. So we would publish everything twice... And that became a huge burden.

**Marc Beinder:** Yeah.

**Jerod Santo:** And that, plus we wanted to add more shows... I think Founders Talk also existed on 5by5... Yeah, it did. But that was a show that Adam started on 5by5, not previous to. We moved that one over here as well. But that was really the decision why we wanted to build our own platform. Plus, we're software developers, just like you, so why not merge the things that we love...?

We had a lot of desires for custom workflows, custom aspects of our website, that we could accomplish with WordPress, but because it was a hobby for me back then, and kind of a side gig for me back then, I had to be motivated to write the code, and I just don't get motivated by WordPress plugins anymore. It's just not exciting to me. So I didn't wanna hack on WordPress, I would rather build something completely custom. So that was the decision-making process.

**Marc Beinder:** As you built it, what were some of the considerations when you were going through CDN providers, or audio storage? ...audio duplication, basically, to make sure that you have redundancy, and stuff like that.

**Jerod Santo:** Right. So the considerations around CDN was that we already had a CDN partner, with Fastly... So it was an easy decision in that way; it was just like "Well, we'll just use Fastly. They're our partner, and they're a great CDN." So how do we just build on top of their platform. They're basically varnishing the cloud, so they provide a lot of customizability, it's kind of a programmatic thing... So we just had to basically integrate into Fastly.

That was that decision, so therefore I didn't really put too much more thought into it. Maybe you want deeper thoughts on it, but I didn't go much deeper than that.

**Marc Beinder:** Yeah.

**Jerod Santo:** \[00:04:14.24\] When it came time to actually upload the mp3's, and where do they go, where do they live - I had picked Elixir as the programming language, and Phoenix as the framework to build the web app... And I was somewhat of a newb at the time with those technologies. I was a long-time Ruby on Rails developer. So I was learning things in Elixir, and I had to accomplish the task of basically tagging up all the mp3's as we upload them, so we're not again rendering the mp3, putting all the metadata into some sort of ID3 tag thing, and then uploading it into our system, and then also putting that same information in our backend... We wanted our admin to be the source of truth.

So you basically put all of the metadata into the admin backend and it should just matriculate that information onto the mp3's, into the tags. So to accomplish that, we shell out an FFmpeg, basically, at the uploads time. And because of that consideration, I wanted to have local access to the mp3's, because that just made my life a lot easier as a developer - if I can just have a local file, shell out to FFmpeg, modify that file in place... That makes me happy. So that's why I didn't choose a cloud storage provider like S3 at the time. So all of our mp3's are stored locally on disk, in the VM that runs. I think if I had to do that today, I probably would switch that, and actually just go through the trouble of uploading to a third-party... Because you know, we've moved things around since then, and really those static files have been kind of a pain in the butt to manage.

We have to back them up ourselves, so we do just have like a thing that backs them up to S3, so they exist there... And obviously, they're served by the CDN ultimately, so it doesn't really matter where they live... But that was the decision-making process at the time - I just didn't wanna have to deal with the cloud upload, plus some sort of cloud manipulation of the files across the network at the time.

**Marc Beinder:** Yeah. I'm doing PHP development, and if you were to read through the code, you'd see "Ah, he learned something here." So yeah, now I completely get "Oh, I don't wanna redo that. Oh, this works...! Nah, that doesn't work well."

**Jerod Santo:** Yeah, trial and error is a big part of building that out.

**Marc Beinder:** Oh yeah, literally. I just moved this last weekend, so two or three weekends ago I was working on the code, and I managed to break the app real good. It ended up being that there was a semicolon missing in my JavaScript somewhere...

**Jerod Santo:** Oh... That one will get you.

**Marc Beinder:** And I could not find it. So I don't remember changing anything in JavaScript. Well, apparently I did... What I ended up doing - my code was so jumbled, and the folder structure was just a nightmare... Because you know, \[unintelligible 00:07:22.04\] What I ended up doing is I completely redid the entire application's file structure in about three days, and then was able to completely fix it. And halfway through that, I found "Oh, sweet. A semicolon was missing. I can just keep going..." and I'm like "Nah, I can move so much faster by just pushing through this refactoring of how the folders work."

**Jerod Santo:** Right. Well, I would advocate for baby steps... That's one of my principles in development - never do a big refactor over three days without slowing down and ensuring things work each step of the way. So take a small step, ensure it works. Take another small step, ensure it works.

**Marc Beinder:** That's what I was doing.

**Jerod Santo:** \[00:08:05.06\] One of the things I like to razz my wife about... When we first moved into our previous home - she's a go-getter and she likes to get things done, and she did not like the power outlets in the house. They're kind of like the old, dingy, yellow -- you know, the actual covers on the outlets... And so she replaced all the outlets in the house one day, with nice, white ones. And she didn't check her work each step of the way, because it's pretty simple work - you just look at the way the wires are hooked up on the old outlet, you unplug them, plug them into the new outlet and move on. And I think she replaced like a dozen or so outlets, and at the end of the day the power didn't work to one area of the house...

**Marc Beinder:** Oh, that's funny...

**Jerod Santo:** And it took us a very long time to find out where that semicolon was in the power outlet search... Because I say "Well, do one, test it. Do the next one, test it." It sounds like you're moving slower, but at the end of the day you're actually gonna move faster.

**Marc Beinder:** Oh, yeah. As a part of this whole refactor I created -- I don't even know what to call it. I call it an anchor point, just because in every directory -- because there's so many sub-directories in my API that I have this anchor.php, and it literally calls the anchor.php file in the directory above, until it finally gets to init... It's totally inefficient as far as getting back to where all the constants are defined, all the \[unintelligible 00:09:34.27\]

**Jerod Santo:** Right...

**Marc Beinder:** But I'm like, "Hey, for development it's working, and that's what's important." It's not super-slow; it's not as fast as I would like, but hey, it's working.

**Jerod Santo:** Well, are you using a framework or anything, or are you just building everything out of PHP files?

**Marc Beinder:** Raw PHP.

**Jerod Santo:** Okay. So you're gonna reinvent a lot of wheels along the way. That'll be a good learning experience for you.

**Marc Beinder:** Yeah, yeah. I'm not a huge fan of frameworks, mainly because I have a very hard time understanding other people's code, other stuff like that, and I'm just like "It's probably better that I know how to do it myself anyway, and then eventually learn a framework..." But I like understanding how things work, because then I can understand where things are going wrong.

**Jerod Santo:** Sure. I totally get that. I have a hard time understanding my code, so that's why I like frameworks... Other people's code - not so bad.

**Marc Beinder:** Oh, I think we all have a hard time understanding our own code. "What was I thinking when I did this...?!"

**Jerod Santo:** \[laughs\] Exactly.

**Marc Beinder:** It's like, "I know it was a really smart idea, but... Man...!" It's the same as "I put my keys in a really smart place, but I've gotta stop putting it in a smart place."

**Jerod Santo:** Right. "Well, where was it?" Exactly.

**Marc Beinder:** Exactly. It's like, I'm too smart for my own good.

**Jerod Santo:** So yeah, those were our biggest considerations... With CDN partner it wasn't much thinking, and then with where to store the files, it was really because I wanted local access, so I could just rely on FFmpeg. Now, there was no good Elixir library for editing the ID3 tags... Otherwise, it would have been really nice to just stay in Elixir the entire time, and not have to have another -- because that is another binary dependency on your application as well.

There is an ID3v1 library, but there is not an ID3v2 library... And so one of the things that we've wanted to do for a long time and I've never done is to actually build that ID3v2 library. It turns out v2 is way more complicated than v1. v1 was really nice; you could pattern-match it on the binary, and stuff. v2 is very complicated; arbitrary number of frames in the header, and all this kind of stuff. And I just didn't have the time and the skills to get that done. I don't have the skills to get it done fast enough. I could get it done slow, but I don't have slow time. So we've never built that.

**Marc Beinder:** It's always go time.

**Jerod Santo:** Yeah. I would love to remove FFmpeg from our pipeline, but so far... I mean, four years in--

**Marc Beinder:** And that's a third-party service?

**Jerod Santo:** \[00:11:57.21\] It's a library and a binary. FFmpeg is like a command line tool. If you're on macOS, you can brew-install FFmpeg, or if you're on Linux, yum install, rpm install FFmpeg. And it's a really nice and rich, robust, complicated piece of software, that does all sorts of encodings and decodings from different file formats. It does video, it does audio, and it can write ID3 tags onto your mp3's. So we just use it for that purpose. We basically just tell it "Here's my mp3 file. Here's all the ID3 tags I want", like the title of the show, the authors, the publish date etc. And we just tell it "Slap that onto the mp3", and it basically just takes it and adds the headers.

So it's just a command line tool that we just shell out to, and then it modifies the files in place... And it works. It doesn't do everything we want it to do, like chapters, but it works for what we needed.

**Marc Beinder:** Yeah. I mean, it's normally an hour-long audio file. I'd be surprised if it had chapters.

**Jerod Santo:** Well, we don't have chapters; we would like to have chapters, because we think it'd be a cool feature for our listeners... But we haven't added them yet, because of that reason - I would have to have a way of adding them in the admin... We could pre-process them and put them into the mp3 file and then upload it, but it's kind of the same principle. We want the same representation of the message or the show on our website as is in the RSS feed, as is in the mp3 file. So if we're gonna go through the trouble of adding chapters, we want our website to have those chapters as well.

**Marc Beinder:** Yeah.

**Jerod Santo:** So we wanna just put them in the admin while we're adding all the show's metadata - add the chapters, timestamp, title, whatever - and then have that written into the mp3 file. That's the goal. And we can't get there with FFmpeg, and I don't have the time to build an ID3v2 library, so we're kind of stuck.

**Marc Beinder:** Yup. And then - so you said the application is written in Elixir. I know you guys run Linode...

**Jerod Santo:** Yeah.

**Marc Beinder:** What database do you guys use?

**Jerod Santo:** It's Postgres.

**Marc Beinder:** Okay. I've seen Postgres everywhere. I'm MySQL, just because that's what I started with, that's what I know, that's what I've learned... But what are the benefits to Postgres over MySQL, or vice-versa?

**Jerod Santo:** Yeah, that's a nuanced conversation, and a deep one...

**Marc Beinder:** Okay...

**Jerod Santo:** In terms of the interface of how you use them, the differences are nil, because they both use SQL as a query language. So they'll have specific features that the other one doesn't have, and they'll have little nuances, like MySQL handles this circumstance that way, and Postgres handles that circumstance this other way. And some people prefer one or the other.

Historically, MySQL was faster, but it also has kind of played fast and loose with your data... So Postgres was a little bit slower, both in terms of feature additions and just the way that the database worked. It was just generally slower, but more sturdy and stable with your data. That was the reputations that they gained. Now, over the years Postgres has started to move much faster, in terms of both operating speed and development speed... And MySQL has had a fraught history, because it was acquired by Oracle, and then \[unintelligible 00:15:18.02\] MariaDB, and then there's MySQL, and there's Maria, and there's licensing issues, and stuff like that...

It's a totally fine database, and I wouldn't advocate for a switch if you know one or the other... You just have to know that database and what you're getting yourself into. There's times where MySQL will write out some null fields and you'll be like "This should raise an error!" but it's actually just writing out empty data... Those are things that have bitten me in the past, which is one of the reasons why I switched... But also, it's just kind of like personal preference. I just know Postgres at this point much better, so I just pick it up each time.

**Marc Beinder:** \[00:15:55.18\] Yeah. So the application was called Podtrics. It started out almost like an RSS feed or wrapper to get podcast metrics, and then I'm like "I was planning on building a podcast hosting thing anyway... Why don't I just do it in this?" So what I ended up doing in the database is almost every single database field - except if it's like the primary key - has the ability to be null, because every time you do a write, it doesn't have to be... Not everything is required. If it's required, I want it to be required in the application logic, not in the database logic, because I don't want it to appear in the application that it worked, and ten it goes to the database and it's like "Hah, just kidding!"

**Jerod Santo:** That makes sense. You can intertwine the database errors and constraints, and you can bring them into your application through a process called -- you often use reflection. And this is a nice thing, by the way, that a lot of frameworks will do - they'll provide for you these kinds of additional features. So through reflection, for example in Ruby on Rails, when that application boots up, it actually goes and inspects your database. It grabs the schema from the database, and it says "On this table, what are the constraints? What are the rules? And then I'm gonna actually reflect those into the code. So they're already going to exist.

So there's this synchronization between your database and your application logic, and the nice part is you write it once. You only write it in the database, and then you don't have to write it in the application. Now, that takes a lot of trickery and a lot of code to get done... And again, you don't have any frameworks, you don't have any libraries, so it's a lot of code to write yourself. But if you can find something that does that, it's great to actually have that database logic.

The reason why it's nice to have it in the code - like you said, if you change your mind a lot, then it's nice to have it in the code. Like, "I thought this was gonna be a required field, but actually it's not required, so I don't wanna go change my database schema, I just wanna change the code." It totally makes sense.

That being said, if something is required in your application, your database should be doing that requirement, because it's the one that actually holds the truth. Your application code can change, your database has to be solid, and the data at the end of the day is more interesting and valuable than the code is... So in that case, I would want those constraints to be in the database, but I understand where you're coming from.

**Marc Beinder:** Yeah. I mean, there definitely are some things... The primary key -- I don't have the option to make the primary key not required, because it's the primary key.

**Jerod Santo:** Yeah, yeah, yeah. Well, you don't want that to be optional, because then you're gonna just have records that you can't find. How are you gonna find that record? "There's no key. Aaah!"

**Marc Beinder:** "Where did it go?!"

**Jerod Santo:** Exactly.

**Marc Beinder:** Yeah, but through that process I somehow, someway ended up creating two versions of basically the same table. But this is poor planning on my part, because I have the episodes table, and then I have the audio table. And the idea behind that was to have the ability to create episodes -- you know how sometimes... I don't know if you guys do this, but sometimes podcasts will do a re-release of an episode, like during holidays, or summer break, or whatever...

**Jerod Santo:** Totally, totally.

**Marc Beinder:** The idea behind that was instead of uploading the audio again, going towards any storage quotas you may have, you create almost a pseudo-episode, but you map it back to that original audio.

**Jerod Santo:** Totally, yeah.

**Marc Beinder:** So during the time that I don't have that feature, I have duplicate data.

**Jerod Santo:** Right.

**Marc Beinder:** But once I have that feature, suddenly it's gonna be a great thing to have.

**Jerod Santo:** \[00:19:54.19\] That's a really cool feature, and one that we do not have, and we've wanted it... We basically want the functionality of like a self-retweet. We wanna be able to just retweet our episode into our other feeds... And we've done this via Rebroadcast, but we just do the thing that you don't wanna do - we just manually create a new episode and then we just upload the audio a second time... Which does provide some flexibility if you wanna tweak that audio, and maybe add a new intro or tell people what this is... But we will put some stuff in other feeds.

For example, we had John Resig on JS Party to talk about GraphQL, and it was a great episode, and he's a great guest; obviously, the creator of jQuery, really smart guy... It was just a great episode. And we were like "We just wanna share this episode with the Changelog people as well", because there's people that listen to the Changelog who don't listen to JS Party, but we're pretty sure that our Changelog audience are gonna wanna hear John Resig talk about GraphQL. Not even really a JavaScript thing. So we would love that feature, "Repost this episode in this feed instead." And you're providing for that.

Anchor does something similar, where they give you kind of an audio library... So as you add new things, as you upload new artifacts and episodes into your Anchor account, they keep it around... So at any time you can go grab that and put it into a new episode, which is similar to what you're describing there... So that is a very cool feature.

**Marc Beinder:** Yeah. It's something I really wanna work on. The whole idea for Podtrics was almost managed podcast hosting, but I don't think that's quite the right time for it... I've seen so many podcast hosts from different places that I've worked, the different things that I've done, where if you have access to the system, you have access to every show. And there is so many situations where that's just not something that can happen. One thing is like -- at Lindenwood, they're really going into podcasting right now; they have their own radio station that's on the air, they are building out an entire podcast studio and literally anybody on campus can use it... But they're literally making people go get their own podcast hosting, because of the ability like "Hey, we don't want you to interfere with another student's audio." And I'm like, "Well, that's just the database realm."

**Jerod Santo:** Right. Yeah, so if you could provide that for Lindenwood, that'd be a pretty cool place to start off your hosting.

**Marc Beinder:** Yeah. And I talked with the VP of IT for the school, and he was saying -- okay, people are emailing me like crazy. He said that this is something that Lindenwood would be heavily interested in. They also kind of went into the whole distance learning thing, how really cool that would be for professors to upload their audio instead of into Canvas, which is our learning management system... They could upload it into an RSS feed and then send out like a private feed to their students, and then it just downloads to their phone. I'm like "That's not too hard to do."

**Jerod Santo:** Yeah.

**Marc Beinder:** It's definitely a task, but not hard to do. So I've been working very closely with Lindenwood to create education-specific features that would be beneficial for them, and then other universities. The initial focus for Podcast-- words are hard sometimes... For Podtrics was "Podcasting for higher education", after we moved out of just "Podcast metrics with a wrapper." And then I saw the transistor story, and I'm like "I can't be too focused on one particular vertical, because they did podcasting for businesses." Well, podcasting is for everybody. So what I decided to do is I'm gonna have different pages, like "This is how Podtrics works for education. This is how it works for business. This is how it works for personal. This is how it works for radio", and I've already talked with a variety of friends.

\[00:24:09.26\] I have a lot of friends in the radio industry, and I talked with them, and they're like "Design it just like a little appliance, like a Windows machine, that will just sit on the network, we save the audio there, and then we'll upload it to Podtrics." I'm already working on that, to basically have that autoupload feature... I'm planning to launch this whole product December, but it's like, I've got so many things, too many ideas... Slow down...

**Jerod Santo:** Yeah, I would advise focusing in. I know you don't wanna be too niched down, but a lot of great services and startups and businesses start in a niche, and then find their way out of it. Even Facebook, back when it was The Facebook, back when it wasn't so evil and gnarly, it started out just on campuses; it was for college students to do their thing. There' s a similar vein here; I kind of like the "Podcasting for higher education" angle, as long as you don't really pigeonhole yourself where you can't possibly move out of that later. Because that allows you to actually focus in.

Launching by December - we're almost at November here - you have all these ideas, and stuff... Get realistic on your timelines. But I would think like stay nimble and stay small until you have something tangible, and then build from there. Because you can get -- there's shiny object syndrome all day long in businesses, and you're like "All the cool things you could build..." I still haven't built that ID3v2 thing, even though it'd be really cool, and it'd be great... Because there's just higher priority things in our business.

So focus in and pick one, what really sets you apart. I think serving higher education and these features for schools specifically could be just that. I think it would be a good starting place for you.

**Marc Beinder:** Yeah, I completely agree. I wasn't saying that I'm building all these things and it's gonna be out by December; it's like "Oh, yeah, I can see how this thing would work. And I understand this part of the technology. Not a priority right now...", but it's...

**Jerod Santo:** But it's fun to think about.

**Marc Beinder:** Yeah. I'm at home on Friday night, watching Netflix... "I think it would work like this."

**Jerod Santo:** \[laughs\] Well, you got the bug, and that's a good thing.

**Marc Beinder:** Oh man, I can't stop coding, and sometimes it's to my detriment.

**Jerod Santo:** Well, that's how you learn, man. You just put the hours in, you put the time in. And this is a great project for you, especially since you're still in college, you're still learning... You can serve people that are around you, which would be awesome if you get people actually using it... And if not, this is a massive learning environment for you. A playground, an experimental place. You'll have lots of fun building this thing.

**Marc Beinder:** Yeah. Well, I know we're almost at time here, so I'll let you get going... But as I get closer to launch and release, do you mind if I send you a link to the application to get your feedback on it?

**Jerod Santo:** Sure. Absolutely. And if you have questions along the way, you can email. That'd be a good way to keep in touch.

**Marc Beinder:** Awesome. Yeah, what's your email?

**Jerod Santo:** Just jerod@changelog.com.

**Marc Beinder:** That's easy to remember.

**Jerod Santo:** Yeah, just remember, the J-E-R-O-D, not the Subway guy style.

**Marc Beinder:** Oh, you had to go there... You had to go there...

**Jerod Santo:** I do not associate with the Subway Jared. I'm far different. I don't even spell my name like that.

**Marc Beinder:** \[laughs\] Alrighty... Well, thanks so much, Jerod.

**Jerod Santo:** You bet, Marc. Thank you, it was fun.

**Marc Beinder:** One thing... Can you send me this recording, so I can include it in my project?

**Jerod Santo:** You bet!

**Marc Beinder:** Awesome. Thank you so much.

**Jerod Santo:** Also, we might post this on our Backstage feed. Would you be cool with that?

**Marc Beinder:** Yeah, cool. Just let me know whenever you plan on it going out.

**Jerod Santo:** You bet, will do. Alright, talk to you later.

**Marc Beinder:** Alright, see ya.
