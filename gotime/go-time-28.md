**Erik St. Martin:** Alright everybody, we are back for another episode of GoTime. This is episode \#28. It is our last episode before a two-week break for the holidays. Our show today is sponsored by Backtrace and StackImpact.

Today on the show we have myself, Erik St. Martin, Brian Ketelsen is finally back from traveling, so he is also on the show...

**Brian Ketelsen:** Wait, I'm back? Hello...?

**Erik St. Martin:** You're back!

**Brian Ketelsen:** I'm back?

**Erik St. Martin:** Well, you can leave again if you want... I mean, we're getting used to this whole Brian being gone thing.

**Brian Ketelsen:** Is this live? Wait a minute... \[laughter\]

**Carlisia Pinto:** You forgot everything, Brian.

**Brian Ketelsen:** \[laughs\]

**Erik St. Martin:** And we also have Carlisia Pinto on the call, as well.

**Carlisia Pinto:** Hi, everybody.

**Erik St. Martin:** Today's special guest is Thorsten Ball, who many of you may have seen a recent book that came out by him, "Writing An Interpreter in Go."

**Thorsten Ball:** Hello there!

**Erik St. Martin:** So do you wanna give everybody maybe a little bit of a background on who you are and the stuff you work on?

**Thorsten Ball:** Yeah, of course. As I said - or you said - my name is Thorsten Ball. I'm a software developer from Germany and at daytime I develop with the Web stack, I work on web applications in the backend and the frontend at a startup, and at night-time or in the early mornings, because I'm a morning person, I like to deep-dive into certain computer programming topics like UNIX operating systems... And since one and a half years or two years I've been digging into interpreters, compilers, programming languages and so on.

I've written a book about it on how to build your own programming language and self-published it four weeks ago. I'm really excited about all of this, I'm excited about the book, I'm excited about programming languages and I'm excited about understanding how they work and how to implement them yourself.

**Erik St. Martin:** So is this something you do as part of your career? Is this a passion project?

**Thorsten Ball:** No, no... I wish I could do this as part of my career, but as of today nobody tapped me on the shoulder and said, "I want you to invent a programming language." I'm still hoping, fingers crossed... Yeah, this is purely a passion project. I have this weird thing where I discover a black box in programming and I go, "But how does this work?" and I start to dig deep into it; it all looks like magic in the beginning. I don't even begin to understand how this works. Then I dig deeper and I dig deeper, and down in the rabbit hole you learn a lot of things. And I love coming back up for air and blogging about it, or writing a book about it.

**Erik St. Martin:** So this is the callout - if anybody needs a programming language written, contact Thorsten.

**Thorsten Ball:** \[laughs\] Shoot me an email, right.

**Brian Ketelsen:** I have to say, I got early access to the book and do some read-throughs on it, and it is an amazing book. If you haven't yet picked up a copy, it's well worth the read. I learned a million things and I've only made it through maybe four chapters... It's really good.

**Thorsten Ball:** \[00:04:03.14\] Thank you.

**Erik St. Martin:** We'll link to it in the show notes.

**Brian Ketelsen:** Yeah, it's as deep of a dive as I can possibly handle and I loved it.

**Thorsten Ball:** Thank you very much.

**Brian Ketelsen:** It's a good read.

**Erik St. Martin:** For anybody listening live, it's at interpreterbook.com.

**Thorsten Ball:** Right.

**Erik St. Martin:** It's actually really interesting... The language that's in it - is this a language you kind of created on the spot, or is this like a reference language that people use for creating mock interpreters and compilers? Where did the language come from?

**Thorsten Ball:** The language is actually made up. It's called Monkey, and I made it up on the spot, basically. The idea for the language - if you go to interpreterbook.com you can see what it looks like, and it looks like a cross between C and JavaScript and Rust; that's the syntax. And it behave like a Lisp or, let's say, JavaScript, because it has first-class functions, it has closures and so on. The thing is, the idea for this language and why it looks the way it looks is twofold. The first reason is building a language like this, like a Lisp, with first-class functions and so on, and dynamic, and dynamically typed - it's really easy to get started. If you want to build a statically compiled language with static types, that's gonna be much more complex.

So that's the first reason, because it's easy to do. The other reason why it looks the way it looks, with the curly braces and so on, is because before I started reading the book I was frustrated by tutorials that only show how to implement a programming language that looks super easy, or it looks like a Lisp... Like, parentheses... The introductory paragraph in the blog post is, "Let's skip syntax for now, let's skip parsing for now... Just use an array." I was like, "Stop, wait a minute... I wanna know how parsing works, I wanna implement this." Then you read about how parsing works with a really simple syntax, and I thought "No, no, no. Wait, I want my language to look like this, and I want to know how to do this." So that's the reason why it looks the way it does, with curly braces and so on - because I wanted it to look like a real programming language. If you learn how to build a monkey interpreter, you actually learn how to parse JavaScript, or C, or Rust. I think that's really valuable.

**Brian Ketelsen:** So you just kind of half-answered one of the questions I was gonna ask... What's the value of learning about compilers and interpreters? Where does that take you as a programmer, and then what do you gain from coming away from this knowing more? Where's the take-home benefit?

**Thorsten Ball:** To be completely honest, for me the biggest takeaway would be that it's super fun. As I said, I work with web applications all day, and if you develop locally, you have to spin up your server, your database, you have to make external request, and so on and so forth. If you develop a programming language, you don't need anything. You only need the standard library, and that is super enjoyable. So that's the first thing - it's a lot of fun, and I think -- I wrote this on the landing page of the book... This is for people who enjoy programming. You don't get a certificate, and I don't know if an employer will care if you say you read this book; the focus of the book is fun. If you love to dig deep, if you love to understand topics and to better understand them, this book is for you.

\[00:08:13.22\] The other thing is, if you learn how to implement your own programming language, you learn how other languages work, right? And you start to understand why interpreters are the way they are, and you start to understand how \[unintelligible 00:08:31.16\] and I could implement JavaScript in ten days, or something like this. I think that's really valuable, because at the end of the day, a programming language is just a tool you use to get a job done, ideally. This is a tool you use, and I'm of the opinion the better you know your tools, the better you can wield them.

I'm a big fan of understanding the abstractions you work with, so if I'm building a web page, I think you should know how HTTP works; maybe not in the beginning, but to get the most out of it, you should know one level of abstraction beneath the one you're working on - that's always the phrase I use. I don't know who said it, I've tried to find out one time, but couldn't find the original author.

I think understanding the level beneath the one you're working on gives you a lot more leverage further up, and it gives you a lot more power further up, because you suddenly understand better how the pieces fit together. That's why I think if you know how compilers work and interpreters work, you can use them to a creative extent, and maybe not only use them, but to be completely honest, I think a big part of a software developer's job is debugging - as sad as that is, but you have to debug and understand problems, and this helps you a lot. This helps you to understand parser errors, this helps you to understand memory leaks, this helps you understand how an object system is implemented, this helps you understand how Ruby and JavaScript differ in certain things, and so on.

**Erik St. Martin:** It's interesting, because many of the things that we use are meant to be abstractions, and so many of them actually turn out to be leaky abstractions, where when you get into these cases where something doesn't work the way you expect it to, it's typically when it becomes a leaky abstraction, and now you need to actually understand more of what happens that one layer down, which is why there's value in that.

I learned a lot more about software by learning about hardware, too. When you start to understand a Crystal and the clock ticks and things like that, and that when you're sleeping for some amount of time, it's actually some sub-division of clock ticks, and it's not exactly that amount of time. You can only get a close enough resolution to it based on the clock frequency and things like that, and you start to gain an appreciation for some of these things and why things that you may think are behaving erratically, or something is just doing what it's supposed to do - that's kind of where your abstraction layer is drawn.

**Thorsten Ball:** I totally agree. Before the show started we had a little chat in the chatroom about IDEs, and I'm hesitant about IDEs. I use Vim, I'm a big fan of it... The things is, with IDEs - my problem with them is you're on such a high level in the abstraction pyramid... You're up there in your IDE and you press a button, and something happens further down; if something further down blows up, then you suddenly don't know what it is and how it works and why it blew up. If you understand the lower levels, you can handle these problems better.

**Carlisia Pinto:** \[00:12:04.20\] Yeah, that part I didn't really understand, because I don't see the difference between pressing the button on an IDE and pressing a key or a combination of keys on a Vim or Emacs. I don't know... I'm not sure what you meant.

**Thorsten Ball:** Okay, what I meant is it's not Vim or IntelliJ themselves, but if you use Vim - and you're probably gonna use Git on the command line, and you're gonna use a curl on the command line, and so on. If you know those tools and how to use the tools themselves, you probably understand them better than a Git hidden behind a graphical UI and hidden behind three layers of IDE. Does that make sense?

**Carlisia Pinto:** Yes, it makes sense, but I'm not sure if it's more like memorizing the commands versus not memorizing the commands, because you have the visual right there... I don't know, maybe you can still understand the concepts without using the commands.

**Thorsten Ball:** This is like a pet topic of mine... There's this book (or essay) by Neal Stephenson, and it's called In the Beginning was the Command Line. He talks about his computing history; he started within Mac and then he went to Windows, and PC, and BIOS, and then (I think the book is 15 years old now) he switched to Linux. He talks about the command line, and he said "It was in the beginning", and in the end he ended up there again because he felt it gives him the greatest amount of power.

I don't know, maybe my argument is the same one - if you can see what you're working with, if you can see more lower levels, you can use them to your advantage. I have the feeling that some software IDEs have to - they make things simpler, but they hide complexity. And the question is, if you hide complexity, how much power is lost and how much understanding is lost?

**Carlisia Pinto:** I think I see your point, because for example with Git I don't use any visual graphical interface because it slows me down a lot. The reason is with the command line I can do things a lot faster, and because I can do things a lot faster, I can do more things more quickly, so I get to actually learn more commands because they're useful and they're fast enough that it's a big payoff.

**Thorsten Ball:** That's true.

**Carlisia Pinto:** By learning I think I get a greater understanding of what the thing is, so I think there is that aspect of what you're saying.

**Erik St. Martin:** I think the line comes between usage and implementation. If you use something that's GDB or Git tied into your IDE, you understand the principles from a usage standpoint, but not necessarily the implementation details. So when things go wrong, the implementation details are usually what matter in trying to diagnose and troubleshoot the problem. We could say this about any technology... A database, for example MySQL. Most of us just use it, but when things go wrong, having an understanding of how databases work is without a doubt going to help you, and I think it's just a tradeoff of the time involved in learning the tool at that level, versus the productivity that you need. So things like Git or something like that are maybe a slight learning curve, but it's not the same level as learning how a database is actually implemented at the disk layer.

\[00:16:09.11\] For most of us there's not a lot of value in that, but there can be a lot of value in understanding the operating system at least at like a surface level, and command line and things like that. It's just kind of a constant trade, I guess.

**Brian Ketelsen:** I wanted to bring up almost the same point, but from the opposite direction. I've only ever done Git from the command line, and I was in Windows the other day and needed to do a Git operation, and I had the GitHub client, GitHub Windows application, and I opened it up and I couldn't understand how to use it.

**Erik St. Martin:** I've been in that boat, too.

**Brian Ketelsen:** All I wanted to do was merge master into my branch so I could make sure that it worked, and I clicked buttons but I could not figure out how to just merge master into my branch, and I was getting really frustrated. So it's almost as if those layers of abstraction take away the power of the tools that you're using; I definitely agree with your point.

**Carlisia Pinto:** And everybody who designs a visual tool has his visual aesthetics, and each visual tool is going to be different and you have to learn it, whereas with the command line, usually the commands have a certain commonality, like UNIX-themed, and you can sort of figure out the commands from one tool to another.

**Thorsten Ball:** Yeah, I'm not against graphical interfaces. Some are vastly superior to their command line equivalent. They give you a much better understanding. The best example would be viewing your Git commit history. In a graphical interface, that gives you a much greater understanding and a lot more power, and so on.

I think you also have to really draw the line somewhere, because if you keep digging and if you keep breaking open those black boxes, I don't think you're gonna come away super healthy, right? \[laughter\] You're never gonna get done, and...

**Erik St. Martin:** All I need to do is send an email, but I need to understand how a NAND gate works. \[laughs\]

**Thorsten Ball:** That's right, yeah. Look, one and a half years ago, two years ago I tried to understand how CPUs work. Then you dig into CPUs and you understand kind of what they do, and they fetch instructions, and they decode them, and then they execute them, and they talk to memory, and I/O devices and so on. And then you peek below this level and you realize, "No, wait a second... They're actually executing five things at the same time? And then they're caching stuff and then they're pipelining stuff and they are programmed too and they're super complex and I have no clue what's going on anymore?" and you have to draw the line somewhere. Like, "Alright, this is the API, this is the level of abstraction I'm gonna work with", because you're gonna run out of time. It's the saying "It's turtles all the way down." If you keep digging, you're gonna find another level, and another level, and another level, and another black box.

**Erik St. Martin:** There's just not enough time to learn all of it either.

**Carlisia Pinto:** And that brings up a good point, too... I was like this earlier in my programming life, trying to just use one tool for a particular thing, and there's absolutely nothing wrong with using multiple tools; there's nothing wrong with using a couple IDEs, one to do most of the stuff and one to do other things that they do better. For example, I use a graphical Git tool to see a history, like we were talking about, but I cannot figure out -- even if I wanted to use it to merge stuff... I've tried it before and I'm like, "I don't know how this works, I don't understand it." But for looking at history it's perfect, and looking at diffs.

**Thorsten Ball:** \[00:20:03.09\] That's certainly true, yeah. That's exactly what I meant. As I said, you have to decide what to look into, and you have to decide how much time you're gonna spend. What I'm saying is if you're trying to understand those levels below you, and even if they at first might not seem related to what you do in your day job, I think there's gonna be a payoff if you understand them better. That's what \[unintelligible 00:20:31.14\] at the beginning, that a better understanding of hardware gives you a better understanding how in the end software is gonna work on it.

**Erik St. Martin:** Yeah, and I think it's important to choose your battles, too. We've only got so much time and mental capacity to learn these things, so I think it's okay to take the easier abstractions on the things that you don't care about so much, but maybe don't on the things that are going to help you succeed directly at your job, or your task at hand.

**Thorsten Ball:** Yeah.

**Erik St. Martin:** I think it's about time to take a break, and when we get back we really wanna start talking a little bit more about your book, and all that good stuff. So let's take a quick break.

**Break:** \[00:21:15.02\]

**Erik St. Martin:** And we are back, talking to Thorsten Ball about his interpreter book, Writing an Interpreter in Go, which has been really interesting.

**Carlisia Pinto:** Thorsten, I was looking at the blog post from Steve Yegge, the Rich Programmer Food blog post that you mentioned, and it's absolutely fascinating. I haven't gotten to the end yet, but he talks in detail in a very funny way about why the need for learning about compilers. He also mentions that not everybody -- even people who have a CS degree, they haven't taken a compiler class because it's optional in a lot of places. It was true for me, and I remember debating... I felt like I wanted to take a compiler class because it was thoroughly -- I was very focused on design and language, but compilers were totally out of my focus, so that was attractive to me. I thought, "Well, every compiler is there. If you're programming, you're using a compiler, so it has to be useful to learn." But in the end I didn't take it. I thought it would be too niche. I thought that in practical terms I'm not gonna be building compilers, so maybe it's not going to be so useful, and I so regret not taking it... I wish I knew better.

With that, I wanted to start talking about what exactly is an interpreter and a compiler, how they work and why are they the building blocks, and what makes it such a big deal and useful for us to know about them?

**Thorsten Ball:** \[00:23:47.03\] Yeah, that's exactly the point you make. I think it's really funny because a lot of people, they... What you said is absolutely correct - the market of compiler writers is a small one. You don't see many advertisers or recruiters sending out emails like "Do you wanna write a compiler?" But a compiler is hugely complex, it's interesting, it has a lot of parts, and if you understand how they work, you can take those parts and use them in other places. If you look at those parts, you can recognize patterns and then use those patterns again.

The basic idea behind a compiler is it takes input, which is programming code or code, and it takes this input, transforms it and puts out something the computer can understand and execute. You take puts "Hello World" and give it to a compiler, and the compiler outputs machine code. This machine code is much longer than puts "Hello World" and it contains all the machine code instructions that tell the CPU and the computer how to display Hello World on your screen. It does this by having certain stages... You always talk about stages and passes with compilers. Source code comes in on one end, and on the other end comes out machine code, or some other form of code. I don't wanna escalate this conversation, but there are certain compilers that do not translate to machine code, but other programming languages; they're sometimes called transpilers.

In the end, it's the same idea - you take source code and output something that a computer can understand. It does this by first parsing the input; it most of the times constructs an internal tree, a syntax tree, and it then has several passes or phases where it takes this tree and tries to look at it in detail and find out if there are some parts of the tree it can move, throw away, or if there are some parts of the tree it can fold together, or if there are duplicates, if there are errors, if there are parsing errors in there. Then it takes this tree and it kind of - I'm simplifying, right? - walks down the tree and it outputs machine code that lets the computer execute what this tree is supposed to mean. It gives the tree meaning, it gives the source code which you input meaning. Does that make sense?

**Erik St. Martin:** Yeah, it does.

**Carlisia Pinto:** Yeah, it makes sense.

**Erik St. Martin:** One of the coolest tricks I've ever seen with people understanding how a compiler works is actually from a security perspective.

**Thorsten Ball:** Right.

**Erik St. Martin:** I forget who this was that posted an article about this, but you could rewrite the source code of the compiler, compile the compiler with it, and then compile the compiler with it again, and then it would be in the compiler, but not in the source code. So now anything that you compiled with this tainted compiler would have your backdoor in it.

**Thorsten Ball:** Reflections on Trusting Trust is the name of the paper, by Ken Thomson.

**Erik St. Martin:** Yes!

**Thorsten Ball:** It's super interesting and mind-blowing actually if you read it. It's like a science fiction short story on four pages.

**Erik St. Martin:** So let me ask this... Why an interpreter instead of a compiler? And a good question for some of the listeners may actually be "What's the difference between an interpreter and a compiler?"

**Thorsten Ball:** \[00:27:46.13\] Alright. First of all, the difference is an interpreter takes source code as input and executes it, and it doesn't leave anything behind except what the source code tells the interpreter to do. A compiler takes source code as input and produces something that can then be executed. For example, Ruby the programming language is an interpreted programming language, and if you want to run Ruby source code, you take Ruby source code and pass it to the Ruby interpreter, and it executes the source code. And a compiler, like the Go compiler, it takes Go code and produces and leaves behind an artifact, an executable binary file you can then run on your computer and your operating system, and your CPU can now understand this. That's the big distinction. But again... It's turtles all the way down. The lines get fuzzy real fast if you start to dig in, because there are certain interpreters - for example those highly optimized JavaScript engines - that kind of cross the line, because they're compiling while they are executing. This is called "just in time" compilation (JIT).

So the question is, "Is this a compiler, or is this an interpreter?" because it takes source code, it then compiles it to get machine code, and it then executes this machine code directly, just in time. The question is, "Is this a compiler or an interpreter?" I don't know what the answer is... They're called JIT interpreters or JIT compilers, and they're really fascinating.

The reason why I chose to explain how an interpreter works is because I think compilers are much more, let's say -- I won't say 'complex', but you have to do a lot more to get it working. I wanted to keep the scope of the book small, so I only chose to show how an interpreter works as a starting point. Because if you follow the book and you do everything in the book, you get away and you know how the puzzle works or how it's built, and how you can build your own, and you know how to work the abstract syntax tree. Those are all parts you can use, again, in a compiler.

The other thing is I'm not a compiler wizard, or anything. I'm not a compiler expert, and it's a topic that's still kind of intimidating to me because I don't know everything about it and I don't really know how those big compilers (like GCC) work. I'm starting to dig in... I tried to build a compiler for the Monkey language, or I'm currently building it, I'm playing around with it, and I think if I chose to do that, to explain how a compiler works, the book would have been like 200 pages longer. It was just a question of scope, and it was a question of how easy is it to get started and how easy is it to finish the book.

I think in the end it's not one or the other, because if you learn how to write an interpreter, you're perfectly well equipped to write a compiler afterwards. In my opinion, it's the first stepping stone to understand compilers better.

**Erik St. Martin:** I guess you would have to introduce some form of assembly language, whether that's your own made-up assembly language or an actual assembler. You would have to somewhat understand that in order to implement the compiler.

**Thorsten Ball:** Yeah, that's the thing. I love to talk about virtual machines, but I try not to get into them. You could build a compiler that outputs bytecode, right? And bytecode is something like made-up machine code; it's machine code for a machine that doesn't exist, and it's not as hairy as assembly language or machine code, and it's easier to understand. But if I were to explain in a book how to compile to bytecode, I'd have to explain what a virtual machine is. And if I have to explain what a virtual machine is, I'm also gonna have to explain what a machine is.

\[00:32:09.07\] That's what you said, you have to understand assembly language and you have to understand what an assembler is, and what instructions are, and then you have to explain how the machine works. I don't know... The scope blows up.

**Erik St. Martin:** I was actually gonna recommend a book that I read a few years ago and I'm probably due to read again, that I highly recommend to people. It's very short, and I don't know whether you've come across this... It's called The Elements of Computing Systems.

**Thorsten Ball:** Yes.

**Erik St. Martin:** Yeah, they call it From NAND to Tetris. If you're interested in it, it's NAND as in NAND gate... Nand2tetris.com It's only about 300 pages, and this is kind of the shortfall of the book - because there are so many topics to introduce, it moves very quickly through boolean logic and arithmetic and gates, and how the arithmetic logic unit is composed of these gates, and then it moves up into an assembly language and then a compiler, and then I think ultimately a virtual machine and a mini operating system that runs in your fake language on top of all of this. So the shortfall of it is it moves very quickly, and I feel like you need... It's enough for you to understand how each of these pieces work from an outside glance perspective, but not enough to implement them from scratch. But the cool thing about each of these areas for self-exploration si they did a really good job at having tests. When you're on the chapter about learning about assembly language, they give you a program that can analyze the output of your assembler and tell you that it's wrong. They give you some sample inputs that you can run for this program and see... And each stage is like that, so they're kind of self-contained in that sense, but really when it comes down to like, "Okay, I wanna sit down and I wanna build the virtual machine", you feel like you could cobble something together, but you don't feel confident enough in what you learned in that quick chapter to just sit down and write one.

So now that your book has come along in a language that I'm super interested in, I kind of feel like I wanna reapproach that book and now read your book for a better implementation of that. It'd be kind of cool to start seeing some of the other areas implemented, too... You're talking about virtual machines and things like that, almost like reference implementations.

**Thorsten Ball:** Yeah, so this book is amazing. It's actually - and I'm not joking - what holds up the microphone on which I'm recording this. \[laughter\] The microphone is sitting on top of the book, right? I read this two years ago, and I have the exact same feeling like you just described. It's an amazing book and they have a really good software suite you can download and execute, and example code and so on, but I was still getting frustrated, like you've just described, because... I don't know. Like you said, you walk away from the book and you think, "I kind of get this, but not really." You can invest a lot of time in it, and I don't know if then you would get a proper understanding. But then there's the question, "Could there be an easier way?" I think the book is written by two computer science professors - correct me if I'm wrong, but I think so - and they actually teach the content of this book, and they have courses on this, and they have lectures on this.

If you have this in combination with the book - a teacher that guides you along the way and gives you additional information and hints and tips and tricks and so on, this would be an amazing course to take.

\[00:35:53.21\] The thing is, there are few other books like this. If you look at compiler books, most of them have at least 600 pages, and everybody always recommends Dragon Book, and I think it has 900 pages. Those are books - their target audience is not you or me sitting at home on a Saturday evening, like "I'm going to program something today." Their target audience is probably students sitting in college or university and trying to really study compilers. Their target audience is also other professors or computer science experts. That makes it really hard to digest, and that actually kind of kicked off the idea that I should write a book... Because, to be honest, I love handholding, I love if someone walks me through, like "Go from this to this, in these steps." I love this, and there can't be too much handholding and explanation. That's what I try to do - fill the gap between let's say an every man's interpreter book.

**Erik St. Martin:** I think for most of us that don't have large academic background, it's really that "source code or it didn't happen" type feeling.

**Thorsten Ball:** That's right.

**Erik St. Martin:** If I see a whitepaper on something, it's like, this is really interesting, but I don't feel like I have the academic background to look at the mathematical proofs and be like, "Yeah, I totally get this." It doesn't matter if it's just cobbled together code that isn't meant for production use, but just seeing the code itself, the referenced implementation can at least trigger your thought process and you can see how you could do it differently or more efficiently. But learning about these kinds of abstract ideas, especially at like a quick glance -- you've got the book in front you, mine's on my bookshelf... But each of these chapters can't be more than 15 pages.

**Thorsten Ball:** Right.

**Erik St. Martin:** ...how does assembly language work in 15 pages..? I think my assembler book is like 900 pages, you know? So you kind of need a little bit of handholding, or at least some reference code that you can break and fix again and get a better understanding for how each of the pieces work.

**Thorsten Ball:** Exactly. So the point is, in my book -- I wrote this on the landing page... The center of the book is the code. It has 200 pages and I guess half of it is probably code snippets. In other books... I have a few other compiler books sitting right here on the desk too, and the code is at the end of the book, in the appendix. And the code is... Let's say it's not the cleanest code, or the most modern code.

**Erik St. Martin:** Or it'll be pseudo-code...

**Thorsten Ball:** \[laughs\] Yeah...

**Erik St. Martin:** Like, you can't even compile it.

**Thorsten Ball:** Yeah, you can't compile it. You're probably not gonna find the compiler that could compile this 15 years ago. That makes it really frustrating, because if you have code on your computer that's in the book, and you can actually copy and paste it or type it, that changes the ergonomics of the book, because you can actually play around with it, you can experiment, you can make modifications and so on. That gives you, I think, a much better understanding how something works.

In the introduction of the book I recommend that if you want to get the most out of the book, read it and try to type off the code or follow along by writing out the code, or copy and paste it, but try to follow the steps by actually building the interpreter. I think that's how I learn the best.

**Carlisia Pinto:** \[00:39:50.19\] Carlisia, you mentioned I think on a prior show that there's a Coursera course for it... Is she still here? Did we lose her?

**Brian Ketelsen:** Uh-oh...

**Carlisia Pinto:** I'm sorry, I was muted. I was muted, I'm sorry! \[laughter\] I just found the link for the course, and I pasted it on Slack. The next session is going to start on 19th December. I should do it...

**Thorsten Ball:** Do it. Do it, definitely.

**Carlisia Pinto:** Yeah... I'm definitely doing it, I'm just questioning if I should do this one.

**Thorsten Ball:** No, it's really good.

**Brian Ketelsen:** It's all about time.

**Carlisia Pinto:** If somebody wants to do it with me, ping me... You're motivating me.

**Erik St. Martin:** If I delay our barbecue project any longer, Brian will probably come over here and kill me.

**Brian Ketelsen:** That's not true.

**Erik St. Martin:** ...so if you wanna wait until I finish that one or get further along on it, I'll do it with you. So I think we're at a good spot here to take a second sponsor break. When we get back -- I know that impostor syndrome is another thing that's kind of near and dear to you as well, Thorsten, and especially when you're talking about compilers, interpreters and things like that, I know that that can kind of make people feel the impostor syndrome even more.

**Thorsten Ball:** Yeah.

**Erik St. Martin:** So let's take a quick sponsor break.

**Break:** \[00:41:06.24\]

**Erik St. Martin:** And we are back, talking to Thorsten Ball about his Go interpreter book and all things compilers, interpreters and learning low-level development. Before the break we kind of brought up impostor syndrome. Why don't you talk to us a little bit about that? The whole idea about learning hardware or compilers and interpreters and garbage collection, and all these things -- I know especially for people who don't have academic backgrounds can kind of make a lot of people, myself included, feel inadequate to do the jobs that they're hired for.

**Thorsten Ball:** Yeah, okay. I'm a self-taught developer; I didn't go to college or study computer science and that's always in the back of my head, thinking "Oh, I'm missing something here." I think impostor syndrome is something that everybody experiences - developers, in general, even if they studied computer science, and I think it's a perfectly natural feeling you have. In certain areas - like compilers, for example - this is a hugely intimidating topic, because compiler authors are hailed as some kind of wizards, or heroes, or they're doing some kind of black magic... You probably wouldn't understand it, right? And the textbooks have all this academic field to them, and they have mathematical notation in them, and they talk about a lot of formal things, and so on... And it's really intimidating.

What I experienced in the last years is every topic that at first feels super intimidating loses this appeal once you dig into it, and you start to realize "Wait a second, it's not really magic. Actually, it's pretty to understand here, and here" and then you grow up your understanding and you understand more. In the end, you lose all your fear and this feeling of "I'm not worthy enough to understand this", because you suddenly realize "Oh well, it's actually just this and this. It's not this huge thing I made it out to be."

\[00:44:15.21\] The big part of it is trying to get over yourself and trying to tackle this and trying to get an understanding of it.

One of the big things with impostor syndrome is that you always assume that, "Oh the other people - they know much more than I do. I don't know how compiler's work, but it seems like everybody else does. I don't know how interpreter languages work, but everybody else does", and so on. I think that's a fallacy. Probably everybody knows that it's a fallacy and you still get the same feeling anyway. The thing is, if you get to know these other people that are super experts in these super specialized topics, you start to realize that they don't know certain things you know. You can probably find 20 compiler writers which you or I made out to be these super mystical computer wizards - you can find 20 of them that don't know how to use HTML and CSS. If you realize this, this is a super comforting feeling... Once you realize that from the outside it looks like everybody else has it all figured out, but then you realize if you peek behind the curtain, no, it's not like that. You know other things they don't know.

**Erik St. Martin:** I guess it's "Perception is reality", right? There's a couple things... I posted kind of a famous image for impostor syndrome, that kind of shows a big circle and a small dot. The big circle is "What I think other people know, and I'm just a tiny dot", and then it shows the reality, which is you're the circle in the middle and there's this bunch of circles around you with some small overlap. That's really the reality of it; you hit it on the head. Take somebody who works for NASA and does computer vision for Rovers, or whatever, and be like "Make me a web page", and they're quickly gonna stumble, too. It's not that they're incapable of learning it, but you're going to be an expert at whatever you spend eight hours a day doing. You may know nothing about writing video games today, but if somebody hired you in a year from now, eight hours a day, working on video games, you're gonna know a lot about writing video games.

**Thorsten Ball:** Exactly.

**Erik St. Martin:** Brian and I have talked to people who worked on the Go compiler, and even they don't give themselves the credit that they should, because we admire their work, but to them, they feel like it's micro-improvements on things they've been doing their whole lives, right? They're compiler writers, that's just what they do.

**Brian Ketelsen:** I was just gonna give an analogy... I sat next to someone I won't name - for obvious reasons - at one of our speaker dinners at GopherCon and we were having a discussion... This is a person I admire greatly, from either internal or external part of the Go team, and the conversation we had made it very clear to me that this person didn't understand two thirds of the things that we do writing APIs for the web, at all. No clue about how HTTP works, or any of that. And I thought, "This is impostor syndrome. This is really it. This is me knowing some things, and this other person knowing a whole lot of different things but in a very specialized way", and that brought the whole thing to light for me.

**Erik St. Martin:** Yeah, there's no one greater than the other, it's just different.

**Carlisia Pinto:** \[00:47:51.17\] Yeah, I started trying to minimize my impostor syndrome by interacting more with people that I think are amazing, and I don't want to minimize the feeling, because it's real, I feel, and I think everybody feels it to whatever extent... It's funny, because you have these people you admire, we always have we admire, and sometimes we have a chance to see them face to face, and we might get shy about talking to them, because they're so amazing and you think, "Oh my gosh, I'm not at that level at all. Not even close", and we don't realize that they are amazing at what they do because they've been doing it for a long time, but they're not amazing at everything. Sometimes you are amazing in ways that they don't even know... Like Brian was saying about the API aspect of development.

You can totally interact with people like that and even collaborate if you open yourself up for them to help you, for example, and keeping in mind that maybe you can help them as well. It's brilliant. Then you start seeing, "I too have things to contribute." I think it helps a lot.

**Thorsten Ball:** Yeah.

**Erik St. Martin:** You know, Bryan Liles was on episode \#17 or \#18 of the show, and one of the things that I loved that he said during that episode is "Stop comparing yourself to other people. Compare yourself to yourself." An analogy is "Today I'm one Brian..." The goal is to improve yourself, not to compare yourself to others. I think that's a good takeaway. You should be proud of your own growth at the end of the year, and not be so concerned about the way you perceive others. And especially I think conferences can do that to people, too... Because you see people get up on stage and talk about these wickedly complex things, and things that you think are just completely over your head... This goes back to the whole "Perception is reality" thing. We see that and we perceive that they are the foremost expert on that topic, and what we don't see is they may have spent four to six hours a day for nine months leading up to that, or a year before, just researching that specific topic, and they laid out everything that they know in those slides, and that's really the depth of it.

Then there may be people who just quickly glance on topics to try to simplify them for the audience, and they know far more about the topic than it leads on in their talk, but that's not what we see, that's not how we perceive it, and that's just kind of like the fallacy of it all.

**Thorsten Ball:** Yeah. I think talks at conferences is a really good example, because you watch those talks and you're kind of in awe because you think, "Oh my god, they know so much", right? And you kind of have the assumption in your head that they wrote down these slides really fast, and you can probably wake this person up at night and he would tell me the exact things. But the reality is that this person up there on stage, like you said, spent a lot of time putting this together, and - here's the point - researching those topics. It's not said that this person knew everything he's saying on stage before he started working on the talk.

Personally, my philosophy - I think Martin Fowler said this... He writes books to better understand what the book would be about. He starts and doesn't know everything about a certain topic, and he writes the book to better understand it. Then out comes the book and everybody assumes, "Oh, this guy, he has it all figured out. Look, he writes a book."

The same thing is kind of happening... I get really shy -- people say to me, "Oh, you wrote a book... That's so impressive!" I know how the sausage is made now, and I'm always like "No, no, no... It's not that impressive." It took me a year to write it, and it's just markdown files, and... Oh my gosh, there's so many spelling mistakes and errors...

**Erik St. Martin:** \[unintelligible 00:52:07.19\] written in XML. \[laughter\] Picture that, anybody... Write a book in XML. \[laughter\]

**Thorsten Ball:** Yeah, that's the point. Like you said, that's the fallacy of it. If you see how the sausage is made, suddenly you realize, "Yeah, everybody else is doing the same thing I'm doing here", and that helps a lot.

**Erik St. Martin:** That was actually something I was gonna bring up too with your book - you start to learn that in actually trying to write it, you've learned far more, because you wanna make sure that you're not going to say something incorrectly. So even if you think you know, you research and research and research to make sure that you are pretty certain or at least have enough evidence to back up what you're saying.

**Thorsten Ball:** Right.

**Erik St. Martin:** But I think people think that you just sat down and you're like, "Hm, I think tonight I'll write a book about interpreters." \[laughter\]

**Thorsten Ball:** Yeah... "Let me put down really fast how much I know." It's not like that. Like you said, there were points while I was writing, and I was just gonna write the abstract syntax tree, right? And then you think, "Wait, is that correct? Is that an abstract syntax tree, or is that a syntax tree?" And then I researched what's the difference between an abstract syntax tree and a syntax tree, and as it turns out - correct me if I'm wrong - it's largely a matter of naming things, and some people choose one name and some people choose the other name. The same thing... You write, "We're gonna build a lexer", and then you realize "Is it a lexer or is it a scanner? Or is it a tokenizer?" and then you research again and you learn all this stuff just by trying to understand it, and the end result looks like I actually know what I'm doing, right? \[laughter\]

**Erik St. Martin:** On all of that I would have to defer to you, because in this case I'm fairly certain you know more than I do about this stuff...

**Brian Ketelsen:** Definitely more than me.

**Erik St. Martin:** I've never written one...

**Thorsten Ball:** I don't know...

**Erik St. Martin:** So, do you guys wanna move on to any interesting news and projects going on in the community? I know we've got a few more minutes left of the show.

**Thorsten Ball:** Sure.

**Brian Ketelsen:** There's some cool stuff happening out there.

**Carlisia Pinto:** As always.

**Brian Ketelsen:** Really cool stuff. I think we have to start with the Gopher Academy Advent Series blog posts... If you haven't been following along with that, blog.gopheracademy.com. We've had some amazing blog posts this year. One new post every day, and I have to give a huge, huge shout out to Damian Gryski for stepping in this year and helping to herd all the cats for all of the different blog posts coming up. With Erik and I both traveling this month, it was almost impossible for us to do it, so great, big, giant gopher hugs to Damian for helping to get all of that moving. Really good posts this year.

**Erik St. Martin:** Without him I'd don't think there'd be a series this year.

**Brian Ketelsen:** It was not gonna happen, no.

**Erik St. Martin:** Massive shout out. Also on the news of Damian, I recently saw that he was promoted to moderator of the Go Subreddit, which is awesome.

**Brian Ketelsen:** Head moderator.

**Carlisia Pinto:** Head moderator.

**Erik St. Martin:** Head moderator. I couldn't think of anybody better.

**Brian Ketelsen:** Chief Gopher on campus. \[laughter\] That's Damian. He is the Head gopher.

**Erik St. Martin:** Speaking of people who can make you feel like you have impostor syndrome, not only does he understand whitepapers, but he's got like all of them memorized. \[laughter\]

**Brian Ketelsen:** And he implements them. Have you seen his GitHub repository? He implements them for fun.

**Erik St. Martin:** He's this encyclopedia of whitepapers.

**Brian Ketelsen:** Yeah, that's pretty awesome.

**Thorsten Ball:** His repository is super interesting. There's so much work in there, and it's super interesting.

**Erik St. Martin:** \[00:56:10.02\] The other thing too is the Go Blog has a survey on there, which is blog.golang.org/survey2016, and they are kind of reaching out to the community to get an idea for use cases, in particular company use cases and the reasons why people are or aren't adopting, and whether they're continuing to grow within the organization, and things like that. So if you use Go inside your company, definitely participate in that because I have the feeling, as with all of their reach outs to the community, that that will highly impact future Go for all of us.

**Brian Ketelsen:** There's a reason behind that, yes.

**Erik St. Martin:** It's to capture your email.

**Brian Ketelsen:** Yeah. \[laughs\]

**Erik St. Martin:** It's all a trap.

**Brian Ketelsen:** So there's a couple interesting news bits and some projects we should shout out. The first thing, this morning I woke up after -- first of all, eight hours of sleep, which is the first time I've had eight hours of sleep in like two weeks (Oh my god, it felt so good!)... So I woke up and there is a new IDE from JetBrains for Go, and it's called Gogland; something that has "gland" in the name, kind of weird. But I downloaded it and it's kind of awesome; I ran it on Windows and Linux, the experience was amazing. It detected my GOPATH, it detected my GOROOT... When I went out to open a project for the first time, it dropped me right in the source directory of my already configured GOPATH and asked me which one I wanted to open. It's a very nice looking IDE.

**Erik St. Martin:** I haven't installed it yet, but I saw some cool stuff with documentation popups, and there was a couple features where it pointed out in the gutter recursive calls, and all the exit points of a function. There were some kind of interesting things that I haven't seen in any plugins for other editors.

**Brian Ketelsen:** Oh, nice.

**Erik St. Martin:** Yeah, it looked really cool. And I know it had some refactoring stuff, and it was kind of expected from the IntelliJ suite. Yeah, it looks really cool. I'm too much of a Vim guy, so I can't guarantee I will convert to it, but I might at least download it and play with it.

**Brian Ketelsen:** All of my students ask me, "What should I use for an IDE?" and many of them want a real IDE, so I kind of feel obligated to test them all out and play, and so far this looks pretty nice.

**Erik St. Martin:** Lauren just pointed out in the GoTime Slack that they have a Vim mode plugin, so I guess now I really have to install it.

**Brian Ketelsen:** Oh, you have no excuse now.

**Thorsten Ball:** And it's actually pretty good, I've tried it. It's one of the better Vim mode plugins for other editors. It's really good.

**Carlisia Pinto:** Interesting. I'll try it, too.

**Erik St. Martin:** You just recently converted too, right Carlisia?

**Carlisia Pinto:** Well, \[unintelligible 00:59:06.04\] but I've been going back to Atom a few times... I mean, I've been using Vim for a while, but recently with the Go plugin from Fatih, I went full-time. But sometimes I go back to Atom, if I'm doing a lot of copying and pasting and stuff.

**Brian Ketelsen:** Is that like a comfort food thing? I used to keep Sublime Text around when I first started Vim. It was probably a whole year where I had Sublime opened just for when I needed to copy and paste things. And then Erik sat me down -- literally, Erik sat me down at lunch and he's like, "Dude, I'm gonna teach you how to cut and paste stuff in Vim, and then we can move on here. \[laughter\]

**Erik St. Martin:** I ended up like pair-programming almost with him in his office for a little while... I think the reason why is because I was there; I'd tell him, "Just do what you need to do, let's cover the things that annoy you the most, and then anytime you think that something is taking too many steps to do, ask me, and then you'll learn a little at a time."

\[01:00:09.21\] That's kind of the way to do it - you just kind of have to accept that it's a little slow at first learning... Then once you have your foundation of commands, there are quicker ways to do stuff, but you're like "Who cares...? Do I really care whether it's four keystrokes or two? No, probably no." \[laughter\]

**Brian Ketelsen:** So that was me last week, teaching a class on Kubernetes -- actually, it wasn't last week, it was this week... Teaching a class on Kubernetes to system administrators, and I'm on the big projector using Vim... Every two minutes it's "Oh, why didn't you use this movement? Why didn't you do this?" I was like, "Alright, you know what? Next time I'm using Atom. \[laughter\] At least I won't get criticized every five minutes."

**Erik St. Martin:** You gotta be \[unintelligible 01:00:51.29\] and use Notepad, remember?

**Brian Ketelsen:** Right.

**Erik St. Martin:** That was the thing, I remember, in the web development world, where everybody would argue over IDEs... Like, "No, I use Notepad", or whatever Windows text editor is, and it's like, "That doesn't make you \[unintelligible 01:01:05.13\] Do you code professionally?" I couldn't imagine working eight hours/day with no line numbers... I can do without syntax highlighting and shortcuts and all that stuff, but there's some basic stuff like line numbering that just needs to be there.

**Thorsten Ball:** Can you actually work without syntax highlighting? I probably see this only in the Go community that people willfully turn off syntax highlighting.

**Carlisia Pinto:** Brian is doing it.

**Brian Ketelsen:** Yeah, I turned off syntax highlighting maybe six or nine months ago, and I don't miss it at all. It took me three or four days, and now I agree with the other people - I think Andrew Gerrand was probably number one - who said it's much easier to read it without all of that colorization in your way. Now you can read the code, rather than be distracted by colors.

**Thorsten Ball:** Really?

**Carlisia Pinto:** I'm with you, Thorsten. I can't even try it. I can't even think of trying.

**Erik St. Martin:** I still have it on. To be honest, I'll SSH into a machine that doesn't have syntax highlighting, and I'll work just fine for a little while. It won't bother me enough to try to set it up on that machine. So I feel like I could probably do it, but I think I might want somewhere in between, or at least maybe functions are highlighted, so that I could quickly scan and jump from function to function, or something.

**Carlisia Pinto:** See, I'm glad you mentioned that, because when I SSH into a machine I'll bring up Vim and I wanna kill myself because "Where is my highlights, shortcuts and everything?" \[laughter\]

**Thorsten Ball:** But the thing is, if you forget to close a string with quotes, syntax highlighting is gonna tell you immediately, right? Because it highlights the rest of the line like a string. At least Vim does it, I don't know how other inferior editors... \[laughter\]

**Erik St. Martin:** We're gonna start a war now.

**Thorsten Ball:** No, no, I'm not gonna go there.

**Erik St. Martin:** Just to play devil's advocate here though, that stuff does -- one of the beautiful things about Vim is the performance of it. But when you have large files, and especially if they have long lines and you have syntax highlighting, that can cause painful issues in lag. It's almost nice thinking that that would never be a problem with no syntax highlighting, right? I don't know whether I could make that jump.

I use different tools like the tag bar or whatever, in Vim, so that I \[unintelligible 01:03:43.21\] functions to be able to jump - something like that would probably make it more easily swallowed, but I don't know... Maybe I'll try it one day, like give it a whole day and see how I feel.

**Thorsten Ball:** \[01:03:56.10\] The thing is that the topics of syntax highlighting long lines in Vim - this is right at the top of my "This needs to get fixed, I can't deal with this any longer." Because I have a meltdown every five weeks where I realize it's 2016 and my text editor can't colorize a line because it's longer than 300 characters and it has like a few backslashes in it, right? And I'm losing it! \[laughter\]

**Erik St. Martin:** We can put supercomputers in our pocket, but you cannot figure out what I meant in my string!

**Thorsten Ball:** Yeah, and my colleagues in the office are laughing at me. They have Sublime Text open and it's super fast, and I actually can't mention this because they're gonna laugh at me. \[laughter\]

**Erik St. Martin:** You have to just sit quietly in your misery, because it will only get worse if you share it with others.

**Thorsten Ball:** Yeah, I was shaking my fist there and biting my lips... \[laughs\]

**Erik St. Martin:** Like, "What's wrong?" "Nothing... All is well."

**Brian Ketelsen:** Alright, we need to move on. We are running long, and Carlisia and I both have school functions we need to leave for in... Fifteen minutes ago. \[laughter\] So we should move on to \#FreeSoftwareFriday quickly.

**Erik St. Martin:** Go ahead. Do you wanna go first?

**Brian Ketelsen:** Me?

**Erik St. Martin:** Yeah.

**Brian Ketelsen:** I love going first.

**Erik St. Martin:** You brought it up.

**Brian Ketelsen:** You brought it up, it's your world, baby. Alright, so I wanna shout out to Buffalo Web Framework by Mark Bates. The website is at gobuffalo.io and it's not even done yet, so he's probably gonna kill me for bringing it up live, but it brought love back to web development in Go for me. Now, I know a lot of you are thinking, "A web framework in Go? That is sacrilege-ish. You should just use the standard library", and I used to agree with you until I found Buffalo. If you came from Ruby on Rails like I did, you will find Buffalo about the closest experience as you can come to Rails in Go, and it's awesome. We're using it for the next version of GopherCon's website, which is at GitHub.com/gopheracademy/Gcon. I think you should go take a look at it because it's really awesome. Just don't get me in trouble for shouting it out before he publically announced it, because the website isn't done yet. Sorry, Mark.

**Erik St. Martin:** We'll just claim that we sent everybody there to look at the really awesome logo.

**Brian Ketelsen:** \[laughs\] Yeah, shout out to Ashley McNamara for making killer Gopher logos.

**Erik St. Martin:** Yeah, I've been looking at a lot of her work lately... Awesome. How about you, Carlisia?

**Carlisia Pinto:** I don't have one, but I am laughing at the logo, it's amazingly cute. I don't have a project today.

**Erik St. Martin:** And I don't know whether we prepped you on this in the email, Thorsten, but typically every show we kind of just do a shout out to a project that's making our lives easier. So if you have one, awesome; if you don't...

**Thorsten Ball:** I have a shout out, and I promise you, I thought of this before this show. My shout out goes to the Vim Go plugin by Fatih Arslan. It's amazing, it kind of turns Vim into a lightweight IDE, because there's so much functionality in it. Five versions ago I thought, "This is it, it's done. Feature complete", and he keeps putting new and super practical and interesting stuff in it, and the development is really amazing to watch, and it's a great piece of software.

**Erik St. Martin:** Yeah, it's funny... I agree with you. It was a few versions ago where I'm like, "Sweet, this has everything I need." Then he adds new stuff and you're like, "I didn't even think about that."

**Thorsten Ball:** Right.

**Erik St. Martin:** \[01:07:51.09\] So I actually have a cool project that I came across that I've only really tinkered with, but it's called gitQL; we've been talking about Git... It's like a query language to query against your Git history, which is actually pretty awesome. You can do a "select author" and whatever from commits, and then you can do like \[unintelligible 01:08:13.02\] That's pretty awesome for when you're trying to search around your Git history for stuff. I thought it was pretty decent with doing Git grep and things like that on the command line. This is actually really cool.

**Carlisia Pinto:** And it's written in Go.

**Brian Ketelsen:** Yeah, it is. I just made an alias in Bash, so when I type git blame, it just runs ID -u-n.

**Erik St. Martin:** \[laughs\]

**Brian Ketelsen:** That was a bad Linux joke, sorry. \[laughter\]

**Erik St. Martin:** We have to explain that that returns back...

**Brian Ketelsen:** That just gives me my username back.

**Erik St. Martin:** It would be less confusing if you just replaced that with whoami. \[laughter\]

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** You're the blame for everything... Even if it wasn't directly, it's indirectly.

**Brian Ketelsen:** Yup.

**Carlisia Pinto:** But this tool is really cool.

**Brian Ketelsen:** Yeah, gitQL is pretty awesome.

**Erik St. Martin:** Alright, so I think we are about 10 or 12 minutes over, and I know everybody kind of has some functions to get to, so we are gonna go ahead and wrap up the show. Everybody, happy holidays! For two weeks we're gonna not have episodes, just to kind of close down for the holidays while everybody spends some time with their family and travels and all that good stuff, but we will see everybody back after the new year. January 5th I think is the next recording day.

I wanna thank everybody on the show, definitely thank you, Thorsten, for coming on the show and talking about interpreters and compilers and all that good stuff...

**Thorsten Ball:** Thank you for inviting me, it was a pleasure. This was really fun.

**Brian Ketelsen:** That's a great show.

**Erik St. Martin:** Huge shout out to all our listeners, especially the ones that are hanging out with us in the GoTimeFM channel on Slack; huge shout out to our sponsors, Backtrace and StackImpact - without them, we would not have a show. So everybody go check out their sites and products; we only work with awesome people, so definitely check out Backtrace and StackImpact.

Follow us on Twitter @GoTimeFM, GitHub.com/GoTimeFM/ping if you wanna be on the show or have questions for our guests. With that, goodbye everybody and happy holidays!

**Brian Ketelsen:** Happy Gophermas! Happy holiday!

**Carlisia Pinto:** \[laughs\] Happy holidays, bye!

**Thorsten Ball:** Bye!

**Brian Ketelsen:** Bye!
