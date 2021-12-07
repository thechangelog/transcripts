**Jerod Santo:** Welcome back, everyone. It's JS Party time! Speaking of back, Amal is back. What's up, Amal? How are you?

**Amal Hussein:** I am well, thank you so much, Jerod.

**Jerod Santo:** Happy June, happy summertime.

**Amal Hussein:** Indeed.

**Jerod Santo:** Indeed. And Kball is here. What's up, Kball?

**Kevin Ball:** Hey! I'm doing great. I have coffee, in the office again... It's awesome.

**Jerod Santo:** He's in the office, he's drinking coffee... That's the Kball we know and love.

**Kevin Ball:** You got it.

**Jerod Santo:** And we also have a special guest, it's Nick Reese. Nick, thanks for coming on the party.

**Nick Reese:** Hey. Thanks for having me.

**Jerod Santo:** We are excited to talk about Svelte today, to talk about static site generators, to talk about Elder.js, which is your project... But first off, we need to address this - Nick has impostor syndrome, y'all. Nick, welcome to the club. We all have impostor syndrome here, and we're all welcome... But you felt like maybe you're not qualified to be talking on a JavaScript. What's up with that, man? Of course you're here, you're qualified... No impostors.

**Nick Reese:** Yeah, so I've only been writing meaningful code for like three years, and it's kind of funny, because I never really identified as being a developer/coder anything like that prior to this. I've built several ICO companies and startups and had several exits... Essentially, I have to have something to do with my time, and I find building out useful websites for consumers is kind of where I spend that. I built a static site generator for fun, and it kind of grew into something I decided to open source and that has meaningful usage in the world. It's kind of strange, because I've never had my code critiqued; it works, that's what I know... And it feels a little strange to imagine people picking through my code and saying "Oh, this could be more efficient" or whatnot, but everyone has some of that.

**Jerod Santo:** \[04:01\] Yeah, absolutely. Well, congratulations on the success. Sometimes just the confidence to put it out there is what it takes to overcome that feeling of "This is not good enough to open up or to release", and being willing to face the fire of a bunch of fellow nerds poking and prodding and saying "Why did you do this? Why did you do that? You shouldn't have done this, you shouldn't have done that." Sometimes that's the scary thing. But you've got past that, and you've got some people interested, so that's a cool thing.

**Nick Reese:** Yeah, it's been fun. It's been really enjoyable to have actual feedback to my code. Before this, essentially, my team would just commit my code because I was the boss. And now, seeing people using my code because it's actually useful, it's pretty nice... \[laughter\] So yeah, it's definitely a flip of the tables. I've never really had code review, so it's cool to see other people reviewing my code, and say how things can be more efficient. It's a nice feedback loop to improve.

**Jerod Santo:** Yeah.

**Amal Hussein:** Code reviews are one of the most underrated tools when it comes to teaching and learning and growing. I don't know folks appreciate it; it just feels like a chore, like "Ugh, I've gotta get this over the -- I've gotta submit this PR for review", but it's such a great mechanism for giving your colleagues feedback, and then also getting inside other people's brains, of how they would do it... So I love giving feedback and getting feedback on my code. It's the best.

**Jerod Santo:** You love both. So I do not love giving the feedback. I don't mind receiving it, because I'm trying to improve, and I know my code is not what it could be, or there's other better ideas... But the giving side for me always feels like the chore. If I had ten to-do's on a day, and one of them was "Code review Kball's code", I automatically put it at number ten, because I just don't wanna do it, so I end up blocking people. It's terrible. What about you, Kball?

**Kevin Ball:** Well, I think reviewing code and reading code is its own separate skill from writing code. And it's one that we don't always flex in the same way. I've actually been investigating the possibility of putting a code review stage into an interview process, because I think it is such an important set of skills. "How do you read and understand code that you didn't write?" And let's be honest, read and understand code you wrote six months ago is basically the same problem.

**Jerod Santo:** You're right.

**Kevin Ball:** How do you read and understand it, how do you critique it, how do you think about it, and how do you give useful and constructive feedback - those are all unique skills, but extremely valuable.

I also wanna loop back a little bit on the "new to coding" thing... You actually have a super-power, Nick, which is you have experience out in things that are not coding. So many times people who are coming up purely in the coding path, they're like "Oh, but what should I build? I know! I'll make a developer tool!" because they're so stuck in this isolated world, and this idea of like what is actually useful to people who are not software developers, what's gonna make a good business, or a good open source project that's not just serving other developers. It's actually a very hard step.

So I love to see folks coming to coding late in their careers, or midway in their careers, having already done some sort of other expertise. I think it sets you up very well for success within this field, just as it sounds like you've already seen success in other fields.

**Nick Reese:** That makes a ton of sense to me, because on my end, I see all these opportunities, and that's the reason I got into programming, is so that I could actually start tackling those opportunities... Because there's like that step between where you actually -- you have an idea, but you need to communicate it, and sometimes that's not high enough bandwidth, especially once you're like a talented developer. You can almost just spin up your ideas faster yourself than having to manage a team.

I've always been a really big fan of really tiny teams, like more than seven people. None of my companies should be larger than that, because if you can't do that, suddenly your communication explodes exponentially. You have politics, you have everything else... And for me, I like to move fast. If I'm the bottleneck and my typing speed is the bottleneck, that's generally what matters to me, and that's the reason why I've been attracted to developing in general.

**Kevin Ball:** \[08:01\] Yeah, prototypes even are one of the most effective ways to communicate an idea. Can you create a prototype that shows what you have in mind? For me as well, doing that in code is way faster than trying to do that in some sort of GUI tool or some other thing.

**Nick Reese:** I one hundred percent agree.

**Jerod Santo:** Plus, it's just the autonomy, and the fact that it's fun to bring at least a prototype or at least some aspect of your idea into the world, without anybody's help. Maybe a little bit of help here or there, but when you can go from idea to deployed something on your own, whether you're a CEO of a startup or whether you're just a tinkerer who has this idea - that I think is very satisfying, and I think that's what drives a lot of the willingness to learn more, and go through the arduous process of getting better. It's because that feeling, those endorphins when you actually deploy - pretty rad.

And working in a team is fun. I think when it comes to creating something brand new - I think if you can do it without needing anybody, that's a superpower, too.

**Nick Reese:** I would say that's probably one of my favorite things about releasing Elder.js. Generally, when you use an off-the-shelf tool, you might look at it and say "I wish it did this thing." Well, now I can do that, "Oh, I can actually make it do that thing."

Just recently on a project we're building - I can talk about it later, but it's called FindEnergy. It's a site we released with Elder.js. We're shipping these huge payloads to the browser, and generally, what we'd done before that is build these little custom functions that would basically write everything to an array, and then have the reverse of that on the browser... Because if you're passing JSON, those keys can be duplicated just a huge amount of times. On our Texas page the payload was like 500 kb, because we're rehydrating it in the browser. I was like, it's really strange to me that no framework essentially goes through and collects all the props that are gonna be written to the HTML, creates a custom dictionary, and then unpacks it on the browser. And I was like "I wonder if that could work." I took a quick power nap, and I woke up and I was like "I just can't stop thinking about this idea." And about two hours later I had it built into Elder.js. And after brotli, it's still saving it 10% of the size. I was able to reduce the HTML size of those props by like 46%. So it was pretty satisfying to be able to do that very quickly. So I don't know of any other framework that does prop compression, but it feels like it should exist if you're using islands, essentially, to partially hydrate stuff.

**Jerod Santo:** Yeah.

**Nick Reese:** Because often -- for instance, the word "Texas" was in those props hundreds of times. There's no reason that we should have that so many times when it's incredibly easy to use a map and build a custom dictionary for the browser to unpack that.

**Kevin Ball:** That's kind of fun. So you're applying code minification to data, because you've got JSON-based data...

**Nick Reese:** Yup.

**Jerod Santo:** And knowledge of the system, and the ability to do it.

**Amal Hussein:** Yeah. To be honest, I think the reason why maybe this hasn't been "invented" yet at scale is there's so many clean boundaries that are drawn... You know, there's separation of concerns, and a lot of times people are focused on optimizing their little bucket, their concern, and I think the orchestra of concerns when they're working together isn't the end-to-end optimization of web development and serving assets from source to user. There's lots of leaks in that pipeline, and it's because no one is solely focused on the pipeline. Everybody's focused on their little pipe.

**Jerod Santo:** Amal, the orchestra of concerns - I think that's like a new talk by Amal Hussein coming soon.

**Amal Hussein:** Oh, yeah. \[laughter\] Yeah, I could write a coffee book with just titles of inspiring tech talks, like all the problems... Maybe we should do that as a podcast... play some slow music...

**Jerod Santo:** That would be cool. Just like, "Here's a bunch of ideas of talks people should do."

**Amal Hussein:** To do, right. Put it out into the universe, just delegate.

**Kevin Ball:** Amal's gonna do inspiring ones, and I'll just do bad dad puns. \[laughter\]

**Amal Hussein:** The flipverse?

**Jerod Santo:** Yeah.

**Amal Hussein:** \[12:02\] So I think JavaScript frameworks have historically taken on a big burden when it comes to the orchestra of concerns. There's a lot of abstraction around multiple layers of user interactions that are just kind of simplified for developers, but it's really cool to see that y'all have taken it a step further with Elder. That's great.

**Kevin Ball:** I feel like this is a trend that's going on right now in the JavaScript ecosystem. JavaScript for quite a while was all-in on the fragmentation, and many small packages, and all of these different pieces, and we're seeing more and more folks going the route that we saw in some other ecosystems, where it's like "No, we want end-to-end understanding of the system, because we can do these types of optimizations." We want sensible defaults that maybe you can configure. I'm thinking frameworks like Redwood trying to do this, I'm thinking toolchains like Rome trying to do this... We're seeing this idea -- and in the tech industry we do this all the time.

**Jerod Santo:** The pendulum swings.

**Kevin Ball:** Yeah, the pendulum swings between "Okay, we wanna coordinate everything" to "We're gonna break everything apart" to "We're gonna coordinate everything again" to "Break everything apart." This is part of what this industry does, and actually what I think technology does in general... But we're seeing that in JavaScript.

**Jerod Santo:** I agree with you completely, Kball, and it's something that I've been sort of preaching on this podcast for a couple of years now; I think this is a good trend, and of course, every methodology has its pros and cons, and so you can get all-in on a framework as a community and see the downside of that... That being said, I wanna generalize something that Nick said about his ability to just go ahead and put this feature into Elder - I just wanted to generalize that and say, as developers, you should be building a toolkit. You should be building reusable things that you have, that you can pull from, and you can modify. And when you have that idea, you can say "You know what - actually, if I go back to this thing I wrote before and I change it this way, then this project benefits, and I can take that to my next project that's gonna benefit..." Now, maybe it's not open source, maybe it's not a framework, maybe it's not for everybody to use, but be building up kind of a compendium of things that you can continually work on throughout your career, and carry them with you just like you would a box of tools.

The nice thing about a software is you buy a hammer, it's a hammer. But with software, we can build our own hammers. So of course, use other people's code when it makes sense, but be building things that you have the control over and the knowledge over, so that when you have that idea, you don't get blocked at some upstream... Like, "Oh, I was gonna do this, but Svelte can't do that, so I can't do that." I'm not saying "Don't use Svelte", I'm just saying that when you have the autonomy inside your own tooling, it's really powerful to see your ideas to fruition.

**Kevin Ball:** And even if you can't control the code, write down how you solved it somewhere. I've solved the same problem for three or four different companies, at different times; a couple of different problems. Because it's one that shows up regularly. And now, when I'm at a new company and I see it starting to have that problem, I can say "Okay, great, I can solve that for you in a day", because I've done it, I've got the patterns... And yeah, it's one where there's enough nuance that a complete open source solution isn't likely to work, because it has to integrate with your data or whatever... But the pattern exists, and I can just run with it. You can do that by writing it up in a blog post, or internal notes, or something like that. So even if you can't build out that reusable code snippet for whatever reason, capturing those patterns and building yourself a pattern library is super valuable.

**Jerod Santo:** One hundred percent.

**Nick Reese:** Sorry to interject here - when I was writing Elder.js, I wanted to make sure plugins were essentially first-class citizens. So there's like an entire hook system that enforces what -- basically, Elder.js under the hood has a global scope everywhere, but there's like a hook system that doesn't allow you to change things that shouldn't be mutated on different hooks. What that allowed us to do is -- or the idea here was to basically make sure that plugins could be first-class citizens.

\[16:09\] For instance, the number of times I've written resizing of images in order to do responsive images is just crazy. I think I've done it 4-5 times. But now, because plugins are a first-class citizen, I can just take that old code and basically put it into a plugin and now anyone can use it.

That's what I love about what I've built there - all of my old tools that I have, of like hidden repositories that aren't public, I'm slowly peeling them off and making a little ecosystem for Elder.js, because now they have a place. Just a standalone package that resizes all your images doesn't really -- you know, that's cool, there's lots of those, and most people would reach for something like Sharp in the JavaScript ecosystem to resize stuff. But by having it as a part of the Elder.js ecosystem, you can now use it if you're using Elder.js's static site generator, or if you're using -- you can use the same code if you have a dashboard where you're uploading images for an internal by your team, you can still use that on an Elder site. So it's kind of nice to be tightly coupled, simlar to how Apple controls the hardware and the software. It's really nice, I really enjoy that.

**Jerod Santo:** So we've mentioned Elder, we've said it's a static site generator... It has a very specific opinion or viewpoint of the world, which comes out of the work that you do in your business... So before we get too far into the details, Nick, why don't you just hit the nail on the head, give the synopsis of Elder.js, and the SEO aspect, and some of the high-level things, so that we all have the same foundation to build on?

**Amal Hussein:** Yeah, so Elder.js started because I like to build massive sites, that are basically SEO-focused. The last one was BroadBandNow. I have a few others: FindEnergy and ElderGuide. Essentially, what these do is they take a huge amount of government data and create good user tools or resources so people can make informed decisions. Well, if you're doing that and you're doing so much data, you either have the decision to spend a lot of time optimizing your SQL, or you can use a static site generator... Because then the build times don't really matter, because if you're serving it from a CDN, it doesn't really -- static content is fast, right?

So that's where Elder.js was born out of. But the problem that I've found with the JavaScript ecosystem is generally SEO is kind of an afterthought. SEO is what happens after. And I got really badly burned -- I was turning around a project... I had acquired a site that had been built on WordPress, and I converted it to Gatsby with a team of really talented developers... And Gatsby kept on making core changes, and our rankings were just going down. And I was like "There needs to be a framework if I'm gonna be going all-in on JavaScript that takes SEO as a priority and makes it a priority." And while Elder.js doesn't do anything from an SEO perspective, it's always gonna be thought of first and foremost. SEO - we're not gonna do anything that's gonna hamper your efforts. Internally in the Svelte community I was spending a lot of time lobbying to work on better hydration, because the way it was working -- basically, hydration for Svelte was trashing the entire DOM model, and then rebuilding it. So that would cause - this is my hypothesis, is that Google has two different bots. One is the one that just looks at HTML, and the other one is a JavaScript bot. And that's known. When you're basically trashing the DOM, Google doesn't know if it can trust the HTML, so it sends the JavaScript bot around... So we're having indexation problems. For me, it's important that someone's watching that, especially if your business is built around SEO.

So that's the main reason why I went all-in on SEO for Elder.js. Does it do anything fancy? No. It's the top consideration. Every single decision I make is from an SEO view.

**Amal Hussein:** Nick, don't you feel like that problem is a little -- like, SEO is a concrete nugget that you can point to for where most JavaScript frameworks fail... But I think it's a symptom of a wider problem, which I think that the root cause is just JavaScript bias. "Dun-dun-duuun...!"

**Jerod Santo:** \[laughs\]

**Amal Hussein:** You know, "Love of JavaScript may cause using too much JavaScript to do all things."

**Jerod Santo:** \[19:56\] Right. Sleepiness, drowsiness...

**Amal Hussein:** Sleepiness, drowsiness, too much JavaScript...

**Jerod Santo:** \[laughs\] Slow-loading pages.

**Amal Hussein:** Yeah.

**Kevin Ball:** Building a simple blog with Gatsby...

**Amal Hussein:** Right.

**Nick Reese:** Yeah, exactly.

**Amal Hussein:** Building a simple blog with Gatsby. That's great. Or even more concretely, just not respecting the primitives of the web, and constructing too much DOM in the browser, and putting that cost on the user... It's just asinine. Am I allowed to say that on TV? Are we on TV?

**Kevin Ball:** JS-inine.

**Jerod Santo:** Yes and no.

**Amal Hussein:** JS-inine. You know, it's just problematic, because we've kind of furled ourselves into this mess, and the sad thing is the arc of the web -- things get published, and a lot of times not updated... And it's the problem that's gonna live with us for a long time. It's gonna take another generation, I think, to hopefully unfurl ourselves... But I'm glad that you're taking a step in the right direction with Elder.

**Nick Reese:** Yeah, it was really surprising to me to find that there wasn't a single framework that really allowed you to just serve static JavaScript, or just static HTML, that was generated by JavaScript. You had to have all this client whiz-bang. You had to have full hydration, you had to have a service worker, you had to have all this stuff. And debugging service workers because you're having SEO issues is not fun. That was an issue that we had that was the closest thing that we could point to when we had issues with Gatsby - they made a major change to the default service worker, and we just had to rip out the service worker in order to do it. It seemed like everything was overkill, and I decided to spend an afternoon building my own little framework, and it worked, but then it started growing... And you know how those things go.

**Break**: \[21:41\]

**Jerod Santo:** So Nick, let's just answer the question that's burning on everyone's mind right now - why Elder.js? Do only old people use this thing? What's with the name?

**Nick Reese:** No. Basically, the start of Elder.js was -- the first project that was built with it was elderguide.com. From an SEO perspective, I always had the theory that there's not really bad links; there are bad links, that's not up for debate, but essentially any legitimate links are good links. And I decided to host the documentation on elderguide.com because people link to the documentation. So it's part SEO experiment and part it just seemed like it fit. It was an interesting name, my wife loved the name, and she's a bit of an artist, so she drew the logo...

**Jerod Santo:** The logo is awesome.

**Nick Reese:** ...so it fit the brand of ElderGuide, so that's what we went with.

**Jerod Santo:** I'll give you this - it certainly has attributes of a good name. It's easy to say out loud and to spell. So if I say it, you can spell it, so you can get there. There's no namespace clashes on Elder. It's two syllables... It's kind of a good name, actually. And I did notice that you do have the docs on your ElderGuide.com site, and I thought "This guy knows his SEO", because that's actually a nice marketing move, to put the docs right there.

**Nick Reese:** \[24:06\] Yeah. Also, I think as a user, going to it - I've gotten the feedback a couple of times that people are like "What is this site?" and then it hits them, that this is like a very meta thing, because you're on the site that was generated by this tool. And I like that effect of it as well.

**Amal Hussein:** All the good puns too, right? Respect your elders... There's just so many --

**Jerod Santo:** Get off my lawn, you darn kids...

**Amal Hussein:** Yeah.

**Jerod Santo:** You know, you can yell at people...

**Kevin Ball:** I was gonna say, it is in some ways going back to older types of technology where you can ship your HTML, and it only is shipping a little bit of augmentory JavaScript and the fact that it's a super-modern under the hood framework - you're still getting back to the roots of the web.

**Jerod Santo:** Like OldSchool.js.

**Amal Hussein:** Yeah. Like JavaScriptForInteractivity.js, you know? \[laughs\]

**Jerod Santo:** JavaScript sprinkles.

**Amal Hussein:** Not JavaScript for like "Make the DOM... Do all the things in the browser... While the user is waiting..."

**Jerod Santo:** \[laughs\] That was awesome, but I feel like you're just trying to get back on the soundboard now, Amal. She's like "I'm gonna start singing all of my sentences..." \[laughs\]

**Kevin Ball:** "I'm gonna dominate this soundboard..." \[laughter\]

**Amal Hussein:** No, the reality is that I was just encouraged to do the thing that I love, which is sing.

**Jerod Santo:** Oh, shoot. We encouraged her.

**Amal Hussein:** \[laughs\] Oh, no... I'll stop singing. But seriously, it's a dope name. Very, very dope.

**Jerod Santo:** It is cool.

**Nick Reese:** Thanks. Yeah, I kind of miss the days of jQuery, somewhat, just a little bit, where you sent static HTML and you made it fancy with jQuery. I mean, I don't miss jQuery, but I miss that effect of you send static HTML and it was pretty easy to reason about... And that's essentially what Elder.js started as, is just shipping static HTML, and then I found a way to partially hydrate Svelte components, and then the Svelte community asked "Hey, would you open source this?" and originally, the entire templating library wasn't written in Svelte, it was all written in like a small lit-html equivalent... And yeah, I ended up finding a way to make Svelte the default templating, so there's very clear server-side-only templates, and then there's things that are client-hydrated... And it works really well. I'm really happy with how it turned out. And what's nice about it is if you're not using any interactivity, you ship zero JavaScript to the browser. It's so nice. It's exactly the way the web used to be. But if you need interactivity, it's right there.

**Kevin Ball:** Wait, you said default template... Can you use other templating languages?

**Nick Reese:** Currently, no.

**Jerod Santo:** \[laughs\] He wanted to say yes real bad...

**Nick Reese:** But there's no limitation to -- well, technically I could make it so you could do it with any other language. The main problem Elder.js has is it needs to be able to look up a component just by its name. So currently, we have that in great support for that with Svelte, and it's tightly coupled with a Rollup system, which - I hate bundlers, by the way; thank you to all the people that write bundlers. I don't like dealing with them. Thank you so much for what you do.

**Jerod Santo:** \[laughs\]

**Nick Reese:** And it's got an esbuild integration as well... So that has to be super-tightly integrated with Elder.js, or else Elder.js wouldn't be able to do what it does. I'm just a little bit reluctant to bite off a whole other ecosystem... So for now, unless someone is really passionate and wants to come help take over that part of it, it's gonna stay Svelte only.

**Kevin Ball:** So let's flesh out then a little bit what it does. So what are the things that Elder.js does for you?

**Nick Reese:** Yeah, it's a great question. So before this, I ran several SEO companies, and all the way back -- basically I have said that SEO has paid the bills since I've had bills to pay. 2006 is when I built my first website. Obviously, it was on WordPress. I scale that company into having hundreds of websites built on Wordpress, and what we've found is when we had many different developers working on it, we generally just hired freelancers. It was really easy for a WordPress install to get pretty gnarly pretty quickly. So what we did is we chose a single template that had its own custom-built hooks in it. It was called Thesis Theme. We've had all of our sites ported to Thesis, and all the complexity had to live in a hooks.php file. That was our rule. And it allowed us to basically use developers interchangeably.

\[28:02\] So if one developer took a different job, we were able to hire someone else, and we knew all the complexity always lived in the hooks.php. And that philosophy allowed us to scale really well. I tried to do that with Elder.js. Essentially, Elder.js started as a static site generator; it still can be an SSR framework, but right now, us as a company, we use it as an SSR framework, but most people are interested in the static site generation side of things.

One of the main things that I wanted here was hooks. And you can plug in any part of the page generation process or the build process and fully customize it. You can also disable almost all the features that Elder.js offers for you and plug in your own.

**Kevin Ball:** Wait, wait, wait. Sorry to interrupt you, but before we run deeply on that, can you clarify what you mean by hooks? Because I think -- if I'm understanding correctly, you're meaning something that is closer to how WordPress thinks of hooks than what the JavaScript community often thinks of as hooks, which has been sort of owned as a name by React Hooks... So can you flesh out what you mean by hooking in this case, and then keep going?

**Nick Reese:** For sure. You nailed it, thanks for pulling that back. Essentially, WordPress had hooks that allowed you to plug in any part of the WordPress page generation process. It's not like a React Hook, it's basically "Here are the props that are available to you, and if you mutate this state, you can expect that to be mutated for the entire generation of that page." It was pretty nice on WordPress, but it got pretty hairy too, because you're mutating global state. So what Elder.js has is an entire hooks system, so you can plug into the bootstrapping process, the page generation process... Basically, when it writes the JavaScript to the HTML, when it generates the HTML... You have full control of every single one of those steps. But what I tried to do is -- I like everything to be global scope, because it's a lot easier to reason about in a framework... But I wanted very specific rules of when you could mutate things and when you couldn't. So I have what I call a hook interface, and it enforces a contract. So if you're going to change something on a specific hook, and you're not allowed to, it's gonna throw an error.

What's really nice about that is if you have a mid-sized team - well, for me a mid-sized team - like 4-5 people working on it, it's really nice to have all the complexity in a single file, and you know that no one is gonna mutate the global state ahead of you in a way that they shouldn't.

**Kevin Ball:** Got it. So these are request lifecycle hooks, essentially, as it goes through different parts of rendering your page... I say "request lifecycle", but they could actually be during a static site --

**Jerod Santo:** Build.

**Kevin Ball:** Yeah, build lifecycle as well. It's like page generation lifecycle hooks.

**Jerod Santo:** There you go.

**Nick Reese:** Yup. So there's basically three steps. There's the bootstrap process where we're reading all the routes and we set up all the known pages that we're gonna generate. Then there's the page generation hooks, and then there's also build hooks. And you can plug into any of those, and basically customize how Elder.js performs.

**Amal Hussein:** I am in love with this idea. I love this ownership of contracts, end-to-end. It feels very much like you're building in integration testing with the way you've structured this... Because it's like, people are not stepping on each other's toes, but you're also able to enforce an event propagation workflow, because you're like "This is the way the global state should be mutated. Not that way, this way." That's super-cool. For me it's just, again, another example of ownership of the full pipeline, and I think that's very cool.

Does it get annoying for users that there's so much opinion though, I'm curious... Because with great guard rails comes great...

**Jerod Santo:** Pushback.

**Amal Hussein:** ...I would say limitations sometimes, in terms of how creative folks can get... So I'm just curious if that's been a feedback that you've received.

**Nick Reese:** My goal in writing Elder.js was to have the framework get out of your way... And anytime you make that decision, you trade that for complexity upfront of learning the framework. So I actually think it's worse when you pick up a framework that's too easy to pickup, it's super-easy to pick up, but it has opinions that you can't change. So I would say that yes, Elder.js does have a learning curve. But it's gonna get out of your way if you need to customize something.

\[32:04\] Astro has gotten a lot of exposure recently for doing partial hydration across Svelte, Vue and React... But when I look at their model, I'm concerned that if I wanna do anything that's against them, I'm gonna run into errors and issues. So when I look at Elder.js, I know that I can customize every part of the flow, or the users can customize every part of the flow. They can disable everything that Elder.js does internally, and write their own, or they can augment it as they please. So yes, there's a steeper learning curve, but I think with that learning curve comes power.

**Amal Hussein:** Yeah. I think that's what's really cool here, actually - both the open and closed design, and the open architecture that you've built with these plugins and "hooks". It's just a good way to write software, because it's infinitely extensible... So yeah, kudos on that.

**Nick Reese:** Thank you.

**Amal Hussein:** It seems like you're a good software architect actually, so...

**Nick Reese:** Thank you.

**Kevin Ball:** I wanna dig a little more on something you've just said though, Amal. So you highlighted hooks and plugins... It feels like there's actually potentially some conflict between these.

**Amal Hussein:** Ooh...

**Jerod Santo:** The plot thickens.

**Kevin Ball:** So a plugins architecture potentially allows you to essentially distribute the responsibility of having to think about logic, and encapsulate whole bodies of functionality within a plugin that you maybe don't even have to understand anything about the internals of.

**Amal Hussein:** Right, right.

**Kevin Ball:** But you've also just said you wanna be able to look at a single hooks file and have a single location of responsibility for all the sorts of modifications... And those to me feel like they're in conflict, so I'm curious how Elder handles that. Are you unable to plug into hooks as a plugin? How does that work?

**Nick Reese:** So my goal was that the plugins will be first-class citizens. So they have exactly the same ability that users do, except they don't have access to one hook, which allows you to customize all the hooks. How we handle this is -- it actually happened by accident. Plugins are essentially given their own closure scope; so when a plugin initializes, they set their default configuration, but they also get that configuration object during initialization. That configuration object is passed through every single hook that the plugin calls on. So they're able to store all of their changes or their own specifications in their own scope that no one else has access to. Even the user doesn't have access to the plugins scope on their own hooks.

**Kevin Ball:** So then when you're rendering a page, for example, if it's using the plugin, is it getting a scoped thing, and do these scopes nest, or do they interact? Can you have plugins that interact in some way, or have dependencies between each other? How does this work?

**Nick Reese:** Yup. For example, the image plugin that does something similar to Gatsby Image, that resizes all the images and makes them responsive - it interacts well with the markdown plugin. You can toggle on a feature that will replace all of your markdown images with responsive images, just under the hood. Basically, all of them run in the same scope, and you need to know -- like, there's a different priority level, so if it's 100 priority, it's gonna run first, and if it's 0, then it runs last... Yes, a plugin could cause issues, do unexpected things, but under the hood it's exactly the same hook system you're working on. So if you know how the hook system works, you can go read the plugins code. It's not a perfect implementation, but I do think that the ability to put all the plugin logic in its own scope that no one else can touch is pretty much the best solution I could come up with on that idea... But I'm honestly open to other ideas if there are ways to handle that.

**Kevin Ball:** Got it. So I guess part of what I'm trying to understand is -- so for a small team and small projects, or small team and large projects even, but for a small team, having everything in one place where you're continually working with global things is great, and it makes a ton of sense. And I'm trying to understand whether Elder.js is essentially limited to that type of project environment, or if it's something that can scale to larger teams, where being able to isolate segments of the site, segments of the codebase, and apply locally-scoped things.

\[35:56\] It sounds like I'm hearing if I wanted to create that type of isolation, for example, I have two independent teams that are working on different parts of the site, and the want to be able to do local applications of changes via hooks, or something like that. It sounds like what they would need to do is structure -- either they're both working in the same file and having to think about the interactions, or they're structuring those local changes as plugins, so that they're entirely scoped.

**Nick Reese:** Exactly.

**Kevin Ball:** Is that a fair assessment?

**Nick Reese:** Yeah. Two separate teams - you could have them develop with the same power in a plugin by itself. And the plugin can have its own server-side templates, it can have its own hydrated Svelte templates... It has full control. Essentially, team A could be working under a plugin, team B could be working under a plugin as well... You wouldn't be stepping on each other's toes.

Another thing is under the hood Elder.js has several different debug flags. So if you turn on debug hooks, you'll get every single thing that mutated, every single state on every hook. So you can see that. If you wanna know what's causing performance delays, you toggle that and you get a clean printout of every hook and how long it took to run in milliseconds.

**Kevin Ball:** Nice.

**Nick Reese:** A whole bunch of these things are really trying to think about "How do I troubleshoot these things?" Because troubleshooting an opaque system is really hard, and so I think the framework should give you those tools.

**Kevin Ball:** Well, that's a great place where your background coming into this as someone with less development experience is super-helpful, because you've been feeling acutely the pain of "How do I debug this thing without fully understanding all the pieces?" So from the start, you're building in that debuggability.

**Jerod Santo:** Yeah. Essentially, everything that Elder.js does is because I've needed it. So I didn't know SQL before I started writing ElderGuide, at all. I knew nothing. So I was just like "You know what - I can basically spend time optimizing queries, just randomly, or I can figure out which queries are running the slowest." So I built a performance monitoring system right into the system. There's a prop that is passed into all the data files, and you can basically call that to start and stop before the queries... So for me, it made it super-easy to know which queries were making the build slower. So now we build an 18,000-page site in a minute and 20-something seconds. So that's way faster. But at the beginning, it was over an hour, because the queries weren't optimized. And now more than half of all of that page generation time is waiting for data.

**Amal Hussein:** For me, what I'm learning about Elder is that it's this really good marriage between (I would say) practical developer needs and easy maintenance of software... Because there's a lot of crufty developer tools that do X, Y, Z - bundlers, for example - not the easiest to maintain, and ramp up and manage either... So I think there's a really good balance that you've struck... But more importantly, I think there's so much lost with tools because they're built in silos; there's very little real-world use case that's applied to some of the designs around developer tooling... So it's just so nice that you have these real-world needs built right in. Just kudos... It's really very refreshing.

**Nick Reese:** Thank you, I appreciate it. Yeah, it's intimidating to release software. I know it works, but I also know that there's probably better ways to do what I've done. I'm not the smartest person in the room, and that's the scary thing - on the internet, the room is pretty large... So I'm sure there's ways to really improve the site dramatically, and I would welcome that feedback... Or not just the site, but the architecture, dramatically.

One of the things I'm most proud of is the partial hydration. Essentially, when you're going to hydrate a component, in just about any framework, you have to del with what the server rendered, and then you have to take those same props and then mount another component on a target div or element... And that's a really tedious process, and it's really surprising to me that none of these frontend frameworks - when you do server-side hydration, they just don't give you the hydration code right away; it's very surprising to me that -- like, when you pass it into the server-side object, we don't care about the bundle size that much of the server-side object; just pass me back the client-side code. All I need to do is pass in the folder structure. So that's where Elder.js kind of started... And now, if you need a hydrated component, you just go into one of your Svelte server files, you type "hydrate-client", and all those props will be hydrated under the hood for you automatically, really makes the islands approach, so to speak, or this modular "I'm only gonna hydrate what needs interactivity." Incredibly easy to do.

**Break:** \[40:05\]

**Kevin Ball:** So I'd love to dig a little bit more into what you're talking about in terms of hydration. I'm not super-familiar with the islands approach you're referencing, so maybe a little bit of a high-level explanation of what that is... But the key problem that I have seen across a number of frameworks that do server-side rendering plus client-side hydration is what's sort of the Uncanny Valley effect, where the user sees the page, it looks as though it should be able to be interactive, but there's a second, two seconds, sometimes even three or four seconds before they can actually interact with the page; clicking or hovering does not have effect in the way they'd expect. So I'm curious, one, if that's a problem within Elder.js, and if not, how you resolved it.

**Nick Reese:** Yeah. So as far as what the ISLANDS approach is... I think that was popularized by Jason Miller. If I'm getting his name wrong, sorry. I don't read that much JavaScript. JavaScript blogs, so to speak. But I know that many other people have mentioned his name. He popularized the idea that instead of mounting one big component that controls the entire client-side, you're gonna mount many individual components, and they each are encapsulating their own logic. That's what the islands approach is.

As far as the input delay, or the interactivity that's not there - how we've approached it on Elder.js is currently all components use an intersection observer. So on body load, it triggers an intersection observer that allows you to - you know, essentially, when you scroll into view, it mounts the component. Now, on Elder.js next what we do is we have a requestIdleCallback as the default, so now it's essentially going to -- whenever your browser's not doing anything, it's going to be hydrated. But you can override all of those features by just saying - hydration options is very clearly spelled out in the documentation... You can do it the moment the page is loaded, it can be preloaded... You can do all these different things. The assets can be preloaded. The JavaScript can be so it executes faster. In general, Svelte components mount pretty quickly, and if you're mounting very large Svelte components, what we're doing on FindEnergy - they need a lot of data; it can be a little bit slower if you're using that prop compression idea that I had suggested. In my experience, that can be like 36 milliseconds or something like that, on really major amounts of data; sometimes a bit higher on slower browsers, but in general, I haven't seen any input delay issues. And if you see them, please let me know, because I'd love to troubleshoot those.

**Jerod Santo:** \[43:49\] So a couple of other things as we're winding down here... But I think these are important. Production, installations and stability. So one thing that we're all aware of in the JavaScript space is how fast everything moves and changes. And one thing that caught my eye about Elder - you say it right there on the homepage - is that stability is a priority for you.

**Nick Reese:** Basically, I'm committed to funding or personally developing the site until 2023 or 2024. As long as I have sites that are in production that are running on it, it's going to be maintained. That's essentially the reality of it. Today I essentially run a -- you could call it a startup studio, where I make several different investments in different sites, and I have different projects that all run on Elder.js... And I don't see that ending any time soon, because some of these projects are starting to get substantial traction. As soon as the projects are self-sustaining, someone's gonna be hired to maintain Elder.js full-time. That's my goal.

We're seeing this iteration on our properties where - static site generation is great, but sometimes when you're dealing with content-heavy sites, you need real-time feedback, so server-side rendering is important. That is backwards-compatible. You can basically upgrade Elder.js to the latest. I try to keep so few breaking changes... The only thing that's changed is a couple hook interfaces, a couple entries where they've been added. There's been more permissions added to it. My goal is to keep it backwards-compatible so that I don't have my own upgrading issues. But as far as server-side rendering - I was able to fit that right in, without any breaking changes, and now you have an upgrade path to go right to server-side rendering if you need it.

**Jerod Santo:** So a stable API plus a committed team until 2023-2024 is kind of your plan; of course, you've got all these sites in production, so you're highly motivated to at least make sure it keeps building as the web changes. Tell us about some of the production installs, because this is one of the things where like - when the rubber hits the road, software that's used to build real things I think is more valuable than software that's supposed to be used to build real things... And a lot of our stuff - we hope it's adopted, we hope it's used, so we can tend to get somewhat... I think there's an old term, architecture astronaut. I don't know, you can tend to kind of develop things in a silo -- or not a silo, but in a vacuum, and they don't get used. But this has been used since day one, so I just wanna emphasize how much that actually matters with software. This is driving real-world sites, and you have - how many sites that are in production? Of course, ElderGuide.com, and you also just mentioned another one. Tell us about some of the installs, and maybe how many pages they have.

**Nick Reese:** There's five that I personally manage, and there's two that I talk about publicly. One is ElderGuide, another is FindEnergy. FindEnergy is kind of the latest and greatest. This is where we've been -- if you look at the Git history, there's been a flurry of activity; it's because we were shipping that, and that added a whole bunch of features and a whole bunch of plugins that site needed... And I had already done the work, so we might as well open source it.

Essentially, my business model, like I was saying, is find huge amounts of government data, make sense of it, and make tools for users to make informed decisions. Both of these businesses - ElderGuides traffic growth is going great. FindEnergy has just launched, so we'll see where it goes. I also have a couple others that I don't talk about, where the traffic growth is off the charts, which is pretty nice.

It's working... And I built it for my own needs, and I'm sharing it because I want to improve as a person, and I think it's interesting to give back to the community. For a long time I was the guy that was like "WordPress is free." And it's like "I got this. I can build sites for free." And I feel like I can go back and give back now in a way that I just couldn't before. So that's really important.

For me, on the different sites, it's like - having control of something and adding features based on my experience is really useful. Something we haven't touched base on is shortcodes. I think shortcodes -- I'm just very surprised they're not popularized in the JavaScript community. When you have static content, and you have a team that's managing static content, they don't wanna touch code, and you don't wanna have to interface with that team, you just wanna empower them. And shortcodes are a fantastic way to future-proof content. Instead of embedding a YouTube embed 50 different times, 50 different embeds, you just copy that off of YouTube, you can create one shortcode, and then when your content team needs to put out a video, they use that shortcode, and suddenly YouTube changes the embed code; you change it in one place. It future-proofs your content.

\[47:58\] For me, Elder.js is always going to have the things that we need to build flagship SEO sites... Because we need them. And I see no downside to open sourcing it, because SEO is a hard game. If other teams start adopting this framework - great. I hope they contribute to it. And to be 100% honest, one of the other driving factors for releasing Elder.js is hiring is really hard. Hiring talented developers is hard, and if you have people who are picking up a cutting edge framework and they're using Svelte, and they're kind of at the bleeding edge, you have passionate people. When I'm in the hiring seat, so to speak, it's a lot harder to see if someone's really passionate. But already, I'm hiring people out of the Svelte community because they are passionate; they're using Elder.js, they know Svelte... And I'm looking for people that have diverse backgrounds. One guy is amazing at huge datasets. Can he pick up Svelte and Elder.js? He picked it up super-fast.

So part of it for Elder.js - it's a way of hiring for me. It's also a way of casting that net, because hiring is expensive and hard. Finding good people is really what makes a difference in a business. So there's a lot of motivating factors for me to continue maintaining it.

**Amal Hussein:** Nick, I have a burning question that I can't believe we haven't asked yet... So why Svelte? And really, also given that you're a fan of moving fast - you know, working in a bleeding edge ecosystem has its perks, but also downsides, because you don't have as much of an ecosystem, so you can't just like use the table library as easily, and use the drag and drop library as easily, or whatever; so the composability ecosystem isn't as mature. So I'm just curious, why Svelte, and why did you put your money on Svelte, even given that it's bleeding edge? Then also I'm curious what's the productionization process like, and how has it been limiting or enabling? I'm curious to hear how you feel about that.

**Nick Reese:** Great question. On my end, I find that -- basically, I'd built a couple sites with Gatsby, so I was familiar with React... I felt like it was just massive overkill. I tried Vue, I had built a production app with Vue on BusinessInternet.com, and it was super-early days when I had done that. I've found its API a little hard to use, and so I was trying out Svelte on a vacation, as one does. I was like "There's this new library, let's see what this looks like." I went to the tutorials, and I was like "This just makes sense." You get basically the single-file components with interactivity that is super-easy to maintain and reason about; you get stores, so you don't have to deal with Redux or any of the other magic that needs to happen to keep things in sync... And yeah, it just seemed like it was an obvious choice.

So when I started building ElderGuide, I tried to use Sapper, which is now SvelteKit, and I found it was too hard to reason about what was running on the server and what was running on the client. That was the main catalyst -- well, that and the builds of like a 4,000, 5,000-page site when it was taking an incredible amount of time. And with Elder.js, I'm like "This has to be faster." And part of the problem is many of these static site generators, what they do is they spin up a headless browser and they crawl your site, like a bot would do. One of the key things that Elder.js did from the beginning was "We need you to define all of your requests upfront, unless you're using server-side rendering", and that allows us to have a superpower where we can build everything in parallel.

In some cases there was one user that was testing Elder.js against Hugo, and we were beating Hugo on like 10,000-page sites. So the JavaScript can be very fast if you're thinking about it and you have all the data upfront.

**Amal Hussein:** Yeah. Well, before you go on to that, to bring it full-circle - it really did help you move faster, the simplicity of Svelte. There's some wind there that was worth it for y'all, right?

**Nick Reese:** Definitely. A good example is that I've worked with the same HTML/CSS guy for years. He knows some JavaScript, and he picked up Vue... He's been someone that I've worked with for a long time, and I was like "Hey, try this out. Tell me what you think." He's like "I can do things that I never thought I could do." Giving people superpowers allows a small team to move much faster, and I think Svelte does that in a way that I didn't see in the Vue or React ecosystems.

\[52:08\] So yeah, you don't have the huge libraries, you don't have React Table or any of these other major libraries, but building a table interface is an hour work. It's not that hard to make your own reusable components. We haven't been limited by that at all. In a lot of ways -- we also probably ship a lot less JavaScript, because we write it all in-house.

**Jerod Santo:** Very cool. Well, we have to wrap here. Of course, listeners, all the links to all the things, ElderGuide and Elder.js, and any other links that Nick gives -- I'm sure he'll give us a bunch, because he's the SEO guy... So we'll link them up in the show notes for you guys to click through on.

Kbal, Amal, thanks so much for hanging out with us. I wanted to give a shout-out to a couple upcoming episodes. Kball's doing a cool interview about JavaScript on WASM. WASM will be back. We have a show with Feross, we're gonna dive into his Wormhole app, which is a really cool new project from Feross; we'll dive deep into that. And we also have Kent C. Dodds coming soon to JS Party, talking advanced React concepts. So that's just a few shows we have coming down the pipeline... So definitely subscribe if you haven't, and do come and join is live, each and every Thursday at 1 PM US Eastern time, hang out in the JS Party channel of our chat, and party with us y'all, because it's lots of fun as we record.

Nick, we really appreciate you coming on the show, we appreciate you kicking your impostor syndrome in the face... And open sourcing Elder and getting all the goods.

**Nick Reese:** Thanks for having me. It's been a blast.

**Outro**: \[53:35\]

**Kevin Ball:** I 100% talk to my code.

**Jerod Santo:** You talk TO your code?

**Kevin Ball:** Yeah. Especially debugging.

**Jerod Santo:** What do you say to it? Like, "Come on, code, you can do it."

**Kevin Ball:** "Ah-hah! I've found ya, ya stinkin' bug!"

**Jerod Santo:** \[laughs\] Well, that's talking to the bug. But do you talk to your code, like maybe in an encouraging fashion? Like, "Come on, little guy, you can do it!"

**Kevin Ball:** I'd be like "What are you doing?!"

**Jerod Santo:** "Just go ahead and finish that loop out! Come on!"

**Kevin Ball:** It's more like -- yeah, it's a dialogue. It's like "What exactly is going on here? What do you think you're doing? Okay, what you think you're doing is not what I think you're doing, so somewhere in here we have a mismatch."

**Jerod Santo:** Nice. How about you, Amal? Do you talk to your code?

**Amal Hussein:** I think talk is an understatement.

**Jerod Santo:** Hah! Okay...

**Break**: \[55:04\]

**Jerod Santo:** Break right here? Break. That was a great ending to the thing. You know how these things go...

**Amal Hussein:** Yeah, sorry I cursed.

**Jerod Santo:** You didn't curse. You said "asinine". That's a word.

**Amal Hussein:** Yeah, I don't know if "asinine" is like a curse or not, so...

**Jerod Santo:** \[laughs\]

**Amal Hussein:** I don't know what the FAA, or whatever... PAA regulations are. I don't know. Just kidding.

**Jerod Santo:** Aidan says it's the FCC that would be blocking us for the word "asinine", not the FAA.

**Amal Hussein:** Yeah, I know. I was just --

**Jerod Santo:** You can't say "asinine" on an airplane. Then the FAA comes after you.

**Amal Hussein:** It's hilarious, yeah.

**Jerod Santo:** By the way, Amal, you've made the soundboard. Are you ready? \[soundboard\] "Web lovers." So... There you go.

**Amal Hussein:** Oh. Love it.

**Jerod Santo:** Do you remember that?

**Amal Hussein:** Yes, I do.

**Jerod Santo:** We've been working on the soundboard and you're on there.

**Amal Hussein:** That's awesome.

**Jerod Santo:** Kball still hasn't gotten on the soundboard.

**Kevin Ball:** I think that's okay.

**Jerod Santo:** We're just waiting for Kball to say something stupid -- I mean, cool enough...

**Amal Hussein:** Stupid... \[laughs\]

**Kevin Ball:** I feel like every episode I have something stupid, so it's just what you wanna pick...

**Amal Hussein:** Is "Web lovers" stupid? \[laughs\]

**Jerod Santo:** No, it's awesome.

**Amal Hussein:** Web lovers...! Oh, yeah.

**Jerod Santo:** \[soundboard\] "You did not just say that." Alright, let's get back to the show.

**Amal Hussein:** \[laughs\] That's awesome.

**Jerod Santo:** \[soundboard\] "Ah-hah! I've found ya, ya stinkin' bug!"
