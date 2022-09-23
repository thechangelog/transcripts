**Gerhard Lazu:** So the last Kaizen, episode 60, was the middle of the summer, nice and hot. And it was just myself and Jerod. We were mostly talking about our post-Kubernetes to Fly.io migration, we were talking about the cleanup... And Jerod very briefly mentioned something significant that we had in the works, but that was not yet ready to ship. It happened, and today all of us are here to talk about it. Welcome, everyone, to Ship It.

**Jerod Santo:** Alright, we're here. It happened.

**Adam Stacoviak:** I'm excited about this, what's shipped.

**Gerhard Lazu:** Something's very different about this episode.

**Jerod Santo:** It is.

**Gerhard Lazu:** Welcome, Lars.

**Lars Wikman:** Thank you.

**Gerhard Lazu:** So for the first time in the history of Kaizen, we have one guest - Lars is here with us. So we had him before, episode seven. That was the last one I recorded with Lars. The first kaizen. And depending on how it goes, maybe not the last. \[laughter\] No pressure, Lars.

**Jerod Santo:** That's the one -- Gerhard, wasn't that the one where he convinced you to switch off of Kubernetes?

**Gerhard Lazu:** No, that was the one where I couldn't convince him to switch to Kubernetes. \[laughs\]

**Jerod Santo:** Yeah, but then later on, we switched off. So I feel like maybe he won that conversation.

**Gerhard Lazu:** Yeah, good point. Good point. Yes. We're no longer on Kubernetes, so I think it worked, Lars. Whatever you did, it worked.

**Lars Wikman:** Yeah, that wasn't really the expectation... It was like, "Yeah, I can come onto your show and have a bit of an argument about Kubernetes." Because it's a little bit ridiculous sometimes, and I felt like there were plenty of people having that opinion, but only so many people can come on the show, and Gerhard was like, "You should come on, and we can talk about it." And we did. I did not expect you to switch off. But I think it's probably for the best...

**Gerhard Lazu:** I never did, in my head...

**Jerod Santo:** You're still on it.

**Gerhard Lazu:** I'm still on Kubernetes somewhere, but not for Changelog... \[laughs\]

**Lars Wikman:** No, no... You're on Nomad now.

**Gerhard Lazu:** Yes, that is actually true. So yes, that was very well spotted, Lars. \[unintelligible 00:04:28.08\] I still have the email in my inbox. Leo, if you're listening, it was a super-busy couple of months. I will get back to you. We will have a Nomad episode. But for now, just know the Changelog is running on Nomad, via Fly.io, and Lars mentioned it. I'm very glad you're -- Lars, I'm really glad that you're here already.

**Jerod Santo:** \[laughs\]

**Lars Wikman:** This is such a weird cycle... I know Leo.

**Jerod Santo:** Oh, you do?

**Lars Wikman:** Yeah.

**Jerod Santo:** How so?

**Lars Wikman:** He taught me Linux.

**Jerod Santo:** Wow.

**Adam Stacoviak:** Wow. That's a big deal.

**Lars Wikman:** This will be 20 years. ago...

**Gerhard Lazu:** Really?

**Jerod Santo:** Wow.

**Lars Wikman:** In a small town, in northern Sweden.

**Jerod Santo:** Small world.

**Lars Wikman:** Yeah, yeah.

**Adam Stacoviak:** That is a small world.

**Lars Wikman:** It was fun. I was mowing my lawn, and suddenly, one of my original mentors shows up sending in feedback to this show. That was an interesting listen.

**Jerod Santo:** Okay... \[laughs\]

**Gerhard Lazu:** I'm really surprised, because there was something else connecting to this... I'm blown away there's something else connecting to this, but I don't want to spoil the surprise. I'm just gonna mention the first name. I'm just gonna mention Odin. And I'll mention the surname in a few episodes, maybe. We'll see.

**Jerod Santo:** That's a big teaser. \[laughs\] "Stick around for a few episodes, you might get the surname of the person that connects somehow..."

**Gerhard Lazu:** Exactly. If they will get a surname, he will be on the episode. He will be on Ship It. Otherwise I'm not going to mention it... Just in case it doesn't happen, right? So no one I will get upset. So Lars, we attempted in the past to introduce you briefly, myself and Jerod, and I don't think we did the best job we could. Now that you're here, do you want to tell us a few words about yourself? Or a few sentences, up to you.

**Lars Wikman:** \[06:03\] Yeah, so I can start with the pronunciation of my name, so Jerod can just cut in in the future...

**Jerod Santo:** Please do.

**Lars Wikman:** Lars Wikman. It's not a nice name to throw at Americans, because it's--

**Jerod Santo:** Lars Wikman...

**Lars Wikman:** Pretty good. You're getting there.

**Jerod Santo:** I'll get there. One of these days.

**Adam Stacoviak:** Practice makes perfect.

**Lars Wikman:** Yeah. So I do a bunch of different things, but fundamentally, I'm a self-taught Elixir developer, and I really nerded in on the Elixir world. And I do some blogging, a newsletter, a YouTube channel, two podcasts, and run a small consultancy.

**Adam Stacoviak:** Gosh...

**Jerod Santo:** Lots of stuff.

**Adam Stacoviak:** Pretty busy.

**Lars Wikman:** I stay busy, yeah.

**Gerhard Lazu:** What do you enjoy most out of what you do?

**Lars Wikman:** The variety of doing all of it.

**Gerhard Lazu:** So everything...

**Jerod Santo:** Ohh, the copout... The correct answer was "My favorite thing is guest appearances on Ship It..."

**Gerhard Lazu:** And helping Changelog ship cool stuff, for sure.

**Adam Stacoviak:** That's right.

**Lars Wikman:** Yeah, but that's the thing, the variety really gets to it, because I get bored easily... So anything will become a drag after a bit. But if you do a bunch of different things, and you sort of stitch them together in a way that makes vaguely cohesive sense, you can have a pretty good life.

**Adam Stacoviak:** Vaguely cohesive...

**Gerhard Lazu:** I keep telling you, Lars, there's this infinite landscape called the CNCF landscape. Kubernetes is a small speck on it. So if you get bored easily, I have the perfect antidote for that.

**Adam Stacoviak:** An endless sea of things to play with.

**Gerhard Lazu:** Oh, yes. Endless combinations.

**Lars Wikman:** But I'd have to learn Go.

**Gerhard Lazu:** Not necessarily.

**Jerod Santo:** Gerhard doesn't know Go... Much. You know a little bit, but not much.

**Gerhard Lazu:** No, I don't. No.

**Jerod Santo:** You wrote a little Go program, didn't you, Gerhard?

**Gerhard Lazu:** I wrote quite a few... So this has been so long, by the way, when I was writing Go, that I forgot it. And now I'm remembering it again. That's how long it's been. I think it was 2016-2017. We were writing some Laura... That's like a protocol for IoT devices. And there was like a Laura bridge. So that was fun. Cloud Foundry... There was some Go there. But just enough. So I didn't go crazy on it. And at Dagger, there's more Go, not a crazy amount, because there's an endless sea of possibilities that I could be doing... And people with experience - they wish they could code, but they don't have that luxury, do they? It's such a small part of what they do. But yeah, I mean, if I had to choose between Go and Elixir, it would be very tough. I like both.

**Lars Wikman:** I wouldn't mind learning Go, but it's not where my focus is right now. I'm plenty busy in the Elixir space, and... It's a smaller pond, which makes it easier to know the people, which I like.

**Gerhard Lazu:** Right. So I can see almost a contradiction there. You're like, you get bored easily, but you like small ponds. \[laughs I'm sure it's gonna be amazing... So let's get to it. What is the most significant thing that we shipped? And because it was Jerod's PR, I'll let him tell us about it.

**Jerod Santo:** Yes...! It was me.

**Gerhard Lazu:** You did it.

**Jerod Santo:** Although the heavylift was by Lars, and I did the glue code, which is kind of...

**Lars Wikman:** And the QA.

**Jerod Santo:** And the QA... Which is important, right?

**Gerhard Lazu:** Very.

**Jerod Santo:** The biggest thing that we shipped since our last Kaizen is chapters. And we've shipped chapters everywhere, to all the places. I can't remember when we recorded if we had it shipped partially or not at all... But it rolled out in phases. The first step with chapters was to be able to input them in our admin, and store them in our database, and we did that first. And then once we had them, we could then emit them in certain places. And the first place we emitted them is on the episode Details page, underneath the show notes.

And because our onsite player is already deep-linkable with timestamps and stuff, we could make those clickable and jump around to the different areas of the episode on the website. That's not the end goal, that was just the easiest place to get them.

\[10:06\] Once I had them there, we then also decided, "Well, let's put them in our new episode notification email", because why not? Because sometimes a chapter will actually entice you to give it a listen. Like, "Oh, they talked about this? Cool. I'll click on that directly." So maybe you're getting a notification email, you don't have much time, you see the chapters, and are interested. So I put them there as well.

And then the third place we put them is in our RSS feeds, using the new podcasting 2.0 namespace. So we have RSS-based chaptering, as well. But that's somewhat insignificant, because barely anybody is using that tag in their apps, except for the brand new, shiny podcasting 2.0 apps.

And the final place we put them, and the big one, and the hardest one, was actually in our mp3 ID3 tags, so that all the podcast apps now, if you're listening on a podcast app that supports chapters, of which most of the better ones do - there are some that do not - you can see that there's a chapter, right there. We're inside a chapter right now, and you can click on it. This chapter is called, "We're in a chapter", maybe, if our chaptering nerds get it right...

**Gerhard Lazu:** Great idea. I love it.

**Jerod Santo:** So there it is. It's right there in your podcast app, thanks to a little bit of glue code by me, but mostly Lars helping us build an ID 3 VX, which the big one being version 2.3, in our case, a library for Elixir, so we could actually ditch our FFmpeg dependency and directly write our ID3 tags in Elixir land, with support for chapters... Which is a complex spec, I believe. But I didn't have to care, because Lars had to care.

**Gerhard Lazu:** Wait, wait, wait, wait, wait... So do you mean that we can remove FFmpeg from our container image now?

**Jerod Santo:** We absolutely can. We were using it for zero things. Isn't that cool?

**Gerhard Lazu:** Oh, yes, baby! That is super-cool. Alright, so our container images just got 300 megabytes smaller, or more... Okay, that is really cool.

**Jerod Santo:** Yeah. Now Gerhard's excited.

**Gerhard Lazu:** Yeah. Wow, that is... Wow.

**Jerod Santo:** One less dependency is cool.

**Gerhard Lazu:** Oh, yes.

**Jerod Santo:** I think our only dependency that's not Elixir/Erlang now, and obviously database stuff, is probably ImageMagic.

**Gerhard Lazu:** Yes...! Okay. That's the next one. That's the next frontier. But before we go there, Lars...

**Lars Wikman:** That would be a bigger project... \[laughs\]

**Gerhard Lazu:** That's a bit bigger one. So why was ID VX such a big deal?

**Lars Wikman:** So the ID3 standard -- like, if you've done anything with mp3 since like the '90s, or whenever those showed up, you've probably modified an ID3 tag at some point, because the title or the artist was wrong. And that was started with ID3 -- well, it was just ID3, and then they released the version two, so that became ID3 version one. And ID3 version two is a fairly flexible metadata format, and it can be used for other things than mp3s. It can be used for essentially any file, and you just prefix it to the file, and as long as the file parser doesn't choke on having some random binary data in front, you can use it. So it's a tight binary format, and that means you have to follow a spec very closely... And that's sort of what turns it into a project. It's not your average JSON parsing thing, where it's like, "Oh, it's gonna be some JSON in there, I throw it into a JSON parser, and I get out structured data." But rather it's incredibly specific. So you have this little header, you have a number of frames, that they call them... So for example, Title One, Title Two, and Title Three are all frames; Album is a frame. Publisher, I believe is a frame. There are a ton of frames. Very few of them are actually used. And then, at some point, someone released a specification for chapters in ID3. And chapters are frames which can contain frames... Because with a chapter, you might want to include title, link, images...

\[14:11\] The chapter spec isn't much more complicated than anything else in ID3. And the ID3 spec isn't all that complicated. One of the most challenging bits about it is that it's sometimes not that precise. Sometimes it's a bit vague., and sometimes the clients are very particular, which we discovered as we were trying things. But Elixir is pretty well suited to mangling binary data, so much of the part that can be annoying was pretty easily solved. Then it was a matter of implementing a ton of frames, and making sure it actually worked, which was the harder part.

**Gerhard Lazu:** So what you're telling me, or at least what I'm hearing, is that shipping it was difficult. Because once you ship it, that's when the actual complications start, when you realize, "Hang on... My understanding of this thing is different than some of the players." So which ones were particularly difficult to deal with? Do you remember? I know you do.

**Lars Wikman:** So our first stab, I essentially implemented blindly. And then I wrote some tests, but both the implementation and the tests was based on the spec. So I'm just testing whether I can read the spec the same way twice, which...

**Gerhard Lazu:** It's important. At least you can tick that box. "Yes, I got it right."

**Lars Wikman:** I got it right twice, or I got it wrong twice. I know that much. But then we started using -- there's a command line tool called ID3 V2, which can list frames, and it supports most frames, which meant we could start checking some of our work, and we discovered some issues there... It's like, "Oh, we encoded this wrong. Oh, this should be a double null, not a single null. Silly binary..."

And then we started looking at FFmpeg, because that can actually parse chapter frames, so we could actually list the contents of those. And that's probably where much of the trouble started, because it was choking on a number of different things. And it went down to deep, deep rabbit holes. In the end, working through those probably improved the code of the library significantly, so that was all good... And then we got to the actual podcast players...

**Jerod Santo:** A little harder to test with those, right?

**Lars Wikman:** Yeah, the loop wasn't very tight there. Because with FFmpeg - I mean, it can be annoying to install sometimes, but it's no problem to shell out to it and check the output to see if you wrote a correct file. But when you're doing it with Overcast or Pocket Casts, which were the ones we had to get working first, and once those were working, everything else has worked. But both of those, thankfully, have a way of loading files, sort of side-loading them, manually loading files in, and they do parse the ID3 tags when you do that. But I mean, getting a file, an mp3 file to an iPhone, to actually test, is not very convenient. And that whole process... And figuring out what the actual issue is. Thankfully, for this sort of mainstream chapter support, there are podcasts that we know have chapters that work. So in the end, I think we used accidental tech podcasts a fair bit, and at some point, I was pulling their data, pulling their entire file, parsing the entire file with our library, and then writing the entire file with our library... And checking, "Oh, the chapters don't have links, for some reason. Why don't they have links? Because they used to." And then compare binary, byte by byte, until you find the difference.

**Jerod Santo:** \[17:53\] The fun stuff.

**Lars Wikman:** And in that particular case, they only accepted comments that were in ISO 88591 encoding. That's not the spec... But that's what they did. So we had to comply with that. We had to default to that. And in Pocket Cast's case, there was an extra-trailing, or there was a trailing null missing in the table of contents, and that tripped us up, and the chapters just didn't show up at all. So those were probably two of the more challenging ones. But it's cool. I haven't had reason to sort of dig through binary, byte by byte, in this way, very often.

**Gerhard Lazu:** Okay. So the library is out on Hexpm, ID3 VX, and it's also -- the source code is on Lars' repo.

**Lars Wikman:** For now, it's still on mine. It's going to move over to Changelog as Jerod takes on the maintenance burden, I hear...

**Adam Stacoviak:** Ha-ha-ha!

**Jerod Santo:** Yes... Happy to close issues. Won't fix... Won't fix... Won't fix...

**Gerhard Lazu:** We know a thing or two about that... Okay, that's coming up a bit later... \[laughter\]

**Lars Wikman:** I'm pretty sure Jerod has committed to just implementing ID3 V2.4. I think that's what he said.

**Jerod Santo:** No comment...

**Gerhard Lazu:** I didn't hear that. \[laughs\]

**Jerod Santo:** I'll implement every frame of ID3 V2.4, whatever it is, that we care about, that we use here at Changelog. I will do that.

**Gerhard Lazu:** Yes.

**Lars Wikman:** I'll also give some credit to one of my consultants... So I run a small consultancy; I can't call myself a freelancer anymore, because I have four employees doing software development... But one of them was on the bench for a bit, and when this came along, he could jump in to help. So he's been doing a bunch of implementing of the frames that we didn't critically need for this, but that are nice to have for a sort of well-rounded implementation. The ones that no one uses to a large extent, but it's nice to have them there, properly implemented. Not tested, because there are no real reference implementations to test against, because no one uses these frames... Yeah, but credit to McBull; he's on my team. He has been chugging away at these encodings and parsings.

**Gerhard Lazu:** Thank you very much. Did you say McBull?

**Lars Wikman:** McBull, yeah. And we still have a few of his pull requests to merge before we shift it over to the Changelog org.

**Gerhard Lazu:** And for all the ex-pivots on the bench means "on the beach."

**Lars Wikman:** Oh...

**Gerhard Lazu:** Yeah, that's like a thing. Like, when you're on the beach, then you know, you're not like on any assignments. You're a consultant, but you're on the beach, and you're having fun. So McBull was on the beach, having fun with ID3 VX. That sounds amazing. So pull request \#417, you can check it out in Changelog. That's when Jerod merged it. And I know that a couple of things happened afterwards... What's the first thing, Jerod, that surprised you after you got it out?

**Jerod Santo:** I don't think it worked... \[laughs\]

**Gerhard Lazu:** Exactly. \[laugher\]

**Adam Stacoviak:** "I don't think it worked..."

**Jerod Santo:** It didn't work right away.

**Adam Stacoviak:** Ship it and see what happens.

**Jerod Santo:** The first thing that surprised me, I believe, was that we were using a function, an Elixir function that existed in my local version, that did not exist in prod... Which was we had a development production mismatch - all too common - where the Map module got some nice, new functions in Elixir 1.13, and I was using them in our new chaptering code, specifically using them in the RSS feed generation code, not in the actual tagging code, where I was only including the values in the JSON feed of the chapters that had data. And so I was rejecting a bunch of key-value pairs. And that doesn't exist in Elixir 1.12, which was what was running in production. So we had -- all the tests passed... CI failed, I think. I think CI also had 1.12, so it didn't roll out. I think it wouldn't roll out... Which is nice. Better than it rolling out and not working. But it still wouldn't work, because I pushed the code and it wouldn't do things... So then I was like, "Hey, Gerhard, remind me - how do we do this thing where...?"

\[22:14\] What I would love to have is just like one place in the code where I change a 12 to a 13, and then commit that and push it out... But almost as good as having a nice documentation on how to do it. So we had to upgrade Elixir, which had another ramification, by the way, which I will tell you if you want to know about after you respond to this. Because this was something that you upgraded all the things in response.

**Gerhard Lazu:** Let's see... This was pull request \#423. You mentioned something very important, Jerod. This was like in our Slack messages. This is in dev. So you basically do just-in-time development, and that's exactly what I did with this. So I was thinking a couple of months back, "Shall I upgrade these things?" I said, "No, no. You know, it's not important enough. I don't want to be doing busy work. When it's important, I will know about it." So I did. Jerod told me, "Hey, we need this upgrade." And we had a make target that was showing, and it was like an interactive, step-by-step what to do... But that wasn't the most convenient place. So now it's in the readme, and you can check it out. It's already been merged, pull request \#423.

So the image that we used - because it goes out as a container - it's the hexpm/elixir and I think I did that with you, Lars, or was it with Alex? I can't remember. Either you or Alex.

**Lars Wikman:** Probably Alex.

**Gerhard Lazu:** Okay, because then I left the comment. So one of you recommended, "Hey, why are you using this base image and not the other one?" So we switched. So once you pick Elixir, you also have to pick a version of Erlang. So I thought "Well, that was 24. Let's go to the latest Erlang version." And I was thinking "Well, hang on, this was using Ubuntu trustee

**Jerod Santo:** Whoops...

**Gerhard Lazu:** Yeah, exactly. So Erlang will come back, Erlang will come back... And also, hey, let's change the base operating system. Let's go to Ubuntu Jammy 22.04, the last LTS, so we did that as well. While at it, I was saying "Hang on, this Node.js version could be upgraded. So why don't I do that?" And "Oh, by the way, this PostgreSQL, the one in production - it differs to that." So before you know it, I literally upgraded all the things." By the way, if you're not prepared to deal with the aftermath, you shouldn't be doing this, okay?

**Jerod Santo:** Right...

**Gerhard Lazu:** I was ready. I was like, "Okay, whatever is gonna happen, I'm here. I can take it on." So nothing happened. Well, almost nothing. Jerod?

**Jerod Santo:** It took us a little while to notice what had happened... But there is a bug in OTP Elixir, in Erlang 24.3.4?

**Gerhard Lazu:** 3.4.

**Jerod Santo:** Yeah...

**Gerhard Lazu:** I checked.

**Jerod Santo:** You checked that. Did you see I left a link to it in the code...?

**Gerhard Lazu:** I did. I also commented on the pull request. The pull request is \#6241. It's actually an issue. Erlang OTP issue \#6241.

**Jerod Santo:** Oh, okay, you commented on that one. Cool.

**Gerhard Lazu:** Yeah. Angella was kind enough five hours ago to solve it and mark it for... Yeah, so this will be out in 24.3.4.5. I checked Majtech, because he's the one that reported it... "Hey, Majtech, did the fix work for you?" Vojtech Mach, that's what I meant by Majtech. And 30 minutes ago, as we are recording this, he confirmed the fix works. So this is a live "Thank you very much, Vojtech." And as soon as there is an image that we can use, we will get it straight into prod.

**Jerod Santo:** Right. Right now, I implemented a workaround, not sufficiently enough. So the problem happening is that TLS bug in the SSL... What do you call it in Erlang, Lars? Are they packages? It's like the colon SSL namespace... I don't know, modules maybe?

**Gerhard Lazu:** Yeah, SSL module.

**Jerod Santo:** Right. So Elixir is using Erlang's SSL module, and on this latest version there's something with TLS certs, and certain HTTPS requests fail; they error out, whereas they previously weren't. And you can turn it off at some weird compatibility check or something. I don't even totally understand it. But it caused a few things that we would fetch to fail, one of which is the transcripts from GitHub. They were not fetching. And the other one is when we would go and download stuff in order to put it into the ID3 tags.

\[26:20\] So one of the things we had to do is add the cover art in the ID3 tag to each episode. And so to do that, we'd just fetch it off of Fastly, and shove it in there. But our requests to Fastly were failing, and our requests to GitHub were failing, because of the way they implement HTTPS.

Now, it's not every domain. It's like, it's dependent upon whatever they've configured their TLS environment to do on the server side. So it's not like all of our requests were failing, but just those two. And so, you know, you start furiously "I have to push some code up right now to fix the GitHub one, because the transcripts are not pulling in right now.."

This is the second time this has happened with OTP specifically, and the SSL stuff, where it's like, maybe we do better to stay a little bit behind the curve on Erlang... I don't know. I feel like I'm gonna put a smoke test in that just says, "We can make HTTPS requests and actually hit Fastly in our test suite." Because that would be a thing that would fail if we upgrade Erlang and that breaks it, and it would cause us not to deploy, or something. Because I wouldn't have known about it if I didn't notice the side effects. I want to know about it immediately, not when they're symptoms. But I found out via symptoms this time.

**Break:** \[27:35\]

**Gerhard Lazu:** So after all my years on the RabbitMQ team, I can tell you that SSL is one of the hardest things in Erlang. The hardest. Not just when it comes to outbound connections, but also when it comes to internode. Internode communication can be very, very difficult because of SSL. And it has to do with the protocols, with the ciphers, sometimes with what is on the host... It's a neverending pool of problems. Angela, she's been on the OTP team...

**Lars Wikman:** Ingela.

**Gerhard Lazu:** Ingela. Thank you, Lars. See?

**Lars Wikman:** I believe it's a Swedish name... It often is with the Erlang team.

**Gerhard Lazu:** It is a Swedish name, because of Eriksson. It's the Eriksson team. That's right. So yeah, I mean, she's been dealing with all these SSL issues in Erlang for years, as long as I can remember. And I can tell you that she's doing an amazing job, but this stuff is really, really hard. And briefly, whenever I used to talk to \[unintelligible 00:31:49.20\] there's one more... What is the other one? Cowboy...

**Lars Wikman:** Is it Ranch?

**Gerhard Lazu:** Ranch. Thank you. Thank you, Lars. I forgot. That's it. So these are very popular TCP libraries, and web servers in the Erlang ecosystem that everyone uses; including Phoenix... they're everywhere. This stuff, these protocols are incredibly hard to get right. So Lars, if ID V3x was difficult, this is like, to the power of 10, sort of thing, difficult. It's unbelievable what is out there.

**Lars Wikman:** This was a month or two difficult.

**Gerhard Lazu:** Yeah... I think Ingela is still on it, ten years later, something like that. It's really hard. And it keeps changing all the time.

**Lars Wikman:** Yeah. And Erlang has this ambition of not relying overly on OpenSSL these days...

**Gerhard Lazu:** That's right.

**Lars Wikman:** And as part of that, they implement a fair bit on their own.

**Jerod Santo:** I was gonna say, maybe they should change on that. It seems like they have --

**Lars Wikman:** Well, OpenSSL hasn't exactly been without fail in other regards along the way... And OpenSSL is a super-tricky dependency overall. It causes a lot of install problems, which are not runtime problems...

**Gerhard Lazu:** I can tell you that we were using it in there with RabbitMQ and Erlang. I remember that was like one of the very important dependencies to get right. You don't have to use it, but then that just like opens up a whole set of other problems. So just to wrap this whole chapter up, it's a hard problem. It's amazing, Jerod, that you've found it, and yes, we need those smoke tests. Very important. Because regressions - sometimes they are introduced; there's a couple of major Erlang versions that are being actively maintained at any given point in time... And sometimes new specs get introduced, and new code gets introduced, and sometimes things just misbehave, and you need to run this stuff in production to see. It's not obvious.

**Adam Stacoviak:** I want to bring up a back-story to this... Do you remember, Jerod, how long we've wanted this feature?

**Jerod Santo:** Yes.

**Adam Stacoviak:** I know you do.

**Jerod Santo:** Yes.

**Adam Stacoviak:** Yes. So far back, we almost hired Jose Valim to help us with this Elixir ID3 VX, which - thank you so much, Lars, for all your hard work on this... But like, this goes back so far, right?

**Jerod Santo:** \[34:08\] Jose I said "You have to talk to Lars Wikman." I'm just kidding...

**Gerhard Lazu:** That's what he said.

**Jerod Santo:** It goes back so far... Well, so first I was going to do it myself, and then I read the spec, and I'm like, "This is a lot of work. This is not my expertise." It's a little bit deeper than I usually go. I'm an application developer more than a library author... And I told Adam like, "I could probably do it, but there's unknowns there, and it would take a long time." And we know how much time I had to spend on the coding.

Then we reached out to Plataformatec, back when Jose was with them, or back before it was sold to the other company, or whatever... And spoke with them about maybe contracting them to build it... And then we spoke with Jose directly, I think after he was there, when he had left, or they had sold it... And I think he even pair-programmed with me for like 15 minutes one time. Like, you know Jose - he's so smart and so fast, and he's just like, "Oh, just do this" and he's got some stuff going... And he's like, "You should be on your way" and I was like, "Well, hold on, slow down... Come back... Write the rest..." \[laughs\]

**Lars Wikman:** "Slow down. Come back. We have cash..."

**Jerod Santo:** Yeah, "We have cash..." So yeah, Adam, and then we just kind of sat on it for a couple of years, because there were just like other things...

**Lars Wikman:** It's very flattering that I got to be the stand-in for Jose...

**Jerod Santo:** You were the next. You were the replacement for Jose.

**Adam Stacoviak:** It's just interesting when you ship a feature like this how much story is behind it. There's a desire for a certain feature. Obviously, we've been in podcasting for a very long time, so chapters are pretty important... Client support wasn't always there... So the thrust was there for our desire, but it wasn't there in support, in ending clients. So I think Apple Podcasts may have begun support about a year or so ago, maybe... But like the major player supporting was Marcos at Overcast. That was like the main one I saw have support for it, really.

**Jerod Santo:** Yeah. For a long time, that was like the main one. And it's kind of like not worth it for just that one; even though it was the app that I used, and so I wanted it... I've wanted this feature for so long. There's also a whole production workflow side of this that we're not talking about, about actually getting the chapters in there...

**Adam Stacoviak:** A lot of change, yeah.

**Jerod Santo:** ...that we could speak to... Because that had to be a thing that we figured out along the way. And so there's lots of reasons why we didn't do it. But then, like you said, Adam, onc Apple Podcasts added it... And by the way, their support is terrible. Like, you scroll to the bottom of the details, and there's a Chapters thing, and you click on it, and it expands. It's not integrated -- their app's terrible in general, but... Overcast supports it, Pocket Casts, Castro... All of a sudden, most of the indie, good podcast apps now - they're gonna have that support. So it made it more worth it for us to finally do...

**Adam Stacoviak:** Even Overcast it's kind of hidden. It's kind of like subtly introduced now in like the side button whenever you're playing it. It's also not quite like in your face. I feel like it's a missing ingredient for clients to better support visually the user experience that chapters provide... Because you could jump around a show very well. And... Like, you're in a chapter right now, by the way, as you know...

But I think that's just such an interesting -- like, the back-story to a feature, all the details that go into it... In particular to this one - the workflow changes on the production side, the UI changes on the frontend of the application, whether it's our site or the client... Just a lot of things go into just a little desire, like, "Can we just have chapters?"

**Jerod Santo:** This is a feature, by the way, that has been requested by zero of our listeners. \[laughter\] Zero. No one's ever -- maybe you, Gerhard...

**Gerhard Lazu:** No, no. No, not me. Someone that I know. He keeps saying -- Sam. I won't give the surname away... Sam said "Hey, can I have a short version?"

**Jerod Santo:** Oh, that's right. The short version guy. Yeah.

**Gerhard Lazu:** Exactly. The short version person. \[laughter\] And now he has chapters. So okay, Sam, we can't give you short versions...

**Jerod Santo:** But we can chop it up for you.

**Gerhard Lazu:** ...however, we can give you chapters.

**Jerod Santo:** \[37:59\] Yeah. I think chapters is one of those features that you don't think about much until you have them... And once you do, especially if you have shows where you're interested in a lot of what they talk about, but not everything they talk about... And hey, we're realistic; we realize maybe you're not interested in chapters. Maybe you skipped this whole episode, because you're like, "Oh, is this the chapter one? Don't care."

**Gerhard Lazu:** Only the Lars part. Only the Lars part. Everything else you don't listen to... \[laughs\]

**Jerod Santo:** Yeah. But once you get used to listening that way, and hopping around, and seeing what they talk about, and when, and saying, "Oh, you know what - I care about this topic. I want to go right to it and get that eight minutes." Once you have it, I think it's THE way to listen to podcasts. And so even though no one's requested it except for Sam, in a roundabout way, Adam and I have wanted this for years. So... Sometimes you do things because it's going to make it better, not because people are asking you for it.

**Gerhard Lazu:** Lars, were you going to say something earlier?

**Lars Wikman:** I was just going to say that I think Pocket Casts actually does a good job of surfacing chapters. It's on the playing screen; you can just hit a separate arrow and sort of skip to the next one, or easily expand the whole list. I was surprised to learn - I don't use Overcast normally, because I've been switching back and forth between Android and iOS - that it was that discrete. "Oh! Oh, there's this small button here. When I've hit it - right. Okay." So when debugging, it was like, "Oh, that button is good."

**Jerod Santo:** Right.

**Gerhard Lazu:** My heart is filling up now, because I have a history of holding things wrong... And I thought "I'm the only one that can't find it, dang it. What is going on here?" \[laughter\]  So you confirming it, Lars... That was exactly my thought, like "Where is the chapter support? I know we have it, because Lars and Jerod says we do... But where is it?" \[laughs\]

**Lars Wikman:** It's in Pocket Casts...

**Jerod Santo:** In Overcast there's a swipe gesture; like, you swipe one way to get to the advanced settings, and swipe the other way, off the album art, to get to the show notes. And then if you just swipe again, there's all your chapters. It is subtle. And then there's also that little icon.

**Adam Stacoviak:** Okay...

**Gerhard Lazu:** Can you tell that I'm not using Tinder? \[laughter\] I don't know why I think business and how it works. I don't know how to go left or right. It's just straight ahead, that's it.

**Jerod Santo:** Straight ahead. \[laughs\]

**Adam Stacoviak:** And then it also lives in like this little kind of three-lined circle icon next to the play -- I guess the playhead/timeline of the show. This is a missing ingredient. I almost wonder, is the reason why it's less supported is because less people are doing it? Because it does take a tremendous amount of work to plan for production-wise, actually name these things, and if you have two shows like us, where we have the plus-plus version... The time moves from the same show has two different versions... It's challenging.

**Jerod Santo:** Right. We chapter it twice. Yeah, so very few podcasts do it. And so that doesn't give the emphasis to the podcast apps to support it. But also the shows don't do it, because the apps don't support it. So it's kind of a chicken and an egg...

**Adam Stacoviak:** Yeah...

**Jerod Santo:** But there are certain shows who do it reliably, and once you have it with those shows, you just appreciate it. And we liked to TLC and sweat the details; like, we want our shows to be as good as they can be. So even though not that many people use it, if we can do it, we wanted to do it. So that's maybe why the UIs aren't so up front and center, because most podcasts don't have it anyway. So why would you put something up front and center that most shows don't have? I don't know, it's a tough problem...

**Adam Stacoviak:** Yeah, it's kinda like media queries with CSS. If you're on a certain viewport, for certain features there you should change your UI accordingly. Because chapters are in this thing, you can have a much more rich user experience, because you give the opportunity for the listener to enjoy the thing more, because you can jump around.

**Jerod Santo:** Check out Pocket Casts. Lars says they do a good job.

**Adam Stacoviak:** I'm gonna try it out. I haven't tried that one yet. I was on Castro and Overcast, and I've recently gone from Castro to Overcast, back again, you know... So we'll see.

**Jerod Santo:** Castro's is pretty cool, because it puts the name of the current chapter right there in the middle. And if you click on that name, it pulls up the whole deal. So it's kind of a little bit more front and center. They all have their different decisions they make, you know...

**Gerhard Lazu:** \[41:56\] We're still at pull request \#423, if you're still following along... And in that pull request the other very interesting thing which happened is that even though everything worked - this was the upgrade; remember, Elixir, Erlang, the base image, a couple of other things... For some reason, the builds in CircleCI stopped working; the container image specifically was failing to build. Now, pick your battles... I keep getting reminded this, or this week in particular I was reminded a couple of times... And the easiest thing was just to remove it. So what that means is that we're no longer building in CircleCI; it's just GitHub Actions via Dagger. And while they do exactly the same thing, it just goes to show that one works, the other one doesn't, even though not much has changed.

I'm going to drop the link in the show notes in case anyone's interested to have a look at that. But for us, again, the easiest thing was just to remove the CircleCI integration, so now we have lost our CI redundancy.

**Jerod Santo:** I'll say, this is going against your maximum of two of everything.

**Gerhard Lazu:** I know...

**Adam Stacoviak:** N plus X...

**Gerhard Lazu:** Well, N plus one... Just N plus one... Easy to please... Relatively... \[laughter\]

**Adam Stacoviak:** Well, I don't know how you feel about your routers, how many of those you've got lying around these days, but...

**Gerhard Lazu:** Well...

**Adam Stacoviak:** You'd get like two routers at one point, or three.

**Gerhard Lazu:** There is an episode coming about that, because I want more... \[laughter\]

**Jerod Santo:** So two wasn't enough...

**Gerhard Lazu:** Yeah... \[laughs\]

**Lars Wikman:** He's officially graduated from "two is one, one is none" to "three is two."

**Gerhard Lazu:** Exactly. That's right.

**Lars Wikman:** Two is one, one is none...

**Adam Stacoviak:** Oh, my gosh...

**Gerhard Lazu:** But they're just routers, so that's okay... Anyways...

**Adam Stacoviak:** He's crying again... He's crying...

**Jerod Santo:** It wouldn't be a Kaizen if Gerhard didn't cry...

**Gerhard Lazu:** It's just hot here. It gets hot. It's still summer, dang it...

**Adam Stacoviak:** He's cuttin' some onions...

**Lars Wikman:** So how many CI do you need?

**Gerhard Lazu:** I think you need at least two, seriously. You need two, just in case one stops working and you want to get to fix out. Now, we do have Dagger running locally, so you could in theory push it out, if you wanted to. Not everything, because the Fly integration hasn't been done yet with Dagger. But that's coming.

There's also a big change coming in Dagger, but there isn't -- again, a future episode is reserved for that, when we're ready to make it public. So I've been just delaying that specific migration to maybe Christmas. We'll see. I think it's going to be going to become an annual thing.

But talking of Fly and all these integrations, another thing which stopped working was the WireGuard tunnel in GitHub Actions. I don't know why; there's a pull request, \#421. Easiest thing was just to delete it and recreate it. Nothing else changed. For some reason, in GitHub Actions the WireGuard tunnel would just not connect, it would not establish. I don't know why. A mystery. I think we should leave it to that. Because there's something that Adam shipped... And if you're surprised, Adam, that's because Jerod shipped it on your behalf.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** So what did Jerod ship on Adam's behalf, like a boss, straight into master...?

**Jerod Santo:** \[laughs\] I don't even know what this is...

**Adam Stacoviak:** Like a boss...

**Gerhard Lazu:** The sponsors!

**Jerod Santo:** Ohh! I updated our footer for you, Adam. That was on Adam's to-do list on the last Kaizen.

**Adam Stacoviak:** Was it on my -- the last Kaizen?

**Jerod Santo:** Well, the one before the last one, I think...

**Adam Stacoviak:** Gosh...

**Jerod Santo:** Because you weren't here for the last Kaizen. Yeah.

**Adam Stacoviak:** Sadness...

**Jerod Santo:** Good job though. Like a boss, you got it done before Kaizen 70.

**Adam Stacoviak:** Nice... Thank you, Jerod.

**Gerhard Lazu:** So what does the footer say, Adam? Who are our sponsors/partners, officially?

**Adam Stacoviak:** Well, we now have Fastly, and we now have Fly. Those are our two primary infrastructure partners. Very excited. Fastly loves us. And we do some fun stuff with Fly. In fact, I just had a conversation yesterday with Brad Gessler. He's in charge of the Rails and Ruby parts -- or not in charge of, but leading a lot of the stuff happening on the Rails and Ruby front for Fly. A lot of fun stuff.

\[45:55\] I had a conversation recently with Chris McCord, talking about just the fact that you could put your application anywhere in the world... Brad called it, he said, "You'd have to have a Ph.D. to put your application in regions before. You'd have to have a Ph.D. in ops. Whereas we make it a one-liner, and we do all the hard work for you behind the scenes." I just love that.

And then even back to Lars, with your conversation with him on episode seven, and this argument, so to speak, on like Kubernetes... Just, again, to justify this - we never used Kubernetes because we needed it; it was because we want to play and have fun and learn, and share that knowledge. So I think that that whole roundabout, and those two partners are pretty core for us. So... Kind of fun to really see Fly come to fruition as we've watching it, and then actually become a user of it, and how it's benefitted us. So it's been nice.

**Gerhard Lazu:** Pull request \#418, where we now notify in Slack when a deploy succeeds. This was one of Jerod's wishes last time, and we got it out there. And I've noticed that a bunch of people left since we did that, and others were asking you about bots, whether that channel was going to be overruled by bots... And I think it has to do with my very long commit messages. Because we post them. So it's my fault, not just for enabling the feature, but also for writing very long and verbose commit messages. So what are we thinking about?

**Lars Wikman:** I don't think it's about your commit messages. I think it's about the low --

**Gerhard Lazu:** Lars, you're coming back. Thank you very much. Keep going. \[laughs\]

**Lars Wikman:** I don't think it's about your long commit messages. I think it's that that particular channel has been very quiet. And now the major contributor is a bot.

**Jerod Santo:** Right. And people hopping in that channel don't really know that it's about changelog.com dev. They just think it's about development, most like everything we do is about development. So it'd be weird to have like a "Here's where we talk about development" channel. But we haven't done a good job of using that channel for our discussion, because we do have a private dev team, which was private not because we want to be private, just because there are aspects of things that you share with a few, that you don't want to share, like keys, and embarrassing events, or whatever it is.

**Gerhard Lazu:** We don't do that, Jerod. No. We never did that over Slack.

**Jerod Santo:** What, share some keys?

**Gerhard Lazu:** Exactly. Secrets. We'd never do that.

**Jerod Santo:** Well, they delete them after 90 days, right? So we're good. \[laughter\]

**Gerhard Lazu:** Yeah, we're good.

**Jerod Santo:** Yeah. I mean, 90 days, you have exposure, and then you're just good to go now. So it's kind of a feature of Slack more than a -- you know they hide your messages. If we could just get them to delete them for us, that'd be great. There are things that are private, but we ended up just saying everything in there, and so that makes the dev channel look like a ghost town. And then a bot starts posting. So we just had a re-concerted effort to like, if it's not actually private, or sensitive, put it in the public dev channel. Let's just talk there. And since we've started doing that, I feel like that bot that posts the new deploys has been less of an annoyance, and more just like what you'd expect as people are working on things.

So I'm also cool with people leaving if they're not interested in this topic. Like, that's what Slack is about - join channels, leave channels... It doesn't hurt my feelings when someone pops out. I don't like your long commit messages though... No, I'm just kidding.

**Gerhard Lazu:** No, I know you don't. I'm gonna stop that business.

**Jerod Santo:** No, I do -- \[laughs\]

**Gerhard Lazu:** I'm gonna explain why I do things. I'm gonna stop doing that.

**Jerod Santo:** It's like, every time Gerhard ships something, there's a book. You ship two things - you ship the feature and you ship a commit message.

**Gerhard Lazu:** Which is usually longer than the actual feature.

**Jerod Santo:** Yeah, exactly.

**Gerhard Lazu:** Because I have to explain the why. Why did I do that? Good Git commits; they just stuck with me, forever.

**Adam Stacoviak:** I was gonna say, I kind of appreciate that, to some degree. I mean, it is verbose, but if you're in there, your commits are so readable, even at length... Whereas like if you are curious, we have it all there. You don't have to click through to it. So if you wanted to sort of see some of your logic... But I can also see the flip side, where it's like, "You know what - if it's just a bunch of bots, I'm not going to be here." But Jerod's sentiment is fine as well. Like, if that channel isn't for somebody, they shouldn't hang in there, and that's cool, too.

**Jerod Santo:** \[50:03\] I think the balanced move is like let the bot put the content in. But you know, the first line of a commit message is the summary. And then you skip a line and go into the details, right? Like, that's the convention for good commit messages. So what we really want to know is something just got deployed, and the high-level of what it is, and then click through for the details. So I think the move is just do the first line, truncate the rest. Obviously, the commit already has a link to it, so people who are interested and they want to read Gerhard's full story...

**Gerhard Lazu:** Book. Mm-hm.

**Jerod Santo:** ...can click through. The full book, yeah. So if you can get that done, I think that's the move. Because I do want to know when stuff is live.

**Gerhard Lazu:** I think that's a good improvement. The integration which we chose, it's from the GitHub Marketplace. I don't think it has that option when I checked. But I'm going to go look again. And by the way, that has to improve regardless, because I can't run it locally... And for me, it's a big deal. I wish I could be able to run a deploy locally, check that everything works, including the Slack integration, and all that stuff. Right now I have to commit and push to GitHub to see how it works in practice. That is not great, but that is a topic for another day.

**Break:** \[51:17\] to \[53:39\]

**Adam Stacoviak:** Let me ask you a question on this front there real quick...

**Gerhard Lazu:** Sure.

**Adam Stacoviak:** ...in terms of this. Who is this useful to? ...these deployments/commit messages. This GitHub Actions app throwing this information in there... Whom is it useful to?

**Jerod Santo:** It's useful to me.

**Adam Stacoviak:** Is it useful to anyone besides who's here, or anybody who's working with us? Or is it to be -- I mean, you can go read commit messages on GitHub if you want to read commit messages. Right?

**Gerhard Lazu:** Right. So the messages only appear when the commit has gone out in production. The last line even says "Shipped to changelog.com." So that commit is live. We only publish a commit --

**Jerod Santo:** \[54:20\] It's a shipment notification.

**Gerhard Lazu:** Exactly... When the code, when the change is live in production. It doesn't happen before.

**Adam Stacoviak:** I mean, I almost wonder if this is a dev team thing. If it's only useful to us..

**Jerod Santo:** I think it's useful to anybody who's interested in the ongoing development of changelog.com. Like, if you're interested in the way the stuff we're working on - maybe you're a user of the website, you want to see when something new... "I can go check it out in the browser", and you're like participating in what we're working on... Which I think we want more than just the four of us, or the five doing that... Then I think that that is useful to you.

**Lars Wikman:** It offers some discoverability of activity, like "Oh, there are things happening."

**Jerod Santo:** Yeah, exactly. We don't have to announce anything. It's our announcement.

**Adam Stacoviak:** Gotcha.

**Gerhard Lazu:** I think there's just like a small improvement that we can make to make it better, for sure. I think as a feature, it's useful. Maybe if it was maybe a bit more condensed; maybe right now it can be a bit verbose, especially when I write commit messages. Or when there's a large commit message that gets squashed and merged, then you have five or six commits going as one, and then it can be a bit too much. So in the spirit of Kaizen, we know exactly what to do for the next one.

One other thing that I want to mention part of this is that Marcos Nils - I work with him, and he was on paternity leave... And he was basically getting all the latest news, even before Changelog News got them. And the second the SSH commit verification was announced as a GitHub feature, he said, "Hey, this is amazing. It's out there. Gerhard, I know you're using GPG keys. Don't. This is so much better."

So part of this commit, what I did - I switched to signing my Git commits with SSH keys, and it worked very smoothly. So I can recommend to everyone listening to this to maybe do that switch. It's a lot easier than using GPG keys. I've been using them for a very long time to verify my messages, and I'm really enjoying the new SSH integration. Lars? Where did you stand on that?

**Lars Wikman:** I haven't bothered at all, with any of it.

**Gerhard Lazu:** I don't know what to say to you... Like, contradiction again...? Like, GDPR security and you're not bothering about this? How do we know that your commit is your commit? \[laughter\]

**Lars Wikman:** What does that have to do with the privacy of data?

**Gerhard Lazu:** Well, security - how do we know that your commit is your commit? How do we know that you is you?

**Lars Wikman:** Well, you can ask... No, I haven't dug into that. I don't --

**Gerhard Lazu:** I can't ask a commit message... "Hey, commit message, did Lars write you?" \[laughs\]

**Lars Wikman:** No, no, I haven't dug into that at all. I'm going to call it pragmatism, but it's also -- most of my work doesn't touch a lot of things where you need sort of software bill of materials, and a lot of supply chain security. I'm typically at smaller scale, and smaller projects. But if it's convenient, I don't see why not.

**Gerhard Lazu:** I think so. Okay. I haven't convinced you with Kubernetes, but maybe this will be different. We'll see. Jerod, where do you stand? Do you remember our SSH key story? Do you remember that?

**Jerod Santo:** I'm on pragmatist, Gerhard. I'm a pragmatist.

**Gerhard Lazu:** Yours was so old, Ubuntu just wouldn't let you log in anymore.

**Jerod Santo:** I do remember that. Yeah, I remember that. I rotate my SSH key every time I pair-program with you, which is once every few years... I'm with Lars on this one; I just haven't cared. I'm happy to be convinced. Sometimes it's a convenience versus benefit analysis, and it's always been like I've looked at it and I'm like, "Hm, that's a lot of work." So if this makes it super-simple and you can like toggle a switch, I already have my public private key on my computer, I do all my coding right here on this computer... So there's nothing else. Like, I just turn it on, and my commits are signed - I will happily do that. But I probably won't do much more than that, because I don't work on mission-critical systems that require such things.

**Gerhard Lazu:** \[58:15\] So what are we thinking for the next Kaizen? Because it's going to be episode 80, and it's going to be the last Kaizen for this year. What are we thinking? What would we like to improve?

**Jerod Santo:** This is the hard one...

**Gerhard Lazu:** No, no... This is meant to be the fun one. Things that you -- it will be Christmas, so you know, if you want to pimp up the website, we can do that... You know, just like add some bells and whistles with the Christmas spirit... One thing that I would really want to do is do the LastPass to 1Password transition. We were missing an Adam last time... I know that we talked about this in episode 50 as well. So I think it's just a matter of setting up 1Password properly, and then migrate our credentials across. Lars?

**Lars Wikman:** It sounds like what everyone wants to do over the holidays...

**Jerod Santo:** Haah!

**Gerhard Lazu:** Well, you do that in anticipation of the holidays... Because if you're good, you get nice presents. So you want to do good things. \[laughs\] I think it's got to ship before Christmas. I haven't counted exactly, but I'm pretty sure it will be before Christmas.

**Lars Wikman:** And if you do it poorly, you can no longer log into things.

**Gerhard Lazu:** True.

**Lars Wikman:** I'm on LastPass, and this won't really affect me, so...

**Gerhard Lazu:** Okay, Lars, I just want a new router. That's what I want for Christmas. \[laughs\]

**Lars Wikman:** Getting to four...

**Gerhard Lazu:** We'll see.

**Adam Stacoviak:** I think chapters for me has been such a big desire... I mean, there's nothing else for me that I can think of. I think you've given me my Christmas with chapters being in place... And I guess the one question that I didn't ask in the chapters section, since I'm mentioning it, is - Jerod, you mentioned that since we have all the data in the database prior to shipping this, what happens then to say like the last five or ten episodes of a show that may or may not have chapters in there? Is there some cron job, or a scheduler that goes back and says "Update those mp3s"? How does that work?

**Jerod Santo:** Yes, so I'm still working on some stuff with regards to that. So specifically, I'm in the process of writing a background mp3 updater that will get fired every time we hit Save on an episode. And it will go out -- if that episode has mp3 files associated with it, it'll go out, download them, retag them, and re-upload them, so that we can continually change the chapters and they'll be reflected. And so I'm going to use that code to go back to all of the other ones, because we started actually putting the data in early in the summer, and so we probably have a dozen or two episodes that have the chapters, but they're not in the mp3s. Once that code is done, I'll use it one time to use it on those old episodes, and going forward, it will always work.

So there's still some chapter stuff to do. One thing that I do want to do, which I haven't done, is actually integrate it into our on-site player... So you can click on the website and skip around, but the actual player, if it was chapters-aware, you could look at them, you could navigate via chapters while you're doing it, just like you can on the podcast app. So I know that not that many people listen on the website, but when you are on the website, it should at least be as good as everything else. So I'd like to get that done by the next Kaizen.

**Gerhard Lazu:** I remembered mine... It wasn't 1Password.

**Jerod Santo:** Oh.

**Gerhard Lazu:** Something bigger. It was clustering support. Proper clustering support so we can run more than one instance --

**Jerod Santo:** Yeah, you were supposed to have that done by this one.

**Gerhard Lazu:** True. See, someone's paying attention...

**Adam Stacoviak:** Dang...!

**Jerod Santo:** What happened...? \[laughter\] Saved the hardest part for last...

**Gerhard Lazu:** I did my research... I did my research.

**Jerod Santo:** Okay.

**Gerhard Lazu:** This is what happened. The caching library that we use - and I forget what it's called; I still have the tabs open... \[unintelligible 01:01:51.00\] wrote it, and he's recommending a different library. He's recommending Cachex, which has support for clustering.

**Jerod Santo:** Instead of ConCache. You're talking about the Elixir library.

**Gerhard Lazu:** That's exactly what I'm talking about, yes. ConCache, thank you. That's the one.

**Jerod Santo:** \[01:02:08.13\] Okay, ConCache is a really old one, so Cachex is probably more modern.

**Gerhard Lazu:** Exactly. So we have two options, and wanted us to talk about it. We can either remove caching, and see how it handles with no caching; we'll have, remember, multiple PostgreSQL instances of primary, secondaries, all that. Again, we'll have read replicas... So maybe caching won't be such a big deal. Or we can look into going to Cachex, and see how I do that. There's quite a bit of code changes, and I know that some of it is like custom... That's why I'm wondering whether we disable it, whether they'll be easier, before migrating to a different library. I don't know. You tell me, Jerod, what you think about that...

**Jerod Santo:** It's definitely used somewhat pervasively, and in ways that would be somewhat non-trivial to replace. It's not like just a few function calls that we could swap. So I'd have to look at what Cachex's API looks like, and remind myself how we're using ConCache in ways that I would have to port... You know, it would not be much more than half a day of work, I think. We could disable those caches, as you were saying, and then re-implement them later with Cachex. That would cause a few endpoints to probably get stressed, specifically our feeds, specifically the master feed and the plus-plus feed, and the Changelog feed, honestly, just because there's so much data that's just getting sent down the wire there...

**Lars Wikman:** Aren't they covered by the CDN?

**Jerod Santo:** They are. But when you purge, then you get hit. And then you have a request that takes a long time... Yeah, our feeds are cached by the CDN, aren't they, Gerhard?

**Gerhard Lazu:** Yup. Everything's cached by the CDN. Yup. And the CDN - I mean, I think our caching right now is fairly low. Like, we only cache for 60 seconds. If the origin is down, we cache I think, for longer. I can't remember exactly what the setting is. But in theory, if for whatever reason a response doesn't come in within a certain amount of -- I think it's like 10 seconds, or 15 seconds, it will serve it from the cache... Which - they should be served from the cache. Sorry, when I say cache -- sorry, from the CDN. From the CDN, sorry.

**Jerod Santo:** The unfortunate fact is that we've never quite got Fastly to not hit our origin as much as it does, and they have hops all over the world... So like it's getting hit by the CDN enough that if you have like a two or three-second response, you can handle one of those. But if you're going to do that every time Fastly asks us for our feed, then we get super clogged up. At least that was what was happening last time I did it, so I threw the in-memory cache and it fixed it. Maybe there's better ways of doing that. Or even optimizing those queries... I just know it's just collecting a whole lot of data. A lot of the actual execution time is literally just like taking the data and turning it into a template, because it's like a thousand episodes.

**Gerhard Lazu:** Okay, so we have a couple of improvements, a couple of ideas. I'm sure a couple more will happen in the background. Lars was especially deep in thought, so I think the best ideas usually come from the quiet ones... That's what usually happens, so I'm looking forward to that, what he's been cooking there.

As I mentioned, there's one more Kaizen this year. If you have ideas as a listener, send them our way. See how many of those resonate with us and how many are feasible within the timeframe that we have. But I'm very keen to see what you would like to improve. Whether it's the Changelog infrastructure, whether it's Ship It, whether it's other things; it is about improvement, and while it is infrastructure and ops-heavy, we do consider all the improvements that you send our way.

Lars, thank you very much for joining us today. It was our pleasure.

**Jerod Santo:** Yeah. Thanks, Lars.

**Lars Wikman:** The pleasure is all mine.

**Gerhard Lazu:** Jerod and Adam, as always...

**Adam Stacoviak:** Thank you so much.

**Gerhard Lazu:** ...we are back, because we -- Adam missed last time.

**Jerod Santo:** We went from our smallest Kaizen ever to our biggest Kaizen ever.

**Gerhard Lazu:** I like that. Thank you very much, everyone. Until next time, Kaizen.

**Jerod Santo:** Kaizen.

**Adam Stacoviak:** Kaizen!

**Lars Wikman:** Kaizen.
