**Mat Ryer:** Hello, and welcome to Go Time! I'm Mat Ryer, and today we're talking generics, and picking through this interesting and sometimes controversial issue. I'm joined by Jon Calhoun... Hello, Jon.

**Jon Calhoun:** Hey, Mat!

**Mat Ryer:** I'm joined also by Johnny Boursiquot...

**Johnny Boursiquot:** Hello, there.

**Mat Ryer:** And by the one and only Ian Lance Taylor. Hello, Ian.

**Ian Lance Taylor:** Hello! Thanks for having me.

**Mat Ryer:** Yeah, thanks for joining. It's very exciting. We all saw you speaking at GopherCon, and actually today the videos went out. So if anyone hasn't seen Ian's talk on this very subject at GopherCon, you probably can watch [the video](https://www.youtube.com/watch?v=WzgLqE-3IhY) now.

**Jon Calhoun:** Not now... Like, in a couple hours.

**Mat Ryer:** Good point, thanks Jon. \[laughs\] Maybe we could just start the conversation with a little bit about what generics are, and what that means for Go, and why it's also a conversation that we have and we hear a lot about, again and again, from people that look at Go from other programming languages.

So who wants to take a stab at first describing generics, for anyone not familiar with the subject?

**Ian Lance Taylor:** Well, I'm happy to take a stab at it. Generics is a kind of programming in which you do not specify the types, the exact types of your values at the time that you write the code. You use type parameters which stand in for the actual types, and then when you actually build your program and execute it, then those types are chosen later on. So it lets you write a set of algorithms and data structures that can be written and can work independent of the actual types themselves.

**Mat Ryer:** That's great. But these are different to just an empty interface, isn't it? There's still compile-time checks that happen with these types.

**Ian Lance Taylor:** That's right, yes. It's still all statically-checked at compile time, based on the type argument.

**Jon Calhoun:** So would you say it's pretty safe to say that maps and slices are, in a way, just another example of generics?

**Ian Lance Taylor:** \[03:51\] Yes, maps and slices are absolutely generic types in and of themselves. They happen to be built into the language. So when people talk about generics in Go, one way of saying it is they wanna be able to write their own versions of maps and slices; not maps and slices themselves, of course, but other similar data structures or algorithms, but applied to those data structures.

**Johnny Boursiquot:** So somewhat a painful -- or rather what folks consider to be painful to do without the use of generics is basically having to either rely on the empty interface, and doing type conversions and whatnot, which comes with its own risks... And obviously, you can also do some code generation... But really, what seems to be the problem, to put it jokingly? There's obviously, folks are coming in from different programming languages, and they are used to being able to do these kinds of things using generics... But Go has from the start sort of eschewed that way of programming. \[unintelligible 00:04:53.06\] what are your thoughts for why it was left out, what the reasoning was for that, and why it's so important to actually be thinking about these things and looking to bring them into the language now?

**Ian Lance Taylor:** Well, it wass left out because it's complicated. It adds a lot of -- you have to think pretty hard about how to do the type checking, about how the program works. It's also complicated just to specify type parameters and type arguments.

Now, I'm hoping that we're minimizing the complexity with our design draft, but there's no denying that it will make the language -- it adds a number of new concepts for language. Now, that said, the reason people look to see it in Go - as you say, people are familiar with generics from other languages... But there's a set of programs, a set of kinds of code that we can't really write in Go because we do not have generics. And we're used to that, and we can still write, obviously, tons of good code anyhow... But if we had generics, we could for example write libraries that provided data structures that don't currently exist. A typical example would be a ConcurrentHashMap. A HashMap which could be modified safely by multiple goroutines simultaneously, and with type-safe, just like the standard language map type is.

Another example would be a set of algorithms that we can't really write today, like algorithms that work with channels of any kind. You could write just simple functions that merge to channels, or multiplex one channel into a bunch of other channels, or did whatever you wanted to do, various kinds of client-server architectures written with channels. Right now you have to write each one by itself, because there's no way of saying "I have a channel", but I don't care what the type of the channel is. You always have to say "I've got a chan int", or "I've got a chan of struct something or other".  You can't just say "I've just got a channel, and I still wanna write a select statement on it." That's hard to write in Go today.

**Jon Calhoun:** I think -- was it last week, Mat, when you guys were talking about the io.Writer and io.Reader interface...

**Mat Ryer:** Yes.

**Jon Calhoun:** This reminds me of that a lot, where we can write a lot of really cool code around the fact that those interfaces are really popular, and we don't really care about what we're reading from... And it sounds like what you're saying is like with the channels, it's kind of unfortunate that we can't do the same thing with channels, even though there's a lot of common functionality we could have built around that.

**Ian Lance Taylor:** That's right, yeah. So one way that generics can help Go programmers is to -- as you say, you can write interfaces that are very powerful, but you have to write a method that implements those interfaces. You could sort of conceptually think of all the built-in types in Go, of having their own methods. They're not written as methods, they're written as like the plus sign, or the channel receive and send operator. But there's no way to capture those ideas in the interface, and generics let us do that.

\[08:02\] But generics are also more than interfaces. You can also write generics that describe the relationships between multiple types. You don't have to always be working with a single type. You could have, like a typical example would be a graph, which has different node and edge types. You could write general generic graph algorithms that work on types that implement whatever is required by those graph algorithms, but you don't have to specify what exactly those types are.

**Mat Ryer:** So in that case - and I saw that example in your talk, Ian - if you had a graph and a node, and you have a contract that encapsulates both, that contract would only make sense when you provide it a type for both of them, wouldn't it? Those types wouldn't essentially be required.

**Ian Lance Taylor:** That's right. For the case of the graph example in the talk - yeah, you'd have to provide two type arguments every time you wanted to work with a graph, one describing the node type and one describing the edge type.

**Mat Ryer:** That makes sense. And of course, if you forgot one of those types, then of course the compiler is gonna help you at that point, I suppose.

**Ian Lance Taylor:** Yes. It would be as though you called a function without passing enough arguments to the function.

**Jon Calhoun:** So when we talk about all these different data structures, I guess one question I have is would you see the standard library getting much larger as a result of generics?

**Ian Lance Taylor:** It's really hard to say. I wouldn't see it getting much larger. What I would say is I would expect to see a new chans package, for example, with the channel algorithms I mentioned. And similarly, there would be a new Slices package, which would have a bunch of simple slice algorithms that worked on slices of any type. And beyond that, it's really difficult to say.

I think that it would become possible for people to write data structures, generic data structures that worked in different ways... But most of those would live outside the standard library. I think it would only be as we saw clear use cases for them that would be desirable to pull them into the standard library. So I wouldn't think the standard library would grow a lot bigger right away, but of course, there would always be scope for adding new things that have a clear, general applicability.

**Jon Calhoun:** This has come up a lot with Go 2; it's sort of where generics seem to be talked about... Even though it might be possible to do this without requiring Go 2. But I suspect one of the benefits is that there's probably some existing packages in the standard library that we would -- at least I would imagine things like the Sort package changing if we had generics. Do you see that as also being true?

**Ian Lance Taylor:** Yes, I agree. The Sort package would change, and also the Container List package would change, and the Hash package. Those packages would very likely -- you know, we'd still keep the old packages around, but there would likely be new versions of them that worked using generic facilities.

**Mat Ryer:** But we wouldn't get a new kind of slice, would we?

**Ian Lance Taylor:** No.

**Mat Ryer:** That's gonna likely stay the same, yeah.

**Ian Lance Taylor:** Yeah, slices are good. They're great. There's no reason to change them.

**Mat Ryer:** They are great, actually.

**Jon Calhoun:** I do think -- like, I look at the Sort package and I think it works well, especially once you figure it out... But if you're used to another language and you come and you see the Sort package, it can sometimes throw you off at first. And it's gotten way better over time, but that's definitely one of the ones that I can see generics actually making Go easier to use.

**Mat Ryer:** Well, that package actually has one of the cool examples of a way to achieve kind of a generic behavior in Go today, which is where you pass that function and you rely on the closure of having access to the data; and the function - you just get the indexes of the two items to compare. And so you're doing the work... It's kind of a trick, but it really quite works. Generics, of course, goes way beyond that.

It was interesting, Ian... Something you said really resonated earlier. You said that generics was left out of Go because it's complicated. And I think to developers, to engineers, that concept really makes sense; and to anyone listening that works on the other side, on the product side of things, that really doesn't make any sense to them at all, in my experience... So it's nice to hear that. And also the fact that you are empowered on the Go team to sort of make these decisions based on the sort of technical reality, and "mechanical sympathy" they call it, and all that.

**Ian Lance Taylor:** \[12:22\] Yeah... I think a lot of the success of Go has been that it's simple. When you're writing a program and you're spending minutes or hours trying to decide which language construct to use (in some other language, I mean), then that's not productive time. You want your language to be a tool that's powerful enough to get everything done, but it's not too hard to use. You don't wanna be puzzling over how some aspects of the language work.

So if we do wind up adding generics to Go, that's a property we've gotta preserve. That's the most important feature of the language.

**Mat Ryer:** Yeah, and also the readability. I talk a lot about this - really writing code for using the APIs and reading the code, and optimized for that, at the expense of writing... Which is why personally I don't mind writing `if err != nil` all the time. I'm actually really good at that, because when it comes to reading it - which I do far more often - it's very clear and it expresses it very well.

And that is something I like about the latest proposal. If you look at the code, it kind of still looks like Go... Although there are of course an additional set of parentheses now that we have to think about.

**Ian Lance Taylor:** I'm glad to hear you say that, because that is one of the things we were really aiming for. It should still look like Go.

**Mat Ryer:** Yeah. That's a great goal to have though I think as well. And that was actually part of my objection to the Try proposal. I digress a little bit... I think the Try proposal, it felt a bit magic, and it didn't feel like the most expressive Go that I sort of have become used to. And definitely the latest proposal I think still has the Go-ness in it, if that's a thing...

**Ian Lance Taylor:** \[laughs\] Good.

**Jon Calhoun:** So when you guys were trying to decide how to make this readable and easy to use, I'm assuming you looked at other languages to try to get some inspiration, to find out things that you thought didn't work... Can you talk a little bit more about that process?

**Ian Lance Taylor:** Sure. Obviously -- well, maybe not obviously, but the truth is the language that we're most familiar with is C++, so we've spent a lot of time looking at the C++ implementation of generics, which of course is called templates in C++. We knew there were aspects of templates that were just gonna be hard to bring into a language like Go, and that we didn't even want in a language like Go. In C++ you could actually view templates in C++ as another programming language, which I believe is actually Turing complete, that's sort of layered over the ordinary C++ language, only it uses a completely different syntax, and it's evaluated at compile time.

So that's what people mean when they talk about template metaprogramming. You can actually write entire programs in the template language. They're very difficult to understand... But that wasn't the direction we wanted to go. We wanted to sort of hone away all that to just get to the core idea of just being able to use types.

We also, of course, looked at the C++ syntax, which many people are familiar with, using angle brackets, but we couldn't figure out how to make that work in Go... Because Go has the ability that you can parse the syntax without knowing the types of the names; in order to fully resolve the program you have to know the types, but you can actually do all the parsing without knowing the types, and that's not true in C++. When parsing C++, you need to know if something is a template or an ordinary variable, and we needed to preserve the ability to easily parse Go. It makes the compiling faster and it makes it much easier to write a lot of important tools, like Go Imports... Much easier for them to parse the code if they don't need to understand the type of every name.

\[16:16\] Anyhow, that's kind of where we started from... And of course, we looked at a lot of other languages, too. D, Ada, CLU... CLU had a lot of these ideas back in the '70s. It's too bad that language hasn't carried forward. And of course, Java.

**Mat Ryer:** And one thing I like about this is in some ways when you're the user of it, it's kind of an optional feature. You might not even know it's there. One of the examples is where it can infer the type from what you've passed in. And so, in those cases it looks like you're just calling a normal Go function, so I like that.

**Ian Lance Taylor:** That's right. Type inference was actually something we've spent a great deal of time on, because on the one hand we really knew that we wanted it, so that as you say, people could call a generic function without even necessarily being deeply aware that it was a generic function. But we also had to make type inference rules that didn't surprise people, which again was something we knew from C++. C++ also has overloading, and their own type deduction, which is very complicated and it actually does surprise people sometimes. So it took us a long time to write down a set of rules that were simple enough to apply in most situation... At least I should say we hope they're simple enough to apply in most situations, because the truth is not very much generic code has been written yet, since there's no complete implementation.

**Jon Calhoun:** So when you were thinking about different approaches, did you guys write partial implementations just to try it out?

**Ian Lance Taylor:** Yeah.

**Jon Calhoun:** I know at this point (I think) there's a partial, but I didn't know if that was the norm for every approach you went with.

**Ian Lance Taylor:** Yeah. We wrote partial implementations for many of the different approaches we tried, and that really helps in finding parsing problems. We'd write, we'd implement it in the parser and we'd try it out with some test cases; or just writing it in the parser, we'd be like "Wow, we've just gotten to this case, and now we have no idea how to parse this code." That sort of helped drive us toward a fairly simple syntax that we're suggesting today.

**Mat Ryer:** That's a really interesting approach really, because it's like -- thinking of it because of the fact that you have to parse this language, so that being a primary concern, of course, is not something we really think about from the outside; when we think about the design of generics, we almost feel like "Well, it can be anything. Anything we can type into a notepad." But of course, there's also a sympathy to be had with the existing tools, and existing parsers, and all that stuff. I did see -- I think the Contracts is implemented in the parsers. There's a PR for it, I think.

**Ian Lance Taylor:** That's right, yeah. Robert Griesemer has written a parser, and most of the type checker at this point. That work is going really well.

**Mat Ryer:** So that's exciting.

**Break:** \[19:11\]

**Johnny Boursiquot:** Is that the only new very visible - other than the concept being implemented in the language - is that the new keyword being introduced, that's gonna be the very first thing developers realize "Okay, now generics has none of these because I can use this particular keyword"? Is that the only one that's surfacing at the moment?

**Ian Lance Taylor:** Yeah, that's right. One new keyword - `contract`. In the current design that's all we're adding. And you're right, that's the first thing developers are gonna see... But the truth is I don't think contracts are gonna be the first thing most people reach for. I think contracts are a key element of the design that we're suggesting, but you can write a lot of generic code actually without contracts. I mean, at some point you're gonna need contracts. I think we do need them in there... But you can actually do Go pretty far just writing type parameters and type arguments without contracts.

**Mat Ryer:** So what would be -- do you mean using the existing contracts, the built-in ones?

**Ian Lance Taylor:** No, I mean just writing code with no contract at all. Like the channel algorithms I mentioned. You can write a lot of things with a channel; a channel of some type T. You really don't care anything about that type T, so you don't need a contract for it.

**Mat Ryer:** I see. And then any type can be passed in there.

**Ian Lance Taylor:** That's right, exactly.

**Mat Ryer:** Yeah. Well, I think a lot of the classic problems will be immediately solved once generics is available, and hopefully solved in the standard library. Actually, something I'd like to talk about in a minute is, first of all, how has the community contributed, but also I'm quite interested in "How do we not all go off and build our own libraries, or all the common things that everyone's gonna need? How do we rally around a central place for that?" It'd be quite an interesting -- hopefully all the things we need, the common ones, sets and all the other types of graph structures, and trees, and all this stuff... Do we expect them to live inside the standard library, or do we think that somebody outside is gonna make them first?

**Ian Lance Taylor:** I think those are great questions, and I don't know how that's gonna play out. A lot of things, I hope, are gonna come outside first, and then in. But then, as you say, there's some very obvious ones, like sets. It does seem to make sense just to add that from the start. I don't really know how it's gonna work out. I don't have an idea there.

**Mat Ryer:** Yeah, it's interesting. sync.Map is one example you've raised, which would be great to have a typed sync.Map, for example, out of the box.

**Ian Lance Taylor:** Exactly.

**Mat Ryer:** Because when you hit the ground running in Go, usually concurrency is something that you're really excited to play around with because of the language primitives that make it possible... So I know a lot of people get very excited about that area of Go. And to be able to just use the sync.Map in a very intuitive, simple way - I think that's gonna just help with... That's the place where I'm excited for new developers to be exposed to this. Because by and large, I think this is gonna be a feature, at least for those writing, for more advanced, more seasoned developers, I think. And I think junior developers would likely stay away a little bit, initially. I don't know how you all feel about that...

**Jon Calhoun:** I think it's - at least in my opinion, I kind of hope that it's one of those things that if you don't need it, you don't necessarily have to run into it. That's kind of the hope. Because if you're not writing the libraries that are providing generic implementations, and you're just using something like maps and slices as they are now, you don't really have to think about the fact that they are generic. And I think if that's the case - at least that's my opinion - I hope that it won't scare them away right away.

**Mat Ryer:** \[23:58\] Yeah. Well, one of the big programming sins that I see, still - and I'm also guilty of this as well - is early abstraction. Whenever I see a concept emerging, I'm very tempted to immediately build the abstraction, and I sort of resist that nowadays. I've learned to implement it a few times first, and then look at where an abstraction comes. So with the power of generics, that's definitely an area where we might see people reaching a little bit too early for those abstractions. It's gonna be very tempting. So that's just something I think that we have to talk about as a community. And speaking of the community -- well, first of all, anyone, any thoughts on that?

**Ian Lance Taylor:** Well, I think you're absolutely right. New things do tend to get overused. I think the same thing happened with channels in the very early days of Go. I think it took us a while to understand where channels really are helpful, and where they introduce a little too much complexity, or a little too much early abstraction, as you say. We're just gonna have to try, and learn, and hopefully build a good and simple base that we can learn on.

**Mat Ryer:** Yeah, absolutely. I think that's great. I was one of those early adopters that abused channels. I'd used them in all kinds of places where I definitely shouldn't have... And actually now I sort of start with usually just a mutex; I'll start there and manage things like that... And sometimes I never have to grow beyond, actually. But yeah, I remember that... It is so good - and we take it for granted now - that we can so easily spin up all these goroutines, have them communicating in a safe way, and just use these language primitives to do things like that. It's extremely powerful... So yeah, I can see why people get excited and want to use it.

**Ian Lance Taylor:** Yup.

**Mat Ryer:** On the community aspect, how much of the community have already contributed to generics? I know there's always a big conversation whenever you start to talk about any features or any changes to the language, and I think that's a testament, by the way, to some of the core values of the Go team, which is the simplicity. The community is kind of resistant to change, and a little bit allergic to it... So how did you find that community engagement, Ian, and was it all you wish it should be? Is there ways we can improve? How was it?

**Ian Lance Taylor:** I think it's been really good. I think we've taken a lot of ideas from the community over the years. Of course, the generics discussion has been going on since Go started. A lot of people have contributed really interesting and useful ideas along the way... And there's also been people who've said "No generics. Can't take them. Too much", and I respect that point of view, too. Of course, I'm talking about generics, but there's no guarantee they'll go into the language at this point; I hope they will.

But I think there's been a lot of discussion over the years, there's been a lot of different ideas, different approaches taken, and I think it's really helped to inform us how we can approach the problem, and what we could do with the problem. It's also really helped us to see examples of code that really would be easier if generics had been available when that code was written... And to make sure that any design we come up with is powerful enough to implement those problems.

So that's the most useful thing we've seen - examples where generics would have helped, and where we can make sure that our proposal really does help. And then there's been great ideas on the syntax, on semantics... And then a lot of the ideas have been complicated, but I think that they've kind of helped us hone in on a common core functionality and power that will make this a useful addition to the language.

**Jon Calhoun:** \[28:07\] I think it was in the last year or two - maybe it was longer, it could have been... But I remember reading one of the -- I think it was somebody from the Google team actually who had a good example of where using the empty interface was actually causing performance issues, and generics would have helped. But it seemed like it really took us a while to actually get to the point where people could provide real examples of when that happened. Is that true, or am I just missing examples?

**Ian Lance Taylor:** No, I think you're absolutely right. It takes a while to understand, of course, these things. It takes a while to understand any language, it takes a while to understand the performance implications of empty interfaces... So yeah, you're absolutely right.

**Jon Calhoun:** So do you think that's part of the reason -- I don't know, maybe I'm misinterpreting, but it feels like generics are more of a focus now, and I would imagine that part of that might be that you're actually seeing examples where it makes more sense, whereas in the past it was kind of like "This would be nice, but it's not important enough to prioritize it."

**Ian Lance Taylor:** I think there's some aspect to it, to what you say... But I think another part of the reason why generics is getting more focus now is that we're actually getting to a point where we think we have a handle on the problem. Of course, most people have been using Go very happily, for many years; I've been thinking about generics for many years, and some of the earlier proposals have been published and they were all terrible... And then there were a bunch that were not published, and they were even worse.

There have been several unpublished proposals that I just sort of would write up and think about, and I would share just to a couple people, like to Robert and Russ, and they would say "You know what? This is pretty bad." And I think that what's happened is we've finally gotten to the point - with a lot of help, from a lot of people - to something where the immediate reaction is not "This is pretty bad", but the reaction is "Yeah, maybe we can get this to something that will really work."

**Johnny Boursiquot:** Given that some of the concerns around introducing generics and the complexity that it brings into, do you think that the current proposal has reached a point where it doesn't introduce too much of that complexity, too much of the burden on the user of these constructs, to be able to keep Go feeling like Go? ...like, not introducing that original complexity that I think we're all trying very hard not to let get into Go. Do you think that the current proposal meets that standard?

**Ian Lance Taylor:** Yeah, I think you've asked the essential question. We need to answer that question as a whole community. For me personally - yeah, my answer is yes. I think we have reached that balance. But I'm not the decider here. We've got to get to the point where we have an implementation where people can try it out, and then we have to see what a lot of people think.

**Jon Calhoun:** I think the implementation is a huge part there, because I know just looking at it, it's like "Okay, this looks okay", but it's one of those things until you dive in you don't know what it's actually gonna feel like, and if it's gonna be just instinctive. Because some things look simple from the outside, and then they're not, and then other things look complex and then when you get involved with them, you're like "Oh, this is actually pretty simple."

**Ian Lance Taylor:** Yeah, I agree.

**Mat Ryer:** Our community Slack channel is all a fizz. People listening live, asking questions... And Marwan asks "How much slower will Go builds be anticipated to get? And are there any goals around that?" Dylan Barack follows up by saying he would be happy with 50% to 100%, and no more, Ian, if that's possible...

**Ian Lance Taylor:** \[laughs\] Well, first of all, Go builds that do not use generics should not be affected at all. Second, let me say that--

**Mat Ryer:** \[32:03\] Oh, sorry, Ian, do you mean writing generic code, or even consuming generic code?

**Ian Lance Taylor:** I mean even consuming generic code.

**Mat Ryer:** Okay.

**Ian Lance Taylor:** An existing Go program obviously doesn't use any generic code. The existing Go program is not gonna be any slower because generics are added to the language. But the current design actually envisions a few different compilation strategies, and we expect that if it actually gets added to the language, we're gonna have to experiment with the compiler choosing different strategies for different kinds of cases.

One strategy would be the slow version, where we really do recompile everything for each step or type argument. And I don't see a reason to use that strategy in most cases. Then there's a strategy of kind of approaching it more like the way interfaces are implemented today, but not the same, because we don't want to have the same allocation requirements that interfaces have, but sort of the class type arguments...

You know, you can describe each type, at the simplest level, in terms of how many pointers it has. So you can recompile each generic function based on type arguments with different sets of pointers. Then if you do instantiate with a very large type argument - yeah, maybe you do a special case for that. But that's not gonna happen very often. So in that case you'd compile each generic function, say, four times or eight times. But that doesn't mean your compile is eight times slower, because most functions are not generic functions. So it's just an example of a couple of compilation strategies we could use.

I would say that if the compiler got 100% slower, that would be a failure. We do not wanna be that much slower. I don't know if we could pursue generics if it really cost that much compile time for ordinary programs. I mean, clearly you're gonna be able to write torture programs that make the compiler much slower, there's no denying that, but the ordinary case--

**Mat Ryer:** The kind that I would write.

**Ian Lance Taylor:** \[laughs\] The ordinary case should not be 100% slower. I would hope for, say, 25% slower; and I'm just making that up, because we're a long way from a serious implementation.

**Mat Ryer:** Okay, we won't hold you to it, Ian... But it's interesting. It's funny to hear about all the different things you have to think about, of course, when it comes to adding a feature to the language. Like I said, from the outside I often just think of it as the syntax, and that's it. But of course, there's lots more to it. And I wonder also, actually, Nathan Youngman in Slack asks - it doesn't say how old he is - might there be compiler optimizations that could happen as well between interfaces and generics, if we do end up with something that runs or performs better? It's an interesting idea.

**Ian Lance Taylor:** Yeah, that's an interesting idea. I had not thought about it, and I do not know.

**Mat Ryer:** Cool, me too.

**Break:** \[35:32\]

**Jon Calhoun:** It's really interesting to hear the discussions around compilation times, and things like that, like Mat said, because there are certain aspects that I would never think about, because I don't tend to work on projects where compilation time -- like, you could literally 10x my compilation time and it wouldn't matter. And there are other people who are definitely not in that case... But I can imagine implementing this and bringing about new features has gotta be very complicated as a result of that.

**Mat Ryer:** Jon, do you write unit tests?

**Jon Calhoun:** Yeah.

**Mat Ryer:** So if we 10x...

**Jon Calhoun:** Yes, if they went slower -- it still wouldn't be that much. I just might not run them every time I changed a couple of lines of code; instead, I might just run more specific things... But still, I don't think it would be that much of an impact for me.

**Mat Ryer:** Yeah. It's amazing, actually... When I hit Save, I do build and run the tests, and if there's a failing test, I show it in the IDE. Just having that fast compile time in Go - it's something that was there from the beginning, and it's been up and down, but it's another thing I think we take for granted... But we would miss it if it was gone.

**Johnny Boursiquot:** Yeah. Any noticeable impact on compile time, as Ian was saying, would be considered a big hit for the language and for the compile and for the developer workflow. I don't wanna have to think "Oh, if I'm using generics, then my workflow is gonna be impacted by that." I don't think that's something anybody wants.

**Mat Ryer:** Yeah, and it sounds like that is in their minds. I agree, I think it is important. The other thing, of course, is -- I hear a lot of people avoid using `defer`, because `defer` has a small performance hit. And then I find out about the case that they're using it in, and there's no way it's gonna make the slightest bit of difference. People do get a little bit obsessed with "Well, can I shave off every little bit of performance out of something?" And actually, readability - what about the performance of you as a developer fixing that code later? What about that performance?

**Ian Lance Taylor:** Yeah, absolutely right. On the `defer` front, since you've mentioned it, I'll plug that in 1.14 I think defers are gonna really be a lot cheaper. There's some active work going on in that area.

**Mat Ryer:** I've not been paying for mine already. Should I have been paying somebody every time I use `defer`? I almost would, by the way, because it's that good... \[laughter\] It's my favorite Go keyword for sure. But yeah, that's exciting. That's what I love - while the Go team are working on making the standard library better, making the compiler tools and all that better, we can without doing anything just sort of reap all those benefits... So I really love the fact that you're all working on that stuff on our behalf so hard, so... Thanks for that, for sure.

**Ian Lance Taylor:** Well, you're welcome, but you know - a lot of the stuff is not coming from the Go team. A lot of improvements are coming from other people as well. We're doing a lot of coordination, but a lot of the work is coming from outside, so thanks to everybody.

**Mat Ryer:** That's great to hear.

**Johnny Boursiquot:** That's pretty cool. And the other thing too is I don't think there's anything driving the usage of the versioning, the nomenclature around Go 2. I think the changes being introduced, with the contracts and the generics, is backwards-compatible, and basically still keeping the Go 1 promise that your stuff is still going to work... And I think that's just amazing.

**Ian Lance Taylor:** \[40:15\] Yeah, that's a big goal of ours.

**Mat Ryer:** That means it could go into one of the upcoming Go releases; it doesn't have to wait for Go 2 then.

**Ian Lance Taylor:** Yeah, Go 2 is more of a conceptual idea at this point. I think we're gonna try to be as Go 1-compatible as we can going forward. If we have to break something, then we can break something... But we're gonna try not to. And os maybe at some point; maybe if generics land, maybe if we get more error handling improvements in,    maybe once modules are set, maybe we'll call it Go 2. It might be a good marketing move, it might sound good; it might give people another reason to look at the language... But it doesn't mean that Go 1 programs are gonna stop working.

The example I like to use is that you write a C program - not literally, from the 1970, but a C program from about 1980 - it still runs today; there's never been a C 2, so why not emulate that? It's a great, successful language.

**Mat Ryer:** Yeah. Well, absolutely. In fact, I like the idea that this Go 2 could even have things remove. But of course, that would then mean breaking changes. But those are the sorts of breaking changes I like to see - when we make things even simpler.

**Ian Lance Taylor:** Agreed.

**Johnny Boursiquot:** Like removing panic, maybe? \[laughs\]

**Mat Ryer:** Yeah... Remove global state.

**Johnny Boursiquot:** Them are fightin' words.

**Ian Lance Taylor:** \[laughs\]

**Jon Calhoun:** You guys are getting real greedy.

**Mat Ryer:** Yeah. Just run them as global state. You know how they had to introduce random to the map, because people were abusing it? By the way, I just abuse it now to get random things now, but I'm abusing it in a different way. Yeah... It'll just be the same.

**Jon Calhoun:** One of the questions I have is -- so we've talked a little bit about how this is gonna change the language, and we've talked about how when people come to Go, they wanna use channels a lot, even though it's not the right tool... One of the concerns I would definitely have - and I think a lot of people would have - is that the minute we have generics, people are gonna wanna use them, so they're gonna write these libraries that are generic implementations of data structures, or whatever else... And I think one of the things that the Go community is good about right now is not importing stuff all the time; they'll write something on their own. But if we have generics, do you think that's gonna affect that mindset some?

**Ian Lance Taylor:** Well, I don't know. I think it's a good question. I guess I don't know. What would you think?

**Mat Ryer:** I think that we already have a space where we need to have a way to be able to talk about the quality of packages. There's a few good talks -- I've seen Julie Qiu did a talk about how to select dependencies in a conscious way, rather than just take anything from anywhere; have a look at the projects, see if they seem robust, see if they seem used, are there tests, how does the API look, how are the docs, all that... Taking all of that into account. That is gonna be more important, because it's gonna be too tempting, I think -- if generics got into the language, it's gonna be tempting and we're gonna see a big spring up of libraries doing all kinds of awesome things, and we're gonna then have a sort of abundance of this to sift through... That's a general problem I think we still have anyway in the community - knowing which of the dependencies we can trust and which are just more playgroundy-type projects that we shouldn't be importing and having as a dependency on our production code.

**Johnny Boursiquot:** \[44:07\] That's something I think the community is gonna work out naturally. I think a lot of the early practices that we've mentioned on this podcast alone in the early days - the abuse of channels, for example, jumping into concurrency and using all the bits and pieces you can, whether your program needs it or not... A lot of these things we've sort of worked out of our system, so to speak, and there's enough material out there to sort of educate - "Try to do this, avoid doing that, for reason X, Y and Z." Over the years we've developed what we call idiomatic Go, basically to adopt certain approaches.

I think yes, in the beginning you're gonna see an explosion of things that are using contracts, and using all the bells and whistles that generics offer, but I think you're gonna see a settling down once we've shot ourselves in the foot enough times to basically say "Well, this is now basically part of idiomatic Go, as all gophers understand it" kind of thing.

But what I am concerned a little bit about is newbies, folks that are either coming from different languages, or that are learning programming for the first time, and they happen to be using Go to do so - basically, how to teach that concept... Because it requires that you really think about different things in multiple layers, so to speak, to really understand where is this useful.

I think on the Go Blog, [the Why Generics post](https://blog.golang.org/why-generics) does a pretty good job of introducing "Okay, this is how you would do it today." You have to have a reverse for a string, a reverse for integers, and this is how generics can help you remove some of that boilerplate.

These kinds of things are gonna be critical for teaching people how to properly use these language features, and I think that's gonna happen naturally.

**Jon Calhoun:** For me, one of the examples I think of is all of the routers and web frameworks and things like that that have sprung up around Go... And I think it would be nice if there was something like -- there's the Gorilla toolkit, that has all these different web tools that you can use. At this point I think it's safe to say that they're all well battle-tested, they're all pretty good things to use. And having that for generics and some data structures I think would be useful...

But I also worry that you might get this case where we have 20 different implementations, we have 20 different routers that are all benchmarking against each other, and just focusing on the wrong details. So one hand, I do really hope the community figures it out and we come up with some sort of consensus... But I also see how we are on other fronts, and I'm not 100% confident that that's gonna happen.

**Mat Ryer:** Yeah... But that's not really a problem with generics, I suppose. That's a community problem.

**Jon Calhoun:** It's a community thing. I just hope it's not worse with generics. With routers, you'd think "There's really not that much you can make different." There's really not. But then with data structures, there's a lot of different things you can change.

**Mat Ryer:** Yeah, true. We'll just have to see, I think. One of the pieces of advice I like to give - and this is almost an unofficial test that we can apply to any suggestion of a change, actually... I'll tell people -- somebody talked about the confusion they have between arrays and slices, and I'd say "Well, just learn slices for now, and then you can be productive, and then later you can figure out what's going on and how it works under the hood when you need it." It's kind of just-in-time learning; it's sort of the best time to learn it as well, because you have all the context of why you need to know it.

So I'll tell people "Well, just don't worry about it." And if you can say "Don't worry about it..." Generics - the latest proposal definitely passes this test, "Don't worry about it."

\[48:04\] Like you say, a few cases when reading the docs you're gonna see these generic functions - they're gonna look a bit different, so you'll have to know how to invoke them... But especially the case where the type is inferred, where you can just sort of almost ignore that it's even generic in the first place. It has that going for it, so I think that will help, for sure, with this.

**Ian Lance Taylor:** I certainly hope so.

**Jon Calhoun:** So do you think we can make tools as a community that would make that more likely to happen? I guess what I'm thinking is - Mat, you had mentioned you don't wanna early-optimize, you don't want to try to make something a generic implementation before you've ever written it once... So if we had tools that made it very easy to take -- you wrote a self-balancing tree, and we had some way to easily turn that into a generic implementation after we've written the specific implementation for a specific type... Could tools like that help the community stay on track and not do that early optimization?

**Ian Lance Taylor:** That's an interesting idea. That tool would be pretty easy to write, I think. Whether people would find it helpful - I don't know. Yeah, maybe.

**Mat Ryer:** Jon, maybe you could contribute it.

**Jon Calhoun:** See, Ian says it will be easy to write. I suspect it would be much easier for him to write than for me to write.

**Ian Lance Taylor:** \[laughs\] Not necessarily.

**Mat Ryer:** Yeah, I don't know. Well, I probably would bet on that being the case, but yeah. I was also thinking about handlers and HTTP, what might happen there. And also, context - whether we're gonna see methods that will have a generic flavor to them, like the value stuff... I don't know if that will even work. Would it be able to just have a method that's generic, within a type that isn't, or...?

**Ian Lance Taylor:** In the current design draft, no. That's not permitted. And the reason for that is because it adds all this -- it makes it more confusing to understand when the type with the generic method implements an interface, or possibly a generic interface. We kind of got stuck on a lot of confusing issues there, and we just said -- it's not necessary, because you can always write a generic function instead, so we're just gonna leave out methods. It's not impossible that they could be added to the language in the future if we do understand it, but I don't think they're gonna be in the first version.

**Jon Calhoun:** I did have one question. In one of the examples you had a contract that was like the numeric value, or something like that, where it was basically all the different integer types and different numbers... I assume for things like that that sometimes looking at zero values is useful. Do you see that -- I guess what I'm wondering is how do you do comparisons with the constant values like that? Is that just gonna change the way the compiler looks at that, or is there gonna be something special there?

**Ian Lance Taylor:** No... I mean, again, it goes back to the different compilation strategies you can use. There's a couple of different ways that the compiler can handle it. From a language perspective I think it's pretty straightforward. If all the types that the contract permits permit a comparison with zero, then you can write a comparison with zero. As to how exactly that's gonna be compiled - it could be there's gonna be a limited number of types, and maybe you compile it for each type; or maybe you do a method-like approach, where you effectively pass in "Here's how you compare to zero." I'm not sure what the best solution is gonna be at compile time.

**Mat Ryer:** Well, I think that's all the time we have for today. Thank you so much to our special guest, Ian Lance Taylor, who is working on the generics proposals. Ian, you're doing a great job, I think; I especially do like the latest proposal. If you haven't seen it, check it out; it's all over the internet. And Ian's talk is also now available; if you search for "GopherCon Generics 2019", you'll find Ian's talk. And Johnny's talk too, and mine, but it would be crass of me to plug my own one... \[laughter\]

**Jon Calhoun:** Mat's never done something like that.

**Mat Ryer:** It's not my style, it's not my style. But my book is still available. \[laughter\] Okay... So yeah, thank you very much as well to my other panelists, Jon Calhoun, Johnny Boursiquot... Gentlemen, thank you very much. Until next time, goodbye!
