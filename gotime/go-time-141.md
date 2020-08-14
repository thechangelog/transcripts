**Mat Ryer:** Hello, and welcome to Go Time! I'm Mat Ryer, and today we're talking about JSON. You'd be \[unintelligible 00:01:53.21\] thinking that's gonna be the most boring episode, but I guarantee you it will not be. Joining me today, Johnny Boursiquot. Hello, Johnny!

**Johnny Boursiquot:** Hello, Mat.

**Mat Ryer:** Have you had a good week so far?

**Johnny Boursiquot:** Yes... We're about to talk about JSON, so I don't know... We'll see.

**Mat Ryer:** \[laughs\] We'll see. Don't worry though, we do have a great guest today... A very prolific contributor to Go. You've probably seen his name around - Daniel Marti. Hello, Daniel.

**Daniel Martí:** Hi. Happy to be here.

**Mat Ryer:** Welcome to the show. Great to have you. Have you had a good week so far?

**Daniel Martí:** Yeah. We almost got to 20 degrees in the U.K, so that was nice... But summer was over a few weeks ago. It only lasted for the weekend.

**Mat Ryer:** Yes. We do have some more heat coming later this week, so stay tuned for that... I don't know why I sound like a news anchor... \[laughter\] I'm just trying to be a normal human, but I find that difficult sometimes.

Okay, so let's start then... Just quickly, for beginners, in case somebody's really brand new - what is JSON? Do you say it like that, do you say JSON, or do you pronounce it some other way?

**Daniel Martí:** I just say JSON, and I think if I had to explain this to a little kid, I would say it's kind of like a way to represent data... And it has already gone out the window, the plan to explain this to a little kid.

**Mat Ryer:** No, kids get that. Let's assume it's a really smart kid.

**Daniel Martí:** Yeah. So it's like a very generic way to represent data. It doesn't matter who the other reader is, who's on the other side they most likely will be able to read that data.

**Mat Ryer:** Yeah. And it's JavaScript Object Notation, so it comes out of JavaScript... But it turns out to be really kind of useful across a lot -- every language really has now some kind of JSON support.

**Daniel Martí:** It's practically everywhere. Practically, every language out there that's modern today has to have JSON support, because you just do... And your computer - you might not see it, but it definitely is running JSON at some level.

**Mat Ryer:** \[00:03:54.22\] Yeah. So it's like an object, and it has fields, and those fields have some types... And it's the types that we're used to as well in Go, like strings, and numbers, and booleans. And, you know, there's other objects, arrays, those kinds of things. I think that might be the whole list. And why did it get such popular use on the web? I mean, it is kind of perfect for web technologies.

**Daniel Martí:** I would say it came from all the success that browsers had, the modern web had... And suddenly, HTTP, HTML, CSS and JavaScript and JSON - all these technologies kind of took everybody by surprise. Initially, everybody thought they were just toys, but now suddenly people are building real companies on top of them... And JSON has too much momentum. I don't think anything is ever going to replace it at this point, honestly.

**Mat Ryer:** That's really interesting.

**Johnny Boursiquot:** Mat, hang on... I'd like to add something here. I like what you said, Daniel... There's another reason, I think - my personal reasons as well - why I think JSON took off. Primarily for me it was because it was not XML, which is prior to that, prior to JSON taking over... \[laughter\] If you want an interchangeable format, with other systems and things like that, XML was the default go-to. And then we created a whole ecosystem around XML parsing, XSLT, and templates, stylesheets, and all kinds of (really), looking back, brilliant technology for the times, but just really hard to work with. You really had to depend on machine-generated XML. Sitting down and editing XML by hand, especially huge, large documents - dealing with that was just maddening.

So here comes JSON, making it very simple, very human-readable... And it was like a breath of fresh air. So absolutely, to corroborate the idea that it became very popular with the rise of HTML, JavaScript, CSS - building applications on the web; from a systems and data interchange standpoint it was revolutionary just as much.

**Mat Ryer:** Yeah, and it's simpler also than XML, too... Because in XML you can do weird things with the structure, like you can just have siblings next to each other. That gets very complicated to work with. You can't do that with JSON, can you? There is a tighter structure to it, and I think that helps as well.

What about any gotchas with working with JSON? Is there anything that beginners ought to watch out for? One thing that occurred to me is in Go if you have a time.time type, so you're gonna represent time as JSON, it turns that into a string, doesn't it?

**Daniel Martí:** Yeah. I am actually not sure exactly what happens, because I usually just write custom code to handle times in JSON...

**Mat Ryer:** Really? Why?

**Daniel Martí:** Most of the time people will want timestamps in a very specific format... So they will write the code to handle that. I actually don't remember what the default behavior is, but yes, JSON doesn't have a timestamp type, so it will just end up as a string.

**Mat Ryer:** Yeah. Which is fine, as long as the thing that's interpreting also understands that format, and can then work with it... But that's quite an interesting point - there are some rudimentary types in JSON, and sometimes you have to do a bit of magic to turn your particular data into something that's gonna work in that text-based format.

Another thing that's quite weird is that -- by default, I think the numbers are all float64 type. If you're working with generic data, you can use the map string interface type in Go to unmarshal JSON into, and it will work; it will fill that map up like it's the object. But of course, if there's then numbers in there, it's not sure whether it's a floating point number, or an integer, or whatever... So it just uses the most useful type, or the most versatile type, the float64. I found that to be quite strange when I first started working with JSON in Go.

**Daniel Martí:** \[00:08:13.16\] And actually, I think numbers are a really interesting point, because I think JSON could have gone one of two ways. One of them would have been -- you know, we've got integers on one side, and you've got floats on the other, and then you define what the sizes in bits of those are. For example, if this Go, you could have said \[unintelligible 00:08:26.05\] And that has some advantages; it's stricter, so if you want to use one or the other, it's guaranteed that it's gonna stay that way, and you're not gonna lose any precision, or anything like that.

But on the other hand, if you just say it's gonna be a number, then that opens the door to, for example, supporting arbitrary precision numbers, a.k.a. big numbers, which Go also supports with a different package.

**Mat Ryer:** So the encoding/json package, which - by the way, Daniel, you actually co-maintain the encoding/json package in the standard library, right?

**Daniel Martí:** Yeah, that's right. And I should mention before we go on, I've noticed something weird on my laptop, which is that my memory usage has been rising steadily for the past 15 minutes... I don't know if that's a bug in Zoom, or in my recording program, but I think my laptop is gonna crash in about ten minutes... So if that happens, just FYI.

**Mat Ryer:** It's exciting though... It's like there's a bomb that's gonna go off, and we're just sort of waiting.

**Daniel Martí:** Yeah. It started at 32%. I'm currently at 92%... So yeah, about five minutes left maybe. I don't know what's going on.

**Mat Ryer:** Okay. Well, if you just disappear, we'll assume it's that. I just hope it doesn't happen after Johnny says something, and then you're just cut off, because he's definitely gonna take that personally.

**Daniel Martí:** Apologies. You asked about co-maintaining encoding/json, and yes, that is correct. I've been helping for about 3-4 years now... And JSON does have active maintainers. I believe they are Russ, Joe, and Brad. So I started helping mainly with just little bugs and little optimizations; but over time, these are all busy people, so it's gotten to a point that I do almost as much work as they do... And on one hand it's very rewarding work, because it's a very useful package, used by tons of people, but on the other hand it's kind of stressful.

**Mat Ryer:** Is it? Why?

**Daniel Martí:** Well, on one hand because nearly a hundred--

**Mat Ryer:** Aaand his memory has run out.

**Johnny Boursiquot:** There we go... \[laughs\]

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** Quite literally, yeah.

**Mat Ryer:** Linux.

**Break:** \[00:10:40.28\]

**Mat Ryer:** Daniel, what are the challenges? Why is it stressful maintaining the encoding/json package?

**Daniel Martí:** I think it's very rewarding, because the moment you fix any bug, suddenly there's tons of people that are happy about it... And clearly, there are tons of people that care deeply about how fast the JSON package goes. But on the flipside, because it has so many users, if you mess anything up, you're in big trouble, because people are gonna be very angry. And there's also something called the go1 compatibility guarantee, and that essentially says if your program works with Go 1.0, it should also work with Go 1.2 and Go 1.3 and so on.

**Mat Ryer:** Interesting. Does that include mistakes, if there was like a bug or something in that original JSON version? Does that still have to be supported?

**Daniel Martí:** That is a very good question. I think there's multiple ways to interpret that, because I think the most aggressive way to interpret it would be only the things that are documented to work will remain to work that way. So if you write some code that just happens to depend on some implementation detail, that is allowed to break at some point in the future... And that is generally how I read it. But the more conservative way to read it and understand it is "No. Pretty much anything you do, if it's reasonable, if and if it's not documented, it should keep working, because we don't want to break the users." And in between those two ends there's some middle ground that the team has to choose.

**Mat Ryer:** Wow, it's a fine line to walk, isn't it? But it's so important, that one promise, because that's really how we're able to rely on the fact that we can build systems, and we know that they're gonna keep working with future versions of Go. That turns out to be one of the big selling points for me of Go itself, so I really do appreciate the effort, because I know that isn't an easy thing to do.

I would have thought that the json package, after it was first written, it's kind of done, so it's sort of working. So what maintenance is there to do on it?

**Daniel Martí:** That is also a good question, and I think it kind of goes back to how flexible JSON is... Because JSON doesn't have a schema; it's just data in some structure. You can do lots of things with it, and people do do lots of weird things with it... So then they come to the encoding json package in the standard library, and they expect all those things to fit their workflow with this library... So they might want "Oh, decode some fields depending on what this field is", or they might say "I want to stream a really big object, even if it doesn't fit in memory", and all those sort of use cases that you might not think to use JSON with initially, but people do use JSON with.

So there's a constant stream of feature requests, but there's also a constant stream of optimizations and bug fixes caused by previous changes, if that makes sense.

**Mat Ryer:** Yeah, I see. So just sort of -- I suppose like any other bit of software... You can improve it, you can work on it, and as you do that, you create some other problems... But it's well-tested, isn't it? Tests are decent in the encoding/json package.

**Daniel Martí:** Yeah, for the most part I would agree. Yeah.

**Mat Ryer:** Yeah. Which is important. That's what allows you to act with confidence. You talk about you don't wanna break the backwards-compatibility promise... Unit tests are really the way to ensure that, aren't they?

**Daniel Martí:** Yes. Actually, checking that your package is well-tested is kind of an art, I would say, because you can obviously look at the code coverage from the Go tools, but that doesn't cover everything... Because you might be covering a line, but you might not be covering all the logic that's encoded within that line of code... Or you might not be hitting one of the edge cases that might panic, or something like that.

**Mat Ryer:** \[00:16:03.22\] Yeah. See, I always tell people not to shoot for 100% code coverage in their application code, just because you can kind of tightly-couple really your tests to your implementation. Is this an exception to that? Does it make sense in this package to have 100% code coverage?

**Daniel Martí:** I would say for the most part it does make sense to try to go as high as possible, because for the most part the package is just if-elses with logic. But there are also some places with panics of things that should never happen, or also things like -- I'm trying to think of another edge case... Well, there are certain edge cases that you say "This really should never happen, and it's gonna panic." So you could write tests that catch those and recover, and I guess you could say even that you should, but I don't think they do at the moment.

**Mat Ryer:** Interesting. Yeah, because there's some weirdness around -- it's quite unusual, actually, as an API, because you pass in a pointer... When you wanna unmarshal it, you pass in a pointer to the destination, essentially, where you want that JSON to be unmarshaled into. And there's some kind of interesting, tricky rules around what you can pass into that thing, aren't there?

**Daniel Martí:** Yup. So you can essentially pass a pointer to any valid data... So it can't be a pointer pointing to nil, to zero, because then it can't actually store any data there. So essentially, it just expects the pointer to a structure that I can actually store/decode the incoming JSON into. And there are various rules down there; for example, if you pass it an empty interface, it's gonna sort of make a guess as to what it should do. So if it sees a number, it's gonna assume float64. If it sees an object, it's gonna use a map. But if you give it for example a struct, with very specific field types, then it is gonna follow your lead; and if any of the types don't match, it's just gonna return an error.

**Johnny Boursiquot:** There's some intelligence that's built into the package as well, which I usually appreciate. Very recently I was doing a PR review, and we had a developer who was creating a struct and providing the JSON annotation next to the fields, but there was no inbound/incoming data to unmarshal into... So in that case, I'm like, well, unless you really anticipate that the data that you're pushing out, that basically the field names are gonna be different from what they are named in the struct itself, you don't really need to annotate your fields for your structs. The json package is gonna follow your lead, as you say, Daniel; it's gonna basically look at the name you've given your fields, and actually use those names in the JSON output. So you don't have to add that annotation there. So there's a lot of \[unintelligible 00:18:45.21\] that I can certain appreciate that's built into the package, and this is something that we're gonna get more into, as well...

I like the standard library, I like using the standard library, because - maybe it's the nature of my work, but I tend to not look for third-party packages to do certain things if I can find something in the standard library, even if it's a little harder to deal with, or a little less performant, or whatever the case may be. If you've been in the community for any length of time, you've probably come across other community-built/third-party packages that have made their own trade-offs with regards to the implentation for JSON parsing, and marshaling and unmarshaling, and all that stuff... And a lot of them seem to be focused around speed, and performance.

Again, Dave Cheney's own experimentation, which is published, and hopefully -- I wish he was here to discuss it, but there's that sort of... I'm curious to understand when is a good reason to deviate from, say, the standard library's approach. Everybody wants fast, right? "Oh, it's faster. I should use that." Well, there are trade-offs there, too. You don't pick it just because it's faster... But I'm curious your take as to why pick one over the other, what sort of trade-offs you're making along those lines.

**Daniel Martí:** \[00:20:08.19\] I think that topic is at the heart of this whole discussion, because it is to a lot of people one of the fastest JSON decoders out there, and some of them might not realize the trade-offs at play... And I have mixed opinions and feelings about all the third-party JSON implementations out there. I think some of them do make sense; for example, one use case is you do absolutely want the most performance you can get, because maybe this is a bottleneck for you, and you don't mind Go generating some code to then write/generate automatically a decoder for you for JSON. So you can use packages like easyjson for that, which is pretty popular... And the trade-off there is you have to run go generate, and your binary is gonna weigh quite a little bit more, because it has quite a lot of extra code. But that extra code - it just encodes all the logic directly in binary code, in machine code; so there's no reflect, there's no dereferences, there's no extra work involved. So I think that's clearly one of the cases where it might make sense for your use case.

**Mat Ryer:** I like how you framed that as well; you were saying "Maybe it's a bottleneck in your case..." And that's the thing - once you've seen that this is a place where an improvement is gonna make a difference for you, then it's worth taking on the extra pain, whether it's complexity, or learning a new API, or whatever it is. I like that approach, because -- well, I think it's what we should always be doing. As you alluded to, Johnny, we can get a bit obsessed with "Why wouldn't we want the fastest possible thing?" and the answer is "It might be good enough just using the standard library."

What are some of the packages, and how are they different?

**Daniel Martí:** Another package that I saw fairly recently, which is interesting - I forget what it's called; it was named after a company... But essentially, what they did was they tried to keep the same API as the standard library. So they said this is a drop-in replacement. But under the hood, they did something which was interesting, which is instead of using the Reflect package - and Reflect is one of the major contributors to why encoding/json is slow - they used unsafe directly. And the trade-off there is if you use unsafe, you can do a lot of magic, and it's very fast, but it's also unsafe. So I kind of have mixed feelings about telling people that it's a drop-in replacement, because that sort of just tells them "Oh, I just changed the import and suddenly it's twice as fast", but they're not realizing what a big security hole they've just opened...

**Mat Ryer:** Ooh. Right.

**Daniel Martí:** ...because it is true that Reflect itself does use unsafe underneath, but Reflect is very well scrutinized and reviewed, and it follows the Go rules for what fields you can set, and so on. If you use usafe directly, you just skip all of that and you're on your own.

**Mat Ryer:** And the standard library uses Reflect because, in a sense, it's dynamic, isn't it? It's dynamic data; you don't necessarily know, especially if you're unmarshaling into a map\[string\]interface{}, you don't know necessarily the structure of that JSON... And that, by the way, can be an extremely powerful thing, but can also be quite easy to abuse. Yeah, that is an interesting point you make, using unsafe in that way... I can see why they did that, but... Yeah, that's funny.

One use case that I've used JSON for before in quite a strange - or maybe not - way was just a command line tools which took in through standard input lines of JSON, and then their output were lines of JSON. And just to that, we had a series of different tools that we could chain together in different ways, just kind of passing around different JSON objects, each one on its own line... And the JSON -- when you create the marshaler, you create the decoder or the encoder, those types take an io reader, so that they can unmarshal an object; they break at the line feed, and then you can reuse it and keep unmarshaling objects in that way.

\[00:24:11.04\] So that as a design was perfect for this situation, because these tools basically didn't do anything until a line of JSON came in through standard in, they then process it, and then you get the line printed out. There's also directly using the marshal and unmarshal functions, too. What's the key difference between those?

**Daniel Martí:** I think most people would say that the difference is the streaming. So if you use marshal or unmarshal, you can look at the function types and you can see that they take and give a slice of byte... So it's pretty easy to tell that, you know, if you're unmarshaling a chunk of JSON, you have to have that chunk of JSON in memory. And if you look at the decoder, it takes a reader; you might then suspect that "Oh, this is gonna stream the JSON in, so I don't have to load it all into memory", but that's actually not the case. And I think it's one of my main \[unintelligible 00:24:55.19\] with the current API. I'm not gonna say it's wrong, but it's misleading, to a certain degree... Because what it will do is it will buffer an entire JSON value such as an object. And then once it's buffered the whole thing, then it's gonna decode it. There's a good reason for that, and the reason is because the encoding/json package essentially prefers correctness over everything else... And it has some semantics for -- when you decode into a value, it's gonna merge that decoded data into that value.

For example, if you decode into a map, and that map had the key foo, and then you decode \[unintelligible 00:25:32.03\] It doesn't just replace the previous map with a new map. And that is useful for some things.

But most people, they just decode into an empty value. They don't care about what was there before. So for most people, this is surprising, because they don't care about this property. And the way the encoding/json package implements this property is tokenizing all of the input, so if there's any syntax mistake in the input, or if it's invalid JSON, then it's not gonna decode anything, because it's gonna do a second pass, and in that second pass it is actually gonna write to the destination.

**Mat Ryer:** Yeah, that makes sense. I saw another JSON implementation which - essentially, it didn't unmarshal, it didn't try and turn the JSON into structured data, but you could use it to just find specific key paths. So you might say "Here's the JSON stream or the JSON string. I'm looking for author.firstname." So just by sort of skimming it really, not trying to understand and extract all the fields and figure out data types and all that, but just looking for that particular key path... And that's another approach; if in a particular case all you care about is a single field, that's a very fast way to get that field.

**Johnny Boursiquot:** I'm having \[unintelligible 00:26:55.11\] flashbacks. \[laughter\]

**Mat Ryer:** \[unintelligible 00:26:57.00\] Yeah.

**Daniel Martí:** Yeah, that's actually a very good point. I forgot about that extra use case... And I think that library is called - at least the most famous one - json-iterator, or jsoniter, or something like that... And I think it's useful for two use cases. One of them you mentioned, it's getting just one field, or one value; if the JSON is very big, you can save a lot of work by just skipping to that little bit. And I think the other one is "What if you don't know what the data looks like?" Because JSON, at least the encoding/json package, forces you to know upfront what all of the data is gonna look like. And you can use something called json.RawMessage to delay decoding chunks of the JSON... But that's kind of like just forcing you to do multiple decodes, to do it in multiple stages.

If you want to quickly look at this, and then if it's X, then do that, otherwise do something else - if you want to encode that logic into your code, using something like that package might be a little bit easier for you. But I would say that for most people, they do know what their JSON is gonna look like.

**Mat Ryer:** \[00:28:02.08\] Yeah. In my experience, it's better if you do know what the JSON is gonna look like. Don't be tempted by this idea that your app can just support any data structure, because that will come back to bite you, is my experience. What does that raw message actually do then? Is it just like a string type, or a slice of bytes, or something? What is it?

**Daniel Martí:** It is exactly a named slice of byte, and it implements unmarshaled JSON. All it does is it just takes the JSON and stores it. That's it. It's really powerful, because it essentially lets you do whatever you want.

I was gonna say, before we go on, I'm close to getting full, so I'm gonna stop the recording and start over... So give me two minutes, please.

**Mat Ryer:** Sounds good, sure. Take a break. Yeah, stop the world.

**Break:** \[00:28:50.20\]

**Daniel Martí:** So that's an interesting bug that I have with this program... It seems to just keep using more and more memory as long as I record, and then after I close it completely, after saving the file, and then just start anew...

**Mat Ryer:** Yeah, it is just as though it's putting that audio into the RAM, isn't it?

**Daniel Martí:** I guess so, but I don't have time to fix that right now, obviously...

**Mat Ryer:** Is the amount of RAM it uses the same as the file when you save it, same size?

**Daniel Martí:** I stored the wav, it was like 160 megs, but it used all of my 15 gigabytes of RAM, so I don't know what it's doing... I'm ranting again... Apologies.

**Johnny Boursiquot:** Yeah, so one question that we're picking up from the channel - this one coming from our very own Jon Calhoun - you mentioned the Go 1.0 compatibility promise, which I think we all Go developers who have anything in production really value... Vis a vis the JSON package in the standard library, are there things that you wish you could put in there right now, but that you're sort of prevented from doing that because of that compatibility promise, and perhaps maybe could find their way into a subsequent version of Go that is allowed to break that backwards compatibility?

**Daniel Martí:** Yup, that is a good question. I think there's two kinds of thing that I would fix. One of them are high-level API changes. We talked earlier about the readers and writers making it seem like it's streaming, but it's not actually streaming, it's buffering... But changing those would break practically every program using JSON, so it's not something that I would ever change in v1; it's just out of the question.

\[00:31:47.29\] The other kind is subtle bugs and historical problems that have kind of become the de facto behavior that everybody has ended up -- some people have ended up depending upon. And one example was there's a type called json.number, and json.number essentially lets you easily support big numbers, and it's just a string type. So when you use it to decode a number, such as a 50-digit number, it doesn't matter if that wouldn't fit in an int32 or an int64, because it's gonna keep the string exactly as is. So that would be the simplest way to implement big numbers.

And the way a JSON number is implemented, if the input JSON is actually a string containing the digits, it's gonna accept that, even though it's not a JSON number. That is not documented behavior. The documented behavior says it decodes a number; it doesn't say anything about strings. So I tried to fix that - or I think it was somebody else and then I reviewed, I can't remember - and then as you would expect, a bunch of people said "This broke my code!" And I showed "Look, with three lines of code you can fix it. It's really simple, and I'm getting them to you. Here's a Playground link." But they said "No, no, no, no. This is breaking production, this is breaking the guarantee."

**Mat Ryer:** Oh yeah, that does fall into that grey area, doesn't it? Because you shouldn't use it like that, but because it worked, then what do you do? It is a tough one.

**Daniel Martí:** It is difficult, because you have to gauge "Am I breaking too many users? What is too many users?" I don't know how people use the JSON package. I could maybe look at the open source out there and see what the code looks like with static analysis, but that would only scratch the surface. I would say the Go code out there that handles the most JSON is not open source, most likely... So it's very hard to tell if something could fly or not.

**Mat Ryer:** Yeah, so you have a version 2 draft of encoding/json, don't you?

**Daniel Martí:** Mm-hm.

**Mat Ryer:** What's that for? Is this just sort of your perfect design of this is what you would have if you could?

**Daniel Martí:** For the time being, this has just been a document for me to collect my own thoughts... Because I think co-maintaining JSON for a few years - I've been collecting these little nuggets of stress, such as "I can't fix this", and if I try to fix that, people are gonna get upset. And I can't touch this because it's restricted by the API... So I've collected all of my thoughts - or at least the ones I can remember - and I haven't gotten to the point where I've designed a new API, because to a certain level that feels futile at this point... Because if I design a new JSON API, it's not gonna replace the existing API. And as far as I know, there's no current plan to do a version two of standard library packages. I could potentially write something externally, but in a way, I don't want to add to all the complexity that is 50 packages that do JSON in Go.

**Mat Ryer:** Hm... I wonder what a sensible approach would be, whether you could just add some new methods to the JSON package...

**Daniel Martí:** Yeah, that is a good point. There are some bugs... For example, there's one that I would say affects most codebases out there, which is the standard -- you have an HTTP endpoint and the body is JSON, so you want to decode it... So what you do is you take the r.body and you do json.newdecoder.decode with the body, and then into some structure. And if you do that, it's buggy.

**Mat Ryer:** I've just got to Go... What do you mean it's buggy?! \[laughter\] Tell me why, please.

**Daniel Martí:** So this was found by Joe, one of the maintainers, about a year ago... And the bug is the decoder is meant to be useful for streams of JSON values. And that is for example when you do go test with a JSON flag, it's gonna give you a new line separated stream of JSON values, of JSON objects.

**Mat Ryer:** Yeah, that's kind of how I was using it in those tools I was talking about.

**Daniel Martí:** Yup, exactly.

**Mat Ryer:** In a way, it is kind of streaming, in a way... It takes the reader. For each object it buffers it, I guess, but it discards that previous object, doesn't it?

**Daniel Martí:** \[00:36:06.14\] Yup.

**Mat Ryer:** ...the next time. Right. So in a sense, it's streaming.

**Johnny Boursiquot:** It appears to you as if it's streaming, but internally that's not what it's doing.

**Mat Ryer:** But it's still doing it only one object at a time, which you could say is a stream; it's just if it's a great, big, fat object, then--

**Daniel Martí:** Exactly.

**Johnny Boursiquot:** You're in trouble.

**Mat Ryer:** You may be.

**Daniel Martí:** So I would say, just assume that your values are gonna be small; so it doesn't imagine that you would ever have a JSON object weighing 200 MB. And if you do that, it just goes like "Whoops! I'm just gonna buffer that."

**Mat Ryer:** Mm-hm. You couldn't do that on your machine today, for example. You don't have the RAM.

**Johnny Boursiquot:** \[laughs\]

**Daniel Martí:** If you want me to leave, you can just say that. \[laughter\]

**Mat Ryer:** Please don't. You'll have to in about eight minutes anyway.

**Daniel Martí:** I'm currently at 30%. I've still got like 7-8 minutes.

**Mat Ryer:** I wonder if it's based on how much you say, as well. Surely, when you talk, it must use more RAM... \[laughter\]

**Daniel Martí:** Okay, let me yell into the microphone and then just watch the RAM go up.

**Mat Ryer:** Yeah, I don't how it structures it... I know what it's doing - it's storing it in JSON, isn't it?

**Daniel Martí:** Maybe, yeah... Maybe every wave is a JSON object being streamed somewhere.

**Mat Ryer:** Exactly. It's not perfect JSON for every type of data, is it? Sometimes binary data is better.

**Johnny Boursiquot:** Which actually leads us to a good segue here, because yes, JSON is awesome, it's human-readable... But most of the time we have machines talking to each other. So are there cases where, for efficiency of transport and storage perhaps, it just makes more sense to just pick a binary format instead of the text-based JSON passing back and forth? ...especially if it's a stream of data, or if you're ingesting a ton of information... Unless you're debugging really as a developer, perhaps locally, there's no way you're gonna be wading through vast amounts of JSON, trying to read that and take advantage of the human-readability aspect of it. So when should you give yourself a pass, and not necessarily use JSON for the sake of using JSON, because everybody else is using JSON? What is a good set of criteria for making the decision against using JSON?

**Daniel Martí:** That's a good question. Before I answer that, I just want to briefly mention what the bug was in the previous point, because \[unintelligible 00:38:22.09\]

**Johnny Boursiquot:** Yeah, we didn't guess that.

**Mat Ryer:** Sorry, that's my fault of being stupid. Don't worry, it's just more work for the editors. Clap! Okay... \[laughter\] You just clap and it fixes it.

**Promo:** "Has this ever happened to you? Presenting - the clapper. Clap on to music! It's easy... Clap on, clap off...! The clapper."

**Mat Ryer:** So Daniel, tell us what's that bug with r.body, and reading it through the decoder?

**Daniel Martí:** So the bug is that you're only decoding one object, but what if the body contained multiple values, in multiple separate binding lines, or something? You're not gonna notice, you're just gonna close the \[unintelligible 00:39:00.18\] straight after. So if the client -- even if you don't support that, if the client was trying to send you three objects separated by new lines, you're gonna use the first one and ignore the other two, which is most likely not what you want to do. You would either want to error, or use all the data.

**Mat Ryer:** Yeah, that's quite interesting. If you reach the end of the stream, what happens when you try and decode using the decoder?

**Daniel Martí:** Well, I imagine it's gonna wrap EOF and give you that error, or something like that...

**Mat Ryer:** Yeah, you'd get EOF... Huh. So you could support it by having a loop, and just keep looping and keep decoding, but again -- I don't know, it's quite strange, I think... When you think about an array in JSON, an array can be - well, it is, often - many objects inside an array. That could be the payload, and that would actually still work, wouldn't it? It wouldn't hit that bug. It's just for if you're using new line-separate JSON objects.

**Daniel Martí:** \[00:39:59.02\] Yeah. And in that case, you can fix the code pretty easily. You can just add a check at the end that says "If the decoder has more tokens to be decoded, then give some error." You can do that. But the thing is that, obviously, people have to remember to do that. And to begin with, nobody knew to do that... So I would say it's a complicated API design, because it's very easy to misuse.

**Mat Ryer:** Yeah, but to be honest, mate, I don't know of any API where you send multiple lines of JSON like that. I could be wrong, but I don't think I've seen that.

**Daniel Martí:** Yeah. If an API was like that, you would probably implement it properly. And I agree, this is probably not a problem in real life, but it's still an edge case that exists, and very few people have thought about, and is technically a bug.

**Mat Ryer:** Yeah. This is what I love about people that maintain these packages for us... It is really hard, and you have to care about everything... But that's nice, because it means the rest of us don't have to.

**Daniel Martí:** And going to Johnny's question, he was asking about "When do you choose between JSON or something that's plain text, some format that's plain text, versus something that's binary?" And I think there are multiple schools of thought there, but I think the consensus between most programmers is that if it's something that a human is gonna deal with, such as a human is gonna debug it or a human is gonna look at it, or a human is gonna use it or write it, you most likely want it to be plain text, if you can afford it; something like JSON or YAML, and so on. But if it's something that has to be efficient, maybe because you have tons of it, or maybe because it's only machines talking to each other, then it might be of interest to you to consider a binary format that's more efficient, that uses less space, and so on.

**Mat Ryer:** Yeah, and I think that argument also applies to the whole debate around gRPC versus JSON APIs... It's kind of the same thing, you know? There might be good reasons why you need this really low-level binary; you want it when it's most efficient it possibly can be. But yeah, you hurt developer-friendliness, for sure. It's nice when you're building it, but even using it, if you wanna explore what's happening. You can sometimes poke around in the browser inside the little network tab and see the HTTP requests and have a look at the JSON bodies... And I find that to be very useful, particularly if I'm developing... So yeah, which of course I think you'd need extra tooling in order to do that, if you were gonna use some kind of gRPC thing, I think...

**Daniel Martí:** I definitely agree. I would say by default use plain text, and only carefully consider a binary. Or even better, support both. Many people that build gRPC services - they add something on top, like a REST gateway, and then the client can choose which one to use. Maybe they use gRPC for a machine, but maybe a human that's debugging is gonna use REST with JSON.

**Mat Ryer:** Yeah, absolutely. I think that's a sound approach. But I would agree, start with the JSON one, because in the beginning that's the most easy to work with. And maybe it's all you're ever going to need.

**Johnny Boursiquot:** Are you saying it's a YAGNI situation?

**Mat Ryer:** YAGNI...!

**Daniel Martí:** What is YAGNI?

**Johnny Boursiquot:** Oh, you haven't been indoctrinated into the Ruby ecosystem. YAGNI is something that was popularized by a very popular framework author in the Ruby ecosystem. YAGNI stands for You Ain't Gonna Need It. \[laughs\]

**Daniel Martí:** I'm copying that.

**Mat Ryer:** It's good, isn't it?

**Johnny Boursiquot:** Yes, indeed.

**Mat Ryer:** We do need that.

**Johnny Boursiquot:** I still pull that out every once in a while.

**Daniel Martí:** But I do think there's one point that we might have missed here, which is defining your data model... And I think that's probably the place where JSON falls short the most, and where it bites people the most. And that's where things like JSON Schema come in... But I wouldn't say they're very good solutions. They mostly try to port the XML solutions from 20 years ago to JSON. I don't think they're a very good approach. I think a proper schema language like protobuff and gRPC are better... So you have to choose the trade-off between "Do I use something simple like JSON and then just get going, or do I choose a schema language that's gonna let me define my types properly, and so on?"

**Mat Ryer:** \[00:44:11.01\] Yeah, and that's probably use case-driven as well, isn't it? In some situations, if you are working with generic data and you don't know the shape of that data... And that does happen sometimes. I've worked on projects for sure where it's a kind of platform and you don't know what the data is ahead of time... Then that does kind of lead you one way or the other.

The nice thing about JSON though is that you can always add fields to it, can't you? You can always add fields, and previous code will just continue to work... Because in a struct in Go, if there's a field missing in the struct but it's present in the JSON by default, it just gets ignored, doesn't it?

**Daniel Martí:** Yup, that's a really good point. JSON does allow backwards-compatibility pretty easily, if you are okay with maintaining the previous fields, and so on. And I think most formats are like that. For example protobuff, if you just add things at the end with new IDs, that's also fine, but it is less intuitive. It is a little bit of extra complexity to think about that, I agree.

**Johnny Boursiquot:** But it keeps my old stuff working, so... I don't know. It's a trade-off I'm willing to make.

**Mat Ryer:** And are there other kinds of efficiencies to be had in the current implementation then? Would it be possible to make changes and, say, reduce allocations in the process of decoding JSON?

**Daniel Martí:** Yup, and that is kind of where most of my work has gone... Because like I said before, I didn't want to just write a new package and just add to the fire that is making new Go developers choose between 20 packages. So I did do some changes to the internals, such as doing work twice, or cache some stuff, or remove a balance check here and there, and stuff like that... And I think it was between Go 1.10 and Go 1.13 that the decoder - if you mostly use structs, so no maps, it got about 30% to 50% faster, which was pretty nice...

**Mat Ryer:** Wow...

**Daniel Martí:** But you have to understand that the base point there was pretty low...

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** You don't have to say that... Just focus on the improvement. \[laughter\]

**Johnny Boursiquot:** Yeah, exactly.

**Mat Ryer:** 30% faster!

**Daniel Martí:** But I will also say that the packages that claim to be ten times faster than encoding/json - they probably ran their benchmarks a long time ago, and that is probably more like four times faster by now.

**Mat Ryer:** Interesting... Huh.

**Daniel Martí:** I definitely think that there's more work to be done, but all the low-hanging fruit has been picked, mostly by me and some others... But there are some things that can still be done without changing the API or breaking the users, and I think the biggest one - and that ties into the work that Dave has been doing - is essentially rewriting the tokenizer. So what takes in the bytes and says "Oh, this is a string, and then this is an open brace, and then this is a comma", and so on.

**Mat Ryer:** Yeah. So that process then - does it build the data structures as it goes when it's parsing, or does it describe somehow that structure in some other intermediate data structure, if that makes sense?

**Daniel Martí:** So one way to go about it would be indeed to build some sort of tree, such as when you parse a Go file and you get a syntax tree of the Go code...

**Mat Ryer:** Yeah.

**Daniel Martí:** It doesn't do that. What it does is it tokenizes a value (for example a JSON object ) once; it starts going through the bytes, and goes "token, token, token", but it forgets them, because there's the first pass. It just wants to check if the JSON is valid. And once it reaches the end, for example the closing brace for the initial brace, then it goes all the way back to the beginning of the buffer, and then it tokenizes again... But this time when it encounters for example "open object", then it actually goes and starts an object in the destination value. And if it sees a string, then it tries to decode that into whatever the current destination is, and so on.

**Mat Ryer:** \[00:48:12.03\] That's interesting. I'm surprised it does that... Because you'd think it would just do it once, wouldn't you? Why does it do it like that?

**Daniel Martí:** The reason it does it twice is to prevent partial decodes. So if I give you, for example, an array of 9,000 elements, and there's no closing token, that isn't valid JSON. So what are you gonna do? Are you gonna spend all the time to decode all those 9,000 elements into your destination, and probably mess with your destination data if you had anything there before? Which for an array it doesn't make sense, but imagine a map, for example...

**Mat Ryer:** Yeah.

**Daniel Martí:** So you don't want to do that, at least not in the JSON package. It values correctness, so it says "Now, I'm first gonna make sure that the JSON is valid, and only after I'm going to decode."

**Mat Ryer:** Oh, very interesting. Huh.

**Daniel Martí:** And I think you could say it should keep a tree instead of keeping the bytes; that might be a little bit more efficient in terms of not redoing work, but I would say you probably are gonna end up costing more in terms of allocating objects, and so on.

**Mat Ryer:** I mean, I'd just go through it once; don't worry about correctness, and - yes, do all the work, and then if at the end it's wrong, then you get the error. But you have to wait for it, maybe. I feel like that's more of an optimistic thing. Do you think that would be a bad design?

**Daniel Martí:** I'm not sure. I'm about 50/50. I think both use cases are valid. I think the current API tries to be as simple as possible. It essentially only has one entered point, which is decoder.decode, and unmarshal is just a wrapper for it... Because if you look at unmarshal, it just does the thing for you underneath.

**Mat Ryer:** Oh, it's not the other way around? I thought the decoder would use--

**Johnny Boursiquot:** You thought decoder used marshal?

**Mat Ryer:** Yeah, or unmarshal.

**Daniel Martí:** So the nice thing about the decoder is that it keeps stuff to be reused later. If it was the decoder using marshal, then marshal doesn't have the decoder object to then reuse all that stuff.

**Mat Ryer:** Right. Yeah, I see. Huh... Okay, very cool. Very cool. And of course, this is all open source, so if we wanna really see how this works, we can go and read the code.

**Daniel Martí:** Yeah, but I would say probably don't look at that code and that API and assume that it's idiomatic Go, because a lot of this was written over a decade ago. And my dirty fingers have been on it, as well as many other people's fingers. So it's kind of like a zombie at this point.

**Johnny Boursiquot:** That's actually a very good point you raise, because a lot of times, many of us in the Go community who have been around for a while basically tell new folks, "Hey, just go read the standard library. That's an excellent example of how to write Go code", but that is not always true. \[laughs\] We've learned a lot since then, some do's and don'ts and some best practices, and as we say, some idiomatic ways of doing things... And yeah, the encoding/json package is perhaps not the best representation of how far we've come.

**Mat Ryer:** Yeah, the other thing is it contains lots of optimizations, and it should... And that can come at a cost of code complexity and kind of ugliness... But you don't mind it, because it's such an important place to have that. But yes, a junior developer could go and look and see some things in there and think "Well, this is how you do this", and probably you wouldn't want to do it like that.

**Daniel Martí:** I completely agree.

**Johnny Boursiquot:** We definitely should not run out of time to squeeze in some unpopular opinions...

**Jingle:** \[00:51:34.21\] to \[00:51:52.21\]

**Daniel Martí:** So my unpopular opinion is that encoding/json is fast enough...

**Johnny Boursiquot:** \[laughs\] Oh, come on...!

**Mat Ryer:** Wow! This is the guy responsible for making it faster... \[laughter\]

**Daniel Martí:** Well, I'm going to say generally, where generally means it most likely applies to you... But it might not apply to the 1% that's doing something completely esoteric, such as handling 20 gigabytes of JSON... But most people don't do that. And my point goes back to the trade-offs. Yes, if you pick another package, you can get maybe a 2x, 3x, maybe even 4x improvement, but is it really worth sticking with JSON at that point? The overlap between the people that are stuck with JSON because they are, and the people that have to deal with a lot of data is very small... Because the people that have to deal with a lot of data - they generally pick better formats, that are faster to decode.

**Mat Ryer:** I think that is a pretty solid argument, actually... Yeah, that's not unpopular with me, that one. I think you've nailed that.

**Daniel Martí:** Well, you would think that the amount of people yelling about enconding/json being too slow would disagree...

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Sure. Well, that's because we gave them the tools to benchmark things. I don't know what you expect. Of course \[00:53:03.07\]

**Daniel Martí:** I take them back. \[laughter\]

**Mat Ryer:** Well, Daniel, thank you so much for coming on the show and spending some time with us. It's been great. You must come back at some point.

**Daniel Martí:** It was a pleasure.

**Mat Ryer:** Yeah, thank you very much. Thanks everyone for listening, and we'll see you next time.

**Outro:** \[00:53:32.24\]

**Daniel Martí:** By the way, I've found what the bug was.

**Mat Ryer:** Oh, you did?

**Daniel Martí:** Yeah. So if I look at my recording program, it keeps using more memory... But if I switch to a different window, it doesn't.

**Mat Ryer:** It's like a quantum.

**Daniel Martí:** It stops climbing. So I think it's the UI. The UI keeps showing the wavelength of my voice, but it's probably keeping the entire UI in memory... And then if I look away, it stops rendering it, and then it stops using more memory.

**Mat Ryer:** So it does it when you're looking at it. Don't look at it!

**Daniel Martí:** I'm looking at it now, and it's climbing to 31, 32... And then I stop looking at it and it stops.

**Mat Ryer:** \[unintelligible 00:55:46.12\] Schrödinger's cat files.

**Johnny Boursiquot:** \[laughs\] Oh, man...

**Mat Ryer:** It is. It's like, once \[unintelligible 00:56:01.29\] it changes its behavior. Oh, that's so weird... You'd never think to check that, would you? That's such a classic computer bug. That is exactly what happens...!

**Daniel Martí:** Obviously, when I did the five-second recording it wasn't enough time to notice that the memory \[unintelligible 00:56:16.18\]

**Mat Ryer:** So literally, if you minimize the window or have it on a different screen on something when it's not doing it - does the RAM jump back to where it was?

**Daniel Martí:** No, it just stays. So in this second section it climbed all the way up to 30%, so I just minimized the window and then it just stayed there.

**Mat Ryer:** Right. And you just thought "I just don't wanna stress about this. I don't wanna look at it", and then it worked... And you've found it.

**Daniel Martí:** If you saw me looking up, this was me checking the memory usage and praying that it wasn't about to crash... \[laughter\] But again, I apologize for that.

**Mat Ryer:** Well, you've found it.

**Johnny Boursiquot:** Excellent.

**Mat Ryer:** Daniel, you must come back and debug more of our tech gremlins, please...

**Daniel Martí:** Oh, my God... Oh, my God... No, please. This was very stressful. \[laughter\]
