**Jerod Santo:** We are here with David Crawshaw, CTO and co founder of Tailscale. David, welcome to the Changelog.

**David Crawshaw:** Yeah, I'm not actually the CTO anymore.

**Jerod Santo:** Oh, no. Your LinkedIn is outdated.

**David Crawshaw:** Oh, does it still say that? I thought I had updated it.

**Adam Stacoviak:** Are you masquerading, David?

**Jerod Santo:** That's real time LinkedIn updates here... \[unintelligible 00:04:14.23\]

**Adam Stacoviak:** It's good. JIT LinkedIn updates.

**Jerod Santo:** I read it somewhere, but usually \[unintelligible 00:04:19.08\] before the show starts.

**Adam Stacoviak:** Me too.

**David Crawshaw:** I think my LinkedIn -- it might be confusing, because it still lists that I was the CTO. I stepped back from the CTO last year.

**Jerod Santo:** Okay. So what are you doing now?

**David Crawshaw:** I am spending my time exploring sort of new product spaces, things that can be done, both inside and outside of Tailscale.

**Jerod Santo:** Very cool.

**David Crawshaw:** Most of my work inside Tailscale is around helping on the sort of customer side, talking to users or potential users about how it can be useful. And then, because I have such an interest in sort of the world of large language models, I've been exploring that. But that is not a particularly good fit for the Tailscale product. I spent quite a long time looking for ways to use this technology inside Tailscale, and it doesn't really fit. And I actually think that's a good thing. It's really nice to find clear lines like that, when you find something where it's not particularly useful... And I wouldn't want to try and -- a lot of companies are attempting to make things work, even if they don't quite make sense... And I think it's very sensible of Tailscale to not go in that direction.

**Jerod Santo:** Do you mean like deploying LLMs inside of the Tailscale product? Or how do you mean it wouldn't fit?

**David Crawshaw:** Well, yeah... So what would Tailscale do with LLMs is the question I was asking from a Tailscale perspective. I think Tailscale is extremely useful for running LLMs yourself, for a network backplane... In particular because of the sort of surprising nature of the network traffic associated with LLMs.

On the inference side -- so you can kind of think about working with models from both a training and an inference... These are sort of two sides of the coin here. And training is very, very data-heavy, and is usually done on extremely, extremely high bandwidth, low latency networks, InfiniBand style setups, on clusters of machines in a single room. Or if they spread beyond the room, the next room is literally in the building next door. The inference side looks very different. There's very little network traffic involved in doing inference on models, and in terms of bandwidth. And the layout of the network is surprisingly messy. This is because sort of the nature of finding GPUs is tricky, even still today, despite the fact that this has been a thing for years now.

**Adam Stacoviak:** Very tricky.

**David Crawshaw:** Yeah. I feel I should try and explain it, just because it's always worth trying to explain things... But I'm sure you all know this, which is that if you're running a service on a cloud provider that you chose years ago, for very good reasons, all the cloud providers are very good at fundamental services, but they all have some subset of GPUs, and they have them available in some places, and not others, and it's never quite what you're looking for. And if you are deciding to run your own model and do inference on it, you might find your GPU is in a region across the country, or it's on a cloud provider that's different than the one you're using... Or your cloud provider can do it, but it's twice the price of another one you can get... And this leads to people ending up far more in sort of multi-cloud environments than they do in sort of traditional software. And so Tailscale actually is very useful there. So for users, I think it's a great fit. But what does the product actually need as like new features to support that? And the answer is it actually is really great as it is today for that.

**Jerod Santo:** \[00:08:11.06\] There's no specific AI angle that you can add to the product and immediately make it more useful.

**David Crawshaw:** Yeah, I think that's right. I mean, we came up with some proposals, but they're not exciting. We'd be doing it because corporate at headquarters told us to find an angle for AI, or something like that. We as a startup have the option of just not doing that, and so we didn't. So...

**Jerod Santo:** Well, we should probably disclaim that Tailscale is a past, and of course, hopefully a future sponsor of Changelog, and that Adam's a huge --

**Adam Stacoviak:** We're working on it.

**Jerod Santo:** ...Tailscale user, and brings it up often... But this is not a sponsored episode. In fact -- well, first of all, we don't do sponsored guest appearances. But also, I had no idea that you were a co-founder of Tailscale when I read your blog post. That made me reach out to you.

**Adam Stacoviak:** Me neither.

**Jerod Santo:** I found it out afterwards. I was like "Oh, cool."

**David Crawshaw:** That's great. I didn't know we'd be talking about Tailscale at all when I came here today, so we're both basically on the same page.

**Jerod Santo:** Yeah, there we go.

**Adam Stacoviak:** "I still work there..." I'm just kidding. \[laughter\]

**Jerod Santo:** Real time update, I did double-check LinkedIn... You are correct, it says 2019 to 2024 was CTO, but you just see co-founder Tailscale and then CTO next to it, and you move on. And that's probably what Adam and I both did.

**Adam Stacoviak:** Same. Exactly the same.

**Jerod Santo:** We didn't realize there was an end date on that particular role.

**Adam Stacoviak:** Yeah. The nomenclature or usage on -- the metadata usage on LinkedIn is the... Their UI is like which date, which month did you begin, and it says Present. So the assumption was there. I didn't read your byline on the role.

**David Crawshaw:** Maybe what I'll do is I'll put something new above it, and that'll make it clearer.

**Jerod Santo:** There you go.

**David Crawshaw:** But I don't want to mislead anyone.

**Jerod Santo:** Yeah. Fair enough. Fair enough.

**David Crawshaw:** I also honestly don't check LinkedIn very often. It's not a big part of my life.

**Jerod Santo:** We usually check it right before a show to make sure we get someone's title right, which is why we're both eating crow right now for getting it wrong. But...

**Adam Stacoviak:** Well, to get back into the mood or the groove, whichever you want to call it...

**Jerod Santo:** Let's get into both.

**Adam Stacoviak:** Well, I'm a Tailscale user, as you know. I just trimmed some machines, because I've been doing some more home labbing... So I use Tailscale really only in my home lab. And thank you so much for this free tier, because I don't want to give you any money, honestly... I'm just kidding with you. I think you're amazing, but I've gotta put a hundred machines on my tailnet before I have to pay you any money. I've got 18. There's no way I'm ever going to pay you money... Based on your tiers, not mine.

**David Crawshaw:** That's totally great. I'm very happy about that.

**Adam Stacoviak:** Which is -- yeah, that's by design. That's by design. And I think, one, thank you, because it's let me be more network-curious, and more home lab-curious. So you as a corporation, Tailscale, have allowed me and enabled me and so many others to do just that, and that's so cool. And I applaud y'all for that choice by design.

**David Crawshaw:** Well, thank you. That's excellent.

**Adam Stacoviak:** That being said, at the same time, I've gotta dig. And it's not really a dig, it's just more like Tailscale is kind of boring in the fact that I don't have to do much to make it work. I put it in, I Tailscale up, and I'm done. You just work. I never have to worry about you working, unless you're not up --

**Jerod Santo:** Do you want it to crash some more, or what are you looking for?

**Adam Stacoviak:** I'm just saying, it's pretty boring. Unless I'm doing like serves, or I'm sharing a disk across the network... I'm not doing that kind of stuff, but... You know ,this whole multi-cloud shared GPU thing is super-cool, because you can have a tailnet on top of a different network, and share that GPU access, which I'm assuming is what you meant by that.

**David Crawshaw:** That is what I meant, yeah.

**Adam Stacoviak:** And that's just so cool. Honestly, it is.

**David Crawshaw:** I mean, I love boring software.

**Adam Stacoviak:** I do, too.

**David Crawshaw:** And so to me, the fact that you're having a boring experience is perfect.

**Adam Stacoviak:** Yeah, man. No surprises. No surprises.

**David Crawshaw:** Yeah. It's a product that's designed to enable you to do more things, not for you to spend your days having to configure it.

**Adam Stacoviak:** \[00:12:00.04\] It is so smooth. The DevEx experience on this thing is bar none. I know my machines, I know where they're at, I know if they're out of date... It's pretty easy to do that kind of stuff. And as an avid user and a lover of TailScale - again, not sponsored, just super-passionate - I can't see how an LLM would fit in it either. I just can't see how you would work in AI to make the platform better. I mean, I haven't thought about it deeply besides this 20-ish minutes so far in the conversation, but -- I mean, give me some time and I might.

**David Crawshaw:** Yeah, if you come up with anything, let me know. I'm very excited about the idea of it. But software has to be, in some sense, true to itself. You have to think about its purpose when you're working on it, and not step too far outside that. I similarly wouldn't build a computer game into TailScale. I don't think that would be a particularly good fit for a product.

**Jerod Santo:** Unless it's like an Easter egg.

**David Crawshaw:** As an Easter egg it would be great, actually. A little quiz game or something built into the terminal...

**Adam Stacoviak:** Once you have 100 machines in your tailnet, you get access to -- you unlock a secret machine name that's on your tailnet by default.

**Jerod Santo:** There you go. It's for the Pro plan.

**Adam Stacoviak:** There you go.

**David Crawshaw:** Right. It can ask questions like "What is the oldest machine on your tailnet?" or something like that. That would be that would be a lot of fun, actually.

**Adam Stacoviak:** There are some questions I would probably ask the tailnet... There are actually some things I don't know about my tailnet, that I could discover via a chat LLM interface. I mean, there are some things I can see some value in. But -- I mean, does everybody want that or need that? Maybe. I don't know.

**David Crawshaw:** Yeah, I don't know either. I very much went looking for something I would use features like that for, and I didn't come up with anything. If you do come up with anything, I'd be very happy to hear about it.

**Adam Stacoviak:** Honestly, now that I'm thinking about it in real time... You know, you have a column whenever you're on your admin and you're on your machine's dashboard, essentially... You can see last seen, or ones that are out of date. And unless you're savvy, you probably haven't enabled Tailscale's ability to auto update. Maybe you have, maybe you haven't. I forget which machines I've done it on. Like, every one I install again, once I knew that update was there, I do enable that. But sometimes I forget. So I might be like, "Okay, are there any of my machines that haven't been seen in a while? Or are there any versions that are -- give me a list of the ones that are out of date, that I should probably concern with around security" Because you're probably not emailing me about my security concerns, but my tailnet knows which ones are too far out of date if I haven't auto updated.

**David Crawshaw:** That's true. I think we did actually email customers once about an out of date version where we were concerned about the security. I think that has only come up once. Mostly, keeping Tailscale up to date is sort of proactive, good security practice. It has fortunately not been a significant source of issues, in part due to careful design. A lot of engineers worked very hard to make it that way.

**Adam Stacoviak:** For sure. And you've got a lot of amazing engineers there.

**David Crawshaw:** Yeah, it's a great team.

**Adam Stacoviak:** I guess now that I'm thinking about it, I do have some ideas...

**David Crawshaw:** Nice.

**Adam Stacoviak:** I mean, I think -- this is the idea I have for Notion as well. I use Notion a lot more... Anything where you have a platform where you can create your own things on top of it. A tailnet. One tailnet is not the same as the next. Even though they operate the same, the way I use mine may not be the way you use yours. It would be nice to have an interface where I can just ask Tailscale how to tailscale, basically. Like, I have an idea, I want to create a new group, or a whatever, or I can be introduced to new features... It's discovery. And you're essentially, by not having your own, you force people to go into the public LLMs, essentially; into the ChatGPTs, into the Claude, into the Ollamas, into the DeepSeeks, or whatever you might have out there. And if you can corner the market on your own, I think you'd be, one, better served, because you know your documentation better, two, you know the deterministic nature of it is maybe non-deterministic, but you can probably fine-tune it a bit more to be more focused on your customer base... I'd probably ask my Tailscale LLM more questions if I could.

**David Crawshaw:** \[00:16:12.04\] Yeah. So that's like an interesting sort of meta question there about LLMs, around how many models there should be in the world, from sort of a consumer perspective, in a sense... Because that's almost like you're just consuming it \[unintelligible 00:16:28.06\] And this sounds very similar to the question of how does search work on websites, which you could have asked 10 years ago or 20 years ago. You know, do I use the Wikipedia search, or do I go to Google and type in my search and maybe put the word wiki at the end to bring the Wikipedia links to the top? Both of these are valid strategies for searching Wikipedia. And I honestly don't use the Wikipedia search and I haven't in a while, so it may be amazing... But I have as a consumer a general concept that the search systems on individual websites are not terrific. And Google is baseline decent... And so as long as I'm searching public data, I would generally prefer the Google search.

I guess, in a sense, that's a less and less true statement every year, because the large chunks of websites are just not public data anymore. Like, you can't search Facebook with Google, you can't search Instagram with it, you can't find a TikTok with it, or anything like that. And so the existence of those - I think they sometimes get called walled gardens - says that we should have more fine-tuned tools like that. And there's just a lot of similarities there. So should a startup the size of Tailscale build customized models for that, for its users? I think it's sort of a big, open-ended question around how the model space will evolve. And I think my last year of working with models, fine-tuning them, training them, carefully prompting them... You can do more and more just with carefully structured prompts and long contexts, that you used to have to use fine-tuning to achieve.

But all of this, my sort of big takeaway is that they are actually extremely hard to turn into products, and to get those details right, in a general sense, for shipping to users. They're actually quite easy to get going for yourself, and I think if anything, more people should explore running models locally, and playing with them, because they're a ton of fun and they can be very productive very quickly. But in much the same way that it's really easy to write a Python script that you run yourself on your desktop, versus a Python script you ship in production for users, LLMs have this huge sort of complexity gap when it comes to trying to build products for others. And so I agree that that sort of tooling would be fun, and should exist. I also think where we are today, it's quite hard for a team the size of a startup to ship that as not part of their core product experience.

**Adam Stacoviak:** What if it enabled so much deeper and greater usage? Because the one thing you want to do as a startup or a brand like you are, I would imagine at least from the outside, is a deeper customer is better than a shallow customer, right? If I've only got a few machines - well, one, my affinity and my usage is lower, so maybe my value is lower... But if I'm deeply entrenched, and it's as a result of great documentation, which you have... But docs - they are good when you have a particular precision thing and you want to read and understand and discover how a feature works, and they only go so far. And sometimes they are even out of date. Just hypothesizing that, whether or not this -- what would be required, one, in terms of a lift, one in engineering power and two potentially financial power... And then two, what is that costing you by lack of more deep users and shallow users in comparison?

**David Crawshaw:** \[00:20:18.21\] I think that is exactly the right way to frame the question for a business, and I don't know the answer to a lot of those questions. I can talk to some of the more technical costs involved. What the benefits would be to the company is extremely open-ended to me. I don't actually -- I can't imagine a way to measure that. Based on talking to customers of Tailscale who deploy it, thinking about the \[unintelligible 00:20:43.07\] And so to go back to something you said earlier, about how you use it and you don't pay for it... I think that's great, because Tailscale has no intention of making money off individual users. That's not a major source of revenue for the company. The company's major source of revenue is corporate deployments. And there's a blog post by my co-founder, Avery, about how the free plan stays free on our website, which sort of explains this... That individual users help bring Tailscale to companies who use it for business purposes, and they fund the company's existence.

So looking at those business deployments, you do see Tailscale gets rolled out initially at companies for some tiny subset of the things that it could be used for. And it often takes quite a while to roll out for more. And even if the company has a really good roadmap and a really good understanding of all the ways they could use it, it can take a very long time to solve all of their problems with it. And that's assuming they have a really good understanding of all the things it can do. And the point you're making, Adam, that people often don't even realize all the great things you can do with it is true. And I'm sure a tool that helped people explore what they could do would have some effect on revenue.

In terms of the technical side of it and the challenges - there are several challenges. In the very broad sense, the biggest challenge with LLMs is just the enormous amount of what you might call traditional, non-model engineering has to happen at the front of them to make them work well. It's surprisingly involved. I can talk to some things I've been working on over the last year to give you a sense of that... Beyond that, the second sort of big technical challenge is one of Tailscale's core design principles is all of the networking is end-to-end encrypted. And the main thing an LLM needs to give you insight is a source of data. And the major source of data would be what is happening on your network, what talks to what, how does it all work? And that means that any model telling you how you could change your networking layout, or give you insight into what you could do would need access to data that we as a company don't have, and don't want. And so we're back to - it would have to be a product you run locally, and have complete control over... Which is absolutely -- my favorite sorts of products are that. I like open source software that I can see the source code for, compile myself, run locally. That's how I like all things to be. But trying to get there with LLMs in the state they are today is actually, I think, pretty tricky. I don't think I've seen an actually shipped product that does that really well for people. There's one, there's a developer tool that I hear a lot of good talk about, that I don't -- I'm just trying to live-search for it for you. Nope, that's the wrong one. That's Magic Shell History, which also sounds really cool. I should use that one.

**Jerod Santo:** Is that Atuin?

**David Crawshaw:** Atuin, yeah.

**Jerod Santo:** That one's awesome.

**David Crawshaw:** Oh, you've used it? Oh, great.

**Jerod Santo:** I'm a daily user. Yeah. No LLMs involved on that one.

**David Crawshaw:** \[00:23:59.07\] Yeah, I thought that was one... There's another one that is in the sort of agent space for developers as they're writing programs, and it helps you -- it's like a local Claude, effectively. And it's primarily built around helping you construct prompts really carefully for existing open models. And it's come up several times, and I'm sorry, it's falling out of my head. I will look it up later.

**Jerod Santo:** That's alright.

**David Crawshaw:** But I hear very positive things about it. That's the closest I've seen to sort of a shipped completely local product that does that sort of thing. On which models to use, I think given the state of models that exist today, open models, the major shipped open models are so amazing that it always makes sense to start with one of those sort of models as a -- if nothing else, as a pre-trained base for anything that's happening. Building a model from scratch is a very significant undertaking, and I don't think is necessary for most tasks. The available open models are extremely general-purpose. And so at worst, you would be fine-tuning from one of those to build a product. If you take one of the Llamas, or... I mean, there's a lot of talk about DeepSeek, which produces terrific results... It's a very large model. It'd be very hard to start with it, though I understand there's some very good distilled work coming from it using other models.

**Break**: \[00:25:26.27\]

**Jerod Santo:** So you've been using those in your day-to-day programming work for the last year. And back in early January you wrote this post "How I program with LLMs", which I've found to be refreshingly practical and straightforward, your findings. You said you've been actively trying these things. I feel like I've been passively trying them; not really trying to optimize my setup, but just like a Neanderthal kind of poking at a computer box... Like, "Oh, does this work? No? Okay..." For the last couple of years. So I do use these things, but I don't think as effectively as most, or at least some.

And I loved your finding that, of course, you're building something as a result of it. But can you take us on that journey over the last year or so, where you started with LLMs, and what you've found in your day-to-day programming?

**David Crawshaw:** Yeah. I don't think your experience is unusual, actually. I think almost everyone has your experience. And for most software, I am in the same category. I try things at the very surface level when they're new-ish, and see if there's any really obvious way they help me. And if they don't, I put them aside and come back later. A great example of that is the Git version control system. It was 10 years before I really sat down and used it. I was using other version control systems. After 10 years, I was like "Okay, this thing's probably going to stick around. I guess I'll get over its user interface and figure it out."

**Adam Stacoviak:** "Fine... Git it is."

**David Crawshaw:** I was reluctant, but I got there in the end. LLMs really struck me as fascinating. I made this active decision to not do that with them, and set out on a process of trying to actively use them... Which has involved learning just a really appalling amount, honestly. It's very reasonable that most engineers haven't done really significant things with LLMs yet, because it's too much cognitive load. If you're writing computer programs, you're trying to solve a problem.

**Jerod Santo:** Right.

**David Crawshaw:** You only have so much of your brain available for the tools you use for solving problems, because you have to fit the problem in there as well, and the solution you're building. And that should be most of what you're thinking about. The tools should take up as little space as possible. And right now, to use LLMs effectively, you need to know too much about them. And that was my big takeaway 11 months ago or so, which is why I started working on tools with some friends to try and figure this out. Because there has to be a way to make this easier. And my main conclusion from all of that is there's an enormous amount of traditional engineering to do in front of LLMs to get there.

So the first really effective thing I saw from LLMs is the same thing I think most engineers saw, which was GitHub Copilot, which is a code completion -- actually, GitHub Copilot has taken on new meanings.

**Jerod Santo:** It's more than that now, right?

**David Crawshaw:** Yeah, it's an umbrella brand that means all sorts of products... And I honestly haven't even used most of those products at this point. The original product is a code completion system built into Visual Studio Code, where as you type, it suggests a completion for the line, or a few lines beyond that, of where you are... Which is building on a very well-established paradigm for programming editors.

\[00:32:20.20\] Visual Studio 6.0 did this 25 years ago with IntelliSense, for completing methods in C++. This is not a new idea. Around the same time we had etags for Emacs, or ctags, I should say, which gave us similar things in the Unix world... And so this is sort of extending that idea by bringing out some of the knowledge of a large language model in the process of completing. And I'm really enamored with the entire model. Copilot's original experience when it came out was magical. There was nothing like this before.

**Adam Stacoviak:** It was.

**David Crawshaw:** And it really, I think, jump-started a lot of interest in the space from people who hadn't been working on it, which was almost all of us. And from my perspective, the thing that really struck me was "Wow, this works really well. And wow, it makes really obvious, silly mistakes." It was both sides of this. It would suggest things that just don't compile in ways that are really obvious to anyone who takes a moment to read it. And it would also make really impressive cognitive leaps where it would suggest things that "Yes, that is the direction I was heading, and it would have taken me several minutes to explain it to someone", and it got there immediately.

And so I spent quite a lot of time working on code completion systems, with the goal of improving them, by focusing on a particular programming language. And we've made some good progress there. We actually hope to demonstrate some of that publicly soon, in the next few weeks, probably in this sketch.dev thing that we've been building. We'll integrate it so that people can see it and give it a try. But so those models are interesting, because they're not the LLM experience that most users have. Like, when everyone talks about AI today, they talk about ChatGPT, or Claude, or these chat-based systems. And the thing I really, really like about the original Copilot code completion model is it's not a chat system. It's a different user interface experience for the knowledge in an LLM. And that's really a lot of fun. In fact, the technology is a little bit different, too. There's a concept in the model space called fill-in-the-middle, where a model is taught a few extra tokens that don't exist in the standard chat model. With fill-in-the-middle, which is a lot of fun, a model is taught a few extra tokens. And it's taught a prefix token, a suffix token, and a middle token. And what you do is you feed in as a prompt to the model the file you're in. And everything, all the characters before where the cursor is get fed right after a prefix token. So you feed in a prefix, all the characters of the file, then you feed in a suffix, and you feed in all the tokens after the cursor. And then you feed in the middle token, and then you feed in whatever goes into the middle to complete it. And that's the prompt structure for one of these models.

And then the model keeps completing the thing that you fed in. It writes the next characters. And you train the model by taking existing code -- there's a few papers on how these models are trained, because Meta published one of these models, and Google published one of these models under the Gemma brand. There's a few others out there. There's one from Qwen, and some other derived ones.

And you take existing code files, you choose some section of code, you mark everything before it as the prefix, everything after it as the suffix, and you fill in everything after it as the middle. And that's your training data. You generate a lot of that by taking existing code and breaking it up into these files randomly, by randomly inserting a cursor. Then you've taught a model how to use these extra characters, and how to complete them. And so it's not a chat model at all, it's a sort of a sequence to sequence model. It's a ton of fun.

\[00:36:22.16\] And the advantage of these systems is they're very fast compared to chat models. And that's the key to the whole code completion product experience, is you want your code completion within a couple hundred milliseconds of you typing a character. Whereas if you actually time Claude, or you time one of the OpenAI models, they're very slow. Like, they take a good minute to give you a result. And there's a lot of UI tricks in hiding that minute. They move the text around on the screen, then they stream it in...

**Jerod Santo:** Right.

**David Crawshaw:** Yeah, it's very clever.

**Jerod Santo:** Because you're reading it word by word as it comes out, but it's basically stalling. You're like "Come on, just give me the answer already."

**Adam Stacoviak:** That's right.

**David Crawshaw:** Yeah, exactly. You can really feel it with the new reasoning models, 01, these things, because there's this pause at the beginning.

**Jerod Santo:** The thinking phase. I'm like "Come on, I don't --" And it tells you what it's thinking, which is cool, but...

**Adam Stacoviak:** "Think faster...!"

**Jerod Santo:** "I don't care what you're thinking. Give me the answer." \[laughs\]

**Adam Stacoviak:** I think it's actually kind of cool, when you see that reasoning come up.

**Jerod Santo:** It is cool.

**Adam Stacoviak:** I mean, you get to see like -- I feel like this is the closest we've glimpsed into the future than we've ever been able to, by watching the reasoning in real time. You see the active reasoning that it's happening, it explains the reasoning... Users ask me this, so I'm going to think about that. Okay, I've thought about that, which causes this..." And it's like this step process, and it reminds me of how I think, too. So I'm like "That's pretty dang cool..." But it's also a great trick. I agree.

**David Crawshaw:** Yeah, it is a ton of fun to watch. I agree. And it is a lot of insight into how the models work, too... Because the insides of the models are a large number of floating point numbers holding intermediate state, and it's very hard to get inside of those. But the words, you can read them. You can make some sense of them.

**Jerod Santo:** Right.

**David Crawshaw:** So code completion is, I think, extremely useful to programmers. It varies a lot depending on what you're writing, and how experienced models are with it, and just how sort of out on the edge of programming you are. If you're really out in the weeds, the models can get less useful. I used a model for writing a big chunk of AVX assembly a few months ago, and the model was both very good at it and very bad at it simultaneously, and it was very different from the typical asking a model to help with programming experience. It would constantly get the order of operations wrong, or overcomplicate things, or misunderstand... It was a very different experience than typical programming.

**Adam Stacoviak:** What model was this? How did you find it?

**David Crawshaw:** I used all of them for that.

**Adam Stacoviak:** Okay...

**David Crawshaw:** And this is what I meant by --

**Jerod Santo:** Just try 'em all.

**David Crawshaw:** ...I'm spending a lot of time actively exploring the space. I'm putting far too much work into exploring the model space as I do work.

**Jerod Santo:** It makes sense that there are specific models that are good for autocomplete, versus search, versus chat... But have you found the correct one for each particular subtask, or what's your advice there? Is it like "Use them all" or "Just stick with this. You'll be good"?

**David Crawshaw:** I can't advise people to use them all.

**Jerod Santo:** To use a bunch of them?

**David Crawshaw:** Yeah. And this, I think, is the big problem. You mentioned that most programmers are probably using this... As far as we can tell, not one-fifth of programmers are using these tools today.

**Jerod Santo:** How can you tell that?

**David Crawshaw:** Through surveys. A couple of people have done surveys of programmers, and it seems to come back that most people are not using these tools yet.

**Adam Stacoviak:** Wow.

**David Crawshaw:** \[00:39:58.04\] Which is both shocking to me, because they're so useful, and it also makes a lot of sense, because it's a lot of work figuring out how to use them.

**Adam Stacoviak:** I have an analogy that I'd like to share. If you're a runner, you probably wear running shoes, right? You're probably not going to run barefoot. I think it's like admitting to running barefoot. Like, you wouldn't do that. You would run a marathon with rocks on the road, and debris, and things like that barefoot? ...versus running shoes designed to aid you in the process of running to make it more speedy, comfortable, agile etc. I feel like that's where we're at. I've changed my tune, let's just say, because I feel like it's not going to go away. And to hear that one-fifth -- I haven't dug into these surveys, but that's surprising. One-fifth is using it... And it seems like, I guess, then the four of the five are saying no, or for the time, for the moment, denying it. I mean, do either of you disagree with that analogy? Is it way off, or is it -- Jerod, I saw you kind of like shake your head a little bit. What's your thoughts on that? No?

**Jerod Santo:** Yeah... I mean, I don't think that these tools have come to the place that the running shoe has. I also think there's probably plenty of world-class runners who run shoeless, and would never run with a shoe on, because that's for fools. But I'm not going to go there.

**Adam Stacoviak:** \[laughs\] Well, would you run a New York City marathon with no shoes?

**Jerod Santo:** I wouldn't be so foolish as to try a New York City marathon.

**Adam Stacoviak:** Okay. \[laughter\] You have to admit though that having the shoes on is probably better for you than worse for you.

**Jerod Santo:** Well, at what point has the shoe proven itself to be useless? Because these tools routinely prove themselves to not just be wrong, but dramatically wrong, in ways that if you follow them, you will be like Michael Scott, who drives directly into the pond.

\[00:41:49.05\]

*"No, no, no, no, no. Look, it means go up, to the right, bear right over the bridge, and hook up with 307." \[Make a right turn\]*

*"Maybe it's a shortcut, Dwight. It said go to the right."*

*"It can't mean that. There's a lake there."*

*"It knows where it is going. The machine knows...!"*

*"This is the lane. THIS IS THE LANE!"*

*"Stop yelling at me! Stop yelling!"*

*"No, there's no road here!!"*

**Adam Stacoviak:** Oh, yes...

**Jerod Santo:** Because his voice assistant or his GPS tells him to keep going straight, and he just keeps going straight.

**Adam Stacoviak:** I concur on that one, too. I concur.

**Jerod Santo:** So I can see why you could get frustrated and throw up your hands and say "I want to come back to this in a year, or two years. But I'm going to let all the frontiers people, like David, figure all this stuff out. In the meantime, I've got code to write." I can see a lot of people saying that. I could see myself saying that. I haven't, because I am curious, and I don't want to fall behind... But I still don't feel like this is a must have for everybody today. But there are moments where I'm like "That was amazing."

**Adam Stacoviak:** For sure. I'm actively trying to fit it in into everything I do, is I guess my perspective. If it's home lab, it's that; if it's contracts, agreements, proposals, if it's thinking, if it's exploration, if it's coding, if it's... You pick it's, your if it's, kind of thing. I'm trying to fit it in, and I'm just -- so I'm sitting down on my bench, I've got my socks on and I'm trying to put the shoe on, let's just say...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** ...to kind of extend my analogy.

**Jerod Santo:** If the shoe fits, you're going to wear it.

**Adam Stacoviak:** Yeah, I believe that I'm going to put this shoe on and I'm going to wear it for every scenario that makes sense, because I can tell you I move faster, I think differently when I'm in those modes. Are they wrong? Do I always check it? Of course. But I know that it's coming for almost everything we do. Every task we do that's productive - coding, thinking, writing, whatever - it's coming for it, in a positive way.

**David Crawshaw:** I mean, I totally agree that it is coming for it. I also think it's very early days, and a great reason to not learn this technology today is that it's changing so fast.

**Adam Stacoviak:** Yeah.

**David Crawshaw:** And that you can spend a very long time figuring out how to make it work, and then that can all -- all of that accumulated skill can be sort of made useless tomorrow. By some new product.

**Jerod Santo:** Right. Well, if you remember, Stable Diffusion first dropped probably two years ago now.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** \[00:44:05.25\] And we were enamored with prompt engineering. And what was that artist's name that you'd always -- if you added it to your Stable Diffusion prompt, it would automatically get awesome? And then he got mad, because everyone's using him to like make better pictures... Like, that whole technology, that magical incantation is just completely moot at this point. Like, it's probably easier now to get better pictures without being such a wizard... And whatever name you're invoking in the past is just -- that name doesn't do what it did on the last version of Stable Diffusion. Just as one instance. Prompt engineering has changed dramatically. And anybody who's ignoring it all, and just listening to us talk about it on the Changelog and just like staying with their regular life, they've saved themselves a lot of time, than those of us who dove in and decided they were going to memorize all the magic words.

**David Crawshaw:** Yeah, absolutely. A year ago, a common technique with open models that existed was to offer them money to solve problems. You start every prompt by saying "I'll give you $200 if you do this." And it greatly improved outcomes.

**Jerod Santo:** Yeah. Or "Let's take this step by step." That phrase was one of those magical things that made it better.

**David Crawshaw:** Yeah. All of those techniques are gone now. If you try bribing a model, it doesn't help. There was a great example I saw of that where someone kept saying "I'll give you $200 if you do this", and they did it in a single prompt several times, and they got to the nth case, and it said "But you haven't paid me for the previous ones yet." \[laughter\]

**Jerod Santo:** "Listen, fella... We had a deal."

**Adam Stacoviak:** "No means no."

**Jerod Santo:** That's great.

**Adam Stacoviak:** No money means no. Yeah, there you go. Alright.

**David Crawshaw:** Yes, they're very funny models. So I spent a long time believing, and I actually still believe this in the long term, that chat is currently our primary user interface on the models, and it's not the best interface for most things. The way to get the most value out of models today when you program is to have conversations with models about what you're writing... And that's -- I think it's quite the mode shift to do that. It's quite taxing to do that, and it feels like a user interface problem that hasn't been solved yet. And so I've been working a lot with Josh Bleecher Snyder on these things, and we have been sort of -- we spent a long time looking for how can we avoid the chat paradigm and make use of models. That's why code completion initially was so interesting, because it's an example of using models without chat. And it's very effective. So we spent a long time exploring this.

To give you another example of something we built in this space - because we've just been trying to build things to see what's actually useful. We built something called Merd, merd.ai, which I think we've put up a few weeks ago, and it does merge commits for you. So if you try and push a git commit or do a rebase and you get a merge conflict, you can actually use LLMs to generate sophisticated merge commits for you.

It turns out that's a much harder problem than it looks. Like, you would think you'd just paste in all of the files to the prompt, and you ask it to generate the correct files for you... Even the frontier models are all really bad at this. You almost never get a good merge commit out of them. But with a whole stack of really mundane engineering at the front - mundane is not the right word, because a lot of it's actually really very sophisticated. But it doesn't involve the LLM itself. It's about carefully constructing the prompt.

**Jerod Santo:** Traditional.

**David Crawshaw:** Traditional is a much better word. Yeah. You can actually get very good merge commits out of it. And that user experience seems much better for programmers to me; you could imagine that being integrated into your workflows to the point where you send a PR, there's a merge conflict, it proposes a fix right on the PR for you. And in fact, we attempted a version of that where there's a little GitBot that you can @ mention on a PR, and it sort of generates another PR based on it, that fixes the merge conflict for you.

\[00:48:07.04\] And that sort of experience doesn't require the chat interface to be exposed to the programmer to make use of the intelligence in the model. And that is where I dream of developer tools getting, so that everyone can use them without having to learn a lot about them. Like, you shouldn't have to learn all the tricks for convincing a model to write a merge commit for you. There should be a button. Or not even a button, it should just do it when GitHub says there's a merge conflict. So it's actually -- it works pretty well. We've seen it generate some very sophisticated merge commits for us. I'd love to see more people give it a try and let us know what the state of that is.

But so... Just because that is such a hard state to get to, we built Sketch, which exposes the traditional chat interface in the process of writing code. Because we're just not -- we don't think the models are at a point yet where we can completely get away from chat being part of the developer's workflow.

**Jerod Santo:** So at what level of granularity is Sketch working at? And do you imagine it moving up eventually, wherever it is? Because the panacea, the silver bullet is what some folks are trying to do with Devin, for instance, where it's like you describe at a very high level a system, and it goes and builds that system v0 - from Vercel is another one - that's doing these things. And they're very much at, in my opinion, the prototype/demo level of quality, not the production level of quality in their output... And it seems like they're very difficult -- in my limited experience with these things, they're very difficult to actually mold, or - what do you do? I'm losing a word here. Sculpt. I don't know, like a sculpture. To actually sculpt what they come out with, and change it into something that you actually would write, or like.

But those are like the very high level of "Well, it should have a contact form that submits to this thing." But maybe you're looking down more where I use them currently, which is "Yo, write me a function that does this particular thing." And at that level, it seems a lot easier to even chat to it, if I have to. I would rather not chat to it... But spit out code that I could copy-paste and modify, versus being like "I'm going to throw this away and rewrite it."

**David Crawshaw:** Right. Yes, I think that lines up really well with the way Josh and I think about these things, where today if you open up a model, a cloud provider's frontier model, or a local DeepSeek, or even a Llama 70b, you can ask it to write a Python script that does something. It could be a Python script to go to the GitHub API and grab some data and present it neatly for you. And it will do a great job. These great models can basically do this in a single shot, where you write a sentence and out comes a Python script that solves a problem. And that's an astonishing technical achievement. It's amazing how quickly I've got used to that as a thing, but...

**Jerod Santo:** \[laughs\] Yeah, you're not even impressing me right now, you know? Yes, it can do that. We all know.

**David Crawshaw:** Exactly.

**Jerod Santo:** But it is amazing.

**David Crawshaw:** Exactly. Me five years ago, if you told me that, I would struggle to believe it. And yet now I just take it for granted.

**Adam Stacoviak:** Yes.

**David Crawshaw:** \[00:51:38.25\] And so that works. We've got that. We've got a thing that can write really basic Python scripts for us. Similarly, these systems, at least the frontier models, are good at writing a small React component for you. You can give almost any of them -- you need more than a single sentence. You need a few sentences to structure the React component, but out comes some HTML and some JavaScript in the React syntax, the JSX syntax, or the TSX syntax... And it's pretty close.

It might need some tweaking, you might have some back and forth to get there, but you can get about that out of it. And clearly, models are going to improve. There's no evidence to suggest we're at the limit here as the models keep improving, every month at this rate... And part of what we're interested in Sketch is getting beyond helping you write a function - which I also use today; I get frontier models to write functions for me - to sort of "How can we sort of climb the complexity ladder there?" And so the point we chose is a point that is comfortable for us, and is helpful for us, is the Go package. How can we get a model to help us build a Go package to solve a problem?

And there's an implicit assumption here in that the shape of Go packages looks slightly different at the end of this... Packages are a little bit smaller, and you have a few more of them than you would in a sort of traditional Go program you wrote by hand. But I don't think that is necessarily a bad thing. Honestly, in my own programming, as a Go program, I tend to write larger packages, because there's a lot of extra work involved in me breaking it into smaller packages. And there's often this thought process going on in my mind of like "Oh, in the future, this will be more maintainable with more packages." But it's more work for me to get there today, so I'll just, I'll combine it all now and maybe refactor it another day.

And switching to trying to have LLMs write significant chunks of packages for you makes you do that work upfront. That's not necessarily a bad thing. It's perhaps more the way we'd like our code to end up. And so Sketch is about taking an LLM and plugging a lot of the tooling for Go into the process of using the LLM to help it. An example is I asked it the other day to write some middleware to Brotli-compress HTTP responses under certain circumstances, because Chrome can handle Brotli encoding, and it's very efficient. It's not in the standard library, or at least it wasn't the last time I looked... And the first thing it did was it included a third party package that Andy had written, that has a Brotli encoder in it. And so Sketch go gets that in the background in a little container as you're working, and has a little go.mod there that modifies... So that as you're editing the code, you get all the code completions from that module, just like you would in a programming environment. And more importantly, we can take that information and feed it into the model, as it's working.

If we run the go build system as part of it, and if a build error appears, we can take the build error, feed it into the model. It's like "Here's the error", and we can let it ask questions about the third party package it included... Which helps with sort of some of the classic problems you see when you ask Claude to write you some Go code, where it includes a package and then it makes up a method in there that doesn't exist, that you really wish existed, because it would solve your problem...

And so this sort of automated tool feedback is doing a lot of the work I have to do manually when I use a frontier model. And so I'm trying to cut out some of those intermediate steps where I said "That doesn't exist. Could you do it this way?" Anything like that you can automate saves me time. It means I have to chat less. So that's the goal, is to slightly climb the complexity ladder in the piece of software we get out of a frontier model, and to chat less in the process.

**Jerod Santo:** Are you achieving that by having a system prompt, or are you actually fine-tuning? How are you as the Sketch.dev creators taking a foundation model and doing something to get here?

**David Crawshaw:** Today it is almost entirely prompt-driven. There's actually more than one model in use under the hood, as we try different things... For example, we use a different model for solving the problem of - if we want to go get a package, what module do we get to do that? Which sounds like a mechanical process, but it actually isn't. There's a couple of steps there. So a model helps out with that.

\[00:56:16.01\] There's very different sorts of prompts you use for trying to come up with the name of a sketch than there are for answering questions... But at the moment, it's entirely prompt-driven, in the sense that a large context window and a lot of careful context construction can handle this, can improve things. And that can include a lot of tool use. Tool use is a very fun feature of models where you can instruct -- so to back up and give you a sense of how the models work, an LLM generates the next token based on all the tokens that come before it. When you're in chat mode and you're chatting with a model, you can at any point stop and have the model generate the next token. It could be part of the thing you're asking it, or its response. That meta information about who is talking is sort of built into just a stream of tokens.

So similarly, you can define a tool that a model can call. You can say, "Here's a function that you can call", and it will have a result. And the model can output the specialized token that says "Call this function, give it a name, write some parameters", and then instead of the model generating the next token, you pause the stream. You, the caller, go and run some code. You go and run that function call that it defined. You paste the result of that function call in as the next set of tokens, and then ask the model to generate the token after it. So that technique is a great way to have automated feedback into the model.

A classic example is a weather function. So you define a function which says "Current weather." Then you can ask the model, "Hey, what's the weather?" and the model can say "Call function current weather." Your software that's printing out the tokens pauses, calls current weather, says "Sunny", you paste "Sunny" in there, and then the model generates the next set of tokens, which is the chat response saying "Oh, it's currently sunny." And that's the sort of easy way to plug external systems into a model.

This is going on under the hood of the user interfaces you use onto frontier models. So this is happening in ChatGPT, in Claude, in all these systems. Sometimes they show it to you happening, which is how you know. You see it less now, but about six months ago you could see - in the GPT-4 model you would ask it questions and it would generate Python programs and run them, and then use the output of the Python program in its answer. I had a really fun one where I asked it "How many transistors fit on the head of a pin?" and it started producing an answer and it said "Well, transistors are about this big. Pins are about this big. And so I guess...", the magic little emoji appeared, "that this means this many transistors fit on the head of a pin." Some very large number. And if you click on the emoji, it shows you the Python program it generated to do the arithmetic. It executed that as a function call, it came back with the result, and that saved it the trouble of trying to do the arithmetic itself, which LLMs are notoriously -- they notoriously struggle with doing arithmetic. So this is a great thing to outsource to a program.

**Jerod Santo:** That's a funny workaround, because if you're a calculator for words, you're not necessarily a calculator for numbers...

And when you can't do those reliably, then you could just write a program that does it and returns the same thing every time.

**David Crawshaw:** \[00:59:51.22\] Yes. They're very good at writing programs to do the arithmetic, very bad at doing the arithmetic. So it's a great compromise. The thing we do with Sketch is try to give the underlying model access to information about the environment it's writing code in using function calls. So a lot of our work is not fine-tuning the model, it's about letting it ask questions about not just the standard library, but the other libraries it's trying to use, so that it can get better answers. It can look up the Godoc for a method if it thinks it wants to call it, and use that as part of its decision-making process about the code it generates.

**Adam Stacoviak:** Can you describe "let it ask"? I mean, you've said a couple of times and I've been curious about this. When you say "let it ask", what does that mean? Like, decompress that compressed definition.

**David Crawshaw:** So at the beginning in your system prompt or something like your system prompt - it depends on the API, on exactly how the model works - there is a function call which is get method docs, and it has a parameter which is name of method. And then you can construct a question to an LLM that says "Generate a program that does this", with the system prompt, which explains that there's a tool call there. And so as your LLM is generating that program, it can pause, make a tool call that says "Get me the docs for this." And so the LLM decides that it wants to know something about that method call. And then you go and run a program which gets the documentation for that method from the actual source of truth, you paste it into the prompt, and then the LLM continues writing the program, using that documentation as now part of its prompt. So this is the model driving the questions about what it wants to know about.

**Jerod Santo:** And it just blocks and waits for that to come back, effectively.

**David Crawshaw:** Yes.

**Jerod Santo:** Yeah, so it's like an embed.

**David Crawshaw:** If you step back to like running llama.cpp yourself or something like this, you can sort of oversimplify one of these models as every time you want to generate a token, you hand the entire history of the conversation you've had, or whatever the text is before it, to the GPU, to build the state of the model. And then it generates the next token. It actually generates a probability value for every token in its token set.

And then the CPU picks the next token, attaches it to the full set of tokens, and then does that whole process again of sending over the entire conversation, and then generating the next token. So if you think about that very long, big, giant for loop around the outside of every time there's a new token, the token is chosen from the set of probabilities that comes back, it's added to the set, and then a new set of probabilities is generated for the next token.

You can imagine in the middle of that for loop having some very traditional code in there that inserts a stack of tokens that wasn't actually decided by the LLM, but then become part of the history that the LLM is generating the next token from. And so this is -- that's how those embeds work. You can effectively have the LLM communicate with the outside world in the middle there by it driving that. Or you don't even have to have it drive it. You could have software outside the LLM that looks at the token set as it appeared and then insert more tokens for it. So this is all the fun stuff you can do by running these models yourself.

**Jerod Santo:** It's wild.

**David Crawshaw:** Yeah, I know. It's so fun.

**Break:** \[01:03:41.08\]

**Jerod Santo:** Is Go particularly well suited for this kind of tooling, because of the nature of the language, or is it just your favorite, or...? Why Go?

**David Crawshaw:** Yeah, that's a really good question. The best programming language for LLMs today is Python, and I believe that is a historical artifact of the fact that all of the researchers working on generative models work in Python. And so they spend the most time testing it with Python, and judging a model's results by Python output.

There was a great example of this in one of the open benchmarks I looked at - and I believe this has all been corrected since then. This is all about a year old. There was a multi-language benchmark that tested how good a model is across multiple languages... And I opened up the source set for it, and looked at some of the Go code, because I'm a Go programmer... And it had been machine-translated from Python, so that all of the variable names in this Go code used underscores instead of camel case. And the models were getting a certain percentage success rate generating these results.

So Josh went through, actually, and made these more idiomatic in the Go style of using camel case and putting everything in the right place, and the model gave much better results on this benchmark. so that's an example of where languages beyond the basic ones that the developers of the models care about are not being paid as much attention to as what you would like. And things are getting a lot better there; the models are much more sophisticated, the teams building them are much larger, they care about a larger set of languages... And so I don't think it's all as Python-centric as it used to be. But that is still very much the first and most important of the languages.

As for how well Go works, it seems to work pretty well. Models are good at it by our benchmarks. Like we said, if we took the benchmarks and made them more Go-like, the models actually got better results. They have a real tendency to understand the language. We think it's a pretty good fit.

There are definitely times when models struggle, but it's a garbage-collected language, which helps, because in just the same way that garbage collection reduces the cognitive load for programmers as they're writing programs, it reduces the load on the LLM in just the same way. They don't have to track the state of memory, and when to free it... So they have a bit more thinking time to worry about solving your problem. So in that way, it's a good language. It's not too syntax-heavy, but it's also -- it doesn't have ambiguities that humans struggle with. Yeah, it seems to work well --

**Jerod Santo:** Pretty small...

**David Crawshaw:** Yeah. There aren't a lot of -- I haven't seen much research into what is the best language for an LLM. It does seem like an eminently testable thing. Like, there's some interesting -- in fact, it may end up influencing programming language design, in a sense, of imagine you are building a new programming language and you develop a training set that's automatically generated based on translating some existing programs into your language, and you train models for it... You could imagine tweaking the syntax of your new language, regenerating the training set, and then seeing if your benchmarks improve or not. So you can imagine --

**Jerod Santo:** Exactly.

**David Crawshaw:** Yeah. You can imagine driving readability of programming languages based on your ability to train an LLM to write this language. And so yeah, there's lots of really fun things that will happen long term that I don't think anyone started on work like that yet.

**Jerod Santo:** Right. So the level that you all are working at with Sketch, with Go in particular, is the prompting you're doing, and the contexting and everything else that you're building... Is it at a layer of abstraction where you could replace Go relatively easily with \*insert general programming language\*? Or is it like "Well, that would be a new product that we would build"? Like, how hard is that?

**David Crawshaw:** \[01:09:54.18\] Yeah, it's a good question. All of the techniques we're applying at general, but they are all very -- each technique requires a lot of Go-specific implementation. So in much the same way that a lot of the techniques inside of a language server for a programming language - these are the systems inside VS Code for generating information about programming languages... The techniques are general for like what methods are available on this object. They are very similar in Go as they would be in Java, for example. But the specifics of implementing them for both languages are radically different. And I think it's a lot like that for Sketch. The tricks we're using for Sketch are very Go-specific. And if we wanted to build one for Ruby, we would have to build something very, very different.

So yes, I consider it very much a Go product right now... And I really like that focus that that gives us. Because Go is a big enough problem on its own, let alone all of programming.

**Jerod Santo:** Yeah, yeah, yeah. I'm just asking that because I wonder how valuable and important tooling like this would be for each language community to either provide, or fund, or hope that somebody builds... Because if the LLM-related tooling for Go, because of Sketch, just hypothetically, becomes orders of magnitude more useful than just talking to ChatGPT about my Elixir code, for instance... Well, that's a real advantage for Go and the Go community. I mean, it's great for productivity for Gophers.

And going back to maybe the original question about "Should Tailscale have its own little chatbot built into it?", like, does each community need to take up this mantle and say "We need better tooling"? Or is it like VS Code should just do it for everybody?

**David Crawshaw:** I mean, that's a really good question.

**Adam Stacoviak:** Good job, Jerod.

**David Crawshaw:** Yeah. So I very much admire VS Code. I use it... Which, I don't actually have to admire a program to use it.

**Jerod Santo:** That's better than admiring, is using, I think.

**David Crawshaw:** Yeah, that's right.

**Jerod Santo:** \[laughs\]

**David Crawshaw:** But actually, I do both. I both admire it and use it.

**Jerod Santo:** Okay, fair.

**David Crawshaw:** But to look at the inside of VS Code, which I've been doing a bunch of recently... VS Code didn't actually solve language servers for all programming languages. They built JavaScript and TypeScript, JSON, and I think they maintained the C\# plugin... They started the Go plugin, I think, and then it got taken over by the Go team at Google, who now maintain the Go support in VS Code. I don't think the Microsoft team built the Ruby support in VS Code. I don't know who did the Python implementation, but a lot of the machinery in VS Code is actually community-maintained for these various programming languages. So I'm not sure there is another option than imagining a world where each of these communities supports the tooling in some form. I don't know if each programming language needs to go out and build their own Sketch... Maybe there is some generalizable intermediate layer, some equivalent of a language server that can be written to feed underlying models.

Given now -- we're just starting to explore this space. Sketch is very new. We basically started it sometime near the end of November. So there's not much to it yet... Yeah. But so far, what we've found is it's far more than the sort of language server environment that you get with VS Code. More machinery is needed to really give the LLM all the tooling it needs. The language server is very useful; we actually used the Go language server in Sketch. Gopls is a big part of our infrastructure. It's really wonderful software. But there's far more to it than that, to the point where we need to maintain an entire Linux VM to support the tooling behind feeding the model. So what each community needs to provide - I think that's the research in progress, is figuring that out.

**Jerod Santo:** \[01:14:08.23\] Yeah. It's an interesting question, and one I think will be open for a while. I do not want to see a world where Python continues to proliferate merely because of its previous position. I do see with tooling like Devin, and Bolt, and V0... These are very frontend, JavaScripty companies that are producing these things, which is fine. But it's like, if you are just going to go use that, it's going to produce for you a React and Next.js frontend, with a Prisma-based back-end... It's all very much like "These are the tools it has", and that's all well and good. But that's going to proliferate more and more of that one thing, where I'd love to see a diversity where it's like "Yeah, is there a specific thing for Rails people? Is there one for people who like Zig?" Now I'm moving outside of the world of web development, but you know what I'm saying.

And I think your answer might be right, which is like "Well, every community is going to have to provide some sort of greasing of the skids for whatever editor is popular or used", in order to make their tooling work well inside of these LLM-based helpers... Beyond just being like "ChatGPT knows about you", which is kind of like what people are at right now, is like "Does ChatGPT know about me?" It's the new "Am I googleable?" It's the new SEO at this point.

**David Crawshaw:** I've heard people talk about that. A startup founder, who I won't name, mentioned that they were busy retooling their product so that the foundation models under things like V0 and Bolt would be more likely to Npm include their package to solve a problem.

**Jerod Santo:** It's super-smart to do that right now.

**David Crawshaw:** I agree.

**Jerod Santo:** Did they divulge any of the how? Like, what are the mechanical steps that you do that?

**David Crawshaw:** I was actually really happy that they said that their plan was to make it really easy to Npm \[unintelligible 01:16:08.27\] package and not require a separate signup flow to actually get started.

**Jerod Santo:** Oh, that's nice.

**David Crawshaw:** Yeah, I thought it was wonderful. Their solution to make their product more chatgpt-able, I guess you might say, is just make their product better... Which, if that's --

**Jerod Santo:** \[laughs\] How avant-garde of them. Yeah.

**David Crawshaw:** Yeah. I'm sure one day we'll end up in the search engine optimization world of frontier models. But today --

**Jerod Santo:** There's gonna be some black magic for sale. You know, "Here's how you really do it."

**David Crawshaw:** Yeah... I don't see why a frontier model couldn't run an ad auction for deciding what fine-tuning set to bring in... I had -- again, to talk about experiences, I was using one of the voice models and talking to it as I was walking down the street and I asked it some question about WD-40, because I had a squeaky door... And I think I described in my question WD-40 as a lubricant. And it turns out I just didn't understand that it's not a lubricant, it's a solvent, and the purpose of it is to remove grease.

**Jerod Santo:** It took me years to realize that. I think someone finally told me... Because I've been using it as a lube all these years.

**David Crawshaw:** Yeah...

**Adam Stacoviak:** Oh, my gosh.

**Jerod Santo:** Why do you have to keep reapplying it, you know... \[laughs\] It's not very good lube.

**David Crawshaw:** Well, I just had your experience, but it was an LLM that told me.

**Jerod Santo:** How hilarious.

**David Crawshaw:** And it mentioned in passing, it's like "Yeah, you could also -- you could use WD-40 and then use a lubricant like", and then it listed some brand name. And the moment I heard the brand name, I was like "Oh, I see. A frontier model could run an ad auction on fine-tuning which brand name to inject there." And that would be a really--

**Jerod Santo:** 100%.

**David Crawshaw:** \[01:17:51.29\] Yeah. It wouldn't require doing it into the pre-training months ahead of time. You could do that sort of on an hour by hour basis. So that world is coming... And then once there's a world of ads, there's a world of SEO and all the rest of it.

**Jerod Santo:** Well, the more paramount they become - and Adam, you can probably speak to this, because you're injecting it into every aspect of your life... Like, if the answer includes a product right there, you're just going to be like "Alright, I've got to get that." Sometimes you don't even realize Kleenex is a product. You think that that's a category. But no, that's a product.

**David Crawshaw:** Yeah, absolutely.

**Adam Stacoviak:** Hard to tell, honestly...

**David Crawshaw:** Kleenex is an easy one for me, because we don't have Kleenex in Australia, where I'm from.

**Adam Stacoviak:** Is that right?

**David Crawshaw:** And so I came here and everyone started calling tissues Kleenex, and it was a bit of a surprise to me.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** It's like Coke or Coca-Cola, something like that, you know?

**David Crawshaw:** Right. Exactly.

**Adam Stacoviak:** Yeah... I don't know if -- I've gotten some hallucinations, let's just say, on products... And even limited information of what's the true good option when it comes to product search. I haven't done a ton of it, mainly on like the motherboard search... Like, I want to do something that has the option for either an AMD Ryzen, or Threadripper, with more of a workstation, enterprise-class CPU, and I want to like maximize some PCIe lanes... So I'm just trying to like figure out what's out there... I'd prefer the chat interface to find things, versus the Google interface, which is search, by nature, to find things... But thus far, it hasn't been super-fruitful. I think eventually it'd be cool, but it's not there yet.

**David Crawshaw:** I imagine in the YouTube video of this a little Intel Xeon banner will appear, just as you say "other options..."

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** That's right. Yeah, on the \[unintelligible 01:19:33.11\]

**Jerod Santo:** Yeah, exactly.

**Adam Stacoviak:** I'm a fan of Intel Xeons, too. I've got the Intel Xeon 4210...

**Jerod Santo:** Well, now it's really popping up.

**Adam Stacoviak:** There you go. Bing, bing, bing. It's like in Silicon Valley when Dinesh was talking out loud and they had the -- I think they had AI in the VR, and it was doing some cool stuff. It was pulling up ads real time. It was cool. But yeah, Intel's cool.

AMD is cool. But PCIe lanes are even cooler, you know? Give me the max. Buy 16.

**Jerod Santo:** David, maybe we close with this, for those who aren't Gophers out there... Of course, brand new, hot off the press, still in development, three months old Sketch.dev. Check it out if you're into Go and those kinds of things. But let's imagine you're just a Ruby programmer out there, and you came across your blog post about what you've been doing, these three methods of working with AIs; you have autocomplete, you've got chat, you've got search... Where should folks get started if they haven't yet? First of all, is today the day? Is it worth it now? Or should I wait? And then secondly, if I am going to dive in and I just want to use it in my local environment to just code better today, what would you suggest?

**David Crawshaw:** Yeah, good question, especially for non-Gophers. I would suggest trying out the code completion engines, because they take a little bit of getting used to, but not a lot. And depending -- if you're writing the sorts of programs they're good at, they're extremely helpful. They save a lot of typing, and it turns out -- I was surprised to learn this, but what I learned from code completion engines is a lot of my programming is fundamentally typing-limited. There's only so much my hands can do every day. And they're extremely helpful there.

The state of code completion engines is they're pretty good at all languages, with the caveat that they're probably not very good at COBOL, or Fortran... But all the sort of general languages, especially like Ruby, I'd expect them to be decent at. I suspect the world of code completion engines will get better at specific languages as people go deeper on the technology. It's a thing I continue to work on, and so I feel confident that it can be improved.

The other place that I think most programmers could get value today if they're not a Go programmer is writing small, isolated pieces of code in a chat interface. So you could try out a ChatGPT or a Claude, or if you really want to have some fun, run a local model and ask it to solve problems. Try llama.cpp, try Ollama, try these various local products...

Grab one of the really fun models...

\[01:22:19.18\] It's especially easy to try on a Mac with a unified memory. If you're on a PC, you might have to find a model that fits in your GPU. But it's a ton of fun, and use it to say like "Write me a Ruby function that takes these parameters and produces this result." And I suspect the model will give you a pretty good result. So those are the places I would start, because those require the least amount of learning how to hold the model correctly, and you'll get the most benefit quickly.

**Jerod Santo:** Love it. Good answer. I'm just wondering out loud, and feel free not to know, but when it comes to prompting - I know we're past the age of magical incantations, but as you guys have been building out a product, which is basically sophisticated prompting, are there guides that are useful, or they're like... I remember finding a site - I can't remember right now - there's like people just sharing their system prompts for certain things they do... Maybe there's like a Ruby prompting guide which makes it a little bit easier to get quality results out faster... Does either of you guys know?

**David Crawshaw:** Yeah, I've seen people write guides like that. I would say the guides I've read are now out of date. Like we were saying earlier, guides go out of date. The thing I find most useful is to think of the model I'm talking to as someone who just joined the company. Sometimes I think of them as an intern, though every now and again the models produce much better code than I can... But interns have done that, too. That happens. And then as you're writing the question for it, imagine like - I'm talking to a smart person who knows nothing about what I'm doing, and they need some background. And that gets me really far with the current frontier models. So that would be my general piece of advice that I think applies to any programming language.

**Adam Stacoviak:** I agree with that, too. The random "Just give me X" - you'll get a result, but you'll have to massage it further. It'll ask you more... I will often give it context; like you've said, this intern, this smart person that's new to context, they don't have the background awareness that you want somebody to have... And I'll often give it a lot of that, have a particular request, but then also say "Is there anything else I can give you, or any other information you need to give me a successful answer?" Just some version of like be successful with our goal.

And it's strange even talking like that too, as I even say it out loud, "our goal", as if it's human... And Jerod, you know where we're standing with this. Jerod and I have some history; so I've been very kind, "please", and "thank you."

**Jerod Santo:** He's very nice. He talks to it like we're on the same team, and stuff.

**Adam Stacoviak:** If it gives me a great result, I say "Fantastic."

**Jerod Santo:** High fives.

**Adam Stacoviak:** Yeah, high fives. Why would I be any different?

**Jerod Santo:** Do you offer it money?

**Adam Stacoviak:** No, I haven't done that yet. I've got to try that. I've got to try that, honestly.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** But I will ask, "Could you be more successful? Is there anything else I can give you, any more information I can give you to get us to our goal?" And I've found that that's it. Like, it's context. It's a full circumference of the problem set, as much as you can, that makes sense, and then you will have a more fruitful interaction. I will also say that I'm more exclusively using ChatGPT. And so the O1 model, while it's expensive, let's just say - I don't have the expensive plan... I still don't feel like I can be the person that spends 200 bucks a month on this thing. I would much rather buy a GPU than spend 200 bucks a month. Somehow that math makes more sense to me. But then O1's been pretty successful with thinking, and iterating, and more precision... Whereas 4.0 was a bit more brute. But that's just my personal take.

**David Crawshaw:** \[01:26:23.19\] I think you might be onto something with being nice to models. I caught myself being pretty curt with models a few months back... And discussing this a lot with Josh, he mentioned -- the conclusion we came to was one of the challenges of not being nice to models is it sort of trains you to not be nice to people.

**Adam Stacoviak:** Yeah.

**David Crawshaw:** Because you're using all of the same tools... And so it might just be good for you to be nice to models.

**Adam Stacoviak:** I mean, I just don't -- if it's humanistic, even, similar to a human, why not just be kind? Why not?

**Jerod Santo:** I hate to break it to you, Adam, but this is not similar to a human.

**Adam Stacoviak:** The iteration is. It is. It certainly is. If I were collaborating, if that was a human over there giving me the answers back, it would be very human volleyball iterative.

**Jerod Santo:** If.

**Adam Stacoviak:** If it was.

**Jerod Santo:** Right.

**Adam Stacoviak:** I get that it's not, but I'm also like -- like David, "Why not?"

**David Crawshaw:** I think I'm somewhere between your two positions, because I do think it's just a machine, and it's just a tool...

**Adam Stacoviak:** I don't think it's human. Don't let me think that.

**Jerod Santo:** Well, you kind of just said that you think it is... \[laughs\]

**Adam Stacoviak:** Did I? I mean, is that how you interpreted it?

**Jerod Santo:** Yes.

**Adam Stacoviak:** I just meant that if it -- maybe what I mean by that, just to be more clear, is kind of keying off what David said, which is like being kind. Just, why not? I don't know. I'm not overly like "Thank you so much. You're amazing."

**Jerod Santo:** Because it takes time.

**Adam Stacoviak:** I think it's just, I'm a kind person...

**Jerod Santo:** Where you nice to Google when it got you a result in the search engine? Like, you just --

**Adam Stacoviak:** Well, it is not a prompt where there's an ebb and a flow, or a back and a fourth. It's just simply returned an answer.

**Jerod Santo:** Well, "How are we doing?" It asks you at the end, "How are we doing?" Do you tell it?

**Adam Stacoviak:** Well, that being said, I'm not like "Thank you very much." I'm just --

**Jerod Santo:** I'm just antagonizing him at this point...

**Adam Stacoviak:** Yeah, I know you are. You're really digging into me. But I can catch myself saying "That's awesome" or "Great job." Or "I agree with that." Things, isms like that that you would say to another person.

**Jerod Santo:** If that makes you feel more like a nice human, then you should just keep on doing that. But I don't think it's doing anything for the computer.

**Adam Stacoviak:** I don't think it is either.

**Jerod Santo:** It is actually costing resources from the world...

**Adam Stacoviak:** \[laughs\] Listen to you... That's true, too.

**David Crawshaw:** I mean, I think you're right, it doesn't help the computer.

**Adam Stacoviak:** That's true, too.

**David Crawshaw:** I say please and thank you to the models now, so that I remember to say please and thank you to humans. That's it. It's purely -- I don't want to get into the habit of...

**Jerod Santo:** Yeah. You're training yourself.

**David Crawshaw:** Exactly. It's all about training m.

**Jerod Santo:** That's fair.

**Adam Stacoviak:** Self-training. Yeah, I don't feel like I have to. I feel like it's just a natural Adamism. How I do things, how I operate.

**Jerod Santo:** \[unintelligible 01:28:59.16\]

**Adam Stacoviak:** It's who I am in my core. I'm a kind person.

**Jerod Santo:** Well, David, thanks so much for joining us, man...

**David Crawshaw:** Thanks for having me.

**Jerod Santo:** ...and sharing all your knowledge. You've learned a lot, and I've learned a lot from you, o we appreciate your time.

**David Crawshaw:** This was a ton of fun. Thanks for having me.
