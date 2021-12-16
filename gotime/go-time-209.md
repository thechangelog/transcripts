**Jon Calhoun:** Hello, everybody, and welcome to Go Time! Today I'm joined by Dominic St-Pierre, a polyglot software engineer and a huge fan of Go and Elm. We might have to edit that last bit out; we can't be advertising for Elm here... Sorry, Dominic. So how are you doing, Dominic?

**Dominic St-Pierre:** I'm doing very good. Thanks for having me.

**Jon Calhoun:** Thank you for joining us. So today we're gonna be talking about using Go as a blind developer; I hope you're ready to carry the show, because I know very little about this, and I'm here to learn, like everybody else...

**Dominic St-Pierre:** Sure.

**Jon Calhoun:** So I guess, to start off, for anybody who's unfamiliar with the process, how do you actually code as a blind developer? What does that process look like?

**Dominic St-Pierre:** Sure. Maybe before that, I'd like to specify - when you hear the word "blind", that does not really mean someone that doesn't have any sight at all. I'm in the category that I do have a little bit of vision. I like to point that out at first, because it's very difficult sometimes to understand that there are multiple levels of blindness, if you will...

**Jon Calhoun:** It's a spectrum rather than an on/off type switch.

**Dominic St-Pierre:** Yeah, exactly. It's not a boolean, for sure. So how am I developing? Well, I was lucky enough, to be frank, to have enough vision long time ago. I have a degenerative visual disease, that is fairly common, and there's not much escape for me... And sadly, in the last two years I've lost a lot of my central vision. We will come back to that later... But I just want to give a little bit of a background here, because I'm in a transition at this moment. So I'm kind of transiting from mostly a normal way of working - years from now I was using bigger text font, and whatnot, but not really a huge difference from a normal-sighted person, if I can say that. So these days I'm learning, in fact, to start working with more assistive tooling, like a screenreader, and it's not an easy transition, if I can say that.

\[00:04:26.20\] So I've always been legally blind, but my vision is getting lower and lower as I go. So to answer the questions - well, I'm trying to work as much as I can as a normal programmer, I guess... But I started to feel huge roadblocks since three years ago, for example, when I started to lose my central vision, if you will. So hopefully I've not lost you already, but - yeah, it's a tough one to answer first, I guess.

**Jon Calhoun:** No, it completely makes sense, and I think it's good for people to know that it's not always black or white, and that some people are in the situation like you are, where they have to completely re-learn something they've done for years at a time, which in many ways can be possibly more challenging than being accustomed to that and then jumping into coding.

Developers struggle with changing editors, and things like that... So the fact that you'd have to completely change up your toolset is a huge change.

**Dominic St-Pierre:** Absolutely. It starts at the OS level, so yeah, it is not an easy path at the moment or me, for sure... Especially when you are used to go fast. Small things -- as we go along, small things can really slow down blind developers. And yeah, I'm learning as I go. It's difficult, because the tooling is, of course, not -- there's so many of us that it's very hard to have stellar tooling at the moment.

**Jon Calhoun:** I saw a talk -- I think it was a Visual Studio talk. I think it was linked on Twitter whenever you said you would come join us... And just seeing that was kind of interesting, because as somebody who's never even -- unfortunately, I've never even really thought about how does somebody code if they can't see... And if I was developing software, it wouldn't really be the first thing I'd think about, just because it's not something you experience from day to day. But then seeing somebody do it, it's kind of eye-opening, because you're like "Oh, there's a lot of things I could be doing better in - whether it's a website, or software, or whatever else." And you just don't think about it because it's just not your day-to-day type activity. So I imagine, like you said, it would be hard, because that might not be the first priority when they're releasing software.

**Dominic St-Pierre:** Yes, exactly. We are almost just getting started to have the website that we are creating to be as accessible as we -- it's not automatic, even for creating websites... So yeah, for sure, when you are writing code, it's certainly not the first thing that comes up. But I would guess that when you have a blind developer on your team, then it starts to make sense to do the small things.

I would say the most obvious would be function names. Being as explicit as possible with function names is extremely helpful for blind developers. Everything that relates to moving, navigating the code... So as much as other developers can help, this is a huge difference.

**Jon Calhoun:** So I guess this is up to you... Where would you like to start? Do you wanna talk about some of the tools you're using, or where would you like to start with the conversation?

**Dominic St-Pierre:** Yeah, I can talk about the tool. It's fairly simple for me, like I was saying... I'm in a transition, so not using a screen reader to using a screen reader - it's the hardest thing I've done in my life, and I'm not there yet.

The video that you were referring to - take a completely blind developer, for example, which were like that since their birth, for example... Compared to me, they are able to capture or understand the screen reader in a speed that I just cannot -- I'm not there yet. I don't even know how they are doing that. I'm blind since birth as well, but I always had a little visual -- so yeah, it's hard.

\[00:08:15.28\] So what I'm doing at this moment is that I force myself to close my screen, at the moment; so I need to close my screen, and I need to try to learn to use that. It is difficult. I'm a Linux user, I've been using Linux day to day since 2014... The tooling that I use there - it is extremely performant for me... Until three years ago. So I'm using i3 as the \[unintelligible 00:08:42.07\] manager. I'm not using my mouse, ever. All my windows are always maximized, and I'm using the virtual desktop of i3... So that was very good.

This way of working will not work for me in the next year or two years. I'm trying to switch to a Gnome-based desktop, because the only screen reader on Linux is Orca actually, and... Yeah, I'm not sure if it's going to work. To me, this is another very, very difficult change, accepting to leave my very comfortable zone... The Xrender on Linux - you can just reverse all colors, so this is extremely useful when you have a little bit of vision; sometimes a white background can be extremely difficult on your eyes.

So that's the tooling I'm using. Basically, I'm transitioning to being full-time using a screen reader... But yeah, this is extremely challenging.

**Jon Calhoun:** Which editor are you using then?

**Dominic St-Pierre:** VS Code.

**Jon Calhoun:** Okay. So do you imagine there'll be a day where possibly you'll have to switch to a different operating system? I personally don't know how good the tooling is in Linux, versus Windows, versus Mac. I don't really know. But I would imagine that, like you were saying, transitioning just to Gnome is already a challenge. I could potentially see a case where if some operating system just supports things better, you're stuck switching to something that's completely foreign in that sense.

**Dominic St-Pierre:** Yeah, That, and -- I mean, I frankly don't want to use Windows, and I would not really want to use a Mac... But yeah, I do have a Windows machine which I'm using to train myself on a screen reader. I'm using NVDA; this is a screen reader on Windows. This is working very fine. So it's not the accessibility tooling that I have a problem with, but switching OSes. But yeah, voiceover on Mac seems to be very nice as well.

This is something I really have to take a decision quick. I was even starting to think "Well, I should maybe try to contribute to Orca on Linux and try to make it better, try to make it so I can continue to work on Linux", because I would be very sad, frankly, to leave. But it's a possibility. It's been like that for all my life. I stop doing things that I love to do because I don't see enough anymore. So that's part of my life, it's the way it is.

**Jon Calhoun:** Yeah, I can definitely imagine that's a tough thing to both accept and experience the transition of.

**Dominic St-Pierre:** Yeah.

**Jon Calhoun:** So when it comes to programming then, you said that you're a polyglot software engineer, so I guess my next question is "Are you trying to stick with certain languages as you're learning these tools, or are you trying to learn techniques that apply to everything?" What is that process like?

**Dominic St-Pierre:** So I'm mostly doing Go for the last 6-7 years. I'm not sure how to answer that... I'm doing consulting, so my work requires me to work on lots of different languages, and stacks, and whatnot. This might be something.. For example, doing frontend at this moment - I'm not sure I will be able to do that anymore, just because it's very hard to build a beautiful frontend application when you don't really see the end result, and whatnot.

\[00:12:02.14\] So I'm transitioning towards a backend language that will allow me to make sure that once I do run full-time on the screen reader - which is very soon for me - I will not have an issue. So I have tried lots of different backend languages in the last ten years. I have a lot to say about lots of them, because it's very different from a blind developer, and it's just those small things that makes a language more usable on the screen reader or not.

**Jon Calhoun:** One thing I'd like to add is that I think what might happen is that you might have a different opinion as to what makes a beautiful UI in the future... Which is going to be very different from how other people see it, but it's also good to have a different perspective sometimes. And there might be a time where you could be the specialist in helping people make it actually accessible and a great blind experience, versus - you know, everybody's always focusing on things looking pretty, versus being functional.

**Dominic St-Pierre:** Yeah. The good old time when everything was text-based. That is the world. This is where we should go. \[laughs\]

**Jon Calhoun:** It kind of reminds me of -- I don't know if you've looked at remixes, something kind of new in the React world... And one of the big things that they pitch is that essentially with all the JavaScript stuff, it's kind of led to web pages that break traditional functionality, and that was one of their big goals in creating it, was that they want to allow people to make incremental changes, to take something that's basically just a regular HTML page and incrementally improve it without ruining the experience... And they gave some examples of it, but it's cool to see people focusing on that idea of "Let's not ruin the user experience that needs to be there, for some reason", and in some ways that has happened on this desire to make everything -- I don't even know the right word for it... Sort of like those real-time snappy JavaScript pages.

**Dominic St-Pierre:** Yeah.

**Jon Calhoun:** So you said that you have a lot of opinions about the languages and the backend languages... So you're using Go; from what I gather, you like Go as a language... So can you talk a little bit more about what makes Go an accessible language for you?

**Dominic St-Pierre:** Yeah. So for me, the reason number one would be the way packages are separated. Just by forcing the usage of the package name before a function - this is extremely easier for a blind developer.

Like I was saying earlier, navigation is the enemy here, and knowing very quickly where this function is declared or implemented - this is huge. Take, for example -- I was a C\# developer in a previous life, so my career started in .NET... And you can import a namespace in there, and you just use functions... We don't really have an easy way to mouse over something and just see what the namespace of that thing is... So just having that clearly stated in Go - this is extremely useful.

**Jon Calhoun:** I take it that means that's a good reason not to use -- is it the period import in Go?

**Dominic St-Pierre:** Yeah, exactly.

**Jon Calhoun:** So it's just one more reason not to use that...? I know it's not really encouraged in Go anyway. I think the only place I've actually seen it is in testing frameworks maybe... But it is good to know that's one more reason why it's not necessarily a good thing to be using.

**Dominic St-Pierre:** Yes. Well, for a blind developer at least...

**Jon Calhoun:** I would almost argue for every developer... \[laughter\]

**Dominic St-Pierre:** Well, yeah, exactly... But you know... So yeah, one other thing - of course, GoDoc. On the terminal, GoDoc - just having to look at what a function wants in its parameter, and what it is returning... It's strange, because I can compare both worlds now... When you see your screen very well, then yes, VS Code or any editor will provide you a visual indication \[unintelligible 00:15:53.19\] as a string, for example. But sometimes the screen readers are not picking those, or they are not speaking the return type, ever. It's very hard.

\[00:16:06.23\] So this is a good thing... GoDoc is extremely useful. You just go to your terminal, and your screen reader will have no issues whatsoever reading everything that the developer wrote, that that function wanted you to do. So this is major.

That brings me to a downside as well, while we are here... Small, one-letter variable names in Go - it is hard for a screen reader as well, and for the blind developer in general, especially when \[unintelligible 00:16:36.29\] very fast, you are missing those. We always use \[unintelligible 00:16:40.18\] and whatnot in Go, and those are difficult.

**Jon Calhoun:** I can't relate exactly, but I listen to audiobooks on 2x speed, and that's something that took me a while to get to that speed. And it depends on the narrator and a bunch of other aspects. But over several years of listening to audiobooks, I just gradually slowly increased the speed. But I can definitely say there are still times where certain words of phrases, for whatever reason, I have to go back and slow it down, because I can listen to it four times at 2x speed and for whatever reason that sentence I cannot understand. But every other thing in the book is completely fine.

So I could imagine there's certain variables and things like that that when they're thrown in there - it's almost like they're too short, or something. They just get skimmed over, and it's really hard to comprehend them at that time.

**Dominic St-Pierre:** Yeah, absolutely. That's a downside. But yeah, it's all the tooling, of course. So the fact that everything is very easy on the command line makes it very nice. One major aspect I would say as well is - you know when you try to go build something... Let's say you have 500 errors. It will not spit out all of those errors. This is major, because you have to understand that a screen reader is a one-line thing, so it's very hard to navigate as well on the terminal. I don't know if it blocks at ten, or something like that, but yeah, this is something that is appreciated... So just showing less errors at the same time is helpful.

**Jon Calhoun:** How does that work for things like tests, if you're running tests and several of them are failing? Or you know how sometimes you will just get like a pass, which is nice, and then other times you'll get a lot more output, it feels like.

**Dominic St-Pierre:** Yeah... So I would say that I'm using most often the \[unintelligible 00:18:23.10\] and using a subset of tests at once. Especially when something is wrong, multiple outputs is an issue, and yes, this is a problem. But sometimes you don't have a choice; so you can output that into a text file and try to make sense of that in a more comfortable way. So that's different. This is where blind people would lose precious minutes compared to a sighted developer, for sure.

**Jon Calhoun:** Do you think there's anything that could be improved in that sense? I guess in my mind I'm wondering if there's a way to either summarize, or... Like, you almost summarize and say like "Eight tests failed..." You know what I mean? Something along those lines.

**Dominic St-Pierre:** Yeah, exactly... And maybe cherry-pick exactly what information you want to have; this would be great. So it's a tricky question, but...

**Jon Calhoun:** I understand... Even thinking about it now - it's not something I'm experiencing, but at the same time, I could easily see how complicated and challenging that would be... And I'm sure I'm missing a lot of nuance that you're experiencing that I'm not.

**Dominic St-Pierre:** Yeah, it's hard for me to answer as well, because -- at the same time, the Go team cannot do too much changes to accommodate. So that would need to be third-party, or whatnot. At that time, it's a question of preferences.

**Jon Calhoun:** It's interesting, because talking about this makes me feel like there's probably a world of tools that could be built around making that experience better... But it unfortunately probably needs somebody who is experiencing those pains to actually understand and know what to build. Call me crazy, but I suspect that most developers aren't willing to learn how to use a screen reader simply to experience that. Like, you'd be very dedicated to do that.

**Dominic St-Pierre:** Yeah, I would guess not, because frankly, it is not fun. But yeah, this is something I see myself doing in the future. I always have a couple of open source projects myself here and there... I will not have any choice but to build what I will need to continue working. I love to program; I will not stop doing that. So that's why I was also saying that if I have to, I will contribute to Orca and try to make it work in a Linux distribution.

**Break:** \[00:20:43.08\]

**Jon Calhoun:** So are there other things in Go that make -- or really in any language that you've seen... What types of things should developers be looking out for if they're designing a language, or working on a programming language? What types of things have you seen so far that make it more challenging?

**Dominic St-Pierre:** I can tell that -- let's pick on Elixir a little bit here. I love it, by the way; I'm a huge fan. But there are some things there that it's very hard for a blind person. The symbols. Let's talk about symbols. This is why Go is also very great, because you don't really have much symbols.

You know, other than the channel, I cannot really think about anything else. Even the generics that are coming - they are still on square brackets, if I'm not mistaken. But symbols like, let's say, equal, or greater than; and lots of -- I was talking about Elixir... So you have like -- not label, but atom, or whatever they are calling that, in their maps...

**Jon Calhoun:** Is that the thing like in Ruby, where you put a colon before?

**Dominic St-Pierre:** Yeah. Oh, yeah.

**Jon Calhoun:** Okay.

**Dominic St-Pierre:** And also that, and there are two or three ways to do that. So this is extremely difficult, because -- yeah, those small subtleties for a person that sees well, those are huge. The symbols are very hard, so that's why as well in Python, due to the spaces that delimits the block, this is extremely hard. Even with the text editor doing a nice job. But yeah, symbols are difficult to work with at a reasonable speed.

**Jon Calhoun:** Related to that - in Go, the fact that upper-case letters and lower-case letters actually have significance... Is that something that's proved to be challenging? Or how do you approach that?

**Dominic St-Pierre:** Well, for me at least, because I do have my screen reader telling that to me, so that's great... I prefer that, than having, let's say, a modifier like private/public-protected, or sealed, or whatever the flavor.

\[00:24:00.27\] I would say as well not being an object-oriented language is also helpful. And let me explain, because it's a huge claim, probably... This hierarchy of objects in C\# and Java, that we don't really have, unless you do composing in Go - we are returning to navigation, as well. The structure of all those objects is kind of difficult to navigate, to be frank... To understand what is going on in that. Because it's very quick for you to switch \[unintelligible 00:24:33.10\]

Let's say you're moving from one package to another, and you're returning, and visually, you are quickly, rapidly re-understanding if that's a word where you were when you left... And this is not really easy with a screen reader. You always need to re-check your surrounding. Again, a screen reader is a one-line thing, so let's say your cursor is on line 13... You just have the context of that line.

Let's say you have return empty string on Go. So where are you? What's that function where I was? So having structure, and not having \[unintelligible 00:25:15.06\] in my opinion, it's helpful.

**Jon Calhoun:** That makes sense. I completely get what you're saying, where like if you jump from line 13 to line 50, visually I think we kind of just take for granted the fact that you see the function definition above it a couple of lines... But like you said, if it's a screen reader that's just reading the line you're on, it's not gonna give you that context, and it wouldn't know to do it, so it's kind of like a -- at least I suspect, you'd have to spend a little bit of time figuring out "What function am I in? What is going on here?"

**Dominic St-Pierre:** Yeah, absolutely. This might be a VS Code extension that I will probably want to write myself. Just a keystroke, and -- it probably exists; I honestly did not check. But yeah, it should speak out which function you are in. That would be helpful, for sure.

**Jon Calhoun:** I'm assuming that there's something to collapse functions... I would almost think that would be helpful in the sense that it knows where that function is starting, if that makes sense... So it should have the context to sort of figure out "This is what this is."

**Dominic St-Pierre:** Yeah, I think so. I hope so. But yeah, I will check.

**Jon Calhoun:** Another question I have is with features like generics coming out, which arguably are going to make the language more confusing, at least if you're looking at code with generics in it. Is that something that concerns you? And I say this as somebody who -- when I'm reading generic code, it is not always clear to me. I have to take -- most Go code, I can just skim over and be like "Okay, cool. I know what this is doing." But generics, I have to take a double-take and be like, "Now, what's that type again?" And it takes a little bit more. And I can only imagine in your case, having that read out loud would be -- like, there's just a lot to consume in one line of basically saying the type, and that it's this type... Does that make sense? Is that something that concerns you, or are you hopeful that you'll just be consuming generics, rather than writing code with it?

**Dominic St-Pierre:** It's a small concern, I would say. I've looked at generics in Go, and they appear to be digestible. But I frankly haven't tried them with a screen reader yet, so I'm not really sure what... But yeah, it seems to be -- I'm also used to generics, so it does not appear to be that hard, from a screen reader point of view.

**Jon Calhoun:** As I say, if you're using a lot of languages, that probably helps. I think one of the things that forces me to do a double-take on generics is that I haven't used them in quite a while... Like, I've used them a lot in Java, because you pretty much have to in Java, if you like... But since then, I have not really touched them, and it's been a while since I've used Java, so it's one of those things where I'm hoping that familiarity and seeing them more frequently makes it easier to read them and comprehend them... Otherwise it's gonna slow me down some, too... Which I think is an okay trade-off for some of the stuff, but hopefully they don't get used everywhere.

**Dominic St-Pierre:** \[00:27:54.01\] Yeah, one aspect is that it brings that one-letter word, if you will, that I would expect lots of people would use probably T... And the fact that it's capitalized as well... So the screen reader will say "Capital T" at each time. But I prefer that. I'm grateful that it is capitalized as well. So that's something that I think will -- if my memory is correct, they are capitalized, so...

**Jon Calhoun:** I think most people capitalize them, in the examples I've seen.

**Dominic St-Pierre:** Okay.

**Jon Calhoun:** I can't imagine it's required, but it just seems like one of those things that just carried over from other languages.

**Dominic St-Pierre:** Yeah, I don't know; I have a doubt now. I remember having seen an \[unintelligible 00:28:31.17\] and I think it was lower-case. That will be a challenge, for sure. Maybe I will change my point of view; it will probably be difficult.

**Jon Calhoun:** You've got me curious now, because I haven't -- I think there was a proposed package for Go maybe 1.18, maybe 1.19... I don't remember which one it was being proposed for, but it was a package with slice operations...

**Dominic St-Pierre:** Yeah.

**Jon Calhoun:** ...that was meant to go in the standard library. But I didn't actually look at the code too much to see what all was there, and what the code looked like... So I'll have to check that out at some point.

**Dominic St-Pierre:** I think the \[unintelligible 00:29:07.10\] was lower-case, but I could be wrong.

**Jon Calhoun:** So my next question is more about other people you're working with. You'd mentioned the single-letter variables... Are there other things that developers do that make your life better or worse? Or I guess some of that times it might be yourself in the past... Have you found yourself looking at code you wrote in the past, and being angry at yourself?

**Dominic St-Pierre:** Yeah, of course, but... \[laughs\] I think commenting is overrated, probably. A good comment is still very helpful, so we tend as developers (I think) to not really comment. Especially in Go, because it's so verbose, it's so clear what it is doing... But a comment line explaining what it is doing can save two minutes for blind developers, because now you don't have to scroll down a five-line \[unintelligible 00:29:59.21\] or whatever it is doing. So yeah, commenting is extremely helpful for us.

Nothing really -- well, pair programming. This is a complete topic... It's super-hard for a person to follow, of course, someone that sees well. When you're driving, it's often very difficult, because the other party does not really understand why it is so long \[unintelligible 00:30:31.14\] or whatever the reason... So yeah, pair programming is very difficult.

**Jon Calhoun:** It almost feels like if you had the audio one on your end -- like, if I was pair programming with you, and you had the audio one... I'm guessing that's not normally the case, because normally, the audio on your computer doesn't get pushed through video, or anything like that... But if it was there, I suspect it would be useful in the sense that it would help open up people's eyes as to what you're experiencing, and then I think it'd be a lot easier to be understanding and empathetic about it... But I agree with you that before then, you might be sitting there like "Why is this person sitting on this line? I don't know what's going on." And meanwhile, you're trying to listen to the screen reader to understand what's going on on this line, and that's very different from very different from visually looking at it.

**Dominic St-Pierre:** Yeah. Maybe one tip, if you ever do anything, even if it's not pair programming, but just talking about code with a blind person - just say the line number. Don't say "Find this function." No, no, no. Just say "It's in the main.go at line 150." That is how you indicate to a blind person where to go exactly, very fast.

**Jon Calhoun:** The worst is as developers we know how valuable that is when we're looking at broken tests, or compiler errors... But I agree with you that it's not something that we think to say, despite the information being readily available, which is not something we generally think to say while we're communicating verbally with somebody...

**Dominic St-Pierre:** Yeah.

**Jon Calhoun:** \[00:31:52.25\] So I guess the next thing I'd wanna ask is what other languages have you tried going into this, with the screen reader and that sort of tooling? You mentioned Go... Are there some others that you've given a shot to see how they were and how they compared?

**Dominic St-Pierre:** Oh, yeah. I'm still doing consulting in .NET, C\#, so it's okay-ish... But yeah, there's so many Windows dialogues and whatnot that come with .NET... It's not really the language per se, it's more like the framework, or Visual Studio in itself.

I know there's Visual Studio Speak, which I have not tested yet. It seems to be like a screen reader only built by the Visual Studio team, which is very nice. It's a great initiative. I did not have the time to test it.

So yeah, Elm is great, because -- well, the compiler. The compiler is just your co-pilot, really. And I'm not talking about GitHub Copilot here, which is not good to -- anyways, that's another story... But yeah, the Elm compiler is great, because first of all, when you are on your website, your web app, whatever, you just have one error at once on the web UI. On the terminal, it's a little bit different. They are showing lots of errors. But yeah, on the web page it's pretty clear.

I'm trying to think about the tooling... So when you are creating a CLI, for example - this might not be for blind users, but let's say for me five years ago, using colors. It should be optional. I was a very low visual person five years ago, and any green, any light colors were very hard for me to see. So yeah, that's a small thing for --

But yeah, it's difficult. I don't know how to answer that, frankly. The command line is really helpful, and -- well, it might be a preference thing as well, so I cannot speak for everyone, obviously...

I talked with -- when I was starting to really lose lots of vision two years ago, I talked with a PHP programmer that worked at Booking.com, actually, which is completely blind... And he was trying to convince me to switch to Emacs and whatnot. But it's -- to take Darth Vader's words, "It's too late for me." I cannot do that.

So I'm not sure at this point if I'm having my baggage of 20 years of development that is difficult to change... That might be why I'm saying that C\# is harder than Go, for example, as a blind developer. But yeah, I feel that the object-oriented languages feel a little bit harder to navigate, for sure. And all those keywords that you need to \[unintelligible 00:34:48.15\] and whatnot. So all the visibility for a class or a function - it really adds lots of noise, in all senses of the word; screen reader and code-wise, I think. Those are very hard, because you have to rely on having to return to the function, trying to see what it was exactly, what's going on in here.

**Break:** \[00:35:15.16\]

**Jon Calhoun:** You mentioned earlier when we were talking that it's a slower process... So it's not one where you can -- basically, it just takes more time to go through stuff and to write certain code. So with that in mind, do you find yourself taking more time and thinking things through a little bit more ahead of time, or do you find yourself planning what you're going to do a little bit more than what you used to?

**Dominic St-Pierre:** Yeah, a little bit. The biggest difference is that I'm not reusing the IntelliSense or code suggestions as much now. Those are not very hard to use, but not as easy as when you are seeing exactly what you are doing.

Let's say you're writing a web handler in Go, for example. You type http.request, and usually I was doing Tab very fast five years ago, because I was directly on the right thing. Now I need to wait a little bit, listen to what the screen reader is saying, and "Oh, what? What did it say?" So you need to jump one element above to try to see "Well, am I on the right thing?" So you have to re-check almost everything that you are typing. This is the flow.

Let's continue with this web handler... So once you do \[unintelligible 00:39:01.01\] for example, you just return one word and you make sure "Well, did I type 'request' or not?" So those small things, compared to -- you know, it takes like 1-2 seconds to write this, normally... So it's those things.

So yeah, I think test-driven development will finally be something I should start to do, because I really see the value of having the compiler really being my sighted friend, if you will. So this is where I will be certain that I'm not doing newbie mistakes -- not newbie mistakes, but I'm not doing blind mistakes... Or -- I don't know how to say that. I'm not doing easy mistakes to miss when you are not seeing. Because it's very hard.

**Jon Calhoun:** I think it's worth saying, I guess, that what is easy for one person is not necessarily easy for somebody else... Because I'm sitting here in my head, thinking like, I have typos, or I swap two letters all the time... And if we couldn't see it visually, it's very hard to check that real quickly. And I imagine that if I was closing my eyes and typing, I'd have to be a little bit slower in typing and a little bit more certain that I was typing it correctly... Versus when you can see, you can just kind of throw some code there real quickly, and if it's wrong, you'll see it and you would just quickly take the suggestion it gives you and move on.

**Dominic St-Pierre:** \[00:40:26.12\] Yeah, and often your code editor should do a small red line under. Something that it's not. So we don't have that on a screen reader; there's no notifier for that. So yeah, it's a challenge. I would say anyone that wants to really understand a little bit what it is - close your eyes, and don't cheat, and write an email, for example. You will see that it is extremely difficult.

But the tooling is great, because a screen reader - you can read the previous word, the previous sentence, the line above, the line on top, and whatnot, without the cursor having to change the line. I don't know if I'm clear here, but... You can move a virtual cursor, if you will, on the screen, without you really moving the editing cursor. So that takes a little bit of time to get used to, because - yeah, it's strange.

**Jon Calhoun:** And it's also just learning a whole new set of keyboard -- like you said, you don't like to use the mouse, and I'm assuming using the mouse is even harder if you can't see... Or if not impossible. I would imagine at that point it's learning a whole new set of keyboards to go along with all the other ones that you already use.

**Dominic St-Pierre:** Oh, yeah. And there's a lot. And we haven't talked about the web. Navigating a web page is probably harder than navigating code... Because in VS Code you do Ctrl+P and you go to your Go file, and whatnot.

Let me explain what my problem is visually... So I always add only 2% of field of vision. Let's say a standard person has a 150% field of vision... So I add a 2% of that. When I looked at my screen, I was seeing only two letters at a time. So I'm kind of used a little bit to just see a small, tiny portion of my screen. So I'm not really using a mouse for a long, long time, I would say. It's a difficult transition, but it's not completely different for me... But yeah, it's still a huge change.

**Jon Calhoun:** So when you're actually visiting websites and going through there, what does that process look like, I guess? Because I have gone to a website, and kind of -- like, you can hit Tab and kind of go through links, and there's some things that I know that I can do if I just don't have my mouse with me... But I can't imagine what the process is like. Are you using like Pg. Down or something like that to read through it, or what does that look like?

**Dominic St-Pierre:** There's tools in the browser -- well, not in the browser, but in the screen reader, that allow you to navigate quickly by H tag. So H1, H2, H3. So that's the first thing. Then you kind of use your arrow key to continue in that paragraph. Let's say you are the right H1, for example, or H2. There's also a shortcut to quickly have all the links, very quickly, all the links in the page that you have let's say in the \[unintelligible 00:43:18.10\] or I don't know what it is; the alias stuff, or something. So you can scroll that very quickly, and just click any links

Let's say you are on a phone and someone says "Go click on that thing." It's like what we were saying for pair programming; navigating is really what makes things difficult.

I used links for a long time when I was younger, to navigate websites. Before the JavaScript single page, that was very easy for me at that time. But it's not possible anymore. There's too much JavaScript everywhere, and those tools are not capable of interpreting that.

So that's a little complaint I have... The new doc site for Go, the go.dev - I think before it was GoDoc.org... It was just easier before.

**Jon Calhoun:** \[00:44:15.00\] Hopefully, somebody on the Go team listens and hears that, because I'm sure that wasn't their intent, to make things harder...

**Dominic St-Pierre:** No, no, absolutely.

**Jon Calhoun:** And now they know that maybe it's something they can put more attention into, like "How can we make this more accessible?"

**Dominic St-Pierre:** Sure.

**Jon Calhoun:** So we are getting near the end of the hour... Do you have an unpopular opinion you'd like to share?

**Jingle:** \[00:44:33.29\] to \[00:44:50.06\]

**Jon Calhoun:** Alright, Dominic... It's time for you to share your unpopular opinion. Then we'll post it on Twitter, people will vote, and as Mat says, if it's not unpopular, you have to come back on the show. That's your punishment.

**Dominic St-Pierre:** Yeah, I hope I will not have a problem for that, but... To me, the educational system is killing the creativity of our children. Period.

**Jon Calhoun:** Do you wanna elaborate?

**Dominic St-Pierre:** Well, I'm talking more about my region here... So I'm not talking about the entirety of the world. We are living in Quebec, Canada, and in here - well, there's not enough money that the government is injecting in the education system... And yeah, we did homeschool all our lives with our children, because we were feeling that they were going to not be -- you know, the enthusiastic idea of children are not very pushed forward in the current system, in my opinion.

**Jon Calhoun:** Do you feel like it was that way when you were in school, or do you think it's more of a recent change?

**Dominic St-Pierre:** That's a good question... I know I hated going there. I was not having fun at all, and to be frank, I'm a huge entrepreneur as well... So yeah - to me, having the liberty of expression and whatnot is very important... And to be frank, being stuck eight hours a day, or six hours a day, in a class, especially here in Quebec.. So there are some schools that don't even have windows. The quality of the air in the schools is in question at the moment, in Quebec. We don't have a great educational system in here. That's sad, and I'm sad for the teachers as well, because it's not them, it's the government; it's all the... Yeah. So I don't know how it is in the U.S, but in here it's hard.

**Jon Calhoun:** I was gonna say, in the U.S. at least, I can say that most teachers don't get into it -- basically, they love teaching kids and helping them grow, and they don't get into it for the money, because there's not any money in teaching... So like you said, I think most teachers have the right incentives most of the time, but unfortunately, they're kind of limited with resources.

Our daughter is not in school yet, so I haven't experienced it first-hand... But it is something that concerns me, and something that I talk with my wife about, is like - this homeschooling makes sense part of the time.

And it's also hard for me, because personally, when I was in school, I feel like I got lucky. Our school had a gifted program, and I somehow got into it in the first grade... And basically, that was really rare. And for the most part - I've learned this later. Most of the kids who got into the gifted program were teachers or children. It was rarely other kids in the school. So it opened the door and allowed me to experiment with other stuff. Because basically, one day every two weeks I would go to a completely separate class, with other kids who were supposed to be in this gifted program... And we'd do things like logic puzzles; that's where I was first introduced to programming with BASIC. And a bunch of things that really shaped my life.

But there's probably a bunch of kids who deserved to be in a program like that, who would have thrived, or something like that, but they just didn't get the chance... And seeing that now, I'm like "Well, that really sucks."

**Dominic St-Pierre:** \[00:48:02.14\] Yeah, exactly. I hear you. This is the same for sports, after-school sport - it should be open to everyone. It's sad to see kids that don't really have the money to do that, cannot do that because of the money aspect. So the government should inject way, way more money into the education system.

**Jon Calhoun:** In the U.S. at least, after-school sports tend -- well, I guess it depends on the sport. There are some sports that are harder... But things like soccer and football and a lot of those things - usually, the school, at least where I live, the schools do fundraiser type things to provide... Like, essentially, a kid can go play football without any money whatsoever. The football team and other things will do fundraisers to try to help produce funds for that sort of stuff.

But I've also heard -- not my local school, but there's another school in the area that has a mountain-biking team; they do mountain-bike racing... And it's not officially a state-sponsored sport; it's like a third-party, some other affiliate that's doing it... And I don't know how familiar you are with biking, but generally, mountain-biking is not a cheap sport to get into, by any stretch; so as a result, it's unfortunately a sport that it's mostly kids who have money who can do it, and it's hard for other kids to get into it.

I know there's some people in the area who are trying to donate bikes and things like that to make it more accessible for them, but it is a trickier thing for them, where it's trying to figure out "How do we get people into this?" Because cycling is one of those things that's really healthy for you, and it's something you don't need a whole team -- like, soccer, football, you need a whole team to go do, whereas cycling is something somebody can do the rest of their life to stay in shape, which is better for everybody...

**Dominic St-Pierre:** Yeah.

**Jon Calhoun:** It is a tough problem, I think.

**Dominic St-Pierre:** That could be a huge difference for a certain child, to have access to that or not. That could be the difference that they need to just continue forward, instead of quitting school at some point.

**Jon Calhoun:** So we have somebody in the GoTime.fm chat saying that they think this is going to be an popular opinion. You aren't gonna be unpopular enough. You'll have to join us again.

**Dominic St-Pierre:** Nice. So yeah, hopefully next time it will be for my Go knowledge, instead of my physical condition.

**Jon Calhoun:** Well, we can definitely talk about some Go knowledge at some point. I didn't mean to seem like the only reason we wanted you on here was because of the blind aspect...

**Dominic St-Pierre:** Oh, no, no, no.

**Jon Calhoun:** It was more of one of those that I have never talked with somebody who codes in Go who's blind, and in my mind, it's a great opportunity to learn something that otherwise we would have never thought about or heard... And that's also why I think everybody listening would enjoy this episode, is it's not -- it's something that I think people want to be more knowledgeable about, so they can try to be a little bit more helpful, if they can... But at the same time, it's really hard to know what is even useful or not. Like, you saying short variable names is not something I would have thought about until you said it. But now that you say it, I'm like "Oh, I guess that kind of makes sense. I didn't think about that."

**Dominic St-Pierre:** Yeah, sure. Underscores are to be banned as well. \[laughs\]

**Jon Calhoun:** Yeah, the underscore is a tricky one. I think the only time I typically tend to see it in my own code is whenever I'm temporarily just taking a variable and making it so it's not giving me a compiler error, or when I'm basically importing a SQL driver of some sort. Those seem to be the two cases.

**Dominic St-Pierre:** Yeah, but I'm not talking about the underscore to ignore an error, or something like that. I'm talking in the function name, or in the variable name.

**Jon Calhoun:** Oh. I'm trying to think... I've seen them in some tests before, but I don't remember why, off the top of my head.

**Dominic St-Pierre:** Same here. Maybe it's more easy to see, because test names - that's another thing. A test name tends to be extremely long... There's a right amount of length to have. If it's too long, it's very hard as well... So yeah.

**Jon Calhoun:** You don't like a 200-character function name?

**Dominic St-Pierre:** No, not really... \[laughs\]

**Jon Calhoun:** I can understand that. Alright, Dominic, thank you for joining us. It was great to hear your perspective and learn more about this. Is there anything else you'd like to share before we end up the episode?

**Dominic St-Pierre:** No, that's fine. Thank you very much for having me. This was great, and I hope to return at some point.

**Jon Calhoun:** Definitely. Thank you, everybody, for listening.
