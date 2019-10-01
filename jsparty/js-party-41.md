**Kevin Ball:** Hey, everybody! KBall here, reporting live from JSConf U.S. I'm here with Chad Hietala, engineer from LinkedIn and member of the Ember core team. Chad, how are you doing?

**Chad Hietala:** Good, how are you?

**Kevin Ball:** Life is good. Thanks for taking the time today.

**Chad Hietala:** Yeah, no problem.

**Kevin Ball:** So you're speaking at this conference... Can you tell us a little bit about the talk that you're doing?

**Chad Hietala:** Yeah, so I'm talking a little bit about compilers in the front-end Javascript space. We've used compilers for quite a long period of time, even though a lot of people don't think of things like minifiers as being compilers... And we've used compilers to kind of achieve different performance benefits and everything like that inside the browser, but today, when we think about compilers, it's more like things like Babel and transpiling languages and everything like that, and not necessarily getting performance gains out of the usage of compilers...

I've done a decent amount of work over the past couple years on compilers that are specifically designed for performance-related reasons, and not necessarily transpiling languages, and stuff like that.

**Kevin Ball:** \[00:04:16.11\] There's some interesting possibilities there... Everything from kind of what Webpack is trying to with tree shaking, and things like that, but Ember is really pushing the boundaries there, and having a VM that is perhaps not running just pure Javascript... Can you talk a little bit more details on what you're doing there?

**Chad Hietala:** Right... So we've gone through a couple -- or, actually, I think three iterations of the rendering engine inside of Ember, and all of them start off as like a string-based concatenation solution that I think a lot of people did -- maybe in 2011 that's basically what everybody did... And then we moved to more of a DOM-based solution, so we would take templates, compile them into a Javascript program that constructed DOM, and this is kind of what everybody is doing today effectively. You have some DSL or DSL-like thing, it gets compiled to Javascript, and you run it in the browser.

The Glimmer VM is different in this regard. What we actually end up doing is taking your templates and compiling them to binary data. What this binary is - it's just an encoding of all of the instructions to recreate that template at runtime, and we do so by putting that custom bytecode inside of a virtual machine, the virtual machine interprets it and constructs your UI. So it's a pretty different approach when compared to other things (I think) in this space right now.

**Kevin Ball:** It seems like you could get a lot of space saving in terms of bytes over the wire doing that...

**Chad Hietala:** Right.

**Kevin Ball:** Do you have any numbers on what kinds of difference that makes, when you're compiling a few k of templates?

**Chad Hietala:** So you can compact numbers pretty efficiently... Let me think if I have any hard numbers off the top of my head. In the project that we worked on at LinkedIn, where we actually shipped this thing into production - the LinkedIn feed is rather complicated; it has many different feed types, which have different things that a user can interact with... And so for this one page, all of the templates in the entire application ended up being only 14 kb when you shipped it over the wire. So it compresses rather small, in comparison to things like Javascript, where you don't have as much repetition, so algorithms like Brotli or Gzip just don't see enough things inside the compression window to actually reduce the actual size of the file.

**Kevin Ball:** Yeah, that's interesting... Because a lot of folks' text in templates traditionally compressed reasonably well, but now in advanced Javascript you're compiling those templates to be Javascript functions which no longer compress well, and then shipping those over the wire.

**Chad Hietala:** Right, right.

**Kevin Ball:** Huh. That's kind of neat. So what kind of runtime performance do you see when you're having to reconstruct these things from binary?

**Chad Hietala:** So the big issue with what we've done in the web development community is that we've pushed more and more emphasis on Javascript. We used to start with HTML, and CSS, and then you just layered a little bit of Javascript to get some interactivity on it, and now we really start with Javascript first, and then we add CSS to it, but the CSS may even be in Javascript land, so... HTML is basically nowhere to be seen for a lot of people, and there is an inherent cost of having everything in Javascript, and that is it's a textual-based language that at runtime it needs to be turned into code that a computer actually can run. So it has to go through a parsing step, it has to go through a compilation step, and so because of that, the startup time of these applications can be rather large, especially if you're on like a constrained device, low-end device... Or even like the network aspect of it - if you have put all your concerns inside of Javascript, your Javascript bundles are gonna be rather large right out of the gate.

\[00:08:14.09\] So those are like the two areas that we're kind of concerned about with the Glimmer VM... It's more or less like Javascript's startup time. So by compiling templates to binary, you actually bypass the parse and compile step, because the browser just sees the binary data as raw memory, and it just passes it directly to the native library... So for the templates inside of your application - they end up being anywhere from like 25% to 40% of a typical Ember application, so it's a rather large chunk of a project, so if we can bypass parse and compile or not compile those things to Javascript, but instead of a format that doesn't have these inherent -- not performance issues, but they're just the truth of the world; if you're compiling to Javascript, it has to go through a parse and compile. If we're not doing that, then we can speed up the startup time of these applications, and a lot of times even the transmission of the templates and everything like that over the wire.

**Kevin Ball:** This is something that I think we're seeing a lot more interest in now that Web Assembly is a thing...

**Chad Hietala:** Right, yeah.

**Kevin Ball:** ...but you all have been doing it since before Web Assembly was supported, right? It's its own...

**Chad Hietala:** Yeah, so this is our own bytecode format, and we really think about Web Assembly being very closely aligned with this world. It's kind of a similar philosophy, that we're providing more or less a bytecode set for constructing DOM on the main thread. Web Assembly currently doesn't have all of the Web IDL stuff in it, so to actually call into Javascript from Web Assembly you have to effectively give it like a context object that the Web Assembly side knows to call into to talk to the DOM API.

We've actually done some work in this area to pair these two worlds together, so we have a version of the Glimmer VM with our custom bytecode, but the core VM is dealing with a lot of low-level operations; it has a stack implementation, it has pointers, it has registers... And so those are things that -- writing things in systems language is really good at dealing with those types of problems... So we ported those things to Rust, and then compiled those to Web Assembly, so you have this virtual machine that is more or less using bytecode formats for a lot of different things inside of the application... And I think one of the nice things about this is when you have a domain-specific language like a templating layer, you actually can control the output of what you are -- because you're owning the entire compiler stack, you basically rule the world; you're not actually beholden to Javascript semantics, or anything like that... So this is, I think, a pretty interesting space. It's moving frameworks closer to being more like compilers than these runtime libraries, and stuff like that.

**Kevin Ball:** Yeah. That's a trend that I think we're seeing more and more in the Javascript world; Babel enables a lot of that, and you've seen React takes advantage of that with JSX. Essentially, it's a compilation step, it's a DSL, and now they're compiling to Javascript rather than into bytecode, but it's the same idea of we have these domains that are constrained and well-known; what can we do to do a better job than just a general purpose language on that?

**Chad Hietala:** Right... And I think other frameworks that are in this space that are doing really interesting things is like all of Rich Harris' work around Svelte, of basically compiling directly into a very small set of Javascript that you would otherwise write for your templating languages... And he really kind of fundamentally believes that this is where things are headed, as well. It's like, "I have a framework, I'm writing this thing... All the code for the "framework" is just the code that I write, and there's a compilation step to take care of that."

Facebook is doing a lot of interesting things around Prepack, which is an optimizing compiler for Javascript. It is a very challenging problem to solve due to the dynamic nature of Javascript, but they're also really doing a lot of work in compilers, as well.

**Kevin Ball:** \[00:12:26.13\] That's interesting... So where do you see the field going?

**Chad Hietala:** I think it's kind of hard to say, but I think there is a lot of things pointing towards having more low-level implementations of things... Things like Web Assembly I think are a good example of that; the Glimmer VM stuff is a good example of that. I believe that Chris Baxter and Malte, from the AMP team, are going to be talking about some low-level things that are also kind of in the same realm of like what the Glimmer VM is trying to do, and everything like that. So it's coming up with, I think, these different, or more efficient formats or more efficient compilation targets for building stuff for the web. And I think a lot of this is coming from the fact that the markets that a lot of people are trying to be successful in are constrained devices in terms of like if you're in emerging markets, you really have to think about the power of those devices in those markets, and you can't just be dumping large, huge piles of Javascript onto your users, but at the same time you want these applications to be very interactive; you don't want to necessarily remove functionality, but the reality of these worlds is that the network is not very good and the devices aren't that great.

I think this is even true inside of the United States. A lot of engineers do a lot of development on their MacBook Pro, or their iPhone X, and not everybody has those devices. I think where your users typically are gonna be is anywhere from these top-end devices to the top portion of these low-end devices, and we don't do enough testing up and down this spectrum.

**Kevin Ball:** Yeah, there's all sorts of elements of performance that you never hit if you're just doing it on your top-end devices. Network performance gets talked about a lot, but even just CPU performance on these devices... Parsing and booting up all that Javascript chews up a ton of CPU, and even on -- I mean, I have an iPhone 7, and it slows down on some of these sites, and it's crawling along much less if you've got network problems, and things like that... So yeah, there's truth to that.

So compilers let you get a lot of that out of the tooling, so you don't have to be an expert on everything about optimizing for mobile etc. because the compiler can do a lot for you.

**Chad Hietala:** Right. There was a great blog article by some of the folks at Mozilla earlier this year, where they talked about the work that they've done on source maps. There's a source map library that most people use that is the encoder and decoder and writer for source maps; it was written in Javascript. And what they did was that they moved parts of that into Web Assembly, and the reason why they did that was they felt that they could get more predictable performance out of it.

Then what happened in the story is like one of the engineers that used to work on v8 -- or not v8, he used to work on TurboFan, which was the actual Git compiler inside of v8... He says, "Oh, you don't actually need WebAssembly, you just need to hand-tune, optimize all this Javascript and you can get a lot of performance out of it and maybe some corrections algorithms", but I think that tells you something about the underlying platform. Not everybody is a Javascript engine engineer, and you can't ask a person that's building a lot of products and everything like that and they have different concerns, like "Please tell me all the hot paths inside of v8 so I can get the most performance out of this thing." It's not very scalable, in my opinion.

\[00:16:21.25\] I think what we have to be choosing and thinking about or even building, are tools that give the largest group of people the most predictable performance out of the box. I think that's the types of tools that we should be really thinking about building.

**Break:** \[00:16:42.18\]

**Kevin Ball:** That's really interesting... We talked about that and it made me think about traditional compilers - you're compiling for multiple different targets, and often times optimizing down to the level of cash hierarchy and things like that. Do you see a direction going in that way for the web, for either Javascript or Web Assembly, where they're literally shipping either different binaries, or binaries that are adaptive and run in slightly different ways to tune themselves to the engine performances?

**Chad Hietala:** So the nice thing about Web Assembly is that it is effectively a known shortcut into highly optimized code, and basically all of the browsers. The way that the underlying browser is gonna work - typically, with Javascript it goes through a couple different tiers of the compiler and it starts off as code that can start up quick, but it's not as fast, and then it goes over to an optimizing compiler and generates optimized code, but due to the dynamic nature of the browser, that optimized code can get thrown out, because it may see different arguments or different types of arguments, and therefore has to start all over again.

Well, with things like Web Assembly, you start at highly optimized code because you're writing in a static language that guarantees you type information that these -- I'm always gonna get like an int in this position, and it's not gonna be like an int and then all of a sudden become like a string, or something like that. So the code that's generated at runtime for the Web Assembly stuff is already highly optimized, so I don't know if there's going to be necessarily compiling different types of Web Assembly to target hot paths in a certain browser... I think they've done actually a very good job at specifying the compile targets, and everything like that for these things... So I don't really see something like that.

**Kevin Ball:** Yeah, I've read a fascinating post not that long ago talking about how even just shifting the order of keys in an object could cause your browser to throw out its compiled version of the Javascript, and things like that. This stuff is temperamental.

**Chad Hietala:** Yeah, yeah.

**Kevin Ball:** \[00:20:02.00\] Another related question... So another area where we have a big gap, because folks feel like they need to become experts to be able to do it, is dealing with accessibility, and making web applications accessible across a wide range of devices is something that -- it's one of those things where everybody kind of knows they should do it, and almost nobody actually does do it...

**Chad Hietala:** Right.

**Kevin Ball:** ...and in a recent JS Party episode we were talking about how one of the changes that needs to happen there is improving the tooling, to make it much more accessible to people, so you don't have to be an accessibility expert to write accessible applications. Is that something that compilers can help out with as well?

**Chad Hietala:** Maybe. I think that some of the challenges that we have inside of Ember - and basically any Javascript application has this if you're using a router - is making sure that when you do a page transition, that you set focus onto the actual page of that transition... Otherwise it's basically dead... dead silence.

So you potentially could do some detection, almost like linting, to make sure that maybe you do focus on this thing when it becomes active, or whatever like that... But I think this is a little bit more of a runtime concern, rather than a compiler... But I think that compilers like linting if you need to call certain APIs they need to be there... I think Ryan Florence has the reach/router for React, which is really trying to bake accessibility in by default, and handling a lot of these -- specifically with routing cases, and announcing to the user the page transition, and highlighting each one element of the page whenever you do the transition.

I think it's a bit more runtime-specific, but I think you can use compilers to make sure that certain things in your application are following best practices, or something to that effect. I'm a huge proponent of having solutions do the right thing out of the box...

**Kevin Ball:** Yeah, absolutely.

**Chad Hietala:** ...and making it very hard for you to do the bad thing... So I think that this is just another area of opportunity within the Javascript ecosystem, to solve some of these problems more fundamentally.

**Kevin Ball:** Yeah. Rust is kind of an interesting example of a place where a compiler tends to be very strict, and they've put a ton of energy into making their error messages very explicit - "This is what went wrong, and this is how you might fix it", and doing a very good job of trying to figure that.

When you talk about domain-specific languages and templates, that's one area where there's a lot of accessibility stuff that people might not be thinking about, and you could potentially statically analyze that and throw those types of errors where you say "Hey, you know what? You're putting an input here, but you are not marking it up properly."

**Chad Hietala:** Right. Yeah, so we actually have stuff like this in the Ember ecosystem. We have add-ons, there's like an Ember ember-a11y ESLint rules, or whatever, because we can statically analyze the templates; they're not as dynamic as something like Javascript, so we can look at it and see "Oh, you're missing labels for things", so on and so forth... Or making sure that you're using ARIA rules correctly. Those are the ways that we're attacking that problem.

**Kevin Ball:** Are there any other domain-specific languages that you're seeing in the Javascript ecosystem that aren't yet taking advantage of some sort of compilation step that probably could?

**Chad Hietala:** \[00:23:48.09\] Yeah, I think there's huge opportunities for both Vue and Angular to do fundamentally what we're doing. I think in 2016 the Angular team came out with a blog article that was called "Why we use templates" or something to that effect, and we are philosophically aligned in why we choose to use templating languages over just using Javascript. It has a lot to do with being able to swap out these implementations without breaking our end users' code. I think there's huge power in that, and in large organizations like LinkedIn we have a hundred applications, and if we want to have people take advantage of these new primitives that exist in the browser immediately, we just swap out that underlying implementation and developers don't actually have to change any code.

**Kevin Ball:** Yeah. In Ember in particular, I think of all the frameworks - Vue might be close there - they've done a tremendous job at making upgrades easy. The Vue 1 to 2 switch-over was hard, but since then they've been really good about being consistent. That's something perhaps Angular has not been as good on, but... Yeah, that is an interesting highlight.

What about outside of the web world? Do you see anything there where...?

**Chad Hietala:** No... I mean, I'm primarily looking at web-related stuff. I think Rust -- not anything to do with domain-specific languages, but I think Rust is very interesting. I think Web Assembly is being -- it has a very weird name; it's like a portable compilation target that can run pretty much anywhere that Javascript can run, which is very interesting because Javascript is using all the different places that you would not expect it to be used... This is like all the IoT stuff - it's like in refrigerators, it's in car dashboards, I think it's used in nuclear silos for different things...

**Kevin Ball:** Oh, Javascript is being used in that? Now you're scaring me... \[laughter\] At least TypeScript, I hope...

**Chad Hietala:** Yeah... So all those places where you're using Javascript, you could probably write something like C, C++ , and maybe you get some performance benefit out of it, because you're compiling to a target that is running in the same place that Javascript is. So I think the future for Web Assembly may not actually even be completely for the web; basically, anywhere where Javascript will run, I think Web Assembly is going to be able to run... Which kind of puts into question why you're distro-ing all these C libraries, and everything like that.

We'll see what happens, but it's kind of interesting... We now actually have a binary format that can run in the same places that Javascript runs.

**Kevin Ball:** Yeah, I had a conversation with Jay Phelps about Web Assembly at some point, and he's like "Alright, so we call it Web Assembly, but really, imagine if you'd created the JVM, except instead of it being one company that could be bought out by Oracle, you had it co-designed by all the big web companies, and it was in the open, so that it was not able to be obtained by a bad actor, and then all sorts of stuff..." This could be the new virtual machine target that everybody pushes for, which is phenomenal.

**Chad Hietala:** Yeah, it's pretty interesting... I mean, Java is extremely successful. We use it a lot at LinkedIn, but it had different ambitions at one point, for like being for the web, and everything like that, and Javascript was this toy language... We'll see how history treats that situation.

**Kevin Ball:** Yeah, I mean... So long as we keep Web Assembly out of Oracle's hands, I think we'll be better off, in a lot of ways. I mean, the Java ecosystem is still very powerful, and there's a lot of interesting innovation going on there, but... Yeah, it's nice to have an alternative that is more open.

**Chad Hietala:** Yup.

**Kevin Ball:** Cool. So I wanna poke more on Ember, if you've got time...

**Chad Hietala:** Yeah, sure.

**Kevin Ball:** \[00:28:04.29\] I've never used Ember in a production project. I've done some playing around with it... Largely because I had friends who were big advocates. Well, the other thing is Yehuda Katz is one of my tech idols; everything he touches, I'm like "Oh, that's brilliant!" But it's always sort of been the chug-along, never taken off... Do you have a feeling as to why? Why is it that we talk about React, Angular, Vue, and Ember is doing this wicked cool stuff with the binary engine, and doing all these things, but it's not taken off?

**Chad Hietala:** So I think Ember has always kind of been like this framework that has kind of always been there, you kind of talk about it, and it's lasted I think several different Javascript half-lives at this point... So it came out right around the same time that Backbone came out, and no one really talks about Backbone anymore.

**Kevin Ball:** Right.

**Chad Hietala:** Then it also lived through the period of like Angular 1, and not too many people are using Angular 1 anymore...

**Kevin Ball:** A surprising number I've seen, actually... There's still a lot of people using--

**Chad Hietala:** Yeah, there's a lot of people using it, but it isn't the thing that everybody is talking about.

**Kevin Ball:** Right, yeah. It's not the hot thing anymore.

**Chad Hietala:** It's not the hot thing. I agree with the people that are probably still using Angular 1, they have a business and it was built on Angular 1, and that business is making money; you cannot just abandon it... And now we're kind of like in this -- we went through the React thing, we're still there, still working on the framework, but now it's kind of like whole ridiculous thing with like the GitHub stars, with Vue and React, so like maybe Vue becomes the thing that is talked about all the time, and React is kind of...

**Kevin Ball:** The most popular blog post I ever wrote was basically saying like "Look, y'all, GitHub stars are not everything." Because basically, I just looked at what are some other ways we could measure this...

**Chad Hietala:** Right, yeah.

**Kevin Ball:** Hey, we could look at Npm downloads; that might give us an alternative measure... And pretty much every other measure besides GitHub stars, React is still worlds ahead of everything...

**Chad Hietala:** Right, right.

**Kevin Ball:** And I say that as somebody who loves Vue. It's a beautiful framework, but...

**Chad Hietala:** So all of this is going on, and I think people are attracted to the new hotness, and you're always chasing the hype train. I think Ember has always been targeting a different set of people, which is "I want something that I know that I can build my business on top of, and that it has long-term stability guarantees, and I'm okay with for some period of time not having necessarily the most new thing on the block, but I'm confident that the framework will take those good ideas and roll it back into the framework."

**Kevin Ball:** Right.

**Chad Hietala:** So that's basically what we've done over the course of Ember's history - stay the course, keep everything as stable as possible. When we do a major version bump - I think this is a good example of this - it isn't recreate the world; all we do in a major -- there are no new features ever in a major release. We just remove all the features that we deprecated in the preivous major version.

As we're going through this process, we've learned a lot of things along the way. One example of that is I think the thing that React is most widely known for - the whole setState model... Like, setState, re-render the world. And so while we've had templates ever since the beginning of Ember, we were able to recreate those semantics inside of Ember. All the versions of Ember have this.set, newer versions don't have these Accessor type of APIs, but the same thing is that when you call this.set, you reset the world, we re-render the entire application.

\[00:32:00.02\] So we've been able to take things from different communities and kind of like figure out how they map into the Ember world. Maybe the tide is turning a little bit on this, because I think we are starting to see things -- what are called "no configuration" type of solutions; it's just convention over configuration, it just has a different name... So things like Prettier are now becoming very popular, and it's because people don't have to think a lot about these decisions.

Ember comes with you, the same type of philosophy that these decisions that you're making with your team don't really -- things like "Okay, how should we lay out the project?" The file system problem is always a thing that people argue about, like "How do I lay out a project?" Well, it matters, but it doesn't matter to the extent that it's gonna harm your business if you do not get the file system correct on your application.

So what we try to do is try to make some of those decisions for you, up front, and just say "This is how an Ember application is set up", and you don't have to think about it; all you really have to do is think about the features that you wanna build on top of the framework.

I feel good about the future of Ember, just because of how things are trending. It was a little bit weird when we were the only people that had a CLI tool; now everybody has a CLI tool that is trying to set up the project in some sane way, so that you don't have to sit there and make all of these decisions.

**Kevin Ball:** Didn't the first version of the Angular CLI ship with comments that were still Ember CLI, because they forked it?

**Chad Hietala:** Yeah, at stdout or something like that, to rewrite all locations of Ember into Angular, but words like "remember" were getting remapped into saying like "Angular" somewhere in it...

**Kevin Ball:** \[laughs\] That's hilarious.

**Chad Hietala:** Yeah. I think the tide is changing a little bit in terms of the front-end ecosystem.

**Break**: \[00:34:22.09\]

**Kevin Ball:** One of the beautiful things in the last few years is that we've seen so much cross-pollination, and we've seen -- folks will experiment with something, and if it works well, it gets adopted across the board, and we saw that with virtual DOM, we see that with the set.state model, we've seen component-based architectures... All these things are kind of propagating out and it's making the web better.

**Chad Hietala:** Yeah.

**Kevin Ball:** \[00:36:12.23\] I think another one that Ember was early on was the server-side rendering, Ember FastBoot, and things around those things...

**Chad Hietala:** Yeah.

**Kevin Ball:** So are you seeing -- I know it's never been the hot thing, but it's also never really fallen off. Ember's just been kind of slow and steady the whole way along. You said you see the tide turning; are you seeing more and more people getting involved, or...?

**Chad Hietala:** Yeah, I think the community is more active than I think it's ever been, and I think that's because in Ember 2.0 a lot of the work we did was a lot of foundational things, like working on the Glimmer VM... And we weren't necessarily -- we were pretty bad about doing external communication, like "What are we working on? Why aren't we shipping more user-facing APIs?"

The one nice thing that we did this year was we do an RFC, or a call for proposals, but it is specifically for people in the community that tell us "What do you think we should be working on?" So it's like inverting the model and asking what are the actual pain points of the community, and then we take that feedback and we're rolling that into our roadmap.

One of those things was like "You guys need to talk more about the things that you're doing, because you guys are doing awesome things, but not a lot of people know about them in the community. You can get confused if you don't hear anything from the core team."

So 2.0 was getting a lot of these foundational things in place, and then 3.0 has been like "Okay, we have this really good foundation. Now let's start exposing all of this functionality that Glimmer VM can do." This is things like server-side rendering with rehydration, we have a plan to do incremental style rendering, kind of how the React Suspense stuff works, different kind of user-facing APIs... And so there's just more and more -- we use an RFC process, so there's more and more RFCs and we have a lot more community engagement in these things, and I think a lot of people are excited about what they're seeing.

**Kevin Ball:** Yeah, the RFC process is actually another place where I feel like Ember was a bit of a trailblazer.

**Chad Hietala:** Yeah.

**Kevin Ball:** Like, doing that all in the open, and having tremendous amounts of discussion going on there. I was at VueConf this year, and one of the big items they were talking about is "We're gonna open our process. We're gonna do basically what Ember has been doing, and try to implement RFCs", they were talking about release channels, and all these things... So it's not just technical components where we're seeing great cross-pollination, but a lot of the kind of procedural management things...

We as an industry are getting better at managing change, at managing open source projects, and managing communication, and things like that.

**Chad Hietala:** Yeah.

**Kevin Ball:** I'd be interested in exploring a slightly different channel on this, which is you've been involved with Ember for a while now - is that...?

**Chad Hietala:** About 2014, so about four years now, yeah.

**Kevin Ball:** And was that all through LinkedIn?

**Chad Hietala:** I did a little bit of like -- so at the startup that I worked at before I went to LinkedIn, I had to build an analytics dashboard, and Ember had just come out, I thought it was pretty cool... At the time, the documentation was not that great, and I reached out to Trek, who was one of the original core team members, and I was just trying to figure out how this thing worked... And I'm like, "Yeah, it seems kind of cool, but I have a team of four other people and I can't sit here and write documentation for this framework right now..." So we went and built an Angular 1 application, but always kind of like kept an eye on the Ember ecosystem, yeah... So it's been about -- when I went to LinkedIn, we were building a lot of Backbone applications, and we were dealing with a lot of the fundamental things about building a client-side application.

\[00:40:11.21\] I don't know how many people remember, but Backbone views - if you had nested views inside of them, you had to make sure that you properly nuked the child views before you tore down the parent, otherwise you had like these zombie views sitting around, that are getting all the user events, and all that stuff... So we were spending way too much time thinking about these fundamental things that I think other frameworks like Angular had already solved. We just needed something that was solving some of these core things about building these types of applications... So that's kind of how I got started with Ember stuff.

**Kevin Ball:** Yeah. So one of the things I've noticed is LinkedIn is a bit sponsor of Ember in a lot of ways, or at least has a lot of employees who are involved with Ember and on the core team, and things like that... Can you talk a little bit about LinkedIn's approach to open source, and how you do that? I know LinkedIn is now part of Microsoft, so there may be some changes that have happened there, but...

**Chad Hietala:** Yeah, so I don't think much has changed since -- I mean, I've been at LinkedIn now for almost five and a half years, and the Microsoft acquisition didn't really change the culture at all. I mean, I guess my paycheck technically comes from Microsoft now, but that's really about it.

The way that I think LinkedIn approaches open source, or at least the way that our team works and how we've acquired people from the Ember come team and had them come work for us has been we use Ember as if it was used at any other company. That being said, we also want to be able to push on the framework and get a lot of features that may make -- so the project that I'm working on right now is revamping how we do performance tracking inside of these applications, and there's some nicer APIs that we could have to more accurately measure some things. So by having people from the core team, it's -- you see a lot of different use cases, especially with these really large applications, and so what we're kind of responsible for is kind of like facilitating the design, getting consensus amongst other people that are not at LinkedIn, like explaining the problem space, maybe doing a couple iterations on the design, putting the RFC up, getting community buy-in and doing the implementation... So it allows us to see very different problems, and then also it's great (I think) for LinkedIn because they can dedicate us to like "Hey, we actually really need this thing, so can you please work on this open source thing for us, so that we can achieve our goals?"

We also do different -- when we open-source projects internally, we have processes for that. Chris Eppstein, who works at LinkedIn as well, has worked on Sass in the past, on things like Compass... He recently released CSS Blocks, which is like a new CSS framework... And so we also do those types of things as well, where internally -- like, all last year Chris was working on this thing, and then we released it to the public I think under like an Apache license, or something like that.

So that's kind of like how we do open source there... We're active members of the community; we don't really see ourselves like taking over it, or whatever. We go through the same process that anybody at any company would go through.

**Kevin Ball:** \[00:43:58.25\] Yeah... I really appreciate that, over -- there are some companies that do a lot of open source, but it's all their open source. They're going to drive the decision-making, through their channels... I mean, I've been involved in one of those projects, and those are better than closed source projects, but it certainly sometimes feels like they're railroading some of the rest of the community out there...

So I'm curious, when there's a project that is started inside of LinkedIn - CSS Blocks is a good example, which is a fascinating take on CSS and JS, but not really...

**Chad Hietala:** Yeah, we did a lot of work in compilers last year... \[laughs\]

**Kevin Ball:** Yeah, that's really cool. I actually looked at that, and I was like -- because I have been skeptical of a lot of CSS and JS stuff, but I looked at that and I was like "Alright, I'll take that. That looks fine...", where you're utilizing the strengths of both, right?

**Chad Hietala:** Yeah, yeah.

**Kevin Ball:** ...whereas I feel like not all, but most CSS and JS are like "I don't get CSS quite right... JS all the things!" And as much as I like Javascript, it's not the best language for everything. CSS Blocks does a beautiful job of using the strengths of both CSS and Javascript.

**Chad Hietala:** Yeah, I think that was like -- the thing that I really liked about the approach is that it's using basically all of this CSS language and parts of the actual specification to layer on the semantics on top of like JSX files, or even in like Ember templates, and stuff like that.

**Kevin Ball:** Yeah, so coming back on my question on that, do those end up -- like, when there's a project that starts inside of LinkedIn, does that end up getting treated in that sort of corporate-driven open source manner, or do you all try to push out to community governance?

**Chad Hietala:** So I don't know what the official policy is on this stuff, but I can tell you that we have a couple big projects here that come to mind. LinkedIn was kind of famously known for developing Kafka. Kafka is now I think under some Apache license. A lot of the core people that worked on Kafka no longer work at LinkedIn, instead they work for a company I think called Confluent.

**Kevin Ball:** Yup.

**Chad Hietala:** So we are still in open collaboration. That project is out in the open and we collaborate as if it was a project like Ember, that governance model. We have other libraries, we have a Rust framework called Restlet. I think people at Coursera also kind of -- we do a lot of collaboration with them... But it's more on a project to project basis.

Sometimes be open-source things because we think that it can be solving somewhat of a problem that you only incur at like a certain scale. So the number of users that you typically get out of those things I think isn't as big as something as like a Rust framework, or something like Ember, or something a little bit more general purpose.

**Kevin Ball:** Cool. Yeah, Kafka is a really interesting example. That approach of putting it out in the world -- and really, I don't know if it was deliberate, but enabling the folks who did that to go off and spin up a company around that... It's incredible.

This is where you see this idea of benevolence and giving back in tech actually playing out, which a lot of times it's -- I mean, I love Google in a lot of ways, but a lot of their "Don't be evil" is pretty much marketing at this point. Some of the stuff they're doing there is a little dubious.

That's the real type of thing - you're giving back to the community and to the industry, and Confluent is now rapidly growing, a startup, C round funded, several hundred people and getting in all over the place, making the world better across all industries, whereas it could have just died inside of LinkedIn...

**Chad Hietala:** \[00:48:13.23\] Yeah. I'm pretty sure -- the way that whole thing went down was on very good terms. The engineering folks at LinkedIn were actually really excited for, I think his name is Jay Kreps, and his team to kind of like go and do this, this open source consultancy type of company that provides all these solutions, and everything like that... So yeah, I'm pretty positive that they left on good terms. It's wasn't like "Get out of here!" "Oh, guess what?! I'm gonna steal this thing that we open-sourced!" and it was something of a bad actor stuff.

**Kevin Ball:** I mean, that's what's made Silicon Valley amazing - the cross-pollination, and the fact that people are able to go back and forth and back and forth... I think it's something that some companies are very supportive of, and others sort of accept as the cost of doing business in Silicon Valley, and it's really neat to see a company doing that.

And it's neat to see how Microsoft has shifted in that direction, right? LinkedIn has been that way for a while, but Microsoft now - there's almost no relation to Microsoft to ten years ago.

**Chad Hietala:** Yeah... I think the transformation that Satya has done over there has been pretty incredible. I don't know how many years ago it was, but when they announced that they would actually allow you to run a thin layer of Linux on your Windows machine, it was like hell has frozen over at this point...

I think that he is very much on board of having open solutions to a lot of these problems, and it kind of shows quite literally Microsoft might be the largest organization on GitHub, or something...

**Kevin Ball:** Yeah. Well, and they're open-sourcing key stuff. I would never have anticipated that things like C\# and all of those are gonna be put out in the open domain... And it's phenomenal. It's an area where we've long had kind of a public goods problem, where everyone is benefitting from open source, but not everyone is giving back, and we still have a lot of challenges for how to support folks who are outside of these large corporations doing it. But I think having the support and the willingness to let folks put this thing out there and then go out and start a company based on it, or interact with the community not just on their own terms, but on the community's terms... We need to see more of it.

**Chad Hietala:** Yeah, for sure. I like the approach that LinkedIn has taken with allowing people to work on -- like, if there's a bug in open source land, feel free to go fix it, and use your time to fix those types of things, as we benefit from them.

**Kevin Ball:** Absolutely. Awesome. So your talk is today or tomorrow? Or, sorry --

**Chad Hietala:** It is Thursday.

**Kevin Ball:** Thursday, cool. So good luck...

**Chad Hietala:** Yeah, thank you.

**Kevin Ball:** I'm looking forward to that. So that's gonna be talking about compilers and Ember, or just compilers?

**Chad Hietala:** I'm gonna be talking about the work that we did... It's doing a little bit of history of compilers and what we've used them for, and then kind of talking a little bit more about Glimmer VM and the work that we've done there as kind of like an example of the types of things that we might need to build or would like to build in the future.

**Kevin Ball:** Nice. So based on our conversation here, I'm sure you're gonna rock it.

**Chad Hietala:** Thanks!

**Kevin Ball:** Best of luck, show skill. Thanks for taking the time to chat with me. This has been fun!

**Chad Hietala:** Yeah, it's been great!
