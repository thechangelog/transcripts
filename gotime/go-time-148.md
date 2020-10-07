**Johnny Boursiquot:** Hello, and welcome to this episode of Go Time. Shout-out to our live listeners, those who always engage us as we record these shows; you do make it more fun. If you wanna be a part of the fun, join us in Gophers Slack; the GoTime channel is where you wanna be. If you also don't know about GoTime.fm, now you do. Go check out GoTime.fm to get access to past episodes, and all that good stuff.

I'm Johnny Boursiquot, I'll be one of your hosts today. Joining me also is Mat Ryer. Say hello, Mat.

**Mat Ryer:** Hello... Johnny... I don't know how to interpret that instruction, because it's too cliché to make the obvious joke... So I kind of flipped it and went meta a little bit.

**Johnny Boursiquot:** Okay...

**Mat Ryer:** It's not worked though, either way...

**Johnny Boursiquot:** Well, we'll do what we can with it.

**Mat Ryer:** Great.

**Johnny Boursiquot:** \[laughs\] This is gonna be fun.

**Mat Ryer:** But it's great to be here, thank you.

**Johnny Boursiquot:** Good, good. We'll come back to you in a second, because I have questions about your current weather situation... But yeah, we'll talk about that. Today we have a very special guest on the show. It is Brad Fitzpatrick. Say hello, Brad.

**Brad Fitzpatrick:** Hello! Happy to be here.

**Johnny Boursiquot:** Glad to have you. So if the name sounds familiar, maybe you are a long-time engineer and you've come across Brad's work, maybe through a live journal, or memcached, or OpenID, or Perkeep... But a lot of us in the Go community actually know Brad from his work as part of the Go team, contributing to the Go standard library and being part of that pretty incredible project, if I may say so myself.

So while we're here, we'd like to really have a fluid conversation with Brad, maybe touch on a lot of different things, Go obviously being part of that... But I'm personally interested in getting a sense of Brad's journey. If you don't know, Brad actually has his own page on Wikipedia. To me, that's a pretty high bar. That's like, "You made it!" \[laughter\]

**Brad Fitzpatrick:** Yeah... Anyone can edit that thing though, so...

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** So please do, guests... The most creative--

**Brad Fitzpatrick:** \[00:04:17.15\] It used to say that I have 27 Boston Terrier pups, and I was like -- I don't know; there was just tons of stuff there over time.

**Mat Ryer:** Well, just random people modifying it, and stuff.

**Brad Fitzpatrick:** Yeah, yeah... I mean, that's my impression of what happens on Wikipedia - people come in and get bored and modify things, and other people edit it back out.

**Mat Ryer:** Yeah. Suddenly, the Earth's got three moons.

**Johnny Boursiquot:** \[laughs\] Alright... Again, like I said, we're gonna have a pretty fluid show. I'm interested in getting a little bit of background, perhaps the stuff that is not obvious for those of us who can go to the Wikipedia page, and those of us who are familiar with Brad's work within the Go community... Brad, what do we not know about you, that's not out there? Let's start with that.

**Brad Fitzpatrick:** I don't know, I kind of tweet my stream of consciousness, so I think most of my information is our there somewhere. I haven't been too shy on the internet... But I'm currently living in a world of smoke, on the West Coast here, so it's kind of depressing looking out and seeing nothing. I haven't really left the house in a week.

**Mat Ryer:** Yeah, that's really grim. It looks pretty terrible from over here, as well; it's all over the news, of course. I hope everyone out there is staying safe...

**Brad Fitzpatrick:** Yeah. That's not so much about me, so much as the whole West Coast, but it's currently on my mind... But I've also been vocal about that on the internet. It turns out that the weather forecasters don't know anything about how smoke works, or how smoke affects anything else, or how smoke moves with the wind, or anything... I've been checking the weather every day and it turns out it has nothing to do with reality. In reality, the smoke just is.

**Mat Ryer:** That's just because it's so different, so unprecedented events...

**Brad Fitzpatrick:** Yeah, pretty much. And something that doesn't happen too often, they don't have models for it, so they just assume it fits some other model, and it turns out it doesn't.

**Mat Ryer:** Yeah... I'm having a problem not quite the same, but it's very hot in London, and it was never very hot in the past, so we're not ready for it... So it's just a bit unbearable when it does spike like that. I think it's all related, but... Yeah. Changing times.

**Brad Fitzpatrick:** Yeah.

**Mat Ryer:** But Brad, how did you first get into computers when you first got into them? Were you quite young when you were into them, or...?

**Brad Fitzpatrick:** My dad was an electrical engineer, and he was working at a company that made memory chips in Texas. And as part of this, they would test the chips after they were made, if a bit in the memory chip was stuck high, or stuck low, like it had permanent one or permanent zero somewhere, they would toss them in this discard bin... And when the Apple II came out, my dad and some of his coworkers wanted to make a bootleg Apple II, which was pretty easy to do at the time. You can get all the parts at RadioShack, and just sit around - they sat around, soldering things for a couple weeks... But the only real tricky bit was the ROM, which bootleggers were passing around, and stuff. So they had a copy of the ROM, but they just needed a ROM chip to burn it onto, and they worked at this company that made these ROM chips. So they went to the discard bin and they just grabbed a handful of them, and they just flashed the Apple II bootleg ROM onto one until the stuck bits just happened to be in the right place.

**Mat Ryer:** \[laughs\] That's great.

**Brad Fitzpatrick:** So we had this bootleg Apple II that I always saw my dad screwing around on, and at some point - I was like 5 or 6 - he had taught me how to write BASIC. He wrote a program on paper that was like 10 PRINT "HELLO WORLD" 20 GOTO 10 and he was like "What do you think this does?" And I was like "Well, clearly it prints something on our printer." And he's like "Well, no, actually it doesn't print on the printer, it prints on the screen." I was like "Oh, okay..."

**Mat Ryer:** \[00:08:14.24\] You were sassy for a 5-year-old, weren't you?

**Brad Fitzpatrick:** \[laughs\] I don't know what I said... But I do remember being confused that print didn't mean it actually went to the printer.

**Mat Ryer:** Yeah, that rings a bell. I remember that same thing.

**Brad Fitzpatrick:** There's tons of things in computers that are not quite right, but you just accept it and you say "Oh, sure. Whatever." \[laughter\]

**Mat Ryer:** Yeah, there's lots of examples in the standard library as well. We can talk about those later...

**Johnny Boursiquot:** Oh, that was like shade, if I'm not mistake... \[laughs\]

**Mat Ryer:** I don't even know what that is... I could do with some today though.

**Brad Fitzpatrick:** Writing a book on the standard library's history would be fun, if I had time, or books paid, but... \[laughter\] It'd be fun to have a back-story on every API of the feature, of like why we thought it was a good idea at the time, and what we were thinking... But yeah, it can't change anything.

**Mat Ryer:** It's interesting though, looking at some parts of the standard library where you can see different styles of Go code being written.

**Brad Fitzpatrick:** Oh, yeah.

**Mat Ryer:** It's quite an archaeology to go poking around.

**Brad Fitzpatrick:** There's whole different generations in there, and then when you make something new, you're like "Well, I want it to be consistent with the old stuff in the standard library, but which generation do I wanna be consistent with?"

**Mat Ryer:** Yeah.

**Brad Fitzpatrick:** If you saw all the talk about the file system proposal that's coming out now... People are complaining that it doesn't have context in it, and we're like "Well, yeah, but contexts don't really work with most operating system layers, and also it doesn't exist in the OS package, so it wouldn't compose well with that..." It's just so many trade-offs all the time.

**Johnny Boursiquot:** We used to have this saying circling around the Go community - even I have uttered it on many occasions - "If you wanna know how Go is written, look at the standard library." But now I'm kind of hesitant on saying that, because again, if somebody doesn't know that, okay, there's multiple generations, and multiple best practices, and things you wish you could go back and redo, because we normally do things a certain way; it's kind of hard to tell somebody who's picking up Go today, like "Hey, just go and read the standard library". So are there parts of the Go standard library that you wouldn't point somebody to, but other parts of the standard library today that you'd definitely say "Okay, this is an example of how you should write Go"?

**Brad Fitzpatrick:** I wouldn't read the runtime, for instance, or anything using unsafe or cgo is pretty nasty. And even Http is just full of corner cases, because the world of the internet and browsers and servers are so bizarre in so many edge cases that the code just gets unnecessarily complex... But there's little bits and pieces. When I was relearning how gif and jpeg worked, I would just -- it's easier for me to go read the Go implementation of some of these file formats, or zip files, or something... Rather than read the spec, you can just go read the Go code and it's often easier to learn how a file format or a network protocol works.

**Mat Ryer:** Yeah, I've found that -- I mean, because I can read Go; I can't read whatever the specs are written in. \[laughter\]

**Brad Fitzpatrick:** Yeah, all the RFCs have totally different styles too, so...

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** One of the packages that you were pretty vocal about was the net http client, and I think at some point you even had some experimentation out there about that. What is the state of that? Where did you leave that?

**Brad Fitzpatrick:** In the works... I'm not doing HTTP/3, as people always ask me... Like, if I'm gonna do QUICK. I think I will leave that battle to somebody else, with 5 or 6 years free. But yeah. QUICK just gets very invasive very quickly. It's nice, in that it combines TLS and HTTP and TCP all together, so the layering is nice, and the layering isn't fighting each other, but it's just -- they're now implementing a whole network stack in your library.

**Mat Ryer:** We've got a question here in our Slack channel from Johann Brandhorst, who asks "What are some tech that you're excited about?"

**Brad Fitzpatrick:** \[00:12:07.03\] Well, I was really into WireGuard lately, which is why I kind of left Google to go work on WireGuard, and making WireGuard fun and easy... I don't know, I've always been kind of so-so at networking. I've been interested in networking, but I never felt super-great of it... So this is kind of a forcing function that makes me actually learn how networks work.

**Mat Ryer:** Oh, wow... Okay.

**Johnny Boursiquot:** So for those of us who don't know much about networking, like what is WireGuard, and then by proxy, why you do care so much about it, in light of the work you're doing at tailscale.

**Brad Fitzpatrick:** Well, I always fought networks a lot... And then I was helping my dad set up a networking port; my parents bought this RV. They are retired now and they're just kind of traveling around the U.S. - or they were traveling around the U.S, prior to pandemics and wildfires, and stuff... And my dad wanted to have monitoring on his RV. There's this CAN bus that lets him control all the lights and fans and heaters in the thing, and it also lets him see temperatures, and fuel levels, and what their black water and clean water - the levels around all that, and how long the generator has been running... So he wanted to build a dashboard to see all this, and he wanted to see it from anywhere in the world.

So we had set up this whole contraption of Raspberry Pi in the RV, and an LTE modem, and all these reverse proxies, and stuff... And then I set up WireGuard for him, and that was just so cool and empowering, compared to the complexity of what we had been doing prior, that I just started playing with it more myself, like putting WireGuard tunnels between things... But it can get pretty tedious to set it all up yourself, so when I found out that David Crawshaw who I also worked with on Go was doing a company all around making WireGuard fun and easy, I was like "Oh, I wanna go do that."

I had a bunch of friends that were all kind of doing startups at the same time, and I was getting some startup FOMO... Thinking back to the old days of me doing the LiveJournal startup... So I wanted to relive the startup glory days.

**Johnny Boursiquot:** And how is that working out so far?

**Brad Fitzpatrick:** It's fun. It'd be nice if there wasn't a pandemic going on, but... I had one good month of working in person with another tailscale person who was here in Seattle, but then after a month it was all working at home, so... Oh, well. Which means I have to listen to my kids running around and screaming, and stuff, which is not incredibly conducive towards working.

**Mat Ryer:** You share sometimes some of the things that your kids say, and I find them to be hilarious. I always appreciate that.

**Brad Fitzpatrick:** Oh, yeah... They're constantly exhausting, but they're also constantly hilarious, so...

**Mat Ryer:** Yeah, so it's worth it.

**Brad Fitzpatrick:** Yeah, well... It balances out at least. \[laughter\]

**Mat Ryer:** Great. That's a great advert for kids there... If you're a young couple listening that are considering, and not sure - well, it balances out, says Brad.

**Brad Fitzpatrick:** I'm told it gets better, but we'll see.

**Mat Ryer:** Skeptical.

**Brad Fitzpatrick:** Yeah.

**Mat Ryer:** So I wanted to hear a bit of the LiveJournal story; you mentioned it... It's a really surprising thing, I think... Could you tell us a little bit about it and your involvement?

**Brad Fitzpatrick:** Yeah, so in high school I did a summer internship at Tektronix, and one of my jobs was to work on their corporate intranet, and make a company directory online, and take a bunch of their tools that were kind of like not online at all - I guess they were things that didn't exist - and work on their corporate intranet... And as part of that, I was running on some commercial Unix system, I was running Motif as my desktop, and it was like a three-button mouse, and classic, old-school Unix... And I had access to run CGI scripts, and that was my first time where I had access to a server that made dynamic responses to HTTP requests. So I just went crazy, and I made their intranet do all these dynamic things...

\[00:16:08.27\] And then I wanted to do that myself, so the summer before college I started making my personal website have all the dynamic crap... And I got a copy of Visual Basic, and I made the stupidest Visual Basic app, which was just like a single-line textbox that just floated up my Start bar in Windows... And I could type into that single-line textbox. There was no button to post, you'd just hit enter and you'd post. And it just made an HTTP request. I didn't call it an API for the longest time, because I didn't really think of it as an API. I was like "I don't know, it just makes an HTTP request."

So everyone downloaded this Windows program, and there was no way to post on the web even... And then later, people started writing entire paragraphs in this client. They couldn't hit Enter, because Enter posts, so they would just write this whole wall of text... And I was like, "Oh yeah, I didn't really put a character limit on that." So everyone used it effectively like Twitter, because they would type until they hit the edge of their screen, and then they'd be like "Well, I'm out of space, I guess. I'll hit Enter."

But then at some point people started writing big things, and wanting to do paragraphs, so I put up a web page for people to post and made it a text area instead of an input box...

**Mat Ryer:** Oh, now we're talking...

**Brad Fitzpatrick:** Yeah. And for a while, we all ran the CGI on our school's -- our school gave us CGI access, so we dropped the CGI file into our home directories... But that was too nerdy and complicated for people, so I made it like a shared instance, where people could create accounts.

So then it was just like me and my friends from high school, my friends from the dorms in college creating accounts... But their friends told their friends, and all of a sudden we're killing my little server, and I'm begging people to send me money. In exchange for people sending me money, I put a little thumbs up next to their name on their user profile page... It was just kind of like a--

**Johnny Boursiquot:** The original Verified.

**Brad Fitzpatrick:** Yeah, pretty much... And then people sent more and more money, and then I raised their quota as another way to thank them. I gave them more user avatar pictures, and stuff... And at some point, my mom was like "You know you're taking money from people -- you're taking money in exchange for goods and services. You know that's a business..."

**Johnny Boursiquot:** That's a business.

**Brad Fitzpatrick:** Yeah. "You need to pay taxes, and stuff. People can sue you and take all your money now", and I'm like "Oh, crap..." So she hooked me up with like a family friend who was a CPA, and he introduced us to lawyer types, and we made an official company, so I was legally isolated, if people were jerks... Because you know, people are always jerks on the internet.

So then it turned into a company for the whole time I was in college, and a few years afterwards... And then I sold it to a company in San Francisco, because I just got burnt out running it. It was just non-stop stress. Our site was constantly falling over. We went from one server to 150 servers or so, so we had to invent load balancers for things, and figure out sharding, which - I didn't know the name for it; the name didn't exist at the time, so we called it something else... But sharding users over database clusters, and doing HA databases, and doing HTTP load balancers, and doing a distributed file system... It was effectively S3 at the time, for photos... But the site's constantly on fire, so you're constantly writing stuff to \[unintelligible 00:19:25.00\] because we were hitting our databases too hard, so...

It was good times. It was fun goofing around... And you know, there's constantly something broken to fix.

**Mat Ryer:** It's amazing to hear all the different types of technologies that you had to innovate at the time. It's kind of really surprising. And now, of course, LiveJournal - it says on their website they are now at version 427... And that's great.

**Brad Fitzpatrick:** \[00:19:54.29\] What?! They have version numbers? We didn't want to build all this stuff. At one point we went to buy -- we needed high-availability file storage for our images, and stuff... Because we had a bunch of machines that were net-booting/PXE-booting Linux and stuff, and we're like "Well, where do we store state?" We had the databases for posts and stuff, but we didn't wanna put all of our images in our databases, because we were spinning disks at the time, and didn't have much storage.

Someone said "Oh, everyone NetApp. Go to NetApp and get one of their file servers, or whatever." So we talked to them, and we said "Okay, we need a file server. How much?" And they're like "How many users do you have?" And I was like "Um, this much." "How much do you charge them?" I'm like, "Um, this much. But not everyone pays." "What percentage pay?" And you could see them multiplying in their head... And they're like "Okay, we'll come back to you with a quote." And this was the first time that I dealt with commercial vendors... It just felt so scammy. And I was like "Oh, you're just making up a price on the fly here...", and I just got so pissed. But we had no option, because we were falling over... So we paid them all this money, which - I forget what it was, but it was like tens of thousands of dollars for something that was okay... It kind of worked, but it wasn't amazingly performant or anything. This is all pre-SSDs and stuff anyway, so even if your software is magic, there's not much you can do if you have a couple spinning disks in side this unit... Or two. I think we got a pair, for high availability reasons...

So that's what led me to go build our MogileFS, which is an anagram of OmgFiles... But it was kind of our S3 object store.

**Johnny Boursiquot:** So you were creating all this tech, which is now commonplace, right?

**Brad Fitzpatrick:** Yeah. So that's the other reason I kind of wanted to go do a startup. When I first joined Google, they had all this secret sauce, like Borg, and BigTable... There was amazing technology, so I wanted to go to Google and see how the grown-ups did distributed systems. But now I feel like all the secret sauce is out there, in open source... But I've never had really a chance to use it. At Google I had access to it, but I wasn't necessarily using it. I could just use it if I wanted, so I used it for the Go build system, and stuff... So this is kind of like my first company that I've got to do where the cloud existed, and I can use all this distributed systems stuff for free... And it's great; we're setting up our proxy relays around the world for Tailscale for the people who don't have direct connectivity, for like 4%-5% of connections; if we can't penetrate the NAT on those sites we end up proxying the encrypted packets through our relays... We're like "Okay, yeah, let's just spin up some ones around the world", and we've just got a bunch of $5/month instances in all the regions around the world, and it doesn't take any time. That stuff used to be downright impossible, so... It's fun. I always knew that this stuff existed, but being able to use it for the first time is pretty fun.

**Mat Ryer:** Yeah, it's nice to see that these things are becoming accessible, these technologies which in the past - like you - you had to just create them... Like memcached, which we should definitely talk about more. So yeah, I think it's a great way also for projects to emerge; like you say, memcached came out of the LiveJournal stuff. It's that thing of solving real problems, and having to, like you say, when it's on fire. So you have no choice; there are imperative things, you've got to solve these problems. I find some great tech comes out of those kinds of situations.

**Brad Fitzpatrick:** Oh, yeah.

**Mat Ryer:** Do you like working in that sort of environment, or do you prefer it more relaxed, where you can just take your time and design maybe...?

**Brad Fitzpatrick:** \[00:23:46.01\] No, I need a certain amount of stress. There's probably a limit, but if there's no stress at all, the priority isn't so obvious. I don't' do well when it's not obvious what the priority is. If I have 20 things that are all kind of equal priority, but I know I'm only gonna have time to do two of them today, but it's just arbitrary which two of the 20 I pick, then I'm like "Why pick anything? 18 of them aren't getting done... So why those two?" I like a certain amount of fire, so I know what to do next.

**Johnny Boursiquot:** Do you like the arbitrary stress? You know, say, product teams - you're making arbitrary deadlines, saying "Hey, we need to have a conference on this date, so we need to build this thing by that date." Or do you prefer the stuff that's being driven by customer need? Like, basically needing to scale.

**Brad Fitzpatrick:** Oh, the customer needs, for sure. Seeing people react to things, on Twitter or whatnot, when you launch something - that's way more motivating than some arbitrary deadline. I mean, if it's getting things done for a conference demo or something, at least that date is real. But if someone is doing a sprint, and it's arbitrarily for n weeks from now, I'm like "Okay, why that Friday? Why that Thursday?" I don't know... But yeah.

**Mat Ryer:** And then they make you complicit by going through that estimations exercise, and then it's like "Well, I'm sorry, you said it was four muffins, so it's four muffins." \[laughter\]

**Brad Fitzpatrick:** I've actually never worked on a team that did any of that, so I'm kind of speaking blindly here... I've heard people talk about it, but I don't really know the process.

**Mat Ryer:** Oh. It's cool. It's basically abstract. You try and just have an abstract number, a relative score for work. In some ways it's nice, because you can identify big pieces of work, usually. Someone on the team will know that this is a big piece of work, and they can talk about it... But the trouble is obviously it gets turned into dates and times, and then suddenly we're all rushing, and there's no really good reason for it.

**Break:** \[00:25:48.07\]

**Johnny Boursiquot:** So obviously -- well, I'm gonna assume that you're using a lot of Go in your day-to-day work today...

**Brad Fitzpatrick:** Oh yeah, it's like 99% Go. We have a little smattering of other languages here and there, but...

**Johnny Boursiquot:** So before Go, as Cal asked in the GoTimeFM channel, what did you use primarily?

**Brad Fitzpatrick:** I started off with BASIC and C. But neither one -- you know, in BASIC you hit limits pretty quickly, and C is not very fun. It's like, it exists to do things when you need to use it, but I don't enjoy writing in C. It just feels tedious.

So when I discovered Perl, in '93-'94 or something like this - it was Perl 4 at the time - I was like "Whoa, I can do things really quickly!" But this was also the language everyone at the time was doing CGI scripts in too, so it was also the language that let me do cool, dynamic web stuff.

\[00:28:07.04\] So I was very in the Perl community, very involved, and all of LiveJournal was pretty much all Perl, except for little bits and pieces that needed to be C for performance reasons. Memcached was originally in Perl, but it fell over within like a second, as I suspected it would. The prototype was in Perl, but then we quickly rewrote it in C.

So I love Perl, and I never really jumped on the Python or Ruby trains, because they were just not different enough from Perl for me to care. They had all the same pros and cons; they weren't much better. They were still like explode at runtime, and no type checking... Python and Ruby were even slower than Perl, so performance wasn't a reason... And maybe the syntax was a little cleaner, but at that point I didn't care, because I already knew Perl.

And then I joined Google, and they use lots of Python, C++ and Java, so I wrote in all of these kind of out of necessity, but I didn't really love any of them. I worked on Android for a couple of years and wrote a lot of Java, and a lot of Google frontends were often in Java, and Google backends were often in C++... I launched a service that was a whole mx of things. It was like Java, C++, Sawzall which was Google's language for logs analysis, which Rob Pike worked on prior to Go... I kind of hated it, but that's what everyone at Google wrote their logs analysis in at the time. Nowadays they've migrated off Sawzall onto Go.

Yeah, so I was never really excited about any of the Google languages. I wrote in them because I had to, because there was no choice... And then I saw Go come out. I went to a bunch of the internal talks on Go, and I was like "Yeah, yeah, whatever..." Google had a bunch of internal languages, and most of them were so-so... So I was not super-excited at the time.

Somebody had a question from the audience, like "Does Go have closures? Do you have first-class functions?" And the answer was a very dismissive "No, we don't. You don't need them", or something. And I was like "Well, okay... I'm out." Perl had them, and I had this book "Higher-order Perl" that I really loved, that taught me a lot of what people would probably actually learn in Lisp in school, or whatever, but I never really had any exposure to it until that book. So I was totally in love with higher-order functions, and stuff like that. So when Go didn't have it, I was like -- I kind of wrote it off. And also was like "I don't really invest much time in another Google internal language, because I'll just leave Google at some point and I won't get to play with it anyway, and I won't get to use it for my personal projects..."

But then when they said they were open-sourcing it, I was like "Oh, I should look again. And then I noticed they had added closures in the meantime. I guess Russ Cox just went in one day when Ken Thompson was on vacation, and couldn't object, and Russ just added them. \[laughter\]

**Johnny Boursiquot:** Russ? No..

**Brad Fitzpatrick:** Yeah, that doesn't sound like Russ... One of the Russes... \[laughter\] So then after that I started just screwing around on it. I was spending like 2,5 hours a day on the Google bus, going back and forth between San Francisco and Mountain View, and I just had a lot of time to screw around on my laptop... So I decided the Perkeep, which at the time was called Camlistore, was originally kind of a set of ideas and data structures of how I would want my personal life archiving storage system to work... But I wasn't excited to write it, because I didn't wanna write it in Perl; I was sick of scripting languages... I didn't wanna write it in C++, because that just didn't sound fun for a personal project... And so when Go came out, I was like "Well, the best way to learn a language or learn anything new is to use it", so I was like "Let's try to build this storage system idea that I had. Let's try to write that in Go."

\[00:31:55.03\] I've found right away that the standard library was missing tons of stuff, so that's why I started sending in lots of changes... Then one day Rob Pike was like "Hey, do you wanna do this full-time?" I was like "What?! Work on a language full-time? That sounds great! And it's open source... I don't have to feel bad about working for the mega-corp, working on advertising..." \[laughter\]

**Mat Ryer:** That's amazing. So again, a lot of those pieces of the standard library came out of things you needed.

**Brad Fitzpatrick:** Oh yeah, pretty much everything that I added to the standard library was because I needed it for Perkeep, or some other personal project, or... Sometimes, people were complaining about it on the mailing list, or something, but it was almost all my needs.

**Mat Ryer:** Yeah. But I think that's why they resonate so well. Memcached is an interesting one. That project was originally C... But there is a Go version, isn't there?

**Brad Fitzpatrick:** Well, there's clients for every language under the sun, so...

**Mat Ryer:** But the original is still C.

**Brad Fitzpatrick:** Yeah, the server is still C.

**Mat Ryer:** Oh, okay.

**Brad Fitzpatrick:** I've reimplemented the server in C++ inside Google; that's what the App Engine -- there's a version of memcached inside Google that is all based on Google's RPC system, Which is all protocol buffers, and stuff... It's kind of like gRPC, basically. And that's written in C++, but it's not -- I mean, a memcached server is kind of like a good Hello World network server. It's very simple. It's a HashMap hooked up to a Get and Set effectively.

**Johnny Boursiquot:** Well, that's kind of putting it lightly... But yeah, sure. \[laughter\]

**Mat Ryer:** Yeah, because you know, they synchronize, and...

**Brad Fitzpatrick:** I mean, the only tricky part is you want a really good memory allocator. Originally, we just used malloc, and we worked for like a week, or sometimes like a few days, and then the CPU would go through the roof, because we had all this internal fragmentation, and the memory allocator was having a hard time finding a spot to put your memory of the right size, just searching all over... So once we switched to a slab allocator - there was that Solaris paper back in the day about slab classes, and stuff... So we wrote a memory allocator inside memcached that bypassed your system one, and just did its own, Malloc-free. It only asked the operating system for one meg at a time, and then cut up the one meg itself into size-specific classes...

So that's the only real trick inside memcached... But nowadays all the normal libc memory allocators do similar things, so...

**Johnny Boursiquot:** So let's talk about that home cluster project you keep posting about... \[laughter\] Why, first of all?

**Brad Fitzpatrick:** Yeah, so at one point -- I've gone back and forth between... I've always had computers at home, and I basically always had servers at home, but then at one point I went like too full-cloud. All my stuff was on the cloud, and I had VMs all over the place, and bandwidth costs were going up, because the cloud charges you way too much for bandwidth, and stuff... And I woke up one day realizing I didn't understand how computers worked anymore, or what computers cost, or how fast they were, because I was so disconnected from reality and I was always using this virtual stuff... So I wanted to build my own server again.

And I think about the same time I had an internet outage at my house, because -- I forget what I was using for a gateway, but I had like 2-3 gateway failures in a row, where my router failed in my house... And it was super-annoying. So I decided that my goal was gonna be to build a high-availability internet router that had no single points of failure.

I was like "Well, I can't have one server. I need to have at least three, because I need to have a \[unintelligible 00:35:39.21\] quorum if one fails."

First I started off with VMware, because I was using it at work, with ESXi, but I couldn't stand how corporaty and enterprisy the whole thing was, so I switched to Proxmox. So now I had just VMs that were just floating around, and I don't really know which VM is on which of the three nodes... And if one of the nodes dies, the VMs just float somewhere else. I use Ceph for storage, so the storage is sprayed over all the three machines too, and I don't have to worry about where my block devices are; they're all just highly available.

\[00:36:11.08\] And my router isn't a physical piece. My router is just a Linux VM that floats around the machines, too. So each one of those is plugged into -- I have three switches, and every machine is plugged into... Well, I had two switches at first, so every machine was plugged into both switches, and they're all different power supplies, and each of the three machines has two cables, one to each switch... Two ISPs, and they just failover between the ISPs... The WiFi in the house is all PoE-powered from the switches that are on UPS... So the whole neighborhood could lose power, and I would still have working WiFi for like an hour and a half... \[laughter\]

I did this to learn how servers worked again, and you know, stop being so dependent on the cloud. But of course, I always build these too complicated setups and I forget how they work, and then I have our second child and then I don't look at it for a year, and all my certs expired the other day, and all my home automation stopped working, because my etcd cluster was down... And I couldn't renew the certs, because to renew the certs it needed to talk to the cluster or something, and... I don't know. The whole thing's just screwed, so I wanna nuke it and start over.

**Johnny Boursiquot:** \[laughs\] You need some observability, man...

**Brad Fitzpatrick:** So now I'm looking at like "Do I wanna use Flatcar Linux, like the CoreOS continuation project, or do I wanna use K3S, or maybe I just wanna use Podman...?" So I'm kind of like debating all my options now to build a more simple thing to run containers at my house.

**Mat Ryer:** It's much easier to just do it in the cloud. \[laughter\]

**Brad Fitzpatrick:** I could... But I wanna have jobs that are connecting to security cameras, and doing motion detection on live video... And if I did that over the internet connection, the bandwidth cost of the cloud would be stupid.

**Mat Ryer:** Right, right.

**Brad Fitzpatrick:** And once I have some jobs running here, I might as well run all the jobs here.

**Johnny Boursiquot:** This sounds like the typical "Oh, I needed to blog more, so I wrote a blog engine."

**Brad Fitzpatrick:** No, that's how people stop blogging. They're like "I'll start my blog again once I rewrite my blog engine", and then they never rewrite their blog engine, so they never blog. That's where I'm at.

I see a question on the Slack, how do I feel about Perl 6... It's not called Perl 6 anymore. What is it called? Rakuda, or something...?

**Mat Ryer:** Oh, really? How come?

**Brad Fitzpatrick:** They renamed it. I think the Perl 5 people were feeling hurt...

**Johnny Boursiquot:** Yeah, there's some drama about that.

**Brad Fitzpatrick:** Perl 5 people were feeling like they were deprecated if there was a Perl with a greater number...

**Mat Ryer:** Well, it kind of makes sense, doesn't it?

**Brad Fitzpatrick:** It's called Raku now.

**Mat Ryer:** Is it a different team or something then?

**Brad Fitzpatrick:** I don't know... There's probably some people still staying there, but... I mean, it's been going on forever now, right? I mean, it has some fun stuff, and I occasionally -- I mean, I read some of the new things that come out, the summaries of where it's at whenever I see one pop up on the internet somewhere, but... I haven't used it, but I've read some of their design docs. It has some cute stuff... I bring it up sometimes in the Go proposal review meetings, where I half-joke that we should adopt something from Perl 6.

Perl 6 has the dot-dot-dot operator, which - they call it the yadda-yadda-yadda operator, or something... And it's like a to-do, which -- it's valid code; you put it in there. I said that in Go we should make dot-dot-dot as a statement; just basically be a panic. So if you're not done writing a function yet or a method, you can say dot-dot-dot, and it would compile, and it would run, but if it ever executed that line, it would panic and say "To do dot-dot-dot encountered." It would make demo code on slides really cool. It would be syntactically correct code if it's on the slide.

**Mat Ryer:** \[00:40:05.19\] It'd be nice if it just ended.

**Brad Fitzpatrick:** \[unintelligible 00:40:05.00\]

**Mat Ryer:** Yeah. It's like "Oh, it's the end of the example." \[unintelligible 00:40:10.01\]

**Brad Fitzpatrick:** Oh, I thought you meant like it would just do \[unintelligible 00:40:12.06\]

**Mat Ryer:** Maybe. That'd work.

**Johnny Boursiquot:** We have another question here from Lewis - where is a bug or feature written in Go by you?

**Brad Fitzpatrick:** The MIME multipart package - it took us like five tries to get that right. Me and Andrew Gerrand wrote it originally when he was in San Francisco... And I don't know -- we had gone out to brunch in the morning before we made it, so we've always blamed the Mimosas for the poor quality... \[laughter\] But it must have been something else, because it was really bad for a while. We just kept finding bugs in it. But I think it's pretty solid now... But whenever I see that package, I kind of cringe, and I'm like "Oh, right, that one..."

**Mat Ryer:** Yeah. It's a complicated thing, but the interface is simple. Did that evolve over time? Did that change, or...?

**Brad Fitzpatrick:** No, no. We can't change the interfaces.

**Mat Ryer:** Oh, I see. You mean this was for the v1 release even.

**Brad Fitzpatrick:** Pretty much... I mean, it was early enough that it basically didn't change. It was just the implementation that was tricky to get right.

**Mat Ryer:** Thanks for doing it though, because we can just use that now, and it works.

**Brad Fitzpatrick:** Yeah... Well, you know, until people find bugs and edge cases in it, but yeah... We'll see.

**Mat Ryer:** Yeah, that's alright. You can't worry too much about that, can you...?

**Johnny Boursiquot:** How do you feel about -- there's always this back and forth between certain community members around adding new features to Go. The hot new thing right now is the debate going on with the generics proposal... Which kind of seems like it's on its way. I'm curious how you feel about introducing these kinds of features in Go? And do you also share the feeling that "Okay, Go is good enough as is, and introducing these things is gonna add unnecessary complexity"? Where do you stand on that?

**Brad Fitzpatrick:** I'm pro generics, for sure. I know there's some community division on this, but I think it will help. I mean, people will abuse it, because people will abuse anything, and there will be bits and pieces of code here and there that are disgusting, but I think by and large it'll make most code more readable. Maybe some of the implementations of these things - like, if someone makes some generic data structures, it might be really hard to read some of this code... But most of the code that you're reading that uses these packages uses some tree-type or some HashMap-type should-be better code than exists today. There should be fewer empty interfaces, and stuff like that.

So I think that'll be good. I'm still disappointed in how error handling turned out, and it seems like the whole Go team has kind of given up on trying to address error handling at this point, because all the previous efforts have kind of failed, and it was so hard to get those previous error handling proposals out, and they were so poorly received... And I feel like they just don't wanna try anything at this point, because there's no ideas... Nobody has any new ideas, and it's so contentious in the community that nobody has the energy to just deal with it...

I kind of think that Go's popularity - it helps it be more popular, but I think it hurts in that it's now too hard to change the language, because there's just too many vocal opinions out there. In the early days Go could change quickly, because nobody cared... But yeah, the Go 1 compatibility thing is a blessing and a curse.

**Mat Ryer:** It's a blessing for us as users of it...

**Brad Fitzpatrick:** Yes and no. I mean, if we were allowed to change the standard library and make it clean and consistent, then you wouldn't see these three or four generations of styles in the standard library, right? We could put context everywhere, or we could build context into the language, and then make it implicit, or something...

**Mat Ryer:** Just do a Perl 6 and make a new language with a different name... \[laughter\]

**Brad Fitzpatrick:** \[00:44:08.29\] Yeah, we see how well that worked out for Python 3 and Perl 6, right? In practice, these things don't work. Ian wrote a document about all the languages, and the successful ones are the ones that don't nuke the world and start over, so... You've gotta find a way to do it iteratively.

**Johnny Boursiquot:** How do you manage your modules? That's another point of contention within the Go community, right? Basically, how do we manage the introduction of Go modules and the semantic import versioning, and all that stuff? I'm curious what you feel about it, if anything. Do you just say "Well, we're gonna be at v1 forever, because we don't wanna have a v2", or how do you treat that?

**Brad Fitzpatrick:** Well, it's easier to be at v0 forever. Then you don't have your rules.

**Johnny Boursiquot:** Right...

**Mat Ryer:** So never release, is your advice

**Brad Fitzpatrick:** Yeah... It works.

**Mat Ryer:** You'd be happier.

**Brad Fitzpatrick:** It depends who your audience is. If you're writing stuff for yourself, it's easier to stay at v0 forever, for sure. I honestly haven't had to deal with doing any of the v2 stuff... I see a lot of people complaining about the semantic import versioning, and I could probably believe it... But I just haven't used it enough to feel the pain.

**Mat Ryer:** Yeah. My packages just stay simple. I don't know for version 2... \[crickets\] Don't worry about the silence, Brad. You don't have to feel bad after I say a joke. It's okay to just be an awkward silence... Because they cut it out, you see...

**Johnny Boursiquot:** You hope. \[laughs\]

**Mat Ryer:** I hope.

**Break:** \[00:45:45.17\]

**Mat Ryer:** Well, it's that time again... I think it's time for Unpopular Opinions!

**Jingle:** \[00:47:15.05\]

**Brad Fitzpatrick:** I was hard-pressed to think of one, but then I just saw this Twitter discussion going by again... I feel like every year or so there's like a Twitter fight about whether HTML is a real programming language or not, with "real" in quotes. And you know, all these people fight about it, and it doesn't seem like too worth fighting about it. One camp is like "Oh, it doesn't have conditions. It's really just a markup language, not a programming language." And the other camp is like "No, don't belittle new people that are just getting started. You should encourage them."

\[00:47:59.00\] But I'm pretty firmly in the camp that it's not a real programming language, but that doesn't matter; you're still a nerd typing stuff into a computer. Once you're typing nerdy, arbitrary stuff into a computer, it's not a small jump at that point. It's like a tiny step towards learning a real programming language that has if. \[laughter\] So I don't know... But I only thought of that because I just saw it again going by, and it seems like sacrilegious to say that HTML is not a real programming language... But I will say it.

**Mat Ryer:** That's definitely gonna get your Wikipedia page trashed...

**Brad Fitzpatrick:** Yeah, totally.

**Mat Ryer:** And they'll probably do it using HTML.

**Brad Fitzpatrick:** You're all my nerd friends, even if you just do HTML. You're still a nerd, it's okay.

**Mat Ryer:** Yeah... I think that's it. That's the nice thing. Because that's what people mean, isn't it? They're moaning the "Yeah, we're belittling these newbs that are learning just HTML, bless them."

**Johnny Boursiquot:** Yeah, "Are you a real programmer if you only do HTML?" There's so much identity associated with that, you know?

**Mat Ryer:** Yeah. So any others? Johnny, you haven't given one for ages, mate.

**Johnny Boursiquot:** Well, that's because I haven't been around for ages, remember? I haven't been on for like 3-4 shows, man...

**Mat Ryer:** Yep... \[laughter\] So you admit it... So do one.

**Johnny Boursiquot:** \[laughs\] Well, I don't know; it sounds like Brad wanted to add some flavor.

**Brad Fitzpatrick:** No, I just saw a question go by - if I wanted to remove something from Go, what would I remove?

**Johnny Boursiquot:** Ooh...

**Brad Fitzpatrick:** I think I would remove complex numbers.

**Johnny Boursiquot:** Ooh. Say more.

**Brad Fitzpatrick:** I think I filed a proposal about this a while back... Because it turns out nobody uses them. \[laughter\] And if anyone does use them, I think we should have operator methods instead, so you can define complex numbers as a type, and still be able to use normal math operators on them, with the usual precedence... And then maybe some of the Gonum people would be happy, too.

**Mat Ryer:** Yeah... I mean, I've never used it. I think you might be right; I don't know who uses it. I just stick to simple numbers. I stay away from the complex ones. I don't need them.

**Brad Fitzpatrick:** I think the legend goes that Ken Thompson was very convinced that any modern language needed them because some other language had them, so they added them, but then no one uses them... I don't know.

**Mat Ryer:** That's so interesting, that it's sort of very personal kind of opinions that end up -- you know, that lead to decisions that then, now because Go has grown so much, we sort of see at scale. So it's really interesting hearing about some of those little discussions that people have, and it turns into something, into the language that we then all are using every day.

**Brad Fitzpatrick:** Or not using.

**Mat Ryer:** Or not using it... \[laughter\]

**Johnny Boursiquot:** It's kind of a personal preference. If someone says "Well, any sufficiently modern programming language needs to have complex numbers", one could make the same argument for generics, right? Why wasn't generics part of the v1, right? So yeah, it's preference, at the end of the day... But I have to agree, I've never used them. I think you have to be doing a particular kind of work to need them, right?

**Brad Fitzpatrick:** Yeah, somebody was telling me that even the people that typically need them, there's faster ways to do it without them, or something... So a lot of people working in the math fields, where you would think that they would make sense, don't. Rendering the Mandelbrot set is always a classic example of when you need it... And then people are like "Well, actually, there's faster ways to do the Mandelbrot set without them" etc. \[laughter\]

**Johnny Boursiquot:** Oh, well...

**Mat Ryer:** That doesn't sound like people on the internet...

**Brad Fitzpatrick:** \[unintelligible 00:51:40.26\] say gif or gif wrong...

**Johnny Boursiquot:** Oh yeah, I meant to come back to that... So -- \[laughter\] I have a bone to pick with you.

**Brad Fitzpatrick:** If I recall, one of the specs actually had the pronunciation in the spec, and it was gif, wasn't it?

**Mat Ryer:** I don't know.

**Johnny Boursiquot:** Well, I mean...

**Mat Ryer:** \[00:52:02.15\] Johnny, this could be a new regular part of the show. We make a jingle, and we'll do gif versus gif... Just to find out.

**Johnny Boursiquot:** Yeah... I don't know. I've gone back and forth honestly, and I don't know. I guess today I'm feeling like gif, but... \[laughs\]

**Mat Ryer:** I didn't know it had it in the spec. That changes things, doesn't it?

**Brad Fitzpatrick:** Yeah... The spec was called GIF89.TEXT, all-caps... And now I'm trying to find it.

**Mat Ryer:** How did they spell it? \[laughter\] You just read it like that Brad. It just says it's pronounced G-I-F.

**Brad Fitzpatrick:** Yeah, it's not an 89a spec...

**Johnny Boursiquot:** \[laughs\] I can't believe we're doing this...

**Mat Ryer:** This is what I thought a podcast with Brad would turn into... \[unintelligible 00:52:46.16\]

**Johnny Boursiquot:** Oh, man... We can't help ourselves.

**Brad Fitzpatrick:** Yeah. I'll get back to you. I'm sure about this... But you know, memory.

**Mat Ryer:** So do you wanna tell us quickly about tailscale? Because I'm aware of this, but I'd love to hear a bit more about it.

**Brad Fitzpatrick:** Yeah, so we don't have a great elevator pitch, which is maybe a problem for a company...

**Mat Ryer:** Private networks made easy.

**Brad Fitzpatrick:** Yeah, that works... So we're reluctant to call it a VPN, because VPN has all these different meanings to different people... Because people hate their corporate VPNs, and the personal VPNs are often very shady; people trying to hide their IP address while they're downloading torrents, or something like that, and the company is really logging all their stuff and reselling it...

So yeah, VPNs - people have lots of opinions about that term. And we're kind of a VPN, but instead of sending all your stuff and encrypting it to like a hub and spoke, it's all kind of like -- basically, you put tailscale on all your devices, and then they join a network together, and all your devices can reach all of each other. They get a new IP address, that is your tailscale IP address... And anything with tailscale then can contact anything else with tailscale, or your network that you create. And all WireGuard to each other, and it does peer-to-peer, so it won't go through our servers. It'll get through all your NATs, so it will all do the NAT traversal and all the firewall punching tricks... And something like a couple percent of connections that can't penetrate the NAT end up getting proxied through relays we run... But we can't see the traffic, we're just moving UDP packets around, that are all WireGuard-encrypted already, and we don't have the keys...

So it's fun. Networking gets stupid-easy at that point, because you get a connection and you know by its IP address exactly who it is. So you can do old-school host-based authentication again. You don't have to deal with cookies, or logins, or whatever. You know exactly which device and user that connects to you.

Companies are replacing their corporate VPNs with this, and... I don't know. Kind of great.

**Mat Ryer:** Yeah. Very cool.

**Brad Fitzpatrick:** And it'll find the shortest path. So if your office is split between the West Coast and East Coast, and your employees are roaming around - back in the days, when employees could roam around and take flights, and stuff - you would just connect via the shortest path; you wouldn't bounce around the country, proxying packets around...

**Mat Ryer:** Hm. Does it use the packages from the standard library then?

**Brad Fitzpatrick:** Oh yeah, pretty much. I mean, there's certainly things we've had to write, but it uses a lot of the standard library, yeah. And pretty much all of our code is open source. The GUIs for Windows are not open, for instance, but you can run it in Homebrew, on Macs, and stuff, just without the GUI.

**Mat Ryer:** Very cool. And we'll put a link to it in the show notes, for anyone interested in checking that out.

**Brad Fitzpatrick:** Yeah, it's fun to be able to use Go, rather than just work on Go itself.

**Mat Ryer:** Yeah.

**Brad Fitzpatrick:** I've definitely found some parts of the standard library I'd never used before. I was like "Oh, perfect. This exists. I never even knew about it."

**Mat Ryer:** \[00:56:05.02\] Well, do you miss it? Do you miss working on the Go project at Google more officially? Or has nothing changed for you?

**Brad Fitzpatrick:** Well, I definitely ignore a lot more bugs that I used to, because now it's not my job to stay on top of a lot of things... But I'm still going to the proposal review meetings... So in that sense I'm still involved. I think I'm the first non-Googler to be part of the proposal review meetings now.

**Mat Ryer:** Oh, congratulations.

**Johnny Boursiquot:** So do you think they'll listen to you if you disagree with something or propose something strongly?

**Brad Fitzpatrick:** Yeah, they're not very contentious meetings... So kind of by definition, things go in once they've had consensus. If anyone disagrees with something and has a strong opinion, everything kind of stops, while people figure out why someone has a strong opinion about something.

**Mat Ryer:** Yeah. It'd be interesting to listen into one of those meetings, Brad. Would you be willing to wear a wire?

**Brad Fitzpatrick:** I could ask Russ.. That'd be a good way to get kicked off of them. \[laughter\] We had discussed at times making them open, or broadcast, or recorded somehow... But it's more of a logistics issue. But I suppose we should revisit that.

**Johnny Boursiquot:** Because it does feel a little bit of a behind-closed-doors kind of discussion, for something that affects the entire community. I'm not putting that sort of dark cloud on it, but if it's closed, and the decisions made during that meeting are the start of new directions, it could feel like that for some.

**Brad Fitzpatrick:** Yeah, so we did change the procedure a few months back... So now there's notes/minutes kept for all of them, and no decision is made in a single meeting. So it now takes two weeks, or a month, depending on the type of issue. We announce our decisions ahead of time, and only once a whole meeting has gone by with no new data, and an assumed direction has already been picked... If this is tentatively accepted or tentatively declined, then once another week goes by with no new input, then we say "Okay, marking accepted. Marking approved."

So if you're not in the meeting, you still know that the decision is coming, and it gives you a chance to object and to raise new information. We stole this from the Rust community, who had a blog post about how it works in their community. It has some name, but I'm forgetting the name now. It's called "No new information", or something like that...

**Mat Ryer:** That's an interesting title for a thing...

**Brad Fitzpatrick:** Yeah, I'm probably screwing it up.

**Mat Ryer:** That's alright. But they aren't deaf to the -- or they aren't ignoring the community. Feedback from the community still feeds into those meetings, doesn't it?

**Brad Fitzpatrick:** Oh, the meetings are entirely in response to issues filed by the community. I mean, occasionally, one of us will file our own issue that then we discuss, but...

And in the past they've been pretty good about trying to bow out of the voting or discussion on things they've done themselves. I forget which proposal it was, but a while back Russ filed a big proposal, and he kind of recused himself from the decision-making on it. He's like "I don't wanna look like I'm just approving my own thing."

**Mat Ryer:** That's very honorable of him.

**Brad Fitzpatrick:** He's an honorable chap.

**Mat Ryer:** He is.

**Johnny Boursiquot:** So have you introduced your kids to programming yet? Someone from the Slack channel wants to know.

**Brad Fitzpatrick:** My older one is three, and the younger one is one, so it's not quite there...

**Johnny Boursiquot:** Might be a little tad bit early.

**Brad Fitzpatrick:** In a couple years, yeah...

**Mat Ryer:** You could start them off with Ruby... \[laughter\]

**Brad Fitzpatrick:** I've been debating a lot what I'm gonna do when the time comes... It has to be engaging enough. It has to be contemporary somehow. I don't think getting him an Apple 2 terminal would be quite so exciting. Lego might be fun; the little turtle graphics is always fun.

**Mat Ryer:** \[01:00:12.25\] If I had a kid, I would bring it up kind of in the same timescale that I was brought up, to have a Spectrum first... You know what I mean? Like, it can learn on that. Because I don't think kids appreciate how good technology is.

**Brad Fitzpatrick:** There is a guy online - he said when his kid reached a certain age, he got to have a certain video game console, and he got him every one that had ever come out in order, and he made them use it for like six months, or something. So he could play Pong or whatever, with the little silly paddle thing, for like six months. And then he could advance to the 8-bit games, and the SEGA... So he can see progressions of decades of game consoles getting better.

**Mat Ryer:** That's brilliant.

**Brad Fitzpatrick:** I thought that was pretty cool.

**Mat Ryer:** Yeah, I think that's great. It's basically my idea, but with some level of commitment...

**Brad Fitzpatrick:** Yeah... Finding all these machines that still work on eBay and whatnot seems like a challenge.

**Mat Ryer:** Yeah... But it's so fun. It is funny; I'm quite nostalgic for that old tech. I actually miss when computers were rubbish. I miss the times when the computers were just like terrible graphics, really slow... I'm quite nostalgic for those times.

**Brad Fitzpatrick:** I mean, computers used to be faster, in a lot of ways. Applications used to be faster than web things are today.

**Mat Ryer:** Hm.

**Johnny Boursiquot:** Yeah, we don't care anymore. We just say "Hey, just throw some SSDs at it" or something.

**Brad Fitzpatrick:** There was a person a while back who analyzed the keyboard input latency from old machines to modern machines, and just showed how computers nowadays - you hit a key and the time it takes to show up in Gmail or whatnot, it takes forever.

**Mat Ryer:** Oh, really? Yeah, that's funny.

**Brad Fitzpatrick:** You know, keyword latency, display latency, operating system latency...

**Mat Ryer:** Yeah... That's funny.

**Johnny Boursiquot:** Along those lines, about teaching kids to learn to appreciate tech - it would be kind of hard to say "Here, child, carry around this rotary dial phone before I can give you smartphone." It might be hard to score that, but you know...

**Mat Ryer:** Yeah... But at least make him have a landline though for a bit first... And then you could be like "Right. Now, watch this!" and cut the wire. And all along it was just an iPhone \[unintelligible 01:02:34.26\] taped to an old phone, and you're like "Look at this. We blow the tiny mines." We did that, I think... \[laughter\]

**Brad Fitzpatrick:** So I found a landline recently, and I was like "Oh, I wanna make this do silly things again." And I used to do silly things with Asterisk back in the day, like controlling a little PCI card that did the tone that made phones ring... And so I went to look at Asterisk again, and after not using it in almost 20 years... And I was like "Oh, it's basically the same. Some things are kind of changed..." I found some blog posts, it was like the history of how this AGI, this Asterisk Gateway Interface, which is like CGI for phones - how it changed over time; there were three generations of things - AGI, and then something else, and now they have ARI. And it was kind of like a "Oh, these are the mistakes that were made, and here's what we learned over time..." And it was kind of cool to see a project that felt like I just used yesterday, but it'd really been 20 years, and I found this retrospect of posts about like 'Yeah, we've made all these changes..." I was like "Wow!" It's kind of cool to watch a project in fast-forward like that.

**Mat Ryer:** Yeah. Fast-forward. If you could fast-forward the kids as well... You could be like "Right, you've been good this week, so now suddenly... 64k. Good boy."

**Brad Fitzpatrick:** "You get more memory. You get more graphics."

**Mat Ryer:** Yeah. "Graphics cards now exist." Just like milestones in tech as rewards for kids. I don't know -- I mean, I just thought of it today, but I am get a domain name as soon as I can for it The first step.

**Johnny Boursiquot:** Alright... So this has been pretty epic and pretty fun. It's been a great joy and pleasure having you on the show, Brad, and a great participation from our folks in the GoTimeFM channel as well. Hopefully, they've gotten all that questions answered and now we're gonna see some updates on your Wikipedia page very soon here... \[laughs\] Yeah, that gif and gif thing - I don't know, man...

Anyways, it was a pleasure having you, and we'll see you next time on the GoTime podcast.

**Brad Fitzpatrick:** Cool. Sounds good. Thanks.
