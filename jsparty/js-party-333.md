**Jerod Santo:** Hello, party animals. I'm Jerod, your internet friend, here with an emergency pod that's not really an emergency, but Nick declared it a state of emergency in order to continuously troll me... Nick, welcome to this emergency podcast.

**Nick Nisi:** Ahoy-hoy. Hi, Jerod.

**Jerod Santo:** How are you doing, man?

**Nick Nisi:** Fantastic, today.

**Jerod Santo:** You look happy, you look excited... There's TS emoji flying in our JS Party channel on Slack, so I feel like something's going on in the TS world... I'm not sure what that means, what it stands for, but - Kball's also here. What's up, Kball?

**Kevin Ball:** Hey. I'm excited to have a tech emergency, and not all the drama life emergency stuff that's been going on in the world the last couple weeks.

**Jerod Santo:** Yeah, it's been exciting times here in these United States, and probably all around the world...

**Kevin Ball:** Any of you crowdstruck?

**Jerod Santo:** I did not get crowdstruck. Nick, did you?

**Nick Nisi:** I was on vacation. I was on a boat and I didn't know that anything happened.

**Jerod Santo:** Did the boat reboot?

**Nick Nisi:** Nope.

**Jerod Santo:** Nice. Very, very nice. Well, we are not here to talk global IT outages, although we certainly could. We're here to talk about Node.js, because this is JSParty, and we're talking news... And the Node team's been making some moves, man. I mean, they've been doing stuff, and so we're here for it... And Nick is here for this first one, which is that they've added an experimental feature to strip TypeScript from the face of the Earth -- oh no, to strip TypeScript types from the code it runs. Honestly, I don't even know what that means. I'm not sure why everybody's freaking out in the channel, and saying we have to record a podcast about this... So Nick, please. Illuminate.

**Nick Nisi:** Yeah. So when you write TypeScript - fun fact, it's not really runnable, because there's no runtime that actually runs it. So any runtime that does converts it to JavaScript, which effectively just removes the types and then executes it. So the types are just there for your pleasure, as you're developing... But we use a bunch of third party tools, and now we get to use less third party tools, because Node can just do it natively. And that's what this flag does, which is --experimentalstriptypes. That will just strip the types, exactly what it says. It sounds exciting, but we've been able to do this for a long time, with either other tools, just running it through Vite, for example, or something else... Or just using a custom loader, like tsimp. It's effectively like the same. You just pass it a flag.

**Jerod Santo:** Tsimp.

**Nick Nisi:** Yeah.

**Jerod Santo:** I heard about that on your podcast with Josh Goldberg.

**Kevin Ball:** Now you don't need a build step, though.

**Nick Nisi:** Yeah.

**Jerod Santo:** Yes! Okay, now I'm getting excited, Kball. See, Kball knows how to speak my language. Nick, you do not. You only speak the language of TypeScript and other various Vim things.

**Nick Nisi:** I was just listening to your Adam Lisagor podcast, and I don't think that you explained what your love language is. So... Is it no build step? Is that your love language? \[laughter\]

**Jerod Santo:** My love language, it turns out, is English. That's my favorite. It's my best. It's my first, my last, and my everything. But I'm here for no build step. I'm also here for stripping TypeScript out of things. But if this is already available in a bunch of stuff... Like, people are genuinely excited about it; is it just because it's more official, it's more proper, it's less third party, and becoming more first party? Is that what the assignment's all about?

**Nick Nisi:** Yeah, I think that anytime that there's movement from the tool itself into this, it's going to -- this is an experimental flag for now. We'll see what it actually culminates into... But I think that this is probably -- you probably trace this feature back to just competition working; having other runtimes like Deno, like Bun, that more natively support TypeScript. They don't want to be left as the only ones, and TypeScript has pretty much won, so it should be supported in this way. The browser has plans, potentially, with the type -- what is it, type annotations?

**Jerod Santo:** Type annotations...

**Nick Nisi:** Yeah. So it's getting there.

**Jerod Santo:** Mm-hm. Kball? Additions, subtractions? Multiplications?

**Kevin Ball:** I mean, I was just admiring that masterful trolling by Nick, of "TypeScript has basically won."

**Jerod Santo:** \[laughs\] I did not engage with that sentence. I moved on.

**Kevin Ball:** I know. That's why I brought it back for you.

**Jerod Santo:** Thank you. I appreciate that.

**Kevin Ball:** No, I mean, honestly, I'm team build step. I mean, we know this from previoys pods. I think I'm more in favor of doing interesting things with the build than vanilla stripping TypeScript types out with a build. But if you're building already, does it really matter? So I'm not sure this is quite the emergency level that I would have flagged, but you know, once again...

**Jerod Santo:** Me neither.

**Nick Nisi:** Where's your sense of excitement...?!

**Jerod Santo:** See, we have to have reasons for people to tune in, Kball... \[laughs\]

**Kevin Ball:** But Jerod, actually, I have a way forward for you to do TypeScript, and not worry about TypeScript so much, which is LLM-based coding tools are the future. And you don't have to deal with TypeScript, you just tell the machine learning model "Write this in TypeScript", and then you're done.

**Jerod Santo:** \[06:10\] I could be convinced of that, perhaps. If I didn't have to touch any of the artifacts either... Like, if we got far enough away that I don't even effectively have to know that it's TypeScript, but it just works - and that's a big if; if it just works - then yeah, I'm here for it. I'm here for it. I'm happy to move higher up the value chain at all times. I don't think we're there yet, but I think we're getting there. Here's an experimental flag that I would like: --experimentalstripbugs. Would you guys be here for that, strip bugs? \[laughs\]

**Nick Nisi:** That's just called TypeScript.

**Jerod Santo:** I mean, why can't we have nice things, like strip bugs? Even better.

**Nick Nisi:** You just write it, and express what you're trying to do... You'll write less bugs.

**Jerod Santo:** Kyle in the chat says --fixsemicolons. I think we kind of have that at this point, don't we? Sort of... Kind of, sort of... Pretty much. Nick, let me ask you a serious question. Personal question. Real question. Have you been working this week?

**Nick Nisi:** I have.

**Jerod Santo:** Have you been writing code?

**Nick Nisi:** I have. I won't tell you what kind of code I've been writing, but I've been --

**Jerod Santo:** Have you been writing TypeScript?

**Nick Nisi:** Nope.

**Kevin Ball:** \[laughs\]

**Jerod Santo:** This ruins my line of questioning...

**Kevin Ball:** Hold on, hold on, hold on... Let me guess. Have you been writing PHP again?

**Nick Nisi:** Yes, actually.

**Jerod Santo:** Via a comment form on your website? \[laughter\] Okay, so that ruins my line of questioning. Well, how about last week? Did you write some TypeScript last week? I'm trying to really bring this home.

**Nick Nisi:** No...

**Jerod Santo:** Alright, let's move on.

**Nick Nisi:** I probably write less TypeScript than even you, Jerod, now.

**Jerod Santo:** Really? Because I'm batting zero over here.

**Nick Nisi:** Me too.

**Jerod Santo:** Okay. So we're just merely playing the parts now at this point. Kball, we're shadows of our old selves... Although I'm not. I'm representing exactly my side. I do not write TypeScript, and I don't write TypeScript. So I guess, Nick, you're the --

**Nick Nisi:** I still like TypeScript. I would rather be writing TypeScript, but...

**Jerod Santo:** Oh, you should get one of those bumper stickers that says that... Like those "I'd rather be fishing" bumper stickers, or something. "I'd rather be TypeScripting."

**Nick Nisi:** Yes. That'd be a good laptop sticker.

**Jerod Santo:** How about SQLite? Do you guys like SQLite?

**Kevin Ball:** Absolutely. Underrated.

**Jerod Santo:** Yeah. This one's cool. So they've also been working on another experimental flag. This has been merged, it's out there on the nightlies, but not released yet in Node. Built in SQLite module. So... Batteries included. Database right there. Bam.

**Kevin Ball:** Do they bundle SQLite, or this is just the interface?

**Jerod Santo:** That I do not know. Let me see if I can get that answer quickly, via a quick look at the actual files changed.

**Nick Nisi:** BenGL in the chat is saying that it is bundled.

**Jerod Santo:** That's even faster.

**Kevin Ball:** That is super-cool if they're bundling it, because that really then lowers the barrier to writing simple, persistence-related, relational code. And unlike the build step/no build step - we're all doing a build step anyway - this is talking about like deployment hack. Do I have to deal with figuring out where I'm deploying it to? Do I have to install SQLite on my Mac and not have it break? I don't know. I mean, actually, SQLite is pretty simple regardless, because it's just a binary. But...

**Jerod Santo:** It's simple, and it's pre-installed in almost every operating system in the world. But still...

**Kevin Ball:** So never mind. I'm not sure where this gets us, except you can not have to do that step.

**Jerod Santo:** Sure. And it also is the API as well, right? So you do not have to go out and grab whatever the Node SQLite library, whatever, whatever.

**Kevin Ball:** So there's a bigger actual question here, which is sort of philosophical, around the extent to -- like, what should live in a core, versus what should be actual libraries?

**Jerod Santo:** That's kind of what I was thinking as well. Yeah, good point.

**Kevin Ball:** Like, we're going into this --

**Jerod Santo:** Boundaries. You're defining boundaries, Kball. Remember, I want you to do an episode on this.

**Kevin Ball:** \[10:08\] Yes. And I think it's an art more than a science. JavaScript land has historically defined lots of many small modules, which is way on the end of one spectrum, where you're saying essentially like there's no standard library, or there's a minimal standard library; everything is your choice, everything you have to configure. That's a lot of cognitive load.

On the flip side, you put everything in there, in the core... Like, it slows things down, it's hard to innovate; if they get it wrong, it's a mess... And if I'm using this, I can't necessarily just say "Okay, I've been prototyping with SQLite, now I'm gonna swap in Postgres and it all works fine, because I have an abstraction between my database and the data manipulation", or whatever I'm doing. Instead, now I've got to rip out SQLite and do other different things with it.

**Jerod Santo:** I mean, you could code that way anyways, if you were forward-looking.

**Kevin Ball:** You could.

**Jerod Santo:** How many times have you ripped the database out though, honestly? Out of an app. Either mid-dev or mid-prod. \[laughs\] Mid-flight.

**Kevin Ball:** It's actually not that uncommon to use SQLite for development, and then just swap into something like Postgres or something like that for...

**Jerod Santo:** I think that's cool when you're cowboy-coding. I think that over time that bites you in ways. I've definitely been bit. Even just going --

**Kevin Ball:** Well, no, totally. I mean, once you actually get to the point where you're deploying, you're going to swap your local to be Postgres too, so that you're not --

**Jerod Santo:** Yeah, you want to be as close as possible to production as you can, I think.

**Kevin Ball:** But when you're rapid-prototyping your first initial stuff, you might do it in SQLite, because it's super-simple. You don't have to deploy a database or deal with all of that. So that's gotten easier, too.

**Jerod Santo:** Right.

**Kevin Ball:** And then at some point, you want to swap it out.

**Jerod Santo:** Well, there are people now that are really putting SQLite into production in ways that used to be frowned upon, and there's certainly places - as a warning, there are places where SQLite will not do well in production. Write-heavy web applications, I just don't think that's a place for that. But there's lots of places where it can do just fine, especially at small scales, which most of our websites/businesses are. And so people are really starting to take this seriously, and maybe never swap it out. Maybe that's just your production database, too. Who knows? It depends on the use case.

**Jerod Santo:** I think this is good for Node though. I do think it's difficult to define the boundaries, and I saw this and I thought "Great idea. Executed well. Looks good. Ship it." I mean, Node is better with a built-in embedded database in there, for sure.

**Kevin Ball:** To your point, a lot of the uses for using it in production are you're shipping like Electron apps, or you're shipping little desktop apps, or things like that. And if I don't have to worry about bundling it myself because Node already does that for me, that is one headache removed.

**Jerod Santo:** Yeah. One of the people in the comments of the PR for this actually made that exact point, that they really struggle with their Electron app, because the SQLite adapter with Electron, the third party thing is flaky, and it disconnects a lot, and blah, blah, blah... And having this built into Node just makes their life easier. So I think that's a very good point.

**Kevin Ball:** JavaScript. It's not just for the web anymore. Node times 5,000. They keep saying that.

**Jerod Santo:** \[laughs\]

**Nick Nisi:** Is this comparable to... Like, I know that Deno shipped a key-value store as part of their core. Would this be a comparable thing, but more open? I haven't used the Deno KV at all.

**Jerod Santo:** Neither have I. I know what a key-value store is, so I can comment on comparing that to SQLite... I don't know if they have like way more functionality than a typical key-value store, but if they don't, and it's passing a key, maybe you can do some indexes if you're forward-looking, but not real relational tables, and ACID, and blah, blah, blah. It's just like key-value, key-value. If that's what Deno's deal is, this is dramatically more functional as a data store.

**Nick Nisi:** Sure.

**Kevin Ball:** They're also not trying to charge you for it.

**Nick Nisi:** Yeah.

**Jerod Santo:** Fair.

**Nick Nisi:** \[14:00\] That's just like the comparison that came to my mind, with inspiration for this, potentially. Like, I don't know where it came from or anything, but that's...

**Jerod Santo:** Right.

**Nick Nisi:** ...with like the TypeScript thing in the previous segment, Deno and Bun both support that. Just, I'm probably drawing correlations where they don't exist.

**Jerod Santo:** Hm. You think Node's playing catch-up on all fronts, perhaps?

**Nick Nisi:** I think it's exciting to see a lot of new features coming like this.

**Jerod Santo:** Well, Node is not the only one getting new features.

**Nick Nisi:** Well, wait, I have a last-minute add there. I don't know if you saw that...

**Jerod Santo:** Oh, okay. I didn't see it.

**Nick Nisi:** \[unintelligible 00:14:35.08\] My mouse just died.

**Jerod Santo:** You use a mouse?

**Nick Nisi:** Well, now I use a trackpad. \[laughter\] Yeah, I wanted to sneak this in, too. I saw it from a tweet. I think it was Matt Pocock on Twitter, talking about styled text. Have you seen this?

**Jerod Santo:** What's Twitter?

**Nick Nisi:** I won't call it the other thing.

**Jerod Santo:** \[laughs\] No, I haven't seen styled text. What is this?

**Nick Nisi:** Have you ever used Chalk before, or some way to create command line applications with colored text in the browser -- or in the terminal?

**Jerod Santo:** You threw me for a loop in the browser, but when you went back to the terminal, I was with you. I have not, but I have seen them, and I used them, and they're beautiful.

**Nick Nisi:** Well, it looks like as of Node 20 dot something, dot 10, that now exists.

**Jerod Santo:** It's in there?

**Nick Nisi:** It's just built-in. Now you can just say styled text, and you can say styled text red, and then give it a string to print out, and it'll print it out in red color.

**Jerod Santo:** Okay... So here we go, again, Kball, bringing more stuff into Node core... Things that were previously libraries. But maybe they are just generally useful for anybody making command line apps. I don't know.

**Nick Nisi:** Now with no extra dependencies, you can build a command line app that stores all of its config into an SQLite database, and you write it in TypeScript, and you have no third-party dependencies.

**Jerod Santo:** I thought you were going to say "no bugs", and I was about to go back to our previous conversation.

**Nick Nisi:** And no bugs! \[laughter\]

**Kevin Ball:** You can have one of those configurations be "What color do you want the outputs to be?"

**Jerod Santo:** Yeah.

**Kevin Ball:** I mean, I don't know... I feel like the danger, as always, is you get to a place where it's like bloated, and it's too much disk, or it stores things down to the cognitive load of keeping in mind it's too high... These things are like opt-in, in a lot of ways. Like, I don't think the cognitive load piece is a huge problem. You have that one way or another. We're installing Node... I don't think it's causing any -- I don't see any major problems here. It is just like that's the path that things travel, right? We see this with software all the time. They start out very slim, and have core functionality, and then they add more, and they're doing this for this power user, and that for that power user, and at some point you have Adobe products and you're like "What the heck do I do with this? There's 20 million options, I know how to use three of them, and yet I can't get rid of the rest of them from my screen." That's not really as big of an issue for --

**Jerod Santo:** I thought you were talking about Git for a second there. \[laughs\]

**Kevin Ball:** But that is the trajectory. And then a competitor comes along and does a simple version again. And we'll probably see that. But yeah, it definitely feels like JavaScript land - we are currently in a consolidation of bringing more things into core... And the same thing's happening in the language, which - maybe you wanted to move into that area.

**Jerod Santo:** I did. But Nick snuck in some styled text on me.

**Nick Nisi:** Oh, \[unintelligible 00:17:26.17\] No, I'm kidding. I don't have anything else.

**Jerod Santo:** \[17:30\] I just think it's interesting. I think it's cool. At a certain point you just wonder how much stuff can you shove in a box, you know? But this is what happens with mature ecosystems. You wouldn't want this when Chalk just first came out. It's like, all of a sudden it's in Node core. Because things in the core are going to move slower, they're not going to have as much iteration... I mean, this is what happens when Apple sherlocks things, right? Like, Apple has sherlocked x. No, not the platform, but the variable x. And everyone that loved x is mad, and then they realize "Oh, Apple's doing an 80% version of what this is." It's never going to actually reach parity. They don't even want to. They want to provide kind of a baseline feature set that that thing provides... And there's a place in the world for it. But once it gets mature and there's not much change in -- I mean, SQLite's a good example. It's like lower risk. Anyways, moving on... Moving on to the language. What's new for JavaScript devs in ECMAScript 2024? This is a nice write-up from Mary Branscombe at The New Stack, all about new features in JavaScript itself. Most notably to me, what's not in there? See how I'm always discontented? I'm like "Here's the first thing. What's not in 24?" which is Temporal and decorators. The big ones.

**Kevin Ball:** I want Temporal. Time still continues to suck. When is it going to be in there?

**Jerod Santo:** Right? I mean, I felt like -- when was it that we asked Jordan Harband when Temporal was going to land? And he said "Soon." \[laughs\] It was a long time ago. It was long enough ago I can't remember. I think it's feature-complete, but there's just things in the way, things that only, I think, ECMAScript insiders and those people understand. Maybe it's drama and politics... I don't know what it is. Maybe it's certain browsers not doing things... But yeah. 2025 for those things. But let's not poo-poo the effort that has gone in.

So there is some cool stuff that's new. Promise.withResolvers, which is something that's fixing a pain point for a lot of people, which is basically having to do this small little wrapper around their promises, according to Daniel Ehrenberg, who's been on the podcast. I think he's an ECMA vice president. He's definitely instrumental to pushing the language forward. What he says about this - he says "Previously, when you created a promise, the ways that you resolve it and you give it its final state where the API is only accessible inside the function that you built it with." But with this new static method called Promise.withResolvers, it gives you a way to create a promise, and it gives you direct access to those resolution functions... This is going to remove a lot of boilerplate for a lot of people. Nick, you're nodding along. Is this something that's going to cause a little bit of happiness in your life?

**Nick Nisi:** A little bit... I'm mostly excited because I get to say a classic line from the early days of this podcast, which is "Dojo already did that."

**Jerod Santo:** Oh...! Classic. \[laughs\] Didn't jQuery do this as well?

**Nick Nisi:** Yeah, I think so.

**Jerod Santo:** Yeah, it's not exactly new, but it's new to the language. And when broadly available, it will let people remove some of their little shim code, wrapper code.

**Nick Nisi:** I can't think of the last time I had to do this, but I have had to in the past create a new promise, and then inside of that callback assign the reject and resolve to variables that I declared outside of the callback...

**Jerod Santo:** Yeah, exactly. You're basically doing closure manipulation in order to keep things in scope... And at that point, I just turn over to the LLM. I'm like "Can you write this real quick?" Why is this null right here, or undefined, or whatever, when it's not supposed to be? Oh, because you didn't do your closure correctly, blah, blah, blah.

**Kevin Ball:** Well, and this sort of topic of dealing better with asynchronicity and data loads is one of the areas that I think... So at a conference earlier this summer there was a roundtable conversation with Q&A that had both one of the folks really up in Angular, and then it had Ryan Carniato... So a lot of sharp front-end people, and I asked them, "What are the big unresolved problems?" It seems like there's a lot of consensus moving towards signals, and doing these other things, but what is still out there? And this was a thing that was raised, is like dealing with asynchronicity well is something that all the frameworks are sort of looking at. React took a stab at this with suspend, and what are they doing there... Angular has all that complexity with the baked-in - whatchamacallit... What is their observables framework that they use?

**Nick Nisi:** \[22:18\] Rx?

**Kevin Ball:** Yeah, RxJS. You're right. It was Rx. So that's like the big hammer in this space right now... And so this just in some ways feels like it's fitting into that queue of we just need better tooling for dealing with things that are asynchronous and outstanding, and how do you handle them in different ways, and being able to manipulate your resolvers, as for example maybe a different promise resolved, and so now the promise that you had for this outstanding one, it needs to do something slightly different, or other things. That is the tooling that we need to be able to deal with multiple layers of asynchronicity.

**Jerod Santo:** Yup, agreed. Also new, array grouping. Array grouping. Groupby, perhaps, that's the name of it. What's the exact function name here?

**Nick Nisi:** Groupby. Object.groupby.

**Jerod Santo:** It is groupby. I thought that's what it should be.

**Kevin Ball:** Okay. So something that those of us who've been writing Ruby or other languages are pretty familiar with.

**Jerod Santo:** Yeah. Well, I was just going to say, normally you would pull this in with Lodash, or something. I'm sure Lodash has a groupby. Sometimes function names are slightly different, and super-useful. Needed all the time. This is basically where you have a list or an array of things, and you want to split them into multiple groups based on some property about them, or their ability to pass or fail a function, etc. And it's not groundbreaking stuff, but again, it's just taking things that everybody needs, and probably at this point still uses Lodash for, and throwing it right in there so you don't have to pull it in that particular function.

Now, there is a new -- have you guys heard of this? There's a new competitor enters the chat. A Lodash alike. I'm looking it up now... I've covered it in Changelog News recently... And it was new to me; so maybe I'll say it's new and Nick will be like "I've been using this forever." ESToolkit. Are you guys familiar with ESToolkit?

**Nick Nisi:** I do remember it from Changelog News...

**Jerod Santo:** Yeah... So I obviously haven't used it, and you haven't used it, but this is pretty new. It's a state-of-the-art high-performance JavaScript utility library with a small bundle size and strong type annotations. That's where Nick started really perking up, when I said that. And it's cool because it has built-in tree-shaking support, which means if you just need that one groupby function, it's going to shake out everything else. And bundles down 97% further than Lodash, according to the author... Now, I haven't done any fact-checking on this. We'll take their word for it. And built-in TypeScript support. So... Pretty cool. If you're still using Lodash, I think it's probably worth a look. It's just maybe a more -- I won't say modern, because everybody does, but I'll say a more recent addition to that particular utility library. Remember, it all started with underscore. Nick, do you remember \_js?

**Nick Nisi:** I sure do. I was in the Backbone world once...

**Jerod Santo:** Yeah, man. Backbone and CoffeeScript author, Jeremy Ashkenas, created underscore. No?

**Nick Nisi:** I was never into CoffeeScript...

**Jerod Santo:** \[laughs\] It's weird that you hated CoffeeScript so much, but you love TypeScript so much. I mean, there's a lot of similarity. And I was the opposite, because I wasn't on -- see, I already had a build step when CoffeeScript came around. And you know how I like build steps, Kball...

**Kevin Ball:** CoffeeScript lost me at the lack of a ternary.

**Jerod Santo:** Oh, you're a ternary guy? Wow... You lost me, Kball, when you just said that.

**Kevin Ball:** No, so coming back to ESToolkit... I think there's actually something interesting here from a branding perspective. So they say built-in TypeScript types. The whole thing is built in TypeScript. Why is this not TS Toolkit?

**Jerod Santo:** Ooh... I don't know. \[laughs\]

**Kevin Ball:** I'm going to pause it so that Jerod will use it and shout it out on Changelog.

**Jerod Santo:** \[25:54\] Oh, that would be like metagame. That would be super-smart. Nick, what do you think?

**Nick Nisi:** The same reason that it's not TSLint anymore. It supports all ECMAScript variants.

**Jerod Santo:** I see. So they're trying to--

**Nick Nisi:** ...meaning JavaScript and TypeScript. Probably not ActionScript, or anything like that.

**Jerod Santo:** Or CoffeeScript, most likely.

**Kevin Ball:** But don't all TypeScript...? It all compiles down to JavaScript, so it all supports all forms of ECMAScript.

**Nick Nisi:** Yeah, I don't know. I already thought that Lodash was highly tree-shakable, so I don't know. I haven't used Lodash probably since the Backbone days, since the Underscore days.

**Jerod Santo:** How do you get your groupby on, Nick? How do you get your groupby on? Is that in TypeScript?

**Nick Nisi:** No. And you're not going to like this answer, but I just write my own. \[laughs\]

**Jerod Santo:** Well, I actually don't mind that at all. I've got no problem. I mean, if you have map and reduce, you can pretty much write all the other ones... Which is what Lodash is.

**Nick Nisi:** Exactly. Yeah.

**Jerod Santo:** I mean, it's just a series of map reduces in order to provide nice wrapper functions that are more directly doing that thing that you know that they do: filtering, rejecting, blah, blah, blah. Grouping... I've got no problem with you writing your own.

**Nick Nisi:** Writing these two is the number one place to level up your type game for TypeScript, because --

**Jerod Santo:** Now you're right. Now I don't like it as much. \[laughter\]

**Nick Nisi:** Because you're writing like these mapped types and conditional types that are all globbed together to give you the exact output that you would expect, but only in types.

**Jerod Santo:** How many lines of code is the Nick Nisi groupby?

**Nick Nisi:** It's probably exactly what you said, like a map and a reduce, a couple of lines of that, and then probably triple the lines for the type annotations.

**Jerod Santo:** Exactly. I'll never use that. Despicable.

**Nick Nisi:** It's amazing though... \[laughter\]

**Jerod Santo:** Well, I will just use the built-in groupby, thank you very much. Now that we have array grouping in JavaScript, which is what we're all here to party about. There's also some more stuff that's smaller, that I did not write down... But we will link up to Mary's entire New Stack article for people who want to get the full rundown... Because there's much more coming, or that came in '24. And stay tuned, y'all, because Temporal is 2025. You know, it's just right around the corner.

**Nick Nisi:** Is there anything beyond Temporal and decorators that you're excited for, that's been promised forever?

**Jerod Santo:** Me? Type annotations.

**Nick Nisi:** Yeah?

**Jerod Santo:** I don't know, sort of. Not that I'll necessarily use them, but I'll be happy that they're there, for people who need that kind of thing. \[laughs\]

**Nick Nisi:** Yeah.

**Jerod Santo:** I don't know. I can't think of anything off the top of my head, but I'm also not looking at a list of like things coming down the pipeline. So if you could give me a few examples, I would say excited/not excited.

**Nick Nisi:** There's one for me that I can think of off the top of my head that I've been wanting forever, and it's not life-changing or anything, but it would just be fun, and it would be new, and it would solve the problem that it solves better than the way I currently do it, and that's the pipeline operator.

**Jerod Santo:** Oh, yeah.

**Kevin Ball:** Oh, yes, please.

**Jerod Santo:** I like pipelines. I live in Elixir land on the server side, and we use pipelines all the time, and I would love to use them in the browser as well.

**Kevin Ball:** Absolutely.

**Jerod Santo:** Yeah. I was curious why is ESToolkit so much more tree-shakeable or bundling down smaller... And it turns out that they are essentially flattening the logic out for a lot of their things. So like if you look at Lodash implementation of once as a thing, it uses once, it imports before, and then uses the special case - because once is a special case of before - and it has that all over the place, where it's like, they're basically composing their functions out of their own functions, which is like the functionally pure way to do it; it makes sense. But ESToolkit is implementing each one just flat, so it doesn't have any dependencies, so that if you import once, you don't import once and then before, and then anything before is doing; you're just importing once, which is this ( looks like) 18-line function.

**Jerod Santo:** Yeah, that's actually pretty smart. I like that. Thanks for looking that up. That's interesting. They've basically done what Nick did with groupby, only with all of them, and... There you go.

**Kevin Ball:** \[30:04\] Well, and that kind of makes sense if you're a utilities library author. You can take the time to do that extra work, and it makes your library so much more independently usable in that way. I do wonder, if you start using a larger amount of the functions in your code, if you -- this is, once again, the classic "Do you have a runtime-ish thing that is shared, or is everything flattened and independent?" At what point is the crossover where it's actually more expensive because you're shipping a lot of duplicated logic? But I would bet most codebases, especially as we move into this - we split things, we only load what's necessary for each particular things... They're going to benefit from that flattened approach.

**Nick Nisi:** And there's plenty of environments that I've been in where it's just -- you have to play politics to get new dependencies in, or we just don't want to ship new third party code in. And if it's like that, where it's just like "There's this standalone thing", I mean, at that point you can just copy and paste from it, which is fantastic. And it's also just way, way easier to learn from that. Like "How is groupby actually created? How would you do that?" If you're like "Oh, it's calling this utility, that's calling this utility", and you have to go up this stack, then you lose the thread on that a little bit. So...

**Jerod Santo:** I literally remember doing that with Lodash years ago, because I used it all the time, I appreciated it, and I just wanted to see -- I think at one point I wanted just one function, and I was like "I'm just gonna copy-paste that function into my codebase", because I'm not above that. I will definitely do that when it seems like it's smarter. And I went and I'm like "Oh, I can't actually do that, because I'm also going to need this other one." And then I followed that one, and I'm like "Oh, there's a call stack here, and they're calling all their own functions." And it's kind of hard -- as an outsider, it's kind of hard for me to reason about. it also ruined my plan of just copy-pasting the single function... But it did look really nice and thought through, and so I was impressed by the engineering... But ultimately, I think probably simple would have served me better in that particular case.

**Kevin Ball:** ESToolkit. There you go. Still written in TypeScript, as is Lodash, as I discovered when I started digging into this... Because I think as Nick highlighted, TypeScript may have won.

**Nick Nisi:** It's won! It's won!

**Jerod Santo:** What did it win? Tell us what it won, Nick,

**Nick Nisi:** Our hearts, and our minds... \[laughter\]

**Jerod Santo:** Creepy... Okay --

**Nick Nisi:** You say that now.

**Jerod Santo:** When am I gonna stop saying it?

**Nick Nisi:** Apparently, when type annotations ship.

**Jerod Santo:** Yeah, probably. Well, then we can stop talking about TypeScript, right? We're like "Hey, it's just -- now, it's won." I'll probably give up at that point, and say "You know what? It won."

**Nick Nisi:** You'll probably be retired. We probably all will be by the time that ships.

**Jerod Santo:** Probably. Probably before Temporal comes out, it sounds like... We might even be hanging them up, too. Okay, no dissing on the Temporal folks. We love the effort being put in. We're ready for it. We're here for it. Kball, state of React.

**Kevin Ball:** Yeah.

**Jerod Santo:** 2023.

**Kevin Ball:** So 2023 survey, which was published five days ago as of when we're recording it...

**Jerod Santo:** Oh, so last year's survey is out now.

**Kevin Ball:** Last year's survey is out as of July 20th, 2024.

**Jerod Santo:** Gotcha. Okay. What's interesting here?

**Kevin Ball:** Interesting to me looking through was like looking at stuff like what are the pain points people are feeling... So there was sections on like main API pain points, where some of the biggest pain points I see are the forward ref memos, and the context API... Memoization - apparently, if you follow the rules, you can use React compiler now. You don't need to worry about it. So that's hopefully one pain point they're actually getting rid of, but we'll see. They also have some new API pain points. Lots of people complaining about React Server Components... Interestingly, number three on the "new APIs pain points" around React is Next.js issues. So it's more indication of the extent to which Next.js and React are becoming sort of entangled with one another.

\[34:02\] There is a place where you can sort of see what frameworks people are using, and there I think it was -- the one that's still the most known was Create React App. It's not gone away, but lots of people don't like it anymore. They're pretty unhappy with it. After that was Next. It is sort of the most -- most people have tried it, and it actually has reasonably positive sentiment. 46% of people said they liked it, 44% felt neutral about it, and just under 10% ish were unhappy, if I'm reading that... Which is confusing to me, because they have multiple numbers on the same -- I'm having trouble with their graphs, but... A relatively large percent of people like it, a lot of people felt neutral, and then just a few people didn't like it. Gatsby's still on there, nobody likes it... Astro and Remix are moving. And then Redwood is also in there, but also nobody likes it.

Let's see, other things of interest... I mean, I noticed that Syntax is still more popular than we are, but we're coming in number two again, so it's all good... Syntax, man...!

**Jerod Santo:** We need to have a Syntax flipping party. Like, how are we gonna flip in those guys, you know?

**Nick Nisi:** At least we're beating the Changelog. \[laughter\]

**Jerod Santo:** That would be embarrassing, wouldn't it? If we couldn't beat them... We're not even close, though. We're at 7%, and Syntax is at 16%. They've more than doubled our respondents. But this was last year. I mean, maybe we already flipped them and we don't even know yet.

**Kevin Ball:** They're pretty good, gotta say.

**Jerod Santo:** I know.

**Kevin Ball:** Credit where credit's due. They're awesome.

**Jerod Santo:** I've got no problem with those guys. I just like to complain. But I think they've deserved all their success, and I'm happy for them. I just want to deserve equal amounts, and then maybe more than they have. \[laughs\]

**Kevin Ball:** Gotta recruit them. Didn't they get bought out or something, too?

**Jerod Santo:** Yes, they are wholly owned by Sentry now.

**Nick Nisi:** What's amazing to me in just that podcast section is this is only 28% of respondents. There's 72% that listed None for their podcast consumption. We've got a big market to tap.

**Jerod Santo:** I was gonna say, that could be how we catch up, is we go after the 70-something percent. All we've gotta do is ask Sascha for the email addresses. Bam. Just kidding, guys... We would never do that. Unless, you've got the email address, let me know. Still kidding. Anything else, Kball?

**Kevin Ball:** Those were the things that stood out to me. Let's see... I don't know, Nick or Jerod, did either of you get a chance to look through anything else that stood out to you?

**Nick Nisi:** I was just happy to see some of my picks actually show up on the list of things. For example, XState has about 10% usage, with most of it being favorable, it looks like... But it made it on the list. That's pretty cool. And then I do think it's interesting, just the whole -- I don't know if controversy is the right word, but the world around React and Next, and how -- I don't know, it doesn't seem like there's positive news out of that relationship.

**Jerod Santo:** I would tend to agree. Negative sentiment would be what my analysis is. If you fed me all of the public talk, and asked me to have my neural network determine if it's positive or negative sentiment, I would say negative sentiment. This is interesting... So at the end, Josh Comeau, who I think's been on the show before, definitely has been on the Changelog - the third best React podcast out there - has a conclusion that he wrote at the end of this... So I think probably Sascha asked him to write this, and this is interesting... He says that he thinks that this year has been the most interesting year, the biggest year for React since 2018, when React hooks were first introduced. He goes on and at the end he's talking about React Server Components, and he says "If I had to guess, I'd say that in 2028 there will be two Reacts in wide circulation, with roughly equivalent usage. The 'full stack' version with server components and server actions, and the client-only single page app version." I wonder your guys's reaction to that particular prediction from Josh Comeau.

**Kevin Ball:** \[38:21\] So it's interesting that he would say that... And it makes me wonder, would those both be called React? Or is what happens - React continues down this full stack direction which they've very much been going, and some other competitor says... I mean, this is the dynamics we were talking about before; they're incorporating more and more into React core, and at some point it's enough that the complexity starts to really bother people, which if you look at the pain points, excessive complexity was like the top React pain point in the question at the end that's "Are there any other React pain points you'd like to mention?" They say "Excessive complexity." That's the incorporation of all of these different pieces coming in. And at some point there's room for a simple take of a competitor to actually rise up and eat up a bunch of those. And I think that might become that second "React", except maybe it's not called React. Maybe it's called Vue, or Qwik, or Astro. Astro is weird, because they actually do something different. But maybe it's one of these competitive frameworks that says "You know what? We don't need all that complexity. We'll handle one use case, which is client-side applications, and we will do it really well."

**Nick Nisi:** Yeah. Maybe one would be from the before times, before they started going into this. So it'd be the pre-times. They could call it something like Preact, or something... I don't know, I think that --

**Kevin Ball:** Dojo revival!

**Jerod Santo:** I was gonna say, Backbone 3.0.

**Nick Nisi:** Do you think that server-side rendering is fad, and we'll just eventually revert back to SPAs?

**Kevin Ball:** So I remember when I was first looking at the tech industry back in early 2000s, and I did an internship at Sun Microsystems, and they had this thing where they were experimenting with thin clients, because they had all their stuff on the server... And that was a new -- and maybe they were going back because before they'd had these fat clients. We've been in this server, client, server, client, server, client, what happens in the server, what happens in the client - that cycle has happened four times now, across the industry, going back pre web, back to... All these different things. So will we have that cycle again? I mean, if past performance is the best predictor of future performance, I would say yes, we'll see that again.

**Jerod Santo:** Have we gotten to the other side of the pendulum yet? I think we're still swinging away. I think we have to get to a point, and then we swing back. I feel like we're swinging away at this point from, from SPAs.

**Kevin Ball:** I think that's true. I think right now we are swinging towards doing a lot more on the server again.

**Jerod Santo:** Yeah.

**Nick Nisi:** But there's a lot of friction in that path right now. It's slowing that, or reversing that. I was heavily looking into --

**Jerod Santo:** With React in particular, I guess, maybe.

**Nick Nisi:** Yeah, for sure. I was looking heavily into Next, and all of the friction that I ran into, I was just like "You know what? I know I can ship a SPA, so let's do that."

**Jerod Santo:** How'd it go?

**Nick Nisi:** Then I woke up and had to go to real work.

**Jerod Santo:** \[laughs\] You didn't actually ship anything. Sounds about right. Checks out. But you should see the types in that sucker. He's got beautiful types.

**Nick Nisi:** Oh, just beautiful. \[laughter\] I want to jump into a different tangent...

**Jerod Santo:** Sure.

**Nick Nisi:** What's one word that comes to mind with React? If you think of what type of library or framework React is, what's the first word that comes to mind?

**Kevin Ball:** When you say "What type of framework?" I go back to it's a Vue library.

**Nick Nisi:** Okay, yeah.

**Jerod Santo:** \[42:00\] That's two words.

**Kevin Ball:** Vue...

**Jerod Santo:** I would say client.

**Kevin Ball:** With an IE. Not the UE.

**Nick Nisi:** Yeah, I think you're in the same ballpark. I was gonna say a component library.

**Jerod Santo:** Okay. Component. Yeah, sure.

**Nick Nisi:** It's components views. You're creating UIs for it. And there is a component pain points section of this. So that's effectively what the whole thing is. And if you take the top four things that are listed there, which accounts for 51% of the problems, the top pain points, it's all about CSS. And so CSS is definitely a big problem, not just in React, but in all component frameworks, I think, at this point. And I wonder what the solution for that is. If you asked me, and I hadn't seen this, I would say Tailwind... But Tailwind is listed as number two, with Tailwind issues, and I don't see how Tailwind's an issue. But...

**Kevin Ball:** Do note that only 3% of the survey respondents replied to this question.

**Nick Nisi:** Oh, I didn't click on --

**Jerod Santo:** It may be over-indexing on that. But interesting point... I just feel like we've found either our \[unintelligible 00:43:07.04\] or our title for the episode. "CSS is a big problem. Nick Nisi." That's just -- that's the quote. \[laughs\] And then in parentheses, "And I hate it." You know, something like that.

**Nick Nisi:** I'm fine with this.

**Jerod Santo:** \[laughs\] Yeah, that's an interesting thought...

**Kevin Ball:** There's another angle into all of this, like what does the application system of the future look like, is maybe we're going to have all of our UIs be generated. Have you all played with websim.ai at all?

**Jerod Santo:** No.

**Kevin Ball:** Oh, so much fun. Go to websim.ai. It gives you this little fake browser. You put in a URL that you think should exist in the world, and it will generate it for you on the fly. You can pass in parameters, query params, URL params, and it will tune it. You can actually use that to point it to external resources. I saw a guy who set up a little WebSocket server, and then created a websim page that referenced that in a param that was a chat, and you could actually get multiplayer on this, through his external resource he set up. It's banana pants, and it's literally just a big prompt sent over to Claude Opus that says "Dream with me. Create a website based on this." And it will. And that's an extreme version, but I do think there's a world in which you have stuff like -- you've got a component library, maybe it's a movie, maybe it's something like this, and your backend is an LLM of some sort, that references some coded tool calls, but that's weaving it all together and it says "Pick which elements are useful to display this, and throw them on the screen." And is that a thin client? I think it's a thin client. I think that's like stuff's happening on the server. But maybe it's streaming out that HTML and CSS from the server. That's what websim is doing. It's streaming that stuff straight from the LLM. And it seems to pretty much work. It's not reliable, it's a toy... But is that the way we're going? I don't know.

**Jerod Santo:** Well, I think unreliable and toys are definitely the way that we're going right now. \[laughs\]

**Kevin Ball:** An appropriate conclusion to a TypeScript episode...

**Nick Nisi:** Yeah, I wasn't sold until it did generate a TypeScript fan page by Jerod Santo from the Changelog about why he loves TypeScript... So yeah, I can see the appeal of this.

**Jerod Santo:** Send me a link.

**Nick Nisi:** Can I?

**Kevin Ball:** Yeah, you can. You can share the outer link, and it'll get --

**Jerod Santo:** Sent a link. We'll put it in the show notes...

**Nick Nisi:** Oh, nice.

**Jerod Santo:** So this is like a JS Party equivalent of a deep fake, Nick. I mean, you are trying to fool people into thinking not well of me. Okay, I was just stalling so I could get the link.

**Kevin Ball:** That is amazing.

**Jerod Santo:** \[45:57\] Let's see it. TypeScript fan page. "Why I love TypeScript. As a developer and podcaster, I've come to appreciate the power and flexibility of TypeScript." This is actually super-boring. I think it should be way fancier. They don't know my style, man. I've got way more style than this.

**Kevin Ball:** You've got to pass in some params. Style = epic poem, or something like that.

**Jerod Santo:** Yeah. Tell them it has to rhyme to the beat of Snoop Dogg's Lottie Dottie. Now, that's my style.

**Kevin Ball:** Yeah. Put that in as an inspiration parameter. See what it does.

**Jerod Santo:** \[laughs\] Okay, now we're just live-prompting on the air. We should call it a show. I think we've devolved far enough for this episode. We hit our obligatory AI chapter, we got it in... So that means we can officially stop. All the links to all the things will be in your show notes, assuming Nick can get this prompt written in time...

**Kevin Ball:** I've destroyed Nick's productivity for the rest of the day.

**Nick Nisi:** The TypeScript \[unintelligible 00:46:51.29\]

**Kevin Ball:** \[laughs\]

**Nick Nisi:** "Brought to you by Jay to the Rod from the Changelog."

**Jerod Santo:** Okay, we're getting a little better. See, it needs more humanity. You inject some more humanity into it, things start to get more interesting, that's what I've found.

**Kevin Ball:** Put that in as a parameter. Humanity level 500.

**Jerod Santo:** \[unintelligible 00:47:09.21\] Tune in to Da Changelog. Now it's just talking jive, you know? This is just like stereotypes on stereotypes on stereotypes. Alright, let's call it a show. Anything else, anything we didn't talk about, anything you guys want to say before we call it a day? And yes, that did rhyme on purpose... Silence from the peanut gallery. Go ahead, Nick.

**Nick Nisi:** No, that's it.

**Jerod Santo:** Why do I put up with you sometimes...? He leans in, he opens his mouth, and then he says "No, that's it."

**Nick Nisi:** I had come up with my own list of things, of topics, of newsworthy things, and...

**Jerod Santo:** Oh, you did?

**Nick Nisi:** ...I don't want to jump into another tangent, because we have to go. But...

**Jerod Santo:** We've got four minutes before Kball has to hop off. Is there anything good, or is it just gonna be like Nick-level good?

**Nick Nisi:** Nick-level good.

**Kevin Ball:** I mean, this was an emergency podcast, right?

**Jerod Santo:** This was a Nick-level emergency. \[laughter\] So, I mean, what can we expect...?

**Kevin Ball:** There's a title for you...

**Jerod Santo:** Yes, that's a good title. Alright, Nick, I'll let you read one headline that you want to discuss, and then Kball and I will decide whether or not we're gonna let you talk about it.

**Nick Nisi:** I can't remember the name of it, but there's a new feature in Astro that lets you more natively support Tailwind by effectively baking in the clsx utility right into it.

**Jerod Santo:** I fell asleep mid-sentence. Kball, did you follow that?

**Kevin Ball:** So it's another example of pulling in a third party dependency into a core of something as \[unintelligible 00:48:41.26\]

**Nick Nisi:** Yes. Yes.

**Kevin Ball:** That's a pattern that we're seeing here. So there's got to be more of these.

**Jerod Santo:** Hashtag no build step...

**Nick Nisi:** And Astro just -- it didn't seem to get a lot of love in that survey either. Not that it got like hate, but it just didn't seem to register very high.

**Jerod Santo:** On behalf of Nick Nisi... \[laughs\] And Kball. I'm Jerod. This is JS Party. We've officially run out of things, as Nick talks to the air. We'll talk to y'all on the next one.
