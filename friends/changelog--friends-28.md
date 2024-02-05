**Jerod Santo:** Oh, you've been on six of our episodes

**José Valim:** Six.

**Jerod Santo:** This will be episode seven. We should do a Most Frequent Guest thing.

**José Valim:** When did you start the show?

**Jerod Santo:** So the Changelog started in 2009 officially.

**José Valim:** Oh, okay.

**Jerod Santo:** But they had some fits and starts. I started in 2013, and I think you've been on --

**Adam Stacoviak:** Since then, yeah. It was not before then.

**Jerod Santo:** It wasn't before then. Your first appearance was 2016.

**José Valim:** And it was about Elixir, most likely.

**Jerod Santo:** Elixir and the Future of Phoenix. I think we actually had -- well, it was just you...

**Adam Stacoviak:** Oh, was it?

**Jerod Santo:** So now we're just doing the show. Welcome. It's Changelog & Friends. So our story with Elixir started with Chris McCord, not with you. Did you know that?

**José Valim:** How unacceptable... Alright, so you call Chris and he comes on the show... \[laughter\]

**Jerod Santo:** Yeah, that's pretty much how it happened. So Phoenix dropped, and I'm a web developer, so I'm interested, and I was a longtime Ruby on Rails... I knew who you were, and I used Devise and stuff, so it wasn't I was unaware of yourself. We just hadn't met. And when Phoenix made a splash, I was "We should do a show on Phoenix." And Adam said yes, and so we invited Chris McCord on and we did a show about Phoenix, and Elixir from his perspective... And I was sold enough to give it a try, because he was very convincing. And I ended up liking it quite a bit, did a quick - not a demo app, but a very small, single-endpoint -- I think it was a Slack inviter kind of thing, where it'd do the whole Slack invite thing for us when somebody joined a channel. I can't remember what it was, but just a really quick one-file Phoenix app that I could deploy, and it worked, and I was "This is cool." So that got us going on Phoenix.

And then we invited you on for the deep-dive on Elixir, and that was in February of 2016. And then a few months later we had you and Chris on together. That's probably the one you're thinking about.

**José Valim:** Oh, yeah. That's the first one I remember.

**Jerod Santo:** Yeah. "Ecto 2 and Phoenix Presence", that was in June of 2016. So it was literally four months after the first one. So we just were kind of hooked there. And now this is your seventh time on the show.

**Adam Stacoviak:** What's interesting though about his very first appearance with us, the Elixir and the Future of Phoenix episode, episode 194, 70,000 listens. And that's what we tracked, which is not inclusive of Spotify, which - I guess since it's that old, maybe it doesn't have a lot in the external ecosystems we're not pulling into our internal stats... So that's 70,000 internal stats, listens. That's a pretty big show.

**José Valim:** You know, speaking about numbers, I think the tweet that we are going to talk about today on the show, about types - I think it was my most popular tweet ever. It was --

**Jerod Santo:** Ever?

**José Valim:** Yeah. I mean, I don't keep track of everything, but I can't remember...

**Jerod Santo:** Sure.

**José Valim:** Last time I checked, it was 160,000 views. I don't think I've ever crossed that...

**Jerod Santo:** Why do you think that happened?

**José Valim:** I mean, I don't know. It's Elixir and types, right? So I knew it was -- maybe we should talk about what the tweet is...

**Jerod Santo:** Sure.

**Adam Stacoviak:** Spill the beans. Spill the tweet. Or the X, or whatever it is.

**Jerod Santo:** Do you wanna read it? Do you wanna read the tweet? Because this is something we do now, we have people read their tweets...

**José Valim:** I only have Twitter on my phone...

**Jerod Santo:** Oh, we'll wait.

**José Valim:** ...and I keep it locked under tray keys, or something that... \[laughter\] If you have it. But otherwise, I can quote it from memory.

**Jerod Santo:** Yeah, I don't have it. You please do. You'll do better than me. So it's basically announcing that Elixir is now officially a gradually-typed language... And it had a screenshot from some very small snippets of Elixir code, where we were finding a type violation, because you had a variable that was declared to be an integer in some place, and then declared to be a binary or something that. \[unintelligible 00:04:35.17\] the same binary pattern, and they're like "Oh, this thing cannot possibly be an integer and a binary at the same time." And I kinda knew that a lot of people were going to it, and it was going to go out... So what I did is that I of course did a tweet with the main headline, and then I started a small thread, and I added more context. And then later, I realized that -- so people were asking me questions, and I was "Hey, that is in the thread", and they're "Oh, it's because I don't have a Twitter account." And now Twitter doesn't show you the whole thread, with all the context... And the context is important, because if somebody's expecting Elixir to be fully gradually-typed right now, it's not.

**Jerod Santo:** It's not.

**José Valim:** Yeah. We've began the work, and we should probably talk about that... But it's just the beginning.

**Adam Stacoviak:** You do say officially, though... So that may be the misnomer on the assumption, because the context in the tweets that they can't read because \[unintelligible 00:05:37.26\] Twitter/X is hidden behind you saying -- I'll read it for you. It says "Tomorrow marks 13 years since the first commit to the Elixir repo, and today we celebrate by announcing that Elixir is officially a gradually-typed language", and then the screenshot. And that's got 177.8k views on it, and almost 600 retweets/reposts, 2.2k likes/hearts, and almost 200 bookmarks on that, too.

**Jerod Santo:** \[00:06:11.21\] So it's a little bit fake-newsy, isn't it, José? \[laughter\]

**José Valim:** No, it is official. So let's go a little bit into it, right? So what does it mean? What does it mean that Elixir is officially gradually-typed, right?

**Adam Stacoviak:** Yeah, what does it mean?

**José Valim:** So before that tweet, let's say, Elixir was a dynamically-typed language. And one of the ways that you can think of a dynamically-typed language is that it's a "statically-typed" language where all the functions, all the inputs are dynamic, and then it returns dynamic. So everything that you receive is dynamic, everything returns dynamic, and dynamic means "I don't know what is the type at compile time. I know at runtime." So if I try to add a number to a list, which is not possible in most programming languages, you are supposed to -- in Elixir you're going to get an error at runtime. But if you had a static typed system, you could potentially catch that error at compilation time.

So Elixir was a dynamically-typed language. And being a gradually-typed language means that you have the dynamic, but at the same time you have the dynamic, you can also have precise type information. So what the tweet was saying is that "Well, instead of Elixir analyzing all the variables, all of your inputs as dynamic, now we are doing inference on your patterns and guards, which are very common in Elixir code." So in your pattern, you can say "Oh, I'm going to match on a list. You can use a guard to say "Oh, this thing is a number, or an integer." We are getting that information to say "Oh, so now I know that this variable is no longer dynamic, and it's actually an integer, and it's a list."

And now that we are mixing this dynamic world with this little bit of type information, now it's officially gradually-typed. And that's correct, but it's more it's officially gradually-type, but we are at 1% of the journey. And that's what the following tweets meant to say.

So if you think about everything you can do in a pattern and in a guard in Elixir - you can check if it's an integer, if it's a function, you can pattern-match on maps, on tuples, on lists - we only understand one construct right now, which is the binary matching and the binary construction. So of all the things in the language, we understand one of them. But getting to this one is super, super-hard. It's literally two years of research have passed... So getting to this one was super, super-hard. Now getting to the next ten is not going to be as hard... But yeah, we are officially gradually-typed, but it's we are 1% gradually-typed, if that makes sense.

**Jerod Santo:** It does. That's why you had to add those additional context thread tweets...

**José Valim:** That people can't read, and the ones who can, won't read...

**Jerod Santo:** Right, exactly. But that is how you generate more and more buzz, as people continue to engage with you on the thread. So that explains some of the excitement.

**Adam Stacoviak:** That's the adage too of work in public. That's what this is, right? This is working in public. This is showcasing something that you've been working on for a couple years now research-wise, and saying "Hey, officially yes, but 1% on the journey."

**José Valim:** Yeah. And it's funny, because -- so just to put things in perspective, it's 1% of the first milestones, and we have declared... Like, it may change, but we have declared that we are going to have three milestones in this. So what are our milestones? Well, actually -- so we did a bunch of research already, and then we can go into these, we have published articles, I have given talks, we have done a bunch of research... And by "we", I mean Giuseppe Castagna, which is the Senior Researcher, and Guillaume Duboc, the Ph.D. student who have been working on this. There is a paper with our names, and my name is the last one, deservedly, because I did the smallest part of the work there. So when I say "we", I mean not me... Pretty much them.

\[00:10:28.15\] So there was this -- so we did all this research, and our idea for the implementation, which is what we have started, is that we're going to have three milestones. And the first milestone is that we are going to look at all your patterns, all the guards, get information about them, and use that information inside the function, inside the program, to catch obvious typing errors.

I have to say, even before I started to think about typing, that Elixir is an assertive language, because usually, even though we don't have types, we actually kind of know what we're working with. We know if it's a struct, we know it's a list; that information is there, in the program. So the idea is, what if we can leverage this information that is there in the program, and use that to find bugs? And we are going to do that without changing the language, the language surface for the developer. And then we can use that to give it a try on the type system, make sure that it's going to be fast, make sure we're going to have good error messages.

So our first milestone is meant to be -- you can disagree with it. It's kind of like, it should be a win/win situation for everybody. If you're worried about type systems, or you don't like about type systems, it's like "Hey, we are going to find bugs for free. You don't have to change our code, you don't have to write types. You are just going to find bugs for free." If you type systems, it's one step to what you may perceive as the right direction to go to. So that should be a win/win situation. It should please everybody. If it does not please everybody, it's probably because we did something wrong, and we may be in the wrong direction. So that's the first milestone, and we did 1% of it.

And then the second milestone is to actually start changing the language to introduce some idea of types, mainly around data structures. So when you define a struct in Elixir, and may want to say "Oh, I have a user struct where the name is going to be a string, the age is going to be an integer", and you can have more precise information around data.

And then the third milestone would be -- well, we are now 100% gradually-typed, and you can also provide your own type signatures if you want to. So we have been researching for two years, we were able to move out of research, and there's still those very large milestones for us to go through. One of the things I tell people a lot is I'm not asking and anything from anybody, except patience. Let's be patient. We are being very careful about this. We are thinking each step after the other. We are not trying to rush it. So we'll see where to go... And the usual disclaimer I give people is that these can still fail. It doesn't mean that Elixir is going to be 100% gradually-typed. It may be "Oh, something did not work out. We will give up. Maybe we can only do milestone one, and we are not happy with milestone two and three", and then that's what we'll have at the end.

**Break:** \[00:13:40.28\]

**Jerod Santo:** So can we go back even further and just answer why, why this effort? Why do you think this is a good direction for Elixir?

**José Valim:** So I think that's a very good question. I gave a whole talk at Elixir Conference Europe, in 2022 perhaps, on this topic. And what I said - and usually, when I go give a conference talk, I usually give Elixir updates when I'm at Elixir events. "Hey, here are the things that we have been working on." Or I usually talk about a project that I'm involved, Livebook, or stuff with machine learning... And then I started the talk saying "Oh, these are the things that I'm excited about in the future of Elixir machine learning, and stuff. But before I talk about those things, I need to address what I call the elephant in the room." Because if you go to an Elixir event, or I think if you do a poll in a forum or something that, if you ask "What is missing in Elixir?", most people are going to say it's types. A type system is the thing that is missing in Elixir.

So if a lot of people feel that's the thing that is missing, I have to understand that. I have to understand why they feel it's missing, what do they think they're going to gain... And one of the things that I say in this talk - I don't remember precisely the arguments precisely I used at the time, so I may butcher my own presentation... But one of the things that I mentioned in the talk is that usually discussions about types, they tend to get so polarized very quickly. And it's very common for you to hear things that I don't believe to be true, if you try to look at it.

I remember seeing people saying "Well, if I was using a type system in this particular language, it would have caught 80% of my bugs." And then I'm "I don't think that's --" I feel what the type system can do for you in that particular scenario was being overvalued. I don't think it's 80% of the bugs. And then when you go look at it, when there are some studies trying to find a correlation with that, they can't find something that precise or that clear, that says "Yes, a type system is going to lead to a program with fewer bugs." I don't think we have found the universal proof of that. And I even think this discussion as a whole can be harmful... Because you've probably heard people saying "Hey, well, if you have types, you don't have to write documentation", and I don't agree with that. \[unintelligible 00:19:55.05\] That doesn't tell me how that things behaves.

So then people say "Oh, if you have types, you can write fewer tests." And I also think that's very harmful. I like to say "Well, if you have types, you can write fewer bad tests", because I don't think types would replace 99% of the tests that I actually write and I find important. For example, going back to the same logical or. The types are not going to find bugs in the implementation of logical or if you make it always return false.

So I gave this whole presentation which was kind of preparing people why we may need a type system in Elixir, but the presentation was much "Well, types are not all these things that you think they are." So very good salesman here, right?

**Jerod Santo:** Yes.

**José Valim:** But the thing that I want to try to get to is to kind of put everybody on the same page. Elixir is also a dynamic -- it runs on top of the Erlang virtual machine, which is dynamic, so you're not going to necessarily get large performance improvements out of that as well. So what do we stand to gain from adding types?

And what I mentioned in the talk, which I will try to get through audio right now, is that it's all about contracts. It's all about making sure that, well, when I'm calling this function, and that function changes over time, what is going to break? So it's defining contracts between different parts of your codebase, and helping you find bugs violation to those contracts, sooner rather than later. And that's kind of what we are to gain, for Elixir in particular, from having a type system. It's this guarantee where the different parts of my code, as they evolve, as they change for time, they are still in accordance with each other.

\[00:21:55.11\] And there's something else that people mention a lot. They think "Will Elixir help us improve the developer tooling as well? Having a type system - will it improve developer tooling?" And usually, the example people give about that is about TypeScript. And the funny thing is that it will help, for sure, but everything that we need -- so for example, if you take JavaScript, the issue why you need the type system to have a way better tooling is because JavaScript is completely dynamic, and it's also polymorphic. If you have an object, you don't know what that thing is. All the time you are passing around, you have to call something in that object, and you don't know what that thing is, so you have no idea what you're going to complete. But Elixir is not like that. We're not calling things on our variables. We are usually calling things in modules that are well-defined.

So in theory, we need to do work, we need to improve our developer experience, which I'm improving it... But in theory, the types -- we have the same as in Portuguese, where we have the knife and the cheese; we have everything ready to improve the experience. Everything is there. So in theory, we have that for the developer experience, and the types always help improve if you can easily see what this thing expects, you get that quick feedback cycle... It definitely improves. But it's not going to be an essential jump like you have in TypeScript, where the type system is effectively necessary.

**Adam Stacoviak:** Can you say the Portuguese version of that for us?

**José Valim:** In Portuguese?

**Adam Stacoviak:** I want to hear the Portuguese version, yeah. What's the knife and the cheese in Portuguese?

**José Valim:** Yeah \[unintelligible 00:23:34.29\]

**Jerod Santo:** Was that French?

**José Valim:** Yeah, close... \[laughter\] It may have come from the French, actually... It may not --

**Jerod Santo:** Oh, I was just messing with you.

**Adam Stacoviak:** ...be native Portuguese? Yeah.

**Jerod Santo:** I love that saying; there's something very cultural about that, right? The knife and the cheese. Is cheese a common -- is it part of most meals in Portugal, or...? I mean, why is that an idiom there?

**José Valim:** Yeah, so actually I don't know if -- that's also another good question. I don't know if they use it in Portugal, or if it's just a Brazilian thing.

**Jerod Santo:** Sure. That's the problem with Portuguese, it's spoken in many places.

**Adam Stacoviak:** \[unintelligible 00:24:12.21\] pretty staple, right? Cheese alone, in any form, melted or not, is a staple.

**Jerod Santo:** In almost all cultures.

**Adam Stacoviak:** Yeah, I suppose that is true.

**Jerod Santo:** \[laughs\] I mean, who doesn't like cheese?

**Adam Stacoviak:** It originated in the Latin cultures, but everybody's like "You know what? That's so good, we've got to take that." \[unintelligible 00:24:27.07\] is required.

**Jerod Santo:** I'm gonna start using that. "We've got the knife and the cheese", you know?

**José Valim:** Yeah, so have everything ready. Everything at hand, kind of. That's what it means. \[unintelligible 00:24:40.02\] "You have the rice and the beans", you know? Because that's the base of our meal, or something like that. That's probably how I would say it. But yeah, for some reason, it's the knife and the cheese.

**Jerod Santo:** Adam would say "We've got the barbecue and the..."

**Adam Stacoviak:** Homelab. \[laughter\]

**Jerod Santo:** And the homelab!

**Adam Stacoviak:** Yeah, man. That's my staples, is homelab and barbecue.

**Jerod Santo:** Everything you need. Yeah, I like that. Okay.

**José Valim:** We have the mic and the earphone.

**Adam Stacoviak:** That's right.

**Jerod Santo:** There you go. We could just keep doing this.

**Adam Stacoviak:** Yeah, this is the show now. Thank you.

**Jerod Santo:** The blank and the blank. Fill in the blank. Okay, so you had the knife and the cheese... You're not going to have as big of wins as you would have in JavaScript, because of just the nature of the difference of the languages...

**José Valim:** It's not that we won't have such bigger wings, it's that we already have --

**Jerod Santo:** You were ahead already.

**José Valim:** Yeah, that would be one way of saying.

**Jerod Santo:** Yeah, that makes sense to me. Absolutely. And you're starting with the guard clauses and the pattern matching. Is that where you're kind of staking the claim? Because there you're already kind of doing -- so in Elixir you can define multiple functions or methods, and depending on the actual parameters coming in, you've got multiple versions of the same function, and it's checking all kinds of stuff. So you can say "Is it a struct?" You can say, "Does it have these particular fields?" You can do crazy amounts of pattern matching there, and then it will call the appropriate function that matches the pattern. So you're kind of doing type analysis there, in a sense. Then you can have the actual guard clauses, which you guys provide a bunch, like is\_map, or something like that; is\_list. And you can write your own as well, can't you? ...to a certain extent.

**José Valim:** \[00:26:25.16\] You can, as a composition of existing ones.

**Jerod Santo:** Okay. But you can't write arbitrary code there. Trust me, I've tried.

**José Valim:** Yeah.

**Jerod Santo:** And I would like a feature that, because you know me, Mr. Dynamic. I would just like to be able to write my own guard clauses right there, in line. Has anybody requested that feature, José?

**José Valim:** I don't think it will ever be approved...

**Jerod Santo:** \[laughs\]

**José Valim:** We can kind of see the reasons why, because for example if that was possible, then the work that we are doing right now of doing type inference between patterns and guards --

**Jerod Santo:** You couldn't do it.

**José Valim:** We would not be able to do it. And also, Erlang studies that to get information -- so we're talking about the guards and stuff, but Erlang already used that information as well to do optimization. So for example, instead of boxing integers, if it knows it can keep them unboxed because the type was already checked, or to avoid some type checks, it already does that... And Erlang may also rearrange the order of the clauses if it thinks it's more optimized. And at the moment, you allow people to just write whatever they want, then you throw all that out. People are going to write code that "Does an HTTP request \[unintelligible 00:27:34.18\]

**Jerod Santo:** Yes, I am. Yes, I'm going to. \[laughs\]

**José Valim:** So... Yeah.

**Jerod Santo:** It makes sense. It's a trade-off, and I understand why it will never be the case... But I will say that oftentimes I wish it were the case... Because I'm like "This would be much simpler if I could just do that, but I understand that that's a bridge too far." You can do your own, like you said, but you're composing existing available guards that Elixir and Erlang already know about, right?

**José Valim:** Yeah.

**Jerod Santo:** That's an 80% solution.

**José Valim:** Yeah, so we are -- so as I said... And we started with the patterns and guards because we want to be able to start using the type system without changing the language. And that was very important for us. We want you to be able to evaluate everything, and give things a try, without imposing any changes on users.

**Jerod Santo:** And some of the stuff's gonna roll out in 1.17, the upcoming release, right?

**José Valim:** Yeah. So the 1% work that we've done, it's already in main. So it's merged; you can give it a try. And there is one other thing that I want to get for 1.17, which is if you pattern-match on a struct, and then you try to -- so if you pattern-match on a struct, and inside a struct declaration you pattern-match on a field that does not exist, that raises a compilation error. But I want to do it so that if you pattern-match on a struct and then somewhere else you do struct.field and that field does not exist, I want that to emit a warning. Previous Elixir versions already did it, but it was a hacked thing that we've built... And this would be done properly, backed by a type system. So that's the only other thing I want to have for 1.17. So maybe by 1.17, which will be May, we will have 2% or 3% of everything.

**Jerod Santo:** Sure.

**José Valim:** But I think we'll be able to go quite further. I wouldn't be surprised if we get close to doing at least all the patterns and all the guards... Because here's the thing -- so just so you have an idea how much work we have ahead of us... So for every construct in the language - I don't mean like every functional call. A functional call is one construct. But for every construct in the language - \[unintelligible 00:29:53.14\] receiving messages, accessing a map fields - for all of those constructs that we have in the language, we need to go and implement the typing rules for them. And we need to do that for all the patterns, all the guards...

\[00:30:11.01\] And then, what also we need to do is that for each data type in the language we need to devise the proper data representation from the point of view of the type system. So atoms for the type systems, they are represented in one way; integers in some other way; lists in some other way. And each of those have their own internal representation as well.

So one of the things that the tweet did not go -- actually, I believe in the thread I talked about this... It's that today, we have no granularity over the types. So in the current implementation we have atoms, and all the -- in the current implementation, an atom ok... We cannot make a distinction between the atom okay and the atom error. Those are all atoms. We don't make a distinction between them. We don't make a distinction between a tuple of two elements and a tuple with three elements; those are all tuples. So you also have to work on that as well.

And sometimes, when -- and this is really hard work. So we stayed two years doing research, because for example we would look at some data structures in Elixir, like maps, and we're like "Wait, we don't have the proper theory to properly type Elixir maps." So Beppe and Guillaume, they actually had to go and develop new theory, and prove mathematically that the theory is correct, just so we can type-check Elixir remaps. So that's the work that we have ahead of us. We have to implement that now, and... Yeah, and that's all part of that initial milestone.

**Jerod Santo:** So in May, when we inevitably upgrade our Phoenix app to 1.17, without any sort of changes at all to accommodate this, what would happen to us? Nothing? Or our compiler would just be smarter, basically?

**José Valim:** Yes, so the hope is that we are going to be able to find more bugs in more occasions. So if you have very obvious mistakes -- so those are mistakes that I'm thinking like you would be able to find in a code review, for example, very easily. Imagine somebody committed some code, and they did not run the test or anything, they just changed some code. You'd be able to say "Oh, I don't think it's going to work, because you said that this thing is a list, and you're trying to add that to an integer." So very obvious ones.

But then even within asking a user to write the types - we'll be able to ramp that up considerably, and start finding bugs between a guard that you defined in this other module, and then you change that module, and this module changes. So that thing that I talked about, contracts, and we want to observe and find out when contracts change - we will be able to do that even if you don't write any type signature at all. And I think this is going to be really valuable. And if we can do it really fast, then I think it's going to be fantastic. Have you used the -- I know you have a Phoenix app, right?

**Jerod Santo:** Yeah.

**José Valim:** Do you use Dialyzer in the Phoenix app, or no?

**Jerod Santo:** No.

**José Valim:** Okay.

**Jerod Santo:** If I do, I don't know that I'm doing it. Would that be set up by Phoenix for me?

**José Valim:** No.

**Jerod Santo:** What's Dialyzer?

**José Valim:** So dialyzer is --

**Adam Stacoviak:** I love the smile he gave you... "Nope."

**Jerod Santo:** Yeah.

**José Valim:** Yeah, so Dialyzer is a discrepancy analyzer. So Elixir has type signatures; you can add type signatures to things. And then Dialyzer is going to look at those type signatures and it's going to also find obvious bugs in your program. \[unintelligible 00:33:52.04\] who implemented Dialyzer, he said "Dialyzer is never wrong, because Dialyzer is only meant to be able to find bugs that it can prove with 100% certainty that that is going to be a bug." Because the other thing about a type system is that not a lot of people realize is that type systems, they restrict the kind of code that you can write.

\[00:34:17.09\] In many programming languages you can write a code and you're like "This makes total sense to me", but the language is like "Well, the type system cannot understand it, or you cannot prove that called to the type system... So nope, you can't compile it." And if you build a language statically-typed since the beginning, you make the language design, the syntax, the semantic mirror the type system, and you build everything together side by side. So those sharp edges, they do not look sharp; everything makes sense. But if you have an existing language like Elixir or Erlang, adding a type system is much harder.

The approach Dialyzer chose probably two decades ago at this point was like "Well--" It's very similar to what I was saying about Elixir - we want to look at the code, we want to understand the code, and if we find a bug, we are going to let you know... But they don't call themselves a type system. And what is new in our research is that we are kind of implementing something like dialyzer, something that is going to tell you "Hey, I for sure have a bug in here, but that's within the type system." So it's not a separate thing. Which means that if we get the foundation that we're working on, and we continue evolving it, we are going to have a type system that people can use. So I don't even remember was the question anymore...

**Jerod Santo:** You were asking me a question...

**José Valim:** Oh, I was the one --

**Adam Stacoviak:** Yeah. \[unintelligible 00:35:40.01\] You asked the question.

**Jerod Santo:** And I turned it around. Well, I didn't know what a Dialyzer was, so... You were telling me about it.

**José Valim:** Yes. So I went for circle. If you've used Dialyzer before, a lot of the things that I have been saying - they feel similar to Dialyzer. But Dialyzer - the error messages in Dialyzer, they're not good. They're very confusing. I think Dave Thomas, he gave the best quote about Dialyzer. He said that "Using Dialyzer is like talking to a monk. You know the monk is correct, but you can't understand what it means." So it's like "Hey, this code cannot work." And then you look at it, "This code cannot work...", and then you spend two hours figuring out... Right? So we have Dialyzer, it can do some of this work, but the error messages - they're not clear. It also runs separately, so it's a separate workflow...

So \[unintelligible 00:36:37.17\] if we had a Dialyzer that ran all the time, as you compiled, it was fast, and it had good error messages, it would already be a huge boone to the user experience... And we're starting there; that's what we are trying. In a way, I think it would be -- because I'm saying "Oh, we can have a type system in the future", but I wonder, could we just do the first milestone, \[unintelligible 00:37:05.10\] we try to guess everything... And then people are so happy that we don't have to go the whole way. They're like "Stop! It's perfect! Don't change it." I don't know. But...

**Jerod Santo:** We'll see what happens.

**José Valim:** Yeah.

**Jerod Santo:** Well, yeah, and I think that would be a big boone. I mean, especially with things like Dialyzer, where if you're a casual user of Elixir, like myself, over the course of six or seven years, I didn't even know -- it rang a bell, but I didn't know what that bell meant. So having it built in, first-class citizen of Elixir, and just there doing its thing, and with good error messages and all that stuff I'm sure will be very helpful.

**José Valim:** Yeah. And you asked "Is that something that Phoenix generates by default?" Dialyzer has been part of Erlang way before I started programming in Erlang. And the reason why we didn't add it is because we don't think the trade-offs are worth it there. It's really a power user tool, and if you want to opt into that, do your research... Like, search your inner peace, so you can talk to the monk, you know...

**Jerod Santo:** \[00:38:11.06\] Right. Well, I've used Credo; so there's an analyzer tool, which I think is mostly a linter and a thing that's going to tell you "This is not the Elixir way" kind of thing. And that was fine, but also I guess got annoying for me as a solo dev... Because I guess for me, the reason why I've always been dynamic languages first and foremost is I just like my freedom. And if the tool doesn't provide major value, but it just annoys... I'm sure Dialyzer - I would turn it off probably very quickly, because it's telling me something's wrong, but it's not helping me know why it's wrong, and everything looks right to me... I don't want it. I don't want a tool that just gets in my way and tells me that my stuff sucks, but not why. And so I've traditionally ignored a lot of that kind of stuff, because I just want the freedom to write the code that I need to write to get the job done.

But if the tool can provide value, and help, and not be just a hindrance, just something I'm fighting against, then I'm here for it. So hopefully you guys strike that balance, especially with the 3% solution.

**Break:** \[00:39:21.02\]

**José Valim:** There's a story I'd like to tell.

**Jerod Santo:** Okay. I like stories.

**José Valim:** Yeah. About how all this started. So there is also the thing - similar to the machine learning work, the machine learning effort... It has been a while since I have been hearing about types. Or I've been very familiar with machine learning for quite some time, but the reason why we started was because certain events happened with machine learning; it was me meeting Sean, and Jaco, and we were able to form a band... And I actually tried to implement a type system in 2017-2018, and failed really quickly. And then Eric from the Elixir team, he also started implementing one. So Elixir sometimes can find type violations, because we have a very simple type system... But we very quickly ran into roadblocks. Like "Oh, how are we to solve this problem, because we don't have the proper background?" We're reading papers, and I think both of us -- we have a master; we have not gone further than the master. And I don't even have a master in computer science... So we were trying to figure out is, and we were basically stuck.

\[00:42:18.20\] And then somebody sent me a paper they wrote. It was their master thesis, \[unintelligible 00:42:22.04\] master thesis in Uruguay, about implementing a gradual type system for Elixir. And so they sent me an email like "Hey, we wrote this paper. You may enjoy it." And then I was like "Oh, this is very exciting. Would you be interested in working on this?" And they're like "Nope. We are out of the university... Probably never took be back." \[laughs\] And I was like "Oh, okay. That's a shame." But I went to the citations in the paper and the article, and then there was a lot of citations from Giuseppe Castagna, which is a researcher, very known; he has a lot of publications in the world of type systems.

So it had a bunch of papers, and I start reading those papers. And one of the papers that I found was exactly about the problem that Eric and I were trying to solve. And the paper was that "Oh, when you're implementing a type system, some languages have to solve this problem." And then I started reading the paper, section two, the introduction, and I was like "Oh, my God, this is exactly what I need. This is the answer. I'm going to solve my problems." And then in section three they're like "Well, we can express this problem as the following mathematical understanding of this and this, and that." But the mathematical understanding, and then section four, "Now we are going to prove that our mathematical understanding of the problem is correct." And there's a bunch of proofs, like three or four pages of proofs, and then it never comes back. It never comes back to tell me "Here's how you would actually implement this."

**Jerod Santo:** \[laughs\]

**José Valim:** And then I sent an email to Giuseppe saying "Hey, I read this paper, I work on Elixir, but I don't have the proper background..." And I basically told him this story, that his paper is basically -- I cannot understand it. And then he said, "Oh, I actually wrote this larger paper for implementers, for people who want to implement a type system." And then he shared that with me, and then we started talking if there was a way we could collaborate and work together. And that eventually led to us partnering with some companies... So a lot of companies have sponsored the type system work, as it happened. \[unintelligible 00:44:35.03\] Supabase, Remote, DashBit, Starfish... So many companies have been sponsoring, and then we were able to make it happen.

And the thing is that it's also about -- you have a lot of programming languages, so the story is over... But the other thing related to this is that there are a lot of programming languages, but we don't tend to think about this, but there are also a lot of type systems. Those types systems, they are effectively different in how they are implemented, in their mathematical foundation behind them... So how do you find -- if you have a bunch of languages, how are we going to find what is the proper type system for our programming language? And the approaches that we were trying before, they were ultimately incompatible. And if the type system is incompatible, it means that it won't be able to type certain features of Elixir. So you either have to say "Hey, if you're using a type system, you cannot write the Elixir that you write every day." Or you do not have a type system. And I wanted to avoid that. If we go into this place where there is -- maybe it's like an uncanny valley of gradual typing... Which is one of the reasons why I say the project can fail.

So what we did - one of the other reasons we had those three years of research is to going through a bunch of Elixir constructs, and saying "Hey, does this map well to this type system?" And this type system is called a set theoretic type system, and it looks fancy... But basically, what it means is that everything is implemented in terms of sets, in terms of unions, intersections... Things that you learn early when you're studying.

\[00:46:24.15\] And that's also something that makes me excited, because if the type system is implemented in terms of unions and intersections, there is also a hope that it's going to be more accessible. And it's funny - all this started because two masters students in Uruguay decided to write the thesis, but not only that, they decided to send me an email. If they didn't send me an email, maybe I would never have heard about it.

**Jerod Santo:** Yeah. So Giuseppe ended up helping you implement, or how did the thing move forward from you were stuck, you've emailed them back and said "Hey, this doesn't give me what I need"? He had a bigger paper... Did he continue to work on it with you, or was it kind of a handoff of that larger paper, and that was all?

**José Valim:** Yeah, so we got a PhD student... So the poor soul with two bosses...

**Adam Stacoviak:** The poor soul with two bosses... \[laughs\]

**José Valim:** Yeah. So Guillaume, you know, he's doing -- he did a prototype; he's the one who is effectively doing the work, I believe, of like "Oh, I get this Elixir construct; it maps to these, it maps to these." And then if he has a question, he brings to Beppe, and Beppe is going to be like "Oh, maybe you can use this theory." I just want to be clear, I am kind of assuming that's how they work... But -- and then Beppe is like "Oh, actually, this is a problem that we have not solved yet. We'll have to work hard. Or maybe we'll have to write new papers."

And what I really about working with them is that -- so there's potentially... So I like to ask a lot of questions, because the way I learn things is about -- kind of like trying to find the boundaries. That's how I learn things. I try to find, as much as possible, what I can do with that particular obstruction, and what I cannot do, so I can try to situate where and how I'm going to use it. And what I like about working with them is because this process of asking questions when we work with them is a collaborative process, where it's not like "No, you can do it/No, you cannot do it", but they're like "Huh... Maybe we can do that in a different way, that has not been tried before." And that's very interesting, because it's a learning experience for everybody. I definitely learned a lot... But the process of asking questions helps us approach problems in different ways.

One of the things that probably doesn't make sense - we can have a link to enter to talk about in the show, but we wrote an article for the Elixir website called "Strong Arrows: a New Approach to Gradual Typing", and usually, gradually-typed programming languages, they have to deal with some trade-offs in their implementation... Or you can do TypeScript... So TypeScript, for example, sometimes the type system is going to say "Hey, this thing is an integer, or a number", but at runtime, the thing comes out at a boolean, which should not be possible. So are you making the type system behave like that? Are you making the type system work a lot with dynamic? ...which is not very useful, because one of the reasons you want to work with a type system is so you're not working with dynamic types all the time. Or you have to introduce runtime costs.

So this was one of the cases where we were not happy with any of the solutions out there, and we were able to develop a new approach to how gradually-typed languages can be implemented, that as far as I know nobody has tried that before. And that's the exciting thing, and also the scary thing, in that we are trying something that I think nobody has tried. And maybe it means that we are going to find something really good, that really suits the language, but it may also mean that we're just going to make a bunch of mistakes, because it's kind of like a -- maybe somebody actually tried that, but they didn't write about it, because it ultimately failed. And you don't often hear about things that fail.

**Jerod Santo:** \[00:50:22.19\] Mm-hm. So you're 13 years into this Elixir project of yours... You've had some diversions - maybe they're not diversions, but you've had time working on Nx, you have Livebook... You've done some other stuff that hasn't been right on Elixir proper, but now you're back on the Elixir programming language work... You seem as excited as ever. I mean, you seem very enthusiastic. But I wonder, do you ever see an end to this road with you and Elixir? Do you ever feel like "I should do something else with my life"? Or is this your life project now? What's your take on it?

**José Valim:** Yeah, so do you remember which year COVID started? Was it 2020?

**Jerod Santo:** 2020, yeah.

**José Valim:** Yeah. So I've always kind of tried to see myself or position myself as replaceable. That's my ultimate goal. One of the reasons is because yes, I'm not going to be here forever, obviously... But also, I think in the sense -- it's kind of like a sense of like... You know, it's fewer responsibilities, and that's a very comfortable place to be at. It's like "Well, if I'm replaceable, it means fewer people depend on me", and that's very comfortable, because I don't like people depending on me. So a lot of that has happened in Elixir design as a language...

So Elixir doesn't change a lot as a programming language. It has been quite stable. I've said at this point, probably five years ago, that Elixir is kind of done, and the type system is potentially the only thing that is going to change that... And I think it's going to have ripples. So it's not like "Oh, we have a type system." I'm sure if we go all the way in, it's going to change some idioms that we have in the language. We may say "Oh, that's actually--" Maybe because we can type it, or also because after we start typing it, we figure out that that's a bad idea.

I like to draw comparisons with the code formatter. When we added the code formatter to Elixir, sometimes people would come with code and say "Look, the code formatter makes this piece of code ugly." And then when you went to look at the code, it was because \[unintelligible 00:52:44.22\] a function call inside another function call, inside another function call, with something happening inside that function call. So highly nested code. And then I'm like "Look, that code - I'm sorry to inform you, that code was ugly. It's just that you tried to -- you squeeze everything together, and maybe tried to fit one line", and the formatter is just telling you, it's like "Yo, this is not going to fly. You have to change..."

**Adam Stacoviak:** That should be an official response from that, from the formatters. Like "Yo, this is not gonna fly." \[laughter\] That would make programming more fun.

**Jerod Santo:** "With love, José."

**Adam Stacoviak:** "With love", for sure.

**José Valim:** Yeah. And I think the type system is definitely going to have some of that. We are going to learn things. Similar to the formatter -- it's not that the formatter is perfect. The formatter has limitations, and you're going to have to. And we adjusted as a community to that. And the type system is going to be more, because it's not only about opinions and styles, it's going to be about actual software correctness.

\[00:53:45.05\] So yeah, so there is this whole journey happening right now, which is going to take quite a while... And we started the whole machine learning stuff, but the machine learning stuff - my idea for things is like... Well, I'm involved in machine learning, but I hope eventually I'm going to find a way to hand it off, and have that whole thing continue without my input.

My kids, they're five and nine, but I'm eventually hoping that all my projects go to university, if you know what I mean... So that's how I see myself. And the funny story - the reason I asked for the year is that the year before COVID, or maybe even the year that we had COVID, is that I was really at a place where I was like "Hey, am I done? Am I close to done? Am I close to really making this 20% of my time? Am I close to making this 50% of my time?" And I was really considering that. And then when that happened, when I was thinking about that, it was when I got the mail from the university in Uruguay that led me to types... And it was when I've met Sean, and we started the machine learning work... So it was really funny that when I was thinking like "Hey, am I close to done?", life comes like "No! Boom!", just slap a share on my back. And it's like "You have 10 more years of work ahead of you!" \[laughter\]

**Jerod Santo:** Yeah, good timing. Good timing indeed. So you've been working on the type system with the team for a couple of years now... How far do you think you are from it being like we can just call it "We have a type system"? Are we talking another year, another five years? Just roughly what are you thinking?

**José Valim:** It's more like five... Because we are being very intentional. That's the word I want to use early. Intentional. We're being very intentional, we're being slow on purpose... I wanted our paper to be called "A gradual, gradual type system", but it was rejected...

**Jerod Santo:** Oh, that's a good name.

**José Valim:** Right? Because we are gradually introducing everything; the gradual type system, and so on. And because of that, I think it's going to -- it should take some time until we do everything. I also like to say that it's kind of like -- I use this analogy a lot, of the boiling frog... I don't know if this is true, but in theory if you put the frog in the pan, and then if it's hot, it jumps out, but if you start warming the temperature... And I think that's kind of how we need to approach this; if we just add the type system all at once, it's going to be a big shock to the community. But if we can do that in steps, we will all be happy like boiling frogs.

So I think it's more like five years. Not that we are going to have it in five years, but the whole process being delicate, as we are being, is going to take about that time. And I talk about research, for example, and we had to research a couple things... There were some things that we've identified that we can improve over the status quo.

So there's one thing that we did not do, for example, that for us is out of the scope of the type system, which is - so in Elixir we have processes, and you can send messages between those processes. I said since the beginning, I am not interested in that, because very few people -- they are sending messages directly. Everybody's using an existing abstraction, like GenServer, or tasks. So I said I'm not honestly very interested in that part.

So there are things that we didn't do, and maybe in 10 years, maybe somebody will have cracked that problem in a very interesting way. But also, they are things -- we have behaviors today, like an agent server, and we can kind of add types to that thing... But it's loosely defined. So we are bringing a postdoctorate to think about the problem of how to type behaviors. And this is going to be somebody's postdoctorate, researching the theory on that for maybe a year, and then figuring out a proper implementation.

So by the time in five years when we're like "Oh, Elixir is in a good with the place type system now", somebody says, "Hey, I have this brand new theory that is going to make behaviors in Elixir much better than they are right now", and then they need to consider introducing it.

\[00:58:04.23\] So I was just saying very naively some time ago that maybe I would retire when I'm 40... And I don't mean like retire like I will stop coding, but it's like, coding does not need to be the main driving factor of my life. I won't be waking up for coding anymore, let's say, professionally. I could try to find something else to do. But yeah, I don't think it's going to happen. I feel like I should probably revisit that till 50... But I'm also like, "Man, 50 is 12-13 years ahead", and I'm like "Maybe 45 is going to cut..." But I think 45 is not going to cut it. So somewhere there.

**Jerod Santo:** Yeah...

**Adam Stacoviak:** Speaking of decades and how you think about things - we had a great conversation about a 100-year programming language called Hare; you may have heard of it. And you mentioned maybe in a decade this researcher, this postdoctorate can research this, and in five years -- you just sort of laid out, as if knowing or thinking that Elixir will be here in a decade, and be relevant in a decade. How do you how or how does the community that helps you support this language, and those folks who are sort of thinking "Okay, let's get a postdoctorate to do research" etc, how do you all think about the length of time that Elixir will be relevant and useful? How do you think about that?

**José Valim:** Oh, I think it's a -- yeah, I'm going to say something that... I think the answer to that question is not technologically related at all, actually. Unless we have a big shift in technology, where it's like quantum computers are viable, and then everything that we use is kind of gone, and we are starting fresh. So assuming that there is no -- well, maybe AI is the big change that changes everything, and then the good programming languages are going to be the ones that are good for AI... Maybe something like that happens. But assuming that there are no major changes to the industry, or if there's a major change, we can survive to them, I think the relevance of a programming language is mostly building a community, work with the community, and marketing, more than technology. The technology - so we use the technology, the Erlang virtual machine being great, as the motivation; the things that attracts and excites people. But after I think you do that initial jump, it's all about the community being self-sustained, continue being excited about what they do, what they build, how they interact with each other, than any technological aspect... If that makes sense.

**Jerod Santo:** There could be some truth to what you said with perhaps languages "winning" if they are better suited for code generation. In fact, I think Natalie Pistunovich on Go Time has a talk about that, where she thinks that Go will eventually eclipse Python in usage, because it's so well suited for cogeneration. Just the aspects of Go make it very good for AI-generated code that's not bad code. And so I don't know, that's obviously just an idea.

That makes me think about tooling right now. As an Elixirist, I feel like the state of the art GPTs are not very good at Elixir. I find them better at JavaScript. Those are the two languages that I write the most. And I'm curious if you have used them, if you agree with that... Because it's obviously a very successful language. It's more successful than 99% of the languages ever invented, but it's still a niche language in the scope of the industry today... And so much so that when I tell people I write Elixir, some people have to ask me what that is. And I'm happy to answer it, but you know, it's somewhat obscure, and I feel like the amount of blog posts and Stack Overflow answers and all the stuff that the GPTs slurp up must be less than JavaScript and TypeScript... Because it's not very good at Elixir yet, in my experience.

**José Valim:** \[01:02:09.22\] Yeah, that's the thing... So I think we are very early on the AI side of things to be able to say what is a good language for AI. Because I think right now, a lot of the things are dictated by the corpus size... But it's not yet clear, when we are coding in the future, if Elixir has not passed the threshold of a good corpus size. It may just have been diluted; we don't know that. And I want to go on another tangent. I'll come back to it later. So I think it's still unclear that's the case.

For example, I have heard last week somebody telling me that although GPT-4 is good for JavaScript, they were having a really bad time using that for things like React and Next... Because things have evolved through time, and for complex problems it would frequently give mixed usage. Like "Oh, a pattern that was using this React version, but not on this one." So maybe if we had things that were fine-tuned per React version, or for Elixir, we could have a different experience.

But I also think that -- I feel like everybody kind of... I heard people saying "Functional programming languages, they are going to be really good for AI, because there is less state, there is less assumption being passed around", which makes sense. But I think ultimately, we really don't know. It may mean that -- other people say typing is also good, because then you can go into this loop with the AI, where it generates the program... And they're like "Yo, this doesn't type-check." So if you can do more static analysis... Right?

But maybe there is a chance. Maybe the best AI language is not necessarily textual. It's less based on the textual mode; it's just that the textual mode and the LLMs is what is the hot thing right now. So I think it's still a very open problem, and I wouldn't try -- yeah, I wouldn't try to guess.

**Jerod Santo:** Sure. We're pretty early on in that.

**José Valim:** Yeah. Maybe other people, they can have a pretty good idea, but I'm also new in the machine learning space to understand how things are volatile... Because now we are all riding on this architecture, on the transformers architecture, that everything's building on top... But what if there is a new architecture? So we are talking about "Oh, there are changes in computing." But you can also have a major change inside AI. So if there is a new architecture that changes everything, then maybe this conversation goes in a completely different way.

**Jerod Santo:** Well, I agree with that. I think probably it's too early to tell, and obviously people will try to decide what makes a good programming language, like you said, for transformers, and it may not be true for the next particular platform shift, if there is one.

With the state of the art right now, as Elixir community, have you considered from a marketing or a community perspective having a fine-tuned - or I don't know, RAG-ed... Like, an all-knowing Elixir chatbot, that would be awesome in Elixir, because we made sure that it is by doing certain things that we can do.

**José Valim:** Yeah, that's a great question. And I have thought about it. I have built some prototypes about the best way to go about that... And there's another funny story here, which is that I took some holidays early December, and then before the holidays, there was the - Open AI, they had an event where they announced GPT kinds of things... And I've been also thinking about AI in the context of Livebook. And then before I went into holidays, I told people "Hey, I've been thinking about this, I've been thinking about what Open AI announced, and I probably think the new APIs they provided for completions - we should build something on top of that."

\[01:06:09.28\] Because even if in the future Open AI is not the winner, or people don't want to use a closed source model, you have 100 different solutions which adds Open AI APIs to other models. So it's like their API -- whatever we think about it, their API is kind of going to be the winner. So it makes sense to build against them. So I was like "Let's build something against Open API."

And then I go on holidays, and I come back from holidays, and apparently the CEO was fired, and then they come back, and then there was -- like, in the two weeks I was on holidays, and then I came back, I was like "What happened?" So I was ready to go. And then it put me back, like "Okay... Take a deep breath."

**Jerod Santo:** Like, relax. Yeah.

**José Valim:** It's like, maybe not quite. So something that I want to do... I don't remember who did it; I think it was one of the companies that start with Co. What they did is that they generated embeddings for all of Wikipedia. So if you want to do something, you can just get the embedding, insert the embedding. It's something that I have been thinking a lot about. What if we could generate embeddings for all the documentation that we have in Hexdocs. So people can very easily start building their own indexes, their own RAGs, and this kind of stuff.

**Jerod Santo:** Right.

**José Valim:** So we started exploring these, we already did some groundwork. We had some students at the university of Krakow studying different embedding models that could work. So it's something that we have been thinking a lot about, like maybe having an official Elixir GPT... But it's still not sure if it's going to be something useful. We need to find the line between useful and gimmicky. And I think that is still very hard for a lot of the AI stuff. But maybe gimmicky is fine. That's how people get excited. But we need to be aware of where we will be investing our time. And maybe this year we are going to have something going in this direction.

We also have Robert from -- we have a machine learning channel in the Erlang Ecosystem Foundation. I know he fine-tuned some code completion models for Elixir... And we plan to evaluate those and give those a try as well. So I think we can do exciting things... But yeah, I feel it's still very hard to draw the line between what is going to be useful, and what is going to be gimmicky. And that makes me a little bit uncertain of how I'm going to prioritize. Because there are a bunch of projects we can work on and improve the ecosystem... So is that the best use of our time?

And this brings me back to the thing that I said I want to talk about, about the corpus size... Which is that I feel that starting a new programming language is actually becoming harder, because -- so there are a lot of things that got easier. For example, everybody who is starting a new programming language, they are going to use LLVM. So a huge part of the compiler stack got easier, for sure. But the requirements for you to have a programming language that people are going to consider useful - they have just over the last decade, potentially a bit more, it feels it has kind of ramped up.

So for example, before we were like "Oh, we want to have a new programming language. We write a new programming language", you would share it on the mailing list, you would put it on GitHub, people would give it a try... And I think for example one of the things that Go was very influential was making tooling first-class. So today it's like tooling has to be first-class. There is no discussion about that. And I think despite everything that happened that led to Go adoption, I think having a good tooling since the beginning definitely played a factor.

\[01:09:58.29\] So yeah, you have to create a language now, and the tooling. And most likely, you need a package manager, right? And I to use, again, Go as an example. Because Go thought they could not have a package manager. And if there is a language that could potentially not have one, it's one that is backed by a big corporation. They're like "Well, it does happen that we need a package manager." So you also need a package manager.

But the other thing that I like to say is that with the language server protocol you would think that that would help programming languages. And that does help programming languages, but it kind of makes editor integration table stakes. So now everybody needs to have editor integration. If you don't have a good editor integration -- because it made it more accessible, now everybody has to use it. Before, when I started with Elixir, nobody really cared much about editor integration or about the language supporting it, because a lot of programming language -- you had a bunch of editors, and all those editors, they had kind of spotty integration with the language. So people were not like "You need to have a very good one!" But now you need to have a very good one; you need to have people and time invested in having a very good language server integration, and an IDE, and this kind of stuff.

And now with AI, it really becomes a playing factor, a big playing factor. You need to have a big corpus size to train the AI. But how are you going to do that if you're just starting out? So it's kind of like it has become harder, but at that point you could throw work at it. But if AI becomes such a big player on developer tooling, how can a new programming language go cross that chasm, that gap? And I don't have an answer for that.

You just said Elixir is still kind of niche, but I think we're lucky, because we have enough. We have enough for it to be there, to have a corpus size that is at least there. And that's one of the things that worries me about, well, if AI is not going to be decentralized, then it means that me, 10 years ago, if AI is not decentralized, myself 10 years ago maybe I wouldn't be able to start a new programming language nowadays. Right? Because I can't customize the AI.

So I think it's very important for us to have open source AI tools, because it means that if AI becomes a big factor, and you are a small programming language, there is at least an option for you to make a dent, for you to participate, compared to everything being closed and hidden somewhere.

**Adam Stacoviak:** I know how it works. I know how we get there.

**Jerod Santo:** How?

**Adam Stacoviak:** I think it's we assume - I suppose not we; you assume a little bit that developers stop solving problems, because artificial intelligence is part of the game. Now, I agree that if we rely on them more and more, that assumes that all problems have been solved in current LLMs, and that status quo is long-term status quo. And I think that's just not going to be true. I think that developers will eventually have problems with whatever can be done with what is status quo, and what is supported by AI. That if we as developers stop solving problems, then a new programming language cannot come around. Because Hare, for example, is a 100-year programming language, and we talked about that a little bit earlier, and we talked about it on this podcast before... But that's an example of where someone in particular sees a different problem, and does not rely fully on artificial intelligence to generate their code.

\[01:13:52.00\] So if developers at large - and I mean 99% or more - rely on artificial intelligence to do all their work, then that would be a problem. But there's still that 1%. And that 1% can still be influential. And there is still a path forward into the future LLMs, and the training, and the embeddings, as you mentioned... I think if for some reason the artificial intelligence locks us out, maybe then we have nothing new. We only have what's existing.

**José Valim:** Yeah, I think that that's a very good take. And I wonder, if we get there, what are the dynamics? Does the 1% need to be -- like, whatever we continue evolving, does it need to be really good for people to justify "Oh, I am dropping my AI tools to learn that 1%, because it's such a big boone that it's worth dropping some of the conveniences"? So I think that's kind of one of the main points... Which isn't really AI-specific in the sense that it has always been a trade-off in adopting new technology, and I think that's kind of why I talked about the editor tooling. The fact that now everybody should have editor tooling - that's no longer a differentiating factor between programming languages. Because it's kind of table stakes.

**Jerod Santo:** Right.

**José Valim:** So yeah, that's a very good point. If we continue being able to innovate, and continue finding things that are worth more moving to and exploring, then yeah. It's just, does it need to be a much bigger gap right now? And if it is, what is this type of investment and time you need to put into that?

**Jerod Santo:** Sure. Well, this is how a disruption happens though, is not something comes by which is marginally better at one thing, and also satisfies all the table stakes... What happens is something new comes out that is radically different than everything else that's come before it, and it's 10x or 100x better at one particular thing that everybody cares about. So for instance, it's 100 times faster than every other programming language, but it has zero AI and tooling integration, and people are like "I don't care, because I want the 100x improvement." Or it's 20 times more productive. You can write three lines of code and end up with facebook.com.

**Adam Stacoviak:** Yeah, you always default to facebook.com.

**Jerod Santo:** Well, it's a huge application.

**Adam Stacoviak:** And I understand why.

**Jerod Santo:** It has so many features. And everybody knows about it. But I was gonna use Twitter, and then I was like "No. It's just been losing features all year." You know, it's way more productive in the way that it works. And so therefore all the other things don't matter, and I'll put up with not having any of them, because I want this one thing. And then slowly, over time -- and everybody laughs at it. "Oh, you don't even have VS Code integration? No one's ever gonna use that." And this is how it always happens. We just don't know what that thing is, or what it will look like. And maybe it won't. Maybe it'll just be incremental improvements... And those are going to be harder to stake a claim, because there's so much surface area you have to cover, like you explained, José.

**Adam Stacoviak:** I also agree with what you said before about Elixir with community, that it won't be a technological thing that keeps Elixir being relevant for years. It's community, it's non-change, non-major paradigm changes in the tech stack... And a couple other things. And I think that's true, too. This is why I think, essentially, what we're saying is that toolmakers need to remain toolmakers, not just AI implementers. That whatever the thing gives us, we must just assume and take and use, and that we must always keep thinking for ourselves "Is there a better way?" I think the future will be largely human-made, and maybe augmented by AI at some point; maybe fully augmented, if we ever get there. I'm sure we will, because that's how progress happens... But for the foreseeable future, at least in my lifetime, I think humans will have a vested interest in innovation, and assisted by some other thing like an AI.

\[01:17:56.11\] And I think if we have tiny communities, or indie conferences that people can still get to, or Slacks to be a part of, or just groups to be a part of, where human to human interaction and agreeance on challenges and solutions and research and all the things is still a thing, I think we'll continue to have innovation that really maps to where we need to go and what we need to do, and it won't be stopped or encumbered by "Does AI support this or does AI not support this?" I think we'll force whatever is necessary to have human advancement.

**José Valim:** Yeah, I like that idea a lot. And I think it kind of -- so Jerod was saying "Well, you need 10x improvement, 20x improvement." But a lot of people end up migrating to Elixir, and I don't think Elixir is a 10x improvement over anything. Maybe between our choices of programming languages there is nothing really that is 10x, right? So maybe for some reason I am overvaluing the tooling. The tooling that is there only to support this, but not do all the work. You see what I mean?

**Jerod Santo:** Yeah, it's on the margins. I mean, obviously, I say 10x or 100x... It doesn't necessarily have to be those factors. But if we took something like Rust, for instance. If you're a C programmer, and you've been writing C programs, and here comes Rust, and it's offering security guarantees that you'll never have with C... And Rust now is established, and has all the tooling and stuff, but imagine it didn't, but it still offered that. You might say "Yeah, I'm gonna do Rust, because it's so much better at this thing that matters, that the small stuff doesn't matter quite as much." That's just one, for instance.

**José Valim:** And which you can't really quantify properly, right? The 10x, the 100x doesn't even matter at this point, because you really can't quantify it. And in Rust's case - I mean, there are other trade-offs there, but for the bugs... Like, going back to typed systems; it's like, it is provable that it is avoiding those kinds of bugs, right? So yeah.

**Jerod Santo:** And the reason why I say 10x is because when we do talk about the innovators dilemma and disruption theory, it usually is 10 or more, but what it is is it's 10x less expensive. Usually, there's one thing that makes it so much cheaper. And with programming languages we don't talk about that, because everything's free and open source at this point. Maybe adoption, and labor, and your investment time matters... But most disruption comes because something is radically different, and it's worse than the incumbent, but it's 10 or more times less expensive. And so you'll put up with worse, because you're paying so much less. And that's -- I'm just taking that whole dichotomy and applying it to programming languages... Which doesn't exactly fit either; just food for thought.

But I don't know, why did I switch to Elixir? I was a Rubyist, and I appreciate the freedom and dynamism of Ruby, and I saw that in Elixir... And I liked the speed of Elixir compared to Ruby. Maybe it was 10x faster, I can't recall... But it certainly had, especially in web server performance, very impressive numbers, with very similar-looking code. If you take it at face value, once you get into it, you realize it's not all that similar at all, but has some shared pedigree with a language that I love... But it was going to be a lot faster for me in production. And so that was why I switched, plus Chris McCord convinced me.

**José Valim:** Yeah, I guess I'm contradicting myself over all this episode, because --

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** A little bit...

**José Valim:** Because yes, about those comparisons to Ruby, there are several cases about people migrating... And usually, it's usually a 10x on machine capacity. So people are like "Oh, we went from --"

**Adam Stacoviak:** Cores. Wasn't that cores? It's all about cores.

**José Valim:** \[01:21:53.02\] Usually machines, it was like "Oh, we were deploying 80 machines, and now it's four. And by the way, it's four because we are over-provisioning, because we are worried that we went too low." That's usually how the story goes. So you're actually right, there were - in particular to Ruby, there are 10x.

The other thing that I'm thinking right now - so I'm enjoying a lot this conversation... The thing that I'm thinking right now is because I was asking, why I'm so worried about tooling. Because I was thinking like "Oh, the tooling is so hard; it's hard for a programming language to start." And maybe it's not that it's hard for the programming language to start, but maybe it's for the programming language to cross a certain step throughout its evolution. You see what I mean? Maybe Elixir, the reason why I think so much about tooling is because of course I hear people talking about tooling. And maybe it's at a point in its adoption that in order for that to make the next leap, tooling plays a crucial role, and that's why I am indirectly putting so much attention on tooling, and thinking about AI, and thinking about \[unintelligible 01:23:00.07\] protocol, and thinking about types, because that may be part of the journey there. I don't know, it's definitely food for thought. I thought I had this figured out, but I clearly don't...

**Adam Stacoviak:** Well, sorry about that...

**Jerod Santo:** Well, I mean, you could draw lines to civilizations as well, at different stages of civilization, where you have -- you know, the things that we care about and are concerned about, for instance in the United States right now, is not basic sanitation. Right? We're at the tooling phase of country. Where we are - obviously, in some cases now we're regressing. We do have sanitation problems. But you know, we've gotten there. When Elixir first started coming out, you were probably worried about "Do I have the data structures right?" and like "Hey, why can't I enumerate over this list the way I want to?" Those are core features of a language. And you're established, and you're there, and now you're worried about things that are higher up the stack, like tooling. And playing that game is how you make it better now. And so at different phases, different things matter, and that's probably why you're so concerned with tooling, because that's where Elixir is. I mean, it's a great language; it's stable, it's fast, it's productive... I mean, it's all the things that you set out to build, in my opinion... And so congratulations on the success, not just yourself, but the whole community. And now it's like "Okay, how do we take it better from here? Well, apparently, we gradually, gradually add types to it." And that's where you're at.

**Adam Stacoviak:** I actually did some math... I couldn't help it, because I was thinking - you know, when you think about directors, or particular actors, you think about Tom Cruise, for example. I think Top Gun was his all-time -- Mavericks, of course; the latest one. It was his top-grossing movie of all time for himself, right? It trumped every other -- and sorry, Jerod; I used that word trump. It has exceeded all past records for Tom Cruise as an actor in a movie. And so I was like "Well, what has José done in terms of listenership on the Changelog Podcast Network?" Because you've been on Practical AI, talking about different things, you've been on this show, you've been on now Friends, you've had Chris along with you to sort of talk through some things... So collectively, you're responsible for at least 210,000 listens on our podcast.

**José Valim:** 210,000.

**Adam Stacoviak:** Yeah. Across your six shows. Now, the seventh one that you're on right now may take you into the 250 and beyond...

**Jerod Santo:** This could be your Top Gun Maverick right here.

**Adam Stacoviak:** This could be your Maverick right here, yeah.

**Jerod Santo:** \[laughs\]

**José Valim:** Well, you know the title, "Elixir is officially a gradually-typed language."

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** That's right. "Officially", in quotes.

**Jerod Santo:** We're gonna get that virality going.

**Adam Stacoviak:** \[01:25:45.07\] I do have one more - and maybe you answered this, but I'd like a more direct answer if you have... And I think you alluded to some things, or the challenges at least. So to Jerod's point earlier, AI as it's known today, GPT, ChatGPT and others are not that good with assisting with Elixir programming. And so I guess the question is "What does it take to make it good?" You mentioned embeddings earlier, you mentioned documentation being more readily available... What does it take from a, I guess, a leader in the Elixir world to enable LLMs to be better? What role do you play in that journey for them to better consume the documentation, and better know how to do programming in Elixir to help folks like Jerod and myself, or our team or others to really become better and more professional in Elixir? Versus just like anytime Jerod asks ChatGPT for assistance, it's just like "No, it's not good. So just quit."

**José Valim:** You know, so if I got the question right, I think we did our work correctly, at least from the language point of view, in the sense that documentation was always first class. So documentation is very easy to access. So if what you want to do is to configure an LLM, it's actually very easy to access that programmatically, send that, extract information... And we talked about -- one of the things that you also have to do is try to get understanding from the source code, so you can find "Oh, this code is using those modules; it's importing those things." And those are things that you can do relatively easily in Elixir. We can most likely prove that.

So I feel like we have the knife and the cheese... It's just a matter of somebody going in and cutting the cheese. Yeah, I feel like the foundation is there in terms of having this information structured, but somebody needs to feed it somewhere. But again, we can go back -- like, maybe it's the corpus size. Maybe ChatGPT indexed hexpm already. Not sure. Maybe it has done that. I don't know. I don't know if I can send a letter to somebody, "Hey, please index my website." Or maybe it's a matter of -- so one of the things is that Red Monk, they release twice a year kind of a graph plotting in GitHub against StackOverflow. And I think they're having the most popular languages according to GitHub and Stack Overflow, and then there's a linear thing in the middle... And it's very funny, because Elixir is high on the GitHub side, but quite low on the StackOverflow side. And one of the reasons for that is because we have always had the Elixir forum, so that may be one of the things that --

**Adam Stacoviak:** Right. Where's the knowledge? Where's the back and forth from the community?

**José Valim:** Yeah, the knowledge is in the forum. Is that thing being indexed? Because we know Stack Overflow is, right? So ironically, that's one of the reasons - I think; I may be misquoting - that Red Monk, they are considering removing Stack Overflow from their plots, because I think it has been losing relevance in the last years... But you know, maybe in the effort of trying to have a closer community, where everybody can engage with each other, where I'm active in the forum - and I would probably not have this patience if I was dealing with Stack Overflow... We created our community, a special place, but it's not known.

So yeah, so I think it's still too many unknowns. But I think at the core, we unwillingly did a good job, because we were worried about documentation being accessible, documentation being first class... So we did that, and we promote people to write documentation; lots of documentation. So there is a lot there. And yeah, maybe RAG is going to be the thing that is going to be enough. That's one of the hopes, going back to -- you know, we want everybody to be able to use this. If RAG is good enough, then a lot of people would be able to augment their ecosystems without depending on Open AI, or whatever. But we are still evaluating.

**Adam Stacoviak:** \[01:30:04.09\] When we talked about sort of the long-term future of Elixir, artificial intelligence, and that sort of larger topic of how long will it be relevant, and can AI generate it well, that whole conversation - this makes me think of this necessity to not have a blank box that is whatever AI is. Because just like you said, "Who do I send a letter to to index my stuff, so that my very relevant language today remains relevant tomorrow? ...because tomorrow says AI will continue to be more and more relevant to developers in their journey to develop." Right? So who do we send the letter to? How do we know? Well currently, the status quo of AI is for the most part a black box. Obviously, open source LLMs and indexes have become more and more pushed because of this challenge, but I think this illustrates and highlights really the long-term challenge, because even you can't say for sure why what was indexed was indexed for the Elixir corpus, whether that's the forums, whether that's the documentation, through Hex documentation, or whatever. It's unclear to someone like you how to enable ChatGPT or the likes to better support Elixir assistance for developers using those things to use this tooling. And that's just not cool. Because long-term, we need to have inroads into those places, so that we can be part of the future if AI is predicting how we'll get to the future.

**José Valim:** Yeah. And I think - yeah, it's too early. I think we're going to improve a lot. I was listening to a podcast today where Sam Altman, who was saying they improved ChatGPT 3 about 40 in the orders of magnitude in terms of size, performance, and things like that, since they started. I think 10 times for ChatGPT 3.5. And I think open source is going to catch up, and I think that's the hope. But yeah, it's also - we go back to when we were thinking about Livebook, because what I want is for open source to win. But when I'm building a feature for Livebook, I need to build the best feature for the users. And I can use ChatGPT 4, and I can immediately see the results. And they are really, really good. I can use other tools off the shelf - they are not as good.

So we are a small company, we are doing open source... So my options, if I have to choose for my users, is going to be ChatGPT 4, because it gives me the best result, for the least amount of effort. I just -- it's there. And this is -- so we're back to my indecision about investing in this stuff; that's because I want open source, I want things to be open source, but right now the quickest return of investment is GPT. And then I am in this contradiction space.

But yeah, I think it's just patience. We have to be patient. And I think probably in one year -- and the whole thing, it's crazy to think about... It's that this thing has been happening for a year only. It appears that this thing has been out for so long... But it's a year. And I think if I'm back on the show in a year, we may potentially be having a very different conversation. So yeah, we'll see.

**Adam Stacoviak:** Do you have any fear about this? Even as you responded to that, you sort of had some -- I wouldn't say trepidation in your voice, but you sort of had some uncertainty. Do you have any fear and uncertainty and doubt, the FUD that people sort of pass around - do you have any fear about this?

**José Valim:** No, not really, in the sense that I consider myself very lucky, very fortunate, or whatever; or blessed, however you want to say it. I'm not being overconfident here, but more like thankful that I think whatever happens to me, it's going to be fine. I truly believe that what's going to make Elixir survive is the community, more than whatever technological changes... Unless there's something very drastic.

\[01:34:11.15\] I talked to my father about this, about investments. So when Bitcoin wasn't that crazy, and then my father is like "Oh, have you heard about this thing, that if you put your money there, people got this huge return?" And then I always told him "Father, if we got to know about it, it's because it's too late." Or if something happens, it's like "Oh, father, if something happens, it's because -- if something goes this bad, it's because it's going to be bad for everybody. So don't try to fight it."

So again, unless there's a very major change, I think I'll be fine. So I'm not worried about me, in the sense I always think more about -- it's more about ideals. Again, I like to say, well, me 10 years ago - that's where my trepidation is if things go closed source... And those things, they happen by -- we don't see the results. I think another polemic topic about this, it's like "Hey, I use Chrome. As soon as Chrome came out, I immediately --" Today I don't use Chrome anymore. But as soon as Chrome came out, I immediately swapped to Chrome. And if I had known that this would lead to a point where Google is in this position where it has a lot of control over the browser, over the web, and over how we use the internet, 10 years ago I would probably not have used Chrome, if I could have seen it. So I think that's where my trepidation comes from, of things being closed source. The developer experience...

Another example today -- Elixir was the first programming language that GitHub had the new code navigation things that were provided by the community. So there were some programming languages, and there still are, where they have very good navigation and exploration on GitHub UI. And the path for that, to get that feature, to get that behavior was - and I'm very thankful that the GitHub team, they discussed with us and allowed us to do that... But that's called source. And GitHub plays a major role over how developers use.

So it all comes back to this idea of if you want to provide a good experience for your users, how much of that is behind something closed source that you have no control, and you are depending on somebody paying attention to you, or you having a contact, or me having a name, because I was very active in the Rails community that GitHub uses like 10 years ago? Those are the things that -- but I feel lucky, but it worries me. How much is being closed? How much is going to be out of our control? And then the trepidation, I guess, is "What does that matter for the small José out there, who wants to start building his thing today, and they won't be able to?"

**Jerod Santo:** \[01:37:15.26\] Well, you killed the vibe there, José...

**José Valim:** Oh, thank you.

**Jerod Santo:** \[laughs\]

**José Valim:** That's me at parties, you know?

**Adam Stacoviak:** Not invited. Just kidding.

**Jerod Santo:** Funny. Alright, well, let's... Should we try to close on an up note, on a high note?

**José Valim:** \[HighNote 01:37:35.25\] Was that...? \[laughs\]

**Adam Stacoviak:** Wow. I had no idea.

**Jerod Santo:** I think we should end it right there, Adam. Don't you think? We end it on a high note.

**Adam Stacoviak:** That's cheese and knife tactic there. I like it.

**Jerod Santo:** That was.

**José Valim:** Do you want higher? I don't think it will be good for the listeners.

**Jerod Santo:** I think that was plenty high enough for me. Adam, were you satisfied with that?

**Adam Stacoviak:** That was a high note, literally. And I dig it.

**José Valim:** Yeah, like, trying to put ourselves back into high note. We were going back to this discussion, it's all about open source. Right? And I think if we can continue investing, if we can continue betting on open source, and open source models... As Adam said, I think you had a very optimistic perspective there about why we are still investing in tooling; we may still be ahead. This may be a horrible idea...

**Jerod Santo:** Oh, I love those.

**José Valim:** ...but I started -- because my arms are hurt, I go back to reading more... And I started reading Dune, the book. And at the very beginning, it has a quote, which may make the mood... Even worse, okay?

**Adam Stacoviak:** Oh, gosh...

**Jerod Santo:** Okay, okay...

**José Valim:** But let me give it a try.

**Jerod Santo:** Let's try it, okay.

**José Valim:** I've marked it, because it was -- so it says "Once men turned their thinking over to machines, in the hope that this would set them free, but that only permitted other men with machines to enslave them." And how old is Dune? It's probably 70 years old, or something like that... And I think -- maybe it's some nice food for thought. Maybe it's some horrible food for thought. But when I read that, I was like "Huh..." That made me think. Especially with everything that is happening with AI right now.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** It's on point.

**Jerod Santo:** I liked it. I think maybe we should just end it right there. Just let that be the final word.

**Adam Stacoviak:** Yeah. I dig it.

**Jerod Santo:** No need for further doom and gloom. We've already got it. José, it's always fun, on your high notes and your low notes...

**José Valim:** Fun...! \[laughter\] Air quotes.

**Jerod Santo:** I'm looking forward to May for Elixir 1.17, for your 1% to 3% solution, deploy it out there into my code... I'm looking to make my code a little bit better, so thanks for all the hard work you've been doing on the language, and all the things.

**José Valim:** Thank you. I am a very big proponent of under-promise, over-deliver... So I'm hoping it will be way past 3%, but - that's what I'm going to promise. The 3%, and... Yeah, I hope people will try it out. And yeah, as Adam said, we'll continue improving our tooling, and that's what we can do, for sure.

**Adam Stacoviak:** Very cool.

**Jerod Santo:** Alright.

**Adam Stacoviak:** It's been awesome. Bye, friends.

**José Valim:** Alright.
