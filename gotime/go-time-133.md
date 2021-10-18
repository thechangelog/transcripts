**Mat Ryer:** Hello, and welcome to Go Time. Today we're talking about reflection and what that means in Go. We'll talk about the Reflect package, what you can do with it, and some really interesting use cases for it, some examples around the standard library even, and then we'll get opinionated about it, no doubt.

Joining me today, it's Jaana B. Dogan. Hello, Jaana.

**Jaana Dogan:** Hello!

**Mat Ryer:** Welcome back. How are you doing?

**Jaana Dogan:** Good! How are you?

**Mat Ryer:** Yeah, not bad. Thanks. Jaana, if you don't mind me saying, you don't sound that happy to be here... But don't worry, this will cheer you up. Jon Calhoun is also here. Hello, Jon!

**Jon Calhoun:** Hey, Mat. No, she looks like she's deep in thought about something. Nobody else can see the video that we can, but she looks like she's deep in thought about something.

**Mat Ryer:** Yes. Well, she's reflecting.

**Jon Calhoun:** She's reflecting.

**Jaana Dogan:** I'll reveal what I'm doing... Exactly.

**Mat Ryer:** Okay, so maybe we should just start at the beginning at a high level. For anybody not familiar, what is reflection, and what does the reflect package give us?

**Jon Calhoun:** At a high-level, it's kind of just a way of almost meta-programming, or interacting with code at runtime; that's the way I view it. I don't know what the official definition is, but everything I've ever seen that's using it is - while your code is running, you want to examine other pieces of code, or look at other things and find some information about them, or maybe try to modify different aspects of them... So it's these things where rather than doing it as a developer at coding time, you're doing it later, when the program is running.

**Mat Ryer:** Yeah, so dynamic languages do that all the time, don't they? Ruby, and I think even JavaScript... Because in JavaScript you can take a string and add methods to it at runtime, and you can kind of do anything you want, it's a really flexible language. And one of the things about Go is it is a strongly-typed language, so it sort of deliberately doesn't do that, but of course, the Reflect package is an exception to that rule.

**Jon Calhoun:** \[04:11\] Like you said, the dynamic languages - it's almost like it's not even thought of as something separate... Like it's just part of the language. It's just something people naturally do. And if you've ever coded in Ruby or one of those languages, it seems so natural, because you see everybody doing it. It's not something that would stick out in any codebase. But when you get into Go, not only is it specific, like you have to import this reflect package, but it's also very limited in what it can do, and I think that's intentional, and it doesn't sort of go with the story of what Go is trying to achieve.

**Jaana Dogan:** Coming from a strongly-typed background, I was about to say that reflection is everything that your type system cannot provide as a first-class capability... But then I was looking at the Wikipedia page, and that's why I was so confused about the definition. I was in the thoughts, and Mat was thinking that I was being sad... It says "Reflection is the ability of a process to examine, introspect, and modify its own structure and behavior", so basically it's everything. And that actually makes sense, if you think about the meaning, what reflection means in daily language.

**Mat Ryer:** Yeah, yeah.

**Jaana Dogan:** So I think it's not even bounded to that little -- I mean, I try to over-specify in my mental model; it's just more of like everything. Everything about introspecting and modifying the structure and behavior.

**Mat Ryer:** Yeah. I mean, when you do type assertions in Go, in a way that's a kind of version of this, isn't it? At runtime you're saying "Here's a type, and we don't know what this is, but I'm gonna assert it to a particular type, and if that's successful, I can then branch off and do something." So in a way, that's kind of reflecting, isn't it, a little bit? But that's still happening at compile time, isn't it?

**Jon Calhoun:** Yeah, you can definitely put more checks there from compile time... But the actual checking - I'd assume some of that has to happen at runtime, because you don't actually know.

**Mat Ryer:** Yeah, you're right.

**Jaana Dogan:** Yeah, assertion is happening at runtime, so you can say it's an introspection piece, and it's actually reflection. But the type system has provided a very nice feature, for us to do it in a nice way, rather than depending on a reflection package, or something. So you can say that "Yeah, that's a reflection feature", but represented in the language with more synthetic sugar.

**Mat Ryer:** Right, yeah. And it does help as well, it does some checks; you can't do invalid-type assertions, and things. The compiler will help you at some point. But you're right, of course, it has to be at runtime. That's kind of the point of it.

**Jon Calhoun:** Yeah, it's definitely interesting in that sense. The type assertion one is one of the ones that everybody's probably seen; I'd say that the second most common one people have probably seen is struct tags. And while they might not be using them directly themselves to read them, I'd say that most people who write Go have at least seen struct tags and wondered "What is this thing?" So I think that might be another one to jump into with Go, because I definitely think that's the second most popular use case.

**Mat Ryer:** Yeah. So anybody that's not familiar -- and you see this particularly if you're working with JSON data... You can actually put a string after a field name in a struct, and that string can be parsed at runtime, and of course, it can take meta-data out of it... And the JSON example allows you to specify the field name, so you can have a different field name to the one that you're using in the struct. And you can also optionally choose for it to not include that field at all. And you can also -- there's like a syntax with a string and then a comma, which is quite a strange part of Go, actually. It's quite unusual, isn't it? There's not much else like it. And you can also tell it to omit the field if it's empty. So if it's a default value, then it won't be included in the JSON object.

\[08:17\] I remember when I first saw that... It really felt like almost a temporary thing, but it has proven to be very useful and pretty effective, in particular for that use case. But Jon, you wrote something that used struct tags as well, right? That form project.

**Jon Calhoun:** Yeah.

**Mat Ryer:** What was that?

**Jon Calhoun:** So I've done a couple different things... Historically, I've used reflection in a lot of different projects. I come from a Rails background, and -- Rails is essentially a large exercise in using reflection. That's kind of how I view that whole framework. So it was nothing as crazy as that, because in Go I just don't think that makes as much sense. But I wanted to write some code that -- essentially, I wanted to take a struct and I wanted to generate an HTML format of that, and I then I wanted to later be able to parse that form whenever a user submitted it, and to basically take all the values they submitted and put it back into that struct, just to make my life a little bit easier, so I could re-share that across a couple different handlers, and just make that sort of thing simpler.

So I created this Form package that used struct tags... And there's other ways to approach this, which I think we should talk about... But it was kind of me just looking at the problem and being like "Is there a way to handle this?" And the struct tags were used for things like if you needed to change the name. If the name in your field had... Say you had a struct, and one of the fields was named "Email", but you wanted it to display "e\_mail" in the actual form, like as the name in HTML - you could use struct tags to change things like that. That's where I was using it. But it also was like an interesting exercise, in the sense that it showed how confusing Reflect can be to write/use in Go.

So I think that's something that a lot of people struggle with when they get there. And part of me feels like that's intentional; it's something that they did -- not like they wanted it to be worse, but they didn't want it to be so easy that people just jumped in there and used it for everything, when they shouldn't be.

**Mat Ryer:** Yeah... Yeah, because there's so much benefit to the type safety. That makes sense, doesn't it?

**Jon Calhoun:** Yeah. And I also even found -- when I was doing this, I probably used struct tags more than I should have in that. Some examples of that were like if you had helper text or default values or anything like that for input fields, I actually had it so you could put struct tags in there that provided those values... And as a result, you could have a pretty crazy, long struct tag that was thrown onto something... And it looked kind of wonky, because you're like "This isn't really code, it's meta-data." But it's providing a lot more than what it seemed like at first glance.

**Jaana Dogan:** Mat, you said something very interesting - that when you first saw it, it looked almost temporary. That was exactly how I felt, because you know, I have these concerns as well... Like, "Hey, Go is a very strongly-type, simple language", but sometimes I feel like I'm over-abusing struct tags... And I was expecting something like an annotation; in other languages we have annotations, and you can have typed annotations, and annotations can handle more complex situations without sacrificing too much from the type safety. And I was expecting something like that, and this was one of the earlier -- a very long time ago, in the early beginnings of the language... But they wanted to keep everything small; the language didn't really grow to have annotations... And one thing that I realized is that I don't see a lot of big mess when it comes to struct tags.

I think people use one struct tag at a time, for very specific things, like for example JSON keys, and that sort of thing. What's your opinion? Do you think it's at a level that we don't actually need anything like an annotation, or do you think that it's a missed opportunity, just because struct tags are hard to maintain, and so on, and we are not doing a good work or we're missing some opportunities to annotate fields in a more richer way?

**Mat Ryer:** \[12:15\] Yeah, it's a really interesting one, because there's definitely value in being able to add a bit of extra meta-data for a particular use case to structs. The alternative has to just be you would describe the same thing just using strong types. So Jon, in your case, instead of having an address struct with different fields and then use the struct tags to add labels and placeholders and help text and things, you'd have a form type and then a field type, probably... And it's quite verbose, but it's very clear. So I guess that's the benefit. But I always was told - and I don't know about this, but I was always told that it's slow, that struct tags are slow to parse. Is that the case still? Has there been any work optimizing that, or is it actually pretty quick?

**Jon Calhoun:** I don't know, but I've never worked on a project where that type of speed has mattered. If I'm rendering HTML and sending it back to the user, chances are sending that HTML back to the user is gonna take significantly more time than whatever the reflect struct tag parsing is gonna take, so it just wasn't a major concern.

And I will say, when you talked about having a form type - I need to get this into a gist and share it, maybe I'll put it in the show notes, but I actually have two versions. One I actually did with a form package that takes something like that, takes a struct and just generates some HTML if you provide an HTML template... And then the other one is more of a -- you describe a form type. I have another struct that would be like "This is my sign-up form struct", but I would write a method on that that used my generic form type and basically spit out what that should look like... And I knew how to render that in HTML with my templates. So I didn't use Reflect at all in that version... And you're right, it is a lot more verbose, but I think that in some ways it's definitely better, because it's much clearer what's happening.

And then in other ways -- it kind of just depends on the type of project, I think is what it comes down to... Because for some quick project where you wanna throw a form up, it's nice to have that "This package just does it." In other cases, where you're going for like "This is gonna be a much longer-lived project", we might need way more customization of stuff. Sometimes it makes sense to go with something a little bit easier to change and a little bit more verbose, but as a result, it's still gets you the same results.

**Mat Ryer:** Yeah, I know that the old data store in App Engine used to use them... Usually, it was around field names, but you could also specify that you didn't want an index to be built on a particular field that you were then gonna put in the data store. I mean, it's extremely powerful to just be able to annotate your structs in that way, and it makes sense, because you really are talking about properties of that field in a very real way. So yeah... And you know, typed annotations - I remember that from C\#. I think Java has it, too.

The idea there is that you have actual types in your code, and you can use those to annotate fields, and then I suppose you can check for the existence of those, and you can probably interrogate them, and programmatically process them. That's a kind of cool meta-programming approach, and you still probably get a lot of type safety with that, too.

**Jaana Dogan:** Yeah. Also, maintainability is higher. You can also easily run queries. You can ask your editor "Hey, show me all the users of this annotation." Or let's assume that you wanna modify a value in an annotation - you can easily search for that and just go in and refactor everything all around. So having some type safety allows you to do that... But again, as I said, I don't think we're over-abusing struct tags in Go. Maybe it's because they're not typed, so everybody's cautious about not overusing them... So I think we still have a nice balance; they're very small. But the biggest problem is people are afraid of -- since they're unstructured and you need to parse them, people are kind of scared of the maintainability, as well as some of the performance implications, if there's any.

**Jon Calhoun:** \[16:30\] I agree entirely with what Jaana said, the sense that it might be because they're a little bit harder to maintain, that people don't use them as much... Whereas if you put those annotated tags in there, I almost wonder if people would use them more than they do now, and use them in cases where they don't make a lot of sense... Because I've even seen that with struct tags. I think there's a class of problems that make sense for struct tags. Encoding with JSON, or really encoding with almost anything that's similar to that... Encoding is a great example where your struct might not match exactly how it needs to encode, so you need to have some way of defining how it should encode and decode. And ORMs are kind of the same, they kind of fall in that same class, where if you're building an ORM where you just wanna quickly say "Put this into the SQL database. Here's what the names of the fields are in the SQL database" - that makes sense.

But then there's other libraries out there, like validation libraries, where you throw things like "This field is required" - and I'm not trying to say people should never use those, but I do see those as potentially being problematic long-term. They could lead to code that has a bunch of different struct tags, all littered in this type, and it's really hard to understand what each struct tag is actually doing, how they all interact together; and there's no compiler safety. If we put annotated tags in there, I wonder if people would just be more willing to do that, rather than look at other approaches.

**Mat Ryer:** Yeah, I've seen linters that check the JSON tag. So if you miss a quote, or if it's malformed in some way, then some -- I had it once where some linter would say "Oh, this is malformed." It's not done by the compiler, so it's not quite the same safety. But I wonder if there is a benefit of it not being a very attractive API, that people tend to avoid it for that reason. And it also does feel a little bit magic. One of the things - particularly for me, and I hear this a lot - that attracted me to Go was that it didn't have much magic in it. It was a very clear and simple language. So now I might even be too far the other way, kind of allergic to magic, despite having the appearance (some have told me) of a magician.

**Jon Calhoun:** Yeah, the magic part -- it's hard, because... I remember the first time I used struct tags, when I was first learning Go. I think I was doing something with MongoDB... And you use (I think it's) Bison to define the struct tags... And I remember when I was doing that, I'm setting up the struct tags, and in my head I'm sitting there thinking "Do I need to import something for this to work? Why is my code okay with this being here without me importing that?"

**Mat Ryer:** Oh, yeah.

**Jon Calhoun:** And it really confused me for a while, because I'm just like "I don't understand how this is compiling." And it wasn't until later when I dove into stuff and sort of understood it, but at the time it really did feel like magic, and that was slightly frustrating when I was first learning about it... Because I'm like "I don't know what's going on."

**Mat Ryer:** I mean, it's literally a string, isn't it?

**Jon Calhoun:** Yeah, but you're like "Surely the compiler is doing something with this. It leads to things being written somewhere", so you're like "How does that work?" and it was just confusing for a while. And then later, when you realize "Oh, they're just parsing this string, and the Bison package later when it's being used is doing it", then yeah, that makes more sense. But at the time I was just very confused as to what was going on.

**Mat Ryer:** Yeah. The Reflect API to interrogate those struct tags actually is quite good. It's quite a simple API. Because some of the Reflect package is -- it's so meta, isn't it? And some of it makes sense. You can get the value of something, and the value is a struct. It's a strong type in the Reflect package. And that describes the value. And then the values, of course, because they can be lots of different types of things, you end up with loads of methods that most of the time are illegal to call.

\[20:19\] If you try and get the length of an integer, of course, the methods are there in the Reflect package to do that. So at compile time you could do it, and it's only then at runtime you're gonna find out you can't get the length of an integer. There's lots of examples of that, so you do end up checking everything. You'd be very verbose when it comes to writing defensive code to make sure that you're not gonna have any of these runtime weird things. And obviously, testing helps, but...

**Jaana Dogan:** Yeah, you mention testing, but it's hard to test, as well. There's no canonical set of tests that you wanna run. I worked on some of the database packages, and there was all this -- like, since Go doesn't have generics, which is something that maybe we can discuss in the context of this talk, we rely a lot on interfaces and type inversion. If you have a slice of interfaces, it could be either a value or a pointer, or a pointer of pointer, and then you have to do all that magic by using the Reflect package, and the reflect package is already a very verbose thing, so wrapping and unwrapping all of those types is very hard. I couldn't figure out an easy way to test, because there was no set of canonical things, like hey, if the standard library was providing maybe some sort of like "Hey, please consider testing these", or providing a list of things to test, that would be so much easier.

**Mat Ryer:** Yeah... Because you have to probably test for all the different possible types, and things like that... And then of course, arrays and slices.

**Jaana Dogan:** Exactly.

**Jon Calhoun:** It's interesting -- Mat, your example of one of the easier use cases was getting the value of something... And the funny part was that was one of the first ones I had issues with when I first used the Reflect library... Because when somebody passes something in -- they pass in a string; you're like "Okay, I'm gonna get the value of this." And that makes sense, your code works, and everything seems great. And yeah, there are things like length, and stuff like that that might not work, but that isn't always gonna work. But then somebody passes in a nil pointer that has a type, but it's a nil pointer, and all of a sudden your code breaks and you're like "What just happened?" and you end up with these weird cases where if the type's kind is a pointer, and if it's nil, then you need to use reflect.new to instantiate a new element, and if it's an interface, you need to get the underlying element type that it's pointing to, because the interface doesn't really help you much...

There's all these weird cases that you get to, where it seems really simple, like "I just want the value of this", but that's really not what's happening. So you end up with all of these edge cases... And even once you get it working and you have some tests for like "Okay, we pass in an empty pointer that has a type. We pass in an empty interface, we pass in an actual value set to that interface" - you have test for all these, and at the very end of it you're still thinking "I don't know what edge cases I'm missing", because there's gonna be one. There's almost no way that there's none.

**Mat Ryer:** Yeah. I mean, in a way it's leaking the internals of how Go actually works. You do tend to learn quite a lot about the types system if you do have to use it... But frankly, I often end up in a kind of trial and error situation, relying on a TDD process to tell me if I got it right or not. I've often written -- if I've used the Reflect package, I often will have code where I call Elem() to get the element, and then for some reason (I'm not sure why) I have to call it again... And it's like "There will be a great reason for that, but I don't know what it is, and I don't really have time", and I know that if I just call elem.Elem(), then I get the thing I need in this case, because the test passes... So I end up being very sort of brute force when it comes to reflection code, which doesn't feel great.

**Jon Calhoun:** \[23:59\] Yeah. I don't use TDD that often, but using Reflect is one of the cases where I most definitely use it, because I'm like "Here are all the different things I know I'm gonna put into this, and they all need to work", and it's just so much easier to start with that. Otherwise, you're just like "Yeah, this works", and then you've gotta run it and nothing works, and you're like "I don't know what's going on."

I'm just looking at some code that I've written with reflect, and I'm seeing the same thing, where it's like .type.Elem() and then like once you create that reflect.New() using that you're like .Elem() for that and you're like "Looking at this code, I have no idea why I did these things. I just know they work", which is really weird. 

**Jaana Dogan:** One thing that I realized - I think the current type system of Go is contributing to some of these problems... Because we kind of fall back to this interface as an argument, or slice of interfaces as an argument, and then all that type inversion, just because we can't limit what the user will wanna do, or what the user will wanna pass... Like, you have to handle all of those cases for your library to work.

One typical example from the spinner Go packages we have is it has to do type inversion from the argument that the user is passing, which is like some interface... And it could be anything; it could be a struct, or it could be a pointer to a struct, or an array, or whatever, but it has to know about the type by doing type inversion, so you shouldn't be passing a regular nil, and you should be passing a type nil. So Go has all this weird stuff, as well as like doesn't have anything for generics, so it invites all this complex stuff to be handled by the libraries by using the Reflect package, and I think it contributes to the problem that we're all experiencing by doing all these elem.Elem()'s, and don't necessarily understand why... The entire language is somewhat contributing to the problem.

**Jon Calhoun:** That's another good point you made - if you're working with Reflect, you're almost always accepting the empty interface. That's almost always what your argument is, and that's usually a bad sign for code when that's what you're accepting.

**Mat Ryer:** Yeah, but like you say, in some cases it's unavoidable...

**Jon Calhoun:** Yeah.

**Mat Ryer:** And one of the things that a lot of us use every day is the JSON marshaling and un-marshaling, and with that thing you can pass in any type, because of course, it can un-marshal into a struct type that you've written... Or a map, actually; a `map\[string\]interface{}`. It can do that, no problem. And actually, the reflect package can instantiate things too, can't it? If you pass in a map, it will create the map for you... And things like that. So it does get quite strange. And I remember in the early days I wanted to -- I was writing a mocking thing for testify, and I really wanted at runtime to create the mocked struct from an interface or from another struct. And at the time you couldn't do it, but since then I've actually seen -- I don't know if it's possible, but I've seen functions and methods that seem like you can actually now instantiate structs, and things; I'd have to check... But that is quite powerful, and if you think about we don't have generics, it is quite tempting to have a look there and see if you could do the hard work and get it done, and then have this extremely intelligent dynamic functionality... Which would be very interesting.

And in test code maybe you're okay with that not being -- it's not gonna be in a tight loop; you don't want test code to ever be slow. But it's not gonna be in a low-latency situation running tests all the time. Of course, we still want test code to be fairly fast...

**Jon Calhoun:** Yeah. Like Jaana said about how the typing system is limited, and then you mentioned the JSON encoding... And I'm sitting here, thinking like - even cases where you know you have to pass in a pointer, you can't just pass in the struct; you have to pass in a pointer to the struct to get the values back... And even having a typing system that sort of allowed you to restrict that would have helped, but because of the way things are set up, it can't do that. Instead, you have to rely on maybe an error, or something... This is not meant to be like bashing Go or something, it's just it's a struggle sometimes when you see that, because I'm sure it's confusing for some people.

**Mat Ryer:** \[28:14\] Yeah. Well, what would the JSON package look like if it didn't use reflect? I mean, you almost certainly would have some kind of callback, but you'd still have interfaces, because you don't know the value type.

**Jon Calhoun:** Yeah, it would almost have to be something like "Encode this", and then instead of saying "Pass in an interface", it would almost have to say "It has to be a pointer." It would almost have to be something along those lines. But even then, that's confusing, because maps don't always work that way, if I recall correctly. I think you can just pass a map in there and it doesn't have to be a pointer, but I don't remember... Does it have to be a pointer?

**Jaana Dogan:** Yes...

**Jon Calhoun:** I haven't passed a map into that in so long that I -- I should go check...

**Mat Ryer:** Oh, no... What have you been passing in?

**Jon Calhoun:** Structs...

**Mat Ryer:** Oh, yeah. It makes sense.

**Jon Calhoun:** I decode intro structs most of the time.

**Mat Ryer:** Well, if you're writing anything where you don't know the data structure -- you know, so many APIs do do that.

**Jon Calhoun:** Yeah.

**Mat Ryer:** It is kind of dangerous territory. But if ever you don't know the actual types... I mean, I wrote a little -- it's not finished; it kind of works, but it's not by any means ready... But it's basically a fake JSON data generator. So you pass in any data -- I mean, you can pass in a struct, in fact... And it will generate lots of examples of that struct, and it uses JSON to do it, because actually just marshaling to and from JSON, at least in the API, is a very easy thing to do. So in that sort of case, yeah. If that was an API hosted on a website, you would want people to be able to pass in any kind of JSON, including an array of objects, as well as a single object... And then it could maybe then generate some test example data from that. That was the idea. And that was very meta.

So those use cases aren't as common, I suppose... But the JSON API I think is great for when it comes to just -- you know, as a user of it. It would be strange -- if you didn't have Reflect, you would end up with some function where you get given the key as a string, and maybe the value as some bytes, and then it's up to you, based on your knowledge of your particular situation, to then unmarshal those bytes. So it is nice that the standard library does that for us, for sure. And by the way, if it didn't have that, I think that would hurt Go's reputation. Imagine the Hacker News article on this, about you have to do JSON marshaling...

**Jaana Dogan:** Yeah, Go wouldn't be adopted as widely if that was how it worked.

**Mat Ryer:** That's right, absolutely.

**Jon Calhoun:** Even with it as is, there's already a couple cases with JSON that are challenging... Like you said, you have structs, but -- I think Stripe is an example of this, where payment sources can be a card or like a bank account, so you have this array of things that can be different, and you kind of need to write your own type to unmarshal it correctly... So you end up having to write some custom stuff for that. And I imagine if you just didn't have the JSON package at all, it would just be a nightmare of people complaining and saying "This is awful." Because even in cases like that, where you have to write custom, I still leverage as much of the JSON package as possible... Like, make a struct with just that one field I want, unmarshal it, figure out what it is, and then pass in the struct for whichever type I care about... And that just saves me the work of doing any of the actual overhead of "How do I umarshal this?"

**Break:** \[31:40\]

**Jon Calhoun:** Earlier, Mat, you were talking about struct tags, and one of the things Jaana and I had sort of talked about a little bit before the show started was, in some ways, I kind of feel like struct tags would benefit being its own separate library, would benefit from that... Because then you can separate this... I feel like struct tags are the safest version of reflection out there, like where you import the Reflect package, and then everything else is kind of the -- maybe not worse, but it's definitely a little bit scarier... So having that edge case, where you could just pull out struct tags - it might be useful to actually have as a separate, like "Okay, I'm just looking at struct tags here."

**Mat Ryer:** Yeah, I see what you mean, so you that you don't have to have the entire Reflect package imported into your code. And I think the Reflect package also has unsafe in there, although I think as a lot of very normal packages also do have unsafe... But yeah, I see what you mean... So that in order to parse the struct tags you would import a different -- like a reflect/struct tags package, or something. Hm, I quite like that. You should tell someone about that.

**Jaana Dogan:** I remember in the earlier days of Go, they were saying like "Hey, if you're importing the Reflect package, that's a no-no." It was almost considered unsafe, because you also are dependent on unsafe for a lot of other reasons, and so on... But you know, it was one of those import lines that you should never see, or you should be very careful; if you're ever using it, you should be very controlled about your usage, and so on. But you know, all of a sudden, everybody starts to import Reflect, because it does a lot of fundamental things, like the struct tags... So I think it just kind of also gives a lot of mental separation to the user, if it was a separate package, so you can write linter tools and whatever to catch for import reflect... But you know, some of the basics or some of the more easier concerns can be living in different packages.

One of the things that I've seen related to this was people -- if they wanna rely on the reflect package, they don't necessarily import it all around; they just kind of like go and encapsulate all the reflect usage in a different package, and then they provide some utilities from that package. Have you seen anything like this, or have you done anything like that?

**Mat Ryer:** No, but that makes sense to me. At least then you've got all of that weirdness in one place... But I don't know if that's a healthy approach, because that's kind of like Kitchen Sink or Utils sort of...

**Jon Calhoun:** I've definitely done the "have one source file, where all my reflect stuff got put", but I've never done anything big enough with Go's reflection that I've had to go that far... Now, I can say that I'm definitely guilty of in like Ruby going crazy with some of the meta-programming stuff, but I kind of feel like when I went to Go I just didn't feel like writing Go code; it didn't seem like the right approach, so I kind of veered away from it where I could.

**Mat Ryer:** \[35:38\] Yeah. I saw an example where somebody wanted to be a very good citizen, and they were gonna put some data in the map, and if the map was nil, it was panicking, of course... So they were actually using (I think) the JSON unmarshaler; in the case that the map was nil, it would just marshal -- and they put the string in-line, like the two little curly braces, to denote an empty object. And it would actually then create a map using that technique... Which means as a programmer you then could pass in a nil map and it would still work. But again, it's a bit too magic, and also just kind of letting it panic, or... Since it was a library, even sometimes I don't mind catching situations that would panic, and then panicking with a better error message, like "You have to create the map before you pass in", or something like that.

But yeah, I've seen a few cases where it's been used where you don't really need it, but people have tried to go the extra mile for their users. So yeah, those kinds of things are quite interesting.

Another form of reflection is with the AST package in Go, and some of the actual code reflection, code analysis packages... And they kept getting better as well. When they started, they were very difficult to use, and there are a few higher-level packages now that makes it a lot easier. We have a project where we actually described our API in Go interfaces, and we use that AST -- there's a packages package which lets you actually open a package and then you can walk through interfaces, and things like this, and then inspect the fields inside the interface, and things... So it does that kind of reflection; it represents that data in its own structure, and then uses that to generate code from a template.

So it's nice, because all of our APIs are described as Go interfaces, which since we're Go developers, that's very easy for us to understand and reason about... And also, it's a real Go package, so it's type-safe, too. You can't use invalid types, so it's a great way to describe an API. You know it's gonna work. And then we can generate the client from that, we generate the server code, the HTTP stuff that stubs all that stuff... Anything boilerplate can get generated, and we even generate another interface, which is actually slightly different from the original one, because it takes a context and it returns an error, and we omitted that from the definitions.

So we then have to -- we can write our definition interface, we run the code gen, and then we implement the interface, and that's it. We've then got a new service that's then exposed in our project.

**Jaana Dogan:** When are you open-sourcing this?

**Jon Calhoun:** I think he already did.

**Mat Ryer:** It's open-sourced, yeah.

**Jaana Dogan:** Really?!

**Mat Ryer:** Yeah, it's called Oto.

**Jaana Dogan:** Nice.

**Mat Ryer:** It's basically a JSON API at the moment, but actually, since it's just code gen and they're just templates, you could easily write a binary protocol for it, or any other type, actually. Yeah, so it's nice. Somebody's written a server Rust template for it, too... That's quite weird, but kind of awesome also. We'll put it in the show notes. It's github.com/pastedotdev/oto, but I'll put it in the show notes for anyone that's interested. We're using it in production and it just works great. I mean, our use case is somewhat simple, but it's really nice... And it's reflection, really, because we have to programmatically inspect those interfaces, and then do some work with them.

**Jon Calhoun:** So Mat, I'm assuming that you're generating code with Oto?

**Mat Ryer:** Yes, that's basically what it is. It takes Go interfaces, it mixes them with a template, and it generates new code.

**Jon Calhoun:** I was gonna say, I do think -- we talk about how reflection is bad, or you should try to avoid it because it's confusing, it's hard to reason about, and it's just hard to maintain... But I think sometimes that's hard, because we don't tell people alternative approaches... And I do think code generation is one of the big ones out there that can be very useful. Like you said, you're kind of doing that reflection thing where you're actually analyzing the code, and then you generate code from it, and you end up with something that's much easier to manage.

\[40:10\] I've even seen some ORMs that go with that approach; I think SQLBoiler was one of them, where they would scan your SQL database and then they would generate Go structs from that... So rather than using reflection, they're like "Okay, we're just gonna spit out things that match your database perfectly, and you can just use these..." It's a very different approach, but I think having reflection being kind of limited forces people to look at these other approaches and decide "Is this better? Is this easier to maintain?"

**Mat Ryer:** Yeah. There's also the go generate command; you can put a comment in, a special comment... Which again, is a little bit magic, but it's like //go:generate, and then a command, and then if you type that in your project, it will run those commands. They're useful for exactly that kind of thing, where you're then gonna do a sort of pre-build step where you generate the code... And that is a nice approach, because you get the type safety, you get the compiler helping you; maybe not initially, but once it's generated, that code then is part of your project usually, and it's gonna be built... And if it's wrong, you'll find out soon enough.

**Jaana Dogan:** Yeah, that's exactly what I was about to tell... I think the difference between the AST package, or the Reflect package - the AST package is an aesthetic thing; it's not doing things in the runtime. So you generate, you still have the similar level of maintainability, as well as type safety. You just generate some stuff with the compiler. So if you can hand off some of the problems to code generations, that's definitely something to do.

**Mat Ryer:** Yeah, that's a great point.

**Jon Calhoun:** We talked about generics earlier, and I would actually love to see an implementation of generics that essentially just runs a go generate at the start. You write your code as if generics are there, using a proposal, and then it essentially just compiles it using some step beforehand into Go code, and generates whatever it needs to generate, and then goes from there... Because I think it would be possible. It would just take some tricky work.

**Mat Ryer:** I wrote exactly that project with a friend of mine, and it's called Jenny. And it's used, people use it. It uses a special type, which is just an interface type, in a different package, and then -- I think it's the AST stuff again; it goes and finds those instances and looks for where you've -- actually, you list it in a command. You run a command and you list the types you want to support, and then it is just a kind of copy and paste, and it replaces that type wherever it's mentioned. It's not perfect, because you can't do type assertions on it; it stops making sense, because -- well, it just gets quite weird... But for simple cases it works. I think that's what you're talking about.

**Jon Calhoun:** I've used something like that... I guess what I'm thinking is it would almost be nice to take that idea and expand it farther, to be like the current generics proposal; to make it so you can write code exactly like that. Because one of the issues with generics is the fact that it ends up making some of the different steps with compilation and everything else more complicated. So rather than baking that into the compiler, if you could just have a precompile step where it seems kind of like it's already built into the language, but it really isn't, it's like translating it at that point...

**Mat Ryer:** Right.

**Jon Calhoun:** Now, it might end up being so annoying to do that that it doesn't make sense...

**Jaana Dogan:** To me, generics has always been like "Hey, there's this template, and you generate things, and the compiler is handling all of that stuff, because the generated code is too complicated to take a look", and that's why the language needs to provide some syntactic sugar, to be able to engage with those types, and so on. So I wonder -- I think if you expose what is generated, that would be super-scary to the user. You will have all these --types, and all these different cases, and whatever... So I think it's not going to look really good for a large number of cases. That might discourage people to take a look at generics to begin with.

\[44:19\] That's why I'm waiting for the actual generics proposal and implementation, because I wanna see that syntactic sugar, how it's going to look... Even though the hard work is not visible to me, at least -- I just actually am not interested in what is generated under the hood, because I know that it's going to be complicated for a lot of times.

And I think one of the reasons these generators \[unintelligible 00:44:39.19\] didn't really catch up is because you need to have some sort of an officially-blessed generics solution. As a library, I can't really randomly pick one tool versus the other. There's not a lot of experimentation, actually. You can't really expose what's underneath; I just want something that works for everyone, so we can agree on it, and all the library systems switch to it... I don't really care what's generated under the hood, and they can always optimize it, or whatever... There is so much work that has been done in this field, so we're not trying to do this for the first time.

I assume that we should find a solution to generics. It should be in the official language. I don't think we need that much of experimentation... But it will be hard for people, because it's going to definitely complicate the language.

**Mat Ryer:** Yeah, but you know, a lot of JavaScript libraries have this approach, where they have a shim, essentially... I think TypeScript originally was -- or Google's Dart was originally just transpiling to JavaScript, and it did look ugly. But Jaana, you have to just not look at it, mate. Just call the final "Don't look at this .go", or something.

**Jaana Dogan:** \[laughs\]

**Jon Calhoun:** I think you just have to train people that -- it's almost like you build a compiler on top of a compiler, and that's the one that gives you errors that you interact with... And then whatever it eventually compiles into, you kind of have to hide that away somewhere in a bundle folder, or something...

**Mat Ryer:** Yeah, but you think about the IDEs, and everything... Everything breaks when suddenly you've got "Syntax is not valid." None of the tools would work.

**Jon Calhoun:** It'd be much harder now. But with the changes they're doing to how all the different IDEs use the language server - hopefully that sort of experimentation...

**Jaana Dogan:** GoPlease, yeah.

**Jon Calhoun:** Yeah. Basically, the fact that they're all using kind of like a common... I forget what it's called, but basically the language server -- there's a common spec for all the different languages to implement... So hopefully that type of work will lead to more potential experimentation on top of existing languages... So that could be interesting to see.

**Mat Ryer:** Do you wanna just give a quick overview for anyone that doesn't know what a language server is? I think it's LSP, isn't it? Language Server Protocol.

**Jon Calhoun:** That sounds right. So the general idea is that rather than every IDE or editor out there implementing their own implementation of how Go's autocomplete should work, and how JavaScript's autocomplete should work -- I think VS Code was the first one that standardized it, but I think others are using it now.

**Jaana Dogan:** Yeah, I think it came from Microsoft. I'm not sure...

**Mat Ryer:** Yeah, it did. It came from Microsoft's Visual Studio Code.

**Jon Calhoun:** So the idea is that they come up with sort of like (in Go terms) an interface, or "This is what an LSP should spit out for a language." Basically, it should have some methods there that you implement, and it can give autocomplete suggestions, depending on where the user is... And the idea was that you could then implement that for any language, and then any IDE or editor could use it to implement autocomplete inside the editor.

**Mat Ryer:** Yeah, which is amazing... And honestly, I can't actually believe that works, because of how different all the languages are. How on Earth have we found a protocol where you can just describe any of it? I find that to be quite amazing, actually. And no doubt, it's non-trivial as a protocol.

**Jon Calhoun:** It's probably one of those -- there's probably like 1% of edge cases where it's not that great with, but for most developers, that just doesn't matter enough to outweigh the benefits of having the LSP.

**Mat Ryer:** \[48:19\] Yeah.

**Jon Calhoun:** But then there's still the problem -- not a problem necessarily, but different editors use their own approach to this. I think GoLand is one of the ones that doesn't use language servers; they use something completely in-house. And in some ways, that's beneficial... Because when GoPlease first came out, it was pretty brittle. But theirs I think was better at the time with Go modules, but now I don't know if that's necessarily true.

**Mat Ryer:** I've heard very good things.

**Jaana Dogan:** That's usually what JetBrains do. They build everything in-house, that's their niche.

**Mat Ryer:** Yeah. My only thing is a few times that I've had to touch Java, I've had that kind of Eclipse IDE, and it really -- it's an aesthetic thing, actually. I use Visual Studio Code because it looks so much nicer, and you spend so much time in there... I feel like it does matter. I feel like you want it to be a beautiful experience. But I've heard some amazing things about how that GoLand editor, the features it has, the things it can do. I haven't yet played with it, but... Yeah, I would be interested. If anyone would like to tweet at me and tell me about their experience, I'll probably read it.

**Jon Calhoun:** Probably.

**Break:** \[49:40\]

**Mat Ryer:** Guess what time it is...?! \[laughs\]

**Jon Calhoun:** I think we know it's probably unpopular opinion time.

**Mat Ryer:** It's unpopular opinion time!

**Jingle**: \[51:50\] to \[52:08\]

**Mat Ryer:** So does anyone have an unpopular opinion then? Some of these things we've already said probably are a little bit unpopular, but... Have you got anything in particular?

**Jaana Dogan:** I have one...

**Jon Calhoun:** Go ahead, Jaana. I'm gonna let her take the stage.

**Jaana Dogan:** \[52:13\] We need generics. I think this is not a very unpopular opinion, but... I've been saying this since the beginning of the language, and everybody has been hating me... But I think we need generics.

**Jon Calhoun:** See, I agree entirely, but that's because I've done enough -- I think one example is for Go to do well in an educational space, like for people to pick it up in college, they're gonna be dealing with data structures, and it's really hard to do data structures without generics... And I think that's one of the reasons why Java is taught so much in school, is because it does well with that.

**Mat Ryer:** Yeah. What do you think about the recent generics proposals?

**Jon Calhoun:** The most recent one I've seen I liked -- I haven't gone too deep into it, but it seems fine to me... I'm not too particular. My needs are fairly limited.

**Mat Ryer:** I think they're making great progress on the design of it... And of course, you hear a lot that the real concern is implementing it, what that does to the type system in Go, and how easy that's gonna be to maintain, and things like this... Which is great to hear that there are people on the Go team and other contributors that really prioritize that, because it is kind of vital, really. I would hate to get to the point where we can't add any more features to Go, because it's just too complicated now... So I'm with you on that one, Jaana, actually...

**Jaana Dogan:** Actually, I'm super burned-out from this topic, and I stopped following the proposals a year ago.

**Mat Ryer:** Wow. Were you just getting really emotional about it?

**Jaana Dogan:** It's not being emotional, but there are at least 50 concerns I had about every proposal...

**Mat Ryer:** Oh, only 50...?

**Jaana Dogan:** And there are no easy answers... Yeah, I mean, there's high-level ones...

**Mat Ryer:** \[laughs\] You're making other people emotional.

**Jaana Dogan:** Exactly. And I think I was not really contributing to the discussion... And also the points that were in my mind and I was feeling anxious about is you can't truly anticipate what the reality will be like, because it really depends on the people who are going to take the generics and use it... We'll see it over time, how it's actually going to impact the entire library space. So I was feeling like "Hey, I'm not really contributing to this discussion." I'm excited that it's happening. The people - I am almost certain that they care a lot. They care more than me, so what's the point of trying to contribute to that...?

**Jon Calhoun:** One of the things this reminds me of is the type alias, and how much pushback that got, and how it was gonna ruin the language... And ever since it's come out, I don't feel like I've seen it any -- like, occasionally you'll see it, and I've done some weird things, just kind of messing around, to see what was possible... But I don't feel like I've run into libraries that have abused it or anything, which is kind of -- it's funny, because you just saw all that pushback, and then... I get their concerns and I'm not trying to say people shouldn't express their concerns, but it's just funny how that didn't actually come to fruition at all.

**Mat Ryer:** Yeah, but it is in there.

**Jaana Dogan:** I was just about to give that as an example, because that was the moment that I actually started to feel burnout from the project, and I wanted to go and do something else... And everything was becoming this infinite loop of discussions about the possibilities, and so on... So with generics - I didn't wanna contribute to that, because there's already too many voices, and it's hard; it's a hard job to figure out, because you can't predict the future.

\[55:52\] I also trust Go developers, because a lot of people care a lot about simplicity, so they never take a feature and abuse it. I think Go users are pretty informed about the core subset of the language they wanna use... And the language is not huge, but I also trust the larger ecosystem. So I'm not that concerned anymore.

**Mat Ryer:** Yeah, I mean, you can always not use it... And to be honest, I didn't quite realize -- I realized very late that type aliases got into the language. I remember the proposal and the big debate, but... Another one was the Try proposal, with the errors; for me, I was allergic to that, because it felt too magic... And yeah, I felt like that didn't fit in with the philosophy of Go. We have to watch out that we don't just like Go as it is, and we're too rigid not to allow any evolution, but... I do think you're right, Jaana - we kind of are aware of the simplicity and things not being too magic. We are, as a community, quite aware of that. And yeah, I suppose you can always just not use it, if you don't like it...

**Jon Calhoun:** I think this is probably why reflect is such a weird topic, because people come from other languages where it's completely normal to use it. I think I said it before we started recording, but I don't think Ruby would be popular if reflect and meta-programming wasn't such a big thing in that language. Rails and all the crazy things you can do with it are all a by-product of being able to do meta-programming, and in many ways, it makes that language more productive... But none of that would make any sense in Go whatsoever.

So when people come from a language like that to Go and they're like "Well, why is this Reflect library so hard to use? Why is everybody telling me not to use it?", it's a hard mental shift, and I think it's because it's a different approach to solving problems, and a different set of priorities.

**Mat Ryer:** Yeah, I think that's right. I've sometimes just -- instead of maintaining... Like there's a bit of code that's got reflection in it, and instead of maintaining it, I'll rewrite it, because in a way, that process of doing it is how I figure out what's going on. That's the thing - for me it is actually hard to maintain, where I sort of give up, and instead we'll just prefer to rewrite it... Which I tend to do that if I can anyway, frankly, because I always find rewriting is a way to get a better version of what you have... You learn so much doing it that the second time you write it it is always a lot better. But yeah, I don't know, it's an interesting one.

Well, I think that's all the time we have today... Next week we've got a very interesting show. We're gonna invite on somebody who just got their first job doing Go, and we're also gonna invite on somebody who's learning Go and programming in Go, who's still at high school. So looking at the very beginnings of people getting into this crazy world that we call programming.

Jon, thank you very much. Jaana, always a pleasure. We'll see you next time!

**Outro:** \[59:13\]

**Mat Ryer:** That's it.

**Jon Calhoun:** I was gonna play guitar...

**Mat Ryer:** I've got to do air-guitar, yeah...

**Jon Calhoun:** You've got like guitars in the background, but you're like "Nope..."

**Mat Ryer:** Yeah, I'm not gonna play them though on \[unintelligible 01:01:02.08\] Jaana, you agreed once that I do look like a magician. Do you remember?

**Jaana Dogan:** Yeah, you look like a magician.

**Mat Ryer:** Yeah. Do you know how hard it is? You take it for granted, but I had to come out to my parents. I'm like "Mom, dad, sit down. Pick a card."

**Jaana Dogan:** \[laughs\] But you know, it's this facial hair, this style... It's very magiciany.

**Mat Ryer:** It does look like a magician's. It's ridiculous. I should change it, but...

**Jaana Dogan:** \[laughs\]

**Jon Calhoun:** I can just imagine it... You come out to your parents as a magician, and they're like "We've gotta get him a computer, or something... Get him into programming."

**Mat Ryer:** Yeah, get him to be a Go programmer, because there's no magic there. I don't know why a family would be against magic, but... Maybe there's some hidden back-story.

**Jon Calhoun:** Maybe your parents were like "He's gotta move out. That doesn't pay very well."

**Mat Ryer:** \[laughs\]

**Jon Calhoun:** I actually have no idea how much magic pays, but I assume it would be hard to get into...

**Mat Ryer:** Yeah, I think it's difficult... Yeah, I can't think of a joke... It's a shame, because there must be loads of jokes just waiting there to be plucked out of thin air. Well, I was close enough... I like the awkward silence after a joke, that's my favorite bit.
