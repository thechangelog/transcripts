**Daniel Whitenack:** Welcome to another Fully Connected episode of Practical AI, where Chris and I keep you fully connected with everything that's happening in the AI community. We'll talk a little bit about some AI news and articles and we'll dig into some learning resources to help you level up your machine learning game. I'm Daniel Whitenack from SIL International, and I'm joined as always by Chris Benson, who is a strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well, Daniel. Looking forward to today's conversation. I always love our Fully Connected episodes, because we can go wherever we want, whatever captures our interest.

**Daniel Whitenack:** Wherever we want, yeah. The no constraints, we can say whatever might pop into our minds. What's on your mind these days? How's work and life?

**Chris Benson:** Work and life is good. The little bit of travel lately, which has coincided with our third big wave of Covid as we are recording this, and we'll release shortly, so other than the terror of sitting shoulder-to-shoulder with a bunch of people on an airplane, a third of which are statistically not vaccinated - other than that, trying to superglue my mask to my face, around the edges, I'm doing great. Doing great.

**Daniel Whitenack:** Yeah, good. Good. Yeah, I feel like this week for me was just a tiring week, but it was really good. There were a few milestones on various projects that we hit, and/or deadlines that came up, but everything went good. But it was just one of those weeks... You have this backlog of tasks, and then everything sort of coincides in one week, occasionally. That was this week for me. But thankfully, I've got a good team and we worked through all of that together, and I was able to release a couple of new releases, and train some new models, and get some infrastructure things set up... I've been toying around with ClearML a little bit more, which we had an episode about it a while back, and doing some experiment tracking and queuing up jobs for GPUs, and that sort of thing. That's been quite fun, to sort of dive into their tooling for that.

**Chris Benson:** That does sound like a nice week, indeed.

**Daniel Whitenack:** \[00:04:19.06\] Yeah. Otherwise, I watched SLICED the other night, which - we just talked to Meg and Nick from SLICED, which is a live data science competition... I watched that the other night, and that was quite fun. It's just interesting to see - you sort of have a stigma of certain people... They're like a data science hero. And when they sit down to code, they're not going to Stack Overflow, and they're not doing a thing that just barfs up a bunch of exceptions on them... But that's definitely not the case. So it's just cool to kind of sit back and see people live, "Oh, I'm gonna pull up Stack Overflow, I'm gonna pull up Plotly documentation...", like "How do I do a grouped barplot in Plotly?" That's like the same thing I do - whenever I hit one of those things, I just go straight to Google.

**Chris Benson:** Don't we all?

**Daniel Whitenack:** Yeah.

**Chris Benson:** The same thing on the software development side, as opposed to the data science side, is even the great gods of software development, just as data science, they go through the same process. They are human.

**Daniel Whitenack:** Yeah. Speaking of human versus AI, a couple of things have happened in recent days. One of these is like the next thing in AI code generation... Or I guess not a next different thing, but sort of a new interface to something that we've already talked about, GitHub Copilot... But OpenAI released the individual access to their Codex model, which is this model that does the functionality of like "I'm gonna write in natural language what I want my code to do", and then the model takes in that natural language and generates the code to do the thing. So they released that. That's one thing that's sort of interesting, and thinking about AI creating code is always an interesting idea. I don't know if you've had any other thoughts on that recently...

**Chris Benson:** I've been having an ongoing conversation with a good friend about no-code solutions. That applies to deep learning technologies as well. So I am keenly interested in seeing how these come together. I'm looking at the OpenAI Codex page, where it says "Join the waitlist." I noticed that it mentions that it is proficient in more than a dozen programming languages. Have you found any place where it actually tells you which ones?

**Daniel Whitenack:** I haven't done as much digging on that side of things. I know just from my experience on Twitter, and seeing what people are generating. I've seen Python, I've seen JavaScript, but I assume it's more than that. I know when GitHub Copilot released they've talked about all sorts of different programming languages... But yeah, I don't have any context other than that. But I even saw some sort of interesting scripting, and one of the examples I saw was a Microsoft Word document. Maybe I want all of these lines reindented a certain way, or something. So I do it a couple times, and I'm like "Yeah, I don't wanna do this for 14 pages of document." So they gave a little narrative of like "Remove spaces in this way", that they said in natural language. And I don't know the plugin to Microsoft Word that enabled this, but a little script was written, and then it did the thing, and reoriented things, which is kind of a cool idea.

**Chris Benson:** It is.

**Daniel Whitenack:** Yeah, especially for non-technical people. This model, it's like code generation. So I think the one thought is like "Oh, this is for coders or technical people to aid them." But that example actually has an impact potentially for non-technical people. I'm just using a Word document. And actually, before this thing existed, maybe I wasn't able to write cool scripts, because I'm not a programmer. But now I can have this super-power to do these sort of tasks over my document or over my data, that I didn't have the ability to do before, because I didn't know complicated pivot table map function things in Excel, or however people do those things that don't code.

**Chris Benson:** \[00:08:26.08\] I think we're coming into this point where we're seeing these capabilities, like what OpenAI is putting out, and more and more these types of sophisticated "Let us do this for you..." It's bringing more and more people into this field to take advantage of it. If there is anything that we have seen in the last -- this is where the innovation is happening right now. We're not seeing giant new architectures the way we did a few years ago, or entirely new paradigms of deep learning architectures. What we're seeing now are novel ways of using it, making it more accessible to people, and being able to get more productive, and stuff.

But just for the record, I'm still waiting for somebody to bring us some novel, new architectures as well. I'm ready for some more right now, just for the record, in case anyone out there is about to release a breakthrough.

**Daniel Whitenack:** Yeah. Come on the show and talk about it.

**Chris Benson:** Absolutely. Do it right here. This is the place to do it.

**Daniel Whitenack:** We can release the show the same day as your paper, and --

**Chris Benson:** Excellent.

**Daniel Whitenack:** ...yeah, that would be cool. It'd be cool to coordinate that at some point. That's a good example... AI is sort of doing this incursion or infiltration of all sorts of things that maybe we didn't anticipate before, including Microsoft Word, and scripting in Microsoft Word.

One of the things that I wanted to bring to your attention and maybe chat through a bit today was this series of articles that the AI Now is putting together... Which is a series of blog posts called "A new AI lexicon." And they talk about AI having this sort of incursion into all bits of our life. They talk about needing to generate narratives that can offer both perspectives from other places, but also crucial anticipatory knowledge and strategy.

So in my mind, people might not be familiar with the term lexicon... At least before I worked for an organization that did a bunch of language stuff. It wasn't a term that I used very much... But I'm just looking at the definition here, and a lexicon is the vocabulary of a person, language or branch of knowledge. So I think when they're talking about a new AI lexicon, AI would maybe fit into this branch of knowledge category. And we're talking about the vocabulary of this branch of knowledge.

**Chris Benson:** For the moment, you know...

**Daniel Whitenack:** For the moment, yeah. And I think one of the hardest things for me when I was getting into this field was the jargon and vocabulary, because even from a technical background I had run across certain things, like - you know, whatever it is... Ordinary least squares, or something. But the way and the jargon in which AI people or data science people talked about these things was different vocabulary and jargon. So it wasn't so much that the thing was scary or complicated, it was that the vocabulary actually made it scary and complicated. What's your experience there?

**Chris Benson:** I agree with you, because language is powerful, and how we label things is powerful. I have strong opinions there, that we can get into as we go forward... \[laughter\] But even in the time that we've been doing this show, for those who might have been listening to us since the early days, it's evolved quite a bit... So I think this is a timely topic, personally.

**Daniel Whitenack:** Yeah, for sure. Maybe I'll just illustrate what I'm talking about with one of these articles, which I think is a good starting point for this discussion. It's an article called "An electronic brain. Naming, categorizing, and new futures of AI." That's a guest post by a doctoral researcher at Oxford, Yung Au. Sorry if I mispronounced your name. This article I thought was just fascinating...

**Chris Benson:** \[00:12:12.20\] I did, too.

**Daniel Whitenack:** I think all of these articles, if I was to put them in a category, would be like "Thought-provoking", or something... Because I don't know -- you know, reading through the bulk of them, I don't think maybe anyone could read through all of them and maybe say "Hey, I fully agree with everything that's written here" or "That's my perspective, too." It's different perspectives on the subject of AI. So I think it's thought-provoking. It helps you reformulate how you think about AI and the language that you use around AI.

And in this article, the Electronic Brain, Yung, the author, talks about Cantonese terms... And the way that Cantonese terms are made up is that they're composed of a set of characters, and each individual character and its components have some sort of meaning. So what the author did was look through various terms for things related to AI, so like "computer", "artificial intelligence", "automation" etc. And looked at these componets in the Cantonese language for sort of insights maybe about how these terms from the Cantonese perspective might shed light on how we think about AI-related things.

**Chris Benson:** And by the way, just as a two-second aside for anybody that is not familiar with Cantonese out there... It is the second most dominant language in China. Its usage lags far behind Mandarin at this point, because that is the Communist Party's official language... But Cantonese would be the second most widely spoken language in China.

**Daniel Whitenack:** I love language-related things... Just a plug - if you're wanting some knowledge about languages and their relationships and populations and all of that, you can look at Enthnologue.com. It's one good place to look for that information. There's also open versions that are sort of -- you'll see these trees of language varieties, and how many people speak them, and populations, and all of that stuff.

The author goes through and breaks apart some of these common terms... For example, for computer, the breakdown of that in terms of the characters that he brought out was called Electric Brain... Which - I don't know, when you look at a computer, are you thinking electric brain?

**Chris Benson:** Indeed, I do not.

**Daniel Whitenack:** In what way? I mean, is it the brain part? I mean, it's definitely electric, right?

**Chris Benson:** It is electric.

**Daniel Whitenack:** You don't doubt that.

**Chris Benson:** And our brains are electric as well, so...

**Daniel Whitenack:** Maybe you're saying that Electric Brain is redundant, because brain implies electric.

**Chris Benson:** Actually, that's not where my head was at, but that is in fact true. They both have electrical signals in them that are core to their functionality. But I think that's about the limit of my analogy there.

**Daniel Whitenack:** Yeah, so that's a computer, which is, I think, pretty interesting... He gives alternatives and breaks down the individual characters... I showed one of my colleagues the breakdown, and he was seeing that, you know, computer could also maybe be like \[unintelligible 00:15:13.23\] or something... \[laughter\] Which - I don't know what that tells us about how we think about computers.

But he goes in and he talks about these components also of how we frame the term artificial intelligence, which I think was very thought-provoking for me... And he draws out this idea that the term itself in Cantonese and the way it's made up talks about -- you could think about it primarily as artificial intelligent, but also sort of parallel to that that's in the language is really more focused on manual labor, or man power, and able, or a system or smart, able to do man power, or manual labor... Which is much more of a practical idea about artificial intelligence. How does that strike you?

**Chris Benson:** It feels more like the feelings that we have when we say machine learning instead of artificial intelligence, the way they do that. I think practitioners tend to think of machine learning as the pragmatic, fundamental stick-with-the-science kind of mentality, whereas AI is a little bit more glossy marketing. Even though you're speaking of the AI translation, it feels like that's how I would think of as machine learning in my own context.

**Break**: \[00:16:37.12\]

**Daniel Whitenack:** So Chris, we were just getting into some of this discussion about how AI is represented in the Cantonese context, and starting to talk about how there is embedded within the term this idea of manual labor, or something very practical...

**Chris Benson:** Yes.

**Daniel Whitenack:** One of the things that's mentioned in this article is thinking about "What if AI systems or automated systems or augmented systems - what if these systems were seen less exceptional, or very sophisticated, or whatever that terms is, and more ordinary, or less exceptional?"

**Chris Benson:** You don't wanna take me down this path, because I have strong opinions on this one. You don't wanna do that, do you?

**Daniel Whitenack:** Yeah, so the things that he draws out are more ordinary and less exceptional, or more human and less machine; more labor and less enchantment. I thought that was a cool pairing of terms. So there is this perception... Maybe not by the practitioner, like you were talking about, but definitely by people at large that AI systems have some sort of enchantment around them...

**Chris Benson:** Yeah.

**Daniel Whitenack:** When I'm teaching classes, I think oftentimes when I get into like, okay, well if we think about most AI systems - and there are certainly exceptions that don't fit into this pattern that I'm about to say... But if we think about most AI systems, what we're talking about is essentially an automated process of trial and error. It's actually a very dumb process, in the sense that we have a set of examples, we're trying to recreate the data transformation from that input to an output, and the way in which we do it is we try a bunch of times. So we put the examples in, we try to make the prediction based on some encoded parameters, and when it's not good, we change the parameters, and then we just do that a bagillion times, until we get the right set, or the "best" set of parameters... And then out comes the model, which so many people see as enchantment, or like you put fairy dust on the computer in the corner...

**Chris Benson:** \[00:20:04.26\] \[laughs\]

**Daniel Whitenack:** I see some faces in training sometimes where it's like, it's a little bit disappointing for people; in other ways it's maybe reassuring, because they came into it thinking it's harder to get into this practice than they thought, because there's some fundamentally subtle and mysterious thing that they need to understand in order to do the work.

**Chris Benson:** Daniel, they hear it's a black box...

**Daniel Whitenack:** \[laughs\]

**Chris Benson:** It's a black box, it's magical... This is their way into Hogwarts.

**Daniel Whitenack:** There is another term, black box, right?

**Chris Benson:** It is.

**Daniel Whitenack:** What does that terminology imply about how we think about --

**Chris Benson:** I don't know how people are thinking about it now, but early on it was "It's unknowable." And that was really before the rise of explainable AI as a field. That's what black box was intended to be, is "This is unknowable, what we're doing here", which of course is a little bit silly.

**Daniel Whitenack:** Yeah, and there's also this very unfortunate connotation with black just meaning -- it does have a negative connotation in the context of like... Most of the times these terms that people have used through time, like a black list, or something, which now we're sort of trying to get away from those terms, because we definitely don't want that connotation in many cases with -- like, black shouldn't have this sort of preexisting negative connotation. So when you say black box, part of that term is this unknowingness about it.

But from the start, at least in our culture, you also get this sense of maybe you're trying to say something negative about the AI thing, that it's black box, it's unknowing, but maybe in an unknowing/threatening sort of way...

**Chris Benson:** There has always been kind of a mysticism around the term artificial intelligence or AI... And frankly, there have been many marketers out there who have taken great advantage of that. But what we do, the deep learning techniques that we do, is just mathematics, and it's very, very pragmatic. It's very down to earth, and there's nothing mystical about it.

I think that's one of the places I've arrived. When we started the show and named our show Practical AI, I was probably pretty high on the term AI then, but as we have really delved into this and the black box nature of the math has changed, it's hard for me to think of it as -- I certainly don't think of it as intelligent; it's hard for me to even think of it as AI at this point... So I think my term AI has gotten more aspirational as we've gone on, meaning that we have not yet achieved it.

**Daniel Whitenack:** Yeah, it's this system or machinery like I was talking about in that sort of breakdown of the Cantonese - this system or machinery that is doing some kind of man or woman-related power labor... So yeah, I think that's a very practical way to look at it.

I know in the past, just speaking of lexicons and how we talk about AI, even this recent episode where we chatted with the people from SLICED, so Meg and Nick - I've already mentioned I've been watching that... The premise of that show was their concept around Chopped, the cooking show. And I've found it very interesting that that's also in my lexicon of AI terms - that's very much how I think about actual AI development and the practicalities of AI development, as much more like cooking than it is this sort of pure research topic of people standing at a chalkboard and doing various things.

So in the spirit of what AI now is trying to do, I would think that, for example, like a recipe is a good term to have in an AI lexicon, where it's not--

**Chris Benson:** I agree.

**Daniel Whitenack:** \[00:23:55.11\] Because even if you think about a model... A model has certain connotations, especially for people that aren't deeply rooted in maybe a scientific discipline, like physics or chemistry or mathematical simulations... They may think that that model term is also quite intimidating... But this is another maybe earth-shattering thing for people when I'm doing trainings - what is a model? Well, maybe I'll ask you, Chris. If someone was to ask you what is an AI model at its core, like when you get your magnifying glass and you look at the AI model, what is it composed of, I guess? Maybe that's another way.

**Chris Benson:** Well, the "composed of" threw me off a little bit. I think of a model generically, and this isn't specific necessarily to deep learning... But as a representation of an entity that is real, in some sense. That doesn't mean that necessarily it's physical. It represents the characteristics, and stuff.

But really, when we talk about a model in the context of deep learning, and we're producing a model at the end, we love just the word "inference", and such, but I think of it as a filter, honestly. A type of filter.

**Daniel Whitenack:** Yeah.

**Chris Benson:** So you give it an input, and it arrived as a set function that produces an output based on that input, and until you change the model with further training, it's a filter that gives you a particular set of outputs. That's down to earth the way I think about it.

**Daniel Whitenack:** I like the filter idea. I think that's something that people can grab on to in terms of their lexicon. Everyone's interacted with a coffee filter, or at least in most cultures there's some idea of that sort of filtering or straining. And also like a data transformation I think is a less scary terminology than model... But when I am teaching, oftentimes I'll ask this question, and there's a bunch of ideas about "Oh, it's like a thing that mimics human brains..." It's very enchanted ideas of models, right?

**Chris Benson:** Oh...

**Daniel Whitenack:** And eventually, I break them down and say "Here's what a model is."

**Chris Benson:** Oh, I thought you were breaking the person down for a moment there. You're breaking the model explanation... I was like "Here comes Daniel."

**Daniel Whitenack:** Yeah. So eventually, if you get down to the roots of it and you say -- so you have a Jupyter notebook, right? And you trained a model. Which bit of that code is the model? Well, I mean, there's some definitions... There's a function or a class that defines your model, right? But then at the end you "save" your model, because you wanna use your model later. So if you save your model, what is saved? It's not sort of like spoken into reality with some incantation, right? You're saving numbers.

**Chris Benson:** You are.

**Daniel Whitenack:** What you're doing is you're serializing a bunch of parameters. And the model in my mind is the parameters that you save, which are just numbers --

**Chris Benson:** It's a static snapshot.

**Daniel Whitenack:** Yeah. Like a class or a function that defines how to use those numbers to either filter something, like you're talking about... So filter it to transform data, to produce certain types outputs... It's really just a parameterized function. And the parameters plus the definition of that function is your model. There is no sort of beyond that in my mind.

**Chris Benson:** I agree with you.

**Daniel Whitenack:** Now, there's certainly other terms... These terms like meta learning. That's super meta, right?

**Chris Benson:** How many thousands of people though -- you just took the enchantment right out of it. That whole mysticism...

**Daniel Whitenack:** Yeah, I've destroyed lots of --

**Chris Benson:** There are thousands of listeners out there that are gonna turn away from this field now. You've demystified it. You have taken the magic from it. It's no longer Hogwarts, we're all Muggles still.

**Daniel Whitenack:** \[laughs\] Maybe we need some terminology from Harry Potter in our AI lexicon.

**Chris Benson:** Excellent. I could deal with that.

**Daniel Whitenack:** I don't know if it crosses all cultures, but... That gets to the idea that some of these terms, just from the start, like artificial intelligence model, gradient descent...

**Chris Benson:** \[00:28:08.21\] Oh...

**Daniel Whitenack:** And that's not a bad term for the method of optimization, right? It's actually a very appropriate term.

**Chris Benson:** Very accurate, actually. I don't have a problem with that one, because I think it describes what you're doing.

**Daniel Whitenack:** Yeah. It definitely can be a scary term though. It's like stochastic gradient descent, or mini-batch gradient descent. So maybe it's the scaffolding around those terms; it sets people up for failure if you're saying "I'm going to train my artificial intelligence model on accelerated hardware, using an optimization scheme of mini-batch gradient descents."

**Chris Benson:** Yes.

**Daniel Whitenack:** That whole sentence there just excludes so many people, because they're just like "Oh, I give up."

**Chris Benson:** You're probably right. And then on the opposite thing, without going that way, going for the cheap thing that doesn't represent it well, I think maybe the term, the description that just makes me cringe more than any other is the use of the word "cognitive."

**Daniel Whitenack:** Oh, cognitive, yeah.

**Chris Benson:** That's really gotten popular. And I just... Ugh! If you're going to talk to me about --

**Daniel Whitenack:** Yeah, the electronic brain sort of idea.

**Chris Benson:** Yeah. If we're talking deep learning, don't talk to me about cognitive, because I will turn off right away. I'll be like "This person doesn't know what they're talking about."

**Daniel Whitenack:** I also listen to the NLP Highlights podcast from the Allen NLP group... And their recent episode was really relevant to this topic, because they were talking about language models and how they process language data, versus like a human cognitively processes language... And actually, this is very much like a huge area of research which is not very well defined at this point. And even just thinking about the guest on this show - her name is Lisa Beinborn - she did this work where she tried to match up certain layers of a neural network or operations in a neural network like attention, with cognitive signals from doing imaging of brains to see if there was sort of a similarity with how a brain processed this information, versus like a computer processes this through am modern language model... And she talks about how it was very hard for her to find any signal that had that sort of correlation... And eventually, she found some metrics within the world of machine learning interpretability, that matched up a bit with the cognitive signals.. But it was very far from clear-cut.

So I would recommend people look at -- we will include the link in our show notes, but if you're interested in hearing that discussion, this idea of matching up neural networks with cognitive things is very interesting, and definitely an area of active research.

We've talked about a number of these terms in our AI lexicon, and that's definitely one way to think about what AI Now is doing with their series in this AI Lexicon... But they're also kind of exploring various subjects that are thought-provoking around how AI models behave... Not just how we describe them, but how we describe their behavior, and also think about how they behave and interact with humans.

For example, they talk about the word "smart." Like, we talk about a smart fridge, or a smart home, or a smart city. What does it fundamentally mean that a thing is smart? I don't know, maybe that's another question to you...

**Chris Benson:** Oh, that puts it right up there with cognitive with me.

**Daniel Whitenack:** Yeah, yeah.

**Chris Benson:** \[00:31:52.01\] It's one of those words that's alluding -- it's a marketing thing. It's alluding to this thing... As you just pointed out before the break, it doesn't often show itself to be a reality.

**Daniel Whitenack:** Yeah. And they talk about, you know, this is maybe driven by claims of technology companies to drive marketing in various ways... And in some ways it's harmful, because people want their stuff to be smart, but they don't think about "Where is this data going? What risks does this expose me to?", which we've definitely seem some issues with that over time in terms of IoT and smart devices, and security, and all of those things.

**Chris Benson:** That's a great point... When you see smart something, the something was already an existing thing. And then they add smart to it... And it rather implies that something has changed. And usually, that something that has changed is the use of data in some way, which begs all these questions that not only are we asking now, but we've talked about over many episodes... But the consumer isn't necessarily data-savvy. They're not necessarily familiar with these technologies that we and our listeners are talking about week in and week out... So there's a danger there. There's a danger of what are you opening yourself to in the name of smart.

**Daniel Whitenack:** I think it's a similar thing, maybe related to the smart discussion - they talk about function creep. I know people also use the term model drift, another thing... That's a kind of separate idea, where the function you're -- so model drift is when the functionality that you're doing with your model initially matches the distribution of the data that you're putting into your model, but eventually, that distribution of data actually changes, and so your model may behave in interesting, weird ways. But also you could think about function creep or function drift, which is "Hey, we created this facial recognition model to do X thing." Maybe it's to ensure that people are identified securely when they enter a building, or something... But then that's pretty easily -- you know, Covid happens and then you can say "Well, it's also a really good way to see if people are wearing their masks", or do some type of more analytical analysis of this, in a sort of surveillance type of way.

**Chris Benson:** And that happens a lot as well...

**Daniel Whitenack:** Yeah. What do you think that's driven by? What is the thought process and the discussions behind the scene when that happens?

**Chris Benson:** Things that I've observed - just people go "Well, it costs us nothing extra. The model we have for purpose A will actually serve purpose B as well." The decision to ever create the model was only analyzed around the circumstances around A. So it's a way of circumventing many of the due diligence processes, in some cases maybe even ethical considerations that are there.

**Daniel Whitenack:** Yeah.

**Chris Benson:** I think that happens quite a lot.

**Daniel Whitenack:** Also, there's a lot of companies that provide AI tooling, but they're not the end user of that. So let's say that I'm a company and I'm doing facial recognition technology, and I provide an API or some tool for companies to do facial recognition. And I release this to them... How could I ever understand how they're actually using this or how my technology is actually being used, maybe in terms of this function creep idea?

**Chris Benson:** Yeah.

**Daniel Whitenack:** Is there any mechanism to monitor that or to help understand how people are using the things that you're creating? Specifically AI models.

**Chris Benson:** Yeah, I don't think there's any standard approach, that I'm aware of at least. This reminds me - it's not exact, but it's close. A year or two ago we were talking about how AWS was offering facial recognition services to law enforcement agencies, and there were some civil liberty concerns around that... And I believe AWS ended up pulling back from that, as offering it. But the point is that AWS may not have felt as a service provider that they needed to evaluate that. But if you're talking about a tool that can be used in ways that may not be strictly ethical in every context, then there's a big question mark hanging over that entire thing, is "What are your responsibilities when you release such a capability to the public?"

**Daniel Whitenack:** \[00:36:14.26\] I mean, at the end of the day you can't have total control over what your end users do with their thing, because at the end of the day humans are tricky, and deceptive, and all of those things, in various scenarios.

I think you can -- you know, maybe this gets to the principles and how you structure your licenses, and that sort of thing, as a provider. For example, I know there's well-accepted and widely used guidance from the United Nations around malicious use of technology to oppress indigenous populations... So this is language that you can include in licenses that you sign with companies. And certainly, a company signing a license on that - it doesn't mean that they won't do that, or oppress some population, or something like that.

**Chris Benson:** It's a self-regulatory kind of approach.

**Daniel Whitenack:** Yeah... But at least there is a precedent to where if you are aware that something like this is going on, then you have in your license an agreement that allows you to terminate things, or recoup costs that maybe you could push back to that population... Whatever the thing is, there could be a mechanism around it. But if you don't have that, then -- hey, you're at least not thinking about it upfront. That's maybe a poor excuse, like "I didn't think about this scenario, where this could be used in this way."

**Chris Benson:** Yeah, I think that draws inspiration from the software world, because often we see software licenses, including open source licenses, that start with a particular intent, and it's not until you figure out whether or not that's appropriate for the situation... And there's some learning there.

**Daniel Whitenack:** There's a whole variety of these articles which I would recommend people check out. There's new terms in there, that me as a technical person and not having taken an English class since high school I wasn't familiar with, but it was good to learn about those things, and glad to see people writing these sort of thought-provoking articles in this way.

We'll include links to a number of these and the series in our show notes, so definitely check it out.

One of the things that we like to do in these Fully Connected shows is share with people some learning resources that we've ran across, because as you mentioned, Chris, things are moving so rapidly. People use all sorts of fancy jargon, which is confusing... So having a good set of resources to turn to is really important.

One of the ones that I've found - actually, I don't know if it was yesterday or today - was a new, free PDF book that's posted onto archive from Jeff Heaton, who's teaching a course at Washington University in St. Louis, entitled "Applications of Deep Learning." And you can just go straight to the archive and download the PDF. I was really impressed with my initial inspection of this resource. It's applications of deep neural networks with Keras, and it seems like there's this sort of very consistent and practical treatment of everything from preliminaries of how to read in a CSV file, through to "How do I interact with TensorFlow to do various things?", all the way down to reinforcement learning and setting up environments for reinforcement learning. And all of this is treated seemingly very consistently with Keras, and very much in a code-first sort of way.

\[00:39:57.09\] So as soon as you start scrolling through the book, you'll see very explicit sections which are "Hey, here is the Python code that does this thing, and here is the expected output from that Python code." And of course, there's equations and figures and stuff in there as well, but I like that there's this very clear call-out of how this is code-based, how it's all with Keras... I haven't gone through the whole thing, obviously, since I've just found it in the last couple of days... But I know I'll use it as a reference, but I think it would also be a good alternative for people that are out there maybe thinking "Hey, what is that comprehensive resource that I could turn to to really get into this field?" and maybe starting with a little bit of Python knowledge work into some of these more complicated topics, like adversarial networks, or convolutional neural networks, or other things, with TensorFlow and Keras. I think this would be a really good one to check out and maybe include in your list of things to work through.

**Chris Benson:** I agree, and I was not aware of this until you mentioned it just now; I downloaded it as you were talking, and looking through it... It's very current, it's fall of 2021, and we're in August of 2021 as we're recording this... So it's a recent resource, and I'm looking through it and i looks fantastic.

**Daniel Whitenack:** Yeah, it's like 500 pages.

**Chris Benson:** Oh yeah, it's huge, and it covers so many great topics. So yeah, thank you. I'm gonna be going through this after we stop recording this episode.

**Daniel Whitenack:** There's definitely other ones that take this approach. I'm thinking of this dive into deep learning resource - it's very comprehensive, but also very much code-based and provides code examples, and I think this is really useful, because you get your hands on very quickly, and are able to explore things very rapidly. So yeah, definitely check it out.

**Chris Benson:** August 10th - as we record this, it was released two days ago.

**Daniel Whitenack:** Oh, look at that. I'm really on top of Twitter here... People must have liked it on Twitter and it got into my feed... So thank you, Jeff Heaton. If you're listening, come onto the show and talk to us about how the class went.

**Chris Benson:** Absolutely.

**Daniel Whitenack:** We'd love to hear about it.

**Chris Benson:** If you're interested in these sorts of resources or topics that we talk about on the show, maybe check out our community at Practical AI. You can join a Slack channel where there's discussions on these sorts of resources, and other things. You can find that at Changelog.com/community, or on LinkedIn, and Twitter, and other places. So find us and let us know what you're thinking about this show and start some discussion around various AI topics. I really enjoyed today's conversation, Chris, talking about words, and what they mean...

**Chris Benson:** I did, too. It was fascinating for me, as a participant. I'm just absorbed already in this book. You've lost my attention, Daniel, because I'm --

**Daniel Whitenack:** \[laughs\] I've totally lost you, yeah...

**Chris Benson:** I'm totally into the book now. So yeah, go download it, everyone; it's free out there, on the archive... Cool. Great show.

**Daniel Whitenack:** Yeah. Thanks, Chris. See ya.

**Chris Benson:** See ya later.
