**Jerod Santo:** Alright, I'm here with Yehonathan Sharvit, author of Data-oriented programming, published by our friends at Manning in July of 2022. Welcome to the show.

**Yehonathan Sharvit:** Well, I'm very happy to be here with you.

**Jerod Santo:** Happy to have you. So data-oriented programming, or data-oriented programming, depending on your affectation - a concept that I hadn't really heard about, and I feel like I've heard about lots of different things... And so maybe like a niche area that you're trying to expose. Tell us about why you decided to spend - it looks like 18 months in early access, and finally published; you have a real, hardbound book that physically is in your hands right there, which is really cool... Why did you decide to write this book?

**Yehonathan Sharvit:** Alright... But before that, let me ask you a question back...

**Jerod Santo:** Okay.

**Yehonathan Sharvit:** If you don't know what is data-oriented programming, do you agree that it sounds sexy, or cool?

**Jerod Santo:** \[laughs\] I do. I think it does sound intriguing. That's why I was like, "Yeah, we'll have you on the show. It sounds cool."

**Yehonathan Sharvit:** Yeah. So that was my feeling when I started to write a book, that nobody really knows what it is, but everybody thinks they know what it is. And if you would ask a developer in the street, "What do you think about data-oriented programming? Is it a good paradigm or a bad paradigm?" They'd say "For sure it's a good paradigm." And when I started to write the book 2,5 years ago, I did a research on Google and I was thrilled to discover that there were \[unintelligible 00:03:28.17\] on Google for data-oriented programming. Zero. Nothing. Then I said, "Wow, that's amazing. I can be the reference, the guru of data-oriented programming."

**Jerod Santo:** You can be the one. Yeah, exactly.

**Yehonathan Sharvit:** And then I looked on Wikipedia; of course, there were no articles about data-oriented programming, so I wrote an article on Wikipedia about data-oriented programming, and I say "Wow! I'm gonna be famous." But... Can you guess what happened?

**Jerod Santo:** No...

**Yehonathan Sharvit:** Wikipedia refused my article...

**Jerod Santo:** Oh, they took it down. They said it wasn't good enough.

**Yehonathan Sharvit:** Yeah. They said -- not that it wasn't good enough. They said, "In order for a topic to be worth having a page on Wikipedia, you need to prove secondary sources." Meaning you need to find books or articles that are not about data-oriented programming, that mention data-oriented programming.

**Jerod Santo:** Okay...

**Yehonathan Sharvit:** And it was obviously not the case. And I cannot use my book as a reference for my topic... So right now, my article on Wikipedia is not there. Now, seriously, I am a member of the Clojure community. I've joined the Clojure community 11 years ago, in 2011... No, 2012. And Clojure is a data-oriented programming language; it's a data-oriented programming language, and it was marketed as so. So when I write Clojure code, even if I don't know what is data-oriented programming, in fact I do data-oriented programming.

My first attempt with Manning was to write a book about Clojure, and it was a total failure. Nobody purchased the book. I mean, maybe we sold 200 copies. But the folks at Manning were intrigued by this, the Clojure paradigm, and they say, "You know what - we liked working with you. The book didn't go well..." So you know, they stop before the book is published. They do like an early release of the book, and if it doesn't work, they stop. We didn't go into full production; it was just a couple of chapters. But they said, "We want to work with you. Can you suggest another topic?" And then I did a trick. I said, "Okay, I cannot convince people to get interested in Clojure. I'm going to give them Clojure without Clojure." Clojure spirit without the syntax. And that's exactly data-oriented programming. It's the principles behind Clojure philosophy.

**Jerod Santo:** \[00:06:04.14\] I see. So you've also tricked me. We're doing a Clojure episode -- I didn't realize it, but here we are; we're doing Clojure.

**Yehonathan Sharvit:** Too late.

**Jerod Santo:** \[laughs\] Yeah, we're here now...

**Yehonathan Sharvit:** Yeah. And it seems that people are interested and intrigued by this topic. I got a lot of responses and questions from readers all around the world... And you know, it's not really new. I didn't invent anything. And Clojure also didn't invent anything. It just pulled some best practices from many, many languages, and make them into a coherent whole.

**Jerod Santo:** Right. So if we take something we don't understand, data-oriented programming, and compare it to some things that we may already understand, many of us understand object-oriented programming. Others of us also understand functional programming, and we try to fit this in somewhere amongst things that we already kind of understand. Is it set against object-oriented? Is it set against functional? Is it set inside these things somewhere? How does it relate to these paradigms that we're familiar with?

**Yehonathan Sharvit:** Okay, great question. It's both. Both against, both fit with... And you know, in 2022 it's very hard to put a clear distinction between paradigms and languages. For example Java, which is THE object-oriented programming language, supports functional programming. And even Clojure, which is totally functional programming, supports kind of object-oriented. And JavaScript, you can do both.

So it's not about languages. I think nowadays, most modern languages support many, many paradigms. But some languages guide you into -- in some languages, it's more natural to use this paradigm. So what is data-oriented programming? Data-oriented programming is a set of principles that makes it pleasant and effective for developers to write programs that manipulate data. Programs that - what we call information systems. Programs that manipulate data, but where the data does not belong to the program. Programs that manipulate data that they have not created. Programs where the lifecycle of the data goes beyond the program. For example, programs that manipulate data that come from a database. Let's say a web server. The web server does not own the data. It processes the data. And with this thing, according to data-oriented programming, you need a program that treats data as a first-class citizen, and allows you to manipulate data in a flexible way. And for that, it starts from a big, big thing against object-oriented programming. Because in object-oriented programming, \[unintelligible 00:09:10.07\] and behavioral data and code are encapsulated together into objects.

**Jerod Santo:** Right.

**Yehonathan Sharvit:** So the first thing that we do, we separate. Data can live on its own, and code can live on its own. Like in functional programming.

**Jerod Santo:** Okay.

**Yehonathan Sharvit:** So the first step of data-oriented programming is exactly the same as functional programming. The second step is that instead of using specific structure to represent our data, we prefer to use generic data structures, like HashMaps, like we have in Ruby, and in JavaScript, of dictionaries in Python... That's our main ingredient for representing data that we have fetched from the database. And that's where there is a little split, versus standard functional programming languages like Haskell, and all the ML families, where - there you use strongly-typed things to model your data. Here, we prefer to use generic data structures; mainly HashMaps and lists.

\[00:10:19.07\] And the number three, which is similar to functional programming, is that we never mutate data. We use immutable data structures. And there are very, very advanced - or very performant, sorry - immutable data structures for generic data structures. So in all languages, we have super-efficient immutable HashMaps, where instead of modifying the data in place, you create kind of a new version of the data, but without having to clone the original data. We can talk about that later, if you're interested. That was principle number three.

And principle number four is - okay, if you don't have types for your data, how do you prevent, how do you avoid the big mess that you will be into? If all the pieces of data that you're manipulating in your program are HashMaps, how do you know if in the HashMaps you expect a field that is called email, and user, and ID, and how do you know how to spell it? How do you know as a programmer, and how does the program know to fail fast, and not pass forward invalid data? And that's the way we do data validation in data-oriented programming, is by having the data schema separated from the data itself. And data is validated at runtime, not at compile time.

**Jerod Santo:** So these four principles of data-oriented programming. The first one separating the code from the data; the second one, representing data with generic data structures, like maps and lists. The third one treating data as immutable. And the fourth one, separating the schema from the data representation. Let's step through these and let's just focus in on each one for a moment.

So this first one, separating code from data... As you said, this is kind of like against traditional object-oriented programming, which is kind of defined objects as code plus data coexisting in the same entity. Data-oriented programming says separate those two. And so the question to that which comes to my mind is like, why? Why is it better to separate them, versus to have them together?

**Yehonathan Sharvit:** Because almost every developer that has worked in a production-ready object-oriented system has suffered from huge class hierarchies, and you inherit from something that inherited from something, and when you want to make a little change, you influence so many things that it's a nightmare of complexity. And also for code reuse. If you have a method of a class that does - I don't know, calculates the full name of a user by concatenating first name and last name, if you want to use this piece of code for calculating the name of an author, which happens to also have a first name and a last name, you need to have author and user inherit from a common object, that you call person, or that you call human being, or that you don't know how to call it exactly, and sometimes you can do it, and sometimes you need multiple inheritance... While the only thing that you need is the ability to call a piece of code. And you cannot really do that OOP in a simple way. There are tricks and design patterns etc, but in the most straightforward way, code is kind of in jail inside the objects that wrap it. And we want freedom. We have a political agenda; we want to free the world. And we don't want code to be in jail.

**Jerod Santo:** \[00:14:05.00\] I see. So if I have an object which is a person, and inside of that object there's the data of the person's first name and last name, and there's the code that says, "Here's how I represent that as their full name", I've implemented that inside of this little object, and it's stuck inside of there. And I have to do a bunch of tricks, whether it's inheritance, or includes, or imports, or whatever it is, in order to free that logic from the person and give it to other areas of my application that may also need the exact same logic. So the problem is the data and the code are wrapped up together, and that's trapping the functionality, and we want to make it free. Is that what you're saying?

**Yehonathan Sharvit:** Yeah.

**Jerod Santo:** Okay.

**Yehonathan Sharvit:** And I think object-oriented is fine where the data that you encapsulate in the object is not information. We have different kinds of data. Sometimes we have data, for example, the internals of the data structure. The left child and the right child, and the number of children, and is visited, and stuff like that. This is not what I call data. This is not information that comes from the outside. This is not something about the real world. It's something about your program. For things about your program, that's fine to use objects. But four facts about the world that come from outside, I think it's better -- they deserve to live on their own, not to be stuck into our mental systems.

**Jerod Santo:** Okay, so there's kind of like internal data and external data, is kinda what you're saying, but you're saying one's information and one's not. And it's okay to encapsulate internal things, because they are uninteresting to the outside world. But if you encapsulate things that are eventually interesting to the outside world, now you've backed yourself into a corner. I see what you're saying.

Okay, so there's the why, for principle one. What about principle two? Representing data with generic data structures. Why use a map, or a list - those are kind of the two main ones, right? List of things, and then like dictionaries of things, or maps, or hashes, or whatever your language calls them... When you could more richly represent them as what the world wants to see them as, necessarily? Why is it beneficial to just pass around generic things if we have the capability of building specific things?

**Yehonathan Sharvit:** Okay, that's the toughest question, and that's the question that comes up again and again; that's the strongest critique against Clojure and data-oriented programming... But also, that's the most interesting one. So let's say that we have a way to do data validation. We will talk about it when we talk about principle number four. So let's say we are not scared about having to manipulate invalid data. Let's put this fear aside for a moment, and let's just see what we lose with the static typing. When I force data to be -- let's say I manipulate books, and I have a struct, static types for a book. Let's see what kind of problem we have when we force this thing about the real world, which is information about the books; the title, the number of pages - that something in the real world. But when I force it to be wrapped into my algebraic data type, or my struct, let's see what do we lose.

\[00:17:50.18\] First of all, we lose the ability to refer to fields by their name, at runtime. Because a struct, when it's compiled, it becomes just an array, and the field names become offsets inside the array... Meaning that, for example, it's very hard to be dynamic and to receive, let's say from the user, the name of the field they want to retrieve. Because the name of the field is a dynamic string, and there is no real easy way to fetch dynamically the value of a field inside a struct, without using reflection. While if it's just a map, you can access any field in a map by its name; it's the essence of the map. Does it make sense?

**Jerod Santo:** I think so. But you said absent reflection, and lots of languages have reflection abilities... So you can get at the names of things pretty reliably, right?

**Yehonathan Sharvit:** Yeah. But I think that if you write a program and you rely too much on reflection, you will be rejected by a code reviewer. They will say, "Hey, what are you doing here?" And in a sense, if you use reflection -- and anyway, when you use reflection, you bypass the type checker. So you do data-oriented programming, in a sense. If you use structs and access fields with reflections, it's the same as using maps. So just use maps, if that's what you want to do.

Let me give you an example. Let's say you fetch from the database information about a book, with the title and number of pages, and you want to rename a field. Because in your API, "title" should be called "the title", and "number of pages" should be called "pages". In object-oriented programming, what you need to do is to create another struct - or if you do static typing, you need to have two structs. One that holds the data as it is stored in the database, and you need another struct with the names as they need to be seen by the API. While if it's just a map, in a map you can rename field. It's just a two-line function to rename a field in a map. And if you want the user to decide how to rename the fields, also you have a big problem. You cannot create a priori data types for every possible combination. If you want flexibility with your data and your field names, you need a flexible data structure, like your map.

**Jerod Santo:** Okay. So from the static typing side though, aren't you throwing away a lot of upside? You're throwing away a lot of tooling, inference, you're throwing away a lot of refactoring abilities... I know you said set validations aside for this part of it, but obviously, that does play a role in decision-making processes. I'm gonna show my true colors; I'm more of a dynamic guy myself, so I'm gonna be an easier sell than probably a lot of our listeners when it comes to that side of it.

**Yehonathan Sharvit:** Yeah, I can hear in the way you ask the question. You just pretend that you ask the question.

**Jerod Santo:** Well, I'm representing what a lot of people think. I work in small teams, small code bases; I don't have a lot of the problems that static type solves, personally. I've seen them and I've heard them from a lot of people, and so I represent them... But yes, I am not going to be the hardest sell on this, but I don't want to be a pushover either. So...

**Yehonathan Sharvit:** Yeah. I think that most of the concern of static type people is based on fear. Like, "Oh, I need to know what I have." It's like you're a control freak. And tooling.

**Jerod Santo:** Yes, tooling is the big one.

**Yehonathan Sharvit:** But if you put those two aside, and you are interested about what really happens when the program runs, after you have written it... Let's say you want to debug a program in production. So there, your tooling will not really help you. And you want something that, when it runs, \[unintelligible 00:21:49.08\] it's not the artifact, you want the runtime to be simple. And the less complex data structures you use, the simpler your program. Moreover, it's very easy to carry maps around.

\[00:22:06.02\] For example, the API for Google Docs, right? You want to modify the title of the Google document. If you are using a generic data structure, you pass the JSON, with the title, and document, and body, and the author name, and first paragraph... And that's what goes on the wire anyway. But if you are a static -- and you could have this map for many, many functions, right? You can write functions that enrich the map, that remove stuff, that rename fields, etc. While if you use a static type API, like the Java API, you cannot really do that. Everything needs to be statically known. And \[unintelligible 00:22:50.01\] set title, set author, set this, set that. And writing unit tests, also...

I think one way to measure the readability or the goodness of the code is to see how easy it is to write tests for it. And when you use generic data structures, it's very easy to write tests for your code. You just create a map with the field that your function expects, and you call the function. And it could be that a function that in production receives a map with 10 fields, but only looks at two, in order to test it, you don't need to create the whole map, with all the 10 fields. You can just create a small map with the two fields that you know the function cares about. And this kind of flexibility is really valuable.

**Jerod Santo:** Really valuable. But does that flexibility scale? So one of the things that I've found over time as I've written many Ruby programs, and done it in such a way that it's flexible, and I could just pass maps around, and I could just test the parts of the maps that I'm interested in, is that I ended up writing a lot of tests, a lot of tests that are merely type checking. Like, I'm merely saying, "Did I get what I expect?" I know you said that we can set validations aside, but we really can't, because a lot of our programs are the interface between a human and a database, right? And like, in between there is like, "Did I get what I expect from the human?" A lot of what we do is that. And I can see the static type argument that if you can enforce that constraint formalized in a way, then you can guarantee it and not have to write a unit test that says, "Well, what if they pass me nil? Now what do I do?" How do you respond to that in data-oriented programming?

**Yehonathan Sharvit:** Yeah, so let's keep to principle number four, and then we'll go back to principle number three.

**Jerod Santo:** Okay. Alright, so let's set that one aside... Let's go -- yeah, straight to principle four. And we'll go back to three. Separating data scheme from data representation. Go ahead.

**Yehonathan Sharvit:** So how do we do data validation in a dynamically-typed world, right? So I'm writing an HTTP server, an API, with lots of endpoints, and each endpoints receive a payload, and each payload has an expected shape for the data. So until I think four years, the way I would validate that the data is valid is - most of the time, I just won't validate, and be optimistic, and then fail in production... Fail with unclear errors. Because instead of having a failure that said, "Hey, you passed invalid data", I would have "Foo was called with a nil." And it was very hard to \[unintelligible 00:25:38.14\]

**Jerod Santo:** Right. You can't call this method on this nil thing.

**Yehonathan Sharvit:** \[00:25:43.14\] So that works well when you're a startup, and you don't really care about safety, and you need to move fast. And that's what I did until four years ago. But four years ago I discovered that there is a way to express programmatically the expected data shape. It started from something called in Clojure "clojure spec", and then something called malli, and something called JSON schema. So let's talk about JSON schema, because it's universal. It fits in every programming language.

So in JSON schema, you have the map that describes the expected field in your map. For example, you could say - the schema for a book, I have a field called Title, a field called Pages, Title should be a string, Pages should be a number. And there are functions for validating and saying, "Okay, here is a piece of data that I got from the user, here is my schema. Please validate. And if it's not valid, tell me why." And then with no code, just by writing the schema, you can automatically with middleware generate -- you don't need to write code; you just use a middleware that when your endpoint receives an invalid piece of data, returns to the user the 404, or 402, or 405error code automatically, with explanation about, "Hey, the field Title was not provided." Or "You provided Title, and it was not a string." Or even better, "You provided Pages with a number that is negative. Or with a number that is higher than a million." You can do lots of advanced things that you cannot really do with static typing... Because you do runtime check. And anyway, the kind of check that you want to do are at runtime. You cannot validate at compile time user input, right? You agree with me.

**Jerod Santo:** Sure.

**Yehonathan Sharvit:** So instead of writing the class, that says, "Hey, that's the class of a book, and let me try to JSON parse this string into my book", I have a schema, which is super-flexible, I can express many, many conditions, there is no limit... I can even pass function as predicate, or numbers in a range, or stuff like that... And everything is -- it's just code that's middleware for HTTP servers, that automatically generates the proper error response when there is a failure.

So I think for that, for API, for validating user input, dynamic programming is even better than static programming. It's not only as good as. I claim it's better for this kind of data validation. There is another kind where it's worse, but this first kind, it's better.

**Jerod Santo:** Okay. It's better because -- say why it's better again. Why is it better?

**Yehonathan Sharvit:** Okay. First of all, because you can express conditions that are not expressible as static types. Like number in a range. Number of pages should be between 0 and 10,000. You cannot express that with static types. That's number one. And number two, because you can, for example, very easily generate the swagger JSON from the schema. And in fact, the language for Swagger is based on JSON schema. And generating JSON schema from a class is doable, but it involves tricks, reflections, and stuff like that... While generating Swagger data from JSON schema is straightforward. And you can programmatically also manipulate -- okay, I will do more later, but until now. So it's richer than static typing, because you can express any condition, and it's a perfect match with Swagger, let's say. And there is no downside.

**Jerod Santo:** \[00:29:40.28\] So conceptually, what you're saying is you get to defer the typing, or you get a -- you're basically saying, "Well, you're going to have a schema, you're going to have types, or validations, and like requirements of their data, but it's going to be separated out from your application code." And as long as it's enforced at the last minute, or at the end of the chain of operations, and as long as the result of that failure is matriculated back up to a place where it's displayed to an end user... Right? It's not like an explosion, or a crash. It's a displayed error that's somehow built into the system; then it's better of doing it kind of at the edge notes of your code, at the entrance point.

**Yehonathan Sharvit:** Are you convinced? Or half-convinced, or...?

**Jerod Santo:** Um, I'm interested. I understand why you used JSON schema as an example, because it's broad-sweeping, versus a specific implementation or toolchain inside of Clojure... But I wonder how accessible this setup is to different developers in different circumstances. Oftentimes what we find is inside of an application framework you end up with -- even if you have a strong schema as your database layer, for example, you end up with "Undefined is not a function" calls, as people send input. And I wonder how practically people would get this going for themselves.

**Yehonathan Sharvit:** Yeah. So here, you need a little bit of discipline, because nobody is going to force you to write a schema for your endpoint, for the payload and for the response. While in statically typed languages, you are forced to type. So yes, that's maybe a little downside. But once you get to it, you do code review and you won't accept a new endpoint without a schema.

Where it's more challenging is when we talk about another kind of validation, which is - okay, I've passed my endpoint, and the endpoint calls a function that calls a function that calls a function that calls a function. So I'm going down the stack. And now I call the function foo, that receives the book. But inside the code of foo, what I see is that the parameter is called book, but the type is just a map, or it's just a val. And as a developer, I have no way to know that the book parameter received by foo is a map with those fields. And I can use JSON schema again here, but it is overkill to use JSON schema everywhere. So in Clojure, we have different tools for that. And when they are wired properly, they give you kind of ID functionalities. So when I wire it properly in my Clojure code, I have the function foo, and I can say "Here it's a map, but here is the schema of this map." And if I call foo from somewhere else, and I mistype the field name, the ID will tell me "Hey, you have passed an invalid input to foo", like in a statically typed language.

I don't know, maybe you have seen in VS Code, which relies on JSON schema, when you want to edit some configuration files, VS Code knows the JSON schema of the file. And if you mistype the name of a field into your configuration, on the fly VS Code will tell you "Hey, you have an error." Because actually, there is a repository of JSON schemas that VS Code reads from there.

So we can have something similar in our code; not only for configuration data, but also for function arguments. So here, we are not empowered with static typing. In terms of tooling and internal functions, when the data flows, it's not as good as in static typing, I admit. But what we do have is when you decide to type the function arguments - you're not forced to, but when you decide to do so, one benefit that you have is unit test for free.

Let me tell you -- again, let's take the function foo, that receives a book, and it's supposed to return whether it is a good book or not.

**Jerod Santo:** \[00:34:16.18\] Yeah, thumbs up or thumbs down.

**Yehonathan Sharvit:** Yeah, thumbs up or thumbs down. Let's say thumbs up is more than three stars, something like that, and less than 1000 pages. If you have a schema for your book, what you can do is use JSON schema library that -- so the first library that we discussed would validate data against schema, but there are libraries that generate data out of a schema. So once you have your schema, you can say, "Hey, generate me 1000 samples of books, call the function, and make sure that the result is as I expected." It's called generative testing, and it's very easy to do that. In my book, I show a couple of examples how to leverage these capabilities, in addition to unit tests, where you cover 5-10 cases; you can cover all the cases. You can say, "generate all possible input, or a thousand or a million of possible inputs, and validate that my code behaves properly." And every time I use that, I find bugs; you know, some edge cases, with regular expressions, with special characters, with negative things, positive things... And doing so with static types is much, much more challenging. To generate random data out of algebraic data types is more challenging. I'm not saying it's impossible, but it's more challenging; while with JSON schema and maps it's very, very natural.

**Jerod Santo:** Yeah. So have you ever tried using your database schema as the schema? Or do you need like an internal representation and an external representation?

**Yehonathan Sharvit:** No, usually it's different, because usually in the application you don't treat your data as tables. You have maps instead of tables, and those maps are denormalized instead of normalized... So I don't think it's a -- but I'm sure that there are tools that takes an SQL schema and translates it into a JSON schema. Yeah, there is an NPM package, sql-ddl-to-json-schema.

**Jerod Santo:** How does GraphQL fit into this story?

**Yehonathan Sharvit:** Don't talk with me about GraphQL... I tried GraphQL and I was so upset, so upset.

**Jerod Santo:** Why?

**Yehonathan Sharvit:** Because it's too rigid. It's too rigid.

**Jerod Santo:** Too rigid.

**Yehonathan Sharvit:** Too rigid. And I really tried hard. Like many things, when you start, it's great; for Hello World or an MVP, it's great. But then when the complexity of your requirements grows, it becomes unmanageable. And we had to do so many tricks to please the GraphQL type checker... And it added too much complexity to our business problem.

**Jerod Santo:** So JSON schema in relation to GraphQL is much less rigid. JSON schema is much more --

**Yehonathan Sharvit:** It's much more flexible. I prefer to have REST plus JSON schema, than GraphQL. GraphQL also has the thing that -- let me just give you an example. If I remember correctly, you cannot have union types for input data, something like that. They decided it should not be done. And there is debate on it in the GitHub issues, so probably they will add it in a few years... But sometimes you need it. So you end up having -- what we did at the end was to pass a string as part of the data to GraphQL, and to parse it as JSON in order to get back the flexibility that we wanted.

**Break:** \[00:37:47.07\]

**Jerod Santo:** Let's loop back to principle number three, because we skipped over it... Treating data as immutable. This one is an easy sell for people who have been doing FP for a while, but it's a hard sell for a lot of OOP proponents.

**Yehonathan Sharvit:** So I think it's a hard sell just because we got used to mutation... And I think that a while ago in Java strings were mutable, and then they fixed it to be immutable, and it's much, much, much better. And I don't think that anybody likes mutation. It's just they think that if you go to immutability, you will pay a huge performance cost.

**Jerod Santo:** Right. Because you're copying data around.

**Yehonathan Sharvit:** So I think the interesting question is "How can you manipulate data in an immutable way, without the performance hit?" That's the interesting question.

**Jerod Santo:** What's the interesting answer?

**Yehonathan Sharvit:** The interesting answer is Git.

**Jerod Santo:** Git?

**Yehonathan Sharvit:** Yeah. Git is an immutable source control tool, and every time you do a commit, you don't do a modification; you create a new node in the tree, and you just move the pointer of the branch that says, "Hey, now you're going to point to this commit." But the previous commit is not modified. So the Git tree is immutable. Now, the question is how do they do the magic? How do they allow us to create a new commit, with let's say ten changes in ten files, and they create the illusion that you have a new tree, without creating a new tree. And in Git, you can go back in time 10,000 commits ago, and in a millisecond you have the new folder hierarchy. So there is no performance hit, and they don't replicate your whole tree on each commit. So what is the secret behind Git? It's called structural sharing. Are you familiar with this term?

**Jerod Santo:** No.

**Yehonathan Sharvit:** Okay. So let's start with Git, and then we will see how it applies in the data. So Git - you have folders, and in each folders you have folders, and folders, and folders, and then files. So imagine that you have a hierarchy of 10 folders, and you want to change a file at the bottom of the hierarchy. So what you can do is to create a new tree... And let's say at the first level you have five folders, and the file that you want to change belongs to folder number five. So all the other folders can be copied by reference, safely, because you don't change them. Folder number five you cannot copy by reference, because you have a change below folder number five. So what you do is you create a new folder, \[unintelligible 00:41:41.06\] but all the children of Folder 5, except the one that you are changing, you can copy them by reference. And you do that recursively, until you reach the leaf. And that's what Git does. So at each level, it copies by reference, all the children, and it creates a new node for the modified node. And that's structural sharing. And we can do the same trick with maps.

\[00:42:08.07\] So let's say you have a map with 10 fields, and field number 10 is also a map; and you want to modify a field inside field number 10. So you copy by reference the nine maps, and no matter how big they are, it's just a pointer copy. And for node number 10, the map, you create a new node, and you copy all the children of node number 10 beside the one that you want to change.

**Jerod Santo:** Gotcha. So you're only copying the diffs. The new stuff is the only thing that's actually getting new memory allocated; everything else is just referencing existing... And so that's why it's better than it used to be. Yeah.

Okay, so imagine for the sake of conversation that you've completely convinced me, I bought in, I'm now a data-oriented programmer... So I separate my code from my data, I use only generic data structures in my application, everything's immutable, I'm not doing any mutations, and I have a separate data schema from my data. And I'm living the life, and I'm going about my merry way. What does my life look like? What have I gained? What am I experiencing? How many rainbows are there, and unicorns? Give us the best case scenario of adopting this. Is it better in every way? Are there trade-offs? Go ahead and paint that picture.

**Yehonathan Sharvit:** Yeah. So first of all you, you belong to the population that is enlightened, and you are grateful for that. And now you look at all your former colleagues and you see how much they suffer, and you pray for them.

**Jerod Santo:** \[laughs\]

**Yehonathan Sharvit:** And you buy them books, "Data-oriented programming", with your money, and you give them away to your friends, hoping that they will also make the move and be enlightened.

**Jerod Santo:** There you go.

**Yehonathan Sharvit:** Seriously. \[laughs\] Let me just mention - I don't know if it was clear, but those paradigms, those principles are applicable in any programming language. It's not applicable only in Clojure. You can apply them in Java, or JavaScript, in Ruby, in Python... Virtually, in any programming language. Moreover, you are not forced to embrace them as a whole. You can decide "Okay, in some places of my code I will just separate code from data, but I will keep static typing. And in other places, I will generate data structures, and in some places I will allow mutability if I want." So it's cherry-pickable.

Okay, now let's say you decided to write your HTTP server in the data-oriented programming way. How does your life look like? So if your life looks like that you deal only with the business logic. You don't deal with pleasing the compiler, or pleasing the language. In data-oriented programming you have so many goodies in terms of data manipulation as part of the language, or as third-party libraries, like \[unintelligible 00:45:12.01\] tools in Python, Lodash, in JavaScript etc, that it's very, very easy to manipulate data, to massage your data, to read it like this, to manipulate like that, to join, and to pass it forward... Which is what most of our APIs do. They read data from one place, from another place, they merge together, and they pass it forward. You don't deal with serialization, because serializing your map is a problem that is completely solved with the library; you don't deal with creating the Swagger from your endpoints. You just have your schema and middleware create the schema. You don't do validation; it is done by middleware. So you only do business logic. You generate unit tests by a randomly-generated data, you pass data around, you pass map around, you use maps, and you live happily. And from time to time, someone says, "Hey, what is the field that this map expects? Why didn't you document it?" And then you say, "Oh, I should have written a schema here to make it clearer." I think that's the problem that has not been solved.

**Jerod Santo:** \[00:46:27.11\] So you've got to have those schemas. That's the discipline.

**Yehonathan Sharvit:** Yeah. I think that's the problem that is not yet solved. It's a tooling problem. We don't yet, in 2022, have a common way to combine, to express that this argument is expected to be of this schema. We can do that, as I mentioned, but it feels a bit awkward. It's a problem that is not yet solved. And let me tell you something interesting that happened to me. In the beginning of last year, I was contacted by the main engineer of a very interesting language called Ballerina. Have you heard of Ballerina?

**Jerod Santo:** Yeah, I think we did a show on Ballerina. It's like designed specifically for APIs, right?

**Yehonathan Sharvit:** Exactly. So you did a show.

**Jerod Santo:** Or for the cloud. I can't remember how they pitch it. Yeah, we did a show like two or three years ago on Ballerina. I haven't heard of it since, honestly.

**Yehonathan Sharvit:** Okay. So it has continued its evolution, and the Ballerina of 2022, it is marketed as a data-oriented language. So those guys came to me -- you know, it's an army of developers. It's 100 developers working for five years. And the manager of all this army came to me and said, "Oh, your books look very interesting. Do you mind writing an article about how Ballerina fits with the paradigms of your book?" And I was "Wow..." So I did a little research about Ballerina, and I wrote a couple of articles in InfoQ about Ballerina... And one of the very interesting things that Ballerina fosters is they have something which is called the flexible type system, which is neither static, nor dynamic. It's in the middle. And it's super-interesting, because it gives you all the goodies of a statically-typed language, with all the flexibility of a dynamically-typed language. Let me give you an example to illustrate what it looks like.

So the syntax for maps is very similar to JavaScript - you know, curly braces and JSON - but for accessing a member, you have two different syntaxes. You have the dot notation, and the square bracket notation. In JavaScript, both notations are equivalent, but in Ballerina the dot notation is for fields that are at compile time part of your data, and the square bracket notation is for dynamic types. If, for some reason, you want to say "Here, I want to add a new member to my data, which is not part of the schema, dear compiler, let me do so." So most of the time, you will use the field that you know at compile time, and from time to time you will allow yourself to add new fields.

**Jerod Santo:** You can splurge a little, you know? You can go out for the evening.

**Yehonathan Sharvit:** Exactly.

**Jerod Santo:** Treat yourself nice, yeah.

**Yehonathan Sharvit:** And for me, I think it's the future. I don't know if Ballerina is going to nail it down, or maybe another language... But I don't think that everything is perfect in the dynamically-typed languages; even with JSON schema, like I mentioned, we have the tooling problem. With static typing we have rigidity problems... And maybe we need a new language that will combine the best of both worlds.

**Jerod Santo:** Yeah. Or maybe that language is not Ballerina specifically, but this panacea -- maybe it's too good to be true. Maybe there is no such middle ground that we can actually stake out... Because the requirement of discipline - you know, if you provide me the ability to shoot myself the foot, I may just do it over and over again until my codebase is unmaintainable... I don't know. I mean, that's what you have in dynamic, and we do okay... But I do think tooling is definitely the downfall at this time, of the dynamic world. We see all the cool new tools coming out, and we're like, "Wow." This is why we can't have nice things. But we do have freedom.

**Yehonathan Sharvit:** \[00:50:21.28\] Yes. And the tooling also gets better and better.

**Jerod Santo:** It does.

**Yehonathan Sharvit:** Like I said, in Clojure we have clj-kondo, with malli, and there is decent integration. It's not like, you know, Java IDs, but it's getting closer. But future will tell.

**Jerod Santo:** Very cool. Well, anything -- I'm sure there's areas that we didn't touch. The one thing that you mentioned you might return to was the circumstance in which the schema representation is worse than static typing. You mentioned in the case of API endpoints with JSON schema it's better, for the two reasons that you stated. What kind of program in which it's actually worse?

**Yehonathan Sharvit:** Yeah, so it's not the kind of program, but like where in the program.

**Jerod Santo:** Okay. Where.

**Yehonathan Sharvit:** So we have two kinds of data validation. One at the boundaries of our programs - and there, the validation is inherently dynamic, because you get output from the outside. So the validation, by definition, cannot happen at compile-time. It cannot be static; it has to be dynamic. So that's where dynamic programming has an edge. But when you are inside your code, when a function calls a function that calls a function, here statically-typed languages have an edge. And we have the tooling problem.

**Jerod Santo:** Alright. Well, what about community? Is there a place where data-oriented programmers hang out, discuss, tell horror stories? Is it the Clojure community? Are these just the same communities?

**Yehonathan Sharvit:** Unfortunately, not yet. Not yet.

**Jerod Santo:** Okay. Well as the author of Data-oriented programming, and the guy who the Ballerina folk come to for their punditry, maybe you could be the one to get something started around this group of people who, it seems like, at least Clojure land - Clojure seems to make this accessible, this style. What are other languages or areas where it's pretty easy to do data-oriented programming?

**Yehonathan Sharvit:** I think JavaScript is really a good fit; data-oriented programming is natural. And in a sense, TypeScript is kind of data-oriented, because at runtime the types are not there. At runtime TypeScript is JavaScript. So TypeScript is like a linter. It's not really a statically-typed language. It's like a linter, a static type linter.

**Jerod Santo:** Yeah.

**Yehonathan Sharvit:** So in a sense, TypeScript is kind of -- and you know, in TypeScript you can say "Here, leave me alone. It's anything, or any", or whatever.

**Jerod Santo:** Right. That's kind of your eject button from TypeScript, is the any type, right?

**Yehonathan Sharvit:** Yeah. But even without any type, what I wanted to say is that in TypeScript the types are not part of the data. You still have the freedom to create types decoupled from the data. The types are like glasses with which you want to look at the data. And you could have the same data and look at it in the function as being this type, and in another function it's another type. For one function is just a person, and For another function it's an author, and for another function it's just a map.

So what I like in TypeScript is the decoupling between types and schema. So that's why I'm saying maybe it can be considered as a data-oriented programming language.

**Jerod Santo:** Gotcha. Well, there are more and more people writing TypeScript each and every day, so maybe we have more people with access to this style. If it is interesting to you, check out Yehonathan's blog. There's lots of extracts from the book and blog posts out there, covering the principles and some of the history of this style. Of course, there is the book Data-oriented programming out there, published by Manning. Check that out. We'll have links to all the things in the show notes, so people can connect with you, connect with the book... And hopefully - you know, I like that it's cherry-pickable. People can start to integrate some of these styles, these principles into their code. You don't have to go all-in. You can say "I'm gonna start writing my programs immutably from here on out", and you can just kind of adopt that as you go. So all four things, you can build towards that perfect world where you're completely enlightened and living the good life, as Yehonathan is. Thanks so much for coming on the show. I really appreciate it.

**Yehonathan Sharvit:** Yeah, my pleasure.
