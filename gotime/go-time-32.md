**Erik St. Martin:** Welcome back everybody to another episode of GoTime. It is episode number 32. We are recording this today on January 26th. Today's show is sponsored by StackImpact and Ardan Labs series of Go training. Today on the show we have myself, Erik St. Martin, Brian Ketelsen is also here - say hello, Brian.

**Brian Ketelsen:** Hello, Brian.

**Erik St. Martin:** And Carlisia Pinto.

**Carlisia Thompson:** Hi, everybody.

**Erik St. Martin:** Our special guest today is Filippo Valsorda. Why don't you give everybody kind of a quick background about yourself? Tell us a little bit about yourself and the things you're working on, and then we'll kind of get into some of the projects you've been working on.

**Filippo Valsorda:** Hello, everyone. I'm Filippo, I'm from Italy and I work at CloudFlare. I did a number of different things with Go at CloudFlare. The most recent one is a small project that I recently published, called hellogopher. Before that, I was working on the CloudFlare DNS server, which is pure Go.

**Erik St. Martin:** Recently we've been looking at one of your projects, which was the hellogopher, which was kind of an easy way to bootstrap a project for people who might not be familiar with using GOPATH. Do you wanna talk a little bit about that?

**Filippo Valsorda:** Sure. At CloudFlare we are hiring a lot of developers, and we don't really hire Go developers; we hire developers, and then we train them to work on Go, because you know how nice and easy it is to pick up the language.

So I've been looking at how to smooth that process and also how to make it easier for other people in the company to interact with all these repositories that are in Go when they're not Go developers. I was going through this process, and then on a drive home from Napa, with a lot of wine involved. I was in a car with senior engineering managers, and they started ranting at me about GOPATH. And I was like, "Wait, wait..." They started telling me how Go was hard to use and they never could figure it out, and every time they have to pick it back up it's confusing and it takes them 30-40 minutes just to pick it up. I was like, "What? What are you talking about?" Yeah, you can guess it - it was all about the GOPATH and the fact that you have to clone this repository in the right place in your file system, and that's a completely extraneous process to any developer that comes from other languages... So that's what hellogopher is solving.

**Erik St. Martin:** Yeah, it's funny because it was yesterday or the day before I had a friend who had a similar issue with "Where do you check out the code to?" because most of the time you're used to just pulling it to wherever you happen to store your code. It doesn't have to be in a specific spot on your hard drive.

Then the other side of it that gets confusing is how to you contribute back? That's a common confusion... Like, "Okay, I wanna commit something, so I fork this repo, but now it's not in the right place... How do I change my import path?" and it's not immediately clear that you could just set your fork as a different remote for the Git repository. So there is a lot of confusion with that, because the paths are explicit that way.

**Filippo Valsorda:** \[04:02\] Yeah, a number of times I've seen PRs that have all the import paths changed to fork, and the person being like, "Oh, yeah, you can remove that... I just had to do that to make it work on my machine", and every time it's this little learning process. So hellogopher is actually meant to get you through your first PR without needing to set up GOPATH at all. The project just builds, tests, runs go fmt, goimports without any need to set up GOPATH.

**Erik St. Martin:** So have you had pretty good success at CloudFlare with that, with people being able to just grab a project and work on it?

**Filippo Valsorda:** Yeah, I definitely shadowed a number of people through the different revisions of hellogopher. It looks like a simple project, it has 110 lines of makefile, but it went through so many changes, even before the Git history. I try to smooth forward and I'm pretty happy that I would help people pick it up and use it these days. A user at some point reported an issue and I just nudged them towards one section of the docs, and they were reporting immediately after being like, "Oh yes, got it! It worked!" That was awesome! That was like a "Yes, this works!" moment.

**Brian Ketelsen:** That's nice.

**Erik St. Martin:** Brian, Carlisia, have you guys had a chance to play with it yet?

**Carlisia Thompson:** No.

**Brian Ketelsen:** I've been watching the video on the GitHub repository; actually, I'm watching it again now. It's kind of cool! I'm surprised that you were able to do this so elegantly.

**Carlisia Thompson:** I didn't play with it and I actually didn't know about it until today, and I wish I had, because I helped organize the Gopher meetup in San Diego, and at every meeting there is somebody, at least one person, who doesn't have the GOPATH set up, and I would have been glad to just point them to all these instructions.

**Erik St. Martin:** I feel like every language has that hurdle to get set up when you're not familiar with the environment. I did Ruby for a long time and it never really occurred to me how complicated it is to set up a Ruby development environment...

**Brian Ketelsen:** Oh my gosh!

**Filippo Valsorda:** Yeah...

**Erik St. Martin:** ...until you try to help somebody.

**Brian Ketelsen:** I had to build a whole Linux LiveCD for that.

**Erik St. Martin:** Like, how many steps there are... You have to start explaining Bundler, and rbenv, or what was the other one...?

**Brian Ketelsen:** RVM?

**Erik St. Martin:** Yeah, RVM, and now they have like a Ruby Build one where it kind of builds tools on your path, too... But still, it gets confusing having to remember all these things and set them up. Now we have GOPATH and we have vendoring, and you're downloading projects with the vendor stuff, so yeah... It gets confusing and we forget about it, because we've been doing it for so long and it's just kind of part of what we do, until somebody who's not familiar with the environment is like, "Well, how do I set this thing up?"

**Carlisia Thompson:** But with 1.8 we're not gonna have this problem anymore, right? This is all gonna go away...?

**Brian Ketelsen:** This particular problem won't go away, no.

**Carlisia Thompson:** If you're setting that up the first time, unless you want in a specific place.

**Brian Ketelsen:** You're still gonna have a GOPATH, it will just be automatically set for you if you haven't set it. So we'll still have the confusion that new developers get when they still don't understand what a GOPATH is and why they need to use it.

**Filippo Valsorda:** Yeah, the default GOPATH solves one problem, and it's that now you can just write "go get" and that is enough as instructions to install something, probably, most of the times. But it's definitely not enough for anyone that just wants to Git clone and it's not enough for someone that wants to contribute, because they will still have opinions about where they want the project to be, etc.

**Brian Ketelsen:** Do you require any special project organization, or will this work with any project structure?

**Filippo Valsorda:** \[0:07:49.07\] The point of the hellogopher is also to avoid that Ruby-a-hundred-different-tools scenario is that it works drop-in on normal, go-gettable projects. It's not a different build tool, it's just something that wraps things and does horrible black magic with symlinks that you shouldn't look into, so that it just has a fake GOPATH that points to your repository, but it's still the normal Go structure that we are used to. It's also completely compatible with anything you already have, and it doesn't get on your colleagues toes if they have GOPATH set up, etc.

**Brian Ketelsen:** Nice.

**Erik St. Martin:** Now, this is agnostic too, what you use for your vendoring tool, right?

**Filippo Valsorda:** Correct, you can vendor with whatever you want. A few tools will freak out if you're not in the GOPATH, which is kind of legitimate, because vendoring doesn't even turn on outside GOPATH, but if you can get them to actually do their job and vendor stuff, any tool that you use for vendoring will do. I patched GVT so that it doesn't complain if there's a makefile... That's how I solved the GVT.

**Brian Ketelsen:** Nice.

**Erik St. Martin:** You actually work on all kinds of cool stuff... I've been following you for a long time because of all the security stuff you do. One of my favorite things you did was the whoami SSH server. I still love this...

**Brian Ketelsen:** It's creepy!

**Erik St. Martin:** Yeah, you can understand how SSH works and how keys are exchanged, but it doesn't really connect at how you could leverage that. Actually, for anybody who's not familiar with it, do an SSH to whoami.filippo.io. It's a lot of fun. Do you wanna tell everybody what it is and explain...?

**Filippo Valsorda:** I should tail the logs and say hi back to people but that would be even more creepy. \[laughter\] So yeah, whoami is this little demo that came out because my flatmate - who deserves a lot of the credit - had dumped all the public SSH keys of GitHub... You might not realize, but if you go to GitHub.com/yourusername.keys, it will show you your SSH keys. That's super handy for a number of reasons, like "I want to give this person access to my bugs", or something like that... But you can just scrape the whole -- not even scrape, just use the GitHub API to get the list of all users, then load all the keys and now you have a pretty good idea of a huge chunk of the SSH keys, to whom they belong.

At the same time I was studying the SSH protocol and trying to figure out a bit of the internals and such, and I realized that the default behavior is just to send preemptively the public keys you're willing to use, then the server responds, "Oh, yes, I like this one." If the server responds that, then you make a signature with that key to log in.

But if the server refuses them all, it will still see them all... And I built this little tool with the golang.org/x/sshpackage that would ask you to use your public keys, refuse them all, but block them, then ask you to do keyboard interactive logging, which is a weird thing that I could just make happen automatically - so log you in any case... Then, if I found you in the database, I would tell you your name and surname and GitHub account, because I cross-reference that to the database. Once you explain it, it's kind of trivial, but the surprise, the impact is pretty strong.

**Carlisia Thompson:** So I ran it on my machine and it didn't find my GitHub public key. I'm wondering if it's because I have multiple ones and you grabbed one that wasn't active...

**Erik St. Martin:** \[11:46\] No... The way the SSH protocol works is when you do public key authentication is it will pass all of your public keys, so anything that's in your .SSH directory, you'll see the IDE\_RSA.pubs and things like that... It will pass that, which contains your email address in it.

**Filippo Valsorda:** There's that, but I don't even use that. I use the matching of the actual public key.

**Erik St. Martin:** Oh, that's right, because you have a list of the actual keys.

**Filippo Valsorda:** Yeah.

**Carlisia Thompson:** So I'm trying to figure out why it didn't find mine.

**Erik St. Martin:** Is that key added to your GitHub account?

**Carlisia Thompson:** I'm using this computer to login to push to GitHub.

**Erik St. Martin:** Interesting.

**Filippo Valsorda:** Yeah, so what's happening is probably that the database is out of date. We should wait for Ben to get home and ask him... \[laughter\]

**Erik St. Martin:** Call him!

**Brian Ketelsen:** "Sorry, our DBA isn't available right now..."

**Erik St. Martin:** Phone a friend... \[laughter\]

**Filippo Valsorda:** "Yeah, I want to use the help from home..." \[laughter\]

**Brian Ketelsen:** Nice, I just added a function to my Bash functions directory, so now I can just type hellogopher in any directory and it will use wget to get the hellogopher makefile and add it to the current directory. I can't wait to go try that out.

**Filippo Valsorda:** Nice!

**Erik St. Martin:** Nice!

**Brian Ketelsen:** All about some aliases...

**Erik St. Martin:** Yeah, the cool thing about that "who's there" thing is it really makes you connect with how much information leakage there is. You don't really consider that when you try to SSH a server that you're leaking information that you could be giving away, say, email addresses, or those keys could be used to match you against other databases. So... Really interesting.

**Filippo Valsorda:** Yeah, I didn't even go full creeper on it, because from the GitHub account you can probably jump to the Keybase account if you have Keybase, or use the links you have in your bio, and from there jump to your Facebook or your Twitter and from there jump to your bio, maybe your home address, maybe your phone number... That would have been nice, like, "Hello, you're trying to SSH into a server. You're going to get a phone call in a minute."

**Erik St. Martin:** Yeah, you really could go full-on creeper because you could basically take the domain from their email address, and then start doing whois's on it and get all kinds of information.

What other things are you working on? I know you're doing some TLS stuff as well.

**Filippo Valsorda:** Yeah, so the approach that I've been working on for the last few months - quite a few months, wow - is TLS 1.3. The short version of the crypto like page is that TLS 1.3 is the new version of TLS; it's not about getting cryptographers job security, but instead about making the protocol actually more robust against future attacks, so it's a complete rework and it takes one less round trip to connect to things, so it's faster, and a bunch of other things that if you're interested in -- there's a talk at CCC 33c3 that you should watch.

But the point is we wanted to implement TLS 1.3 and participate in the standardization process with a real implementation deployed... So we wanted to take up TLS stack and add 1.3 ourselves. I essentially threatened to quit if they made me do it on OpenSSL -- no, I'm joking; nobody asked me. They just asked me what to use as a base, so I just jumped straight to crypto/tls, the standard library of Go, which is a wonderful stack written originally by Adam Langley, which all of the people in the industry say that it's where they go to to understand TLS. They read the spec, they fail to understand it, they go to crypto/tls, they read the Go code, and now they understand things. So that was the starting point... And we extended it to have TLS 1.3 support; we worked most on the server side, and it's now deployed globally on millions of CloudFlare sites. If you just sign up for a free account, it's on by default.

\[15:56\] The nice thing we don't talk that much about, but you can definitely gather is that if our TLS 1.3 stack is in Go and you can use Go to connect to CloudFlare site it means that sometimes when you connect to CloudFlare, actually in the HTTP pipeline there is a Go HTTP reverse proxy.

**Erik St. Martin:** So all of the CloudFlare reverse proxy stuff is written in Go?

**Filippo Valsorda:** No, CloudFlare is an NGINX shop mostly, but if you connect with TLS 1.3 enabled, NGINX will poke our Go stack and ask if it the Go stack wants to take over the connection. If it wants, it will just pass on the file descriptor and the rest of the connection will be passed through a Go reverse proxy.

**Brian Ketelsen:** Does the Go stack get to have like a bad day? Can it say, "I'm just not interested today?"

**Filippo Valsorda:** Yes, that was actually one of the safeguards... I was like, "You know, as a team of three people total on the crypto team, mostly me working on it, I'm not going to take over the main CloudFlare reverse proxy", but we have this nice fallback system where Go SSL can literally explode, and only open connections will suffer; everything else will just downgrade to TLS 1.2

**Brian Ketelsen:** Nice.

**Carlisia Thompson:** So I'm trying to follow... At the beginning of the conversation did you say that the crypto/tls package can be used in place of OpenSSL?

**Filippo Valsorda:** Yeah, you essentially never use OpenSSL when you host a Go server that has HTTPS and TLS... You use the native Go implementation of TLS; we built TLS 1.3 into it, and we are looking to upstream it.

**Carlisia Thompson:** I know that OpenSSL has a lot of bugs... Would you recommend people to use crypto/tls and use Go instead of using whatever they're using with OpenSSL? In your opinion, is it a lot better? Is it less buggy?

**Filippo Valsorda:** It has a better security track record, at this point we can say it. It's less battle-tested. I think we are currently the widest deployment of it, I suspect. It did pass an audit... We paid for an audit, it passed, but let's say that if you are just putting NGINX in front of your site just to have OpenSSL in front of your site, but your site is a Go service, you should probably stop doing that. There's no need.
Saying that I'm suggesting to actually go out of your way to remove OpenSSL by adding some Go in front - there are architectural decisions to be made there... Performance-wise it's probably slightly slower, or more CPU intensive, at least.

**Carlisia Thompson:** Gotcha.

**Erik St. Martin:** What does TLS 1.3 offer over 1.2? What was the motivation to write that now?

**Filippo Valsorda:** It's two-folded: there's better robustness - a lot of things that were creaky and we weren't really sure about were just removed... The policy was if it doesn't have a very good reason to be in the protocol, cough cough hearbeat cough cough, it's not gonna be in the protocol.

On the other hand, performance-wise it cuts an entire round trip. When you connect to a website, you first do the TCP handshake (that still happens) and then in TLS 1.2 you had to do two round trips - to the server and back, to the server and back - before you could start sending real data on the connection. Now, with TLS 1.3, you do only one. You send something, the server responds and we're ready to go with one less round trip. And round trips on mobile networks or in some countries, we are talking like seconds sometimes.

**Erik St. Martin:** \[19:57\] Yeah, I can see that, especially if it's a lot of connections opening and closing, rather than keep alive base connections... There's a lot of added latency there for that additional round trip.

**Filippo Valsorda:** Yeah, indeed.

**Erik St. Martin:** So is that mostly what you work on at CloudFlare, Crypto?

**Filippo Valsorda:** Yeah, these days I'm full-time on the Crypto team. It's a young team that is growing... It's pretty fun. It's a research team that gets to actually, say, deploy code to the world. It's fun, definitely.

**Erik St. Martin:** And for anybody who has not seen it, Filippo actually gave a talk at GopherCon last year about Crypto and the different ciphers and things like that. You closed that with some recommendations on which specifically to use and which not to use, if I recall.

**Filippo Valsorda:** You might be mixing me up with George Tankersley.

**Erik St. Martin:** Oh, that's right... That was George who did that.

**Filippo Valsorda:** But that's understandable, because - not at the time, but in the meantime, he became a colleague of mine and he's now the second member (plus the manager) of the CloudFlare Crypto team.

**Brian Ketelsen:** Well, I think that's because we were all up until 2 A.M. in one of your hotel rooms, listening to those talks.

**Filippo Valsorda:** Correct! \[laughter\]

**Erik St. Martin:** So you did the cgo talk... But yeah, we were all hanging out...

**Brian Ketelsen:** Filippo wrote the blog post.

**Erik St. Martin:** Yes.

**Filippo Valsorda:** By the way, I have to say I'm extremely grateful for that talk rehearsal.

**Brian Ketelsen:** \[laughs\] It's good!

**Filippo Valsorda:** ...both you, and you know who you are, everyone else.

**Erik St. Martin:** Yeah, it was me, Brian, Dave Cheney... Who else? Yeah, so... Living proof here - if you wanna rehearse early, we are always welcome to have people in our hotel rooms and rehearse.

**Brian Ketelsen:** And by early, that means 2 AM the night before you're gonna talk. \[laughter\] It's part of the burden of being a GopherCon organizer.

**Erik St. Martin:** So I'll make two YouTube recommendations then. There's the one I've just mistakenly confused - Goerge Tankersley did the talk about Crypto, but Filippo's was really good too, about cgo.

**Filippo Valsorda:** Yeah, the black magic, cgo and how you definitely shouldn't use it. But if you really, really have to, well, then this is how you can make it tolerable. That was the punchline.

**Erik St. Martin:** How to make cgo tolerable. \[laughter\]

**Carlisia Thompson:** But Filippo does have a talk on TLS 1.3... Where did you give that talk?

**Filippo Valsorda:** That would be 33c3, the Chaos Computing Club conference in Hamburg. You can find it if you search for 33c3 TLS 1.3. There we go through all the Crypto parts of this TLS 1.3 effort, and about the Go part - there's nothing published just yet. You can find blog posts on the Gopher Academy Advent list, which is a bunch of lessons learned from exposing a Go server to the internet, because that's effectively what we did with the Go reverse proxy.

The more Crypto part... I don't know... I mean, maybe GopherCon? This is probably bad taste, I'll shut up.

**Erik St. Martin:** I think somebody in the GoTime FM channel just said, "I think that everybody crashed your server." \[laughs\]

**Filippo Valsorda:** Oh boy, did you?! No, I think it's the HTTP part.

**Brian Ketelsen:** Oh, yeah... You can't SSH to an HTTP server.

**Erik St. Martin:** Oh, wait... There's Cory.

**Brian Ketelsen:** Cory LaNou, trying to SSH into an HTTP server. Two different protocols there, Turbo.

**Filippo Valsorda:** Hey, you never know... \[laughter\]

**Brian Ketelsen:** It can't be the tweets -- oh, it's the tweets problem! Oops, Adam!

**Erik St. Martin:** \[23:54\] That was Adam. \[laughter\] So I think now is probably a good time to take our first sponsored break. Our first sponsor today is StackImpact.

**Break:** \[24:07\] to \[24:57\]

**Erik St. Martin:** We are back, talking to Filippo about Crypto and TLS and all the great things he's doing at CloudFlare. What else are you working on these days? I know that you've had some interesting Caddy as well, and we've had Matt Holt on the show, too.

**Filippo Valsorda:** Yeah, I like what Matt is doing a lot, and I planned to use Caddy for a little experiment of mine. This is completely a side project... Something that I don't know if people realize or actually care about not being huge Crypto nerds is that the Go binaries are completely reproducible. If you take the same GOPATH, the same GOROOT, the same Go compiler and the same codebase, of course, and compile it on a OpenBSD machine and a completely different Linux machine and cross-compile them to the same target, the resulting binaries are identical, byte by byte, and they will be forever, whoever builds that.

Now, that's super nice because it means that you can take, for example, the Caddy build server, which is a nice server that does builds for you and gets you this single binary that you can deploy, and you can prove that Matt is not an evil spy with a plan to conquer the world - sorry, Matt! - you can reproduce the binary and prove that it matches what the build server built, so you can prove there is no backdoor. So what I plan to do is to do a first experiment reproducing the builds of Caddy, but then build small tools to allow anyone to reproduce builds and publish signatures maybe with Keybase to show that they match... Maybe even publish them to our key transparency log, which is like CT, but now I'm crypto-nerding too hard.

**Brian Ketelsen:** Yeah, you lost me there.. What's CT?

**Filippo Valsorda:** Sorry, that was too much of a tangent... CT is a way to get CAs, the ones that sign TLS certificates more accountable by forcing them to disclose all the certificates they sign to a log where - long story short - they can't be hidden or removed. You could use the same ideas to make a build server publish all the things it builds to a log where they can't be removed, so if they build something with a backdoor in it, it will show - they can't hide it and only provide it to some people - and then you can prove it has a backdoor because it doesn't reproduce, because you can't build it from another machine.

That's one step further, it's called binary transparency; it doesn't have that much to do with Go, but Go is a very good language to start this, because getting reproducible builds is incredibly hard with anything else.
The Debian project has been primed very hard to get the whole Deb repositories reproducible, and they're jumping through hoops that you wouldn't even imagine. With Go instead, you just set the same GOPATH and you're done.

**Erik St. Martin:** \[28:03\] Yeah, you would just have to make sure you have the same Go toolchain, right? The right Go version, because theoretically it wouldn't produce the same binary if you had a different Go version.

**Filippo Valsorda:** Oh, yeah.

**Erik St. Martin:** And I guess you would have to track the binary for each platform, too... Because the resulting binary would change for the Windows build versus the Linux build versus the Arm build, or...

**Filippo Valsorda:** Yeah, you have the whole metrics, architectures and operating systems, but those are like 20, or something.

**Brian Ketelsen:** It gets bigger every release, that's the best part.

**Filippo Valsorda:** Yup.

**Brian Ketelsen:** We're supporting 32-bit Spark on a Raspberry Pi now.

**Erik St. Martin:** Is there really a 32-bit Spark?

**Brian Ketelsen:** Not on the Raspberry Pi, no... No, I made that up, but it was apparently nowhere near as funny as it should have been.

**Erik St. Martin:** You're confusing me here.

**Brian Ketelsen:** I can run Go on my DEC Alpha, how's that?

**Erik St. Martin:** \[laughs\] Break out the Commodore...

**Brian Ketelsen:** I remember back in the days when a DEC Alpha was a big deal.

**Filippo Valsorda:** I mean, not even joking, you can run Go on mainframes now.

**Erik St. Martin:** Yeah... It's insane watching Go take off... It blows my mind, in just a couple of years, everywhere that we see Go. So you mentioned something in our show document about latency profiling, and Camlistore too.

**Filippo Valsorda:** Yeah, let's see... Let's go for spoilers first - latency profiling is what I plan to talk about at GopherCon India; essentially, the story there is that we are used to all the profiling tools, and they're super nice, very easy to use, and you can figure out what functions take the most CPU in your program. That's nice, right? But then, at the end of the day, you realize that that's not really what we are optimizing for most of the times. It's very hard to build an application that takes a hundred percent of CPU, so what is it doing the rest of the time? Well, it's blocking on something, it's waiting on something, and what metric does that worsen? Of course, latency... Which a lot of the times is the one we care the most about.

It's rare that APIs are truthful about how many things concurrently they can process; it's absolutely possible most of the times - this is debatable - but surely there's a huge interest in reducing latency, making APIs return as quickly as possible. So Go does provide the tools to inspect what functions are slow are just taking a long time, but they're not as well surfaced and publicized as their CPU counterparts. They involve mostly the Go tracer, which can then generate profiles for blocking, for I/O, for network and for scheduling process and different things that will actually make you suffer. Imagine having some function somewhere that downloads a tarball from the internet; that will not show up in the CPU profile maybe, but it will take a long time, and if your API is blocking on that, it will take forever, right?

**Erik St. Martin:** That's actually really interesting, because that debate comes up a lot, especially when talking about garbage collection, that difference between latency and throughput. Both of them kind of represent speed, right? And deciding which one you wanna optimize for is difficult.

**Filippo Valsorda:** That's a very good point. In Go, we almost explicitly stated that we optimize for latency, at least in the garbage collector, by making it faster and faster in terms of pauses, but slightly slower in terms of CPU and throughput. So it's interesting that the profiling tools haven't caught up to the same priorities.

**Erik St. Martin:** \[31:59\] Yeah, that's true. So you're talking about this at GopherCon India?

**Filippo Valsorda:** Yeah, that's the plan.

**Erik St. Martin:** Which is coming up in February... I'm trying to remember the exact dates. Does anybody remember them off-hand?

**Brian Ketelsen:** I don't.

**Filippo Valsorda:** February 21st? I mean, don't book tickets based on my recollection, but...

**Erik St. Martin:** Check the website first before buying plane tickets and hotel... You might be early or late.

**Filippo Valsorda:** 24th. I was wrong.

**Carlisia Thompson:** Because you're Italian, I'm going to ask you... Did you go to the GopherCon in Italy?

**Filippo Valsorda:** Yeah, GoLab.

**Carlisia Thompson:** GoLab, I'm sorry.

**Filippo Valsorda:** Yup. It was a very nice crowd, and my keynote was about hellogopher. It's actually where I introduced hellogopher, the first time I showed it outside of CloudFlare.

**Carlisia Thompson:** Did they record the talks?

**Filippo Valsorda:** I'm not positive, but there is a recording of my screen and voice, which I usually take during talks. I've published it on my Twitter, I'll find you a link really quick and post it on Slack.

**Carlisia Thompson:** Awesome.

**Filippo Valsorda:** There you go.

**Carlisia Thompson:** Thank you.

**Erik St. Martin:** So Bill Kennedy just corrected us from the GoTime Slack... He said 22nd to 25th February. Now you can book tickets. \[laughter\] So you guys wanna talk about projects and news and interesting things that we've seen this week?

**Brian Ketelsen:** There've been a lot.

**Erik St. Martin:** Yeah... The most fun one I think is the Gopherize one.

**Brian Ketelsen:** Absolutely.

**Erik St. Martin:** And Brian started it.

**Brian Ketelsen:** Yeah, it's all my fault... Sorry.

**Carlisia Thompson:** And apparently that's only the beginning. Every day...

**Brian Ketelsen:** Yeah, every day new things are getting added, that's right.

**Erik St. Martin:** Yeah, actually it's kicking butt.

**Brian Ketelsen:** So we should give the story behind that... If you go to Gopherize.me, you can create your own Gopher avatar out of lots of different choices, and it's built for you live on the screen. It was built by Mat Ryer, with images supplied by Ashley McNamara, and the whole thing started because I asked Ashley for a custom gopher avatar and then changed my avatar on Twitter; then she made one for Erik and then she made one for Bill, and the next thing you know, the whole internet's asking for one, so they decided to just go make a site and give Ashley a break, so she didn't have to make custom avatars for everybody.

**Carlisia Thompson:** I have a request for Ashley and Mat... We need to have a T-shirt with the GoTime logo.

**Brian Ketelsen:** Oh, we need a GoTime logo.

**Erik St. Martin:** Yeah, they actually have a page there for companies to reach out if they want a corporate logo on a shirt, or something. But yeah, we do need a GoTime one. Why did I not think of that?

**Brian Ketelsen:** I don't know.

**Carlisia Thompson:** I was selecting the shirts, and I was like "The GoTime is what I really want."

**Erik St. Martin:** Correct me if I'm wrong though - I think the codebase is written in Go, and I wanna say it's based off of one of the Google holiday images, or something...?

**Brian Ketelsen:** Yeah, the turkey.

**Erik St. Martin:** Yeah.

**Brian Ketelsen:** Remember the Google turkey doodle?

**Erik St. Martin:** That's right... And that was all written in Go, and then this was kind of created based off of that. Yeah, a lot of fun... And I love hitting the randomize thing. I also love the key components based off of members of the community, like the Dave Cheney beard.

**Brian Ketelsen:** The Dave Cheney beard... The Brian Ketelsen hair...

**Erik St. Martin:** And the Bill Kennedy hat... \[laughter\]

**Brian Ketelsen:** Great stuff.

**Erik St. Martin:** It's just too much fun... I'm really looking forward to some of this stuff, because this is only 24 hours maybe it's gone live...

**Brian Ketelsen:** If that...

**Erik St. Martin:** Yeah, and more and more stuff keeps getting added... Just too much fun. Another cool project that I saw -- I guess it's chromedp. It's basically able to steer browsers using the Chrome debugging protocol, which is written in Go... And for anybody who suffered through using Selenium and things like that, this looks really cool.

**Filippo Valsorda:** \[36:00\] Oh god, oh god, oh god! The Camlistore thing -- it's like I'm a pack rat, I archive everything, and I'm trying to archive everything in Camlistore, which is this content-addressed storage that we don't really have time to talk about... The point is, something I wanted was to load pages into a real headless browser, then take snapshots of them and \[unintelligible 00:36:25.29\]

**Brian Ketelsen:** Wow...

**Erik St. Martin:** Problem solved! \[laughs\]

**Filippo Valsorda:** At this point I'll just drop off the call and start hacking with this, so sorry... Bye.

**Brian Ketelsen:** I gotta be hacking now; sorry, gotta go.

**Erik St. Martin:** Yeah, so if you are on the road and not able to pull up this project, basically you can steer the browser, you can tell it to click inputs with basically jQuery selectors, you can tell it to sleep, you can take screenshots using it... This is all written in Go, which is just a ton of fun. Yeah, I mean, integration tests actually steering the browser of your app. Huge win. Anybody else have anything fun?

**Brian Ketelsen:** Oh, where's my list? I have a million things.

**Filippo Valsorda:** I wanted to give a shoutout to the pre-alpha dep tool. The team that is working on giving a blessed answer to "How do you fill your vendor folder?" has published a first tool that uses this library called GPS, which is meant to become the shared backend for all the vendoring tools, if my understanding is correct. I have no affiliation into that, but having built GVT I know how much pain is involved... So huge shoutout.

**Erik St. Martin:** Yeah, we're gonna try to get Sam Boyer on the show. We've actually been communicating right now, while we're on this call. Hopefully in the next couple episodes we will actually get him on and talk about this tool and some of the stuff going on behind the scenes.

**Filippo Valsorda:** I'm really looking forward to that... Also because -- I don't know how related it is, but part of the idea of hellogopher is to just show a user flow that users like or need, and eventually get that user flow into the standard tooling. I've seen Russ Cox's 2017 resolutions, and one of them was making sure that work outside GOPATH worked as well as inside GOPATH. It had some remark like "Make sure that users can git clone, cd and just go build their project. That literally matched the hellogopher tagline, so I was super happy about that.

**Brian Ketelsen:** It makes this come full circle, because when I started Go, back in 'Nam, we had to use makefiles then, too. \[laughter\]

**Erik St. Martin:** Yeah, I remember the makefiles, so it's kind of interesting circling back. \[laughs\] I mean, make is super powerful too, so I can't really hate using makefile.

**Brian Ketelsen:** I put makefiles in everything. For me, it's more of not being a workflow, but being a recipe for what you expect people to do with your application. My makefile may just say "go build" under make build, but it more often has very explicit directions in each recipe on what needs to be done, so I think it's its own form of documentation that's more canonical for each project.

**Erik St. Martin:** Yeah, and I mean... I put handy development and deployment-type scripts in my makefile basically, so that I don't have to have a directory of utility scripts for bootstrapping the environment, building the container or things like that. You don't have to NodeCD into this directory or run this doc command, or something... You just 'make container', or whatever...

**Filippo Valsorda:** And they're extremely standard, so you're making any developer feel at home, because they've seen makefiles before.

**Erik St. Martin:** Yeah, or something very close to it.

**Brian Ketelsen:** \[40:02\] I don't know if "feeling at home" is the right way to say it, because I never feel at home in makefile. I've seen some makefile ninjas, but I am not one of them.

**Erik St. Martin:** Yeah, it amazes me some of the stuff people know about make. It is ridiculously powerful. My knowledge of make is about equivalent to my knowledge of Bash... It's just enough to make a fork. \[laughter\]

**Filippo Valsorda:** Look, I work with John Graham-Cumming. He wrote the book on GNU make.

**Brian Ketelsen:** He wrote the book...

**Filippo Valsorda:** Hellogopher required him at some point...

**Brian Ketelsen:** That's awesome.

**Filippo Valsorda:** Yeah, at some point it was like, "No, no, this is enough..." I just was done. \[laughter\]

**Brian Ketelsen:** Yeah, just bring your book over here and tell me what I'm doing wrong.

**Filippo Valsorda:** No, he actually pulled a page out of his book! He actually literally did that! \[laughs\]

**Brian Ketelsen:** Oh, that's awesome.

**Erik St. Martin:** I've gotten beaten up in some code reviews before, but has anybody ever - aside from you - ever gotten beaten up about a makefile? Did somebody destroy your makefile? Like, "No, don't do that; you should have done this." Usually the makefile in the review is just like, "If it works, leave it."

**Brian Ketelsen:** I'm not brave enough to submit a makefile to anybody who would understand how to review it, because it would be ugly. My makefile always consists of copy from someone that works and paste into my project. Copy/pasta file.

**Erik St. Martin:** Yeah... I feel like it's just like Bash every time I gotta do something. I gotta look up, like "How do you do a for loop in Bash again?" \[laughs\] I think it is about time for our second sponsored break, and then we'll get into some more projects and news. Our second sponsor today is actually Ardan Labs, with their Ultimate Go Training series.

**Break:** \[41:51\] to \[42:45\]

**Erik St. Martin:** Alright, and we are back talking to Filippo. For anybody who is listening live, we were just kind of joking about makefiles and the use of PHONY and how it makes Brian feel like a phony when he reads it...

**Brian Ketelsen:** No, it means my makefile is declaring itself as phony; my makefiles have impostor syndrome.

**Erik St. Martin:** Does anybody have Twitter open right now? I literally see a non-stop stream of people and their Gopher versions of themselves. \[laughter\]

**Brian Ketelsen:** Everybody's getting gopherized! That's awesome.

**Erik St. Martin:** It's priceless.

**Filippo Valsorda:** Imagine being someone that doesn't do Go, and everyone around you on Slack and Twitter and everything else starts turning into these weird avatars, and you feel like you're outside of the joke or the conspiracy...

**Erik St. Martin:** That's actually happened to me a couple of times for political reasons, where I'll just get on one day and everybody is now a cartoon character or they've changed their avatar to a flag and I haven't yet read the news to see why people are doing that... Like, "Why is everybody a cartoon character today? What did I miss?"

**Brian Ketelsen:** \[43:57\] You feel so left out.

**Filippo Valsorda:** There's an entire Subreddit for that, it's called Out Of The Loop.

**Brian Ketelsen:** Oh, nice.

**Erik St. Martin:** Is there really?

**Filippo Valsorda:** Yeah, you go there and there are people that are like, "Yes, so these are the things that happened that could make you feel out of the loop", or you can just ask and people will be like, "Oh, yeah... That's a meme from 2013 that started in this thread." \[laughs\]

**Brian Ketelsen:** These are people that don't have 14-year-olds living in their house.

**Filippo Valsorda:** Correct.

**Brian Ketelsen:** If you had a 14-year-old living in your house, they know EVERYTHING.

**Erik St. Martin:** I have an 8-year-old in my house that thinks I'm dumb. He knows everything. I think it's just kids... They try to shock you, and you're like, "Yup. Mm-hm. No, I didn't know that." \[laughs\]

Okay, any other interesting projects?

**Brian Ketelsen:** Oh, I found a really cool plugin for Kubernetes called Mate. It's at GitHub.com/zalando-incubator/mate, and it does DNS and load balancing for Amazon Cloud Services and GCS, and the thing that's really cool about it is that it will manage your Route53 DNS for you too, and it will also create named endpoints in your load balancer. If you've got a Kubernetes service called 'www' and you expose it using mate, it will create www.yourdomain.com in the load balancer, and then it will also fix DNS to point to those load balancers. So it's taking Kubernetes load balancing and endpoints to their logical extreme when you're on AWS and GCP. It's written in Go and it's really cool; I can't wait to try it out.

**Erik St. Martin:** It looks really cool. So the load balancers assumed are to be set up with a public IP address and this is just routing new DNS names of that?

**Brian Ketelsen:** No, it creates the load balancer. It does it all.

**Erik St. Martin:** Okay, so it creates a load balancer with a public IP and then load balances to the private IPs of Kubernetes.

**Brian Ketelsen:** You got it. It's awesome sauce.

**Erik St. Martin:** Yeah. I mean, it's a common question people have, how do they get this thing exposed publicly? So yeah, that's pretty sweet.

**Brian Ketelsen:** Yeah, very nice.

**Erik St. Martin:** Or in Kelsey Hightower rating, it's super dope.

**Brian Ketelsen:** It's super dope.

**Erik St. Martin:** Hopefully, Kelsey doesn't sue me. He's a friend, but you never know...

**Brian Ketelsen:** I'm gonna tweet that.

**Erik St. Martin:** Carlisia, did you run across anything you wanted to talk about?

**Carlisia Thompson:** I did. Sourcegraph is now in general availability with the Go language. For people who don't know, Sourcegraph is like a code navigation tool, but you use it on your browser. The cool thing over other normal code navigation tools is that it will take you across repos, and if you go to a function, for example, you can see where it is used in the entire GitHub universe, and I think even in other source control systems, maybe GitLab... I'm not sure about that, but GitHub - definitely. And that is super cool.

For example, when I run into something new and I want to see how people are using it, I just use Sourcegraph and I'm able to see it. It also gives you git blame and it gives you the last time the file was updated, and a bunch of other awesome things.

**Filippo Valsorda:** Yeah, I love their interface. I used it all the time also studying the TLS Crypto library; it works on the standard library too, and you can just click around and click to jump to definition, which is something that I always wanted. There used to be a web interface to what is now called Guru, which was called Pythia maybe or something like that. Anyway... Sourcegraph does that, and it's wonderful, just clicking around to...

**Carlisia Thompson:** \[48:09\] Yeah, so it will work with anything that's open source, and if you want to use it on your private repos, they have a pricing structure there. You probably need to talk to your security team to find out if you can do it.

**Erik St. Martin:** Yeah, I would assume it runs on-prem or something like that for that... I'm not really sure. They have a browser extension that's cool too, so if you're just kind of like browsing around GitHub, looking, you can just kind of click and follow along, and jump to definition...

One of the things I love is being able to see examples of where this is used in other repos. That's always really useful to me, especially if the project itself doesn't have a lot of documentation on the usage of the library, you can kind of follow around and see projects that are using it.

**Carlisia Thompson:** Yeah.

**Brian Ketelsen:** It's like Stack Overflow, without the Stack.

**Carlisia Thompson:** It's hard to explain how good and useful it is... You have to use it, it's one of those things.

**Erik St. Martin:** And I know the next one you are particularly excited about, Brian.

**Brian Ketelsen:** Which one's that? Play With Docker?

**Erik St. Martin:** Yeah, Play With Docker.

**Brian Ketelsen:** Yeah, this one's really cool. I've found out about this just the other day, and I'm gonna kill poor Marcos' name, I'm sorry... Marcos Lilljedahl? I'm not sure, but on GitHub it's GitHub.com/franela and there's a project called Play With Docker. It embeds a Docker-in-Docker instance and then allows you to connect to it from a web browser, and inside the web browser you have up to five Docker terminals embedded in term.js - or xterm-whatever - terminal in your web browser, so you can have embedded terminals in your web browser that are backed by a Docker-in-Docker system. Which means if you've got five terminals, they are all in the same network, and you can do cool things like create Kubernetes clusters in your web browser.

**Filippo Valsorda:** Wow, that's great!

**Brian Ketelsen:** And I get excited by that kind of stuff. And of course, it's open source and all written in Go, and I've already forked it.

**Carlisia Thompson:** We know what that means...

**Brian Ketelsen:** Yeah... \[laughs\]

**Erik St. Martin:** Something new and fun is gonna come out of this...

**Carlisia Thompson:** You're going to be very prolific in the next few days.

**Erik St. Martin:** Alright... Did anybody come across anything else, any new news? Or do we wanna jump into \#FreeSoftwareFriday?

**Brian Ketelsen:** It's time for the hashtag.

**Erik St. Martin:** Alright. You actually added something, Filippo... We tend to fill everybody in - we typically every week do a \#FreeSoftwareFriday where we shoutout to projects and/or maintainers of open source projects that are making our lives easier; they don't necessarily have to be Go, they just have to be open source... So who wants to start this week off?

**Brian Ketelsen:** I'll give it a start, because I had a busy weekend this weekend putting out the GopherCon website, and these are two projects that I've probably talked about before, but I use them together and it turned out to be a peanut butter and chocolate sort of situation where everything just tasted better. So I used the new Ponzu CMS - and I think we talked a little bit about that on the interesting projects last week; I didn't waste any time, I just put it in production at GopherCon.com, and it's backed by a Buffalo website. The combination of those two together is absolutely amazing...

Ashley McNamara did the design and the images, I built the code side of it and we put up the GopherCon site -- well, it was kind of up before, but not really up. We made it a real site in just a weekend, and it was really awesome. I strongly encourage you to take a look at that combination. To make it just a little bit easier for myself, I built a code generator called Ponzi, so under my GitHub repository bketelson/ponzi and bketelson/ponzigen....

**Erik St. Martin:** Because Brian can't build anything without a generator...

**Brian Ketelsen:** \[52:07\] Yeah, if you're not generating code, you're doing it wrong. \[laughter\]

**Erik St. Martin:** So while we're mentioning the GopherCon site, this episode will probably be released just before the CFP closes, so if you're listening to this now and you wanna see your face on that website, it's probably gonna be your last moment to race along with the 200 other people who are going to submit in the last 48 hours...

**Filippo Valsorda:** The organizers are great... You can just ask them to rehearse in their room the night before.

**Brian Ketelsen:** And it works.

**Filippo Valsorda:** Yup!

**Erik St. Martin:** Alright. Carlisia, do you have anything?

**Carlisia Thompson:** I don't have anything today.

**Erik St. Martin:** Alright. How about you, Filippo?

**Filippo Valsorda:** Yeah, my shoutout is for Dominik Honnef, who makes Static Check. Static Check is like a wider version of Go-vet, that does static analysis and looks for things that are clearly wrong, aiming for low or zero false positives. I ran it across all the codebases I could find at CloudFlare and I think I found one false positive, two real bugs and a bunch of things that happen to not be bugs only because we're lucky. It's a great tool, and every time I open an issue suggesting it would be nice if Static Check did this" -- you know, the usual entitled open source community member... He actually goes out of his way and implements stuff in like 48 hours, in my experience. So yeah, it's great.

**Erik St. Martin:** It's a fantastic tool to run on your codebase before committing, for sure, and it only continues to evolve. And I guess that's largely thanks to you antagonizing him. \[laughter\]

**Brian Ketelsen:** I did notice in the Golang Dev -- no, Golang Nuts mailing list... One of the Golang mailing lists, that they're changing the import paths of those, so if you rely on those, double check your repository locations, because I know that he just renamed them.

**Erik St. Martin:** Nice. A little plug here... Florin in the GoTime FM channel just listed his Patreon account, if you want to support Dominik's work.

**Brian Ketelsen:** Oh, that's awesome. Please do.

**Filippo Valsorda:** Yes, definitely... Think of how many cycles it will save your developers, and just consider the dollar amount of that.

**Brian Ketelsen:** That's actually what I did for the Patreon for Vim Go. I took the amount of money I would pay on a commercial IDE and I just kind of averages out two or three hundred dollars a year license for a commercial IDE, and divided it by 12, and that's how much I give Vim Go every month, because it makes me happy.

**Erik St. Martin:** That's actually a good way to look at it. Alright, so my project this week is by somebody called Matt Hamilton and it's called ZIM. I've been a Zsh user for a long time and I've kind of gone through all my Zsh and Prezto and all that... It's hard, because you love these things and then your shell kind of gets more and more bloated, but ZIM actually is really cool and has a bunch of different modules for stuff, and super fast. You get a lot of the same features with like the Git branch info and all that stuff in your PS1 without the lag some of the other ones have recently started gaining. Super cool project.

**Brian Ketelsen:** I love having a sparkly PS1, but the last time I used all my Zsh it blew up something; I can't remember what it blew up, but it was bad.

**Erik St. Martin:** It was enough for you to switch straight to Bash.

**Brian Ketelsen:** We've got breaking news, live from the GoTime FM channel. Go 1.7.5 and Go 1.8rc3 are out.

**Filippo Valsorda:** Nice!

**Brian Ketelsen:** Fire up your downloaders.

**Filippo Valsorda:** Remember that there is the wonderful goget way to download the rc's.

**Brian Ketelsen:** \[55:59\] I absolutely love that.

**Erik St. Martin:** And with 1.8 being right at the five-yard line, 1.9 discussions have started, too. I think it was a Golang Nuts thread that Brad Fitzpatrick started, about discussions for things that are gonna take place in 1.9. We will link to that in the show notes if you wanna be involved in those conversations, too.

**Brian Ketelsen:** I think more interesting than Go 1.9 is the Go 2.0 discussions.

**Erik St. Martin:** Those will be interesting.

**Brian Ketelsen:** They will be very interesting. Stay tuned. I think we're getting generics and ponies. \[laughter\]

**Erik St. Martin:** There'll be some unicorns.

**Brian Ketelsen:** Yup, and a JVM backend. \[laughter\] I remember there was a Go JVM backend in the beginning.

**Erik St. Martin:** I don't even remember that, was there?

**Brian Ketelsen:** There was. There was a Go cross-compiler or a Go JVM backend, but it was really early. I don't remember it working very well at all, and they just kind of fizzled.

**Filippo Valsorda:** I wonder if you can still do that through either gccgo or Clang backends...

**Brian Ketelsen:** Well, you can do lots of stuff with llvm and Clang, so... I know that's how GopherJS is getting a lot of things done.

**Erik St. Martin:** Speaking of gccgo, does anybody know how widely used that is?

**Brian Ketelsen:** No.

**Erik St. Martin:** Me neither. It seems to be still maintained, but I haven't really heard much about it or any particular projects using it, so... It would be interesting.

**Brian Ketelsen:** Maybe Ian knows. Ian Lance Taylor, if you're out there - we need to know who's using gccgo, and where and why. So this is an open invitation to come on the show and talk to us about gccgo.

**Erik St. Martin:** That's true, we should get him on the show and talk about it.

**Brian Ketelsen:** That reminds me of an embarrassing moment at the first GopherCon - this is totally an aside... Somebody walked up to me and said they were using gccgo and they had this big problem and they didn't know what to do or how to fix it... So I just walked over to Ian and I said, "Hey, Ian, somebody's got a gccgo problem, can you help them out?" He's like, "Sure." And I said, "It's that guy right there." That was kind of fun. That's what I do, I put people together.

**Filippo Valsorda:** At the last GopherCon I had a bit of an embarrassing moment when I discovered after the fact that one of the questions that I kind of quickly answered/brushed off at my cgo talk was from Ian... \[laughs\] I felt pretty bad over that...

**Erik St. Martin:** Who was it -- we were at the speakers' dinner and they were sitting next to Dmitri?

**Brian Ketelsen:** Oh, shush... We don't need to bring this up. No, no, no, no, no. That was me.

**Erik St. Martin:** No, no, no, it was one of the other speakers. He was talking about the race detector, and Dmitri was just like, "Thank you!" \[laughter\] Alright, did anybody have any other projects or news they wanna talk about before we wrap this thing up?

**Brian Ketelsen:** We hit it all.

**Erik St. Martin:** Alright.

**Carlisia Thompson:** Good work!

**Erik St. Martin:** Well, huge thank you to everybody on the show, thanks to all the listeners listening right now. Huge shoutout to our sponsors, StackImpact and Ardan Labs. If you haven't checked them out, please do. We will put links in the show notes. Definitely share this show with friends and colleagues. An easy way to subscribe is to go to GoTime.FM. We will have a weekly email coming out shortly, so go ahead and get signed up to that. We are @GoTimeFM on Twitter, we have a GoTimeFM channel in the Gophers Slack. If you wanna be on the show or have suggestions for topics or guests for the show, GitHub.com/GoTimeFM/ping. With that, goodbye everybody! We'll see you next week. Mat Ryer will be joining us for next week's show.

**Brian Ketelsen:** You know, he probably rushed to finish the gopherize-me thing just before he was gonna be on the show. \[laughter\]

**Carlisia Thompson:** Good for us!

**Brian Ketelsen:** Now I understand everything.

**Filippo Valsorda:** Well, everyone, thank you very much for having me. Last fun fact: in Florence, after GoLab, I was just going around, looking for a place to have lunch... We literally picked a random one and don't I meet Mat Ryer while I'm getting out, sitting at a table just across the room.

**Carlisia Thompson:** Gophers attract Gophers.

**Brian Ketelsen:** Wow!

**Filippo Valsorda:** Yup. Alright, thank you everyone.

**Brian Ketelsen:** Thank you.

**Carlisia Thompson:** Thank you, Filippo. Bye!

**Filippo Valsorda:** Bye!
