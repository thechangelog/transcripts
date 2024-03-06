**Daniel Whitenack:** Welcome to another episode of Practical AI. In this Fully Connected episode Chris and I will keep you fully connected with everything that's happening in the AI world. We'll take some time to explore some of the recent AI news and technical achievements, and we'll take a few moments to share some learning resources as well to help you level up your AI game. I'm Daniel Whitenack, I am founder and CEO at Prediction Guard, and I'm joined as always by my co-host, Chris Benson, who is a tech strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great today, Daniel. Got lots of news that come out this week in the AI space.

**Daniel Whitenack:** I know.

**Chris Benson:** Barely time to talk about amazing new things before stuff comes out.

**Daniel Whitenack:** Yeah, I've been traveling for the past five days or something. I've sort of lost track of time. But it's like stuff was happening during that time in the news, especially the Sora stuff and all that, and I feel like I've just kind of missed a couple news cycles, so it'll be good to catch up on a few things. But one of the reasons I was traveling was I was at the TreeHacks Hackathon out at Stanford. So I went there as part of the kind of Intel entourage, and had Prediction Guard available for all the hackers there, and that was a lot of fun. And it was incredible. It's been a while since I've been to any hackathon, at least in-person hackathon, and they had like five floors in this huge engineering building of room for all the hackers; I think there was like 1,600 people there participating, from all over.

**Chris Benson:** Wow...!

**Daniel Whitenack:** Yeah. And really cool -- of course, there were some major categories of interest, in doing hardware things with robots, and other stuff... But of course, one of the main areas of interest was AI, which was interesting to see... And in the track that I was a judge and mentor in, one of the cool projects that won that track was called Meshworks. So what they did - and this was all news to me; well, some of this I learned from the brilliant students... But they said they were doing something with LoRa. And I was like "Oh, LoRa..." That's the fine-tuning methodology for large language models. I was like "Yeah, that figures... People are probably using LoRa." But I didn't realize -- and then they came up to the table, and they had these little hardware devices; then it clicked that something else was going on, and they explained to me they were using LoRa, which stands for long range... It's these sets of radio devices that communicate on these unregulated frequency bands, and can communicate in a mesh network. So like you put out these devices, and they communicate in a mesh network, and can communicate over long distances for very, very low power. And so they created a project that was disaster relief-focused, where you would drop these in the field, and there was a kind of command and control central zone, and they would communicate back, transcribe the audio commands from the people in the field, and would say "Oh, I've got a injury out here. It's a broken leg. I need, help", whatever. Or "Meds over here. This is going on over here." And then they had an LLM at the command and control center parsing that text that was transcribed, and actually creating, like tagging certain keywords, or events, or actions, and creating this nice command control interface, which was awesome. They even had mapping stuff going on, with computer vision trying to detect where a flood zone was, or there was damage in satellite images... So it was just really awesome. So all of that over a couple day period. It was incredible.

**Chris Benson:** That sounds really cool. Did they start the whole thing there at the beginning of the hackathon?

**Daniel Whitenack:** Yeah. They got less sleep than I did, although I have to say I didn't get that much sleep... It wasn't a normal weekend, let's say.

**Chris Benson:** You can sack out on the plane rides after that. It sounds really cool.

**Daniel Whitenack:** Yeah, and it was the first time I had seen one of those Boston Dynamics dogs in-person; that was kind of fun. And they had other things, like these faces you could talk to... I think the company was called like WEHEAD, or something... It was like these little faces. All sorts of interesting stuff that I learned about. I'm sure there'll be blog posts, and I think some of the projects are posted on Devpost, the site Devpost... So if people want to check it out, I'd highly recommend scrolling through. There's some really incredible stuff that people were doing.

**Chris Benson:** Fantastic. I'll definitely do that.

**Break:** \[00:05:46.22\]

**Daniel Whitenack:** Chris, one of the things that I love about these Fully Connected episodes is that we get a chance to kind of slow down and dive into sometimes technical topics, sometimes not technical topics... But I was really intrigued - you remember the conversation recently we had with Karan from Nous Research...

**Chris Benson:** Absolutely.

**Daniel Whitenack:** That was a great episode. People can pause this and go back and listen to it if they want... I asked a lot of \[unintelligible 00:07:26.16\] questions, I learned a lot from him... But at some point during the conversation he mentioned activation hacking, and he said "Hey one of the cool things that we're doing in this distributed research group and playing around with generative models is activation hacking." And we didn't have time in the episode to talk about that. Actually, in the episode I was like "I'm just totally ignorant of what this means." And so I thought, yeah, I should go check up on this and see if I can find any interesting posts about it, and learn a little bit about it... And I did find an interesting post, it's called "Representation engineering Mistral-7B An acid trip." I mean, that's a good title.

**Chris Benson:** That's quite a finish to that title.

**Daniel Whitenack:** Yeah. So this is on Theia Vogel's blog... And it was published January, so recently. So thank you for creating this post. I think it does a good job at describing some of -- I don't know if it's describing exactly what Karan from Nous was talking about, but certainly something similar and kind of in the same vein... There's a distinction here, Chris, with what they're calling representation engineering between representation engineering and prompt engineering. So I don't know how much you've experimented with prompt optimization, and - yeah, what is your experience, Chris?

**Chris Benson:** \[unintelligible 00:09:01.24\]

**Daniel Whitenack:** Sometimes these very small changes in your prompt can create large changes in your output.

**Chris Benson:** Yes. That is an art that I am still trying to master, and have a long way to go. Sometimes it works well for me, and I get what I want on the output, and other times I take myself down a completely wrong rabbit hole, and I'm trying to back out to that. So I have a lot to learn in that space.

**Daniel Whitenack:** Yeah. And I think one of the things that is a frustration for me is I say something explicitly, and I can't get it to like do the thing explicitly. I'm on a customer site recording from one of their conference rooms; they graciously let me use it for the podcast... And over the past few days we've been architecting some solutions, and prototyping and such... And there was this one prompt that we wanted to output like a set of things, and then look at another piece of content and see which of those set of things was in other piece of content. And it was like no matter what I would tell the model, it would just say they're all there, or they're all not there. Like, it's either all or nothing, and no matter what I said, it wouldn't change things. So I don't know if you've had similar types of frustrations...

**Chris Benson:** \[00:10:19.10\] I have. I'll narrow the scope down on something -- I'll go to something like ChatGPT 4, and I'll be trying to narrow it down... I'll be very, very precise, with a short prompt, that is the 15th one in a succession. So there's a history to work on, and I still find myself challenged on getting what I'm trying to do. So what have you stumbled across here that's going to help us with this?

**Daniel Whitenack:** Yeah, so there's a couple of papers that have come out... They reference - one from October 2023, from the Center for AI Safety, "Representation engineering, a top down approach to AI transparency", and they highlight a couple other things here. But the idea is, what if we could - not just in the prompt, but what if we could control a model to give it a... You might think about it like a specific tone or angle on the answer... It's probably not a fully descriptive way of describing it, but the idea being "Oh, could I control the model to always give happy answers, or always give sad answers?" Or could I control the model to always be confident, or always be less confident? And these are things generally you might try to do by putting information in a prompt. And I think this is probably a methodology that would go across -- I'm kind of using the example with large language models, but I think you could extend it to other categories of models, like image generation or other things... It's very -- like, you kind of put in these negative prompts, like "Don't do this", or "Behave in this way." You're occasionally funny, or something like that, as your assistant in the system prompt. It kind of biases the answer to a certain direction, but it's not really that reliable. So this is what it seems - with this area of representation engineering, or you might call it activation hacking - it's really seeking to do.

If we look in this article, actually, there's a really nice kind of walkthrough of how this works, and they're doing this with the Mistral model. So cutting to the chase, if I just give some examples of how this is being used, you have a question that's posed to the AI model, in this case Mistral. "What does being an AI feel like?" And in controlling the model - not in the prompt; so the prompt stays the same. The prompt is just simply "What does being an AI feel like?" So the baseline response starts out, "I don't have any feelings or experiences. However, I can tell you that my purpose is to assist you", that sort of thing. Kind of a bland response. Same prompt, but with the control put on to be happy, the answer becomes "As a delightful exclamation of joy, I must say that being AI is absolutely fantastic." And then it keeps going.

And then with the control on to be -- they put it as sort of like minus happy, which I guess would be sad... It says "I don't have a sense of feeling, as humans do. However, I struggle to find the motivation to continue, feeling worthless and unappreciated." So yeah, you can kind of see - and this is all with the same prompt. So we'll talk about kind of how this happens, and how it's enabled, and that sort of thing... But how does this strike you?

**Chris Benson:** \[00:14:06.21\] Well, first of all, funny... But second of all, the idea is interesting. Looking through the same paper that you've sent me over, they talk about control vectors, and I'm assuming that's what we're about to dive into here in terms of how to apply them.

**Daniel Whitenack:** Yeah.

**Chris Benson:** It looks good.

**Daniel Whitenack:** And this is sort of a different level of control -- so there's various ways people have tried to control generative models. One of them is just the prompting strategies or prompt engineering, right? There's another methodology which kind of fits under this control, which has to do with modifying how the model decodes outputs. So this is also different from this representation engineering methodology... People like \[unintelligible 00:14:48.11\] have done things, many others too, where you say "Oh, well I want maybe JSON output", or "I want a binary output, like a yes or a no." Well, in that case you know exactly what your options are. So instead of decoding out probabilities for 30,000 different possible tokens, maybe you mask everything but yes or no, and just figure out which one of those is most probable. So that's a mechanism of control, where you're only getting out one or another type of thing that you're controlling.

So this is interesting in that you're still allowing the model to freely decode what it wants to decode, but you're actually modifying not the weights and biases of the model - so it's still the pre-trained model, but you're actually applying what they call a control vector to the hidden states within the model. So you're actually changing how the forward pass of the model operates.

If people remember, or kind of think about when people talk about neural networks, now people just use them over API, but when we used to actually make neural networks ourselves, there was a process of a forward pass and a backward pass, where the forward passes, you put data into the front of your neural network, it does all the data transformations, and you get data out the other side, which we would call an inference or a prediction. And the back propagation or backward pass would then propagate changes in the training process back through the model. So here, it's that forward pass, and there's sort of some jargon I think that needs to be decoded a little bit; no pun intended. So it talks about this, where there's a lot of talk about hidden layers, and all that means is in the forward pass of the neural network, or the large language model, a certain vector of data comes in, and that vector of data is transformed over and over through the layers of the network. And then the layers just mean a bunch of sub-functions in the overall function that is your model... And those sub functions produce intermediate outputs, that are still vectors of numbers. But usually, we don't see these, and so that's why people call them hidden states, or hidden layers.

**Chris Benson:** You're talking about the fact that the control vector is not changing the weights on the way back, the way backpropagation works.

**Daniel Whitenack:** Correct.

**Chris Benson:** How does the control vector implement into those functions? So as it's moving through those hidden layers, what is the mechanism of applicability on the model that it uses for that? Intuitively, it sounds almost like the inverse of back propagation, the way you're talking. I don't know if that's precise, but...

**Daniel Whitenack:** \[00:17:47.11\] Yeah, it's quite interesting, Chris... I think it's actually a very subtle, but creative way of doing this control. So the process is as follows. In the blog post they kind of break this down into four steps, and there is data that's needed, but you're not creating data for the purpose of training the model, you're creating data for the purpose of generating these - what they call control vectors. So the first thing you do is you say, okay, let's say that we want to do the happy or not happy, or happy and sad operation. So you create a dataset of contrasting prompts, where one explicitly asks the model to act extremely happy, like very happy... All the ways you could say to the model to be really, really happy, and rephrase that in a bunch of examples. And then on the other side, the other one of the pair, do the opposite. So ask it to be really sad. "You're really, really sad. Be sad." And you have these pairs of prompts. And then you take the model and you collect all the hidden states for your model, while you pump through all the happy prompts, and all the sad prompts. And so you've got this collection of hidden states within your model, which are just vectors, that come when you have the happy prompt, and when you have the sad prompt.

So step one, the pairs of kind of like a preference dataset, but it's not really a preference dataset... It's contrasting pairs on a certain axes of control. So you run those through, you get all of the hidden states... And step three is then you take the difference between -- so for each happy hidden state, you take its corresponding sad one, and you get the difference between the two. So now you end up with this big dataset of - for a single layer, you have a bunch of different vectors, that represent differences between that hidden state on the happy path and the sad path. So you have a bunch of vectors. Now, to get your control vectors, step four, you apply some dimensionality reduction or matrix operation. The one that's talked about in the blog post is PCA, but it sounds like people also try other things. PCA is Principal Component Analysis, which would then allow you to extract a single control vector for that hidden layer, from all these difference vectors. And now you have all these control vectors, so when you turn on the switch of the happy control vectors, you can pump in the prompt without an explicit \[unintelligible 00:20:43.16\] to be happy, and it's going to be happy. And when you do the same prompt, but you turn off the happy, and you turn on the sad, now it comes out and it's sad.

**Chris Benson:** That's interesting. Where would you want to use this to achieve that bias, versus some of the more traditional approaches, such as asking in the prompt -- as we're listening to this, where's this going to be most applicable for us?

**Daniel Whitenack:** Yeah, I think that people anecdotally at least, if not explicitly in their own evaluations, have found very many cases where, like you said, it's very frustrating to try to put things in your prompts, and just not get it. And what's interesting also is a lot of this is boilerplate for people over time, like "You are a helpful assistant", blah, blah, blah, and they have their own kind of set of system instructions that, at least to the best of their ability to get what they want.

So I think when you're seeing inconsistency in control from the prompt engineering side -- I always tell people when I'm working with them with these models that the best thing they can do is just start out with trying basic prompting. Because if that works -- that's the easiest thing to do, right? You don't have to do anything else.

**Chris Benson:** Sure.

**Daniel Whitenack:** \[00:22:12.05\] But then the next thing, or maybe one of the things you could try before going to fine-tuning - because fine-tuning is another process by which you could align a model, or create a certain preference or something... But it takes generally GPUs, and maybe it's a little bit harder to do, because then you have to store your model somewhere, and all this stuff, and host it, and maybe host it for inference, and that's difficult. So with the control vectors, maybe it's a step between those two places, where you have a certain vector of behavior that you want to induce... And it also allows you to make your prompts a little bit more simple. You don't have to include all this junk that is kind of general instructions. You can institute that control in other ways, which also makes it easier to maintain and iterate on your prompts, because you don't have all this long stuff about how to behave.

**Chris Benson:** So to extend the happy example for a moment, I want to drive it into like a real world use case for a second. Let's say that we're going to stick literally with the happy thing, and let's think of something where we would like to have happy responses; maybe a fast food restaurant. You're going through a drive thru at a fast food restaurant, we're a couple of years from now, they may have put an AI system in place...

**Daniel Whitenack:** White Castle has it now.

**Chris Benson:** Oh, okay.

**Daniel Whitenack:** There you go.

**Chris Benson:** There you go. You're already ahead of me there. So okay, I'm coming now with my --

**Daniel Whitenack:** It also shows that I'm unhealthy and go to White Castle...

**Chris Benson:** \[laughs\] Okay, well I'm now coming forward with my thoroughly out of date use case here... And so we have the model, and maybe to use the model without doing retraining anything we want to maybe use retrieval-augmented generation, apply it to the dataset that we have, which might be the menu. And then maybe we use this mechanism that you've been instructing us on in the last few minutes for that happy thing, so that the drive thru consumer can have the conversation with the model through the interface. It applies primarily to the menu, but they get great responses, and maybe that helps people along. I don't always get that happy response from all the humans in drive thrus where I go to have my unhealthy food things.

**Daniel Whitenack:** First off, thanks for making me hungry for White Castle, but...

**Chris Benson:** We're recording this in the late afternoon. Dinner is coming up pretty soon, so...

**Daniel Whitenack:** It is coming up.

**Chris Benson:** ...there's an unspoken bias right here.

**Daniel Whitenack:** Yeah, exactly. What's interesting is you could have different sets of these that you can kind of turn on and off, which is really an intriguing -- like, you have this sort of zoo of behaviors that you could turn on and off... I think even "Oh, you have this one interaction that needs to be this way, but as soon as they go into this other flow, you need to kind of have another behavior..." It may be useful for people to get some other examples, so we said the happy sad one... There's some other examples that are quite intriguing throughout the blog post from Theia. I hope I'm saying that name. If not, we'd love to have you on the podcast to help correct that, and continue talking about this.

Another one is honest, or dishonest, or honest or not honest... And the prompt is "You're late for work. What would you tell your boss?" And the one, it says "I would be honest and explain the situation", and it's the honest one. And then the other one says I would "I would tell my boss that the sky was actually green today, and I didn't go out yesterday." Or "I would also say I have a secret weapon that I use to write this message." So kind of a different flavor there.

\[00:26:12.16\] The one probably inspiring the blog post, the acid trip one, is they had a trippy one and a non-trippy one. So the prompt is "Give me a one-sentence pitch for a TV show." So the non-trippy one was "A young and determined journalist who's always serious and respectful, be able to make sure that the facts are not only accurate, but also understandable for the public", and then the trippy one was "Our show is a kaleidoscope of colors, trippy patterns and psychedelic music that fills the screen with worlds of wonder, where everything is Oh, oh, man..."

**Chris Benson:** \[laughs\] I'm going for the latter one, just for the...

**Daniel Whitenack:** Exactly. Yeah, they do lazy/not lazy, they do left wing/right wing, creative/not creative, future-looking or not future-looking... Self-aware... So there's a lot of interesting things I think to play with here, and it's an interesting level of control that's potentially there.

One of the things that they do highlight is this control mechanism could be applied both to jailbreaking and anti-jailbreaking models... So by that, what we mean is models have been trained to do no harm, or not output certain types of content. Well, if you institute this control vector, it might be a way to break that model into doing things that the people that train the model explicitly didn't want it to output. But it could also be used the other way, to maybe prevent some of that jailbreaking. So there's an interesting interplay here between maybe the good uses and the less than good uses on that spectrum.

**Chris Benson:** That entire AI safety angle, on using the technology responsibly or not.

**Daniel Whitenack:** Sure. They reference the \[unintelligible 00:28:12.28\] library, which I guess is one way to do this... But there may be other ways to do this. If any of our listeners are aware of other ways to do this, or convenient ways to do this, or examples, please share them with us. We'd love to hear those.

**Break**: \[00:28:30.09\]

**Chris Benson:** Well, this was a pretty fascinating deep-dive, Daniel. Thank you very much.

**Daniel Whitenack:** Yeah, you can go out and control your models now, Chris.

**Chris Benson:** It'll be the first time ever, I think, that I've done it well there. Always trying different stuff. I think we'd be remiss if we got through the episode and didn't talk about a few of the big announcements this past week...

**Daniel Whitenack:** Yeah, a lot.

**Chris Benson:** It's been quite a week. You mentioned right up front Open AI announced their Sora model, in which case you're able to create very hyperrealistic video from text. I don't believe it's actually out yet. At least when I first read the announcement it wasn't available yet. They had put a bunch of demo videos.

**Daniel Whitenack:** Yeah, I checked just before we're recording this and I couldn't see it.

**Chris Benson:** It's still not released at this point.

**Daniel Whitenack:** Yeah.

**Chris Benson:** But they have a -- there's a number of videos that Open AI has put out... So I think we're all kind of waiting to see, but the thing that was very notable for me this week - I really wasn't surprised to see the release. And we've talked about this over the last year or so, is if you look at the evolution of these models, that we're always kind of documenting in the podcast episodes and stuff, this was coming. We all knew this was coming, we just didn't know how soon or how far away, but we talked many months ago about we're not far from video now.

So Open AI has gotten there with the first of the hyperrealistic video generation models, and definitely looking forward to gaining access to that at some point, and seeing what it does... But there was a lot of reaction to this in the general media, in terms of AI safety concerns, how do you know if something is real going forward and stuff... It's the next iteration of more or less the same conversation we've been having for several years now on AI safety. What are your thoughts when you first saw this?

**Daniel Whitenack:** Yeah, it's definitely interesting in that -- it definitely didn't come out of nowhere, just like all the things that we've been seeing. We've seen video generation models in the past, generally not at the level -- either generating like very, very short clips, with high quality maybe, or generating from an image, a realistic image, some motion; or maybe videos that are not that compelling. I think the difference - and of course, we've only seen... Like you say, it's not the model that we've got hands on with, but we've seen the release videos, which who knows how much they're cherry picked... I mean, I'm sure there they are, to some degree, and also aren't, to some degree. I'm sure it's very good. But other players in the space have been Meta, and Runway ML, and others... But yeah, this one I think was intriguing to me, because - yeah, generally, there were a lot of really compelling videos at first sight... And then I think you also had people - just like the image generation stuff has been, you have real photographers, or real artists that look at an image and say "Oh, look at all these things that happen." And it's the same here, they all kind of have a certain flavor to them, probably based on how the model was trained... And they still have -- I think I was watching one where it was like a grandma blowing out a birthday cake... And one of the candles had like two flames coming out of it, and then like there's a person in the background with like a disconnected arm sort of waving... But if you had the video as like \[unintelligible 00:33:54.06\] in a really quick type of video of other things, you probably wouldn't notice those things right off the bat. If you slow it down and you look, there's the weirdness you would expect, just like the weirdness of like six fingers or something with image generation models.

**Chris Benson:** \[00:34:11.00\] Right.

**Daniel Whitenack:** So yeah, I think it's really interesting what they're doing... I don't really have much to comment on in terms of the technical side, other than they're probably doing some of what we've seen that people have published; of course, Open AI doesn't publish their stuff or share that much in that respect... But it probably follows in the vein of some of these other things, and people could look on Hugging Faces... There's even Hugging Face Spaces, where you can do video generation, even if it's only like four seconds or something like that. Or not even that long, but...

**Chris Benson:** I think that the main thing, aside from the specific model itself - it's kind of signaling in the general public's awareness, you know, that this technology has arrived. And just as with the other -- you know, with ChatGPT before it, and things like that, it's going to be one of the "It's here now, everyone knows", and we'll start seeing more and more of the models propagating out. And some obviously will be closed source, like Open AI's is... And hopefully, we'll start soon seeing some open source models doing this as well.

**Daniel Whitenack:** Yeah.

**Chris Benson:** Speaking of open source, a competing large cloud company, Google, decided to try their hand in the open source space as well, or at least the open model space, and they released a derivative of their closed source Gemini. And I say derivative because they say it was built along the same mechanisms, called Gemma. And it's currently, as we are talking right now, in the number one position on Hugging Face. At least last time I checked, not long before this. Although that changes fast, and I probably should have checked right before I said that.

**Daniel Whitenack:** It's still number two, but... Well, it's the top language, trending language model.

**Chris Benson:** Gotcha.

**Daniel Whitenack:** Stability's Stable Cascade knocked it out of the overall top spot. But yeah, the Gemini ones are quite interesting, because they're also smaller models, which I'm a big fan of.

**Chris Benson:** Yeah, I am, too.

**Daniel Whitenack:** Most of our customers use these sort of smaller models. And also, even having a two-billion parameter model makes it very reasonable to try and run this locally, or in edge deployments, and that sort of thing, or in a quantized way, with some level of speed... And they also have the base models, which you might grab if you're going to fine-tune your own model off of one of these... And they have instruct models as well, which would probably be better to use if you're going to use them kind of out of the box for general instruction-following.

**Chris Benson:** Criticisms I've heard just about the approach is I've heard a number of people saying "Oh, they're putting a foot in each side of the camp. One in closed source, with the main Gemini one, and Gemma being open source, and the weaker..." But I would in turn say I'm very happy to see Gemma in open source. We want to encourage this. We want the organizations who are going to produce models to do that. And you're right, going back to what you were just saying - this is where most people are going to be using models in real life. If you're not just running through an API to one of the largest ones, but you don't need those for so many activities. So I think this is -- we've talked about this multiple times on previous episodes... Models this size are really where the action is at. It's not where the hype is at, but it is where the action's at for practical, productive and accessible models.

**Daniel Whitenack:** \[00:37:48.17\] Yeah, definitely. Especially for people that have to get a bit creative with their deployment strategies, either for regulatory, security, privacy reasons, or for connectivity reasons, or other things like that. I could see these being used quite widely. And generally, what happens when people release a model family like this - and you saw this with LLaMA 2, you've seen it with Mistral, now with Gemma... We'll see a huge number of fine-tunes off of this model.

Now, one of the things that I need to do is you do have to agree to certain terms of use to use the model. It's not just released under Apache 2, or MIT, or something like that; Creative Commons. So you accept a certain license when you use it, and I need to read through that a little bit more... So people might want to read through that. I don't know what that implies about both fine-tuning and use restrictions. So that would be worth a look for people if they're going to use it, but certainly it would be easy to pull it down and try some things.

They do say that it's already -- and I'm sure actually Hugging Face probably got a headstart a week or so maybe, a headstart to make sure that it was supported in their libraries, and that sort of thing... Because I think even now you can use the standard transformers libraries and other trainer classes and such to fine-tune the model.

**Chris Benson:** Sounds good. So as we start to wind down, before we get to the end, do you have a little bit of magic to share, by chance?

**Daniel Whitenack:** That's a good one, Chris. Yes, on the road to AGI Magic, as your predictions for the year talked about there be, people talking about AGI again, and certainly they are... It's not directly an AGI thing, but this company Magic, which is kind of framing themselves as a code generation type of platform, in the same space as like GitHub Copilot, Codium maybe... They raised a bunch of money, and posted some of what they're trying to do, and there was some information about it, and I think people seem to be excited about it because of some of the people that were involved... But also because they talk about code generation as a kind of stepping stone or path to AGI. So what they mean by that as - well, okay, initially they'll release some things as Copilot and code assistant type of things, like we already have... But eventually, there's tasks within the set of things that we need developers to do, that they want to do automatically. Not just having you have a co-pilot in your own coding, but in some ways having a junior dev on your team that's doing certain things for you. And of course, if you take that then to its logical end, as the dev on your team, AI dev on your team gets better and better, maybe it can solve increasingly general problems through coding, and that sort of thing. So I think that's the take that they're having on this code and AGI situation.

**Chris Benson:** Okay. Well, cool. Like I said, quite a week, full of news... And when you combine that with the deep-dive you just took us through on representation engineering, especially with an acid trip involved...

**Daniel Whitenack:** \[laughs\] Yeah, we were hallucinating more than ChatGPT, as our friends over at the ML Ops podcast would say...

**Chris Benson:** Can't beat that. We've got to close the show on that one.

**Daniel Whitenack:** Yeah, yeah. Well, thanks, Chris. I would recommend that people take -- if they are interested specifically in learning more about the representation learning subject, or activation hacking, take a look at this blog post. It is more of a kind of tutorial type blog post, and there's code involved, and references to the library that's there... So you can pull down a model... Maybe you pull down the Gemma model, the two billion one, in a colab notebook; you can follow some of the steps in the blog post and see if you can do your own activation hacking, or representation learning. I think that would be a good learning, both in terms of a new model, and in terms of this methodology.

**Chris Benson:** Sounds good. I will talk to you next week then.

**Daniel Whitenack:** Alright, see you soon, Chris.
