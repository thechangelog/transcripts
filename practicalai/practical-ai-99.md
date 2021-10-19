**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack; I'm a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing okay. How's it going today, Daniel? What are you up to?

**Daniel Whitenack:** It's been a long week... I help my wife's business move, so I'm a little bit physically tired... But it's been a good week. I gave a virtual talk this morning, and that was fun. Actually, really good question and answer, and back and forth... You never know, with virtual talks sometimes they're super-awkward, sometimes they're alright... This one was really good, and interesting. What about you?

**Chris Benson:** Same kind of thing. I'm just migrating into virtual talks after just taking a few months off, and... It's interesting, as I've been watching different organizations, their different levels of adaptability in terms of their readiness to do that. So always fun, very supportive...

**Daniel Whitenack:** For sure.

**Chris Benson:** And hey, we had a milestone in our family this week.

**Daniel Whitenack:** Really?

**Chris Benson:** Yeah, my wife became an American citizen. She's British, as you know...

**Daniel Whitenack:** Oh, congratulations.

**Chris Benson:** She became an American citizen.

**Daniel Whitenack:** Yeah, pass on my congratulations to her.

**Chris Benson:** Absolutely. It was a big deal for us.

**Daniel Whitenack:** Yeah, that's so awesome. That's a long process...

**Chris Benson:** It is a long process... And she knows more American history than any of us, probably more than any of us put together now. They test all that.

**Daniel Whitenack:** Yeah, definitely.

**Chris Benson:** All the things that we learned in third grade and promptly forgot, so... Yeah.

**Daniel Whitenack:** ...that we all forgot, right.

**Chris Benson:** She's a pro at this point.

**Daniel Whitenack:** That's awesome, man... Congratulations. That's so exciting.

**Chris Benson:** Thank you very much.

**Daniel Whitenack:** Yeah. Well, this week I'm pretty excited... There's sort of a gap in our discussions thus far on the podcast. We've talked about a lot of things, but there are still things we have not talked about, apparently... And every once in a while - I see something talked about, and I'm like "Oh, we haven't talked about that yet." There's just so much to cover... So today we're gonna be talking about adversarial examples and attacks, and we're privileged to have with us Jack Morris, who is a researcher at the University of Virginia, and an incoming AI resident at Google. Welcome, Jack.

**Jack Morris:** Hi! It's great to be here.

**Daniel Whitenack:** Yeah, thank you for joining us. It's really great to have you here. You've done a lot of stuff already, and you're working a lot in open source, and there's a lot to discuss... But before we jump into all that, could you just give us a little bit of your background, how you got interested in AI, and got eventually connected with Google?

**Jack Morris:** Yeah, sure. I recently graduated from the University of Virginia, and I studied computer science and math there... And while I was there, I did this internship at Google. Actually, it's kind of a funny story... Have you ever heard of Google Foo Bar, that program?

**Chris Benson:** No.

**Daniel Whitenack:** Maybe I have not.

**Chris Benson:** I don't recall it. Tell us about it. Foo Bar us.

**Jack Morris:** \[04:05\] Okay, so I'll tell you the story... Basically, I was in my sophomore year in college; at UVA we call it second year, because we \[unintelligible 00:04:11.12\] So I was in my second year. I had this personal website I think I was working on... I was searching up something related to a software project I was working on on Google. I think what I typed in was something like "Python list comprehensions", something related to that... And I typed it in, and then - it's hard to explain in audio, but basically there's the search result page for Google, all the results, and it kind of animated, it shrunk up and slid over, and then kind of like behind the search results...

**Daniel Whitenack:** Aaah... I've heard of this.

**Jack Morris:** ...like, "Here's a terminal."

**Daniel Whitenack:** Yeah, it's like a Easter egg recruiting tool...

**Jack Morris:** Yeah, exactly. It's pretty funny... They don't send a lot of recruiters to my school or anything, so it was very serendipitous for me that I got that pop-up. So it's a terminal window behind the Google search page; it's just like an Easter egg in a video game, and it says "We think you're speaking our language. Wanna take a test?" and then I clicked Yes. You make an account, there's this little website that's just a console in the browser... And it's coding challenges. Now \[unintelligible 00:05:18.24\] that kind of thing, and there's different levels; it gets progressively harder...

I remember just doing it for a few weeks, and a few of the problems were -- they're not like interview coding problems, where you think for a while and then you get it and you can write it out... They took me like several days just to figure it out and try and optimize it, and stuff... And I got to level four, and then I just couldn't figure one out. I was so excited too when I got it, and then I was kind of bummed... But I just couldn't figure this problem out. And they all have these really long write-ups... There was something to do with rabbits, and there were all these allocations of rabbit holes, and they were storing things in different -- it was a hard problem, and a really confusing write-up, and then I just kind of gave up. And then I guess it turned out you didn't have to solve all the problems to get an interview, and I got an interview, and I did an internship.

So that's how I originally got connected with Google. And then more recently, I applied to this program called the AI Residency, and did some interviews for that. My eventual goal is to get a Ph.D. hopefully, and something related to computer science, artificial intelligence, linguistics... I'm not that sure yet. But next year I'm doing this 1 to 1.5-year fellowship thing at Google, which will be really awesome. It's just a research internship, basically...

And as to the question of how I got interested in AI - originally, I was really interested in just some things on the application side. They were all pretty pertinent to NLP, but I didn't really know at the time. I think my original idea was -- I had worked on a few different open source projects and I wanted to make a website that aggregates medical literature. It seemed like there's all this research that's just open online on Google Scholar, but it's pretty hard for the average person to sift through and aggregate and summarize. There's all these sort of like information retrieval tasks...

So I thought I was wrong about how far along we are in solving some different NLP stuff. I thought there would be a plug and play type of deal, at least on a small scale, for certain types of research, and things... And I've tried it for a little bit and I remember I tried this thing -- 2,5 years ago was when I first started getting an interest in AI, and I tried to use these skip-thought vectors to encode sentences...

**Chris Benson:** And what is a skip-thought vector, just for those of us who don't know?

**Jack Morris:** \[07:54\] Yeah, it's now no longer the state of the art method, but it's a way to take a sentence and encode it into a vector, so that you can compare that vector to other sentences to see if they're similar or dissimilar...

**Chris Benson:** Gotcha.

**Jack Morris:** And then I kind of was slowly realizing basically "Wow, these things --" not that it didn't work, but that... I don't know, there were just still a lot of problems to be solved, and I got interested in some more specific stuff.

And then most recently, I've been working on this idea of robustness, or this like this security side almost, trying to find flaws in NLP models the same way that people are interested in finding them for computer vision models specifically... Which is -- the buzzword is like adversarial examples. A lot of people debate whether or not that's really applicable terminology to NLP. We can get into that later, but... Anyways, that's the kind of field that I've been interested in recently.

**Daniel Whitenack:** Yeah, I remember -- and I think I've mentioned actually the same episode of a different podcast on this podcast before, but... The NLP Highlights Podcast, which I listen to - they have an episode about behavioral testing of NLP models, with Marco Ribeiro. He was talking about these tests that he did, which were really right along the lines of what you're talking about. If you have a sentiment analysis example that's like "I love the United States. It's great", or something.

**Chris Benson:** That's a timely example right there, given my \[unintelligible 00:09:23.20\]

**Daniel Whitenack:** Yeah, yeah... And you put that into the commercial offerings for sentiment analysis, like products that are being sold... So you do that, and then you just switch out the United States and put in Turkey. "I love Turkey. It's great." It'll actually break the system and you won't get positive sentiment anymore, just because so much in the training is biased against Turkey, for whatever reasons...

So yeah, I don't know... Is that kind of what you're talking about, with adversarial -- maybe we should just back up a second and think about adversarial examples in general. What do people generally mean when they're talking about adversarial examples?

**Jack Morris:** So the first people that were researching adversarial examples were all based around convolutional neural networks, and images specifically... And you guys have probably seen the examples where you can take an input image that's classified correctly, say for some ImageNet classifier classifying different animals. You know, there's a picture of a panda and it says "Okay, this is a panda. I'm 99.8% confident." And then basically they uncover these blind spots in a really high-dimensional input space that point to other classes, and there's a lot of different research into why that exists... But if you add a small, tiny little image onto the panda image - it's so small you can't even notice it with your eyes; maybe a pixel or two pixels out of 255... You add it to the panda, and you end up with an image that to a human can't be distinguished from the first image, but if you add noise in the correct direction, it's totally misclassified into some other class.

I think the quintessential example is the panda, and then you add this tiny little delta, a small image, and then it becomes a gibbon, with 99.8% misclassification confidence... Which is crazy, and it's a big problem, and it's become -- I think that's one of the hotter areas of research in ML, I'd say... There's all these people trying to figure out why that's happening, trying to propose different defenses for it... There's some pretty cool attacks and defenses, I think, in the real world. I saw people that are trying to evade facial recognition detectors wear these special shirts... Have you all seen those?

**Daniel Whitenack:** Yeah.

**Jack Morris:** \[11:56\] ...that are patterned in a certain way that convinces the camera that they're not a person, or it just totally distorts their facial recognition software... It's pretty cool. So that's a really hot area of research, adversarial examples with convolutional neural networks or other image processing deep learning models... And then naturally, one would wonder whether that exists for text, and if so, what that would be. And it turns out it's not as cut and dry; it's a hotly debated and somewhat murky concept, but one hypothesis, like you talked about it, is you can substitute words that maybe don't change the meaning with respect to the task.

In sentiment analysis, maybe if you substitute a proper noun for another proper noun, like substituting the United States for Turkey, should never really change the sentiment of any sentence. And I think that's what he was talking about in that project.

**Chris Benson:** And just tying in, as you're talking about adversarial in the convolutional neural network context, what would be the motivation for doing it in the NLP context? What are some of the things you could think of that people would be bothering to do that with? I'm just curious, what in your views might be some of the drivers there?

**Jack Morris:** The first paper I wrote, which unarchived - it's called "Reevaluation adversarial examples in natural language" - was trying to give sort of like a theoretical framework for different types of adversarial examples in NLP. The basic idea was like "Okay, we don't have to agree on one set, but we can lay out some sets of constraints that you might agree on." If you substitute a word for its synonym, it shouldn't change the prediction. That would be an example of one partial definition of an adversarial example.

**Daniel Whitenack:** Maybe this is having to do with -- people in the convolutional neural network space talk a lot about safety in terms of why adversarial examples are worth exploring. From your perspective, since you've done this work in NLP, what makes exploring adversarial examples for NLP interesting, from your perspective? Is there a safety side of it, or is it more like robustness? You were talking about robustness as well.

**Jack Morris:** Yeah, those are definitely two different things. If you're a company that's maybe putting some NLP model up on the internet, releasing it into production, on one hand you want it to work in all sorts of cases, and you don't want there to be some obvious gaping holes in its actual predictions, which would be sort of like the robustness angle...

And on the other hand, you want it to be safe. You don't want people to be able to manipulate it in some way. The reason I brought it up in the paper was because it includes some specific examples like that... Because I think there's a decent amount of research, but not a lot of discussion about why robustness is important in NLP, or like you were asking, what maybe the goals of an adversarial would be in that situation.

I think one really easy one is there's these toxic comment classifiers that I think are actually in use right now, definitely on Facebook. They have this \[unintelligible 00:15:14.17\] system for deciding whether a comment is just totally "toxic" and needs to be flagged, or discarded, or hidden, or you have to say you're 18 to read it, or whatever... So if you're someone who, for whatever reason, thinks it would be a good idea to write a toxic comment and then avoid that sort of flagging system, that would be a pretty good example of when you want to run an attack on an NLP model. And you could actually use tags to tag for that. They should not.

**Break:** \[15:51\] to \[17:20\]

**Chris Benson:** So let's say that our model fails on an adversarial example. What could we do to fix it?

**Jack Morris:** That's a great question, too. That's a pretty open area of research. I wanna say there's a great answer I can give you right off the bat, but the naive approach is generate a bunch more adversarial examples and then retrain your model, either just on the adversarial examples or on the original training set in the adversarial examples concatenated together.

There's some research that's shown that gives you some improvements, but you can imagine -- it's very different than the case of images. For example, if your goal is to replace proper nouns with other proper nouns, like replace every instance of the United States with Turkey, or more commonly maybe try all the countries and pick the one that meets your goal the best...

**Daniel Whitenack:** I think that you're getting into some interesting areas... One of the things that you started talking about was generating adversarial examples for NLP models... So it's one thing to realize that your model fails for a particular type of attack, or something like that. It may be another thing, like Chris was saying, to say "Okay, well now what? How do I fix that?"

**Jack Morris:** Yeah.

**Daniel Whitenack:** And you're saying you could generate adversarial examples. I know some of your work, and your open source work, is geared towards generating those examples... But in general, how do people come up with adversarial examples? What are the range of things that people try to do to come up with these examples? Maybe specifically in NLP. Is it mostly hand-curated data, or what other things are out there to try?

**Jack Morris:** Yeah. Again, it kind of depends on your definition of an adversarial example. Maybe we can talk about that briefly first...

**Daniel Whitenack:** Sure, that'd be great.

**Jack Morris:** I think that lends a hand to why adversarial examples in NLP are not as well-defined as in vision... Because if you have two images next to each other, it's very clear whether or not they're similar, and whether the change from image one to image two could be classified as imperceptible. But if you have two sequences of texts, there's no imperceptible change, unless they're exactly the same. So if you make a change, any sort of change that you might define as imperceptible becomes at least like a point of argument.

\[19:48\] I'll tell you two really popular definitions. One would be with respect to semantics... So if you have sentence one, and then you replace some words with synonyms, or like you said, with a proper noun, that should generally not change the semantics of the original input. So you could say -- if I have a sentence that said "I loved the movie Parasite. Best movie I've ever seen", and then I replaced a couple words and I said "I liked the movie Parasite. Greatest movie I've ever seen", a lot of people would say that's invariant with respect to semantics, like they contain the same meaning. So if they have different predictions, that would be classified as an adversarial example.

And then the other thing that I was gonna bring up, another definition, is with respect to character-level changes. Imagine a typo on a computer, basically. If instead of saying "I loved Parasite" I spelled loved "lvoed", or something like that, just switched around the characters a little bit, it's actually really shocking how many state of the art NLP models will just totally mispredict that, for whatever reason...

So those are sort of two competing, not necessarily totally matched ideas of adversarial examples, one being with respect to character-level changes... Or if you just insert a character, like "lovedq", or whatever, especially models that are based on this idea of entire words have a lot of trouble dealing with those types of changes. So either one of those would probably be classified as an adversarial example, by most people, I believe.

**Daniel Whitenack:** I'm trying to think through my own workflow right now... So in terms of making my models more robust, I guess... Let's say I'm creating an NLP model. It's probably unlikely, or it seems unlikely for me to plug all the holes in terms of things that my model might do that are unexpected... But you're saying that maybe there's obvious things that we can protect against, or make more robust - with the typo perturbation, or maybe not changing the semantics, or some type of perturbations like this, that we can test against... What are your suggestions in terms of like - you can plug some holes, but then eventually your model might behave unexpected in a new way, that is totally unexpected, because it's unexpected.

It almost seems like unit testing software or something to me, where it's like, you test for the things that you definitely anticipate, but then at some point something weird happens and you have to add a test case. Is that how you would view it, or how would you view the workflow of thinking about adversarial examples in developing a model, as opposed to not thinking about them?

**Jack Morris:** Yeah, that's a really pertinent question, I think, to anyone who's an engineer and actually trying to build NLP systems for real people... And it's not one that's solved yet. But another idea that I've heard - I think Ian Goodfellow has done the talks and advocated for this is the idea of if you're building a model, adding some kind of output that can identify whether an input is malformed, or maybe doesn't fit with the distribution of the training data at all. So that in the case I indicated before might indicate a misspelling, or some kind of really unnatural misspelling that a user would never produce... Or maybe just a synonym substitution, like maybe using a word that might have the same meaning, but would almost never be used in that context by a real person, which is something I think I see a lot with these adversarial example papers. They might say "Okay, if two are synonyms in the Thesaurus, they can always be substituted for each other", a lot of the time that might not be a very natural substitution or something that a human would probably never actually do.

\[24:01\] So if you can train a model that has some way to indicate whether an input is acceptable or not, it can alleviate a lot of those concerns... Though they're still there, I think in the general case it would make your system a lot better.

**Chris Benson:** I know you and Daniel do a lot of work in this area, so I'm kind of approaching it as the one who's not actively doing models in NLP... If I'm understanding you correctly, it sounds like there's really a different set of use cases if you were to compare this to adversarial and CNNs... Whereas that behavior is, in some sense, often maybe nefarious; trying to change a classification, for some purpose. Whereas this, it sounds like -- you mentioned robustness earlier, and it sounds like there may be a lot of use cases where you're helping a user not make mistakes, where you're trying to prevent unexpected behavior, intentional or not, in terms of what the user was trying to do... Do you think that's fair? Do you think that the types of use cases that this might be applied to are fairly different?

**Jack Morris:** Yeah, absolutely... And I really liked the comparison that you made, comparing finding adversarial examples for NLP models to some sort of unit testing in the software engineering spectrum. That's what that paper that he was talking about, the Checklist paper - that's what they talk about, is applying ideas from software engineering to verifying the usefulness of NLP models, essentially. And I think that's a lot closer to what adversarial examples are in NLP and how they're useful to maybe how they are in CNNs.

**Chris Benson:** I could imagine not far down the road, as some of this work is realized, that maybe for programmers their IDEs or text editors kind of get some modules that help them in terms of essentially unit-testing what they're doing in a smart way... Or even for just someone who's not technical, a word processor might have this capability built in, so that when you're writing, you're making fewer mistakes in that way. So it sounds like there's a lot of help-the-human possibilities here.

**Daniel Whitenack:** Yeah. It would probably be more on the data side, or the training data side. If you see an unexpected behavior in your autocomplete in your text editor - why was that unexpected? Did you give the model some type of weird, malformed input that caused it to just totally fly off the rails? So then it's like, "Okay, well why did that misbehave? Now we've got to add some things into our training data."

I definitely wanna get to this open source project, TextAttack, which I actually came across in one of my newsletters, I forget which one; one of the NLP newsletters mentioned it...

**Jack Morris:** Oh, cool.

**Daniel Whitenack:** I forget which one it was, I'll have to look up while we're talking. But yeah, it seems really cool. So was this open source project -- maybe you could talk a little bit about how that came about. Was it because you were in this workflow and you were trying to add adversarial examples, and there just wasn't tooling around it? Or how did that come about?

**Jack Morris:** Yeah, you kind of nailed it. I was working on things related to trying to define adversarial examples in NLP, and like I said, there's a lot of disagreement on what counts... And there has been a decent amount of research into this idea, but it's not very homogenous. It's actually pretty disorganized, I'd say. And a lot of people have really similar ideas, but they change one or two things \[unintelligible 00:27:44.10\] and all their code and projects are generally implemented in different places... So it's kind of a headache trying to reimplement results and compare things. But it turned out that a lot of the people that suggested NLP attacks were using a lot of the exact same components. One example is the Thesaurus I was talking about before. Have you all heard of GloVe word vectors?

**Daniel Whitenack:** \[28:14\] Yeah. From Stanford, right?

**Jack Morris:** Yeah, from Stanford, a few years ago. Those are still pretty much top of the line word vectors you can download. They're more commonly called word embeddings. You can download this big matrix that's assigned to 100,000 or a million words from English, and each one has their own word embedding... And it's a vector of dimensionality, maybe 300, and they're supposed to encapsulate a lot of information about English. So if you're training an NLP model, the initial layer is probably going to use an embedding similar to that, and GloVe is kind of like the just very accepted word vector a lot of people use, at least before people started using transformers and subwords.

But there's this paper that made these amendments to the GloVe vectors, so that they more directly encapsulate information from a Thesaurus. They're called counterfitted vectors. Not spelled like you would think, like counterfeited. Basically, if you compare two synonyms based on their counterfitted word embeddings, they should be very similar in terms of their angle, like cosine similarity, and antonyms should be very dissimilar. They should have angles close to 180 degrees.

So it's basically just GloVe vectors plus this pre-processing step that uses a big list of synonyms and a big list of antonyms to try and make those vectors closer and further apart... And I bring this up because a lot of people that have created systems that develop adversarial examples in NLP use this base layer of counterfitted vectors...

So if you take the example I talked about before, like "I love the movie Parasite" and you could look at the word vector, the counterfitted word embedding for "loved", and then look at its nearest neighbors in the counterfitted embedding space, and you might see a bunch of words that fit in the same context and are actually synonyms - "loved", "liked", "enjoyed" - and then once you start to deviate in terms of that angular similarity, then they get less and less similar... And there's some debate as to how similar do they have to be to be synonyms - like 0.9, or 0.95? Which is a whole other thing.

But all these attacks use those counterfitted word embeddings. Maybe over ten papers use counterfitted word embeddings and maybe some other components that are exactly the same to generate adversarial examples.

And even stepping back from that, the entire process for generating adversarial examples in NLP is very similar. By the process, I mean the process of taking a text input, so a sequence of words, and then producing some other sequence of words that generally fools the model. So taking maybe the sentiment classification example - you have an input that's classified as positive, and the process of finding an adversarial example would be "Which words can I substitute that will change this classification to negative?" So that turns it into a combinatorial search problem, and most people do it in the exact same way, and often use the same word vectors, and then change a few different things, and then release their attack. So our idea was if we break that process down into components, then we can construct the attacks from different papers based on these components.

**Chris Benson:** \[31:47\] You've definitely captured me in terms of interest in adversarial attacks... So let's say that I'm out there and I'm listening to this, or I've just come across TextAttack... Can you describe the library, let me know what I should know about it as a beginner coming into it that wants to use it, what are the goals that I should keep in mind that the project tackles, and are there any things that I should not address as well with this library, that I'd look elsewhere... So can you give me that beginner perspective?

**Jack Morris:** Yeah, absolutely. It might help for me to talk real quickly about that systemized \[unintelligible 00:32:25.03\] the components, and then I can explain the most common use cases... Because obviously, you can pull out any one of the components and use them for your own purposes. So one thing that we really focused on in TextAttack is trying to make it work out of the box. For example, those counterfitted word embeddings, instead of going to this website, downloading it, unzipping it, moving it, finding out how to load all the data, you just import TextAttack and do "textattack.the-class" and just initialize it and it will download everything for you... Which I think is really cool.

If you guys know about Hugging Face Transformers - a lot of the TextAttack stuff is built around transformers and tokenizers, and now this dataset loading library called nlp, which I'm very grateful for... We kind of tried to follow the same model. So instead of having all these files you manipulate yourself, you pretty much just reuse other people's, and it saves a lot of time.

The easiest or probably most common way that I would imagine people use TextAttack down the line is for things like that, for embeddings. Or another very common thing is sentence encodings, which is something I mentioned at the beginning of this talk. There's so many different methods for taking a sentence and encoding it into a fixed-length vector; whether they're very effective or not is a question, but they're useful in a lot of situations...

So one thing TextAttack has done is just sort of abstracted them into classes that work by themselves, so you could just -- for example, if you were doing some project... I don't know, you wanted to look at a bunch of Airbnb reviews and cluster them based on which ones were similar, you could just import TextAttack and then just call \[unintelligible 00:34:13.05\] and then give it the list, and it would just do it for you, which I think is pretty valuable.

I'll tell you what the components are very quickly. There's four, and we have our own names for them, which I think increases the learning curve a little bit... But there's some benefits, I think, to having around terminology. So it's all based around this idea of the NLP attack as a system, which is taking the text input, looking for changes you can make to it, making sure those changes are acceptable, and then whenever you have decided you fool the model, you stop.

The first component would be what we call the transformation, which is taking an input and changing some of the words or characters. One transformation would be substituting words with their counterfitted word embedding neighbors. Then once you do that transformation step, there's also this idea of a constraint, which is trying to make sure you didn't make any mistakes.

A common constraint is use a sentence encoder. A popular one is called the Universal Sentence Encoder, which is by some folks at Google... And you encode the original input and now your potential adversarial, and make sure that the sentence encoder also says they're very similar. It's basically like a sanity check to make sure you didn't change the meaning, or change too many characters, if that's what you decide...

And then there's two other components. So we had the transformation and the constraints... And you have to define your notion of whether you fooled the model or not. A common thing would just be change the classification output, or change the classification output to a specific class. Those would both be examples of what we call the goal function.

I think a really cool one that I wanna explore more in the future is with sequence to sequence models, like a machine translation model. Your goal might be to take the original output translation and change as many characters as possible.

\[36:14\] Say you're translating a sentence into French; you would have your original translation, and if you could substitute a word from the input with a synonym, and then it produced a translation that was totally different, even just in terms of characters, or its Blue score, that would be pretty telling, and probably very bad for your translation system... So that would be another goal function, would be trying to minimize the Blue score.

And then the last component is called the Search method. That's basically like if you have the input and you have all these transformations, how do you decide which one to keep? Which is important, because if you just tried all the combinations -- I mean, if you have an input of ten words and each word has 50 neighbors, you end up with 50 times 50 times 50 possible substitutions that you might wanna combine... So the space grows exponentially very quickly, so you have to come up with some sort of greedy, or approximate heuristics for doing that. That's what we call a Search method.

So you can combine those four things into an attack, in NLP what we call an attack, which is just a search for adversarial examples that meet the constraints and fool the model as defined by the goal function. But there's some really cool other things that come off of that. A big one that I've been talking to people about recently is data augmentation, which is also a very under-researched field in NLP; it's another thing that is pretty commonplace in vision, and almost everyone does it... You know, if you wanna train a state of the art vision model on CIFAR-10, or ImageNet, or some other dataset, you're gonna do some sort of augmentation to change and increase the size of your dataset.

With TextAttack, if you have this transformation which can find maybe semantics-preserving changes to your input, and you could add on constraints, which make sure that they preserve semantics, then you can end up with some pretty good tools for data augmentation, just from those two things. And since we're trying to implement more components, that would hopefully grow the list of potential augmentation modules as well. So yeah, that's something I'm really excited about, just data augmentation.

**Daniel Whitenack:** Yeah, that's really awesome. I know that even in speech it's fairly common to mask out parts of a spectogram, or speed up or slow down the audio, and that's a fairly common component... But in NLP it's pretty much -- most of the time it seems like people are talking about "Oh, we have this parallel data" or "We have this monolingual data", and that's all you have. You could augment with monolingual data, but this is another route to that, which is pretty cool.

In terms of the open source -- I mean, there's interest in the library... What is your vision for it going forward? You mentioned Hugging Face Transformers and modeling certain things after that... And I know one of the things that they talk about a lot is people contributing models to their model hub... And actually, it's good timing, because we had Sasha Rush from Hugging Face on; his episode was released this week. That's a great, great model. I could see similar things happening here, where there's a new type of perturbation or goal function or something, like you were saying, that people are exploring. Do you envision people having a way to contribute those models in, or what is your thought process around how you see the future of the library evolving?

**Jack Morris:** Yeah, that's a great question, and something we're still discussing and trying to figure out. We've written a lot of code, and there's a lot of different features that still could be connected. Obviously, once you work on a library for a while, there's just so many improvements you wanna make to it. I have this giant list that will take my whole life to finish...

**Daniel Whitenack:** \[40:17\] \[laughs\] Right.

**Jack Morris:** But I think I could probably break the potential users down into three groups, at least three main groups. The first one would be what I mentioned before, what I imagine would eventually be just the most common general use case - using the components, because they're easy to use. But a second one would probably be, like you said, people who wanna work on researching the robustness of the NLP model, so maybe coming up with new goal functions, or trying a new transformation.

For example, if you created a model that could paraphrase inputs -- it's a totally open problem in NLP, but even if you could do it a little bit well, I think that would be really interesting, taking that input sentence and just paraphrasing it, or paraphrasing its individual sentences and trying those different pieces and seeing which one fools the model. That would be a really cool thing for someone to research, and that would be just a new transformation, basically, that just takes an input and paraphrases it.

And then the third use case would probably be people who actually want the test and potentially improve their models using TextAttack. What we added this summer is what I've mentioned before, adversarial training based on just doing an attack and then increasing the size of the training set, and continuing training... So hopefully, people would be able to import TextAttack, and then test out the robustness of their maybe summarization model, or translation model, or whatever, and gets them insights into maybe how it's failing in the common cases, and hopefully how they can improve it.

**Chris Benson:** As you were talking there, I'm looking through the GitHub repo... And you really put it together well for someone like me who is new to this. You cover what it is, you note the Slack channel, help with setup, then you have a good section on usage and running attacks there... And then the thing I love the most - I love your section at the bottom on attack recipes.

**Jack Morris:** Oh, yeah...

**Chris Benson:** I was flipping through the links here - you're listing these different recipes for attack modes, and you link off to the paper or website where it shows what it is and how to do it in detail, and then with the section above it on usage it makes it really easy to just go ahead and give it a shot... So after we're done with the conversation, I have a feeling I'm gonna geek out on this for a little while, so thank you very much for that.

**Jack Morris:** Awesome.

**Chris Benson:** Do you envision more contributions being made to this attack recipe section?

**Jack Morris:** Yeah, I sure hope so, man... There's still papers that I think we could implement with pretty low effort, because they have a lot of overlap with the components we've already implemented.

Talking about vision, there are a few very common libraries in vision; one's called CleverHans. No other names are coming to mind, but I know there's one by IBM; one called FullBox... And those are pretty standard tools for researchers that are interested in the robustness of computer vision models. So not even that I'm super-convinced that TextAttack will be that tool, but I'm hoping that just putting everything in one place would make it a lot easier for people to actually do that research and make fair comparisons and advance the field... So hopefully getting people actually excited about it by making these things easy to use will then lend a hand to people actually contributing. That's the goal.

\[43:42\] We've been working on this since almost about a year ago, but it's only been open source since May, so hopefully that'll come with time... But yeah, right now I think one of the recipes was implemented by the authors, and then the rest we kind of did by hand...

**Daniel Whitenack:** That's awesome. I think this is so well set up, and a lot of thought has been put into it... I'm thinking back to the code that I wrote in academic research; the reason why it brought me back there is because you have a little octopus emoji on TextAttack, and the code that eventually I implemented my method in in my Ph.D. was called Octopus... But I don't know that anyone would be able to run my module of Octopus, just because it was nothing near well-documented like this, or anything like that... So I hope that you do get contributions.

As we end up here, I'm curious just as a last question - you've done this research, but you're also kind of launching into a new thing with your AI residency... I'm just kind of curious, from your perspective, jumping into the field at this point and this new position, what are you excited about in terms of the future of AI and what you wanna be involved with? What gets you excited?

**Jack Morris:** It's a great question, Daniel. I think the thing that motivates me the most is the potential for creating systems that actually have some basic knowledge of anything... Like, there's a subfield of NLP that calls itself natural language understanding (NLU), and that to me is the most applicable - or at least it seems so philosophically - to my everyday life, having systems that can actually do some kind of basic reasoning.

The problem with models like GPT-3 or BERT - we don't have to debate this right now - is that they have no common sense understanding of anything... At least that's my argument, I guess. But I think a tool like TextAttack exists to expose that, in a way - that even though it might seem like it's human in terms of understanding, because it can exceed the human score and all these different benchmarks, if you use TextAttack or something like that you can kind of gain some insight into why it might not actually understand anything at all.

So I'm not sure if deep learning is the full solution, but I think it's certainly part of it, and moving towards systems that have that type of true understanding of language is really exciting and compelling to me.

**Chris Benson:** That's a whole other episode that you're moving into right there. There's a lot of ground there... But I've gotta say, thank you so much for coming on the show. This was a fascinating conversation; it was a pleasure to have you on the show, Jack, and it was a pleasure to learn about TextAttack. We hope you'll come back sometime.

**Jack Morris:** Yeah, thanks, Chris. I hope so, too.

**Chris Benson:** Thank you very much.
