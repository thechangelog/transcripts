**Natalie Pistunovich:** Hey, everyone. Good evening/morning/afternoon, wherever you're joining from. Today we have people joining from all over the place, so we're definitely celebrating all hours of the day... And this episode is here to talk about Go code pop quizzes. We have lots of interesting guests from -- it's really fun to say "from around the world", but this is really happening now, so we have Miki joining from Israel... What time is it for you, Miki?

**Miki Tebeka:** Hello. It's 11:10 PM.

**Natalie Pistunovich:** Cool. Did you have coffee recently?

**Miki Tebeka:** No, but I'm good.

**Natalie Pistunovich:** That's good. It's probably better not to have coffee so close to sleep.

**Miki Tebeka:** Oh, it doesn't affect me. I can drink a cup of coffee and go right away to sleep.

**Natalie Pistunovich:** Really? And we have Dave joining us from Syndey. Dave, good morning.

**Dave Cheney:** Good morning. Hello.

**Natalie Pistunovich:** You're already in the future.

**Dave Cheney:** Yup, it's 6:10 in the morning here, so we're just starting our day.

**Natalie Pistunovich:** And you're in tomorrow. \[laughs\] You probably never heard that, sorry. I do get excited by that. I don't have too many colleagues in Australia. I'm joining from Berlin. Here it's 10 PM. Jon, what time is it for you?

**Jon Calhoun:** It is 4:10 PM. I'm on the East Coast of the U.S, so New York time, essentially. Dave, I imagine your teammates who aren't in Australia don't love that. Natalie is loving that you're in a different day, but anybody trying to schedule a meeting with you is like "This is annoying."

**Dave Cheney:** Yeah. If you're on the East Coast it's not great to talk to Australians, especially in this set of timezones. It's okay to the West Coast, like to California and Seattle, especially in the winter for Americans... But yeah, right now it's not super-awesome.

**Jon Calhoun:** When Natalie was telling me the time for this, I was trying to confirm three times... Because she told me your date and time first, and I'm like "Alright, I've gotta make sure I have this right here, because I'm not sure." It makes me double-check everything.

**Natalie Pistunovich:** \[04:04\] Yeah, I think throughout this remote year I don't know if I had a meeting where each person came from a different timezone. There were groups of people in different timezones, or everybody somewhere, and I'm here... Yeah.

**Miki Tebeka:** When you work in big international companies, that happens a lot. All these timezones and finding the right time for a meeting is so challenging. In Israel also the weekend is different, so less opportunities to actually meet people.

**Natalie Pistunovich:** Yeah, somebody spotted your dog, Jon.

**Jon Calhoun:** Yes, that is a dog behind me. I'm hoping my dog is quiet. If you see me frantically hitting the Mute button, that's what's going on.

**Natalie Pistunovich:** So our quick introduction round... Dave, you are a Gopher working at GitHub.

**Dave Cheney:** Yes, I've been at GitHub for just over a year now. GitHub is a very large place, it's a very big service; a lot of the backend stuff is written in Go. A lot of things that you interact with daily that aren't very obvious above the waterline... For example, I maintain the service that manages Git commit signing. Whenever you see a thing that is verified on GitHub, part of that traffic went to my service to actually check "Are your commits verified?" We have a lot of Gophers, perhaps some on the call here. A lot of Gophers at GitHub, again, doing a lot of backendy things.

**Natalie Pistunovich:** Cool. And you also are a master of pop quizzes in Go. You're doing so many of those on Twitter, and conferences, and other places.

**Miki Tebeka:** Yeah, the last one got me. \[laughter\]

**Dave Cheney:** Well, I think the thing that is most pleasing is that I'm not the only one who's doing them. That's like the -- you know you're onto a winner when other people wanna get into the game. They're inspired to take and enhance and take the idea further. This is super-exciting.

**Natalie Pistunovich:** Miki, you describe yourself as an old dog that learns new tricks from time to time.

**Miki Tebeka:** Exactly.

**Natalie Pistunovich:** Does that include also pop quizzes?

**Miki Tebeka:** Yeah, definitely. I like quizzes in general, and turning them into a tool of teaching, and several books - it's something new that I picked up. I am old in technology; I am 51, which is ancient, I think... I started when I was 16, I think; somewhere around that. And professionally, 25 years. And I always try to learn. That's what survives me still now.

**Natalie Pistunovich:** That's really cool. Jon, you're on mute. Does it mean the dog is barking now? I wanted to ask you about teaching, and your thoughts about pop quizzes.

**Jon Calhoun:** No, he's not barking. I mean, I like pop quizzes... It's kind of interesting, because a lot of the ones I see - which we'll probably get into - tend to be showing something that's very unique about the language... Which is always fun to see how many people that think they're experts in something really understand what's gonna happen in some really obscure case... And I think, Dave, you've definitely gotten everybody at some point in time. I don't think it's possible that anyone's answered them all... I'm honestly curious if you knew the answer to all of them before you ran them...

**Dave Cheney:** Oh, absolutely not. I'm sure we'll get into this, but if you're looking for "What's the inspiration?", it's usually when I was like "Well, I didn't know that" or "I wasn't sure", and then naturally from that follows "Well, I wonder if anybody else knows this."

**Miki Tebeka:** Yeah, for me it's usually bugs that I make, and then I start wondering "Why? Why did this happen? I didn't expect that." And then you try to figure it out, and then if you move it to teaching and you try to distill it, then you hit this point where you get the really short example that people like, and it's really confusing.

**Natalie Pistunovich:** So it sounds like you're not hunting after topics, but you just come across things and then develop that into something interesting.

**Miki Tebeka:** Oh, I'm really good at writing bugs, so I have a lot of opportunities to learn from them. I'm not particular... I think sometimes it's interesting for me to see what happens... A lot of times students asked the weirdest questions about "What would happen if we did this?" and "You know, I've never done that." And then you try it out, and "Oh. That's interesting." It's a lot coming from my students as well.

**Jon Calhoun:** \[08:00\] Students are always really fun, because when they're not programmers, they don't think about things the same way somebody who's been programming for a while thinks. And when they ask those questions, it's always enlightening. You're like, "Oh, maybe I should talk to people who aren't programmers more often to get their insights as to what happens."

**Dave Cheney:** I think a lot of the time as technologists, or especially as the person that writes the program or that works very closely in the area, you can kind of develop blinders or blinkers that protect you or guide you down a reasonable/sensible path.

I saw a tweet on Twitter a couple days ago - kind of like a meme thing, of a user trying your product for the first time, and it's the kind of cartoon guy trying to drink water out of a glass, and he starts by licking the bottom of the glass, and then kind of tapping it with his chin, things like that... But the point is kind of made - we know the right way to do something, so it seems unnatural to kind of try and do it the wrong way... But yet, if you introduce that to somebody new, they have no idea how to do it.

And if you think back to very early when desktop computing -- think back to the '80s and '90s when I was growing up, there was a big push to do a thing called desktop skills, or typing skills, which was basically "Do you know how to use Microsoft Word?" Because people were so scared they could break a computer. If you type the wrong thing, you could break your computer. I'm sure, Miki, you know this from teaching your students - the first thing people are worried about is "If I make a syntax error, is that gonna break it? Is the computer gonna be somehow broken? The first syntax error and it's broken completely?" And one of the hardest things about teaching is to teach people it's okay to make mistakes; if the program doesn't compile, that's not a big deal. Congratulations, we just get to fix it. Nothing is terribly broken or ruined. But that was very much a thing of kind of introducing computers to people starting high school and primary school here in Australia, just so that they would be more familiar with them.

Again, it's something we take for granted, that the children -- I remember someone telling me that their young child tried to tap on the television screen. It seemed perfectly reasonable, because every other screen they'd ever seen you could tap on, so why couldn't you tap on the TV? And then compare that to maybe yourself or your parents, who just don't really wanna use a computer, because they're worried they could break it.

So the idea about familiarizing people, and saying "It's okay to make mistakes" is the first hurdle of teaching anything.

**Miki Tebeka:** Yeah. I'm still afraid to break my computer every time I use it, but I think I'm getting better at it... And I totally agree, this fear -- and this is what is fun about programming, is that you can make mistakes as much as you want, and most of the time, the cost of error is almost nothing. So you just can play around with it... And Go is a great language for that, because of this fast cycle of go run, and try it out, and go run again... It's really easy to just try things out. Like a quiz - I just copy and paste from Twitter, and do a go run, and see "Oh, I got it wrong again." But it's really easy to try it out.

There's a joke that computers are the thing in history that allows you to make mistakes the fastest, with the exception of tequila and handguns. So you should use that and actually learn from that.

**Natalie Pistunovich:** Yeah, it's a very interesting point, Dave, that you said, to include in the learning process that you should be making mistakes, you should be breaking things. That's definitely not obvious, and can open a whole discussion on if you use a grading system do you encourage that, versus if you do things like projects.

**Miki Tebeka:** It's true not just for teaching, by the way. A lot of companies also -- if you have an atmosphere where it's okay to make mistakes, these companies usually do better than people who are always worried about "What will happen if I do something wrong?" So I totally agree with that.

**Natalie Pistunovich:** Yeah. I wonder if a pop quiz is a quick way of encouraging that... Because you basically tell people "Take a guess, try. You might get it wrong", but you do encourage them to do that.

**Jon Calhoun:** \[12:01\] I'd say pop quizzes help, because every pop quiz you can just run it. There's no big downside of "Oh, I got this wrong and the whole world is gonna know." Even if you get it wrong, you're usually within a -- a lot of people have already gotten it wrong, so you're not the only one getting it wrong... And then on top of that, you can go run it, and be like "Oh, now I see what's going on." You might not understand why that's happening...

**Dave Cheney:** So I probably need to give a little bit of history... You asked, Natalie, where do some of these ideas come from... And a lot of them come from bugs, or mistakes that I didn't understand, or teaching opportunities... But the original idea, the original genesis for this was I was reading the Go spec - and this makes me sound like the giantest nerd ever, because I read the spec a lot; a lot of the quizzes come from it, so I am a giant nerd... And just in reading through that, I was like "Oh, the built-in copy operation, the copy function returns a number. Well, I guess that makes sense. copy returns how many bytes it has copied so that makes sense." But this is going back so early in the days of Go... Before we had append, we actually had to use copy to grow and make new slices. Everyone would write their own append function; this is going back into the prehistoric days of Go.

So back then, copy was used a lot more, but now that we have append, it's used very infrequently, except if you're doing slice tricks. So I thought "Well, most of the time I barely remember copy is there; I wonder how many people also remember that it returns a number." So I thought "How could I show this to people or remind people about this in a way that would get them a laugh?" So that was the idea for the quiz.

The other piece, which was it used to be much harder, but now thankfully tweets are longer, was I set myself the challenge, because I like this idea of -- Rich Hickey has this great talk on constraints. And to not spoil the whole thing, it says that composers, when they're starting out, will set themselves a bunch of constraints, like "I'm only gonna use this key" or "I'm gonna build this around a particular instrument." Why? Well, just to give themselves limitations; otherwise you have this impossible blank canvas.

So rather than just linking to the playground or the code and a runnable sample it has to fit in a tweet. And that usually involved quite a lot of brutalism to the syntax, and kind of removing all the white space to make it fit in a tweet. That was kind of the constraint. "Can you ask this question in a way that fits in a tweet?" And along the way, tweets got to be bigger, we've got quizzes, the questionnaire things, which kind of make it very easy, and also don't count against your word count, which is great, to give a set of predefined answers. But that was kind of like the genus for that.

And the last thing about the quiz - I remember I had a conversation over Twitter with Peter Bourgon... I think I tweeted once "Golang top tip", something like that. And he said "Why is it a top tip?" I said "Well, because it was a pro tip. Not everyone will be able to use it." The idea of making a pop quiz is like "Don't make it only for experts. Make it so anyone can try." So if you wanna think of the ground rules for how to do a Twitter Golang pop quiz, those are they. It had to fit in a tweet.

The other reason about not using the playground is - well, it kind of makes it too easy to get the answer. Like, you go to that playground link, and instead of having to think, you just push the Run button and it'll tell you the answer. So occasionally, people are like "Oh, why can't you post a link to the playground?" or "I need a bot to automatically copy this into the playground." I'm like, if you did that, where would the challenge be? That's kind of like the ground rules for how this whole shebang started.

**Jon Calhoun:** So does that mean that if we're using screenshots of code, we're cheating?

**Dave Cheney:** I don't claim proprietary over this, I don't claim that this is my idea. It's certainly not. The actual idea for this came from -- 20 years ago there was a wonderful book by Josh Bloch called Java Puzzles. It's one of my favorites. And Miki knows this story. It was my favorite because it had like 50 questions in the kind of classic, pop quiz style. "What does this program print? Does this program compile?" Very simple, short programs. And then a much larger description afterwards which said "Well, actually, no, and this might be surprising because..." and then gave the explanation. And for me it wasn't so much about getting 50 out of 50 on these quizzes, it was about what you learned from like "Whoa, that was surprising. Why is that?"

\[16:16\] So the pop quiz format has mutated from just a short tweet... I'll give you some examples. At the London Gophers they have a question for the audience between the talks. At the end of the talk they put a slide up, all people are on break and then you come back and you -- I think they do like a show of hands, and then the person who asked the question has to explain "Well, if you thought that, here's the answer, and here's why." The important part is giving the explanation.

I've seen some examples at some of the meetups that the Japanese Gophers have... TanTan had three questions that they asked in their after-party, and again, some are kind of educational, others are just downright mean... So I've taken some of the pop quizzes that I like the most and I kind of redid them into a 20-minute presentation, because it was a good thing to bring to meetups if I was travelling, or something like that. It's always a good party filler to have some questions for the audience to warm people up.

In that format you have a slide with the question, and then you can have a slide with the answer. So it's not like a fixed thing, it's not like there's a way to do it right or wrongly. To me, the value is always not to be true and strict to the form, it's the bit that comes after asking the question and saying "Oh. Well, I wasn't expecting that answer. Why is that?" That's probably one thing that the Twitter form lacks... Partially because like that was yesterday's tweet; you lose interest in it. And I kind of do recognize that I'd leave the "Why is the answer 3?" for example, as a kind of like "Well, you have to go and figure that out yourself." Perhaps it could be more effective if I did have more follow-through.

But generally, the kind of genus for asking a question comes quite spontaneously, so I'm like "That'll fit in a tweet. I can make that into a pop quiz."

**Jon Calhoun:** So on a related note, I guess... When you're making these quizzes, you said the unexpected answers, part of the appeal is it catches people off-guard and there's something new that they're gonna learn. Do you ever worry that you post so many of those that people just expect the unexpected with you? I mean, granted, they should be learning regardless, so it's useful, but I don't know if -- do you ever try to throw ones in that are more obvious, just to see if people are actually paying attention?

**Dave Cheney:** Yeah, if there is an aspect that people feel that they're cruel, or unfair, or attempting to catch people - that's a personal failing on me, not on the idea of encouraging people to learn a subject more deeply through asking simple questions. That's definitely on me. To not take all of the blame, to let you have four answers, so generally you put a wringer in there... I do try to make them not too unfair. But in saying that, almost always if you give "Doesn't compile" or panics at runtime, some 10%-15% of people click on it, maybe because they think "Well, actually that's invalid syntax", or something like that.

There was a pop quiz a couple of weeks ago when I found out that there's a hexadecimal form of floating point literals. I'm sure it has the same utility as complex numbers have in Go. I'm sure I'm gonna get some hatemail for that, but there's a hexadecimal form of 01.5e-2 it's some hexadecimal form. And of course, when it's hexadecimal, you can't use e, because e is part of the character set for hex, so you have to use p. So it just looks like line noise.

So when I asked that question, it probably is quite reasonable to make one of the answers "Well, this doesn't compile, because it's line noise. That' snot valid syntax." But perhaps one of the failings to a quiz thing is that you don't get to have another go. You click one answer and you can't ever change your mind. But hopefully -- people say "Why would you ask a question where it clearly looks like line noise on the page and one of the answers is "Doesn't compile"? Isn't that too easy?" So perhaps it is a little bit of that in structuring the question.

\[20:03\] I'll give you another example... My friend TanTan from Japan, one of the pop quizzes he wrote for his meetup - it was two pages worth of code, and you needed to trace a variable from a function, and then it went into a map, and then he looked up the key, but it was by the wrong value, so you would get a zero value out of the map, and you returned that from a function, but actually used the name return... It actually turned out that none of that mattered, because he deliberately missed space in the go embed declaration, to make the quiz as impossible as possible. And I'll find a link and I'll put it in the show notes... It actually included itself, so it used go embed to embed the source code itself, and then used the length of the source code as an input to the function, and then all of this.

I went through all the work of trying to figure out what would this return... It eventually boils down to true or false. The reality is that's not really a quiz. That's kind of like just doing the algorithm long-hand. If you look further and you ask "Why is someone asking this question?" it's probably because there is a more straightforward answer, and the straightforward answer was that he'd missed off -- he deliberately left the space out of go embed so that the declaration didn't do anything, so the length of the file was pointless, because he never embedded the file.

So I think part of asking the question -- that seemed a little bit unfair, but you have to think, it's usually not the obvious answer. Take today's quiz, for example... What is the length of the string composed of the rune -1? And the answer is 1, 2 and 3. It turns out the answer is 3 for all the people who are still working it out, and the reason it's 3 is because in the spec how I came across this was when you're iterating over a string - and we know a string is made up of UTF-encoded characters - you iterate over it not byte-byte-byte, rune by rune. So you can come into a situation where you have invalid UTF-8. In that case, the spec clearly says that Go will return the broken rune, or something like that. It's Unicode FFFD. So the only thing you need to remember about that is to encode 16 bits in Unicode you actually need three characters.

So one of the answers there was "It doesn't compile." That would seem to be the obvious one. When you have var rune = -1 you might be thinking "Well, that doesn't compile, because that doesn't make any sense to have a character that is negative. That doesn't make any sense." But if you think a little bit further and say "Well, wouldn't that be the easy answer?" All of those quizzes, none of them compile. That's the easy answer. As Francesc says, you should write better code. Don't write code like that." But if you would have asked the question a little bit deeper and say "Well, if this code did compile, how would that propagate through?" That could potentially lead you to a different answer.

**Break:** \[22:35\]

**Miki Tebeka:** I think the goal of these quizzes is to teach. It's not to show just dark corners of the language that, you know, "I did a stupid bug and that's it" or "There is something really weird going on." I think especially in Go there's a lot of thought behind everything in the language. So every time you see weird behavior, there's usually a justification for that, and you need to dig out why is that for finding out.

**Dave Cheney:** \[24:01\] That's precisely it.

**Miki Tebeka:** So I always say, "Does it compile?", maybe, but probably there's a deeper reason for why it's showing this quiz, so we can learn from it.

**Dave Cheney:** Yeah. I think in the past I probably have put a few of those kind of like -- those answers that trick people. Because already in that form you're kind of squeezing it into a tweet, so you're kind of mangling the syntax a little bit, and you might be collapsing things onto a few lines, so you'll say "A-ha! The answer is it actually doesn't compile", because I very trickily instead of a space put that Unicode non-breaking space, and "Ha-ha! I got you!" Like, "Yeah, you're the smartest quiz asker. No one got the right answer. Congratulations." But that wasn't very fair. Generally, I include that answer as like "It's one of the set of wrong answers." It would be unfair to ask...

Also, what would someone learn from that, other than "Here's how to write mangled source code that might fool somebody?" I think that defeats the purpose of pop quizzes as an educational tool. And to the reader, if we dismiss the easy, obvious ones of like "Oh, that doesn't work" or "That could never work" - once you dismiss that, you're left with a much more profound answer of "Well, what if that does work? I didn't know that. What else don't I know about this part of the language?"

The \[unintelligible 00:25:14.04\] I think is important because it's something that we do quite rarely; it's extremely common to use full ranging over byte slices for most slices, but we do also know that a string is a slice, and using a full range over a string has some surprising properties, which because I think most people don't use it very often, would again -- like, where things are surprising, those are where bugs lurk. When you iterate over a string, the index doesn't move by single increments every time; it moves to the start of each character encoded as UTF-8. So that can be one, it can be two, it can be three, it can be up to four indexes into the string.

I remember in that compiler, there wasn't a bug, it was a change I tried to make, and someone's like "Ha-ha! No. You've missed that", for exactly that case that there was a cast from a byte slice to a string, and I'm like "Why are we doing that? That's wasteful." And the answer was it was so that the code moved through the string at the start of each rune in the string, rather than treating it as just like a byte slice of Unicode data.

So it's one of these things which come up very rarely, and you kind of need to know them, because even though it's an unfamiliar part of Go, like for example maybe breaking out of a loop to a label, like you have a loop inside a loop, or a switch inside of a loop - you have to remember that break breaks to the inner-most scope... So things like that, which are uncommon and are great examples for writing quizzes. They're also important because occasionally you're gonna come up against them in code that someone else wrote... So what could be distilled into a teasing tweet can also be a bug that you're gonna have to debug in somebody else's code.

**Miki Tebeka:** Or your own.

**Dave Cheney:** Or your own, if you're being super-smart. Yes.

**Miki Tebeka:** \[laughs\] I think what's -- you mentioned about Unicode, which I've found a really great source for quizzes, is both Unicodes and time, and timezones, is that it's across languages. So every language has these things. So following your quizzes, when I got bored during covid I wrote a Go quiz book, and then a Python quiz book... And both of them, the section about Unicode and timezones is roughly the same questions and the same answers... Because it's something you should know regardless.

**Dave Cheney:** Yeah. And definitely, if you're coming from another language, it's an area where languages do differ and they do innovate... Certainly if you're coming from Java. In Go, we just take as kind of a statement of fact all the source code is UTF-8. At our local Go meetup a couple years ago Rob Pike was in the audience, and he reminded me when I said something like -- I had a quiz that had an emoji, and "Is this a valid identifier?" You have to remember that -- so it was the frowning face emoji, or the thinking face emoji... The answer is it's not an identifier because it's not a letter. Because Unicode says that emoji is not a letter. But what he reminded me was that -- I was trying to make some example of like the bytes, it's three bytes, and he says "No, no, no. Your editor has let you type the frowning face in the source because the source code is UTF-8. There's no interpreting it. It literally is UTF-8."

\[28:17\] And this is something which I think we kind of -- perhaps Go programmers take for granted, or perhaps programmers using languages of Go's pedigree take for granted, because UTF-8 is the assumed; it's the default text format. We've gone away from code pages, and all those 7-bit ASCII things that we had in the '90s, so it's very easy to just think "Well, all text is Unicode", except if you're in Java land, all the characters are 2 bytes and only UTF-16 encoded. You have surrogate pairs, and all of these other horrible hacks to workaround the fact that the Unicode space is bigger than 16 bits.

So if you are used to doing text processing, certainly you grew up in the early 2000's text processing with XML in Java, you would be thinking all the time about the code pages you got the filing from, because you'd be getting some input from some horrible IBM 370 system using EBCDID talking to a fixed exchange probably using ASCII, you'd have all kinds of escaping to somehow fit umlauts, and graves and things like that from the hybrid ASCII thing. And these are things which we don't have to deal with. Miki, you can talk a little bit about what it's like in the old world of Python, because I know that this is something that Python has worked really hard to -- like, in Python 2 there wasn't really a notion of all text is one encoding. And Ruby is the same way. Encoding is kind of a property of the string, so you can have strings with different encodings kind of flowing all through your program, and it's just something that we don't have to deal with in Go. But most programmers who are probably coming to Go now, I would say if not a majority, a large percentage of them, come with experience and baggage and preconceptions from other languages...

So if anything, questions like the one I had about the -1 rune to kind of help you expose your preconceptions and say "Well, of course I know the answer is 2, because in Java every character is 2 bytes", and then you find out the answer isn't 2, and hopefully that prompts other questions of "Why isn't it that? My education and my intuition tells me that it should be this. What am I missing?" That's the kind of goal.

**Miki Tebeka:** Yeah, and I think we talked about preconceptions at the beginning, and this is -- sometimes when you start a new language, you bring your preconceptions from the language you're coming from. When I started with Go, I wrote a lot of Python in Go. And it worked in compile, but it wasn't Go. So I think these quizzes also help you break these preconceptions and say "No, we do it differently here."

**Natalie Pistunovich:** You touched a little bit the point of "Were you ever convinced that the solution that you think is right is not the right one?" I'm sure you mentioned that the way you explained something kind of led you to a different way of thinking about this. But did somebody ever convince you actually that something else is the right answer?

**Dave Cheney:** Well, back in the early days of asking pop quizzes, either I hadn't figured out the form, or it was just easier to tweet them on my blog, I generally had to rewrite the quiz several times over the course of a bunch of hours... And there are cases now where if I get the form of a pop quiz wrong, and I'll just delete it and post it again, or something like that. So definitely asking the question in an unambiguous way is tricky, especially when you're trying to illuminate an edge case.

One of my favorite quizzes which completely fails every time I try to give it is something along the lines of -- it was in the form of like "Fix this program by adding only two characters", or something like that. For a while, I tried to have a series of pop quizzes like "What is the shortest way to write this/to do a particular thing?" And this was where knowing bizarre, edge case properties of the language, like the copy returns the number and you can use that as a very quick way of doing the minimum of two, or the maximum of two different values... So they were very tricky to get right, because it was very tricky and error prone code. And the answer is already provided for you. It seems to work better, because it kind of constraints it... And also, it's easier to verify as well.

\[32:19\] I remember always the "Do the shortest of this" for days, people like Kevin Gillette would be sending me "Well, here's an actual shorter version" and "Here's a shorter version" after that, and an even shorter version after that. So in some ways, I think the point of moving past the "They got it right" or "They got it wrong", to thinking about the potential lesson behind it is occluded a little bit when it becomes a competition of like "Write the shortest version."

And I also like the poetry of the quizzes that always start the same form: What does this program print? Because I think printing is the simplest thing. What's the first program that everyone writes in different languages? Hello World. Hello Go. Hello David. It's the smallest, simplest program you can write, and all other programs are gonna be bigger, or complicated, or more magnanimous after that. So I like the idea that the quiz space is just the tiniest portion of like -- we're just talking about programs that print one value. What does this program print? Because the solution space of other programs is so much larger than that.

**Miki Tebeka:** Yeah. For me, several times I thought I knew the right answer for a quiz I showed to people, and as Linus says, given enough eyeballs, all bugs are shallow." So when you do a quiz for a lot of people, they will correct you.

I remember one I did about greedy regular expressions in a local Python group, and I did an explanation, and then someone who has a long history of regular expression in Perl raised their hand and said "No, no. I can give you a counter-example for what you say."

I think the fun part is -- even when you're teaching and even when you're showing these things, you might learn something as well. Even though you think you know what you're doing, it's not necessarily right.

**Dave Cheney:** Absolutely. To go back to the kind of inspiration that Josh Bloch's Java Puzzlers book - as I said before, the bit that I enjoyed the most about that was not the competition of like "How many out of 50 points did I get right on the first try?", it was the "Let me explain to you why you might have got this wrong." The explanation part was far more.. it's the bit that I miss from.. I had this broken go present slide deck that has been re-edited and reedited so many times, because every time I would go to a meetup, I'd complete some of the old ones, add some new ones, maybe trim it for time... It's been through so many iterations. But the thing about go present is that you have to give every slide a title... So there'll be a slide with the quiz, and then I would always copy the title and put in brackets "Continued." So my favorite part was always the second slide, which is not just the answer, but the explanation for why it is. The one that was always my favorite was there's a bunch of.. this is around identifiers. We all know that identifiers have to start with whatever Unicode defines its letter or the underscore, which includes a lot of pre-emoji characters. In Japanese they're called kaomoji, which is kind of typing faces... Everyone knows the flipping table meme; it's that class of thing, like the frowny eyes... It turns out that the frowny eyes is a valid identifier, because the o with the dot in the middle and the little eyebrow is a character called ttha which I think is Greek or Turkish. So that's a letter, so you can totally have an identifier which is kind of frowny side-eyes.

But that explanation, even though it's not just kind of Roman or Cyrillic alphanumerics, but also a great -- when we say a letter, this includes all the written languages: Hebrew, Turkish, Japanese... These are all letters. Not all of them will be upper-case letters, but they will all be letters. So you can write identifiers in your Go code in your native tongue, and also highlight that you're not restricted to speaking about source code only in English. I really like that explanation part of explaining why the frowny face is totally valid; you can have a variable called "frowny side-eyes."

**Natalie Pistunovich:** Pop quizzes as job interviews - good idea or bad idea?

**Dave Cheney:** Terrible idea. Very unfair.

**Miki Tebeka:** Yes.

**Dave Cheney:** \[36:08\] Job interviews are not fun, and pop quizzes are supposed to be fun. So do not mix the two. Quite often people would comment "If I got this in a job interview, I would have failed", or something like that. It's unfair for two reasons. One, the form. If you were to just guess, you have a one in four chance. That's terrible. But also, there's a terrible power imbalance. And there's already -- in the interview situation, the power balance is already terribly off the scale. There's a power imbalance that as the asker, you know the answer; you wrote the question, and you probably wrote it -- especially in the tweet-sized/pop-quiz form they're written in a way to either confuse or perhaps obfuscate a little bit. And none of those things are fair. Terrible tool.

And also, the most important bit is if these are some pop quizzes, something like "Do this multiple choice as part of your interview pack. Do this multiple-choice set of questions", where's the learning in that? It's simply like "Can you solve these quick number puzzles quickly?" The value of the pop quizzes is the educational component that comes after that, of saying "Well, I got the wrong answer, and now I'm confused by that. Why is that?"

Yesterday, a number of people were saying "Well, how can you have a negative one letter? That doesn't make any sense." So that was an opportunity to explain - well, it turns out the rune is actually an alias, and aliases are not the horrible alias we added a few versions ago, but this idea of "A type has another name." And this is a thing which also comes up quite infrequently in Go, because we know that int64 and int are the same type, mostly, under the hood, but they're not transposable. If you have an int64, you have to cast it to an int. But when you have a rune and an int32, they can transparently be because their alias is the same for byte and uint8.

So that was an opportunity to explain a thing about like... The rune type is probably something that not a lot of people have come up with, especially -- like, if you're parsing network data, you're getting in bytes. It's not strictly ASCII, but you can kind of most of the time ignore that and just kind of treat it like ASCII, so a byte will work. But actually, strings are runes. So it was an opportunity to explain that a little bit.

So to summarize - yes, pop quizzes are a terrible tool for interviewing like that. It's just unfair, and also, you're missing the most important bit, which is the opportunity to say "Oh, I got that wrong. Why?" To ask that question, why.

**Break**: \[38:43\]

**Miki Tebeka:** I agree with you. I think it's a bad thing to do in interviews, mostly because I don't think as an interviewer you learn something valuable about the candidate when they faced it. Either they know it or they don't; usually, you have enough time to go over the internet and read the spec and see what's going on, maybe play with the code... They don't have it during the interview situation. So either they know it or not, and that's basically maybe their memory, but nothing more than that... And it's also, as you mentioned, very stressful, like "I have no idea what it is. Why is that?" So they're forced to invent something, which I personally don't like.

**Dave Cheney:** And completely artificial to the entire way that you would work and perform your job, to not get too far on a tangent about hiring, One of my favorite things is to watch machinist videos on YouTube. People using blades, and drills, and things like that to make things. I'm sure if you were interviewing for a job as a machinist, you wouldn't sit down and have a long discussion about material science. You'd chuck some bar stock up on a lathe and you'd turn the part as described, and then people would say "Well, did you do a reasonable job at that? Were you fast, was their wastage, things like that. So that does on surface sound a little bit like doing whiteboard coding. You're doing the thing you'd be doing, but they key is you're doing it in the environment. You're not talking about "I would remember to set the speed on the machine to X and Y."

So I think the pop quiz format taken out is just like a tiny piece of text and four answers, circle one of them; it's so artificial. Of course, if you got the answer wrong, the first thing you'd do is copy that text, put it in your editor, run it, change it, explore it, pull it apart, which is the key to learning to dissect something. So I agree with that. It's stressful, and artificial, and unfair.

**Natalie Pistunovich:** I would like to turn the situation a little bit, and ask... You were all in the position of interviewers, you were all in the position of interviewees. If you as an interviewer get a pop quiz question at the end from an interviewee, at the part that you ask "Do you have a question for me?", is that okay? \[laughs\]

**Miki Tebeka:** I think yes, because for me it's less stressful, and it might show them the depth of the knowledge of the team or the people they are going to interact with. And maybe they just want to get close on a social level. So for me it's fine, I would bite.

**Natalie Pistunovich:** As a fun social thing.

**Jon Calhoun:** I would view it as -- it's almost like they have some obscure knowledge that they wanna share, and the pop quiz is like a fun format of sharing it... So to me, it would show that they're excited and they wanna share something they learned. So that's a good thing. And it's not like they're saying, "Oh, you're gonna get fired if you don't know this." It's not that stress. Whereas somebody who's interviewing, even if you just ask it as like "Oh, a fun little intro. Here's a pop quiz", it's still a stressful scenario for them, and they're gonna go home thinking "Oh, I got that wrong, and they're never gonna hire me now." It's a completely different environment there.

**Natalie Pistunovich:** Mm-hm. I have a lot more questions, but we're slowly running out of time... One last question and then will be the fun part of an Unpopular Opinion. So if we talk about pop quizzes as part of an interview process - maybe yes, if you are on the interviewee side... Pop quizzes is part of learning a language. Syllabus or the course are just for you to do when you freely take a language to learn upon you. Do you teach that? Do you like learning with that?

**Miki Tebeka:** I'm for it. I'm doing several ways of teaching people, and every time at the end giving them something to think about which is related to the subject. It's usually something that strengthens their understanding and makes them better learning. So I think it's a good idea to have some kind of a question at the end, to see if you've got it or not... And I think quizzes are a great match, because apart from being related to the subject, they're also fun. They also encourage you to explore more... So yeah, for sure.

**Jon Calhoun:** I think part of it is definitely the atmosphere of it. If it was like a learning materials and you had to get the quiz 100% before you can move on, that would probably frustrate me. It would make it a less enjoyable experience. Because Dave, you even mentioned you'll have quizzes and you'll have "Does not compile" as an answer, and there are times where I click that just thinking "My first intuition is this doesn't compile, but I wanna learn something from this." But if you have a quiz where it's like a barrier to moving on, it doesn't feel like you're having fun and learning. It feels like you're just kind of stuck behind this getting 100% on the quiz.

**Dave Cheney:** \[44:02\] Yeah. The goal is never to be the best, to get 20 out of 20, or something like that. It's about what you can learn. I think the quiz format, it worked, I sound like someone pining for days gone past, when we used to be able to travel and go to meetups and things like that - it's a format that works better than Twitter clicking, clicking buttons. It works really well in the collegiate setting, in a meetup group... Because you can present the four answers. We would always do that on our meetup, like "Give a show of hands. Who thinks a, who thinks b, who thinks c?" And then you can ask, if there's a stand-out, or if there's a lot of people who were choosing a particular option, just pick someone and say "Why do you think that? Explain it." And then they give their answer and you can pick someone who had an opposing view, and you have a dialogue before you even "A-ha! The answer is actually c!" and "Let me just explain to you the answer." It's a really good format for having a discussion and a dialogue, which - that's the best kind of learning. Rather than just rote learning, memorizing these answers, it is "Show your working. Show me your thought process", which is definitely, to tie it back to your other question, the style of interviewing I think is more successful.

At Heptio we'd do the thing where we'd ask the candidate to go and do an exercise and bring it back, but it wasn't just like "Give us your code", look at it, if it's above some kind of artificial bar which I won't tell you about, then you progress. It was like - the next step was you got on a phone call with someone who worked at the company and you would just talk about the code. Just like "Show me your working. Show me how you approached this problem. Why you chose to do it this way or that way. Walk me through your design."

Interviews are artificial, but I think a lot closer to the kind of discourse that you would have between coworkers on a team... Like, "Let's talk about how you wanna do this, let's talk about the trade-offs, talk about some limitations of that approach." That's the kind of discussion you would have building and maintaining a service on the team. Interviews are artificial, but perhaps closer to the real one, and also it's a discussion between two people about the code, rather than simply "What you wrote was good enough. Move on to the next question" kind of thing.

**Natalie Pistunovich:** Yeah. So many questions, but we should be wrapping up, and I would say it's time for an unpopular opinion, but I guess we already have one that we all agree on, so we can just call it a day... \[laughter\] Maybe, after all, yes, an unpopular opinion.

**Jingle**: \[46:17\] to \[46:35\]

**Jon Calhoun:** So who wants to start with unpopular opinions?

**Miki Tebeka:** I can start.

**Jon Calhoun:** Alright, Miki.

**Miki Tebeka:** My unpopular opinion is that you should never use a technology that is less than seven years old.

**Jon Calhoun:** Okay...

**Natalie Pistunovich:** Is this based on your experience in starting Go earlier? \[laughs\]

**Miki Tebeka:** Yeah, so of course, I started Go at the very beginning, so yeah, I don't listen to my own advices, of course... But I've been burned so many times by the new and shiny things. And seven years - it's usually production seven years - will make your life so much easier.

I worked at a company that my boss said "My goal in life is never to be paged at 4 AM." So he built everything on files in old technologies... And he was right. We never got the pager, it was just working... So I'm trying to follow this opinion.

**Dave Cheney:** This is Dan McKinley's innovation tokens.

**Miki Tebeka:** Yes, exactly.

**Dave Cheney:** If you're someone out there in radio land who doesn't know what I'm talking about, you need to google "dan mckinley choose boring technology" and really take this idea of innovation tokens and really take it to heart... Because seriously, you get three. You get three innovation tokens per project. And if you spend them all upfront, you have none left.

As I've got more mature in this industry - yeah, the idea of using the latest shiny thing has gone from being kind of like "This is exciting" to being "This is concerning."

**Miki Tebeka:** \[48:00\] \[laughs\] So we became old users, that's what you're saying.

**Dave Cheney:** Yup... Which is fine, because there should be people to replace us. This was something I was super-passionate about every year when we would be choosing the speakers for GopherCon... Like, if it's just the same old heads on stage, that's not a community; that's not growth. That is stagnation. You should be actively looking for new voices and new people who are hungry, who are going to their new ideas into the scene... Because otherwise there's just stagnation.

This is teetering dangerously into Unpopular Opinion territory, but I encourage the audience to cast their eye around to other language communities and ask the question "Are they full of the same popular established old heads?" Coming up with great new ideas, of course, but from the same people? Or are they actively seeking to replace and rejuvenate with new speakers and new ideas and new points of view and new perspectives?

**Miki Tebeka:** That's why you have kids.

**Jon Calhoun:** So when you say to use something that's seven years old, are you referring to the technology itself is seven years old? Or can you elaborate a bit? Because when you talk about innovation tokens, obviously if you take a language that you've never used, that's 17 years old, that's probably not gonna help you in that front.

**Miki Tebeka:** Well, you know, I'm teaching Python still... And Python is 30 years old now. So I'm teaching people who are younger than the language, and they still think it's new and cool. But there is something about a product that has been in production for many years; people ironed all the bugs, they found out... There is enough community and knowledge around it, so you can go and find answers to the questions, you can read tutorials... And it takes time. It takes time to build this volume of things to do. So I think it's around seven years, maybe sometimes more.

**Dave Cheney:** Almost all of the things that we think of as kind of overnight successes, generally they've spent about ten years in the wilderness before it. Twitter is an example of that, most of the popular services that we think and use in products spent decades as either going down the wrong track, or just kind of waiting for that spark to happen. Programming languages, technologies, tools, websites - all of these. Computers, the history of that -- we're all sitting in front of Macintoshes... Would you really be sitting in front of a Mac in the '90s? They were on the road to oblivion, but... Yeah, it was in 2001 that the company which is now the largest - I think they're worth more than certain countries - had to be bailed out by Microsoft with a loan to avoid going broke. Most of the things you see as successful have a long period of struggle and toil to put that foundation that makes them seem so successful.

**Miki Tebeka:** There's a formula for maturity that Marty Weiner posted, which says that maturity is blood plus sweat, divided by complexity... And all this blood and sweat takes time. This is something you need to--

**Dave Cheney:** I think about that in terms of the Go compiler itself. In 2012-2013 each new version of Go -- we were working on Juju at Canonical. Juju was just large enough that it'd been written by enough people with enough different coding styles... We basically had one of every different version of the way you could do a thing in Go inside there somewhere. And we would regularly turn up compiler bugs, runtime bugs, things like that; horrible, show-stopping escape analysis bugs. But over time, those things stopped happening. And it wasn't just the compiler got better - it absolutely did - but the experience of all of those bugs that happened to everybody in the formative years of Go was actually codified in the actual source tree.

If you look in Go test, there are some 30,000 different test cases, and they're named after the issue that they were logged in, and they represent a bug found in real code, in the wild, and fixed. Now that test case lives there to make sure that bug can't ever come back.

\[51:58\] Every kind of weird crash someone had to debug and be like "This can't possibly be my program", and it actually turned out it was a bug in the runtime, or the language, or the compiler or something like that - that experience got codified and turned into a test case which runs literally every single try bot on every commit to make that quality bar just a little bit higher every time.

**Natalie Pistunovich:** Jon, do you have an unpopular opinion?

**Jon Calhoun:** Not today, I don't think. I'm sure I have plenty, but none that I've thought about long enough to wanna talk about it on air. I'm still thinking over the seven years technology one, because -- it's not that I disagree with it, it's just I don't know how you fix that problem, in the sense that there's a lot of people new to programming who instantly wanna dive into everything that's new, because that's what they read about.

I think it's easy to go to people who are experienced and be like "Okay, you need to choose which tech you're using that's new", but for somebody who's new to everything, it's kind of like "Why not just learn all the new stuff?" Dave, your test cases example is a great one of like, you know, these things get better over time, and do you really wanna be the one who's finding the bugs as well as trying to figure out how it works? ...versus figuring out how it works first, and then moving forward.

**Dave Cheney:** There's a tension here, because if everyone sits on the fence and waits seven years for somebody else to be the first one, no one can make any progress. To go back to dumping old faces at conference talks - if you only choose the people who are successful, yeah, you kind of bake in a bunch of safety there, but your community atrophies through ideas.

I think about how straight Go came into a lot of companies, and it was a combination of very specific -- one example is there was a Ruby shop that the log processing job took more than a day, so it could never keep up with itself... Pinpoint case for go in, write a different log processor in a different language.

Other examples - when I was working at Atlassian, I didn't have a lot of oversight, so I chose to write the piece of infrastructure code that I was working in Go, rather than in Java... Because no one was looking over my shoulder. So we got lucky there. It's that tension between sticking with the tried and true, and kind of waiting for somebody else to take the first move... And the realization that you have to try new opportunities and new solutions.

The only kind of like shrug emoji thing I can say is "Well, that's engineering." It's about weighing trade-offs and risks, and making sure that you don't paint yourself so terribly into a corner that you have no budget for risk at all left. If you spend all your budget upfront, you can't take any more risks with the rest of the project; you have no safety margin at all. That's a terrible place to be working from.

To go way back to the discussion of people being afraid to break computers because they made a syntax error - if you arrive in a place where any one mistake, no matter how big or small, kills your project, because you have no more budget for risk, you've painted yourself into a corner. It's very difficult to recover from that situation.

I like to say that this is the trade-off for the people that make the decisions in the business. Bringing in new technology brings in new opportunities, it brings in new opportunities to hire people, new opportunities for new technologies to solve problems in different ways... A lot of the reasons that systems in the backend of GitHub are written in Go is for concurrency. There are things which fit much better the ability to use concurrency than that kind of single-process request/response model that other languages have. Different use cases for different technologies.

The trade-off there for the engineering manager or the VP of engineering is to be saying "If we have one of everything in our technology stack--" and I'm sure people have worked at place like that, where they do have one of every technology in the stack, "...how do we staff all these teams? How do we scale across all these teams? We need someone who knows Haskell, and JavaScript, and Clojure, and Ruby, and Go, and Python, and C++." It becomes that kind of impossible unicorn. Maybe someone has passing knowledge of all those technologies, but they need to kind of be an expert in all those technologies.

For example, what I've seen at some companies - they'll say "We have 3, 4, 5 languages", and that kind of gives them a continuum to say "Here are the established languages, here are the ones that are coming up, and perhaps here are some of the ones that we don't use anymore." I know that famously Google was Java, C++ and Python. I don't believe they use Python anymore. So by having a set of technologies in your stack, you get to have a discussion about their maturity level, and are they used for new work, are they used for existing projects, are they the kind of "They're the workhorses, but we're not starting new things in them"? I think that's one way to manage the risk and manage the maturity of technologies.

**Miki Tebeka:** \[56:34\] I think the problem is that people a lot of times overestimate the benefits and underestimate the risks or the downsides from new technology.

**Dave Cheney:** Absolutely.

**Jon Calhoun:** Alright, Natalie...

**Natalie Pistunovich:** So my unpopular opinion is a lot less exciting, unfortunately... It's also about interviews, and it's that you should write some of your social media on your CV. While I do see sometimes people - many times - write their LinkedIn and GitHub, I feel that in tech it kind of makes sense to also include your Twitter, for example, if you have one where you in any way rant about tech or share things like that. Some Twitter handles, of course, don't make sense, but I kind of think that it belongs enough in the stack, at least of a techie.

**Miki Tebeka:** Yeah, I think it makes sense, but in a way, sometimes it's hard to separate... For me, there was a clear separation between Facebook for social and Twitter for geek stuff. In the last years I got a lot of tech in Facebook and a lot of social in Twitter... So I don't think I have a problem showing what's going on there, and people can see that... I think a lot of people are afraid of that, for some reason. I don't know why.

**Jon Calhoun:** It's interesting in the sense that once you get popular enough, it's almost like you don't even have to share it, because if they just google your name, they'll probably find it...

**Miki Tebeka:** Yeah.

**Jon Calhoun:** I guess there's obviously the people who have a random racist Facebook or Twitter account or something, then they probably shouldn't be sharing it; that's probably not gonna help them. I mean, maybe it would help the rest of us hiring people, but... I don't know--

**Miki Tebeka:** They probably shouldn't do it anyway, so...

**Jon Calhoun:** Yes, obviously, but... \[laughter\]

**Natalie Pistunovich:** Yeah. Well, it sounds like the unpopular opinion is a little bit unpopular, so that's good. I'm always trying to tick that box...

**Jon Calhoun:** I guess I'm just not sure. I guess I wonder how it would be for people who just choose not to do those social things; if there'd be some negative side effect for them, who for whatever reason decide -- I don't use Facebook pretty much ever. I have one, but I don't remember the last time I've logged in, and I basically stopped using it because I found that I didn't get on Facebook and walk away happy, or in any way having an enriched life, so I was like "This isn't worth doing." And even like Twitter at times, I'm very limited in what I do with it, because I find if I'm on Twitter too much, it just doesn't make me feel like my day is any better. There's just too many crappy people out there. So I guess it's just kind of a mixed bag for me.

**Natalie Pistunovich:** Yeah. Is there anything else we should say for this episode?

**Miki Tebeka:** Solve more quizzes. Be curious. All the time.

**Dave Cheney:** And take the idea and change it and make it your own. The opportunity to share something that you've learned, or share something that was surprising to you... As I said, a lot of the quizzes come from reading the spec and finding obscure things in there, which is really just like a rote quiz... But quite a number of them come from seeing a bug, and it's just like a bug -- I'm kind of making my hands like "I once caught a fish this big", kind of large, and the challenge there for me is "Is it possible to find the guts of this misunderstanding and a thing that will fit as a properly formatted Go program in the tweet?" That's the challenge for me. But those are the constraints that I set for myself to "Can I ask the question in the form of a tweet?" There are no rules here. The goal is to share "I learned this surprising thing. Is anybody else surprised by it?" And also, "It's surprising because I didn't know that you could have emoji identifiers" or "I didn't know--" The opportunity to share -- does everyone know Julia Evans?

**Miki Tebeka:** Zines.

**Dave Cheney:** Julia Evans makes zines, yeah. Her chosen form of communicating -- this is like if she's learning about e-poll or learning about some arcane, or not particularly, her ability to take a very weird or obscure piece of some part of her job, and not just turn it into a question, but craft it as a magazine, like a '90s zine thing, that's her way of sharing that.

So my suggestion was if you like the idea behind the quizzes, not just like "Here's a question. I'm keeping my own score of how well I'm doing on these over the year", but if you actually engage with the idea of them as a vehicle to teach and share something that you learned, or certainly something that was surprising or unexpected to you - take the idea and do it exactly as I do, if you want. Or take the idea and do it completely differently. Again, nothing is off the table here. Turn them into books, turn them into conference talks and give them at your meetups; send them as letters/communications to the ACM. The opportunity there to teach and to educate about something that was new and surprising and that you appreciated learning - that's the goal here. It's not about "What are the rules for writing a perfect pop quiz?"

**Natalie Pistunovich:** A big thank you.

**Dave Cheney:** Thank you.

**Natalie Pistunovich:** Participating on such a short notice and creating so much content that it almost feels like it was a podcast of just two interesting quiz creators. I enjoyed listening a lot.
