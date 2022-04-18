**Jerod Santo:** Hello, and welcome to Go Time. I'm Mat Ryer, and I've spent my entire life working on my mid-American English accent for this very moment when I could imitate Jerod Santo... No, I'm not Mat Ryer! Mat is -- I don't know where. But I am here, I am Jerod, your humble producer, coming out from behind -- where does an audio producer sit behind? I don't know...

**Kris Brandow:** The soundboard, maybe...?

**Jerod Santo:** Yes, from behind the soundboard, to ask some questions today. If you listened to our Charm episode of The Changelog, which we aired in the Go Time feed because there was so much Go talk on that episode, you know that I've been Go curious as of late. But I have my apprehensions, I have my questions. I haven't actually dug very far into Go, and I have questions, so I thought I'd bring a few friends together and ask all sorts of newbie, outsidery, shallowy questions. So joining me today is Go Time regular, Kris Brandow. What's up, Kris?

**Kris Brandow:** \[04:12\] Oh, hey! Doing pretty well. On for the second time this year. This first quarter has flown by so quickly.

**Jerod Santo:** You're back, baby. You're back.

**Kris Brandow:** Yeah. Can't believe it's March already. Or I guess April, by the time this episode comes out.

**Jerod Santo:** Yeah, Q1 has come and gone, and here we are, Q2... But what else is gonna happen, right? Every day another Q goes by...

**Kris Brandow:** Yeah.

**Jerod Santo:** The sentence didn't even make sense. \[laughter\] Let's introduce Ian Lopshire... I'm doing my best Mat Ryer impersonation with the non-sequiturs. So every time I say something silly or dumb, just assume that it was a Mat Ryer impression. We have Ian Lopshire, a guest, but a common guest. Welcome back to Go Time, Ian.

**Ian Lopshire:** Yeah, happy to be here. I'm kind of reeling right now, because I hadn't thought that Q2 was over yet, but... I just looked at the date, and you're right.

**Kris Brandow:** Q2 isn't over, Q1 is almost over.

**Ian Lopshire:** Oh, my bad. Q1, yeah. But still. The quarter is almost over.

**Jerod Santo:** I confused him by saying "Every day a Q goes by." \[laughter\]

**Kris Brandow:** Q85.

**Jerod Santo:** Yeah, settle down, Ian. Settle down. You don't have to freak out that much.

**Ian Lopshire:** But Q1 is almost over, and that's scary. But here we are.

**Jerod Santo:** But here we are. And it's Go Time. So before we get into my questions, I've also gathered a few questions from Go Time audience and Twitter folks about what they're curious about the Go programming language. I wonder, from each of you maybe - don't go deep, don't tell us about your birth and stuff; but getting into Go and kind of the language that you came from, or the ecosystem that you came from when you got into Go, and maybe what were some of your trepidations or things that you were curious about prior to being a full-time gopher. A Go Time gopher also, but just... Writing Go on a regular basis. Ian, you're a guest, let's start with you. Tell us about your origin with Go.

**Ian Lopshire:** Yeah, so pre-Go I was writing mostly PHP and JavaScript, and the company I actually worked for at the time kind of decided they wanted to go with more compiled languages, so we had a choice of C\# or Go. And my team went with Go. I think the first questions and issues I had when I started was around 1) how to structure things, does everything go in one file, do I make a thousand packages...? Kind of that bit. And the second one was a lot around JSON and deserialization, the io readers. Coming from JavaScript, that was very confusing for the first couple weeks.

**Jerod Santo:** Cool. Kris, what about you? I think you hit on a couple of things actually that are in my list, so I'm right there with you. Kris, go ahead.

**Kris Brandow:** Interestingly, when I started my career I almost started it with Go. I kind of looked at it, got really confused actually by the := syntax, and ran away...

**Jerod Santo:** Also in my list. Okay, keep going...

**Kris Brandow:** So I started with PHP, and then... Funny little thing about me and Sam Boyer - we both lived in the Drupal community for a while; and I went to a meetup where I met him once, and we were talking, and I was like "There's something I don't like PHP." And he was like, "Complexity. You should try Go. It's all about simplicity." And that is how I started off looking into Go. And then I just kind of went from there, and I actually convinced a company I was working at to let me build projects in Go. And I guess the first things that I ran into were like -- I was so excited about concurrency, I started putting channels and goroutines everywhere, and quickly learned how terrible of an idea that is. But then kind of stuck with the language for that simplicity.

**Jerod Santo:** Yeah. Very cool. So to give a little bit of my background - I've started off in Perl back in the early 2000's, went from Perl to Ruby, also learned a little bit of C, but just enough to be dangerous. I never actually worked daily in C. I did Ruby for many years, added JavaScript, of course, because I've been in web development most of my life... From there, I started writing Elixir; I've written Elixir quite a bit over the last 6-7 years. That's probably my primary language, plus JavaScript, because again, web development... And my experience with Go has been two small programs.

\[08:11\] Back when I did client work, I had a client who needed one endpoint, and they needed it to be really fast... And it was just like a JSON endpoint that took a few arguments and spit out different responses. I can't remember the exact thing. And Go -- this was pre-1.0. Go was very new, and I always liked the new, shiny stuff, so I gave it a go back then, and wrote that endpoint in Go. And it was probably like 80 to 100 lines of code. It worked great; I thought it was really cool, and never had another use case for a long time, because everything from there was -- Ruby on Rails apps was the primary thing I was doing. So I picked it up and dropped it then.

And then recently - you know the Go Panic game show, and the... What's the other one called? On JS Party we call it Frontend Feud... Gophers Say. That's what we call it. Gophers Say has that in-browser UI with the scores, and the faces, and all the questions, and these things... And that was static HTML for a while. \[unintelligible 00:09:10.28\] to drive the JS Party side, and the Go Time side, with different stuff... Anyways, I wrote a little Go web server, that's again probably around a hundred lines. So this was like last fall. I picked up, I had a pretty good time with that.

So I've written probably around 200 lines with Go. So I'm not completely newb, but almost completely newb. But I'm very interested in it because I'm interested in building a Changelog command line for fun and for interest, and I think it's a great language for that reason, for distributing \[unintelligible 00:09:43.28\] It seems like it's simple for that purpose, with universal binaries and deployment and stuff, not having to have shared libraries everywhere... So that's why I'm curious about it.

Also, just producing Go Time for many years, I know a lot about it at a very shallow level, which makes it less intimidating than other languages, like Rust, for example, which I know there's a lot of interest in that, and a lot of comparisons, and a lot of verticals that both languages play in. So it would be another contender. But I'm very interested in Go.

That being said, there's stuff in Go where as a person who hasn't really written much of it, I'm just like "I don't get it", or why... A lot of the questions are "Why? Why does it work this way?" And the first one is slices and arrays.

In most other languages there's an array, or a list, or something... But Go has these two, and one is like a substitute -- I don't really understand it that much. It seems like everybody uses slices all the time. Can you guys explain to me what's a slice, what's an array, why are they different, and when should I use each one?

**Kris Brandow:** Sure. For the first question there, "What's a slice and what's an array?" - an array is a fixed-size group of data, I guess you could say. I'm trying to say it without saying the word "array" or "slice" here. And iterable is also a bad word, but... It's just like a slab of memory that you can have, that's of fixed size. So you can have an array of like five integers, or an array of ten strings. But they are fixed size, so you can't add another string there. So you can't make that array that's size 10 into an array of size 11. That's a different slab of memory that you would have to go get.

Whereas slices are much like arrays, in that you can have these kind of enumerations of things in them, but they are resizable. So you can go from a slice that is size 10 to a slice of size 11 by adding something to it. So it's kind of like the base level of the difference between a slice and an array.

\[11:53\] You can also think of it as like a slice is a pointer to an array, and the programming language just does all of the magic for you when you need to get a larger array kind of just giving it to you and handling all of the copying of what was in the old array into the new array, and all of that.

**Jerod Santo:** Okay. So arrays sound more like what we used to do in C, where you pre-allocate slots, or memory for a fixed length. And if you wanna go beyond that, obviously, you walk off the side of an array, now you're in overflow land, and security problems. But you could then have a pointer to that... There's things that you can do in order to allocate new space, and copy things over... Whereas a slice -- I think I'm with you. Ian, do you wanna amend or help anything Kris said?

**Ian Lopshire:** I mean, Kris pretty much covered it. The way I think about it - a slice is what an array should be.

**Jerod Santo:** That's why -- it goes to my next question, why are there two separate data structures, or I guess concepts? Are they just concepts, or are they data structures? I don't know.

**Ian Lopshire:** They're different data structures.

**Jerod Santo:** Okay.

**Ian Lopshire:** You never really see the underlying data structures of a slice. It's kind of opaque.

**Jerod Santo:** Okay, fair enough. They're different data structures. Why are there two? Go is about simplicity. So like in JavaScript there's an array; that's what you've got. But in Go there's two... Sorta.

**Kris Brandow:** I would take a guess... This is probably language lore, which someone can probably answer from the community out there, but I would say that they probably started with just arrays, and then realized these aren't very friendly to use... But in the way that Go is simple, it has tools that are purpose-built for one job. When you need an array, you really need an array; you really want that fixed-sized thing, you want the property of that fixed-size thing. So they couldn't just make an array into a slice, really.

I also assume it has something to do with typing in the language... Because when you have a slice, and the way that you add things to a slice, if you use this function called append, and you kind of put a slice in, and you get a slice back out, but the types of those slices need to match each other for that function to work.

I imagine it would have been more complicated to do that with arrays, because in Go, in addition to -- you can't kind of resize an array. Arrays of different sizes are different types; so an array of five strings is a different type from an array of six strings. It's a different type of an array if you have seven strings. Whereas a slice of strings is a slice of strings, no matter the capacity of that slice, what it actually is, at the end of the day.

**Jerod Santo:** Gotcha. So just use slices, pretty much, unless you know better.

**Kris Brandow:** Yeah. For beginners there's very few reasons why you would want to use an array. Array is definitely one of those advanced user tools.

**Jerod Santo:** Okay. I think as a beginner you come to it from a different language and you're like "What I need here is an array", because that's what it's called elsewhere. So then you go searching for arrays, and then you find something that seems more complex. Not complex, but lower-level, perhaps, than what you're used to. And so then you're like "Okay, slices." And then you start to wonder...

**Kris Brandow:** They probably should have named it array and static array. An array would be equivalent to what a slice is now, and a static array would be what we have in an array now.

**Jerod Santo:** I think slice in general is just not in other languages as a data structure, and so it's somewhat unique to Go, at least in my experience, where I'm coming from.

**Kris Brandow:** Yeah.

**Jerod Santo:** See how I hedged that quite a bit at the end...? \[laughs\] I was thinking, "There's lots of languages out there, Jerod. Maybe it's common elsewhere." Okay. Let's stick with some syntax thing... So the equal sign and the colon equals thing... WTF? I don't know. Ian, let's let you go first on this one.

**Ian Lopshire:** The quick assignment - I think it exists so that you don't have to define the type of a variable. Quick assignment I can just say "Whatever this type I'm assigning to this is the type of this variable. Otherwise you have to define a type. So I think it just adds some expression. It really is.

**Jerod Santo:** Is it syntax sugar then? So that's the colon equals, it's the quick assignment.

**Ian Lopshire:** Do you wanna add something to that, Kris? I really just think it's for ease of writing.

**Jerod Santo:** So with the quick assignment you do not have to explicitly declare the type of the variable.

**Kris Brandow:** \[16:02\] Yeah. It also gives the language more of a feel of like a dynamically typed language as well... Because there are some specific things in Go that are kind of type-ambiguous until you say what the type is. Constant numbers are an example of this; they're the special number type. The language will eventually figure out what that type is when you get more specific with it. So by not declaring what the type is upfront, you get a little bit more flexibility to decide what this thing is going to be at a later date, which you couldn't do if you had to declare it right upfront, like you do with var and the regular equal sign.

**Jerod Santo:** Okay. So coming from dynamic languages mostly, I would just wanna use quick assignment all the time, because I would always wanna defer that until later. But I don't see it used all the time. So there are times where var or the equals, the non-quick, the slow assignment is just preferable. Maybe you just know right upfront, so you might as well declare it.

**Kris Brandow:** Yeah. I might be wrong about this, but I don't think you can use the quick assignment outside of a function. So if you're just like in the global space, you have to use var.

**Jerod Santo:** I think I hit that, and I wondered why.

**Kris Brandow:** And then also, if you're trying to assign something to a property of a struct, you can't use quick assignment; even if you're doing multiple assignment, you have to use regular equals there. So you kind of have to declare the type -- you have to use var and declare types for that.

I would also say that a lot of the time when I don't use quick assignment, it's because I want the type there for documentation purposes; so leaning more into the -- knowing the type of this upfront makes it easier for people to read and understand "Oh, this is going to be this specific thing", instead of something more ambiguous.

**Ian Lopshire:** I kind of think of it as creating the variable, then assigning it. So if you're inside a new scope, the quick assignment will shadow variables outside of that scope. So it's really redefining the variable, and then assigning.

**Jerod Santo:** Say that again in other words. I think I'm with you, but I want you to say it in other words.

**Ian Lopshire:** So say I'm writing a closure, right? Or I have something coming in.

**Jerod Santo:** Right.

**Ian Lopshire:** If I do quick assignment inside of that, like the next scope, it's gonna shadow the variable. That was a horrible example.

**Jerod Santo:** It's gonna overwrite what was outside of the closure.

**Ian Lopshire:** It's not gonna overwrite it, it's going to define a new variable, and inside of that scope you can only reference...

**Jerod Santo:** The new one.

**Ian Lopshire:** The new one.

**Jerod Santo:** Oh, that's not good.

**Ian Lopshire:** I mean, it's desirable sometimes, but if you use the equal sign, it's gonna set the value outside of the scope.

**Jerod Santo:** Okay. When is shadowing desirable? This might be tough, because you might have pre-thought of an example... But when would shadowing be desirable? To me it sounds like just a cesspool for bugs.

**Ian Lopshire:** So this is kind of a weird case, but inside of a for loop sometimes you do wanna shadow, because the way the for loops work is it'll save the reference outside of the loop. So as the loop goes through, your variable is gonna change. But if you do a quick inside of it, you can copy the value into the new scope.

**Jerod Santo:** Okay.

**Ian Lopshire:** Do you know how to say that better, Kris? I don't know how to say it without showing a picture.

**Jerod Santo:** I think I tracked it, but yeah, Kris, go ahead.

**Kris Brandow:** Yeah, it's basically -- you know, if you have a good variable name and you want to reuse it, but you don't wanna affect things outside of the loop or the function that you're using...

**Jerod Santo:** Okay... That's a good way of saying it. So you're appealing to my desire not to think of another name now.

**Ian Lopshire:** You'll see i=i a lot.

**Jerod Santo:** I see.

**Ian Lopshire:** Like, i=, :=.

**Jerod Santo:** Gotcha.

**Kris Brandow:** The thing that I think a lot of new people run into when they first start using goroutines and loops - if when you get into the loop you don't reassign the variable to something that is more locally scoped to that, and you try to use that inside of the goroutine, all of the goroutines will basically see the last value of the loop. If you have a loop that has numbers one through ten, and you iterate through and start a bunch of goroutines, all the goroutines will see ten as the value they're operating off of, if you don't reassign inside of that loop.

**Jerod Santo:** Gotcha.

**Kris Brandow:** \[20:07\] So there are some uses around that. This always burns me when I'm doing unit testing; that's one of the areas where I start using goroutines and closures, and I'm like "Why isn't this working properly?" It's like, "Oh, right, I have to do this t:=t sort of thing" in order to redefine that variable within that iteration loop so it gets the goroutine properly.

There are other ways to handle that as well, that are a bit more explicit, but that's definitely where I think it gets -- shadowing is used the most often to make it so that it's not a bug, and actually something that's helpful to you.

**Jerod Santo:** Yeah. So it sounds like the implicit nature there seems like almost not a Go way of doing things, but I understand for (I guess) syntactic simplicity. But the implicit... Maybe it's an idiom that once you get into Go, you're just like -- everybody knows "Oh, this is a quick assignment, and so this is purposeful shadowing" kind of a thing, or vice versa. Is the quick assignment the shadower, or is the explicit assignment the shadower.

**Kris Brandow:** Quick assignment is. I mean, you could technically do shadowing with either, but the quick assignment is where people usually get tripped up.

**Jerod Santo:** So when you guys who are seasoned Gophers see a quick assignment inside of a for loop, for instance, or maybe with goroutines, you just immediately know what's going on there, you're like "Oh, I know", because it's i and i, or whatever, why that's there?

**Kris Brandow:** Yeah. There's sometimes where it's just like -- if I'm looking at some code and all of a sudden I see... Especially in testing, when it's t:=t, I'll be like "Oh yeah, that has to be there." Whereas I think other newer people would be like "What's that doing? I don't understand."

**Jerod Santo:** Right, right, right.

**Kris Brandow:** \[unintelligible 00:21:43.26\] when I see that. But that doesn't make us immune from shadowing bugs. I've written my fair amount of shadowing bugs where I've spent a lot of time debugging and being like "Why is this error nil?" And it's like, "Oh, because I went into this different scope and I reassigned err, so in the larger scope it's still nil." That's happened to me too many times.

**Ian Lopshire:** Yeah, I think especially in error handling shadowing happens a lot, and it's just part of the language, really.

**Jerod Santo:** Part of the language. Fair enough. So by the way, we have people in the \#GoTimeFM chat sounding off a little bit with some definitions and whatnot, so that's cool. \[unintelligible 00:22:19.04\] says "Array is fixed size list of items. Slice is a "pointer" to some subset of an array." So there's a nice, simple explainer there. If you all are looking up definitions or helping us wtih examples... Sometimes it's hard to think on your feet, and we can have them read off afterwards.

If you're not hanging out in the \#GoTimeFM channel, what is wrong?! We're all hanging out in there live during the show; you can participate and be part of the fun. So hop into \#GoTimeFM of the Gopher Slack during our shows.

Okay, let's go on to a bigger question. These are kind of small language things. What's the state of the art on dependency management? How do I use other people's code in the idiomatic, best way today? I know there's like a history here, so I'm not ignorant to any of the history, but I just wanna know, just starting today, if I'm gonna start writing Go, what's the way that I should do it?

**Ian Lopshire:** I think if you're starting today, a hundred percent embrace modules and just use it. It works well, especially for new projects.

**Jerod Santo:** Okay. Is that what everyone is doing?

**Kris Brandow:** Yeah, modules is the way (I guess) of the future for right now...

**Jerod Santo:** The way of the future... \[laughs\] Okay.

**Kris Brandow:** So if you're getting started with a brand new project -- I mean, for all my new stuff, I use modules as well. So yeah, it's just like, okay, get some modules... All of the commands are the same as they used to be; so you still use go get to get dependencies, and all that sort of stuff.

**Jerod Santo:** Right.

**Kris Brandow:** But yeah, when you open up a new folder, run go.mod in it with the name of the project, what you want to name your module or your project... And then you can start just doing go get whatever to go download some stuff, and off to the races.

**Jerod Santo:** Okay. That was an easy one.

**Break:** \[24:01\]

**Jerod Santo:** So I've said "idiomatic Go" a couple of times. I know that's a term that perhaps is falling in or out of favor -- or the term "idiomatic", I've heard either unpopular opinions, or maybe just conversations about "Let's not use that term." So whatever term you wanna put in front of Go that means kind of normative... I don't know. The way people write code.

Aside from using the formatter, which seems like obviously would normalize a bunch of code into some sort of idiomatic fashion that everybody thinks is good, what are some examples of common Go idioms, or things that you should be doing, that most Gophers do... I don't know if you guys have a PEP or something like they do in Python, or it's like -- is there a Go way, or you don't need it so much because there's kind of just one way?

I think with looping, I kind of like the fact that there's really just one way. It's cool. But surely, there's other ways of doing things. Do you guys have some examples of "This is kind of a Go way of coding"? Or I've heard like writing Java in your Go, or writing Ruby in your Go. What are some things that are "idiomatic" Go?

**Kris Brandow:** I think a lot of the way that we name things, especially around capitalizations... Like, one of the big, big differences between Go and other languages is how ID is capitalized. So if you have something that's like an identifier, it's capital I, capital D, and that is a very solid Go idiom. And I think the linters might yell at you now. If they don't, I hope they do.

**Jerod Santo:** Oh, really?

**Kris Brandow:** But yeah, how you capitalize initialisms, and also constants in Go aren't supposed to be all caps. They're supposed to just look like regular variables. So I guess the idioms that always come to mind for me are those sorts of things, like how does Go look from that kind of perspective. Obviously, things also like we use camel case and not snake case.

**Jerod Santo:** Sure. What about globals? Do Gophers like globals?

**Ian Lopshire:** I think globals are discouraged. We do have the init function, so they're supported. I think they're discouraged in the community.

**Jerod Santo:** \[laughs\] You're discouraging me from using them, Ian...

**Ian Lopshire:** I would discourage you from using globals, yes. I mean, of course there are times when you want to use globals, and it makes sense... But outside the main package, I would almost say "Don't use them."

**Kris Brandow:** Yeah. That's what I was gonna say. You can use them in main and you're alright, but certainly, if you have your own library -- if you're providing a library, you shouldn't use them. And certainly not use them if they're public. There's some cases for private globals, but public globals just get you into all sorts of messes.

**Jerod Santo:** \[28:07\] Okay. So one thing Mat Ryer has told me, a pattern that he observes is like his main function doesn't do very much. It's basically like calling the rest of his program. Is that Mat Ryerism, or is that like a Gopher good idea? The programs I wrote, main - everything's in there, except for like my structs; and some functions are outside, but they get called in there... But like, it's the gist of things. Because it's a very simple program. But is that something that is discouraged? Maybe like skinny main is kind of like an idiom maybe?

**Ian Lopshire:** I think that is... There's different forms of this you see in the community. Sometimes you see, like, it's literally one line in the main, and then the rest in a different package. But I think the idea of keeping any kind of business logic, any of that out of main is pretty ubiquitous in the community.

**Kris Brandow:** I feel like it's maybe not an idiom. I feel like it's still somewhat contentious, because... I hate this pattern. I really don't like this pattern much at all.

**Jerod Santo:** \[laughs\] Here comes Kris now with the honesty. See how he eased into it, he's like \[unintelligible 00:29:00.15\]

**Kris Brandow:** I get the intention of it. We wanna make everything testable, but I feel like that kind of ignores a lot of the other things that make it testable at the end of the day. Ripping all of the guts out of the main function, so you could put in another function you can run and go test... It doesn't fix a problem with, say, environment variables, which could still be kind of annoying. Or other globals that can sneak in at the end of the day. So I understand the intent of saying "Well, we should have this smaller main function that you can then go and test more easily", but I think actually doing that misses the point a lot of the time. Misses the thing that we're actually trying to tell people, which is like "Don't use globals. Write smaller functions, write smaller pieces that compose together better, that you can test more easily."

And I also think it discourages people from kind of running the whole binary and putting that under test, and figuring out how to test the application as a whole maybe outside of the Go testing library. It's kind of like a way of escaping around and saying "Well, I don't have to do this anymore, because I can run all of my test functions on this pseudo main that I've created."

**Jerod Santo:** Hm. Ian, your response.

**Ian Lopshire:** So the practice that I generally use is I do end up with pretty big main files, but all it does is set up dependencies. I understand what Kris is saying; you probably should be doing some testing outside of that \[unintelligible 00:30:19.11\] as a whole, but I think just keeping the main small probably does encourage better testable code, even if it leaves out some of the pieces. It's like, we shouldn't not do it because it doesn't solve the problem completely. It gets us part of the way there.

**Jerod Santo:** Right.

**Kris Brandow:** I'm gonna counterpoint that for a second...

**Jerod Santo:** Please do... Now we're having fun!

**Kris Brandow:** I mean, I see this argument all the time, of like "It gets us a step in the right direction." But I really do -- like, a lot of the codebases I've seen that enact this skinny main thing do really just forget about setting up proper configuration, having configuration be sane, having the bootstrapping code look good, having an actual application kernel... These are the things that we actually want at the end of the day. We want the structure of how our applications boot up to be really nice. But instead, what I feel like we've got is - okay, now everybody just shoves all of the gross code they were putting in main into this other function that is effectively the same thing, except now you can return an error from it, and skipping out on all that good stuff that we actually want. So I feel like it's a distraction, and when you have to go back and actually sit there with that main function, and perhaps not be able to test it with just unit tests, and have to test it in like a real way, that forces you to have to do things in a way that you wouldn't otherwise.

It's one of those sneaky things that's like "Well, this feels like progress", but it's actually progress leading you to like a dead end in the maze, unless we're gonna try and scale the walls of the \[unintelligible 00:31:42.28\] we've gotta turn around and figure out a different path forward.

**Jerod Santo:** I love the analogy.

**Ian Lopshire:** I'll give you that, that it does provide kind of a way out, and can let us not do things we should be doing... So I'll give you that one.

**Jerod Santo:** \[31:59\] Right. Some of that's like -- you know that old saying about laws, like they keep the honest people honest. Some of this is like these idioms or these patterns will keep the people who are gonna do good tests doing good tests. But the one who wasn't going to anyway, whether they shove it all in main, or put it into a different function immediately - it's not gonna change who they are, or the way they code.

So I can see that, where it's like "This is a good pattern. It helps you do this thing that..." The problem is we're not doing that thing anyways. So it doesn't fix that particular problem.

**Kris Brandow:** I would actually say there too that's kind of what differentiates what I would consider an idiom in Go from just like a practice that people are trying to make, or a best practice. I feel like most of the idioms - really all of the idioms we have are these deeply-nuanced things. Sometimes we can give like a little quick -- like the Go Proverbs, which I think are great, where it's like this little quick sentence, but if you actually start pulling it apart, it gets more and more complex, and there's just more and more pieces that you wanna pull apart to get a good understanding of it. And I think that when you have things like "Just have a skinny main to make it more testable" and it ends there, it's like "Well, where is the depth to that? How do I keep going when I encounter something where this doesn't fit properly, that the idiom still works?" It doesn't have that same amount of depth to it... Whereas I think a lot of the other idioms do wind up having that depth to them.

**Jerod Santo:** Hm. So if I wanted to learn a bunch of Go idioms, would you suggest reading Go Proverbs? Would that be the suggestion?

**Kris Brandow:** Yeah, yeah. I think Go Proverbs still apply. I think some people think that they're dated, but I think that they are pretty good. I think also code review comments, which is this thing that's in the Go GitHub wiki, is actually pretty good. Those are also pretty much like idioms, ish... There's some idioms sprinkled throughout there. But I think those are two good sources for idioms of a language.

**Jerod Santo:** Nice.

**Ian Lopshire:** The Go Proverbs were actually something that kind of drew me into Go. The first time I read all of those, I was like, "Wow. These all make a lot of sense." I don't think they're dated.

**Jerod Santo:** They resonated with you.

**Ian Lopshire:** Yeah, definitely.

**Jerod Santo:** Okay, so there's a good litmus test perhaps for the Go-curious. If you're wondering if Go would speak your language, or speak to you, is go read the Go Proverbs and see if you agree, or if they're saying things that you think make sense; or maybe it's unpalatable for you, then maybe look elsewhere. So that's good advice.

Let's talk about web apps. This question actually came in from Twitter. "Is Go and the ecosystem in place where it can compete with Rails/Laravel/Django for dynamic websites?"

**Ian Lopshire:** I don't think so.

**Jerod Santo:** Okay... Honesty.

**Ian Lopshire:** I mean, that's a style of development that I don't think Go is particularly suited for; those big, monolithic, server-side-rendered apps. I'm just not sure it makes sense in the frame of Go.

**Jerod Santo:** What is it about the language or the ecosystem that makes you say that? Is it the strong typing, or the fact they're dealing with dynamic, user-generated content, or what is it?

**Ian Lopshire:** I think it's a lot like the distrust of magic. If you think about Rails or something like that, or Wire... Is that the new Rails? Like, dynamic frontend bit...

**Jerod Santo:** Hotwire?

**Ian Lopshire:** Yeah, Hotwire. All of that just does things, and you have no idea what it's doing. And I think that's not tolerated well in the Go community.

**Jerod Santo:** So let me translate that and see if I'm picking up what you're saying here... Because dynamic web apps, that have a lot of user-generated content or input, building those at scale - I don't mean scale of users, but breadth of surface area; lots of forms, lots of pages, lots of what-have-yous - requires from a framework perhaps a lot of either code generation, or reflection-based stuff to make you not have to write a bunch of code yourself every time you wire up a form... In Go - it's not against the code gen at least; it seems like. But it's against the meta programming stuff that Rails and these other ones use, in order to cut down on your scaffolding in your coding. Is that kind of what you're saying, or did I just say a bunch of stuff that you didn't say?

**Ian Lopshire:** \[36:06\] No, that is what I'm saying.

**Jerod Santo:** Okay.

**Ian Lopshire:** As you say it back, I'm not totally sure I agree with what I'm saying... \[laughter\]

**Jerod Santo:** That was kind of the purpose of the practice, to see if we were --

**Ian Lopshire:** I think there is something in the Go community that does dislike the idea of these big frameworks, these big things... And I'm not sure if it's reasonable.

**Jerod Santo:** Like a full-service framework.

**Ian Lopshire:** Yeah. I'm not sure it's reasonable, but it does exist. I don't think we can deny, like, the skepticism if that exists.

**Jerod Santo:** Okay.

**Kris Brandow:** I feel like we're comparing apples to oranges a little bit, because it's like - you know, Ruby, Django... These are not languages. The language there is Ruby, Python, whatever. I think Go is a good language for building these things if you actually have the time and patience to actually ramp up and actually build it yourself. I think if you just want the experience of what Rails gives you, and have this out-of-the-box, "Boom, I can get off to the races, build my stuff, and then I'm done, I can move on", then no, Go isn't gonna be good for that.

But if you're actually trying to either build something so you can either understand how these things get put together, or if you're like a bigger organization that has the engineering capacity to own something like this, then I think it can actually be very good. Because I think you have the knowledge of how the thing works, and you wind up having a lot less code that you depend on, that you don't own at the end of the day.

So I think the main argument against using Go for these types of things is like "Well, the getting started period is much longer", because you have to build more of the stuff yourself. And I think that's kind of where I get a little annoyed with that argument, because I personally do not think that that's how we should look at software engineering. I'm very annoyed that we continue to look at things as the "How fast can you get going from the beginning?" and not "How do you actually build something you can maintain over the long-run?" Because that's obviously more important. Not like "I just built something today", but like "Oh, three years, four years down the road this thing is still something that we wanna use, we wanna add to, we can extend" and all of that.

**Jerod Santo:** I agree with you most of the time. Sometimes you do want to just build fast and to test your business idea, and not your software system. So to test an idea quickly. That's why I think Rails was so popular in startup land, was because it was like "We don't even know if this business is gonna be here in six months, so why do I have to build and architect a system that's gonna last a decade, if my business isn't gonna last six months?"

Now, the idea there, I think, is like once you get your product-market fit, or whatever the startup guys say, then it's like "Okay, let's re-architect this sucker now in like the ways that Kris would build it. Let's build it to last." And I think a lot of times that never happens, because the business is taking off and you're just trying to keep the servers up, or whatever happens... In that step, prototypes are supposed to be thrown away. And we never do, we just turn them into businesses.

**Kris Brandow:** Yeah.

**Jerod Santo:** So I definitely understand that. What I'm trying to get at - I have never quite understood, is the lack of a Rails or a Django coming out of the Go community because Gophers don't like that? Just speaking very broadly. Or is it because Go as a language isn't well-suited for that? And I don't know the answer to that.

**Kris Brandow:** I think it's because there's not a need. Rails exists, Django exists, PHP, Drupal, and Symfony... All of these things already exist, and have large communities, and large support around them... So in order for something like that to exist inside of Go, we have to invest a lot of community energy and time into rebuilding all of that, into \[unintelligible 00:39:30.18\] all of that, to get a very small portion of the pie at the end of the day. So I think that people that are very comfortable with those sorts of things want to do that.

I think Go as a language really does attract people that want to do this kind of lower-level, or different type of work, at the end of the day. I think people that want to go and explore Go - they're already onto the world of single-page web applications and APIs, and they don't want these big monolithic stacks as much anymore. So I think by nature of what Go is really good at, and by how crowded the field actually is, I think by the time you get o the point of thinking about using Go, you already have a different problem that you're trying to solve than what you would solve with Rails, or with Django, or with Drupal, or with any of these other things.

**Jerod Santo:** \[40:19\] Well said. Ian, anything to add?

**Ian Lopshire:** No.

**Jerod Santo:** You're nodding along in agreement.

**Ian Lopshire:** I think that covers it. The idea that those already exist... Like, yeah, why would we build another one for a 1% market share?

**Jerod Santo:** Right. Maybe because you want a web app, and you love Go. But I guess in that case then you're gonna handroll a bunch of stuff, like Kris talked about, and you're gonna pick each library out, and you're gonna build up a thing... Which you can do in these other systems. I mean, Sinatra is a thing inside the Ruby land that very much has more of a Go philosophy. So it's not like you can't. One of the follow-up questions to that is "Does Go do websites?" And it's like "Well, of course you can do websites with Go." It's just you have to build all the parts of your website; I mean, there's templating engines, and stuff like that, and routers... There's all sorts of things.

**Kris Brandow:** I think that's one of the things that actually makes Go quite good... I mean, given I did just say all of that, I think that if there was a reason for us to build something like a Rails in Go, I think it could be incredibly interesting, because we do have a lot of stuff built into the standard library that gets you halfway there.

**Jerod Santo:** Yeah, totally.

**Kris Brandow:** We have a database library that's built into the language, we have a good templating system that actually properly escapes HTML and JavaScript and those sorts of things, built right into the language itself. So I think the pieces are all there for it, but I just think--

**Jerod Santo:** Yeah. The appetite.

**Kris Brandow:** Yeah, there hasn't been someone that wants to go put the effort into building that sort of thing.

**Jerod Santo:** So Mike Dodson in the chat is expanding on what Kris said. He says "You end up using one of the frameworks and quickly run into issues, and find it's actually as easy to write your own, versus learning a third-party framework." I think we've all been there; especially the more magic that pours on, the harder it is to understand what's going on under the hood.

**Kris Brandow:** I think this is why a lot of the early API frameworks that existed in Go -- because that was something that was big for a while, with Martini and a bunch of these other ones; they've died out for a large part, and I think it's exactly because of that... Because you realize pretty quickly it's just like, "I have 50,000-100,000 lines of dependency that I just do not need. So I can just go write this myself."

**Jerod Santo:** Well, having a batteries-included standard library is a huge asset to any language and ecosystem, so... Well put. Alright, getting close on time; let's ask -- I've got a couple other questions here. So look on the other side of the fence; you know, wanderlust. Do you guys ever have any wanderlust in Go? Do you have any features in other languages that you're jealous of? So as full-time Gophers, look over there and see what they're doing in Rust land, or Elixir land, or TypeScript land, and think "Oh, I would want that, but I don't have it."

**Ian Lopshire:** Through the years I've run into some things that don't have great support in Go... I don't know if you've ever worked with SOAP; like XML...

**Jerod Santo:** I try not to.

**Ian Lopshire:** Yeah. If you try to do that in Go, you're just gonna have a bad time. And I would like to be able to stay in the language I like, and build services that interact with this, but I won't. I've tried it, and I refuse... We'll use something else for SOAP communication.

**Jerod Santo:** Okay. What do you usually switch to?

**Ian Lopshire:** C\#.

**Jerod Santo:** Okay.

**Ian Lopshire:** Yeah. So I guess the XML support in general is not the best.

**Jerod Santo:** Okay. Kris?

**Kris Brandow:** You know what - I think a lot of things that I want in Go are things that also don't exist in other languages...

**Jerod Santo:** Hah! You're a dreamer...

**Kris Brandow:** Like, I want better APIs, like API-building tools. I wanna be able to build HyperMedia APIs much more easily, but I don't think there are any languages that have particularly good tooling for that right now. Same thing with database access; I want better ways of interacting and manipulating data, but once again, I don't think there are any languages that really do that well.

**Jerod Santo:** You want the ability to build your own DSLs, or what do you mean by better -- let's take the HyperMedia one; or let's take the database one, because more people are probably familiar with databases. Like, when you say "Access to database better" - I don't know what better looks like unless you tell me... Draw me a picture.

**Kris Brandow:** \[44:06\] There was this talk that one of the previous - I think he was one of the previous - Go team members gave on how great SQLite is, and how that's kind of the only database you need... That's the direction that I would like things to do. I like want my data to just be there, but also be distributed. I don't wanna have to worry about how my data is stored on disk. I just wanna be able to access it and manipulate it how I want, in my language. I don't wanna be writing lots of strings...

I think part of my great \[unintelligible 00:44:31.00\] with SQL as a whole - I don't like the model of that for interacting with data; and everything is built on top of it, which is why I don't think any languages have good solutions to this. So I'd like to see something like that get better. And I think the way Go is structured, that's just something we could -- like, we do have this rather unique way of doing code generation, where you generate code not at the time of the... Like, you get it from a dependency, but when you actually build it to deploy it, I think that gives you some unique aspects of how you could actually use code generation... Because you kind of generate things much earlier in the pipeline, and the way that it all works in Go is a bit closer to being able to do something like take something like a DSL or something closer to a DSL and pre-compile it in your application before it kind of gets sent out.

So I think there's interesting things around all of that, but once again, it's just like the paradigm, how the industry works is we all want our applications to be stateless, so we're all shipping data out, we're communicating with something else that holds all the data, at the end of the day.

So it's stuff like that I'd like to see more of, and see more interesting ways of doing it, but I don't know of any mainstream languages that have those features. And of course, I think package management is something that I would like to see be good, and I don't think any language has done it well as of yet. I think people have done it okay... I think even after all the dust is settled, modules are okay, but then you hit those edge cases and it's like going through hell. It's just real rough. So I'd love to see that be better. But once again, I don't know any other languages that have that better.

**Jerod Santo:** Yeah. I've heard people speak highly of Rust's crates system, but I don't know what sets it apart from others, or anything about it. So I don't know if that's just people speaking highly because that's what they do, or if they've actually cracked some sort of nut over there, in the Rust ecosystem, that makes it particularly better than some of the other ones out there.

Okay, so some of the things that I've seen in other languages, where I'm like "If I was to use Go, I might miss this" - I like the idea that for is the only way to loop, but I also love all of the FP functions, for like iteration, and map, and reduce, and select, and filter... For me, those are very productive ways of pipelining data. And I'm wondering - maybe those are available as libraries, or anything... But it seems like I would miss those things. Do you guys ever miss those things? I'm sure you're familiar with them in other languages.

**Ian Lopshire:** I miss iterators all the time. I find myself building them a lot. With generics, I'm hoping we do kind of settle on a reasonable iteration - maybe not interface, but way of doing it. But I do miss that.

**Jerod Santo:** Okay.

**Kris Brandow:** I think I miss that too, but I think I've also just handrolled it enough times that I'm just like "Nah, I can just write it myself, so whatever."

**Jerod Santo:** You have your own little utilities package that you carry around, or do you just code if up each time?

**Kris Brandow:** Nah, I just code it up each time for what I need.

**Jerod Santo:** Nice.

**Kris Brandow:** Once you design a database driver, you spend a lot of time thinking about how to design an iterator really well, and then it just like sticks in your head forever.

**Jerod Santo:** Gotcha. I did see a package recently that was trying to recreate JavaScript's Lodash, which is a lot of functional facilities for JavaScript, with Go's generics. It's a very fresh project, once generics shipped. I don't know if it's any good, or anything about it, except for I think people are gonna start working on that particular problem.

Last one, and then we'll get to wrapping up here... How long did it take you to get over if err!= nil being all over the place?

**Ian Lopshire:** \[48:06\] I've never hated it.

**Kris Brandow:** Yeah, I don't think it's ever bothered me.

**Jerod Santo:** Never?

**Ian Lopshire:** I like it.

**Jerod Santo:** You like it?

**Ian Lopshire:** I hate try/catch.

**Jerod Santo:** You always liked it?

**Ian Lopshire:** I did. Like, the first --

**Jerod Santo:** The first time you saw it, you're like "This is it."

**Ian Lopshire:** "This makes sense."

**Jerod Santo:** Okay.

**Ian Lopshire:** I've always hated try/catch, because it's just so disconnected from where your error happens. You could catch something 12 nested levels deep, and just have no idea what's going on... So the idea that you just have to handle errors right where they happen - I just immediately though "Oh yeah, this is how it should be done."

**Kris Brandow:** I think for me it's partly how I learned Go. I did not learn it trying to change some project from some other language into Go. I just learned Go to learn Go. I absorbed a lot of Rob Pike's talks, and things... And just like the idea that "No, errors aren't special; they're just other values." They have a semantically different meaning, but they're not actually different from anything else. It fundamentally changed the way that I structured my code, and I started to see a lot of -- if you keep writing if err!= nil a lot, you've done something terribly wrong in your application and you need to go back and redesign that code, because that code is wrong.

I think once I saw that, and once I started leaning into that as a signal that I should be getting from it, I wound up rewriting code and having it wind up be a lot better. So while sometimes it's annoying when you're prototyping and just trying to get something done, and you just write it a bunch of times, it's annoying. I think it actually winds up making my code much better, so I haven't found it to be something that I don't like,

**Jerod Santo:** So mostly what I see is -- and like I said, I've written like 200 lines of Go, so most of it is what I've read... Which is probably still less than a thousand lines, and then on the Go website, and stuff; most of it is like if err!= nil {return err;} Ain't that what most people do most of the time?

**Kris Brandow:** Yeah, most people are doing that wrong.

**Ian Lopshire:** Yeah.

**Jerod Santo:** I was gonna say, isn't that not actually handling anything? Aren't you just passing it up? That's what I don't get.

**Kris Brandow:** I think that's where a lot of the confusion from a couple years back came from, of like "No, you're actually supposed to handle your errors." You're supposed to --

**Jerod Santo:** Do something!

**Kris Brandow:** ...think about what the problem is.

**Jerod Santo:** If you don't do anything... It's like keeping the honest people honest. Like, you've gotta handle it right here. It's like, "Are you though?" It seems like you're just text-expanding that same snippet.

**Kris Brandow:** I feel like a lot of the people that don't like if err!= nil don't like if because everytime they're writing if err!= nil {return err;}, and that's the only iteration of it that they see, and it's like "Well, that's incorrect." So you're using the thing wrong; you're not really getting the feedback you should get from it.

**Jerod Santo:** So that's hopeful. Mostly, that's what I've seen. I've always thought, "This seems silly." But that's probably because it's just doing it wrong.

**Ian Lopshire:** A lot of times you do end up returning an error, but in those you should be adding context, you should be checking certain error cases that you can handle... But a lot of times you pass up the error for someone else to decide if they're broken or not.

**Jerod Santo:** Because that's what you do for like a runtime error, right? It would just pass itself up until the runtime explodes.

**Ian Lopshire:** Mm-hm.

**Kris Brandow:** And I think too it's fine if you're doing that for just one thing. What people get frustrated by is when you have 100 lines of code, and 80 of them are just if err!=nil {return err;}. You have a high proportion of it. But once again, I think you've gotta go back and structure your code a little bit differently, be a little bit more creative in what you're doing, and then you kind of reduce the number of that actual statement down to a handful.

**Jerod Santo:** Well said. Okay, so this has given me new interest in that particular thing that has bothered me. It's like, "You know what - it doesn't have to be that way."

**Break:** \[51:30\]

**Jingle:** \[53:27\] to \[53:43\]

**Jerod Santo:** Well, Ian, you are our guest today, so if you have an unpopular opinion, we would love for you to share it now.

**Ian Lopshire:** I've been trying to think of one, I really have... I'm drawing a blank.

**Jerod Santo:** Okay. Unacceptable... You shall say something. \[laughter\] No, totally cool. It's an optional segment. Kris, you are not hosting today, which means I defer to you. Have you thought of one? I mean, you've shared a couple; you got a little spicy there, but... What else have you got?

**Kris Brandow:** There's so many spicy ones in my brain... Which do I choose from?

**Jerod Santo:** \[laughs\]

**Kris Brandow:** I mean, my one from last week was so spicy though...

**Jerod Santo:** I haven't heard it yet, because we haven't produced that episode, but... I'm excited about it.

**Kris Brandow:** I don't know, I'll go for one that's gonna be incendiary... I think it's time for Go to have a fork.

**Jerod Santo:** Wow. Say more.

**Kris Brandow:** I feel like it's time for Go to have a fork, because I feel like the community - we're not all together right now, and I think we're pretending that we are. Especially with things like generics, I feel like we've kind of fractured a little bit, and we should have a recognition of that fracturing... And then maybe more formal conversations to like -- how do we come back together, how do we come back as a whole? Because I feel like there are different large factions of Go right now, and I feel like us all trying to operate together is not winding up being entirely healthy for us as a community. So maybe it's even just a forking of our community; I don't know if we need to fork the actual language, but I feel like there needs to be some sort of separation of us for a little bit.

**Jerod Santo:** Where would the dividing line be? Would it be around generics, or are there other things?

**Kris Brandow:** I feel like there's kind of the way that the language was when I first started learning it, which I guess is like the Rob Pike era of the language, where it was extremely practical of a language, and it was very focused on being a language for experienced software engineers that is still useful for those people who are newer... And I think over the past few years the language has pivoted to being one that is more focused on helping newer people be able to do things, people from other languages feel more comfortable in the language... And I feel like that has come a bit at the expense of people that want to do that fresh, new thing; they want to do that "I've spent a decade writing code, and thought about it very deeply, and I want that very nuanced and articulated way of doing development."

**Jerod Santo:** Ian, your response.

**Ian Lopshire:** Ahh...

**Jerod Santo:** \[laughs\] Stake your claim right now...

**Ian Lopshire:** \[56:06\] I do kind of agree with Kris here, that it's changed a bit. I don't know if I would say it's changed and become worse for experienced people that wanna write code a particular way, but it does seem to be more -- almost academic, instead of practical. Especially modules, and maybe generics as well. It feels almost like a research project, or like "How could we do this?" not "Should we do this?"

**Kris Brandow:** Yeah.

**Ian Lopshire:** I don't know if we need a fork, but I do agree that there's been a change some way; a shift in culture, or something.

**Kris Brandow:** I feel like that's a good way of putting it. It does feel like it's shifted from a practical to a more academic, more research-style thing. Once again, this doesn't have to be like a fork-fork, like we have to have completely separate development teams. Maybe it's like an extended conversation that we have, and maybe there's different ways we come about deciding things. It started off as very practical, and it shifted now to very academic, and I feel like the language has lost a little bit of its soul along the way there.

**Jerod Santo:** Well, while we're here, let's have a forked Go naming brainstorming session. I'm thinking, "NoGo", I'm thinking "Gone", I'm thinking "Stop", or...

**Ian Lopshire:** Stay...

**Jerod Santo:** "Stay..." \[laughs\] Go 2? Oh, GoTo, not Go 2... Alright. Any other potential fork names? We're gonna have to ideate this a bit...

**Kris Brandow:** Maybe Og...

**Jerod Santo:** There you go, rearrange the letters.

**Kris Brandow:** You could steal the mascot and just call it Gopher...

**Ian Lopshire:** Please don't call it Gopher... \[laughs\]

**Jerod Santo:** \[laughs\] Like the old networking protocol, Gopher?

**Kris Brandow:** We could call it Hoard, because Gophers are hoarders, so that could be a fun name...

**Jerod Santo:** I'm glad you put a d at the end of that.

**Kris Brandow:** Yes, HoarD.

**Jerod Santo:** \[unintelligible 00:57:49.27\] Okay... Submit your Go fork names in the comments or on the Twitter poll for this particular unpopular opinion. I'm thinking that one's gonna be --

**Kris Brandow:** Oh, God. Someone said Go++, or Go\#.

**Jerod Santo:** Go\# !

**Ian Lopshire:** Go\# ! I'm sticking with that one.

**Jerod Santo:** We've got IaGo... I'm assuming that's a Lion King reference... Alright, let me share my unpopular opinion here. So on episode \#192 Ashley Jeffs had what was in my opinion the most unpop of all times. His opinion was that people who vote in Twitter polls are losers. Did you guys hear that one? He says they should get out more. Nobody cares about their opinion and it doesn't matter. Now, he thought that he'd gamed the system. He thought he made a perfectly unpopular opinion, because of course, we take the votes on Twitter... And where are they gonna vote? But reality is stranger than fiction. 71% of Twitter poll-takers agreed that they were indeed losers.

So based on that empirical evidence, I can with confidence state that my unpopular opinion is that people who vote on Twitter polls are winners, and they should tweet more. Everybody cares about your opinion, and it does matter!

**Kris Brandow:** \[laughs\]

**Ian Lopshire:** I feel like that one is going to be unpopular.

**Jerod Santo:** I think it might. \[laughs\]

**Kris Brandow:** I think people are just gonna be in spite just voting that... Like, yeah, that's unpopular, just to -- yeah.

**Jerod Santo:** Well, time will tell. Please follow @GoTimeFM on Twitter and vote your opinion. Do you think you're actually a winner, or a loser? We will find out on Twitter. That has been our show for this week. I appreciate you all letting me crash the party and ask my newbie/outsider questions. Hopefully, there are other Go-curious folk that learned a thing or two and enjoyed this conversation. Ian, thanks so much for joining us once again. You're welcome back any time.

**Ian Lopshire:** I'm glad to be here.

**Jerod Santo:** Kris, you were also here, as Mat Ryer would say...

**Kris Brandow:** \[laughs\]

**Jerod Santo:** But I'll say thank you for hanging out and sharing your wisdom and your spicy hot takes... A Go fork - I had never seen that one coming.

**Kris Brandow:** Yeah.

**Jerod Santo:** But that's Go Time for this week. We'll talk to y'all next week.
