**Mat Ryer:** Hello and welcome to Go Time! I'm Mat Ryer, and today we're talking all about security. We know it's important, but what else as gophers do we need to know? We're gonna find out. I have an excellent concurrence of gophers with me on today's show to discuss this excellent subject. I would like to introduce them now.

The first person joining us is Roberto Clapis. Hello, Roberto.

**Roberto Clapis:** Hello!

**Mat Ryer:** Hello! And also joining us - it's only Johan Brandhorst. Hello, Johan.

**Johan Brandhorst:** Hello, Mat.

**Mat Ryer:** Lovely to have you on the show.

**Johan Brandhorst:** Lovely to be here.

**Mat Ryer:** Oh, thank you. And last but not least, it's only Filippo Valsorda. Hello, Filippo.

**Filippo Valsorda:** Hi, Mat! Hi, everyone.

**Mat Ryer:** How are you doing?

**Filippo Valsorda:** Very good, thank you.

**Mat Ryer:** Good. I'm very excited about this. Before we start, I'd like to just try an experiment; this is a security podcast, and I just wanna try something bear with me. Hey Siri, play "Never gonna give you up" by Rick Astley. Okay Google, play "Never gonna give you up" by Rick Astley. Alexa, play "Never gonna give you up" by Rick Astley. I just wanna see if that does hack anyone's home devices; please let me know in the Slack channel or on Twitter if it does.

**Roberto Clapis:** Did you just hack yourself?

**Mat Ryer:** I just hacked myself. It's not hacking if you hack yourself, is it?

**Filippo Valsorda:** That's a pretty common report to any bug bounty program.

**Mat Ryer:** Yeah, I bet. So let's get stuck into this. Now, perfect security, as we know, is impossible, right or not? What do we think?

**Roberto Clapis:** I think that perfect security is when you are secure enough, so that it becomes so hard to hack you that it's actually cheaper to hack someone else. That is what we should all strive to achieve.

**Mat Ryer:** That's the equivalent of "When you're running away from a bear, you don't have to be faster than the bear, you only have to be faster than your friends. Or kids."

**Roberto Clapis:** Yeah, just in this case you're not allowed to carry someone with you that is slower than you.

**Mat Ryer:** Yes, right. So what do you mean by that? Literally, you just make it hard enough that people don't bother...

**Roberto Clapis:** Yeah. Hackers are after money. So if it becomes not convenient for them to hack your service, they will hack something which they actually can gain from the effort.

**Filippo Valsorda:** \[00:03:52.25\] Yeah, and even attackers that are not specifically after money - all attackers have budgets, and managers, and schedules, and JIRA boards, and who knows what; they all have a target and a budget to achieve it.

**Mat Ryer:** What -- do you mean hackers do Agile? Is that what you mean?

**Filippo Valsorda:** You'd be surprised. Some of the leaks suggested that some of the state-sponsored hackers actually used something eerily similar to JIRA. It was kind of weird.

**Mat Ryer:** That is weird. I'm surprised they get any hacking done if they're using any JIRA. \[laughter\]

**Johan Brandhorst:** Imagine trying to meet your hack quotas when you have to fit it into two-week sprints.

**Mat Ryer:** Yeah, imagine that. And they've got performance reviews... You've really changed how I thought about hackers, I have to admit. \[laughter\]

**Johan Brandhorst:** It's very unsexy now.

**Mat Ryer:** Yeah, I thought they're in a dark room, screens everywhere...

**Roberto Clapis:** Hoodie... Yeah.

**Mat Ryer:** ...typing, there's the 3D cube that has to complete, and that's how they know they're in...

**Roberto Clapis:** Yeah. The only thing that actually is left is the hoodie. They probably wear hoodies. But everything else is more corporate than most companies nowadays.

**Mat Ryer:** Okay... We're already learning so much on this. This is brilliant. You all have quite good security credentials; maybe we could just have a quick go around the table and just tell us a little bit about what you do and how you do it. Roberto, where do you work?

**Roberto Clapis:** I work at Google, and I do security enhancement for the web. I do all the things web security, especially the things that we can change in the web platform, so that it becomes easier to secure those services and easier to get it right.

**Mat Ryer:** Can you tell us what you're working on, or is it...?

**Roberto Clapis:** No, all my work is public. I currently work on preventing some cross-origin leaks, which means that -- you know, when you write your web application, you're supposed to be able to feel relaxed that everything that stays on your origin/domain is yours, and all other domains cannot access your stuff. That's the assumption you should be working under; it's not true, so I'm working on making the assumption better, and closer to the truth, let's put it this way.

**Mat Ryer:** Very interesting stuff. And how about you, Johan? I know that you're a gopher, a writer, a speaker, like Roberto...

**Johan Brandhorst:** Yeah, so I recently started a new role at Utility Warehouse, working on security, so I've been looking at some of the stuff they're doing... But mostly, a lot of my security stuff has been in open source as well. I'm interested in security, and I've made a few open source packages that revolve around security... But I don't work for Google, so I wouldn't say I have the same exposure as Roberto.

**Mat Ryer:** And Filippo, you do work at Google, don't you?

**Filippo Valsorda:** I do, but I work on something a tad simpler than securing the web platform. I work on securing the Go standard library. I'm the primary security coordinator for the Go project, and I'm the crypto gopher on the team.

**Mat Ryer:** Awesome. That's very exciting. So credentials, I believe, are plenty on this. So what are the big challenges that we're facing then? And in particular from a Go perspective, are there any things that we should all -- what are the things that every gopher needs to know about security?

**Roberto Clapis:** I think there are many things that all gophers should be aware of, but I have to say, if you write Go, you're lucky, because I think the HTML template library, for example, is a piece of art from a security standpoint. I mean, it could be improved, but compare to any other standard library - or even external library - that we have in all other languages, this is very nice; it protects from XSS and other nasty stuff. We are less lucky in other standpoints, which we'll probably get to. Let's say that for Go it's easier.

**Filippo Valsorda:** Yeah, I wasn't actually kidding when I said that I find securing the Go standard library simpler than the web platform, because it's both modern and written by people that came before me, in such a way that it actually has way less complexity, and most of security issues stem or hide in complexity anyway.

**Mat Ryer:** \[00:08:08.21\] That's interesting. So there's an interesting lesson in that anyway then... Because I always drive towards simplicity for the sake of the fact that it's easier to maintain, and easier to work with... But of course, it's also more secure just naturally if it's simpler.

**Filippo Valsorda:** Absolutely, yes. The parts of the standard library where we had the most issues have always been the ones that have the most complexity for necessity, like the HTTP stack, the TLS stack, the whole \[unintelligible 00:08:37.28\] But some of the reasons we don't have nearly as many security issues as large toolkits like OpenSSL or TLS stack is that we implement maybe 10% of the standards. We implement what's needed to make it work, to be as useful as it needs to be to get the job done... But then it's so many fewer lines of code that it's easier to audit, it's easier to reason about, it's easier to review in code reviews, and it simply doesn't have as much emergent behavior.

A lot of the job of the security researcher is to understand the system better than who wrote it, and find behaviors that emerged from the complex combination of different parts of the system.

**Roberto Clapis:** If I might add one thing that I really love about Go, it's that we have some ideas in the security teams that if your code compiles, it should be secure. The Go type system really helps in that sense, even if we don't just consider the standard library, which is pretty good on this matter... When you write your own libraries, you can design your APIs in a way so that -- for example, let's say we don't want to write raw bytes in an HTTP writer; we can just come up with something that \[unintelligible 00:09:52.14\] and then you're done. If your code compiles, you don't have any kind of nasty injections. Even for the SQL package, it's pretty easy to wrap it with a wrapper that doesn't allow you to pass a string as a constructor for a query, but it must be a constant compile-time string. So you don't export the type that it accepts in the signature, and that means that the only way to satisfy the constraint is to pass in a compile-time constant.

**Mat Ryer:** I see. Do you find that's good advice generally then, to have those little abstractions to add extra protection? Is that a sensible thing?

**Roberto Clapis:** If you want to scale. If you don't care about scaling and you're writing something that you're going to run once, and you are five people maintaining it, fine. But if you want to scale, you need to have compilers and tools helping you out.

**Filippo Valsorda:** Yeah, then it's straight into safe defaults, which is basically what I try to spend most of my time on. You can't expect people to read documentation in order to be secure, because just like attackers have budgets, we all know programmers have something to do, and no time to learn everything about a system before they use it. So the system should do the safe things first - return an error if it needs explicit approval to do something unsafe, and document that unsafe thing well.

Something I'm a really big fan of is giving absurdly annoying names to unsafe things. There was already InsecureSkipVerify, but then they wanted me to add a variant of a hash they shouldn't be really using, so I just called it New Legacy. And then I started going crazy with it, and I think the next thing I'm adding is a New Unprotected Cha-Cha20 Stream as a symbol name, because I really don't want you to use that.

**Mat Ryer:** \[00:11:58.13\] \[laughs\] That's awesome. That's a great idea. Roberto, you mentioned SQL... I was once in a hotel, and I was signing into the hotel internet. Some hotels charge you a lot of money for the internet... And I accidentally pressed a single quote mark.

**Roberto Clapis:** Accidentally...

**Mat Ryer:** Yeah, genuinely. And I got a SQL error, and I thought "Hang on, that means this probably is susceptible to SQL injections."

**Filippo Valsorda:** Right, and Mat, let me stop you before you \[unintelligible 00:12:23.10\] on record... Come on...! \[laughter\]

**Mat Ryer:** Okay, could you be on all of my calls forever, please? \[laughter\] I could really use that. Yeah, anyway... So I didn't do anything with it, but what you can do is modify the SQL string, essentially. Probably what they were doing was just concatenating strings to build up the SQL query, and that's not great, because if you put a closing quote in, suddenly you're out of whatever the query they were doing, and you're into a whole world of -- you can really do anything.

**Roberto Clapis:** Yeah. That is one of the major sins of security - mixing data and code. That is one of the few things that we got wrong in the early beginning of computer science. HTML has that problem, XML has that problem, SQL has that problem... And every time you see the problem, vulnerabilities arise.

So yeah, that's a problem that has been around since the web started existing, and we haven't solved it yet. Every time someone thinks "Okay, so I'm mixing some kind of data and some kind of code", you should really put a safe type wrapper around it, so that the type system actually helps you. Those are not strings; you are concatenating. Those are inputs and source code. They should have different types.

**Mat Ryer:** So would you do like "type secure string" string, so that it's a new type based on the string? Or would it be a struct, would it be something else completely, an interface?

**Roberto Clapis:** I would go for an opaque struct, so with an unexported field, and the SQL package that constructs the struct should be called something like "Do not import this package, or else..." Or statically-enforced, "You don't import that package." So the only safe wrappers the SQL package prepares your statements, so you don't get this wrong.

Johan, I'm actually interested in your opinion on this, because you happen to be on the user side. Filippo and I are more on the designer and provider side. So what's your user experience in securing Go applications? Because I honestly haven't done that.

**Johan Brandhorst:** Filippo mentioned it already, but the Go standard library, what it does really well is secure by default. We've mentioned that insecures get verified, that you literally have to enable explicitly if you want to use TLS without verifying that you're talking to the correct host. And a user, most of the time, whatever you write by default is secure, which is super-useful obviously, because if you're coming from a language like PHP or even Python - in Python you have to jump through extreme hoops to enable TLS on a server, and Go obviously makes this super-easy from the start.

**Roberto Clapis:** Did you ever find some code that accidentally imported stuff like text template, instead of HTML template?

**Johan Brandhorst:** When I became a gopher - which was only about three years ago - this kind of thing was already like "No, no, no. Definitely make sure you don't do this." We should run back on that actually, because one of the easiest mistakes to make when you're working with HTML templates (which are great) is to use the wrong templating language, so you don't end up sanitizing the inputs.

So there's the two different template languages in the standard library - the HTML templates and the text template. They both do templating, but one of them is secure for the web, and one of them is not. So whenever you're using templates to run your websites, make sure you're using the HTML template package.

**Filippo Valsorda:** \[00:15:53.19\] Yeah, this is the same issue that we have with math/rand and crypto/rand, and every week I find someone using math/rand somewhere where security is relevant... And sometimes people don't really think about it, because for example I need to select a load balancer back-end. I can do that with math/rand; there's no security involved here... Well, except that an attacker that can predict the ordering can send all those low requests to the same back-end, for example.

And yes, math/rand is completely predictable of an attacker, while crypto/rand is what you can actually use to generate keys. And it's the same problem as HTML template and text template.

**Mat Ryer:** What's the trade-off though? Why wouldn't we always just use the crypto/rand? Is it slower?

**Filippo Valsorda:** There are people that have opinions about the performance of crypto/rand, and honestly I haven't seen many examples of that being a concern that was actually relevant.

**Break:** \[00:16:58.13\]

**Roberto Clapis:** Since I'm passionate about performance, I spent a week trying to optimize a custom-made random generator - math-based, not system call-based - that went fast enough to be faster than a buffered crypto/rand. It's not easy. You need to think a lot to make it faster than crypto/rand, especially if you use a buffered crypto/rand reader. Even if you have the remote suspect that some kind of random could affect your confidentiality integrity or availability in your service, use crypto. It's fast enough.

**Johan Brandhorst:** But we mentioned why not always use crypto/rand. I guess you want to use math/rand when you want predictable randomness, right?

**Filippo Valsorda:** When you want reproducible randomness, when you want your tests to always do the same, yes. If you don't want two different test runs to do two different things, then yes, you want math/rand. But the only example I can think of is tests. Maybe folks can think of a few others, but they're very specific.

**Roberto Clapis:** \[00:19:58.29\] Even with tests, maybe use a random seed for your random, and then log the seed if you fail your test... Because you want your test to be random if the runtime is random. So the test should be as close to reality as possible, so use a math random maybe in tests, but use a different seed every time, so that if a race is there, you see it.

**Mat Ryer:** Oh, that's a very interesting point, yeah. I've never thought of that. Because, of course, making the random sequence predictable for testing is obviously the natural way you'd think about that. But it's a good point. If what you're testing has those random elements, then you sort of want those to be run as often as you can.

**Filippo Valsorda:** Yeah. As long as you log the seed, so that then you don't have to run it a million times to reproduce it, yes. Not speaking from experience here, not at all. \[laughter\]

**Roberto Clapis:** Yeah. About that, I wanted to talk about one thing... It was go-fuzz. I don't know how many people know about this, but I actually found that to broadly improve my security and actually the quality of my code -- so for those who don't know about this, go-fuzz is a tool that allows you to compile your code in a different way, and you just have to implement that Fuzz function, that accepts a slice of bytes and returns an integer. If you implement that correctly, go-fuzz adds a lot more value to your tests \[unintelligible 00:21:22.10\] a round of input and tries to explore all your code. So it checks when some code was executed and when not, and just keeps randomizing until it gets a good coverage of your code... And you would be surprised to see how many bugs I found in code that I really trusted, by just going with a simple go-fuzz function. It takes a minute to write.

**Filippo Valsorda:** Go-fuzz is amazing. The folks at OSS-Fuzz are now running it continuously on some of the standard library fuzzers written by...

**Roberto Clapis:** Dmitry...

**Filippo Valsorda:** Dmitry Vyuokov, right?

**Roberto Clapis:** Dmitry.

**Filippo Valsorda:** Yeah. I probably mispronounced that, apologies... That caught a JSON decoder bug before we shipped it in Go 1.13, it saved me the whole rigmarole of going through the security release process, and it stopped it before reaching production. Go-fuzz is amazing. And you don't only use it for finding panics, and stuff like that. That's what it finds by itself. But you can use it, for example, for enforcing an invariant. For example, if you are using buffers for something, you can just randomize the buffers before you call some decoder, and ensure that the old buffer does not influence the new result. Any older number of invariants; anything you can write in the Fuzz function to say "This should always be true, and panic if it's not true", go-fuzz can help explore until it finds a case in which it does something you didn't expect.

**Johan Brandhorst:** Do we want to take a step back and just talk a little bit about what fuzzing is, for those who might not be familiar with it? We discussed the package go-fuzz here, which is a Go-specific package for fuzzing, but what fuzzing means for a user is - for example, if you have a function that handles user input, then you kind of think about things that a user might put there and you try to protect against closing brackets, and things like that... But what you might not realize is that there are ultimately tools that can handle things that you couldn't think of, and you would have to try very hard to produce in a test; that might end up crashing your application.

So fuzzing is a way of automatically finding problematic strings or sequences of bytes that can cause unexpected behavior in your application... And it does that not just by kind of hammering it with random data, but it also instruments your code to see "Oh, it goes into this branch if I give it these bytes. Maybe I'll try this sequence of bytes afterwards..." So it's a really powerful tool for exploring functions that expect arbitrary input don't crash or misbehave...

\[00:24:01.00\] And it's something that hackers use as well to try and -- a lot of applications that were built back in the day, I guess, will not have necessarily had fuzzing performed on them, and if you have some API that's not write-limited, you can be sure that a hacker is going to be trying to fuzz it and find unexpected behavior, and maybe even something like a remote code execution can come out of it.

**Filippo Valsorda:** Yeah. To give a couple of common examples of fuzzing... For example, the JSON one - we would just take the random string for each fuzzing iteration and pass it to json.decoder, and see whether the decoder did something we didn't expect. And it found a panic, because it does millions and millions and millions of tries, and it learns what things trigger certain code paths. It rewrites the code, just like the Go tool cover, or go test -cover does. That way, it finds a path, as Johan was saying.

Something that really gets me is that - you're right, it used to be something that just hackers would write... And I never truly understood how we got to that point. Would you believe a world in which we said "Yeah, writing unit tests actually is such a good trick. Unfortunately, for some reason, just security researchers write unit tests for their people's software, just to find issues, and then they throw them away once they're done." But fuzzing is like that - security researchers fuzz things, and report issues they find, and then they move on... When instead fuzz tests should be in the same place where unit tests and integration tests are; they should be developed by the application.

**Johan Brandhorst:** There's even talks of integrating this into the standard library, isn't there? Having fuzzing be a first-class citizen of the testing tool, I think.

**Roberto Clapis:** Yeah. And if there is one more (very short) thing that I might add, it's that every time your fuzzer finds a string that crushes your program, add that to unit tests. Immediately.

**Filippo Valsorda:** Yeah, I was kind of leading here intentionally, because I really want fuzzing to become part of the standard library. There's been progress on that, and I'm trying to think through how that should look like, and finding either time or people interested in working on that... Because it'd be amazing to have just \[unintelligible 00:26:17.22\] that for now takes a byte slice, but maybe can take any types that we can randomize, and then it can just do the thing, just like gotest, and it does benchmarks as well.

**Mat Ryer:** You mentioned the JSON package, which to me is the perfect use case for fuzzing, because it's literally deserializing strings. But what about if you've just got a function where you're gonna make a greeting and say "Hello, Filippo" and you're just taking the name as a string. Would you even fuzz functions like that?

**Filippo Valsorda:** There's a return of investment here in the amount of effort you put in. Just like you wouldn't write a number of tests for that function, right? You would probably just write one quick test, and then start testing a bunch of edge cases. What does make me think more is functions that do take complex inputs, but not in the form of a byte slice. Those are a hard problem, because how exactly do you randomize those, and how do you keep track of that corpus, and what do you do when there's a new field in the struct? Do you throw away all the corpus? That feels silly. You would just try all the corpus you already have with different values for the new field, but that's extremely hard.

**Roberto Clapis:** Let me throw in some knowledge. A corpus is basically a directory in which you will find all the files and all the inputs that go-fuzz found useful somehow, and that it's going to reuse to generate more input.

**Mat Ryer:** Also, it remembers...

**Roberto Clapis:** Yeah, yeah. Or you can interrupt it any time \[unintelligible 00:27:47.21\] One thing that I've found particularly hard to fuzz is web applications. If we go back to \[unintelligible 00:27:55.21\] it's pretty hard to fuzz an application and say "Okay, here there is an XSS", or "Here there is a cross-site request forgery." That is complicated. We are kind of working on it, but we are not there yet... Especially for XSS, because cross-site request forgery can be addressed in a different way, but XSS would be nice to have fuzzing for.

**Mat Ryer:** \[00:28:23.04\] Yes. Interesting you talk about web, because one of the things that's very attractive about Go is how easy it is to spin up a web server and just HTTP-listen and serve, and if you use the default mocks and all that stuff you get quite a lot of things for free... And it feels like that's kind of enough. But what more is there to do to make sure our servers are secure?

**Roberto Clapis:** If you use the default and you just spin up your web service, you're going to have a list of issues. I think you can run an HTML template, that is fine. But I've seen people logging errors \[unintelligible 00:28:57.11\] That is not good. Or for example if you listen for POST requests or from submission, you're exposed to cross-site request forgery, and Go doesn't warn you about that, because the Go HTTP implementation is an implementation, it's not a framework.

For example, if you have a pprof listener installed on your service, that is going to set up on the default MUX, and you don't want to expose pprof to the internet. So there are many problems in using the defaults of MUX, like keeping connection open; someone can just connect to your service six thousand times and take it down.

**Filippo Valsorda:** Yeah, timeouts are a pet peeve of mine. Sadly, I don't think we can change them according to the Go 1 compatibility promise... Because if we add timeouts to requests, anything that was, for example, streaming a response for over like an hour is going to break, and we don't break people.

**Roberto Clapis:** WebSockets.

**Filippo Valsorda:** I mean, \[unintelligible 00:30:00.29\] special case hijacked connections, but still... So when you use the default HTTP server, or the default client, the other party might just keep that connection open forever and you're going to leak a goroutine and a file descriptor, and eventually run out of file descriptors and get paged while you are somewhere off in China, which I'm totally not talking about from experience.

**Mat Ryer:** \[laughs\] So would you say never use the default bits?

**Roberto Clapis:** Yeah.

**Filippo Valsorda:** Yeah. You don't want to use the http.Get helper, for example. You want to spin up your client, set a timeout in the timeout field on the HTTP client, and then use that... And similarly for the server.

**Johan Brandhorst:** I think someone produced a blog post about how to secure your web servers on the web a few years ago. Has that been kept up to date?

**Filippo Valsorda:** \[laughs\] Somebody also has a to-do item to update that blog post... \[laughs\]

**Roberto Clapis:** Yeah, especially for ciphers, that would be great.

**Filippo Valsorda:** Yeah... That's probably bad today, isn't it...?

**Roberto Clapis:** Mm-mm... \[laughs\]

**Johan Brandhorst:** Let me just clarify that... Filippo, when he was at Cloudflare, put out a blog post about how to secure Go web servers - you want to expose Go web servers to the internet, basically... And it has a few good defaults that you should check out if you're looking to spin up a web server and expose it to the internet... But it sounds like there's more to be added in the future.

**Filippo Valsorda:** Rob, do you want to turn that into a Wiki page?

**Roberto Clapis:** Ohh... No, no. You're not going to volunteer me into doing something like that.

**Filippo Valsorda:** I could start it... I just need somebody to cover the web part of it.

**Roberto Clapis:** Oh yeah, I can totally chime in in the web part... Saying stuff like "Do not interpolate any content in scripts, in script files", or "Do not accept arbitrary requests", or stuff like that... And you can do all the greasy work, with the ciphers, defaults, and stuff like that.

**Filippo Valsorda:** \[00:32:07.20\] Perfect. Yeah, we started setting some default headers... The ones to make sure a request is not misinterpreted as something else than text. Rob, help me out.

**Roberto Clapis:** I don't know about that, but I know that we are still sniffing content for responses.

**Filippo Valsorda:** Yes, we are. We're doing that server-side. We can't really fix that.

**Roberto Clapis:** For those who don't know about this, content type is when a server sends a response to the client and says "You know what, this is text" or "This is JSON" or "This is a binary blob, and it's important that an attacker cannot control that, or that there is no way that the server is going to say 'Hey, this is HTML. \[unintelligible 00:32:43.12\] plain text?"

**Filippo Valsorda:** Yeah. A classic attack there is you upload a picture to a forum that takes picture uploads, but actually it's HTML, and then somebody opens it in their browser and it runs some Javascript, and -- I don't know, now you have a lot of points on that forum.

**Roberto Clapis:** Yeah, and the problem there is that Go tries to guess -- so you know the simplicity you were talking about, Mat, when you said "Yeah, simplicity is nice. You just spin this up and it works." Yes. But the way it works is that it does some work for you that it should really not be doing. One of the things that I do when I write Go web services is to set content type header to plain text, which is text/plain. And the character is set to be UTF-8, and that's it. And I'm sure if I forget to set my content type on my HTML responses, those are not going to render. So I'm secure by default. And then when I serve HTML, I actually reset it to the content type that I know to be HTML.

**Filippo Valsorda:** So that's one point we need to put on the Wiki - always set your content types explicitly.

**Mat Ryer:** Yeah. That is really interesting, because there's a lot of this, a lot of things that we are talking about here are what are taught when people are teaching Go. They start with "If you wanna go and just get some results, you use http.Get. It therefore doesn't have the timeout." And we sort of learn that way, with those basic tools... But yes, it does sound like there is a bit more there to learn before you get that into production.

One of the nice things about using App Engine - which I use almost exclusively - is there's layers of security that happen on your behalf, and I think you can safely use listen and serve in App Engine, because everything's kind of proxied. But some of the other things you talk about absolutely apply... And probably apply everywhere.

**Filippo Valsorda:** I think Go is still probably better than the average platform here... It's just that Go is also ten years old, and over these ten years it did not have the privilege to make a breaking change. So anything that we didn't get right in terms of secure defaults at the start - which were always considered important - unfortunately is not something we're in the position to change.

**Mat Ryer:** So do you think with Go 2 - do you think if there ever was a major release of Go, that would be a list of things you'd like to correct?

**Filippo Valsorda:** I am not allowed to talk about Go 2. \[laughter\] No, I'm kidding, I'm kidding... Well, Go 2 is shaping up to be a process through which we make breaking changes, but not really cut like Python 2 to Python 3 was. We're calling Go 2 already the language changes that happened in Go 1.13... And I suppose that at some point we will want to make v2's of a bunch of standard library packages, but we don't have the infrastructure yet, nor know how we're going to do those just yet. Maybe there will just be a net/http/v2, just like you can have modules/v2.

**Roberto Clapis:** For security one idea that I had -- you know, with the web platform we cannot really deprecate stuff, because the web platform is kind of out there, and if a browser starts breaking websites, people will switch to the other one... So no browsers are going to completely destroy a feature. We need some features to stay there for a while. So the way we go with this is usually some sort of versioning. The service adds a header to tell the browser "I want this security level, and disable any feature that would lower this security level."

\[00:36:22.01\] One thing that I plan to do for the HTML template library that we are already discussing is that when you parse a template, you want it secure. That is going to change your HTML to prevent some vulnerabilities. We cannot make this the default, because that would be a breaking change, but if we add one \[unintelligible 00:36:39.10\] API that is good, and we just need to tell people "Hey, just do .secure and pass it a level from now on", so every time we bump it, we can just bump that level and go ahead. Now, this is very \[unintelligible 00:36:52.01\] we can get some security by default, kind of.

**Filippo Valsorda:** Yeah, on one hand it's painful on a very deep level to have to tell people "Oh no, it's because you weren't calling http.secure before making your calls."

**Mat Ryer:** It's quite funny.

**Filippo Valsorda:** \[laughs\]

**Mat Ryer:** It's funny because it's like the crypto with math, math/rand and stuff. It's like, "You're not using the secure one." "Well, why did you make an insecure one? And what is a secure six? I've got a six from this one, but I want a secure six."

**Roberto Clapis:** Yeah, but after all, do you run your prod server with race? I mean, for some things it kind of makes sense. Maybe for security, calling http.secure doesn't really make sense, but for some things I feel like we will have a more secure version that warns you if something bad happens, like a -race flag... And you just run it for a while, so that you can instrument your code to see if something bad happens, and then you just go for performance. So I feel like some things might be there, and stay there.

**Mat Ryer:** And of course you could have static analysis tools, or lint tools to help there, too. Actually, I saw a project somebody was working on, and it's a company called ShiftLeft; they were doing basically static analysis for security reasons. One of the examples is if there's ever a string called "password", and that is ever then printed out somewhere, that would be a warning that you would get. Are there other tools like that that we should be using today, and are there other ones that we could imagine?

**Roberto Clapis:** Yeah. One of the most amazing ones is the type system. When you have the type password, you wrap the string in an opaque struct, and you implement the Stringer interface, and the Stringer interface prints an asterisk.

**Johan Brandhorst:** Do you get the impression that Roberto likes this pattern? \[laughter\]

**Roberto Clapis:** If it compiles, it should be secure.

**Mat Ryer:** So then password becomes its own type that is not printable, because we know all the printing--

**Roberto Clapis:** No, it is printable. It prints asterisks.

**Johan Brandhorst:** It just prints \[unintelligible 00:39:00.17\]

**Filippo Valsorda:** Rob, promise me you'll never look into Rust. We need you in Go.

**Roberto Clapis:** I am. I am.

**Johan Brandhorst:** Haven't you been watching his Twitter?

**Roberto Clapis:** I spend a lot of time in Rust, so I'm a big fan of the idea. It doesn't really appeal to me.

**Filippo Valsorda:** Yeah, the reason I'm making this joke is that Rust picks a different point in the trade-off between complexity and powerfulness of the type system, so you can do many more things like that, but it also means that codebases can get much more complex.

**Mat Ryer:** Which, of course, introduces potential security issues, as we learned earlier.

**Filippo Valsorda:** Yeah, it's a trade-off.

**Mat Ryer:** Yeah, a trade-off.

**Roberto Clapis:** I'm just sending hearts emojis to Mat in this moment. \[laughter\]

**Mat Ryer:** Thank you. They're greatly received.

**Roberto Clapis:** If we might want to change the subject a bit, I would really love to talk about dependencies.

**Filippo Valsorda:** Uuuh...

**Mat Ryer:** \[unintelligible 00:39:57.04\] What do you mean?

**Roberto Clapis:** \[00:40:00.02\] You know that easy thing, like "How do I pick a library that I want to rely on, but I don't want to reimplement?" Because especially security-wise, you want to protect yourself from CSRF. That's now in the standard library. How do you go with that? That is a pretty complicated question to answer. Johan, do you have suggestions?

**Johan Brandhorst:** Obviously, you vendor your code and then you review all the code before you add it to your source... No, I was joking. That's completely unreasonable. \[laughs\]

**Roberto Clapis:** Yeah, that's the ideal... But what about a feasible approach?

**Johan Brandhorst:** Wow... Thanks for landing this in my lap. I don't think there's a really good answer at the moment. I know there's the new Go Discover site... That should maybe help a little bit finding more reputable packages, although I'm not sure it focuses so much on security... But they'll be having good maintainers that respond to issues, and merge pull request, and things like that. It's a hard problem, obviously.

**Filippo Valsorda:** The author of the Discover site, Julie, presented a whole talk about finding dependable dependencies. And yeah, I don't think I can say much more than what she said in her talk, but... On the security side, we probably need some way for authors to signal security issues, or any way to tag metadata, so that we can then surface it on the Discover site.

There are other things that the Discover site can do, like flagging users of deprecated APIs or deprecated packages, which is my favorite hammer to swing when I can't remove something; I can deprecate it and hope that everybody is using a static check, so that they will get yelled at. But yes, that's two for two on large things that I need to find time or people that want to work for the ecosystem... Finding ways for tagging security issues. And it's a hard problem because what do you do if the module isn't maintained? How do you surface issues that have been reported, and would you consider a valid issue report that's not published by the author? Yeah, these are questions different ecosystems have different answers for.

**Break:** \[00:42:25.00\]

**Mat Ryer:** How soon do you go public with the information, as well? Sometimes you might find a vulnerability that genuinely you don't want people to know about.

**Roberto Clapis:** Yeah, and Go adds one more bit of complexity in there, because Go is statically-linked. Let's say that someone exports a Go module, and you make sure that all distros have imported that Go modules, recompiled it with a fix for the security issue, and they just use that... And that's fine, but what about the built binaries, what about the compiled binaries? How do you check if a Go binary was compiled with a previous version of the library that is still vulnerable?

Think about a Linux distro. You don't want to repush all the binaries, all together, that depend on a certain library. Maybe you want to security-fix something, but...

**Filippo Valsorda:** We kind of would like them to take that approach, instead of trying to make dynamic linking happen...

**Roberto Clapis:** \[00:44:07.02\] Yeah, that's still a better approach than trying to hack something horrible in it. But as you can see, that is kind of a problem. And also, when you publish a patch for a library, you need to make that public, and there are hackers that actively look for patches, and they look at the patches to see if that patch has a security issue, and if so, they start exploiting everything that they can that uses that library, before they actually can get to patch it.

**Filippo Valsorda:** A good metadata propagation ecosystem can help with this though. You can have tools that look at binaries, which since Go 1.13 have all the versions of all the modules they were built with. There's a thing in debug.BuildInfo with the list of all module names and versions that were compiled into the binary.

**Mat Ryer:** Is that alongside the build?

**Filippo Valsorda:** It's in the binary.

**Mat Ryer:** Oh, it's inside it?

**Filippo Valsorda:** Yeah. And a new feature in Go 1.13 is that if you type "go version binary.foo", it will tell you all the build information of the binary you pointed it at. So you can just run goversion Blah and get a list of the Go version, the module versions... And if we had a way to publish structured metadata about what versions of what have what issues, we could have automated systems that look at binaries in your production systems and go like "Wait, wait, wait... That binary is built with a known insecure version of something." The problem is solving what "known insecure" means.

**Roberto Clapis:** Yeah, easy.

**Filippo Valsorda:** Right. We just need to solve that. \[laughter\]

**Mat Ryer:** I've just realized, this podcast would be really helpful to any aspiring hackers. \[laughter\]

**Filippo Valsorda:** We're giving the wrong suggestions, you say?

**Mat Ryer:** Well, it just grows the audience... Now I know they use JIRA, and stuff. They need all the help they can get, bless them.

**Filippo Valsorda:** But yeah, to your point about disclosure timelines, it's becoming fairly widely-accepted in the industry that long embargos don't really help. The standard these days is 90 days, plus 15 if you need it just to push out a patch... Because at some point defenders need to know, and attackers rediscover things.

I am working on a security issue that I'll try not to spoiler, because that would be frankly embarrassing... But that got reported by two separate security@golang.org reports in the span of two weeks. And likewise, attackers find things as well. So while defenders don't have the time or budget to look into everything, attackers are looking for issues.

**Roberto Clapis:** If anyone is listening and thinks they want to report a security vulnerability, report it to the email address, don't open a public issue.

**Filippo Valsorda:** Yes, please.

**Roberto Clapis:** Yup.

**Mat Ryer:** And what's the email address?

**Filippo Valsorda:** Security@golang.org.

**Mat Ryer:** Okay.

**Roberto Clapis:** Which is basically Filippo and a couple of other folks, so... You know who you're speaking to.

**Filippo Valsorda:** You probably will get an answer from me, yes. But if I'm on vacation, there are back-ups. Security@golang.org. Our call center is waiting for your call! \[laughter\]

**Johan Brandhorst:** Your call is important to us!

**Roberto Clapis:** You're number 741 in line. Please wait. \[laughter\] \[unintelligible 00:47:18.26\]

**Mat Ryer:** To complete your submission, please enter your mother's maiden name.

**Roberto Clapis:** \[laughs\]

**Filippo Valsorda:** The only email address where if you send something good, we might give you some money.

**Mat Ryer:** Oh, interesting.

**Roberto Clapis:** Oh, is that part of the VRP? I didn't know that.

**Filippo Valsorda:** I try to keep that kind of not widely publicized, because I don't want the volume, that noise reports that vulnerability rewards programs get... But every time we get something particularly good or particularly interesting, I refer them to the VRP to get some money.

**Roberto Clapis:** Hm, okay. You know, we have a dedicated team to take care of VRPs if they get too high volume. \[laughs\]

**Mat Ryer:** \[00:48:11.22\] You're gonna get a lot now. Big mistake. You're gonna get all kinds of things, like -- well, I don't wanna help. \[laughter\] So what's the craziest security-related story that you've heard, or that you yourselves have come across?

**Roberto Clapis:** Strictly related to Go?

**Mat Ryer:** It doesn't have to be.

**Johan Brandhorst:** You have a lot to choose from, don't you?

**Roberto Clapis:** \[laughs\]

**Mat Ryer:** Are you trying to decide whether to tell the story or not?

**Roberto Clapis:** Yes...

**Mat Ryer:** Because I can help. Tell it!

**Johan Brandhorst:** Yeah, tell it.

**Roberto Clapis:** There are simple things that I noticed people don't care about or don't think about. The other day I was reviewing the XSRF token package in x/net, and I found out that it was replacing some characters with other characters, to make sure that some string split would succeed afterwards... Which means that a user could craft their username so that they would get a CSRF token identical to another user.

Basically, they were causing a clash in security tokens just because they were lazy and didn't do proper escaping... And I feel like that programmer laziness is the major cause of security issues. That was a clear example.

**Filippo Valsorda:** Yeah, by the way, thanks for that. I was in Tenerife, and I was there triaging your report... It was great. \[laughs\]

**Roberto Clapis:** Yeah... So when I found the DNS rebinding problem in the standard library, I was told "Don't open a public issue. Write to security@."

**Filippo Valsorda:** I'm absolutely kidding. You did the right thing. \[laughter\]

**Mat Ryer:** Did you get any money for it, Roberto?

**Roberto Clapis:** No. Why would I...?

**Filippo Valsorda:** You work for Google, you can't get Google to pay you a bounty.

**Roberto Clapis:** Actually, I could finance my team. You know that some teams get financed by finding vulnerabilities in other teams?

**Mat Ryer:** Oh, do they?

**Roberto Clapis:** Yeah. I don't know if this is true; potentially a legend, but... Why not?

**Mat Ryer:** So you mentioned programmer laziness... It's an interesting point, but -- genuinely, a lot of teams rush; they build software extremely quickly, they're under a lot of pressure, and a lot of people, when you talk to them, they feel like that's how you build software. But there is a good argument to be had for taking your time, slow things down, spend a bit more time on it, and maybe we can start to avoid some of those things.

**Roberto Clapis:** Yeah. One saying that we have is that "Optimists deploy soon and work fast, and they write post-mortems." \[laughter\] Pessimists write tests and Fuzz functions, and they kind of sleep safe at night.

**Mat Ryer:** There we go. Any other crazy stories?

**Filippo Valsorda:** I'm still not in the business of criticizing developers for being lazy. It's true that that's often a source of vulnerabilities, but so many times we've resorted to that, when in fact we were providing them with insecure platforms, insecure defaults, insecure architectures. I'm sure we blamed on developers all sorts of vulnerabilities caused by things like string copy in C, when in fact we now know it's like blaming people for being dumb because they keep touching that exposed high-voltage rail. Just don't touch the rail! \[laughter\]

**Roberto Clapis:** Yeah. If all programmers use an API wrong, the problem is not the programmers.

**Filippo Valsorda:** Right. But you know, it also has a little label that explains in detail the voltage and amperage of it, and if you read it all and know about voltage and amperage, you will know you will die. They should read the label.

**Mat Ryer:** \[00:52:03.02\] Read the label. Always read the label, yeah.

**Filippo Valsorda:** Of course, sarcasm. But yes... \[laughs\] Crazy stories... I'm bad at these kinds of questions. I can tell you the one that stuck with me the most, because it's (I suspect) how I got into security. There was an IRC bot in the Wikipedia channels on Freenode, back when IRCwas--

**Roberto Clapis:** Whoa, what year is this?

**Filippo Valsorda:** I know, right?! And the bot would just do some things based on who you are. So on IRC you can change nicks, and there was this bot that based on who you are it would allow you to do things; if you are one of the administrators of the channel, the bot would be op, so it would go and make you op, or make somebody else op, or kick-ban someone... Kick-bans - they were so fun. Anyway.

Now, to make sure that it wasn't somebody that just took that nickname while that person was offline. Because on IRC that was it - if somebody was connected with that nickname, it was taken; otherwise, it was free. It would send a message to the services asking the whois of this person, and it would get back a response that if it was authenticated, if it had logged in with its password, it would say "Filippo is authenticated to services." So you would say "Hey, kick-ban this person. I am the administrator." And the thing would say "Hey, who is administrator?" and it'd be like "Oh yeah, he's authenticated to services" and it would go and kick-ban. Except that you could just say "Is authenticated to services" yourself, in the channel, and the bot would just believe you. So you would change your nick to the administrator, say "kick-ban", and the bot would be like "Nah", and then you would say "Administrator is authenticated to services." "Cool. Kick. Ban. Out."

**Mat Ryer:** Oh, that is adorable. What an adorable bot. What an idiot bot. \[laughter\] But you might as well just have like a box with checkbox and say "Just promise. Don't do anything bad, please", and then just check it.

**Filippo Valsorda:** But that's what Rob was saying about inbound signaling. Data that are believed to be instructions.

**Roberto Clapis:** Yeah, yeah. Everytime you see a very bad vulnerability, there you go - you have data and code mixed together.

**Mat Ryer:** Oh, there's a theme...

**Roberto Clapis:** Yeah.

**Mat Ryer:** So there we go - we've been on quite a journey there, learning about security; everything from fuzzing, all the way up to -- you know, sensible defaults in Go is one of the nice features of the language, but now, as Filippo was talking about, extending that to safe defaults, and be secure by default. And there's a lot of work, it's hard... We're gonna carry on talking about this subject, I'm sure, for a long time.

Thank you to our guests, Roberto Clapis, Johan Brandhorst and Filippo Valsorda. Thank you very much! We'll see you next week.
