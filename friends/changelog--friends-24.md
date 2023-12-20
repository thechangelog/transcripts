**Jerod Santo:** So I am here with my friend Kris Brandow. Hey, welcome back, dude.

**Kris Brandow:** Hey, glad to be back.

**Jerod Santo:** People enjoyed our last episode together.

**Kris Brandow:** Yeah, I saw that.

**Jerod Santo:** Do I sound surprised? \[laughter\] You're "Wait, were they not supposed to, or what were you expecting...?"

**Kris Brandow:** People generally what I have to say, Jerod... Come on now.

**Jerod Santo:** \[laughs\] I also. I was one of those people who enjoyed it, so of course, happy to have you back. I think you enjoyed a recent episode I did with Justin Searles... At least the premise of it being this whole "It depends." That resonated with listeners as well; maybe not the particular episode - sorry, Justin... No, it did. But the idea that I had for this "It Depends" podcast, and how we're just doing it now loosely underneath the umbrella of Changelog & Friends - I think people liked that whole idea of two people, with experience, different experiences hopefully, diving into the nitty-gritty decision-making processes that we go through, how, question each other etc. And you... You liked that idea.

**Kris Brandow:** Yeah, yeah. As soon as I heard that, I was "Oh, this is a great idea, and this is definitely a show I want to be a part of", or a mini series, or whatever it is, that I want to be a part of... Because I do say "It depends" a lot.

**Jerod Santo:** You do. In fact, we put together that a little montage of everybody saying "it depends" throughout most recent 50 episodes or so, and I think you got on there twice. One who was "It depends what TikTok you're on", which I'm not sure what that conversation was about...

*"I guess it depends on which TikTok you're on..."*

**Jerod Santo:** I do have a soundbite of you. Maybe I'll put it in right here.

*"This episode is wild..."*

**Jerod Santo:** ...where you say "This episode's wild." And I think it might have been -- I remember clipping that and saying "That's a good soundboard, Kris saying that." But I think that might have been the episode when you're just talking about "It depends on what TikTok you're on."

**Kris Brandow:** Yeah, I'm trying to remember what the context that was. I remember saying it... I vaguely remember the episode, but I don't remember the context. But I remember just -- I was walking, and I was listening, and then you had that little clip of all the sounds. And I was "Oh, this is cool. I wonder if I'm gonna be in this." And then I was waiting and waiting, and then I heard that one of "Oh, it depends on what TikTok you're on." And I'm "Is that my It Depends clip?" I was so disappointed. And then I was walking, and I think I might have paused right before, because I was almost at my destination... But I messaged you and I was "Oh, I'm so sad that this is the one I had." And then I got to the end, and it was just me going "It depends..." And I was "Ph, no, that's perfect!" \[laughs\]

**Jerod Santo:** Yes. Which is why I use it as the closer, because just the amount of remorse and angst that you expressed there... In fact, one of those sounds was Matt Ryer saying "I think It Depends should have its own little theme song." I didn't have Breakmaster put together something special yet. I'm just riffing... But I did put together a brief jingle, and you may find your voice on it. Here it is...

\[00:03:43.22\]

*"It depends..."*

**Kris Brandow:** \[laughs\]

**Jerod Santo:** There you go. So... \[laughs\] I think that's a good representation of this whole concept.

**Kris Brandow:** Yeah, I definitely think so.

**Jerod Santo:** So Justin and I were talking about dependencies, and certainly a big topic, one that we will take up again, probably in different ways, with different people over time... Because it's one of those decisions that we all have to make on a recurring basis, and so it just requires a lot of thought and a lot of discussion, and I think a lot of data points; it is useful. Today you and I are going to do it an It Depends on APIs... Which, again, even that, as I say the term, is like a multitude of conversations could come out of such a thing. We're going to talk about designing APIs, building them... Also, we'll reference consuming them, of course, and all the little things. And we're going to start that conversation by it-depends-ing the jargon, because even API is such a generic thing. And application programming interface - that can manifest itself in so many different ways. And so maybe we start with a definition, or start out by breaking down generically at least the major types of APIs that we come across.

**Kris Brandow:** Yeah. So when I was thinking about this, I was like "Okay, what APIs exist out there?" And I think the one that shoots at the top of everybody's mind when they hear API are web APIs, or microservice APIs; things that are typically built with HTTP, and used to communicate between separate computing entities. There's also language APIs, which we all use; you know, standard language, a lot of standard libraries, and all of the dependencies that you import, that have their own APIs that you're using directly in your source code...

**Jerod Santo:** Right.

**Kris Brandow:** But also, there's two other types of APIs that I think are also quite interesting, and I also think they maybe can teach us a bit about how we should think about designing APIs... Those are the operating system-level APIs, or the system call library level stuff; the Linux system call, standard library -- I don't even know what to really call it, but yeah, that layer of really low-level, really invoking from C, or Assembly, or something like that... And then even lower level are these things called ABIs, which stands for Application Binary Interface, which is like APIs but for your Elf, or \[unintelligible 00:06:15.06\] PE, the format Windows uses, like how you can make sure that if you have a dll that's compiled, and an application that are compiled, two different versions of a compiler, that they'll be able to work together. So those lower-level machine code interfacing.

**Jerod Santo:** Right.

**Kris Brandow:** Weird stuff like calling conventions in there as well, which I have a thing that we can get to later on about maybe how we can design APIs better there. The big two that people think about are definitely language APIs, and then the web APIs.

**Jerod Santo:** Well, let's start with the language APIs, or the programming level APIs. I think the web APIs is the one that most of us think of most of the time, and probably consume as working developers. I think we probably are more consuming those. Surely we're writing them as well... But what we're all writing is the in-the-small APIs that we ourselves are consuming in our application code, or in our library code, or that we're writing for others to consume in their application code... Literally all developers are writing those APIs. We don't really think about them; what we think about is lik functions, or methods, or pick your particular term depending on the context of the executable... But we design those APIs all day every day, don't we? I mean, we just don't think about it very much, but those... I mean, I'm sure you think that that should be designed, right? Not just kind of grown...

**Kris Brandow:** Yeah, absolutely. I think this is a big It Depends area as well, of like what stage are you in. If you're just prototyping, you don't need to do that much design or that much documentation of the API you're building. But definitely if you're -- even if you're building a whole cohesive thing that's just like a thing that's going to run, like a CLI that's not going to be used as a library, still just thinking through how you lay out your functions, and your methods, and your types, and all of that, how all those things interact is very important for the long-term maintainability of that API. And I think for most of us, when we're sitting down and writing all these things, we're just like "I just need a function that does this." Or "This function's too big, so I'm going to start breaking it out into other things", and kind of making more surface area of that API.

**Jerod Santo:** Right.

**Kris Brandow:** In a way I'm not sure people would really do if they were thinking of this more as in from the library sense. I think when you jump to the library design, you're like "Oh, I've gotta really think about all of the functions I have and what they're doing."

**Jerod Santo:** Yeah, you think about it more, because you think somebody else is going to be using this, and it needs to be consumable, and repeatable, or it has to have certain characteristics that make it good for them. But when we're writing our own functions internally that maybe nobody's ever going to see, or maybe you're only going to use it once. A lot of times I'll abstract a function simply to put a name on the logic, and it's like, that name needs to be relatively good enough, to be descriptive, so that I know what that bit of code is doing... But I'm not really thinking about it as an API, because I'm just extracting a function so that I can name some bit of code.

But when you're naming functions and designing functions, whether you're going to be using them, your immediate team, or once you get to the library level, do you have heuristics or thoughts on what makes, in the small, a single-function API good or bad, better or worse?

**Kris Brandow:** Yeah. I think definitely the number one indicator is how many parameters do you have, really. That's the first thing I always look at. Does this thing have two or three parameters? ...which I'm like "Okay, cool." Or does it -- I think on one of the codebases we were working on we had this function that had 16 parameters, and we're like "Okay, well, this is a sign that this thing's kind of broken." And also the number of parameters compared to the lines of code, of the actual function itself... The one that had 16 parameters was also three lines of code, because it was calling another thing that had 15 parameters... And that was a sign of like "Oh, this is a spot in our local API that we need to fix, because this is just not okay." So I think definitely looking at the parameters and the inputs to the functions I'm creating is one of the biggest signs that I tend to look at.

**Jerod Santo:** \[00:10:23.20\] Yeah, inputs and outputs... I mean, I guess the three things that I consider is the name, which if you're having a really hard time naming something, I think that's a point to slow down, and maybe think you're trying to encapsulate too much sometimes... And maybe you're actually -- it's two things, or more, and that's why it's hard to name... But clarity and naming is something that I take very seriously, even with my own code, which - there's lots of with my own code that I don't take seriously at all. But naming with clarity is one of them. It's probably because code comments is not something I take seriously, and so I need good names.

But naming inputs and outputs, that's pretty much what you're going to see from the outside of a function, and that's what you're going to care about, is like "Okay, what's coming in, what's coming out?" And I agree with you that too many parameters is an indicator of, again, poor design, or trying to do too much, or sometimes just scope creep... Because a lot of those functions start with not very many parameters, and then you're like "I'm just gonna slap another one on at the end here... And that's fine." And it probably was. And then the next time you come back, you're like "I'm just gonna slap another one on at the end here." And at a certain point you get to 16, and then people have meetings about your function that you wrote... And that's a problem. Then there's the cheat code, which is where you pass in a hash, or a map, or a struct, and you're like "See, it takes one. It only takes one input."

**Kris Brandow:** "It only takes one..."

**Jerod Santo:** \[laughs\]

**Kris Brandow:** Yeah, one of the things that when Go introduced the context object there was a lot of push in the community to be like "Don't put random junk in here that's supposed to be a parameter. Don't do parameter hiding in this thing, because that'll allow you to pass too much stuff into a function and not really rethink if this function needs to be broken up, or if you need to start restructuring your code." Because that's one of the things I really love about Go, is that because things are pushed to be so simple in a lot of ways, it becomes much easier to see when there's a problem somewhere. Whereas if you have that bag of stuff you can pass into something, it can be a little bit more difficult or challenging to figure out "What stuff is in here? What am I actually getting? What am I actually using?"

**Jerod Santo:** Exactly. I find a lot of complicated -- what's the opposite of "confident"? I mean, non-confident? Let's just go with that... Non-confident code is dealing with what bag of stuff is in this particular -- like, what are the contents of this bag of stuff? And I know that my TypeScript friends are yelling right now, "That's what TypeScript is for...!" But I'm sure you can pass some sort of an object in there and not define the contents of the object if you don't want to, and end up with a bag of tricks. Or the any/any type. That's the one, right?

**Kris Brandow:** Yeah...

**Jerod Santo:** In Go, it's pretty persnickety about that. But I'm sure you could just pass a struct in, like the context object, right?

**Kris Brandow:** Yeah, you can pass -- and that does happen quite a bit with APIs, where you have a struct... Especially when it's a constructor where you're like "Oh, there's a lot of different things that might be in here." You have a struct, or a special object type that builds up options, and then you pass that in... There's definitely cleaner ways to pass a large amount of information in... But it's also sort of obvious when you're looking at it. And sometimes, at the end of the day, you do just need to pass a lot of parameters into something, and I think when you do bundle it into a struct, into another type, that's pretty okay, as long as you've thought about it. As long as you can name that type properly and it's not just kind of like "input to function name", or whatever.

**Jerod Santo:** \[00:14:05.06\] Right. Or data. That's what I go with when I can't think of a better name; it's like "Here comes the data..." \[laughter\] I mean context is kind of just as bad. I mean, context is a pretty meaningless thing once you start to think about it. Everything is contextual. It's all context.

**Kris Brandow:** I mean, we've done a pretty good job of making sure that the context object just contains oddly timeouts... And then really \[unintelligible 00:14:23.25\] for like "Okay, well, this provides you information about the environment around you, so that you can more properly do something within a function." I rarely put things into the context object. It's mostly just I use it for timeouts and cancellation, which is I think the main reason why you're supposed to use that object. But other languages - I remember when I was still writing PHP back in the day, there would be a lot of -- I don't remember what it's called, but you kind of inject everything down, so you have this nice, big bag of stuff, and you just pull whatever objects you need off of that, and then use them... And I just remember how much of a mess that could be, and how confusing it could be to trace where all that came from.

**Jerod Santo:** Well, so in Phoenix land in Elixir we have the connection. That's your web request, your singular request that's flowing through all code. And we use words like pipeline, and it's immutable, so that helps out; you can't just change the connection itself, but you can return a new connection, of course, with different properties... And doggone it, sometimes -- here's an It Depends... I mean, sometimes when I'm just wanting to pass something else to myself later down the pipeline, that whole deal - like, yeah, I'll just throw it on the connection, and I'll check if it's there later. And if it is, then I'll just do something with it. And it's like, I know that there's a better way, and yet it's so darn convenient. And used sparingly, it's very productive to just add a little bit of context in your land. But...

**Kris Brandow:** Yeah. I think that it's definitely an It Depends sort of thing there, too. I think the goal is to always try and make your parameters and your function signatures really clean and pristine and nice, but sometimes you just can't get there yet, and sometimes you do just need to make it messy, and then you'll figure out how to clean it up later after you've kind of gone through the process and better understand the structure of things. Or sometimes stuff is just messy; everything doesn't have to be clean and pristine. You've gotta balance the amount of time you spend thinking and designing something, versus actually implementing and getting stuff done.

**Jerod Santo:** Yeah, sometimes when I find myself very stuck, especially with like a name, or "How do I frame this situation?", that's when I just realize that I'm lacking some sort of information that I'll probably have later, which is just more knowledge about what I'm trying to do, and how it's gonna work... And so I will slap the worst situation on, and a bad name. That's when I'll use code comments, and I'll be like "This name is terrible. I couldn't think of a better one. Please do. Please think of something better." And then I'll come back and be like "Oh, that name is terrible. Now it makes sense that it's this name, or it's this parameter." And so yeah, sometimes you do just have to move forward. But I guess then it becomes "Are you actually going to be diligent when you return to that? Are you also in a hurry at that point", and just like "Ah, I can't rename this now. I'm too busy." And then it just stays a mess. At some point you do -- when you have the information, you go back and change that.

So that's thinking, obviously, in the very small. What about the library-level API design? I mean, some things that I really appreciate in library APIs is... Guessability? I don't know what the word is... Where it's named and it's used in the way that I would expect it to be.

**Kris Brandow:** \[00:17:55.11\] I think that's like consistency...

**Jerod Santo:** Yeah, consistency plays into that; principle of least astonishment plays into that... I think uniform access principle plays into that sometimes... But it's really just like, if it works the way that I thought it should, then I feel like this is a good library. Maybe that's just like a Jerod bias. I just -- you'v probably used some software where you're like you can darn near just know the way it's gonna work. I mean, I felt jQuery was like this very much, where you could be like I bet there's a function called like .upcase. And then there is one; and that's not jQuery, it doesn't have that, but... For instance, I bet I can just upcase this with .upcase, and then it's like "Oh, cool. I totally can." And I feel like there's something good about that. Or is it maybe -- is that just very subjective?

**Kris Brandow:** I feel like this is -- one of the things I really liked about Drupal when I was writing that in my early career is that there was this hook system, which for a lot of reasons it wasn't a great system, but it made it very predictable to know "Oh, if I want to inject this piece of functionality, I know the words I should write, and the order I should write them to actually affect that piece of functionality the way that I want it." It's like, oh, I want to modify this thing before it gets processed by this module. Oh, I know, I can write this function with this particular name, and it'll get processed before this. And that predictability, that ease, that consistency made it really elegant to work with that system. There are all sorts of problems with that \[unintelligible 00:19:20.24\] system; if you made a typo, it just wouldn't run your code, and you'd have no idea why, and you're like "What's wrong?" It's like, "Oh, there's a typo in here." So there were many reasons why that system was not great... But I did like the elegance of that, and I feel like that's also one of the things that pulled me into Go when I was making that transition. I was making a decision basically between Go and Node.js, and I went with Go. And part of it was because when I was writing code, there was just this ease of predictability of what should this thing be called, and that I want to call, and you'd just type it out and it'd be like "Oh, it's that thing." It's like "Oh, I need a buffer of bytes." You're like "Oh, bytes.buffer." It's like "Oh, that's a thing." Or I want a reader on this slice of bytes. Oh, bytes.reader. There's all these nice little things that make you go "Oh, okay, this just makes sense. It just flows together well."

**Jerod Santo:** Yeah.

**Kris Brandow:** And when I've subsequently tried to design APIs, I tried to do that, as well as just making everything consistent and predictable as much as I can.

**Jerod Santo:** And that's one of the reasons why I really did not enjoy PHP as a language when I used it, was because - and this is ancient history. So I know that PHP is way better now... But the language design was so inconsistent. The functions, the way that you work with arrays versus strings, versus these things... I was constantly referencing the docs, because I couldn't possibly remember the way in which you would do the same thing in this particular area of PHP, that you would in the other particular area. Whereas Ruby, which was what I went for -- I went from Perl... So generally speaking, I went from Perl, to PHP, to Ruby, and to Elixir as like primary languages in my life. And I've done a lot of other ones as well on the side... But when I found Ruby, the consistency of the string objects functions, and then the way that arrays work, and the way that hashes work, and the way that it was just so consistent throughout, that I just felt like that was so much more enjoyable to use... Because I wasn't stopping and saying "Wait, is it stir\_len this time? Or is there no underscore?" For instance.

**Kris Brandow:** Yeah. \[laughs\]

**Jerod Santo:** And so yeah, that consistency - which turns into, I guess, guess-ability - is important. There's an amazing rant called "PHP, a fractal of bad design?"

**Kris Brandow:** I'm pretty sure I've read that.

**Jerod Santo:** Written by -- I can't remember who wrote it. But just a complete takedown. This is -- again, it's probably 15 years ago now... Of PHP just as the language design. It has a lot of good properties as an overall language and ecosystem, but we're talking about specifically API. It's so inconsistent that I've found it frustrating. And at first I didn't really know... Because Perl is kind of like that as well. Perl has short and long versions of everything, because of the whole \[unintelligible 00:22:00.23\] angle to their community... Which I think is really cool, but cranks out some of the most unreadable code in history, because of all of the special characters, and short versions of everything...

\[00:22:12.11\] But I didn't realize there was better ground out there when I first started using PHP inside of WordPress until I came across Ruby. And I was like "Oh, this is what good language would look like." Just as API design, specifically. Ruby has its own warts as well, of course...

**Kris Brandow:** Right, yeah.

**Jerod Santo:** And I find Go to be very easy to read, and straightforward and small, in the same way where it's like - it is, I think, consistent, for the most part, in my limited use of Go, which I've written a few Go programs, but not many.

**Kris Brandow:** Yeah. I mean, that's the thing of \[unintelligible 00:22:43.00\] just the very strong adherence to the idea of simplicity, and through that simplicity having clarity. That's always what I've looked for in the programming languages that I've used. And I think part of the reason why I just did gravitate toward Go over -- so I was writing Ruby for a little bit of time, I was writing JavaScript, and spent a lot of time writing PHP. And all of those languages just - they didn't have that simplicity that I was really craving, that ability to just kind of sit down and just write some code and have it be what I saw in my mind would be what is actually in the document at the end of the day. But I think that's also a weird brain thing for me, because I think a lot of people, for them Python or Ruby or PHP - that's their language that they can do that in. But for me it was definitely Go, for a long time. I'm trying to explore other things now. I'm getting back into JavaScript and finding there's some things that I like, maybe controversially, around "Oh, not having static typing is freeing, in some ways, even if it is a little annoying at times..." You know, being able to opt into a little bit of static typing when you want, and having it be more on the dynamic side...

**Jerod Santo:** Right. So are you working solo, though?

**Kris Brandow:** Yes. So right now it's just me solo. So I realized that that's also just a different type of experience than --

**Jerod Santo:** I eat, sleep and breathe dynamic languages. Always have. And I've used -- you know, Go bugged me in certain ways. I think the type inference was way nicer than things that came before it. And I still get just annoyed at types. And so I'm very much not on the type side, but - and I've even told you this in chat, because we were talking about maybe talking about typing as an It Depends. And I think that's a good topic for It Depends. I don't like them, but I am not a person who argues against it, because I literally work by myself most of the time, on small projects most of the time. And small teams all the time. I think the largest team I've worked on was like five people. And the codebase was long-lasting. So that changes things as well. But that was probably the biggest team I've been on. So I don't feel like the person who should argue these things, because I live in this weird world, that most developers don't. And so that's why I asked, "Are you solo?" Because I agree with you 100%, but I wonder if you would have that same feeling working with a whole bunch of people, moving fast and breaking things.

**Kris Brandow:** I think so, because I'm someone that's gonna push very hard in every codebase I'm in, to make sure it's well documented and well thought out... And what I've seen a lot over the course of my career is that people will not do good design of their code, and use static typing to paper over that. So the static typing that they have allows them to be a little bit worse, so they are a little bit worse with the actual documenting of the code and the actual thinking of how their code works... Whereas if you're in a dynamically-typed language, and you try and do that same stuff, you just won't be able to function. Some codebases I've walked into, and it's like "I can barely understand this, because there's types." But that's because you also haven't documented anything, and everything is named terribly, mostly because you can.

**Jerod Santo:** \[00:26:02.12\] Like, it's a crutch.

**Kris Brandow:** Yeah, yeah. And the codebases I've walked into, one of the things I tried to do is "Okay, I'm gonna try and document this. I'm gonna sit down and figure this out, and then write things about it so that we can all understand the page that we're on." Also, the benefits that people get from static typing isn't really the static types, it's the compiler being able to tell them "Hey, you've probably done something wrong here", which doesn't actually require declarative types. It just requires -- I think there's a language called Roc that if you don't declare any of the types, it does type inference for everything. And that's the type of thing I think people actually want at the end of the day... Which you can get from dynamically-typed languages. Because any of them today - dynamically-typed languages do have typing; they're not Assembly, which has no typing. The typing just tends to happen at runtime, but that doesn't necessarily mean you can't do it statically, at static analysis, at compile time.

**Jerod Santo:** Well, here we are, talking about types... Let's reroute...

**Kris Brandow:** It's a different episode.

**Jerod Santo:** It's an entirely different conversation, and one that I'm sure our good friend Nick Nisi will want to be a part of as the TypeScript fanboy of our Changelog community...

**Break:** \[00:27:12.11\]

**Jerod Santo:** Back to APIs. Let's get off languages, because we could probably live here the whole day. It's definitely, to me, a fascinating conversation, but I think most of the time when we talk about APIs, we are thinking about that proper noun, like a third-party API, or a web service API, or a microservice API... And so we are designing these things, we are using these things, and there's a lot of questions you have to ask yourself when you're creating one. One such question is "Well, what kind of API do I want to write?" I think that's where you'd start, isn't it? I don't know, where do you start, Kris?

**Kris Brandow:** Yeah, I mean, I guess when I'm trying to write these things, I'm thinking "What is the thing that I'm trying to accomplish? What is the shape of it?" Is this a request/response sort of thing that I'm trying to make an API around? Or is this a one-way feed of information? So is it like an event stream that I'm trying to get access to? And even within the request-response, is it like an immediate processing? Is it a long-haul processing? Is it like a send-a-thing, it sends me an accepted back, and then I wait a while, and then I go and fetch the result later? So that's usually where I start thinking, of like "What's the shape of this?" And then from there, I'll go in and be like "Okay, well, what technologies can I use that will be advantageous for this shape?" Or, if I'm working with others, it's like "What are we already using?" Usually, that's where you'd start. It's like, what are the things that are already in usage? Will those things fit the need that I currently have? And if they will, then I'll use them. If they sort of do - okay, we'll probably try and use it. And if they don't - okay, well, now we have to have the discussion of like "Well, what's the thing that will actually fit better?"

**Jerod Santo:** So you don't just use GraphQL every time...

**Kris Brandow:** I never use GraphQL.

**Jerod Santo:** \[laughs\] Okay... Well, we might plumb those depths... I also never use GraphQL, but not necessarily for any reason other than I've never had a reason to use GraphQL. I thought about it once with Changelog.com, because there's a tool called -- it's called PostGraphile, or PostGraphQL... And this was when GraphQL first came out, and of course, we did a show on it... And after any show about a new technology, I'm nerding out. I'm like "Oh, this is cool. I should probably go try this." And 99 out of 100 times I don't actually go try it, but I have good intentions to do so. And with GraphQL, I thought "Well, we have a website that renders HTML... It does not have a proper API for people to consume. Maybe we could put out an API of changelog.com", which has people, and topics, and episodes, and all these typical things that might be interesting; news items etc. "And maybe I'll do a GraphQL API for that. That'd be a cool thing that people might want to play with." Because one of the things I think is cool about GraphQL as a frontend, or who's building a thing in the browser, is you can really just play with it, and find stuff, and do stuff, and it's very enabling, I think, for frontend devs... Which I think is a powerful property. But then I found this tool, PostGraphQL I think it was called, and then maybe renamed Postgraphfile, and it's gonna take your Postgres database and turn it into a GraphQL API... Which is kind of a cool idea, but also kind of like "Are you just basically exposing your database to the world? Sort of like that...?"

\[00:36:06.00\] And I used it one time. And this was, again, probably a decade ago, so I'm not gonna speak on the current product or anything that. I think it was a cool piece of software. And it sure did... It just was like "Yup, I didn't ship this, but I played with it." And I'm like "Yup, basically, you could just turn your entire-- but I don't want to just turn my database into an API. That's not designed." So it was not; it's just like, "Here's, SQL over the wire", roughly speaking. And I'm sure there was different things that you could do...

The reason why it really fell apart for me was I wanted to have some sort of other place where I would define rules, and things, and the way that PostGraphile worked back then was you literally had to define everything in your Postgres database, including access controls, and a lot of stuff that I just didn't have at that layer.

**Kris Brandow:** Oh, yeah...

**Jerod Santo:** Like row-level constraints, and blah, blah, blah... And I'm like "I don't go that deep on my database." I put that code generally in my app logic. Anyways, I stopped there. That's the closest I ever got. And I haven't really considered it since... But why don't you ever use GraphQL?

**Kris Brandow:** So I think historically, it's been mostly because I am -- I've been in the REST camp for a very long time. I mean, this is a while ago, it was almost a decade ago, but I basically accidentally bought - I think it was called "RESTful web services" or something. It was a book when I started to get into HTTP APIs, and it happened to be a book about Hypermedia , but I didn't even realize it, and it was just like "Oh, this is pretty cool. I really like this stuff." And then I sat down and I read Roy Fielding's paper, his dissertation on REST, and I was like "Oh, this makes a lot of sense", and then got really into HTTP, and learning a lot about how HTTP works, and the mechanics of it, and all of the different things you can do with it... And then I think for just a while, when I looked at GraphQL, I was just like "I would be more inclined to use this if you didn't put it over HTTP." I'm like "This is just an improper usage of HTTP in a lot of ways", or just like a... I don't know if it's improper, but an unfortunate usage of HTTP. And when I started looking at the arguments for why we should use GraphQL, instead of say a Hypermedia API, I just found those arguments to be incorrect. Or just people didn't quite understand what Hypermedia APIs were, and so they were making arguments that didn't actually align with what the reality was. And once again, if they had just said "I just want to do it this way because this is how it makes sense to me", I would have been like "Okay, cool. Fine. Maybe I'll try this thing out." But because they had framed it as this "Oh, Hypermedia APIs can't do this thing, and this is why you need GraphQL", I was just like "Well, no, you're wrong. And now, because I'm in this camp, you're silly, so I'm not going to use your thing." Which is the tribalism thing that tends to happen.

**Jerod Santo:** Yeah.

**Kris Brandow:** Recently, a few months ago, I tried to sit down and read a book about GraphQL. So I was like "Okay, I want to give this thing a real shot." And I just put the book down after the first chapter... Because I was reading it -- it was trying to give this history of HTTP, and REST APIs that was just completely wrong. And I was like "Well, I guess if this --" And this was a book from O'Reilly's. So I'm like "If this is the way that this community is still behaving, I can't do this right now."

**Jerod Santo:** Right.

**Kris Brandow:** So that's the main reason why I just gravitated away from GraphQL... Because it just didn't make sense to me as something that should exist in the way it does, given what you can do with HTTP. I feel similarly about gRPC, and I'm kind of like "I don't really understand why this exists, given what you can already do with HTTP."

**Jerod Santo:** Well, GraphQL is over HTTP, but gRPC - is that just a TCP connection, or...?

**Kris Brandow:** No, that's over HTTP/2.

**Jerod Santo:** Oh, it is?

**Kris Brandow:** Yeah.

**Jerod Santo:** As well, or version two?

**Kris Brandow:** \[00:39:57.29\] No, I think gRPC is exclusively... Okay, well, gRPC is interesting, because technically you can put it over pretty much any transport, but the default transport is HTTP/2.

**Jerod Santo:** I think GraphQL was an example of technology that was built to serve the needs of Facebook...

**Kris Brandow:** Yeah.

**Jerod Santo:** ...that most people don't have... But also demoed really well and appealed to frontend developers, of which there are many... And it does provide them some freedom and flexibility and empowerment that other technologies do not. And so that combination, I think, was what led to its rise, with those two things.

**Kris Brandow:** Yeah, I definitely agree with that. I think from the perspective of a frontend person, I think GraphQL makes a lot of sense. Or the perspective -- I think gRPC makes a lot of sense from the perspective of somebody that's just like "I just need to get this thing working." I understand why they exist, and I kind og support them in that way, too. I'm like "Hey, if it gets you to build the thing you're trying to build, great." But definitely from the backend person perspective, or from the design perspective, I'm like "If you're actually sitting down to design this thing, and you really want to think through what you're doing, they don't feel like the tools to do that."

And I've tried with GRPC, and I just... Especially with proto -- like, the fact that so much of it is built on top of protocol buffers... And I'm like "This feels awkward." And then you have to manage protocol buffers, and if you don't have a way of managing them, then it's just like "Okay, well, now this is just a whole other mess you've got to deal with..." And there's some other underlying things that when I sat down to try and do it, when I was at a company that was actively using gRPC, and kind of my job to evaluate these things and evolve them forward, I was just like "I'm having to modify gRPC so heavily just to kind of get the things that I want..." and I just wound up falling back to "Let's just use regular HTTP here. Let's just build on top of these building blocks that we already have access to."

**Jerod Santo:** So generally speaking, you think Hypermedia API is the way to go.

**Kris Brandow:** Yeah, I think building an API on top of HTTP using, you know, the principles of Hypermedia and the Hypermedia constraints, or as some people kind of incorrectly say the HATEOAS, or the Hypermedia As The Engine Of Application State...

**Jerod Santo:** I was just googling that to bring it back up again, because I couldn't remember how you say it and what it meant.

**Kris Brandow:** Yeah, I got part of that wrong, but yeah, it's basically, you know...

**Jerod Santo:** That was pretty good. Hypermedia As The Engine Of Application State. You got it right, man.

**Kris Brandow:** Oh, wow. I got it. \[laughs\]

**Jerod Santo:** HATEOAS.

**Kris Brandow:** Yeah. And I think Roy Fielding brought it up once, where he's just like "It's just called the Hypermedia Constraint. That's what it is; that's the proper way to refer to this. You don't need to do this other thing."

**Jerod Santo:** Right.

**Kris Brandow:** I think people kind of -- maybe they too directly interpreted what that would mean, and they didn't broaden it out enough... So I think that's a failing of the Hypermedia community and world, which also kind of -- I started to move away from them as well, because I was like "This is a little too much zealotry of "No, everything must be Hypermedia ." And I'm like "Meh..."

**Jerod Santo:** Okay, so for us plebs like myself, because I just was googling the term, and maybe a few of our listeners self-identify with me as pleb... What is HATEOAS, what does it mean as the application state or whatever you said exactly? Hypermedia As The Engine Of Application State. What does that constraint mean, and then what were they trying to broaden it to from there?

**Kris Brandow:** So at a base level, Hypermedia is really -- I think it's kind of like Hypermedia controls, which means you have this base layer of media, which is some type of document, some type of information, and then you add controls to that, which usually come in the form of links. So when you think of HTML, the Hypermedia controls in HTML are the anchor tag, the link tag, and form tags. And these give the application the ability to move the application to do things, to navigate around. So with forms, you can send data to the server.

\[00:44:05.15\] And the idea behind the Hypermedia constraint is that the server controls from the perspective of what the client is allowed to do via Hypermedia, and then the client chooses what to do via the Hypermedia that was given by the server. So the server sends you links, you use those links to do things and move the application state forward. So it's like "Oh, I give you a link to create an account, or I create a form to create account, you fill out the form, you send that back to me..." Now I have created an account, and the little state engine of account creation moves forward based on those Hypermedia controls that you're given, based on that form that you were able to fill out.

**Jerod Santo:** Right. So the API itself, the servers, they actually publish the things that you can do via Hypermedia responses.

**Kris Brandow:** In the responses, yes.

**Jerod Santo:** In the response is the other things that you can do. And the idea behind this - like, the panacea or the idea was okay, then you don't need a human at all in terms of like the client code can then just ingest that information and use it to navigate to the next page, for instance, or to show the user what they can do. And then they hit the button, and it knows where it goes... It's not exactly the way RESTful APIs are though, because we go and read the docs for the RESTful API. But ideally, you wouldn't have even do that as a client, developer...?

**Kris Brandow:** Yeah. So the idea is -- and this is where... I mean, I've long since given up on this, but the rest APIs that we're used to thinking about are really HTTP APIs, but I realized that REST as a term has gotten lost, which is why I think a lot of us started calling them Hypermedia APIs.

**Jerod Santo:** And REST stands for Representational State Transfer. I'm going back to my --

**Kris Brandow:** Yes, Representational State Transfer.

**Jerod Santo:** I pulled that one out of the old dictionary there. Which means what - Representational State Transfer? I mean, even that is a conundrum of a phrase, right?

**Kris Brandow:** Yeah. I guess the basic idea of that is that -- I mean, it's kind of what's on the tin, right? You have a representation, and you want to move it to -- you want to give it to somebody.

**Jerod Santo:** So that's a state transfer.

**Kris Brandow:** Yes. You transfer that state to somebody else. And the state that you're transferring isn't -- I think this is in the paper, but there's this idea of there's the resource, and then there's the representation of that resource. And the thing that you're moving is the representation of it. So there's you, Jerod, as a human, and then there's your account on Changelog, which represents you. But when you transfer that state to the client, you're not transferring you as a human over it, you're transferring that representation of you over it. So that's the idea of the representational state transfer. It's like "Okay, I'm taking the representation, and I'm moving it to somewhere else." I'm taking the state of that representation and moving it somewhere else.

**Jerod Santo:** Okay, moving it from the server to the client; not like changing the state of the thing.

**Kris Brandow:** Yes. And it also has -- you know, REST also includes the ability for the client to then change that state, to move it. Like "Oh, I got the representation. Now I can make some modifications, send it back to you, and that will change the state of that representation, and potentially of the resource behind it within the server."

**Jerod Santo:** Okay. So what you were saying before - I so rudely interrupted to get that clarity - is that what we call REST, or RESTful , meaning it has certain properties of REST \[unintelligible 00:47:30.22\] what RESTful means... Is that they're not actually REST APIs; they're HTTP APIs, because of - what do they fall short of that is not a Representational State Transfer?

**Kris Brandow:** \[00:47:44.22\] They violate a lot of the actual components that Roy Fielding defined in his dissertation where he defined REST. The biggest one is obviously Hypermedia. They are not based in Hypermedia, because you've gotta go read a thing to understand them... And there's a few other. I mean, I think that's definitely the biggest one, of why they're not...

**Jerod Santo:** Okay. Why aren't we writing Hypermedia? What was the sticking point? Is it too hard? Is it not performant at scale? Why don't we do that? We don't do it.

**Kris Brandow:** I think because it wasn't the most basic thing we could do. It takes a little bit of thought and a little bit of extra writing in the beginning to actually build a Hypermedia system. Because you have to have the server sending information to the client, and you've got to structure that in some way... And then the client has to have a little bit more logic in it, to be able to be like "Oh, okay, I understand what these links mean, and I understand how to display them to the user, and how the user can select them." But I think the biggest thing is that in the early days, the only Hypermedia format we really had was HTML, and to some degree you could get XML to do it. And we were missing a very big component that we sort of have now, which is the ability to define what things mean outside of the representation that you sent back. So this is the big component of Hypermedia, is that you have the different representations. So you might have it rendered in JSON, or XML, or HTML, or whatever, and then you have the actual definitions of things, which you can pull from schema.org, or friend of a friend, or a whole bunch of other places, that's like "Okay, so when you see a field in an object, with the words name, it means this thing specifically." It means, okay, it's a person, and it's their first name. Or it's a person and it's their preferred name, or whatever. An actual structured way of being like "These are what these words mean." And we didn't really have a good way of conveying that information. And if you don't have a good way of conveying that information, what you wind up doing is you just wind up packing that into the representation that you send.

This is what we do in JSON APIs a lot. It's like, okay, I have a name field, and it's like, okay, well, how do you know what that name field means? It's like, well, we just write it in some doc somewhere, and then the client goes and looks, it's like "Okay, this name field is the full name of the person, and we just kind of know this information." Whereas with -- I don't know about proper Hypermedia , but the Hypermedia system, you would transfer that information by saying "Here's a schema that I'm using of what all of these fields mean. Use this schema when you're interpreting this." And the thing that you have to then have on both sides is that schema, and keep track of that schema. But that schema is disconnected from the representation that you're sending.

So you can change the representation, but still be sending the same information, and that's what gives you some of the flexibility that you get from Hypermedia APIs, that you do not get from rest APIs. This is why rest APIs run into the version problem that they tend to run into, because you can't change the name of something, or even in some cases the location of something, because it's hardcoded into the client, "Hey, this string means this thing", or "This location is where I find this stuff." Instead of the client saying "Oh, the server sent me this. Let me interpret it. Okay, this string is mapped to this internal string I know, so I can connect those things together and process this information."

**Break:** \[00:51:18.13\]

**Jerod Santo:** So a little story about some more ancient history from me was that way back in the day I did a rewrite of Groovshark's client. Do you remember Grooveshark? It might have been before your time...

**Kris Brandow:** I do.

**Jerod Santo:** Okay. Cool. So Grooveshark was cool back in the day... And they had a lot of steam. This was an old music streaming app, for those who aren't aware, that was post Napster, pre Spotify, Apple Music, very much in like the iTunes days of buying songs for 99 cents. And they were user-generated content, and they had a very beautiful Flash, a very well-designed Flash based player, and lots of music on there that people would upload and listen to. And they brought me in - for reasons; that's a whole other story - to help them rewrite their client from the Flash version, which was their production one, to a new HTML5 player. This is when HTML5 first became a term. And so it was going to be all web technologies. And that was a fun, interesting project... And a lot of stuff didn't exist back then.

So this was pre any sort of JavaScript tooling, beyond basics. So I remember using a framework called JavaScript MVC, which was very loosely kind of recreating the model-view-controller architecture that I was used to from Ruby on Rails in the web browser. And I cobbled together a bunch of stuff, and wrote a bunch of custom code as well to actually put together one of the early single-page apps that was used by millions, and not by hundreds. But anyways, I say all that to say this - when I started working on that, I went to their lead backend dev... They flew me down to Gainesville, Florida; they were from Gainesville. And I got to sit in their offices for a few days, and code on the early prototypes... And all I really liked was RESTful APIs, and stuff... And I just thought they were the bee's knees, because I love the web, and I love URLs, and addresses, and it makes total sense to me that you're just publishing the location of the objects... And all that stuff just was sensical to me. Sensical is the opposite of nonsensical, Kris, in case you're -- I know you're a word guy.

**Kris Brandow:** Yeah... Yeah.

**Jerod Santo:** Keep up, Kris. Keep up.

**Kris Brandow:** \[laughs\]

**Jerod Santo:** So I went to him and I'm like "Hey man, I need your API docs." He's like "Yeah, we don't have docs." \[laughter\] No surprise there. And I'm like "Oh, cool. Is it a RESTful API, or how do I...?" And he's like "No. It's a PHP app." And this guy coded the whole thing himself; he was very smart, but very much like the guy who didn't have docs, and you had to go talk to him to find out how it works... So not a shining example. But in some sense, it's very interesting. And he's like "No. There's a function, and you call this one endpoint... Here's the endpoint", and he told it to me; he's like "Then you put a question mark, and then you put..." I can't remember what the parameter was... In the query string. And that's the name of the function you want to call. And then it was all JSON, I think... "And that's how it works." And I'm like "This is terrible." And you know what? I wrote that thing in a few weeks, and it was so easy to use...

He did give me a list of the different functions that you could -- you know, he had some docs. He copy and pasted it out of his PHP file that actually executed all this stuff... He's like "Here's the seven functions you can call... And then just call them, and you'll see what data comes back, and you'll figure it out." And I was like "Okay, I'm a big boy. I can do that." And I remember thinking "This is really terrible."

And then I wrote that app, and it was actually not so bad, just to have a single endpoint and just to -- I mean, basically it was a remote procedure call. It basically was. I don't know why I told that story... Just as an example of like sometimes simple is just okay, even at scale, I guess...

**Kris Brandow:** I feel like this is also the place where the whole RESTful world went a little -- it just kind of got distracted by the smaller parts of REST, and not focus on the bigger parts... It doesn't do the Hypermedia, but there's a lot of -- because I remember sitting through and watching talks, and reading about how "Oh, you've got to think about the hierarchy of all your resources, and how they fit together", and all of these nice little URL hacking things, and all the wildcard stuff... Which is not the part of REST that I think matters all that much. The whole "Oh, you have user/ID", and then if you want to edit, you'd be like user/ID/edit or whatever, and all of that structuring... And I think that once I started actually reading about Hypermedia and I realized that was actually not the thing that was supposed to matter in Hypermedia, I think that's when I started to move away from the RESTful world, and I think that's the thing that really captured the RESTful world.

\[01:00:25.18\] I think it's a very interesting -- at least, from what I can remember, and from the little research I've done, it's a very interesting confluence of two different things that were happening at the same time in the early 2010s. We were getting into the world of sharing URLs, so everybody was switching to using this whole clean URL thing... I remember being in Drupal and enabling clean URLs, and having these really pretty "Oh, this looks so nice, and it's so shareable. You copy it, and you just send it to someone", which was really a way to work around a constraint. Because if you wanted to share something with someone, all you had was what was in the URL. You couldn't share things like headers with them, or like bodies. So you needed to put everything in the URL. And you wanted that URL to look nice, but you also wanted people in the browser to be able to hack those URLs.

So if you had a thing that's like "Oh, search", and then it had the year, month, day, and people would be like "Oh, I'll just remove the day, and then I can see everything from the month", or "I can remove the month and see everything from the year", that type of power was really nice.

**Jerod Santo:** Yes.

**Kris Brandow:** And so I think when we started to develop these web APIs, the people that were first doing it were like "Oh, I want this to be super-hackable. I want to be able to go into curl and be able to just figure out what it is, and be able to do this without having to document things a whole lot."

**Jerod Santo:** Right.

**Kris Brandow:** That I completely get. I mean, again, that's a great way to bootstrap the whole thing. But I think we just got too caught on to that, and we didn't evolve past that one. It was like "Okay, well, this was really just a hack. Now, we're using advanced API clients that do have -- they can do headers, they can do body, they can interpret the representations they get back, and not have to depend on the URL as the main control of the whole thing." Because one of the things - and I believe Roy has said this quite often - it's like, the URL shouldn't matter, right? You should be able to encrypt all of the URLs to your application and have it still work fine.

That's one of the things about Hypermedia, is that the actual addresses of things are irrelevant. And a lot of ways -- you know, you don't know the actual memory locations of the pointers in your code. You don't think about those things. You're like "Oh, I have this name that I use." And it's like "Oh, well, that name points to some memory, but I don't care what the memory is. I just have this handle that I'm going to use." And the way that REST APIs tend to work is that they are very much like "Oh, I know this memory location. And if you change that memory location, my whole app is going to break", which makes everything very brittle. And we were never really able to push ourselves out of this.

Go in one of the recent releases actually added support in the standard library for wildcards in URLs... Which, once again, harkens back to that clean URL thing... It wasn't really necessary, because we have query parameters, and you can always put the things that needed to be variable into the query parameters... But people were like "Oh, that's ugly." It's like "The machine's looking at it, and the machine doesn't care."

**Jerod Santo:** Well, not always... So I mean, what about humans? Like, I love passing URLs around, even to this day.

**Kris Brandow:** Yeah, but are you passing API URLs around?

**Jerod Santo:** Well, I would if they would allow it... \[laughter\] I mean, sometimes I'll take an API URL and paste it into my browser and see if it renders... Yeah, not as much, obviously. So maybe -- you know, when we say web APIs, maybe we're just fashioning them too much in the image of the web... Because I think URLs and anchor tags, and my ability even just to send you a Google search because everything's in -- even though that's stinking ugly, and I hate Amazon's URLs... But they work. I can still pass it to you and you can render it.

**Kris Brandow:** Oh, yeah.

**Jerod Santo:** It is a beauty of the web. And maybe we just took that and we're like "It's gonna make beautiful APIs." And maybe not.

**Kris Brandow:** \[01:04:05.08\] Yeah. Once again, it was like a browser constraint that doesn't exist in API clients. And I don't think we ever shifted away from that to really rethink -- I think we just didn't have a sitdown and a big rethink of "Oh, this thing is different from a browser. This thing has different constraints than our browser. Maybe we should try and broaden and use those constraints much."

I also think too this is -- once again, we didn't necessarily have the right tooling, and we didn't make it easy for people. Because I think one of the things people often think is they're like "Oh, well, Hypermedia sounds really cool. This ability to have this flexible application that the client can just keep working, even when you change things on the backend, and it's super-flexible, and it'll just send you stuff and you just render the stuff you have, and you don't have to make big updates..." But people are like "That's gonna take so much more code than what I have now." But that's actually not true. I think Mike Amundsen, who's one of the big Hypermedia people and big API people, has for years been like "No, no, no, it takes less code on the client to implement a Hypermedia API. And it's more flexible in the future. You can just add stuff to the backend, and it'll just automatically appear in the frontend without you having to do deploy or anything."

**Jerod Santo:** Hm... Because it's discoverable by the client itself.

**Kris Brandow:** Yeah. I think people have it in their head that it's gonna require more effort, more work, when really it's just different work that you're going to be doing.

**Jerod Santo:** Okay. Are there any Hypermedia APIs in the wild that you could point to?

**Kris Brandow:** I mean, GitHub tried with their HTTP API to make it Hypermedia... And I think a lot of people did make efforts to, and there's a lot of remnants of them hanging around. I think in GitHub's HTTP API they still have headers you get back that tell you, if it's a page of search results, to say "Here's the next year's, the previous year's, the current..." I mean, those are Hypermedia controls. I think that for various reasons there's not a lot of them around anymore, because I think a lot of people that did have Hypermedia APIs shifted them to GraphQL APIs, because that was the story that was sold, that GraphQL is the successor to Hypermedia, because Hypermedia doesn't really work, so everybody should go use GraphQL. And all the frontend folks were like "GraphQL is amazing, and it's awesome." But I think part of that as well was because of the bad way we were writing Hypermedia APIs. One of the -- maybe this was the chief complaint, and one of the big reasons why Facebook built GraphQL, was that everything was split up into those resources-based things. So it's like "Oh, you can get the user, but then you have to go get their friends, and go get the..." So it's like these big chains of HTTP requests you're making, so you had to get each object, and do some processing, get the next object...

**Jerod Santo:** Right.

**Kris Brandow:** That problem has been solved in Hypermedia for a long time, of being like "Oh, no, just give me this entire representation", or "Give me these parts of it", and having search parameters. That stuff is built into some types. I believe it's built into Collection+JSON, in some of the ways that you can do querying with it... But at that time I think that was a very not known thing, so the big advantage of GraphQL was "I can make one HTTP request, instead of making 10, or 20, or whatever, to get this exact information I want. And I'm not getting all this extra information." Which was really just the design of the Hypermedia API you had was not a fit for what you were trying to do, so we needed to do some redesign. And I think people were like "Well, I just want to do something to get something done, because we have a problem."

**Jerod Santo:** Right. It also moves the decision-making process of what data is needed closer to the entity that needs it. So the developer who's actually developing that client, they're almost configuring the API to give them what they need, and nothing else...

**Kris Brandow:** Right.

**Jerod Santo:** And they're the ones who have that knowledge. Versus saying "Hey, backend team, can you modify this endpoint to also have this data along with it? Or can you put the location of the Hypermedia URL in there, so that the client can discover it?" I'm not sure how it would work for actually doing Hypermedia, because obviously, I've never seen it done properly...

\[01:08:06.22\] And then you have that whole process, which is just inefficiencies inside of an org, right? It's like "Oh, we're waiting on the backend for them to do this, but in the meantime I'm not making any progress." So that's what I said, I think it was like Facebook problems were being solved, plus very good demos and empowerment of frontenders to just specify what they need inside the technology, versus via a ticket in JIRA.

**Kris Brandow:** I think part of this too was a lack of proper design for our APIs. I've seen a lot of APIs and I think people are just like "Oh, we need these objects to represent, \[unintelligible 01:08:41.14\] frontend", and there's not a lot of thought of "Well, what object are we gonna need in the future? What ways can we make this more flexible?" I think too much of the time we don't think about flexibility when we're thinking about the APIs that we're trying to design... And we just try and tack flexibility on at the end, and be like "Okay, well, we'll just add it here." And that's one of the things that GraphQL does give you a lot of, as you've mentioned, is a huge amount of flexibility for the people on the frontend... But it's also very challenging for the backend to implement GraphQL. I've looked at it before; it was kind of like, you've shifted the problem now onto the backend... Which is I think why there's that thing you've found for Postgres, which is just like "You know what, we're just gonna dump our database onto the network, and y'all can just program it from the frontend..." Which is not great, especially from a security perspective.

I always disliked the idea of trying to encode access controls into SQL, because - challenging... But I think it was a real pain point for people, and it needed solving. But I think we've also kind of swung back the other way now, where it's just like, okay, well, now backend people are starting to struggle, and trying to figure out "How do I implement these things?" Especially when you start having huge numbers of APIs that you're then putting behind those GraphQL gateway, but your APIs are REST APIs, because that's what backend developers like. And then you have this GraphQL thing... I went through this type of thing at one of my previous jobs, and I was like "Okay, this is just kind of a nightmare for everybody now."

**Jerod Santo:** Yeah, and I guess the ambition of GraphQL to be, like you said, that front layer for all kinds of data backends... I know that's what the Gatsby team was working on for a long time, where it's just like, as a frontend, you just have GraphQL. And it could be your own application servers accessing your own database, or it could be this other data source coming from whatever API over there, that we're going to pull in and proxy and cache the crap out, and add that to our graph... And you can have just one big GraphQL API black box that you hit, and it's like... It's kind of like when you do a function call that hits the network, versus one that just does some math... \[laughter\] It's like, those functions should be different, because they are fundamentally different in performance; foundationally way different. And so fronting a bunch of disparate API backends with one GraphQL thing that you're all calling to me always felt like "Well, that's a little too ambitious", but maybe I'm just not an ambitious guy.

**Kris Brandow:** There's certainly aspects of GraphQL that I like. I like the idea of having this ability -- especially if you have graph-like data, I think GraphQL makes a lot of sense... Like, okay, well, this is literally a query language for graph-style data. I'm just not really convinced that most people have graph-style data. I'm not convinced that this is the structure that you really are aiming for, or that you have enough stuff that a graph query language is what you want. This might be a place where I'm starting to become a bit of an outlier too, because I feel similarly about SQL these days too, where I'm just like, I don't really know if SQL is the language that we should all be using for our databases, or if this is the way we should be designing things. But I do recognize that this is the thing that's popular, this is the thing that you can hire for; this is -- like, there's other reasons why people want to use these things.

**Jerod Santo:** \[01:12:05.02\] Yeah... I think a lot of new upstart database vendors who have had, again, ambitions, and maybe audacity to \[unintelligible 01:12:12.17\] SQL, and come up with something better/different/their own... Most of those - maybe MongoDB is the exception - have fallen by the wayside, or have not been able to get the pickup. And they eventually either say "Yeah, you can now speak SQL to our database, in addition to our custom language", or they just don't make it, because of the mindshare and the existing just dominance.

**Kris Brandow:** You know, I think it's -- and maybe this is also why so many APIs look so similar to each other... It's that if you're going to build a database that operates like an SQL database, you should probably just use SQL with it... Which is the same way I feel about APIs. If you're gonna build an API that's just going to return some JSON, why don't use a JSON API? Or if you just want to use protocol buffers, use gRPC. Or if you have graph-like data, just use GraphQL.

I think those things are okay to use in the small. I think where the problem comes in, and probably where the whole It Depends comes in is "How do we as an industry move to build new things if everybody is always just regressing down to this mean here, going back to the homeostasis point of "Oh, well, I just want to use JSON. I just want to use an SQL-like structure for things", instead of trying to maybe do something a little different.

**Jerod Santo:** I have an answer for that that you're gonna love. And the answer for that is large language models.

**Kris Brandow:** Oh, God... \[laughter\]

**Jerod Santo:** No, hear me out. Hear me out. So you come up with something better, foundationally better, but different... And you also provide some sort of pre-trained or fine-tuned model that fits right in with developer tooling... I mean, no one's writing SQL anymore, Kris. You're the only one left. And even myself, who I am relatively reserved when it comes to GPT tooling, I'm not writing SQL from scratch. I will go there first -- unless it's like select star from this, where that; if it's a little bit beyond basics, there's like one or two joins in there, I just don't care anymore. I don't have time. I will ask the thing and get it back. So if it returns something that wasn't SQL, but still accomplished my goal, and happened to be this new thing that was better in every way... I don't care anymore. I don't need to know.

**Kris Brandow:** Yeah... I guess the issue at hand is that there's a shift in the mindset of the whole stack that I think kind of needs to happen for us to build new stuff. I'm actually actively going through this, because I made the decision, mostly when I started looking at the prices of hosting Postgres; I was like "I don't want to pay this." I guess when you're a company, it's just like "Okay, this is a little bit of expense." But I'm just like, getting a high-ability Postgres server is 50 bucks a month, 100 bucks. That's money I'd rather not spend.

**Jerod Santo:** Sure.

**Kris Brandow:** So I'm going on this adventure of actually trying to, from the base-level components, build up a new age style database, and build APIs just directly on top of HTTP... And it just looks fundamentally different from how so much of the stuff that we usually build looks. And I think -- I don't know if you can just swap out a part of it. It feels like you need to swap out the whole way you think about things.

**Jerod Santo:** You don't publish any of this code, or...?

**Kris Brandow:** Yeah, I'm gonna -- or at least publish my thoughts behind it. That's the idea of what I'm doing now, is the whole idea of the learning in public that I want to do is sit down and actually go through all of this, and document my journey, and put it out there, and then also write about "Hey, this is how you can do it yourself."

**Jerod Santo:** Cool.

**Kris Brandow:** Because the thing that I'm trying to build now is just a little -- based on CRDT, like "Hey - cool, let's see if we can build some database out of these lower-level components, and see what we come up with."

**Jerod Santo:** \[01:16:01.02\] So these words you're gonna write about this whole new style of doing things... Can I use them to fine-tune my data model? Because if I can, then I'm set. \[laughter\] I'm ready to adopt. I'm ready to go to the new place.

**Kris Brandow:** Yeah, I mean, in a way -- that's one of the goals, is to give people access to information that might have been harder to find before. I think that's the big thing I've -- when it comes to Hypermedia APIs... I went through this years ago, when I was first really getting into them, and I designed a system that was specifically Hypermedia API-based. And my coworkers at first were like "We don't know about this. Why don't we just write it regularly?" And then I'm like "No, just try this thing out." And then they tried it out and they're like "Oh, wow, this is actually really nice to work with. I really this. These things that we're doing - it's so much more flexibility, it's so much less code overall. We can evolve it so much easier."

So I think a big portion of the problem is that there's just not enough content out there for people to learn about how to do this stuff. You want to use GraphQL, you want to use gRPC? There are tons of resources to learn that. But if you want to learn how to build even just an API based on HTTP, it's like, I don't know, go read the HTTP specifications. It's like, that's not a good experience for people.

**Jerod Santo:** So yeah, Hypermedia APIs need some -- they need some marketers; they need some people to... Like, Roy Fielding, he should have wrote one. Did he write one?

**Kris Brandow:** A Hypermedia API?

**Jerod Santo:** I mean, what he defined. Was there sample code?

**Kris Brandow:** I mean, he defined REST. So he defined what web browsers use.

**Jerod Santo:** Did he write a REST API that we could all look at, and...?

**Kris Brandow:** I mean, he wasn't specifically talking about APIs. He was just talking about REST is just in general the thing Hypermedia APIs are applying REST principles to APIs.

**Jerod Santo:** REST is a general thing for life, or for -- what was the context here? Pass me a context object.

**Kris Brandow:** Just for applications. It's like, that's how the web works. So the web is REST, right? Fundamentally, the entire web works on REST. This is the thing I'd always bring up before, of just like, you know, people probably wouldn't use the web. If you had to get a book in the mail, that you'd look up and see which URL you need to go to to log into Facebook, and which URL you need to go to do this thing... And oh, which URL you need to go to do a Google search... People probably wouldn't like that too much, especially if then Facebook updated its login page to be somewhere else, and now all of a sudden you can't log in, because you've gotta go get the new book in the mail. That would suck.

**Jerod Santo:** Well, the web has a different thing. So the web has Google, and Google, I guess, was the HATEOAS. So Google is where you go to get your index of things... Like, the number one search on Google for many years was facebook.com. People type facebook.com into Google search, and then they click the first link to get to facebook.com.

**Kris Brandow:** Yeah.

**Jerod Santo:** And so that is the phonebook, isn't it?

**Kris Brandow:** The only reason that Google works is because the web is built on the Hypermedia principle.

**Jerod Santo:** Because it can crawl?

**Kris Brandow:** Because you can crawl; that's one of the things that you can do because the controls are in there. So everywhere that you can go, all of the actions you can take are in the response you get back. So you crawl a root-level domain, and then it can be like "Oh, here are all the links on the page. I'm gonna follow those. And then the links in the page I get back from there, I follow all those." And it's just like a continuous thing. And that's how you can crawl the whole web. You can't crawl a REST API. That's not a thing. The responses you get back - they're dead ends; every single one of them is a dead end. You have to know the specifics of the API, know the specific structure... All of that.

So literally, the web would not work as it does today, it wouldn't function, it wouldn't exist as it does today if it weren't for the Hypermedia controls that are embedded into it. We just don't have that. And that's why APIs aren't discoverable. That's why we can't crawl an API to find out what are all of the endpoints, what are all the things I can do with this API.

**Jerod Santo:** So the folks who came earlier, like after Roy Fielding, but before you and me here today, that thought "Okay, this is a good idea..." The HATEOAS folks, the ones who will say "RESTful APIs aren't HATEOAS", and they want to point that out - where are their sample apps, where are their APIs? Like, shouldn't there be the book, and the sample app, and the example...? You said GitHub tried... I'm just playing a little devil's advocate here, Kris... GitHub tried, but did they fail? I mean...

**Kris Brandow:** \[01:20:13.02\] There were lots of efforts to do so, but I think there were just missing pieces to translate what we had with web browsers into APIs. As I mentioned, in order to make a Hypermedia client work, you need to have some way of defining the schema of the things that are going to come back. So you have to have a way of defining what things are... Because on the web, humans do that, right? You see words, and you're like "Oh, that word means that thing. Oh, sign in. Login." Whatever. These are all things that mean "Oh, I can put some information in and get access to my account." We all know what that means. But computers don't understand anything. So we have to tell them "Hey, these are

the --"

**Jerod Santo:** Have you heard of LLMs, Kris? Have you heard of LLMs...? \[laughs\]

**Kris Brandow:** Listen, Jerod...!

**Jerod Santo:** I'm just trolling at this point. Keep going.

**Kris Brandow:** So with a client, we have to give it some reference point. So it says "Oh, okay." So even if the text says Sign In, or Login, or whatever, that really means authenticate. So we have to give it something that -- basically, we're gonna \[unintelligible 01:21:10.15\] that means "Hey, this is the authenticate thing. Go look for the thing that's referenced in this response to see what the Authenticate thing is, and then present that to the user on screen." And I still think today we don't have really good tools for actually defining that information, to give to the people that are building clients, so they can build their clients against that... Because that's still the information that you need to have at the end of the day. You need to have the schema of something to understand what it is you can do.

The thing that really Hypermedia allows you to do is change the representations that you're sending back, or move the representations to other places, so that you can evolve one side without having to evolve the other. And I think that's the thing that I think got lost in that entire stretch; I think people got enamored with so many of the other things that they forgot that it's about - we have to be able to define things, we have to give people something to define with, and then they can do all this nice stuff with different representations, and being able to evolve things and move things and all of that... Like, "Oh, I want a new version of my API..." Well, if -- when the client makes the request, it sends a "Hey, this is the schema that I can speak." Then the server can be like "Oh, actually, if you want to speak this schema, go make a request to this other URL, instead of the one that you sent to." And it's like "Okay, I'll just follow that redirect. Okay, now, it's \[unintelligible 01:22:32.18\] Okay, now I can talk this older protocol to you, or whatever. Or it's like "Oh, there's actually more newer information, but since you only speak this version of the schema, I'm only going to send you this other information back... Which, once again, a lot of it comes down to flexibility. It gives you the ability to change things independent of the other thing that's operating. And I think the biggest reason why this didn't catch on, is that in the beginning people never think that they're going to have to change their APIs. People think that they're not going to have to evolve it. They think, "Oh, no, this will be fine." Or "I'll just add a version in the URL, and that'll be great", but they don't think about "Well, how do you get all of the old clients off? How do you --" There's not a lot of forethought that gets put into that, mostly because a lot of the time we're just trying to get something built, trying to get something out the door, and there's not enough of a push to be like "No, we shouldn't be doing that. We should really find a way to make sure that we do think about evolvability." And that we as an industry say "No, it's important to think about evolvability."

**Jerod Santo:** They're just trying to get something out the door... So here comes the world's first It Depends hypothetical. This is a test for you, Kris. I'm gonna give you a hypothetical, and you're gonna have to apply your knowledge to give an answer.

**Kris Brandow:** Okay.

**Jerod Santo:** So you are a senior engineer, tech lead - I don't know what you wanna call yourself - at a startup that has raised a Series C. Do they do series C? Yeah, they do.

**Kris Brandow:** \[01:24:03.03\] Yeah.

**Jerod Santo:** So you've had some success, at least; you have some users. You have production things. And you're tasked with -- we have a website. It's a web-based company... And they want a public web API. And they want you to lead up to charge today. And you just said you just want to get stuff out the door, and this is the situation; you do want to get stuff out the door. You don't want to go back and reinvent everything from the ground up.

**Kris Brandow:** Right.

**Jerod Santo:** What do you do? Where do you go? What do you build? You can ask more questions, and I'll give you more fake information.

**Kris Brandow:** Yeah, yeah. So I guess who is -- like, are we as a company going to build API clients for people? Or are we just going to be like "Here's the API, and go use it to your heart's extent."

**Jerod Santo:** It will be a public API, consumable by anybody who has whatever permissions we decide. So it's not just yourselves consuming it, no.

**Kris Brandow:** Right. Okay.

**Jerod Santo:** You already have a mobile app that also consumes a private API.

**Kris Brandow:** Okay.

**Jerod Santo:** That threw a wrench...

**Kris Brandow:** \[laughs\]

**Jerod Santo:** Or helped. Let's see if that helped.

**Kris Brandow:** I think if it's an API that anybody out there is going to consume, I'd probably just, pragmatically speaking, build something that uses Open API, and that kind of RESTful structure, where you can generate some clients for some people, and focus on documenting that very well, and laying everything out there... If it's an API that's going to be specifically targeted at people building frontends, then I think it would be useful to consider something like GraphQL, because that community is so familiar with that type of thing... And if our data model lends itself to something that's going to be GraphQL-friendly; like, if it's a read-heavy API, I think it's okay. If it's gonna be a write-heavy API, I don't think GraphQL makes as much sense. I think writing with GraphQL is kind of wonky. But I think the broad thing is, as much as I do not like OpenAPI on Swagger. I think pragmatically, you're trying to get something out the door, I think that's the place that you start, to get something out, to really see if people will use this thing. And if they do start using it, and it becomes good, I think at that point, right after that, once people are like "Okay, this is good. We're getting users, we're getting traction", that's when you start planning your API strategy, and you start saying "Okay, do we want to commit to OpenAPI for the long-term? Do we want to explore other options? Or do we want to build something that can actually handle multiple different API frontends?" Because I think the answer that I would push toward is building a platform that can support pretty much any of the API technologies that are out there. Because you might start with OpenAPI and you might be like "Oh, well, people are building a lot of JavaScript frontends with this. It'd probably be a good idea to support some GraphQL as well", and being able to add that in after the fact.

So build the quick thing to see if it gets traction, and then after that, start building out a better strategy to make sure that you stay on board with things, and make sure that as you're developing the backend as well, you're developing with the idea that it won't just be OpenAPI, or it won't just be GraphQL, or it just won't be this one thing.

**Jerod Santo:** Okay. So give us the elevator pitch, or the quick explainer on Open API spec and Swagger; why you would pick those to get going. And then also, as a follow-up, why you don't like those. \[laughter\]

**Kris Brandow:** I mean, I'd pick them to get going because I think as far as -- you know, when I think of an API, what I usually think of is someone who's writing some sort of backend language, whether that's Ruby, Node, Python, Go, Java, whatever... And those are not things that I think lend themselves to, say, a GraphQL. I probably don't want to use GraphQL from Go or Java. And I don't really like the idea of having, say, a gRPC API exposed out there, because then I'm dealing with having to ship people protocol buffers; no, thank you.

\[01:28:04.07\] And I think between, say, JSON API and OpenAPI, I would say OpenAPI gives you the most flexibility with representations. If you do want to start supporting protobufs in the future, or XML, or something else, OpenAPI will allow you to do that. So that makes sense. And as much as I hate YAML, it's fine to write out an OpenAPI spec. Or you can also generate it from your code and all of that, if you want.

The reason I don't Open API is because I think the main thing it gives you is pretty docs. And I don't think it encourages you to write comprehensive API documentation. I've tried to use many OpenAPI specs for things, and the documentation is just crap. It's just so sparse; it doesn't really give you all of the information that you need. Even the models are just like "Hey--" It's just assumed you already know everything. It's like, if I already know everything, I wouldn't need to be looking at your documentation.

So I think it allows people to have the illusion that they've documented their API, without actually having documented their API. So that's why I don't it. And -- I mean, I've been at a couple of places where you wind up with like 3,000-line-long YAML files to define an API... And that's just not reasonable to maintain, in any way, shape, or form.

**Jerod Santo:** That's not reasonable...

**Kris Brandow:** So I think that's why. It's like, yeah, I'd use it, but also I'm like, I'd use it and then I'd try to immediately figure out how do we make sure that this isn't the thing we're stuck with forever.

**Jerod Santo:** Good stuff. Good stuff. Well, I am tempted to end it here, even though we didn't plumb anywhere near the depths of your outline... Which I told you was gonna happen. There's just too much good stuff to dive into here.

**Kris Brandow:** I was writing this outline and I was like "Oh, man, there's --" I'm like "Is this gonna be enough stuff?" And it's like --

**Jerod Santo:** Right? Nah... There's always room for more. Anything from your outline or from your thoughts... I know you had ABIs on the brain. Anything that you'd want to just shove in here at the end, just to get them on the air before we're done with this topic?

**Kris Brandow:** The thing I had at the very end, where I'm thinking that HTTP is more like an ABI definition than it is an API definition, which I think is a kind of novel thought that I've definitely been gravitating toward...

**Jerod Santo:** Okay, why do you think that?

**Kris Brandow:** Right, so the point of an ABI is -- or the way that we define ABIs within, say, an operating system context or whatever, is that they really define the calling convention. So it's like okay, you're in assembly, you want to make a call to this function... How do you do that? Do you put things on the stack? Do you put things in registers? If you put it on the stack, what order do you put them on the stack? ...all of that. And then you've got to do the jump into the function. So it really defines the mechanics of how that function call happens. And I think HTTP gives you that same sort of base layer of "Please define your mechanics of how you would to actually make this invocation happen."

One of the things that I think about a lot is how a lot of the time people try and complete everything they want to do in a single HTTP request. They make a request, and they expect that request to be held until the result is available, and send the result back. And that is not the only option. There's an option where you can make a request, and then you get immediately back, or very quickly back, that 202 accepted, that has a location of where you can go get the result, and then you can go poll, short poll, long poll, whatever, go grab your results when it's ready, and then the system can be like "Hey, that's not ready yet. This is an estimated time we think it'll be ready." And that's a calling convention level thing, because in your library that's making the API call it doesn't have to expose that it made two HTTP requests, versus making one that was just long polled; it can just hide that from you.

So from the caller perspective, both look the same, but from the implementation perspective, it can potentially give you more information, it can surface more information ops. It allows you - especially if you do the 202 accepted thing, it allows your server to do some load-shedding in a way, where it's like "I don't have to hold open all of these connections." I can close a bunch of them and be like "Here, go get this information from this other place that might be another pool of servers or something that's ready to handle long polls", or whatever.

\[01:32:27.09\] It just gives you so much more flexibility with how you can design your architecture... But you can only do that if you've actually thought about HTTP as this lower-level calling convention-esque thing. Because if you don't, and you kind of just build your libraries and everything as if everything's gonna get done in one HTTP request, then you're kind of stuck with that. And there's a whole bunch of pieces of functionality within HTTP that allow you to do this. One of them that I stumbled upon is the prefer header, which is a way for clients to communicate their preferences to the server of what they'd like. And one of those is called weight, and it's a value that has some seconds in it. And that value says how long the client is kind of expecting to wait for a response.

So if you want to have the ability to do both long-polled responses and 202 accept responses, you can enable both in the server, and then when the client sends a request, it just says -- you know, maybe it's just \[unintelligible 01:33:25.26\] to be like "Please just give me an accept back." Or it might put it at 300, to be like "Let's long-poll this. I will wait until you're ready."

And when you design your APIs like this, where you have this lower-level substrate, you gain so much more flexibility in what you can do as far as evolvability of your system, and the architecture of what you have. As I said, maybe in the beginning you start with one API server that's just handling everything, but then you're like "Oh, I can't handle everything, but we can do some long-polling result waiting; we can build some really lightweight servers that are really well-optimized to do long polling, and are very efficient with their resources, and then we'll have a whole bunch of those, o then when we have too much load coming into the main API server, then we start doing that load-shedding, sending back 202 accepteds to push people over to the other servers, and then we have an event system that sends the responses to that other pool of servers that then sends a response back to the client." It gives you more options for how you grow your APIs over time, so you're not kind of stuck with what you did in the beginning.

**Jerod Santo:** I like that thought. I'll have to put more thought into that thought. I think my immediate thought, if I could just keep saying the word thought, is that there's a lot more to HTTP in terms of functionality and availability of things that we're probably not collectively leveraging, or using in ways that would be quite beneficial if we I guess maybe even just knew the protocol better.

**Kris Brandow:** Yeah.

**Jerod Santo:** And when I say we, I'm just kind of talking about myself in the plural. And probably there's other people that are like me; hopefully, I'm not the only one who doesn't understand HTTP... Because I'm learning stuff right here, right here live, Kris. I didn't know about those things.

**Kris Brandow:** Yeah. I mean, some of this is stuff that I've -- once again, I'm building out stuff on my own now, so it's like "Okay, I'm gonna take a little bit of time to actually figure out how to do this right." The way I've found this prefer header was I was actually trying to build live reload, or live refresh for the website that I'm working on, and I wanted to have -- you know, it's all served via a Go application... And I couldn't use a lot of the traditional methods, like a WebSocket connection or whatever, because the server would get recompiled and restarted. And I was like "Okay, well, how can I make this work?" And I figured out "Okay, well, I can have a long-polled connection..." And at first, I was like "Oh, I'll just send back a special header, that has the version of the document. And when I make a new version, then it'll go do that." And then I was like "Oh, wait, there's e-tags, there's entity tags in HTTP, that's literally built for this." And I plugged that in and it just started working.

\[01:36:01.15\] And then I was like "Okay, well, how do I do this long-poll? How do I indicate to a server that I'd like to do a long-poll?", besides just being like "This thing does a long-poll, a \[unintelligible 01:36:07.05\] parameter long-poll." And it's like, I went hunting, and I found the preferred header. I'm like "Oh, okay... So I can have the client just say--" If the client specifies a value above this much, then it long-polls. If it doesn't, then I do a short-poll, and return the response immediately, which means I get to use the same endpoint for the initial load to go get the e-tag. Because in the browser, when you load the page for the first time, you don't have the e-tag, so you've gotta go get it. So you're like "Okay, I send it with a weight of zero, it gives me it back immediately, and then I go turn around and do a weight of 300, o it's just long-polls." And then when there's a change, it just responds back immediately, with the "Hey, there's a change." I think it's like a 20-- whatever, the no content. The 204 no content, being like "Hey, there's new content here." Or after the long-poll lapses, it just gives back a Not Modified.

And it turns out all of that stuff just works with the browser automatically... Which is just beautiful, because then I can go in and I do that special trick with CSS where you remove the DOM node from the DOM, and then put it back to refresh the stylesheet. And it's looking at e-tags as well. So it just handles everything, and it just all aligns perfectly. And I was like "Oh, this is really elegant." And it took me some time sitting down and looking at http to be like "Where is all of this stuff?" But it turned out to be all there. And I was like "I now have some special bespoke thing that I'm doing."

**Jerod Santo:** That's cool. So my last question for you is, what is your favorite resource on HTTP, and why is it ChaGPT? \[laughter\] I know where you're learning this stuff, Kris. I know you're really learning it all.

**Kris Brandow:** Yeah, not ChatGPT, that is for sure... This is a very me answer...

**Jerod Santo:** You read the spec.

**Kris Brandow:** From reading the specs, yeah. It's from reading the standards.

**Jerod Santo:** I had a feeling you might say that.

**Kris Brandow:** They're very well-written standards. The thing I find a lot is there's a lot of bad information out there, which I assume also kind of trickles its way into ChatGPT, because ChatGPT just pulls from the web, and the web just has lots of wrong and old information on it... So I think that going and just reading the specifications is a good place to start. And I also think that one of the things I would love it if we as an industry could do is be a little bit more experimental with things, and try some things out...

One of the things I don't like about GraphQL is that it uses post for everything. It makes sense why it uses post for everything, because we don't have an idempotent retrieval method in HTTP that includes a body. Neither head nor get allow you to have a body. Well, actually, get, the body is undefined, so technically you could do it, but a whole bunch of things might break if you do.

So I'm starting off using post, but when this was kind of realized, the IETF, the committee within the IETF that does HTTP was like "Hey, we have a missing method here. Maybe we should make one." So it started off being called Search, and then it changed it to being called query, and it's literally just a get with a body. And that effort appears to have kind of stalled out.

\[01:39:13.27\] Part of the reason for that is because there isn't a lot of support behind it, pushing it. But I feel like if the GraphQL folks had been like "Hey, we've got to use this post thing for right now, because it's what we have, but what we'd really want is get with a body. So let's go to the IETF and let's get get with a body specified, and put into the standard, so that we can then use it for the thing that we want, so we can evolve these standards forward." And I feel that's what we should be doing with more of these things, and I think that would make everything overall a bit better. And that's one of my gripes with a lot of these technologies that are just kind of not using HTTP well, because it doesn't fit their need, either because they don't know how to make it fit their need, or because it literally - like in the case of GraphQL - does not have a specified way to fit their need. They're building the thing, but they're not going back and helping to repair that and fix that.

So that's the thing that I would really like people to -- and for people to just be a little bit more exploratory and be like "I don't know, make up your own headers, make up your own methods, make up your own stuff." See if it works for you internally, maybe even try it a little bit externally and have some fallbacks, like the good ol' -- you know, in HTML you can't use put or delete, so it's like "Oh, well, we'll use post for this, we'll accept the repost, but if you want to use delete, you can use delete, and it's semantically better." So finding ways to move that, because that's really how we move the whole, the platforms forward. This is the big thing that the web platform does, where they find ways to slowly add things with different types of trials, and different types of shims, and all of that... And I feel like we should be doing that in this API space as well, of trying to just move everything forward so that we can just have more stuff built into the platform as a whole.

**Jerod Santo:** Very well said. Well, to our listener, if you enjoyed this conversation - which if you didn't, you must be a glutton for punishment, because you're still listening to it; it's just weird - but you were hoping for a \#define this week, because you heard me say on Changelog News that \#define was coming up next... Well, it is coming up, it's just not coming up next. It's coming up -- now it's coming up next week. So fingers-crossed, of course; things do change, but we plan on playing that game next week... And happy to provide this It Depends conversation with you, Kris, this week. I had a lot of fun, lots to chew on from here. We'll try to link up some things in the chat, or we'll just put a link to ChatGPT in the show notes so you can go ask it, what we all talked about. Connect with Kris on GoTime.fm. Anywhere else that you like to be contacted? Email...

**Kris Brandow:** I'm pretty much everywhere. @scriptable is my handle.

**Jerod Santo:** @scriptable.

**Kris Brandow:** So I'm still on X... I guess I'm on BlueSky now... I am actively, as I said, working on a website which will hopefully be rolled out in the near future. I'm trying to do some interesting things, I want to build an activity pub server... So lots of fun stuff.

**Jerod Santo:** Nice.

**Kris Brandow:** That's not there yet. So for right now, I'm definitely still on X, still on BlueSky, and obviously Go Time.

**Jerod Santo:** There you go. Alright, that's all for this week. If you like these It Depends-es, let us know, because I respond positively to positive feedback, and I'll do more. If you don't like it, just be quiet; just don't say anything, and I won't do them anymore. But that's all for now... Talk to y'all next time. Bye, friends.
