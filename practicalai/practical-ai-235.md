**Daniel Whitenack:** Welcome to another Fully Connected episode. In these episodes, Chris and I keep you fully connected with everything that's happening in the AI community. We'll take some time to discuss the latest AI news, and we'll dig into learning resources to help you level up your machine learning game. I'm Daniel Whitenack, I'm the founder of Prediction Guard, and I'm joined as always by my co-host, Chris Benson, who is a tech strategist at Lockheed Martin. How are you doing today, Chris?

**Chris Benson:** Doing pretty good. How are you today?

**Daniel Whitenack:** Doing really well. I told someone earlier today, it was a beautiful day outside, and I've got a lot of interesting things to work on... So yeah, I don't know that I can complain.

**Chris Benson:** That's a good way of looking at the world. I've gotta say it's a beautiful day outside here in the metro Atlanta area, and I also have some pretty fun stuff to work on... So you know what? We don't have anything to complain about, do we?

**Daniel Whitenack:** Yeah, I don't think so. And it seems like there's just fun things to talk about these days. I don't know if you and your immediate circles have been talking about this superconductor stuff that's happening. Have you been watching the sort of room temperature superconductor buzz, I guess?

**Chris Benson:** I have not. Tell me about it.

**Daniel Whitenack:** Despite having some background in physics, I have not looked at any of this, so I can't really comment too much, other than just following it from the sidelines. But apparently, there was a research group that claims to have created a superconductor that superconductors at room temperature. People might have seen these videos in the past of little things levitating on something that's really cold... That's kind of the typical image of a superconductor.

**Chris Benson:** Like, isn't it absolute zero kind of temperatures, and stuff?

**Daniel Whitenack:** Yeah, it's measured in Kelvin, really low temperature sort of thing... So of course, this is very intriguing, and I've seen a number of things. There's one group that's claimed they've reproduced it, there's others that are skeptical, but trying to reproduce some of the results... I forget the name of it, I'm gonna butcher this... I think it's like LK99, or something. Yeah, LK99 superconductor. So if you want to look at some cool stuff that doesn't involve transformers and neural networks, that's cool.

**Chris Benson:** It sounds interesting. So as a non-physicist - who likes physics, but a non-physicist - and since we are the practical superconducting podcast, of course...

**Daniel Whitenack:** If you're going to ask me to explain all this, I'm afraid I'm too rusty to do a good job...

**Chris Benson:** Okay, fair enough. I was just gonna say what are some of the practical uses of a room temperature. I imagine there's tons.

**Daniel Whitenack:** Well, yeah... I think in general a superconductor, as the name might suggest, conducts, which - if you think about that, it's basically everything used in electronics as some type of conductor...

**Chris Benson:** Good stuff.

**Daniel Whitenack:** Yeah, good stuff. And a superconductor, typically, if it's operating near absolute zero, it's not really that practical to put in your everyday electronic items. So something that is room temperature, I think, could open up possibilities, I guess.

**Chris Benson:** I understand.

**Daniel Whitenack:** So I'm not, again, the superconductor expert, but people might be familiar with semiconductors as well, which, of course, are very important to electronics. The supply of those in recent years has caused a lot of news, because chips for cars and such have had issues in the supply chain, and all this stuff... So you could think about these materials fitting into a similar zone of research.

**Chris Benson:** It's really interesting... And though I don't talk about it much in my day job, there are places where I intersect with microelectronics, and that is not my area of expertise, but I do know that there's quite a revolution going on in that space. So this may be yet another aspect of what may propel the hardware side of things, which I am generally not very knowledgeable about.

**Daniel Whitenack:** Yeah, there's a ton of stuff going on right now in that space, even in the small town where I'm at, where Purdue University is located. They're killing it on a lot of fronts, but they've just established a huge partnership to build a bunch of semiconductor research facilities around Purdue, because there is a lot of emphasis to kind of decouple chip production from a single location, and bring some of that expertise or distribute some of that expertise around. So it's quite interesting to follow some of that, which definitely influences the things that we talk about on this podcast, and in a more far-reaching, or twice-removed sort of way... But it's interesting to keep a pulse on, for sure.

**Chris Benson:** \[00:05:54.17\] I have noticed more and more the convergence of microelectronics, really modern software approaches and artificial intelligence, all converging into things, and intertwining... And so maybe at some point we need to have some dedicated episodes about some of those connection points between them.

**Daniel Whitenack:** For sure, yeah. And that's not the only news that happened this week... So as I do most days, pulling up Hugging Face and clicking on models and sorting by trending, which is the default, seeing what new models are out there, a couple of things to announce, probably the most interesting would be Stable Diffusion XL 1.0. People might remember on one of our Fully Connected - it's not that long ago we talked about stable diffusion XL 0.9, I believe it was, although I get confused, with all the acronyms and numbers, but... That was essentially a research-only kind of beta version of what is now released as the general release of the new Stable Diffusion, which is Stable Diffusion XL 1.0. And yeah, I mean, I've played around a little bit with it through Clipdrop and some other places, and pretty stunning output. I've really enjoyed it. I've created some posts on LinkedIn with generated imagery... They release it under an OpenRAIL license, which we've also talked about on this show. It's more open, although I think as we talked about in that episode about OpenRAIL licenses, it wouldn't be considered open source, quote-unquote, but open access, in some way.

**Chris Benson:** Right.

**Daniel Whitenack:** And yeah, it's pretty cool. So I don't know if you're looking at any of the cool images, Chris, but...

**Chris Benson:** I am indeed, as we talk.

**Daniel Whitenack:** They say that, of course, best ever - obviously, you know, that's the thing to say when you're releasing something...

**Chris Benson:** They say "World's best open image generation model." But to your point a moment ago, the word "open" gets parsed in all sorts of different ways. So...

**Daniel Whitenack:** Correct. Yeah. There's all sorts of nuances to that. So the things that they highlight in the post are better artwork for challenging concepts and styles, kind of creating a certain feel imparted by the prompt; more intelligent with simpler language... So I guess the thought with this is that the model is able to produce more complicated imagery. I'm looking at a panda astronaut, in what looks to be a coffee shop, with an iced coffee.

**Chris Benson:** I see that one on their page...

**Daniel Whitenack:** Yes. Apparently, that comes from a simple prompt... Although I don't see the prompt in their posts. It just says "simple prompt."

**Chris Benson:** They need to have more raccoons on it. I'm a raccoon aficionado, so...

**Daniel Whitenack:** Yeah, exactly.

**Chris Benson:** Pandas are fine. I like pandas. But they really need a raccoon or two.

**Daniel Whitenack:** Yes. Similar to what you said -- I think they say "the best"; they also say the largest open image model... Though we talked about this on a previous show, how it's a two-stage model. There's a base model and a refiner model. The base model is actually smaller, 3.5 billion parameters. The larger model is the refiner model, which is 6.6 billion. So that's a final -- I think they say de-noising, but sort of refining, make-the-image-better step...

**Chris Benson:** Are those model sizes - I noticed they are both under your magical seven number, that you educated us on a while back... Would that be to make this accessible to people, so they can get in there and download the model and start, or not? Is it just \[unintelligible 00:09:50.12\]

**Daniel Whitenack:** They say that SD XL 1.0 should work effectively on consumer GPUs with 8 gigabytes of GPU memory VRAM, or readily available cloud instances. So this is definitely a one-GPU model. Now, it might not work on all GPUs, depending on how you implement it, and how you call it, but definitely accessible to people, which I think is really cool.

\[00:10:20.18\] And also, that I think puts it in another realm, which is interesting - another thing they highlight around fine-tuning. So if you have a bigger model, it's also generally harder to fine-tune that model for your own purposes. But along with this, they talk about kind of out-of-the-box support with LoRA, or the low rank adapters type of technique, where you can fine-tune the model in a very parameter-efficient way. And so the thought is, "Hey, people, this is open now. Create your own fine-tunes off of it as well." And I imagine -- this was just released... Well, it's been a few days, but the 26th of July, as we're recording this, 2023 - I'm guessing we'll see a whole bunch of fine-tunes off of this appear on the model hub and elsewhere in days ahead... Similar to what we're seeing actually with LLaMA 2.

That's the other thing I was going to note on the model hub, is just the proliferation of LLaMA 2's. I'm just looking at it right now, so I see Stable Diffusion XL base - that's what's trending at the top. Then we have the base LLaMA 2 from Meta, then we have Stable Beluga, which is also from Stable AI, and is a LLaMA 2 fine-tune... We've got LLaMA 2 7,000,000,000 32k -- it looks like 32k context link from Together Computer, the Chat LLaMA, and then I see one, two, a whole bunch of other LLaMAs. So we'll continue to see those proliferate, I think.

**Chris Benson:** That sounds good. While you were telling me that I was busy playing with Stable Diffusion here, with of course raccoons in space, and trying different versions of that.

**Daniel Whitenack:** Nice. Well, let me know how they turn out, and definitely post them on all the places. We need more raccoons in space.

**Chris Benson:** We need more raccoons in the world, I know. Or out of this world maybe.

**Daniel Whitenack:** Yeah, one follow-up too on the LLaMA 2 front, which is connected to the legal topic that we talked about before with Damien Riehl, which people really loved that episode. I loved that episode, too. We'll link it in the show notes... About the legal consequences of generated content. But I was chatting back and forth, and actually Damien got in a Twitter chat, which is - there's this interesting thing, which we didn't really talk about on the show, but a lot of people are doing... I think it's worth just mentioning it on the show, because it's kind of a conundrum to me, to be honest, without actually talking it through with a lawyer... Which is technically I think you're not supposed to use GPT output to train or fine-tune another non-GPT model.

So what comes out of - let's say you have an OpenAI account, and you generate a whole bunch of output from GPT 4, which is going to be really good, and then you fine-tune an open, smaller model on that GPT output, and you make the open model good, like GPT 4. So that's what a lot of people are doing. It's not really like a hidden thing. People are posting these models on Hugging Face... And the question on Twitter, which I thought was really interesting, and maybe listeners can consider, is - well, first off, it seems to break the license agreement with OpenAI... But also, machine-generated content isn't copyrightable. But also, if they do that, and then they post the model, can I use the model that they posted on Hugging Face? ...if it's sort of from the -- what is the thing? Poison Well, or whatever... And yeah, what all of that would actually hold up in court? It's a whole mix of things. So I just -- I've been thinking about it a lot, and I think it's an interesting thing that we'll see play out.

**Chris Benson:** Yeah, I mean, I think the term for kind of the sourcing is kind of the provenance of it. Am I thinking correctly? There's a point where it becomes very, very difficult to follow that. And if you have enough rabbit holes that you're going down by using the output, I have no idea how that becomes enforceable down the road. I think we're seeing a bunch of these licenses... I think we saw one from Meta, which basically said "You can use it for anything so long as you don't compete with us." It's me paraphrasing. I just have no idea how we would possibly have an organization that could follow through on that.

**Break**: \[00:15:00.00\]

**Daniel Whitenack:** Well, Chris, in addition to seeing interesting things play out with models and licenses and open source or not, and all of these conundrums that we're facing, at the same time we have policymakers in various places trying to figure out what they should be doing with this. I don't know if you've been seeing that...

**Chris Benson:** I have. And it's funny, I'm kind of conflicted. There's a part of me that looks at this and says "It's important. We have so much change." But there's also a part of me - these policymakers are just so far behind this audience that's listening right now, and the people that are doing this, that there's definitely a part of me that's kind of ready to shoot spit wads at them while they're doing it, and poke fun. And maybe that's okay. I mean, politicians are there for us to poke fun at. So I'll give them a little credit... They're trying...

**Daniel Whitenack:** Yes, yes, they're trying. And one of the things that just came across my path this week is - we've heard of this EU AI Act, and we've talked about it here, where they're trying to restrict certain risky uses of AI, and other things... That seems, I think, to some, fairly restrictive. And one of the things that I saw was that there was an open letter from GitHub, Hugging Face, Creative Commons... I don't even know how this works. I guess if you're an organization of that size, you know how to get that letter to the right people. I don't even know; if it's open, you just post it on a website and hope they read it, and hope that articles get published about it, which I guess is what happened. So I don't know.

I don't know, if the EU AI Act, people are actually reading this... I guess that's where I was going with that. But I assume that they're aware of it. An open letter from GitHub, Hugging Face, and Creative Commons, and a number of others calling on the EU to ease some of the rules in the AI Act. Basically, arguing that some of the things in the AI Act are kind of regulating the upstream open source projects as if they're more commercial products, which - they're kind of this open source ecosystem. And I think the fear is that if the restrictions come like their plan, then that somehow stifles what we're seeing in the blossoming world of open source AI.

So there's probably a counterpoint to that, which would be maybe that sort of blossoming is what's rapidly creating issues that are hard for people to deal with... I'm not saying I'm taking either one of those stances, I'm just trying to play devil's advocate; if the open source world is really driving this blossoming of things, and the blossoming of things is what are causing people to really have a lot of these risky type of scenarios pop up, how do you put some regulation around that process when you don't want to stifle the open source thing? ...which I think we all love; we support that on this show, and see how its benefited things... But also create some problems, probably. And how do you deal with that tension?

**Chris Benson:** \[00:19:37.27\] Yeah, it's a really hard nut to crack, to figure out where the right balance point is on that... Because this open letter that we're talking about - it's really getting at that there are all sorts of negative, unintended consequences that can come about by taking an action and making it a regulation or a law in doing that. And yet, that's being balanced against really broad fear that the public is expressing. There's a lot in the general media - not the technical media, not AI media, but the general media, there's a lot of stories being published about concern going forward. But then that gets also balanced against organizations with various motivations, that are worried about being left behind, they're worried about their competitors, or their adversaries getting ahead of them... Potentially any given human in any one of those organizations has that same fear.

So if you're a policymaker, how do you approach that problem? You're kind of lagging behind probably already on the technical side - which, kind of going back to the earlier point - and you're trying to regulate something that's as cutting edge as one can be, before it ever happens, by looking at what you have today and trying to project into tomorrow. It's a tough position to be in.

**Daniel Whitenack:** It is. And I think there's really a lot of fear on both sides that this is - you know, fear on the one side, because policy is falling so far behind what is the state of the art, but fear on the other side, because there's real consequences. Like you say, if something is made into a law, whether it's enforced or not, the reality is that it's there.

I'm just looking at - Jeremy Howard from Fast AI has commented on some of these things, and written a blog post... But one of the sort of quotes that he looked at with the EU Act was the fact that sort of any model made available in the EU without passing certain extensive licensing and approvals could face massive fines. And if you think about where those models are coming from, if those are just some developers somewhere creating a model and posting it on Hugging Face, certainly that's available in the EU - that puts a liability there. So there's real consequences on both ends, because also if I'm a policymaker - and we've seen this in the US just this week, too - people gathering to figure out "What do we do? Where do we go?"

**Chris Benson:** There's a dissonance between the way technology develops and evolves, which is not strictly consistent with nationalities, and legal barriers and legal lines, to some degree. And you've seen that in many different things outside of the topic we're talking about, where people will move it to a different nationality where the laws are different, stuff like that. But there's an added complication here, and that is this is -- and we keep talking about it, especially this year... This is moving so bloody fast that the ability to render a law, a regulation essentially completely ineffective is quite easy right now by simply moving things around the globe, and taking advantage of the different things.

So it's gonna be interesting to see how different legal entities cope with this, whatever they end up with... Whether it be the EU, or - I was looking at a member of Congress commenting, the White House has stuff out on it... But how to make that enforceable in the large. If you're really firmly planted, like if you're an American company, who does most of your business in America, you're regulated by American entities, that's one thing. But a lot of small businesses don't operate that way, and they're not strictly limited to that. So I think going back to our legal episode recently, where we talked about the ability to enforce, is really going to play out in this.

**Daniel Whitenack:** Yeah, there's the enforcement side, there's also the side of this which is "How are policymakers thinking about this, and what conclusions are they coming to, and what guidance are they providing?", whether that's put into law or not. That's an interesting thing to follow. I think that's one of the interesting things in the US.

\[00:24:10.29\] This week, one of the things that you sent me, which I think has been happening for some time - of course, the White House and others have been talking about AI for some time here in the US... But there's interesting things like this blueprint for an AI Bill of Rights, which is published, and it's quite interesting... So just from a practitioner's standpoint I'm coming to this saying "Okay, how are maybe non-practitioners - hopefully advised by practitioners - how are they viewing the way in which we should go about doing our jobs?" Because probably that's gonna affect us at some point. And maybe they have some good ideas to influence how we do things practically. So it could just be completely ludicrous, and it could provide some really interesting talking points. So I was reading through that; I don't know if you saw the Bill of Rights...

**Chris Benson:** I just pulled it up. And it's funny - this is kind of late to the game, in my view... Several years ago, without going into specifics that could, that could get me into trouble, I was kind of deeply involved in the early details of AI ethics in several organizations, doing some of the work... And here's how I ended up - it's hard to come up with good principles. But even as hard as that is, that's still the easy part of the job, because the devil is in the details of how you implement, and what they mean, and how you have the nuance to accommodate all the day to day life... Going back to the discussion we were just having about open models, and unintended consequences, and such as that. It's really hard to do. They have good verbiage from the White House, but I still -- at each one of the points that they have, I can't help but wonder which of the many ways might you go about interpreting this, and implementing any of those interpretations that you have? It's very nice, lovely, fluffy language, and not terribly Practical AI yet.

**Daniel Whitenack:** Yeah. Just to give our listeners an example... So this is an example of what policymakers are, I guess, giving us as guidance in developing systems... So for the blueprint, for an AI Bill of Rights, they have various parts of this, like the actual bill of rights - they even say, "From principles to practice." So they're from principles to practice. So they break this down into several different points. One is safe and effective systems. So their bill is "You should be protected from safe or ineffective systems." And then they kind of go into what should be expected of automated systems. Well, it should be expected to protect the public from harm in a proactive and ongoing manner, and then they give some kind of ways to do that, like consultation, testing, risk identification and mitigation, ongoing monitoring, clear organizational oversight.

So when I read this, part of me thinks, well, if I go and I try to make my product SOC-2-compliant, or something like that, I have to do a lot of those things anyway. So why is this different than some of the sort of compliance things that are already widely accepted as compliance things that matter? And maybe it's where AI comes into the automation; there's some large language model reasoning going on, or something like that... But a lot of these things would be things that I'm already looking at.

Another one, Algorithmic Discrimination Protections - you should not face discrimination by algorithms, and systems should be used and designed in an equitable way. What should be expected, proactive assessment, representation and robust data, guarding against proxies, ensuring accessibility during design, development and deployment, disparity assessment, disparity mitigation, ongoing monitoring and mitigation. I think a lot of this is good language. Some of it blurs the line a little bit for me to current things that exist in terms of compliance, and then some of it is a nice principle, but what do I do with it?

**Break**: \[00:28:41.26\]

**Chris Benson:** So there was another point on the White House blueprint... It's a point that I see people grappling with a lot, and I don't think we've found the right answer yet, and I don't think what they say in it is necessarily the right answer, because at the end of the day I don't think it's practical. And that point is near the bottom they have "Human alternatives, consideration and fallback." And they start off with the first line in bold. And the first line says "You should be able to opt out where appropriate and have access to a person who can quickly consider and remedy problems you encounter." And the problem that I have with that particular point is I think that's great for right now, for us in the moment that we're in at this moment, and the level of AI and the level of automation... But in the years ahead, across all industries, we're going to see dramatically increased automation, we're going to see a number of tasks being automated that are beyond human ability to be able to do. And that will be a natural progression. And that may sound scary today as people listen to this now, but I think that is the evolution ahead, as it always has been, long before AI came out. You know, moving from horse to the buggy, to automobile, that kind of thing. We move into new directions, and there are new concerns and dangers, and we have to mitigate them...

But the distinguishing thing about this particular transition that we're just at the early stages of starting is that we will move into things that we can't do in an automated sense. There is too much happening; it is happening too fast. When there are millions of considerations in a tiny fraction of a second, there is no human that can handle that. And I think that we will certainly make bloopers, but I think that a statement like this is driven by fear. It's fear of what happens if we lose control. And I'm not saying that's not a legitimate fear; I think it's one of those things that we need to be working through in many different areas. But when the White House starts off by saying "Oh, no, no, no. Whatever we're going to do, there's going to be a human right there", it's not really considering what we're observing here; the steep increase in AI being applied across many industries. So I'm throwing a stone at that particular item.

**Daniel Whitenack:** Yeah. I do see what they're saying in terms of there could be this vicious cycle that develops, right? Because AI is getting better at doing customer service and generating responses, and AI is getting better at automating systems. So to be hyperbolic, if I get on a train car that's automated, and there's some problem, and I'm stuck on a bridge, above a river, or something like that, and I call the support number and it's a generated voice helping me through my issue - this whole thing cycles through automated systems not working properly for me, and then trying to help me... And maybe actually, to your point, maybe the automated system can help me guide me through that.

**Chris Benson:** \[00:32:05.22\] It might be better than the human could have been.

**Daniel Whitenack:** Yeah, I definitely get the concern around this sort of cyclical thing, and where does a human actually pop in. Yeah, I think there's a lot of systems that will operate at speeds as well, and with complexities, that it's going to be hard for a human to debug these things anyway. It's an interesting point.

One of the other things that they link in there is this - it's a NIST AI risk management framework, AIRC. Part of me wonders as a practitioner - like, if I'm developing a new software product, or I'm offering software in an enterprise setting, there's probably going to be an expectation on me that I go through some process to maintain GDPR, SOC-2, type 2, whatever the specific compliance, HIPAA compliance... Monitoring you can put in place, there's third party audits, etc, etc. So part of me wonders, is this sort of AI framework kind of morphed into -- maybe not this one specifically, but will there be a sort of risk management frameworks that filter into not necessarily policy... So I think we've been talking about like the White House and governments; there's certain things that could be put into law. But also, I could very well see a scenario where one enterprise says to one of their vendors, "Oh, are you AIRC-compliant? And how do you prove to me that you are?" Well, maybe it's a third party audit, maybe it's a monitoring system, like it's done with HIPAA, or other things... I wonder if we're gonna get into some of that as well, where whether or not the policymakers make laws, I suspect we're gonna get into some of these scenarios where we'll have some compliance frameworks put into place, that certain enterprises start forcing on other providers... Because they're accepting some level of liability for the type of AI reasoning that they're integrating into their applications.

So if I'm an insurance company, and I'm hiring X vendor to provide some of my AI logic, or something like that, I'm making calls into their system... Do they have to be compliant in some way beyond the compliance structures that are already in place, like HIPAA and others?

**Chris Benson:** Yeah, you're right. I wasn't trying to cut you off there, but you're totally right. I mean, that's a huge business opportunity that is to be realized.

**Daniel Whitenack:** You heard it here. Take it and make the AIRC compliance monitoring framework and you can make some money.

**Chris Benson:** Daniel Whitenack, father of industry right there.

**Daniel Whitenack:** \[laughs\] Father... I'm all the time giving away ideas on this show. I probably need to keep some every once in a while...

**Chris Benson:** But to stick with the AI theme, we'll call you the godfather of AI compliance... Because Godfather is a popular thing, for at least three luminaries that we know. \[laughter\]

**Daniel Whitenack:** That's funny. I don't know if I want me associated with the whole compliance field, but maybe... It depends how much you pay me, I guess.

**Chris Benson:** Yeah, I was gonna say, it may not be sexy, but it's lucrative. So...

**Daniel Whitenack:** Yeah, exactly. You know, I'm looking at some of this stuff, like in AIRC - there are certain things that I could see, just knowing myself having gone through some of the compliance things. When you go through a compliance monitoring thing or an audit, it's like "Do you have this policy in place? Are you educating people about it?" That sort of stuff. And there's certain things in here... In the Governance section, they're like "The characteristics of trustworthy AI are integrated into organizational policies, processes and procedures." So I could just see it now, like "How are you integrating the characteristics of trustworthy AI, blah, blah?" and you'll have to show in some policy, which may or may not be ever read by certain employees, but hopefully if you're being truthful, it is... So yeah, I think we could see that soon.

**Chris Benson:** \[00:36:14.22\] Not only that, but the ironic thing about this is that you have this framework here, but with this explosion, this proliferation of models that we keep talking about, and new techniques that are just happening all the time, and being released - as that continues to accelerate for some period of time, being able to apply these to that quickly enough for market forces to work will almost certainly require compliant AI models that can look at new models, how are they approaching, and figure out whether or not they're doing it.

**Daniel Whitenack:** That's the real meta thing. \[laughs\]

**Chris Benson:** It's meta all the way down; it's meta turtles all the way down on this one.

**Daniel Whitenack:** \[laughs\] There's the podcast title, "Meta turtles all the way down."

**Chris Benson:** "Zuckerbergs all the way down", that's right.

**Daniel Whitenack:** Well, on these shows I think it's always good as well to share some practical learning resources with people... And I did find one this week. Actually, I monitor Hacker News for my good dose of humor, and vitriol, and superconductors, and all the things... But one that was really good to point people to would be this "Patterns for building LLM-based systems and products" from Eugene Yan. Hopefully, I'm saying that correctly. And this was a pretty extensive article. So it's a very long article, and there's various sections in it, but he walks through a lot of the things that people maybe practically are struggling with in terms of building LLM-based applications.

So he talks through evaluations, he talks through retrieval-augmented generation, fine-tuning, caching, guardrails, defensive UI, and collecting user feedback; all of these things... You know, he talks about being used to measure performance, get better task-specific results, reduce latency and cost etc. These are all the practical things that people are doing day to day as they're building their applications. And a little while ago, Andreessen Horowitz put out this evolving ecosystem of the LLM app, and it had a lot of these pieces on there, like caching, and guardrails, and stuff. And I think this dives into a lot of those pieces in a much greater amount of detail. So if you're wondering, "Oh, there's this emerging ecosystem of the LLM app", if you want to know about various pieces of that, I think this is a good way to understand a little bit more about how those pieces fit together.

**Chris Benson:** Just for our audience, you slacked me over the link, and I clicked on it as you started talking about it, and as you've been talking, I was kind of glancing... The very first thing I noticed when it came up was how small the slider on the right side of Chrome was, which expressed how long the --

**Daniel Whitenack:** It's a significant article.

**Chris Benson:** It's a significant -- and then the next thing I noticed was... It wasn't a three-minute read, or a five-minute read, or even a seven-minute read, it's a 65-minute read.

**Daniel Whitenack:** Yes.

**Chris Benson:** So you're right. I mean, just like having not had the 65 minutes to go through it, and just looking at this, it is incredibly detailed. So I'm going to dive into this after the show today. That's a fantastic learning resource. I can tell that, just with all these graphs, and everything in it. It's fantastic.

**Daniel Whitenack:** Yeah, yeah, definitely a lot of graphs. The first one you'll see is on LLM patterns on a scale from data to user, and offensive to defensive. In other words, improving performance or reducing cost and risk, and kind of plotting those various strategies. And there's formulas if you want formulas, there's plenty of stuff that you don't need to read formulas to understand... But yeah, great resource. I'm very happy to come across this and point people to it.

**Chris Benson:** Well, that was a good one.

**Daniel Whitenack:** Yeah. Well, Chris, I don't know what AI adventures are ahead of us in the coming week, but I'm certainly looking forward to talking with you about them next time, on a Fully Connected or with a guest.

**Chris Benson:** We never have a dull week. There's so much happening that we're always trying to find which thing are we actually going to talk about? So it's a fun time to be in this field.

**Daniel Whitenack:** Yes. Awesome. Well, thanks for chatting, Chris. We'll talk to you soon.

**Chris Benson:** Sounds good. Take care.
