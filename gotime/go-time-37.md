**Erik St. Martin:** Welcome back, everybody, for another episode of GoTime. Today's episode is number 37, and our sponsors for today's show are Backtrace and The Ultimate Go Training series.

On the show today we have myself, Erik St. Martin, Carlisia Pinto is also here - say hello, Carlisia...

**Carlisia Pinto:** Hey, everybody.

**Erik St. Martin:** And Brian Ketelsen who, if you were listening to the pre-show, is crazy hyped up today. Say hello, Brian...

**Brian Ketelsen:** I'm not your trained monkey, I'm not gonna say hello on demand.

**Ron Evans:** He's supposed to say, "Hello, Brian."

**Brian Ketelsen:** Oh, hello Brian.

**Erik St. Martin:** You will say it or we will pause the show.

**Brian Ketelsen:** Okay...

**Erik St. Martin:** I'll call your bluff. \[laughter\]

**Carlisia Pinto:** Such a rebel.

**Brian Ketelsen:** And let all of our 12 listeners down? You will never do it. I call you on that one.

**Erik St. Martin:** We still have somebody else to introduce, too.

**Brian Ketelsen:** Oh, okay... Sorry.

**Erik St. Martin:** So our special guest today is the king of [Gobot](https://gobot.io/), [Ron Evans](https://twitter.com/deadprogram)... Making hardware come alive with Go.

**Ron Evans:** Hey, everybody.

**Erik St. Martin:** We've been in love with your stuff since back in 2013-2014, Brian?

**Brian Ketelsen:** Yeah, 2014. I think so.

**Erik St. Martin:** Well, he spoke at the conference, but I know we ran into it before then. I'm trying to think of when we first started playing. Why don't you give a brief intro to yourself and the Gobot project first, and we'll kind of jump in and talk hardware in Go?

**Ron Evans:** Sure. I'm Ron Evans, a.k.a. DeadProgram on all the places that matter - GitHub, Twitter etc. I'm the ring leader of the Hybrid Group. We're a software consultancy that specializes in writing software for hardware companies. So if I have more hardware than normal people, it's because I'm supposed to, I guess.

I tell people, "If you need some gear, just show up at my house with a box and something with wheels, like a dolly. Anyway, I've been doing open source software for hardware very actively since about 2008. I had done hardware-oriented software before that, but it was not open source related.

It was in 2008 that I discovered a project called Ruby Arduino Development, from Greg Borenstein. It wasn't actually running Ruby on Arduinos, it was the somewhat forward-thinking idea of using Ruby to create a domain-specific language which you could then compile down to Arduino code and run independently. I created a framework called Flying Robot, which was an unmanned aerial vehicle framework built on top of Ruby Arduino Development, that was mostly used to control blimps and other flying vehicles. The term 'drone' had not come... It was a kinder, gentler era. Back then, drones were strictly the purvey of the military and they were used for reconnaissance. It was before the dark times in the skies that drones come to represent to some people. But to others, of course, a drone is anything with propellers that flies around.

\[00:04:05.29\] So I created several different frameworks in different languages based on the same sort of ideas. I loved this idea of Go conceptually... I think it was Eleanor McHugh who was the first person who ever actually showed me any Go code with a lightning talk she did at a RubyConf in New Orleans, many years ago. Then the late, great Jim \[unintelligible 00:04:34.09\] started talking to me about Go, and then some other people started talking about Go, and I'm like "I should check out this Go thing."

In my case, anytime I check out a language, my first language is "Can I make it fly?" I mean, under its own power and land, successfully... Not just launch it into the air, although I am known to do that occasionally, but not on purpose, necessarily.

**Brian Ketelsen:** So that's your turing test?

**Ron Evans:** Yeah, exactly. We have what we call a conference-ready pilot. That means you can actually fly a drone as part of a conference demo, so you have to fly a little area of obstacle course first, or else you're not conference-rated.

Anyway, I started playing with Go and started playing around with this idea that we ended up calling Gobot, and the first real public introduction was there at the first GopherCon. The work that I had been doing in Ruby with something called R2 was getting a bit of attention with a few people in that community. But it really wasn't until I started seriously learning Golang -- which, of course, to a large extent happened after the first GopherCon. I didn't let the fact that I didn't know Go stop me, like many people in that time.

Luckily, other more experienced gophers took pity upon my code, in particular Matt Aimonetti and Jeremy Sands sat down and helped. So the Gobot of today - which we just released version 1.2 relatively recently - has been significantly rewritten, like many Golang projects have, as all of us are -- I mean, I still feel like I'm learning Go. I say that every year, "I still feel like I'm learning Go." I'm finally kind of getting it, and then the next year I'm like, "I'm starting to kind of learn Go..."

I was discussing that at lunch with Matt Aimonetti - that's really the beauty of using a language that is so deceptively simple.

**Erik St. Martin:** You know, one of the things that I loved the most was -- the very first GopherCon [Rob Pike](https://twitter.com/rob_pike) did a keynote and he talked about how Go wasn't targeted for or wasn't used for embedded stuff, and then later you were showing it doing robotic stuff...

**Ron Evans:** The next day, yes.

**Erik St. Martin:** It was awesome.

**Brian Ketelsen:** Yeah, and the part that trumped that was when he sat down and started helping you reorganize the codebase on our community hack day, the last day of GopherCon... What you need to do is make an interface and put that over here.

**Ron Evans:** My palms were sweating, okay? He was like, "Don't be nervous, I don't bite." He's a very nice man. I was like, "Can I get you some coffee, Mr. Pike Sir?" \[laughter\] \[unintelligible 00:07:32.29\] he's like, "Are you like a Python or a Ruby programmer?" I'm like, "Yeah, you got me..." He's like, "You do realize this is not fully idiomatic Golang?" I'm like, "Yes, now that I'm actually learning Golang, I'm kind of getting that."

\[00:07:48.06\] He was very kind, and that's one thing about the Golang community in general - even when people are explaining how you could do it better, the general ethic, the cultural continuity of us helping each other out and doing so in a fun way... Kindness is really the term. And it still is a relatively small community, but it has been one of the things that's made it especially pleasurable - so many different people contributing, and sometimes what they're telling you means you have to do a bunch of work. But that's not the idea.

We've been fortunate that the community has really embraced Gobot and helped us evolve to the... Just earlier today we hit 2,800 stars on GitHub, we have over 60 contributors, we have a lot of active work being done, having new hardware and software platforms, compatibility with different hardware that's coming out or that's been out and that people are just getting around to using... So it's been especially satisfying to see that people are -- when you're a musician and you play a song, you want people to enjoy it. This idea that you're just doing it for yourself I think is not really true. You're doing it because you want people to like what you're doing, and especially in the case of open source, the way they show that they like what you're doing is they help you make it better in some way. That could be just by trying to use it and running into problems, and saying, "Hey, I need some help." That's really valuable contribution, especially since people are often intimidated to admit they don't know something.

**Erik St. Martin:** So here's a question... As you mentioned, you've got R2 which is in Ruby, and then you've got - I think it was Cylon.js, the JavaScript version... How does it contrast with those - community involvement and the scope or usage of the project?

**Ron Evans:** They all use the same core set of underlying design patterns. It's very much like Sinatra in Ruby was the progenitor of Express.js in Node and Flask in Python, and Noir in Clojure. Every language implemented the same set of patterns for doing RESTful style API definitions. So the contribution that's interesting - or one of them anyway - is that we've identified a simple set of core design patterns that you can use for building applications that have some type of physical real-world component or interaction.
So we started it with Ruby with R2. Not to long thereafter we got impatient and we couldn't wait for people to copy it and we just decided we'll copy ourselves, so we created Cylon.js and then shortly thereafter Gobot. So the core design patterns may be the same, but the actual implementations are very much intended to be idiomatic in each of the languages that the code is implemented in. That means that there are definitely some differences in the way things work internally, where R2 uses the actor model being built on top of something called Celluloid, Cylon.js is running on top of Node.js, so it's using the way that Node handles blocking I/O, and then Gobot is using channels to communicate the information between different goroutines that are running to handle different interactions with hardware devices.

The implementations are very much idiomatic with regard to the implementation patterns, but the net effect is that you're using the same application development patterns. We might think of it as a sort of software factory for building hardware-oriented applications. It's like \[unintelligible 00:12:03.22\] hardware-oriented applications. But the communities are a lot different.

\[00:12:10.08\] The Ruby community sort of stalled a little, because a lot of Rubyist these days are more interested in building web applications than anything else, and also the implementations of the runtime, the things that we needed to do as far as concurrency was concerned, really we could do them best with jRuby or with Rubinius and not with the main line Ruby itself.
With Node, we can take advantage of the way that Node handles blocking I/O, but we're also limited by the way that Node handles blocking I/O. Node is a hack. It's a useful hack, because most of the time the applications you're writing, your problem in life is blocking I/O. If you're writing web servers, your problem in life is blocking I/O. The same way as if you're writing applications that communicate with hardware sensors, your problem is blocking I/O again; this is a different I/O, but it's the same problem. The way that Go handles these things is so elegant and so concurrent...

I did a talk a couple of weeks ago at FOSDEM in Brussels, which is an amazing conference, by the way... It's completely community-organized, so it's sort of a controlled chaos of a delightful kind. There was a fantastic community room for Go. [Francesc Campoy](https://twitter.com/francesc) was there and did a really great talk about the state of Go 1.8. And a few other talks... I gave a talk...

I'm really excited about the prospects for Go's total domination of the internet of things and robotic development world, and here's why. The first one is Go's performance - Golang's team with 1.8, the fact that the garbage collection's worst stop the world time is now one hundred microseconds, with a more typical average being ten microseconds -- microseconds, not milliseconds. This is the kind of real-time programming capability that we need for hardware-oriented applications that are flying drones around and doing aerial acrobatics and whatever else.

The second is concurrency - the Go programmer embraces the concurrency model of Go and is able to benefit from it enormously. The fact that Go can take advantage of all the cores on the multi-core machine and many of the new system on chip single board connected device platforms, R multi-core processors - particularly the ones from Intel, but also ones from ARM - and given how difficult it is to write multi-threaded code in C++... I mean, I've written C++ code for years, but \[unintelligible 00:15:03.04\]

There's a part of my weekly activities - I regularly program in C++, Python, JavaScript and Go, in the same week. That's kind of weird. But the abilities you have to create concurrent code in Go with relatively little effort, when your needs coordinate the interaction between multiple hardware devices in near real-time... And then, the real kicker, of course, is the portability - being able to cross-compile your Go on your Node computer, targeting your Intel Jewel, and you just cross-compile it, SCP it onto the target device and run it.

When you look at the amount of effort it takes to do that in other languages, even C++ with all the different dynamically-linked libs, the fact that things are statically linked in Golang - this is really the triumvirate of core capabilities you need to do device-oriented programming. So if the Go team themselves didn't realize how great it was for this, well we, their audience, do.

**Carlisia Pinto:** \[00:16:09.18\] It's delightful to hear that Go is working so well for hardware, because hardware is hard... There's so many things... I have such bad luck with hardware - whenever I touch it, the thing (whatever it is) breaks. As delightful as it is, I wanted to ask what do you see as opportunities for improvement for Go as far as hardware and IoT?

**Ron Evans:** Well, funny you should mention that... There's really a few things that can make the big difference that currently are either completely lacking or are in the very early stage and need a lot more community involvement. The answer to everything is more community involvement, naturally. The first one is Bluetooth 4.0 a.k.a. Bluetooth Low Energy. This wireless standard is the core of device interactions with a whole category of different devices, and it's really the fundament of the next generation of wireless IoT.

The best work that's been done in this space has been by Roy Lee with the current lab's BLE package. It is amazing how much work Roy has done pretty much almost entirely on his own. I mean, a few of us have helped out a little, little bit. He's shouldering the technical debt for building out the entire BLE stack for Golang, essentially. Really remarkable work that he's done, and needs a lot more support and help from the community.

Another one is running Golang on real-time operating systems like Zephyr or Mbed or FreeRTOS. There's no reason why we shouldn't be able to compile Golang and target it against an RTOS the same way that we're targeting Windows or OS 10 or MIPS (Nine). It's really a matter of somebody dedicating the time to... And there is a lot of documentation on how to build out this toolchain, it's just that we need the community to rally behind that, because then that will allow Go to run on things like the Intel Curie, which is basically a dual processor - it's got the microcontroller and it's also got an ARC processor, so you can run real-time operating systems like Zephyr on it. Mbed, where you can run on a whole bunch of different ARM-based microcontrollers, so it's a way of running Go on much less expensive, much more commoditized-type hardware. That would be a huge step forward.

And having some support for OpenCV, which is a computer vision package... You know, computer vision and machine learning - the other two pillars of the instrumented real world, right? We need the things that are the sensors giving us the data, and then we need these other software-based capabilities to analyze that data and figure out what it means, perhaps you wanna do something about it.

Our role the way that we see it as members of the Gobot team, we're sort of the stewards of the de-facto low-level hardware interfaces for Go at this point. There have been a couple of movements, but whether or not this should be actually part of Go itself is very arguable, just because keeping Go very light and minimal and then adding these types of capabilities... So I don't have a strong opinion about whether or not that should be.

\[00:20:00.26\] What I do have an opinion about is more if we as a community can sort of rally around creating a shared set of low-level hardware interfaces, to make it easier for implementers. We can then not just have Gobot, but potentially other projects that could utilize those same interfaces and share ideas. You know, a single solution or monoculture is not really sustainable. Because of our popularity, we view that our role is to be stewards of other interesting things that other people are doing, which may be in fact designed to replace what we're doing at some point. Or they may be integrated into what we're doing, since it's all about the interfaces and helping the community create those.

It always just comes back down to "Let's share ideas and see what happens." But there's a lot of exciting stuff going on as far as hardware-related activity. First of all, I made a list of some -- just even this week. So I'm Los Angeles this week for the SCALE 15x conference. [SCALE](https://www.socallinuxexpo.org/scale/15x) is the Southern California Linux Expo. it is North America's largest community-run Linux expo, and it's in its 15th year.

**Brian Ketelsen:** Wow.

**Ron Evans:** Really fantastic conference. They had to move from their original home at the LAX Hilton because of the fire marshal, so they're now at the Pasadena Convention Center, it's taking place this weekend. If you're in the L.A. area, I really recommend...

There's lots of amazing talks, Canonical is running UbuCon, which is Ubuntu-focused on the first two days of the conference. Saturday there is SCALE: The Next Generation, which is a day conference track by and for kids. So it's kids giving the talks and attending them, and a bunch of workshops and other activities, and fun giveaway stuff. We're gonna be there demo-ing Gobot, of course, with an interactive laser tag robotic game that we built called TwyHub, which is in its third iteration now. So there's gonna be a lot of fun things going on at SCALE.

But this week has been really exciting in the hardware world. The Raspberry Pi Zero W, which is the new Raspberry Pi Zero with built-in Bluetooth and Wi-Fi...

**Brian Ketelsen:** Do you know what the W stands for, Ron?

**Ron Evans:** Wireless.

**Brian Ketelsen:** Want.

**Ron Evans:** Oh, yeah... I ordered mine by violating air flight rules and actually doing it on my mobile phone while waiting for take-off on an international flight, and just managed to get my payment info in right before the flight attendants forcibly took the phone.

**Brian Ketelsen:** Nice.

**Ron Evans:** Yeah, that's how dedicated I am, my friends. \[laughs\] But yeah, it's really exciting... For 10 USD, it's a Raspberry Pi with all the trimmings AND the built-in wireless. I'm very excited. I've been a big fan of Raspberry Pi since I had -- I was fortunate enough to actually have the first Raspberry Pi in America. I did a demo using the Raspberry Pi the day before it was formally introduced at Maker Faire New York at the Golden Gate Ruby Conference, when we first showed kids Ruby running on the Raspberry Pi. So I've been a big fan for a long time; they're really hardworking.

They've had tremendous community buildup around it. There's all kinds of interesting software that runs on the Raspberry Pi. Gobot runs really well, especially with Go 1.8's improvements substantially as far as Go's performance on ARM... Somewhat less so on x86 just the performance was already quite good.

**Brian Ketelsen:** \[00:23:54.00\] Well, speaking of the Raspberry Pi, there's some metrics... You were mentioning adoption metrics earlier. I have some metrics that I recorded that I want to share with you. Since putting Gobot on my Raspberry Pi, I have used Gobot to control the cook of 68 racks of ribs, 17 briskets, 5 prime ribs and 10 whole chickens. \[laughter\]

**Ron Evans:** Alright, I'm hungry.

**Erik St. Martin:** He's actually keeping count. \[laughs\]

**Brian Ketelsen:** And that's adoption. Those are metrics that matter, Ron.

**Ron Evans:** You know, this is the true quantified self.

**Erik St. Martin:** So I know that we can probably go pretty deep especially into the barbecue stuff - it's something Brian and I love. But before we do that, let's take a quick sponsor break. Our first sponsor for today is Backtrace.

**Break:** \[00:24:43.09\]

**Erik St. Martin:** Alright, we're back, talking with Ron Evans about Gobot, and important statistics about Brian's grilling with Go. During the break you were talking about the puns with Go... I really wanna see an Energizer bunny powered by Gobot, so we can really say it keeps going and goin...

**Ron Evans:** It's so funny... I don't wanna take away any surprises, but there might be some interesting new toys that we will be bringing to Hardware Hack Day at GopherCon.

**Brian Ketelsen:** Oh man, what a tease...

**Ron Evans:** Yeah, pretty much...

**Erik St. Martin:** I really wanna retire from organizing just so I can attend...

**Brian Ketelsen:** I know...

**Carlisia Pinto:** Okay, give us a hint.

**Ron Evans:** So I finally got to meet [Renée French](https://twitter.com/reneefrench) in real life at the last GopherCon, and obviously I'm a big admirer of the gopher, and the talk about the standards for appropriate gopherism, which I know is a topic that has concerned all of us at one time or another... So I've never actually gotten any official yay or a nay for any of these things, although I had sent Gobot T-shirts to both her and Rob Pike (the least we could do). So I never had the chance to ever meet her or talk to her about it, so I was delighted to find that she liked what we had done, and then I told her about the thing that we're gonna be bringing to Hardware Hack Day. That's all I'll give you... \[laughs\]

**Brian Ketelsen:** Wow... This sounds huge.

**Carlisia Pinto:** Okay, sounds very good.

**Ron Evans:** It's relatively small, and yet big at the same time.

**Brian Ketelsen:** Gobot controlled gophers. I'm calling it now.

**Erik St. Martin:** That's be so awesome.

**Ron Evans:** I can neither confirm or deny any rumors...

**Brian Ketelsen:** Oh my god, my email is blowing up. Ticket sales are going through the roof for GopherCon, you'd better get your tickets now.

**Erik St. Martin:** Speaking of which, speakers were announced... If you are listening live - or even by the time you hear this show - if you have not looked, definitely go look at the speakers. We're kind of jumping ahead, but yeah...

**Carlisia Pinto:** \[laughs\] You are thoroughly jumping ahead, but that's cool... \[laughter\]

**Erik St. Martin:** \[00:27:47.02\] One cool thing to talk about when we talk about Gobot and stuff - and even bringing up Brian's barbecue thing - is a lot of people feel like hardware is unapproachable, and Arduino was a big kick back into the maker scene, and people are able to do a lot of things with hardware more easily than they think they're able to. But using stuff like Gobot makes it even more approachable, and Brian can give a good example of that with the barbecue thing he built. How long do you think it took you to wire that together, Brian?

**Brian Ketelsen:** I don't know, I'm having a hard time struggling with the idea that that segue sounded a lot like, "Brian's an idiot, and even he can use Gobot on Raspberry Pi." \[laughter\] But the truth of it is, I was gonna interject and say I'm an idiot, and even I can use Gobot on a Raspberry Pi, so I'm not gonna take it personally because it's true. \[laughter\] It was an afternoon plugging things in and maybe two or three hours of coding to get all of the right hardware dresses, doing the right things at the right time, and then maybe another two or three weeks of on and off debugging, trying to get my calculus algorithm correct and working well. So not much coding time at all, just a lot of perfecting it.

**Ron Evans:** By the way, very elegant PID-based implementation. Kudos to you, sir.

**Brian Ketelsen:** Thank you so much. I sat my kids down at the dinner table while we were doing it and I said, "Don't let anybody tell you you'll never use math after college, because there are important things in life, like barbecues, that might require calculus. So pay attention."

**Ron Evans:** Oh, absolutely. And just to riff on the same idea, the idea that the difficulty of a thing is equal to the goodness of a thing, to the benefit, to the value of the thing is only because of scarcity. Like, if relatively few people know how to do a thing, then it's more valuable. But we live in the open source era. With information, we can have our cake, eat it, and give some to all our friends. It's not a zero-sum game anymore. So there's no upside ultimately to restricting this information. When it was a professional programming priesthood, as we used to call it back at Apple, the people we were against. The people who would wear white coats and would be typically hairy-armed engineers, as a female colleague of mine called them... You know, the people who were going to restrict your access to this knowledge and information so that they could use it and be the ones to be the keepers of the knowledge. But now we live in a whole other era. It's more about the democratization of knowledge, it's about the accessibility of knowledge, and it's about unlocking the things we can do with this knowledge; it's not just having it for its own sake.

It's like having a book about something that you haven't read, but you keep on the shelf. It's not the same thing as actually possessing and assimilating that knowledge and doing something with it. It's a poor shadow.

**Brian Ketelsen:** Couldn't agree more with that.

**Ron Evans:** So crossing this barrier between -- you know, a lot of people look at hardware and think, "Oh, I could never do that." Well, the funny part is if you talk to electrical engineers, they say "Oh, software - yeah, it's really hard." \[laughs\] And I've seen this a bunch of times with lego-first robotics teams, which is a fantastic high school robotics program that's been going on for a number of years. A bunch of people from NASA and a lot of other people are involved in it.

I noticed the teams would kind of bifurcate. They'd have the hardware people and the software people, and the hardware people would be assembling the robots, and the software people would be like, "Hey, can you hurry up, so I can write some code?" And a lot of the work that we want to try to do is to make it so that it's easier for people to get started and to realize hardware development is very much like software development - nobody starts from scratch; you copy and paste your way in. It's just a different set of tooling.

\[00:32:05.15\] If you were designing a circuit from scratch, it is the equivalent in hardware of writing your own crypto algorithm in software. You probably shouldn't be doing it. And if you should, you already know. So our approach is really quite the opposite, to make it as easy as possible. Even the simplest things that you take for granted are things that the novice does not know. So you can't make assumptions, because even those assumptions are barriers for people to do things with them.

The Internet of Things as a term is not one that I'm especially fond of... The term 'hacker', it's been adopted by popular culture - like the term 'drone', for that matter - so I have to go along with it, but it's a very, very powerful set of technologies to instrument the real world. So who's going to be the beneficiaries of that instrumentation?

Well, if it's a traditional closed source, siloed sort of world, it's not going to be the people who are being instrumented. So if we want -- you know, very much like Douglas Rushkoff's Program or Be Programmed, well the stakes just went up by several orders of magnitude, because now you literally can't hide, because the whole world is being instrumented. So what are we gonna do about this? Well, we're software developers; we're gonna program our way out of it. And how are we gonna do that? Well, open source - that is our set of philosophies, which are then of course represented by an enormous set of code that - depending on the licensing and such - you can draw upon for different purposes.

We've tried to make it possible with Gobot for developers to actually use Gobot to build commercial things and sell them, because open source is not about a bunch of companies just not having to pay for things. That doesn't work. That's how maintainers get burnt out, feel taken advantage of, become resentful, retire from the work that they've done, and we're all at a collective loss.

We're very lucky at Hybrid Group because we get to do a lot of open source development that we're paid to do.

**Erik St. Martin:** Contributing to open source is difficult too, because even just as consumers, people's natural instinct is to file an issue, rather than a pull request. Often times the reason for that is they feel like they're not qualified enough - they don't know enough about the project or maybe the language to contribute, and they're worried about contributing something that's not worthy of being pulled in. I think that it misses the point sometimes too, where -- there's two factors: a solution to the problem is often better than no solution to the problem, and somebody might be able to help whip it up to shape. And people are grateful... When you have an open source project and somebody's helping, you'll often help coach the person to make it right, and they can learn and then they become a valuable member of that community through learning from other people's advice, who have experience on the project. A lot of people don't feel confident enough to just send a pull request.

**Ron Evans:** I think that's really valid. The "I'm not worthy/I'm not good enough" - not realizing that every single observation is worthy of being noted, especially the initial experiences of things that we are all already so schooled in that we don't think about them. It could be something as simple as when you have wires, the red one is usually the plus or the hot electricity, and the black one is the minus, meaning it's the ground.

\[00:36:09.01\] We've seen all this when we know how to read schematics and wiring diagrams, but if you're just getting started and you don't know that, "Oh wait, you mean the colors mean something?" It's still just the same wire, but we use the colors to represent a significance so that we can actually understand what's going on, but these are customs. They're not strict rules per se... One piece of wire being the same as another, except it's to the color of the shield housing on it...

**Erik St. Martin:** Well, it's similar to the software world, it's an idiom, right?

**Carlisia Pinto:** I was gonna say that, yeah.

**Ron Evans:** Exactly.

**Carlisia Pinto:** The idiom of hardware.

**Ron Evans:** Exactly, and so very intelligent people are suddenly either in the field positioned in the corner because they suddenly feel like, "I'm not smart now... I was smart earlier today, and now I'm not smart anymore because I couldn't make this wiring work."

The alternative to that is if we can be more compassionate towards that experience by addressing it and encouraging people. The emperor's new clothes effect, if you will... Pointing out that "Oh, I believe there may be something wrong with the Getting Started guide." "Oh wow, the Getting Started Guide - where is that? We have one of those?" So you find burrs and rough edges and things and you smooth those over, and instead of being a sad person who feels now that they're not probably as smart as they were earlier, instead they do something that may seem insignificant, like blinking an LED... But it's not about the LED blinking, it's about what that represents. It's about the fact that you've taken this first step into a larger world, and now the next step is a little bit easier because you've already taken that first one.

If anything we wanna do with Gobot, it's to try to encourage more people to have that fearless explorer's mind, because we really don't know what the next great ideas are. That's what they're supposed to come up with.

**Erik St. Martin:** I retweeted somebody a couple of days ago too, and it really kind of resonated with me. It basically said something about like if you're writing documentation or a tutorial or something, to banish the words *easy* and *simple* from that, because it's not easy or simple if you've never done anything like that before. I think that's true... And another one I'll add is the word "*just*" - "you just have to..." It puts people in a position where they don't feel like they're capable, or that when they're struggling that it's just not for them, because it should be easy.

**Carlisia Pinto:** Those words are immediate triggers for *impostor syndrome*.

**Ron Evans:** I'm going to review our documents, because I am very guilty of this. I thought that I was graciously inviting people by trying to make the way seem easier, but if I'm having the opposite effect then it's my responsibility as a maintainer to try to do something about it, and of course that just means editing some text.

**Erik St. Martin:** I guess it's difficult, because when you use verbiage like that you can say something's easy to make people feel confident that they can jump in. But the other side of it is the negative factor if you struggle with it. If I read something and it says, "Oh, this is easy" and then it's not easy for me to do, I feel like somehow I'm missing a ton of foundational knowledge. Because it gets really hard... If you've done similar things it's easy; if all of it is new to you... If somebody tells you to set up a web server and you've never looked at a Linux machine ever... It's not like there's any individual part of that that's overly difficult, but it's a lot of foundational stuff to learn that you don't know, and as you run into stuff.

**Ron Evans:** \[00:39:59.06\] Yeah, remember the "In a Nutshell" series of books? I had a bunch of them. The one that was like five or six inches thick was Linux In a Nutshell. You know, just five or six hundred pages of stuff you gotta know; just the bare minimum... \[laughter\] If you don't find that intimidating, you're probably a fraud. I find that intimidating. Like, "Oh, wow... I'm supposed to know all this stuff just to have the most minimum necessary knowledge?"

I've seen recently the confessional tweets that people... I didn't do it - not because I was against it or anything, just because I didn't actually get around... I thought it was really interesting that people felt the need to confess. Some of them were humble brags and some of them were more legitimate acknowledgements of "We're all internet-based programmers." What does that mean? It means if we don't have an internet connection to look something up... I mean, I for one don't know much except how to type in the right search. Because there's too much knowledge, and certainty is not an indication of mastery. Certainty is an indication of an intermediate level - "Oh, it's definitely this."

Mastery is "Hm, it could be A, it could be B, sometimes it could be C... Or it could be something else entirely." Mastery indicates a certain uncertainty and a willingness to approach solving the problem wherever it happens to lead. But you have to have confidence for that, and you never get that confidence if you keep running into obstacles. And you never get to solve any of them successfully. You just feel like, "Oh, maybe this is not for me." I've seen an unfortunate tendency for that to happen.

Programming is a very intellectually demanding occupation, and if you've never had a sense of burnout or any type of need for dealing with your mental health as a part of being a programmer, don't worry, you will. It's coming.

If you've a professional athlete and you are asked to be in a game, you have trainers and nutritionists and doctors... They are making sure that you are fit, and if you have an injury they check you out. We as programmers are expected to perform essentially at an olympic cognitive level every day, and typically "Here's a coffee and a doughnut. Go!"

**Erik St. Martin:** It's interesting, because the tech world for me -- I don't think I've ever felt so much gratification and so much exhaustion all at the same time. You can be so excited about the stuff that you're learning and the stuff you're doing, and like you said, you can also experience those lows where you don't even know why you're just mentally exhausted.

**Brian Ketelsen:** Not only does the software not compile, but somehow you're supposed to do 16 weeks of coding before Friday.

**Ron Evans:** The whole trick to a happier life is your code works on Friday afternoon and you stop coding for the weekend. If you can achieve that... But of course, you're like, "Oh no, I have to mess with some other code on the weekend, just because I need the constant emotional peaks and valleys of this... Because I'm addicted to coding."

My kids have told me, "Dad, you're addicted to coding." And I say, "I can stop anytime I want. I'm gonna stop for just five more minutes as soon as I finish this thing." \[laughter\]

**Brian Ketelsen:** Just ten more lines of code...

**Ron Evans:** I swear, I could stop anytime I want... Just one more hit -- I mean, line of code.

**Erik St. Martin:** It's a puzzle, it truly is. "I'm gonna figure this out!"

**Ron Evans:** So it's definitely something that we have to learn more about as far as the human part of code, and it's the only part that matters. You know, I'm a humanist; I work with technology as means to an end, towards a happier human being. The point is not the technology, it's what it does for us. We really can't forget that.

**Carlisia Pinto:** \[00:44:10.01\] Absolutely. I wanted to ask you, Ron, what are the more popular uses for Gobot, as far as you can tell?

**Ron Evans:** Well, on the one hand you have the makers - the people who are hackers, who want to put together some individual, bespoke solution to a particular problem they have. You could maybe go buy a cheaper, prefabricated version of your garage door opening system, but then you would lack the satisfaction of having done something. So that's one on the maker side, and it's not about reproducing the thing, it's about just making one for yourself.

But then the other side that's really interesting is if you're going to build a connected device product, you don't have a lot of options as far as -- I think we kind of talked about that earlier... You only have a certain number of options as far as languages and technologies. You've got the rugged, traditional approach of C or C++; the newer languages that people are looking at really are Elixir, Rust and Go. Each of them have perhaps certain strengths or weaknesses, but I don't think any of them has had the success that Go has had, in part because of the simplicity that it provide.

The way that we can tell when a project transitions over from maker weekend to professional is when pull requests are coming in during the week, and they include things like, "I gotta get this done for my boss by the weekend." You know, those kinds of dead giveaways that, "Hm, this is not just a maker project." We don't always have visibility of those things, and then a number of the ones that we've worked on we can't talk about of course, because you know...

Hybrid Group is able to afford to do these things because of course, like all good frameworks, we've extracted it out of the work that we've done actually creating hardware products for companies, some of which have shipped, some of which have not. So really that's the part where the exciting part of the future is. It's not about the cool gadgety type stuff, it's about the slightly more mundane instrumentation of the real world to improve incrementally human problems a little tiny bit. To make processes a little tiny bit more efficient, so that things can be less wasteful or cost less, so that the benefit can then result in utilizing less resources in order to provide a higher quality of life.

We manifest that today by way of commercial products. That is the place where we're really excited about Go and Gobot - bringing it to the industrial strength... You know, we would say that Gobot is for professional, hardware-oriented developers who want to build a real product. That's really what for us is the ultimate... If we can help create a thousand companies that are all able to make money by building hardware-oriented products that are doing great things for their customers and their users... If municipalities and governments can use them to build more open and more efficient instrumentation to improve their civic life - if we can do these things through open source then it's kind of like... I think Winston Churchill quipped that we have capitalism, the most efficient form of economy, so that we can have democracy, the least efficient form of government, or something like that. \[laughter\]

\[00:47:53.08\] I may have attributed the quote wrong, I may have even made the whole thing up, but I view open source the same reason. It's not so that nobody has to pay anything and gets it all cheap -- for what purpose? So we can just make extra money? Yes, perhaps... But also for more intrinsic solving of big problems and improving the human condition. That is to me the end game of open source - it's the roads and bridges, it's the infrastructure of the 21st century; that's the open source that the world runs on.

Ultimately, that perhaps becomes the most valuable thing in human society. I don't know.

**Erik St. Martin:** Now, I have some questions about the future of Gobot, but first let's take our second sponsor break. Our second sponsor for today is The Ultimate Go Training Series.

**Break:** \[00:48:48.02\]

**Erik St. Martin:** Alright, and we are back, talking to Ron Evans from Gobot. Brian, you were mentioning that you have an anecdote as well...

**Brian Ketelsen:** Yeah. Ron, you mentioned that there were two types of projects: the bigger, foundational projects, and then the fun "I threw something together for the weekend kind of things." This one that I saw last time I was out in San Francisco, it really hit peak hacker for me; it was a small programming company that had an office without a doorbell, so they went out and they bought the pusher button for the doorbell and a Raspberry Pi, and they hooked the Raspberry Pi up to Slack, so that when you push the doorbell, the Raspberry Pi announced in their Slack channel that somebody was at the door... Because everybody in the entire office wore headphones, and nobody would be able to hear a damn doorbell anyway.
For me, that was the peak of complete hackerness - using that to engineer a social problem with the Raspberry Pi and Gobot.

**Ron Evans:** In a reasonably non-interruptive way that actually corresponded to the needs of their office.

**Brian Ketelsen:** Right.

**Ron Evans:** That's beautiful.

**Erik St. Martin:** Now let's talk about the future of Gobot. What's coming down the pipe for you, aside from the thing that you can't tell us about for GopherCon? What's the future look like? Is there anything you're excited about, is there anything you particularly wanna work on to expand Gobot into new areas?

**Ron Evans:** Gobot continues to evolve. We pushed really hard for the 1.0 release right before the holidays at the end of last year. One reason was we really wanted to give people a more solid experience for those who choose to use that time of the year (vacation time) to work on individual projects or self-knowledge or development.

I know some people have been critical about that sort of thing... I personally think -- you've gotta do what you've gotta do, and if that is the time when you're able to do that personal professional development in order to sustain your own career, by all means; that is an excellent thing to do with one's time.
\[00:51:57.05\] So stabilizing the external interfaces was really important for us and now that we've done that, the contributors have been doing amazing work - both some of the core work for interfaces such as the I²C interfaces. We were able to do some really sophisticated things with multiple different kinds of instruments like digital compasses and barometers and accelerometers and things. That's all due to contributors.

A lot of the work that we're gonna be doing is going to be improving the implementations of some of the core stuff we've already done, but without changing the external interfaces. [Bill Kennedy](https://twitter.com/goinggodotnet) (Ultimate Go Bill Kennedy, by the way) has been extremely helpful mentoring some of the internal refactorings that we've been doing, and he spent a lot of time thinking about package-oriented design, and he's been really helpful guiding us through this process of reassembling the plane while in flight, so that we're better situated for this current year of development.

We've been putting out a release each month consistently for the last couple of months, collecting together the new hardware changes as far as this internal refactorings. Next coming is the GPIO interfaces and then we'll be adding SPI interfaces, and UART interfaces and a couple of other standard types of device-to-device integration interfaces. That way we can add on top of that all of the different capabilities of, as I mentioned, digital compasses, accelerometers, barometers, temperature sensors... All the different instrumentation.
Ultimately, Gobots will make it possible to do a very modular style of development for the hardware side of these applications. Adding more support for new types of hardware that are coming out - that's very much on our roadmap, but also building up the tooling that you need to go all the way to full production. We've been working with a number of people from Canonical for a while on -- I think it used to be called Ubuntu Snappy Core, but now it's called Snapcraft. Snapcraft is Canonical's approach towards application packaging and sandboxing.

There's also some other really interesting projects - Resin.io for deployment; there's a few other ones... The idea being that if we build up the right tooling, we make it a lot easier for professional developers to build some type of commercial product and then not just deploy it, but also keep it maintained. There's no such thing as a one-off internet connected device.

If there's anything that we should've learned from the Mirai botnet, or that we should've learned from some of the recent debacles like CloudPets, or Hello Barbie - we need to take these systems seriously, even if they look like toys. In fact, the toys are small soldiers ('80s movie)... Watch out for the toys! They'll come and get you if they get punned, the same as anything else will.

Denial of a service attack mounted from your toy doll collection is not something you expect, but it's coming if we don't apply professional development practices to literally every single connected device. Gobots future is, if we do it right, that we build the tooling for the whole next generation of connected devices and build it on top of Go. That seems to be the strongest contender at this point, from all the stuff that we've seen, except for something completely novel that hasn't popped up into our serious radar yet. But as far as the best bet going, that seems to be it.

**Erik St. Martin:** \[00:55:59.06\] Yeah, there's an entire website dedicated to just finding random IoT things on the internet, that you can just browse around and find people's webcams that have default credentials... Scary times.

**Ron Evans:** Yeah, and we have to take responsibility for that on multiple levels. One is we as developers have to use serious professional practices and help determine what those are within ourselves, or else they're gonna be applied upon us from outside by people who don't understand. That will substantially reduce the pace of the innovation and could even end up regulating things like open source if we're not careful. That's one aspect that we need to take seriously.

The other is someone needs to pay for this stuff. As a consumer, it's unreasonable to expect that you can buy a hardware product that comes with infinite lifetime online technical support and updates unless that's priced into the product to begin with. So it's kind of a two-fold... Companies need to be responsible about actually building products with that, but consumers need to actually be willing to pay for, or else perhaps the products need to be a little more expensive, or simply not connected.

I haven't come up with a good term for it, but we need objects of independent utility, too. We need to give the consumer control over these things, and that typically has not been what we've seen on the web. Have you gone to any web pages lately? \[laughter\] The number of web trackers is like -- there's trackers on trackers on trackers. So you just take that same thing, but you know... Now it's in your door, in your doorknob, and we're living in the Philip K. Dick novel where your doorknob is demanding that you pay the bill for the monthly service, or it won't open the door.

**Erik St. Martin:** Yeah, it's getting crazy with that. Even just because we carry these things around on us and they emit data... Plenty of stores are doing it now because your phone is constantly sending out beacon frames and things like that, looking for wireless devices, and it's advertising its MAC address and things like that. They can actually pair you... When you go to the counter, they know by your credit card who you are, and they know because your phone is nearby, emitting data, that you're that person, and now they can track you through the store. It's insane.

**Ron Evans:** And if there's a benefit to you, in the sense that they know you're trying to find the diapers, and they're gonna lead you directly to them because you're in a hurry because it's late at night, and the odds are you need to get home real quick. There's a benefit to that scenario, versus the "We know you need diapers real bad, so we just added $2,50 to the price. They're waiting for you at home, man!"

So we have to be very careful, because the perverse incentives that we've seen around the behavioral economics and the kind of opportunistic pricing models... We have to be very careful that we don't ultimately create this sort of surveillance society where all the benefit flows directly to the shareholder class, and none of it is going to the consumer class. That's not a just application of this type of technology, even in just simple economic terms, because the consumers are the ones producing the data; they shouldn't be able to benefit by it in some way.

Maybe we need licensing models where you're able to turn on or off the ability of sharing of data, so you can decide to whom and to whom not is it shared on a slightly more discreet level. I know that [Brave](https://brave.com/) (the browser) has tried this type of micropayments approach. We may need that in terms of internet connected devices as well, or else we're going to have these perverse incentives that create warped economics around these devices, and then perhaps not apply them to the right things.

\[01:00:09.25\] If we're putting all our emphasis into selling more stuff and not enough into reducing utilization of scarce environmental resources, for example... You know, just because one has a big benefit and the other one has no real immediate payoff - that just magnifies the kind of problems that technology has in part created, as opposed to helping alleviate them. I'm a utopian thinker, but like Buckminster Fuller said, it's utopia or oblivion.

**Erik St. Martin:** I think we're about running out of time. Do you guys wanna do some \#FreeSoftwareFriday? Did I lose everybody?

**Carlisia Pinto:** \[laughs\] Okay, let's do it.

**Brian Ketelsen:** I was on pause. Or on mute. Yes.

**Erik St. Martin:** So you gave up on everybody now... Before the show it's just Carlisia, now you're just like, "I'm done, I'm out."

**Brian Ketelsen:** Yeah, just muting everybody... No, I had to cough. It's allergy season here in Florida. Your family's gotta be having the same problem.

**Erik St. Martin:** Oh, yeah... The pollen.

**Brian Ketelsen:** It's terrible. It's like raining green pollen.

**Erik St. Martin:** So for everybody who's new to the show, every week we like to give a shoutout to open source authors or projects that have been making our lives easier, just because often times they only hear from us when we want more stuff from them. Carlisia, do you wanna start this week off?

**Carlisia Pinto:** Yes, I don't have a software or an app per se, but I do wanna give a shoutout to Francesc Campoy. He is the most enthusiastic gopher that I know of, and he has this [Just4Func](https://www.youtube.com/channel/UC_BzFbxG2za3bp5NRRRXJSw/featured) YouTube channel. This is actually what I wanna give a shoutout to, because every so often he puts up short videos, and they're really well done; he'll be coding something and he'll record it. If you don't know about it, you should check it out.

**Brian Ketelsen:** I love his YouTube channel. Those are so awesome, I love those shows.

**Erik St. Martin:** I agree.

**Ron Evans:** I agree.

**Brian Ketelsen:** Alright, I'll go next. This is a little one... It's a project I fund on GitHub when I got tired of trying to figure out how to exclude my vendor directory from running Go commands. It's a tiny little project called g.. , and it's from somebody who's GitHub username is mibk - GitHub.com/mibk-g.. It's just a wrapper for the Go command that excludes your vendor directory. So you can run gotest or g..test instead of gotest, and you don't have to worry about the Go program descending into your vendor directory and all of that stuff. So it's a cute little wrapper, handy tool and very useful.

**Erik St. Martin:** Awesome. How about yours, Ron? Did you have a project you wanted to shout out to?

**Ron Evans:** I have a lot of projects I love, but lately I've been really feeling the love for [NATS](https://nats.io/), the messaging system. They have a bunch of great open source software projects, clients and servers written in Go, on GitHub. They also have a really great community that's been adding integrations between Gobot and NATS. I've seen them participating in lots and lots of events and doing lots of great things for the community in addition to the code, so big kudos to them.

**Brian Ketelsen:** Yeah, I will second that. Every time I turn around, there's somebody from the NATS community helping out somewhere. In fact, I think maybe it was last week or the week before we shouted out NATS on \#FreeSoftwareFriday, too. It's nice. Great community-focused company at APCERA.

**Erik St. Martin:** \[01:03:47.03\] Mine for this week is by somebody named OJ Reeves. I'm gonna continue my trend with security tools. It's called Gobuster; it's on [gitHub.com/OJ/gobuster](https://github.com/OJ/gobuster). It's like a replacement for Dirb or Dirbuster, basically to brute-force innumerate directories for websites. Basically, you can give it a word list and it tries to find cgi-bin or cPanel or things like that. So that's a super cool tool for scanning web servers. Extremely fun to see what you find, too... With permission, of course.

**Brian Ketelsen:** With permission. Consult your lawyer before hacking any websites, please.

**Erik St. Martin:** Get your get-out-of-jail-free contract first. Alright, so with that, I guess this is a wrap. If anybody wants to meet and play with fun Gobot stuff, definitely go to the community day at GopherCon; there's always a big Gobot room, and Rob brings tons of stuff... I don't even wanna know how he gets to the airport with all of it. \[laughter\]

**Ron Evans:** I just turn on all the drones at once, and they fly me there.

**Erik St. Martin:** I put too many chargers in my bag, and [TSA](https://www.tsa.gov/) \[unintelligible 01:04:59.10\]

**Ron Evans:** I have a collection of TSA notices... Actually, I was thinking about putting into each of my flight cases a small transparent envelope where I would put all the notices and then put a little sign that said, "TSA, please place notices here." \[laughter\]

**Brian Ketelsen:** That's brilliant. Ron, you've been a big supporter of our community day at GopherCon since the first year; that's when I met you for the first time, so it's been a real pleasure knowing you all these years and we really appreciate the fun and excitement you bring to community day. I think it may be the thing that people look forward to more than anything else at a GopherCon - which is sad for us, but good for you. We really appreciate it.

**Ron Evans:** Thanks. It's truly a labor of love. The excitement comes from the people; I'm just one of the people in the room, getting to draw off of that same energy and learn and see fun things that people do and get creative ideas... I look at it as a hardware jam session. It's really fun, and if you got to have some fun or learn something, then it was a great experience. It's fantastic seeing people's faces light up at the same that their LEDs light up. I will be bringing a lot of hardware. If you have hardware, bring it.

If you wanna do hardware hacking that's not Gobot, bring it. If you just wanna hang out and play with toys, come on down. It's gonna be fantastic.

**Erik St. Martin:** [JBD](https://twitter.com/rakyll) was hanging out there last year too, but yeah, even if you don't have hardware experience, come in. Lots of people are teaching people, and playing with stuff and collaborating. I think you did some sessions or something last time, where you were kind of walking through steps. I remember seeing a board in there.

**Ron Evans:** Yeah, we had like a self-directed thing, if you wanted to do that. Or if you just wanted to check out some hardware, like library style, lending lab style. We also had some hardware to give away to people, which we typically do... It's sort of part of my Santa Claus complex. \[laughs\]

**Brian Ketelsen:** Yeah, and I can't stress enough how beginner-friendly the whole Gobot - and Ron specifically - is. I am not a hardware person. I don't understand electronics, I don't understand hardware, and I built a complete controller for my barbecue grill using Gobot, so if I can do it, everybody can do it.

**Ron Evans:** Which, by the way, I'm gonna show up one of these days for dinner.

**Brian Ketelsen:** You should, because my grill is so big I can cook enough for the whole neighborhood.

**Erik St. Martin:** Yeah, if you're ever in Tampa...

**Brian Ketelsen:** ...just give us a call.

**Erik St. Martin:** We'll send you home with some.

**Ron Evans:** At least to the airport.

**Brian Ketelsen:** You know, a rack of ribs will get you through TSA every time.

**Ron Evans:** I'm not giving them my ribs, you can forget that! \[laughter\]

**Erik St. Martin:** Yeah, just basically let them rest in the aluminum foil, wrap them in a towel and that's where you put your notes. "TSA, you're probably hungry. Here's some ribs." \[laughter\]

**Ron Evans:** Yeah, but then my cases would smell like that, and I would get really hungry and the ribs would be gone by the time I got to the other end. Just the delightful, smoky scent of Golang-powered barbecue would remain.

**Brian Ketelsen:** \[01:08:15.26\] That's what my house smells like.

**Erik St. Martin:** It'd be kind of hilarious, though... If you had them layered across the top of your suitcase, four or five racks of ribs, and it's like, "TSA, take two, leave three, please." \[laughter\]

**Ron Evans:** I don't know if they can handle that kind of test. Who could...? It's kind of like the cookie test of little kids, to see how long their willpower is. That's not fair.

**Brian Ketelsen:** No, it's not right. Not with Go-powered barbecue.

**Ron Evans:** Yeah, and they're in an airport... How good is the food? You show up with some smoky barbecue... I guess that's the time when you sneak in the other TSA entrance with your evil drone, where like "They're all eating barbecue... Mwahaha!" I'm too much of a white hat for that. It'd be much simpler, but we have to go under the light side of the force with our technology. \[unintelligible 01:09:07.16\]

**Erik St. Martin:** Alright.

**Brian Ketelsen:** Alright, well thanks again, Ron.

**Erik St. Martin:** Yeah, huge thank you for Ron coming on the show. Thank you to all of our listeners listening live and to everybody who will be listening to this in the future. Definitely share the show with family, friends, co-workers... Check out the cool new changelog.com/live when we are live broadcasting if you wanna listen. We are on [Twitter](https://twitter.com/GoTimeFM). If you wanna be on the show, you have a suggestion for people to be on the show - [ping](https://github.com/GoTimeFM/ping) us, and as always, a massive shoutout to our sponsors, Backtrace and The Ultimate Go Training Series for helping make this show possible. With that, goodbye, everybody. We'll see you next week!

**Carlisia Pinto:** Goodbye!

**Brian Ketelsen:** Goodbye!

**Ron Evans:** Bye, everyone.
