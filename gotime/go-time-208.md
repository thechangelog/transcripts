**Natalie Pistunovich:** It's very exciting to be in a virtual room with people who've used Go a lot longer than me. I'm super-excited to welcome you all. Roger and Miki are our panelists for today, and Johnny, you are the co-host for today. Good evening, morning, afternoon, everyone!

**Johnny Boursiquot:** Hello.

**Miki Tebeka:** Good evening!

**Natalie Pistunovich:** So Miki, you are an all-time gopher. You are using Go for at least a decade now. You are old-time developer -- old-er times developer; you started using in '97. What is the math behind that? What year are we now?

**Miki Tebeka:** Yeah, it's around 25 years now...

**Natalie Pistunovich:** 25 years... Man.

**Miki Tebeka:** Yes. That's professionally. I did some as a teenager, just playing around. I professionally started in '97.

**Natalie Pistunovich:** That's really fun. That's a lot.

**Miki Tebeka:** It makes me feel old.

**Natalie Pistunovich:** And you are also teaching Go, and you're writing about Go, and you're making videos about Go, and you're also developing in Go. And you do all that with your company, 353solutions. Thank you for joining us from Tel Aviv.

**Miki Tebeka:** Yes, Binyamina.

**Natalie Pistunovich:** Binyamina.

**Miki Tebeka:** Close enough.

**Natalie Pistunovich:** Roger, you are an aging gopher. You describe yourself like that. And an ex Plan 9 \[unintelligible 00:03:39.22\] long-time contributor. That's fun. And you work at InfluxData. You're also a meetup organizer. Actually, both of you are meetup organizers.

**Roger Peppe:** This is true. Hi.

**Natalie Pistunovich:** You're joining us from the U.K.

**Roger Peppe:** Yup. I'm in Northumberland, in the North of England. Far North of England. Just South of the Scottish border.

**Natalie Pistunovich:** And you're actually bailing on your own Go meetup to join us today.

**Roger Peppe:** Yeah, unfortunately a clash... But at least I can listen to that back to that. I can't speak while I'm listening to that.

**Natalie Pistunovich:** \[00:04:08.08\] Only the organizers were organized. I'm talking a lot myself here, not about my co-organizer for this episode... Johnny, hi!

**Johnny Boursiquot:** Hey there, how's it going?

**Natalie Pistunovich:** Good. You have been using Go for 8 years, 9 years?

**Johnny Boursiquot:** Yeah, something like that...

**Natalie Pistunovich:** That's a long time.

**Johnny Boursiquot:** Yeah, it's been great.

**Natalie Pistunovich:** I want to start with the panelists, but actually, first I want to ask you, Johnny, how did you start, and why did you start using Go? How did that happen?

**Johnny Boursiquot:** It was all kind of accidental. Career-wise I was in a place where I'd been doing Ruby, my previous full-time language, for a while. Before that I'd done some PHP, some ColdFusion, some Java and whatnot... I was kind of looking for something new.

Around the same time, a good friend of mine, Mark Bates, was also -- every once in a while he comes onto this show... And we travel in sort of the same circles in the Boston area... We were Boston Ruby co-organizers at some point... And he started getting into Go and he sort of turned me on to it and he says "Hey, this is pretty cool. Check it out." And yeah, that's how stumbled onto it, and sort of got more and more curious about it.

I think a few months later, both Mark and I found ourselves headed to the very first GopherCon in Denver. Gosh, I can't even remember the year now; 2013, 2014... Ever since then -- it was kind of a small(ish) room, kind of a small(ish) conference, certainly relative to the size it is now. There were maybe like 500 folks, I would say, at most, and it was all single-track, and you had like a dozen speakers... You'd go up there and talk about the experiences... Rob Pike was the first one, and with each speaker that went up there and talked about their experiences with the language, and how it differed from other statically-typed languages and whatnot - the more I saw of it, the more I was like "Okay, this is interesting. This speaks to me." Especially from having done years of dynamic programming, I was like "Okay, I think I might be ready to step my foot back into the more aesthetic typing kind of language", because I'd been so many times with dynamic languages... For certain things, obviously. I'm not saying dynamic languages are a bad thing, but I was kind of feeling a need to go back into the more static side of things, for a number of reasons... And this sort of fit my desire, my need for that kind of technology.

So yeah, ever since then it's been, you know, first doing some side projects, and getting more comfortable with it, and eventually getting a job, writing it full-time... And yeah, every job since has been -- basically, Go has played a major role in every role I've had since then, which I'm grateful.

**Natalie Pistunovich:** So are we here... A wonderful member of the community, with all the teaching that you're doing...

**Johnny Boursiquot:** Oh, thank you.

**Natalie Pistunovich:** It's awesome. Roger, how about you? How did you find yourself gophering?

**Roger Peppe:** I think I had a bit of a different background to most people. I got into this system from -- it came from Bell Labs, called Plan 9, way back when I was at university, in the early '90s. And I've been following along with that, and they also produced a system called Inferno, which started at the same kind of time as Java. There was a kind of JIT basis to it. It had this really interesting language - I thought it was a really nice language - called Limbo. And that had a lot -- it actually had a lot in common with Go.

So I've been doing some stuff with Inferno \[unintelligible 00:07:32.11\] had a full-time job doing that area... And that was kind of fizzling out, to be honest. And on the day it came out, somebody mentioned, "Oh, Go has come out today, this new language." And I was like "Oh, this is interesting." So I was actually staying in the Bay Area at the time, and I found that out in the afternoon, and I was going into town -- I played the fiddle and I was going into town to play at a music session in town... And I found a printer and I printed out the specification, and I read it on the bus, on the way to San Francisco... \[unintelligible 00:08:09.08\] "Oh, yeah. Oh, this is interesting." So that's how I found out about Go. That's how I started. And from then on, I didn't look back, really. I basically -- I took a year not doing anything, not doing any paid work. I was just working on Go in that year, basically.

**Natalie Pistunovich:** \[00:08:28.16\] When you say that somebody told you about that - did you overhear a conversation, did you find it on Reddit? How did this magic happen?

**Roger Peppe:** So the reason I was in the Bay Area was I was with a guy that I worked with/worked for; he mentioned it to me, he said "Hey, check this out." I was like, "Oh."

**Natalie Pistunovich:** And there was no Slack. How did that happen? \[laughs\]

**Roger Peppe:** How did he find out? I have no idea how he had actually found out. I remember joining the IRC channel at the end of the day after, and it was really active. Rob Pike was -- I'd actually met Rob and various of the others, like Russ and the people at Plan 9, because they were all at Plan 9 people before. And I was like, "Oh, this is really cool! Look, directional channels!" Because Limbo had channels like Go, but then there were some things that Go added, like directional channels, rather than just first-class channels. It was pretty interesting.

**Johnny Boursiquot:** You mentioned you read the spec. Most people don't start out reading a spec when trying to pick up a new language...

**Roger Peppe:** Well, honestly, they write so well, and the spec is so readable... If you've ever read the Go spec, it's ultra-readable. And also, I kind of knew what I was looking for, I suppose... I read through it, like "Okay, now I know the language." Kind of.

**Miki Tebeka:** Yeah. So I just checked, there are 163 people on the GoNuts IRC channel right now. So it's still out there.

**Roger Peppe:** I haven't looked at the GoNuts IRC channel for a number of years now.

**Natalie Pistunovich:** I can't say \[unintelligible 00:09:51.01\] Miki, how did you find out about the language?

**Miki Tebeka:** So for me it's a bit of a twisted path. I did mostly Python at the time, and they started talking about adding asyncio to the language, which I didn't like. So I looked for other languages who support both a lot of concurrency, and can use all the cores easily. If you're interested, there's one article called "The free lunch is over", which talks about the fact that clock cycles are staying the same, and now we get more cores, and traditional languages - it's a problem for them to use that. And the second one is the \[unintelligible 00:10:28.21\] how can I serve 10,000 connections from a single process.

So I was looking for a language, and I looked at several of them. I like programming languages in general... And I tried out Erlang, Clojure, and Go. Go was at the very beginning; without the Go tool, we used makefiles, and... Because I came from dynamic languages, I started actually with Clojure, and it was nice, until my hatred of the JVM drove me away. Then I came back to Go. It was a bit more mature. And ever since, I'm really happy there.

**Natalie Pistunovich:** I have to say, I missed a very interesting part, which is the beginning of exactly how did you hear about that. I know it was also not Slack.

**Miki Tebeka:** Well, I have a one-bit memory, so it's really hard for me to remember 11 years ago... But I went out looking for languages that can fit the profile I was looking for. So I don't remember exactly where I heard about that. Google came out with something, one of my RSS feeds, or...

**Natalie Pistunovich:** Hm. That was a wonderful tool. Miki, I think we lost you, just like we lost the RSS feed by Google, which was a wonderful tool... \[laughter\] We all loved it; I know I loved it very much... But you're back.

**Miki Tebeka:** Okay. So yeah, RSS... \[laughter\] I think just the mention of RSS made everything freeze.

**Roger Peppe:** It was Google Reader, right?

**Miki Tebeka:** Yeah...

**Natalie Pistunovich:** Google Reader, yeah. Is that the name? Yeah, I think so. That was not written in Go.

**Roger Peppe:** No... It was great then.

**Johnny Boursiquot:** It was.

**Natalie Pistunovich:** \[00:11:58.17\] I think I'm one of the few people that I know that started using Go because of their work, but also used Go for a long time. I started it in 2014, because the company that I started working at was written exclusively in Go. Now it's kind of more popular; more and more people are joining, because their employer is already using Go for a while... But now Go is 12 years old, so... We have expanded.

**Johnny Boursiquot:** It's also common now -- or I should say more common now for experienced developers who perhaps have the option/luxury of going on a longer job search, to almost exclusively be looking for companies that do Go almost exclusively, or a majority of their stack.

I know for me personally, if I were to start looking for work now, that would be one of my primary influencers for where I go work. "Do you use Go? Is that your go-to language for things?" Not that I don't wanna learn something new, but I feel so much more productive in the language after having used it for so long. I almost feel like the quantity or quality of value that I can deliver as a senior-level engineer is kind of getting more and more tied to Go. Now, that could be a double-edged sword, because technology doesn't last forever.

**Miki Tebeka:** Well, Cobol, you know...

**Johnny Boursiquot:** \[laughs\] There's that...

**Natalie Pistunovich:** And now it's a great job to have Cobol.

**Johnny Boursiquot:** Yeah, there's like two people left who do it, so... \[laughter\]

**Natalie Pistunovich:** But GitHub's Copilot supports -- or Codecs; one of those AI engines that do code, they support Cobol. So we're good. The banks will survive. \[laughter\]

**Johnny Boursiquot:** It hasn't gone away, right? Yeah... But I'd say from a career standpoint, if somebody's listening to this podcast and you're wondering, "Okay, I'm dipping my toes into Go. Should I make the jump?" I will resoundingly say "Absolutely." I think Go is no longer in the infancy of its adoption, but I think it's on the infancy of its longevity. It's gonna be around for a while. It's gonna be like a Java. Hopefully not too enterprisy... But it will be around, it will have the longevity of something like a C or a Java. It's gonna be around, because so much technology is being built with it, and that stuff's not gonna go anytime soon; there's only gonna be a greater and greater need for Go developers... So now is as good a time as any to jump on it, because you're not gonna be without work if you know your way around Go.

**Miki Tebeka:** Yes. I think every language has a killer feature, and for Go is the Docker and Kubernetes ecosystem that's giving a big push.

**Johnny Boursiquot:** Roger might have a different opinion... What do you think, Roger?

**Roger Peppe:** Early on in Go, of course, I wanted a job in the Go ecosystem. There was no Go ecosystem at that point... And I realized that, you know, this was the language that I actually wanted to work in, and there was nothing... Luckily, after I'd been doing it about a year -- and the nice thing about joining a language really early on is that there's loads of low-hanging fruit, loads of bugs to fix, and loads of little features, like "Oh, it's missing this", so it's really easy to get into contributing.

Because originally, it was things like -- I remember this, time.sleep used up a whole OS thread if you did a sleep in the runtime. This is not great if you want lots of goroutines that are actually doing some time-related stuff... So I did the first implementation of time.sleep that didn't use an OS thread.

And there was me and this one other guy, Gustavo Niemeyer, who you might have heard of, and we both produced these different implementations, and had this nice interaction. A little bit later, he was like "We're just starting this stuff in Go. Do you want a job?" and I was like, "Okay then."

I think Go has got loads of potential niches. I think Kubernetes is a really big one, but there's nothing about Kubernetes that necessarily means that anything has to be programmed in Go... Because mostly you interact with it through an API, and it just happens that most of the API is defined in Go, so it's easy to use... But I think the engineering properties of Go are really great. It has some excellent properties compared to something like -- I mean, Rust perhaps is safer, but it's also a lot harder to use. So I think it hits a sweet spot in lots of respects.

**Natalie Pistunovich:** \[00:16:15.17\] You mentioned, Roger, that you spent your first year after discovering Go just playing around with it and building projects for fun... Some of the things you were doing is contributing to the codebase... What other projects did you think that Go would be a good match for, and what in the properties of it made you think that?

**Roger Peppe:** I'm not sure I had a good idea about what particular kind of areas it might be a good match for. I was playing around, I did some graphics stuff... There was an X11 driver for it, so \[unintelligible 00:16:43.12\] playing around with that.

I built little tools... One of the tools I built was this thing called godef, which enabled you to click on something in your editor, on a Go symbol, and it would take you to where that symbol was defined. And that was actually used in Govim for quite a long time, because I built it in a way that was pretty easy to use. I actually built it for the editor that I use, which nobody else uses...

**Johnny Boursiquot:** Is that Emacs? \[laughter\] \[unintelligible 00:17:13.02\]

**Roger Peppe:** Yeah... No. Vim. \[laughter\]

**Johnny Boursiquot:** Oh, nice. Nice.

**Roger Peppe:** Yeah, so I was just building little things... Godef ended up quite widely used, and I went back earlier, thinking \[unintelligible 00:17:29.29\] back in May 2010; around then I was kind of starting... Because the way that Godef came about is I was looking at the Go AST packages and the Go parser packages, where they make it really easy for you to parse Go source code... And I was like "Oh, that's really cool." And I just built a little thing to parse it, and I was like, "You know what - you could probably work out a way... If you just had a little bit of intelligence there, you could actually work out where these symbols were defined." You can actually do it really efficiently... Unfortunately, Godef these days is really slow, because it uses the standard tooling, which basically \[unintelligible 00:18:09.02\] everything into memory. At the time it was pretty nice, because it would just do it lazily. So it would just read only the symbol, only the bit of code that it needed, and it would just resolve exactly that; it would resolve a symbol within a couple of milliseconds, from scratch, from cold... It was pretty cool at the time. Now, of course, you've got Go IDE, or Go -- I can't remember what it's called.

**Johnny Boursiquot:** GoLand?

**Roger Peppe:** I'm thinking of the integrated developer stuff...

**Miki Tebeka:** Oh, the language server?

**Roger Peppe:** Language, yeah. Gopls.

**Johnny Boursiquot:** Yeah, every editor uses now, right? I think almost exclusively, at this point.

**Roger Peppe:** Almost every editor, yeah.

**Miki Tebeka:** It's nice that IDE developers decided on the same protocol for every language. It makes it easy.

**Natalie Pistunovich:** Miki, what about you? What were the first project or projects that you found Go to be a good match for them, and what in the specs then made it stand out?

**Miki Tebeka:** For me it was -- I wanted to try Go, and so I wanted to write something, and I said "Let's write something that has a value." And I just came out from a company that did a lot of work with Selenium, and I said "Okay, let's write the Selenium driver for Go", which I did. And then I learned a lot about how to write Go code, interfaces, networking... Everything.

So it was a good match for Go to do that, to basically run tests. Currently, it's maintained by Erick, from Google. Thank you, Erick, for doing that.

**Roger Peppe:** Which Erick?

**Miki Tebeka:** Oh, I forgot his last name...

**Johnny Boursiquot:** Not Clapton.

**Miki Tebeka:** No.

**Roger Peppe:** \[unintelligible 00:19:37.13\]

**Miki Tebeka:** As a sidenote, it's really hard to get rid of your open source project, to find someone else to maintain it. So I'm really thankful for that. After that, I dipped my toe that says "I'm going to do something inside Go itself." So I wrote the initial implementation for the parallel testing feature. That was my first interaction with the core Go team, and I learned so much - how to do designs, how to do reviews... I think it was like 14 cycles of code reviews before it got in. I think, Roger, you were there, as well.

**Roger Peppe:** \[00:20:13.05\] Sorry, which feature was this? I missed it...

**Miki Tebeka:** The parallel testing. T.parallel.

**Roger Peppe:** Oh, the parallel stuff.

**Johnny Boursiquot:** T.parallel. Parallel testing. Okay, gotcha.

**Roger Peppe:** Yeah, absolutely. That's great.

**Johnny Boursiquot:** Yeah, that's pretty awesome.

**Miki Tebeka:** And after that, a lot of other things.

**Johnny Boursiquot:** I just snuck Go into every organization I could find, wherever I went to work... I just snuck it in, and I'd usually do it with like a command line tool. That was my beachhead, basically - just build a CLI tool, and then deliberately have another developer on the team extend it, say like "Oh, you wanna add support for that?" "Yeah, just go \[unintelligible 00:20:44.19\] check it out, and if you have any questions, let me know." \[unintelligible 00:20:47.03\] "Yeah, it'll be fine. It'll be fine. Just check it out, and if you don't have Go, just download it here. It's super, super-simple." And they'd kind of give me the side-eye and be a little skeptic, but "Oh, it'll be fine. It'll be fine. Do you want me to come pair with you? Let's just do it." And we'd sit down, and all of a sudden you'd see all of the hesitation start to dissipate a little bit, because they're like "Okay, this is kind of nice. I don't need any super-fancy things, or anything heavy... Oh my God, it compiles so fast! It's almost like I'm scripting." I'm like, "Yeah! That's awesome, isn't it?" And next thing you know, we'd open up a PR, and boom. And that was it.

One at a time, I'd just be converting people -- obviously, not every company was appreciative of how I was converting everybody into using a non-sanctioned language... But eventually, folks started to see the value. Because beyond the CLIs, what typically would happen, there'd be one developer - not me; at that point I'd be removing myself from the equation and letting people just run with it and see where they go with it... And somebody would suggest, "Hey, how about we write this API, this REST service - how about we do that in Go? Because I heard it's pretty fast, pretty good at that stuff. And there's libraries we can use already... Can we just do one of those things?" And then \[unintelligible 00:22:03.29\] manager or technical lead would be like, "Okay, fine." And then we'd try it and it would be so fast compared to other things, which I will not name, because that's not the point... But it'd be so much faster than what they typically would be using... And then that's really how that whole transition would start to happen. People would be like, "Oh, I'm more productive. This is a safe language to use; it's gonna catch things that normally I'd go find out about at runtime." The process for getting this work done, even when novice developers who are actually adapting with concurrency stuff and they wanted to use goroutines and everything else - with a little bit of guidance, they were so productive.

At that point, once I've planted that seed, I'd just step back and watch it grow. Because Go really just speaks for itself. It's that good of a language.

**Miki Tebeka:** That is an awesome strategy. I think that command line clients - the fact that Go compiles to a static binary is a great thing, because I think CLI tools... So what do I need to install? Just grab the executable. No JVM, no pip install, no Npm, or whatever... So this is really a good niche to start.

**Break:** \[00:23:10.07\]

**Natalie Pistunovich:** We had earlier, or last month, an episode about hacking with Go, and the same thing - the fact that it's so easy to cross-compile to everything is the favorite feature of some people who use Go for their malware. It is very convenient, it's very efficient.

**Johnny Boursiquot:** Nice. \[laughter\] Ransomware. Go is friendly to ransomware. You heard it here first.

**Natalie Pistunovich:** GoPay. \[laughter\]

**Johnny Boursiquot:** Nice.

**Natalie Pistunovich:** I didn't write that... \[laughter\]

**Miki Tebeka:** So you say...

**Natalie Pistunovich:** So you mentioned some of the contributions that you were doing to the community over the time; or to Go in general. Obviously, everybody here actually is a community organizer, right? We all organize meetups in our local area...

**Johnny Boursiquot:** Yup.

**Natalie Pistunovich:** So there's that, there's contributing to the documentation, there's making some pull requests of the fun features that you added... Let's chat a little bit about that. What are some fun contributions that you feel that you've made?

**Miki Tebeka:** I started the L.A. Gophers when I was in L.A. The fun contribution was asking Francesc Campoy to come over, and he came over from San Francisco on a bike.

**Natalie Pistunovich:** Wait, how long was that?

**Johnny Boursiquot:** How far is this?

**Natalie Pistunovich:** Isn't that like a one-hour flight from San Francisco to L.A.?

**Miki Tebeka:** Yeah, something like that. But on bike I think it was --

**Natalie Pistunovich:** That must be a lot on the bike.

**Miki Tebeka:** Yeah.

**Natalie Pistunovich:** Was it more than one day?

**Miki Tebeka:** No, I don't think it was more than a single day, but it was a very long day for him. So this was a fun contribution, just making him get in shape... But I think the meetups are important. Now I'm doing it here in Israel... It's good for the community. I think Covid is doing really horrible things to meetups. So we're going back to physical ones start of next year, January.

**Natalie Pistunovich:** Oh, already next year. Nice.

**Miki Tebeka:** Yes. We helped to start. And I think the local meetups are really important. A lot of companies don't know that other companies right next in the building are doing Go, and it's sometimes fun, like "Oh, you're doing Go as well? Let's talk about what you're doing, and see some libraries."

I think this in-person meeting is sometimes even more important than the talks themselves. So I really like it.

**Natalie Pistunovich:** Can you tell us a little bit about how Go got adopted in the Israeli scene?

**Miki Tebeka:** Oh, a lot of companies --

**Natalie Pistunovich:** Would you say it happened early on, would you say it happened recently?

**Miki Tebeka:** So I'm involved both in the Python and the Go community, and it was more Python, less Go, and now it's about 50/50 Python and Go. So it's taking over, I would say, maybe in the last 3-4 years. But maybe it's just me in my eco-chamber. So I'm not totally sure if that's true.

I see more companies using it. It's more widespread. Big companies, big names, a lot of interesting things, both in the cyber section, telecommunication, ad tech - you name it, it's there.

**Natalie Pistunovich:** Would you say that it's something that happened early on, so in the beginning of Go, so like the last 10-12 years, or recently?

**Miki Tebeka:** No, I think in the last four years, something like that.

**Natalie Pistunovich:** Nice. Interesting. Roger, how is that in the North of the U.K.?

**Roger Peppe:** Well, there was a long time where I thought there were actually no gophers here at all, absolutely none. There was a time when GitHub did this "You are the top developer in your area" thing, and I was like "Oh, and the top Go developer in the \[unintelligible 00:27:50.12\] then there's none", right? Except there's someone else. I'm like, "Who's this other person?" So we got chatting on Twitter, and it's like, "Oh, there's someone else. Maybe we should have a meetup."

**Johnny Boursiquot:** Of two. \[laughter\]

**Roger Peppe:** \[00:28:06.16\] Like, okay, who knows, there might be others... I think I had a meetup account for joining some other Go meetup in the U.S, and I was like "Oh, I'll just put it on and see what happens." And a bunch of people came along, and so that's how our meetup in Newcastle got started, and it just sort of carried along.

**Natalie Pistunovich:** When was that? How many years ago?

**Roger Peppe:** Now, that's a really good question... About maybe five years ago, something like that. It's been going a little while.

**Natalie Pistunovich:** So for five years you were kind of alone in your area, and then the next five years were more fun.

**Roger Peppe:** Yeah, but you know, you're never alone on the internet. \[laughter\] I mean, that's pretty much it. I didn't know of anyone... To be honest, most of the people that come along to the meetup tend to be people that are interested in Go, not people that are actually actively working in Go.

But ever since that first Go job, I've been working remotely, so that's the thing. They don't have to be anyone in your local area that programs in Go or programs in whatever you want to program in. You can just get a remote job and that's awesome, because now I'm in the middle of absolutely nowhere, in the \[unintelligible 00:29:10.14\] of Northumberland, and I've got a fine job at Influx, and it's awesome.

**Natalie Pistunovich:** And other than the meetup, do you see that the tech ecosystem is adopting Go, or how is the adoption looking like?

**Roger Peppe:** I don't know, because I don't really keep a finger on the pulse. I just see there are lots of people using it, I see new projects made with it... There are a bunch of possible alternatives. The one that's often mentioned is Rust. But having tried to use Rust... You know, I've spent a little bit of time... I'm like, "This isn't a real alternative. This is a complementary thing."

**Miki Tebeka:** Exactly.

**Roger Peppe:** And somebody could make a version of Rust which had a garbage collector, for example, and then it would be way, way easier to use... But I don't see people actually doing that, and I think that Go has some fantastic things going for it. And I think the way forward with generics and stuff - they fit really nicely into the language, and I think that' it's a really positive thing, and I think more and more people will continue to use it.

**Natalie Pistunovich:** Johnny, how is it for you? Do you see -- how did the meetups start, how long has the meetup going, how is the tech ecosystem?

**Johnny Boursiquot:** Well, I'm in kind of the DC Metro Area, so there's a good bit of technology activity going on in these parts... And before that, I was in the Boston area. That's actually where I went from organizing the Boston Ruby group to starting the Boston Go User Group. Actually, in all fairness, there was a Go user group, but it was kind of dormant, so I'm like "Okay, I'm gonna start a new one." \[laughs\] And then a couple of weeks later somebody reaches out and says "Hey, we already had a meetup." I'm like, "Well, it wasn't meeting." \[laughs\] So we kind of joined forces and kind of rekindled it, if you will.

I did that for maybe three years... By the time I left Boston to come back down to Maryland, where my brother family resides... Yeah, it was like a thriving community, and I'm grateful that I had a hand in that, and I'm glad I had people join me along the way to help keep it alive. To this day it's still going strong, so I'm pretty happy about that.

The moment I relocated to Maryland -- the closest metro area to me is Baltimore, so basically I had to end up driving a good 30 minutes to get to Baltimore to actually run a meetup... But there was no Go meetup in this area, so again, here too I'm like "Okay, I'm gonna start one."

So I was basically trying to be the change I wish to see, right? So I knew there were some people interested in it, and I was like, "You know what - you've got the experience in starting and running meetups, so why not?" So I did it for the one around here, and -- yeah, we've been going strong for five years now. We've had the Baltimore Go Meetup for 4-5 years now.

Like we were saying, the pandemic has had sort of a chilling effect on all meetups. We used to meet face-to-face, and part of the fun was meeting face-to-face, and the camaraderie, and everything else, and that added an additional layer to it. Because we were already all online most of the time during our jobs, and getting a chance to meet in person was part of the appeal. And then we had to go back to all online... Then it became "Oh man, I've gotta get onto another Zoom today?" So it kind of had a chilling effect; I think every meetup organizer will tell you that.

\[00:32:24.13\] Like everybody else, I think we're gonna try to get back to face-to-face in Q1 of next year. We'll see what happens, if it's January of February, but we're definitely gonna try and do that again. We tried doing that about a month and a half or so ago, after the vaccine was starting to spread and some of the restrictions were being lifted, but it was still too early. We had like three people show up, when we usually had like 20. So I was like, "Okay, it's still a little too early." So now we're gonna try and do that again in the new year.

Obviously, the numbers continue to go down, even if they did a little rollercoaster thing, but hopefully it's a downward trend, and that way people feel more comfortable in joining us back in person. Because I really do believe that helps foster community.

Beyond that, really, one of the best ways that I can contribute - that I used to - also in person was to run workshops in the Baltimore area... Free workshops for people who wanna learn Go, and in a lot of cases wanted to learn programming, period. I've had the opportunity to introduce Go as a first programming language to a lot of folks, and again, here too, I'm absolutely grateful for the opportunity to do that.

For me, the biggest thing I can do as a teacher is to make you fall in love with something. If you're coming into programming for the very first time, a good experience with a teacher can make or break your desire to continue to learn and to keep going and stay in this industry, break into this field, which could be life-changing from a career perspective. So whenever I get these opportunities, I do not take them for granted. I try to do the very best that I can as a teacher, as a trainer, to relay information the best way that I can, so that I can sort of foster that appetite, foster that love... Not just for Go, but really for the field in general. The whole field can benefit from a diversity of thought, a diversity of people, so I definitely try to do that... And I teach workshops freely, and that's something I'm very much looking forward to being able to do again once we're able to meet face to face. But yeah, it's much harder to do these things online these days. I think people are zoomed out... Hangouts, webinars, whatever... I think people just wanna go back and see the face-to-face, in-person kind of experience. I'm looking forward to contributing back in that way.

Interestingly enough, I met people who think, "Oh yeah, you must be contributing a lot of code to Go, and everything..." I'm like, "No, there's not a single commit..." Well, there might be maybe one commit, but there's not a ton of commits. You're not gonna see my name all over that Go codebase. My contributions are about community, they're about people, they're about bringing more people into the Go community, and that's where I see myself making the biggest impact... And that's usually how I go about it.

So for those of you who are thinking "Man, the only way I can contribute is by writing code", absolutely not. There are so many ways you can contribute. You can make things a little easier for those who do wanna go into code, who do wanna sort of contribute in different ways. There's so many ways to contribute, it's not just GitHub commits that make you a contributor to a community.

**Miki Tebeka:** Yeah, I think there's a big difference between a user of the language and a developer of the language. You can be a good citizen in the Go community by using the language and making it better, without actually developing any feature or doing any bug fix on the language itself.

**Roger Peppe:** Yeah... Go, the language, is so mature that all the rough edges have been \[unintelligible 00:35:41.16\] As I was saying, when I started, there were loads of sharp edges. And when there are sharp edges, it's really easy to just dive in. It's like, "I've got this need to fix this thing." But now it's really hard to get into actually -- there aren't so many things to fix. And the things that are there to be fixed are pretty hard to fix. They're not easy, because if they were easy, someone else would have done it, right?

**Natalie Pistunovich:** \[00:36:04.24\] Yeah.

**Roger Peppe:** So I think that Johnny's absolutely right. I hardly ever contribute. I kind of like contributing to Go, but I haven't. I've done like two features in the last three years, or something. It's nothing.

If you actually wanna contribute to Go, the core thing, as well as the social thing, just filing good issues, if you have problems \[unintelligible 00:36:25.13\] can be really, really helpful, I think. If you have an issue which you think is a bug, then you can complain about it... But filing a really good issue is actually really helpful.

**Johnny Boursiquot:** Right, right.

**Natalie Pistunovich:** And if you are an early user and you're not even finding bugs, what you can always do is answer questions on Slack, for example. There's always somebody newer than you, and somebody who answered many newbie questions; sometimes they will be over-answered and will not want to answer, so step in, answer some questions, whatever you can. It's always a great way to nurture the community.

**Roger Peppe:** Some of the Go team members are really good examples in that regard. You see on the GoNuts mailing list, Ian Lance Taylor - he's one of the original three contributors, and he basically knows everything, and he will not ever look down on the question. He answers the questions at face-value really well, and it's a \[unintelligible 00:37:24.21\] lesson to all of us, not to be snarky. Because it's so easy, like "Oh, they're asking that same thing that I've heard asked a hundred times before", to just say "Go look back into the archives."

**Natalie Pistunovich:** Read the docs, yeah.

**Roger Peppe:** Yeah, read the docs. Or RTFM.

**Natalie Pistunovich:** We do try to avoid this. It's true.

**Miki Tebeka:** I think that community vibe which Go managed to do a really nice job of creating a good, helpful, polite community is very important. I think people that are coming into Go and they ask questions - they feel welcome, which is awesome.

**Natalie Pistunovich:** Feeling welcome is always great. Would you all say that a decade ago it was also a welcoming community? Yeah... Nodding for agreement. Are there any interesting changes that you noticed over this decade in the community, or -- obviously, the language changed a lot as well... Anything interesting that you would point out from those changes?

**Johnny Boursiquot:** Something immediately comes to mind, and that's the code of conduct, that's gone through a few iterations. We have a Go code of conduct for the community that's gone through a few iterations, that's now headed by and managed by a core group of people on the Go team, and some other involved community members as well. That's gone through some iterations, and it's gotten more refined, and all in the pursuit of making this a safe and welcoming community for everybody.

Every now and then \[unintelligible 00:38:45.05\] whether they realize it or not. What I can say to that is basically if you know that you're running afoul of our code of conduct - you don't necessarily have to agree with everything it says, but you have to respect it, because this is sort of the body of work that basically says "This is the expectation that we have of everybody within that community." Again, you don't have to agree with everything, but you at least have to respect it. And if it's not for you, and you think "Okay, there's something in there I just cannot live with", maybe you practice Go in isolation; nobody's gonna prevent you from doing Go, but your involvement in the community may be limited, or you may be self-limiting your participation in the Go community if you're not willing to adapt to some of those things. Again, not everything in there is gonna be a hundred percent agreeable to everybody, but we all have to have some sort of common -- like a base to go from, if we wanna have something that works for most people. Again, nothing's gonna work for everybody, but we all need some sort of baseline to go from.

We do a pretty good job, enough so that people who do come into the Go community want to stay in it, and I think that's a testament to the last ten years and all the work that has gone in, the people that are involved, and the learner attitude we take towards community management and community organization. Everybody on this call who manages a user group knows how hard that stuff can be at times, so I think that's a testament to the people that really are providing the leadership for this community going forward... And hopefully, the next ten years is even better.

**Natalie Pistunovich:** \[00:40:17.26\] Yup. \[laughs\] Roger, is there anything that you would point out, that you really enjoyed from all the changes of the language and/or the community?

**Roger Peppe:** For me the biggest change in the community is just the size of it. It's interesting, because you get a lot of people that are familiar with the core codebase, and maybe familiar with the idioms there, and write code that's resilient, but now there's a whole \[unintelligible 00:40:43.17\] very different style. There's lots of people that have looked at Kubernetes, for example, and they're like "Oh, that's how you write Go", and so they write Go like that. And I think that whole thing is really interesting. And I can talk to someone a little bit and I'll \[unintelligible 00:41:00.03\] totally different way, and I think that's kind of interesting.

There are lots of ways to do it, and also there's this huge community that generates its own -- there's many sub-ecosystems to Go now, I think. Lots of people that are familiar with a codebase, and "Oh, that's how you do it." I think that's pretty interesting, how that's managed to \[unintelligible 00:41:28.24\] And maybe you don't need to manage it, but maybe Go just helps. But I do think there are probably good ways and bad ways to go, and sometimes I look at code and I'm like, "Oh, really? Um... You're doing Java in Go" or you're doing some other language in Go, and maybe that's not ideal. But maybe that's the way forward, I don't know.

**Johnny Boursiquot:** Gava and Guby? \[laughter\]

**Miki Tebeka:** I think scale changes everything, including the scale of the community. When the community grows, you need different ways of dealing with that community. I think going forward we will see probably the code of conduct being more important, or any written rules, some guidelines... Very much like small village versus a big city. Go is becoming a bigger city now.

**Break:** \[00:42:17.29\]

**Natalie Pistunovich:** The last few years, as you've already mentioned a little bit, it has been picked up by large corporates, and it was wildly adopted by all sorts of large companies and organizations... And if a decade ago you were a hipster to use Go, today less so... So how do you see the next 10-12 years of Go?

**Johnny Boursiquot:** Hipster. Roger, were you a hipster?

**Roger Peppe:** Never.

**Natalie Pistunovich:** Before it was cool.

**Johnny Boursiquot:** Maybe Miki was. \[laughter\]

**Natalie Pistunovich:** Well, that's my Berlin world of context kicking in...

**Miki Tebeka:** Well, it's really hard to predict... Especially about the future, as Yogi bear said. I think Go has a stable foundation that will keep it going. I think that where it's aimed for, which is writing APIs and backend servers - I think that where we'll see more and more from it. I don't see jumping over to different places. Maybe, I don't know; it's not my guess. But I think the future looks good. That's what I can say.

**Natalie Pistunovich:** That's optimistic. Roger, what's your prediction?

**Roger Peppe:** I always think that Go would make a great language for programming graphic stuff in... I know it hasn't gotten to that place, but there's some interesting developments in that area. Maybe it would, but the area is so complex that maybe it never will.

I think Go excels in tooling, APIs and that sort of thing; it's great, because you can actually have this whole back-and-forth between different sources of truth. You can generate code... There's a language called CUE, which I think is great... There's \[unintelligible 00:45:45.13\] interplay between that kind of configuration-based stuff and more imperative, more Go stuff. I think that's a really interesting area.

I think there's a lot to be said for just using it to talk to existing services... For example, if you want to use InfluxDB, get Go; it's really easy. So who knows where it'll go...

**Miki Tebeka:** I want to see Go running on Mars. That's the goal.

**Natalie Pistunovich:** Rumor has it that SpaceX is using it, so...

**Miki Tebeka:** Oh. So maybe sooner than later.

**Natalie Pistunovich:** Yeah. Johnny, do you have a prediction?

**Johnny Boursiquot:** I remember there was -- maybe it was the first or second GopherCon, one of the people responsible for Go, I can't remember who exactly, but I remember one of the things they said was that it's always interesting when you help create something and you put it out there, some of the original use cases you were thinking of when you were devising this thing are coming out and you're wondering "What in the world -- I could have never foreseen this particular use case, or how people are using it in this particular way" and whatnot. And I think that's true today as it was ten years ago.

I think the use cases for Go are just gonna continue to grow, because as we add more and more people, new gophers into the community, they're all gonna bring their own ideas of what they like to use Go for... Some of the most popular tools in services and things that we use today - really just the initial salvo; it's just a show of what basically solving a set of problems that we used to have, and using Go to solve those problems in a better way than we used to be able to solve them. That doesn't mean we're out of ideas for where Go can go next. We've just solved the problems that we used to have, better; better technology, better language now. There's a lot of innovation happening in our space. Our field, what we do, innovation is part and parcel to that. So the use cases of Go - we haven't seen all of them yet. They're just gonna continue to grow, especially if Go sticks around for another 20, 30, 40 years, like things like C and C++ have. We're just at the tip of the iceberg.

\[00:47:56.25\] My wish for Go, really -- I have two wishes. One for the language itself, the technology itself, but also for the community. I wish Go doesn't fall for the trap of innovation for the sake of innovation. We saw how long it took, how much deliberation it took to add something like generics (parametric polymorphism) to the language. And it took a lot of back-and-forth, multiple revisions to design and spec, a lot of back-and-forth between prominent members of the community, users of the language, potential users of the feature, and things like that... And even to this day, we have folks like Russ Cox saying "Hey, I'm sure we're gonna have some guidelines for how to use Go properly. But take it easy on that stuff for now, as we learn what the best practices are. Maybe put your use of generics behind a build flag, or something." So that's for those who wanna use it - they can use it; those who don't want to, they can stick to the more tried and true things.

So that level of reservation, that level of conservatism with regards to adopting new things and new ways of doing things in the language - I hope we always retain that. Because I think keeping something simple is very, very hard. Keeping it easy to use... There's a reason why Go is easy to use when you compare it to other popular languages these days. That wasn't by chance; that was a deliberate effort. And I hope that regardless of those at the helm of the language over the years, I hope that we retain the sensibility for keeping the language simple, keeping the use of it simple. Because with a simple tool, you can then build more complicated things. But if the tool you have to use is also complicated, then your appetite for building these more powerful, more complex tools kind of dwindles a little bit, and that's when you start to have stagnation, and that's when you start to have less innovation happening.

So I hope we do retain that simplicity that is Go... And whatever the next major (perhaps) controversial feature is gonna be - who knows what that is, after generics... Although, thinking of it now, I'm hard-pressed to think of something more controversial than generics was...

**Roger Peppe:** Operator overloading. \[laughter\]

**Johnny Boursiquot:** Oh, boy...

**Miki Tebeka:** Error handling... Yeah, there's so many.

**Johnny Boursiquot:** Yeah, the ground is fertile for controversial other topics and additions to the language... But I hope we retain, we keep that simplicity as sort of the top priority for us. And as for the community itself - the state of the community is a generally welcoming one, but it was deliberate as well. A lot of people very early on said "Okay, we've seen and been a part of communities that perhaps didn't get it right, or they're struggling to get it right. We've learned from their mistakes, and we're gonna avoid these things as much as possible within the Go community."

I think a lot of the people that got on within the Go community early on, they were excited for the technology, but also for the potential of the community. I'm proud to say that I think we are living quite a bit of that potential. We're not all there yet, there's still a lot of work to do, but that's why I'm so proud to be part of this community, because we do live our values, we do care about people, and I hope the next ten years we continue to retain that as a core value of who we are as gophers.

**Roger Peppe:** Hear, hear.

**Natalie Pistunovich:** Hear, hear, yeah. Those are all really interesting and positive predictions.

**Johnny Boursiquot:** But...

**Natalie Pistunovich:** Thanks for sharing all that. \[laughs\]

**Johnny Boursiquot:** It sounds like you've got something.

**Roger Peppe:** What do you think, Natalie?

**Natalie Pistunovich:** Well, I wanted to ask you about the unpopular opinion, but... What do I see for the next decade or twelve years? What else is there to say other than I hope it will stay simple, I hope it will keep being friendly, and I hope it will be on Mars.

So now one of the even fun reasons that I get when people ask me "Why should I use Go?", I can even say something simple like a) it's very easy to get started with, and it's probably you're gonna get either a salary increase, or at the very least not a cut, which is not something you can say about all languages. So I hope that it will keep being a language that we want to use for many reasons.

**Johnny Boursiquot:** Nice.

**Natalie Pistunovich:** Well, that will not be my unpopular opinion, because I came prepared, okay? \[laughter\] I just want you to know that. But before that, let's do the unpopular opinion theme.

**Jingle:** \[00:52:07.20\] to \[00:52:26.26\]

**Natalie Pistunovich:** Normally, I would start by asking you all what are your unpopular opinion... But I came, as I said, very prepared; I already asked on Twitter, so I'm just going to state it... And there's no even need to test it, as we do with all the unpopular opinions that we hear by asking on our Twitter handle "Is this opinion unpopular or not?" It was unpopular, but only by a little bit. So something like 55/45. So avocado toast - not with fresh tomatoes, but with dried tomatoes. Somehow, most of my Twitter feed got it wrong and said - or thought, mistakenly, and it's okay, we all make mistakes - that you need to use it to eat that with fresh tomatoes. But no. So that's a validated unpopular opinion.

**Roger Peppe:** I have to say, I've never had avocado toast. \[laughter\]

**Natalie Pistunovich:** That is a confusing situation. \[laughter\]

**Miki Tebeka:** It's true and false for you at the same time.

**Natalie Pistunovich:** \[unintelligible 00:53:15.09\] opinion.

**Roger Peppe:** I love avocadoes, so I'm sure the combination is good, but...

**Natalie Pistunovich:** Yeah, I think in different countries toast can mean different things. So I don't know if you think of like two toasted breads and the avocadoes in between them also toasted, versus just toasted bread, and...

**Johnny Boursiquot:** That's a sandwich.

**Natalie Pistunovich:** Well, I've been to many countries and I've seen things, so... You know, you can always be more clear.

**Roger Peppe:** Yeah, I have to say I don't even know -- you know, it's got toast and it's got avocadoes, but I have no idea what else it's got. A little bit of dressing, maybe...

**Natalie Pistunovich:** \[unintelligible 00:53:44.10\]

**Roger Peppe:** Chilis...? You'd have to have chilies with it... For me, definitely.

**Natalie Pistunovich:** So hey, Roger, what is your unpopular opinion for today?

**Roger Peppe:** The opinion I gave when I was on the show before turned out not to be unpopular at all... But I have one that I hold and I know that it is unpopular... So I will just say, I believe that Acme is the best text editor. And most people haven't even heard of this text editor, so... I think it's an amazing, amazing editor, and that Rob Pike was not misled when he said that the mouse is an excellent way to interact, better than the keyboard, with the editor.

Actually, there was a recent episode of DevTool Time recently when I explored this topic a little bit; worth checking out if you're interested. But I think it's an amazing and productive way to develop.

**Natalie Pistunovich:** Well, you should add the link, both to the editor and to that episode in the show notes, so that everybody who hears this later on can go and check this out.

**Roger Peppe:** Will do.

**Natalie Pistunovich:** Well, Miki, do you have an unpopular opinion?

**Miki Tebeka:** Yes. My unpopular opinion is that when picking speakers to conferences, the speaker is more important than the subject.

**Natalie Pistunovich:** The speaker is more important than the subject in conference talks. Interesting. I cannot predict if this will be popular or not.

**Johnny Boursiquot:** So some speakers may attract a larger audience than others... But does it matter what the topic is? The speaker alone is enough.

**Miki Tebeka:** Yes, I think that great speakers can even talk about flies, and they'll do it magnificently. And then there are some really, really talented people that will talk on a really interesting subject in a boring, and bad way... So I think when you're doing talks, which is a medium - you need to know how to do it, and you're there somewhat for entertaining people, not just for educating them. The speaker is more important.

**Natalie Pistunovich:** Good speaking skills is definitely something to practice.

**Roger Peppe:** I think I agree with that actually... Because I think a good speaker will find ways to make even a mundane subject really interesting. You might think "Oh, this isn't very interesting", and then they bring some life and bring some things and "Oh, I'd never thought of that."

**Johnny Boursiquot:** \[00:56:00.04\] Right. There's nuance there... So it's not about the popularity of the speaker themselves, it's about their delivery mechanism, or how well they're able to keep your attention, or get you interested in something that might otherwise be a mundane topic. So yeah, there's some nuance to that, yeah.

But interestingly enough, those people who are able to do that become the more popular speakers. \[laughter\] So they're kind of hand in hand.

**Natalie Pistunovich:** Johnny, do you have an unpopular opinion for us?

**Johnny Boursiquot:** Yeah, I believe trackballs are better than those things you drag around on your desk, collecting dust. You should use your thumb. That's way, way more efficient.

**Roger Peppe:** No... Just use Vim, like I do.

**Johnny Boursiquot:** \[laughs\] Don't use a mouse at all. Trackballs over -- what do you even call those things? Just regular mice?

**Roger Peppe:** I think they're optical now.

**Natalie Pistunovich:** How about trackpads?

**Johnny Boursiquot:** Trackpds?

**Roger Peppe:** Yeah, what you have on your laptop.

**Johnny Boursiquot:** Oh, yeah. I do use those, because those provide a more -- I guess at this stage a more natural sort of interaction surface... But if you're gonna have a regular, old-school mouse, those are what I'm thinking that we need to move on. We're in a different era now. Either use a trackpad, or use a -- if you wanna stick to the old school, the better technology is the ball. You have to use the trackball.

**Roger Peppe:** So why is the ball better? I'm interested. Maybe I should get one.

**Johnny Boursiquot:** It's a stationary surface. The only thing moving is your thumb, and you can go anywhere on the screen. You don't have to \[unintelligible 00:57:31.28\] and everything else... It's just a nice, one surface; your hand just stays there. If you wanna get sophisticated, some of these things even have different positions they can take to accommodate your hand, and everything else... I mean, it's really quite a different experience.

**Roger Peppe:** Maybe I should get one.

**Johnny Boursiquot:** Yeah, you should absolutely get one.

**Roger Peppe:** I mean, I use the mouse all the time; they use the keyboard as a control surface. I don't use keyboard shortcuts, so the mouse is very important to me.

**Johnny Boursiquot:** Yeah. Then you'll love a trackball.

**Roger Peppe:** But if I have like a Lenovo Thinkpad, and that works when I use the touchpoint thing - you know, the little orange nipple thing...

**Johnny Boursiquot:** Oh God, those are awful... \[laughs\]

**Roger Peppe:** I've found those work really well for me. I can use that really well.

**Johnny Boursiquot:** Oh, wow! Okay...

**Natalie Pistunovich:** That's two unpopular opinions in one episode. \[laughter\]

**Johnny Boursiquot:** Wow...

**Natalie Pistunovich:** Congratulations.

**Roger Peppe:** \[unintelligible 00:58:22.22\]

**Johnny Boursiquot:** Alright... Well, there you have it.

**Natalie Pistunovich:** There, there. That's gonna be interesting. I'm curious to see the results of the survey... And until the survey, I want to say thank you for joining us, and see you all in one decade. Or earlier. \[laughter\]
