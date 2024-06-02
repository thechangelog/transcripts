**Jerod Santo:** Hello, world. It's your internet friends, Jerod and Kball. Just the two of us, Kball. How are you doing?

**Kevin Ball:** I'm doing alright. Not that often I get to spend this much quality time with you.

**Jerod Santo:** That's true. Just the two of us here. What do you wanna do?

**Kevin Ball:** Well, of course, when it's the two of us, we're gonna have to break down JavaScript news. Like, that's what we do when we have our intimate time.

**Jerod Santo:** That is what we do in our free time, when it's just the two of us... Zero TypeScript news today, so you'll be happy to hear, as our TypeScript aficionado is not here. Just me and you, and we're talking HTML first. So HTML first, and first up on the docket - it's another State Of survey, which we've covered from time to time. This won't be the deep-dive that we've done in the past, where we spent an entire episode reviewing the state of... But this is The State of HTML, not State of JavaScript, not State of CSS... I believe there's a CSS one that we've done. State of HTML -- you know, we've gotta give HTML some love. It is the bedrock of everything that the web is, is it not? I mean, we've gotta give it some love.

**Kevin Ball:** Yeah, absolutely. I mean, at the end of the day, no matter how much JavaScript you put out there, if the HTML isn't there, what are they going to do?

**Jerod Santo:** It's just a blank page. So what is the state of HTML? Of course, this is the annual survey... I believe this is the second time they have done this one, put on by our friend Sacha Grief and Lea Verou, who's been on the pod a couple of times... Finding out what folks are using, what they're not using. And the full results we won't go through today; you can check out the website, which is linked up in the show notes... But just a few items that I thought were of interest.

First of all, under features being used, there are questions around tooling, which always piques my interest. Specifically, site generators was highlighted. "Which of these static or dynamic site generators do you regularly use?" Kball, did you look at the results, or can I quiz you?

**Kevin Ball:** I did.

**Jerod Santo:** Okay, you know what the results are. Well, I don't think anybody is surprised that Next.js dominates with almost 40% of respondents using this one regularly. No surprise there necessarily...

**Kevin Ball:** I think what's more interesting, honestly, is if we -- so there's a set of these on here... So there's Next, there's Nuxt, there's Gatsby, there's SvelteKit... These are all application frameworks more than static site generators. I think if we peel those away, and look at what else is on there... Astro's kind of in the middle, in a very fun way. And they're doing great, but Astro, 11ty, Jekyll and Hugo all in there --

**Jerod Santo:** ...are more classic generators, right?

**Kevin Ball:** Exactly. And it's neat to see Jekyll. There's still a Ruby generator...

**Jerod Santo:** Right. 7%. Almost 1,000 people. So let me break it down one through eight here. Next.js first, with 39%. Astro second, with 18%. Nuxt, with 12%. Gatsby at 10%. 11ty coming in at 8%. Jekyll, like you mentioned, 7%, and then Hugo coming in at 6%. So a decent chunk of people are still using non-JS static generators. So both Hugo, which is in Go, and Jekyll, which is the OG, I think... Well, it definitely popularized this category. It's not the original static site generator, but very popular because - there's a little bit of history here - Tom Preston-Werner, a co-founder of GitHub, wrote Jekyll. It was one of the first big open source Ruby projects on GitHub. And he also wrote a very famous blog post called, I believe - I'm going from memory - "Blogging like a hacker", in which he made it cool to blog with style. And Jekyll just skyrocketed from there, and became kind of the de facto for many years, eventually being replaced by other tools. But it's still out there.

**Kevin Ball:** \[08:12\] Yeah. I mean, I think this idea that markup is all you need for blogging, for site generation, for things like that - it's really nice, and it's clean, and it maybe gets us out of the cycle of every developer who wants to blog and says "Oh, but first I need to build a website for my blog." Like, just use one of these frameworks, write your blog in markdown, and you're done.

**Jerod Santo:** Right. And there's also this situation that happened more in the past than it does now, probably because of static generators, but also because of the proliferation now of easy free hosting plans, is that we had this thing called the Slashdot effect, which eventually became the Digg effect... And then it became the Hacker News or the Reddit effect, as different social aggregators kind of replaced each other. But this was a situation where you would have a dynamically-rendered blog, and you wouldn't do anything -- like, it's WordPress, or its \[unintelligible 00:09:05.20\] What was the other one that was popular back in the day? I don't know, there's another one that was not WordPress, but was very similar... Insofar as if you don't have caching turned on, every time you get a server request, you're just rendering that whole page over and over again. Which is totally fine, until a popular --

**Kevin Ball:** Until you get on Slashdot, or whatever it was.

**Jerod Santo:** Until you're on Slashdot, and they send a bunch of traffic your way, and then all of a sudden your website is down. And that happened to a lot of hackers, because we're not used to people reading our blogs, you know? \[laughs\] We write in obscurity. And then every once in a while, a big personality, or a Slashdot or a Digg would suddenly send a wave of traffic to your blog... And at the one point when you want people to be able to read your site, because they're interested, you lose a bunch of opportunities.

One of the points that Tom made in that "Blogging like a hacker", which spoke and resonated with so many of us, is like "It's just HTML. There's no Website is Down. There's no rendering. It's prerendered." And so you're never gonna get slashdotted, you're never gonna get Digg effect. And that's why a lot of people, I think, were into it back then.

**Kevin Ball:** It was like the original piece of "Let's actually send things close to the client. Let's have something where people can load something useful without having to touch our database."

**Jerod Santo:** Right. And so yeah, they're still out there, just probably because of good old-fashioned momentum. But yeah, a few of these would, of course, be offended if you called them site generators, because they do so much more. Other ones gladly take the moniker.

**Kevin Ball:** I do think Astro is kind of the interesting --

**Jerod Santo:** Hybrid?

**Kevin Ball:** ...hybrid there, because they have this very text-centered approach that was delivered as a part of their philosophy. I think we interviewed -- was it Fred? About that. And just like kind of going into what they do, and why. But they also extend very smoothly into either full-on applications, or little mini applets that are embedded as widgets in your site.

**Jerod Santo:** Yeah, almost their own category, which is very cool. And of course, shout-out to 11ty, a longtime friend and guest of the show Zach Leatherman's "little framework that could." I mean, they just had 11tyConf, which was cool... I'm not sure that's what it was called, but it was an online-only virtual event that Zach put on, and it seemed like it went really well... So a lot of buzz and just love going on in the 11ty community, which I want to share with folks. Definitely a cool project.

Let's move on quickly down to AI tools. "Which of these AI tools do you regularly use to help you write code?" Not exactly HTML-focused question, but still... No surprises here. Most people, ChatGPT. Over half. 52%. 34% using Copilot, and then just pulling up the rear, Google Bard, which I believe has been renamed already, so I'm not sure when this --

**Kevin Ball:** Yeah, I don't think Bard exists anymore.

**Jerod Santo:** Yeah, they renamed it Gemini, and I'm not sure if it still does code, or -- I mean, I'm sure it does code, but...

**Kevin Ball:** It does. Yeah. I'm surprised to not see Claude on here, because a few people I know who do this are like "Oh yeah, Claude is better for this type of stuff."

**Jerod Santo:** \[12:09\] Yeah, my guess is that the actual surveys were done a while back... And this is such a fast-moving thing that it's probably not even worth tracking without some sort of context, of like "There's brand new stuff all the time." In fact, GPT 4.0 just came out. It's supposed to be better. So far, I've used it for a day or so, and it feels pretty much the same to me... But people are very impressed on social media.

Last one here - this is fun.

**Kevin Ball:** Hold on... Possibly most interesting on this is if we should play out the numbers a little bit. How many people say they are not using an AI tool at all for code generation? It's just 38% of respondents.

**Jerod Santo:** True.

**Kevin Ball:** So inverting that means 62% of developers, at least answering this survey, are using some sort of AI tool to help them code.

**Jerod Santo:** Are you still writing code? I can't remember.

**Kevin Ball:** Occasionally. No, I just get ChatGPT to write it for me.

**Jerod Santo:** Yeah, I was gonna say, you're managing ChatGPT now?

**Kevin Ball:** No, I do write code occasionally. I was debugging a tricky JavaScript bug yesterday.

**Jerod Santo:** Nice. Those are always fun.

**Kevin Ball:** Oh, yes.

**Jerod Santo:** Are any of the details interesting, or no?

**Kevin Ball:** Only to rant about --

**Jerod Santo:** \[unintelligible 00:13:15.28\] Is it gone now?

**Kevin Ball:** No, so it was dealing with React and an infinite scrolling component... And the challenge was -- and a pet peeve I have about JavaScript, which is JavaScript has all these array methods, some of which that present sort of a functional interface.

**Jerod Santo:** Right.

**Kevin Ball:** And some of them do sort of the natural functional thing of essentially create a copy that they're returning to you of the mutated data, and some of them actually mutate in place. And it turns out if you do .reverse on a JavaScript array, it mutates it in place. And if that is state that you were getting from a hook somewhere, and causes your React component to rerender every time you do it, you can get up in a very nasty loop.

**Jerod Santo:** Yeah.

**Kevin Ball:** So be cautious.

**Jerod Santo:** Yeah. Ruby is the same way. These languages that have -- you know, some mutate, some don't. And I just -- I appreciate purely immutable languages for that reason, because you never get bit by that particular inconsistency.

**Kevin Ball:** Yes.

**Jerod Santo:** Well, did you use ChatGPT to figure it out?

**Kevin Ball:** I did.

**Jerod Santo:** Nice. It was all Cable, baby. You jut gave it all.

**Kevin Ball:** Kball GPT. Here we go.

**Jerod Santo:** There you go. So I recently wrote a little Node server, which is effectively Puppeteer as a service just for our own dynamic share images. It just takes the HTML and just renders it, throws it on an S3 bucket or whatever... And it's just a little Puppeteer thing. And I had not written like a Node server for probably a decade honestly, because I just don't write -- in backend. I write Elixir, and in frontend I use JavaScript. But I wanted to use Puppeteer. Why go try to shove Puppeteer somehow into Elixir land, which there aren't very many great tools, or go with Chromium directly...? Anyways, I was just like "Just use JavaScript, man." And so I wrote a Node server; it's probably 100-ish lines of code, over a few hours... And Node's really nice now. I mean, we're gonna talk about a new release of Node, but... I thoroughly enjoyed it. Async/await's all good... You can set it in ESModules mode, all good... ChatGPT was really good at writing a few functions for me... So I just -- ah, modern Node.

**Kevin Ball:** Well, and that type of thing, where you have a single-purpose, small, standalone thing is actually where these AI-based code generators shine. They're really good at one-offs, and generating those things. And where they struggle a little bit more is when you're trying to sort of modify a big system, and kind of dealing with lots and lots of different contexts... They could do some things in there, but they also fall on their face more often. But that type of like "Here's an established piece of technology. It's been around a while, so it's in the training corpus. I want to write a single-purpose server..." Dang, these tools are really good at that.

**Jerod Santo:** \[16:03\] Yeah, absolutely. Alright, now let's move on to "A blast from the past." This was a fun question... "Have you ever used any of the following old-school elements?" So these are now long since obsolete, but still out there, apparently. These are HTML elements: center, marquee, font, frame set and frame blink, which the blink engine was named after Applet Plain Text, which - I didn't even know about plain text. Is index and nextid. Center being the most used, because hey, in anger, we're like "Maybe if I just wrap it in a center tag, this thing will center." 50% of people have used center, that responded, of course. And then marquee 45%, font 40%, and so on. I was curious with you, Kball - have you used any of these in the last five years?

**Kevin Ball:** Five years? Maybe frameset and frame... No, that was more than five years ago. No, I don't think so.

**Jerod Santo:** Yeah. I don't think I have either. Maybe just marquee one time, for fun; for nostalgic purposes. But I would fall into category 10, 33% of respondents have used none of the above. But half of the people that took this have used the center element... I guess recent enough that they would say yes to that question. So that's kind of crazy to me, but okay. Center it up.

**Kevin Ball:** Is center still relevant for HTML emails? I feel like that might be one place where --

**Jerod Santo:** So I can only speak to my experience... It's that everything's basically just tables and rows in order to get to a certain center. And then you just write your content inside of that table. And so that's what we use, but maybe center works there as well. I don't know. Possibly. There is a new website... You know caniuse.com. How about caniemail.com? Have you heard of this?

**Kevin Ball:** It's necessary, because HTML email technology's stuck in the '90s.

**Jerod Santo:** It's so bad. It's so hard. I still get -- with Changelog News I still get emails a lot of people who are like "This doesn't look right."

**Kevin Ball:** Do you use MJML?

**Jerod Santo:** No... Just good old-fashioned HTML and tables. Isn't MJML going to be React?

**Kevin Ball:** MJML conceptually is a preprocessing, or a template language.

**Jerod Santo:** I know I looked at it, and I was like "Hmm..."

**Kevin Ball:** There's a React version of it, but you could actually try to embed it in line, but I would even more just use it to generate your HTML templates that you then use in \[unintelligible 00:18:26.29\]

**Jerod Santo:** Just write manually, yeah. Ours was like -- when I did this new iteration, it was basically like just cargo-culting what we did previously for Changelog Weekly, which looked very similar, but quite a little bit different, you know? And so I did look at MJML. I remember thinking "Oh, is it React?" And I was like "Yeah, I'm just gonna do my own thing." You know, kind of stodgy... But yeah, I've heard good things about that.

Anyways, caniemail.com. I definitely would promote the use of that for anybody in the unenviable position of having to craft their web pages for email clients... Which is even harder than the battle days of non-interoperability amongst browser engines.

Alright, let's move on. Definitely check out stateofhtml.com for more. There's a lot of good stuff on interoperability, limited functionality, what people will really want... It sounds like people really want better forms, better input support, more widgets, tabs... We just want more widgets inside of our browsers, versus having to reinvent the wheel over and over again. We would love those things to be HTML-native... And maybe with this data, someday they will be.

**Break**: \[19:42\]

**Jerod Santo:** What's up next on the docket? It looks like Node 22. Care to do that one next?

**Kevin Ball:** Yeah, let's do it. Speaking of Node being nice these days...

**Jerod Santo:** Yeah, Node 22 now available. This was released April 24th. So about a month back. Big release, lots of notable changes, specifically, requiring ESModules. They've got a built-in WebSocket client now. V8 has been updated quite a bit... What was interesting to you from this release? Anything?

**Kevin Ball:** Yeah, so I think the requiring of ESModules is a nice step forward. It still doesn't work for every ESModule, because you still have this kind of awkwardness around synchronous versus asynchronous... If it has a top level await, I think it throws an exception, or something like that. But it is a step towards kind of finally having universal access to ESModules without special configuration. I think it's Node basically throwing in the towel of saying "Yeah, we know this is an ugly solution, and it has drawbacks, but people want ESModules, so let's do that." So I think that's good. I think it's still experimental, and I think it's not fully there, but it's a step in the right direction. Having the WebSocket client just built in by default... It's great.

**Jerod Santo:** It's good stuff.

3: It's good stuff. One thing that stood out to me, that I think was actually introduced in Node 20 - it's still experimental, but it's improving - is this idea of process-based permissions, which I think was one of the big things that Deno originally pushed forward, of like you can enable which permissions are allowed for a process... And I love to see Node pulling that back in, or taking that inspiration and making it happen in Node land, because that is a huge, huge security improvement, to be able to say "You know what? There's no reason this process should be accessing my filesystem. Just let it go."

**Jerod Santo:** Yeah, that's really cool. And then the rest of the major wins, it seems like, was just by bringing V8 somewhat up to date. 12.4. Of course, V8 has a bunch of stuff built into it, and so you get the freebies by Node running off a newer version of V8. It looks like they got WebAssembly garbage collection in there, array.fromasync, so additional array methods, set methods... All the goodies.

And that really is what is nice about writing Node-side JavaScript - you're not dealing with like lowest common denominator functionality. You don't have to go to caniuse, because the answer is yes, pretty much. If Node does it, you can do it. And it really is a reason to enjoy some backend JavaScript. So check it out, Node 22.

Moving on to React.

**Kevin Ball:** React is still going! They're still the gorilla.

**Jerod Santo:** They still are, and they have a couple things going on that were notable... One that just dropped yesterday, and I know that Nick was very excited about, because he put it in our chat and said "Let's do a show." So maybe a full show coming soon about this, is the React compiler, which is open source. This is a new, experimental compiler that the React team has open sourced to get early feedback from the community. What does it do? It's a build time only tool that automatically optimizes your React app. It works with plain JavaScript, and understands the rules of React, so you don't need to rewrite any code to use it. I mean, free code optimizations - why not, right?

**Kevin Ball:** It's hilarious, because it's another step... One, it's community inspired, I think. Again, they're looking at the things that Svelte's doing, and the things that Angular is able to do, owning the whole ecosystem, things that Qwik is doing, where they're saying "Hey, we can make things faster by default, because we run this build-time compile step that can make all these optimizations", and React is saying "Wait, wait, us too! We could do that, too!" So I think there's something really interesting and powerful there...

\[26:04\] I do think it is also a Reaction to the fact that it's the core of React, it's really easy to write non-performant code, and it's gotten very hard and labor-intensive to keep React performant as your app scales... And this is saying "Okay, maybe what we can do is we can figure out tooling around that that reduces some of that developer load." You do still have to follow certain rules. In frameworks like Qwik or something like that, it won't work at all if you don't follow those rules. In React it'll probably work in some ways, it just won't be fast or effective. So this is saying "Okay, you follow the rules, you can get some automatic speed improvements."

**Jerod Santo:** Yeah... I wonder how easy it'll be to run benchmarks without it, and then just use it, and then benchmarks with it and see if you get the wins to make it worth it to integrate it into what you're up to. I don't know if it's planned to be run -- I'm not sure exactly, like, is this part of your build step every time you compile, you build your program to be launched? Or is it going to be like you run it once, and it tells you how to rewrite stuff to -- I mean, it says automatic, but...

**Kevin Ball:** My impression was it was part of your build step, which does then introduce some interesting questions around differences between development environment and prod or staging.

**Jerod Santo:** Yes. Because notably, this is written in Rust. This is not written with Node or with JavaScript tooling. And so now are we going to ship another dependency, perhaps? Or are we going to have a universal binary? Does Rust do universal binaries? I don't know... Like Go does, so that you could just ship it like alongside the rest of the tool chain? I don't know.

**Kevin Ball:** I think it's gonna have to get built for your machine...

**Jerod Santo:** So the React team might build a whole bunch of different distributions of this, so that you have to compile it yourself, you just download the one that matches your architecture. I don't know.

**Kevin Ball:** I mean, I would assume it's like any sort of Node-based natural language extension; it gets built at install time. So you install it with Node, and it does the compile.

**Jerod Santo:** All very new, all very experimental things to ask the team... But out there in open source already. So Facebook, GitHub \[unintelligible 00:28:16.16\] It's in the compiler folder inside of the React proper. They also have a blog post out... Maybe this isn't a blog post. This is like in their Learn the New React docs that talks about it. And it says, "Should I try out the compiler?", it says "You don't have to rush into using the compiler now. It's okay to wait until it reaches a stable release before adopting it." So it's really exciting. The community's up in arms about -- not up in arms. That's a bad thing. Up in excitement about it. But it's very much like the folks who are building and getting involved, and probably early adopters trying it right now, early days... But stay tuned for perhaps an episode from us with some of the React team. We know that Joe Savona was involved, and he's been on the show before... So we can probably get Joe back on to talk about what they're up to with that. That's cool.

And then, of course, the much anticipated, much awaited React 19, in beta, as of April 25th. Perhaps you know, perhaps you've heard, perhaps you're running the beta. I don't know if you like to live that close to the edge or not... But first release in a long time. It's still not released-released, but it's out there. What's all in React 19, Kball?

**Kevin Ball:** So there's some pretty interesting things... I think one of the big headline pieces is - okay, React Server Components are actually production ready. They're no longer experimental. They're baked in part of it. I think that's a big step. That's probably why it's taken so long... But also, we've all been sort of adapting to what are these things for a long time. It's kind of pushing that one step further.

\[29:51\] Another couple of things I thought were interesting... One is they introduced this new concept of actions and transitions, which as far as I could understand reading it - I have not tried playing with it yet - is kind of trying to absorb some classic patterns around how you handle state transitions between "Okay, I made a change, I send an API request, I get something back, I update the place", like all those different things... Right now there's a lot of like patterns you put in place to manage that smoothly, and make sure it handles things like errors, and optimistic updates, and things like that. And React is saying "Oh, this is a common problem that everybody has. Let us absorb some of those patterns into the core framework, and make it easy to use."

One particular example that I thought was really nice is they have a new hook called "use optimistic", which essentially is like "Alright, you're doing an update back to the server with this value... Let's optimistically update the UI to that value, and have React put that in place, but then automatically handle when the value comes back from the server, or if there's an error, or something like that, to update it based on that." That's a really nice, just smooth experience, something that previously you either have to handle yourself, or not handle and have either a slow UI, or something that could get out of sync.

**Jerod Santo:** Right. Loading spinner... Yeah.

**Kevin Ball:** So that's really nice. They also introduced this new 'use' method, that from what I can tell is basically -- it's a similar type of thing, but it's trying to make the user experience... Or sorry, the developer experience around Suspend a lot nicer. So dealing with Suspend, and it's throwing promises, and all of that has always been a little bit of a tricky developer experience... And with this, you basically can use a set of promises, and then once this -- then Suspend is off and doing something, and when Suspend comes back, it automatically updates that in whatever your component is. Yeah, a lot of kind of nice absorption of patterns around how to deal with asynchronicity, and things that people have been having to do by hand.

**Jerod Santo:** Yeah. I love optimistic UIs. I think it's definitely the way to go. 9 times out of 10 everything's hunky-dory, so why don't you just go ahead and update the UI, assuming if it was good, and then have some sort of a reaction to a failure as the corner or edge case that it typically is. But traditionally, that's kind of a pain in the butt to code that up. I mean, it's just not as straightforward as just waiting for the response, and then handling it from there. So any tooling that allows more people to do optimistic UIs I think is a big win. So this use optimistic to me is pretty cool.

Alright, so React Server Components, production ready... We have actions and transitions, which are kind of intimately linked, in my mind, according to what I read, where it's basically an action is more of an idiom, it seems, than an actual formalized piece of the codebase... Because they say "By convention, functions that use async transitions are called actions." So they're just kind of calling certain functions actions, and hoping that catches on... I don't know. Am I understanding that correctly?

**Kevin Ball:** I think they're basically pulling -- these were things that were encapsulated in state management tools. If you look at like a Redux, or things like that, action meant something there. It's very similar to what this is. And they're saying "Oh, we're discovering that more and more, especially now that we have contexts, we have all these other tools for managing state directly in React. People aren't using these heavy tools, but then they're missing some of the functionality and niceties around that... And so let's start building that into React."

So I think that concept of "Here's a straight state transition that triggers an asynchronous thing to happen" - that already existed. That was a part of state management tools. And React is saying "We're gonna have some developer experience around that, just in court React."

**Jerod Santo:** Very cool. So do you know how long these betas tend to run before you actually get a finalized release?

**Kevin Ball:** It's a good question. I don't actually know. I have to look on their blog...

**Jerod Santo:** \[34:02\] They don't call it beta one, so I think they're assuming this is the only one... Some projects will have like beta one, beta two, and then a release candidate, you know... I'm not sure how React does theirs. But are we assuming this is going to be soon? I mean, it's been a month, almost, since the beta came out...

**Kevin Ball:** It's not clear to me.

**Jerod Santo:** Yeah. So just stay tuned... The question, I guess, would be for your typical shop, is React 19 actually ready to give it a shot yet, or is it like -- because I remember back in the old days of Ruby on Rails, for instance, they would have a beta one, a beta two, a beta three... However many betas they needed, and then they'd have a release candidate one, release candidate two... And as a guy who was just trying to run some websites on Rails, but didn't want to fall behind, I was like "Yeah, I'm gonna wait until release candidate one", because by then it's like, this is pretty solid. Barely anything will change between now and the big release. And so I kind of had an idea of what that actually meant. But if there's just one beta, and then who knows, and then it's going to release, you wonder if the beta is baked enough for your common people to try it, or if it's just like "Yeah, it says beta." You know, Gmail was in beta for like 12 years, so... What does it even mean anymore?

**Kevin Ball:** Yeah... I don't see -- let's see, it's on npm... I was trying to look in their GitHub repo for if they have historical beta releases, and see what was going on there, and I didn't see it. But the beta isn't even on GitHub right now, so now I'm looking to see if it's on --

**Jerod Santo:** So I'm thinking that it's pretty not baked, would be my guess. So on their React 19 beta upgrade guide, one of the notes at the top says "This beta release is for libraries to prepare for React 19. App developers should upgrade to 18.3 and wait for React 19 stable." So I think if you're just an app developer, even though the beta has been out for a month, I would probably just sit tight... Unless you have a small codebase and you can try it real quick, and see if anything broke... But if you have like a significant app, I don't think I would be hopping on this beta train. Because they say it's for libraries. It's not really for regular devs yet.

**Kevin Ball:** Yeah. It's not clear. For 18.0 it looks like they did do a beta, but it's so long ago, it's hard to read. And in that one they went through alphas... It was months and months. I would not anticipate this is ready to go. I think it'll be a while.

**Jerod Santo:** Alright, so there you have it... There's our advice from two people who've been burned plenty of times to know better... \[laughs\]

**Kevin Ball:** Truth.

**Jerod Santo:** ...but still kind of want to check it out... Like "Well, should I check --"

**Kevin Ball:** Go play with it on a side project.

**Jerod Santo:** Yeah, exactly.

**Kevin Ball:** Don't start \[unintelligible 00:36:44.01\]

**Jerod Santo:** Not production-ready. Don't put it on your money-making endeavors at this point. Alright. Next up, we've got Vault. Vault from some of our friends. Vlt.sh, from some familiar faces and names. Maybe you remember Darcy Clarke, who's been on JS Party a handful of times talking security... They are trying to "Build the future of JavaScript packages." That's what the homepage says. What is this all about, Kball?

**Kevin Ball:** That is a great question. I was trying to dig in and understand what it is. So you've got a founding team, which includes both the original creator of npm, and a couple of folks who were in npm from early on, and have also done stuff in GitHub, things like that... You have a website that is basically just to sign up for news, but also has this blog post... Their first blog post is aiming at essentially supply chain security. Looking at "Oh, there is this massive baked-in vulnerability in how npm works", and that leads to all these supply security challenges. And then if you look at their investor list, they list out who all their investors are... It includes two JS Party folks that we know. Amal is an investor, Feross is an investor... They're both called out by name there. So are people like Guillermo Rauch, however you pronounce his name, Evan You, and I saw also a former VP of Snyk, however you pronounce that...

\[38:23\] So all of these signs -- like, particularly, you have Feross in there, you have somebody from Snyk in there as an investor, and you have this initial blog post about supply chain security... I think what they're going to be trying to do is a new package management ecosystem that is secure by default, that cuts off a lot of the -- like, right now we have a whack a mole problem in npm package security. There's all sorts of people attacking it from different ways. But fundamentally, there are vulnerabilities in the way that packages are managed in the JavaScript world, and you can do either automated, or manual reviews and all sorts of things to try to manage that. But my guess is this is trying to attack that core problem, and build something that's going to be secure and verifiable by default.

**Jerod Santo:** So you all may remember the episode "The massive bug at the heart of the npm ecosystem." That was the first blog post by Vault... And I think Darcy talked a little bit, and he was very vague when he was on the show, talking about what he was up to... But he did mention that Isaac Schleuter, the original npm creator was with him... And he has since recently in March announced this funding round that Kball is referring to... And just still vague, but interesting, mostly because of I guess the pedigree of the people who are either invested or on Darcy's team. It looks like these folks are serious JS community people, with some money behind them, from very smart people. I even see David Kramer from Sentry on the list, I see Michael Jackson from Remix investing as well... So I'm curious what they come out with.

That being said - I mean, you do have Ryan Dahl and the Deno team coming out with their thing already in production, the JSR registry. So are we going to see now some competing at the registry layer, beyond even what you see right now? It seems like probably we're going to.

**Kevin Ball:** It definitely feels like it's heading in that direction... And I think it's kind of a reaction to this sort of escalating number of supply chain security vulnerabilities that people have run into, and a realization as people were digging into it that it is essentially unsolvable with the current systems. And so now people are saying, "Okay, it's unsolvable. We're trying to keep the lights on and patch things as we go, but we've got to attack the heart of the problem."

**Jerod Santo:** I think it's kind of cool that we have, at least we assume what Vault is building based on what they've said so far, and who they are. We have registries or package -- let's just call them packaging solutions coming out from the creator of Node, and then the creator of npm. It's like decades later... And it's like "Round two, baby. Let's see what happens."

**Kevin Ball:** Yeah. Well, and it is interesting to realize -- I mean, we look at React... React, the changes... It's the types of changes you'd expect in a very mature ecosystem, of like "Okay, we're absorbing these patterns from the community, we're handling these things..." And then you have people saying "You know what? We have the foundations wrong. Let's reassess that and relook at--" It leads me to believe that there's still a long runway for innovation in the JavaScript community.

**Jerod Santo:** Amen to that. That's exciting times, for sure. So one more bit of, I guess news, I don't know what you'd call it... I didn't put it in the doc, Kball, so I'm gonna slap you with this one... It's the Gulp Developer Survey. We talked about the State of HTML, and we talked about Blast From the Past... I mean, I hadn't heard the term Gulp, except for in Dumb and Dumber, when he says...

\[42:12\]

*"Hey, guys... Oh, big Gulp, son... Alright. Well, see you later."*

**Jerod Santo:** ...for years. And yet, here they come. Gulp has gone nowhere. They had a recent release, and they're actually introducing their own Gulp developer survey. Did you use Gulp? First of all, tell our young listener what Gulp is, and then we can talk about whether or not we used it.

**Kevin Ball:** Oh, man... Okay, so Gulp is fundamentally a JavaScript task runner. Back in the day, before we had good build tools, it got used as the de facto build system. And at some point, the ecosystem said "Hey, you know what? Test runners don't actually make great build systems. They're optimized for different things." And so we had a variety of different dimensions. I think the first one was actually -- as so often is the case, Ember had this build dedicated system... I believe it was called Broccoli, or something like that. That went in that direction. And then WebPack said "Oh, okay, we're gonna get in the game", and they started winning everything... And most recently you have Vite saying "Let's go back to basics, build on top of ESModules", which to be fair, we're not there back, when these original build systems were working... But let's build on top of this, let's make things faster. And so the kind of the build ecosystem has evolved tremendously, beyond what Gulp or another task runner could do.

**Jerod Santo:** Well, let me mention the other big task runner, which you're gonna remember... Grunt.

**Kevin Ball:** Grunt. Yes. That was actually --

**Jerod Santo:** Grunt and Gulp.

**Kevin Ball:** ...another big thing. So those two, fundamentally, had a philosophical difference. So Grunt was file-based. You would read your stuff in from a file, write out to a file, and then whatever the next task, it would read in from files, write out to files. That obviously gates you performance-wise on the performance of your file system. Gulp used a streaming approach. You'd essentially stream tasks input to output, input to out, kind of go there, which allowed it to be much faster on another set of dimensions.

Now, I too had not seen Gulp in a long time. Part of that was my main exposure to Gulp was through build systems. However, while build systems are not perhaps the best application of task runners, or a more dedicated system is actually better than a task runner, there are tons of different things that do fit into a task runner paradigm. And so it's not that surprising to me that Gulp optimized for task runners still exists. And I was looking, it's still getting over a million downloads a week, or something like that from npm. It's still moderately widely used...

**Jerod Santo:** Which is interesting. And they're currently running a survey... "We invite you to help us explore the needs of the Gulp community above and beyond the issues on GitHub, by completing the Gulp Developer Survey before May 31st." So as you listen to this, you still have a few days to get it done. If you are a Gulp user, please do. The survey's anonymous, and they just want to find out how people are using it and what they want from it, so they can make it better.

As you get to a certain scale, even a project like this - which is, they said, a decade old - you don't know exactly... It's being used so much you don't know exactly how people are using it. I remember we asked Daniel Stenberg from the Curl project years ago now - famously, we asked him how he knows how people are using curl, and he's like "I have no idea." \[laughs\] Now, he's since developed similar things, so he can have a feedback loop from his users... But he also had so many users, using it in so many different ways that it was like "How do you even wrangle that community?"

Anyways... A lot of times you're not sure how people are using it, and all you are responding to is the squeakiest wheels, who are using it inside your GitHub issues to report their bugs and their feature requests and all these things. And the squeaky wheels are awesome, in a sense... But they're also louder noises than necessarily represent your user base. And so you can overcompensate for power users, which I think happens a lot... And it's hard not to.

**Kevin Ball:** \[46:07\] Well, and sometimes the squeaky wheels are the people trying to use it for something it's not actually good at.

**Jerod Santo:** Good point.

**Kevin Ball:** You have a large number of people using it for the things that it's good at, and being very quiet. But if you don't understand that that's what they're using it for, you might not realize there's an opportunity to develop it even further in that direction.

**Jerod Santo:** Yeah, that's a really good point... Because oftentimes when we're trying to use something that it's not exactly developed for, that's when we hit up against so many corners, and edges, and limitations... And so then we are the ones who are reporting these limitations. And if you listen too much to those - I've seen it happen; you can really take a project in a direction that nobody except for a few really want to go in. And it takes, I think, a certain level of experience, and I guess confidence to say "That's a really cool idea. Please do fork it, take it over there and build that thing. But that's not what this tool necessarily is." And so you need to hear from not just those people, even though they are often your best contributors, and stuff... But you need to hear it from everybody, and so that's what they're trying to do. I mean, I didn't even know Gulp was still in active development. So for me, this is cool just to learn about, that it's still out there doing its thing.

**Kevin Ball:** Well, and I think this is an example of a common problem for us, right? We see the hot, shiny new stuff, because that's what's making news, and that's what people are exciting about. But boring technology lasts a long time. How many sites are still built on WordPress? How many sites are still using jQuery? All those different things. It's fun and exciting to be in the hot, new world, and when you're doing greenfields projects, you probably want to start in the hot, new world, because there are benefits. There's reasons why people are evolving in that direction. However, when you're not doing greenfields work, and if it ain't broke, don't fix it.

**Jerod Santo:** Yeah. Callback to our episode recently, my interview with Kelvin Omereshone from the Boring JavaScript Stack. He's out there promoting Sails.js - s-a-i-l-s JS; not trying to sell JS... Which is a server-side, kind of Rails-like in JavaScript from 2012, 2011... That's when it started. And it's still just doing its thing, and there's still people that are building new websites with it... And like a whole little ecosystem of boring technology that's like building businesses, that I hadn't known about until Kelvin made me aware of it. Cool stuff... He was so excited about the most boring things,; it was hilarious. He's like "I'm here to get you excited about boring tech."

**Kevin Ball:** Well, and if you are interested in entrepreneurship and business, a lot of times the problem you're solving is only sort of a technical problem.

**Jerod Santo:** Yeah.

**Kevin Ball:** And you have a set of risks that you're taking on by trying to start a new business, or a new product, or a new feature line... And if you can avoid having technology be one of your risks by using something that is boring, but tried and true, and just works out of the box, and all of the error cases are already handled, and all of the rough edges have been sandpapered down, and it's easy to use and easy to adopt... That's one more risk you don't have to worry about.

**Jerod Santo:** Absolutely. So what are some examples of boring technology that folks could look at? I would say Postgres, or MySQL... Right? Like, boring relational databases...

**Kevin Ball:** Relational databases... Monolith application frameworks...

**Jerod Santo:** Django, Laravel...

**Kevin Ball:** Django, Rails, Sails, things in that domain. I mean, I think we're seeing that a lot with React... React is actually becoming the boring technology.

**Jerod Santo:** It is. It's been assailed by people saying it's not the new hotness anymore.

**Kevin Ball:** But that is actually, in my opinion, one of the reasons why a lot of people are using it, because it just works for what it does.

**Jerod Santo:** Object storage?

**Kevin Ball:** \[50:00\] Yup. Object storage, blob storage... I mean, actually, SQLite. SQLite is a boring, local database technology that actually works for a lot of different things. And you can run it live in your browser, you can do all sorts of different things with SQLite, that give you -- if you want relatively simple, but database-like functionality, in a local environment, whether you're shipping an app or you're running something in the browser, it just works.

**Jerod Santo:** A really cool project that I've been watching called Redka, which is a reimplementation of Redis, with a SQLite backend. So it's actually just SQLite, but you have the Redis APIs... So all Redis clients work against it. And it's not as fast as Redis was, but it's fast enough for most use cases, and it's just the boring, simplistic, reliable SQLite at the end of the day. That's pretty cool. It's kind of a melding of the new and the old there, because it's a new project, but using old tech... Because you know, Redis isn't exactly open source anymore, so a lot of people trying to go out there and find alternatives, moving forward from Redis... Which I would have historically called, at this point, kind of a tried and true boring piece of tech. But it got exciting. It got exciting recently... \[laughs\]

**Kevin Ball:** For non-technical reasons.

**Jerod Santo:** Yeah. For all the wrong reasons Redis got exciting again. Well, I think Node.js is pretty boring. I mean, because what's coming on the podcast is the Denos and the Buns, right? And what's now the boring, tried and true tech? I mean, Node version 22. That's a lot of versions, but rock-solid.

Alright, well, this is getting boring... So let's end there. I will not continue to pester you to list even more pieces of boring technology. That's the news to discuss, unless, Kball, you have any other links that I didn't see, or things that we didn't mention as we went along, things I skipped over, that you want to highlight before we end it.

**Kevin Ball:** No, I think that is all good. The not-boring is figuring out how to use AI in your projects. But that's been referred to recently...

**Jerod Santo:** Oh, yes...

**Kevin Ball:** There's no better way to make a project slow and not valuable than throw an LLM in where it's not useful.

**Jerod Santo:** \[laughs\]

**Kevin Ball:** That being said, they are very useful in some domains...

**Jerod Santo:** Yes.

**Kevin Ball:** People are -- what did we say? 62% of people using them to help them code?

**Jerod Santo:** Yeah.

**Kevin Ball:** If you're not already trying that, see where you can find the value. Because I think -- and the reason I bring this up is when we talk about boring, and we talk about exciting technology, I think we as technologists, as engineers, tend to skew to the extremes. We tend to either go to "I'm going to try everything new. This is so cool." And we see this in the hype waves, and like "Oh, my gosh. We've got to do everything new." Or, because we've been burned by that, we go into the super-skeptic side of like "No, there's nothing valuable here. Only do the old stuff. Only do the stuff that's proven, and the things." And I think using AI to code and using it in some of these domains is one of these where those two extremes are both dangerous. They both are going to cause problems for you.

\[53:06\] I think if you are way in on the hype, you're going to end up using it where it shouldn't be used, and end up in one of these places where -- I go back to the... There was a chatbot on an airline website that gave away things that the airline did not actually have --

**Jerod Santo:** Oh, really?

**Kevin Ball:** Like, parts of it. And then they were found legally liable. They had to follow through on a contract, because they said "It's on your website. You have committed to it."

**Jerod Santo:** So it's like a deal that the person wouldn't have got otherwise.

**Kevin Ball:** The deal that did not exist.

**Jerod Santo:** Yikes. That's real money right there.

**Kevin Ball:** And they were found legally liable for it. So if you go too far into "Oh, these things are magic", you will end up you shooting yourself in the foot with them. However, they are not pure hype. They're not crypto, it's not just technology for the source of making money and not valuable for anything else... Sorry, Feross, or whoever it was -- it wasn't Feross. Who was into crypto?

**Jerod Santo:** Mikael Rogers.

**Kevin Ball:** Yeah. Sorry. But it's not crypto, it's not all scams. There is real value there, and if you're ignoring it because you're in that sort of "Oh, it's been overhyped, so clearly, there's nothing actually here", you are gonna get left behind. And so I think that is in that domain of "It's not boring, but it's worth looking into, but don't buy into all the total crazy AGI next year" hype.

**Jerod Santo:** Right. Well said. I agree on all fronts. Cool. So aren't you also -- I saw on LinkedIn you were doing some sort of AI productivity thing... Do you want to --

**Kevin Ball:** I am doing AI stuff, yeah. So a couple different things. So the company I work for, Mento, is a coaching company. We're working on AI coaching tools, which is kind of fun. And it is trying to find that line of like "Okay, let's not over-promise, but let's deliver something that's actually valuable to people." And as a part of that, we're uncovering all these different pieces around like "How do we actually productively use it?"

So I think what you probably saw was I'm giving a talk this summer on an application pattern around AI. And here's the key piece of it... So it uses the AI to interact with someone to extract some information, but then you validate it with that person. Because one of the core problems with these AI tools is they will lie to you. And they may get things right 80% of the time, even 90% or 95% of the time. But if you're gonna go and take what somebody has said to you, and like go off and do something, you need to validate it first. And then, once you've validate it, you can extrapolate from there.

So I think as we talk about AI, thinking about "How do you validate what you're doing with it, and what you're getting with it?" So if you're in that AI chatbot case, is there a way you can formally represent whatever the agreement is you've gotten to, and validate it formally? "Okay, these are the sets of offers that we actually can offer." Or run it by a human. Or do something else. But like thinking about these patterns of "AI is really useful, and it is not reliable in the way we're used to thinking of software as being reliable... So we need to use it, and then find a way to validate the outcomes."

**Jerod Santo:** Very cool. Well, hit me up with a link to whatever conference or whatever talk you're giving, so we can hook people up in the show notes...

**Kevin Ball:** Yeah.

**Jerod Santo:** ...for those who are interested in hearing about that. It sounds interesting to me, indeed. Alright, on behalf of Kball, and JS Party, I'm Jerod... We'll talk to you all on the next one.
