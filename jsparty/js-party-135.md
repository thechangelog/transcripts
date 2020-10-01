**Nick Nisi:** Hello, and welcome to another exciting JS Party. I'm your host this week, Nick, and I am joined by three fantastic panelists. First of all, Kball. How's it going, Kball?

**Kevin Ball:** Hello! It's good.

**Nick Nisi:** Welcome, welcome. Also, Divya. Divya, welcome.

**Divya:** Hello, hello!

**Nick Nisi:** And finally, last but definitely not least is Chris, aka b0neskull. b0neskull, how's it going?

**Christopher Hiller:** Howdy!

**Nick Nisi:** We have an exciting show lined up for you today. We are gonna be talking first off about the framework wars, and specifically what is new in Vue, what is coming down the pipeline apparently soonish with Vue 3, and our resident Vue expert Divya is gonna walk us through that. Divya, do you wanna tell us some of the exciting things coming in Vue 3?

**Divya:** Yeah, definitely. We've talked a lot in previous episodes - Kball and I have gabbed on and on about Vue 3... And we've speculated many times as to when Vue 3 will appear and come to the fore, without knowing exactly when that day is... But I think it was the beginning of this month. July 1st Evan You opened an issue in the RFC's repo for Vue, with a status update, which is something that we've been waiting for for a really long time... Because I think Vue 3 was slated to be released at the end of 2019, and then they were like "Beginning 2020." I think eventually it was around Q2, so we are in sort of Q2... Are we in Q2? Yeah. So there's finally an actual status update.

It's not super-clear as to the exact date that the release will happen, but there is a long thread that points to the targets that they have at the moment, which is actually the closest that they've ever gone to telling you a timeline. So from that particular doc, which we'll copy in the notes, it says that IE11 compatibility will be by July 2020. I would say end of July, because we're currently in the beginning of July and we haven't heard anything yet... So July 2020 I think is IE11 compatibility, as well as the migration guide, which I think is gonna be really important for people to migrate their applications.

\[00:04:04.28\] But in terms of using Vue 3, I believe it's fairly production-ready at the moment... And by production-ready I mean it's ready if you don't care about IE11. Otherwise it's not production-ready. But it is ready to be used... I think they've compartmentalized various parts of Vue 3, so you can use the composition API if you use Vue Router in the Vue 3 form, and so on. So you can pick and choose, and use various parts of Vue 3 the updated release, without having to wait for a lot of these pieces if you don't care about that.

**Nick Nisi:** Very cool.

**Divya:** So that's actually really exciting. I think the final release day, when everything will be cut and dry done, is August, according to this document. It says early August is when a final release will happen, when you can sort of say it's actually fully ready. But yeah, actually that's super-soon; in a month of two we'll have Vue 3 finally here. Fingers crossed that this deadline does not extend again... But I would say that's the most exciting thing, I think.

Alongside that - I think you might have seen, but Evan You has also been talking a lot about various experiments he's been doing with Vue. Vite is -- I think we've talked about it in a previous episode; it was something that he just released one day, which I assume was just like "While working on Vue 3, I decided to do something else..."

**Kevin Ball:** He's dogfooding!

**Divya:** Dogfooding essentially Vue 3, and modern experimental standards like ASM, and so on. I think he uses Snowpack. So that's also a really cool thing that came out of the overall development and dogfooding Vue 3. So there's so much that's happening in that space... I think in the next two months we will see a lot of exciting developments, and probably a bunch of blog posts, and comments, and tweets.

**Nick Nisi:** Very cool, yeah. August is - depending on how you view time right now - an eternity away or it's tomorrow.

**Divya:** Exactly.

**Nick Nisi:** Or both. \[laughs\]

**Kevin Ball:** Our time is so bizarre right now. And thinking about it, I know Evan You has at least one kid, and I don't know how many of the other folks working on the Vue 3 release also have kids... But I feel like we can give them a little slack on shipping late, at least given mine and every other parent's experience over the last few months.

**Nick Nisi:** Shipping anything right now really feels like an accomplishment, so... Yeah. But just to kind of touch a little bit on the history of Vue 3 -- because we've definitely talked about it before, and surprise-surprise, one of the things that I specifically remember about it is that it's being rewritten in TypeScript...

**Kevin Ball:** Shocker!

**Nick Nisi:** ...I don't know why that part would stick in my head, but it did... And also - didn't it start off as kind of a private repo that just the core team was kind of working on in secret for a while to kind of get their ideas fleshed out? And then obviously it's been opened up since then. Is that right?

**Kevin Ball:** Yes. One thing that was pretty interesting is the development process for Vue 3 happened right about at the same time as the Vue team also started really using an RFC (request for comments) process. So they kept the core development experiments early in Vue 3 as a private repo, but they were broadcasting a lot of the proposals for features in public, and working out through those in public... Which to me was a really interesting balance of "Let's not have the experience where we have something super-raw and unready and we get 20 million issues and pull requests from people who don't understand what we're doing, but let's also have this process be open, so folks can actually get their opinions in, and it's not just happening in secret.

**Nick Nisi:** Yeah. I imagine that that's where the prolog version of Vue died. \[laughter\]

**Divya:** Potentially.

**Kevin Ball:** Oh, Nick, I've missed you... \[laughter\]

**Divya:** I really like the RFC process, because I think it was also a really good way for the community to feel heard, because for the longest time there was this concept that Evan You is the BDFL of Vue, and he held the reins, and there was always speculation as to "What would happen if a bus hit Evan, or a dinosaur ate him and he no longer could be part of the project?"

\[00:08:16.12\] So the RFC was also in line with making sure that there was transparency, so people knew what was being worked on... And I think it was also the beginning of the core team and various members of the core team taking more responsibility for core, because a lot of them were part of -- they owned various parts of the ecosystem like the Router, and Vuex and so on... But I think core was a lot of Evan's responsibility, so I think with the release of an RFC process and more transparency, the various members of the core team started being more involved with core, and I think Evan wanted that as well. He's talked about wanting that, and making sure that everyone is part of that, so that he could slowly seed responsibility to people... And I think that's really cool, because it also shows the community aspect of Vue.

We've talked about this before, that the success of a framework has to do with the people who use it as well, and I think sometimes people forget that... Because they're like "My framework uses X technology, and it's awesome, and it doesn't matter who uses it. This technology speaks for itself and people will use it because of how great it is", but I think that is a misnomer, and Vue has shown through its actions and through all these processes that they have in place that they care about the people who use it a lot, and they actually listen... So the RFC process is not just like a shell where they're like "Oh, let's pretend we listen to people, then close issue and never listen to them." I've actually seen Evan taking a lot of the RFCs into consideration and actually changing APIs as a result. So that's actually really great to see that.

**Kevin Ball:** Yeah, there was a pretty dramatic shift in what became the Composition API shook-out. The Composition API started out as the Functional API proposal, which was the hooks-inspired change to Vue that I'm probably the most excited of anything in Vue 3 about that, and some of the stuff that that enables... But the first version of that got a lot of blowback, and it was super-impressive to me to watch that process play out. I mean, that's challenging community management - how do you nudge people towards change while also accepting legitimate criticisms and using that to make the final outcome better? But I think Evan and the whole team there did a great job.

**Divya:** Yeah, it's always hard, because I think everyone's a critic and not a lot of people are doing the work, and everyone's just quick to criticize... So it's also easy to get really defensive. And I've seen frameworks do that the moment someone raises an issue - they get automatically defensive and they double-down on a decision they've made...

Within Vue, there was sort of this criticism that came up in the beginning, because with the Functional API in particular - that was actually really controversial, because when it was released they talked about... And this was, I think, April or May of last year, when they released the Functional API RFC... And it alluded to the possibility of the Functional API being a new syntax and not being backward-compatible. So Vue 3 would just move away from current Vue 2 syntax, and move into this territory and not actually support Vue 2 at all. There was collective frustration by everyone, and I think that was a moment in Vue's history -- the most controversial thing probably that happened in Vue's history, where they were like "Oh, this is a mistake we've made, and we need to figure out how to be better." And I think I've seen a lot of progress from that point on. If anything, it's made me wanna use Vue more, because I'm like "This is great."

**Kevin Ball:** Well, and contrast it to the Angular debacle of several years back...

**Divya:** Oh, yeah.

**Kevin Ball:** That's what having the community engagement in the RFC process gets you - you see how big of a debacle it's gonna be before it's written in code and released. And you're able to head that off at the pass.

**Nick Nisi:** You're talking about Angular 2/4, that whole area?

**Kevin Ball:** Yeah, so Angular 1 to Angular 2 there was no migration path, there was no anything. It's still a confusion to this day -- I mean, it reminds me of the Python 2/3 debacle as well, right?

**Divya:** Yeah...

**Kevin Ball:** \[00:12:18.00\] If you don't think about how you're going to migrate people off of these things, or how you're going to maintain backwards-compatibility - one or the other; you've gotta pick one - then you end up in this bifurcated world where you're supporting both and it's a nightmare.

**Divya:** Yeah. I think React does the same thing as well - they have quite a transparent RFC process. I don't know the internals of the decision-making process as well, because they're a bit unique because the company is tied to the framework, it's not completely community-driven... But I do see at least the intention is there with the RFC process. But of course, slightly different, because they do have company goals to meet as well there.

**Nick Nisi:** So that's awesome, hearing that they're doing community management really well. That's something that is very easy to mess up, and very hard to get right, and it seems like the RFC process is a really good way to not just take that community feedback, but also, as you've pointed out, they are learning from that and integrating community feedback into creating a Vue that everyone wants to use, which is really great.

So on that - what are some of the big changes between Vue 2 and Vue 3? Is there anything majorly drastic?

**Kevin Ball:** Well, as a user, you might be excited to hear drops in average size from 20 or 30 kb minified to 10(ish), drops in CPU usage... I heard an estimate that Evan put out of -- it cuts it by a factor of 10. So you're 10x less CPU usage in normal use. And probably the most exciting thing to me, as somebody who loves to just geek out on stuff, is that they're exposing the reactivity API through this Composition API, so that you can not just use it within Vue-blessed constructs, but really build structures around it, build your own compositions based on reactivity.

I think, honestly, the web world, and especially the frontend world, is moving to reactivity-based approaches and mental models and thinking across the board, and I'm super-excited to see that being exposed as a raw primitive, rather than having it just something that magically happens as a part of the framework.

**Divya:** Yeah, I think that one's a big one in terms of userland changes... Because a lot of it is performance changes, and the way they do tree-shaking has changed, the bundle size has changed... I think the biggest differences in terms of what users will notice from writing Vue is first-class type support, and then also, as Kball said, the Composition API is a really big one, because that's actually still divisive in the community... Even though there was an RFC process and it was heavily talked about online, on Twitter, on GitHub, in various other places, you still hear people getting really upset about it or really excited about it.

It's very divisive because of how different it is with using Vue 2 currently, and that's mainly because as Kball mentioned, it's encapsulating the reactivity system of Vue, so you could just use functions, rather than Vue components... So the Vue components are basically moved out or isolated from the functionality, which makes reusability a bit easier. To some people it's a bit more complicated. I would argue it's easier, but I've drank the Kool-Aid, so I'm all for that...

\[00:15:45.26\] It's just really interesting, and I think it'll be neat to see what kind of patterns emerge from this. Because from my understanding, with the Composition API, there isn't really a proper pattern as to how to write it. For example, the way I've been using the Composition APIs - I create a Functions folder in my source folder, and then I write the functions. So it's very different, because with regular patterns in Vue, if you have components, it's in a components folder, and there's sort of a tried and true pattern for how you would use them across an application... And I think with the Composition API they have yet to emerge patterns, because people -- it's not widely adopted enough for that, so it'll be interesting to see what kinds of things emerge.

**Kevin Ball:** Yeah, I feel like the hooks ecosystem around React took a solid 6-9 months to really develop into good patterns, libraries, established best practices and all of that. And I expect we'll see a similar thing once Vue 3 actually ships.

**Nick Nisi:** Yeah, so are those composition functions -- do they kind of parallel hooks? I don't actually know much about Vue...

**Kevin Ball:** They are hooks-inspired, but not hooks exactly equivalent.

**Nick Nisi:** Sure.

**Kevin Ball:** Honestly, my impression of them is they feel more naturally continuous from the way that Vue felt before, whereas hooks was a big mental shift in how React functioned... But that's a personal opinion. I know there are folks who disagree and say "No, this is too big of a change. This is following on, and it's really complicated."

**Nick Nisi:** Very cool. Well, yeah, that looks like something that's going to be very exciting to play around with in just a few short years, or tomorrow, depending on how you're looking at it. So we'll look forward to talking more about Vue 3 as it comes out.

**Break:** \[00:17:38.21\]

**Nick Nisi:** Now, in this segment we're going to talk about things that we've learned. I won't say "Today I've learned", because maybe I didn't learn that much by lunchtime today, but... Recently, I have learned some cool things, and I'm sure the other panelists have as well, so let's share some cool things that we've learned recently. To start us off - Kball, do you wanna start?

**Kevin Ball:** Sure. I have been doing a lot of work in React recently - in contrast to our Vue episode early - and learning about different pieces and things of it... And I ran into a problem that I wasn't sure how to solve, and ended up learning something about contexts, and how contexts work.

For those who aren't super-familiar, contexts are a way to avoid the prop-drilling problem, where you have some data that is shared through many layers of components. So you can set up a context provider, which essentially says "Here's some data (and possibly some functions) that I'm gonna make available, and then any one of the children below that context can access that data."

\[00:20:04.00\] I had a situation where I was providing some functions, and I wanted them to have different defaults at different layers of the hierarchy. For example, I wanted a report to be able to insert additional context to provide a set of defaults for those functions... And I was trying to figure out how do I do it - do I pull that context and modify it, or things like that? And what I learned is contexts are shadowable. They have a particular key for the provider that it is that you're gonna do it, and you can load that context in one location, and then provide a shadow of it - that might be a changed version or a completely different implementation, but that is tied into that same context provider, and everything that's a child of you will get that new version.

So I was able to have -- in this case it was a translation service, and I had a translation service with different defaults. I would take the original context, I would get any information that it had, I would add additional information and create a new version of the translation service and provide it to my children. So that's what I learned, is how do you combine and override contexts - you do it by taking advantage of this shadowing approach.

**Nick Nisi:** That is awesome. Maybe I'm not following along fully, but does it make it easier/harder to test, being able to set those, or does it not really change that?

**Kevin Ball:** Good question. It depends a little bit on what layers you're testing in. Actually, anytime you have context, what it means is that the component that you're testing is dependent not only on the props that are being passed in, but the context that is being provided. So that's something that you have to take into account in your testing. And in this case, now you have two different ways that that context being provided could be set up. Potentially, you would have to take that into account in your testing... But I think it's still reasonably well decoupled. You have to test each of these providers that you're creating, and then you have to test that the underlying components can deal with the types of things that are being provided. But the API was still consistent, so the components testing in this case didn't have to change. You'd call the same functions, you'd call them in the same way... And in fact, that's probably pretty important as a principle. You'd need to make the context that you're providing provide exactly the same API that it had previously. So component testing didn't change, and it was just essentially testing two different forms of the context provider.

**Nick Nisi:** Nice. Alright, Divya, do you wanna go next?

**Divya:** Yeah, I can go next. Mine is not JavaScript, because I haven't been writing as much JavaScript... Well, I have been; I've been writing Vue. But I know a lot about Vue that \[unintelligible 00:22:42.06\] I'll talk about Rust, because that's something I've been writing... Even though this is JS Party.

**Kevin Ball:** Rust Party!

**Divya:** Rust Party. So I've been writing a lot of Rust at work, and it's been a very steep hill, which is not contrary to popular belief. I think people know that already... And one of the things that I had to learn is this concept of references and copy traits. Essentially, this idea of like when you're using a particular thing -- for instance, if you have a parameter or a variable elsewhere, and you wanna use that particular variable, within Rust essentially there's a concept called Lifetimes. So if a thing is used here, and then you wanna use it again later, Rust essentially kills it, or removes it from memory, because it's sort of trying to be as memory-safe as possible...

I might be wrong in explaining this completely... It's just that this is very confusing for me, myself, as I understand this... But you have to essentially get around it using lifetimes, and I don't understand lifetimes for the life of me. So what I've been doing instead is sort of trying to understand how references work by cheating, by creating a variable... So it's no longer a reference, it's just like a completely new thing.

\[00:24:06.22\] So it's been interesting, just like sort of playing around with the various ways of how memory is managed within Rust... Because I think in JavaScript we don't think about that at all.

**Nick Nisi:** What is that? \[laughs\]

**Divya:** Yeah, exactly. It's just automatically garbage-collected for you, and everything is done, and so you don't think about it... But when you think in a systems language like Rust, where memory and safety is really important, you have to start thinking about how exactly things are being used, how references work, what can be copied or cloned if you wanted to use the thing elsewhere in your code, and so on. So yeah, this is like a "Today I'm continuing to learn", rather than "Today I learned..." \[laughs\]

**Christopher Hiller:** So are you using the clone method to...

**Divya:** Yeah. That's also the interesting thing. I didn't realize - and maybe this is very obvious - that strings aren't automatically copyable. You can't just copy a string, you have to clone it.

**Christopher Hiller:** Which string? \[laughs\]

**Divya:** Good question. The string from. Like, if you do -- so not a reference string; an actual string.

**Christopher Hiller:** Capital S string.

**Divya:** Capital S string. So if you do String::from, whatever the string is, that's what I need. That string. That is not copyable, it doesn't have a copy trait, which is another thing that you have to learn in Rust - what is a trait? And so just understanding how exactly to use things that seem really easy to use within Rust. It's been a fun rabbit hole to go down, as I implement a single API endpoint. \[laughs\] It takes way longer than doing it in Node, or something, but... It's a very steep learning curve, it's very difficult to learn, but when you do figure it out, it's very satisfying... So yeah.

**Christopher Hiller:** Oh, yeah. Everytime it actually compiles and you run it, it feels awesome, because you beat the borrow checker, and you win Rust, because you actually got it to compile.

**Nick Nisi:** That sounds about the opposite of JavaScript, where you figure out how it works, and then you just sit there asking yourself "Why?!"

**Divya:** Yeah.

**Kevin Ball:** I was gonna say that once you beat the borrow checker, you're pretty confident it's actually gonna work, which is kind of the opposite of JavaScript. \[laughter\]

**Divya:** Fair. That is fair. Although \[unintelligible 00:26:31.29\] JavaScript or TypeScript, because the compiler will yell at you for -- like, lately I've been frustrated with TypeScript, because I was using the Monaco editor in one of my components, and I didn't have the types for it, and so I just used \[unintelligible 00:26:46.06\] and even if I tried to turn it, I ended up turning it off in my tsconfig... But I felt really bad, because it felt like I wasn't really using TypeScript. I was cheating my way around it. \[laughs\]

**Kevin Ball:** So after fighting with Rust, when you come back to TypeScript, is it like "Oh, you're like the gentle abuser"?

**Divya:** Honestly, yes, because the thing with learning Rust is it's so difficult, you don't know what you're doing, and then you come to TypeScript and you're like "Oh, okay, this is easy. Whatever." Because you can also cheat your way around the config... Versus in Rust there's no cheating. You can't cheat. \[laughter\] In JavaScript you can just poke at it, or cover it up, and forget that it's there.

**Kevin Ball:** Type ignore.

**Divya:** Type ignore, yeah. \[laughs\]

**Nick Nisi:** Well, I will set aside this strongly-worded email that I'm writing to you now, Divya, about me and TypeScript... \[laughter\] And I'll tell you about something that I learned recently. I was working on some code, specifically some tests in TypeScript for a server-side API. I was using Apollo Client, which is a way to make GraphQL calls, basically... But I wanted to mock that out in my tests, because I don't wanna actually make GraphQL calls in these specific tests that I was doing... And I'm sure there's a way to do it, but I was kind of going really fast and just using the jest.mock feature, where I can give it apollo/client, and then provide it with a factory function telling it what to actually return when I use anything inside of there, specifically the Apollo Client constructor.

\[00:28:25.24\] And I swear, every time I do this with jest.mocking, I have to just kind of throw code at the wall and figure out what actually works, because I can never remember exactly how to mock a constructor to have it return the methods that I want to have mocked, so I can check those and make sure that they're called, and such. So I spent a lot of time doing that. But anyway, I got it working, and the way that I got it working was by in that factory function saying that anytime I request Apollo Client, here's a function to call, and that function returns an object that has my mocks on it. So it was just using specifically the function keyword; I couldn't use arrow functions, because you can't instantiate arrow functions, you can't call them with new.

So I spent a little bit of time remembering that, or being kindly reminded of that by the tool, and then got it working, and go to commit everything. And we have a pre-commit hook that runs, and will run eslint --fix to fix any ESLint problems... And it decided that it didn't like my use of the function keyword in there, so it rewrote that to be - not an arrow function, but the third function syntax, which is the shorthand when you have a function on an object where it's just the name( ) and then { } and your function is in there. So it's just removing the function keyword, or so it would seem... But that one you also cannot instantiate as new. And I think that what was happening was because I wasn't actually using the "this" keyword in there, ESLint just assumed that it could rewrite that to be the shorthand syntax, and everything would be okay... Pushed it up, and of course, CI caught that all my tests failed, because it couldn't actually instantiate any of those.

So I got very mad at ESLint for a couple of days... But then I ended up rewriting that to instead of using an actual function, just use an anonymous class, and have that as the value that I returned for Apollo client instead.

But the thing I learned is there are several ways to write functions in JavaScript, and of course, we know that the big differences in the different syntaxes is how they handle the context, or the "this" keyword in there... But also, the newer ones can't be instantiated with new, and so that is something that I begrudgingly learned this week.

**Christopher Hiller:** Is there a use case for calling new on a method of some class' prototype?

**Nick Nisi:** Hm... I don't think so. Not that I can think of. This is very weird code, because I'm trying to mock out something in a test, so it's not like production-level code that would actually be running everywhere except for in tests, and it's kind of a hack from the beginning. That's how I feel whenever I'm using jest.mock.

So b0neskull, what have you learned recently?

**Christopher Hiller:** So the thing that I wanted to say that I felt was neat - and this actually is a thing that Nick taught me via a tweet on Twitter.com... And I'm not sure how to speak the code here, but essentially it's something in your gitconfig... So a gitconfig is kind of like an Anyfile, it's sort of TOML-like, right? So you have a header, which is in square brackets, and that's include. And with the include thing you can give it paths to other gitconfig files, essentially.

\[00:32:10.11\] And so you can have your root gitconfig in your home dir, and then in this include section you can go and pull in other files. So if you are like me and like Nick apparently, you have dotfiles. Your dotfiles are all in Git, and the idea is probably to be able to share them across different machines and use them in different contexts. And there's certain things that you don't wanna commit to VCS, like secrets... For Nick it was email addresses... And so what you can do is you can tell Git "Hey, include this other gitconfig file." And Git is cool about it and it will not complain, apparently, if that file doesn't exist.

So if you're on, say, your work computer, you can have your dotfiles there and you can say "Hey, include this other work-specific gitconfig." And in that gitconfig you can define a user, an email address, whatever you wanna add in there... So yeah, I thought that was neat.

Also, if you have a repo -- say you're doing this on one machine, and you have a working copy, and that's for your work. How do you say "Okay, everything in here is like a per-directory basis" or can you have a parent directory and say "Okay, everything under this parent directory needs to use this username." Is that what you do?

**Nick Nisi:** Yeah, that's exactly it. So you mentioned there's that "include", the ability to include another file... There's also a variation of that called "includeIf", and in there you can give it a couple of different options, but one of them is "includeIf gitdir", and you give it a partial path to where that Git directory might exist... And if whatever Git directory you're in matches that partial path in any way -- for mine I have like a Work directory, where all of the repos I've cloned are in that work directory, and it has a specific name... So I can just say "includeIf gitdir is the path to that Work directory", and then anything in there will source that other gitconfig, so that you can do other overrides in there that are very specific to your work, for example.

**Christopher Hiller:** Right. That's cool, yeah. And if you didn't care about putting your username and email in VCS. I mean, it seems like you can just use includeIf in your main gitconfig too, if you didn't want this extra file that wasn't under version control.

**Nick Nisi:** Yeah.

**Christopher Hiller:** Anyway... Yeah, where did you learn that, Nick?

**Nick Nisi:** Hah! Spelunking through the Git docs on the internet.

**Christopher Hiller:** Yeah, there is gold in there. There are cool things that Git does in config files that you probably have no idea about. I find new things all the time.

**Nick Nisi:** Yeah. The really cool part of that is that if those files don't exist, Git doesn't complain at you, it just ignores them quietly... Which is what it should do.

**Christopher Hiller:** Well, that's what I learned.

**Break:** \[00:35:22.08\]

**Nick Nisi:** In this segment we're going to give some shout-outs, or talk about stories of the week, very interesting things that are happening recently. A little bit different from "Today I learned...", these are interesting things that we plan to learn, or that have happened in the community, in the news, or just shout-outs to some really cool people or projects that we've seen. Starting us off - Chris, do you wanna go first?

**Christopher Hiller:** Yes, I do. I wanted to shout out to one of the maintainers of Mocha. He has been a maintainer for several years now - Peter Müller. He is Munter on GitHub. What Peter did recently was he basically tore out our build toolchain. Our build toolchain has been Browserify for a very long time.

Mocha has these two areas of the codebase. They're not split out as well as they should be, but -- we have one area which runs in Node, and it only runs in Node. And in there, since we support Node 10 or newer, we can use all the cool syntax. And then we have this other area, which is "Okay, this code gets shipped to a browser." So in here, we have to use essentially code that runs in IE11. We have historically not run any transpilers, or anything.

Anyway, this is just terrible, and it's not fun, because we have an ESLint file that has essentially this big list of files that you can use modern syntax on, and everything else you can't... So you don't necessarily know. As I said, it's not well divided or organized, so you don't necessarily know from any given file whether or not you can use (I don't know) the class keyword.

So what he did is he pulled out Browserify and he moved us over to Rollup... And there's Babel, and all sorts of other -- well, not all sorts of other things. Those are the main ones. So we can now use these modern syntax across the entire Mocha codebase, which is a really \[unintelligible 00:38:35.23\] It's painful not to be able to use those things... So I just wanted to thank you, Peter, for your effort in getting that landed. It is awesome, and thanks.

**Nick Nisi:** Cool. Thank you, Chris. Divya, do you wanna go next?

**Divya:** Yeah, so my shout-outs are athematic... As I've mentioned, I've been writing a lot of TypeScript in Rust, and what has been really useful is using the playgrounds, for either. TypeScript has the -- I think it's called TypeScript Playground, and then Rust has a very similar one as well, which allows you to just write some code and then compile it, and it gives you really good error messaging, as well as examples. I don't think the Rust one gives you examples, but the TypeScript one does. So if I don't know how to write something, there's a chance that the examples will show. For instance, if I don't know how to write async/await in TypeScript, there's an example for it that I can automatically load into the playground.

That has been phenomenal for me, because I don't have to look at the documentation... Because I actually really dislike TypeScript's docs. I think they're very difficult to read. And I think in general, whenever people document using the TypeScript docs, it's very -- it gives me a sense of what types something takes, but not how to use the thing, which is really annoying. So I think the playground has been really useful in terms of ramping up really quickly when I need to get a question answered, so I don't have to read the docs. I can just automatically load an example, or try to figure out how to type it and then get TypeScript to yell at me within the playground itself.

\[00:40:19.18\] So one, I don't have to do that within my project itself; I can just do this in this independent playground. And same for Rust. I can just write some Rust code, an independent playground, without having to set up a configuration environment, or run my entire Rust project to see if one thing worked.

So honestly, this is a huge shout-out to people who write playgrounds. I believe the Rust one is written by the Integer 32 team. There's probably someone specifically there that I'm forgetting, but that is phenomenal, and I think really useful for my learning. I have no idea who wrote the TypeScript Playground, but it's great. And I actually like the current version of the playground, not the future version. I think there's a v3 of it. I really dislike the v3. It's very unclear and confusing. I find the v2 one, which is the current version one, way clearer, personally. But regardless, people who write playgrounds are great, because it's a really great way to get people to get comfortable with it.

I think similar in that vein is when Sass was first introduced as like a \[unintelligible 00:41:24.16\], so you can run functions and variables, and then get that to compile to CSS. So it's a really quick way of just prototyping without having to read docs. So yeah, that's my shout-out.

**Nick Nisi:** That's really cool. Yeah, I will agree with you on that. I've been mostly using the v2 playground... But the one thing that I really do like in v3 - and it's an experimental feature - is it will show you the AST of whatever you type in there.

**Divya:** That's true, yeah. That is nice.

**Nick Nisi:** But yeah, definitely some cool work. I also love that it's just so shareable. With these playgrounds, you can type some code and then share it.

**Divya:** Yes, that's true. I actually forgot that. That's a very nice feature, too... Because then I can easily just be like "I'm struggling with this", and then someone can send me a TypeScript Playground and show me how to write the thing. So nice.

**Nick Nisi:** Yeah. Cool. I will go next... And the cool thing that I wanted to shout out is something that Zach Leatherman has been working on, and it's called Speedlify. It's a pretty cool way to continuously measure performance, specifically of static sites. It's got a full dashboard that is running on Netlify that shows the performance over time of different static sites using Eleventy, or Nuxt, or Next, or other tools like that... And it'll show you every time it runs, and how those have changed, and it has a graph that shows exactly what's changed. It'll give their Lighthouse scores... And I believe you can break down into specific pages, to see how those are performing, which is really cool. So yeah, I'll throw a link to that in the show notes...

Kball, what have you got?

**Kevin Ball:** Yeah, so I have two different things that I wanna shout out; they're both pretty small -- or stories that I saw, that I thought were neat... The first one is there was a new release of Chrome DevTools that adds better support for editing styles created with the CSS Object Model APIs... Which essentially means any CSS in JS framework that you're using - many of them are now using those object models, and they were previously uneditable in DevTools, which meant that one of the key tooling that you had for visibility into and changing of your styles was not available in the CSS in JS world.

I'm still not a huge fan of CSS in JS for many use cases, but it is a critical tool for some use cases, particularly large teams, and distributed teams, large products... And it's also something that at least a lot of the React world is moving towards. So I think we've gotta have good support for it, and I just love to see that tooling support coming along for it. I am grudgingly using StyledComponents in my stuff at work right now... And even mostly getting used to it, but - still not a fan. Anyway...

The other thing I wanna shout out is in one of the breaks, after we talked about Vue and all this stuff, I went and clicked in on a Vue newsletter in the Vue.js news and I saw some stuff - a PR posted in the RFCs by Evan You about single-file component improvements... And the thing I wanna shout out about it that I think is really cool is it's doing essentially a set of compile-time sugar and changes for cleaning up how you do things, inspired by Svelte.

**Divya:** Nice.

**Kevin Ball:** Long-time listeners will know that I'm a big proponent of moving more and more things in our frontend ecosystem to compile-time, and trying to pre-compile them... That's in my mind what JAMstack is all about, that's what enables edge computing... It's a huge thing, and I'd love to see this kind of cross-pollination of innovation in that space happening between frameworks... Because that's something that I think Svelte has really pushed the bar on, and made some dramatic improvements, and I'm excited to see where it goes... And as it goes into other frameworks, becomes Vueified for Vue, maybe React will pick up some interesting tips, and how that innovation continues to roll.

**Divya:** Nice.

**Nick Nisi:** Yeah, very cool. Alright. Well, that is what we have for the party this week. Thank you so much to our panelists Kball, Divya, and Chris, and we will see you next week. Party on!

**Divya:** Yaay!

**Nick Nisi:** I immediately regretted saying "Party on"... \[laughter\]
