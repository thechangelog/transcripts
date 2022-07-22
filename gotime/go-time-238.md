**Natalie Pistunovich:** Good evening, afternoon, morning or night, everyone who's joining us live, or listening to this later. This episode Ian and me are being joined by Ronna to talk about object-oriented programming. And we'll start by introducing Ronna, I guess. Ronna, you are an engineering manager at Delivery Hero, a Google Developer expert for Go, a Women Who Go organizer in Berlin, Go Time's unpopular opinion Hall of Famer, and after 20 years in tech, you know that the sum of the opportunities that were given to you - this is why you're basically giving opportunity to others. This is an interesting thing about your bio. We'll definitely ask you more about this.

Now we're here to talk about these workshops that you've been crafting since 2017, that you've been giving to meetup Women Who Go Berlin. The most recent one that you'll happen to give at GopherCon Europe later this month, on the topic of actually object-oriented design in Go.

So as a preparation for this episode, we were figuring out how each of us pronounces the short term for object-oriented programming. Ronna, how do you say that? The three-letter acronym.

**Ronna Steinberg:** You mean OOP?

**Natalie Pistunovich:** OOP? Well, I guess it's two versus one, Ian. You pronounce this the same.

**Ian Lopshire:** \[00:04:13.21\] Yeah, OOP.

**Ronna Steinberg:** I have to say, for the past month or so I've been writing OO a lot, and it looks like "Uh-oh..." the emoji. \[laughs\] And it feels very symbolic to the state of object-oriented.

**Natalie Pistunovich:** I somehow always thought it's Oop.

**Ronna Steinberg:** You thought it was Oop?

**Natalie Pistunovich:** I guess it's because last time I used this term was in university, and it's been a while since.

**Ronna Steinberg:** And you used to say Oop?

**Natalie Pistunovich:** Yeah, we used to say Oop.

**Ronna Steinberg:** Ian, what do you say?

**Ian Lopshire:** I definitely say OOP. I don't think I've ever heard someone call it Oop before, until ten minutes ago.

**Ronna Steinberg:** This is definitely a debate worth having.

**Natalie Pistunovich:** Yeah, that can be a poll. Maybe this can even be my unpopular opinion. There. I thought I had none. So we can say is sort of one big unpopular opinion, coming with the claim, Ronna, that Go can be an object-oriented programming language.

**Ronna Steinberg:** Well, I mean, I definitely don't think it's not... \[laughs\] So what happened was that I wanted to share with my team how to do object-oriented programming with Go, and then I kind of realized by looking at actual interview questions/answers/feedback how things are happening in my organization, what people think Go is and what people think Go isn't. They definitely think that Go is not an object-oriented programming language... So I decided that "Okay, I'm going to give a workshop about this." \[unintelligible 00:05:41.08\] if you want to do it, how you should do it. And this has always been how I do things. When I teach Go, I try to teach people -- if they want to do something, I try to teach them how to do it, not whether they are right or wrong to think or do things in a certain way.

So it's more about how to use the tools that you have with the language properly, and especially now with generics going into the language, solving a last kind of edge case that we didn't have... So yeah, I posted that I was going to do that internally in the organization, and immediately, a lot of people that I had never met reached out to give me honest feedback about the workshop that I have never given yet. \[laughs\] And then I kind of knew that "Okay, I have a topic that is definitely worth exploring." So yeah, I guess it is my unpopular opinion.

**Natalie Pistunovich:** So tell us about some of that feedback or opinions that you got.

**Ronna Steinberg:** \[laughs\] It's quite amazing... So everybody has an opinion. Some people were with me and wanted to share that they agree that Go can be object-oriented, which was really nice. What was really nice about it was that everybody can find a resource to support their claim, which I found amazing. It's brilliant. I can't even \[unintelligible 00:07:06.24\] Now, I'm not an academic, obviously, and what I do, I do by trial and error. But I did read a lot about it for the past few months since we kind of decided that I was going to do this, and... The answer is I don't know, but I am leaning towards yes, it is an object-oriented programming language. And it's because of multiple features that it has.

To explain why I think it's an object-oriented language, I should probably explain why I think it's definitely more object-oriented, for instance, than other languages that are considered object-oriented... And I'm looking at you, Java. And here's my case. Listen up. \[laughs\] Java - yes, sure, it has inheritance, but you can only inherit once. So that means that if you want to express that idea that class A or an object of type A is also an object of type B, or a class B, you can only do that once. And if you have a case C, that A is also C, you cannot express that in Java.

\[00:08:19.14\] Now, I came from C++, so I kind of had this multiple inheritance. I used to be very expressive with inheritance, and when I look at Java, when I look at Ruby - Pythonistas, I'm sorry, I'm not familiar enough with your language to make a case... But when I look at Java and when I look at Ruby I see that you can't really express A is C if you already expressed that A is B, unless you use interfaces or generics.

Now, interfaces are -- Go has this dramatic effect that interfaces are implicit in Java, and a class has to be aware, to be able to instantiate A as type interface I, A has to be aware of I at the time of writing. So that means that to plug A as I, you have to do something. It could be generics, it could be some sort of a proxy class that we'll implement and derive from... So there are some ways.

In Ruby we also see how modules are kind of replacing generics, and what people used to do in other languages to sort of be able to very expressive that something is also something else. So the answer is that I think that Go is object-oriented. I'm leaning towards yes. I do see why people don't think so, but yeah, that's where I am as a person who works with Go.

**Ian Lopshire:** Can we go through some of the reasons people said it wasn't? Like, because it lacks inheritance... Like, what features are missing that people are like "It's not object-oriented"?

**Ronna Steinberg:** I think it's about the styling. So yes, most people talk about the lack of hierarchy, the composition over -- what's the word I'm looking for...?

**Ian Lopshire:** Inheritance?

**Ronna Steinberg:** I guess... I mean, I think there is a general term for inheritance, but yeah.

**Ian Lopshire:** Okay.

**Ronna Steinberg:** I think people do a lot of procedural coding with Go. You don't have constructors, for instance. And why do you not have constructors? Because anything can be a type. An integer can be a new type... You can define a new type in pretty much any way that you want. So you don't really have constructors, because you don't have classes, and anything can be a type. And then everything can also have methods. But the truth is that without constructors, without a formal way of working with objects, people get lost... And then they look down at people who come in from other languages, who need these things.

It is very difficult to define a type and allow anybody to make any changes, so you cannot really tell -- how do you tell if it's corrupt or not? How do you write any kind of defensive code in that situation?

We also have these best practices -- I mean, I don't like the word "best practices", because I think that I usually use the word "common practice" to explain... Because it's not always best. There's a case for pretty much anything. But the common practices are "Everything is public, anyone can do anything with \[unintelligible 00:11:24.15\] So it is a bit tricky for people coming into the language to know exactly what they're supposed to do and how. And in that sense, we're not making their lives easier. We're just making it harder, instead of doing this gatekeeping. "Oh, no, you're coming from Java. You probably don't know how to do Go. Never mind... Forget about it." This will take some time... And it doesn't matter; they could have 20 years of experience, but you'll still look at them like "But do you know Go? Do you?"

So that's where I am... I am curious though if we're getting any remarks from our listeners. Maybe they have some opinions...

**Natalie Pistunovich:** Not just yet, but maybe any minute now.

**Ronna Steinberg:** Hopefully. One can only hope.

**Natalie Pistunovich:** \[00:12:11.12\] I'd be curious to hear what are some of the feedback that you've got over email, like what are the pros -- the people who agreed or disagreed. You said that they were all backing their claims, which is wonderful; it means you have generally a great discussion...

**Ronna Steinberg:** Well, \[unintelligible 00:12:25.00\]

**Natalie Pistunovich:** "Expected practices", or what was the term you used? Common practices? That's great, so tell us about them.

**Ronna Steinberg:** Well, the first comment that I got - that was really funny - was "Aren't generics enough OOP now? Really?" Something like that. \[laughs\] I thought that was hilarious. So people do refer me a lot to the Go FAQs that specifically say that the answer to whether Go is object-oriented or not is "Yes and no." \[laughter\] No, actually, is it "Yes and no"? I don't remember.

**Natalie Pistunovich:** I actually prepared it for you. Let me read this out.

**Ronna Steinberg:** Oh, amazing.

**Natalie Pistunovich:** "Yes and no. Although Go has types and methods and it allows an object-oriented style of programming, there is no type hierarchy. The concept of interface in Go provides a different approach that we believe is easy to use, and in some ways more general. There are also ways to embed types in other types to provide something analogous, but not identical to subclassing. Moreover, methods in Go are more general than in C++ or Java: they can be defined for any sort of data, even built-in types such as plain, “unboxed” integers. They are not restricted to structs (classes). Also, the lack of a type hierarchy makes “objects” in Go feel much more lightweight than in languages such as C++ or Java."

**Ronna Steinberg:** Well, I kind of agree... \[laughs\] But then I went into the rabbit hole, because what I remembered from my university was my professor, Jeff Rosenschein, explaining that object-oriented is about being able to send messages to objects. And I checked the origins of the idea and it appears to be the case that that is what they were going for. It wasn't so much about hierarchy. Hierarchy came in later. So if we go back to basics, maybe Go is fully object-oriented. And I think to answer that, you probably need to know more than I do about language design. But again, from practice, I'm leaning towards yes.

In the workshop we do things very Java-like. Exactly the kinds of things that you're not supposed to do... Or it's not really that you're not supposed to do, but we really try to express the same types of ideas, but keeping loyal to, I guess, the Go way of doing things still. So yeah, at the very least it's gonna be a lot of fun, I think. I try to at least add some value in that regard, like give people a good taste of how they can do things and how they can get creative.

I also think that there is a lot of room for people to decide within their teams their own best practices, their own practices, how they want to do things. I do think there should be a discussion, and I also think that it should be a little bit more lively than it is now, where I think the veterans sort of dictate how people are going to use the language. The users of the language that are coming in are the future; they are going to also decide for themselves how they want to do things, how they want to program. They should have the space to do that. And if they're coming from other languages and they work in a similar way, that's fine.

You asked me about quotes that I got... Somebody quoted Rob Pike to me. I tried, but I couldn't find the quote... But somebody quoted Rob Pike to me, so apparently Rob Pike did say something about object-oriented \[unintelligible 00:16:06.22\] or something of this sort... But yeah, I didn't get to the source.

\[00:16:17.09\] What I do see is a lot of people -- this is where I think this is coming from... How people write APIs, how people write their handlers - it's all pretty much functional programming. And the way that this is designed, most people don't actually use an interface in these situations, and even if they do, they kind of don't use object, they use the functions as an interface... Which you can do. You can infer. So they're not used to actually working with objects. Or not objects. Let's say structs. Let's just use the word "structs", with fields and actual -- the classic way of doing things.

I think that's where it's coming from, because it became a language that is so strong in that space. And in that space you really don't need a lot of \[unintelligible 00:17:06.21\] objects. Whatever objects you have are probably going to die soon anyways. And if we think also, those APIs - it sounds funny, but objects don't live long in APIs, unless they live the entire lifetime of the application... Like the server, for instance - that could be an object.

Their structs are limited to fields, like configurations, and they don't have many methods. But then if you look for instance at how they set up their repositories, or how they set up their models, or how they set up these things, because we didn't have generics up until very recently, they don't really use objects there. Or they generate a lot of code, but they don't actually know what's in it, or care so much about it, just to save store, or whatever. But with generics, you can actually store any kind of model into any kind of database or repository. So we are that much stronger in that sense. Maybe now that people are actually going to write code for themselves, they're actually going to spend more time thinking about what they want to express, and how... Hopefully.

**Break:** \[00:18:21.14\] to \[00:20:13.04\]

**Ian Lopshire:** So you going through that, what you've just said, made me think maybe my idea of what OOP is is pretty heavily influenced and biased by writing Go. I haven't written anything but Go in a long time. Probably two or three years at this point.

So going through that - you're right, I think a lot of the OOP stuff that was taught in school I don't use anymore, but I still think of what I'm doing as object-oriented. And maybe I'm wrong. In my mind, object-oriented is just encapsulating a set of data and having methods on it that -- it's like self-contained, right? And maybe that's not what it actually is. Maybe I'm totally misunderstanding the concept.

**Ronna Steinberg:** That's interesting... You said it. You actually said it, "encapsulation". So it's about encapsulation, abstraction, and later came in generalization. So to encapsulate, you don't need hierarchy. Or you can have a composition, essentially, and that would work pretty well too, to encapsulate. But essentially, you don't even need to have any kind of composition, I think, to be able to encapsulate information. It is useful, but the combination of information can be across a lot of things... We know this because we have distributed systems. We live in a world where everything is distributed; all of our data is everywhere, and we kind of need to aggregate it... So even \[unintelligible 00:21:36.03\] nice to have, something that we are very used to and we do, but we don't actually need to have it.

If we have encapsulation, which I think we do in Go, and we are able to define abstractions, which we have interfaces for... And by the way, there is a case - it's kind of interesting, I've found this code snippet that was exactly what I needed for this workshop at the time, of C++ code. I really loved it, because it starts with a license that "Do whatever you want with this code, as long as you don't blame me." \[laughs\] And then this code - it's an event that you can register listeners to, regardless of their type. Essentially, it works with templates, generics... So that code uses generics for a case that we don't need. When we write this code in C++, we have to use this kind of code with templates, to plug in something into something else to even be able to do that. We're just plugging some functionality into something else that it's not aware of, again, because interfaces -- well, C++ doesn't have interfaces, it has classes, but you can define functions as \[unintelligible 00:22:49.02\] so it doesn't have to have all the implementation. But whatever object you have, you cannot pass in as another unless it implements, it extends, or is essentially a class. But in this case, you define your own event handler. Obviously, nobody knows -- you can't really pass in or use in this code any class that you didn't write yourself. So you get stuck, and this is why you use generics. In many, many languages it's for this case, and that was why for many years people would say "Why do you need generics when you have interfaces?" But the truth is that you do need generics for the cases where the behavior of the class is derived by the type. For instance, next node in a linked list... The next is going to return the same type of node, and if your node is holding an integer, or a float, or whatever type of value, it's going to be different. A repository that stores any kind of model, \[unintelligible 00:23:56.28\]

By the way, Go always had generics -- actually, that would be my unpopular opinion. Go always had generics, because map is a generic type. It maps from a key that is a generic type to a value that is a generic type... I see you're sipping, you're drinking, so I know that you disagree...

**Ian Lopshire:** No, I a hundred percent agree.

**Ronna Steinberg:** Oh, you do. Okay. \[laughs\] The slide says that we're always generic... We just couldn't define our own, so it was like good for the 80% of the use cases, but then we had our own use cases that we needed it, and we just didn't have anything. So you will talk now, and I will sip a drink.

**Ian Lopshire:** \[laughs\] No, I definitely agree with you that the maps and the slices are generic, literally since day one. And like you said, it is that 80% use case, right? I don't know how to tie this back to OOP stuff now...

**Ronna Steinberg:** Why I think it plays a role in this is because what people did in those cases is they would write a lot of functional code, procedural code etc. and did not use necessarily generic types. I think we've had a lot of workarounds. I think now we can eliminate them. I think the language is very mature to be object-oriented.

**Ian Lopshire:** That makes sense to me.

**Ronna Steinberg:** Natalie, \[unintelligible 00:25:21.26\]

**Natalie Pistunovich:** No... One thing is on a Zoom call, another thing is on a podcast. It's a whole new level. I've found the quote from Rob Pike about Go being yes or no object-oriented. So it's a bit of a thread... So it starts with "Whenever someone from Java, or C++, or C\# (I'm looking at you, Ronna) comes to Go, they look for class, \[unintelligible 00:25:44.26\] But this misses two fundamental differences between Go and traditional object-oriented languages. The first one is that it's not only structs. Any concrete type can have methods, integers, booleans, slices, even funcs, but the more important idea is the separation of concepts. Data and behavior are two distinct concepts of Go, not conflated into a single notion of class.

This is the insight (which goes all the way back to SmallTalk) on which the object-oriented type system, including the interface model, is built. Stopping at "struct == class" misses much of what makes Go work." So what are your thoughts?

**Ronna Steinberg:** I agree... It sort of works very well with everything that I learned recently about this, honestly. It feels like Go is more naturally object-oriented than languages that I worked with before. I had this discussion with my boyfriend, because of the workshop and the amount of resistance that I was getting.

**Natalie Pistunovich:** Does he think Go is object-oriented?

**Ronna Steinberg:** Yes. So his answer was "Well, of course it is." It wasn't even a question in this mind. And then he told me "Well, you know how the JavaScript people say that a prototype is the best way to define object-oriented." And my take-away from this is that every night I go to sleep next to a man who quotes the JavaScript people... \[laughter\] \[unintelligible 00:27:11.04\] I thought it was a pretty cool observation, to be honest... But still, concerning. I'll keep you posted.

**Ian Lopshire:** The quote there, where it says it separates the idea of data and behavior - I think that's the important part of that area... But I'm having a hard time articulating exactly why in my head.

**Ronna Steinberg:** Do you think that that is a good way to express object-oriented, abstracting away the data from the functionality?

**Ian Lopshire:** Yeah, I think going to what you were saying, where Go is almost a more pure version of object-orientation, I think that's what leads to it; the idea that -- I don't know, I'd have to really sit down and think about it, but that's where my mind is going.

**Ronna Steinberg:** \[00:27:57.04\] I think that I've found something that a person that wrote me about Go not being an object-oriented language might be related to... So I searched for Rob Pike and object-oriented and I've found Wikipedia. On Wikipedia he is criticizing object-oriented. So it's possible that that was what that quote was about.

**Natalie Pistunovich:** Do you want to read this out and share this later in our show notes, so everybody can go back to this, too?

**Ronna Steinberg:** Yeah. I think it's funny... \[laughs\] I mean, clearly... Yes, I will send it to you, and we can include that. So he criticized object-oriented for being incredibly heavy, I guess... And that sort of works pretty well with those quotes about objects being lightweight in Go. I think I agree. I think it feels very, very natural.

By the way, something that I really love is we don't have enumerators, but we do have -- like, it's very easy for me when I look at pseudo-code with those red/black trees, and coloring notes in a graph, and stuff like that - this is the kind of stuff that I teach to people who don't have (let's say) the classical background in university. I teach that stuff to people because they need to pass interviews, unfortunately... \[laughs\] So this is where this is coming from. But what I'd really like to do - because I take pseudo-code with white, black, grey, whatever, red, colors. I don't define a new type by alias integers to do that... And I get very, very expressive. I basically write pseudocode in Go. And I don't think that you could do that with a non object-oriented language. I can pretty much express any pseudocode that I see, without actually giving much thought to what is written there. I just essentially copy and paste it and make the code work. I just make the types work, and the functions work, and if the function happens to be a method, that's what it's going to be. And if the function happens to be a procedural function, that's what it's going to be, and I just make it work, whatever it's necessary. I don't think I would have been able to do that if Go was not object-oriented. Also, you should not be testing people on red/black trees. \[laughter\]

**Ian Lopshire:** I definitely could not code up a red/black tree without googling something right now.

**Ronna Steinberg:** Yeah, obviously. No, I still do these exercises with people so they get used to the idea. And then if they can do this, they can do anything... Stuff like that, essentially. But yeah, there are way too many edge cases in a red/black tree. It's not okay. \[laughs\] \[unintelligible 00:30:56.00\]

**Ian Lopshire:** Someone should write a generic library for it once, and then never touch it again. \[laughter\]

**Ronna Steinberg:** That sounds very good. So that's a rant about people who give impossible tests to \[unintelligible 00:31:09.02\]

**Natalie Pistunovich:** Or tell us how you do this right, when you're hiring for your team.

**Ronna Steinberg:** So I don't know that I do this right, let's start with that... But I try to decide what I want, and then I don't test people on stuff that I don't want. What I will do - for instance, if I want to know how thorough somebody is going to be, then I will dive with them on something that they do know, and check how familiar they are with all the details.

Let's start with the very basics - if somebody tells me that they have worked with MySQL, then I will test them heavily on MySQL until I reach something that either they don't know, or... To get a sense of how far into the rabbit hole they went. Or any other topic. This one is kind of normal.

\[00:32:05.07\] But it all depends on their profile. It really all depends on their profile. We said earlier that I am the sum of the opportunities that were given to me... And I don't think I'm a bad developer. We all want to hire somebody who cannot do what we can't do. \[laughs\] Essentially, I feel like we are raising the bar constantly to a level that people cannot actually meet. And not because they are not good enough.

For instance, if I can't do something and I am going to search for somebody who's going to be able to do it, that's a little bit unfair. And I feel like we are doing this all the time; we're sort of like raising the bar, raising the bar, raising the bar, to essentially maybe make up for our own disadvantages.

So I try to not be unreasonable when I interview somebody. I do try to see if they can learn, there in the interviewing process, for instance. So I will present them with something that they will have to think about, internalize, and then spit out some information that could be wrong, could be right... It could be very small things that tell me if they get it.

For instance, I work with billing people, and I'm not necessarily familiar with those concepts, so I will introduce something that has something to do with what we do in the domain... And it's fine that they don't know this. And then I will ask them "How would you do it, given those constraints? What would you do?" So I taught them something, and now I can see how they actually learned and what they actually do with this information. And it's not really just problem-solving, it's more of try not to introduce them to problems that they already know, essentially. It could be very, very small things.

So yeah, I am the sum of the opportunities that were given to me, and I am a huge believer that if you give people an opportunity, they're not gonna let you down, especially if they've been begging for work since forever... And I do think that you can bank on people's loyalty in those cases. I think for a lot of people just having their foot in the door is such a big deal for them that they will \[unintelligible 00:34:23.10\] So I do see a lot of value in these people.

Even now, if I go for a job interview, I am never going to apply for something that I already know. I want to grow just as much as everyone else, so I'm always going to go and try to convince somebody that they need to invest in my potential.

I am very, very similar to a complete beginner, because we all have to go around and essentially convince people to give us a chance to prove that we can do something that we have not shown before that we can do. It's so obvious to people that "Okay, Ronna after 20 years is going to be able to do this." But it shouldn't be. I mean, at the end of the day, it really shouldn't be. I fail just as much as everyone else. So that's what I go with. It's a very long answer to your question, Natalie.

**Break:** \[00:35:23.09\] to \[00:38:26.23\]

**Natalie Pistunovich:** You mentioned briefly about your background, starting with C++, and also a little bit on how you've come to the idea of doing this workshop. Do you want to elaborate a little bit on giving the context of what brought you on the shorter-term and on the longer-term to this idea?

**Ronna Steinberg:** I don't know, there was this jobs fair in April where I sat down with the organizer of GopherCon Europe, and I asked, point-blank, "Why have you never asked me to do a workshop? You know I do this..." \[laughs\] And then she told me "Well, it's a lot of work..." and I said "Well, yeah, but this is something that I do..." \[laughs\] But the topic itself is really something that I did want to teach my team. My team writes mostly procedural code with Go...

**Natalie Pistunovich:** Why did you want to do it? How did you even come to think of it?

**Ronna Steinberg:** Because that's what they do, and I actually don't think that those patterns that they are using serve my team very well. Actually, it's not really my team, it's my former team, because since about a month ago we reorganized... We \[unintelligible 00:39:26.05\] in a way that was not really working well for us. I mean, I'm not saying that there is no way to make it work, but the way that we did this was not really working well for us... And I was trying to show different approaches to maybe redesign a portion of the code that I felt would just be easier to understand with classic object-oriented... Because that is how we used to see the world.

\[00:40:01.15\] We understand delegation. For instance, if I tell you, Natalie, to breathe in, you don't have to think about operating your lungs. You just breathe in. And if I tell you to breathe deeply, then you will breathe deeply, and if I tell you to stop breathing, you will until you panic. \[laughter\]

**Natalie Pistunovich:** Defer. Breathe out.

**Ronna Steinberg:** \[laughs\] Yeah. You'll defer some breath, hopefully. Unless something is broken. \[laughter\] I do feel that when the code gets too complex and you don't understand it anymore, then you really need to start thinking in terms of objects. It makes things so much easier. People do understand those concepts very well, because they mimic the way that we think, the way that we work, the way the world works.

So that's where it came from. It came from a real problem in our codebase. And then I kind of realized that if people don't agree that it's an object-oriented language, then I want them to see why I think it is, and at least give them the option.

Also, I feel like we failed them in some way. If people work with Go and they don't see the benefits at all, and they don't think it even exists... It's a massive part of the language that they're not utilizing.

Go is very simple, in the sense that -- for instance, if we compare it to my first language... It's not really my first language. Let's say my somewhat first language. My first language is Pascal, but if you point a gun to my head, I won't be able to --

**Natalie Pistunovich:** Same here!

**Ronna Steinberg:** Yeah! We're the products of the same education system. \[laughs\]

**Natalie Pistunovich:** Some people had -- was it Java...?

**Ronna Steinberg:** \[unintelligible 00:41:48.11\]

**Natalie Pistunovich:** Which is not really the uncle of Go, unlike Pascal, which is...

**Ronna Steinberg:** Yeah, that's true. That's actually true.

**Natalie Pistunovich:** Although I did start with Dr Scheme, to be very, very accurate.

**Ronna Steinberg:** Well, the only reason that I know that is because of Carmen Andoh, who went around telling everybody that Go is like a child of the branches of --

**Natalie Pistunovich:** Pascal...

**Ronna Steinberg:** Yeah... And then I learned also that Ruby is also somewhat a child of Pascal, which explains why I like Ruby... Although I don't remember Pascal at all, and I can't really tell if there are similarities or not. I have no idea.

**Natalie Pistunovich:** Try to take it with a piece of paper. Maybe it will refresh your memory more than with a screen. That's how it was for me at least, writing Pascal code. \[unintelligible 00:42:30.28\]

**Ian Lopshire:** Did you get to write it?

**Ronna Steinberg:** I don't remember...

**Natalie Pistunovich:** For better and worse... The education system... \[laughter\] It's the whiteboard of the early times. Anyway, yes, it's the uncle of Ruby. I did not know that.

**Ronna Steinberg:** Yeah, things that you learn when you go to conferences. Random bits of information, of trivia that could be useful in the future or not.

So back to C++, it has a million features that you're never gonna use. JavaScript as well. Nobody uses -- let's say what it is; it's not a common practice, in that case it's a best practice not to utilize all the features in those languages, because that is not maintainable code. But Go has been written in a way that should allow us to utilize all the features. So the idea that people don't do it is... Well, it's just sad. I don't know what to say else about it.

**Natalie Pistunovich:** What are some good or bad use cases for using that? You mentioned billing is your close-to-home example... Do you have some other use cases you would say definitely use it, or definitely don't?

**Ronna Steinberg:** So the quote that Rob Pike, that whomever sent me the message was basing it on - he said that (I don't know) a professor used multiple classes to perform something that was a simple look-up. And I think this is it. And I also understood why it happened... But again, it's not Go, actually.

\[00:44:09.27\] So again, when we go back to Java - you are not able to say that A is B, unless A is aware of B, and knows that it implements B. So you can't really say that A is B. And then in those languages you really have to work extra-hard to express the idea "A is B." And that could create those intermediate layers between code. It's just a proxy; it just invokes more code, it invokes more code, it invokes more code. And then at the end of the day, if you want to perform a simple look-up, it can look like something that will create this very chaotic codebase, for something very simple. But then in Go -- I always say that everything is explicit in Go, except for the things that aren't... And what I mean by the things that aren't, are like stringers, for instance, where we invoke some functionality by performing some type assertion that nobody is aware of somewhere.

But yeah, generally speaking, Go is explicit. If you have a package, and it's well-written, then it should meet the open/close principles, and then you should be able to wrap this type or extend the functionality of whatever it is that you want. I understand why people struggle with that. I think the biggest issue is how we don't write packages very well.

By the way, for the workshop I had to revise my code multiple times, because I realized my design choices were sub-par, let's say.

**Natalie Pistunovich:** Less common practices? \[laughter\]

**Ronna Steinberg:** For instance, it's really funny... So I actually wanted to show that the code was extendible by actually creating an extra package that will use that package... And then I realized that \[unintelligible 00:46:00.14\] I mean, it should extend, but through an interface, not direct. And as I was doing that, the reason that I realized that was because I had a third package that actually did need that interface... And it needed that interface to be in the in-between layer. And then I started thinking "So how do I make -- like, if I wanted to teach somebody that, how would I actually do it?" And I'm still struggling with figuring out what is the exact problem with that code that I could tell somebody like "If you see this, then that is your problem, and that's what you need to change." But it's really funny, because I was actually writing something to show that it's going to be extendable, and then it wasn't. And then at some point I hit an end.

So obviously, I fixed it, but generally, it's a different type of language. A package doesn't have to expose an interface. If you write code in Java, if you write code in C++, you don't want to express that A is B. But at the time that you write the package, or you write the class, or you write anything, you have to know how the user is going to use it. You have to know. And then you have to extend or implement or do something so that a user who is using your package is going to be able to plug in your A as B, your A as I, your A as whatever. So you have to think about how people are going to use your class.

And then in Go you don't have to do it, but then you can write very easily an unusable package, or an unextendable package. So how to write it well, by the way, is something that I still don't know that we are very good at teaching. I'm trying to sort of figure that out as well, as I go. And how do I define that a package is good?

\[00:48:00.20\] I love that when people explain the open-close, they always talk about curl command. Nobody is going to rewrite curl. It doesn't require redesigning. Well, why? Why is it so good? What makes it so good? And what makes a good package? It's a very, very difficult question. Regardless, by the way, if you have object-oriented or not; even if it's just a bunch of functions, it is very difficult to define when you're done, to know exactly when you're done.

**Natalie Pistunovich:** One last question before we switch to the fun unpopular opinion, which we were missing so much throughout this entire episode... You've been kind of giving us sprinkles of information on the workshop. So other than this is being on object-oriented programming in Go, what else can you tell us about it?

**Ronna Steinberg:** Well, I can tell you that I will take the learners through a maze of object-oriented... \[laughs\] And when I say a maze, I mean quite literally. We are going to navigate through a maze. I mentioned Jeff Rosenschein earlier. He was my professor to Intro to CS, and our first exercise way back when, in 2003 - that's what I'm taking people through. It's heavily inspired by his work, so credit to him.

I thought it was a very good way of exploring object-oriented. And I like to take people through journeys that I've found very good for myself. If I had an a-ha moment, I try to share it with the other people as well. And Natalie, you know this -- Ian, I can actually ask you, what is your a-ha moment in your career? Situations when you said "Wow, now I get it. Now I know."

**Ian Lopshire:** That's a real on-the-spot question.

**Ronna Steinberg:** I know, it's a difficult one. When did you realize that you can do this, you can code, you know what you do, you've got this?

**Ian Lopshire:** I mean, that moment was -- so I was in school, and I went to interview for an internship... And doing that interview. They did the whole whiteboard thing. It was eight hours of interviews. I believe that was like an a-ha moment. I feel good at the end of that, and that made me feel like "Oh yeah, I can do this. I can do this." But before that, I had no confidence.

**Ronna Steinberg:** That's the thing, so for you it was trial by fire.

**Ian Lopshire:** Exactly, yeah.

**Ronna Steinberg:** That's very interesting. I think for a lot of people it is just like succeeding in something that they didn't think they could before.

**Ian Lopshire:** I didn't think I was ready for that kind of set of interviews... But that's a reason why I tell people to just -- you see a lot of those posts where it's like "Oh, you know, I'm trying to do these things before I apply for jobs and interview." And my advice is always just like "Just go interview." If you do poorly, you've learned something, and you can go do the next one a little bit better. Don't wait, just go.

**Ronna Steinberg:** I think Natalie the next time we need to bring somebody who doesn't agree with us... \[laughter\] Because we are all so on the same page, it's a problem.

**Ian Lopshire:** A hundred percent.

**Natalie Pistunovich:** Yeah, we'll pull some from your emails. A thought that came to mind throughout this episode... Let's see if I can make this into a sort of an unpopular opinion... Probably not, so I'm not gonna make the tune just yet. But thinking of AI-generated tools, they get inspired from existing code, right? And we can have this conversation if there's features of OOP in Go or not, but if there's not a lot of examples out there, the different models that generate code will not be creating this a lot. So assuming that the trend of code is not just a human writing it, but more like a human guiding it, it means that it will - at least the way I see it, it means that a lot of the code or the language will kind of fall deeper into their template, or into their niche, or little box, rather than spreading out of it, like you did. So this can be a fun thing to think about as a person who's researching AI and code.

**Ronna Steinberg:** \[00:52:14.11\] Wow, I love it. You know, a few days ago I had that thought, AI is not going to write code OOP maybe, because they don't really understand the world like we do, and they don't have that restriction. A bot doesn't tell a person to breathe, you know what I mean? They don't need to. They can go as deeply into the mechanics of how to breathe, so their understanding is going to be very different, of those models.

**Natalie Pistunovich:** Yeah. But maybe there'll be some way of doing this guided, and then we're saved from those boxes.

**Ronna Steinberg:** Exactly. So that is very interesting what you have there, because you know, something that I said earlier about how do you know that a package is complete - maybe a bot can do that for you.

**Natalie Pistunovich:** Static analysis. Or dynamic.

**Ronna Steinberg:** Maybe a bot can analyze if something is open-closed.

**Natalie Pistunovich:** Yeah, that definitely is a fun conversation to have... And if anybody wants to chat about this, we are on the Go Time Slack channel, in the Gophers Slack, so reach out and maybe this will be some future episode. But until then, let's do the tune for the Unpopular Opinion.

**Jingle:** \[00:53:25.24\] to \[00:53:42.12\]

**Natalie Pistunovich:** And now it's time for the unpopular opinion. Ronna, what do you have for us?

**Ronna Steinberg:** I mean, I felt like the entire show was about -- I have an arsenal of things that I need to convince people about. So I feel that we're going to be much stronger if we collected opinions about Go from people who are not professional Gophers. And instead of teaching them, learn from them a little bit. I do see other languages evolve in many different directions. I think people understand today how to work with languages in a very different way than what we used to do. The evolution of best practices, all of those things - it's tremendous.

Also, I think that Go added a lot of value to other languages just by existing. Just because Go introduced these features that we discussed. I think we influenced the industry, but I think that we should be open also to be influenced back.

**Natalie Pistunovich:** So your unpopular opinion is that Go should be open to be influenced by non-gophers.

**Ronna Steinberg:** Yes.

**Natalie Pistunovich:** Alright. Let's see how that poll works. This will be a poll, and then let's see if that brings you further into the Hall of Fame of the unpopular opinions.

**Ronna Steinberg:** Well, Mat said after he put me in the Hall of Fame - he then said that it doesn't exist everywhere. I think that the other people with unpopular opinions \[unintelligible 00:55:14.28\] but as far as I'm concerned, I want that title fair and square, so... \[laughs\] But hey, let's see. It might be as unorthodox as the old one.

**Natalie Pistunovich:** Cool. Alright, well, that was fun and interesting, and I hope this will bring to the workshop that will generate enough code that it will train the AI to do some OOPy Go. Thanks Ronna, thanks Ian, thanks everyone who joined.

**Ronna Steinberg:** Thank you...!
