**Adam Stacoviak:** Well, everyone, we have a treat. We're here with the CTO of Amazon. My gosh, talking about predictions... Every year you have five; they mostly come somewhat true in a couple of years, so you're pretty accurate, Werner... Welcome to the show again. The last time you were here was for the NoSQL Smackdown back about 12 years ago, Jerod, 10 years ago was it?

**Jerod Santo:** Forever ago. Episode 18.

**Adam Stacoviak:** Back when NoSQL was cool, fresh and burgeoning... Now it's ubiquitous and everywhere, and I guess still cool... Coolish. Coolish.

**Werner Vogels:** Engineering has come a long way since. I think the first NoSQL tools were really the first tools. Now if you look at DynamoDB, if you look at Mongo, these are super-robust, highly scalable tools, where everybody can build a business on.

**Adam Stacoviak:** Come a long way. I think it was burgeoning. DynamoDB was coming out then, it was fresh and brand new... I guess as CTO, you probably architected a lot of that stuff. What do you do as part of your role? What is your role maybe then, 15 years ago, and then how is it now?

**Werner Vogels:** So first of all, it's 21 years now, so that's a bit... And there is a predecessor to DynamoDB. That's Dynamo. And one of the things - when I joined Amazon, I joined as what was called a director of systems research. The idea was to bring... Let me go a little bit back. Think about 1994, when Jeff Bezos starts thinking about sort of the internet, and he starts a bookshop. He doesn't really want to start a bookshop. He's just fascinated by the internet. What are the things that you can do online, that you will never be able to do in real life? And he just picks a bookshop. A good bookshop has 40,000 titles in stock, yet there's millions of books out there. So he thinks you could do that online. But there is no book. There is no software that you can buy. There is no book that says "And here is an e-commerce operation." The word e-commerce doesn't exist yet. So everything that the Amazon engineers had to do to build Amazon was to invent everything themselves. Because the kind of technology that they could buy couldn't operate at that scale. We've had a number of bloody noses because of that.

So when I joined Amazon, engineers at Amazon were brilliant at scaling, but from a, let's say, practical, lots of scars kind of approach. And Jeff hoped that by bringing a former academic, you get some more robustness. You get a better fundamental approach to scale, and reliability, and things like that. And we did lots of large projects, around removing all single points of failures, or how to best measure -- how do you measure, what does it mean to measure? If 50% latency on your webpage means nothing... well, it means that 50% of your customers are getting a worse experience. You need to know how much worse.

If I think about CTOs, there's sort of four or five different types. And there's no real well-developed, well-described one. First of all, there's the data center manager. He reports up to the CIO. Then you have the CTO, that is the second person in the startup, often the co-founder, the first coder... And then you have the big thinker, sort of the role that I got when I came into Amazon; sort of like look at the whole picture, what other kinds of things we need to do. But then, when we started doing AWS, your world changes. You go from an internal-focused CTO to an external-focused CTO. And I think Scott Dietzen, who was at BA, I think it was that at that time, he called it really an external technologist. The ability to talk to your customers, look at "How are they using my products?" and "What are the problems that I see with 10, 20, 100 of my customers, that they may not see as a single problem themselves, but if I can build a tool for that, I can really help my customers?"

\[08:15\] So your world changes from being purely internal to being external, and sort of bringing back things into -- and then over time, I've become more and more interested in those organizations, both profit and non-profit, that try to solve hard problems. And with hard problems, I mean hard human problems.

The United Nations expects that by 2050, we have 2 billion more people. I mean, how are we going to feed them? How are we going to make sure they have an economic future? How are we going to make sure they have healthcare? Those kinds of problems are the ones that I mostly focus on today. On one hand - you know, by the way, we build technology at Amazon, but also, by looking for those often young businesses, and how can we support them? Take, for example, the ocean cleanup project. It's a massive problem that the Grand Ocean garbage patch is full of fishnets, and plastics, and there's about 30 rivers that sort of contribute mostly to that. So these guys have built plastic with GPS in them, threw them in the river and see them where they end up. Or they have these AI cameras on boats, to first see where do these boats go, but secondly, also what are the things that they're seeing? And so working with those kind of customers is extremely satisfying, because we're solving actually real human problems. We're not building spam filters.

**Jerod Santo:** Well, 21 years is a long time... And there's that old quote, "The best way to predict the future is to create it." You've spent 21 years with your teams, creating in many ways the future that we're currently living in, but you're also out there predicting it. This is the fifth year perhaps you're writing these predictions... You have five of them, and they're fascinating. I agree with most of them. The companionship one I'm skeptical of, but I'd love to hear your full case for us here. But why write these? Why predict the future in these ways, and continue to do so?

**Werner Vogels:** There's a long history by large technology companies, and if you think about IBMs and the locals and whatever, to sort of -- or McKinsey, or whatever, the consulting companies... About kind of predicting the future. And always when I read them, I always felt that they were a bit self-serving. And the things that I saw in the real world were different. I see significant human problems, and some of them are our own nature, but quite a few are caused by technology, or the way that we use technology. There's a leadership principle at Amazon, "With success and scale comes broad responsibility." That means you don't only have a responsibility towards your shareholders to make money, you also need to serve your customers... But at AWS, of course, that is builders. How can we help builders best?

\[12:02\] And then, you know, I write these predictions about things I see around me. I have the fortune to travel the world. I was just in - or just... In spring I was in Sub-Saharan Africa. So Nigeria, Rwanda, Kenya. Now in Kenya, we were in Nairobi, and of course, you stay in the center of Nairobi; beautiful buildings, whatever. You drive 15 minutes and you see how the real Kenyans live. And if you think how they work, most of them are day laborers. That means that they go to the bank, they get $2, they buy something, they try to sell it, they bring the $2 back, and hope to have 40 cents left to buy food. They probably have that, but then they don't have money left to cook it. Why? Because these big canisters, these butane canisters cost $10, and they don't have $10.

And so there's a young company called Coco Networks, that built a sort of ATM where you can go with a canister, you plop the canister in and you say "Give me 15 cents of gas." And then you can take that home, you can cook your food. Now, this is not a world shocking problem, but it is solving really hard problems that people have. And those kinds of companies are really the ones that -- and those kinds of problems are often kind of the things that I like to service through the predictions. And there are things every year... I mean, I could have done 10 predictions.

**Adam Stacoviak:** You could have, yeah.

**Werner Vogels:** but that doesn't work that fairly well.

**Jerod Santo:** \[laughs\] Five's the magic number...

**Adam Stacoviak:** Three's the magic number, but five's better.

**Werner Vogels:** yeah, but... Was it two years ago? An example, a topic that has become more and more openly discussable is menopause for women. It's a major problem for them. But even mothers don't talk to their daughters about it. However, that is slowly changing. What kind of things do we see in the startup community that are trying to build - whether it's technology products, or whether it's medicine, or whatever, to solve those kinds problems. So I also try to talk a little bit about things that people normally find a bit harder to talk about.

**Jerod Santo:** Well, let's talk about one. Companionship, loneliness... Robots. I do not have any disagreement whatsoever with your casting of the problem, which is that loneliness is on the rise, especially amongst elderly, but even across all demographics we see an increase in loneliness, which has all kinds of health and mental wellness problems... It's just overall bad. But you seem optimistic, because we have a new swath of robotic companions that are coming out, and...

**Werner Vogels:** Well, it's one of these problems... So I did this documentary series called "Now Go Build", a TV series. Probably two, three years ago, I was in Japan for that, and that's where I first really dove deep in this particular topic. So Japan really was a society where kids take care of the elderly. The grandparents live with the grandkids, and the kids. And that was normal. But the younger kids want to start making career, and there is a clear shift in Japanese society happening, where the elderly are no longer taken care of by the younger people. And as such - you know, that's a shocker; not for the young kids. It's a shocker for the old people. They're really on their own... And indeed, I think that there are a lot of technology solutions possible to help these people.

\[16:34\] One of the things -- and loneliness is something we'll get to, but anything we can do as technologists to keep people longer out of hospitals, or care homes, or whatever, the better it is. If that means that -- a company in Japan that I met called Z-Works - they try to do all these innovations around these elderly people, to help them. Make in your mattress a little bit of a sensitivity pad, and maybe in the middle of the night you go to the toilet, and you don't come back within 15 minutes - the alarm goes off. And this doesn't seem like a world-shocking kind of revolutions, but it does mean that people can stay independent longer. And then they don't feel that old... Let's put it like that.

Well, I think more and more people -- I mean, becoming 100 years old is actually not that strange anymore, is it? And getting to that particular age. Many of these people may have lost their partner if they had a partner. Or live far away from their other family. I mean, especially in the U.S. -- I mean, after high school you probably move away from where you lived, where you grew up. You go to a college somewhere in upstate New York, you go to work in California, and people are not close anymore. That truly is a loneliness epidemic. So what can we do?

And I love the work that is happening around sort of companion robots. Why? Because I always thought that people would treat a robot like a piece of metal mechanics, you know? It turns out it's not at all the case. They treat them like pets. Really. Kate Darling, MIT - she's done all the research around here. I can tell you, it's absolutely amazing stories about how people get attached to their devices. The story, I think, is also in the predictions... 80% of the people that have a Roomba, the cleaner in the house, have given it a name. And one of the stories that Roomba tells, like "Well, one sent an old Roomba back", because it needed to be repaired. And they look at it, and they tell the customer, "You know what, we'll just give you a new one." And they say "No, no, no, no, no, no. We want \[unintelligible 00:19:42.26\] back."

**Jerod Santo:** \[laughs\] Really? They want the old one, because they're attached to it.

**Werner Vogels:** \[19:51\] Or Kate tells this story where at some moment she divides two groups of people, and each get a dinosaur, a sort of baby dinosaur. And they really fall in love with it, they give it a name, they play with it, blah, blah, blah... And then she gives them a hammer, and she tells them "Kill the dinosaur." Nobody in the group will take the hammer and kill the dinosaur. They have no problem though going to the other group and kill their dinosaur.

So why do I tell these stories? It's that while these things are technology, we treat them as living beings. And especially, I've always -- of course, because before I was in computer science I was in healthcare, the application of these kind of tools, toys in hospitals are incredible. If you're a young kid, a doctor is someone that is tall, and I don't know, dangerous, or whatever you want to think. But for example, there's this Huggable robot - it's a small, green thing, with a nice snout, and it talks to the kid, and whatever... Kids with a Huggable have no problem talking to a doctor, because they have their mate with them.

And so those kind of things, I think, are crucial for us as technologists to think about. We see a problem, not necessarily a problem that is going to make us a ton of money, but we see a problem that is really important for people's psyche, for people's feelings, for loneliness... Who wants to be lonely? Nobody. And if we can't do this through pure social interaction, what's the next best thing? We have - or Amazon has - Astro, but there's more robots like Astro. And they'll just run, they'll go search for you through the house, and ask you if you've taken your medicine. Families or people that have these kind of robots - their medicine taking goes up 80%. Why? Because they're being continuously remembered.

And actually, what way predates this is early on when we launched Alexa, I got a story from a man who was suffering from early dementia. And he knew what was coming.

**Jerod Santo:** Speaking of Alexa...

**Werner Vogels:** That's her.

**Jerod Santo:** And there she is. \[laughs\]

**Adam Stacoviak:** That's her.

**Werner Vogels:** You can't help me with that. No, no, no... \[laughter\] So the only thing he had to do was put a post-it note on the devices that's called Alexa. Because one of the things that he'd noticed was that during the day his caregivers were getting more and more irritated with him. Why? Because he was asking the same thing over and over and over again. "What day is it today? What day is it today?" Because he had completely forgotten. And the thing with that, let's say, voice assistant was that you could ask it the same thing, over and over again. And it would never get angry. It would always be happy, and it would always give the same answer.

So there are technologies that we can develop to help people have a good life. And I think if you can do that... Spam filters - fine.

**Adam Stacoviak:** \[24:13\] Sure. Yeah, right? What I find interesting with this experiment is - and something I don't think I heard you say here or in your post - we're actually, to some degree, programmed. I mean, I know I had a lovey of sorts when I grew up as a child. I know that I've got two boys that are growing up, and they both have a thing that they were given at a very young age, that is not technology, but it's about the best abstraction you can get. And a lot of people have had it in the last 50 years, even 200 years, or even more, is this idea of a companion that you draw an affinity to. Now, this thing does not talk about medicine, obviously, it does not remind them about things, but it's this object that they attach to and cling to.

**Werner Vogels:** I mean, how many kids don't you see walk around with a little rabbit after 10 years?

**Adam Stacoviak:** And you mentioned the dinosaur... I mean, my kids would no way ever destroy that thing. It's their lovey, it's their prized friend/companion that has no humanity whatsoever, no ability to speak, no true reciprocal affection even, but it's theirs and it has been theirs, and it's their affection point, that is uniquely theirs and only theirs. So even from young age they've had this companion... So it doesn't surprise me that your prediction is maybe that as an antidote to loneliness.

**Werner Vogels:** Well, I don't think it's an \[unintelligible 00:25:47.02\] to loneliness. It is an assistant.

**Adam Stacoviak:** I said, antidote.

**Werner Vogels:** But people are still lonely.

**Jerod Santo:** Yeah.

**Werner Vogels:** I have seen elderly ladies with a fake cat next to them, stroking the cat, and the cat meows... And the elderly lady is extremely happy about that. And so why not? And the fact that we have had our phase in our existence where we think "Oh no, all relationships need to be human to human..." Well, maybe not. Maybe there is more to that... Especially because we are getting older. I mean, look at all the baby boomers. Everybody over 65 or over 70 - there's a very large group of people that is growing older and older, and come with a new set of problems. Can we solve those as technologies? Can we make a contribution to that? That would be great. Because I think building technology is cool, but helping people is much better than that.

**Break**: \[27:13\]

**Jerod Santo:** I think we leave it right there and turn to Adam's favorite topic, quantum. Quantum. Quantum. I'll say it three times.

**Adam Stacoviak:** Thank you, Jerod.

**Jerod Santo:** The headline for this particular prediction is "Quantum safe becomes the only safe." Now, we've covered quantum computing here in the past, and it's always been right around the corner... It seems like it's always around the corner... But your contention, with some data to back it up, is that corner is getting closer and closer, and it's maybe not five years away, like it always has been, or 18 months away... It's actually -- there's things happening, and it's like, we're getting there. We're getting there. Can you tell us more?

**Werner Vogels:** The most important thing is that I don't necessarily want to put a timeline on it.

**Jerod Santo:** Sure.

**Werner Vogels:** \[unintelligible 00:29:38.00\] two years ago, three years ago I think I said 5 to 10... I think five is now more realistic... But I've seen a number of problems arising that I think we need to be aware of and take action on before that. I mean, we were \[unintelligible 00:30:00.21\] with Caltech, which is an institute around quantum... And I see different institutions making massive progress in terms of error correction, networks, things like that, that actually make me believe that it's no longer - how should I say - a vision. It's an execution now. Now it becomes an iterative process in improving the technology that we have created step by step, until it becomes workable.

Now, there is a ton of other problems to solve. How do you program these beasts? I mean, how do you do that? How do you do with something that is not necessarily 100% reliable? So how do you do that? So there's a ton of things that still have to be solved before we have production quantum machinery. But one of the things that these things -- and they won't solve necessarily new problems; they'll solve existing problems much faster. Things that would now take a thousand years in compute, will then take a year, or six months, or two months. That's the premise of quantum. Well, the one thing that we'll then be able to do really, really, really, really fast is decrypt. And so anything that is, let's say, elliptic, or the usual RSA-encrypted kind of things, that are perfectly fine now, because it will take way too long to decrypt, then will be decrypted with a snap of your fingers.

\[32:06\] So the reason for the prediction, actually, is to put in people's minds that we need to start taking action now, if we want to be protected five years from now, from, let's say, the ability to decrypt anything that we have now. Now, all the hyperscalers - Google, Microsoft, Amazon, whatever - we all have been building as a post-quantum cryptography, we've been inserting that into our frontends, and we're doing all of that. Unfortunately, we're not the only players in this world. There's lots of people with their own data centers still, with their colos, with their whatever, that will have a hard time protecting themselves. That's one thing. So I'm really getting it into people's minds that they have to start taking action now, if you want to be safe a number of years from now, when these things become reality.

The other thing is that you can't just lean back right now, because a lot of the break-ins, or data stealing, or whatever you call it, is basically data harvesting. Nobody is interested. Basically, encrypted data is being retrieved, and people don't try to decrypt it. They'll wait till the machinery is there to be able to decrypt. Your medical data now will be decryptable in a few years from now.

**Jerod Santo:** Well, that's not cool... \[laughs\]

**Werner Vogels:** And with that, I don't necessarily mean script kiddies, or whatever. It's really state actors, it might be commercial actors, who are interested in that kind of data, even if it's five years old. It might have all the relevant data for them to take action on.

**Adam Stacoviak:** That's the scary part, really... The famous TV show - you may have heard of this, Werner; it's called Silicon Valley. And in season six - I'm going to spoil it for some folks, just a little tiny bit, let's just say... And you may know this, because you may be a fan, or maybe you're not, because it's too close to home. Who knows...? Is that the AI they build, or accidentally build, to some degree - they give it a task, and it essentially goes out of their bounds that they planned for, and breaks encryption. So this is predicted in a TV show that's now ended, but very much prophetic in a lot of its satire. And that's been my major concern with quantum, is that in the future we have a machine that is - as you said, it's not deterministic, or unpredictable, in a lot of ways. It's also unpredictably predictable in the fact that it's unpredictable. But it has so much possibility that that's when encryption will essentially go away, and the world we live in that is safe because of encryption, is no longer safe. That's been my major thought around that, really, for quantum.

**Werner Vogels:** Well, there's of course different types of encryption. You have lattice-based encryption, and you have that... So there are types of encryption that you will be safe from sort of these type of decryption. But you need to start installing that now.

\[35:56\] LibSSS was 500,000, 600,000 lines of code, or something like that. I mean, you can imagine that it had to have all sorts of different types of encryption in it. At some moment, we started realizing at Amazon that running all of our frontends with LibSSS was a major vulnerability, and so we reimplemented TLS, with a limited set of encryption technologies, and just put that in front of S3, for example. First of all, much cheaper, but we made it open source, and we made sure that it is fast and inspectable... And more important, written in a way that we can use automatic reasoning to see whether or not we're protecting ourselves.

So the most important part -- I mean, now you hear more and more about automatic reasoning, but people like Byron Cook, who have been working at Amazon for the past 15 years on these kind of problems, proving to ourselves that we are protecting our customers. That's not a press release that is going out, or something like that... But there are technologies that you can use to sort of prove to yourself.

Now, \[unintelligible 00:37:23.05\] Signal to Noise, was the original name of the open source project - it was purely also intended to get post-quantum encryption in the hands of everyone. Now, I told you -- now you got scared about the data harvesting, let me scare you a little bit more... Probably every of your home devices hasn't been updated for a number of years. They run Linux, whatever version, no automatic updates or anything like that... Your automatic garage door might have a little bit of encryption in it between the key and you... Or think about hotel rooms. Your key is an encryption encoder. So there are so many small parts... I mean, first of all, coming back to these house devices - I recently looked at one of the house that we have, how many devices were on the network, and that was something like 56. There's your Sonos, and there's your garage, and there's your light opener, and there's the thing that keeps track of this... And all these kind of things. Are all these things up to date? Are all these things protected? Are all these things up to new standards? We have a number of years to get this done, but we do need to start now.

**Adam Stacoviak:** So the task today is what? What is the task we could do today as developers, as maybe potentially inventors? What should we do today to plan for quantum?

**Werner Vogels:** That really is the question in there. First of all -- and there's a number of areas... I mean, there's just using newer encryption technologies... But you can imagine that some piece of data that you encrypted 15 years ago, you're not going to go through all of your data and re-encrypt it again. But are there gateway possibilities that protect you from that? Are there other ways? Let's use our inventive brains and find solutions to this, because I believe we can. But only if we make it a focus. And the focus is not that quantum is five years away, the most important part there is that we need to keep ourselves and our businesses safe. And if that happens to be quantum, or if it happens to be an alien spaceship that lands from whoever, and suddenly turns out to be able to decrypt all our data... That doesn't really matter. We need to start protecting ourselves.

**Jerod Santo:** \[40:35\] How sure can we be that quantum safe technologies, as we define them today, actually will be quantum safe? Do we know?

**Werner Vogels:** Yeah, well... Do the work. Do the work.

**Adam Stacoviak:** Do the work. \[laughs\]

**Jerod Santo:** I was hoping you already did it, Werner. I was hoping you did it.

**Werner Vogels:** Yeah, no, no. It's just -- do the work. No, that's it. The same goes for everything now. Let me take a whole different example.

**Jerod Santo:** Okay.

**Werner Vogels:** When at Amazon S3, we went from eventual consistency to strong consistency. That was a major change that impacted every piece of technology. Now, how can you make sure that you touched every edge of this particular problem? Because it is either 100%, or not. So automatic reasoning plays a role in that. Annotations, TLA+, other technologies that you have to prove to yourself that what you've built actually does exactly what you want it to do. So definitely, I think automatic reasoning continues to play more and more a role in giving us a secure feeling that we are on the right path. The same is -- for example, we recently launched Cairo. That is the spec-driven IDE with an AI system.

**Jerod Santo:** Yeah, we did a show on it. Yeah.

**Werner Vogels:** We use automatic reasoning there to limit the number of hallucinations that can happen.

**Jerod Santo:** Yeah.

**Werner Vogels:** Not that automatic reasoning knows that terribly much more, but it knows A squared plus B squared and C squared is probably a triangle. And as such, it knows all the triangles in the world. If then this LLM says "This is a triangle", automatic reasoning will say "No, that is not a triangle."

**Jerod Santo:** Right.

**Werner Vogels:** And that's just a simple example. But we start building more and more technologies to prove to ourselves that we are doing the right thing.

**Jerod Santo:** Well, let me just take a quick moment to say... We talked Wikipedia last week, Werner, and I called it perhaps the eighth wonder of the world... And if it is the eighth, I would say Amazon S3 is probably the ninth wonder of the world... So just a quick moment of props to you, and thank you for what is an amazing, amazing piece of technology, that's unlocked so much for so many businesses and people over the years. S3 is wild.

**Werner Vogels:** Yeah... You know what my first programming languages were at school?

**Jerod Santo:** No.

**Werner Vogels:** \[43:47\] COBOL, 68000 Assembler, and Pascal. None of these programming languages anybody writes anything anymore... Although maybe I could make money as a COBOL programmer. \[laughter\] I'm not too sure I'm doing well in 68000 anymore... But things change over time. And we, as humans, adapt. We're often ahead of the game. We went from things like Pascal, which probably was sort of the first version of a little bit of structured programming, to C++, and Java, and Python, and the whole world. And none of us panicked there. We just learned a new programming language. It's not like that we're suddenly frozen in our chair... And now we have AI tools to help us building the systems that we do. Why should we start to be scared suddenly? Why should we suddenly become -- we just learn to use new tools. Because remember, it's you that builds, not the tools. It's also you that own it, not the tools. If the tools have built something - and you're in a financial company - that suddenly no longer makes you compliant, it's pretty hard to say to the regulator "Oh, that was the AI. That was the tool." No, no, no, no, no. It's still your responsibility. And as such, I think that no matter how good tools we build, we still need to educate ourselves. We need to continue to keep ourselves on a path of education, learning, continuing to learn. And looking at you two, you're not the youngest...

**Adam Stacoviak:** Well, thank you.

**Werner Vogels:** So I'm pretty sure that before you wrote something in Python, you wrote something in C++, or in ABC.

**Jerod Santo:** Oh, yeah.

**Werner Vogels:** \[unintelligible 00:46:11.04\] learning Python, or going to the next programming language, my favorite being Rust at the moment... But there will be something else after Rust.

**Jerod Santo:** Sure.

**Werner Vogels:** We won't panic suddenly, and thinking that the world will collapse and all our jobs are going to go away. No. No, we make sure that we educate ourselves. And crucial in all of that is curiosity. If you just want to lean back and just write some code, and things like that, and don't want to learn the next language, or whatever, then probably you've always been in trouble. That has nothing to do with AI.

**Jerod Santo:** Yeah.

**Werner Vogels:** You have to -- because curiosity leads to learning. And those two things are -- remain curious. Have you guys seen Ted Lasso?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** A hundred percent.

**Werner Vogels:** The TV series. There is this brilliant darts scene, where he throws a hundred and seventy. And he tells this story that...

\[47:38\]

*"I saw this quote by Walt Whitman. It was painted on the wall there. It said, "Be curious, not judgmental." I like that.*

**Werner Vogels:** And he said "I suddenly realized that nobody had been curious in who I was. They were just bullying me just because they could." And curiosity is such an important part. Being curious about AI, being curious about quantum. Be curious about how defense technology actually transforms into civil technology. If you're curious, you'll find out. And I think if you look at young kids, they're massively curious... Until we send them to school. And then we make them conform to one standard. They all need to become the same. And regardless what their mentality is, regardless what their level of interest is, I think everybody has the ability to become special.

I think one of the talents - and given that we have the Renaissance developer as one of the points in there... In the Renaissance, the core of Renaissance humanism was the belief that humans are limitless in the capability of invention, as long as you keep their curiosity alive. The moment they're no longer curious, they'll lean back and it's over. So I believe that that's really -- we're unlimited in the capabilities of inventing new things... If we're just being allowed to.

**Jerod Santo:** I don't disagree. You hit on a couple of your points, the Renaissance developer and the personalized learning, which I think is hugely opportunistic, or a huge opportunity for so many... Because like you said, sometimes by necessity we push all of our children into a square hole, regardless of their educational shape, and they must come out conformed to whatever standard. And I do think that technology is allowing us to break out of that conformity to a certain extent, and provide personalized, customized education, leaning into what the kid's interested in, and playing to their strengths...

**Werner Vogels:** Yeah, but even also just learning maths. I have two daughters, they're now in close to their forties; don't tell them that...

**Jerod Santo:** They've got to know that, right...?

**Werner Vogels:** One of the things -- so I'm not American, I'm not from the US. I come from the Netherlands, where high school has 10 different forms, depending on what you're -- you go to school to become a welder, or you go to a school where you go to university, and there's a whole range in between. And then they come to the US, and the kids have to go to high school, and all kids have to go to the same high school. They have to take the same classes. They have to score good in the same classes. And when one of my daughters, the first time that she got into math class, there were four guys in the back of the room that were four years older than she was, still had failed maths every time, but had to still sit in that class. Disruptive, and -- well, you know the stories. And as such, I've always been a real fan of Ken Robinson, a professor from \[unintelligible 00:52:04.06\] from the UK, that moved to Los Angeles at some moment. And I've been a real fan of him, because he really looked at that - instead that we let our kids bloom and explore and become really what they can become, we turn them into factory workers, all doing the same thing. And that kills all the possibility in what these kids have in them. So...

**Jerod Santo:** \[52:47\] What do you see coming out or happening in the education space right now, that leads you towards this prediction? Because you're predicting infinite personalization, and these things... Are there solutions out there today? Are there companies working on it?

**Werner Vogels:** Well, I think there's enough companies working on them, but what I see more and more is that these kids are doing it themselves. Gen alpha, the current kids that are in high school, or going to high school, they really know how to use AI, or AI assistance. And they know how to make a curriculum for themselves. And they know how to make something from which they can learn. That is a really a tool for them to build something that they just want to do. It helps them build things without having to have to go through a complete textbook first. Now, I still believe that you need to be able to do maths before you should be allowed to use a calculator. That seems like a reasonable kind of thing. But providing -- if you're really interested in, let's say, how in the 1600s in Italy, from small states, this became one country... For some reason, I don't know; kids have immense curiosity in anything. You can build yourself a curriculum that you become -- not that you become an expert, but that you know everything about it. And this is something -- suddenly, you have control over that.

Now, there's always two sides to this. The other side to this is that -- and this is actually something from Ken Robinson, again; he says "There are no good schools. There are only good teachers." And he says "And what do most teachers spend their time on?" Grading homework, doing administration... All these kinds of things that actually have nothing to do with education. So that seems to me like a standard technology solution problem. And whether you solve that with AI, or whether you solve that with just some simple SQL, fine. That doesn't really matter. I believe that there should be a lot more support for teachers such that they can focus on things that is important. Individual interaction between a teacher and a student has so much more impact than the teacher just standing in front of the class.

\[55:57\] \[unintelligible 00:55:53.24\] tells this wonderful story... He's a teacher, and he tells this story that -- he's giving drawing lessons. And there's always this one girl in the back of the class that is never interested in anything. But now they're drawing lessons, and she's fanatic. So he goes to the back of the class and looks at what she's doing, and he says what's she doing? And she says "I'm drawing God." And he says, "But nobody knows how God looks like." And she looks at him and she says, "Within a minute they will..."

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** That's funny. Yeah.

**Werner Vogels:** I mean, would we think "Here's a blank paper... Why don't you draw God?" No. But this is a kid. There are no boundaries to your curiosity, and to what you can. All these things that these kids feel as constraints are put upon them.

**Adam Stacoviak:** Yeah, it's a double-edged sword with this curiosity point with children, I think, especially with AI... Unfettered curiosity at a young age with such a powerful thing is not that smart, but I've personally experienced my ability to be curious and to explore at my older age, and I like to translate some of that to the younger generation... Because I agree, I think there's this idea of just-in-time learning, when you learn about a new thing and there's a curiosity there to accomplish a goal, but you can't really accomplish that goal until you've gone a little deeper here, here, and here, for context. I think that's the new term or the new word of maybe potentially 2025, is context. Sure, AI and maybe even agentic, but I think a subversion of that is context. This just-in-time learning is really, really fascinating.

**Werner Vogels:** Yeah, And you must have been to a conference or whatever, to some tech conference at some moment, where someone describes something about a new cache algorithm...

**Adam Stacoviak:** Yeah.

**Werner Vogels:** And they look at that and they think "That shouldn't work." Or -- actually, at Amazon we have something called the Builder's Library that's available for everyone to look at. These are articles written by Amazon's most senior engineers. And there is this one article by \[unintelligible 00:58:28.23\] that I couldn't get my head around... Because I've grown up in a time that you minimize the number of bytes on the wire. One more byte means more time, more delay, whatever. That's no longer the case. He describes this system in which if the receiver always has to do exactly the same number of things, because there are 10 things in this packet, but eight of them may be empty... But everything is just standardized, you don't need to think about it, and the resilience goes up. So it took me a long time to get my head around that. But the first time I read the intro to the story, it immediately piqued my curiosity. And it took me a long time to learn what he really tried to achieve there. And so I think no matter how old we are, there are moments every time when you get sort of "Oh, how would that be?"

\[59:48\] I live here in a place where there are a lot of electric scooters. There's Lime, that Uber bought, and some others, and whatever... And I've always seen them, but I always was interested/curious in "How would it be to have one?" Well, now it's just a click on your phone and you jump on it and you go to the supermarket to buy your groceries, and then you come back, and it's just fun. But curiosity is really one of the most amazing things that is uplifting in our life.

**Break:** \[01:00:29.17\]

**Adam Stacoviak:** It makes me think about this next notion, which I'm not sure I agree with, but it's been potentially the phrase, or at least the sentiment of the last year or so, mainly around fear, uncertainty and doubt, which is "Developers are dead." That we're a dying breed, AI is taking our jobs, it's going to replace us... And you seem to push back on that idea through being a renaissance developer.

**Werner Vogels:** I do think if your job was only being - and that sounds a bit negative - a code monkey...

**Adam Stacoviak:** All you do is code. That's all you do. You don't think, you don't plan...

**Jerod Santo:** Right?

**Werner Vogels:** If that would be -- but I think most of us have had to think about some of the stuff that we built. We had to think about algorithms, we had to think about trade-offs, we had to think about sort of -- you went over to your colleague on the other side and you said "This is what I need to solve here... But I think there's a cache overrun if that happens, and that will brown out. Do you think that, too? Shall we set up a test environment and see whether that works or not?" There are so many parts to development that will require our brains. And that's why I picked the word renaissance, is because before the renaissance, there were the dark ages. A thousand years, basically... The black death, the plague, all these kinds of things... And everything was ordered by basically religious institutions. And that changed at some moment where people became interested again in all the amazing things that have been done a thousand years before by the Arabs, by the Romans, by the Greek... To where they suddenly completely started to change. And there is this word that is sort of associated with the renaissance, that is polymath. And many people think that that is someone who can do mathematics in many different forms. No, no, no, no. Poly means \[unintelligible 01:06:02.22\] means learning. Much to learn. And if you look at the people in those days, definitely, they suddenly started to become interested in many more things than just only the one thing that they were specialized in. Da Vinci was not just a sculptor. I mean, he built airplanes, although they didn't fly... But he did build them. And just trying. I mean, think about all the people in those days that suddenly allowed their curiosity to come out.

And I think as developers, there are a number of things that we will need to re-encounter. First of all, I do think we've been learning for 50 years now - or however long we've been doing computer science; probably 1960s, so... Yeah, 60 years. So we've been learning programming languages for 60 years. We've been going from mainframes, to minis, to PCs, to cloud, to whatever... Everything required a new approach to building, or enabled this to do new things. Before cloud, you may have only had one colo, and never will be able to build a replicated database, but then cloud came, and you certainly could replicate your database. You needed to learn how to do that, but still, it is. And definitely, I believe that it's not just sufficient to -- and now I need to be careful, because I don't want to give away too much of my keynote...

**Jerod Santo:** Oh, go ahead...

**Adam Stacoviak:** Spill the beans... I'm just kidding.

**Werner Vogels:** \[01:08:17.17\] I believe to be successful, not only in the future, but also now, is to not only have a deep specialism, but start to become interested in the broadness as well. It's called a T developer. It is someone that is not just a database expert; not just a database expert, but he knows about the other types of application, knows about other programming languages. He may even be able to help his colleagues on the other side, or at least can have a conversation about it; understands the business principles of the business that he's actually running to.

Another area that I think the newer type of developers - the renaissance developer needs to be an excellent communicator. And with that, for example, I mean, if you look at the Amazon website - just imagine that for you - there are some parts of the Amazon website that always need to work, because otherwise we can't sell anything. Browse, search, shopping cart, checkout, and reviews. Because if there are no reviews, people don't buy things. Five things that absolutely need to work. And then we have all the other things that actually are really important as well. Then we have recommendations, personalization, whatever. And then there is stuff that is just nice to have.

Now, take for example bestseller lists. Now, as a technologist, you need to be able to have a conversation with the business, and say "How many nines do you want behind that? Oh, you want four nines behind your bestseller list? Well, that's going to cost you so much." And then it becomes a business decision how I am going to implement this. But I need to be able to explain to the business what the risks are, what the costs are, how resilient can I make this... But without that kind of communication, you're not building the things that you want for your customers.

So a very important part of the renaissance developer is to be able to communicate in exactly the right way. Not only to the business, but also with your customers. "What are you building? How does this interact with this?" If I show you a picture of the thousands of microservices that builds out amazon.com... If I do something here, what's happening there? Is there a relationship between the two?

So system thinking becomes crucial as well, not just about your little piece that you're building, but what impact does that have on other things? Or, you know, I'm happy going away, my database is running, my code is running, everything's happening, transactions are playing through... And suddenly, the number of transactions doubles. But there is the doubling of the number of the customers on the website. Who the hell is doing this to me?

\[01:12:08.27\] And as such, being a specialist in one particular area and just staying there is safe, it's fine, but you live in a bigger system. And that really comes out of '60s, '70s, \[unintelligible 01:12:33.17\] Meadows began something called system thinking. In nature, if you remove one piece out of that equation, of the complete nature equation, you ruin the overall thing.

At some moment -- what was it? Yellowstone Park. There were too many wolves. They removed the wolves from the park. Oh, they were killing all the elks. So they removed all the wolves. And then the number of elks grows like mad.

**Jerod Santo:** Right. Backfire.

**Werner Vogels:** Which starts eating all sorts of Yellowstone. And so not until they reintroduce the wolves, the balance gets back. So on systems thinking is something that we as the future renaissance engineers need to be part of as well. We need to understand that the one thing that we're working on at this moment has impact on all the other pieces around it. We need to be able to communicate with the others. We need to be able to see how we are part of this bigger problem. And you know what? It will be fun. It will be fun. I absolutely think.

And so one of the things I think that I -- I won't say hate... Let's say one of the less interesting parts in the beginning of my life as a developer were code reviews. It's a bit like standing in front of the class, and the whole class gets a chance to say "You're an idiot."

**Jerod Santo:** Right.

**Werner Vogels:** No, but code reviews are fun. Sometimes you think "Ah, there's mistakes there", or sometimes you go like "Wow, that's an elegant solution. \[unintelligible 01:14:40.16\] And code reviews are super-important for junior engineers. Because the senior engineers are in the room, and discussing the code on the screen there, and you're learning on the spot from these senior engineers, from all their years of experience... Where someone will say "I tried that when we were building product X, Y or Z, and it didn't work then. Or the problem at that time was that." Now, whether the code on the screen is generated by you or by some AI agent doesn't really matter. We still need to do code reviews, because we have ownership. And whether we used a tool to create the code that we're looking at or whether we actually wrote it ourselves - we're still responsible for it. We still own it. And so those things don't go away.

And as such, if your system has been created by one of the AI tools - and as I said earlier, you are responsible for it, especially if you're in life sciences, if you're in healthcare, if you're in financial services, in whatever; you cannot only rely on the fact that "Oh, but AI built it."

\[01:16:18.17\] You are still responsible for what you deliver. And that means you need to be able to look at it, and as such, generation of code may go faster, reviews will probably go slower. Because this is not code that I've written. If it's my code, I can go stand up in front of the class and say "Oh, and this is why I did this. And this is why I did that." But if a complete unknown, unhuman entity created this code for you, it takes longer to get used to it.

And that's not bad. I mean, none of this -- don't take this as that I'm sort of cracking on AI as being... No, there's parts that will never leave us. We need to learn the next steps, we continue to keep ownership of what we do, we continue to need to learn the next language, the next tool, the next system that we built... And we need to know more than just that one piece. We need to be more than that.

And my favorite - and he comes back in almost every presentation that I give - was Jim Gray. He won the Turing Award. He's the guy that actually built System R at IBM, the inventor of transactions. Jim was brilliant. Absolutely brilliant. There's an article, if you want to look it up, it's called "20 questions to Jim Gray". Jim said "Give me 20 business questions or questions that you as a user of a database would want to have the database answer, and I will build a database for you." And by the way, one of the most interesting questions is - he walks into the room where the big machinery is, and he hears the disks rattling, and he looks sideways and listens to the disks... He says "Your database layout is wrong." Now, that was something he could hear.

Now, he was not just a database expert. He had a lot of other skills in other areas. He was what we would call a T developer. An I developer is someone that knows only one thing. A T developer has a number of knowledges in other areas, whether it's computer science, whether it's from the world, or whatever. It's a broader person than just only the database developer. And I think in the future, this is something that we will continue to harness. You need to know more, you need to be able -- because how can you communicate with your colleagues that build other parts of the system if you actually don't know anything about what and how they're doing it?

**Adam Stacoviak:** This idea of code review, one thing you're making me think about is - at least the sentiment it seems today is getting through code review. It seems like you're suggesting, even though it's painful, not so much pausing, but not getting through it just to deliver the code to production and correctness, but to understand why the code is what it is... And especially if it's AI generated, and the human in the loop is less informed, specifically about the code itself, that it's more of an artifact of a plan, not an artifact of actual implementation themselves.

**Werner Vogels:** \[01:20:17.27\] Yeah. And I'm getting old... I just had a great answer to what you wanted to \[unintelligible 01:20:22.28\] and I completely lost it. \[laughter\] I do think that we've changed over time, as developers. I mean, I've written VB. I don't think there's anybody that writes Visual Basic anymore, is there?

**Adam Stacoviak:** Not on purpose... Fix a bug maybe, in legacy code, if it's still there...

**Werner Vogels:** Yeah, something like that. But it was fun when we were doing it. And I wasn't thinking about five databases replicated over five different data centers throughout the world at that particular moment. I was trying to fix my Excel code. And so we've all grown as developers over the past 10, 15, 20 years, with all sorts of new tools. We have a new tool. There is a particular point, a small problem I have with it... Is that if you look at all the other tools that we've developed, we took some time to introduce them. We had learned people, we told people why we were building the tools, how we were building the tools, how they could best use them... The typical early adopters, and you had to cross the chasm, and then you had the early majority, and things like that. And it would take time, but you would learn, you would teach your users why and how that tool was there. With some of the current, the new generative AI tools, they were just dumped in people's lap, without telling them what it could do, or what it couldn't do. And there isn't almost a CIO that I meet today when I'm traveling that asks me, he says, "What should I be doing with AI?" And I go "Well, my excuses... It's very inappropriate to answer a question with a question, but why are you asking me this?" And he's like "Yeah, but those guys next door, they will be ahead of us." And I say, "Are you really certain of that?" And then maybe because you're a little bit older, you start to drive down into what is actually the problem they're trying to solve with this technology, and "Is this the right technology for this?"

Every week, we see five new models, or ten new models. Suddenly, we went from regular LLMs to reasoning LLMs. I think as a business there is no shame in hitting the Pause button for a moment, and say "Why don't we get ourselves educated about all of this?" And not just us as technologists, but also the business. Because at this moment, quite a few of our architectures are being determined by the media, not by us. That shouldn't be the case.

\[01:23:58.06\] We, together with our business, should determine how our architectures should look like, not because the newest thing... And of course, that's the task of the media. And the task of the media is also to write negative headlines, even if things are looking up... "That company is massively behind that company." Yeah, you know what? AWS was never a consumer company. So we don't build consumer products. We build tools such that you can build your chatbots.

**Jerod Santo:** Right.

**Werner Vogels:** If AWS doesn't have a chatbot, it means that we're out of business in AI. It just means it's not our business. And I think that's really crucial in all of this, that we take time to learn the technologies, the capabilities of the technology, and where it can help us in our businesses. And if we also give it to a whole bunch of gen alpha kids that can go do wild with it and build their own educational curriculum with them - great. Let them have it. It's a bit like us 50 years ago with hammer and nails, and building your own thing up in the tree, you know... And now kids do different things. But we need to give them the tools for it.

But definitely, in business I think there is no shame in hitting the Pause button and spend some time on education and making sure that you and your engineers are making the right decisions, with the right tools. There is no hurry. There is no hurry. No company will go out of business in the coming two months because they weren't using AI.

**Jerod Santo:** Well, you heard it here first, because very few people are saying that out loud... And while I agree with you and I think that it is a problem, I wonder if we have an appetite as an industry to address said problem. I think we're just barreling forward, and we'll see what happens. But I also agree when you say give the kids the tools. Give the kids the tools...

**Werner Vogels:** Well, one of the other things... It didn't make it this time into the predictions... Did it do it last year? One of the things that -- I think last year one of the things I talked about, one of the things that worries me, is that parents driving in their car, the kids are in the backseat, they're getting "Dad, when are we getting home? When are we getting home?" And that was how we used to drive home. Now, the kids get an iPad, and become YouTube experts, and they're quiet in the back, and the parents love it. But you set kids up from four or five years old to get dopamine reactions. They know how to manipulate YouTube continuously. And it's not only that they are getting this dopamine high, there's something else called dopamine too and that actually removes your willpower in these kind of cases. Whenever you stand at the bus stop next time, look at how many people pull their cell phone out, even if they know that the bus is three minutes away.

Nobody wants to be bored anymore. Nobody wants to just stare out in the distance, and use their brains... And we can't help ourselves, because we've ruined ourselves. And if we do this with our young kids, we will have an epidemic on our hands 10-15 years from now in terms of addiction. Anyways... Sorry, guys, I keep yapping... \[laughs\]

**Jerod Santo:** No, we appreciate it. We know you've got to go... Didn't quite make it to your fifth, but great, great predictions. Thank you for sharing your extended thoughts on them, and giving us some time today.

**Werner Vogels:** Okay. Well, I really enjoyed it, guys. Come and watch my keynote, the last keynote at re:Invent. I'm doing it at 3.30 on Thursday.

**Jerod Santo:** Nice.

**Werner Vogels:** After me, everybody can do whatever they want.

**Jerod Santo:** You're the closer.

**Werner Vogels:** I am the closer. Awesome, Werner. Well, you're welcome back anytime.

**Werner Vogels:** Coming close.

**Adam Stacoviak:** Yes.

**Werner Vogels:** Okay. Bye-bye.

**Adam Stacoviak:** Thank you, Werner.
