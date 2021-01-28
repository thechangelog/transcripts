**Mat Ryer:** Hello, and welcome to Go Time! Welcome to a special Dickensian festive episode today. I'm Ebenezer Ryer, and today, dear reader, you're gonna be visited by three spirits. The ghosts of configuration past, present and configuration yet to come. Today we're talking about CUE, which is a new language that lets us define, validate and generate text-based data, like config files, APIs, database schemas, and even code, which sounds crazy, but don't worry, we're gonna unpick it today with this expert panel. We're joined by the creator of CUE, long-time Googler, founding member of the Borg team, which is what inspired Kubernetes, if you didn't know... A Go team member - it's only Marcel van Lohuizen. Hello, Marcel.

**Marcel van Lohuizen:** Hey there. Not on the Go team anymore by the way.

**Mat Ryer:** I'm sorry.

**Marcel van Lohuizen:** That's okay.

**Mat Ryer:** Did you get fired? Don't answer that...

**Marcel van Lohuizen:** I didn't. \[laughter\]

**Mat Ryer:** It's okay. We're also joined by Paul Jolly. Paul created PlayWithGo.dev. He's a Go contributor and organizer of the golang-tools working group. Hi, Paul.

**Paul Jolly:** \[00:04:11.22\] Hi, Mat. How are you?

**Mat Ryer:** Good, mate. Welcome back.

**Paul Jolly:** Thank you very much indeed.

**Mat Ryer:** You're always welcome. We're also joined by Roger Peppe, who's a current influxer, long-time Go contributor... And this blew my mind - Roger suggested the error type. We're gonna have to talk about that at some point... Also, organizer of the Golang North-East meetup since 2015. Hello, Roger. Welcome to Go Time.

**Roger Peppe:** Hey. How's it going?

**Mat Ryer:** Yeah, not bad.

**Roger Peppe:** Happy to be here.

**Mat Ryer:** Thanks for coming. It's an honor to have you all here. I'm very excited about CUE, especially because it feels to me like something I haven't really seen before... So maybe, Marcel, you could give us a bit of an overview of what CUE is and why it exists.

**Marcel van Lohuizen:** Yeah, so like 15 years ago, as part of being on the Borg team, I created this configuration language, because we needed something to control Borg... And I wanted to do something completely different originally, but then we wanted to keep it simple and we created GCL, which in the end grew quite complex. I did that together with Robert Griesemer, by the way, so that's also a little pre-Go history there... And then Rob Pike was an advisor on that team also, and he kept saying "You have to do composition." And what I originally wanted to do was this composition model, but after eliminating that already, we sort of forgot about it. The answer was right in our face, right there, but we never got back to it. Basically, GCL started having inheritance. Big mistake. Didn't have typing. Big mistake. So CUE is now a way to fix all that.

**Mat Ryer:** Great. And what problems does it solve? What's its core mission? I mean, it promises a lot, doesn't it?

**Marcel van Lohuizen:** Mm-hm. So the original problem that I wanted to solve with it is basically configuration. At my previous job I worked with natural language, and basically natural language grammars. And if you think about it, these are very large configurations. So if you see in cloud people that have 100k lines, configurations or more, it's a struggle, and it's really hard to keep these... Whereas if I looked at these grammars, it works fine. You have distributed teams, many people working on it... Not a problem. I mean, it was daunting, but it was not a problem. Essentially, if you look at it in cloud computing, it's not solved. Configuration languages tend to be way too complex, and if you keep it simple, it also gets complex. It feels a little bit out of control. CUE was designed to get control back of configuration and manage it at scale, yet keep it simple.

**Mat Ryer:** Yeah. So I don't know, maybe we could just dig into some of the things it does. Are there example use cases that we'll all recognize? Because like you say, with something that's so flexible like this, you could almost use it to do all kinds of things... And I suppose you're gonna get a lot of people doing things that you wouldn't even have imagined yourself, right?

**Marcel van Lohuizen:** Yeah. One of them is testing, for example. I've written one of my own first CUE-based, table-driven tests recently, and it's really a breeze. It's so easy to write. Actually, I think Roger was the first who pointed it out; it's a very good use case for CUE. And there was recently a block from Yext who was using it also for cross-language test generation. That's an unexpected use case where it really came in handy.

**Paul Jolly:** \[00:08:06.06\] I guess, Marcel, one of the good use cases is actually the tutorial for Kubernetes that's on the CUE website itself. You're just chatting through that one. That's a good example of where CUE is -- it is truly a configuration language.

**Marcel van Lohuizen:** Yeah, so one of the things that that example shows - when I created GCL, I had this other use case in mind, like with these grammars... And there's lots of really deep-going automation you can do if you have a really declarative configuration language. So this was a little bit of promise with GCL as well. And because it's also declarative, you do have some automation around it, but the real automation never materialized. You see that also with successors of GCL - they also promise you automation, and also never really materialize; or maybe people didn't know what I meant with "You can automate."

And one of the things in these Kubernetes demos is also where I show a tiny litle bit of what you can do with CUE, if you have a model like CUE, in terms of automation. For example, one of the key things which sets it apart from other configuration languages is its type system; it doesn't really separate types from value. So values are types. So you can use CUE as a validation language. You can specify constraints, or what you expect your configuration to look like... And this in itself is already very useful; very often if you try to put structure on something, you start with the validation rules, and you sort of narrow it down, like what I think it means... And you find errors. So this is very different. You don't even focus on templatizing at first. You try to focus the errors, like you validate what you have until you get it right, until you get as many details, as many errors to catch...

This is the first in a possible long series of automations. The first one is called CUE trim. It's like, once I have this validation, I can say "Well, now start rewriting my configurations and eliminate all the fields that I can already derive from my validation." So the validation rules that I write is at the same time also the templating. So there's no inheritance in CUE. It works very differently, but this is a very different way of eliminating boilerplate, if you will.

**Mat Ryer:** Yeah. So if I had a JSON object then, and I needed this to -- because of course, in JSON there aren't really any rules; I could have a field with any type, it's not a constraint. And there is that JSON Schema project, and there's a few other projects that aim to sort of address that. So if I have a JSON object and it has this particular shape it just to be, I can use CUE to describe that shape, and then validate it programmatically.

**Roger Peppe:** Maybe I could mention -- so one of the things that I tend to do, and one of the really nice uses for CUE in a very kind of lightweight way... I recently joined Influx, for example...

**Mat Ryer:** Congratulations.

**Roger Peppe:** There's lots of configuration around, which you're like "I'm unfamiliar with this. I don't know what this is", and there's no documentation, or little documentation. And maybe there's some documentation, but it's pretty poor. You don't know what this is. And you can just take that JSON file, or that YAML file and just write some CUE alongside it, and sort of start to refine your idea of what it is, and CUE will tell you "Oh, no. This is wrong." "Oh, okay. I got that rule wrong." And you could just gradually refine it because of the nature.

And for me, the syntax is really natural. If you compare it to something like JSON Schema, which is written in -- I'm not sure anyone would say that JSON Schema is a natural way to specify schema for YAML... But if you write in CUE, you can share it to someone that doesn't know CUE, and they'll be like "Oh yeah, I understand that." It's kind of like almost a pseudo-code, except it's real code.

**Mat Ryer:** \[00:12:09.15\] So that's nice then. You talk about being able to build the validation for some JSON, but presumably you can do that at scale as well. So if you've got lots of JSON data, you may be looking at just one document and you describe a rule... You could run it against all of it and it will tell you whether they all actually match that, or if actually in some cases this is a number and not a string, for some reason.

**Roger Peppe:** If these things are being manually edited, you tend to find places where there are inconsistencies which people have never realized. You know, you have a big open API spec or something, and you're like "Okay, I'll write a rule against that", and it's like "Oh, here's an inconsistency. Okay, right. Game on."

**Mat Ryer:** Yeah.

**Roger Peppe:** But it erased that kind of issue.

**Paul Jolly:** One of CUE's strengths, to my mind, is there's CUE the language, there's the cue command, much like there is the go command that complements the Go language as well... And much like Go, who's got a standard library, CUE has a standard library as well, which enables you to write tools that use CUE.

One of the great powers of the CUE command itself, which is the parallel of the Go command and the CUE APIs, is that you can almost seamlessly translate between these data formats as well, whether it be JSON, YAML, JSON Schema. So this is, again, a strength that I like is - as Roger was saying, you can find yourself in a situation where you're working with some JSON, or working with some YAML, or working with some protobuf, with just any different formats of either data or schema, and CUE enables you to actually translate between those, and effectively define conveniently a sort of source of truth for "Okay, here is my schema" or "I want this to be defined in JSON Schema, for example; because actually there's a pre-existing schema, so let me work with that." But instead, I want to write some extra validation in CUE over here, and the ability to combine those things is super-powerful so I end up just doing a lot of hacking using the CUE command itself to, as Roger suggested, just validate data in the first instance, against various schema sources.

**Marcel van Lohuizen:** Yeah, one other use case that has grown quite big actually is Istio. They're using CUE to generate their OpenAPI from their protobufs. So they're reading the protobufs, convert it to CUE... There's a few reasons why you wanna do this extra step, going from proto to CUE to OpenAPI. First of all, the mappings are not that trivial; I sometimes get a bug report for CUE, like "Oh, this mapping is really weird." It's completely blew up from what protobuf is to OpenAPI... But that's actually because the meaning is slightly different between the two, and CUE captures that correctly... So sometimes you just do get weird outputs, but that's basically because it's correct.

The other thing is -- so this is where the composability comes in. Protobuf isn't very expressive; you just have basic types... And there are some extensions to protobufs where you can have expressions that validate a field, very much like JSON Schema, but if you wanna have cross-type validation, or more complicated validation - it's hard to do. So even if you have such a pipeline, because CUE is composable, you can throw in any additional kind of schema on top of it and it will just combine it in the end result... So unlike with inheritance, where you have to specify the layering and specify in which order you would apply. And also, the semantics is always a little bit shady. Like, okay, you apply the order, but is that really what you mean? And every different ordering means something different, and which one is the correct one... So that issue is completely gone in CUE, because the order doesn't matter, basically.

**Roger Peppe:** \[00:15:56.18\] Which is amazing for a programming language. That way, you can put two things together in either order, any order; it doesn't make a difference. It leads to a real sense of kind of -- it feels reliable; it feels like "This says this, and it's true. No one can take this away from me."

**Mat Ryer:** Yeah. It's interesting, this idea that it has a standard library... Because in my head, a validation thing -- I mean, regex strings make sense, for sure; even number ranges, to say "This has to be a number between these values." But what else? I mean, if it has a standard library for things like changing strings, and modifying things, what does it look like? How do you actually tell it that?

**Marcel van Lohuizen:** I think what Paul was referring to was more the levers that you can use to use CUE in other applications. For example, there's a loader, very much like in Go, but there's also a workflow package, which allows you to basically have a test graph defined in CUE, and it automatically analyzes dependencies, and you can use that for data-driven workflow definitions, for example. So there's a set of framework packages that you can use to build on top of CUE and create whatever you want, in a sort of standardized way. But there is a standard library, but of course, that's very constrained by it having to be hermetic. We don't want things to be modified... But there are useful things, like you wanna be able to operate with time types, and other kinds of things; some network IP addresses, and stuff like that. So in a little bit more convenient way than having to code that in CUE itself.

**Paul Jolly:** It's just a nice way of being able to in a more expressive way describe what constraints exist on the data that you're expecting, or transforming that data that you have received in some way, shape or form, but as Marcel suggested, in a hermetic way.

So there's your regular strings package, for example the Bytes package, and others, that allow you to not only to transform the data, but express constraints in a slightly more expressive way.

**Mat Ryer:** For example, you might insist that something is lower-case. Is that a real example?

**Marcel van Lohuizen:** For example, yeah.

**Mat Ryer:** I see. It makes sense. It's funny - I mean, you talk about the strings and the Bytes packages and stuff... This sounds very like Go. Was this project inspired much by Go?

**Marcel van Lohuizen:** Yeah, for various reasons. One of it was a bootstrapping reason. The standard library, for example, was just me analyzing the Go standard library, what is hermetic, what can I translate directly, and then just generate most of it automatically. That's how that started. So it was written in a few hours, basically. Of course, then there's a lot of tweaking afterwards... But yeah, clearly, having been -- I think it's almost ten years I was on the Go team, so clearly there's a Go inspiration. But not exclusively. The string model is much more based on Swift, for example.

**Mat Ryer:** So what does that look like? What do you mean it's based on Swift?

**Marcel van Lohuizen:** Well, there's a lot of things where Go wouldn't work well for a configuration language. In configuration you often have this meta thing going on with strings, where you have to substitute things in strings, but then you have to define strings where you have to substitute things in; so you have multiple layers of escaping, if you will... And Go just doesn't work very well with a back-tick. So it's actually a very hard problem, and I think Swift is the first language that got that right, so I copied that model into Go. And there are some other string-like things that they did really well, like multi-line strings. A very simple, straightforward way of doing it, very clear, only one way to do it... I'm looking at another configuration language here, but Roger knows...

**Roger Peppe:** \[00:19:55.16\] Yeah, it's really a syntactic thing, rather than a data model thing, I'd say. And it contrasts so nicely with YAML. It's one of the main reasons why if I'm reading a YAML file, if I'm finding it hard to read, I'll convert it to CUE and then I can actually read it... Because there aren't like eight different types of strings, all with slightly different rules, which YAML -- maybe it has 16; I don't know, it's got a ridiculous number of ways of quoting strings, and no one knows them.

**Mat Ryer:** Yeah, that's definitely that thing of having one way to do something really helps with readability, because of course -- yeah, when you come to look at someone else's CUE code, it's familiar already. And that's a kind of Go principle.

**Marcel van Lohuizen:** This is a very good point... For a scripting language it's not so important. If you write a script and you do a one-off, you wanna do something quickly, like being able to write things quickly, it's more important than being able to read it back later, and hopefully you'll throw it away... So with a programming language you don't want that. But with a configuration language, these requirements should be even stricter, because very often it's not only not somebody else from your team, but it's a different team, like an SRE, that has to look at it. And often, they're in not so good circumstances, whether it's some emergency where they have to fix things...

So readability is even more important, and it's even more important to have no complexity, or less complexity. And this is exactly what is the problem with, for example, GCL - I'm guilty myself - and many of the other configuration languages. You kind of need the complexity, that's why you go to a DSL in the first place, but then you do want the readability, so you shouldn't have these complex constructs. It goes too far, and it really hurts readability too much.

**Roger Peppe:** One other things I'd mention, related to its connection with Go, that it does really well, is that you've got cue fmt, in the say way that you've got go fmt.

**Mat Ryer:** I was gonna ask that...

**Roger Peppe:** And that's something that -- something like YAML, basically you can't do it. You can't read it in, process it like an AST, and write out again, because basically almost no one does that. So that means it's amenable to tooling in the same way that Go is amenable to tooling, and that's a huge deal, I think.

**Mat Ryer:** So for anyone not familiar - and there probably aren't many of our listeners/watchers that aren't familiar with go fmt - what does that do then for the CUE code?

**Roger Peppe:** So it means that you can -- for example, if the language evolves and we wanna change things in a backward-compatible way, we can do that by reading in the code and automatically transforming it - like Marcel; it's been fantastic - like in the early days of the Go project. I've been involved in Go since basically day one, and in the early days the language was changing quite fast... But people kept on continuing to use the language, because the core team was very good about maintaining backward-compatibility. Or rather, when they didn't maintain backward-compatibility, they introduced a tool called Gofix, which would actually automatically change your Go programs to use the new features. And that was the huge deal, and still is, actually, for Go.

So I think that's a really big deal for CUE, and for configuration languages... Because it's not just the language itself. If you change your configuration language yourself, you want to transform it - well, then you can do that, and you can still keep comments, for example. Comments are really, really important, they're crucial. But if you've got JSON, for example, you can't have comments. If you've got YAML - well, if you transform your data, you lose the comments.

**Paul Jolly:** But having like the go fmt equivalent, one formatting style - it is critical from a readability perspective as well. So that's really the principal purpose, in my mind at least, of cue fmt - it's the formatting side of things. I think Roger has just described where cue fmt goes to sort of like another level, providing those additional translation of "We've deprecated this feature in the next version", so it will automatically rewrite your CUE. And that has - I think Marcel would agree - been one of the strongest bits of feedback that people have given, is that there have been breaking changes, because CUE is not at v1 yet.

\[00:24:13.06\] So in order to help people along that path, cue fmt has been a life-saver. You just literally run it like you would go fmt, across a number of files or directories or packages, as the case may be, and you end up having migrated (for lack of a better phrase) to the new version of CUE with zero pain.

**Mat Ryer:** Yeah. It's funny, I heard somebody talking about go fmt, and their view of it was "It's just a kind of nice feature to have, almost like you have a format document in an IDE, or something." But it is different to that. It's the readability thing again; everyone having the same layout, and taking out any of that discussion around white space, or where do we put braces, or whatever. And the stuff that Roger was talking about, the fix, that sort of retrospective -- it again sounds just like a nice-to-have, but that's really how you build trust, isn't it? The thing about Go, I think, that made it so successful was you could kind of rely on it, especially once it hit version one. You could really rely on that, so that you knew your code was pretty safe; they're not gonna just keep releasing new major versions and you have to go back and rewrite things, or you get stuck on a previous version. So yeah, I think that turns out to be way more important than people might realize.

**Paul Jolly:** So CUE, the language itself being amenable to tooling, i.e. writing tools that can work with CUE the language, it is again critical, for all the reasons that you've just described. And it's kind of one of the main reasons that I really like CUE, is that I can imagine myself writing tools that work with CUE in the same way that I write tools that work with Go the language as well.

And just to pick up on your point, Mat, about how powerful this can get - I think Russ Cox has actually just written a new refactoring tool for the Go language itself, which is kind of like taking Go to the next level of where people are making API changes, for example, and they need to help people migrate, because they've made a breaking change, for example... Then that's the kind of thing that you want to be doing with Go, and that's absolutely the kind of thing that we want to be doing with CUE as well; that's, as Roger described, what cue fmt has been fantastic with since day one.

**Marcel van Lohuizen:** Yeah. And basically, automation - that was also a big motivator. So in a larger setting, a lot of the code, and also configuration - it's very often generated, or machine-manipulated. It's just part of life. So it's not only a nice-to-have; I would say it's critical to have these features.

**Break:** \[00:26:59.10\]

**Mat Ryer:** Roger, I do have to ask you very quickly about you suggesting the error type in Go. What's that about? Because it used to be os.error, didn't it? It was a struct.

**Roger Peppe:** That's right, it used to be os.error. And of course, importing the OS package with all its baggage every time you wanted an error - it's just not great. So there was a discussion, and they were thinking about different options, and there was quite a long thread in the golang-nuts mailing list.

They had actually decided that what they were going to do - they were going to make a new package, perhaps called errors, and every time you wanted the error type, you would import that package. And I was like "No, that just doesn't seem right. It's such a low-level part-- you shouldn't have to import something every time", and I had just made a little suggestion in the thread, saying "Look, how about just predefining the error as an interface?" At the time, the os.error had a string method, not an error method...

**Mat Ryer:** Right.

**Roger Peppe:** So I suggested that it would be type error with a string. They changed that, but basically that was my suggestion. It's funny how a little thing -- I probably didn't think about it very long, but you know... And actually, that was one of the really fantastic demonstrations of go fmt and Gofix, because there were hundreds of thousands of lines of Go in the wild that were using os.error, importing OS whether they needed it or not... And you could just run Gofix and it would just change it just like that. It was like a kind of magic.

**Mat Ryer:** That's a great discovery. It feels like that's a discovery, doesn't it? Rather than just a choice you could make. Because interfaces in Go, because they're duck typed or structural typing, then you don't need to import anything to work with errors... So that's brilliant, mate... Thanks for that. That's really helped us out.

There was a little bit of a discussion earlier today on Twitter, which is a micro-blogging website... And it was Jaana Dogan and Carmen Andoh; they were kind of discussing whether you say Cuelang, or CUE... I'm getting the sense that we say CUE... So what are the rules? When do we use Cuelang, and could you describe this in CUE?

**Marcel van Lohuizen:** \[laughs\] I don't think so... And it's not Turing-complete, for one... I think it's very similar to Go. It's really CUE, but if I search for it, I search "Cuelang", because you know, I just get better results... So there you go. No pun intended.

**Mat Ryer:** Okay. That's great. Marcel, something you mentioned earlier, which is baffling me still - you said "Values are types."

**Marcel van Lohuizen:** Yeah.

**Mat Ryer:** Could you elaborate a little bit on what that means, and the implications of it?

**Marcel van Lohuizen:** \[00:31:52.04\] Yes. So if you look at CUE - I try to visualize it now with my words, I guess... So if you look at JSON, you just have this string for the field colon value, which can be a string integer or another object... So in CUE it looks very similar; you can drop the quotes here and there... Not on the right hand side, but on the left hand side of the colon. And then on the right, instead of saying for example "a string", you can say "It is a string." Instead of the value, you can specify it's a type. And syntactically, it looks the same. But it's not only syntactic, it's also semantic. Everything is ordered in a hierarchy. A concrete string like mat is an instance of the type string, but they're ordered in the same hierarchy. So I can say it must be greater or equal than m, which then mat is an instance of that, too; so you have constraints, and they're all ordered.

And you can carry that forward and basically say all configurations are ordered like that. So you can define an ordering for all of them. And more specifically, for the mathematically-inclined, it's a letter, so that means that for every two values or configurations, if you combine them, there's always a unique instance that's the greatest instance of both of them. That's where commutativity comes from - that basically means you can combine in any order. It's a mathematical construct, basically, in which all these values and types are defined.

So it sounds a little bit complicated, but it's really very simple. And one way to view CUE, for example, is if you have two forms. You can see CUE as a form; data is a form, if you will, and there's gaps in there, so you might still have to fill out some fields. Some of them might already be filled out... And let's say two people have partially filled out a form, and you now wanna combine it, but it's a form about the same person; one person filled out the address, the other person filled out the dependents, or whatever... Now you're combining this form, but you're giving it to a third person, and it's just a matter of filling out whatever the gaps that were left by the other... But now you see that the last name is different, for example, in both forms.

Now, you know it's about the same person, so one of them must be wrong, right? So what you do in inheritance - you say "We'll pick the last one, and that will be the name." What CUE will say is like "Well, no. One of them is wrong. There's no way for me to tell just based on this form which one is wrong... So I'm gonna bail here. You're gonna fix this. You're gonna tell me what's the right name." And this is basically how CUE operates, and this is -- because you have this restriction, I can actually order everything nicely, and that's what it means that types are values. Does that make any sense?

**Mat Ryer:** Yeah, it does make some sense...

**Paul Jolly:** There's a really good tutorial on the CUE website, which is Cuelang.org, that walked through the basics of CUE, that introduced this concept of types being values really well. And they also show and explain how the syntax is very JSON-like, which is unsurprising, because it's a superset of JSON... So that will help people orient themselves around how the schema part of CUE, if you like, fits in with the data part, and how the two of them combined, Mat, as you were saying earlier on... In the way that JSON doesn't, where you've got JSON schema being a different thing altogether really to JSON the data itself. In CUE you've got this concept that the schema (for lack of a better word) and the data sitting alongside each other, in the same file potentially. The data, as Marcel was saying, is effectively just a more specific and concrete version of a field than the schema, which could just be the type, for example.

**Mat Ryer:** Hm. So that is quite strange, isn't it? Is that a new concept? Are there other examples of things that behave like that?

**Marcel van Lohuizen:** \[00:35:57.02\] Well, so really, this comes from logic programming. If you really think about datalog, prolog, you really have this -- you know, it's all about reasoning with insufficient or partial data, where you have gaps that you try to fill in by trying to walk over this... So in natural language processing there's this CUE-like thing, so it works much the same like that. You also have these letters, this organization... And it was basically invented because it was -- so prolog didn't really scale to address dealing with grammars; not because it couldn't, but because it was too hard to understand, and order \[unintelligible 00:36:37.10\] it was complicated rules... And this was basically a pure data way of describing what needed to be matched. So you don't really have integers and strings. It was more abstract, in a way, than that... But you did have this idea that the structure is at the same time the type. So it really comes from there, that it's the same thing.

**Mat Ryer:** Do people get that intuitively, or does that take some learnings?

**Marcel van Lohuizen:** I think for computer scientists it might take some learning; I think for a normal person, let's say, it's easier actually. One way to think about it - if you think about inheritance, you have for example a cat, and now I want to make it a dog. I say "Well, okay, I am gonna take the nose and make it wet. And it doesn't meow, but it barks. But I'm gonna modify this cat and create a subclass that's a dog." To a computer scientist it's a completely normal thing to do, and nobody would even blink at it. To a normal person, this is insane. You say, "Well, you don't organize it like this. You have an animal, or a mammal, and then you create a--"

**Mat Ryer:** No, but that's because they think you're really gonna do this in the lab. That's why. \[laughter\].

**Marcel van Lohuizen:** Yeah. And this is like this... I would say actually the way inheritance -- with inheritance you can organize things; it's very unnatural, often... CUE still has a hierarchy, but it's a hierarchy like normal people think about it, basically.

**Paul Jolly:** It definitely took me some time to wrap my head around the way in which you need to think in CUE... But I think one of the things I've found is that once I started "getting" the concepts involved with CUE, and how to think in that slightly different way - as Marcel was saying, it actually just becomes a much more natural way to express "Okay, this is the structure of the data that I'm expecting here" or "These are the constraints on it." And then the tooling that you have with CUE as well - for me it's a critical part of my workflow using CUE now, whatever project I'm working on. It's not that I'm trying to use CUE, I just find myself naturally using it, because it's a very natural way of describing data or constraining data.

**Mat Ryer:** That's a very good sign, isn't it, when you actually just use it because it's working for you. You're not using it for the sake of it.

**Roger Peppe:** \[unintelligible 00:39:06.20\] just using it as like pseudo-code almost. I'm like "Oh, what is this thing? Oh, I'll just write it out as CUE, because it just feels totally natural." It doesn't feel like it gets in the way; it totally just enables.

**Mat Ryer:** That's great. We mentioned earlier that you can drop the quotes in the keys, or in the field names, or something... So what happens if you "cue fmt" that? What's cue fmt's opinion on quotes and things?

**Marcel van Lohuizen:** That's fine... So labels are -- because it's more restricted, so left of the colon, if you're doing a member name, or whatever, it's just... Because it's so annoying to write the quotes there, it's just this little syntactic trick so that I don't need the quotes there.

**Roger Peppe:** \[00:39:51.21\] Except it's actually different in CUE, because if you don't put the quotes around the keys, it's actually an identifier. You can actually refer to it as a variable. So you can say x:5, without the quotes around the x. It's just like JSON, except later you can say y:x. And then both x and y are gonna be exactly the same value, always. So that's the difference.

**Mat Ryer:** Hm. That kind of reminds me of symbols in Ruby, because you could build maps with symbols and strings as keys in Ruby.

**Paul Jolly:** While you think about that, Mat, I'll just say... I think the two things that you talked about there, the dropping of the quotes, and as Roger was saying, this ability to reference different values - this is, again, one of the things as a user of CUE, i.e. somebody who's writing CUE, one of the things that I really appreciate. Because you've got the tool authors and the system authors who are gonna use CUE because they want people to provide CUE to configure their system, or as input. But as a user of CUE, someone who's writing CUE, there are so many of these just amazing things that I have as part of the language.

Marcel was talking about stringless rules and the way they work, string interpolation, the ability to drop quotes, comments, this ability to do references, for example, the cue fmt - all of these things as a user of CUE, they're just things that I've become so used to in things like Go. I kind of need these things in my configuration language, and that's where CUE from a user perspective is so much more powerful, I think, than things like JSON and YAML. Not to replace them, but just as a complement often to those things. And I sometimes need that flexibility, so I'll write it in CUE, and then I'll export it to YAML, for example.

**Mat Ryer:** So the CUE tools themselves then - what are they written in?

**Marcel van Lohuizen:** Go, mostly.

**Mat Ryer:** And will that always be the case?

**Marcel van Lohuizen:** Well, it's kind of a lot of work to write all these tools again in something else. I can imagine that at least the core language would be either cross-compiled, or potentially even rewritten in another language... But to rewrite the tools -- so especially with Go, all the loading and the modules, all of this is very finicky; it's one thing to have a language specification, but then the tooling around it is quite tedious to rewrite.

**Roger Peppe:** I have to say, I would hope that the core CUE language is ported to other languages, because I think that it would make a lot of sense, for example to be able to use it on the browser (the client-side browser, for example) from other languages, because I think it can add a lot, as part of some running system, as well as used as a tool.

**Paul Jolly:** There is an initial version of the CUE Playground that needs to be updated to the latest alpha version, which is now the latest version... That CUE Playground is compiled to Web Assembly in much the same way that some of the Go Playgrounds are. The actual Go Playground itself has got a real backend to it, but some of the Go Playgrounds are compiled to Web Assembly, and there is a CUEversion for that... Which at least demonstrates for now - not in the most efficient way - that you can have browser-based interpretation of CUE, as well as exporting to YAML, JSON etc.

**Mat Ryer:** Yeah. The real value is in its design, isn't it? So it almost doesn't really matter... But yeah, of course, this is a Go podcast and we all love Go as well, so it makes sense.

**Break:** \[00:43:38.23\]

**Mat Ryer:** When do we think CUE will be version 1? Are there big gaps, are there still big, philosophical or conceptual problems to solve?

**Marcel van Lohuizen:** When it comes to narrowing down the language, it's really talking about details right now, like really fine details. So there's a change probably coming up in the number model, where we're gonna say an integer is a subclass of a general number, whereas now there's a distinction between floats and integer... And that doesn't always work out quite well. So the end result will be somewhere smack in the middle of Go ints versus floats and Go constants, let's say. You will hardly know the difference.

There is already a number type, a predeclared identifier, which people typically use -- float is discouraged -- and if you use those really you won't know the difference between these two models... But it's a little bit -- if you use the standard library, it will be a little bit more convenient... So there are some changes there.

**Mat Ryer:** Can I be the first to suggest the error type, please?

**Marcel van Lohuizen:** Well, it's critical to any letter; so there is an error type... Although people have said that the way it's written right now - it's a symbol, and it looks kind of offensive to some people, so we're probably gonna change it to a predeclared identifier named error.

**Mat Ryer:** Is it 💩 ?

**Marcel van Lohuizen:** It is not 💩. \[laughter\]

**Mat Ryer:** Okay. Well, there you go; maybe I could suggest 💩 for error type. I can be the Roger Peppe of CUE.

**Marcel van Lohuizen:** Yeah. So performance is not great yet, and this is partly deliberate. It's been designed to be O(n) (order n), but it's definitely not been implemented this way, so that's something that needs to be done. Basically, it's written so that I can try out a lot of things fast, so deliberately, sometimes I made it easier and made it slower, essentially... But that would be one of the big next things to do.

So the errors messages - they have become better already, this last iteration, but they need to become a lot better. And there's probably also a different model, where an error message is not just a message, but it really contains a lot of context of where the error occurred, so that you can do further analysis on it, which is important for a configuration language.

**Mat Ryer:** \[00:48:06.15\] Oh, that's really cool.

**Paul Jolly:** Modules might be worth mentioning, as well...

**Marcel van Lohuizen:** Yeah. That's not so much standing in the way for 1.0 of the language, but we wanted to adopt the NVS of Go, which is actually perfect for dealing with configuration hermetically. CUE has this concept of a module, very similar to Go.

For example, for Go users this might be interesting to know - there's this thing called "cue get go", so you can point to any Go package and it will then look at the Go type of this package and create CUE definitions for it, which you then can use in your CUE code. So you don't have to manually rewrite Go to --

**Mat Ryer:** Well, it would also be a great way to learn CUE, I guess. If you're familiar with Go, you could do that. That'd be a great way to learn it.

**Marcel van Lohuizen:** It's quite straightforward to do, actually. It works with Kubernetes as well, so you can just take the whole Kubernetes codebase, extract all the types, so you immediately have a typed Kubernetes thing.

Another thing - at the Berlin GopherCon I gave a talk, and I gave a little bit of a demo there. It's just still in my client, but just to show you what's possible. There I go basically from a Go binary (just Go code, basically) directly to an OpenAPI Specification. Basically, what it does - I used cue get go to get the Go types, and then separately I use SSA to analyze the Go code, identify the validation code, and extract the constraints that these represent. This was some barfed out CUE that looks really ugly, but I can then run CUE definition (cue def) to combine the nicely-documented, simple structs I just extracted before, with this barfed out CUE, and it spits out a very nicely documented OpenAPI definition without any further human input. So this is the kind of thing you could do with automation.

**Mat Ryer:** Yeah, it's really cool. This is really exciting. It feels like -- I think everyone's gonna sort of just go and start playing now with this, because the possibilities seem... And the fact it's solving those real problems that we all face every probably - I think it's great. And of course, isn't it open source as well?

**Marcel van Lohuizen:** It is, yes.

**Mat Ryer:** So if people want to contribute, what should they do?

**Marcel van Lohuizen:** Well, there's a bunch of issues in cuelang.org. We have the one Issue repo for -- it's basically a big monorepo, so most of the development is there. Pick out an issue and see if you can fix it. Some of them are tagged with "Good first issue."

**Mat Ryer:** Great.

**Marcel van Lohuizen:** I'm not sure if they really are, but you know...

**Paul Jolly:** Actually, using CUE itself and trying to come up with different ways that you think you might want to use CUE, and trying, is actually a really good way, especially in these pre-v1 days, of providing feedback. So yes, of course, it's the contributions to the CUE codebase itself, but actually using CUE - if there are any rough edges, finding those now has been great.

So those people who are using CUE for lots of different things -- one of my favorite use cases, for example, is actually using CUE to configure my GitHub Actions. So instead of writing YAML, I actually write my GitHub Actions definitions in CUE, in almost all of my repos now... And that validates against the schema that GitHub published, which is published in JSON Schema, as it happens... But that helped -- I think it was about six months ago; actually going through that process helped uncover a few issues with the JSON Schema interpretation in the CUE project.

\[00:52:06.22\] So trying out all these different ways in which CUE can be used is a massive, massive help. So any sort of feedback, and all bugs, all problems that people find, or suggestions that people have along those ways, is gonna be fantastically helpful, too.

**Mat Ryer:** Great. What a great way to contribute if you don't feel like you can get in and start working on the codebase - using it and reporting back is great.

Well, it's that time, that great time, for Unpopular Opinions!

**Jingle:** \[00:52:32.05\] to \[00:52:50.02\]

**Mat Ryer:** So who wants to kick us off? Who has an unpopular opinion?

**Marcel van Lohuizen:** Well, let me start with one. I think I've alluded to it before already, but... To me, inheritance is the biggest source of complexity in configuration language, and a great evil that should be avoided... Which might sound sensible after everything I have explained today... But it does mean it eliminates most configuration languages as a useful tool. That might be unpopular.

**Mat Ryer:** Yeah. Well, I don't know if it's gonna be unpopular to Go people, because one of the nice things about Go is you can't build these complex type hierarchies... And I used to do C\#, and honestly, I would build cathedrals, honestly... Beautiful things - generics, generics with various conditions... And then the next day when I'd go to try and look at it, I was like "No. No." I'd start again.

And Go sort of doesn't have them, so you can't tie yourself in knots in the same way. But we'll see... We do test these unpopular opinions, Marcel, and if you don't manage to -- we actually poll them on Twitter to find out if they are indeed unpopular. And if they're not, you have to come back on and think of another one. That's the rule.

Okay. I think that's a great one. Any others?

**Roger Peppe:** Well, this isn't directly related to CUE, but I'd just say that I think that tests can be more of a liability than an asset.

**Mat Ryer:** Oh, interesting. They CAN be. In what way can they be?

**Roger Peppe:** I think a lot of people write tests that aren't very useful. They're not telling you very much about how well the code works. And when your code changes, you have to change all the tests, because maybe they're using mocks, they're relying on internals, and actually the tests are worse than useless, because they're not really telling you that the code works... And you have to change maybe twice as much code or three times as much code as you would if you didn't have any tests at all.

I'm a great believer in trying to do more end-to-end tests as much as you can... And I've been doing this with CUE quite a lot, in terms of building up libraries of corpuses and you can do that really nicely in CUE. It's a great format for putting -- you know, if you go to Test Data directory, you have a load of stuff in CUE, and you can maintain that really well, and the Go code, it just reads it as JSON; it doesn't care that it's all specified in CUE.

Maybe that's a ten years \[unintelligible 00:55:35.19\] I've spent too much time dealing with s\*\*t tests...

**Mat Ryer:** \[00:55:44.28\] \[laughs\] Yes. I'm actually with you on this one, Roger, entirely. I used to build cathedrals out of tests; really complicated things, beautiful structures... Yeah, I've learned kind of the hard way, over time, of just tests being a bit of an albatross around your neck, compared to -- when you get them right, you definitely feel better about it. And you're right, when they're too brittle, when they're too bound to your code, you almost end up just saying the same thing twice, which doesn't really have any value at all, does it? So yeah, again, we're gonna test this one, but I have a feeling that one's not gonna be unpopular... But we'll see. Good one. Mr. Jolly?

**Paul Jolly:** I don't have one. Unfortunately, mine was gonna be a controversial one, that we should be all referring to this as CUE, as opposed to Cuelang... But we somewhat hijacked that earlier on, unfortunately.

**Mat Ryer:** Oh, sorry, mate...

**Paul Jolly:** \[laughs\] I made an unpopular opinion a couple of weeks ago, so I'm happy to sit out.

**Mat Ryer:** Okay. That is quite unpopular, to not give an opinion, actually... \[laughter\] And in the spirit of CUE, that's quite meta as well, you know...

**Paul Jolly:** I trimmed my unpopular opinion.

**Mat Ryer:** Yeah. \[laughs\] That's a CUE joke, isn't it?

**Paul Jolly:** It is, yeah.

**Mat Ryer:** I don't get it yet, but I'm going to learn CUE, and then I'm gonna come back and listen, and I'm gonna be loving that. Okay, well that is all the time we have for today, but thank you so much, gentlemen, for coming on and telling us about this. It's definitely got me excited about CUE; I can already think of a few different use cases where it really, I think, is perfect. So I'll be one of those contributors trying things out.

All that leaves me now is to say "You boy, down there, listen - is that prized turkey still in the window? Right. Go and get it then, and I'll give you a tuppence." For these Victorian orphans, what are we gonna do with them, Roger? \[unintelligible 00:57:50.16\]

**Roger Peppe:** Basically...

**Mat Ryer:** Don't worry, this will get edited out. \[laughter\] So thank you so much for joining us, Marcel, Paul, Roger. It's a pleasure. And thanks for listening. See you next time.

**Marcel van Lohuizen:** Thank you, Mat.

**Paul Jolly:** Thanks, Mat.

**Roger Peppe:** Cheers!
