**Jerod Santo:** Alright, I'm here with Leslie Lamport, a distinguished scientist at Microsoft Research, creator of LaTeX; not the

rubbery substance, but the documentation system that you've probably heard of or used. It's used in Academia, it's used in scientific circles, math circles... And a Turing Award winner. Leslie, thanks so much for coming on the show.

**Leslie Lamport:** Thank you. You might want to try that again and pronounce it either LayTech or LaTec.

**Jerod Santo:** Ah, I was reading about this controversy, the pronunciation controversy. So as a layman, I see L-A-T-E-X and I do think of that rubbery substance. But the initial author -- it was Tech, right? It was supposed to be T-E-C-H was the sound... And your take on that is LaTech. That's how I should say it?

**Leslie Lamport:** Or LayTech. Either one.

**Jerod Santo:** Alright. Now, where do we get Tech out of Tex? That's the curious bit.

**Leslie Lamport:** Oh, that's because LaTeX is built on top of Don Knuth's tech typesetting program.

**Jerod Santo:** Okay. And Knuth called it Tech, even though it was Tex, is that right?

**Leslie Lamport:** Yeah. He says it's the Greek pronunciation of the original word. Not speaking Greek, I wouldn't know.

**Jerod Santo:** Ah... Well, you seem to have some Greek influence, though. Paxos... A lot on Greek mythology going on. Is that an interest of yours?

**Leslie Lamport:** No. It was just -- well, for the Paxos paper it was just something that seemed a good idea at the time. Before I get away from that, I should say that Knuth did all the heavy lifting in building Tex. That was a real remarkable thing that he did. What I did was, in comparison, quite simple... Just building a macro package on top of it.

**Jerod Santo:** I see. So Knuth did all the heavylifting... However, in terms of the tooling, it's still used, it's still prominent. Is it still the majority tool that is used in those communities for specifications and writing? Or is there something that's usurped it since?

**Leslie Lamport:** No, but I think it's still math and physics... At least it's still the standard -- I don't know about other fields; some fields, it is. Some fields -- I'm sure chemists have never heard of it.

**Jerod Santo:** Right. Well, as a working software developer, I've definitely heard of it. I don't know it well enough to pronounce it correctly, as you can tell... But I hear it talked about often. Some people love it, other people use it in anger, but everyone seems to use it. It still seems to be the best. And to me, what speaks to me about it is the separation of what you're saying versus how it looks. That's a key aspect, right?

**Leslie Lamport:** Oh yeah, that was why Tex needed something on top of it.

**Jerod Santo:** Okay.

**Leslie Lamport:** You know, Knuth intended for things to be built on top of it, but I'm not sure he expected so much of the underlying tech to be hidden from the user. By the way, I should say that the whole idea of basically separating the ideas from the typesetting - that was done by Brian Reid in his scribe system. When I started, I used Scribe, and it seemed perfectly obvious to me that was the thing to do.

\[08:08\] One of my failings in my career is building on things that seem natural, some seem obvious to me, and without realizing that they were new ideas, and that they were significant ideas. I think a prime example of that is in my Time, Clocks paper, where it was inspired by a paper that I read from Paul Johnson and Robert Thomas, where they had an algorithm for something, and I realized that their algorithm wasn't quite the right one, because it basically violated causality. We could have something that calls something else, but things were ordered as if they happened in the opposite direction.

So one of the two significant contributions of that paper was pointing out what this notion of causality - which again, seemed very straight, very obvious to me... But what they had done - they had used timestamps, they added timestamps to the messages. And I just assumed that that was a well known idea, that people did that, and sort of not even worth mentioning... But as it turns out, I think they were actually the first people who did that, because their paper is not very well known, and mine was. People have credited me with inventing/adding timestamps to messages.

**Jerod Santo:** Ah... So a couple of themes here, the first one being is you building on the work of other people who have come before, and maybe getting in some sense some of the credit on accident. Deflecting, as I can tell... But also, this idea of your ideas, which you've put into papers, and have been read now, and implemented around the world, seeming obvious to you, but not necessarily to the rest of us, right? Do you find it hard to explain your ideas to people, or to bring them along with you?

**Leslie Lamport:** Yeah. Because I just expect more of them than it's reasonable to expect of most people. Fortunately, I've had some really smart colleagues who were smarter than me, in fact... And I think if I've been more successful than them, I think it's because of my different way of looking at things, not by being brighter than them. So I'm not a genius; I'm not in the league with people like Einstein, or Feynman, or I could name any number of people.

**Jerod Santo:** If we were to focus in on the looking at things differently than other people... Can you describe that, what your angle is, or how you see the world that's eschew, or that's tangential to maybe the way your colleagues were looking at things? What's that different perspective?

**Leslie Lamport:** Well, it's very simple actually to explain why I'm different from most computer people - it's because I think like a mathematician, and I approach things mathematically, not computationally.

**Jerod Santo:** Can you give a for instance, like maybe in a basic case of a situation where maybe me as a programmer would approach something imperatively, or computationally, step by step, whatever it is, and you as a mathematician, maybe you would look at it differently? Because I can't look at it your way; I want to. And so how do you look at things -- when you say "I think about it in math", to me, I'm just like "You're gonna add numbers together?" What do you mean exactly?

**Leslie Lamport:** \[11:59\] Yeah, it's funny, I don't have a ready example, except something that happened fairly recently with a colleague. He asked me how would I define something. And he said he found it really hard to write this definition. And it was defining some property of sequences; of actually infinite sequences. And it seemed really easy to me, so I wrote the definition. And what blew his mind was that it was like a recursive definition just like he was trying to do, that is you define it for one, and then N=1, so what we get for N=1, define it for N=n+1. But the value that you've assigned to a given N, the value assigned to the N+1 depends on the complete rest of the sequences, infinitely far past N+1. And that's perfectly obvious to a mathematician. But because he's what I call trapped inside the box of computational thinking, that never occurred to him, because you can't compute something by looking infinitely far ahead to find the next value.

**Jerod Santo:** Right. That's where I'm sitting right now.

**Leslie Lamport:** But he wasn't trying to compute it, he was trying to write a definition.

**Jerod Santo:** A definition of the problem, or of a solution?

**Leslie Lamport:** No, just the definition of some property of infinite sequences that he wanted to define.

**Jerod Santo:** I see.

**Leslie Lamport:** He was a theoretician. This is theoretical computer science, in some sense. It's talking about a few properties of programs, rather than how to write programs. So you represent the execution of a sequence as an infinite sequence of either states or steps, depending on how you want to do it... And then you can talk about programs scientifically by talking about those sequences mathematically.

**Jerod Santo:** Gotcha. So this kind of is a pattern, or at least echoes what we talked about earlier with Knuth's Tex, and subsequently LaTeX was the separation of concerns. In that case, it's from the ideas, and then the display of the ideas, of the typesetting. You're talking about separation of concerns. You're talking about specifying the ideas as separate from the implementation. When you say "programming", I know in the \[unintelligible 00:14:30.08\] video, which we'll link up in the show notes as well, that featured you, you made a distinction between coding and programming. This idea that, okay, there's the idea that you're trying to express... Because what good is a program if it doesn't do something, or express something, or change the world somehow, or provide some sort of value? So you have the idea, and then you have the implementation. And many of us - and I hold myself in this category - they're kind of munged together, and kind of like grow out of the same milieu. But the way you look at it, the idea, the program is a separate thing altogether from the implementation. Is that correct? Am I thinking about it the way that you think about it?

**Leslie Lamport:** Well, yes, exactly. I mean, I wouldn't say it's separate --

**Jerod Santo:** Well, one informs the other.

**Leslie Lamport:** Well, the thing I like to say is coding is to programming what typing is to writing. I mean, obviously, it's somewhat hyperbolic, because there's a lot more intellectual effort goes into coding than typing... But I think, actually, maybe before the days of computers the analogy would be writing, and typography. Typography is an art. A lot of effort goes into designing a book. But that's completely separate from the writing of the book, the ideas and that what the book is trying to express. But it's not completely separate, because good typography will reinforce the ideas. So in the coding, programming aspect of it, you can think about what the program is going to do without an understanding of whether you can code it or not, or how you can code it. So the designer of the program has to understand what you can do with code.

\[16:30\] Actually, there are two things that you should do before you start writing code. The first one is figure out, decide what the program is supposed to do. And again, you can think of that in terms of what you have to tell the user of the program, what the program is supposed to do. Now, that program very often is code to be used by somebody else in his program, or her program... And I have a very simple criterion for whether you've done this properly, is that you should write this description of what the program is supposed to do in such a way that someone can use it without having to look at the code. Then the idea that I can be able to give you something that's a bunch of code, and you should be able to use it without having to look at the code is foreign to programmers. It's completely obvious to me, and I think it's completely obvious to a lot of software engineers, but it doesn't seem to be obvious to programmers, because they're not programmers, they're coders. And if all you think you're doing is writing code - well, of course, somebody has to read your code to understand what the code does. But that's at the heart of so much of what's wrong with software being built today.

**Jerod Santo:** So you're referring to like a formal specification.

**Leslie Lamport:** It doesn't have to be formal.

**Jerod Santo:** Well, it has to be usable without the code. You can do that informally?

**Leslie Lamport:** Well, by formally I mean writing it down in mathematics, or in a language like TLA+.

**Jerod Santo:** That would be formal in my mind, yeah.

**Leslie Lamport:** I mean, I do this whenever I -- if I have a coding class, and some method in this class, I will write a description of what that method does. And in 95% of the cases, it's just English;, just pure prose.

**Jerod Santo:** Right. Right.

**Leslie Lamport:** Maybe a formula or two tossed in. Occasionally, pseudocode. Usually not, but sometimes perhaps pseudocode.

**Jerod Santo:** Sure.

**Leslie Lamport:** Whatever works. But it has to be precise enough that somebody can use the code without having to read it. And if what it does is simple enough, that you can explain it in English, that's great. Occasionally, there's a piece of code that -- but you have to start writing it. And when you write it, you should be able to see whether what you write -- you know, as you write it, you'll know whether what you're writing is making sense. If you want to understand something, you've got to write it.

There's this cartoonist \[unintelligible 00:19:14.18\] has this wonderful caption of a cartoon, which is "Writing is nature's way of showing you how fussy your thinking is."

**Jerod Santo:** I like that.

**Leslie Lamport:** I had this one example, this one certain aspect of actually writing a parser for TLA+ that somebody was doing, and he sort of asked "How you compute this little condition of some check of correctness of the specification?" And I thought, "Oh, well, this is quite simple. I would write down a piece of - as usual, informal English, a little math..." And the more I started writing, the more tricky I realized it was. And I decided that I needed to write a TLA+ specification of it. Fortunately, the person who was doing the compiler knew TLA+, so I didn't have to explain the TLA+ to him.

\[20:10\] And he coded it from the TLA+. And I actually sort of asked him about that... You know, TLA+ is a lot different from Java, what he was coding it in. How much effort was that? And he said, "Oh, no, it's really straightforward." And actually, at some point later I modified the parser, and looked at the code, how to modify that, the code. And it was clear, it was just completely obvious; you could look at this TLA+ specification and the relation to the code was completely obvious. It made it very easy to modify the code.

Then the wonderful thing about that code is about once or twice a year for the next several years after he built that parser, I thought "Oh my God, here's a special case of this. Oh, I bet the parser doesn't get it right." And every time I checked it, the parser did the right thing. That stuff really works.

**Jerod Santo:** Okay. So this process that you're describing - I guess it kind of matters if we're talking about it in the small, like at a function level, or down in the details, versus like large systems thinking. And we can discuss that. But it's certainly countercultural to the way that software, generally speaking, is developed in the world today. I mean, we have agile methodologies, we have "Move fast and break things", we have "The only constant is change", "Head West, young man..." I mean, there's lots of "Let's get coding." "Coding is thinking..." A lot of these axioms that describe how we go about building software in many cases today are exactly the opposite of what you're describing. We don't say you can't think about it, but we say kind of you think as you go; you figure things out -- the only thing we know now is that we're going to know more later. We know the least right now. Specs change, requirements change, the world changes... And so it is quite a different way.

**Leslie Lamport:** Well, yeah. First of all, you're right, the world changes. If you build a program, and it's really used a lot, you're going to want to modify it at some point. And the real world is, you're not going to go back and start from scratch and redo everything. You're going to start patching it. And we've seen that happen, and as it goes on, that program gets harder and harder to deal with, harder and harder to modify... And eventually, either the code is going to be thrown away, or it's going to be rewritten from scratch. Entropy \[unintelligible 00:22:47.26\]

So you start patching things, it gets sloppy. But if you don't do this design right from the beginning, then every piece of the code you write is a patch. And you start out from day one with a mess. I love this quote of Eisenhower, who said, "No battle was ever won according to plan, but no battle was ever won without one."

**Jerod Santo:** I like that. Okay, that's compelling. You start off with a mess; every line of code you write as a patch. I think there's wisdom in there.

**Leslie Lamport:** We might want to go back to what you said about you in the small versus in the large.

**Jerod Santo:** Yeah, let's do that.

**Leslie Lamport:** The only difference in the small versus the large is that in some sense the bigger something is, the more formal you have to be, because it's going to be more complicated. So a lot of the users today are -- you know, people in Azure, basically the web services of Microsoft, and Amazon Web Services, that's also a big user... They understand how hard it is to get something right because it's big, and also because it involves concurrency; once you're dealing with something bigger, it involves concurrency, and that adds a whole enormous complexity to things. But it also works at the small level. But the people who write the small pieces, they don't understand that yet. The people who write the web services understand it.

\[24:23\] My colleague, Markus Kuppe, the one who is currently basically maintaining the TLA+ tools, he has this wonderful talk which is titled "How to save two hours of TLA with two weeks of debugging."

**Jerod Santo:** \[laughs\]

**Leslie Lamport:** People will just say, "Oh, using this formal stuff is just so hard. It's just so much work."

**Jerod Santo:** Right...

**Leslie Lamport:** "I don't need to do that." And it's not a good attitude, especially if you're dealing with concurrency. When there's concurrency involved, you just can't fly by the seat of your pants. You're not gonna get it right.

**Jerod Santo:** I guess one of the perhaps tragic, sad but true things is that oftentimes, based on this description, we don't know if we need these tools. We don't know if we need this upfront design, the formalized spec, the maths stuff, until we're already feeling the pain down the road. Like, maybe it's two weeks, or maybe it took half my career to realize where the source of all these bugs are. Because I think as industry, as pragmatic workers, bugs are just part of the game. I mean, we've kind of resigned ourselves to the fact that our programs are going to be wrong, haven't we? But with your tools, it sounds like you can actually prove that they're going to be right before you start to write.

**Leslie Lamport:** Well, there are two kinds of specifications you write. One is what the program is supposed to do. That's not telling you anything about coding it. Then the other spec is how the program does it, which is a high-level view of how the code works. Now, the way I like to think about it is a high-level specification - think of it as an algorithm, and think of the code as an implementation of that algorithm. Then the only difference is that you think things as algorithms because you read them in algorithms books, because they're algorithms that are useful for lots of things. But you're writing an algorithm that's just good for that particular problem you're solving. But getting the algorithm right doesn't imply that you're not going to make coding bugs. But if the algorithm is wrong, no matter how good your code is --

**Jerod Santo:** \[laughs\] It doesn't matter.

**Leslie Lamport:** ...the algorithm will be wrong. So it's eliminating one class of bugs. But it's a class of bugs, and especially with concurrency, that testing is very poor at finding, because the bug can occur just in terms of how really the speeds at which things are happening. And so you can have some system that you've tested the hell out of, and it's been running great for five years, and then you do something that changes some piece of hardware, that makes it run at a different speed than some other piece of hardware, and a bug will appear. But also, there are a lot of debugging tools for finding bugs in code. They're not good at finding bugs in algorithms. So it's not that I'm saying "Oh, coding is no problem. There are not going to be bugs." I'm saying, "Get the algorithm right before you code it." And for that, there are tools that are just as formal as code, and ways of testing it that are just as good as those tools that work at you finding bugs in code.

**Jerod Santo:** Right. It kind of goes back to that quote about a battle - you have your plan, and then you have the execution of the plan. And so your plan is your algorithm; there's your thing that you're going to make sure you have right in the first place. And just because you've got the plan right doesn't mean you're going to execute it right. You can still make mistakes later. But if the plan is wrong from the get-go - well, the entire endeavor is a waste.

**Leslie Lamport:** \[28:17\] Yeah. And when you do in testing find that it's wrong, it's a hell of a lot more work to fix it than it would have been had you found it when you were writing the algorithm.

**Jerod Santo:** Yeah. The sooner, the faster you can find those problems, the cheaper they are to route around. So this whole thinking in algorithms - this is something you say is very few programmers think in terms of algorithms. And I think you're right about that. But my question to you, for me, is how would one begin to change this predilection? How would you take me and help me start thinking in algorithms before I'm thinking and programs?

**Leslie Lamport:** Well, what I do for engineers is I force them to think mathematically. I'm not the only person who talks about things, about the need for specifications. But just about everybody else wants to make writing the specifications easy for the programmers. So he writes their specifications in what looks like a programming language. And I'm very hard-nosed on this.

**Jerod Santo:** You don't wanna do that.

**Leslie Lamport:** I want to get people to think outside the box. People say that all the time, but they never say what the box is.

**Jerod Santo:** \[laughs\] What is the box?

**Leslie Lamport:** But here, I can tell you exactly what the box is. The box is thinking programmatically, as expressed in what I'm now calling coding languages, instead of thinking outside of that box. And the way to think outside of that box is to think mathematically. So a TLA+ spec is a formula, a real mathematical formula. It may be hundreds or even thousands of lines long, but it's a formula. And you say something to the people -- "Oh, a 1,000-line formula? How could I possibly understand that?" But you give them a 1,000-line program, "Oh, that's trivial." Well, the math that's being used is simpler than programming languages. If people give semantics to a programming language, they translated it to math. And that math is pretty complicated. But the language TLA+ is really simple, in the sense that it is math, and math is really simple. But math is incredibly powerful. And you have to think outside the box, you have to really learn to use that power.

**Jerod Santo:** Some of the challenge in this -- so I'm with you, I'm following you, and I agree with what you're saying. Some of the challenge is as programmers who are trained up here in the United States as I was, and go into the industry and begin our work, math is part of it, but it's not like a main part of it. It's like, it's there, you take calculus etc. but we don't have a lot of math. I don't have a lot of math, and I've been a working developer for 20+ years, and I don't have that much math.

**Leslie Lamport:** Yeah. And also, the math that you learned hasn't been taught very well.

**Jerod Santo:** Well, a lot of the stuff I learned wasn't taught very well... \[laughs\] But that depends on your school, I guess.

**Leslie Lamport:** No, simply because you've learned about sets and functions, right? Everything I write in the spec, these sets and functions, plus arithmetic - I presume you do pretty well with arithmetic.

**Jerod Santo:** I've got that part down, yeah.

**Leslie Lamport:** You've learned what some functions were, but you haven't learned how you would use them to describe what your program is supposed to do. And that's the part that you have to learn. That's the part that you're forced to learn when you start writing in TLA+. Now, I do what I can to educate, but as I've said, I'm not that good as a teacher. So I have set up a video course on TLA+, and some people like it. I don't know, I probably only hear from the people who like it... But one way you learn is by just reading other people's specs.

**Jerod Santo:** \[32:23\] Is there open source TLA+ specs out there that people can read?

**Leslie Lamport:** Oh, yeah, go to the TLA+ website. There's a GitHub repository with a few dozen specs there. One of the things I hope to do before I retire is, after my current project, which is writing a book - but after I finish that, I hope to start organizing a set of examples that will help people learn. Whether I will do that, again, whether I'll finish the book - those are unknown questions. And as I like to say, I'm no better at predicting the future than anyone else, even if it's my future.

**Jerod Santo:** \[laughs\] Well, if I might ask you to predict the future a little bit... I just noticed, I mean, you've been in industry, you've been at Microsoft Research, of course... So in the academic circles, in the industry circles for many, many years. We've had recent shows, we spoke with Kelsey Hightower. He just retired from Google at 42. It doesn't mean he's retired from anything, but he's just retired from Google at 42. Steve Yagge just unretired at 54. So he retired at 52, unretired, went back into the workforce... And you're at 82. You've had a long, illustrious career... I mean, lots of productive work. Do you have plans on hanging it up? Are you going to work until your time on Earth is ended? What are your thoughts on that? Because you have a book in the works... Do you want to do something after that? That's a lot of work.

**Leslie Lamport:** No, it's not going to be too long. Not many years.

**Jerod Santo:** Okay.

**Leslie Lamport:** I'm not ready to announce a retirement date, but it's not going to be too far off.

**Break**: \[34:06\]

**Jerod Santo:** What's changed? When you first got into the game, what's changed and what's stayed the same? You've been in the industry a long time... Certain things change; as the song goes, the more they change, the more they stay the same. What's different today, 2023, versus when you were first in computer science? And then what's still the same, or at least echoes?

**Leslie Lamport:** Well, the big change since I started - and I started programming in 1957 - is that now nobody can understand programs.

**Jerod Santo:** \[laughs\]

**Leslie Lamport:** I mean, you just have to build things on top of stuff that you don't understand. Things have just gotten so complicated, because - as I like to say, things have advanced by evolution, and not by intelligent design.

**Jerod Santo:** Ah. \[laughs\]

**Leslie Lamport:** And that works great if you've got a million years to do your designing. But when you're doing it over a matter of decades, it doesn't work too well.

**Jerod Santo:** It's certainly been compressed, I agree with that.

**Leslie Lamport:** I'm sort of amazed that there hasn't been --

**Jerod Santo:** An extinction-level event?

**Leslie Lamport:** Yeah, some meltdown. I mean, a really serious one. I suppose there -- well, I guess you sort of see some of them...

You read about the state of California, it was -- I forget what it was, whether it was for their motor vehicles, armored motor vehicles, or something... A 100 million dollar project that just failed, that was just abandoned after a few years. So what happens on that scale?

**Jerod Santo:** On the other side of the coin, we have young people today who can pick up a computer and a programming language like JavaScript, or like Swift if you're talking on iOS, and in a matter of days or weeks they can go from never having written any software, to deploying a game, or an idea of theirs into the world. And that's kind of cool. I mean, I agree with you, every layer of the stack has made it more complicated and more fraught, and we understand less and less... But you can do a lot with a little today, even though you're actually standing on a lot and that is shaky ground. But you can get a lot finished.

**Leslie Lamport:** Yeah. Well, I mean, coding languages have improved a lot since I've started - not difficult - in machine language...

**Jerod Santo:** \[laughs\]

**Leslie Lamport:** But yeah, there's a lot of good things in programming languages.

**Jerod Santo:** But TLA+, that's the main thing that you're here to talk about, the main thing you want to pass on to our listeners...

**Leslie Lamport:** Well, I would say not TLA+, I would say thinking outside the box of code. TLA+ is one way of doing it. It has its domain of applicability. The place where it shines is when you're faced with problems of concurrency. But that's not the only way of thinking above the level of code.

**Jerod Santo:** Well, at the top I mentioned this Turing Award which you won in 2013 for your work with distributed systems... I want to ask you about the bakery algorithm; that seems to be both your favorite, and probably the one that you can explain to our listeners without multiple hours... I'm not going to ask you to go through the Paxos paper, for instance... But when it comes to distributed systems, I've been thinking about this a little bit, and I'm wondering what your take is on the thought of when a system becomes distributed. Like, if you were to draw a line in a system going from like a very simple processor to all the way up to like the World Wide Web, somewhere in there it got distributed. And I'm curious what you think that threshold is of when a system becomes a distributed system.

**Leslie Lamport:** I think I would probably say that distribution is the mind of the beholder.

**Jerod Santo:** \[laughs\] Okay... How so?

**Leslie Lamport:** Well, this laptop that I have in front of me - I view it as just a single thing, system.

**Jerod Santo:** Yeah, it's all right there.

**Leslie Lamport:** \[41:55\] But to the hardware designer, this is a distributed system. You have all these chips talking to one another, and even inside the processor chip -- I mean, that processor chip might have been designed with somebody who was using TLA+. People at Intel used to use TLA+ in designing their chips... And I don't know if they still do. But in particular, the memory of the chip is a distributed system. I mean, it really is messages going back from one part of the chip to another part of the chip. And there's the two levels of caches, and the main memory, and that's a distributed system...

The distinction I make is between the traditional programs and concurrent ones. Traditional programs, you have one process specifically that's just doing the computing of the answer and stops. And in a concurrent system, you've got multiple independent processors acting, and they're not supposed to stop, they're just supposed to keep doing something. And so how you describe what they're supposed to do is very different from how you can describe what a traditional program that just takes some input and computes an answer does. That's very simple, you can just describe that as a function. But I spent a lot of time thinking about how you describe what a concurrent system is supposed to do. And that's built into TLA+. I mean, not built into it, but in the sense that there's no language for distribution; there is nothing distributed about it. You look at the -- it's just math. But the math was designed in such a way to make it possible and make it easy, or as easy as possible to say what a concurrent system is supposed to do, and at a high level what it does.

**Jerod Santo:** Yeah. An apt metaphor for concurrency might be the idea of movies. So you have a movie that has a series of events; it starts, things happen, 24 frames per second, however many seconds, and then it ends. And that's usually pretty normal, unless of course you're Quentin Tarantino, and now we're gonna go out to order, and all that kind of stuff. But that's pretty simple to think about. But then you have like --

**Leslie Lamport:** Actually, that's beautiful. That's an example I love, because that's the way to describe systems. Basically, think of them as a movie. And what distinguishes a digital system from an automobile is that you can't think of an automobile as operating in distinct steps; it's going continuously from one place to another.

**Jerod Santo:** Right.

**Leslie Lamport:** But you can think of a program or a distributed system, or the internet, as proceeding in discrete steps. And the way physics, science describes cars, or the universe, is in terms of its state. And that's the same way I describe a distributed system, in terms of its state. You can think of the state of a program as the value of its variables, but there's also a lot else in its state that you don't usually think of as part of the state, but is really there. And so you just think of that as a movie.

But the other important thing, and the thing that a lot of people didn't use to do; I don't know what they're doing now, I've stopped paying attention to what theoreticians, or people who are designing specification languages are doing... But they would think of the movie as a movie of this particular device. And then they have to worry about "Well, how do you put these movies together?" But what I say is no, this is a movie of the entire universe. And you describe -- you know, the system behaving correctly is a property of just one particular part of that universe.

\[45:59\] And there's one thing about - this a technical point, but it's the way that I think differently from most people... It's that if you take a movie and you add, you repeat frames, since -- you know, the thing about moving the frames is they don't represent any particular timescale... Because you might be able to describe a clock, an hour/minute clock by a frame which shows one frame per minute. But then if you also want them to describe a clock with a second hand, if you've set yourself to say "Oh, this is one frame per minute", then you can't describe it; you can't combine it.

But what I say is that the frames don't \[unintelligible 00:46:49.02\] any particular time scale, so that a frame, if a system, if you describe this frame, this system with a certain movie, then if you add frames that simply repeat what the previous frames have done, you haven't changed the description. Your system should still satisfy that. And that basically solves the whole problem of how you -- you know, you've written a specification... Well, like most people, they write a specification of a clock with an hour and a minute hand. And if they add a second hand to it, it no longer satisfies that specification. But when I write the specification, it satisfies it, because my specification of the hour and minute clock allows frames where the same minute keeps being repeated. So if you add a second hand, it still satisfies that specification.

I realized they had that insight in 1983. And to my knowledge, TLA+ is still the only - well, the TLA that TLA+ is based on - formalism that I know of, that people use, that has that property, that if you write a specification of an hour and minute hand, an hour/minute/second clock satisfies it.

**Jerod Santo:** And what's the name of that property? What would you call that property?

**Leslie Lamport:** Well, I call it stuttering insensitivity. I think of these as stuttering steps... It's what I call them. Stuttering insensitivity.

**Jerod Santo:** It's insensitive to those stuttering steps. And the reason is because - I'm asking you, I'm telling you... The reason why it's insensitive to the stuttering is because of the way that you think about it is about the order of events, not as much about the actual distinct timestamps. Is that right? If you're thinking about order, you're not thinking about the absolute time, or the absolute --

**Leslie Lamport:** Right. And if you want to talk about absolute time, you don't build it into your movie camera.

**Jerod Santo:** \[laughs\]

**Leslie Lamport:** You simply have a clock in your movie.

**Jerod Santo:** Right.

**Leslie Lamport:** And it doesn't make any difference to that clock whether there's one step between one second and the next, or 1,000 steps between one second and the next. And what that does is it makes the math so much simpler. And simplicity is the key to being able to deal with complexity. We have to have a really simple way of -- you know, if you're dealing with complex things, and you're using a complex language to describe it... Boy, you're in trouble. And if you're building a language where you have to do something special, when you've written a specification of an hour/minute clock, simplicity means that should also work and be a specification of an hour/minute/second clock. If it's not, you've got this extra complexity to deal with.

**Jerod Santo:** Was this idea in the bakery algorithm? It sounds like it was in there.

**Leslie Lamport:** No, no, no. It's separate from that.

**Jerod Santo:** It's separate. Real quick, describe your bakery algorithm. I'll try to contextualize it, but... It seems like this, at least time insensitivity, or -- I don't know. Explain it first, and then I'll explain why I'm trying to tie it together.

**Leslie Lamport:** \[50:11\] I'll say this problem is stuttering insensitivity. You don't need it when you're just looking at a single system. So if I'm only going to be looking at an hour/minute clock, I don't have to worry about adding steps in which the minute doesn't change. It's only when I have this hour/minute clock and somehow want to compare it with something else that things become complicated if I don't use stuttering insensitivity. So for the bakery algorithm, if we're just looking at the bakery algorithm by itself, stuttering insensitivity is irrelevant.

**Jerod Santo:** Because of the algorithm, or because of the circumstances it is trying to solve?

**Leslie Lamport:** Because of the circumstances, just looking at this. If wanted to combine the bakery algorithm with something else, then stuttering insensitivity, then I want to make sure that I describe my algorithm the way that's stuttering-insensitive. Now, the thing about TLA is you don't have to think about it, that is you don't have to write \[unintelligible 00:51:08.06\] If I have a 1,000-line specification of a system, to make it stuttering-insensitive, I add about seven characters to the specification.

**Jerod Santo:** Right. It doesn't take much.

**Leslie Lamport:** Right. So when you're writing the specification, you're not thinking about stuttering insensitivity, you're thinking about the system you're describing. If I'm thinking about an hour/minute clock, what I'm thinking about is hour and minutes; I don't have to worry about anything else. But when you write it in TLA+, it's just going to automatically be satisfied by an hour/minute/second hand clock. I'm happy to describe the bakery algorithm pseudocode, but I know that when I describe that pseudocode mathematically, it's going to be stuttering-insensitive. But that has nothing to do with how I even think about that algorithm.

**Jerod Santo:** Right. It's a property of the implementation of the system that TLA provides for you. And as long as you're thinking about a singular system, then I guess in that case it's irrelevant. So let's look at this bakery algorithm. This is one of the six bullet points of which they say the reason for your Turing Award -- talk about thinking differently... This is the one -- you talked about it briefly at the beginning; we didn't name it back then. There's a paper by two men, Paul -- is it Paul Johnson? Help me with the names...

**Leslie Lamport:** Paul Johnson and Robert Thomas. But that wasn't the bakery -- they didn't influence the bakery.

**Jerod Santo:** Oh, I'm sorry.

**Leslie Lamport:** That was the time clocks paper.

**Jerod Santo:** My bad.

**Leslie Lamport:** No, the bakery algorithm happened when -- actually, that was the first concurrent algorithm that I wrote.

**Jerod Santo:** Oh, wow.

**Leslie Lamport:** I became a member of the ACM, and started getting the communications of the ACM. It's the first computer science journal that I ever looked at... Actually, I wasn't even aware that there was such a thing as computer science, because that was in 1972, and there really wasn't computer science in those days.

**Jerod Santo:** News to you. Yeah.

**Leslie Lamport:** But anyway, so they had this algorithm for solving mutual exclusion. Mutual exclusion is the problem that if you have a bunch of processes running, and say some process wants to use the printer - well, if you had two processes trying to print at the same time, and you get the output interleaved on the printer, it's not going to work. So you have to ensure that the processes - some way of ensuring that only one process at a time is using the printer. And that's called mutual exclusion.

\[53:50\] And the problem was recognized as being important and introduced by Edsger Dijkstra, I think it was in 1965. At any rate, it lead to a whole bunch of algorithms, mutual exclusion algorithms, which had better and better properties in some sense... And so I read this paper of this algorithm, but it seemed awfully complicated... And I said, "It shouldn't be this complicated." And I whipped up this little algorithm for two processes, and sent it to the editor. And a couple of weeks later, I get a letter back from the editor saying "Here is the bug in your algorithm." That had two effects. One is that it made me realize that concurrent algorithms are hard to get right, and they really need a rigorous proof. And the second one is "I'm going to solve that damn problem."

**Jerod Santo:** \[laughs\] A challenge.

**Leslie Lamport:** And I came up with the bakery algorithm. And I don't think I'll bother describing it here, but when I had written it, when I wrote the correctness proof, I realized that that algorithm had a remarkable property. All these algorithms work by processes for communicating by shared memory. One process would set a value of the variable, another process would read the value of that variable. But how do you implement that reading and writing? Well, you need mutual exclusion, because if somebody tries to write whilst somebody else is trying to read, who knows what's going to happen? In fact, some computer scientist said that that's a necessity; you have to have mutual exclusion somewhere to solve the mutual exclusion problem. But I realized that the bakery algorithm works -- it doesn't require mutual exclusion on the reading/writing variables. Each variable is written by a single process, and it can be read by multiple processes. So you don't have the problem of writers writing at the same time to worry about. Just readers writing at the same time as the write is being done.

And the beautiful thing about that algorithm is that if a reader reads while the value is being written, it doesn't matter what value that read gets. So if I'm changing the value of the variable from 99 to 100, and you come and read it, you might get 4,933 \[unintelligible 00:56:23.21\] and the algorithm still works.

**Jerod Santo:** Did you know that at the time, or you've discovered this later?

**Leslie Lamport:** I discovered it when I wrote the proof.

**Jerod Santo:** You did. Okay.

**Leslie Lamport:** That's one example of being a mathematician.

**Jerod Santo:** That's why proofs are good, right?

**Leslie Lamport:** Well, actually, I went on to formalize the way I was writing those proofs in a way that I think is really nice, and gives you a nice way of thinking about concurrency, but is not a practical way of writing the kinds of specifications that I was talking about in the real world. The bakery algorithm is a nice, simple algorithm, and you can reason about it that way, but... In fact, if I had been reading about it, if I had been writing it in TLA, I probably wouldn't have discovered that it had this property. But because there was no way developed for reasoning about -- a program about concurrent algorithms, I guess I had to be really careful to make it rigorous. I had to be really careful about the assumptions that are being made. And so I didn't make any assumptions -- you know, think about making assumptions about atomic actions that happen atomically; two actions can't happen at the same time. I had to figure out "Well, actions can happen, reads can happen at the same time as writing." So my reasoning method allowed that possibility, and that's why I was able to discover that it had that property.

\[57:59\] Nowadays, we write specifications - think of it as pseudocode, in a way - where we assume that reads and writes are separate actions that can't happen at the same time as one another... And so we don't worry about it, and we leave it to the implementation to figure out how to do that.

**Jerod Santo:** Right. So I heard you describe that particular algorithm as a) your favorite, but I also heard you describe it as one that you said you discovered; not the inventor, but the discoverer... Which I thought was kind of interesting and somewhat poetic... And I'm just curious, not necessarily to distinguish the two, but what did it feel like? What were you thinking? How did you go about the process? If you can go back to that day, that day of discovery of that algorithm - or did it take longer than a day? ...describe to me what you were doing, how it came to you... Were you in the shower and it popped into your head? Were you scribbling furiously on a notebook? What was it like coming up with something like that?

**Leslie Lamport:** I cannot tell you what happens in the microsecond where \[unintelligible 00:59:01.19\]

**Jerod Santo:** \[laughs\] I want to know about that moment of inspiration.

**Leslie Lamport:** Well, it wasn't a moment, in a sense... The reason it's called the bakery algorithm is when I was a kid, there was a bakery - these days, it would be called the deli algorithm - where a bunch of people went to get served, and you have this machine that gives out tickets, it gives out numbers... And so you just take the number and people get served in order. And so I thought about that, and of course, the problem with that as a solution of the problem is that you have no ticket distributor. And so the idea struck me as "Well, what happens if people chose their own numbers, and they did it by looking at everybody else's number, and picking a bigger number?" And that was the basic idea. And from that idea, I would say everything was fairly straightforward.

You first get the obvious problem, "Well, what happens if two people chose the same number?" And then, in that case, you serve people in the alphabetic order of their names. So that's a problem that's easy to solve. And so I wrote this algorithm, and the obvious way of writing it gave a bug, and I saw that bug pretty quickly... And then I figured, "Well, here's a simple way of fixing that bug." And this very rare event - usually, you see a bug in a concurrent algorithm and you can fix that bug, and that's going to introduce another bug, and you fix that bug, and that's gonna introduce two more bugs.

**Jerod Santo:** Right.

**Leslie Lamport:** But fixing that bug, it worked. So that's how it got discovered. There was no moment, other than perhaps that moment that brought back the memory of that bakery, because that was the only store in the neighborhood that used this way of giving out tickets.

**Jerod Santo:** Yeah, we have one of those still here in our local town where you get a ticket. It's parallel, they've got some concurrency going on, because they have multiple strings of numbers going on, because we're always sitting there, trying to -- it's a very popular place. Like, I'm 275 -- because you're wondering, "When's my order coming up?" And in most places, you just wait for 274, and then you're like "Hey kids, we're next." But this place has multiple strands of numbers. And so they'll go 274, 163, 375... And we never know when we're gonna get our meal. But they still get it to us, and seemingly in the correct order, and mutually exclusive. They don't deliver ours to everybody who's sitting there, waiting, so they've got it figured out as well. But that's what I was thinking of when I read your bakery algorithm. I thought, "Okay, I can see where maybe he hearkened to his youth of sitting in line, waiting for that deli sandwich", or something.

So when you've got the solution all figured out, did you then take it back to that editor, the one who had sent you the bugs?

**Leslie Lamport:** Well, I resubmitted it to the ACM journal.

**Jerod Santo:** That had to feel good. What happened next? Was it like immediately --

**Leslie Lamport:** \[01:02:10.15\] Well, it went through the reviewing process and got published.

**Jerod Santo:** Simple as that.

**Leslie Lamport:** But the thing is, there are various -- you know, studying that algorithm, and also... Well, both the method of reasoning that I developed based on it, and... I'd say the next three years or so, three or four years of what I did was all, based on that algorithm, and studying that algorithm.

For example, if you read my number while I'm writing it, and I'm writing it from 9 to 10, and you get a million - which is possible, and then you write that - well, numbers might start increasing very fast. So you don't want that. So what I did is I devised an algorithm that if I'm changing it from 9 to 10, it will guarantee that the number you read will not be any bigger than 10. And that was a non-trivial algorithm. So that's an example of the things that --

**Jerod Santo:** Refinements for -- that's for performance reasons, and...

**Leslie Lamport:** Yeah. And developing those other algorithms, I developed my skill as thinking about concurrent algorithms, and thinking about how to reason about them.

**Jerod Santo:** Well, that certainly wasn't your end game. That was very much getting you into the game. You went on from there to publish many things. We talked about that Paxos paper... A lot of your work is out there driving Azure, driving -- you know, way down in there in the algorithms of AWS, of all these distributed systems... So lots of cool stuff came out of those efforts.

I'm curious, as we close up here, Leslie, and I appreciate all your time today; don't want to take too much of it... I'm curious what are you up to these days? You've got this book in the works... What does your work look like when you're not -- I mean, obviously, if you're authoring a book, I know what that looks like. But do you have daily work that you're doing inside Microsoft, pushing research forward, or working on algorithms for them? You obviously don't have to divulge any trade secrets, but what does a work day look like for you at this stage in your career?

**Leslie Lamport:** Well, my work day seems to involve answering a lot of email, and a lot of things that take up time... But other than writing the book, I'm doing various things that involve what I would say is sort of management type things involving TLA+. I told you, this colleague, Marcus, was doing the heavylifting these days. I'm "managing" him... I'm not his official manager, but we work together to keep tabs on what he's doing, and learn from him what's going on in the world of TLA, of the users. He's the one who these days interacts with users. I very rarely do that. And basically, Microsoft gives me the freedom to be able to devote my time primarily to the book.

**Jerod Santo:** Awesome. Definitely looking forward to that book. Well, Leslie, I will let you go, like I said before. Honored to have you on the show. I appreciate you spending some time with me today. To our listener, we do have the links to all of the things mentioned here today in your show notes... Of course, check out TLA+, check out the resources, there's some tooling there, and some videos as well if you want to learn from Leslie directly a little bit on how to think algorithmically with TLA+. Any final words from you, Leslie, before I let you go? Anything you want to say to our audience?

**Leslie Lamport:** Well, the same advice I give is "Think." And really, thinking means writing. So write.
