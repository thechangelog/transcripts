**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and today we're talking about how to make mistakes in Go. "Why would you want to make mistakes?!" Well, I'm glad you asked. "Tell us then!" I will, if you don't interrupt -- "Well, get on with it!" Right. So we all make mistakes, and they can be a great way to learn. So that's why we're doing this episode. We're gonna hear about some common mistakes that are made. Or if you're a brilliant programmer and you wanna make more mistakes, so that you fit in better, this is the episode for you.

We're joined by the author of Manning Books' "100 Go mistakes - how to avoid them", Teiva. Hello, Teiva. Welcome!

**Teiva Harsanyi:** Hello, guys. Thanks a lot for inviting me. I'm a big fan of the podcast.

**Mat Ryer:** Oh, then you can stay... We're also joined by regular co-host, Johnny Boursiquot, isn't it? Hello, Johnny.

**Johnny Boursiquot:** Yes it is, isn't it? Hello. \[laughter\]

**Mat Ryer:** Hello...

**Mark Bates:** Wow, this whole show is turning into a mistake... Can we start over? \[laughter\]

**Mat Ryer:** No, we can't. It's live. It's recorded live. That other voice you heard - and this may be my mistake, but we've invited Mark Bates back. Hello, Mark. Welcome.

**Mark Bates:** Hello. I don't think you can talk about making mistakes in Go without me being president... President or present? Either one...

**Mat Ryer:** \[unintelligible 00:03:47.17\]

**Mark Bates:** Maybe both. I'm really good at it.

**Mat Ryer:** Yeah, exactly. And... And that's it.

**Mark Bates:** Really, really good at it. As a matter of fact, 99 of Teiva's examples are from my repos... \[laughter\] Which is kind of nice. I feel very proud about that.

**Johnny Boursiquot:** So much material...

**Mat Ryer:** \[04:04\] Great. Well, let's dig in. Teiva, maybe you could just kind of tell us about yourself first. You're an engineer at Beat, right?

**Teiva Harsanyi:** Yeah, indeed. Software engineer in a company called Beat. You can visit it on thebeat.co. We are in the ride-hailing domain, and by the way - just a small part at the beginning - we are recruiting people, and we are doing a lot of Go, a lot of cool stuff, so if you want to take a look at it, please do.

**Mat Ryer:** Brilliant. Feel free to, if you wanna plug something, use the platform to plug something. Feel free. You don't have to ask in advance, no problem.

**Johnny Boursiquot:** Bitbar. \[laughter\]

**Mat Ryer:** \[unintelligible 00:04:42.14\] Johnny, come on... I wanna also do a quick shout-out to Lagos Gophers, which is a Go community in Nigeria. We're doing a regular segment, Shout-At's, where we shout at... Because that's what Johnny said last week.

**Mark Bates:** Do we just yell at them, is that what we do?

**Mat Ryer:** Yeah.

**Mark Bates:** That seems awfully rude.

**Mat Ryer:** "Hey, Lagos! Nice one!" So if you're in the area, in Nigeria, then you know, head over to it. Okay, great. Right. So - mistakes... Let's see. Teiva, I asked you to pick some of your favorite mistakes that we could then talk about... So maybe you could pick -- we can go through the first one. Tell us what was the first mistake you picked.

**Teiva Harsanyi:** The first one I picked was related to nil receivers, because I believe it's a very common one. Many of us have already experienced it, and if you don't, at least I hope that it will prevent you from doing it. It's a mistake that I have already seen on a project I was working on, and basically it was something related to returning a nil receiver.

So let's take here as an example - I have a concrete example, where we can say "I am going to implement a validate function, for example, that validates an HTTP request", or something like this. And we don't want to return only the first error we met. We would for it to both convey that the validation error -- like, convey multiple errors.

So there are different schools of thought here, and one of them being for example to either return a slice of errors, or just return a custom error type. And here we will take the example of returning a custom error type.

We can create for example a custom struct called MultiError, let's say, that can contain some different fields and everything, and more importantly, at some point it contains a slice of errors that we want to kind of mutate throughout the errors.

So we take this multi-error struct, we make it implementing the error interface, and it's a pointer receiver, because the slice needs to be mutated. So in our validate function, what one guy could do in that case is to say "First I'm going to create a variable called 'result'. It's going to be a pointer to multi-error, so I write var result *MultiError and by default, result is going to be assigned to nil, as the zero value of the pointer is nil.

So let's say that we implement the wall function, we do the sanity checks, and if there's an error, we mutate results to append a new error. And eventually, at the end of the function we say "I am going to return the result variable." So in the end, result can be either nil if we face no errors, or it can be a pointer referencing a multiError \[unintelligible 00:07:48.26\]

\[07:52\] So let's now say that we implement the consumer side, we called our validation function and we check whether the error is nil or not. And here - surprise, the error is never nil, actually. Even when we faced no errors, the error itself that we return is never nil. So what happened in that case? We have said that eventually we were returning the result variable. So if there is no error, actually what we are going to return is a nil receiver, not a nil value directly. And as the return type was an interface, because we returned an error interface, we didn't return a nil value here; we returned an interface implemented by a nil receiver... Which is actually different from nil, and that's why the check by the consumer is never nil. It's because in Go a nil receiver is allowed, which might sound a bit odd at first, but it's actually allowed. And the reason is because a method in Go - it's just some kind of syntactic sugar, just like if the receiver was actually the first argument of a function. And it's actually allowed to pass nil arguments for pointers, right?

So a nil receiver is completely allowed. And if we want to fix it in that very case, instead of possibly returning a nil receiver, we should return a nil value directly. So eventually, in the end, we could do "if result == nil { return nil }" instead of returning result. And it's actually the same on the consumer side, on the other side - if a function accepts an interface, and we pass to it a nil receiver, not a nil value, the variable assigned to this interface won't be nil.

So just as a small conclusion here, when a function accepts a returning interface, and that we pass our return a nil receiver, the variable assigned to this interface will never be nil. And in general, actually, having a nil receiver is probably something we never want in Go, and it means a probably bug, so it should be avoided.

**Mat Ryer:** Yes, so that's such an interesting one... How common is this? Because -- first of all, if that happened to you, you'd be very surprised, I think, by that. Johnny, have you ever run into this issue?

**Johnny Boursiquot:** Perhaps it's in my general approach - I tend not to have custom error types that basically themselves contain multiple errors, kind of like the example Teiva has illustrated. I tend to prefer a slice of errors over a custom type containing multiple errors. So I haven't run across this particular issue as laid out, but I can absolutely see myself easily stepping on that landmine as he explained it, because it would be a natural thing. I wouldn't be thinking "Oh, a nil value that's supposed to point to another type that just happens to be nil." So I'm not sort of slicing it that thinly, I guess.

**Mat Ryer:** Yeah... I've written code that allowed for methods to be called on the nil version of something, and it was just the kind of -- usually it's a no-op, or some default behavior... But is that too magic, do you think, these days for Go, Mark?

**Mark Bates:** Yeah, I think so. I think that's definitely way too magic. I agree with Johnny. I'm well aware of this problem; we talk about it when we're teaching at Gopher Guides. But it's not something like -- Johnny, I think the way I write my code, I've never hit this particular area, and I almost never use custom error types. When I do, I use a slice of errors, like Johnny kind of talked about... I don't know, I kind of write my code so that I never hit that.

Francesc did a really good -- I think it was a GopherCon talk, about when nil is a nil, on this very same subject... So it does come up. And it's a really good talk, obviously. It does happen all the time to people, and it's a super-easy, very easy way to find a bug in your code that will take you three, four hours easy to track down.

**Johnny Boursiquot:** I'm curious, what is the antidote? What is the advice that you present in your book, Teiva? Is it to avoid these kinds of situations, or is there a pattern, an approach where you can still use that custom type --

**Mark Bates:** \[12:17\] ...return an explicit nil?

**Johnny Boursiquot:** \[laughs\] That's one way, yeah.

**Teiva Harsanyi:** Well, in that specific case, of course, the solution would be to return nil instead of a pointer receiver... But in general -- okay, we discussed about returning an error and saying "Okay, perhaps I'm not going to create a custom error type here", but we may still have the case where we return an interface. I mean, in general -- okay, in Go we tend to say we shouldn't return an interface, right? We tend to take rather the approach to say "I'm going to accept abstractions, so accept interfaces, and rather return concrete types." Kind of be liberal with what we accept, and we don't want to force our function to force abstractions, right? But I believe that it's not a hard rule, because sometimes even you can see from the standard library directly some functions returning directly an io.reader or io.writer directly, instead of the type itself, of a struct.

So I believe that we may still face the case where we have at some point to return an interface, and in that case we still have to bear in mind that nil isn't exactly the same thing as a nil receiver. So it's still something I believe that we can face.

**Mat Ryer:** Yeah. And why do you think this happened? Is this just something that emerged? Do you think this was a known thing when they were designing the language?

**Teiva Harsanyi:** Well, I believe it happened, again, because it's in method \[unintelligible 00:13:45.17\] just some syntactic sugar, as I said... But I don't have more insights on this one.

**Mark Bates:** Yeah, I don't it was a concrete decision to have it do that, it was just more a matter of it fell out of the type system that way.

**Johnny Boursiquot:** Consequence, yeah.

**Mark Bates:** From my understanding of the issue it was just that. It was something they obviously would have loved to have avoided, because it is a bug, obviously, that hits people, and a weird bug, but it was just more -- it felt out of the type system and it wasn't necessarily designed to...

**Mat Ryer:** \[14:25\] Yeah. I never thought I'd say this, Mark, but you should be a little bit louder. Move a little closer to the mic, please...

**Mark Bates:** I should be a little louder... I don't know why you don't think I'm loud.

**Mat Ryer:** Well, that's just what I'm hearing...

**Mark Bates:** Well, maybe turn yourself up, did you ever think of that?

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** I don't think that solves the problem, I think that makes it worse, but that's fine...

**Johnny Boursiquot:** Here we go, here we go...

**Mark Bates:** I've got a common mistake in Go, working with Mat Ryer. \[laughter\]

**Mat Ryer:** And that's from the president--

**Mark Bates:** I was gonna save that for the unpopular opinions, but I think it's a popular one, so... \[laughter\] So far only David Hernandez seems to be able to stick around and hang in there...

**Johnny Boursiquot:** Multiple times, too.

**Mat Ryer:** Don't use his name in vein.

**Mark Bates:** Multiple times! I don't. I love David. He deserves all that he gets from putting up with you.

**Mat Ryer:** I love it. I've never had a banter happening and insults concurrently, from both Johnny and Mark at the same time. \[laughter\]

**Mark Bates:** We try, we try...

**Mat Ryer:** Speaking of concurrency, here's another one... Teiva, you talk about concurrency like -- we feel like Go is a bit famous for concurrency, it's got some great primitives that makes that so much easier to do than previous languages... Should you always strive to use that, to make things concurrent, do you think?

**Teiva Harsanyi:** That's a nice transition... Thanks for that. \[laughs\]

**Mat Ryer:** I've been professional.

**Mark Bates:** I don't think I understand the question.

**Mat Ryer:** Is concurrency always faster?

**Teiva Harsanyi:** Yeah.

**Mark Bates:** That's the question?

**Mat Ryer:** That's the question.

**Mark Bates:** No. Next question. \[laughter\]

**Mat Ryer:** This is not a quiz show, Bates...

**Mark Bates:** Okay, fine... Continue on with your line of questioning. I mean, it was a yes or no question. Is it faster? No, it's not always faster.

**Mat Ryer:** Is it a common mistake that people make, that people think concurrency is always faster, Teiva?

**Mark Bates:** Did you just call--

**Mat Ryer:** \[16:12\] Teiva, you have to speak before Bates gets in, otherwise \[unintelligible 00:16:13.04\]

**Johnny Boursiquot:** I keep seeing the setup, and I'm like "Teiva, jump in! Jump in! Jump in!"

**Mark Bates:** Why am I even on the show...?! \[laughter\]

**Teiva Harsanyi:** Okay, cool. Yes, so I believe definitely it's the case... I believe that a common misconception from junior or even mid-level developers is to believe that a concurrent solution should always be faster than a sequential one... Because if we implement a concurrent solution that leverages multiple CPU cores, it should obviously be faster than a sequential implementation, right?

**Mat Ryer:** Yeah.

**Teiva Harsanyi:** That's a false affirmation... \[laughter\]

**Johnny Boursiquot:** Wrong...

**Teiva Harsanyi:** \[laughs\] Now, I believe actually that it's even more of a belief in Go thanks to goroutines, as you have said, Mat... Because goroutines compared to threads are great, they are more lightweight, they are faster to spin up, they are faster to contexts-switch, and so on... So there shouldn't be any real reason for a concurrent application to be slower than a sequential application.

I took here a concrete example, actually... I took as an example the merge sort algorithm. And just as a quick reminder about what the merge sort algorithm is - if we take for example the recursive implementation, we basically get a list of elements as an input, and we will break down repeatedly each sub-list into sub-lists, into two halves. We are going to do it repeatedly. And once we reach sub-lists of a single element, we go up again and we merge the two sub-lists in a sorting manner.

A quick example, if we have 2 and 1, for example, we are going to split it into two halves, two on one side, one on the other side, and as each sub-list contains a single element, meaning it's already sorted, then we are going to merge it in a sorting manner, so we will have one and two.

So in a nutshell, the merge sort algorithm - we just get a slice as an input, we check the length of the slice, if it's bigger than one, we compute the middle, we apply merge sort on the first half, merge sort on the second half, and then we merge.

So the structure, for example, for this algorithm seems like a perfect fit for concurrency, because we could say every time I can handle each half into a specific goroutine. So the first half in one goroutine, the second in another goroutine, and say I will introduce some sort of synchronization at some point to wait for both goroutines.

So if we implement this parallel version of the algorithm, I run it on my local computer with a certain number of elements, and actually this parallel version is about ten times slower than the sequential version. And despite the fact that the parallel version leverages multiple cores, right? So it's more than ten times slower. And what is the reason for that, if we think a bit about it? As we said, the algorithm is about to repeatedly split lists into two sub-lists; so at some point we will have 1,024 elements, then 512, then 256 and so on, until we reach 8, 4, 2 and 1 elements.

Now let's try to imagine, in your opinion, what's the fastest between spinning up two goroutines that will both merge two elements and wait for them, or in the current goroutine merge two elements and then merge two other elements? And of course, it's gonna be the latter here, right? Because it's gonna be faster to do it in the current goroutine.

\[20:10\] And if we think about it actually, in the merge sort algorithm, the deeper we go, the less efficient it will be to spin up a goroutine. And sure, goroutines are fast, but spinning up a new goroutine - it has a cost, because we have to wait for its creation, we have to wait for the internal Go scheduler to execute it, we have also the fact that concurrency introduces some form of synchronization because of mutex, or channels, or whatever... So everything has a cost, right?

Here one possible solution for this algorithm - the goal is not, of course, to design the most optimal solution for the merge sort algorithm, but discuss about a potential solution. It could be to say I will define a threshold, and I will apply the parallel algorithm that we've just described, but if the number of elements is below a certain threshold, it's simply not worth spinning up new goroutines. So instead, I am going to execute sequentially. And this threshold may depend on the machine, and everything. On my side it was about 2048 elements. And if I run this new hybrid version, let's say, of the parallel algorithm, it's about 40% faster this time compared to the sequential implementation.

And one very last thing to say - I have done the same test in Java actually, where we don't have the principle of goroutines (we just have threads here) and the threshold actually was higher. It was around four times bigger, if I recall correctly, compared to goroutines. So it's kind of interesting, because somehow it shows that goroutines are actually somehow more efficient than threads for concurrent workloads, because they are for example faster to spin up... But as we illustrated with the merge sort algorithm, it's not magic nonetheless; concurrency isn't always faster.

**Break**: \[22:19\]

**Mat Ryer:** So a couple of things there... One is when you're sharing data, when you're working on the same data, you have to be safe concurrently, so you have to then log usually, and things are gonna be waiting. So that's always something to consider. And then I guess, Johnny, you benchmark things, don't you? That's how you find out these little \[unintelligible 00:24:36.23\]

**Johnny Boursiquot:** Yeah, exactly. That was gonna be my -- again, in the same spirit of my previous question, like "How do you find out what the right threshold is?" Other than maybe benchmarking, doing some profiling work and figuring out "Okay, where is the diminishing return? Where is that point?"

**Mat Ryer:** Yeah.

**Mark Bates:** It's interesting... We're talking about concurrency and we talk about how sometimes concurrency is not faster, and this whole kind of idea... One of the biggest things I've noticed with newbies and anybody coming to Go really, from any language, is this "Let's make everything concurrent, because we can." And you're demonstrating very empirically "Hey, if you do that in the wrong places, you're actually gonna hurt your app." But I see it a lot, not even from the numbers perspective, just from the architecture and the complexity, that I see a lot of people introduce it into their apps when they just have no need for it... And one of those is channels. They build in a lot of channel usage early on, because they think they should... And then you're like "Oh, actually you only use channels in these three occasions..."

So concurrency in Go -- what drove us all to Go originally, I think... I know it certainly drove Johnny and I, being Rubyists before this... It drove us here, it drove everybody else here. But then to sit there and say "Hang on... Just because we've got concurrency doesn't mean you should always use it." That's a different thing altogether.

**Mat Ryer:** Yeah. I think that's a good point. I was gonna say also that the complexity thing - that applies actually across the board to any of these little cool features, particular if you're doing it for optimizations, you're doing it for performance reasons. In most cases, you're gonna make your code more complicated and therefore less maintainable... So you just have to weight that cost. Maybe it's worth it in your case... And maybe it's not.

**Mark Bates:** I often find when I'm building apps I start serially... You know, because I start in the morning...

**Mat Ryer:** Yeah, \[unintelligible 00:26:41.12\]

**Mark Bates:** No? Too many dad jokes? Okay, I'll skip that one. \[laughter\] Anyway... That one didn't work. That one's out of my repertoire.

**Mat Ryer:** It's not a dad joke, it's a serial/cereal killer joke. \[laughter\]

**Mark Bates:** It was that, too. I start very serially. I'm just gonna start my program and I'm gonna call my methods and my functions as need be, and I'm gonna find as I'm working and as I'm using this app that I'm struggling all of a sudden here or there. I go in, I benchmark, or I profile, and I say "Oh, you know what - this bit of code here would really benefit from being concurrent." But not the whole thing, just this section, where there's a lot of process, a lot of stuff happening, and we can get a big win there. But I only do that once I know that I'm getting that from the testing and the benchmarking.

**Mat Ryer:** Yeah, I think that's great advice. Chris James from the Gopher Slack channel GoTimeFM - and by the way...

**Mark Bates:** Long-time listener, first-time caller...

**Mat Ryer:** \[27:47\] And by the way, please join in the chat. That's where we hang out. Chris has a question for the ladz (with a z). Chris says "One of the strengths often touted about Go is that because it's very simple, it's more difficult to make mistakes compared to other general-purpose languages. But as we are learning, there's at least a hundred mistakes you can make, if not more. Does the panel have any ideas on changes to the language that could/should be made to reduce developer mistakes?" And kind of shadowing springs to mind for me on this one. I feel like if --

**Mark Bates:** Shadowing, definitely. The magic okay is another one... For those of you who kind of know what I'm talking about - you know, you kind of get the map, map returns this random okay, boolean second variable if you're asking for it. Or if you're doing a type assertion. If you ask for the second random option value that's there - these things I don't even think are documented; you just kind of know that they're there... And none of us mere mortals can add them; the Go team can add them in weird places... Like, why isn't type assertion -- and that's one of my big ones; why does that not force you--

**Mat Ryer:** Check if it's okay or not.

**Mark Bates:** ...to check the okay? Because the alternative is a panic. And I see that all the time. I see type assertions constantly in the code without that okay check, and it's just panics waiting to happen. And if I want a panic, I can panic, even with the okay. But I also think panics shouldn't exist, but that's another language change I think that could solve a lot of problems.

**Teiva Harsanyi:** And do you think that generics is going to be a nice use case for that, instead of having to cast every time that you will have to handle a generic set of data, or something like this?

**Mat Ryer:** In some cases...

**Mark Bates:** Generics...

**Mat Ryer:** But the thing is - if you're dealing with data that comes in from JSON or something, because sometimes you have generic data, so you don't have structs to demarshal it into; you have maps of string interface. And then if there's an object inside an object, that becomes a map string interface, too. So in that case you have to rely on that. So in a way -- in some cases probably not, but... I don't know, what were you gonna say, Mark? Do you like generics?

**Mark Bates:** \[30:05\] What I was gonna say is I grew up -- my first job I was writing Java, we didn't have generics. Then I went to Ruby and we didn't have generics.

**Mat Ryer:** How old are you? No, carry on... \[laughter\]

**Mark Bates:** I'm old. I'm old. My first job out of college I actually was doing ASP, so I kind of lied; I skipped a whole--

**Johnny Boursiquot:** Classic ASP?

**Mark Bates:** Classic ASP.

**Johnny Boursiquot:** Wow. You go way back.

**Mat Ryer:** Bates' ASP was classic. Full of banter in the comments...

**Mark Bates:** It was. It was as classic ASP as it could get.

**Mat Ryer:** ...funny variable names... You had a blast. Absolutely classic.

**Johnny Boursiquot:** Good times. Good times.

**Mark Bates:** Now I can't even remember what I was talking about.

**Mat Ryer:** Generics.

**Mark Bates:** Oh, generics. Thank you. So I've never worked in a language that has had generics to date, kind of built-in as the term generics is known throughout the community. I have as of yet run into one area in particular where I'm like "Ah, generics would have been perfect there." I've been coding for over 20-something years professionally. So I think I like the idea of what generics can possibly do for the language; I'm also afraid of everything they can do to the language. \[laughter\]

**Mat Ryer:** Okay. Well, we're gonna find out together -- and don't worry if you're scared by generics. Go Time is your friend...

**Mark Bates:** Well, because I can see performance problems... Because we were just talking about people coming to Go and abusing concurrency. And let's be honest, that's what we were talking about. We were being very nice about it calling it a mistake, but it's abusing the technology, right? And we all did it when we first came. New people come and they do it. And that's the mistake, is we keep abusing it, right? But I see that mistake about to happen again with generics, and I can see everybody rushing to implement everything in generics, and I can see programs crawling to a halt because everything's super-slow.

\[32:07\] And tools, parsing things and working in all these different ways in Go are gonna be not supported or working incorrectly because of generics... I just see a lot of potential mistakes (if we're gonna keep using that term) coming down the pipe here.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** I take a more optimistic view... \[laughter\] I mean, I do see the same dangers Mark sees. I guess I'm choosing to look beyond what happens after the initial spike, the abuse.

**Mark Bates:** Yeah, but that's gonna be the first couple years, and those couple years are gonna stick with us for 5 or 10 years.

**Johnny Boursiquot:** Yeah, I mean -- there is some of that.

**Mat Ryer:** Still optimistic, Johnny? Still feeling optimistic? \[laughter\]

**Johnny Boursiquot:** No, I really --

**Mark Bates:** Climate change, Johnny? I mean...

**Johnny Boursiquot:** \[laughs\] Look, the way things are going we won't be around maybe to see the change after the spike.

**Mark Bates:** That's a good point. I shouldn't worry about generics, because climate change is gonna take care of the problem.

**Johnny Boursiquot:** It's gonna take care of everything.

**Mark Bates:** I'm still worried about modules. I don't have time to worry about generics.

**Johnny Boursiquot:** \[laughs\] Wasn't that episode on that last time?

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** I think we hit that, right?

**Mat Ryer:** Yeah.

**Mark Bates:** They don't let me on those episodes anymore.

**Mat Ryer:** Johnny, are there are other kind of common mistakes that you've seen?

**Johnny Boursiquot:** Well, I can give you one from personal experience which actually dovetails quite nicely with the very thing we were talking about, with the abuse of concurrency. So when I first came to Go, and my previous language before that was Ruby, and - basically, I was like "Oh, this is so easy to do concurrent stuff." So I started sprinkling it on everything. And I was like, "Oh, channels. How do I use those?" For those who don't know, you don't have to use channels to use Go concurrency, right? They're a communication medium, a synchronization medium. So you can have simpler mechanisms, like a WaitGroup, or things like that. So you don't have to use--

**Mark Bates:** In all fairness - I don't mean to interrupt Johnny, but I'm going to...

**Johnny Boursiquot:** \[laughs\] Cool. Go right ahead.

**Mark Bates:** Early in the days of concurrency we only had channels. We didn't have a lot of the other primitives for controlling things like WaitGroups, errgroups...

**Johnny Boursiquot:** Those came after, yeah. Same package...

**Mark Bates:** ...contexts, stuff like that. So all of the early documentation and all those early blog posts and videos, everybody's like "You've gotta use channels to start and stop goroutines, and keep them in sync, and protect mutexes" and whatever.

**Mat Ryer:** \[unintelligible 00:34:29.25\]

**Johnny Boursiquot:** That's his grumpy old man voice... \[laughs\]

**Mark Bates:** My normal voice is my grumpy old man voice... That was my grumpier old man voice.

**Johnny Boursiquot:** As he climbs in age, everybody... \[laughter\]

**Mark Bates:** That's what I'm gonna sound like in five years.

**Johnny Boursiquot:** Right, right. No, so the personal experience is one where I was actually in charge of building this batch job thing, where I'm communicating with some remote endpoint, and making multiple API requests... And for some reason, there was no batch API endpoint to hit to give you a bunch of stuff. You kind of had to make singular requests, if you will. So I'm like "Yay! Goroutines are gonna be great for that." So basically, I do testing; not always test-driven development, but I always test my code... There's a difference, and we'll get into that later...

**Mark Bates:** \[laughs\]

**Johnny Boursiquot:** But I write my mocks, I have my stubs locally and everything else, I'm sort of faking the API response, I'm throwing goroutines at it... Everything's going perfectly. Everything just works. And then I put the thing into production, and then all of a sudden those hundreds of goroutines, perhaps even thousands of goroutines that I was launching during testing to hit this mock endpoint \[unintelligible 00:35:38.21\] I start seeing a bunch of 429's in HTTP status code in my logs. I'm like "What's going on? What's going on?" For those who don't know HTTP status codes, 429 means basically you're making too many requests. The server on the other side is saying "No mas. I'm not gonna bother responding to you because you're simply abusing this API, basically."

**Mat Ryer:** Oh, your code was too good.

**Johnny Boursiquot:** \[35:59\] \[laughs\] Well, perhaps not that sensibly written, again...

**Mat Ryer:** So why didn't you put a sleep in before each one? A random sleep... \[laughter\]

**Mark Bates:** That fixes it, doesn't it? Doesn't that solve the problem.

**Johnny Boursiquot:** It fixes it, yeah. \[laughs\] It was one of those things where I'm like "Yes, perhaps too much concurrency will bite you." So you have to factor in -- which is something I also teach when I'm talking about Go concurrency... You have to factor in the constraints of your system. Go is not gonna be a bottleneck. The language is not gonna be the thing that makes your stuff go slow. Your databases are gonna be bottlenecks. The network is gonna be a bottleneck. The third-party endpoint you have to talk to over the wire - that's gonna be a bottleneck. Not the language.

So factor in the constraints that you have to work with. What problem are you solving, what are the constraints that exist within that problem domain? The language itself - that's not your problem.

**Mark Bates:** We teach the same thing at Gopher Guides. And that's one of the nice things about Go, is for 98% or even higher percent of us, the language has our back in terms of performance and just making sure we're not shooting ourselves too badly in the foot... And it is - it's the database, it's the network, it's the file system. Those are the things that are gonna make your app just crawl, crawl, crawl, crawl. It's not gonna be that bit of business logic you have invalidating a struct to make sure that there's an email address, \[unintelligible 0:37:29.21\] All that sort of stuff -it's the network calls, it's your database... Which is just a network call onto itself. That's all a database is. Or you're calling the file system, which is even worse than the network half the time.

So yeah, those are all real issues that I think people just kind of get in their heads and they think they need to fix it in the language, and not kind of look at what they're programming and what they're coding and say "Okay, let me focus on that and find those performance issues later, when they become that problem." I think this is the second time we've come back to that kind of concept...

**Mat Ryer:** Yeah, it is an important one. It comes up a lot. It's worth bearing in mind as you're underway, as you're writing code. So Teiva, there's also another one about time after... This is from the book. Time after - you could possible have a memory leak?

**Teiva Harsanyi:** Yeah. Well, not really memory leak per se, but yeah, having a peak of resource consumption in some specific cases, let's say. So just as a reminder time.after accepts as an input time.duration, and it returns a channel of time.time. And it waits for the duration to elapse, and then sends the current time on the return channel. And also the time it's also used in concurrent applications, let's say, because of the \[unintelligible 00:38:54.08\] Otherwise, if we just want to wait some time in the current goroutine, we can just use time.sleep.

So let's imagine we want to implement a kind of smart consumer, or I don't know how to call it... That will keep receiving messages from a channel. But let's say if we don't receive any messages for, let's say, one hour, we also want to log a message, to log an alert, for example, or something like this. And one way we could implement it is using time.after in this case, and we could say "I will have a for loop with a select inside and two cases." In the first case I'm going to receive messages from the channel, and then call a function, do whatever with the message we have received, and in the second case we are going to receive on the channel that is returned by time.after to log the alert "I haven't received a message since one hour."

\[39:59\] So in that case, let's say, we just deploy our application, we keep receiving messages... That's great, but we notice that it consumes more and more memory and it seems to steadily increase, actually. So what's the reason actually for that? We have to know that in every iteration Go will actually evaluate time.after, and it will create a new channel. And we may actually expect this channel to be closed in every iteration, but it's not the case. Actually, the resources that are created by time.after, including the channel itself - they will be released once the timeout expires.

So in the worst-case scenario, where we keep receiving a high volume of messages, we will keep looping, we will repeatedly call time.after in each iteraction, and it will keep creating resources until the duration - in our case one hour - elapses, basically.

**Mat Ryer:** Yeah. Now, I have definitely made this mistake, doing exactly that--

**Johnny Boursiquot:** I'll be right back. I've gotta go fix something... \[laughter\]

**Mat Ryer:** Yeah. So the answer must be to create the channel outside? What's the answer, how do you avoid that?

**Teiva Harsanyi:** There are different solutions. One of them could be to say "I can use context.withtimeout", but it's not perfect nonetheless, because it would mean that in every iteration I have to call context.withtimeout, and it's going to create a channel; it's not lightweight. Here, the most appropriate solution could be to use within the time package the timer searcher. The timer searcher basically - we can create it with timer.NewTimer, where we'd pass a time duration, and internally it has a channel field that we can access \[unintelligible 00:41:49.20\] and it has also a reset method. And the reset method - that's going to reset basically the duration.

So what we could do in our case - we could say "Before \[unintelligible 00:42:03.11\] I'm going to create this timer." In the second case I'm going to listen on the timer.seeField, which is the channel... And then in every loop iteration I'm going to call time.reset to reset the duration.

And here it will just reuse the same channel, basically. So it won't have to create a new channel. So yeah, that's probably the most appropriate solution here.

**Mat Ryer:** So it is possible to use time.after in a safe way then, or should we just avoid it altogether?

**Teiva Harsanyi:** I believe if we are in the context of a function that keeps being called - it's in a loop, for example; or we can have also the case in an HTTP handler, right? Because in an HTTP handler if we call time.after and we keep calling this HTTP handler, we may have the same case. So my recommendation here is probably to not use time.after when we are in the context of a function being called repeatedly.

**Mat Ryer:** Yeah, that's a good one.

**Johnny Boursiquot:** Nice.

**Mat Ryer:** Yeah, that is a good one.

**Johnny Boursiquot:** Very good one, yeah.

**Break**: \[43:14\]

**Mat Ryer:** Bates, you were talking earlier about another common gotcha...

**Mark Bates:** I was...

**Mat Ryer:** ...to do with the API footprint that you export.

**Mark Bates:** Oh. And by talking about that earlier you mean in the private message I sent you this morning...

**Mat Ryer:** Yes...

**Mark Bates:** ...completely offline and out of context of this call.

**Mat Ryer:** Yeah, that's true. You weren't talking about it earlier on this podcast.

**Mark Bates:** Yeah, yeah. That's right.

**Mat Ryer:** It's just a mistake. It's part of the theme of the show. I'm gonna be making lots of mistakes...

**Mark Bates:** I love it! I love it.

**Mat Ryer:** No, please \[unintelligible 00:45:03.24\]

**Mark Bates:** So yeah, Mat obviously asked us all to submit common mistakes that we see a lot...

**Mat Ryer:** Well, it's rude telling them how we do it... Just do the thing, don't tell them how we've done it. \[laughter\]

**Mark Bates:** Mate, it's not that big of a deal... The sausage is being made here, right?

**Johnny Boursiquot:** It's a mistake, yeah.

**Mat Ryer:** That's the problem though - I want them to think this show is way more sophisticated than just me texting you while you're having your cereal.

**Johnny Boursiquot:** Well, that would be his mistake now, wouldn't it?

**Mark Bates:** Well... Exactly. Anyway, one of the things I see new developers to Go do a lot is basically export everything. Everything starts with a capital letter, and that's it. Like, their entire package, all of their types, every field in their type, every method on their types... Everything is public. And of course, when you do that, you can't take that back now. That's it. It's out there, as soon as people start hooking into it. And you know, modules have made this problem a little more complicated in some areas...

But it's definitely one of the big issues I see, where people should be starting with everything unexported, and only pushing up those pieces that they need... I think it's a lot to do with just people misunderstanding the way Go does exporting and unexporting. Because it's different than every other language I've used, this whole idea of capitalization to infer whether it's public or private. I love it now. Once I got it, I'm like "Oh, that's brilliant", because I can look at anything in my system and immediately know whether it's visible or not. I'm not scrolling up to look for a private or a protected method above it. But at the same point, I think new people come to a language and they see things that are upper-case and whatever, and they think "I'll just upper-case everything, because it's a proper word." It's the user's struct, so therefore u must be a capital u.

**Mat Ryer:** So would you say that people should just by default use lower-case letters everywhere, until you then need to export it for some reason?

**Mark Bates:** Yeah. I mean, you'd have to sell me on why you would wanna do it the other way around. I mean, there are definitely types when I start -- I open up a package and I go "This type has to be exported."

**Mat Ryer:** Because you're thinking about the use of that package...

**Johnny Boursiquot:** The actual API.

**Mark Bates:** Because I know what the use of this package is... So I'll say "Okay, my user type I need to export, because I need other people to use it." But the fields may or may not be fully exported. Or the methods might all start as unexported methods until I need one to be promoted; I needed to use it outside the package. And again, it's like "Well, do I need that method, or do I need something similar to that method \[unintelligible 00:48:01.02\] or somewhere else?"

**Johnny Boursiquot:** You know what you just made me think of? It wasn't a deliberate choice...

**Mark Bates:** I'm glad this is coming out of your mind and not mine... Go on.

**Johnny Boursiquot:** \[48:12\] \[laughs\] Yeah... Now that I think about it, it wasn't a deliberate choice. It was more of a -- maybe I'm adopting some of Mark's grumpy old dude sort of a persona, but I was like "My interfaces inside of my packages - I don't export those, at all." Because I don't want the consumer of that package to have a dependency on my own abstractions, on my own interfaces. So it's almost like I say "Well, if you wanna create abstractions or whatever it is, you create your own interface. You create a local interface to you, for whatever I'm gonna hand over to you, but I don't tend to expose my interfaces for my packages." It wasn't deliberate, it just kind of happened.

**Mat Ryer:** Oh, amazing.

**Mark Bates:** I do expose a decent amount of interfaces, but I also write a lot of local, unexported interfaces inside of another function or method sometimes...

**Johnny Boursiquot:** In-line, yeah.

**Mark Bates:** Yeah, just in-line, because I wanna check "Does it have this method on it?" and if so, I wanna call it. And I don't need some big interface somewhere else, I can just do it right there in-line. And that's one of the nice things about Go, is that you can do that sort of thing. But that's an advanced feature, Johnny. That's a feature that -- I don't know about you, but when I teach... You know, I teach a lot of intro to Go at Gopher Guides, and interfaces is one of those things that people really struggle with coming to Go.

It surprises me, because they're on the surface relatively easy. There's not a lot to them; it's a collection of methods, and you either implement those methods or you don't. But people really struggle with that and they struggle with the implicit versus explicit declaration of an interface... I'm not implementing.. this isn't my Foo interface... And then they certainly don't realize that you can create in-line, unexported types and interfaces inside of a method to make your life even that much more easy right there.

**Johnny Boursiquot:** Right, right.

**Mat Ryer:** Yeah, one downside to that technique is you can't hide things inside the function. It's not always obvious -- you have to use docs or something to say "If it implements this interface, then it'll have this different behavior." So it is quite an advanced case, I think..

**Mark Bates:** It's very much so. I use it mostly in an exception case, where I've got an error or something, and I wanna try to see if I can inspect a bit more information out of this thing, if I can... Otherwise, if I'm letting people know that I'm supporting these methods via interfaces, then I'll expose those interfaces, more for the sake of hanging documentation on them. You know, just saying like "Hey, this method is gonna take these five interfaces", so it's a documentation thing versus a required to be passed in.

**Mat Ryer:** Well, it's that time again... Teiva, hold this base. Johnny, you're on the drums. Bates, pick up the guitar... It's time for Unpopular Opinions!

**Jingle**: \[51:13\] to \[51:30\]

**Mat Ryer:** Who's got a meaty unpopular opinion?

**Johnny Boursiquot:** I do. I'll fire the first salvo.

**Mat Ryer:** Okay... \[laughs\]

**Johnny Boursiquot:** That came out of nowhere. You look surprised.

**Mat Ryer:** Yeah, I was surprised.

**Johnny Boursiquot:** Yeah, I don't often have unpopular opinions.

**Mat Ryer:** Yeah, I know. Because you're nice. That's what we were saying earlier, Mark, privately, in the text.

**Mark Bates:** That's what we were saying earlier, yes. We were saying what a nice guy Johnny was.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Don't you think Mark Bates looks like he's just got back from being shipwrecked?

**Johnny Boursiquot:** Oh, mate. Fire!

**Mark Bates:** \[52:04\] \[Captain Sparrow voice\] "I've been stuck on that island for so long... Thinking about generics and stewing away..." I'm like \[unintelligible 00:52:10.25\] from Lost. Somehow I gained weight being stranded on a desert island. I'm not quite sure how that happens.

**Mat Ryer:** No, you look great though, mate, really. \[unintelligible 00:52:17.19\]

**Mark Bates:** Oh, thank you. That's your unpopular opinion, I assume.

**Mat Ryer:** \[unintelligible 00:52:20.09\]

**Mark Bates:** Then I look good. Because there's definitely an unpopular opinion in my house.

**Mat Ryer:** You definitely make a good Guess Who character, from that game Guess Who. Like, way more interesting.

**Mark Bates:** Fair enough.

**Johnny Boursiquot:** Can I opine now?

**Mat Ryer:** Yes, Johnny, I'm sorry.

**Mark Bates:** Yeah, go for it. Please, help us.

**Johnny Boursiquot:** Okay. \[laughs\] I have to break this up. Alright... Yeah. And for those who don't know, this is actually what happens in real-life too, hanging out with these guys.

**Mat Ryer:** Apart from I began to piggyback off Bates by now...

**Mark Bates:** That's true. And there's usually a lot more food involved.

**Johnny Boursiquot:** And alcohol, yeah. Sadly. Anyways, so my --

**Mark Bates:** Still waiting on you, Johnny...

**Johnny Boursiquot:** I know, I'm trying to get it out and y'all keep making me laugh. \[laughter\] Alright, so here it is. I think everybody coming to Go should make as many mistakes as possible. Because that's how you learn. That's how you learn.

**Mark Bates:** I don't think that's an unpopular opinion.

**Mat Ryer:** Well, I've never heard that...

**Mark Bates:** I'm gonna disagree with you.

**Mat Ryer:** What?!

**Mark Bates:** Because I think the adage of manage mistakes -- like, people know that you're supposed to learn from your mistakes. Your mistakes are good. So don't go and purposefully make mistakes. I don't know how you'd even do that, because they're not mistakes; then you're just breaking your code, because you're like "Johnny said I should make my code terrible... I should introduce as many bugs as possible if I'm gonna become a better Go developer." That's not I think what Johnny was trying to say, I hope...?

**Johnny Boursiquot:** Right, right.

**Mark Bates:** Because that really would be an unpopular opinion. "Johnny says do a terrible job at work and you'll become a better Go developer."

**Johnny Boursiquot:** "Break all the things." No, no, no. So here's some nuance... I don't know about y'all, but when I'm learning something, like maybe on the job, or if I know that at some point somebody's gonna look at whatever it is that I'm trying to do - I go into this sort of learning paralysis where I just keep learning and learning and learning and reading and reading and watching and watching, just consuming everything I possibly can, so that the first piece of code I write has to be perfect. Because I'm so sensitive to the criticism. Over time I've learned to sort of feel less of that pain or feeling of inadequacy or whatnot, but I will spend a ton of time just becoming an expert at something without actual practical knowledge that actually does make you an expert.

So don't be in a learning paralysis mode. Put stuff out there. Make mistakes, talk about it... I mean, you will find a jerk that says "Hey, this stuff is crap." That's fine. Brush it off. Most people are not like that. So don't be paralyzed. Just make mistakes in public, learn in public. That's okay.

**Mat Ryer:** And that also extends, like, we should be forgiving as well when we see people making mistakes...

**Johnny Boursiquot:** Right, right.

**Mat Ryer:** When you give that feedback, do that in a way--

**Johnny Boursiquot:** Yeah, don't be that jerk.

**Mat Ryer:** Yeah.

**Mark Bates:** We all do it. Johnny, I think you and I have very different coding styles... Because you said "I wanna learn something new, and what I'll do is I'll go and I'll find something that says "This is how you get up and started to Hello World", and that's usually where I drop off, and I just start coding, and start hacking, and throwing things in, like "Well, that didn't work. What the hell?!" Personally, that's the way I code... When I'm learning something new anyway. If it's a brand new tool, a package, a library, some concept I've never done before, I just write code. I can't just read and read and read. I've gotta just bang it out until I get to a point where I go "Oh, that worked. That worked. Yay!"

Now, how do I make that clean and good, and do what I actually wanted to do, not just "I got it to make a connection and return Hi to me." You know, like, "Great. Now let's take this and try to build on it."

**Mat Ryer:** \[56:05\] Yeah, you can't really -- you learn so much by building the real thing... And this also speaks to software engineering generally. We wanna design it all upfront sometimes; we wanna know exactly what it's gonna be, so we can do good estimates and things... You learn so much by doing it, so get on and do it. You'll just make so much more ground, and making mistakes in that sense is great, because that really is how you find out what the real thing to do is. Sometimes it's impossible to know upfront, isn't it?

**Mark Bates:** \[56:43\] Yeah. I would say 9 out of 10 times I run tests, they fail. And I'm okay with that, most of the time. There are times when I'm like "Why the hell are you failing?!" But most of the times it's like "Yeah, okay... Still not there yet. That didn't work. What can I try now to get this test to pass?" You know, just keep making those mistakes till you find it, and that's okay.

**Mat Ryer:** Yeah, absolutely. Well, speaking of mistakes, Teiva's book, "100 Mistakes" is --

**Mark Bates:** Are you saying that his book is a mistake?!

**Johnny Boursiquot:** Goodness! We treat our guests better than that.

**Mark Bates:** Mat, you're doing a terrible job... I think it's a wonderful book, despite what you say...

**Johnny Boursiquot:** Teiva, don't believe what he says.

**Mark Bates:** Yeah. Teiva, man, Mat's just -- he's jealous.

**Johnny Boursiquot:** Yeah. Great book, great work... Your stuff is not a mistake.

**Teiva Harsanyi:** That was rude.

**Mark Bates:** He's jealous. His Blueprints book hasn't sold well in years... \[laughter\]

**Mat Ryer:** \[unintelligible 00:57:24.23\] It's absolutely full of mistakes.

**Mark Bates:** Yeah, that's why it hasn't sold well in years, mate.

**Mat Ryer:** Well, you can find out for yourself by buying my book, and also getting a -- Bates, let's try this.

**Mark Bates:** You can go to my torrent site and just download his book for free.

**Mat Ryer:** \[laughs\]

**Johnny Boursiquot:** That's how we treat friends. We just put their stuff--

**Mark Bates:** I'll put the link up on Twitter after this show... \[laughter\]

**Mat Ryer:** Good. Thank you for putting it there, so nobody will see it.

**Mark Bates:** Don't mention it.

**Mat Ryer:** Bates, pick a number between 34 and 36.

**Mark Bates:** Oh, I hate the way this works. 42.

**Mat Ryer:** No, a number between 34 and 36.

**Mark Bates:** I was told there wouldn't be --

**Mat Ryer:** Maths? It's not really maths, is it? 34 and 36. There's only one option, mate.

**Mark Bates:** 35! Okay, 35.

**Mat Ryer:** Okay, you said it. 35. We're gonna give a 35% discount to anybody that wants to buy Teiva's book using the secret code "podgotime21". We're also gonna be giving a free copy away as well, Teiva. This is very nice of you to do this. So if you can tell me what title did Mark Bates give himself by mistake earlier in this episode. It's "The \*something\* of mistakes", he gave himself this very grandiose title, as we've come to expect from Mr. Bates... If you can tweet what that is, we'll pick one over the next week. Tweet at @GoTimeFM the answer to that, and we'll send you a secret code and you can get a full eBook of 100 Go Mistakes and How to Avoid Them. That's good, ain't it?

**Mark Bates:** I like that. It is. I like that.

**Teiva Harsanyi:** It's cool.

**Mark Bates:** I'd read that book.

**Mat Ryer:** You're gonna try and win, aren't you?

**Mark Bates:** I may. I'm not quite sure what I called myself, actually.

**Mat Ryer:** Yeah, just listen back.

**Mark Bates:** But I just didn't think I'd say that on the air, so I'm surprised...

**Mat Ryer:** Well, we'll see. It has to make it into the podcast episode. I've made it part of the format. And that's how you do it.

**Mark Bates:** It's gotta be. It's gotta be.

**Mat Ryer:** Teiva, thank you so much for joining us. Absolute pleasure to have you here and learn about mistakes... And good luck with your book; we look forward to reading it. Johnny Boursiquot - always a pleasure. And Mark Bates was also here. Goodbye!

**Johnny Boursiquot:** \[laughs\]

**Mark Bates:** Thank you!

**Teiva Harsanyi:** Thank you so much.

**Outro**: \[59:49\]

**Mat Ryer:** Um... Okay. Brilliant stuff. Thank you again. I mean, this is it. We've done the podcast.

**Mark Bates:** Thank you.

**Mat Ryer:** Editors will turn that into something that sounds really professional.

**Teiva Harsanyi:** Okay.

**Mark Bates:** I hope so.

**Johnny Boursiquot:** Right. They'll just cut out all the parts Mat was speaking. That's usually how they do it. \[laughter\]

**Mat Ryer:** You nearly said Mark as well, I love that.

**Johnny Boursiquot:** No, I said Mark and Mat, yeah.

**Mat Ryer:** Oh, yeah, yeah.

**Mark Bates:** So it's just gonna be like 45 minutes of Teiva speaking, and that's it.

**Mat Ryer:** Yeah. That's probably what people want anyway.

**Mark Bates:** Honestly, that's probably a much better podcast than what we just did.

**Mat Ryer:** Yeah.

**Mark Bates:** Next time, Teiva, you just do it. We'll just be quiet.

**Mat Ryer:** More like the audiobook version of your book. You could just read it, with your accent. That's the thing - people love accents.

**Teiva Harsanyi:** That's cool.

**Mat Ryer:** We're delivering.

**Mark Bates:** You know, Mat and I could do the audio reading of your book... \[laughter\]

**Johnny Boursiquot:** Say no, Teiva. Say no. Say no. Say no.

**Mark Bates:** ...with different voices. And we'd do it for a reasonable rate. Well, one of us would take the narrative and one of us would take the code.

**Mat Ryer:** Yeah, yeah.

**Mark Bates:** So one would be the voice of the code--

**Johnny Boursiquot:** Have you ever heard Mat do the filepath walk? \[laughs\]

**Mark Bates:** Yeah, that was my idea, mister...

**Johnny Boursiquot:** \[laughs\] Okay...

**Mat Ryer:** Yeah, but would you read the code in like a Stephen Hawking voice? Because it's kind of fixed width font...

**Mark Bates:** Well, who says I'm reading the code? Why can't you? I wanna do the narrative.

**Mat Ryer:** Okay. Yeah, you've got the sort of bouncy kind of voice...

**Mark Bates:** You've gotta keep the people interested.

**Mat Ryer:** Yeah. And I'll be just like, reading out the code in a boring way.

**Mark Bates:** Yeah, exactly.

**Johnny Boursiquot:** While having some tea.

**Mark Bates:** See, Teiva, we've got it all sorted out. You just send us a copy of the book; we'll get it to you in the mail by Tuesday. Oh, today is Tuesday. End of day today. We'll do it by the end of day today. We're that good. One take, without having read the book. We'll just -- write down.

**Johnny Boursiquot:** Mistakes were made.

**Mat Ryer:** That would be a mistake--

**Mark Bates:** Many, many mistakes were made!
