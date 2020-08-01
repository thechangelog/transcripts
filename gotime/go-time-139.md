**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and today we're talking about testing frameworks. Some subjects which aren't controversial in other languages are sometimes controversial in Go, and this is one of those... And we're gonna find out why that might be. Today I'm joined -- it's only Mark Bates; hello, Mr. Bates.

**Mark Bates:** Hello, Mr. Ryer. How are you doing today?

**Mat Ryer:** Good, how are you?

**Mark Bates:** Alright... \[laughs\] I really thought I was gonna have something there and I just didn't.

**Mat Ryer:** Yeah, you were just waiting, and nothing came.

**Mark Bates:** Yeah. I haven't been on the show in a while, so I'm just a bit rusty, that's all.

**Mat Ryer:** That's alright, mate. Don't worry, you're in good hands. We're also joined by special guest Boyan Soubachov. Boyan, did I welcome you? Welcome.

**Boyan Soubachov:** Yeah.

**Mat Ryer:** Okay. Let me do that again--

**Mark Bates:** Did you welcome him? Yes. Did you say it correctly...?

**Mat Ryer:** Boyan Soubachov.

**Boyan Soubachov:** That's perfect.

**Mat Ryer:** Okay.

**Boyan Soubachov:** Hey, Mat. Hey, Mark.

**Mat Ryer:** Welcome to the show.

**Mark Bates:** Hey, Boyan. I've gotta ask a question here; the folks at home can't see this, but I think you're trying to pretend like you're in some sort of fancy Mediterranean paradise, where I have a feeling it's a beige wall behind you. How close am I to the truth?

**Boyan Soubachov:** Pretty damn close, because it's five AM in Sydney in winter, so it's anything but sunny and warm. \[laughter\]

**Mark Bates:** Fair enough...

**Mat Ryer:** Well, thank you for joining us so early.

**Boyan Soubachov:** Not a problem.

**Mat Ryer:** It's great.

**Mark Bates:** Or maybe it's so late, we don't know. Maybe he's been up all night...

**Boyan Soubachov:** \[laughs\]

**Mat Ryer:** Just getting in?

**Mark Bates:** He's just getting in, he's been in one of those all-night raves...

**Boyan Soubachov:** Thankfully, our on-call schedule isn't that bad... \[laughter\]

**Mat Ryer:** Fair enough. Well, so today we're talking about testing frameworks...

**Mark Bates:** Okay, I have a question, Mat, before we go any further, about testing frameworks.

**Mat Ryer:** \[00:04:11.10\] Testing frameworks -- what?

**Mark Bates:** Are we talking about frameworks that help us test, or testing frameworks like Buffalo?

**Mat Ryer:** Oh, no, no...

**Mark Bates:** Sorry, I just had to get the Buffalo plug in there early, and then that way -- it's like a Hitchcock thing; people are just waiting for it. Get it out quickly. Buffalo. Then we get to move on to the rest of it.

**Mat Ryer:** Okay. Well, we can talk about testing testing frameworks later as well, if you like... We could really get creative.

**Mark Bates:** Yes, I like to use a different testing framework to test the testing framework, just to be on the safe side.

**Mat Ryer:** You actually have to, because the testing framework doesn't exist. And what if there's a bug in it?

**Mark Bates:** That's not true. Go is written in Go. Come on...!

**Mat Ryer:** Go is written in Go, yeah...

**Mark Bates:** \[laughs\] Everybody knows. First one's in C, and then you bootstrap. \[laughter\]

**Mat Ryer:** What are testing frameworks then, and what does it mean in Go? Maybe it's worth just a bit of an overview for junior developers or people that aren't familiar with this yet. What are we talking about?

**Mark Bates:** Well, that was actually -- I was making a bad little joke there about the testing frameworks, but I do have a legitimate thing... I think we need to talk about the language. Are we talking about assertion libraries, which are \[unintelligible 00:05:27.05\] Or are we talking about frameworks like Ginkgo and Gomega and stuff, where you have to buy in to their entire process. GoConvey has its own scripting language if you want a testing/scripting thing, if you wanna go through that... So when we talk testing frameworks, are we talking one, are we talking the other, or are we talking both?

**Mat Ryer:** We're talking all of those things today, I think...

**Boyan Soubachov:** I think that it's a spectrum, effectively. There's trade-offs as there is to everything, where you have the lightweight stuff like Testify is, which is almost like syntactic sugar... And you have, as you mentioned, Ginkgo, where it's on the complete opposite end, where this is how you will do it, and it's almost like a fat middleware layer, and the right tool for the job, I guess.

**Mat Ryer:** Yeah, so for anyone at home then that's new to this, testing generally in code is a way to really improve the quality of the code by writing automatic tests that can run, and they basically become a user of your code, and then they work as though your user of your code is gonna do the work, and then they can make assertions about what happens. So that's generally the process of testing. And then, of course, if you make little changes, you can run your tests and make sure you haven't broken things... So testing frameworks help you with that process in various ways, and there are different types.

For example, the simplest case, like the syntactic sugar case - and I think Testify at one point was the most imported package in Go. I don't know if that's still true, but it's certainly a popular choice, so let's start with Testify. What is Testify, what does it do, and why would you use that?

**Mark Bates:** Well, you wrote it, Mat. Why don't you tell us?

**Mat Ryer:** Well, I've just been talking too much...

**Mark Bates:** A lot of people don't know that Mat was one of the original authors.

**Boyan Soubachov:** Yeah, so Mat and I share a common thread on that one. Mat, you know the history way better than I do, and I have a bit more context on the status quo, I guess...

**Mat Ryer:** Yeah. I'd like you to give the history though, please...

**Boyan Soubachov:** Sure, of course. Obviously, Testify -- well, Mat, I believe you were one of the original authors...

**Mat Ryer:** \[00:07:52.02\] Okay, yeah... So this was way back -- I think even before the first GopherCon. So this was like 2014 time. And we came from Ruby, and I'd done a lot of JavaScript and C\#, and a lot of these languages have testing frameworks, or even some of them are just built-in, where you can use language like assert= and you give it two things. And if those two things aren't equal, that's considered then a failing test. So in Go, if you don't use a testing framework, you end up writing long-hand really that process. So you'll use an if, and check two variables; if they're not equal, or whatever the condition is, then you use the TestingT to do some work to either report the error, or fail the test, or whatever it is you wanna do.

We did Testify just because we were used to writing in that format, that's all. It was purely kind of syntactic sugar. And then because it was so early, it just kind of became part of an easy choice. It was the oldest, probably, at one point, and probably always is...

**Mark Bates:** No, an even older one came out...

**Mat Ryer:** Yeah, an older one came out after--

**Mark Bates:** Just last month, actually... \[laughter\]

**Mat Ryer:** Yeah. But I think it's that - it got in early, and... People were complaining about writing tests in this long-hand form, and some people weren't writing tests for that reason... So that's why we did Testify. And we love testing and unit testing. It was me and Tyler Stillwater that created the original, and then lots of contributors... The project has grown and taken on a life of its own, as these things do... And that's really it, I think, for the history.

**Boyan Soubachov:** Right. And just to add there, actually I would disagree on a small point... You did mention, obviously, because you were early; I think that helps, but I also think the majority of it is just -- it saves the community time, and the community finds this valuable... Because it's a simple problem, that's solved with a simple solution, in my opinion anyways. So exactly that... And now, the current state is almost like a "Oh, time to write some tests... Quickly, import Testify." It's almost second nature to a lot of gophers... Which in my opinion is a great thing, but it's also a big responsibility. Because if something is shared by all gophers, it has the pressure of it being all things to all people.

**Mat Ryer:** Yeah, absolutely. It's funny, because some of the innovation that happened over the years with that - there is a Require package, which has kind of a slightly different behavior. I think one of them lets you carry on...

**Mark Bates:** That's the one I use. Assert lets your test keep running, and just logs the failures. Require stops the test. For me, I love Require. I use it for all my tests. As a matter of fact, my \[unintelligible 00:10:48.26\] Go snippet when I type "test tab", it fills in the require.new TestingT thing right there. It's just part of my tests.

My problem with the Assert is typically, if something fails, I want the test to just stop, and not keep throwing panics for the next five minutes, which is usually what happens... Because something that wasn't supposed to be nil is nil now, and your test is just panicking all over the place... \[laughs\] So I like that.

For me, like I said, I'm a huge, huge fan of Require. I probably used at the most ten or twelve of the assertions. You know, error, no error, nil, not nil... Really basic assertions. I don't typically use some of the really grandiose or odder assertions. I'll occasionally maybe grab a contains, or something like that.

What I like about it is - just what Mat was saying earlier - all that repetitive code, just all those if checks, now I've gotta come up with a good log message... And when I'm writing tests, I just wanna write my tests and I want it to be fast. I just need to get tests, and I want to spend more time writing more tests, and not more time writing less tests. And just pulling out those if statements, and pulling out that logic... You know, in my Go code that I'm testing, of course I'm gonna take care to craft better error messages, and have better syntax, and all that sort of stuff. But when I'm writing my tests, I just need it to say that these two things weren't equal, and I don't need to keep repeating that constantly... And things like Require just kind of do that.

\[00:12:33.26\] And I also quite like the way it reads, too. My tests are a lot smaller. Maybe they're now a half dozen or eight lines long, as opposed to three times that, with all the if checks that are going on in there... And I can just read it; it's like "Do this. Okay there was no error. This was not nil. These are equal. Done." I just read it quickly down...

I remember, Mat, you and I had a conversation around this offline one day, about is.

**Mat Ryer:** Offline, you mean in real life?

**Mark Bates:** Yeah... \[laughter\]

**Mat Ryer:** Remember offline?

**Mark Bates:** I do remember that... Sorry, I don't mean to digress, but GopherCon UK is supposed to be next month, and we were gonna co-host together in London, as always...

**Mat Ryer:** \[laughs\] Yeah, it's not gonna happen.

**Mark Bates:** I was so looking forward to it. Anywhoo, back to the subject. So yeah, I love Require, and I like what it does for my tests in terms of just making them small, quick, clean and readable.

**Boyan Soubachov:** It's an interesting point, because as I mentioned all things to all people, we've had so many requests, I get so many GitHub notifications in issues saying "Please remove Require. It's useless. We just use Assert." \[laughs\]

**Mark Bates:** It is not useless; it's more useful than assert.

**Boyan Soubachov:** Exactly.

**Mark Bates:** If anything, I would say remove assert. \[laughter\] Like, why do you want your tests to keep going? It just boggles my mind.

**Mat Ryer:** It's too late though... You can't just remove Assert now, because of what would happen...

**Mark Bates:** I know, but it's just like... Why would you use Assert over Require? I don't know...

**Mat Ryer:** Yeah, I always wondered that, actually. In fact, I remember in the original design we had the assert methods return bools as a way to get around it. So you could do an if block and say "If this is not nil", and then it returns false if that failed, I guess...

**Mark Bates:** That's so weird...

**Mat Ryer:** Right? It's confusing.

**Mark Bates:** I can see why you got rid of that.

**Mat Ryer:** I think it's still there...

**Mark Bates:** I don't know, I don't use Assert.

**Mat Ryer:** Yeah. And Require doesn't have it, I think, as well. Actually, Ernesto Jimenez was one of the maintainers, who's a great engineer...

**Mark Bates:** Lovely chat, too.

**Mat Ryer:** ...automated the generation of Require by inspecting Assert. So it was actually an automatic process. They didn't have to keep maintaining the two codebases.

**Boyan Soubachov:** Correct. To this day it's a great addition. We stole autogen require from the Assert code.

**Mat Ryer:** Yeah. That's cool, ain't it? \[laughter\] I think that's cool.

**Boyan Soubachov:** It's awesome.

**Mat Ryer:** Anything that we can do to get computers to write code for us, I'm all over it.

**Boyan Soubachov:** Yeah, exactly.

**Break:** \[00:15:21.02\]

**Mat Ryer:** Well, we talked about the way it reads, so you can say "require not nil", or "assert equal", those kinds of things...

**Mark Bates:** I prefer the variable version, to be perfectly honest. So I'll do require.New(t), and assign that to R, usually, is what I do. So I just do "R no error", whatever. Again, it's all about that quick, "I just wanna write stuff." Typing require.=t, two things - it's so much more code than just r.=two things. I don't know, that's just my preference.

**Mat Ryer:** Yeah. And Testify wraps the testing tier, as well. I don't think that's true for all of them. There are some of those that do the same. And I think that's quite a nice little design thing, because I think originally, again, they were just global functions. Boyan, are they still global functions?

**Boyan Soubachov:** You can still access them package-level.

**Mat Ryer:** Okay, so that's originally what it just was...

**Mark Bates:** But you have to pass t in to do it.

**Mat Ryer:** Yes, you pass t in as the argument, that's right. So it's a different flavor of that. Yeah, it's funny, because it really is an example of a project that has evolved in quite an interesting way over the years.

I wanted to just talk about the format though, the readability of it, because there is another kind of style of this, which are behavior-driven tests. Does someone want to just tell us what's a behavior-driven test and how is the language different?

**Mark Bates:** Yeah, so if you're coming from Ruby, like a lot of us did - so many people I know from Ruby in Go over the years - that was one of the big things, our spec being one of the biggest testing frameworks in the Ruby world... And in Ruby, it works really well because of the nature of Ruby being a scripting language. And you can write these really beautifully syntaxed sentences where it says --

**Boyan Soubachov:** Almost prose.

**Mark Bates:** ...describe "As a user, I want to do..." and then X, Y and Z. And you know, log in, and then here's a little thing; and then "I want to be able to forget my password and have it reset", and this more of a natural language style, where you're telling a story with it... So that kind of "As A, I want to..." kind of story that we all know of, and we all hear that someday the other side is gonna write, and then we can just test, and that never happens... \[laughter\] But that works really well in those languages. And most of us in Ruby, I think, lived in that world. I don't know about you, Mat. Did you write your tests that way, or did you use more of a unit test style when you were doing Ruby?

**Mat Ryer:** I always used the unit test style. I found it to be quite unnecessarily verbose... I know that sometimes they -- because you literally put those things as strings into the test code, don't you?

**Mark Bates:** Yeah.

**Mat Ryer:** And then from that, you can generate some quite nice-looking failures. If something fails, it reads quite nicely... But I've found it to be too verbose actually, and just saying "Not equal" and then showing you the two values or something was just easier to see.

**Mark Bates:** The thing I like about BDD versus unit testing actually has to do with the names of the tests... You know, when you're writing a simple test - you know, test that create does something; that's a pretty simple test name. But when you start having all those weird variants, then the string-based text names become really useful. When you just need a little bit more description as to what it is you're trying to test... And that's harder to do in a units type of a test, where you have a function name.

\[00:20:05.21\] For me, I get around that a little bit in Go with underscores in my test names. So I have a different approach to how I do my test names. So it obviously starts with "test", because we all have to start there, and then usually it's an underscore, with the next thing being if I'm testing, say, something on a struct, or a type, then it'll be the type. So it's test\_type\_method, or something like that, where I can kind of look at the tests, read them a little bit better, try to figure out what they're doing... And also, when I'm trying to do run, it helps me, because I have a bit of a pattern. So if I wanna test all the file stuff, my types called "file", and I wanna run all the file tests, I can do test\_file\_ and it's gonna get me all of the tests for the file type when I do the run.

So that's how I'm getting around it in Go, is with using that... But there are frameworks like Ginkgo that let you experience that a bit more in Go.

**Boyan Soubachov:** I think a key thing there - and at least my takeaway of it - is because the philosophies behind BDD and TDD, at least the way I understand it, is that BDD should be more focused on the user or the consumer that we're writing this code where, whereas TDD is a lot more technical or engineer-focused, personally, I tend to hybridize, where I'll do them TDD style, because I find them simpler and less verbose; I'm not expecting the user to read my tests... But I'll try and order and make the tests actually focus on user behavior in more complex functions, rather than just proving that the function works, or stopping it from regressing, in a way.

**Mat Ryer:** Yeah, have you seen property-based testing as well? This is another kind of style.

**Boyan Soubachov:** Yeah, it's almost like fuzzing for your functions, where you specify not what values to test with, but what types of values your function takes as input. And obviously, also what kind of output you expect. Then the property-based testing framework, of which one example is Gopter, will then just generate - whether it's random, or in some specific sequence - plenty of values to then test your function and try and find edge cases for you that do not conform to the specification.

**Mat Ryer:** That's really cool, isn't it?

**Boyan Soubachov:** Yeah. The first exposure I had to that was with Hypothesis in Python, and it was pretty awesome. An obvious problem there is you now have -- especially if your functions are a bit more complex, that it can take a while for tests to run, because you're now running the same function 10,000 times, rather than once or five times. But for pure functions, where your code doesn't have side effects, it's very good at finding edge cases and little behaviors that you don't anticipate.

**Mat Ryer:** Does it explicitly have edge cases programmed into it? So if it's like an int, it's gonna try an extreme, like max int, and minimum int, and things like this... Or is there an element of more randomness, like fuzzing?

**Boyan Soubachov:** I think it depends on the framework. I haven't personally used Gopter just yet in Go, but in a lot of them you can actually specify where I want to range from min int to maxim, so whatever the minimum and the maximum value is... Or you can just say "Give me this distribution." I believe it can be customized. But if I'm not mistaken, the default is to just basically sample from the minimum to maximum, and try and find pathological cases of the input values.

**Mark Bates:** \[00:24:00.14\] Do either of you do fuzz testing/fuzzing?

**Mat Ryer:** I have once, but it was really to play with it. But I think it depends on the kind of code you're writing, because it's not suitable for everything, is it?

**Mark Bates:** Yeah, I think I'm the same as Mat. I've done it once to try it out... Yeah, \[unintelligible 00:24:19.15\] Did that sound about right?

**Mat Ryer:** I don't know, I let you do it. \[laughter\]

**Mark Bates:** Thanks. I apologize. But you know, he's always talking about fuzzing... So I do try to play with it every once in a while. I think you're right, I feel like there's a type of code that it works really well for... At least I haven't figured it out well enough to see it beyond, to see it in cases where it's useful to me. I couldn't figure out how to get it to work, say, in a web environment, other than to pass in random JSON blobs...

**Mat Ryer:** Yeah, but one example is the Plush library in the Buffalo project, actually... Because that takes user input, and it parses it, doesn't it? It literally breaks it into tokens, into an AST, and all that... So that's probably a good candidate for fuzzing.

**Mark Bates:** That was the one I tried it with. \[laughs\]

**Mat Ryer:** Is it?

**Mark Bates:** Yeah.

**Mat Ryer:** Yeah, because essentially, fuzzing - for those that don't know (and do check it out, because it's cool) - if you've got a string as an input to some method, it'll just make loads of bonkers strings, as crazy as it can, including massive ones, and all sorts of random nonsense, in an attempt to break your code... And if it can, it tells you. Its input will break your code. So I guess the point about that is, ideally, Mark, nothing should make that Plush panic. It should always be a meaningful error. And you might find some panics or something that you would just never think of because of fuzzing... But who knows.

**Mark Bates:** Not me, apparently... \[laughter\]

**Mat Ryer:** You just do it manual fuzzing, don't you, Mark?

**Mark Bates:** We've just established that I don't know. \[laughter\]

**Mat Ryer:** Mark just does manual fuzzing; he just writes loads of tests, but he just does it manually, like mashing the keyboard...

**Mark Bates:** No, my dog takes care of it all.

**Mat Ryer:** Pardon?

**Mark Bates:** My dog takes care of it all. Ringo is an amazing fuzzer. \[laughter\]

**Boyan Soubachov:** I've heard of cats walking on keyboards. I haven't heard of dogs walking on keyboards yet... \[laughs\]

**Mark Bates:** Well, Ringo is a special dog. You know...

**Boyan Soubachov:** Things you see on Zoom nowadays...

**Mat Ryer:** Yeah.

**Mark Bates:** So it's good. Are we done?

**Boyan Soubachov:** \[laughs\]

**Mark Bates:** No, I'm just kidding. Do we have questions from the audience?

**Boyan Soubachov:** Actually, I've seen the GoTimeFM channel, and there's one about mocking.

**Mat Ryer:** Mocking...

**Mark Bates:** Mocking...

**Mat Ryer:** Okay, so who wants to tell us what mocking is?

**Mark Bates:** Not me...

**Boyan Soubachov:** I'll give it a shot.

**Mat Ryer:** Go ahead, Boyan. Boyan to the rescue.

**Boyan Soubachov:** So we unfortunately don't live in an ideal world, where all our functions are pure and have no side effects... Sometimes, for example, they need to interact with databases or external services... And when we run tests, especially unit tests, or specifically in the tests, we want them to run quickly and just test that function, rather than the side effects it has on these external resources. So a general and a common practice is to mock out those resources, so effectively return some blank, known value for the test, or preset that we know for the test, and we then assert that with these values the function did what it was supposed to do, given these inputs from the external resource.

**Mat Ryer:** Right. Yeah, so that's great. The specific question from Aditya was about database mocking... So how do we feel about mocking databases?

**Boyan Soubachov:** \[00:28:00.16\] Myself, personally, I find it quite useful a lot of the time. An approach I actually like to take is to try and abstract our database interface as an interface... And then just spawn a new stub or mocked version of that interface and pass it in.

**Mat Ryer:** What does the interface look like for a database?

**Boyan Soubachov:** It's highly dependent, obviously, on what you're using or what you're needing... But you obviously have your basic CRUD operations, if your function is using them; and then anything more specific, in the abstract sense, it's difficult because it becomes incredibly context-specific, given what your code does.

**Mat Ryer:** Yeah, it does. And it is also possible to create tightly-coupled test code as well, where it becomes so brittle that any change in the implementation will break something... Because sometimes things are over-tested, I think. I actually think 100% code coverage, depending on the project, could be a mistake... Because essentially, you have described probably (well, almost certainly) everything in that package, and any change to that will then break the tests... And that can, from a practical point of view, get really annoying when everytime you make little tweaks, you have to then go and also update tests.

**Mark Bates:** I always tell people, try to hit for around 90%.

**Mat Ryer:** Right.

**Mark Bates:** 90% is a good number. If you can get it around there, you're doing alright. Because you know what you're not gonna get at 90%? You're not gonna get all those "If error equals nil, return nil" errors... \[laughter\] That's what you're gonna get if you hit 90%; you're just gonna skip all those particular ones, because you can look at them and validate that they're returning an error. You don't really need -- and sometimes it's more complicated to try and get that error inserted, just to get the test to pass, when it's more just like "Hey, I don't really care if any error comes back from this. Just pass it back up." I don't need to force an error there just to trigger that one code path for a test. But to get back to the database thing - I do not mock out my databases.

**Mat Ryer:** Right. Do you use a real database?

**Mark Bates:** I use a real database, yeah. In Ruby, it was a real problem. And that's nothing against -- it's not Ruby, it's not Rails, it's just... The work of something like Active Record taking all those database records and breaking them into all of those Ruby objects, and all the work that it did in that highly-dynamic interpreted language meant that to hit the database takes a long time, and uses a lot of resources. It really slowed your tests down after a while in Ruby.

In Go, it's not my problem. \[laughter\] My tests are still plenty fast. They're hitting Postgres locally; how much of a slowdown could that be...? And honestly, I find that it's usually plenty good enough. My tests are fast enough. I don't have to deal with trying to keep all those objects -- and I find when I'm dealing with database stuff the amount of things I need to mock out, to make it usable, is sizeable.

**Mat Ryer:** Yeah, you end up building a database emulator in memory even sometimes...

**Mark Bates:** Yeah, and for me it's like, if I'm gonna spend -- I don't need to spend all that time. I'll just hit Postgres. It's right there; it's gonna be there. My server is gonna be there, my CI, it's local, it takes me 30 seconds to install... I'll just hit it. And I know that all my queries are correct, I know that my marshaling to and from the database is correct... I feel like there's a whole -- and this is my unpopular opinion. Mat wanted me to come up with an unpopular opinion, and I was gonna say that I like assertion libraries... But I think this is more unpopular.

**Mat Ryer:** \[00:32:12.09\] Okay, well save it for the official segment.

**Mark Bates:** Well, you've got it now, Mat...

**Mat Ryer:** Don't preempt the segment, Bates...

**Mark Bates:** Well, maybe that's an unpopular opinion...

**Mat Ryer:** That is an unpopular time.

**Mark Bates:** ...that I should have to wait till the segment... It's a second unpopular opinion. \[laughter\]

**Mat Ryer:** That's very meta. You're right though... That's kind of an integration test, in a way, what you're describing then, Mark...

**Mark Bates:** It is, in some respects. We could talk about this for a long time, and the distinctions between unit integration, and even the distinctions between mocking and stubbing in interfaces...

**Boyan Soubachov:** I completely agree - the right tool for the job, if it works fantastic... But that starts being a problem when you have 5,000 other engineers and you need to do this on services with a ton of complicated DB interactions in code, I guess...

**Mark Bates:** Yeah, I'm not saying it's for everybody... \[laughter\] I'm saying for my stuff, I see it as something that I would rather try to come up with a couple good interfaces where I need them. And typically, a couple good interfaces are all I really need; a couple one-method, two-method interfaces are usually good enough... If I write my code well enough, to fully isolate kind of - or at least for the most part - the things that I really wanna tweak and change. And I try to allow myself those insert points in code, where they might be in the form of, say, a plugin shape, where I can add certain plugins to my web server in testing, that mutate the request, or do stuff that lets me fake out third-party requests with transports, and all sorts of other stuff. I can't remember what the point was, but... It sounded good.

**Mat Ryer:** It did.

**Boyan Soubachov:** \[laughs\] Spend time on what works, on the important things.

**Mark Bates:** Oh, that was it, yeah. And then, you know, abstract -- and then when I hit those problems, like you were just describing, with all these other engineers, and a bigger abstraction is needed, then I put the time into that level of abstraction. But right from beginning it's just -- you've got bigger fish to fry than that abstraction, I think...

**Boyan Soubachov:** Exactly.

**Mat Ryer:** Yeah, context probably is very important. I have seen as well -- one simple way to mock...

**Mark Bates:** Context the interface, or context knowledge?

**Mat Ryer:** Oh no, I just meant the English word "context". \[laughter\]

**Mark Bates:** Okay. Sorry, I was legitimately confused for a second.

**Mat Ryer:** No, it's fine... \[laughter\] Yes, there are some simple ways to mock out databases as well that I've seen, and used in the past. Sometimes it's a case of just have your own interface that you describe in your code, and your implementation of it touches a real database and has the database code in there... But that could be quite easy to mock. And then you aren't making database calls, but they might be something like "load user" or "load \[unintelligible 00:35:23.10\]", where in production that's gonna be a database request; you could mock out that interface at that level. So it's a kind of slightly higher-level wave of doing it. Have you done things like that before, anyone?

**Boyan Soubachov:** Personally, at least in the last few years, where I've been working in larger Go teams, definitely that has been the way we've done things...

**Mark Bates:** Right.

**Boyan Soubachov:** \[00:35:49.06\] We're spending more time on getting the right interface and abstraction going. But that's, as we've been talking, purely because of the team size and the codebase size. It becomes more practical to do that.

**Mat Ryer:** Yeah. The other thing about mocking - if you want to mock something out, even if it's a database or some third-party service, or whatever, it is useful in test code to be able to do that so that you can return realistic data, so that your code can do it's thing, so that it's predictable, and all that stuff. I have, in the past, done assertions inside the mock almost, and I feel like this might be a step too far, in most cases. The idea is there's a method -- in fact, there's a project called Moq, which is one that I wrote with some friends of mine, I can't remember who. It's in the repo though; credit where credit's due.

**Mark Bates:** The show in which Mat tells us all about his former projects he no longer uses. Go on, Mat...

**Boyan Soubachov:** \[laughs\]

**Mat Ryer:** No, I do use this one. Actually, yes -- this was from David Hernandez, and he came up with this nice pattern for doing mocks, which was essentially you create a struct, and then for every method there's a field that matches the signature, and then you implement on that struct those methods as well, which just call those functions... So that gives you almost like a transparent layer of that type, which you can then in test code create and give it little functions, which will be the things that get called. And you can do things like simulate errors, like we were talking about earlier. More importantly, they're good for returning useful and predictable data.

I think it's better not to make assertions about what was called in that, because it's kind of implementation detail potentially there... But it probably does, again, depend on each case, doesn't it?

**Mark Bates:** I think it's okay to assert errors, and stuff like that in there. If you're getting a new UUID and it errors out, or something, I think it's okay to do that. But yeah, asserting on the data there... I often do that field function thing not just on test structs, but regular types too, where there are areas where I want to provide maybe a default implementation and then allow people to replace it. So one might be around ENVs for example. I've been kind of recently playing around with this idea of using zero-value structs for my configuration, where the methods on that struct - there's no real field, it's just methods, and those methods will look for an ENV, and then if they find it, return it, or otherwise return maybe some default. And I like that you can just kind of grab a config, just var it up, and boom, all your stuff's there, you don't need to really initialize it.

But obviously, when you're dealing with environments, it's really hard to test. And sometimes - not even that, but you want to, maybe on a specific request as you're passing maybe a config down, you wanna change a value. And you can't do that if they're all functions. So one of the things I do there is have kind of a "getENV" function that matches os.GetENV... But you can set it, and all those functions that are on my config will check and say "Oh, if there's this function defined, let me use that", and that could just be returning a test value. Or use the default, which is os.getENV.

I use that pattern quite a lot too (I like that), of "Here's a default way of doing things, and then here's a function you can implement as a field", same signature, and it'll call that instead, if it has it.

**Mat Ryer:** Yeah. A good use of that is if you need to control time, because the time.now function just returns the current time. Obviously, in real code, that's different every time... But you can have a function field that matches the time.now signature - which I think is just empty func - and then assign it by default to time.now, and then control that in your test code. So yeah, I love those sort of mini-mocks almost...

**Mark Bates:** \[00:40:03.22\] In Ruby we had a great thing called timecop; it was such a random Ruby thing... It would override basically time.now to be whatever value you wanted it to be \[laughter\] You could just override anything; you could say like "I wanna be three weeks into the future", and time.now would return three weeks in the future.

**Boyan Soubachov:** Great Scott! \[laughter\]

**Mark Bates:** It was spectacularly awful, and good, and fun... \[laughs\] It was one of those things you can only do in a dynamic language though. It's also the reason I'm not using a dynamic language anymore...

**Boyan Soubachov:** The way I look at it, at least - if it's something that's... How likely is it to change? Basically, how likely is your database state to change? How likely is your time to change? If it's anything other than low, take it out, mock it out, make it as a dependency that's injected. But that's a rule of thumb that I follow anyways...

**Break:** \[00:41:03.29\]

**Mat Ryer:** Talking about Testify then, Boyan, what do you see are the challenges with maintaining a project like Testify? What's easy and what's difficult, and Great Scott?

**Boyan Soubachov:** Great question, Great Scott! \[laughs\] So one, due to obviously its size and popularity, a lot of people wanted to work for them, and that's fair enough. I think our goal is to have a framework that makes life as easy for as many people as possible. That being said, you have infinite different use cases for it.

A big difficulty there is just how many different requests we have to add this specific feature, so that it works in my case, and this specific feature in my case... And we try and be as fair as possible and consider each case, but ultimately we're guided by what the community as a whole or as a greater have benefit from this. Also, a big thing is to always be vigilant of starting to couple it to be dependent on either some other technology or some other proprietary standard, or whatever... Because I think a great example was we've had a request to change how the framework works, so that it makes it easier to run in Go land... Which would break it forever on who's not using Go land... So that was a no-no in our books.

**Mark Bates:** \[00:44:40.06\] One of the things that I often hear people say about Testify, obviously (because it's one of the big ones), but about any of the assertion libraries, is "Well, occasionally I'll hit a rough spot, or I'll hit something that doesn't quite work." Equal is always a great example of that. There's some really edge cases there. I ran into just yesterday an edge case with Testify zero, where I had an expectation that if I implemented \[unintelligible 00:45:08.15\] which is kind of like an unofficial interface you'll find across a standard library (Time has it), I thought that if I did that and called not-zero, or zero on Testify, that it would look at my type, see that it implements the zero, returns false, and then is not -- you know, whatever. And that's not the case. And I even dug deep into Reflect, because it uses Reflect zero, and even that doesn't call that interface.

So I hit one of those edge cases, and it took me a few minutes to dig through the code, figure it out, and then I said "Oh, man - okay, I really thought it worked that way. It doesn't. I'll just change the way I'm running my tests a little bit." And I just moved on. I don't know, I don't put a lot of credence into the "I hit one random edge case, so they're all terrible" argument. I find that if you hit one edge case, you've hit one edge case. If the rest of the time it's working just fine for you, that's definitely a baby with the bathwater kind of a thing.

If I threw out all my tests yesterday because the Require zero did not follow the is-zero interface, then that would just be stupid on my part. That would be such a waste of time and effort and energy, because I hit one edge case...

**Mat Ryer:** Yes. It's kind of like "Perfection is the enemy of good", isn't it?

**Mark Bates:** Yeah.

**Mat Ryer:** And I understand, if you're using a technology and it lets you down in some way like that, I completely understand the credibility gets lost a little bit. But Mark, your attitude with 90% is actually quite a healthy perspective to have, which is - it's good enough, isn't it?

**Boyan Soubachov:** Agreed.

**Mark Bates:** Yeah. And I'll keep adding the tests as things break, and I find those new edge cases; I'll keep adding new tests to cover them. But yeah, you've just gotta move on with your day at some point. And like I said, there was no way I was throwing out Testify because \[unintelligible 00:47:07.15\] didn't behave quite the way I thought it did... Despite the fact that -- and don't forget, the documentation makes no claims to respecting that pseudo-random interface anyway. I made an assumption on my part, proved out to be wrong, and I just changed my test to \[unintelligible 00:47:23.02\] And that was fine; I just made that little change, but...

**Mat Ryer:** \[00:47:33.12\] Yeah. I think that's right. When Testify was in its early stages we had this policy of anybody that contributed a PR was invited to become a maintainer. This was an idea that -- because it's a community-owned thing; it was completely open source, so it's kind of this community spirit and inclusiveness, and stuff. The effect of that, I think, in Testify's case, was that the API grew quite a lot. And if you look at the index page in GoDoc for stretchr/testify/assert package, it's massive. And of course, the Require is too, yeah.

So what's the downside to having that much stuff there? There are pros and cons to it, so what are the pros? What are the cons?

**Mark Bates:** I don't know that there are that many pros, but go on...

**Mat Ryer:** Well, the pros are it does all those things that people wanted to do.

**Mark Bates:** Yeah, but the cons - I don't know, I'm not gonna speak here for... I would feel the cons far outweigh the pros of a large API in this case, but...

**Mat Ryer:** Boyan, what do you think?

**Boyan Soubachov:** Exactly, obviously the pros are it covers a few specific use cases that some people have... But the cons are you have this code that needs to be maintained, and we need to make sure it doesn't regress... But also a big one is people just end up importing and polluting their package namespace.

If you have a test and you want to assert, but you now want to figure out "Which assertion should I use with Testify?" I think that's why people just default to equal and start doing a lot of the hard work to mangle it into an equals assertion problem.

**Mat Ryer:** Yeah... But that's quite a good strategy, because then at least the complexity is with the users, in their code; it's in userland. And that's something that I have learned over time, which is that if you can solve this problem easily enough in userland, i.e. outside of this package, then that's a good signal that it shouldn't be something that goes into the package. That wasn't a policy or anything, as you can tell by the size of Testify, I think... But I do wonder if we could use that BigQuery dataset to find out in open source Go code which methods are used and which ones aren't really used? And Boyan, what about the future of Testify? What about if we find out a lot of these methods aren't used ever, or are very rarely used, what about phasing methods out and tightening up that API?

**Mark Bates:** Or doing a v2 that has a much tighter API would be the other idea. Like I said, I personally used maybe 10-12, and those are a mix of their pro and con methods, they're true/false variant. So error/no error. Nil/not nil. Equal/not equal. Maybe contains, if I'm looking at a big blob of HTML that gets dumped out and I wanna assert that various elements are in there. I'll use length...

**Mat Ryer:** The contains one you can do by doing "assert true"...

**Mark Bates:** Strings contains... Yeah, I could do strings contains; I could do \[unintelligible 00:50:56.18\] I don't wanna write the error message.

**Mat Ryer:** Right, yeah. That's it, yeah.

**Mark Bates:** That's why I said contains. But things like the delta methods and all that stuff, I'm like "That's too much for me", and it's very overwhelming and intense. Ultimately, my tests are so small that those 10-12 basic ones - true/false, nil, error, equal - they cut it. They do 90% to 95% of my heavy-lifting for me. And they're \[unintelligible 00:51:30.22\]

**Boyan Soubachov:** Yeah, exactly. What we now discussed has touched on a lot of very good points, which is - we've heard a lot of feedback, we've seen a lot of people ask us "Why do you have this? Why do you have that?" and functions that we've even never seen before are there, people submitting pull requests on... So the future for us is -- I mean, myself and my two other co-maintainers, George and Martijn, we think it's about time to look at a version two. We've had so many breaking change requests, where we would break the API... We've got a nice, long list that we could put in a whole separate version, so that's why we started a trial for version two... And because it's community-first; we do this for the community, not for some ideals we have. If I were to write Testify myself, I know what it would look like... But I'm not writing it for myself.

\[00:52:36.27\] Mat, as you pointed out, maybe we can do something with a dataset, but we mostly want to hear what the community's opinions are, rather than look at what -- because we can gauge what's used and what's not, at best, even if we could... But we can't gauge what's missing, or what the community would like to have changed. That's why we have a survey out, a simple Google form, if I may plug it...

**Mat Ryer:** Please do, yeah.

**Mark Bates:** Where can we find that survey?

**Boyan Soubachov:** It's on cutt.ly/testify. And we would love to hear the community's feedback... And if it's time, and if it is according to the community to move forward on to a new breaking version two, what they would like it to look like. We're doing it for the community.

**Mark Bates:** Can I ask you to put that link in the chat room for the show? As well as, if you haven't already, on the readme, for Testify. Right at the top.

**Mat Ryer:** Yes.

**Mark Bates:** Make it available there, because that's the place I'm most likely to go and see it.

**Boyan Soubachov:** Awesome, thanks. Yeah, of course.

**Mark Bates:** And that'll also end up on the package.go.dev as well too, if you put it in the readme.

**Mat Ryer:** Yeah. So Boyan, thank you so much for that. I'm very excited about what a version two could be, because of course, it means you can have breaking changes, we can take things out, we can simplify things...

**Mark Bates:** Just keep Require. Get rid of Assert. \[laughter\] Get rid of Assert; it's useless.

**Mat Ryer:** I've just called time.now, and it is now time for the officially sanctioned Unpopular Opinion.

**Jingle:** \[00:54:22.11\] to \[00:54:42.14\]

**Mat Ryer:** So who's got an unpopular opinion for us today?

**Mark Bates:** I've given you two today. I'm done.

**Mat Ryer:** Come on then... \[laughter\] Mark, you've given about 12...

**Mark Bates:** I have nothing but unpopular opinions. This segment is my life.

**Mat Ryer:** \[laughs\]

**Mark Bates:** I'd be harder pressed to find a popular opinion.

**Boyan Soubachov:** At the risk of going a bit philosoraptor and meta - and this is tangentially related to testing, but frankly, the code that we've had the least issues with, that's the most reliable, that has the most positive feedback, is the one that rarely changes and that we haven't touched in months, if not years... Well, years I mean. So frankly, we do this because change, because the industry is growing and moving and progressing, but sometimes it's just best to leave things alone. \[laughter\]

**Mark Bates:** Would it be easier if we slowed the industry down, and stopped progressing? Would that make maintaining the library easier for you, or...?

**Boyan Soubachov:** It actually would...

**Mark Bates:** Okay. Mat, can you get on that?

**Boyan Soubachov:** I'd have my nights free. I can watch movies again. \[laughs\]

**Mat Ryer:** This is not Ruby, Mark. You can't just choose what time it is. \[laughter\]

**Mark Bates:** It's not even choosing what time it is, it's just overriding whole methods, and types, and fun stuff... \[laughs\]

**Mat Ryer:** \[00:55:57.13\] Yes... Well, I think that's a great one, actually. Boyan, there's definitely something in there. I think a lot of what we do is quite weird as software people, but it's best not to think about it too much and just get on with it.

Thank you so much. We have reached the end of today's show, but thank you... And anybody at home that's interested in talking about Testify, go to the project, check the show notes, have a look in the GoTimeFM Slack channel... We'll be leaving a link to the survey there for you to do. Boyan, thank you so much. Especially, thank you for getting up so early.

**Mark Bates:** Or going to bed too late.

**Mat Ryer:** Thank you for all the work you do to support the community.

**Boyan Soubachov:** It's a pleasure.

**Mat Ryer:** Sorry, Mark.

**Mark Bates:** No, I was just making a joke about him going to bed late... \[laughter\]

**Boyan Soubachov:** I had to make a special concession and go to bed early last night... Because I'm in the future, it's Friday for me.

**Mat Ryer:** Oh, so it is Ruby!

**Mark Bates:** \[unintelligible 00:56:57.25\]

**Boyan Soubachov:** It is Ruby land in Australia right now... \[laughs\]

**Mark Bates:** I bet if we all did time.now, we'd get different answers... Someone clearly didn't write a unit test for timezones...

**Boyan Soubachov:** That's another unpopular opinion... \[laughs\]

**Mat Ryer:** Get rid of timezones. We don't need them now! Get rid of them, I think...

**Mark Bates:** Timezones? Who are they for? What's the deal with timezones?

**Mat Ryer:** I don't mind waking up at 20 past G, or whatever...

**Mark Bates:** 20 past G?!

**Mat Ryer:** ...if we wanna change it and have a new system.

**Mark Bates:** Did you say 20 past G?

**Mat Ryer:** Yeah, yeah. I think we should use letters for the hours.

**Mark Bates:** I think we should move to a 100-hour based day, and go full on metric with the decaday...

**Boyan Soubachov:** Mat, is your unpopular opinion today forever on old time measurements to move to Unix time?

**Mat Ryer:** \[laughs\] That would be good... I'd love to see someone with a Unix time watch. That's something I've not seen, and I would like to see that.

**Mark Bates:** When the Apple Watch first came out, my immediate thing - I jumped into Xcode, which I'm not an Xcode programmer, and I was like "Oh, let me make an Apple Watch face that's just the Unix time. I'm sure some geek would buy that for $1.99 in the app store." You can't do that. You can't make custom watch faces... Or at least you couldn't then.

**Mat Ryer:** You might be able to now.

**Mark Bates:** I think you can make a complication.

**Mat Ryer:** You can do the complications, the little things on it...

**Mark Bates:** Yeah, but that's not the same...

**Mat Ryer:** It'd still be good. You could have the Unix time on your watch.

**Boyan Soubachov:** It's only useful for another 18 years though... \[laughs\]

**Mark Bates:** Exactly.

**Mat Ryer:** Thank you very much everyone for listening... See you next time!
