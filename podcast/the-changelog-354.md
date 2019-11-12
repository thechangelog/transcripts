**Ron Evans:** It's been more than a five-year mission, actually, to seek out new life, and new civilizations...

**Jerod Santo:** \[laughs\]

**Ron Evans:** I don't know if we're boldly going; we're more like creeping up timidly...

**Jerod Santo:** You're getting close to boldness. You're getting more bold, you come out from underneath your bunker...

**Ron Evans:** Yeah, this was my first time out in a while, from the workshop... I ensconced myself after embedded world in March, in Nurnberg, Germany. Great conference for embedded. That was the first public appearance for Gopherbot. So I went around in the whole conference with Gopherbot, and... It's amazing how a conference full of blinking LEDs and robots will literally stop in its tracks when they see a cute robotic Gopher plushy.

**Jerod Santo:** \[laughs\] So it was a pretty big hit, huh?

**Ron Evans:** It really was, surprisingly. I mean, I thought it was cool, but I thought it was weird... It's like an attention-getting device, but in the form of a robot.

**Jerod Santo:** It's funny, I didn't even realize -- so my battery died, but these things get so much attention... And they're just marquees. That's gotta be even more so...

**Ron Evans:** Well, also this is actually very programmable. All the software is also open source... I've just put the GitHub repo public, so it has all the TinyGo code... Which is fairly high-level. We were trying to create an API that people who were not really Go programmers could still decipher and use to program this device.

Basically, antenna.blink; so you could say "go antenna.blink" and it just launches a goroutine with a blinking antenna, so it just keeps blinking while you do your other things. That's the big benefit of using Go, is its concurrency. And if your Go is not concurrent, why use Go? I mean, it's still nice, but this is a big part of Go's...

**Jerod Santo:** Appeal.

**Ron Evans:** \[00:03:52.01\] Well, the brevity of the language; the fact that there's very little to it as far as number of keywords... That's really great when you're writing a compiler, because it means there's less things that could go wrong - less misinterpretations, less ways to compile code... TinyGo has a lot of work to do in order to take the Go SSA code -- well, the way TinyGo works is TinyGo takes your text code, your regular Go, and it uses the Go standard libraries, which themselves are written in Go, to take and convert that to single static assignment form (SSA). So normal Go at that point takes the SSA and compiles it to the binary code.

This is where TinyGo kicks in and says "Let's convert that SSA form instead to LLVM's intermediate representation. LLVM is a framework for writing compilers.

**Jerod Santo:** Yeah.

**Ron Evans:** It's being used by a few languages people might have heard of, like Swift, or another little language that is getting a lot of attention called Rust... And a bunch of other cool languages; a new one called Zig, which looks pretty interesting for WebAssembly... And many other languages, and TinyGo as well. So we take and we can then target whatever one of the LLVM back-ends (of which there are many), of which many of them are very, very small chips, microcontrollers, like the Arm Cortex-M0 or M4, which are types of chips that Go could never run on. They only have maybe 256k of memory total, and a Hello World Go program is 1.1 MB, so there's a gigantic disconnect about what you could even fit on the chip, let alone that it's not designed for that process or architecture, and there's no operating system on most microcontrollers; they just run bare metal.

**Jerod Santo:** Right.

**Ron Evans:** So there was literally no possible way Go could run in these environments until my colleague Ayke van Laethem -- he's actually the creator of TinyGo... I'm like the first follower; never mind those 10k lines of code I wrote... You know. I'm a good follower.

**Jerod Santo:** \[laughs\]

**Ron Evans:** But he's the creator of TinyGo originally, and I discovered it through -- I don't even remember. It might have been through Golang Weekly, or just somehow it popped up through the internet into my attention; I took one look, and I got very excited. I've been wanting to do this for five years. I could never convince anyone to help me, and here this single individual had already done a substantial amount of the heavy-lifting.

We have a team of four official members. We have 25 other contributors (I believe) now... But Ayke handles the compiler heavy-lifting, I'm sort of responsible for the hardware, peripheral interfaces, and I'm a spokesmodel for the group, so I do a lot of the talks and promotion, and just generally yell for attention... Then Johan Brandhorst does a lot of amazing work with TinyGo and WebAssembly; Justin Clift is also doing amazing work, even though he's not an official member of the organization yet... If you're listening to this, I just haven't gotten around to sending you an email, because I know you've been busy...

And then [conejoninja aka Daniel Esteban](https://github.com/conejoninja) who is also Spanish, who has basically been doing all of the amazing work with all of the displays. And then we have a lot of other contributors, and over 200 people on our Slack channel now... It's sort of taking off by leaps and bounds. And that really segued nicely to the big announcements we made yesterday here at OSCON. We had three huge things that came out yesterday; we thought OSCON was a great place for us to launch these things. It's the center of the legitimate open source world, if you will, in the U.S.

\[00:08:06.07\] So the first one is TinyGo powered by Arduino. We've been developing a very special relationship with Arduino. They're the pioneers of open source hardware, they're a really cool company. "Arduino is love", they say, and they really mean it. They've been incredibly helpful to us.

We have TinyGo running on the new Arduino Nano 33 IoT chip. That particular board is really interesting, because it has both a microcontroller, as well as a separate Wi-Fi chip, so it's really geared up for the internet of things. If you don't have internet, it's just a thing. It's not an internet of things.

**Jerod Santo:** Just things, yes.

**Ron Evans:** Internet thing, something like that.

**Adam Stacoviak:** Right.

**Ron Evans:** So people ask "That means you can run the net package on TinyGo?" No, not yet. However, since all of the net package is implemented in the form of interfaces, we can implement our own version of those interfaces, designed specifically to communicate with the serial interface with the serial interface with this Wi-Fi chip. So it's the same code, you just say "package net" - in this case it's the net package that's part of our driver for the Wi-Fi chip... And then you can do "net.dialTCP", or "net.dial". We support both TCP and UDP connections. And because of this, we were able to implement the same interfaces as the paho-mqtt client. That's the official MQTT client from the Eclipse Foundation, which is used whenever you wanna talk to an MQTT machine, the machine messaging broker from Go.

**Jerod Santo:** Okay.

**Ron Evans:** So it's the same interface. So you take your regular Go code that you've been using on your embedded Linux, and you copy and paste it into your new code that you're writing for your microcontroller, change a few things based on your authentication, and it just works. So it's a secure connection from your chip, from your Arduino Nano 33 IoT chip to your secure messaging broker in whatever cloud service you're using. That is table stakes for the internet of things. If you don't have that, you're not ready.

So that was sort of our, "Here we are, we're ready for our close-up, Mr. DeMille."

**Jerod Santo:** So you're ready for IoT. \[laughs\]

**Ron Evans:** The other two announcements were the future... The future's future. So the second one is the TinyGo Playground.

**Adam Stacoviak:** Okay.

**Ron Evans:** The TinyGo Playground is like the Go Playground; it's a website. You can find it at play.tinygo.org. If you look at it, it looks very much like the Go Playground - it's a web page that you can enter in the left pane your Go code, and in the right pane you see the console output. But it's using TinyGo.

The interesting part is we also support using our hardware boards emulated, simulated within this web browser. So you write your TinyGo code on the left pane, and it actually is compiling to WebAssembly, which is then executing against the simulator in the browser itself. So when you see the little JavaScript LEDs blinking, it's because your WebAssembly code is talking to the simulator in the browser to make them blink.

**Jerod Santo:** That's cool.

**Ron Evans:** And you can click on the Flash button and it downloads the hex file that you can flash right onto the real hardware. It's the actual binary for your code.

**Adam Stacoviak:** Wow.

**Jerod Santo:** That's cool.

**Ron Evans:** So then the third thing, which is related to the second thing - a lot of people have been getting very excited about RISC-V. For anyone who hasn't heard of RISC-V or doesn't know what it is, just because in the flurry of buzzwords that I tend to pontificate it's hard to keep track of the acronyms, especially when there's four-letter acronym plus a number... So RISC-V does for processors what open source software has done for the rest of the open source world - it actually provides open source instructions set and hardware reference platforms. So if you wanna build a processor, you don't have to...

**Adam Stacoviak:** \[00:12:15.02\] ...build your own.

**Ron Evans:** ...ask Intel "Please build a processor that you'll sell me", or go to Arm and say...

**Adam Stacoviak:** You can actually program against it.

**Ron Evans:** "...please let me license this for a lot of money, so I can build them." Those are both really good options and they've worked quite well, but there's a new, third option which is very exciting to me, because we're really at the first steps of a Cambrian explosion of unique silicon that does very efficient things for processing, deep learning models, or other types of parallel processing where doing some silicon optimization can result in a substantially better amount of computation per watt.

The reason why I care about that is for two reasons. The first one is battery life. If we're talking about edge devices, we need to save on batteries. And the other one is we need to stop using so much electricity in the world. We need to reduce our power consumption, just so that we can preserve resources. The external costs of burning carbon for a data center are not measured in your cost -- I saw [searls](https://twitter.com/searls) the other day, he posted one of his provocative tweets, as he tends to do (great guy). It was "Has anyone done a calculation of the carbon cost of your continuous integration servers?" Dead silence on the internets, like "Whoops, you just pulled the covers back, and we don't like how we look right now... Don't answer that question..."

**Jerod Santo:** Right.

**Ron Evans:** I think about that a lot, just because I think you can't leave the lights on all the time where I come from. The electrical bills are a lot more expensive. Anyway, RISC-V is a really important new technology, and we just announced experimental support for RISC-V and TinyGo, so you can compile for the SiFive - one of the companies that's manufacturing silicon based on this. They have a reference board called the HiFive1, that is super-hard to come by, because the crowdfunding just finished, and if you didn't order from that, you have to wait for their first production run, I think... But it's actually a microcontroller board based on RISC-V.

**Jerod Santo:** Okay.

**Ron Evans:** So we have experimental support in TinyGo for this board, and it's also in the TinyGo Playground. So if you go to the TinyGo Playground and you click on the dropdown to choose the HiFive1, it's simulating that. And if you click on the Flash button, you download the hex file with the RISC-V code you can flash on your board. It's basically next year's demonstration, but it's today, and it's all in our public repos right now. You're welcome.

**Jerod Santo:** Thank you very much, Ron...

**Ron Evans:** We haven't left the lab that much over the last few months. We've been kind of busy.

**Jerod Santo:** You guys have been busy.

**Adam Stacoviak:** You're saying this is the first you've really gotten out, and you've been in the cave working hard... For how long now?

**Ron Evans:** The last conference I went to was in March, and... Well, it's not just me. There's a lot of contributors, all the members I mentioned, and a bunch of other contributors as well. This is very much a collective effort; there's no way any one person can do anything really important. It's a room full of geniuses, and I'm just really excited to be a part of the jam session. I have my role, I do my part. I try. But yeah, it's very much a collective effort, and it's been growing by leaps and bounds.

The number of people that want to do WebAssembly is fairly substantial. It's a very exciting, new technology... But the ways to actually go about doing it right now are very, very difficult. You can write C++ code, and then compile it using something like Emscripten... If you already know C++, that's perfect (I guess) for you.

\[00:16:13.28\] You can use Rust. A lot of people are learning Rust and discovering it's a very hard language to learn and to use; it does a lot of things for you, but it's non-trivial. You're not gonna just knock off a quick little WebAssembly app in Rust without knowing what you're doing. You actually have to learn the language to use it. True with many languages... You can only fake your way around so far.

Go, the main Go implementation, the MGI, if you will... You can compile to WebAssembly...

**Jerod Santo:** \[laughs\] The MGI...

**Ron Evans:** ...and there's a couple of issues. One is that the actual executable file is quite large, just because Go is big. Hello, World in Go - this is how I open my talk... Hello, World in Go is about 1.1 MB, and Hello, World in TinyGo is 12k. Yeah.

**Adam Stacoviak:** And what do they say?

**Ron Evans:** 1.1 MB versus 12k.

**Adam Stacoviak:** Does the crowd erupt in cheer?

**Ron Evans:** At this point people are stunned.

**Adam Stacoviak:** There's silence.

**Ron Evans:** They're not really sure, like "Does he speak English properly? Is he dyslexic?" Both of those things, but I did not make an error in that number. It is two orders of magnitude smaller in terms of size of executable.

**Adam Stacoviak:** Wow.

**Ron Evans:** In fact, there was a really great blog post written by one of our team members, but a very cool collaborator; I'm sorry I forgot this person's name, but... The title of the blog post was "Using Go for WebAssembly, and then compressing it down to a 16k file using TinyGo." He had me at that point, "16k file using TinyGo", I'm in awe. But they were able to, using our code that's on the public internets, take an application that they had written using WebAssembly, compile it down to this ridiculously small size.

Well, it gets better. It actually gets better. Someone else then did some WebGL experiments. I think it was Justin Clift. Using the WebGL interface from the JavaScript bridge from WebAssemly, they discovered that TinyGo was actually 80% faster than the main Go implementation as well... Probably because we're using the LLVM compiler toolchain, and between Clang and LDD, which is the LLVM linker, it's getting rid of a lot of stuff.

It's an unfair comparison, just because we're a speedboat and they're a battleship. Of course we're gonna win. If you want a cigarette boat race, an oil tanker is not the way you win.

**Adam Stacoviak:** Or a canoe.

**Ron Evans:** Or a canoe.

**Jerod Santo:** \[laughs\]

**Ron Evans:** You need a boat with a motor. A good motor.

**Adam Stacoviak:** Okay... Canoes have no motors. Not often, at least.

**Ron Evans:** Canoes are good for stealth, but not really for speed.

**Adam Stacoviak:** Yeah.

**Ron Evans:** I did a lot of canoeing as a kid in Wisconsin.

**Adam Stacoviak:** Of course.

**Jerod Santo:** It's also good for relaxation and enjoyment.

**Adam Stacoviak:** Some would say that...

**Jerod Santo:** Some would say...

**Adam Stacoviak:** At least one...

**Jerod Santo:** ...person.

**Ron Evans:** It's good for relaxation the first few miles, and then it's like "My arms hurt."

**Jerod Santo:** Your arms are on fire.

**Ron Evans:** "How many more miles down the river? 15? Got it. Can we stop here?" This was my last summer canoeing with my son.

**Jerod Santo:** If you have a good enough current, you don't have to work that hard, right?

**Ron Evans:** You do if you ever wanna get there in time for the water.

**Jerod Santo:** Oh, okay. I didn't know we had scheduled events...

**Break:** \[00:19:51.26\]

**Jerod Santo:** So you've got next year's demo today... Dream with us a little bit. I think you're pretty good at looking down a few years and dreaming, Ron. Five years from now, or whatever the timeframe you pick - let's just assume TinyGo does all the things that it has set out to do in terms of IoT and whatever you think is success. What's happened five years from now - or three, or whatever makes sense - in the TinyGo world, or in the embedded space, or in IoT? What does success look like if it just continue apace?

**Ron Evans:** Well, I think it was Chris Dixon who said -- no, no, it was Mark Anderson who said "Software is eating the world."

**Jerod Santo:** Yeah.

**Ron Evans:** I'll add to that... If software is eating the world, then Go is eating the world of software. There was a blog post that came out saying Go was the new Java. What they meant by that was Go is the industrial-strength technology that large, mission-critical organizations can rely upon to keep service levels up, try not to kill anybody by accident, by failing at the wrong times... You know, for things that really, really matter.

**Jerod Santo:** Yeah.

**Ron Evans:** I think a lot of people tend to pooh-pooh Java, and that's a real mistake. The JVM is either the number one or the number two most engineered piece of software in human history, the other one being BEAM, the Erlang VM. So you really have to give incredible respect to the number of human hours devoted to taking seriously making this piece of software.

**Adam Stacoviak:** Yeah.

**Ron Evans:** So to say that Go is even in this very small, refined circle or reliability to me is extraordinary. I did a lot of work for AT&T a number of years ago, and carrier grade - carrier grade is what is above enterprise grade. Enterprise grade - yeah, that's nice; that's for consumer products. Carrier grade - that's for maintaining the infrastructure of our entire continent.

**Jerod Santo:** Right.

**Ron Evans:** So the fact that we can say that Go is in this very small circle is very exciting. Big companies - or small companies; any company - you wanna reduce the number of programming languages you have in use, just to reduce the cognitive friction of your ability to maintain all these systems. Any interesting system, the half-life is gonna be like five years long...

**Jerod Santo:** Yeah.

**Ron Evans:** ...especially when physical plants -- you know, you install something at a physical plant in a factory, or a retail store, and you say "Yeah, it has to be replaced in three years." If you go back there in ten years, it's still there, working. Like "Oh yeah, it was still working. We didn't fix it, we didn't replace it." And they're like "Oh, we said it'd only have a three-year lifespan." Like "Oh wow, really? We didn't know. It's still working." This is just very common in these types of physical locations, because replacement is not easy. Software upgrades are even hard enough.

\[00:24:04.25\] We need something that's gonna be reliable enough and solid enough, and Go as a language is making the cut. The problem is Go as a runtime has certain assumptions about the environments in which it runs. Embedded Linux Go is pretty great, but we're talking about systems even smaller, that require substantial reliability. It's your braking system, it's the airbag system, it's the system that controls the thermal rods in your nuclear power plant.

**Jerod Santo:** Yeah...

**Ron Evans:** These are mission-critical applications where there are many microcontrollers in use. No one ever got fired for using C for an embedded system, but why aren't we using C for all our mission-critical web systems? Well, we know why - because it's very hard to use C in a safe way.

**Jerod Santo:** Yeah.

**Ron Evans:** So all the cool kids - they're not just trying to be cool and new; they're saying "Hey, maybe we could use a language that prevents us from doing things that are very bad ideas. That's what Rust does.

**Jerod Santo:** Yeah.

**Ron Evans:** But Rust puts all of the onus on the programmer. It's like the opposite of Ruby. Where Ruby says "We will forgive you your small errors and try to do the best we can to interpret your meaning."

**Jerod Santo:** Right.

**Ron Evans:** Rust just says "No. Failure", and tries to give you some meaningful error messages if it can, but if you don't know what any of it means, then that's not helpful. Go also will not compile. It's still got a certain rigor of requiring, you know, like fmt. Gofmt says "Here's how Go code should be formatted." And for the rebel, hippie programmer, they're like "Well, man, you know, don't quash my creativity." For the corporate coder, you're like "What idiot wrote this code?!" "It was you, sir."

**Jerod Santo:** "It was you, sir..." \[laughs\]

**Ron Evans:** "No way it was me. `git blame`, ahh someobody modified the git logs!"

**Jerod Santo:** They rewrote the history.

**Ron Evans:** "It could never have been me." So there's something to be said for a certain amount of discipline. Discipline leads to freedom. If you're disciplined about going to the gym, then you'll have the freedom to maybe eat some pizza, because you've already worked out...

**Jerod Santo:** Right.

**Ron Evans:** So in five years I think Go will be much bigger than it is. I think all of these organizations will realize they need to do edge computing, not just cloud computing, and TinyGo will have completely conquered the world of the ultra-small. I like to think that is what's going to happen.

**Jerod Santo:** Yeah.

**Ron Evans:** That's what happens if we all work together to make it happen.

**Jerod Santo:** An alternate history would be that something else fills the needs that TinyGo is filling. Is there other projects, is there competition in that space?

**Ron Evans:** I like to think of it as more cooperative.

**Jerod Santo:** Sure. But just alternatives.

**Ron Evans:** I mean, it's competition only in the sense of like you can only eat at one restaurant tonight. So it's the competition between the Szechuan place and the Thai place, only in the sense that you're gonna eat at one tonight and another tomorrow night.

**Jerod Santo:** Right. In the micro-sense. But in the big picture, you can like both restaurants.

**Ron Evans:** Well, and also -- I mean, every programming language exists because it does something well. I really dislike when people are talking badly about some other programming language, without ever having really used it... Because every single language does something well; that's what it was created for. Now, you maybe are using it for the wrong thing, or the thing that it does well is not something you care about doing...

I'll give you a great example - this language called Fortran.

**Jerod Santo:** Never heard of it.

**Ron Evans:** \[00:27:55.25\] A very ancient language, used for mathematics. It's still being used by NASA in order to figure out the orbits of things in outer space. Fortran. If you wanna work at NASA, you should learn Fortran.

**Jerod Santo:** What does Fortran do well?

**Ron Evans:** Fortran does mathematics; it's essentially a formula translator, and besides COBOL, it's one of the oldest languages still being used actively today, because it does this thing really well, of mathematical calculations... So it's worth learning Fortran if you really care about mathematical accuracy and being able to do a substantial amount of processing quickly... Because doing these orbital plan calculations is quite difficult.

So every language does something really well. That's why it was created. But everybody wants to use their preferred language for everything.

**Jerod Santo:** True.

**Ron Evans:** That's hard to do. I think that there are other languages that are approaching the space of the extremely small. Again, Rust. There's interesting things happening with Elixir; people running BEAM on microcontrollers - that to me is extremely interesting.

C++ is not your father's C++ now. It has absorbed a lot of interesting syntax from dynamic languages, like the auto keyword, and defer... Things that are very interesting in dynamic languages being applied to static languages.

**Jerod Santo:** Yeah.

**Ron Evans:** I think there's a lot of action happening in the small space... And a lot of us are running on top of LLVM. So when we run into a problem, like most programmers, we assume it's our code, and then only gradually come to the sinking realization that it's in the thing we're using, and we have to either figure out how to fix that, or provide a coherent bug report, so that the maintainers can do so.

Well, I've had the magnificently wonderful experience over the last months of running into a problem, figuring that perhaps it's LLVM, going to the LLVM mailing list and discovering that a week ago somebody on the Rust Embedded team reported this; or a week ago someone on the Zig team reported this other thing. Or in their case, going and finding that a week ago our team reported it. So it's a really great collaborative effort on the -- I mean, I consider open source the shared infrastructure of the 21st century; you know, the roads and bridges of how we all perform our necessary daily functions of life and commerce... So we're just trying to do our part within that. There doesn't have to be a single winner...

**Jerod Santo:** No.

**Ron Evans:** In fact, we lose by that kind of monoculture, because any given technology, platform or group needs a foil to bounce off of. If nothing else -- you know, healthy competition is a kind of sportspersonship. It means we operate from a place of respect, and when the match is over, we celebrate the fact that we were able to compete together, and then we go on.

**Jerod Santo:** Right.

**Ron Evans:** But open source is nothing like that at all. There is no winner and loser. It's more like a -- I like to call our hack sessions that we have at GopherCon (and other places) jam sessions... Because it's like a musical jam session. There's no winner, there's no loser. You don't even have to participate. You could just show up and go "Wow, this is really cool. Look what they're doing."

**Jerod Santo:** "Let's enjoy the music."

**Ron Evans:** Or you could jam as well.

**Jerod Santo:** You can riff...

**Ron Evans:** You win just by...

**Jerod Santo:** Participating.

**Ron Evans:** \[00:31:50.26\] I think it was Albert King, the late great blues guitarist - he said there's only three reasons to play music: have fun, make some money, or learn something. So if you're playing music for some other reason, you should stop. If you're trying to impress somebody, or gunslinging, look good, make them feel bad - you should just stop and go home, because that's not a good reason to do it. So I try to take that same sensibility and apply it to the things we're doing in open source.

The winners are all of us, if we collaborate and cooperate. The losers are all of us if we don't invite people -- I mean, I'll go back to the musical thing... There've been plenty of cases where a person is sort of shyly standing on the side of a musical jam session that I've been at. They're not participating, but they're there, and there's like a glint in their eye that they really want to. If you do it well, you pull them up to a mic... And then this person who doesn't look anything out of the ordinary opens their mouth and your jaw drops to the ground, because this voice comes out and you're like "Wow...! Thank you for getting past whatever it was and singing for us, because I'm just in awe at how great this is." I think this is a great lesson for inclusion in tech.

There's people with a great voice, who are just like -- they're not gonna sing unless you almost make them sing. If it's sort of intimidating, they're gonna stand on the side, and like "Well, this person has come to three jam sessions and never sung, or played guitar. I wonder why. Let's see what we can get them to do." In many cases, they've got incredible hidden talents that if we could just allow them to flourish by giving them an opportunity... And it doesn't have to be forever, it's just one song; then someone else steps up. It's about sharing the space.

So I try to apply these same principles, because -- you know, we think tech is about utility. It's not. Tech is about aesthetics. If tech was about utility, we'd all use one programming language. It's about aesthetics... Like, I prefer fuchsia and you prefer green. Why? No actual reason.

**Jerod Santo:** Yeah.

**Ron Evans:** "We don't have free will", my friend the neuroscientist says. What do you mean? "We only think we have free will." This is my same friend who said I needed sleep. Well, I didn't need sleep.

**Jerod Santo:** "I didn't need sleep..." \[laughs\]

**Ron Evans:** He's like "Let me prove to you you actually need sleep." So I know better than to mess with the scientists...

**Jerod Santo:** Okay, so he proved it to you...

**Ron Evans:** So I'm like "We don't have free will. Alright, go ahead. Blow my mind." So basically by doing functional MRI - this is probably something for your brain show - and some experiments with choosing options and button pushing, they were able to determine that the choice of pushing the button occurred before the cognitive part of the brain responsible for the decision-making. That it was just a little tiny bit afterwards. So the current best interpretation is we make a random choice, and then we explain to ourselves we made a conscious choice in order to maintain a consistent view of reality. But in fact, we have no free will, it's all completely random.

**Jerod Santo:** What a downer...

**Ron Evans:** Not to ruin your belief in self-determination...

**Adam Stacoviak:** Way to ruin things, Ron...

**Ron Evans:** So it's about aesthetics. Technology is about fashion, it's about fads as much as it is about utility... But it's still about utility. You're still gonna need a pocket to put your cell phone in. If you're making pants without pockets, you're not doing a favor to cell phone users. You're making a purely aesthetic choice, with no utility. That's the difference between art and design. Art is just to evoke an emotional response, and design is about doing something functional. A glass hammer is beautiful to look at, but it's totally useless if you wanna do some framing of wood, knocking down nails.

**Jerod Santo:** Right.

**Adam Stacoviak:** It'd probably suck at that job.

**Ron Evans:** \[00:36:03.12\] So we think we're purely utility-based, but we're not. Go is aesthetically pleasing to many people; so if we can bring Go - again, like a good politician, to bring it back around to my message...

**Jerod Santo:** \[laughs\] Back to the talking points, Ron...

**Ron Evans:** If we can bring Go to the smallest of platforms, then we are helping satisfy people's aesthetic desire to use Go, and at the same fulfilling the utility that they need to actually perform an important function that generally speaking is not taken very seriously. Like, "Oh, it's just the sensors. It'll be fine." It's like, yeah, those are the sensors that say "Turn off the heat because the people are about to be cooked." Or "Turn off the elevator because it appears that the automatic braking system of the elevator is not functional. It might plummet and hurt people."

**Adam Stacoviak:** Right. That's a scary story right there, too. It's got a scary twist.

**Ron Evans:** Just to change the world, nothing important. That's why we started with toys... Because Chris Dixon (the investor) said something like "Any sufficiently advanced technology starts out in the form of a toy." I'm paraphrasing a little bit. So we started with TinyGo with a toy. People said it was a toy language, so I said I'll build a toy with it, just because I have a great sense of irony...

**Jerod Santo:** \[laughs\]

**Ron Evans:** Like "Oh yeah, it's just a toy. I'll just build a toy. Nothing to see here." Anyone who ever saw the old '80s or '90s movie Small Soldiers...

**Adam Stacoviak:** Right.

**Ron Evans:** ...or Talking Tina, or Child's Play... Like "Oh yeah, it's just a toy. Nothing to be afraid of. It's just a toy. Friendly toys..."

**Break:** \[00:37:46.21\]

**Jerod Santo:** A toy and a playground... So you have play.tinygo.org. Is tinygo.org the one stop shop to get involved?

**Ron Evans:** Yes. We have a documentation website that's pretty good. There's been some great, in-depth pages, and also articles written especially by Ayke van Laethem, who as I mentioned, is @aykevl on Twitter, and GitHub, and all that. He's really the original project founder... Even though it's more than him, it's all of us now; but without Ayke, none of this could exist. So I always have to thank Ayke, because you made my dream come true; I wanted to do this for years... And for me, this is truly a labor of love. But it also has tremendous value, because this is something that needs to be done. If it didn't really need to exist, I'd probably be working on something else... Because it's fun, but unless it's also important, then it's a hobby... Whereas this is a full-time thing.

**Adam Stacoviak:** Let's play that game then - if you couldn't do what you're doing now, what would you do? If for some reason you had to stop doing this mission, what would be another alternative mission that would be exciting; the runner-up, let's say.

**Ron Evans:** Well, I think embedded systems in Go is the most exciting thing happening right now... But there's a lot of other exciting things happening in the world. Biotechnology and genomics is really interesting to me.

**Adam Stacoviak:** What do you know about that?

**Ron Evans:** \[00:39:46.02\] I think there's a huge opportunity for bioinformatics. Bioinformatics and cloud computing is not a problem that's been solved at all. Material science I think is incredibly interesting... Things like shape-memory alloys, which are polymers that have the property which is opposite of normal metals. Normal metals, when you heat them, they expand, and when you cool them, they contract. SMAs have the opposite - when you heat them, they contract, and when you cool them, they expand. So they are very, very strong, and could be used for artificial muscles, new kinds of solar cells, other kinds of conductive materials, flexible electronics... That's the kind of stuff I'd like to be working on if I wasn't doing what I'm doing now.

**Adam Stacoviak:** Where are you going with this...? Reel it in.

**Jerod Santo:** \[laughs\] That's cool stuff.

**Ron Evans:** The future is already here.

**Adam Stacoviak:** Oh, boy...

**Ron Evans:** It's just -- like William Gibson said, it's just not equally distributed.

**Adam Stacoviak:** What about genome sequencing, and stuff like that? Programming ourselves, and CRISPR, and that kind of stuff. What are your thoughts?

**Ron Evans:** That's really in the bioinformatics and genomics. I think it's very exciting.

**Adam Stacoviak:** What are the ethical boundaries there?

**Ron Evans:** Well, I think that ethics and technology is an under-touched subject. My oldest son is a student and the University of Portsmouth in the United Kingdom, studying computer science, and last year when he finished his A levels, which are the English equivalent of the last year of high school, they had to take a class in Ethics in Computer Science... And it was all the IEEE ethics content. I was really excited that this was part of their required curriculum. He on the other hand was like "Why do we have to study this?" I'm like "A-ha! Son, you have just opened Pandora's box. Allow me to explain..."

**Jerod Santo:** \[laughs\] Sit down, young man...

**Ron Evans:** "Allow me to explain the need for ethics in technology." So I think there's a lot of biohacking going on right now that is completely unregulated. It's been going on for years.

**Adam Stacoviak:** Describe biohacking.

**Ron Evans:** Biohacking is when you decide to do some genetic engineering on your own, using equipment you bought yourself through eBay or the internets. In 2009 there was a really amazing conference that took place in Canada called Future Ruby. Future Ruby was really a seminal conference; one of the speakers was the team of Nitobi, the creators of PhoneGap, that ended up selling their company to Adobe. There was a lot of really amazing people at this conference. I was there with my brother Damon, flying Ruby-powered blimps...

**Jerod Santo:** Of course...

**Ron Evans:** ...and one of the talks was a professor from MIT who gave a workshop the day before on biohacking. So what everybody did was they grew phosphorus and algae in a Petri dish. So this is 2009, and he's talking about how you can buy a genome sequencer for - at the time, I think it was about $5,000 on eBay... And needless to say, it has not gotten more expensive or harder to get this kind of equipment.

I think one of the big differences -- what was the name of the guy who created the first internet virus? His dad worked for the NSA.

**Jerod Santo:** I don't know.

**Adam Stacoviak:** Me neither.

**Ron Evans:** It's not Mitnick... Anyway.

**Jerod Santo:** Was it Stuxnet?

**Ron Evans:** It was the first internet worm. It was not created maliciously; it was created originally because he wanted to map all the IP addresses within this space, and he wrote this code that would automatically download itself onto any computer and then do the same thing. He made an error in the code, which caused it to escape the subnet, and it took down the entire internet at the time.

\[00:43:54.20\] He got in a bit of trouble, and if it hadn't been for dad's NSA connections, he would probably still be in an undisclosed location. Actually, back in those days they still hired teenagers who were hackers to work for them as security people. Not like now.

But take that idea, but apply it to biohacking. Well-meaning person, doesn't think they're doing anything bad, in a basement, not fully understanding the implications of their work, and making an error. No bad intentions. I'm ignoring the bad intentioned people, just because I think that it's very hard to do anything that works at all in this space yet, so the odds of you making a mistake and having something happen are much greater than bad people doing awful things... But that's also a possibility.

But if all we do is restrict it completely, like "No man's land. You can't go there", then it's going to be done elsewhere. It's the same as saying, "You can't do computing on the internet, because you might transfer an internet virus." So one extreme means we remain in ignorance, and then it's like The Demon-Haunted World of Carl Sagan - we don't understand what's going on, and it's affecting us.

The other is every human for themselves, with no control and no care over the implications - which I think has been a very common attitude in tech, which is poorly interpreting Grace Hopper's "Ask forgiveness, not permission." First of all, many people don't know that Admiral Grace Hopper said that; the attribution. But also, they don't realize what she was talking about. She was a military officer in a large organization; and if you've ever worked at a company or an organization that operates at that kind of global scale, it's very hard to get permission to do anything, because you need to go up three or four levels in the hierarchy above your boss to get permission... Especially if there's no cost to the organization and substantial benefit. So "Ask forgiveness, not permission" meant "Do the right thing within the organization, whether or not they know it. That way you can help the people that you work for." Not "Move the extrinsic cost to the public domain, so that we can profit." That is not the same thing at all.

**Jerod Santo:** No. That's true.

**Ron Evans:** I don't wanna pick on any particular company, but I think we could rattle off a list of companies whose primary business model is to take public goods and to turn them into private profits. To me, that's antithetical to this whole idea of -- you know, "What is technology for?" Well, it's to improve human well-being. There is no other reason. Have fun, make some money, or learn something. It keeps going back to that.

**Jerod Santo:** To wrap it around then, where are the TinyGo jam sessions? Is it in the Slack community? If we wanted to jam with you guys, or just be a wallflower and maybe g0:47:03.17\] Is it on GitHub, is it in your Slack? Where does the actual community hang out?

**Ron Evans:** A lot of it is on Slack. Total disclosure, I would have preferred IRQ, because I like open source...

**Jerod Santo:** Total disclosure... \[laughs\]

**Ron Evans:** ...but it's really hard to use IRC and IRQ. Freenode is great, but it requires too much knowledge.

**Jerod Santo:** That's a fact.

**Ron Evans:** So I kind of gave up that fight. I can't fight everything all at once. I was the one saying we should be using Git as a distributed version system and not as a hub and spoke system, but that didn't go anywhere either... Not because of pointing fingers and saying "You're bad", but more "Can we have other possible options?"

Anyways, we're all on Slack. There's a lot of people joining. Slack is certainly a good platform for this, because it's relatively easy... We have a really active community. There's a bunch of us in Europe, there is a bunch of people in Asia, there's a bunch of U.S. people... So pretty much 24 hours a day there's somebody around to help.

\[00:48:04.20\] We're really active on our GitHub repositories. This is why we have a few members to the organization, so that we can respond quickly to people's requests for assistance. Sometimes GitHub issues are support requests, and not issues... But you know, we're there to help, and we're trying to get this technology out there and make it easier for people to use, so part of our responsibility as maintainers is to do that.

We've had a few people come into our Slack and say "Why don't you use language X?" Not X, another language that has a single letter...

**Jerod Santo:** \[laughs\]

**Ron Evans:** And we were like "Oh, that's a totally cool language, but we're not really thinking of moving to that, no. We're doing TinyGo. Cool language too, though... Nothing wrong with it. It should be done." We're not telling people to rewrite in TinyGo either; we're saying "Check out TinyGo. It's cool. Maybe it'll help you. If you like Go, you'll like this." But we're not saying "You need to do this, because we're so much better." I mean, we think it's better or we wouldn't be doing it, but we don't expect it to be better for everyone all the time.

But yeah, Slack is great. Twitter - we're @tinygolang on Twitter, because there already was a @tinygo. On GitHub it's /tinygo-org, and that's where we have all our repositories. We have the main TinyGo repo, with the compiler. We have a drivers repository that's got hardware drivers for a bunch of sensors, and displays... We've got the TinyGo Playground code, which I think needs an update, since we moved to the serverless processing of the compilation jobs. Yeah, we're doing WebAssembly, RISC-V and serverless, all in one app. It's definitely buzzword-compliant.

**Jerod Santo:** Yeah, that's a bingo right there. A buzzword bingo.

**Ron Evans:** If you don't fund us because we hit all three of those, it's because you're just not buzzword-compliant and industrious.

**Jerod Santo:** That's right. Cool, Ron. Thanks so much for talking to us today, man. Lots of fun.

**Ron Evans:** Thank you so much for having me. I really appreciate what you guys do; it's a great podcast, you have lots of really interesting, wonderful people... And me, occasionally.

**Jerod Santo:** \[laughs\]

**Ron Evans:** So thanks a lot, and check it out, tinygo.org.

**Adam Stacoviak:** Yes! Thanks, Ron.
