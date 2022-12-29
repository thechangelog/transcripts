**Jerod Santo:** Alright, well we have Sean Wang here again. Swyx, welcome back to the show.

**Shawn Wang:** Thanks for having me back on. I have lost count of how many times, but I need to track my annual appearance on the Changelog.

**Adam Stacoviak:** Is that twice this year on this show, and then once on JS Party at least, right?

**Shawn Wang:** Something like that, yeah. I don't know, it's a dream come true, because, I changed careers into tech listening to the Changelog, so every time I'm asked on, I'm always super-grateful. So yeah, here to chat about all the hottest, latest things, right?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** That's right, there's so much going on right now. It seems like things just exploded this fall. So we had Stable Diffusion back in late August; it really blew up at the end of August. And then in September is when we had Simon Willison on the show to talk about Stable Diffusion breaking the internet. You've been tracking this stuff really closely. You even have a Substack, and you've got Obsidian notes out there in the wild, and then of course, you're learning in public, so whenever Swyx is learning something, we're all kind of learning along with you... Which is why we brought you back on. I actually included your Stable Diffusion 2.0 summary stuff in our Changelog News episode a couple of weeks back, and a really interesting part of that post that you have, that I didn't talk about much, but I touched on and I want you to expand upon here is this idea of prompt engineering, not as a cool thing, but really as a product smell. And when I first saw it, I was like, "No, man, it's cool." And then I read your explainer and I'm like, "No, he's right. This is kind of a smell."

**Adam Stacoviak:** "Dang it, he's right again."

**Jerod Santo:** Yeah. We just learned about prompt engineering back in September, with Simon, and talking about casting spells and all this, and now it's like, well, you think it's overhyped. I'll stop prompting you, and I'll just let you engineer an answer.

**Jerod Santo:** Well, so I don't know if you know, but the Substack itself got its start because I listened to the Simon episode, and I was like, "No, no, no. Spellcasting is not the way to view this thing. It's not something we glorify." And that's why I wrote "Multiverse, not Metaverse", because the argument was that prompting is -- you can view prompting as a window into a different universe, with a different seed, and every seed is a different universe. And funny enough, there's a finite number of seeds, because basically, Stable Diffusion has a 512x512 space that determines the total number of seeds.

So yeah, prompt engineering \[unintelligible 00:04:23.23\] is not my opinion. I'm just reporting on what the AI thought leaders are already saying, and I just happen to agree with it, which is that it's very, very brittle. The most interesting finding in the academic arena about prompt engineering is that default GPT-3, they ran it against some benchmarks and it came up with like a score of 17 out of 100. So that's a pretty low benchmark of like just some logical, deductive reasoning type intelligence tests. But then you add the prompt "Let's think step by step" to it, and that increases the score from 17 to 83... Which is extremely -- like, that sounds great. Like I said, it's a magic spell that I can just kind of throw onto any problems and make it think better... But if you think about it a little bit more, like, would you actually use this in a real work environment, if you said the wrong thing and it suddenly deteriorates in quality - that's not good, and that's not something that you want to have in any stable, robust product; you want robustness, you want natural language understanding, to understand what you want, not to react to random artifacts and keywords that you give.

Since then, we actually now know why "Let's think step by step" is a magic keyword, by the way, because -- and this is part of transformer architecture, which is that the neural network has a very limited working memory, and if you ask a question that requires too many steps to calculate the end result, it doesn't have the working memory to store the result, therefore it makes one up. But if you give it the working memory, which is to ask for a longer answer, the longer answer stores the intermediate steps, therefore giving you the correct result.

**Jerod Santo:** \[06:00\] Talk about implementation detail, right?

**Shawn Wang:** It's yeah, it's leaking implementation detail, it's not great, and that's why a lot of the thought leaders - I think I quoted Andrej Karpathy, who was head of AI at Tesla, and now he's a YouTuber... \[laughter\] And Sam Altman, who is the CEO of -- yeah, he quit Tesla to essentially pursue an independent creator lifestyle, and now he's a YouTuber.

**Jerod Santo:** I did not know that.

**Adam Stacoviak:** All roads lead to creator land, you know what I'm saying? You'll be an expert in something for a while, and eventually you'll just eject and be like "I want to own my own thing, and create content, and educate people around X."

**Shawn Wang:** So at my day job I'm a head of department now, and I work with creators, and some of them have very valuable side hustles... And I just had this discussion yesterday, of like "Why do you still have a job if you're an independent creator? Like, isn't total independence great." And I had to remind them, "No. Like, career progression is good. You're exposed to new things etc." but that's just me trying to talk him out of quitting. \[laughter\] No, I have a serious answer, but we're not here to talk about that.

**Jerod Santo:** Right.

**Shawn Wang:** So I'll read out this quote... So Sam Altman, CEO of OpenAI, says "I don't think we'll still be doing prompt engineering in five years. It's not about figuring out how to hack the prompt by adding one magic word to the end that changes everything else. What will matter is the quality of ideas and the understanding that you want." I think that is the prevailing view, and I think as people change models, they are understanding the importance of this.

So when Stable Diffusion 1 came out, everyone was like, "Alright, we know how to do this. I'm going to build an entire business on this" etc. And then Stable Diffusion 2 came out and everything broke. All the \[unintelligible 00:07:40.21\] stopped working, because they just expected a different model, and you have to increase your negative prompting, and people are like "What is negative prompting?" etc. These are all new techniques that arise out of the model, and this is going to happen again and again and again, because you're relying on a very, very brittle foundation.

Ultimately, what we want to get people to is computers should understand what we want. And if we haven't specified it well enough, they should be able to ask us what we want, and we should be able to tell them in some capacity, and eventually, they should produce something that we like. That is the ultimate alignment problem.

We talk about AI a lot, and you hear about this alignment problem, which is basically some amount of getting it to do what we want it to do, which is a harder problem than it sounds until you work with a programmer, and try to give them product specs and see how many different ways they can get it wrong. But yeah, this is an interesting form of the alignment problem, and it interestingly has a very strong tie with Neuralink as well, because the problem, ultimately, is the amount of bandwidth that we can transfer from our brain to an artificial brain. And right now it's prompts. But why does it have to be prompts? It could be images. That's why you have image-to-image in Stable Diffusion. And it could also be brain neural connections. So there's a lot in there; I'll give you time to pick on whatever you respond to...

**Jerod Santo:** Well, I went from -- so I was super-excited about prompting after talking with Simon a few months back, and I was super-excited about Stable Diffusion. And I went from like giddy schoolboy who's just like "Gonna learn all the spells" very quickly to like aggravated end user who's like "Nah, I don't want to go to this other website and copy and paste this paragraph of esoterica in order to get a result that I like." And so I wonder what's so exciting about the whole prompt engineering thing to us nerds, and I think maybe there's like a remnant of "Well, I still get to have esoteric knowledge" or "I still get to be special somehow if I can learn this skill..."

\[09:46\] But in reality, what we're learning, I think, by all the people using ChatGPT - the ease of use of it, as opposed to the difficulty of getting an image out of Stable Diffusion 1.0 at least, is quite a bit different. And it goes from aggravating and insider baseball kind of terms, keywords, spells, to plain English, explain what you want, and maybe modify that with a follow-up, which we'll get into ChatGPT, but we don't necessarily have to go into the depths of that right now... But I changed very quickly, even though I still thought prompt engineering was pretty rad... And then when you explain to me how Stable Diffusion 2 completely broke all the prompts, I'm like, "Oh yeah, this is a smell. This doesn't work. You can't just completely change the way it works on people..." That doesn't scale.

**Shawn Wang:** Yeah. And then think about all the businesses that have been built already. There haven't been any huge businesses built on Stable Diffusion, but GPT-3 has internal models as well. So Jasper recently raised like a 1.5 billion valuation, and then ChatGPT came out, basically validating Jasper... So all the people who bought stock are probably not feeling so great right now. \[laughs\]

That's it. So I don't want to overstate my position. There are real moats to be built around AI, and I think that the best entrepreneurs are finding that regardless of all these flaws. The fact that there are flaws right now is the opportunity, because so many people are scared off by it. They're like, "AI has no moats. You're just a thin wrapper around OpenAI." But the people who are real entrepreneurs figure it out. So I think it's just a really fascinating case study in technology and entrepreneurship, because here's a new piece of technology nobody knows how to use and productize, and the people who figure out the playbook are the ones who win.

**Adam Stacoviak:** Yeah. Are we back to this -- I mean, it was like this years ago, when big data became a thing... But are we back to this whole world where -- or maybe we never left, where "Data is the new oil", is the quote... Because to train these models, you have to have data. So you could be an entrepreneur, you could be a technologist, you could be a developer, you could be in ML, you could be whatever it might take to build these things, but at some point you have to have a dataset, right? Like, how do you get access to these datasets? It's the oil; you've got to have money to get these things, you've got to have money to run the hardware to enable... Jerod, you were saying before the call, there was speculation of how much it costs to run ChatGPT daily, and it's just expensive. But the data is the new oil thing - how does that play into training these models and being able to build the moat?

**Shawn Wang:** Yeah. So one distinction we must make there is there is a difference between running the models, which is just inferences, which is probably a few orders of magnitude cheaper than training the models, which are essentially a one-time task. Not that many people continuously train, which is nice to have, but I don't think people actually care about that in reality.

So the training of the models ranges between -- and let's just put some bounds for people. I love dropping numbers in podcasts, by the way, because it helps people contextualize. You made an oblique reference to how much ChatGPT costs, but let's give real numbers. I think the guy who did an estimate said it was running at $3 million a month. I don't know if you heard any different, but that's...

**Jerod Santo:** I heard a different estimate, that would have been more expensive, but I think yours is probably more reliable than mine... So let's just go with that.

**Shawn Wang:** I went through his stuff, and I was like, "Yeah, okay, this is on the high end." I came in between like one to three as well. It's fine. And then for training the thing - so it's widely known or widely reported that Stable Diffusion cost 600k for a single run. People think the full thing, including R&D and stuff, was on the order of 10 million. And GPT-3 also costs something on the order of tens of millions. So I think that is the cost, but then also that is training; that is mostly like GPU compute. We're not talking about data collection, which is a whole other thing, right?

\[13:46\] And I think, basically, there's a towering stack of open source contributions to this data collective pool that we have made over time. I think the official numbers are like 100,000 gigabytes of data that was trained for Stable Diffusion... And it's basically pooled from like Flickr, from Wikipedia, from like all the publicly-available commons of photos. And that is obviously extremely valuable, because -- and another result that came out recently that has revolutionized AI thinking is the concept of Chinchilla Laws. Have you guys covered that on the show, or do I need to explain that?

**Adam Stacoviak:** Chinchilla Laws misses the mark for me. Please tell. I like the idea though; it sounds cool, so please...

**Shawn Wang:** Yeah, they just had a bunch of models, and the one that won happened to be named Chinchilla, so they kind of went with it. It's got a cute name. But the main idea is that we have discovered scaling laws for machine learning, which is amazing.

So in the sort of classical understanding of machine learning, you would have a point at which there's no further point to train. You're sort of optimizing for a curve, and you get sort of like diminishing returns up to a certain point, and then that's about it. You would typically conclude that you have converged on a global optimum, and you kind of just stop there. And mostly, in the last 5 to 10 years, the very depressing discovery is that this is a mirage. This is not a global optimum, this is a local optimum... And this is called the Double Dissent Problem. If you google it, on Wikipedia you'll find it... Which is you just throw more data at it, it levels off for a bit, and then it continues improving. And that's amazing for machine learning, because that basically precipitated the launch of all these large models. Because essentially, what it concludes is that there's essentially no limit to how good these models are, as long as you can throw enough data at it... Which means that, like you said, data is the new oil again, but not for the old reason, which is like "We're gonna analyze it." No, we're just gonna throw it into all these neural nets, and let them figure it out.

**Adam Stacoviak:** Yeah. Well, I think there's a competitive advantage though if you have all the data. So if you're the Facebooks, or if you're the Google, or X, Y, or Z... Instagram, even. Like, Instagram ads are so freakin relevant that --

**Jerod Santo:** Apple...

**Adam Stacoviak:** Yeah, Apple for sure.

**Jerod Santo:** TikTok...

**Adam Stacoviak:** Yeah. Gosh... Yeah, TikTok. Yeah, the point is, these have a competitive advantage, because they essentially have been collecting this data, would-be to analyze, potentially to advertise to us more, but what about in other ways that these modes can be built? I just think like, when you mentioned the entrepreneurial mind, being able to take this idea, this opportunity as this new AI landscape, to say, "Let me build a moat around this, and not just build a thin layer on top of GPT, but build my own thing on all together", I've gotta imagine there's a data problem at some point, right? Obviously, there's a data problem at some point.

**Shawn Wang:** So obviously, the big tech companies have a huge headstart. But how do you get started collecting this data as a founder? I think the story of Midjourney is actually super-interesting. So between Midjourney, Stability AI and OpenAI, as of August, who do you think was making the most money? I'll give you the answer, it was Midjourney.

**Jerod Santo:** Oh, I was gonna guess that. You can't just give us the answer...

**Shawn Wang:** Oh... \[laughs\]

**Jerod Santo:** I had it.

**Shawn Wang:** But it's not obvious, right? Like, the closed source one, that is not the big name, that doesn't have all the industry partnerships, doesn't have the celebrity CEO, that's the one that made the most money.

**Jerod Santo:** Yeah. But they launched with a business model immediately, didn't they? They had a subscription out of the box.

**Shawn Wang:** Yeah, they did. But also, something that they've been doing from the get-go is that you can only access Midjourney through Discord. Why is that?

**Jerod Santo:** Right. Because it's social, or... I don't know. What do you think? That's my guess, because they're right in front of everybody else.

**Shawn Wang:** Data.

**Adam Stacoviak:** Data.

**Jerod Santo:** Oh...

**Adam Stacoviak:** Please tell us more, Shawn.

**Shawn Wang:** Because the way that you experience Midjourney is you put in a prompt, it gives you four images, and you pick the ones that you like for enhancing. So the process of using Midjourney generates proprietary data for Midjourney to improve Midjourney. So from v3 to v4 of Midjourney they improved so much that they have carved out a permanent space for their kind of visual AI-driven art, that is so much better than everyone else because they have data that no one else has.

**Jerod Santo:** \[17:55\] That's really cool.

**Adam Stacoviak:** And that's relevance, or is it like quality takes? What is the data they actually get?

**Shawn Wang:** Preference, right?

**Jerod Santo:** What's good.

**Shawn Wang:** Yeah. Literally, you type in a prompt, unstructuredly it tells you -- they give you four low-res images, and you have to pick one of the four to upscale it. By picking that four, they now have the data that says "Okay, out of these four, here's what a human picks." And it's and it's proprietary to them, and they paid nothing for it, because it's on Discord. It's amazing.

**Jerod Santo:** That is awesome.

**Shawn Wang:** They didn't build a UI, they just used Discord. I don't know if Discord knows this, or cares... But it's pretty freakin' phenomenal...

**Jerod Santo:** That's pretty smart.

**Shawn Wang:** ...because now they have this--

**Adam Stacoviak:** It's the ultimate in scrappy, right? It's like, by any means necessary. That's the ultimate binding that's necessary, right? You'll make a beat however you can to put up the track and become the star.

**Jerod Santo:** Right.

**Adam Stacoviak:** That's amazing.

**Jerod Santo:** That's really cool.

**Shawn Wang:** So just to close this out, the thing I was saying about Chinchilla was "More data is good, we've found the double descent problem. Now let's go get all the data that's possible." I should make a mention about the open source data attempts... So people understand the importance of data, and basically Luther.AI is kind of the only organization out there that is collecting data that anyone can use to train anything. So they have two large collections of data called The Stack and The Pile, I think is what it's called. Basically, the largest collection of open source permissively-licensed text for you to train whatever language models you want, and then a similar thing for code. And then they are training their open source equivalents of GPT-3 and Copilot and what have you. But I think those are very, very important steps to have. Basically, researchers have maxed out the available data, and part of why Open AI Whisper is so important for OpenAI is that it's unlocking sources of text that are not presently available in the available training data. We've basically exhausted, we're data-constrained in terms of our ability to improve our models. So the largest source of untranscribed text is essentially on YouTube, and there's a prevailing theory that the primary purpose of Whisper is to transcribe all video, to get text, to train the models... \[laughs\] Because we are so limited on data.

**Adam Stacoviak:** Yeah. We've helped them already with our podcasts. Not that it mattered, but we've been transcribing our podcasts for a while, so we just gave them a leg up.

**Shawn Wang:** You did.

**Adam Stacoviak:** And that's open source on GitHub, too. They probably -- I mean, ChatGPT knows about Changelog. They know that -- Jerod, I don't know if I told you this yet, but I prompted that; I said "Complete the sentence "Who's the hosts of the Changelog podcast?" "Well, that's the dynamic duo, Jerod Santo and Adam Stacoviak." It knows who we are. I mean, maybe it's our transcripts, I don't know, but it knows...

**Jerod Santo:** Please tell me it called us "the dynamic duo"... \[laughs\]

**Adam Stacoviak:** I promise you!

**Jerod Santo:** It said that?

**Adam Stacoviak:** I promise you it said that. "The dynamic duo..."

**Jerod Santo:** Oh, \[unintelligible 00:20:34.05\]

**Adam Stacoviak:** It actually reversed the order. It said Adams Stacoviak first and then Jerod Santo... Because usually, my name is, I guess, first, because - I have no clue why it's ever been that way, but... It said "The dynamic duo, Adam Stacoviak and Jerod Santo..."

**Jerod Santo:** That's hilarious.

**Adam Stacoviak:** ...hosts of the Changelog Podcast.

**Jerod Santo:** It already understands flattery.

**Adam Stacoviak:** Yeah, it does. Well, actually, the first prompt didn't include us, and I said "Make it better, and include the hosts." And that's all I said, was "Make it better and include the hosts." So in terms of re-prompting, or refining the response that you get from the prompts - that to me is like the ultimate human way to conjure the next available thing, which is try again, or do it better by giving me the hosts, too. And the next one was flattery, and actually our names in the thing. So... It's just crazy. Anyways...

**Shawn Wang:** Yeah, so that is the big unlock that ChatGPT enabled.

**Jerod Santo:** Totally.

**Shawn Wang:** Which is why usually I take a few weeks for my takes to marinate, for me to do research, and then for me to write something... But I had to write something immediately after ChatGPT to tell people how important this thing is. It is the first real chat AI, which means that you get to give human feedback. And this theme of reinforcement learning through human feedback is - the low-res version of it was Midjourney. Actually, the lowest-res version of it was TikTok, because every swipe is human feedback. And being able to incorporate that into your -- and same for Google; every link click is a is human feedback. But the ability to incorporate that and to improve the recommendations and the generations is essentially your competitive advantage, and being able to build that as part of your UI... Which is why, by the way, I have been making the case that frontend engineers should take this extremely seriously, because guess who's very good at making a UI?

**Adam Stacoviak:** Yeah, for sure.

**Shawn Wang:** But yeah, ChatGPT turns it from a one-off zero-shot experience where you prompt the thing, and then you get the result, and it's good or bad, that's about the end of the story - now it's an interactive conversation between you and the bot, and you can shape it to whatever you want... Which is a whole different experience.

**Break:** \[22:31\]

**Adam Stacoviak:** "Complete the sentence" has been a hack for me to use, particularly with ChatGPT. "Complete the sentence" is a great way to easily say "Just give me somebody long, given these certain constraints."

**Jerod Santo:** Well, that's effectively what these models are, right? They're auto-complete on steroids. Like, they are basically auto-completing with a corpus of knowledge that's massive, and guessing what words semantically should come next, kind of a thing... In layman's terms; it's more complicated than that, of course, but they are basically auto-completers.

**Adam Stacoviak:** Yeah. On that note though, we have a show coming out... So we're recording this on a Friday, the same day we release the same podcast, but it's the week before. So we had Christina Warren on, and so I was like "You know what? I'm gonna use ChatGPT to give me a leg up. Let me make my intro maybe a little easier, and just spice it up a little bit." So I said "Complete the sentence "This week on the Changelog we're talking to Christina Warren about..." and then I ended the quote, and I said "and mention her time at Mashable, film and pop culture, and now being a developer advocate at GitHub." And I've gotta say, most of, 50% of the intro for the episode with Christina is thanks to ChatGPT. I don't know if I break the terms of service by doing that or not, but like -- do I? I don't know. If I do, sue me. I'm sorry. But... Don't sue me. Don't sue us. We'll take it down. We'll axe it out.

**Jerod Santo:** We'll rewrite it.

**Adam Stacoviak:** Yeah, we'll rewrite it. But, I mean, it's basically what I would have said. So...

**Shawn Wang:** There's a nice poetry -- there's a YouTuber who's been on this forever, Two Minute Papers, and what he often says is, "What a time to be alive." And this is very much what a time to be alive. But not just because we're seeing this evolve live, but because we get to be part of the training data. And there was a very interesting conversation between Lex Fridman and Andrej Andrej Karpathy; he was inviting him on to the show... He said, "Our conversation will be immortalized in the training data. This is a form of immortality, because we get to be the first humans essentially baked in." \[laughter\]

**Jerod Santo:** Essentially baked in... Hello, world.

**Shawn Wang:** Like, 100-200 years from now, if someone has the Changelog podcast, they will keep having Jerod and Adam pop up, because they're in the goddamn training data. \[laughs\]

**Jerod Santo:** They're like "Come on, these guys have been dead for a long time."

**Adam Stacoviak:** \[26:05\] Let them go. Give them their RIP. \[laughter\]

**Shawn Wang:** Which is poetic and nice. Yeah.

**Adam Stacoviak:** Yeah, it is a good time to be alive... I think it is interesting, too... I just wonder -- I mean, this might be jumping the shark a little bit, but I often wonder, at what point does humanity stop creating? And at some point, 100 years from now, or maybe more, I don't know, we're gonna be -- maybe sooner, given how fast this is advancing, that we'll create only through what was already created. "At what point is the snake eating the snake?" kind of thing. Like, is there an end to human creativity at some point, because we are just so reliant, at some point, shape, or form, on \[unintelligible 00:26:45.20\] because of training data, and this just kind of like morphing to something much, much bigger in the future?

**Shawn Wang:** So I have an optimistic attitude to that... This question basically is asking, "Can we exhaust infinity?" And so my obvious answer is no. There is a more concrete stat I can give you, which is I think - this is floating around out there. Don't quote me on the exact number, but apparently, 10% of all Google searches every single year have never been asked before. And Google's been around for like 20 years.

**Adam Stacoviak:** That's a big percentage.

**Shawn Wang:** It's still true. So it's on that order; it might be like 7%, it might be 13%.

**Adam Stacoviak:** Well, is it trending down though? Is it trending down? Is it 10% per year, but is it like trending down to like 8%?

**Jerod Santo:** Is it because we put the year in our searches? \[laughter\]

**Adam Stacoviak:** Yeah, it's true, Jerod. Good one.

**Shawn Wang:** Yeah. But anyway, so that's what the SEO people talk about when they talk about long tail... The amount of infinity is always bigger than our capability of creating to fill it.

**Jerod Santo:** I mean, I feel like if you look at us in an abstract way, humans, we are basically taking in inputs and then generating outputs. But that's creativity, right? So I think what we're just doing is adding more to the inputs. Now we have computers that also take in inputs and generate outputs, but like, everything's already a remix, isn't it? Our life experience and everything that goes into us, and then something else produces a brand new thing, which isn't really new, but it's a remix of something else that we experienced... So I feel like we're just going to keep doing that, and we'll have computer aid at doing that, and the computer eventually maybe will just do the actual outputting part, but we somehow instruct it. I'm with Swyx on this one; I don't think there's going to be an end to human creativity, as the AI gets more and more output... What's the word? When you're just -- not notorious. What's it called when you just can't stop outputting stuff?

**Adam Stacoviak:** I don't know.

**Jerod Santo:** Prolific!

**Adam Stacoviak:** Prolific.

**Jerod Santo:** As the AI gets more and more output-prolific, and overwhelms us with output, I think we're still going to be doing our thing.

**Adam Stacoviak:** Yeah. It's the ultimate reduction in latency to new input, right? Think of 100 years ago - creative folks were few and far between. They had miles between them, depending on your system; maybe it's kilometers. No offense. But there's distance of some sort of magnitude, and the lack of connection and shared ideas. So that's the latency, right? And now, the latency to the next input is just so small in comparison, and will get reduced to basically nothing. So we'll just constantly be inputting and outputting creativity, we'll just become like a creative \[unintelligible 00:29:31.17\] system with zero latency, nonstop creativity... Go, go, go...

**Shawn Wang:** Well, I think this is where you start -- I don't know about you, but I feel a little bit uncomfortable with that, right? Entropy is always increasing in the universe; we're contributing to increasing noise and not signal. And that is a primary flaw of all these language models, is just they are very confidently incorrect. They have no sense of physics, no sense of logic; they will confidently assert things that are not true, and they're trained on sounding plausible, rather than being true.

**Jerod Santo:** Right. They're kind of like me when I was in college, you know?

**Shawn Wang:** Exactly. \[laughter\]

**Jerod Santo:** \[30:10\] Just so much confidence, but wrong most of the time. \[laughs\]

**Shawn Wang:** Exactly. Which happens to Galactica, which is this sort of science LLM from Meta, where Yann LeCun, who is one of the big names in tech, was like "This thing will generate papers for you." And within three days, the internet tore it apart, and they had to take it down. It was a very, very dramatic failure, this kind of tech... Because you're talking about biology, and science, and medicine, and you can't just make stuff up like that. \[laughs\]

**Jerod Santo:** Right. So like in the world where chat GPT operates today, which is really in the world of fiction, and kind of BS-ing, for lack of a better term, like writing intros to a podcast - you know, like, it doesn't have to be correct necessarily; it can be like close enough to correct, and then you can massage it, of course, you can cherry pick to get the one that you like... But when the rubber hits the road, like on serious things, like science, or "How many of these pills do I need to take?" I guess that is also -- that's health science. So science, and other things... It's like, it can't be correct 60% of the time, or 80%, or even like 95%. It's gotta reach that point where you actually can trust it. And because we're feeding it all kinds of information that's not correct, de facto... Like, how much of the internet's wrong? Most of it, right?

**Adam Stacoviak:** I mean, medicine though has evolved too, and it hasn't always been correct, though it's also very serious... You'd get advice from a doctor 10-15 years ago, they'd say it with full confidence and full accuracy, but it's only based on that current dataset.

**Jerod Santo:** But you can sue them for malpractice and stuff, right? Like, how do we take recourse against--

**Adam Stacoviak:** You can if they actually have malpractice; they can be wrong, because it's as much science as possible to make the most educated guess. It's malpractice when there's negligence; it's not malpractice when they're wrong.

**Jerod Santo:** A good doctor will actually go up to the fringe and say, "You know what - I'm not 100% sure about this. It's beyond my knowledge."

**Adam Stacoviak:** Sure. For sure.

**Jerod Santo:** "Here's what you can do. Here's the risks of doing that." Whereas the chat bots, the ChatGPT thing is like, "The answer is 7", and you're like, "It actually was 12." And it's like, "Ah, shoot..." \[laughter\]

**Adam Stacoviak:** Well, I think when there's mortality involved, maybe there's going to be a timeframe when we actually begin to trust the future MedGPT, for example; I don't know if that's a thing in the future, but something that gives you medical results or responses based upon data, real data, potentially, that you get there, but it's not today.

**Jerod Santo:** Well, I think this goes back to the data point that you made, and I think where we go from like the 95 -- I'm making up numbers here, but like 95% accuracy, to get it to like 98.5%, or 99%. Like, that's gonna require niche, high-value, high-signal data that maybe this medical facility has, because they've been collecting it for all these years. And they're the only ones who have it. And so maybe that's where you like carve out proprietary datasets that take these models from a baseline of accuracy, to like, in this particular context of health it's this much accuracy. And then maybe eventually you combine all those and have a super model. I don't know... Swyx, what do you think?

**Shawn Wang:** I love the term super-model. I think the term \[unintelligible 00:33:23.10\] in the industry is ensemble. But that just multiplies the costs, right? Like if you want to run a bank of five models, and pick the best one, that obviously 6x-es your cost. So not super-interesting; good for academic papers, but not super-interesting in practice, because it's so expensive.

There's so many places to go with this stuff... Okay, there's one law that I love, which is Brandolini's Law. I have this tracking list of eponymous laws... Brandolini's law is people's ability to create bulls\*\*t far exceeds the ability of people to refute it. Basically, if all of these results of this AI stuff is that we create better bulls\*\*\*t engines, it's not great. And what you're talking about, the stuff with like the 90% correct, 95% correct - that is actually a topic of discussion. It's pretty interesting to have the SRE type conversation of "How many nines do you need for your use case, and where are we at right now?" Because the number of nines will actually improve. We are working on -- sorry, "we" as in the collective human we, not me personally...

**Adam Stacoviak:** \[34:32\] The royal we, yes.

**Shawn Wang:** The role royal we... Like, humanity is working on ways to improve, to get that up. It's not that great right now, so that's why it's good for creativity and not so much for precision, but it will get better. One of the most viral posts on Hacker News is something that you featured, which is the ability to simulate virtual machines instead of ChatGPT-3, where people literally opened -- I mean, I don't know how crazy you have to be, but open ChatGPT-3, type in LS, and it gives you a file system. \[laughter\]

**Jerod Santo:** But that only exists -- it's not a real file system, it's just one that's \[unintelligible 00:35:00.05\]

**Shawn Wang:** It's not a real file system, for now. It's not a real set file system for now, because they hallucinate some things... Like, if you ask it for a Git hash, it's gonna make up a Git hash that's not real, because you can verify \[unintelligible 00:35:10.25\] MD5. But like, how long before it learns MD5? And how long before it really has a virtual machine inside of the language model? And if you go that far, what makes you so confident that we're not in one right now? \[laughs\]

**Jerod Santo:** Now I'm uncomfortable... That actually is a very short hop into the simulation hypothesis, because we are effectively simulating a brain... And if you get good enough at simulating brains, what else can you simulate?

**Adam Stacoviak:** What else WOULD you want to simulate? I mean, that's the Holy Grail, a brain.

**Shawn Wang:** Yeah. So Emad Mostaque is the CEO of Stability AI. He's like, "We're completely unconcerned with the AGI. We don't know when it'll get here. We're not working on it. But what we're concerned about is the ability to augment human capability. People who can't draw now can draw; people who can't write marketing texts or whatever, now can do that." And I think that's a really good way to approach this, which is we don't know what the distant future is gonna hold, but in the near future, this can help a lot of people.

**Adam Stacoviak:** It's the ultimate tool in equality, right? I mean, if you can do --

**Shawn Wang:** Yeah, that's a super-interesting use case. So there was a guy who was like sort of high school-educated, not very professional, applying for a job. And what he used ChatGPT to do was like "Here's what I want to say, and please reward this in a professional email." And it basically helped to pass the professional class status check. Do you know about the status checks? All the other sort of informal checks that people have, like "Oh, we'll fly you in for your job interview... Just put the hotel on your credit card." Some people don't have credit cards. And likewise, when people email you, you judge them by their email, even though some haven't been trained to write professionally, right? And so yeah, GPT is helping people like that, and it's a huge enabler for those people.

**Adam Stacoviak:** Hmm... That is -- I mean, I like that idea, honestly, because it does enable more people who are less able... It's a net positive.

**Shawn Wang:** Yeah. I mean, I seem generally capable, but also, I have RSI on my fingers, and sometimes I can't type. And so what Whisper is enabling me to do, and Copilot... So GitHub, at their recent GitHub Universe, recently announced voice-enabled Copilot... And it is good enough for me to navigate VS Code, and type code with Copilot and voice transcription. Those are the two things that you need; and they're now actually good enough that I don't have to learn a DSL for voice coding, like you would with Talon, or the prior solutions.

**Adam Stacoviak:** You know, it's the ultimate -- if you're creative enough, it's almost back to the quote that Sam had said, that you liked... Well, I'm gonna try and go back to it; he says "At the end, because they were just able to articulate it with a creative eye that I don't have." So that to me is like insight, creativity; it's not skill, right? It's the ability to dream, which is the ultimate human skill, which is - since the beginning of time, we've been dreamers.

**Shawn Wang:** \[38:01\] This is a new brush. Some artists are learning to draw with it. There'll be new kinds of artists created.

**Adam Stacoviak:** Provided that people keep making the brush, though. It's a new brush...

**Shawn Wang:** Well, the secret's out; the secret's out that you can make these brushes.

**Jerod Santo:** Right.

**Adam Stacoviak:** Yeah, but you still have to have the motivation to maintain the brush, though.

**Jerod Santo:** What about access, too? I mean, right now you're talking about somebody who's made able, that isn't otherwise, with let's just say ChatGPT, which is free for now. But OpenAI is a for profit entity, and they can't continue to burn money forever; they're gonna have to turn on some sort of a money-making machine... And that's going to inevitably lock some people out of it. So now all of a sudden, access becomes part of the class, doesn't it? Like, you can afford an AI and this person cannot. And so that's gonna suck. Like, it seems like open source could be for the win there, but like you said, Swyx, there's not much moving and shaking in that world.

**Adam Stacoviak:** Well, I haven't stopped thinking about what Swyx said last time we talked, which was above or below the API, which is almost the same side of the coin that we talked about last time, which is like, this the same thing.

**Jerod Santo:** Yeah. Well, ChatGPT is an API, isn't it?

**Shawn Wang:** Nice little callback. Nice. \[laughter\]

**Adam Stacoviak:** I really haven't been able to stop thinking about it. Every time I use any sort of online service to get somebody to do something for me that I don't want to do, because I don't have the time for it, or I'd rather trade dollars for my time, I keep thinking about that above or below the API, which is what we talked about. And that's what Jerod has just brought up; it's the same exact thing.

**Shawn Wang:** Yep, it is. One more thing I wanted to offer, which is the logical conclusion to generative. So that post where we talked about why prompt engineering is overrated - the second part of it is why you shouldn't think about this as generative... Because right now, the discussion we just had was only thinking about it as a generative type of use case. But really, what people want to focus on going forward is -- well, two things. One is the ability for it to summarize and understand and reason, and two, for it to perform actions. So the emerging focuses on agentic AI; AI agents that can perform actions on your behalf. Essentially, hooking it up to -- giving it legs and legs and arms and asking it to do stuff autonomously.

So I think that's super-interesting to me, because then you get to have it both ways. You get AI to expand bullet points into prose, and then to take prose into bullet points. And there's a very funny tweet from Josh Browder, who is the CEO DoNotPay, which is kind of like a --

**Adam Stacoviak:** Yeah, I'm a fan of him.

**Shawn Wang:** Yeah. Fantastic, right? So what DoNotPay does is they get rid of annoying payment UX, right? Like, sometimes it was parking tickets, but now they are trying to sort of broaden out into different things. So he recently tweeted that DoNotPay is working on a way to talk to Comcast to negotiate your cable bill down. And since Comcast themselves are going to have a chat bot as well, it's going to be chat bots talking to each other to resolve this... \[laughter\]

**Adam Stacoviak:** Wow, man...

**Jerod Santo:** It's like a scene out of Futurama, or something...

**Shawn Wang:** Yeah. So I'm very excited about the summarization aspects, right? One of the more interesting projects that came out of this recent wave was Explained Paper, which is - you can throw any academic paper at it and it explains the paper to you in approachable language, and you can sort of query it back and forth. I think those are super-interesting, because that starts to reverse Brandolini is law. Instead of generating bulls\*\*t, you're taking bulls\*\*it in, getting into some kind of order. And that's very exciting.

**Adam Stacoviak:** Yeah. 17 steps back, it makes me think about when I talk to my watch, and I say "Text my wife", and I think about like who is using this to their betterment? And I'm thinking like, we're only talking about adults, for the most part. My kid, my son, Eli - he talks to Siri as if like she knows everything, right? But here's me using my watch to say "Text my wife." I say it, it puts it into the phone... And the last thing it does for me, which I think is super-interesting for the future, as like this AI assistant, is "Send it" is the final prompt back to me as the human; should I send this? And if I say no, Siri doesn't send it. But if I say "Send it", guess what she does? She sends it. But I love this idea of the future, like maybe some sort of smarter AI assistant like that. I mean, to me, that's a dream. I'd love that.

**Shawn Wang:** \[42:21\] Yeah, I was watching this clip of the first Iron Man, when Robert Downey Jr. is kind of working with his bot to work on his first suit... And he's just talking to the bot, like "Here's what I want you to do." Sometimes it gets it wrong and he slaps it on the ahead... But more often than not, he gets it right. And this is why I've been -- you know, Wes Boss recently tweeted -- this is actually really scary. "Should we be afraid as engineers, like this is going to come for our jobs?" And I'm like, "No. All of us just got a personal junior developer." That should excite you.

**Jerod Santo:** Yeah. And it seems like it's particularly good at software development answers. You'd think it's because there's lots of available text... I mean, think about like things that it's good at; it seems like it knows a lot about programming.

**Shawn Wang:** I have a list. Do you want a list?

**Jerod Santo:** Yeah.

**Shawn Wang:** So writing tutorials - it's very good. Literally, tables of contents, section by section, explaining "First you should npm install. Then you should do X. Then you should do Y." Debugging code - just paste in your error, and paste in the source code, and it tells you what's wrong with it. Dynamic programming, it does really well. Translating DSLs. I think there'll be a thousand DSLs blooming, because the barrier to adoption of a DSL has just disappeared. \[laughs\] So why would you not write a DSL? No one needs to learn your DSL.

**Adam Stacoviak:** What is this, Copilot you're using, or ChatGPT, that you're--

**Shawn Wang:** ChatGPT-3. I have a bunch of examples here I can drop in the show notes. AWS IAM policies. "Hey, I want to do X and Y in AWS." Guess what? There's tons of documentation. ChatGPT knows AWS IAM policies. Code that combines multiple cloud services. This one comes from Corey Quinn. 90% of our jobs is hooking up one service to another service. You could just tell it what to do, and it just does it, right? There a guy who was like, "I fed my college computer network's homework to it, and they gave the right result", which is pretty interesting.

Refactoring code from Elixir to PHP is another one that has been has been done... And obviously, Advent of Code, which - we're recording this in December now. The person who won -- so Advent of Code for the first 100 people is a race; whoever submits the correct answer first, wins it. And the number one place in the first Advent of Code this year was a ChatGPT guy. So it broke homework. Like, this thing has broken homework and take-home interviews, basically. \[laughs\]

**Jerod Santo:** Completely. It's so nice though; like, I've only used it a little bit while coding, but it's two for two, of just like drilling my exact questions. And just stuff like "How do you match any character that is not an \[unintelligible 00:44:43.28\] regular expression?"

**Shawn Wang:** Oh, yeah. Explaining regexes.

**Jerod Santo:** Yeah. That was my question. Like, I know exactly what I want, but I can't remember which is the character, and so I just asked it, and it gave me the exact correct answer, and an example, and explained it in more detail, if I wanted to go ahead and read it. And it warned me, "Hey, this is not the best way to test against email addresses... But here it is." So I was like, "Alright..." This is a good thing for developers, for sure.

**Shawn Wang:** Yeah. But you can't trust it -- so you have a responsibility as well. You can't write bad code, have something bad happen, and go, "Oh, it wasn't my fault. It was ChatGPT."

**Jerod Santo:** Well, you can't paste Stack Overflow answers into your code either.

**Shawn Wang:** You have the responsibility. Exactly.

**Jerod Santo:** Yeah. I mean, you can, but you're gonna get fired, right? Like, if the buck stops at you, not at the Stack Overflow answer person, you can't go find them and be like, "Why were you wrong?" Right? It stops at you.

**Shawn Wang:** Yeah. So I think the way I phrased it was -- do you know about this trade offer meme that is going around? So it's "Trade offer - you receive better debugging, code explanation, install instructions, better documentation, elimination of your breaking of flow from copy and pasting in Stack Overflow - you receive all these benefits, in exchange for more code review." There is a cost, which is code review. You have to review the code that your junior programmer just gave you. But hey, that's better and easier than writing code yourself.

**Jerod Santo:** \[46:04\] Yeah, because you've got a free junior programmer working for you now. \[laughter\]

**Shawn Wang:** There's a guy that says, "I haven't done a single Google search or consulted any external documentation for the past few days, and I was able to progress faster than I ever had when delivering a new thing." I mean, it's just... It's amazing, and Google should be worried.

**Jerod Santo:** Yeah, that's what I was gonna say - is this an immediate threat to Google? Now, I did see a commenter on Hacker News - Swyx, I'm not sure if you saw this one - from inside of Google, talking about the cost of integration?

**Shawn Wang:** Yes. Yeah, I've read basically every thread... \[laughter\] Which is a full-time job, but... This is so important. Like, I don't do this for most things, right? Like, I think this is big enough that I had to drop everything and go read up on it... And not be an overnight expert, but at least try to be informed... And that's all I'm doing here, really. But yeah, do you want to read it up?

**Jerod Santo:** Yeah. So in summary, they were responding... This is on a thread about ChatGPT, and they say -- this is a Googler, and they say "It's one thing to put up a demo that interested nerds can play with, but it's quite another thing to try to integrate it deeply in a system that serves billions of requests a day, when you take into account serving costs, added latency, and the fact that average revenue on something like a Google search is close to infinitesimal (which is the word I can't say out loud) already. I think I remember the presenter saying something like they'd want to reduce the cost by at least 10 times before it could be feasible to integrate models like this in products like Google search. A 10x or even 100x improvement is obviously an attainable target in the next few years, so I think technology like this is coming in the next few years."

So that's one insider's take on where Google stands. Obviously, Google has tons of resources dedicated to these areas of expertise, right? It's not like Google's asleep at the wheel, and is going to completely have their lunch eaten by OpenAI. But right now, there's a lot of people who are training new habits, right? They're like, "I'm not gonna use Google anymore. I'm gonna start using OpenAI." I think it's something on the order of one million users in their first few days have signed up... How long can Google potentially bleed people before it becomes an actual problem? I don't know. I don't know the answer to these things.

**Shawn Wang:** So there's one way in which you can evaluate for yourself right now, and I think that's the most helpful, constructive piece of advice that we can give on this podcast, which is -- we're covering something that is moving very live, very fast. Everything that we say could be invalidated tomorrow by something new. But you could just run ChatGPT-3 alongside of all your Google searches. That's a very, very simple way to evaluate if this would replace Google for you; just run it twice, every single time. And so there's a Google extension - and I'll link it - \[unintelligible 00:48:47.04\] ChatGPT Google extension; I'll put it in the show notes. And yeah, I have it running; it's not that great. \[laughs\] Surprisingly. So ChatGPT is optimized for answering questions. Sometimes I don't put questions in there. I just put the thing I'm looking for, and Google's pretty good at that, it turns out... \[laughs\]

**Jerod Santo:** Right. See, because you are an expert-level Google prompt engineer, right? Like, you know how to talk to Google.

**Shawn Wang:** We have optimized to Google prompting, yes.

**Jerod Santo:** Exactly.

**Shawn Wang:** If I need to search within a certain date range, I know how to do that in Google. I can't do that in ChatGPT-3. If I need to look for PDFs, I know how to do that. If I want to look for Reddit, and constrain the site to Reddit, I know how to do that. ChatGPT-3 has no concept of attribution, no concept of date ranges, and stuff like that.

**Jerod Santo:** Right.

**Shawn Wang:** But yeah, it is just like better at some things, and worse at other things, and that is the nature of all new technology. It just has to be better at one thing, that you cannot get anywhere else, and it has a permanent hold in your mind. Whenever you need that thing done, you will turn to ChatGPT-3, or any other new technology.

\[49:53\] I love this sort of meta philosophy about technology adoption, because all new toys just generally are worse than the things that they replace, except in one area, and that's the area needs to matter. And if it does matter, it will win, because they will fix the bugs.

**Jerod Santo:** Yeah, oftentimes with disruption, that area is cost; like acquisition cost. Sometimes it's convenience, and maybe I guess sometimes it's accuracy. There's different metrics, but it's got to be the one that matters. If it's marginally better at things that don't matter, you're not going to disrupt. But if it's a lot better at one thing that matters a lot, even if everything else sucks, you'll use that thing.

**Shawn Wang:** Yeah, exactly. So it's interesting, because -- you know, Google has a few things going for it. By the way, it has one of the largest training repositories of text that no one else has, which is Gmail. But the most impressive thing it's being able to ship with Gmail is the little autocomplete, like, "Looks good", Okay", the little buttons that you see in the smart replies.

**Jerod Santo:** Do you guys ever use those? Do you ever click on those?

**Shawn Wang:** I use that. I use that. Save some typing.

**Adam Stacoviak:** Yeah, well, I used to actually use Gmail directly to compose my emails, or respond. I would tap to complete all the time, if the response was like, "Yeah, I was gonna say that."

**Shawn Wang:** There's a billion little ways that AI is built into Google right now, that we just take for granted, because we don't feel it, because there's no prompts. \[laughter\]

**Jerod Santo:** We need a prompt!

**Adam Stacoviak:** Even if OpenAI did eat Google's lunch, Google would just acquire it, or something...

**Shawn Wang:** You would think so...

**Jerod Santo:** Maybe...

**Shawn Wang:** But I would say that probably OpenAI is not for sale. Like, they have this world-conquering ambition that would just not let them settle for anything less than global domination... Which is a little bit scary, right?

**Jerod Santo:** Yeah, I think they're probably going the distance, is their plan, it seems like...

**Shawn Wang:** Well, if anything, Microsoft should have bought them when they had the chance, because that was Bing's opportunity, and I don't think that ever came to pass... Probably because Sam Altman was smart enough not to do that deal. But yeah, so let's take that line of thinking to its logical conclusion. What would you feel if Google started autocompleting your entire email for you, and not just like individual, like two or three words? You would feel different, you would feel creeped out. So Google doesn't have the permission to innovate.

**Adam Stacoviak:** I wouldn't freak out if I opted in, though. If I was like, "This technology exists, and it's helpful. I'll use that." Now, if it just suddenly started doing it, yeah, creeped out. But if I'm like, "Yeah, this is kind of cool. I opt into this enhanced AI, or this enhanced autocompletion", or whatever, simplifies the usage of it, or whatever.

**Shawn Wang:** Yeah, so there's actually some people working on the email client that does that for you. So Evan Conrad is working on EveryPrompt email, which is essentially you type a bunch of things that you want to say, and you sort of batch answer all your emails with custom generated responses from GPT-3. It's a really smart application of this tech to email that I've seen. But I just think, like, you would opt in; the vast majority of people never opt into anything.

**Jerod Santo:** Yeah, most people don't opt in.

**Shawn Wang:** Like, that's just not the default experience. So I'm just saying, one reason that Google doesn't do it is "Yeah, we're just too big." Right? That is essentially the response that you read out from that engineer; like, "This doesn't work at Google scale. We can't afford it. It would be too slow", whatever. That's kind of a cop out, I feel like... Because Google should be capable. These are the best engineers in the world, they should they should be able to do it.

**Jerod Santo:** Well, he does say he thinks it's coming in the next few years. So he's not saying it's impossible, he's saying they're not there yet. And I will say, I'm giving ChatGPT the benefit of my wait time that I do not afford to Google. I do not wait for Google to respond. I will give ChatGPT three to five seconds, because I know it's like a new thing that everyone's hitting hard... But like, if they just plugged that in, it would be too slow. I wouldn't wait three to five seconds for a Google search.

**Shawn Wang:** Yeah. By the way, that's a fascinating cloud story that you guys have got to have on - find the engineer at OpenAI that scaled ChatGPT-3 in one week from zero to one million users?

**Jerod Santo:** Yeah, totally.

**Adam Stacoviak:** \[53:58\] Well, if you're listening, or you know the person, this is an open invite; we'd love to have that conversation.

**Shawn Wang:** Yeah. I've seen the profile of the guy that claimed to \[unintelligible 00:54:04.00\] so that he would know... But I don't know who would be responsible for that. That is one of the most interesting cloud stories probably of the year. And Azure should be all over this. Azure should be going like, "Look, they handled it no problem. This is most successful consumer product of all time come at us", right?

**Jerod Santo:** That's true. They should.

**Shawn Wang:** They're the number three cloud right now. This is like their one thing, this is their time to shine. They've got to do it.

**Jerod Santo:** And does anybody even know that Azure is behind OpenAI? I'm sure you can find out, but like, is that well known? I didn't know that.

**Shawn Wang:** Oh, it's very public. Microsoft invested a billion dollars in OpenAI.

**Jerod Santo:** Okay. Did you know that, Adam?

**Adam Stacoviak:** No.

**Jerod Santo:** So I'm trying to gauge the public knowledge...

**Shawn Wang:** What we didn't know was that it was at a valuation of $20 billion, which... So OpenAI went from like this kind of weird research lab type thing into one of the most highly valued startups in the world. \[laughs\]

**Jerod Santo:** Do you think Microsoft got their money's worth?

**Shawn Wang:** I think so... It's awash right now, because --

**Jerod Santo:** Too early.

**Shawn Wang:** ...they probably cut them a lot of favorable deals for training, and stuff... So it's more about like being associated with one of the top AI names. Like, this is the play that Microsoft has been doing for a long time, so it's finally paying off... So I'm actually pretty happy for that. But then they have to convert into like getting people who are not \[unintelligible 00:55:21.00\] onto this thing.

**Break:** \[55:26\]

**Adam Stacoviak:** What's the long-term play here though? I mean, if Microsoft invested that kind of money, and we're using ChatGPT right now, we're willing to give it extra seconds, potentially even a minute if the answer is that important to you, that you wouldn't afford to Google... Like, what's the play for them? Will they turn this into a product? How do you make billions from this? Do you eventually just get absorbed by the FAANGs of the world, and next thing you know now this incredible future asset to humanity is now owned by essentially folks we try to like host our own services for? Like, we're hosting Nextcloud locally, so we can get off the Google Drives and whatnot... And all this sort of anti-whatever. I mean, what's the endgame here?

**Shawn Wang:** Am I supposed to answer that? \[laughs\]

**Adam Stacoviak:** Do you have an answer? I mean, that's what I think about...

**Jerod Santo:** Let's ask ChatGPT what the endgame is... No, I mean, short-term it doesn't seem like OpenAI becomes the API layer for every AI startup that's gonna start in the next 5 or 10 years, right? Like, aren't they just charging their fees to everybody who wants to integrate AI into their products, pretty much? That's not an end game, but that's a short-term business model, right?

**Shawn Wang:** That is a short-term business model, yeah. I bet they have much more up their sleeves... I don't actually know. But they did just hire their first developer advocate, which is interesting, because I think you'll start to hear a lot more from them.

\[58:12\] Well, there's two things I will offer for you. One, it's a very common view or perception that AI is a centralizing force, right? Which is, Adam, what you're talking about, which is, "Does this just mean that the big always get bigger?" Because the big have the scale and size and data advantage. And one of the more interesting blog posts - sorry, I can't remember who I read this from - was that actually one of the lessons from this year is that it's not necessarily true, because AI might be a more decentralized force, because it's more amenable to open source... And crypto, instead of being decentralized, turned out to be more centralized than people thought.

So the two directions of centralized versus decentralized - the common perception is that AI is very centralized, and crypto very decentralized. The reality was that it's actually the opposite, which is fascinating to me as a thesis. Like, is that the end game, that AI eventually gets more decentralized, because people want this so badly that there are enough researchers who go to NeurIPS to present their research papers and tweet out all this stuff, that diffuses these techniques all over the place? And we're seeing that happen, helped in large probably by Stability AI. The proof that Stability as an independent, outsider company, like not a ton of connections in the AI field, did this humongous achievement I think is just a remarkable encouragement that anyone could do it... And that's a really encouraging thing for those people who are not FAANG and trying to make some extra headroom in this world. So that's one way to think about the future.

The second way to think about who monetizes and who makes the billion dollars on this... There's a very influential post that I was introduced to recently from Union Square Ventures, called "The myth of the infrastructure phase", which is directly tackling this concept that everyone says "When you have a gold rush, sell picks and shovels", right? And it's a very common thing, and presumably AI being the gold rush right now, you should sell picks and shovels, which is you should build AI infrastructure companies. But really, there are tons of AI infrastructure companies right now, they're a dime a dozen; really, they're all looking for use cases, and basically, the argument, the myth of the infrastructure phase is that technology swings back and forth between app constraint and infra constraint. And right now, we're not infrastructure-constrained, we're app-constrained. And really, it's the builders of AI-enabled products like TikTok that know what to do with the AI infrastructure that can win.

So I'll introduce those concepts to you... I don't know what specifically that means. I'm looking out for opportunities like that myself. But I think it's apps; I think it may not be infra, because it's going to trend very, very hard towards commodity infrastructure provisioning, and I don't really care where I get my A100s from... A100 being the predominant NVIDIA chip that is being used to train all these models... Which, by the way, costs $200,000 per chip, which is insane. Imagine a GPU costing that much.

**Adam Stacoviak:** Yeah. I also think about something -- kind of one step removed, to some degree, but it's the future innovation that changes the direction of humanity tied to capitalism, right? Because the innovation that happens in this space in particular, which we see is very beneficial... Abling those who are not abled is a very beneficial thing, obviously. But if it's tied to the fact that it's tied to a company that can profit, it's -- I'm not anti-capitalistic, by any means, and I'm also not like only capitalistic, "It has to make money or else it dies", but that's kind of the world we're in. As a startup, all roads lead to either acquisition, IPO, or you just have an amazing customer base that you just are profitable on your own. There's some sort of exit. Like, there's investment, there's exit, and I just wonder how this advancement, this innovation that totally is the future of humanity - how it lives in a capitalistic world where it may or may not die... And then eventually, this thing has to profit, and so therefore, is it value, or is it the FAANGs? I guess I don't trust the FAANGs so much. Like, if they get their hands and they have the centralization of this thing, and they are the controllers, like Google is of search...

\[01:02:13.13\] Now, I love Google in many respects, but in a lot of cases, I don't want to give it all my data, even though it knows everything about me. I mean, it knows my YouTube history, so it knows probably the most I ever wanted to know about me just because of that. Like, it knows my interests just because of that. But like, I'm weary about that, right? Like, I don't know; call me a skeptic, call me cynical...

**Shawn Wang:** Well, I will paraphrase Churchill when they say, "Capitalism is the worst form of economic organization, except for all the others that we've tried."

**Jerod Santo:** Right... \[laughs\]

**Adam Stacoviak:** I believe that's what makes things win, it's just, you know, how... And do we end up getting a version that's sellable, versus a version that's usable? And maybe that's the same, but maybe it's not.

**Jerod Santo:** Well, if this new thesis is correct, it's not actually a centralizing force. Perhaps the open source side of things will step up to the plate, it's so valuable that other people can do it in the small... Maybe we'll learn new techniques where you don't have to have all the world's data to get good results. I mean, we don't know exactly how this thing is going to play out, but it's possible that we will see even large organizations, like OpenAI is going to become, has an open source Whisper thing, which we can all run on our machines... I mean, Swyx, they have a devious reason for it to open source that sucker... A capitalistic reason for open sourcing that sucker...

**Shawn Wang:** Yeah, it's not devious.

**Jerod Santo:** Well, that's a bit underhanded. If it's pitched as altruistic, and then it's like "Well, we're doing it to get this stuff transcribed."

**Shawn Wang:** They never said altruistic; they never said the intention, they just released it, that's all. \[laughs\]

**Jerod Santo:** Well, it's just the de facto open source story is altruism, isn't it? Like, that's just what gets assumed.

**Shawn Wang:** Yeah, that's true.

**Jerod Santo:** It's like, why would you do this? It's like, "Well, we're not going to tell you, so you assume it's altruistic." \[laughs\] Anyways, regardless of their intentions, my point is that we do have open source things that are happening, and perhaps they will continue to thrive, and we'll have alternatives, as we have had historically.

**Shawn Wang:** Well, okay, we have to figure out licensing. This is a huge point of discussion. Because the code - like, MIT-licensing the code doesn't matter. It's the data that needs licensing, and the model weights that needs licensing, and we don't have a legal framework for that. So OpenRail is the current form, but even there, there's been like five different variations of OpenRail right now, and there's a lot of back and forth about what responsible AI open sourcing is, and it's super-interesting to follow along. If you're interested, look out for Yannic Kilcher, who has been, I think, one of the best sources of getting up to speed on AI on YouTube that I've found. He's kind of like a weird personality, but he made a real impact, because he made his own license, and Stability adopted it for Stability v2... Which is huge; like, a random YouTuber who's just like making up his own license, and Stability going like, "Yeah, that looks good." \[laughs\] It's fantastic.

And then, of course, all the open source originalists, the fundamentalists going like "This isn't open source. It's not OSI-approved." I'm like, "OSI is relevant now, because the value of the work just moved from the code layer to the weights and data layer."

**Jerod Santo:** Right. While you're giving resources, I have one as well. Our friend Luis Villa from Tidelift, tech lawyer Luis Villa, has a newsletter called Open-ish Machine Learning News. Of course, he's very much on the licensing side, being a lawyer... And he's following all of the things, and summarizing, and writing his thoughts. I've been following his newsletter for six weeks now, and I've been really enjoying it. So if you want to follow more things, check out his as well.

Swyx, let's talk about your Substack, man. Let's get some subs to your Substack as we tail out... \[unintelligible 01:05:52.00\] I'm prompting you for the promo. L-Space Diaries.

**Shawn Wang:** \[01:06:00.13\] Yeah, so it's lspace.swyx.io. The reason it doesn't have a domain - I could have got swyx.ai, or something - is because I wasn't sure when I started this how much of a fad it was. And I was like, "Oh, I don't know if I should put this on my regular blog, because this could come and go..." Like I'm not an AI expert in any way... But this then just became so dominant in my thinking that I had to have an outlet, so I started this Substack... And yeah, lspace.swyx.io, it's got all the perspectives that I've been collecting. I just got a submission from my first guest post, so... We'll see; it might become more of a thing. But right now, it's just my thinking log, and I have a GitHub repo with all my sources. So I tend to keep the blog and the sources separate, because the sources evolve much faster than the blog. So you're welcome to pick and choose from whatever you wish, but thanks for having me on and letting me plug the newsletter.

**Adam Stacoviak:** We appreciate your thinking, and we appreciate you in the public doing this, all the time, all the things that you do...

**Shawn Wang:** It's actually kind of scary... \[laughter\]

**Adam Stacoviak:** I appreciate your courage, then.

**Jerod Santo:** You're the expert now, Swyx. We turn to you for the expert opinions.

**Adam Stacoviak:** It's true, yeah.

**Shawn Wang:** But no, I do try to model it, because this is the whole learn in public philosophy, which is you don't need to be an expert, you just need to put in the work. You need to think really hard, you need to do the research, but then put it out there and let people correct to you, and that's how you improve. And that's the only thing you can ask for.

**Adam Stacoviak:** Well, your career path and trajectory is proof that it can be successful if done with, I think, a humble mindset, which is what I think you approach it with... Putting your thinking out there and not feeling like you have to be correct or right, or the expert, to me is the epitome of humbleness. So I think if you take it with that approach, you'll get those kind of results or similar results. Every time I think about somebody doing it in public, you're a good example of how to do it.

**Shawn Wang:** Well, thank you so much. But you guys have been doing this way longer than I have... How long has the Changelog been running?

**Adam Stacoviak:** More than 13 years now. Was it just 13 years, Jerod? November 19th we were born, 2009. So do the math.

**Jerod Santo:** 13+ years...

**Shawn Wang:** You guys, you're the originators of this space. I'm just a mere copy.

**Adam Stacoviak:** Aren't we all though, eventually, in this world? Like, didn't we just talk about that?

**Jerod Santo:** Everything's a remix. That's what I was saying earlier. It's all a remix.

**Adam Stacoviak:** Yes...

**Jerod Santo:** And even that is a remix of a guy who made a series of YouTube videos called "Everything's a remix", and I'm just spitting his game.

**Shawn Wang:** I was gonna say, I was wondering if you watched that video.

**Jerod Santo:** Oh yeah, absolutely. That's what -- I think about it all the time when I think about how we take stuff in and output new things... I'm like, it's just remixes all the way down.

**Adam Stacoviak:** Nothing new under the sun, Jerod. Nothing new under the sun. Well, it's certainly reassuring to think about that too, that we're not snowflakes; we're just remixes.

**Jerod Santo:** Like, literally, half your mom and half your dad, right? We're all literally remixes.

**Adam Stacoviak:** It's true, literally. Yeah. Well, that's it...

**Jerod Santo:** That's it.

**Adam Stacoviak:** Swyx, thanks for coming on, man.

**Jerod Santo:** Yeah, man.

**Adam Stacoviak:** I appreciate your thinking. Anything else? I mean, we're gonna have to ask you, I guess... I'm listening to the show as we're doing it, and I'm thinking like, gosh, there's so many links to link out in the show notes. My only request from you, Swyx, as a guest, is also to be our show notes maker, or helper, because you've just dropped so many links that I'm not sure I'll be able to pick up or will pick up behind the scenes... So please, as soon as we release this episode, commit back, help us with missing links as necessary.

**Shawn Wang:** Oh, yeah...

**Adam Stacoviak:** Please. Because I want these notes to be super-rich. Now, obviously we'll point back to your repo, and L-Space Diaries and whatnot... But a summary in the notes would be great. I think we'll catch a lot of them, but I'm just asking you to pick up my gaps, that's all.

**Shawn Wang:** \[01:09:45.05\] Of course, of course. It'd be my pleasure. Yeah, by the way, I love that you put so much effort in the show notes. That's another thing that podcasters don't do. But yeah, look, I think for people who are maybe feeling a bit of FOMO, I think AI researchers are also feeling the FOMO. This is progressing at enormous paces, and I think a lot of people that I talked to are like, "I don't have time to keep up on this... But also, at the same time, this could change my entire world. What should I be feeling?" And I always go -- like, people always underestimate what they can do in 10 years, but then people overestimate the amount of impact that these tidal waves are going on on a day-to-day basis.

So basically, keep on top of the high-level trends, like listen to podcasts like the Changelog and get to know that stuff... But you don't have to worry about it reaching you right away; you have some time to keep up to speed on it. So I think that's my general message - don't worry; technology always takes longer than you expect to diffuse about it. The fact that you listen to the very end of a very long and rambly podcast means that you're on the cutting edge, because there's probably 90% of the world population that has just never heard of this, and doesn't care. They're still watching the World Cup, or something. I just like literally could not care less about the World Cup. For them, that is their entire world.

**Jerod Santo:** Wait, the World Cup's going on? \[laughter\]

**Adam Stacoviak:** Ah, man... So I tell people that all the time, like business and tech is my sport. That's my response to folks who say "Did you watch the game?" "No. What game?" And I say, "Well, ask me who did what, or who got acquired there, or how much for, or what the next big trend is in technology and I'll know it, for the most part; or at least be aware. That's my sport." So that's always my response. Like, the world we live in is my sport.

**Shawn Wang:** We're part of this community of chronic early adopters, which means we're probably always too early on a lot of things, and that's fine. Which means by listening to the -- you're already early; like, this is still early days, and you can catch up on it later, or you can get up get up to speed on it now; it doesn't actually matter. But still, obviously, have an opinion on where things will go in 10 years.

**Adam Stacoviak:** Honestly, I mean, just from the conversation, the thing that stands out to me most is resilience and a creative mind, in this future. Like, if you have a creative mind, and not just a skill set - maybe that's something you develop - and then resilience; the ability just to keep pushing beyond, and persevere. I think those are two skills that anybody can have, but specifically in this area, that's what comes to mind from our conversation today... Because you don't have to have the skill, you just have to have the creativity and the ability to wield these future techs to do all the magic.

Swyx, thank you so much. We appreciate you. We'll link up everything we can. Swyx will get our gaps on the links... Hey, by the way, check the show notes if you're listening to this; there's probably going to be tons in there. I say probably because we haven't written them yet. My hope is that they will be complete. But we also open source our show notes. So if there's something missing, if your name isn't Shawn Swyx Wang, you're just a listener, you can contribute too, and we actually love that so much. So head to the show notes if it's not there and it needs to be linked up, fork it on GitHub, contribute it back; it's an easy win for you in open source. But Shawn, thank you so much. We appreciate you.

**Shawn Wang:** Thanks for having me.
