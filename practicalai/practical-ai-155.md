**Chris Benson:** Welcome to another episode of Practical AI. I am your host, Chris Benson, I am a technology strategist at Lockheed Martin. Normally, you would have Daniel Whitenack, my co-host, with me here today. Daniel is unfortunately on a plane right now, and is not able t make this... So I'm gonna go right into introducing our guest. I'm excited, because there's some topics here that I'm really looking forward to diving into. I'd like to introduce Nicholas Mohnacky, who is the CEO and co-founder of bundleIQ. Welcome to Practical AI, Nick.

**Nicholas Mohnacky:** Thanks for having me, Chris.

**Chris Benson:** You're very welcome. I guess if you could start off a little bit - give me a little bit of background... We have some interesting topics, GPT-3 and others that I'm looking forward to, but if you can tell us a little bit about how you arrived into this space, and a little bit about what you're all about, to get us going.

**Nicholas Mohnacky:** Yeah, definitely. Obviously, GPT-3 is, I wanna say a big topic of discussion, but it's definitely making mainstream news, and that's definitely something we've been excited here at the team to explore.

**Chris Benson:** As part of this, could you tell us a little bit about what that is, since you're already kind of referencing right off the bat?

**Nicholas Mohnacky:** Yeah, so there's a company called OpenAI, and I don't know how accurate this, but I would like to say that it's sort of like the next space race to create artificial general intelligence, and so there's a company that was founded as a non-profit initially, and I think they have a for-profit arm as well... But basically to go out and try to build some intellectual property and try to do just that.

So for people that maybe don't know what artificial general intelligence is, it's kind of trying to replicate the intelligence of human beings. They've said that a fifth grader is more generally intelligent than the best AI out there... So - long story short, we got into the beta program, and we've been exploring, and we're probably one of maybe only a few hundred apps that is live currently, because you do have to go through an application process and get approved to go live with GPT-3, so they do have some throttles on the system, some checks in place to make sure maybe it doesn't get into bad actors' hands, so to speak...

I won't say that was my foray into AI and bundleIQ per se, but having done some maybe preliminary modeling and moving on to GPT-3 has been a nice step in the right direction for us as a company.

**Chris Benson:** \[03:54\] Gotcha. And for those in the past -- we've had folks from OpenAI come on and talk a little bit about, but I don't think we've ever had a show focused on capabilities, especially with someone like yourself, who's gone in and started using GPT-3. Could you describe what GPT-3 is for anybody that's not familiar with that as an algorithm? What space is it in, what is it trying to do, what kind of capabilities...? I understand that this is not your algorithm, it's one that your company is taking advantage of to great effect, but if you could just kind of give me your take on what GPT-3 is.

**Nicholas Mohnacky:** Yeah, so essentially, what they've done is they've ingested like 10% of the internet. I think it's like 160-something billion parameters' worth of data...

**Chris Benson:** That's a lot.

**Nicholas Mohnacky:** It's mind-boggling. So they've done that, and by doing that, they've been able to create these really creative models for language. As an example, you could say something like -- in the GPT-3 Playground say "Create a science fiction script for automated robots inside of battleships" and it would create this story for you. So you can kind of create those really fun prompts. So you could say "Create a recipe for Halloween", and it would come up with a recipe for Halloween.

**Chris Benson:** That's pretty cool. So -- I mean, is it essentially unbounded in terms of the type of questions that you would ask, or would you think of it as average, everyday question that you might ask Google, which is kind of what it's sounding like a little bit, but then it goes and generates that output from scratch?

**Nicholas Mohnacky:** Yeah, so I think on the simplest level it's a great mirror to hold up to any sort of inquiry or prompt. So you can kind of start to get more context for maybe a very small amount of information - finishing a sentence, or creating a tweet, or creating a paragraph, and there's some apps out there that have taken full advantage of that... Namely, there's an app called Jarvis that helps with marketing copy. So let's say you're creating a LinkedIn ad and you wanna target business professionals in the C-suite - you can kind of use GPT-3 to come up with 50 potential scripts for that ad within like six seconds.

**Chris Benson:** Wow... So I know you got into the beta program, and I remember when OpenAI was soliciting that... And I know that later on Microsoft, I believe, has some sort of exclusive license to doing that... Are you still going through OpenAI's program, or do you do this through Microsoft, or...?

**Nicholas Mohnacky:** Yeah, we're not part of any formal programming per se, but we are part of the beta, and we are using the playground, and we've used a couple of their models to support the outputs, the results of the work that we do at bundleIQ. And we've also been transitioning away from GPT-3, because a lot of it is a black box; so just from like a technical standpoint, if you're gonna build out a company, it's obviously not good to just use --

**Chris Benson:** There's a risk there, yeah.

**Nicholas Mohnacky:** ...third-party software. Yeah, exactly. So if they cut us off, then we can't create the results for our end user that we want to... So we used it mostly for training purposes and to see what the capabilities might be, but we've since -- even I think since you and I connected initially a month or so ago, we've already started to transition away from it.

**Chris Benson:** Okay, understood. From a business standpoint, that's a very interesting perspective, because clearly, if you build a business around something that you don't control directly, especially as beta... Let's talk about that for a moment - how are you thinking about that, as the CEO of your company, and you're looking at this really cool technology, but it has a definite risk in terms of that dependency. How are you thinking about it? If you're looking at other alternatives, other algorithms in the natural language processing space, that help you get to the same destination that your company is going - how do you look at that landscape? How do you evaluate it, and what are the options looking like to you? I'm not trying to get you to reveal your specific business plan, but if you could give us a little perspective on how you see the world in that way, I imagine that's something a lot of people would wonder.

**Nicholas Mohnacky:** \[07:58\] Yeah, definitely. And it's a good question; it's a question that obviously a lot of investors have asked... Like, okay, if you're using this, then what are your dependencies, what are your vulnerabilities? What does your technical moat really look like if you're using this as a black box solution?

So what we've had to do is basically build out our own ensembles... And in kind of the AI world, an ensemble - you think of it as like an orchestra, like you have the woodwinds, and the horns, and the brass, and the strings. So those different types of instruments in the ensemble of maybe an AI model that you'll be passing data through looks like maybe filtering, maybe summarization, maybe some other component that can help you have this beautiful symphony, harmonious melody coming out on the other side.

We basically looked at GPT-3 as kind of the benchmark, and said "Okay, if this is the best - and they're saying this is the best - then how close can we really get by doing it on our own?" And that was what we sort of used GPT-3 for initially.

**Chris Benson:** It kind of gives you something to target... But you're kind of inferring another point, I think; correct me if I'm wrong, but GPT-3 is so big, and so expansive, if you look at the inputs about how much of the internet was used to develop the model... And any business (not just yours) though has a narrower scope. You have a specific business plan, you're trying to do stuff... Would it be fair to say that recognizing that GPT-3 is so expansive that you don't have to produce the same thing to satisfy your business need, that you can have a narrower, smaller scope and still be as good, or better, than you might have been with GPT-3, if you can get the right model going, if you can get the right algorithm developer - is that a fair way of looking at that?

**Nicholas Mohnacky:** Yeah, you did a great job at reading between the lines there. So the answer is yes. So Chris' data is not 10% of the internet. We've basically built the model -- each individual model in the ensemble is attached to Chris' data, and the people that Chris works with. It's definitely much narrower and more explicit in nature. It's not as creative. It doesn't need to be.

**Chris Benson:** Gotcha. You're able to personalize based on your user in that way.

**Nicholas Mohnacky:** That's correct.

**Chris Benson:** That user has a certain amount of data, it's not everywhere - God, I hope my data is not everywhere on the internet... I know it is, but -- but at least you can do that. And this is just a stab in the dark, curiosity - our last episode that we released as I record this was on federated learning. Is there any interest or intention of using federated learning to build up better models, but yet letting certain data that's in private -- you know, you have a user, and they don't want their data out, but you can train models on that and infer back to the aggregated model. Has there been any thought of doing that? I'm mainly just curious, because I've been talking about federated learning a lot the last few days.

**Nicholas Mohnacky:** It's a good question, and it's one that we've discussed, but it's not a bridge that we've crossed yet.

**Chris Benson:** Gotcha.

**Nicholas Mohnacky:** So I'd be purely speculating on where we might go with that. But I think there's definitely value in federated learning, and sort of extrapolating context and meaning maybe based on industries, or categories etc.

**Chris Benson:** Gotcha. So it sounds like you're in a bit of a transition right now as you're looking at the world outside of GPT-3... Can you describe a little bit -- aside from your choices and your decisions for your business, but just in a broader sense, as you're looking at that, what does the state of this particular branch of natural language processing look like to you and your team at this point? You are a business that's already in flight, you're already moving, and you already have users that you're supporting, and you're out there doing what your business does, and this landscape is changing around on you on a day-to-day basis. How does that look, and how do you evaluate all the options? ...whether they're options that are interesting to your specific use case, at your business or not, how do you do that? How do you stay up with it?

**Nicholas Mohnacky:** \[11:59\] I think it's software in general is always evolving, it's a living and breathing organism onto itself, and so we're constantly iterating through the process of optimizing the outcome... And some of that includes maybe changing the infrastructure, because some of our assumptions on how we were doing something one way, with tokenization of keywords, and extraction, and that sort of thing, and then creating all these queues, and moving data in certain directions - without boring you with the details, what we've learned is that by instituting new models that maybe turn natural language into math, you don't have to do as much of the language part of it, versus doing the math part of it. So like vectorizing data, for instance, and then building machine learning on an individual, customer basis is much more scalable that maybe trying to manage an entire organization's knowledge base.

But just kind of maybe zooming out a little bit, so just for the audience - what we believe we can do better than any company in the world at bundleIQ is we believe we can engineer eureka moments. So those a-ha moments that might come to you when they're least expected. That's kind of like our North Star as a company.

So when you think about -- you know, you do a lot of research, and you're constantly doing analysis, whether it's on what models to use, or other parts of your business, or people that you bring on to your podcast. When you're going through this research process and trying to make sense of all of this information that's out there on the internet, or in your inbox, or a note that Daniel shared with you, or whatever it is - that's like disparate information that just kind of lives in multiple places. So what we aim to do is basically be that centrifuge that can crunch all that data and make those unexpected connections across the information using map. That's kind of like the ultimate vision, and we've been able to achieve that, thankfully, by working with our users and using their datasets, initially from their notes, and then now moving into their emails and now moving into their Google Docs and other forms of information, like PDFs, and SharePoint files, and things like that.

**Break:** \[14:20\]

**Chris Benson:** So that sounds really cool, in terms of how you are trying to find or locate or maybe even to some degree construct those eureka moments for people from that... Before we dive fully into the logistics of what that means to the user, where did you get the idea from? I'm just curious... When you were in the space, and you were looking and you were seeing these tools - you know, we talked about GPT-3, you've talked about developing other algorithms based on your users' data... What was the inspiration for going down this path to begin with?

**Nicholas Mohnacky:** Yeah, so we're gonna zoom way, way, way out, and we'll talk about internet 2.0.

**Chris Benson:** Okay...

**Nicholas Mohnacky:** \[15:51\] Basically, as a society, we've done a really good job at getting a lot of information online. And so we've sort of encapsulated the information age with a ton of data and databases... And now we've moved from the information age into the experience age, and now we're trying to figure out "How do we get our time back from sorting through all of this information?" And that's the real problem - information overload, not only is it real, it's palatable, and we have chronic stress as a result of it.

**Chris Benson:** Indeed, we do. \[laughter\]

**Nicholas Mohnacky:** So thinking about the whole elephant equation, that's like one bite at a time, it's like "Okay, let's zoom into now Chris... What does he wanna do in life? What is gonna help you solve problems, and what are the problems that you have?" Humans are really great, better than machines, at three things - creativity, innovation and imagination. So for us, it's like, how can we stay in those lanes, and let the machines come alongside to do all the heavy-lifting on the information management side? So that was kind of my thought process.

**Chris Benson:** Let's take that motivation and a little bit of that history... What have you gone and kind of built out, and kind of pulling some of the strings together? Because we opened up the conversation talking about the algorithms, and GPT-3, and what it can do... You've talked about these different points, that are the touchpoints in the user's life, like email, and we have all these different messaging platforms that we're all using, and stuff like that... And you also talked just now about keeping us in that area that we're strongest at, which is innovation, creativity, and imagination. So how are you pulling all these little pieces together to create something at bundleIQ that addresses that?

**Nicholas Mohnacky:** Yeah, I guess in the simplest form we're basically vectorizing the information and attaching that to you, the user. So whatever you're inputting into the system, in the form of emailing people, and writing notes, or saving a document to the cloud, or whatever - that is tied to you, and then anything that you shared, like on a folder, or a drive, or a channel that you've shared in, that is also tied to you... And then basically just storing that and building the mechanics around just that. That's in the simplest form.

**Chris Benson:** What do you do with it? Taking that raw data - if I'm your user, you're taking all that Chris-generated or received stuff, things that I'm touching in my day-to-day... And you mentioned the eureka moment, which kind of grabbed me a little bit, because I'm looking for some eureka moments, quite honestly... How do we find that? What are you taking all of that input data about me, in my activities, in my day to day - how are you trying to find, what is the kind of thing that you're gonna pull out of that, to give me that thing that you described?

**Nicholas Mohnacky:** Right. So I'll give you a user story that just came to me about a week ago. So you're a manager, you sit down to email, and you have just interviewed maybe 5-6 candidates, and you need to reply to four of those with a rejection letter. So you know that maybe 3-4 months ago you had just written an email that was the perfect email for this rejection letter, but the problem is it's not titled "Rejection letter." So how do you find that? And you're like, "I don't know, it was Susan -- I don't even remember her name. I don't know her email address..." And that's where it's like, again, connecting information that's already out there.

So imagine now you're writing this email, and within the first few sentences, this nudge comes up and says "Hey, Chris, you might wanna check this out", and it's the email that you wrote to Susan six months ago, and you get to copy and paste that content into that email, in that moment. That was a pretty cool one, that I was like, "Oh wow, that's cool."

**Chris Benson:** \[19:53\] So you're using those capabilities in the NLP model that you're using -- I know you started with GPT-3, you're looking at other options going forward at this point... But you're using that capability to kind of -- I'm a little afraid to use the word, but kind of create some context around that person...

**Nicholas Mohnacky:** Absolutely.

**Chris Benson:** ...in terms of what they're doing? Is that fair?

**Nicholas Mohnacky:** So it's recognizing what you're saying, and it's like, "Oh, you might be talking about these things", and then it's looking into the corpus of content or data from your emails and notes in all these certain places, and then it's starting to recommend the most relevant suggestions that might be useful in that moment.

**Chris Benson:** Okay. In the use case you talked about, it kind of feels like personal assistant-like, in terms of kind of helping me be better at what I am than I would be by myself, which is kind of ironic... Is that kind of the focus there, trying to help people with their own personal assistant that's trained on them?

**Nicholas Mohnacky:** Yeah. We don't use the word "assistant".

**Chris Benson:** Okay.

**Nicholas Mohnacky:** It's a little bit hierarchical, and we're just like, "You know, it's not really an assistant." So we were like "What if it was Robin?" It was like your sidekick. So it's your AI sidekick that works alongside you, and it's got your back, it's helping you out.

**Chris Benson:** That makes me Batman though, in that analogy...

**Nicholas Mohnacky:** Exactly. You're Batman, and this is Robin, yeah,

**Chris Benson:** Oh, dude. I'm feeling much better about this already.

**Nicholas Mohnacky:** Yeah. I mean, you don't wanna belittle Robin, right?

**Chris Benson:** No, Robin's cool. We like Robin.

**Nicholas Mohnacky:** Yeah.

**Chris Benson:** Robin's cool. So I get to be Batman, I've got my Robin coming along, and Robin's kind of helping me get the things done that I need doing a bit better. Do you find that -- I know we've been doing a lot of NLP the last years, but it's still exploding outward; we're still having so much work in that area... Are there other aspects of it, or is it really NLP-focused? Do you have other algorithmic things that have to be considered? Is there any kind of reinforcement learning, anything like that, or is this doing it? I'm not trying to push you in other directions, I'm just wondering, does that large area of NLP really cover it fully, in terms of what you're trying to achieve? "Are there any gaps" might be a better question, in terms of like what do you wish was there, or something that you guys were exploring even outside the NLP space.

**Nicholas Mohnacky:** Yeah, so there's a lot of discussion internally about supervised versus unsupervised learning, and anything to date has been unsupervised. You're not telling the model, or telling IQ to do anything... So we're trying to figure out, does it make sense for Chris to say "Attaboy!", like "High five!"

**Chris Benson:** Oh. Get the feedback, essentially.

**Nicholas Mohnacky:** Yeah, essentially. So we're trying to sort through that now, as far as machine learning is concerned.

**Chris Benson:** Yeah. So it sounds sort of like a reinforcement thing, where you have a reward that you're offering back to steer it a little bit... That would make a lot of sense.

**Nicholas Mohnacky:** Yeah. Because you know, there's knowledge graphs that exist in the world... Obviously, we're graphing the knowledge, so that's why I bring forth the phrase knowledge graph... That exists, but they're all brute force. So it's you having to make those connections, and then having to go back and sort of roam through those graphs and figure out what the connections might be. And I think the challenge with that ultimately is scale. So let's say you get 10,000 or 200,000 documents in; to make those connections, our minds just aren't capable of doing that... Like, to continue making those connections.

So unsupervised is the route that we chose to take. And I think that's ultimately where eureka moments can live, because - I'll give you another example... So let's say this is like an investor, or an investment advisor. Let's say I'm the advisor, you're my client, and you're like, "I have two million dollars I wanna spend with you, and I wanna spend it on battery technology, and innovative real estate business models for millennials etc." So you're telling me this and I'm like "How am I gonna filter that?" You know what I mean? Like, these models don't have what you've just told me.

**Chris Benson:** Right.

**Nicholas Mohnacky:** \[23:55\] So there's a way to use bundleIQ to support you in that. Let's pretend that my company uses bundleIQ, and bundleIQ's graphed 2,000 investment models, and I just start typing in "battery technology" and "real estate", and I just click Analyze, and semantically... I'm like "Oh, wow, I didn't even know that this ESG value, whatever, is like a moderate risk, and it has elements on the periodic table, like Lithium etc." So anyway, that's another way to create a eureka moment, if you're like "Wow, I had no idea, and I don't even know how I would search for that otherwise, other than just spending a lot of time trying to figure it out."

**Chris Benson:** I like the two use cases. In the first one, it's a business use case, but it's also very personal, in that you're busy trying to draw on your own creativity, and in the second one you're trying to pull different data points that aren't necessarily just obviously connected together, in such a way to create the value that you're looking for.

I'm curious, as you -- and I'm starting to see how that goes out. And there's both a personal and a business side of it. Can you talk a little bit about what data points you're integrating at this point? I know you mentioned email, and stuff. What are you all pulling together currently that you're publicly talking about, that you're able to, and what should users that wanna get into this know about the data that they're sharing, and privacy? Some of the disclaimer stuff. Can you share some of that?

**Nicholas Mohnacky:** Yeah, absolutely. First and foremost, we have a workspace where you can take notes. That's a really easy way to prime the system. You can take notes in bundleIQ Workspace, and we have an AI that sits in the editor as your Robin, as you're writing, saying "Oh, you might wanna check this out. Check this out."

So there's notes, and then we also are connecting with the G Suite. We've got connected Gmail so far, and the next one is Google Docs. Those are long-form information that we graph out. And then we have a new one, which is a custom integration that we've created, called Books. So you can upload -- imagine this... We've been testing it... We've just uploaded all seven Harry Potter books.

**Chris Benson:** Oh, okay... \[laughs\] You've just won me over. I like Harry Potter.

**Nicholas Mohnacky:** Yeah. It took like six minutes. So we graphed all seven books in six minutes. So you can literally -- as you're taking notes, you can ask questions and query against all seven books. Let's say now maybe you're an academic, or a student getting your MBA, and you have to do all these research papers, so you just dump in a bunch of PDF white papers, and it just changes your life... Because you could just write your article, and it's literally bringing you stuff from these white papers as you're writing.

**Chris Benson:** That sounds good, I like that. It sounds like you're really into some pretty cool use cases for these modern algorithms and NLP, in terms of things you can do... You're really focused on creativity, I like that, and being able to kind of enhance... Do you feel like you're still just scratching the surface on what might be possible here, or what are your thoughts on -- do you have anything that you're able to share on things you'd like to do next? You know, building on where you're already at... It seems like a pretty cool space to be in.

**Nicholas Mohnacky:** Yeah, it's been a lot of fun, and I think the challenge always is "What are you focused on next?" You have to do something really well, solve a really well-defined problem first, and then you sort of land and expand from there. We started with notes, and then email, because people spend so much time in email... And we sort of give people this sidekick to support their knowledge work in email... But that is really like a mile wide and an inch deep. So where do we go next... And we're still trying to figure that out; I would love to go in the medical space, I think that's be really cool... But there's so many barriers to entry on that front.

So like you're a doctor, and maybe you see a thousand patients a year, and you see a rash on somebody's left arm, something you've never seen before, but you get to describe it, and then you're tapped into the broader dataset that could potentially pull up anonymized people's notes... But I wouldn't know that it was Chris that had the other rash, but - start to make those connections, right? That would be pretty cool.

\[28:10\] But where we went recently is the climate crisis. When IPCC launched their global climate crisis report that came out recently, it was like 3,000 pages long. You and I are not reading this report. Who's reading this report?

**Chris Benson:** No one.

**Nicholas Mohnacky:** So how do we support climate literacy for policymakers? I'm a millennial, I care about the environment, I'm constantly thinking about social good... I know you're a plant eater, you're socially conscious...

**Chris Benson:** Yeah. I'm a vegan, so... Anyone that's listened to me for a while, sadly probably knows that about me.

**Nicholas Mohnacky:** Yeah, yeah. So how can we maybe support this massive dataset that doesn't have a whole lot of history behind it? There's certainly a lot of dissonance between it. You've got these attorneys in Congress and municipalities that are gonna be writing legislation and writing policies to solve these problems that they don't really even understand, and it's no different than the infrastructure bill that's 1,300 pages, or however many pages I think that one is...

So I think we wanna kind of go deep on that. We've got a meeting with a large international law firm on Friday to talk about that. They're pretty excited about it. They work with a lot of cities, and climate policy is something that's at the forefront... You know, we've gotta figure this out. There's a ticking clock against it, so...

**Chris Benson:** I like that aspect. You know, we're talking about the business, but you clearly have a motivation that is very personal there, in terms of trying to address a big problem, with kind of a new set of tools, in the large, that people are still just learning and understanding.

With these capabilities, as you have been exploring new grounds with a new set of tools, and really kind of trailblazing use cases - whether we're talking GPT-3 or other similar capabilities, have there been any moments where you have been kind of going "I've found a gap" or "I've found something." Have these algorithms really solved everything in the use cases, or do you struggle at times with saying "I'm missing a tool. I have a great toolbox, with some good tools here, but I wish I had something that did X"? Have you had any moments like that, where you were trying to solve a well-defined problem, to use your words a moment ago, and you said "I need this thing that's missing from my toolbox right now." Has that come up?

**Nicholas Mohnacky:** Yeah, I think in some ways... Speaking specifically to the model side of it, the AI side of it, I think there's a lot of room for improvement, but I don't know that the technology is there yet... And I think there's just gonna be a lot of R&D that needs to be had. Part of it is like adoption. So up until just a couple years ago, we didn't have these AI assistants. Conversion AI, and these tools didn't really exist. And now, as we're moving into this human-centered AI, software-as-a-service enterprise, companies - they've got big budgets carved up for AI, but they don't even know how to spend it, most of them.

**Chris Benson:** I've noticed that.

**Nicholas Mohnacky:** They don't know what to do with it. So there's kind of a gap in time, and maybe usability, where there's gonna be so much, just, learning, right? I mean, we are so far ahead of where the world is already, in kind of this knowledge sidekick that we created, but I think there's just a lot of unknowns.

I mean, yeah, I wish we could get maybe a little bit more horsepower out of what we're doing, but it's already pretty damn good. So we've just gotta basically find more use cases and make more revenue, so that we can buy ourselves more time to do more things.

**Chris Benson:** So you're kind of getting back to that imagination, that creativity, that innovation, doing what humans do well.

**Nicholas Mohnacky:** Yeah.

**Chris Benson:** \[31:48\] So I wanna ask you, as we finish up here - you've kind of talked a little bit about where we're at, and kind of what things look like a little bit going forward... Can you just -- Daniel and I do this all the time... We will try to make a prediction on how we think the world might look, or maybe how we want the world to look going forward. But beyond just the immediate future, where do you think this is going? What kinds of use cases might you be able to address? What kinds of tools do you think might evolve out of where we're at today? Where is this space going? As someone who is constantly thinking about the future and about how to bring these amazing new capabilities into productive use, where is the world going with this, at this point?

**Nicholas Mohnacky:** So I'm definitely not the technical guy per se; I've never written a line of code in my life...

**Chris Benson:** I'm not sure you have to be technical on this one... This is really -- like, how is the world changing going forward, from where you're sitting?

**Nicholas Mohnacky:** And trust me, I hear you, and I'm gonna get there... I'm gonna start by saying I went to a liberal arts school; I didn't go to MIT, I didn't go to Harvard, or any of these tech schools... Berkeley... And I'm such a humanities/history -- like, I wanna go to the opera, the symphony... And ultimately, what I think might happen is because there's so many knowledge workers, I think humans, individual knowledge workers, will be able to own their IP. And I think that will bridge the wealth disparity, the gap and disparity. If Chris and Nick - if you owned your IP, and you're able to own all of the knowledge that you put forth in terms of moving these enterprises forward, and you were able to attribute that as your unique fingerprint, so to speak, I think bundleIQ has the propensity to basically say that Chris is worth this, because of all of the knowledge he's brought forth. And you'll have your own fingerprint, your own ID, and maybe you'll be paid royalties on that; I don't know how you would renegotiate your salary, but essentially, you would get paid dividends on what you've been able to contribute within an enterprise.

**Chris Benson:** So by having the technology that we're using in terms of going forward gives me the ability to maintain IP that I create, and then you just need a business model for how that works in terms of finding the value, or other people finding the value from you going forward.

**Nicholas Mohnacky:** Yes.

**Chris Benson:** It's a beautiful idea. It's very liberating, in terms of what it might imply going forward.

**Nicholas Mohnacky:** Well, think about it - if we've bundled all of your knowledge, then the company, the organizations, or multiple companies if you're a contractor, that you've contributed to - there's transparency now on what you've been able to bring to the table, and you're able to basically have a fingerprint. If you write an email to me, I would know that Chris wrote the email, because of all the emails that Chris has ever written.

**Chris Benson:** That makes sense.

**Nicholas Mohnacky:** If you wrote a marketing document, I would know that Chris wrote the marketing document, at like a very high percentage of accuracy.

**Chris Benson:** Understood.

**Nicholas Mohnacky:** So that's what I mean by vectorizing and bundling your IQ and your knowledge; and potentially -- like, you're a walking, talking digital wallet of Chris' intellectual property that you could contribute somewhere else, or just get paid on for everything that you've already contributed.

**Chris Benson:** That is pretty inspiring right there. On that note, I'm just gonna -- yeah, I can't think of anything that tops that. Thank you very much, Nick, for coming on the show. It's been a fascinating conversation. You've definitely given me something to think about here, in terms of what that would mean... Very cool endeavors, thanks a lot.

**Nicholas Mohnacky:** Thank you. Thanks for having me. And give Daniel my regards.

**Chris Benson:** Will do. Thank you.

**Nicholas Mohnacky:** Cheers.
