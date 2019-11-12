**Daniel Whitenack:** Welcome to another episode of Practical AI. I'm Daniel Whitenack, data scientist with SIL International, and I'm joined by my co-host, Chris Benson, who's a chief AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great today. How's it going, Daniel?

**Daniel Whitenack:** It's going good. It was a long weekend here in the U.S, a holiday weekend. I know you're a vegan, but I don't know if you barbecued anything, but that's kind of the tradition in the U.S. here on this weekend...

**Chris Benson:** Well, I didn't barbecue, but we ate far too much, so... Yes, definitely feeling that. I need to get out there and walk or run a bit to work off the calories.

**Daniel Whitenack:** Yeah, definitely. Well, we'll jump right into it. I'm really excited. A little bit ago -- I usually like to watch this publication called Distill; you can go to distill.pub, and it's a really great resource to learn about various topics in machine learning, and they have really great articles that give explanations on various topics, and state of the art research and all sorts of things... And recently I saw a great article on there about visualizing memorization in recurrent neural networks. The author of that article is with us here today, Andreas Madsen. Welcome, Andreas.

**Andreas Madsen:** Hello!

**Daniel Whitenack:** We're really excited to have you, and really excited to dig a little bit into RNNs and visualizing neural networks, and all of those things. If you could just give us a little bit of background about how you ended up in AI, and what you're doing now...

**Andreas Madsen:** Eight years ago, like many others, I read the book Programming Collective Intelligence; that was before university, so at that point I sort of knew what I wanted to do... I took mathematical engineering at the university. That was before machine learning became a thing. And now, after five years of education, I have my Masters degree in that.

\[00:04:09.15\] I've been doing freelancing and machine learning for like two years. I like to do more \[unintelligible 00:04:17.09\] is a little difficult for me right now, so what I'm doing right now is just freelance some months of the year, and then the rest I just do volunteer research with the university.

**Daniel Whitenack:** That's great. I know sometimes it's hard to navigate the roadmap into the specific area of AI that you're interested in, but it's awesome to see that you're contributing in a great way to the community, but also doing freelancing and all of that sort of stuff. How has freelancing as a machine learning and AI person - how has that been? What sort of insight can you give those out there that might be thinking about doing that sort of thing?

**Andreas Madsen:** I don't know if I would recommend it.

**Chris Benson:** \[laughs\] I love that.

**Andreas Madsen:** The thing about freelancing is your clients don't pay the hours, they pay the product. Deep learning is very much a research field right now, so it's very hard to guarantee anything, and they don't like that. So the typical solution - you sort of end up with solutions where you have a very good idea that this is gonna work, and that is sort of more statistical solutions, or scikit-learn solutions... Those more traditional solutions, rather than deep learning. It's just not that exciting for me, so that's why I like to do the research... But it's good for the money.

**Chris Benson:** I have a quick follow-up question about that before we dive fully into the questions. I've done freelancing in terms of being a programmer in the past, but never freelancing in this particular industry... And I was just curious - you mentioned paying by the project; do you do a fixed fee for a project, or do people pay you by the hour, in more of a traditional freelance way?

**Andreas Madsen:** I'm paid by the day, but they get really upset if they don't get a product -- if you come out with this and say "Okay, after three months, this was the contract, and I made this amazing deep learning system... Unfortunately it doesn't work, because it's deep learning and it's research. But I learned a lot, and I think next time is gonna be better..."

**Chris Benson:** \[laughs\] I totally understand what you're saying...

**Andreas Madsen:** That doesn't work, right? Because I learned something; they don't feel that has any value at all.

**Chris Benson:** I totally, totally get it.

**Daniel Whitenack:** It's probably hard to manage expectations too, when a client comes and they say "Oh, we've heard deep learning solves everything, so I'm assuming you'll be able to solve this problem with deep learning", and in the back of your mind you're thinking either "I'm not sure if it could be solved, or maybe just random forests with scikit-learn is probably better for these people...", it's always hard to crush those expectations.

**Andreas Madsen:** Exactly, yeah.

**Chris Benson:** And that's whether you're a freelancer or a permanent employee at a company. That's the same situation. To dive in, I just wanted to know how you originally got interested in the visualizing aspect of deep networks, and neural units specifically. What drew you into that particular subfield?

**Andreas Madsen:** \[00:07:49.23\] I've always sort of been interested in the designer space, and that kind of thing. Before I studied at university I did a lot of JavaScript and web development, that kind of thing... But what really kicked my interest was that I went to a conference some years ago, and there was this bank here in Denmark, and they said "Okay, we have this amazing machine learning model." And probably you should take that with a grain of salt, but they have this amazing machine learning model for predicting whether or not a client or a customer could pay back a loan. They were super-happy about this model; it outperformed typical advisors who had master bachelor's degree in finance, so that's great... But their really big challenge was actually that they couldn't communicate it. So in the end it's the advisor who has to make the decision should this customer get a loan or not... And this advisor had his own education that contradicts the machine learning model, so they didn't trust it. And actually, sometimes they'd just say "Okay, I'm not gonna listen to the machine learning model."

So that in itself is a problem, but also, even if you choose to listen to the machine learning model, how do you explain to the customer that they cannot get the loan? That's really upsetting for the customer, and certainly I don't want to live in this future where as AI becomes increasingly more integrated into our lives, maybe we get to the point where also these consequences happen and we cannot really fight against it; it's just sort of this machine learning model that ends up controlling our lives, right? Not because of some dystopian Skynet future, but just because we had learned that we should trust the machine learning model, and when we don't agree with it, that's just how it is.

**Chris Benson:** You kind of hit right off the bat as you were diving into this the issue around trust and issues around explainability, and then as a consequence of that, the necessity to communicate the value right off the bat.

**Andreas Madsen:** Exactly.

**Chris Benson:** That kind of drove you into this focus on visualizing, so that people could kind of get it?

**Andreas Madsen:** Yeah. I talked to them later, "Okay, how do you solve this issue?", and amazingly, they didn't take it seriously at all. They just said "Oh, we do some quantization, and with some colors, and some arrows", and that's all of it.

**Daniel Whitenack:** I definitely see it from that perspective that you guys were talking about, in terms of communicating the value and giving an interpretation... Do you think that there is value as well on the AI practitioner side, as far as understanding the types of things we're doing when we're training a neural network? In addition to communicating those results, what do you think are the benefits on the practitioner's side?

**Andreas Madsen:** Absolutely. I think this is actually what my Distill publication is about... Because we create all these models here, and then we benchmark them on the same dataset, and then we clap our hands when we get 0.1% better performance, right? But we don't really have a very good understanding about what changed.

For example, in my publication I show that I have two models, and they get pretty much the same performance, but actually one model is really good at long-term contextual understanding, and one model is really good at short-term contextual understanding. And if you just always look at the accuracy scores, or cross entropy loss, or whatever, you don't get into that. So I think it's really fundamental and necessary to do good science, to look into these things and not just say "Okay, we worked for half a year, we got 1% better performance. That's it." I think you need to look into like "Where did this 1% better performance come from? Is it a place that is actually relevant for the task at hand?"

**Chris Benson:** \[00:12:13.11\] How do you accomplish that in the sense of what tools are you using to visualize neural networks in the way that you're doing? Obviously, there are things we're familiar with, like TensorBoard and such... And kind of as an addendum to that, how does design and understand user interactivity play into your ability to do that?

**Andreas Madsen:** I think for me TensorBoard is a lot more about debugging... And it's really difficult to answer the other question, because fundamentally it's about how do we understand how our deep learning model works; that is something that's really complicated. It's like, you take a brain, you slice it up and you look at the individual neurons, and somehow you have to ask this person "What is your favorite color?", just by looking at the neurons. I don't think we can imagine that technology in the next ten years, when it comes to humans. It's the same kind of complexity that we have when working with these deep learning models.

You somehow have to aggregate all this information in some smart way, and that in itself is just not enough. I think there's three components to really understand something. One is you need a dataset that you can understand. For example, in natural language processing we use Chinese poetry generation. It's really hard to understand how well it creates Chinese poetry, right?

**Daniel Whitenack:** I certainly couldn't understand that.

**Andreas Madsen:** I think the overlap between Chinese poetry writers and machine learning enthusiasts is probably quite small...

**Chris Benson:** \[laughs\] That's true.

**Daniel Whitenack:** We need more of them.

**Andreas Madsen:** Yeah... \[laughs\]

**Daniel Whitenack:** Maybe just a follow-up on that - you're talking about as you put together your dataset, as you use these models, there's a need to visualize and understand what's going on at a lower level... Where at the workflow of being an AI practitioner -- like, if I'm approaching a problem, where do you think I need to be thinking about these things on a little bit deeper level? Is it just at the learning time? Like, when I learn about RNNs, then I need to learn about these things and then move on... Or is there an ongoing need to run these sorts of visualizations, or maybe more controlled experiments, to understand at a deeper level or at a more intuitive level what's happening?

**Andreas Madsen:** I think once you have your model and you think that it works okay, look into what does it actually do. It's really hard as a debugging tool to use this kind of visualization, because if you have a model that doesn't really work that well, you sort of just get nonsense out of your visualization.

In the end, you have a nice model, it works, and you want to show maybe it's better than this other model... Okay, compare them up against the same kind of visualization. Does it show what you would expect?

**Chris Benson:** As you're going through this process, you kind of mentioned earlier that prior to getting into the field that you had used things like web development tools, and you were using JavaScript and such... Are those skills that you developed ahead of time playing in to when you are actually producing a visualization? Are you using those kinds of tools? Which ones? Are there things you could point to somebody else who's interested in this subfield of visualizing, and you would say "Hey, go use tools A, B and C, and this is the workflow through it"? Is there something you could point to in that way?

**Andreas Madsen:** \[00:16:20.12\] No... I mean, there's some tools... LSTMVis I think is a tool that I've seen some use. All the tools you're seeing in the Distill article - I just programmed them from scratch. I used \[unintelligible 00:16:36.05\] for visualization, which basically gives you nothing but a few axes and some data management tools.

Like I said, there's these three points. One is the dataset, and then the other part is having a good visualization... But then the third really important part is having the feedback loop, where you can very quickly ask a question - or in this case you hover over a character - and then you get some sort of visual feedback. And because this is an interactive part, you get this sort of feedback loop, and that is really what generates your intuitive understanding. You don't need to use web development tools for this; I'm sure you can use a tool in pure Python. You can do some pretty funny things in Matplotlib.

**Chris Benson:** Yup, absolutely.

**Andreas Madsen:** ...but definitely need this kind of interactive piece here in order to get this feedback loop. This is really what's fundamentally creating your intuitive understanding, I think.

**Break:** \[00:17:48.25\]

**Daniel Whitenack:** Andreas, when you were talking about the type of tooling that you're using, you were mentioning that interactivity is really a key piece of this puzzle in developing good visualizations of complicated things like neural networks. I know that that interactivity and interactive visual forward sort of idea is behind Distill publication that we've been talking about, so... Could you describe a little bit how you got interested in this Distill publication, maybe what it is, and maybe orient people to how it's different from a normal academic-type journal article?

**Andreas Madsen:** No academic journals... It is a PDF. Why is it a PDF? It's because we used to print everything. So I think Distill had this interesting thought that we really want to explain and visualize things better, and how about we don't take the PDF format, but we use the interactive capabilities of the web platform in order to visualize and explain on a completely different level than what you can normally do in a PDF document. I think that's the core philosophy of Distill.

**Chris Benson:** \[00:20:06.14\] So if you're out there doing some work in that field, what does it take to get published on that? How do you get into the process, and how does it differ from, say, doing academic publishing?

**Andreas Madsen:** Well, \[unintelligible 00:20:20.01\] organization, so I think you have to be a patient person. This one took almost a year (I will say 8 months) from when I finished writing it to it getting published. That part is just a lot of feedback that you get from Ludwig and Chris, who run Distill. They do this on \[unintelligible 00:20:45.22\]. So you get amazing feedback from them, almost on a \[unintelligible 00:20:52.17\] level, but it takes a long time and it can go months where you don't get anything, and you have no idea whether you're gonna get published or not.

**Chris Benson:** Considering how fast the field is moving, does that cause any kind of concern for you, just going that length of time, considering that somebody else may publish something similar to what you're working on in that timeframe?

**Andreas Madsen:** Not in that field, no.

**Chris Benson:** Gotcha.

**Andreas Madsen:** Visualization - no. Not a lot of people do that. I know it's something they want to improve; they want to get it down to three months, and I think they're gonna get there with some more help. So it's not something I would worry so much about.

In terms of how you get into it - you just go to the website of their publication and you send in your thing. But just know they don't do anything; all these amazing visualizations that you see is something you create yourself.

**Daniel Whitenack:** It sounds like maybe there's a need for more people doing this... More people doing this, and also developing good tools around it, since there is a fairly small group of people doing this.

So your Distill publication was specifically focused on recurrent neural networks and recurrent units, so LSTMs and other things... On the podcast we've talked about a lot of different neural network architectures, so maybe you could just give us a brief crash course in recurrent neural networks, just a brief description on what those are... Because I don't think we've actually done that on this show yet. So in relation to maybe what we would consider a "basic neural network", so a fully connected neural network where inputs come in, and then they're added together, and an activation function is applied, and then they're passed off to the next layer where the same thing happens, and they eventually get to the other side of the neural network as output, how do recurrent neural networks, the units that are used in those neural networks - how do they differ from the basic fully connected situation?

**Andreas Madsen:** Like you said, in a typical neural network you have some sort of fixed input. You have maybe ten input elements, or maybe a picture of some fixed size, and you pass this through your network and you get an output. That doesn't really apply that well to text, or audio for example, because sentences have a different number of characters, a different number of words, so you don't have the same number of input values really every time. So instead you do this as a sequence of input vectors, and you just start from the first part of the sequence. It could be the first word. You describe that for some input; maybe you have a really big dictionary where you just assign one number to every single word.

\[00:24:14.13\] Then you pass this through your network, and then you go to the next word in your sequence, and you pass this through... But how do you then combine that with the previous word? So you just take every intermediate output that you have in your network and you concatenate that with every intermediate output for this next word here. So by concatenating what you got from the previous word with this word here, you can really sort of in theory memorize something from the entire sequence.

**Daniel Whitenack:** Let's say if we have the example of words - word one comes in, but then when we process word two, we process word two along with something that was output the first time? Is that the basic flow?

**Andreas Madsen:** Yeah, that's the basic flow. And then sort of your intuitive idea might be "Okay, as I go through this sequence of characters, it would be likely to forget something from the very beginning." This is what's called the vanishing gradient problem. That is solved through this thing called LSTM, for example...

**Chris Benson:** We've mentioned LSTMs several times in the podcast, but for those who aren't familiar, can you just quickly define that, a quick one-off, and then continue your thought?

**Andreas Madsen:** Yeah, so LSTM is basically just trying to simulate a memory cell in a computer. So it has the capacity to memorize something for a long period of time. That's how I would describe it. Similarly, we have the GRU, which is just a different variation of that, but it uses less memory, let's say. Like physical memory.

**Daniel Whitenack:** Yeah, so those long short-term memory, so the LSTM, and the gated recurrent units (GRUs) you talk about those a lot in -- I mean, that's part of the focus of your publication, right?

**Andreas Madsen:** Yeah, because we resolve the same issue, just in different ways... To solve this vanishing gradient issue. Forgetting in long sequences, right?

**Chris Benson:** Just to position it, those are specific types of recurrent neural networks, right?

**Andreas Madsen:** They're specific components in recurrent neural networks.

**Chris Benson:** Yeah, fair enough.

**Daniel Whitenack:** Yeah, specific units of it. So when you're saying the vanishing gradient problem, and then you also mention memorization in recurrent neural networks - are we talking about the same thing, or are those different?

**Andreas Madsen:** Well, they're part of the same coin, as you say. If you have a vanishing gradient problem, that certainly means that you cannot memorize. But you can have issues with memorization even if you theoretically don't have a vanishing gradient problem.

For example, what we see in this publication I read and write is basically just order complete, like you have on your phone. So as you type, it sort of catches on from the previous words that you put in, and it tries to guess the next word. Or if you're in this word here, you put in a few characters, then it might just use the last few characters instead of the previous words to guess what it is that you want to type.

\[00:27:57.26\] Here we sort of have two different concepts. One is long-term memorization, where we use previous words, and short-term memorization, where we just use the previous characters from the same word. What we're seeing - and I think this is very specific to your dataset, but at least for this application and dataset, the LSTM shows that it's better at short-term memorization, where the GRU shows it's better at long-term memorization. But if you look into the theory, there's no reason for that. They both solve the vanishing gradient problem in their own ways.

**Chris Benson:** So where did that leave you...? It sounds like that's kind of the summary of what you took away from that. Recognizing that you had the LSTM architecture was great for that short-term character-by-character approach, whereas the GRU was better at word-by-word. Presumably in an architecture where you do some combinations, and stuff, what learnings did you take away, that you would use in things going forward with that?

**Andreas Madsen:** Right. I think the wrong learning is to say "Okay, GRU is better at long-term memorization", because I don't think that's the case. But if you just look at, for example, the accuracy or the cross entropy, you get almost the same value. But we see such a huge difference in how they actually behave. LSTM is really good at the short-term \[unintelligible 00:29:34.13\] so it gets the score from that, and the GRU gets its score from the long-term.

**Chris Benson:** So how would you use that? If you were going to go into your next project, how would that influence the next thing that you're gonna do in this space?

**Andreas Madsen:** Right. Let's say I have a customer and they want an order complete function, or whatever; it might be worth to ask them "Okay, what is important for you? Is it that it understands the full context, or is that it understands the locality?" Of course, it would be nice to get the best of both worlds, and probably you can do that if you do some more advanced stuff, but it's not always that you have the data in order to make that choice.

**Daniel Whitenack:** I don't wanna put words in your mouth, so give me your thought on this, but it seems like recently people like Allen AI Institute, or spaCy, or even Open AI coming out with GPT-2, and all of these text models, it seems like there is a trend to show visually things like co-reference and visual examples of how BERT, for example, is embedding words, and all of these different visual ways. It seems like people are really seeking after visual tools that they can utilize for example on their next BERT project, where they're utilizing BERT; they wanna have a tool in their toolset to visualize the embeddings...

Or in this case maybe you're using an RNN model - maybe for that particular dataset you do try a bunch of different models, but then you kind of have this visualization tool in your toolbox to be able to understand for this particular problem what are the memorization implications of these different architectures that I'm trying. Would that be a good way to utilize and maybe leverage some of the stuff that you've done, and say "This is a tool that I can use to visualize these sorts of memory issues for my particular problem"?

**Andreas Madsen:** \[00:31:57.27\] Yeah, I think what's really important for me in this publication was to create a tool that is so general that you can really compare many different kinds of architectures. Those that have attention, or is it bidirectional, right? That was really what was important for me here, because I created a really strong scientific tool for comparing different models.

In some cases, you just look at an attention mechanism in a network, and that is a different way of visualizing; or you look at embeddings, as you talked about... This is what I would call internal visualization, where what I've done is what I would call external visualization, because the sort of visualization strategy I have only looks at the output with respect to the input. It doesn't get anything in the middle. I think there's space for both things... I think the input/out part, the not-intermediate part is perhaps mostly for arguing or explaining your model, and the intermediate part is really for validating your model, so that they come up with something meaningful.

**Break:** \[00:33:25.15\]

**Chris Benson:** Andreas, how did you get interested into diving into unique neural units? I know you've studied some different types of neural units such as sparsemax, and NALU, and things like that. Could you tell us how you got into it?

**Andreas Madsen:** I just got into it for my university, and I like these kind of very fundamental things, where we can actually understand them. If you have a 30-layer network, it can be really hard to understand how it works. But if you are focused on a specific unit and try to really understand that, that can give you a lot. For example, the sparsemax. Most of you are probably familiar with the softmax; the sparsemax is just a version of that that's capable of predicting 0 probability or 1 probability. That can also be a great tool for understanding something, because you get a much higher contrast in your visualizations.

**Daniel Whitenack:** Awesome. In light of these fundamental things that you like exploring, what are you wanting to explore next? Do you have any interesting, new neural units, or anything that you're trying to visualize right now?

**Andreas Madsen:** I don't know so much about visualization, but I've done a lot of work in this NALU, that is really just trying to do mathematical operations like addition and multiplication, and learn that. They have this gating mechanism in NALU that cannot choose addition or multiplication, and it doesn't work at all. But I think it's a really interesting concept, and I think that's something I would like to look more into - these fundamental gating mechanisms that we have, LSTM and GRU, and also these more specialized things such as NALU - what is it really that drives them? What is it really that makes them choose either this or that?

**Daniel Whitenack:** Could you maybe dig into that a little bit, in terms of what you mean by this gating mechanism? You're saying this NALU, which is the Neural Arithmetic Logic Unit, I think, if I have that right... It kind of has a gate between the (like you were saying) addition or multiplication. What does that gating mean, and why would it be useful?

**Andreas Madsen:** The idea is that you have some kind of physical model, but you don't know what the physical model is. Physical models typically are composed of additions and multiplications, and so you like to learn what is the appropriate order of addition and multiplications that needs to be performed.

**Daniel Whitenack:** Gotcha. So in the most simple of neural networks that we're thinking about maybe you have one operation that's repeated over and over in different nodes of the network. Here you're saying "Well, I don't know exactly what combination of operations is the best combination, so I'm going to have a mechanism to switch between them." Is that right?

**Andreas Madsen:** Yeah. In theory, you could go crazy. You could also have something that could switch between LSTM and GRU. It's a bit crazy perhaps, but a gating mechanism is really just something that can switch either completely or partially between two very different things.

What I've done in the last couple of months of my research here is discover that in order to do this kind of switch, they need to actually be quite similar. In LSTM the different parts you switch between are very similar, but in NALU one part is addition and one part is multiplication, with completely different behaviors, and that actually makes it a really big challenge.

**Chris Benson:** If you're listening to this and you're getting interested in unique neural units and you wanna dive into it yourself, or maybe even get ambitious and design some of your own or something, do you have any tips for people on how to explore this particular area?

**Andreas Madsen:** \[00:39:42.12\] I think there's always a few things to consider when designing a custom neural unit. One is the gradients. You can maybe come up with something, but then the gradients are zero in many cases; that's not great. And the other part is how are you gonna initialize the weights. Those are two quite big challenges, and something that you should probably think about when designing these units. Beyond that, do whatever you like...

**Daniel Whitenack:** What have been useful ways for you to understand some of the best ways to initialize weights, and those sorts of things? Has it mostly been trial and error, or is there any systematic way you can go about exploring the certain ways to initialize, and best ways to do that? I know that can be a particularly challenging element of this.

**Andreas Madsen:** About ten pages of probability, I would say. \[laughter\] That's really the strategy. Sometimes you're stuck and you don't really know how to calculate the expectation or the variance of this particular structure. In that case, Taylor approximations can be really nice. You can go on Wikipedia and search for Taylor approximation of moments. So that can be quite helpful to at least come up with some reasonable initialization. Beyond that, just run your model quite a lot of times, see if the initialization scheme converges consistently.

**Daniel Whitenack:** I have a follow-up from that, and I really like what you're saying, and I also find it encouraging that you've found your way into this, and are publishing in really great places like Distill, and you kind of developed this passion while you were doing web development and other things... I imagine that there's some listeners out there that are maybe doing web development things right now, and have a really big interest in AI, but maybe are somewhat frightened by Taylor approximation of moments, and other things like this... I think it's encouraging, first of all, just to see the great things that you're doing, and that you came from that background and you have that passion, and that's really driven you to do these things... I'm just wondering, is there any encouragement that you can give to those sorts of people, or resources that have been helpful for you along the way, and going from a different sort of engineering and getting interested in AI to doing some of this more detailed work?

**Andreas Madsen:** \[00:42:41.25\] Between the web development and now, I had like five years of mathematical education, right? So that's certainly a journey that you have to take. I think if you want encouragement, you don't need that kind of mathematical education just to do some neural networks, but if you really want to get into that kind of really difficult stuff and publish, it's a long journey. Just be patient, I think.

**Daniel Whitenack:** I think you obviously have a passion for these things, and that can really drive you forward. I think these certain mathematical pieces aren't out of people's grasp, but it does take some work to put the time in, and I know continually as new topics come out, and all of those things, I have a whole list of things that I need to brush up on and learn more about... And I imagine if you want to get into AI, it's kind of like a life-long thing of learning about all of these sorts of random things; I don't know if you can sympathize with that, Chris, but that's certainly how I felt.

**Chris Benson:** I can... Every time I knock one thing off my list, by the time I look up again, there's three more to jump into. For me at least, the question is trying to figure out how to shortcut as much as I can to get where it is that I wanna go in particular.

**Andreas Madsen:** Right.

**Daniel Whitenack:** Well, thank you so much for taking the time to walk us through some of these things. We're definitely going to post the link to your Distill publication in our show notes, so everyone can read the great article there. Any other ways that we can connect people to you on the web, or other things you'd like to point to?

**Andreas Madsen:** You can find me on Twitter. I still have my private messages open... @andreas\_madsen. And I'm also on GitHub as AndreasMadsen.

**Daniel Whitenack:** Awesome. Well, thank you so much. This has been really a great conversation, and I know I've learned a lot. I really appreciate you taking the time. Thanks for joining us.

**Andreas Madsen:** Yeah, thank you. It was great.
