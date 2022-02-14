**Nick Nisi:** Hello and welcome to another episode of JS Party, where it's a party every week with JavaScript. I'll be your host today, Nick Nisi, and I'm joined with my fellow panelists, Suz Hinton - hey, Suz.

**Suz Hinton:** Hey, how's it going? It's good to be back.

**Nick Nisi:** Good to be back with you, as well. Our other panelist is Jerod Santo.

**Jerod Santo:** Hello! Excited to chat with you all - DevTools, debugging, fun stuff!

**Nick Nisi:** Yeah, lots of fun and very practical for everyone. Let's dig right into it today. We thought we'd talk about debugging and some DevTools magic and kind of how we approach that part of the job of developing with JavaScript; how we manage/deal with bugs, and some cool features that the platforms provide us.

I guess I'll start off with a basic question - how do you get into debugging? You have a bug that you don't really know much information about - what are the first steps that you take? Why don't we start with you, Suz?

**Suz Hinton:** Yeah, I solve it super, super basic. Usually, when I'm developing something that's more on the front-end side in the browser, I'll usually just have DevTools popped up at the bottom, always on, showing the console tab, and then whenever I'm developing a feature and manually testing it, I'll usually just look for an error. If the error shows up - which it usually does, because we're not all perfect the first time when we code something, if the error is super obvious and there's like a line of code, then I'll just go straight back to my code and fix it.

But if it's something that I don't know what it is, generally I'll google it really quickly first, and if I don't really find anything that's specific to my case, that's when I sort of start digging deeper and deeper.

What I love about the DevTools in every single browser that I've worked with is that it gives you the line number, you can generally click on the arrow, and it would take you to that source code. Then that's where I'll set a breakpoint, refresh the page and start stepping through...

So mine definitely starts super high-level, because I find that even being able to kind of pause your page execution and step through those parts of your code, that's very time-consuming, and sometimes it's super not necessary if it's a really simple problem. So that's kind of how I start - super high-level, and then go deeper from there.

**Nick Nisi:** \[04:16\] That's really good. That's kind of how I start, too. I'll start really high-level, usually with -- if it's not an obvious thing, I might put console log statements in there and start going that way, and then eventually dig into actually the full-blown debugger and stepping through code.

How about you, Jerod? Do you have any particular approach that you take?

**Jerod Santo:** Well, I think all the technical aspects of what I do change based on the bug itself and the environment in which I find it... But I do the first thing that every developer does - I start pointing fingers at other people. \[laughter\] Could it be the browser vendors that did this? Could it be my dependencies that are causing me issues? Maybe Apple made this laptop really poorly, and that's why it's not working right.

After I've exhausted all of my potential Git blames at other people, then I turn to myself and I look inward and I find where the bugs truly come from.

In terms of the actual thing that I do, I'm pretty lame, and I've always been very much an alert debugger in terms of like -- in the old days I would use the actual alert function. We'd see \[object Object\] and think "Oh, that wasn't very useful." But I've very much been a trace debugger my whole career, in terms of just console logging. I (almost) never set a breakpoint, unless I'm super stuck... But I just put trace statements until I can kind of chase down the source of what's going on, and that usually does it.

Now, like Suz, I will start very high-level and I'll try to first determine what is the actual bug... Because lots of times we see symptoms, and those aren't -- it's kind of like a root cause analysis. Sometimes you get to that really quickly, especially if it's a bug that you can kind of intuit what's happening right when you see the symptoms, but lots of times there's red herrings, and things that you think are happening, but it's actually something else.

So you can't really fix a bug until you identify it, isolate it and make sure that it's actually causal, and not just symptomtic... I don't know the word that's for being a symptom... But it would have made me really smart if I were to drill that; "Is it causal or symptomptic?"

**Nick Nisi:** Symptomatic maybe?

**Jerod Santo:** Yeah, I don't know... Just making up words over here. Yeah, isolation, identification... Once you have an actual diagnosis - and that's where I usually will use tracing tools to come to that, and then fixing it is a whole other aspect of the job.

**Nick Nisi:** Sure, yeah. So I do run into a lot of issues with that. I will start with the trace debugging, as you mentioned, and start going down that route... But sometimes I get thrown into projects that I really have no idea what's actually going on... Maybe I'm just hired as support to come in and try and diagnose one specific bug in a codebase I don't know, or do other things... So I've been trying to get really efficient at isolating the bugs, isolating where things could be occurring, and then trying to set up the traces just in that piece of code, instead of the whole entire codebase, and getting smarter about that. That can be the big challenge, and especially with how complex JavaScript has gotten in recent years with all of the build tools, and Webpack, and source maps - all of that can be really hard to find... The bug is actually online 8,000 of this single JavaScript file, and stepping in through there...

But it can be a lot of fun, too. A lot of times I like to think of myself as like Dr. House standing in front of the whiteboard, trying to figure out what the diagnosis is, crossing off a bunch of them... "It's never lupus" and just continuing on from there. \[laughter\]

**Jerod Santo:** \[08:17\] It's never lupus...

**Suz Hinton:** I feel like there's a pun coming on there with lupus and something about JavaScript loops, or something like that...

**Nick Nisi:** Oh, man... That would be so clever if I had thought of that. So some things that I'll do to try and get in there is I will use the console statements, but I will also use the debugger and try and pause the debugger when the error comes. If you're really lucky, you'll be able to just set that Pause on Errors setting in Chrome or Firefox, and it will just pause on the line that is gonna throw an error... But often times it seems like the errors are being caught, so you have to enable that checkbox to tell it to break on caught errors as well.

The problem is, as you'll learn, a lot of library code throws errors that are caught. So if your bug is several thousand lines down and there's a lot of library code that's running in the meantime, there might be a lot of caught bugs, and you might have to step through that 100 times before you get there. So do you have any tips or tricks that you use to help speed that process up?

**Jerod Santo:** It's gonna have to be you, Suz... Like I said, I use rudimentary tools and methods in my brain, so I don't really have tips and tricks. I do have -- I mean, when I say I do the tracing, this kind of gets further down our timeline or our outline, when we talk about DevTools tricks that we like... One that I use all the time in combination with console.log, instead of stopping the world, is printing the state of the world at a specific point in the code, and then in the console you can right-click on that output and say "Store as temporary variable" or something along these lines, and it will just like assign it to a temp one. Now you have an object or you have a function reference and you can manipulate it there, and kind of dive down and run a function on it again, or do what you have to do.

So it's kind of a combination of I'm not stopping the world, but I'm peeking into it at a specific point, and able to manipulate it. So it's like logging plus Store as Temporary Variable, or basically like my left hand and my right hand; but I don't think that's necessarily good advice, it's just what I do.

**Nick Nisi:** I was just gonna say, that's great advice, being able to do that...And that is most of the time when I step into a debugging session, it's just because I want to figure out what the state of something is, and to go from there. I'm not usually updating the state as I'm debugging, or anything like that, so that's a really cool thing.

And kind of following along those lines of a cool tip, I guess, is using console logs to actually output the values of variables. Obviously, you can do that just like console.log and put the variable name in there, but one cool thing with ES6 is if you wrap it in curly braces and just put that out there, it will output an object where the name of the variable is the key, and the value is the value... Instead of having to put the value name, comma the value itself, you can just kind of do that all in one statement just by using that shortcut.

**Jerod Santo:** That is a cool idea, I've never done that. Is that like using -- what's that term, the new feature...? Like, decompression, or destructuring...?

**Nick Nisi:** \[11:41\] Kind of the opposite of that, where if you wanna create an object where the key is the name of the value that you're putting in there, you can just wrap it... You don't have to say "foo:foo", you can just put "foo" in there.

**Jerod Santo:** And it will take the variable name and assign that as the key value in an object, and the value in the variable will be the value. Is that what you're saying?

**Nick Nisi:** Yeah.

**Jerod Santo:** Okay, that's cool.

**Suz Hinton:** Hey Nick, do you know if you can pass that directly to console.table?

**Nick Nisi:** That's a good question. Honestly, console.table is something that I always think I should use, and I never really think about it in the moment... But every time I see an example of it, I'm like "Wow, that's so cool..."

**Jerod Santo:** Yeah, it makes cool for animated GIFs and images on Twitter... But every time I try to use it, the data is not in the format that a table would make sense, and it ends up being munged, and then I was like "Why am I doing this, when I could just console.log it?"

**Nick Nisi:** Yeah, that's a cool thing. There's also a really cool feature of -- I think just Chrome DevTools specifically... In the same way that console.table allows you to see a tabular display of the data - so you see columns and rows, showing all of that, so it's easier to consume - you can actually create those types of logging for the console in Chrome yourself.

I'll add a link to the show notes, but one example I've seen is being able to plot out coordinates. So you can say "console.plot" or something, and name it yourself, and when you output that to the console, instead of just seeing X, Y coordinates, you can actually output a graph that plots those on there. That's just a really example, but you could do other things where you maybe take geographic coordinates and then show a map of where that is in the console. That's really advanced. I haven't done anything like that, but I've seen articles.

**Jerod Santo:** Yeah, exactly. A lot of these things are awesome features, but then in practical day-to-day I just never even -- like, it doesn't cross my mind to even try.

**Nick Nisi:** Yeah. So moving into that section, what are some of your favorite DevTools tips and tricks? I always get so much out of talks and presentations like this, because there's just so much that is there that I don't use, that I probably should be using. Do you have any cool tips and tricks? Suz, do you wanna start?

**Suz Hinton:** Yeah, I really like styling console output. If you are not in the kind of breakpoint setting mood - and we've sort of talked about how sometimes that's not always the optimal solution, and just outputting a ton of traces is really gonna answer all your questions... Being able to style the console outputs, so you're not just fishing through lines and lines of logs that all look the same, is really cool. So you can use this kind of string interpellation to CSS style the actual text that comes out in the console log. You can change the color of it, the size of it, and do all sorts of other really cool stuff. I think that that's not necessarily always known about, but if you are fishing through traces, it can really help you pull out the things that matter the most.

**Nick Nisi:** That is really cool. I didn't realize that you could do that. You can do things like -- pretty much anything in CSS with that, right?

**Suz Hinton:** Yeah, pretty much, which is kind of fun... And I've definitely popped open the DevTools on just general websites I've been surfing, and sometimes it will dump out a very styled bunch of logs that are saying something like "We're hiring devs" or something like that. I've seen people who do some pretty fun stuff with it.

**Jerod Santo:** That is cool.

**Nick Nisi:** Yeah, wow. Very cool.

**Jerod Santo:** That was exactly the use case I was considering... Easter eggs, and stuff like that, where it would actually make sense to take the time and style it to look really cool, when you're trying to have somebody find it. It could be useful if you have lots of traces, like you said, but other than that, there could be a lot of yak shaving going on if you're spending lots of time just styling the output of your console.logs.

**Nick Nisi:** \[15:51\] It could also be really interesting for maybe long-running log messages that could be in development and stripped out in production... That's not something that I normally do either, but maybe having specific events that are fired in a bold font, or a certain color, that are always there during development to help you out - that could be really cool, and kind of an easy DevTools extension that you add to the code yourself.

**Suz Hinton:** Yeah, totally. I know that debug, the module that's usually used with Node.js console applications is super popular, and that's because it just does add a little bit of style, and it sort of color-codes the timestamps, and things like that. So I'm imagining that you could do something very similar, but have it pretty lightweight, so when you are working with teams, you can actually switch that on during your development phase.

**Nick Nisi:** So is that like a Node module that you install and it gives you special log statements for Node, or what is that?

**Suz Hinton:** Yes. It's really cool... Actually, it does work in the browser, so if you look it up on npm, in the registry, it is actually able to be used in the browser as well; there's screenshots over there. But what it essentially allows you to do is instead of using console.log, you import it and you can create these different (I guess) scoped or different context debug logs... So you don't just have like a generic console.log, you can have different contexts.

Maybe you have some events that fire with a certain style and keyword attached to it, and then maybe you have a different debug context, using a different variable name to log it out, where you can style it differently and it's non-event-based logs, for example.

I'm doing a terrible job of explaining it, but what I love about the debug module is you can actually create different instances of it and then style it differently, depending on what you're actually looking at.

**Nick Nisi:** Oh, wow. Very cool. I'm looking at the screenshot for it; I think I've definitely seen this in action, but never actually used it.

**Suz Hinton:** Yeah, and a lot of the time it is actually already being used in a lot of popular Node modules you might be using, it's just that you have to turn it on with like an environment variable, and then you'll start seeing the inner workings of that Node module start dumping things out. So it's very useful when you are actually maintaining a module, and you can tell people to turn that on if they raise an issue on your GitHub repo or something like that, just so you can get some extra diagnostics from them.

**Nick Nisi:** That's a great idea. It looks really helpful.

**Suz Hinton:** Yeah, I use it a lot, because I maintain some super-finicky libraries, and I need to know the exact order that certain things are happening in... And instead of having to copy/paste snippets of code for people to run, it's way easier to tell "Hey, can you just turn this on and dump the actual output into a comment on this issue?"

**Jerod Santo:** That's a great idea, and probably an example of where tracing specifically is quite a bit different for library authors than it is for applications developers, and probably even different - Nick, maybe you can speak to this - with larger teams versus smaller teams. In every small team that I've worked on, we use log statements to figure out a problem, and then we purge them, because they're noise and unnecessary in code.

A library author, like you said - you want all those trace statements to exist as part of the software, and maybe use all the log levels or whatever flags you need in order to use that for other people using your library debugging, Suz... That's such a great implementation, of saying "Just run this again with this particular variable" and then you're basically doing recon without them having any effort. That's spectacular.

I've also seen in large teams where there's like trace statements similarly to what I would think in a library, but they just kind of live in the code at all times, and they're either commented out, or they have log levels, and that offends my personal sensibilities; it's like, "Get that out of there." But I see if it's a huge app and you have these recurring problems and you wanna just leave them there. Is that something you see a lot, Nick? Projects where there's like logging - specifically applications - integrated into the app and is always there?

**Nick Nisi:** \[20:06\] Yeah, definitely. In some of the apps that I write, I don't typically add that, and it's stripped out at build time, as part of the build process... But yeah, I've definitely seen that; additional information about network requests is a big one I think that I can recall.

Some cool DevTools things that I've seen that are really helpful - and I'll be honest, a lot of these DevTools tips really seem like they would have been really amazing before we started building all of our code, and having complex build processes... But there are still some really good tricks to do with that. One of them is blackboxing. Firefox and Chrome both support this, where you can, while you're stepping through code - or you can set up a regular expression in the DevTools itself and you can say that "any script that has jQuery in its name, or this specific version of React, just blackbox that."

What that means is that when you're stepping through code and you're looking at the stack trace on the right-hand side, don't ever show React in that stack trace; just assume that that code is perfect and working, even though that might not be the case... Just assume that that is working, and that "I think the bug is actually in my code", and so it will save you a lot of time not having to step through or look up the stack trace through all of your library code, and you can just focus on the code that you've written, or a specific library that you're bringing in and using.

It also will prevent it from stopping on errors inside of those files that are blackboxed, so it'll just kind of stick to errors that are in your code and not anywhere else, so that can really help you to cut down on the amount of information that can be thrown at you when you're in a debugging session.

**Suz Hinton:** That's so nice.

**Jerod Santo:** I love it, and I had never even heard of that, so thank you very much.

**Nick Nisi:** Yeah, there's a lot of really cool little tricks like that. It can be hard to -- well, the nice thing about Chrome right now at least is if you do set up blackboxing like that, it'll actually put a little message at the top of the stack trace that says "There are some scripts that are blackboxed. Click here if you want to actually see those", and then you can click on those and unblackbox them if you like, and then they'll just be part of the flow again.

Pretty easy to manage now... I think it was a little bit more difficult in the earlier iterations of that, but pretty easy right now.

**Suz Hinton:** That's really cool, because I have the memory of a goldfish, and so whenever I'm using those debugging tools, I try so hard not to check too many boxes, where I'm just gonna completely forget \[unintelligible 00:22:54.01\] It sounds like I'm not the only one with that problem, and Chrome has done a good job of kind of making those little callouts to reset it back.

**Jerod Santo:** Side note - when you said you have the memory of a goldfish, I thought you were going to then tell us about this memory that you have of a goldfish, that you maybe owned when you were a child. \[laughter\] I was like, "Where is she going with this?" \[laughter\] I've never heard that phrase before, but I like it.

**Nick Nisi:** So what do you have, Jerod? Tell us a cool trick...

**Jerod Santo:** In terms of tips and tricks... So as I confessed to earlier, I'm very much a console.log + right-click and Store as Temporary Variable person - that being said, there are a few other things I use all the time, and these are the kind of tips that you either know and you're rolling your eyes out right now, or you haven't heard and you're like "My mind is exploding..." But they're very basic, and specifically they're shorthand references to specific things inside the DevTools... $0 will refer to the element that is currently focused in the elements panel, which is super useful for grabbing a handler to something and then running some code against it.

\[24:09\] Then $\_ in the console will pull up the last returned statement, and it's basically a reference to the previous return statement. So those are small little things, but once you know them, you'll use them all day, every day.

Then the other thing I do a lot in the elements panel specifically is you can drag and drop the elements to reorder the DOM. And again, either you just haven't tried yet, and you're like "Wow, you can do that?" or you're rolling your eyes, "Yeah, I've been doing that for years." It's not a new thing, but it's super useful, especially when you have maybe like a CSS specificity problem, or you didn't necessarily do the design, but you're wanting to change the HTML and wonder "Can I put this div inside this other thing without screwing up any of the styles?" Well, you can actually just drag and drop the elements right there in the page, in and out of the tree, in order to determine if it's gonna look different, or something like that. So I use that daily...

And one aspirational feature which I haven't used yet, but is super cool and I've just learned about recently and I want to use, is that you can actually generate a screenshot of a single element... So instead of the full page, or even a section of the page, or dragging the thing around it, you can select an element in the elements panel, and then use Cmd+Shift+P (or I think it's Ctrl+Shift+P in Windows) to bring up that little menu executer thing, and inside there there's a menu item called Capture Node Screenshot. This might be Chrome-only, but I'm not sure, because I haven't tried it in the other browsers (hopefully not) and that will take a screenshot of that specific element as it exists right now in the page and then store it to your Downloads folder, or what have you.

That sounds very useful, I just haven't actually done it beside trying it, but... It could be useful.

**Suz Hinton:** Yeah... I wonder if you could use that with Puppeteer.

**Jerod Santo:** Oh, yeah, to automate some snatching of specific elements...

**Suz Hinton:** Yeah, to keep like a patent library refreshed, or something like that...

**Jerod Santo:** That's a great idea.

**Nick Nisi:** Yeah, that's a really good idea.

**Jerod Santo:** Did you two know about that one, or have you used it before? It was news to me until just like a week or so back.

**Nick Nisi:** As you were talking I just tried it, and it's really cool. \[laughter\]

**Jerod Santo:** There you go. Learn something new every day.

**Suz Hinton:** I did not know about it.

**Nick Nisi:** Another one that I really like is conditional and DOM breakpoints... Conditional being the ability to only stop on this code if some condition is met... And I actually don't use it for that. I use it for logging. If I just want to add logging to a page that maybe I don't have actually downloaded, I will add a conditional breakpoint and then just put a console.log statement in that conditional breakpoint. What it'll do is it'll hit that console.log out, and that returns falsy, and so it won't actually break there, but you can continue on and just add incremental logging as you need it, to see things without actually changing the underlying source.

**Suz Hinton:** That is a total life-saver. You know, when you're just constantly refreshing and it's maybe a situation where you can't always faithfully reproduce it - that is huge; I actually didn't know you could do that... And you know, when it always pauses on the breakpoint and you get really annoyed and you have to click Forward, and it feels so unproductive... I'm totally gonna use this.

**Nick Nisi:** Yeah, definitely. It's a big help if you are running into some kind of race condition... Because like you said, if you actually hit the breakpoint, it pauses JavaScript execution right there, and then maybe things have settled by the time you start executing again, and you won't be able to reproduce the bug in that sense. But if you're able to add logging in, sometimes you can glean more information about that without actually having to stop the execution of the JavaScript.

**Suz Hinton:** I love that.

**Nick Nisi:** \[28:09\] Then the other one I mentioned is DOM breakpoints. This is really cool if you have something on the page that is being updated, but you don't really know what part of the code is updating that... Maybe it's the color of a button or it's the text inside of this div, or something like that - you can right-click on the element in DevTools and then say "Break on" and there's a couple of options. There's "Subtree modification", so if any of its children are updated, attribute modifications if any of its attributes are modified, or if the node is removed, and it will stop on the line of JavaScript that caused the modification to happen to that element or to its children, and you can look at the stack trace and see maybe what part of your code triggered that node removal or modification... Which can be really helpful fi you have no idea about the code base and you're just trying to get in there and quickly find where things are going wrong.

**Suz Hinton:** That is super cool, because what would you have to do normally to emulate that in your debugging? Would you have to do a mutation observer, or something? That would be super annoying to set up. I really wanna try this out, as well. I did know it existed, but I haven't had a good use case yet.

**Nick Nisi:** Yeah, I think you could do it with a mutation observer, but this is definitely much simpler to help figure that out.

Another thing that's kind of related to that, although not really, is you can pass an element to a method on the console called git event listeners, and it will print out all of the event listeners that are set up on that element. If it has a bunch of click events, or other types of events, you can get a list of those and then you can right-click on those and say "Show in source" and it will go to that function that is the event listener callback, and then you can see what's actually being called.

**Jerod Santo:** Can you just pass in window, or something? Can you get all of them?

**Nick Nisi:** That's a good question.

**Jerod Santo:** Because that would blow my mind. I've had that question plenty of times, like "I wanna know all of the things that are listening and what functions are gonna..."

**Nick Nisi:** Yes, you can.

**Jerod Santo:** Oh, dude, you've just made my day. \[laughter\] I did not know this. I need this in my life.

**Nick Nisi:** Yeah, so it returns an object back, and the keys are the events that are being listened for. I'm just doing it on Stack Overflow right now, and there's a hashchange event key, download, message, resize... The whole bunch.

**Jerod Santo:** Right. Well, we can go home now, I'm happy. \[laughter\] We've accomplished what we came here to accomplish.

**Suz Hinton:** I feel like we all learned something from each other.

**Break:** \[30:52\]

**Nick Nisi:** What are some cool things that JavaScript can do that maybe aren't really apparent to others? Or going along with the topic of tips and tricks, some really cool things that JavaScript the language can do? Jerod, do you want to start off there?

**Jerod Santo:** Yeah, absolutely. This segment I've internally name "JS can do that?!" I like that because that's how I read -- if you guys have seen the VsCodeCanDoThat.com website, where they show off stuff that Visual Studio Code can do... Everytime I see that, I read it "...can do THAT?" \[laughter\] That's a side note.

So what are some things that are not apparent but you can do...? Here's one that I learned relatively recently, and I think it's ES6 anyways, so it wouldn't have helped to know it previous to that... We now have the spread operator, as you all know - the ellipsis (...), which has a couple of things that it does. One of those things is it allows you to basically expand an array into another one. If you combine that with sets, which I think is a relatively new class... Not sure; I'm showing my ignorance a little bit there...

**Nick Nisi:** Yeah, they're both from ES6. They're both 2015.

**Jerod Santo:** Okay. If you combine those together, you have a really quick hand way of uniquifying an array. This is something that happens to me - often I'll have an array of elements, maybe it's a bunch of dates, like data objects, and there's possibilities that there's duplicates in there, and maybe the user has clicked the same thing twice, or however it happens... Maybe I have merged two arrays together and now I have an array with some overlaps, and it'd be nice to have a .unique function. Lodash and libraries like that will have a .unique.

But without those things, it's previously been a pain to just say "Okay, given this array - I want to unquify it." However, if you use the spread operator... Let's say you have an array called -- I'll give it the most creative name, "foo." So you have an array called foo, and foo has five elements in it. If you want to uniquify that array, you can basically create a new set and pass the array to the set. The array is what you're passing to the set constructor, and a set has to have unique elements (that's part of what sets are), so there's no duplicates in sets... And that will give you a set of unique elements, but you didn't want a set, right? We started with an array and we wanna finish with an array. So that's where the spread operator comes in. If you pass the spread of that set into an array, it basically converts it back.

I'll put the actual code in the notes, as I'm describing it orally here and it's sounding ridiculous in my brain... So that way you can look at it. But it's like this really cool little shorthand where you can basically uniquify an array by passing a set with a spread operator, combining those two together. I've used that recently, and I thought "That is neat. I didn't know JS could do THAT!" \[laughter\]

Last one for me - this one is really brief, but I use it all the time; anytime you have a singular falsy value - you know, those things that aren't False, but they're falsy, like null, undefined, empty string, zero, I believe... Although I might get into some of the JavaScript words there... !0==true ? I can't remember...

**Nick Nisi:** \[36:11\] It's False.

**Jerod Santo:** It is False, very good; so 0... Things that are falsy, but you don't have the actual boolean value - you can use the BangBang operator, which is also fun to say. That will basically convert it into boolean... And the same thing on the True side. If you have something that's truthy, but you actually want True, if you do BangBang and then the variable, it's a double negation and it will booleanize it and then convert it... So you can go from falsy to False, and that's nice to have.

Those are my two things that JS can do, that hopefully if you didn't know, now you know.

**Nick Nisi:** Jerod, I just have to ask a very serious question... When you're using that operator, do you actually blurt out "BangBang!"? If you're working in an office, would everybody just look at you?

**Jerod Santo:** I don't blurt it out, but I definitely say it in my head every single time. \[laughter\]

**Suz Hinton:** I love that.

**Nick Nisi:** I feel like I do that. I do say "BangBang!"

**Jerod Santo:** There's that song "Bang Bang" that opens up Kill Bill...

**Nick Nisi:** Cher.

**Jerod Santo:** Is it Cher?

**Nick Nisi:** I think it's Cher.

**Jerod Santo:** Potentially... I know Quentin Tarantino is a fan, because there's a version that's very chilled out, and it opens up Kill Bill, I believe... It's a spectacular song, so I do think of that as well.

**Suz Hinton:** It makes me think of that -- I don't know whether this is an American or an Australian ad, but the Easy-Off Bam cleaner...

**Jerod Santo:** What? Easy-Off Bam cleaner?

**Suz Hinton:** Yeah, it's called Easy-Off Bam, and their tagline is "Bam and the dirt's gone", and I'm just thinking like "BangBang and the fake boolean's gone!" \[laughter\]

**Jerod Santo:** You should start an advertisement for this feature.

**Suz Hinton:** Anyway, that's what I thought of.

**Jerod Santo:** Report real-time feedback from the chat room - apparently the Bang Bang song is by Nancy Sinatra, not by Cher.

**Nick Nisi:** Maybe Cher might do a cover.

**Jerod Santo:** Oh, possibly. Very popular, very good song.

**Nick Nisi:** Yeah. I also did a search for it, and the first thing that came up was Jessie J and Arianna Grande and Nicki Minaj, so...

**Jerod Santo:** Oh...

**Nick Nisi:** All generations are welcome.

**Jerod Santo:** \[laughs\] There you go. Suz, on your list of things that JS can do you have binary literals, which I don't even know what that is... So please, school us.

**Suz Hinton:** Yeah, I was like really excited but also frustrated to find out that -- I think this has been a feature since ES 2015, so I felt like I was super late to the party by only finding out about it...

So JavaScript supports things like bytes in hexadecimal format, and it's supported that for a really long time. Some of you might know that I write a lot of JavaScript hardware libraries and just general projects with JavaScript hardware, so using hacks in JavaScript is pretty common for me in order to kind of send opcodes and things like that to hardware... But sometimes you just want it to be in the full binary format, so instead of having FF as the hex code, you can actually have like eight ones in a row, right? I'm pretty sure that's 255; someone correct me if it's not.

So that is so convenient to have that... And then the way that you write it out is you have 0b, and then you write your bits from there. And it doesn't just support a 8 bits, it supports longer than that. So it's pretty cool... I really needed it recently when I was working on a steganography project where I was trying to encode messages in images, and then I was trying to then decode the message back out of the images. And because you're working with a bit at a time, using hexadecimals is actually really frustrating, and you kind of have to write the bits out in string format, and then somehow figure out a function to then convert that properly back into hex code. That's now unnecessary, and I wish I'd known about it earlier.

**Jerod Santo:** \[40:20\] Well, you need a time travel device. \[laughter\] Where did I put that time travel device...? You can go back and teach yourself that. Or you can go back and listen to this episode past you.

**Nick Nisi:** Like Jerod, I hadn't really heard or understood what these were... But is this specifically being able to write -- if you wanted to write 255 in binary you could do 0b and then eight ones - is that what you're talking about?

**Suz Hinton:** Yes, exactly. Rather than having to do 0xFF, and then that's really the closest you can get to actually representing something that you can manipulate with bit shifting, and things like that.

**Nick Nisi:** Oh, very cool.

**Suz Hinton:** Because not all of us are that great at being able to flip-flop between looking at a hex number and knowing approximately what that is in bits... So having it spelled out -- like, I guess that's the point of a binary literal, actually seeing all of the ones and zeroes is super helpful even when you're debugging, but even just being able to reason about your program.

Especially when you're doing bitmasks and things like that, you don't have to wonder "What exactly was that bitmask that I'm using?" You can literally see them all laid out next to each other, which is kind of amazing.

**Nick Nisi:** Interesting. Yeah, that would be really helpful. Fun side note - I think one of the very first things that kind of got me into programming was a book on steganography that I got when I was in high school... It's just a really cool field.

**Suz Hinton:** Yeah! When I was a kid, I was really into cryptography, and ciphers, and all that kind of stuff... So I got really excited just because I had books similar to that, but not steganography ones. Steganography kind of makes me feel nostalgic about hiding data, and encoding, and things like that.

**Nick Nisi:** Yeah. I just think it would be so fun to do ultimate Easter eggs with stuff like that, like hiding things... I don't know. But speaking of bitwise operations, one of the cool "JS can do THAT?" tricks that I had--

**Jerod Santo:** You said it wrong.

**Nick Nisi:** JS CAN DO THAT?!

**Jerod Santo:** There you go. \[laughter\]

**Nick Nisi:** One of my cool tips I guess is using the bitwise operator, which is the tilde symbol on your keyboard... And specifically using that with something like Index Of to basically convert that to a truthy/falsy value for finding something in an array. Because if you used Index Of and the thing that you're looking for is at index zero in the array; well, that would return falsy. I don't fully understand what it does, but the bitwise operator shifts that so that it would actually be one, and the negative one that would be returned if nothing was found will be shifted into zero, so that will return falsy.

It's not something that I typically use a lot, unless I'm just quickly trying to do something, like a quick example, because it's not the most accessible code in terms of --

**Jerod Santo:** Yeah, it's obscure.

**Nick Nisi:** Yeah. But it's a cool, quick trick. But we also have better APIs in ES 2015 to handle that. There's a find method that you can use on arrays to return -- or a Find Index that will allow you to run a function, and if it returns True at any point, then that means whatever exists in the array and you don't have to specifically be looking for the index and then figuring out if it's not negative one.

**Jerod Santo:** \[43:56\] Right.

**Suz Hinton:** Totally. I see the tilde used in a very similar fashion when working with hardware, where we don't have those nice APIs and a lot of the time what you have is C... So it is really, really a nice trick to get stuff into like a zero, or a one, or just trying to be able to treat it as a true bool which is really cool.

**Jerod Santo:** So could you BangBang bitwise Index Of? Would that work?

**Nick Nisi:** Oh, man... Yeah. That would return True or False.

**Jerod Santo:** Wow.

**Nick Nisi:** \[laughs\] The other cool trick that also kind of came out of ES 2015 is the destructuring, specifically array destructuring in this example... Where you can say const \[a, b, c\] = this array, and it will take the first three values from that array and put those into those variables, so then you can access them just through those variables.

That's really helpful for avoiding having to say "Oh, this array sub zero is this, and this array sub one is this" and having that all over it kind of lets you better name the variables and use those names throughout, so that your code is more legible.

And one really cool trick that you can do with that is combine that with regular expression methods in JavaScript. One example is the match string method. On a string there's a match function - you can call that and pass an irregular expression to it, and inside of that irregular expression you can have captures (the parentheses), and then what gets returned from there is an array that contains everything that was captured... Everything that was captured from the irregular expression is the first thing in the array, and then each of the little subcaptures within there will be the next items in the array. So at sub one it will be the first thing, two will be the next thing, and so on... So you can use that destructuring to name those variables.

One example that I think of is the ability to, for example, get the month, day and year from a date string. If you had 2018-06-14, you could match those, match the first four numbers to this variable, so capture that. Then the next two in between the dashes as the day. And you can actually -- if you want to skip the first value in the array, or skip the first N number of values, you can just put commas inside of that destructuring, so it will just skip that and give you the next item in there.

So you can say, for example, const [, year, month, day ] and then call that function, and you'll get back three variables - the year, the month and the day that just match exactly what those are. It's a pretty cool way to use those and make your code more accessible just by making it easier to read.

**Jerod Santo:** That's a spectacular feature. What would happen in the case of a non-match, or maybe a partial match, in this case? Would you have undefined's in those variables, or what would they end up as?

**Nick Nisi:** Yeah, I think you would have undefined's in there. Real-time feedback...

**Jerod Santo:** ...as he pops open his console and executes it... \[laughter\]

**Suz Hinton:** Or you would end up with like -- I'm just thinking, stuff could end up in a different order even. So if you have something that's not as concrete about matching, like it's like "Oh, it could be this or maybe this", then stuff could get moved around... One entry might not be what you're expecting just because you got less results back, or something like that.

**Jerod Santo:** Yeah, exactly. So there could be some potential potholes in here.

**Suz Hinton:** I love how creative it is.

**Jerod Santo:** Yeah, absolutely. I think a non-match and you might actually wanna erase or follow a different code path altogether if you can't get that to hit... But that would kind of be up to the circumstance. Did you get a real-time follow-up? Did you try it?

**Nick Nisi:** Yeah, you just get undefined back.

**Jerod Santo:** Okay.

**Suz Hinton:** \[48:06\] Pretty easy to check... That's cool.

**Jerod Santo:** The commas, like the \[unintelligible 00:48:10.24\] when you don't want variables there is a little bit esoteric. I prefer it to be more explicit. I've seen other languages where you'd prefix it with an underscore, or have it say "unused" or something, and that would indicate that you expect a thing there... Because when I first see this comma - and we'll put this little snippet in the notes as well, so you all can look at it... But when I see that comma, I think it was an accident. I was even gonna ask you, "Do you have a typo there?" So it's just a little bit esoteric, but super handy.

**Nick Nisi:** Yeah, I agree with that. The benefit of that is it's not creating the variable, and especially if you're using something like const, you're not locking that variable in the scope to be that value... So there's one nice caveat to it. But you're right, it does look a little bit like a syntax error when you first look at it.

**Break:** \[49:07\]

**Nick Nisi:** Alright, so let's talk about clean Git history. This is an article that changelog.com actually posted I don't know when exactly, but a little while ago... It's an article from GitLab called "Keeping your Git history clean, or how and why you would want to." I thought it'd be an interesting topic to go over. While it's not JavaScript-specific, it is something that we all typically have to work with, especially if we're dealing with Git, which it seems like everyone is at this point.

I thought we'd jump right into it and talk about what the article is trying to convey, and some of the useful scenarios, and maybe some opinions. When I brought this up, Jerod mentioned that this is the ultimate -- what did you say...?

**Jerod Santo:** The biggest bikeshed.

**Nick Nisi:** The biggest bikeshed, yeah. \[laughter\]

**Jerod Santo:** You have all the colors...

**Nick Nisi:** Yeah... And that's something that I really feel when I'm bringing up issues with Git history, and I'm trying not to complain too much about it, because maybe it doesn't matter, but to me it does. The first thing in this article really kind of talks about why meaningful history is important, and they had a few examples but I didn't really think that they gave much of a reason why it's meaningful to have a clean history... But from that, they just put kind of understanding the flow of change on a project, and being able to quickly find where bugs were introduced.

Jerod or Suz, do you have any pros or cons, or yays or nays as you why you might prefer a clean Git history, or whether you don't care at all?

**Suz Hinton:** I definitely am in favor of having a good, clean Git history in almost all cases. I will admit that when I'm working on a dumb project that I don't intend on either showing publicly or having anyone else work on it, I tend to have silly, cathartic Git messages that are silly... That's just my way of rebelling, because I do care so much about it when I'm actually working with people...

\[51:55\] But I think for me the biggest advantage in having a nice, clean Git history is when you work with different people on teams -- and I know that the article mentions things like Git bisect, for example... So let's say there's a bug that's been introduced, and let's say you've got this continuous integration set up for releasing software, so you've got several team members' work all coming together, and if the CI has kind of missed something and production breaks, or there's this really weird thing that QA found, you can first look at all the Git messages where they're accurately descriptive - which I use first, because it's the fastest thing you can do... So burning down the list of stuff that actually went into that release is really useful. You can actually kind of see -- maybe there's keywords in that Git commit message that kind of points at a specific feature, and that feature might be the thing that has the bug in it. I really appreciate having descriptive, but succinct Git messages on commits.

Then, if you don't actually find anything, having neat commits that are very contextually heavy allows you to run Git bisect in order to jump between different pieces of work that were done in order to find that bug.

So I guess they are like my top two reasons why you would want a clean history, and they both come down to it's way, way quicker to debug something when it goes wrong.

**Jerod Santo:** I definitely agree with everything Suz just said, and I am pro clean commit history. I would bring the question of what exactly does clean mean, because I think people define it differently, depending on who you are... But specifically, I'm an advocate of high-quality commit messages, and providing like a single-line summary, and then allowing yourself to go into context and detail down below.

I've often found - actually, just recently - a circumstance where I made a change (maybe a year or two ago) to a specific file that was like an NGINX configuration, and I was sitting here staring at the code and I was wondering "Why is that config in there? I don't know what it does." There was a comment on it, which was like the worst comment ever... It described the setting. It's like, "I know better than that", but I definitely wrote that comment, which basically said what the setting was... So not a useful comment in the code... And then I was like, "Okay, well I'll just Git blame this and figure out why did I set this", because that's what I wanna know, right? Like, that's why history matters, because later on we become archeologists, or Sherlock Holmes, or in your case, Nick, Dr. House, and we need to find out more about it. We need that context.

And I went to Git blame, and I checked out the line, I checked out the commit, and the commit message was identical to the comment above the freaking line of code. And I thought, "That is a terrible job by me." Basically, past me just screwed current me out of like being able to know something. That alone -- I mean, that happens all day, every day, let alone you extrapolate to like teams, and larger things... This is me basically removing context from myself... But that's where those things need to live, and when you don't have (I'll just say specifically) high-quality commit messages... When we talk about clean history, are we talking about like not merge-commits, and keeping the actual branching clean as well? But specifically on comments, the commit messages - make those good; it's worth your time. Unless, like Suz says, it's a throw-away thing, or you just have more fun, just like say something silly, or nobody will ever see it. But if the code matters, then the commit messages should be good.

**Nick Nisi:** \[56:09\] Yeah, I totally agree with that. I will go as far as to say that I really want the history to be clean as well. Typically, that means that I avoid merge commits any way that I can, and I'll just squash and rebase everything when I'm going to master, to keep things nice and linear when I'm looking at the history tree. To me, that makes more sense.

I can see an argument where merge commits help as well, because you might just have that one commit, but then you can see a breakdown of everything that happened within there... But also, the commits within the merge should also be cleaned up, so that you don't have a bunch of superfluous commits that really don't mean anything.

A great example of something that I've seen on projects before is they'll just merge all of the commits in without changing anything or squashing anything down. One specific example that I had was I was going through and I was trying to figure out why this line in a file was the way it was... So I did what you do, I Git blamed it, and found -- not necessarily I didn't care who the person was that made the change, but I just wanted to see why it was made in that commit... And I scroll up to the top and see the commit message, and it was just "Fixing code climate errors" or "Fixing JSLint/JSHint errors", whatever... That really wasn't helpful to me, because they didn't prune that out of there, so it really didn't give me any context about what errors were around that, so I would have to find that commit and then look at the messages around that maybe to help figure out why the code changed. That's one big reason that I like to keep the history clean.

Another reason is I like to present the history of the code in the way that it should have occurred, instead of the way that it actually occurred. That's kind of important to me on some of the projects that I go into... I do consulting, and so before I deliver code to a customer, we can have a whole bunch of internal commits and bugs and all sorts of messages, but pruning that and cleaning it and presenting it in the way that it should have occurred, instead of the chaotic way that it did occur, helps to keep the customer's confidence in us high... So I like doing that.

**Jerod Santo:** Devil's advocate on that would be that you say you're keeping a clean history, but actually you are changing history to better suit your needs... So you could say you're rewriting history, and there's plenty of people that believe that the trade-offs there are worse than the tradeoffs of having too many branches and some commits that didn't mean anything... Because that actually represents history, whereas you are rewriting history - how dare you...?

**Nick Nisi:** Yeah... Good books aren't written, Jerod. They're rewritten.

**Jerod Santo:** \[laughs\]

**Nick Nisi:** I think that's a quote by Michael Crichton.

**Jerod Santo:** That's a good one.

**Suz Hinton:** There is such a thing as rewriting history too much, right? ...where some people get a little over-zealous (in my opinion) of trying to squash things down too much, trying to achieve too much with one commit just for the sake of cleanliness... What are people's takes on that?

**Nick Nisi:** There's no such thing, no. \[laughter\] No, I do agree. The one thing that I really look for is keeping attribution. So I wouldn't want to squash down somebody else's commits and then make them my own.

**Jerod Santo:** Absolutely. Specifically with long-running branches, like a feature branch (a large feature), and maybe multiple people worked on it - you're not gonna be rebasing it throughout its lifespan, because maybe it's already on GitHub and people are committing to it... In those circumstances I'm okay with a merge commit there, because it's kind of a thing; it's kind of a historic event, it's part of the history. It's like, "This thing was a big, moving branch alongside the main branch" and then "When did it come back in? When was it merged?" So that doesn't bug me as much.

\[01:00:16.28\] That being said, if I'm working solo on a specific thing and I'm on a branch, I will rebase and I will squash in that circumstance. So I'm not hardcore on either side of the fence.

**Suz Hinton:** That makes sense. One dislike that I have that I've seen from time to time is when somebody is merging in master to a feature that's like long-running, and they're not rebasing, and so they run into merge conflicts and they fix them... And a lot of people commit on the command line with like the -m flag, so they can write a message, and sometimes they'll forget that by default, merging something in when you have conflicts and then fix them and commit it, it will still append the normal merge commit message. And some people accidentally overwrite that, and they'll just write something like "Fixing merge conflicts" and then you completely lose context of what happened, and sometimes it just makes it look more convoluted. That, for some reason, kind of annoys me when you lose that merge commit in the first place, because it's really sometimes only useful for showing the history of when somebody actually put master back in and brought it up to speed.

**Nick Nisi:** Yeah, definitely. And on the topic of kind of longer-running feature branches - I think that that's one area that's difficult to keep the history clean, because you constantly want to be bringing in updates, if you need updates from master to work on that longer-running feature branch... That can be difficult, and you can resort to things like merging down into that, and then merging that back up, and that's where -- maybe I'm not doing it right, but that's where I've run into a lot of problems where I just give up and I don't really understand the history at that point, because there's the same commits being merged down, and then... When you look at the graph, it looks like they exist in two places, even though they really don't, but... It gets confusing and convoluted from there.

**Suz Hinton:** Agreed. I've definitely made a huge mistake once when working for a large team... They were definitely moving much faster than a previous team I was on; I was at the point in my career where I moved from a small team that didn't have continuous integration, into a larger team that had a lot of continuous integration... So for long-running features where you can't always just incrementally ship it under feature flags and things like that, I got to a point where I had to merge master or rebase master in, and I had let it go too long without realizing... And there were so many commits coming in, and there were changes to the same files that I was working on, and I ended up with a rebase session with conflicts in 144 different steps. So I had to fix the conflicts, and then do `git rebase --continue` up to 100 times...

**Jerod Santo:** Wow...

**Suz Hinton:** ...and I was so both ashamed of myself, even though, you know, there's a first time for everything when that kind of thing happens, and also just the sheer size of the issue that I had, and like "How am I ever possibly gonna deploy this?!"

**Jerod Santo:** Related story - I was livestreaming on Monday afternoon (last Monday) and it had been a little while... We were open sourcing our show notes, so that you can edit the show notes on GitHub and also edit it from the CMS, that way people can help us make the show notes better... And I'd been Twitch-streaming while I do that, and it had been about a month and a half since I worked on that particular feature... So on Monday I was back at it, I was like "Alright, let's do this", and I got started. And the first thing I did was I went to rebase master, and I spent about 45 minutes of that Twitch stream just rebasing... It was the most boring, stupid... I couldn't remember what I was doing, and I was just like "This is not good streaming", but... It wasn't 144 in a row, that's for sure.

**Suz Hinton:** \[01:04:19.03\] Solving merge conflicts is probably one of the most difficult things to do on a stream as well, because you need like 100% concentration. I have definitely failed at trying to resolve tricky things like that on stream, and I'll just say to people "Hey, I'm gonna actually abort this. I'm gonna do it off-stream, and then we're gonna move on to another thing... Watch the repo if you wanna see me resolve this off-stream, for sure."

That intense rebase that I talked about earlier - I actually took it home with me that night, because I didn't want a single interruption... So I think I worked from 7 PM till 10 PM that night, and that obviously cut into my personal time, which meant I never made that mistake ever again.

But I totally agree about the stream stuff. It just feels so boring, and also, you just feel like you don't have your best brain to actually fix it.

**Jerod Santo:** Yeah, it's like a double whammy.

**Nick Nisi:** Yeah, I couldn't imagine trying to do that live. That would be awful, and probably boring, but also, at the same time, it's reassuring to hear that everyone goes through these problems... So it's a good thing overall.

Now, the article kind of goes into four different scenarios, and they're all kind of based around rewriting history. We've kind of already talked about that. When you rewrite history, you do end up having to force-push back up, so I was curious what your thoughts are on force-pushing. Do you have any qualms with that?

**Jerod Santo:** Every time I do it, I feel like I've failed. \[laughter\] And that means that I do it all the time. \[laughter\] Not all the time, but... Yeah, I mean... You're not supposed to do it, right? It messes up everybody else.

**Suz Hinton:** I've lost work because somebody else did that, and I've had no option but to redo that work... You know, I came in in the morning after working on something the night before; I came in, and I pulled everything down... And there's no way to really see that coming, right? It's just a routine fetch and merge, or a routine pull... And I realized that all of my work was gone because a colleague had set up their -- they didn't like merge commits, so they set up their .gitconfig to just do a rebase, and somehow that had erased the stuff that I'd pulled up... Because they thought that they had to do -f if you ever rebase on master... So something happened and they ended up just force-pushing up and it just totally erased my stuff.

Usually, I have the motto of -- if you're working by yourself and you're force-pushing because you're trying to hide embarrassing mistakes that you made on your own personal GitHub repo, that's okay. But if you're working with teams, there's almost no reason to really take that risk.

**Nick Nisi:** I'm gonna get controversial here... Adam in the chat room is also saying that if you ever have to force-push, you're doing it wrong. I take pride in my force-pushing, I'm gonna be honest... \[laughter\] And keeping with the spirits of the history that should have happened, instead of what did happen... And the scenarios that this article goes through - it goes through changing the most recent commit, changing a specific commit, adding, removing or combining commits, so interactive rebasing, and then a complete fresh start... Those are all rewriting history, and then you have to force-push from there.

I'm completely comfortable force-pushing when I know that it's my own feature branch and nobody else should have really been on that, doing anything, so I'm ideally not affective anyone.

\[01:08:03.02\] GitHub does actually let you specify, like "You cannot force-push to master" so it will fail that for you, and that's a good thing to set. I would never do it on master, except for when I did it a week ago... \[laughter\] And that was to remove sensitive information. But I did communicate with my whole other team of one person and let him know, so it wasn't a big deal; that's the other thing - communication is very important with that.

But I think that amending commits is something that I do quite often, and then I'll just force-push that. There's also a better flag than --force; there's --force-with-lease... It will do a force-push, but only if no other commits have been pushed to that. So if somebody else did push something up to your branch, it will fail your force-push, because other commits have occurred since you last pushed.

**Jerod Santo:** That sounds like that should be the default for --force, and then you should change it to like "--force-yes-I-know-what-I'm-doing" kind of a flag if you're gonna do the other one.

**Nick Nisi:** Exactly, yeah.

**Jerod Santo:** Force-with-lease? Who comes up with these flags? Like, lease - like you have a lease on an apartment?

**Nick Nisi:** Yup.

**Jerod Santo:** Alright, no comment.

**Nick Nisi:** I don't know, I'm very comfortable with that, and that's kind of how I help to maintain a clean Git history. GitHub also does a lot more recently, with allowing you to do that straight from a pull request, where you can specify that you want to merge this pull request, or you want to rebase and then merge this pull request, so it would ideally do just a fast-forward merge and not actually have a merge commit.... Or you can do a Squash and merge, so it'll squash all of the commits from that pull request down into one, and then merge that.

That's pretty cool, because when it's tied to a pull request like that, Git is also keeping track of that branch and you can restore than branch if you need to later on, which is really helpful for later debugging... But that's a GitHub-specific feature.

**Jerod Santo:** I'll tell you another reason why that's cool - because you don't have to know all of the intricacies of how to do if from the command line stuff. I'm a command line user, I have been my entire career. I've been using Git for a decade. I cannot remember how -- if you told me to squash these and rebase, or something, from the command line, I would be in the Git man pages for like 15 minutes, getting it right.

I think that's awesome because that brings that feature, which is very nice for when you wanna use it, you know, behind the big, green button, and that's spectacular.
