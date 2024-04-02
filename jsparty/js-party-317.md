**Jerod Santo:** Hello, party people. I'm Jerod, your internet friend, and I'm joined today by my friends, Kball and Nick. What's up, guys?

**Nick Nisi:** Hoy-hoy.

**Kevin Ball:** I wish I had a call sign as cool as Nick, but yeah, excited to be here.

**Jerod Santo:** Excited to be here as well. Now, if you listened to the outro of our last episode, and you heard me say "Next up, we're going to have a debate episode with the whole panel", and you're wondering where it is... Well, half the panel got sick last week. So things happened, we couldn't record that one... It's still planned. But in the meantime, we figured, instead of leaving you totally hanging, we would leave you hanging out with us, to talk about news, to maybe play a surprise segment, and to just enjoy some JS Party time. Sound good?

**Nick Nisi:** I'm excited.

**Kevin Ball:** I mean, I like hanging out with you all. Hopefully, everyone else likes hanging out with us...

**Jerod Santo:** It's been a while since we've had this threesome, or this group of people together to hang out. I'm excited about it.

**Kevin Ball:** It's been since forever since it was a threesome, but yeah, this crew is good.

**Jerod Santo:** Crew is good. Well, there's some news that's good. There's also some news that's maybe bad, maybe good... I don't know. The thing that everybody's talking about, this week at least as we record, and last week as well, is Devin, the first AI software engineer, according to the makers of Devin, which is Cognition Labs, a new company which raised a series A led by Founders Fund, headed up by Scott Wu, who seems to be a very intelligent person, even from a young age, if you watched that video of him doing math very quickly, at ages when it seems like you shouldn't know math very quickly... And they got a demo out there on this new AI software engineer. So I could say more; I'll stop right there. You all have probably seen the demo, Kball and Nick, or at least heard about what's going on... And this is a new tool, which can start from scratch, and do some cool stuff. I'll just leave it there for now, and we can talk about the details.

**Kevin Ball:** I mean, if you're excited, you too can pay for the right to have a software engineer that can only fix one in seven of your tickets, and spin up lots of new ways for AWS to charge you money without your oversight.

**Jerod Santo:** Sounds like an intern. I'm just kidding. Sounds nice. And what are you referring to? Or is this some specific things that Devin's been up to?

**Kevin Ball:** So high level, there's a couple of things that I'm referring to here. So one is they're pumping up the market, "This is a standalone -- why get a coding assistant? Get something that can go and do your software." And they published some data on it, and it does do better than the state of the art in terms of tackling going from a GitHub issue, to "Okay, I'm gonna actually solve this \[unintelligible 00:03:50.05\] to happen." But the number they published, I think, was 13.86% of issues unresolved. So that's about one in seven. So you pointed out a list of issues, and it can independently go and solve one in seven. And first off, to me, I'm like "That is not an independent software developer." And furthermore, I find myself asking "If its success rate is one in seven, how do you know which one?" Are the other six those "It just got stuck"? Or has it submitted something broken? Because if it sets up something broken, that doesn't actually solve the issue, not only do you have it only actually solving one in seven, but you've added load, because you have to go and debug and figure out which things are broken. You have a whole bunch of additional load. So I think the marketing stance there is little over the top relative to what's being delivered.

The other thing - and this is around... I think a part of what they do is "Oh, it can spin up resources for you." And they showed this cool demo of "You point it at this thing and it allocates a bunch of different production resources for you." And the person who's handled DevOps in me before, and now the engineering leader who has to sign off on our Digital Ocean, or AWS, or Google Cloud or whatever expenditures you might have, looks at that and is terrified by "I'm gonna give an LLM, which is known for hallucination, which is..." These things are not -- you have to design an application... And I'm building applications \[unintelligible 00:05:24.16\] but you have to design around their unpredictability and their willingness to lie... And I'm going to give that raw access to spinning up resources in my cloud? Like, that sounds -- well, it sounds like something I would not sign up for, I'll say that.

**Jerod Santo:** Okay.

**Nick Nisi:** Kball, let he whose success rate at issues that is greater than one in seven cast the first stone...

**Jerod Santo:** Yeah, I was wondering what Nick's ratio is over there. One in seven sounds about the way I would do. I'd pull off the easiest one first. Does Devin know what the easy tickets look like? Because that's a skill right there.

**Nick Nisi:** \[06:00\] I'm over here counting on my fingers trying to see if I'm within that ratio...

**Jerod Santo:** \[laughs\]

**Kevin Ball:** But do you know when you fail? Or do you just throw out broken code and you're like "Yeah, here you go."

**Nick Nisi:** It's more of a question of "Do I know when I succeed?" I guess... Which is - yeah, same thing.

**Jerod Santo:** You think you've succeeded, until you find out later that actually you've failed? That's been my experience. Or you succeeded under the constraints that you put yourself under, right? Or that was actually specified in the ticket itself. But you actually failed at some other unnamed, unlisted constraints, that were unknown at the time, but are obviously clearly there, in production. And so in that context, you've failed. It's not easy. It's not easy to succeed in this world. Well, what about -- Kball, can't you point Devin at like a $5 a month DigitalOcean and say "Deploy to this?" Can't you cap your risk, I guess, on the DevOps side?

**Kevin Ball:** Probably. You probably can. And I do want -- so I'm taking a hard skeptic stance on particularly the claim that this is an AI software engineer. Like "Don't hire a person, use this thing."

**Jerod Santo:** And this is their claim. So I think it's fair for you to be that harsh on them, because they say "Meet Devin, the world's first fully autonomous AI software engineer." That's a very bold claim. So I think it's fair that you're being that harsh. Go ahead.

**Kevin Ball:** Yes. They're showing some cool stuff. It looks like a pretty interesting tool to put in the hands of someone who knows what they're doing, and is able to validate it, and is able to say "Okay, go and solve this relatively well-constrained problem, where I can easily validate the correctness of your output. Go at the sandbox, where I know that you're not spinning up massive amounts of resources in a way that I'm going to regret", or even "Go at this non sandbox situation, but I have the knowledge to check what you did, look at the logs and be like "Yeah, that's okay." Those are really cool things. That could be really valuable. That could dramatically increase somebody's productivity. And those are so far from being something that I would trust independently to replace a software developer that they're not even in the same country; maybe not even in the same world. These are just completely different claims.

**Nick Nisi:** Yeah. I think that the sensationalism of this comes from not what it can do now, but what it represents, and the progress that it's made when comparing to other things, like - whatever it was comparing that 13% to, to other AI chat things that can do things. It's way better than all of those. It still sucks compared to a human, but it's made monumental progress in terms of AI. And I guess the question is, "Does that continue?" Can it get further than that? Or will it reach some kind of limit? And then the other piece of it, I think, just from a marketing thing - and I'll be honest, the only thing I've seen on it really is a Fireship video - is that it's already doing some work on Upwork. So in a way, that's a marketing claim, that it competes against real humans for jobs.

**Jerod Santo:** Yes. Truth. According to them. I haven't confirmed it, but what you said is true, that they say that, yes.

**Kevin Ball:** So this is a struggle with all of the LLM world right now, and all the AI world... Because on the one hand, we have been in a place where we're in the rapid part of an S curve. There have been some very rapid advancements in the core capabilities of these things. And they are super-freaking cool. Like, really cool. And also, they have a lot of limitations. A lot of those limitations are baked into the architecture that's being used. And so you get kind of a situation where there's a bunch of people doing really cool stuff with this, and trying to figure out what it's good for... But it demos way better than it does anything reliably in production. Because you can get a really cool outcome 40% of the time, in some situations 70% of the time... And like you show that, and people are like "Oh my gosh, this is gonna take over the world!" And I would not trust a, for example, AI software engineer, even that could handle 70% of my tickets, but 30% of the time spins up millions of dollars of cost for me, right? Or like other things.

\[10:16\] And once again, I'm not trying to take away from the technology, but I don't think these hyperbolic claims actually serve anyone, except for getting attention. They get attention - okay, great. And you're gonna get a whole bunch of people who buy this thing are disappointed. If it cost them a bunch of money, they'll sue your ass off. I'm like "Why would you do that to yourself?"

**Jerod Santo:** It's somewhat similar to generative AI in the image - let's just stick with the static image world - where everywhere you see is impressive results... And it'd be like "This new Midjourney 7 is off the charts amazing. Here's nine examples that will blow your mind." Right? And if you click through on that, they're all going to be very impressive; those are amazing things. But then you have to stop and think "Well, Midjourney didn't create nine examples that blew my mind. Midjourney probably created 40, 50, maybe 500 examples, and then you, human, decided which ones were amazing, and you cherry-picked those out as the examples." And that's a great team work, guys... Right? Computers plus humans equals better results. And so there's the cherry pick, and that's what code review on these things will be, that's what happens when you tell Copilot "No, I do not want that function." Right? It's all, as HipsterBrown calls it in the chat room, "Human in the loop", and that's exactly what is necessary. And I think the reason why you call them hyperbolic claims, Kball, is because they're saying it's a fully autonomous AI software engineer. Human out of the loop. Let it rip! And maybe fans of the bear will like to say let it rip, but those of us who aren't fans of Devin are thinking "Let's not let it rip too much, because it might just tear the whole thing down." Now, I'm being hyperbolic. Nick, you're nodding along... Do you agree with me?

**Nick Nisi:** Somewhat, yeah. Yeah, it's humans who are deciding what is good out of that, and kind of helping to train that going forward. But I was trying to think and trying to relate this to another article I saw, that wasn't about Devin specifically, but it was about like prompt engineering as a "profession" being taken over already by AI, because an AI can iterate and more quickly come up with a way to answer the questions that you want, by appending exactly what it wants to hear at the end of a string. And I think the example that I heard from that was like "We want you to answer this question", and the AI is "incentivized" to answer it a little bit better if you put it into a scenario that it likes. So the AI is Captain Kirk on the Enterprise, and it has to answer this question to save a planet from whatever. And the question could be "What's two plus two?", or something really simple. And by putting in all of these extra prompt words that the AI is coming up with on its own, it's making better results overall. And I'm just wondering how that marries to the idea of humans being the ones who curate the good ideas that come out of it.

**Jerod Santo:** Well, prompt engineering, I've been convinced by Swyx that it's a code smell. At first, I was convinced this is the new thing that everybody needs to learn. And I think it's just a leaky abstraction that's we're currently dealing with as humans, because the tooling is not good enough, so that we have to engineer the prompts. I mean, Google's search box is prompt engineering. Knowing how to Google -- it's the exact same thing, it's just way harder, and it's like way more magical now to tell it the magical incantations to get the best results back out. And so the fact that it knows what results are better to me is not intelligence or anything, it's just, we just need that to go away.

\[14:00\] And I think Devin is actually an example of where they've productized and hidden a lot of the innards that we've currently been exposed to, in order to make the tool work better than it would for an inexperienced user to use it. Like, they've actually turned it into a product. And I think that's great. I think it's one step on a long line of iterative improvements that will make it so that prompt engineering -- I mean, you're just going to basically talk to it in layman's terms, and it will know how to feed itself the correct prompt, so to speak, in order to get the goodness out. But I don't know... Kball, back to you.

**Kevin Ball:** Yeah. I mean, I think -- so high level on all this AI stuff is there's really cool stuff there. We're figuring out how to use it, and the current state is clearly intermediate. However, the thing I want to keep coming back to with this is there are things that it's like "Okay, this technology is immature, and we're going to evolve around it", and figuring out how we handle prompts, and managing prompts, and what's generating them, and whatever - that fits well in that bucket. And there are things that are fundamental pieces of the way the technology is designed. LLMs, machine learning models in general, are statistical, probabilistic. They're very different than most things you think about in software, where you're trying to make something that is logical, consistent... Like, you could put it A in, you get B out. And that is not there with these things.

And so you can design applications around that, and there are things that you can do to just sort of pin that down, to add validation that is outside of the LLM, and do other things, and maybe Devin is doing that... But I think the more we start looking at these sort of places that require judgment, places that require precision, places that - like, if you just make some random s\*\*t up, it can cause a lot of problems. Like, those are not actually -- like, there's a fundamental thing about what the technology does, that means it's not necessarily going to be a good building block for that. And so making hyperbolic promises about where it's going to develop, that depend on it being a fundamentally different technology than what it is... I feel like they are setting yourself up for a lot of heartbreak.

**Jerod Santo:** What about the job market? Do you think it's fundamentally affected by tools like Devin as they progress over the next three to five years? Because we're not talking about humans out of the loop. I think we're all in agreement here that that's not feasible, or smart, at least, in today's technology plateau of LLMs... But less humans in the loop. That seems like it's very feasible if these tools continue to iterate and even just not have revolution, but evolutionary advancements from here.

**Nick Nisi:** Yeah, if it makes me three to five times faster, do we need three to five times fewer engineers...?

**Kevin Ball:** Yeah. So this is a technology that has the potential to dramatically impact the productivity of software engineers. And I think there's a couple of different things around that, as we think -- so short-term, that can create some disruption. Short-term, that means that a company that had been running on, say, five engineers, and might have needed to hire and expand to 15, now they don't have to expand nearly as soon, and things like that.

So I think there is the potential for relatively short-term disruption. I will say, both -- the history of economics broadly and software in particular is that every time we make it easier to code, we discover there a whole world now that we can address and build software around, that we couldn't before. So if, for example -- and this, actually... There's a particular example of this that I think is interesting to dive into. So one of the big economic challenges in the tech industry in the last four or five years is that we had these massive tech companies, with incredibly high revenue per employee: Google Meta, Netflix... The FAANGs, mostly. And so they were able to set the salary bar that was super-high; they were paying ridiculous amounts of money - that's a technical term, ridiculous - for software engineers.

\[18:09\] And then when we had very low interest rates, and a ton of VC money flowing into the industry, there were lots of companies whose fundamental business economics do not support that level of salary per software engineer, who were nevertheless paying that amount of salary per software engineer based on VC capital. And sort of this thesis that "Okay, we'll be able to scale out of this, and we'll get whatever." And I think that caused a lot of distortions and problems in the field.

Now, if suddenly software engineers are three to five times more productive, the range of businesses that could use software, but previously could not afford to compete with the FAANGs etc. of the world - there's a whole set of business models in there that become viable, because it's that much cheaper to develop software. And so I can imagine this actually dramatically expanding the number of viable, either software businesses, or businesses that are non-tech, but would like to include software, or could have custom software, and dramatically expanding the number of those that haven't.

So long-term I don't think it's a negative impact on the software engineering career path. I think that what it means to be a software engineer looks a little bit different when you have different types of tooling. That has been true as long as I've been around. JavaScript land - I remember when jQuery was a revelation. Oh, my gosh, this is gonna make me much more productive. It did make me so much more productive, all these other different things. And now the level of tooling that we have there that supports our productivity building things on the frontend is astronomical. And has that taken away from the number of people running JavaScript?

**Jerod Santo:** Speaking of astro-nomical, Astro has a new database. Moving on to our next story here... AstroDB - have you guys seen this? ...just recently announced AstroDB is a fully-managed SQL database designed exclusively for Astro. This appears to be a paid product, and a way that the Astro team will be supporting their work on the otherwise all open sourcy goodness Astro Toolkit... And it looks kind of cool. Nick, TypeScript support built right in? You're an Astro user, aren't you? Or maybe that was just Svelte directly... You're using Astro. Right?

**Nick Nisi:** I am using Astro, yeah.

**Jerod Santo:** Alright. Did you see this? Does this interest you? There's obviously -- it's vendored, so it's a vendor thing... I don't know what's under the hood, I couldn't quite find that, in terms of what are they building on. Maybe it doesn't matter too much. But what are your thoughts on AstroDB?

**Nick Nisi:** It's cool, I think. Probably not for me and what I use Astro for, because I pretty much just host Markdown files with it...

**Jerod Santo:** You don't store your Markdown in a database? Come on, shove it in there, man. Give them a customer.

**Nick Nisi:** Uh, there's a reason I didn't go to WordPress...

**Jerod Santo:** \[laughs\]

**Nick Nisi:** But for those that do have that need, I think that it's very compelling. And it makes it so much more, because it can -- if 99% of your stuff is Markdown or static, it's still very much static first, or it can be... And then if you need like one thing that uses this, now you don't have to reach out to a third party thing to do it. You can do it all in-house.

**Jerod Santo:** Right. So if you wanted to add comments to your otherwise static blog, you could store those in AstroDB. Now, does your blog have comments on it, Nick?

**Nick Nisi:** It does not...

**Jerod Santo:** You don't want anybody to comment on your blog posts?

**Nick Nisi:** Well, the last time I tried that, I didn't know PHP well enough...

**Jerod Santo:** Tell us more... \[laughs\] Did you end up with some spam on your blog?

**Nick Nisi:** The way that I implemented it was I didn't want to have a database, and so instead of letting you comment and throwing into a database, you would submit the comment form and it would append to the end of the PHP file that you were on with that comment... And that was it.

**Jerod Santo:** \[22:07\] Whaat...? Okay...

**Nick Nisi:** This was like college... We were all crazy...

**Jerod Santo:** This was back in 2023... \[laughter\] That's amazing.

**Kevin Ball:** Did you call yourself Devin?

**Nick Nisi:** I should have.

**Jerod Santo:** That's like a 13% success ratio right there... You just hit the other side of it.

**Nick Nisi:** All I'll say is it worked. It worked fine for 2007.

**Jerod Santo:** Kball, your thoughts on AstroDB.

**Kevin Ball:** I mean, I don't have a strong particular thought on AstroDB itself... I feel like this pattern of open source web framework on hosted services is one that we've seen run around a lot, and I don't know that we've ever seen anybody be that successful with it, or anything... So I'm a little skeptical of the business model, and this being the business. But I don't have a great solution for how you support frontend stuff. Backend open source projects often are able to do an open core with deep business logic that is vertical-specific that they upsell to, and they sell something there, or they sell hosting, like ElasticSearch has done. There's a bunch of other people who have done this well on the backend side.

I've seen a lot of frontend folks... I mean, Gatsby did this, all these other different people, where they're like "Here's this magical frontend framework, and we're gonna monetize it by everyone who builds something with our frontend needs these services, so we're gonna build a custom service for our thing, and you're gonna buy it." And I'm like, I haven't seen any of them actually work from a business standpoint. So I'm just kind of skeptical on the likelihood of success...

**Jerod Santo:** Gatsby's was even a little bit weirder, because it wasn't just that, but it was like, "As your site grows, Gatsby gets slow. If you pay us, we'll make Gatsby faster." That was even weirder. So it was like, it should already be just the way Gatsby works... But it required this very complicated caching solution that was all in their proprietary code, which would just make Gatsby work the way it was supposed to, I guess, in the first place... Anyways, it was a strange thing.

A lot of these I think it's too early to tell. Deno KV is out there, Deno is still alive and well, but are they making money off of it? Who knows...? Next is a little bit different, the way that its relationship is with Vercel, in terms of it not being -- maybe it's the same. I don't know, it seems a little bit different. It's kind of like the cart and the horse, which one came first. Or that's the chicken and the egg. I don't know, I'm mixing all my metaphors. But I tend to agree. I wonder how attractive this is to enough people for it to move the needle, I guess, for Fred and the Astro team... And it seems like it's an experiment. And sometimes you have to experiment when you're trying to find ways for monetizing that makes sense. And so I wish them luck with this. I would tend to just reach for something that's just open source, and maybe I sign up for a service for it, like in terms of a database. But I get it, where it's batteries included, it's like tightly integrated with Astro if you're already using Astro, it's the Easy button, generous free tier, so I can kind of get started with no money down... The way they're planning on charging is based on storage, so it does do kind of that dynamic scaling, to where when you're not using it, it scales down, serverless style, like Neon and others... So that's cool. But then they charge you per gigabyte of storage, basically. That's the idea. So in Nick's case, if he was using it, and all these hackers came by on his PHP script, and just shoved comments into his AstroDB like crazy, he'd be paying out the wazoo to these folks. But if you're a better programmer than Nick, you might be able to avoid that fate.

**Nick Nisi:** Hire Devin.

**Jerod Santo:** There you go. Alright, so AstrDB in the news... Also in the news --

**Kevin Ball:** \[26:04\] Yeah, except Devin won't know how to use AstroDB, because it's new. Like, this is the other problem with any LLM-driven software is like -- I've experimented with a variety of the code completion tools, and they... I mean, this is actually probably more of a solvable problem, but generally speaking, at least out of the box, they are really crap at writing code for anything that's new software, that has a new API.

**Jerod Santo:** Devin solves this.

**Nick Nisi:** Did they?

**Jerod Santo:** Devin solves this. I mean, according to them, they did. I haven't tried this, but it says "Devin can train and fine-tune its own AI models." So you give it something to research, and it will go back and fine-tune a model with the research. Like, you give it a repo, or some docs, and according to this bullet point, it will do that. So I agree with you, because I write a lot of Elixir, and it's just most of the LLMs are bad at Elixir. ChatGPT is... Copilot I don't use, but GitHub's Bard was... I haven't tried Gemini. But I think that there -- again, that's why I say, they're productizing it enough, where they can actually take these incremental improvements and say "Okay, we're gonna get the data that you need into this, even though it's past the training deadline, or whatever." Look at me, I'm looking like a Devin sales pitch guy over here... This episode is not brought to you by Cognition Labs. I am on the waiting list though, because I want to just see -- I want to push this thing to its limits and see what it can actually do.

**Kevin Ball:** You too want to blow out your AWS bill, or wherever you're hosting...

**Jerod Santo:** I'm not gonna deploy anything this thing writes. I don't deploy most of the stuff I write. \[laughs\]

**Kevin Ball:** Does it cripple it if you tell it "Okay, you can't deploy resources", or whatever? Because their demo that I saw was all about "Oh, yeah, spin up this environment for this thing."

**Jerod Santo:** Yeah, I just would tell it not to do that, I guess. I would just be like "Build a thing, and then I'll figure out how to deploy it." And I probably never will, because that's what I do with most stuff. I just leave it on my hard drive, for nobody ever...

**Break:** \[28:07\]

**Jerod Santo:** Speaking of Deno, introducing the JavaScript Registry. This was March 1st, so a little bit dated; three weeks back. Ryan Dahl, Luca Casonato and team are trying to create a new JavaScript Registry. Jsr.io, now in public beta. This is not supposed to be a replacement for npm, or because npm seems particularly bad, or anything like that. It's supposed to be just new, for a modern age. What do you guys think about that?

**Nick Nisi:** Are you sure you want to talk about this?

**Jerod Santo:** What?

**Nick Nisi:** JSR is designed for TypeScript...!

**Jerod Santo:** Oh. \[laughter\] I was like, "Well, I brought it up, so yeah..." I should have seen that coming. No, I want you to talk about it. Go ahead, Nick.

**Nick Nisi:** It looks cool. I mean, what's the main problem that they're trying to solve? Is it the ESM problem that exists in Node and npm right now?

**Jerod Santo:** The ESM problem, TypeScript out of the box, and all these multiple runtimes... I don't know.

**Nick Nisi:** Oh, yeah.

**Jerod Santo:** Plus, it's supposed to be very cheap to run, so they're saying that is not going to be a situation like npm got themselves into, where they eventually had to be bought out by benevolent dictators, a.k.a. GitHub, which became Microsoft, and basically bankrolled by a large, big tech. The idea here is that shouldn't happen. It's designed to be very cheap to run. And Deno, the company, which is a very small company compared to Microsoft, even compared to many other companies, can afford to run it like in perpetuity, because of the way they have designed this... Versus npm, which was very, very expensive as a package registry. So those are the reasons, I guess, in broad strokes...

**Nick Nisi:** Yeah, I think that that's awesome. And it just goes to show that when those packages, that are so important, or the pieces of the ecosystem are so important, and they get bought out by these big companies, and then innovation stops - that's not going to stop the ecosystem from evolving to compensate for that.

**Kevin Ball:** Yeah, I'm trying to understand, because I haven't looked deeply into them... But I think the core problem that Nick was highlighting, of like "What is the problem they're solving?" is a key question to ask. And I think it's a -- like, what is there the problem they're solving for developers. I as an advocate of not having everything owned by the same corporate overlords, I love the idea that maybe there's something that's owned by a different corporate overlord, or even something that's cheap enough that a community could run it without having a corporate overlord... But I also feel like we're developers, we're lazy. I'm not going to stop supporting npm because -- if I expect people to use my code, they're probably gonna use npm, so now I have to do two. So why would I do this one instead of just that one?

**Jerod Santo:** So they have a page called Why JSR. And on that page, they say "Why build JSR when npm exists? Because the world today is not the same as it was when npm was originally introduced. ECMAScript modules have arrived as a standard. The web platform has now adopted ESM as the module format of choice, superseding common JS. There are more JavaScript runtimes in just Node and browsers. With the emergence of Deno, Bun, Workerd, and other JS environments, a Node-centric package registry no longer makes sense for the entire ecosystem." And then the last one, which seems to be at least for users maybe the most exciting, is like "TypeScript has emerged as a de facto standard", and they are TypeScript-first, and so authoring in pure TypeScript, cross-compiling, stuff like this really makes it simple to publish to if everything's in TypeScript land. Those are the three major bullet points.

\[34:12\] And then they say, "In addition, these shifting requirements are also opportunities to improve on the developer experience, performance, reliability and security of npm. JSR was created to address these new requirements, and take on these opportunities." And then they go on and on from there. But I think those are all good reasons, but I'm kind of with you guys that like none of them are amazing enough to maybe pull me over there... Unless it's just so easy to do both, or maybe I'm just publishing for my team, or... Maybe there are circumstances, especially if you're in a TypeScript world, where you might do that... But I think it's cool to have alternatives, and to have people trying to innovate in this space, and not have us all basically just bellying up to the bar that is microsoft.com for our packages all the time. Because I mean, at the end of the day, Microsoft owns npm now.

**Nick Nisi:** They own JavaScript.

**Jerod Santo:** They own TypeScript, that's for sure.

**Kevin Ball:** One other thing I'm trying to understand, that I am not necessarily seeing from here... So if I go into a project, and they're using JSR for some of their packages, and then they want to add a package that is not on JSR, it's only on npm, do I now have to support -- does that project have to support two package managers, and I've gotta deal with... I mean, in mixed language projects we do deal with that; we have npm stuff for our JavaScript, and we have a gem file for our Ruby, or a cargo file for our Rust, or whatever it is... That's not a massive thing. But also, fundamentally, I feel like developers are lazy. That's part of why we love automating things. There will be some people who are willing to do that headache, but most languages that have a registry, have a registry. And there's a reason for that.

**Jerod Santo:** Well, do you remember the Ruby gems days?

**Nick Nisi:** Nope.

**Jerod Santo:** No? So I'm trying to remember the actors... But there was a de facto registry for Ruby gems. I don't believe it was Rubygems.org... And it was maintained by a collective, and some corporate interests, but it was pretty much just to support the Ruby community. And yet, it was the only one. Ruby Forge maybe? I don't know, I'm going way back, a couple decades. And it stagnated, and it just did its thing, but it was slow, and it wasn't updated, and blah, blah, blah. There were all these reasons why it was very painful to publish to. And so then along came another project out of, I think, Thoughtbot. I can't remember the actors, like I said, so apologies to those who were influential in this way, because they actually just changed the community by saying "Okay, this one's gotten old and stagnant. Here's new ideas, here's modern. We don't need any of that stuff. Let's stand up an alternative. Put this in your gem file", which would be the same as like "Point your pkg.json here, instead of there", whatever... "And use this one instead, and we'll just mirror all this stuff over, and start publishing to that." And it actually took over. It completely took over.

**Kevin Ball:** But you point to a key thing - they mirrored the stuff.

**Jerod Santo:** Well, JSR, according to them, is backwards-compatible, and it interoperates with npm-based projects and packages. So you can use JSR packages in any runtime environment that uses a Node modules folder, and JSR modules can import dependencies from npm. So I think they're trying to make that as smooth as you can possibly do.

**Kevin Ball:** Okay, because that's what I was trying to get at. If I can install anything that's on npm, and I can go point to JSR and it'll proxy things through for me, I feel fine about that. I got the impression they were imposing a higher level of sort of requirement or specificity, because they're like "Okay, it all has to be TypeScript. It's all got to be -- it only supports ES Modules." So then how do I deal with a package that doesn't? If I have to deal with both, I end up in this place where I'm like "Why would I do that, if I could just go to npm?" But if they're able to proxy through stuff, so that I can just point it at JSR, get the hot new goodness where it exists, and it drops back to npm without them, then they have a possibility of actually taking this over.

**Nick Nisi:** \[38:21\] I do think -- yeah, you can do that. But it looks like if I just wanted to use a JSR package from npm, I would just have to update my npmrc file to add JSR as a registry... Which is simple enough, but it is one extra step. And an npmrc is not something that's typically in a project, so then you have to disseminate the information to a team, that they have to do this in order to pull this one package... And then like all of the other benefits of it - it goes back to your chicken and the wheel problem, Jerod...

**Jerod Santo:** Haha...

**Nick Nisi:** ...if I'm publishing a package - yes, it seems like it would make things a heck of a lot simpler using JSR, because I wouldn't have to worry about compiling my TypeScript, supplying the types for it, and using ESM properly. It would just kind of like handle all of that. But if I'm publishing to JSR and nobody's using it, and there's that barrier to entry... Especially if I'm starting off a new, somewhat unknown project - well, that just immediately signaled that it's not very relevant, because it's not in npm, where everybody is.

**Jerod Santo:** Right.

**Nick Nisi:** Or do you have to set up two things, so then you're not --

**Jerod Santo:** Then you're not getting the benefits.

**Nick Nisi:** Yeah.

**Jerod Santo:** Right. Yeah, just like anything new, you need some early adopters to really become champions. Like, if Sindre Sorhus was like "You know what? JSR is cool. I'm just gonna publish on JSR. I don't care if people use my packages, because I'm already like the JS package person of the world... I'm just gonna publish only on JSR from now on." Like, that would get people to start using it. I mean, not that alone, but people like him using it, because it's so much easier, because they don't care about package downloads all that much, because they don't -- whatever reasons. Cool kids, so to speak. If they start to publish to JSR, you could start to see a sea change. And that's what happened in the Ruby community, is all of a sudden people quit pushing to the old one, and they're like "Now all my updates are over here on Ruby Gems", or Ruby whatever it was. And people were like "Oh, I guess I'd better switch it in my npmrc file, and go ahead and start slurping those down", and then eventually, you're like "Why am I using npm again? Because JSR has everything. I'll just use JSR all the time as a person who's download and installing the packages." And so it kind of swells from there. But yeah, that's a tough thing to get done. I mean, that's not easy, to move an ecosystem like that... Especially one as big as the JavaScript world.

**Nick Nisi:** And that's not to say that I don't think that they should have done it. I'm really glad that they did, and that they're pushing this forward... When all of these things come out -- when Bun came out, I said "I hope that this pushes Node forward."

**Jerod Santo:** Right.

**Nick Nisi:** And in this case, I hope it pushes npm forward... Because everybody wins in that case.

**Jerod Santo:** Yeah, agreed. One last point on this, which I think is admirable, and I think earns them some goodwill, is they did not brand it like Deno Package Registry. It's jsr.io. It's not under the Deno GitHub organization. It has its own GitHub organization. They're trying to make this - it seems - as a real standalone open source project that yes, they are funding and starting, but they want other people to also get involved and invest... And I think for me at least, that gives me some goodwill about their effort, versus trying to be a hostile takeover of npm for Deno the company. Alright, let's talk about the next thing, Tailwind 4. Adam Wathan is open sourcing their progress on Tailwind CSS 4.0. Tell us more, whoever put this in the doc...

**Nick Nisi:** That was me!

**Jerod Santo:** Alright, Nick, tell us more.

**Nick Nisi:** \[41:40\] I love this Tailwind Kool Aid. It's so good! \[laughter\] With this, with Tailwind 4, it's like a complete rewrite or rethinking of how to use the Tailwind that we all know and love, in that pretty much everything stays the same, except you don't really need a Tailwind config file anymore. Instead of having to define everything as like "Here's this JSON-looking structure in JavaScript that defines what colors I'm using for my themes, what fonts, here's some weird additional things where I'm setting specific gradients, or things like that", all of these weird CSS things that you're bringing into JavaScript to implement for your Tailwind config, which will then output CSS, they're just like "Why don't we just write that all in CSS instead?" So now you can just define everything as CSS variables, which is awesome, because then, if you want to get access to those outside of your Tailwind, you can just access those variables, and they're there. So you can access those variables from JavaScript, you can access them from other CSS that you might write, that's not Tailwind, and it can just be the one-stop shop that is much simpler for everything. So I think it's a really cool experiment, and I hope that it becomes the new standard for Tailwind.

**Kevin Ball:** So Tailwind is trying to go back to being CSS-like?

**Nick Nisi:** \[laughs\]

**Kevin Ball:** Sorry --

**Jerod Santo:** Sick burn, Kball. Sick burn.

**Kevin Ball:** I use Tailwind, some... I think they originally had this idea that you would do these sets of classes, and then you would eventually compile down "Here's the set that go together", and have component styles, and things like that. I, to this day -- I don't see what Tailwind gives you, except a lack of flexibility beyond having sort of standards and a set of variables that you use for spacing and colors. Like, it's really valuable to have a set of norms, and to have your design system encapsulated in CSS primitives. And prototyping with styles and classes, I guess, if you really want to... But i don't know, I've never drank the Kool Aid. I've tried programming in it, it always feels more awkward, and less -- like, I consistently find myself wanting to fix the CSS in a way that it's really hard to do in Tailwind. And then you end up with this massive, ugly HTML, with 30 classes or whatever, when you're trying to do anything responsive and complex... Like, I still don't -- convince me, because everybody loves this thing, and I just don't see the appeal. \[laughter\]

**Jerod Santo:** It's gonna be a new segment, Convince Kball Something's Cool, you know?

**Nick Nisi:** Yes, that'd be the best segment.

**Jerod Santo:** That would be good.

**Nick Nisi:** Well, let me try. The number one thing that I just love about Tailwind is I don't understand the appeal of CSS-in-JS, at any level, because I don't like having my CSS external to where I'm using it. Because then I either have to open the same file in two splits, so I can see "Here's the CSS, and then here's where I'm actually applying the CSS..." I'd rather just have it all in-line. And the beauty of Tailwind - I have not run into anything that I can't do with just pretty much the vanilla Tailwind classes... Minus some gradient stuff that I added custom to my Tailwind config. But the beauty of it is when I am working on a work project that is using Tailwind, I've started building up this muscle memory of all of the class names, and how I would use them. And when I go work on personal stuff that's also using Tailwind, exact same thing. I'm not thinking "Oh, what do we call this component over here?" No, it's just whatever. I just have those Tailwind classes, and I use them. And then to manage those things, the way longer list of classes, there's really super-simple utilities... One that we've talked about on this show before called class variance authority. That is really nice in being able to say "Here's a long list of Tailwind classes that you're going to apply. Oh, and then in some cases, you're going to conditionally apply these as well." And there's like no additional logic that you have to add to that; you don't have to test if/else logic, because it's all handled by that, and you just pass in the properties, and it just takes it from there. So it's a really cool way to solve this problem... And then to only think about CSS in a Tailwind way, which is just CSS, means that it's super-portable between every other project. And that's why I love it.

**Kevin Ball:** \[46:02\] The portability argument makes sense to me. And that is the value of open source frameworks in general, if you get everybody on one. That completely makes sense.

**Nick Nisi:** You also get this big benefit of like -- if I'm doing a code review and I'm looking at your code, and this is a project where I'm accustomed to seeing these CSS-in-JS blocks everywhere, it's much easier to let sneak in little things, like "Oh, you know what, I'm gonna have this as a 17-pixel padding, for some arbitrary reason here. And this is gonna use a hex color here." Whereas in Tailwind, anything that is not like explicitly defined by the config is wrapped in square brackets, so it like immediately stands out to me as "Hey, why are you doing something custom here?"

**Kevin Ball:** Oh, yeah. I mean, firmly, you need those standards, and you should only be using variables, or very big comments, "Why is this different, for some reason?" Yeah, that makes total sense. Okay, the portability argument kind of makes sense to me, because --

**Jerod Santo:** Yes...! You win, Nick.

**Kevin Ball:** ...if the industry is standardized on this, which I still think -- I think it's a really ugly solution to standardize on. But if it's standardized on it, you do get a lot of benefits from standardization. And as I said, I do write -- I work on an app that uses Tailwind, and I do write stuff that uses Tailwind classes, and it's fine... But there's so much excitement. I'm like -- so CVA is cool. I love CVA. It's not Tailwind-specific in the slightest... Like, it's \[unintelligible 00:47:27.06\] about classes. So okay. Yes, I could see how it helps with Tailwind, more because you're dealing with a heck of a lot more classes... You've shot yourself in the foot, and now you can bandage it with this really cool library. But... Okay, portability - great. But why are you excited about it? Like, it's so \*bleep\* ugly.

**Jerod Santo:** Whoa, whoa, whoa... I might be pulling my bleep on you, man... Come on. Nick, answer the question. If you can get this one right, you win.

**Nick Nisi:** Well, beauty is in the eye of the beholder. It's all I can say, I guess...

**Jerod Santo:** Terrible answer. \[laughs\]

**Kevin Ball:** Okay, so those HTML strings, with 40 classes, that is beautiful?

**Nick Nisi:** Totally. If it's unwieldy, you can hide that away. Just in the same way that I would throw a block of CSS-in-JS up somewhere else. I can hide it completely, but I also know that I'm working in these standards. And then there's other tools, like the language server plugin, and there's ESLint or Prettier plugins for it, that will sort the classes in particular ways. So it's really easy to always find -- if you have a long list of classes, it's always going to be in this order, because it'll automatically get sorted. And the language server will help you autocomplete those, so that as you're learning all of the class names, you don't have to constantly be looking up the reference.

**Kevin Ball:** I guess, yeah. Just -- well-done CSS is so beautiful, and this is like... You know that picture of like the picture before and after the person comes and muddies all over it? That's how I feel about Tailwind.

**Nick Nisi:** But that's how I feel about regular CSS.

**Jerod Santo:** Yeah, regular CSS generally becomes an append-only log of rules that just continues to grow, and is never pruned and maintained.

**Kevin Ball:** If you were working in an environment where that is your CSS exposure, use Tailwind. I'm all over that.

**Jerod Santo:** That's most environments.

**Kevin Ball:** I guess that is where the mind shift maybe is, or why I'm coming at this from a different environment, of like having gone through building out one of these CSS frameworks, go into the experts understanding how to do it, working in projects that have really well-designed CSS... There is an incredible beauty and logic and structure to it that is very different than every other -- like, it's very different than the other stuff you do as a programmer.

**Nick Nisi:** Why couldn't they do the same thing with Tailwind classes? There's nothing you can't do with it.

**Jerod Santo:** Good rebuttal. Good point.

**Kevin Ball:** I mean, there's no abstraction, right?

**Nick Nisi:** There is. I create a component that does things this way, and it's wrapping all of those horrible classes.

**Kevin Ball:** \[50:02\] And your abstraction is all in the logical layer of the components, and not in the visual layer. Right? This is a good point, because I think fundamentally -- so the way that things get structured visually is different than the way things get structured in code. But the gap that I'm seeing - it's as if you were writing your entire program with no class or module abstractions, right? You just have a flat list of functions that you use everywhere, and then you do linear stuff. You could do that, and it can be straightforward, and if you've got a well standardized list of functions, that's okay, and it just feels ugly compared to a well-abstracted piece of software. And here all the abstraction ends up in the JavaScript components, which - okay, that's a solution. Right? You can do that. But...

**Jerod Santo:** Well, this segment of Convince Kball Something is Cool, brought to you by Tailwind 4 and Nick Nisi... Partial success. I'll give you the noise. \[partial success alert\] There you go, Nick. You partially succeed.

**Nick Nisi:** Try my luck with TypeScript and Jerod now. \[laughter\]

**Kevin Ball:** Yeah, I'm on the TypeScript train, but...

**Jerod Santo:** I'm unconvinceable, because I have determined myself to be unconvinceable. Our last bit of news today, Angular is merging with Wiz... To which I say, "What's Wiz?!" Kball?

**Kevin Ball:** Yeah, I had that same reaction when I saw this fly by... So I went and looked, and there's a keynote at ng-conf, and stuff... So apparently - and I'm saying this having learned this two hours ago - Wiz is an internal Google JavaScript framework, highly focused on performance, and it's what's used for things like Google search, and YouTube, and some of these other megaplatforms, where they're trying to serve billions of people and be very, very fast. And as we have, I think, discussed in actually several episodes recently, Angular, while evolving rapidly now, has not been historically known for being very fast, but they are very full-featured, full-stack framework that allows you to do lots and lots of different things. And apparently, these two teams, that are mostly -- Angular is open source, and Wiz has been proprietary or private to Google... These two teams, which both essentially live within Google, have been talking and discovering that Wiz has been wanting more and more features and functionality, and Angular has been wanting to get more and more performant... So the teams are now collaborating to try to bring these things together, and bridge the gap.

And apparently, the first initial surface area for this was the new Angular Signals work, which we went into in a deep-dive a month or two ago, with the team who did it... And that work was done in such a way that it can be used in both of these frameworks, which are not yet merged, but are like kind of growing together. And so the keynote was announcing that they've rolled out a bunch of updates to YouTube. The Wiz implementation there is now built on top of this Signals work that was done by the Angular core team, but is now working in both frameworks.

**Jerod Santo:** Well, that's a relief, because I thought Angular was merging with the 1978 movie adaptation of The Wizard of Oz, that tries to capture the African American experience, starring Michael Jackson.

**Kevin Ball:** I have never heard of this.

**Jerod Santo:** You've never heard of The Wiz? Come on, Diana Ross, Michael Jackson? Musical, based on some sort of a Broadway play?

**Kevin Ball:** I find it on Google... That is interesting.

**Jerod Santo:** Nick, you've seen The Wiz, right?

\[53:31\]

*Come on, Dorothy...! Come on...! Wooh! Wooh...!*

**Nick Nisi:** I sure haven't.

**Jerod Santo:** Okay, alright. That one crashed and burned. Do you have anything to say about this merger, Nick?

**Nick Nisi:** I'm very excited to see the collaboration between a project I haven't used in a long time and a project I've never heard of... And I look forward to their bright future.

**Jerod Santo:** \[laughs\]

**Break:** \[54:03\]

**Jerod Santo:** Now time for our surprise segment. It's a mini-game of Headlies. Headlies mini game. We've got three rounds. Kball versus Nick. Here is your first headline. "A woman wins $3.8 million verdict after SWAT team searches wrong home based on Find My iPhone app." Do you guys want to hear more?

**Kevin Ball:** So remind me, I can either make an opinion now, and get two points, or wait and hear more and then get one?

**Jerod Santo:** That's correct. So is this true? Is this false? Is this a headline or a headlie? If you guess now, you can get two points if you're correct. If you guess after hearing the first paragraph of the article, you get one point if you're correct; if you're wrong, you get zero points, and we laugh at you.

**Kevin Ball:** I'm gonna go with true. Go big or go home. This is a headline.

**Jerod Santo:** Okay, Kball's going for true, for two points. Nick, what are your thoughts? Do you wanna hear more? Do you want to go true, do you wanna go false?

**Nick Nisi:** You know, let me hear it again...

**Jerod Santo:** "A woman wins a $3.8 million dollar verdict after SWAT teams searches wrong home based on Find My iPhone app."

**Nick Nisi:** Well, we all know that Apple can do no wrong... But I don't know if you would come out with a false one right away.

**Jerod Santo:** Look at you playing the meta game...

**Nick Nisi:** \[laughs\] I wonder if --

**Kevin Ball:** Nick's good at that.

**Jerod Santo:** Yeah, he's getting better...

**Nick Nisi:** I wonder if you're trying to trick us, like it's actually like 4.5 million, or something like that.

**Jerod Santo:** I wouldn't do that to you. I wouldn't expect you to know obscure details...

**Nick Nisi:** Alright, I'm gonna say that it's true.

**Jerod Santo:** You're gonna say it's true. Kball says true, Nick says true...

**Kevin Ball:** He's playing for the tie.

**Jerod Santo:** This could be a meta game. Just do the same answer every time, and you'll both tie. Is it true? Is it false? Let's hear that sound. \[true alert\] That is a true headline. This is pretty funny... Well, kind of funny. But... A 70-year old woman who sued two police officers after her home was wrongfully searched by a SWAT team, looking for a stolen truck, has won a $3.76 million jury verdict under a new Colorado law that allows people to sue police over violations of their state constitutional rights.

Now, a meta question from me is - okay, the police officers were in the wrong, but they don't have 3.8 million. Who's paying for that? Taxpayers? Does that come out of the city budget for the police department? I don't know how that works. Anyways, a jury in the state court in Denver ruled in favor of Ruby Johnson late Friday, and the verdict was announced Monday, etc etc. The lawsuit alleged that police got a search warrant for the home after the owner of a stolen truck, which had four semi-automatic handguns, a rifle, a revolver, two drones, $4,000 in cash and an iPhone inside of it, tracked the phone to Johnson's home, using the Find my App, and passed that information on to police.

Detective Gary Stab -- nah, that's gotta be Stahb. That'd be too funny for this, Stab... Stab had wrongly obtained the warrant to search Johnson's home, because he did not point out that the app's information is not precise, and provides only a general location where a phone could be.

\[01:00:22.18\] So there's the rub right there, is it must have been next door, or outside, or I don't know, but it just led them to the general area of her house, and so they swatted her house, and she did nothing wrong. So... It had to be scary, but you know, when you make out with 3.8 mil on the other side, I guess it's maybe worth it.

**Nick Nisi:** Hah. How do I do this?

**Jerod Santo:** \[laughs\] Get someone to steal a truck, and leave it in front of your house, and then make sure that their Fine my iPhone app is not very accurate. Okay, so it's all tied up. You were both correct. Round two. "New Boeing 737 toy features wings that really fall off."

**Nick Nisi:** \[laughs\] That's false.

**Kevin Ball:** That's delightful, but Jerod, you 100% made that up.

**Jerod Santo:** \[laughs\] Ahh... Are you sure you don't want to hear the paragraph, just in case?

**Nick Nisi:** I think I do...

**Kevin Ball:** We want to hear it, but we both know that's you.

**Jerod Santo:** Okay. A new airplane toy modeled after the Boeing 737 features real in-flight damage, in which the jet's wings really fall off. The Boeing Company reportedly signed off on the popular new airplane toy in an effort to recoup financial losses in the wake of recent mechanical failures. Alright, so are they right, are they wrong? \[false alert\] That's the false sound. Yes, you're both correct. That one is completely made up. Not by me. I've found it online. This is a satire site, but it was hilarious, so I included it.

Last one now... You're tied at four to four. If you answered the same on this, this will be our first ever Headlies tie. Are you ready? "Scientists at Stanford University had developed a smart toilet that can identify people based on their butt, and monitor the health of their poop and pee." \[laughs\] Sorry... Hold on a second. That's the paragraph. The actual headline is this -- I read them backwards. "This smart toilet can read your anus like a fingerprint", says scientists." There's your headline. And you already know the paragraph, so...

**Nick Nisi:** That's true.

**Kevin Ball:** Alright, Nick went with true. I'm gonna differ, I'm gonna say false.

**Jerod Santo:** Oh, boy...! For the love of the game, Kball. I appreciate that. So if this headline, which again, is "This smart toilet can read your anus like a fingerprint..." \[laughter\] If that's true, Nick Nisi is our overall winner of the day.

**Kevin Ball:** Here's the thing... I'm gonna go false, because if it's false, then I win. And if it's true, we're all winners. That's freakin' hilarious.

**Jerod Santo:** That's right. Great dichotomy there. I love that. The question is, "Did Kball win, or do we all win?" And the answer is -oh, we all win, baby. We all win. \[true alert\] In fact, this headline inspired this mini game of Headlies, because I couldn't believe it when I read it... And I just thought "Oh, I've gotta play Headlies with this sucker." Yeah, BusinessInsider.com. Well-written headline there.

**Kevin Ball:** Can you send a link to that?

**Jerod Santo:** Oh, absolutely. I'll put a link to that in the notes.

**Kevin Ball:** For sure.

**Jerod Santo:** Yes. The toilet's meant to detect a range of disease markers in stool and urine. So that's like legit supposed to be helpful, but it's just too funny to even talk about it with a straight face. So I'll throw it in the chat, I'll put it in the show notes... But this has been --

**Nick Nisi:** Y'all remember Futurama?

**Jerod Santo:** Absolutely. I loved that show.

**Nick Nisi:** There's an episode, it's one of the newer episodes from one of the several times it was canceled... Where they're throwing away a toilet.

\[01:03:47.09\]

*"So long, overly-complicated Japanese toilet."*

*"Please, not to throw away. I give you a happy-poopy time."*

*"Sorry, you know too much."*

**Jerod Santo:** There you go.

**Nick Nisi:** This is where we're going.

**Jerod Santo:** Wow. Life imitates art, I guess... Or art's gonna imitate life. I don't know how that works. But somehow, somehow Futurama and The Simpsons are eventually right about everything. Right? Alright. Well, we hope you enjoyed the news, the discussion, the headlines, and that spectacular headlie, with a Nick victory... Nick, that means you kind of won twice today. I mean, you almost convinced Kball that Tailwind is cool, you won at Headlies, and... You should be feeling pretty good right now.

**Nick Nisi:** We're all winners. When I win, we all win.

**Jerod Santo:** I do like that answer the best, because that means I also win. And you know how I like to be the winner... Alright, for Kball and Nick, we hope you enjoyed this episode. We are out for now, but we'll talk to you all on the next one.
