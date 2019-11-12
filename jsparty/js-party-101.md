**Nick Nisi:** Hello, and welcome to Mocha Party! Oh, wait... No, that doesn't sound right. Hello, and welcome to ECMA Party! No, not that either... Hello, and welcome to WebJS Party! Hm... I don't know where we're going with this, but today's episode we are going to be debating whether JavaScript should be rebranded.

As you may or may not know, there is a long, complicated history to the actual name of the language that we all love here on this party, and it has some interesting roots, where it was originally internally called Mocha, but then they wanted to ride the coattails of the popularity of Java back at the time, so it was renamed to JavaScript. But now, it's technically ECMAScript, even though none of us really even write straight JavaScript anymore, whether that's TypeScript, or using Babel to do something else that isn't an in-between that with JSX... We're kind of writing this language that almost looks like JavaScript, all the time.

So should JavaScript be rebranded? Today we're gonna be debating that. I'll be your host, Nick Nisi, and your moderator as well. On the Yep team we have Divya...

**Divya Sasidharan:** Hey, hey...!

**Nick Nisi:** ...and Jerod.

**Jerod Santo:** Yep-yep!

**Nick Nisi:** And on the Nope team we've got Kball...

**Kevin Ball:** Hello, hello...!

**Nick Nisi:** And Chris, a.k.a. b0neskull.

**Christopher Hiller:** Happy Halloween!

**Nick Nisi:** We are recording on Halloween, so this will be a spooky episode, even though you won't hear it until the week after... So Happy Halloween to everybody out there, and let's dive right into it.

**Kevin Ball:** Well, hold on, hold on... Because I've just had a realization. Somehow this never hit me on our previous debates, but YepNope - our mascot should be the Yip Yips. \[laughter\]

**Christopher Hiller:** I have no idea what you're talking about...

**Jerod Santo:** Yeah... Way over my head.

**Divya Sasidharan:** It's like the Muppets. They go "Yip-yip-yip-yip-yip..."

**Christopher Hiller:** Oh...!

**Kevin Ball:** They go "Yip. Yip-yip-yip-yip..." and then they ask them some questions and they're like "Nope. Nope-nope-nope-nope..."

**Nick Nisi:** There's also a character that goes "Me-me-me-me!", right?

**Jerod Santo:** I'll have to google that.

\[The Yip Yips sample\]

**Kevin Ball:** I will find a link to that.

**Divya Sasidharan:** And then they try to mimic different sounds, like the telephone...

**Kevin Ball:** \[00:04:03.21\] Yes, it's kind of amazing, and I am absolutely shocked that y'all are not familiar.

**Divya Sasidharan:** Classic.

**Christopher Hiller:** It's been a while since I've watched the Muppets.

**Nick Nisi:** Me too. I mean, I like the Muppets as much as the next guy...

**Jerod Santo:** "I like the Muppets..." \[laughs\]

**Divya Sasidharan:** I haven't watched Muppets, but that clip is hilarious...

**Jerod Santo:** I just wanna compliment Kball on his uncanny ability to completely derail the show before it even starts... \[laughter\]

**Nick Nisi:** Totally. So what were we talking about? Whether we should have the Muppet Party, or... Yeah, no...

**Kevin Ball:** Yip-yip!

**Nick Nisi:** Yip-yip!

**Kevin Ball:** Yip-yip-yip-yip-yip...

**Divya Sasidharan:** You're on the Nope team, Kball... \[laughs\]

**Kevin Ball:** Oh, my bad.

**Nick Nisi:** Getting into this... I guess, let's just dive right in. Actually, before we do - and I will turn it over to Divya to argue the Yip-Yip side on whether or not JavaScript should be rebranded... But I totally am stealing an idea from you, Divya, and I'm sorry... I listened recently to the last YepNope episode with you, and you had an awesome Haiku about JavaScript tooling... So I'm completely ripping that off with a limerick about today's topic.

**Divya Sasidharan:** Yes!

**Jerod Santo:** Nice...

**Nick Nisi:** And that is "Should JavaScript be rebranded? Does that seem too heavy-handed? We're going to debate, consider its fate, while not leaving users stranded."

**Divya Sasidharan:** I love that. That's great.

**Nick Nisi:** Thank you.

**Divya Sasidharan:** That's beautiful.

**Nick Nisi:** That's all I have to contribute as the moderator. \[laughter\]

**Divya Sasidharan:** Great, then I don't have to make a limerick. I didn't.

**Nick Nisi:** \[laughs\]

**Jerod Santo:** Yeah, not fair. You stole my argument. \[laughter\]

**Divya Sasidharan:** But Feross -- was it Feross who broke it down? I forget who it was. It was my entire limerick... Or maybe it was Adam... Totally tore it apart.

**Jerod Santo:** Oh, it was Mikeal.

**Divya Sasidharan:** Mikeal, yes! He tore it apart. It's fine.

**Nick Nisi:** Well, on that note, let's dive right in. Divya, do you wanna start us off with your argument for why JavaScript should be rebranded?

**Divya Sasidharan:** Sure, I can take it away. I will begin. It's four minutes, right? I should time myself...

**Nick Nisi:** Yes, four minutes.

**Divya Sasidharan:** Okay, so the premise being "Should JavaScript be rebranded?", and I represent the team Yep. Similar to how American football is actually less feet and more hand, JavaScript should be renamed, because it's less Java and more web. Similar to what Nick mentioned earlier, with the various namings of it, whether JavaScript should be called WebScript, or something else, is a valid point, because JavaScript often gets conflated with Java.

Many of us being web developers, have gotten the very common email from recruiters asking us whether or not we're interested in a job in Java because of our extensive experience with Java, supposedly... But this often is a case where people tend to think that JavaScript includes Java, or is a subset of Java, which is completely untrue.

So the naming itself causes a lot of confusion, especially for those who are not super-technical and not in the technical community itself... The thing being JavaScript also, as Nick mentioned, is an incredibly fractured community. Not only are we not writing JavaScript as is, many of us don't write vanilla JavaScript anymore; we write different flavors of JavaScript. There is React.js, which is now called React; I don't think anyone calls it React.js. There's Vue.js, which is a Vue flavor of JavaScript... There's Angular, there's Ember, there's all these different frameworks, and so all of us are no longer writing JavaScript in the same way that you would if you write vanilla JavaScript. No one is always Document.querySelector(), everyone is using their flavor of things, and interacting with the DOM that way.

\[00:07:53.16\] So the fracturing of the JavaScript community -- and this is not even to say TypeScript comes in... Because TypeScript completely fractures the community. So the framework kind of gives pockets of people who are still interacting with JavaScript... But the moment we think about TypeScript, that completely moves JavaScript in a completely different direction... Because JavaScript by definition is dynamically-typed, and with TypeScript it adds a type system to a language that doesn't have any types. So in a sense, there is this split in a community - there's the people who are very anti-TypeScript, and then there are people who are very pro-TypeScript. This fissure that's happening already comes to the fore and questions whether or not the term JavaScript actually fully encapsulates the community... Because TypeScript still uses JavaScript, it just adds types on top of it.

So should we now rename JavaScript to something else? There are many alternatives out there. There's -- I think some people call it Mocha, which is what it was called before... I think it was called LiveScript at one point... But there's also various fun interpretations of it, such as a \[unintelligible 00:08:58.10\] depending on the language that you speak... And then there's JawaScript, so it's not JavaScript; there's EichenScript, because of Brendan Eich... And then there's also this concept of ECMAScript, which is technically JavaScript... Very confusing; similar to the confusion earlier with Java and JavaScript, there's a confusion around why is the community that federates or talks about the standards for JavaScript called ECMA... I mean, sure, there's naming and there's a lot of history around that, but there's often confusion, because ECMAScript is technically JavaScript, but then there's TC39, which is the governing body for pushing standards forward...

All of this confusion leads to the community not being sure what exactly is happening, at what point. So it is indeed valid, and it is a point that we should consider, to rename JavaScript to bring that unity back, so that all of us are aware of what we're doing whenever we say we write JavaScript.

**Nick Nisi:** Very good, with five seconds to spare. Alright... Chris, your rebuttal.

**Christopher Hiller:** So... What's the end goal here? If the end goal of renaming -- if you're a company and you wanna rebrand, well why do you rebrand there? There are many reasons for it. But in the case of JavaScript here, it seems to me that you would want to rebrand JavaScript to something else to (I don't know) increase adoption of JavaScript? Is that a problem? Do we need to worry about JavaScript adoption? Do we need to worry about recruiters getting confused? I don't think that's an issue.

It seems to me that we have all these different frameworks, and just like any other language, Java itself has Spring, it has all sorts of different frameworks and flavors... Essentially, it's still all one language. There's only one JavaScript, there's the ECMAScript standard, and you will use it insofar as what your transpiler supports, what your target browsers support... But in the end, it's really all JavaScript. I don't see any reason to make 50 different names for this stuff, depending on what particular feature you're using, or where you're deploying it, or what framework you're using... I think that would actually make the problem much worse.

So to Divya's point - she said "We want to bring everything back together, and have that unity." Well, we do. We all write JavaScript, right? ...insofar as the naming of it and the confusion around ECMAScript, because Oracle owns the trademark to JavaScript, I would imagine that if ECMAScript could call it JavaScript, they would. But they can't, because Oracle owns the trademark, so they had to come up with a different name.

\[00:12:01.28\] JavaScript is ECMAScript, as JavaScript is ECMAScript. There's one language... So I don't see it as being necessary to rebrand. This is kind of a solution in search of a problem. There's really no good reason in my mind to do it.

**Nick Nisi:** Good points, good points for sure. You make a good point about it not really having a marketing problem, because it is the most popular language in the world... But what if that changes? What if something like -- I know everybody says it won't, but what if a WebAssembly language overtakes JavaScript? Would we need to market it differently then?

**Kevin Ball:** Nope. Nope-nope-nope-nope...

**Jerod Santo:** Yip-yip-yip-yip...

**Divya Sasidharan:** \[laughs\] Definitely.

**Jerod Santo:** Well, let me hop on that bandwagon and maybe steal the floor here for a moment... So Chris' argument is essentially "If it ain't broke, don't fix it", and I'm here to tell you that it is definitely broken. The hallmark of a bad brand is confusion. In fact, most trademark law is centered around the idea of market confusion. If you go to Wikipedia on JavaScript Wikipedia page, the very first sentence, the one right after "From Wikipedia, the free encyclopedia", it says "Not to be confused with Java, the programming language." Later on it talks about the naming - Nick, you've been through some of that history - and it says "The final choice of name caused confusion, giving the impression that the language was a spin-off of the Java programming language... And the choice has been characterized as a marketing ploy by Netscape to give JavaScript the cache of what was then the hot, new web programming language, Java."

I'd like to tell a little story... I had a lunch with an acquaintance on Monday wherein he was asking for advice about breaking into programming, in this industry. This is something I do pretty often nowadays, is advise people... And I spent at least 15 minutes of that one-hour lunch explaining to him the difference between Java and JavaScript. Why? Because there is massive confusion around these two programming languages.

Think about how many developers there are, and think about how many developers are coming into our community. There's been estimates that the size of the developer ecosystem, or the number of programmers in the world has been doubling every five years. Now, think about that conversation in 2019, 25 years after the name JavaScript was chosen, and we're still explaining the difference between Java and JavaScript to people who are coming into our communities.

It's time to end the confusion. It's time to cut ourselves loose from the rotting corpse that is Java. It's time to rebrand JavaScript. I rest my case, your honor.

**Divya Sasidharan:** \[laughs\] Yes, yes!

**Kevin Ball:** Okay, so I guess that makes it my turn. I love that y'all are talking about confusion. This reminds me a lot of refactoring code that already works, because it's confusing... And sometimes that's the right thing to do, and sometimes it just creates a lot more confusion. So JavaScript - yes, the name is non-ideal. Yes, it confuses recruiters. So does every other distinction in the programming world. How many of you have gotten the "Hey, long-time freelance we developer, would you be interested in this salaried embedded programming position using C++ in India?"

I mean, recruiters are always gonna be confused. But if you wanna confuse people, try renaming the most widely-used language in the world. Have you ever tried changing the name of a widely-used piece of code? Now try it again without Find and Replace. Try it again in over one million public packages, downloaded over a billion times a day into who knows how many private applications and packages. This is not gonna reduce confusion, folks. This is gonna ramp confusion up to 11.

\[00:15:58.12\] Not even thinking about the code, what about documentation and past articles? How many millions of articles are already talking about JavaScript? Now every new developer of WebScript, or EichScript, or whatever the heck you wanna call is gonna have to not only look for things in that, but also understand that these other things talking about JavaScript have relevance to them. They're not gonna replace the knowledge, we're just adding onto the stack with something more and more confusing for new people coming into the industry.

Every one of those recruiters is gonna talk to you "Oh, you have JavaScript experience. Well, we're looking for WebScript, so you're clearly not applicable." This is not gonna make anything better. So I would close with a Haiku... \[laughter\] Because you all make it possible. "Should we rebrand it? D'oh, JavaScript is just fine. Stop navel-gazing."

**Nick Nisi:** Very nice!

**Break:** \[00:16:53.13\]

**Nick Nisi:** Now, what if we could find a middle ground between the two? I think that the Yip Yips are arguing that it should be something potentially drastically different, like Mocha, or LiveScript, a completely new name, and the Nope-Nopes are saying that JavaScript is just fine. But the article that this whole argument is based on actually offers a simple solution, which is why don't we just call it JS? Drop JavaScript completely, and it just be JS. Or maybe have ServerJS and WebJS as distinctions between the two, between obviously the server side and the client side.

The article argues that just like you don't really know what PHP stands for, eventually people will forget what JS stood for, but it'll still be this name of a language that matches the file extension that we all use right now, potentially until MJS or something else comes along.

**Jerod Santo:** DotTS.

**Nick Nisi:** DotTS, yes. I wasn't gonna go there, but thank you... Now we can go into that. \[laughter\]

**Jerod Santo:** Sorry... Dang it!

**Divya Sasidharan:** Nooo...!

**Nick Nisi:** \[laughs\]

**Jerod Santo:** Well, let me just say, I like the idea, because we will not have to rename our podcast.

**Nick Nisi:** That is true.

**Divya Sasidharan:** That's true.

**Jerod Santo:** So I'm pro. I'm pro JS, for sure. It also happens to share my initials.

**Divya Sasidharan:** Uuh...

**Nick Nisi:** I like it less now. \[laughter\]

**Kevin Ball:** Yeah, so now it would be the language named for Jerod.

**Jerod Santo:** The funny thing is my kids do think that JS Party T-shirt that I wear is because of my initials, and they're like "You have your own party, and a T-shirt about it?" I'm like, "That's right..."

**Divya Sasidharan:** That's cool...

**Kevin Ball:** So with the kids these days now, instead of having to distinguish between Java and JavaScript, looking up what does JS stand for in other places, we'd have to distinguish between the language JS and "Just Sayin'..."

**Nick Nisi:** \[laughs\] I've never heard that.

**Divya Sasidharan:** \[laughs\] What?! No one says "JS." They say "jk", but "JS"...

**Jerod Santo:** What's "JS"? I didn't hear it.

**Divya Sasidharan:** "Just Sayin'..."

**Jerod Santo:** Oh, I've never seen that in my life.

**Divya Sasidharan:** I don't know if that's a...

**Jerod Santo:** JS.

**Kevin Ball:** The top five results on Google related to meanings of JS have to do with "Just Sayin'..." -- no, top four. Then we get down to JavaScript. Oh, it could apparently also mean Joint Service.

**Divya Sasidharan:** What's Joint Service?

**Kevin Ball:** A military term referring to anything involving all services of the Armed Forces.

**Nick Nisi:** \[00:20:04.06\] But Java could be coffee, right? So it could mean other things...

**Divya Sasidharan:** That's true.

**Jerod Santo:** Namespace conflicts are gonna happen, no matter what name... You're not gonna pick a unique name. Now, here's a name that I thought was terrible - Go. Because there's so many things named Go. That being said, they've solved the search problem by suffixing "lang" at the end, Golang. So you can search "Golang" to find Go-related things...

**Kevin Ball:** And that has never confused anyone.

**Jerod Santo:** It works just fine... And they have an awesome mascot in the gopher. This is another problem with the JS brand - we do not have an awesome mascot, because we can't even get a name figured out, let alone an animal or some sort of creature.

**Divya Sasidharan:** Also, on the logo thing - it's a pretty bland, simple logo. It just has a square and then it had JS in the bottom right corner... And I've actually seen that logo be used at a recruiting firm that had acronyms JS, and they used that as their logo. They were a technical recruiting firm, and I was like "How do you -- you can't do that..." I mean, I don't think it's trademarked, that logo... But it's annoying, because now you can't have cute interpretations of it. I mean, you can... I've seen -- like, Singapore JS uses the Singapore lion mascot instead of the J in the bottom, in the yellow box. There are ways to do it, but it's pretty plain. I feel like the gopher logo has cuter versions of it.

Also, frameworks... Ember has a really cute little -- I don't even know what that thing is. It's like the Ember squirrel, or something. A chipmunk... I don't know.

**Jerod Santo:** I don't know what it is.

**Kevin Ball:** It sounds like instead of rebranding the name of JavaScript, we should just come up with a better logo.

**Nick Nisi:** What would you come up with as a logo?

**Kevin Ball:** Or a mascot.

**Jerod Santo:** A cup of coffee, like with Java... \[laughter\] And then a paper next to it, like a script...

**Divya Sasidharan:** Yeah, but that was like CoffeeScript, isn't it? Wasn't CoffeeScript a cup of coffee, and then in the foam it had the logo, or whatever...?

**Jerod Santo:** No, that's Java.

**Kevin Ball:** Looking around for things, animals starting with J, and possibly S... What about a Jumping Spider?

**Jerod Santo:** Oh, goodness...

**Divya Sasidharan:** Oh, God... \[laughs\]

**Nick Nisi:** What about a rhino?

**Divya Sasidharan:** Yes, actually the spider would be great!

**Jerod Santo:** Alright, I'm switching to team Nope. We should not rebrand... \[laughter\]

**Divya Sasidharan:** Wait, but the spider would be great, because it's like the web...

**Kevin Ball:** Uuh, JavaScript is the spider crawling all over and making the web...

**Divya Sasidharan:** Yes! I love that.

**Kevin Ball:** Alright, I'm getting on board with this.

**Jerod Santo:** What about server-side JS though, or IoT?

**Christopher Hiller:** Yeah, but the server and the web stuff - it's a false dichotomy. There's stuff that runs on the web, there's stuff that runs on Node, there's stuff that runs in both, there's stuff that runs on microcontrollers, and all sorts of things. It's a fool's errand to try to make these boxes for where your JavaScript belongs.

**Divya Sasidharan:** Yeah, but at the same time you would argue that JavaScript was built for the web. Us using it for server and IoT is just trying to fit it to these platforms, even though it was built specifically to run on the web. Essentially, JavaScript was built as the glue for HTML. I think that's how it was phrased. They needed a way to interact with the DOM.

**Kevin Ball:** And Assembly was created for mainframes. The world has moved on.

**Divya Sasidharan:** That's true, for sure.

**Jerod Santo:** And hence we need a new name, to encapsulate them all. \[laughter\]

**Divya Sasidharan:** We need to split. It needs to be like "This is web JavaScript, and then this is server..." Because there are often cases where someone is like "This is JavaScript", but then they're showing Node code, which I'm like "The Node standards are different from the ECMA standards", for example.

**Nick Nisi:** Yeah, and that is exactly what the article comes to - ServerJS and WebJS. So you'd have WebJS 2020 referring to ES 2020.

**Jerod Santo:** Good point, Nick. Yep, let's do it.

**Divya Sasidharan:** \[00:23:58.17\] Also, I wanted to say something to your confusion point about renaming being really hard... So JavaScript renames all the time, because they're like "ES2015", and then "ES2016", or like ES5, and then ES6... And then they were like "Now we name by years", which is very confusing, because I'm pretty sure people still say ES6, even though it's ES2015. There's this fissure that happens, so I'm like "JavaScript already renames itself every so often... So what is the difference if we were to just rebrand it completely?" People are already expecting it. \[laughter\]

And to your point about technical articles going out of date - technical articles by nature expire within a couple of months. They're not valid, because the standards move forward, and it's just the nature of it. \[laughter\]

**Christopher Hiller:** Okay, what about the books then?

**Divya Sasidharan:** Well, books are the same. Books are the exact same thing.

**Christopher Hiller:** No...

**Divya Sasidharan:** If you write a technical book, that book is probably not gonna be up to date the moment it's published. 100%. I have not written a book; I know a lot of people who have, and they put a lot of work into writing it. Not to discount that work, but the complaint generally is that from the time of writing it to go through the publication process, by the time it's published and out into the world, lots of things have changed and they need to make updates, which is why Manning created the early release version; as you're writing the book, you can release it, so people get to see the content as you're writing it, so it's always up to standard, and then you can always make updates as it goes. But that's generally the nature of writing technical content - you're never always gonna be on point, unless you write in a specific programming language that doesn't change, for example.

If you're writing in Python, Python standards don't change. Yeah, Python is moving from 2 to 3, but arguably, Python 3 will not drastically change. So if you were to write a book on Python 3, the likelihood of that being out of date in a couple of months is very low. But in JavaScript, very high.

**Nick Nisi:** I think you've just made the argument for the resurgence of Perl. I don't think that's changed since I was born, and it had the perfect naming because it's a cute name, it's misspelled, so it's not to be confused with pearls... And yeah, I'm pro Perl Party.

**Divya Sasidharan:** Also, DuckDuckGo is written in Perl. Fun fact... I don't actually know why. I assume it was because all the regex stuff that they have to do. I don't know...

**Jerod Santo:** Speaking of bad names, DuckDuckGo - terrible name.

**Divya Sasidharan:** Yeah.

**Jerod Santo:** You can't say it, like "Hey, do you DuckDuckGo that?" It just doesn't roll off the tongue.

**Divya Sasidharan:** DDG...

**Jerod Santo:** DDG is a little better, but still...

**Kevin Ball:** Perl is wonderful for write-only code. \[laughs\] You have to work really hard to do readable code in Perl. It's not impossible... I know folks who've loved Perl, and do, a lot. Perl was one of the first languages I learned...

**Nick Nisi:** Have you written much ES2019 yet?

**Divya Sasidharan:** \[laughs\]

**Kevin Ball:** I don't keep track, it's all JavaScript.

**Divya Sasidharan:** It's ECMAScript, actually...

**Jerod Santo:** It's all confusion.

**Nick Nisi:** I just mean with all of the new symbols, and everything... There's a lot of Perl in there. Especially when you went from ES5 to ES2015; there was a bit of a ramp-up time to be able to read the JavaScript that you were accustomed to writing.

**Break:** \[00:27:25.27\]

**Christopher Hiller:** This is a question for Divya and Jerod... When someone says JavaScript, are you confused about what they're talking about?

**Divya Sasidharan:** I often sometimes think whenever someone says they wrote JavaScript - and I'm just gonna bring up the TypeScript point again... People often are like "I wrote JavaScript", and then you look at their code and you're like "Why is there types in this?" and you're like "Oh, it's TypeScript." Sure, you can see from the extension, but I think often those two are conflated. You're like "JavaScript, TypeScript... Whatever." Or it's like "JavaScript with types, etc." And so sometimes it's not clear. And based on my knowledge of the person -- so if Nick were like "Hey, do you wanna look at some JavaScript code I wrote?" I'm like "There's a high chance it's gonna be TypeScript... Very high chance." \[laughs\]

**Nick Nisi:** You don't know me...!

**Divya Sasidharan:** I know you! \[laughter\] The easiest way to get on Nick's nerves is to just talk about TypeScript.

**Jerod Santo:** Amen! That's my MO.

**Divya Sasidharan:** Yeah.

**Kevin Ball:** This does raise an interesting question... Is JavaScript just a language? I mean, we can get very technical and dry, but I'm curious about colloquial usage. Is JavaScript just a language, or is it a runtime? Is JavaScript essentially a build target now? Is it the equivalent of Assembly? There are many types of Assembly out there, but everybody knows "If I'm writing something, I'm gonna compile it to Assembly."

**Divya Sasidharan:** Yeah.

**Christopher Hiller:** What?! \[laughter\]

**Kevin Ball:** Maybe the question doesn't make sense... \[laughter\]

**Jerod Santo:** Oh, perfect response. \[laughter\]

**Kevin Ball:** If JavaScript can also mean TypeScript, and it can mean...

**Nick Nisi:** JSX.

**Kevin Ball:** ...JSX, and it can mean anything compilable by Babel into JavaScript. And maybe it can mean Elm, maybe it can mean ClojureScript. When you say JavaScript, is it anything that can compile down to the language interpreted by the browser, which is currently JavaScript?

**Christopher Hiller:** Is there anything else that we talk about that way?

**Kevin Ball:** Assembly was the one that I was thinking.

**Divya Sasidharan:** So are you thinking if you were to write something in C and then compile it to Assembly or WASM, is that JavaScript? Is that the question?

**Kevin Ball:** That wasn't quite where I was going, but that's a natural extension. I kind of like it.

**Christopher Hiller:** I'm confused.

**Kevin Ball:** Is everything JavaScript? Has this world just become--

**Jerod Santo:** JavaScript is eating the world. Is that what you're saying?

**Kevin Ball:** Yeah, JavaScript is eating the world, if it runs with JavaScript.

**Christopher Hiller:** If I write C and it compiles down to Assembly, I didn't say I wrote Assembly.

**Kevin Ball:** That's true. So why do we do that for JavaScript and TypeScript?

**Christopher Hiller:** Do we?

**Kevin Ball:** Apparently... According to Divya.

**Nick Nisi:** But TypeScript is a superset of JavaScript. So there's a distinction there, versus something like ClojureScript, or CoffeeScript, where it's not really the same syntax. With TypeScript it is the same syntax, it's just with some additional stuff.

**Divya Sasidharan:** And very hard to read, also... \[laughs\] \[unintelligible 00:31:23.07\]

**Nick Nisi:** I'm not going there, I'm not going there... \[laughs\]

**Divya Sasidharan:** But I agree. I think definitely certain things like ClojureScript and -- it's very different. Similar to Elm. Elm is considered in the JavaScript ecosystem. I don't think Elm has been talked about as outside of it. So when we talk about frameworks, Elm kind of gets thrown in sometimes, but when you're writing Elm, it's not like writing JavaScript. It compiles down to JavaScript. Even though they're part of the JavaScript -- it doesn't make sense.

\[00:32:00.03\] I think it's crazy... Because I'm like "Whenever you write Elm, it doesn't look like JavaScript", and you're using the compiler to compile to JavaScript. So that is a really confusing thing, because when you talk about frameworks in the front-end scope of things - which, front-end generally includes all JavaScript-related things - that's a huge confusion, because you're like "Oh, you know JavaScript? You'll be able to pick up Elm", which is totally not true. I know someone from the Elm community is probably gonna have my neck on Twitter after this gets released, but...

**Jerod Santo:** I don't think the Elm folks claim that Elm is JavaScript. I think they claim that it's a front-end framework, and I think that's a fair claim...

**Divya Sasidharan:** Yes. But I think the claim also is that if you know JavaScript, you can pick up Elm, which - I'm not sure if that is a fair statement.

**Kevin Ball:** Maybe we should take inspiration from another language - Java - and talk about the virtual machine we're compiling to, right? Java has the JVM. Maybe we just need to start calling things "The JS VM."

**Divya Sasidharan:** We have a V8, right? The engine... But also, some standards are pulling from Java; there's the concept of interfaces, which I saw in this TC39 standards, where I'm just like "What?! This is a Java thing", but we're pulling it into JavaScript. And there's certain things and elements that are being pulled into the JavaScript language that is inspired by Java... So there's a lot of those correlations that happen, and hence the confusion overall.

**Jerod Santo:** Rebecca in the chat points out that when you talk about architecture, there's usually follow-up questions. If you say "I'm an architect", people will ask "What kind of architecture do you do?" So what about when people say "I do JavaScript?" maybe it's just a matter of follow-up, maybe it's a matter of education. We need to have a larger conversation, because it encompasses so many different things now that it is really hard to just come up with one term, one word, one phrase that will encapsulate all that JavaScript does or is, because it does and is so many things to so many people. So maybe it is just an education problem, and maybe our efforts would be better spent not renaming it, but improving education.

That being said, going back to my conversation on Monday - it's strange, it's unfortunate, with so many people coming into this industry, that we're 25 years removed from this mistake and we're still paying for the sins of our fathers, and we're still having to explain away the confusion all these years later.

**Divya Sasidharan:** Also, how do you think -- so this is my opinion on things as well, just the correlation between JavaScript, the community, and how all of us relate to JavaScript, and then there's the standards committee, which is TC39... And I often find there's a huge gap between the community -- and I know TC39 hates when people bring this up, and they're trying to be better about it, but there's still this huge...

**Jerod Santo:** You're trying to piss off everybody today, aren't you, Divya? \[laughter\]

**Divya Sasidharan:** It's just, you know--

**Jerod Santo:** TypeScript, Elm, and TC39...

**Divya Sasidharan:** Whatever... \[laughter\] I'm just gonna continue down this road...

**Kevin Ball:** I wonder how much of that is people are just bored stiff of the concept of standards and committees... We've tried to shine a light there a little bit, we've tried to connect, we've had episodes on connecting with folks and talking about TC39, and when we ask community members "What was your least favorite episode?", they're like "Oh, that standards one, man... That one was terrible. It's not interesting to talk about standards..."

**Jerod Santo:** Right...

**Divya Sasidharan:** Well, because also if you're in a committee, there's a lot of processes -- so the ECMA, TC39 committee has specific ways in which they conduct their meetings, and there's language and processes, because it's just a general standards board... So the language that they speak is very different from the average JavaScript developer. So there's a huge disconnect, because when TC39 has meetings and they talk about things, they're so deep down in the weeds in terms of how exactly the JavaScript language works, and the repercussions of specific standards going through to various stage... As opposed to the average JavaScript developer, who's like "Why don't we have this one thing? We should have this."

\[00:36:09.04\] So the experiences are very different, and it's really hard to bring those two things together, because also TC39 tends to be -- because it's very much a wider problem, of like the problem of the web and how do we make JavaScript better, so that it encompasses all of the problems you could potentially have when you work with JavaScript... But it often only includes members of specific companies; it's very large-scale tech companies, like Paypal, and Google, and Microsoft, and all of them have representatives that go there. So the question then becomes "Are they representative of the average developer?" and oftentimes that answer is no... Because they're thinking about things on a different scale. So because of that, there's also this issue of how they talk to developers. Because if you're at a level that's completely different from someone else, it takes a lot for you to bring it down -- or not to bring it down, but to meet someone at their frequency.

I think the issue that we're having now in the community - this disconnect - is because that gap hasn't been closed. TC39 is trying to educate, but they're educating at a level that the average JavaScript developer is like "This is not a problem I care about", or "It's not something I feel is tangible." That's a huge problem, because I'm like "They're supposed to represent us, but we don't feel represented", so that causes a lot of disconnect.

**Christopher Hiller:** Therefore we should rename JavaScript, to solve this problem... \[laughter\]

**Jerod Santo:** I think Chris is just scared we might call it Mocha, and then you'd have to have Mocha-Mocha.

**Divya Sasidharan:** Mocha-Mocha...

**Jerod Santo:** Chris has a dog in this hunt.

**Christopher Hiller:** Yeah. I think there's actually a trademark now, so you can't use it. Sorry...

**Divya Sasidharan:** Of Mocha or of JavaScript?

**Christopher Hiller:** Mocha.

**Divya Sasidharan:** Oh, really? Who owns the trademark for Mocha?

**Christopher Hiller:** That would be the OpenJS Foundation.

**Divya Sasidharan:** Oh, really?! What?!

**Jerod Santo:** Nice. So you're protected.

**Kevin Ball:** Chris got out ahead of you.

**Nick Nisi:** That would be fun, because then the OpenJS Foundation would have to rename again, right?

**Jerod Santo:** That would be fun. \[laughs\] The Open Mocha Foundation.

**Kevin Ball:** Oh yeah, I talked about renaming in documentation, renaming in packages, renaming in applications, but can you imagine all of these companies that have legal documents that reference JavaScript throughout their things? Once again, if you want to increase confusion and chaos, try renaming one of the most popular things and widely-used things in the world.

**Divya Sasidharan:** You have to get with the times.

**Christopher Hiller:** There's a reason why Coca-Cola is still called Coca-Cola.

**Jerod Santo:** Because it's a strong brand, without confusion.

**Divya Sasidharan:** Yeah, exactly.

**Kevin Ball:** Oh, without confusion... How much of the Midwest calls everything that's a soda a Coke? \[laughter\]

**Jerod Santo:** That's a strong brand.

**Divya Sasidharan:** I don't know about that...

**Jerod Santo:** People are actually extending it beyond what it even goes to. Like Kleenex. That's a strong brand.

**Divya Sasidharan:** Because it's so clear, it's so obvious that Coke is a soda... So when you use it, people assume. JavaScript has not yet been used as a verb or a noun for various things, so clearly there's a rebranding problem.

**Kevin Ball:** Except TypeScript...

**Divya Sasidharan:** Like, "I'm javascripting right now. I'm on the JavaScript --" I don't know...

**Jerod Santo:** "I'm javascripting right now..." \[laughter\]

**Kevin Ball:** We were just talking about one of the extensions of JavaScript to TypeScript. I think the brand is extremely strong. People are trying to ride the JavaScript brand; increasingly, JavaScript is trying to ride the JavaScript brand, because we're the popular ones.

**Divya Sasidharan:** The cool kids.

**Jerod Santo:** Well, in an effort not to rename everything, let's try to keep our podcast named JS Party, and maybe we can rename JavaScript to PartyScript...

**Divya Sasidharan:** Whaat...?

**Jerod Santo:** Then we don't have to rename, and yet not confusion. It's a PartyScript. Hm? Hm? Hm?

**Christopher Hiller:** \[00:40:03.29\] If we're talking names, I like RadScript. \[laughter\]

**Jerod Santo:** Oh, that's nice.

**Divya Sasidharan:** Rad...!

**Jerod Santo:** Okay, you win.

**Kevin Ball:** Yeah, but then we'd have the RAMStack, and I don't know that that's--

**Divya Sasidharan:** The RAMStack...

**Christopher Hiller:** RAD...

**Kevin Ball:** I know, but I'm just saying, everything that has a J in it is gonna need to swap then to an R... And there's gonna be some interesting acronym-breaking.

**Divya Sasidharan:** Also, I find that the J in multiple languages is pronounced very differently, and so you end up with -- if you're in a Spanish-speaking country, someone might JavaScript \[Havascript\]. Even though that's not always the case... I think sometimes people just say the English version. But the J is a very confusing letter.

**Kevin Ball:** When we look at the majority of the population, it doesn't use the same letter system anyway. I don't think that should be a concern. If the majority of people are using iconography because they're actually speaking in Mandarin, or they're using -- I don't know what the script is called, but for Hindu, or other things... Like, really? Should we be worried about the nuances of how a particular letter in our lettering system works? Probably not.

**Jerod Santo:** Well, what else would we talk about then? \[laughter\]

**Divya Sasidharan:** It's a very Western-centric view, actually... Kidding.

**Nick Nisi:** We need a new technical committee to discuss it.

**Jerod Santo:** That's what we need. One more name to add to the pile. One more protocol.

**Kevin Ball:** Maybe we should just boil everything down to a logo, or an icon, and then you can't even say it.

**Jerod Santo:** Prince tried that, and it did not work. The language formally known as JavaScript.

**Divya Sasidharan:** Oh, yes! Yeah, Prince did try that, and no one understood. I mean, yeah...

**Kevin Ball:** Uuh, can we draw lessons from the Prince renaming for JavaScript? Everyone would just start talking about the language formerly known as JavaScript.

**Nick Nisi:** Well, that is a perfect way to end this podcast formally known as JS Party... \[laughter\]

**Jerod Santo:** Is this gonna be our last episode?

**Nick Nisi:** If we rename it, it will be the last episode of this. As a way to send us off then, let's have the Yip Yips, Divya and Jerod, because you are pro renaming - why don't you tell us what you would rename it to? And it doesn't have to be anything crazy or silly. It could just be JS, or whatever... And then the Nope-Nopes - let's have you tell us what mascot you would adopt to keep JavaScript.

**Jerod Santo:** Well, I think that the article that we referenced by \[unintelligible 00:42:28.01\] has the correct answer, which is "It's just JS, folks. It's just JS." Keep it simple, keep the extension... Boom.

**Divya Sasidharan:** You could just say "Juss." Jusss... \[laughter\]

**Kevin Ball:** Juss sayin'...

**Divya Sasidharan:** It'd be like Yes, but Jusss...

**Jerod Santo:** Jusss! Just say Juss!

**Divya Sasidharan:** It's Juss!

**Jerod Santo:** That's our official response. Nick? \[laughter\]

**Nick Nisi:** Perfect. Juss.

**Jerod Santo:** Final answer.

**Nick Nisi:** Kball and Chris, what would you have as the JavaScript mascot?

**Christopher Hiller:** I'd like a goat. \[laughter\]

**Jerod Santo:** The Greatest of All Time.

**Kevin Ball:** That's pretty good. I have a couple of ideas. One is if there's one thing we learned from this episode, it's that JavaScript is the Coca-Cola of programming languages, so we could go with some sort of knock-off of a soft drink...

**Christopher Hiller:** Gulp?

**Kevin Ball:** Plus, we know -- yeah, it would fit well into Gulp.

**Divya Sasidharan:** Also very unhealthy for you...

**Kevin Ball:** Plus we know software developers love soft drinks...

**Jerod Santo:** You can't argue that JavaScript is unhealthy for us.

**Divya Sasidharan:** No, you can, because you have too much of it, and then your site is bloated, so... Clearly...

**Jerod Santo:** \[laughs\]

**Kevin Ball:** Since I love coffee, and it wouldn't cause any more confusion at all, I'd love it to be like a French press coffeemaker, or something like that... But really where I'm gonna have to land is the jumping spider, because I think the fun of spiders and the web, and the fact there are land-based spiders that could be our Node spiders, and there are web-based spiders that could be our web stuff... It's a flexible idea. And plus, who doesn't love spiders all over their code...?

**Nick Nisi:** \[00:44:10.12\] Australia.

**Divya Sasidharan:** And it'll take debugging to its true form. \[laughs\]

**Kevin Ball:** That's wonderful. There's so many layers of this. Your spider is working on debugging the ecosystem.

**Jerod Santo:** Yes, let's associate our brand with one of the most despised creatures on all of Earth... \[laughter\]

**Kevin Ball:** We've already noted how the JavaScript brand is so strong it's like helping other brands come along now...

**Jerod Santo:** So now you wanna rebrand spiders...

**Divya Sasidharan:** \[laughs\]

**Kevin Ball:** Recuperate spiders, yeah.

**Divya Sasidharan:** I mean, you could argue that a lot of people are angry at JavaScript. If you talk to other languages, a lot of people are like "Oh, you JavaScript people... Blah-blah-blah. Such a fracture community..." So yeah, I feel like the spider would basically take that into account. \[laughs\]

**Jerod Santo:** Strong argument.

**Nick Nisi:** I think it should be a goose. That's where I'll leave it. Thank you, that was wonderful... \[laughter\]

**Jerod Santo:** "That's where I'll leave it..." \[laughs\]

**Divya Sasidharan:** Like Untitled Goose Game goose?

**Nick Nisi:** Like Untitled Goose Game, because it's...

**Christopher Hiller:** Yeah, I could get behind that...

**Nick Nisi:** ...it's adorable, yet annoying, and so much fun to play with. \[laughter\]

**Jerod Santo:** Somehow Nick wins the day. Goose it is, folks...

**Kevin Ball:** He's just trying to goose up listens...

**Nick Nisi:** Uuh... I love that.

**Jerod Santo:** And... Kball killed the podcast. \[laughter\]

**Break:** \[00:45:35.10\]

**Jerod Santo:** Chris mic-dropped me. \[laughter\]

**Nick Nisi:** That "What?!" Oh, my God...

**Jerod Santo:** I was gonna say, I wish we had the video for folks, because Chris just leaning back, vaping, and he's like "Are either of you confused when I say JavaScript?" I'm like, "Oh, my gosh... He's just owning us over there."

**Divya Sasidharan:** I just want to save that soundbite, of Chris saying "What?!" And then in future episodes just intersperse it in the podcast. \[laughs\]

**Jerod Santo:** That is a soundboard moment, for sure. "What?!" \[laughter\]

**Kevin Ball:** One hundred percent... One hundred percent. And you could just do that as a cut.

**Jerod Santo:** Oh, yeah.

**Kevin Ball:** You could put something in before it. Somebody says somebody, and then you go "What?!"
