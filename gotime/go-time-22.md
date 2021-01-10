**Erik St. Martin:** It's episode \#22 of GoTime. Today's episode is sponsored by Linode and Code School. Today on the show we have myself, Erik St. Martin, we have Carlisia Campos - say hello, Carlisia.

**Carlisia Thompson:** Hi, everybody.

**Erik St. Martin:** She's still laughing from everything that happened before the show, I can hear it.

**Carlisia Thompson:** I'm trying to hold it back.

**Erik St. Martin:** Brian Ketelsen was not able to make it, but today standing in for him we have Cory LaNou. Say hello, Cory.

**Cory LaNou:** Hey, everybody!

**Erik St. Martin:** And our special guest today is a core contributor to Go and probably familiar to just about everybody. I'll go ahead and let her give her own introduction. JBD.

**Jaana B. Dogan (JBD):** Hello. I work on Go. I actually have been contributing to the project for the past years, and I've just started to contribute as a part of my full-time job. My role in the team is pretty unique. I wouldn't say that I am contributing code to the project at this point; the team wants me to be a user, a power Go user, so looking at things from the perspective of the user, keeping writing code against Go, rather than contributing more code to Go.

I'm kind of like a typical Gopher, but live in maybe one release cycle in the future, and exposed to tip, development going on on the tip and what is coming up next. My responsibility is particularly giving feedback about the usability API design, where things require more thinking from the user's perspective. I've recently started to do this job, and I was late for 1.8, but will be more involved in the future releases. It also depends on how many user-facing critical changes are coming in. That's what I do.

**Erik St. Martin:** So what types of applications are you developing? Because it seems like you do a lot of stuff in hardware, audio and mobile... Is this kind of tackling each of these areas and just trying to build applications and see what you run up against?

**Jaana B. Dogan (JBD):** Yes. I was originally working for Google Cloud, and somehow bootstrapped all the cloud libraries, some sort of like good API design and idiomatic libraries, and everything around cloud products and how we can actually interact with the ecosystem so much better. I kind of like moved to another role to work on the mobile project. The scope of the mobile project was first making the runtime running both on iOS and Android, and then come up with some libraries that will work on those two platforms and providing some tooling similar to Go tool, that will allow me to build mobile applications rather than just the binary. I was involved in that.

\[00:03:43.16\] As a continuation of that work, last year I was working with the Android team. Android is going through some sort of reorganization when it comes to building some tools and some more structure to build custom Android kernels. The team also wanted to expose GPIO and other peripheral communication interfaces from Android, and wanted Android to work on popular Linux development ports, so I was involved in there, trying to figure out how we can make Go as a first-class citizen for Android, targeting on the embedded markets and what they are envisioning for the future.

**Erik St. Martin:** So this is sort of like people who are using ODROID or Xen BeagleBoard Blacks and things like that, that even can get Android on?

**Jaana B. Dogan (JBD):** Yeah. This is just Linux boards. This has been such a historically much requested feature, to be able to extend Android with board-specific hardware abstraction. What was historically requested was a more extendable hardware abstraction layer, so you can contribute more board-specific things and extend the capabilities and deploy Android to other billions of Linux boards around. So the Android team is trying to meet that goal by making it more configurable, so any manufacturer can take Android and make it work on their Linux board.

**Erik St. Martin:** Awesome. Brian's been playing a little bit with writing Go on a Raspberry Pi for his smoker.

**Jaana B. Dogan (JBD):** Oh, nice. That's awesome.

**Erik St. Martin:** That's just too much fun. Smoking dinner with Go.

**Jaana B. Dogan (JBD):** \[laughs\]

**Erik St. Martin:** I just love creativity with that, and we've seen a bunch of that stuff, too. You're constantly showing stuff off on Twitter.

**Jaana B. Dogan (JBD):** Yeah, there are billions of projects. I have billions of projects; I personally like physical buttons a lot, so I just realized that my entire world is surrounded by software and touch screens and things; that's why I was just replacing things with hardwired physical buttons that I feel more comfortable with. There was tons of things to do.

Due to the relationship with the Brillo Project, the Android project is called Brillo Project. Android focusing on the embedded aspects - it's called Brillo. We're getting so much stuff from China every month... We had this huge repository of devices around and sensors and all sorts of displays. It was really fun times.

**Erik St. Martin:** It occurred to me one day, because I was looking at the piles of stuff I have here... Because I have a similar thing - when I'm tinkering with electronics, why am I gonna buy one chip from SparkFun or Adafruit when I can just buy like a hundred of them for a similar price from China? And then all that stuff acquires, and it's sitting there in the drawers, and it occurred to me one day when I saw something you were posting, it's like "I wonder what your stash looks like..."

**Jaana B. Dogan (JBD):** \[laughs\] We created a couple best combination of things, because I was working on a developer-facing product and we were also trying to come up with a set we can propose as a de-facto combination of those little devices, so the users can run the tutorials with them. And yeah, we've been thinking too much about them, thinking about designing custom things, and it's been so much fun.

**Erik St. Martin:** So Cory and Carlisia, do either of you have experience tinkering with the hardware side of things or embedded?

**Carlisia Thompson:** \[00:07:52.11\] I did at the Gopher Gala last year. Nathan had a project and I joined to help him a little bit, with also somebody else here from San Diego Ravi. So I got to play with a Raspberry Pi, and we put in code that actually made the Raspberry Pi use a motion sensor, and that was very cool.

I sort of have an irrational aversion to hardware, because my impression is that hardware doesn't work when I touch them. \[laughs\] I don't know, it's completely irrational. So I try to stay away from hardware in general, although it's pretty cool.

**Erik St. Martin:** You give off like a static charge that just messes up all electronics?

**Carlisia Thompson:** Yes, but it's like... It's supposed to have a button and I don't find a button, and these ridiculous things... But at any rate, I thought the Raspberry Pi is small and I could handle it, so I really fell in love with it. But I didn't play much with it after that.

**Erik St. Martin:** One of the things that I think I loved the most was learning how simple serial protocols are. Then what you do is you buy yourself a logic analyzer and then you start finding random pieces of electronics and trying to find the chips and what their serial ports are, and then start geeking in on what it's doing. \[laughter\]

**Jaana B. Dogan (JBD):** Are you doing any serious debugging that way, or is it just how you investigate what is going on...?

**Erik St. Martin:** It's more from just like a reverse-engineering standpoint, like "How does this work?" I've tried a couple of times to send my own commands and stuff on regular boards, but that's usually where it gets not so simple, because ordering comes into play. Reverse engineering any sort of protocol is hard because you have to understand...

**Jaana B. Dogan (JBD):** But a logic analyzer is the printf of working with these protocols, and people were so surprised that I have scopes and all these logic analyzers around. But it's just like a mandatory requirement.

**Erik St. Martin:** Yeah. So you start with something like a Raspberry Pi or Arduino, and you can look at that and you might be able to debug from a website the commands that you're sending, but ultimately you end up on GPIO pins and communicating with other hardware. At that point, you're cut off, and it's really painful to try to get it to blink a light a number of times when it hits somewhere and debug that way; typically you wanna probe in with a logic analyzer and look at the communication.

**Jaana B. Dogan (JBD):** Yeah. And sort of like trying to understand what is going on with the kernel driver... I've been exposed to a couple of bugs - it was impossible to get anything done without actually looking at the final output of the signal.

**Erik St. Martin:** I think it's fun for people to learn at the hardware level, too. I love having oscilloscopes, plugging it on audio wire and looking at what audio actually looks like...

**Jaana B. Dogan (JBD):** When I was a child, my father introduced us into signal processing by just looking at oscilloscope output, and I gathered so much information from there by just... I remember we had a very small set of -- we were just producing some sign wave, and looking at it and changing the frequency, and it just gave me so much... Then he also introduced us to bitwise modulations and things like that; visualization is just perfect. I think as a part of our education we should also encourage more of this way of thinking, by looking at what is going on and reverse engineering it.

**Erik St. Martin:** Yeah, I was teaching my son a while back... Using an oscilloscope we made almost like a theremin, just a 555 timer and a little light sensor. He had a blast with it until we got annoyed with the high-pitched sound that it made. I didn't quite think that went through, that he would love this thing and wanna play with it. \[laughter\]

\[00:12:08.18\] So is hardware your true passion, and kind of where it meets software? Or is this just something you do to break away from the software side?

**Jaana B. Dogan (JBD):** Yeah, more of the latter. I have a full-time job which is already boring. I think my entire projects have grown with the necessity of me having to design or prototype a hardware for my music experimentation. I still try to build instruments, rather than working on the... I don't know how to say this, but my entire music is very experimental, and also involves hardware I invent, as well as software. So it's more like a side project, a weekend project where I escape from my daily routine.

**Erik St. Martin:** Yeah, I think that typically is what I do, too. Mine sits for months on end sometimes. I think I like thinking about that I might one day have the time to work on some secret project I have in my head. Then I create new ones without ever finishing the one prior. It's like, "Oh, I wanna help with building the barbecue controller." Then we're playing with RC cars one day and it's like, "Oh, I'm totally building a traction control system for my RC car..."

**Jaana B. Dogan (JBD):** I think that's the beauty of all this maker thinking. We are always in this constantly "work in progress" projects; we invent by looking at what is going on and what is in common... I think we are doing this for the joy, rather than trying to achieve anything. I think that's fair.

**Carlisia Thompson:** I wanted to go back a little bit, and I didn't jump in right away because I was looking for the link. Erik once mentioned the course called NAND To Tetris, and I'm super looking forward to doing it. I think I'm going to be able to do it next year.

It's basically a course that takes you from the very basics, and step by step all the way up to building a modern computer. And the good news for me is that it's all simulation, and I don't have to deal with hardware.

**Jaana B. Dogan (JBD):** Nice.

**Carlisia Thompson:** I personally don't have anything against hardware; as I was saying, they just don't work with me... I don't know, I just have this impression. But in this case it's all simulation, and you don't have to... And it gets expensive too, buying these one-off things. But this is really cool.

I'm saying this because I also think it's very important for us to learn a little bit more about what it is that's below of what we are doing.

**Jaana B. Dogan (JBD):** I totally agree. In order to contribute to the first argument, I think simulation is really important. For Brillo, my co-workers were more passionate about building a graphical interface that allows people to understand what it feels like to work with GPIO, rather than work in anything else. The number one reason is making hardware work, and making sure it's working correctly; getting it to a state where everything is working is really hard, so you just wanna have a feel, how it feels, what the APIs look like, how easy it is without touching any of that stuff. So I think it's just really valuable to have simulation going on.

**Erik St. Martin:** \[00:15:55.23\] I think that there's cheap ways people can do electronics too, and I wanna say that to make electronics work is like learning through discovery, or something like that. The number of components that you need is pretty small, and I think it's nice to have that hands on, and for people to learn what happens and what a burnt capacitor smells like. There's something interesting about doing that.

The NAND To Tetris book that Carlisia was talking about - I love that book. The one thing I don't like is that chapters go really fast, so you kind of need supplemental learning material, but it starts at kind of like gates and boolean logic, how to build a NAND gate, and then how those are kind of assembled. Then you can basically build the ALU of a computer using nothing but NAND gates. Then it kind of builds up there where you kind of have your own assembly language, then your own assembler, and then kind of like an object-oriented language and then a virtual machine.

The thing that I love about the book is each stage is kind of on its own, and they have a way of unit testing your stuff. When you try to build your assembly language, it has expected inputs and outputs so it can validate it.

It's a really cool experience for people who are interested in learning from the hardware level up into the code that we write every day.

**Carlisia Thompson:** And they have a course on Coursera, too.

**Erik St. Martin:** Oh, they have it on Coursera now?

**Carlisia Thompson:** Yeah, so they have the book and they have a course on Coursera.

**Erik St. Martin:** Yeah... So Brian isn't on the show because of choppy internet connection where he's at in London, but he's heckling us from Slack. He just reminded me of the person who built the ALU in Minecraft using the same book as his approach, which was really interesting. You set the binary number with torches, and that goes through all these little things and the cows move... \[laughter\] Then you go the other side and you can read the output.

I'll find a link to the video where somebody is messing with it, it's hilarious. You wonder, "Who sits there and thinks of that?" Like, "Oh, I just did this NAND To Tetris thing. You know what I should build an ALU with? Minecraft!" \[laughter\]

**Jaana B. Dogan (JBD):** Very cool. I kind of feel like we were the last generation who has some sort of privilege to understand everything, from end to end. When I was a child, the personal computers were so small... I remember having a Spectrum, and its manual was basically starting with BASIC programming language. The computer architecture kind of like gives you all the main components and how they work and how they interact with each other. The final chapter was an instruction set, and how you can write optimizations and things.

By looking at the current complexity of the things, I think the current generation doesn't have the same privilege to learn and understand everything from end to end. What Raspberry Pi was trying to do was trying to make things more accessible. I think all the Linux boards are doing a better job now, but everything is just too complex at this point; there's just so many layers, and it's so easy to get lost.

When I introduce myself, that I'm supposed to be a power Go user, and giving people, the team, usability API design feedback, maybe initiating libraries and tooling to fill the gaps... If there's any experimentations required, probably I have more time to run experimentations, so it's part of my responsibility. And I'm still in this transitioning period, and while I'm there, I'm just trying to listen to the community and gather some feedback, actionable items.

\[00:20:02.23\] One of the things that Brian was mentioning is this feedback around tooling. I wanna understand, rather than specific bugs and complaints, what are the bigger picture problems. If we would like to rethink our tooling, what should we fix and how should we fix it? This involves an understanding of the current workflow of the users and what is missing there, and trying to understand more of a bigger picture, rather than focusing on little things.

I'm kind of surprised by the number of people who actually returned back to me and wrote about how they feel about certain things, things that maybe need to be redesigned or can be supported by experimental tools or extension tools. I'm really excited to hear more, and I do believe as a community or as a language we will never succeed if we cannot create this type of feedback channel and question what we are doing once in a while.

**Carlisia Thompson:** I'm wondering if you are using any guideline or if you are trying to go in a specific direction to avoid having the vocal minority speak for the issues that are not a priority for maybe the majority of the people. Or maybe you're looking into having usability as the guide for what you are doing, or any other guideline that you are using, to make sure that you're achieving your goal no matter who's responding to your request.

**Jaana B. Dogan (JBD):** Absolutely. The goal of this project is not trying to understand what the established users are trying to do... Let me give a little bit of insight of how I see things. I think there are too many reasons why people learn a language or just get involved in a language. The first one is personal development or interest - this is what mainly made the initial Go community. These people have more tolerance, they're more passionate about the challenges for the sake of learning.

The other type of people comes there just because it's a requirement. It's enforced by your employer, school, whatever. I think our community was so dominated by the first group that we couldn't really question too much about how we're treating the newcomers and what is missing. For a person that is not coming from the same background that our community is coming from - what is missing?

I think our language and tooling is totally built on historical conventions, but are we doing anything to communicate them? Are people getting lost just because they cannot make the connections?

I really liked Katrina's talk at GopherCon this year because she was pretty clear about this. When I looked at the spec, I understood everything, but I wasn't able to make the connections and was not able to line up all the different topics around the sentence I was reading. I think it's generally true for everything, not for the language spec - when it comes to APIs, when it comes to what we consider good readability, or tooling...

I think we are coming from a typical background, and everything is so much clearer to us, but not true for the vast majority in tech.

**Carlisia Thompson:** And have you been able to at least have some insights about things that can be done to make that better?

**Jaana B. Dogan (JBD):** \[00:24:05.25\] My audience is a little bit restricted. I cannot really go to people who are coming from totally different backgrounds and I cannot enforce them to use Go and give them feedback. The only way I see which might be valuable but it's still not ideal - because it's a small subset of the same culture on itself... I think new graduates, or people who are at Google who really believe that this language is not really a product that is fitting their worldview might be a good place to seek for that type of feedback. That's the only practical, easy and actionable thing I can work on.

I think the main goal of rethinking about these problems is to make newcomers happy, rather than working for the existing users. Because existing users already know what they need to do.

**Cory LaNou:** When you talk about newcomers, I'm curious if you're primarily targeting the traditional newcomers that are just coming off of projects that Go is gonna just work better for or are you actually targeting people coming from the different fields of technology, technology that Go is not already being used in?

**Jaana B. Dogan (JBD):** I'm particularly targeting people who either have experience - or inexperienced - in another language, and just trying to use Go as a replacement.

**Carlisia Thompson:** It sounds to me that one challenge that you have is to help people see the benefits of Go without going through so much hassle. Because people can read a blog post, "Oh, Go is very productive and Go is very fast" are the positives, but they still have to commit to trying it out. And maybe making that gap shorter, from the moment they get exposed to the idea of using Go, to the moment that they actually do something with Go and see the results. I guess what your challenge is in making that gap as short as possible.

**Jaana B. Dogan (JBD):** Yeah, this kind of also relates to the first initial idea I had, how I see people... I still see people who already believe that this language could be valuable for themselves and trying to invest time in this language has a little bit more tolerance. I understand what you're saying, but I don't have a really clear answer to how we should gather feedback from people we don't know and people who are not necessarily talking to us.

Maybe what we need to do is more of like typical user studies where we just put people who absolutely have no background in our material and see how well they're going and how they feel, as a feedback.

**Cory LaNou:** Do you think it's the language features that is the time that we have to spend the investment on for newcomers? I say that because when I came to Go, everything was easy. I mean that from the standpoint of like using other languages, there was a lot of work; there was a big environment to set up; you had to have everything just right, you had to have a special editor, and then once you got it going, the language syntax was very difficult. All those things in Go are really easy, so I'm curious...

It sounds funny, right? We're trying to optimize for these newcomers and give them the onboard faster, and I think that's great, but I also feel like it's phenomenal compared to most other languages already. So I'm curious what aspects do you think that can be improved the most?

**Erik St. Martin:** \[00:28:01.24\] I'd like to kind of jump in here too, because there's one area that I think we can improve in. When we look at the walkthrough online, the Go tutorial - it goes through a lot of the language features, but some of this stuff is not necessarily approachable just in domain knowledge.

One instance I know of somebody who's going through the tutorial and got hung up on one of the things, and I think he was just working with slices or arrays or something like that, but the object of that particular chapter was to build bitmaps, or something like that. And it was really confusing just understanding what the domain model was. And then a lot of people are still learning in these bite-sized chunks.

One of our sponsors, Code School... In the Ruby world they had the Rails For Zombies thing, and people could connect with that. They're building this little game and it deals with zombies and things like that, and it makes things a lot more approachable because understanding the domain isn't there anymore. It's not understanding "What do you mean by 'build a bitmap'?", it's just dealing with the task at hand, working with slices.

Actually, on that note, before we continue back into this, I guess it's kind of like a perfect transition because one of our sponsors is actually Code School, and they've just launched a new Electives course, for anyone wanting to get started in Go.

The course is lead by Carlos Souza and has five levels. Level one is completely free; all you have to do is head over to CodeSchool.com/Go, click on the giant Start Course For Free button and create a free account to get started. Level one has two videos and eight challenges, and the cool thing is that all of the coding will be done completely from your browser. You don't have to hassle with installing Go, messing with your Go path, or any of these things. You can just sign up for your account and get started.

After you've made it through the first level, they have four more levels that have around 30-35 challenges that will work your way through variables and type inference. You can learn about all the data types and error handling, collections, and by the time you make it down into the level four and five, you get into some of the unique factors that bring many people to Go, working with values and pointers, receivers, interfaces in composition, how to structure packages, writing concurrent code, which is the primary reason a lot of people are coming to Go.

Make sure you head over to CodeSchool.com/Go, try out the first level. Thanks again to Code School for this awesome course and for sponsoring the show.

So just before the break, Cory was asking you, JBD, what areas you think can be improved to optimize for newcomers?

**Jaana B. Dogan (JBD):** I do not believe that we have an easy onboarding experience. When I started using this programming language, I learned so many things through code reviews and asking people... One of the obvious examples is we still don't have Canonical tutorials for the tooling, and it just took me experience to get there and feel productive, that that certain point where I feel like "Yes, I understand this language, its tools and everything."

I think initially the community was more of exchanging ideas and knowledge; there was a lower barrier to contribute to one of the contributor's codebase, and get your Go code reviewed, and information was so much easier to access. I don't believe that it's true anymore. What do you feel about that?

**Cory LaNou:** I guess I think that makes sense. Maybe part of my comment there might be because I've been doing Go so long it feels pretty natural, but I guess I do remember when I came online the toolchain I definitely struggled with, and I think that's what you're commenting about. The language not so much, right?

**Jaana B. Dogan (JBD):** Yes.

**Cory LaNou:** \[00:31:56.16\] But I guess I do remember struggling with "How do I get my tester on? How do I get this to build? How do I install this thing?" That was a lot of searching on Google for me to find that originally, so I can definitely understand that.

**Jaana B. Dogan (JBD):** Yeah, I kind of feel the same, even for the error messages from the toolchain. There are so many cryptic things... Once you learn what the message means, you are productive and understanding the case, but it just requires you to always google things, and I think that's the goal of my project and how I see things, how I prioritize these improvement projects.

**Cory LaNou:** One of the things that I found very helpful in the current toolchain is a little tool that Ben Johnson wrote, it's called GOO. Instead of running Go Test, I run GOO Test all the time; what it does is it detects the very first error in the stack output every time, and copies it to my buffer and it highlights it. It's nice when you do a Go test and "Here's your 15 errors", you really care about the first one, right? It's all you care about. Something that simple is actually incredibly helpful.

**Jaana B. Dogan (JBD):** Yeah. The feedback I'm gathering is tons of small improvements like this. There are so many things that actually will make us reconsider things, but there are tons of things to improve by just changing the order, making something more highlighted and small - things like that.

**Carlisia Thompson:** And thinking about improving things just by changing orders, I think it would be great if we had a website that was easy to use and contained a path, from beginning to the end, from beginner programmer, newcomer to Go, to very advanced software development. It's not that it's supposed to contain everything, but it's one path; then people can veer from that path as they need, but at least they have one path.

For example, I ran into this website called go.java - it has nothing to do with Go, it's just called go.java. And it has that - it has four menus at the top. It's Learn Java Skills, Create and Contribute, Develop Software (obviously, for more experienced developers) and Lead Your Organization - if you're an organization, what do you need? Great. Those are the paths. Those four things I think will lead anybody from where they are to the next step.

This past year I've seen the level of resources increasing dramatically, but it's still hard to find... You have to be sort of keeping tabs or searching, and you're not sure, like "Is this the best one that I should be looking at for me?" We don't have that entry point anywhere. I mean, we do have the blogs, of course, we have the documentation, but I think we can improve immensely on that front.

**Jaana B. Dogan (JBD):** We've been thinking what Rust has done. They have a book, and it's just like more of canonical guidelines to do anything; it doesn't explain the language, but the entire ecosystem. You know, you have binary, but how to... Maybe we can include best practices for production and things like that.

I do think that the blog was sort of like being used to publish white papers, but it's not quite organized and it doesn't give you navigation. I really believe that we need some sort of another medium to write guidelines which may also contain what you've been saying, or the thing that I was mentioning with the toolchain where there's no canonical way to see what I can do with this aspect. So I agree, and I think there are multiple people agreeing on that, and there are some people who are already working on it.

**Carlisia Thompson:** \[00:36:14.11\] Awesome.

**Erik St. Martin:** Yeah, I think that tends to be the struggle. I think there's a lot of resources for teaching the semantics of the language, but then people look at it and they're like, "Okay, how do I get from A to B? I understand these different constructs of the language, but I wanna build a web service. Where do I start? What does a typical structure of an application look like? Am I doing it right?" I think people give up there, which is interesting.

**Jaana B. Dogan (JBD):** We are thinking more than just production of building some of the best practices about building systems. I think the next year or two will be more about trying to understand how we can communicate best practices once you have a Go binary. Yeah, you have a Go binary - what is next? What are the best practices for production, or what we can teach people to think about building large systems, what we can do for diagnostics, instrumentation, profiling, tracing and debugging?

Some of these items require actually some community-wide solutions. The next one or two years will be more like investigating what to do now. The entire ecosystem should be more focused on playing with the binary, rather than achieving the binary.

**Erik St. Martin:** That's interesting. I guess this is probably just part of the growth of a language, right? I mean, we're still very, very early on, so those types of things are maybe the natural progression in a language. How would you contrast that to other languages?

**Jaana B. Dogan (JBD):** I would say that it's the typical... I mean, the only language I was involved with from the very beginning to the end was Java. I think it's just natural that you expect people to focus on readability idioms, learning the language and mastering it. Then, taking it to the next level is actually about building really good production stuff with it, and supporting the production teams.

I do believe it's natural in every language that the focus will be shifted more to the other aspects, because there will be more knowledge on the idioms in the language. I think it's very natural that we are shifting towards that way.

**Erik St. Martin:** You said you had some other points you really wanted to discuss, for the wider community to be in on, right?

**Jaana B. Dogan (JBD):** Yeah, I think understanding what we are going to be working on in the next two years is the biggest challenge we have, because the scale is really big and there are too few people on this project, working full-time. The community is growing, but I do believe that our communication is pretty broken. The main reason - let's put it this way... I think all the random topics we've talked about are always being talked in random conversations. We need more structure, probably, and better communication to achieve anything that will expand our impact region.

\[00:40:00.15\] What I really see missing in our community is there's no point of talking about transmission feedback; in the beginning we had more central points, and our community is getting really big, so it's really healthy that we have distributed communities. But as we are getting more distributed, it's so much harder to gather feedback, and only a very small portion of the communities are actually contributing to the development of the language. This is pretty expected, but I see really obvious cases where people are complaining on Twitter, but then I see that there's no issue filed, and I'm just trying to understand what is the missing thing that makes that person not feeling encouraged to file it as an issue.

**Erik St. Martin:** That's interesting. Have you seen the way the Kubernetes processes developed? This is actually gonna be what I'll mention in the \#FreeSoftwareFriday section, but I think it kind of fits in here. They run special interest groups. There's kind of like split up...

**Jaana B. Dogan (JBD):** That was basically what I was trying to achieve, I was about to explain. I do believe the only way to get there is creating focus groups and work groups probably. We pretty much have an understanding of which areas we should invest in, and there are already so many people from the community who are working on their small, personal projects or their company-sponsored projects, but there's no discussion around those topics in a collective and systematic way.

**Carlisia Thompson:** There seems to be a recognition from you; is this recognition shared by the other Go Team members, and do you find that there is resistance...? Is everybody trying to figure out if this really applies, or are you already moving in the direction of trying to find solutions for that?

**Jaana B. Dogan (JBD):** In the Go Team there is a subgroup called Cloud-Related Projects we have at Google and beyond. This team is mainly responsible for just making sure that everybody is committed to good APIs and trying to understand how they can support the community...

For example, this particular subteam was pretty supportive of the workgroups, because their work... As I said, the biggest challenge is the scale is so big, and they would like their work to be impactful. Listening to the community and trying to react according to the necessity of the community requirements is the top priority for the Go Team.

We're trying to establish this workgroup and see if it's going to work, because if our communication is not efficient or if people are not participating, or if we are not really making the communication accessible, this model is not going to work either. So we would like to try with at least one workgroup to see how it goes. From that point on, there's been other people who suggested other work groups, other responsibilities, and I think this will naturally happen.

Without this structure, or some sort of giving ownership, or more collective feedback from the users or the contributors, it's just impossible to scale the language.

**Cory LaNou:** \[00:44:08.12\] Yeah, I think the micro groups is definitely a way to go there. I think some of it is when you're on a micro level and say, "We just expect the entire world to weigh their opinion in." It's hard, it's not approachable. For me, personally... The Go community is fantastic and I find the people that are in the Go community to be really approachable. This is just my perception, but I've never felt like the Go Team has been approachable. And I'm not saying it's their fault, I just feel like there's no conduit that I have that's "Hey, I wanna express my opinion" other than if I tweet something out and hopefully I don't get any backlash from that. So the approachability there might be part of the problem, as well.

**Jaana B. Dogan (JBD):** I think the main problem is we don't have a channel to brainstorm ideas. Currently, you have the issue tracker. You have the proposal process, which you definitely need to come up with something really mature and working in order to propose and get it reviewed. There's nothing in between. It's so hard to understand, and just like work on existing, random ideas or brainstorm about what could be done, just because of the lack of that lightweight... I don't know, I do believe it's the lack of medium, rather than people not trying to listen.

Ranting on Twitter, or... I think each team member has some capacity, and we need to provide data to them in a more aggregate way, so they can consume and effectively solve issues.

**Cory LaNou:** I think also just letting the community know that you're looking for direction and you're looking for input too, that will be a big deal. I think most of us just kind of go along our merry way, and we figure "Hey, this is Google. They've got this under control, they know where they're headed", right?

**Jaana B. Dogan (JBD):** That's not true... I mean, Google actually hired me to work on this project to give feedback to the team. People think that Google has a really big control on this language. Google didn't really care about this language for a very long time; it's becoming more popular very recently, but I think the perception is wrong. It's more about having no channel; without having a good channel, it's just impossible to have a healthy communication, and it may sound more isolating or ignoring the actual facts just because you don't have an efficient way to gather this feedback and execute on that.

**Cory LaNou:** Right. I think my point is - and again, in no way I'm trying to insult Google or Go or the team, I wanna be really clear... I think it's the fact that, you know, I'm pretty involved in the community, so if I've got that perception, and I don't think I'm probably alone there, right? So I think it's one of those things where it's really good that you're talking about this and you're really letting people know that "No, we want to go in this direction and we're looking for this participation."

**Jaana B. Dogan (JBD):** Yeah, I agree. I think this is not really communicated well, but I don't really believe that anybody is against this.

**Carlisia Thompson:** The people that will form these committees, can they come from outside of Google?

**Jaana B. Dogan (JBD):** Yeah, absolutely. I don't really believe that having more googlers on this project is going to help, because it really shaped around Google, and it's blocking itself or blocking its reach because it's so totally dependent on the Google culture. I think everything should be outside of Google, ideally.

**Carlisia Thompson:** And for the Google Cloud platform working group - at least that's what I understand - it's already in motion...

**Jaana B. Dogan (JBD):** \[00:47:54.23\] Oh, that's not the Google Cloud. We don't care about a specific provider.

**Carlisia Thompson:** I'm sorry, what working group did you say you were going to start with?

**Jaana B. Dogan (JBD):** We were thinking about a cloud workgroup more than any provider. We were just trying to understand more production-related stories and beyond - support, APIs, and what we can contribute to the community to make it easier. We're trying to achieve things that are provider-agnostic.

**Carlisia Thompson:** And do you have already any guideline for people to raise their hand and say "I want to participate in this working group"? Do you have criteria for selection for people to join in?

**Jaana B. Dogan (JBD):** This is still a proposal internally, and I'm working to finalize it. I wrote the proposal myself. The initial idea was to initiate some sort of feedback from different people and understand the requirement for a workgroup, and if people agree, I think what we'll do is just continue. I don't have specific people in mind, but as long as I announced this thing, I think I will just try to gather feedback from people. I think naturally people who are giving feedback will be a part of the workgroup in the future.

**Erik St. Martin:** And it's published, too. For the Kubernetes groups, the way they operate the special interest groups is there's a published list of them. If you're interested in the way networking works, or scheduling, you have all the contact details there, who the primaries are, they have weekly meetings where they do demos, and you can comment on that stuff. There's a lot of that stuff that I think could be played with to get everybody interested in specific areas, collaborating better.

Like you said, you're just throwing it out into the sea when you're complaining on Twitter and you hope that somebody who has the means to solve that problem for you sees it.

**Jaana B. Dogan (JBD):** I think we can also solve this like... The core team doesn't have bandwidth to think about these issues by just sharing the responsibility with other groups, and naturally just because there will be a group that is assigned to think about these problems, I do believe that the feedback loop will be more efficient.

**Erik St. Martin:** I think another thing that you wanted to talk about was why languages succeed and fail, but before we do that, let's talk about next sponsor, Linode. If you head over to Linode.com/gotime, you can get your very own Linode up and running in seconds.

Choose your flavor of Linux, the amount of resources you need, and choose from any of their eight data centers spread across the world. You get full root access, you can run VMs and containers; if you haven't had the chance to play with Kubernetes, now's a great time to go there and spin up a couple of Linodes. Three nodes will cost you $30/month; even if you wanted to play with it for the weekend, they've got hourly billing.

They also have a great CLI app, so that you don't even need to log into their website if you wanna deploy or tear down some of your Linodes, and a great HTTP API. Even though there's not a Go SDK now, but we'd love to invite you to create one and open source it. If you do, please come talk to us, we'd love to hear from you.

If you head over to Linode.com/GoTime, you can use the code "GoTime20" to get two months free, which is a $20 credit with unlimited uses. Make sure to tell your friends and head over to Linode.com/GoTime.

So you were talking about language succeeding and failure mostly due to communication?

**Jaana B. Dogan (JBD):** Before we get in there, I've seen something on the Slack channel... Aaron is saying "Working code speaks louder than workgroups to start serious conversation." I partially agree with this, but I partially disagree. I think experimentation or community-driven projects have a really small scope. You cannot achieve community-wide APIs by starting experimental projects, or personal projects because you're by design excluding so many aspects, as you're restricting yourself to your own goals.

\[00:52:15.26\] I think the idea behind workgroups is to see what else is there. Otherwise, it's just easy to execute working code and solve a small aspect, but I don't really believe that working groups -- the main goal behind working groups is solving specific problems in its own small scope.

**Carlisia Thompson:** One thing to keep in mind when you bring up these concerns is that you're looking at it from the perspective of scaling the use of Go. We are relatively new, maybe not so new anymore - I don't even know if we should say we're so new - and we are trending upwards in terms of adoption, and your concerns that we don't have such a great communication, we don't have such great channels for feedback, feedbacks are being given out there without it being incorporated into the people who are working with the language and documentation that goes with it, and you're thinking "Well, if this way now, how is it going to be when the community is double?" A lot of people think this community is going to grow a lot, so I think you're right to be thinking this way.

From what you said, I think having working groups or special interest groups is a great idea. It will not hurt to have feedback, and I think it can only be used for improvements.

**Jaana B. Dogan (JBD):** In the past months I've received so much feedback about how we should communicate more of a roadmap, internals and things... From a programmer's perspective, he would like to understand what is going on and what the future will be like, because he designs things in a particular way so that the design is efficient on top of that underlying black box, which is the language runtime and language itself in this case.

I do believe that having workgroups will increase this communication with the core team and the community members a lot, because given that they will be involved maybe in design and what is coming up next, they will be able to receive more canonical information and they can share it from there, rather than reverse engineering, debugging, trying to understand it by experience.

**Carlisia Thompson:** I think the biggest benefit that I see from this idea is having a group of people that is a buffer between the language team and the community. Obviously, the language is only going to be so big, and to me, obviously, they should be participating in important decisions as far as the language and the ecosystem, because they have a ton of knowledge, especially the philosophy of the language, which counts a lot. They are the experts.

But having people one off proposals and talking to different people here and there, and people change, and rotate, and they don't really know where people are coming from with suggestions, I can only imagine how hard that must be for the language team to participate in this constantly revolving set of people who are approaching them. So having a group that is, of course, not a forever group, but a group that is going to stay for a while and focus on one aspect of the language and the ecosystem, that group having the trust of the language team and the trust of the community, it can only make it better.

**Jaana B. Dogan (JBD):** \[00:56:30.13\] Yeah, I think it's impossible to scale if you are an engineer working on the core team, to engage as much as you write code. They are already really productive, and you cannot really ask them to expose themselves to all these channels to gather feedback and understand what is going on. I would never expect anybody to waste their time on that, because I think their time is really valuable and it needs to be canalized to the right things. With this buffer group, as you said, we will give them some knowledge and summary of what is going on, and that's what they need.

**Cory LaNou:** I also think the special interest groups are really cool because a lot of times I think when people are working at their projects and they're looking at Go and saying, "Oh, if it could do this, or if I could have this from it, that would help my project", but they maybe don't think that it applies to the wider group, so they don't really engage, and if they knew there was a special interest group that was surrounding the topics they're already concerned with, I think that would really help draw more of the community in as well.

**Jaana B. Dogan (JBD):** I totally agree. I think for really high-level things or brainstorming, people see it like it's just like absurd to talk to the team, or explain a little bit of their ideas, because nothing is finalized. People are just seeking for some sort of community to build on their initial ideas, and the workgroups will be the perfect solution to iterate on ideas, regardless of its obvious or not; we need some sort of, as I said, middle channel to feel encouraged to talk.

**Erik St. Martin:** I think it triggers ideas too, though. The special interest groups for Kubernetes will do weekly meetings and will do demos; when you take part in these, you'll see something demo-ed, and it will trigger your own ideas where you can contribute feedback then. I know there's been scenarios where I've seen stuff coming down the pipeline where it was a real problem I had that I thought I had to develop something else, and it just wasn't in my thought process that it could be solved in another way. These things kind of trigger more thoughts.

And not everybody's accustomed to reading the draft proposal form of things, so they just don't participate. There's very few people who go in and read those drafts and then comment on them; most people wanna see working code, they wanna see a demo, they wanna have verbal discussions about it.

**Jaana B. Dogan (JBD):** Yeah, I totally agree. I think a demo is the only way to communicate just a little prototype, but nobody is going read your proposal written in a very formal way, with no visualizations. So I do agree that meetings are awesome.

**Erik St. Martin:** We'll call this one the first one.

**Jaana B. Dogan (JBD):** Yeah, I guess so. This is the workgroups that actually thinks about the workgroups and comes up with a strategy on how they should work.

**Erik St. Martin:** And now we're getting meta... We've got a workgroup for a workgroup. \[laughter\]

**Cory LaNou:** Now, if you had your pick, I'm curious what would be the top one or two workgroups you would like to see?

**Carlisia Thompson:** That's a great question.

**Jaana B. Dogan (JBD):** \[00:59:55.18\] I don't wanna really reveal my ideas, but I think that there are things that are really obvious to me, such as... Well, this is not entirely engineering related - the first one is a docs group. Our current blocker is documentation, and explaining conventions and things. I do not really believe that all the other teams are really caring about documentation; I think they are seeing things within their perspective, and I do believe that a community group can totally tell them what is more obviously missing. So that's one of the... Maybe docs and outreach together, because the community is already doing so much work in a very structured way, at every conference, or on blogs, or everywhere else. I would love to see some sort of central group so people can share knowledge with each other and create material for each other, so writing and talking and documenting things become easier.

**Cory LaNou:** Yeah, a big +1 to that. I'm a huge fan of a docs group.

**Erik St. Martin:** See, every time somebody says "docs" I think "dox", like publishing private information about people. \[laughter\] We just get together and dox people... \[laughs\]

**Jaana B. Dogan (JBD):** Is it my accent?

**Erik St. Martin:** No, even when Cory said it. Both ways, it's pronounced the same.

**Carlisia Thompson:** You're saying it has the same... What's it called...?

**Cory LaNou:** Phonetically...

**Erik St. Martin:** Yeah... So I think we're actually running a little over time. Did you guys want to talk about any projects or news that are out? One of the biggest ones I saw was Netflix released their new Chaos Monkey, which was really cool, and that's all written in Go now. Do you do chaos testing at all, any of you?

**Cory LaNou:** No, I think I'm just gonna wake up one day and go to our cloud team and tell them I enabled it, and see what happens. \[laughter\] I'm sure they'll appreciate it.

**Erik St. Martin:** Just let them be surprised. I think it's a really fun way of testing, the first time I saw that. It's really creative; you should assume that everything dies.

**Jaana B. Dogan (JBD):** Yeah. At Google we have this sort of thing once in a while, and everything is just like literally off. I'm not participating anymore, so I'm so happy... But if you have something in production, good luck.

**Carlisia Thompson:** Yeah, I do chaos testing - it's called release to production. \[laughter\]

**Erik St. Martin:** I don't often test my code, but when I do, I do it in production...?

**Cory LaNou:** Always.

**Carlisia Thompson:** Always.

**Erik St. Martin:** The chaos is actually happening in the office, not in production.

Yeah, I mean, most people don't really test that way, so it was an interesting paradigm a number of years ago when it was released. I just found it really interesting that they completely rewrote the Chaos Monkey in Go. I think Scott Mansfield had mentioned that when he was on the show, that they were working on it, so that's finally open-sourced.

A related project that I actually ran into over the week was Pumba. It's chaos testing for Docker, which was interesting. It has a lot of like the "kill your container and restart it", "send random signals at the process" and things like that. Another interesting aspect of it was that it allows you to emulate network conditions where you experience packet loss coming into your container, packets being reordered, corruption and stuff like that. I have not played with it yet, so I can't give it an awesome stamp of approval, but it definitely looks interesting and I wanna start playing with it.

**Cory LaNou:** Does it come with a preconfig for AWS network situations, so you can basically replicate what AWS is for you right away? \[laughter\]

**Erik St. Martin:** \[01:04:04.12\] There's just a "AWS = true" flag. I'll drop the link in the channel for anybody who's listening live. I ran across it late last week, and I haven't had a chance to play with it yet, but it looked really cool. And we know 1.7.3 came out, and I think there was just a few bug fixes there. I don't know whether there was anything major there, but it's a point release, so that's to be expected.

Anybody else ran across any interesting projects this week?

**Carlisia Thompson:** I don't have anything this week.

**Cory LaNou:** I don't have any projects, but I did wanna shout out to some community people. About a year ago I moved back to the Midwest as most of you know, and I started some meetups in Chicago and Minneapolis, because the Go community wasn't on track there. It's been a little bit over a year and the people that have stepped in to help me do that have really stepped up and they've basically taken over. Again, this is all about community for me and it's just great to have Varun in Chicago, and Eric, Jack, Nick and Calvin in Minneapolis. It's just fantastic to see how they've really gotten these Go groups back online, and to see these communities rebooted.

**Carlisia Thompson:** We have a Meetup channel on Slack, don't we?

**Cory LaNou:** Yes, we do. Meetup Organizers, I think.

**Carlisia Thompson:** Yeah, so that's where everybody that Cory's just mentioned is, including Cory.

**Erik St. Martin:** We have to applaud anybody who helps grow the community, whether that's through code or writing tutorials and blog posts, or doing conferences, or anything that continues to further the growth of the community. As JBD has been talking about today, kind of collectively molding the language together. Rather than just throwing stuff over the fence and hoping for the best, we start trying to find ways to collaborate and work on it together.

We typically close out the show with our \#FreeSoftwareFriday where we give shout outs to open source projects for people that are kind of saving the day for us. I think Cory and I both have actually already spilled the beans on ours. Who I was going to thank is the Kubernetes special interest groups; to the point that we've been talking about, I think that there's a lot of value in that and it helps everybody collectively mold the project into what they want it to be in demos, in vocal discussions about concerns related to specific areas that matter to you. I think that's extremely valuable.

And Cory, you just said yours.

**Cory LaNou:** Yes, I did.

**Erik St. Martin:** Do you wanna say it again?

**Cory LaNou:** Yeah, just a shout out, like you say, to all the organizers of local Meetups. It's just such a big deal, and especially in my mind right now are the organizers of Chicago, which is Varun, and Minneapolis, which is Eric, Jack, Nick and Calvin. They have just done a superb job of taking communities that... Really the Go community just kind of fizzled a little bit from a Meetup standpoint, and they've got them back on track and they are going really well now, and have great attendance. It's great to see those cities back online.

**Erik St. Martin:** How about you, Carlisia?

**Carlisia Thompson:** I want to give a shout out to the most wondrous thing, it's the Gopher Slack bot. Florin Patan works on that, and it's... I don't even know how to describe it. You type "@gopher help" and you get a listing of all the commands you can use, and it's sweet, it will give you a bunch of goodies. So just go ahead and do it. On Gopher Slack, of course.

**Erik St. Martin:** I'm typing it in now. @Gopher help.

**Carlisia Thompson:** Yeah, it's a user, but it's a bot.

**Erik St. Martin:** Okay, here we go. It's messaging me.

**Jaana B. Dogan (JBD):** Do I need to direct message it, or...?

**Erik St. Martin:** \[01:08:01.03\] You just add it in the channel, and it direct messages that.

**Carlisia Thompson:** But JBD has made a good point - you can totally do a direct message, and just type things out there, so you won't be spamming the channel.

**Cory LaNou:** I think we just crashed it. \[laughter\]

**Erik St. Martin:** It is open source, and pull requests are accepted. This is kind of cool, though... Like, just type in newbie resources and recommended channels... That kind of makes it more accessible. The Gopher Slack has grown so much, there are so many different channels in there, and you're trying to find your way around... So this is kind of cool.

**Carlisia Thompson:** Yeah, it's super cool. And of course - I don't know if we did it, but it crashed.

**Erik St. Martin:** Speaking of crashes, I didn't get a chance to mention this. Way earlier in the show before our first sponsor break, I actually crashed, I was gone for a while - I don't think anybody noticed, but the funny part about it was it was after JBD said "I'm supposed to be a power user", and the second she said "power user", Boom! I got black screen of death, like stack trace on a MacBook Pro. \[laughter\] It was scary.

**Jaana B. Dogan (JBD):** Well, that's part of my job, to expose all those screens, so no one else needs to go through the same thing.

**Erik St. Martin:** I died laughing... Like, "Man, I hope this come up quick..." But I have never, in the whole time of owning a Mac, ever had a stack trace on a screen, and you say "power user" and Boom! \[laughter\] Priceless.

So you don't have to throw anything in there, but if you have something, we'd love to hear a project you might wanna give a shout out to, too.

**Jaana B. Dogan (JBD):** Well, I don't know. I don't wanna highlight anything at this point. I have a couple of things to mention, but I don't really think that it's necessary.

**Carlisia Thompson:** No problem.

**Erik St. Martin:** What did you wanna mention?

**Jaana B. Dogan (JBD):** It was just a couple of random ideas... There are some co-op implementations I came across. It's just really nice to see some of the new generation network protocols are implemented for Go, and I'm just playing with a couple of things, building my co-op networks. This protocol is basically useful in IoT space, and it's really interesting to see that people are investing time and trying to issue things that we would like to issue.

**Erik St. Martin:** Yeah, and I think we definitely need to link out to some of your repositories too, because you've got a lot of repositories for hardware interoperability with Go, too.

**Jaana B. Dogan (JBD):** Yeah, I think most of my repositories are private at this point...

**Erik St. Martin:** Oh, you're holding out on us.

**Jaana B. Dogan (JBD):** I have so much stuff in private... I was playing with tons of devices lately to figure out the right APIs for these peripheral IO protocols that I was mentioning for a while. Maybe I can release a couple of them and share them as well, while we are talking about IoT.

**Erik St. Martin:** Okay. If you do that, we'll make sure we link any of them in the show notes when the show actually gets released.

**Jaana B. Dogan (JBD):** Alright.

**Erik St. Martin:** I lost my time, because I got rebooted due to your awesomeness...

**Jaana B. Dogan (JBD):** \[01:11:41.04\] Well, this was a formal meeting for the meta work groups, so... I just wanna conclude by saying that I think people really think, and there's no intention to isolate from the actual problems the community is experiencing, or anything. But trying to find the right channel will take some experimentation. I think the language grew really quickly and the team was really small, so I think this was kind of expected, that it won't be ideal if there's a rapid growth. That unfortunately happened, so we need to consider options and act to make things better.

**Erik St. Martin:** Growth is always painful, and I think we'll get through this as it's just one hurdle in the evolution of the language.

**Jaana B. Dogan (JBD):** Yeah, yeah.

**Erik St. Martin:** So with that... Somebody gave me the time in Slack, we're at like an hour and thirty-three minutes, so we get to have an especially long episode this time, which is awesome. There's so much more I wanna talk about, too... I really wanted to get into music and hardware, but I don't think we wanna have a three-hour episode, which stinks. \[laughter\] We might to have to get you back on just to talk that stuff.

**Jaana B. Dogan (JBD):** We can do just random live streaming; it doesn't have to be particularly GoTime, or anything. It might be interesting to just brainstorm. What I would like to issue with workgroups is something where you show up and talk to people on random things; not music, not my personal music, but anything related to Go. Because talking really helps you, as you said, going through different ideas and seeing different options, and it's just really healthy and enjoyable.

**Erik St. Martin:** Yeah, and I think that's one thing people miss when working remotely too, that kind of interaction and triggering ideas with each other. It humanizes people; when you're talking to somebody you realize the way that they come off in a draft proposal or a GitHub pull request review, or something like that - that you perceive people one way, but when you actually get to interact with them face to face or at least verbally, you get to understand people are human.

**Jaana B. Dogan (JBD):** Yeah.

**Erik St. Martin:** So I think with that we should close out the show.

**Jaana B. Dogan (JBD):** It was really nice to be here.

**Erik St. Martin:** Yeah, definitely thank you for coming on, this has been a lot of fun. I think we should figure out something for having some sort of live streaming or playing with electronics over YouTube, I think that'd be kind of fun.

**Jaana B. Dogan (JBD):** It might be interesting to just record a little bit for the Go Time, just my vocal capabilities...

**Erik St. Martin:** Oh my god, that's so...

**Jaana B. Dogan (JBD):** I know... I'm not promising anything, but maybe. It's a challenge for me; my personal challenge is to record something for you.

**Erik St. Martin:** I challenge you right now. We have some closing notes that I'll make my way through, but I wanna hear a crazy goodbye... \[laughter\] I don't know when we cut in for what's gonna be produced, but for anybody who's listening to this that wasn't live for that, it was absolutely awesome and hilarious to hear some of the voiceovers that JBD was doing when we first got on the call. I'm challenging her now to end the show with a goodbye after I get through the notes. That's just really crazy.

Alright, so thank you everybody on the panel for being here. Thank you to Cory for stepping in for Brian while he's out...

**Cory LaNou:** Thanks for having me. It was an honor to be here.

**Carlisia Thompson:** Thank you. So glad.

**Erik St. Martin:** We definitely thank JBD for coming on the show and talking with us today. A huge thank you to our sponsors, Linode and Code School for sponsoring the episode. Again, like I said, please go check them out, show them some love, keep us on the air.

I definitely wanna encourage everybody to share this show with fellow programmers. You can go to GoTime.fm and subscribe. Even if you are subscribed, if you haven't seen the new website, you should go check it out. Changelog and GoTime did a whole huge rebranding and it's freakin' awesome.

Follow us on Twitter, @GoTimeFM and you can ping us on GitHub.com/gotimefm/ping if you want to be on the show or have questions or have ideas for content. With that, we are ready for the goodbye.

**Jaana B. Dogan (JBD):** Thank you -- sorry, I just really need my really low voice... \[low voice\] Thank you for listening, and goodbye.
