**Jerod Santo:** Hello, hello, JS Party animals. It's me, your internet friend. It's Jerod, and I am joined today by Nick Nisi. What's up, Nick?

**Nick Nisi:** Hoy-hoy. How's it's going?

**Jerod Santo:** It's going quite well, how are you doing?

**Nick Nisi:** I am very excited to talk about JavaScript today.

**Jerod Santo:** Are you ever not excited? That's the real question.

**Nick Nisi:** I should have replaced JavaScript with TypeScript, and then we'll continue... But yes.

**Jerod Santo:** Maybe you would have gotten even more excited.

**Nick Nisi:** \[laughs\]

**Jerod Santo:** Contain yourself, contain yourself. We have a special guest, a return guest... It's Swyx. What's up, man?

**Shawn Wang:** Hey! Thanks for having me back. And can I just say, TypeScript is just more JavaScript on top of JavaScript, so you're good.

**Nick Nisi:** Mm-hm.

**Jerod Santo:** Tie all the JavaScript on top of my JavaScript, please...

**Nick Nisi:** \[laughs\]

**Jerod Santo:** ...is what Nick says. I've never said such a thing... But to each their own.

**Nick Nisi:** Not to foreshadow or anything, but I can't wait to talk about your talk, i.e. move away from TypeScript...

**Jerod Santo:** Oooh...

**Shawn Wang:** It's a little bit clickbaity, but we can talk about that.

**Jerod Santo:** That's why Nick said it right up top, because now it clickbaited everybody into listening to more of the show. So we had you on a little while back. You were talking about Temporal... We've also had you on the Changelog recently, so - happy to have you on all of our shows. You're always watching the industry, of course, you're participating in the industry, and analyzing and looking forward, and -- I think you call it future-casting, or now-casting? You've got a term for it. Yeah, now-casting. What you see now, and where we're headed. You have this really cool talk at Reactathon about the third age of JavaScript, which is something you've been talking about for a while. It's kind of an update and a review. Do you wanna lay out that blog post from 2020, what it's about, and then we'll do the catch-up after that?

**Shawn Wang:** Sure. And also, Reactathon was a fantastic experience, that I highly recommend. But we'll cover the third age of JavaScript first. So the idea is that -- I'll comment with a little bit of the back-story, and then we'll get into the thesis. So the back-story is it was sort of mid-pandemic, a lot of new projects were getting announced, it was coming to the forefront... You could feel the shift in the air around the energy of open source developers in JavaScript... And always was wondering, why is that? Why does this period feel different from maybe two years ago? And back then it was 2020, so two years ago would be 2018... It feels different. It feels like people are innovating on a different layer of the stack than just yet another React state management library, for example. And there's plenty of those, and they're great. But still, it seems like there's more foundational shifts going on, and I was wondering why.

\[04:20\] I started looking back into the historical aspects of JavaScript, and I started bucketing the evolution into different ages. The hypothesis was there's a changing of the guard. And I've looked into people like TJ Holowaychuk, and even Guillermo himself, and there's a bunch of people who were early on in JavaScript, that are less prominent today...

**Jerod Santo:** And Jeremy Ashkenas.

**Shawn Wang:** Yeah, yeah, exactly. There's a bunch of those people who worked on very core pieces of stuff that we all use today, or that at least influences stuff that we all use today... And they work on it for ten years and then they disappear, and new people come on the scene. And I feel like essentially there's a changing of the guard. So what I did was I went through the history of JavaScript and I looked into how could I spin that narrative to back-fit, in an as much as intellectually honest way as possible, the evolution of the language. So what I came up with was that the first ten years, the first decade of JavaScript was the formation of the language. Literally, starting from the standardization of ECMAScript, all the way to 2009 (or 2008 maybe). So this was the period, from 1997 to 2008, and that was the period of standardization, all the way to ES5. It was a really magical period, primarily focused at the language there. And then 2009 happens, also a very pivotal year for JavaScript, because in the same year Node, npm, Chrome - and I'm not sure what else - all came out at once. And those are just like new runtime for JavaScript, new standardized runtime, new package. Everything that we use today was formed in that - I called it "the year of miracles", and it's miraculous.

That spawned the second age of JavaScript, which was the next ten years of building frameworks and libraries and abstractions that pushed forward the language, including by the way compile-to-JS languages like CoffeeScript and TypeScript. You know, it seems clear that TypeScript has won.

So essentially, that brings us from 2010 all the way up to 2020. 2020 was the first year of the third age, where something different was in the air. Deno was being announced, Vite was being announced... There's just like a new set of innovation that seems qualitatively different. Just to cut the long story short, my hypothesis was that it's a collapsing of layers and it's a clearing away of old assumptions. And one of the old assumptions is that -- for example, one of them is that we don't have a standard module system in JavaScript. And now we do, we have ES Modules. And now that's just a standard that's proliferating everywhere, and more web standards are becoming more and more of a standardized API, even on the backend.

Another one would be that you have to write JavaScript tooling in JavaScript for people to understand the tools that they use, and contribute back. It turns out most of them don't, so... \[laughs\] Especially the stuff that you run hundreds and hundreds of times more than others, the hot path code... Maybe you wanna optimize that in a compiled language like Go or Rust; we saw those platforms start rising with ESBuild and swc.

The part about collapsing layers is really just about understanding our tools. So my favorite way to tell this story is to tell the story of Microsoft Word, the word processor. When the original word processors came out, you had to buy add-ons for horizontal layout, for page count...

**Jerod Santo:** Really?

**Shawn Wang:** For word count as well. Each individual little thing. Because they weren't viewed as part of the core job of a word processor. But as we grew it in our usage, what was table stakes for a word processor started to grow, so you started to see the platform absorb all those functionality as part of its core, and now you would not imagine a standard word processor not shipping with one of those features.

\[08:02\] So what that means over time is basically when you start building on the ecosystem, you start out with the Unix philosophy of everything should just do one thing, and then utilize a plugin ecosystem to add functionality, to have a thin core, and all that. But after a while, if you just have a standard set of all the things that everyone just has come to expect, then a new tool comes up that just consolidates all those layers and makes the experience that much better, faster, to something that you don't even worry about... And that describes Deno and Rome. So that's what's happening in my mind with the third age of JavaScript.

So that was the original thesis in 2020. So the talk that I did - it's been three years (2020, 2021, 2022) since. The talk that I did basically covered what I missed in the original blog post... But I'll stop there, just to get any reactions.

**Nick Nisi:** I really like the break-up of that... Like, ten years of different cycles. And there's a lot of patterns that you can read into each of those cycles that kind of repeat in the subsequent year. I guess we only have two really to go on, since we're in the third one now... But you know, from 1999 to 2009, about halfway through that you had major things come out, like jQuery, which is still very prominent today, despite us trying to ignore it... Not on purpose. You know, we just don't realize how prominent it still is.

**Jerod Santo:** Right.

**Nick Nisi:** But also - there was a fundamental shift in the language itself that just never came to be, and that was ES4. And there was a lot of stuff that they were trying to cram into that, and it just never came out. But then ES5 came out in 2009 and added a lot of really cool stuff. But then kind of halfway through that, the 2012-2013 era, you get TypeScript coming out, React coming out, and this more looking at building applications as like -- or componentizing those applications with different things like Angular, React, all of those... And then in 2015 obviously we had ES2015, and major shifts to the language; a lot of the ES4 stuff coming back to actually be more mature and actually make it into the language... And then the yearly cadence of that. But now, in 2020 and beyond - we're only a year or two away from (if you follow that pattern) the next major thing coming out and going forward... And it's just interesting to speculate about what that could be, whether it's at the language level... It does seem like it's probably something more not JavaScript-related. Maybe written in another language, but using Web Assembly to run in JavaScript... And what paradigms, if you're thinking in terms of componentizing things, what paradigms are coming out in the next year or two that are going to reshape the landscape.

**Jerod Santo:** I feel like you know something, Nick... Do you know something that we don't know?

**Nick Nisi:** Let me introduce my new project... No.

**Jerod Santo:** \[laughs\] "Let me introduce my new project."

**Shawn Wang:** So yeah, in the original blog post I actually color-coded the significant advancements or launches of the JavaScript libraries or tools. So the standardization, ES1, ES4, ES5 and ES6, I placed in red. You could see just visually the red stuff was earlier, to the left of the timeline. And then the blue stuff, which is user land modifications to the language, which includes jQuery, MooTools, CoffeeScript, including React, and Vue, and so on, and TypeScript as well - I put them in blue, and those were a little bit more into the second age. The second age also had build tools, so I put those in orange... And that had Grunt, Gulp, WebPack, Babel, Rollup, Parcel - all happened in the second age. And then finally, green was runtime, so where can JavaScript run. The prominent ones I marked out was Chrome, Node.js, Electron, React Native, Hermes and Deno. Probably I should have added Cloudflare Workers somewhere in there, but it wasn't that big at the time.

**Nick Nisi:** Yeah, so just from there you can see distinct patterns that are emerging, in terms of what innovations -- there's a theme around the types of innovations that are happening throughout each age.

**Shawn Wang:** Yeah, totally. So I like to not just be playing number patterns... It's not enough for me to say "Okay, this seems to have a cycle, or this seems to have patterns..." I wanna have some reason behind why they're happening, a hypothesis... And that's why I talked about the changing of the guard. I think it's just people coming on the scene, taking what exists as a given, and then saying "Alright, what can I build with this?" They wanna make a name for themselves, and then they go ahead and do what they can do. So that's what you're seeing here, you're seeing the movement of people trying to make their careers.

**Jerod Santo:** \[12:26\] So what's interesting about JavaScript if we talk about in-browser JavaScript is does not live in a vacuum as much as server-side does, in terms of advancements, in terms of technologies, in terms of what stuff gets collapsed and what stuff doesn't. I mean, there's the HTML spec, there's the CSS Working Group, and they're kind of working along in tandem, or sometimes not in tandem, with people who are pushing JavaScript as a language, and as tooling... I'm curious how those aspects - CSS and HTML - fit into JavaScript's growth and maturity from your perspective.

**Shawn Wang:** It's just something I've decided not to cover. I don't know as much about it. CSS has its own complicated evolution... I think the decision of the CSS Working Group to split into separate modules for independent advancement was positive for the participants of the CSS Working Group. But on the marketing side, no one knows what they can use. \[laughs\]

So about a couple years ago there actually was a movement for a CSS 4 as a pure marketing exercise of saying "Everyone, this is the set of features that we have collectively agreed that is now kosher to use, and you should use them, because they're just so much better than their predecessors." It's not clear. You have to kind of pick it up through trade knowledge, or whatever.

**Jerod Santo:** In practice, yeah.

**Shawn Wang:** Right. So actually, having version numbers is a really good forcing function for everyone saying "Alright, am I in CSS 4? Let's look at what's in CSS 4." And it gathers people around that. Right now, CSS Working Group - we have to go into "Alright, are we on the layout spec, the Flexbox spec version 2. And what's in version 2 versus version 3?" It's just a much more complicated story, that nobody has time to get into.

**Jerod Santo:** Well, I think even JavaScript's story there isn't great. I mean, as a person who's in the industry - ES4, ES5, ES6, and then exactly what happened for everything, I just go to caniuse.com just to find out if I can, any given feature. Now, there's certain things I know exist inside the language now, but there's lots of stuff where I'm like "When did get introduced, and which browser supports it?" I don't have a clue. So even the version numbers with ECMAScript has been - at least for this guy - not super-useful. At least they started okay, and then - I don't know; did they just abandon it? What's going on these days with ES20 -- is there a 2018? 2022?

**Shawn Wang:** Yeah, it's once a year. Yeah.

**Nick Nisi:** I just use TypeScript as my measuring stick of what I can use. That's like the blessed version of JavaScript. Whatever version I happen to be able to support with that, whatever features they support, I can support.

**Jerod Santo:** I see. So you just let Microsoft bless your versions for you...

**Nick Nisi:** Mm-hm... \[laughs\]

**Jerod Santo:** If it works, it works

**Nick Nisi:** Exactly. But that is true about CSS. I see all the time -- I think I follow a Twitter account called @randommdn. It just gives you random MDB pages to peruse and look at... And some of them are CSS things, and I'm just like "Oh, that's cool", but I have no concept of when or how I could use that today.

**Shawn Wang:** Right.

**Nick Nisi:** As we record this, I still have 34 more days of IE11 support, so... Yeah. There's a lot of things that I can't use.

**Jerod Santo:** Not that anybody is counting...

**Nick Nisi:** \[laughs\]

**Shawn Wang:** It's dying. So the fun fact is that originally I tried to get a hard date on when IE officially dies, and apparently, people can pay for extended support, so it really depends on what your definition of --

**Jerod Santo:** Shh... Don't tell anybody.

**Shawn Wang:** Oh yeah, exactly; we're not gonna go with that. I guess it depends... But yeah, JavaScript is updated every year. I think it's a reasonably easy thing to follow. There's actually people on the TC39 that say that updating once a year actually isn't the best way to do this, to evolve a language... Because right now it's just whoever can champion their proposal all the way to stage 3 or 4... And that's fine on an individual proposal basis, but when you think about designing a language as a cohesive whole, you need to take groups of features together. And that's something that maybe you sacrifice in favor of the current model.

**Break:** \[16:17\]

**Jerod Santo:** So by our framing we are now three years into the third age of JavaScript... And you miss some things. This is what you shared at Reactathon. We'll put your talk in the notes as well, as well as your updated blog post. One thing I like about you, Shawn, is you always are updating and maintaining your writings, whereas most of us just set it and forget it and never return... But you're constantly evolving those things and keeping the web fresh. At least your little corner of the web. So that's cool. We'll link those things up. But tell us about - you're now reflecting back to 2020, and what you wrote then, what you've missed... What have you got?

**Shawn Wang:** Yeah, so first of all, what you describe there some people call digital gardening, and Maggie Appleton has a really good history of the digital gardening movement. And I think it's nice. Basically, don't let good ideas go stale.

**Jerod Santo:** Real quick before you dive in... I think the answer is gonna be no, because you write prolifically... But for me, that concept would make me not want to write as much; because every time I write, it's just another thing to maintain for the rest of my life. Do you ever think about it like that?

**Shawn Wang:** Well, no -- like, you can set expectations. I have a digital garden terms of service, I might say...

**Jerod Santo:** Oh, okay...

**Shawn Wang:** ...that says like "This is a tool for thought. This is me thinking out loud, and I don't have to return to it to update it." But you know, I'll make it pretty clear when that piece was relevant, and if you want my updated thoughts, just hit me up.

**Jerod Santo:** Oh, fair enough. I like that.

**Shawn Wang:** Lower the expectations.

**Jerod Santo:** Yeah, I like that. Well played. See, you've got an answer for everything. Okay, going to the things you missed... What did you not see coming?

**Shawn Wang:** Right. So just to recap, the conclusion of what I foresaw or what I was calling out as the trend... I said third age tools would be faster, would be ES Modules first, would have collapsed layers, in other words one thing doing many things well, instead of many things doing one thing well. Type-safer, securer from dependency attacks. Polyglot because of the need for compiled languages... And then I also called out isomorphism, which is server-side rendering being more of a thing. That's definitely become more true over time.

\[20:11\] Essentially, what I accumulated over the past three years was just updates to that. So I have a Twitter thread where I announced the original blog post, and then I just kept adding to it over time, with relevant updates.

The first thing I probably added was the change in the architecture that the venture capitalists are coming for JavaScript. When you think about the change in how these things were done - previously, it was just kind of open source community volunteer efforts by individual people, and now there's organized companies that are trying to figure out a sustainable business model, both for open source and for their paid products. And it's something that I think is a fundamental shift in how the industry is going to be structured, because it's gonna seep into the tools, or discussions of what tool we choose to use at all. That's really interesting.

Apart from that, the other big trend which I called out at the end of last year was the move towards monorepos. Something I didn't really think about in the original piece, but just the fact that it's increasingly clear that monorepos are not just for the Facebooks and Googles of the world. That even small teams have a use case for them, because they keep jumping between repos a lot... And it's just really your tooling that hasn't got up to the standards of being able to handle monorepos and make them easy to use... Including GitHub, by the way.

So projects like Turborepo have come up in the past couple of years, and actually got acquired by Vercel, that help you manage monorepos... But then also, of course, Nx from the Narwahl team has also been plugging away at this for a while. But Pnpm is also very monorepo-friendly, and there's just more and more tools. Just the other day Graphite, which is a stacked diffs tool that works really well with monorepos, announced their seed funding.

So I think there's just a lot of interesting movement going on here, and I wanted to call that out as a trend. I think more and more JavaScript is gonna move into monorepos, especially if you move full-stack, which is the other trend that we're talking about.

So there's basically a lot of these trends, and I was starting to get overwhelmed. I could go on, I have another piece called "Smart clients versus smart servers." In other words, why do people try to do server-side rendering and then stream their updates down to the client... And then some other people have very smart clients that have a local cache of the database, so they can do optimistic updates and offline-first apps, and what are the trade-offs between them. Those are also trends that I'm seeing people start to talk about at the edges, and it's being explored by the likes of React and AWS, where I used to work.

So essentially, there's no organizing framework for all of this. It's just like new idea, new idea, new trend, new trend. And I think the most useful thing that I could do for my readers is to give people a framework to sort all this into "Should I care about it now or not?" \[laughs\] And that was the main insight I had going into this talk.

So that ended up being four levels of concern. The first level is whatever you're currently betting on, make sure that it was the right bet. So continue to validate current bets. The second level is explore incrementally-adoptable tools. Look at your current toolchain, see if any one of them can be swapped out for something that might be better in some way, whether it's faster, or simpler, or more consolidated, anything like that. Third would be new architectures; these would require more work. You're not just swapping out individual tools, you might be swapping entire architectures just to take advantage of something new that might have come up, whether it's a new framework like Remix, or it's a new state management paradigm like the smart clients, smart server thing.

And then finally, the most out there, new languages, which is - in my original blog post about the third age of JavaScript I referred to Gary Bernhardt's talk on the rise and death of JavaScript, and... Yeah, everything ends at some point, and there's a lot of competition for what's gonna be the next platform after JavaScript... And what is the third age of JavaScript today can be the first age of something else. And it is the first age of WASM today, because WASM is only about five issues old... But there's other possible claims that are thrown there.

\[24:10\] So you know, if you ever wanted to replatform and explore what's beyond JavaScript, the fourth tier is kind of where you go for that. So yeah, basically, the talk is just a walk through those four tiers, and I could go into each of those, but I'll just pause there...

**Jerod Santo:** Well, let's start with the VC-funded thing, because from my perch that's very interesting. I think there's implications there, but I wonder exactly what they are, and I wonder how much you've thought about, okay, we have all these VC-funded JavaScript and web tooling companies, open source meets commerce... I'm seeing a bunch of it; it's hard to find a brand new open source project today that's not either started by a large corporation already, who was VC-funded at some point, and has made it over the hill... Or is like "Hey, we're an open source company, and we've just raised the seed round, or a series A" etc. What do you think that's gonna do to the community and to the space or time?

**Shawn Wang:** I don't know, but it'll be interesting to watch. \[laughs\]

**Jerod Santo:** Take a guess! Take some guesses.

**Shawn Wang:** Some projects which are well-managed will be some of the best JavaScript tooling we've ever seen... Because they not only have the ability to support full-time maintainers and have a sustainable business model that doesn't rely on donations, but they're also open source and serving some critical need in JavaScript. That is venture capital funding working at its best. Finding a need that people pay for, and paying the maintainers and developers a good amount to work on it.

Where it might not work best is when developers who are mostly good at developing are being thrust a large sum of money and then told to become businesspeople, with no training.

**Jerod Santo:** Right.

**Shawn Wang:** That might be a concern. So in other words, some of these are gonna fail. And that means that the projects that they promote and maintain may be rushed in some way, or abandoned. In other words, you have more suspicion of a typical open source project than you would a standard open source project, because you don't know if the license is gonna be changed on you, you don't know if the core products could be crippled by features just to put a paywall in some product... Or if they just run out of funding and then they just abandon it, which can happen to typical open source as well. So nothing's new there.

I think just the experiment is very useful, and people showing the way. Vercel and Netlify both now being unicorns I think is super-helpful for the newer projects in the ecosystem... But also, what I'm seeing is really interesting, which is - even the backendy database distributed systems type companies are aiming at the frontend developer and the JavaScript developer as a desired target audience, mostly because of the sheer size of this cohort. It is the top language in the world if you discount Excel...

**Jerod Santo:** Never discount Excel.

**Shawn Wang:** And it's only gonna keep growing. Honestly, I think JavaScript developers are some of the best in the world at developer experience... And I think partially that is because we have so much choice that we have to compete on developer experience, and therefore we have very low tolerance for bad experiences, as compared to other ecosystems. That's my hypothesis. I'm not actually sure that it's true.

**Nick Nisi:** And we're primarily on the frontend, right? We're the one that you see.

**Shawn Wang:** Yeah. Anticipating user needs as well, and documenting for those. I definitely feel like there's more of a documentation culture in the frontend versus the backend, but in their defense, there's more of a testing culture in the backend versus the frontend.

**Jerod Santo:** Sure. It's easier there.

**Nick Nisi:** \[27:35\] Kind of related to VC funding coming in. Or kind of not... Something that I wanted to ask about was how security might shape the rest of this age, or the start of the next age? And supply chain attacks are becoming increasingly more common... And having those VC-backed -- we're getting paid to keep this up to date, to quickly fix vulnerabilities, and to kind of have that layer of support as you give over the keys to the kingdom to any Node module that you install to run on your machine or in your production server. I guess have you thought about the impact of security as this has become the most popular language in the world?

**Shawn Wang:** Well, first of all, I'm not the most informed person on security. Probably Feross would be a better person to talk to about this... I'm not optimistic or pessimistic. I'm just kind of neutral on it. I don't think it's like a focus of anyone, apart from Feross, who is the founder at socket.dev. \[laughter\] And his approach is "Let's just audit everything and give you ten different reports telling you that--" And we have some of these automated audits as well. It's not clear exactly how venture funding was gonna affect this either way. Obviously, you can have people who are paid better to maintain these repos, but supply chain attacks happen in perfectly well-funded companies as well. It's not just like someone's acting out in open source... Which has happened repeatedly, and just puts a Bitcoin miner in a repo, or something like that.

I think it really has to be fixed at the runtime level, or the toolchain level. Deno has an attempt at doing this by locking down the permissions. People are realizing, unfortunately, that it's just not that useful. You're just gonna enable all the flags anyway. So it has to be per-module, and as far as I know, nobody's tackling that, except for a company that I'm hopefully invested in, that might be trying to solve that issue. But it's kind of an open question right now. I'm not aware of anyone else really tackling sort of per-package permissioning and just reinventing the npm ecosystem. For better or worse, the npm ecosystem is what we have, and therefore the security defaults that they choose - which is none \[laughs\] - we inherit those decisions.

**Jerod Santo:** Great for adoption though. It was great for adoption. So one of the things that you said that made me think about a trend that I think I'm seeing - and I'm just gonna bounce this out there and see if this resonates with you... You know, you think about a startup, and you think about a new business - there's kind of the two-headed founders; you have the CEO and the CTO. What would become the CEO and the CTO. Like, sales and planning, and ideas, and then you have execution and technical implementation. And it seems like CEO type founders are often out there looking for their technical co-founder. Like, "I need a technical co-founder. I have an idea, I've got maybe some funding, I've convinced the people it's a good idea. Now I need help building it." And what I don't see quite as often - maybe I'm not seeing these things - is the other way around. So now we have all these VCs that are like "Hey, you've got an open source project, or some JavaScript shops, you're a great engineer... Here's money. Go explore, go build something." And it seems like probably - and I'm more on that side of the equation - I would be more likely to say "Alright, let's go. Let's build it." Versus "I need to actually--" You said "But no one's actually teaching them the business side of the equation." And it seems like a CEO type might be more aware that they need that help, because it's so blatantly obvious that they can't necessarily technically build the thing, than the technical person would be; that they can't actually sell, or position, or market. I'm curious your thoughts on that.

**Shawn Wang:** It's very true. I probably see that in some of the companies that we know and love today. But also, don't put it past people - these very smart developers - to grow in those domains as well.

**Jerod Santo:** For sure.

**Shawn Wang:** A lot of founders just learn on the job, and often can't really be taught anywhere else. There is one model which I really like; it's a friend of Changelog, Sid Sijbrandij, from GitLab. He has started a venture firm, or a venture incubator called Open Core Ventures, where he takes in founders of successful open source projects and he hires a CEO for them, and incubates a company with them.

**Jerod Santo:** Oh, nice.

**Shawn Wang:** It's a pretty smart model. The maintainer gets to be a CTO and co-founder of the project that they build, but they don't have to do the company building side. And that's pretty nice, if it works. It's still a pretty new model, so it remains to be seen what that really looks like... But that's GitLab's entire origin story. Sid was the sort of installed CEO -- he's a self-appointed CEO. \[laughs\]

**Jerod Santo:** \[32:04\] Yeah.

**Shawn Wang:** I think that's probably a good model, but as far as I can tell, most of these projects just have the original developer founders become business people, and it remains to be seen how well they take to that role.

**Jerod Santo:** Mm-hm. And some of them succeed, and some of them don't, and that's just the way it goes anyways. That's the thing about startups as well - so many fail. And now we're attaching them to open source projects, or projects that -- you know, there's different variations of that, that may be source-available, or business-source, these things... And as users and as consumers in the ecosystem of npm etc. we need to be aware that a lot of projects fail, and a lot of companies fail.

If you've been using JavaScript for a while, you know you have packages that are no longer maintained. And even though there's people who are putting capital behind these projects and putting fuel on something to do it right, do it fast, do it well etc. it doesn't mean they're not gonna disappear. So that's just part of the game as well.

**Shawn Wang:** Yeah, yeah.

**Jerod Santo:** Thankfully, with open source at least they'll leave their trail behind, and somebody else can pick it up and maintain it, or do what they have to do, hopefully.

**Shawn Wang:** So I think Chromatic is probably the example here, with Storybook, which was an abandoned project, and it got picked up by the community, and now it's mostly run by Chromatic... But it doesn't happen too often. People would rather build from scratch, rather than take over an existing codebase. Unless, obviously, if they depend on it a lot, then sure; but I just haven't heard too many examples of those.

**Break:** \[33:37\]

**Jerod Santo:** So you mentioned four buckets that are important for people to be thinking about in this third age. Their current bets, things that are incrementally adoptable, new architectures, and then finally, new languages. We didn't get into the details on any of those. Let's maybe start with current bets, or you can review again, and then we can dive into what that looks like.

**Shawn Wang:** Yeah. Mostly, it's not gonna be a surprise for most people, but some may really want to get on the adoption train, because it's very clear what's happening. So the first one is, of course, IE11 is going away, and that has a firm date now, compared to two years ago when I struggled to find a firm date. Microsoft has now come and they've said June 15th, so by the time this comes out we should be there.

To me, the most important thing that I was looking for was the U.S. government dropping IE11 support. So there's a tracker site, I think USanalytics.gov, or something like that, and the proportion of IE11 traffic going to U.S. government sites, across the IRS and everything else, went from 3.6% down to so small that they don't track it anymore. It's just in Other. That's really good news.

\[36:17\] Alongside that, all the roadblocks that IE11 presented are also growing, and primarily ES Modules are also growing, and there's a site on Chrome that you can check for what percentage of websites loaded are using ES Modules natively in the browser. So this is not just like you're using the ES Modules syntax but compiled away by WebPack; this is actually you're shipping ES Modules to the browser. I think that is up another 2x, from going 3x the year before. I think I worked it out to something like - if it continues at the current rate, by 2026 or 2027 ES Modules will be half of the web. That's a pretty big shift.

Obviously, we're not saying that everything should be ES Modules, because even with HTTP/2 there are recommendations against doing time watches for everything, because that causes a pretty big waterfall. But I think it's just growing in adoption, and I think that's one of the hard data points that we can rely on.

The other fact is just React vs. just other frameworks - React is just winning. And within React, Next.js is winning hard. It's accelerating, in fact, compared to other frameworks. So I think whoever has just bet on Next.js and bet on React has been validated tremendously. That's not to say the other frameworks are not doing well; they're just not growing as fast as React.

It's always useful to keep an eye on downloads, on the state of JS, just to see what the meta is, but it hasn't really changed in the past three years. I don't expect it to in the near term.

The last thing - I didn't put it in my notes, but I called it out in the slides, was that TypeScript almost definitely won the compile-to-JS wars, if there was even a fight. Maybe five years ago there was more of a fight between TypeScript and Flow, but now it's pretty clear that everyone's just gone to TypeScript. And there's been no corresponding growth in the other alternatives, like Elm or PureScript. So yeah, that's the validation of current bets.

**Jerod Santo:** How do you feel, Nick? Are you feeling pretty good about your bets?

**Nick Nisi:** Pretty good, yeah...

**Jerod Santo:** \[laughs\]

**Nick Nisi:** In your talk though there was one thing I kind of alluded to at the beginning of the show, and that was - on one of your slides you mentioned a... I don't know if you called it a regression or a change, but it had TypeScript over to JSDoc. Do you wanna talk about that?

**Shawn Wang:** Yeah. So this is more about noting counter-trend things that might be interesting... Like, now that TypeScript has won, what is the next frontier? So I presented two paths. I actually heard some feedback from the TypeScript team that that slide might have been misunderstood. And first of all, I'm shocked that my talk reached the TypeScript team... But second of all, it wasn't meant to be that controversial.

So there's two paths. One, which is build TypeScript into the language. So there's a stage one proposal right now for types as comments, which just means that you can get rid of the TypeScript build step. It's unclear to me if all of the TypeScript syntax will be included... So in the attempt to formalize a standardized TypeScript, are you gonna end up with like a crappy half subset of TypeScript that now people have to keep in mind?

The other question is "Is this the way that people want to write TypeScript?" So if your goal is to strip out the build step, maybe don't even write TypeScript. Just use JSDoc types, and use the language server that TypeScript comes with to give you the type safety, but you never actually have to write TypeScript, so you don't have to use the build step.

So the most interesting projects that have gone in this way are Deno and SvelteKit, which have moved from a TypeScript codebase to a JSDoc type codebase, specifically for this reason, for build speeds, and -- I think primarily for build speeds. \[laughs\]

**Jerod Santo:** Yeah. I know that strategy is what JS Party panelist Chris Hiller does day-to-day, and he sings its praises; he really likes to just do it.

**Shawn Wang:** I tried it for my site, and I was like, "Yeah. It makes sense." It's the right combination of types when I need it, and then when I don't need it, it gets out of the way, and it doesn't complicate my build chain.

**Jerod Santo:** Yeah. Nick, you're nodding against what I've just said. Are you --

**Nick Nisi:** I don't give Chris' ways any validation, that's all I'm saying... \[laughter\] No, I just don't like writing comments. The TypeScript syntax feels very natural to me, whereas -- I don't know how to describe a lot of more complex things in JSDoc, and it seems overly verbose. But that's just me.

**Shawn Wang:** \[40:19\] Right. So the syntax can be a little ugly, that's for sure, but you can still sort of write your types in a separate file, a TypeScript file, and import them, if that's your concern.

**Nick Nisi:** Oh, okay. Yeah.

**Shawn Wang:** So there's ways around it; it's just a matter of how much are you willing to futz around with your toolchain if you don't have it set up. Or if your toolchain already understands TypeScript natively, then you never worry about it, which is great.

**Nick Nisi:** Sure.

**Jerod Santo:** And there's the other factor, Nick - if you start doing that, will they still let you MC a TypeScript Conf? You know, you might lose your MC spot, so...

**Nick Nisi:** That's true.

**Jerod Santo:** You can't do that.

**Shawn Wang:** Yeah. I know for a fact that the TypeScript team doesn't like this, the fact that people are --

**Jerod Santo:** \[laughs\]

**Shawn Wang:** The JSDoc typing stuff is meant to be a stepping stone to TypeScript, and now people are using it to step away from TypeScript.

**Jerod Santo:** That one backfired.

**Nick Nisi:** But now the type annotations proposal is a way to step back to that...

**Shawn Wang:** Well, yeah, so - I'm just not gonna pay attention to it until it reaches stage two or three. But the concern there is that it's a subset that isn't full TypeScript, and that causes problems... But who knows.

**Nick Nisi:** Yeah, that's a valid concern, for sure, and it's not meant to be a way for TypeScript. It's meant to be a way for TypeScript flow, other implementations to put their type annotations in there. It might be hard to satisfy all requirements of all languages in the way that they're currently formed.

**Shawn Wang:** Oh, God...

**Jerod Santo:** Yeah...

**Shawn Wang:** People wanna put JSX in JavaScript, and I'm like -- we can't even agree on this type stuff. \[laughter\]

**Jerod Santo:** Right...? Alright, so that's validating Nick's current bets, but let's break his confidence with some of the future things. What's the second bucket of things that people are paying attention to? Things that are incrementally adaptable is what you said earlier.

**Shawn Wang:** Yeah. These are honestly sometimes even easier than to pitch. Basically, someone out there may have rewritten your favorite tool in some language that's faster. So this is an extension of the third age trend that I called out, which is scripting shell systems core. Systems language core, and scripting language shell, which is JavaScript.

So WebPack, you might wanna try -- so Node, you may wanna try out Deno, WebPack, Vite, Babel, you might wanna shift to swc... Jest to Vitest, Prettier to Dprint, ESLint to RSLint, Nvm to Fnm... I think those are other linting materials as well.

So a lot of these are sort of Rust rewrites of the toolchain, and there may be one for one, or in the case of swc it may be more of a platform shift. I think that's the vision for swc. But either way, I think those are easy to swap, with no big rearchitecture. That's why they're a bit safer to explore. Especially because if you run them a hundred times a day, you might have significant savings, so why not.

**Jerod Santo:** Yeah, we've seen a lot of specifically the Vite adoption, and I think Kball recently was singing the praises of that inside of his engineering team, of that just really changing their day-to-day work... Because these are things that you run a hundred times a day.

**Shawn Wang:** Yeah. The thing about Vite - it's gonna be interesting whether or not, when we stand here and we do this again in 2030, whether or not we'll be talking about Vite or swc. Because Vite has the current momentum right now, but it was never really the intention of Evan, the author of Vite - and the author of ES Build, actually; both are called Evan - to be the core toolchain of everything. He actually kind of called it a proof of concept; an existence proof that your build tool is gonna be faster. Whereas swc is meant to be more of the platform.

If you look at Next.js, they're not adopting Vite, they're adopting swc as the sort of Rust-based platform of choice. So I think it's a very interesting debate right now. We may have just rushed to Vite, just because it was the first to be a fully-features bundler, with a really good dev story... But long-term we might be shifting to swc just because the architecture might support more things that we wanna do. I don't know. This line of thinking is about two years old now, and I haven't really engaged with either of the authors to check my assumptions.

**Nick Nisi:** \[44:06\] At the same time, it does seem like it's getting just exponentially easier to migrate between these different things.

**Shawn Wang:** Right.

**Nick Nisi:** You know, five years ago when I had a super-complex thousand-line WebPack config, to now I have a 20-line Vite config... And if I wanted to switch over to swc or a toolchain around that, I'm not gonna write a thousand lines and do it again. It's gonna be pretty straightforward. So just a lot of standardization.

**Shawn Wang:** Yeah. Part of that is just standardization of all the things.

**Nick Nisi:** Yeah.

**Nick Nisi:** I really like that as well. That also means that some tools go away, just because they no longer support the standard. I would call out Jest in particular, which -- I know the Jest people, and they're very annoyed whenever this comes up... They don't support ES Modules, or they don't support it well, particularly in Node. They say the blocks by Node is not their fault. But for whatever it's worth, they get the disproportionate blame. So everyone wanting to move to an ES Modules future tends to also move off Jest... Which is a really fast fall from grace for something that two years ago was the most tool in JavaScript.

**Nick Nisi:** Yeah. I prototyped moving our app from Create React App to Vite, but then we also had to maintain a separate Babel config for Jest, because it doesn't work with ES Modules.

**Shawn Wang:** Right. So Vitest is the up and coming, and probably one of the fastest-growing projects of the last year to do that.

**Jerod Santo:** So are you going to adopt Vitest, Nick? Or did you do that? Or you just abandon the project.

**Nick Nisi:** When I did this prototype it was like two weeks before they publicly announced Vitest, so... Yeah, the plan is to look at it. And I think that it's very telling... You know, when I looked at it back then, it was like "Oh, don't use this yet, because it's very experimental." And now Vite has moved over to Vitest. So it's grown a lot.

**Shawn Wang:** They move fast in that world.

**Nick Nisi:** Absolutely. So yeah, it's definitely something that I want to investigate further, and I think that it could be a very good fit.

**Shawn Wang:** Let me mention two other things in the incremental adoption phase... So at first I mentioned the monorepo thing; that belongs here, the Turborepo and Nx, Pnpm as well... The emphasis on incremental adoption of monorepos may or may not matter to you, based on whether you're doing brownfield or greenfield. But I think the developer productivity is definitely there, and people are recognizing that. Whether or not you like it -- like, you're working across multiple repos anyway, and it's just a matter of dev workflow if you wanna do that.

There's also the trend of browser IDEs, which are also incrementally adoptable in your review workflow. So there's StackBlitz, GitPod, GitHub, Codespaces, Coder.com - all these solutions for you to run deploy previews in a web-based environment.

**Nick Nisi:** When they give me a web-based terminal, then I will be super-happy.

**Shawn Wang:** I think they do...

**Jerod Santo:** \[laughs\]

**Nick Nisi:** I mean, you can do that with Codespaces, and things like that, but at what cost...?

**Jerod Santo:** We recently did a show with Warp founder, Zach Lloyd. And Warp - they're macOS-only. They're reinventing the terminal - I'm not sure if you've heard of that one - and they're very much looking at their next target beyond macOS. It's either gonna be a Linux-native client or a web client. And I think putting the terminal in the browser is an interesting proposition. I know there's people that have put things that look like the terminal in the browser... And StackBlitz has put Node right in there, and there's lots you can do... But it's definitely a space that's heating up. All this VC money is just trying to put Vim in the browser for you... \[laughter\]

**Shawn Wang:** Well, StackBlitz is even crazier... They're putting Chrome, in Node, in Chrome. Something like that.

**Jerod Santo:** Yeah, something like that...

**Shawn Wang:** Because they're running Electron in the browser. \[laughter\]

**Jerod Santo:** Well-funded experiments, I'm sure. So let's move further out into the more experimental edges. Rearchitecting, or new architectures... Kind of like getting more aggressive here with our adoption, right?

**Shawn Wang:** Right, right. I actually view VC-funding as a new architecture, and that's kind of like a hidden -- like, it's not in the code, but it's behind the code, because it's gonna determine the evolution of the code. So that's one thing. But there's been a lot of developments over incremental rendering versus static rendering...

\[48:06\] One of my clickbait headlines recently has been that there's no longer any pure static site generator in JavaScript. Both Gatsby and Eleventy, which have been sort of the pure static site generator frameworks, have now serverless rendering options, rendering on-demand options, which means they're no longer pure SSG. I think this is just a reflection of the market. People are very tired of long build times. And as a former employee at Netlify, I can attest to my own frustration with that.

So both Vercel and Netlify are trying to drive different perspectives on how to do incremental rendering right. Netlify's approach - they call it DPR (Distributed Persistent Rendering), and then Vercel's approach is ISR (Incremental Static Regeneration). And there's pros and cons to that. I wanna actually point to Lydia Hallie' talk at Reactathon as the current best state of the art on the five or six different options that you can choose, and the trade-offs between them.

So there's a lot of acronyms here, and probably you don't really wanna get too much into those, but I think it's worth understanding the options available to you, because they are significant shifts. I have shifted my own blog over from a fully statically generated approach to a rendered on demand approach, and... I mean, it makes sense; my deploys are really quick.

**Jerod Santo:** Nice.

**Shawn Wang:** I mean, this is gonna surprise none of the greybeards out there. \[laughter\] Because we're like we had the admin what are you talking about? I think the shifts here are just that people are trying to use JavaScript more sensibly, and more sparingly. So probably one of the most interesting approaches is Astro, which is still a static site generator, but it's very friendly with the frameworks, rather than being sort of anti-framework or siloing off the framework into a separate folder. I tend to call them bootloaders.

The other framework that's in this capacity is QuickJS from Misko Hevery. Both of them, the premise is islands architecture. You only download the parts of JavaScript that you are specifically going to hydrate for, and everything else is just static HTML. And to that view, Misko actually put out a recent blog post that got a lot of attention called "Hydration is pure overhead." In other words, you should not download any JavaScript related to rendering HTML that you actually never change, which is the default way that SSR is for most React apps. And people don't know this, because it's a very nuanced view... But it's true. If you wanna get to the minimal ship to JavaScript, this is the kind of thing that you have to do.

The last I'll cover here about this approach is React Server Components, which is not fully out yet, but both Remix and Next.js are working on approaches to ship this such that -- essentially, you are able to render React components in the cloud and stream them down in a serialized format to the client-side, where they can render them out again. And that will fundamentally cut -- I think when they tested it at Facebook it cut their bundle sizes by 30% to 40%. It was pretty huge.

So being able to seamlessly choose whether or not you're rending on the client versus the server and to move between those things flexibly is kind of the theme of what I'm calling neoisomorphism.

**Jerod Santo:** Word salad today. We have lots of -- neo-iso-morphism...

**Shawn Wang:** Ryan Florence also had a really good talk at Reactathon, calling it a lever. Essentially, there are trade-offs to all of these approaches. Sometimes you want the fast layout, sometimes you want the instant response... And so not needing to move a bunch of files around, or to adopt a totally different toolchain just to achieve different parts of that rendering effect - that's kind of the goal of Remix. And I think that's kind of the goal of a lot of these tools, which is to try to make it easy to move code around; to achieve the dynamic parts that you wanna achieve, and the static parts that you wanna achieve.

**Jerod Santo:** That's a lot. We're getting short on time... Quickly, hit us up with reskilling new languages... You mentioned WASM before, and the death of JavaScript... Tie us up into a bow here.

**Shawn Wang:** This is the speculative part, in the sense of like - I don't know what I'm talking about, because I haven't built a WASM project yet... I just try to keep up to date on what's going on.

\[52:03\] The thesis is - and I actually highly encourage everyone to check out Gary Bernhardt 's talk on The Birth and Death of JavaScript, because he actually predicted WASM before WASM. He called it a different thing. I think he called it Metal. But essentially, most people may not have heard that Web Assembly is not just a buzzword or a trend; it's actually a formalized fourth language of the web. As the W3 committee has put in this press release, the first three languages are HTML, CSS and JavaScript, and the fourth will be Web Assembly. In other words, it's gonna be supported for an extremely long time; essentially, as long as the Worldwide Web exists, Web Assembly will be supported. But it is only five years old. In other words, while we're in the third age of JavaScript, Web Assembly is in its first age, which means it's still forming its speck, people can still figure out what they can do with it... There's no ecosystem built up around it. There's just a lot to get to where JavaScript is today. But I think people are already exploring what is possible.

Everyone talks about Figma, but there's a really good InfoWorld article on the rise of Web Assembly that is actually talking about the non-famous examples. Disney streaming uses Web Assembly as a sort of cross-platform solution... There's a lot more in there... I just picked Disney because everyone has a Disney subscription, especially if you have kids...

**Jerod Santo:** Also, it's just not a place where you would expect it. It's kind of an unexpected use, right?

**Shawn Wang:** Right, exactly. But basically, anyone with very high cross-platform needs or very high performance needs, particularly if they have a lot of code that's written not in JavaScript, but they just wanna port it over... The Bloomberg terminal is using Web Assembly. The BBC iPlayer, the one that plays on every BBC page, uses Web Assembly. Amazon streaming, or Amazon Prime video also uses Web Assembly... There's just a lot of lesser-known examples that are not Figma, that are starting to explore this space... And the regular web developer, because we don't have the same problems that these people do, we are just completely unaware of it. It's pretty interesting.

For the record, I don't think Web Assembly will kill JavaScript. I think it will just make the web much more accessible for everyone else who doesn't write JavaScript. That's one thing. And it'll make JavaScript be able to access non-JavaScript capabilities. Stuff that was written in C++ libraries, and other languages that might be compiled to Web Assembly.

And then finally, I think the emerging consensus actually is that while Web Assembly was kind of invented for the browser, it might be more useful in the server, because of the security model and the sandboxing. It actually might be a new format that arises. So Ryan Dahl from Node, and now Deno, actually wrote a blog post (I think) last week, calling it JavaScript containers. And if that arises, I'll be extremely happy, because it might kill Docker, and that means it's just faster and more secure, and hopefully more stable. So I'm really looking forward to that application of Web Assembly on the server side.

**Jerod Santo:** Yeah, what a fascinating turn of events that would be, if all of a sudden Web Assembly became the new Docker of our server-side things... Just - didn't see that one coming, you know? It turns out maybe that's the case. That's cool.

\[55:09\] One more point on Web Assembly before we move on is you say you don't think it's going to kill JavaScript. I think I'm with you on that... I think JavaScript developers are more concerned about "Well, is it going to water down the demand for JS devs if we can put C++ devs or Go devs or all these people not having to learn JavaScript?" It's not gonna kill the language, but is it going to maybe kill some of the demand which we're currently enjoying right now? If you're a good JavaScript engineer, you're probably gainfully employed, and in-demand. Do you think that that's a possibility, of just reducing demand?

**Shawn Wang:** I don't think so, but this is where the future can often surprise us. I primarily don't think so just because JavaScript is by itself easy to learn anyway. JavaScript already has a huge headstart; there's no reason for it to lose that headstart.

**Jerod Santo:** Plus, if I'm like a really awesome C++ developer, I'm probably gainfully employed doing some cool C++ stuff, right?

**Shawn Wang:** Exactly. \[laughs\]

**Jerod Santo:** Good point.

**Shawn Wang:** But still, I do keep an eye out... .NET developers have Blazer, which actually uses Web Assembly under the hood, for you to write .NET on the client. Dart developers have Flutter, which - every time I bring this up, the React Native people get really pissed off, and the Web Accessibility people get really pissed off, because Flutter Web is not particularly accessible. They render onto a canvas. But at the same time, there's a generational shift happening with Flutter, where you can really tell, the younger developers have really taken to it quite well, because they just don't have the same biases that we have in JavaScript. So that could be a thing.

The Rails developers are hanging in there, with Hotwire; the Phoenix developers have LiveView... There's all these sort of ways to write to the web if you don't wanna use JavaScript, and all of them have a decent claim at "Yeah, why should you be forced to learn JavaScript? This is a perfectly viable framework where you can write interactive applications... And what else do you need?"

**Jerod Santo:** Good question. Nick, any final thoughts or questions for Swyx before we let him go?

**Nick Nisi:** No, I think this is just a fascinating way to look at the past, present and future of the language, the platform, the ecosystem, and I'm really excited to see where it goes from here. To see if it really does die in 2035, too.

**Jerod Santo:** Well, it'll definitely die at the heat of the Universe, so...

**Nick Nisi:** Maybe, maybe. We don't know, maybe JavaScript is quantum, and it just exists beyond reality. \[laughter\]

**Shawn Wang:** Just some infinite loops and you're good.

**Nick Nisi:** Yeah. \[laughs\]

**Jerod Santo:** There you go. Can't stop. Won't stop. Alright, Swyx, where's the best place for people to connect with you on the interwebs?

**Shawn Wang:** You can find me on Twitter @swyx, or on my blog at swyx.io.

**Jerod Santo:** Awesome. Well, it's always a pleasure having you on. We'll definitely have you back, maybe when the fourth age starts... Oh, we'll have you back before then, but for this topic, maybe when the fourth stage starts or when the death happens, we'll have you back on to tell the whole tale. So thank you for listening... All the links to all the things I've been furiously jotting down - we've got Lydia Hallie's talk, we've got of course Swyx's writings, Gary Bernhard's "Birth and death of JavaScript", we've got that InfoWorld article, the JavaScript maintainers article... So all the things are in your show notes for further reading. We appreciate you listening, for Nick Nisi; I'm Jerod Santo, and this has been JS Party. We'll talk to you all next week.

**Outro:** \[58:22\]

**Horse JS:** The other thing I like about esbuild is that it's a static Go binary, so I feel more confident that I'll be able to get it to work in the future than with a tool written in JavaScript... Just because I understand the JavaScript ecosystem.
