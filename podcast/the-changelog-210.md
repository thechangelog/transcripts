**Adam Stacoviak:** Welcome back, everyone. This is the Changelog and I am your host, Adam Stacoviak. This is episode 210, and today Jerod and I talk to Alan Shreve, the creator of the beloved ngrok. Everyone I know uses ngrok. We talked about what it is, why it exists, why he wrote it in Go, and ultimately why 1.0 is open source, but 2.0 is not.

Our sponsors today are Rollbar and Toptal.

**Break:** \[00:39\]

**Adam Stacoviak:** Alright, we're here today talking to Alan Shreve. Alan has made this thing called ngrok and a bunch of other stuff. Jerod, we use ngrok every week when we ship Changelog Weekly.

**Jerod Santo:** That's right.

**Adam Stacoviak:** Where did this topic come from? Obviously we use it, but where else?

**Jerod Santo:** That's basically where it came from. I've been a fan on ngrok for a long time. There are lots of tools that do similar types of things; this one seemed to be a cut above to certain degrees and in certain ways, and I just really appreciated it. Also, notice that it's gone through multiple versions; it used to be open source and isn't open source anymore, so I thought, "Hm, this could be an interesting story here."

**Adam Stacoviak:** Yeah. Well, we almost didn't have it on because of that. We considered it.

**Jerod Santo:** Yeah, well we had a little debate and asked our members what they thought about it in terms of is that an interesting thing or not. The consensus was...

**Adam Stacoviak:** Let's find out!

**Jerod Santo:** Let's get Alan and talk to him about it, find out what happened and see if it's interesting. So Alan, thanks so much for joining us.

**Alan Shreve:** Thank you so much for having, and thanks for the really nice intro. It's always a pleasure to hear about people who enjoy the software that I make.

**Adam Stacoviak:** We'll obviously dive deep into ngrok. Like I said, fire up ngrok at least once a week - I do, personally - to ship our weekly email. But one thing we like to do is figure out where our guests come from. Obviously you've got a lot of interesting things happening around ngrok, you are a fan of Go - we talked about our Go podcast called Go Time - but take us back further. Help us get to know who you are and what got you into software development.

**Alan Shreve:** It was kind of serendipitous how I got into software actually. It started when I was going to high-school, actually. Our high-school had a requirement that you had to take one computer literacy class, because computers were the up and coming thing at the time, and we wanted to prepare our students for the future... \[04:08\] In addition to typing, of course. So you had your choice of a couple classes, and one of them was a class that was called something like, "How to use Microsoft Office." I actually picked that class because I figured it would be easy, because I knew how to use Microsoft Office, so I figured I would have to do no work to actually do that class.

My best friend at the time, when I told him that after I came out of the first class, he was like, "What are you doing? You are wasting your time in that class. Come take programming with me." I listened to him and joined the programming class, and instantly fell in love with it. So I really owe a lot of it to him.

**Adam Stacoviak:** It just seems like an unusual way to get into it. Obviously we all listen to our friends, but Microsoft Office? I mean, really?

**Alan Shreve:** \[laughs\] Yeah... I mean, that wasn't the title of the class, "How to use Microsoft Office." It was like, "Computer Business Applications" or something, but I quickly realized what it was the first class that I went into it, and they were like, "Create a PowerPoint presentation with three slides", something simple like that.

**Adam Stacoviak:** I gotcha. I can recall feeling cool putting Microsoft Office on my resume at one point in my life.

**Jerod Santo:** Really?

**Adam Stacoviak:** Oh yeah, of course. Like, way back in the day when I had no understanding? Of course...

**Alan Shreve:** Yeah, 'Proficient with Microsoft Office.'

**Adam Stacoviak:** Totally. I mean, I could type in that thing hardcore, good stuff.

**Jerod Santo:** I had a little bit of a similar path in college. I went into MIS (Management Information Systems), which is basically watered down computer science with some business stuff flurred in there. So I very much had the intro to Microsoft Office type of a course, and it was just the most boring, worst, terriblest thing in history. I'm curious to find out how you started from there and then actually continued towards writing software, and not just switched careers at that point.

**Alan Shreve:** Yeah, I'm not sure if I explained it correctly, but basically I was in that class and my friend told me, "You're wasting your time in that class", so I transferred out of it and into a dedicated programming class instead, to satisfy the computer literacy requirement that we had in high-school. So it was in that programming class that I actually started to learn how to program, on Turbo Pascal to start with, actually.

**Adam Stacoviak:** Wow.

**Alan Shreve:** Yeah...

**Jerod Santo:** Turbo Pascal...

**Adam Stacoviak:** What's the difference between that and Pascal?

**Jerod Santo:** It's faster.

**Alan Shreve:** \[laughs\] It's turbo mode.

**Jerod Santo:** Yeah.

**Alan Shreve:** Have you guys ever used Turbo Pascal?

**Adam Stacoviak:** No.

**Jerod Santo:** No, Visual Basic I think was my intro, and then straight into Perl and open source from there. And also C and C++.

**Alan Shreve:** Turbo Pascal is an interesting environment. It's really, really well suited to beginners because it basically... It had this really distinctive user interface too, just like this blue screen with yellow text for the code - by default, at least; I never bothered to learn how to change it. It felt very '80s or '90... Before my time it felt, I guess. \[08:00\] So it was just this whole environment, it took up a full screen mode by default; it wasn't like in a window, or anything. You were just kind of immersed in the code, and then when you ran the code there were two options. One was "Run the code", and it would print like a console window, like what was coming out of standard out, and the other mode that it had was like a debug mode where it basically just fired immediately into a step through debugger with this big yellow line, or I don't remember what color it was, that highlighted the line of code that was executing, and it would just step through the program for you. As a beginner, having to never learn any... Like, I didn't have to learn about source control, or have to learn how to organize a project, or have to learn what a compiler was... It was just a full environment where there was a Run button and a Debug button. That was really great to start out with.

**Jerod Santo:** Take us from there to Go and ngrok.

**Alan Shreve:** Oh man, there's a lot of stuff in between that. \[laughter\]

**Jerod Santo:** Well hit the highlights.

**Alan Shreve:** I finished doing the programming course in high school. After I learned Pascal I learned C, and then working the most basic knowledge of C++. Not how to use it well, of course, but how to define a class and stuff like that. I kind of actually lost track of programming for a couple years before I got an internship working at a local software firm. My first job actually was interning for this local software firm that no kidding made Fortran compilers, and they still make Fortran compilers to this day.

**Jerod Santo:** Wow...

**Alan Shreve:** Yeah, it's one of those where you're like, "Wow, someone still does that..." It's like their only line of business, it's crazy. So I started there. I actually wrote about it recently, when I was launching Equinox. I originally started there as an intern. I was actually packaging the software, which at that time meant physically assembling boxes and burning CDs and printing CD labels and stuff like that.

**Jerod Santo:** Well before an idea like package managers that we talk about today. Back then it was like some tape and some cardboard, right?

**Alan Shreve:** Yeah, I was the package manager. \[laughter\]

**Adam Stacoviak:** That's a whole different version of it, for sure.

**Alan Shreve:** I know, right?

**Adam Stacoviak:** You said you got lost from programming... What happened to get you lost and why did this internship pull you back?

**Alan Shreve:** I got kind of lost because in between finishing the programming course and starting that job - in that job I eventually transitioned to writing code for them, instead of just packing boxes... In between that I'd kind of outgrown what my instructor could teach me, and resources on the internet for learning how to code and going beyond what I'd learned weren't nearly as good as they are today (they are fantastic today). It was really a struggle to find... Not that there were no resources, but it was difficult to find the next step. I always ended up finding things that were below my level or way above it, and I couldn't find materials that understood what I already knew and could push me gently into new things. \[12:09\] That was actually kind of frustrating, so I kind of lost track of it for a couple of years while I was sorting that out.

I remember I bought a book on Visual C++, which was a horribly misnamed book; it was actually a book on how to write Win32 GDI applications; I made my own Paint clone... But it explained nothing about the underlying model of it. It was like, "Now you have to send a WM\_PAINT command", and I was like, "Okay, I'll type the code to send the WM\_PAINT command. I do not know why I'm doing this." \[laughter\] Yeah, so that was just a very frustrating time.

**Jerod Santo:** So you still haven't gotten us back to Go... So keep going, we're following the path. You've hit your internship, you were a manual package manager, you're getting back into software... Keep going.

**Alan Shreve:** So I actually started writing code for that company. Then I went to college, I studied Computer Science at college, so I did a lot of programming during college, and it kind of took off from there. During college I did a number of internships trying to find the kind of company that I wanted to work for, so I went through a couple companies. I interned for VMware and Microsoft, and Fog Creek, and I ended up learning essentially that the ideal company that I wanted to work for was a company that was small. I didn't really enjoy being part of a giant corporate environment, but also one that was tackling really difficult technical problems. I was looking for some combination of small but very hard technical problems, which is not always easy to find. It's a lot easier to find now, but at the time it was not super easy to find.

**Adam Stacoviak:** So you interned at VMware and Fog Creek?

**Alan Shreve:** Yeah.

**Adam Stacoviak:** What were the kinds of things you were working on at VMware? What year was that roughly?

**Alan Shreve:** I interned at VMware for two summers; those were my first two years of college, and I was working on the QA team for what they called at the time Virtual Center, but has now been rebranded into something as part of vSphere - I honestly don't know, because they've changed the branding so much.

**Adam Stacoviak:** Of course.

**Alan Shreve:** Yeah, so I was working doing QA for them, building essentially automated test harnesses, that kind of stuff. Then I did the next summer at Microsoft, where I got to work on the Windows 7 kernel; I actually worked on diagnosing performance issues in the file system driver stack, and then I kind of transitioned away from them entirely, interning at Fog Creek, where I actually helped them build the very first version of Kiln, which is their GitHub equivalent for Mercurial.

**Adam Stacoviak:** \[15:51\] I asked that because you said that you liked small companies with difficult problems, and VMware's nothing like that, really. Maybe you were on a small team or something, but maybe you found out what you didn't like about a big company tackling a hard problem, too.

**Alan Shreve:** Yeah, going through those internships was really the learning experience that brought me to that understanding. Before, I really didn't know what I would enjoy, but doing all those things was really helpful to learn what it was that I was looking for.

**Adam Stacoviak:** Those are fairly well-known names, too... Household names, so to speak, at least for us.

**Alan Shreve:** Sure.

**Adam Stacoviak:** When it comes to an internship, I think... I'm camping on these questions, and I know we're trying to get to your experience with Go and how you got there, but I'm thinking for the listeners out there who are thinking, "I wanna get established somewhere", maybe a similar path that you're taking, these are household names, so to speak, and you got an internship there. What was the process like, or how did you go about getting an internship? Was it just that easy from a college standpoint? Did they make it accessible, or did you have to audition, so to speak? What was that like? And also how important that was... I guess you just said so, but how important that was to where you're at now?

**Alan Shreve:** It's hard to say, but I think it certainly is important for me. I always felt having those things on my resume was really valuable. As far as how I got those internships, we had career fairs at college, and a bunch of companies would come and you would talk to them. VMware had a booth there that I went and talked to. Of course, nothing is always that cut and dried; part of it was that my friend's brother worked at VMware at the time, so I have an in there...

**Adam Stacoviak:** Nice.

**Alan Shreve:** ...and he was able to help take a chance on me, which I'm eternally grateful to him for.

**Jerod Santo:** It's who you know sometimes... Lots of times.

**Alan Shreve:** Yeah. And the other internships... One of my friends interned at Microsoft one of the summers and was like, "You should try it there, I had a really good time", so he introduced me to those recruiters.

**Adam Stacoviak:** That's a good sales pitch... I might try that.

**Alan Shreve:** Yeah, right? \[laughs\] Fog Creek was the only one that I kind of went into blind, or I just applied blindly to them.

**Adam Stacoviak:** And they're probably the smallest teams of those teams... Microsoft's huge, VMware's huge... Twilio was small, now they're bigger. That wasn't in your mention of internships, but it's on our list of where you've been before. Fog Creek seems to be -- maybe they're getting larger now, they're growing obviously, but they started out a fairly small team.

**Alan Shreve:** Yeah, I think they were maybe like 30ish people when I interned there. 30 or 40, something like that. Applying for the internship there is pretty easy though, because if you... I mean, I'm not saying that it was easy to get in, but as far as like doing all the right things... Joel wrote a blog post about, "If you want to intern at our company, you should do all of these things." So I read that blog post and did all of those things. They definitely made it accessible, and I think a lot of companies are trying to follow that example. I've heard it's pretty commonplace for companies that you interview at these days to provide you with, "This is what you expect when you come into the interview. These are the kind of questions that we're gonna ask", and I'm really in favor of that kind of attitude, of not just taking candidates and bringing them in blind, where they have no idea what to expect, but instead taking candidates and saying, "We want to set you up to succeed."

**Adam Stacoviak:** \[20:15\] We're coming up close to our first break, and we still haven't gotten to Golang, we still haven't gotten to really where open source fits into all this, so we obviously have to crack that nut open, but let's take a break real quick, hear from a sponsor, and when we come back we'll talk and get a little closer to your path to Golang and also how open source fits in. We'll be right back.

**Break:** \[20:37\]

**Adam Stacoviak:** Alright, we're back from the break with Alan. We're talking about... I guess we were trying to get to the open source path. Jerod and I mentioned ngrok and that's an interesting project of yours, obviously. You're a fan of Go, so where did your path to Go begin? At what point did you get to that? I know Go has been out for like six years now roughly, so at what point did you pick up Go?

**Alan Shreve:** I picked up Go towards the end of my time at Twilio, actually. Not that it actually had anything to do with Twilio at all, where I was working at the time. I guess it kind of had a little bit to do with the work that I was doing at Twilio. I was working with my friend Jeff Lindsay there...

**Adam Stacoviak:** We know Jeff.

**Alan Shreve:** Yeah, Jeff's a great guy.

**Adam Stacoviak:** We've had Jeff on this show before.

**Alan Shreve:** Yeah, he's awesome. At the time Jeff was really into asynchronous programming in Python, and we had a couple services at Twilio that were written in Twisted Python, and Jeff was a big proponent for another asynchronous Python technology called Gevent \[00:23:18.19\\\], so I'd started building some stuff with that at Twilio. When Go came out I was kind of eyeing it, and I was like, "This looks like it's the Gevent model, but not a hack on top of some other language. This is that programming model at the core of the design", and that really appealed to me. So that's kind of like what instantly got my interest about Go. Just to kind of expand on that, the way that Gevent works is basically it's built around... \[\\00:24:01.26\] Whereas Twisted Python or Node are built around an event loop with callbacks when events happen, Gevent and similar technologies are built around the idea that the runtime should handle that for you. So you can basically spin up these things called greenthreads, user-mode threads that you would pretend like they were... When you did IO or any any other kind of operation that would block the event loop normally, instead of having to manage that yourself, you would actually make those calls as if they were blocking calls. But the runtime would be smart enough to realize that they were blocking calls and manage the event loop for you. So they would basically take that user-mode thread that was about to block on a blocking call and put it on its own scheduler queue, and then stick an async IO event into the event loop that it managed. So it's a very basic intro into how those technologies work. That was what Gevent did, but it was like a hack on top of Python, because Python wasn't built for that, so it did really clever things like manipulating the Python's stack frames, stack pointers to actually do things like that.

So when I saw Go, I was like, "Wow, this is like that model, like we should just build our code as if all of these threads are blocking, but the runtime should handle that complexity for us." So that was what got me into it.

**Jerod Santo:** It's nice when that's built right into the language, as opposed to implemented into the library or added on later.

**Alan Shreve:** Yeah, it allows you to do a lot of things better when it's just built in at that core level. Gevent always had these problems where you would worry about every dependency brought in, because if that dependency did any kind of blocking IO you had to worry, like did it actually block or did Gevent manage to monkey-patch those calls so that it wouldn't block, or did it do the IO in C somewhere so you couldn't deal with it at all? And you had no visibility into these sorts of things, and it was a real pain. So Go having all that built in was really awesome.

So I started building a couple toy projects in Go to kind of fool around with it, and then at some point I actually decided that I wanted to learn to actually build a substantial thing in it.

**Jerod Santo:** So was ngrok your first big, substantial thing, or did you have some prior art?

**Alan Shreve:** Yeah, ngrok was the first thing. Ngrok was originally a project built to learn Go, that was about it. The strategy that I really love for learning a new technology is to take an existing project and port it into the new framework, the new technology or the new language that you're trying to learn, exactly. That's what I did with ngrok.

The reason I like that is because when you build things - at least for me, I get all up in my head about what it is that I'm going to build. Suddenly it becomes a product, and I have to make product decisions where it's like, "Should I do this? Should I not do that?" Whereas if you port something, all of those decisions are made for you and it becomes more like a class project where all the requirements are defined upfront and that entire cognitive load is gone.

Ngrok was essentially that, it was a port of Jeff's tool, localtunnel, actually.

**Adam Stacoviak:** \[28:24\] Yeah, I recall talking about localtunnel actually back on \#99, if I recall... We talked about Flynn, Tent, localtunnel... That's really interesting. So was localtunnel in Python?

**Alan Shreve:** It was, yeah.

**Adam Stacoviak:** So you were interested in obviously learning Go, but then porting something to it and making it a serious project.

**Alan Shreve:** Yeah, that kind if happened accidentally, really, that it turned into a serious project. It was really just a project to learn Go to start with, and localtunnel was a project that seemed like relatively small and well-contained, and seemed from what I knew like a decent fit for Go, because it was pretty network-heavy. So yeah, I kind of picked it up and ran with it; it just kind of spiraled out of that.

**Adam Stacoviak:** Were you surprised by the success of it? I mean, I know when it first came out - I can recall back, it was probably at least two and a half, maybe three years, roughly... As far back as at least I know about it. And it seemed like an obvious problem for a large amount of people, so did it seem like a surprise to you that it was successful?

**Alan Shreve:** Yeah, I guess it was surprising that it was successful because it was just a clone; that was kind of what surprised me about it actually taking off. Yeah, it was about three years ago now.

**Adam Stacoviak:** Ngrok is so much cooler sounding than localtunnel. \[laughter\]

**Alan Shreve:** I cannot begin to tell you how excited I was when I found a five-letter pronounceable .com available. It was a beautiful moment.

**Adam Stacoviak:** Yeah, and I'm just telling Jerod in the back chan, I'm really interested in the name... Obviously 'n' stands for network, but why 'grok'?

**Alan Shreve:** After I cloned localtunnel and I was happy with it, I started to think about other things that I would like in terms of the product. I worked at Twilio, so I was dealing with WebHooks all day... I built a lot of Twilio applications for testing, and when you'd build a Twilio application it was this really frustrating exercise, because you would write your code, and even with localtunnel or ngrok or an SSH tunnel, you would pick up the phone and dial a number or send a text message to actually cause Twilio to call back to your code and trigger it to run. So you'd do that once, but it's always broken, right? So it would break, and then you would try to fix it, and then you would do the same thing again, you would pick up the phone. So I'd just end days with a call log with like forty calls to this one random number, just to try to get the application working.

So I started thinking about the kind of things that if I were working on that type of application that would make it easier for me, and one of those was that I wanted to see all of the traffic that was flowing across the wire, that was really important, as well as being able to replay it. The introspection part of it was kind of new, or wasn't at least in any of the other tools, and I like the idea of being able to introspect things and look at them as they're happening, so the name is kind of just a play on the word grok, coined by Heinlein, which is 'to understand', and 'n' because there are a whole bunch of other network tools that start with. It was kind of a play on ngrep.

\[32:22\] It's weird, it doesn't actually mean that to me any more. That was the genesis of it, but to me it just kind of is its own definition now.

**Jerod Santo:** A few things about this tool that impressed me... First of all, you do a really good job of explaining its value proposition on the website. It's one of those tools that once you know you need something, you wanna expose your local development environment to somebody who's not on your network, you need NAT traversal, all these things... You may not understand exactly how to get all that done, but you're like "Man, I wish I could just give somebody a URL and they could actually access this demo that I have on my machine." You do a really good job of explaining, like "Hey, this is what that tool does." That was immediately impressive.

Then the fact that it is just a single Go binary, you drop it into your path and it runs, which has been kind of a flagship feature of Go for a long time; the easy distribution makes for a good first experience. Then there are a lot of little details that are really nice, and I'll just give a single example - this might be ngrok 2.0, it wasn't in 1.0, so you can help me sort that out... But for instance, when you're actually running the thing, it will show you there, there's a little display in your terminal that shows the URLs and the introspection if you want it, what's going on, but there's even a time where it detects an upgrade (there's a new binary that you can download) and it just says, "Hit Ctrl+U to update itself." So while you're running it, you just hit Ctrl+U and it downloads and upgrades itself, and you then probably have to restart the program for it to run the new version.

Little stuff like that, that you just don't expect from an open source project... So I'm curious where your attention to detail comes from, why you put so much time and effort into this?

**Alan Shreve:** Yeah, the updating thing... I was really psyched about getting that working when I did.

**Adam Stacoviak:** It's really nice.

**Alan Shreve:** It went through a lot of iterations actually. There was an updating component to version one, as well.

I don't know, as far as my strengths go in terms of building things, I think of myself partly as a software engineer, and the other strength that I feel like I have is product design. So a lot of that is just that attention to detail, of just trying to round every sharp corner, constructing error messages that are helpful and useful. I'm still really not happy with the error messages that ngrok kicks out. I've kind of been on a mission lately where it's my goal to have every error message that ngrok issues have a unique code number that comes out of it, so with a unique prefix for ngrok, with the idea being that if there's any error that you should actually -- it should be like a unique string that you can put into Google, that will only point you at that particular issue. That way, if someone has that issue and tells me about it, I'll know exactly what it is, and I could write up documentation for each one with like, "This is what happened", because you only have so much space inside of a terminal to actually tell people what went wrong and how to fix it, and to be able to link to walkthroughs and guides, or possible reasons that this sort of thing happened. In a documentation, that would be really easy to find with a unique code.

**Jerod Santo:** \[36:25\] Yeah, that's a great idea. I've seen a few projects starting to do stuff like that. I know Angular at some point started introducing... Their error messages would have short URLs in it, and it's like, "Here's the brief description of this thing", but in the console I'd click there and it will actually just expand out to a full page that has all sorts of extra information. I think that's super useful.

So have you been able to achieve the unique ID for every error yet, or is that an aspiration?

**Alan Shreve:** I'm getting closer. It's certainly not all the way there, but it's probably about half there. I don't know... I really love building product experiences that people love, and so a lot of the drive that I have in software is to take really hard things and solve them, but make them really accessible to people. There are a lot of projects that I use that I get very frustrated with because they do really cool things, but the user experience is often really poor with them. I've always enjoyed making things very polished and very nice, and the auto-updating experience was definitely part of that for ngrok. I spent a lot of time learning how other people did it, researching the best ways to do it, and I still got all those things wrong to start with, but I've been iteratively getting better at them. Recently I actually just took all of that learning from building the auto-update experience and kind of spun it out as its own product recently.

**Jerod Santo:** I think there are some lessons to be learned here. This doesn't just apply to open source, but for software development in general. Especially when your target audience is developers, when you sweat the details, I think it pays off in spades, because developers - probably more so than any other people, because we understand what's happening, we understand what's going on when an auto-update is occurring... And when you sweat those details, those little things that people may or may not even notice, really set pieces software apart from the pack, even if they are serving the same purpose. Because we appreciate the level of effort that goes into that, even if the value that it brings is minor - and I'm not saying an auto-update is a minor value, I think it's a pretty big value, but just the polish on the software... Like you said, it was a clone, so it's definitely not a new idea, it's not a standalone product that nobody else is doing so it's like, "Wow, this is singularly valuable", but it works well and it was crafted with care, and your audience is developers mostly, or network people, and we tend to care about those things.

A lot of success, frankly, in open source, can be serendipity, right place, right time, those kinds of things... Sometimes it is based on merit, sometimes it's not, but I think if you just sweat the details like you have, Alan, I think you're giving your particular tool a better shot.

**Alan Shreve:** \[40:04\] Thanks. Yeah, that's really gratifying to hear, because I care a lot about the details, so I'm always glad when other people care about them as well. It's a good feeling.

**Adam Stacoviak:** On the note of success, I would actually probably say that because I have some sort of background knowledge on another project that could have been, or probably was just as good - and I'm just saying that lightly, I don't mean that for sure, because it was a web service behind it, an install of a client, things like that, but... I had a friend - I still have, we just haven't talked in a while - who roughly around the same time ngrok came out, had solved a problem like this but wanted to make it a paid service, mainly because they wanted to do something similar like you, they wanted to do something serious that was outside their normal job, that could potentially grow some legs and do something interesting. But something about ngrok - I would say ngrok itself, but also the fact that it was open source, so I think my hat tip to you is I think that - and maybe you can agree - open source really was, or it being open source and being the way it was, available to people - it solved a great problem very well as Jerod was saying - was a core underpinning to its success.

**Alan Shreve:** Yeah, I definitely think so. I think that a lot of people like open source for a number of different reasons, but there are a number of people who just simply like it on principle, and that's the only kind of software that they wanna use. A lot of people like it for the hackability, that they can change things in it... So being able to tap into those developers by making a project open source is a really powerful to get adoption for anything that you're building.

**Adam Stacoviak:** I guess a side note to the other project I mentioned is that that project right now is no longer...

**Alan Shreve:** I'm sorry to hear that. \[laughter\] It's not a competition, I guess...

**Adam Stacoviak:** I know that, but it's just...

**Jerod Santo:** Sad face.

**Adam Stacoviak:** It's a sad face, but I think it's interesting to -- at least for me, because I have a different perspective than you, because you didn't know this before me telling you this, but all along I've been watching you two in parallel to a degree, and I've seen you rise, and I imagine it's for the reasons we all know, that open source is easily adopted, is easily contributed to, and you can go in and change it if you want. You can work hard and become a maintainer, become a contributor or whatever, whereas a proprietary software that is to a degree simple enough that it should be open source - maybe even better as open source, because it is infrastructure... I'm just trying to say that I think maybe open source was the better way to go, obviously.

For somebody out there who maybe thinks, "Should I close source this...?" but now you aren't really open source anymore, so that could be the flip.

**Alan Shreve:** That's true.

**Jerod Santo:** I think that's the perfect teaser for the next segment, which is that you built this tool, made it open source, huge success - even to this day, ngrok 1.0 has like 700 stars on GitHub, lots of people using it...

**Adam Stacoviak:** People even bake it into their products too, into their software; they open source it, like "Yeah, fire up ngrok to do this." It's become a thing that people use daily.

**Jerod Santo:** That being said, I happily upgraded ngrok 2.0 without even a thought, because I was a happy user of ngrok 1.0. So let's talk about that after this break. The switch - ngrok 2.0 closed source, what happened there, what was the decision, and all sorts of stuff around open vs. closed, after the break.

**Break:** \[44:04\]

**Jerod Santo:** Alright, we are back with Alan Shreve, talking about ngrok 1.0 vs ngrok 2.0 - open versus closed, and what was probably a big decision to release ngrok 2.0 as a binary, and keep the source to himself. So Alan, tell us about this decision, this change, where it came from and why you made it.

**Alan Shreve:** Yeah, it actually was not like a decision that I made at any one point in time. It was kind of an overarching decision that lasted for like a year as I was building ngrok 2.0, maybe a year and a half. It took a while to actually build that out.

It was a really hard decision, it still is. When I started building ngrok 2.0, the idea was like, "I'm building it with all of the source code in a private repository, and then when I get towards launch, I'll actually open source all of it." So part of that was that when I started building ngrok 2.0, I started building it in a more modular way. The intention was to take a whole bunch of different libraries and open source them, so that all of these individual libraries that were used to build ngrok 2.0 would actually be open source. And that actually happened. A lot of the technology that is used to build ngrok 2.0 is open source.

One of the projects that I've built for this is a project called Log 15, which is like a structured logging package for Go, which allows you to build reusable handlers and reusable handler structures. So that ended up being open source out of it, and then another piece was the actual network player that does stream multiplexing to actually run a whole bunch of virtual connections over a single TCP connection. That ended up being open source as well, it's a project called 'muxado' (that's on my GitHub as well). Both of those projects have been successful in one way or another, that they've been useful to other people, which I guess is a decent metric for the success of a project.

So a lot of this stuff actually did end up being open source. The actual product that was built on top of those libraries is kind what didn't.

**Adam Stacoviak:** So it sounds like you've modularized the underlying infrastructure, kept that open source, and built what was before open source ngrok into it sounds like potentially an actual product that people will pay for, on top of the open source that made ngrok 1.0.

**Alan Shreve:** Yeah. It actually wasn't built on top of version one, it was essentially a complete re-write. There was almost zero code that's shared across them, honestly.

**Jerod Santo:** Why the big rewrite, instead of just continuing to evolve what you had?

**Alan Shreve:** \[48:00\] Yeah, it was basically a result of a couple things. One was that ngrok was a project to learn Go, and when you're learning things, you make a lot of mistakes; there are a lot of things that you don't understand, a lot of things that you think you're smarter than other people who've been working on it for a while... So I made a lot of mistakes, a lot of things that looking back on them I'm not proud of the way that it was built.

The other part was that the scope was changing. The scope for ngrok 2.0 was not this thing where there's a single server binary that the ngrok client connects to, but I wanted to make it a very reliable service. One of the other pieces of quality from a product design that isn't so much UX that I care a lot about and put a lot of work into, and that you see very little of from like a user, is reliability and stability of the service. A lot of work goes into that, and one of the pieces that went into that was building out the server component in a way that it was distributed across many machines, so that it could tolerate arbitrary machine failure.

These days - I actually just released this last week, is that ngrok actually now operates in multiple regions around the world. There are actually HA setups in a number of different data centers that coordinate with each other to actually run a global ngrok service. And that's a very far cry away from "There is one machine that runs the ngrok service."

**Jerod Santo:** Sure.

**Alan Shreve:** So actually rearchitecting it for that basically involved a complete rewrite.

**Jerod Santo:** So is it fair to say that the decision around this is financial?

**Alan Shreve:** Yeah, that's totally fair to say. It's mostly financial... There are some other things in it as well... It's interesting, building a business model around open source is a tricky thing. There are a couple ways that you can do it - there is the "We do support" model. Like, "We give away all the source, and this runs some critical piece of your infrastructure, so you pay us essentially insurance." That's kind of what it is. If it breaks, you have a direct line to someone who can help you fix it.

**Jerod Santo:** Right.

**Alan Shreve:** There is also the "open core" model, where you give away most of it, but you charge large amounts of money for enterprise features, like single sign-on, audit trails, or something like that.

**Jerod Santo:** Sidekick is in that model, where there's the open source community version, and then there's Sidekick Pro, There's derivations of that where you have Enterprise, which has enterprisy features, but Sidekick Pro is more like SideKick++. It seems like that model could have possibly worked for you. Did you battle around all these ideas as far as different ways of doing it, or did you just throw your hands up in the air and say, "Well, I'm just gonna keep it closed."

**Alan Shreve:** Totally. The other model that was the one that I considered most seriously was the model that Sentry takes, and Docker as well, for Docker hub at least; all of the code is open source there. There's nothing that's like a closed add-on, but we run the service for you. So running the service is the piece that's too complicated, that you don't wanna deal with, so you pay someone else to do it. So that was the one that I considered most seriously, and I ended up having problems with all of them.

\[52:07\] The support model is based entirely around your product being core to someone else's production infrastructure, that's the thing that you're paying insurance for. Ngrok right now is not that. It may be in the future, but at the moment, and certainly at the time, it was a development tool. So if it breaks, your developers are kind of unhappy, but it's not something where you're like, "Oh man, we need to have Alan on the line in 30 minutes notice to help us fix it if ngrok goes down." So that one was kind of out for ngrok, which was kind of validated, because I never really got any interest from people, who when it was open source were like, "Hey, can we pay you for support?"

The other model that was seriously considered was running it as a service. The trouble that I had with it was that it kind of put me at odds with making the product really great from a server standpoint. I feel like a lot of companies that had this, "Well, you can run it yourself, or you can use our hosted service" don't put a lot of work into usability when it comes to installation on your own service, because they're not incentivized to. They're actually financially incentivized to not make that good, so that you're more likely to be like, "Oh man, I don't wanna stand up RabbitMQ and a database and all of this other kinds of stuff to make this work. Let's just pay someone for it.

And ngrok was kind of in this interesting place where it didn't really require a database, it didn't really require any infrastructure; it was just a binary. The server installation was such a simple thing; I'd put work into making it straightforward and really easy. So I talked with a lot of customers who were basically like, "Yeah, we could have paid you, but we basically had no reason to."

The reason that that happens is partly because it was designed that way, but also the product itself doesn't have any persistent piece. It doesn't store your requests on the server or do any of those other kind of things that require more complicated infrastructure like a database or a message queue, or those kind of things.

So I wasn't particularly happy with either of those options, so when I launched it, it was kind of launched in the mode of, "Well, I'll keep it source closed for now and we'll see if it makes sense in the future, if there are more pieces that I can open source, or maybe if I can find a way to open source the whole thing without jeopardizing the business model. That was kind of the thought around it.

Another piece of it that went into the calculation was if I made it open source and I couldn't get paid to work on it full time, if that wasn't enough money to make it a sustainable business, would it be better for the product and for its users to have it remain a side project, something that got my attention whenever it happened, whenever I had the time? Or would it be better for the product and for the users to be in a place where it was like, "I can work on this full-time and dedicate all of my energy to it."

**Jerod Santo:** \[55:48\] I have two questions; you can take them in order, or take them however you like. The first one is where does the paid product begin with ngrok 2.0? Because, like I said before the break, I happily upgraded. Adam, I don't know which version you're running, but I wasn't taking advantage of any of the open sourcedness of it, I was just using it as a tool when I need it. We were very casual users; Adam said we use it to expose a web server to campa ign monitor, so that it can suck in some HTML, and I'll use it to develop a webhook here or there. So we're very casual users. So tell us where the paid side -- what model you decided to go with in terms of the paid stuff at ngrok 2.0 has, and as a follow-up to that, if you will, give us some insight into how it's going and the status of ngrok as a paid product.

**Alan Shreve:** Ngrok 2.0 still has a very generous free tier, and most casual users never really break out of that free tier. That's been something that I've been thinking about over the past years - do I want to consider that lead gen or do I want to actually take more things away from it that it incents people to upgrade. It's a difficult calculus. I don't want to cripple the product. I still want that really great initial user experience of like you download it, run a command, and it's instantly working, and there's no "Please pay" sort of thing immediately. You just immediately get value out of it.

It's kind of all advanced features that people that are in the paid tiers today. One of the things that ngrok does that you can pay for is end-to-end encryption; instead of ngrok essentially terminating your TLS traffic at its servers and then re-encrypting it as it transfers over the tunnel, instead ngrok actually inspects the incoming TLS connections and multiplexes those to your backend so that you can actually do end-to-end encryption. Ngrok is just a router at that point, essentially, on the internet.

The one that most people tend to upgrade for is custom domains. Right now on the free version you always get a random domain when you start ngrok, so allowing people to pick a custom subdomain of ngrok.io, or even being able to run a tunnel over their own domain name, like dev.inconshreveable.com.

**Jerod Santo:** Yeah, kind of white labeling to a certain degree.

**Alan Shreve:** Yeah, that's part of the paid features as well, and also some additional businessy stuff like IP whitelisting, things like that.

**Jerod Santo:** What can whitelisting do?

**Alan Shreve:** It basically lets you restrict the incoming connections to your tunnel endpoint to a certain set of IPs.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** Interesting.

**Jerod Santo:** Question two, how's it going? Give us some insight into ngrok as a paid product. You also have Equinox, you can talk about that in light of how you're doing it, making a business out of this?

**Alan Shreve:** The great news is that ngrok is a sustainable business, which is awesome.

**Jerod Santo:** Nice.

**Alan Shreve:** It means that I get to dedicate all of my time to it, which is really exciting, and it's why it keeps getting better, really - I actually have all of my time to devote to it.
As far as Equinox goes, the work on that is kind of work on ngrok in itself.

**Jerod Santo:** What is Equinox, first?

**Alan Shreve:** \[59:57\] We talked earlier about the auto-updating experience that ngrok has, where it detects that there's a new version, you press Ctrl+U and it updates itself. So Equinox is all of that functionality around building a self-updating Go program packaged into a service for you. So it does that, as well as packaging and distribution. If you have a Go program, it will package it up into an MSI for Windows, and a pkg installer for OS X; it creates a custom Homebrew tap for you, so that when you release new versions you maintain all of those things.

Equinox was built out of this desire to make the installation experience better. Sure, there are a huge number of developers for whom you can hand them a zip and be like, "Here's the zip. It has a binary inside. Unzip it and run it", and that works for a large majority of people, but ngrok's user base is huge, and it includes a lot of people who are not technical at all; people who have never used a command line before. So being able to be useful to them means a better installation experience, a better updating experience, all of those things. So Equinox is the work that's been put together to make that better. It's been packaged up as a separate thing with the hope that it will be useful to other people.

**Adam Stacoviak:** I'm just looking at version one versus version two... It seems like 1.0, the original open source version wasn't what you wanted it to be in the long term, and now with 2.0 you're able to open up a web interface to it; obviously, you have custom domains, being able to look at traffic, things like that. I'm wondering if the web interface and the command line interface has a similar or a mirrored experience.

**Alan Shreve:** Yeah, so all of those things were actually present in 1.0. There was an introspection interface as part of version one, and there was a dashboard for version one as well. The website wasn't as fully featured as it is now, but there was one that existed. As far as them being mirrored...

**Adam Stacoviak:** I just mean, are they similar? Do they have similar features? Do you get more if you use the web interface versus the command line interface or there's things that just maybe aren't present on either side?

**Alan Shreve:** I see. They're not really mirrors; there are a couple things that are in common there, but it's not like you can exclusively use the web interface to work with ngrok. If you wanna start it, you do have to use the command line to start it. Once it's running, if you wanna look at the requests that are going over the tunnel, that's the only thing that's really mirrored, the status interface that you see in your terminal and that you see in the local web interface. Those are pretty much the same, except that the web interface is much more detailed, because it just has a lot more screen real estate to work with, and things like CSS and graphics, right?

**Adam Stacoviak:** Of course.

**Jerod Santo:** I have a hypothetical for you, and it's easy for me to say because it's your livelihood, not mine... But what do you think would happen if you took what you currently have, which is ngrok 2.0 as a product that's being both used for free by some people and paid for by some people, and you just took that and you didn't change anything in the model, but you just hit open source on that repo? What do you imagine would be the fallout or the change from that dramatic button click?

**Alan Shreve:** \[01:04:04.15\] That's a really great question that I really don't know the answer to... \[laughter\]

**Jerod Santo:** Well, that's why I'm asking you to hypothesize here.

**Alan Shreve:** It's one of those questions that... I wish I knew the answer to that question.

**Jerod Santo:** Yeah...

**Alan Shreve:** Honestly, maybe one day I will do that, and I'll find out what the answer to that question is, because I'm really curious, too.

**Jerod Santo:** Well, email us when you do, and we'll have you come back on the show and talk about what happened.

**Alan Shreve:** Yeah. That'll be a really interesting experiment. But the unfortunate part is it's one of those experiments that you can't really run, right?

**Jerod Santo:** You can't undo it...

**Alan Shreve:** Yeah.

**Adam Stacoviak:** This probably is one of the first times, Jerod, we've had somebody come on this show that started open source and went closed source, and it is to a degree considering going back to open source.

**Jerod Santo:** Well, insofar as I've asked him to...

**Adam Stacoviak:** Well, earlier he was saying that too, that he was hoping that he can eventually potentially open source even the code, even though paid features will be there. I mean, did I hear you wrong, Alan?

**Alan Shreve:** No, that's totally right. The goal is to find ways to open source parts of it, and maybe eventually the whole thing. I've toyed around a long time with the idea of open sourcing just the client, which might be a thing that happens. Part of it might be actually taking just the protocol for actually setting up the tunnel and actually exposing that as an open source piece as well, or finding ways to... I don't know, maybe experimenting with something like what Sourcegraph has done. They have their own kind of modified open source license, which still requires people to pay them for it.

**Adam Stacoviak:** That's fair source, right?

**Alan Shreve:** Fair source license, yes.

**Adam Stacoviak:** Right, right. Beyang, actually... Speaking of Sourcegraph, we're gonna have Beyang back on Go Time. Actually, we were gonna record with Beyang, but then it got rescheduled and he hasn't come back on yet, but we mentioned Go Time before, and obviously Equinox and this is in Go, but that's a really interesting example because fair source - I think most licenses are written by lawyers at least to some degree, but this one was actually written by a lawyer that's very familiar with open source and very involved in open source, that was trying to liberalize this license where it can actually provide the right kind of things that open source needs, but also the right kind of things that business needs. It's kind of interesting to think about that.

**Alan Shreve:** Yeah, I'm really excited about those kinds of efforts. They're really exciting. I don't know how they're gonna go, but I'm hoping for the best.

**Adam Stacoviak:** Fair source.

**Jerod Santo:** Well, if you're interested in that as a listener, I guess go to GoTime.fm and hit subscribe, as you'll be hearing about Sourcegraph and I'm sure they'll be talking about fair source on that show as well. Alan, let's get to our closing questions; unfortunately we're getting near the end of our time here. The first one we have for you, which is one of our favorites, is programming hero - if you had to name somebody who's been a mentor or an inspiration or a hero of yours in programming, who would that be and why?

**Alan Shreve:** That's a hard question. There are so many programmers that I look up to and respect. One of the more famous people that I've looked up to and that I guess I'm really impressed with is John Carmack. I don't know if you guys have read Masters of Doom, or know too much about him, but...

**Jerod Santo:** I have it in my Amazon wishlist, but I haven't pulled the trigger yet.

**Alan Shreve:** \[01:07:53.09\] It's a fantastic book... Really fascinating, especially if you're into video games, or ever played Doom, or wanna know the history of its software. Yeah, just a guy who is a technologist through and through, and is not afraid to tackle problems that everyone else thinks are impossible. And he's still doing it. I don't know if you've read the story about him and Minecraft, about how he basically got himself access to the Minecraft source code so that he could port it to Oculus, because he was dead set on it running on Oculus.

**Adam Stacoviak:** Wow...

**Jerod Santo:** Really?

**Alan Shreve:** Yeah, it's truly fascinating. And this is a guy who's been doing this for - I don't even know how many years now, and is still at the forefront of his industry, leading it and doing amazing things. He's definitely one of the people that I look up to.

**Adam Stacoviak:** Well, for those that listen to this show, this is the sixth time that I can at least tell by our notes that John Carmack was a hero, too.

**Jerod Santo:** He's a big hero.

**Adam Stacoviak:** Yeah. That's interesting though, to think that he was dead set on porting it over.

**Alan Shreve:** Yeah, that's a fascinating story.

**Adam Stacoviak:** Are there any licensing issues with that? Is that legit, is that a cool thing to do?

**Alan Shreve:** That was kind of the crazy part, at least in the article that I read about it. They basically said that Carmack's lawyers looked at the contract that they handed him and they were like, "You're basically just doing this work for them for free. You're not gonna have any rights to it" and he was like, "I don't care, it just has to exist. I'm so excited about this."

**Jerod Santo:** Hah...!

**Adam Stacoviak:** Wow...

**Alan Shreve:** Yeah.

**Jerod Santo:** So what came of it?

**Alan Shreve:** I'm not entirely sure. I think they demo-ed it at some presentation, but I'm not sure where the status of that is right now.

**Adam Stacoviak:** One other thing that we like to ask at the end of the show, Alan, is radar. We have a weekly email that we call Changelog Weekly, it's our editorialized take on our radar. So when we have a guest on, we'd love to learn about your radar. So what's out there - whether it's a technology, or open source... What's out there that if you had a free weekend you'd play with it? Something you wanna play with but you haven't had a chance yet.

**Alan Shreve:** I'm really excited about all of the emerging languages, so I'd probably be playing around with those. I would be excited to try working with Rust some more, to try working with Nim, or Elm, or any of those sorts of things.

**Adam Stacoviak:** Rust, Mim... What's Mim?

**Alan Shreve:** Elm.

**Adam Stacoviak:** Elm, okay.

**Alan Shreve:** Yeah. All of those new and emerging languages that are approaching problems...

**Adam Stacoviak:** Elixir?

**Alan Shreve:** Yeah, Elixir... They're all pretty exciting to me. So I'd take a look at those. Another thing not in the language sphere that I've been meaning to take a look at for maybe over a year now is NixOS, as like a better way to do configuration management. The ethos around it is really appealing to me, so I'd like to spend some time actually trying it out and seeing how well it worked.

**Adam Stacoviak:** I feel like we've heard of NixOS, Jerod. Have we mentioned this recently? It sounds familiar.

**Jerod Santo:** I think you've probably seen it in Changelog Nightly a couple times. I've definitely heard of it, but we have not featured it in Weekly, nor have we done a show on it, so it's a good one for radar... Now it just doubled up on ours.

**Alan Shreve:** Alright.

**Adam Stacoviak:** Well Alan, I think that's the close for this show. We would obviously love to talk to you more deeply about your fun trip down open source lane with ngrok. It's kind of interesting to see it start the way it did, as open source, go closed, and potentially come back as maybe fair source, who knows...

**Alan Shreve:** \[01:12:08.14\] Yeah, who knows...

**Adam Stacoviak:** ...but I guess we can consider that open source. It's in that grey area.

**Alan Shreve:** It depends on how you define open source. If it's like, "I can see the code, then it's open source", if it's free open source, then I don't think it is, at least.

**Adam Stacoviak:** Any closing thoughts from you before we close up? Anything you left unturned that you wanna mention to the listening audience?

**Alan Shreve:** I just really wanna thank you guys for having me on here. It was such a pleasure talking to you, so thanks!

**Adam Stacoviak:** Cool, man. We'll have to get you slotted on Go Time too, since you're such a Go fanatic. You have to listen - GoTime.fm.

**Alan Shreve:** Yeah, I will definitely check it out, it sounds awesome.

**Adam Stacoviak:** Alright, cool. With that, that's the show, so let's say goodbye, everybody.

**Jerod Santo:** Goodbye. Thanks, Alan, for the great tool!

**Alan Shreve:** Goodbye everyone, thanks for having me on.
