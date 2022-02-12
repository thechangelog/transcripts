**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about code generation. Hit it, Brian!

**Brian Ketelsen:** \[singing\] "Technical just makes me sick! So code generation always clicked. Write the code that writes the code... As long as you're not using Node. Talking 'bout code generation..." This is the part where I smash the guitar.

**Mat Ryer:** Brilliant. Smash it!

**Brian Ketelsen:** I've done that. I did that at GopherCon.

**Mat Ryer:** \[laughs\] Oh, yeah. Well, that was awesome. Thank you so much to Brian there. Now, let me do proper introductions. So - you heard him already... A very early Go adopter, co-author of Go in Action, and co-creator of GopherCon, and actually, one of the original cast of Go Time. It's only Brian Ketelsen. Hello, Brian.

**Brian Ketelsen:** It's only me. I'm OG Go Time.

**Mat Ryer:** Yes. Welcome back.

**Brian Ketelsen:** Thanks. It's a little bit surreal being here.

**Mat Ryer:** Yeah, it has been so far.

**Jon Calhoun:** All this guitar playing and you don't mention that he's in the Gopher Band?

**Mat Ryer:** Oh, of course.

**Brian Ketelsen:** It's true. A founding member of the GopherCon Band.

**Mat Ryer:** Hm. How did that come about?

**Brian Ketelsen:** Well, we were thinking about ways to entertain people at the first day after-party, and I thought it might be a fun idea to get a karaoke backup band, so that we could just have like one or two gophers at a time singing or playing an instrument while the band backed us... And it very rapidly devolved into us being a whole band, and we hired some professional musicians to step in if we just didn't have enough people for a particular song.

**Mat Ryer:** It was great fun. And of course, in San Diego the Gopher Band played on a...

**Brian Ketelsen:** On a carrier.

**Mat Ryer:** Yeah, aircraft carrier.

**Brian Ketelsen:** Yeah, that was pretty awesome.

**Mat Ryer:** That's quite a gig...

**Brian Ketelsen:** Yeah, although I would have to say that probably the tamest year for crowd participation. People were busy looking at airplanes and not so busy thrashing with us. It's a little sad.

**Jon Calhoun:** I feel like it would have been hard to claim that as a business trip, when they look at it and they're like "You were clearly at a rock concert, on stage. That's not business."

**Mat Ryer:** Yeah, on an aircraft carrier. You can't offset that with your tax. Well, I should also introduce -- we're not here alone; you've heard his voice already - Jon Calhoun is also here. Hello, Jon.

**Jon Calhoun:** Hey, Mat.

**Mat Ryer:** Welcome back, mate. How are you?

**Jon Calhoun:** I am doing well.

**Mat Ryer:** Good. Good quality chat as usual, Jon. We're also joined by Kris Brandow. Hello, Kris.

**Kris Brandow:** Hi, Mat. How are you?

**Mat Ryer:** I'm very good, thank you. Welcome back. What's been going on?

**Kris Brandow:** You know, just life; enjoying February, in the North...

**Mat Ryer:** \[unintelligible 00:05:31.08\] I've heard that phrase before... But well, that's great. I'm really excited about this episode, because we're talking about a subject that I'm really interested in... And that is, as we've heard from our excellent opening song, code generation. So for anyone that doesn't know what code generation is, who wants to take a stab at explaining what we mean by code generation. Aren't we all generating code all the time?

**Brian Ketelsen:** Code generation is writing code that writes the code.

**Mat Ryer:** Ooh... Isn't that a bit dangerous, Brian? Sort of getting into terminator territory?

**Brian Ketelsen:** Well, it's a little bit like Barry Manilow writing the songs that make the whole world sing... I write the songs... I write the songs.

**Mat Ryer:** Yeah. So a program that writes programs. So why wouldn't we just write the programs? What's the advantage of doing it in that strange way?

**Jon Calhoun:** I like to imagine this all started when somebody had a manager who gave them raises based on how many lines of code they wrote, so then like, "I'll write some code that would write some code, and then I'll get a big raise..."

**Mat Ryer:** Oh, clever. I did actually once get lines at school, and they let me do them on the computer... So I just copy and pasted and printed out the lines, and they accepted it. Because I don't think they knew how copy and paste worked.

**Brian Ketelsen:** Nice.

**Mat Ryer:** Yeah. So maybe it was something like that.

**Brian Ketelsen:** Now, when you say you got lines, does that mean you were forced to write out a sentence manually...

**Mat Ryer:** Yeah...

**Brian Ketelsen:** \[unintelligible 00:07:02.28\] Bart Simpson on the board?

**Mat Ryer:** Yeah, sorry, that's what we'd call it, "we'd get lines." You have to just repeat something, some lesson.

**Brian Ketelsen:** Where I grew up, getting lines meant mirrors and razor blades, and I don't wanna confuse people...

**Mat Ryer:** Okay, yeah. Well, I'm not as rock'n'roll as you, Brian, obviously... \[laughs\] Okay, so - programs then that write programs... What's some good use cases for that? What sort of problem does that solve for us?

**Brian Ketelsen:** My favorite is when you have a pattern that you want to apply to a problem set, and you need to do that over and over. You need to treat a particular resource a certain way. And it's gonna be the same for all the resources. There isn't exactly a generic way to do it, but it's such a cookie-cutter approach that you can write some metadata and then use that metadata to introspect the problem domain and then generate code.

**Mat Ryer:** Yeah. I've used it before I had a data structure, and obviously, Go doesn't yet have generics, but... I had a data structure -- I wanted to support multiple types, and I wrote a little program where I could just give it the array of types that I wanted to support, and it would generate the code for each type. So I got strong types, but I didn't have to write out every version of it.

**Brian Ketelsen:** I mean, *go generate* is the only generics we need in Go.

**Mat Ryer:** Hm.

**Jon Calhoun:** Oh, boy. We're already starting that.

**Brian Ketelsen:** You said "Come armed with an unpopular opinion", there's mine - we don't need generics in Go. Generics make Go harder to read, and they're going to decrease my quality of life as a Go programmer. There's my unpopular opinion. Tweet that up; put it on Twitter, that's my unpopular -- generics will decrease my quality of life.

**Mat Ryer:** This is sort of rockstar -- I'm struggling to deal with the rockstar. We've got a dedicated segment for unpopular opinions. \[laughter\]

**Brian Ketelsen:** I do things the way I wanna do things. I'm OG Go Time.

**Mat Ryer:** Well, we're here to learn... \[laughs\] Okay, interesting. So do you prefer code gen then to generics?

**Brian Ketelsen:** Very much so, yeah. I love code generation. I think it's a great way to solve many problems... Not every problem can be solved with code generation, but a lot of times you find yourself in a position where you have to do a similar set of things for a similar set of resources, and code generation is a great way to make sure that that problem is solved consistently.

**Jon Calhoun:** Without getting into the generics stuff - for me, code generation probably first popped up when I was looking at things like APIs where people connect with different programming languages... And Swagger is probably one that everybody's heard of at this point, and probably the ideal use case for code generation is you have this API that you communicate with JSON and HTTP, and nobody wants to go write a library... Like, if you're a company and your whole company is written in Ruby or something like that, you don't wanna have to go write libraries so other people can connect to your API in every language under the sun, that you probably don't know much about. So code generation is like an awesome tool for that type of use case, too.

**Mat Ryer:** Hm.

**Kris Brandow:** Protobuf uses code gen... I think in general serialization - if you want it to go fast, that's a really good use case for code gen... Because you can do it with reflection, and I don't think generics was really gonna replace any of that... But if it's a core part of what you're doing is serialization and deserialization, then having code gen can make it far easier and far more maintainable to write and maintain that code.

**Mat Ryer:** So you can have a struct with proper typed fields in there, and they can be set directly, because you sort of know in the meta sphere what those fields are. You don't have to do reflection and other types of magic to wire that up, that kind of thing...?

**Kris Brandow:** Yeah, yeah. So in a marshalled JSON or unmarshalled JSON, instead of throwing it into the encoding JSON library, it's like "Hey, go use a bunch of reflection and figure what all the field are, and then translate the names", you can just generate the direct code that will generate the JSON for you, and that is much, much faster than a reflection... But also a specialized use case, most of the time; the cost of reflection there is not the bottleneck of your application.

**Mat Ryer:** Yeah. I find one problem that we have with code generation is that the code that gets generated tends to be quite ugly and difficult to read. It's almost like you either have nice templates that you can read and maintain and manage, or you have nice output. I feel like there's a trade-off between the two. Has anyone found that?

**Kris Brandow:** I don't think there has to be though...

**Jon Calhoun:** It used to be worse... Have you used it recently, Kris? Because there was one point in time where it was really hard to remove white space, and I think all the templating libraries in Go have added directives to make that possible now... But I know there was a time where Mat was completely right, that doing that sort of thing was really hard to do, because white space essentially just caused issues.

**Brian Ketelsen:** Yeah. Step one was generate code, and step two was run go format.

**Mat Ryer:** Yeah. If you're generating Go code, absolutely.

**Brian Ketelsen:** If you're generating Go code. But there is a package out there by a gentleman named Dave, on github.com/dave. The package is called dst (decorated syntax tree), and it is truly the most elegant solution I've ever found for generating beautiful code.

**Mat Ryer:** Brilliant... Yeah, because this is a gap, I think, in the standard library. There are packages in the standard library, and they've added new ones too, to make it easier... But they're so difficult to use, because I guess they're the tools that the Go build tools use, and so they're kind of all-powerful... But they seem really low-level and quite difficult to get your head around. You have to do value, value, and it's kind of like reflection, isn't it?

**Brian Ketelsen:** Yeah... Don't love that so much. Reflection isn't the easiest thing to do as a Go programmer. It's fraught with peril.

**Mat Ryer:** Yes, and we avoid it where we can.

**Kris Brandow:** I think the big thing that the dst package also brings is proper attachment of comments to items in the syntax tree. I think that's the biggest failing of the AST package within the standard library, is that you just lose all of your comments... They kind of just dangle all over the place.

**Mat Ryer:** Yes, that is a problem. Does the dst package actually maintain comments, Brian, do you know?

**Brian Ketelsen:** Yeah, it does. That was the biggest selling point that Kris mentioning, is that it will keep your comments and put them back in the right place, even after it's parsed the syntax tree.

**Mat Ryer:** Yeah, so that's great. So that's like we're using Go code as the source data, which you don't always have to do in code generation, I suppose... And also, the Go templates - you can use those. So just for anyone that hasn't done this yet, it really -- code generation is anything that outputs some code... But more specifically, if you use Go templates, the text one usually, a common mistake is to use the HTML template, and then you end up with kind of HTML formatting happening in your code, which you don't want, probably...

So you'll take some source data from somewhere, which could be Go code, and then you mix that with a template, and then you can generate Go code. That's one way to do it. Are there others?

**Brian Ketelsen:** But it doesn't have to be Go code that you generate. You can generate all kinds of things. Generate SQL statements based on a Go structure.

**Mat Ryer:** Right.

**Brian Ketelsen:** You could generate anything. And in fact, I gave a talk at Abstractions, the first Abstractions conference in Pittsburgh in 2016 or 2017, called Generate All The Things. Do you remember the meme with the really awkward-looking tech guy with \[unintelligible 00:15:09.03\] That was me. Generating all the things. That's the harder part, too.

**Mat Ryer:** Hm. Is that still available?

**Brian Ketelsen:** You know, it probably is. I'll dig up a YouTube link for it, see if there's a link for it.

**Mat Ryer:** Yeah, we'll put that in our show notes.

**Brian Ketelsen:** But that talk was specifically about my intense love, my burning passion for having a DSL as a source of truth for your systems, and generating the code from that source of truth. So if you want to know information about a type, you look at the DSL. If you wanna handle that type with Ruby code, you generate Ruby code to use it, or you generate C\#, or Go, or database code, or whatever... But that DSL is a system of record for all of the information in your enterprise.

**Jon Calhoun:** I have a question for you - we've talked about this several times on the show, where in languages like Ruby or any dynamic language you can dynamically catch if a method is missing, and then you can add code. Do you consider that code generation as well, or does it have to be something where -- in Go you actually have to spit out some Go code that can be compiled, because that's how Go works. So do you differentiate between the two, or do you kind of consider the two similar?

**Brian Ketelsen:** Well, I would say code generation you're writing new code, and in Ruby, using something like method missing - that's more meta programming... Although they're really close cousins, I don't think they're exactly the same... But they're similar. If we have time at the end of the show, remind me to tell you about how method missing cost the state of Georgia seven million dollars.

**Mat Ryer:** Yes... That's definitely going in. \[laughter\]

**Kris Brandow:** I do have to say, when it comes to code generating, specifically when you're trying to generate Go code, I feel like the text template package is actually kind of bad for that, and it's better to write actual Go code and then use the tools we were talking about to parse it, and then kind of manipulate it that way and stamp it out... Because then, when you're actually writing the template, you're writing real Go code, so you get syntax highlighting, you get formatting that's really nice, you get compile errors, and all of that nice stuff... Whereas when you're just working with text templates, it's a little bit wonky.

**Mat Ryer:** So how do you do loops and things in that then, if you're gonna iterate through a set of data? How do you do that in the Go code?

**Brian Ketelsen:** Um, for range?

**Mat Ryer:** Okay...

**Kris Brandow:** I mean, since it's just like the templates, too - you're just taking the templatized code. You usually have to wrap it in a function or something, but you're just like pulling out the guts of a function, and then your IDL or whatever will specify and you'll have the glue code that will be like "Okay, now you need to stamp this thing out within this function multiple times, or within this domain multiple times." It does look a little bit different than what templates look like, since you don't have that kind of in-built looping and variable assignment... But I think that can also help make it a little bit cleaner, because then you're kind of separating things out a bit more, and your templates can just be like "This is the prototype of what I want the code to look like."

**Mat Ryer:** Yeah, that's great.

**Brian Ketelsen:** That same person Dave, who wrote dst, also built an application called Jennifer... And Jennifer builds on top of dst to help you generate code - hence Jennifer. Because what's a programming application without a great punny name? And Jennifer is my personal favorite tool for generating code, because it builds on top of that dst, and it lets you write functions based on the occurrence and order of syntax in your AST. So you're parsing your syntax tree and you find this particular Node, you can write a function that generates code based on the state of your current tree... And it's really, really nice.

**Mat Ryer:** That is cool.

**Brian Ketelsen:** It's the cleanest generator I've ever seen.

**Mat Ryer:** So how does that look when you're writing the code? Do you literally have types like functions, and there's some kind of DSL/build-a-pattern type API or something like that?

**Brian Ketelsen:** Yeah, it's really just types and functions. So you've got your AST, and you do some sort of walk. There's always a walking function, where you walk the AST, and you build up state... And as soon as you hit some sort of desired state - you've got the right number of nodes in your tree - then you trigger a function that generates code, because you have enough state. But those functions are things like ast.createFunction.

**Mat Ryer:** Right.

**Brian Ketelsen:** And each of those also takes a function as one of the parameters. So you have these nested functions. It's a very powerful paradigm, but it can be hard to follow. The first couple times you do it, you kind of tilt your head sideways and "What the hell?"

**Mat Ryer:** Yeah. So it takes a bit of getting used to. But any of this meta programming is a bit like that. It's a bit like Inception, where you've gone into someone else's dream, isn't it?

**Brian Ketelsen:** A bit, yeah.

**Mat Ryer:** A little bit.

**Brian Ketelsen:** A little bit.

**Mat Ryer:** Yeah, a little bit.

**Kris Brandow:** I feel like the reflection package is a lot like that, too... The first few times you use it, especially when you're trying to do something clever, like calling a function, and you're just kind of like 'What's going on? I'm very confused about what I'm supposed to be doing here."

**Brian Ketelsen:** You're trying to call a function on a pointer type of a struct, or an interface... \[laughs\] Have fun.

**Kris Brandow:** Yeah... And it's like, "Oh, I have these values, but I have to turn them into reflect values... How do I do that?" It's confusing at first, but I also feel like once you understand the reflect package, there's a certain class of code that you can just write, and it becomes so much easier. I've found there's tests that I've written where I would have had to have hundreds of lines of more code to express them, but since I know how to use the reflection package, I just sat down and wrote them out, and it was like 30 lines of code... And now I can run basically any type of function that I want, and assert values, and all of this stuff.

**Mat Ryer:** Yeah, the problem is you don't know it's wrong until you run it... Because of course, it's abstract. So it's not like you get the compiler to help you check the things you're doing make sense. There's a lot more runtime in reflection. But I like writing tests, so it's not so much of a problem.

**Brian Ketelsen:** You like writing tests?

**Mat Ryer:** I love it. Actually, sometimes that's all I do.

**Jon Calhoun:** It sounds pretty boring if they're all failing.

**Mat Ryer:** \[laughs\] Good point.

**Jon Calhoun:** I would definitely say that my experience with generation is kind of similar to my experience with reflection as well, in the sense that -- Mat, you were saying you don't know that a reflection is wrong until you run it... But I honestly felt like with generation I was almost in a similar boat, where I had to actually run it knowing what I wanted is the output, to see if it did it... And sometimes it was just because I didn't understand something was happening...

**Mat Ryer:** Yeah.

**Jon Calhoun:** But once you get it, it's easier. It just took a little bit to actually make sure you grasped everything correctly.

**Mat Ryer:** Years ago I wrote a package with a friend of mine called Jenny... And they're not to be confused with Mark Bates' package Jenny from Go Buffalo, where he just - as far as I can tell - stole the name from me... But luckily for him, I'm not very litigious. But we'll see. If he keeps texting me the things he texts me, maybe that will change. Anyways, this package did what you were describing, Kris, where there was a special type. So it was real Go code, and it was just like an interface type, but it had a special name... And then the tool would process that, and then you were able to replace that type with other types. So it's kind of like generics, very lightweight generics. It's still used by people, but I don't know... But that's kind of a nice way to do that, because then, like you say, the real code, the source code, the template is real code.

Is there anything you can do to help yourself in that way? Go fmt is a great one is a great one if you're generating Go code... Although I suppose if you're using that dave/jennifer package, it probably formats it for you, doesn't it?

**Brian Ketelsen:** It does, yeah. It outputs code in the right format.

**Mat Ryer:** Yeah, that's brill. Some people put code generation as part of their continuous integration build. I prefer it to be a developer time exercise. How does everybody feel about that?

**Brian Ketelsen:** Ooh, the can of worms is open... \[laughter\]

**Mat Ryer:** Are there any good cases for putting it in the CI? Because I feel like you wanna run the tools to generate, and then run your tests, and then you push it, don't you? What's the use case for having the continuous integration generating code?

**Brian Ketelsen:** Salt and pepper push it? \[laughter\] Yes... Come on now. You guys aren't that young. So I would say that the biggest case against developer-side code generation, checking in generated code, is the fact that you don't have any control over the tool you use to generate the code. If you're using version 1.2 of the code generation, but you're expecting 1.4, then nobody will know that until some point later on... And using your CI environment to create a known good code generation would be the antidote to that problem.

**Mat Ryer:** Yeah, interesting.

**Brian Ketelsen:** I don't know... You could easily play either side of that fence.

**Mat Ryer:** Yeah. Actually, I've been playing around with Codespaces on GitHub, and that essentially gives you a VS Code virtual environment... And you can, just by specifying a Docker file, you can actually install all dependencies, and things like that. So that's a really interesting idea, to have these controlled dev environments. It would address that particular problem.

But what about go generate? Because go generate is a command that you have to run explicitly; go build doesn't run any go generates. Maybe we should just take a minute to explain what go generate is, for anyone unfamiliar.

**Brian Ketelsen:** We should take a minute for that. So go generate is another magic comment, yet another magic comment (can we put that in magic emphasis?), yet another magic comment in Go code that does something...

**Mat Ryer:** Yeah, we'll flash it on the screen.

**Brian Ketelsen:** ...non-programmatic, that specifies a command to be run when a file is triggered by go generate. So you type go generate from the command line, and any Go code that has the go generate comment will run the command after the go generate comment. And that comment doesn't have to be related to Go. It quite literally can be any shell command for your computer. So you could say "go generate spotify open playlist" and everytime you run code, it will open Spotify and play Guns N' Roses. So go generate is literally just a trigger to cause a thing to happen.

**Mat Ryer:** Yes... By the way, everyone's gonna be doing that now, aren't they? \[laughs\]

**Brian Ketelsen:** Why wouldn't you.

**Mat Ryer:** Yeah. They'll probably play that song. Or play your song, probably, from the opening of the show...

**Brian Ketelsen:** \[singing\] Talking 'bout code generation...

**Mat Ryer:** I'd love that to pop out of my speakers everytime I'm doing that...

**Jon Calhoun:** Everytime you're building...

**Mat Ryer:** Yeah. Could you do like a whole album, and we could have one for failed tests, and...?

**Brian Ketelsen:** Sure, sure.

**Mat Ryer:** You could do the whole set.

**Brian Ketelsen:** You've got Sweet Child O' Mine covered, so I'm not sure if there's enough room for the two of us in this industry. I bow to your superior capabilities.

**Mat Ryer:** Oh, no. No, no, no. Okay, so are there any common gotchas or something that we should look out for when it comes to generating code?

**Brian Ketelsen:** Absolutely. Tests - 100% required. If you're gonna generate code, then you need to have known inputs, and expected outputs, and test against those as a unit test... And then as integration type test, a broader test, test that the code that you generate does what you expect it to do as well.

**Mat Ryer:** And would you say not to generate the test code?

**Brian Ketelsen:** I actually love generating test code... So the question is "The test code that you generate actually tests your code?" Who watches the custodians? I don't remember the Latin key custodian...

**Mat Ryer:** Who watches the watchers.

**Brian Ketelsen:** Who's watching the watchers.

**Mat Ryer:** Yeah.

**Jon Calhoun:** So to make sure I'm getting this right, you're saying that you've enjoyed generating both -- the code is gonna do whatever you need it to do, plus generating tests for that code. I just wanna make sure we're all on the same page.

**Brian Ketelsen:** That's correct.

**Jon Calhoun:** Okay. That's something I've always sort of -- it's not that I've been against it, it's just that I've always, I guess, veered away from it...

**Mat Ryer:** Why?

**Jon Calhoun:** It almost felt like I wasn't actually -- how do I put this?

**Mat Ryer:** Don't worry about offending Brian.

**Brian Ketelsen:** Yeah.

**Jon Calhoun:** I'm not trying to offend--

**Brian Ketelsen:** Yeah. I could care less.

**Jon Calhoun:** It felt almost like those tests never actually failed or told me anything useful at the time I was doing it, so I kind of just stopped doing it at the time.

**Brian Ketelsen:** That's the bonus of code generation, because you generate code that works, because you've extracted it out of a pattern that already works. It's not like you start generating bad code, and then you catch it by writing a good test. I always start -- actually, I shouldn't say you, because I don't know what you do... But I always start with a pattern that I know that works, and then I abstract that into code generation. And once you have that, then you can write your tests against it, and you can generate them.

**Mat Ryer:** Yeah, I feel like those meta tests, the ones that you're talking about, either you're testing the source thing, the original thing, or those integration tests; I feel like they're extremely useful.

It's very satisfying when you start doing code generation and you see it working with just one bit of data, one input, and then you just add all the data and you suddenly just see all this code being generated... It really is very satisfying, whether it should be or not... Don't you find?

**Brian Ketelsen:** Oh, very much so. A moment of eye-openingness... What do you call that? My a-ha moment for code generation was when I stumbled across Goa in 2016 or 2015 (I don't remember). And Goa is interesting because most DSL's that you find in the programming world aren't written in Go. Go is not an easy language to use to write DSL. You can use Go structs as the source of your code generation, but actual Go code functions - not pretty. Ruby? Python? Beautiful languages for writing DSLs. But Rafael, who wrote Goa, found a way to build DSLs that was elegant.

And when I saw that, I immediately demanded in my open source friendly sort of way that he take the template engine, the DSL engine, and make it generic, so that it wasn't just Goa that you could write DSLs for... And he said "Pull request speak, baby." So that was the first thing I did - I took the DSL engine and made it generic, so that you could create any DSL with the DSL engine for Goa... And that was it. I was so sold at that point. Because you're writing what looks like a DSL, you're describing your system, and that builds a syntax tree that then executes code that writes code for you. And that code can be anything. You can go from the gamut of writing SQL IDL files, all the way across the spectrum to writing Kubernetes deployment manifests, with the same DSL. That's brilliant.

**Mat Ryer:** Yeah.

**Brian Ketelsen:** Why wouldn't you do that if you could?

**Jon Calhoun:** I think that's probably the big appeal for any code generation. Mat, you've mentioned Oto before, and you use that to generate both Go side code and JavaScript code to connect to it... And just having that idea of the developer only has to do something once is very appealing. I suspect that's also why, when we look at code generation, there are several tools out there for generating basically models to connect to a database... And I think that's appealing to a lot of people, because they think "I don't wanna write all this code that connects to the database."

And I know people have mixed feelings about using something like that versus not, but it is by far one of the more common use cases I see, and I think it's because people are just attracted to that idea of "I only have to define this stuff once, and then all the other code for it is generated."

**Brian Ketelsen:** Jon opens that ORM can of worms early in the show today. \[laughter\]

**Jon Calhoun:** I mean, it had to come up at some point... And the ORMs generally take two approaches when they're generating code, of either "Go is the source of truth" or "SQL is the source of truth." And I think that's probably one of the bigger can of worms to get into, as to which one's right and which one's gonna cause you more problems down the road.

**Brian Ketelsen:** Mm-hm.

**Mat Ryer:** What's the answer then?

**Jon Calhoun:** Personally, I guess it just depends. I've found more luck with things -- I think sqlboiler is one that takes the SQL and generates the Go code... And I've found more luck with that type of approach most of the time... But there are definitely cases where the opposite is easier. For instance, if you're taking somebody who's new to developing web applications and they've gotten some Go down, at that point it's probably easier to use one that takes the Go and generates whatever it needs for the database side, because they already get what the Go is... But it really just depends on the team and what you're doing in that sense.

I've definitely seen cases where if you have the Go stuff defining what the database is, and then some migrations or changes can be kind of tricky to express correctly for some people, or it's easy to have some weird bugs like that, where the Go code changes and the SQL doesn't necessarily change the way you need it to to reflect that... But I don't know, I don't wanna get into the ORM can of worms. I have mixed feelings about them. They're definitely a tool that I've found use for, but most people seem to hate them in the Go community, for whatever reason.

**Brian Ketelsen:** You know, there's no shortage of opinions in the Go community, which is really strange... Most communities don't have any opinions, but the Go community is full of them. \[laughter\]

**Mat Ryer:** Yes... And we're also cordial to each other, too.

**Break:** \[33:51\]

**Mat Ryer:** There's another interesting use case I've seen for this... Ernesto Jiménez did it in Testify. There's two packages in Testify for assertions. There's the Assert package, and then there's the Require package. And the only difference is one will fail immediately, and the other - you kind of carry on and collect failures up and present them all in one Go. And a lot of people prefer tests when they fail to just fail at the first thing, and then you can just address that, and then work in that way.

That Require package is generated from the Assert package, so it kind of guarantees that the two APIs are the same, or similar enough, or different in the same way; I'll think of what the correct way to phrase that is later, and we'll edit it in. But I thought that's quite a clever --

**Brian Ketelsen:** Orthogonal?

**Mat Ryer:** Yeah, thank you. I didn't do computer science, so I don't know what I'm talking about. Yes, that one. It's a nice use case, because in that sense, you want to carry over the knowledge from one of those packages to the other and use them interchangeably... So I thought that was quite a clever way to do that. What do you think about that?

**Brian Ketelsen:** Yeah, brilliant.

**Mat Ryer:** We can't all be winners.

**Jon Calhoun:** I mean, it sounds like a good use case...

**Brian Ketelsen:** Brilliant. Thanks, Chris. We appreciate your opinion. Good stuff. \[laughter\]

**Jon Calhoun:** One of the interesting things for me about code generation is that I feel like you see a lot of -- like, Mat's defining a case where you had one set of code, and basically it sounds like you didn't wanna have to write it twice, which makes sense... And the simple solution was just "Well, I'll just generate the second version."

Another approach to that would be to take the code and abstract it away, so that you have one thing that can be used in both cases... But at the same time, that requires some work, so it's interesting how people use it to solve different problems. It's not like it's the only solution, but it's definitely a solution to the problem.

**Mat Ryer:** Yeah.

**Brian Ketelsen:** Yeah, I feel like code generation is one of those things like SQL normalization; you've got n levels of normalization in SQL - third normal, fourth normal, fifth normal form... Code generation is kind of the same way. Level one of code generation is taking this template and plugging in a variable here or there and spitting out some code. Level two is maybe throwing some f loops and some statements in there... And you get all the way up to level five - you're introspecting the whole system, determining the needs of the many versus the needs of the few, and generating all the other code that needs to be generated... That's a different level of code generation, a different plane.

**Mat Ryer:** Yeah, that's true. Have you ever seen code that generates code that generates code? That sort of...

**Brian Ketelsen:** I've written -- Aaron Schlesinger and I wrote code that generates code that generates code...

**Mat Ryer:** Wow...

**Brian Ketelsen:** And it was a lot of fun.

**Mat Ryer:** Wow. Is that easy? Is it difficult to follow?

**Brian Ketelsen:** It just takes a lot of iteration and patience. I wouldn't say it's hard, because it's not harder than writing any other code; it just takes a lot of time to build up small layers of success, so that you can have bigger layers of success.

**Mat Ryer:** Yeah.

**Kris Brandow:** Lots of mental gymnastics in that too, to figure out which layer you're sitting at... As you're generating, you're like "Okay, wait, am I doing this correctly? Am I in the right spot? Am I thinking about this in the right mind frame?" I think that is one of the big challenges of generating code... It's not actually writing the code gen itself, but just wrapping your mind about what you're trying to do, because it is so much more abstract than just writing out code by hand... Which is also what makes the Reflect package also very complicated to use, because you're not using the same utilities and handles that you're used to using when you're writing Go code.

**Brian Ketelsen:** That was the big pull for me from Goa, because I was writing a DSL about my expectations of what I wanted when I was done. I want a web service that listens on port 8080, that exposes this API with this resource, that has these methods, and it returns these fields, and it expects this authentication. There's nothing in that about how I'm gonna do that; there's nothing that says "I'm gonna use go-kit, I'm gonna use this middleware here." I'm just writing my expectation, and then the code generator does some stuff, and hopefully the code generator meets my expectation. But if it doesn't, I can change the code that's generated until it does. That was the power of expressing what I want. It's like test-driven development when you think about it. You've written your desired outcome first, and then you just keep writing code until it's green.

**Kris Brandow:** I think that IDLs and DSLs are a kind of unexplored space... Not just in Go, but across the industry, where there's not a lot of emphasis and effort put into designing good, standalone IDLs, but I think that's also crucial to using code generation well... Because I know in the past when I've tried to write some code generation, I'd usually start with "Oh, I'd like to just use Go, and then decorate a struct with a bunch of stuff", and I've always wound up at just "I should just write a custom IDL or DSL in some serialization format, and then just use that as a source of truth", because now I'm getting all of this stuff mixed in, of like "Okay, I have to parse this package now, and look for this special Go type, and then introspect it, and then generate code based off it." It's like, just read in an IDL file and then use that to generate everything. But I feel like when you get into that realm, you're getting into the "Okay, now I either have to pick up a serialization format that exists, like YAML or JSON, or I have to go write a parser", which is getting in even deeper if you wanna have a truly customized IDL that you can use.

**Brian Ketelsen:** The question is how deep do you need to go? I mean, do you have to write a parser? Do you have to write your own IDL? If there's one small problem and you just need a little bit of metadata, then throwing a struct in Go and then inspecting that - that's the solution. Even though it's the cheapest and easiest way to do it.

**Kris Brandow:** Yeah, absolutely. I think there's definitely levels to this, where it's like - if you're making, say, a stringer, which takes a number of enumerated things and then makes the string output for them \[unintelligible 00:41:35.26\] I think for that it's relatively simple and straightforward, and you don't need an IDL. But I think when you start to get into the really bigger code generation systems, I think it is kind of good to shift away from trying to shove everything into Go. I think there's a point where you start really feeling that friction, when you're like "I don't think that this is quite right", and I think that's the point at which you should make the job. I don't think you should really start with designing your own IDL or DSL or serialization format. I think those are things that take a lot of time and expertise to do, and you don't wanna be learning that while you're also trying to figure how to do code generation well. I think you have to take your steps.

But I think that it's a very important thing to recognize that at some point if you're doing a lot of heavy code generation, what you started with - you're gonna outgrow it, and you're gonna need to do something different, and just be prepared for that.

**Brian Ketelsen:** Yeah. It's one of the most fun things and rewarding things I've ever done as a programmer. So I would absolutely recommend start as small and simple as you want to, even if it's just a tiny little template that you're using to generate other code... And just grow with it. It's fun.

**Jon Calhoun:** I feel like both meta-programming and code generation to me always felt like I was cheating, or pushing the limits of what I was supposed to be doing... It's almost like I had to be secret about what I was doing, because it's like "If other people see this crap I'm pulling, they're gonna be like "What is this guy doing?"

**Mat Ryer:** Really, it felt naughty?

**Jon Calhoun:** It felt kind of naughty in some cases, because you're doing these things that are well beyond just writing your traditional code, of like "Oh, I can see exactly what it does." When you're generating code, it's this weird -- I don't know, it felt kind of naughty for some reason... But it was also really cool, seeing how you could push the limits of what you could actually achieve, and trying to ask yourself "Well, can I do this?" And sometimes, at least for me, I wasn't that productive some days, because I would go down some rabbit hole just to see if I could do something. Not because I needed to, but because I was like "Can I do this?"

**Mat Ryer:** Yeah, but that's alright. I think you're a good boy for doing that.

**Brian Ketelsen:** \[unintelligible 00:43:42.11\]

**Kris Brandow:** I think that's actually something we need to do more of, really. I think the only way you can really acquire these skills is by going through and actually practicing them, and actually using these libraries and packages. And if every time that we have a small problem we're like "Okay, I could solve this with a reflection, or I could solve this with code generation, but I could just write these 150 lines of code by hand and it will solve this problem now" - if you always choose to write the code by hand, then you'll never have the skills to actually use these packages. So when you come into a big problem where you do need these heavier tools, you're just kind of stuck or you're lost, or you're just gonna take up an exorbitant amount of time going through and not using these tools.

I know that multiples times in my career I have been able to lean on my ability to use the reflect package in Go to save myself tremendous amounts of time and tremendous amounts of stress... But that's only because I sat down and actually pushed myself to use the Reflect package, even when there could have been better solutions, or it wasn't gonna give us huge gains... And I think that's something we as software engineers need to get a bit better at, is not trying to always optimize for right now. I feel like we do a lot of that, and I feel like that's usually the argument against this type of exploration. It's like, "Well, you could have saved four hours if you just hadn't done that thing", or "We could have saved some time if you just hadn't gone through and done that exploration." And I think that also kind of pulls us back into this frame of overly-focusing on code.

I think what you said there, Jon, about it feels like you're cheating - I think it adds a lot of color to how we as engineers approach what we do; we focus a lot on the code, we focus a lot on the actual work output there... But I think software is about so much more than code - we have to write design docs, and specifications, and all these other things... And I think the more that we start to pull ourselves away from the intense focus on code, the easier it'll become not to only do these code generation/reflection-based things, but also to get to the more promised land of writing more comprehensive design docs that can solve bugs and solve problems before we've even written code and we have some maintenance nightmare to deal with.

**Brian Ketelsen:** I like to look at it this way - I am so lazy that I'll spend three weeks writing a code generation system so I don't have to spend two days writing repetitive code.

**Mat Ryer:** Yeah. I feel that's a fair point. It's funny - this idea of doing experiments, and stuff. If you're in an environment where you're constantly late, the projects are constantly late... Usually, because people in the past - including yourself sometimes - have estimated it and you're just wrong, because it's really difficult to estimate accurately... And so for no good reason really you're just late... And then there's no room for those kinds of experiments, and things. So I think it also falls to managers and tech leads and people to make sure that there's space in teams for people to do those kinds of experiments... Because you know, one definition I've read of creativity is making connections that weren't there before. And the more fuel you can give that process, the more opportunity for creativity there is. So it's something I believe in a lot. Unfortunately, it's quite rare...

I speak to people -- I've been quite lucky, but I speak to people where they're just always late, everything needs to be done quickly; there's no time to do an experiment to see if the Reflect package is gonna be interesting... And also, if it then isn't the way you end up doing it, some people see that as then a failed experiment, which it's not. In science you only really learn from things when they go wrong, when they fail; you learn a lot from them if they do.

We have a tweet just come in -- not just come in; I'm just trying to make this feel more live...

**Brian Ketelsen:** Way to add the drama, Mat... Thank you. BREAKING NEWS!

**Mat Ryer:** Breaking news! This just in, from someone who's using them. It's very apt, it's gen20. James Nugent says "To commit or not to commit." More of a discussion point, probably... The first half of that was more Shakespearean than the second half... But what do we think? Do you commit your generated code or not?

**Brian Ketelsen:** Well, it's this discussion we've started with, right? Do you do it at the developer's desk, or do you do it CI?

**Jon Calhoun:** I feel like a lot of this just depends on the workflow you're working with, because -- I can give you an example. I use Tailwind all the time, and it generates a massive CSS file of all this stuff... And committing that big thing doesn't really make sense half the time, because anybody who's running the app locally - like, if I have a React app, the toolchain is set up to automatically generate that anytime a file changes.

**Mat Ryer:** Right.

**Jon Calhoun:** So at that point, committing that just doesn't make a lot of sense. Now eventually, if you're deploying, you have to commit whatever the cleaned up version it is that you're shipping with... But for the development side, I would say there's no reason in the world to commit that. But on the other hand, if you're generating -- I don't know, it's almost like if you have a library... Like you were saying, Testify, and they generate code. Well, they pretty clearly have to commit that; somebody has to commit that at some point. Now, where and when it gets committed is kind of up in the air I guess, whether it's your CI tool or developer... But it definitely depends on your flow of how things get generated.

**Mat Ryer:** Yeah. If you need it locally, you will always generate it locally probably, because otherwise -- that's like fire and forget.

**Brian Ketelsen:** If you didn't need it, why are you generating it at all?

**Mat Ryer:** So yeah, you do need it locally... And yeah -- Tailwind is actually an interesting point there.

**Kris Brandow:** I feel like there's this line between "Is what you're distributing code, or is what you're distributing a running application?" I think if it's a running application, like Jon just kind of mentioned, I think in a lot of ways it makes sense to do the generation at the point where you're actually gonna be running the thing. But I think if you're a library maintainer, it's much better to commit the code. And I think that's one of the things behind go generate and why it runs the way it is, because it's like, the person who gets your code might not have the generation tools or the version of the tools that you're using, to actually be able to successfully generate the code. So it makes library usage a lot harder if the person using the library has to do this code gen now.

**Mat Ryer:** Yeah. And you want people to be able to check out the code and run it and build it, don't you? You don't want those extra steps...

**Brian Ketelsen:** Exactly. And if you don't have developers checking in the code, what you end up with is Bazel.

**Mat Ryer:** Right.

**Brian Ketelsen:** You have to boil the entire ocean every time you wanna build a tiny app... And that's where Bazel is. It's an ocean boiler.

**Mat Ryer:** Yeah. That's why I see code generation as a dev time exercise, for that reason, and others.

**Break:** \[50:53\]

**Mat Ryer:** This just in! ...I have another one from a website called Twitter... And this is from Tobias. Tobias asks "How would you generate code split into multiple files or directory, to get you started for new projects or parts of projects?" So has anybody seen code generation for bootstrapping projects? A bit like how Rails used to have that rails generate command.

**Brian Ketelsen:** One of my first forays into code generation was a tool called GenKit, that generated a go-kit microservice directory structure for you... And it was like a first-level code generation, with ugly templates and struct tags... And it worked really well. It could generate all of the boilerplate that you needed for a go-kit microservice. And that included many directories, and many types. It was very inelegant, but it was also very efficient. It took me half a day to write it, and it worked really well.

**Mat Ryer:** Yeah. So what more can you ask for.

**Brian Ketelsen:** Yeah. On the opposite of that spectrum is Goa, which - you know, the DSL doesn't take long to master at all, and it will write code across dozens of directories if that's what you want. The background behind it - there's a lot of code behind that.

**Mat Ryer:** Yeah.

**Jon Calhoun:** I feel like this question is sneakily asking us how we would design a framework...

**Mat Ryer:** Buffalo.

**Jon Calhoun:** ...like Buffalo, or something... Because it does kind of sound like -- you know, how would you structure it? It basically comes down to "What would your framework look like?" at that point. And if you're interested in examples of that, Buffalo is a good one to go check out. It generates everything, and then there's much smaller tools, like gqlgen I think is one that just generates the GraphQL components, and then you're still expected to connect everything to that. So there's completely different takes on that that you can look at, and I think it kind of just comes down to what you need for your project... Because there's definitely cases where Buffalo is a great fit, and there's definitely cases where it probably wouldn't be my first tool to go to.

**Brian Ketelsen:** Well, Buffalo is a good example of solving a problem and then abstracting that solution out into a more generic toolkit... And that's really where code generation shines for me - once you've got that problem solved, generate the code to solve it over and over.

**Mat Ryer:** Yeah, that's an interesting point that you've made a couple of times, Brian. I think it is something that is worth people considering... Because even if you know you're gonna use code generation to solve a particular problem, you still ought to solve that problem yourself first... A bit like when you have a sense that there's a call abstraction just waiting to be discovered. It's worth solving the problem -- really solving it for yourself first, and then having a look to see... And in fact, sometimes doing it a few times, actually. I think that's quite a nice point.

Kris, have you done actual code generation yourself? What sort of use cases did you use them for, do you remember?

**Kris Brandow:** Yeah, yeah. I think the last big thing I did code generation on was when I was working on the MongoDB Go driver... And the kind of wire protocol level was very normal and regular, and I would just keep writing the same code over and over and over again... This is really annoying. It's like slightly different things, like "Oh, this command is slightly different than the other one", so I'd just wind up starting off with just writing the structs, and then generating all of the methods that I needed off of them... And then I actually wrote an IDL format, and I was like "Okay, now we just have these IDL files, and we generate all of the implementation based off that."

So it's like one of the things I've used code generation for in the past. But I've used it for a lot of things that are similar to that, where it's like "I could write and maintain all of this code by hand, but it's very tricky, and everything is very regular, and it's gonna be really difficult to find bugs if I try to maintain this by hand", because it will be like small typos here and there will completely break... But in the case of the Go \[unintelligible 00:56:03.24\] then it might only break when it's out in production already, because we don't have a good way of testing that already, because of other things. So I think that's how I've used code generation a lot in the past.

To kind of respond to this tweet too, I have kind of a split way that I feel about this. I think that these types of tools that generate scaffolding and whatnot are good and useful, but I also very much dislike that we use things that are so general and generic that we need all of this boilerplate in the first place. I feel like it's somewhat of a failing of design here... Because I feel like I've run into these same sorts of situations before; when I'm trying to design something, I'm like "Oh, there's a lot of boilerplate." And each time that I've done that, I've just sat down and spent probably a considerable amount of time figuring out why I am writing so much boilerplate... And usually at the end I figured out, "Oh, my design didn't quite fit properly", and I feel that's what a lot of frameworks wind up doing - they try to be so generic and encompass so many things that you need all of this boilerplate to just get the thing that you could have written with a few lines of code if you just wrote the more specific code. I think a configuration library is a really good example of this. I've written multiple configuration/parsing libraries that wind up being less code than if I'd used Viper...

**Brian Ketelsen:** Oh, don't get me started on Viper, Kris...

**Kris Brandow:** \[laughs\]

**Brian Ketelsen:** Viper used to be the cutest little tiny configuration thing... And now it's the biggest monster. And I'm responsible for a good amount of that sprawl, because I added the remote configuration so you could pull configuration from Consul and Etcd... I added that to Viper. And it turned Viper's binary from this big into ginormous, and it's a big, ugly mess of code. I did it... I did that!

**Mat Ryer:** \[laughs\] Well, welcome to therapy. Thank you for attending.

**Brian Ketelsen:** "Who taught you how to smoke weed like that?!" "You did, dad!"

**Mat Ryer:** Okay... \[laughter\]

**Kris Brandow:** But I do think that for where we are right now, having these code generation tools does make it easier... People that are like "Okay, but I have to use these framework because of other reasons." Let's at least make their life a bit easier. But I do worry about the kind of "Let's just generate all of our structures", because then it's like I go and open an application... And there's a little bit of a nice thing about when you open a well-structured Go project where you're like "I can see where all the things go, I understand, I can see what this application is doing", but if you start having all of this hierarchy and structure, it becomes like "Oh, I can tell this is a Rails project. I have no idea what it does, but I can tell it's a Rails project", or Buffalo, or whatever project. "I can tell that it's this thing, but now I've gotta go and do a whole bunch of extra investigation to figure out what it actually does."

**Mat Ryer:** Yeah, that's a good point. There's no opportunity for storytelling, is there? If all the structures look the same. Because that's the thing - when you have good package structure, it tells you a story at a glance. That's a great point, Chris.

**Brian Ketelsen:** Amen.

**Mat Ryer:** Yes.

**Brian Ketelsen:** I don't wanna throw a particular static website generator under the boss, so I'm not gonna mention Hugo by name...

**Mat Ryer:** Okay, very good of you... \[laughs\]

**Brian Ketelsen:** ...however, I had this idea. I wanted to play with Go 1.16 yesterday, and I have a Hugo blog, because Hugo really truly is a fantastic way to build blogs. It's a wonderful way to turn markdown into HTML. It's opinionated, and it's fast, and it's wonderful. But I thought to myself "I'm gonna use the Embed package in Go 1.16, and I'm gonna use something like Gin, or Echo, or some quick little router framework for web apps, and I'll just go steal the code from Hugo, or go import the code from Hugo, that parses my markdown and uses the same templates that I already have. I'll embed that into the Go binary and I'll ship a web server version of Hugo; that's all embedded in the same thing.

I dug into the packages of Hugo's code, and I've spent almost an hour and a half just finding the one thing that triggers the functions to execute templates.

**Mat Ryer:** Right.

**Brian Ketelsen:** Thousands of packages. Thousands. Maybe millions. Children died... \[laughter\]

**Kris Brandow:** Yes, I do feel that's a thing that happens though when you start to get bigger and bigger libraries - all of a sudden, finding really simple and straightforward things becomes an archaeology experiment. I remember digging around - this is probably the example of examples, but Kubernetes... I was like, "How does this thing work?" And I was like, "Okay, I guess I'm just never gonna know", because the sprawl of packages that you can wind up with is just insane.

**Brian Ketelsen:** Yeah...

**Kris Brandow:** So I feel like code generation - good, but also maybe we should make sure that when we are code generating, that we're also being good citizens and being good helpers and maintainers, and making sure that new people can get in and start to understand how things are structured.

**Mat Ryer:** Yeah, that's definitely true. Another thing that happens in open source as well is when projects get popular - suddenly, everyone wants to contribute to them... Which is great, but that's then what you see happening. It did happen to Hugo, I must agree, Brian... Because it started off -- it was kind of tiny and it couldn't do that much, and that was sort of really easy to use. And it is just a trade-off. The more features a thing has, the harder it is to use, by almost its nature... Unless they're just more capabilities within a certain direction, like just adding more storage providers that it can support. That idea is still the same, of storage providers, so that's quite a nice way to scale out a project.

It's when things start to do more and more things... And Ben Johnson - he recently has his project, and he said "No PRs. No contributions, please. This is an open source project, you can use it", I think he lets you open issues to report bugs, but it doesn't want code contributions because it's a hard problem to solve. It really is.

**Brian Ketelsen:** Yeah, I really respect that. It probably took a lot more courage that we're willing to admit to come out and say "I don't want your PRs." But Ben is a really smart guy, and he went through this with BoltDB, and I think that learning experience taught him quite a bit about how to manage that open source. So you're welcome to the source code, it's open, but you're gonna have to fork it if you wanna change it.

**Kris Brandow:** I feel like that should perhaps start being the way that we interact with open source more. As we just mentioned, with Hugo - how many of those things do we actually need? How many of those things do most people actually use? Wouldn't it have been better if we kept Hugo simpler and just made it more extendable? Or maybe easier for people to fork and add the things that they needed to add.

So my experience as an open source library maintainer is that there's just a lot of drive-by PRs, and you put a lot of effort in and you put a lot of energy into explaining to people "Hey, this is why we really wish we could add this feature, but we can't." Or "Hey, we can add this feature, but we have to do it in a different way."

I read Ben's article about why Litestream is open source, but closed to contributions, and it really resonated with me... Because it's like, it does take a huge amount of emotional energy and time to take contributions... And I think a lot of the time it just doesn't wind up being that kind of -- it doesn't wind up paying off for the maintainer, and sometimes for the community as a whole.

**Mat Ryer:** Yeah, yeah. I like that phrase, the drive-by PR. I think that's really cool. I don't get drive-by's. You're not even meant to be texting...

We mentioned earlier the go embed new feature in Go 1.16. Next week Mark Bates himself will be joining us to discuss that very topic.

**Brian Ketelsen:** THE Mark Bates?

**Mat Ryer:** Yeah, it's the only one we could get, unfortunately. I did try and find alternative ones that were nicer, but unfortunately I couldn't find any, so it has to be that one... Yeah, sorry.

**Kris Brandow:** I think that go embed is actually something that I've been wanting to have for a while when it comes to code generation... I've had tools where I distribute them to people internally, within our organization, and one of the challenges is always like "How do I get the templates (where the templates are go-kit or a text template) into the binary that I'm shipping to people?" And I like that now it's part of the language. It's a language feature that enables you to do this. Because I've definitely spent a lot of time with people just explaining "Okay, this is how you compile this tool so that you can use it", and I think that having go embed there will just make it so much easier; you don't have to do anything special to make it work.

**Mat Ryer:** Yes. And if you wanna learn more about go embed, tune in next week. That's my professional radio bit.

**Brian Ketelsen:** Nice.

**Jon Calhoun:** So we've gotta let Brian finish his therapy session by going into his unpopular opinion.

**Mat Ryer:** Yeah, I think it's time... It's time for Unpopular Opinions!

**Jingle:** \[01:05:57.12\] to \[01:06:16.09\]

**Mat Ryer:** Okay, well - we did hear your unpopular opinion earlier, Brian... Do you want to elaborate on it, or do you have any others?

**Brian Ketelsen:** That was well over an hour ago... I don't even remember what it was.

**Mat Ryer:** You don't want Go generics.

**Brian Ketelsen:** Oh yes, generics... I really don't' want Go generics. I feel like Go is a wonderful language without them, and one of the core features of Go is that it's easily readable. Go is optimized for readability. Adding generics reduces that readability significantly for me.

**Mat Ryer:** Really... Somebody on Twitter replied to me -- I won't say that person's name, but they said "WTF? Has no Go programmer ever worked with generics before? You are behaving like kids."

**Brian Ketelsen:** Somebody said that?

**Mat Ryer:** Somebody said that. I'll send you that, because you might get on with that person, Brian."

**Brian Ketelsen:** Maybe. I mean, I like generics, don't get me wrong; I just don't like them in Go. I love them in Rust, they're perfect; they work really well. But I don't write Rust code to be readable, and I don't have the same level of productivity in Rust that I do in Go, because I can read my Go code really quickly and figure out what's going on.

**Mat Ryer:** Yeah, yeah.

**Kris Brandow:** I feel like I have a very rough, still-developing analogy that I've been kind of \[unintelligible 01:07:32.20\] with my friends about why I find the desire to have generics so much a bit ridiculous... And it goes a little bit like this - okay, it's kind of like saying that you can't write a good story in German, because German has gendered words and multiple version of "the", and English has this generic "the" that we have, and no genders for most of our words. So it makes English a better language for storytelling because of that.

That sounds pretty inherently ridiculous, because your story as a whole has much to do with so many other things that aren't related to the nice syntax of the language that you're using for it... And I think that's a lot of the case with Go, where it's like "This is a successful language, and we've gotten this far without generics." And that's not in its face a good reason to not have generics... But it also kind of tells you that maybe at the end of the day these won't be the things that we need or the golden feature that we really need to have to make the language even better... But I also definitely agree with Brian on the kind of cost of generics, which I feel like is not -- I feel like among experienced Go engineers it's talked about a lot, but it's not talked about a lot at large.

A lot of my code reviews - and I think Mitchell Hashimoto tweeted out about this, of like now he has a standard thing he's gonna put in his code reviews, where he's like "Does this really need to have generics?" And I think a lot of us are gonna spend a lot of time looking at code that has generics in it, and have to go and explain to people "Well, do you really need to have generics here? There's probably a better way to do it, there's probably a cleaner way to do it." We don't really need to have this, and having lots of back-and-forth conversations about generics now that it's gonna be in the language...

I don't really know how much of a benefit it's gonna add, outside of the "Okay, we've written some container libraries that we now have to use. Great. Now we have this for generics." But where else is it really necessary and was causing a lot of pain? I think in the first five years of us having generics it's gonna be a big negative on the language ecosystem and Go engineers.

**Mat Ryer:** I did a talk at Gotham Go called "Things in Go I never use", and it was kind of the same idea of even things we already have... And this idea that a smaller language footprint is better, so there's things that I just happen probably never to use very often. I think it's gonna come down to that a little bit. We do have to be careful, we have to educate, because it's really people that come from other languages straight away that are gonna solve problems maybe with generics immediately, and there will be an education, I think, to make sure that we're using it in the right way... But it's the same with code generation. You can abuse that too, and we do.

**Kris Brandow:** I think it's exactly like code generation and reflection and all these other things; I think channels goes in this, too... It's like, we don't need to use them most of the time. But when we do need to use them, they are very useful to have. But it's difficult to figure out when and why you should be using these things, and it takes a lot of time and experience, and while you're building that time and experience, there's a cost that you have to pay for having those things in the language... And it feels like we're adding another big one, that's like "Okay, now we're just gonna have to teach a lot of people and figure out as a community how do we wind up writing Go code that still feels like the Go code that we've had in the past, with this new feature." I think that's just gonna take a lot of time and a lot of effort, and it's gonna cause a lot of stressful things for people.

**Brian Ketelsen:** What was the big Mozilla data processing library? Really early on... It was one of the first big learnings that GopherCon brought for me specifically, was that channels aren't the answer to everything... And I should remember the name of the library, but there was a big data processing library written in Go, and they used channels everywhere... And it didn't scale. Once they hit a certain threshold, channels aren't the answer.

**Mat Ryer:** Yeah, it's funny -- I mean, I'm guilty of this... When I learned about channels, I loved it, because I saw some example cases where it was used brilliantly... And then I over-used it. And it wasn't that it didn't scale in my case, it was that it was hard to follow what was happening. And then I started just using a mutex... And I'll tell you what - just saying "lock" and "unlock" is very clear; that's really all you need. It's kind of perfect.

When defer used to be slow, I would even just defer the unlock sometimes. So it wasn't really about performance for me, it was about the readability. But yeah, sometimes just a mutex is very powerful.

**Jon Calhoun:** I guess I have mixed feelings about this, because on one hand it kind of sounds like part of the argument is "We don't wanna spend this effort on education", educating people why they shouldn't be using generics, and the same could technically be said of channels; there are definitely a lot of cases where new Go developers need educated on why channels aren't something you just throw in every bit of your code. And I definitely agree that there's going to be a cost and there's going to be opportunities for either somebody to make books or whatever that help educate people around when generics are actually a good fit, versus "Okay, you think you need generics here, but here's actually other ways to solve this problem."

I think once that hopefully comes into place, there are some good solutions -- not solutions, but good resources out there to show people how to avoid generics... Then I think they're gonna kind of fade off into something you rarely have to mess with, but they're there when you really need them. I get the concerns, I guess I just don't feel like they're reason alone to not add generics to the language.

**Mat Ryer:** Oh, interesting.

**Kris Brandow:** I do have -- it's not like a counter, but like another perspective on this as well, because I think it's like... It's never kind of just like "Oh, it's either we do this thing or we don't do this thing." There's always like "We do this thing, and we're not doing a bunch of other things", and I think that's more of the problem for me. We have spent a huge amount of time as a community working on generics... And obviously, we can't force people to work on things, so it's not exactly like a "We should be working on something else", but I think we as a Go community and also we as an industry need to do what I was saying earlier, of like start moving away from this obsession of language features and obsession with like "Oh, well, this language doesn't have this feature, so it's not gonna be good for writing software in", and start moving up into those higher levels of actually writing better software and using higher-level paradigms that aren't necessarily dependent on the language itself...

And I feel like Go has historically been pretty good at that, because it doesn't have a lot of features. And the kind of extra features we do have in goroutines and channels, as we've been discussing - we don't use them a lot; they're kind of for special "Okay, I know I need to use this here." I think what that has done, perhaps by accident, is push people to focus more on the software itself and the thing that we're trying to build. And I think that my worry of us -- it's not really about generics at the end of the day, it's just this more focus on like "Oh, we'll just add things to the language, and that will fix our larger problems", when it's like, "No, we have to get back to the how do we actually build applications so they don't fall over? How do we build applications so they're readable and maintainable? How do we build applications so we can quickly onboard new people, so we can get more resources onto projects when it's necessary?"

I think those higher-level meta things are constantly being left out of the conversation, and we're not discussing them in enough depth, and I think generics is one of those things that just sucks more air out of that space.

**Mat Ryer:** Hm... Yeah, I think that's a great point. I wish we had more time to discuss generics in more detail... And we probably will, on a future episode of Go Time.

**Brian Ketelsen:** Just don't invite me. \[laughter\]

**Mat Ryer:** No, we need all the perspectives. Brian, if you leave Go because of generics, I've got one message for you, mate... You'll be back

**Brian Ketelsen:** Yeah, BYE...! Bye, Felicia.

**Mat Ryer:** \[song excerpt 01:16:40.17\]

"You're saying the price of generics is not a price that you're willing to pay... You cry over the tears from C++, go Errorf yourself... Why so sad... Remember we made an arrangement of simplicity and now you're making me mad... Remember despite Go's strange syntax you're a fan... You'll be back. Soon you'll see, you'll return for the concurrency... You'll be back. Time will tell... Because interfaces work so well... Dev speeds rise, bug counts fall, next to Java programs Go look small... And when push comes to shove, we will finally add generics to reminds you of our love... Go-Go-Go-Go-Go-Go-G-G-G-Go... Go-Go-Go-Go-Go-Go-G-G-G-Go... You see the spec is draining and you can't go on... You'll be the one complaining on GitHub... And no, don't change the subject... Generics is my favorite subject... A very specific subject. An objectively uncontestable subject. You'll have them forever, and ever, and ever and ever and ever... You'll be back!"

**Kris Brandow:** Can I have a little tiny unpopular opinion I can just drop and run?

**Mat Ryer:** Yes, please.

**Kris Brandow:** So my unpopular opinion is that estimating how long things are going to take is not actually that difficult. We are just so ridiculously bad at it that it seems impossible.

**Mat Ryer:** Okay, well what's the difference really between those two things? If we're all terrible at it, why don't we just stop lying to ourselves?

**Kris Brandow:** I think the former is something we can fix. If it really was true that you can't estimate things, and it's this impossible task we can't get right, then we're kind of stuck; you can't ever really fix that, we're just kind of stuck with "I don't know, software will get done when it gets done." But if it's that we haven't developed the skills necessary to be able to estimate well, that's something we can work on. That's something we can fix. And I think there's writing out there and there's things out there, especially in other industries, that can help us understand why is it that we are so bad at estimating how long things are gonna take in software...

One of the things I always talk with my friends about is how like "I don't know, when's the last time you factored in people's vacation schedules into your sprint planning, or into your quarter planning? How many times have you actually pulled in a vacation schedule and had that be part of the way that you calculate things, and it's not just been like a background thing?"

**Mat Ryer:** Yeah. Well, nevermind those things which you could factor in... What about all the stuff that you learn as you start? That's the trouble for me - as you start and get underway on something, you unravel so much stuff... So you can get good estimations, but you have to do quite a lot of work upfront to get them... And then why don't we just focus on doing the work?

I'm not against deadlines. I actually really like quite aggressive deadlines, because it really forces you to prioritize. But it's not about cramming all that scope, cramming everything into that short time period. You allow the scope to be flexible, you pick the most important, and sometimes that's the hardest bit... People want everything, of course, by the release date. But if you can't have that because of (I don't know) the laws of physics, then what would you prefer to have first? And that, even as a question, is a very difficult one... And sometimes the worst managers I've ever worked with will say "No, it's all top-priority. It's all top-priority." Because I'm saying, "Well, let's try and order this." "No, we need it all. It's as simple as that."

**Kris Brandow:** I feel like our industry has veered very much into being scared of doing anything upfront. We're always just like, "No, no, we've gotta just get into it, just get into the work." And I think we've very much underestimated the actual cost of doing that, of like--

**Mat Ryer:** A surprise?

**Kris Brandow:** ...now we have all of this code that we have to maintain, and if we've got this design wrong, then we're stuck with this code... I've worked on so many legacy codebases that are like "If you'd spent an extra three weeks just thinking this through, we would have had a much cleaner design and a much better thing." And I feel like software projects constantly are running over by months and months and months, that spending an extra 2-3 weeks upfront to sit down and really start figuring out, estimating and figuring out all the risks of what you're trying to build is well worth it... But we don't make that decision, because that's like the bad thing. That's like waterfall if we start doing that.

**Brian Ketelsen:** VCs don't value planning. They value shipping. And crushing it. \[laughter\]

**Mat Ryer:** I agree with that.

**Kris Brandow:** That definitely seems like part of the issue, is the short-sightedness, I think, in general... I've sat down with people before and I'm like "Is there ever really a software--" People are always just like "Oh, we can do this thing in two weeks. We can do it in a month. We'll build this service in two weeks. We'll build this new feature in a month", and I'm like "When has it ever actually wound up taking only two weeks, or only a month?" Never. It always just drags on and on and on, and then it's like six months down the road and I'm like "Well, we could have actually planned a proper project and been done with a good thing, a good service, a good feature at the end of those six months. But instead, now we're gonna drag it in for another four months, and then we'll have like half of what we really wanted to have at the end." So I feel like a version to planning very rarely works out in our favor in the long run.

**Brian Ketelsen:** Preach it!

**Mat Ryer:** Yeah, I mean... There are for sure -- it's one of those "It depends", I think. The thing is, quick prototypes and things like that are great for this, because they feed into that process... Because you're right, of course, if you can do the design, if you can think ahead a bit - I mean, that's really what our intelligence is meant to be for - then we should do that. I think it depends as well who's doing that design, and the fact that you need to have that mechanical sympathy with the system as it is today, and the changes you're gonna make... Because without that, it's just too difficult.

So I just think it is difficult, it's very hard, but there's definitely cases where a bit of design, a bit of thinking ahead would have just saved a lot of time; it's just very difficult to know those instances. I guess that's where experience comes in. Great one.

**Jon Calhoun:** I guess the way I would put it - with the limitations and the current way a lot of management works, it's almost impossible to estimate projects... But if your management is willing to work with you, to be like "I need a week to figure this thing out, to do a prototype and to figure some stuff out in design", and then we can sit down and come up with a good estimate from that point. And if you have a team, it's not necessarily -- I guess what I'm saying is it's not just learning how to estimate; part of it is having a management team that's willing to let you figure out what you need to figure out, and let you actually learn the skills you need to learn to estimate accurately... And in a lot of places they just aren't willing to do that.

So you're expected to estimate a project without doing any prototyping, and if you come back and give a realistic number, sometimes they're like "No, that's too long. It needs to be less than that." And it's like, "Well..." You're expected at that point to just give them a less number, even though it's not accurate.

**Mat Ryer:** What I always say, "Well, what do you wanna take out?" And when they say "Nothing", you do have a problem.

**Kris Brandow:** I do think too that we can't solve this on our own. It has to be larger -- both industry and the other aspects of the organizations we're in all have to change to get away from this mindset of like "Oh, we can just pump out this feature without actually having to do the stuff around, all this design..."

I think at the end of the day it comes down to risk assessment. We have to sit down and actually assess all of the risks, and that really is not just the things that could go wrong, but all of the designs, all of the prototyping that we have to do. We have to sit down and really put all of that at the forefront, at the beginning of what we're doing, and continually do it throughout... But as you said, we have to include management in that; we have to include both product management and people management. This has to be something that we all do together, understanding that if we start doing this, the software we build not only will likely get delivered faster, but it'll be of higher quality.

So I think that's the other thing that happens - if we don't do this estimation, we won't succeed most of the time, which I think is the case right now. We aren't succeeding most of the time. We're failing most of the time. Software is so broken that we're all used to just working our lives around it. We just refresh the page, turn it off and turn it on again. This is just how we do things, and it's like "Ha-ha-ha, that's fine." But it's rooted at this problem - we don't actually know what we're doing when we go to do it, and we just kind of wing it. In most other industries, that just doesn't fly and just doesn't work. Imagine if you're building buildings and you're like "We're just gonna wing it. We don't need to sit down and come up with the blueprint and estimations of the resources this building will use. We'll just drop it on the land and hook it up to the public utilities and hope that everything works well." But that's quite honestly what we tend to do a lot of the time.

**Mat Ryer:** We'd have some great buildings there if we did let people do that... A lot of them would fail, but the ones that worked - imagine them...

**Kris Brandow:** Yeah, \[unintelligible 01:27:16.28\]

**Mat Ryer:** Yeah. Angelica Hill, another Go Time panelist, is actually a manager herself, so we are gonna do a future episode where we dig into this. And I want to call the episode "Managers. Do we need them?" \[laughter\] And we'll find out. We'll solve that one.

We are well over time... This has been a great conversation, but I need to do some host duties now, and basically get rid of you all. But thank you so much. Brian, maybe you could play us out after I do this final thing.

**Brian Ketelsen:** What do you wanna hear?

**Mat Ryer:** Oh, whatever. Anything you've got, mate.

**Jon Calhoun:** Whenever you invite managers on for that show, can you make sure you tell them the title, the working title?

**Mat Ryer:** No... \[laughter\] Okay, thank you so much for everyone paying attention today. It's been an excellent episode. Kris Brandow, Jon Calhoun - always a pleasure. And of course, Brian Ketelsen, what would we do without you? Thank you very much, sir.

**Brian Ketelsen:** So how long am I gonna be blacklisted from being on Go Time after this episode?

**Mat Ryer:** It depends how good this performance is now.

**Brian Ketelsen:** \[playing the guitar 01:28:40.29\]

**Mat Ryer:** Ole!

**Outro:** \[01:28:49.09\]

**Mat Ryer:** This is now the after-party...! Great stuff.

**Brian Ketelsen:** I... I've gotta go to the bathroom, man... \[laughter\] It is time...

**Mat Ryer:** That's going in. That's going in. \[laughs\] That has to go in. That was a great ending. We'll cut the song, and then we'll just play that clip, "I've gotta go to the bathroom, man..."

**Brian Ketelsen:** I've gotta go to bathroom, man... We're done.

**Mat Ryer:** Brilliant!
