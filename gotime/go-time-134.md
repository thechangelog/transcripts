**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we've got a very special show... We've invited three people along who are at various points in their careers. We have Aditya Prerepa, who is a high school programmer, we've got Shaquille Que, who has actually just started his first day internship, and we've got Benjamin Bryant, who is in his first Go position. Welcome, everybody! It'd be great if we could start off - maybe Aditya, you could tell us a little bit about yourself and what you're up to.

**Aditya Prerepa:** Sure. I'm Aditya, I'm currently 15 years old and I'm a sophomore in high school. I have been an intern at Life360, doing Android stuff, and I'm an incoming intern at TaoSecurity, doing backend and frontend security stuff. I'm currently trying to open-source at Istio.

**Mat Ryer:** Cool! Welcome to the show.

**Aditya Prerepa:** Thank you.

**Mat Ryer:** Shaquille.

**Shaquille Que:** Yeah. I'm Shaquille Que, I'm 20 years old, I'm studying computer science and math double major. I will be in my third year this coming fall, and like Mat said, I'm doing an internship right now. Today is actually my first day. I'm currently interning with a Go team to improve package.go.dev. This is my second internship; I interned at a small startup also in Go last year.

**Mat Ryer:** Great. Thank you, and welcome to the show. And Benjamin Bryant - hello, Ben.

**Benjamin Bryant:** Hello. I'm Benjamin Bryant and I graduated university around a year and nine months ago; I've been in my first professional Go position for around nine months. I'm currently 24. When I first got invited to the show I thought I'd be the youngest here...

**Mat Ryer:** \[00:03:57.20\] \[laughs\] Yes... Well, this is actually a really interesting subject, I think, because a lot of us take a lot of things for granted; we've also been doing this for many years, and it's difficult to remember what it was like in those early days. Also, the world's probably completely different. So I'm excited to hear from you what it's like and what your experience has been, and I think also our listeners - and hopefully we'll pick up some listeners that are also kind of in your position, or maybe a year or two behind each of you, and hopefully we can shed some light on things for them as well. That will be very interesting.

First of all, let's find out - why Go, specifically? We're all here because we're dealing in Go, in some way... Ben, what was it about Go that attracted you?

**Benjamin Bryant:** Well, I kind of got into Go by accident, in the sense that when I first graduated, the only job I could really find was a C\# position... So when I first got that job, a friend invited me to the GopherCon pre-drinks in the U.K. At the time I'd never heard of Go, and I thought GopherCon was like a conference for the fluffy animals... So I was really looking forward to checking it out. But when I got there and I went downstairs and \[unintelligible 00:05:20.19\] there was like a programming language, I've gotta say I was actually very disappointed... \[laughter\] After talking and listening to (I guess) everyone talk about what they were doing - the language Go at least has a bunch of other different words attached to it, that I had also interacted with in university. That kind of made me want to at least follow up on that and try and find out what it was about. That's how it happened.

**Mat Ryer:** Yeah, that's really cool. So those other things - do you mean things like channels, and goroutines, and these kinds of concepts?

**Benjamin Bryant:** Well, even that. But also going to different Go meetups - similar to how on Go Time it says you guys talk about microservices and Kubernetes, and words like that, those were words I had never encountered at university, at least while I was there... And I definitely wasn't self-studying or researching, because I don't think the word "Kubernetes" even existed to me until I went into -- I mean, I have no idea why would you ever Google that word at all, for any reason... But yeah, it's very ubiquitous. Even something like Docker is something I'd never even heard about before encountering this kind of community.

**Mat Ryer:** Yeah, so I wonder then -- because a lot of the things you've talked about are quite new, or certainly were quite new... And I suppose the computer science courses and things take a bit of time to catch up with that... Shaquille, when you start with your internship - well, you're starting today - how did you find out about that? How did you get into doing that?

**Shaquille Que:** Are you talking about the Google internship right now?

**Mat Ryer:** Yes. Yeah.

**Shaquille Que:** Well, my experience is that at college a lot of people are really into applying for internships, and getting more experience there. Like Ben said, there's a lot of things that you get out of internships and industry that you don't get in university courses. So at least in computer science the majority of students - or I guess a lot of students - apply for internships, especially their sophomore and junior years... And I was just kind of going through a bunch of common places where people applied to, and Google had one of the best internship programs out there. I just applied.

\[00:07:56.11\] The way it worked - I actually didn't get in by just applying online; I was actually looking at a bunch of conferences in Google, and then a panel popped up and said "Hey, up for a challenge?" And that was the famed Foo bar challenge; I tried my hand at it, it was really fun. I was a little disappointed there was no option to use Go as a language, but I went through the challenges and then a recruiter reached out. That's how I got started with this internship.

**Mat Ryer:** So you knew about Go before that then... How did you find out about Go?

**Shaquille Que:** Yeah, I found out about Go in my first internship last year. When I was applying to a bunch of jobs, several of them mentioned Go. At the time it seemed interesting, it seemed pretty hip. I looked it up online, the website was pretty cool. I learned a little of the tutorial for Go, but I didn't really get anything outside of that, aside from the basic syntax. I learned more about Go during my first internship, where everything was really in Go. I got to do really cool things, building for example internal tools, and fixing bugs, learning about the software that they were building... And that's really my first experience with Go.

**Mat Ryer:** Yeah, that sounds really interesting. It's funny that you mentioned that the challenge you did was fun. I think that's something that I remember being very important - and still is today - whenever I'm looking at a new technology; the technologies that I find the most fun and I have the most enjoyment with are the ones that tend to stick. Aditya, is that the same for you? I mean, you're in high school, so you're technically -- I mean, you don't have to be doing any programming at all, do you?

**Aditya Prerepa:** No, I don't. But I guess the entire idea of making stuff has always enthralled me. Just to give you a bit of an example - the way I got introduced to go was I was doing a lot of server programming, and I was doing it primarily in Java. I didn't like it much, but I didn't really know what alternatives were out there, so I was just doing some research and I came across Go. And it turns out that Go is really good for server programming, and I slowly learned it through example in projects, and stuff... And the one condition that I did these projects on was they were fun; I kept doing these, and I slowly got better, and I went from basic Hello, World to concurrency, and stuff. I appreciated it for what it was.

**Mat Ryer:** So what sorts of things were you building?

**Aditya Prerepa:** For example, I use gRPC a lot with Java, so I try to implement that with Go --

**Mat Ryer:** What 15-year-old doesn't...?

**Aditya Prerepa:** \[laughs\] Yeah... I tried to implement that with Go. I did a little server, and then I used the grpc-gateway, if you guys have heard of it. I tried doing the transcoding from JSON to protobuf... And just little things like those, that were in my mind really fun, because I could transform one thing into another... Yeah, just things like that.

And then recently I learned a lot about concurrency through this project I did, this Cloudflare internship program, which was to provide a ping. You could choose from C, C++, Rust or Go. I chose Go, and it was a great choice.

**Mat Ryer:** Yeah. Did you say that was Cloudflare?

**Aditya Prerepa:** Yeah.

**Mat Ryer:** I know that they do have a lot of Go at Cloudflare. Yeah, it's interesting we talk about the fun aspect... It is about kind of playing and creating, isn't it...? But are there any things that stand out so far as the bits that you're not as interested in? Are there any things that you've noticed that you think "Yeah, that kind of area isn't for me"? Aditya?

**Aditya Prerepa:** So all the buzz is around AI and ML, and stuff. I have tried that... I guess I'm just not ready for it, but I didn't really get it that much. And then, low-level bit operations - I've tried to write C code, and I've tried to write low-level code stuff in Go, and I didn't really like it that much, because I guess I couldn't do much with it, if that makes sense. I could do more with building stuff like servers, and stuff like that.

**Mat Ryer:** \[00:12:10.15\] Yeah, absolutely. Higher-level concepts. That's definitely true, and one of the nice things about the Go team - because that's where they spend all their time, is down in the guts of the language, and the compilers, and all that stuff. And they get to do all that work, and then we don't have to worry about it. We can kind of just use all their hard work to then build real things. How about you, Ben? Is there anything that stands out so far? You're already into your first position, right?

**Benjamin Bryant:** Yeah. But by "stand out" - do you mean in terms of the language, or in terms of working with it?

**Mat Ryer:** Yeah, sorry, I meant - does anything stand out in particular, an area that you're interested in? And then also, is there an area that you find not so interesting?

**Benjamin Bryant:** Currently, at least on a professional level, I haven't had any experience to at least delve into areas in practice, if that makes sense... Right now I'm working within the payments area of tech, which is an area I didn't even know existed... But there's a whole area that is all dedicated to how users pay for things. I assume there are possibly a whole bunch of different areas for a whole bunch of other things that I don't even know right now, or haven't even touched.

I suppose there is kind of a difference between trying something out and then seeing how it's used in reality. So I'm probably still open to just trying things out, if I've got the opportunity to do so. But right now there isn't really anything that I would say I wouldn't look into. I haven't looked into everything.

**Mat Ryer:** Yeah. Well, I think that's a great attitude, actually, because especially when you're starting out - you're right, things are different; the different types of problems... You get to flex different muscles, and things. Can you tell us a little bit about what you are working on? Is it secret, or can you talk a little bit about some of the tech behind it?

**Benjamin Bryant:** I don't know if it's secret, which means I don't know if I can talk about it. \[laughs\] Well, there's something that currently came out recently, and since it's out, I suppose I can talk about it... It was interacting with a different payment -- this is actually not that interesting...

**Mat Ryer:** No, it is.

**Benjamin Bryant:** I'll probably give an example...

**Mat Ryer:** Oh, okay. Well, it sounds like we're talking about interfacing with a different system, and you're doing that a lot. I've definitely spent a lot of time in my career interfacing with another system... So it might be more interesting than you think.

**Benjamin Bryant:** Well, it was just the idea of -- there are different payment service providers, and we have a little service that talks to these different payment service providers, and I worked on implementing another one.

**Mat Ryer:** Oh, right.

**Benjamin Bryant:** That's why I \[unintelligible 00:15:05.02\] too much attention... But I guess there was also this other project that is currently out, that I got to work on a tiny bit, and that was rounding up for charity, when someone tried to pay for something.

**Mat Ryer:** So tell us how that works. What is that feature, first of all?

**Benjamin Bryant:** Well, what that feature is is that whenever a customer wants to buy something, they now have the option to round up -- I'm in the U.K, so it's pennies to pounds; in the U.S. it's cents to dollars... So it's just rounding up to the nearest dollar or the nearest pound. And then we have to also keep track of these donations, obviously... Since if we just took someone's donations and didn't keep track of it properly, I guess that would be illegal.

**Mat Ryer:** \[00:15:53.13\] Yeah, you can't just cast a float to an int and go home, yeah. Absolutely. You wanna keep track of that. Okay, cool. So what was the tech involved? What sort of things did you actually do as a team to make that happen?

**Benjamin Bryant:** Well, the thing that I've found interesting around that project - at least what I've found in building something new - is that I got to experience the software architecture park... I think if you guys have done interviews, and stuff, there's always that software architecture interview, which you basically have to design how things are gonna go in put together... But a lot of the times it doesn't show up straight away. So being able to take part in the high-level part before that, which was scoping out how I would do this, scoping out changes to the database... We would do scoping out how things would link together and how they would talk to other services. I actually found that kind of interesting; I never really got a chance to do that before, and I'd mainly just previously been working on -- even in my previous position, I was working mainly on doing bug fixes... So being able to move on to the full designing a system - that's what I found quite interesting.

**Mat Ryer:** Yeah. I mean, that is quite unusual, because often as a junior dev you do kind of end up getting just bug fixes. That is a very common thing to happen. So it's kind of awesome that you're getting exposed to different things. Shaquille, how about you? It's just your early days for you, but have you been working on anything so far, or have you worked on anything interesting you could tell us about?

**Shaquille Que:** In terms of personal projects, usually my bar for working on a personal project is pretty high. It's really something that I have to be interested in, so I have to be invested in it. That way, I can see it through. The last thing I worked on was actually writing an interpreter in Go. I've just mainly followed along with a book - I think it was Thorsten Ball's book "Writing an interpreter in Go". I've found that really interesting.

I guess \[unintelligible 00:18:03.04\] as Aditya here, where I kind of like low-level stuff. I wanna see how things work under the hood, as opposed to higher-level stuff.

**Mat Ryer:** That's interesting - Thorsten Ball, his book about... He wrote a book of how to write an interpreter in Go, and there's a follow-up for compilers. And I always think for me the best way to learn something is actually by building something. Do you find that that is a good way for you also to learn? Since you're building and implementing a real thing, an interpreter, in this case...

**Shaquille Que:** Absolutely. A lot of times I read up on things, and that gives me a higher-level understanding of how things work, in a way... But I don't really understand how they fit in together until we start going down and actually doing the things yourself. At first I was just browsing through the interpreter book, and going "Huh. Interesting. Cool, cool." And then I'd say "I'm not really learning much out of this", so then I started getting my hands dirty and actually following along with the book, writing the code, and then trying to write the code myself without looking at the book, and see how differently the implementation would come out... And that's when I began to understand really "Okay, so that's how an interpreter works."

**Mat Ryer:** Yeah... I think that's great. That's always my one piece of advice when people ask "How do I learn more?" It's to build real things. Aditya, it sounds like that's similar to your approach, too; you spend a lot of time building real things, prototypes or actual things, right?

**Aditya Prerepa:** Yeah. Do you want me to talk about some of the stuff/projects I've built?

**Mat Ryer:** Please, yeah.

**Aditya Prerepa:** \[00:19:50.27\] Okay. Well, they're not all in Go, but they're still pretty cool. One of them was a fingerprint-based attendance system for my school. Currently, students walk in and they all sit down, and then if one teacher messes up, they have to redo the entire thing. And so I thought "Teachers shouldn't have to be counting the number of students", and them saying "Here. Here. Here. Present. Present. Present." So I was thinking, everybody has a fingerprint; fingerprint sensors are like $5 now, and if you connect it to a Raspberry Pi and connect that to a server and a database, you have an attendance system. So I built that.

I built a prototype and everything worked, but then Covid-19 happened, so then no school. There's two sides to that.

**Mat Ryer:** Yeah.

**Aditya Prerepa:** And currently, I'm working on this order management system for grocery stores to help with Covid-19. On the website you fill out the items you wanna get, and then when you send that, it sends an order to the backend, and then the backend sends an email, and then there's also an interface for this store to view the orders, and then mark orders as completed, and stuff. And the backend is completely in Go; Lambda, some pretty cool technology there... But yeah.

**Mat Ryer:** They sound great. That thing, the Raspberry Pi and the fingerprint thing - whatever tech crosses into the real world, I think things can get very interesting, can't they? Obviously, we're not allowed to touch things now, so that's ruined that, but... Yeah, okay. Brilliant.

What were the challenges around doing that? What was the hard bits when you were building those projects?

**Aditya Prerepa:** So I guess for the fingerprint stuff I had to go through the bureaucratic hassle of talking with the district technology representative person, and then I had to get an affirmative from him. Only then I could start collecting fingerprints... Because you could extract these fingerprints, and we're all minors, so it's sort of an invasion of privacy if it's not dealt with right... So yeah, we had to deal with that; that was the bad part about it.

Like I said before, I don't really like to interact with really low-level stuff, but this fingerprint sensor didn't have great interfaces, so I had to do some bit-twiddling, and stuff... And that wasn't fun. But yeah, you do what you have to do.

**Mat Ryer:** That's really interesting.

**Break:** \[00:22:30.14\]

**Mat Ryer:** It's funny that the politics almost in that was the challenging bit... And I wonder, is there anything that stands out as kind of intimidating or concerning? Is there anything that stands out like that when you look at tech? Or is it all just kind of new and exciting, and you're not too worried about anything?

**Benjamin Bryant:** I will try not to think about that... Because if I think about all the overhead that I'm gonna get, I probably won't do the project. So I try not to think about that stuff.

**Mat Ryer:** What about you, Ben?

**Benjamin Bryant:** What I find to be a challenge sometimes is -- I don't know if this is a word, but self-propellence.

**Mat Ryer:** Hm. What do you mean?

**Benjamin Bryant:** \[00:24:07.27\] I don't know if everyone else feels this as well, but sometimes when you need to teach yourself something - let's just take a random example, like if I needed to teach myself Docker. You go to the website and then you have to read -- you do need to read; I mean, I guess you could watch some videos as well... But you kind of need to get your hands dirty and you need to start working on stuff. And I find that sometimes without some kind of catalyst, it can be difficult to want to continue with a project, or to see it through to the end.

One of my first Go projects that I worked on as a sort of joke is that I wanted to model the life of a million gophers (as in the animal) in Go, just as a way to learn how to use Go, because I'd never really used it before. And if I was just doing that on my own, if I was just trying to learn Go on my own, I don't know if I could have pushed through and gone and tried to learn through everything... But because I had volunteered to try and give a talk about me learning Go, that had a fake deadline involved in it. And having a deadline there was like "Okay, I need to keep moving myself forward." I think that could be something that you could kind of use; if you can somehow find a way to maybe just impose a restriction onto what you're working on, it might drive you to work for it, essentially.

**Mat Ryer:** Yeah, that is interesting. There's another thing that happens as well, which is we tend to want everything to be perfect. So when you're building something, you just want it to be the best it can be... And sometimes a deadline helps with that too, because it forces you to prioritize. You mentioned giving a talk... I saw that talk, because you did it at the London Gophers, right?

**Benjamin Bryant:** Yes.

**Mat Ryer:** Yeah, and it was great. I remember the audience loved it. You were kind of talking as well about your story of learning this, and this way that you went about that. So did that talk - it was a catalyst for you to actually do and deliver... But was there also value in that, in giving the talk as well? And was that a kind of scary thing to be doing?

**Benjamin Bryant:** I found at least doing the talk kind of helped me get more engaged with the community, since after the fact, since people had seen the talk and they were willing to -- I guess it felt easier walking up to people and talking to them, which could help with at least unlocking a new language, or unlocking different places that you might find and think about applying Go to.

Yes, I guess it helped with me wanting to program something, because I knew that at the end of it I would be presenting it... So that kind of drove me to at least want to do a good(ish) job on what I was doing.

**Mat Ryer:** Yeah, absolutely. And Shaquille, how about you? Is there anything that stands out as a kind of intimidating or worrying area in particular, as you look forward in your career?

**Shaquille Que:** As I look forward in my career, I would say the most concerning right now is graduating in a recession. I hear a lot of stories from back in 2008, or even back in the 1980's, when it was very difficult to find jobs and when a lot of people were losing their jobs... And I think it's also already kind of happening right now, where a lot of companies are laying off and a lot of companies are also going under.

\[00:28:02.23\] I know that in the future the tech industry will still keep growing, and even right now, a lot of the big companies like Facebook and Amazon are still aggressively hiring... But it's still scary to think that right now it's gonna become harder to find jobs, and graduate in a \[unintelligible 00:28:19.29\]

**Mat Ryer:** Yeah, I think a lot of people share those kinds of concerns. Tech isn't immune, of course, but in some ways -- look at remote work; that's kind of an example of something that I think the world has changed with remote work now. The prevailing attitude was that remote work wasn't right for every company, and people were very used to being collocated... And since we're now all forced to be working remotely, people have seen "This actually works", and there can be some benefits to it, as well.

So yeah, I think, Shaquille, you're right - there's gonna be things changing, and hopefully there is still enough opportunity within that to be kind of getting stuck into. Shaquille, have you done any talks, meetups or anything? Or would you consider something like that?

**Shaquille Que:** I have not given a talk, if that's what the question is... But I have attended some meetups; I've gone to a couple Austin Go meetups, and that was pretty interesting. This was around last year, last summer. At the time I was a freshman student, and I didn't really understand a lot of what people were saying, and a lot of tradeoffs they were discussing were just not things that I'd run into at all yet, at least in my career... And now I think I have a little more understanding of that, just from looking around in Reddit threads and Hacker News posts... Which are pretty interesting, by the way.

But yeah, I'd say those meetups - a lot of those meetups can be intimidating at times, because if you come in and you don't know anyone, it's pretty hard to interact with people. Also, when people start talking about what they're doing, and all this really cool tech stuff and you don't really understand what they are... It's just kind of hard to "Hm. I see..." or just keep asking "Can you tell me more about that?", because then you're gonna take up all their \[unintelligible 00:30:27.11\]

**Mat Ryer:** Is that what you did though? Would you ask people questions?

**Shaquille Que:** I'd ask them to a certain level, like maybe four or five questions in, and then I'd stop right there, because I'm sure they wanna talk to other people more at that point.

**Benjamin Bryant:** From my experience, I think people like talking about stuff that they're interested in... Because when I went to these meetups as well, as I mentioned earlier, I didn't know what Docker was, or anything like that... So similar to you, a lot of this stuff went over my head. But I'd still go to a pub afterwards and I'd still ask questions... And especially if you can somehow find someone who's working on something - if you simply ask why a couple of times, or even just ask some questions for them, they will continue talking for probably longer than you'd want them to anyway, because they're just that interested in what they're doing. So I wouldn't worry too much about that.

I also found that meetups were a great place to unlocking language... So much stuff that's mentioned there is just stuff that's kind of internally known, and is very difficult to find entirely on your own. But at least if you got there, you can pick up the words you need to google afterwards.

**Mat Ryer:** Oh yeah, that's really interesting. Do you find the same, Aditya? Do you find yourself in these communities and there are concepts and things that you don't seem familiar with, and it gives you something to go and look into?

**Aditya Prerepa:** \[00:32:05.25\] Oh, yeah. I can talk a little bit about my open source -- like, trying to open-source... Because I kind of knew nothing about -- like Benjamin, I knew nothing about Kubernetes, Docker, any of this stuff, but I found out the best way I learn was through experience... So I decided to pick a repository on GitHub, and you go and just jump into it. My first attempt was gRPC, and I knew nothing about a lot of things... But I've that I couldn't do much there, so I decided to go to something else. I've found that in Istio, where I'm currently contributing, where I've sort of found my niche, everybody there is super-nice and supportive... And I sort of like bug people on Slack about certain things, and they're so nice about it, and they always answer. Yeah, just learning through people, and experience, and reading stuff. That's how I sort of get myself to where I wanna be.

**Mat Ryer:** Hm... That's interesting you say "bug people", and it's a shame that it feels like that... But I think there is a bit of that. You have to sort of be a little bit like that. In fact, Aditya, you reached out to me to pitch coming on a podcast, for example; so it's that very proactive, quite a bold step. It's not without risk; those kinds of things can be quite embarrassing if they don't work, so it's a risk you take... But if you can, I think it's a risk worth taking. Now we get to meet you and hang out on the podcast, so in that case it worked, so that's great.

Are there other people your age and in your school that are doing the same kinds of things in tech as you, or are you sort of unusual there?

**Aditya Prerepa:** So I don't wanna be unusual, but... \[laughs\] I have a friend, he's sort of the opposite of me. He loves doing little bit twiddling, and he loves doing low-level stuff. He's super-smart. But yeah, he's the only other friend I know who actually is super-interested in this stuff... But it's not to say -- like, I was just lucky to have found something that I really love this early. People will find their things eventually; it's no rush.

**Mat Ryer:** Yeah. Very wise words, annoyingly... \[laughs\] You're right. And I mean "unusual" in the best sense. I think you do sometimes - and I don't know what it's like now, but I know that when I was... Because I was kind of a programmer at school, and it was strange to be doing that; sometimes you kind of can get a bit outcasted, things like this can happen, too. But what's the technical learning there like? Do you have a computer science class, and what's that like?

**Aditya Prerepa:** Okay, so I go to school in the Bay Area. The Bay Area's high schools and stuff are notoriously known for being really competitive... And yeah, so we have a computer science course, but it's only available to 11th and 12th graders. I actually met the computer science teacher at my school; his name is Dr. Brocker, and I met him through a math class. I was taking geometry in ninth grade, and he taught that class for one period. And I met him through there... He saw I was interested in this stuff, but he sort of took me under his wing and taught me a lot of that stuff. He's sort of like a guru at Java, and stuff... And he really helped me throughout that process. But I'm really lucky to have that sort of person; a lot of people don't. I think having a mentor is what stops a lot of younger people from going out there and doing things. We do have a curriculum - it's sort of like algorithmically-oriented. Not really application-oriented, but yeah.

**Mat Ryer:** \[00:35:58.02\] Yeah, so speaking of mentors then... Shaquille - have you experienced that, where you've had some mentorship from somebody?

**Shaquille Que:** So I started in high school. I'm actually an international student; I think I forgot to mention that. I'm actually just here on an F-1 visa. I'm from the Philippines. Back in high school I started learning programming by myself, using an online curriculum from Stanford... And at the time, I really wanted to expand more in it, but I really couldn't find anyone at my school who either enjoyed programming as much as I did -- well, there were people in robotics, but it's a little different, because they're programming robots to move and do stuff, and I was more interested in using programming to solve problems.

Yeah, so we didn't really have a good CS curriculum or program at my school, and it was my understanding that a lot of other schools as well didn't have that, unless they're top of the top schools... So I'd say the closest I have to a mentor is really the manager I had from last year, from my internship last year. We're still in touch now; from time to time we check up on each other, just giving us updates on what's happening in my life, what I'm learning, books he's reading, and some suggestions for things to dive into. But yeah, a lot of it is really just me talking to my friends about cool tech, and then them sharing what they've found, and then we sort of dive into those together, or go into discussions about those together.

**Mat Ryer:** Yeah, that's really great, that you were able to find somebody like that, I think. And it's also funny, I noticed this theme of being really hobbyist, that then we turn into job, and definitely my route was that. I just couldn't believe I could make the computer do things. That was just an amazing feeling, and that never went away.

So Ben, did you ever have anybody mentoring you in this way

**Benjamin Bryant:** I feel if I say no, people who did might get offended... But I don't know--

**Mat Ryer:** I see. So less formal, but obviously there's been people that have helped along the way, of course.

**Benjamin Bryant:** Yeah, as in I've talked to many people about my issues through life; not just about programming issues, just issues in general... What kind of milk do I wanna drink, that kind of stuff.

**Mat Ryer:** Yeah. What sort of milk did you land on in the end?

**Benjamin Bryant:** I don't drink milk anymore.

**Mat Ryer:** Okay then.

**Benjamin Bryant:** It's a sad tale... \[laughter\] I think whole is good, because it has fat in it, and that's good for muscle growth... Anyway.

**Mat Ryer:** There's oat milk... Other kinds of milk are available.

**Benjamin Bryant:** Oh, you mean like milk that doesn't come from cows?

**Mat Ryer:** I don't know.

**Benjamin Bryant:** I guess that doesn't make sense... I guess programming is a bit like milk... \[laughs\]

**Mat Ryer:** Programming is a bit like milk.

**Shaquille Que:** Save it for the after-party. \[laughter\]

**Mat Ryer:** We know how to party on this show... I was gonna say, save it for our sister podcast, Milk Time... It's not a real podcast, so don't look it up.

**Benjamin Bryant:** I guess to answer your question - because I noticed you guys were talking about how you guys were sort of hobbyists and kind of went into it... But my route was slightly different; although I did do computer science at university, I don't think I opened the terminal on my computer and... Well, after all I was using a Windows computer, instead of Linux or Mac or something like that, which I guess all the hackers use (I said hacker/programmer).

I didn't open a terminal till I think after my first class at university... So I came into programming I guess a tiny bit late. And I also remember avoiding -- because it was Java at university, and I remember avoiding installing it on my computer because I found it too complicated to figure out how to install and then run it... So I just used the university's computers to do my coursework.

But then eventually, when I needed to actually do work at home, I kind of had to sit down and figure out "Okay, how do I install Java, so I could actually get to work?" So a slightly different path...

**Mat Ryer:** \[00:40:18.11\] Was that something that attracted you about Go then? The fact that actually it is quite easy to install and to build things. You don't have the JVM, right? You don't have these virtual machines... It is a simpler thing, is it not?

**Benjamin Bryant:** Well, at that point I had been in university for four years, so I kind of got over my fear of installing programming languages... I guess \[unintelligible 00:40:41.05\] actually avoid installing programming languages all the way to the final year. \[unintelligible 00:40:46.00\] in the first year. But yeah, it's actually pretty easy to install Go. I think at the time when I started using Go, there was this GOPATH thing. That wasn't easy... \[unintelligible 00:40:54.16\] I was like "I've messed up."

**Shaquille Que:** Go modules were the biggest struggle I had last year. I remember just being super-frustrated, trying to download dependencies for Go modules, and not finding a definitive resource out there that tells me "Oh, this is how you start a Go module. This is how you use it." But now, with the official support, it's a lot easier, and pretty much every new tutorial out there can tell you how Go modules work. But that last year, I had to ask people a lot of questions to really understand how do you use Go modules...

**Mat Ryer:** Yeah, me too, mate. And actually, it's the transition from GOPATH... GOPATH in the beginning was, in a way, kind of this minimalist idea, which is just this one path, and your code goes in there, and it follows the folder structure that also follows the go get kind of structure.

For a while, it really kind of was quite simple, and then it didn't quite scale, of course... So modules comes along, and we have to transition. So that's why - yeah, all the articles that just assume GOPATH -- it's just "Setup your GOPATH, and just link off to some thing." Suddenly, it isn't as simple as that... And I think that happens sometimes, doesn't it? In communities, when the things evolve and things start to change, it does create some tension.

What about you, Aditya? Was modules a tricky thing, or did it make sense to you?

**Aditya Prerepa:** Coming from a very JVM-heavy ecosystem, it baffled me, but I sort of got used to it through exposure. Yeah, GOPATH was sort of -- I got used to it, and then Go modules came out and it streamlined everything else, and now I just do go mod in it and I'm done, yeah.

**Mat Ryer:** Right. It does keep getting better. The Go modules implementation really does keep getting better and better... And I think in the next release we don't need to be doing go mod tidy, and things... I think it's sort of self-healing almost; it tidies up after itself. We'll probably end up doing an episode on that.

What other features of Go then do we like? This is a Go podcast... What's your favorite Go feature? Aditya?

**Aditya Prerepa:** I really like select and choosing from channels. I don't like saying stuff like "Code is beautiful", but that is beautiful. I just have multiple channels... Okay, so when I was writing the pinger for the Cloudflare internship, I had multiple channels. I had an interval time ticker, I would send the packet on a different goroutine, and then send the packet through the channel... And I could just select from all those options, and then I could just handle them in my own way... It just made things so easy, as opposed to Java, where you'd have a thread pulled in, and then you would do all this stuff.

Another thing I like about Go is you don't have to do a factory factory, like you would do in Java. It's just really nice and really simple.

**Mat Ryer:** I think that's a great choice. For concurrent programming, which is usually difficult to keep in sync and difficult to communicate and share memory and all this stuff... And yeah, I agree, that select block - only one of these cases can run at a time, so it gives you that synchronization point... Yeah, it can conceptually simplify things a lot. I think that's a great choice. What about you, Ben? What's your favorite bit of Go, mate?

**Benjamin Bryant:** \[00:44:21.06\] I would say the standardization of style - I think that's what it's called - in the sense that I've been using Ruby at my job as well, and that definitely has a lot more ways to do a lot of the same thing, and that can make it difficult to track things down. But having everything look the same and feel the same, I kind of appreciate that. It also kind of avoids the situation where you have to figure out what the team's code style is gonna be, and stuff like that.

I remember there was a university project I had to do, and there was a heated debate about how many spaces we were gonna do, and if we'd even dare to use tabs... And that was just one small part of the kind of code style we were trying to get going. I just like how just everything already has a style. It's a small thing, but it's very useful.

**Mat Ryer:** No, I completely agree. The Go project shipped in the very beginning with the gofmt tool, which did all the formatting. And you know, if you think about working on open source project, or actually collaborating in any way, it's quite important those things, especially when we're dealing with pull requests, and things... You don't want to see pull requests with just lots of formatting noise in there. What's nice is as long as everybody gofmts their code before they push it, you really only see what's actually meaningful that's changed; you don't see "Oh, this change, but also, look, my editors put all these tabs as well", so it's just red and green everywhere. So yeah, I think that is actually a pretty good choice as well, mate.

Shaquille, have you got a particular favorite language feature?

**Shaquille Que:** For me it's goroutines and channels, and sort of the idiomatic way to use concurrency in Go. I think the patterns that they want you to use for concurrency is very good in terms of how you can avoid a lot of the common pitfalls with parallel programming... In particular, I just finished a class last semester on parallel programming and different patterns, and I find myself translating a lot of those patterns into how they would work in Go, and thinking "Hm. That gives me a better model of how this pattern really works." And kind of contrasting it with Go, I can see why people encourage you to use channels, rather than for example giving new text everywhere.

**Mat Ryer:** Yeah. I think that's a great choice. The thing that attracts a lot of people to Go is the way that it handles concurrency, and treats it as a first-class concern. In fact, it was designed for modern architectures. If you think about C, it's kind of an older language, designed back in the '70s, when machines were just single-processor... It wasn't really networked in the same way. And modern systems are very networked, and multi-core, lots of processing speed and concurrent processing capabilities, and things... So the language kind of knew that when they designed it, so you do get that into the language. So again, great choice.

**Break:** \[00:47:43.01\]

**Mat Ryer:** Do you have any questions that we might be able to answer? And by "we" I mean me and also anyone else on the panel that might have an answer?

**Benjamin Bryant:** Yeah, I have a sort of different question now.

**Mat Ryer:** Go for it. Who doesn't like a surprise...? Is this gonna be about milk?

**Benjamin Bryant:** No.

**Mat Ryer:** Okay.

**Benjamin Bryant:** But it ages like it... No, that's a terrible joke. Anyway. \[laughter\] So we're on different levels, in the sense that Aditya - I could be assuming for you, but eventually you'll be heading towards university potentially, right? And Shaquille, you've currently completed university and you're like an intern - well, close to completing university, you're an intern, and then after this you're most likely gonna graduate and get a position.

**Shaquille Que:** I'm actually halfway through university.

**Benjamin Bryant:** Oh, well you're almost there.

**Shaquille Que:** \[laughs\] It's a long way off...

**Benjamin Bryant:** Oh, it's not that long, trust me... And I've graduated, I'm in my first Go position, and eventually I will most likely look for maybe a new place to go, like maybe trying to go towards a more senior level, or so on and so forth. So I guess my question is -- because we've kind of all been working towards something... I guess once you get past my stage, you kind of have to decide for yourself where you wanna go, and how you want to choose how to learn, or to keep learning, or something like that. So I guess my question for you, Mat, is "What makes you wanna keep going?"

**Mat Ryer:** Yeah, that is a really good question, which is code for "difficult to answer."

**Benjamin Bryant:** Apologies...

**Mat Ryer:** It's alright. I think it's just the love of doing it. I think it is that, ultimately. And to be honest, I've done jobs -- I've taken jobs before for the money. I took a job I thought "It's not gonna be the best job, but it's really well paid, and it's a step up", and all this... I always regretted those decisions. I was never happy. You very quickly get used to the money. Whatever money you make, you very quickly get used to it, and it stops being the incentive that it seems like it's gonna be, and so therefore it has to be the love of the thing, the belief in the project that keeps you going.

Essentially, as you've all kind of given examples of, when you see a real problem that you want to solve, that's the drive that keeps you. But yeah, I think everyone also is gonna have a different path. I don't think there is -- I mean, you're right, Ben, initially you've got maybe high school, and a lot of that early stuff is kind of laid out in some ways; there's lots of room to do other things. I don't know that most people go on a podcast when they're 15, for example.

So there's lots of ways you can break the rules or bend the rules and do different and more interesting things, and take different paths... But yeah, I think there isn't a path -- I don't like the idea, actually, that there is a single path that you follow to progress. If there is one -- some companies do it; they have explicit little programs (or big programs), which you can flow through. But I feel like it has to be so tailor-made to you for it to be valuable to you, that those things may or may not fit very well. I've never found anything like that really work, but if there's benefit to it, then that's what you do.

\[00:52:15.17\] But yeah, I would say there isn't really a right or wrong path that you go through. It has to be a kind of thing that you find your own way on. I wouldn't recommend necessarily the way I have gone through my career. It's something that has kind of worked to an extent, I guess, and it's been somewhat random when I look back on it; it's somewhat random, it feels. I didn't have a big five-year plan, for example. I never really did that. I was much more agile about it, if you like; I was much more immediate and looking, that sort of approach.

I know a lot of people do do that - they have the big plan, and stick to it, and it really works for them. So I'd say there isn't an answer; there isn't a route that everyone should take. You have to find your own path. How does that sound?

**Benjamin Bryant:** It sounds good. On that note, we did discuss a lot on this podcast about hobbies and doing things that are interesting... So all the times I look back to, when I first learned programming, or when I first learned a new language, that sort of childlike curiosity and excitement you get out of doing something simple... And then slowly, as you start to learn more languages, programs and patterns, that sort of childlike wonder seems to be more muted and fades down a little, because a lot of these are things that you've seen before, in just a different form... So I'm curious, Mat, do you still have that sense of childlike wonder and curiosity when you dive into different things now? And if so, how do you keep that alive throughout the years?

**Mat Ryer:** That's a great question. Actually, the answer is yes, I do still have it. And what happened to me was the things that I learned, and that just became kind of tools that I could use - in the beginning they were exciting things I didn't understand. And then once you understand them and they do somewhat become mundane, actually they just become tools. There's always more things, and that's the nice message I can tell you from the future, if you imagine I'm in the future. I can't tell you any lottery numbers, it's against the time-traveling laws, but...

**Benjamin Bryant:** You can't?!

**Mat Ryer:** No, sorry... But I can tell you that there's always stuff, new things to learn, things that are hard, and therefore enough to get stuck into. And there's lots of other languages to learn... But really, once you've along the way collected up these tools that you can use, the exciting thing then is mixing all that knowledge in new ways.

Somebody I read said that creativity actually is just making connections that other people haven't made yet, between things that already exist. So in that sense, you might know about a messaging system, and you might know HTML, so you could build a web frontend; you might have these various tools, which in their own right, if you've done them for long enough, become not very exciting or cool. Don't have that sparkle to them. But then you can use them to mix them together in new ways that other people haven't done before, and tackle problems -- and even tackle problems that have already been solved, in different ways, in new ways. So yeah, it never runs dry, there's always more to learn, and I think that's the good news I can give you from the future.

**Benjamin Bryant:** That's very wise. It sounds good. It sounds like there's a lot to look forward to.

**Mat Ryer:** Yes, there is. There definitely is. Any other questions?

**Shaquille Que:** \[00:56:01.14\] Yes. So last year, at my Life360 internship, I was like -- there was this one senior engineer who would sit perpendicular to me... And we were both working on the same sort of area, so he knew a lot of stuff... And I would go to him a lot for help; after a certain point, I felt like I was being intrusive, so I stopped going for help that much, and that sort of slowed me down. I'm just wondering, how much time should be spent trying to figure out a problem before bugging a senior dev with that problem?

**Mat Ryer:** I think that is a good question, which again, isn't gonna have a very simple answer... Because it'll just depend so much on the situation. But the fact that you're even thinking like that I think is the good thing, because it's about -- you know, you do have the respect for other people's time, and that's important. But I think it just depends on the situation. And having that as a sort of open conversation and asking people about it - I think that's the way to do it. "Do you mind if I come and bug you? Would you prefer I just did it at certain times? What works for you?" Those kinds of things. I think you'll find most of the time people like helping.

In some cultures there's a lot of time pressure, which can spoil these kinds of things... Because of course, if somebody's busy and their neck's on the line, if that's how they're feeling, then of course they're gonna just be focused on their work and they're not gonna have time for other things, and it might feel like you're distracting them from that mission that they have. I think the culture is what's wrong there; it's not a very healthy culture. It does happen sometimes, and I think having that open dialogue is how you'll find out.

Someone will say "Oh, I'm sorry, I've got to get this thing done for Friday, so I'm just gonna knuckle down and get on with it." But I think generally, most of the time, assuming a nice, somewhat more relaxed culture, one where people aren't under too much pressure - I think people would be more than happy to help... And as Ben said, sometimes you have the opposite problem - you want them to shut up.

**Benjamin Bryant:** I did want to add to that question as well, since I actually was in a similar situation where I worked... And it was kind of tricky, because there were two people next to me. One to the right, that you could basically bug any time, and they were fine with it, and one to the left that you couldn't. So I originally was using the philosophy for the right person on the left person, and then it came up in a performance review. \[laughs\]

What's important is you can sort of be proactive in just figuring out how people like to be worked with... And similar to what Mat said, simply just asking or setting up a little one-to-one meeting and asking "How would you like to be interacted with?" Or even from your perspective, like "I'm new here. I have quite a few questions to ask. How often are you okay with me asking?", just seeing how they want to do it. And then it's kind of on them to say how they like to be worked with, and at least then you know.

**Mat Ryer:** Yeah, I think that's nice. Keep revisiting that conversation as well, because often people won't know the answer, and they might say "Oh yeah, interrupt me any time", and then once you've done it for a few weeks, then they might know more about that. That happens all the time, too; everyone's always learning. So revisit it occasionally. And I actually quite like it when this is done in a somewhat informal setting. I don't know what that's gonna be like now, when we're gonna be a lot more remote... But I would go for a coffee with somebody, and at those times chat about things like that.

I think that's right, it will change over time, and it'll be different at different times. So acknowledging that can only help, really. It doesn't become a problem; it never boils up into -- it certainly shouldn't boil up into a performance review... But it can happen, I guess. So yeah, definitely talking I think is just the key thing. Talking to people and being personable. And actually, I can tell -- I mean, Ben, I know you a bit more, because we're both in London... How many times have you spoken at the London Gophers Meetup, by the way?

**Benjamin Bryant:** Only twice.

**Mat Ryer:** Okay, but I've been to both of your talks, in fact, so I do feel like I know you better... But I can tell you're all personable, and I think you're thinking about these things in the right way. So yeah, I think you're gonna do great. Don't worry too much, but yeah, having that conversation with people is gonna be important. It's time for Unpopular Opinions!

**Jingle:** \[01:00:49.01\]

**Mat Ryer:** Okay, does anyone have an unpopular opinion?

**Aditya Prerepa:** Yes. It's sort of similar -- I listen to Go Time a lot, so it's sort of similar to one of when the NATS.io dude came on. I think that REST is obsolete, and I'm not sure why we're still using it. I know there's legacy involved, and it's easy, but there's much better protocols out there that we could use, that are faster, better, having IDL... This is just my opinion, but -- this is actually sort of a question, too. For client-facing apps, where you have to integrate with lots of third-parties, do you always have to use REST? Because I was using gRPC for that a lot, and it sort of worked. I wish we could use gRPC for everything. What do you guys thing?

**Mat Ryer:** Ben, what do you think?

**Benjamin Bryant:** gRPC is a new word for me right now, but I'll definitely look it up after this.

**Mat Ryer:** There we go. We learn. Shaquille, have you encountered gRPC?

**Shaquille Que:** I have. I was researching on whether to use REST or gRPC for a server I was gonna make... And the idea I seemed to get from it is that gRPC is really fast, and -- I actually don't recall the exact arguments, but it seemed to be that REST still has a place today, and it works for simple applications.

**Mat Ryer:** Yeah, it's funny - I think one of the big things is browser support. Now, you can do gRPC in the browser; it's not as easy as RESTful services. And I think yeah, the legacy, Aditya, that you talk about, of the fact that we've had REST for a long time - that is probably what carries it.

If you sat down and looked at the both, and just did a sort of analysis and a comparison, gRPC is a binary protocol. You use protobuff to describe the messages... Essentially, you describe a struct, basically, if you think of it in Go terms. But one of the cool things it has is you put a number for each field, and once you've used that number, you never will change it. You can delete them and not use it, but you can't ever reuse that number. So that's sort of future-proofs API design; old messages with still work in the future.

There's a few other benefits, and things... It's a binary protocol where REST tends to be text, whether it's JSON or something... And yeah, you can also get some very fast serialization down at gRPC. Typically, I've seen people use it in systems, if you've got microservices and things... They'll use something like gRPC and sometimes protobuff on its own for the messaging there... But when it comes to building a web experience, there isn't yet the bit that reaches into the browser enough, I think, for that adoption to happen. But there's no reason why that won't happen.

\[01:04:07.23\] So yeah, we could well see something like gRPC -- or there are other kind of binary protocols... But we could easily see that take over and become the one. You'll notice, if you go to a Stripe API, or Amazon Web Services, or these kinds of APIs - they tend to be still following the patterns of the web.

REST APIs essentially follow the web's design as well. Rules like get requests will get information, they'll never change information. A get request doesn't have a body, so in a sense you can't really send data with a get request... Versus a post request, where you actually post a body with some data. I think deletes also don't have a body... And REST kind of fits that pattern of how the web was originally designed. That's why it's about getting documents, putting documents, making updates to resources, and it's done like that..

RPC things, which gRPC is one, of course - not of course, but it is - is more about thinking of like... There's actually a procedure or a function I'm gonna call over there. And that's a very different way of thinking about things.

So I think it's interesting - I think web protocols and REST still is by far the biggest player, but it doesn't mean it's better technically. It is probably easier to interface with, so that's why it might be winning.

**Shaquille Que:** One last thing... When I see microservices that use REST to communicate, it baffles me... Because let's say a company wants to move to a faster RPC model; one of the reasons they might not do that is you will have to migrate all of your microservices from REST to gRPC, and there's gonna be so many things that could go wrong there. But there are services that I'm not sure -- maybe I'm just not in the loop, but I'm not sure why more entities aren't utilizing it; there's stuff like Envoy, and gRPC Gateway, which transcribes REST into JSON, and JSON into REST. And that actually -- you know, it supports REST while you're getting a taste of what gRPC is. So that's an interesting topic - adoption, players in adoption, like Envoy and gRPC Gateway are super-useful when dealing with that stuff.

**Mat Ryer:** Yeah, absolutely. I think it's just a case of inertia. Here's the thing... If you get to a project and you're responsible for choosing which technology you're gonna use, you could sit down and just compare the two technologies and very reasonably come to the conclusion that "Well, gRPC is the one." But if that team has never heard of gRPC before, then that is quite a big thing, that's quite a big consideration that you have to make when choosing tech.

So yes, you might compare the tech and land on an obvious answer, but what do people -- if you expect them to consume your API, are you gonna provide a client that they can use? And if you are, then you have to provide a client for every kind of platform that you want to support. You'd need to do an iOS, you'd need to do one for JavaScript, you'd probably need to do a Go one... And maybe that's fine, maybe that's what you're gonna do... And actually, a lot of the Google services do that; when you write code for App Engine and you use the Google Cloud APIs, they are all gRPC. The g in gRPC is short for Google, so that's probably why...

But if instead you want to just provide a surface and let people write to that surface, then it's what the world wants, it's what the customers are gonna be happy consuming. It plays a big part in that, and I think that's why we still do see that technology - REST technologies, and just JSON, HTTP, even though yeah, you could easily argue... I mean, it's a text protocol; you have to encode and decode JSON, which can be slow compared to other technologies.

\[01:08:17.09\] And the other thing is you might just not need the speed of gRPC. It's very common, as you learn about the tech -- it's easy to sort of look at and optimize for a particular metric, like "Let's just go for the smallest package size, because we're gonna be doing messages and we want them to be tying in messages." Of course we do. But if the cost of that is that no one's gonna then consume the API because they don't know how to do it, or you have to write and maintain a client library for them - maybe you might just think "You know what - we'll just do a JSON thing, because in this particular case we may get 1,000 users doing it, and it's not gonna make much difference." But yeah, it probably will change. It almost certainly will change. And it does keep getting better all the time.

The gRPC Gateway thing is interesting. As you mentioned, proxies essentially lets you do -- I think it spins up the gRPC server and it spins up a JSON server... So depending on how you're deploying code, that might not work, too. You might not be able to do things like that. I'm thinking of how App Engine used to work in Google Cloud - it was a locked down kind of environment, so you weren't able to just open up any ports you want; it was very controlled. It's less so the case now, but there are definitely considerations like that too about deployment, and things... But yeah, I think it's a great one, and we should probably have another episode on it at some point, and we'll invite you back.

**Aditya Prerepa:** I completely agree. One last thing - gRPC, to actually sort of move it away from a Google product, they actually renamed it to gRPC (Remote Procedural Call), so it's sort of a recursive acronym.

**Mat Ryer:** Right, right. So the g stands for gRPC.

**Aditya Prerepa:** Yeah.

**Mat Ryer:** Okay. \[laughs\] That's great. That's a paradox. It's a bit like how Go is written in Go, the compiler is written in Go. It didn't use to be. Any other unpopular opinions?

**Benjamin Bryant:** I guess I have a really short one, since this is -- I guess we're nearing the end of the podcast... And this part could also be cut out... \[laughter\]

**Mat Ryer:** This is definitely going in now, Ben...

**Benjamin Bryant:** Okay... Well, it's very short, and there's not much to debate. London Gophers is the best Go meetup.

**Mat Ryer:** Oh, that is a good one. It is a great meetup. Are you an organizer, by the way, now?

**Benjamin Bryant:** I might be, but that doesn't affect my opinion.

**Mat Ryer:** Okay, interesting. Well, hopefully you have meetups in your local areas, too. The London Gophers one now is online, so you don't even actually have to be in London. Anyone from around the world can join in. I think more and more of them are going online too, but it is a great meetup; I have to admit that. It is one of my favorites.

Shaquille, have you got anything unpopular to say? So far you've just been saying popular things.

**Shaquille Que:** Yeah. I'd say updating Go versions is a terrible experience. It's not as terrible as other languages, for example, but the fact that you have to do a lot of things manually - go through a website, download it, delete the odd one, and all of that, where we have a lot of Go tools that do other things... I think that's kind of sad.

**Mat Ryer:** Interesting. There is an installer which will just do it for you. It probably depends on how you installed it in the first place, I guess.

**Shaquille Que:** I was talking more about updating versions. You have to download the latest version's installer from the website first, and delete/blow away your old installation... Or is there a new way to do it now?

**Mat Ryer:** There might be, yeah. There's an installer. You still have to download it, I'm sorry... I don't think we can solve that one for you. But yeah, it will do that work for you, so you might be in luck there. We might be able to solve that one for you.

**Shaquille Que:** Cool. I need to look more into it.

**Mat Ryer:** Well, it's been an absolute pleasure. Thank you so much for spending this time with us. I think you've all got really great futures; please stay in touch... We'll see you hopefully online, we'll see you in meetups, speaking, and we look forward to seeing how things progress. Thanks so much.

How about we have you on again next year and see where you are? We can check in... It could be really cool. Thank you again - thank you to Aditya, Shaquille and Ben. We'll see you next time on Go Time.

**Outro:** \[01:13:11.11\]

**Mat Ryer:** We could easily end up in a kind of arms' race against other people, and I never find that to be particularly enjoyable... So I think being indifferent is the way. I like to say "Think different." \[laughs\]

**Jerod Santo:** Did you just make that up?

**Shaquille Que:** I've never heard that one before...

**Mat Ryer:** It just came to me, yeah.

**Jerod Santo:** It's just you who made that up. Wow.

**Mat Ryer:** Yeah. It's good, isn't it?

**Jerod Santo:** Aditya, you're 15; I think with your skills, and I would assume your relatively low expenses, there's actually no better time to bootstrap one of your side-projects into an income-producing endeavor. That's what I would suggest...

**Aditya Prerepa:** Really?

**Jerod Santo:** ...versus trying to just beat the streets for an internship. Yeah, man. It's a great time.

**Aditya Prerepa:** Well, the projects I'm working on -- actually, you know what? I'll share. It's actually pretty interesting. So you know, because of Covid, group addiction therapy is not happening. You can't do it on a Zoom call, because from what I've heard it feels simulated and artificial. So what I'm doing - me and a few other people - we're building a platform... It's not really income-generating, like what you said, Jerod, but it's for social good. It's sort of a platform where you can do group counseling and random one-on-one conversations with other addicts, so you can talk out your problem. That's how it happens in real life, and that's actually my current project that I'm working on right now.

And yeah, I've been reaching out and it's going really great. But hopefully, in the future, once we move back from remote to in-person, it can still be something that can be used, and at that point it could be turned into something revenue-generating. Does that make sense?

**Benjamin Bryant:** Yes.

**Mat Ryer:** Yeah, but I love the solving a real problem. That's a key thing. We can imagine cool tech, and we wanna build it, but sometimes the tech is the boring bit, and the problem you're solving and solving that problem is the valuable bit. So I think solving a real problem is a great little thing, a great insight, and you're doing it already.

**Aditya Prerepa:** Awesome.

**Jerod Santo:** What's it called? Is it out there?

**Aditya Prerepa:** No. We're prototyping right now. But I'm with an organization, it's called Coding Tomorrow. We teach fifth-graders how to write Python, and that's gotta be the most painful thing I've ever done in my life. We're doing that as a group now, to try to get that up and prototype it.

**Jerod Santo:** If you think fifth-graders are bad, try fourth-graders, or third-graders.

**Mat Ryer:** How old are you in fifth grade? We don't have the same--

**Aditya Prerepa:** Ten? Or eleven? I don't know. My sister's in fifth grade, so I should know, but...

**Jerod Santo:** How old is your sister?

**Aditya Prerepa:** She's, I think, ten or eleven. I'm really bad at this.

**Jerod Santo:** Ten or eleven?!

**Mat Ryer:** It's an off-by-one error. That's also very common.

**Aditya Prerepa:** Well, you know, round it up, like Benjamin does.

**Jerod Santo:** \[unintelligible 01:17:50.22\]

**Aditya Prerepa:** Yeah...

**Mat Ryer:** That's great though.

**Jerod Santo:** Yeah, absolutely.

**Mat Ryer:** That story might go in there. Are you still recording your audio?

**Aditya Prerepa:** Yeah.

**Mat Ryer:** We may snip that in.

**Aditya Prerepa:** Awesome.

**Jerod Santo:** Yeah, but to snip that in, we're gonna have to snip out most of the stuff Mat said earlier, so...

**Mat Ryer:** That's the way it should be.

**Jerod Santo:** We'll just have to \[01:18:14.15\]
