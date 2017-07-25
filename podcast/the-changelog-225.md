**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode \#225 and today we're joined by Sandi Metz, author of POODR (Practical Object-Oriented Design in Ruby). She also recently released her latest book, 99 Bottle of OOP with co-author Katrina Owen.

We talked to Sandi about her beginnings on the mainframe, 30+ years of programming experience, the ins and outs of OOP, and we also covered some listener-submitted questions at the end of the show.

We have three sponsors - Heap, Rollbar and Code School.

**Break:** \[\\00:00:49.15\\\]

**Adam Stacoviak:** Alright, we're back. Jerod, a fun show today. This is a show, I think... How long? Sandi Metz, right? We've wanted to have Sandi Metz on the show for years, and finally...

**Jerod Santo:** For always and ever, and also our listeners have pounded us relentlessly, "Get Sandi on! Get Sandi on!"

**Adam Stacoviak:** Yes, and we did.

**Jerod Santo:** Sandi, thanks so much for joining us.

**Sandi Metz:** You guys are just making all that up.

**Adam Stacoviak:** No, complete truth! Hundred percent truth.

**Sandi Metz:** \[laughs\] I'm so happy to be here. Thanks so much for asking me. I wish I could have come sooner, let me say that.

**Adam Stacoviak:** Well, we've been fans of yours, read books of yours, observed you teaching before, and you're just such a wonderful person and an energetic teacher, too. You give us hope in the people that are out there doing what you do.

**Sandi Metz:** Well, you should have hope, right? The world is a much more positive place than sometimes we think. So yeah, I applaud you for having hope. Keep on doing that.

**Adam Stacoviak:** You give us the hope, that's the thing.

**Jerod Santo:** Help us, Sandi Metz! You're our only hope.

**Adam Stacoviak:** Yes, yes!

**Sandi Metz:** Okay, so here's what I would say... \[laughter\] I'm just a \[unintelligible 00:05:31.23\] and if I'm giving you hope, that means we can all give hope to each other. That is a very helpful thing.

**Adam Stacoviak:** That's right. Let's give listeners some hope, then... Let's tell your backstory, because that's always a fun place to start when someone like you comes on a show like this and gets to tell your story and talk about your book, how you teach and all the things you're involved in. Take us back to where you began. You're just like everyone else, right? Are you special, or are you not special?

**Sandi Metz:** I am not special, no. Well, I'm a woman of a certain age, I wrote code every day for 35 years, and I wrote a book - we'll get to that in a second. I got into programming because I was a music student at Florida State University, and it turned out that I was not gonna be able to graduate with a music degree because you had to perform at a certain level and I just wasn't good enough. So I was looking for a job, I was trying to figure out how to get a job. I went to a vo-tech school in - okay, I'll say it! - 1978, and learned to write code while \[unintelligible 00:06:34.15\].

I got a job at a state agency and wrote code on mainframes. When PC's came out in the '80s I distinctly remember feeling quite disdainful of those devices, because I had a mainframe.

**Adam Stacoviak:** You were offended.

**Sandi Metz:** Well, they just seemed like such toys, such a waste of time. I eventually got a little bit of a clue... I mean, I can remember building 8086 from parts that some friend of mine and I figured out what -- like, you need a motherboard and a power supply and a case to put it in; a keyboard and some kind of a tiny, little hard drive. So my life as a programmer has spanned a lot of generations of technology. Somehow I've managed to make the transitions... I'll take a little bit of credit, I'm insanely curious, so I have enjoyed learning the new thing, but also I've just been lucky. I've been in the right place at the right time, in businesses that were making technological transitions themselves.

I've done everything - I've been a network administrator, I've been a DBA, I wrote many years of Smalltalk, I got into Ruby and Ruby on Rails before the 1.0 release...

\[\\00:08:14.22\\\] So I have this breadth of experience, which means many problems fit somewhere in the slot in my -- I have a mental framework of computer programming that many problems fit into somewhere, even if I don't know the... Things don't intimidate me like they once did, just because I have so much context.

**Jerod Santo:** Let's talk about that, because like you said, you wrote a book - this was, I believe 2012 - Practical Object-Oriented Design In Ruby...

**Sandi Metz:** Yes, say it.

**Jerod Santo:** Codename POODR.

**Sandi Metz:** POODR. \[laughs\]

**Jerod Santo:** There it is...

**Sandi Metz:** It's not a bad word. \[laughter\] I have a friend who was four years old at the time who would say "poodr" when he wanted the computer. Think of it that way, it'll make it easy. The poodr. Just imagine your small child.

**Jerod Santo:** There you go. That's how I'm gonna think about it when I say POODR. So you wrote POODR, it took off like gangbusters... This was, like you said, after 35+ years of practical programming experience writing production applications of all shapes and sizes, I'm sure.

**Sandi Metz:** Yeah, everything under the sun.

**Jerod Santo:** So it's one of these overnight successes that were probably 40 years in the making, or what not. This is so different than what we have in many cases today. A programmer gets started, and the first thing she does is writes some blogging software so she can start blogging about the programming. I even encourage such things, so I'm not saying it's a terrible thing to go out there and share novice knowledge, but now you go about speaking and teaching and consulting and writing books, and you have 35 years of doing it before you got started, thereabouts.

**Adam Stacoviak:** At least book-wise, right?

**Jerod Santo:** Yeah, all of your wisdom is that you were in it for so long, and should more people of your experience level be writing and less people of my experience level be writing?

**Sandi Metz:** Well, first of all, I would not recommend the path I took, really. I think the advice that you give - if I understood you correctly - to tell people early on to start writing and sharing the things that they learn, that's probably the best thing to do.

I didn't mean to write a book, I didn't want to write a book. The story about how that book got written is maybe longer than we wanna go into here. The short version is there are people with big publishing houses whose job it is to find authors; I got overheard doing a rant in a hall at at a Rail conference somewhere after a talk, that I thought explains some part of object-oriented programming in an overly complicated way. So I was in the hallway going, "Man, why do people do that?! It just makes everybody feel stupid! It's so simple if you just think of it this way", and someone heard me, who was one of those people on the lookout for folks to write books.

The woman, who is now my editor, started this campaign to get me to write a book. It took her four or five years to get me to agree (her name is Deb). So I'd go to a conference, I would see Deb, Deb would buy me a really expensive meal... \[laughter\]

**Jerod Santo:** I like that.

**Sandi Metz:** \[\\00:12:00.28\\\] I felt so guilty. \[laughs\] Every time I went some place I would get really nice food at a really nice restaurant. So eventually I agreed to write it, but it was partly actually one of the things that... She would trot out reasons I should do it, so everytime I would see her (twice a year) there would be a new reason she would give why I should do the book, and I'm like, "Neah, I'm not gonna write a book. What do I know about writing a book? I'm not gonna write a book! I write e-mail and documentation code, I'm not gonna write a book."

Finally, she told me "You use open source software and you don't give back."

**Jerod Santo:** Ouch!

**Sandi Metz:** Yeah...

**Adam Stacoviak:** Dang! That's below the belt right there.

**Sandi Metz:** Totally.

**Jerod Santo:** \[unintelligible 00:12:46.29\]

**Sandi Metz:** That made me think really hard... It was all the guilt card, right? Guilt about the meals, guilt about the software, so finally I did agree to try to write things down, but I was willfully unprepared because I didn't really have any experience. I mean, I had a lot of experience drawing on whiteboards at my business place, I was always that guy. All the whiteboards in every office had long, complicated explanations of things, pictures that I had drawn in many colors. It was a running joke at Duke University when I worked there.

So it wasn't that I was not used to being the explainer... I'm certainly not the smartest guy in the room, but when I understand things finally, they seem simple. If I get it, I can explain it to anybody. If I have one strength, it's that.

I didn't have any experience writing... If there's value in POODR, we should thank those New York publishing houses, because I would never have done it left to my own devices. Never. That book would not exist, except they made me. They just would not take no for an answer.

**Jerod Santo:** Well, let's set the book aside for a second and just talk about your conference talks, your trainings and these other things. You have a lot to say, you have a lot to give, and people take things that you say, the explanations that you give, and it helps them write better software today and tomorrow and moving forward. Not to take away any credit from you at all, but it's like "Well, maybe it's because she spent 35 years doing this stuff, and she's speaking out of 35+ years of experience." It makes me think maybe us "youngsters" should keep our mouths shut and pay attention to people with all the experience for a little while. Does that resonate with you or not?

**Sandi Metz:** Not at all.

**Jerod Santo:** Okay, why not?

**Sandi Metz:** First of all, you can't assume that just because someone's been writing code for... You know, there's that joke about "you either have ten years of experience, or one year of experience ten times"...

**Jerod Santo:** Right.

**Sandi Metz:** So you have to be a little... My instinctive reaction to what you said was this sense of caution about assuming that people who've been doing this a long time are the people who have the best experience.

**Jerod Santo:** Well said.

**Sandi Metz:** \[\\00:15:33.22\\\] I don't want to make a blanket rule about that, but it's also true... I get a lot of questions from people where they tell me -- I'm always trying to get people to give talks, and it's very common that I'll have a conversation with someone who seems thoughtful and curious and bright and energetic, and I'll say, "Have you ever given a conference talk? It will change your life. If you wanna move your programming life, your visibility to the next level, for whatever reason - to have more opportunity, or for whatever reason you might wanna do that - the first step... You can have a blog, or you can get on stage." And people usually tell me, "Oh, I don't have anything to say." And I ask them - and I'll ask you guys - "Do you know anything now that you didn't know a year ago?" That's not a rhetorical question.

**Adam Stacoviak:** Definitely.

**Jerod Santo:** Sure.

**Sandi Metz:** Okay, so is there any way... Like, if you could go back in time and talk to younger Adam/younger Jerod now - is there anything you could imagine telling them that would have saved you some pain in this last year, because of something you've learned?

**Adam Stacoviak:** Every day I think about that. There's a song about that from Bob Seger.

**Jerod Santo:** How does it go?

**Adam Stacoviak:** I don't know... It's \[unintelligible 00:17:00.17\] that kind of thing, you know?

**Jerod Santo:** Good one.

**Sandi Metz:** So if you have that, younger Adam/younger Jerod would be so grateful of you would get on stage and tell them that. That's the talk you need to give, that's who your audience is. Your audience isn't scary people that you imagine are all brilliant; your audience is the people who are desperate to know the things you know now. And your emotional connection to those people is very generous. How do you feel about younger Adam/younger Jerod? Do you think they're idiots?

**Adam Stacoviak:** Fools. Just fools.

**Jerod Santo:** Handsome.

**Sandi Metz:** Okay, we all think a little bit of that about our past selves, but in general, are they well-meaning fools, or are they slacker fools?

**Adam Stacoviak:** Well-meaning, of course.

**Jerod Santo:** It depends on the thing.

**Sandi Metz:** Yeah! And do you feel sympathetic? Do you feel sympathetic towards them, or do you think they're idiots who don't deserve your help?

**Adam Stacoviak:** Oh, they deserve our help, for sure.

**Sandi Metz:** Yeah. So think about that. Now you're giving a talk full of useful information to an audience to whom you feel very sympathetic.

**Adam Stacoviak:** It changes things.

**Sandi Metz:** It changes everything, and it's a talk you can give. It's a topic you know, and it's an audience that you feel confident about.

**Adam Stacoviak:** On that note then, do you ever get... Does Twitter ever put you down, so to speak? The critics. They seem to be on other platforms too, but in our neck of the woods the programming, software development, open source world seems to camp out on Twitter. Do the critics ever put you down? Do they ever get you down? Because to me, there's a lot of critics on Twitter.

**Sandi Metz:** It's true. Okay...

**Adam Stacoviak:** I love our audience, but there's a lot of critics out there that can really inhibit you from doing what you're saying.

**Sandi Metz:** I have two completely different responses to that. One of them is that -- this is gonna turn into questions again, let me just apologize in advance... So does it mean you're a good person if people say nice things about you on Twitter?

**Adam Stacoviak:** It certainly helps my ego a little bit.

**Sandi Metz:** I'm not asking whether it feels good or not. What I'm asking is does it mean that you are good if they say nice things about you?

**Jerod Santo:** No.

**Adam Stacoviak:** It's probably an indicator. I'm gonna say yes.

**Sandi Metz:** Well, let me ask you this then... Does it mean that you are bad if they say mean things about you? Because you can't have one without...

**Adam Stacoviak:** \[\\00:19:46.10\\\] See, Jerod, that's part of her milling the answer to our question, right? We've talked about that earlier, in the pre-call, prepping for this. I don't know, I guess it shouldn't reflect actually who I am, because I am who I am regardless of the critics. But it's hard... It certainly puts the wall there.

**Sandi Metz:** Well, you see, I'm older. That helps. Being older helps. A fame came to me - fame in a very narrow niche, absolutely - a kind of fame/notoriety that would never have occurred to me that I would ever have, came to me when I was a mature adult, and it was very clear to me from day one that I couldn't get too attached to the nice things that people said about me.

If I gave that meaning, then the bad things have to have meaning, too. If my identity came from what people were saying about me online... So I pretty much ignore it; that's the thing about critics. I pay not attention. I don't much read my press in either direction. So there's that - you can ignore it.

The other thing is - and this, again, is part of being older, and frankly part of being female, I think - there's a way in which I'm everybody's (I don't wanna be your mom, but I could be your) cool aunt. \[laughter\] And people wanna talk to me...

Someone asked me very early on when my life took this abrupt change, they suggested that I had currency, and they challenged me about how I was gonna spend it. Isn't that an interesting idea?

**Adam Stacoviak:** That's very close to the other one that was pivotal for you, which was you do so much with open source, but don't give back.

**Sandi Metz:** Exactly.

**Adam Stacoviak:** It's like an ironic version of that, a variation of that.

**Sandi Metz:** Yeah. First I was a consumer, and then suddenly I got deposits made in this mysterious virtual bank account where I have cred, somehow. I refer to myself -- there's two Sandis: there's me, and there's "internet Sandi." And internet Sandi is the virtual image that people who don't know real Sandi have of me. There's a way in which we're the same person, but there's also ways in which we're not quite the same... Like, internet Sandi is nicer than real Sandi \[laughter\] and it's because I want us to be nice; I wanna have a wonderfully enthusiastic conversation about differences of opinion online. And because I want to have that conversation... But I want that discourse to be civil; I want people who might not ordinarily engage in a boisterous difference of opinion to feel safe and comfortable doing it, because I think we are all made better... Like, if everyone's intentions are good and we have differences of opinion, it means if we understood one another, we would all be better.

So because people want to engage with internet Sandi - and internet Sandi will not talk to you unless you are nice about it, then what happens is the people who wanna have negative discussions with me tend to fall away quickly because I don't engage with them. And the people who really wanna have discussions with me online adopt a matching tone. I'm very careful to be nice, and people match that tone. So I don't have much problem with criticism online because of those two things.

**Jerod Santo:** Yeah. So your generalized advice to the younger person (or to the inexperienced or to whomever you're giving advice to) is that you do have something to give, and that conference talks is a great way of doing that, for the reasons that you've stated, and secondly, ignore the haters.

**Sandi Metz:** Yeah, ignore the haters. Don't engage with the haters.

**Adam Stacoviak:** When you say don't engage, do you mean ignore completely?

**Sandi Metz:** \[\\00:23:57.1\\8\] If someone writes a comment on one of my blog posts that seems critical, I'll look through it and try to... Like, put your ego aside, look through it and see what they're saying, and then I'll do that echo-y thing where I'll respond to their comment and say, "As far as I understand, your concerns are in these two categories." I'll ignore everything that sounds personal and critical, and try to unearth the technical parts and turn the conversation back to technical and never say anything personally critical about them; it's so easy to miscommunicate in writing, especially on Twitter, but certainly even on a comment on a blog. So I try to act as if they're well-intentioned, and I respond to them as if they were well-intentioned. Then if they come back again and they seem snarky, then I don't respond. You don't get two tries with me. I assume your good intentions once, but then I don't know, maybe we should just not be talking.

**Jerod Santo:** That's one of the reasons why I love the audio format so much. Generally speaking, it seems like in text - and I feel like maybe I said this on a recent show, Adam, or maybe it was a pre-call - people tend to take away the benefit of the doubt, they take it. In audio, they give it back, because there's more humanity to the format; the voice inflection... There's just more grace given, I believe, when you speak and are heard, than when you write, when you have to be incredibly clear and precise with words in text; in audio, there's more benefit of doubt.

**Sandi Metz:** If we had a miscommunication between the three of us right here, we could recognize that it had happened in real time and fix it very quickly, and that's much harder to do going back and forth in text.

**Adam Stacoviak:** We're coming up on our first break here soon, Sandi, but before we go into that break, I wanna ask you this question... This is something we wanna hear from you particularly, considering your experience and the overnight success that you are, of course. Someone like you, back in the day, when you said \[unintelligible 00:26:04.19\] what was it that got you? I forget what you said you were going to school for that didn't work - it was music, right? And it wasn't working out...

**Sandi Metz:** Yeah, yeah.

**Adam Stacoviak:** So something wasn't happening there, but then you got kind of tapped into programming - I'm not even sure how; that'd be an interesting story to hear - and I'm curious what was it about programming that got you?

**Sandi Metz:** It was back in the day, right? Nobody had PCs, so the normal human being had no experience with programming, had never written a computer program. It wasn't possible. Hardware didn't exist, for us to mess around with. I went to vo-tech school the very first day; we had an IBM 370, we punched cards; I wrote a ten-line Fortran program, and I was hooked forever. I don't know what that program did, but I remember the feeling of taking \[unintelligible 00:27:04.03\] computer operator, and having him run it and getting back output on that 11/14 green-and-white barred paper. It seemed like a miracle, it was so amazingly cool.

There was something a little magical about it - you know, that whole thing about technology that you don't completely understand, indistinguishable from magic... I was bothered by the apparent magic of it, because I couldn't see how it worked, because it's all electrical somewhere. I eventually got over the magic, but being able to write a program and have it run was fascinating to me. I have written code from that day until now. I actually enjoy it as much today as I did then. I write too little code now, and it's a disappointment to me... Writing books is not nearly as much fun as writing code.

**Adam Stacoviak:** You do a lot of teaching too, right? You have like a traveling class you do?

**Sandi Metz:** \[\\00:28:06.15\\\] Yeah, I teach probably on average maybe once a month. Teaching is exhausting. It's hugely fun, you can imagine... You guys have seen a course. I don't know if the listeners know that we met in person at a course I was teaching... You saw in there - it's not like going and teaching a class where the students wanna ignore you.

**Adam Stacoviak:** It was very interactive. You were part of the class, so to speak. You were leading it, but you were very much entrenched in it. You weren't, by any means, talking at a podium and people were just listening.

**Sandi Metz:** Well, it's that whole about what is your goal? Is it to stand up there and talk, or is it to make it so that people can learn? And there's something so fun about... I have a psychology background, so I did a bunch of research about teaching, and I feel like for that course it almost totally works to help people learn, and it is such a blast.

**Adam Stacoviak:** I think what's interesting too is to reflect back on Deb challenging you with the whole giving back, and look where that question from her got not only you, but all the people you've influenced. That's amazing. That's a big level-up right there.

**Sandi Metz:** You know, it's that whole thing about, like, I can't read my press. I'm grateful... The one thing I will say is that at this stage in my career it is such a pleasure to find that the things that have come to me sort of laboriously over time are things that I can pass on, and that people are finding them useful. I'm deeply pleased to feel as if that is true in my life right now. What a wonderful thing, at this point in my life, to be able to pass all this knowledge on.

**Jerod Santo:** Well, let's take that first break. On the other side, we are going to tap into some of that knowledge, Sandi. We have some OOP-based questions and lots of interesting things, which will lead us into a conversation around your new book, 99 Bottles, which you are co-authoring with Katrina Owen, a friend of this show. So we'll break here and we'll be back with a lot more goodies after this break.

**Break:** \[\\00:30:21.09\\\]

**Jerod Santo:** Alright, we are back with Sandi Metz and we are talking about object-oriented programming, her experience programming, teaching, consulting... Sandi, you've made your recent living and much of your time spent teaching other people how to do object-oriented programming correctly/better. You're kind of an OOP guru at this point. I have a lot of questions about object-oriented programming, and I thought we'd just start off with this one, which is what are the best things in your opinion that OOP has to offer?

**Sandi Metz:** It's a style of programming that lets you model a problem in a virtual world. Human beings seem hard-wired to tell stories about things, and in some ways an object-oriented application is a story about a problem domain. It's not a bunch of unrelated functions, it's a living, breathing entity that has characters and actors and players, and things happen. So there's a way in which I think it has a smaller impedance mismatch between how our brains work and what we have to write down in order to make computer programs run and in order to solve a problem in the computer. It's a better match than many styles of programming.

**Jerod Santo:** Yeah. Just the ability to think about the nouns and the verbs that you're trying to program with, by using them. It's a bicycling thing, so it's bicycles and riders, and these ways that I would naturally think about it is the way that I can code it.

**Sandi Metz:** And not only that, it's a natural fit for all the \[unintelligible 00:35:20.10\] things. One of the huge powers of OO is that I can create things that only exist as thoughts or ideas in the physical world - this world here; I'm gonna make a noise, right? The world of my desk. It's easy to model the world of things, but you can also create a world in which ideas are as real as things. Does that make any sense?

This is an example that comes right out of the new book, and it's my mind because I've been working on this chapter... In a ticket app where you have buyers and tickets, you might also have refunds and purchases. The refund is an idea, but you can make an object for a refund, and that refund object is just as real as the buyer object, in an object-oriented application, even though out in the real world it's not. So being able to model, to create a world where ideas are as real as things is enormously powerful.

**Jerod Santo:** \[\\00:36:26.27\\\] You're taking a thing that's abstract in a real-world scenario and you're making it more real in the programming scenario. When you think about object orientation, is that what you think about...? I know it's become inheritance, and polymorphism and encapsulation and these other things, right? These things around it... If you're gonna be taught OOP in a traditional university, or something, these are the things that they teach you, these pieces of it. But is that the essence?

**Sandi Metz:** I think this is the point... I mean, certainly the people who created the OO languages defined what it means to be an object-oriented language, and originally those definitions would say that it would have these characteristics. It wouldn't be an OO language if it didn't have inheritance, for example.

**Jerod Santo:** Right.

**Sandi Metz:** I think inheritance is just a way to share behavior between objects or to -- actually, that's probably the wrong way to put it. Inheritance is a way to create a specialization of an object; it's really not best to share behavior, but it's a technique, and there's a bunch of techniques. The thing about techniques is you can just learn them. Knowing the techniques is really different from understanding how to combine them in such a way as to make a virtual world of objects that is easily understood, easily changed, and does the job you want it to do.

I'm surprised when I go to teach, at how my vision of what it means to think in an object-oriented way doesn't seem that widely share. When I go to talk to people, my idea about what it means to write OO - it seems like a surprise to people when I explain it to them, and that surprises me.

**Adam Stacoviak:** Are these seasoned programmers or are they new programmers?

**Sandi Metz:** Very often they're seasoned programmers. This does not seem to map in any way to the amount of experience have.

**Jerod Santo:** Right.

**Adam Stacoviak:** Do you think it's the way you think about it that's different? Profound?

**Sandi Metz:** I think part of it is I've made so many mistakes over so many years writing OO that some things could not help but become more \[unintelligible 00:39:07.29\] to me.

**Adam Stacoviak:** You've become a master of the maze.

**Sandi Metz:** Maybe... I think I said this a while ago while we were on air - now it kind of seems simple to me what it means to really be an object. An object is a thing that tries not to know very much and communicates with other things by sending messages. There's a bunch of techniques that we can use to create objects - I can use inheritance, I can use composition, I can follow design patterns, I can use symbol objects in certain ways, but there's this fundamental, deep bias I have...

\[\\00:39:44.13\\\] I recently taught in London with a guy named Tom Stuart (he's the guy who wrote Understanding Computation). I was speaking American English and they were speaking British English, so we had some miscommunications in the class.

There was a point where he interrupted me - because he's a Brit - in front of the class and he told the students, "The thing you have to understand about Sandi is she feels entitled to send a message."

**Jerod Santo:** That's a weird way of putting it...

**Sandi Metz:** Yeah, it made me laugh, because that feeling of entitlement is so deeply embedded in me that I don't even realize I have it.

**Jerod Santo:** Explain what you meant by that - you feel entitled to send a message.

**Sandi Metz:** I was having this rant, because I was showing them some code and it was code where object A was interacting with object B, and it was looking at object B and had if statements that looked at qualities on object B, and then the branches of the if statement supplied behavior because of the result of conditionals where it checked things against object B, and I was having this whole rant about that. It's like, "This is insane. Somebody gave you object B... Why are they giving you an object that you have to look at and then know things about, and then supply a bunch of different behaviors for, that's conditional based on some things. This is crazy. Don't give me an idiot object, just give me something that I can send a message to."

That may sound incomprehensible, and it definitely can be tough to talk about these things without code, so I don't wanna get too deep down that rabbit hole, but there's a way in which... If I go out in the world and I look at other people's code, and I think "Wow, you're a genius, because I could never have made this work." Like dependency-laden conditional bound ... Like huge, tightly coupled masses of code... You have to admire people who are charged with keeping long-lived, constantly maintained applications running, that are using object-oriented languages but that have let a lot of procedural programming techniques creep in over the years. Because those apps are really hard. Oh my gosh... No wonder people hate them. It's just a nightmare.

I really firmly believe that apps can be way simpler than many of the apps I've seen, and I find that it's a surprise to people... I think people get me to come in because they think, "Oh, I have this terrible, ugly app, and Sandi's gonna teach us to understand complexity." I think that's what they think they're buying, and I go in and look at their apps and I'm like, "Wow, this is way too complicated. Let's make this simpler." And it comes at a great relief to people, to see that OO is actually easy and hard.

**Jerod Santo:** It kind of goes back to that Kent Beck statement, "First make the change easy - this may be hard. Then make the easy change."

**Sandi Metz:** Exactly.

**Jerod Santo:** I think that's a brilliant way of distilling that. It's kind of easy to say, hard to do. Although in the statement there's a disclaimer - this will be hard to do. So that leads me to the thought of like -- and I've been doing object-oriented programming for ten years or so, so I've been on the good and the bad of it, and I've written stuff I can't maintain and stuff that seems to be more maintainable, and \[unintelligible 00:43:33.04\]. I've seen a lot of really bad object-oriented code out there, that's procedural and falls into many of the traps that were taught in these different techniques and tools, and you just go out and you start "I'll try this here..." and then you're like, "Oh...." You don't find out until maybe a couple years later that that was a really bad idea. So in many ways, I like Adam's metaphor of the master of the maze, because there's a lot of traps; there's a lot of bad ways of doing it. There's a lot of ways of getting it wrong, or not as well factored as it could be in order to make this maintainable and usable moving forward.

\[\\00:44:11.21\\\] So I guess the question becomes -- and you're one of the masters of the maze, and you've been thinking this way so long, even a way that some of us haven't even got the right way of thinking about it... It's like, maybe the whole paradigm is too hard. Is functional programming the answer? Have you thought about, like "Maybe OO..."

**Sandi Metz:** I think that functional people would tell you that functional is the solution to the problems of OO, but... Okay - really? It's certainly true, I absolutely see that there are some problems that you cannot create for yourself in functional programming, absolutely. Just like there are some problems that you cannot create for yourself in statically-typed OO languages. But if I ask you, "Is it possible to make a mess in a functional programming language?" would you answer yes or no? Is it possible to make a mess?

**Jerod Santo:** I'm sure I can find a way.

**Sandi Metz:** Yeah!

**Jerod Santo:** I'd figure out how, yeah.

**Sandi Metz:** I think it feels like certain languages are good at certain problems, and it behooves us as stewards of our customer's money to pick languages that are good fits for the problems they're asking us to solve. Once we do that, once we pick a language that's suitable, it is our job to write code that makes sense in that language. If the question is "Are some programming paradigms so difficult that people shouldn't use them at all?", maybe that's true. I feel as if we as a technical community have done a terrible job of teaching programmers of all styles of languages how best to write code. I don't really know what the fix for that is...

Let me approach this from two ends. On one side, we've done a terrible job explaining things. How many technical books do you have on your bookshelves? Have you read every technical book that you've bought?

**Jerod Santo:** No.

**Adam Stacoviak:** No.

**Sandi Metz:** Me neither. I mean, most of them I've read now since I finally wrote a book; people think I've read everything, so it forced me to go back and get at least a passing familiarity with many books that people would think... And when I talk, I get people in my classes who have computer science degrees who certainly don't know very much about object-oriented programming. And when I ask them what kind of train they had in college, they say "We learned Java and we learned inheritance."

So there's a failure of teaching - that's one thing. However, the other thing is this thing about \[unintelligible 00:47:17.13\] new ideas. I distinctly remember when I read the Design Patterns book back in the day, no long after it came out, and how I felt like I'd been saved. It was such a relief to see the clarity that they had around categories of problems that occurred over and over again, and I just used those design patterns everywhere; I used them all over my code, in appropriate places.

Same thing when \[unintelligible 00:47:50.07\] when I decided I was gonna get on the testing bandwagon; people who seemed smarter than me were saying it was a good idea, and I went from being a pretty useful, competent programmer who'd get a lot done, to being able to accomplish almost nothing from one day to the next, because I was so bad at writing tests. I was slow and I was bad at writing tests. So my desire to use this new thing that seemed like a good idea caused me harm instead of doing good.

\[\\00:48:28.04\\\] Does this mean that testing is bad, or that design patterns are bad? No. Does it mean that I was terrible at them when I started doing them? Yes. But how else could I have learned? What is the alternative? So one of the things that I'm a firm believer in is not denying people the opportunity to learn from making mistakes. That means that all of us - unless you came out of the egg as knowing all the answers, you're just gonna learn from writing code.

I think there's a lot of OO code out there where people didn't get the chance to stick with it, so that they could learn stuff; they came from procedural, or they have a CS degree where they didn't really learn to understand OO, and then they wrote a bunch of apps that people maintained over a bunch of years and those apps are big and messy and hard to understand. But I'm not convinced that any other programming language under the similar circumstance would not be equally imperfect over a number of years.

I'll say one more thing about this and then I'm gonna shut up. I realize that I have a bias, and it is because people don't call me when things are perfect. It is true that maybe I skew a little bit toward the big, large, unmaintainable OO app - that could be; I'm aware that I need to be careful about that. But I believe that despite that, despite that qualification, I believe this statement is true: anybody who's been in business for ten years, anybody who won, has apps that are a mess. And those pretty apps that you see from the startups, they disappear. It should be considered a triumph; a triumph of persistence and an ability to survive in the marketplace to have big computer applications that are imperfect, because they all are. That's the world we live in - there's a big mess, and our job is to figure out how to deal with it.

**Jerod Santo:** Yeah, absolutely. You talked about what OO is, you're modeling the real world, or you're modeling thoughts in code. The real world is messy, and it's full of edge cases and corner cases, and "except if this happens"... Those kinds of things...

**Sandi Metz:** Miscommunications.

**Jerod Santo:** Yeah, exactly. It almost seems inevitable that a piece of software that maps to the world long enough to watch the world first of all be messy when it was, but also change over time - if that's gonna be a pristine, holy temple, it seems like it's impossible to maintain that over time.

**Adam Stacoviak:** You said it right there, Jerod. If you're writing software modeled after the world, we can all look at the world and know it's messy; the world changes, there's variables, there's brokenness, there's a constant stream of change in our world, so we can only expect any software we write to model the world we live in to be and have similar attributes.

**Sandi Metz:** Yeah, and so our job as programmers isn't to make perfection, it's to deal with imperfection. It's to figure out a way to keep on adding new features, improving old features, meeting our customer's needs in the face of success, which is probably ugly and messy.

\[\\00:52:03.06\\\] In my classes, I tell them that the most fun part of our job, the most challenging part for experienced programmers is transitioning from one big mess into a new design. You wanna have some fun writing code? Go do that. That's a real problem. These are the problems that make you get up in the morning and drink two cups of coffee.

**Jerod Santo:** Right.

**Sandi Metz:** If we judge ourselves by the perfection of our large apps - by the perfection, instead of just by the mere longevity in existence, that's a bad... Like, you are not your code, and feeling like big apps have to be perfect, it's a way just to make yourself feel terrible, because they're just not gonna be. They aren't. They never are. Like I said, I'm a little skewed because of what I see, but I believe it's true, even for people who don't call me.

**Jerod Santo:** Let's talk a little bit about what you've seen out there as a teacher, as a consultant, coming into these large companies that are successful and have OO-based applications that are in different states of disrepair, or perhaps still working but hard to change. What's one mistake - or give us a couple - that most programmers make with regards to production code, that you just see time and time again? We're all making the same mistakes; if you had a couple of those, what would they be?

**Sandi Metz:** I would say two things - one is that everybody's test are killing them. They're absolutely killing them. \[unintelligible 00:53:40.22\] the idea of testing -- I think testing is right. I think TDD is right, and testing is right, and it will save time and money, but it feels like as a community the vast majority of our community hasn't yet tipped over to the point where they're good enough at testing so that tests save them money all the time, instead of costing them money.

Test suites run too long, they interfere with change and they make it hard to write new code. So if we could just get better at testing, it would save a lot of pain. The other thing that's been a thing I've been all over for the last couple of years - I see a lot of huge conditionals in code.

What happens is people in big OO applications, the core ideas in the business are often embodied in huge classes. The ideas around the edge... Often applications have lots and lots of beautifully elegant, single-responsively small classes, and then there'll be one huge five or ten-thousand-line class that is at the center of their domain (user, if you're a Rails app, but anything; whatever the core idea is in the domain).

What has happened is that we get in the situation where the easy things were easy to do, but the hard thing got out of control and then all the code just got put in one class, and then what you have is just a bunch of procedural code in a very large file. So finding a way to commit to writing small objects... And I tell people, "You're not gonna go fix all the fat, huge ones you have now, but as things change, you should make new small objects instead of making big things bigger." So having that one huge class that has a bunch of conditionals in it, where all the important parts of your business somehow are in there, it makes it really hard to move forward.

**Jerod Santo:** \[\\00:55:53.15\\\] Earlier on you said we should try to teach what is a good way to write programs, despite the language, or kind of at a higher level than paradigms or languages. I guess the question would be, if you had to pick what that way is, would you say "make things small?" Would that be your guiding concept, or would you have others?

**Sandi Metz:** Maybe... This is just a personal story about me - very often when I try to write some code, it will start out simple and then it will get ugly and complicated. And sometimes if I have enough insight into the problem, I can make it simple again. So I start out with small things, and then I get this bloat, confusing, intermixing of ideas period, and sometimes on the other side of that I'm back to a bunch of small things, all of which represent a small idea.

It's almost as if we don't have the correct appreciation for the difficulty of simplicity. We love complicated code. We love looking at complicated code, we love writing complicated code, and there's a way in which we value complication and we think highly of people who can produce complicated code. But the truth is, simplicity is harder than complexity very often, and if we valued simplicity more, I think we would reward those who achieved it and we would strive harder to achieve it. And we'd all be better off.

We do this thing where we over-value complexity, when it's just a way to intimidate people very often. To me, when I write complex code, I believe I have failed, in some way, to communicate the idea. It only ought to be as complex as it needs to be, very often less complex than I've made it.

**Jerod Santo:** You leave a comment right above, kind of explaining how you're gonna come back and make this less complex later.

**Sandi Metz:** Yeah... That comment that says, "I'm really sorry..." - the one that starts that way.

**Jerod Santo:** Yeah, apologizing for this... Exactly. I wrote that comment recently. Okay. One last question before our next break... You've spent all these years basically as a nine-to-five software developer. Recently, that's changed. You're now, as we've said, a writer, a speaker, a teacher - you're all these other things. Do you ever fear that you might lose your edge if you're not able to write production code on a regular basis?

**Sandi Metz:** Totally, absolutely. I write way too little code now. It's interesting... I feel like I have not yet lost it. There's some ways in which I understand code better now than I did when I was writing code eight hours a day. Because I have the leisure to think about code. That balances out somewhat, I hope, whatever skill loss I'm having from not writing code eight hours a day. I think that's a great question, and I think it's a thing that I am definitely paying attention to.

**Adam Stacoviak:** Has being a teacher helped ingrain anything that was loose for you, that is now way solid because you've taught it so many times?

**Sandi Metz:** Oh, yeah... Here's the thing - every learner sees the world in a different way, so every idea that seems obvious to me is not at all... If you're just like me, it's easy for me to explain things to you, because you think just like I do. But if you think in a different way, then I have to find some way to reach you with ideas. So the challenge of communicating with people who are different than me has forced me to look at things I thought I understood, and understand them in different ways.

\[\\01:00:08.21\\\] I feel like I have a much broader understanding of really what truth is about programming and what truth is about these ideas, and it's been enormously helpful to me. That has improved my code a lot.

It's easier for me now to look at big, messy blobs of code and say, "Oh, it has this problem. This is the core thing that's wrong with it" in a way that I can see it and I can explain it. That's a result of teaching.

**Adam Stacoviak:** As Jerod said, we are getting close to our next break. When we come back, we're gonna talk about 99 Bottles and kind of go deeper into this rabbit hole, so to speak, that you've opened up for us. Jerod mentioned earlier we haven't read the book, but we've experienced first-hand your teaching, and we kind of extracted a lot of the questions we have around that... So we'll take this break and we'll come back talking about that.

**Break:** \[\\01:00:56.26\\\]

**Adam Stacoviak:** Alright, we're back with Sandi Metz, talking about 99 Bottles of OOP - what an awesome title - A Practical Guide To Writing Cost-Effective, Maintainable and Pleasing Object-Oriented Code. Who came up with that? Was that you all alone? That tagline.

**Sandi Metz:** The tagline? I don't know, probably... I'm the writer of taglines, so it probably was me, though it's hard to say. At this point, the origin of all the best phrases... There's been so much collaboration with Katrina Owen, who's also writing with me on that book, that sometimes... Most of the final writing is done by me, but I don't feel like I can claim any single ideas of my own.

**Adam Stacoviak:** It's a shared thing.

**Sandi Metz:** Yeah.

**Adam Stacoviak:** It's inviting - "a practical guide." Everybody's welcome to this. It's good for anybody. "Writing cost-effective" - that speaks to CTOs, and anybody who's trying to save money with their development team. "Maintainable" - who doesn't want that? And "Pleasing." But why this book? Why now?

**Sandi Metz:** Okay, I'm teaching the course... This book is a \[unintelligible 01:03:12.19\] exercise that I do in classes in my practical object-oriented design course. The course, I am now booking next summer. I'm booked into the summer of 2017. I don't wanna raise prices anymore, because... Like, I have a blue collar background. Everything that we pay in tax seems \[unintelligible 01:03:36.21\] high to me. I am unwilling to raise prices anymore on my course, but it means I'm filtering now by time. And even so, much of the content that I'm teaching is unavailable to most people. No matter how many talks I do, no matter how many private and public classes I teach, the classes are reaching numbers probably in the four digits right now, in the thousands. The talks reach a much broader audience, but even so, there's this huge body of knowledge that is an outgrowth of the course that is completely inaccessible to most people.

\[\\01:04:22.07\\\] I feel a lot of sympathy towards programmers who are like me, who have my background - who are essentially untrained, who learned on the job, who were reliant on other people to take the time to write things down or give talks. So Katrina and I agreed that we would take what's effectively the first two days of the course and write it all down, so that we could sell it to individuals. So that's where the book came from. We meant to make it for - pricing is always an issue, but for a reasonable, reachable amount of money available to anybody who wanted to read it. So that's where it came from.

**Adam Stacoviak:** A lot of people who write books like this, they would think potentially to add some videos to it, or have tiers where you have not only your $49 version, you have maybe an even more affordable version of it, and then an even less affordable version of it, where you've done some videos, and there's some extra goodies or some sample code, or something like that. Why have you chosen just one pricing point for that?

**Sandi Metz:** Pricing is so hard...

**Adam Stacoviak:** Right? It is...

**Sandi Metz:** What is fair? What is right? So we started off being like, "10 dollars is the right price!" Then the years went by... We've been working on this book for two-and-a-half years. We finally decided in the end that we're gonna price it with all the other books in this category \[unintelligible 01:05:55.26\] The people we know who are self-publishing are pricing at this price point. That left us with the moral dilemma, "Okay, if our purported goal is to make this content available to people who can't afford to come to a course, what about people who don't have $49?" So we stole an idea from \[unintelligible 01:06:18.17\], which is the postcard plan. If you send me a postcard, we will e-mail you the book for free. So there are really two prices for the book: there's $49, and there's a postcard.

A postcard is not a cut up section of a box with a first-class stamp on it...

**Jerod Santo:** Yeah, what's the point of it?

**Sandi Metz:** Right. The point is to make people go through a little trouble. Well, there's a couple points. First of all, it's for us to get the coolest postcards on the planet. The next thing is to make enough of a barrier so that it's clear that money is in short enough supply that you would be willing to trade a little bit of time for it.

**Jerod Santo:** I like that.

**Sandi Metz:** Because what we want is a real postcard with a postcard stamp, and then you have to write a little thing on it that says how having this book for free will help you accomplish some good thing in the world. That's what we want.

We've gotten -- I don't know how many yet, because the postcards don't come to me, but it's been hundreds. Maybe 10% of the copies of the book have gone for free to people. We just had a long e-mail thing from some guy actually, because he sent a postcard from somewhere in Eastern Europe, and he wanted to know if it had arrived, because we hadn't mailed him a book yet. And he sent an e-mail, and it was this long narration of the path that his postcard would have had to have traveled geographically. Like, "It went overland from my house to here, and then it got on a boat across the Baltic Sea...", so he was trying to explain how it might be that his postcard might not have actually arrived, but to assure us that he'd sent one, he e-mailed a picture of himself holding the postcard that he mailed us, and we were like "Just send the man a book!" \[laughter\]

**Jerod Santo:** \[\\01:08:26.08\\\] You've worked hard enough.

**Sandi Metz:** Yeah. Like, I've been working on that for two-and-a-half years, and I'm just so delighted to give it to people who can't afford it, but it does seem like not too much to ask that they would go to a little bit of effort. So it was really great.

Another thing that has happened a lot since I self-published that book is that we get... There are so many countries in the world where the exchange rate is bad relative to the U.S., and some authors have policy to sell books at half price to, say, Brazil. But it feels like perilous waters to navigate. Like, does every different country have a different price based on their exchange rate relative to the dollar? So I don't know... So in the end we were like free or $49. Give us the money or send us a postcard.

Finally, some people really do wanna pay something. On the website where you can buy the book, you can buy karma. There's like a 10-dollar karma and a 25-dollar karma, and you can buy them in any combination. So when we send people free copies, we tell them "Your copy is free. Feel no obligation, but if you're one of those people who wanted a discount that we wouldn't give you and it made you send a postcard and get a free book instead, if you want a discount, you can buy..." There's a way for people to give us a part of the price of the book, but they get to decide. I don't decide for them.

**Jerod Santo:** Let's talk about the content of the book.

**Sandi Metz:** Yeah, chapter five is coming out this week.

**Jerod Santo:** According to your website, it's currently at 45,000 words, which to me sounds like a lot. This is all about a single programming problem, which is the name of the book, 99 Bottles; this is a single problem that you give as part of your course. Describe to us the problem and why this makes for a good example case for applying all these different object-oriented ideas to it.

**Sandi Metz:** The problem is 99 Bottle of Beer song, the exact same that you sang on the bus as a child, coming home from school trips. The task is to write code to produce the lyrics to that song. That seems incredibly simple until you try to do it, at which point you discover that there's hidden complexity.

**Jerod Santo:** Give us an example. You probably were just going to...

**Sandi Metz:** Okay, so we'll have to sing a little bit then, right? So the first verse, the verse that starts with "99 bottles" and the verse that starts with "98 bottles" - they're almost identical, it's just the numbers change. You get all the way down to three, "3 bottles of beer on the wall, 3 bottles of beer.

Take one down and pass it around, 2 bottles of beer on the wall." 2 bottles of beer - that's still the same, but listen to the next verse: "2 bottles of beer on the wall, 2 bottles of beer.

Take one down and pass it around, 1 bottle of beer on the wall." So "1 bottle" is singular.

**Jerod Santo:** Right.

**Sandi Metz:** That's not so bad, right? The next verse - the one verse - has a similar problem, but instead of "Take one down" it says, "1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around." Then in the zero verse, instead of taking one down and passing around, you "Go to the store and buy some more." And the zero verse, if you've sung it on the bus you may recall, once you get to "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."

**Jerod Santo:** It goes back up.

**Sandi Metz:** We all think we know that song and we think it's simple, but if you're not careful, you can write a bunch of if-statements.

**Jerod Santo:** \[\\01:12:02.17\\\] \[laughs\] That's the way that I would do it first. It's just like, "Well, there's like seven if's and I'm done."

**Sandi Metz:** Yeah. It turns out the problem has a couple of really great characteristics. One, it's kind of fun. We can all sing in class while we work on it. Two, it's a problem domain that everybody knows; we don't have to teach about bank loans in order to have a class exercise. Three, it seems simple but actually it's sneakily complicated. Those three qualities combine to make it a really useful programming exercise.

There are a number of ways to do it, I wouldn't say that I have the perfect solution to it at all, but the nice thing about the problem is the kinds of difficulties that you get into trying to write code for it, provide a scaffolding to talk about big ideas in object-oriented programming. So it's really easy to talk about the Liskov substitution principle, because there are natural Liskov violations in that song. There comes a time when it's really easy to talk about inheritance vs. composition because we end up in situations where we have to choose what we're gonna do.

It's easy to talk about mutability. There's a place in the song where having immutable objects is possible, but you could mutate them instead. What does it mean to do that? We're an object-oriented language, but immutability is a big idea that we should freely steal from the functional people.

The goal of the book isn't to write the perfect solution to the 99 Bottles of Beer problem. The goal of the book is to take a problem that everybody knows, that you don't need any extra brain power to understand the domain, and use that problem to explain ideas in OO. And it's pretty perfect for that.

**Jerod Santo:** Very cool. We'll take the last ten minutes or so and we're gonna give you some rapid-fire questions - some are listener questions, some are ours, if you're cool with that. The first one is actually related to the book, so I'm gonna ask that one first. Somebody would like to hear from you about the overall experience of writing the book - can you give us some insight there?

**Sandi Metz:** I find writing torturous, and yet I'm weirdly compelled to do it. I'm really happy when it's done, but I hate doing it. Mostly what we do is we write all the coding samples, we do all the code examples, then I pseudo-write around it, and then I go back and laboriously write. I'm a little dyslexic, so very often I'll write paragraphs and then read them out loud until I like the way they sound. To do a chapter that way takes me about -- if I work on nothing else, if I'm not traveling or teaching or working on a conference talk, that's about a two-month process. Then I have a professional editor. Chapter five is gonna come out this week, I'm just finishing the third round of professional editing for it. So writing is hard.

Other people are faster. I'm keenly aware that other people write faster than I do, but I've just given up trying to be faster. I'm what I am. It hurts.

**Jerod Santo:** Was this one of those books that are open beta, where you're writing it in public, or did you keep it behind the fence and then release it? How did that go?

**Sandi Metz:** I talked to a number of people... It took a while to write it and people knew we were writing it, so we kept getting bugged and bugged. Finally, I talked to a bunch of people about when can I release a beta, when is it ethical to release a beta, because recently a beta means taking people's money, like selling the beta. Someone gave me great criteria; they said, "What you give people has to be enough so that if you got hit by a truck and never gave them another word you would feel that it was worth it." That made it pretty obvious that the book would have through chapter four. Chapters one through four had to be done, which is that 45,000 words; it's 150-180-page 8,5/11 pdf right now. It's big. It's almost as big as POODR, in the beta.

\[\\01:16:23.07\\\] There was a way in which I slightly regret it... I'm always over-optimistic about how much writing I can get done in a period of time, but it just so surprised me that people bought it. \[laughter\] Releasing beta, and a bunch of people bought it - that day... Until then I felt this enormous pressure to get the rest of the writing done, but I am such a slow writer that feeling that pressure did not speed up my writing at all, it just made me feel pressure while I was writing.

**Jerod Santo:** That actually leads us directly into the next question, which is "Is there a lot of pressure to be Sandi Metz?"

**Sandi Metz:** Well again, there's internet Sandi and there's the real Sandi. I feel some -- I wouldn't say pressure. As internet Sandi, I feel some obligation to model the face I want to present to our community. It helps me be nice, even if I feel tired.

The pressure I feel is I wanna... Like, I would love to see more diversity in our community, and part of having a broad range of different kinds of people - ages, gender, races, ethnic backgrounds - means... Having the community have a lot of representation in it partly means if you come to our community and you're not part of a well-represented group, it can be easy to feel like there's no place for you. That mission is near and dear to my heart, and so part of the reason I go out is because I represent a little bit of a narrow demographic in our community. I'm older, I'm female, I'm certainly white, I'm Caucasian, so that puts me right in the middle of a big broad demographic group. So I find that I feel an obligation to respond maybe to requests, to go out and be internet Sandi for people. It's always a challenge to know, "How much can I stay home and rest? How much should I go do those things, even if I'd rather stay home and play with the dog?"

I can whine a little bit about the pressure, the travel gets wearing and all that, but I love my life. I love our community. If you're met and you've come at the end of your long life, you can feel the kind regard of the people in our community. It's a wonderful thing. I feel an obligation to live up to it, but I wouldn't really call it pressure.

**Jerod Santo:** Okay. Next one - I'll quote this one, because I like the way he wrote it:

"I'd be keen to know if a person like Sandi ever gets wowed by development trends or falls victim to nerd hype."

**Sandi Metz:** Yeah, I think that's a whole \[unintelligible 01:19:42.08\] "Wow, that's so cool! I'm gonna do that. They must be right!" and two weeks later you're like, "What a mess! Why did I do this? I hate myself." If we had perfect foresight we would write perfect code, but it's a matter of, you know, you just do the best you can with what you have. And don't be attached to your code. As long as I can walk away from mistakes and acknowledge I made them, then things are pretty painless. It's only when I hold on to a bad idea that I regret.

**Adam Stacoviak:** \[\\01:20:14.15\\\] What's a good example of nerd hype, Jerod?

**Jerod Santo:** Well, I mean there's lots of different examples. What would be a good example of nerd hype - perhaps in the Javascript world you'd have a new framework or animation type of a thing, and now you're gonna follow that rabbithole for a little while, and then come back. I don't know. What do you think, Adam? What's a good nerd hype example?

**Adam Stacoviak:** I'd probably say the same... Something that's made open source move so fast, it's difficult to keep up, and I would think that the next new thing could be not so much nerd hype, but it could be easy to always wanna be on the train, you know? Because it's exciting.

**Jerod Santo:** Well, one thing that we know Sandi is interested by at least is Elm. Sandi, you told us you have a tab open on a browser that you haven't quite got to yet, which is kind of a Learn Elm tutorial. So whether it's hype or a trend, or if it's something that's gonna last, at least that has caught your attention.

**Sandi Metz:** Totally. I mean, I know that Javascript people often feel like they don't get enough respect from Elixir, or Go... There's some pecking order of programming languages, and Javascript is not at the top. That seems completely wrong to me. Javascript might take over the world. We might all regret not being really good at Javascript. It's been on my list for a while to get better at Javascript, but Elm is... Then I get to combine my desire to learn something about functional programming with the desire to get a little more in the Javascript space. What's not to like about that combination? It's a play, toy project for me, but I could easily imagine having that move more into big-time apps.

**Jerod Santo:** I just wanna thank Brian Douglas for that one. He's a Changelog member and I think he wouldn't mind us mentioning him by name... So Brian, thanks for that question. Next one for you - we've got two more questions and we're getting close with the time, so here it is: Is 99 Bottles your swan song? Are you ready to ride off into the sunset, or do you have more to give to the software community?

**Sandi Metz:** \[laughter\] I don't know... My goodness.

**Adam Stacoviak:** Swan song... That's hilarious.

**Sandi Metz:** Here's the thing - everything you know seems simple and obvious. The content that I create that I tell other people is an outgrowth of having conversations with people where they're like, "Wow, you're a genius" and it's about things that are comfortably sort of already in my brain, so figuring out things that I've learned in my long life that are second nature to me now, that other people are interested in hearing about - that's what triggers these things. That's what triggered teaching. It seemed obvious to me, but clearly it was useful to other people. So who knows... I cannot even predict what's gonna happen next.

**Adam Stacoviak:** So your plan is not for this to be your swan song.

**Sandi Metz:** I'm not done. How can we be done? We're not done. There's tons of code left to write.

**Adam Stacoviak:** That's right. We mentioned earlier - I think it was in the pre-call - that you've been named as the hero of many people who've been on this show before; I'm gonna get you a list. We like to ask anybody who comes on this show, especially someone like you, you've had to have some influencers throughout your life... Who is an influencer, programming hero, whatever you wanna call it - who's that person or persons to you? Who's your hero?

**Sandi Metz:** \[\\01:23:48.13\\\] Okay, I'm gonna mention the name of someone that no one listening could possibly know. I worked for Sperry Univac; back in the day I was a young pup, and there was a grizzled senior system guy who was probably 30 years old (he was way older than me). He was such a great teacher... He kind of scared me to death, but he was incredibly gentle with me in a gruff sort of way, and he made me feel as if I had a place in this community. His name is Rich Warkentin - there's no way he'll ever hear this. There's tons of people now who are wonderful people who I could mention, but the difference that was made in my life was made when I was a young programmer.

We all have that obligation to treat kindly the tender youths, right? That's a lesson for you guys, and for everyone who's listening. The kids are who need us, not the grown-ups.

**Adam Stacoviak:** So your hero is someone who influenced you young on, and helped shape your career.

**Sandi Metz:** Right... Influenced a lot of people. And there's a lot of heroes like that. What I want is everyone to be that kind of hero.

**Adam Stacoviak:** I think we all aspire to be, that's for sure. And it's nice when we get a chance to be. I think if you do get a chance to be, honor that, and do it well.

Alright, Sandi, we are out of time with you. I know you've got a hard stop, so I wanna mention your book URL on the air, so that people can go and check this out: sandimetz.com/99bottles. We'll have that in the show notes, so go check that out. Any closing thoughts from you whatsoever, before letting you go?

**Sandi Metz:** This has been such a treat, thank you both.

**Adam Stacoviak:** Listeners, thank you so much for tuning in. Sandi, thank you for your time and all the work that you're giving back, thanks to Deb - thank you, Deb! - for that question and that guilt trip that you put Sandi on \[laughter\] because we're riding the ride of Sandi Metz, and it's because of your question and your perseverance. Thank you very much! That's it for this show, so let's say goodbye.

**Sandi Metz:** Goodbye.

**Jerod Santo:** Goodbye, thanks Sandi!

**Sandi Metz:** Thank you, guys.
