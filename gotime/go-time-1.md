**Erik St. Martin:** It's Go Time! This is a weekly podcast featuring special guests where we will discuss interesting topics around the Go programming language, to community and everything in between. If you currently write Go or aspire to, this is the show for you.

We've got a great show lined up today. This is our first episode, so we're gonna do some brief introductions and talk a little bit about what the show is about, and then we've got some news items that we'd like to talk about. With that said, I'm Erik St. Martin, I've been programming in Go since about 2011. I'm co-organizer of GopherCon along with Brian Ketelsen, who is also here with us. Brian, say hello.

**Brian Ketelsen:** Hello.

**Erik St. Martin:** Do you want to tell everybody a little bit about yourself?

**Brian Ketelsen:** Sure. I'm Brian Ketelsen, I've been doing Go since 2010 and, like Erik mentioned, co-founded Gopher Academy and started GopherCon because we wanted a conference to go to and nobody else was doing it, darn it.

**Erik St. Martin:** We need more conferences. We definitely need more conferences.

**Brian Ketelsen:** We do. I'm really glad to see the explosion of Go conferences around the word.

**Erik St. Martin:** And we also have Carlisia Campos here with us. Carlisia, how are you?

**Carlisia Pinto:** Hi Erik, hi Brian, and hi to the listeners. I work as a backend developer for a net tech startup. I am based in San Diego. My first contact with Go was when I went to GopherCon last year and I fell in love. It was great, it seemed to me like it brought together features of different languages that I liked, and I've been playing with it since.

I'm also a co-founding member of GoBridge, and kind of like the same reason you guys wanted conferences, I wanted to have material to learn go and also help whoever wanted to learn Go, so I'm glad that GoBridge exists to do that.

**Erik St. Martin:** That's excellent. I think that's kind of a shared love of all of us here on this show, just kind of advocating community and advocating people get into this language and technology we love. Hopefully with our different backgrounds and experiences we can bring some insights to the listeners, and also introduce them into things that they might not already be familiar with.

With that being said, one of the segments that will be a common thread is we'll talk about some news, events and any interesting articles that have come across our e-mails and social media and everywhere we find the things, along with having some special guests. We've actually got quite a few really interesting guests lined up for the next couple of episodes, so definitely stay tuned for those.

If you haven't already, please subscribe. The easiest way to do that is to go to GoTime.fm, and you can also subscribe to the weekly newsletter there. We also would like to advocate for everybody to hit us up on Twitter @GoTimeFM with any questions you'd like to hear us answer, questions for guests we have coming up, questions in general.

**Brian Ketelsen:** Feedback, comments, praise, kudos...

**Carlisia Pinto:** Suggestions for guests to be interviewed...

**Erik St. Martin:** Yes, definitely. We'd love to hear from everybody, people we should invite on the show. There's so many great people in the community that I think that we can get on here. With that being said, let's open this up to some news. Does anybody have anything interesting that's come across their e-mail and social media this week?

**Brian Ketelsen:** I do. I think the biggest new thing that came out was Go 1.6.1 and 1.5.4 were released. Small security issues on Windows and crypto libraries, but everybody should update. There's really no reason to be using 1.4 anymore, so go update to 1.5.4 or 1.6.1 now. That's a big one.

**Erik St. Martin:** Those releases were actually a couple of CVE security vulnerabilities, right? One was related to DLL injection, and I forget what the other one was.

**Brian Ketelsen:** If I remember right, the Windows one would allow a program to load any DLL dynamically that happened to be in the same library as the executable Go file; that was fixed. Then the other one had something to do with the crypto libraries not checking bounds on numbers that they send into the big integer library. I think it specifically affected HTTPS client certificates and Go SSH clients.

**Erik St. Martin:** That's right, I think I vaguely remember that. It was something pertaining to being able to create denial of service attacks on binaries to leverage that.

**Brian Ketelsen:** Right. The next big news item I have is the explosion in Go editors these days. If you follow me on Twitter you know my undying love for Vim and Vim-go, but really there's a lot of great editors out there right now that have good Go support. I played with Visual Studio Code on all three major platforms this week - I played on Mac, I played on Linux and I played on Windows, and I have to say I'm really impressed of the integration with the environment. The debugging worked everywhere, all of the tools work well. If you're somebody that likes a more formal-looking text editor, Visual Studio Code is awesome.

The Atom editor got a big update this week, I think it's at 1.6 now.

**Carlisia Pinto:** It's 1.7.

**Brian Ketelsen:** 1.7, okay. So it got a big update this week, and the Go tools there look fantastic, too. So there's really a lot of great options for editing code if you like just text editors, and then the IntelliJ big plugin for Go and on the IDEA platform is awesome, it looks really good. If you don't mind having that big IDE, then the IntelliJ with the Go plugin is amazing, too.

**Erik St. Martin:** And Carlisia, you're an Atom used, aren't you?

**Carlisia Pinto:** I am, die-hard fan.

**Erik St. Martin:** I keep wanting to love these things, but I guess I'm too stuck in my ways. How have you been liking the new update?

**Carlisia Pinto:** Well, I since 1.6 had... I actually just today noticed some features that 1.6 introduced, and I can go and talk about this stuff forever, but I hope we will have an episode just to talk about editors and the different Go tools in each editor. I'll talk more about it then.

I wanted to say though that for Visual Studio I got very interested in checking it out, because I see people that I admire in the Go community using Visual Studio with Go packages, and they are loving it. I tried it twice, and I couldn't get my head wrapped around it. I totally geek out on editors, so I was willing to go out there and look for stuff, so I'm hoping somebody is going to do a video walkthrough, showing us all the features. And if somebody has already done that please let us know, because it sounds awesome but I didn't get it.

**Erik St. Martin:** I keep seeing these editors come out, and IDEs and I'm like "I wanna use it", and every time I try, I'm just like "I want Vim back, I want my Vim back!" Speaking of which, news-wise they just announced Vim 8, which I'm pretty excited about, and I'm sure Brian is, too.

**Brian Ketelsen:** Yeah, that's big.

**Erik St. Martin:** And especially with the async functionality, right? That's been one of the biggest pain points with people creating IDE-like functionality, doing builds and tests and things like that in the background, is that there were all these little hacky workarounds for doing asynchronous tasks inside of Vim. I think that that's really gonna change the game for the ability for plugins to be built.

**Brian Ketelsen:** Yeah, I'm curious to see where the Neovim world ends up now that Vim 8 is announced with the asynchronous support. It will be I think detrimental to the community if the async support in Vim 8 is different than the ones in Neovim. I hope that they end up being roughly compatible and it doesn't make all of these plugins have to have different forks for different environments. I've been using Neovim for two years now as my primary editor, and along with Vim-go, once you add the asynchronous capabilities, you just can't go wrong. It's really awesome to be able to just run your Go tests asynchronously and get a popup in your status bar that tells you whether they pass or fail. Same with your Go builds, that async capability is really nice in Vim-go.

**Erik St. Martin:** That's funny, I haven't even considered that when I was looking at that Vim 8 announcement, that "What does this do for Neovim?" I know that Neovim has some additional goals on top of just the async functionality, but the whole reason it was created was this whole fear that Vim was kind of staying mostly the same. I wonder whether they'll merge efforts or whether they'll continue to, like you said, maintain different forks.

**Brian Ketelsen:** Yeah, it will be interesting to see.

**Erik St. Martin:** But with that being said, we're kind of going Vim instead of Go here.

**Carlisia Pinto:** Yeah, but talking about tools, I wanted to mention this article that came up this week. It was somebody from The Washington Post talking about really neat things about Go, and one of the things of course is the tooling. I absolutely love this article, it made me feel just fuzzy and warm inside, because not everything's perfect, everything has flaws etc, but I was reading the article and I was going "Yep. Yep, yep..." It mentioned all of what makes Go super awesome. When I had my first contact with Go I thought "Oh my gosh, I have to type so much. If I wanted to type so much, I would have stayed doing Java. What is this!? But let me check it out. Everybody's saying it's great, so let me just stick with it." And I that continued for a long time, until I found out about the tools. Go-imports, for example, at least in Atom, I cannot live without it. I went forever without knowing about it, and all of these little annoyances - that you usually think might be annoyances - they just go away with using these tools, which is what we are talking about here.

So the article is really well worth a read if you want to get familiar with what Go has to offer. It's called "Embrace Go - A modern programming language". I don't know if you guys read it and have something to say about it.

**Erik St. Martin:** This is the Washington Post article?

**Carlisia Pinto:** Yeah. They are using Go at the Washington Post, and also they are doing this core project which seems to be a platform for communities for the publishing industry. I'm not very familiar with it, but I know for example Bill Kennedy has helped them with a project. He keeps saying "It's great, it's great". I'm not very familiar with it, I would love to have somebody from the Washington Post come and talk about it. Both that project and how they're using Go at the Washington Post.

**Brian Ketelsen:** I read the article, and my big complaint is he tagged it with GopherCon in the tags on the blog post, but doesn't mention GopherCon anywhere. What is going on with the GopherCon tag and no GopherCon content?

**Carlisia Pinto:** He links to it.

**Brian Ketelsen:** Where?

**Carlisia Pinto:** He links to GopherCon and he links to a blog on the Gopher Academy.

**Brian Ketelsen:** Oh, interesting.

**Carlisia Pinto:** The word "momentum" is linked to GopherCon, and he links to a blog post.

**Brian Ketelsen:** Oh, nice. I'll take that SEO.

**Erik St. Martin:** Wow, Carlisia has got memorization of what word is linked...

**Brian Ketelsen:** I'm impressed!

**Carlisia Pinto:** \[laughs\] It's because he highlighted "momentum" and I wanted to see what he was poining to, so I noticed.

**Erik St. Martin:** I actually haven't had the chance to read the article yet, so I think it will be interesting for me to read. Speaking of momentum, when we look at the language and how it's grown over the years, it's just staggering. It blows my mind just how fast it blew up and the number of companies that have kind of jumped on board and have started releasing information about stuff that they're building with Go. It seems like every day there's a new Fortune 100 company being like "Yep, we're using it too."

**Brian Ketelsen:** I think it's a double-edged sword though, because when you read Hacker News or Reddit, you expect to see these gigantic "The world changed because we moved to Go", and it's really more of a soft excitement. People are gradually updating all of their things to Go, and it doesn't feel revolutionary, it feels evolutionary. I think there's a lot of -- I don't know if 'pent-up disappointment' is the right word for it, but I think people were expecting some gigantic Big Bang, and there just isn't one. It's just this groundswell of grassroots Go adoption everywhere, and it doesn't read well in the TIOBE Index. It's strange. Go adoption is going really well, it just doesn't look like it externally.

**Erik St. Martin:** I guess that's true. A lot of people are using it for internal projects and are just probably not as vocal about it. One example of little grassroots-type thing is the Bower news that came out -- was it last week?

**Brian Ketelsen:** Yeah, I think that was last week.

**Erik St. Martin:** Yeah, and they rewrote part of their API for -- I think it was fetching the packages, wasn't it?

**Brian Ketelsen:** Yeah, serving up Bower assets.

**Erik St. Martin:** Yes, that's awesome. It's great that they released that information, too. You wonder how the Javascript community sees that, that they didn't kind of \[unintelligible 00:14:19.03\] right?

**Brian Ketelsen:** Well, I hope they're all as pragmatic and anti-dogma as we are. You use the right tool for the job, and in that case they proved to themselves that Go was the right tool for that job. There are places where I wouldn't want to yet use Go. I can think of a few places that Go is difficult to use, like mobile development. You gotta use the right tool.

**Carlisia Pinto:** I think that has a lot to do with how we are now seeing this huge trends towards moving to Go, because people might say "Oh, I wanna have this feature, I wanna have that feature. Let's implement this feature so I can do X, which I cannot do unless I have this feature, or it would just be so annoying", but that's not what Go is all about. If you dig a little deeper, some of the past releases of Go, they had improvements, but there were no syntax changes, and like \[unintelligible 00:15:18.13\] came out and said "That's a feature, the fact that the syntax didn't change. That is a feature in itself", and that says everything about the philosophy of Go. It's not to be used for everything, it's to be used for specific things. But those specific things, it does them really well.

**Erik St. Martin:** I think we covet the things we know though, right? We naturally want to grasp to the things that we're familiar with, and especially when you're in kind of like a high-stakes environment where you're just trying to get stuff done, so you reach for some tool or technique that you've done a million times before and it's not there, it feels painful. I was around watching Brian adopt Vim, and it just seemed like this completely unnatural thing for him. \[Brian laughs\] He wanted to understand; he knows people are productive with this and they love it, but every time it just felt unnatural, and sometimes you just kind of have to put yourself in the frame of mind of somebody in that, and just kind of accept it for what it is, and then you kind of start to see the love that people have for it.

**Brian Ketelsen:** Yeah, I'm sure there's some sort of learning graph for that , where you try to do the things that you're used to, and eventually you give up and then try to understand how to do it the way of the tool that you're using, and for me that was a very painful process coming from Ruby. I kept trying to write Ruby code in Go, and being disappointed in how well it worked. It wasn't until you start to put yourself in the Go mindset and understand what that Go mindset is that things really click nicely.

**Carlisia Pinto:** Yeah, I've said this before: there has to be some stick-to-it-ness with Go, and probably with most things. But definitely, if you stick to it a little bit, you will see it.

**Erik St. Martin:** It's interesting... Brian and I had a couple conversations with many publishers with the Go In Action book, and it was funny because they kept pressing this idea of "What's the silver bullet? What's that one-line selling point for Go?" The thing Brian and I kept coming back to - and talking with Bill Kennedy too, we were all kind of collaborating on this effort - was there's not silver bullet. It's all the things that are there, and it's all the things that aren't. It's all the little things collectively that make it such a fun and interesting language, and it's not this huge thing like monads, or whatever. I had to say 'monad', I had to.

**Brian Ketelsen:** Thank you. Thanks for getting that in there. I think if one thing sticks out for Go though - and I've seen especially on Twitter a million times - is people say Go is optimized for programmers, because reading code is the most important thing that a developer does, and Go is really easy to read. I saw a twee, I think this morning or yesterday, the same thing: "Once my developers were able to read Go efficiently, we all decided that Go was the place for us to be, because reading Go code is simple, it's easy to understand what's happening." There are other languages that are interesting, and sexy, and exciting. Scala is a great example, but trying to understand what happens in a Scala program, it takes a PhD. I can't do it, I'm not interesting. Nope.

**Carlisia Pinto:** Talking about getting to know Go and sticking to it, there is another tool - well, I should say initiative - that I came across some time ago and recently again. It's called Your First PR. There is a Twitter handle called @YourFirstPR, and there is a website on a GitHub repo. Basically it's an initiative to bring together people who have never contributed to open source, and we are hoping that if you want to do Go and are looking for ideas for projects, just hop on this and find out things that you can do, and practice your Go and practice your open source contribution. It tries to bridge people who are looking for opportunities to contribute to open source, with maintainers who have projects and have issues for people to solve, for people to implement.

The way it works is you, as a maintainer, have to find the issues that will be appropriate for a first-time open source contributor, and you would tweet at them the issue or you would go on the repo and add an issue there. I would imagine that you could also submit a list of filtered issues that maybe you tag with, for example 'help wanted' or 'beginner-friendly'.

There are two articles on that website. One that I had read some time ago and I absolutely loved, it's called "First-timers only", and I highly suggest people who are maintainers read that. I'm sure you're going to get a lot of ideas. And I hope the Go community will grow and more people will be exposed to it and have a chance to learn about it, practice, and maybe you'll stick to it or not, but at least you gave it a shot. This is a great opportunity, and people who are doing open source development, you can use this to get help, so it's a win/win all around.

We always say that coding is about coding more, right? You get better at coding by coding, and also I always say if you're a developer, get together with people, get together with the developer community and open source contribution is great for that. So it's just perfect all around, I think. What do you guys think?

**Erik St. Martin:** Yeah, I've always been an advocate of everybody contributing to open source, and I think that fear of rejection keeps a lot of people from it, too. But yeah, those bite-sized chunks I think are a great way, and I think also accepting that the code that you see people deliver is not their first pass, right? Everybody has this perception of their favorite programmer, that they just spew golden code on pass one. Sometimes any solution is better than no solution, and I've commonly told people that I kind of feel bad during code reviews and having pull requests rejected - and not necessarily rejected, but feedback, right? Like "Oh, it would be more performant if you did X" or "It would be cleaner if you did Y", to understand that solving the problem is the hardest part. It's easy to look at somebody's solution and to think about how to mold that a little better; it's an iteration of something that already exists, versus solving the initial problem.

I think that if you step out of your comfort zone you can learn a lot from other people, and projects, and digging around in source code.

**Brian Ketelsen:** Absolutely. I think making your first contribution to any open source project is a gigantic barrier. There is so much that we as programmers can do locally that becomes much more difficult when you're doing it on a remote or distributed project. The whole concept of Git and pull requests, and branches, and merging - all of that is intimidating if it's the first time you've tried it, so having patience is important. That's one of the things that we try to do in Slack a lot with the Gopher Slack - walk people through the whole process easily, without judgment and with lots of patience, to help them contribute. Because once they have a great success on that first contribution, you know there's gonna be a second and a third. You're preparing the next generation of OSS development.

**Erik St. Martin:** I think a great point about one of the things that's so great about the Go community is how inviting they are. I remember in the early days when I joined, there were a lot of academic people. I didn't go to college for this stuff; I've been doing it a number of years and I feel I'm good at what I do, but I don't have the academic background that some of these people do, and you feel intimidated coming into it. And everybody's so approachable. It doesn't matter who it is you talk to, everybody sits down and everybody's just excited about the language, and if they can help and teach people, they do it. I think that's one of the things that's kind of kept me around.

**Brian Ketelsen:** Yeah, I couldn't agree with that more. My first Go contributions were brutal, terrible. The first open source thing that I released - I think I announced it on the Go mailing list, the Go Lang Announce List, or whatever it was, and three or four people immediately chimed in with corrections to my awful code, and they did it in a very polite and inviting way, not in a "You're an idiot, we hate you" kind of way, and that set the tone for the whole Go community for me.

**Erik St. Martin:** How about Carlisia? What was your experience coming in and interacting with the existing community?

**Carlisia Pinto:** My first interactions were just getting to know people and being completely observative because I wasn't a Go developers; nobody cared. I was at the GopherCon and everybody talked to me. I'm the kind of person who just goes up to everybody - I go up to anyone and say "Hey, what's up? What do you do? Tell me about you." I was doing that throughout all the days and got to know so many people. It was very heartwarming. I got to know the women at Women Who Go, I got to meet many new developers in the Go community. That was my very first contact and I think that counts as community contact as well, not just contributing to open source. I haven't done contributions, just mostly contributing to material for GO! Bridge as far as Go goes. Actually, I want to get better at open source contribution, and that's one of the reasons I'm so interested in these things.

**Erik St. Martin:** Yeah, and even small tasks. Maintaining an open source project is a lot of work, a lot of people do this in their spare time, and contributing is kind of like a means of thanking them. People are grateful for any help they can get, even the smallest bite-size task. Speaking of thinking open source projects, Brian, you've recently started this whole \#FreeSoftwareFriday.

**Brian Ketelsen:** Yeah, that's the best segue you've ever made, Erik. I appreciate it. I started this I think in November with a blog post about how good it felt to have someone thank me for a particular open source project that I did, and how much I feel like open source developers in general just enjoy that concept of appreciation. We often scratch our own itches in the open source world; we build the tool that we need because we need it, and we release it because we believe in open source, but it's kind of fun when you get a tweet or even an issue on your GitHub repository that isn't really an issue, it just says "Thanks!" So I started a hashtag on Twitter called Free Software Friday where I actually put a calendar event in my calendar. Every Friday morning at 9 AM I think of the open source projects that I really appreciate, that I might have used over the last week, and I just send a shout out to either the project or the maintainer if I know them. I want to continue that here in the podcast because it's important to let the people know that are working so hard that you appreciate the things that they're giving their time for.

**Erik St. Martin:** I agree, I think that's prime real estate there. I would love to reach out and that everybody for all the tools that we use on a daily basis that help us be productive and build cool and interesting projects without having to invest so much time. So why don't we quickly go around and thank your favorite project or projects for this week? Brian, do you wanna kick it off?

**Brian Ketelsen:** Sure. I spent a little bit of time using Rancher from Rancher Labs this past week and I was really amazed at how nicely it managed the whole Docker experience and production, so I want to give them a huge shout out for making that open source and available. It's a little bit less intimidating than something like Kubernetes when you're starting off, but it has a lot of really powerful features and a nice interface. It makes it easy to use, so I definitely want a shout out for Rancher.

**Erik St. Martin:** That's great. All these container projects have been so interesting, and Rancher is unfortunately one I have not played with myself, but I think I need to add that to my list for weekend hackery.

**Carlisia Pinto:** Is it just for Linux?

**Brian Ketelsen:** Yes, it is. It's a container orchestration tool, so it only deploys on things that... Well, it deploys on anything that runs Docker, so I guess technically now that Macs and Windows run a form of Docker, it's not just for Linux anymore. So I correct myself, it's not just for Linux - but it is just for Linux. \[laughter\]

**Erik St. Martin:** And Carlisia, who would you like to thank this week?

**Carlisia Pinto:** I totally geeked out on my editor just recently - I do that every once in a while - and I wanted to thank the person who created Vim Mode Plus. He only has a handle, it's @c9md. That was built on top of Vim Mode, and those two are packages for Atom, it's just so you can use Vim. It's hugely helpful for me, because I do like Vim and I want to use it, but get to a point where I get stuck, and that's where I activate the Atom interface. So it's very worth checking out, especially the new features with Vim Mode Plus. One of them that I really liked was the search functionality. You get highlighting, incremental search, search counter, and there are many other new things, so thank you!

**Erik St. Martin:** Speaking of Vim, I would like to thank Vim itself. I guess I have to do kind of a triplet here, because Vim, Arch Linux and i3 window manager - those are the core things; everything else I do builds on top of, so I think without any of them...

**Brian Ketelsen:** Trifecta!

**Erik St. Martin:** Exactly, that's the word I'm looking for. So I guess without any of them I would not be nearly as productive.

**Brian Ketelsen:** Yeah, in my mind Vim, Arch and i3 are almost religion for me at this point.

**Erik St. Martin:** And we'll convert more, we'll convert more.

**Brian Ketelsen:** \[laughs\] The one true way to develop.

**Erik St. Martin:** So for anybody else who wants to reach out to open source maintainers or projects in general, or companies that support people who work on these open source initiatives, definitely follow and reuse the \#FreeSoftwareFriday on Twitter on Fridays. And with that being said, time to close out the show. I want to thank everybody here on the panel for jumping on this call and having some good conversations, I want to thank all the current listeners and all the future ones that the current listeners are going to pull in by sending them to GoTime.fm.

**Brian Ketelsen:** Yeah, don't forget that you can share this show by finding us at GoTime.fm, or tweeting @GoTimeFM.

**Erik St. Martin:** Yes, and definitely as we mentioned earlier in the show, send us questions, send us people you'd like to see on the show, or if you wanna come on the show, definitely reach out to us there. We also have a GitHub set up where issues can be opened for these things, if you prefer that, which is Github.com/gotimefm/ping. With that being said, goodbye everybody until next week. Next week we have a special guest coming on the show.

**Carlisia Pinto:** Cory.

**Erik St. Martin:** Yeah, Cory LaNou. I lost my head there...

**Carlisia Pinto:** I gotcha.

**Erik St. Martin:** Yeah, Cory will be coming on to talk a bit about community, and I think that's something we can all relate to. So until next week, bye everybody!

**Brian Ketelsen:** Goodbye.

**Carlisia Pinto:** This was fun, goodbye!
