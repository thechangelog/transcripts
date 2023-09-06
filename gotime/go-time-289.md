**Johnny Boursiquot:** Hello, friends and guests, co-hosts... Yeah, this is your friendly neighborhood Go developer and co-host, Johnny. It's been a while, I've been missing in action for a little bit, but you know, with the release of Go 1.21 I thought it was a good time to sort of swing back by the old farm and see how everybody's doing, and invite our good old correspondent Carl Johnson to come back and talk to us about what's new, as he usually does for virtually every release of Go since the last four or five, or something. I think this is a habit now, Carl. You're now forever the correspondent, the new Go release correspondent. So welcome, Carl.

**Carl Johnson:** Thank you. I'm here with the breaking news about the new releases. I get to come back once every six months.

**Johnny Boursiquot:** \[laughs\] Nice. Nice. Also joining me for this exclusive recording is Kris Brandow. How are you doing, Kris?

**Kris Brandow:** I'm doing alright. Nice day to record. Slightly overcast, but still pretty nice out.

**Johnny Boursiquot:** Here too, here too. Yeah, the whole forest burning, whatever you call it, that whole smoke thing coming from everywhere - it seems like the world's on fire, honestly. There's always something going on these days.

**Kris Brandow:** Yeah. Literally on fire these days.

**Johnny Boursiquot:** Quite literally. But we're not here to talk about sad things, we're here to talk about happy things. Go has a new release, as we do every six months in the Go community here... And yeah, we're here to talk about Go 1.21, which honestly seems like a pretty big deal to me. I went through and read the release notes, and I was like "Wow! They're using generics for real for real now in the standard library." There's tool improvements, there's language changes, there's new built-ins... As a whole, lot of stuff. So where to start? Carl, what is the most important part of this release for you?

**Carl Johnson:** \[00:06:14.12\] For me, I would say this is a very generic release...

**Johnny Boursiquot:** Here we go... \[laughs\]

**Carl Johnson:** Probably in the long term, actually, there'll be other things that are more important in a way, because the generic stuff kind of could have been done anytime... But on the other hand, sort of day to day, it does make a difference that the generics stuff has come in. So for people who have been paying attention, Go generics were added in Go 1.18, which is now about a year and a half behind us. So it's been in there for a little while. When they were working on adding generics to Go, at one point it was sort of planned that they would just release all these generic packages alongside generics, so that all at once it would come out, and you could do all these things to your slices, and maps, and stuff like that... But shortly before the release, there was a decision that "Whoa, wait a minute... Let's try to get some real world experience before we just release some packages to the standard library. Because once we add it to the standard library, we're really stuck with it and we can't change it anymore because of the Go 1 guarantee." You can add new functions, but you can't take the old ones out. Pretty much there permanently. So what they did instead was they released an experimental package; it was at golang.org/x/exp. And so you could go there and download these generic packages for maps and slices. But finally, with Go 1.21, it's been added to the language officially, so you don't have to go import any third party packages or download anything; it just comes along with the language automatically. And I find it's very convenient.

Before generics, definitely day to day, it wasn't like too much trouble; you didn't run into it very often. But now that it is there, it does sort of come up where it's like "Oh, yeah, it would be really convenient to just look at this slice and see if anything in the slice matches whatever it is I'm searching for real quick, and not have to write a whole for loop just for this, or have a utility folder that just has this defined for whatever my type is." So yeah, it just makes life a little bit more convenient just to have this stuff built into the language now. So that's definitely something I'm pretty happy about.

**Johnny Boursiquot:** I was very happy, especially about the slices package now leveraging the generics stuff. As we all kind of knew, it would, eventually. But the implementation is smooth; I mean, you're gonna be using the functionality and not even realize you're using generics, which I think for me is the biggest value. The language itself, how you write Go is not changing; you're just simply calling a function and it does what's expected, and it leverages the capability under the hood. So to me, the addition -- like, slices the package now is akin to the slicing and dicing I do with the strings package. I'm always reaching out for it to do some slicing and dicing, and finding things at certain positions, and this and that, whatever it is... Now I have fewer loops to write if I'm trying to find something in a slice, or if I'm trying to compact a slice, which actually, I was pleasantly surprised, it was a method added into the slices package. There's this notion of compaction, sort of removing duplicate items in there... I think there's some specifics around that, but it's got a lot of utility functions that are in there, that are like "Yes, this is exactly what I was waiting on."

Could they have written these things without generics back in the day, or whatever it is? Yes. People just wrote their own sort of utility packages and things to do that, and there were plenty before this... But now I think you're gonna see a reduction for these kinds of utility packages out there... Which I think is a good thing.

\[00:10:02.13\] I think one of the things that we're definitely gonna be talking about, also part of the standard library, is the slog, the s log, however you want to pronounce it, sort of expansion of the log package. Personally, I'm happy that it's in there, but my immediate reaction was like "I have to give up logrus? \[laughs\] What am I going to miss?" I had this sort of immediate reaction, because I've been using logrus for quite a while, and other people have their own sort of favorite packages, too... There's zap, there's a few out there that people have gotten used to... But now it has this one in the standard library proper.

Now, I like the fact that I don't have to bring a third party package into my world now, right? Bar none. I absolutely love that. But that means it's gonna take getting to know a new API, a new sort of way of doing things a little bit. The output may not change, but you're gonna get to learn how to use some new tooling that perhaps you've sort of been accustomed to using different things. What do you think about the -- obviously, we didn't touch on some of the built-ins; we're gonna come back to the built-ins... The min, max, clear - we're gonna come back to those, but I want your opinion on the new logging capability.

**Carl Johnson:** Okay, you want to go to logging?

**Johnny Boursiquot:** Yes, let's go to logging. And then - hey, we can always come back to the other... I mean, logging is --

**Carl Johnson:** Johnny, do you always eat your dessert before you eat your dinner?

**Johnny Boursiquot:** You know, I'm one of those people - when I was growing up as a kid, if my mom put food on a plate and said "You're not allowed to eat your meat until you've had your vegetables..." I've been trying to -- now that I'm a grown man, I don't have to do that anymore. Now I eat my meat first. So this is what we're doing, we're gonna eat this meat first. Let's talk about the logging, and then we're gonna come back to the other stuff.

**Carl Johnson:** Okay, we can switch over to slog. So slog is a new package... So Go, maybe just for background, has always had a package called log, and it's just a very simple logger. It really -- I think all it does is like add the timestamp to your logs. I guess it can also add the file; the file and the line number of where the log was produced. It can optionally add that. But yeah, it's just super-basic. It didn't have any levels; the only level was fatal. So if you needed to just make a quick CLI where when something goes wrong, you just want to print out an error message, you could do log.fatal, and that would kill your process and print out a little unhappy message. But that's been it. That's been the basic Go logger. And it's definitely -- it's been simple and usable, but I think a lot of people have more complicated needs, and so there have been a lot of third party logging packages over the years. So you were saying logrus, or log r us... Is that how you pronounce it? Zap... Now let's just make up some fake log names for people to google and not find... \[laughter\] There's the old Woody, Woody the logger...

**Kris Brandow:** I mean, there's the classic log15. Can't forget that.

**Carl Johnson:** That one's real, isn't it?

**Johnny Boursiquot:** Log15?

**Carl Johnson:** I think that's real...

**Kris Brandow:** Oh, yeah, yeah. It's real, it's real.

**Johnny Boursiquot:** Wait, didn't we also port a famous Java logging library, log4j?

**Carl Johnson:** Yeah, there's log4g...

**Johnny Boursiquot:** Log4g... \[laughs\]

**Carl Johnson:** So the basic logging has been in there forever. Recently - I think his name is Jonathan Amsterdam; he goes by JBA on GitHub... He made a proposal to add a new logging package to Go, that would be structured logging. So a lot of these very popular logging packages, the way that they work is it's not just like you log and it dumps out a string, but you log and it structures the information into basically keys and values. So one of the very basic keys is time, and it's time equals whatever, and there's your timestamp. Another is level; level equals warning, or level equals info, or level equals error. The message. So message equals whatever. But you can also have more complicated logs, where you're logging particular things.

\[00:14:10.00\] Let's say you made a request to some server; you could say "server host name equals, host name equals example.com." And then you could say "duration of the request is 37 milliseconds", and you can say this and that. And when you have that structured logging -- you know, as an operator who's just like looking at things scroll by in your window, it's okay, it's not a big difference, but it's nice to have. But I think when you have a larger corporation or enterprise and you're putting all these logs into some sort of a store, like Datadog or somebody else, Kibana, once you have all these logs in a centralized place, if it's structured, then you can search it out and you can say, "Okay, show me every request to example.com, get the duration for every request to example.com, give me a histogram of that, show me what the p99 is, let me know when it's going too long and when it's going to short", and it gives you a lot of capabilities that otherwise you wouldn't have.

So people have been using third-party packages for this for a long time, so now that it's come into the standard library, I think a lot of people are going to stop using third party packages, because they can get their job done with just the Go standard library.

One thing that's nice about the design of the way that this has been added is it's not totally encapsulated. So it comes with a log formatter that will format your log lines as JSON, so like curly brackets and colons and quotation marks and all that normal JSON stuff. But you can also log it as a text format. It's called the logfmt format, or something, but it uses equal signs, and it's relatively easy to read just with your own eye... But it's pluggable. So you can plug in whatever you want. So if you're using a particular logging host provider, you can build a \[unintelligible 00:16:04.18\] and say, "Alright, well, my log provider, they accept logs in this binary format. And so we're going to like automatically build that binary, and we're going to upload it to whatever server it is, we're going to post it as a protocol buffer, or whatever." So it's very powerful, very capable; it's the best of Go, where you have these interfaces that - you can extend them pretty easily. And as long as you just implement these core handful of methods, then anybody can build on top of it.

So yeah, I think if you're in the DevOps world, this is definitely something that I think is going to change how a lot of people do things, just in the sense of now you can plug into this. And people can build adapters so that if you're still into using logrus or whatever, you can build a layer where, okay, you call logrus and then it calls into the slog package, the structured log package, and then that sends it off to whatever your final destination for your logs is. So it's very powerful, it's very interesting.

**Kris Brandow:** It kind of feels like this might become kind of -- like with the database SQL packages, where it's like oh, there's this core... We have things like sqlx, or sqlc, and then you also have all your drivers and all of that. So it feels like it's building that sort of ecosystem, but for logging.

**Carl Johnson:** Yeah, definitely.

**Johnny Boursiquot:** So now that we've had my dessert, let's continue on with more standard library stuff, and then we're gonna come back to the core language stuff. So we touched on -- we mentioned the slices stuff, but the maps also saw some additions for some common operations, also leveraging the new generics capabilities. What are some of your favorite new things in the maps package?

**Carl Johnson:** \[00:17:53.09\] Well, to be honest, my favorite thing got cut in the last second... \[laughs\] So if you go to the experimental maps package that they had up online before they added it to the standard library, one of the functions was called maps.keys. And it was just real stupid, simple, you call map.keys, and it gives you a slice with all of the keys in the map. And it was definitely something that you could have done before; it wasn't going to kill you. But you know, it took it from being three lines down to one, and just like one little command... Just so much faster and easier to type map.keys, versus --especially if you have Go imports turned on, and it's automatically adding the imports and stuff for you. That's so much easier to type than just \[unintelligible 00:18:38.08\] Okay, yeah, you can do that; you can rattle it off pretty quick, but I'm a very slow typer, so...

**Johnny Boursiquot:** You don't get to have that. You've got five functions now. Clone, copy, delete func, equal, and equal func. That's it.

**Carl Johnson:** Right. So keys was dropped at the very last minute, because right now they're working on a proposal for the next version of Go to add iterators... So if you're familiar with that from other languages, like Python and JavaScript and C\#, and I'm sure C++, and every other language in the world... It's just the idea that you have something that returns elements in a list one at a time, or elements in a potentially infinite sequence one at a time. And so instead of map.keys, returning the slice of all of the elements, all of the keys at once, it would return one key at a time...

**Johnny Boursiquot:** Which is an optimization, right? You can think of it as an optimization.

**Carl Johnson:** Yeah. So basically, at the last minute they were like "Well, wait a minute, we might add iterators in the next version, so we don't want it to be that map.keys is like the slow version, and you have to call it map.quickkeys", or something, or like \[unintelligible 00:19:53.20\] or something. I look forward to that. I'm sure I'll be back in six months to tell you that keys is back, and I'm celebrating with all my friends out in the street.

**Johnny Boursiquot:** \[laughs\] Nice, nice. So the last one I want to touch on on the standard library was cmp, or comp, or however you want to call that package. I've seen that package before from -- I think I've imported, there's a Google Go package called cmp. I've used that before in my tests, actually, to do comparison of different things. But there's a cmp package proper in the standard library now. Where am I going to use this? Obviously, based on the name, it has to do with comparison. Tell me about it.

**Carl Johnson:** So the new cmp package - yeah, I think it's definitely related to the Google cmp package in the sense that they're like both doing comparisons. That one was really focusing on like test comparisons, where you're trying to say "When I run this test, is the value that I get out the same as what I expected, or is it close enough, or is it off in some little ways?" And I think it would even print out the fine difference of "Okay, on line 37 of this huge object two characters are different", and they would show you exactly what it is.

So the new standard library cmp is much, much, much simpler. It's basically - is it two or three functions? I need to look it up. But one of the things is cmp.ordered, which is a generic constraint. So generic constraints are just the idea that when you're writing a generic function, you can tell it what kinds of things it can take. So cmp.ordered just means "Alright, I can take anything that you can use with a less than operator." So strings, numbers, floating point numbers, that's about it. But there's a lot of different kinds of numbers. So ints, uints, int32, int64... So all of those now conform to the cmp ordered generic constraint. And then you can do cmp.compare, and that will compare two ordered things to say which of the two is bigger. and there's also cmp.less. Okay, so it is three things all together.

**Johnny Boursiquot:** It's interesting that the type ordered - I've seen that before, in the now hopefully defunct constraints package... I know you have some pet peeve about that...

**Carl Johnson:** \[00:22:13.26\] I have a pet peeve about that. So again, going back to the idea that -- when generics were being worked on, there was one school of thought of like "Okay, we're doing generics. Let's just add all this stuff to the standard library and let's go." And that definitely is appealing. But the Go team held off. They're like "Okay, let's see how it is in practice." And one of the packages that they worked on experimentally was called constraints, and it just had like a bunch of different generic constraints. So constraints.ordered is the same as the new cmp.ordered. But they also had constraints for other stuff. There were like integer constraints, and float constraints, and this and that... But after generics came out, I opened an issue on the Go issue tracker and I said "Let's just drop the whole idea of constraints, of the constraints package", because basically, the only constraint that you end up using is the ordered constraint. And other than that, you don't really use it. So do we need like a whole package just for this? And so that was basically the issue I opened.

In the end, they basically -- they didn't quite do what I said in the issue, because I said to add it to sort, like so it'd be sort.ordered, and instead, they made a whole new package... But I still feel vindicated, because the constraints package didn't make it in. So my contribution to Go 1.21 was that they didn't add a new package.

**Johnny Boursiquot:** A non-addition...

**Carl Johnson:** A non-addition addition... So yeah, I saved Go from another -- I don't know how many lines of code that would have been. 20 lines of code that they didn't need.

**Johnny Boursiquot:** Right, right. So let's swing back around to some of the built-in stuff. Kris, have you ever wanted a min and a max built in?

**Kris Brandow:** I think so. I think there's been a number of times that I've wanted to be able to just be like "Give me the smallest thing without having to sort or iterate through a slice myself, or a map." But I am personally much more excited for the clear function, because I have had to clear lots of maps before... And it's just kind of annoying to have to go through and be like "Let me just write a little loop to take care of this." So I'm very excited about that. But I am excited about these min and max functions. I think they will come in handy. Maybe not all of the time, but at least some of the time... Which is how I feel about generics in general.

I'm very happy with this package in general, because I feel like my worry when generics were first being talked about was they'll be sprayed everywhere. And it seems like we've been very good at being reserved with this, and being very judicious with our usage of generics, and putting it in the right place, and being very careful with how we add them, especially in the standard library. So I think it's little stuff like this just feels very elegant. Small little quality of life improvements. You're not getting rid of a ton of code by getting rid of min, or max, or whatever, but you might go a little bit more concise that way, and I like that quite a bit.

**Carl Johnson:** Yeah. With min, max and clear, for all three of them, part of the motivation is that floating point numbers are the devil's numbers, and they will try to eat you whenever you aren't looking at them... So with a map - you can have a map, and normally your maps most of the time, the key will be like a string, or something string-like, and then you have the values in the map. But you're allowed to have a map from numbers to other things. So you can have a map from ints to whatever, and that makes sense. That's fine, too. But the problem comes when you have a map from floats to something else. So that's totally legal in the language, there's nothing stopping you from doing it, but with floating point numbers there's such a thing as not a number, or nan. So if you do certain operations in floating point, it just like -- it gives up, and instead of returning a number, it returns not a number. I don't think it's if you divide by zero, because I think that returns infinity. But anyway, if you do the wrong thing with floating point, suddenly it gets mad at you, it returns not a number, and then not a number basically glues up everything else that it touches.

\[00:26:15.06\] So if you have a slice, and you want to say, "Okay, what's the biggest thing in this slice?" Well, if you have a nan in there, suddenly the whole thing just becomes moot, because the biggest thing is not a number... And then if you have a map, you can have the nan become a key, but then when you go to delete the key, you can't delete it because the nan is not equal to itself. And so then you try to delete it, and it gets like stuck... And your map is just filling up with more and more not a number numbers.

So basically, clear is the only way... If for some reason you are using a map from float to something else, you probably shouldn't be doing that, or you should examine your life choices if you're doing that. But if you are doing that, it's possible that these nans will get like stuck in there, and the only way to get them out is with the new clear built-in.

**Johnny Boursiquot:** You're making me hungry with all this nan talk... I'm lik "Nan, nan..."

**Carl Johnson:** Yeah. \[unintelligible 00:27:10.07\] after this.

**Johnny Boursiquot:** \[laughs\] Okay, the last thing I want to touch on on the built-ins... Well, we had a whole episode recently on Go 1.21 generics in particular, but maybe we can briefly touch on sort of the changes that had been clarified with the type inference in the spec as far as the whole generics thing is concerned, right? With the type inference. How can we briefly summarize that?

**Carl Johnson:** I think for the most part, if you're using it, you won't really notice the difference, because it should just work. So for the most part, when you use generics in Go, it will do some very light, very mild type inference of like "Okay, you've got this input, and that, and so I can tell from context that you must want this to be an int, or to be this particular struct, or whatever." And so they've just slightly improved it now, where it also works for when you have one generic function that's calling another generic function... So specifically, if you're doing like the slices package, with the cmp package, and you're like "Okay, I want you to sort this according to this cmp call", it should all just like work automatically, and you don't even notice that it's different or better. But if you took that same code and you brought it back to Go 1.20, it would say "I can't tell what type you mean here. Please add a type annotation", and you'd be like "Oh, okay, whatever." So it just saves you a little bit of physical typing, as well as -- how do you call the other kind of typing? Also mathematical typing. It saves you both kind of typing. But for the most part, you shouldn't notice it. It should just like work, and you don't have to think about it.

**Johnny Boursiquot:** Right. Right. When I saw this in the release notes, I was like "Hm... It's about time." So what I'm referring to specifically is - if you've ever worked with goroutines inside of loops, especially as a newbie, you've probably run into the whole loop variable closure bug... And you're wondering what the heck is going on. But yeah, it seems like there's some initial work around sort of preventing that from being a gotcha for people who don't know how to handle that particular case. I think there's a flag now you can sort of turn on, or something...

**Carl Johnson:** So the background for this is that - yeah, this definitely bites everybody at least once, and I think with some things you get bitten once and then it just never happens again... But with this one, it's still like every six months or so you get bitten by it again... \[laughter\]

**Johnny Boursiquot:** You forgot.

**Carl Johnson:** \[00:30:00.12\] So the way that for loops work in Go is that when you say \[unintelligible 00:30:03.27\] whatever, that i is a new variable, and it exists inside of the loop, but not outside the loop. And it's like, okay, that part is fine; that makes sense. But the problem is it only gets created once per loop. So the whole loop is just reusing the same i every time. And it turns out that this causes bugs when you're building a closure, or if you take a pointer inside of the loop, you end up taking a pointer to the same thing, or closing over the same variable every time... And so you'll do this thing where you'll be like "Okay, I'm gonna write these functions, and I want them all to, let's say, take one element in a slice, and then do something to it." And then you go through and it's like "Oh, actually, they all took the last element in the slice." And you're like "Why are they all taking the last element in the slice? This is crazy." And it's like "Oh, it's because of this bug."

So Go has this really strong emphasis on backward compatibility, and like not changing things, and make it so that if you're writing code today, it'll keep working tomorrow, and you don't have to worry about the language changing under your feet... So in general, they haven't wanted to change the meaning of existing things in the code. But for this example, Russ Cox actually went through however many millions of lines of code that Google has inside of their internal private repos, he looked at a bunch of public repos... He got his hands on as much code as he could, and he was like "If I made it so that by default it just creates a new variable every time you go through the loop instead of just once at the top, would that break code?" And he couldn't find any examples of code that wasn't already buggy, that would have a new bug because of it. And he's like "Okay, I haven't found any examples of this creating a bug, and I know from experience that not having this routinely creates bugs... So let's just go ahead and try it out."

So in Go 1.21 it's not the default yet, it's still a Go experiment... So if you set the go experiment equals loop var setting, then your program can try it out. And if you run that, and you run your tests, and you're like "Oh my God, my test was passing before, but now it's not", then that means that you must have been like the one person in the world who had a bug with this being the other way around... But for everybody else, it should just save you the next time you accidentally run into this particular issue.

**Johnny Boursiquot:** And when this finally makes it into whatever version it makes it into, even the existing code that redeclares the variable inside of the loop won't break; it'll just continue to work as is, until you're ready to just remove the new loop variable.

**Carl Johnson:** Yeah, it's one of these features where it's gated behind the go.mod file. So you have to say in your go.mod file that you want to use the new features of Go. And so if you have an old program that is relying on the bug to work somehow, it won't just silently upgrade itself.

**Johnny Boursiquot:** Right. And probably govet will probably tell you -- if you're using a version that does support the automatic loop variable declaration, govet will probably tell you "Hey, you don't need to have this extra declaration in your code", which is nice.

**Carl Johnson:** Yeah. There's some way you can run your tests where the test itself will print out something where it's like "Hey, this result changes based on whether or not I have the go loop variable experiment on. And so you can run that now and it'll print out all the spots where it's like something looks a little bit different with it turned on versus not turned on.

**Kris Brandow:** I was gonna say that if you turn on the loop var thing and your tests fail, it's probably because you were using it within your tests, you had some nice little loop for table test, and you just weren't running all the other tests, because you didn't know, because you weren't passing in the right things... I feel like that's probably more likely than you're actually using this really weird component of Go for something useful.

**Johnny Boursiquot:** \[00:34:03.15\] So let's switch gears to some tooling. It seems like there's a -- well, there's a couple things I want to touch on. The PGO, which was introduced in the previous stage, the previous version of Go, now has gone GA. I must admit, I haven't had a chance to dive deeper into profile-guided optimization. What's the 15-second value prop here for PGO?

**Carl Johnson:** So I also haven't used this in production yet... The basic idea is that when you run the Go compiler, it's very fast, but part of how it's very fast is it's not doing super-optimization. It's just sort of giving everything a quick once over, and then basically that's good enough. But with profile guided optimization, what you do is you build your binary, and then you run it in production for a little while. And then while it's running in production, it writes out a little thing saying "Oh, this loop, I did it a bunch. It would be better if this was inlined. And this loop over here, it'd be better if I did it this way, or that way, or if I move this variable so that it's closer to this other one." And so it'll just save all that stuff into a thing, and then you take that file and you run the compiler again, with the profile-guided optimization file, and then the second binary it produces will be better optimized. And - I forget what they said in the document, but I think they saw 10% or so better performance when you did it this way... So for some people, that could be a big difference.

**Johnny Boursiquot:** Yeah, that sounds like sort of a low-effort way of identifying sort of hot paths and things of that nature, and sort of basically -- yeah, just not having to sort of dive into a profiler and sort of do the typical thing we do with pprof and everything else, and trying to figure out where you have too many allocations etc. So this is more of a passive way of generating some insight for you, and you can then at your leisure go and sort of refactor and optimize. Would that be a proper understanding, this more of a passive approach?

**Carl Johnson:** Yeah. I think the main challenge here is just that it needs some real-world data to build its profile optimization against. So this is basically why I've been too lazy to do it, is that probably what you need to do is in your testing environment, or your dev environment, or something... Or if you have like a sophisticated environment where you have like canary rollouts, you might say, "Okay, we're gonna run our canaries on 10% of machines, and then they will collect the profile guided optimization files, and then we'll build a new release where we use those", or something. So it's a little bit tricky in that regard, but I think if you have the infrastructure to get this going, it's basically free money. It's like "Okay, here's this way that we can run this, and then all of our stuff is just going to be faster in perpetuity." Once you set up the DevOps pipeline to make this happen automatically, then it's like, okay, and now that company just saves whatever percentage on CPU for the rest of time.

**Johnny Boursiquot:** Which I imagine if you're running very high-scale operations, then any sort of 2% to 7% reduction in resource utilization means many, many dollars, or whatever your form of currency is; that means a lot of savings there.

**Kris Brandow:** I like that it can like just get better over time, if you do integrate it with your whole workflow, just like future releases of Go, that get better and better at this... It's like, you don't have to do anything extra. It's like "Oh, it's already built into my whole workflow, and my whole ecosystem, and all of that. So if I upgrade to a new version of Go, and there's more, better optimizations, I literally don't have to do anything to get to benefit from those things", which is really cool.

**Johnny Boursiquot:** Indeed, indeed. So next up, we have - in the whole tooling thing, and it's something I haven't yet played around with... There's forward and backwards compatibility with the Go toolchain. What is that about?

**Carl Johnson:** \[00:38:02.11\] So the go.mod file for some time now has had a line in it, which is the Go version. And if you set the Go version, up until now, it hasn't really done a whole lot. It basically just tells other modules, "This is the version of Go that I was built with, and that I expect", and if you try to use a Go module that has like a future version versus what you're building your application with, it'll basically just print out a little warning and say, "Hey, just so you know, this one module expects me to be on Go 1.20, but I'm actually only on Go 1.19." But it was just a warning; it wasn't like a big deal. But now, there's a new built-in optimization where it can automatically fetch the version of Go that you expect to be built with. So you can specify, "I expect to be built with Go 1.21.2." And right now that won't work, because one point 1.21.2 isn't out. But once it is out, it will automatically --

**Johnny Boursiquot:** You're living in the future, Carl.

**Carl Johnson:** ...download it. Maybe this is the version of Go that's like so bulletproof that they never have bug releases for it. It's like "No, we just got it perfect on point zero." But yeah, so it will automatically go online, get that version, download it into a cache spot, and then run that compiler all for you. Now, you can turn it off. I definitely think there are people who are going to be in high-security environments where it's like "No, we're not going to let something automatically download the newest version of Go. Everything that we run has to be inspected with a fine tooth comb", and blah, blah, blah. But I think for a lot of people, this is just going to be very convenient. It's like "Oh, if I have one person on the team, and they release something, and on their machine they already ran homebrew upgrade, or apt upgrade, or whatever, it's not going to break on my machine. My machine will just silently update itself to match theirs." So that's pretty cool.

**Break**: \[00:40:01.15\]

**Johnny Boursiquot:** So another thing that personally I haven't had a use for, but I hear is all the rage in some circles, is Web Assembly. So there's an experimental port of Web Assembly system interface into Go now, that you can specify your Goose and Gorch environment variables to get access to that WASM stuff. How interesting is that for either of you?

**Carl Johnson:** That's pretty exciting. I've used WASM before just like to play around with it in the browser... But in the browser, it's always a little bit of an awkward fit, because you want everything to be as small as possible. And so as soon as you're compiling the whole Go runtime, it's like, you start off with like a three megabyte binary or something like that. And for a system where you have a CLI tool or something, three megabytes is not a big deal. But if you're running a website, and you want users to come to this site, and you're like "Oh, they've got to download three megabytes before they can load my little image", that that's kind of not great always.

So I think that's always sort of limited the adoption of Go in WebAssembly on the frontend. But on the backend, it's like, who cares? The final binary's probably going to be like 100 megs, but nobody cares. It's trivial on the backend. So I think this could be really exciting for serverless functions, for compute at edge, for things like that, where it's like "Okay, now we can deliver our Go binaries out to the edge super-fast, have them run on every request, and deliver results close to users in milliseconds, or microseconds." I think this could be really, really exciting.

**Kris Brandow:** Yeah, I think the backend is definitely the more compelling part of this. I also think like this could be used to make interesting plugin systems and whatnot... Because WebAssembly - there's so many different runtimes, you can easily embed them into your language... So making it so that Go has this kind of extra layer of access now, where it's not just kind of "Oh, I can't really talk to a file system. I have to depend on the runtime giving me this stuff." Now, there's a standard interface that anybody can use, that's really nice. And I'm glad to see that Go is also pushing to get into the WebAssembly space, because I think right now it's a lot of C, C++, Rust... And there's some other languages floating around. I've always been like "No, no Go should be in there as well." Go should be right up with Rust and C as languages you can use for these edge computes and for all this other stuff.

**Carl Johnson:** \[00:43:46.11\] There was a really interesting talk at GopherCon, I want to say 2022, by the creator of sqlc, whose name escapes me... But he was talking about using Web Assembly for plugins in Go. And basically - yeah, it was like he wanted to add a plugin system to sqlc, his Go SQL compiler, whatever you want to call it. He wanted a plugin system for that, and so he ended up doing it with WebAssembly, because that was something where it's like "Okay, if it's in Web Assembly, I know that the plugin can't just like scribble all over my users hard drives. I can put it into a nice little sandbox, and it can be allowed to modify the SQL files, but not do things that it's not supposed to do. And so I can protect my users that way with the plugins."

So it could be really interesting to see if maybe Caddy or some other things could pick this up as a way of having plugins, but not necessarily letting the plugins just run any arbitrary code, but you can trust that they're only going to run code that you approve of.

**Kris Brandow:** Yeah, I think that's Kyle Conroy on GitHub.

**Carl Johnson:** That sounds right, yes.

**Kris Brandow:** Maybe sqlc package, yeah.

**Johnny Boursiquot:** There's a some minor changes I think you're excited about, Carl. Do you want to touch on those?

**Carl Johnson:** Oh, minor changes... So I have to promote it because nobody else will promote it, since I was the one who implemented it. So I'm the one who brought func to go; I want everybody to know this. So a couple of versions back, there's flags.func. So flags is the Go Command Line flags parsing package. I know a lot of people use other packages, like Cobra, or Viper, or whatever... But if you want to stick to the standard library, which I recommend, but not everybody does, then you can use the flag package. The flag package has a little helper called func. And flags.func, what it'll do is it'll just take whatever you set in your command line argument and just pass it to a little function as a string. And in your function, you can return an error. It's just a very simple and convenient way of quickly writing a command line flag parsing thingamajigger.

So in Go 1.21 someone in the issues tracker said "Hey, we should have flags.boolfunc, which is basically the same as flags.func, except for it works for flags that don't necessarily have an argument... So let's say you had a flag called -verbose, or something like that, and you didn't need to have a setting for it, you could just say -verbose. Now, with Go 1.21, you can have that just sent off to your function in the same way that you could for something else where it's taking an argument.

So I don't know, it was simple... It's one of those things where there's a lot of stuff -- if you want to get into open source, there's a lot of stuff in the Go issue tracker, where it's like "We need somebody to write something, and it's only three lines, five lines, twenty lines. It's not that much." And then you end up writing tests, and the tests are longer than the thing that you write.

So I don't know, I see this all the time on Reddit, and different places, of like "I want to do open source. Where do I go? How do I start in open source?" And my answer is always -- you'd be surprised, there's some really low-hanging fruit in the Go project, and it can be pretty fun to just implement it, and send it out there, and the team are really understanding... I know for one of the first things I sent in, I was like "I can't figure out how to test this. I know what change to make, but I don't know how to test my change." And they were like "Okay, not a big deal. We'll write the tests for you", and they helped me through that, and it was great. So definitely, if you're looking for something to contribute to, check out the Go project.

**Johnny Boursiquot:** Sweet. I think it's time to switch to, some would say their favorite part of the show, which is Unpopular Opinions...

**Kris Brandow:** By "some" do you mean you, Johnny?

**Johnny Boursiquot:** \[laughs\] What, me? Little old me? I don't know, let's get the jingle going, shall we?

**Jingle**: \[00:47:48.15\]

**Johnny Boursiquot:** Alright. Carl, I know you've brought something spicy... Lay it on us.

**Carl Johnson:** Alright, here's my spicy take. My spicy take is that XML is better than YAML, because there are situations where XML is appropriate, but there's no situation where YAML is appropriate.

**Johnny Boursiquot:** Dang. Shots fired. \[laughter\]

**Carl Johnson:** So now to defend my position, and therefore make it so that it becomes a popular opinion... Although maybe not; this one might be spicy enough that even I can't defend it well enough... Let's talk about XML first. So XML got a really bad reputation. And the reason it got a really bad reputation is because people were using it for things that it should never have been used for. So XML stands for Extensible Markup Language. And if you're using it as an extensible markup language, it's actually really great.

So let's say you're working on something and you're like "I'm making a new kind of book, and I need to annotate all of the verses in the Bible, and have the chapter headings, and stuff." It's like, it's great for that; it's really good for when you have a document, and some things are italicized, and some things are in a foreign language, and subtitles, and all that stuff. It's really good for that. It's not good if it's like "Okay, I need to configure this server, and the server needs to know if this value is true or false." It's like, no, that's bad. Don't do that. That's not a good use for XML.

But XML does have some uses for which it's appropriate. And I think the fact that now everybody is writing React, and they're writing it with JSX, and JSX is basically just inline XML, I think that shows that there are cases where actually XML is pretty good.

Now, YAML on the other hand I think is never good. There's always something better than YAML. So we've finally made it to Go 1.21, and I'm very happy about this. And you know why? Because YAML repeatedly bit me in the behind on Go 1.20. Asked me why.

**Johnny Boursiquot:** Why?

**Carl Johnson:** Well, when you say in your test file "test this against Go 1.20", it interprets that as Go 1.2. \[laughter\] So it was like two or three different times I had a repo where I'm like "These tests aren't passing. Why are my tests not passing? I've just upgraded to Go 1.20." And it was like "Oh, no. I've decided that this is Go 1.2." And so YAML is always going to do that to you...

**Johnny Boursiquot:** Oh, snap... You just reminded me -- I think I had that issue in a GitHub Action when I changed a version of a build to 1.20. I think I had that exact same issue. \[laughter\] Because it's the YAML, the YAML for the GitHub workflows. I ran into that issue, oh my God.

**Carl Johnson:** Yeah. So my take is that YAML -- I mean, I understand why people do YAML, but there are better choices you should use TOML, you can use CUE, the thing from Raj Pepe... Or I guess it's from a lot of people, but he's the guest on the show who is most associated with it. You can use lots of things. I like how Caddy does it. With caddy, the canonical language that Caddy understands is JSON. But they have adapters, right? And so if you want to write YAML, you can, but it'll just take that YAML and turn it into JSON behind the scenes. And then they also have like a specific Caddy language. And so you can give it the Caddy language, and then it turns that into JSON behind the scenes. And you can give it an NGINX config, and it'll turn that into JSON behind the scenes. I think that's that is probably -- like, if you have the cycles and time to spare, that's probably the best solution for most people... But when the only way to do it is YAML, it's like "No...!" It's just too error-prone, there's too many things... You just have to always quote everything.

**Johnny Boursiquot:** \[00:52:09.24\] You just have to quote properly. Quote properly. Quote everything, make sure you have the right number of tabs, and the right number of spaces, indentations... If you've ever done Python, you know the life of having the appropriate spacing, and things. So yeah...

**Carl Johnson:** Well, just the YAML specification has all these features that nobody ever uses, because they're really confusing, and hard, and you can include documents inside of other documents, with references and stuff... And it's like "Oh, man, I don't want to have to understand any of this stuff." And then if you're not careful, it'd be like "Oh yeah, the first three things I fed it to understood that, but then the third one was just like using some parser that they found on the back of a truck, and it doesn't understand it", and it's like "Oh, man..." YAML - never appropriate. XML is sometimes appropriate.

**Kris Brandow:** I have equal dislike for YAML. There's been a few too many times I'm trying to configure something in Kubernetes, and I'm like "Why isn't this working?" and it's like "Oh, you didn't tab this over enough" or "You tabbed this thing for too much." And I'm like "This is obnoxious."

For XML though, I do -- I'm a big fan of XML, mostly because you have like namespaces and things in XML, which allows you to actually compose things better... Like, if you want that with JSON, you have to use JSON-LD, or something like that, which makes it a lot more interoperable than other things. I think the main problem with XML is that it's not "readable", or people don't like to read it... But I don't think people like to read any of these formats. Human readability probably shouldn't be the same thing we're trying to achieve with like an efficient machine format... Because machines like lots of very detailed information, and humans don't like looking at lots of detailed information. We want syntax, and colors, and pretty things to help us parse out information.

But as far as your opinion goes - yes, just dumpster all of YAML... But I'm like, use XML for more things. If you want to configure a server with XML, that's fine, but provide some useful tools to present the configuration to humans, or things like that... Because trying to read XML, just a big blob of it, is just unfun.

**Carl Johnson:** Well, it's just tricky... JSON got lucky that they've found the primitive types that solve a lot of people's uses of like, okay, if you have numbers, you have strings, arrays, objects, bool, that's all you need usually. I would say the big problem with JSON is there's nothing for timestamps or date times. So that's something you run into a whole lot. JSON is almost right, except for it doesn't have the date time. XML, I think the issue is that it's all strings, and then you have to add the other layer on top. And so if you're somebody and you're like "Oh, I'm going to use XML for this thing, and I need it to be true or false", it's like, okay, in this one is it that there's an attribute called true, or is it called yes, or is it called on? Or is there like a tag, and there's a subtag called on? And stuff like that. I mean, it's all things that you can work out. And if you have the schema, if you have the convention of "Okay, in this application we always do booleans this way", then it's not a big deal. But I think for something where you're just trying to generically communicate it from one thing to another, it can be a little bit tricky, and that's where I think XML got a bad reputation.

**Kris Brandow:** Yeah. \[unintelligible 00:55:34.29\] JSON is that you have to do everything based on conventions, right? You can't change the name from first name to name, or everything will break. But again, there's JSON-LD to help with that. The thing I really don't like about JSON as well is that everything is like a 53-bit floating point number...

**Carl Johnson:** Yeah... \[laughs\] Don't use that 54th bit. That's not for you.

**Kris Brandow:** \[00:55:59.24\] Some numbers you can't represent... Or I want this to be Go 1.20, but you're taking this as a number, so you think it's 1.2. I really meant that to be a string, and I have to quote this, and whatnot. So it's all a lot of edges and trade-offs and all of that. But yeah, I don't think anybody has time for YAML. It gots to go.

**Carl Johnson:** Yeah. I mean, the JSON spec definitely has flaws... It lets you have the same key twice, and officially that's allowed, but discouraged, or something... But in practice, it's like "No, you're just gonna break everything. Don't do that."

**Johnny Boursiquot:** That's a bug. \[laughs\]

**Carl Johnson:** Yeah, that's a bug. I mean, the Go parser - I think it puts up with it. The Go JSON decoder will put up with the same key being in there twice, but don't do it. It's just gonna break stuff and make problems.

**Johnny Boursiquot:** Yeah.

**Kris Brandow:** Johnny, are you a fan of YAML? Do you like YAML?

**Johnny Boursiquot:** You know, at this point I've written so much damn CloudFormation and YAML that it's like second nature to me now. I don't mind it. I've come across all the weird ways YAML can break, because I write all my CloudFormation YAML by hand... So yeah. I would not trade that in for XML though. Or even JSON, for that matter.

**Carl Johnson:** Do you run it through something like Prettier, or something that like config-checks it and makes sure that you didn't put the spaces in the wrong place, or something?

**Johnny Boursiquot:** I used to, and then they started behaving weirdly at times, and now I don't have any of those things. \[laughter\] I'm the computer now. Yeah, seriously, I'm literally touching YAML every day. I'm touching CloudFormation every day, so now I know where all the bodies are buried.

**Kris Brandow:** I mean, I think that none of these are fun to write by hand... Or like JSON and XML are definitely not fun to write by hand. YAML is okay-ish if you do it every day like you do, Johnny. But I think that's why we have things like CUE as well, that are up and coming, and people are being like "Okay, let's try and solve the writing human-writable and readable configuration, and then turn that into other stuff." So perhaps one day in the future we can replace YAML with something like CUE, or some other slightly nicer to use format for the people that want it, and the kind of YAML warriors like yourself, Johnny, can keep on keeping on. I mean, people write Python all the time, and it's fine...

**Johnny Boursiquot:** Yeah.

**Kris Brandow:** ...so these whitespace-delimitated things are not unusable, it's just people that don't write it that often might stumble upon stuff.

**Johnny Boursiquot:** Yeah, and there are tools for these people. In my case, in my ecosystem, because I'm doing cloud stuff all the time on AWS, if you want to, you can use the CDK, which will generate YAML for you, and it'll be perfectly syntaxed YAML... Again, you can have tools that generate the YAML for you if that's not your cup of tea. But I'm just so used to working with it every day that it doesn't bother me at this point. But yeah, I can totally -- the XML bit though, Carl... \[laughter\] I've scar tissue from XML, man.

**Carl Johnson:** Johnny, you've been working a little longer than I have, so you probably saw when XML was like really abusing people... I think I came in late enough that I had heard all the tales of people being hurt by XML, but like everybody had switched to JSON when I started.

**Johnny Boursiquot:** Yeah, there's a whole -- yeah, some of us have battle scars from the good old XSLT days, the old XML, and variants upon variants of... Yeah, I don't want to relive those days. I'll take YAML over that nonsense any day. But granted, there's lots of legacy systems that run and operate on that stuff today, so I can't knock it. It's just not -- in a modern day, if you're going to pick a markup or any sort of configuration language, unless somebody from on high says you can't use any modern techniques or languages, then yeah, stay away from XML, please.

**Kris Brandow:** \[01:00:08.11\] Maybe this is an unpopular opinion, but I just engineers probably shouldn't have to touch these things in their day to day anyway... I think part of the problem we have is -- especially when it comes to APIs and trying to evolve things, is that HTTP is this wonderful protocol that you can do all this nice content negotiation for, and no one can do it because, I don't know, you're like "Hey, API, send me back this other thing", and it's like "How about JSON? That's all I'm gonna send to you." Because everybody -- you know, you choose one, and then it's like "I'm just going to use this one thing." I feel like maybe we should just have better abstraction layers on top; kind of like what CUE does, which is just like developers and engineers get to touch the nicer things, and then the computers that are talking to each other decide, "Oh, I'll send this to you in JSON, and I'll send this to you in XML, or I'll send this to you in YAML", and then people don't have to deal with that nastiness.

**Carl Johnson:** Or protobuf.

**Kris Brandow:** Or protobuf, or whatever. So I wasn't heavily doing software development during the good ol' XML days, but it feels like perhaps part of the problem was that we were operating a little too low in the stack, and we were trying to do too many advanced things without explaining to people what it is we were trying to do... Which is growing pains of an industry.

So a number of episodes ago I had this unpopular opinion that, Johnny, you, you heard something, and I said, "Oh, no, that's what you heard. That's not what I said." And it was about waterfall, and the waterfall paper. And I said that the waterfall paper, the development process explained in the waterfall paper is far superior to any of the practices we have today, to any of the development processes we have today. That was in fact an unpopular opinion with our listeners... But I don't think it should be, so I have written a blog post...

**Johnny Boursiquot:** "I disagree!"

**Kris Brandow:** ...and that blog post is now up live on the Changelog website.

**Johnny Boursiquot:** Nice.

**Kris Brandow:** So if you want to go read why I think the waterfall paper contains a very good software development process, and also perhaps improve your own process, where the blog post is about things you can take from that paper and a few other papers to make your software development process better no matter what your process is, go check out that blog post. I think we can put that in the show notes as well.

**Johnny Boursiquot:** Alright, the folks who disagree with Kris, now you have his written rebuttal to your disagreement. He disagrees with your disagreement. \[laughter\]

**Carl Johnson:** Don't get a writer angry at you, yeah.

**Johnny Boursiquot:** I know, right? Yeah, you will get back words... \[laughter\] Awesome. So that's been a great show. Thanks again, Carl, for coming on the show. We'll see you in another six months... With the next release...

**Carl Johnson:** Alright, see you in six months with 1.22. I've got some good stuff \[unintelligible 01:02:549.09\]

**Johnny Boursiquot:** Nice.

**Carl Johnson:** I've already merged at least one thing into the -- no, two. I've already got two things into the 1.22 for me to brag about when that comes out. But I'll keep you guys on the edge of your seats for the next six months on what they are.

**Johnny Boursiquot:** Nice, nice. Or you can go read the notes...

**Carl Johnson:** Yeah, scan through the GitHub issue tracker. You could do that too, but that's no fun.

**Johnny Boursiquot:** The commits, the messages, all that activity...

**Carl Johnson:** That's like people who read the book before they watch the movie... No, don't read the book first; watch the movie first.

**Johnny Boursiquot:** Right. They're like "Oh, that's not how it went in the book." Awesome. Alright, y'all... And thanks, Kris, for being my co-host. That is all we have for you, folks.
