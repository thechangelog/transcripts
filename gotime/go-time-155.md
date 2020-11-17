**Mat Ryer:** Hello, welcome to Go Time! I'm Mat Ryer. Today we're talking about what you would remove from Go. Hm... Curious subject, you may think. Well, unpicking it with me - Jon Calhoun. Hello, Jon.

**Jon Calhoun:** Hey, Mat.

**Mat Ryer:** How's it going?

**Jon Calhoun:** It is going pretty well.

**Mat Ryer:** Glad to hear that.

**Jon Calhoun:** We've also got Johnny Boursiquot here. Johnny, how's it going for you? Pretty well also?

**Johnny Boursiquot:** Yeah, I have my milk, and I've come to this show where everything is going to be an unpopular opinion, from what I hear... So I'm ready!

**Mat Ryer:** Okay, yeah. This is gonna be an interesting one. We also have Daniel Martí also joining us. Hello, Daniel.

**Daniel Martí:** Hey. Happy to be back.

**Mat Ryer:** Yeah, you're more than welcome. Thanks for joining us. I wonder if it's worth - very first, let's talk about this subject turns out to be quite an interesting subject... We do tend to kind of -- as developers, we're very focused on what's new, and new features... It's very exciting when there are new features in Go. We think about generics, and changes to the errors, and things... It's very exciting. But what's the value in taking things out of Go? Why would that be a worthwhile endeavor?

**Daniel Martí:** Well, I think a small language is on one side easier to learn, but on the other it's easier to read and maintain. It happened a lot years ago, before I did Go, that I would do C++ or Python, and a couple of years down the line I would write C++ or Python in a different way, because the language is so fast... And I would just not be able to read my own code. With Go, that doesn't happen nearly as often, because the Go code you write today is very similar to how you write Go in five years, or five years ago... For the most part.

**Mat Ryer:** Yeah.

**Jon Calhoun:** I'd say another part to that is that any friction you can remove from teammates is useful. So not having people bicker about the correct way to instantiate a variable, or anything like that, that just gets them back to work, is a useful thing.

**Mat Ryer:** Right. So the gofmt stuff, the fact that all the code is formatted automatically by the tooling, means it kind of takes that conversation off the table, doesn't it?

**Johnny Boursiquot:** Yeah. And I think anybody who's used a language with more features understands that when you have seven ways to do something, you're gonna have seven different people who all think that a different way is better.

**Mat Ryer:** So that is interesting then, yeah... A smaller language tends to only have one way to do something, and that is quite a good goal for readability and for maintainability purposes... And also for learning. If you wanna know how to do something and you wanna figure that out, it's easier if there's only one way you can do it.

You should see the number of ways you can add arrays together in JavaScript, and stuff like that... There are some amazing and wonderful and scary things... And you don't really get that in Go. I think sometimes people's opinion from the outside, when they first see it, is that it's a drawback of the language that it's so simple... But it turns out to be one of its greatest strengths, doesn't it?

**Jon Calhoun:** And I think it's multiplicative, because for example back when I used to do Java, at least in the context of Android, you would look at the Android APIs and you would wonder "Oh, exactly what does this API do, if it's not very well documented?", to go see the code. But then you would find a class that extends another class, that extends an abstract class, and then you end up with five layers of abstraction... And at least to me, that made it very difficult to actually see what was going on... Whereas in Go, you click on the GoDoc and you almost always just reach the code directly.

**Mat Ryer:** Right. Yeah, that's very true. The class hierarchies - when that's used in the exact perfect situation, they're so powerful... But I was also guilty of this. I got addicted to that. I built some amazing structures in types, in type hierarchies, abstract classes and generics, and in C\#, that I was doing. You could have -- generics could have also constraints on them too, so it's just not just any type; the type has to have certain properties, and things. It's amazing. And it feels very good when you can figure that out and get the code working. But when you have to then come back later - and it doesn't have to be very much time to pass for my code to look like a stranger's code sometimes... And I couldn't figure it out. I learned the hard way, too... I would just use those features in those languages very sparingly.

**Daniel Martí:** Yeah, and I actually think this goes back to something that Jon said earlier, which is it's really good for working as part of a team, because it removes a lot of friction... But at least for myself, it removes friction with myself in the past and in the future... Because again, what I coded two years ago - I probably don't remember most of the details. So having the language be simple forces me to -- I'm not gonna say "Keep things simple", but at least is does constrain what magic I can do, for sure.

**Johnny Boursiquot:** "Simple" is a very subjective quality we apply to something... What's simple for me may not be simple for someone else... Even the term that we like to throw around, "readability", within the Go community - that too is quite subjective. So I'm wondering if any of us here in the panel know of perhaps studies, or research done around code readability. I'm sure I've come across one or two out there; not specifically on Go per se, but... I'd be interested in getting some more data around the readability or the simplicity - all these qualitative things we assign to Go, I'd be interested in seeing if we can prove it out there.

**Mat Ryer:** Benchmark readability somehow in code...

**Jon Calhoun:** Right.

**Mat Ryer:** It's really interesting, because like you say, it is in some ways quite subjective. Certainly, if you were to measure how long it took for a developer to be able to go and fix something in a certain codebase, something like that, and then test that out, I could imagine some interesting results. But it'd be so dependent on that individual developer. But as far as API design goes, we probably can say that "Less is better/simpler" in the API surface. I mean, maybe not, because in some cases I could even imagine now saying that; I could imagine a case where adding a type really helps explain something, even though you may not have needed that type. So yeah, it is an interesting one.

**Jon Calhoun:** Yeah, in some ways, some languages sort of embrace the notion of having very expressive ways of articulating your intent within a file, or within your project... Having different ways of -- basically, contextual ways of saying the same thing, but in this context using these keywords makes the code more readable by some definition; and in that context, something that does the exact same thing but using different keywords means more in that context.

I think Ruby, for example, a language I'm familiar with, has those sets of attributes going for it. The same thing could be expressed in different ways, and Ruby's value is that expressiveness of the language.

In Go, I don't hear us talking about expressiveness of the Go language. We don't really... Our go-to tends to be - and forget the pun here - simplicity. It's simple to read, there are less keywords... Basically, the notion that less is more. But is less really more? If I'm playing devil's advocate here, could having more expressive ways by some definition, using, say, Ruby's definition of expressiveness - would having that allow us to write more readable code than the lack of certain ways of expressing certain things?

**Mat Ryer:** Yeah, I think that is a good point. It's almost a subject for what we would do to evolve and add to Go... But that is really interesting when you start to think about that. I don't know if anyone else has anything to add to that.

**Daniel Martí:** I think there was a recent example in the direction that Johnny says, which is people wanted an idiom to remove all the elements from a map in a very fast way... And some people were arguing for some sort of built-in for that Delete; like Delete All, you could imagine. But in the end, what they did was they taught the compiler to see the pattern for a simple loop to delete all the elements one by one, and convert that into an efficient Delete All.

It's sort of a trade-off, because if you add another method to delete all the elements, then suddenly people have two options, and the language gets a little bit more complex... So I think it's a trade-off between "Do you let people do higher-level things, but then they have to choose between doing the higher-level or lower-level thing?"

**Jon Calhoun:** I think those trade-offs also -- like, we talk about context a lot, but where you work, and the goals of your company, and the size of your company all play a big role in that. So if you were ever doing a readability study, I would almost imagine you'd have to compare small teams using more expressive languages might be just as efficient to jumping into some code that's maybe new to them, but existed within the team... Versus - one of the things that I think makes me say readable for Go, one of the things for me at least, is that you can jump into code that doesn't even have to come from your organization. It can come from pretty much anybody in the Go community, and you can jump in and read the code, and usually help with it.

But in some of these more expressive languages, because everybody has opinions, within your small group you can have readable code and be very efficient with it... But once you get outside of that small group and you start working with other people who have differing opinions, then I think that's where things slow down and new developers jumping into projects probably think things are less readable... But it would be definitely interesting to see a study that evaluates that and sees when new developers come in, especially new grads, how quickly are they picking this up, versus other languages here.

**Mat Ryer:** Yeah. Well, okay... So Johnny, next time don't ruin the episode by saying "Give me some evidence, give me some science, please." \[laughter\] It makes it way too much more work.

**Jon Calhoun:** Just tell him to drink more milk.

**Johnny Boursiquot:** Yeah...

**Mat Ryer:** But no, obviously, very good points there. What I was thinking then - so are there examples within the language or within the standard library of things that we feel like if we were to remove them, we would be better off? Some of the things we've talked about, like having just one way to do something, or optimizing for being able to express ideas, whether that does impact readability positively or negatively... Are there any things -- maybe we could get into that. And I also think, if any of us disagree on this, you could just press a buzzer, make a buzzer sound with your mouth, and the editor will change it later and will play a proper sound.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** But I promise... And then you can pick up the gauntlet that was thrown down if you have a different opinion. Because there may be some things here that we don't agree on, and I think there's a lot of personal taste in this... But who wants to go first with an example of something that you would happily take out? Daniel, what would you take out of Go?

**Daniel Martí:** I'm gonna start with a language feature... I think .imports should be removed entirely. And .import is an import statement that begins with a dot, saying that all the exported names in that package are immediately in this package scope. I don't have to do like foo.something.

**Johnny Boursiquot:** All the DSL-loving people are looking at you sideways...

**Daniel Martí:** I feel like the DSL use case can be valid, but it's so extremely rare that I don't think Go needs to have a feature just for that, if that makes sense. Pretty much every single time I've seen a .import I've been like "Ah, do you really have to...?" For example in tests; it just makes tests so much less readable. Because you see a function call and you're like "Where's this function? Oh, wait, there's a .import somewhere."

**Jon Calhoun:** It's interesting to me that this one came up, only because I didn't think about this at all, because I don't think I've seen a .import in code in like months... So I didn't even think about it.

**Mat Ryer:** Yeah, I don't see it.

**Jon Calhoun:** So it's one of those things where I can't disagree with you that I haven't seen a really good use case for it, but I guess it just wasn't high on my priority list, because it doesn't seem like something that's being abused, so "Ah, whatever..."

**Mat Ryer:** That's brutal, mate. \[laughter\] \[unintelligible 00:15:34.24\] to come on and tell us what he would remove, and you're like "No, that is not our priority for me."

**Jon Calhoun:** I'm just saying it wouldn't be one of my priorities. It's fine if it's one of his.

**Mat Ryer:** Because you don't see it anyway. And you don't use it.

**Jon Calhoun:** If you removed it, I wouldn't know the difference. So I guess that's an argument in his favor... I would never know.

**Johnny Boursiquot:** Hang on, hang on... We've made a grave error. We assume that everybody listening to the show knows exactly what we're talking about... So let's take a quick step back here. So the .import -- actually, Dan, you brought it up; why don't you explain what the .import does, and what does it enable?

**Daniel Martí:** Sure. So if you import a package named Foo, to use anything from that package, you would then do foo.bar, for example, for an exported function called bar. So if you import that package foo with that dot at the beginning, so dot and then the package pack in quotes, in your import statement, then you can use bar directly, without adding foo. as a prefix.

So it essentially allows you to use the names directly, as if they were defined in this very package that you're working on.

**Mat Ryer:** But of course, you lose something in the readability there, because you don't at a glance know whether -- it probably would look like a local method or something that's in the current package space... So yeah, having package names on everything, all the types - that's a very nice readability gain... So yeah, I'm with you for that one.

What other pros? Is it just so that people can save key presses

**Daniel Martí:** Well, as a pro, I don't know, because I'm arguing that it should be removed...

**Mat Ryer:** But that's just not a priority for us though... \[laughs\]

**Daniel Martí:** I'm gonna bring up another con, and I know that's gonna be pretty niche... But it's tools. Tools that analyze code, and so on. Because right now if you see a name, you can figure out what it is by just looking at your scope, and the parent scope, and so on, and just work your way up. But if there's a .import, that kind of goes out the window, because you have to look at all the .imported packages and look at their scopes as well... And that's a linear search, it's not like just going up the parents in any way.

**Mat Ryer:** Yeah. I'm so convinced. Does anyone like .imports on here?

**Johnny Boursiquot:** I like them for the very specific use case that they enable, despite the fact that I'd actually do not make use of the patterns that they enable. I mentioned DSLs before... If you want a great example of a DSL that leverages the .imports \[unintelligible 00:17:58.11\] It's a Go library for writing APIs, and things like that.. And it's a beautiful DSL that allows you that whole expressiveness thing we were talking about before; almost like you're writing prose, to build your APIs. It generates code for you, and all that stuff.

So it's a very good implementation, and it's something that leverages that .imports capability quite well. It just so happens that I don't use DSLs to write my APIs. So I'm not knocking it for that. It exists, it's a feature of the language, like other things I'm sure we're gonna come up with here... It's part of the language, and it enables certain use cases, it's just not a very common one.

Personally, if I see a .import, not in this particular Go use case, but if I see a .import in production code during a pull request, that developer and I are gonna sit down and talk about some stuff, some life choices... Because it's not something that you typically will see in the everyday Go code, and you must have a very good reason why... Precisely because it is so unexpected. Not because it's a bad thing... It's just not something you're gonna see very often within a production codebase.

**Jon Calhoun:** I think Ginkgo is another example of something that most developers will probably relate to... If you've ever come from any BDD testing framework, so behavior-driven development type testing stuff - I think RSpec is one of them, if you're from the Rails community. Ginkgo is very similar, and to make it read an RSpec test, they commonly use .imports in the test file.

**Mat Ryer:** So that in your test code you can just select (say) it, and then pass a string into that method, and then a function, and then just describe things without using the package space all the time.

**Jon Calhoun:** Yeah. So you can say "It should be a book" or something, and "go test this code", and it reads kind of like a story then.

**Mat Ryer:** Well, I also think \_imports... Oh, on .imports, one question... Whose decision is it that it's a .imports? It's the person importing it, right? So even if it's a package that has a DSL in it, you still can use it in the other way; you just have to keep repeating the package name.

**Daniel Martí:** You could also rename it to something short, like two letters. I personally think that's fine for tests, for example... And if you really truly want a DSL, I honestly think you need something that's higher-level than Go; something that generates Go code, for example.

**Mat Ryer:** Yeah. And then I was gonna say the \_imports is another one that I feel could go on this list, because this is the one where you basically import the package, but you don't bring it into the package space so that you can use it. You can't refer to the package name and access it, or anything. It's done only to access the side effect of init, which on Twitter was a very popular option of something to remove, and definitely gets another one of my votes, init, which we're gonna be talking about in a minute.

So yeah, these \_imports \[unintelligible 00:21:00.11\] and there's a few places in the standard library that does this. If you're doing image processing, you import the image package, and then to support JPEG and PNG and GIFs, you import different packages, but you don't do anything; you don't use those packages. They just register themselves in their own little init. So that's why we don't like it, is because its sort of magical side effect that you're just not expecting.

**Daniel Martí:** So how would you implement?

**Jon Calhoun:** Another reason I don't like that pattern is just because I feel like it's easy to not know if something's been imported, or where it needs imported. Take the SQL package or the image packages, for example. People are like "Well, do I import this in my main package? Do I import this in the actual package that uses it? What happens if somebody is importing another one in their code? Is that gonna cause conflicts?" There's all this weird confusion in your head as to what's going on, whereas if you actually were to say, like, a png.driver or something along those lines, and call that in your code, it's very clear where it needs to be all of a sudden.

**Mat Ryer:** Yes. So Daniel, you were asking how would you implement it otherwise, and I think you would just import the package and then call a method. In fact, if you get rid of all the global state altogether, then you'd have something to register the PNG, or register the different types with. You don't have that, because you're sort of registering them in a global way with that init... So that's the other thing, it's that whole init global state \_imports world. I think we're better off steering clear of that.

**Jon Calhoun:** If you look at something like the SQL package, in my opinion it would be easier to call sql.open and just pass in the driver as the first argument, than to pass in a string naming the driver. It's not really any clearer seeing the name of it, versus just the actual imported driver.

**Mat Ryer:** Does anyone like \_imports?

**Johnny Boursiquot:** Nope. \[laughs\]

**Mat Ryer:** Okay.

**Johnny Boursiquot:** And by proxy, since we've touched on it - I'm not an init basher, but I don't tend to like init, because typically where there's an init, there's a global, and because I don't like global, I end up not like inits as a result.

**Mat Ryer:** Yeah. If you're not against them, then you're for them, Johnny. \[laughter\] That's just the way it is.

**Johnny Boursiquot:** It's like that? Okay...

**Mat Ryer:** I'm sorry, yeah. Because we've got to sort these inits out. For anyone that doesn't know what they are, they're little special functions, and you can have multiple of them in the same package, in different files. In fact, I think even in the same file you can have multiple inits. So already it doesn't feel right, does it? Something feels a bit wrong with it. And then that code is run when the package is first imported, or immediately when the main program is run.

So it's useful for -- and I think the original thinking was around more complex initializations... And you can just use the var keyword in package space, and create a variable, and assign it to a simple value, like a number or a string or something... Or even structs, and stuff. Even slightly more complicated structures.

But if you need to do anything slightly more computational to prepare or maybe decompress some compressed data or something in order to prepare it, then you'd have to do some work first. So inits were kind of there for initialization time things where you couldn't use vars... I think they end up just being a bit too magic, and again, it sort of relies on global state, package space state, which is (I think) something worth avoiding.

**Jon Calhoun:** Can I make an argument for them?

**Mat Ryer:** Yes, but you have to do your buzzer sound, and then we'll --

**Jon Calhoun:** Nnng...! Put it in there.

**Mat Ryer:** No, come on mate, do it properly.

**Jon Calhoun:** I don't have a good buzzer. NNNG!! Is that better?

**Johnny Boursiquot:** Nope. \[laughter\]

**Jon Calhoun:** Alright, so - this isn't really a serious argument for it, but if you took the Reflect package and then in the init put a time.sleep for like one minute, punishing anybody who used it... \[laughter\] Then you'd have a good reason for it.

**Mat Ryer:** Right. Yeah, what would that do? Stop the process from starting up?

**Jon Calhoun:** For like a minute, I think...

**Mat Ryer:** What happens if you sleep in an init? Because all the inits have to complete/end before it's ready...

**Jon Calhoun:** I believe so... I've never tried it, but I assume so... In which case people get a real penalty for using Reflect.

**Mat Ryer:** You get a penalty for using it anyway... It's not safe.

**Jon Calhoun:** Well, they get a bigger one.

**Johnny Boursiquot:** That's harsh. That's harsh. There are some legitimate uses for Reflect.

**Jon Calhoun:** I know there are, but... They've still gotta earn it by waiting. \[laughter\]

**Mat Ryer:** Yeah, \[unintelligible 00:25:44.21\] I like Jon when he's brutal.

**Johnny Boursiquot:** I know, right?

**Mat Ryer:** You're absolutely brutal today.

**Break:** \[00:25:51.19\]

**Mat Ryer:** Okay, so what about some others? Anything else you feel like you would remove?

**Jon Calhoun:** I can give one that's a little maybe more controversial... Because I feel like a lot of the ones we've had are -- we've all pretty much agreed with. One of the ones that I would get rid of is one-line if statements. So when you have something like \[unintelligible 00:28:12.22\] check the error.

My reasoning for this is that I've found over time that -- there are a few good cases for one-line if statements; most notably, if you're just trying to see if something's in a map, or something like that, it can be useful... But why I generally dislike them is that most code that I find more readable sticks to the left; all the happy path is left-aligned... And when you're using one-line if statements, it pretty much forces you to break that.

**Mat Ryer:** Yeah, unless you're doing it for error. If the error is the type returned, and you're gonna then only handle it in that little block...

**Jon Calhoun:** Yeah... But I guess what I mean is if there's a second variable ever, to access that second variable that's not the error you either have to put else statement, or you have to make your happy path indent.

**Mat Ryer:** Right.

**Jon Calhoun:** And in those cases I'm just not a fan of it. And even the error case you're talking about, you end up shadowing at that point, if I recall correctly... So that can potentially be another issue.

So it's not that there aren't a couple of valid use cases for one-line if statements, it's just that generally speaking I feel like people would write better code if it wasn't available to them.

**Mat Ryer:** Okay.

**Daniel Martí:** I'm gonna disagree.

**Mat Ryer:** Right. Well, do the buzzer then!

**Johnny Boursiquot:** Yeah, the gauntlet is thrown.

**Daniel Martí:** BZZ!

**Mat Ryer:** Oh, that was a good buzzer.

**Johnny Boursiquot:** Ohhh, nice!

**Mat Ryer:** Daniel, that's the sample we're gonna use for the rest of our buzzers. That's how good that was.

**Johnny Boursiquot:** \[laughs\]

**Daniel Martí:** So I'm gonna say that you should prefer not to "pollute" the scope of your parent if you just wanna do something that's just for a few lines. For example, if instead of doing \[unintelligible 00:29:54.21\] that error variable is only scoped to the if or the else. So it's not leaking to the lines after the if statement has finished. So I feel like if you put it in the parent scope, there's more chance that you might make a mistake.

**Mat Ryer:** Yeah, but as Jon said, if there is another value that you wanna get out, that is also only scoped to that block, right? So then you end up copying it out, or something else... Which is fine, but... Yeah. The alternative then is just to flatten the if, or to pull the expression out and have that happen first, and then you test with the if after. So yeah, it's a line you save with that little format.

Johnny Boursiquot, what do you think of those one-line if statements?

**Johnny Boursiquot:** They don't bother me as much as they bother Jon...

**Jon Calhoun:** They don't actually bother me that much... It's just something I've noticed where maybe it's just people who are new to the language are looking for a quicker way to write something, and I feel like they get overused in some ways... And then eventually they realize "Oh, this code would be easier if I pulled the actual function call \[unintelligible 00:31:03.12\] and then check the error statement afterwards." And after seeing enough code and refactoring enough code that had it, I just feel like my life would have been easier if I'd never used them in the first place.

**Mat Ryer:** Right, yeah. So you're just treating this episode basically like therapy for you...

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** No, fair enough... But actually, that's a good point. I mean, that's why we're here, to talk about these kinds of experiences.

One thing this has against it is it rubs a little bit against that philosophy of having just one way to do something. You can do the exact same thing in a slightly different way.

**Daniel Martí:** But at the same time, the similar way of doing this would be an explicit block that indents the whole thing, which is kind of ugly, and uses two extra lines.

**Mat Ryer:** Right.

**Jon Calhoun:** I guess I just wouldn't do either of those. I would just use the same error variable throughout my code, is what I tend to do. If I ever have a case where that stuff needs isolated, I feel like it's better suited to be in another function. But that's, I guess, just my opinion.

**Mat Ryer:** Well, there you go. It's not a priority for Daniel, that one, it seems...

**Johnny Boursiquot:** I've got one. I've got another one.

**Mat Ryer:** Yeah, Johnny. What would you take out of the language?

**Johnny Boursiquot:** It sounds like Daniel was gonna add a little bit of spice to the wound...

**Daniel Martí:** No, I don't have another one, but Bill has been bringing up one for the past 15 minutes in the chat.

**Johnny Boursiquot:** Bill's like "Dang it, naked returns...!" \[laughter\]

**Daniel Martí:** So maybe we should talk about that...

**Mat Ryer:** Yeah. What did he say?

**Daniel Martí:** Actually, I think I agree. I think in most cases naked returns don't make sense. I think there's only one case where they do make sense, and it's if you want to recover a panic, and then alter the return values, and then the naked return allows you to do that.

**Mat Ryer:** We're gonna have to explain what they are. I just see the chat message. By the way, you can join in the Go Time chat on the Slack channel, GoTimeFM. I just see Bill say "Naked returns." I thought he was asking for nudes. He just keeps saying "Naked returns!", like a really Victorian way of--

**Jon Calhoun:** Code of conduct really went out the door... \[laughter\]

**Mat Ryer:** Yeah... Naked returns...! But what are they? What are they? Can someone explain them?

**Jon Calhoun:** Sure. When you're declaring a function, at the end you declare the types that you're returning... And when you're declaring those, you can also give them names. So each variable can have a name... Which can be useful whenever you want to make it more clear what each one stands for, what it is.

**Mat Ryer:** Right.

**Jon Calhoun:** A naked return is when you name those, and then inside of your function you don't have to declare those variables; they're already declared because of the way you defined the function, and you can just write the word "return" and those variables will be the ones returned for those values.

So rather than saying \[unintelligible 00:33:41.08\] and then at the end just write "return", and it would return that error.

**Mat Ryer:** Right. Yes... So naming the return arguments - I just don't do that. I've seen some code that does it, and I can see why... And in some cases they've even saved an allocation by doing it, because they need a type anyway to pass into something else... So it gets clever, but I like to just be explicit. If you've got a couple of strings you're gonna return, and you wanna be clear about what it is, I'd probably pop that in a struct.

**Daniel Martí:** I think we might be getting two things confused... Because there's naked returns as in a return with nothing else, but you're actually returning something... And then there is naming the result parameters in your function declaration. I think those two are different things.

**Jon Calhoun:** But naming is required for naked returns, I think is how--

**Mat Ryer:** Right.

**Daniel Martí:** Yeah, but you could name your results without using naked returns. That's what I'm trying to say.

**Jon Calhoun:** Yeah.

**Mat Ryer:** Right, right, right.

**Jon Calhoun:** I use named return values all the time, just to make it clear what something is... But then if you read my code, you would probably not really even tell that I'm using the named returns, because I don't tend to use those variables the way that that would be. Honestly, I would almost prefer it didn't initialize variables for me some days, just because in my code I'll go to initialize and not realize "Oh, it's already initialized, because it's a named return. But yeah, while I do see uses for the named return variables, I really don't like the empty return.

**Mat Ryer:** Does anyone wanna make a case for keeping naked returns, or named return arguments?

**Jon Calhoun:** Is it possible to do -- like, when you're recovering from a panic, I know you use named returns... But once you're inside the deferred block, do you have to use a naked return there, or can you -- I don't actually know what that looks like. I know you can say \[unintelligible 00:35:37.28\] and that should work, but I think you still have to assign the error. I'm not positive though.

**Daniel Martí:** Well, that deferred function returns nothing...

**Jon Calhoun:** Oh, that's right.

**Daniel Martí:** ...so the whole reason you need the named return parameters is so that you can assign back to them in the parent.

**Jon Calhoun:** But you don't ever have to have a naked return in it, do you?

**Daniel Martí:** No. When I said that earlier, I was getting confused between the two features, I think...

**Jon Calhoun:** Okay. I was gonna say, that's the hard part... I think the naked returns probably show up because the named variables are already there... But I do kind of agree that getting rid of the naked return would make code clearer...

**Mat Ryer:** Yeah.

**Daniel Martí:** I think one feature that people would want, if naked return was to go away, was to be able to -- for example, if you wanna return a zero value of a struct, you have to name the struct in a composite literal. You have to do some very long type name, open curly brace, close curly brace, because that's a zero value. It would be nice if instead you could use something like underscore, to say "The zero value of whatever this is. I don't care." Because the naked return does give you that brevity, that you would lose if you didn't have it.

**Jon Calhoun:** So wouldn't it be possible to write a lint tool that just finds all naked returns and puts the variables in there? Because you have to have named return variables...

**Daniel Martí:** Sure.

**Jon Calhoun:** I feel like that should be Bill's next project.

**Daniel Martí:** So who wants to \[unintelligible 00:36:55.12\]

**Mat Ryer:** When would you use that? If you want them, type them in.

**Jon Calhoun:** Well, you could just set it up in your tool chain, so that if you have the empty return, it just automatically replaces them. And then if Bill gets everybody to use it, he'll never see them again.

**Mat Ryer:** Or just have Bill in everyone's PR process, and then Bill can just do it himself.

**Jon Calhoun:** Bill's already pretty busy. I'm not so sure he would manage that.

**Johnny Boursiquot:** Somebody's gonna write a linter just called Bill... And it's just gonna fix your returns.

**Daniel Martí:** Maybe it gives you a pin if everything is green.

**Mat Ryer:** A pin... Oh yeah, like a badge.

**Johnny Boursiquot:** Yeah. For your hat, or something.

**Daniel Martí:** I think Johnny was going to say another feature that he would remove earlier...

**Mat Ryer:** Johnny, do you have one? Something you would remove from the language, mate? Or from the standard library.

**Johnny Boursiquot:** I have one, but my stance against it has softened...

**Mat Ryer:** Since when?

**Johnny Boursiquot:** I was looking for a reason to use it, to like it, and I was like squinting...

**Mat Ryer:** You've found one.

**Johnny Boursiquot:** Yeah... I probably still wouldn't use it, but I understand, for those that do; I'm trying to understand where they're coming from... Labels in Go, and the associated use of the goto.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** Very rarely do I find myself wanting to do that. If I even sense the need for something like that, I just rewrite the code to not have them.

**Mat Ryer:** Yeah. So for anyone not familiar, Go does have goto... If you wanna listen back to Johnny's pun earlier - it's actually a double-pun... Because it had the word go in it, and goto. Yeah, they were responsible for spaghetti code, essentially... Because that's how you used to write code in BASIC. You'd have line IDs, like 10, 20, 30, and then the code was on those lines... They went up in tens, by the way, so that you could insert other instructions between them...

**Johnny Boursiquot:** \[unintelligible 00:38:50.21\]

**Mat Ryer:** Yeah. Because you've already put your number in, so it's too late... I don't know when they came up with dynamic line numbers, but that changed the world, let me tell ya... And then they would use goto to jump around the flow. And in some languages they didn't have functions, and subroutines, and things, which do that, basically; that's what they're doing. But they do it for you in a kind of safe way, and you declare the ins and outs to that.

So yeah, goto was kind of famous for creating this very difficult to follow code... It's a bit like one of those write-your-own-adventure books, where you'd go to a certain page and jump around. It's very difficult to reason about that. It was hard to hack those games; you had to really just play them.

There's another use case for labels though, isn't there... Which is when you use break out of loops. If you have a few nested loops - even just two - in some deep situation inside the inner loop you may wanna exit either just this one, which you can do easily enough with break, but you might wanna also exit the outer loop, and you could set a flag, and then check the flag, and things, and then break.

But labels allow you to break a particular loop, which is kind of strange... But again, as you were saying, Johnny, I've seen examples where that seems perfectly reasonable... And usually, when the code is very small and succinct; not in great, big, long, multi-page functions.

**Jon Calhoun:** Just to make sure I remember correctly... With labels there's goto, break and continue? Are there any others?

**Daniel Martí:** I think that's it.

**Johnny Boursiquot:** No, that's it.

**Jon Calhoun:** I don't know if fallthrough or any of those other keywords had something with them.

**Johnny Boursiquot:** Nah, \[unintelligible 00:40:41.28\]

**Mat Ryer:** Also, when you mean continue, you can say "continue this particular loop."

**Johnny Boursiquot:** To a label.

**Jon Calhoun:** Yeah, you continue to a label. So if you're in nested loops, you can say "continue", and it'll just to the other loop and continue.

**Mat Ryer:** You're really labeling the for block when you label those things...

**Jon Calhoun:** Yeah.

**Mat Ryer:** ...and you're saying "Continue this one."

**Jon Calhoun:** Yes. So you're jumping to the outer one you wanna go to.

**Mat Ryer:** Right. It's magic, ain't it? It's dark magic.

**Jon Calhoun:** I agree with Johnny that I've seen some people make not awful arguments for them... But I've never wanted to use them myself. It's always felt easier, cleaner, or something, to just - if I have to use a nested function, or something else... Something has always felt better to me than doing that. And maybe it's just a personal preference, I can't really say, but... I mean, they're there, so I don't know if the people who created the language saw a really good reason that I didn't... So it's hard for me to really say "Don't use them" or "Get rid of them."

**Mat Ryer:** Yeah, I think the listeners should take this show with a pinch of salt. We're just discussing the thing that we would remove. Please feel free to use these. They are part of the language... But obviously, if you've got any sense, listen to what we're saying, because we've made all the mistakes. \[laughter\]

**Jon Calhoun:** I guess a better way to put it would be if I was reviewing code and it has a label, I'd probably suggest a change.

**Mat Ryer:** You know what - I've definitely used it, but only in very specific cases where it's the clearest thing to do, which is literally you're saying in this case we're just gonna stop and break the whole thing... But you're in some other flow. But yeah, I mean - you can always rearchitect it to avoid these problems.

**Daniel Martí:** I'm actually gonna use my buzzer again, so... BZZ!! \[laughter\]

**Mat Ryer:** Could you do a few takes of it, just for the editor, please...?

**Daniel Martí:** No, I'm okay, thanks... \[laughter\] What I'm gonna say is - I think it's a bit of both. I do agree that I don't use labels all that often, maybe like once or twice per package at most, but when I do use them, having to split a function into two -- for example, if it was a 60-line function with two levels of indentation, I think being forced to split it up would not be good...

And I'm actually gonna make a case for goto's as well. Or rather two cases. One of them is sort of like that retry idiom; so being able to go to a retry, to retry a function, is pretty useful. And you can use a for loop for that, but the for loop, if you're going from the top, reads like an endless loop... And it's only at the end that you go like "Oh wait, do I want to break?", which honestly, I don't feel like it's better...

And the other use case is code generation. For example, if you wanna generate an automata, or some sort of bot that jumps between states, having goto's is pretty useful then.

**Jon Calhoun:** It's hard, because you almost have to see the case to really determine if it's better to use a label or something else... When you say "breaking into a function", a part of me wonders if you could just like write an anonymous function, or a closure, or something, and slap it in there, and if that would work or not - I don't know though; it would depend.

I will say one of my other arguments against labels is that they're so rare that I think somebody jumping into the language is gonna be like "Wait, what is this?" And while the other one might not be as clear what it's doing, the fact that it's going to be all stuff they're accustomed to might make it easier to read.

**Mat Ryer:** Yeah. You just have to battle it out in the pull request comments for that one, I think...

**Johnny Boursiquot:** \[laughs\] You see, that's the thing -that whole notion of what's easy for me to read is not necessarily what's easy for you to read... So for somebody seeing that goto to a label makes perfect readable sense. They're like "Oh yeah, I can definitely follow what's going on here. You get to this point, you need to break out of these loops, and you use the goto. Yup, that makes perfect sense."

And for someone like me, who doesn't use them very often - just because I don't use them very often doesn't mean it's bad, right? It just means that I don't typically use them. When I see that the first time, I'll scratch my head and be like 'Why are you doing that?" Then I take Jon's posture and I bring it into a pull request battle, and force you to take it out. \[laughs\]

**Jon Calhoun:** One example I can give there is if you had three nested for loops, and the innermost one would continue to a label that's like below where the first one starts, so it's technically in the second one, I think at that point only the second for loop would be the one that gets continued... But I honestly don't know. So I'd me like "I need to run this code to actually figure out what it's doing at this point", which would kind of frustrate me.

**Johnny Boursiquot:** You mean you don't run the code for every PR?

**Jon Calhoun:** I don't sit there and run the for loops... Although I don't run into triple-nested for loops very often, so...

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Then run them in your head. You can just run them in your head, you know...

**Jon Calhoun:** I mean, that's what CI is for, right?

**Mat Ryer:** Yeah.

**Daniel Martí:** Actually, I kind of agree. I feel like \[unintelligible 00:45:30.21\] I would only ever do it just to jump over one parent, not more than one... Because the moment you jump over more than one, it gets confusing. So maybe you could replace labels for like break, actually; not this one, the parent... But only the direct parent.

**Mat Ryer:** Yeah. Okay. We'll do that. Good one. And by the way, thank you, Daniel; when you were defending goto, you actually made three puns. You had Go in there, goto itself, and because you had two reasons... Two was the third pun.

**Daniel Martí:** Not intentional...

**Johnny Boursiquot:** Mat keeps track. \[laughter\]

**Mat Ryer:** Yeah, I've got it in my punbook.

**Johnny Boursiquot:** \[laughs\]

**Daniel Martí:** Let me go to my goto puns...

**Mat Ryer:** There you go, see? I did a talk at GothamGo called "Things in Go I'd never use", which was actually about this very subject, really talking about the same kinds of things... And another one that I talked about was else... And it gets quite a funny reaction, because it sounds like -- of course you need else; you're talking about doing something if this, and then if not, you need to do something else. But really, it was a point about the kind of line of sight thing, the guard and check, where you check errors early, and handle the edge cases in the indentation, and leave - as Jon mentioned earlier - that happy path down the left.

So else is an interesting one... And if you find yourself with a big else block, and big if else blocks, one trick is you can flip the logic in the if. So if you're saying like "if do something", if you flip that "If do something" into "if not, do something", and then handle the else case in there, then you can get back out into the main path. it's essentially the same thing, it's just kind of a writing style.

Do you use else a lot, you three? Johnny, how many times have you used else this week, in the last seven days?

**Johnny Boursiquot:** Zero. I can probably -- well, I've been using it before...

**Mat Ryer:** \[unintelligible 00:47:30.04\]

**Johnny Boursiquot:** I was gonna say, I can barely count the number of times I've used it in my entire time of using the Go language, but that's probably an overkill. Yeah, it's just something that I don't tend to -- like, the moment I have to use an else, I have to think really hard "Is there a way I could return early?" or like you said, basically reason about what I'm doing differently, so that I don't have to use an else. The moment I see it, immediately I start scratching my head and I'm like "Hm, that doesn't look quite right."

Again, it's part of the language; that doesn't mean you should avoid using it, and there are some cases that you really do need to use it... But it's just that typically -- even before, if I know I'm gonna have some conditionals in a function or something like that, I'm already thinking ahead of time, how am I gonna avoid an else here? It's second-nature at this point.

**Mat Ryer:** That's interesting... For that reason, for the readability, line of sight thing.

**Johnny Boursiquot:** Yeah.

**Break:** \[00:48:25.26\]

**Mat Ryer:** So this is quite a simple thing if you're new to writing Go; that is a little cognitive check just to do. There are definitely case where the clearest thing is just a kind of five or six-line "if this, then set something else". Sometimes that logic is exactly what you need. But yeah, what happens if you don't protect against that, of course is - once you have 2-3 of these in a function, you really are nesting quite deep, and you're wasting a lot of tabs there. You don't need that many tabs in your code... It's a waste, so \[unintelligible 00:50:13.25\]

**Jon Calhoun:** Mat says that's too many bytes.

**Johnny Boursiquot:** But what if you replace them with spaces?

**Jon Calhoun:** Then you should use gofmt.

**Mat Ryer:** Well, they take up more, don't they?

**Johnny Boursiquot:** Tabs versus spaces. Fight!

**Mat Ryer:** Well, tabs wins in Go, because gofmt uses tabs...

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** But yeah... It has to send all that white space to GitHub... It's a waste. Do you know how much white space there's in GitHub? No one ever thought to figure that out. They should just count it all. There is loads...

**Jon Calhoun:** That's your next project?

**Mat Ryer:** ...and it's all empty. It's a waste.

**Jon Calhoun:** They need a website that just updates every day...

**Mat Ryer:** Yeah. They've got them. They've got those websites that update every day. They're called the news. \[laughs\]

**Jon Calhoun:** With the count of white space.

**Mat Ryer:** Right. That's the hard bit.

**Johnny Boursiquot:** Did you know they have this language where they waste a ton of white space? I think it's called Python. So much wasted white space... \[laughs\]

**Jon Calhoun:** Oh, boy...

**Mat Ryer:** Well, it's only white space to us, but if you're looking at it on a white page, there's still characters there, there's still data. It's a travesty; we need to trim down that white space. Never mind, we can do climate change later... We need to probably sort this one out first.

**Jon Calhoun:** I feel like Bill is outside of our window, picketing... \[laughter\] He's kind of mastered that within Slack...

**Mat Ryer:** Shouting in, looking for naked returns... \[laughter\]

**Jon Calhoun:** But now he wants us to talk about removing the ability to return an interface.

**Johnny Boursiquot:** Oh, good Lord...

**Jon Calhoun:** ...except for the empty interface.

**Daniel Martí:** I disagree. I mean, I see the intention; if you have a constructor, it needs to return a specific type, not an interface, and in most cases, you don't want to return a non-empty interface... But in some cases you do, and that's fine, as long as you know what you're doing, I think.

**Jon Calhoun:** Part of the reason I like returning the interface occasionally is I feel like it's just clearer as to what your intent was. If I have a function that sets up a small little server, and all I wanna return is a handler, I don't really -- I want the ability sometimes to change how I implemented all that, and just to return a handler. And sometimes, in my opinion, it's easier just to say "Look, all you really care is that I'm giving you an HTTP handler. The actual details shouldn't matter to you right now." But I do think it's few and far between as to when that makes sense...

**Mat Ryer:** It also lets you hide your internals a little bit as well. Sometimes you might not want to export those concrete types, for whatever reason. And again, maybe you just can return those types... But yeah, having that interface return, in a way, comes from kind of factory thinking a little bit, potentially... Because it's possible that it returns a different type depending on something else... You know what I mean? So in that case you would want the interface to be returned, or you'd have to just have a couple of methods and move that logic elsewhere. But that logic of which type to use sometimes is part of it.

What's the argument against doing it? It's just that it's better to return the concrete type and the caller can still use the interface, if they want to.

**Jon Calhoun:** I think one is that the caller can decide if they need an interface. Another, that Bill is mentioning, is that in 1.16 there was an optimization... I think it was something with escape analysis and basically extra allocations, or something; I don't remember what it was, but basically, it was not as efficient memory-wise, if I recall correctly... And they made a couple of optimizations in the compiler specifically for it, and it helped speed up some code. But it kind of depends on the context.

If I'm writing all the code, so I control both the function that's returning something, and the functions that are using it, I think it's fine, because I can change one and go change the other spots and not really have an issue. But if I'm writing a library that I'm publishing on the internet, that lots of developers are gonna grab and use, sometimes returning an interface means that I can make what would otherwise be a breaking change without bumping major versions... And to me, that's worth a slight performance loss.

**Mat Ryer:** It's a good one. So what about the standard library? Is there anything in particular that you would take out of the standard library?

**Johnny Boursiquot:** Daniel's all over that... \[laughs\]

**Daniel Martí:** I've got one that I think might be very controversial, or non-controversial whatsoever; I don't know which way it's gonna go... And that is the Plugin package.

**Johnny Boursiquot:** Oooooh!

**Daniel Martí:** Because I think the Plugin package is a very good idea, but it's sort of half-baked. It has no Windows support, it's very easy to misuse... If somebody else builds a plugin and tries to run it with your binary, it's almost certainly not gonna work. So I think it's a great idea, but it should never have hit the standard library until it was finished.

**Mat Ryer:** Yeah... So this is a kind of runtime way of loading other -- almost dynamically loading other Go code... And you do that through this quite strange Plugin interface. Has anyone ever seen this used, or used it?

**Jon Calhoun:** I don't think I have.

**Johnny Boursiquot:** I can't say I have, no.

**Daniel Martí:** I've seen people try...

**Mat Ryer:** That kind of speaks volumes... I think that probably speaks volumes.

**Daniel Martí:** Yeah. I think if your target platform is only Linux, or Linux and Mac, I think it's fine. But if it has to be portable or easy to use for essentially any Go user or any user in general, I think it's just not an option at all.

**Johnny Boursiquot:** Yeah, I think I'm in the same boat here. The idea of it was it had a lot of promise; the fact that you can't swap plugins at runtime, for example, that seems like a big missed opportunity. I think it's an unfinished capability... But if it's unfinished, that also means that it could be finished and made to be more robust. Lots of \[unintelligible 00:56:11.12\] It could be made more robust.

I think the fact that not a lot of people are using it -- I'm wondering if it's because it's not good enough yet... Is it a chicken or the egg problem? Is it they're not using it because it's not good enough? If it was finished, would they start using it, and thereby would Plugins become popular? It's kind of hard to tell.

**Daniel Martí:** I think if it was finished, as in proper Windows support and some sort of wrapper to allow for nice error messages if something doesn't align when you load a plugin - I think with those constraints, for some use cases where you load something but you never want to unload it, I think Plugin would be fine. But the thing is it hasn't been finished in the 3-4 years that it's been in the standard library, so I don't have high hopes for it being finished any time soon. And right now you can't really remove it, because once it's in Go 1, you can't remove it from there.

**Johnny Boursiquot:** We can in Go 2, whenever that is...

**Mat Ryer:** Pun overload, sorry.

**Jon Calhoun:** When you're creating a new library - or language in this case - I feel like some things are gonna sneak in, that you wish weren't there... And this definitely sounds like one of those, where like it got in there, and now if you ask anyone on the Go team, they'd probably be like "Yeah, that really shouldn't be there just yet."

**Mat Ryer:** Yeah... Sometimes there are specific problems that had to be solved, and there are some examples of that in the standard library. Well, Jon, tell me about the container packages. Do you ever use those?

**Jon Calhoun:** So there's a couple of container packages in the standard library. There's List, Heap and... Ring, I think is the other one. I've tried to use them before, and every single time I've used them I just felt it's easier to just write my own linked list, or my own heap, or whatever... I feel like because they're stuck using interfaces, and there aren't generics, and they aren't set up to generate code, it's almost just more confusing than writing something on your own... Which was just -- I get why they're there; it seems like a type you'd need in the standard library of some sort... But it just kind of feels subpar. And I feel like if that's the first impression somebody gets of the language, it really makes the language look worse than it is.

So if I could back and redo things, I think I would suggest "Let's not put this in the standard library. Let's instead make a tool that generates List, and you give it a type." And make maybe a standard tool for that; that'd be cool. But don't actually put that specific package in the standard library.

**Mat Ryer:** Fair enough, yeah. Do you think we'll get a range of packages that are common, sort of data structure types, if generics lands in Go?

**Jon Calhoun:** I think somebody will write them... Whether or not it's the Go team is probably the biggest question.

**Mat Ryer:** Well, I think it should be the Go team, because if not, we're gonna have lots of competing -- well, maybe that's okay.

**Daniel Martí:** And incompatible...

**Mat Ryer:** Yeah, but it'd be nice if there was a -- at least for the most common ones, that there were proper ways to do it. A bit like how we have maps in Go.

**Jon Calhoun:** Yeah. It probably depends... The harder part there is how do you decide which ones are the more common ones? Which ones deserve to be in the standard library? I mean, you could make the argument that List, Heap and Ring are all in the standard library now, so those ones are important enough... But still, it's -- I don't know.

**Johnny Boursiquot:** Well, you could put them in the x package, just as a hint to everybody that "Hey, this is experimental, but this is something that we're thinking about, and have thought about. No need to reinvent the wheel 200 times. If you have improvements, suggest them", that kind of thing.

**Mat Ryer:** It would be good as well as part of the development of the Go generics proposal, because it's a good test case -- I mean, really, that's where generics... Almost there's no debate that that's a good use case for generics, for those kinds of problems. But yeah, I think that's a fair candidate, Jon. I hope it's on some people's priority lists to have that taken off, deleted.

Okay, it's that time... We're running a little late, but if you'll bear with us a few minutes, dear listener, it's time for Unpopular Opinions!

**Jingle:** \[01:00:31.29\] to \[01:00:48.13\]

**Mat Ryer:** So, any unpopular -- I mean, I feel like this has been a kind of episode of unpopular opinions... But are there any particular unpopular opinions you would like to get off your chest?

**Daniel Martí:** I've got one, and I'm not sure how I feel about it... I think Go as a language is making a mistake by investing so much into generics... Because they're putting a bunch of very smart people for years and years into generics, how to design them and how to implement them... And if instead you've invested those resources in improving the compiler's support of interfaces, with changes like the one we discussed for 1.16, I think it you covered the common use cases of interfaces and made them faster, I think a lot of these use cases for generics would go away.

**Mat Ryer:** That's an interesting one. Is that popular or unpopular? Johnny, what do you think? What's your immediate reaction? If you had to give an immediate reaction to that, what would you do? What would it be?

**Johnny Boursiquot:** Well, I don't do immediate reactions very much... I think about things, you know...

**Mat Ryer:** Do it in your style, for sure.

**Johnny Boursiquot:** Yeah, so I think about these things...So here's the thing - and perhaps that is indicative of perhaps the way I approach these things... In the beginning, when I first was getting comfortable with Go, and I was like "Oh, the lack of generics - that is a miss. Ugh, that is just a big no-no. Why don't they have that in the language?" And then I learned to work around them. Some would say code, which might have been sort of confusing to write in generics, because you had to do it "the long way"... I sort of took pride and pleasure in that, and it's actually basically like "Hey, I'm now gonna be more explicit here. Yes, it might not be as elegant as it could have been using generics, but it's okay."

So over the years I've gotten used to it, and I got into the camp of "Oh, we don't need no stinkin' generics." And the now I see the proposal, and I've seen some documented use cases where it could be better, and things like that... And it's one of those things, again, where my experience, my use of the language is - I'm not the only one using the language, so there are some things that I'm naturally not going to see, that other people are gonna have different experiences, and different needs, and things... So I've sort of broadened my tent for these competing ideas, so to speak.

So if we don't get generics for another year or two, I'm fine with that. If we get them within the next year or two - yeah, I'll use them. I'll probably be very conservative in how often and how much I use them... But again, like goto, and labels, and all these things - they have their place, and when I see them, I'm like "You know what, this would make an excellent use case for having a generic type here", or something like that.

For me personally, that's sort of been my evolution as an engineer - basically, knowing/living that "Well, it depends..." I used to hate it when people said that, but I've learned over the years that yes, it does depends; your use case is gonna drive which way you go.

**Jon Calhoun:** I have a question related to that, I guess... Are you more -- is your unpopular opinion that not as much time should have been put into it, and they should have just picked something and went with it, or is it that generics are coming to Go itself, or a combination of both?

**Daniel Martí:** So I'm not gonna say that generics are a bad idea, or they're not needed, because I think generics as part of types are good, in many cases, such as maps, or slices. What I'm trying to say is that it's a trade-off, and the compiler right now is very basic, in some ways, like in-lining... And if that effort had been spent in those parts of the compiler, a lot of the function kind of generics could probably be mostly solved by just a better compiler, with just plain interfaces.

**Mat Ryer:** Yeah. But if your argument is that there's these really smart people and they're spending all their time on generics, and they could be doing better things - why stop at compiler things? Why not like hoverboards? And maybe someone could invent a pill that makes all your hair grow back.

**Daniel Martí:** Or the Plugin package. \[laughter\]

**Mat Ryer:** Or fix the Plugin package, yeah. Or plugin hair... And mash those two ideas together; a new startup idea... Top Of My Head, that's what it could be called... And it just sends you random wigs. Sorry, \[unintelligible 01:05:16.27\] You make a compelling point. Very good. Are there any other unpopular opinions today?

**Jon Calhoun:** I'm still thinking about Daniel's... \[laughter\] It's more just -- in some ways, I understand what Daniel is saying, but I also kind of... I think that as the language grows and matures, that it's probably gonna have to slow down in some ways, and take more time and thought into what it adds to the language, and how it changes the language over time.

I imagine, before 1.0 was released especially, you'd get away with a lot... But now that 1.0 is out, and now that this is a major change, in some ways it's promising to me that they're spending this much time on it, because it means they're not just throwing something in there... And even when we saw the proposals for the error handling stuff - they spent a lot of time on that, it seemed like, and that all got thrown out. So you could say that was all wasted effort, but at the very least they're taking community feedback into account and trying to decide "Is this something we can improve on?" And I think that's a positive thing. So it would be nice to see some compiler performance improvements, and stuff like that... For me personally, those aren't actually a priority at all. I would have more use for generics than compiler optimizations.

**Johnny Boursiquot:** I'd rather they spent the time and the money basically doing an investigation and either going forward with something, or throwing out whatever it is that they deem not good enough, rather than dismissing it out of hand... Because a lot of people have been asking for generics for a long time, and the fact that there's somebody footing the bill for all that work, all that research - I welcome that.

The one thing I'll mention here is that when Robert and Ian came on the show a few episodes ago - I think the episode title is "The latest on generics" - one of Ian's mic drop moments was that the community keeps asking for all these language features, basically to add things... \[unintelligible 01:07:20.16\] but generally speaking, most of the time people are asking for things to be added to the language.

But the advice that he gave, which I thought was very apt, was that before you ask for these additional things, in terms of features and things that you want the language to support and do and things like that, don't consider only the things it would add for your use cases, but also consider the things that it would make harder, the things it would make harder to reason about, for readability... Basically, asking everybody to make a concerted effort to truly weigh the pros and cons of anything you add to the language.

I can give an example -- so many examples we can all probably think of, of a new language, a new piece of software, a new framework, something comes in and we relish at the simplicity of that v1. We're like "Oh, thank goodness. I've been dealing with this thing, with all these features and all these bells and all these whistles... It gets complicated, and I don't know the right way to do things, and I spend all my time reading blog posts so I can figure out which knob and button to flip, and things..."

When something simpler comes along, we immediately gravitate towards that thing, because that simplicity of it is the attractiveness. That's what we like about it. But over time, if we're not careful, Go could find itself being one of those languages that we just keep throwing everything in there, and it becomes more and more complicated over time.

So let's not forget why we all - most of us anyway - love Go. It is that simplicity - that word we keep throwing around - that simplicity, the fact that it doesn't have all these extra features and bells and whistles. That's why we love Go. I know personally for me that's why I love Go, because it doesn't try to be everything to everybody.

**Mat Ryer:** Well said. I don't think we can beat that... Great ending there, Johnny; thank you very much... And thanks to everyone for listening. We were joined today, don't forget, by Daniel Martí. Daniel, thanks for coming.

**Daniel Martí:** Happy to be here.

**Mat Ryer:** You're welcome back. Johnny, there's a cool episode next week... Won't you tell everyone about that? Do you know which one I mean?

**Johnny Boursiquot:** Yeah, I know which one you mean... Next week we'll have Kelsey Hightower back on the show, and we're gonna be talking about how distributed systems go bad, and what you can do about it. It's gonna be an exciting show, so do join us.

**Mat Ryer:** Sounds great. We'll be there. Jon Calhoun was also on this episode... \[laughter\] Okay - well, thanks very much; thanks for listening I'll see you next time.
