**Jerod Santo:** I'm joined by Justin Searls. Back for the fifth time. Holy cow.

**Justin Searls:** Five-timer club.

**Jerod Santo:** You should feel honored, you know?

**Justin Searls:** I do feel honored.

**Jerod Santo:** \[laughs\]

**Justin Searls:** I have friends who haven't invited me to hang out more than three times... So five is an honor.

**Jerod Santo:** Well, do your friends put out weekly conversational shows? Because maybe they'd invite you over more often.

**Justin Searls:** Right. Well, yeah, they don't have the financial incentive to keep pumping out new content.

**Jerod Santo:** That's true.

**Justin Searls:** But the fact that I can't shut up probably aligns well with your interests.

**Jerod Santo:** It does. I like when I get you wound up and rolling, and I just sit back and have a drink and listen to you go. So that's the goal here...

**Justin Searls:** Oh, God.

**Jerod Santo:** A little inside baseball for our listeners... This is Changelog & Friends, this is our talk show format. Prior to this I had a different idea -- we have tons of ideas around here, we rarely execute on them. Most of them are just bad. But once in a while we have a good idea that we still don't execute on. I think I had a good idea last year; it was a focused show about -- I don't know if you wanna say the craft of software development, but really the practice and the nitty-gritty decision-making. And it was gonna be one-on-ones, recurring guests, and I wanted to call It Depends. I think we even purchased itdepends.fm, because that's just a great name for a podcast, I think.

**Justin Searls:** It is.

**Jerod Santo:** We decided not to do that. We decided to do Changelog & Friends instead. And one of the reasons is because a talk show format - this is a superset of an It depends. And so when I was coming up with that concept, I was like "Who would be a nice recurring guest?" and I made a short list, and your name was on it. When I think about people who think deeply about software development, the decision-making process, the architecture, all of the nitty-gritty, and just bikesheds it all the way down. You were at the top my list, Justin. So...

**Justin Searls:** I'm slippery. I refuse to take a stand and stick with it, and I refuse to pick a camp and promote it. I think it's just my religious upbringing that I'm just full of self-doubt. And that's what drives me forward, I guess.

**Jerod Santo:** Which makes you a perfect guest for a show called It Depends.

**Justin Searls:** That's right.

**Jerod Santo:** Because you're never going to actually pick a side. You're gonna slip around.

\[00:02:52.09\]

*Jerod here in post. Another reason I had this show idea is because of just how often people say "It depends" on our podcasts. In fact, we've put together a little montage for you only going back 15 or so episodes. Take a listen.*

\[00:03:09.10\]

*"The answer is it depends. It depends. It depends. There's a big "It depends." I feel like "It depends" needs its own little theme tune. The problem is it depends on how you view it... I guess it depends, but yeah... Well, it depends. It depends on which country and which language. Well, some people won't work with you either. It really depends on the moment that you're in, and what's just happened. I suppose it depends on the individual. It depends. It depends on how sort of automated you want to be about it. Yes, it depends. Trade-offs. It kind of depends, right? It depends on the month, I guess. It all depends. I hate to say it depends, but I do. I think -- Well, it depends. It depends what -- I guess it depends on which TikTok you're on... So the answers to all my questions are always going to be "It depends." I kind of figured that there would be a "It depends", as there always is. What do you think about that? That's probably a kind of "It depends." Yeah, it's very much an "It depends." It depends! It really depends on just like what -- It depends, sometimes... But it really depends on what I'm coding. And it depends on the drive size. It depends. I heard that a few times... So it's kind of an "It depends" all the way down. It depends on the graphic... It depends on the complexity. I don't know, it depends a little bit. This is why a lawyer's favorite phrase is "It depends." But I think it depends; if it's a simple... I guess it depends on the -- the IBM answer for everything is "It depends", of course. Yeah, I would say it depends. Honestly, it depends on the... So it really depends on... I sometimes do. It really depends, because... I think it depends; there could be... It just kind of depends. It depends. I mean -- And there it depends, I guess... The answer is, as almost always in engineering, it depends. It depends..."*

**Jerod Santo:** So today I wanted to talk about dependencies. It's even in the name there, It Dependencies...

**Justin Searls:** Yeah, that's good.

**Jerod Santo:** That is good. Right? That was on accident, Justin. This is just how lucky I get sometimes. Yeah, dependencies; this is something that's been on your mind quite a bit. It's something that I think about a lot. You can frame it a few different ways... The first way is like the build versus buy decision, which we talk about a lot, people write about a lot. I'm sure you and I can riff on that concept. But then once you decide to buy, now you have opened up a whole other can of worms, of like "What do I buy?", which is a dependency selection, maintenance, collaboration... The entire total cost of ownership of a dependency, or of a piece of code.

So let's start with the buy versus build... And I would just love to hear your thoughts on maybe how you go through that process, and maybe how that's changed over time. Because I've found myself, if there was a continuum, a plane, if you will, and on one far side of the plane was dependency hell, and the other far side of the plane was like the "not invented here" hell...

**Justin Searls:** Yeah, wheel of reinvention land.

**Jerod Santo:** \[00:06:15.05\] Yeah. Every one of us lives somewhere along that... And I've found myself moving as I get older, and more experienced, maybe more crotchety, moving more towards the not invented here, and away from the dependency hell. But I'm curious your thoughts, and maybe your experience, as you've progressed.

**Justin Searls:** You know, I have found myself along a similar trajectory. And I think part of it is for sure the crotchetiness, because you get burned by -- when you get burned by a dependency that you pull in, and it sets all your servers on fire, and you're getting called in the middle of the night, and then you realize that to fix it you've got to change all your code in 800 different places, to call the API just right, or so forth...

**Jerod Santo:** Right.

**Justin Searls:** You blame the thing, you blame the third party thing. It's its fault.

**Jerod Santo:** Absolutely.

**Justin Searls:** But by dint of my own foolish mistakes in building a thing, it's like, if that goes sideways, if that blows up, it wasn't a bug. It was just an undiscovered feature request.

**Jerod Santo:** \[laughs\] There you go. We give ourselves excuses. Yeah.

**Justin Searls:** This is just what iteration is. This is -- yeah, this is agile.

**Jerod Santo:** This is agile.

**Justin Searls:** So there is definitely that... But I also think -- when I started my career, and I was writing Java 1.3, I think, maybe 1.4... You know, not a very expressive language, relatively immature ecosystem. I think Ant was the way most people were pulling down dependency; it was before Maven had come out, and that was a huge pain... But even though it was painful to discover and pull in dependencies, the thought of how much work it would be to really accomplish anything with custom code on my own... Like, I knew I'd just be building this mind palace of a homegrown framework to do the simplest of tasks. And in that mode, it made a ton of sense to pull in other dependencies to do stuff for me. And I got into that habit, and I think a lot of us kind of did. But then nowadays, when either the frameworks that we use are so robust, and they've already kind of covered 95% of the cases where it's like if I use Rails, that probably covers almost everything I need. Or languages, as they become more expressive - so if you're a JavaScript developer, modern JavaScript has obviated the need for dozens of little tiny polyfills, and...

**Jerod Santo:** Totally.

**Justin Searls:** One-off APIs that are now more or less baked into something like a standard lib. Now you can just fly so much further so fast by just rolling your own stuff as you go. And so I think that's probably more than anything eked me further to the left on that graph.

**Jerod Santo:** Yeah, I'm with you. I think when I first started - probably all of us live here for a little while - I pulled in other people's code, not because I wanted to, but because I literally couldn't accomplish it myself.

**Justin Searls:** Oh, good. Yes. Yeah.

**Jerod Santo:** I literally was like "I don't know how to do this. I literally don't know how. So I'm going to find someone else who does, and I'm going to use theirs." And then over time, theirs lets you down, in whatever ways that other people's code always does... And so you find yourself peeling back the covers, you find yourself patching things, submitting issues... If you're seriously using this over a span. And you just slowly learn how that thing works, and then the next time I still can't write it myself, but I'm not going to pull that one in this time; I'm gonna try somebody else's. Because the grass is greener.

**Justin Searls:** Right.

**Jerod Santo:** And you see they tackled the problem from a different angle, and you see that they have these advantages, but now these other drawbacks that you're living with... And now you've learned two ways to tackle that problem. And eventually, you get to the point where you're like "You know what? I've seen other people do this, I've seen where those solutions stand up and fall down, and so I'm gonna give it a whirl." You know, the old college try. And sometimes that works out nicely, and other times not so much, and you go back to collaborating on somebody else's piece of code... But it really was out of necessity at first, and then eventually you just don't have the same necessities, because you've learned, you've advanced.

**Justin Searls:** \[00:09:57.13\] Yeah. I hadn't thought about that either, but that's spot on. I mean, first time you do anything... First time I need to, I don't know, parse a really large XML document that's too big just to kind of like read as one doc; I've got to do a streaming parser, or something.

**Jerod Santo:** Right.

**Justin Searls:** Well, pulling in something that makes that really easy and provides a DSL for me so that I don't have to think too hard about streaming a file read, you know... The cost to learn how to do it right, to learn the underlying concepts, to learn the XML spec is so much higher, and then to do it myself, is so much higher than just pulling the thing in. That's the right calculus at the beginning. But then -- and we see this writ-large over and over again, but I think it's interesting to think about as an individual developer, so that we can have some culpability in this. Like, if I pull in that dependency, and then it slowly burns me five times, or 100 times over the course of years, and then I pull in the second dependency, and the third one to try to solve the same problem... And if they all fall flat, pretty soon the cumulative cost to my productivity over years of trying to externalize this problem ends up dwarfing the cost it would have cost me just to read the spec. And I have learned that lesson enough now that I'm a more competent developer, and it's part a muscle memory of just I've learned -- you know, sometimes you've got to swallow the bitter pill and learn a thing.

**Jerod Santo:** Right. So when it comes time to build or buy, do you have a philosophy, or even a process today? I had a show with Ahmad Nassri a couple of years ago... He was at Npm at the time, or maybe he had just left Npm, CTO... And he had this very strong take, like literally only build software that only your team could build. And everything else, if you don't have some sort of like unique contribution to the world, you should not be building it. It's a waste of your time and a waste of everybody else's time. I disagree with that. But I thought it was a pretty strong stance on pretty much buy everything, unless you can literally do something that nobody else has the capability to do. And that's where we should be focusing all of our time. So that was his take. Do you have a strong philosophy today on when do you buy versus build?

**Justin Searls:** That take has a theoretical purity to it that makes me extremely skeptical... \[laughter\] Because the truth is, sure, there is probably a thing that I can uniquely do, or my team can uniquely do, or that perfectly encapsulates what our project or our application is designed to specialize in. But the truth is that to know where that line ends, and where are the sort of just "This is commodity digital pipe-fitting between two different integrations, or something" begins - that takes time, and it's probably a moving target. And to know and to be able to discover "What's the best tool for the job?", that's real work, and keep all that stuff upgraded as real work. And so I think a lot of the early Npm employees were sort of "package small things" extremists, and I thought that I was one, and then they really like lapped me... And it can go so far that you're spending all of your time just trying to curate and keep up with this gargantuan pyramid of transitive dependencies that you're standing on top of.

**Break:** \[00:13:13.19\]

**Jerod Santo:** Kind of a good, quintessential example of like the decision-making process, I think, is something like authentication. And let's not talk authorization, but authentication of a web application; like, "Who are you?" kind of stuff. And there's businesses built around people buying this, right? Like Auth0... That's just one that comes to mind. I'm sure there's hundreds of them. That one was very successful; I think it got acquired by Okta, and it's still out there, and people probably use it. And that's an example where people will say - I think even Ahmad said "You should never roll your own authentication, because it's a solved problem. You're solving solved problems, and it's a cheap one. And so just spend and move on." And I also take issue with that for certain reasons, but I'm thinking that probably you roll your own auth in some of these projects.

**Justin Searls:** Yeah.

**Jerod Santo:** \[laughs\] Why?

**Justin Searls:** The things that everyone immediately reaches for a dependency to solve tend to be the things that people feel like they're too dumb to do, or that are just kind of like enough of a pain that "Oh, I don't really want to learn that", or "I don't want to worry about that." Or if you're in maybe an organization where people get blamed when stuff goes wrong, no one wants to have their name on the Git blame next to that one line in that authentication function that resulted in some sort of exploit, or something... And so there's a lot of fear, uncertainty and doubt driving our decision-making process of like "Oh \[unintelligible 00:18:29.23\] Hot potato." And authentication, I think, is near the top of the list.

But when you look at like a Rails application, for example, Devise has been the dominant gem for authentication for Rails for a lot --

**Justin Searls:** To this day?

**Jerod Santo:** I think so. But I find it so difficult to use and so difficult to learn, and I find that it gets its tendrils in so many of the different aspects of a system... Both in the controller layer, and also in how you define your users, and so forth, that I have come to just roll my own, because like Bcrypt and \[unintelligible 00:18:59.07\] are good enough. Nowadays, I just do the magic email links, like you all do on Changelog.

**Jerod Santo:** Right. Why store a password...?

**Justin Searls:** I wrote a blog post about this one, like how to roll your own kind of like Rails thing that does a magic email link... And there are ways you can go a couple steps further, like doing an HMAC to make sure that the token isn't usable if somebody can access your database, and so forth. It's not rocket science. We're talking like 60 lines of code, a little bit of drudgery, maybe call it a code kata when you start up an app... There are a handful of -- Passwordless is a gem that kinda does that... I'm sure there's going to be libraries for the WebAuthn stuff with like...

**Jerod Santo:** Passkeys...

**Justin Searls:** Passkeys, right, that you'll be able to pull in... And it's not like that any of these -- to use any of those tools isn't bad, but the platforms are getting so good at defining what authentication is that we're talking about a real thin little layer of responsibility. And that if you use the same -- it's kind of like no one ever got fired for \[unintelligible 00:19:57.10\] thing. If you use the exact same gem, or the same package that everyone else does for auth, and it's got some sort of CVE in it, and you don't update your dependency, and it's like "Now we're getting actively exploited", that seems to be a much wider vector than "I did this callback in the wrong chain, and my own custom call of these three steps I have to follow to get passkeys to work", or something.

**Jerod Santo:** \[00:20:20.29\] Right...

**Justin Searls:** I say that knowing that passkeys are actually a huge pain in the ass.

**Jerod Santo:** Yes, I think there is actually a lot to the implementation side. And I think a passkey solution might be a situation. So I did all of our own auth on Changelog.com, and on other Rails apps over the years. I also learned a lot from Devise. I don't know if Devise is still as actively used as it was, but it was hugely beneficial for me to learn how auth works, and then to realize how many features you could possibly want in an authentication scheme, and how I don't want almost any of those. And so it becomes like configuration, turning things off and on etc. And I was like "I've learned how they do it. I'm just gonna go do that." And you do find that it's relatively a small amount of code. 50, 100 lines of code, a couple of decisions... Not even that many decisions to make, of like "Do I want passwords or not?"

I think passkeys might be a point where I would personally be like "Hm, I don't know how to do this. This seems new to me. Maybe I'll bold something on top of what I built here, and learn how passkeys work, and rely on a package."

I think what happens a lot, and I know that we talked auth on that conversation, and I think the push-back on me, which you and I are both resonating with a similar stance, was "Yeah, but someone's gonna want single sign on. Someone's gonna want tracking." You think all you need is like a simple password-based or passwordless authentication, but there's always more. And now all of a sudden, you're building this huge authentication thing, with like Google tokens, and blah, blah blahs... And that's just a toggle inside your Auth0 account, or whatever your password provider is. And so I think scope creep as like a necessary thing inside of a business is an argument against rolling your own simple solutions. And I'm curious, because you work with a lot of businesses... I mean, do you just push back, and be like "Sorry, CEO, you can't sign in with your Outlook account"?

**Justin Searls:** No, not at all. In fact, I think that you raise a really good point, that you can't really have this "Buy versus build" conversation without thinking about the context that you're in. So far in this conversation I've been representing Justin Searls, the independent programmer, who builds independent things, because no one else wants to work with me...

**Jerod Santo:** \[laughs\] Now we get to the "It depends" part.

**Justin Searls:** But yeah, it depends... Because if you're a consultant, \[unintelligible 00:22:30.17\] only going to be there for a little while, and you're building that auth stuff, and you're having trouble explaining, for example, maybe the handshake that happens with an OAuth 2 secret, and so forth... You wouldn't want to hand that code over to a team or to a more novice developer who wouldn't be able to maintain it. They'd be in safer hands with a documented third party library that can do that for them. And so I think that if you're in the situation you're describing, and you're in a big corporate environment, and you know single sign on is probably going to come down the road, I think before you make the decision, you probably ask the product owner, or you think for five minutes and you're like "You know what - do I really want to have like a side gig as a guy building a glued together Rube Goldberg machine of an auth layer? Like, no, probably not."

**Jerod Santo:** Yeah, just not backing yourself into any particular corners that are obvious. I think we can a lot of times end up in YAGNI land, where we are talking about non-obvious, potential corner cases. You know, "I may need an SSO someday." And you have to actually sit down and think about whether or not that's like a real possibility, or just some genericized engineering pipe dream of solving all solutions with one particular silver bullet... Which we tend to -- I mean, I've fallen into that trap before, and I know we all have, because there's an acronym about it. Anytime there's an acronym, it means we've all pretty much been there, which is thinking we're going to need something and finding out, much to our chagrin, years later, "I never, ever needed that, and it's been slowing me down this entire time."

**Justin Searls:** Yeah, totally.

**Jerod Santo:** \[00:24:00.17\] So that's a tough one. I think -- gosh, how do you avoid that? Do you just get burned enough times that eventually you're skeptical of all features?

**Justin Searls:** I talked about this a lot, and I'm sure I've shared with you that one of the reasons that I got into consulting in the first place was because I'd get 10 times as many reps in more organizations and more projects and more codebases, in the same amount of time somebody else might only get to work on one product or one startup.

**Jerod Santo:** True.

**Justin Searls:** And that experience has turned me into a pattern recognition machine where sometimes it's hard to explain why my gut is telling me buy or build in this case; sometimes it's hard for me to know - you know, maybe I'll ask a pointed question to somebody who's saying "Hey, we should do this versus that." And after the fact I'll be like "I don't really know why that question is what came to mind", but the signals, I think, start to mount when you have a lot of experience being in the position to make this decision, and having been burned by both ends of the spectrum. I like to think that this is one area where experience really does have a major impact on the wisdom of the decisions that we ultimately make.

**Jerod Santo:** So could you give that wisdom to somebody with less experience? Or is the answer like "Hang out with experienced folks"?

**Justin Searls:** Yes, for an hourly rate, I will give you all the wisdom...

**Jerod Santo:** \[laughs\] You can purchase... Justin's experience is for purchase.

**Justin Searls:** At testdouble.com/contact...

**Jerod Santo:** There you go. Well, let's get on the buy side now. So we've talked a little bit about that initial decision... Let's say you decided "I'm not going to build this myself" or "My team is not going to build this."

**Justin Searls:** Sure.

**Jerod Santo:** Now we talk about dependency selection. Now we talk about "Do I get a service? Do I get an open source package? Do I buy off the shelf? Do I buy custom from a development firm?" And there's lots of different ways you can buy. Most of what we buy is open source dependencies, I think, pretty much, because they're the cheapest thing to buy... We think. But we're not always considering the total cost of ownership. You recently blogged a blog... I'm not sure where you came up with this amazing title for it, "Must have 10 years experience Lineman.js."

**Justin Searls:** Yeah, that was a case of you egging me into making content...

**Jerod Santo:** \[laughs\] I just gave you -- so one thing I do in my life is I write blog post titles. So you write blog posts, I write blog post titles. And every once in a while I'll get somebody else to write the blog post. You already had an itch to write this as you were celebrating - or I don't know if it was a celebration - Lineman's 10th anniversary. And we were joking around about that whole meme where somebody's always asking for more experience than is like humanly possible, right? Like, as soon as Swift came out, it was like "Must have five years experience with Swift." So we were joking around about that. And Lineman was turning ten. This is an old JavaScript project that you can talk about a little bit... Actually, one of the reasons you first came on the Changelog was -- probably THE reason was Lineman.js.

**Justin Searls:** Yeah, yeah. It was a static site builder. So nowadays we've got stuff like Hugo, you may have used Gatsby...

**Jerod Santo:** Before it was cool.

**Justin Searls:** Yeah. This is before we had a word for static site generators, SSGs, or before anyone had talked about JAMStack, I was just trying to build rich JavaScript web applications that were going to be backed by arbitrary different backends. And so it did all the kind of stuff you can predict about HTML and JavaScript and CSS, and concatenating, and compressing, and fingerprinting all that stuff... But it also had an API proxying layer that you could mock out particular requests until they were implemented, and so forth... And it was really useful to us, but being a consultancy, we couldn't make it our full-time job to hire a bunch of DevRel people to pitch this free tool that made the job easier. And so it kind of faded out.

I was reflecting on it after 10 years, and I think towards the end of that post I started talking about what advice would I give somebody? What do I think about when I'm shopping for a dependency? So the first one I want to call out and get your read on, Jerod...

**Jerod Santo:** Sure.

**Justin Searls:** \[00:28:04.23\] First thing I look at when I'm looking at a dependency is I see how many dependencies does it have? And if I'm getting really \[unintelligible 00:28:10.22\] ornery, how many dependencies do those things have?

**Jerod Santo:** Right, right, right. Yeah, which is a spiral; it can spiral out of control.

**Justin Searls:** Right.

**Jerod Santo:** I definitely look at that. I wouldn't say it's the first thing I look at. I feel like maybe there's a phase of like window shopping first. And maybe you've already just advanced past that. Like, when you're serious about a dependency, maybe you look there. It would be the very first thing I would look at, but definitely would at some point say - the question becomes "How big is this thing?" And you can't just look at its lines of code; you have to look at what it's building on top of. And yeah, you can find a Node Modules folder that goes all the way down into a black hole, as the meme goes... Or you can find not very much there, and you're like "Okay, I like --" unless it's a framework and I'm building on top of it, if it's a library that I'm actually integrating in, I would like it to have a very small surface area, if possible. Now, maybe it's solving a huge problem, and so it can't. But I want to know kind of how much I'm biting off... But it'd probably be like the third or fourth thing that I would check, personally.

**Justin Searls:** Yeah. I look at it because -- well, first of all, the obvious, the facial reason is if you pull something in that brings in 1,000 other transitive dependencies underneath it, version resolution in ecosystems becomes a risk. Maybe I can't update some other important thing now because this one library, for some yahoo in Omaha, Nebraska, it hasn't been updated, right? And so now I'm locked because of this -- they both share the same transitive dependency on some CLI tool, or some wrapper around the HTTP APIs, or something. That I think is the first reason why people would need to look at that. But the second is - having written a lot of open source in my day, and as I become more competent as a programmer, and maybe, again, we can't really \[unintelligible 00:29:58.07\] how much of this is just us being crotchety... Almost none of the libraries that I've written in the last five years have -- well, okay, some have dependencies, but a surprising number of them have zero runtime dependencies. And when I see that in another library that does a useful thing, it signals to me that this actually solves the problem. This isn't just some bit of glue that connects me to the other thing that's going to solve the problem. Or that the maintainer shares this ethos or this principle of essentialism that I have. And so that to me is a marker, I think, of quality, more often than not.

**Jerod Santo:** Yeah, there is like an aura of competency by the author, because they didn't need anybody else's code to accomplish what at least scratched their own itch. So I think there is like a bit of a quality indicator there. Not necessarily a guarantee, but at least an indicator. I also pretty much \[unintelligible 00:30:51.16\] anything with the word "wrapper" in the library title or readme, because I hate hip hop. No, I'm talking about wrappers around something else, which most things out there are nowadays. I mean -- and I've written my fair share. Wrappers are so easy to write, that if you're just going to have something that wraps something else - well, just go straight to the source and wrap it yourself. That's just pretty much been my move. So I ignore almost anything that has the word "wrapper" in it.

**Justin Searls:** I like that, for another reason. So facially, I think, again, yes that is a great reason to ignore wrappers, because all they can really offer is maybe some syntactic sugar that can do a cool demo, and like "Hey, look at this fluid API where you can chain these five calls" and "Isn't that nicer than having to remember these particular function names, or something?" But the other reason that I avoid wrappers is typically they are designed to be used, for example, like domain specific languages, or DSLs, to be sprinkled throughout your codebase wherever you might have this need. And actually the next thing on this list in this blog post is "Can I isolate it from the rest of my code via an adapter object that I own?"

**Jerod Santo:** \[00:32:03.23\] Exactly.

**Justin Searls:** ...or must it infect the rest of my code, and tests, and so forth? And what I end up doing with almost every one of these libraries that I pull in, and what I'm looking for is something that's just like "Give me a function to call that solves the problem." And then I can write my own wrapper, in my own code, that basically charts an interface between me and this dependency, creating a little bit of scar tissue between my app and it. And then that way, if down the road that version resolution problem ever comes up and now I can't update my framework because this thing, they share a dependency, then I can go shopping to replace it, and I've got a shopping list right there in the form of that wrapper, because now I know what's the contract between that and everything else. Whereas if I'm just using this fancy little wrapper DSL, and I'm sprinkling it all over my code, now the thought of switching to something else could be tremendous.

**Jerod Santo:** Yeah, absolutely. It reduces your switching costs later, because you've already isolated it. It also makes it easier to test around. I don't know your stance anymore on test doubles and mocking... I'm sure you have very nuanced takes on these things. We don't need to get into that, but--

**Justin Searls:** Yeah, how much time have you got?

**Jerod Santo:** Yeah, exactly. It could be a different "It Depends." But if you are going to test in isolation, it's much easier to mock out if you have it, just the number of \[unintelligible 00:33:14.02\] down. And yeah, you can just hop off whenever you want. Now, I was actually thinking, while you were talking, of a funny -- well, not funny-haha, but interesting case where I just recently tried to break the rule that I just laid down. And that is if the API or thing that you're trying to use is so gnarly that I just don't want to bother with its API. I really do want a wrapper in that case, and here's an example.

Changelog Nightly, which is an old Ruby app that runs through a rake file - I mean, it's just a Ruby app running through a rake file. Ruby 2.3. If you're not familiar, it goes out to BigQuery every night, and it gets from GitHub archive all of the most starred repos in the 24-hour period, and stuff like that... And it sends an email out. And it's been doing that dutifully, on a cron, for like eight years, to a few thousand people who are interested in like the bleeding edge.

Unfortunately, the bleeding edge right now also includes malware and spam. That's one of my problems. And these people are good; they're good, man. It's been cat and mouse. But I was trying to modernize that and just bring it up to tools I can -- because I can barely hack on it, it's just atrophied so much. And in so doing, I upgraded from Ruby 2.3 to like three point - whatever is current. Three point one, point four, or I don't know; something like that. And had to upgrade a bunch of gems. Everything was going swimmingly, until the BigQuery gem could not -- it was abandoned, basically. The BigQuery gem was abandoned. And I was like "Alright, well, let's go check out the Big Query gem and see what's going on." Literally no commits since 2019. So not recently abandoned. Like, long time ago abandoned. And it's got some issue with Ruby 3's TLS stuff, and cipher suites, and it's like "Alright, I'm losing my interest at this point. Like, why am I doing this?" Anyway, so I'm like "Well, I'll just talk to BigQuery directly." And I did look at the code, and I was like "Oh, he's basically wrapping some Google calls, and stuff."

And then I realized that Google Cloud's API has changed since then, and it's deprecated, and stuff... And the modern way of doing it -- I mean, it's so painful to... I couldn't figure it out. I mean, I didn't give myself that much time... But I was like "Man, I wish I just had a new wrapper library that basically did what this guy was doing back in 2019, just for their modern stuff." I would gladly grab that and use it. Because that cloud API, whatever Google designed over there - I'm not sure if you've ever looked at it... But holy cow, man, is it a beast. And I just don't have any interest in interfacing to that thing.

**Justin Searls:** Having just written a Ruby gem called feed2gram that takes an Atom feed and then posts any photo posts that are configured a particular way to Instagram... This is like a -- maybe we'll talk a little bit about Posse later.

**Jerod Santo:** Yeah, maybe, if we have time.

**Justin Searls:** \[00:36:02.22\] That's against the Facebook Open Graph API.

**Jerod Santo:** That's gotta be painful.

**Justin Searls:** It was painful. And of course, the documentation isn't stellar. And what I ended up doing was I spent the better part of a day just me and Curl.

**Jerod Santo:** \[laughs\]

**Justin Searls:** And I would just curl every route, and then I figured out the eight-step Samba dance to figure "Okay, so if I do this, and then this, and I exchange that kind of token for this kind of token, and then I barter with this fellow over here, then I'll get this other kind of token." It's literally like a three or four-part dance. And then finally, I can just say "Hey, look at this URL and make a post about it." So the gem is basically just encoding these four or five magical HTTP requests that have to happen...

**Jerod Santo:** Yeah.

**Justin Searls:** And so I think what we're saying here is it depends.

**Jerod Santo:** It does depend. I mean -- of course, it does. \[laughs\] Yeah, it's like the gnarliness of the API makes it depend. Because if it's a nice, RESTful API, or even a GraphQL API, something that is just like "You know what - I can just hit some endpoints, grab a token, do my thing, JSON, deserialize, whatever, whatever." Like, you don't need a wrapper for that. But some of these -- man... And Google Cloud feels very enterprisy. All of this is like enterprise stuff. And it's like "Dude, I just want to do the same query I was doing with this other thing, and change as little of my code as possible", and it's just gonna be painful. So there's a situation where it does depend.

**Justin Searls:** Yeah. You know what, though? Now that I'm -- again, the reason this conversation I think is so evergreen is that it's so easy for your mind to flip from one end of the spectrum to the other and kind of attack from the other angle... Because as you were speaking, I realized how many Npm packages and gems have I created where literally I was on a team, we rolled our own thing, we did the exact same curl thing, and then I was like "Well, the last thing I want to do is have this team be saddled with this code forever. It has nothing to do with the application that they're building. It's not domain-specific to the point that your previous guests had made earlier. It's got no special sauce or differentiation for this team to have ownership of.

**Jerod Santo:** Right.

**Justin Searls:** That's when I would cut and then paste into a new folder, and start a new gem that just does that thing - give it a name, give it a readme, hopefully help somebody else out down the way... But that's where I think most of those zero dependency libraries that I've created come from, right? And so spinning off the liability of maintaining that wrapper... Because then that way maybe it'll die, and then at least you've got a canary in the coal mine of somebody else who might be using it. And if you're really lucky, they might even contribute to fix.

**Jerod Santo:** Pick it up, or... Yeah. Which kind of leads into your next point, which is about like people maintaining it, or how... Which I think is a particularly difficult question to answer sometimes. Even myself, I find myself second-guessing... Because a project can look abandoned, but not be. It can also look very active, but what they're doing is not really taking it in a direction that makes any sense...

**Justin Searls:** They're just putting fingers in the dike, and it springs new leaks every week.

**Jerod Santo:** Yeah, exactly. So is it maintained? Is it active? That's a thing you can make a judgment call. But then the even harder one is "And will it be a year from now?" I mean, that's darn near just like a crapshoot sometimes. You don't know what's gonna go on with that person or that company. So how do you heuristically decide if a project is healthy in that way?

**Justin Searls:** One of the most influential moments in how I think about this was I was speaking at a Node.js conference in Christchurch, New Zealand. And I got to meet Substack; not the email subscription service, but the fella James, who --

**Jerod Santo:** Who wasn't too happy about the email subscription service, was he?

**Justin Searls:** I don't think so, no. I think I made that joke and I got a DM from somebody being like "Yo, he doesn't wanna hear that joke."

**Jerod Santo:** Yeah, he doesn't like it.

**Justin Searls:** No. He's probably heard that. Anyway, yeah. So James had written so many of the formative original two, three-year run of Npm packages. And he wrote Browserify, which provided browser implementations for a lot of these kinds of like standard library stuff in Node.js, so that you could ship the same code - this might sound familiar nowadays - to a Node application and also to the browser.

\[00:40:03.02\] And I remember he had this one that had been really useful for me when I was probably writing Testdouble.js for figuring out what the resolution algorithm for Npm would say for a given string, so that I could figure out how to mock the thing, because I'd be able to find the underlying file. And I remember that resolve package that he'd written had been really useful, and so I thanked him for that, and then I said "You've got so many packages. How do you think about, and keep track of, and stay on top of all the issues?" And he said, "Oh, well, to be honest, I forgot I wrote that package. And I just think that if you design pure functions, little tiny things that just do a thing, and they're more like math, and they're less like glue code behind your Google Cloud Platform API, which is a moving target..."

**Jerod Santo:** Totally.

**Justin Searls:** ...when they can just be done. And maybe he even turns off issues, or pull requests, right? In that case, you might not see any commits for 10 years, but does it work just as well as it did then? Maybe. So that's one reason why understanding the nature or the kind of dependency that you're pulling in. If it is glue code, and it is connected to Instagram's API and it's got no commits for seven years, then you can be dead to right certain that it doesn't work anymore.

**Jerod Santo:** Yeah.

**Justin Searls:** But if it's something that smells more like math, or it's working on an established file format, then maybe it just worked and then it's done.

**Jerod Santo:** Is that an argument for JavaScript ecosystem style, like really small packages, and then pulling in thousands of them? I mean, it seems like maybe it is. Like small things that do one thing well, and maybe are doing math, or format changes, or...

**Justin Searls:** I think there's a lot of value in that, right? Like, be single-purpose, be focused, be live in what you publish... Come up with a good name for it, make sure it does what it says on the tin...

**Jerod Santo:** Yeah.

**Justin Searls:** But beyond a certain point, cognitively, we can only carry around so many in our heads. Like, if I'm talking to James about this and he doesn't even remember writing that thing... Like, what we've seen when you take that to the extreme in Npm is how critical security audits have become... Because all it takes is like a domain name expiring, or somebody coming along and buying a package from somebody else, and then like secretly injecting a cryptocurrency miner, or a keylogger or something... Taken to its extreme, what you're really doing is you're creating a chain of trust with a whole bunch of strangers. And you've got to be mindful of the fact that if you're effectively opening yourself up to everyone, you could never hope to audit at all. Hopefully, GitHub Copilot will be security-scanning everything and it'll catch most of the stuff. I would still never feel comfortable if I didn't feel like I could get my arms around it, and look at every single one of my dependencies and have some idea of who maintained it, and what it was, and what it did.

**Jerod Santo:** Yeah, that's the unfortunate situation with Npm, I think, and that style of coding, where I think at a conceptual level it's completely sound to say "These are small units of functionality. They're black boxes, they're tested; they have published tests, so we know they work as according to design." And I don't care how they work, I'm gonna pull in as many as I need, and that's all well and good... Except for the fact that you're also downloading those fresh off the network, in production, in dev, over spans of time. And we can't actually trust the network over a course of time, because of all the reasons. I mean, EventStream was a big one, Leftpad was a big one... There's others as well. Those are just off the top of my head, where it's like -- I mean, EventStream, Dominic Tarr basically just handed over the project to somebody who he thought was trustworthy. I can't remember how much he vetted that person... And they just weren't trustworthy. And I don't really necessarily think that's his fault. He doesn't owe anybody anything. He was done with it. It was kind of like your situation with James, where like maybe James would have handed that off -- he hasn't thought about it for years. This was a package that Dominic wasn't using; he didn't even suggest you use it anymore. He's like "You shouldn't use this. I've written a better thing." And yet so many people did that when that package got compromised, it was a serious problem for -- lots of people who had a bad day.

**Justin Searls:** \[00:44:17.08\] Yeah, there's a theme here that I think -- something about dependency shopping that we haven't really dug into, that I have identified as being a big motivator for me personally, in terms of like "What is the principle that's driving my decision-making process around dependencies, and what I use, and what I build versus buy?" and I think it's self-reliance. If you go to like the self-hosted subreddit, it's kind of like the digital equivalent of prepper culture, of people trying to corner themselves off from the rest of the world... And I don't typically identify with that group or that instinct.

When people talk about privacy rights extremists, or people who say "I want to own my data", I think that these are sufficiently confusing flags to plant in the ground, and just how kind of online everything is these days... But when I think of it through the frame of self reliance, at the end of the day, how many other people could knock over my sandcastle? And I want to keep that number as low as possible, and I want to keep the gross likelihood that my sandcastle gets knocked over to be as small as possible.

**Jerod Santo:** Yeah.

**Justin Searls:** And so if you'll take this as a segue, I have been on a mission over the last year to kind of transform my personal website, justin.searles.co, to be the place, the single place where I put all of my internet stuff. I post my tweets/takes there, my photo posts, of course blog post, I started to link blogging, and sort of a Gruber Daring Fireball style to the stuff that I was reading... And that replaced for me four social networks. And coincidentally, of course, I started thinking seriously about this when Musk bought Twitter, and I realized that the whole Twitter category of text-based real-time posting, microblogging - there was no longer going to be one authoritative website for that; it was gonna get fractured. In fact, we talked I think a month into that, and we were kind of joking about like the post-Twitter era, and how that all was gonna play out... Instead, what I do now is I post -- it's really funny if you go to the website, because it's so stupid... But if you go to my website and you scroll down a bit, you'll see a thing that looks like a tweet, with my face on it, the same little Twitter avatar I've been using for 12 years, bigger text and like little Share buttons underneath, except instead of like social share, it's like you click the chat button and it just opens an email to me, or a copy link, or a \[unintelligible 00:46:42.21\] share sheet thing... And then I syndicate it to Mastodon using Feed2toot, which is a... You know, I named it Feed2gram because Feed2toot was there first. But that's a little Python egg that will -- I have it running on a Docker container on my Synology, and it reads that Atom feed however many times a day, and then it posts all of my takes as if they were Mastodon toots.

**Jerod Santo:** Right.

**Justin Searls:** And if I wanted to, I could do the same thing for Twitter. And maybe when Threads opens up its API, maybe I'll post to Threads, too. And I just started doing it for the Instagram stuff last week, after I finished that gem... And it's actually -- right now it's churning through a backlog of all my photo posts. I have implemented that initially for a Japan trip where I was at RubyKaigi in May, and all of my friends -- like, the guy who does my car detailing, and like the lady who cuts my hair, they're all like "Oh wow, you just came back from Japan", and I only then realized that it had posted the entire backlog of all of my photos to Instagram. And that experience, having half a dozen people in my life be confused about what country I'm in right now, when I didn't do anything, tells me - like, man, people really use Instagram.

**Jerod Santo:** Oh, yeah.

**Justin Searls:** I don't. I don't have it installed, I don't think about it... But I want to stay in touch. I want people to see my stuff... And it's not like I'm gonna go and convince my mom to get an RSS feed or a feed reader. So that "I have one website, and I'm syndicating it everywhere else" has a real appeal to me, because - yeah, sure, Instagram could go away, or that Mastodon could go away, but my site is still sort of the canonical place for all that.

**Break:** \[00:48:17.04\]

**Jerod Santo:** That speaks to me at a practical level, or maybe at a conceptual level; I think maybe not at a practical level. You've gone through a lot of work to get that done. I think we need to make it more easy for folks... But there's something about it as well that just feels antisocial, because like it's a push-only system. You know, your mom gets to see your Feed2grams, but you're not seeing your mom's Grams. So like you're not actually there. You're just like faking that you're there, and that's a one-way thing. Does it feel like that? Or do you go on Mastodon -- I mean, I see some of your posts on Mastodon, but now I know your system and I think "Justin's not really here. He just put that on his website and he's gonna push it out to me." Maybe I replied anyways... I can't recall. But I just know that you're not really there, unless you're like lurking now, and checking your mentions, or...

**Justin Searls:** Am I'm not faking it either. And I'm definitely not lurking, because the whole reason I built this was --

**Jerod Santo:** So you didn't have to.

**Justin Searls:** Yeah. I had a Twitter addiction, where I was just addicted to all these Pull to Refresh timeline feeds... And I tried to cope, and I tried to monitor it, and I tried to "Well, don't have it on your phone", and then I'm like "Why am I on my computer right now, just hitting Command+R?"

**Jerod Santo:** \[laughs\] Okay.

**Justin Searls:** So I had to quit.

**Jerod Santo:** Fair.

**Justin Searls:** But you're right, it is antisocial in the sense that -- I always think of social media these days as like a write-only medium. Like, I put it out into the world so people can see it. If there was a setting where I could turn off replies and comments, I would, because I would hate for somebody to reply and for me to not see that reply. And then both Instagram and Mastodon now my bio says "Hey, this is an automated account. Please send me an email." So it's definitely I am a more antisocial/misanthropic guy than average, for sure.

**Jerod Santo:** Somewhat by necessity, though. You've gotta know where you live.

**Justin Searls:** Yeah.

**Jerod Santo:** I think it's just that I use it all the opposite of you... Because we've always published Changelog stuff to our website. And of course, you syndicated via RSS. That's how podcasts work. That's how Changelog News has always worked. We used to be way more link-bloggy than we are now. Now we just do a newsletter once a week, and we publish that out, and...

**Justin Searls:** Best newsletter in tech, by the way.

**Jerod Santo:** Hey, thank you very much. I appreciate that.

**Justin Searls:** It's genuinely really good. It's the only one that I subscribe to.

**Jerod Santo:** I love that about you. How do you know it's really good if it's the only one you subscribe to?

**Justin Searls:** Well... You got me.

**Jerod Santo:** \[laughs\] I have a special skill of ruining compliments. No, that's awesome... Point being is like when I go to social networks, then like we're trying to be with the people. Like, I want to hear what people are saying, what they're thinking, I want to interact. And so if I didn't want to interact, then I wouldn't even go there. And so whenever I'm there, I'm wondering like what's going on. But I do love the fact that you have self-reliance, you have all your content on your website, which is like the way the web is kind of supposed to work... And I think that's a cool thing.

So talk about the tech then, because I don't think this is easy for folks to set up. Maybe WordPress makes it easy... I don't know what publishing tools look like nowadays, but you're very much manual. This is all your own code driving this stuff...

**Justin Searls:** It is, and it's closed source, and I've been debating whether or not to open-source it, and how much work it would be to make this repeatable. What I wouldn't want to do is just put into the world like "Hey, just copy-paste this repo as a starting point", because then I'd be getting emails for years about every little customization. What my website is is a Hugo-generated site. Hugo is very fast, it's a great static site generator... The main conceit is if you look at the sidebar, there are like eight or nine different media types. And what those are in Hugo terms is I've created a separate sections, and each section has like a different set of HTML layouts. And they each -- because they're named differently, I can kind of branch with ifs and elses to like treat them differently in the RSS feed.

**Jerod Santo:** Sure.

**Justin Searls:** And then they each look at different parameters, and that frontmatter at the top of the Markdown file that drives them... So like when I want to post some images, for example, to my fake Instagram, I wrote like a little JavaScript \[unintelligible 00:57:55.12\] carousel thing that I think is really pretty decent...

**Jerod Santo:** Okay.

**Justin Searls:** \[00:58:01.01\] When I want to post something like that, I want to do it from my phone. But all of the Hugo stuff is - that's all flat files in Git. So I wrote a series of extremely contrived Apple shortcuts where I can select the five pictures I want, do the share sheet thing, click on the shortcut, give it a title, hit Go, and then in the background it's going to use a Working Copy, which is like a Git client for iOS, to pull down the latest from the site, create the Markdown file with a timestamp-based name, and then compress and size all of those photos appropriately, and then list them off as like a list of photos in the front matter, in the YAML. And then all I have to do after that is I just hit Push. So that's how I post to the site.

**Jerod Santo:** I see. And so that's all inside of shortcuts.

**Justin Searls:** Yeah. So because static site generators are naturally very inert... Once the build happens up in Netlify, it's just some files... I can't get any of that interactivity from the site itself, which makes it really performant from a CDN perspective, but it means for any action that I want to take on it, it's back to "What automation can I build to just get that file that I need in the right place?" And shortcuts and other kind of shell scripts and other little things like that work great, but that's not advice that works for non-programmers probably, in most cases.

**Jerod Santo:** Right. So you've got posts, links... I assume that's kind of your link blog. Shots, takes... Are these your hot takes?

**Justin Searls:** They're fake tweets...

**Jerod Santo:** Fake tweets, okay... Tubes - these are videos, I assume.

**Justin Searls:** Yeah.

**Jerod Santo:** And mails. You publish all your email this way?

**Justin Searls:** Yeah. All my email newsletters.

**Jerod Santo:** Oh, newsletters. \[laughs\] Just all your emails...

**Justin Searls:** \[unintelligible 00:59:36.21\] I'm an open book. It's radical transparency.

**Jerod Santo:** That would be pretty radical. That's interesting. Man, all these through shortcuts, and stuff... So you just have lots of time; you spend lots of time coding. You code more than I do, that's my takeaway.

**Justin Searls:** Despite being antisocial, despite being totally okay just sort of blasting out content into the world, I have a larger than average need for the validation of others. And so when for example Musk bought Twitter and you started to see Twitter deteriorate in various ways, for me, I felt a very visceral loss of "Oh, no", even though it's silly, even though it's stupid, even though it's a manifestation of some sort of digital addiction that I have to timeline-based news, that threatened for me that source of dopamine. I wasn't getting the same validation that I would; people aren't replying anymore, I am no longer getting the reach that I did... I lost my blue checkmark... I had a real blue checkmark when those were still cool, and now I don't, because I didn't want to pay however much a month... So just from a purely vanity perspective, it was worth it to me to go through the steps that I needed to in order to finally untether myself from that - let's be honest - just addiction.

So it's like, now I'm finding that instead of writing pithy and provocative things to elicit some sort of reaction, like people reposting my stuff, I'm finding my voice again as an author; my writing has gotten a lot better, I started a newsletter... And when I say "You can email me", and there's a little email button or something, people are starting to email me back long emails; thoughtful, interesting, actual conversations that I think social media tricks us into thinking are what real -- that the comments that happen there are the real conversation, or that they're suitable replacement for the intimate, actual talking to another human might have been. But I feel like this... Owning your blog, syndicating elsewhere, and then inviting people to email you - people show up differently, and it results in much more richer and rewarding conversations, that matter. So I've really, night and day, over the last couple of months, since I was able to finally pull the trigger on all this, I just feel so much better about how I relate to the internet. And I can feel sort of like a cloud over my own sense of identity lifting.

**Jerod Santo:** \[01:02:01.10\] So it's working for you. That's awesome. I would then encourage you to open-source this, because it might work for others. Maybe even open-source it not with the whole "Let's have a community" project, but just like "This is my thing. Hopefully it will help you create your own thing." Because it does very much feel like you've kind of compiled together a system that may only work for Justin. And maybe it'll work for like 12 other people. I could be dead wrong and it could work for thousands... But oftentimes I think open source value is just in showing somebody else the way to do their own thing, which goes back to dependencies. I learned so much from just using other people's code over time, and then eventually looking at it, getting the confidence... A lot of us don't ever look at the code in our dependencies, which I would also suggest people look at the code. But maybe somebody else will find their own system that works for them, and it helps them with whatever problems or social -- you know, the way they want to interact with the internet by following your path.

**Justin Searls:** Well, I'll tell you what - a commitment I'll make here today is, if anyone listens to this and what I'm saying resonates and they'd be interested in that, to shoot me an email, which will be in the show notes...

**Jerod Santo:** There you go.

**Justin Searls:** And if I get enough of those, I will -- because of my outsized need for human validation, I will probably drop everything and go and figure out how to share this.

**Jerod Santo:** \[laughs\] "I will probably drop everything..."

**Justin Searls:** But at the very least, it would be a good indicator that there's something here, and it would probably help shape up whether that should be like a Hugo startpoint archetype project, or what.

**Jerod Santo:** Yeah. Even just publishing how you do it. Even if that's just a blog post of how it works. Sometimes that's enough to show people. I think there's probably -- I know there's a whole indie web world that I barely graze upon every once in a while; I'm not like deep into it, but I know people want us to do shows on the indie web. We're very much fans of this style of like we want people to have a domain, own your content... I think syndication makes sense. Syndicate to all the places. I mean, we kind of do that ourselves. I'm doing most of the things -- we used to be like Buffer users, and I wrote a wrapper around the Buffer API in Elixir etc.

I've since just turned all that off, and it's like, I'm trying to go to each place and interact there for a while, and see how that works... Because there's something about the social networks, that they all have their own little, I don't know, cultures; they have their little persnickety things. And just like blasting, I've found -- if you're looking for reach and for engagement, which we'd love for more people to listen to our podcasts, like, that's one of the reasons why we go there. Have conversations, reach new people etc. Share our clips... Having it like just completely automated/syndicated for me, for our Changelog thing that we do it feels like inauthentic, to a certain extent.

**Justin Searls:** \[01:04:47.10\] It is inauthentic. I am just blasting stuff. It's just that I had to do the calculus to say for me, in my business, where I make $0 off all my content, it was not worth my time to suffer bunch of fools lighten me up or telling me how dumb I was on Twitter-like platforms. But for you running the newsletter, where you actually want to discover this stuff, and you want to build that engagement, I think it makes perfect sense to show up... Jerod, you're a man of the people.

**Jerod Santo:** I am.

**Justin Searls:** But at the same time, it's all a matter of "What do we value? What are we doing this for, and what's the opportunity cost? How much time does it take?" And so the amount of time and attention that I would be spending in social media, I realized that it was enough attention residue that maybe I wrote one fewer blog post a week, or I wasn't really able to think through the problems because I was so used to hitting Command+Tab to go into that. So I think it all depends on what you're solving for.

**Jerod Santo:** So what you're saying is it depends...

**Justin Searls:** Yeah... There we go. Dang. Way to tie it back. You always got that.

**Jerod Santo:** Ah, I've been BS-ing for many years now. Alright... Well, I mean, I think that's a good place to end it. We'll have -- the calls to action will be this: if you are interested in Justin's system, look in the show notes for the email for you to send an email to. Do not toot him, do not Gram him.

**Justin Searls:** I mean, you're welcome to. Follow me on all these platforms and receive my content, if you wish...

**Jerod Santo:** \[laugh\] No, I mean if they want to contact you, they shouldn't do these things.

**Justin Searls:** Yeah.

**Jerod Santo:** Email. That's the way to reach...

**Justin Searls:** Justin \[at\] searls.co. There you go.

**Jerod Santo:** So easy. So easy. The website is Justin.searls.co. Are there other Searls, so you thought you'd put your first name as a subdomain? You could have just gone with searls.co.

**Justin Searls:** Yeah, there are other Searls. So my brother is a Searls. He is a senior Elixir developer at Cars.com.

**Jerod Santo:** Oh, really?

**Justin Searls:** And since I hogged the Searls username on every social platform, I figured if I'm gonna buy the searls.co domain, I probably shouldn't also make that all about me.

**Jerod Santo:** So does he have a subdomain of his own then?

**Justin Searls:** Well, I've invited him to, but he's more than willing to let me be the internet acrobat of the family. And I think he's a little bit more chill.

**Jerod Santo:** \[laughs\]

**Justin Searls:** So \[unintelligible 01:07:02.10\] he's got an itch to broadcast.

**Jerod Santo:** Love it. Well, it takes all kinds. It takes all kinds. Well, Justin, I always appreciate having you on. Fifth appearance... Well, let's make it six, seven and eighth one of these days. Keep coding, keep writing hot takes, and warm takes, and stuff for us to talk about on the show.

**Justin Searls:** I mean, if I could quit it, I would. But I think, speaking of addictions, I just compulsively keep putting stuff out, and I will keep texting it to you, so that you share it with your folks. I really do appreciate it. I have so much fun here. And hopefully, this conversation has piqued the interest of a few people who might start to think differently about whether their relationship with social media is serving them or not.

**Jerod Santo:** One more call to action... This one's selfish for me. If you have strong opinions on build versus buy, if you have strong opinions on dependency selection criteria, how you do it, I would love for people to write about that and send them to me, so we can aggregate a lot of wisdom. I feel like there's so many different ways to attack this particular problem... Wherever we are on our experience path, we have a different angle into this, and there's no one true way of solving this problem. That's why it's the perpetual "It depends." And so I would love to have an aggregation of a lot of folks who are smart, and then put thought into this, writing down their thoughts, so that we can all learn from each other. So there's my call to action.

Cool. Thanks, Justin. Thanks everybody for hanging out, and we'll see you on the next one.

**Justin Searls:** See you later, friends.

**Jerod Santo:** Bye, friends.
