**Johnny Boursiquot:** Hello, listener. Welcome to another episode of Go Time. \[laughter\] Do you guys like the dramatic pauses in between?

**Ian Lopshire:** Yeah. This is now a True Crime podcast.

**Johnny Boursiquot:** A True Crime podcasts, yes. And joining me as suspects - or co-hosts; I mean, depending on how you look at it - is Ian Lopshire. Ian, how are you?

**Ian Lopshire:** I'm doing great.

**Johnny Boursiquot:** Good. Good to hear it. And also, returning after a hiatus - well, I guess not so much of a hiatus now, because you did do the live episode from GopherCon EU, right, Mat? Mat Ryer, welcome.

**Mat Ryer:** True. Hello. Yeah, I did do that. That was fun.

**Johnny Boursiquot:** That was fun.

**Mat Ryer:** You were there, Johnny?

**Johnny Boursiquot:** Yeah, yeah, I was there. I was there...

**Mat Ryer:** You were on it.

**Johnny Boursiquot:** ...having my delicious alternative to brushing my teeth. Good ol' coffee.

**Mat Ryer:** Delicious.

**Johnny Boursiquot:** Deliciousness. Deliciousness.

**Mat Ryer:** No, but a lot of people -- I said that joke, I said "Coffee is a delicious alternative to brushing your teeth." I've had messages, people telling me "No, you do still need to brush your teeth." So please... Yeah, just pass that on. If anyone asks, you do still need to brush your teeth.

**Johnny Boursiquot:** \[laughs\] Those things are not mutually exclusive.

**Mat Ryer:** Yeah. And also, everyone, you can stop messaging me about that now, if you like. That's fine. Also fine.

**Johnny Boursiquot:** Oh, man... That's funny. That's funny. Yeah, you shouldn't have made that joke. Now people are gonna chase you down. So what is not a joke is this article you keep writing and rewriting and updating and refreshing every couple of years about writing HTTP services. Now in its 13th year, in - what was it, second or third refresh? Is that it?

**Mat Ryer:** Yeah, I think it's the second refresh. There was an early version, and then I did a refresh of that. And it just basically -- it's the same thing, I just updated the title with the different number of years that have passed... \[laughter\] It's the gift that keeps on giving.

**Ian Lopshire:** When was the first one? The first one I encountered was eight years. It was the one before that?

**Mat Ryer:** I think that was the first. There may have been the seven year's, and then eight year's was the one that was there for a long time... Because it didn't really change much. And then I felt like enough it evolved, that it was time to do a refresh, and... Yeah, give it a new life, I suppose, a bit.

**Johnny Boursiquot:** So the obviously the link to the new one, which actually contains the links to the old one, will be in the show notes. But yeah, Ian and I were thinking we'd kind of go through and call out the interesting bits. So what were the sort of the major changes with this refresh? What was so different? Why did you change the approach?

**Mat Ryer:** One thing that changed was preferring HTTP -- I used to prefer http.HandlerFunc. So I would use that type everywhere. And then at the points at which you needed to interface with HTTP handler, you just, you can, because it does implement that. But then if you're taking -- so sometimes it made bits easier to write, but it actually made it... Whenever you have to interact with third party languages or third party libraries, you'd then have to do extra gubbins in places, and it kind of looked quite ugly. So I think I just decided I'll just go to HTTP handler, because that's a simple type.

Tom Wilkie, who's the CTO at Grafana, also said that same thing to me a long time ago. Actually, I met him in an airport. We were both on our way to a conference in Lviv, actually, in Ukraine... And we'd missed a connection, and then there was just like a person talking behind me in the queue about Go. And I can't resist; I can't just let that happen, if they say something I don't agree with... So I spun around, and then that's where I met him. That's actually where I met him, and that led to -- now I work at Grafana Labs. So I don't know how many people y'all meeting in airports, but... Get out -- get to your local airport, I say. You never know what's gonna happen.

**Johnny Boursiquot:** Find yourself a job. \[laughter\] Go to your local airport to find a job, you know?

**Mat Ryer:** Exactly.

**Johnny Boursiquot:** That's how I'm connecting those dots.

**Mat Ryer:** You do have to miss a connection, I think.

**Johnny Boursiquot:** Right, right. And do you think you have to be headed to Ukraine for that to also align things for you?

**Mat Ryer:** Good question. I've only done it that way. So that works for me. I suggest you do exactly the same. Don't change anything.

**Ian Lopshire:** Might not be worth it right now.

**Mat Ryer:** Yeah. True.

**Johnny Boursiquot:** Right. Indeed. So away from HandlerFunc, and embracing the good ol' HTTP handler interface. And obviously, you added some additional opinions to the testing stuff... And we'll get to that. But yeah, I was looking through the examples that you had on the blog post... This new server constructor and all these arguments... So if we deviate slightly from the HTTP services sort of conversation and talk about sort of how many arguments should function signatures have and support... The reason I'm calling this out is because I've been a part of many language communities where there's an optimal number that you should have, and if you go beyond, then you get a side eye from your fellow developer, kind of thing.

**Mat Ryer:** \[06:25\] Right, right. So yeah, this comes from -- I used to have a server struct that would have all the dependencies in there, and then the methods would hang off that server type. And that meant you could just put dependencies like the logger, or a database connection thing - you could just put those into the struct, and then they're available to all of your handlers. So that was kind of a nice convenience. But actually, what I've found over time was when you come to actually write a test for it, one of the nice things about a list of arguments is it's very clear what this thing needs. And even if in your test you know it's not going to be used, you can explicitly mark that with a nil; you pass a nil in, usually, or something.

So when I would do that - and sometimes it would still fail, and it would fail because it was using a dependency that I didn't remember, because it was in the server struct, and there was nothing to prompt me to do that... So I had to live through the panic. And that was all, really. It's not the end of the world. A lot of this whole blog post is kind of personal tastes and things that work for me. But this led to then you have a server constructor that takes in loads of arguments sometimes, because all your dependencies are going in there. Your logger, some config, you might have some database stores, you might have loads of various services... If you're sending email, you might have an email sender service kind of thing, or a comment service. And depending on how you structure it, you can end up with these long argument lists.

So the question is, do you like long argument lists? Is there a limit where you think "This is silly. I'm gonna put it in a struct"? Do you just always go for a struct, wherever you can, immediately, and just be done with it?

**Johnny Boursiquot:** I've done it a few different ways. And I think I will sort of tilt one way or the other depending on sort of how explicit I want to be or not be with things that can be nil, or the things that have defaults sort of within a struct. So my personal preference in this particular case would not be to have a new server with all these things I can pass in, and sort of passing in nil when I don't need something... In this particular case I might perhaps choose the sort of functional options pattern, basically... And for those who are not familiar, typically you'll invoke your pseudo-constructor, if you will, and then you can have some with options. With a router, with a muxer, with a store, with a whatever it is. And then pretty much internally whatever the defaults are for the things you don't specify, they can kick in sort of automatically, and you're just specifying a width sort of option for the things that you do want to override. So I tend to prefer that approach, as opposed to having long argument lists where I'm sending nil for the things I don't need.

**Mat Ryer:** Yeah. So that is nice, because in that world you don't mention the things that you're not concerned with. So you have good sensible defaults, and then use those options to set the specifics that you care about. Yeah, I don't mind that at all either.

I've heard a lot of people push back against these sorts of -- you know, there's a bit of a discovery issue with it. You can't easily just see a list of all the possible options that you can set or pass in. A struct at least gives you that. But yeah, it's kind of trade-offs and taste, I think; I feel like. But I think a lot of this blog post might come down to that, and I might be able to convince you with some good arguments. But if you've got a good reason to not do this -- I think I do say this in the blog. If you've got a good reason not to do it, then you've got a good reason. That's it; that's what you should do.

\[10:13\] Because people sometimes will stick very rigidly to what I've written, and when they're then battling something and it doesn't quite fit, they'll sometimes reach out, and there's just a much easier -- usually there's just a much simpler way they could have done this, and they were kind of bending over backwards to follow the advice. But that's just all part of, I think, learning and using these sorts of blog posts properly, which is not really to take them literally, but to get ideas from them and apply them in your case, where it makes sense.

**Ian Lopshire:** With this long list, have you -- what's like the max you've encountered, and were you okay with it? If we ran this way -- you know, we run like a pretty big monolith, and there would be 50 things in this... That's just not doable.

**Mat Ryer:** 50 I've not seen. I think, honestly, 15 to 20, and I was okay with it. But I should say, I tend to format it differently as well. So it's not like continue -- `go fmt` also doesn't mind this, but you can basically put each argument on a new line. So it's just like a list. A bit like when you do a variable list, or even a struct, when you're declaring lots of things. You kind of have an indented list of items. So in that way, it's not that different from using a struct. It's just that you are forced to provide -- you're forced at that point to provide an answer.

And you know when you come to changing things, and you're getting the compiler giving you warnings, errors - it won't build because this signature is wrong - obviously that's very brutal, but that is really how you find all the places. And as soon as you've fixed all that, everything kind of works... Assuming you've got all your dependencies of different types, so you can't end up with mixing the order up, or something, which would be an absolute nightmare. Assuming not. Assuming that \[unintelligible 00:12:11.06\] that is really nice, you get that help.

So if you tend to work in an environment where things iterate a lot, and change a lot... So I kind of optimize for changing things, and then anything that helps me guard against mistakes... It's why I'm so big on testing, honestly. That becomes more important. I sort of optimize for that. Not always, but mostly. Are you still doing the detective thing? Is that still happening, Johnny? \[unintelligible 00:12:39.10\] exhibit A that was, and now...

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** And then Ian, really, you should be bad cop.

**Johnny Boursiquot:** Ian has been --

**Ian Lopshire:** I don't know if I could be bad cop on this. I don't know.

**Johnny Boursiquot:** You can.

**Ian Lopshire:** I tend to agree with most of what you have in these articles, so...

**Mat Ryer:** Alright, you be good cop then. Johnny...

**Johnny Boursiquot:** Yeah, I'll deliberately go out of my way to be nitpicky, and be like "Why did you use the variable a here?" \[laughter\]

**Mat Ryer:** Yeah. It's good cop and pedantic cop.

**Johnny Boursiquot:** Exactly.

**Mat Ryer:** It's the new TV show. Coming Soon.

**Johnny Boursiquot:** Coming soon.

**Mat Ryer:** "Changelog TV... Two detectives..."

**Johnny Boursiquot:** "Two detectives... One protein bar..." \[laughter\] Before the show we were talking about Ian's protein intake... Which I respect, because you know, you've gotta get your protein. I think Ian's trying to pack on some muscle, so he's eating his proteins regularly.

**Ian Lopshire:** Gotta get those gains.

**Johnny Boursiquot:** He can't leave those gains.

**Mat Ryer:** Do you have a protein bar for breakfast do though, Ian?

**Ian Lopshire:** Yeah. Every day.

**Johnny Boursiquot:** Every day.

**Mat Ryer:** It's like living on the International Space Station. You get up and float to your fridge, and you out your protein bar...

**Johnny Boursiquot:** Your packet...

**Ian Lopshire:** I also have freeze dried food almost every day for lunch, so it really is like I'm living in the space station.

**Mat Ryer:** Wow, you're living in a space dream.

**Johnny Boursiquot:** \[14:08\] Wow. Blink twice if you've been kidnapped. \[laughter\]

**Mat Ryer:** I don't know if people are getting -- now he's gotta try not to blink, so you're not worried, Johnny. Now his eyes are bleeding. His eyes are crying. \[laughter\]

**Johnny Boursiquot:** Yeah, I don't know why you'd deliberately put yourself through such an eating condition, but... Hey, I see.

**Ian Lopshire:** It is cheap and easy.

**Mat Ryer:** I like the easy.

**Ian Lopshire:** It's better than to not eat at all. Otherwise I'll just forget about lunch.

**Mat Ryer:** I thought Johnny thought that people keep being kidnapped and sent to the International Space Station...

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** It's like, no one wants to go, so now we're just kidnapping people.

**Johnny Boursiquot:** Yeah, we're just sending them up there.

**Mat Ryer:** Because no one can hear you scream, can you? No one can hear you scream up there.

**Johnny Boursiquot:** Yeah, out in space... Yeah, I hear voice doesn't carry. Anyways.

**Mat Ryer:** Yeah. It's a vacuum.

**Johnny Boursiquot:** Speaking of carry. So you have a route.go, which - I'm looking at it, and you have this "Add routes" function where you're passing in your muxer, and your logger, and any other sort of things you may need... And that's where you sort of do all the mapping for the routes.

**Mat Ryer:** Yes.

**Johnny Boursiquot:** Which does make sense. Yeah.

**Mat Ryer:** Well, there's something nice about having one place that maps your entire API surface. In Go, we tend to group things up by responsibility. And I used to do that where I would have the routes for say the comments thing were in the comment service. It did its own routing. You'd pass the muxer in or whatever, and it would wire itself up. That felt very satisfying. But usually, anytime there's an issue or an incident or a bug report, it usually comes with a URL, if it's an API, especially. These kinds of APIs. So really, I've found myself actually starting with the URL. That's how I would -- you know, if I jumped into a project I haven't been in for a while, that's how I would go and figure out where to look. So I started to put all the routes into one place...

I also got this -- there's a few other frameworks that just do this, just naturally, the way they work... And it is just nice that you can see your entire API surface. It also helps you kind of -- you're not looking at the API surface in fragments, you're looking at the whole thing as one. So you get to think about "How do these things play together?" Sometimes you might say "Comments here", and it's not pluralized elsewhere, or it's called messages in another route, or something like this... And that kind of toil when you're trying to consume API is kind of horrible. So partly, this is putting yourself in the place of where the user is going to be, which is they're going to see this API surface as one of the first things they might see.

**Ian Lopshire:** This is something we do, and I think it is the single greatest thing you can do for code navigation. Because it's basically an index of everything. So even when I don't have a bug report, and I'm looking for a certain functionality, I ended up in this routes file, and I can immediately find what I'm looking for. See, I can't be the bad cop, because I love this.

**Mat Ryer:** No, that's a very good cop. A great cop. That's really a great cop for me. That makes me feel like I'm gonna get away with it.

**Johnny Boursiquot:** You might not, you might not...

**Ian Lopshire:** And we have a large number of routes, right? We have a pretty big API surface. And even -- I'm probably up in the hundreds of routes at this point... And even at that scale of routes, in our big monolith, it's still great. It doesn't get confusing. it's easy to break it into blocks of "Hey, this is the service, this is this..." I would definitely recommend to take this advice.

**Mat Ryer:** Good. Ian, do you also do your middleware bits here as well? Or is that elsewhere?

**Ian Lopshire:** We do that in this, yeah.

**Mat Ryer:** \[17:48\] Yeah. Because that's also quite handy, for a similar reason... Immediately being able to see the dependencies and the trail of that. You know, there are frameworks that do dependency injection and things, where they've given you some kind of configuration, or you can ask for a particular type of a thing, and whatever... And honestly, if you're trying to work in that way -- you really don't get as much help back from the compiler. Whereas in this, it's just Go code; you're just calling functions. And you get so much extra free stuff from the tool chain, from everything, just because of that, because it's such a common thing to do.

So yeah, I like to call all the middleware functions in there... Sometimes it gets a bit -- like, there's bits of code you have in there as well, that are doing something. Also quite nice to just have that spelled out explicitly, rather than sort of try and hide it somewhere if it's relevant.

So yeah, Johnny, do you do this kind of thing? How do you do routes?

**Johnny Boursiquot:** I do like to group them together, and for all the reasons the two of you have mentioned. One thing that I've started thinking about is -- I'm a big fan of using the standard library for most things... And even when I had to sort of jump through a couple of hoops here and there, in small applications, to do my own URL parsing, to extract variables or values or something like that, I'd opt for using the standard library... Even if I had to jump through those hoops, as opposed to using a framework like the popular ones, a Cheese, or a Gin, or whatever that is popular these days.

Obviously, with the introduction of sort of the more robust routing library enhancements to the HTTP package from - I think 1.22? Or was it 1.21? Now I'm pretty happy about that, I'm pretty stoked. I can still stick to the standard library without having to bring in those additional frameworks.

But those additional frameworks did sort of do the right thing, so to speak, by allowing you to sort of define all your routes in one place. You set up all your middleware in one place. They sort of encourage you in that direction, because it does make sense to have all the routing and all the middleware logic grouped together like this. It does make sense.

**Ian Lopshire:** I just pulled up our routes file, and it is 526 lines long. It's still perfectly organized and easy to use, so...

**Johnny Boursiquot:** You sound so proud. \[laughs\]

**Mat Ryer:** Yeah... I get it. It's good.

**Ian Lopshire:** I don't want to say proud. I mean, that's a lot of API service. I would like not to have that large of an API surface. But you know, things gather cruft over time.

**Mat Ryer:** Things happen.

**Johnny Boursiquot:** Yes. And you wanted the monolith. You love a monolith, don't you, Ian?

**Ian Lopshire:** I do love a monolith.

**Johnny Boursiquot:** Yup.

**Mat Ryer:** Yup. I do. Actually, Johnny, the changes you mentioned in the new HTTP routing stuff - which essentially allows you to put path variables in and then you can pull those variables out, which is really what everyone was using Gorilla mux and the others for. Anyway... To be honest, when they got into like subroutes and things like this, you can create like a route, and then create a subroute... It's too powerful, too abstract; we don't really need that. What we need is a list of what looked like URL paths, because that's how we think about things. But I think those changes will make me go back, because I used to use Gorilla mux, just by default. I'll go back to just standard library now, because of that.

**Johnny Boursiquot:** Yeah, I think a lot of folks will. But writing your own middleware, you don't need some other library to help you do that. It's pretty straightforward to do that with a good old handler interface, and everything else. So there's really no real reason, at least for me, for the kind of applications I build, there's really no reason to depend on a framework at this point. I mean, you had additional things, like session management, or some sort of abstraction for cookie setting, or whatever, these things. And again, nice; I'm not sort of bashing any of those frameworks. They did provide sort of a nice on-ramp, I'd say, if you were used to other frameworks from other languages... But I don't know, to me it's always been sort of "Keep it simple. Don't bring dependencies you don't need."

**Mat Ryer:** \[21:58\] Yes. But the cookie was a good call-out, because I think the standard library way you deal with cookies was - I've found that really \[unintelligible 00:22:05.07\]

**Johnny Boursiquot:** It's a little rough... \[laughs\]

**Mat Ryer:** Yeah. I mean, it's just very low level, so you learn a lot about how cookies really work, and what they actually are, so what you're accepting all the time when you go on EU websites... But you -- you know, I got stuck in the advanced settings of one of them the other day. I forget to close it. I just left the website. Just like that. \[laughter\] I'd literally rather be hacked. \[unintelligible 00:22:30.01\] typically there to protect us and stop us being tracked. You know what I mean? But it's not having that effect if I'm tweeting where I am, and how angry I am. You know what I mean? That's more information than they would have got.

**Ian Lopshire:** Is there not like a browser-level API that you could build, that could say "I accept all, I decline all"?

**Mat Ryer:** No, they literally -- what they thought was going to happen is they're going to stop tracking people now. And it's like "Oh, you have to have this annoying thing that ruins your experience of your website." And all the businesses are like "Yeah, well have an awful experience, please." So yeah, it didn't have that effect at all. They're still tracking everyone. And you have to answer every time. If you reject it, if you say no, then it's fair enough that it asks you again, I suppose, because you're told that you're not allowed to --

**Johnny Boursiquot:** Right. Because you came back. \[laughter\]

**Mat Ryer:** You came back. But yeah, just t a browser setting. Exactly. Oh, my God... Mind you, they also then gave us USBC on all iPhones, and all phones. And they gave that to the world.

**Johnny Boursiquot:** Can't be all bad, right?

**Mat Ryer:** Yeah. It's not all bad, is it?

**Johnny Boursiquot:** Yeah...

**Ian Lopshire:** Now if I could just figure out which USBC cable works for what device... That would be great.

**Mat Ryer:** Oh, are you joking? They don't all work for every device?

**Ian Lopshire:** No, definitely not. \[laughter\]

**Mat Ryer:** How does that happen then?

**Ian Lopshire:** Is it USBC? Is it Thunderbolt? Can this one charge, at what watts?

**Johnny Boursiquot:** Right, exactly. I think I read something, like a link off of Twitter or something, or X, that sort of talked about all the different variations in the protocol. And it was maddening. I'm like "How is a general consumer supposed to know all of this?" It was maddening.

**Ian Lopshire:** This microphone I'm using is USBC. And if I plug it in with a cheap cable, it sounds like this...

**Johnny Boursiquot:** There's not enough throughput.

**Ian Lopshire:** Yeah, exactly.

**Mat Ryer:** That's weird. The tube's not big enough for your voice to go in it?

**Ian Lopshire:** I mean, I think just a regular USB should have worked for this, so I have no idea...

**Johnny Boursiquot:** No, it's the protein you're eating, Ian.

**Ian Lopshire:** It's coming through the cable.

**Johnny Boursiquot:** \[laughs\] It's clogging up the pipes.

**Mat Ryer:** It's made your voice too beefy. \[laughter\] Johnny, you can't really troll him about this, because I saw you in real life in Berlin, for GopherCon EU, and... You're stacked, mate.

**Ian Lopshire:** Definitely your protein...

**Johnny Boursiquot:** I mean, I didn't say Ian was the only one eating his proteins. I mean, at no point did I say that. I eat my proteins, too. It's alright, Ian.

**Mat Ryer:** Is that all you have to do, is just eat protein? Because I can do that.

**Johnny Boursiquot:** just eat protein. That's all you've gotta do.

**Mat Ryer:** I'm in.

**Ian Lopshire:** Eat protein and sit on the couch.

**Johnny Boursiquot:** Done. And record a show every once in a while.

**Mat Ryer:** Yeah. And you do that dance? Isn't there like a famous dance that you do, the protein shake? I've heard of that, but I don't know...

**Ian Lopshire:** Is it like the bartender?

**Mat Ryer:** Yeah, it's gotta be.

**Johnny Boursiquot:** I didn't know that. Yeah. Ian, you just demonstrated the protein shake. The bartender. Yeah, that's amazing. That's amazing.

**Ian Lopshire:** I'm gonna use that next time I go dancing. Which will be never, but...

**Johnny Boursiquot:** \[laughs\]

**Ian Lopshire:** Anyways...

**Johnny Boursiquot:** Let's talk about this run method you really like to have in your code, Mat...

**Mat Ryer:** I love it.

**Johnny Boursiquot:** \[25:57\] So your main - it'ss obviously your main function, but you don't have much else in there other than this call to run. And this run takes a context, and it takes an IO writer, and some arguments, a list of arguments. What are you thinking -- you used to have these things inside of main, like proper. What made you split them?

**Mat Ryer:** Yes. So the main motivation here comes from being able to return an error... Because really, the pattern of -- there's this idea of self-similarity all over. The code is the same everywhere. In some ways, it's easier to deal with. Sometimes in main you can't return an error, so your error handling code ends up kind of being three or four lines, actually, if you've got instrumentation in there as well, and wrapping, and other things. So if you're in main doing lots of -- you know, normally you are setting up connecting to a database, checking some other services available, doing whatever you're doing... You can error. And so I ended up having in main -- I just had the same error handling code very similar, repeated a lot. And people complain about having to write if err != nil. That really makes me a bit angry still. It's one of the top things that makes everyone angry. It's like "I don't want to have to check if that error is nil, for some reason."

**Johnny Boursiquot:** You just want to ignore it?

**Mat Ryer:** I don't know what I want. I think it's the biggest complaint. They're like "Can you just make this automatic? Because I'm doing it all the time", which I understand. And that was kind of my thing. I had four or five lines of this stuff... Not including the braces. If you add the braces on, it's more. One more.

**Johnny Boursiquot:** Yeah, yeah.

**Mat Ryer:** So call-out to a run function... And then what I've found - oh, actually, in test code I can just call that run function, and as long as I don't use anything from the environment that's not passed in as an argument, actually that is a self-contained little... That's like the program running in a self-contained way. And then, now I was cooking with gas, because I could actually write tests that run parallel, but were essentially running the program multiple times without actually doing that. And then I kind of got sold on that.

The point is, you take in the argument, you take in an IO writer if you're going to write to STDOUT; you take in the args... Even if you're doing flag pausing and stuff, you do all that inside run, so that in your test code you can call your program with different flags just by passing in different arguments. You get, of course, type safety, the compiler will check to make sure you're passing things... So when you add a dependency, say "Well, we're going to read from STDIN now", or "We're going to write to STDERR for some particular case", you update the signature, and then you're faced with a load of errors... Which is a good thing; it tells you all the places you need to now go and add something in, whether you're going to null it out or provide a thing in it.

And if you've got -- like, the bytes buffer is a really cool type, because... It's just like an in-memory buffer, but it supports IO reader and IO writer. So you can pass a buffer in as like the STDOUT, and then in your test code you can assert, you can get the string of what was written and assert that certain things are there. So you can write test code that is even checking things in the environment to make sure that that's as expected. And you could imagine, in some cases that's not important. If it's a web server, what you print out usually is just for humans to read. But if you've got a program that is -- if it's parsing JSON and writing lines of JSON out or something like that, this makes a lot of sense.

**Ian Lopshire:** Yeah, I was kind of against this when I first read it. I mean, we do all of our kind of configuration in the main file, right? So we end up with these very large mains that kind of, I don't know, string everything together that we need. But what changed my mind was this git environment function that you pass into run... And I was like "Oh, that would make a lot of my testing so much nicer." The idea of passing what will be used for configuration into this run, I really like.

**Mat Ryer:** \[30:07\] Yeah, that's a good point. So Ian's talking about -- one of the types... So it may be that there's a concrete type you're passing in, like the os.Getenv is a function. But you can have a function type, since we have structural typing, duck typing in Go, you can just decide your own type. So make a new type, and that one's going to fit it. That allows you to then mock it, or provide a different function.

So if you are reading environment variables through os.Getenv, you instead use the passed in Getenv function, and in test code you can just have a switch in there to say "Oh, if they're asking for this, return this value. If they're asking for this one--" Or if it's not one of these, we could even error there. You shouldn't be asking for something from the environment that's not expected.

So yeah, I like that one as well. They did add something into testing code for this... There is like t.setenv.

**Johnny Boursiquot:** Yeah, I've been using that -- that's been in there forever. I've been using that forever.

**Mat Ryer:** Yes, but you can't run them in parallel. I think it is actually setting environment... So you don't get the parallel thing. Whereas with this trick, you can run them in parallel, because it's just functions, it's not even actually dealing with the environment.

**Ian Lopshire:** We use this trick the same with time.now a lot, where you can just have a function that returns a specific date, so you're not depending on the actual time.

**Mat Ryer:** Yeah. So you can make your tests deterministic. And sometimes that's really important. Roberto Klapis -- because I did the same thing with random numbers as well. If you've got a random number generator.

**Johnny Boursiquot:** Okay, so I do like that getenv function. You can sort of determine, depending on the context, how you want that to be handled. I do like that. My current configuration sort of approach that I've kind of used consistently across projects is you just have a config sort of struct, with some struct tags on there, that specify what is the expected name from the environment... Now I always assume that I'm going to be fetching things from the environment. Like os.Getenv style. And then I use -- there's at least one or two different popular libraries; I think one I use is called envdecode, or something. But if anybody just searches for envdecode on pkg.go.dev, they'll find at least one package that does this. But basically, I just initialize my onfig struct, and based on the struct tags, all the appropriate values from the environment are sort of read in. So I get a config struct that is fully populated. And you can have validation checks, and you can have defaults, and you can have -- basically, you can have an error out if it can't find the environment variable and whatnot.

So basically, I use that if I need to pass that to my run function, in this case. That would be the approach I take, as opposed to having a specific Getenv function. And the same thing for my tests. I'm initializing sort of a config struct specific to my tests. If it doesn't need to be specific to a particular test, I put it in test main; if it needs to be overwritten on a specific test, I initialize one there.

So I'm able to control a lot of things about my environment; not just one environment variable, but like the entire configuration set for that particular run of whatever I'm testing.

**Mat Ryer:** Yeah. So a similar kind of idea, really. And yeah, passing things in, making it deterministic... As I was saying, Roberto Klapis told me... Because I used to it with rand, random numbers. Same thing. So you'd just have a function that's going to return a random number. In production you use the real crypto random thing; in your test code, you pass a new function in and you can just return the deterministic numbers.

And Roberto made the point, "Well, if in production your code is dealing with random stuff, maybe in your test code it should be as well." And then I started experimenting with using actual real random numbers... Which you can sometimes do. And it depends on the case, again, as usual.

**Johnny Boursiquot:** \[34:07\] So, graceful shutdown... I remember, maybe this is an artifact of having seen the evolution of these things throughout the years... But graceful shutdown used to be when finally the HTTP library allowed for you to have graceful shutdown. That wasn't always the case from day one, right? When it finally allowed for that, that was a pretty big deal back in the day.

**Mat Ryer:** Yeah, I remember that too, because there were -- you'd have to sort of do it yourself. There were a couple of packages as well.

**Johnny Boursiquot:** Right.

**Mat Ryer:** Yeah. A friend of mine, Tyler, wrote one of those packages that was popular. And then yeah, they added it. So we mentioned earlier in that run function you pass a context in. Normally in main - and this isn't really... I don't know if this is covered in the blog post, but I usually use the notify signal, which is actually you can get a context to cancel when a certain interrupt signal has come in. So in main I'll usually do that, and then that context then is cancelable by Ctrl+C, or whatever, which is what you want. That doesn't end the program now, because you've trapped the signal. This is in the blog post, by the way. It's in the \[unintelligible 00:35:15.00\] section.

So you essentially can cancel that context in your test code. And normally, I would. I would create a context with a cancel, defer the cancel, so I know that when the test code exits, it cancels that context, and everything can get shut down.

So if you spin up goroutines and you do extra things, this is like a main context that runs through your whole program. It's not a per request context, which is what context is really meant for. So some people saw it as an anti-pattern in the beginning. It's not a per request thing, but it's kind of -- if you treat the program run like a request, in a way, it is. If you treat it -- like, run a program and get a response from it, then this kind of is that... In a way. It works anyway. So you pass this context all the way through; if you're spinning up goroutines, check that main context all the time, so you can cancel it... And then you make also new contexts off this one, so that if this gets cancelled, they'll cascade down and they'll all get cancelled. And that's really a nice way to just kind of gracefully shut down really anything, instead of programmatically doing it using the context.

**Johnny Boursiquot:** Right. Yeah, I remember the having to write a lot of signal dropping code, and everything else... But I think you've taken a slightly different approach by using a WaitGroup for this. Let me see, the part I'm thinking about...

**Mat Ryer:** Oh, it's in the New Server bit a the top.

**Johnny Boursiquot:** Right. So yeah, you initialize HTTP server, you launch a goroutine, with the listen and serve, and then now you have a WaitGroup listening for that context done, before you can shut down things.

**Mat Ryer:** Yeah. This is if we have a proper shutdown method that you call on the server; then you don't just want to cancel the context and then everything's done. You kind of want to wait for the things to be shut down. You don't want to just interrupt things. That's why it's graceful shutdown; you're waiting for things to finish. Including in flight requests. That's the cool thing about this - you've got a request that's come in, you've interrupted... Normally, that would just kill that request, it would crash... I don't know what would happen. Not good things. Now, if you do the interrupt, it'll finish what it was doing with that request; it won't accept new requests, because the context's been cancelled, and I think the HTTP server's smart enough to deal with that... And it'll finish anything in flight. And then you need a way to know that thing's finished. And I think it's the shutdown returns, so that's the signal... But the way to do that in a sort of concurrent way is wrap it in a goroutine and have a -- one way to do it is have a WaitGroup, and then just wait for that one thing to be done, and you know that the server's not running anymore.

\[38:06\] It also lets you pass in a shutdown context with a different timeout. So you can say "I'm gonna give you 10 seconds to basically shut down." And then if that doesn't happen, that context gets cancelled and it'll force the return, and then we say we're done regardless. So you're not going to wait and let it -- imagine a request just hanging forever...

**Johnny Boursiquot:** Assuming that none of your requests that you're still processing at the time of shutdown take more than 10 seconds, you have this sort of maximum amount of time you're willing to wait - would there be a situation where whatever that last request is that's being processed is really important, and maybe it takes 15 seconds? ...where normally it would take 5, but it takes 15, and it's a really important request. Does that just get dropped on the floor then?

**Mat Ryer:** Yeah. I guess you've just made that decision... And it's really how long are you prepared to wait for things to shut down. You'll pay this price, possibly, assuming things are hanging. If it's healthy, everything just shuts down immediately. But if there is an issue, you might well pay that price. And imagine in test code if you were paying that price every time. I don't think you'd be happy with that. But you probably won't... So yeah, it's just how long are you prepared to wait.

There's another thing I did once that worked quite well, which was you'd trap the signal, and that would cancel the context, and then you would have a new one waiting for another signal, and if you get the second signal, then you actually just do an OS exit. So because that's quite nice behavior; sometimes it's almost like a force quit. Yeah, that worked, too. I don't know if I did that with the signal notify or if I did that manually. I can't remember. But it's not in the blog post. It's just a little bit of bonus material you get because you've listened to this...

**Johnny Boursiquot:** Ian, what else is striking you about this? I'm seeing encoding, decoding in one place, which all makes sense to me... Validation - that makes sense to me...

**Mat Ryer:** Again, I think there are frameworks that some people prefer... The validation bit in this is just a nice simple Go interface, and it just implements a method called valid. And in the decoding - and encoding, actually before you encode - you can just check to make sure it's valid, and if there are problems, you can deal with it. So it's nice, again, because it's just Go code... But maybe you've used other things that you prefer. There are a lot of validator libraries I've seen.

**Ian Lopshire:** Yeah. We do something similar with this validator interface, but ours returns an error. And after seeing yours, I'm like, "I kinda like this map string--"

**Johnny Boursiquot:** More than one thing could go wrong?

**Ian Lopshire:** Yeah. I mean, we have like an error type that's literally like multiple errors for multiple fields... And this seems just so much easier.

**Johnny Boursiquot:** But you have a single error struct that has all kinds of different errors possible within it?

**Ian Lopshire:** Yeah, like a multi error type thing, yeah.

**Mat Ryer:** An array of errors.

**Ian Lopshire:** You can say "Hey, this field had--" Basically, it's a map to a string, which is the field name to another error.

**Mat Ryer:** I see. Yeah, I used to do it like that as well, and it was just the dealing with it, just the unpacking it... You just had to know what that error type was. Usually you'd have helper methods... And this really comes from trying to be minimalist, honestly. If I can get away with just providing one interface, that's better than an interface and a couple of helper methods. You know, none of it is the end of the world, it's just to sort of tend towards minimalism... And yeah, I think returning the problems, just a map string string... It's also nice -- it's a sort of user experience thing. It's nice to tell the user which field has gone wrong. In the UI often they can line it up visually, so that the error actually appears next to the field... Things like that, which you can do in other ways, but again, map string string is immediately JSON encodable, where errors again, it's more work there. So...

**Johnny Boursiquot:** \[41:58\] If we needed to handle sort of localization, you just return some sort of keyword that they going to swap for some, - whatever the appropriate language text should, or something.

**Mat Ryer:** Good point. Yeah. I've seen it where it returns English, but then there's a map where the English key is it...

**Johnny Boursiquot:** So the actual statement itself is the key for the lookup for the other?

**Mat Ryer:** Yeah. But then you change something and you get in trouble there.

**Johnny Boursiquot:** And it's broken. \[laughs\]

**Ian Lopshire:** You add a period and it's broken...

**Johnny Boursiquot:** Yeah, exactly.

**Mat Ryer:** But then the test code would --

**Johnny Boursiquot:** It would help you cache that?

**Mat Ryer:** Yeah. But I'd probably prefer a key. Or even something with its own type, just to make that really explicit that that's what this is.

**Johnny Boursiquot:** Yeah. Yeah. Localization work is actually not trivial. On the receiving end of that task, it's not --

**Mat Ryer:** Yeah. But you speak three or four languages. Imagine having to deal with localization and you only speak one language. It's a kick in the face.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** It's a slap in the face.

**Johnny Boursiquot:** It's a slap in the face, isn't it?

**Mat Ryer:** Yeah, a little bit.

**Johnny Boursiquot:** Yeah.

**Ian Lopshire:** So the blog post doesn't go into it, but do you have like a standard way you're handling errors and translating to status codes, and error messages, that sort of thing?

**Mat Ryer:** I've solved this a few different ways, and none of them particularly stood out as worth getting into the post. It's just sort of slightly painfully each time. But in a way, I think that could be quite comforting for people. Have you done it?

**Ian Lopshire:** That's why I asked, because it's painful every time. I've tried probably three or four different ways at this point, and none of them are standout.

**Mat Ryer:** Which is your favorite way?

**Ian Lopshire:** That's a great question. Right now we use just like an error code interface that our errors implement, that return a specific code... And then each endpoint has its own switching on that to determine statuses, and... Because we run into the issue... You know we got nil back from the database for this object. That's an internal server error on this endpoint, but that's a bad request on this endpoint, right? So we've gotten to the point where basically each endpoint declares its own known errors that map to a status and a specific error message, and return unknown for the rest.

**Johnny Boursiquot:** Yeah.

**Mat Ryer:** I've done things before where I have a special type... I also changed it to a wrapping thing when the wrapping, all that kicked off. Wrapping your errors... Which you can do; you can just have a function that says "Basically, add this status code to this struct, to this error." And then you wrap the error and pass it in. That's okay, but you end up with HTTP stuff in lots of different places sometimes. So I do try and solve that only in the handler itself, because that's the HTTP bit. So that's where I would do it. So I don't like the idea that I've got some service that's nothing to do with HTTP, it's just its own thing, and it returns an error at one point, and then there's like a 500... Or an HTTP status bad request there feels like the wrong place for it. I just wouldn't expect that to be there, so I feel like it'd be hard to find later.

**Ian Lopshire:** You mentioned that, and that's actually how we do it. So the HTTP handlers themselves just wrap a generic bad request error, that it knows it's a 400. But yeah, having HTTP-related things in other pieces of code does feel icky.

**Mat Ryer:** Yeah. You just wouldn't expect to find it there, I think it. Honestly, it does depend. If your service is explicitly dealing with HTTP stuff, or... You know what I mean? If the concepts are in your service, maybe you actually take the HTTP request in, because you're doing something in the service. Then it is kind of polluted already, or it is just naturally dealing with that domain. And so maybe then it's okay. But yeah, if not -- because again, imagine a non-HTTP world where you want to reuse that functionality. And you probably will... Even if you're doing things internally.

\[46:09\] The other principle that I realized underpins a lot of stuff is kind of prototyping and experimentation. And anything that makes things easier to kind of compose and hack around with and try things with. That's always a win, because so much innovation comes from that play. And that's how I innovate, is by playing around. So I enabled that. I realized that's not how everybody does it... But if you're trying something and it's hard to try it - that toil, I mean, that's just gonna get in the way. So I always think, "What's going to be easier later? What's gonna give me more options later?" And then I'll choose that.

**Johnny Boursiquot:** Let's talk testing, and testability.

**Mat Ryer:** Let's talk testing.

**Johnny Boursiquot:** One of the decisions I remember making early on when working with HTTP services in Go was to not bother testing sort of the routing, or what the handler does for its work... Rather, I would test the behavior that those things are relying on, and then expect that if I can make the behavior pass, then the job of the handler is to facilitate me getting to that particular behavior, and getting the results that I'm looking for, but not really checking or testing that routing works. Because to me, I'm like, that's testing the wrong thing. I don't need to test routers, because I know they were tested, whether it's the standard library or some other thing. Testing at the right level, I guess, is what I'm trying to get at. What is your approach, or has it changed with this refresh?

**Mat Ryer:** My approach has changed over the years, because I love TDD. And honestly, I do TDD still. So I literally will write tests first... Now, sometimes I'll prototype things without any tests, but if I'm writing something serious, I do it because it helps me do it. It's like how I do it now, and I'm faster doing it like that. So it's not like a trade-off that I have to consider. It's just, I'm better off if I do it. So being really strict on that leads you to over-test, frankly. At the beginning, you just over-test things. And by over-test, I mean either you're describing too much about how it's doing the thing... Like you said, Johnny - not just what's it doing, or what's the behavior, but how is it actually doing it, and being too much in that business. Then, when you want to change how it's doing something, all your tests suddenly need to change, and then the toil there is just like extra work. And I don't know that you get the benefit. I don't know that the benefit's worth it, sometimes.

You can also over-test \[unintelligible 00:48:49.02\] is very brittle. You can also over-test where really any changes you make, or if you're adding things, the toil to then actually match the patterns that are established becomes so great that you're doing a lot of work for the sake of it, really, and you don't even -- you're not getting the value for it. Or you repeat the same thing in lots of different places, in slightly different ways. If you've got like an end to end test that you say you're going to create a user, that's going to then create a blog post, you might have test data that's posting to an API, and then checking the blog post... And then in the unit test at that layer you're doing the same thing; you have a user, you're calling a thing, you probably still have a database...

So I used to be very strict about testing layers properly like that, and then I settled on treating -- this came really from something Dave Cheney said, which is that the unit, in a way, in Go, is the package. Like, think about what the unit is when you're unit-testing. And I was thinking, the unit sometimes in these -- well, you could say that the whole surface is a unit. A service is a unit; it can look like that. So you essentially have end-to-end tests that are -- they do test the routing... They actually test everything, because you're literally running a real instance. And with Go, this is achievable, because the compile time's so quick. And this is how we do it at least on one of the teams in Grafana Labs.

\[50:16\] I just write end-to-end tests. Usually it's an API level, I'm hitting an API, I'm going to create -- I'm just usually speaking in the same language that I expect the user to speak, whether that's the browser or someone actually consuming the API. And yeah, this is about trying to be similar to what they're already going to do. So literally, you have to solve auth in some way.

Normally, I'll deliver a client for the API as well, and I'll tend to use that in the tests. So you're testing the client at the same time. It really is end to end. You spin up a real database... It's testing to make sure that the migrations in the database work... Everything has to work for these tests to pass. And that's also the criticism of them, because unit tests, more traditional unit tests give you a laser pointer to when something's broken, and that's really helpful. You know, if something breaks in the auth, all of your integration tests are gonna break. But they'll break saying something's up with auth, so it's still quite clear, but...

**Johnny Boursiquot:** But I don't think I trade off -- or rather that trade-off is so sort of small to me that it doesn't really feel like a trade-off. If I can test basically end to end... Like, if auth is broken, whether it's this particular test or that particular test, I'm gonna get the signal. So yeah, I may not have a unit test specifically for that specific branch in the authentication process, but if I have enough coverage in my test, something is going to tell me that "Oh, something is wrong, and it's consistently showing up." "Oh, it's auth. It's auth." I mean, it doesn't take me long to figure out "Oh, I know where the problem is." So to me that trade-off doesn't seem like it's that big of a deal.

**Mat Ryer:** Yeah, that's a fair point. And that's my experience, too. It's just the argument against these sorts of tests, or one of the arguments is that you don't get so much laser focus. But yeah, and I also run the whole test suite all the time. Every time I make changes, I just have the tests just run again. Because if they run quickly, you can really do that.

But if there's a bit of business logic that is a bit hairy or a bit complicated, then absolutely I would have a unit test for that. But why I wouldn't unit-test is the handler that is decoding some JSON, calling another function, getting the response, encoding the response... That thing - I like the end-to-end test to just cover that. If anything's wrong in that, it'll fail, and that's great.

Sometimes also, if you test it as a unit, you're passing in -- you might have a different object that you're passing in, o you might just use a string to build some JSON, or something... That's kind of less real, in some ways; it could be less real, because that request body isn't being -- if it's created from a client or something that you control, or that's official, that's just a more realistic test. So there's a few other examples; I can't think of any, but there are a few examples where you get a false sense of security from the unit test, because the unit tests pass, but it doesn't work in production, because routing's off, or something else that you just would never think of is off. And so you end up having those end to end tests anyway... So why not only have them? But this does depend, for sure.

**Ian Lopshire:** Yeah. I see a good argument for the end-to-end tests, too. Otherwise, if you're depending on middleware, you're depending on path variables, that kind of thing...

**Mat Ryer:** Yeah, middleware's the other one. That's a good point. You can just call the method directly if it's a handler, which is really good sometimes, honestly... But you are skipping all the middleware bits, which - that might be what you want. But imagine if that middleware is doing something that's significant. It does a call-out to find out the org ID, and it injects the org header... That has to work for your whole thing to work in production. And you could easily have tests that just don't catch that.

**Ian Lopshire:** \[54:14\] Yeah. We do authentication in our middleware as well, so... It's a good spot to catch security issues.

**Johnny Boursiquot:** Much of these practices you've sort of enrolled into a separate Go package... I remember when you made that public, Oto. Do you still use Oto? Is Oto still part of your workflow?

**Mat Ryer:** Yeah, it is, actually. So this is a dead simple idea, and it's a bit like gRPC... But gRPC is extremely powerful, and there's loads of tools to learn... There's new languages to learn, protobufs... Companies like buff are helping with that, and honestly, I think it's really promising, the future of that... But Oto, the idea was you describe your service just using a Go interface. So you take in a request object, a response object, here's what you return, and then it's just methods in an interface, and that's how you describe your service. So nice that it's written in Go.

And then there's a parser which understands that, turns that into new structs - they're kind of meta - that describe "You've got a service, you have this many methods, each method has input and output object, the object is described like this, it has these fields, these types..." So it's just like, you have the -- it uses the AST thing. That package in its own right is useful. It's the parser, which is a separate package... You can just use that to read Go interfaces. It's actually dead useful for loads of different use cases. And then it uses code generation with some templates to basically turn those service definitions into everything you need to actually have those services. All the gubbins, all the plumbing, everything is wired up for you. And you end up with just having to implement the interface, and that's your service implementation.

So that was -- and it follows the thing it generates, the HTTP side of it, or follows all these practices. Yeah, that gets used -- people use that, because if you don't need more than that, if your case is quite simple, it's probably the simplest way to just do that. And any code gen is like a massive multiplier in productivity. The repo, it has templates for Go client, Go server, a TypeScript client, Python, I think, it may have Rust even... So yeah, you can just generate the clients you need. So it's kind of like -- oh, and there's also one for the Open API spec, so you can generate the Open API spec from your Go interfaces. And then you can generate all the things you can get from Swagger. Or you can use more templates to generate docs that look nice... Unlike Swagger docs, which are a bit of a red flag, honestly... If I see a website that's got that Swagger...

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Just the default formatting on it.

**Johnny Boursiquot:** Nice. Nice. Ian, are you still here? Did you go get another protein bar, or something?

**Ian Lopshire:** Oh, yeah. Protein break.

**Mat Ryer:** Protein break.

**Ian Lopshire:** Gotta get that creatine. \[laughter\]

**Johnny Boursiquot:** Anything else you want to call out, Ian, before we transition to unpops?

**Ian Lopshire:** Not really. I want to check out this Oto. I had not seen it before. I love the idea of just generating like the boilerplate code that you can get wrong...

**Johnny Boursiquot:** Alright. Alright. Well, let's do it to it.

**Jingle**: \[57:40\]

**Johnny Boursiquot:** Alright, who's got an unpop?

**Mat Ryer:** I've got one.

**Johnny Boursiquot:** Please.

**Mat Ryer:** I think this might be unpopular. We say "Don't bring patterns from other languages into Go. Learn how to write Go." And I think that is great advice. But my unpopular opinion is, sometimes it's okay to bring patterns from other languages, if they're appropriate. And why not?

The reverse is also true, and I've lived this, because I used to do a lot of JavaScript/TypeScript code. The JavaScript and TypeScript I write today now, because of Go, is minimalist, very simple, doesn't use a lot of the fancy language features... If it's gonna be a function, it has the word function. Call me old-fashioned, but it reads kinda like Go code. It just turns out to be very easy to deal with, for the same reasons that simple Go code is easier than fancy, amazing, "Oh, you put a semicolon here, and then that means this is blue instead. But if he's got an eight near it, you better hope the Moon's in the right orbit, because you're in trouble..." You know what I mean? All this magic, mystical language features that are amazing, they feel good to use them, but...

**Johnny Boursiquot:** Yeah.

**Mat Ryer:** ...I'd just rather not have them.

**Johnny Boursiquot:** Yeah, perhaps to piggyback off of your unpopular opinion... I think we as basically the programming community, we will create those fancy languages, and fancy ways of doing things within those languages, and we'll even bash other languages for not having the fancy ways that we now do things, because of some other language, or whatever... We're doing all of this in a way optimizing for the writing of code, when most of the time we're just reading the code.

**Mat Ryer:** Yeah... It's a good point.

**Johnny Boursiquot:** It's kind of counterintuitive, right? We're talking so much about "Oh, I can be as expressive as I want to be with this language." And then you just write it once, and then you have to maintain the darn thing forever...

**Mat Ryer:** Yeah, that's so true.

**Johnny Boursiquot:** We're silly.

**Mat Ryer:** That's because we -- yeah, that's because I think it's just more of a conscious act that we're writing, so it has more importance. It's also where we put a lot of more focus. And reading is a lot easier. But you're right, reading's what we do way more than writing any code. Genuinely, any code is going to be -- I think I'd go on record as just saying that... Any code is going to be read more than it's going to be written. So... Optimize for reading. What's easiest to read? What's, what's the simplest, what's the most boring? It just pays dividends.

You know, it's just like a personal taste thing... This actually impacts productivity at some point. I mean it, proper serious. People should really think about this when they write code.

**Ian Lopshire:** Any code I've ever written where I felt real smart while I was writing, when I read it, I've never felt more stupid.

**Mat Ryer:** Yeah, it's the opposite side of the same coin.

**Johnny Boursiquot:** Right, right. Ian, have you got something for me?

**Ian Lopshire:** I really don't...

**Johnny Boursiquot:** Man -- okay, unpopular opinion. Ian doesn't bring enough unpopular opinions to this show.

**Ian Lopshire:** That's true. I have opinions, they're just gonna be popular. \[laughter\]

**Johnny Boursiquot:** Ian's like "I'm just that kind of guy, you know?"

**Ian Lopshire:** I do think I hold the most unpopular opinion ever said on this show, though.

**Mat Ryer:** Oh, by the stats? It wasn't about me, was it?

**Ian Lopshire:** I think it was a long time ago...

**Mat Ryer:** If it was about me, I'm going...

**Ian Lopshire:** I think I said something along the lines of "A promise type pattern could still be useful in Go." And I maintain it.

**Mat Ryer:** I'm with you, actually. I'm actually with you on that one. I don't hate it.

**Ian Lopshire:** There's certain times where I just want to wait for something to be ready, and then use it from then on. I mean, that will still be unpopular, guarantee.

**Mat Ryer:** \[01:02:00.00\] Yeah. The error handling gets funky in it a little bit, or can, can't it? But to be honest, if you build an API where you've got work that's going to happen asynchronously, and then - yeah, you're going to come back later. That is a promise API. You probably -- when you make the request, you get a response, and then you can periodically check to see... So you have that anyway as a pattern. So in that world, if that was your design, it would make sense, potentially, in some way to model it like that inside. I don't know.

**Ian Lopshire:** It's not often I want to reach for that, but every once in a while.

**Johnny Boursiquot:** Well, isn't it because every once in a while -- so, alright, let me not bash your unpopular opinion. Let me counter it with my own. I would argue that the parts of the language -- if you're not using parts of a language enough, or either a pattern enough, if it's not useful on a regular basis, then that in itself tells you something. That is a signal. It just means that most of the time YAGNI.

**Ian Lopshire:** I don't reach for a sync.Cond every day, but every once in a while I really want to use it.

**Johnny Boursiquot:** But is the cost of you bringing in that seldom used approach - is the cost of you... I mean, I use const all the time, so I don't share that particular opinion... But if the cost of you bringing in some particular way of doing something, and having to remember, and now you're reading that code, and having to remember "Okay, well, what is this doing again?" You have to think about it, because it's not something you see often, it's not common practice... It's something different from everything else in the codebase, right? There's a cost to that too, if we're talking about productivity costs, right?

**Ian Lopshire:** Of course. But if the Go code is like idiomatic enough where you're waiting via channel and a select, and all of that, I think it's pretty easy to recognize what's happening.

**Mat Ryer:** Yeah. Do you want to be able to say "var something equals go", some function call, and then it'll -- but what's the point? It might as well just do it synchronously.

**Ian Lopshire:** No, what I actually -- I don't know, I've developed this as time gone on... What I actually want is like a latch. So something that is open to start, and then it closes once, and remains closed forever.

**Mat Ryer:** Yeah. This could be a standard library thing. Like that thing, sync.Cond... Hard to say. You use that everyday, Johnny, did you say? \[laughter\]

**Johnny Boursiquot:** Every day I'm using sync -- no. I thought you meant const, the const --

**Mat Ryer:** Oh, sorry. I thought sync.Cond. Isn't there --

**Johnny Boursiquot:** Not sync.Cond. \[laughs\] Yeah, very rarely do I use that.

**Mat Ryer:** Hang on, we can't broadcast this is in the UK with that... That's not broadcastable in the UK. Yeah, that sentence you just said, Johnny, will mean we have to put a little Explicit box on the podcast episode. A little E.

**Johnny Boursiquot:** Really?

**Mat Ryer:** In the UK, I think. Yeah. Just because of what that sounded like.

**Johnny Boursiquot:** Sync.cond? Or const?

**Mat Ryer:** Yeah, just be careful, mate, is all I'm saying. \[laughter\] We're walking a line... We're walking a thin line.

**Johnny Boursiquot:** A very thin line. Okay. Alright. Well, you know, for my UK listeners, it is an honest mistake. It's just a language thing, I guess. American English, and whatnot. But yeah, it's -- yeah, let's move on from that, shall we?

**Mat Ryer:** Let's move on. Sync.cond.

**Johnny Boursiquot:** Sync.cond.

**Mat Ryer:** Yeah. By the way -- yeah, I was convinced by Johnny immediately... I don't think it should be a language feature. I was imagining a type it could return.

**Ian Lopshire:** \[01:05:58.16\] Oh, yeah. I don't think it belongs as a language feature.

**Mat Ryer:** Yeah. Okay.

**Ian Lopshire:** But as I type, it's nice.

**Mat Ryer:** There you go then. That's what we mean. I think that's going to be so unpopular. Ian, why don't you, as a personal mission - why don't you get that added to the standard library? Remember, it's just open source. Anyone can contribute... Why don't we have a sync.promise?

**Ian Lopshire:** Sure, sure. I mean, I'll give it a go. I don't want it to be called that either...

**Johnny Boursiquot:** \[laughs\] What do you want to call it? Ian?

**Ian Lopshire:** I like the label latch.

**Johnny Boursiquot:** Latch.

**Mat Ryer:** Yeah, that sounds very Go.

**Ian Lopshire:** Where it's something --

**Johnny Boursiquot:** Oh, we need something sexier than that. Latch...

**Mat Ryer:** I like your suggestion, Johnny. Ian. Like, you can't just name a feature after yourself... \[laughter\] Although, quite a good idea.

**Ian Lopshire:** Sync.johnny.

**Johnny Boursiquot:** Let's put an Ian right here, sprinkle a Mat there...

**Mat Ryer:** No, but we could have a sync.obligation, couldn't we? Or a sync.guarantee...

**Johnny Boursiquot:** Obligation? \[laughs\]

**Mat Ryer:** Yeah. Sync.commitment. We could do that.

**Johnny Boursiquot:** Sync.commitment. And you can just say I'm afraid of synchronized commitments.

**Mat Ryer:** What about a pledge? Sync.pledge? \[laughter\]

**Ian Lopshire:** I kinda like that, I'm not gonna lie.

**Johnny Boursiquot:** A pledge...

**Mat Ryer:** There we go.

**Ian Lopshire:** Yeah, I just want a piece of memory that's not ready yet, and will become ready.

**Mat Ryer:** Yeah. And you can check it, you can block on a channel until it's ready... Come on; this type writes itself... It doesn't. Someone's gonna have to write it. Ian...

**Ian Lopshire:** I have an implementation of it.

**Mat Ryer:** Do you? Is it in a repo? I mean, not in a repo; I meant like in a public repo.

**Ian Lopshire:** I think I have it as a repo.

**Johnny Boursiquot:** Do you pledge to submit this...? \[unintelligible 01:07:32.19\]

**Mat Ryer:** It's good. You just periodically check, Johnny, with him, and see if he's finished. \[unintelligible 01:07:39.17\]

**Johnny Boursiquot:** A block, yeah. Are you looking for that repo, Ian?

**Ian Lopshire:** I'm trying to find it.

**Johnny Boursiquot:** We'll put it in the show notes for those who want to see it. I don't... I don't want to see Ian's pledge... \[laughter\]

**Mat Ryer:** That's another thing you could do, is just pledg.discard. Like, "It can finish or not. I don't care." Just clean up all the apparatus for checking. I don't know...

**Johnny Boursiquot:** Is it really a pledge if you can discard it?

**Mat Ryer:** It's a good paint. Well, you can fail a promise... Yeah, it's a pledge. Yeah. It's a promise. You can still break a promise.

**Johnny Boursiquot:** You can break a promise. Yeah.

**Mat Ryer:** Yeah. That's why it's good. Because it can fail. That's why you have to catch -- that's why the JavaScript thing works so well... If someone breaks a promise, you have to catch it, and then deal with \[unintelligible 01:08:34.28\] It break breaks down at that point, doesn't it? It's like "I'm gonna give you a promise." "Okay, good." When this is done, then you can say "Then...", something else.

**Johnny Boursiquot:** Right. Well, this was fun, wasn't it?

**Mat Ryer:** It didn't sound fun, the way you asked that, Johnny... \[laughter\] It didn't sound like you've been having fun...

**Johnny Boursiquot:** No, I was trying -- did you catch my sort of linguistic tidbit there?

**Mat Ryer:** I catched the init.

**Johnny Boursiquot:** Yeah, you caught the init. I'm trying to incorporate that into my sort of everyday sort of vernacular.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** And see if anybody notices.

**Mat Ryer:** Yeah. To be honest, initially I didn't notice, because to me that's just talking. It's the rest of the stuff you say that sounds weird.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** That to me -- I was like, "Ah." I just felt normal. No, it's every other word that I've got a problem with.

**Johnny Boursiquot:** It's every other word. \[laughs\] Alright. Alright. Fine, fine, fine. Before you have more problems with my words...

**Mat Ryer:** Oh, no... That's not a good look for me, is it? \[laughter\] It's ended the episode. Oh, no... ! I'm ruined. I'm done for.

**Johnny Boursiquot:** Let's end on Mat's bad note... \[laughter\]
