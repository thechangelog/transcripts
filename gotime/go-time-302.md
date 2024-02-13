**Johnny Boursiquot:** Hello, hello. Hello. Welcome to Go Time. I'm your host, Johnny Boursiquot. Joining me today to discuss what is new in Go 1.22 is my co-host, Mr. Ian Lopshire. Hello, Ian.

**Ian Lopshire:** Hi. Happy to be here today.

**Johnny Boursiquot:** Glad you're here. Also returning for - I don't know, this must be like the fifth, the sixth... I don't know, I've stopped keeping track. But my guest, Carlana Johnson. Hello, Carlana. How are you?

**Carlana Johnson:** I'm back. It's been six months... It's a reliable schedule.

**Johnny Boursiquot:** \[laughs\] That's right, that's right. Every time we have a new release of Go...

**Carlana Johnson:** In a changing world, the one thing that's the same is the Go release cycle.

**Johnny Boursiquot:** Indeed, indeed. And for those who don't know, we indeed have a predictable release cycle for the Go language. Every six months we get a release, and between there we get patches, of course. But yeah, we have the same freezing cycle, the same release cycle, that pretty much we can set our clock by, which is kind of cool. I'm not sure of any other language communities, or even software really, that follow such a clockwork-reliable release schedule.

**Carlana Johnson:** iOS is pretty consistent about coming out in the fall. Apple will do macOS and iOS in the fall. But then that's only once a year. Go comes out twice a year. So I don't know anything that's quite as big and as reliable on a six-month schedule.

**Johnny Boursiquot:** That is true. That is true. So as we are recording this, Go 1.22 is not out quite yet. It's in the release candidate phase. But based on, again, the consistency we've been talking about here, by the time you listen to it, chances are pretty high that it will have been released. So we're expecting the release early February, which starts basically in a couple of days for us... So yeah, it's upon us. But at this point, the freezes have occurred. If there's any remaining work to be done, it's very minor tidying up stuff, but the release is being packaged up and is coming very soon.

So Carlana, I know you came up with a few things. And I'm sure Ian has his favorites, and I have my favorites... But I know you came up with a list for us to discuss. So what is first up on your agenda?

**Carlana Johnson:** So I think where we can pick up with as follow-up from the last episode was we talked about last time that they were making a change to how for loops work. And now that change has gone from being an experiment to being an official, integrated part of the Go language. And so this is basically a fix for if you have a loop variable, you might not realize it, but the variable is reused every time you go through the loop. And so that can lead to a situation where you think that you're getting a new value every time through the loop, but actually, it's getting captured in a closure, and only the last value is seen. So this happens a lot in tests. If you have a test and you're looping through some things that you're testing, on the last loop through, the value is whatever the last value is. And if you do t.parallel, it's going to fan out and do all those tests in parallel, but only the final value will be seen. Or actually, it's a racing bug, so maybe it's random what's seen.

**Johnny Boursiquot:** So you're testing, say, ten cases, but really, you've just successfully executed one case ten times.

**Carlana Johnson:** Yeah. Yeah, that's a pretty common bug. Python has this same kind of -- I don't even know if it's fair to call it a bug, but it has the same grammatical issue, that in Python if you do a for loop, and you have a lambda, you might not realize it, but your lamda is going to capture the same variable will be reused. So in Go 1.21 They introduced a fix for this, and in Go 1.22 it'll just work the way that you expect it to. So really, ignore all the explanation, don't remember any of that; just use it the way that you think that you would use it, and now this is just trivia for if you see an old go program, and you wonder "Why did they have i=i at the top of this loop? Or why did they have testcase equals testcase at the top of the loop?" That's just like some historical detail; delete that line, it doesn't matter anymore.

**Johnny Boursiquot:** Only if you have the pleasure of working with Go 1.22 and above. \[laughs\]

**Carlana Johnson:** That's true. If you're in an enterprise environment, you might want to wait.

**Ian Lopshire:** It'll be hard to break that habit, honestly...

**Johnny Boursiquot:** Right. Right. Right. Ian doesn't think he's gonna be able to get rid of that habit quite soon. So speaking of looping, we have some additional capabilities, coming with being able to loop over things. What's up next?

**Carlana Johnson:** Okay. Yeah, this is a very looping release of Go. So there's one change that is official, and there's another change that's experimental. So the official change is that now you can say \[unintelligible 00:06:08.11\] and then use an integer.

\[00:06:15.24\] So if you're used to those old-fashioned C-style loops, where you say \[unintelligible 00:06:18.05\] the classic three-expression for loop, you don't have to do that anymore. Now, you can just say for range integer, and it will automatically range from zero to one less than whatever the integer is.

So it's not totally perfect... If you wanted to do something where "Oh, I want to skip by two", or "I want to go backwards", or whatever - it doesn't do those things. It just is for going from zero to n, or n minus one. But that's a pretty common case. So it just cuts down on the boilerplate a little bit. An example of where this is helpful is if you're writing a benchmark, you're supposed to say -- well, before you would say for \[unintelligible 00:07:03.12\] and it will automatically loop through as many times as the benchmark wants it to be looped through.

**Johnny Boursiquot:** Right. I love this, honestly. To me, that's a huge improvement in readability and just succinctness. I can't think of how many times I've actually relied on the old C-style initializer comparison, in an increment, like the whole three-part style... I think the only place I consistently have had to use that is when I'm trying to do this very thing, when I'm trying to range from zero up to a number, and whatnot. So I think this will probably become my go-to for those kind of use cases. So I think that's definitely a nice improvement. So this is not officially part of 1.22 yet, right?

**Carlana Johnson:** No, this one is official. This is officially part of the language. I'm going to be honest - at some point, I accused Russ Cox of throwing this out as like a distraction or something, so that we would all just debate about this instead of his serious proposal... I don't know if you guys remember that old story... There was the video game Battle Chess, and the manager for the game was like a notorious micromanager. And so one of the artists who was drawing the animations for the game, he was drawing the Queen, and he had to draw the Queen attacking the different people... And he knew that his manager was going to find something wrong with it. So what he did is he drew a little duck in the corner, and the duck would jump up off the Queen's back, and quack and quack and quack. But he drew it in such a way that the duck never actually overlapped with the queen, and it was very easy to erase.

And so when the manager came, he looked at the animation and he said "I love it, the queen looks great, her axe is really swinging, and killing those other pawns and things... But just erase the duck." And he's like "Oh, yeah, yeah, I'm gonna erase the duck." So I kind of had the theory that maybe Russ Cox had thrown this in there as like a duck, of like "Okay, I've got this big idea for how I'm going to change iteration forever in Go, and people are going to be really excited, and upset, and have a lot of opinions about it... But I'll throw in this integer thing too, and then everybody's just gonna tell me to erase the duck... And then that'll distract from my master plan." I kind of had that theory... He denied it in the issue tracker. And it does seem like it's popular. I mean, I agree, it cuts down the boilerplate. I think if it hadn't happened, I would have continued to do these traditional C loops and not complained about it. But I think it's a good change. It does make the language easier to use. It just cuts down on a little bit of typing, which is always -- you know, I love Go, but that is definitely the downside of it, is that there's a little bit of verbosity sometimes.

**Johnny Boursiquot:** \[00:09:56.12\] For me, this whole class of looping changes I think does wonders for the teachability of Go. Especially when I have to -- I can't tell you how many times I have to contort how I'm teaching that whole loop closure thing. I have to explain to people "Well, if you're gonna be in any way relying on this value changing, especially when using Goroutines, or testing things in parallel, this is the odd thing you must do in your code." And I get these curious, blank stares... I'm like " Yes, I know. I get it, I get it. But this is the way you do this." I mean, now I don't have to even mentioned this anymore. As a matter of fact, I'm gonna see if I can get away with not mentioning this ever again, at all.

**Carlana Johnson:** Yeah, I actually think this is -- I hadn't thought about it from the education angle, but I do think as an educator you want to start off with something that's really easy and simple to explain... And so now you don't have to explain about the closure thing at all. So if you don't have to explain it, that's great.

And then for the range loops even, having to do the three-expression form, if somebody is coming from C, or a language where this is the norm, then maybe it won't be weird to them. But if you aren't coming from C, that is weird. It is strange that it's like "Okay, there's three things. The first one is the initializer, the middle one is the condition, the last one is the post-expression..." It's weird. And so I do think that just being able to say \[unintelligible 00:11:27.24\] it's much faster to explain, it's much easier for people to use. They will probably have a question about why it starts at zero and ends at one less than the number, but that's something you're gonna have to explain anyway about how slices are indexed.

I do think from an education angle this makes it a lot simpler. And then you can eventually get around to explaining "Oh yeah, there's also this weird three-expression form that you hardly ever use." So I think this is good.

**Johnny Boursiquot:** Yeah, I might still have to explain that "Hey, if you happen to come across some old codebases where you see these oddities, this is the reason. But for the sake of moving forward, we'll pretend they don't exist." \[laughs\] Alright, so we've covered a lot of loops, but that's not all there is in this release.

**Carlana Johnson:** There's one more loop.

**Johnny Boursiquot:** Wait, what? There is? Are we still looping? Alright... Hit me.

**Carlana Johnson:** We're still going in circles. This is a pretty exciting change. So in Go 1.22 there's a Go experiment to introduce range over functions. So as listeners probably know, generics were introduced a couple of years ago inn Go 1.18. And so basically, ever since generics were introduced, people have been saying "Alright, generics are great. I can write libraries to work with slices, to work with maps, to work with channels... But how do I write something that will go over an iterator?" Because Go does not have an officially-blessed pattern for iterators. So if you look, there have actually been a number of discussions and proposals. I actually made my own proposal a couple of years ago, which was not very different from what other people had done... And I think a lot of people, if you just think "How should iterators work in Go?", your first thought is "Well, there should probably be some sort of interface, and the interface has a next method, and the next method returns a bool, and either there's also a value method that returns the value, or the next method could return the value and a bool..." People propose both. The problem with doing it that way is that it's not backwards-compatible. So if you have a slice, and you define methods on the slice, this would change how it's interpreted. So Go would have to look at it and say "Should I be calling the next method on this slice, or should I just use it in a range the way I always have?" And so that was an initial concern, of "How do we do this in a way that's backwards-compatible?"

\[00:14:03.02\] So Russ Cox realized that a way that you could make this backwards-compatible is - right now, range loops are based on the type of the value passed. So you could be ranging over a slice, over a map, over a channel, and the range statement is based on the underlying type of the value being iterated over. So Russ Cox realized that the function type is not being used. So right now, if you have a function, and you say "for range f", that's an illegal call, because f is just not the right kind of type to pass to a range statement. And so based on that, he came up with the idea of "Alright, well, what if we have a function, and the function will yield the values that need to be iterated next?"

So it's a little bit funky to look at, when you see the code. It kind of bends your mind a little bit, because you're taking a function, and returning a function, and getting a function back... But when you actually sit down to write the code, it's not so bad.

And so this is the new way that you can essentially just write a little function that returns a function, and now you've got an iterator. So this is really good if you have, let's say, a binary tree, and you want to iterate over the binary tree. Traditionally, if you were trying to write that using methods, and you would have to create like a tree iterator type, and give it a next method, and the next method either returns the value, or there's also like a value method, and you have to keep track of where you are in the tree, and it's pretty complicated... But if you do it as a function, actually the code is pretty simple. You just have to call the yield parameter - so you're taking a function that takes a function - and you just take the yield parameter and it works out pretty easily to write your own iterators.

So I've already been playing around with this for the HTML package. It's not in the Go standard library, but it's in the semi-supported golang.org/x library. There's a nice package for parsing HTML. And so I just wrote my own little iterator to go through the nodes of the tree... And so then once I do that, I can filter out items, or collect all of the things that match some selector underneath it... And it's been really helpful; it's been very useful.

And like I say, it's a little mind-bending to get used to, just because there's functions returning functions. But once you get used to it, it's pretty handy. And then it lets you build up libraries that will take an iterator, loop through it, collect it... You know, do all those functional things that you're used to from languages like Haskell, or Python, or JavaScript, where there's a little bit more of the functional language influence than there is in Go.

**Ian Lopshire:** I've also been playing with this a little bit, and I kind of think one of the killer features here is you can still use the return, the continue, the break, like you would normally in your code. And those method-based iterators - it breaks all those semantics; you have to kind of jump through hoops. And I think that's what I'm most excited for, is you can still just program like it's a regular range.

**Carlana Johnson:** Yeah. So I've been looking at some of the libraries for working with iterators, and I do wonder... So a lot of languages have, map, and filter, and reduce... And I do wonder, do we even need to use those if we're just looping over the variable? A map is just adding things to a slice - is it really going to be shorter to use a functional map versus a for loop? Especially, you know, a for loop is a little more powerful; you can continue, you can break... It lets you do things whichever way you want to.

So yeah, I think it's pretty exciting. It's something that you could do before in Go, but now you can compose it in a way that you couldn't before. You can build libraries that have a standard iterator type that they expect to receive, and a standard iterator type that they can put out and other people can consume... So yeah, I think it's going to be something that, assuming the experiment is accepted and added to Go 1.23 or 1.24, I think it's going to be -- basically since generics, it'll be the biggest change to the nature of using Go. And I think it'll be a positive one.

**Johnny Boursiquot:** \[00:18:08.29\] It's interesting watching how the language is now evolving, finally, taking more advantage of generics... A full like four versions later... \[laughs\] With generics being out in 1.18. This is 1.22. Obviously, there was some stuff in 1.21, and even I think maybe a handful of things in 1.20... But yeah, you're starting to see generics sort of find its way into more of the standard library and how the language works... Which is kind of cool.

**Carlana Johnson:** Yeah. I think we said on the last "What's New in Go episode that it was like a deliberately slow march. That there was this idea of "Let's roll out generics, and we'll roll out all the generic packages at the same time." And then before that happened, there was like a pause, and they said "Well, once we add it to the Go standard library, we're never going to be able to take it back. We have to support it essentially forever. So instead let's just take a breath... The third party packages are pretty easy to add to go now with them. You know, go mod... So let's go ahead and put this external, and then we can add it to the standard library after everybody's comfortable, and we've had some real-world experience." And so at this point, the real world experience is in, and so now we're starting to see more and more generics added to the libraries. And I think the iterator is actually going to be something that unlocks even more.

So for example, there's a containers list package in the standard library, and it's not generic. It just uses interfaces. And so looking at it, it's pretty obvious that you would want to update it for generics. And I think one reason that hasn't happened is because there hasn't been an iterator pattern so far. So if you have your list, how do you actually get through the items in the list? So now that the iterators look like they're going to land in the next version of Go, then I'm pretty sure you'll see a change to the containers list, either in the next version of Go or the version after that.

**Johnny Boursiquot:** Yeah, which makes sense. So I'm looking at the release notes candidates here to experiment with this. Obviously, you'll have to build your program with a Go experiment flag environment variable to turn on the range func, and then you'll be able to play around with this. But yeah, this is cool. This is very nice. So okay, is there any other surprise looping things coming out in this release? \[laughs\]

**Carlana Johnson:** That's a good question. I think that's all of them. We can just repeat this segment. It's like Groundhog Day.

**Johnny Boursiquot:** Alright. Alright. So no more looping. So what else do we have on the docket here?

**Carlana Johnson:** So speaking of how the standard library is forever, one of the new changes is version two of a package in the standard library. So now there is math/rand/v2. So if you've used go mod, if you've been importing third party packages, something you may have noticed is when somebody releases version two or more of their package, when you import it, you're supposed to import it with a /v2 at the end. And I know this is one of the controversial things about Go versioning... It looks a little bit ugly, it looks a little bit weird, and I think, especially if you're coming in and you're used to Npm, or used to Python or some other language, you might look at this and say "Why do I have to put a /v2 at the end? It's so weird." But it is the Go convention. And I think the reason for it is that way it lets you have both versions be supported at the same time. This actually started before there was an official go package manager; people would put their packages on gopkg.in. Is that right? I'm pretty sure that was the --

**Johnny Boursiquot:** Yeah, yeah.

**Carlana Johnson:** \[00:21:50.14\] ...the website. Anyway, there was just this convention of you would put your code onto this particular code-sharing website, and when you released a new version, you would add .v2 into the name of the code. And so what that let people do is it let them import the old code and the new code at the same time. So if you had something and you were trying to upgrade to the new version, you didn't have to do all of the upgrade all at once. You could do it incrementally. And so math/rand/v2 lets you do the same thing for random numbers. You don't have to go in and say "Alright, I'm going to go 1.22, and all my random code is broken, so I need to do a quick grep for anything where it says rand, and I'm going to find all those places, and I'm going to fix all of the broken code." No, you don't have to do that.

**Johnny Boursiquot:** So the standard library, really the whole v2 thing with math/rand - this is the only place, or rather this is the first... Yeah, probably the only place I can think of in a the standard library where that convention has finally made it in, right? Is there any other standard library package with a v2 in there?

**Carlana Johnson:** There is not. So this is deliberately - they wanted to try it out in one package, and see how it goes. So the rand package - you know, it's important, but it's not the most central package. It was something where they were persistently kind of annoyed that they had picked a bad random number generator, but they couldn't change it, because anybody who wanted a particular sequence to come out has to get the same input. So it was on the list of the Go team's annoyances about Go for a long time. And in fact, I think in one of the recent versions, they made it so that you don't have to seed it; it's now automatically random.

But yeah, this is the first case of using a v2 in a standard black library package, and so hopefully, all the tools will be updated to deal with this. And this opens the door to doing v2s of other packages. So like I was saying before, there will probably be a v2 of containers list at some point, that is generic... But once you do one v2, then it invites more. And you do want to think about like "Oh, what else is in the standard library where we didn't quite get the API right the first time, and if we could do a breaking change, we could make it better?"

**Johnny Boursiquot:** Nice. So from what I'm hearing, does that mean I still have to do the weirdness of seeding, and this and that, before getting my random numbers, or does this v2 fix that?

**Carlana Johnson:** Yeah, v2 of math/rand should be automatically seeded. But it also lets you choose which random number algorithm you're using. I don't really understand anything about it, but there are a couple of different versions of the pseudo random number generation algorithm, and you can pick between them, whichever one is either faster, or more random, or even, or uses less memory... So now you can pick for yourself which one you want.

**Johnny Boursiquot:** Nice. So that's definitely worth exploring. So speaking of oddities, things that we all wish the standard library had gotten right the first time around is the whole ServeMux changes that are coming. I can't tell you how many times I have to do my own path extraction and manipulation, and I'm like "Man, I don't want to have to bring in a third party module to do this. I wish the standard library did it for me." So what's new? What's going to relieve this annoyance was in the next release?

**Carlana Johnson:** So yeah, net/http has always had a built-in server. It's very basic; it's sort of like Express from Node, if people are familiar with that, or Sinatra in Ruby, or Flask in Python... It's just a very simple, routing-based server. But before, one thing that you couldn't do with it is you couldn't tell it "If I get a get request, send it to this handler, and if I get a post request, send it to that handler." And another thing that it didn't do out of the box is if you want to say "Alright, in this path segment, just take whatever--" Let's say I have /api/users/1. So I want to extract that third path segment. Give me the number one, and let me use that, and then I'll process that and figure out which user to serve up. There wasn't a built-in way to do that.

\[00:26:09.12\] And so between those two limitations, a lot of people reached for third party routers. One that was popular very early on was the gorilla/mux. Gorilla, it became super-popular, and then the maintainers couldn't keep up with it, and so they retired, and then... I think somebody actually did pick it up again, but I think the Go team looked at that and said "Look, Gorilla is super-popular because we're not providing these kind of basic utilities that people need. And it's nice that the Gorilla team reformed... But really, we should be just taking this on board, if everybody reaches for a third party router."

So yeah, basically, what it lets you do is to register a route and register it based on the method, so get, post, put, patch, delete, and also register to capture the parts of the address. It also fixes a longtime quirk with the Go server router. So something that would come up is let's say you're making a website and you want to serve something on the homepage. That's a pretty normal thing to do if it's not just like an API server, but it's a traditional HTML server. Well, a thing about the Go server package was once you registered a route on the homepage, it would become the default route for any sub-pages as well, because it routes to whatever the longest-matching path is.

**Johnny Boursiquot:** Right.

**Carlana Johnson:** So if you go to example.com/404, it'll say "Okay, nothing matches for 404, but I do have a match on slash... And so I'll send you to the homepage." And so when you built your homepage, the handler for that, you had to say "Am I actually on the homepage, or did I just get a 404?" And so now, there's a nice little way of distinguishing between those two cases and saying "Okay, I'm going to put the 404 handler at slash, and I'm going to put the homepage at slash with a dollar sign on the end to signify that it's the end."

So yeah, hopefully this should be another one of those things where there's -- I think in terms of education this is going to be great, because you don't have to explain "Okay, now go to gorillamux.com. Now go to chairouter.com. Now go to whatever--" Alex Edwards has a really great book about writing API servers in Go. And for that, he ended up writing his own -- I guess in the version of the book I read, he recommended the Julian Schmidt router, and then he wrote his own router, and I think maybe in the new version he uses his own router. But whatever, if you're writing a book about how to do server stuff in Go, you can just skip that part now and say "Okay, here's how you do it with the standard library, without too much trouble." So again, from an education point of view, I think it's good.

I think if you're in more of a corporate environment, maybe you already are using whatever you're using, and there's no reason to rip it out and to go to the standard library. But yeah, I think for people who are starting new projects, or for people who are writing books, this is going to be something that -- it's just one less thing off your plate; you don't have to make a decision, you don't have to think "What is the best router?" You don't have to Google or ask ChatGPT. Yeah, you can just start using the standard library and you'll be fine.

**Johnny Boursiquot:** Right. This is music to my ears, because a lot of times, nine times out of ten, I don't need a super-fancy, with all kinds of extra bells and whistles, and sometimes I don't need session management, this, that and the other... I just need a simple way of routing to a particular handler, or something like that, so this is great news indeed. I didn't know the Gorilla team was getting back together. Are you getting the band back together? Is that what I heard?

**Ian Lopshire:** I mean, the projects are all unarchived now, which is at least a step in the right direction, I suppose.

**Johnny Boursiquot:** Well, that's good... That makes me feel a little better about are some projects I have that still use Gorilla stuff... Alright, so of course, we do have some contributions directly from you as well, Carlana. Let's talk about those.

**Carlana Johnson:** \[00:29:57.16\] So yeah, I've worked on a couple of different things... I think I teased this in the last episode. So for Go 1.22 I had three things that I contributed. So the first one is something that -- I didn't propose it, I just implemented it, because I could see that it was like a three-line function... So it's always fun, I say this every time I'm on - if you're somebody who wants to contribute to open source, and you think "What's a good Go project that I could contribute?" The actual Go project is a good one that you can contribute to, because there are a lot of these little things where it's like, okay, somebody just has to write a three-line function. And you can be that somebody.

So this is reflect.TypeFor. So the Reflect package is a package in Go that lets you look at your variables and figure out what type they are, and set things, and get things... So this is how, for example, when you use the JSON encoder, you pass in your struct, and your struct could be anything. The Go team doesn't know about your struct. But using Reflect, they'll go in and they'll see "Okay, your struct has an integer field, and it has a string field", and it'll put all of the values where they're supposed to be based on that.

So reflect.TypeFor is just a very quick and easy way of building a reflect type, and it uses generics to do it. You could do this before, using just the basic interface method... But it was a little bit confusing, because the reflect package isn't special; it's just a normal Go package. It's a little bit special in that because it's from the Go team, it knows how the Go internals work... But other than that, you could just write your own version of reflect using unsafe, and going in and examining values that way. You'd be subject to - if the Go compiler team decides to change things, then your package would be broken. But other than that, you could write it yourself.

And so when you are passing something to reflect.TypeOf - not reflect.TypeFor, but reflect.TypeOf - since it's just a regular interface, you could sometimes get the values, they would be going past as an interface, and if the thing that you were trying to pass was an interface, you could lose the interface type and just get the concrete type. So it's a little hard to explain, but this just makes it so much easier. Like, you don't have to think about that. It's similar to the for loop thing, where it's like, alright, before you had to have these caveats, and to understand how interfaces are passed, and exactly what to do if you wanted to get a particular type... And now you just do reflect.TypeFor, and with generics, the right thing will come out.

**Ian Lopshire:** This would have saved me hours earlier this year. Or I guess late last year, doing some SQL stuff. So definitely a good addition.

**Carlana Johnson:** Yeah, it was confusing to me, too. So when I was trying to write something where I wanted to see if something was the zero value or not, I had the same issue of "Oh, how do I actually get the type passed in if it's an error type?" Because I wanted to know if the error is nil or not. And I ended up, I was like "I'm getting a nil-nil, but I don't want a nil-nil, I want an error-nil." Anyway, it was a little bit confusing. And so this just clears all that up, and you don't have to worry about it. So that was like a -- like I said, that was like a three-line function. It was proposed by Josh Bleecher Snyder. He has his own podcast, and if you like Go Time, you might like his new podcast.

**Johnny Boursiquot:** Whoa, whoa, whoa, hang on, hang on, Carlana... \[laughter\]

**Carlana Johnson:** You can listen to more than one podcast, Johnny... He only has two episodes out, so they'll come back to us.

**Johnny Boursiquot:** Fine, fine... \[laughs\]

**Carlana Johnson:** So it was something where it was like a two-line code, and then the testing is of course like ten times longer, just to make sure that it's covering all the different scenarios. So another thing that I worked on for Go 1.22 - this one that I did propose - is slices.concat. So this concatenates slices, and concatenate is just a fancy word for puts together. Slices.puttogether.

**Johnny Boursiquot:** I feel like I've written this a dozen times in programs... \[laughs\]

**Carlana Johnson:** \[00:33:53.25\] Yeah. If you have a bunch of slices and you want to join them, it puts them together. So actually, I wrote a blog post about this, and I started and I was like "How am I gonna write about this?", because it's like a very basic function. And then I started writing it, and I ended up getting to like 1,000 words, and it's like "Well, how am I -- oh yeah, because there's actually a couple of different little tricky bits to this."

**Johnny Boursiquot:** Wow...

**Carlana Johnson:** So one of the tricky bits about slices.concat... Well, let's see, which one do I want to do first? One of the tricky bits is why does it not have a destination argument? So if you're looking at some of the other items in the slices package, the way that they work is the first argument will be an existing slice, and then the other arguments will just tack stuff onto that slice. And so if you're thinking about slices concat, you might think "Well, sure, the first argument could be a destination slice, and then we'll tack all the other slices onto that destination." And that's how I proposed it at first, but when we went to implement it, we realized that that actually creates a problem, because if the slice that you're trying to append to is the same as one of the slices that you're getting your values from, you can end up clobbering your own slice, and things will go out of order, and it'll get really confusing... And then the optimizer can't optimize it... And so that turns out to be a problem. And something you wouldn't necessarily think about.

The other tricky bit to this is when you read the code for it, it has a seemingly redundant size check where it first goes through all the slices, and it sees how long they are, so it can build one big slice to paste them all into, to copy them all into. But when it's doing that, it says "If the size is less than zero, panic." And you might say, "How could the size be less than zero?" But the answer is if you have more than the number of integers in your slice... So if you're on a 32-bit system, this could happen. If you're on a 64-bit system, this probably will not happen, although I wouldn't put it past like Google, and some of the deep learning people... But on 32-bit systems this would happen a lot, because that's only 4 billion items. So 4 gigabytes is enough to overflow. But what it does is it looks and sees if the number has gone over to negative, that means that there are so many items that it's overflowed. And so there's just a quick check in there. And I think that is something that - Johnny, you were saying you've written this a million times, but I bet when you wrote it, you didn't check if there were more than 4 billion slices being appended.

**Johnny Boursiquot:** \[laughs\] Probably not.

**Ian Lopshire:** Oh, I'm sure he didn't.

**Carlana Johnson:** Yeah. So that's one of the nice things about using the standard library... In this particular case, I thought of it myself, and I added it in... But anytime you're writing anything, there's always that little corner case that you might not have thought of... And so it's nice to use the standard library, because even if you don't think of it, somebody will hit that bug for you, and then it will get merged into the next version of Go.

**Ian Lopshire:** It feels like we're transitioning a lot away from like that slices trick page...

**Carlana Johnson:** Yeah...

**Ian Lopshire:** You know, that wiki entry...

**Johnny Boursiquot:** I remember that page... I had it bookmarked.

**Ian Lopshire:** Same. And I think that can only be a good thing for Go.

**Carlana Johnson:** Yeah... The old slices trick wiki page - it was something that you would have to return to every once in a while, where you're like "I'm filtering in place. What's the best way to do that? Is there something that's shorter?" And now you can just use slices.delete func and it's fine.

**Johnny Boursiquot:** Right. Oh, the most common one was "I need to remove the third item from this list." \[laughs\] I could never remember "Where do I put the colon? What am I doing with my life?" It was ridiculous. Yeah.

**Carlana Johnson:** So then the third thing that I added to Go 1.22 is cmp.Or. And this one - it's one where I think it's on the surface; I think most people are going to read through the release notes and not bother to read about cmp.Or. But if you know that it's there, it's actually the one that you're going to use the most... Because I use this all the time.

\[00:37:47.03\] So the backstory of this is - you know, I'm always in the Go issues, and I'm always proposing things. And at one point I proposed "What if we have the ?? operator?" And what it does is it will return the first nonzero value. So let's say you have two strings, and the first string is maybe from a user, or it's from the environment, and you don't know if it's empty or not... And then the second string could be a default value that you'd like to fall back to. And so I had that proposal, and people were kind of lukewarm on it. They're "Do we really need a whole operator for this?" And I think it was Ian Lance Taylor who said "You can just write this as a generic function once we add generics", because this was several years ago before generics existed. And I was like "Actually, yeah, if we had generics, I could just write this as a generic function."

So what I ended up doing was writing it as like a string helper. And so I just wrote strings.first, or stringx.first, or stringutil.dot first, whatever I called my string package... And I found that I used it like all the time. Basically, anytime I have strings from a user, I'll say "Okay, here's the value from the user, and if it's not that value, then try this one." And sometimes you'll even have three, and you'll say "Okay, it might have been an environmental variable, it might have been something that they passed on the command line, and if it's not either of those, then here's the default value." And so you end up using it all over the place.

And so cmp.Or, it's just that idea of - it compares the values passed in, and it returns whatever the first one that's not the zero value. So if you have strings, it will return the first string that's not an empty string. If you have integers, it will return the first one that's not zero... It has to be a comparable type. So unfortunately, this doesn't work for anything that's not comparable. And I have another proposal to try to loosen this restriction, but it hasn't gone anywhere yet. So for now, it just says that. But it is pretty handy... And in fact, one of the things that it's handy for is if you're doing a comparison func and let's say you're doing one of those three-way comparisons, where you return minus one if the value is smaller, and you return positive one if the value is bigger, and you return zero if the values are equal... There's cmp.compare already which will do that. But if you want to compare a struct that has several different fields, now you can compare those fields together by stringing together the Or's. So if you do cmp.Or, and then do cmp.compare the first field, the second field, the third field, it doesn't shortcut, unfortunately, so you don't want to do it for really big comparisons... But if you're just saying "Okay, compare these two structs, and look at the first field..." Let's say you have something and it's like the price and the distance, and whatever else... So I want to sort it by price, and then if they're the same price, then sort it by distance. And then if they're the same distance, then sort it by first name of the person who ordered it. Now you can do all of that just in a nice little tidy package using cmp.Or.

So like I said, this is a utility that I've been using all over the place in my code. Basically, anytime I have strings, I end up doing stringutil.first. So yeah, I think this is one people are going to sleep on. But if you know it's there, it's the hidden gem of 1.22.

**Johnny Boursiquot:** Yeah, I can definitely see myself using this. I think you gave some examples there... Like maybe checking for an environment variable, and if it's not set, then have a fallback... I mean, I can see myself using this all over the place. Really cool.

**Ian Lopshire:** Yeah, as an avid coalesce user, big thumbs up on this.

**Johnny Boursiquot:** \[laugh\] Nice, nice. You're showing your SQL roots... So a lot of folks may not realize, but the slices stuff we were just talking about, that's a package, a CMP package you were just talking about; I'm not sure -- how do we pronounce that?

**Carlana Johnson:** Oh, it's Go, so probably yeah, we have to have a crazy pronunciation... The FMT package is not FMP, fumpt... So I guess - yeah, CMP would have to be...

**Johnny Boursiquot:** Exactly.

**Carlana Johnson:** I'm gonna say that.

**Johnny Boursiquot:** Compt?

**Carlana Johnson:** You guys said it. I didn't say it.

**Johnny Boursiquot:** \[00:41:50.29\] \[laughs\] Oh, boy... Yeah, you say CMP... I usually like say CMP, but I figured hey, we gophers first like to come up with our own pronunciations with things. I think we have a few more minutes, we can dive into some stuff here... But a lot of this, some of the new things - obviously, we don't have enough time to cover everything that's new. There's a ton of things. I'm looking at the release notes here that we're not going to have time to cover; maybe we'll have a second part of this episode, because some of this stuff is actually quite interesting. But as far as the standard library, some of the things that folks may find useful is that there's some additional stuff on the net/http package in terms of serving files, in transport and whatnot... Do we have a few moments to touch on those? What's the gist of some of those new capabilities?

**Carlana Johnson:** Yeah, so... What version was this at? I think it was like 1.16 that the embed package was added... Do you remember?

**Johnny Boursiquot:** Yeah, that sounds about right.

**Carlana Johnson:** I was on the show, so I should remember... But they added the idea of an io.fs, so a file system. Now, the IO package has always been around, and an IO reader and an IO writer are essentially virtual files. An IO reader is a virtual file that you can read from, and an IO writer is a virtual file that you can write to. So when they added io.fs, it now made it so that you can have a directory of files. And so this has been really handy... One of the things you can do is you can embed a whole virtual file system into your Go program. So you could have like a bunch of templates, or a bunch of assets, and they could all get packaged up into your Go program, and you could serve them up. But until now, to use them in net/http, it was a little bit awkward, because you had to adapt them... And there were a few little gotchas you had to do when you were adapting it to get the modification time right, and stuff... And now it's just built right in. So if you, say, are building a web server, and you want to serve, let's say, some static assets with your server, you could just have those embedded with embed, you could pass them to Ben Johnson, former guest of the show, you could pass it to his hashing file system, and then you could pass that into the http.certfilefs, and the whole thing will just serve out automatically, and you don't have to do any work to get it all wired up. So I think that'll make things just easier to use, faster... Yeah, and you don't have to figure out some of the corner cases of "What do I do with the mod times?" and all of this and that.

**Johnny Boursiquot:** Those are some premium changes. I'll have to take a peek at those. It's not often I'm serving files from disk in my Go programs... But I have to wonder, do things like Hugo or projects like it rely on these capabilities fairly heavily? Do we have any popular projects that use on these filesystem serving from the net/http library that much?

**Carlana Johnson:** Well, Hugo specifically, it predates the io.fs package. So I don't know if it's been rewritten, but traditionally it used Afero, which was Steve Francia's earlier version of a virtual file system. And so I haven't looked at the Hugo internals to know if they ever rewrote it to use the fs package instead of a Afero, but I kind of suspect that it would be such an amount of work that they'd still use Afero.

**Johnny Boursiquot:** Yeah. I remember using Afero quite a bit when I was basically -- especially in my tests, when I wanna simulate a file system without actually having to write a ton of bits to disk... It kind of came in handy. Yeah, it's -- I remember that package.

**Ian Lopshire:** We used the terms of services, just because they are static, and you don't want to have to deploy them to the server... Just a fun, little use case.

**Carlana Johnson:** Yeah, I think probably most people who are using Go are doing API servers instead of like traditional HTML servers. But I also think the HTML server thing is having a little bit of a renaissance with HTMX, which has been on the JS Party podcast. Am I allowed to mention that one, Johnny, or that's also a rival to us? They're on the same network...

**Johnny Boursiquot:** \[00:46:00.11\] Yeah, it' part of the same network, Changelog... But yeah, we're still better, obviously.

**Carlana Johnson:** Obviously. Yeah. That goes without saying.

**Johnny Boursiquot:** Obviously. \[laughs\] A little sibling rivalry...

**Carlana Johnson:** Yeah, so HTMX is bringing the HTML on the backend back into popularity. But I kind of suspect that the majority of people who are doing Go web work are just doing API servers... But I think this is going to be something that will make it more popular to do HTML servers with go, because it's just one more thing that's built in. We already have built-in templating, we now have the better serve mux, so you don't have to use a third-party router... And this makes it really easy to serve your static assets just right out of the box. So I think it is something that over time will see more popularity.

**Johnny Boursiquot:** Nice, nice, nice. I think this is a good play -- I think we've covered the things that are going to probably affect most people, most of the time. What do you think, Ian?

**Ian Lopshire:** There's one more cool thing.

**Johnny Boursiquot:** One more? Alright, hit me.

**Ian Lopshire:** This is a tiny change, but there's the new generic SQL null type. And the number of times I've implemented that for different types...

**Johnny Boursiquot:** Oh, right...!

**Ian Lopshire:** I love this.

**Johnny Boursiquot:** Yeah, tell us about it, Ian.

**Ian Lopshire:** Yeah, so SQL already had the other null types... I don't know, like strings, ints and times...

**Johnny Boursiquot:** Null time, null string... Yeah.

**Ian Lopshire:** Yeah, So this is just a generic type that can wrap anything, and allow SQL \[unintelligible 00:47:19.13\]

**Johnny Boursiquot:** Nice. That is pretty cool. Yeah, obviously before use the values you have the ability to ask "Hey, is this valid?", before you start using it... Which is a nice little API. That's pretty cool.

**Ian Lopshire:** Yeah. And I don't get an error that says "We can't parse null as a time." So...

**Carlana Johnson:** Oh yeah, null time, that comes up a lot. Actually, this is a good segue into my unpopular opinion...

**Johnny Boursiquot:** Ooh, nice. Nice. Nice. Nice. Nice. So let me play the music, and then we'll transition right over to unpops.

**Jingle**: \[00:47:53.19\]

**Carlana Johnson:** Alright, my unpopular opinion is that 99% of the time you should not, when you're making a database, use a nullable string.

**Johnny Boursiquot:** Hmm... I can see that. What's your reasoning?

**Carlana Johnson:** To give listeners the context first... So the traditional use for a nullable string is they would say "Okay, imagine you're modeling people's names. And people have first names, and they have middle names, and they have last names. But you're not sure, does this person have a middle name or not have a middle name?" And so you can use null, and null represent - now, here's the part that's hard. Does null represent that they don't have a middle name, or that you don't know what it is?

**Johnny Boursiquot:** I don't know. \[laughs\]

**Carlana Johnson:** So I've found that for strings specifically, null is not a good differentiator. So most of the time with strings if you really want to know "Is this value missing, or it should be empty?", then you need to have a separate column that's a bool. And in terms of the data entry, the user interface, it absolutely has to be this, but I think it should also be this on the backend.

So let's say you have your people who are entering the data in, and somebody doesn't have a middle name... If you want to know that they don't have a middle name, there should be a checkbox, and it should check "No middle name." And they hit the checkbox, and now that is saved in the database as "Middle name missing" or "Middle name blank", one of the two. And that will have a checkbox, and it will be understood by the operator exactly what's meant. Versus if you have a null, you're always like "I think that when it's null, that means that their middle name isn't known. And if it's blank, that means that there's someone who doesn't have a middle name. But are you sure...?"

**Johnny Boursiquot:** \[00:50:05.10\] Right. I feel like I've experienced -- I've been in the end user end of this oddity, like in filling out random forms online, and stuff... Some systems will assume that there's three parts to my name. Like, I happen to not have a middle name...

**Carlana Johnson:** I was gonna ask if you either of you guys --

**Johnny Boursiquot:** So I've been forced -- right, I don't have a middle name. So at times I've been unable to submit a form, because the form was telling me "Oh, middle name required." I'm like "Dude, I don't have a middle name... So what do you want me to do? Like put an underscore in there?" I was basically just trying to figure out "What character can I put in here for you to leave me alone? Because you're asking me for something I don't have."

**Carlana Johnson:** Or what if your middle name just happens to be Na.

**Johnny Boursiquot:** \[laugh\] Which I have done. Interestingly enough, it allows me to submit a middle initial with three characters... Which is like "Hm... Whoever built this form?" Validation is not their strong suit.

**Carlana Johnson:** I once was working with some data, and there were some people whose last name was Null... And I'm pretty sure that was really their last name, but I also wonder if it was just like a data entry error. It's hard to know...

**Johnny Boursiquot:** Hard to tell, right?

**Ian Lopshire:** It reminds me of those kids' stories about people with license plates -- there was a guy with a license plate that was just blank, and he'd get hundreds of parking tickets. Because when a car didn't have a plate, the cop would say Blank... And so he'd just get --

**Johnny Boursiquot:** Wow...!

**Carlana Johnson:** Yeah, that's like the people who have 8675309 as their phone number.

**Johnny Boursiquot:** Oh, man. Oh, man.

**Carlana Johnson:** Sometimes you go to the grocery store and they ask you for like the loyalty card, and you're like "I don't want to have to sign up for a loyalty card for this one", and so you try 8675309 and half the time it'll work.

**Ian Lopshire:** It definitely works. At Publix I used to do that all the time.

**Johnny Boursiquot:** Nice. Nice. Nice. For those who missed the reference, that is actually from a song... What is that song? Who sings it?

**Carlana Johnson:** Oh, who sings it? I don't know. But it's "Jenny, I got your number." It says Tommy Tutone.

**Johnny Boursiquot:** Yeah, that's right. Tommy Tutone. That's right, yeah. If you YouTube it, you'll find it. \[singing\] 8675309...

**Carlana Johnson:** Johnny, we're gonna get a copyright strike...

**Johnny Boursiquot:** \[laughs\] See, now you got me going back down through memory lane. Oh, man... Alright. So Ian, I know you've got an unpop.

**Ian Lopshire:** I might be a little bit biased here, because I am a bit of an Apple fanboy... But I think the Vision Pro is cool, and you're not gonna convince me otherwise.

**Johnny Boursiquot:** You think it's cool, huh?

**Ian Lopshire:** Well, I like it. I really like it. It's cool.

**Johnny Boursiquot:** Okay, are you telling me you dropped down $3,500 to preorder?

**Ian Lopshire:** Yes. Yes, I did. \[laughter\] Against my better judgment, but...

**Johnny Boursiquot:** Oh, man...

**Carlana Johnson:** I might ask you to borrow some money after the show...

**Johnny Boursiquot:** Seriously... Mr. Ian \[unintelligible 00:52:50.09\]

**Ian Lopshire:** I was not financially responsible...

**Carlana Johnson:** I think it's cool. I think there's like a 45% chance that it catches on. It does seem neat. On the other hand, 3D is something that has almost caught on maybe five or six times already. There were 3D movies in the '50s, and then they came back in like the '90s, and again in the 2010s, and they had the 3D TVs, there was Nintendo 3DS... There was virtual reality... I mean, there's still virtual reality, but that's kind of happened a couple times... And I think part of the problem for 3D is that a certain percentage of the population can't see 3D. A lot of people wear glasses, and if you're in either of those categories, it can be tricky.

The Apple one is a little better, because they at least let you put your glasses into the thing... But then that makes it cost more. So I don't know. I think this one has like a chance. It does seem cool... But I also wonder if -- I think the success scenario is maybe -- it's like Apple Watch, where... I mean, you see people wearing Apple watches every day. On the other hand, you also see people not wearing Apple watches every day. Versus like a telephone. If somebody says they don't have a smartphone, it's because they're quirky. It's not a thing that you just happen to not have a smartphone. It's like, you're deliberately being quirky if you don't have a smartphone. Like, I have friends who don't have smartphones, but that is a choice that they're choosing to make.

**Johnny Boursiquot:** \[00:54:23.11\] Right.

**Ian Lopshire:** Yeah, I don't think it's replacing your laptop anytime soon. But...

**Johnny Boursiquot:** When I first saw the demo, I was like "Oh, this is so cool. I want one." And then they showed the price and I'm like "Do I really want one?" But then again, it's one of those things where I'm like "Okay, this is definitely for the early adopter crowd." We know that, and we get that. So I told myself "Look... I am interested, but not at that price range." I've still got kids to put through college, and those things take priority.

**Ian Lopshire:** My kids are never gone to college now.

**Johnny Boursiquot:** Ian's like "I don't know about you kids..."

**Carlana Johnson:** "Sorry kids, no college for you... But you can use the Apple Vision Pro when you buy your own glasses inserts and facemask." \[unintelligible 00:55:05.17\]

**Johnny Boursiquot:** Exactly, exactly. I mean, I'm gonna wait till they work out the little bugs and issues, when they can have a lighterweight thing... Because I hear from all the reviews on YouTube and whatnot that it gets pretty heavy after a couple of hours.

**Ian Lopshire:** So do these though...

**Johnny Boursiquot:** I know, those Apple Max headsets - man, they are... I have to take this thing off my ears every hour or so on a regular, because they are pretty heavy. But they offer great sound quality. Same thing with the Apple Vision Pro, I imagine that it will offer a great experience, but not something you're gonna be in all day, every day kind of thing. But it's nice, and it's innovation, and that's cool. It's great to see. But yeah, I think I'mma wait for the v2, the non-pro, non-$3,500 version, if I'm ever going to make that jump. Or I can just come hang out with you, Ian.

**Ian Lopshire:** Yeah, anytime. I didn't buy a new phone this year, so that makes it a little bit better.

**Johnny Boursiquot:** Oh, now you're looking for justification. I got it. \[laughter\]

**Ian Lopshire:** There is no justification...

**Carlana Johnson:** I bought the iPad 1, which was kind of not a perfect product... Like, even at the time, you could tell that it was a little bit heavier than it needed to be, and it wasn't totally perfect. And I guess that was before it was retina. But I was happy having bought it, but it was not $3,500. I don't know everything, it's that's that inflation; the post-COVID inflation. It would have only been like $500 for the headset, but then that inflation kicked in.

**Johnny Boursiquot:** I don't know. I don't think Apple cares.

**Carlana Johnson:** I think Apple was very happy to charge $3,500.

**Ian Lopshire:** The carrying case is $200.

**Johnny Boursiquot:** I know, seriously. Yeah, Apple always -- people will self-select. The fans, the diehards... They know that. At the very least -- maybe this is an experiment for them. They're just gonna say "Okay, let's make the best possible thing we can get. Forget price... This is not for the budget-conscious." \[unintelligible 00:57:10.10\] if you have to ask the price, it's not for you. "But let's put the best thing we can out there, see who buys it, get that early feedback, get that early experimentation, and then come up with something for the masses in one or two years." I fully expect that's what's gonna happen.

**Carlana Johnson:** Yeah. I think if in 10 years there's a version where you just clip something on your glasses, and the battery pack is maybe in your pocket, or it's somehow wireless or something... I could see that becoming really big. I just think this particular version of it, where it's a full headset, you have to put it on your head... It's not inexpensive. I think probably Apple will stick with it. I think it will not be as big of a hit as the Apple Watch even, for this version... But on the other hand, I think if they keep making it for 5 years, 10 years, and then they do make the glasses version, then that'll be like a huge hit.

**Johnny Boursiquot:** Well, we shall wait and see.

**Carlana Johnson:** We'll see.

**Ian Lopshire:** \[00:58:15.23\] When Go version 1.96 comes out we'll chat about it again.

**Johnny Boursiquot:** \[laughs\]

**Carlana Johnson:** That'll have support for really everything.

**Johnny Boursiquot:** Nice. I'm gonna expect a full report, Ian, on how expensive your face feels when you put that thing on.

**Carlana Johnson:** Well, do you guys have 3D TVs?

**Johnny Boursiquot:** Nah, I skipped that generation...

**Carlana Johnson:** Yeah. I bought my TV right before -- my TV at this point is like 11 years old. I bought it right before 3D TVs hit. I haven't bothered to replace it yet. I'll probably replace it in a couple years, with something that's ultra high def... But in the intervening time, 3D came and went.

**Ian Lopshire:** And then the glasses that had the shutters... Did you see this?

**Johnny Boursiquot:** \[laughs\] Like \[unintelligible 00:58:57.18\] Perhaps that is my unpopular opinion... Some of these names are dumb. I skipped the whole 3D TV thing. I skipped the whole Smart TV thing. I just think these names are just kind of -- I mean, there's nothing smart about the television. It's just that rather than buying a standalone Alexa or whatever those things, or an Apple TV, they just baked it right into the software. There's nothing smart about it. It's just the naming conventions. Sometimes I think they dumb it down so much for marketing purposes, just to make it more accessible, or simple, or something... I don't know.

**Carlana Johnson:** I think that was like a combination of consumers didn't want to have to buy a separate box to plug in, and then manufacturers realized that if they connect to the internet, then they can sell advertising data, and reduce their prices. And once the first company did it, they were the cheapest, and then everybody else had to do it to catch up to them.

**Ian Lopshire:** Yeah, you can't buy a non-smart TV now...

**Johnny Boursiquot:** Seriously. Yeah, like Ian's saying, I went on Amazon the other day and I'm like "You know what? What if I wanted a larger flat screen?" We've had the same one in our family for a few years... And even the monitors I use for my day to day work are about the same size as it. I'm like "Okay, if I wanted to have family entertainment on a larger screen, what's out there these days?" I was hard-pressed to find a non-smart, non-integrated, non-IoT-ed to hell TV. I'm like "What happened to a very simple, good-quality flat screen with all these bells and whistles? Can we have those anymore?"

**Ian Lopshire:** You can buy the digital signage versions, nut they're more expensive.

**Carlana Johnson:** Yeah. Because they're not subsidized by selling your advertising data... So that makes it too expensive, and so then you can't buy them. It's sort of -- it's like a paradox.

**Johnny Boursiquot:** But like most things out there, I'm willing to pay extra for the simple thing. This is where we find ourselves in this society - we have to pay extra for the non-big-brother version of things. It's kind of like food at the food market, where you have to pay extra for the stuff that doesn't have like pesticides and things in it... If you want the natural, non-messed-with version of the thing, you have to pay more for it. I mean, this is where we are. So fine, let me pay extra for it, but give me some options. Right now I have close to zero.

**Carlana Johnson:** Yeah. It's sort of the same for smartphones. If you're one of those quirky people who wants to have a dumb phone, I think you can get a cheap Nokia, possibly, but a lot of them are like "Here's the dumb phone that costs $700 and has an E-Ink screen." And you're like "For $700...?!"

**Johnny Boursiquot:** Seriously...! Seriously! I definitely wanted to have one of those things. I'm like "Are you kidding me? This thing costs more than the average smartphone?" To have the dumb version of the thing. Oh my God, this is infuriating. Anyways, I think we -- yeah, there's too many gripes \[unintelligible 01:02:13.21\] We will not stop...

**Carlana Johnson:** This is becoming just like the "Go complain about it" podcast.

**Johnny Boursiquot:** Seriously, seriously. I think we all have a few things we could complain about. But thank you so much, Carlana, for joining us yet again for another episode of "What's New in Go one dot whatever." At this point, it might all be one dot something, because I don't see any two dot zero on the horizon any anytime soon. So thank you for joining, and Ian, thank you for co-hosting, as usual... Yeah, until we bring you back for the next one.
