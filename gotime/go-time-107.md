**Mat Ryer:** Hello, and welcome to Go Time. Today we're talking about compilers and interpreters in Go. Very interesting. Joining me is my co-host from another mother, Mark Bates. Hi, Mark.

**Mark Bates:** Hey there, Matthew. How are you doing today?

**Mat Ryer:** I'm good, sir. And yourself?

**Mark Bates:** A little freaked out by the idea that we might somehow be related.

**Mat Ryer:** Okay, well I said another mother, so you've not paid attention already. It's not a great start.

**Mark Bates:** Well, there was still a relationship implied, and I don't know how comfortable I feel.

**Mat Ryer:** Yeah, okay. Thank you, that's lovely.

**Mark Bates:** \[laughs\]

**Mat Ryer:** We're also joined by Tim Raymond. Hello, Tim.

**Tim Raymond:** Hello. How's it going, Mat?

**Mat Ryer:** Good, how are you?

**Tim Raymond:** I'm pretty good, thanks.

**Mark Bates:** Today, by the way, is Tim's birthday, everybody... \[laughter\]

**Tim Raymond:** As it is whenever I do anything...

**Mark Bates:** So please, if you're listening, reach out and wish Tim a very happy birthday.

**Mat Ryer:** This is a prank Mark Bates plays on Tim Raymond all the time, by the way...

**Mark Bates:** I don't know what you're talking about. Tim is 21 today.

**Tim Raymond:** Every time we go to a restaurant... \[laughter\]

**Mat Ryer:** We're also joined by - you won't believe this - Thorsten Ball, author of Writing a Compiler in Go and Writing an Interpreter in Go. Hello, Thorsten!

**Thorsten Ball:** Hello, how are you?

**Mat Ryer:** Good, thanks. Welcome to the show!

**Thorsten Ball:** Glad to be here.

**Mat Ryer:** Good. Well, we'll see. Let's reserve judgment for now, and you let us know at the end how it's gone. \[laughter\] So let's jump in, let's talk about it. We're gonna talk about compilers and interpreters. First of all, for anybody that doesn't know what that is, maybe we could start off with what is a compiler? What does it actually do, and why is it useful? Does anyone wanna have a stab at that?

**Mark Bates:** I think Thorsten should, because his books are absolutely amazing at explaining just that theory.

**Thorsten Ball:** Thank you.

**Mark Bates:** Do you like the way I put you on the spot?

**Thorsten Ball:** \[laughs\] Yeah. I was gonna say, the answer is not that easy, as in it depends; it's all blurry. But I would say the easiest explanation for what an interpreter and a compiler is is it's the implementation of a programming language. It's how you make it exist. You can think of a programming language, you can define it to the last detail, but it still doesn't exist. It could only exist on paper or in theory, and you need to implement it. And you can implement it by building an interpreter or a compiler. That's my really concise attempt at explaining it.

**Mat Ryer:** \[04:21\] Yeah, that's great. So in Go's case then, the Go compiler of course takes the Go code, does all its magic to it, and turns it into a binary...

**Thorsten Ball:** Right, yeah.

**Mat Ryer:** And the binary is made up of what? What is actually a binary?

**Thorsten Ball:** Another programming language is in a binary, and that is then interpreted by the computer, by the CPU. So it's - as they say, machine language is all the way down, I guess...

**Mat Ryer:** Yeah.

**Thorsten Ball:** But yeah, the end goal is you wanna talk to the computer and you want the computer to understand you... And when you, let's say, get a computer from the factory, it only speaks one language, and that language is the machine language, that differs from computer-to-computer, from CPU to CPU... AMDs speak a different language than ARM CPUs, for example... And in order to not have to talk to the computer in machine language all the time - which is really detail and really low-level - you implement another language in this machine language.

So you say "Okay, if I give you this five words in machine language, do this." And then you kind of put together, piece by piece, another language on top of that. So you say, in machine language, "I read another language from this file on disk, and turn it into this other version in machine language", and then the computer can understand that. Then you build your way up, and then you end up somewhere with Go, or even higher, JavaScript in the browser, or something.

**Mat Ryer:** The interpreter book was the first one you did, right?

**Thorsten Ball:** Right, yeah.

**Mat Ryer:** And in that, you actually implement the Monkey language.

**Thorsten Ball:** Yeah.

**Mat Ryer:** Tell us about the Monkey language.

**Thorsten Ball:** The monkey language is called Monkey language because the Tiger language already exists... I had to come up with a name for a programming language, and the goal was to kind of have a language that has a bit more meat to it than, say, most example languages used in tutorials, blog posts, whatever. Most of the time they have a Lisp parenthesis, and they lose 60% of all readers at that point... And then they lose another 20% of readers when they say "Let's get parsing for now. Since we have a Lisp, we can just split the string on the parentheses, or something, and we don't need a parser." That kind of cuts short on a lot of the stuff that I wanted to learn about when I wanted to learn about programming languages, for example parses and how they work...

And the language that I wanted to build and then dissect or teach in this book should have more details, like curly braces... You know, back then I thought "Curly braces? This is a real language, I guess... Not a toy language..." \[laughter\] Now I think differently, but... It should look like a real language - proper indentation, the keywords indentation, braces, parentheses, and so on. I kind of pieced this together, and then I put the name Monkey on it.

If I had to describe it, it looks kind of like JavaScript; it also acts kind of like JavaScript, because under the hood it actually acts like a scheme, or a Lisp thing, which is funnily enough also what JavaScript was based on in the beginning. It's a really small language, it has basic data types like integers, arrays, hashes, strings, it has functions, first-class functions, higher-order functions... I don't know what else, off the top of my head. It has a macrosystem in a separate chapter... Yeah, I named it Monkey because I do like monkeys, I guess.

**Mat Ryer:** \[08:14\] So it's great for not just learning about interpreters, but the fact that you actually implement the real thing I think is a great way to learn. But of course, the skills are transferable, aren't they? That's the point. Once you can do this, once you can build an interpreter, then you can use that skill to solve other problems.

And Mark, you actually did that very thing from Thorsten's book, didn't you?

**Mark Bates:** Yeah. I think there's even a quote on the website of the book...

**Thorsten Ball:** Yeah.

**Mark Bates:** I think the book is amazing. I'm famous for saying "Don't have a CS degree." I'm not a computer scientist, I have a degree in music, so the idea of things like parsers and lexers and tokens and interpreters and stuff - that kind of knowledge was far above my paygrade in terms of even just coming close to understanding it.

So when I saw that book, I was like "Okay, let me give it a whirl." At the time, we were having problems with templating in Buffalo too, so I was kind of getting at my tether with some of the other stuff that was out there... So I was hoping to even just understand what they were doing, so I could contribute back to some of these other things, like \[unintelligible 00:09:25.20\] for example... No pun intended. It was like a weird kind of mustaches, handlebars kind of implementation, wasn't it?

**Thorsten Ball:** Yeah, no relation to me.

**Mark Bates:** Yeah. They like to use panics instead of errors.

**Mat Ryer:** Nice!

**Mark Bates:** It was wonderful. So I read it and I'm like "I have no hope of actually understanding this, but let's see..." And what I love about the book was it was right from the beginning very small chunks, easily tested. Every bit was TDD, through the entire book... And by the end of the book I felt apparently overconfident, because I went and built Plush... \[laughter\] But I went from having no idea how these things worked, or even what they meant, to having a basic, fundamental idea at least of the theory and what was happening... And when we talk about PEGs in a little bit, having this information from Thorsten's book and understanding it that way, and then kind of going to PEGs, which kind of make a high-level abstraction around parsers, which we'll talk about a lot - at least I then understood.

So just understanding the theory I think is an important part, even if you're not going to use these tools. Not everybody should or can build a programming language. They're like routers, we don't need more of those. But we'll talk about the one I'm writing later... \[laughter\]

**Mat Ryer:** Yeah, I thought we might... Well, that's the thing, isn't it? When I first saw this, I thought "This is the most specific book that I could imagine", and I thought "Isn't it too niche?", but actually, templating is a great example of a case. There were a few other times that I've come across, where I would have liked to be able to do these -- and I solved it just sort of, again, not in the proper way; just kind of minimal effort, to try and just get something to work.

**Mark Bates:** Regular expression type things...

**Mat Ryer:** Yeah, even that sort--

**Tim Raymond:** Configuration files that people come up with, I've seen that a lot.

**Mark Bates:** Yeah.

**Mat Ryer:** Right, yeah. And Matt Layer on the Slack - and by the way, if you're listening live, you can join the conversation on Slack; GopherSlack in the \#gotimeFM channel. Matt Layer there recommends this, and what he was saying is after he'd been through the book, he then was able to go and add new features to it, and play around with it, and change things, and break things, and things like this... And I think that, for the spirit of learning, that's a really appealing thing to do. So I love the fact that you would actually have your own implementation that you can then play around with.

**Mark Bates:** \[12:02\] The book leaves you in a good place for that, too. It gives you what you need to go and break it further, like Matt did, or like I did. I think there is a layer that the book may not address, or might need another book to address, which is you've written a parser, but don't make this where your code actually gets executed, and stuff like that... Which is kind of what happened with Plush. It became parser, executer, templating system in one big ball, and that caused us too many problems. We'll talk about those later, but...

**Mat Ryer:** Yeah, interesting.

**Thorsten Ball:** I can listen to this for hours, people saying how nice it was to read through... \[laughter\]

**Mat Ryer:** Don't worry, I've also solicited a lot of hate.

**Mark Bates:** I just told you how terrible it was afterwards...

**Thorsten Ball:** No, no, no, you said how terrible it was what you did... \[laughter\] I didn't put this in the book...

**Mark Bates:** Yes, exactly.

**Thorsten Ball:** The second one even introduces bytecode, so there's a neat separation there, I guess...

**Mark Bates:** Anybody who knows me, Thorsten, will tell you you explicitly have to say "Mark, don't abuse this technology", because I will.

**Thorsten Ball:** Yeah. \[laughs\]

**Mat Ryer:** "Try not to release this as a package that's gonna end up as a dependency in lots of Mat Ryer's projects..." \[laughter\]

**Thorsten Ball:** I wanted to go back to the starting point here, that was you start out thinking "This is really specific. How can I possibly reuse this knowledge?" And for me at least - and it sounds like you guys would confirm this - what happened was after it clicked for you and after you understand how parsing works, for example, then you suddenly see it everywhere; then you can go "Oh, now I know also how this is implemented. Oh, I can see how this works. I can see how that works."

**Mark Bates:** I know it helped me with my understanding of the Go AST, and working with that, too.

**Thorsten Ball:** Yeah. I mean, that is the (let's say) implementation; you can peek under the hood of a language. But configuration languages, for example - I think after you went through the book, you can write any parser or a TOML parser, or something. Maybe not YAML, because that seems to be the abyss of whatever people think up.

**Mark Bates:** It's the JavaScript of formatting. JavaScript as configuration files.

**Thorsten Ball:** So you suddenly see all of these different things as problems that are now solvable. Your reach gets much wider. You can suddenly implement stuff that you didn't even maybe dare to think about implementing before.

Just to give you another example, configuration files was one. Templating language. Queries. If you're writing a sort of database - not everybody does this... But a database for example has queries, needs to parse the queries, needs to put them in some kind of structured form to interpret, or compile, or do something with them.

At work, for example - I work at Sourcegraph - we built a search engine for code, and you can search for code and put in queries. These also need to get parsed. And then you send them to a database, and that also parses the queries. And I looked at the code of how this database does it, and it's surprisingly similar. In the end it's a bunch of functions that build up a tree, so to say, and then it gets interpreted.

Before I got into parsing and parsing programming languages, I wouldn't even know where to begin with that. This is like another tool in your toolbox that you can hopefully pull out when you need it. So that is the first answer I wanted to give.

The second one was what you said, Mat, that it helps with learning; that after you have this programming language implemented, you can add a bunch more stuff, that Matt said in Slack. And I just want to add to that that it's so much fun to do that once you have a language or an interpreter running, adding little bits and pieces.

\[16:02\] It sounds really like I'm exaggerating, but it is nearly boundless creativity. You can add a lot of different stuff to your language, and the nice thing or fun thing about developing a language is, compared to web applications, which is my background, you don't need a database, you don't need an internet connection, you don't need a second database, you don't need a huge build process. It's really like making stuff up in the air. You have a text file, you write stuff in the text file, and then on the other end you get hopefully output, or something. But it's a really fun thing to work on and develop.

**Tim Raymond:** I've found the same thing when I wrote my first interpreter, because it's such a good way to flex your TDD muscles... They have no dependencies; you're just writing a string of something, and you can try out new cases very easily... So you can really learn not just how to write interpreters, how to write compilers, but how to write really good tests, that don't have dependencies on other things.

**Mat Ryer:** Yeah, and it's a great time to also flex fuzzing muscles too, right? Because this is string input, and you don't want things to crash. You want things to at least be able to report an error if something's wrong, and hopefully report where that error is, as well.

**Mark Bates:** Hang on, I'm taking notes... \[laughter\] Error handling, \[unintelligible 00:17:24.06\] testing...

**Thorsten Ball:** I was just gonna say, please don't run a fuzzer over the code we write in the book. That's not gonna end in a good thing... I'm sure it's gonna break on like the fourth try, or something.

**Mark Bates:** The thing I really liked, or the thing I got the most out of the book - and it's what we're gonna definitely wanna hear from Tim about, too - is just about parsers in general. Whether you write an interpreter at the end, or a compiler, or whatever, just writing parsers can be incredibly useful for all sorts of stuff.

For example, at Gopher Guides we have a markdown parser we use, that splits up our markdown so we can then do all sorts of things with it. We can rejigger it and make nicer slides, or format it out in different ways. That's not a language, it's not something that's even that big; it's not an interpreter, it's not a compiler, but we wrote a parser because we needed to break apart this file format. So just having that ability and knowledge of how that works to write something that simple is incredibly useful. 

So in this case you don't have to write a templating package, you don't have to write a programming language; you can still make use of parsers for a ton of things.

**Mat Ryer:** Yeah. Well, I think probably a lot of people have written some version or some kind of parser before. I know I have. And what happens is it works brilliantly for the specific case that I need it for, and then later I think "Oh, that'd be great. I'll add that." And if you haven't structured it properly -- the book follows these patterns that are well tested. The ones I did, didn't. I was just kind of trying to figure it out myself. And it became so frustrating... I basically wanted to Frisbee my laptop into the sea, that's how bad it was.

So having the actual structure, parsing properly... Simple things like knowing when you're in a string. Because things change when you're in a string. Things like that, which -- if you're just splitting strings and doing some basic parsing, just sort of hand-coding it, that's the stuff that gets really tricky. So yeah, I love the fact that these are tried and tested techniques, and they're now available to everyone, in Thorsten's book... \[laughter\]

**Mark Bates:** For 19.95.

**Mat Ryer:** I'm gonna stop promoting... Could someone on Slack - if anyone didn't like his books, could you get in touch, please? Because it's been a bit -- we want to make sure this is a nice, balanced show.

**Mark Bates:** Well, you can throw a shade at me, if you want... Are we trying to throw a shade at Thorsten? Because, I mean, we can do that... \[laughter\]

**Mat Ryer:** No, we don't really have to.

**Mark Bates:** Oh, that's a drag. Can we talk about PEGs?

**Mat Ryer:** What's PEGs?

**Mark Bates:** \[20:07\] I think we should talk about PEGs. We talked about parsers, and I think that's a great introduction, and I'd love to hear Thorsten's take on them, as well. Tim. Tim Raymond is with us... Tim will be speaking need week at Gopherpalooza. By the way, I'm doing Mat's NPR voice... Just trying to fit right in there with him. So Tim will be presenting next week at Gopherpalooza, where it'll also be his birthday, and he will be talking about PEGs, which are parser expression grammars, correct, Tim?

**Tim Raymond:** Yeah.

**Mark Bates:** Why don't you tell us what that holiday treat is all about?

**Tim Raymond:** PEGs, as Mark said, are parsing expression grammars... It's a language for building parsers automatically. It's a way of doing code generation. If you've read any other kind of like parsing stuff, you might have heard of things, like Bison, and these other kinds of parser generators...

I find PEGs are nice because they follow closely to the kinds of parsers that you would build by hand. But I find that once you've written that first parser by hand, which is what I recommend everyone do...

**Mark Bates:** Oh, absolutely...

**Tim Raymond:** Before you even try PEGs--

**Mark Bates:** Just so you can understand it, yeah.

**Tim Raymond:** ...try writing one by hand, so that way you can learn that there's no magic going on here... But a PEG can help you make a lot of ground very quickly when you're trying to build a new language, or when you're trying to interpret a language, or just trying out new ideas for.

**Mat Ryer:** And is it like a definition language then? Or is it like a configuration language? How does that actually work in practice? Because presumably, you have to sort of mention "Okay, these are the keywords, and I'm gonna have integers..." How does it look?

**Tim Raymond:** When you're writing out a parser by hand, you would ordinarily try the grammar, like "Okay, we have a document, and it's composed of multiple different statements, or something like that..." PEGs let you actually just write that string out. A document produces multiple statements. And when that rule actually matches, then you can run some custom Go code for that section. So it allows you to have these little hooks into different parts of where the grammar matches different things within the text that it's processing.

**Mark Bates:** Right. So maybe kind of give a visual thing, too.

**Mat Ryer:** Mark, it is a podcast. Please remember that.

**Mark Bates:** I know, sorry. \[laughter\] Okay, well my doodles are apparently not gonna help anybody in the audience... \[laughter\] Let's try to do a mental--

**Mat Ryer:** Also, please put some clothes on.

**Mark Bates:** We're gonna learn in a safe space here, Mat. Learning in a safe space.

**Mat Ryer:** Okay, I'll be quiet then.

**Mark Bates:** Close your eyes, light a candle, and picture mentally, in your mind, an empty .peg file... No, but what you do is -- so if you take the idea of declaring a variable "var a int". Let's use something that we all know, "var a int". In that PEG file you'd say "Okay, I'm gonna define a keyword called var, and if I see that and it's followed by this set of alphanumeric characters", let's say, a through z, and 0 through 9, then that is what we can construe it as an identifier; then you have an int afterwards, the type. So you would write out a thing that says "I'm gonna create a var rule, and it's gonna look like this. You use the word var, followed by what I declare as an identifier match, followed by a type match, followed by a new line." That rule is gonna get matched, and in that rule you do something in Go. You return something. So you'd probably return something that handles variable declarations in your language.

**Tim Raymond:** Yeah. You can return a struct, you can log something out... So if you were just building a tool that could highlight things, you could print out the thing that was even matched with different highlighting... You have access to what was actually matched by the peg, so at that point you can do anything that you want, really.

**Mat Ryer:** \[24:04\] Do they get difficult to follow, though? Do they grow quite big, quite quickly?

**Tim Raymond:** They can, and we've actually been working on a newer version of Plush...

**Mark Bates:** Oh, we have... Have we, Tim? You're really stealing my thunder?

**Tim Raymond:** Yeah, yeah, I did... I stole your thunder, I'm sorry. \[laughter\] And in so doing, Mark found that it's probably better to try to move as quickly as possible out of the PEG into actual Go code... Because it is generated code, and so things like Go imports don't exactly work... Like, at all. So to have certain facilities that we're used to writing Go code, we've just found that it's useful to have certain support Go files along with it.

**Mark Bates:** Unfortunately, when you're writing these PEGs, all you get is empty interfaces. So the rule matches, and what you're given back is a bunch of empty interfaces that represent the matches of that rule. So since you write these things in a .peg file, it's not a Go file, and it's just \[unintelligible 00:25:08.08\] so you kind of have to immediately take these empty interfaces off and do something with them. That's probably the biggest downside I've found with them. They can get a bit hard to follow... You just sometimes get a bit lost in the details.

But overall, each rule itself, if you break down and look at a rule, they're very simple and well defined. "If you see if followed by parentheses, followed by this stuff in the middle, it's these things, and handle it this way." And it's remarkable, like Tim said, how quick you can make progress with it.

**Mat Ryer:** So it just outputs text then. The PEG doesn't know that it's Go it is generating.

**Mark Bates:** The PEG is text, yeah. And then you run a tool like Pigeon over it, and Pigeon (ironically) parses the PEG, and then it spits out a .go interpretation of that as a parser.

**Mat Ryer:** Oh...

**Mark Bates:** It's giant, and it's huge, and whatever...

**Tim Raymond:** It's auto-generated code.

**Mark Bates:** It's auto-generated code. Now, I've heard that it's not as good as the one you would handwrite yourself, but I know it's better than the one I would handwrite myself. \[laughter\]

**Mat Ryer:** Yeah, it depends whose hand it is.

**Mark Bates:** Well, that's exactly it. I think Thorsten will agree - understanding these things is great, and knowing them is very useful, but we're not all language designers, and we're not all parser experts. And unless you want to be, you're not going to be.

**Thorsten Ball:** Yeah. Tim said this - your first parser, he recommends you write your own, and I 100% agree... When you're googling "how to write a parser for a programming language", or something, you will find people saying "Don't worry about it, just use a parser generator, like Yacc, Bison, Antlr..."

**Mark Bates:** All of which I couldn't understand, by the way.

**Thorsten Ball:** Exactly. That's what I'm about to say...

**Mark Bates:** I understood your book, I did not understand those... \[laughter\]

**Thorsten Ball:** What these take as input is grammar, like BNF (Backus-Naur form), EBNF (the extended version of that), and I've found it really hard to just write a grammar like this, or even understand what it does or what it should do without having written a parser. But once you wrote a recursive descent parser, you look at these grammars and you go "Oh, now I can see how you can create the parser from this", and then you kind of cherish what it abstracts, basically, and then you can get into this whole... The theory of parsing is a whole world onto itself, and I dare not enter it, or speak about it... \[laughs\]

**Mark Bates:** Yeah, but you do a great job of explaining it in human terms in the book though, which is --

**Thorsten Ball:** \[laughs\]

**Mark Bates:** Like I just said, unless you wanna be an expert, you're not going to be.

**Mat Ryer:** But it's not good for dogs though. You wouldn't recommend it if a dog wanted to--

**Mark Bates:** My dog loves it.

**Thorsten Ball:** Well, I've had dogs write me emails, saying--

**Mark Bates:** \[28:07\] Ringo has written like four languages now. The dog can't stop himself. He's crazy with the book. He's got the compiler book in his crate at night; he's just flipping through it, a little pause...

**Thorsten Ball:** Most dogs like the second book much more...

**Mark Bates:** Yeah, I would agree. He went for the compiler book, totally. I don't know why that is. Something about the bytecode, maybe...

**Thorsten Ball:** Oh, is that a joke...?!

**Mark Bates:** Thank you. Dad jokes 101, everybody...

**Tim Raymond:** That's a good joke. Brilliant.

**Mark Bates:** Thank you.

**Break**: \[28:36\]

**Mat Ryer:** So does the compiler book follow on from the interpreter book then?

**Thorsten Ball:** Yeah, yeah. It's a sequel... Which is kind of hard to explain to a technical audience, as in "Yeah... Haha! It's a sequel... You end on the last page of the first book, and then you open a second one, and it carries on."

**Mark Bates:** Admittedly, the Monkey language was taken hostage at the end of the first book, so I can understand why people wanted the sequel.

**Thorsten Ball:** Yeah, yeah.

**Mark Bates:** I wanted to know what happened to Monkey, too.

**Mat Ryer:** Why do people struggle to understand that, Thorsten? Because it seems like an extremely simple concept. \[laughter\] It's a sequel.

**Thorsten Ball:** I don't know. People ask me "Do I need to read the first one before I start the second one?" Which is -- yeah, if you think about the titles; they do not maybe give it away that they kind of build on each other... But they do. They use the same codebase.

You can read the second one without having read the first one, but what you then have to do is you have to treat the things we built in the first book as black boxes... Which is kind of not what the books are about. You can read the second one and say "Okay, they apparently have a parser here. They have an AST package. They have an object model, or something. I'm gonna ignore this and just focus on the bytecode and the VM." You can do that, but I haven't written them this way, so there might be stuff missing... So I do not recommend it.

**Mark Bates:** And when does the prequel come out?

**Thorsten Ball:** The prequel? Like Baby Monkey? \[laughter\] I don't know, I don't know...

**Mark Bates:** I'm looking forward to it.

**Thorsten Ball:** There's a lot of stuff you could add to both books, I guess. As we said, you can extend a programming language in any dimension you want. Add more to the syntax, add more to the functionality, improve the implementation, make it faster, make it more efficient, whatever. But the limitation here is "How do you explain it in a book?" When I started writing the first one, I thought "Yeah, I'm gonna do interpreter, and then VM bytecode, in the same book." Then I started writing, and I realized "I'm not gonna make it to the end of this..."

**Mark Bates:** What are you, the Stephen King of technical authors? \[laughter\] \[unintelligible 00:32:09.18\] thousand-piece masterwork...?

**Thorsten Ball:** Yeah, yeah... \[laughter\] Part one, yeah.

**Mark Bates:** \[32:17\] And at the end it's just a giant spider... \[laughter\] It's a real letdown.

**Mat Ryer:** So the compiler book then - it takes the language, the language can be interpreted from its text; so the input that is text gets interpreted, so then you understand what that says... So what's the process then for that to turn into something that can be executed and compiled, or compiled and then executed?

**Thorsten Ball:** Let's go back to what I said earlier about "the computer only understands a single language." The goal is to have the computer understand what you're saying. And just as with humans - and I know I'm stretching this metaphor a bit - there's two ways to make someone understand the language data on speak. You could, for example, listen to what another person is saying and write that down and translate it into the language your friend can understand, and then pass that on to them and then they can read it... Or you can translate on the fly, interpret, so to say, and just listen to what the other person is saying, sentence by sentence, and then speak it back to your friend.

If we translate that onto computers, interpreting means taking another language the computer does not understand as input, and depending on what is being said, you execute or you immediately run the things this language tells you to do, in a language that the computer can understand. I don't know if that makes sense, but it's kind of what's happening.

When you compile, you actually translate. You take the input and translate it into another language, and then pass that on to the computer. If you compile Go code to a binary, that's exactly what happens. You take the Go code, the compiler takes it in and produces machine code the computer and operating system can understand. There's a bunch of different Go REPLs, I think.

**Mark Bates:** There are a bunch of them.

**Thorsten Ball:** Yeah. And what they do is -- well, I'm actually not sure how they implement it, come to think of it... But what they could do --

**Mark Bates:** I can tell you how a lot of them work, which is to compile and run on the back-end. They take the statement, compile it, and run it.

**Thorsten Ball:** Yeah, that's exactly what I didn't wanna hear to explain this... \[laughs\] Because since Go is a compiled language, some limitations aside, you could just as well interpret it by reading it line by line. "Oh, the next line says 'format print line', or something. Let's print a line, instead of translating that into another instruction that tells the computer to print a line." You're gonna ask me, I bet, when should you do what.

**Mark Bates:** No, we weren't...

**Thorsten Ball:** But I prepared notes. \[laughter\]

**Mark Bates:** Fine, if you prepared notes...

**Thorsten Ball:** Well, thank you for asking. So when should you do one or the other... If you translate it into another language the computer can understand, that means you can hand it off, and then there's no translation involved anymore when executing the program. You translate it once, which means you kind of frontload the cost of translation, to a point in time where you're willing to pay it.

If you're compiling Go code on your machine, you're happy to wait a few seconds, because that makes the program run faster later on, when it needs to run on the server. If for example you're not willing to pay that cost, you could just as well say "No, this needs to run. I don't wanna wait for it." Let's say you have a scripting language, or Bash, like a shell language, where you want it to run immediately... Then you don't compile it, and you interpret it on the spot, line by line, basically. And answering your follow-up question...

**Mark Bates:** \[36:17\] Do we need to be here for this, or can we just go...? \[laughter\]

**Thorsten Ball:** No, no, no, I've got it all figured out. Just mute your microphone... \[laughter\] So if you're willing to pay the cost upfront, then that means you can also do stuff that wouldn't be feasible to do when you run it, at the same time that you're interpreting it. For example, optimizations. If you're compiling a huge program - let's say 100,000 lines of code - there's a bunch of optimizations you can do. For example, removing duplicate code, in-lining functions, and so on. These optimizations cost time, they cost computation power... And if you have to translate and do those optimizations while running the program, that costs. You need to somehow make that happen without paying the performance penalty that would be incurred on the running program. But if you're willing to pay this cost upfront, you can do that.

Tying it back to Go, the Go compiler - I might be wrong on this, but I heard people on the Go team say that they really care about the speed of the compiler, so that's why they don't add too many optimizations. It's a trade-off; they're really conscious of that trade-off, as in "Yeah, we could put more optimizations into the compiler..." That would mean they could spend more time on making the code run faster, but that would also mean the compilation process gets slower, which would be a penalty we all have to pay, since all of us cherish how fast the compiler is.

**Mat Ryer:** Yeah, but you could make it configurable, couldn't you? And just have one that builds quickly for no optimizations for dev, and then when you wanna put it into production, you do the slow one...

**Thorsten Ball:** Yeah, I guess you could.

**Mark Bates:** And you can tweak your JVM settings... \[laughter\]

**Mat Ryer:** Yeah. Alright... That's a burn.

**Thorsten Ball:** You could, right? Other compilers have optimization levels. There's even -- I learned about this last year... There' super-compilers, which is an awesome name for -- it doesn't matter what it is; it's an awesome name.

**Mark Bates:** They wear capes and have big letters on their vests...

**Thorsten Ball:** Exactly, exactly. So yeah, they fly much faster than any other compiler... But what super-compilers do - and again, and this is valid for everything I say, I might be wrong here... But what super-compilers do is they basically spend all of the time they run on trying different optimizations. It's a thing you kick off and have run like a CI process. On everything you push, they just run for hours and hours and hours, and try to find optimizations and test those optimizations, and then they come up with a gold image and say "This is the fastest possible we can make this."

Games companies use this for -- they call it gold builds, I think. So when the game is finished and it's ready to be shipped, they take the binary, or assembly language, and put it into a super-compiler. And that super-compiler looks at this and tries to reorder the code, remove duplicate code, and different combinations, and it runs for weeks to come up with a faster version of the program.

**Mat Ryer:** That's awesome.

**Thorsten Ball:** And also, they can shoot lasers out of their eyes. \[laughter\]

**Mark Bates:** I just give my code to Tim. \[laughter\]

**Mat Ryer:** Tim is your super-compiler.

**Mark Bates:** \[39:45\] He really is. Tim is my go-to CS expert. He first introduced me to PEGs, for example, earlier this year, when we were heading down to GothamGo. So I always love having Tim around for that, because he really is my super-compiler. \[laughter\] So I'm really excited just to be on the call with Thorsten, because I'm such a big fan, with Plush, and everything like that...

**Mat Ryer:** None taken. \[laughter\]

**Mark Bates:** No, no, I was about to say "...and not a big pleasure to be on the call with Matthew, as always."

**Mat Ryer:** Oh, okay. That negative has confused me.

**Mark Bates:** Which, by the way, folks, I am the only person who's allowed to call him Matthew.

**Mat Ryer:** Yeah, and even you -- that is definitely not allowed, but... \[laughs\]

**Mark Bates:** Yeah, well... Sorry, mate.

**Mat Ryer:** It's a syntax error.

**Mark Bates:** It's a thing now, sorry.

**Mat Ryer:** I'm gonna have to write a PEG to parse my name, to make sure it's acceptable. Come on, it's a computer podcast. Those kinds of jokes are fine.

**Mark Bates:** Are they though...? \[laughter\] Are they really? So I'm excited to be on the podcast with Thorsten and Tim, because as Tim mentioned earlier, we are working on a replacement for Plush. Thank you, Mat.

**Mat Ryer:** What's it called?

**Mark Bates:** It's called Lush.

**Mat Ryer:** Clever. Is it smaller?

**Tim Raymond:** Hopefully.

**Mark Bates:** Well, -ish, I guess... But we're using a PEG for it.

**Mat Ryer:** Does it smell really strong when you walk past it on the high street? Does that translate?

**Mark Bates:** That is a very English joke...

**Tim Raymond:** I got it, I got it.

**Mat Ryer:** Okay.

**Mark Bates:** It is very English.

**Mat Ryer:** There's a soap shop called LUSH, and it frankly stinks. But that was the joke.

**Thorsten Ball:** It does, yeah. \[laughter\]

**Mark Bates:** They all do. So it's a superset of Monkey -- well, of what we ended up using for Plush.

**Thorsten Ball:** Cool.

**Mark Bates:** So it supports all of Plush, plus more. It's kind of like an interpreted version of Go without types, right?

**Tim Raymond:** Basically, yeah.

**Mark Bates:** Basically. But it's just been interesting to approach the same problem from these two different angles as well, because it's essentially saying -- so Lush is going to be an embeddable scripting language, that also compiles to Go... So you can imagine, if you're using it in your application, you write HTML files, and then they get compiled in .go files, which is pretty nice.

**Mat Ryer:** Does it do it in the same way the standard library does, where actually at runtime you compile it? Or would you precompile it in some way?

**Mark Bates:** Yes, it is a precompilation step, where we take a Lush script and we can generate a .go file from it, and kind of work through it. But like I said, just the ideas, and looking at the problem from first writing a parser in lexer, in AST, and all of that, and then writing something like a PEG, where if you go to gobuffalo/lush, you can even see the PEG there... By the way, it's not ready for production. TIM needs to make the expressions work well.

**Tim Raymond:** Yes.

**Mark Bates:** But it's an interesting way to look at it from these two different perspectives. One, this kind of like "I am going to minutely turn churn through each bit of this file, and understand and keep track of that, and process that on my own, so I know exactly what's happening..." And then another ways is to use the PEG and just kind of turn that over to somebody else, to a code generation tool, and say "Let me try to abstractly define what this looks like and what this is going to be, and hope that it generates the right thing on the other side."

I don't think I could have done it without understanding parsers first. I really don't. I've used PEGs now for a bunch of things, but I -- yeah, if you don't understand it, I don't think it's... I don't know. Tim, you sell them.

**Tim Raymond:** It would be a much slower process. Just like Thorsten was saying earlier, you can really appreciate what the auto-generated code is doing for you, because it's doing it in such a way that you're basically generating your own recursive descent parser, so you write these in a recursive descent way.

So without the prior context of having written one, you would be reading a lot more documentation than you would otherwise have to.

**Thorsten Ball:** But you also have the compilation step in it, right? As in if you output Go code...?

**Mark Bates:** Oh, that's a different thing. That's just a benefit of this tool that we're working on. That's just one of its features.

**Thorsten Ball:** \[43:59\] But you said "I couldn't have written this without understanding parsers", and my question would be "Do you think you could have written it without knowing anything about compilation, or kind of getting into this topic?"

**Mark Bates:** I know nothing about compilation.

**Thorsten Ball:** I see. Question answered, yeah. \[laughs\]

**Mark Bates:** I haven't read your second book. I said that at the very beginning of this show, so I don't feel bad about that. I didn't read the second book. So again, Lush is an embeddable scripting language, and it looks so much like Go... Because Monkey looks an awful lot like Go if you took away types, in a lot of places. And certainly Plush does. Lush takes it even further.

So to take that and to generate Go from it is not all that difficult. It's just a matter of implementing the right formatter, or print package to just say "Okay, this is an if node. How do we print an if node in Go?" And some of this stuff is even easier than that. You can take a Lush map, and all you've gotta do to translate it to Go code is just take the underlying map and run it through Sprintf and you get back the actual correct Go code on the other side. So that's one of the features coming out of it. But yeah, it's not a proper compilation step, it's another code generation step.

**Thorsten Ball:** Yeah.

**Mark Bates:** And then that obviously would get compiled.

**Tim Raymond:** I mean, you could say most code generation does look a little bit like compilation... Especially in this case, because...

**Mark Bates:** We're transpiling I think is probably the word you'd probably wanna use, isn't it? Because you can transpile to Go... Is that right?

**Thorsten Ball:** It's all compilers to me.

**Tim Raymond:** Yeah, it's compilers here, too.

**Thorsten Ball:** Yeah. I think the transpilation/compilation distinction doesn't hold up for longer than two minutes in any conversation.

**Mark Bates:** Well, like you said, everything eventually has to get compiled or transpiled down to a language the computer can understand. So Go eventually has to be transpiled down to that, or compiled... Yeah, I agree, I never understand which words to use.

**Thorsten Ball:** You kind of touched upon what I was getting at... You said it's just printing stuff, it's just formatting stuff. And I feel this is the same thing that Mat mentioned earlier about parsing, where you start out writing your custom thing, specific to your problem, and then once you know the general or more abstract pattern behind it, you can enhance that, and make it better, and make it work for more use cases.

I had the same experience with compilation, where you start out "Oh, wait, I just have to walk along these nodes and just print stuff?" And you go from there and then you realize, "Oh, instead of printing stuff immediately, I should probably turn it into another thing, another data structure that I can then reorder more easily. And then I can turn this into something else, and only then I will output strings." And then suddenly you have invented an intermediate language, and a proper compilation step, or something.

**Mark Bates:** Right. There are all sorts of stuff I came across working on this, as I'm working through the Go step of all this... It's things like, for example Lush (or Plush) can have unused variables and so can Monkey. And unused variables are fine, but they're not fine in Go. So how do you output that into some Go code without knowing that the variable is gonna be used later on?

**Thorsten Ball:** Nice, yeah.

**Mat Ryer:** Let me guess, you print the variable and then you immediately do \_= that variable?

**Mark Bates:** You're looking at this site, aren't you...?

**Mat Ryer:** No, no. Is that it really?

**Mark Bates:** I can see the reflection in your glasses. \[laughter\]

**Mat Ryer:** I hope not.

**Mark Bates:** \[47:41\] But that's exactly what we do, right? We declare the variable, and then immediately do underneath it \_=a. So you can't just say "Oh, I run it through Sprintf all the time", because as I said, there are these moments where if you just printed it out, sure, it's valid Go code for that one line, but not valid in a bigger context.

**Thorsten Ball:** Yeah. Do you do that for every variable you come across, or just--

**Mark Bates:** Outputting the Go code? Right now yeah, that's what I'm doing. Again, that part of it is not finished yet. It's gonna be the end goal, I think.

**Thorsten Ball:** Because I was gonna say, if you can detect which one is not unused, to output the \_= that... Then you're already there, right? \[laughs\]

**Mark Bates:** You're already there, exactly.

**Tim Raymond:** We almost could, if we had another intermediate layer.

**Mark Bates:** No...

**Thorsten Ball:** There you go. There you go. I called it.

**Tim Raymond:** You could do a little data flow analysis, and... Yeah.

**Mat Ryer:** Perfection is the enemy of progress, though.

**Thorsten Ball:** You know which book to read, Mark, right?

**Mark Bates:** Yeah, I've heard... I've heard good things.

**Thorsten Ball:** Nice.

**Tim Raymond:** This is the one problem of knowing that you can compile it; it's like "Oh, well we could have just another intermediate layer", and keep like "Oh, we could do more..."

**Mark Bates:** I thought you were gonna say it's one of the problems you're working with Mark.

**Tim Raymond:** Oh, yeah... \[laughter\]

**Mat Ryer:** It wouldn't even make the top 50... \[laughter\]

**Mark Bates:** Not even close. So far down the list...

**Break:** \[49:07\]

**Mat Ryer:** How exciting is it though, as you make progress through it, when suddenly it starts to seem like it's intelligent? As soon as you have something like recursion or something working, when you can suddenly start to see surprisingly clever behavior happen - that must be kind of thrilling to see that sort of progress. Do you know what I mean?

**Mark Bates:** Oh, it's amazing!

**Thorsten Ball:** Yeah, yeah. Speaking between us, it's super-exciting. \[laughs\]

**Mark Bates:** It really is, yeah. Mat, you know, I was working on Plush earlier this year, and when it first started working I was sending text messages all the time, going "Oh my god, look at this! I can't believe we have this! It has goroutines support!" Because it was so easy to add goroutines support to a scripting language.

**Mat Ryer:** That's amazing.

**Mark Bates:** Yeah, the whole script does a `sync.Wait()` it automatically adds it and manages it, and everything like that... But it was super-easy to do, especially with the PEG. It was just looking for that keyword, and then saying "If it's followed by a function, do something with it." The stuff you can do when you start learning parsers and PEGs blew my mind.

**Thorsten Ball:** For me that was when I had closures working. When you realize "Oh, it actually works..." It's a step-by-step approach to a solution. You start out with functions, then you're like "Oh, functions have values, so I can pass them around." And then you go "Oh, closures are functions that are passed around, but they carry the environment with them that they closed over", and once you have that working, you go "Nice."

Any Scheme or Lisp person will tell you "Once you have closures, you can built object orientation", or something. Then you can build constructive functions that return a closure, that wraps around some state, and returns other functions, and all of that stuff... And that's really cool. That's a lot of fun.

**Mat Ryer:** \[52:07\] That is cool... Because it sounds so hard.

**Thorsten Ball:** It's kind of beautiful in how little you need to bootstrap a system. On the side, I'm working on a Scheme compiler; a Scheme to x86 compiler. And it's not nearly finished... It's endless, basically, but it can do a lot of stuff already, and it's really nice to see that there's certain milestones you reach where you can leverage what you built before. So you put in a few built-ins or primitives - you know, equals, comparing stuff, type checks - and then you can build higher-level constructs that leverage these things... And now suddenly you have much more functionality available. And then you can use those higher-level constructs and build more of those.

**Mark Bates:** Yeah, exactly.

**Thorsten Ball:** And now I feel like I am kind of close, that if I put more work/time into it, you could make it so that it can bootstrap itself, compile itself.

**Mat Ryer:** Wow...

**Thorsten Ball:** And that is... \[laughter\]

**Mat Ryer:** Now we're talking. This is dangerous.

**Thorsten Ball:** Yeah, only this group of people would have a respect for it. "Oh, yes..."

**Mat Ryer:** Imagine if the Monkey language ends up being Skynet.

**Thorsten Ball:** That is literally all I dream about every night... \[laughter\]

**Mark Bates:** Going back to PEGs, because that's what I've been working with a lot recently, and you were talking about closures - I've found that because of the recursive parser build it's actually fairly easy to do this, and kind of pass around these contexts. For example, Lush supports var a, let a, and a:=, and they all mean different things. I don't think they necessarily mean that in the monkey language, but certainly in Lush they do. So it lets you write over an existing variable, or declare it as a new one, in that scope. Var declares a new variable, but if one exists already, it errors. And then a:= is the same thing you'd expect it to do as in Go.

But carrying the information around with those, and checking to see whether it's currently in scope or out of scope, becomes so much easier, and it doesn't involve a whole lot of effort to start typing those sorts of things in.

**Mat Ryer:** How did you decide about that feature then? That particular -- the two flavors of having var and let.

**Mark Bates:** Well, let was there to let people move from Plush to Lush.

**Mat Ryer:** Right. So it's backwards compatibility.

**Mark Bates:** Yeah, it supports both things like let, it also supports the Monkey style four - which is like four parenthesis or brackets depending on which country you're in - variable in whatever... It supports that, but it also supports range statements, just like in Go. So Lush is moving more towards looking like an interpreted, dynamic Go, versus what Monkey necessarily was originally. But I wanted to make sure I could support all of those Plush templates as they get moved forward.

So yeah, understanding what those were, obviously `a:=` and `var` stole from the standard library. But the `let` was a much more difficult decision, and I had to kind of look around and see what other people use for something like a `let`. I went with I can overwrite or set. That's what `let` would let you do. Because `var` doesn't let you do that, nor does `:=`.

**Thorsten Ball:** Yeah, yeah.

**Mark Bates:** So that's how I ended up with "That's what let would let you do." And it fit best with what Plush or Monkey would do, which is it pretty much lets you do anything.

**Thorsten Ball:** Yeah. And it's funny how seemingly tiny decisions such as these have wide-reaching consequences... And then you suddenly feel how much pressure language designers are under when somebody opens a ticket and says "Why can't you add this?", or something. And you go "But if I add this, that would mean that you could also do this."

\[56:11\] And I'm sure people well-versed in the theory of this can come up with a formal thing and say "If we add this, it actually has these ramifications", but when you think it through manually, it's really enlightening to see it... Like, "Okay, if I add the ability to define two functions that call each other recursively, then I can suddenly implement all of this, and all of that." Or delayed binding; you can call a function in your function, that hasn't been declared before, which is what this two functions calling each other recursively is about - then you can do loops, basically, in another function, or return a function that blah-blah-blah. It's crazy.

**Mat Ryer:** It's also interesting, because we think about that - the conversations we have in the community about generics, and stuff... And a lot of people just think of it as whether they want that feature or not, not really "What does it mean to implement that feature? What are the ramifications of that?"

**Mark Bates:** Templating is one of those places where I'd love to have generics... It's one of the few places where I really need it. And again, if you look at Plush, it's got this giant switch statement for how to handle the output, which I just did not like at all.

**Mat Ryer:** Like a type switch, is it...?

**Mark Bates:** Yeah, basically. "Well, if it's a fmt Stringer, do this. If it's HTML, do this. If it's a slice, do this." Just all of those...

**Tim Raymond:** If you place these two where we have to deal with like empty interface, and then a slice of empty interfaces \[unintelligible 00:57:54.21\]

**Mark Bates:** Whenever you're dealing with parsers - Thorsten will tell you, it's basically all empty interfaces. \[laughs\]

**Thorsten Ball:** Yeah...

**Tim Raymond:** It's a real drag.

**Mat Ryer:** But would generics help with the parsers then? Would you be able to have it strongly typed?

**Mark Bates:** I don't know... I don't know.

**Tim Raymond:** Yeah, I'm not sure. Possibly. I don't know.

**Mat Ryer:** Hm.

**Thorsten Ball:** It would make, I would say, the type definitions of your AST smaller; you need less boilerplate. Because then you can just say "Here's an AST expression where the value is an integer. Here's an AST expression where the value is a string", or something. But I don't know if it would make the parser itself smaller. Certain other language constructs like pattern matching, for example, or destructuring - that would make the code really concise, but in the end it all is if and else... \[laughs\]

**Mark Bates:** Everything is just a giant if-else statement at the end of the day, isn't it?

**Thorsten Ball:** Yeah, yeah. It's all in Go 2, right? At the end of the day... \[laughter\]

**Mark Bates:** It will be in Go 2, it will be fun.

**Thorsten Ball:** What you said, Mat, about generics - that's actually the thing that I thought of... That I sometimes feel people underestimate the consequences of adding a feature such as this. Yeah, you can use it to only implement map, or reduce or fold, whatever, with generics... But what will this enable in the future? Which patterns will emerge? How will people use the language? What does it mean for all of the stuff that was already there? Will the stuff in the standard library become obsolete, because people won't use it anymore, because they can build their own stuff? How do you maintain that then?

All of that stuff is not an easy addition. I don't wanna get too political on this really sensitive topic, but I kind of like how--

**Mark Bates:** Everybody have their Tweet button ready.

**Thorsten Ball:** \[laughs\] ...how the Go team considers these trade-offs.

**Mat Ryer:** \[01:00:10.07\] Yes, I think so. They do talk about it as well. They talk about the cost really of implementing these features. I think a lot of us don't really do that with our own projects. It's common for companies and for teams to just think their job is just adding features, and there are consequences to everything you add into that. But I think if someone's been through your book, that would give them that kind of appreciation really for when it comes to things in the Go language, too.

**Thorsten Ball:** Yeah. Also, I feel in your daily work most of us don't work on the parts of a system that are used by other parts. You often add stuff to a system; you don't necessarily work, like Mark, on a framework, or the underlying thing. But once you do, once you build those primitives which are used by other parts of the system, you start to feel that any change you make to these primitives has a force multiplier attached.

A templating language, for example - you have a bunch of built-in functions, for example, or functionality that comes with it; if you change just a tiny bit of it, you will see the changes amplified. But if you add features to a system and use primitives, you can easily do that... Which is the beauty of a well-designed system - adding stuff does not have a lot of consequences for the rest of the system. But once you change the underlying layer, there's the consequences.

**Mat Ryer:** Yes. I think we do kind of build almost primitive whenever we build an abstraction, which is something that we all love doing. It's a programmer's best day, when you implement something and think "Oh, I could do this in a slightly abstract way, and unlock all this possibility", and it's such a great feeling. I think we're kind of hooked on that... And then when the second time comes along, it doesn't quite fit, but it's close enough; we'll just add a couple of little tweaks, a little bit of configuration, don't worry about it. And then the third time - that doesn't really belong there either, and you end up with Frankenstein abstractions, and stuff like that. So yeah, that sort of thinking applies not just if you're writing parsers, I think it applies across the board.

**Thorsten Ball:** And also the second-best day - deleting code, right?

**Mark Bates:** Oh, I love deleting code.

**Thorsten Ball:** Maybe the other way around. I like deleting code more than abstractions.

**Mark Bates:** I love deleting code...

**Tim Raymond:** One thing I've found writing parsers too is that sometimes they enable you to delete code.

**Thorsten Ball:** Yes!

**Tim Raymond:** The first parser that I wrote was actually a formalized version of an ad-hoc, informally-specified language that was parsed with regexes, and it was actually a templating language as well...

**Mark Bates:** He's talking about one I wrote...

**Tim Raymond:** Um, maybe... Maybe...

**Thorsten Ball:** I was gonna say, it sounds like "That's in every codebase around the world."

**Mark Bates:** Yeah, he's talking about something I wrote years ago. You're talking about Bry.

**Tim Raymond:** Yeah, I'm talking about Bry. \[laughter\]

**Thorsten Ball:** Awkward...

**Mark Bates:** It's okay, you can talk about my past mistakes. I certainly do. I'll talk about yours... \[laughter\] Don't forget, it's Tim's birthday.

**Tim Raymond:** So as time went on, more features got added to it. The grammar of it changed slightly between different parts of this templating language... And so by writing a more formalized grammar of it, I could parse all of these things and then do almost something similar to gofmt, where I actually removed a whole bunch of things. And then I could just start deleting code from the official parser, because none of those rules would ever match, ever again.

**Mark Bates:** Yeah.

**Thorsten Ball:** Yes.

**Tim Raymond:** \[01:04:03.24\] But I also had complete control over not only the parser, the language, I also had control over all of its usage... In contrast to most programming languages, where you don't know how people might go to use it, if you do have control over every usage of it, you can have a great ability to change things.

**Mark Bates:** When you talk about formatting - you're the one who actually even said it to me, that if I use the PEG and I lay things out in a certain way, then fmt-ing just falls out of it... And it kind of falls out of it automatically. So there's a Lush fmt tool, that will fmt your Lush scripts. And it's super-easy, because you've got this nice node, you've got this nice parser, these types know what they're supposed to look like... And just like what Go does, it allows you to just kind of print back a much nicer, formalized version of the thing you've already parsed. You can clean up code, you can delete code, like you were saying... It's really, really nice, fun stuff to work with.

**Mat Ryer:** Thorsten, if our dear listeners wanted a copy of one of your books, where should they get it from?

**Thorsten Ball:** Yeah, InterpreterBook.com and CompilerBook.com. Or if you want the paperback version, Amazon.

**Mat Ryer:** Right.

**Mark Bates:** And what's the address for Amazon? Is it a website, or...?

**Thorsten Ball:** It's http://

**Mark Bates:** Okay, hang on. Taking notes. Slow down, slow down...

**Mat Ryer:** So it's not secure. It's not secure, Thorsten.

**Mark Bates:** Are they forward, are they backward? Does everybody say backward and they're forward, or vice versa? I'm confused. Okay, let's take this offline...

**Thorsten Ball:** Maybe we can put it in the show notes...

**Mark Bates:** There you go, link it in the show notes. Amazon.com, in the show notes.

**Thorsten Ball:** Yeah, Amazon.com. Online shop. Also .co.uk.

**Mark Bates:** Oh, they've got one there, too? They're expanding.

**Thorsten Ball:** Yeah, they're worldwide.

**Mark Bates:** Good for them. Good for them. I love to hear a startup success story. That's fantastic.

**Thorsten Ball:** Yeah. They're in France, Italy, Germany... All over the place by now.

**Mark Bates:** All over the place. Fantastic.

**Mat Ryer:** Is it just in English though?

**Mark Bates:** The book, or Amazon?

**Thorsten Ball:** No, it's just English, yeah.

**Mat Ryer:** Okay.

**Thorsten Ball:** I wouldn't dare to translate it to German. Honestly, when I talk about programming in German, it's 75% English words anyway, so...

**Mat Ryer:** Right. They're American English words, by the way. U.S. English is the language of computing.

**Thorsten Ball:** I was careful to not settle on one or the other... So I try to switch it up. I honestly forget while writing what I used, the British or the American... And I knew that I was gonna rile people up, but I was happy to do it.

**Mark Bates:** You're just a regular old radical, sort of thing...

**Thorsten Ball:** Yeah. \[laughter\]

**Mark Bates:** You are a punk rocker, if there ever was one. \[laughter\]

**Thorsten Ball:** Yeah.

**Mark Bates:** Sometimes I put a u in color, sometimes I don't.

**Thorsten Ball:** Sometimes I use the Oxford comma, sometimes I just use no comma at all. \[laughter\]

**Mat Ryer:** Which for a book on interpreting and parsing text - it's actually quite ironic.

**Thorsten Ball:** Yeah. But it's also a nice exercise for the reader, right?

**Mat Ryer:** Yeah.

**Mark Bates:** Couldn't you run Monkey fmt on the book, and...? \[laughter\]

**Thorsten Ball:** Actually, you don't wanna know what my tool chain is. It's crazy.

**Mat Ryer:** Well, on that bombshell, where Mark Bates has legitimately just said "Monkey fmt", that is the end of the show, I'm afraid. \[laughter\] Thorsten, Tim, Mark, thank you very much. It's been excellent. In the next show we're gonna have Francesc Campoy, who's gonna join us to talk about graph databases. That's gonna be interesting, isn't it...? So join us then. We'll see you then. Thank you.
