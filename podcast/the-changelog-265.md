**Jerod Santo:** Dmitry, take us back to 2010 at JetBrains, with the genesis story of Kotlin, and why it even kicked off in the first place. Can you tell us that?

**Dmitry Jemerov:** Yeah, sure. The original motivation behind starting to think in that direction was that up until that time we have been a vendor of tools, and while people can be passionate about the tools they are using, tools are not that hard to replace, like development tools. People can switch to a different editor, to a different IDE, a different continuous integration server, and so we felt like our company had somewhat like an auxiliary role in the marketplace, and we started thinking about ways how we can be more influential.

The way many other companies do that, for example if you look at Twitter or LinkedIn, they are producing lots and lots of infrastructure software that they promote for other people to use, but for us this was not really a good path, because we were actually building desktop applications and we simply did not have the kind of infrastructural software that we could share with a significant number of other people, so we just thought about different approaches.

The idea of creating a language came to our minds because we felt like we had the expertise required for that, because we were building tools for programming in many different other languages, we had IDEs for Java, .NET, Scala, Groovy, Python, PHP, Ruby, JavaScript at that point, and we still did not see any alternative to Java that would be enjoyable for us to use. So we thought that with that expertise why couldn't we try and build our own language?

As it happens, we find that problems that we have are usually problems that other people in the industry have as well, so we decided that if we feel that unmet need, then there probably are other people who are in the same situation, so there might be some interest in the language. That's basically where it started from.

**Jerod Santo:** \[03:55\] So JetBrains makes its living by selling licenses to its many popular IDEs, IntelliJ probably being the most popular; there's also, as you said, WebStorm, RubyMine, PhpStorm, on and on and on. But you decided that you wanted to be more memorable and more influential amongst the developer community, and so a beloved programming language is of course a great way to do that if you can pull it off. But Kotlin has been open source from very early on, all the way back then, so where is the model there...? Is it just for influence, or is there some sort of business model eventually around Kotlin?

**Dmitry Jemerov:** Well, so one thing is that it simply gets people more attached to our products. Even though we do provide plugins for Eclipse and Netbeans and it's possible to build integrations with just plain text editors like Visual Studio Code, at the core, we invest much more into tooling for Kotlin for IntelliJ. So if Kotlin gets popular, then it drives the sales of IntelliJ because people want to have the best IDE for Kotlin, and they can buy it from us.

There's also the IntelliJ Community Edition which is free and open source, and you can get Kotlin support in that as well, but it does not include the enterprise development tooling, so it does not include support for like CSS, JavaScript databases, enterprise development frameworks, all this heavyweight stuff. So if you want that, then you need to buy IntelliJ Ultimate. Basically, from the business point, that was the main case.

Now there is also Kotlin Native, which is Kotlin target not the JVM, but the native code. We plan to make tools for Kotlin Native also commercial, or at least there's a strong possibility.

**Jerod Santo:** With a whole new language, and there's a world of ecosystem of tooling around that language, and if you are the author of the language and you are a tooling company, you're probably pretty good at making tools for Kotlin; it makes a lot of sense.

**Dmitry Jemerov:** Yeah.

**Jerod Santo:** So give us a little bit of the history... This conversation, at least for me, Adam, started with Heroku blog writing on the rise of Kotlin. Of course, we heard the announcement back in May from Google that Kotlin is a first-class citizen on Android now; we'll talk about that and what exactly that means... But you hear whisperings, and I'm not very much in the Java community, so I had never tried Kotlin or even researched it much, but you just hear whisperings over the years, and then eventually they get louder and louder...

I think the -- who was the fella that wrote that for Heroku?

**Adam Stacoviak:** Joe Kutner?

**Jerod Santo:** Yeah, Joe did a really good job of explaining why it's gotten so popular, especially as of late... And I even think the title set it up like, you know, this has been kind of a quick rise. Now, for many open source projects seven years is not fast, but for programming languages a seven-year-old language is very much still a baby. You guys hit 1.0 in 2016.

So at least from the outside, it seems like a meteoric rise from a brand new idea in 2010, six years of toiling to a 1.0 in 2016, to May 2017 where it's announced as first-class citizen or official language supported on Android, which is the most popular mobile platform in the world. Can you tell us if it's felt like that from your perspective?

**Dmitry Jemerov:** Well, it kind of was. There were actually several community members who have been really influential in spreading the word about Kotlin. Of course, at JetBrains we promote Kotlin ourselves internally, but there were certain people from the community whose articles had much more weight because they are uninvolved guys promoting the language.

**Jerod Santo:** Somebody else, right.

**Dmitry Jemerov:** \[07:55\] Yeah. And so probably the main guys responsible for promoting Kotlin were Jake Wharton from Square and Mike Hearn from the Bitcoin community. Essentially, he wrote an article motivating internal for Square why they should start using Kotlin, and then he published it externally and I still find people who are referring to it even today, even though it was published three years ago and it's not entirely up to date.

Mike Hearn also published an article like "Why Kotlin is my next language", and it also got lots and lots of quotes and reposts and so on. So I think that was very influential.

Of course, there are many other companies, like for example Christina Lee from Pinterest is advocating Kotlin quite a lot, and the Gradle partnership is also playing a role, the Spring Framework guys are also now excited about Kotlin... So you see lots of interest all around the community.

**Jerod Santo:** Let's go back to the beginning where we started, which is when this idea came to be... So let's make a programming language that developers will love - was that the core design principle, or did you have any sort of formalized "This is the way Kotlin is going to be?" Tell us some of the initial thoughts on what this programming language is supposed to be about.

**Dmitry Jemerov:** So we obviously wanted to have a statically typed language, because it's the only way that we know that we can have a large codebase that can be maintained over many years. We also wanted to have great Java interoperability because we had an existing huge Java codebase that we wanted to be able to gradually replace Java with Kotlin in that codebase; we could not just abandon it or rewrite it, or do something crazy like that. Also, we wanted to have a language that is simple and easy to build tools for, and of course pleasure to develop is also our key factor. This has the been the motto of our company for many years, "Develop with pleasure", and this applied to Kotlin equally as all our other products.

**Adam Stacoviak:** It's a good motto, "Develop with pleasure."

**Jerod Santo:** It's proven to be quite a good strategy, absolutely.

**Adam Stacoviak:** I've heard good things about other IDEs. In the GoTime FM channel we often hear about Gogland, your other IDE for Go language, and obviously you mentioned IntelliJ, and then RubyMine is like your original place you started; WebStorm... It seems you're pretty good at this, so...

**Jerod Santo:** So what comes out of that, characteristically? Obviously, you mentioned statically typed, so that's one aspect of it. Of course, if you want good tooling, static typing is, like you said, at this point a requirement. We haven't quite figured out how to get spectacular tooling around dynamically-typed languages, because things swoop in and swoop out underneath it so often... But what else? And especially in light of Java. Has Kotlin begun to catch on? It was like "What if Java was less verbose?" Was that an explicit goal right away? Like, "We could make this like Java, but just remove the verbosity", and that would be a big win?

**Dmitry Jemerov:** We did not believe that removing verbosity would be enough by itself, so we actually wanted to have some interesting new semantics. For example, the idea of nullability, of being able to have a NULL-safe language - it was not part of the design from the very beginning, but just when we were starting... So basically when we came up on the idea -- so the lead designer of Kotlin is Andrey Breslav, and when we started just discussing these ideas and we were not yet with the company, so we just discussed it between ourselves, like what the language might look like, would there be any sense in starting to work on it and so on... And then we just met with Andrey, just had some initial discussion with him, trying to get him interested in the idea of working on the language.

Originally, he was not convinced that it was a worthwhile endeavor, but then just after like one evening of talking we got him really interested, so he came on board and started working on the actual design. \[11:57\] Then there were other people who were talking with in the very beginning, just to get some ideas and feedback for what would be cool to have in the language. And actually, the idea of dealing with nullability came from Roman Elizarov, who at that time was not yet at JetBrains; he joined us very recently. At that time he was just a colleague that we introspected from another company, and he came up with the idea of making NULLs part of the language.

**Jerod Santo:** So you mentioned it twice now - NULL safety and dealing with nullability, and this is a huge feature inside Kotlin. Can you unpack that for us and talk about what that means, and then what that implies for programmers out there?

**Dmitry Jemerov:** Essentially, what that means is like for any variable in your program, Kotlin knows whether this variable can be NULL or not. And if this variable can't be NULL, then Kotlin does not allow you to do things that can cause NULL pointer exceptions. For example, if you have a reference to an object and this reference can be nulled, then you cannot simply call a method on it, because if it's NULL, then you'll get a NULL pointer exception at that time. So Kotlin forces you to check that.

There are multiple ways to do that, it's not very difficult to do. There are various shorthand syntaxes for it; the compiler guarantees that if you are following certain conditions, then you will never get NULL pointer exceptions in your program.

Now, of course, Kotlin interoperates with the Java ecosystem and in the Java world this information is not being tracked. For example, when you take a value returned from a Java method, you do not know whether this can be NULL or not, so Kotlin allows you to do anything with it and trusts you to check if you need it and to not check if you don't need it. But in that situation, you do not get the guarantees that you get in pure Kotlin code.

**Jerod Santo:** So you have to be explicit about a variable that can be nullable, and as long as you -- it's almost like training wheels, but you can pull them off if you need to. If you know what you're doing, this variable makes sense to be nullable, I'm going to annotate it somehow - I think you guys use a question mark perhaps to annotate that a variable is nullable...

**Dmitry Jemerov:** Yes. I would not actually refer to it as training wheels. It's a core part of programming in Kotlin. I think getting nullability right implies a much better understanding of the possible state of your system, because I see a lot of Java software that is just littered with NULL checks; they check every single thing because they are so afraid that there might be an exception. This shows that they do not really have an idea of what data can be in what state in their program, and Kotlin essentially forces you to keep this straight. So this is NULL, and if you put a question mark, you realize that you put it explicitly and you know why, and you know what this means and in what situations this can happen. Otherwise, you want to avoid putting those question marks, and this essentially guarantees that it is there when you expect it to be.

**Jerod Santo:** This is something that also proliferates in Ruby code, in my experience. Many languages have this problem of dealing with NULL or nil, or the lack of something, and in fact Avdi Grimm has a talk, which I believe he turned into a book called Confident in Ruby, which talks about all these ways of basically squeezing out nils so that you're not always checking for them. It's coding confidently, because what happens is when something could always be NULL perhaps - like you said, you have all these checks everywhere, it's littered throughout your code, trying to find out whether or not you're dealing with NULL, and knowing whether or not that's the case coming into a function or a block of code means that you don't have to write all those checks all the time; it just cleans everything up, and eliminates a huge swathe of runtime errors, for sure.

**Dmitry Jemerov:** Yeah, sure. We find this to be very important.

**Adam Stacoviak:** It seems like you were describing an anxious programmer; someone who kind of checks all their data like that, in that sense seems like you're almost in an anxious state, rather than, as you mentioned, which is a good title for his book and talk, Confident In Ruby... You're dealing with confidence, versus the opposite, which might be anxiousness or "Am I getting this right? Is this data trustworthy? Could I be confident in it?"

**Jerod Santo:** \[16:04\] Right. What you often find is those checks will proliferate over time as a codebase is exposed to the real world, so the developer will begin writing the code without all those checks in it and be kind of naively confident until their software hits a real-world use case at which point users are doing things that you didn't expect, and you end up having bugs here and there, and the fix for a lot of these bugs is "Well, if this thing is NULL, do this. If it's not NULL, do the thing that we're already doing otherwise." Over time, you just have more and more of those checks. And anxious I think definitely is a person who's been battle-hardened and knows that this user is gonna enter a thing that I don't expect here, so they'll preemptively put those checks in... But over time you'll just see them in bug fixes; it's just checking for NULL, and returning early, or handling it differently. And it really makes for brittle, hard to maintain code over time.

**Dmitry Jemerov:** Yeah, I think the right way to deal with that is to have a boundary in your system. There's this user input, and everything that the user can input can be all sorts of wrong, and then you just have a boundary where you validate all the data and reject the data which is not satisfactory, which does not meet the requirements that you need. After that facade, you can just deal with correct data in the rest of your system, and I think it makes everything much easier to reason about.

**Jerod Santo:** I agree, absolutely. Check forward upfront, have a guard clause or some sort of boundary, like you said; squeeze out those nils or NULLs, and then on the internals of your software you can then code confidently and not have to be checking everywhere, because you've already done that check at the perimeter.

NULL safety, you mentioned static typing, it's a compiled language, but fast compilation is something that you're after, which is one of the things that people love about Go... Tell us about that, and then some of the other characteristics of Kotlin the language.

**Dmitry Jemerov:** As for fast compilation, actually we are nowhere near Go, unfortunately. Go is a pretty simple language to compile, and you don't need a lot of sophisticated logic to analyze a Go program. Kotlin is quite a bit more involved than that, so compilation performance is still something that we are working on.

We have incremental compilation, which helps a lot. You can recompile only those files which are affected by the latest bunch of changes that you made since you last compiled... But still, for clean compilation, there's still something to improve for us.

**Adam Stacoviak:** What's an average? The difference in Go programming... Is it minutes, hours?

**Dmitry Jemerov:** It's really hard -- so it's not hours, of course. I don't know, compiling the entire Kotlin codebase takes 6-7 minutes on a modern computer.

**Adam Stacoviak:** So it's allowing you to get some coffee, basically.

**Dmitry Jemerov:** Yeah.

**Jerod Santo:** But that's probably hundreds of thousands of lines.

**Dmitry Jemerov:** This is a fairly large project, so there's quite a lot of code in there. If you just make a local change, you don't have to recompile the whole thing; the incremental compilation kicks in and you can test your change within a couple of seconds... Five seconds, something like that.

**Jerod Santo:** Perhaps one of the biggest features that you mentioned a little bit off-hand but we should highlight is complete interop with everything in Java... Is it with anything that can run on the JVM, or specifically Java?

**Dmitry Jemerov:** So it's Java and languages which are compiled in a similar way. For example, Groovy runs on the JVM but it's dynamic, so it has its own infrastructure for handling method calls, dispatching method calls, and Kotlin does not really interoperate with that.

**Jerod Santo:** Gotcha.

**Dmitry Jemerov:** \[19:46\] But if you take normal, static-typed languages like Ceylon or Scala, then Kotlin is able to interoperate with them normally. And people do use mixed Kotlin/Scala/Java projects, even though it's not a very easy thing to do; I've heard about some projects who do that.

**Jerod Santo:** So this is a general purpose programming language that's running on servers, and like you said, you have desktop applications... Of course, we know that it's going mobile, on Android for a while now, you guys have Kotlin Native going on... What was the first target and maybe the first set of users that you guys got outside of JetBrains to buy and give it a try, and why was it so attractive to them to hop into the waters?

**Dmitry Jemerov:** The really first ones I don't actually remember. I think the well-known names which were the earliest adopters was this company called Prezi; they make presentation on the web, and they started using Kotlin on the backend fairly early on, in 2014 or something like that. I don't actually know if they are still using it actively, but at that time it was very nice to hear that they are using Kotlin.

**Jerod Santo:** So is that a typical early-on user, like a web company? Or was it people doing desktop stuff? I was trying to get a feel for...

**Dmitry Jemerov:** I think in the early days it was all sorts of stuff. Some JavaFX stuff, some desktop programming, some server-side programming, probably mobile as well... I don't remember when people started trying to use Kotlin for mobile.

**Jerod Santo:** Give us other highlights of the language then. I think coroutines is possibly worth talking about, we haven't talked about the syntax very much... Go ahead.

**Dmitry Jemerov:** Yeah. As for coroutines, this is probably one of the most exciting things in Kotlin 1.1 that we released in the beginning of this year. Essentially, the idea is that we want to be able to let people write asynchronous software in a sane way, without compromising performance. Normally, you can use threads for writing concurrent software, and the problem with that is that every thread is expensive and you cannot really run a million threads, because you just run out of system resources.

Or you can do callback-style programming, like they do in Node.js; there are asynchronous frameworks for all languages that support that (there's Vert.x on the JVM). The problem with the callback style is that it's very hard to -- for example, it's very hard to write a test because everything is in the callback, and if in a test you want to do some kind of steps and then in the end assert that everything is done, it's very hard to detect where this end is so that you can find and assert that everything is done... Things like that. All in all, it kind of warps the content flow in such a way that it becomes difficult to understand and difficult to write.

Coroutines give you the best of both worlds. Coroutines essentially let you dispatch calls in any way that you want, so they are not tied to any specific architecture. You can use a thread pool to execute them, or you can use a single-threaded dispatch, and you can even run coroutines on other machines possibly.

**Jerod Santo:** Do you have to specify, or will it just use one strategy by default, I suppose?

**Dmitry Jemerov:** Running on multiple machines is something that's possible, but not yet implemented. The machinery allows you to do that and there are some projects that wanted to explore this direction, but I don't know that anyone actually achieved that. But it's not that hard to do. Essentially, you can just parallelize your software while maintaining a sane programming model, so writing code in a linear fashion.

We didn't really invent any new concepts there; the kind of asynchronous programming that we support is very similar to what Python has and what C\# has, and the recent versions of JavaScript have similar patterns as well. The difference is that we have put as much as possible into the library; the actual semantics of executing a coroutine, they are not controlled by the language. The language only gives you the infrastructure of turning a function into something that can be interrupted and then resumed. The actual execution logic is part of the library.

**Jerod Santo:** \[24:00\] We haven't even talked about object-oriented versus functional (spoiler alert - it's both) you have object orientation, you have first-class functions, you have all the stuff you'd expect from a functional language, all the collection type of stuff built in, so... I'm just trying to think, if I was gonna characterize Kotlin - of course, we already said it's statically typed, compiled, it does have type inference, so while it's statically typed, it's keeping your syntax short, because it's inferring things that it can... You guys have pulled in influence from Java, C\#, JavaScript, Scala, Groovy - it seems like you've really looked around in the programming language landscape and pulled in good ideas from everywhere. Was that the MO? When you go about designing a language, when you try to think of how you decide what you're going to do - in your guys' case it sounds like "Well, what do we love from all of these different languages? Let's just do those."

**Dmitry Jemerov:** Yeah, it was a significant part of what we did. We initially positioned our language as a very non-research language. A lot of programming language design comes from the academia, so people want to write PhD's about how they designed the language, and essentially want to move the state of the art forward. We were not particularly interested in moving the research forward; we wanted to build a tool that can be used by actual people who don't have a PhD in computer science, who just want to get things done.

Because of that, we do not pride ourselves on being innovative in any specific area. We did take a lot of good ideas from other languages... And we are also not being dogmatic. We are both functional and object-oriented, and we are not hardcore functional; we do not force you to use immutable data for everything, for example. We don't force you to write pure functions unless you make some special effort to make them non-pure. So just write your code any way you want, and we give you tools that allow you to do that. There is not much imposition of paradigms from our side, so to say.

**Adam Stacoviak:** Often whenever you have a programming language, and as you mentioned, dogmatic, you often feel like you have to choose that kind of path to sort of set the tone for what the language could be. As you mentioned Go earlier, comparing the compile times, Go is very small (I guess) in a way where you can keep it most in your mind; it's designed that way for a reason. Do you think that not choosing a path, not being dogmatic or not choosing one or the other as a way programmers should use Kotlin is a good thing or a bad thing? Obviously, you're on that side, it seems maybe it's a good thing, but can you share what the potential downsides could be of not being dogmatic about that choice?

**Dmitry Jemerov:** Well, if you look at the feedback that people have been voicing out after the Google I/O announcement, you hear a consistent theme... We do not yet know how to use the language in the right way. With Java there are a lot of patterns, there are books that tell you how to use Java properly, like Effective Java. Those books started coming out when Java was many years old; by now, there is a body of experience how Java should be used and how Java should not be used.

With Kotlin, people are concerned that this body of experience does not yet exist, so there are not that many style guides, not that much guidance in terms of what the right patterns are and what the wrong patterns are. I'm actually myself trying to address this to a degree, so I'm giving a talk on it... There's a conference on Kotlin in November in San Francisco and I will be giving a talk on idiomatic Kotlin there, just explaining exactly this sort of stuff.

Also, I'm working on a style guide that will also answer some of those questions that people have. People do want guidance and we are going to provide it.

**Adam Stacoviak:** Does it impact the language though? As you implement the language and as you design the language, how does that affect the language itself, choosing a path or not choosing a path? Does it make it more complex, as you mentioned, not getting a PhD in computer science to effectively code in Kotlin?

**Dmitry Jemerov:** \[28:12\] I do not think it makes it more complex in this way. It is true that we are adding some features that might seem like hacks to some people that view computer languages as something pure and beautiful in the theoretical sense, and those kinds of hacks are not the kind of things that you need a PhD to understand. They are just there because they solve practical issues that people encounter in real life. But we try to be moderate, we try to not add too many of those and try to keep the language reasonably clean, but still usable for tasks that people are trying to apply it to.

Also, one other thing where we can address this problem is through tooling. Even though the languages can't compile any kind of code, we can and we do build inspections that highlight certain patterns in your IDE and tell you that you should not be doing this, you should be doing something else. In very many cases, we can automatically correct the code for you, so that you just press a keyboard shortcut and it changes the code into something that we find to be the right way to do things. We have over 100 of those inspections at this time, and we are going to build more and more of them, because we have so many ideas about things that we can do to improve our users' code.

**Jerod Santo:** I've heard a few people say that when it comes to tooling and programming languages that it's one of those things similar to security, where you can't very well bolt on security after the fact... That with tooling it's very difficult to have a mature built-up language or ecosystem and then you add tooling later, but they have to be one and the same, the language and the tool growing up together and maybe even sharing codebases, or something like that. Is that something that Kotlin has benefitted from, and is that something that resonates with you?

**Dmitry Jemerov:** Yes, to a degree. With Kotlin we were building the language and the tools together from the very beginning, so they share the same logic for parsing code, resolving a reference, detecting errors - all of this is shared between the compiler and the IDE plugin. But in many case, you can build tools after the fact, and actually you mentioned Gogland... Gogland was a very late entrant to the Go space, and I think it is still pretty successful and people seem to enjoy using it. It was built entirely after the fact, without using any of the stuff that the Go team has built for tools, as far as I know.

**Jerod Santo:** Yeah. That could perhaps be a testament to the simplicity of Go, as well... Maybe not necessarily because of it, but it probably helped you guys come in after the fact and build tooling around it.

**Dmitry Jemerov:** Yes, absolutely true.

**Adam Stacoviak:** Up next after the break we talk with Dmitry about official Android support and what this means for Kotlin. This was recently announced at Google I/O, and this is a big deal. If they're trying to be a better language than Java, to be an industrial-strength object-oriented language that is a replacement for those Java developers out there, a new modern language, this is the Holy Grail, this is the blessing that they needed.

We're talking about Kotlin versus Swift, and because we can't do a single show without talking about JavaScript, we also talk through Kotlin.js. All this and more, after the break.

**Break:** \[31:41\]

**Jerod Santo:** Dmitry, we mentioned the big announcement at Google I/O, of first-class Android support. That had to be huge for JetBrains, huge for the whole Kotlin community... Tell us about the Android support. Obviously, people were building Android stuff before this; it's not like they added it and you couldn't do it before... But I took it as a blessing from Google. Tell us the inside story on that and tell us what it meant for everybody.

**Dmitry Jemerov:** Well, we actually have been in contact with the Android team for quite a while. Obviously, we worked together on Android Studio, which is based on the IntelliJ platform. So we have had contacts for a long time. We brought this topic every once in a while, like "What would it take to get the Kotlin plugin bundled into Android Studio and they basically answered like "No, not yet. Let's talk about this later." And at some point they said "Okay, we are ready to do it, and we are going to do it in a month", so essentially we had a very short time to set up all the legal stuff that we needed to take care of before this could happen - all the technical stuff to get the plugin bundled. So this was very stressful, right before the I/O, but it was really inspiring for all of us, to see Stephanie presented from the stage and how happy she was presenting it and how happy all the community was to hear "Yeah, this is something that we have been waiting for."

We did hear from a lot of people that they are not open to trying Kotlin because it's not blessed; they were concerned that Google was going to do something that would break Kotlin, so essentially they would end up with a broken app with no way to fix that... Even though there was not actually much risk of this happening, because as long as Android was based on the JVM, which is not going to change anytime soon, we could adapt to whatever changes that Google had in mind. But still, people had their concerns and now their concerns are alleviated. They have a guarantee that there's a partnership that's going to keep Kotlin up and running.

**Adam Stacoviak:** \[35:48\] So maybe that's why we're seeing such a dramatic shift, Jerod, in terms of more articles, talks, or just adoption, because of that change with Google I/O, and obviously Google blessing it, basically.

**Dmitry Jemerov:** Yes, and it's interesting that all the growth and adoption and interest is not just to Android. The article from Heroku that you mentioned, it also came out after the Google announcement, and the additional interest that it got was also driven by this announcement, too. So all sorts of people are starting to take us seriously, not only those who built Android apps.

**Jerod Santo:** Yeah. It was definitely a huge win for the whole Kotlin community, and I can definitely see where Android developers, even though they aren't happy with their current circumstance and tooling around building Android apps with Java, Kotlin was a risk for them -- like you said, it really wasn't, because as long as it was on the JVM, it was difficult for Google to somehow not block it... But when you're building a business, or perhaps you're building client apps or whatever your purpose is, building on unblessed type of things, especially on mobile, where things are a little bit more controlled compared to the web, even on the Google side, I could see where people were just waiting for something a little more official. It seemed like this was exactly what Kotlin needed to get the dramatic uptake that it's gotten since then.

**Dmitry Jemerov:** Technically, this does not mean all that much aside from the collaboration that has been now even more solidly established between us and the Studio team. So probably the key thing that changes is that Google is going to provide documentation and samples and templates right out of the box, so that when you create a project in Android you can choose to use Kotlin from the get-go and it will just generate Kotlin code for all of the activities and all of the stuff that Studio generates for you by default.

**Jerod Santo:** That's exactly what I was going to ask, so good job! \[laughs\]

**Dmitry Jemerov:** Yeah.

**Jerod Santo:** That's what everybody wants to know, in the practical sense what does this mean, and I think that makes a lot of sense. One thing I wanted to ask you about, just talking about Kotlin, thinking about Android, thinking about Java, thinking about Kotlin, and then on the iOS side of things you've got Objective-C and Swift, and I've heard the comparison before that Kotlin is to Java as Swift is to Objective-C... There's lines to draw there, there's a lot that's not true about that, but one of the most interesting things for me is whereas Swift was developed inside of Apple and is now gonna be the long-term Objective-C replacement over time, here we have Kotlin perhaps over time replacing Java on Android, but it's from a third-party, it's open source -- well, Swift is open source, but it's all inside of Apple, whereas this didn't come from Google, this came from a tooling company. I'm just curious of your thoughts on that comparison, and the fact that Kotlin is from an outsider, whereas Swift is from the inside.

**Dmitry Jemerov:** Yeah, well one thing I find very interesting about Kotlin and Swift is how close they are in terms of design, even though we did not talk to each other at all until very late. I once gave a presentation about Kotlin and Apple where Chris Lattner was present, but we didn't really...that doesn't really count as joint development, or anything like that... So when Swift was open sourced, we saw that we started almost exactly at the same time; Swift was just gestating longer inside of Apple, and we opened up earlier and started telling about what we do. The design is very similar, and I think it's just more like convergent evolution than any kind of conscious borrowing from one language to another.

Both of the languages reflect the state of the art in language design, the shared understanding of what it takes to build a modern language, and it kind of reaffirms our decisions to see that Swift does a lot of the things in a similar way.

\[40:08\] In terms of outside versus inside, I don't know... Google has certainly tried to build languages internally, and one of them is very successful, another is not so much successful, and I guess maybe they did not want to make a third try, although I'm pretty sure that there's enough expertise inside of Google that they could build a great language with new and worthwhile things. But for them, given that Kotlin already existed and already had mindshare and they could be pretty secure based on our partnership around Android Studio that we are not going to screw them, I think this was a very logical step for them to adopt Kotlin.

**Jerod Santo:** Yeah, absolutely.

**Dmitry Jemerov:** And it's definitely not about the Oracle lawsuit, as many people think. Kotlin is not going to address any of the concerns that Oracle might have, because it's still based on the same JVM and the same Java classes that all the fuss was about, they are still in there. So it's just totally unrelated.

**Jerod Santo:** Is that still up for grabs? I was tracking that for a while. Is there an appeal process happening? I don't know the state of the Oracle case.

**Dmitry Jemerov:** I've lost track, I don't know what the latest state is.

**Adam Stacoviak:** I didn't even track it at all, so... I was getting news right now.

**Jerod Santo:** Oh, man... It's very interesting IP-related stuff with Oracle and Google duking it out in the courts.

**Adam Stacoviak:** I think the point though with Kotlin and Google not doing that - it's surprising that given their reliance on Android, the future as it is to them as a company, I'm surprised (as you were, Jerod) that it was a third-party to introduce change, instead of them. Even though they've had successful languages and successful things, I was surprised about it, too.

**Dmitry Jemerov:** Yeah, the open source totally helps. Actually, when the first version of Android Studio came out, up to the very point of the release there was like zero lines of contract signed between us and Google concerning this. So it was entirely based on the Apache 2 license that the IntelliJ community was based on. With Kotlin, they wanted to have more reassurances, so there were some more formalities, but with Android Studio it was just based on pure open source collaboration, and I think it's a great success story that even companies as defensive and as large as Google could go for something like that just based on the Apache 2 license, without any extra reassurance.

**Adam Stacoviak:** Wow. That does say quite a bit. To those out there that are Android developers and they're tired of Java or they have not heard of Kotlin, or they're just hearing about it, they're listening to this show and they're thinking "I've heard about this; somebody told me to this show. Dmitry was on there, covering the bases of this language, and all the ins and outs", can you help share or shed some light to those folks who are looking for a better solution, that are developing for Android, why Kotlin is a better solution for them or why Kotlin would be a great place for them to hang out at?

**Dmitry Jemerov:** Well, so one thing is just that you will get less runtime exceptions in your program. It's very annoying when you run an application on Android and it crashes, and "This application has been closed" - I don't remember what's the exact wording of that. You will just get less of those.

\[43:38\] Another thing is that it will be much more pleasant to develop software. It will be less annoying, less fussy, less worrying about stuff that is just boilerplate, and you can just be more productive. Also, you still have the same tools that you had access to with Java - linters work, annotation processes work, and you can use any frameworks that Android developers use, like Dagger and data binding, and all of this stuff is just there. And there's quite a lot of material now; so the Kotlin tag on Stack Overflow is very active and there are two books covering Kotlin for Android and there are several more being written. So there's a lot of material that you can use to learn Kotlin. The learning curve is not actually that high, so you can get productive -- you can learn to read Kotlin code in a few hours and write it in a few days. Then, of course, it takes a while to become really fluent and proficient, but it's like that with every language.

**Jerod Santo:** Well, I was at a recent event, the Sustain Conference, I was talking with a listener and he said "Jerod, almost every one of your shows has something to do with JavaScript", and I said "Well, that's just kind of the state of the industry right now." So we couldn't get out of here without asking about JavaScript... There's a thing called Kotlin.js, it looks like, from my reading that -- perhaps JavaScript is just like a second compile target, like you can do the JVM or JavaScript... Do I have that right, or does it work somehow differently?

**Dmitry Jemerov:** Yes, that's basically exactly the case. You can compile Kotlin to Java bytecode and run it on JVM on Android, you can compile it to JavaScript and run it in your browser, or you compile it to native code and run it on the Raspberry Pi or iOS. Our key goal actually is to support code we use between the backend and the frontend, so that you'll be able to implement your business logic just once, and you use the same classes on your backend and on your frontend. Kotlin will take care of civilization, transporting the data between the server and the client. This part of the story is something that we are still working on, it's not fully public yet, but it's definitely something that we want to cover.

You can very easily share the same business logic between all the tiers of your application - backend with the JVM, web frontend with JS, Android with content for Android, and iOS with content native. So that's the play that we are aiming for, so that it's just a single language for all tiers of your application, and the same IDE.

**Jerod Santo:** There was a day in the past where you used to have to convince people that it was worth a build step, it was worth a compilation step in their frontend development workflow, to use a different language. Nowadays, even people who are writing plain old JavaScript, maybe they're writing ES6 or ES7, and we still have build steps for JavaScript to JavaScript, so that's probably not something that you necessarily are gonna have too much of a battle with people winning them over is... "Hey, you've gotta compile your Kotlin to your JavaScript", but perhaps you might be concerned about debugging, and performance, and the overall quality of the compiled JavaScript. Is that something you guys are addressing as well?

**Dmitry Jemerov:** Yes, for debugging you basically get sourcemaps, so you can use the debugging tools in Chrome or Firefox, or you can use WebStorm, which also has an integrated debugger. Or not WebStorm, but IntelliJ Ultimate, that has an integrated debugger that can attach to your browser and you can step through their code inside your IDE, even though the code is running in the browser.

For code size, this is something we are actively working on. We have essentially built our own minifier that understands the logic of the Kotlin code, so you can intelligently trim the size of your code so that there's just nothing extra there.

In terms of performance, it's pretty straightforward. We don't do anything fancy, and there is no extra overhead for dispatching calls, or something like that... So the performance should be very similar to what regular JavaScript gives you.

**Jerod Santo:** \[48:03\] Very cool. Well, for those people out there hoping for that -- what is it, isomorphic is the term...? Isomorphic application, where it's just one language on the front and the back; if you love Kotlin and you've gotta write a JavaScript frontend, you can just keep on Kotlin the whole time; it's pretty cool.

**Dmitry Jemerov:** Yes, and we also integrate with the native frontend too; we have a Webpack loader for Kotlin, so that if you are using Webpack you can just integrate Kotlin directly into your build process.

You can install npm modules and use them together with Kotlin code. You can also use type definitions from DefinitelyTyped; you can convert those TypeScript files into Kotlin and use them to get static types for JavaScript frameworks that you want to use from your Kotlin code. So we have put and still putting a lot of effort into the integration with the JavaScript ecosystem; even though it's evolving very quickly and it's hard to keep up with, but we are trying.

**Adam Stacoviak:** Something about what's coming up here - you have Kotlin Conf coming up later this year. You mentioned -- I believe it's Andrey Breslav, he's the creator of this language... Is he one of or many of the creators of this? Was it his idea or not? Just setting that case.

**Dmitry Jemerov:** As I said, he came on board when we already had the idea that we are going to build a language, but the actual design of the language, the features and the specific details, it's all his work. He's still doing the majority of the design work at Kotlin, or almost all of it.

**Adam Stacoviak:** Okay. So just to get some context, I wanted to kind of share who that person was and what his involvement was. So he's giving a keynote along with Eric and others; you've got this conference coming up... As you've mentioned, Google I/O - that happening as well, so a lot of new attention is being put on Kotlin and the community is growing, so help us understand not only this conference coming up, but other things happening out there. Where is community taking place at for Kotlin?

**Dmitry Jemerov:** Where is it taking place?

**Adam Stacoviak:** Yeah, like is it at conferences, is it meetups? Where are things generally happening at? Where can people hang out at to kind of catch up or get involved?

**Dmitry Jemerov:** We have a public Slack, which is probably one of the biggest focuses of the community. I think we crossed 10,000 people; let me check...

**Adam Stacoviak:** Yeah, 10,000+ is still a lot.

**Dmitry Jemerov:** And there's lots and lots of user groups and meetups, and there are also local events... There's something called Kotlin Night, which is essentially an event that the community can hold in their own city, and we will support it and we will send swag, and maybe help them monetarily if it's needed... So there are lots of these events all over the world.

There is a surprisingly large community in Japan, for example. There are communities in the U.S. all over the place, in the U.K., in Europe, in Brazil...

**Adam Stacoviak:** \[51:09\] On your Talks page - that map on your Talks page, is that representative pretty well of where Kotlin is being adopted? I mean, obviously, that would make sense if they're giving talks there, it would assume there's some sort of adoption taking place.

**Dmitry Jemerov:** I think so, yes. We are actually putting a lot of effort into gathering all the talks that we can find about Kotlin, and there aren't so many of them...

**Adam Stacoviak:** Gotcha. So KotlinLang.org/community is a good place to start. There's four different tabs - Community Overview, User Groups, Kotlin Night, as you've just mentioned, and the various talks you're gathering is a great place to sort of step in; obviously, this podcast too, but you're listening to it to hear what I'm saying, so check on that box. So if you're someone local and you're trying to form a group, you can form one - Kotlin nights - and you all will support that.

**Dmitry Jemerov:** Yes, definitely.

**Jerod Santo:** Awesome. Well, Dmitry, it's been a blast. Thanks so much for joining us.

**Dmitry Jemerov:** Thank you, I really enjoyed being on the podcast as well. Thanks for inviting me.
