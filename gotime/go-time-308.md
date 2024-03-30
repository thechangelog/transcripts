**Johnny Boursiquot:** Well, hello, hello, hello, and welcome to this episode of Go Time. Today we are going back - well, at least Ian and I, we're going back to what it felt like to be a new Go developer... Because chances are we've probably forgotten that feeling. Yeah, and we have a special guest coming on the show to talk about their experience of being a new gopher, and they actually suggested an episode, which you can do too, listener; you can suggest episodes, and who knows, maybe we'll even invite you on a show and come talk about the stuff you're proposing. But yeah, I propose that we answer some questions that a new Go developer would have... And we thought "You know what? Why don't we bring him on the show and have him tell us what his experience has been and ask some questions?" So we treat this as an office hours style episode, and hopefully we'll do more of those in the future. But yeah, this is -- we're very glad to have you on the show, Duarte Carmo... Hopefully I'm not butchering your name... Welcome to the show.

**Duarte Carmo:** No, it's great.

**Johnny Boursiquot:** Good to have you. Good to have you. And co-hosting with me, as you might infer from my previous comments, is Ian Lopshire. Hello, Ian. How are you?

**Ian Lopshire:** I'm doing well.

**Johnny Boursiquot:** Good, good. You're ready to feel like a newbie again?

**Ian Lopshire:** I mean, I just felt like a newbie yesterday, making the same mistakes... So yeah, I think I'm prepared.

**Johnny Boursiquot:** Okay. Alright, alright. So Duarte, why don't we start with a quick intro? Give us a little bit of background, and we'll get into also how you got into Go.

**Duarte Carmo:** Yeah, sure. So first of all, thanks a lot, guys, for having me. I think this is the most spoiled office hours that I'll ever have in my life... So I'm honored. Yeah, so thanks a lot for having me, and really, really nice meeting you. So first of all, a quick and short background - my name is Duarte. It's a weird non-international name. I'm originally from Portugal, from Lisbon, but I've been based in Copenhagen, Denmark for the past seven, almost eight years now. So that's like North of Europe, which is very different from Portugal, for those who don't know. And my background is a little bit of a mixed bag. I've worked a little bit -- like, my background is a Masters in Engineering; I did like strategy, product management, I did a lot of different things, and then got more and more technical over the years... And for the past -- I also did some management consulting, things like that, in IT architecture, and management, and things like that... But in the past three years my main goal is that I basically help companies solve tough problems. That is normally related to more like the data science software engineering side, but I like to think of myself as someone who can also put stuff in production. If you guys are familiar with the concept of Jupyter Notebooks - I like those, but that's not normally what I put into production. So yeah, so that's a little bit about my background.

**Johnny Boursiquot:** Cool, cool. And how did you stumble onto Go?

**Duarte Carmo:** I have this thing where I'm very curious about new programming languages and new programming paradigms. So my background - it's a lot like on the research machine learning side, but I'm very passionate about putting these things into production... So I got more and more passion over the years to the software engineering side. And normally, the tool that I use is I just go for Python. And until a couple of years ago, that was just a no-brainer for me. I just used Python, and wherever I could stick Python, including your browser, that's what I'd normally go with, even if that's really inappropriate.

So in the past couple of years I started hearing about these new programming languages; the first one of them was Rust. And I got into Rust, and I started to do the Advent of Code. I think most of us are familiar with Advent of Code. So I tried doing Advent of Code in Rust. That went okay; of course, I didn't make it past like day 16, which was fine... But I really, really enjoyed the experience. I felt like it was a very different software experience than I was used to with Python. And I also decided to build a website in Rust, something that would basically transcribe one of my favorite Portuguese podcasts, which is like political commentary... And what was fascinating maybe about Rust is that the website never went down. Like, it never crashed. Like, it's still running.

**Johnny Boursiquot:** Nice.

**Duarte Carmo:** I've deployed it once. It transcribes all of the podcasts, and it has never gone down a single time. And I'm like "Okay, I'm not that good of a programmer, so I'm sure there's a component here that is based on the language." And so for the past couple of projects I decided that Rust is really nice, but there must be a good in between of being really strict about how I write code, so not of course being hard for me to develop something, like the time to market to be a bit longer, but also to be not that long. And Go, I was hearing that it was a good prompt language, and also, in a way - you guys probably know better than me - sits good in the middle, where it's like you won't take as long as writing something in Rust to get something out there, it will be probably not as fast as Python, but it will be much more robust, and "solid", than writing something \[unintelligible 00:05:39.04\] Of course, what I say about these programming languages has a lot of caveats, right? Like, you can be a great programmer and write something in JavaScript that is much more robust than something in Rust... But I think the languages kind of guide you. And so for the past couple of side projects I've been going with Go, and... Yeah, and that's how I came about it, basically; that's how I thought about using it.

**Johnny Boursiquot:** \[00:06:00.08\] Okay. Well, let me just start by saying that getting 16 days into Advent of Code is no small feat. So don't sell yourself short there. A lot of people I know, they'll start, they'll be all gung ho and excited, and then like day five, it's like "Ah, I give up."

**Duarte Carmo:** especially in holiday season.

**Johnny Boursiquot:** Exactly, especially during the holidays. Yeah. To me, that has always been as much of a lesson in time management as it is about getting through all the exercises. But awesome. Well, glad to have you in the Go community; welcome, on behalf of the Go community, if I may. Definitely, we enjoy having one new developer in the community.

It's interesting hearing you describe what led you to try Go. All of us, we hear about different programming languages all the time, and we don't always necessarily run towards them or gravitate towards them for one reason or another. The fact that you came to Go looking for something perhaps not as -- I guess if you consider a spectrum where you have Python, where you can develop quickly and get something out the door quickly, because it's what you know and have been using for a long time, and then having Rust on the other end of that, which has all these wonderful ways of ensuring that the stuff you have in memory is the stuff that you actually want to have in memory, where you have to be very strict about what you're doing and know what you're doing... Go kind of gives you that sweet spot in between, where you can get good performance, where you can get something out the door, and if you follow all the idioms of the language, you will get something that looks like production-grade Go code, without having to be a master of the language.

**Duarte Carmo:** And this is why we're having this conversation, because \[unintelligible 00:07:38.08\] is completely unknown to me. You're like "Oh, yeah, but if you follow the idioms", and I'm like "Yeah, I'm pretty sure I have not followed one of those."

**Johnny Boursiquot:** And that's okay. That's okay. That's why we're gonna get into it shortly here.

**Break**: \[00:07:55.22\]

**Johnny Boursiquot:** Let's start with -- I think one of the things you listed in some of the questions that you had was the idea of dealing with a binary; you like the idea of a binary. So what are you juxtaposing that to?

**Duarte Carmo:** Yeah, that's something perhaps I should add also, Johnny, because of course, I think about Go is something that sits nicely between something like Rust and something like Python. But I also really always loved the idea to have like a binary. So Rust always gave me that feeling of "Okay, I can just give you something." And for some of you that have programmed Python for a lot of years, know how frustrating it is, that all you have is a script. All you want is to give that script to someone, so that they run it.

**Johnny Boursiquot:** To somebody. \[laughs\]

**Duarte Carmo:** Yeah, but that never happens. And so I really enjoyed this side of the spectrum of things where you can actually just have a binary and make things run. I think that's really, really nice. And I also always heard these things about Go being a very simple language, in a way that two people with varying levels of experience might write a piece of code that is much more similar in Go. So it's kind of a simple language; it's not plain, but in a way it makes things obvious, and it guides you to do the thing. And that's also something that appeals a lot to me, because one of the things that I hate is making things complicated when they don't have to be. And so yeah, that's just a couple of things that I really enjoy about Go. And also, my way of learning these things is that I have some age that I want to scratch, and I write it in Go. That's kind of how I go about it.

**Johnny Boursiquot:** You're kind of discovering naturally, organically, the virtues of the language. Literally, part of the language's aims, one of it was to literally allow for somebody who's new to Go, or a junior developer, or somebody who is perhaps experienced, but still needed a language to basically write Go code that looks almost as good as a pro Go developer. It's the first language that I've personally come across that really guides you towards that. I've been amazed to see new Go code being created by new Go developers, that is not too far off from what I would expect from an experienced developer. And I think that's by design. The language kind of guides you; it kind of puts you on this path, it puts some guardrails around you, and your code ends up looking very much like what a professional would write.

**Duarte Carmo:** You haven't seen my code. \[laughter\]

**Johnny Boursiquot:** Well, let's start peeling back some layers.

**Duarte Carmo:** I think you'll have a couple of the heart attacks.

**Johnny Boursiquot:** Maybe we should also bring you back to do our roast, our Project Roast. We've been thinking about an episode, a kind of episode where we would roast projects... So we'll bring you back for those. \[laughs\]

**Duarte Carmo:** I mean, you said something that is really, really important, that I always feel. Whenever I read Python, in like the professional context, I feel like I see these dialects of Python where two different Python programmers will write Python -- or two different approaches, Python will look completely different. For example, now everyone likes types. So if you catch a developer that loves types, then you'll see typed Python, which is very different from normal Python. So there's kind of different lingos... And I feel like that doesn't happen so much in Rust, right?

**Johnny Boursiquot:** In Go.

**Duarte Carmo:** Yeah, in Go. Sorry. \[laughter\]

**Johnny Boursiquot:** That's the thing, when you're playing around with lots of languages, sometimes you end up --

**Duarte Carmo:** I haven't gone into the functional spectrum yet, but yeah.

**Johnny Boursiquot:** \[00:14:06.29\] That's a worthwhile endeavor as well. But yeah, you have a list of questions here... And I think I'll let you guide the conversation as to kind of what do you want to tackle first.

**Duarte Carmo:** Okay, so the first thing... So - some context. I was writing a couple of projects. The first one was that I wanted to basically build my personal LLM, and I wanted to basically access the Telegram API, and I want something that calls APIs, and then calls the Telegram API, and it's like a personal chatbot, if you want. But it just needs to be a microservice that calls APIs. That's all it needs to do. It doesn't need to do much more than that.

And so when I started writing this project, the first thing that I noticed is that - and even when I was looking at code, is that there is this... For every four lines, two lines are if err == nil, then do something. And I'm like "Okay, great. This might be like something specific to this project." Then I go to another project... I've actually worked with a company that had a Go codebase, and I delved in it, and it also had this pattern. And I'm like "Um, I'm basically seeing this if err == nil everywhere in my code, and I don't know what to do with it." Is this normal, Johnny? Tell me... \[laughter\]

**Johnny Boursiquot:** Well, Ian, why don't you get us started? Because I have thoughts, and opinions...

**Ian Lopshire:** I think not only is it normal - and it can be jarring at first, because like you said, it does occupy a lot of space... But it's also kind of my favorite part. So it's hard to not like it, I don't know. But yes, it's completely normal and expected. And at least the if err == nil part, what you do after that kind of changes, but... I think you're always gonna see that. There's been so many proposals to try to change that, and all of them have gotten shut down, and I like that they have all gotten shut down.

**Duarte Carmo:** I feel like it's the personality of the Golang programming language thing for now.

**Johnny Boursiquot:** Yes, but not because the creators of the language wanted to be anti, right? I can't remember the name of the paper, but there was a paper once upon a time that I read, and then I immediately understood why the creators of the language chose to go that route... The paper talked about explicit handling of error values, right? As opposed to some languages where you're gonna see some exception handling. \[unintelligible 00:16:19.00\] you see a try, a catch, finally, or something like that, and then basically they're just bubbling up the error all the way up the stack, and hopefully something will catch it and handle it and do something with it. So Go doesn't have exception handling. Go has error handling. And the error values need to be treated and handle then and there, when they happen. There's no traditional approach of the try, catch, and finally. That style of handling exceptions is not present.

So when you see the typical multivalue return where the last values type satisfies the error interface, that's basically the idiom within the Go community; it basically indicates that "Okay, you're gonna make some sort of function call, and if something goes wrong, if there's a possibility of something going wrong within that function call, expect that--" say you're returning two values, right? Maybe the first value is what you really want, should everything go well, and the second one is something that satisfies the error interface, you should check to see if something went wrong and decide what you're going to do right then and there.

Maybe in some cases maybe you want to call a different function, and maybe you want to retry. Maybe you want to log something out, or capture some sort of metrics, maybe you've got some open telemetry tracing in there, maybe you want to send a trace somewhere... However you want to handle that error, the idiom is to handle your error right then and there, as opposed to sort of allowing it to bubble up the stack and hopefully something handles it.

**Duarte Carmo:** So is this the concept of - if you're deep, deep into the codebase, you're like four functions in, and you have one large function that perhaps calls other four functions, and all of them have a value and the error - is it something that you normally just return that error on that function and return back? Or is it something where you normally don't return back that error? So my question is kind of, do you actually raise a panic anytime, or are you always returning that error back up the stack?

**Johnny Boursiquot:** \[00:18:21.13\] Well, careful with the nomenclature. There's no raising of anything in Go. And even panic means something very specific for us. So you don't want to use that word when you mean an error. So to use your example, depending on how you want to handle your error, you could simply call a function; maybe you're on the third of four functions. Maybe the third one calls a fourth, and if something goes wrong in the fourth and an error gets returned, in the third function you could decide to handle the error right then and there. Maybe you try calling again, maybe you do some other thing, maybe if you want to log it out, maybe you log it out, and then call it a day... Or more than likely you'd probably return that error back to whatever called this particular function.

What you typically want to avoid is -- maybe you have four functions deep, and all they do is they all log out something. So in your log files you end up having the same error, or a similar error, a similar root cause all over your logs, with no additional value. Yeah, you could do it that way. You can have each function log something out, just so you can see "Well, which function errored out?" and make notice of it... But typically, you just want to allow -- maybe it's your top-level function that basically does the logging out or the tracing or whatever it is.

Personally, the way I approach it - and maybe Ian has a different approach. Personally, the way I approach it is deeply nested function calls. I don't log anything out. I basically -- within my context that I'm passing down to each of those functions I'm doing open telemetry tracing. So I'm literally tracing each function call. And then I'm not logging anything out; if there's an error to be recorded, I can add that to the span that I'm tracing, that I'm adding to my trace. And then I allow basically the caller to do something with the error if they want to do something other than just make a note of it in the trace somewhere.

And then I'll add to my top level - usually it's my main function somewhere, or the main handler of some kind... I allow it to decide "Okay, do I want to -- I know I've already been onto some tracing. Do I want to then send this particular error to an external bug tracker? Or do I want to simply log it out if I want?" But I'm localizing sort of beyond just the traces, I'm localizing the logging of that error in just one place, or communicating that error to an external bug tracker to just one place. But that's because I know I have tracing throughout the application, so I can rely on the trace to provide me the breadcrumbs, without having to rely on my deeply-nested functions to be emitting log. Because that's effectively what you're doing. You're trying to say "Hey, this function was running when this error occurred", and you can go in your logs and kind of see what was going on... But traces give you the same benefit without you having to pepper your log file with the same kind of error. Ian, do you have a different approach?

**Ian Lopshire:** I would agree with everything you said. I guess my main philosophy is either handle it or add context and pass it up. So you'll see a lot of fmt.Errorf() with a w for wrap. And then they'll say "Hey, there was an issue with this user." So you can add context all the way up. So even if you don't have tracing, a lot of the time you can see exactly the path that the error took all the way back up to where it's finally logged out or handled, or...

**Duarte Carmo:** I didn't know you could add stuff on top of errors that already exist. So you could basically add something... How do you do that exactly?

**Ian Lopshire:** There's quite a few ways, but one of the more common ones you'll see is it's literally just like a format string, where you pass the error as one place, and then you can add whatever content you want.

**Duarte Carmo:** Okay, okay. So that's what I was doing. Alright, so you basically create an error.

**Johnny Boursiquot:** \[00:22:07.29\] You also have to understand, an error -- I mentioned the term interface earlier on very deliberately. So you can create your own custom errors. It doesn't just have to be like a string, a value that you're just bubbling up; you can have contextual, sort of a composite that it represents. As long as it satisfies the interface, meaning that it has a method on there called error, that returns a string, that's all it needs. So you can create a struct that basically has fields that provide context. Maybe you might have a custom error that tracks a particular endpoint value, or a particular number of retries, or whatever it is. That way when you when you're passing this error value right back to the caller, you can provide additional context beyond just doing the fmt.Errorf() and just embedding the existing error; you can use a customized error value that provides way more context than the simple error value.

**Duarte Carmo:** Yeah, I think that's kind of the same thing we have in other languages, where you can kind of raise different types of errors, and compose your own type of errors. Of course, Johnny, when you say interface, my brain sometimes \[unintelligible 00:23:17.08\] But sure, it does make sense.

For me it's also the component of like - it looks like if not done right, perhaps... Right, Johnny? If you're not doing actually something with those errors, it looks so repetitive to have those if err = nil then return null, whatever, that it's just like "Okay, what is the point of this?"

**Johnny Boursiquot:** Exactly?

**Duarte Carmo:** Perhaps the point is that if you do it actually correctly, and handle those errors, then it actually looks like something, not just empty if err = nil, then return null, right?

**Johnny Boursiquot:** Exactly. Exactly.

**Duarte Carmo:** Yeah. Okay, that makes sense to me. That makes sense to me. Should we go on to the second one?

**Johnny Boursiquot:** Yes.

**Duarte Carmo:** Alright, so I mentioned that one of the things that I really like about Go -- no, maybe last one, I have to ask this... So if you do the if err = nil, do you do the to the if error in the line after, or in line? Because I've seen two variations, where you do a statement \[unintelligible 00:24:09.24\] you know what I mean?

**Johnny Boursiquot:** Yeah, it's all about the scope. So if I'm returning two values, if I'm trying to limit the scope of those two values to just my if block... Basically, I can do if, like, some variable for the value that I'm trying to capture, comma, error, and then my colon equal, and then call my function. And then within that same if block, I can then say if err != nil, then do something with the variable that I captured. So it's all about the scoping. Basically, whatever value that gets returned, if you want that to be available outside of the context of your if, then you pre-declare your variable, and then you can call the function and then basically you're gonna get back -- you can predeclare your error variable, you can predeclare whatever value you want to capture... And then what gets returned from the call, those things will get assigned to those predeclared variables, and then you can do the if error nil check on its own line... But then what you can do if you detect an error, you can return early, and then if you decide to -- basically, if the error check passes, and there's no error, then you now have that variable that you've predeclared, and it's now available to the rest of whatever scope you're in. So to me it's all about the scoping of the return values.

**Duarte Carmo:** That makes a lot of sense. Okay, okay. Thanks for clarifying.

**Ian Lopshire:** My general heuristic there is do it in one line, if you can.

**Duarte Carmo:** Okay, there we go.

**Johnny Boursiquot:** If you can get away with it.

**Ian Lopshire:** Yeah, if you can get away with it, do it. If not...

**Duarte Carmo:** Alright. There we go. Okay, perfect. Awesome. Okay, so enough about errors... Let me ask you about the second thing. So one of the reasons I mentioned that I really liked Go is the fact that I had a binary. And that unlocked a full world of possibilities. But whenever I wanted to actually deploy the project, I was looking at some examples and everyone was dockerizing these Go projects. And even the official Docker images for Go.

\[00:26:09.17\] And I've also actually seen this with similar typed languages, like Rust for example, where we're still dockerizing everything. So for me, it's like "What is the final advantage of having a binary?" Is that we can do multistage builds that are smaller? Or are we actually leveraging the fact that we have a binary?

**Ian Lopshire:** I mean, the multistage build with tiny images is really nice, just to be clear. But we actually don't dockerizing our production stuff. We run it on bare metal, and it's super-easy to ship a binary from like GitHub Actions straight to bare metal, and it's still great. So I think it just more depends on your tooling, versus...

**Johnny Boursiquot:** So there's the tooling, there's the developer side of things. When you were talking about that, my mind quickly went to the operational side of things. There are some advantages you're going to have when you create an image of your executable for certain deployment environments. So if you wanted to have orchestration tooling - the Kubernetes of the world, the Amazon ECS'es, the Fargates, and all these services, these are container orchestration technologies. And you can manage availability, and having multiple instances running, and you can manage resources allocated to those programs, you can handle the networking between components, you can -- there's a lot of benefits to dockerizing, to having images that can be deployed when you're using container orchestration tooling.

In the case of Ian, perhaps they don't have those requirements, so they can deploy the binary directly. And I'm curious to hear how you manage your updates. Maybe you use like a package manager or something for the particular OS. That's what I would probably think to do. But yeah, to me it's all about the operational context for your program, and whether dockerizing, making images of your program makes it easier to scale up or down, and things of that nature.

**Duarte Carmo:** Yeah, I think we were curious, Ian, how you actually manage those binaries in the machines?

**Ian Lopshire:** Yeah, so I mean, we use Elastic Beanstalk through Amazon, which is just dead simple and easy. So that's why we use it. And it can still do all the autoscaling stuff and all of that.

**Johnny Boursiquot:** They just abstract that from you.

**Ian Lopshire:** Exactly. It's fully managed. Exactly. And yeah, for our small team, it works very well. I would recommend. A little bit weird, but we really haven't seen the need for the big container orchestration type stuff.

**Duarte Carmo:** Yeah. And I also guess, when Johnny you were saying that if you have a standard in a very large team, and everyone's on Docker, or if you're using like a Kubernetes or an ECR or something that has autoscaling and you wanted to find the number of containers, it's really easy if everyone's up to the standard. But what Ian is saying is that if we're just one team, and we don't have that tooling in place yet, and we're not using like a Kubernetes, or any specific orchestration, or container orchestration tool, then it's just easy to go for the binary. And I can also see that perhaps when you're shipping all of the CLIs in Go, the fact that you actually can ship a binary is really, really nice... Because if you're packaging it for others, then comes this whole other \[unintelligible 00:29:10.01\] talking about, of like actually shipping dev tools. And in that sense, it's great to have a binary, I guess.

**Johnny Boursiquot:** Yeah. When you were talking earlier about how do you share a Python script, my mind immediately went to some -- man, I have some battle scars from trying to share Ruby scripts back in the day with teammates and whatnot, variations, and which version they had, or little quirks in how their gem package management was configured, and weird issues... It just made it impractical to try and share tools between each other. And then you try to basically solve the people problem aspect, and communicate "Hey, this is the version of the things that we're using. You have to be on Ruby this; you can't be using non-standard VM there." You have to end up basically creating all these rules around -- sort of trying to standardize so that everybody's on the same thing... But it's way easier to just say "Hey, my coworker here uses Windows. Let me just create a binary. Let me just create an .exe for them. Just build an .exe for them." "Oh, my friend over there uses this particular flavor of Linux? Okay, let me build something for you. I'm on Darwin, I'm on a Mac. Let me build something for me and my other Mac-using teammates."

\[00:30:28.25\] And the build process in Go - man, I can't tell you how amazing it is. Just by specifying a couple of environment variables, you're just specifying what operating system and what CPU architecture am I building for; it takes care of the rest. It's magical. Something like that is incredible if you come from build farms; if you have any experience with build farms or anything like that, you will love the experience for building different binaries, different executables for different platforms. That's one of the strengths of Go.

**Duarte Carmo:** I mean, for me, that was also obvious, but when you mentioned it, Johnny, the building, but also like the tooling around the Go programming language also in terms of like the packaging. I always think that in Python - and I've been working in Python for some years, and we still feel like we're reinventing packaging every six months. It's just like the new JavaScript frameworks, it's like the new --

**Johnny Boursiquot:** The new framework?

**Duarte Carmo:** The new Python dependency management solution that will take care of all the problems. We have those every three to six months. But in Go, it feels like you have a great package managing solution, and then it also comes to kind of my next question, which is related to packages. And I was really surprised when I started working -- in some of these Go parts everything seems so simple, and so flexible, but there's still something that I quite don't understand. So I was basically creating multiple packages inside of my repository, in my Go kind of app; it had multiple packages almost, and each of them kind of referenced the name of my GitHub repo. It was almost like github.com/myGitHubusername/whatever that package was. And it felt like it's a little bit of like Far West, where I could do whatever I wanted. But I think this is kind of the opportunity to ask, how do you guys see this relationship between packaging, and how -- I think there's some like namespace concepts also involved here, but I would love to get some of your thoughts of how does this work? Why does my package have the same name as my GitHub repo?

**Ian Lopshire:** I don't even know where to start with that...

**Duarte Carmo:** Oh, no...

**Johnny Boursiquot:** \[laughs\]

**Ian Lopshire:** I mean, I think the main thing was when Go came out, it didn't have a package manager. You had a single gopath, and you had to put everything in that gopath...

**Johnny Boursiquot:** Everything in there.

**Ian Lopshire:** ...or you couldn't find it. So there's the necessity of the namespace, and then the convenience of being like "Oh, this is just the name is where it exists. So as I download code, it's all in the place." I guess I don't know beyond that, if there's some history there.

**Johnny Boursiquot:** Well, we're not gonna drag Duarte through our interesting package management history in the Go community. It's safe to say that the module system that we have now - it's not everyone's favorite, but just like gofmt, everybody pretty much loves it at this point, only because of the standardized nature of it. Well, maybe "love" is a strong word, but it's good enough, it's good enough. And it gives you sort of a reproducibility and a lot of other benefits.

But to your question, having a github.com base domain name with your GitHub handle - and it's not just GitHub. It's GitLab, it's BitBucket, whatever your code repository tool of choice is... Basically, it makes it easy for the go get command to know exactly "Where do I go and grab this particular package?", to pull it down and store it in a local module cache. That way I don't have to keep pulling it down every time I do a build, basically.

\[00:34:03.04\] And when you are looking at code, literally you just copy and paste this package path into your browser, and to the repo you go. So it makes it easy -- there's so many benefits to having the path. It provides namespacing, there's not going to be any conflicts, as to naming conflicts... Maybe you have two packages named foo; if one's under a particular github.com/username/foo, that's gonna be very different. Just by looking at it you know it's going to be unique, because there's no two packages that are gonna have to have the same naming, and you don't have to jump through hoops to do any funky aliasing or anything like that to know which one you're dealing with.

So there's a lot of benefits to doing it that way, and one of the things I try to teach developers is from the get go, when you first install Go, if the install doesn't create it for you, you should create it yourself - there's gonna be a Go directory that gets created under your root username account. So if you're on a Linux machine or something like that, under your home there's gonna be a Go folder that gets created. And this is where I typically tell folks "Look, when you download any packages that you do a go get, there's going to be a PKG folder that gets created under this go directory for you", and this is where all the module cache lives. This is where anything that you download that you don't vendor - and we can talk about vendoring if you'd like - is going to go into that particular module cache.

And then from there, you can create an SRC directory where you put your code. So I create an SRC directory, I have a github.com subdirectory, followed by my jboursiquot GitHub handle... So I have this the hierarchy that allows me to basically say okay, anytime I'm looking for code, or anytime I need to check out code, or fork a repository, whatever it is, I need to bring it locally, I just go into my go src github.com slash whatever username slash project name. So it simplifies everything; I know exactly where to go look for the particular source code for a project that I'm working with directly, and I know exactly where to go in a module cache to find the module code I'm looking for. And even when I vendor my dependencies in a particular project, in my vendor directory, there's a hierarchy in there; there's a github.com, followed by user name, followed by whatever project that I'm relying on as a dependency. So it just keeps that consistency across the board. And I can even use multiple versions of the same dependency, because the module system follows a semantic versioning mechanism.

So I know it might feel a little odd, it might feel weird at first, but trust me, we in the community have been burned... Not burned, but we've gone through some hardships, and we understand the value of what we have now. It's not perfect - obviously; nothing is - but it works well enough that it creates that predictability and that reproducibility for our builds.

**Duarte Carmo:** I had seen it once before... You know where? In Vim, actually... So whenever I install a plugin, the reference is always someone's GitHub repo. So whatever packages you install, it always goes back to the \[unintelligible 00:36:55.27\] But what you mentioned about consistency for me is really, really clear, especially in a Go project, where I actually know where everything comes from just by you being able freely to put whatever you want, wherever, in a way. Whatever packages you want to put inside of a GitHub repo, you're free to do so. And that's the problem that I saw in Python, where I'm very constrained; sometimes you have to put some things in certain places, and in there a certain structure... And I felt this freedom and simplicity is a really great characteristic of Go, that "Oh, if you want to just create another folder and make a package out of it - great. Do it. No problem." And that was really, really cool, actually.

**Johnny Boursiquot:** Good. Glad you like it.

**Ian Lopshire:** Yeah, I do think how we do the package naming really just fits well with like the Go ethos of just like stupid simple.

**Johnny Boursiquot:** Keep it simple. Yeah.

**Ian Lopshire:** I can't think of a simpler way to do it than just where it exists.

**Duarte Carmo:** Yeah, that's a really good point.

**Johnny Boursiquot:** What else you got?

**Duarte Carmo:** \[00:37:55.05\] Okay, so we've talked about the packaging, and how that connects to GitHub repos... And I also wanted to talk about structure. And to give an example, I'm going to give an example of something -- one of the side projects that I built was basically a website that we can read news from Denmark, but in English. And it's basically a -- yeah, I guess a really simple web app. And I started thinking okay, I have these types that -- I'm starting to write more and more types, I have something related to the parsing of websites, or RSS fetching, and then I have something related to maybe, I don't know, like serving the web page, or templating, or whatever... And I wanted to ask you, is there a way that you normally structure these things? Do you structure your Go -- I know there are probably five answers to this, there's no consensus, so maybe give your personal opinion...

**Ian Lopshire:** I'm excited for Johnny's answer on this one. I still struggle at this. I've still made mistakes that haunt me. A new thing I wrote last year, I'm like "Oh, that's wrong. I would not do that again." So yeah, I'm also interested.

**Duarte Carmo:** So it's just like Python, is what you're saying.

**Johnny Boursiquot:** Well, I wouldn't go that far. Like you, I've come across many different approaches. And I think we even had -- we've had attempts in the Go community at specifying sort of a standard structure for Go projects etc, etc. And even the Go team themselves have shied away from saying "This is how you should structure a project." At first, I thought it was not great that there was no standard approach. And then the more I use Go, the more I realize "Okay, I have flexibility." I'd rather idioms -- if you've ever heard sort of... What's the term, convention over configuration? ...from my time in the Ruby on Rails world; that's like a mantra. And I think we've carried that into -- or I carry that mentality into my Go projects. But I will say that at a very minimum, once I know what kind of project I'm building, I follow a couple of different patterns. If I'm building an executable - ultimately, the project may produce executables, but also itself be a package. The first thing I do the moment I create my repository, I'm going to create a CMD folder. Inside of that CMD folder, I'm going to have another folder representing the name or names of whatever executables I intend to build. So if I want to build two executables, one named foo, one named bar, in my CMD folder I have a foo folder and I also have a bar folder. And in those folders, I have a main.go for each.

So now I know this project -- the moment I go into any repository, if I see a CMD folder at the root of that project, I know this project at least is going to build one or more executables. That project itself naturally will be a module in and of itself, and I know that there's going to be Go files that are at the root of the project, that are going to have a package declaration, and I know if this project can be imported in some way, somebody can do a go get, github.com/username slash whatever project is... So that means even if that project has some executables in there, as long as there are things that can be used at the package level, as a library within a project, somebody can still go get that repository, but they can also do a go install to point to the executables in the CMD folders.

So you notice that that's the only set of folders that I start with. I don't try to create a bunch of hierarchies, I don't have model folders, I don't have a types folder... Not that you can't have those; these things are -- I find myself nine out of ten times I find myself starting to introduce that hierarchy and that division once the project is mature enough for me to know that --

**Duarte Carmo:** Once you need it.

**Johnny Boursiquot:** Once I need it, exactly. I don't prematurely start to create a structure. This is not like a framework where you initialize a framework, you say "Create this project", and it spits out a bunch of different folders, and files, and everything else. I'm not using a framework. So I create these hierarchies when I need them, and I go out of my way to not create unnecessary hierarchy, because the more folders I create, the more packages - and I'm gonna use the term subpackage, but there's no such thing in Go. There's only packages. The more of those nested packages that I create, the higher the likelihood that I might have some sort of cyclical import kind of going on there.

\[00:42:16.16\] If I need to have one package, use something from another package... It creates all this sort of extra stuff that I have to keep in my mind now. At most, if I'm building a server, a web server, for example, I might have a Handlers folder at the top level, where I can keep my handlers in there, that way I know where all my handlers are, and my handlers are probably going to share some code between each other, but that's going to be relegated to the handlers package only. And then everything else at the root has to do with -- think of it as a core business logic behavior that exists at the root of my project. And then I have a CMD folder with those executable folders in there.

That is 80% of all the projects, that structure, that approach of simplicity for those projects, that's what they are. Again, the bigger the project - you don't want to go into a Go repository and you're just scrolling down for days, because all the files are all in one at the root of the project. I mean, maybe that's suitable if that's truly the case, if everything exists at the top level package... But you don't want to necessarily from the get go try to create all these hierarchies, and folders, and folders inside of folders, because that's just going to create a mess for you.

**Duarte Carmo:** Checking my web app repository... \[laughter\] No handlers folder. Alright. But there is a CMD folder.

**Johnny Boursiquot:** Good, good.

**Duarte Carmo:** But just to clarify, Johnny, I'm just curious... When you mean folders - these are also packages in Go, right?

**Johnny Boursiquot:** Yeah. So think of it this way. The folder hierarchy is more so for you and I to communicate as developers than it is truly for Go. Because at the end of the day, the Go tooling grabs all of your files, and the only thing it cares about is a package declaration at the top of each file. That's the only thing it cares about.

**Duarte Carmo:** So it just gets out of the way. That's what's beautiful about it, why I fell in love with Go... What you said applies to any language and any software pattern that exists, is like "Okay, don't build unnecessary complexity when you don't need it. I'll handle the structure when I need it." But the fact that Go just gets out of the way when I just need to build folders is pretty nice.

**Johnny Boursiquot:** Yeah, indeed.

**Duarte Carmo:** And I should also caveat that the reason why I asked you was Mat Ryer's "How I write HTTP services in Go." That's the thing that also inspired me to like "Okay, there should be a good way of doing this." I ended up trying to implement some of the patterns, but I ended up doing whatever I wanted.

**Johnny Boursiquot:** \[laughs\]

**Ian Lopshire:** I don't think this will ever be like a solved problem, because I do think Go forces you to actually think about your architecture and your packages. And you're just gonna have to figure it out for every project, in a way that kind of isn't fun, but I think it makes it better at the end... Assuming you don't really mess it up.

**Duarte Carmo:** You form some scars over the years.

**Ian Lopshire:** Oh, yeah.

**Duarte Carmo:** You remember that you shouldn't create all of that unnecessary boilerplate, because you're not going to need it in the future. Yeah, I think it's horizontal to most software projects. Okay, what about -- and you tell me when to stop, Johnny. I could stay here forever... But I was talking about -- because I was developing this web application, and there comes a time where I eventually need to handle some data, and store some data... And that's where normally tears start coming to my face, and I started having the realization that I'm going to have to be handling things like databases, which just add complexity that I do not like to deal with in general. And so I know that Go is kind of this stupid simple approach, and you mentioned it, Ian - it gets out of the way, and it's simple, and it's obvious in most things... And I felt, when I was like, "Okay, I'm going to start using some data, I'm going to do some, I don't know, insert statements in a SQLite database, whatever... Should I use an ORM?" And I see a lot of these Go examples where they're not actually using an ORM. They're just writing the SQL code themselves. And of course, it's something you can also do in Python, but I asked myself "Is the Go simplicity going until the point where most Go projects don't use an ORM?" Or you should normally use an ORM.

**Ian Lopshire:** \[00:46:10.21\] This one's hard for me... Because I see the benefits of the ORM. The main monolith I work on uses an ORM extensively, and I hate it. But... But...

**Duarte Carmo:** Poor ORM. I feel like \[unintelligible 00:46:23.12\]

**Ian Lopshire:** I will say, as far as like developer velocity goes, for 90% of the time it's way faster. But I still don't know if that 10% edge case makes up for it. When you're digging through Gorm code, trying to figure out why I'm inserting rows twice. Like, that kind of thing. I don't know, I can't think of a good example, but... Yeah, that 10% edge case is the worst part, and I don't know if it makes it worth it. I don't know, that was a rambling answer... Johnny?

**Johnny Boursiquot:** I can add my two cents... The ORMs and frameworks and all these things, that class of developer tools - it's all about total velocity. It's all about how quickly can we move to get this out the door, and we don't have to reinvent patterns for data access, and everything else. An ORM helps alleviate that. If everybody knows -- to use Ian's example, if everybody on the team knows Gorm, then we know what Gorm code looks like, and we can intuit basically just by looking at a line of code exactly what data we're looking for, where conditions are etc, etc. It's easy, because everybody knows what the API looks like.

That said -- and in most cases, if you're just doing some CRUD work, it's perfectly fine. It's fine. Everybody knows how to use it. We can get moving quickly, and nobody has to spend time coming up with yet another way of doing the data access.

In some cases where you need tight control over performance, or the kind of exactly how you want your query to run, exactly what you want to join on, all these kinds of things in the case of relational databases, you have the ability to execute raw SQL statements using these ORMs. I think most of them, if not all, have the ability to run an exact -- if you don't want any output back, or run some sort of API call you can make to execute the raw SQL string that you're going to provide.

So you have the benefit of both approaches with these ORMs. And if you really want to, and if you want to execute your own query against a raw database connection - well, you can just basically say "Hey, give me the actual SQL connection and I'm going to actually do my own stuff against there." If you want to see a case of the ORM adding extra stuff, or is it just the SQL that we're sending that's maybe taking too long to return, or whatever the case may be. So ORMs are good for that particular use case.

And the ORMs will tend to sort of dynamically, based on the types you declare, based on the structure you declare, and struct tags that you add to fields and whatnot, they'll try to do the best they can to infer a lot of things for you and manage creating tables for you, if you want them to, do migrations, and all kinds of crazy things. But in a case where you don't want an ORM to actively be in the path of every query you make, or trying to infer columns and things based on the fields that you have in a struct, you can actually pregenerate things ahead of time. You can use -- I think we mentioned Gorm on one end of the extreme. On the other end of the extreme you have things like sqlc, or even sqlx as packages within the Go community that have been used extensively. And a lot of folks have preference for those, as opposed to using an ORM.

So these things are more lightweight approaches to doing database access, over a full-blown ORM, which might have a little bit more bloat than you care for. So again, as with all things, it depends... But I think in my projects I find a happy medium between using an ORMs to move fast, and basically dropping down to writing raw SQL. Oh, by the way, you should always learn SQL. That's a skill that you'll never gonna regret. Regardless of language, or framework, or whatever, 10 years from now, whatever, you're not gonna regret learning SQL. So learn SQL.

\[00:50:13.04\] And when I need to actually drop down to actually writing my own very SQL -- especially trying to get things like window functions through an ORM, incredibly hard. Incredibly hard. I just drop down to raw SQL whenever I need to do things of that nature.

**Duarte Carmo:** As a machine learning engineer, I've learned that through the software developers need or tendency to use ORMs. Normally who's writing the SQL, it's more on this side, because we need to access the actual data. So yeah, I completely feel you. But I also feel like it's -- perhaps I had this thought that it was a very Go-specific thing, where Golang or the Go community tends to jump less towards an ORM than most other communities. That's what my feeling was. But I think also, like you mentioned, Johnny, if ccomplexity increases, and you want that velocity, and you're working at a bigger scale, then you're probably going to want to use, especially like for the migration use case, I guess, the ORM.

**Johnny Boursiquot:** Yeah, some ORMs will come with that built in. I also know of specially dedicated projects that do migration; that's all they do. So again, it depends on your use case. But try different things, and don't rush, don't commit too early to any one thing. Same approach with the packaging, how you structure your project. If you know you're going to use an ORM to get off the ground quickly, you just do it, because that's what everybody on the team knows - it's fine. If you then have specialized cases where you need to do raw SQL, you can do that, too.

**Duarte Carmo:** Right. Awesome. Cool. And regarding still databases... Is there any specific thing between Go and SQLite? I've been seeing a lot of projects that like use SQLite as well, and for this specific web app that I've built, I used something called Litestream. I'm not sure if you guys are familiar with it.

**Johnny Boursiquot:** Yup.

**Duarte Carmo:** Yeah, it backs up my SQLite database to an S3 bucket. That's really nice.

**Johnny Boursiquot:** Yeah, you're not wrong... I mean, SQLite - SQLite is and has always been one of the favorite developer tools out there, regardless of language. It's small, fast... You can go far with SQLite. Some people even ship with a SQLite database if they need to package a database with their projects and whatnot... It's just a great all around project. It's been around for years, and it's just a great all around project.

The Go community liking SQLite - I think that's something that predates Go. People just like SQLlite, and just say "Hey, why not put both things that I really like - why don't I put them together and use them?" So I think that's what you're seeing; the love for both of those technologies together kind of makes it like a pleasant workflow.

**Duarte Carmo:** It's kind of the go back to the simplicity of things. And yeah, Litestream was a great experience for this project. No problems at all. I went with actually raw SQL instead of ORMs, and... Yeah, I didn't really like the migration experience, because I needed to write it myself... But I guess I'm the one to blame there. But okay, great. Good. I have a little bit more clarity here that you guys are not so extreme in the Golang side of things \[unintelligible 00:53:21.21\]

**Johnny Boursiquot:** Yeah, we're a lot of things, but extreme doesn't tend to be one of the things that we ascribe to Go developers. Yeah.

**Duarte Carmo:** Okay, awesome. And then -- so one of the things that surprised me about Go when I was writing is that for this specific project there needed something to happen. So I needed to basically look at five different Danish newspapers, get their RSS feed, and then automatically throw them at a large language model to get the translation for the contents of those news, basically, and the translation for the title. So I basically wanted to do a bare bones, really simple website that I can just read Danish news from a bunch of different sources related to where I live... Because I don't do Danish yet. Because - yeah, exactly. I'm very bad.

\[00:54:08.20\] And so one of the things that I need to do is I actually need to request all of these RSS feeds, and I need to actively run all of these translations, so call all of these APIs, but I wanted to do it in a fast way. And when I think about Python, I was thinking okay, now I have to throw this thread pool executor, or I have to write a bunch of these boilerplate code to do some concurrency here... And I have to swim against whatever normal Python is to try to make this as efficient and concurrent as possible. And then I was like "How should I actually do concurrency in Go?" and there's this great website that I'm sure you guys know almost by heart, which is this Go by Example website... And it showed me that all we need to do normally is like go, and then the name of the function, and it just runs it in the background. And I was like "What? Why don't we have a go keyword in Python? This is great."

And so I was really quickly in love with how I could actually call all these APIs and get these RSS feeds and call these translation services super-fast, and super-concurrently, without adding so much boilerplate to my code. It seems what it is perfectly natural to Go, because I think that's one of the reasons why it was designed as well. And one of the questions I had is, I started noting that there's things -- like, I started doing things like channels, then I said that there's also like wait groups... There's a bunch of perhaps different ways of doing concurrency... Is there a way that -- for example, let's just put a simple thing. You need to call an API in parallel for five different -- you want to call at the same time. Do you jump for channels? Do you use wait groups? What do you go for?

**Johnny Boursiquot:** Generally, the approach is if you know how many goroutines you're gonna need, if you need to manage the number of goroutines, and you know how many you're going to have for any given task, a wait group is usually a good starting point. And then using your example, if you know you're gonna hit five different websites, and have five different workflows running - you call the website, you get some stuff, you parse the RSS, and you start feeding that into an LLM, each one of those things could be a separate goroutine, a separate thread of execution. Because these things don't depend on each other. One website doesn't depend on the next, so you can simply have those tasks happen in their own goroutines. In this case you know you have five websites; you could trigger five different goroutines. You just have to wait for them, hence the name, wait group. So you initialize your wait group, you say "I'm going to add a count of five", and then for each goroutine you launch, you're gonna want to decrement a counter, and there's a process for this, what we're calling a done function, a done method in your wait group, from inside of the goroutine you launch. And then every time a goroutine returns, it decrements the counter automatically. So whenever you know exact how many goroutines you're gonna need to launch, a wait group is usually a great starting point.

Channels are meant for communication between goroutines. So if you need maybe in your main thread, your main goroutine, if you need some information to be passed back and forth between your main goroutine and whatever other goroutines you've launched, channels are great for that. Channels have directionality. You can have send only channels, bidirectional channels... Again, it's really used for communication purposes. And then there's other ways you can use channels, almost like a queue kind of behavior, but that might be a bit more than we want to get into now. But really, the channel is all about the communication. And obviously, Go comes with things like mutex and whatnot for doing mutual exclusion, and that same notion exists in other programming languages, so I don't have to explain it here... But for most people, I usually say "Hey, can wait groups help you accomplish this task if you know how many things you need to do ahead of time?" I usually say start there.

**Duarte Carmo:** The channels could do exactly that? What you said about wait groups, I could use channels to do exactly the same thing, or no?

**Johnny Boursiquot:** \[00:57:58.06\] No, not exactly the same thing, and not exactly in the same way. You'd be adding some overhead if you use channels. In the example that we just walked through, you'd be adding some overhead to do it via channels. But it's doable, it's just you'd be adding a bit of overhead.

**Ian Lopshire:** I would definitely mirror... Like, kind of reach for channels last. I know it's Go's flashy feature... But I'll often grab for a mutex way before I grab four channels. I think it's easy to reason about... And sure, there are good reasons to use channels, but almost always I'll avoid it, if I can.

I also wanted to add, there's a \[unintelligible 00:58:32.21\] which is very similar to a wait group, but basically, instead of directly launching goroutines, you give it a function that returns an error. And so then you can wait until everything's done, everything's returned nil, or you see the first error. And also when you create this group, you can give it a context, so that it cancels everything after the first error. And I find myself reaching for that even more than wait group.

**Johnny Boursiquot:** Yeah, that's a great package.

**Ian Lopshire:** Maybe my single favorite Go package.

**Duarte Carmo:** So what's the name of the package?

**Johnny Boursiquot:** Errgroup.

**Ian Lopshire:** It's in the experimental sync package.

**Johnny Boursiquot:** Right. The last thing I'll mention before we move on to unpopular opinions... When you're doing concurrent work - and one thing I wanted to bring to your awareness, Duarte, when you mentioned it... Go is all about concurrency. You can enable your code to run in parallel. But concurrency and parallelism are not the same thing. You can have concurrency on a single CPU, for example. But to enable parallelism, having different things, multiple things happening at the same time, you're gonna need multiple cores for that, and that's where the parallel comes in. Go allows you to write code that can be made parallel, but out of the box it's all about concurrency.

The other thing \[unintelligible 00:59:50.02\] concurrency is that you have to know which types are thread-safe. Maps, for example, are not thread-safe. So whether you serialize access to those via a channel, or whether you use a mutex, like Ian's saying, you're gonna want to protect that shared resource. Same thing for slices, they're not thread-safe. Or counters, and things of that nature. If you need to increment a count, and maybe you want to increment a count from within a goroutine, you don't want to use the regular, basic integer types, for example. You're gonna want to use an atomic version of that instead. Or, again, use some lock around whatever the resource you're trying to access. So that's the other thing I'll just throw in there... Whenever you have concurrency or multi-threading in your programs, you want to protect shared resources.

**Ian Lopshire:** I always forget about the atomic packages. I need to remember those more.

**Johnny Boursiquot:** Yeah.

**Duarte Carmo:** I think I need to refactor this project... \[laughter\] You're like "You shouldn't really add channels. That's just overhead." And I'm here, looking \[unintelligible 01:00:51.06\]

**Johnny Boursiquot:** Hey, you know, we've all been there. I think we all --

**Duarte Carmo:** It works great, guys. Let me tell you. It hasn't gone down yet.

**Johnny Boursiquot:** \[laughs\] Trust me, I did the same thing. I was one of those people like "Oh, channels everywhere" when I first came to Go. I was like "Yeah, this is amazing." And then you realize "Oh, man, I'm totally overdoing it, and shooting myself in the foot."

**Duarte Carmo:** Okay, so it was an honest question.

**Johnny Boursiquot:** Yeah, you're good. You're good.

**Duarte Carmo:** Yeah, you guys normally have one single way of doing things. That's why I thought...

**Johnny Boursiquot:** Yeah, we like to have patterns, those idioms. Yeah, indeed, indeed. Alright. Well, let's switch it up to Unpopular Opinions, shall we?

**Jingle**: \[01:01:34.18\]

**Johnny Boursiquot:** Duarte, I know you came with one in the holster. Lay it on us.

**Duarte Carmo:** Yeah. I don't know if it's unpopular, but for me the opinion is that there's no such thing as "I don't have time for X." Whatever X is. And this I think is unpopular, because I hear it from people all the time, and I also hear it sometimes from myself, when I'm like "I want to do whatever", and I say "Oh, but I don't have time to do X, or do Y." For example, I run maybe like every day, like, I don't know, 80 kilometers, or 70 kilometers sometimes a week, which is like 60 miles or something like that... And a lot of people say "Oh, I don't have time for that. I have kids, I have other responsibilities." But I also always had the mentality that if you want to do something bad enough, you get time for it. And I know that a lot of people are going to be like "Yeah, but you don't have my life, and look at all the things I have to do, but you don't have to do." Sure. But I think that at a certain point if you prioritize it enough, you can actually do it, and get time to it. You make time for it. You don't have it, you make it.

**Johnny Boursiquot:** Yeah, I don't disagree. I think most of the time it's a matter of prioritization. And the other nuance I'll add to that is if after you've done prioritization, which is the first step - if after you prioritize, you still don't have enough time to get to everything you want to get to, that's a signal that you have too many things on your plate, and that you need to give up some things. You may have a desire to do all the things, but there's still 24 hours in the day. Ideally, you still need to sleep eight of those, and you still have to go to work, like most of us, eight plus hours a day... Whatever's left, if you don't have enough time to get to it, even after you having done your prioritization, if you still can't get to everything, that just means you have too much on your plate. And I say that as sort of living proof in my household of that particular problem. At the end of the day, I'm like "Man, there's so much I'd like to get to." And I go to bed sort of kicking myself, "Man, I couldn't get to this man. Man, I couldn't get to that." This is sort of the universe telling me that "Hey, you just simply have too many things on your plate." Because I'm one of the people who tracks my time. My calendar literally has a block for every -- I can tell you four weeks ago what I was doing at this hour, because it's on my calendar. I track my time to that degree. I know, I'm a little bit anal about it. But I want to know that at the end of the day I maximized my time. Because time is the one thing I can't make more of.

But at the end of the day, I'm going to bed thinking "Oh, man, I couldn't get to this. I couldn't get to that." And if I do that enough times, I'm defeating my own self. I'm beating myself up, because I couldn't get to everything. That just means that I need to give up some things. I just really don't have the cycles in my day for it. So...

**Duarte Carmo:** Yeah, for me that's a great answer. I think I'm also a little bit OCD in the way I do things as well, Johnny... So I could tell you what items I got done in like two and a half weeks from -- like last year. I could tell you.

\[01:05:00.24\] But yeah, I think that's the point that you said, is that it's a prioritization exercise. And you also need to be able to drop things. But if you don't have time, it's because you're not prioritizing the right things, but there's still limits to the things that you can actually do. But don't you catch yourself sometimes saying "Oh, I don't have time to do that"?

**Johnny Boursiquot:** Of course. Of course. Yeah, of course. It's a natural human thing to do, I think. I'm like "Man, I don't have time to do anything."

**Ian Lopshire:** When I find myself thinking that, I try to change it to "I'm not motivated to do X."

**Duarte Carmo:** Exactly.

**Johnny Boursiquot:** That's interesting. Yeah. Good stuff. Well, I don't have an unpop. Ian, I'm not sure if you do...

**Ian Lopshire:** Maybe I go back to the channels vs. mutexes. I think in almost every case mutex is probably the right tool for the job. Not every case. I don't know, maybe skip.

**Johnny Boursiquot:** You're going back on it. Okay. Well, maybe this will be my unpop - I think you should be very careful with your use of mutex, especially if you have a high throughput situation, because mutex will have a tendency to slow things down. Because once you lock a particular resource, everything is paused. Nothing else can access it other than the goroutine for which you open up the lock. So if you have a high throughput situation, whatever amount of time a particular goroutine spends updating a particular shared value, nothing else can work. So there may be more efficient ways of doing what you're trying to do without a mutex. Again, in some simple cases, mutex is a go to, but you have to definitely consider the cost of using the mutex... Because the world stops until the goroutine is done for that particular shared resource.

**Ian Lopshire:** I'm just trying to wrack my brain for one of those high throughput situations where even like a read/write mutex wouldn't solve a lot of that... I don't know.

**Johnny Boursiquot:** Yeah, again, it's one of those where you have to look at your use case, and make the appropriate decision.

**Duarte Carmo:** Okay, so it's even wait groups, channels, and you, Ian, tend not to go with channels, you tend to go with mutexes?

**Ian Lopshire:** I mean, when channels are the right thing, I'll use a channel. But I just don't think that's very often.

**Duarte Carmo:** Okay, and can you just put some words into what -- because I'm realizing now that in Go you have five different ways of doing concurrency. I thought we had a simple way of doing everything. But what is the -- can you tell me the...

**Ian Lopshire:** I think Johnny said it really well earlier, when it's about like communicating.

**Duarte Carmo:** Okay, okay. Exchanging data between some of these processes, okay.

**Ian Lopshire:** I don't know... It's also like one of those things where you just know it when you see it. Like, I don't know, I can't put words to --

**Johnny Boursiquot:** Well, are you gonna tell a new gopher "You'll just know it when you see it..."? \[laughter\]

**Duarte Carmo:** I haven't converted yet, but sure...

**Johnny Boursiquot:** Yeah, all you have to do, Duarte, is to spend the next couple of years hacking away at Go, and then you'll know it when you see it... Says Ian. \[laughs\]

**Duarte Carmo:** Okay, thanks, Ian...

**Ian Lopshire:** I know it's not helpful...

**Duarte Carmo:** So much guidance...

**Johnny Boursiquot:** Awesome. Thanks, Duarte, for coming on the show, and definitely for suggesting the episode. Dear listener, if you too want to come on Go Time and talk Go, whether you have a bone to pick with the language and you want some ears to hear you, or you have some questions along the lines of Duarte's set of questions today, definitely reach out to us and we'd love to have you.

**Duarte Carmo:** Thanks for having me, guys.

**Johnny Boursiquot:** Alright, let's wrap this up.
