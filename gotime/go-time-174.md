**Angelica Hill:** Welcome to Go Time. Today we are going to be talking about testing. We've done episodes before about testing, but testing is hard, and there are many open questions, so we thought we would revisit the topic. I am very excited to be joined by our wonderful panelists; some are regulars, and a new guest, who I will be introducing shortly... So welcome, everyone.

We have the wonderful Kris... Hi, how are you?

**Kris Brandow:** Hello! I'm doing well. How are you?

**Angelica Hill:** I'm very well, I'm very apprehensively excited about hosting this episode... But I thought it would be fine, because we're just swapping Mat out with me, and we'll see if anyone can tell the difference.

Speaking of Mat, we have the wonderful Mat Ryer, who is turning into a panelist today. In terms of this episode, he is the co-creator of Testify; he writes TDD Go, and has recently launched a package called is, which is like Testify off steroids, and moq, an interface \[unintelligible 00:03:44.18\] code generation tool. Hello, Mat.

**Mat Ryer:** Hello!

**Angelica Hill:** How are you?

**Mat Ryer:** I'm good, I'm very excited.

**Angelica Hill:** I'm very happy to hear that.

**Mat Ryer:** Because I don't have any responsibility.

**Angelica Hill:** No, you don't have any responsibility... I have all the responsibility.

**Mat Ryer:** It's all on you today, so if it goes wrong...

**Angelica Hill:** Great! Exciting.

**Mat Ryer:** Yeah.

**Angelica Hill:** And then finally, we have Jon Sabados, who is a senior software engineer at The New York Times and a fan of test-driven development. Hi, Jon.

**Jon Sabados:** \[00:04:11.13\] Hi! Good to be here.

**Angelica Hill:** Do you wanna give our lovely listeners a little bit more about you? Do you wanna give a little intro?

**Jon Sabados:** I'm a fairly recent Go convert. I come from the land of Java, but I've been slinging Go for -- well, coming up to 2-3 years now. That's kind of me. You might also see my cat make an appearance here, because it's very helpful like that.

**Angelica Hill:** Well, we're very happy to have you on the show. I'm extra-excited, given that (side note) Jon is actually on my team, so he gets to listen to me be over-excited all the time. So we're gonna dive right in, and I'd love to hear from any of you a time that you regret not having testing in place, and when it really kind of bit you in the butt.

**Jon Sabados:** So there was this one time back at a prior company where we did a lot of financial transactions, and we had routines for doing rebuilds, and at some point, some change got introduced that caused a null pointer exception, so it was a production defect, and everybody rushed to fix the issue immediately. During the fix, the assignment of a variable got dropped. We computed tax properly without an NPE but then never actually recorded that result, and failed to charge tax on rebills for like a month... Which if we had had a proper test in place, that would have been good, because multiple people were scared for their job when we discovered that.

**Angelica Hill:** Mat, Kris?

**Mat Ryer:** When money is involved, you really want to have that... The safety net of tests. I've had lots of situations; never that's impacted billing, but lots of situations where I'm so supremely confident in a little tweak I'd just make, and then I'd just push it, then break something... And it's always a big surprise. And that's the thing I like about testing - it stops you being surprised so often. But I've been kind of obsessed with testing for ages, so if anything, I've gone the other way, of over-testing, and I'm sure we'll talk a bit about that.

**Angelica Hill:** What about you, Kris? Any testing nightmares? Any horror stories?

**Kris Brandow:** I think I'm in the same boat as Mat, where it's more been overtesting that's been my problem... Or I guess the only time I've really been upset about not having tests is when I've written something and then needed to write tests, and I waited too long, and now I have to spend three days writing tests, and it's just super-miserable, because no one really likes writing test code... So I think that's the times I've most regretted not having testing, is when it's not my job to go write a bunch of tests.

**Angelica Hill:** For sure. Honestly -- so I have kind of a starter question for people who are more my level, kind of newbies, baseline... Like, why is testing important? Because honestly, I was pottering through Go, writing these mini-applications, loving it, and my way of testing was just "Let me run my app. Does it work? Yes. Great! Awesome." So why is testing important?

**Jon Sabados:** Yeah, you can manually test things, but that takes time... And every time you develop new features and whatnot, do you wanna have to go through and do all the regressions for all the various previous tests that you've had in place, or would it be nice to be able to have automated tests that cover a lot of bases of those things? And that's never gonna be complete, and I'm not gonna say that you don't ever have to do manual testing, because that's important as well... But it helps there.

Now, personally, I also find value in testing outside of just assuring that the code is going to work, because you do have to write code in a certain way in order for it to be testable... And I've found that when you start with your tests from the get-go, it makes it a lot harder to write convoluted code that mixes responsibilities and does a bunch of different things; it makes it harder to test. So a nice side benefit from writing testable code is you generally end up with more well-organized code, that does a single thing and does it well.

**Mat Ryer:** \[00:07:54.17\] Yeah, I've found the same thing to be true. And you hear people talk about test-driven development, and one of the arguments against it is that it changes the way you write your programs. And in my experience, that just isn't the case. It does change it, but usually in a good way; usually, in a way that you kind of appreciate later. But for me - yeah, the point is you get to declare what your program is expected to do, and then you can run that automatically.

But there's so many benefits... Like, when you're looking at a package, you're gonna import a package - if it's got good test code, you can see how you're supposed to use that package from the test code. So the test code is really the first user of that code that you'll program. So you put yourself in the mind of the user, and I think as software developers, any time you can do that, you're gonna have good results. It's a good thing to do, because ultimately, we're writing our programs for somebody to use... And it might be ourselves, it might be other people in the team, but putting yourself in the mind of the user just kind of pays dividends all the time. It's a great way to think about what you're doing, I think.

**Kris Brandow:** From my perspective -- like, it doesn't really make sense to me to build something and then not make sure that it does what you want it to do... That seems really silly. It's like, "I'm just going to go build something" and like "I don't know, it doesn't work, but that's okay... We don't need to know if it works."

I guess I see testing on a few different levels. I think it definitely does -- it can help you with your design, but I think I've definitely found that it only really works well for that in specific types of circumstances... Like, I know what I'm going to build; I've gotten into messes where it's like I wrote too much test code when I didn't know what I was trying to build, and now I have all this test code I have to wrangle with... So I think it can definitely be a sort of double-edged sword, in a lot of ways...

Really fundamentally, I think it's about making sure that what you write is what you wanted to write, and what you implemented is what you wanted to implement. I have this saying that that more relates to design than it relates to testing, but I think it kind of falls together... If you haven't said what it is you're trying to do, then your application is all bugs; you don't have features. Because bugs are things that you didn't expect to happen, and if you haven't declared what you expect to happen, then everything is stuff you didn't expect to happen.

**Jon Sabados:** Declaring what you wanna have happen, apart from just \[unintelligible 00:10:19.02\] helps document the code... Because I can't count the number of times that I've gone into an old legacy piece of code, and I've been refactoring, or adding something, and you come across a thing and you're like "Wait, is this really doing what the original author intended? What is the intent behind this code? Because it looks broken to me, but maybe it's right." If there had been a test there asserting that behavior, at least you know it's intentional.

**Angelica Hill:** I'm interested to hear a little bit about the process of when you're writing a program. Do you concurrently write a little bit of your code and then write tests for it? How do you think through how to write tests along with your actual main application?

**Mat Ryer:** Well, when Kris was talking about sometimes depending on the kind of problem - sometimes you can't write the tests because you don't really know enough about it. And there are definitely times like that, when it's completely new and you really have to knock some things together first to get a sense of what you're doing. But I actually find writing tests can help with that process, too. So I tend to do a lot of TDD. Wherever it's appropriate, I will write the test code first. And usually, I'll just imagine - so I know the kind of problem I want to solve, so I just imagine it exists and I start to write code that uses it. And of course, it's just errors everywhere, because nothing's implemented... But that then gives me a kind of to-do list. So I have my test code, it's broken usually with errors first, so I just try and make those errors pass. Usually, it's like "Oh, this function doesn't exist" or "This type is not there", so I'll just go and add the type.

I try not to jump too far ahead when it comes to putting the program code in... I try and wait for the tests to guide me there, because that red/green -- they call it red/green testing, because you wanna see the test fail first... And then you know that you're saying something about your program. And then when you make it green, when you make the test pass, you know that you've then progressed your system in the right way.

\[00:12:22.12\] But I do find that TDD helps, depending on the kind of problem. But if I was gonna write a package that was gonna parse some text and produce some output and some data, then absolutely, I would start with a unit test, and looking at it from that user's point of view.

In Go, if you put your test code in an outside package - if you've got a main program, main test can be the package for your test code. In normal Go programs this is an error, if you have multiple packages in one folder, but with test code it's okay. And that then allows you to call your code really as though you are an actual user of it... So you even include the package name in your test code. And what that does is it lets you see the API very early. So you can see the kind of API you're building or designing, all that's emerging... And that's a nice way to make sure that even just like naming things makes sense, and other things like that. Having the test code can really guide that towards good design.

**Jon Sabados:** I'd say I'm in a fairly similar boat... If I'm doing something where I'd call it more of a lab situation, where I have no idea -- like, I'm working with a new service from AWS, or GCP, or something, yeah, I'm not gonna write tests there, because I have no idea what I'm doing; I'm gonna write my code and figure out how I'm gonna do it first... But then yeah, if I'm fixing a bug in existing code, a test to duplicate the bug is gonna be the first way that I do it. It makes it easy to solve. I can just run the tests repeatedly, instead of firing up the application.

Also, if I'm modifying existing code without tests, writing tests for the existing code gives me confidence that I haven't broken those existing things. If I'm doing greenfield, then yeah, ideally I'm gonna start out with writing tests as well, because I have found for me, when I do that, I'll write out all my various different test cases, think through them, think through the scenarios I need to address... It gives me a blueprint. I almost turn off my brain when I'm doing the implementation of the code and I'm just fulfilling what the test needs.

**Mat Ryer:** How far do you write tests then? Do you tend to write a lot of test code before you get started on your program code.

**Jon Sabados:** It can depend... It depends on what I'm doing. Usually, I'm very rarely standing up an entire new project greenfield, because it's usually just adding new things. So usually, I have a fairly constrained problem set that I'm dealing with... And what I'll probably do is I'll oftentimes think through what's going to need to happen, and I'll build out stubs for "Do X, do Y" in the various different things, and then I will attack one section at a time, and write the tests and complete the implementation for a piece.

Of course, as you go along, you might see "Oh, this piece actually interacts differently, so I'm gonna have to go back and test, go back and tweak some things." And it does add a little bit of churning time with the "I've gotta adjust the tests that I've written before", but for me it's worth the trade-off, because there isn't that massive -- I've been in a hole for three days writing code, and now I've gotta write test code for a week... Because that's never fun.

**Mat Ryer:** Yeah... Writing test code to something that already exists is soul-destroying, isn't it?

**Jon Sabados:** Yeah.

**Kris Brandow:** I have to say, I think I fall on a different side of things than you, Jon and Mat, from the way I tend to approach things... I'm much more of a top-down kind of designer than a bottom-up... So I find writing tests is usually too granular for what I'm trying to do, which is why I basically never do test-driven development. I still write tests; I don't use that as an excuse not to write tests. Tests are important. But I definitely find the way that my brain works, it's much easier for me to hold the high-level things in place and start sketching them out... And I've just found that that's super-incompatible with test-driven development, and it usually leads me to write way too many specific tests, that just immediately become debt that I have to deal with; they become garbage in my codebase, that I have to toss out eventually.

\[00:16:12.19\] I also think the style of tests that you write really depends on the type of thing that you're writing. I think in a lot of these conversations too often we take this perspective as if "There's one proper way to test, and you should use it for all of the code you write." But I have found that, especially for things that are like microservices, that I'd much prefer a model of testing where I kind of write the test, not just like \_test package, but they're an actual separate package, that's like "Oh, this is the test that's going to test through this API", and everything is not just external from the Go API perspective, but external from the process perspective.

So it's using the same avenues that all of the requests are going to come through. And I've found that this does a couple things - it enables me to separate out the serialization logic and storage components without having to duplicate all of the test code between them... And it has also helped me eliminate a lot of dead logic that I'm like "Oh, I think I probably need this." And if you just kind of like write tests around it, then you'll see that as covered and you'll be like "Oh, this is good", but if it's dead logic within your service, then you should probably get rid of it, and if you need it later, you can dig it out of Git, or just rewrite it when you need it... So I've found that that really helps me write much more concise and compact services, while also making my test code look pretty good... Because when it's a separate package, you have all of the linters and things that yell at you if you write gross test code.

**Mat Ryer:** Yeah, that's a good point you make... Whenever there's a time - and you see this in testing a lot, where devs have such strong disagreements about things... Whenever that happens, it's a sign that it really does depend on the sort of things you're doing. If you're writing a Go package to do something, I think that's a very different proposition to writing a new service that's gonna integrate with lots of other different services. And similarly, all the way up to the UI. When you've got a UI there, having tests in UI code is also a kind of entirely different beast.

So yeah, I agree that your testing should change depending on what you're doing. You can't learn just a single blueprint of testing and apply it to everything. I'd even extend that to per-project. Depending on the project, even if it's very similar to another project, the testing needs are probably gonna be different. So testing is really a skill, and almost like an art form that you have to learn and apply it to give you that confidence that you need that your program is doing what you want it to do.

**Break:** \[00:18:54.20\]

**Angelica Hill:** I would love it if maybe you could chat a little bit, for those who aren't maybe aware, about Testify. What is it, how did it come about? Give us that intro, for those who may not be as familiar.

**Mat Ryer:** Yeah, so Testify - way back in the beginning, one of the things about Go I think is great is that testing is a first-class concern. Ruby on Rails had this too, where testing was just something that already existed within the programs that you were writing; it was kind of there from the beginning.

A lot of other languages - testing came later. You have other frameworks or things that you then use. So the Go standard library comes with testing; the Go tooling has support for tests, it knows what tests are, and expects you to write them. So I came from a kind of Ruby and C\# world, where I was very used to this pattern of making assertions. So just like saying "Okay, I'm gonna call this method. It's a greeter. I'm gonna pass in my name, and I'm gonna make an assertion that what comes out of that says "Hello, Mat." And if doesn't, that's then a failed test."

You can do that in the standard library; what you do is you just write normal Go code. So you'll just call the method and check the result, and if it's not right, you then use a special Errorf method on that t that you get in Go; the t that gets passed in from the testing package... And then you can fail that test. And it was just too much repeating myself at the time, in the beginning, so we wanted to be able to just write single-line assertions and have the tests just fail in that way. So it's really just a kind of style thing really, and it didn't exist. No one had made that before... So me and a few friends just made this little package called Testify. I think it was just around from very early, so it became the de facto way to do it. It's massive, actually. Loads of people use Testify, and I don't now.

**Angelica Hill:** You don't?

**Mat Ryer:** No.

**Angelica Hill:** What do you use?

**Mat Ryer:** I use now that is one.

**Angelica Hill:** Okay.

**Mat Ryer:** It's a much smaller one. The thing about Testify is one of the patterns for the open source thing was if somebody made a contribution, then they would just add it as a contributor to the project; this was an idea that was a bit popular at the time, a bit trendy... So anybody that needed to assert some things, like "I wanna assert that this slice of string contains a particular value" or "I need to assert that this value is within an average, within a range of values" and all these sorts of things, the kind of floodgates were open, to some extent, and they all got added.

If you look at Testify today, it's a massive API footprint. It just has kind of everything. The nice thing is it all works really well, because it's been used a lot and tested a lot. But I've just found it was too big; even I couldn't really figure out what I would need to use, and I ended up just using two or three of them. So that is a project that's basically taking just the few -- it's like a really minimalist version of Testify... But it's really the same things. It gives you single-line assertions, and that's it. So I tend to do that... Or if it's a simpler package, I may just use the standard library, if it's suitable.

One of the other things with the standard library is when it fails, you have to provide an error message and include the values, and things. That's where it gets a little bit repetitive, because you're saying "I expected this, but I got this." That's what you care about when a test fails. So these packages let you just pass in the two values, and it will print out if there's a failure. So that's really all it's doing to help...

There are some people -- Francesc Campoy is classic; he has a go at me for Testify all the time. He really doesn't like these assertion patterns, and stuff...

**Angelica Hill:** How about Kris, Jon? Do you use Testify?

**Jon Sabados:** \[00:23:53.14\] Yeah, when I first started into Go, somebody pointed me to Testify, and actually the whole team -- because we were a bunch of Java developers... And we were like "Testify - this looks like the way we should do assertions." So we started out using it... And then when it actually came time to do manual assertions with Go and the API pragmatically... It's like, this is miserable, especially doing db qualities on objects, and like if you're testing marshaling and whatnot, and there's a million different things you wanna compare and seeing the difference, doing that by hand is terrible... So having Testify where it gives you a nice printout and shows you the diff of what fields are wrong and whatnot is wonderful to me...

**Mat Ryer:** I already know this isn't gonna go well for me, this one... \[laughter\]

**Kris Brandow:** I definitely kind of sit on the side of the fence with Frances... I watched a talk from years ago by Blake Mizerany, where he kind of went on this journey of why you don't really need assertions in Go... And that fit with the mentality I already had going forward with how I wanted to write tests; I was very much in the just do it kind of simple assertion with your code. I do feel the pain of the Reflect package and using Reflect that deep; that's absolute garbage. It just does not compare things in the way that you want them compared... But I think the Go cmp package makes up for that in some really strong ways. If I have something advanced that I need to get the equality for, I typically lean on that, because it is very small and concise, and really just does one thing and does it well...

And I've also kind of seen -- back when I used to use a lot more assertions, I kind of wrote worse test code, because it was so easy to just throw some things in and assert, and I wasn't really thinking of why is this painful for me to assert. Like, "Am I writing this in a way that makes it difficult to actually compare these values? Do I perhaps need some sort of method on my types that allows me to compare them with ease? Is that comparison something users might want, and should this not just be in my test package, but should actually be part of my API, so that users can do this as well?"

So I think once I started also thinking down that path, it made even less sense to lean on Testify and similar libraries... And I definitely agree that Testify's API is just way too huge. And I think there's this thing with a lot of the testing packages, where they would mess with the output of go test, which messed with people that were trying to parse, and process the output... I think a lot of that has been resolved, but it was definitely a problem for a little bit.

So I think I fall on the side of wanting smaller, more direct tools like the Compare library, that kind of satisfy the needs I have, and they're as barebones as possible. But I also realize that that's a lot to ask of someone that's new to Go, so I think it's perfectly fine if you're new to the language and you're like "I'm so used to having assertions, and I'm overwhelmed with all this other stuff I'm learning" - please, go use Testify or is, or whatever it is that you need to write tests... Because it's more important that you write tests and don't get super-frustrated and leave Go than it is for you to be writing pristine, beautiful test code. It's like, write tests, test your stuff, do what works for you, but try to evolve that perspective as times goes on. Don't just be like, "Well, I've always used assertions, so I should keep using assertions." It's like, question that sometime; see how you feel. Feel the same way? Okay, continue using it. But I think over time you'll probably find that you feel a bit differently.

**Mat Ryer:** Yeah, it's really interesting... This was back in 2013-2014, where I was seeing a lot of people complaining about the lack of just being able to make simple assertions... So they were not testing code; they were projects that were like "It's broken, it's incomplete, so we're gonna wait for it to be complete, and then we're gonna add tests." And there were people making the case -- and Kris, I think you nailed it, really... Whatever you can do to have your code tested, whatever you need to do is okay. The important thing is having tested code. That really is important.

\[00:28:02.16\] I am very flexible with anyone's approach to that, whatever that means to them... So yeah, I think testing is the important bit; which package you use or how you do that - I don't mind. And probably it's different, again, depending on all the things we talked about.

**Angelica Hill:** Kris and Mat, you touched on this a little bit, but I would be interested to hear, how is testing and the way you go about it different in Go, as opposed to other languages? ...i.e. someone like myself, I've only lived in the Go world, so I'm learning testing from zero. But for people coming from other languages into Go and wanting to start testing, how is it different? What are the kind of tips you can give for people new to the language, but who have maybe heavily tested prior?

**Jon Sabados:** Testing is part of the language, built-in, which is nice. In most other languages you're using some other random framework. It's hard to say a direct comparison without saying what language are you talking about... Because if you're coming from Scala land, you're doing some sort of BDD-driven -- it's been forever since I've worked in Scala, but they had their own little framework outside of JUnit; it's very similar, in some ways, to go test, where you need to find test cases, and there's no magic that then there's a bunch of other -- there's a ton of different testing frameworks out there, and they're all kind of different... So I don't know if you can really just say from another language; you'd have to say from a specific language.

**Angelica Hill:** Okay.

**Mat Ryer:** Yeah, but in my experience, the principles are all basically the same. You're calling your code and making some statements, some tests about the response you get from some code that you call. And it's quite interesting to see the different styles of that BDD Jon mentioned, where you get to write these sentences. It's almost like you're writing test code in prose almost... So when you see failures, it's very expressive, expressing what's gone wrong, and things.

To me, they're just different styles of it, but essentially, being able to automatically run a test suite against your code, whatever that looks like - that's really the valuable bit. But I find them to be very similar. In C\#, in Ruby -- I mean, they had the assertions, like Testify has. In that case it was very, very similar. I think with experience I've changed the way I think about testing over time. That's more different. Even years ago in Go code, the test code that I would have written then is probably very different to the test code I've written now... So there's probably more difference with me over time than between languages.

**Kris Brandow:** I would agree with that, too. I've been writing Go for a long time as my primary language, so it's been a long time since I came from another language to Go... But I've definitely seen very large change in the way that I approach testing as I've written more and more Go and as I've read more and more Go.

I think early on I was very focused on the low level. I'm just like, "Okay, I wrote this function. Let's test every single bit about it." \[unintelligible 00:31:10.07\] every single bit about it. And then I'd still wind up with some pretty brittle code and some pretty awful designs. But I think that's the initial thing that kind of disillusioned me to writing so much test code, and writing test code first. I guess I was trying to make it a design process, and I feel like this is sort of what happens a lot, for a lot of people - we kind of sub out a design process with testing, and testing is a very poor method of designing software, I think. I think it can be useful as part of the design process, but if it's the main thing that you're doing for the design -- unless you understand really well what you're trying to build, it winds up leading you to having a lot of code that then becomes more difficult to get rid of.

\[00:31:58.15\] I think early on it's pretty easy -- it's like, "Okay, I don't have a lot of tests, I don't have a lot of code, so changing things is pretty easy." But I think when you're embarking on a larger project, if you don't do the design work upfront, you wind up with bugs in your design that you wind up reinforcing with test code. So now you have this behemoth of code that you're then trying to go through and trying to wade through, and being like "I wanna change this design now", and if I sat down and kind of thought through this a little bit more, I probably would have designed it this way in the first place... But I was trying to get this thing out the door, and trying to write all the tests for it, and do all these other things, and all of these ceremonies that we have, and now I've wound up in this rough spot.

So I'm definitely not saying we should write less test code, but I'm definitely saying that we should see testing as part of the larger process of design, and make sure that we are testing our designs, which is related, but different. Testing your design is definitely more of a mental exercise of kind of looking at it and being like "Does this actually make sense?" That's kind of where I stand on that.

**Mat Ryer:** Yeah, I used to overtest. So overtesting for me is where I've done a lot of work writing my test code to make sure that it describes in every detail what my program code is... Because at that point in time my program code is working, and I want to make sure it stays working. But the problem is - Kris, you mentioned brittle tests, and this is really interesting. So if every time you make a change in your program code it breaks tests, that isn't necessarily a good thing; that can be a sign that you've overtested... Because you really want to be testing the behavior of your code, not really exactly how it's doing everything... So that is kind of tricky.

One example is if I have some code which is gonna parse a string and turn that into a data structure, so that I can then go on and use that in some other way, I want to make sure that I pass the string in and I get the certain things out. If inside my function I happen to be using something on disk to keep a cache, maybe a dictionary on disk or something, that's an implementation detail that may not matter to this particular test. Of course, if that is part of your program, you would want tests to cover that in some way... But if in every point that you're using this function you describe the exact I/O operations that are going on and you're making assertions about it, if you then decide to change that, and in fact maybe we store this in memory now, because it's more efficient or something, your test code is kind of bound to that program code's implementation, and you then have a lot of work potentially to do... And that's when tests start to feel like a burden, maintaining this test suite that is just fighting you all the time... Whereas if you can take a view that, okay, some of these implementation details aren't important really to this particular test, so I'm gonna just test what's important, and that what's important is a difficult thing to come to, then you're free to change the implementation, and the tests are happy. They're like, "Yeah, you've changed it. Sure, you've made loads of changes, but actually, all the promises are still kept, so no probs."

**Jon Sabados:** I think this is somewhere where I actually find myself potentially at odds with the Go community in general when it comes to testing... Because when I add something like that, where I've got a system that deals with the potential cache, the way that I would address that is I would abstract that cache out to its own thing and inject it in, and so the code dealing with the cache would have no idea how the cache operates, and it would just trust the contract to that, and I would test it with a mock, because who cares how it's going to the cache? It's just writing to a cache and reading from a cache; that cache can have its own tests, and that keeps that implementation divorced from that. But that is very much at odds with the "Don't rely on mocks" and whatnot that you see \[unintelligible 00:35:53.19\] quite a bit within Go.

**Mat Ryer:** Yeah. I mean, I will mock code... Mocking is a thing -- this is another time where I feel like "It depends" really matters here... Because I will mock code in certain situations. You want to make sure something is happening, and a mock helps you do that... But you are tying that test code to the implementation detail of that. Maybe that's okay in each case.

\[00:36:20.25\] But you know, what they say is end-to-end testing as an alternative to doing that is nice. So a bit like how Kris mentioned, he will have almost an external process... And we did this too in our Pace project, where our test code would spin up the server using the exact command. So it literally spins up the process, and then that's gonna listen to a port, and then it makes calls through the API, using the client also that I expect users to use. So in a way that's nice, because your test code is also using the actual client that you want other people to use too, so you sort of validate that at the same time.

And then if it's a caching situation, you may make the request wait a bit, and then - what do you do? ...you make another request, and it's the same. And then you might change something... You know what I mean? It gets really strange when you're testing things like that. In that case you mentioned, Jon, where there's a cache, I think it is quite reasonable to make the case that you'd want to stub that cache out and just make sure that your program is using it; it doesn't matter really, because you're not testing that cache in this case. It is tough...

**Jon Sabados:** Yeah, because those end-to-end tests are great when they work, because it solves a lot; you don't have to worry about the internals, and you have absolute confidence in it. But especially the problem space that we work in, where we don't really care about the output from a thing, because we're doing a bunch of things behind the scenes, and sending push notifications and emails and whatnot, and we really care about those interactions that happen with those external entities, and they're very complex and hard to stand up mock servers for... I mean, that's where I find the direct unit tests on like "This section of code needs to do this thing, and if it fails, it's going to retry like this, and back off like this, because that matters with API rate limiting yadda yadda yadda.."

**Mat Ryer:** I mean, honestly, I'd be with you on that one, in that case. If what you're building sends emails, and it matters to you that this code ultimately sends an email, you don't really want to be sending emails every time someone runs your test code... Unless perhaps you've got an enemy, and you \[unintelligible 00:38:23.10\] then it's reasonable, yeah.

**Kris Brandow:** I guess upfront I generally dislike mocking... I think in the case we've been talking about, I think it's okay, but I also think it's -- at least to me, it seems like a big design problem with the way that we currently have things operating. I definitely dislike when we have to basically not talk to real things, because those things are built in a way where it's not practical to talk to them. That's us taking on responsibility for something that we're not really in control of, which I always think is a little bit dangerous..,

But I think the big thing I dislike when it comes to mocking is that people try to do it for things that they do control, and it gets people in the habit of doing it for things they control, and then they do it poorly. Whenever I see something is an SQL mock - and I've been guilty of this before too, of just like writing garbage SQL that doesn't actually work, but then you've been unit-testing and it's all working, and then you go to use an actual database and you're like "Oh crap, none of this actually works", the reaction that I think would be like "Oh, well that's just a bad habit. You shouldn't do it", but that's a discipline that you have to build. That is mental energy that you are expanding to remember "Okay, when I'm doing it this way, I have to remember to not accidentally write bad SQL" or "I have to remember to test it in this right way" - that's extra energy that you're expending, and I've just never really found that that energy is worth it to be expensed in that place.

So I think mocks are a useful tool when you need them, but I'd much prefer -- in the example we were talking about - that the email service provider has a sandbox. Or if it is a big enough thing where this is crucial to what we're doing, that we have a proxy or an API of some sort that we have internally, that all of the other different components can talk to, and we make sure that there's a sandbox mode for that, and then it kind of acts as a gateway to the outside world, so then at least when we're doing the mocking, it's kind of sectioned off to one little thing... And I kind of feel like we should spend more time trying to design those types of systems, because I feel like in the long-term it winds up with us having, once again, less brittle testing.

\[00:40:31.22\] I also think if you mock something and then the implementation changes, your unit tests aren't gonna catch that, and then you're just like "Okay, well I have my integration tests to catch that, or my end to end tests to catch that." And then I come back around to "Well, if you're gonna use your integration tests to catch that, why can't you just use your integration tests all the time?"

So it's kind of like this catch-22, and this road you're kind of navigating and trying to figure out "Okay, how often do I need to run my end-to-end integration tests and how much can I rely on my unit tests?" and that's a lot of energy that we're expending. It makes sense in a lot of circumstances, but I think we have to think through it a little bit more, and it shouldn't be our go-to thing. I see far too often people are like "Of course I need to mock this thing that I'm using. We're gonna use GoMock, we're gonna generate the mocks. That's what we're going to do", and I also think that leads to hyper-abstraction, where we start abstracting a lot of things and shoving interfaces all over the place so that we can have these mocks... And they're extremely leaky abstractions, and they're kind of gross and difficult to deal with, and they add a lot of interactions to your code, so it's harder to read, and that comes with a whole host of problems...

So I think it's a lot like channels and some other things that we've brought up on the show before, that are like "Use these sparingly, and understand all of the implications of using them." I feel like mocks and interfaces definitely fall into that, as well as abstractions. And I feel like your default mode of thinking shouldn't be to run and go create an abstraction, because the best abstractions that we have, especially in Go, are ones that have been very thoroughly thought through and changed very, very infrequently.

I think the io package has some really great abstractions, that are true abstractions. You don't care what's on the other side of it. You're not gonna think about the implementation details; those don't matter to you. And I think a lot of the time we wind up creating abstractions that are not at all like that. That you dig in and you go grasp that implementation detail because it makes your life easier, or because you just can.

So I think we should avoid abstracting until we actually need it. But once again, if you're new to Go and you're like "This is easier for me. It requires less mental energy for me to use mocks and to deal with it this way", I'd say write the code and learn as you go. And obviously, work with your team... If you're on a team of a bunch of more senior Go engineers and they're like "We're not doing mocks", well, that's gonna be a little rough for you. But I think if you're just kind of learning things and you're like "Mocking makes it easier for me to understand these other concepts I'm trying to learn", go use mocking. This isn't like a "No, thou shalt not mock", but I think we should really consider how much effort it really does take at the end of the day to use these things. I think often we just assume that they don't take much effort at all.

**Mat Ryer:** Yeah. The thing is when you find an abstraction -- the best abstractions for me emerge from when I've solved the problem a few times. Then an abstraction might emerge from that. And when it does, especially if it's a tiny little single-method interface or something like we see in the standard library, it's such a good feeling that you get sort of addicted to that, which is why I think we start there... Because that's what we want. We want these abstractions to exist, because it unlocks so much power. You can plug anything into this in a good abstraction. The trouble is they are hard to find, and they're hard to get right...

\[00:43:44.07\] So I'm with you, Kris... Me and David - I work a lot of with David Hernandez - we even have reached a point where we won't do any abstractions until it's too painful for us to carry on. So that usually means having the same thing copied and pasted three or four times, and only the is it like "We can't fight this anymore. There is an abstraction here that's worth then going and retrofitting." And our code generally is better for it, for resisting those abstractions.

Another thing on test code that I'll say... It's a principle that I've found, which -- Jon you mentioned this earlier... It's to really only test your code; only test one thing, if you can, in a unit test. Here's an example - if you're gonna unmarshal some JSON, you're probably gonna use the standard library's JSON package, or one of the other JSON packages to do the unmarshaling. It's not your responsibility to test that thing.

I used to in the past - and this is a mistake I've made a lot... I would have some object and I would unmarshal it, and then I would have an assertion for every field that was unmarshaled, and that kind of gives me the confidence that this is working. Now, really what I'm doing there is testing the JSON unmarshaler and marshaler; I'm not really testing my code, which just uses that.

So I'll tend to now have a slightly more relaxed attitude to it. I'll test a field to make sure that it worked, and then I can sort of trust that it works. That has bitten me before, where one of the names was wrong in the JSON thing.... But it doesn't happen very often. But when that did happen, then I added more tests to that. You can't really have strong rules that you can just always follow. But I do find being a bit more relaxed about testing still gives me enough confidence so that I can sleep at night without it being me basically just repeating my program code. It's tough though, ain't it?

**Jon Sabados:** It makes sense. Yeah, it can be difficult. Using marshaling as an example instead, where the output format from our things very much still mattered, and it actually mattered with the Go tags, because yeah, we knew that we could marshal stuff correctly, but if there was a field that had omitempty in it, it would actually break the Android readers of stuff, because in other languages an empty set or an list is very different from a null list... So it was actually really important that we have this automation on our output contract that asserts "This is our output." Yeah, we're kind of testing the JSON marshaling, but really that's not what we're testing. We're testing that we actually had the annotation -- well, we're testing that the rendering was correct, and it doesn't matter how it was done, but just the response marshal it gets there. But we don't necessarily need to do that for everything, We've gotta find the right scenarios.

I think where I find the end-to-end testing that was specifically using SQL (as an example) gets hard is in failure scenarios. So again - and maybe this comes from working just in environments that I've worked where one company was working with virtual cell phone carriers, so you're integrating with Sprint and whatnot... But where you're writing with multiple different data stores, participations in transactions and when to roll a transaction back might be very important... While simulating those failures with a local db - that's impossible to do when you're actually talking to... Well, I shouldn't say impossible, but incredibly challenging to do.

So again, I guess those are the scenarios you run into, where it's very painful that the Go SQL library can't be mocked, because I wanna make sure that this transaction gets rolled back when this other write fails... But I can't really do that with a stock library.

**Kris Brandow:** I feel with SQL though that's a good example, where we do have a really good abstraction... So you can just write a fake driver, and you're like "Okay, I'm gonna use this driver to test this specific scenario", and it enacts that scenario quite easily.

\[00:47:45.28\] I kind of see that a little differently than generic mocking, because you're not actually really changing the implementation that you're handing the code in a way that it needs to care about. What the code needs to care about is like "I'm using the SQL db, and SQL Tx and all this stuff to make these queries, and then it goes somewhere, and then I get some result back, and then I do other things."

I often hold up the database SQL package as a really good example of how we got the abstracting right in the standard library. And oftentimes I'll use an example and people point out to me "Oh, but SQL db is an interface", I'm like "No, it's not. It's a struct type." The driver is the interface, and that's the thing you've gotta implement, and then it's like you can do what you want with it after that.

I think that does require more tooling that we might not really have. It's definitely easier to use Sqlmock to do that kind of stuff... But I think also if those types of failure modes are something you really care about, then that's something you should be investing in... And perhaps even investing in a type of database that allows you to do the kinds of failures within the database.

I've worked on databases before that have these types of fail points within them where you kind of set it up in a specific way, and then you make a query, and then boom, it'll fail in a way that you expect it to fail... Kind of a certain production scenario.

So once again, it's like that - a solution is to use mocking, but I think that also it's something we can fix with the technologies that we're using, and making them get better. And I also realize that that's a huge ask, like (I don't know), adding failure points to Postgres is probably a giant nightmare, so not something that's really practical... But I think it's something that can help us as a community and as an industry think better about the types of products that we're building... So maybe the next time you're building a product, you can say "Well, maybe I should have a way for people to induce failures so they don't necessarily have to mock, and they can just use the actual real implementation to get those failures that they want at the time that they want them." Obviously, a lot of extra design costs there. It's not an easy thing to do, it's extremely difficult... But we don't get paid big bucks because we just do things easy all of the time; we get paid big bucks to solve difficult problems.

**Mat Ryer:** I don't get paid anything at the moment...

**Break:** \[00:50:00.20\]

**Mat Ryer:** The interesting thing about errors - because that's another thing... With code coverage, you can measure code coverage and it gives you a percentage. So whenever you've got a percentage, we want it to be 100%, don't we? It's very natural. I think 100% code coverage is not what you should go for in Go, specifically. And honestly, I don't test the if error equals nil things, unless it's part of my API design. If I have a special kind of error - like a sentinel error, as Dave Cheney coined - that is part of the API... So in this particular case I get back this error, and I will then test those. But if it's program code that's doing things and I have a lot of checks for errors and I return the error in an error case, I'll just maybe test a few of the key error cases, and then I trust myself, I trust that we've done errors properly. That probably won't be appropriate for every case, but I think shooting for 100% coverage means you have to try and get everything to error... Like we're talking about, like the os package - if you're gonna open a file, how do you get that to give you an error as part of a test? It doesn't really matter, in a way, if you're handling that error properly. So I tend to omit that from unit tests.

Another thing - you can sometimes address these problems with different design, too. So one example is idempotency. Or idempotency. I don't know how you say that. How do you say that, Angelica? You speak very properly.

**Kris Brandow:** I say idempotency...

**Angelica Hill:** Yeah, I would say idempotency...

**Mat Ryer:** Idempotency...

**Jon Sabados:** I always try to just type it out, that way I don't have to... \[laughter\]

**Mat Ryer:** Well, even if you're talking to someone in real life?

**Angelica Hill:** You just write it on a post-it note and hold it up. \[laughs\]

**Mat Ryer:** Yeah... Even in real life situations you do that, Jon, don't you?

**Jon Sabados:** Totally. \[laughs\]

**Mat Ryer:** Yeah. This should be idempotent... This idea that if you've got something that could go wrong, and if it goes wrong, if it fails, you can then retry it and you're not gonna end up in a strange state, because no matter how many times you run the code, the idea is you end up in the same place. That as a principle really helps, because suddenly your testing can be simpler, because you don't have to check if the database might give you an error, or the file system might give you an error, or your email sending thing is gonna give you an error, or something... That's hard to make idempotent, though...

So sometimes I think there are design things you can do, and also I think you can trust yourselves to some extent that you're gonna write the code properly. If you don't, then it's kind of obvious, but maybe not. How do you feel about that? Do you want to test all those if error checks?

**Jon Sabados:** \[00:56:07.25\] Generally not. That's like shooting for -- I would say there is no correct coverage number that you should shoot for. I've actually had things go horribly wrong in the past with developers putting everything on one line to meet coverage requirements... Yeah, it's not important to test every single error check. There are conditions where it is important to have a test to ensure that an error check happens, but that's gonna be a case by case basis, and determining whether or not it really matters... You know, like, should you be testing for the write to the output stream? No, that's never going to fail. Or if it is, it's a request that the network connection went wrong, or whatever. It's not the end of the world.

An example that I got today is a routine that has to read from one system read from another, and then if they're different, write to them... So writing through those tests, it might be important to, you know, if the read from one fails, yeah, we shouldn't do a write type thing.

I usually end up getting to that point where I'm writing those tests though, because I've written out a string of code, and I'm putting it in my test and I find that building those -- I haven't done TDD, so I'm building a test on existing code; well, I've gotta build through all these scenarios anyways... That just happens by happenstance. It's not so important.

**Kris Brandow:** I would go as far as to say that 100% test coverage is impossible, if you have any definition that makes sense for test coverage. I think running all of the lines is insufficient for actually understanding if you've covered your code... And then once you start bringing in branching and things like that, if you have even a moderately sized application, it's not really possible to test everything.

I also think test coverage I've found to be a really bad heuristic as far as "Is your code actually doing what you want it to do?" It's just too easy to just like "I'm running the code. I'm not really testing it for real." I think that's back to - we should be doing design, we should be defining what we mean by these things.

Something we're not really good at doing as software engineers - which is kind of ironic, because we're pedantic about almost everything... But you know, that's something that goes in a design doc, of like "What is our testing plan? What things do we need to test and how do we need to test them?" and to do that upfront. It's a failure of our industry that we kind of go in -- TDD sort of helps with that, but I think it's a failure of the industry that we go in and we don't know what we're supposed to do until we've done it, and then we say "Oh look, we did the thing."

I don't think TDD is sufficiently large enough in granularity to handle that situation... And I think what that kind of runs us into is the eternal question of "Is this a feature or is this a bug?" Well, we don't really know, because we didn't define really concretely what our features were upfront.

**Mat Ryer:** Yeah. So you've mentioned this before, Kris - we differ on this, because you have a lot of success, I think, with the design process upfront and thinking ahead... And I don't have the same experience. I'm much more effective improvising my way through it and doing it as I go. Obviously, that's just broad strokes; I'm saying that generally speaking. Sometimes, of course, you can't really beat a good design. But that's an interesting difference...

I think sometimes maybe personality type or something else that may even play into that, like the dynamics of a team, and how you think about things... I think that probably comes into this, too.

**Kris Brandow:** I would suspect that we probably are more in agreement than we think we are, but our semantics are differing, and that's where the difference comes in.

**Mat Ryer:** Oh, really?

**Kris Brandow:** Because the way I think about upfront design and what goes into a design I think is very different from what most people conceptualize as like a "What do you do when you write a design document?" There's so much nuance that really goes into it. I expect that during the design you will be writing code, you will be prototyping. This is not like a "I'm going to sit there and theorize things." It's like, no, you need to write real code. You need to see if your ideas actually work. This is not like "I'm going to write a design in the abstract and hope that it works." I think the main thing for me is like "Do you ship that code?" and the answer is always no. It's prototype code, you do not ship that. You write it again once you understand the space better, and I think that's where TDD can be very helpful, because now you know what you're writing and what you're doing.

**Mat Ryer:** \[01:00:13.24\] Yeah.

**Kris Brandow:** So I think a lot of where we have differences here is likely down to semantics and nuance... Which is okay. That's part of the process of understanding and evolving ideas. It's like coming together, having conversations.

**Mat Ryer:** Yeah. Okay, that's really interesting. I'd love to see a talk, if you wouldn't mind doing one at some point, and showing your process there, because it sounds very interesting. But you're right, I will often rewrite everything. I'll write something once -- and I do use tests, because for me that really just helps me think about it. But then I will rewrite it. Almost 100% of the stuff I've done is a rewrite, because you learn so much in that process. And usually, you learn like "Oh, all these things I was thinking were necessary", and hopefully, a nice, much simpler design has emerged by the time you've been through that process. And it's actually quite easy to rewrite once you've got something... Because like you say, you know then what it is. And you can usually copy -- you know, there's probably chunks that are great, that you'll keep, and you can copy them across. But I do rewrite a lot. That is something that I find myself doing. I find it to be really great. And actually, I get complemented sometimes on -- not very often. Not often enough, if I'm honest... But I do sometimes get complimented on my API design. And people usually ask that, like "How have you designed that so well?" and basically, it's a rewrite. It's a version two already, before anyone else has ever seen it.

**Kris Brandow:** Angelica?

**Angelica Hill:** Yes? I have many views, but I'm -- honestly, this is the best podcast ever, in that I am just sitting and soaking it all in, and having the best masterclass of my life. It's brilliant. But we are actually, serendipitously, going to be turning over and cooling our beans on the wonderful testing fire that is this conversation, and we'll be talking a little bit about your unpopular opinions.

**Jingle:** \[01:02:07.04\] to \[01:02:24.19\]

**Angelica Hill:** As our wonderful guest, Jon, I'm probably gonna turn over to you first... We'd love to hear an unpopular opinion. It does not need to be Go-related, it does not need to be testing-related. It can be world-related, it can be doc-related, it can be anything-related.

**Jon Sabados:** Alright, so this will probably make me some enemies, but chocolate is kind of nasty. \[laughter\]

**Angelica Hill:** Chocolate is nasty?! Well, I have one thing to say about that - you mean American chocolate is nasty... Because I'm sorry, but British chocolate is on point.

**Mat Ryer:** They're different.

**Angelica Hill:** Yeah.

**Jon Sabados:** Actually, milk chocolate, like Hershey's milk chocolate -- actually, I don't know if that's even American or whatnot... That's the only chocolate that I like. You know, the stuff that people normally think is good, like the dark chocolates and whatnot - ugh! No.

**Mat Ryer:** That Hershey's chocolate contains no chocolate. Did you know that?

**Jon Sabados:** Okay, that's probably why I like it. \[unintelligible 01:03:10.09\]

**Mat Ryer:** Yeah, I don't know what it is. It's true, American chocolate is weird.

**Angelica Hill:** I feel like Easter is just around the corner... What are you gonna have for Easter?

**Jon Sabados:** I still eat Cadbury Easter eggs... Because you know, you take the top off that, lick all the goodness out of it, and then you just kind of stomach the chocolate. That's kind of like the crust around a peanut butter and jelly sandwich. You get that out of the way for the good stuff in the middle.

**Angelica Hill:** Well, Cadbury is a whole other situation. I am 100% behind Cadbury. I went to the Cadbury's factory when I was 12. It changed my life forever. \[laughter\] I am surprised that I am not the size of a whale, the amount of chocolate I eat. I shouldn't probably share this on Go Time, but whatever...

**Mat Ryer:** Too late.

**Angelica Hill:** I had a whole dairy milk chocolate bar, like that big, family pack sized, for breakfast this morning... Just because I fancy that.

**Mat Ryer:** \[01:04:04.12\] Shock!

**Angelica Hill:** I had my coffee, I had my chocolate bar, and then I rocked up to our team stand up full of happiness.

**Jon Sabados:** Nice. \[laughter\]

**Mat Ryer:** Wired.

**Angelica Hill:** Ready to go.

**Mat Ryer:** Yeah. I'm with you on that one actually, about chocolate, generally... But I do like dark, fancy (if it's fancy) kind of chocolate. I couldn't eat a full bar of it for breakfast... That's something else.

**Angelica Hill:** Well, I'm psychotic... \[laughter\] This is not like a regularity. I thought I'd treat myself this morning...

**Mat Ryer:** Right. That's a treat.

**Angelica Hill:** ...so I went for it.

**Mat Ryer:** How did you feel after it?

**Angelica Hill:** Very happy. I was full of energy, I had a very productive morning, many a meeting that I got what I needed to get done done... And then I had a bit of a crash before Go Time, and have been pushing through since. \[laughter\]

You live a very healthy life, Jon. I wish I didn't like chocolate.

**Jon Sabados:** Just because I don't like chocolate doesn't mean I don't have other vices, like Mountain Dew... Generally anything super-high in sugar, I am a huge fan of... Like pure, hard candy - good stuff. Skittles... Actually, my favorite candy is actually -- what is it the rock sugar or whatever where you basically dip a string in sugar water and pull it out and it builds up a crystal of just sugar...?

**Angelica Hill:** I had those things that you got at Halloween, that were just like packs of colored sugar... And you had like a dippy think that you were supposed to dip in it...

**Mat Ryer:** \[unintelligible 01:05:35.09\]

**Angelica Hill:** ...but I used to just like get rid of the dippy thing and just lick my finger.

**Jon Sabados:** Nice.

**Mat Ryer:** That dippy thing was also sugar, wasn't it?

**Angelica Hill:** Yeah... So you had two versions of sugar.

**Mat Ryer:** Some fruit is too sweet for me.

**Angelica Hill:** Oh, okay...

**Mat Ryer:** So I really don't have a sweet tooth.

**Kris Brandow:** For me it's one of those things where like once I start working out - I have to do running in the summer - I just can't do as much sugar anymore. I stop craving it, because my body is just like "You know, this does not do well for us when we need to work out the next day. You are miserable, so you're just not gonna wanna eat any of this highly sugar.." But when I'm not working out, it's just like "Yes, give me--" I will eat an entire pint of ice cream in one sitting. But now, I will not do that. I'll be like "I'll have a spoonful now, and that'll be good. That's it."

**Mat Ryer:** That's good, ain't it...?

**Angelica Hill:** The complete opposite... The chocolate bar was a little bit of a "Well done!" because I actually went for a run. And when I say "a run", I mean like ten minutes on the treadmill, and I got back and I was like "I've really burned some calories this morning, chocolate!"

**Mat Ryer:** "I really deserve an entire rectangle of chocolate for that..." Wow.

**Angelica Hill:** You make me regret telling you all this. I thought we were in a safe space... Kris, do you have an unpopular opinion that you would like to share?

**Kris Brandow:** Okay... Sure. Here's a hot take. Maybe this will actually be unpopular. I'm trying to get an actual unpopular thing... So I think Agile's time is done and over with, and we need to move on.

**Angelica Hill:** Wait, so you think we shouldn't do Agile?

**Kris Brandow:** Nope. No more Agile, no more Scrum. Move on. No more sprints...

**Angelica Hill:** How are we gonna stay organized, and on track, and meet our KPIs and our OKRs? My product management brain is just gonna explode...

**Kris Brandow:** I'm not saying we have nothing, I'm saying it's time for us to figure out something... I will say that I have never worked on a team where Scrum specifically, like sprints and story points - \[unintelligible 01:07:30.24\] functions well. It just never, never does... And I know I work for some people and I know I work for some very specific circumstances, but I just think in general we just do wonky things to try and make the process work... And it's something that a small group of people came up with 20 years ago, and we should probably evolve the way we do things.

It's like, we now do things in the way that we did them 20 years ago... And I think there's a little bit of an argument too when it gets to what kind of software engineering processes were we using that led to Agile, and how we're doing things differently now, and how those two things are rather incompatible with each other... But I think the simple thing is just like "Let's use that innovation we claim we have so much and innovate toward something new."

\[01:08:20.18\] And please, don't use silly analogies anymore. No one trains for anything by sprinting all of the time. You take breaks. If you're an athlete and all you do is work out all the time, you will hurt yourself and you will not do well. I think that fits with software as well - we don't write good software when we don't take breaks. So take breaks, let's move on from Agile and let's do something new.

**Angelica Hill:** All jokes aside, despite my initial visceral reaction, you have a point.

**Kris Brandow:** Yeah, that's the problem, I keep explaining my unpopular opinions and then they become popular.

**Angelica Hill:** I wouldn't classify it as popular in my brain... I would classify it as worth the discussion, is what I would say.

**Jon Sabados:** If you had said we should go to waterfall strictly, that might be unpopular. \[laughter\]

**Mat Ryer:** Yeah, that would get you booted from the show.

**Jon Sabados:** But every single team I've been on, it eventually devolves into some form of uncontrolled kanban with the pretending of sprint ceremonies on top of it, but without the WIP limits and everything that make kanban work.

**Angelica Hill:** Other than on our team, obviously, Jon. We run it perfectly, smoothly and incredibly.

**Jon Sabados:** Of course. Absolutely. \[laughter\]

**Mat Ryer:** I think it's, again, a bit like what we said about testing - the kind of thing you're doing, the dynamics, the people in the team, all of that should influence how you operate. So any time you try and have a framework that you're gonna stick to no matter what, rigidly - and ironically, people do do that with Agile - I think you are in trouble. It has to be slightly more flexible.

And the other thing that teams need - you need to trust the people in the team. That - you can cut out a lot of overhead if you trust the people you're working with, and you can save a lot of time. Sometimes, unfortunately, people don't feel like they do trust the people on the team, and they've got different problems, probably bigger problems... But again, team size - I tend to work in quite small teams (I'm a fan of small teams) and everything's a little bit easier when the team is tiny... So it probably isn't unpopular with me, Kris... And plus, you do explain it so well, so they all become popular. You're just changing minds.

**Angelica Hill:** Yeah, changing minds through your pure eloquence and explanations...

**Kris Brandow:** I keep trying for these unpopular things, and then I do the poll and it's like 80% popular. I keep failing... Like, come on...!

**Mat Ryer:** Yeah...

**Angelica Hill:** Awesome. I think we're actually at time, regrettably. I absolutely love chatting to you all. It's been so fun hosting my first Go Time episode... I'm excited to do many more. And thanks again. See you all soon.

**Mat Ryer:** Thank you.

**Jon Sabados:** Thanks for having me on.
