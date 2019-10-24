**Adam Stacoviak:** Welcome back, everyone. This is the Changelog and I am your host, Adam Stacoviak. This is episode 202, it’s a Big Show - yes, years in the making. Jerod and I spoke with Matz, the creator of Ruby. We talked all about Ruby, we corrected the title, we were going to call this 20 years of Ruby. We had it wrong, it’s actually 23 years of Ruby. We talked to Matz about its origins, where he came from, naming Ruby, where it’s going, where it’s been, everything you think you want to know from Matz about Ruby, is in this show.

We have 3 awesome sponsors: Toptal, Full Stack Fest, and our friends at Rollbar. Our first sponsor of the show is our friend at Toptal - an exclusive network of top freelance software developers and designers all across the world. Top companies rely upon top-top freelancers every single day for their most mission-critical projects, and if you’re listening to this show and you are a Ruby on rails developer looking for greater flexibility on the project you’re working on, or you’re looking for a community to belong to, or just like some help thinking through a problem as you work, I highly encourage you to check out Toptal. You’ll have a constant stream of top Ruby on rails jobs to choose from, you have the flexibility to choose the project you work on, you have the freedom to set your own schedule, you’ll get featured on the Toptal engineering blog which we often link to Changelog weekly, you’ll get support for speaking at conferences and attending events. Head to Toptal.com/railsjobs all one word. But if you'd like a more personal introduction, email me - Adam@changelog.com. I’d love to help you take your first step at Toptal. And now on to the show.

Alright, we’re joined today by Yukihiro Matsumoto, also known as Matz. Now, if you don’t know Matz, you must be under a  rock, but let me tell you that Matz is a Japanese programmer best known for his work as a Chief Designer of the Ruby programming language. He is also known for its reference implementation at Matz's Ruby Interpreter, MRI. And Jerod, this show for us is literally years in the making; quite literally, 20 years. Our roots are in Ruby, our audience knows our roots are in Ruby, but to have Matz finally on this show, what do you think about that, bro?

**Jerod Santo:** Well, I’m pretty excited. Matz before the show said he was nervous, and I think we are the ones who should be nervous.  

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Quite an honor to be joined by you Matz and thank you so much for the Ruby programming language, which is something  I use daily, and a language design that I compare other languages to, to see if they measure up. So, thank you for joining us and thank you for Ruby.

**Adam Stacoviak:** Yeah. Well, without further ado... Matz, welcome to the show!

**Yukihiro Matsumoto:** Yeah, thank you for having me.

**Adam Stacoviak:** So Matz, I guess the best place that would make sense to start for you, and something that, you know, Jerod - again, I got my mind blown before the show, and I gotta let the listeners know, because Matz is a listener of The Changelog. I couldn’t believe it! Yeah... Isn’t that awesome?

**Jerod Santo:** So cool!

**Adam Stacoviak:** Now, Matz, as a listener of this show, you must know that we love to dig into the history, the past of someone. So someone like you who comes to this show, we have to know where you came from. So, take us back into your story. Where did things begin for you to become a software developer, to become a programmer? Where did things begin for you?

**Yukihiro Matsumoto:** That’s a very old story. So when I was in high school, maybe in junior high school, my father bought me -- actually bought himself a pocket computer, like a desktop calculator with a keyboard that runs BASIC. So I was 15, and I took his computer and started programming. I was pretty interested in programming. That is my beginning of programming career.

**Adam Stacoviak:** So that was about 1980 for you, is that right?

**Yukihiro Matsumoto:** Yes, 1980.

**Adam Stacoviak:** Give or take. So what was it about this device, this opportunity, that made you think "I could do this, I could make something on this, I could make my living doing this. This excites me."?

**Yukihiro Matsumoto:** I didn’t think anything about a job or working at that time. The programming has interested me very much just because I can order the computer, or I can train the computer to do things I want to do. I was interested in programming. I can program or train them to work for me.

**Adam Stacoviak:** Right.

**Yukihiro Matsumoto:** Yeah.

**Adam Stacoviak:** You were in control, you could make it to do what you wanted it to do.

**Yukihiro Matsumoto:** Yeah, I can control computers. You know, it made me feel like I train computers like a dog, you know.

**Adam Stacoviak:** You heard here it first everybody, Matz trains computers like he can train a dog. That’s awesome.

**Jerod Santo:** Well, I've tried training a dog and I failed miserably, so I think computers might even be easier than dogs.

**Adam Stacoviak:** Yes, my dog does not listen. I tell him to be quiet and he just keeps asking for the door, and wants a bone, he is relentless. Computers, they don’t talk back and get angry. I guess they kind of do, whenever there is an interpret issue, or something like that.

**Yukihiro Matsumoto:** Yeah, computers are much easier. My dogs are bad, too.

**Adam Stacoviak:** So what were your first steps then? Were your first steps tinkering? Were your first steps picking up a book? You know, what was your entrance into feeling like you can actually do it? Not so much getting excited about it, but learning yourself to teach and, as you said, control the computer.

**Yukihiro Matsumoto:** Yeah. The pocket computer was awful just because, you know, it was only 400 steps of the capacity, so that we can only type in a maximum of 400 lines of basic code in that computer. Besides that they have variables - no local variables, just global variables, and the length of the variable name is only one. So we could have only 26 variables. Then I typed in some sample programs out of that reference to the computer, and I modified it like a small game of the hit and blow, or some kind of number calculation, or something. The involvement was very, very limited, so I started to feel some kind of frustration soon after I programmed in that particular computer.

**Adam Stacoviak:** So it was really the frustration, the lack of usability that got you excited? Because like anybody, you want things to be easy to use, you want them to be enjoyable, and computers for you were lacking that, and you felt like you can fill that void.

**Yukihiro Matsumoto:** Yeah, but at that time I didn’t know anything about the other computers, so I just kind of felt frustrated. But I didn’t know what is the source of my frustration, so then I came across the book named introduction to Pascal language. I bought that book, and then I studied about the Pascal programming language. It was some kind of enlightenment for me, just because this language, Pascal, kind of freed my mind. My cognition of the programming, it was very limited to BASIC before that, but I thought that Pascal had everything: local variables, recursive calls, user-defined data structure... You know, everything. So that was the first time I started having an interest in programming language in general.

**Jerod Santo:** What came after Pascal?

**Yukihiro Matsumoto:** So I started reading books and magazines about programming and programming languages. Then I came across Lisp, Smalltalk and some other programming languages like Logo These programming languages were pretty amazing for me. But, back then I didn’t have the computer that ran that kind of great programming languages, so I just read the book, and studied about them. But I really wanted to program in them, but I couldn’t. That is kind of a frustration.

**Jerod Santo:** So you were just reading books about Lisp and books about Smalltalk, but you don’t even get to try to use these languages...?

**Yukihiro Matsumoto:** No. The computers were very expensive back then.

**Adam Stacoviak:** I always find it interesting Jerod, whenever we have someone on this show that has such a history with, I guess, going through the hard days, is all I can think of, to describe it. Because, it’s the days whenever... Who was our most recent guest - he made the keyboard, because that’s what he had to do to get to the next step.

**Jerod Santo:** Yeah, Richard Hipp from SQLite.

**Adam Stacoviak:** Yeah, is a show that isn’t out quite yet, but if you’re listening to this then it's out, so go listen to it, episode 201. But this is a case too where Matz’s loving and desiring to program but can’t, because access  isn’t quite there. So Matz, what did you do to get access? What was the next step for you there?

**Yukihiro Matsumoto:** Through reading the books about the computer programming languages. I found out that every programming language was designed by a human being. Do you know that?

**Adam Stacoviak:** Right.

**Yukihiro Matsumoto:** We don’t know who designed English, nor Japanese, but we have for example John McCarthy for Lisp, or Alan Kay for Smalltalk. So the programming language was designed by a specific person or a group of people, and they had intention or ideas for their programming languages. When I was in high school, I was pretty much interested in programming languages, and even though I didn’t have any chance to program in those programming languages in reality, but I was really, really interested in the concept of the programming language, and I just wanted to create my own programming language when I was 17.

**Adam Stacoviak:** It’s pretty profound that you have that perspective, because I didn’t think... Well I don’t know who - and Wikipedia won’t tell me - who invented the English language. I never got curious to the point where I’m like, "Well, if someone designed it, then I could do it." I don’t know if I've had that perspective that you have. It’s interesting that you came to that conclusion on your own.

**Jerod Santo:** So you were 17 year old...

**Yukihiro Matsumoto:** Yes.

**Jerod Santo:** It's about 1982, if my math is correct.

**Yukihiro Matsumoto:** Yeah, around that time.

**Jerod Santo:** At this point you've used BASIC and you've used Pascal.

**Yukihiro Matsumoto:** I didn’t use Pascal...

**Jerod Santo:** Oh.

**Yukihiro Matsumoto:** ..but I knew Pascal.

**Jerod Santo:** Oh okay, so you didn’t even use Pascal. You just learned it.

**Adam Stacoviak:** So only BASIC so far.

**Yukihiro Matsumoto:** Only BASIC back then.

**Jerod Santo:** ...and you have this kind of a wanderlust, or a desire to not just try these languages, but to learn about them even though you can’t use them, and you want to write your own language at age 17.

**Yukihiro Matsumoto:** Yeah.

**Adam Stacoviak:** Did you attempt a language at that time?

**Yukihiro Matsumoto:** You know, it’s prior to the internet age, so I didn’t know anything. I didn’t have any experience on programming, I didn’t have any knowledge for compile writing, or anything. So I took my notebook and wrote down programming, my own programming language.

**Jerod Santo:** Awesome.

**Yukihiro Matsumoto:** ...on papers.

**Jerod Santo:** Do you still have that notebook?

**Adam Stacoviak:** That was my question, do you still have that notebook?

**Yukihiro Matsumoto:** Unfortunately I lost that notebook.

**Adam Stacoviak:** Oh, man...

**Jerod Santo:** You could compare it to Ruby and see how much closely you ended up creating something that that 17-year-old wanted.

**Yukihiro Matsumoto:** Yeah, I vaguely remember that was not... That was kind of like a Pascal, but I saw some kind of influence from Lisp. I think it was kind of a combination of the Pascal and Lisp.

**Adam Stacoviak:** So we’re not quite to designing Ruby, and obviously this show is about painting the history of this 20-year rich history of the Ruby programming language, so of BASIC, of Lisp, of Pascal, so what was about those languages that got you excited? What specific features, what specific things? Even if you couldn’t write them, you could read them and  think about them in your mind.

**Yukihiro Matsumoto:** Mm-hm. So for Pascal I learned a lot from... The programming language features can help programmers. The old BASIC I used, was very limited. It didn’t try to help programmers - the limitations in the number of lines of code, limitation of the number of variables, they couldn’t have any user-defined function, they didn’t have... They didn’t have anything but a few lines of basic code. So compared to that, the Pascal language tried to help programmers to be effective, and that kind of attitude influenced me a lot. The programming language should help programmers.

Then Lisp - when I read about Lisp, I was very surprised by the consistency of the language. The Lisp language was made out of very few concepts, like Lisp and some items, and everything was combined out those small number of concepts. That kind of consistency or extendability surprised me a lot.

**Jerod Santo:** And obviously Smalltalk had a huge influence on Ruby.

**Yukihiro Matsumoto:** Yeah, but back then... It was the early '80s so the information about the Smalltalk language was very limited back then. I studied about Small Talk mostly in my university ages.

**Jerod Santo:** Is that when you gained access to actually start using some of these languages? At university?

**Yukihiro Matsumoto:** Yes.

**Jerod Santo:** So did you study computer science, or what did you go to school for specifically?

**Yukihiro Matsumoto:** So in 1984 I went to the university called Tsukuba University in Japan I majored in computer science, so finally I got access to the real computers and I started programming. Also, Tsukuba University has a huge library, so I got access to the books and the materials and the papers about computer science, so finally I got access to the information of computer science.

**Jerod Santo:** That must have been like heaven for you.

**Yukihiro Matsumoto:** Yeah, really. It was heaven.

**Adam Stacoviak:** What I find interesting is that there is roughly - based on some notes Jerod pasted it to me - 13 years difference between the day, or roughly the year from what Wikipedia tells us, in the mid '90s, so assuming 1995-1996, Ruby being created. So there’s roughly 13 years between your original age, roughly 15-17, when you were kind of painting this picture that you just shared with us. So there is 13 years between that time.

**Yukihiro Matsumoto:** Yeah.

**Adam Stacoviak:** You went to school, you learned a bunch of interesting things and all that stuff. We're obviously here to talk deeply about this history of Ruby, so I wanna tee that up before we take our first break, because when we come back we’re gonna dive into some more details around those 13 years and then specifically get into the origination, the date, the timeframe of Ruby, what the original problem was, and those type of things. We'll take our first break and we'll be right back.

**Adam Stacoviak:** Alright, we're back from the break. Obviously, if you are listening to this show, 20 years of Ruby with Matz is like link bait , right? You’re going to listen to that show. Even if you’ve never programmed Ruby before, you want to listen to this show, because Matz is such an influential person in software development. Already Jerod and I have been enjoying Matz’s story, how he got into programming and his journey through BASIC, Pascal and Lisp, but ultimately he got to a point where he was just maybe frustrated even further with usability and decided he can create his own language, because you can do that. So Matz, Jerod and I have been trying to dig and figure out when Ruby was created, and Wikipedia says mid '90s. Can you help us with a citation? In your eyes when was Ruby officially born, so what could we call Ruby’s birthday?

**Yukihiro Matsumoto:** The birthday of the software is not well defined just because, you know, unlike a human being, the software is not really born. But software, including the programming languages, do not have any physical entities, so the logic or concept, are very crucial for the existence of software. So in that sense, the name is pretty important for software. So in programming if you name some concept a very good name or right name, your design is guaranteed to succeed. I value names very much in programming. In that sense I picked the date, I named Ruby - Ruby as the first day of the Ruby programming language - which is February 24th, 1993.

**Adam Stacoviak:** So we're actually 23 years...

**Jerod Santo:** 23 years of Ruby.

**Adam Stacoviak:** Yeah, so we got our title wrong. Hearing that, thank you for sharing the official date with us So February... Was it 23rd or 24th?

**Yukihiro Matsumoto:** 24th.

**Adam Stacoviak:** February 24th 1993, you named it Ruby. Has anybody ever asked you what the significance of the name Ruby was? Where did Ruby come? Why is that... since names are so significant to you, why that name?

**Yukihiro Matsumoto:** It is kind of like a coincidence. When I decided to create my own programming language - I will tell that story later probably, but when I decided to name my programming language, I wanted to name it after the name of the jewel. Just because we had Perl. Back then I talked to my friends about the concept and the plan, so several names came up with the name of my programming language. These were like diamonds, sapphire, but those names are so long and quite difficult to type, so after examining a few jewel names, we picked two candidates: the first one is Ruby, the second one is Coral. But I talked to my friends and Ruby is shorter, and the ruby jewel is more beautiful, so I picked the name Ruby.

**Adam Stacoviak:** So it’s based on beauty and it’s based on - in theory - easiness, because it’s shorter; not so much as length, but it’s easy.

**Yukihiro Matsumoto:** It's easy. And after that we found out that Perl is the birthstone of June and the ruby is the birthstone of July, so it is a good name for the programming language - which succeeded and which came after the Perl. But it was just a coincidence.

**Adam Stacoviak:** Just a coincidence…

**Jerod Santo:** So your next language will be the birthstone of August?

**Yukihiro Matsumoto:** Uhm... Aquamarine?

**Jerod Santo:** Now I'm googling for the birthstone of August. Oh, not easy... Peridot. Not as good as Ruby.

**Yukihiro Matsumoto:** No.

**Jerod Santo:** So you had a name, it was 1993, you had some influences, including Lisp, Smalltalk, Perl of course... You talk a lot about how every programming language is created by a person, and you also talk about how when you design a language, you design for specific things, and the big idea around Ruby - and correct me if I’m wrong - is this idea of designing for the programmer, or programmer happiness, around this idea of joy -which was avant-garde for sure at the time, it was quite almost revolutionary you might say, with how popular Ruby eventually became. So where did that notion come from? Where did that influence, where you said "Let’s optimize for programmer happiness" how did you think of that?

**Yukihiro Matsumoto:** Actually, I confess that I didn’t think that at the beginning.

**Jerod Santo:** Oh, okay.

**Yukihiro Matsumoto:** Some programming languages are designed with a specific purpose, like the BASIC and Pascal - it’s programming education, or C for system programming, like writing a Unix operating system.

**Jerod Santo:** Right.

**Yukihiro Matsumoto:** Smalltalk was a prototype of the future programming environment, or something like that, but unlike other programming languages, I didn’t have anything specific in mind. You know, I told you that I just wanted to create my own programming language.

**Jerod Santo:** Right.

**Yukihiro Matsumoto:** But as a programmer, I wanted to use my programming language. As a programmer, my daily job is writing some kind of a C language for a main project, and some Perl script or shell script as a side task. So writing some kind of shell scripting language could help me use my programming language for my task, kind of like a dogfooding. So I picked scripting language for that purpose. I didn’t think of solving my specific problem or anything like that, I just wanted to create my own programming language.

**Jerod Santo:** I love that. It is a very pure desire: "I just want to create a language."

**Yukihiro Matsumoto:** Yeah.

**Jerod Santo:** At the same time I wanted to have fun with designing and implementing or using my programming language, so at that time I didn’t focus on the effectiveness or productivity of programmers in general. I focused mainly on my joy in programming and designing of my own programming language. So that gradually leads into the programming joy of the programmer in general, all over the world.

**Jerod Santo:** All I can say is that it makes a lot of sense that you ended up creating a language around enjoyment, joy and programmer happiness, because you weren’t designing for specific use cases, like you mentioned with C or another language... Or Perl - Perl’s whole purpose was text extraction and reporting, right? So it had that very practical goal, but your goal was just to enjoy making a language that you would love so what came out of that is a language that is enjoyable to you. It just makes sense.

**Adam Stacoviak:** I would say the opposite. I would say that that's kind of a happy accident, you know? Because he said he wanted to dogfood it, but it wasn’t top of mind in the fact that this is the main thing you wanted to do... But he wanted to be happy creating it, so it seems like it's a happy accident to get there. Although it does make complete sense that that’s what should come out of it.

**Jerod Santo:** Right. So you mentioned Lisp and how you liked how small Lisp was in its concepts, and how consistent it was; you mentioned Small Talk and Perl, and when you were originally designing Ruby, were you actively thinking about your use of these other languages or the things that you like and just " stealing" those into Ruby? Were you actively taking features from Perl that you like and saying, "I want those in Ruby", or was it more of an indirect influence on the language?

**Yukihiro Matsumoto:** So when I decided to create my own programming language... I had been a big fan of object-oriented programming for years back then, so I wanted to apply the concepts of object-oriented programming to my programming language. And back then I was a C programmer, so I wanted to feel comfortable as a C programmer when I'm using my own programming language. I wrote many shell scripts and some Perl scripts, so I wanted my programming language to replace  those languages in shell and Perl. In combination with these, the idea of the object-oriented scripting language was gradually formed. So I took some kind of a Lisp interpreter and put some class libraries out of Smalltalk and then picked the features out of Perl, and chopped into the methods, and I reorganized into the cluster libraries. In that way I gradually designed my programming language named Ruby.

**Jerod Santo:** So you named it in 1993. By 1995 you had a public release.

**Yukihiro Matsumoto:** Yes.

**Jerod Santo:** I'm trying to figure out here if this was your 1.0 - yes it was, Ruby 1.0. Oh, I’m sorry, Ruby 1.0 was 1996 if Wikipedia is correct.

**Yukihiro Matsumoto:** '96, yes.

**Jerod Santo:** So let’s talk about that. You’ve fully formed this idea, you’ve given birth, so to speak, to a concept, in working code, or a 1.0 release. What happened next? Were people using it? Did you announce it somewhere?  Did you keep it for yourself or did you put it out into the world? And what did people think?

**Yukihiro Matsumoto:** Soon after I started the project in 1993, virtually no one knew Ruby, just because it was my personal project. Only a few close friends knew about the language, and they helped me to try my baby programming language. But the implementation of the programming language kind of took time; it took six months to do a simple “Hello world” for me. I started in February, the simple “Hello world” worked on August. Writing “Hello world” programming in Ruby is kind of one line of code, and it took us maybe 10 seconds or something, but implementing the language to do “Hello world” is kind of a huge task. I needed to implement a string object, so I needed a string class, and to implement a string class we needed an object class to inherit, and the whole object system and the whole messaging system; and to cold print we needed access to the standard IO, and I need to objectify the standard IO, or something like that. But, that took me 6 months, to do a simple “Hello world”.

**Jerod Santo:** Reminds of that Carl Sagan quote about making an apple pie from scratch, you must first create the universe. Sounds like you had to create the Ruby universe in order to have a “hello world” from scratch.

**Yukihiro Matsumoto:** Indeed.

**Jerod Santo:** So how long before other people started to use it?

**Yukihiro Matsumoto:** Until December 1994 virtually no one used Ruby, but two other friends. But in '94 I passed some small message to the Usenet, which we had to communicate to the others, the internet back then. I don’t know, I don’t remember the exact number, but 10-20 people were interested, from the mailing list, and they advised me in the very early stage of Ruby. This kind of communication and discussion about design and implementation of Ruby got better. Then I passed the whole Ruby source code into the internet, December 21st 1995.

**Adam Stacoviak:** So I guess once we're getting to more and more users, what do you feel like is roughly the time you feel like Ruby was really adopted by the programming world? When was it and what was it like at the time for people to really start using it? Not just - and I don't mean it in a negative way - 20 or 30 people, but a lot of people. When did that begin?

**Yukihiro Matsumoto:** Yeah, soon after I passed the source code of Ruby... So I formed a mailing list, and two weeks later we had 200 members on the mailing list. That is kind of a number, I was surprised. So after seeing an unknown programming language from nobody - nobody knew me back then - but interested and joined the mailing list, in two weeks, that was kind of surprising for me.

**Adam Stacoviak:** What was the secret recipe? What do you think was happening the right way to attract people? What was it about Ruby that was really getting them, and what languages were they coming from to try Ruby?

**Yukihiro Matsumoto:** I’m sorry but I don’t know about secret recipe, but I was so surprised... Only one thing I can think of is that, you know, Ruby is designed after my preference or taste, and surprisingly so many other people felt in a similar way towards programming and the programming languages. So that kind of preference invited them to get involved in the Ruby community. So in the beginning, Ruby was designed for me, myself, only one person, but surprisingly so many people - not only in Japan, but all over the world - felt in a similar way and interested in Ruby, and they felt joy in programming Ruby. This was so out of my expectation, so far beyond my expectation.

**Adam Stacoviak:** It might be a good place to talk about the cultural divide. We have a note here, mainly just around how obviously Ruby was written by someone who's Japanese, speaks Japanese as their primary language - that's you, obviously - but Ruby has played this part in bringing people together from all over the world: the United States, Japan, and all over. And you’ve also got people who speak English primarily, learning Japanese to break down the cultural divides and be able to speak your native language. Can you speak to what it is to have such an influence on those people? How Ruby has bridged that gap between cultural divide, language barriers, things like that.

**Yukihiro Matsumoto:** Language barrier, yeah... At least if I were born in an English-speaking country, my life would be much easier. But we programmers, kind of have similar souls inside of us, despite the difference of the primary language we speak, or the culture we were brought up in, most of us feel in a similar way; we are primarily programmers. So even though I was born in Japan, you were born in the States, or maybe others from other countries, other cultures, somehow we feel in a similar way. So Ruby language stimulates the common soul of programmers.

**Adam Stacoviak:** Right. The common desire for usability, simplicity, joy, happiness.

**Yukihiro Matsumoto:** Yes those kinds of things.

**Adam Stacoviak:** You know, those are language-universal. To see me have joy is to see me smiling; to see you have joy is the same, you would be smiling. There would be some sort of appearance on you that is language agnostic. That makes sense. Well, what about things that you like a lot about Ruby, what are your favorite parts of Ruby? You’ve written so much of these years... What is it about Ruby - I guess the easiest way to ask is what’s your favorite part about Ruby? What is it that attracts people to Ruby?

**Yukihiro Matsumoto:** As a language, I like Ruby’s extendability. We have the Ruby language, but we can add many things, like the class libraries and the gems, to extend the power of the language. The Ruby language allows us to make Ruby even stronger by adding the classes, like adding objects. That kind of extendability I like most. The second thing that's a part of that is the blocks. The block is somehow form of the higher order function, but Ruby provides things in a very nifty way That forms that you can extend the method with adding blocks. So I like these kinds of things in Ruby. In fact, the most important thing in Ruby language is the community. Since we emphasize the happiness of programmers... We cannot live without the programmers. We are not just a language, we are not just a technology; the community is the most important for the language.

**Jerod Santo:** Well said and I agree with you on the extendability to this day, and I know the act of support in Rails catches a lot of flack, but the fact that Ruby allows you to write out when you’re thinking about a time. And you think, "Well, it was three days ago", and you can type in your code: 3.days.ago - that's joy for me. It so expresses exactly what I'm thinking, and I do not have to conform my sentence into a structure that the language requires of me. I can express it the way that it makes sense, and obviously the act of support is adding that \[inaudible 00:41:26.29\] to number three in that case is absolutely a joy when it comes time to use it. So thank you for that. You know, all these decisions have big consequences and sometimes they make all of us smile, sometimes they make some of us smile and other of us frown, but they are all tradeoffs and no doubt Matz, you've had some decisions in the language design and maybe even in the implementation that you look back and think, "If I could take that back, I would." So we're not gonna ask you now, we're gonna ask you on the other side of the break... You’ve talked about your favorite parts of Ruby, which is extendability, as well as the community which is so important, but we’re gonna ask you about any design decisions that, you know, if you had a second chance, if you're designing that new language next year, you wouldn’t put it in. So stay tuned, and we will talk about that on the other side of the break.

**Jerod Santo:** Alright, we're back with Matz. Matz, we can probably camp out all day on design decisions.

**Yukihiro Matsumoto:** Yes.

**Jerod Santo:** We don’t have all day, and we have 20 years to recover,  so we will be moving along, but you mentioned some of your favorite things about Ruby - extendability, the community...

**Adam Stacoviak:** The block...

**Jerod Santo:** Yeah, the block, absolutely. Is there anything you regret in terms of design decisions? Whether they were initial or even over the years, that you'd say, "Meh, probably not my finest moment"? Can you share that with us?

**Yukihiro Matsumoto:** The biggest regret was I took too many from Perl.

**Jerod Santo:** Oh, like some of the global variables, like the dollar sign?

**Yukihiro Matsumoto:** Yeah, something like that. So at the very earliest stage of designing Ruby I wanted to create a scripting language that could replace Perl. So I took many things from Perl. My primary goal was that everything Perl could do should be done by Ruby as well. So I took many things out of Perl, but I should have thought more about the features I took, just because at that time my scope was too narrowed down to scripting language. Ruby itself is not really a script language anymore, it’s a general purpose programming language right now. So in that way some features are too specific to scripting. Those special global variables are very handy for the small programs, like ten lines of code or something like that, but once you write bigger code, that kind of magic features makes implementation more complex, or behavior more complex to understand. So I regret many of them. Those features are gradually becoming obsolete these days. No one uses the magic variable any longer, but we implemented it still to support those things. That makes our implementation even more complex or error-prone, so I regret those kinds of features.

**Jerod Santo:** They’re good for golfing, but not much else. Golfing and scripting.

**Yukihiro Matsumoto:** Yeah, indeed.

**Jerod Santo:** So you mentioned that Ruby started off as a scripting language in your mind and as it became generally used and generally useful, you know, it’s now a general-purpose programming language. One thing that also happened in the early 2000s was the advent of Rails, which exploded in popularity as you well know, and alongside it Ruby exploded in popularity, moving beyond the bounds of the community that you had built over maybe the first nine or ten years of Ruby’s existence, now to a much larger community. So much so that many people look at Ruby as a web programming language, and not a general-purpose programming language. Your thoughts on that perception of Ruby being web-focused as a language?

**Yukihiro Matsumoto:** I have kind of mixed feelings. I’m happy with the name title of a web programming language. You know, Ruby is very good at web programming thanks to Rails, and the writing of web applications using Rails means that the programmer has to write their programming in Ruby, so that’s okay for me. In contrast, some programmers hesitate thinking about using Ruby at web. Ruby can write anything, like infrastructure managing, like a chef or a puppet, or maybe some other features, like a laying desktop application. You can write a desktop application in Ruby, you can write a scripting in Ruby, you can write the infrastructure managing in Ruby, or you can even write a mobile app or you can even program embedding systems in Ruby. So even though I’m happy with the title of web programming language, I also wanted them to know that Ruby can be usable beyond web.

**Jerod Santo:** I think that is fair, and I think many people that learn Ruby because of Rails, or came to Ruby because of Rails, any of those came for Rails and stuck around for Ruby. And it won them over even more so than the web framework, and they then take it into all the different areas of their programming needs, and like you said, you find it in many places and not just the web.

**Adam Stacoviak:** Yeah. A good example of that though Jerod is your own personal take on it. Before the show started - I’m not sure it made it into the audio for the listeners or not, but you had said that Ruby to you is the thing by which you judge all languages. I'm not sure how Matz feels about that, we’ll ask him of course, but you know... I’m not sure how you got to Ruby -maybe that’s an interesting story as a side note, but you know, I can imagine it’s probably similar: you came for the Rails but you got to Ruby and you loved it, and now it’s your barometer, it's the thing you judge all things on, to see if it’s the language that fits for you.

**Jerod Santo:** Yeah, absolutely it is, and as I look around the field and all these interesting new languages are popping up - Matz, as a language person, I’m sure you’re keen on many of these - so I look at each one and I say, "Hm, can I write 3.days.ago in this?" \[laughter\] and I use that as a test. Or can I extend it to even get that kind of a feature or that kind of a statement. But Matz, how does that feel? Because you were influenced by so many different languages - we mentioned a handful of them: Perl, Python, Smalltalk, Lisp... Now you're being an influence, your language that you designed, has influenced Clojure, has influenced Crystal very much. Elixir, Groovy, Rust, Swift... What does that feel like, to have created this language that you pulled in ideas from all these other places, and now your language is being used as a barometer for quality or as an influence for new languages to be created.

**Yukihiro Matsumoto:** Yea, so I have considered myself as some kind of a language geek or like a wannabe in the programming language, but as time goes by, surprisingly my masterpiece, Ruby, becomes so popular, mostly thanks to Rails, and it started influencing other programming languages or other programming language designers, so it is such an honor for me... I feel like I’ve now become a member of the broader community of language designers.

**Adam Stacoviak:** You are now elite. Part of the elite.

**Yukihiro Matsumoto:** Yeah, not really elite, but a mere member of the programming language designer community so I’m pretty happy about that.

**Jerod Santo:** Maybe this is an extension to that. Not so much the happiness with your influence, but while we are here on this topic, maybe a bit of advice... Let’s say there is a language designer - or a budding language designer, or a future language designer - that is listening to this show right now or years from now, and they’ve got you, someone who has been down a long road, 23 years with Ruby so far, studied many languages, now part of the elite club - what advice would you give back and could you give back to influence future language designers in a positive way? What advice... You may have said some of the things so far, like positivity, happiness and things like that, but what’s one core thing you think you could share with a language designer out there?

**Yukihiro Matsumoto:** A few years ago Dave Thomas - our Dave Thomas, we have a lot of Dave Thomases out there - one of the programmers, told in the conference keynote that programming is a process of designing a domain-specific language for free application. So in that sense, every programming is a design of the DSL or API for that particular application. So every programmer is or should be a language designer. So take my advice as an old language designer, mind design and mind psychology. We programmers often focus on technologies, we are humans, we are people, so we have minds and feelings. Those feelings influence our productivity, or effectiveness. So when you design anything, like an API, or language, or anything, think about how you or how users feel about those designs - that kind of things are the key to a good design of API and of a language and of a programming engine. So that is the reason I said mind design and mind psychology.

**Jerod Santo:** I was gonna say, we’re kind of curious, maybe your thoughts on a few particular languages? You mentioned, I think it was before we started the show, that you listened to our show on Elixir, and you also mentioned that you’re interested in listening to our show on Hascal. Some of our listeners are interested in your thoughts on Elixir as a language, and on Go as a language, and any other languages that you find interesting, that are up and coming. Could you share your thoughts on those with us?

**Yukihiro Matsumoto:** So when I designed Ruby in the early '90s, computers had only one CPU, so we didn’t have to care about the parallelism; we did have concurrency but we didn’t care about the parallelisms, we didn't have multi-core. But these days everything is multi-core, everything is in parallel. So we have tons of computers in cloud, we have many cores in the laptops, so now we have to care about the concurrency and the parallelism. If I knew about this future, I would have cared more about the concurrency in the design of my language. So in that sense, I am very interested in the design of Elixir. Elixir is based on Erlang, which is a very concurrent programming language, the key of the multi-core and a better concurrent model. So we are trying to address that kind of concurrency in Ruby 3, but Erlang has a long history of concurrency, and they have done very good things in providing parallel programming. We look up to that kind of history and we have to learn a lot from the design or Erlang and the design of Elixir.

**Adam Stacoviak:** For the future of Ruby, I guess, when you look at what you like about Elixir, what you like about Erlang, and what you like about Go and their focus, now that there is a future obviously and there is now an awareness of 128 cores, and concurrency and things like that... You know, back in the '90s when you were designing Ruby you didn’t have that concern, and now that there is, what can you say about the path to give Ruby concurrency? What can you say about the future that Ruby has when it comes to concurrency?

**Yukihiro Matsumoto:** We have several ideas for future of Ruby concurrency. The first one is some kind of a streaming process, like adding some kind of pipelines to the language and then those pipelines will process data parallelly. And the other idea is providing some kind of more isolated things down threads. The most bad things about threads is the data sharing. So the thread can look into the other thread access - that kind of a shared state is the source of all evil. We could provide some kind of isolated capsule of the parallel execution so that those capsules can communicate via some kind of channel, like Goroutine has. In that way we can avoid the data sharing. We can provide the share-nothing model, that a language like Elixir provides. We are experimenting on those ideas right now, so maybe in a year or two we will decide which idea to take, and that idea will gradually come into Ruby 3.

**Jerod Santo:** So Ruby 3, I guess anybody listening to that is gonna be excited who is a huge fan of Ruby. You know, having a path to concurrency and having in-quotes. We've talked about that on the show before that you mentioned, José Valim having proper support for concurrency was something he had actually said about  his departure from Ruby, and his desire to create Elixir. There is a path. How far out are you? I know it’s difficult to project things like that, but is this a year or two, is it half a year? What is roughly the timeframe people can get excited for the future Ruby?

**Yukihiro Matsumoto:** We are open source, so we don't provide any specific roadmap, but in my mind I hope it will be released before 2020.

**Jerod Santo:** Okay. Well, we’re getting near the end. We’ve got roughly 15 minutes left in our scheduled show timing, so let’s go ahead and take a break and when we come back, we have a Slack room for those who support the show, Changelog members or changeloggers, as we call them. If you are a fan of the show and you want to support us as well, you can go to changelog.com/membership to learn more about that, but you get access to this private Slack channel.In there we drop the message like, "Hey, we’re having Matz on the show today, this is really awesome! Anybody have any questions?" And a lot of questions came up around mruby, so we’re going into this break and when we coming back we’ll talk a bit about mruby and what we expect from it, and kind of some things you can see for the future of it, and maybe even how you get the government of Japan to sponsor it, so that's kind of interesting. We’ll take this break, we’ll talk about that on the other side and of course, we will be right back.

**Adam Stacoviak:** Alright, we're back from our break, with Matz. This is until the end of the show Matz, but we’ve got so much more to cover, so much rich history of this awesome language called Ruby that you created 23 years ago. Jerod and I, we've been hosting this show, the Changelog for a while, and we’ve had the likes of Go on here, we've had the likes of José Valim come on here and talk about Elixir, and a lot of interesting things happening in other languages. During the break, as listeners know, we talk to our guests and sometimes we share things in those breaks that really need to be on air, and something I asked Matz off air, but now will be on air is maybe any envy that he might have - or those who were involved in steering Ruby in the right way - any envy he might have around concurrency and dealing with just compatibility and things like that. So Matz, take it away... That was a good answer you said in the off air, but say as much as you like here on air about that.

**Yukihiro Matsumoto:** You know I am pretty happy about working with Ruby. You know, it's a good language - sure, I say that. It's quite challenging, we have to solve many technical challenges, and that is quite amusing for us as programmers. So we are pretty happy about working with Ruby,but sometimes we feel frustrated to keep compatibility. We have millions of Ruby programmers out there, so if we make any incompatible change, that would break so many Ruby programs. So due to - I don’t like that word - social responsibility, we are very conservative to make incompatible change. In recent years the keeping of compatibility was our primary goal of the design and enhancement of the Ruby programs. So those compatibility things sometimes hinder us to make progress. In that way I sometimes envy the other programming languages, namely minor programming languages. They can make big changes very easily.

**Adam Stacoviak:** You have, as you said, millions of ruby applications that are out there and as you said the social responsibility, so that’s holding you back from progress.

**Yukihiro Matsumoto:** Sometimes, yes.

**Jerod Santo:** Which is expected, right? It’s a known fact, once you have baggage, so to speak - and not in  a negative way - once you have baggage, you must carry that baggage, and that can sometimes stop you from chasing those new shiny objects. But you've mentioned also that mruby is one way you get to tease that part of you that gets to chase the shiny objects, that gets to do something interesting. I’ve mentioned that we have a Slack room with members in it that chime in when we ask them to when we have a guest coming on, and they had some questions around the future of mruby, and things like that. What’s interesting with mruby, as it relates back to this  tickling of the envy thing for you with the other languages?

**Yukihiro Matsumoto:** So yeah working on the other things -- mruby is a subset of the Ruby language that is targeted to embedding systems, like embedding applications, or embedding systems in devices. Working on that kind of things is quite refreshing. In addition, I have been working on the other toy programming language named Streem. The Streem language is in its very early stages and no one uses it, so it is quite easy to do a drastic change. These kinds of experiences are very refreshing for me.

**Jerod Santo:** Let’s focus on mruby first, and we do have a few questions on Streem... But on mruby specifically, it looks like you started it in 2012; as you said, it’s for embedding, whether inside other programs or on devices. What’s the status of it? Is it production-ready? Are people putting it on devices? Does it have a future roadmap or does it just kind of follow Ruby’s advancements and keep parity?

**Yukihiro Matsumoto:** The status of mruby is quite close to production-ready. Some companies already use mruby in their products, for example a company in Brazil created some kind of payment devices, embedded with mruby. Those devices understand the credit card, debit card and Bitcoin, and those kinds of systems can be configured using Ruby, with embedded mruby. The other company is in Japan, ships internet routers embedded with mruby. They use mruby to provide the routing configuration in Ruby, or maybe the character user interface using mruby. Some other companies are experimenting mruby to be embedded in their systems, for example micro satellites - satellites with 5 inches squared, piggy-backed with rockets, and they go around   the Earth for a year or two, and those systems are configured by mruby.

**Adam Stacoviak:** So when you say rocket, do you mean like a rocket ship?

**Yukihiro Matsumoto:** Yeah, rocket.

**Adam Stacoviak:** Nice, okay.

**Jerod Santo:** Now you have Adam’s  attention.

**Adam Stacoviak:** Yeah, when you say rocket ship, my ears go up.

**Jerod Santo:** One thing about this in your readme for the mruby, it says this is sponsored by the Regional Innovation Creation R&D programs of the Ministry of Economy, Trade and Industry of Japan. Anything to share with us on that? How that got set up, and the details of that relationship and why they are supporting it so much?

**Yukihiro Matsumoto:** Yeah, I have been working with the local government of the prefectures in Japan. Fukuoka prefecture is one of them. During the work with the Fukuoka government, they applied for a government-funded project and they got granted. The grant was originally designed for some kind of hardware stuff, but it was quite difficult to explain them. So they asked us, "Where did you install those facilities?" or something like that. It is software, no facility.

**Jerod Santo:** It’s not a real thing here, okay?

**Yukihiro Matsumoto:** No physical things... But somehow we got granted, so with that grant we organized some kind of joint venture. In those processes we implemented mruby. You know, the most important thing is a deadline. You know, we are open source, we usually have no deadline. We do when we do, we do when we can, or something like that. It might take years to implement. I had a vague idea of implementing the smaller implementation of Ruby language, but you know, implementing a language processor from scratch it is kind of a huge task. It is quite difficult to start. The first step is the biggest step, so that grant forced me to make a big first step. They forced us and helped us to make a first step. Then after two years, in 2012 we finally made it open source.

**Adam Stacoviak:** So I guess going back to maybe something Jerod asked, I'm not sure if we got full clarity, at least it’s a little unclear to me, but his question was around the advancement of mruby and if it’s closely tied to... Because it’s Ruby 1.9 compatible. Is mruby your outlet for progress, as we talked about it when it came to the envy, or is it something different? Is it tied to Ruby’s progress? And held back by maybe even? Does it have that same handicap?

**Yukihiro Matsumoto:** So mruby itself is based on ISO Ruby standards, so we cannot make arbitrary change to the language, but in that sense I sometimes feel similar frustration. But you know, mruby implementation is a subset, so we can drop off...

**Adam Stacoviak:** So it is held back now, but if you wanted to you could break away - is that what you’re saying?

**Yukihiro Matsumoto:** Mm-hm.

**Jerod Santo:** The implementation is a subset of Ruby, so you can avoid a lot of the traps or the things that you don’t necessarily think are required to support. But in terms of the language semantics, and it conforms to the ISO standard, so in that way it is tied to the language.

**Yukihiro Matsumoto:** Correct.

**Jerod Santo:** Which makes sense, because it is Ruby for embedded, so you want it to be same language as much as possible. We are running out of time... Let’s talk about Streem a little bit. You mentioned influences from Ruby, which makes sense, Erlang, other programming languages, and it looks like very much the UNIX philosophy. Can you tell us -- you gave us a brief overview, but give us a little bit more... When you started it you said it’s just a toy, or something you are playing with. Do you see this becoming your next big thing or is it just that outlet to play around?

**Yukihiro Matsumoto:** Yeah, just an outlet to play around. You know, as a side job, I write articles for the Japanese programming magazines, about programming and the programming language. As an example of that article, I designed a small toy programming language, based on the idea of the streaming programming. So I named it Streem, and as a backup I’ve put my repository into GitHub. Last year -- No, the end of December 2014, so almost a year ago, someone found my repository, and someone then put that thing into the Hacker News and it was so much buzz... It was amazing. Back then I only had 200 lines of the syntax description, so virtually nothing. But it was buzz you know... We had a lot of issues in GitHub. It was not supposed to be opened, it wasn’t  supposed to be public; it was just a backup, but someone found my repository.

**Jerod Santo:** You're a victim of your own success in that way.

**Yukihiro Matsumoto:** Yeah... Funnily, I got the pull request from the other programmer. "Okay, you describe your language in the article, so I implemented your language."

**Adam Stacoviak:** Wow...

**Yukihiro Matsumoto:** I only described my language in the article, and I only put the 200 lines of the syntax description, and the other one implemented MY programming language. Since then I modified a lot, but it is still based on the interpreter, the ISD interpreter, which is written by the other guy.

**Adam Stacoviak:** Right. I guess, as Jerod said, we are kind of running out of time. As much as we would love to keep you here Matz, and keep talking to you about this rich history, because it’s fun for us, hopefully it’s fun for you as well...

**Yukihiro Matsumoto:** Yeah, it was fun.

**Adam Stacoviak:** ...to take the time to go back and think about, "Man, where did this come from? How did I get here? Why am I here?" And it’s interesting to take that same thing, and share that with the listening audience. And as a listener of the show, Matz, which I'm still blown away by it Jerod, I can’t believe Matz listens to this show, which is cool! I love that! But Matz, we often ask those who come on this show who their heroes are, and there were several times that you were somebody else’s hero. So generally the question is "Who is your programming hero?", but in this case who is somebody who has influenced you to be the Matz you are today, to be the Matz that has led many 'swanna through Ruby, and has this "Matz it’s nice, so we are nice" kind of community that's come and followed him? Who has influenced you, who’s your hero that made you who you are today?

**Yukihiro Matsumoto:** My primary programming hero is Larry Wall, who has designed Perl. Not really as a language designer, but as a leader of the community. He has sense of humor in his keynotes, and he has sense in the design of program, software. His works, like patch, rn and Perl, all of them are very helpful to programmers. So that kind of attitude and that kind of sense of humor is my role model. So my primary programming hero is Larry Wall, definitely.

**Adam Stacoviak:** Do you have a secondaries?

**Yukihiro Matsumoto:** Alan Kay, who designed the future of programming by providing the object-oriented programming, and then John McCarthy, who provided the idea of Lisp, and the idea of a very nifty programming language.

**Adam Stacoviak:** Very good heroes there. Well, Matz, this is a chance for you to share whatever you think you may wanna share. Is there anything else that Jerod and I may have left out, any important detail in this 23-year history of Ruby that we might have missed? Anything you want to share that you’ve got on your mind before we close out?

**Yukihiro Matsumoto:** Yeah, we are still working on Ruby 3. We have tons of ideas, but we are still open to new ideas. You know, we worked on Ruby for the last 23 years, so we sometimes become narrow-minded, so we need fresh ideas out of the community. So submit any ideas to our issue tracker, bugs.ruby-lang.org. We may not be able to accept all of them, but at least reading new ideas is very refreshing for us.

**Adam Stacoviak:** We'll link your Ruby issue-tracking system up in our show notes. That’s an interesting thing you said there too, because one other question we tend to end with which I'll just ask, because why not...? It’s something you kind of teed up in a way, but feel free to extend it if you like. We ask how can the community support you, support Ruby? So I guess one way to share ideas is through your bug tracker - what other ways, what other things out there are in Ruby that you can point people to? How can people step in and help Ruby see progress?

**Yukihiro Matsumoto:** People consider Ruby as my programming language. It’s designed by me, it’s designed by a person, but in reality Ruby has long been a language designed by the community. Of course I lead them and I make final decisions, but still so many ideas and so many implementations are from the community. So Ruby is our programming language. The ideas, and the use cases, and the pull requests from the community for the language. So if I hadn’t had a community, I couldn’t have made up Ruby. Ruby wouldn’t be Ruby without the community.

**Adam Stacoviak:** There you hear it... If you’re out there and you’re writing Ruby code and you have some influence, or you would like to share some influence back to Ruby, there is Matz’s invitation to say that Ruby wouldn’t be Ruby without you. So if you're listening to this and you're excited about these 23 years of history of this language and the future of this language, then you can be a future Matz. You need to step in and help mruby, step in and help Ruby, or however step in and share what you have back to Ruby and back to the community. Matz, I want to thank you so much for... I know English isn’t your first language and I know that it’s tiring to speak English as not your primary language, but I really appreciate you stepping out like this and sharing your story in your non-native language, because there are so many people out there who really care about you and care about your language, and about the future or programming and really appreciate the influence you've had on it. So to come on this show today and sit here with Jerod and I and share what you have, it’s just an honor to talk to you like this and to get a chance to help you share this beautiful story of Ruby and this awesome history you had yourself.

With that we are going to close up this show, so listeners, thank you so much for listening to this show. If this is your first time listening to this show, \*sad face\*, go to changelog.com/podcast, and subscribe on iTunes or your podcast app. We also have two emails we ship out; one is called Changelog Weekly, so go to changelog.com/weekly. The other one is Changelog Nightly, and obviously that one's nightly, so go to changelog.com/nightly. Those are two awesome emails we ship out, that keep everyone up to date on what's fresh and new in open source. One is editorialized, one is nightly and is sort of the catch-all of everything that's interesting that's happening on GitHub. So if you wanna catch up and stay up, then go and subscribe to those. That is it for the show today, so fellas, let's say goodbye.

**Jerod Santo:** Goodbye. Thanks, Matz!

**Yukihiro Matsumoto:** Bye-bye, thank you for having me!
