**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist with SIL International, and I'm really excited today. I mean, I'm very happy. My emotion is happy, I think, to talk about the subject that we have today, which is about emotion AI. With us today, we have, Theresa Kushner, who is data and analytics practice lead at NTT DATA Services. Welcome, Theresa.

**Theresa Kushner:** Oh, thank you, Dan. It's very nice to be here. I'm looking forward to this discussion.

**Daniel Whitenack:** Yeah, this is super-interesting. I know that our listeners probably have-- I mean, obviously, they're familiar with emotions, they're familiar with AI if they've been listening to the show, and they might have seen certain tasks in the AI world, maybe related to sentiment, or something like that. I'm wondering if you could, at a higher level, help us understand what you mean when you're talking about emotion AI, maybe specifically, what kind of emotions are we talking about and how might they be represented? I guess we could start there.

**Theresa Kushner:** Well, we're talking about the whole entire range of human emotions, but we've been looking at this for a very long time, and I'm so glad that you mentioned sentiment analysis, because I can remember back in the last decade when I was at Cisco, one of the things that we did constantly was monitor the internet for words that people were using, that would give us a way of understanding whether our messages were being heard or not, or what people thought about us. They could be writing one thing on all of the posts that they were sending up to us, but they could be feeling something different in other kinds of forums. And so we started managing that, and for a while it became a way of understanding our press relations, which was really important for us, because we didn't have a way to measure press relations until that point in time.

So sentiment analysis sort of gave way to this entire world of how do we look at an emotion that a human being has. And we share our emotions in lots of ways. We share it with our voice, the quality, the tone. We share it with our facial expressions. We share it with our body language. So our emotions are out there for people to read. Just this data on any subject is out there for the computers to read, and we're starting to take that information in and to collate it and figure out things about... The classic - when you lie to someone, you look down in a certain direction. Those kinds of things you can pick up on. And as we monitor facial expressions and that data starts to be fed in, we can start to look at, using artificial intelligence, how we could respond.

\[00:04:32.04\] A classic example for this might be if we had a digital human who was interfacing with a customer in a kiosk at an airport, for example, and you could see that the emotion of the person interacting was confused; then the digital human could say, "Let me explain what you might be able to do at this kiosk." So there are lots of ways that you can begin to apply this emotional AI capability.

**Daniel Whitenack:** That's super-interesting. I'm really intrigued by this side of things, even digital humans in a physical environment that you're in and how people might interact with that. That's interesting in and of itself, and I think we could come back to that in a bit. Before we do, I'm wondering - one of the things that comes to my mind is just how fluid and complex emotion is. I think you've already alluded to the fact that you have multiple modalities that represent emotion, whether that be something captured on video, or imagery, or something written down in text, or something spoken, facial expression, gesture, all sorts of things... So you have this range of modalities, but then you also have maybe a confusing set of fluid, emotional... How do you navigate even just defining the various things that you're wanting to detect?

**Theresa Kushner:** First of all, it is pretty early time for this kind of emotional AI, so we don't have the answers for everything. I think that we're finding the more computing power we can put behind this, then the better off we are, the better we are at predicting or understanding someone's emotions.

Now, there are classic examples of bots misinterpreting information that comes across. Let's face it, human beings are very complicated, and general artificial intelligence is not there yet. That's going to take a lot of quantum computing capability, high-powered computing of all sorts in order to do that. I love the fact that you mentioned this modality, because what we're looking at is what's the best modality for predicting a response or looking at an emotional response in a particular situation. It's probably fair to say that if you have a contact center, a cold line of some sort, you could actually use voice more effectively than you could visuals.

So it just depends upon what the use of -- what is the problem you're trying to solve, and how AI is used in that problem. In fact, the use of AI is always the issue. How are we actually going to apply it? And that's why we're so excited about talking to you, because you guys have this Practical AI, and in my world, that's what makes sense. Not the fact that we're exploring all these different -- because we've got to do that, but we also have to get it down to something that's practical, so that we can actually do something with it. As always, every side of technology comes with a yin and a yang; there's good things and there are bad things, and you can determine how this works based upon how you go forward with your artificial applications, AI applications.

**Daniel Whitenack:** \[00:07:59.03\] Yeah. I love how you stress that, because one feeling that I have talking about this is that my emotions are a very personal thing, and there's a whole diversity of the way that people express their emotions differently from one person to another. So I imagine that navigating that is part of the difficulty in that you can see-- like the kiosk example you mentioned, there's a real clear benefit to the user there, potentially. But then in other cases, I could imagine if I'm on a video interview for a job, and something is detecting whether I'm confused in that situation, right?

**Theresa Kushner:** Yes.

**Daniel Whitenack:** Maybe I'm not really confused, but I'm nervous, and it reflects poorly on my potential as a job candidate. That sort of thing can, I imagine, get quite tricky.

**Theresa Kushner:** Yeah. That's where the ethical AI side of this comes in. And also too, there's cultural issues associated with some of this. There are cultures where you don't look people in the eye, where that might be something that we would record in North America, something that's really important. You're much more honest and straightforward if you're looking someone in the eye.

So there are all kinds of implications, all of which have to be managed in this world. But again, it comes down to what are you doing with that information? And someone this afternoon said to me, which I think is really right, is that all technology has got to have permission from the people that are using it in order to keep information. In other words, we have got to get used to granting to some of this technology the permission to use our facial expressions, the permission to use our emotional content, the permission to use our personal data in some way. That has got to come back to how we manage all of our data and all of our assets. And that's a very important part of what we're trying to do, too.

**Daniel Whitenack:** Obviously, the data piece of this, I imagine, is--

**Theresa Kushner:** Huge

**Daniel Whitenack:** ...really the crux of the problem in a lot of ways, because there's all sorts of classification models and advanced models that I'm sure can be employed if you have the right data. In the cases that you're working with - could you describe maybe some of the kind of data that you're working with, and how, I guess, emotion is annotated within that? ...whether that's one dimensionally or along a bunch of different facets. How do you think about formulating a data set for emotion AI?

**Theresa Kushner:** Oh, that's a really good question. I think that the first dataset that has to get formulated with any kind of AI application like this is one that takes care of the problem. And most of the problems that we've seen are handling transactions between humans and a machine of some sort. So they're transactional, and there's not a lot of emotion related to them. However, what we are seeing is that if we can get some of the emotional information in, then we can handle the problem better. We've all had this experience where we call up and the bot that we interface with doesn't understand a thing we're saying, and we get frustrated. Well, wouldn't that be interesting if that frustration could be recorded as something that gets passed on to the person for real that's going to answer the call and hopefully solve your problem? So I think that there's places for this, even in the transactional sets, that we need still to explore.

But again, this is really new for people, and those people that are in industries or with companies where this might be prevalent have not really thought about how they can use their existing data.

\[00:12:02.14\] For example, one of the things that has to happen if we're going to use transactional data, let's just say -- I'm not going to tell you customer names, but let's say we have a customer who wants to use this in a store environment and they want the avatar or the on-screen AI application to actually help them solve their billing problems. So that means you've got to have access to all the billing information on this customer, and it has to be done pretty quickly, which is something that we've not necessarily had to move data that quickly to an individual to answer an on-screen problem.

So those kinds of things we have to watch. In addition, data nowadays streams from a lot of different places. So even if I have the transaction for that customer, what additional information should I have in that transaction that the avatar needs to have? And where's it going to come from? Is it going to stream in automatically, or is it going to be something that I've previously captured, now I'm just making sure as part of the AI algorithm. Those are a lot of data concerns about how you manage this. And that's sort of the practical side of this, where you have to get down, find out where is that data and what are we doing with it?

**Daniel Whitenack:** I appreciate you bringing in those sides of things, because I think that it's one of the purposes of this show - obviously, with the name - and it's something that I find people, like they get to a project where maybe they're trying to implement something sophisticated and all of the blockers that they hit are related to moving data from one place to another, or latency, or deploying a model, and memory concerns... All of these things that are sort of the practicalities of doing this sort of problem.

**Theresa Kushner:** And let's not forget the most important one, which is the quality of the data that we put in there to begin with.

**Daniel Whitenack:** Yeah. And that, I guess, brings me to my next question, which is - on that quality of data side, and because of the fluidity of feelings and emotions, have you found that working with the client very closely to understand specific emotions that are really important to them is key to nailing down the right sorts of annotations and--

**Theresa Kushner:** And responses. Yeah, exactly. And again, I just sort of go back to-- this is one of the things I tell all clients when we start AI practices, is we really have to be very clear as to what you're going to use AI for. If you don't have that clearly in your mind, then we will go off on a wild fancies every which way, and we won't solve the problem that we're trying to solve. So from an AI perspective in the AI, whether it's an avatar, or whether it's just ordinary predictive analysis, you need to know specifically what you're trying to accomplish.

**Break:** \[00:15:00.21\]

**Daniel Whitenack:** So Theresa, I think you kind of alluded to some of these things a little bit earlier when you brought up the ethical things around this... I'm wondering if you could speak to your current thinking around both the ethical aspects of emotional AI, and maybe the privacy-related things, too.

**Theresa Kushner:** Right.

**Daniel Whitenack:** Because if I'm maybe a generally angry person or something, maybe I don't want that publicized too much. I don't know what it is, but--

**Theresa Kushner:** Yeah, you don't want it as a little icon on your LinkedIn profile, that's for sure.

**Daniel Whitenack:** Exactly. Exactly. So I guess on the practical side, how do you see these things popping up and what is your current thinking in terms of the real lines that you're trying to draw, and the ways you're trying to practice emotional AI specifically?

**Theresa Kushner:** \[00:16:16.19\] That is such a good question, and I just finished a training session with our sales team on trustworthy AI and what that means to have a trustworthy AI application or instance in your company. And it sort of boils down - and I hate to be so simple, but it boils down to the golden rule... Do unto others, as you would have them do one unto you. And in artificial intelligence, we don't need to do things that push the line, because quite frankly, some of the stuff that we are doing with avatars can be fairly creepy. I've seen things where we're actually using artificial intelligence to reproduce Kamala Harris, or some of the other-- you can actually do sort of deep fakes that have all of the instances of this around it.

So where does that line get drawn? And again, I think that line gets drawn with making sure that people understand how you're using the information you're collecting from them. Not only have you given them permission-- I mean, we've all got these "Accept this cookie" thing everywhere in our life nowadays, but how many people have ever stopped to read all of the legal language underneath that permission?

**Daniel Whitenack:** Right.

**Theresa Kushner:** And I think that it's going to be the responsibility of those people using artificial intelligence to make those checkboxes to give me permission to use your data understandable, so that people understand what's going to happen to that information. It's one thing to collect a whole bunch of emotions around a particular topic, and to direct an avatar to respond based on the majority of responses. That's one thing. It's another thing for me to respond specifically to you, Daniel, about your emotion. That's very different. And so we kind of need to make sure that we're doing the right things for people.

**Daniel Whitenack:** Yeah. I think that that sort of individual aspect is probably one of the key pieces to this, because I could see -- you know, going back to the kiosk example that you're talking about, in one case, you could have something that is running further out to the edge in terms of the compute, it's processing streams of information that are local to that device and providing feedback to the user.

**Theresa Kushner:** Right.

**Daniel Whitenack:** But then it's a separate thing if you're streaming up all the audio and all the video, and maybe even detected emotions, along with timestamps and all of that, to the cloud. That becomes a very different scenario. So in these cases, where you're deploying emotion AI, how have you struck a balance between making sure you're gathering good data to do well at the task that you're trying to do, versus swinging to the side of privacy and anonymity, and that sort of thing?

**Theresa Kushner:** Yeah. I will tell you some of the places where we've used emotional AI that I think have been most effective, and that's with our-- we have an application that teaches children to read.

**Daniel Whitenack:** That's awesome.

**Theresa Kushner:** And in that application, there's an avatar of sorts. It's a comic little thing, but that avatar actually looks at the child that is engaged in the reading exercise, and can tell when they stumble, when they're getting tired, when they're not paying attention, and recall, and have an action for the child. So it actually says, "Hey, I see you're sort of lagging there. Would you like to read a story?" Or "Can you do this? No, you missed that particular word. Can we go back and -- oh, I see, you're not just totally engaged."

\[00:20:09.29\] So those are the places where I think that emotional AI plays the best part, because it gives something back to the experience. And I think that's another keyword. We are all very excited about digital experience and customer experience. That means it's a two-way street. We have got to actually have the customer be engaged and excited about engaging with us, or with an avatar, or with some sort of application. That experience has got to be something that's positive for the customer, no matter what. And quite frankly, I've read statistics that some of our avatars are better received than human beings on phone lines.

**Daniel Whitenack:** Yeah, that's super-interesting. I know that I've had a similar experience with chatbots, especially internationally; we've done a bunch of chatbot-related things in my own work, and yeah, it's amazing what people will open up to a bot about--

**Theresa Kushner:** Right.

**Daniel Whitenack:** ...and just engage with a bot about in a very authentic way, that is not how you would maybe naturally engage with a human virtually on a web call, or something like that. So yeah, that's very interesting. I'm wondering on this-- so you mentioned this application with helping children learn how to read... Could you give us a little bit of back-story about how that came about and how the project got spun up and that sort of thing? I'd love to learn more.

**Theresa Kushner:** I believe, and I'm going to tell you, it started with our engagement with MIT. We have a very robust engagement with the MIT Media Lab, and some of the work that we were doing with our avatars out of our Denmark business unit actually engaged with MIT to do this. And myself, having worked with MIT over the last 30 years off and on, the Media Lab has always been a source of education. That's one of the things that they try for. And so when you are looking to apply technology that hasn't been applied before, it is really good to have it in something that kids can understand, because if kids can understand it, anybody can. And that sort of is what happened with this, is that became an application. If we could teach children to read, wouldn't that be great? Now what you can do is start to use that same technology to train adults, to train people on just-in-time training at airports, or just-in-time training at any other kind of operational facility. So there are lots of broader applications for it, but getting it right with a kid - that was important.

**Daniel Whitenack:** Interesting, yeah. And could you maybe paint a picture, since this is an audio podcast--

**Theresa Kushner:** Oh, no...

**Daniel Whitenack:** ...could you just paint-- we'll make sure to link to some really good pictures and stuff.

**Theresa Kushner:** I will tell you what sort of story it reminds me of. I taught my son to read with an application on the computer called Reader Rabbit. But Reader Rabbit stayed on the computer, and he just had to fill in little things.

**Daniel Whitenack:** It's like fill in the blank, or memory sort of thing.

**Theresa Kushner:** Yeah, exactly. This one, actually, it's a little avatar. It's a guy, a cartoon guy who sits in the corner of the screen and actually talks like a teacher would to the student, so that the student hears what they're saying and then tries to do whatever they're acting. And because it can hear what the student says, it understands they're not saying the word right, or they've mispronounced it, or they didn't read it right. So there's all of that interaction that goes on with this particular application, that wasn't in Reader Rabbit, for sure.

**Daniel Whitenack:** \[00:24:02.26\] Yeah. And it sounds like that's something that kids could engage with and kind of spur on curiosity towards--

**Theresa Kushner:** Yeah.

**Daniel Whitenack:** ...towards reading, which is really cool. Has this been deployed in an experimental way? Are there ways that people can engage with this at all?

**Theresa Kushner:** Well, it's been employed in an experimental way so far. This won all kinds of awards for us for its application, but I think you'll probably see it picked up. The technology to do some of this is still fairly expensive, so having a child read with this instrument might not be the best way right now. We've got to figure out a way to get that more practically into the hands of readers.

**Daniel Whitenack:** Yeah, I imagine that the processing of the various streams--

**Theresa Kushner:** Yes.

**Daniel Whitenack:** ...and the compute associated with this is maybe not something that all fits on my smartphone.

**Theresa Kushner:** Not trivial, that's for sure.

**Daniel Whitenack:** Yeah, yeah. And has it been a challenge with these real-time applications to deal with some of those real-time and latency aspects in terms of balancing-- I'm always, again, thinking about the practicalities of balancing these like, I could pull down a Wav2Vec model off of Hugging Face or something, and it's going to run great, but maybe really slow, or it might need to be accelerated in some way, but then I could swing to the other side where people are really thinking about the more efficient ways of running these sorts of models... So is that something kind of an internal discussion you're having?

**Theresa Kushner:** That's an internal discussion always. And every customer's environment is different, too. A lot of customers' environments are not set up to do this kind of data exchange. And so that's one of the reasons why NTT Data Services looks at that, is because that's what we do, is that we help you create those kinds of environments that are data-rich and responsive to all kinds of applications. And so we're in the troves of trying to make sure that when we release these technologies, that we get companies that have the backbone in order to do it to begin with. Because it's just frustrating to companies. Like you said, the computing power, the capability... A lot of what we do is in the cloud, but then again, you have to push our friends from the hyperscalers to do high-performance computing, at a cost that's available to ordinary humans. So that's another area that we look at constantly.

**Daniel Whitenack:** Yeah. Also, to kind of come back to the MIT work and the literacy or reading application work... I'm wondering if there were any responses maybe from like non-technical researchers, maybe more on the linguistics, or social sciences, or education side even, that kind of had any reactions to this.

**Theresa Kushner:** I believe that's what MIT itself offered, was some of the testing that they had done with the tool to make sure that it's right. The Media Lab is pretty famous for that. My first involvement with the Media Lab was with Logo, like years and years ago. So I know they are concerned about that.

So there is testing going on. With everything that we put out there is testing - how do customers respond to it? How do children respond to it? What kinds of things are we doing? Because let's face it too, artificial intelligence has this ability to make changes in our life. And we've seen, just as the internet did -- you know, the internet can be used for good or for evil. And we want to make sure that when we unleash something like this, that we are doing it for the good part of society, not for something that would have unintended consequences.

**Break:** \[00:28:00.10\]

**Daniel Whitenack:** Well, Theresa, I have so many questions. It's hard for me to think of where to go, but I think the one thing that I wanted to follow up on was some of what you talked about, these sort of digital humans. I know you even mentioned the way in which you create avatars or digital representations of humans can go a whole variety of directions. I know there's-- I forget the famous study where it's like the more human-like avatar looks, the more creepy it--

**Theresa Kushner:** The creepier it becomes. Yes, exactly.

**Daniel Whitenack:** Yeah, exactly. So maybe just stepping back a little bit, could you describe more generally your current thought process around digital humans at NTT, and their place and value in your work?

**Theresa Kushner:** I'll give you an example, a great living example. If you were to walk into the lobby of NTT in Japan today, the person that greets you is a digital human.

**Daniel Whitenack:** Interesting. On a screen, or a kiosk or something?

**Theresa Kushner:** It's a kiosk. It's a kiosk. It's a fairly large kiosk, and you can ask her anything. "I have an appointment with such and such. Where is that?" And she handles everything. That's one of the very first uses. The avatar was originally created for Kia Motors, who wanted to be able to explain their electric cars to the general public. And I love this story because when we first deployed the avatar, we deployed her in an airport, where people could just come up and talk about Kia and what we were doing with the car, with a specific car. And then what they did is that they moved her to the showroom.

Now, one of the things that we would love to be able to do, and we're looking at doing this - I'm not sure with Kia at the moment, but with other manufacturers - is that because we know that you interface with us at the airport, when you come to the showroom, we should be able to make that connection. So the dream, the ultimate further down the line kind of dream is that we take an avatar from an airport, collect information about people there. When that moves to the showroom, we are able to say, "Hi, Daniel. I remember you when we talked at the Narita airport six months ago", and then you can have that particular conversation go forward. And let's say you purchase a car. We would love to have the avatar now sit in the car and become your direction giver, your Alexa, so to speak, for that particular car. So that's kind of -- if you can imagine, what we can do with a digital human, that would be the ultimate.

**Daniel Whitenack:** Yeah. It's almost like you have-- it sounds like there's this sort of like there is an avatar which is a representation, but then there was almost like... I don't know how to describe it; a forking of that avatar or a bunch of parallel universes for that avatar that are created, where it responds in a unique way, or has a unique sort of relationship with individual people. I don't know if that's a good representation.

**Theresa Kushner:** Every company out there right now is trying to do what is their customer mapping, their roadmap for how a customer experiences their product.

**Daniel Whitenack:** Personalized and dynamic.

**Theresa Kushner:** \[00:32:02.25\] Exactly. And so with the avatar, you can identify the points that are most important to collect and have conversations. And that creates for you an entirely different customer experience than you would have otherwise.

**Daniel Whitenack:** Yeah. I guess, in certain ways, if I went up to a booth at the airport that was Kia-related, I could sign up for something and maybe they would put me in some type of system and then they'd know me when I come to the dealership. I'm sure there is privacy concerns and other things you have to navigate--

**Theresa Kushner:** Of course.

**Daniel Whitenack:** ...and making sure people understand what's going on. But I think also there's this - yeah, the personalized and dynamic side of things, people also, I think, probably like, in the sense that they don't have to re-explain a lot of things when they get certain places.

**Theresa Kushner:** Exactly. If all we did was take away the requirement to tell your phone number and your account number to three people before you get an action, that would be worth it.

**Daniel Whitenack:** Yeah, yeah. These digital humans-- I see a really great kind of diagram on your website, which we'll link in the show notes, that talks about the emotion piece is actually part of this, because the digital human can sense certain emotions... But there's a whole lot of other, I guess, signals, you would call them, that the digital human is processing. Could you describe some of those other things that are a part of the puzzle of making sure that this digital human is dynamic and responds in the way that you want?

**Theresa Kushner:** That's kind of a tricky question. For most of the digital humans, it takes certain kinds of technology. You have to have microphones that are directed... Because if you've got a kiosk in the middle of a busy airport and you're talking to it, if the microphone picks up everybody in the airport instead of your particular question and your response, then you have to know that. And also, you have to make sure that the person is standing in a particular place so that they can get the answers back and forth. So this actually becomes a one-to-one, and that's fairly interesting and difficult to manage. We have to make sure that that happens on one-to-one basis. Haven't learned yet how to handle a crowd of people. That's probably something that we should sell to politicians, for example.

**Daniel Whitenack:** \[laughs\] Right.

**Theresa Kushner:** So the technology to do that sort of zeros in on the individual. Is there anything else specifically that you were looking for in that question?

**Daniel Whitenack:** Well, I'm wondering-- maybe based on that, it is interesting that you're thinking of this one-to-one interaction...

**Theresa Kushner:** Yeah.

**Daniel Whitenack:** And I wonder-- this may be more of an aspirational question, I guess, but I could see how if certain people walk up to a kiosk and see a certain type of person, of a certain age, of a certain gender, or height, or whatever it might be, in some cultures, for example, maybe it wouldn't be appropriate for a man of this age to address--

**Theresa Kushner:** Exactly.

**Daniel Whitenack:** Yeah. So in the long run with this, how dynamic do you expect the avatar itself to be in relation to the one-to-one interactions?

**Theresa Kushner:** That's a great question. In fact, that was one of the very first questions that one of our customers asked after we had finished the demo. It was the fact we had knew we sort of hooked them when they asked that question. It's because those avatars are very easily changed. Now what we have to do is get the artificial intelligence behind it to be able to say, "Okay, I need to look like that person." In other words, "I need to mimic whoever is in front of me, in some way." The technology isn't quite there yet, but our team in Denmark is working on it.

**Daniel Whitenack:** \[00:36:07.15\] Yeah, very interesting. And I think the reading example is really interesting, because I was just at ACL a couple weeks ago in Dublin, and they were talking-- I sat in a lot of talks about indigenous languages and language learning--

**Theresa Kushner:** Oh, yeah.

**Daniel Whitenack:** ...which is like my own passion and my own organization's passion and work, and just the importance that they put on language learning... But also, there was an emphasis on-- like, certain language communities wanted, not just like an application on their phone, but they wanted a kiosk or physical thing. For example, one indigenous community talked about-- they have a language center and they go there to do language-related things. And they didn't want technology on everybody's phone, they wanted something physically present in that center to build community, and for them to experience their language and learn their language. And so what do you think-- I guess the question is how do you think, in the future, we'll kind of think about embedding these digital humans in the physical world? So one thing would be--

**Theresa Kushner:** So that they become a robot almost.

**Daniel Whitenack:** Well, maybe not with physical arms and such, but where would I choose...? You were talking about having one maybe in a car, but also at the airport. And the sort of scale of that at the airport, I could have a really big screen and it could be human size. In the car, maybe it's like a little screen and it's a little bitty-- and that, I imagine, changes the dynamic. So how are your clients, or how are you thinking about what are the locations and formats where we would want to embed this sort of digital human?

**Theresa Kushner:** Wow, that's such a good question. Yeah, that is such a good question. And every time we engage with a customer, those kinds of questions come up. But again, I think one of the things that we are doing is spending a lot of time testing these. Does that work? In other words, does it work that size? Is the size the right angle? Are all of the buttons in the right place that you might want to interact with? There's a lot of customer and design capability that goes into what we do as well.

**Daniel Whitenack:** Yeah.

**Theresa Kushner:** That's a great question though, because that is something that we have to consider. How do you look at that little person on the screen in your car. versus the person that was almost full size at the airport?

**Daniel Whitenack:** Right. Yeah. And I guess people are used to viewing at least heads on screens now--

**Theresa Kushner:** Yes, they are.

**Daniel Whitenack:** ...with the pandemic, and all of those sorts of things.

**Theresa Kushner:** We do have a couple of robots we've been working on with MIT that are good at collecting information. I mean, Jibo was one of the ones that we actually worked with MIT on, which they were deploying into children's wards at hospitals. And one of the things that we've found is that children love to interact with these robots, and because they do, they tell them things that the doctors don't always know. And that information has become very helpful for managing kids with ailments of undetermined source or really complicated situations.

**Daniel Whitenack:** Yeah. Very interesting. Well, it seems like you have no shortage of exciting things to work on, but I'm wondering--

**Theresa Kushner:** Exactly.

**Daniel Whitenack:** Yeah. I'm wondering, as you look to the future, even kind of out the next couple years, when you're kind of laying in bed at night or on a drive or whatever, what are those things in your mind, the things that are driving you as a practitioner and a leader in this industry? What are you thinking about and what are you excited about looking forward?

**Theresa Kushner:** There are no shortage of problems for us to solve in the world with artificial intelligence. There are issues associated with climate, there are issues associated with security... There are all kinds of things that we can go after with AI. My dream when I lay in bed at night and think about what we could do, is to make sure that artificial intelligence gets applied ethically to solve problems that help people. That's my biggest concern. And so we're trying our darnest to do exactly that.

**Daniel Whitenack:** Yeah. Well, I'm very happy to hear that emphasis. I know it's something that's on a lot of people's minds right now, so really excited to hear that you're thinking in that direction as well.

Theresa, it's been a real pleasure to have you on the show. This is really exciting stuff. I can't wait to dig in a little bit more and explore. We'll include some links in our show notes, so everyone make sure and check those out, and check out these digital humans and some of the applications that we've talked about on the show. Really wonderful to talk to you, Theresa. Thank you for joining us.

**Theresa Kushner:** Thank you very much for the opportunity, Dan.
