**Jerod Santo:** Alright, we are here with Jake Zimmerman. What's up, Jake?

**Jake Zimmerman:** Not much. How are you guys?

**Jerod Santo:** Doing good, doing good. Happy to have you here. This is a requested episode... Always happy when we get to do a show that's --

**Adam Stacoviak:** Requested.

**Jerod Santo:** We know it's 100% on point, for at least one person in our listening audience. This one was requested by Max \[unintelligible 00:05:40.25\] who says "Type checking has been a white whale in Ruby for a long time, and very divisive. There's even a built-in attempt in Ruby 3 called RBS that hasn't gained much traction." Sorbet, on the other hand, has been adopted by many organizations, including Stripe, Shopify, Instacart, his company, JustWorks. And he says, "I think it's telling that many large Ruby shops are switching to some sort of type safety on larger Ruby codebases. It would be cool to hear from Jake, who works on Sorbet, at Stripe, around the origin story, what problems it solves there, and how it was like trying to convince pretty curmudgeonly Ruby devs to add type checking into their codebases." So Max, thanks for writing that to us. I agreed. I thought that would be cool, so I reached out, and you're here now, Jake.

**Jake Zimmerman:** That's true. Yeah, I think all of those things he commented on - it's kind of what I've lived and breathed for the past five years of working on Sorbet and type checking Ruby. It's been a wild ride.

**Jerod Santo:** Yeah, that was the first thing that I noticed, was - I had heard of Sorbet, but it was somewhat recently... And I went back to check a little bit on the history, and like you guys were doing presentations in 2018.

**Jake Zimmerman:** Yup.

**Jerod Santo:** And I think it goes back to 2017. Is that right? You've been working on it for a long time.

**Jake Zimmerman:** The project itself started, yeah, in fall of 2017, at Stripe. And that's kind of one of the things that's kind of set this project apart from a lot of other kind of like larger attempts to type JavaScript or type Python. We've kind of just focused on just doing what we need to do, and not really going out and trying to sell other people on this vision of what typing in Ruby could be. It's more just been kind of like "Here's what we have. If you want it, that's great. If you don't, you can still keep using Ruby."

**Jerod Santo:** What about inside Stripe, though? Is it more evangelical inside of Stripe in terms of like--

**Jake Zimmerman:** Well, that's the other weird thing... Max in his comment had said "I'm curious to hear how -- it must have been hard convincing these curmodgeonly Ruby developers", but it was the complete opposite inside of Stripe. It was the sort of thing were for years prior to starting this type checker project people were like "I love working at Stripe, our product is great, but every day I come in here and I have to use Ruby, and our codebase is too big, I don't understand how anything works... I really just wish there was a type checker." And so we didn't have to convince most of the company; we just kind of had to build the product.

**Jerod Santo:** \[08:02\] That's interesting.

**Adam Stacoviak:** Do you think that TypeScript and that move paved the way, to some degree, that it can be done successfully?

**Jake Zimmerman:** Oh, yeah. Absolutely. I think a huge part of it was people would switch back and forth between writing Typescript in the frontend, or Flow in the frontend, and then Ruby in the backend, and to know what could have been the case, what they were missing out on, basically... So they just asked for it, and they kept asking for it.

**Adam Stacoviak:** Yeah. The lack of types in Ruby is really keen to the prototyping, and I think Stripe is kind of baked... I mean, obviously, you're innovating. Do you think that that's maybe less needed now, once it's sort of -- you know where Stripe is going. It's a big codebase, lots of Ruby... Do you think that's why types in that environment is welcomed, versus "Hey, we're proving new ground here. We need to be at compile time flexible. We need that flexibility."

**Jake Zimmerman:** Yeah, I think people will sometimes say that in the prototyping phase you care less about types, and then in the iteration long-term maybe you need more types... I mean, there's a class of people that will break that mold and say "I actually prefer the type checking, even when I'm in my prototyping phase, just because if you do want to completely switch out one half of your system, you know, that you've switched it out correctly, because the type checker will catch you."

But I think that the biggest motivating factor for us was just at the time we were getting up to the place where we had hundreds of developers, and even if we were building new code, it was hard to make sense of it all. We really just wanted jump to definition, to be able to follow paths of control flow through the codebase, and connect things together. So it was more about understanding the code, I would say.

**Jerod Santo:** It's interesting hearing that, because I guess been around long enough, I remember when people would be so excited to be able to work in Ruby on their day job... Because it was just hobbies for so long, and it was slowly becoming adopted. Obviously, Rails really helped that adoption come in, when you could actually make money doing Ruby. But we're so far past that point, plus we're at a point where people switch jobs and orgs so much. I've talked to multiple people on the frontend side through JS Party, who have come to a Ruby shop like Shopify, or Stripe, from something else; maybe they grew up in JavaScript land, doing Node apps and stuff, and they're like "Yeah, the job's cool, but I have to use Ruby, and I don't know Ruby, and it's weird. I don't like it." And I'm like "That's it? That's the drawback, is the programming language?" And I understand it; it's just a weird place to be when it's like, that's the part of the job they're not excited about. Because it used to be that that was so exciting for people, to be able to use the programming language they love, and make money.

**Jake Zimmerman:** Yeah. It's probably just a relative popularity thing. I think that people's primary programming language tends to be just such a large fraction of how they think and how they approach problems, and if you're used to something, you want to switch -- if that thing is so different from the thing that you're currently using, it's kind of a culture shock a little bit.

**Jerod Santo:** So what is some of the origin story? How did you get to working on this? You mentioned people already wanted it, so apparently there was a desire inside of Stripe for something like this, but how come you -- and you've been working on it for a long time before the show. You said you eat, drink and dream -- I don't know if that's what you said, but something along the lines of Sorbet is all you think about. So here you are, five years later, still just thinking about that all day. Why you, and tell the origin.

**Jake Zimmerman:** Yeah, yeah. So I mentioned it started in kind of the fall of 2017. It started with two people who had been working at Stripe for a number of years, and one person that we had hired from just finishing his PhD, working on the Scala compiler. So it was a very small team, a very experienced set of people. They spent about a year building it from scratch. So by the end of that year, they'd gotten it to the point where it was able to type-check most of the code at Stripe. It was still kind of -- maybe only 75% of the codebase was opted into the type checker, and the other 25% still hadn't gotten around to enabling it. But I started at Stripe actually basically the same time that this project started. So I got to kind of follow the project from my team, just outside, looking in, for that whole year...

\[12:08\] When I was in school, I was always just super-interested in types and programming languages. I didn't really realize this until basically my last year of being in university. If I had realized it maybe a year or so sooner, it's possible I wouldn't have even joined Stripe, and I would have tried to do some sort of research and maybe go into higher education. But it didn't work out that way, and so I was just kind of like - I knew that I had this passion for types in programming languages, but I didn't quite understand whether there was a way to go from just being excited about it to being able to actually do it professionally. But I knew for this whole first year that I was working full-time at Stripe that we did have this team. And so I eventually got to the point where I was just like "I'm going to regret it for the rest of my life if I never even ask to join the team." So one day I just asked them, I said "Hey, do you guys have an opening? Can I come help out?" And it just so turns out that because this team had been staffed by these super-experienced people, that they actually really wanted somebody who had zero experience, so that the people on the team could have the chance to flex their mentorship muscles, and kind of learn what it takes to teach younger developers.

And so I was one year out of school, I was working with three really experienced people, who had basically this mandate, like "Your whole job now is to train this other person." So it was a great environment, and again - yeah, because I already knew that I was kind of interested in it, I just kind of dove right in. And that's kind of been it. We've worked on a handful of different things over that five years, whether it's been making the type system better, whether it's making the experience of using the type system in your editor better... We even spent a couple years working on an ahead-of-time compiler, using Sorbet to actually compile Ruby code to native code. And now we're kind of back focusing on how we can basically just improve the type system, improve the editor, improve the type-checking experience.

**Jerod Santo:** Was that ahead of time compiler? Was that work - it ended up not being super-fruitful, so you went back to it? Or what was the story when you went down that path?

**Jake Zimmerman:** Yeah, the compiler project - it was kind of interesting. It was at a point in time when latency was the primary concern for pretty much every team at Stripe. This was during the height of the pandemic, when suddenly everyone across the internet who was running a software company was seeing increased volumes, and increased loads on the system... So we had basically just every team working on different ways to achieve latency, and we were just going to take whichever long-term bet panned out the quickest. So some of those people working on latency were just profiling Ruby code, seeing where they could get latency wins, some people were focusing on making the database faster, some people were taking really longer term sorts of changes, like "Should we rewrite the core architecture to use a different language?" All sorts of different bets across the company. So one of these was the ahead of time compiler for Ruby. And we actually got to the point where it was completely working in production, and it really was just a matter of whether we wanted to continue working on it. And because of all the great work of other teams at Stripe making the Stripe API faster, we got to the point where we didn't quite need the latency from the Sorbet compiler; and it would have come with its own set of trade-offs, so given all that, we wanted to focus then again on the developer productivity side of having a type checker, where we can actually make people writing Ruby code more productive.

**Jerod Santo:** That's cool. So inside of Stripe then, if you could come up with a percentage of how much code is "sorbeted" across the codebase - do you have those numbers? Do you know how much is --

**Jake Zimmerman:** Yeah, yeah. Less than 1% is not using Sorbet.

**Jerod Santo:** Oh, wow.

**Jake Zimmerman:** \[15:49\] Yeah. There's kind of various strictness levels to what it means to have Sorbet turned on. So at the very bottom level it's what we call typed false. And even still, even though it says "typed false", it's still doing some kind of sanity checking, which - it'll make sure that all of the classes and modules and constant references in the codebase resolve, and it will obviously check that your syntax is valid. But then up from that, there's "typed true", and that's the point where Sorbet will start doing actual type inference on method bodies, and tell you if you have any classical type errors, like \[unintelligible 00:16:20.06\] sort of type errors. And then one level up from that is "typed strict". And that typed strict - not only will it do the type inference, but it'll require that you put explicit type annotations on every method in your file.

I think we even have that typed strict level - so it's like 99% typed true or higher, but at typed strict I think we're somewhere close to like 80%, or something like that. It's the sort of thing where over time people encounter the file that doesn't have type annotations, and encounter the files that do have type annotations, and they find that it's a lot easier to edit, and understand, and refactor the code that has the type annotations. And so they've self-selected to opt their files into these stricter checking levels.

**Adam Stacoviak:** That's interesting. Network effects, in a sense, right?

**Jake Zimmerman:** Exactly.

**Adam Stacoviak:** Like "Hey, this file doesn't have this. I want to bring it in there." It's good stuff. It's crazy to have such a project take over, too. In one of the posts - I think it's a 2018 post, saying "Where Sorbet is at now." This is state of Sorbet, spring 2018. It actually says "100% of our production Ruby files are sorbeted", according to this. "Every CI build in the main repository is checked at Sorbet", and you kind of lay that out there. But to put such a percentage there - this is a big deal. You're making developers productive. How does type checking, how does this really equate to being more productive? What are some of the ways that this comes into play?

**Jake Zimmerman:** Yeah, so there's all sorts of different things. I think that the quote that I like bringing up here is the first time that we -- so we've built this type checker, and it was really just kind of like this policeman just kind of like enforcing that you're not doing the wrong thing. In the beginning, that's all there was; it was like either your CI check would fail with a big, red, scary message, or it would pass. And that's fine. You can get a lot of value out of that. But the first time that we took this type checker and we started building editor functionality, kind of typical IDE sorts of features, and exposing that to users, that was when people really started to have their eyes light up.

So the first time that we sent an email to the company saying "You can now use Sorbet to get accurate jump to definition", people were telling us "This is the best Christmas present you could have ever given me. It's July, I don't even care." I think that people really identify with being able to understand their code, and use the information that the type checker has to just dive into an unfamiliar part of the codebase and have confidence that they're going to be able to figure out what it's doing.

**Adam Stacoviak:** It sounds a lot like what Sourcegraph markets, too. They call it code spelunking. I've heard Beyang Liu talk about that... Like, being able to jump to definition and explore a codebase - especially if you're moving teams, like Jerod mentioned before... If you're moving from one shop to another, you've got to relearn, if not just domain knowledge, but also like this built-up code knowledge of how the codebase works. In an untyped world, it's gotta be challenging if you can't do that.

**Jake Zimmerman:** Yeah. And it might be a problem that you only realize is a problem at a certain codebase size. For example, even inside the Sorbet codebase itself, it's only ever been worked on by two or three people full-time. The codebase itself is only maybe 100,000 lines of code. But when you get into these codebases where it's like hundreds of people over millions of lines of code, and the kind of ownership of which parts of the codebase are owned by which teams is fluid over time... You're very rarely working with the same lines of code for an extended period of time, and so you're kind of always doing that code spelunking, where you're jumping from one place to another... Yeah, that's the part in my mind where type checking gets to be super, super-valuable.

**Jerod Santo:** \[19:57\] When I think about programming languages that lend themselves towards type checking enforcement, Ruby is like on the bottom of that list, isn't it? I mean, this had to be a monumental task, because it's so malleable, it's so self-referential, it has reflection, it has metaprogramming... You can just monkey-patch and redefine and change stuff all the time... And despite the warnings of "Use with care", we tend do that when it's convenient. And sometimes we do it just because we can. I know I used to be a young Rubyist who'd like to show off the different things that he could do, even if it was just to myself... You know, "Oh, look what I can do." Was this very difficult to build? Are there still ways you could poke a hole through it? What's the situation with all of just the weirdness of Ruby as a language?

**Jake Zimmerman:** Yeah, I will definitely agree with you that the kind of dynamism of Ruby is both a huge strength, and that it's been what's let communities like the Rails community succeed, but also a big challenge, just because those sorts of -- like, when you can only understand what the code is doing at runtime, obviously that stands in the way of static analysis. So that's definitely a big problem. And I wouldn't say it's a fully solved problem in Sorbet, by any means. That's probably still one of the biggest reasons why you might evaluate whether your company or your codebase should switch to using Sorbet and you decided against it. Your team really gets a ton of value out of the super-dynamic metaprogramming sorts of features of Ruby, and Sorbet would, in many cases, ask you to give that up.

It's interesting, because Stripe actually started -- Stripe has never used Rails, but it has used a lot of metaprogramming, in especially its early history... And as people have started to adopt Sorbet at Stripe, it's kind of been this incremental rejection of the metaprogramming parts of Ruby. Part of this is because people see the value, again, that they get; all these features, all these safety guards that they get when people are using type checking in their files. So people will say, "Here's my trade-off. I'm willing to put down the metaprogramming and pick up the static analysis."

To dive into some specifics, if you can just basically read a network request that the static analysis tool is never gonna be able to see, and using the contents of that network request you're gonna be able to define methods in Ruby. You could ask the user to defer the name of a method to define, and define it. And there's nothing that the type system is going to be ever able to do to know that that method name is going to be available to be called.

So stuff like that has its place, and Sorbet basically just gives you escape hatches to be able to use that stuff. So again, we were talking about the typed false levels; if you have a certain file that's using a lot of meta programming, you can just opt to turn checking off in that file, where it's maybe super-metaprogramming-heavy, and turn it on in the other files. You can also silence the type errors at a specific call site and say like "Okay, even if I do have typed true enabled in a given file, this one call site where we're doing a lot of meta programming, I'm just going to ask the type checker to ignore that line." So you can kind of weave it into your system where you want the type checking to happen, and where you want to be able to use the meta programming. And yeah, each codebase or team or individual will kind of make those trade-offs, knowing what they're giving up and what they're gaining.

**Jerod Santo:** Are there any facilities in there to outlaw? You know, like "Hey, no method missing", for example. "We're not going to have method missing." Or maybe that's not really a Sorbet thing. Maybe that's like a linter -- I don't know. I guess Sorbet is kind of a linter on steroids, isn't it? I mean, how do you picture these tools fitting together?

**Jake Zimmerman:** Yeah, I think linters and type checkers are very complimentary. The thing about linters is they're way more heuristic-based, and so you kind of want the ability to say "I know better than the heuristic in this particular case." In Sorbet the rules kind of apply universally. So we are kind of more conservative with what we reject in Sorbet. Sorbet will not reject method missing, because if Sorbet rejected method missing, anybody who ever wanted to use it would not be able to use Sorbet. So in our codebase, we do have a bunch of linters. I don't know if we banned method missing or not, but...

**Jerod Santo:** \[24:15\] There's probably some method missing in there somewhere. We should explain method missing, for those who aren't regular Ruby programmers. So briefly, in Ruby, if you call a method on a module or on a class, and that class or that object of that class doesn't have the method that you just called, there's a method called "method missing" that you can define, which will then run other code that you have decided that it will run, in order to do whatever you like. So you can use it to dynamically define a new method, you can use it to run a switch statement, and do a bunch of different stuff, you could raise an error... It's just basically a hook for you to write some code in case the method that you called doesn't exist. And people have used that to do all kinds of things. One of the nice things is to write really nice DSLs, and provide like top-level keywords that are kind of arbitrary, or quasi-arbitrary, and use method missing in order to call them. But as you can imagine, you can also do some gnarly stuff in there, and it's difficult to analyze, because it's not defined until runtime.

**Jake Zimmerman:** Yup. So method missing is definitely one of those kind of tricky parts for Sorbet to analyze, but it's far from the only one. We do have plenty of linter rules that we turn on to basically say "This is okay, this is not okay", and yeah, kind of guide people into having the most success when using Sorbet.

**Break**: \[25:32\]

**Jerod Santo:** So one thing that Max brought up is like first-party, I guess, Ruby official types, which he says \[unintelligible 00:27:44.06\] I don't know much about this. I'm sure you probably know a lot about this, Jake, just from being in the community... Tell us about that, how it relates to Sorbet, are they wildly different? Are they similar? Could they adopt Sorbet if they wanted to? He says it's divisive, so I'm sure there's lots of opinions as well about this topic.

**Jake Zimmerman:** Yeah, I think it's mostly divisive just because typing in generalist is divisive in the Ruby community, mostly.

**Jerod Santo:** Right. Not like a specific implementation. That's going on in the Elixir community right now as well, is they're talking about types for Elixir... And that's divisive, because - same exact reasoning.

**Jake Zimmerman:** Yeah. And so obviously, as someone who works on a type checker and who has been interested in types for a very long time, I'm super-biased in favor of the typing side of this. And I hold the view that types will always win in the long term, but... So you're gonna get the bias view here on the state of typing in Ruby. I don't even think Sorbet was the first attempt at building a type checker for Ruby. There were a number of research projects, specifically I remember a couple by the kind of like research projects out of the University of Maryland... I think there was also one other type checker that was built by a person by the name of \[unintelligible 00:28:53.15\] Matsumoto, out of Japan, and it was called Steep. Then there was one other that was kind of like a very hobby project, built by someone at GitHub, in their personal time.

So Sorbet kind of started as this just one more type checker sort of thing. So it's always been the case that people have noticed that Ruby didn't have types built into it, and kind of decided on various ways to add their own. Eventually, I think that the popularity of Sorbet and the kind of backing of having such a large company like Stripe and Shopify behind it meant that the Ruby Core team was more willing to consider what a first party typing support would look like.

We actually have met multiple times with the Ruby core team. For a period of time, we were meeting with them monthly to kind of talk about what the state of typing in Ruby would look like... And over time, it became apparent that the design constraints that we were going to be working under would be no syntax changes to Ruby itself. That partly this is because Ruby is already syntactically very complex, and parsing Ruby is already hard; adding more syntax in service of type annotations would have been just challenging on its own. But also, Mats, the person who created Ruby, and still has a very significant influence in what features get added and what don't, was pretty partial to keeping type annotations out of the core syntax. So that meant that we were kind of focusing on having annotation files that lived alongside the Ruby source code; so you kind of have this split between like header files and source files that you might have in C and C++. So that comes with its own trade-offs.

Some people will say that is already a non-starter for them. That no matter what syntax you choose for these definition header files, that it's already going to not work for them and cause a division in the community. That's, I think, a valid concern, but let's just press forward and say that we're fine with having these annotation files. The next thing that you're going to run up against is do you use the same syntax as Ruby in these annotation files, or do you invent something completely new syntax? Sorbet - one of its design goals was to be backwards-compatible with the syntax of Ruby. And so all of the Sorbet type annotations are actually just a Ruby DSL. So there's no transpilation step that you need to be able to use Sorbet in your codebase. It's just kind of the magic of, again, the Ruby metaprogramming, one of the benefits that you can get it so you can define these ad hoc syntaxes, and they're backwards compatible.

So Sorbet already had this type annotation syntax that was valid Ruby code, and to make these kind of header files, these definition files, it repurposed that existing syntax. So you only had to learn one way to declare the type of an array, you only had to learn one way to declare a signature for a method, to declare an interface, to declare abstract methods, all these sorts of things. The fact that they lived in the source code of a Ruby file, or in some file alongside was just a preference for where you want types to live in your codebase. But I think that the problem with that is that by defining types in this DSL syntax that we had invented ourselves, it was kind of clunky. We had to go to kind of great lengths to be able to choose syntax that was backwards compatible with what we could build a DSL out of.

\[32:16\] So at the same time that we were working on defining these separate files, we came to the realization that we don't have to be backwards compatible with Ruby in these new files. We could just throw everything out the window and design a type annotation syntax that would be a little bit more elegant, but not necessarily fully compatible with existing Ruby code. So that was the approach that we ended up taking, that eventually standardized as what they call RBS files, or Ruby signature files. And yeah, they just have a completely different syntax, but they're a lot less verbose than Sorbet annotations.

At the end of the day though, they are just annotations, and Sorbet could one day just parse them, and understand the annotations that are in them. I think that that's mostly just been -- we haven't quite gotten the feedback that people would really absolutely love to use Sorbet, but also like the one thing holding them back is whether it parses these RBS files, versus the annotation files that Sorbet supports. We've been focusing on building features for the people who are using Sorbet, and those people are asking, again, for things like better editor tools, or better type system features, so that's where we end up spending our time. So it's kind of more just like not a fundamental separation, but rather just like it would be work that we have to do, and we haven't yet found that it bumps up to the top of the list.

**Adam Stacoviak:** Okay, good explainer of the state of things, at least from specifically on the Sorbet side. What about on like the Ruby lang's side, with this RBS? Is it going to happen?

**Jake Zimmerman:** Oh, it's already happened.

**Jerod Santo:** It's already out there, and --

**Jake Zimmerman:** Yeah, they shipped these annotations, this format in Ruby 3.0.

**Jerod Santo:** Okay, so it's shipped, and public, and you can just use Ruby 3.0 Plus, and annotate your Ruby with the RBS files. And it's just a built-in type checker into the language, or...?

**Jake Zimmerman:** So it's still you have to pick and choose your third party type checker. The annotation format is just --

**Jerod Santo:** Okay, so it's not like built-in then. It's like a spec.

**Jake Zimmerman:** Exactly.

**Jerod Santo:** Okay.

**Jake Zimmerman:** Probably the most popular type checker that uses these annotations is the Steep type checker, which I mentioned earlier.

**Jerod Santo:** Okay.

**Jake Zimmerman:** There's also -- yeah, there's a handful of other tools that consume them... It's just that Sorbet kind of doesn't, and maybe that's the biggest point of division, is that we haven't gone into the work to parse these files.

**Adam Stacoviak:** Is that just the nature of the -- that it's open source, and you've got other things that are more important, obviously? It's not that you don't want to, it's like eventually you might?

**Jake Zimmerman:** Yup. Yeah, exactly. For example, the sorts of things that we would have to stop working on right now are -- we've made a number of improvements to just the core type system for what you can actually express in the type system. We've made improvements to how fast Sorbet is, all sorts of things like this... And so we regularly go and ask people, whether that's in the open source community, or people using Sorbet at Stripe, "Hey, what's the thing that you wish existed the most?" and it's always something else.

**Jerod Santo:** I guess why wouldn't it just get built in? That's what I don't understand. And I guess maybe you could say, "Well, Ruby Gems wasn't built in either for a really long time, and eventually, Gem became shipped with Ruby." And so this would be a similar circumstance, maybe; like, they want a bunch of tools to be able to do this, and... It just seems like if they - "they" being the Ruby Core team - were super-committed to types, that maybe this is just step one, and they're going to do eventually. They would do this, and they'd say, "And download Ruby 3, and it's type-checked."

**Jake Zimmerman:** Yeah, I guess one of the benefits of having it be this third party gem is you can iterate on it and release new versions independently of Ruby versions. So Ruby kind of famously releases a new version only once a year on Christmas. But if you wanted to add a new revision to the RBS spec, or standard, or parsing libraries for it, having that be in this extra gem that you'd have to opt into makes the release process a lot easier.

**Jerod Santo:** \[36:17\] Good point. You've obviously thought about this more than I have, Jake... And of course, there's lots of different parties involved in these kinds of decisions.

**Adam Stacoviak:** It's got the wrong name though, Jerod.

**Jerod Santo:** What's that?

**Adam Stacoviak:** That's why it's not being adopted by the core team. It needs to be called Type Ruby, or something like that.

**Jerod Santo:** Oh, Sorbet?

**Adam Stacoviak:** Yeah. What do you think?

**Jerod Santo:** Sorbet is a cool name, man.

**Adam Stacoviak:** It is a cool name, but I just wonder if it needs to be like TypeScript-like. Like, take a page from the TypeScript book, and it's gotta be TypeRuby, or something. I don't know. I'm not saying it's the wrong name, I'm just making a joke.

**Jerod Santo:** \[laughs\]

**Jake Zimmerman:** Again, I think one of the other things that set apart Sorbet and TypeScript is just the amount of evangelism that has been put into each project. I think that Microsoft in general is just really good at building products for developers and evangelizing them... And Stripe as a company does that as well. Obviously, Stripe is an API company, and it evangelizes their API, but it's never been the case that Stripe really evangelized Sorbet. And that's - yeah, just having popularity and community enthusiasm behind the project would be the sort of tipping point, I think, behind maybe more first party integration with Sorbet.

**Jerod Santo:** Right...

**Jake Zimmerman:** But we're kind of fine with the way things work now. We build the thing, and we ship the thing, and people who want to use what we've built are completely able to do so. And people who we'd prefer to ignore, we can.

**Jerod Santo:** So let's talk about Sorbet itself, like the implementation, the design... I was reading some of the docs and some of the guides, just trying to see what it was like to use. I did notice pretty decent pure Ruby DSL; you're writing Ruby inside of your Ruby in order to specify a method signature, and that kind of stuff... There were a few phrases on the website that I was like "This sounds fancy, because I don't know what it is." Now, I'm not a type guy, so maybe people who are all about type checkers know these kind of things. But I read "Gradual type checking", I read "Control flow-sensitive typing"... Some stuff that sound like Sorbet features, that I'm sure you had a large part in, that maybe you could -- that might be interesting to our listener to learn about Sorbet.

**Jake Zimmerman:** Yeah, absolutely. So gradual type checking is just this idea that you don't have to type-check 100% of your codebase from day one; that you can --

**Jerod Santo:** Like opt in, yeah.

**Jake Zimmerman:** ...opt in at various levels of granularity. That's basically table stakes if you're trying to add a type system to a language that didn't start with a type system. I don't necessarily -- there will definitely be people out there who tell you that this is actually a completely desirable property, even if you're designing a language from scratch today. Again, you're getting the bias type system nerd's view, and I think that it's more just like a trade-off that you have to accept if you're adding types to a language that didn't start with them. Because it means that you have these gaps; you'll always have these gaps in the type system, where it won't be able to tell you when you've messed up. And so the biggest problem then is actually figuring out and identifying where the gaps are, if that's the state of your codebase.

Control flow-sensitive typing is really interesting, and I actually think that even more traditional languages that don't have backwards compatibility with untyped programming languages could benefit from. And that's just this idea that if you have something that is either nil, or some real type, like maybe an integer, or some struct, some class that you've written, that the type of the variable will be aware of all of the conditional branches that you've taken through the codebase.

So if you start out with something that's either nil or integer, and then you say, "s this thing nil?" Well, if you use that variable inside of that branch, Sorbet will be able to say "You've already checked that this thing is not nil. Here it's an integer." TypeScript does this; most languages that are gradual type systems for existing untyped languages end up building this feature, just because there's so much Ruby code out there that's written this way, or so much existing untyped code out there written this way, that you get a lot of ease of adoption by building this feature. You don't force people to go change their codebase to be - I don't know - maybe a little bit easier to type-check. So it's this advanced type system feature, for sure, but it's one that models Ruby code as it exists in the real world, and makes it easier to start using the type checker.

**Jerod Santo:** \[40:29\] Okay. What's an example of when that might be useful, or some code that might typically hit up against this? Just not knowing necessarily the value being returned?

**Jake Zimmerman:** Yeah. So for example, let's say that you are interacting with the database, and you try and load some object with a specific ID; you're going to either get back nil, if that object doesn't exist, or your ORM is going to give you the model class back. And if you are writing kind of good, defensive code, the first thing that you do when you try and load this thing is you're going to ask whether it existed or not, and then you're going to handle that exception case. Maybe you report an error to the user, maybe you try looking for the object in a different place, maybe you do something else. But in the case where you definitely know that you have it, now you can start calling the methods on your model; you can ask for the user's name, and the user's email, or whatever fields are on this model class that you got back.

So if Sorbet thought throughout the entire method body that this variable that you got back from your ORM was either a nil or a user model, then it's going to say "I don't know whether this -- I can't claim for sure that you calling these methods on this model exists or not."

**Jerod Santo:** Gotcha. Yeah, I can definitely see a lot of Ruby code out there like that, because there's so many -- like, that nil case is just always the edge...

**Jake Zimmerman:** Exactly...

**Jerod Santo:** ...that just causes us to want types in the first place... \[laughs\]

**Jake Zimmerman:** For example, this was kind of famously -- Java's billion-dollar mistake was conflating that every type could be null. I think that it's obviously very hard to make changes to a language as widely used as Java is now, but it's the sort of thing where if you could solve this problem, and build control flow-sensitive type checking for specifically whether a value is null or not, I think it would go a long way to making it easier to reason about - yeah, in Java even, like whether a value is null or not.

**Jerod Santo:** Mm-hm. So you bring up an ORM, which makes me think about Active Record, which makes me think about Active Record Base, as it used to be called; base classes, or... It makes me think about existing Ruby libraries. One of the huge advantages of TypeScript being so wildly evangelicized sized and adopted is that like darn near every library is shipped with type definitions for TypeScript to just work out of the box. And I'm wondering if Sorbet has that kind of momentum, or is there a place where you can go out and say "I'm going to use this Ruby gem", and most of the gems are already typed by somebody?

**Jake Zimmerman:** Yup, I definitely noticed that in TypeScript. Most libraries that you pull off of npm are already going to work with TypeScript just out of the box. There's kind of nowhere near that level of support for typing in Ruby Gems that you'll encounter most commonly. And there's a number of reasons for this. Part of it is as a project, we've almost always focused on making it easier for application developers and library developers; we've always taken less steps to making the process easier for them. That's definitely something that would need to change. Partly, it's just kind of, we've never gotten around to it.

I think that despite the low investment, people have still done it, and still published gems that have type annotations for them. The biggest ones though, like Rails, don't. And so if you want to be able to use Sorbet in a project that's using like Active Record Base or something like that, you're going to need a different approach to be able to type these sorts of things. The way that that is typically handled in Sorbet is with third party gems that will analyze the way that you are using these gems, and generate those annotation files that we were talking about earlier.

\[44:14\] So instead of annotating the source of Active Record itself, you would look how Active Record is being used in your codebase, and generate some annotation files, and rely on those annotation files to figure out what the gem is doing.

**Jerod Santo:** This seems somewhat fraught. Is that pretty reliable at the end of the day, or is my spidey sense accurate?

**Jake Zimmerman:** It's somewhat fraught, for sure. It's kind of a question of like how much you're going to push it. If you're using the very common cases, it'll be fine. But if you're trying to do something more complicated, especially if you combine this with heavy use of metaprogramming, then it's going to be a little bit trickier.

I think that recently one person in the community - it's actually someone who has been on this podcast before, Justin Searls...

**Jerod Santo:** Searls, yeah.

**Jake Zimmerman:** He's actually maintaining this Mocktail library for -- kind of a testing library for Ruby. And he has been posting quite a lot in the Sorbet Slack, just about what it takes to get typing added to a gem. And it's been really interesting, just because it's exposed all of these places that we could make the experience better. Just about like decisions for if you want to have type annotations in this gem, should you start with having annotations that live inside the source code, and then strip those out before you publish? Or should you put them inside your source code, and also have files that live alongside? Should you make it easier for people to just generate the RBIs on their own? Anyways, it's like, his experience has been neat, because every time he ran into a challenge, he posted about it, and asked questions, and it's been kind of eye-opening to just have that experience. Justin, thank you for all of the comments that you've given us.

**Jerod Santo:** That's one of Justin's skills, is communicating. He's always willing to post those comments, whether they're more or less salty, depending on his mood...

**Jake Zimmerman:** Yeah, he's been quite polite, so...

**Jerod Santo:** Awesome. \[laughs\]

**Jake Zimmerman:** Maybe that's gone through your filter, but it's been great seeing what he's been working on.

**Jerod Santo:** He's usually pretty unfiltered, but he's also a kind person. When you say RBI now, is that the same thing as RBS on the other side, but it's like --

**Jake Zimmerman:** Yeah, sorry - that's the name that Sorbet uses for these annotation files. It uses a different syntax, but for the same goal. RBI just stands for Ruby Interface.

**Jerod Santo:** Okay. So if I was going to provide type annotations for something, I would produce an RBI. Or I guess this is what Justin is trying to figure out with Mocktail, is what do we actually -- what's our output as a library author?

**Jake Zimmerman:** Yeah. So as a library author, you would either have to have Sorbet read the sources of your gem files, and use that to understand what's defined... But typically, people will not ask the source of the gem via type checks, because obviously, then it's also going to do things like actually read the method bodies, and make sure that all the method bodies type check, and that's going to be particularly slow. So having just the interface files will speed things up a bit.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** Why go RBI and not RBS? Why would you create a whole new world, in a way?

**Jake Zimmerman:** Well, so it kind of harkens back to the conversation we were having earlier about "What syntax do you want in these files?" Do you want the contents of these annotation files to be the same syntax as Ruby code? Or do you want them to start from this blank slate, where you can design the syntax that you want? So the syntax of RBI files is literally just Ruby files, with no method bodies. So if you wanted to annotate a method, it's the same syntax in a Ruby source file, as it would be in a Ruby interface file.

**Jerod Santo:** Whereas RBS is this streamlined syntax that you plus the Ruby team kind of collaborated on? Is that correct?

**Jake Zimmerman:** \[47:47\] Yeah, exactly. In defense of the RBI syntax, I think that one of the things that's a lot easier about it is you don't have to kind of switch between two type systems in the docs. So if you see a type annotation anywhere in Sorbet's docs, it's completely valid to put that both in the Ruby file, or in the RBI file, versus having to learn two type syntaxes if you're trying to use Sorbet with RBS files.

**Jerod Santo:** Gotcha. Now, does Sorbet run faster with RBIs than it would just in the source code, or does it not matter?

**Jake Zimmerman:** It's really just a function of like how many bytes Sorbet is reading.

**Jerod Santo:** If your source files are really long, then it might slow down a little bit, just to parse through and get the actual annotations out.

**Jake Zimmerman:** Yeah. The crazy thing though is just how fast Sorbet actually is. I have gone on record many times and claimed that Stripe's Ruby codebase is the largest. Obviously, I haven't seen every Ruby codebase in the world, and no one has contested me on this point... So I'm going to go forward and continue saying this until someone corrects me, that Stripe's Ruby codebase is the largest Ruby codebase in the world, and --

**Jerod Santo:** Bigger than GitHub?

**Jake Zimmerman:** Oh, by a long shot. And the nice thing about this if you are a user of Sorbet is Sorbet will -- the amount of time that it takes to type-check your codebase will never be longer than the slowest codebase type-check. So you kind of like benefit from -- someone will always encounter performance problems before you will. And that someone will be Stripe.

**Jerod Santo:** That someone will be Jake Zimmerman. \[laughs\]

**Jake Zimmerman:** Yeah. So that's kind of why a large part of the work that we end up doing is just optimizing and optimizing. One of the fun projects that I got to work on last year was making Sorbet more incremental. The entire history of Sorbet, if you needed to run Sorbet in your editor - it would basically just retype check the entire codebase. And it was fast enough. Like, it would be a little bit slow. You'd be able to see when it's doing this re-type-check operation, but it would only maybe last a couple seconds, and that's fine. That's actually like most of the time fast enough.

Eventually, the codebase got to the point where that wasn't fast enough, which meant that we had to do some work to make it faster. And the way that we did this was just being smarter about not doing work. Basically, we would figure out the contents of any given edit, and say like "Okay, well, we can actually tell that in this edit only these definitions have changed", and then do some really clever things to not have to re-type-check the entire codebase. So it's those sorts of optimizations that personally I find really fun, and also people benefit from; the codebase will never get to the point where it's super-slow to type check, because we've found the problem, fixed it before it ever becomes a problem for anyone else.

**Jerod Santo:** Stripe is bigger than Shopify?

**Jake Zimmerman:** Yup. Shopify, I think --

**Adam Stacoviak:** He's saying this so unequivocally. \[laughter\] He's like "Yup."

**Jake Zimmerman:** I know -- Shopify's codebase is one of the codebases where I have actually very exact numbers on how large that codebase is.

**Jerod Santo:** Because they're using Sorbet...

**Jake Zimmerman:** Yup. They're also one of our closest partners that we collaborate with on improving Sorbet. They've made a number of contributions themselves, and we meet regularly with them to figure out how we could be making Sorbet better. So that's kind of like one of the things that I'm always worried about, is "Well, what if the performance is getting out of hands on other people's codebase, and I'm not able to even see what the problems are?" Because I can go profile our codebase and see what the problems are.

**Adam Stacoviak:** Is Twitter still Ruby, or...? Are they still a Rails shop, or...?

**Jake Zimmerman:** I don't think Twitter is Ruby anymore. I think they use --

**Jerod Santo:** Scala. A lot of Scala.

**Jake Zimmerman:** Scala, and maybe some other languages at this point.

**Adam Stacoviak:** \[unintelligible 00:51:08.14\] too much, I guess...
**Jerod Santo:** Is Stripe bigger than Basecamp? It probably is.

**Jake Zimmerman:** That's one of the ones I don't know of. But again, no one has reached out and told me otherwise, so...

**Jerod Santo:** Alright, listen out, listener out there... If you have a codebase larger than Stripe, or you think it's larger, then you need to let us know, so we can prove Jake wrong. How many lines of code roughly?

**Jake Zimmerman:** Yeah, so I wrote a blog post on the Stripe Engineering Blog in May of 2022, I believe... And the codebase size at that time was 15 million lines.

**Jerod Santo:** And that was a year ago, roughly.

**Jake Zimmerman:** That was a year ago. If you think you can beat 15 million lines, I'd be very, very curious to hear. Now, I also want to express my condolences for having to work in a 15-million-line codebase...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Is lines of code the best way to quantify it though? Wouldn't bytes be better?

**Jake Zimmerman:** Yeah, bytes would be better, for sure.

**Adam Stacoviak:** I mean, you can have a long or a short line, right?

**Jerod Santo:** \[51:59\] Yeah.

**Adam Stacoviak:** If you have like millions of short lines, and I have half a million really long lines, maybe I win.

**Jake Zimmerman:** Yup. No, absolutely. Bytes -- like, if I've sniped you enough, you, dear listener, into "Let's compare our codebase sizes", I will try and ask if you can find the number of bytes. It's usually the tools that report codebase sizes are easier to measure lines of code, for whatever reason. So that's usually kind of like -- that also makes for nicer headlines and blog posts.

**Jerod Santo:** Right.

**Jake Zimmerman:** "Stripe's codebase has this many bytes" doesn't quite have the ring to it than --

**Adam Stacoviak:** Right. LLCs are better in that case, yeah.

**Jerod Santo:** But if it's gonna come down to it, we'll go byte for byte, that's what you're saying. We'll definitely do that.

**Jake Zimmerman:** Yeah.

**Jerod Santo:** Okay.

**Adam Stacoviak:** If \[unintelligible 00:52:39.22\] let's go byte the byte.

**Jerod Santo:** Yeah, exactly.

**Adam Stacoviak:** Okay.

**Jerod Santo:** Cool, man. So I guess the only thing that I'm left thinking is what is the user experience like? Let's just say I have a 12-million-line Rails app out there... Or maybe even a 16-million-line Rails app out there, and I'm thinking Sorbet might be for me. How do we opt in or incrementally adopt? What does it look like day to adopt it and use it?

**Jake Zimmerman:** Yup. Yeah, so the steps to adopt it - you can just go to Sorbet.org, and there'll be instructions there. The instructions will basically ask you to install a gem; there's actually two gems. One of them is going to be the static type checker that will report all the type errors in your code, and one of them is going to be that runtime library that lets you use the DSL for annotating type syntax.

So you add these two gems to your codebase... You don't even need to write any annotations out of the box if you don't want to, and you can start type checking. It'll probably report a bunch of errors on your codebase; you can either fix those errors, or you can turn off the type checker in those files, and that's that.

The thing that you're going to want to do is as quickly as possible get it to the point where every file is at least typed false. So if you have any files that don't have valid syntax, or that have constant names that Sorbet doesn't know about, there's various ways to fix those errors... But that's kind of the baseline, is getting every file to be able to type-check it typed false. And from there, you can now start using Sorbet in CI, and making sure that it continues to type-check. You can start using Sorbet in your editor, and take advantage of all these jump to definition features, and then gradually, again, opt individual files into stricter levels, start adding type syntax to the methods that you care the most about, and that's kind of it.

**Jerod Santo:** Yeah. What does the editor support look like?

**Jake Zimmerman:** So there's a VS Code extension that you can install, and it'll automatically figure out where Sorbet is installed in your codebase, and how to run it. And it'll show you the errors, and all of the fancy VS Code features will be wired up. If you don't use VS Code, the editor support is powered by a language server protocol server, and it'll work with any editor client that supports the language server protocol, which is most of them at this point.

**Jerod Santo:** I thought that might be coming, because I read that you're a Vim guy, and I thought "There's no way Jake's not gonna have support for his favorite editor through some sort of fashion."

**Jake Zimmerman:** Yup. No, t works completely fine in Vim over LSP.

**Jerod Santo:** Sweet.

**Adam Stacoviak:** What about tracking adoption? I see there's two documents here in your docs... Adopting Sorbet, which is outlined, as you mentioned, and then you also have tracking it. How important is it to track adoption when you begin to incrementally bring it in? Who's tracking the adoption?

**Jake Zimmerman:** I'd say that the tracking adoption, the metrics one is more focused for larger companies that are going to be staffing the effort to ad types as like a proper project. The nice thing is you want to give other stakeholders at your company visibility into the progress that you're making... And there's various ways to ask Sorbet to report how much coverage there is in the codebase, so that you can keep people involved and in the loop.

The first thing you asked me was how many files does Sorbet have type-checked in Stripe's codebase, and - yeah, it'll print those out, so that you never have to be in the dark about how much progress you're making.

**Adam Stacoviak:** \[55:59\] I also see TypeScript versus -- I guess versus, or comparative to Sorbet as a document. I'd imagine, since you all use TypeScript on the frontend, and then on the backend Ruby, obviously... This Sorbet type checker - you're wanting to keep the mental gymnastics to a low. So what is this document outlining? If you're familiar with TypeScript, you should be somewhat familiar with the way Sorbet is doing? Are you trying to mirror a lot of what they've done well?

**Jake Zimmerman:** I think that doc is one big table that kind of like "If you know this type system feature, and the name for it in TypeScript has this name, here's the corresponding name in Sorbet's type system." Because again, people are way more familiar -- for a lot of people, TypeScript is people's only experience with a type language, especially these days. So kind of anything that we can do to make it easier for people to onboard to Sorbet and understand what names we've chosen for various pieces of the type system - that's what that Doc is trying to provide.

**Adam Stacoviak:** Earlier in the show you said - I'm gonna paraphrase - something to the fact that types will win in the end, or it's a type world... Restate that, and give us the synopsis of why you think that's true.

**Jake Zimmerman:** I just -- yeah, part of it is just a fanatical belief, and part of it is I just live and breathe the benefits of type checkers every day. And especially once you get to the point where you can no longer hold the codebase in one person's head, where you have to start collaborating on a codebase with more than one person, which is almost all codebases that do anything interesting these days, having a type checker to offload the burden of understanding the code and keeping track of relationships between various files and data structures and all these sorts of things is super-valuable.

So just - again, we've kind of talked about this at the beginning, where the language that you use changes the way that you think, and changes the way that you approach problems, and languages with type systems I think give you such strong vocabulary for how you can structure your thoughts.

**Adam Stacoviak:** Did you say "Types will win in the end?" What was the exact phrasing? Lay it down hard.

**Jerod Santo:** \[laughs\] We're trying to name this episode; we're trying to get you to nail it down so we can name it that.

**Jake Zimmerman:** Yeah, let's -- I mean, now that I know I'm on the book for figuring out what it is... I will say like - yeah, types will win in the end, just because they're so much more... Yup. This kind of harkens back to my schooling days, where I had professors who were super-fanatical about types, and they kind of instilled in this -- kind of like going to church and hearing your preacher preach about whatever gospel, just kind of preaching about the values of types... So types will win in the end, sure.

**Adam Stacoviak:** There you go.

**Jerod Santo:** Alright, last question for me... You are a type fanatic, working in a dynamic language, which you seem to have much respect for, at least on display, and you have a cool job, so surely you want to keep it... But if you were to not have to use Ruby... Like, if you were just like Jake Zimmerman start from scratch, surely there's a programming language you like better, because of the type side of things. What would you be working in? Would it be something --

**Jake Zimmerman:** So when I was in school, almost all of our classes were either in C, which is just - everyone should learn C at some point - or they were in this language called Standard ML. Standard ML is not a very widely-known language, but it was kind of one of the first languages to really pioneer algebraic data types, and pattern-matching, and type inference, and all these other type system features that have started to gain rapid popularity in other languages. So I would probably -- I think that using Standard ML as a language to actually write code in is almost impossible. There's no libraries for it. There's no build system for it. There's no way to really collaborate with other people. But a lot of languages have gone to great lengths to copy their features. So I think that the most popular language that has copied the most from Standard ML is probably Rust. So I would probably try and use Rust if it were possible.

**Jerod Santo:** Very cool. I'm looking at the Wikipedia, "Influenced: Elm, F\#, Haskell, OCaml, Python, Rust and Scala." So a lot of influence, like you said, on other languages... I guess at the end of the day Rust will win... \[laughter\] Rust will win at the end, because Jake says so.
Cool. Adam, any other questions on your end before we let him go?

**Adam Stacoviak:** \[01:00:22.15\] I'm clear. I almost brought back in "Cold ice cream and hot kisses", because... Sorbet. But whatever.

**Jerod Santo:** Ah. Don't do it. Jake probably hasn't heard that episode yet. \[laughs\]

**Adam Stacoviak:** He's like, "What are you talking about?"

**Jake Zimmerman:** The funny part about the naming of Sorbet is I'm not even a huge fan of Sorbet. \[laughs\]

**Jerod Santo:** Oh, no...

**Jake Zimmerman:** I really like ice cream better.

**Adam Stacoviak:** What exactly is Sorbet?

**Jake Zimmerman:** I think it's more of like a dairy-free alternative to frozen deserts...

**Jerod Santo:** Yeah, like strawberry usually, or...

**Adam Stacoviak:** Well, it's like a snow cone of sorts, right? Similar to that.

**Jerod Santo:** Sort of...

**Jake Zimmerman:** That's the other funny part, is I don't think it's typically served in a cone, but our logo definitely has it with a cone.

**Adam Stacoviak:** Yeah, it does.

**Jerod Santo:** Now we know what's holding back adoption; it's just a cognitive overload... \[laughter\] "What is this Sorbet thing?!" I think it's a cool name, just because it's different, and memorable.

**Adam Stacoviak:** It is. Well, that's half the battle. I mean, Go, for example, is a challenging language to operate around when it comes to finding information, because it's just a good name, but poorly named in reference to the fact that everything goes somewhere.

**Jerod Santo:** It's overloaded.

**Adam Stacoviak:** You have to say "Golang", which is basically frowned upon by anybody who writes Go daily. Like, Golang is not part of their lexicon at all.

**Jerod Santo:** They have like weird rules around this.

**Adam Stacoviak:** They do.

**Jerod Santo:** Just social norms. Like, you can type Golang, but you shouldn't say Golang. I'm like "I don't know all these rules, people..."

**Jake Zimmerman:** There's definitely a similar problem with Sorbet, where if you try and search like Sorbet, a thing that I need to search for, half the time it'll just show you like recipe sites.

**Jerod Santo:** You're gonna get some frozen sherbert, or whatever it is. Well, you landed Sorbet.org, which is a sweet website, considering in 2017 most websites were overtaken by them... But just one single word, got the.org, so I mean, that's good.

**Adam Stacoviak:** Yeah, that's good stuff.

**Jake Zimmerman:** Yeah, it was definitely -- I was excited to get that one. There's actually quite a few good domain names out there. It's just kind of a question of how much you have to pay for them. But luckily, it wasn't a personal project, it was a Stripe project... So what looks expensive for me looks a lot cheaper for Stripe.

**Jerod Santo:** Good point. Adam, we should start some Stripe projects. \[laughs\] Get some good domain names... Alright, we're bike-shedding the name; I think that means we're officially done here... Don't you think, Adam?

**Adam Stacoviak:** Let's do it. We're done.

**Jerod Santo:** Alright.

**Adam Stacoviak:** Thanks, Jake.

**Jerod Santo:** Jake, thanks so much for coming on, man.

**Jake Zimmerman:** Yeah, thank you for having me.
