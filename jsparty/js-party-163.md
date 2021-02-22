**Jerod Santo:** Oh yes, it's time once again, friends... It's JS Party time. I'm Jerod, I'm your internet friend, and I'm joined by long-time JS Party friend, Kball. What's up, KBall?

**Kevin Ball:** Hey, hey! Glad to be here.

**Jerod Santo:** Glad to have you, as always. And we're joined by a special guest - Eric Normand is here. Eric, thanks for coming on JS Party.

**Eric Normand:** Yeah, thanks for having me. This is quite a party.

**Jerod Santo:** We like to have fun, we like to talk about JavaScript and the web... We think these things are fun, and so it's a nice combination. Today we are going to talk about some programming paradigms - one specific paradigm, and maybe contrast it to some other ones. Eric is a long-time FP guy (functional programming), and JavaScript is a functional language, sort of. JavaScript is a multi-paradigm language, so it has some functional things to it, it has some object-oriented things to it... It's very general-purpose in that way. And Eric is an advocate of FP, and says that you can improve a lot of things, write good code, maintainable etc. There's lots of virtues to functional programming. So that's the topic of conversation today.

Eric, why don't you start us off with the real basics of what makes a language functional. What does that mean?

**Eric Normand:** That's a really deep, philosophical question, "What makes a functional language?"

**Jerod Santo:** Dang, I was trying to start basic...

**Eric Normand:** \[00:04:04.21\] Yeah, yeah... So JavaScript, as you said, is a multi-paradigm language. Functional programming is possible in JavaScript; it's actually quite good, it's above average for doing functional programming... But I don't think anyone would say it is a functional language. There's other languages like Haskell, or Clojure, or Scheme... You know, these other languages are more focused on functional programming, and give you a lot more features that support functional programming.

JavaScript is kind of in this place on that graph of how functional is it - it's more functional than a lot of languages; it's more functional than, say, Java, for instance.

**Kevin Ball:** Yeah, it's not completely a dysfunctional language, like Java...

**Jerod Santo:** \[laughs\] Well, that's both functional and dysfunctional...

**Eric Normand:** Right. And it's not anti-functional, dysfunctional... It is certainly possible to do functional programming in JavaScript.

**Kevin Ball:** An occasionally functional language.

**Jerod Santo:** Right.

**Eric Normand:** Occasionally functional. And of course, you have to do a lot of discipline to maintain the functional programming. I like to say that JavaScript is okay for doing functional programming, and it's bad for learning functional programming, because you can always just slip back into procedural. You can just make a for loop wherever. But it's actually good for teaching functional programming. It has everything you need, but you kind of have to do it yourself... Because when I teach functional programming, I wanna show it's not just some feature of the language, it's a way of programming. So here is the odd way that you would program in JavaScript to keep it functional. So I find that it's pretty good for teaching.

**Jerod Santo:** So what is the mindset then? What is the way of programming that is functional, versus imperative, or object-oriented, or any other way?

**Eric Normand:** Functional programming is like an onion, so you can go real deep...

**Jerod Santo:** It gives you bad breath.

**Eric Normand:** ...and there's some people who go super-deep. But that first layer, that first gateway into the onion... \[laughs\] I started mixing metaphors...

**Jerod Santo:** It's like the Onion routing; it's like a Tor network kind of a thing.

**Eric Normand:** Yeah. I imagine it like -- have you ever seen the original show Get Smart, the intro, where he has 30 different doors he walks through...?

**Jerod Santo:** Yeah, and then he holds up his shoe to his ear and talks into it.

**Eric Normand:** Yeah. He has a cell phone in his shoe. Yeah, but you go through all these doors, and you get deeper and deeper into the sanctum of functional programming. Well, that first door is just recognizing the difference between what I call actions, calculations and data.

**Jerod Santo:** Okay.

**Eric Normand:** Calculations are often known as pure functions. They're the stuff you can do in your language that always gives you the same answer, no matter how many times you run them, or when you run them. So this is addition. 2+2 is always 4, it doesn't matter how many times you run that. But then there's actions that do depend on when you run them or how many times you run them. So reading from an immutable variable - if you read after someone has written to it, you're gonna get a different answer than reading before the other part of the code writes to it. Likewise sending an email, or writing something to disk - these are all actions, because sending the email zero times is different from sending it one time, or ten times.

And so making this distinction between actions that depend on time - because they're hard to deal with - and calculations is like the first gateway into functional programming. Oh, and data is easy. Data is just the stuff that doesn't do anything; it's just inert. The strings, and numbers, and hashmaps, and lists, stuff like that.

**Kevin Ball:** \[00:08:21.26\] I like how simple your language is there... Because I feel like one of the barriers to a lot of folks getting into FP is it feels like there's a lot of jargon. And you start talking with somebody and you're like "I just wanna send an email", and before you know it, they're talking about monads, and you're like "What in the world is all of this...?!"

**Eric Normand:** \[laughs\] Yeah... I think that - you know, and I speak for functional programming as a community - we have over-complicated it. Functional programming has been incubated in Academia, and you don't get tenure by making stuff easy. \[laughter\] You have to find a hard problem and solve it in some weird way, a novel way...

**Jerod Santo:** Right.

**Eric Normand:** And you don't show credibility by just talking about basics. You have to use the jargon and show that you're one of the club, you understand this, you've earned your Ph.D. by learning all these obscure terms. So that's a shame for the rest of the industry, for the non-academic side, that we don't have a lot of good literature that has taken the time to like "Let me just shed all that academic stuff, and start over, and talk like real people, without all the jargon."

**Jerod Santo:** Yeah.

**Kevin Ball:** So when you describe actions - and I'm gonna probably spend a lot of this trying to map between this, as I said, beautifully simple language that you're using here, and some of the language that I've previously absorbed for FP, and things like that. Is there a one-to-one between what you're calling actions and what are often called side effects? Or are those related, but not the same? Or how are you thinking about that?

**Eric Normand:** They're related... It's not one-to-one. The one-to-one mapping is -- so calculations are pure functions. But then you have this other mapping of function in the mathematical sense versus the language feature \[unintelligible 00:10:16.09\] So there's that problem there. Because arithmetic is not a function in JavaScript, right?

Anyway, so calculations map to pure functions, actions map to impure functions. So it's not the act of sending the email that's an action, it's the piece of code that you can pass around; it hasn't been run yet, it's just a closure, it's just a function that you're passing around, that when you call the function, it will send the email.

So I toyed a lot with a whole bunch of ideas, like "How do I name them so that the words are clear, but don't have all the wrong baggage? ...but I don't wanna invent new terms just because." So I wound up just not using the term effect, because - well, I mean, to get deep into it, I didn't wanna call them effect, because it's not the cause... Right? I'm talking about the code that sends the email, not the emails being sent. So even "cause" - that's not the right word either, so...

**Jerod Santo:** So get us on the same page with regards to a pure function and an impure function. Let's just start at base principals there.

**Eric Normand:** Sure.

**Jerod Santo:** Help us differentiate, if that's the big difference.

**Eric Normand:** \[00:11:44.23\] Right, right. So a pure function... Like I said before, the nice thing about a pure function is that you can call it -- you know, as long as you pass it the same arguments, it's going to give you the same result. And that makes it great for testing... Because when we test; we test on our development machines, we test on the build server... And then we wanna make sure that that same function that we're testing is gonna act exactly the same way in production. So by making it a pure function, we get that out of the box; we can guarantee that we can test it a thousand times and it's gonna give us the same answer.

An impure function - you can't do that. So notice it starts to become a lot harder to test. It might have to read from the database. Okay, now in your test environment you have to set up a database and put some data in there for it to read, and the reproducibility becomes a lot harder. You have to basically set up the bubble that that impure function runs in to simulate it working in production... Because that's when you want it to actually work, in production.

The other thing about actions that makes them hard, besides being harder to test, is ordering and the number of times they get called is actually the point of your software. I want the email to get sent.

**Jerod Santo:** Right. That's the point.

**Kevin Ball:** Once... And only once.

**Eric Normand:** Right, once.

**Jerod Santo:** Exactly. "Unless this condition happens..."

**Eric Normand:** Right, right. I wanna choose if the email gets send or not, and when it gets sent... So now - this is kind of the point of your program, is to apply the break in the car or not, or how much you apply the brake, and at what time. So by pushing as much stuff as possible into calculations, we've reduced the amount of hard stuff that we have to focus on - the actions, and ordering, and timing. We've reduced that, so we can pay more attention to it. Those calculations -- I'd like to say that functional programming in general has gotten it backwards; that we like to focus on the pure functions. But really, the reason we do so much code in pure functions is because they're easy.

**Jerod Santo:** Right.

**Eric Normand:** So we wanna just get them over with and throw them at the \[unintelligible 00:14:13.27\] and it can deal with them from now on. Now it's the actions; now we've gotta learn how to maintain the order and the timing in everything, and how many times they get run.

**Jerod Santo:** Yeah.

**Eric Normand:** And functional programming has a lot of tools for doing that, that other paradigms borrow from functional programming.

**Kevin Ball:** That's really interesting. You could almost describe it as it's another way of thinking about separating concerns... But in this case, what you're separating is the easy stuff and the hard stuff, and you're making sure that those are dealt with differently, so that you can really focus on the hard stuff by itself.

**Eric Normand:** Right, exactly. Exactly.

**Jerod Santo:** Because the hard stuff is the stuff that actually matters the most at the end of the day, because that's -- not to use the word "side effect" again, but that's the point of our programs, is to change the world somehow, right?

**Eric Normand:** That's right.

**Jerod Santo:** Or maybe it's just to provide some information, and that could be calculation, but most of the times valuable software changes the world, interacts with the world in a way, and these are our actions. I haven't thought about it that way; I always have -- once I started picking up that distinction, I've always thought "Yes, I want as many pure functions as possible, and I wanna minimize the impure functions", because... Easy and hard - easy to test, hard to test, all the things you've just described. But I've never thought of... It's because the hard ones are the important ones, and actually you're then -- I mean, it's all important, so it's relative. But the hard ones, the actions, are where the focus needs to be because they're hard, because they change the world, because they're the point. They're kind of the point \[unintelligible 00:15:43.06\]

**Eric Normand:** That's right. They're the point, and I really think that in discussions about what functional programming is, we've gotten it backwards, that we say "Oh, functional programming is all about programming with only pure functions." And I think it's really the opposite. It's like "Well, we've got this tool called Pure Functions, that will let us ignore them for a while, because we know they're not gonna change, and they're really easy to deal with."

\[00:16:12.25\] They're so easy to deal with that we can put a type system on them and the computer can figure stuff out about them. It's the side effects; it's when to launch the missile, and "Do I do this first, or that first?" and "How do I guarantee that in an asynchronous environment or a multi-threaded environment? How do I do that?" That's where functional programming has a lot to say, and a lot of constructs for dealing with stuff like that.

**Kevin Ball:** So can we talk a little bit then about what are the language features that are important for doing this? Because as we've currently described it, this is something that you could do in Java. You could separate out the easy, deterministic functions from the actions that are changing the world... And yet, as we described, Java is a dysfunctional language; it is not a good language for functional programming, whereas JavaScript is reasonable. And then there are these dedicated functional languages, or the languages that are really functional-oriented. So what are the layers of language features that make this paradigm easier or harder?

**Eric Normand:** I think the first one is something that most languages have, for this first gateway. It's simply having a way of not changing stuff.

**Jerod Santo:** Right.

**Eric Normand:** It's something like machine going -- it's like, every single machine instruction modifies a register. It adds two numbers and stores it somewhere; it adds these two numbers and stores it. So you have to modify, and you have to build in like a stack or something, to make sure that you can allocate local variables and all this stuff that you don't get out of the box.

Most languages that we use every day have this - they have local variables, they have ways to allocate new memory, new values... And then of course, you need the discipline to like "I'm not gonna change this after I set it" or "I have a list and I'm only gonna do a \[unintelligible 00:18:17.23\]" which we can talk about like an immutability discipline.

But then there's the next gateway, which is sort of higher-order programming... And to do that, you need to be able to make a first-class function, as you can in JavaScript. In Java you can kind of do it with Lambdas. That makes it kind of easier. But even if you faked it with classes that you instantiated, you can get by. It just seems very heavyweight to make a function or a class called Plus, then add it to numbers, right?

**Jerod Santo:** Right.

**Eric Normand:** But in JavaScript it's like -- you know, especially with the ES6 syntax, it's like six characters.

**Kevin Ball:** Just to be clear... When we're talking about a first-class function, that is a function that you can pass around as an argument. Is that a fair description?

**Eric Normand:** That's right. Yeah, that's it. You can treat it like a value in your language. So it can be an argument, a return value, it can be stored in a variable, or even in the value of an object, a property of an object, put it in an array... Anything you can do to a number, or a string, you can do it to a function.

**Break:** \[00:19:38.25\]

**Jerod Santo:** So we've talked about a couple aspects of functional programming languages... Immutability, which - you avoided that word; you had your own way of describing it, which was simpler, but I can't remember what it was... Immutability and first-class functions. What was the way you described immutability? Was that on purpose? Because you seem very careful with your wording. I think you said "The ability to not change things."

**Eric Normand:** Right. Yeah, so I use the term "immutability" -- I made a very conscious decision not to talk about language features...

**Jerod Santo:** Right. And that's all we ask you about... \[laughs\]

**Kevin Ball:** That was me. I'm the bad cop.

**Jerod Santo:** ...and yet here we are. \[laughter\]

**Eric Normand:** It's true, you do need some--

**Jerod Santo:** We need some hooks, you know?

**Eric Normand:** ...language features. But immutability is not a required language feature...

**Jerod Santo:** Right. You can do it on your own.

**Eric Normand:** ...because you can do it with discipline.

**Jerod Santo:** Yeah. You just don't change things.

**Eric Normand:** Exactly. You just don't change things. And so what I'm calling immutable is a value that you have -- even if it's just mentally marked as "I'm not gonna change this", sometimes you get help from your language... In Clojure, the data structures it gives you are immutable.

**Jerod Santo:** You can't do it.

**Eric Normand:** There's no methods on them that allow you to change them. But in something like JavaScript or Java, that's the default, that you can change the stuff. So you have to provide the immutability yourself as a discipline.

**Jerod Santo:** Mm-hm. And then we talked about first-class functions...

**Eric Normand:** Right.

**Jerod Santo:** So in JavaScript you can do immutable programming. In fact, there's libraries and things out there that will help you practice that discipline. But it does have to be a discipline, because you can mutate variables in JavaScript.

**Eric Normand:** That's right. And it's so easy to just assign to a hashmap, or an object as a hashmap, and delete keys out of it... If you do any of that, you're modifying it. Any other piece of code that has a reference to it, it's also changed for them, too.

**Jerod Santo:** Right.

**Eric Normand:** And I'm not saying it's bad; it's not bad to do that, or to be able to do that... But it's not immutable.

**Jerod Santo:** Well, to go back to your language from earlier, you're kind of taking what would have been a calculation and turning it into an action at that point, because you are changing the world...

**Eric Normand:** That's right.

**Jerod Santo:** ...and that's dangerous, because you're increasing the surface area of your actions, and we already decided that we wanna minimize those.

**Eric Normand:** That's right. Another thing about actions that I didn't mention was that they spread. So if you imagine function A calls function B, and function B calls function C, if function C is in action, meaning it depends on when it's called, then function B has to be in action too, because it calls function C... And then function A has to be an action, because it calls function B. This is kind of like a corollary of the definition of actions, calculations and data. A lot of people try to put layers and layers of wrapping around mutation, so that it goes away, but it can't. If you put it down at the bottom, everything above it is gonna have to be an action. What you wanna do is kind of reverse it...

**Jerod Santo:** It's interesting.

**Eric Normand:** ...and put it all at the top. Because the top is gonna be an action anyway. Your main function, for instance - that's gonna be an action. There's no way to avoid that.

**Jerod Santo:** Have a good piece of software... \[laughs\] "I ran it and nothing happened."

**Eric Normand:** Yeah... \[laughs\] It's something that just adds some numbers up... \[laughs\]

**Kevin Ball:** I think we'll get into this a little bit more later, but I think that ties deeply into the way that frontend frameworks and their move towards functionality - how they think about where state lives, and how you wanna push state up the tree, so that you can have more and more...

**Jerod Santo:** Pure...

**Eric Normand:** Pure components, yeah.

**Kevin Ball:** Yeah, I was gonna say pure components, but I was trying to figure out, like -- calculated components? What's the nomenclature we might use here?

**Eric Normand:** Well, yeah, and the move is that they become just functions of their props, you know?

**Kevin Ball:** Yeah.

**Eric Normand:** \[unintelligible 00:26:59.25\] and don't have any state or side effects or anything. I mean, that's the ideal, right?

**Jerod Santo:** Right.

**Kevin Ball:** Now, do we have to worry about the fact that by modifying the DOM they are in some ways taking action, or do we conceptualize that as "They return what the DOM should be, and a higher-level thing is what's actually having the action of changing the DOM"?

**Eric Normand:** Right. They are not actually modifying the DOM. They are just returning a value. And something else, which someone has carefully constructed, and presumably tested, is managing the actual actions that happen... Which is a common pattern in functional programming, where you kind of return a data representation of what you wanna get done.

A simple example is instead of a function looping through a bunch of customers and sending each one an email inside the loop, you could map over the customers and generate a list of the emails in a data representation (the subject, the body), and then something else will loop through that and send off the emails, maybe in batches, or however you wanna do it.

**Jerod Santo:** \[00:28:24.02\] Right.

**Eric Normand:** And that way, you're pushing more and more of the code into calculations, and then you just have this little tight loop that's just "Send an email, send an email, send an email..." It doesn't have to do any decision-making or anything. It's just a very simple -- \[unintelligible 00:28:37.21\]

**Jerod Santo:** So we're getting into some of these functional things now, where we talk about immutability - this is not a feature of JavaScript; it's something you can do in JavaScript. Then you have first-class functions - this is a JavaScript feature; so you can pass functions around as values, and that's very useful in functional programming, because that's what you wanna do... And now you also have these specific language features, which are sometimes standard library, oftentimes right there in the language, where these are functions which are useful to functional programming. You have map, reduce, filter etc. Explain why these lend themselves to make functional programming easy.

**Eric Normand:** Right. So these I call functional tools. They often come in the form of a function that takes a value, often a collection - you know, in the case of map, or filter - and a first-class function as an argument. And what they let you do is stop writing for loops, basically. For loops are a very imperative construct. They require you to initialize a variable and then modify that variable...

**Jerod Santo:** Each time through, yeah.

**Eric Normand:** You know, we've all done it... The i ++ , and the i is less than array.length, and all that stuff...

**Jerod Santo:** Right.

**Eric Normand:** And instead of doing that, you notice these patterns where "Look, I'm taking a list and doing something to every element over and over again. I'm doing that in a lot of different places. Half of my for loops probably are just that." So instead of writing that over and over again, I can consolidate that into one place - sometimes you might think of it as drying that up - and the first-class function is what lets you represent the body of that loop. You couldn't do it without a first-class function, because typically, when you abstract with procedural abstraction, you have a ten-step process and you say "Okay, the first three steps - I'm gonna name them in a function, and I'll just call them. And then the next steps - I'll name them. And then the last two - I'll name those." So now I just have a three-step function. But you can't do that with a for loop, because the for loop needs the opening and closing braces, and you can't separate them syntactically. It's just not valid syntax to do that. So there's no way to have "Here's the two pieces of bread for your sandwich together" and then define the ingredients on your sandwich separately, at a different time.

**Jerod Santo:** Right.

**Eric Normand:** Well, first-class functions let you do that. So you could replace a for loop with a for each. And the for each does the same thing looping through an array would do, where it gives you access to each element... And then you pass in what you want done to each element as a function.

So anyway, we have a bunch of tools like this. What I really like about them is they're very simple. You could write them yourself. They're not like some complex thing. You probably have written them yourself, and maybe you didn't know it. So map is like three, four lines long. Filter - it's a few lines. Reduce starts to get a little bit more complicated, but you could write it in a couple lines. And you know, there's a number of these. Lodash has a bunch of them already built in. I know a lot of people use Lodash; it's a really great tool for that kind of thing.

\[00:32:17.15\] So the reason I think that they're useful is it lets you transform really complicated, nested for loops into a sequence of steps. So you look at the for loop and you're like "I mean, I really have to trace through in my head what's happening in every iteration, and keep track of two nestings of what's going on at which point?" But if you turn it into a chained sequence of functional tools, it might be four or five steps, and each one is really simple and clear what it's doing. So you could -- you know, this nested for loop could have some conditionals inside. That conditional could be turned into a filter.

**Jerod Santo:** Right.

**Eric Normand:** So it's like "Oh, I'm only dealing with the even numbers. Okay." And then the next step is for each of those numbers we're calculating an offset in the string. That's a map, because you're calculating based on the input. And then it just becomes this sequence of what looks like linear steps operating on collections of data.

**Jerod Santo:** Yeah. And it's very easy to reason about, because you see those - boom, boom, boom, boom. And you can just hop into the middle of that and insert another thing right there...

**Eric Normand:** That's right.

**Jerod Santo:** ...or take that thing out.

**Kevin Ball:** When I first learned about this approach, it was probably one of the biggest productivity improvements or leaps that I've had in my career of programming... Because it changes the way that you think about this, and it gets you used to thinking about things as a series of transformations to the data.

**Jerod Santo:** Right.

**Kevin Ball:** And it really forces you to think about the data pipeline of how it's going through, which is in many examples a much more productive way to think about it, and a much simpler way to think about it than trying to think imperatively what are all the things I'm doing to a single item.

**Jerod Santo:** Yeah. You think smaller, because you think in smaller steps... Whereas in the past maybe you started that for loop, and then you've got your editor \[unintelligible 00:34:19.10\] there inside the for loop, and you're like "Now what are the eight things I've gotta do to get out of here?"

**Eric Normand:** Right.

**Jerod Santo:** But instead, you think "What's thing one? I'm gonna do that. What's thing two?" You think in those smaller steps.

**Eric Normand:** The other thing is you can just -- let's say you do the first step... You could just print it out. You just print out the value you got; test it out right there. Whereas if you're in a for loop, you're like "Well, I haven't done anything yet." Like, I've just got this local variable that I've been accumulating stuff in, but at what point do I print that out? At the end of the loop? But then something else happens to it, so I can't do that..." So having these steps - each one is an immutable collection, and you could print all of them out. You have a record of everything you've done.

And then the other thing is, like, often for loops start out really easy. And then as you add features, they accumulate local variables...

**Jerod Santo:** Conditions...

**Eric Normand:** Conditionals, and stuff... They just become really hard to work with and modify. But if you've got it in steps -- it might not be a linear series of steps. It might be four series of steps. But you can reuse the first two steps for the next set of steps. You can compose these however you want... But each step is clear; each step shows you "Okay, I've gone from a list of all numbers from 1 to 100, to a list of only the multiples of 3." And that's a concrete step, that is easy to understand.

**Jerod Santo:** So there's probably a lot of people out there thinking "Holy cow, I've been doing functional programming this whole time, I just didn't know it."

**Eric Normand:** I hope so.

**Jerod Santo:** \[laughs\] "At least in some parts of my code..." Right?

**Eric Normand:** Yeah. What I've noticed is a lot of people get to the map, filter and reduce...

**Jerod Santo:** And stay there.

**Eric Normand:** \[00:36:10.17\] Well, they stay there, yes. They get it, and they use them really productively, and that's great... But I would implore people to look at stuff that Lodash gives you besides map, filter and reduce... There's a lot of other cool tools that could really be great in your toolbox. One I really like is called frequencies. So if you have a sequence - or any collection, but let's say it's an array of values... It's surprising how often it comes up where I just wanna know how many of each thing I have; how many two's do I have, how many three's do I have, how many ten's do I have? And you can write that really easily. It's just a loop through this array, and you plop it into a hashmap with a one. But if it's already in the hashmap, you just add one to it. You could just write this, and now you have this reusable, very abstract, reusable function that is useful in so many algorithms.

**Kevin Ball:** You use that all the time.

**Eric Normand:** Yeah, yeah. So there's that one... There's one called groupBy, which is similar... Which instead of counting them, it actually puts them together, and the By means you're passing in the function of how to group them. Let's say you have an array of users objects, and you wanna group them by the first letter of their last name, something like that. You would pass in this array, and you would pass in the function that could calculate the first letter of their last rate, given one of them... And then it will make a map where all the e's are in an array, and all the b's are in an array... And there you go. Now you have them grouped in this way, and that's great for making indices. If you need an index so that you can do a quick look-up by a certain value, like the first letter of their last name, it's great for algorithms.

**Jerod Santo:** Yeah, because you avoid nesting, because you effectively return yourself what is conceptually a list of lists, and then you're just applying the next operation on that list of lists, and then you can flatten that back out and keep going.

**Eric Normand:** That's right.

**Kevin Ball:** Yeah, that type of grouping is often a super-valuable performance improvement, too... Because I so often run into code that I'm coming in having to make it scale after the fact, where folks have written something that basically does a nested pair of loops, that scales quadratically. It's like "Okay, for this case, go and find..."

**Eric Normand:** "For all the A's, loop through and figure out if it's got an A. Okay, now for all the B's, loop through..." Yeah.

**Kevin Ball:** Exactly. And you do a pre-groupBy, single iteration through a list, and then you list through the set of things you need to check, and you transform the quadratic operation into two linear ones, and suddenly it's fast.

**Eric Normand:** It's so funny, because we often think of making a data structure as like an expensive operation... But these days, people have so much memory on their machines that a little hashmap -- I mean, literally, this hashmap could have at most 26 entries in it. It's not big. And you're not copying the users. Those objects are just being referenced. So when you think about how little is actually being allocated, it's not that much. You've got 26 entries in a hashmap and 26 arrays. And the rest is all just referenced to the original user object. So we're like counting pennies over here, and people have millions in their iPhone.

**Break:** \[00:40:04.14\]

**Kevin Ball:** One thing that I think has brought functional paradigms very much front and center for many folks using JavaScript is the trend in frontend frameworks, and React in particular, to move towards more functional paradigms... So I'd love to get your sense of both what are the parts of that that are working well, what are the parts that are unintuitive, and how do some of the more React-specific concepts like hooks and things like that play into your mindset when you think about functional programming?

**Eric Normand:** Okay, this is a big topic. I think React is a great thing for the functional programming world, just making these ideas more popular. The thing that is really the most functional that I see is this idea of a component that takes props and returns DOM. And I don't know how old the audience is, but I remember jQuery, and I remember having to keep track of what the view has in it, and what I need to change... And then every now and then being like "I'm just gonna re-render the whole thing, because I've lost track." It was really hard. You're basically doing your own little ad-hoc virtual DOM each time. So this technology of the virtual DOM, this trick, is a really cool way of making it for the programmer a very pure-function experience, and then having the React team figure out the virtual DOM diffing, and actually modifying the DOM one time for everybody. So everyone using React is getting the benefit of that one development. I think that's great.

The stuff I worry about when I see people in the wild actually using React is them making impure components... Components that will call out to the server to get user data whenever they are mounted into the DOM. Now they're doing it with hooks, but they used to do it on component \[unintelligible 00:43:45.06\] or whatever lifecycle method they chose at the time... And what that means is now your component is in action. It depends on when it mounts, and how many times it mounts, and you have this same problem.

\[00:44:02.07\] And you see apps that have this issue where every component on the page -- you know, the idea is the component is supposed to self-sufficient; it's supposed to know where to get its data from, and how to get it, and it's gonna get it when it needs it. So you've totally given up any ability to control how many requests it makes, or when they get made...

So you have a thing where on a page it might make a hundred requests at the same time. Those are gonna get queued up in the browser in some random order, because you can't control it in an Ajax/asynchronous environment... And then maybe three or four will go out at the same time, and you're just waiting on them, and they're all blocking each other... It's the opposite of what I dreamed of when I first started using React. In React it's supposed to be very reactive; you click on something and it changes instantly, without a loading spinner, and stuff like that. Nowadays we've reimplemented the page refresh poorly...

**Kevin Ball:** \[laughs\]

**Eric Normand:** So I think that that's the wrong direction. What I really think it is is that people don't know the functional ideals they haven't made this first gateway step of actions and calculations, this distinguishing between them... And they're thinking of components as the building blocks of their whole application, when really they're just the building blocks of the view. They're just supposed to be used for projecting the state into HTML. I mean, this is my opinion as a functional programmer. I know there's a lot of ways to write software... But this is the mistake I see from my functional programming perspective. I do a lot of ClojureScript, and we don't do that in ClojureScript.

Clojure and ClojureScript are functional languages, and what we do is we keep the state outside of the DOM mostly. Sometimes you have a little bit of state in the DOM, where it makes sense. When I say "where it makes sense", I mean if you have a panel that opens and closes, that open/close state - it can be in the panel. It's tiny, it doesn't have any effect on anything else... It's fine. It doesn't hurt anything. It's so manageable that you're not gonna get into trouble. But the users' information? Come on, that's gonna be used in several places. You're gonna have a little avatar up at the top, you're gonna use the username somewhere in another component... So you wanna get that out of the DOM; just get it out. Because it needs an Ajax request... Just take it out of the DOM. So we don't put state in the DOM and we do all of our Ajax stuff outside of the DOM as well, outside of the components.

**Kevin Ball:** One question on that. So thinking about the React paradigm, and different ways -- like, there are many different folks who use it in more or less functional ways... And I love the language play, the English meaning of functional as compared to our technical meaning there... But there's trends towards "Okay, every bit of state should be done in a component that renders no view, and then it should use its own set of components that are pure, and there's things around that..." But one thing I was wondering as you were talking about the approach to using ClojureScript is does the model of context and context providers get closer there if you use context providers to manage the data? Or is that not quite what you mean?

**Eric Normand:** It does get closer... This is funny. In ClojureScript -- we were one of the first adopters of React. I remember David Nolan, the maintainer of ClojureScript, was experimenting with it back in 2013, and I looked at it back then, too... And then there was like an explosion of wrapper libraries in ClojureScript in 2013 and 2014... And we kind of set the trajectory back in 2014. So we haven't kept up to date with all of the developments in the React world...

\[00:48:23.21\] I mean, it must have been like React 10 or 11 when we stopped doing new features, because we had everything we wanted. We had the virtual DOM, we had a better event system that React gave us... And what more could you want? We could make a wrapper to provide anything else.

So we don't use context that much, but I am somewhat familiar with it. It does get closer... I still think that the big problem is that it requires those context wrapper elements, and that you can't make modifications outside of that. So this is what I'm talking about - I like to keep my state in a global variable, so an object that has semantics, in a global variable. That way, I can do -- like, what if I want to make a WebSocket to the server, and the WebSocket's gonna send me data, and I wanna put that into the state? Why should I have to go through a component to do that? The context requires you're still in the Dom, and you have to use some kind of a hook or something to get a setter for that context state, and then get it into the WebSocket...? Like, that's weird. How do you do that without all these problems? You can just have a handler on the -- I don't remember what the event is called in the WebSocket world, that "I just got a message. You handle that", and you just update the state. And then because React is reactive, it should just re-render everything that's looking at that state.

So that's what I see as one of the problems. It's a lot of workarounds, when -- why don't you just not have it in the DOM, and you won't have all these problems?

I do think another great advance is the hooks. They're composable (which is really nice), that you didn't have before with class-based functionality... But then the other thing which is very functional is -- so your components are functions, and so they have arguments. These are the explicit inputs to the function, and they have a return value, which is the DOM that they're returning. So in a strict sense, that's all you get; you shouldn't have any other inputs to your function, otherwise it would be impure.

But with hooks, you can use state, or use something and you're getting data from outside of the props, from outside of the arguments. But the nice thing is it's all at the top, and it's all kind of declared... It's a very declarative format. So you're bending the rules... Because this functional programming stuff - it's all a mental construct. Down at the level of the machine code it's all mutation everywhere. You just wanna be explicit about where is the data coming into this function. And hooks make that easy, because they usually go up at the top, so you can see "Okay, it's getting stuff from the props, and it's also getting stuff from this other thing etc." So that's the other good thing I like about it.

**Jerod Santo:** Well, I have to say, Eric, you are very good at explaining these things and your reasoning. I like how careful you are with your words. As I said at the top, you've been doing this for a very long time. I think 2001 is what your bio says you've been teaching FP to people for like 14-15 years, something like that... A long time, right?

**Eric Normand:** Yeah... A long time.

**Jerod Santo:** Yeah, a long time. So you've had a lot of iterations on how to explain these concepts.

**Eric Normand:** \[00:52:10.14\] Yes, yes...

**Jerod Santo:** And I think you've gotten very good at it, I should say... For those who wanna hear more from Eric, we had you on the Changelog back in 2017. Can you believe it? It was four years ago... Talking a lot about similar things. Because you've been beating the functional programming drum for a very long time. And that was a well-received episode; I'm sure we cover similar, but different ground on that. We'll link that one up in the show notes.

And you're also working now on a book. Like I said, you've been teaching this stuff for a very long time - in-person, online, courses, books, videos, all the things... You're working on a book right now called Grokking Simplicity. Do you wanna tell us about it?

**Eric Normand:** Yeah, sure. So the book is about functional programming. It's the kind of stuff we've been talking about. The first part is all about actions, calculations and data, how to refactor actions into calculations, how to implement immutability, and also how to do your functional tools, and how to chain them... And we also talk (something we didn't talk about much) about how to manage your actions. So there's a lot of stuff that once you get into first-class functions, you can start to build little primitives, little tools for managing the order of actions, or managing how often they get called... So those become higher-order functions, functions that take functions... So we go over stuff like that. We also do a little bit of design and architecture of functional applications.

The whole idea is that functional programming isn't like this field of stuff, this abstract field of study. It's a set of practical skills that industrial programmers - meaning people who work on commercial software - that we use to look at it in a more practical way, and start to document what we actually do... Because so much of the literature is academic that there's not much to build on for someone who's getting interested in it and just wants to get some practical stuff.

**Jerod Santo:** Right.

**Eric Normand:** And also, it's practical whether you go all-in in functional programming or not. These skills are very practical for building software. And sometimes it's exactly what you need, and it'll help.

**Jerod Santo:** Yeah, absolutely. And I think it's sometimes hard -- I think a lot of times the way FP is presented is impractical, pure and academic... And I think you're doing a great job of bringing it to the pragmatists, to the ones out there trying to use these things. Like I said, in some cases, in small ways, people are using it without even realizing it; it's empowering to know what you're doing and how you can embrace that, and follow it through to its full extent.

One thing that's cool about this book - because you have some exercises and some other things as well... So not only are you reading these things, but aren't there ways you can take that -- because it's a way of thinking, and sometimes you just need to practice that way of thinking, right?

**Eric Normand:** That's right.

**Jerod Santo:** And so there's opportunity there.

**Eric Normand:** Yeah. I mean, even just identifying the actions and the calculations... People have told me, early readers -- because it's in early access now; it should be published soon. But people have told me "Wow, that has changed the way I see all the software. I can now say "Oh, this is gonna be hard, because look, it's an action." And all this other stuff. Oh, that's easy to test. Let's just test it and get it out of the way." Those kinds of things really help people. And I haven't seen anyone, besides this book - even in my previous \[unintelligible 00:55:50.14\] because it's a lot of work... It wasn't just like me writing down what I know. I had to figure out what's the best way to teach this... Which is why I came up with actions, calculations and data, and all these little mnemonics for remembering this stuff. This is stuff that we do, and it changes the way you see programming. And no one had gone through and actually broken down functional programming to this basic level.

\[00:56:19.25\] You know, when you read a functional programming book, they might have one or two sentences explaining what a pure function is. Well, we spend the whole first part on that. We spend eight chapters just talking about what's a pure function, how do you make them, how do you recognize when it's impure, and convert it into a pure function, how do you make data immutable... All this stuff that is just kind of like a footnote in other books... I basically take a step back and say "This is the stuff that people need. You're not teaching the meat of it, you're just teaching the--" I mean, I call it froth. It's the froth of like "Oh, once you get all this other stuff, you can go super-deep." You're four levels into the onion, and you're doing all this cool stuff, but no one knows how you got there, because you're not making a path for people to follow from where they are. So that's what I try to do, is figure out where people are and bring them.

The book is called Grokking Simplicity, it's published by Manning, and it's available in early access, so you can get it now. If you buy it now, you'll get the updates. And once it's finalized, you'll get the printed version.

**Kevin Ball:** I think those mental model shifts are where the gold is. I mentioned, I think early on in my programming career this shift of thinking about loops, and into map and filter as data pipelines... It's a mental model shift, and it massively upped my productivity.

When you started talking about this distinction of action and calculation, and thinking about that - I can already see... Like, I'm thinking about that now. I've learned about pure and impure, but that shift did something for me, and I'm excited to explore that.

I'm curious if there are other mind shifts you have identified through your teaching or through going through this book that also provide those kind of step function changes in how you view programming.

**Eric Normand:** The third one that I deal with in the book -- so just to do them in order again... The actions, calculations and data, then the first-class functions and higher-order functions... You know, even learning that "Oh, wait, plus isn't a function. It's an operator. It's part of the syntax. But I can wrap it in a function and now it's first-class" - that's a big leap. And being able to pass it to a function - that's another leap.

The third one is starting to think about having a -- I call it first-class. Maybe that's the wrong term... But an explicit model of time. So when you're dealing with any domain, the domain itself is not going to always match the languages' model. For instance, if you have a function that sends an email, every time you call it, it's gonna send that email. But your domain says "Wait, I shouldn't send it more than once." So how do you make an explicit model of time, which is like once only - how do you make that out of the implicit model of time that your language gives you?

\[00:59:35.29\] So you have something like, how do you coordinate all these Ajax requests that are coming in in random order? You put them out in a certain order, but they're coming back however they come back... So you need something to reorder them in the order you want them to be in, and promises is one way to do that... But we talk about different approaches, different constructs similar to promises that you could do. So you're actually making a new model of time, that like "This is the order that things need to happen in."

Here's a simple one I can describe quickly... Let's say you have two Ajax requests you need to send off, and you need to wait for both of them. Okay, I know you can do Promise.all; that exists, right? But let's say you don't have a promise, and you wanna do it a different way. You can't put a callback on the one that you think will take longer, because it's not how Ajax works. They just come back in random order.

So you can create a little object that records how many times (let's call it) the done( ) method gets called. So that object has a callback, and when the done( ) method gets called twice - because you have two Ajax requests - it will then call the callback. This is equivalent to saying -- like, you go to conferences a lot. After the last session, you're like "Hey, let's meet down here for dinner." Well, you don't know who's gonna get done first, right? So if you get to the lobby and there's no one there, you have to wait, because the other person is coming. You both follow that rule and you meet up and you go to dinner, right?

So you wanna make little, simple rules like that, that you can put into your code. This is like a new model of time there. That's the third one.

**Jerod Santo:** I think you've sold me here... I definitely need to check this out. I only have one model of time, and it's the one that's always running out...

**Eric Normand:** \[laughs\]

**Jerod Santo:** We have friends at Manning. We've been working with them for a very long time, and they've been kind enough to give us three free eBook codes for Eric's new book, Grokking Simplicity. Like you said, it's in early access, but getting close to done now... And if you get it now, you'll get the final version as the updates come out. So three to give away, and all you have to do to enter is just join the JS Party channel in our Slack, because we're gonna keep it easy - we're just gonna give it away to our friends in our JS Party of our Slack. So if you're not in there, hop in at Changelog.com/community. Totally free, totally easy, and totally fun to hang out with us during the show, and in between shows as well.

Of course, if you do not win one of the three codes, we also have a coupon code for all Manning products. 20% off all Manning products. Use coupon code "podjsparty20" at checkout to redeem that.

Eric, this has been a great conversation. I feel like we really did just kind of scratch the surface, just some froth on the conversation... But you did a great job of explaining things to us, and answering all of Kball's hardballs, and my softballs... Thanks for coming on JS Party, it's been a lot of fun.

**Eric Normand:** Cool, thank you so much. This was fun.

**Outro:** \[01:03:00.28\]

**Jerod Santo:** I've gotta give props before I go back in to Igor for the best drop in the chatroom so far. He says "FP is like an onion. If you go deep into it, it makes you cry." \[laughter\] Nice... I like that one. There's your hater there, Eric...

**Eric Normand:** Yeah... \[laughs\]

**Jerod Santo:** Yup, they're everywhere. Everywhere you find a hater.
