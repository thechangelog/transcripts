**Adam Stacoviak:** So Cody, this is a big deal.

**Beyang Liu:** We think it is, yeah.

**Jerod Santo:** It seems it.

**Adam Stacoviak:** Wasn't it Sourcegraph 4.0 last year was relaunched as the intelligence platform? Is that right?

**Beyang Liu:** Yeah, yeah.

**Adam Stacoviak:** Because before - not just, but just code search... Which was cool, but hard to really map out the ecosystem. And you want all the space in there, but there was a limit to code search, and you had to expand, and the insights, and the intelligence... And now obviously code is just one more layer on top of insights.

**Beyang Liu:** Yeah, totally. As you know, Sourcegraph historically has been focused on the problem of code understanding, so heavily inspired by tools like Code Search inside Google, or TBGS inside Facebook, this kind of system that indexed your company-wide codebase, as well as your open source dependencies, and made that easy to search and navigate... And that's what's been powering the business for the past 10 years. It's actually the 10th year of Sourcegraph.

**Adam Stacoviak:** Congratulations!

**Beyang Liu:** Thank you.

**Jerod Santo:** I was just wondering about that, because when we first met you, it had to be about a decade ago. I think Sourcegraph just either didn't exist, or just had existed... Sourcegraph existed when we met. This was like GopherCon, the first --

**Beyang Liu:** I think it was like 2014, the first or second GopherCon.

**Jerod Santo:** Yeah. And you had this vision of Sourcegraph. And I'm wondering, 10 years later, have you achieved that vision? Has the vision changed, etc?

**Beyang Liu:** You know, our mission was always to enable everyone to code, and we actually took a look at our seed deck recently...

**Jerod Santo:** Was it quaint?

**Beyang Liu:** It was very quaint. We were very bad at PowerPoint...

**Jerod Santo:** You're probably a lot better at it now... \[laughs\]

**Beyang Liu:** Not really, but... \[laughter\]

**Jerod Santo:** Okay. Better at the pitch, maybe.

**Beyang Liu:** Maybe, slightly.

**Jerod Santo:** You refined your pitch.

**Beyang Liu:** But largely, I could deliver that pitch today off of the deck and it's basically the same.

**Adam Stacoviak:** Do it. Do it right now.

**Beyang Liu:** I mean, the pitch is Sourcegraph, which is there's never been more code in the world. Most of your job as an engineer or software creator is understanding all the code that already exists in your organization... Because that is all upstream of figuring out what code you want to write. And then once you actually figure out what you need to build, that's almost the easy part. It's also the fun part, because you build new things, and shipping stuff. But we help you get to that point of creation and enjoyment by helping you pick up all that context. Traditionally, that's been search. Just like Google's been web search. But then these large language models have now come on the scene, and in some ways they're disruptive to search engines, but in other ways they're highly complementary. Anyone who's used ChatGPT --

**Adam Stacoviak:** I'm still googling... It's just less.

**Jerod Santo:** Right. It's more the last thing you do when you can't get the answer elsewhere. Like "Yeah, I guess I'll go google it..."

**Adam Stacoviak:** Yeah. Google is a weird thing, because I will search a product, and they think I want to buy it, not research it. So I want to learn about the thing, and those who are teaching about the thing, and how it integrates with other things, not where can I buy it and for how much. So there's zero context there. They're incentivized, it seems, to point you to a place that you can purchase it, not learn how to use it... Which is the opposite of ChatGPT.

**Beyang Liu:** \[00:07:58.14\] Yeah. So there's kind of pluses and minuses to both. With Google, you get results to actual webpages, and you can kind of judge them based on the domain, and it's kind of more primary source material, which is useful... It's also live; you get results from 2023, rather than 2021, whereas ChatGPT --

**Adam Stacoviak:** That'll change... It's a temporary thing, right? I mean, the delay will be temporary. Eventually, it'll catch up.

**Beyang Liu:** Well, I mean, ChatGPT-4 is still -- it came out recently.

**Adam Stacoviak:** 2021, right?

**Beyang Liu:** It's still 2021.

**Jerod Santo:** Right. But isn't the plugins and all that stuff where it's like okay, the model is old, but it has access to new data?

**Beyang Liu:** Yeah. So the plugins is actually where it gets interesting, because that's where things get really powerful, in my opinion... Because if you ask ChatGPT with the plugins enabled, it can go and browse the web on your behalf. So it's not just the base model trying to answer your question from memory anymore, it's essentially googling for things, right?

**Jerod Santo:** Yeah. It has access to what you would do...

**Adam Stacoviak:** Behind the scenes \[unintelligible 00:08:57.04\]

**Beyang Liu:** Exactly. So it's the best of both worlds. And essentially, we're doing that with Cody, but in your editor, for developers. So basically, combining large language models like GPT-4 or Anthropic's Claude model, and then combining that power with the most advanced code search engine in the world. So it's the best of all worlds, it gives you highly context-aware and specific answers about your code, and it can also generate code that's kind of tuned to the specific patterns in your codebase, not just the kind of median StackOverflow or open source code.

**Adam Stacoviak:** Yeah. How did you get there? I mean, obviously, LLMs are a big deal... This new wave of intelligence that we have access to is -- how far back is this in the making? Has this been years, or has it been like "Wow, ChatGPT is crazy."

**Jerod Santo:** November... \[laughter\] "Okay, we've gotta move..."

**Adam Stacoviak:** How far back does this go?

**Jerod Santo:** Yeah, good question.

**Beyang Liu:** Yeah, so for me personally it's kind of a bit of a homecoming. So my first interest in computer science actually was with machine learning and artificial intelligence. That's what I did a lot of my undergrad. I was actually a part of the Stanford AI lab, doing vision research in those days under Professor Daphne Koller. She's my advisor. And so I did a lot of work there, it was super-interesting, and I felt really passionate about it. There's just a lot of elegant math that goes into things, and it feels you're kind of poking at some of the hidden truths of the Universe a little bit... But the technology at that point was just - it was nowhere near commercializable. And so I decided to pursue my other passion, which is developer productivity and dev tools, and kind of stayed on top of the research as it was coming along.

I think one of the inflection points for us was the release of GPT-3, because that was kind of a step function increase in the quality of the language models, and we started to see some potential applications to developer tools and code... And we really started in earnest maybe a little over a year ago, maybe 12 to 18 months ago, experimenting with the kind of internal representations of language models as a way to enhance code search. So we actually put out an experiment called Codesearch.AI, that uses embeddings to enhance the quality of code search results that you get. And that was pretty successful as an experiment. I think we released that probably middle of last year, so about a year ago. And that kind of started us down the road.

And then of course, when ChatGPT came out, that was also another big inflection point, and that's when we started to think very seriously about kind of like a chat-based interaction that could happen in your editor, and have all the advantages of ChatGPT, but know about the specific context of your code. So for Cody specifically, I think the first commit was December 1st, or something that... And by February, we basically had a version that we were having users and customers try, and then March was when we rolled out to our first enterprise customers. So it's just been this whirlwind of development activity. And I don't know, I cannot remember a time where I've been more excited and just eager to build stuff, because it's -- we're living through interesting times right now.

**Adam Stacoviak:** \[00:12:15.27\] This is the eureka moment that we've all been waiting for, basically. I mean, this is the invention of the internet all over again, potentially the iPhone level invention... I think it's a dramatic paradigm shift in how we think as engineers and software developers... Like, how do we learn, how do we leverage, how do we augment... It's just insane what is available to somebody who doesn't have an understanding to quickly get understanding, and then be performing a certain task or whatever because of the LLMs that are available and how it works. It's so crazy.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** The chat interface is pretty simple though, right? The simplicity of a chat interface... Did you expect this eureka moment to be simply chat? You know, it's a web app. It's not something else. It's a web interface, it's a chat interface...

**Beyang Liu:** I'm a programmer by background, so I've been trying to spread the gospel of textual-based input for as long as I can remember. Obviously, it's mostly fallen on deaf ears, because the non-programming world is like "What, command line? Are we in like the 1980s?" But I actually think, philosophically, textual input, the reason I like it is because if you think about just the IO, like bit rate of human-computer interaction - we live in a time where we have 4k screens running at 60 or 120 hertz. The sheer amount of data that computers can feed into us through eyeballs is huge. Whereas in the point and click mouse world, how many bits per second can you really feed into the computer as a human?

Now, textual input doesn't get us all the way there, to 4k times 60 hertz, but it does -- it basically 10x's or more the input bit rate of what we can do to instruct machines. I think it's a great win for human agency. We want to be programming the computers, not the other way around. And I think a lot of the technology that has emerged over the past 10-15 years has been kind of computers programming us as humans a little bit, in terms of all the stuff that we consume...

And so yeah, I'm super-excited for textual-based inputs. I think Chat is kind of a subset of that. The way we think about Cody evolving is really it's going to evolve in the direction of just this rich repl. So it's not necessarily going to be like "Oh, it's a human-like thing that you talk with conversationally", it's more like if you wanna do a search, you type something that looks a search query, it knows that you want to do a search, and it shows you search results. If you ask a high-level question, it knows you're asking a high-level question, it gives you an answer that integrates in the context of your codebase. If you want to ask a question about your production logs, or maybe about something someone said in chat, or like an issue or a code review, it should pull context from those sources, and integrate that, and both synthesize and answer to your specific question, but also refer you back to the primary sources, so that you can go and dig deeper and understand more fully how it got to its answer.

So we think chat is just the starting point. It's really just like this rich repl that's going to integrate all sorts of contexts... Whatever piece of information is relevant to you creating software; this is kind of the thing that focuses that and pulls it all in.

**Jerod Santo:** It really seems like that, at least as an interface, you're seeing that as the future of what Sourcegraph is, isn't it? Or is there more to Sourcegraph than that in the future?

**Beyang Liu:** So the way we think about it is we've spent the past 10 years building the world's most advanced code understanding tool. So we have the best code search, we have the best code graph... So the global reference graph, across all the different languages in the world. We have a large-scale code modification refactoring system, and a system to track high-level insights...

\[00:16:12.19\] So there's all these backend capabilities that are really, really powerful. And what language models have done is given us a really, really nice, beginner-friendly interface to all that power. And I think you're gonna see this across all kinds of software. Historically, building power user tools has been difficult, because the on-ramp to taking full advantage of those tools - it's been a little steep.

**Jerod Santo:** It requires education, yeah.

**Beyang Liu:** Yeah. And so if you're worried about the on-ramp, maybe you end up constraining your product a little bit, just to make it simpler, dumbing it down for the beginning user, but you lose out on the power. I think that trade-off is no longer going to be as severe now with language models. And so at Sourcegraph, we're basically rethinking the user interaction of the entire experience. The underlying capabilities, the underlying tech is not changing. That's still -- if anything, that's gotten more valuable now, because you can feed it into a language model and instantly get value out of it... But the entire user interaction layer I think needs to be rethought. And Cody, as your AI editor assistant, is kind of the first iteration of that thought process.

**Adam Stacoviak:** How did you iterate to the interface you're at now? And is it a constant evolution?

**Beyang Liu:** Yeah, I mean, it's pretty much like "Hm, I think that would be a good idea. Let me go hack it together and see how it plays." And you play around with it, and then you kind of experience it yourself, and you build conviction in your own mind, and then you maybe share it with one or two other teammates and see if they have the same wow moment... And if they do, that's usually a pretty good sign that you're onto something. There might be more details to hammer out to make it more accessible to everyone, but if you can convince yourself and at least two or three other smart people out there that there's something worth investigating, I think that's typically a pretty good sign that you're onto something.

**Adam Stacoviak:** How do you get access to Cody? Not so much get access, but how do you use it in the Sourcegraph world? How does it appear, how do you conjure it?

**Beyang Liu:** Yeah, so it's just an editor extension. You can download it from the VS Code Marketplace. It's available now, and it's free to use. And we have other editors on the way. IntelliJ is very high priority for us, also Neovim, and of course, my editor of choice, Emacs...

**Jerod Santo:** Of course! \[laughter\]

**Beyang Liu:** And we're developing it completely in the open, as well. So Cody itself is completely open source and Apache-licensed. And to get access to it, to start using it, you just install the extension into your editor and start using it. It opens up in the sidebar, you can chat with it... We also do inline completions. So as you're typing, we can complete code. Again, taking advantage of the kind of baked-in knowledge of the language model, plus the context of your specific codebase. So generating very high-quality completions. And yeah, it's generally just as simple as installing the extension and then you're off to the races.

**Adam Stacoviak:** Probably a Sourcegraph account first, right?

**Beyang Liu:** Yeah, so you do have to auth through Sourcegraph, because that's how we -- I mean, we wouldn't be able to provide it for free if you didn't auth through Sourcegraph, because on the backend we're calling out to different language model providers, and we're also running a couple of our own.

**Adam Stacoviak:** Okay. So accessible then. Not having to install Sourcegraph, have it scan my repository... Like the traditional way you provide intelligence, which is to leverage literally Sourcegraph on my repo. I can just simply auth through Sourcegraph, have an extension in my VS Code, or in the future Emacs, Vim potentially...

**Beyang Liu:** Exactly. They're kind of loosely coupled. We don't believe in strong coupling just for the sake of selling you more software. And I think with Cody, the design philosophy was like look, if you connect it to Sourcegraph, it does get a lot better. It's like, if you gave a really smart person access to Google, they're going to be a lot smarter about answering your questions. But if you don't give them Google, they're still a smart person, and so Cody will still fetch context from kind of your local code, using non-Sourcegraph mechanisms if you're just running it standalone.

**Adam Stacoviak:** \[00:20:13.20\] How does it get this intelligence as an extension? Explain how that works. I've got it on my local repo, it's an extension... How does it get the intelligence from my codebase?

**Beyang Liu:** Yeah, so it's basically -- I mean, think of the way that you would understand or build a mental model of what's going on in a codebase as a human. You might search for some pieces of functionality, you might read through the readme, click on a couple of search results...

**Adam Stacoviak:** It does all that. It's reading my readme right away?

**Beyang Liu:** Yeah, basically. So when you ask a question, Cody will ping Sourcegraph for "Hey, what are the most relevant pieces of documentation or source code in your codebase?" And then essentially, quote-unquote, read them as a language model, and use that as context for answering a question. So if you ask a general-purpose question, it'll typically read the readme; if you ask a more targeted question, like "Oh, how do you do this one specific thing?", like read a PDF or whatever, it'll go find the places in source code where you're -- it processes PDFs and read that in, and then interpret that through the lens of answering your question.

**Adam Stacoviak:** In real time.

**Beyang Liu:** In real time, yeah.

**Adam Stacoviak:** Is there a latency to the question, to the gathering, and -- what's the speed? If I said -- that example, "How does my application compile a PDF from a markdown file", for example?

**Beyang Liu:** Yeah, so it typically gets back to you within one or two seconds... And most of the latency is actually just the language model latency. So it depends on what language model you're choosing to use underneath the hood. All the Sourcegraph stuff is super-fast, because that's just--

**Adam Stacoviak:** Of course.

**Beyang Liu:** I mean, there's no -- yeah, Sourcegraph is fast. We've spent the past ten years making it very fast, and there's no billions of linear algebra operations happening with Sourcegraph. Sourcegraph is just classical CPU-based code and \[unintelligible 00:21:57.02\]

**Adam Stacoviak:** What about privacy?

**Beyang Liu:** Yeah, so privacy is extremely important to us, both in terms of individual developers and our enterprise customers. The last thing they want to do is have their private code be used as training data into some general-purpose model that's going to leak their sensitive IP to the rest of the world. So we basically negotiated zero retention policies with all our proprietary language model providers, which means that your data is never going to get used as training data for a model... And not only that, the language model providers will forget your data as soon as the request is complete. So there is no persistence in terms of remembering the code that you sent over to complete a request. That just gets forgotten as soon as the language model generates a request for Cody. And then for the rest of it - I mean, Sourcegraph has always taken user privacy and code privacy very seriously. It's why we've been able to serve the sorts of enterprise customers that we do, and...

**Adam Stacoviak:** For sure. I know why that's important, but spell it out - why is that important? Is your retention policy -- what's the real breakdown of that privacy... Why is it important to them and users?

**Beyang Liu:** So from a company's point of view it's important, because you don't want to leak portions of your codebase, or have them persisted in the logs of some third-party data provider. As an individual developer, I think it's just important to give you control over your own data. And I think that's going to be an especially important thing in this new world that we're living in. Before, private data was valuable; it carries value, it tells you things about a certain person, or the way they work, and it can be used for purposes, both good and bad...

**Adam Stacoviak:** Search history. It's like search history, right?

**Beyang Liu:** Yeah, exactly.

**Adam Stacoviak:** You can tell a lot about a person by their search history, their watch history, their like history...

**Beyang Liu:** Totally.

**Jerod Santo:** But that's useful for a whole other reason, right?

**Beyang Liu:** \[00:23:51.25\] Yeah. And I think it's important to grant our users and customers control and ownership over that data, because it is your data. And I think with language models - language models 10x the value and the sensitivity of that data. Because now, instead of just feeding into a gen one AI model, or exposing it to some other human, you can feed it into one of these large language models that can kind of memorize everything about you as a person or a programmer. And in some ways, maybe that's good, if you're open to that. If you're willing to share your data, we could potentially train language models that you know emulate some of the best and brightest programmers in existence... But ultimately, we think that should be your personal --

**Adam Stacoviak:** Opt-in.

**Beyang Liu:** Opt-in, exactly.

**Adam Stacoviak:** How explicit is that in this signup or the acceptance of the Cody license, or the -- you know, this GA, to now widespread usage... How explicit are you with a new sign-up that says "I want to use Cody"? Do you say privacy and all of these things you've just said, basically? How clear is that?

**Beyang Liu:** So when you first install it, there's kind of a Terms of Use that pops up, and you cannot use Cody unless you read through and accept it.

**Adam Stacoviak:** How many words is in that TOS?

**Beyang Liu:** It fits on basically one page without scrolling.

**Adam Stacoviak:** Okay, so 1000 words maybe. 500? 250.

**Beyang Liu:** Maybe not 250. I think probably 250 to 500. I had to go back and check specifically...

**Adam Stacoviak:** Gotcha. Digestable in a minute.

**Beyang Liu:** Yeah. We're not trying to be one of those companies that tries to hide stuff.

**Adam Stacoviak:** What I mean by that is less trying to say "Are you hiding it?" but more "How clear are you being?" Because it seems you care to be clear. So is that a paramount thing for you all, to be so clear that you say "Hey, privacy matters. We don't collect -- there's zero retention." It's spelled out really clear.

**Beyang Liu:** It's a bullet list basically saying exactly what you said. Privacy matters, we don't collect data in this way, we're not using --

**Adam Stacoviak:** I wrote it for you, basically.

**Beyang Liu:** Well, Tammy, our wonderful legal counsel...

**Adam Stacoviak:** I'm just kidding. I did not write it. I'm just kidding.

**Jerod Santo:** We all know ChatGPT wrote it, okay? Let's be serious here. \[laughter\]

**Beyang Liu:** Actually, that's a great use case for ChatGPT. If you're asked to accept one of these lengthy end user --

**Jerod Santo:** Paste in there and it summarizes it for me.

**Beyang Liu:** Paste it in there and summarize it. Tell me if there's anything fishy.

**Adam Stacoviak:** Yes, for sure.

**Jerod Santo:** That'd be cool, for sure.

**Adam Stacoviak:** That's the best -- I cannot wait, honestly, for that to come out... "What are the loopholes in this contract? I have nefarious action on the other side. What are my loopholes to get out?" You know what I mean?

**Beyang Liu:** Yup, yup.

**Adam Stacoviak:** For bad or good. I guess you could use that in the bad side or the good side.

**Jerod Santo:** GPT for X, where X is literally everything \[unintelligible 00:26:24.13\] There's gonna be one specifically trained for lawyering...

**Beyang Liu:** Yeah, yeah. I think language models will be a huge democratizing force in many domains. Democratizing understanding of legal concepts, democratizing access to software creation... I think there's gonna be a huge expansion of the percentage of people that's going to be able to access those knowledge domains.

**Jerod Santo:** Right. So let's say I'm a happy GitHub Copilot user...

**Adam Stacoviak:** Oh, yeah.

**Jerod Santo:** Would I install Cody alongside this and be happier, would I be less happy? Are these competitive? Is this a zero-sum game? Do I need to go all-in on Cody? What are your thoughts on that?

**Beyang Liu:** I think it's the exact opposite of a zero-sum game. I think there's so much left to build; the market is huge, and vastly growing... We do have features that Copilot doesn't have. Currently, they don't have kind of a chat-based, textual input to ask high-level questions about the code... I think that's coming in Copilot X, to some extent...

**Jerod Santo:** Yeah, I think they announced that, but it's not out yet, I don't think.

**Beyang Liu:** It's not out yet, and if you look at the video, the kind of context switching they're doing, it's basically like your currently open file, explain that. And Cody is already doing much, much more than that. It's reading -- even if you ask it a question about the current file, it will actually go and read other files in your codebase that it thinks are related, and use that to inform your answer.

\[00:27:53.11\] So we think the power of Sourcegraph gives us a bit of a competitive edge there, with the kind of high-level questions, and onboarding, and kind of rubber-ducking use case... And then for completions - I think Copilot is great, but for completions we're essentially doing the same thing. So the completions that Cody generates, it takes into account that same context when it's completing code. So that means it's better able to kind of mimic or emulate the patterns and best practices in your specific codebase. And again, because we're kind of open source and model-agnostic, we are just integrating all the best language models as they come online. So I think Anthropic -- I don't know when this episode's going out, but Anthropic --

**Adam Stacoviak:** Pretty quick. The 24th.

**Beyang Liu:** Yeah, so Anthropic just announced today that they have a new version of Claude that has an incredible, like a 100,000-token context window.

**Jerod Santo:** Wow.

**Beyang Liu:** I think it's orders of magnitude more than what was previously available. And that should be -- by the time this episode goes online, it should be available in Cody. Whereas Copilot, I think they're -- maybe someone from GitHub can correct me if I'm wrong, but I think they're still using the Codex model, which was released in 2021, or something. And so it's a much smaller model, that only has around 2000 tokens of context window, and much more basic context switching. It's already incredibly useful, but I think we're kind of taking it to the next level a little bit.

**Adam Stacoviak:** So open source and model-agnostic...

**Beyang Liu:** Open source, model-agnostic, we're not locking you into a vertical proprietary platform...

**Adam Stacoviak:** Privacy-friendly...

**Beyang Liu:** Privacy-friendly... Also enterprise-friendly... Sourcegraph, we made ourselves easy to use in both cloud and on-premises environments... So we're just trying to do the best thing for our customers and for developers at large.

**Jerod Santo:** So because you're model-agnostic, does that mean that you're not doing any of the training of the base layer models. So do you also sidestep legal concerns? Because I know with Codex and Copilot there's been -- there's at least one high-profile lawsuit that's pending... There's legal things happening, there's gonna be things litigated, and I'm wondering if you're in the target for that now with Cody, or if you're just not because these other people's models?

**Beyang Liu:** No, we're very mindful of that. We actually integrate models in a couple of different ways. So we do it for kind of the chat-based autocomplete, there's a separate model we use for code completions, and there's another model that we use for embeddings-based code search and information retrieval... And it's kind of a mix and match. Sometimes we'll use a proprietary off-the-shelf model, other times we'll use a model that we fine-tuned. But for the models that we do rely on external service providers for, we're very mindful of the kind of evolving legal and IP landscape. And so one of the things that we're currently building is basically copyright code -- or copied code detection. And if you think about it, Sourcegraph is a code search engine. It's kind of in a great position to build this feature. It's like, if you emit a line of code, or you write a line of code that is verbatim copied from somewhere else in open source, or even in your own proprietary codebase - you might be worried about just code duplication - we can flag that for you, because we've been building code search for the past 10 years.

**Jerod Santo:** Yeah. Cool stuff, man. So... Moving fast... What comes next? When are you gonna drop Cody 2? It's probably like a week from now, right?

**Beyang Liu:** Yeah, that's a great question. I mean, we are just kind of firing on all cylinders here. We have a lot of interesting directions to explore. One direction or one dimension that we're expanding in is just integrating more pieces of context. So one of the reasons why we wanted to open-source Cody is because we just want to be able to integrate context from wherever it is, and not be limited by a single code host, or a single platform. There's so much institutional knowledge that's in many different systems. It might be in Slack, it might be in GitHub issues, it might be in your code review tool. It might be in your production logs. And so we want to build integrations into Cody that just pull in all this context, and I think the best way to do that is to make this kind of platform, this orchestrator of sorts open source and accessible to everyone.

**Jerod Santo:** \[00:32:22.15\] Yeah.

**Beyang Liu:** The other dimension that is very exciting to us is going deeper into the model layer. So we've already started to do this for the embeddings-based code retrieval, but I think we're exploring some models that are related to code generation, and potentially even the chat-based completions at some point. And that's gonna be interesting, because it's going to allow us to incorporate pieces of Sourcegraph into the actual training process, and there's been some research there that shows that incorporating search engines into training language models actually yields very nice properties, in terms of lower latency, but higher quality... And it's also important to a lot of our customers, because a lot of them are large corporations, they deploy on premises, and even the zero retention policy, where the code is forgotten as soon as it's sent back over is not good enough for some of our customers. So they want to completely be able to self-host this, and we plan to serve them as well.

**Jerod Santo:** How high up the stack, like the conceptual stack, do you think Cody can get, or maybe any AI tooling with codegen, with regard to how I instruct it as a developer? Because right now we're very much like "Okay, it's autocomplete. There's a function here." I can tell it, "Write me a thing that connects to an API and parses the JSON" or whatever, and it can spit that out. But how high up the stack can I get? Can I say "Write me a Facebook for dogs" and be done, for instance? Or like user stories? Can I tell it "Write some user stories", and go from there? What do you think?

**Beyang Liu:** That's a great question. I mean, we've all seen the Twitter demos by now, where someone is just like, you know, GPT-4, like "Build me an app", and it creates a working app, and...

**Adam Stacoviak:** Yeah. A whole website.

**Beyang Liu:** I think if you've actually gone through and tried that in practice yourself, you soon realize hey, you can get to a working app pretty quickly, just through instructing it using English or natural language. But then you get a little bit further down that path and you're like "Oh, I want it to do this, I want it to do that. Can you add this bell and whistle?" There's kind of this combinatorial complexity that emerges as you add different features, and you're kind of diverging from the common path... And then it falls apart. I actually tried this myself, I tried to write a complete app... It's actually a prototype for the next version of Cody. I tried to do it by not writing a single line of code; just by writing English. And I got like 80% of the way there in 30 minutes, and I was like "This is amazing. This is the future. I'm never gonna code again." And then the remaining 20% literally took like four hours, and I was banging my head against the wall, because I asked it to do one thing, and then it did it, but then it kind of screwed up this other thing... And it became kind of this Whack a Mole problem.

So we're not all the way there yet, but I think the way we think about it is -- like, Cody right now is at the point where if you ask it... This is another thing I tried the other day; I wanted to add a new feature to Cody. Cody has these things called recipes, which are kind of like templated interactions with Cody. So like write a unit test, or generate a doc string, or smell my code; give me some feedback. I wanted to add a new recipe, and I basically asked Cody, "Hey, I want to add a new recipe to Cody. What parts of the code should I modify?" and it basically showed me all the parts of the code that were relevant, and then it generated the code for the new recipe using the existing recipes as a reference point. And I basically got it done in five minutes, and it was amazing.

So I was still obviously in the hot seat there, I was still calling the shots, but it turned something that probably would have been at least 30 minutes, maybe an hour if I got frustrated or distracted, into something that was like five minutes. And that was actually the interview question we were using for interviewing on the AI team. So after that, we had to go back and revamp that. It's like, "This is too easy." \[laughs\]

**Jerod Santo:** "Too easy now." Everything just got easier.

**Beyang Liu:** Yeah.

**Jerod Santo:** Do you think this is a step change in what we can do, and then we're gonna plateau right here for a while, and refine, and do more stuff, but kind of stay at this level of quote-unquote intelligence? Or do you think just the sky's the limit from here on out? I mean, obviously, just conjecture at this point...

**Adam Stacoviak:** \[00:36:26.22\] Challenging to predict.

**Beyang Liu:** I mean, it's very challenging to predict. I might be eating my words in the next six months...But on the spectrum of, you know, "It's just like glorified autocomplete, and it doesn't really know anything", all the way to AGI doomer, "Let's nuke the GPU data centers."

**Adam Stacoviak:** Oh, my gosh...

**Jerod Santo:** Where do you fall?

**Adam Stacoviak:** Don't give him ideas. \[laughter\] Cancel, cancel, cancel.

**Beyang Liu:** Honestly, I think a lot of the discourse on that end of the spectrum has just gotten kind of crazy. The way I view it is this is a really powerful tool, it's an amazing new technology, and it can be used for evil, certainly, as any technology can... But I'm a techno-optimist, and I think this will largely be positively impactful for the world. And I don't really see it replacing programmers; it might change the way we think about programming or software creation. This is certainly going to be a lot more people that are going to be empowered to create software now... And I think there'll be kind of a spectrum of people, from those who write software just by describing it in natural language, all the way to the people who are kind of building the core kernels of the operating systems of the future, that form the solid foundation, that pack in the really important data structures and algorithms and core architecture, around which everyone else can throw their ideas, and stuff.

So there'll be a huge spectrum. I think we'll almost think of it in terms of the way we think of reading and writing now. You have many different forms of reading and writing this. People just reading and writing stuff on Twitter - that's one for writing. And then there's other people who write long books, that span many years of intense research. And I think the future of code looks something that.

**Adam Stacoviak:** It's the ultimate flattener. Did you see that book, "The World is Flat"?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** It's like that. For a while there, it was outsourcing. And now it's sort of just accessibility to everybody. Now people who don't know much about code can learn about code and level up pretty quickly. And so the access, the catered access to have a patient, whether a person or not... Like, I have conversations with ChatGPT, and I swear, I'm like -- I tell my wife, I'm literally talking to a machine... And I get it, but we do 30, 40 rounds, back and forth, through whatever it might be, and it's very much a conversation I'd have with Jerod if you would give me the time and patience, and if he wouldn't get frustrated. \[laughter\] So I have this very patient --

**Jerod Santo:** It's a better friend than I am...

**Adam Stacoviak:** Well, not necessarily, but the world now has access to a patient sidecar, that's quite intelligent, that will get even more intelligent, whether you call it artificial intelligence or not. It has intelligence behind it, some knowledge, and it's accessible right now. I agree, humans are still necessary, thank the Lord... But wow, it's super-flat now, and a lot more people have access to what could be, and what might be because of this.

**Beyang Liu:** Totally. And that's a fantastic thing. There's that Steve Jobs quote where he said "Computers are amazing because they're like a bicycle for the human mind, and they allow a much more --" I think he was drawing comparisons to how different animals get around. A human walking is very inefficient, but a human on a bicycle is more efficient than the fastest cheetah, or whatever... I think what language models are capable of doing is instead of a bicycle, now we each have a race car, or a rocket ship. We're still in the driver's seat, we're still steering and telling it where to go, but it's just, it's way more leverage for any given individual. So a great thing if you love being creative, you love dreaming up new ideas and ways to solve problems.

**Adam Stacoviak:** \[00:40:23.24\] One more question on the business side of things... How has growth been because of Cody?

**Beyang Liu:** That's a great question. Cody is I -- you almost would not believe it if I described it to you, but Cody is literally the most magical thing to happen to the Sourcegraph go to market or sales motion, since basically when we started the company...

**Adam Stacoviak:** Ever?

**Beyang Liu:** Ever, basically.

**Adam Stacoviak:** I've been paying attention for a while, that's why I asked you that question... Because you've had trouble getting growth, because you've got to install a server, or go cloud, and you've got to examine the codebase, then you've got to learn how to search the code... Which is all friction points, right?

**Beyang Liu:** So transparently, one of the challenges that we had as a business is we had a couple of subsets of the programmer population that were very eager to adopt Sourcegraph. Basically, if you used a tool like Sourcegraph before, you want to use it again. So if you're an ex-Googler, ex-Facebooker, ex-Dropboxer, or ex-Microsofter, in a couple of teams, you kind of got it immediately... And then everyone else is like "Oh, is it like grep? Or is it like Ctrl+F?" And we would lose a lot of people along the way. I think with Cody, it's at the point where not only does any programmer get it right away; they're like "Oh, holy shit..." Like, you just asked to explain this very complex code in English, and it gave a really good explanation... Even non-technical stakeholders. So as we sell to larger and larger companies, a lot of times in the room is someone like a CEO, or a board of directors, or non-technical -- someone who's pretty distant from the code, traditionally speaking... And they get it too, because -- we were in a pitch meeting the other week where it was a large kind of Fortune 500 energy company, and there was not a programmer in the room; it was just kind of high-level business owners, who were all very skeptical... Until we got to Cody. We opened up one of their open source libraries and asked Cody to explain what was going. And one person leaned in, and they were like "I haven't coded in 30 years, and even I would get value out of this." So yeah, it's just absolutely incredible.

**Adam Stacoviak:** Your total addressable market got a lot bigger.

**Beyang Liu:** Yeah. Because - what is engineering now? I think in a couple years, almost every human in the world will be empowered to create software in some fashion.

**Adam Stacoviak:** You said before that Cody leverages all that Sourcegraph is today, the intelligence.

**Beyang Liu:** Yup.

**Adam Stacoviak:** Will that always be true, I guess, is maybe the more basic way to answer that, or ask that question? Because at some point, if this is the largest arc in your hockey stick growth, and all the up from here is - not so much Cody-related, but Cody-driven, really... Does what Sourcegraph do at large now eventually become less and less important, and the primary interface really is this natural language Cody interface that explains my code?

**Beyang Liu:** That's a great question. It's like, does AI just swallow all of programming at some point? At some point do we cease to write kind of old, traditional, systems-oriented software, in the Von Neumann tradition...?

**Adam Stacoviak:** "You hand-wrote that code? What?!"

**Beyang Liu:** \[laughs\] You wrote a for loop, instead of just asking it nicely to repeat something?

**Adam Stacoviak:** Nicely... \[laughs\]

**Jerod Santo:** "Forget code search, I don't even read code. Like, why are you reading code, let alone searching it?"

**Beyang Liu:** \[00:44:02.04\] Yeah. This is still very early days, so it's very difficult to predict... But the way I think about it - I think about it in terms of there are different types of computers that can exist in the world. A traditional PC, that's one type of computer. You could maybe say the human brain is another type of computer. And then these language models, I think they're a new type of computer, and they do some things a lot better than the PC type of computer did, and then some things much worse. Like, they're far less precise... I think I saw a tweet the other day where someone repeatedly asked GPT-4 whether four was greater than one. And then at some point GPT-4 got unsure of itself and said, "Oh, no, actually, I was mistaken. One is greater than four."

**Adam Stacoviak:** "My gosh, I apologize..."

**Beyang Liu:** \[laughs\] Yeah, exactly.

**Adam Stacoviak:** "I apologize..."

**Beyang Liu:** So I think these two types of computers are actually very complimentary. And so the most powerful system are going to be the ones that combine both, and feed the inputs of one and the outputs of the other, and synthesize them in a way that's truly powerful. And we're already seeing early examples of this. Cody is one; we use kind of the Chomsky style code to understand tech...

**Jerod Santo:** Yeah, it's a hybrid...

**Beyang Liu:** ...with the more Norvig style language models... Bing search is another, where they're using ChatGPT for the AI part of it, but they're still relying on kind of traditional Bing web search. And so I think we'll see a lot of hybrid systems emerge, that combine the best of both worlds.

**Jerod Santo:** Yeah. Exciting times, thanks for talking to us.

**Beyang Liu:** Yeah, thanks for having me on.

**Adam Stacoviak:** Good seeing you again, good talking.

**Beyang Liu:** Pleasure chatting with you. That was fun. You guys are good at this. \[laughs\]

**Jerod Santo:** I'm excited for you.

**Break**: \[00:45:51.00\]

**Adam Stacoviak:** So now we're fine-tuned here...

**Jerod Santo:** We're ready to go.

**Denny Lee:** You think so? Oh, I see what you did there. \[laughs\]

**Jerod Santo:** \[unintelligible 00:50:22.17\] I think is what you were trying to say...

**Denny Lee:** Well, no, I think there's a Dolly reference, fine-tune, so...

**Adam Stacoviak:** It was a pun.

**Denny Lee:** It was a pun. Work with us, Jerod. I mean, Adam and I are already on the same page. What the heck, mate?

**Jerod Santo:** Adam's puns are on point, always. He never misses with a pun.

**Denny Lee:** Alright.

**Adam Stacoviak:** Thank you.

**Jerod Santo:** Alright... So we have Denny Lee from Databricks, or Databricks...

**Denny Lee:** Databricks.

**Jerod Santo:** Databricks. Is that the official stance?

**Denny Lee:** It's not a Canadian or American thing. It's just Databricks.

**Jerod Santo:** It's just Databricks... Here to talk about Dolly 2... But first, I hear you're a just-in-time conference presenter. Tell us what this means.

**Denny Lee:** Well, I think the context was that you were asking me "Hey, what's your presentation?" That's what you asked me first.

**Jerod Santo:** I did.

**Denny Lee:** And I was actually responding, "I don't remember the name, nor do I remember -- I do remember the concepts. At least I do have that part. But I don't remember the name..."

**Jerod Santo:** Nor...

**Denny Lee:** "...nor are the slides done yet."

**Jerod Santo:** And this is...

**Denny Lee:** Normal.

**Jerod Santo:** And it starts in 30 minutes.

**Denny Lee:** Oh, no, no, no, no, no, no.

**Adam Stacoviak:** Tomorrow.

**Denny Lee:** No, no. Tomorrow. Tomorrow. I'm just simply saying that it is common for me to go ahead and not do a thing until 30 minutes before the actual presentation to create the slides.

**Jerod Santo:** So you're a procrastinator.

**Denny Lee:** Yes. I'm a very good one.

**Adam Stacoviak:** Wait a minute, that's not procrastination.

**Jerod Santo:** That's optimization.

**Denny Lee:** No, efficiency. Efficiency. Pure efficiency.

**Adam Stacoviak:** Yeah. Why sweat over the details until you have to?

**Denny Lee:** Exactly. Exactly.

**Jerod Santo:** Because what if you start 30 minutes before, but you realize the details required 45 minutes?

**Denny Lee:** Exactly. So I had this one time where actually a buddy of mine, Thomas Kaiser, he and I went ahead and did a presentation where -- so he's from Denmark, I'm from Seattle; we're both in -- I don't know where... Some other city, to do the presentation.

**Adam Stacoviak:** \[00:52:00.24\] Somewhere in the world...

**Denny Lee:** Somewhere in the world. So we actually got together, but we realized we actually hadn't done squat on the slides until 30 minutes before the actual session. And guess what - 30 minutes before, put together the slides, bam, we're good to go.

**Jerod Santo:** Has it ever bit you? Tomorrow... \[laughs\]

**Denny Lee:** I'm sure at some point it will bite me. I guess the context is, I've gotten away with it so far. So I'm gonna go with it.

**Jerod Santo:** And enough times that you have full confidence.

**Denny Lee:** Yes.

**Jerod Santo:** Fair enough.

**Denny Lee:** Yes. Or at least I know how to fake it. So what would you like to know about Dolly? How we came about with Dolly 1.0, 2.0...?

**Adam Stacoviak:** Let's start with why...

**Denny Lee:** Alright, let's start with why. Okay.

**Adam Stacoviak:** And then how.

**Denny Lee:** Alright, so let's go backwards a little bit...

**Jerod Santo:** That's when. You're talking when.

**Denny Lee:** ...like all the way back three weeks ago. Roughly. No, sorry, four.

**Jerod Santo:** In the days of your...

**Denny Lee:** Yeah, in the days of your four weeks ago. Alright. So one of the things -- and I want to give credit where credit's due. \[00:52:51.12\] is the guy who actually figured it out. Now, we were using a much older particular model, and we were going like "Would this work?" And what it boiled down to is that there was a supposition that could you take an older model, fine-tune it with good data, and still actually end up getting good results? ...with the key point being that, "Hey, we're only going to pay $30 to actually train the data", as opposed to the tens of millions of dollars that you'd have to do. And could you do it? So that was the supposition for Dolly 1.0. And sure enough, we were right. Basically, it was about $30 worth of training time, on what is not considered public data. So that's why it's Dolly 1.0.

**Jerod Santo:** Okay.

**Denny Lee:** So we could give you the weights, we could give you the model, but we couldn't give you the data, because the data itself was actually not public.

**Jerod Santo:** But you owned it.

**Denny Lee:** No, that was in fact I believe the same data that ChatGPT was using. So we could give you the weights, again; that's open source. But we can't give you the data, because the data is actually ChatGPT's.

**Jerod Santo:** Gotcha.

**Denny Lee:** Alright. And so then we're going "Wait, we actually used only a tiny amount of data, and it still came out with some pretty decent results. Okay, let's go ahead and say why don't we generate our own data?" So again, taking credit where credit's due - our founders went ahead and said "Hey, why don't we just get -- we have about 5,000 employees at Databricks now..."

**Jerod Santo:** This is my favorite part.

**Denny Lee:** Yeah. "Let's just go ahead and generate our own data." So for two weeks, that's literally all we did. We had basically a bunch of employees dumping in data in a Q&A style format, with seven different categories... It's all listed out there, so I don't remember all those details anymore...

**Jerod Santo:** Sure.

**Denny Lee:** I worked on the T-shirts, so at least I was helpful on that part...

**Adam Stacoviak:** I love the T-shirt.

**Jerod Santo:** That's a good one.

**Adam Stacoviak:** No one's seeing this right now, but it's --

**Denny Lee:** Well, it is a podcast, so...

**Jerod Santo:** That's right. Draw a word picture, Adam.

**Denny Lee:** Dude, a sheep. Come on, man.

**Adam Stacoviak:** It's Dolly, the sheep.

**Denny Lee:** Dolly! Sheep!

**Adam Stacoviak:** Oh, my gosh...

**Denny Lee:** Oh, my goodness...

**Jerod Santo:** See, Siri thought he was on point... \[laughter\]

**Denny Lee:** Okay, so Dolly, the sheep. The clone. It's a clone, right? So that's the whole context.

**Jerod Santo:** It's a clone...

**Adam Stacoviak:** Yes.

**Denny Lee:** Yes. So we go ahead and actually get that up and running... And then we're like "Hey, now we've got 15,000+ sets of Q&A style new information; all brand new, and we're publicly giving it away." So the actual dataset, if you go to Hugging Face, or DatabricksLabs/Dolly, or whatever the GitHub site is, basically all that data is there. Okay? All 15,000 lines... Sorry, 15,000 Q&A's. And then we trained that dataset again, using the same old model from two years ago, okay?

**Jerod Santo:** Okay.

**Denny Lee:** And we ran that, and then basically what was really cool about this is that it cost us about $100 worth of training, but it's pretty good. And if you ask some pointed questions on this stuff, it actually responds really, really well. For example, I've got some examples where I'm actually asking coffee questions, and the coffee questions answers are -- okay, I'll give ChatGPT 4.0 a lot of credit. It is much more verbose than what Dolly 2.0 can provide. But in terms of correctness, it is correct. They both are the same level of correctness between Dolly 2.0 and ChatGPT 4. I actually have it on my own -- it's on my own GitHub somewhere \[unintelligible 00:56:01.29\] I actually explain all that. Mainly because I was actually running it on an M1 Mac too, because I was goofing off, and...

**Adam Stacoviak:** Which is fine. That's amazing right there.

**Jerod Santo:** \[00:56:10.12\] Yeah. Let me first just say, as a daily user of ChatGPT, sometimes verbose is not desirable...

**Denny Lee:** Exactly.

**Jerod Santo:** ...and I'm like "Dude, I actually will tell it to be brief." Or "In one sentence, give me this..."

**Adam Stacoviak:** Very specific, yes.

**Jerod Santo:** Because I'm so sick of the word salad it spits out. I just want the answer. The answers are useful, but sometimes you're waiting for it to tell me the whole history of the thing. You like "No."

**Denny Lee:** Well, don't you want to know the retrospective while you're at it? No, I'm being very sarcastic, by the way. People can't tell, it's a podcast... We were all eye-rolling each other on that one.

**Jerod Santo:** We are. That was major eye-rolls. So using it... Let's say I have never used anything but ChatGPT's web UI. But I'm a developer, and I want my own -- I want Dolly to answer my questions. What does that process look for folks?

**Denny Lee:** Okay, so you've got two choices. Or no, I should rephrase; you've got many choices, in fact. But the most common choices are we have a Databricks notebook that's in the Dolly GitHub, that you can just download for free, run it. Now then you're gonna tell me "But Denny, I don't want to use Databricks." That's fair. I would prefer you to, but I understand if you don't. That's fine. Go to Hugging Face. The instructions are all right there on how to use it. In fact, like I was saying, I was actually playing with it so that way I could optimize for an M1 Mac; so that the answers could come back faster.

**Jerod Santo:** Right.

**Denny Lee:** My only problem was that when I started testing it, there was an obvious bug in PyTorch... \[laughs\] Basically, when we told it to go ahead and use the M1, it was giving us back garbage answers; it wasn't even actual answers, it was literally nonsensical characters. And when we used CPU mode, it worked perfectly fine. So then just as I was about to create a new issue on PyTorch, they fixed it.

**Jerod Santo:** No, that's a good thing.

**Denny Lee:** I know, I know... \[laughter\] But I also had the fix.

**Jerod Santo:** Okay, I get you. You were about to \[unintelligible 00:58:00.03\]

**Adam Stacoviak:** "You wasted my time!!"

**Denny Lee:** Yeah, I was gonna put the fix in. You wasted my time, dang it! It's fine, but basically, the idea is that - obviously... I shouldn't say obviously -- you probably don't train with an M1, but you can definitely do inference with M1.

**Adam Stacoviak:** Can I ask you a question about that? The Q&A. So you got your data. So how do you collect that data, and how do you format it so that Dolly can understand it? I'm assuming you're saying don't use Databricks data; you could do the same thing like you did with the Q&A.

**Denny Lee:** Yes, absolutely.

**Adam Stacoviak:** So how did that work?

**Denny Lee:** Literally, what we asked people to fill out was a Google form. That's literally it.

**Jerod Santo:** And what were the questions?

**Denny Lee:** Oh, no, no, they would could produce the questions, and then the answers.

**Jerod Santo:** They would ask a question, and then it would spit out --

**Denny Lee:** It would provide a detailed answer for it.

**Jerod Santo:** I see.

**Denny Lee:** \[unintelligible 00:58:39.03\]

**Adam Stacoviak:** So how do you make an espresso? Since you used coffee --

**Denny Lee:** Right. Well, it wouldn't even be "How do you make an espresso?" For example, let's be very specific, okay? It would say "What are the particular features of great espresso?" And then we would talk about, okay, you're required to have a fine grind; you're required to -- using a conical burr grinder? There's a religious war between flapper grinders and conical burr grinders. I put in a conical burr grinder, so yeah, I'm sure the flapper grinders are pissed off that that's not the answer that they're gonna get from Dolly.

**Jerod Santo:** That's bias. You're putting bias into that.

**Denny Lee:** Oh, yes, absolutely. There's absolutely 100% bias. Let's not pretend there isn't. So it also requires you to actually have coffee beans roasted in a particular way, it also requires you to have the espresso water boiled at a particular temperature... So you put all of those details down. That's the idea. So in other words, it's not just like "Okay, hi, what's great espresso?" "Um, you buy from Espresso Vivace in Seattle." While that's true, and I don't own any stock in them, by the way, but they are easily the best coffee...

**Adam Stacoviak:** Who's the brand again, so we can--

**Denny Lee:** Espresso Vivace, in Seattle.

**Adam Stacoviak:** Espresso Vivace.

**Denny Lee:** Yeah. David Schomer is a magician when it comes to espresso.

**Adam Stacoviak:** Okay.

**Denny Lee:** But the context is like, well, as much as I want to just provide an answer that, the reality is no, obviously we can't train \[unintelligible 00:59:54.23\] We actually need verbosity to provide context, to provide proof, if you want to put it that way. Because there's going to be other people putting other answers, too. So for example, in this case I'm just gonna call a buddy of mine, Rob Reid; he's a fellow cyclist, he's also a fellow coffee addict... I know he also put some coffee answers inside there as well. So between everybody that put coffee answers in there, that's actually literally you're getting data from myself, from Rob, and a few other folks. From, well, Databricks.

**Adam Stacoviak:** \[01:00:27.15\] Right.

**Jerod Santo:** And how many instructions are in there that you guys put in? The 5000 employees?

**Denny Lee:** Oh, the 5000 employees put 15,000.

**Jerod Santo:** 15,000. Okay.

**Denny Lee:** So it's remarkably -- if you think about it, that's remarkably small. We were always under the impression when we started this process that we would require hundreds of thousands, or millions --

**Jerod Santo:** I was gonna say, how does it know you gave it coffee instructions? How does it know it's something totally different?

**Denny Lee:** Like I said, Dolly 1.0 shocked us. It really shocked us, because we thought we would need to put in a lot more data. We thought we would need to do a lot more training. And in the end, we were like "Wow, this is not bad. I mean, it's not perfect, but it's not bad, actually."

**Jerod Santo:** Right.

**Denny Lee:** And so from a business perspective, what ends up happening is if you have your own business, now your data -- like, you don't need a million things. You've got 15,000 pieces of information. Now, the great thing -- and I'm not telling you to use Dolly, by the way. I mean, obviously, go use it if you want to, but I'm saying use any open source model. I don't care which one. That way, you get to go ahead and keep it and have your data as your IP. So you as a business end up using the data actually in a good way, where you actually make it advantageous for you, yet also keeping the privacy for the users that make up that data at the exact same time.

**Jerod Santo:** So the move is you have these -- I don't know if this is technically what a foundational model is, or you have these models that are large enough language models...

**Denny Lee:** Right.

**Jerod Santo:** ...and then each company, or each org, or each use case says "Okay, now we're going to fine-tune it." I don't know if that's the right lingo or not... "And apply it to us. And we don't need anything else."

**Denny Lee:** Exactly. And there's all sorts of models out there. A lot of people were asking me originally like "Hey, okay, well then that means you need to use Dolly." I'm like "No, no, no, no. Dolly was just us proving that it can be done. That's all it was." So there are a lot of really good companies, whether it's Hugging Face, or anybody else, that produces solid open source large language models. Use those, too. Because the whole point is that you can use it yourself, run it with smaller amounts of data, have really good answers, and you're paying 100 bucks. At least in our case we did.

**Jerod Santo:** To fine-tune it.

**Denny Lee:** 100 bucks to train it, right. So we're like, okay, that's actually worth your business, you're protecting the privacy of your users, you're going and actually having relatively solid answers... And you're not basically giving your data away to another service. Because that's the key thing about when you use a service, that you're basically giving away your data so they can go train against it, too.

**Jerod Santo:** Right.

**Denny Lee:** Now, I know Microsoft and Open AI, for example - I'm calling those two out; in a positive light, not negative. Usually -- I'm a former Microsoft employee, so I'm allowed to be negative if I want to... But this is actually me being positive. They actually have introduced concepts saying "You can pay more to train, and that they'll never actually use your data." But I don't remember the cost, but it is definitely paying more.

**Jerod Santo:** Yeah. Well, it's not as valuable to them, so it makes sense as a transaction.

**Denny Lee:** Right. Exactly. So that becomes more of a transaction that way. Exactly.

**Jerod Santo:** Right. So have you seen the Googlers' leaked memo about "We have no moat"?

**Denny Lee:** Yes, everybody talks about that memo. And what's interesting about that whole concept is that -- I know it sounds sideways, but I was about to actually give you another context... And this is actually, again, \[unintelligible 01:03:36.21\] I want to give credit/attribution to the guy who actually said it. What's really interesting about this whole thing, when they talk about moats, or talk about everything else, is that more fundamentally, we could have done this two years ago. We could have taken this concept of basically saying "Small amount of data, foundational model, fine-tune it, and actually have good results."

**Jerod Santo:** Right.

**Denny Lee:** \[01:03:59.29\] So all of us were focusing on "I need a bigger model. I need more data. I need to scrape the entire frickin' internet and chuck it all into this gigantic model, spend tens of millions of dollars, warp every single GPU until \[unintelligible 01:04:13.04\] basically melts, in order to go ahead and train this thing."

**Jerod Santo:** Till the heat death of the Universe.

**Denny Lee:** Right, exactly. And then meanwhile it's like "Or we literally could have taken a foundational model that was okay, to good, 100 bucks, and bam, we get something good." So when they talk about there's no moat and all this other stuff between open source and not, literally my attitude toward this whole thing is "No, just step backwards for a second." The reality is we could have done this, we all got attracted to the idea, the shiny thing of bigger, more...

**Jerod Santo:** Larger, larger, larger... Yeah...

**Denny Lee:** Larger, more... That's all we got attracted to. And so in the end, I'm going "I don't care." These companies, the ones that, quote-unquote, are trying to build a moat around themselves, what they're doing - they're trying to make sure that they have a service in which you will give them your data, and then by definition, you will give away your competitive advantage. Simple as that. For the folks that don't want to do that, which I think is the vast majority, then my attitude is quite simple - then don't do that, and build your own model.

Now, how about if I'm the general consumer? I just want to pop out a good blog template for me to work with? Yeah, absolutely. Why not? Seriously, I'm not trying to say these services aren't worthwhile; quite the opposite. ChatGPT is fine.

**Jerod Santo:** Very valuable.

**Denny Lee:** Yeah, it's extremely valuable. In fact, I've already had it pumping out code for me, just for shits and giggles.

**Jerod Santo:** Of course. Yeah. It's gonna pump out some slides for you here soon, for tomorrow.

**Denny Lee:** That's a good idea. I should test out that.

**Jerod Santo:** \[laughs\] Take that 30 minutes and turn it into 12.

**Denny Lee:** Yeah, that'd be perfect. But see, you get my drift.

**Jerod Santo:** Yeah, totally.

**Denny Lee:** Yeah. So my Rust code is rusty... And so basically --

**Jerod Santo:** Liked that one, Adam...?

**Denny Lee:** ...I was using ChatGPT to basically pump out a bunch of Rust code for me. I'm like "Hey, this is great boilerplate. Now I've got something to work with, and boom, now I can start writing it."

**Jerod Santo:** Right. So what is Databricks' play in this chess game? What's your guys' angle?

**Denny Lee:** Our angle is quite simple. You've got a ton of data; you need to ETL a process it in the first place; then you need to have a platform to run machine learning, or data science, or AI, or whatever frickin' wording you want to use. Okay? Whether it's LLMs today, deep learning yesterday or tomorrow... Image optical resolutions, object recognition... I don't care. Okay? The point is that you have a ton of data. You need to be able to process it, you need to be able to access every single open source system or service. Databricks play is quite simple - we just make it easy for you to do any of it. That's it. That's our only play. Let's make it easy.

**Adam Stacoviak:** You're the platform. Yeah. Are you then for people owning their own data? It seems that that's your--

**Denny Lee:** So here's the thing... I'm absolutely for both from a Databricks perspective, but also from an open source perspective. So I'm an open source contributor, I contributed to Apache Spark and MLflow, and I'm also a maintainer for Delta Lake. And so yeah, by definition, I'm always going to lean toward open source, which means you should own your data, data should be competitive advantage, everything else should be open source, basically, for all intents and purposes. I'm even for things like differential privacy, and privacy-preserving histograms, to basically protect your data. And I can go on a diatribe on that, so let's not do that. But the context is -- I'm not saying though these services, like Open AI, or Bing, or whatever else, aren't worthwhile. They are. They're cheap. They're helpful. In fact, training other systems isn't necessarily a bad thing either. So for me, it's not about don't do it, it's about knowing what you're doing. That's it.

**Adam Stacoviak:** Right. Yeah. Transparency.

**Denny Lee:** \[01:08:00.01\] Exactly. That's it. If you want to use OpenAI within the Databricks platform, we make it easy. For crying out loud, we've added SQL syntax directly, so you can literally write Spark SQL, which at this point is basically \[unintelligible 01:08:12.03\] compliant. Literally write SQL to go ahead and access your OpenAI to run an LLM model directly against your data. So literally, party hardy. Have fun.

So our attitude isn't so much like "Don't use one versus the other." Our attitude is very much, "No, no. Just know what you're doing." Understand when you're using something like a service, understand when it makes sense for you to build your own model, and we also make it easy for you to build, maintain, train, infer against that model. That's it.

**Adam Stacoviak:** So I mentioned we have our transcripts as open source.

**Denny Lee:** Yeah, absolutely.

**Adam Stacoviak:** Everything we're saying here, when it hits the podcast, it's gonna be transcribed into words... How are ways we can use Dolly 2.0, this open model that you're talking about, this direction - how can we leverage these transcripts for our personal betterment as a podcast company?

**Denny Lee:** Okay, so for example, as a podcast company, one of the first things -- in fact, I'm actually already doing this technically for Delta Lake... We also have podcasts ourselves. So what are we doing, though? I'm spending time and effort to generate blogs based off of the podcasts. Why? Because it's better for Google SEO search. And it's not like I'm trying to just repeat the same thing. I'm just trying to summarize... Because we talked about barbecue in the beginning. We talked about coffee. We probably don't need all of those details inside the transcript for the podcast, or for a blog. You want people to go ahead and actually understand what they're talking about when it comes to Dolly - cool. We generate a blog based off of this conversation. It can summarize it, get to the key points. Boom. There you go. It simplifies the whole process, so that way you're not spending exorbitant hours trying to figure out how to basically synthesize the key points out of our conversation right now.

So it's still time for you to review and look to make sure the model isn't giving you garbage. There's still time for a producer or for any other person who is knowledgeable in this field to validate the statements. Maybe I'm full of BS, of all I know, so you get an extra --

**Adam Stacoviak:** Sometimes...

**Denny Lee:** "I don't know, Denny is full of it... Forget it..." Most likely it would be the conical versus flapper grinder, but again, that's a whole other story.

**Jerod Santo:** The whole summary will just be Adam and I talking to each other...

**Adam Stacoviak:** I'm conical. I'm on your team. Conical is me. I'm conical. Team conical.

**Denny Lee:** There you go. Perfect. See? But the context is like we can go ahead and actually use these systems to simplify. Would it be cheaper and easier if we just went ahead and did like ChatGPT did it? Yeah. Go for it. Would it be worthwhile to do it in your own \[unintelligible 01:10:40.14\] Absolutely, because you have your own style. So if you have your own style, if Dolly or any other open source model - again, I want to be very clear here - is gonna have to be trained against your transcripts, it will then be able to start raining blogs based off of your style. That's the cool thing about it.

**Jerod Santo:** Is it cool to actually chain like that, or is it better to go to the foundational model and then just our stuff? Or would it be cooler to be like "Well, start with Dolly, because it has instructions, and then add our style, and then maybe add something else..."

**Denny Lee:** Literally, my answer is all of the above, because we don't know --

**Jerod Santo:** We don't.

**Denny Lee:** We don't know. Because that's the whole point - different foundational models will be better at different things. It's as simple as that. Some models will be better at, for example, conversations. Some models will be better for writing purposes. Nat.dev. I'm forgetting the guy's name...

**Jerod Santo:** Nat Friedman.

**Adam Stacoviak:** Nat Friedman, yeah.

**Denny Lee:** Thank you. Oh my God, I don't believe I spaced out on that...

**Adam Stacoviak:** Oh, my gosh...

**Jerod Santo:** He's a nobody, so...

**Adam Stacoviak:** We've got your back.

**Denny Lee:** Yeah, he's a small guy. Okay, so Nat Friedman, former CEO of GitHub, so slightly important guy... Nat.dev is an awesome playground, for example, where you can test out a lot of different models already. And you're literally just chucking, like "Hey, let me try with ChatGPT-3. Let me try with Vicuna." Whatever else use. And literally, you will see, with the same question - especially we do the compare playground section - different answers from the different models. So yeah, literally, you've got to play a little bit to figure out which model makes sense for you.

**Adam Stacoviak:** \[01:12:16.01\] Yeah. Interesting.

**Jerod Santo:** Love it. Well, thanks for talking with us, Denny.

**Denny Lee:** Glad to. Always.

**Jerod Santo:** Aside from your opinions on coffee and whatnot, you're pretty good.

**Adam Stacoviak:** Pretty solid dude.

**Denny Lee:** \[laughs\] You know, those are fighting words, I just want to say that. Okay? Those are fighting words.

**Jerod Santo:** Oh, that's good...

**Denny Lee:** Alright... Gentlemen, thank you very much.

**Adam Stacoviak:** Yes, thank you.

**Denny Lee:** Alright.

**Break**: \[01:12:39.26\]

**Jerod Santo:** Alright, Stella Biderman...

**Stella Biderman:** Yeah.

**Jerod Santo:** And you're with -- I'm going to also butcher the name of the org...

**Stella Biderman:** EleutherAI.

**Jerod Santo:** Eleuther.

**Adam Stacoviak:** EleutherAI.

**Stella Biderman:** Yes.

**Jerod Santo:** Okay. What is this? What is EleutherAI?

**Stella Biderman:** Y'all were just talking with Databricks about Dolly...

**Jerod Santo:** Yes. Correct.

**Stella Biderman:** Right. So that was built on top of an open source language model...

**Jerod Santo:** Okay. Yes.

**Stella Biderman:** I trained that.

**Jerod Santo:** Okay, so you're underneath Dolly.

**Stella Biderman:** Yes.

**Jerod Santo:** Okay. So you personally trained it.

**Stella Biderman:** Yes.

**Jerod Santo:** Okay.

**Adam Stacoviak:** What's the model?

**Stella Biderman:** It's called Pythia. It's a suite of language models, actually, that we've put out a couple of months ago... But in general, EleutherAI has trained several of the largest open source language models in the world in the past three years.

**Jerod Santo:** Okay. Very nice.

**Adam Stacoviak:** There you go... So what do you want to tell the world then?

**Stella Biderman:** What do I want to tell the world? Honestly, I didn't think that far in advance... \[laughter\]

**Jerod Santo:** Alright, well --

**Adam Stacoviak:** What should the world know about what you do in terms of training models that Databricks uses, that's open source etc?

**Stella Biderman:** Honestly, especially the open source world should really know that the AI world really needs help from the open source community writ-large. That's actually broadly speaking why I'm here at the Linux Open Source Summit. We're struggling with a lot of issues about maintainability issues, about licensing issues, about regulation, issues about building sustainable ecosystems that the open source community writ-large has been working on for years, if not decades. And a lot of people in the AI world are a little too proud to ask for help from non-AI people... Which is definitely a real systemic problem. But there's, I think, a lot of -- if people are excited about foundation models, large language models, whatever you want to call them, and want to get involved, or want to help and don't want to know that much about AI, there's a ton of open source work that needs to be done, that we need help with, to build a robust and enduring ecosystem.

**Jerod Santo:** Where's the money coming from?

**Stella Biderman:** Where's the money coming from? Great question. So at EleutherAI we recently formed a nonprofit, and we have donations from a number of companies, most prominently Google, Stability AI and Hugging Face, and CoreWeave are among our biggest sponsors. We have also been applying for grants, from mostly the US government, to pay for our forthcoming research and work.

In terms of computing resources, it's actually -- like, training these really large language models is not that expensive.

**Jerod Santo:** \[01:18:19.24\] Is that a secret?

**Adam Stacoviak:** Controversial...

**Stella Biderman:** I don't know if it's a secret, or what... But I think that the CS world kind of got used to the idea that anything can be done on a personal laptop, and that that's kind of what constitutes a reasonable amount of money to spend on a paper. And that's great; there's a huge accessibility boon for doing that. But training these large language models - it is pricey. It's not something that anyone can do on their own, but it's not ruinously expensive. There are thousands of companies around the world that can afford to do this. There are dozens of universities that can afford to do this. And by and large, they just haven't been.

**Adam Stacoviak:** Okay.

**Jerod Santo:** So this Pythia model that you trained... How much did that cost?

**Stella Biderman:** So we trained -- so it's part of a suite of models that had 28 in it total. But altogether, that was like less than $800,000. The largest model, one training run would probably be like $200,000...

**Jerod Santo:** Not bad...

**Adam Stacoviak:** That's more than a laptop...

**Stella Biderman:** ...which is more than a laptop, but it's not a mind-boggling amount of money.

**Adam Stacoviak:** For sure.

**Jerod Santo:** It's less than a Super Bowl commercial...

**Adam Stacoviak:** It's true.

**Stella Biderman:** Yeah. So right now, the largest open source -- well, okay, the second-largest open source English language model in the world is called GPT-NeoX. We trained that. I trained that. My organization. And that cost us about $350,000, or would have, if we weren't given the compute for free. But $350,000 for the second-largest open source language model in the world... At the time we released, it was the largest. Later, someone else trained a bigger model, with sponsorship from the Russian government.

So GPT-3 came out in 2020, and for about two years almost nobody was training and open-sourcing language models. Google was doing it with similar models, but not the same kinds of models that GPT-3 was, and we were doing it. It was really not that expensive. We got into it on compute that we got for free through a Google Research Computing program called the TensorFlow Research Cloud. And with that, we trained a 6-billion-parameter language model, the one that underpins the first version of Dolly, that \[unintelligible 01:20:48.05\] was talking about. That's been extremely widely used, deployed in a whole bunch of different industry and research contexts, and been hugely successful... And it was literally just like compute Google gave us for free. It ran preemptively on their Research Cloud -- basically, the idea of TRC is that they have a research cluster that they don't always use all of. And so other researchers, independent researchers, academics, nonprofits can apply to be able to run preemptable jobs on their research cluster, and just use the compute that they're not using at the time. And using that, we trained this model in two and a half months.

**Adam Stacoviak:** Wow.

**Stella Biderman:** And it was a really big deal when it came out. It was the largest model of its type in the world by a sizable margin; it was about four times the size of the largest open source model of its type in the world... Yeah, and the Pythia models we trained on 120 A100 GPUs, for a couple of weeks, which is certainly a lot of computing resources, but it's not like mind-boggling amounts of compute. There are lots and lots of companies that have that, that could -- it's less about it actually being too expensive, and more about kind of having the political will to actually go do it.

**Adam Stacoviak:** \[01:22:06.08\] Yeah. Are you focused on training open source models? Is that your focus?

**Stella Biderman:** So our focus is on open source AI research in general. Our kind of area of expertise is large-scale AI, and most of what we do is language models, but we've also worked on training and releasing other kinds of large-scale AI models. We are part of the OpenFold project. So DeepMind created an algorithm for modeling protein interactions called AlphaFold; that was a really big deal. And we helped some academics scale up their research and replicate that, and release it open source. We've done some stuff in the text-to-image space, both on our own and some of our staff have kind of gone on and worked at Stability AI on some of their image models... And we are a big proponent of open source research in general.

The reason we decided to start training these large language models was back in the summer of 2020 we thought this GPT-3 thing is going to be a major player in the future of AI, and it's going to be really essential; if you want to be doing something meaningful in AI, you probably want to know how these things work. You want to be able to experiment with them, and you'll want to have access to them. And back then, you couldn't even pay OpenAI to let use the model. They announced that they had it, and that was it. And so we said, "Well, what the \*beep\* let's try to train a model. We'll learn something along the way."

So we started building an open source infrastructure for training large language models. We created a dataset called the Pile, which is now kind of the de facto standard for training large language models. We created an evaluation suite for consistently evaluating language models, because everyone runs their evaluations a little differently, and there's huge reproducibility issues... So we built a framework that we could release open source, and run on our own models, run on other people's models, and actually have kind of meaningful apples-to-apples comparisons... And we started training large language models. So we trained a 2.7-billion-parameter model, which is a little bit bigger than GPT-2 was at the time... And then we started training larger models; 6 billion parameters was the largest open source GPT-3-style language model in the world. 20 billion parameters was the largest language model of any sort to be released open source in the world.

Since then, there's been a lot more investment and willingness to train and release models. There's several companies that are now doing it. Mosaic is a company that released a nine, I want to say -- something; a large language model, that seems really excellent, last week. There is Meta, which has been training and releasing sort of models... They'll tell you that they're open-source-releasing models, but that's just not actually correct. They're under non-commercial licenses, and they're not open source, despite their rethoric to the contrary. But there's a whole bunch of companies. Stability AI is training large language models... So now there's a lot more people in this space, and doing it and releasing it. And honestly, from my point of view, we got into training large language mostly because we wanted to \[unintelligible 01:25:20.13\] We wanted to enable people to do essential research on interpretability, ethics, alignment, understanding how these models work, why these models work, and what they're doing, so that we can design better models, and so that we can know what appropriate and inappropriate deployment contexts for them are.

So now that there's a lot more people working in kind of this open source training space, we're moving more towards doing that kind of scientific research that we've always wanted to do. So in the past six months we've been doing a lot of work in interpreting language models, and kind of understanding why they behave the way they do. My personal kind of area of focus is tracing the behavior of language models back to their actual training data. So the models that Dolly 2.0 is trained on, the Pythia suite - what kind of makes that special is that most language model suites are very ad-hoc constructed.

\[01:26:16.10\] I'm calling them suites, because you have several models that are similar, of different sizes. So the OPT suite by Meta, for example, ranges from 125 million parameters to 175 billion parameters. But they're not actually very consistent between them. Some of them even have different architectures; they have different data order... There's a lot of stuff that kind of limits your ability to do controlled experiments on these models. And so we sat down and we said, "If we wanted to design from the ground-up a suite of large language models that was designed to enable scientific research, what would it look like? What kinds of properties would it have? What kinds of experiments do we think people are going to want to do, that we're going to need to enable?" And we built this list of requirements, and then created a model suite that satisfies that. So it was trained on entirely publicly-available data; all of the training -- it was trained on the same data... Every model in the suite was trained on the same data, in the same order. And we have a whole lot of intermediate checkpoints that are safe. So if you want to know, you know, after 10 billion tokens, how each model in the suite is performing, you can go and grab those checkpoints after 10 billion tokens. And then you can say, "Okay, what's the next data point it saw during training after 10 billion tokens? What was the 10 billion and first token? ...and you can actually use some stuff we've uploaded to the internet to actually load that data, in the same order \[unintelligible 01:27:32.29\] by the models. You can study kind of how being exposed to particular training data influences model behavior

So we've been using this right now primarily to study memorization, understanding -- because language models have a propensity for reproducing long, exact sequences from their training corpus. And we're interested in understanding what causes memorization, why certain strings get memorized and others don't... Right now I'm wrapping up our kind of first paper on that. We have some more research in the works, trying to understand, you know, looking at the actual models throughout the course of training, and looking at kind of the training data points that they see, and trying to reverse-engineer what that actual interaction between the model and the data is.

And yeah, this is something I'm personally really high on... Most interpretability research right now is kind of focused on final trained models as pre-existing artifacts. So you have this trained model, and you want to understand what behaviors it has. But my perspective as someone who trains these models is much more focused on kind of where they come from, and what -- especially, my overarching goal is to kind of... You know, if I as a person who trains a large language model have a particular desire for a property the model has, a property the model doesn't have, what decisions can I make to actually influence that, and to make the model have the properties I want it to have? So if there's data I don't want it to memorize, is there a way that I can know ahead of time what's going to be memorized? That's the paper that we have actually just released on our archive, about forecasting what is going to be memorized before you actually train the model.

**Adam Stacoviak:** Is that to make it less black box? More like you deploy it, and you don't know what it can do, so that you can sort of understand "Okay, here's the data, here's how it was trained", to sort of have more clarity of what the box actually contains, versus this black box?

**Stella Biderman:** Yeah.

**Adam Stacoviak:** Is that why that's important?

**Stella Biderman:** Yes, that is what the field of interpretability is about in general, and I would say kind of building on that... What my research is about in particular is not just opening up that black box and looking inside and understanding what the model is actually doing, but understanding where it came from, and how we can build boxes that are more transparent from the ground up.

**Adam Stacoviak:** Predictable maybe even?

**Stella Biderman:** Yeah.

**Adam Stacoviak:** Because that's one of the fears, is - especially with Bing, when they put that out there, I think it threatened the person... There was some sort of threat on humanity, essentially... And it's like, you deploy this thing out into the world and you don't understand what it can actually do. Is that to be more predictable, more controlled, to some degree?

**Stella Biderman:** \[01:30:00.08\] Absolutely.

**Jerod Santo:** And designable even, right?

**Stella Biderman:** Sorry?

**Jerod Santo:** And even designable. Like, say, "Forget these things. Remember these things."

**Stella Biderman:** Yeah. Designability is a really big component, I think, that's going to become huge in the future. And really, it hasn't been studied primarily because people haven't had the tools. Very few model suites have intermediate checkpoints at all. A lot of publicly-released models weren't trained on publicly-released datasets... Or if they were trained on publicly-released datasets, they didn't tell you what order it was trained on. And it turns out that matters a lot. What we saw early in training, what we saw late in training. And so there's really a huge reproducibility issue in terms of -- like, if you want to dig in and really understand how data by data, data point by data point the model is learning to behave, you need to be able to basically fully reproduce the training. Not actually, because you're not going to spend a couple hundred thousand dollars, but at least in principle, you need to be able to inspect individual data points, know when it's gonna get loaded, understand kind of how it works... And this is something that we've put a huge amount of resources into, both on the training side, as well as kind of on the engineering side. It was not easy. But you can actually reproduce our model training exactly.

So if you take the codebase that we used to train these Pythia models, and you pick a checkpoint, and you load that checkpoint, and you resume training from that checkpoint, you will end up with the same fully-trained model that we did. Exactly.

**Adam Stacoviak:** That's important.

**Stella Biderman:** That is really important. It's important because if you want to understand how to design models, you need to understand how they're changing over the course of training. And that is really persnickety and really sensitive to a lot of implementation-specific details that tend to not get released.

**Adam Stacoviak:** How far in the future do you think -- since you're at the training level, you're like the ground level of... If this is the eureka moment for humanity, how far in the future do you think, and do you have fear, trepidation, hope? ...like, where will this take us as humanity?

**Stella Biderman:** I really don't know. My kind of attitude is that the recent -- there was a really big paradigm shift in 2020, with the release of GPT-3, and the aggressive focus on scaling... And people really changed their attitudes towards how to design language models, and kind of how they can be used, and what they can be used for. In a sense, we got really lucky, because it wasn't that dangerous. There were a lot of fears about what GPT-3 could do... And by and large, it turned out to be pretty safe. There wasn't all that much harm done, and a lot of the fears turned out to not come to fruition.

And kind of looking forward, I think the really important thing to think about is -- we obviously can't predict the next paradigm shift, but building tools that allow us to hopefully more readily adapt and respond to future paradigm shifts in large-scale AI. One day, there probably will be something that gets developed that is dangerous, and we want to be able to be, I guess, ready for that.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Cool. Well, what are some touchpoints? People who are interested in what you're up to, who want to help out, want to give money, want to read more - where can people connect with you?

**Stella Biderman:** \[01:33:09.06\] So the best place to connect with us is our Discord server. We are a research institute, but we actually operate basically entirely in the public view. We're distributed all over the world, and we do our research in a public Discord. And anyone can join, anyone can drop in, read about what we're getting up to, hang out with us, chat with us about AI... So our Discord server is discord.gg/eleutherai. There's also a link on our website, which is a eleuther.ai.

**Adam Stacoviak:** Nice. We'll link it up in the show notes, for sure.

**Jerod Santo:** Yeah.

**Stella Biderman:** And yeah, we're always happy to take on more volunteers. We have a small professional staff, and a large number of volunteers that help out as well.

**Adam Stacoviak:** How small is small?

**Stella Biderman:** Like 10 full-time employees.

**Adam Stacoviak:** Okay. And if they go to the Discord server, what can they do there? What can they expect from the Discord server? You're there, others are there?

**Stella Biderman:** Yeah, so you can chat about AI... We have a bunch of discussion channels, where people talk about kind of cutting-edge trends in artificial intelligence... Honestly, I don't really follow AI publication news anymore, because I just follow my Discord server, and everything that's important shows up for me.

**Adam Stacoviak:** Okay. There you go.

**Stella Biderman:** ...which is a really nice place to be. But you can talk with us, you can talk with other researchers... We have a large amount of researchers at the cutting edge of AI. I can't count the number of times that someone's posted a paper and been like "Hey, this is really cool. Does anyone know anything about this?" and someone just tags the guy who wrote the paper. That happens all the time. We have people from Open AI, Anthropic, Meta... All the major labs. DeepMind... They come in and chat about language models, give advice, give perspectives on research, and talk about kind of how things are going.

You can also get involved with ongoing research projects. We have a dozen-ish ongoing research projects, ranging from figuring out how to train better language models, to training language models in other languages... So if you look at the list of the 100 largest language models in the world, basically all of them are English or Chinese.

**Adam Stacoviak:** Yeah.

**Stella Biderman:** So if you want to spread the benefits of this technology, and the ability to kind of use and understand this technology to the world writ-large - like, not everyone speaks English and Chinese; and even the people who do, often also speak other languages that they care about. So we've trained and released several Korean language models, we're currently training, with the plan of releasing some Indic language models, as well as some romance language models...

So yeah, on the developing new model side, we do research that. On the interpretability side, we do a lot of different stuff - understanding training dynamics, understanding how to evaluate language models, understanding how to kind of extract the best information from them... We recently started up some work on kind of red-teaming them, and trying to understand -- you know, there's a lot of stuff out there right now about prompt-hacking, about how people are trying to put filters on language models, and they're kind of not really very successful... And trying to understand what the dynamics of that is like, whether you can build meaningful safeguards around these things, or whether it's always going to be subverted. We do a lot of work like that as well.

**Adam Stacoviak:** Very cool.

**Jerod Santo:** Well, thanks for coming on the show, Stella.

**Adam Stacoviak:** Yeah, Stella. Thank you so much.

**Stella Biderman:** It was a pleasure.

**Adam Stacoviak:** It was awesome having this deep-dive with you. I loved that. Thank you.

**Stella Biderman:** Great to meet you guys.
