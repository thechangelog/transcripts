**Jerod Santo:** Oh, yes, it's time once again for a JS Party. Welcome, friends, Jerod here... And I'm joined by two of my JS Party panelists. First off we have Nick Nisi in the house. What's up, Nick?

**Nick Nisi:** Hoy, hoy.

**Jerod Santo:** And we're also joined by Feross. How are you doing, Feross?

**Feross Aboukhadijeh:** Doing great.

**Jerod Santo:** Great, great. Well, as you may or may not know, we take listener requests around here, just like any good wedding DJ... And if you have requests for the show, of course, you can drop them into our Slack channel, or you can tweet at us. There's lots of ways, but there's an official way at Changelog.com/request, select JS Party in the dropdown there, and you can let us know if there's a specific guest you'd like us to have on, if there's a topic you'd like us to talk about... You can pick your panelists; we may or may not listen to your request, but you can throw in "Hey, I really wanna hear from Feross on this topic." We would love to hear from you.

The reason why I throw all that out at the top is because this topic we're about to take up was one such listener request, Bryan Vestey. He wanted to know about how we evolve alongside the JavaScript syntax. Let me go ahead and read what Brian had to say, and we'll get right into it. Brian says:

"I noticed recently that there are a lot of people who see the new shiny and try to fit in all the holes. A good example of this is the traditional function syntax and arrow functions, and how a lot of people will try to use an arrow function for everything. Personally, I feel that arrow functions are best when you need an anonymous function, or you need to keep the 'this' keyword constant while passing it around and the traditional syntax is nicer for top-level functions. I think it would be nice to hear everyone's thoughts on the changing syntax and how it relates to older syntax for the same thing."

I agree that that was a good topic of conversation; I'd love to hear what you two think about changing syntax. I have my thoughts as well, but let's open up the floor. New syntax - do you adopt it right away, do you wait? Do you love it, do you hate it? What do you guys think?

**Feross Aboukhadijeh:** Well, I don't adopt it right away, personally. I'm pretty conservative when it comes to adopting new syntax, mainly because I personally prefer not having to require a build tool to process the code before my browser can understand it... So I'm pretty conservative with what new stuff I use.

\[00:04:07.01\] One rough metric for when something is ready that I like to use is if ESLint can parse it out of the box. If my linter can understand it without having to do any kind of Babel shenanigans, then I'm like "Okay, I'll use this now." Usually, by then it's in enough browsers that if you have an aggressive user base who always keeps their browsers up to date, then it's fine to ship that out... That's my approach. But I'm pretty anti compilation, if possible. I'm a little weird like that.

**Nick Nisi:** I'll say... \[laughter\]

**Jerod Santo:** Nick wants ALL the compilation tools involved...

**Nick Nisi:** Yeah... \[laughs\] I still wait a little while, but that's because I heavily rely on my compilation step to support the new syntax. So I will start using something, and as soon as it's ready in the version of TypeScript that I'm running with... And I like that; I like TypeScript being this "blessed version" of the syntax that I can use, and then go from there... But yeah, I'm definitely on the compilation train with that.

**Jerod Santo:** Right. I'm somewhere in the middle, because I don't mind the tooling; I shouldn't say "I like the tooling." I think any tooling you can get away with not having is nice. I don't mind the tooling; it's usually there, or it takes some setup at first, but now it's there... So for many projects there's that bootstrap moment, which I agree is nice to skip if you can... But for most projects, it's already existing, so you're just like slotting in something.

That being said, I don't adopt this stuff just because it's there necessarily... Like "Well, here's a new way of doing the same thing", especially syntactic sugar, which some of these things are; we'll talk about maybe some features that aren't' just syntax... But I'm somewhat curmudgeonly - or maybe the right word is "habitual" in the way I write my code. So I'm not going to just change for change's sake. I'm going to change when I'm compelled to by some sort of new thing I can do, or readability improvements... I think we'll get into some of that, because I think readability is subjective; each person reads it with their own eyes, and they're the subject, right? So we'll get into some of that... But I wanted to talk a little bit about the history real quick, because it seemed like the JavaScript syntax was static for so long... And then it's been changing what we feel as like somewhat dramatically or quickly, maybe just in comparison, not really all that fast anyways...

So I did pull up a real quick document that Mozilla did in their reintroduction to JavaScript; so just a little bit of history on how it all played out. The ECMAscript, which is the official term for JavaScript, ES edition 3 was updated in 1999. I think that's the one that we all probably knew for so long. Well, maybe it became 5... Anyways, \[unintelligible 00:06:58.10\] The fourth edition was abandoned due to political differences concerning language complexity - so that's kind of funny, because there's definitely political differences regarding language complexity with some of the newer features as well. I'm not sure what exactly the details were on ES4. Do either one of you know that history, why it was abandoned?

**Nick Nisi:** There's a lot of things that have resurrected...

**Jerod Santo:** Oh, really?

**Nick Nisi:** Yeah. I'm failing to remember the specifics of what the big conflict was...

**Jerod Santo:** Yeah, that'd be interesting to find out; I don't know what it is either... But anyways, ES4 never became a thing. Many parts of the fourth edition formed the basis for ECMAscript edition 5, which was published in December of 2009.

**Feross Aboukhadijeh:** I just looked it up. So ES4 was gonna have classes, a module system, optional types, generators, iterators... A whole bunch of stuff...

**Jerod Santo:** That's in there now...

**Feross Aboukhadijeh:** ...that we're still figuring out.

**Jerod Santo:** Yeah.

**Feross Aboukhadijeh:** Modules we're kind of still figuring out...

**Jerod Santo:** Well, some stuff it's in there now.

**Feross Aboukhadijeh:** ...all the details of it now.

**Jerod Santo:** Yeah, exactly.

**Feross Aboukhadijeh:** \[00:07:57.18\] Yeah. Pretty ambitious.

**Jerod Santo:** Yeah. Maybe it was too big, too much... I'd be interested to go back and read some of those discussions, like why did they can it.

**Nick Nisi:** There was also a JSX style syntax called E4X, that was proposed during ES4.

**Jerod Santo:** Really? They were ahead of their time back then...

**Nick Nisi:** Yup.

**Jerod Santo:** I guess it was too soon. So then ES5 was published in December of 2009. Now, here we're just talking about publishing, and I'm assuming it's the official spec. That does not mean browser support. But '09 was ES5... And then the sixth major edition of the standard was published in June of 2015. So this is where it got confusing for me... It's like, ES6 was also ES2015. Maybe you've heard those two terms... And Babel was once called -- wasn't it called SixToFive before it was called Babel? So while it was published in June of 2015 and it had a lot of the syntax that we use now - I'm sure there's new stuff beyond that, that I'm not well aware of... I don't know, what's that - ES7, ES8? ...but we didn't have access to those functionality right away, which is why Babel became a thing... Which goes back to Feross and his tooling; it was called SixToFive, because it was gonna take your ES6 written code and transpile it into ES5-compatible code, which could then be executed in the browser.

So there's a little bit of history... I don't know the modern history; maybe you two know that. It's not written here... Where do we stand today? Is ES7 out, is ES8 out? I'm totally ignorant.

**Nick Nisi:** Yeah, they switched to a yearly cadence now, which is why they changed it from ES6 to ES2015 and 2016 etc. But they're still kind of referred to--

**Jerod Santo:** Oh, so they retro-fit that name...

**Nick Nisi:** Yup.

**Jerod Santo:** Gotcha.

**Nick Nisi:** So ES2020 I think was just ratified -- well, they were going to ratify ES2021 probably this year, is that right? And then that's what will be implemented next year.

**Jerod Santo:** If we make it that far.

**Nick Nisi:** That's true.

**Jerod Santo:** This might be the last year, actually...

**Nick Nisi:** \[laughs\]

**Jerod Santo:** Anyways... So there's a little bit of history. And maybe the reason why it does feel like it's evolving somewhat fast is because they've switched to that yearly cadence. That being said, all these things are opt-inable, which means they're opt-outable... So many of us decide not to use certain things, for certain reasons.

I was just curious about some of the details... So the big ones - I mentioned we have the function, the arrow functions. I think this is pretty standard code today. The arrow function - do you see it splattered about? Are you all using arrow functions pervasively? Do you still use the function keyword? How do you go about that?

**Nick Nisi:** I do still use the function keyword occasionally. There's one nice thing, and the post kind of references to that - arrow functions are great when you need an anonymous function. So I use them everywhere where I want a callback to foreach or map or anything like that where I don't care about it... But then sometimes you do care about the name of the function, and specifically when you're debugging you wanna give the function a name, so that you can reference it and see it in the debugger. That's one reason to maybe still name it.

But yeah, otherwise I just kind of tend to use it pretty much everywhere. I was trying to think about this, and how I actually break down when I use function versus not function... And I guess if I'm just like putting a utility function at the top of a file, I will use function. And even though I don't really rely on hoisting, I know that it gets hoisted... I don't know; maybe I should be more explicit with that and use...

**Jerod Santo:** \[laughs\] Well, you're pulling out an interesting point, which maybe Feross can expand on, which is this is not syntax sugar. These operate differently, right?

**Feross Aboukhadijeh:** Yeah, the two syntaxes are a little different, which is one thing that actually initially kind of bothered me about the arrow functions - we were introducing two types of functions now that work slightly differently... And that's actually one of the things I found when I was learning Ruby a long time ago - that was one of the things I found was confusing; they had three different kinds of functions in Ruby. I forget the names... There's like -- I'm gonna embarrass myself, so I'm not gonna try, but there's literally three different kinds...

**Jerod Santo:** Yeah. Lambdas, blocks and procs.

**Feross Aboukhadijeh:** \[00:12:05.17\] Okay, there we go. Yeah, and so now we have two in JavaScript. But fortunately, they're not that different. The way that this keyword works is different in the arrow functions, and then the normal function with the keyword function hoists, which means that you can actually define the function at the bottom of the file, and then use it at the top of the file. If people aren't familiar, the way you can imagine it working is you just sort of -- wherever you have a function where you've written out the `function`, and then the name, and you've done that sort of syntax, it sort of takes all those functions and moves them to the top of the file. So anywhere else afterwards you can sort of just use those. That's one way to think about it... And I kind of like that.

I like to write my code where when you open the file the thing that I think as the writer that you should see first is at the top... Not the thing that has to be defined first, like the utility functions and these random helpers. I like to have it sort of inverted, so all the utilities are at the bottom. And you can't really do that with arrow functions. So it's one downside... I actually have to say I struggle with knowing when to use each. I wish there was one way, one sort of magic "Always do it this way." So I'm kind of tempted to just make arrow functions be that way, because I very much prefer them when you're doing a map operation or foreach or any kind of in-line situation... But then there's those few places where I really want the hoisting, so I'm still using the `function` keyword... And I wish I could just use the one in all places and keep it simple.

**Jerod Santo:** Yeah, I find myself using the arrow functions when I want the this bound in that way. If this is the way I want the context for this bound, then I will use it that way. And I will use functions kind of like what Nick said - top-level things, where it's just like "I'm giving this thing a name, and it's just a function." I don't need it to be an arrow; it works just fine the other way. Maybe I'm just old school in that way... So I tend to default to the old syntax, and then use the arrows syntax when I want that specific feature of an arrow syntax. I'm probably rare in that way; it's probably the other way for most people.

**Feross Aboukhadijeh:** The other thing to know, too... I think one of the benefits Nick was saying about the naming - I think if you name your arrow functions, you assign them to a variable before you use them, the debugger can actually still show you the name... Yeah, I think that pretty magical, how they implemented that. I don't know if it has to be a really simple assignment to a name, instead of assigning it to something more complicated... But yeah, it can show the name; I notice they're doing that now.

So that's another argument for maybe just go all in on arrow functions... And I've been doing a lot of React stuff lately, and if you're using the arrow functions for a bunch of different components, you can actually almost -- you treat kind of like there's hoisting going on. I can use a component that is defined later in the file, in a component that's higher in a file, even if I'm using arrow functions, because I'm not really using it until that component is initialized, so it can actually reference it later, if that makes sense... So it's almost like I have hoisting when I don't. That even makes there even be fewer cases where I really need that function syntax, so I've almost fully eliminated it from my code at this point.

**Nick Nisi:** I like that. I didn't know about the debugger. That's really cool. Do you remember when you were learning this new syntax, did it really feel foreign to you? The arrow syntax.

**Jerod Santo:** Totally.

**Nick Nisi:** I just remember watching Dan Abramov's Redux class (on EggHead, I think), and like an arrow function that returns an arrow function, maybe even another level deep, and I was just like "What is going on here? I do not understand..." \[laughs\]

**Jerod Santo:** Yeah... There's still some code that I read, because there's so many optional aspects of that syntax - you know, like implicit return - and you can drop the parentheses if you want to, and this kind of stuff, which to the uninitiated, to somebody who writes JavaScript more casually -- like, I'm a JavaScript sprinkles frontender, so I write JavaScript all the time, but I'm not primarily writing JavaScript, if that makes any sense. When I revisit this thing, or when I'm reading somebody else's code who has different levels -- like, they'll use different levels of syntax. It's still foreign to me. I'll have to stop, and it makes it less readable. I think if you're super-initiated, it becomes more readable. But for the casual author, it's like "What's going on here?" because there's so much optionality in that syntax.

**Feross Aboukhadijeh:** \[00:16:25.16\] Yeah. There's actually five different versions. When we were adding rules to Standard JS for this, we were like "Can we eliminate some of these? Because they seem like there's too many variants."

**Jerod Santo:** Yeah.

**Feross Aboukhadijeh:** There's the zero argument version, where you just have two parentheses, and they have to be there to indicate "This is a function." When you only have one argument, you can omit the parentheses or you can keep them in... And then you have the multi-argument version where you have to have the parentheses again.

**Jerod Santo:** I know, right?

**Feross Aboukhadijeh:** You go from having them, to not needing them for one argument, and then you need them again afterwards, which is unfortunate. But I have to say, I do like omitting them when there's only one argument, because it looks prettier, but it's just more cases to know about. And then there's the version where you can omit the curly braces if it's just a single expression and you wanna return that expression from the arrow function.

But if you want multiple lines, then you have to include the curly braces, but then you have to add the return keyword, because there's no more implicit return. So it's like "Oh, my gosh..." Yeah, I'm not surprised beginners are confused by this.

**Jerod Santo:** Yeah...

**Nick Nisi:** But then if you wanna return an object literal, you have to wrap that in parentheses.

**Feross Aboukhadijeh:** That's right, yeah. Because otherwise it will be interpreted as the braces of the function. Yeah, oh my God... That is true. Yeah, it's too many. I don't know... It is what it is.

**Jerod Santo:** It is what it is, yeah.

**Nick Nisi:** I do take full advantage of being as lazy as possible and being a Vimmer where I'm trying to type as little as possible all the time. I will write the minimum amount and then I'll rely on a tool like Prettier or ESLint fixing to write that the way that it should be, that's "more legible."

**Jerod Santo:** See, but the reason why you're trying to write as little as possible is because you're using Vim, and writing in Vim is hard, so you're trying to reduce the amount of writing you have to do... But I'm telling you, in other editors you can just write how you want; it's fine.

**Nick Nisi:** I would, but I'd be too busy moving my mouse around, so I don't know... \[laughter\]

**Jerod Santo:** Well, let's move our mouse around to a different subject, which is still on the evolving landscape of JavaScript, which is variables. One thing that got much more complicated in recent editions is, in addition to `var` as a way of declaring variables, we now have `let`, and we have `const`. And this has been a topic of many Stack Overflow questions - "When do I use which one, and why?" Again, it's not syntax; these have significantly different meanings and different scopes etc. But do you guys have rules of thumb about which keyword to pick when you're declaring a variable?

**Feross Aboukhadijeh:** I can say what I do - I just go `const` all the way. And it's funny, because at first, when people were suggesting that we enforce `const` in standard, I said "I don't like the name `const`, I think it's misleading." It actually doesn't const an object; so if you have a const object, you can still change the object, you can go in there and change the properties... So you have to really understand what is actually being consted, or made constant, which is the reference, the binding between the variable name and the particular object or primitive that you're referencing. Once you understand that, then it actually is quite useful... Because 99% of my variables are const. That makes the places where I'm using `let` stand out a lot, and it makes me go "Oh, okay, this is gonna be changing. Where is this gonna change?" If I accidentally try to change a const thing, I'm gonna get warned. I don't know, it feels safer to just use const everywhere. I really like how my code feels when I know that I'm just sort of explicitly allowing those references to change whenever it's required. And I like to use tooling to help me with that - my linter, I mean.

So if I'm ever using a variable and it doesn't change, that's gonna force me to use `const` and tell me if I accidentally use `let`, and vice-versa. So if I'm using `let` and it notices it doesn't change, it's gonna say "Hey, go and make that `const`." That's my take.

**Nick Nisi:** \[00:20:01.02\] Yup, I a hundred percent agree with you on that, Feross... And I'll go one step further in that with TypeScript using `const` also narrows the type down. So if you're setting the string literal Foo and you use `const`, then that variable can only ever be the string literal Foo. Whereas if I use `let`, then the type can only ever be a string, but not the exact explicit string literal Foo. So there's a little bit more type safety that you get by using `const` over `let` whenever you can.

**Feross Aboukhadijeh:** If you use `let`, then the type has to be the same always, but if you use `const`, then you also get that it can't change... Is that it?

**Nick Nisi:** So in TypeScript you can have string literals as types. So I can say that the string "hello Feross" is a type, and it's the type "hello, Feross". And if I set that as const, then that will be that, but if I use `let`, then it has to widen the type out a little bit... So that variable can be any string, because you can change it later.

**Feross Aboukhadijeh:** Got it, okay. Cool.

**Jerod Santo:** Well, let me dissent here and throw my contrarian viewpoint into the ring... I use `let`, and the reason is simple - it's 40% more efficient than `const`. You only have three letters to type... I've never been bit by a `const` versus a `let`. I don't even know what kind of bite that would feel like, but it's never been a problem. I use `let`, and everything just works.

**Feross Aboukhadijeh:** That's fair, yeah. I also agree that I haven't actually been saved very much by using `const`. Mostly it's just how it feels. I totally agree with you.

**Jerod Santo:** I get the point of like they're signaling. That's very nuanced and contextual signaling; you know that that's a signal to you. When you see a `let`, you're like "Oh, this signals to me that there's something else going on here." That would be a very nuanced and minute signal to anybody but yourself, unless you explicitly write down "Here's how I use const and let", and then I can read that when I consume your code.

**Nick Nisi:** But that's more enforceable with TypeScript.

**Jerod Santo:** What's TypeScript again?

**Nick Nisi:** \[laughs\] The future...

**Jerod Santo:** We'll break right there... \[laughter\] I'm gonna break it right before you said "The future." \[laughter\] See, the nice thing about being the editor of this show is I get the last word.

**Break:** \[00:22:19.08\]

**Jerod Santo:** So there's a lot of other goodies in newer versions of JavaScript - there's classes, there's template literals, there's default params and whatnot... What else do you guys wanna talk about? What do you like, and what do you not like? Not everybody at once...

**Feross Aboukhadijeh:** Yeah, I find myself using almost everything in ES6 now. Pretty much all of it is good stuff. I don't think there's anything that was a mistake to add... And that's in contrast to what I used to believe. Back when I was writing ES5, I was like "Why are you complicating my language? I understand everything, don't add more stuff." I kind of liked the fact that the syntax was quite limited. That's actually one of the reasons I really like C as a language, actually; you can buy the Kernighan/Ritchie book on C and it's like 50 pages. You can understand the entire language.

\[00:24:04.04\] Now, there's a lot of ways of combining those features to do all kinds of crazy things when you're manipulating memory raw, and you have pointers, and all this kind of stuff, but it's all emergent based on a really simple set of rules, a simple set of possible things you can put into the syntax. But then they came and started adding all this stuff to ES6, and I was like "No... Now JavaScript is gonna become like C++, where you're gonna have to decide what subset of the language you use at your company, or in your codebase", and you're gonna have to have like half the language is off-limits, because that conflicts with these other features... And then you get this sort of situation potentially where a person can come into a codebase and they're actually a JavaScripter, but then they look at this code and they're like "I don't know what's going on, because you used a different part of the language than I've ever seen." That was my big fear.

But I have to say, I do really think that what seems to have happened with this ES6 stuff and all the new syntax is that people actually have just sort of fully shifted over to the new stuff, and we have left the old stuff behind... And it doesn't seem like we're in that situation where there's these two worlds as much as I had feared. So I'm a big fan of all the new stuff now, I have to say. I'm one of those people who like -- it takes me a while to wanna get there, and I'm very conservative about how quickly I adopt that stuff in my code, just because I'm trying to get stuff done. I don't wanna spend my time fiddling with syntax. I'll use it once it's all figured out. I wanna innovate in other areas, I don't wanna innovate in how I syntactically represent my code; I wanna actually make a thing that's cool, if that makes sense. But I'm a fan now.

**Jerod Santo:** Yeah. That exact reason is why I've become more interested in and enjoyed languages that do not adopt the TMTOWTDI (There's more than one way to do it) mindset. I actually appreciate that there's a "one way to do it" mindset, such as languages like Go, like "You're gonna write it this way. This is all there is." Because when there's six ways of doing the same thing, I'm just like de facto bikeshedding. I guess this is more a bikeshed than a yak shave. I'm trying to decide what's my style, what's my wife; I'm gonna do it this way over here, I'm gonna do it that way over here, and then yours clash with mine... There's a whole bunch of stuff that we're thinking about. It's like the metagame of your coding. I don't really care about the metagame anymore. I used to care about it a lot more as a younger person, or as a less experienced dev; I'm not sure exactly what I attribute that to... But all these different ways -- you've just described the five different things you can do with the arrow function, the ways you can use it and the optionalities there... That infuriates me.

I understand it's a balance, because that gives me more options and it can be more expressive etc. It's really nice to save those characters and those strokes, but I don't know, kind of liked it when there was just one way to do it. `var` was the thing, and you used `var`. If you didn't use `var`, you could bite yourself... But I'm still of the mindset that that's better.

That being said, some of the new features I really like, so... Such as destructuring assignment. That allows for new kinds of things. But when it's just like options for what seems like options' sake, or just expressibility - I used to appreciate that way more when I was big into Ruby, because you could express things in so many different ways... And I don't really appreciate that as much anymore, because I really don't care; I actually like the languages that have the formatters, like `go fmt`, or Elixir now has `mix format`... That's what Standard does, right? It's like "Here, just spit out the exact same way every time", and I'm done thinking about the way my code looks.

**Nick Nisi:** But it's not just TMTOWTDI for TMTOWTDI's sake. It's to achieve their goal of being as backwards-compatible as possible. There have been features that have been added to the language that had to be renamed because they would clash with MooTools from ten years ago.

\[00:27:55.24\] There's such a pervasive mindset and goal of "We do not wanna break the web, but we also don't wanna be writing this archaic code anymore, so we need to add more features to the language." And from that perspective, it's pretty elegant, the way that you can adapt these features, opt into them or out of them, at your will.

**Feross Aboukhadijeh:** Totally. Yeah, I don't think that people think that there's a use case for `var` and `let` and `const`, all in the same codebase. `var` just has irreparable problems with how it works, and the idea was "If we could do it again, we would do `let` and `const`. But we have to keep `var` there for the old code." It's not like there was an explicit desire to have all three. It's not like they wanna give you more than one way to do it; there is more than one way to do it just because of history.

**Jerod Santo:** I think that's fair for the variable declarations. I don't think that applies to the arrow functions syntax. That's all new.

**Feross Aboukhadijeh:** Yeah, I agree. I think the thing there is just that this is really confusing and hard to use with an anonymous function. You end up having to bind, and call/apply, and that's confusing for people.

**Jerod Santo:** For sure. I think the arrow functions are solving a real problem, don't get me wrong. It's the five different variants that you can have to achieve the exact same output - that's where I'm thinking "Why?"

**Feross Aboukhadijeh:** Fair enough.

**Jerod Santo:** But I'm bringing us back to things we've already talked about. We can move on. Do you guys like destructuring assignment? I think it's pretty rad.

**Nick Nisi:** Yeah.

**Jerod Santo:** I use it all the time.

**Nick Nisi:** I think that that fundamentally changed the way that a lot of us write JavaScript... Specifically destructuring. Because now, it's pretty common to have method signatures that accept "named parameters", right? Because you can just pass an object and then you can destructure them right in the argument assignment. You can also technically have multiple return values, where you might return a \[unintelligible 00:29:36.18\] or an object named "objects", and then you can just destructure those off and use whatever you need in there... So that's the biggest change that I see across all of the code - destructuring everywhere for that.

**Jerod Santo:** Totally.

**Feross Aboukhadijeh:** Yeah, totally. It's used everywhere.

**Jerod Santo:** It's pervasive, yeah. And I think it's objectively better than before. When you see it, you're like "Yup, that's better than what I would have had to do previously to achieve the exact same goal." So yeah, destructuring is really cool.

You mentioned -- well, there's modules... \[laughs\] I'm going through a list of new stuff from ES6... We could do entire shows -- have we done entire shows on modules? Many shows...

**Feross Aboukhadijeh:** I have so many pet peeves with modules... But one that just came to mind, since we were talking about destructuring, is just the way that you have to say "as" in the module when you're importing something... "Import this as this" - it's like, come on; why can't we reuse the knowledge that we gained from learning how destructuring works in this other place? I don't know what the reason was for that, but it just seems like the left hand not talking to the right hand to me. I don't think there really is a good reason for that.

**Nick Nisi:** Also from a tooling perspective, I hate writing the import destructuring from whatever else, because it's kind of backwards if you wanted to have autocompletion... Whereas in Python, I think, it's like "From this module import these things", so then it knows what module to go autocomplete from, which is a little bit better...

**Jerod Santo:** One aspect that kind of is a metagame thing with regards to changing syntax or evolving language - have you guys been a part of a project that has had to evolve over time? Like it was started in the ES5 days, and it has some ES6, and there's some vars and some lets right next to each other, and there's old syntax and there's new syntax? Have any of your personal projects done that? What's the iteration process? Do you have one fell swoop, "I'm gonna go change all my variable declarations to this", or do you slowly, when you're in a section, bring that one up to date? How do you guys handle the transition to new syntax?

**Feross Aboukhadijeh:** So I can say what I did on the \[unintelligible 00:31:46.06\] project. We just kind of agreed as a project that we wanted to move to ES6 syntax, and we were using this tool called Lebab (it's just Babel backwards) to convert ES5 code to ES6... And it's a little finicky, you have to pass in all these flags saying what you want to convert... But once you decide how you want that to happen, you can just sort of go to all your different files and sort of run that tool on the file, with the same arguments that you figured out the first time. It's way better than doing it by hand, in my experience; it basically doesn't mess up. So that's been a really easy way to get everything up to speed.

\[00:32:26.23\] And the other thing that I do is when a new version of standard mandates new syntax, then usually there's an automatic fix command that can go and also update everything to the new way; that's pretty helpful. That forces the hand of the projects that are using Standard to keep at least somewhat up to date. Standard is very conservative, by the way; it doesn't force you to go all-in. It is moving along, forcing people to eventually transition a little bit here and there, when they can.

**Jerod Santo:** Tell Nick what Standard is, because when we played JS Danger he didn't know Standard...

**Feross Aboukhadijeh:** Oh, man... \[laughter\] I'm so disappointed... It's fine.

**Nick Nisi:** I'm sorry.

**Feross Aboukhadijeh:** Are you serious, do you want me to say it?

**Jerod Santo:** Well, I know that Nick knows what it is... But you can say what Standard is for the listeners who aren't aware of it.

**Feross Aboukhadijeh:** It's an opinionated ESLint rule set, basically... But it packages it up into a single command, so you don't even need to know you're using ESLint; you don't need to have an ESLint configuration file, you don't need to install the different ESLint configs, and have the plugins and all the different things in your package.json, and all that kind of stuff. You just literally install Standard, and then you run `standard` (the command) in your test script section, and that's it. It forces your code to be a certain style, and it also checks for errors. So it does more than just format the code; it kind of also detects likely errors, and forces you to fix those.

A lot of people are using Prettier now though, because they mostly wanted the code formatting, not the error finding, it seems... So Prettier is a way to forcefully format all your code. There's a lot of people who prefer that; Standard's approach is just kind of more minimally -- it tells you when it's wrong, but it doesn't go and change code that it doesn't have a problem with... Whereas Prettier will forcefully rewrite everything.

**Jerod Santo:** Reformat.

**Feross Aboukhadijeh:** Yeah, exactly.

**Nick Nisi:** The last couple projects I've been on have had both, actually... Which has been interesting.

**Jerod Santo:** Really?

**Nick Nisi:** Which has been interesting, because ESLint can do a lot of autofixing for you as well, and it's always hazy in my mind where the line is drawn between what you rely on... And then you can have conflicting rules for each one as well, so then they're fighting back and forth, and it's interesting...

**Feross Aboukhadijeh:** Yeah. I know this is a tangent, but just quickly - I have a plan to sort of have a version of Standard that's just the error finding; then the people who are using Prettier could actually add in a version of Standard that is actually just purely additive, that's just finding errors. The main version of Standard could become basically a formatter, like Prettier, with its own opinionated way of formatting, but then with the added error checking on top. So you could basically pick and choose "Do I want the formatting or do I want the error checking? Do I want both?" Anyway, back to syntax... What were we saying? We were talking about how to update codebases...

**Jerod Santo:** Yeah, transitions.

**Feross Aboukhadijeh:** Yeah, the other thing I haven't done yet is switching an API, a big codebase, switching to promises instead of callbacks, and stuff like that... But I have done the syntax thing, and that's nice, because it doesn't really introduce a breaking change.

**Jerod Santo:** Right.

**Feross Aboukhadijeh:** With the exception of one thing, by the way... If you're ever doing this, remember that classes, when you switch from function style prototypes, making your classes using ES5m to switching to the class syntax, you're forced to use the new keyword when you're initializing the class. And previously, a lot of code that was written in the ES5 style would do this thing where in the constructor it checks to see "Did you call this without new? If so, we'll call new for you", so that you as a user don't have to know whether it's new or not new. With classes it's all new, and you can't not use new.

**Jerod Santo:** \[00:36:00.07\] It's all new. Nick, do you have similar transitions - run some tools against it, or slowly spruce things up as you go? I definitely have done both in my experience... And this kind of depends on the team, it depends on the project... Some places I'll just slowly evolve functions as I refactor, or as I add functionality. Sometimes you pick file by file, and say "I'm gonna upgrade this file to this."

I know years ago when I was big on CoffeeScript -- it's funny that I'm a bit of a curmudgeon on new syntax, because I hopped on the CoffeeScript train immediately...

**Feross Aboukhadijeh:** That's why you're a curmudgeon.

**Jerod Santo:** Probably... Because I did that, and then I felt the pain later... But I remember that I had a -- I didn't rewrite things in CoffeeScript, but I wrote things in CoffeeScript for the first time, and then when all these features started getting added, I was like "I don't need CoffeeScript anymore", so I slowly switched back to ES6, and I had to do it file by file, just because of the file extensions, and stuff. So that was fine, and it was a pretty easy -- there's tooling for that as well, but... Nick, what's your experience?

**Nick Nisi:** Yeah, I've done both as well. If it's a smaller project, I like to just do it manually, and quickly do it, starting off by renaming everything to .ts, and then going from there...

**Jerod Santo:** \[laughs\]

**Nick Nisi:** Sorry, I keep becoming that guy. But if it's a little bit bigger, then relying on tools to do it, or code mods, or even writing your own code mods to do pieces of it is a good way to do that, and to also learn about the AST.

**Jerod Santo:** The AST. Powerful thing. So back to features real quick, and then we'll wrap up this part of the conversation... But I think another huge boon to JavaScript developers all around the world is template strings. I can't see any reason why you'd be like "These things stink." Constructing a string the old school way, with pluses in between the string literals was terrible. Now you can just inject variables right in there, and I just think that's an unadulterated win. Is there any reason why somebody would not like this feature?

**Feross Aboukhadijeh:** I mean, now you have three ways of making strings; before you had two. It's the same thing as the other argument.

**Jerod Santo:** Dang it! That was my argument. \[laughs\]

**Feross Aboukhadijeh:** Uh-oh... Really? Okay...

**Jerod Santo:** No, I mean, on a different topic. Not on this one.

**Feross Aboukhadijeh:** Right, right. Yeah, exactly. You're a hypocrite, basically.

**Jerod Santo:** Totally! That's alright... I'm a hypocrite with taste.

**Feross Aboukhadijeh:** I mean, some people say you should go all-in on the template string syntax, because then you can basically just use the one way in all places... And then you might need to fall back to using single-quote strings if you really needed the dollar sign brace in your string...

**Jerod Santo:** Right.

**Feross Aboukhadijeh:** That argument I'm sympathetic to, because then you can just have the one-string syntax. And I keep coming back to Standard, because that's my personal preference, it's encoded in that... But I like to do single quotes everywhere, and then when you see the template strings, you know there's a variable substitution going on, and it's more signaling to the reader about the fact that there's gonna be a substitution. So I still think that two types of strings is a reasonable trade-off.

**Jerod Santo:** I think that's a stronger indicator than your `let` versus `const` one. I will agree with you on that one. I think there's a reason to use both, and one says some strings have data interjected into them, and some do not. And here is a way of immediately knowing this is a different kind of thing.

**Feross Aboukhadijeh:** Unless you're using it for multi-line.

**Jerod Santo:** Dang it!

**Nick Nisi:** Yeah.

**Feross Aboukhadijeh:** It's complicated.

**Nick Nisi:** That's the other way, too.

**Feross Aboukhadijeh:** Yeah.

**Jerod Santo:** I now disagree with myself.

**Feross Aboukhadijeh:** \[laughs\]

**Nick Nisi:** I don't like that though, because often if I'm putting a string somewhere, I might be like several lines indented in my file, and then I have to move everything all the way back over to the left side, to not have just extra spaces in there...

**Jerod Santo:** Well, that's just bad code factoring, man... You can't be that far indented. If you're that deep into an indent, then you've got some bad structure in your code right here.

**Feross Aboukhadijeh:** \[laughs\]

**Nick Nisi:** Even just one line indented, one tab indented...

**Jerod Santo:** Oh, just one?

**Nick Nisi:** Yeah. That's still adding tabs to everything. Or spaces.

**Jerod Santo:** Yeah, I'm a spaces guy myself, but... You can do what you're gonna do.

**Feross Aboukhadijeh:** \[00:40:03.28\] Have you all used common tags? Do you know what that is?

**Nick Nisi:** No.

**Jerod Santo:** No.

**Feross Aboukhadijeh:** Oh, okay, it's super-cool. If you like template strings and you are annoyed by the problem Nick just mentioned, where you wanna have a multi-line string, but you're annoyed that you're gonna be indented, and that you're gonna have all these extra spaces in the string - if you use common- tags on Npm, they have these little helpers that you can use to remove those spaces in a nice way. So you just write your code the normal way, and then it'll fix it for you. It uses the feature of template strings where you can kind of -- what is it called...?

**Nick Nisi:** Tagged templates.

**Feross Aboukhadijeh:** There you go.

**Nick Nisi:** I was actually going to mention that as something that I've never used personally...

**Feross Aboukhadijeh:** Same. I've only used it for this use case here. It's basically calling a function and passing in a string. Now, I know there's certain things you can't do without unless they added this feature, like when you wanna do HTML safe escaping, and stuff like that; then it is actually important that they have this language support for tag templates... But for a lot of use cases, like the one I just mentioned, removing the spaces - you could just do that with a function call around the string. But they do it with tag templates.

But it's cool, it has a way of -- you could say "strip the indent out of it", or you can say "turn it all into one line, and remove all spaces", or you could say "Leave at least one space. When I hit Enter to go to a new line, I really actually want that to turn into a single-space." And it supports all the things you would ever want for multi-line strings, different ways of removing the spacing, basically.

**Nick Nisi:** This is super-helpful.

**Feross Aboukhadijeh:** Yeah.

**Jerod Santo:** Anything else on this topic before we call it a segment?

**Nick Nisi:** I'm just curious if there's anything that you're explicitly not using.

**Feross Aboukhadijeh:** Hm...

**Jerod Santo:** TypeScript. \[laughter\] Sorry, Nick, but you set them up and I knock them down over here. It's my job.

**Feross Aboukhadijeh:** I haven't used generators very much... I haven't really needed to, for most of the things I do. I don't know.

**Nick Nisi:** Yeah. That's the same for me. Generators and symbols. Outside of an example of what a symbol is, I haven't used it before... And I think those might be the two main ones.

**Feross Aboukhadijeh:** Yeah, I actually think symbols are kind of a bad idea...

**Nick Nisi:** Yeah.

**Feross Aboukhadijeh:** I know that there's a use case if you really want to make stuff private and have people -- a symbol is basically a string that you can't type unless you have a reference to the symbol, if that makes sense. It's a way to make a private property.

The thing that annoys me about this feature is that JavaScript has always been very open and very flexible, and I don't like the idea of somebody saying that I can't access a thing... I'm also against private properties and classes for the same reason. It's like, I don't want to be limited from shooting myself in the foot if I really want to, you know?

**Nick Nisi:** Yeah.

**Feross Aboukhadijeh:** That's one of the things that made JavaScript a good language for so long - even without a lot of support in the language directly for doing things the right way, people could hack in the fixes to the language; that's what we did for all the years before JavaScript got these good features - we would fix problems with the language. Now they're saying "Well, we should be able to make things that are not fixable by the user, not hackable", and I don't like what that trend signifies for the future of the language.

**Nick Nisi:** Yeah. In terms of the symbols, it seems like most of the symbols that might be used by the language, or by features in the language, are well-known, so you can access them... But yeah, I totally agree with that, and privates at runtime.

**Jerod Santo:** So you just don't appreciate what the symbols feature symbolizes? \[laughter\] Oh, I killed the segment... Alright, we'll be right back.

**Break:** \[00:43:49.10\]

**Jerod Santo:** So these are interesting times we're living in; maybe we shouldn't call them exciting times. It's tough to be excited about lots of things right now, but we can be, and we can distract ourselves... And we're gonna talk about some stuff that we're excited about. This segment is called "I'm excited by X, where X is literally anything." Feross, you've been hard at work building a new app here during the pandemic, that you seem to be excited about... Do you wanna tell us about Virus Cafe?

**Feross Aboukhadijeh:** Sure. So I built an app called Virus Cafe... By the way, the TLDs these days are crazy. So that's virus.cafe...

**Jerod Santo:** That's a nice one.

**Feross Aboukhadijeh:** Yeah... A lot of people think it's a virus site or it's malware when I'm posting the link, so I might end up renaming it... But for now, you can access it at virus.cafe.

**Jerod Santo:** I like the .cafe TLD, but I do have to take pause with the name. We can get back to that... Tell us what it is.

**Feross Aboukhadijeh:** Yeah, it's a site that lets you meet people, and you can do a two-minute video chat with a stranger. So you're matched with a random stranger, and you have two minutes to discuss a deep question... And the site will actually prompt you with the question, so you don't have to find a topic to talk about with the person; it sort of helps you cut through the small talk. So there's no small talk, you just sort of jump right into this question and you talk for two minutes.

Then if you like the conversation and you wanna keep talking, then you can click Extend at the end, and you can extend for another two minutes; you can keep doing that for as long as you want. But if you don't wanna talk to the person after two minutes, then there's no pressure to continue, because the call just ends automatically at the end of two minutes. So there's no awkward kind of finding an excuse to say goodbye, it just defaults to ending, which is kind of cool.

Some of the questions that are on the site are like "When in your life have you been the happiest?" or "What would you be willing to die for?" or "What's a belief you had as a child that you no longer have?" or "What absolutely excites you right now?" or "What's the biggest lie you've told without getting caught?"

And then there's some fun ones in there, like weird, out-there questions, like "If a family member murdered someone, would you report them to the police?", stuff like that. \[laughs\] It's sort of a nice variety of fun topics to discuss. I launched it last week, seven days ago, and the reception has been pretty good so far. It got 30,000 users in the first two days - way more than I expected - and there was a bunch of good conversations I had on there. I was expecting to have to ban a bunch of people for exposing themselves on the app, and so far only one person has done that... But they're banned, and I banned them within a second. And we have reporting...

**Jerod Santo:** How do you know that happened? Were they reported?

**Feross Aboukhadijeh:** Yeah, so there's a reporting function, and there's also a moderator dashboard, where basically the photo from the user's camera is sent periodically to the server; just a grainy, still photo, so that I can spot if there's somebody who's naked, or something like that. That was the idea why I built that. So far, like I said, I haven't really had to use it, and there's also reporting...

The way the reporting works is if you're reported at a certain rate - basically, if you get reported twice within the first 15 minutes of joining, you're insta-banned. So even if there's no active moderation, you're just gonna get kicked off. But the active moderation is also my plan to kind of keep the site top-quality, even though it's open to anyone, basically. It's a difficult trade-off. I wanna keep it open, I don't wanna force people to have an account, I want it to be anonymous, but I also want it to be welcoming.

**Jerod Santo:** \[00:48:23.03\] Exactly.

**Feross Aboukhadijeh:** It's so interesting - just the UI/UX stuff that comes into these social apps... A lot of social apps are really -- if you think about them, they're just feeds of photos; if you think about Instagram, it's just a feed of photos. There's hundreds of thousands of these kinds of apps. But what differentiates them is these really subtle social cues; things in the UI that make you or encourage you to behave a certain way in this app, which gives that app kind of its own culture.

Think about the difference between Tumblr and Facebook. They're kind of the same - you can post images, photos, links, videos, but they feel so different. Why is that? I'm now gaining a huge appreciation for these kinds of subtle things, just because of the way I've had to think about how to nudge people to behave the way I want them to behave on the app. It's been really interesting.

**Jerod Santo:** Did you try it?

**Nick Nisi:** I did, but I chickened out, and as soon as it connected, I closed it.

**Jerod Santo:** I was telling Feross in our JS Party chat room that I'm afraid to click the "Tap to start" button... And you asked me why, but I didn't respond at the time, because I was doing something else... It's just anxiety about not knowing what to expect. So it does say "Here's how it works. Step one, you're matched with a random partner. Step two, you're given a deep question to discuss. Step three, you have two minutes to discuss it." But I don't know exactly what happens when I tap to start. When I tap Start, am I just dropped in -- like, what's gonna happen when I click this button? Am I dropped in immediately? Do I know the question before? Do I get a chance to think about that question, so I have something to say in two minutes? It's just like "What's behind door number one?" It's like "I don't know if I wanna know what's behind door number one." Even though once I get there I'm sure it'll be a very enjoyable experience.

**Feross Aboukhadijeh:** So I'll tell you -- I agree, there's been some feedback where people click the button and they're just dropped into this chat, and they're a little bit confused, or didn't expect that to happen, so I'm gonna work on explaining a little bit more upfront what's going on...

**Jerod Santo:** Handholding, yeah.

**Feross Aboukhadijeh:** Handholding, yeah. But for the people who did click the button...

**Jerod Santo:** They had a great time.

**Feross Aboukhadijeh:** Yeah, there's some users who've been - I kid you not - on the app for 12 hours since I launched it. I have the tracking. It's like, 12 hours of talking to people in the last 2-3 days is a huge number of hours. So I think there's some kind of unmet social need right now for people who are lonely, who haven't talked to anyone in a long time... Maybe they're living alone in an apartment, or something like that... I just did not expect that kind of a response.

**Jerod Santo:** That's awesome.

**Feross Aboukhadijeh:** It's been really interesting.

**Jerod Santo:** So you can extend beyond the two minutes if you're enjoying yourself. Is the app then gonna cut you off?

**Feross Aboukhadijeh:** It doesn't cut you off; you can extend as long as you want. Some of these people I'm sure have been extending for 30 minutes, repeatedly pushing that button to stay connected... That's kind of wild. I think I should probably add some kind of exponential thing, where the time to extend keeps increasing over time, like four minutes, eight minutes, so on... But right now it's every two minutes.

**Jerod Santo:** Gotcha.

**Feross Aboukhadijeh:** But this conversation I had, by the way, with somebody, was really wild. I can repeat it, because I don't know who she was... But first of all, one really interesting behavior is people blocking their cameras. That's been really interesting to see. I think what they're saying is they want an audio mode, so I'm actually building an audio-only mode right now... But at first, my original instinct was "These people are blocking their camera because they're trying to be sketchy, and I should ban them, or they should get reported..." But then I started using the app a little bit and talked to some of these people... And some of them had been on the app for several hours and they had not been reported even once; so they're behaving perfectly well, they're great users, but they just don't wanna show their face... And I learned that, and I'm like "Okay, so actually there's a real reason here."

\[00:52:00.09\] And then I actually realized that I felt more comfortable -- I tried blocking my own camera and using the app for a little bit, and I felt more comfortable sharing stuff, because I just felt like I was on an anonymous phone/confessional line, or something like that, and it felt more freeing to be able to do that.

**Jerod Santo:** Right.

**Feross Aboukhadijeh:** So this one lady told me -- one woman, she said "Do you know Procter & Gamble, the home products company?" Oh, first of all, the question was "What is the biggest lie you've ever told?" She said "Do you know Procter & Gamble?" I said "Yes." She said "Well, I had a job interview there recently, and I lied on every single question that they asked me." \[laughter\] And I said, "Okay, that's interesting. So did you get the job?" She said "Yes."

**Jerod Santo:** Oh, wow.

**Feross Aboukhadijeh:** "Are you gonna take the job?" and she said "Yeah, as soon as the Coronavirus thing ends, they're gonna formally ask me, and I'm gonna accept it." And I was like, "First of all, that's terrible that you did that. But how did you also just admit that to me, to a random stranger on the internet?" She felt very open to do that. And then I felt all this pressure to say something that I had done that was really bad, and I couldn't think of anything... \[laughs\]

**Jerod Santo:** You should have been like "Well, you're a bad person." \[laughter\]

**Feross Aboukhadijeh:** But it's just so interesting that she felt comfortable to share that. Somebody else admitted to me that they spent a night in jail... There's all these people saying this really interesting stuff, and they feel really comfortable, because their camera is blocked and it's just their voice. So it's been really fascinating to me to have these conversations with people.

**Jerod Santo:** That is cool. So I want you tell real quick about the tech stack, but first let's talk about Virus Cafe. Where did you come up with that name? I'm assuming it's referring to the Covid-19 scenario that we're in... But when I hear Virus Cafe, it's like "Do you wanna go hang out in the Virus Cafe?" I'm just like "No. No, I don't." I just don't wanna go there. \[laughter\]

**Feross Aboukhadijeh:** I agree, yeah. The name probably needs to change. I wanted to have a name that was sort of making clear the purpose of the site is to connect people during Coronavirus times. That was the purpose of the name.

**Jerod Santo:** Right. And it's an awesome domain. So tell us a little bit about the tech, because you've got some WebRTC, you've got some WebTorrent, there's P2P, of course... It's Feross, what do you expect? This is not gonna run through servers...

**Feross Aboukhadijeh:** So it's a pretty simple standard tech stack, actually. I tried really hard not to reinvent everything, like I like to do, because I wanted to just make the app and focus on what the users are gonna see... And I'm still glad I did that, because I've gotten so into the weeds before when doing projects, and I have to say, it's been really freeing to just accept the fact that I'm not gonna fully, 100% like all the tech I'm using... But that's okay, because I'm focusing on the bigger picture of what I'm trying to build. So that's been really good for me.

So I use Next.js; it forces you to use React. I've been using Hooks in React, and I'm using Chakra UI for the UI components... And I love Chakra, by the way. It's amazing. Really high-quality components. We did a whole episode on Chakra with Segun. I don't know the episode number, but that's a really good episode.

**Jerod Santo:** Recent episode. Just scroll back a little bit and you'll see it.

**Feross Aboukhadijeh:** Yeah, really recent. And then I guess the other interesting pieces are -- of course, it's using WebRTC, which is how you do video and voice calling in the browser... And the library I'm using for that is called SimplePeer, and that's the same library that is used in WebTorrent, and it's a library that makes WebRTC a little bit easier to use, because it is a gargantuanly-complicated API if you just use the standard one out of the box...

And I think that's pretty much the most interesting stuff. There's a web socket server involved for doing the signaling between the peers, to get the peers connected. But then once you're actually fully-connected, it's a peer-to-peer connection, so your browser is connected to their browser... And then there's also a relay server, which is really important if you're building a WebRTC app... Because if your peers can't directly connect to each other over a peer-to-peer connection, which happens sometimes if you're on a really restrictive network, like an incorporation where they have a firewall, and it blocks random people from connecting into the network - then you need to have what's called a TURN server or a relay server, which can help facilitate those two users conecting to each other. And the way that works is that they both just connect to the server, and then they send their traffic through the server, and it's encrypted, but the server helps basically that traffic get tunneled between the two peers, if that makes sense. I set up a server for that. You just install a thing called Coturn, and it does that for you. But yeah, that's pretty much the stack.

**Jerod Santo:** \[00:56:22.19\] Awesome. Open source, or no?

**Feross Aboukhadijeh:** No, not yet.

**Jerod Santo:** Ooh... Breaking with your brand here, Feross.

**Feross Aboukhadijeh:** Yeah, yeah, I know... We'll see. I kind of wanna just keep the optionality of me turning this into something that's more than just an open source project for a little while.

**Jerod Santo:** Fair enough. Sounds cool. Virus.cafe. I'm sure if Feross has renamed it by the time you hear this, it will redirect to the new place...

**Feross Aboukhadijeh:** That's right, yeah.

**Jerod Santo:** And Nick, what are you excited about?

**Nick Nisi:** Oh, man... Well, I'm gonna go with a non-tech pick here. I'm starting a new job, and just really focused on that, but also really looking for an escape for my attention away from tech for a while as well during this time... And I've found this book series called "Arc of a Scythe." The first book is called Scythe, and it's a pretty interesting book about a benevolent AI that runs the entire world, and has eliminated death, and if you die, it can just bring you back. So because of that, to prevent over-population, there's now this Order of a Scythe, where they randomly select people to kill, and they kill them... And it's the politics around that; the AI cannot be involved in that at all, it's one of its rules. It's just interesting, and I'm ready for an AI to start running our world, so... I'm hoping that comes along. A benevolent AI, obviously.

**Jerod Santo:** Oh, yes. The problem with the AIs is we have to put our biases into them.

**Nick Nisi:** Right.

**Feross Aboukhadijeh:** Why do you like the series? What's your favorite thing about it?

**Nick Nisi:** I'm a big fan of futuristic, post-apocalyptic, or just into-the-future books, involving tech in this way, or AI... A friend told me about it, told me it was really good. You basically read the first book to understand what the sides are. You read the second book to understand the intentions of the Thunderhead... Thunderhead is what the AI is called, and the second book is called Thunderhead. And then the third book is how it all comes together, which is pretty cool.

It's just interesting to me the story that goes along with that, the way that they -- not necessarily the way they use technology or anything like that, but the way that they understand death, and the way that their life without death is kind of meaningless, in a lot of ways... It's interesting.

**Jerod Santo:** Very cool. Well, I'm excited for the very first time about a coding font... Well, maybe just the second time. Thinking about things we like to bikeshed or change often - it's our fonts, and our themes in our editors. In fact, an unpopular opinion of mine is that we do too much of that... So I haven't changed my font for years. I've been using Ubuntu Mono pretty much since it came out. I just like that font. Before that I think I was using Monaco, or something that was built into TextMate back in the day... And Ubuntu Mono has been out for about a decade now, and I liked Ubuntu Mono, so I just have used it for a decade, and I'm very familiar with it.

That being said, there is a new font that I've recently found. We just did an interview with Nikita Prokopov on The Changelog; it's not out yet, it's coming out soon... It's a maintainer spotlight with him. He has been maintaining FiraCode, which is a really cool monospace programming font that supports ligatures. Ligatures, for the uninitiated, are when there are specific glyphs in your language, such as the arrow function in JavaScript, and you're used to writing these things with a combination of ASCII characters, like the = and the &gt;. Fonts with ligatures actually have specific glyphs that represent that combination of ASCII characters. Fira Mono is one of those...

\[01:00:10.29\] So you'll be typing along, and you'll type your = and your &gt; or whatever happens to be the ligature supported in the language that you're currently editing in, and it will replace those two characters with a custom character.

Interesting. I've never coded with a font like this before, so I told Nikita I would try it for a week, so I officially switched my editor - I guess it was last Friday, and now we're recording on a Thursday, so it's been six days I've been coding with this turned on... And it's pretty cool. I was very reserved and thinking I wasn't gonna like it, that I was gonna have to report back to him that it's a no-go... But I'm not sure; I think I'm gonna let it fly for a little bit longer.

One thing that happens with fonts, at least for me - there's an immediate backlash to just what you're used to, and then seeing a new font, and you either love it and you're like "This is amazing!" or you're like "Ewghh!" and going right back to where you were before. I've just been on Ubuntu Mono for so many years that I just had never found a font that I gave a chance long enough to like it, I think... And I probably wouldn't have given this one a chance, because I'm stuck in my ways, but... I told him I would, and I'm using it for about six days now, and I'm a pretty big fan. I think the ligatures - I think there's something to that... So check it out, FiraCode. Have either of you two come across this font yet?

**Nick Nisi:** I have. I like it.

**Feross Aboukhadijeh:** I have a question... How does it work when you combine the two things together? Doesn't that change the width of the character? Is it gonna be the same width as like -- say you combine an = and an =, for the special long double-equals. Does it take up two characters/spaces?

**Jerod Santo:** Yeah, so they make sure that nothing shifts inside... At least in all of the ligatures that I've come across so far. So I think the longer you use it, you're exposed to different ones. The "greater than or equal to" symbol is kind of strange, but as you type it, in fact you do the greater then and then you'll do the equals, and you can see them combine right there in your editor, but they don't shift; they're still mono-spaced. So they either take up the one, or the two, or the two, or the three, depending on how many it's combining.

It's pretty seamless, and for those who are curious, it doesn't actually change anything. It's just a presentation layer thing. So in your code it's still gonna be === if you're doing the triple equals. It's just that the way that your editor (and it supports all the major editors) represents that font -- you install it like a system font, so the way that the editor represents it is it just like presents you that new glyph, but in reality it's still the ASCII characters underneath.

**Nick Nisi:** One thing I will say as a warning about ligature fonts is if you live in the terminal and you specifically use iTerm2, for example, enabling ligature support in that will disable the metal renderer, so the GPU rendering of iTerm2.

**Jerod Santo:** \[01:03:07.19\] Oh, really?

**Nick Nisi:** And it is noticeably slower. So be careful with that. I actually do use ligatures though, and I use a different terminal emulator called Kitty, that very much supports ligatures in a very fast way... So that's the one thing - if you're using iTerm and want ligatures, maybe look at something else.

**Jerod Santo:** Yeah, I haven't gone so far as installing it anywhere, or switching my terminal over to that font. I just left that one alone. I've only done it inside VS Code so far... But that would be my next natural step if I still like this in a couple of weeks, is to start matriculating it across my entire system. Is Terminal.app have the same problem, do you know? Or is it an iTerm2 thing?

**Nick Nisi:** That is a good question. I don't actually know.

**Jerod Santo:** I'll have to test it and follow up.

**Nick Nisi:** But you're using it in VS Code, so you're used to it in a slow environment, so...

**Jerod Santo:** \[laughs\] Shots taken.

**Feross Aboukhadijeh:** Does this make cursive letters in the code? Because I really don't like that.

**Jerod Santo:** No, it doesn't.

**Feross Aboukhadijeh:** Okay, good.

**Jerod Santo:** I don't like that either. In the comments, where they're italicized? Yeah... Not a huge fan of that myself.

**Nick Nisi:** I've spent hours getting that to work in Vim...

**Jerod Santo:** You've spent hours trying to get that to work?

**Nick Nisi:** Yeah... I had to do -- I can't remember the name of it. I had to run a `tick` command to enable a specific terminfo file that would support cursive in italics... I don't use it anymore, but I've spent a long time doing that.

**Jerod Santo:** Case in point. You've made my case for my unpopular opinion from a few weeks back. Alright, those are the things that we're excited about. What are you excited about? What are you using in the new JavaScript syntax? What do you not like? We would love to hear from you. We are on Twitter at @jspartyFM. You can of course comment right on changelog.com; pop open your show notes, click the Discuss button... All three of us will be notified of what you have to say. We'd love to hear from the listeners. If you've been hanging out in the Slack chat, we appreciate you all live listeners...

That's JS Party for this week. We'll talk to you next time!
