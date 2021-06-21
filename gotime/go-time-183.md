**Mat Ryer:** Hello! Welcome to Go Time. I'm Mat Ryer, and this is GopherCon EU live. We are broadcasting live from the conference.

**Natalie Pistunovich:** From the internet.

**Mat Ryer:** Yeah, on the internet. That's it. That voice you've just heard is my co-host, Natalie Pistunovich. Hello, Natalie.

**Natalie Pistunovich:** Hello, Mat. You're getting better every time \[unintelligible 00:03:27.25\] my last name. That's really exciting.

**Mat Ryer:** Yeah, yeah. I sort of do iterative development when it comes to people's names, as we're about to see. We're about to see an MVP of me pronouncing these names now, of our other guests.

**Natalie Pistunovich:** \[laughs\]

**Mat Ryer:** What we wanted to do is get some speakers from around the conference and have a chat with them, and learn about them, and also their experience with conferences, and see where the conversation takes us.

So we're joined, first of all - Dr. Joakim Kennedy, a security researcher. You've given a talk about Go and how it's used in malware, right?

**Joakim Kennedy:** Yeah, correct.

**Mat Ryer:** Welcome.

**Joakim Kennedy:** I hope you enjoyed it. It was a little bit different than the other talks.

**Mat Ryer:** \[00:04:11.15\] It was. It was very good, and the talk will be available on YouTube in the future, so if you do some searching, you'll find it. It is very interesting. Any time you see Go used in different and interesting ways, it does get amazing. We're joined also -- don't worry, you don't just have to tolerate me and Natalie, we're also joined by Preslav Rachev. Hello, Preslav.

**Preslav Rachev:** Hello, hello.

**Mat Ryer:** You spoke about digital artwork, right?

**Preslav Rachev:** Yeah, that's correct.

**Mat Ryer:** And genuinely, some of the images that you created with your code looked amazing. They're really beautiful imagery, so I really do recommend people check out that talk. I think you'll enjoy it. How did you find it, Preslav? How was the talk for you?

**Preslav Rachev:** The talk was quite enjoyable, since it's something that I do out of passion. It was genuinely quite nice to talk about this subject.

**Mat Ryer:** Yeah, it was so good. I do recommend it. It's very visual, so you do wanna watch the video on that one.

**Natalie Pistunovich:** Here's a fun fact about Preslav, just before we jump to Mathilde.

**Mat Ryer:** Yeah.

**Natalie Pistunovich:** When we saw the art of Preslav, we actually asked if we can use it for our selfie booth. So two of the backgrounds that attendees were playing with, all the colorful things with geometrical shapes - it was actually created by Preslav. So thank you so much for contributing art into the conference. That's really fun.

**Mat Ryer:** Yeah, that is cool. And it was written in Go.

**Natalie Pistunovich:** Yeah.

**Preslav Rachev:** Yeah, it's all written in Go. If you guys allow me to - fun fact, actually, the two websites that I presented on my talk, I actually put them online. I think I tweeted about them, but maybe we can put it in the show notes as well. So using those links, people will be able to create similar artwork themselves.

**Mat Ryer:** Oh, wow. Yeah, so please do. We'll put that in the show notes. Well, we also have a final guest - last but not least, Mathilde Raynal. Hello, Mathilde.

**Mathilde Raynal:** Hello.

**Mat Ryer:** Welcome. You are a student of cybersecurity, is that right?

**Mathilde Raynal:** Yes.

**Mat Ryer:** And your talk is about quantum things, isn't it?

**Mathilde Raynal:** Yes. Sorry I'm breaking the fun here, but...

**Mat Ryer:** Not at all, no. They say that all our encrypted data we feel as safe may not be in the future, so I'm excited to learn a bit more about that. Maybe we could just quickly go around and do little intros about yourselves. Just tell us what your interest is in Go specifically, and what you've been doing recently... Or something fun about yourself. It doesn't even have to be work-related. Mathilde, why don't we start with you?

**Mathilde Raynal:** Yeah, sure. So as you said, I'm interested in cybersecurity, which is a very big word that encompasses many things. What I especially like doing is working with cryptography, and especially privacy stuff. And I work mainly with Go to break stuff and trying to propose better solutions, basically.

**Natalie Pistunovich:** So you break things and then you propose ways of fixing them.

**Mathilde Raynal:** Yeah, that's the way to do it. Some people prefer just to go to the \[unintelligible 00:07:18.14\] and I think the iterative way is more fun.

**Mat Ryer:** Yeah, very good.

**Natalie Pistunovich:** Cool.

**Mat Ryer:** Joakim. Dr. Joakim. Do you insist that we use that, or are you fine?

**Joakim Kennedy:** It's fine either way. You can call me by the first name.

**Mat Ryer:** Yeah. So tell us -- I don't know, Dr. Joakim sounds very cool.

**Natalie Pistunovich:** It's like Doctor Who.

**Mat Ryer:** Yeah. So how come you're a doctor?

**Joakim Kennedy:** \[00:07:45.23\] That's a good question, actually. Long story, but I'll cut it short. I always like to do research, and the really good way of getting a good education in doing research is to go for a doctorate, because that's really what the degree is in the end. You spend your time for 3-5 years, or 3-10 years, depending on what kind of field... And yeah, it's kind of interesting, because you kind of come into an area, and the goal is almost to become an expert in something specific.

**Mat Ryer:** Right. And again, interested in security, and particularly in the malware talk, it was amazing to see how people are using Go. Go has good concurrency, it's quite stable, it's a single binary that you have to ship... There's lots of nice properties about Go that we get to use... But so do the hackers. They get those same benefits, don't they?

**Joakim Kennedy:** Yeah, and there's a lot to it, because the binary is very different than what we expect from that malware... Usually, they're very small. So a lot of antivirus engines - they didn't use to... Like, if they come across a file and it's ten megabytes, they skip it, because the likelihood that it was a malware is pretty low, and the performance of scanning it -- because they'll do on the fly, when you double-click something... You don't want the computer to sit for half a second or two seconds while it scans it, to kind of check the size and stuff like that. So that's one of the ways it was getting around. Not just a lot of the functionality, but it's also the inner workings of what actually is in there is also causing some problems.

**Mat Ryer:** That's interesting.

**Joakim Kennedy:** Yeah. You see, people use Go to encapsulate "Well, no malware has been out there for years" \[unintelligible 00:09:47.18\] and you put it into a Go binary as an embedded resource, and suddenly no one detects it.

**Mat Ryer:** Wow. It's exciting. I used to watch hacker movies and stuff, and I'm basically the same person as I was then; it was years ago. So how long have you been doing Go? How long have you been interested in Go?

**Joakim Kennedy:** I think I started coding in it about 5-6 years ago, something like that. It's been quite a while. But it's always been sort of like a side project; I'd maintain a couple of projects around it... And then as that activity started, it started to bleed into sort of like a professional side, where those two things kind of collided. And the interesting thing was when I started to look under the hood, looking actually at the disassembly, or looking at the assembly produced, I felt like my coding got better, because now I understood better what actually was happening. It's like, you realize the difference between "Well, if I pass this data in as a slice of bytes, or should I pass it in as a string?" and you know the difference in just the size for the function arguments, and things like that.

**Mat Ryer:** Yeah, that's very cool.

**Joakim Kennedy:** Tiny, little differences.

**Mat Ryer:** Yeah. And Mathilde, speaking of security - I know that our cryptography at the moment is pretty safe, but that might not be true in the future, right?

**Mathilde Raynal:** Exactly. You summed it up, pretty much. Let's face it, changing cryptography \[unintelligible 00:11:29.03\] it takes so much time. I don't know if you know, but GitHub, and I think maybe Git is still using SHA-1, which we know is broken for like ten years or so... Cryptographers are not known to be the fastest people, so it's important to really think ahead and be prepared when the real threat will be here. So that's the hope for me studying it now.

**Mat Ryer:** Yeah. And it's the point that the quantum computers will essentially very easily be able to just kind of brute-force the encryption? Is that the problem?

**Mathilde Raynal:** \[00:12:07.24\] Well, the thing is there are many questions that need to be asked. It's like, "How much will it cost? Will it actually be as efficient in practice as what we expect?" and so on and so forth. Because the thing is like, quantum computers are believed to be super-useful in many things, like modeling pharmaceuticals... But if they appear not to be, then potentially people will stop putting money into it, so the threat will just simply be gone. It's really just like suppositions.

But if indeed quantum computers are scalable and accessible, then yeah, WhatsApp, or -- I mean, messages are read, but they will be read by anyone at that point.

**Natalie Pistunovich:** Will it be also messages from now that you will be able to read in the future, or is it only in the future? Should we stop using all the internet?

**Mathilde Raynal:** No, but... \[laughter\] I mean, when you think about it, 20 years ago we were using cryptography that is broken now. Things that we should care about is like "Is it worth storing all of the messages that are being sent around today, in order for someone to break them in like 50 years?" I mean, it's not truly--

**Natalie Pistunovich:** Ask the messaging companies, yeah. \[laughs\]

**Mat Ryer:** Yeah, I know. It is amazing. That blows my mind, that stuff, for sure. What's your talk called, if people want to search and find it in the future?

**Mathilde Raynal:** It's called "Taking the quantum leap with Go."

**Mat Ryer:** That's a great title. I love Quantum Leap, the TV show. Is that a reference to that, or is it an actual quantum leap?

**Mathilde Raynal:** It wasn't my choice; you'll have to ask my supervisor about that. \[laughs\]

**Mat Ryer:** Yeah, that's good. There's a TV show about a man that was able to go into and become other people through history. \[unintelligible 00:13:56.01\] crazy beyond the realms of possibility. And you know, then just try and make things a bit better.

Preslav, can you tell us a bit about your background and also recently what you've been focused on?

**Preslav Rachev:** I tend to call myself a wearer of many hats, because although I'm a software engineer by many years of living and breathing in the industry, I also like challenges of different sorts. Before the pandemic, when there were actual runs, I would go and participate in long-distance running challenges, I also play various instruments... I started playing the guitar as a teenager, then I switched to the bass, and been constantly looking for a band. I saw you, Mat, are quite into playing...

**Mat Ryer:** Yeah, we could do a band that's just latency. But maybe that's what the band could be called. \[unintelligible 00:14:49.09\]

**Natalie Pistunovich:** Bandwidth Issues... \[laughter\]

**Preslav Rachev:** The Latencies. Exactly. And yeah, so the most recent challenge, beyond my talk on algorithmic art, was actually moving a little bit outside of the industry as sort of engineer/employee and jumping into the (to me, at least) waters of being an entrepreneur, being a boss of my own. That's quite a challenge, but actually in no small part Go is in a way to blame for this, because it was something that changed my path, and I'm happy to report that so far, for the few months that I've been taking this path, I've been challenging the status quo and using the language in ways in which - I wouldn't say it wasn't meant to solve... Actually, it was meant to solve them, but other things prevailed. We've been using the language mainly in situations where you would see others using something like Ruby on Rails, or Python, or something a little bit more dynamic, and I'm trying to challenge the status quo that "No, actually the language is pretty good for that. It's also pretty good for small teams building small applications, 4-5 people, just as it's good for building Kubernetes, or something that powers a gazillion servers."

**Mat Ryer:** \[00:16:10.16\] Yeah, absolutely. Well, your talk - you really did demonstrate that. I've never seen Go used to generate something that looked that interesting and that beautiful. Obviously, this is a podcast, so we can't really rub it in too much, but I do recommend to check it out, because you just wouldn't believe some of the imagery that was created, and how. So that is really fun... What gave you the idea for that?

**Preslav Rachev:** Just to reiterate on your point - the amazing bit there, as I mentioned in my talk as well, is not the complexity of the code itself. Actually, if you look at most of my - I still call them sketches, because of my processing background; I started using this language that was meant specifically for this kind of algorithmic art... And most of the works, they were called sketches, so I still refer to my stuff as sketches. So most of my things - say there are about a couple hundred lines of code, and I usually just put them together, and there's not a lot of complexity in it as in patterns, and here something happens, and you pass the code through five channels, and I don't know what else... It's usually pretty brute force, but that's kind of the beauty of it, because if you let it run for a lot of iterations - usually like 5k, 10k, 20k - these tiny bits of changes in the reiteration, they grow. You can visually see it. I'm looking forward to having the actual video from the talk, because there was this one slide where you actually see it.

**Mat Ryer:** Yeah. It's funny - I mean, anytime code gets -- when you see new behaviors emerge from relatively simple bits of code, which happens quite quickly, in my experience... I'm often surprised - with just a few simple components interacting, even just a few simple functions interacting in interesting ways, can be very surprising. And I think it sort of highlights really the complexity of what we're doing. We can't really predict sometimes and imagine what's gonna happen. And I think the chaos in some of this is really interesting to think about. I think people will get a lot out of that, and I took a lot out of that from your talk specifically.

**Preslav Rachev:** I titled the talk "Between order and chaos", and that's precisely how this type of art is seen. It's the right balance of how much you're putting into it and how much randomness and chaos you're adding to the mix that actually produces this beauty. If you enforce the rules too strictly, you can actually see that it was man-made. You need a little bit of randomness.

**Mat Ryer:** I think there's a great lesson in that. It's almost like a philosophical point there.

**Preslav Rachev:** Yeah, absolutely.

**Mat Ryer:** If you have too much structure in things... Sometimes a bit of randomness is just what you need. Does that also apply in security, randomness? Do you use a lot of that, Joakim?

**Joakim Kennedy:** Yeah, I mean obviously randomness is very important in regards to cryptography... Which is obviously a part of security.

**Mat Ryer:** Sometimes you hear -- we have in Go the math/rand package, and there's also the other one, which is crypto/rand. So that surprised me when I first saw that. People would say "Don't use math/rand (random numbers) if you're doing security things. Use the crypto one." What's going on there?!

**Joakim Kennedy:** You should ask a cryptographer... So math/rand is a pseudo-random function. It takes a seed, and if you give that the same seed, you'll get the same output, in a predictable way.

**Mat Ryer:** Right. That can be useful for testing, where you have some random element in your code, but you want predictable output, so you can make assertions about it.

**Joakim Kennedy:** Yeah.

**Mat Ryer:** \[00:19:59.09\] Although Roberto Clapis, one of the security engineers on the Go team - his counterpoint to that is that actually if you've got randomness in your program, then you should have that randomness in your tests as well, because then it's more real. Kind of an interesting take.

**Joakim Kennedy:** The way I can see it potentially being useful is if you're launching different tests and it's failing, and if you're using the same seed, you'll get the same order, because it could be some state that's stored between tests, or something like that... And it only happens in a certain order. So that could be good, maybe like a predictable randomness. Normally, it's random.

**Mat Ryer:** Yeah.

**Joakim Kennedy:** You still find the ransomware though - they'll still use math/rand and just seed it with the current timestamp...

**Mat Ryer:** Yeah. I mean, that's what I do, but not for security. I use it for doing something fun with it. Mathilde, why is it different though, the crypto? Literally, what's the difference? I mean, they're both pseudo-random, aren't they, because it's impossible for a computer, isn't it? A computer doesn't have a random chip in it, that can do random, do they?

**Mathilde Raynal:** No, and it's a shame. Actually, it's a very funny store, because when I learned Go, it was a project about randomness, how to produce randomness. So that's why I'm smiling when we're talking about that. And to be very honest, I used to know the answer to the difference between math/rand and crypto/rand, but I must admit that I forgot about it...

**Mat Ryer:** Fair enough. I don't know.

**Mathilde Raynal:** I think it's something about predictability, or something like that.

**Joakim Kennedy:** Yeah. Math/random is predictable. You can add a random seed to this as the crypto/rand, but it will also use the pool from the operating system with entropy. If on Windows, it will do a Windows API call that will get some randomness.

**Mathilde Raynal:** \[unintelligible 00:21:52.24\]

**Joakim Kennedy:** Yeah, I think we use dev/random on Unix systems.

**Mat Ryer:** Yeah. There is also an API which - what they've done is basically captured the background radiation from the Big Bang, the randomness in that. You know the static you see on old TVs when they weren't tuned into any station? You'd just get that fuzzy static - that's the background radiation from the Big Bang, apparently, according to scientists, if they're to be believed... And there's an API that allows you to ask for random numbers from that source. So actually, if you really do need random, then that's a quite good way to do it.

**Preslav Rachev:** I can imagine that if I wanna use this in my sketches, it would take five years to get a sketch out.

**Joakim Kennedy:** But Cloudflare used to have lava lamps at their entrance, and it was just a web camp -- because it's non-deterministic in how those blobs are moving around... And they used that to seed all the key generation.

**Mat Ryer:** Yeah, that's amazing. Is that random enough? I know lava lamps look random, but is it hard to predict? I guess it must be... That's why they did it.

**Joakim Kennedy:** Yeah, I think so. And I guess unless you solve the Navier-Stokes equation, which governs all fluid movements... But then also--

**Mat Ryer:** Yeah. That's all you've gotta do, isn't it?

**Joakim Kennedy:** Yeah... But then you can also claim whether the million dollars prize that's part of \[unintelligible 00:23:16.15\]

**Mat Ryer:** The Nobel Prize.

**Joakim Kennedy:** Yeah.

**Mat Ryer:** Or you could just turn the heating up in that room, so that the temperature is just really hot... But I suppose they've controlled their temperature at Cloudflare. I don't want to get into any legal battle; I'm sure they control the temperature of the lava lamps that they use for randomness. That is really cool though, isn't it? Have fun, and to see that when you walk into their office, to see all those lava lamps stacked up... It's really fun.

**Break:** \[00:23:52.01\]

**Mat Ryer:** So I was interested in -- maybe we could go around and just find out something you like about Go, and something you don't like about it. There are pros and cons, of course, there are lots of trade-offs, but just specifically and personally from your point of view. Preslav, maybe you could tell us something you like and something you don't like.

**Preslav Rachev:** That's a good question. Asking a person who's been writing Java for most of his career...

**Mat Ryer:** You love it all, don't you?

**Preslav Rachev:** \[laughs\] I mean, it will probably sound like a cliché, but what I like most about Go when I first approached it -- I have to say, for someone who's been writing code since I can basically remember, since the early 2000's, I'm a fairly recent adopter of Go, I would say. I only met the language in a company switch at the end of 2018... But what I love about the language is what everybody says about it - the simplicity. There's usually one way to do things, and you don't have all of these abstractions flying around... It was the best thing that happened to me in retrospect... But at the beginning - you can imagine me coming from this sort of J2EE sort of certifications, and \[unintelligible 00:26:01.05\] Approaching the language at first was "What the \*beep\* is going on here?!" You ain't gonna tell me that this language doesn't even have map, and filter, and reduce, and all these kind of goodies, let alone the lack of generics, and so on and so forth... So from there to now - it's amazing, and it's a testament to the power of the language.

**Mat Ryer:** Yeah.

**Preslav Rachev:** About the things that I don't like about Go - as I've just said, there were a lot of things that I didn't like about the language, but in time I learned to love them.

**Mat Ryer:** Yeah, I had the same journey. I used to do a lot of C\# in the past, and I think I have some examples of really good use of object-oriented structures and type hierarchies, and things. I also have a few examples where I built monsters. I built some cathedrals, and I built some monsters, too. And you know, when I went to Go and realized that you don't really do that, it did feel like a limitation. But of course, now I find code much easier to read. There's less chasing around, trying to understand the structures that are built there. Of course, there's still that to do, and of course, you can still make a mess in Go, and I'm sure I do sometimes... But I agree, I like that it has fewer language features. You're sort of then left building things with those more primitive features. Mathilde, what do you think? Is there something in particular that you like about Go, and something you perhaps don't?

**Mathilde Raynal:** \[00:27:51.02\] Well, the thing that I like really the most is... I mean, I work mostly in groups, and really, this ability to read the code after someone and to understand what the code is doing, what they intended to do and what it's achieving - it saves so much time, first of all. And it's so much simple to read Go than other languages, from a personal point of view. But this may be biased, because I've gotten to know Go, so maybe I just read faster...

And from the things that maybe I like less - I think that would be when comparing to other languages it's maybe this lack of enforced security, if I can put it like that.

**Mat Ryer:** What do you mean?

**Mathilde Raynal:** \[unintelligible 00:28:39.02\] comes strong with all those things, and I'm wondering where it could go from there.

**Mat Ryer:** Yeah, we just had a security panel with some of the Go security team. That was a very interesting conversation, and they were talking a lot about trade-offs that they have to now make, and they have the backwards compatibility to consider, and things. So yeah, it's a kind of interesting problem. What about something you don't like as much then in Go, Mathilde? Is there anything in particular that you don't like about Go?

**Mathilde Raynal:** No, I mean -- I agree that this is something that \[unintelligible 00:29:15.25\] but other than that, truly nothing comes to mind.

**Mat Ryer:** I see. Gotcha.

**Natalie Pistunovich:** I have to say, to your point of Go being so well read... I recently found myself reading lots of code in other languages, and I just come with this expectation of just easily reading and understanding people different and different company cultures, and stuff... And it spoils you a little bit. And it's true, it can be that this is because you've been doing Go for long enough, but it's probably just because the language is so well read, and some other languages are not putting enough stress on that. So it definitely puts you in a spoiled position.

**Mat Ryer:** Yeah, the gofmt also - the formatting \[unintelligible 00:29:59.03\] all in the same way - really helps.

**Natalie Pistunovich:** Oh, yes.

**Mat Ryer:** It has the effect -- sometimes genuinely I've gone to a repo, looked in the code, and felt like I'd written it. That's how familiar it felt. And it's really quite a strange feeling... But yeah. I think the impact of that is that it has a great effect, and I agree, I don't think other people pay as much attention.

For example, everyone has linters, but they're all very configurable, because people have different tastes. So you end up with different rules. You kind of have to learn when you join a project; there is a learning curve when you get into that project, and that learning curve is not as steep, I think, with Go.

So you're all speakers at GopherCon EU 2021... What made you want to submit? What was the driving force behind that decision? Joakim, why did you submit a talk to the conference?

**Joakim Kennedy:** Picking on the one that didn't submit a development-focused talk the first. That's great.

**Mat Ryer:** \[laughs\]

**Joakim Kennedy:** We'd kind of just wrapped a report around what this talk was focusing on, and it sort of just came up on my radar. The call for papers was closing, and I thought "This could actually be a good introduction, at that conference", because it brings something different, but it is strongly tied to the programming language. So both a little bit of a challenge to myself, and then also sort of an introduction to the audience that would attend it, sort of shifting of how it would be presenting instead of moving it and talking to my peers that are well-versed in how malware functions, and things like that, to people that are fully aware of the language and its capability, to how that is being utilized in the field.

**Mat Ryer:** Yeah. It's a really good talk. I can't recommend it enough. How about you, Preslav?

**Preslav Rachev:** \[00:31:59.24\] Well, for me it's been twofold. Obviously, there's the selfish aspect to it, being a part of the community, and being able to exchange ideas, and just generally --

**Mat Ryer:** That's not selfish...

**Preslav Rachev:** I mean, people can think about it from the point of view of this guy who recently jumped into independence, and trying to build a network... Which is always there. It's always one of the aspects of making a talk and participating in a conference... But I think the real driver behind it was that I wanted to show something different to the audience, something that -- we all know what the language is capable of, and what it's not capable of, but I think many people would see Go and say "Yeah, it's good tooling, and systems, and infrastructure, maybe some backend language", and I wanted to kind of challenge this, on the one hand, and say "You know, it's actually good for artistic stuff as well.

And if I could think of even a third reason right now, is to be able to just give people something nice, something that they can do for themselves... Just experiment and play. You know, these last -- not two years, but it's been forever since we were able to physically meet each other, and network, and kind of enjoy just talking to one another, and being able to produce something nice that just makes you feel proud of yourself is something that I also wanted to give to people.

**Mat Ryer:** Oh, that's great. I think they're completely noble reasons. And yeah, you seemed a bit reluctant to talk about the profile thing, and networking, and that effect that happens, but that is a real effect, of course... That's why we always like to encourage new people to come and speak. And similarly, the point you made about you wanted to give people something to play with is something I think that does get a bit overlooked. When we get stuck in our jobs and we're focused and we're busy, we don't sometimes have space to play, but it's so worth it, because you never know what new thing happens, what inspiration is gonna hit you, that you can then apply in other ways.

One example that stands out to me is for particularly your stuff, Preslav, the artwork design, generating that with code... GitHub recently - when you share an issue in social media, the social image that's in the metadata is a little image that shows the issue, and you can see some kind of stats, and you see the title... So it's a kind of great experience when we're now sharing links around that get unfurled, people can see a little preview of it... You could definitely take the stuff from your talk and enhance that, and use that in a way to make those more interesting, and things like that...

So just as an example of something that occurred to me when I watched your talk... You never know. So I think it's important - we should make time to play; the benefits are there, and it really can spark that creativity, can't it?

**Preslav Rachev:** That's actually a great idea. I think I haven't thought about that in particular, but it's actually a great idea... Turning that maybe (why not) into an actual product, or something; something that stands as a service on its own. But to your point, Mat - I recently had this conversation with a friend of mine, and we were talking about side projects, and what they're good for, and what they're not good for, and I think what came out of this discussion was really that one thing that you can allow yourself to do in a side project that's not your job is you can fail easily. That's one thing that also relates very well to the artistic stuff, because in producing these images, I think I must have failed like 100 times before something that caught my eye came up... And that's actually a good thing, because it forces you to change things, it forces you to tweak parameters, to maybe put a little bit of a timer in front and see what happens... It forces you to tweak these things.

\[00:36:10.12\] And I think it's generally a great idea if people find these sort of tiny ways to just move -- maybe use the same tools, and the same skills that they do in their dayjob, but use them in a different way. I'm not really into IoT, but I've seen some amazing stuff, like people using Go for microcontrollers, and things like that, which is also - you know, full respect.

**Mat Ryer:** Yeah. You make a great point there, because it's that ability to fail... And this is something teams need to try and work on, I think... You have to be able to fail, otherwise you're not gonna take any risks. We need to take those risks to try the things out, and that's really where innovation happens, a lot of it. So yeah, I think that's a great sentiment. I'm pleased you said that.

Mathilde, how about you? What inspired you to submit a talk?

**Mathilde Raynal:** So this library and the talk \[unintelligible 00:36:58.19\] is based on my master thesis. And the guideline that I used and really what I wanted to do is to answer the question of "How can we make \[unintelligible 00:37:09.01\] cryptography more accessible? One of the obvious answers is "Well, get it out there, and let's talk about it." So that's really cool personally, to be able to present it at GopherCon, that's for sure.

**Mat Ryer:** Well, it's such an interesting subject. Is there gonna be like a Go package that has an interface as though it's quantum-enabled? Is that possible, or the concept's just too bonkers for that to even work?

**Mathilde Raynal:** Well, we make things really simple. We really looked at what exists. We have for example a signature mechanism, and there are things like exist, like -- I mean, many people use ECDSA, and things like that... So we tried really to provide a library that is super-simple, very like a signing step, verification step, and people are not ever aware, both in terms of what they can read, and the performance of their project, that they're using stuff that is potentially going to protect their data well into the foreseeable future... And really, that was also a key objective.

**Mat Ryer:** Yeah, that's great. Again, the same thing applies - go to YouTube, search for GoperhCon EU 2021, check out the talks. You are in for a treat.

**Break:** \[00:38:35.11\]

**Mat Ryer:** So, who has an unpopular opinion for us today?

**Mathilde Raynal:** I was gonna go for like pineapple in pizza, and then I realized that I'm a student and I have to be more serious, so...

**Mat Ryer:** \[00:40:07.01\] No, you don't. You really don't. That is a great one. \[laughter\]

**Mathilde Raynal:** Well, anyway, I have a backup, so if you don't like, we can always go back to the pizza one.

**Mat Ryer:** Yeah, the pineapple -- what's the backup melon?

**Mathilde Raynal:** So the backup is that I think that Python is actually not that great.

**Mat Ryer:** That's not gonna be unpopular in this conference, I think... \[laughter\]

**Mathilde Raynal:** Really?

**Mat Ryer:** Yeah. But it's used a lot in maths, isn't it? And in machine learning, and things. So it has a kind of precedent of mathematical libraries that people use, and that's why -- and I think \[unintelligible 00:40:41.19\] carried it through. But what is it you don't like about it?

**Mathilde Raynal:** Well, there are many things... For example, I feel like it's really slow. If I have an idea and I want to go from paper to code to show that works - well, performance is going to be one of my criteria to see whether it works or not. So if it takes twice the time just because I've chosen to use Python, I'm not gonna be happy with that. Also, the fact that it can only do one thing at a time - this is super-annoying.

**Mat Ryer:** \[laughs\] Yeah. You wouldn't like me then... I can only do one thing at a time. \[laughter\] Brilliant. Let's find out - Joakim, pineapple on pizza? Yes or no.

**Joakim Kennedy:** I prefer not to answer. Don't wanna sway in any direction.

**Mat Ryer:** Oh, really?

**Joakim Kennedy:** So - somewhat in the technical... I'm thinking about like in the technical field, and stuff like that... The thing of ease of use of technology I believe is a detriment to the society. It's leading us down a problematic path. The younger generation is growing up and they're operating in this abstract area, and doesn't necessarily understand what is actually happening under the hood... And I think it's almost like a de-evolution because of it.

**Mat Ryer:** That's interesting. It's funny, because I have nephews and nieces, and honestly, they're better -- they can't talk, but they can use an iPad no probs... And I mean that. They properly know what they're doing on a iPad. They can't talk. It's mad.

**Joakim Kennedy:** Yeah. But then yourself - you're probably in that generation, and sort of grew up with \[unintelligible 00:42:34.08\] started writing actually Assembly, and code your own games, and things like that, or programs... And you actually are moving data around, which is so close to how a CPU works... Versus swiping on screens.

**Mat Ryer:** That's true. The mechanical sympathy with the machine does help, definitely. But you know, if your goal, if your job is to build an application, maybe it doesn't really matter what's going on down at the Assembly level, does it?

**Joakim Kennedy:** I mean, maybe it is a little bit too low of a level, but I'm thinking more in general. The technology is sort of growing out, and it's being used so much, and the general understanding of what is actually happening is not there anymore... Or is moving away.

When we think about it, 10-15 years ago if you had a car, you can take it to the car mechanic and you can do a lot of stuff, or you can figure it our yourself by just popping the hood and checking it out. Nowadays you can't even pop the hood on some of the cars. I've no clue what's going on under there.

**Mat Ryer:** Yeah, that's very true.

**Natalie Pistunovich:** You have to put a USB stick.

**Joakim Kennedy:** Yeah.

**Mat Ryer:** \[00:43:55.27\] So on that - my oven recently broke, and the engineer came out, he took the oven out, and the oven was just like a couple of wires into a hot plate... And then it was just a motherboard on the back. And he's just like, "Yeah, I've no idea." If it's not working, it just doesn't work. You just need a new thing.

**Natalie Pistunovich:** You need a computer engineer for that.

**Mat Ryer:** Yeah, yeah.

**Joakim Kennedy:** And you don't want to get into this situation where your dinner gets burned because AWS has had an outage, and it couldn't tell the oven to turn off.

**Mat Ryer:** Yeah. You don't \[unintelligible 00:44:24.13\] in your flat. Preslav, how about you? Do you have an unpopular opinion?

**Preslav Rachev:** Well, actually I do. Before I say my unpopular opinion - or maybe it's popular; who knows - I would have to throw away everything that I've just said about Go's simplicity, and being nice to read and write... So my unpopular opinion for the day, trying to put it nicely, is we need more magic and more Java-like enterprisy-looking frameworks in Go. I'm kidding, of course, but there's a little bit of truth to that, and I'll just give an example with my own experience, both while picking up the language and both as kind of trying to sell my services to small teams, or people who have existing projects that are just migrating to the language.

So the thing is we know that the language can do a lot more than just what people assume by idiomatic. To give maybe a simple example is reflection. You could do a lot of stuff with reflection, and we oftentimes avoid it, or just push ourselves to avoid it, thinking that "No, it's not idiomatic, and there's too much magic in it. We can't see what's behind those tags, and who knows what's happening... Maybe it's taking too many CPU resources" and whatnot. Yes, absolutely. And there's a time in the evolution of a project when all of this can be fixed. But usually, when people are starting -- and especially the kinds of projects that I'm working on, which is like trying to challenge a little bit of the realm of Rails, and the web kind of CRUD applications, is at the beginning of each project you just need to bootstrap it and get something going; you need to test your concept, you need to get it out to the world and see if it's working before you start optimizing. And oftentimes, the best solution is "Who cares...? We all know that ORMs are bad and they do too many queries, but if you can quickly hook up an ORM and it just does the job, then so be it. We will eventually figure out a way to improve it."

I don't know what you guys are thinking about it, and I don't wanna push this too much into a territory where I can get a lot more enemies than future clients, so...

**Mat Ryer:** \[laughs\] No, no, no. Honestly, it's funny. It kind of depends on the problem you're solving.

**Preslav Rachev:** Yes, obviously.

**Mat Ryer:** Things are different. I think you have to make those decisions depending on your situation. It can be impacted by how many people are working on the thing. How long is the thing gonna live for? Is it something you just need for a week and then you throw it away? Or is this gonna be a big project spanning months and years, with many people working on it? All of that would influence that decision, so I think it makes sense.

**Preslav Rachev:** From my experience it's always circumstantial, and it always undergoes further evolution, so there's always a point in which it can be fixed.

**Mat Ryer:** Very interesting. Well, that is our time for today. Thank you so much to Natalie Pistunovich for helping co-host today. Thank you, Natalie. And thank you to our speakers. Preslav, thank you very much. Joakim, always a pleasure. Mathilde, lovely to meet you. See you next time!
