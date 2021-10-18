**Jerod Santo:** Alright, you are backstage with Jerod and -- who's that there, on this episode with me? It's only Mat Ryer...

**Mat Ryer:** Oh, hello.

**Jerod Santo:** Hi, Mat. Thanks for coming backstage.

**Mat Ryer:** Oh, thanks for inviting me back here. It's cool, isn't it?

**Jerod Santo:** It's very cool, yeah. Kind of comfy, there's a fireplace, there's chairs...

**Mat Ryer:** Yeah, it smells a bit strange...

**Jerod Santo:** Well, that's mostly me...

**Mat Ryer:** \[laughs\]

**Jerod Santo:** Well, I wanted to get you backstage -- first of all, for those out there listening, maybe you've come to this episode because you are a Mat Ryer fan girl or fan boy, and you're wondering what is this Backstage thing... It's a show we like to do, kind of going behind the scenes of the Changelog, talking about the inner workings, stuff that we don't like to navel-gaze too much on our proper shows... And also just a chance to hang out, talk about John Wick trilogy, talk about Plex, what have you. And you can only get it on the Master feed. So if you are a fan of Go Time, or if you're a fan of the Changelog, or maybe you're a fan of JS Party or Practical AI, and you don't realize that we have a Master feed - well, Master is the place where you can get Backstage.

So there is one feed to rule them all, it's called Changelog Master Feed (changelog.com/master), and it's the only way you can get these Backstages into your podcast apps. Now, of course, you can go to the website, listen right there on the web page, but if you want to subscribe to Backstage, subscribe to Master. We think you'll like most of our shows. If you like one of our shows, we hope you'll like the others.

So that's Changelog Master... And I'm joined by Mat, as I just said, one of our Go Time panelists, and really the guy who so far on the newly refreshed Go Time is the one that makes me lol the most, as I'm listening to the episodes... Mat, you have a good sense of humor, and also that accent just makes lots of things you say just hilarious to me, and I'm just so happy to have you on Go Time, on the regular.

**Mat Ryer:** Yeah, thanks. I love doing it. The accent makes me sound a lot more sophisticated than I actually really am. If I speak to a British person, they know I'm not sophisticated; they can tell. But the rest of the world - yeah, I just sound intelligent and sophisticated, so... I'll take it.

**Jerod Santo:** I know, it has to be nice. It's almost like a super-power. Maybe it's like the next level of privilege we just start talking about - the British accent privilege. Because you have like an advantage on all of us in life. At least those of us on the other side, right? Like you said, over there it doesn't help you at all. And maybe an American accent helps, or maybe it hurts... I don't know, depending on your thoughts on Americans. But the British accent over here - we definitely give extra credence to those words, for some reason. It's odd.

**Mat Ryer:** Yeah, I've seen that, I've witnessed it, but I just caution against it, because you shouldn't do that.

**Jerod Santo:** Yeah, exactly. So the reason for this particular episode is because we've been talking a little bit, and I'd like to talk to you more to get your thoughts, about a Changelog API I had mentioned in the Gophers Slack months ago, as we were adding yet another ad-hoc endpoint for some one-off request to our platform, that I would like to have a proper API at some point... And I think you were at the time nudging me towards not solving a particular solution in the ad-hoc fashion in which I was solving it at the time... And I said "I consider doing a proper API. This is just kind of for now", and I wanted to use GraphQL, and you said "Hm, can I talk you out of that?", or I can't remember the exact words, but you definitely had opinions about that thought... And so I would love to talk to you more about that, and just kind of riff and ideate on what Changelog API might look like, on how I might build such a thing, why or why not to use specific strategies or schemas...

\[04:06\] But first, Mat, I'd love to get to know you a little bit. You jokingly poke and prod at JavaScript quite a bit, but as you were telling me before we hit record, you don't hate the language; in fact, you've written a fair bit yourself, and you used to be a JavasSript developer... So maybe just tell me and the folks how you came to Go, and how you came to be on Go Time.

**Mat Ryer:** Yeah, as I said, I was a JavaScript developer... And I was a JavaScript developer because I learned quite early -- I've worked with some great designers and some great tech people in London, and I learned from them that actually the user experience turns out to be way more important than I had previously given it credit for. So working on that user experience and delivering something that users love to use - it's not just making it usable, or making it hard to abuse, and all these things; it's actually I like applications where people are excited to use it, whether because it just looks good, or it does things in a way that makes sense to them, or whatever. And of course, rich web experiences are all sort of powered by JavaScript, so... Yeah, for many years, that's what I did. And I love doing it.

I used to love the fact that you could just do anything with JavaScript. You can change the prototype on a string and add methods to strings, and now all strings can have these extra methods, and things...

**Jerod Santo:** Right.

**Mat Ryer:** So I got very excited about all that. And Go is kind of the antithesis of that. They went completely the opposite way, for some quite good reasons, but it's an interesting dichotomy to see. The Go philosophy is you can't do things like that - you can't add methods to any built-in types, you can't overload operators... I know you can't do that in JavaScript either, I don't think... And they do that because then the code is easier to read, essentially. So if in JavaScript you've added your own special extensions or methods or whatever, if you've been playing around with different prototypes and changing things, it's possible to get some code which isn't familiar. You don't know what this is gonna do just by reading the code; you'd have to dig in and probably find out where that thing came from, where it was set up, and whatnot...

In Go, they prioritize readability, so you can't do any of that magic stuff. And some people think that that makes the language quite boring, and in some ways it does... But it makes it extremely readable, so there's a lot of benefit that comes, really.

**Jerod Santo:** Yeah, I would tend to agree. My experience with Go is that it's readable, and it's very straightforward, and I appreciated how quickly I could learn -- I didn't learn the entire API of the core language, but pretty darn close, on one project; one small API that I built in Go. And I like that. I liked where I could hold most of the language in my head at once. As a regular Go developer, maybe you have the entire thing in your head at all times, including some of the standard library, but it just has such a small surface area that I really appreciated that.

One aspect of it that did kind of strike as not as readable as all the if err!= nil checks that seem to be sprinkled throughout the code... Maybe they just shake out as white noise over time, but it felt like it was more noise than signal because of that error checking. Is that just a thing that newbs think, and then over time you just get used to checking that often?

**Mat Ryer:** \[08:11\] Well, it's definitely something that if you're not familiar with Go, it's definitely something you notice, that's for sure. And it does get a bit tedious for people, because they're used to languages like -- whether it's Java, or C\#, or even JavaScript you could say, where those exceptions are thrown; things are thrown if something goes wrong. Go doesn't do that. Instead, it's usually the second argument or the last argument returned. You can return multiple arguments from functions and methods in Go... So usually the last thing is an error type, which is just a value like a string or like an int, so you can then just check to see if that's nil. If the error is nil, you know that it succeeded, and you just kind of carry on.

So it's very common to have these early checks of if err!= nil then do something. And people report that tedium, and that is something -- the Go team were actually trying to solve and address this "problem", because they hear about it again and again, and in the surveys this is always that ranks quite high, that people complain about.

Two things I'll say on that. One, just because in previous or in other languages you have exceptions, and in Go you have to explicitly do it, it doesn't mean that things are that much different, really... Because if you're doing it properly, you have to handle exceptions as well, and it's easy to not. It's easy to just write your code, ignore any possible exceptions, and then if something does go wrong, it's just a crash of your program.

In Go, since you're checking these values all the time, you actually think more about "What's gonna happen then if this particular thing fails?" And you might make the decision that "Yeah, okay, this is program-ending. That's the end of the world. There's no way we can carry on if this doesn't work..." But sometimes you think "Hm. Okay... If that thing failed, maybe I could retry it." Or maybe it's okay that it failed. Like if it was getting something from a cash, or something like that, then it's okay that that failed. You can carry on still kind of optimistically. But you get to think about it and make those decisions, which turns out to be very valuable.

**Jerod Santo:** I can definitely see that. I know as a developer I tend to think along the happy path, first and foremost... And then maybe circle back. Or sometimes I don't circle back, because I'm moving on to "What could go wrong here?" or "What do I do if this doesn't work out so well?" And I know in the Erlang and Elixir communities they have kind of a "Fail early and fail often" -- I can't remember exactly what that maxim is, but it's similar here, where it's like "We should be thinking about these things right upfront." This is part of your system, how to deal with these scenarios.

**Mat Ryer:** Yeah, especially if you think about building services, and things... If you're using a network to access a service, then that can fail.

**Jerod Santo:** For sure.

**Mat Ryer:** Absolutely. In fact, you should assume it will fail. And that's kind of the point... It was interesting that you mentioned that you thought this was kind of hurting readability... And in a way, I know what you mean about it being noisy. But actually, as far as being expressive goes, it's literally telling you everything that's gonna happen. If this error doesn't equal nil, then either we'll just return the error - and that's the very common case, where your function returns an error too, so you're just sort of passing it up the stack, and then you may deal with it in one place in the main function, or something like that... That's perfectly acceptable, but you've kind of done that explicitly.

\[12:08\] So if you look in other people's code and you go and jump down and you're looking at a method somewhere deep in the system, it's extremely clear what's gonna happen, because there's no magic. There are no hidden exceptions, you don't have to know that things are being caught elsewhere, and things like this... You're just returning an error type from this function. I think that helps readability, and it helps see just literally what's gonna happen if something does go wrong here.

**Jerod Santo:** That's interesting. I think there's a balance to strike with readability in terms of verbosity. I agree with you that explicit when it comes to readability is better than implicit, because you can't read something that you can't read, right? If it's implied, if it's tucked under the covers, it's not readable by definition, because it's insinuated, so to speak. So explicit is better. And where it starts to -- I think it's a balance, because you can move overboard from explicit to verbose. Not that the if err!= nil is verbose, but over a certain level of repetition, you can either start to scan quickly over that verbosity and miss something, which reduces readability, or -- well, I guess that would be the only downside.

But I agree that you are telling a story -- if you compare it to prose or storytelling, if you say the same thing over and over again, it tends to become diminished. So it is a balance. I think it's a fair trade. And with all programming languages, these things are trade-offs; there's not one true way. And I appreciate the different languages for the different trade-offs they make... I think that's just one that the Go team made, and it has its benefits. I think explicitly handling those things is a benefit, but I can definitely understand the people who submit to surveys and say "Hey, it'd be awesome if I could not do this every single time."

**Mat Ryer:** Yes, and that was the try proposal - a way to make that simpler. But it was actually too magic, I think, and therefore it didn't get through the proposal phase. But you're right about that - being explicit is better, because there's so much already that's implicit in our code, that we can't help... So yeah, if the language itself helps us be a bit more explicit... But you're right, there is a trade-off, and sometimes it's probably just personal taste. If you just get really good at Java exceptions, and you've done them for years, and you love them, and you've been able to use them very effectively, and hopefully not using it to control flow too much (things like this), and followed good practices, then you probably would feel like this is too much when you come to Go, and I've definitely heard that, too.

My experience was in the beginning it was kind of quite strange that I had to do this... And it was a little bit strange that I had to explicitly create every structure that I was gonna use. It was kind of a similar thing where it was odd in the beginning, and then once I got used to it and started to feel the benefits from it, it got easier, and now it stops being a problem. But yeah, it does come up occasionally.

**Jerod Santo:** And most likely now that you're used to it, it's almost odd on the other side of the fence, right? Now, when you can just willy-nilly create an object out of thin air, like you could in JavaScript for example, and it was no guarantees about the keys, or values, or any of the content inside of that struct or that object - does that feel like cowboy coding to you, to a certain degree? ...just in comparison to the "explicitly define everything upfront" style.

**Mat Ryer:** \[16:06\] Well, I definitely now program in a Go way in other languages... Because you don't have to have -- say you have an array of objects; in JavaScript, they could all be a different type, and have different fields, and things. So you can do that, but I probably wouldn't do it. And that is something that I learned from Go, the fact that Go would limit you there... And I saw the benefits of why those limits were good. It's clearer, it's simpler, and everything's the same. That has some cognitive benefits. So now when I do JavaScript -- I take some of the lessons from Go when I'm writing in other languages. That's quite nice...

**Jerod Santo:** Yeah, that's an advertisement for just learning other languages, even if you're not going to switch ecosystems or languages... Because you actually pick up styles, and you can move interesting ideas or better ways of doing things even in the current way that you're doing. I know as I started to pick up Elixir, I started to write my Ruby code more in Elixir fashion over time. And even with a few of the things I learned in functional programming in JavaScript, which is very much optional to a degree... JavaScript is one of these strange languages that's kind of both functional programming AND object-oriented, depending on how you use it... But I started to write more functional style Ruby code. Still writing Ruby, just I got exposed to these new ideas over here, and I curate them over there, and I felt like my Ruby code got better as a result.

**Mat Ryer:** It's funny, that's the same thing that happened to me with Rust, because Rust is kind of a pure functional programming language... And Go is kind of like JavaScript, as you described. You can be somewhat functional, you can write functional code in Go. You can certainly follow some of the patterns like pure functions - a function that will return a new object. It will never mutate anything passed into it... Or even if it's on a struct, it will never mutate the fields in that struct. They are pure functions, and you can write them in Go... So yeah, it does get you thinking like that, and you might decide "Yeah, this should be a pure function", and hopefully you're deciding that based on what the user is going to expect to happen... The user of whatever it is you're writing, whether it's an API, or package that's going to be open-sourced, or something. But yeah, you get to use some of those benefits.

I do recommend that people are playing around with other languages. It feels like it's too much work, I think, to a lot of people, especially if they're new to programming. It just feels like learning a whole other language, because to learn the first language is such a big task. It feels like subsequent languages would be as hard, and they're really not, because you have all those foundations that you got from the first language that apply in most cases... And if they're different, then that's usually where there's something interesting going on.

**Jerod Santo:** Yeah, I liken it to learning spoken languages, especially if they're along the same route origin. So if you learn Spanish -- like, if all you speak is English and you learn Spanish, that is a heavy lift; it's a lot of work, even though those two languages do have some common roots. But once you've learned Spanish, picking up Italian is quite a bit easier, because they have so many cognates, they have so many similarities. They're both based on Latin-Roman languages, and there's so many similarities that the second language is much easier than the first. And then you go and grab French or something, and you become a linguist all of a sudden, because you are able to learn those other languages -- you wonder how these folks can speak six languages... Well, it's because it does get easier. You become good at learning languages.

\[20:09\] A similar thing happens, I think, with programming languages, especially when they're in the same kind of realm... But I think the real advantage, or the real benefit, is to go completely outside of your comfort zone. So if you learned Spanish, go learn Chinese, or something. Some completely different language. So if you know Go, find something so different than Go - Lisp, or something - and it'll really expand your mind. It'll be harder, but beneficial.

**Mat Ryer:** Great. Great advice.

**Jerod Santo:** So let's turn to you giving me some advice here. We have been talking about a Changelog API, and GraphQL is the new shiny... And I've never built a GraphQL anything. I've used GraphQL somewhat; I've played with it as a client... Really only doing queries, not even mutations, on for instance GitHub's API. I've built REST APIs, plenty... And my statement was "Hey, if we're gonna build an API for Changelog, why not make it a GraphQL API?" and it seemed like you had some caution against that, or just some thoughts on the differences, and the benefits and the drawbacks... So I'm just curious of your thoughts on APIs in general, and then on those two styles of APIs - the rise of GraphQL, and all that.

**Mat Ryer:** Yeah, well there was a recent Go Time episode we did with Francesc Campoy on graph databases. That may not be out yet, or is coming out soon... That's a very interesting one, and we kind of talk about this. And really, to me it comes down to the fact that graph data and graph databases are perfect if that fits the problem space that you're using it for.

For example, relationships with people is kind of perfect for that. If you have other types of data that models in a natural way as a graph, or as a tree of data, if you can imagine that - there's different ways to think about it - then I think a graph database and a GraphQL interface and all that stuff really make sense.

For me, the question is around having a GraphQL interface over a relational database or other type of data store, where the data either doesn't live in that kind of format or structure, or whether just storing it in that way wouldn't be very natural. That's really where the question comes from... Because I've used APIs which were essentially GraphQL -- and by the way, there's a lot I like about GraphQL. Especially if you're a front-end developer, you get to be really specific about the data you get back, so you can in theory ask for less, if you're not gonna use it... So that's nice, it feels nice, and at scale probably that matters. For most people, that probably won't matter, because the scales we're talking about are just much smaller...

I've used APIs that are essentially GraphQL interfaces over relational databases, and it's too easy to abuse it if you ask for -- because it's very natural in GraphQL to ask for "I want these objects", and then I know that there's some relationship where these might be parents or children, so you might have groups, and there might be songs... Say that we've got some kind of music library. These songs are in genres, so we could actually get the genres and maybe get the top five songs from each of those genres. That's very easy to describe in GraphQL.

**Jerod Santo:** \[24:16\] Right.

**Mat Ryer:** But that might turn into something very expensive on the back-end.

**Jerod Santo:** Gnarly. Something gnarly.

**Mat Ryer:** Yeah, and a bit unnatural... Versus - you might wanna denomarlize that data if you're gonna be using it often, that kind of query... And you don't have much opportunity to do those kinds of operations, where you're like "Okay, we're gonna specifically maintain this index, or this view of the data, because we knew that the homepage needs this, and it's there, ready to go." If it's just GraphQL, it's almost like -- not as bad as, but it's almost like exposing SQL to the JavaScript developer, where they can just ask for anything and do any joins they like, and it can be very expensive.

**Jerod Santo:** Interesting.

**Mat Ryer:** So it's that, where it doesn't quite fit the problem space.

**Jerod Santo:** Well, let me say that in our specific case it would be exactly that. It would be a GraphQL API on top of a Postgres database filled with tables, which are related to each other, with foreign keys... Very typical relational database schema. Now, we have podcasts -- you've been in our admin, so... I don't know, as a developer, I can start to decipher people's schemas as I use their admins at least... So you probably know some of the nouns and relationships in our system. We have podcasts, podcasts have hosts, podcasts have episodes, each episode has guests and hosts, as well as other data directly attached to it, like transcripts and whatnot... Very simple, relational thing.

In fact, I even used... There are some tools out there - I can't remember the name of the one, that will just take your Postgres database and just turn it into a GraphQL API... And I toyed with one of those. PostGraphQL maybe it was called? I don't know. And it literally exposed everything; it was a GraphQL access to our entire database, at the time. And I was like "Well, I don't want that. I wanna at least be able to craft it a little bit, and expose what I want, and hide what I didn't want..." And you could do all that -- I don't wanna berate PostGraphQL; I think that was the name of the project. The author of that - his intention is that you define all of your access, and your public/private stuff for your GraphQL database inside of Postgres, really leveraging the features of Postgres... And we don't do that. We put a lot of our business logic in our application layer in Elixir. I didn't wanna duplicate efforts there, so I was like "Well, this isn't really for us." But there are other options in implementing it.

**Mat Ryer:** That's an interesting one.

**Jerod Santo:** That being said, it's exactly what you describe - it's a relational database, and it would have a GraphQL surface area.

**Mat Ryer:** Yeah. There's another point here which I think is important. When we built Machine Box, one of the key things that we spent a lot of time on was actually the APIs. Machine Box, for anyone that doesn't know - it's machine learning technology inside a Docker container, and then it has an API which lets you do things like... We have Facebox, where you can teach it faces and ask it to recognize faces with images, and things like this. And the API talks in terms of faces, and talks in terms of images, and people. It has this language... And that's because it was handcrafted for that problem space. That's kind of the opposite of this approach of using tools to generate and just automatically expose things, like you talked about... It's a different approach.

\[28:11\] It feels like you're gonna get a big saving by these automatic things, but whenever you go too far that way, you end up with an API that doesn't tell the story. It's just everything. And also leaks a lot of the internals, too. You're literally leaking your database structure... Which might be okay, because like you say, you've got hosts, you've got podcasts that have hosts, and there's episodes there, and I suppose the episodes have lots of hosts, one or more, and it also has guests...

So yes, maybe the public model of your data matches, and that's okay, but sometimes that won't be the case. Sometimes there will be internals that you wanna either keep secret, just because they're messy, or maybe even give yourself the option of changing it later. And if you've just exposed this sort of raw GraphQL interface, your hands become tied. You can't change things around internally, because your API has already made promises.

**Jerod Santo:** Don't we find many REST-style or Recess-oriented APIs also fall into that trap? I've used many REST APIs in my day, and it's like "Oh, here's their users table, here is their tweets table..." For example, it feels like many REST APIs do that same thing, which is basically "Here is our internal structure exposed for you to query."

**Mat Ryer:** Yeah, yeah, absolutely. You're not protected from that just because you're using a REST API, or something. It's more about handcoding it, handcrafting it, and telling those stories, versus automatic tool that just expose data.

But to be honest, again, it's just really what you care more about in that particular case. Because like you say, often you have a table of whatever, and there's some kind of relationship to another table, and that's what it's gonna look like in the API as well. So maybe in those cases it's okay.

**Jerod Santo:** Well, the cool thing about Backstage and being able to talk about use case is that we don't have to speak in abstracts. I can tell you exactly what our goals are. I do know what the goals would be for a Changelog API. I wouldn't just build one to check a checkbox. My goal would be to -- first of all, it'd be mostly read-only. We have very little user-generated content on Changelog.com. We have comments on episodes and on news items, we have submissions, so you can submit a news item, that we may or may not feature on the newsfeed... You can submit a request, to request an episode... That's basically it.

Now, we do extend our admin to certain hosts and editors etc, but mostly the API would be a read-only API... And I guess the goal for that API would be to allow our listeners and those interested to consume our content in a programmatic way, and create their own tools, perhaps, for consumption, or do analysis... I know there's been interest in ingesting our transcripts for maybe some fun Machine Box style things...

And so ultimately, I would want it to be -- the thing that's cool about just putting an API out there in a situation like ours, where we're not trying to monetize its use, in the regard of like transactionally, is that we really want it to be consumed in a way that is empowering to the end person, and very much in that old mash-up style of web 2.0, like "Hey, let's take this API, and that API, mash them together..." I don't know if you were around during those days, but I just loved how open all the APIs were. It's like "Hey, take our data and use it." That's very much the spirit of what we would be doing.

\[32:17\] So my goal would be -- and that's why I was thinking GraphQL, because it feels like that would provide more flexibility for those front-end devs, or for those end people, to just kind of feel like they're creating... I wonder if it's more ergonomic for a front-ender or for an API developer than a REST API.

**Mat Ryer:** Yeah, it might be... And one of the things that you get - I'm not sure how easy this is to provide, but I know that every GraphQL API I've seen has it - is this discovery that you get, and the documentation that gets generated... And you get this kind of web-based IDE that lets you -- you can actually craft your queries in it, and it gives you autocomplete...

**Jerod Santo:** Which is pretty slick, yeah.

**Mat Ryer:** Very cool, yeah. So from a discovery point if view, that is probably very valuable in your case... Especially when you just wanna expose the data and see how people can be creative about that.

**Jerod Santo:** Yeah.

**Mat Ryer:** And I could imagine people building visualizations, and processing the transcripts... Even if not for machine learning training data, you could process the transcripts and detect sentiment, and things like this, for example. So you might be able to then have a filter that says "I'm only interested in positive podcasts..."

**Jerod Santo:** Right, right.

**Mat Ryer:** ...where a certain threshold is met. Things like that. And also, how about a for-adult filter; you'd be able to find podcasts automatically that were suitable for children.

**Jerod Santo:** Oh, well all of our shows are suitable for children. Mat, come on...

**Mat Ryer:** Yeah... \[laughter\] You must edit out a lot when Mark Bates is on the show though...

**Jerod Santo:** We do have a heavier edit on Mark's shows, for sure. Well, similarly, you could say "I only wanna listen to Go Time when Mat Ryer is on the pod." Or when you talk about sentiment analysis - and I'm sure you're much more of a machine learning expert than myself... All I know for machine learning I've learned on Practical AI, whereas you've built a successful company around these things... A sentiment analysis is interesting. It seems like it's very achievable in the positive/negative fact, but what about the more difficult things to extract? Where are we -- I'm thinking like with snark, for instance. Can sentiment analysis pick up sarcasm or snark? Because a lot of stuff that you say on Go Time I think would be triggered by a snark sentiment analysis tool. Is that something we can do these days, or is it still difficult? Because humans get that wrong all the time.

**Mat Ryer:** Yes, yes... That is true.

**Jerod Santo:** \[laughs\]

**Mat Ryer:** You know, it's all about the training data. This is something that was the big revelation when we were building Machine Box. We had in our head that the models would perform to a certain accuracy, and Facebox happens to be one of the most accurate face recognition technologies in the world, believe it or not. It still beats Google and Amazon and some of the others in some of our testing.

But what we thought was that we would be continually working on these models to make the models better, and in some cases that is what we do, but what was a surprise for us was that actually improving the training data had a much bigger impact... So we didn't spend that much time on the models themselves, we spent a lot more time on training data.

\[36:11\] So to answer your question about sarcasm and things like this - it really comes down to the quality and the amount of training data, and then it would be able to detect it.

**Jerod Santo:** Gotcha.

**Mat Ryer:** We built a fake news detector that worked surprisingly well. You take a news article - and I think we took the title and the body - and you run it through the model, and it could just say "Yeah, this looks like fake news." And fake news was just like this sort of obviously fake...

**Jerod Santo:** Oh... Not that grey area, where it's fake to one person, but not to the other person... But the obvious "This is a spam, an outright lie."

**Mat Ryer:** Yeah, exactly. Junk science was one category, and satire also... The Onion - it noticed that "Yeah, this is satire." And we don't really know how it knew these things, we just knew that in our tests it did well, because of the training data. So we throw loads of examples of Onion articles in, for example, and loads of BBC articles, and at that point we're making a decision that Onion is satire and BBC is real news... And we might choose another news outlet that we consider to not be brilliantly accurate news. There's some examples in the U.K. and the U.S. of that.

So yeah, it's really our opinion that's encoded into this model, but it was able to look at a news article and tell you with quite a high level of accuracy whether you should ignore it or not. And Facebook were actually interested in -- obviously, Facebook has this problem, because stuff gets shared around the world extremely quickly, and there's so much of it; it's very hard for them to manually police that, and check that people aren't being misinformed... So there's hope for machine learning to do that, but of course, it's not perfect. We still have to decide what goes into which bucket in the training data.

**Jerod Santo:** Right. That's fascinating. It reminds me - there's a Subreddit called "Not the Onion", and it's where people post news/headlines which are so far-fetched that you would think the Onion wrote the headline, but they're actually reality. Obviously, you have to read each one and decide whether it's true or not, but... It'd be interesting to try to trick a machine learning algorithm with - I'm sure you could - just with bad data, and it would be pretty much useless. So the data is really what it's all about.

If you just put a bunch of Onion articles, and a bunch of Not the Onion articles into a model, it would probably have a hard time deciphering between the two, because they are hand-selected as being Onion-esque... Right?

**Mat Ryer:** Yes. Well, you see, we don't know for sure, but we suspected that there were people that were using our model to make their fake news-writing better...

**Jerod Santo:** Uuh...

**Mat Ryer:** Yeah, that's another way to use the technology, to say "Okay, we're creating fake news. Does it pass this test? Can this model from Machine Box suss us out and figure out what we're doing?" And I suppose if it can't, then they might publish it with some confidence there.

**Jerod Santo:** Wow.

**Mat Ryer:** \[39:51\] Yeah... So we don't know for sure that that was happening, but we had a strong suspicion that that was being used for that reason... Which is very -- it's interesting, we're building machine learning technology, and it is so new... There is a lot to think about from the ethical side, and some cases came up where we were thinking about this, and whether it's something that we thought -- as we like to be ethical in the work that we do, there were some areas where it was quite difficult.

One example was Facebox -- there was a conscious early decision for Facebox to not work on children's faces. There are some good use cases for automatic face detection for children, like if they're missing; if a young person has gone missing, and you could just process all the CCTV and find them, and save them, then it's great.

**Jerod Santo:** For sure. \[unintelligible 00:40:51.20\] When somebody goes missing, that face goes out. Well, if you could already have that systematized, you could be searching before any humans would have to or be able to.

**Mat Ryer:** Yeah. And even build systems that coordinates across cameras and tracks, notices the timestamps of where someone was spotted, and all this... That, of course, can be abused in lots of ways.

**Jerod Santo:** Massively.

**Mat Ryer:** Yeah. But not being able to detect children's faces - that was something that we decided early we just weren't gonna try and do that, for ethical reasons. And I think that's something that programmers should think about. If you're working on something, do you feel like the ethics are okay with it? And there are some examples - I have friends that work around town on various projects where that really is a big question for them. It's an interesting one.

**Jerod Santo:** Yeah, it is. So if you're out there, and if we've developed our Changelog API and you're gonna use machine learning against our transcripts to find every time Jerod says something dumb, don't do that. It's not ethical, you know? Ethics, come on.

**Mat Ryer:** Yeah, you don't need a machine learning for that, mate.

**Jerod Santo:** No... \[laughs\]

**Mat Ryer:** You just have to find the episodes you're on.

**Jerod Santo:** That's the easy button.

**Mat Ryer:** \[laughs\]

**Jerod Santo:** So what's the state of Machine Box? Because you made this fun Go Time promo the other day, which I'll put in the show notes... We've memorialized it on YouTube, so it'll last forever. On Twitter things come and go, but on YouTube they last forever... This fun video... And on the tweet you said "I really do need to get a job." You are "funemployed", I believe is the term, so I'm assuming Machine Box has been sold, or...? Tell me that story, where are you at?

**Mat Ryer:** Yeah, I call it "punemployed".

**Jerod Santo:** Punemployed?

**Mat Ryer:** Yeah, because it's a pun, isn't it?

**Jerod Santo:** \[laughs\] It is.

**Mat Ryer:** So yeah, we actually sold Machine Box.

**Jerod Santo:** Who did you sell it to?

**Mat Ryer:** We sold it to a company called Veritone, which is a California-based company. They're a big AI operating system kind of massive platform, running AI at series scale, and all these things. Machine Box was a small, little developer tool that we wanted to just put in the hands of developers, so that they could use machine learning in their own projects, and build classifiers, and solve other types of problems. But if you needed to deploy that at scale, or run it in any serious way, you kind of had to do that yourself. We just shipped Docker containers.

A lot of our early customers had their own Kubernetes running, or other similar platforms that they were already maintaining, so it fit nicely into that. And then Veritone - they were an early customer and they said "Look, we have lots of demand for this kind of technology." And one of the things that Machine Box allows is, since it's a Docker container, you can run it anywhere. You can run it on-prem, you can run it in various clouds... You have this sort of flexibility which you don't get for the other machine learning APIs. You don't have that same flexibility for the other machine learning APIs... So it made sense to join together and provide that technology at that scale, for their customers.

**Jerod Santo:** \[44:25\] Yeah. Well, congratulations. That's awesome.

**Mat Ryer:** Thank you.

**Jerod Santo:** Quite a rewarding experience. I mean, you've built something from scratch, and it has so much value that it's acquired... That's really neat.

**Mat Ryer:** No, it was. It was a very interesting experience... And surprising, in some ways. I think for the whole of my career - and for a lot of people - the dream is you make a little startup, and then you sell it... And that's almost like the startup dream, really.

**Jerod Santo:** Yeah, for sure.

**Mat Ryer:** Yeah, and once you've done that, you then -- I mean, we stayed and worked for the company for a year... But once you've done it, it's kind of "Oh, okay..." I thought that was gonna be the thing that you do and then you're just happy forever.

**Jerod Santo:** You're done, yeah. Mojito Island, as I call it.

**Mat Ryer:** Right. Yeah. It's not that.

**Jerod Santo:** It's not that?

**Mat Ryer:** It's not that, no. That was the surprise. It's kind of somewhat underwhelming an experience, because if the thing that drives you is suddenly gone, you have to find something else to drive you, and that was a surprise that came out of the whole process. But I'm still obviously glad we did it...

**Jerod Santo:** For sure.

**Mat Ryer:** And the tech is in good hands, and it's really where it belongs, because it's now being used at scale to solve some really awesome problems.

**Jerod Santo:** Yeah, it's an interesting take. I was speaking with my kids the other day about success and achievement... And my son, Wes, his baseball team last summer - I was coaching them, and we won the 9U Summer Baseball League Tournament.

**Mat Ryer:** Oh, congratulations.

**Jerod Santo:** Thank you very much. I didn't get any hits... But it was fun. And of course, it was an exciting thing, and it was a lot of build-up, and there was stress, and pressure, and all the things that you feel as you go through a competition... And we went to through the championship game and we won, and we jumped up and down, and they threw Gatorade at me, or whatever... And then I asked him "How does it feel? You won" and he said "It doesn't feel as good as I thought it was gonna feel."

**Mat Ryer:** Yeah...

**Jerod Santo:** And I said, "Oh, now you've learned one of the lessons of life - achievements, for some reason, there's less satisfaction in them once you achieve than you thought there was going to be..." It's hokey, but really, you look back and the thing you appreciate most was the season, the run-up to the championship, and all the work that you've put in, and the actual accomplishment is somewhat unsatisfying, and leaves you wanting more, which is the definition of unsatisfying.

If you're satisfied, then you don't need any more. But it leaves you wanting more, and there's an emptiness there... And it kind of is surprising... But it's a shared experience; you're not alone in that. That's why a lot of people are serial entrepreneurs, because they have that success and then they think "I need to go get that feeling again. I have to get back to that point", and so they try again.

**Mat Ryer:** You mean a serial entrepreneur like the guy who started Kellogg's?

**Jerod Santo:** That's right. He had his lucky charms, and then he's like "I need to invent Cheerios."

**Mat Ryer:** Yeah, that is so true. It's an interesting lesson. And it actually highlights the fact that working these 12-hours days that people do, and more, and all putting all this work into the projects - which I do still, because sometimes you just love something that you're doing, and that's what you want to do...

**Jerod Santo:** \[48:15\] Yeah.

**Mat Ryer:** But actually, making sure that you're happy and it's sustainable along the way is so important, and that's more important knowing that -- because I've been through that thing, where we had this success. So now I sort of realize, "Okay, there are different things that might matter more, and you should watch out for those along the way this time." So that's a lesson that I've definitely taken... Although I was still -- I mean, I was recently building a little blog for myself, and I was just obsessed with it... I get a bit obsessed, so I was just up early, working on it, forgetting to break to eat... These kinds of things starting to creep in, so I have to be very conscious about it and go and try and take deliberate breaks, go for walks, try and do some exercise... All these things, they are important, and they help sustain it.

And the amazing thing, of course, which I've heard a lot of other people say, is you can't solve a lot of problems when you're not thinking about them... Whether it's while you're asleep, or just doing something else.

**Jerod Santo:** Absolutely.

**Mat Ryer:** And similarly, you can get inspired that way, too. In fact, you probably need to be out in the world, interacting with people, with different people, and probably the more diversity you can get, the better. The inspiration that can just find out in those situations, which you then can translate to something that you're working on, that you wouldn't have... They're so valuable. So that's another reason why people should turn the screens off and go outside, go and meet friends... They should do these things. It's good for your work.

**Jerod Santo:** So what's next for you then?

**Mat Ryer:** Well, David Hernandez, who is one of the co-founders of Machine Box - David Hernandez and I are very interested in project management and the way that teams work, and also we have strong opinions about how to run dev teams... And we think lots of people are doing this wrong. So we may build some tooling, and we may write about these sorts of things, and see if we can help teams be more sustainable and happier, but also more productive as well. There's a lot of bad practices around, which people don't know that they're bad practices. Often people are sort of running a bit on autopilot, it seems like.

Tools like JIRA and Slack... I mean, Slack - the fact that you can just interrupt somebody in Slack is kind of insane, from an engineering point of view.

**Jerod Santo:** Well, for sure.

**Mat Ryer:** And especially features like that @here, where you can just -- in a channel you can just write @here and then send a message, and that will alert everyone who happens to be online and in that channel... Which can sometimes be -- I saw one the other day, 85 people were alerted because of this thing. Imagine that. Imagine walking int a room and there's 85 people, and you just go "Here!" and scream it, and everyone has to look at you... And then you say "Has anyone seen that document that I need?" People wouldn't tolerate it, but we tolerate it on Slack, for some reason. So that kind of thing...

**Jerod Santo:** \[51:54\] Yeah... It's funny you say that, because while we talk, Adam is slacking me right now, and trying to distract me while I'm on this call with you, which is incredibly rude. And then also, reminds me of slack you're gonna bring up JIRA. Surely, Slack is not the only one to blame here, because -- I mean, the infamous Reply All on email has been going on for, I guess, decades now. I won't name names, but I've had some friends who work at large corporations and will talk about some email chains which would be going out to literally thousands and thousands of people, and be concerning like two or three of them... And it's just insane, the inefficiencies there.

**Mat Ryer:** I think Gmail hides Reply All now, but you have to kind of dig into the menus to find it. So the default is it would just reply to the one person.

**Jerod Santo:** That's good.

**Mat Ryer:** So yeah, they're trying to sort of use the tooling to help you make better decisions, or just the default become the better, healthier decisions... And that's the sort of thing that we may build in our next project. We started to sort of prototype some things... We've come up with a name already, which is very important...

**Jerod Santo:** That's the hardest part.

**Mat Ryer:** It's the hardest part, but it's very fun, and when you get the right name for the project, it's just amazing.

**Jerod Santo:** Are you ready to reveal it right now on Backstage?

**Mat Ryer:** I might have to come back and do it.

**Jerod Santo:** \[laughs\] Well, come onto a proper show if you're going to do a big reveal...

**Mat Ryer:** Yeah, okay.

**Jerod Santo:** Yeah, looking forward to that, looking forward to your writing, as well, and of course, looking forward to Go Time. Anything Go Time-related that you'd like to maybe wax poetic about? Maybe future episodes, things you're interested in doing with the show, or taking the show places, or anything along those regards? Because we haven't mentioned Go Time much, and really it's the linchpin for how you and I even get to hang out today.

**Mat Ryer:** Yeah, well Go Time is a lot of fun to do. Everyone that comes on the show, they always report after they had a really great time... So it's very fun. For anyone that hasn't heard it, you don't have to be into Go to listen to it. Often, we talk about things around the language anyway. Like I said, graph databases recently...

And yeah, I think we want more live engagement, we want more people to listen live, and whether that's Twitter, or in the GoTimeFM channel in GopherSlack, where we're happy to be interrupted, because we're asking for it, so it's okay...

Yeah, we want more of that, for sure, because it's so great when someone in the community just has a question about something that we're talking about, and otherwise we may not have thought of it. We get to discuss it, we get to answer it, sometimes we fight over it... You know, it's great.

I wanna do an episode on the defer keyword in Go. I wanna do just an entire episode on defer, because --

**Jerod Santo:** It keeps getting pushed off?

**Mat Ryer:** \[laughs\] Yeah... We've already done it, actually. It's just gonna happen at the end of the series.

**Jerod Santo:** \[laughs\] Beautiful.

**Mat Ryer:** It should be the last one we do.

**Jerod Santo:** It should be. It has to be.

**Mat Ryer:** Yeah. And I thought it might be fun -- Go Time used to have people, popular projects... Free Software Friday used to have that. I do wanna do that again, so that we can talk about current projects, new projects and things that are around. And I also like the idea of doing a little quiz where we ask a question one day and get people to tweet in, and then the week later we can answer that question and ask the next one. We could get like a chain -- it's kind of a blockchain of quiz \[unintelligible 00:55:57.12\] It's not about blockchain, it's just a--

**Jerod Santo:** It's an immutable quiz that is append-only.

**Mat Ryer:** \[56:06\] Yeah, and you reference the previous one \[unintelligible 00:56:07.00\]

**Jerod Santo:** Once you ask a question, you can't take it back. No take-backs.

**Mat Ryer:** Yeah... \[laughter\] Yeah, we could do that.

**Jerod Santo:** One thing we used to do with the original trio of Go Time, which was a hit, was our AMA episodes - the Ask-Me-Anythings. That would be another cool thing to bring, now that we have a larger and more diverse panel, and new faces, new voices, it'd be cool to maybe bring back once in a while an AMA where people can submit questions beforehand for whoever the panelists happen to be, and take those up. That'd be cool, too.

**Mat Ryer:** Yeah.

**Jerod Santo:** Those are always fun.

**Mat Ryer:** We could always do that, every time even, at the end of the show. Or I suppose you do a dedicated show to it?

**Jerod Santo:** We have, yeah. It could be a segment. But Go Time doesn't really do the segment thing as much as -- like, JS Party, we have three segments each show, and we mix and match. We have some recurring segments, sometimes we'll have a guest on, so they'll take two of the three segments... So we're a little bit more segmented. So we could work in an AMA as kind of like a third of an episode. Same thing with Free Software Friday, or we call them shout-outs. It's just like one third of an episode. But Go Time seems like - at least for now, and... Of course, the cool thing about podcasts is - hey, it's our show; we can change and experiment and do all those things. We're not stuck into a time slot. But if you segmented the show a little bit more, then it'd be easy to have an AMA segment, versus an entire episode.

**Mat Ryer:** Yes. So here's why it doesn't get segmented then... It's because, for whatever reason - this is just a personal thing of mine - I like to improvise. When I do my talks at conferences - and for anyone that hasn't seen them, head over to YouTube, search "Mat Ryer", have a look. You can watch them... And I talk about things in Go, usually, and other things. But they're improvised, mostly, because there's too much pressure, I think, when you have that strict plan of what you're gonna say.

And by the way, some people in the Go community that I know of - and I assume elsewhere - will have written out verbatim their talk. If you transcribe a Dave Cheney talk, it's beautifully written. It's like a blog post. That would be, I think, too much pressure for me... So my approach is have a general outline, but be so free within that that I actually can't go wrong. There's nothing to go wrong from. And the freedom that that brings really sort of just takes the pressure off.

So if we got somebody on Go Time that was better at organizing and planning and all that, then I think we could have those segments, we could have those special little recurring -- you know, special features...

**Jerod Santo:** Right. Well, let me just say, as a word of encouragement, I'm very much in the same boat as you. I like to improvise, I like to change things on the fly, or right before the fly... So far, JS Party's segments hasn't been too much of a challenge, because sometimes -- basically, you make a plan... With the Mike Tyson comment - you know, "Everybody has a gameplan until they're punched in the face." Once the show starts, you get punched in the face, and whatever happens, happens. And sometimes we throw a segment out, sometimes we reverse them in order, sometimes we go completely off the rails and just let the show be what it is... It's like a framework for an episode, but it's not like "Well, we have to do shout-outs, because it's segment three, and we said we were gonna do shout-outs for segment three."

**Mat Ryer:** Right.

**Jerod Santo:** So there's a lot of wiggle room in there, but it does require more forethought, and some teamwork. And of course, it's a team show, so you have a panel. If your panel is not as by the seat of their pants as you are, then that might rub some people the wrong way, and it may not work out. So yeah... Worth a try, worth mixing up a little bit, but yeah, I agree - if everybody... A lot of people prefer to have a plan and stick to the plan, so maybe that boxed you in a little bit.

**Mat Ryer:** Right.

**Jerod Santo:** Alright, Mat... Well, hey, thanks for coming backstage with me. Nice to get to know you a little bit more... I feel like I know you because I do listen to Go Time on the regular. I do not write a lick of Go, I haven't written any since that API project I did a couple years back, and yet I immensely enjoy the show... Not just because it's a Changelog show, but because like you said, there's lots of different topics, there's lots of things to learn, and for me there's just lots of just laughs and camaraderie in the Go community. So I really appreciate you, and I appreciate Go Time, and thanks for coming Backstage so we can get to know you a little better.

**Mat Ryer:** Yeah, thanks for having me. I look forward to listening to more Changelog podcasts. Did that sound too inauthentic? \[laughter\]

**Jerod Santo:** I hadn't judged it yet. I was trying to find the Stop button on my recording.

**Mat Ryer:** Okay, well spoiler alert - it does. It's too inauthentic. Let me do it one more time.

**Jerod Santo:** Okay, well we'll just leave this part in, and then everybody will know that you were concerned about it.

**Mat Ryer:** That's what it's always like, mate, to be honest.

**Jerod Santo:** \[laughs\]

**Mat Ryer:** I always want bits that I've said taken out of the Go Time, and it never happens.

**Jerod Santo:** Oh, I know. I've heard you make jokes about it. You're like "The editors don't edit anything out of this show."

**Mat Ryer:** They edit out other people. Other people sound brilliant on it.
