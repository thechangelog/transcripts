**Ian Lopshire:** Welcome to Go Time. I'm Ian, and today I'm joined by a number of my lovely co-hosts: Jon, Kris and Johnny. How are y'all today?

**Johnny Boursiquot:** Lovely. You said, so... \[laughter\] I'm just going with the flow here.

**Kris Brandow:** It's like rainy/foggy outside, so that's a little bit... It's a little calm. But aside from that, doing good.

**Jon Calhoun:** Yeah, it's been a little bit gross here, definitely.

**Ian Lopshire:** Alright. Today, we're gonna discuss jumping into a new to you and existing codebase; how to familiarize yourself, how to assess the state of the codebase, and what to do when it's less than ideal. And yeah, we'll just jump right in. So what do you all think is the most important piece when you're jumping into a brand new to you codebase?

**Johnny Boursiquot:** Does it have tests? Because before I touch anything, I want to know I'm not gonna break something.

**Kris Brandow:** No, clearly the first thing you do is you go home, and you rewrite the whole thing over a weekend, and then present it to your co-workers and be like "I fixed it!" No, don't do that.

**Johnny Boursiquot:** How to make enemies and alienate teammates. Got it.

**Jon Calhoun:** I mean, I feel like if that's your goal, you need to do what Johnny said, and make sure there are tests. Because even if you're going to be that person, if you don't have tests, it's likely you break a lot of things.

**Kris Brandow:** I feel like the first thing that you should do with your codebase is read it. I feel like that sounds obvious, but I feel like a lot of times people don't like sit down and actually like study what is there; they just kind of want to jump in. We encourage people too, like "No, we want you to have your first commit on day one." And it's like "First commit... You don't know how this thing works. You don't know anything about this thing. How about you just sit down, study, learn it...?" Not forever, but yeah, maybe a week or two, especially if you're new on the job.

**Jon Calhoun:** I feel like I'm slightly different. Like, the most successful codebases I've jumped into, I feel like instead of reading it myself, what has worked best is having somebody who's been on the codebase for a while sitting down with me and walking me through "Here are the important things I think you need to know." And even better they can walk you through your first commit. If they really do want you to have a commit early, somebody can guide you through that process to be like "I'm going to be here to hold your hand for the first one, to sort of help familiarize you with it. Granted, it requires you to have a team that has somebody that can do that. So sometimes that's not always an option. I've definitely done my share of consulting things, where there's nobody who knows how that code works, so good luck...

**Kris Brandow:** Yeah, I guess it's like what level are you when you enter the codebase? Because if you're like higher level, if you're like staff plus, then it's probably a good chance that people don't actually know how it works, or only know how small corners of it works. But yeah, I think if there is someone that can sit down and just give you some good, like "Here's how this all works. Here's how it all fits together." But you should also go back and make sure that what they've said is true, because a lot of the times people will think they know how things work, and then things have changed since they've touched a certain part of it, so they don't actually know how it works.

**Kris Brandow:** Sometimes it's impractical to attempt to read an entire codebase. I mean, I don't know about y'all, but I've been around some pretty massive codebases, and trying to sit down and read through it all - I mean, that's just not practical, right? So if you have sort of an area in which you know you're gonna start working, an area of responsibility, that may be just as good of a place to start, to say "Okay, well, can I localize, or can I of try to understand just this module, or just this one service out of dozens or hundreds?" Because I think for me learning just for the sake of learning, just to grok and have an idea where things are - that has some value, but it has diminishing returns. So I usually need something that I'm trying to do or need to accomplish, that sort of guides my sleuthing; it guides my research and what am I looking for. And then definitely, if you have somebody to sort of be your guide...

Usually, in my experience, the first commit is something super-trivial. You're just trying to get it done, just to get sort of a feel for the end to end workflow. But any piece of feature, or bug fix, or anything like that usually requires a bit more effort and time to sort of wrap your head around. And if you're going to be sitting down and doing that yourself, and having somebody you can always hit up on a Slack or whatever, to say "Hey, I don't understand this." Or having somebody just give you a high-level walkthrough... That's all valuable. But at the end of the day, having a particular task you're trying to accomplish - I find that helps guide the exploration process.

**Kris Brandow:** I guess it's also what is your purpose for being in the codebase, or for learning this codebase... Because if "Oh, you're going to be working on tickets", and those tickets are put together by somebody else, and they're well scoped to a certain area of the codebase, and the codebase is well maintained, then it's probably not a good reason for you to sit down and at least at first go through and learn the entire thing. But you're going to be perhaps working in a bunch of different places in the codebase, or no one really knows how the codebase works, then I think it is super-valuable for at least someone to sit down and read through the whole thing. And it's usually good for a new person to do that, because once again, there's a lot of -- you know, knowledge atrophies over time when it comes to codebases, because things move... And if you don't see all the changes happening, then you won't know that things have moved.

\[06:10\] But I guess this is all contingent on not having a well-documented codebase. Because if you have a really well-documented codebase, you can probably just like read the documentation and then get going. And if it's like well structured, then you can really just compartmentalize and read the parts that are well sectioned off, and kind of in the scope of what you want to do. But I have not run across any of these codebases in my career. I've attempted to create some that are well documented and have "Okay, here's all the dots, here's all the readmes, here's all the comments, here's the layout of the thing, here's a document that will walk you through it..." But I don't think I've ever entered a space, entered a company or an organization where that is the current state of the codebase. And that's perhaps me and just like my weird career that I've had, but I think probably most codebases right now are in that state where they are not necessarily well documented, where most of the people in the organization don't know how a lot of the stuff works, and they only know how certain parts of it works.

So I guess if you have people that know things, or if you have good documentation, that's a really good place to start. But I don't know if it's necessarily practical to go into a lot of new codebases with the idea that there's gonna be somebody else that can help you necessarily.

**Johnny Boursiquot:** Never assume the documentation is good, right? \[laughter\] Because you don't know if it's good or not. I mean, there could be a ton of it. There could be diagrams... But how up to date has that been...

**Jon Calhoun:** Johnny's thinking last commit was last week, and the last documentation update was three years ago.

**Johnny Boursiquot:** I mean, come on... You said it yourself, Kris , that you never counted a codebase. I've been doing this for 25 years; neither have I. So I it's safe to say that whatever documentation you find is an attempt at providing some sort of guidance... But the moment I get into a codebase, I do the -- what is it, the Boy Scout rule? "Leave it better than you've found it" kind of thing. I started finding things, immediately. I start saying "Oh, well, this class no longer exists. This functionality no longer exists." Plus, there's something to say about sort of walking through sort of a statically-typed, strongly-typed language like in a codebase, over a dynamic, interpreted thing. I can use my editor, or even without an editor, for something like Go I should be able to do a code def, "Go find where this particular struct is defined, or this particular interface is defined." Go learn more, by following what the compiler is going to be doing to identify these things. Do these things make sense? Do they exist? In the case of Go, this variable can't be the declared and not used, right? But not every language gives you that sort of capability, especially interpreted stuff.

I remember going through Ruby codebases where I was just pulling my hair, trying to figure out what something did, because some of the things that made the language great and friendly, like the method missing, all that magical stuff also made the codebase hard to wrap my head around. And I have a very different experience when I'm using something like Go, or Java, or something like that, where I can rely on the static nature of the language. So those experiences are very different, in my opinion.

**Jon Calhoun:** Yeah... I'm thinking about the Ruby cases, and I've seen JavaScript codebases that were worse, in my experience. But when people have like the on save callbacks for models in your database, if they have too many of them, sometimes it can be very confusing to try to trace how things are happening, because you'll do as you said, Johnny - you'll want to add a feature for... Maybe it's to edit a to do item, on like a simple to do app. And you go through and you follow, and you're like "All this thing does is it saves this thing. How are all these other functions being called?"

\[09:59\] And you have to like dig into everything to sort of figure out "Oh, there's all these callbacks that occur." And now all of a sudden tracing it is a lot harder. Whereas in a language like Go, I don't feel like that tends to happen as often. It's a lot more explicit, like "I'm going to do these things now." Well, sometimes, I should say...

**Kris Brandow:** I feel like it depends on who's written it. If you have a codebase that was written by somebody that is either from a dynamic language, or is super interface-happy, I've found that that has that same problem of "Oh, where's this thing defined?" It's like "Oh, it's an interface. Where is the implementation for this interface? Where is this thing located? Oh, it's in this other package, way over there. And I think now GoGuru and Gopls can help you traverse through some of that by being like "Oh, what implements it in here's is the context that I'm looking at it." But it can be super-tough to traverse that sort of stuff when the codebase hasn't been structured with the idea that you should be able to use your static analysis tools to find your way around.

**Jon Calhoun:** Yeah. I think that's something to definitely consider even when just writing code... There's always trade-offs for everything, but when using interface a lot of times, people are like "Well, why don't you use a interface? Because then you could plug in anything here." But like you said, there are cases where it's harder to figure out what's actually being called here. And if you don't need the interface, it might have been better to just use that thing.

**Kris Brandow:** Yeah. I mean, if you've probably used Go and properly used interfaces in Go, then you wind up with interfaces kind of being the last point you need to look at something, where "Okay, it doesn't really matter what's behind this. I don't particularly care." Like "Oh, it's an IO writer." I don't really care what's behind that. I just know it's gonna write something, unless there's some specific bug or some specific functionality I'm looking for. But unfortunately, a lot of interfaces in Go are not written like that. At least in my experience, a lot of interfaces in Go aren't designed like that. They're designed in that Java-esque style, where it's like "Oh, we have an interface here. And then there's an implementation, probably called impl, laying around somewhere. Where? I don't know, but it's somewhere in here."

**Break:** \[12:01\]

**Jon Calhoun:** So have any of you guys done consulting?

**Johnny Boursiquot:** Yup.

**Kris Brandow:** A little bit. Yeah.

**Jon Calhoun:** Okay. Have you found the way you approach a codebase is different then? I'm saying from my experience. Maybe this will help... In my experience, one of the hardest shifts as a consultant was that you went from that "Okay, I'm here to learn the codebase long-term", and a lot of times for some of the consulting gigs, it's like "My job right now is to get this task done as quickly as possible." And I might see things or want to understand things more, but if it's not pertinent to what I'm doing, I have to like force myself to not go down those rabbit holes and not try to refactor this thing. Because it's like that's not really what they want me here for right now.

**Johnny Boursiquot:** Yeah. Similar approach. I'll make notes of things. I'll be like "Hey, it might be useful to look at this later on. On my discovery process I've found X, Y and Z, but I'm gonna solve this one problem... But these are things you may want to look at." But I have to be very disciplined not to touch those other things, because I could open a can of worms that I really don't want to get into, or that they're not paying me to get into.

**Ian Lopshire:** I've not done the consulting, but I still think that's a -- even inside a company, it's a valuable skill, to be like "I'm gonna know this for later, but that's not my job right now. I need to finish this task."

**Kris Brandow:** Yeah. When you're trying to do task-specific work, it's good not to go on those wild goose chases... But of course, if you are a full-time person... The thing I've seen with a lot of internal people is that they think of themselves as like contracting or consultants, where "No, I'll just fix this little one thing", and then you wind up in a situation where there's this big haunted garden that's like at the core of what the software is supposed to be doing, and everybody's like "Yeah, none of us really know how that works, so just be very careful when you touch things in there, and hopefully you won't break anything."

**Ian Lopshire:** Yeah, at my current job there's code comments that say "Here Be Dragons" all over. Like, "Don't touch these blocks."

**Johnny Boursiquot:** It doesn't tell you why, but it just says "Don't touch." Great. That's awesome. \[laughter\]

**Ian Lopshire:** Obviously, that's a red flag. How else do you -- as you're doing this exploration, how do you assess the health of this codebase? What tells you it's good, what tells you it's maybe lacking in some areas?

**Johnny Boursiquot:** How quickly can I get in and out, and get the task accomplished.

**Kris Brandow:** \[16:11\] Yeah, I was gonna say, how quickly can I actually understand the concepts in the codebase that I need to understand? How cleanly separated are they, or how well documented are they, how good are the variable names, and method names, and type names?

**Jon Calhoun:** Yeah, I think a lot of that does come to what Johnny had said earlier about picking a specific task, at least for me, of like trying to trace -- whether it's a web request or something, just trying to trace it and see how the whole thing flows. And if that's pretty easy to get through, and to intuitively be like "Oh, I bet it's going to this file, or this package next", then it helps. But if you feel like at any point in time there could be like a random twist or turn that you weren't expecting, I'm like "Oh, this is not where I'd like this to be."

**Ian Lopshire:** It's almost like also how deep do you have to go. Like, the more times I have to Cmd click and follow something.

**Jon Calhoun:** I think he's like "Jump to definition."

**Kris Brandow:** Oh.

**Johnny Boursiquot:** Alright. Yeah, he likes to use something else. Forgive him. It's okay.

**Kris Brandow:** I don't use my mouse...

**Johnny Boursiquot:** \[laughs\]

**Jon Calhoun:** I almost feel bad about saying shortcuts, because I don't know which ones I've changed at this point... So if I say it and then everybody's like "What shortcut is that?", I'm like "Oh yeah, that's not the normal one."

**Ian Lopshire:** Do you all really not use your mouse? This is a side, but...

**Kris Brandow:** No. If I need to go to a definition, it's - what, Ctrl+\] in Neovim, and that just pops me where I want to go. And then I use Ctrl+T to get back out. Yeah, I do not use my mouse in Neovim. I just move around.

**Jon Calhoun:** I'll say this - I use my mouse for some things, but not for go to definition.

**Johnny Boursiquot:** Definitely not for go to definition. Because I'm doing it so often, I've had to remap my keyboard. Right now I use Vim mode in VS Code, and I just have a GD as my shortcut. And I'm constantly hitting those keys.

**Ian Lopshire:** Alright, maybe I need to reassess this... \[laughter\] But back to our normal discussion, assessing the health... Something I look at is, one, do tests exist? And two, what are the tests actually testing? I know if they're testing exact outputs and stuff, maintaining this is going to be annoying, because I'm gonna have to fix 30 tests when I change one thing. I don't know where else I was going with that. Any opinions there?

**Johnny Boursiquot:** Are you talking about the quality of the tests?

**Ian Lopshire:** Yeah the quality of the tests. I'll see someone testing an HTTP handler, and they're testing the exact JSON output, versus the inputs. And so you omit empty one field, and all of a sudden you have to fix 30 different tests. And you have to go through that string JSON to find it, right? Stuff like that.

**Johnny Boursiquot:** It's hard to -- I used to have this very sort of judgmental approach to reviewing code and stuff, and especially a codebase I didn't know. I've since ratcheted that way down. I'll go in and sort of with a - not sympathy... Empathy for not knowing what I don't know, not knowing why a particular test was written the way it was, or something like that... Who knows, it might have been written by a junior who didn't really know at what level to test. Maybe it was written by a senior developer who just wanted to get something out the door, because deadlines... Maybe it was written by somebody who's new to Go period.. They might be experienced, but maybe they found something on StackOverflow or some blog post where the recommendation perhaps is not the most idiomatic or the best thing to do... There's a variety of reasons why; things like tasks, or even implementation details may vary.

Usually, what I like to do is to sort of maybe highlight a particular piece of code, and basically ask people... A lot of times one of the things I like to do is basically record a quick video of a have a particular, a set of things that I'm looking at. I'm like "Hey, I noticed that this, but when I go here, I see this." Or "When I go to this test, if I change this one thing, five of these other things break. Before I attempt to fix anything, can anybody provide some insight or input into why was done this way? Because I don't want to assume that I'm just gonna make the world better, when I can just make it worse."

\[20:25\] And then I'll put that out there, and then a stream of comments will come back and "Oh yeah, I remember this. o and so did this, because we had to do X, Y and Z reason." And you learn so much about sort of the history... Because definitely not during interviews or consultant discovery; you are going to learn things when you come across something that basically you're trying to solve. And at that time, you're gonna get some context and history for some of those decisions, if those people are still around. If nobody's around and you want to chance it - again, if it has to do with tasks you're trying to solve, yeah, do the job they hired you to do. But before I change anything, I usually like to ask "This is what I like to do... But when I do this, this happens. Do I need to change my approach, or was this sort of \[unintelligible 00:21:18.26\] and I might as well fix it while I'm touching this code?" kind of thing.

**Jon Calhoun:** So as a follow-up question, for any of you I guess, are there certain types of tests that you will look at and be like "This absolutely needs to get changed?" Does that make sense? The example that comes to my mind, at least, is whenever you have a codebase that has tests that sometimes pass and sometimes fail. I'm very strongly opinionated of "This test either needs to get removed, or it needs to be fixed. Because as it stands right now, it's not benefiting anybody."

**Kris Brandow:** Yeah, I feel like when the tests are also very verbose, and you haven't used like table testing or any of those techniques, that's another sign of just like you should probably do some cleanup around this, so we can actually make these tests tractable in some way. But yeah, definitely, if there's flaky tests, those are just -- because then it's just a bunch of noise, and you're just like "Yeah, the build's failing", and then you get used to just seeing the build fail randomly, and you're like "Oh, it's just failed." But then like "Oh no, an actual real test, that's not flaky, is failing now", and you can't see it for like five minutes, and you thought it was a flaky test. It's like, just figure out how to make those flaky tests not flaky.

Of course, sometimes the underlying problem of why a test is flaky is like deeply entrenched in that codebase, because of some weird timing thing... It's like "Just increase the timer by five more seconds, and then it will stop being flaky." \[laughter\] "Okay, but we should also fix the thing in the codebase that's making it like that."

**Johnny Boursiquot:** Any test that talks to external systems, the moment I see that in a unit test, that's a code smell for me. So there's a gray zone there, especially if you're interacting, say, with a database; maybe you have a local version of that database running, and basically, as you're writing your tests, you don't want to stub out database calls or something like that, whatever. But even for those, there are sort of mocking libraries for SQL server-based database servers, and things of that nature. They take a bit of effort to set up, but they may in some cases - I'm not gonna say always, but in some cases they may be worth sort of investing in... Especially if you have a lot of tests, and especially if you're going to be running a lot of tests in CI. The fewer dependencies you have on external services during your tests, the faster your tests run. But you have to sort of make that separation between unit tests and integration tests. If I see a codebase where the lines are blurred for no good reason, then I'm usually like "We need to do something about this." I'm not going to fix it all now, over the weekend or whatever, but I'm going to raise "This is something that we should really spend some time addressing."

**Kris Brandow:** \[23:58\] I feel like testing is one of those areas where we as an industry have just not really figured out how to do this well yet. Even with mocking, it's like, I've tried to use SQL mocks so many times, and they always -- like, you just wind up with such a rat's nest of this mocked code, because there's a really fine line between where it's useful, and where "Well, now you're just implementing a database, and SQL-mock", and it's just absolutely atrocious. And you make like one small schema change, and cascading problems with everything. But I feel like there's that same line between "What is a unit test and what is an integration test?" And is it like a speed thing? Or is it like an encapsulation thing? What happens when there's things that are kind of on the edge there? And then you're talking about "Okay, well, if you want to do unit tests well, you need to structure your codebase in a certain way", and is it actually practical to structure it in that way? Is it worth it? I feel like there's a lot of open questions there, that I don't feel like they really get asked or answered a lot, because "Oh, you should be using a unit test here." I'm like What do you mean by a unit test? How you define a unit test?" But I think that's more of a philosophical, meta thing.

**Johnny Boursiquot:** It doesn't have to be, right? I mean, I think a lot of times in my experience it's team-dependent. Personally, on my teams -- so concrete example. Rather than passing an instance of SQLDB, or something that implements it, like GORM, or SQLx, or whatever you want to use; rather than passing a value of that particular type, I'll use a data access pattern instead. I'll say "Okay, here's a thing that is able to provide you the data you're looking for", whether that thing uses an in-memory data store, or whether it actually uses a network connection to make a database request; it doesn't matter to you the thing that needs to say "Hey, DAO, can I get a list of users?" or whatever. That way, you're not forced to then for every single thing that might need data, you're not forced to then say "Well, I need to know how to handle a database connection when I initialize this particular struct" or whatever. You just pass on a DAO. That way that DAO, you can just have a test for that. If you want to have one where you're dealing with database connections, that test is localized to just that thing, and then no other thing that uses it, no other service or struct or whatever it is needs to know how you get this particular kind of data. You just simply have a DAO that \[unintelligible 00:26:28.11\] data. So that's a decision that I had to make, that "Hey, on our team, this is how we're going to do this." But I've seen it done differently in other teams. As long as you're consistent, I'd rather the consistency than a hodgepodge different mixtures of styling approaches on the same project.

**Kris Brandow:** Yeah. DAO stands for Data Access Object.

**Johnny Boursiquot:** Yes.

**Jon Calhoun:** I put in the show notes to add a link to something for that... I think all of us knew what he was saying, but at the same time it's like somebody listening might not know for sure, so we'll have a link there.

**Johnny Boursiquot:** Well, thank you, thank you. I forget sometimes that not everybody's in my head. \[laughter\]

**Jon Calhoun:** I think I became more aware of this whenever I worked in the government sector, because I feel like somebody's job there is to make acronyms. So you get software, and then you get acronyms on top of that built in, that it's like if you haven't worked here for six months, you have no idea what's going on anywhere. Because even the comments in the code are like all acronyms, and you're like "This makes no sense."

**Kris Brandow:** This is also a very corporate thing. Almost every large corporate environment I've been in is just like "Here's the soup of acronyms." And some of them are the same acronyms, but they mean different things. So you need to know by context which acronym you're actually supposed to -- you've got to figure it out. And then new ones pop up all the time, and you're like "What does that mean?"

**Ian Lopshire:** \[27:49\] So I do want to get into like how to handle when you do discover these kind of nasty things... But first, any other like major code smells when you first jump into a codebase, anything like that?

**Kris Brandow:** Lack of comments. Or hostile lack of comments. Because in Go, the linter tools will yell at you if you don't comment your publicly-exported things. And a trick I've seen in numerous codebases is people just put like the name of the thing, and then dot-dot-dot to get the linter to shut up.

**Ian Lopshire:** That is every function in the codebase I work at.

**Kris Brandow:** And I'm like "This is a malicious compliance thing, and it is just so smelly."

**Jon Calhoun:** I'm shocked they don't just turn off warnings and stuff... Because when I've recorded courses, because I'm verbally explaining what's going on, I'm like "I'm not going to make you watch me write this comment." So I'll turn those warnings off just for recording stuff, because I'm like "I don't want to do this." But I've never seen people be that malicious, where they're like "I'm going to do exactly what it wants, and nothing more."

**Kris Brandow:** I have seen it many a times.

**Johnny Boursiquot:** I will admit, if I'm writing a library to be used by others, I will use Godoc judiciously. But if I'm in something like a line of business application where the names are self-explanatory enough, and I don't have a particular behavior that does something sort of sophisticated, where it warrants that extra piece of documentation, then I'll sometimes - most of the time; I'd say 50% of the time I omit the Godoc. But I'm much more stringent with it for libraries than I am with sort of regular application logic... If it has good names.

**Jon Calhoun:** I was gonna say an example of this, the classic when you're learning Go is if you have like a greet function that takes in a name and returns a string that greets that person. I don't feel like the documentation for that is going to be super-useful. At that point it's like "I'm pretty sure I can guess what this is doing."

**Kris Brandow:** Yeah. Although there's a part of me that's just like if you can't write documentation for it, should it be exported at all? Or should it just be a private thing? I don't know, maybe it's a little too stringent, but... If you don't know the purpose of this thing, we can't state its purpose, should it exist?

**Johnny Boursiquot:** I simply assume we all did this already. Or perhaps I shouldn't assume, right? Obviously, we're talking about Go here, so if you capitalize something - and again, if you're writing a library, there'd better be some comments on that thing. Especially if it's public, that's stuff shows up in pkg.go.dev. I want to know what the heck I'm looking at. If if it's an internal codebase and you export it, if it's a library - again, still better have some Godoc on it. If it's regular application logic and you export it, the question then during code review - I'm gonna be asking "Hey, this doesn't seem to be used anywhere else outside of this package. Do we need to export that?" And I usually get "Oh, yeah, you're right. You're right." Basically, for some reason, out of habit, or whatever it is... Or maybe they're creating a particular struck and just maybe the name of it just kind of lends well to having capitalization... I've seen \[unintelligible 00:31:03.18\] with methods all of them being capitalized, and I'm like "Does this one need to be capitalized?" "Oh, I was just on a train of thought, and I just happened to capitalize everything completely accidentally." And if somebody doesn't say "Hey, do you need this to be visible outside the package?" then it'll just happen to go there without any good reason.

**Kris Brandow:** Yeah.

**Jon Calhoun:** I feel like for whatever reason exported functions and everything look more aesthetically pleasing... Even though I know I have to not do it, it just looks \[unintelligible 00:31:30.22\]

**Ian Lopshire:** A hundred percent.

**Johnny Boursiquot:** Exactly. It just looks visually more appealing.

**Jon Calhoun:** And I think that's why it happens a lot. It's like "It just looks better."

**Kris Brandow:** You feel important, you're exporting something; you're giving something out to somebody.

**Jon Calhoun:** I wouldn't be shocked if there's people who are learning Go who don't realize that there's a difference between the two. They're just like "Oh, this person got lazy and didn't capitalize this one." \[laughter\]

**Kris Brandow:** \[31:52\] I do feel like if you don't make it lowercase, so you don't like make it not exported by default, that does lead to a bit of package-itis, which will then lead to people liberally using the internal directory, which always irks me a bit... I'm like "Just make it one package. What are you doing? Why do you have all these packages? You have this weird import graph now... Just make it all internal. It'll be fine." But I think that's like part of the reason why people start exporting things. They're like "Oh, but I need to use this from this other package." It's like "Well, should that other package actually exist? Can't you just have these two things be in the same package?"

**Johnny Boursiquot:** So I'm assuming your question, Ian, extends to not just the codebase, but the operational side of things. I'm thinking about when this code is actually running -- I'm a big fan of, as they say, testing in production. When this thing is actually running, what sort of visibility do we have into what it's doing? Is there any observability? I mean, these days most people are or should be doing some sort of open telemetry, tracing, or metrics, or both... So it's "What kind of observability do I have into this thing when it runs, especially at scale? Do we have any of that?" And if we don't, depending on the criticality of that piece of software for the business, I'm gonna be a very big proponent of "Can we get something in here quickly?"

**Kris Brandow:** And the other side of it too is "Is there too much? Have you just added metrics and log lines for literally everything, so now it's just a lot of noise?" Because I've seen that as well.

**Jon Calhoun:** That's like the flaky test problem again. If you have too much of something, or if it's not useful, it's like "Why is this here?"

**Kris Brandow:** I mean, it's like the Grafana dashboard problem. It's not just Grafana specifically, but the dashboard problem, where "Look, we have all these dashboards." I'm like "Okay, and what do they mean? What are they saying? What are they telling you?" "I don't know, when the number changes, that means something's bad." It's like "That's not good enough."

**Jon Calhoun:** So I had this happen where I had Google Analytics on a personal site, and then I took it off... And they're like "Why would you take that away?" And I was like "Basically, what I've found was that I wasn't acting on any of the analytics I was seeing. It was literally just numbers to look out on graphs. And I came to the conclusion that there's no real reason for this to be here, unless I'm going to act on it or do something with it." So I feel like observability is kind of similar, where if you can't see a situation where you're going to act on it, it's like "Why is this here, aside from just--" It may be seeing the graph is useful for certain people, if you have a higher up who wants to see some particular graph or something, and that makes sense. But I feel like at times people add a lot of data thinking "Oh, more data is fine." But if there's not like a clear use for it, it's like "Why is this here?"

**Kris Brandow:** Yeah. I guess that's another code smell of like if you haven't designed the debugging aspects of your software, you're just gonna have a lot of pain in the future. If a codebase you walk into doesn't have like actual thought put into how debugging will happen, how you observe it, then that's definitely something that should probably get fixed.

**Johnny Boursiquot:** I have a counterpoint to that though. Sometimes I don't know what's important yet.

**Jon Calhoun:** So I can agree with that. I suppose what I would say is, when you add metrics to it that you don't know what's important, are you at least envisioning scenarios where like "This could be useful if we needed to do these things?" Versus - I've seen cases where people just log everything, and if you ask them "What are some scenarios where this might be useful?" and they can't tell you anything. They're like "Oh, I just put that there, just in case." And I feel like you get that a lot at times, where it feels like they haven't thought out the actual problems that could arise, and instead they just shotgun-spray at the wall hoping something works.

**Ian Lopshire:** That reminds me of something I see a lot, is someone will log an error, and then handle the error or pass it up, and then the next function sees they log it again, and then passes it up, and then log it again, and then passes it up. But anyways... So I do want to transition a little bit to what we can do when you find yourself in a situation where things aren't ideal.

**Kris Brandow:** \[35:58\] I have a very meta answer...

**Ian Lopshire:** Yeah, go for it.

**Kris Brandow:** I would say, as I've harped on a lot of times before, get your organization to hire knowledge management people. Like, I feel like this is something that doesn't get said enough in our industry, but we have a crapload of information we're trying to manage. Johnny, as you mentioned before, there's a lot of knowledge in people's heads. And it's like "Oh, well, how does this thing work? Or how did we get to this place? Or why is this thing written this way?" And that's in people's heads, and if they leave, then it's no longer there, and now you have no idea. So advocating to hire -- it could just be like one person that does that archiving, library and historian type of task, to actually document and write out "Here's, the decisions", and then organize that information. It could be a huge benefit in the future to actually being able to understand and make codebases better. So that's kind of like a macro level.

**Johnny Boursiquot:** Shouldn't that be everybody's job, though?

**Kris Brandow:** No...

**Johnny Boursiquot:** Because I doubt you're gonna get any company to hire one individual to do that job specifically, and nothing else.

**Kris Brandow:** That's kind of like asking "Shouldn't everybody just write their own crypto?" It's like, no, this is a very specialized skill set, that people get PhDs in, and it's very difficult work, and you should hire somebody that's trained in how to do that thing... Especially if it's an important thing to your organization, which if you're going to be writing thousands to tens of thousands or hundreds of thousands of lines of code, and you need to manage that asset you have, you should probably ensure that you have a lot of knowledge about what went into creating it, and the history of that.

**Jon Calhoun:** I think this is -- it's one of the reasons that I've, for whatever reason, don't care for Slack that much, is that I feel like there's a lot of... Like, somebody will ask a question, and then someone who's very knowledgeable will share that information... And then it just kind of sits in Slack. And I feel like Slack is not the ideal format to find that information later when you're looking for it. So the only way to like get that information again later, at least in my limited experience, has been to like somebody else ask the same question, and then somebody else who either knew about the conversation can link to it, or if they didn't know about the conversation, that same person might have to reiterate, "Oh, here's the information." And I don't know the correct solution, but it definitely --

**Johnny Boursiquot:** I'll tell you what the correct solution is. It is to buy the enterprise version of Slack, with the AI plugin in there, where it's gonna harness all that data, and you can talk to the AI and just say "Hey, did somebody already ask this question?"

**Jon Calhoun:** That would be great. Honestly, that would be awesome.

**Kris Brandow:** And the AI lies to you. "This is the reason why this happened." You're like "That's not what the data says..."

**Jon Calhoun:** But there have been times where -- I don't know if this is what you were referring to Kris , but having either somebody or there's some tools to make it easier to take like when those things pop up, to then populate a knowledge base of some sort, and like to properly organize and index things. Because I think Slack is great for starting those conversations and opening up questions like "Nobody really knows how this works", or "This needs explained better." It's just when it doesn't make its way back to the code or back to someplace that's more easily discoverable, then it's frustrating, because it's like, we have this great bit of information here that's just not being put where it should be for long term.

**Kris Brandow:** That's like what the job of an archivist is. They're supposed to go around and extract knowledge out of places and put it in a place where you can then go find it and use it in the future... Which is kind of like exactly what you want when you have especially complicated codebases. Or you want to bake make it so people can actually go into a new codebase and understand the thing. Once again, we write documentation for a reason; we want documentation so you can actually get into and understand things quickly. You can get up and running quickly.

Because I don't know, there's a lot of codebases that I have walked into where there's 10-20 engineers trying to work on the thing, nobody has any idea how anything works, and the number of bugs per feature introduced is like a multiple. So it's like "Oh, you make a feature and then you break four or five things." And the reason you broke those things is because you didn't know about this other stuff that you need to know about, because that knowledge is scattered among like six or seven people's heads. And so now you have to go and fix all those bugs, which is using more engineering time, which means that we could have just hired one of these people... They don't cost that much money in startup or organizational sense...

\[40:09\] And then you wouldn't have burned all of that time of the engineer trying to figure out how this thing works. Or you might be able to hire an engineer and have them be productive in, say, a week, instead of four months, across the entire codebase. So it's like one of those things where it's like this could clearly work for getting us to have better codebases, but it's a not technical solution, so I don't think anybody's really going to do it.

**Johnny Boursiquot:** So I'm the CTO for a startup, a small engineering team, and I cannot see myself hiring somebody just for that job. Not that I'm disagreeing with you. Ideally, yes, we would have somebody do that job. But right now, because we don't have such a specific role, or probably won't for quite a while, the way I choose to run my team is to make sure that anytime I have to explain something in a stand up longer than two minutes, or anytime I have to explain during a pairing session "Oh, this is why we did this, this and this" I'm like "Oh, this is time for a decision record, or some sort of wiki or documentation in Confluence." Yes, I know... It's fine. It works. But we keep our documentation in Confluence, and we keep decision records in Confluence... We link to things in JIRA... Again, yes, I know, but it works well enough. And we can cross-reference things.

Basically, we use these tools to help give us that archive. If somebody doesn't know why -- anytime somebody asks a question, "Why do we do things this way?", if I can't point to where that answer is, if the answer has to come out of my head, that's immediately a flag that "Okay, this needs to be written down somewhere." That's either documentation, or a decision record, or maybe the readme for something somewhere... But if the only way they could get an answer for that question was to ask me, there's a problem.

**Kris Brandow:** Yeah. And I think this is part of the issue that we have as an industry, is that we're not very good at understanding the costs of -- how much does it actually cost when this knowledge isn't properly managed? What in actual dollar terms is it? And if we could quantify that, I think most startups would hire a librarian/archivist as their third or fourth hire after a couple of engineers. Because it only takes like a couple of engineers to start generating a large enough amount of knowledge where if you're forcing them to do all of that work of knowledge archiving, you're going to slow them down a lot. And they're probably not going to be that good at it. Unless, of course, maybe they weren't a librarian in a past life, or they studied it, because they like it. But I think in the long -- once you start getting to a certain size of organization, the wikis become like these graveyards of "Okay, I've found some information. Is this information correct? And how do I actually assess that?"

**Jon Calhoun:** Have you worked at very small startups, Kris?

**Kris Brandow:** I've worked at very small companies, not very small startups specifically.

**Jon Calhoun:** Okay. I guess I'm saying, in my experience, I would agree with Johnny that I don't see this happening on like the smaller side. Maybe past 10 employees possibly. But below that, I wouldn't see it happening, because in my mind, one, when you're that small, I feel like it's a very tight-knit group for the most part, just because you're working so closely together all the time. And a lot of times, you're like desperately trying to prove that what you're building can actually make money... So spending time on anything else is - as much as it sucks to have that debt, it's just hard to justify spending any money on anything else, because you're always at risk of just dying. So it becomes very, very hard at that point.

So there definitely comes a point where "Okay, we've proven that this is a viable market, and we're moving into -- we're going to start scaling, and doing things like that." And I think around that is when you could be like "Okay, now we strongly need to consider how do we consolidate knowledge, make sure new hires are going to be productive", and those things. But until you hit that point, it's very hard to spend any effort on anything else.

**Kris Brandow:** \[43:57\] I mean, I would equate it to -- and maybe this is a good model for it, too... Like accounting and bookkeeping. I feel like the argument is actually equivalent to that, like "Yeah, it'd be great if you just didn't have to care about bookkeeping, because you're a small company and you just need to go." It'd be much easier to just "Spend money, it'll be okay, and then we'll figure out how to actually do bookkeeping accounting later, when we're big enough to actually get an accountant or bookkeeper and have them do this work." And it's like "Yeah, but by the time you get there, you're gonna have such a nightmare that it's going to be really hard to dig yourself out of it." And I think knowledge management is even a worst thing.

The reason I say do it when you're a small organization is because there practically isn't a point along the continuum until you're huge, and the problem is intractable, that you can actually stop and say "Okay, yes, we will hire someone." Because even once you are 10 to 20 to 30 or 40 or 50 people, you'll say the same thing of like "Well, we're just trying to move fast. We've got to keep going. We don't have time to stop. And there's already this mountain of stuff. It's fine. We'll be able to do it well." And the point just never comes.

Of course, there's plenty of large companies that managed to get along without having these people, and small startups, and lots of organizations. So obviously, we've been able to work as an industry along this path of being able to get out there. But I think that we've underestimated how empowering someone with this type of skill set can be to the organization.

I think it's a lot like e-sports teams, and how in the past it was just kind of like "Oh, we just have a group of five, probably dudes, or some number of dudes, and they're just playing." And then we added a coach. And then everybody started to get better. And then they added a sports psychologist, and then they started to get really, tremendously better at these things. And it's like, if you went to an e-sports team and you're like "Yeah, you should hire a sports psychologist", they'd be like "Why would we do that?" "Well, because your earnings are gonna go up by so much, because you have this person that's going to be able to power everybody." And I think this type of knowledge management role is the same thing there.

And I think our codebases and the state of them and how they are pretty bad... I mean, Johnny, you and I both said that in our combined nearly 50 years of doing this, we haven't come across a codebase that's just good when we get to it. That has things set up well, where you can actually do things where you don't have to go and fish some information out of somebody's head... So it's clear that there's a problem here that needs to get fixed in some way. I'm just advocating that this role is it. There's probably other ways to do it as well. I don't think AI is the way; I really don't think AI is going to help us here. But I think like if we wanted to macro level solve the problem in the big, it would be having this. But I also recognize that, as you said, Johnny, this is impractical for a number of reasons, for most people. It would take a startup that wants to be, or a company that wants to be innovative in that small space. And quite frankly, most companies just don't want to innovate in that space. They don't want to make changes; they want to just pick up the playbook and just go forward with it. And that's fine. Just recognize that your codebase is probably not going to be great when you start scaling. And it probably might not ever be like a nice, good codebase unless you happen to stumble upon and hire somebody that does engineering, that also has like these skill sets to manage knowledge well. Or you have a CTO or an SVP or whoever who pushes - kind of like you are, Johnny - really hard to make sure that knowledge is well managed, and it's not just getting stuck in people's heads.

**Ian Lopshire:** It sounds like we could have a whole episode on why our codebases aren't good.

**Kris Brandow:** I mean, you asked how we can make our codebases better. I was just giving you the ultimate utopia -- not utopia, but the way to just fix the problem if you want to fix the problem.

**Ian Lopshire:** Alright, so we're running a little bit short on time... I do want to get some more concrete, less meta happening, as we normally do... So I might just kind of speed-round some questions for you. So as you're jumping into a new codebase, and there might be some patterns that aren't good, how do you juggle between consistency and making improvements? You can't go over the weekend and just change it everywhere, right? So what are the trade-offs there and how do you manage that?

**Johnny Boursiquot:** \[48:20\] Consistency over new patterns, unless there's a demonstrable 10x return on that investment. If we're using a library to access data, maybe it's not the best one, but if I'm going to introduce a new way to do things, I need to, one, have a proof of concept that shows "Hey, if we do this, we're going to get a 10x return on that investment, and we're going to need to apply this across the board." That way, there's no two or three or four or five different ways of doing the same thing, there's just one. If I can't get the time and resources and the room within the engineering budget, time-wise, to make this happen, then I will consistently keep doing it the old way, until an opportunity presents itself for me to change it across the board. So I pick consistency every time.

**Jon Calhoun:** I think I agree with Johnny mostly there, so... I'm curious what Kris has to say.

**Kris Brandow:** I like consistency, but with small changes over time. Because I feel like being too stringent on consistency leads you into that foolish consistency realm where you're doing consistency just because you've -- it's the "We've always done it this way" sort of consistency, which I think is very problematic in a lot of codebases. So I think you need to have -- I think actually the opposite of what you said, Johnny. I think you need to have small changes to how you do things and how that consistency works over time, and those kind of grow into the larger changes across things. So I think when you try to introduce a large change, that's when you're going to get the most amount of pushback on things. That's why you're gonna have to show "Here's the giant amount of betterness that you get from this thing." Which I think is often difficult to prove to other engineers, especially people who are invested in the way things are now... But often, if you can find small ways to shift that consistency, and you instill that "Hey, we're gonna be able to make small changes to consistency as long as the overall consistency of a codebase remains the same", I think that's good. You want to avoid the \[unintelligible 00:50:16.24\] but you also don't want to just keep everything the same for the sake of keeping everything the same. And I feel like in the past small adjustments to things have worked well for me.

**Johnny Boursiquot:** Nuance to my statement - in most cases, it may be very impractical to say "Well, there's a new way that is demonstrably 10x better than the previous way. We need to go away for six months, so that we can apply it all and then bring it one full swap." Definitely, we're going to be incrementally changing it. What we're not going to do is somebody not knowing that "Hey, we are on this journey to transition from this way of doing things to this way of doing things, and we're incrementally - every time somebody touches an area of the codebase where the old pattern is used, this is your opportunity not only to get the job done that you're actually trying to do, but to also transition the old way to the new way", then that happens incrementally. Absolutely, that's the way it should be done. There's no sort of a "Go away for an inordinate amount of time and then come back with a brand new thing." First of all, you're asking for trouble; something will break if you do that.

**Jon Calhoun:** Your PR will never merge.

**Johnny Boursiquot:** Yeah, don't do that. Don't do that.

**Jon Calhoun:** I think I agree with Johnny with that; you need to have buy-in from everybody. And if everybody isn't on board with it, it just isn't going to work, because somebody's going to continue reading the old way, and it's just gonna be really bad... And I've seen codebases where -- they keep changing; they're like "We're gonna use this pattern." And then a little bit later they're like "We're gonna use this pattern." And then before long, there's six patterns there, and nobody even knows what the right one to use anymore is.

**Kris Brandow:** \[51:50\] Yeah, I guess I would add to my point of like "Don't change things for the sake of changing things." I think if there's a way of doing things, and that way of doing things works okay, consistency for what you're trying to do, just do it that way. You can make the argument that we should make some bigger changes otherwise. But I also think maybe try and make an argument as to why you should shift away from the consistent thing you have now. Because again, I've just seen so many codebases and so many orgs get stuck trying to plan that big revision. And then it just -- those becomes just like so much work on their own, and usually engineers wind up advocating for "Let's go away for six months and fix this." It's very alluring. People love that. It's like catnip to developers. They're like "Let's go. Oh, six months for me to just go work on this one thing. I'm gonna go do that."

**Jon Calhoun:** I feel like that's a junior developer thing to \[unintelligible 00:52:33.28\] "Just give me six months. I'll fix it all."

**Kris Brandow:** Junior developers are like "Two weeks. It'll take me two weeks."

**Jon Calhoun:** You're probably right there.

**Ian Lopshire:** So I want to tell you my inspiration for that question. I work in a codebase right now where when I started the database was in a config file, configured globally, and just willy-nilly things would call out to that config package, grab the global database and use it. And we've been transitioning to putting the database in a struct that then gets passed down. Would you go through and do that all at once? Or would you change it over time, and lack that consistency?

**Kris Brandow:** Oh, I'd do that over time. I would not try and to do that all at once. That sounds awful.

**Johnny Boursiquot:** Over time, yeah.

**Jon Calhoun:** I think there's also places where you can gradually implement things... Like, if you have one package or one section of code that you can maybe do that all at once, so that that small bit of the world is consistent, but then -- you know, there's ways to sort of meet in the middle, I guess there... But doing an entire codebase, especially large one, would be a nightmare.

**Ian Lopshire:** Yeah, that makes sense to me. Next rapid-fire - not so rapid fire... How do you deal with a codebase where there are no tests?

**Johnny Boursiquot:** Add some.

**Kris Brandow:** Yeah, just start writing tests.

**Johnny Boursiquot:** Start somewhere.

**Jon Calhoun:** But what tests do you start with?

**Kris Brandow:** You just start writing. I think if you try and sit down and say "Which test is the ideal one? Or which place is the best--"

**Jon Calhoun:** I guess I'm more asking like - if you just jump into the codebase, personally, what would you start with? Not what is the best, because I don't think that's true.

**Johnny Boursiquot:** What am I tasked with adding, changing, fixing? Like, whatever it is I'm about to work on, if that area of the codebase doesn't have tests, I'd add some.

**Kris Brandow:** Or if I'm tasked with "This codebase needs tests", the place that I know the best. The place I have the most knowledge or most confidence that I can actually write tests there, and then go from there.

**Jon Calhoun:** Okay. I asked because in my mind, not always, but most of the time on a codebase the easiest test for me to write is one that's a much higher level of like if I -- like, say it's a web service. If I send this request and get this response back, I'll add a couple tests like that. And then I can go to smaller pieces afterwards if I need to, but I like having something that sort of encapsulates the entire functionality of it, even if it's not the best test in the world, or it's using a ton of services and everything else... It's like, I know this test will make sure I don't drastically break this thing right now.

**Kris Brandow:** Yeah, probably integration tests are a good place to start with, because that's gonna give you your most -- I think the most bang for your buck overall, as far as like getting an understanding and kind of helping to make sure things don't break... If you don't have any tests, it's like, okay, let's just do the high level -- as you said, the high-level integration level things, kind of move through, and then kind of get lower level into the unit testing things when it makes sense.

**Ian Lopshire:** I think that leads nicely into my next question - what do you do when the code isn't written in a testable way? My previous example, a global database. That's really hard to test. Do you start with the integration tests and hope for the best, or...?

**Kris Brandow:** I mean, outside of actually fixing the codebase to be more testable, yeah, I think integration tests. They'll probably be slow, but slow tests are better than no tests... Ish.

**Jon Calhoun:** Especially because you don't want to refactor until you have something to verify your refactor works.

**Ian Lopshire:** It's almost a chicken and egg situation here.

**Jon Calhoun:** I've done this before, and it's not a fun project to do, because I feel like you write tests that you almost feel like "These are throwaway tests in some ways, just because they're not really the test that I want to be there long term. They're not the ones that I would prefer, but it's what I need to do to move forward and write better tests."

**Ian Lopshire:** \[56:07\] Alright, last one... How do you mitigate risk when you do have to make like a big change in an unfamiliar code or codebase?

**Kris Brandow:** I don't like that this is the last one. You need to ask the next question, too. \[laughter\]

**Ian Lopshire:** I will. Okay, second to last one. I'll ask the next one.

**Jon Calhoun:** So the first way you mitigate is you submit the PR under Johnny's GitHub repo. \[laughter\]

**Kris Brandow:** I think usually making sure that there's a good understanding of what it is you're trying to change... Like, documentation, and you've talked to people, and you've kind of made sure that across the board we all get like "Okay, this is what we're trying to do", and then you've actually thought about what could go wrong and what could break, and you haven't just happy-pathed everything... You're like "Okay, here are the real big challenges we might have" or Here are the opportunity costs we're gonna make, and here are the other things...", so you can actually sit down and do that risk mitigation.

So I think the problem with a lot of risk mitigation is that everybody always wants to be very rose-colored glasses about things, like "No, no, no, it's gonna be great. We're gonna do this, and it's gonna make everything wonderful, and there's gonna be no problems." So just actually identifying the risk, I would say, is the first big step to be able to mitigate that. And probably the hardest step.

**Johnny Boursiquot:** There's some things to learn from the change management discipline here... Especially the larger the change, especially change that can impact business operations, the ability to - say, if you're an ecommerce site, the ability to make money, and process credit card transactions, blah, blah. The higher risk these things are, the more change management we want around that stuff. These could range from things like making sure that, okay, all the stakeholders understand what the change is, like Kris says, what could go wrong, how these things going wrong might manifest themselves; if they do go wrong, how do we mitigate those particular known knowns. And if there are known unknowns, maybe trying to have a plan for those things. And it can be as mundane or as simple as also making sure that when you are rolling out this change, make sure it's the daytime, when everybody is, present and accounted for; you're not rolling this thing out in the middle of the night, where people are gonna get paged at two o'clock in the morning... Just things like that, to make sure everybody -- you can have sort of an all hands on deck kind of situation, and everybody's fully aware of what the change is that you're trying to do, and the business side, the stakeholders also understand that "Hey, engineering is about to roll out something that is going to hopefully add value, fix a problem, or create a new way to generate more revenue", whatever the business justification is, "but there's some inherent risk in that."

So that whole change management, if you've never done it yourself, like trying to identify either a project manager, or a program manager, or somebody, some sort of ally that can sort of be that bridge between the business and technology side... You need something like that. And larger companies will have those things, but it's much harder for smaller companies to be able to do those things, but the impact of having some sort of change management process in place... Not a ton; you just tailor it to your level, your size, where you're at as a business, but having some sort of management process is generally highly recommended.

**Jon Calhoun:** One thing I would add is that even before the change goes in, I think a mistake people make is they view a PR or anything as something that gets code-reviewed once. And I think realistically, for a big change that has a lot of risk, that review process should be like an ongoing thing, where you submit a little bit of code, you review that little bit, and be like "Here's the direction we're going with this", and get people buying in from whoever it's gonna affect, and do multiple reviews of like the different steps along the way... Even if you have to submit it all as one big PR, but having people review it over and over as you incrementally add stuff can add a lot of value.

\[59:56\] It's one of the areas that at least historically I've never found a good way to do it with GitHub... But there are other tools out there that for PRs it will actually only show you the changes between the last time you reviewed and this time. And that makes it a lot easier to incrementally work on something big, but get everybody's buy-in and make sure you're headed in the right direction, and that everything's going smoothly, so that when that big thing does land, it's not a surprise to everybody, and somebody doesn't get hit with a PR that's like "Oh, 800 files were changed, and this many lines were changed", and nobody has time to really go through a change that big and look at it in detail. It's just really hard to do.

**Johnny Boursiquot:** The bigger such changes, the more you need to lean on perhaps -- if you're lucky enough to have an infra team, or maybe you do SRE and you have a mixture of development and operations going on... Like, you need to lean on your infra, especially the higher the risk. If everything a developer can do has been done, but beyond that, you just don't know what else could break... Especially if you don't have enough people on the team with the experience of knowing all the different failure modes; maybe some people have left the company, maybe you have a team that's new... Whatever the case may be, if you can lean on your infra - and I'm talking canary deployments, or blue/green, or shifting traffic a little bit at a time to the new nodes, and making sure nothing new is falling apart... Maybe if you're trying to replace something wholesale, maybe you have a shadow service, where you're routing the traffic that goes both to the current one, but also a subset of that goes to the new one to see, and then you compare the results at the end... There's all kinds of techniques you can use to ensure that you have a smooth transition, and not just put the new thing in and cross your fingers and hope that nothing blows up. Hope is not a strategy, as we like to say in the SRE world.

**Kris Brandow:** I think also the best way to risk-mitigate a big change is to not do a big change, and instead do small changes. \[laughter\]

**Johnny Boursiquot:** If you can help it. If you can help it.

**Jon Calhoun:** There are definitely techniques for that, but it is very hard sometimes.

**Kris Brandow:** I mean, it'll take a lot more time, and it takes a lot more skilled people to do it... But in my experience, that's the best way to make big changes.

**Ian Lopshire:** Something I'll add there is just actually having a rollback plan. You don't want to deploy something, make database changes, and then have the rollback not be compatible with those database changes, and so you have nowhere to go, right?

**Jon Calhoun:** Testing rollbacks is something that I think people don't do often enough. They just assume "Oh, it works", and then when you need to roll back, it's like "Oh, that doesn't work now. We're in a really tough spot."

**Kris Brandow:** Yeah. I think this is also --

**Ian Lopshire:** Yeah, "We're going to be down for a while."

**Kris Brandow:** ...design your code better, so that you can do changes. With rollbacks and things, there's ways you can design codebases and design data systems so that rollbacks aren't really -- for instance, if you use \[unintelligible 01:02:36.16\] style things, you can take snapshots and then there's like, well, you don't need to roll back. If the thing breaks, you can just go back to the old snapshot, and you're good. But that also requires a lot of skill to be able to design things in that way, that people \[unintelligible 01:02:48.09\] But that's another good strategy, is like from the beginning design so that you can make changes and can kind of do these things with the ability to either go back, or the ability to just kind of roll forward, or what have you.

**Jon Calhoun:** Yeah. I'll definitely say those risks vary too, depending on how that's setup... Because I worked on an application that - it did sales for some stuff, and they stored a lot of that stuff locally, but all the sales were also stored in Stripe in a way that they could pull that all out later. So they could literally lose their entire database and rebuild it. I think basically users would have had to recreate accounts, but they could have recovered all their purchases and stuff really easily... So it was like, they could be a little bit riskier, because it's like "At the end of the day, it would suck, but there's a way to recover everything."

**Ian Lopshire:** Alright, actual last question here... When do you rewrite?

**Kris Brandow:** Never. \[laughter\]

**Johnny Boursiquot:** That is a fool's errand.

**Kris Brandow:** Yeah, I could give some reasoning behind the never... So in my estimation, when you want to rewrite a codebase, you've probably -- you have that feeling that probably somewhere between like 20% and 30% of that codebase is not doing well, it's not doing what the business wants, there's issues wrong with it... And you probably don't know, or don't have a good understanding of what that 70% that's just kind of working is doing.

\[01:04:09.13\] So when you go to try and rewrite it, you're attempting to rewrite 100% of it to make 20% to 30% of it better, and that requires you to actually rewrite that 70% of it that actually works fine right now, while also continuing to run the old thing that you want to get rid of. So like rewrites are very costly, very difficult to manage, and usually fail, and now you're just running two things instead of one, and you haven't gotten rid of the old problem. So...

**Jon Calhoun:** Not to mention it like puts any new features on the old thing at a standstill... Because there's almost no way to rewrite and have new features coming in at the same time.

**Kris Brandow:** Yeah. Just don't rewrite. If you feel like you need to rewrite, you probably should go learn more about the codebase as a whole, and then do what we were just talking about before, of finding ways to make big changes or small changes over time, in a risk-mitigated way, to evolve or codebase from where it is now to where you would like it to be.

**Jon Calhoun:** I kind of wish Mat was here, because I swear he said that they actually started rewriting something. So...

**Johnny Boursiquot:** I mean, if you've got the money, you've got the engineering staff, you've got all the apparatus that goes along with a major rewrite, and you know that at the end you're just gonna flip off the switch on the old and go to the new, that's -- perhaps there could be some justifications... I mean, I've never been in a room where such a decision has been made, but I hear people do it, and it's a thing that folks do. But then again, I'm not saying you should never -- there are ways of doing a rewrite, but not in the way we're talking about it.

So I've actually refactored entire codebases, that basically from the point when I started to where the dust settled, the codebase was entirely different. There were some remnants of some older stuff, which was stable enough during the refactoring, the multiple rounds of refactoring, where I'm incrementally changing the tires under the semi as it's rolling down the highway kind of thing... But I don't stop the semi on the side of the highway, get into a new semi, and hope I'm gonna maintain the same velocity. I have to keep basically changing things as I'm going. From the moment I started to where I end - yeah, the codebase could be entirely different. Every piece of it could have been touched and refactored and improved in some way, but that's happening in the same codebase. Never stopping work on one, starting on the other, and hoping that I can just swap them. That just never goes well.

**Kris Brandow:** I think it's yes, rewrite your codebase, but don't greenfield it. Actually sit down and rewrite what you've already written, in place of what is there, over time. If your thing is to write anew, that's what we're saying "Don't do that." If you want to literally rewrite what you have - yes, please, go do that. That's the path forward. Because then you only need to change the things that are broken, or bad, or you don't like, and can leave the rest of the stuff that's working right where it is, and it'll be great.

**Jon Calhoun:** I think people struggle with that whenever they want to switch languages, or something. Or like they want to change technologies, for some reason. So if you want to go from like Ruby to Go, for some reason, or whatever, it's a lot harder to think "Well, how do I do this incrementally?" Versus - like, if it's a codebase where you can change small pieces of it, it's a lot easier to take that refactor approach. I'm not saying you should necessarily rewrite, because it is a huge undertaking, and there's probably a lot of things that you're gonna figure out that you weren't expecting, but...

**Johnny Boursiquot:** That's why it pays to be a polyglot. We talk about all the time, we espouse the virtue of right tool for the job, all the time. Even in a so-called Ruby shop - and I've been around some of those - or Python-only shop, or Java-only shop... Whenever I hear "We only do this" in any sort of engineering team, that's a bit of a code smell for me. Again, I understand the reason why somebody would say "Hey, you know what? We only do JavaScript here. Frontend, backend, client side - JavaScript, all the things."

\[01:08:12.08\] Now, there are reasons why I will chuckle internally if you did that, but from a business standpoint, it may make sense to say "Hey, I'm gonna hire just a JavaScript developer, and I'm gonna toss them on the backend, and I can also toss them on the frontend if I need to." I don't know if it's truly that interchangeable, but you can make the business argument for being sort of a monolinguistic kind of shop. And that's fine. But the reality is, there are going to be some things that are better suited for different kinds of language. You could be a Ruby shop, but maybe there's a mission-critical part of your operation that requires better performance, or multi-threaded programming, or whatever the case. Maybe you can use something like Rust, or Go, or whatever it is, under the hood. You can't say "Hey, we only do this." That's just painting yourself in a corner for no good reason.

**Kris Brandow:** Um...

**Johnny Boursiquot:** Bring it, bring it.

**Kris Brandow:** I think in most cases using a different language is not the correct solution to the problem, if you are already using a language. If you're starting something brand new - sure, go swap out languages, go build that knowledge. But if you have something that is already working, and you already have knowledge expertise of some level in that thing already, likely switching to a new language is a "Grass is greener on the other side" sort of situation, and it's not going to get you the benefits that you want, because languages are so similar to each other, and because there is so much performance you can get out of pretty much any modern programming language that it's like, what are the reasons for making this transition and change, and could you instead make social-level changes that get you what you want? Is the reason why you want to shift because your codebase is just not written that well? Okay, well, write it better in the language you've already written it in, instead of being like "Oh, we'll go write it in this new language."

I think that's what actually leads to what we've all seen of those atrocious Go codebases, because someone had Ruby or Python, and was like "This isn't working for XYZ reason. Let's go to Go, even though we don't really understand it." And then they try and write it, and they're like -- but they're still trying to write Ruby, or Python, or Java, what have you, in Go, and then you just wind up with an even messier situation.

So I see your perspective around "Yeah, sure, maybe it'd be good to be a polyglot shop", I just think it's very challenging to actually be a polyglot shop, and to actually use multiple languages, and it requires a level of like high-level engineering architecture and design that I think a lot of people in the industry don't have, and a lot of companies aren't willing to actually sit down and do, because you have to actually structure things so that you can actually use all of those languages. For all of your dev tooling you have, you have to be able to use it in two different languages. For your staffing, for your planning, you have to be able to plan knowing that perhaps people are strong in one language and not stronger in another. And if you need that person to write something because they have the knowledge of how to write something, but it's not in their main language, that you're going to have to devote more resources to it. All of the calculations about how you do development when you want to incorporate multiple languages is a bit tougher.

I mean, it's the same thing of like if you wanted to run your business in two different natural languages; if you wanted to have it be a business that runs in both English and Spanish, that's going to be more challenging than if you just wanted to run your business in English or Spanish. So I think it's the same thing for programming languages, where it's like if you want to be able to use multiple programming languages, you're going to have higher costs over all, and those really do need to offset the -- the benefits you get need to offset those costs.

**Johnny Boursiquot:** \[01:11:54.12\] It's a trade-off, it's a trade-off. So if I do have a dual business, maybe I am serving the Anglo-Hispanic community, and it is an advantage to my business to be able to speak both English and Spanish. So bringing somebody on the team who knows how to speak Spanish if I only know how to speak English is a great business decision. So if you look at the language choices in the same way, to say that okay, I have a mainly Ruby on Rails app, and I need to fork out to a Rust process or a Go process or something more performant to do -- it's this particular process-intensive, CPU-intensive or memory-intensive, whatever the case may be, you can do that one thing. So it's complimentary, not duplication, if that makes sense.

**Kris Brandow:** Yeah. But Jon's original question was "What if you were rewriting a thing in a new language?"

**Jon Calhoun:** I took that from Johnny to mean, instead of rewriting the thing, could you take a piece of it out, rewrite that piece that needs rewritten in the new language, and use something like gRPC to communicate, and then you have that freedom to do that? And I agree with that, but it's kind of that middle ground of you don't want to just introduce eight services, all in different languages, because you can. It's like, you should have some restraint, because like you said, there is extra cost.

But it's always interesting to me that on backends we're always -- not always, but a lot of times people are resistant to have different languages. But then the default in everybody's head is use some backend language, and you always use JavaScript on frontend. Nobody's ever like "Oh, we're going to start with just using server-rendered HTML or whatever", and trying to make that work. Or at least it's not as common to start there for any type of web stuff. And it's weird that people make that distinction of "We don't want Go and Python, but we're fine with Go and JavaScript."

**Kris Brandow:** I think that's because there's an organizational boundary. I mean, even though people don't understand there is, there's an organizational boundary between the browser and the backend. So those are two different spaces. But there's not one in a lot of people's heads in the backend. So it's like you're comingling Python and Go together in this space. It'd be like if you use some WebAssembly and you had like some C, and some Rust, and some JavaScript, all working together on the front end, I think a lot of people would be like "That's also gross."

**Jon Calhoun:** But I guess I say it's weird to me in the sense that I feel like you still have the problem of intermingling engineers, because most engineers are very good at one or the other. It's kind of rare that you find somebody who is exceptionally good at both frontend and backend... Just because by default they just tend to focus on one more than the other.

**Ian Lopshire:** Alrighty. Some lively discussion today...

**Kris Brandow:** I mean, if you put Johnny and me on the same episode, what do you expect to happen? \[laughter\]

**Ian Lopshire:** Oh, let's move on to some unpopular opinions.

**Jingle**: \[01:14:31.07\]

**Ian Lopshire:** So who's got them today? Kris, you always have an unpopular opinion.

**Kris Brandow:** \[laughs\] I have a spicy unpopular opinion today. Or I guess it depends on the type of person you are how spicy this is, but I think it's pretty spicy. So my unpopular opinion is that unions in tech is a really bad idea for where tech is right now.

**Ian Lopshire:** Interesting.

**Kris Brandow:** We should not even be contemplating unionizing. It's the wrong path forward for us.

**Jon Calhoun:** So for context, is there -- what is the context of this? Is there somebody considering unionizing? I don't pay attention enough attention to the news, I guess.

**Kris Brandow:** I mean, it comes up a lot, of like "Oh, well, if tech was unionized, we wouldn't have problem X, Y, or Z." I think I saw a comment up on the Changelog Slack of like "Oh, we wouldn't be getting replaced with AI if we had unions." I think there's kind of like two pieces of why I think unions aren't a great idea for tech. The first is that we have a lot of mobility, and we like our mobility, and unions usually are structured, so there isn't as much mobility.

\[01:15:58.29\] Jumping from one job to the next probably won't get you that big of a raise anymore if we have like an industry-wide union... Because it's like "Oh, this is your level in the union. You're just going from one company to the other. You will make the same amount of money as you did at the other company, because it's a union and we have a standardized contract, so everything is kind of the same across the board." And if we didn't have industry-wide unions, then it kind of opens the question of "Why should we have all these small unions?"

And I it's not that big of a problem if that was the only issue. I'd be like "Okay, fine. Whatever." We'd get standard salaries; that might be good in some ways. The bigger reason why I don't think we should have unions is because the model that unions have as of today doesn't fit with the structure of tech companies that we have. So if you look at places that are unionized, whether it's like acting, or like retail, or what have you, there's usually a large number of people who are individual contributors, and then like management, and it's usually very flat. In tech, we have a structure that has a very deep and tall management hierarchy, and also a very tall individual contributor hierarchy. Which means that if you use the standard union model, you'll wind up with people in the union, who are basically in meetings with the CEO all the time, and have like the same amount of influence as a high-level SVP, but get to be in the union, but low-level managers, who are like the first level line manager wouldn't be allowed in the union, even though they don't have pretty much any influence over what management as a whole does. Because that's the dividing line in union structures of today. It's like, if you're in management, you're not in the union. If you are not in management, you get to be in the union.

So in order for unions to work in tech, we either have to completely change the organizational structure of tech companies to make them flatter, or we would have to come up with an entire new model of who gets to be in the union and who does not get to be in the union. And I think that would be very difficult for how things are now, because you'd have to draw a line somewhere of like "This group of managers and ICs gets to be in the union, and this other group of managers and ICs doesn't get to be in the union", and I don't have confidence we'd be able to draw that line very well.

Because the thing you don't want in a union is to have people that are in high-level management having lots of influence on what the union does, because then it doesn't make any sense to have the union in the first place, because now it's just gonna wind up being controlled and influenced by management anyway, which is what you don't want. It's supposed to be like a separate entity that represents the "people".

**Jon Calhoun:** I feel like unions would be -- there's got to be different structures, but the unions that I'm most familiar with, I guess, are people working in like factories, or something along those lines, where there's a bunch of employees. And in a lot of those cases, a lot of the ways the union works are things like the longer somebody's been there, the more priority they have, or seniority they have inside of the union for a variety of things. And that seems so weird to think about that in a software perspective, where I've seen people - like in the railroad industry, as an example, I have a friend who literally graduated college, went and worked for a railroad company, and has been there since. And to me, that is mind-boggling, to be at the same company that long. Because in the software world, that's just unheard of. And he's upper -- he's management, so he's not in the union. But I'm thinking like, I don't know how that would work for developers. I feel like your way of determining seniority and everything couldn't ever be purely based on like time there.

**Kris Brandow:** And the other thing about it too is it's not just that you're in the same company, because lots of people are like at Google for a long time, or at Facebook, or at any of the FAANG companies for a long time. It's that you're in the same role. If you transition to a new role, you lose some of that seniority. At least I think you'll lose some of that seniority.

**Jon Calhoun:** Yeah, I think you're right.

**Kris Brandow:** So you're in the same role, and that's the thing you do, and there's this box of your responsibilities, and that's kind of what your career is, which is also just not the way that we do things in tech. So I'm not saying we shouldn't do some sort of collective bargaining sort of thing if people really want to do it, but saying "We should just unionize" - it's a much harder problem than that. And that effort would probably be better spent just making our companies not crappy. Because I think that's part of the problem, is like our companies are poorly run, and we really just want companies that are better run. And I think we should focus on that aspect.

**Jon Calhoun:** \[01:20:14.12\] I think the hardest thing here is that we've all, at least from what I can tell, I feel like we've been somewhat spoiled to work for decent companies... And then I look at like game developers, who are working in much worse conditions, and I could see them having a very different opinion.

**Kris Brandow:** I mean, I would not say -- my career experience as a black queer person in tech, I would not say that the companies I've worked for are necessarily...

**Jon Calhoun:** Okay.

**Kris Brandow:** There's been many an issue.

**Jon Calhoun:** Okay, so I apologize for making a bad assumption, but... I guess I was just saying that I've seen some parts of the industry that -- like I've had people ask me "Why didn't go into the games?", because people have been like "Oh, you like playing games. Why don't you go into that side?" And I'm like "That side of the industry is absolutely horrible to work in." I don't see why anybody goes there. And the story that I can usually easily tell people is that whenever I was in college, there was one point where Google and Facebook were offering internships that I think paid like seven grand a month and provided housing for three months, and then at the time Battlenet was really big, so Blizzard was really big, and they were offering an internship that was unpaid, and I think you had to pay for your own housing too for three months. And they were both getting people. And I'm like "I don't understand how Blizzard is getting interns, when you could be making seven or eight grand a month as a college student working at these other companies and having just as good of a name on your resume."

**Johnny Boursiquot:** I've got an unpop.

**Kris Brandow:** Johnny's like "We're done talking about this." \[laughter\]

**Ian Lopshire:** Let's hear it.

**Johnny Boursiquot:** Enough about unions, I've got an unpop. Alright, here it is. To change the meaning of words, you need one of two things: be popular enough, or have enough money. Case in point - on the popularity side, I just learned of the term "rizz", which is a slang term...

**Kris Brandow:** Okay, boomer... \[laughter\]

**Johnny Boursiquot:** ...generally meaning "style, charm, attractiveness." That's now like a word definition. That's now something people can use. That's popularity. So rizz is now a new thing. I can say your boy has got some rizz, and you know what I mean.

**Kris Brandow:** Do you know what rizz i short for?

**Johnny Boursiquot:** No, no idea.

**Kris Brandow:** Charisma. But go ahead.

**Johnny Boursiquot:** Oh, okay. I just learned something new today.

**Ian Lopshire:** That's new to me, too.

**Johnny Boursiquot:** Yeah. Boomer, Ian... \[laughs\] So the other thing out in industry - as we are recording this, I think we're literally redefining what the term "open" means. So if you ever heard a company name Open AI, you do realize, you do know, hopefully, that it has nothing to do with the openness of the codebases, the models, and other data, the practices and everything that goes into those large language models. The Open in there doesn't really mean any of that. It simply means "For the benefit of other people." So Open AI - if we achieve AGI, they will make it available for the benefit of humanity, but that doesn't mean anything with regards to the actual... Anything that went into making AGI. So the term open is quite literally being redefined as we are having this podcast.

**Kris Brandow:** \[01:23:25.16\] I mean, that's just how words work...

**Johnny Boursiquot:** No, Kris... \[laughs\] Words used to mean things, dang it. I'm shaking my head at the cloud... \[laughs\]

**Kris Brandow:** I mean, to make something change in popular culture - yes, you are right. Either you need to be popular enough, or you need to have money, and then you just can bulldoze through things. But also, I think there's a lot of like subtle things. Literally, for example, means both literally, and the exact opposite of literally - figuratively. Which is confusing. Or Johnny, earlier in the podcast you used the word judiciously, when you meant liberally. Because judiciously is the opposite of what you meant. So there are words -- like, words just kind of move and shift and change, and it's all about "What do we understand?" And that's where I think they shift. But yes, I do agree that if you're a big enough person, you can just make things happen. Or if you just happen to get a good meme. Like, if you can make a real good meme, then you can change language however you please.

**Ian Lopshire:** Apple just renamed VR to spatial computing, right?

**Johnny Boursiquot:** \[laughs\]

**Kris Brandow:** Well, they mean AR/VR \[unintelligible 01:24:34.04\] spatial computing.

**Jon Calhoun:** I mean, in Johnny's defense, Apple does have a lot of money.

**Ian Lopshire:** A lot of money.

**Kris Brandow:** They have maybe the most money.

**Jon Calhoun:** Not only that, but they've -- like, haven't they basically said you have to refer to like the VR headset as like whatever the heck the name is that they require you to use?

**Kris Brandow:** Like the Apple Vision Pro, or...?

**Ian Lopshire:** Almost definitely that's true.

**Jon Calhoun:** It's like the Apple Vision -- like, whatever the heck the name is, you have to use that. You aren't allowed to say like "Apple VR", or anything in like news press, or anything. Any of the people who are using it are supposed to use it in a very specific way.

**Johnny Boursiquot:** This is not the first time Apple has done this. I mean, you take any standard technology, they put their own name on it. Literally, there's entire websites dedicated to how Apple takes like USB-C and renames it to something \[unintelligible 01:25:17.19\] just so they can have their own names on things, their own branding on things.

**Kris Brandow:** This is, once again -- this is how words... Johnny, I don't know if you know, but rizz as a word has a really long history within the black community. So it's one of those words that has made the transition from black culture and AAVE into white culture, where it has now blown up. Or like I guess outside of black culture, not just white culture. It's like other people's culture using it, too.

**Johnny Boursiquot:** Are you calling me white?

**Kris Brandow:** I'm not calling you white, I'm calling you a boomer still. \[laughter\]

**Johnny Boursiquot:** I think we should end the show right now, Ian. We've crossed over.

**Jon Calhoun:** I feel like the unpopular opinion should be "Johnny is a boomer", just to see if everybody agrees or disagrees.

**Johnny Boursiquot:** Oh, man... That'd be brutal. That'd be brutal.

**Ian Lopshire:** Alright, Jon, do you have an unpopular opinion?

**Jon Calhoun:** I do not.

**Ian Lopshire:** Alright. Neither do I, so we will call it there. \[laughter\] Y'all are just running, running.

**Jon Calhoun:** For fear of being called a boomer myself, I will just call it quits.

**Ian Lopshire:** Alright.

**Johnny Boursiquot:** Oh, man...
