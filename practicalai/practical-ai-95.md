**Chris Benson:** Welcome to another Fully Connected episode of Practical AI, where Daniel and I keep you fully connected with everything that's happening in the AI community. We're gonna take some time to discuss the latest AI news and dig into some learning resources to help you level up on your machine learning game.

My name is Chris Benson, I'm a principal AI strategist at Lockheed Martin, and with me as always is Daniel Whitenack, who is a data scientist at SIL International. Hey, how's it going today, Daniel?

**Daniel Whitenack:** It's going very good. It's hot here, but I guess I'm in the Midwest of the United States, and you are in the South... I'm sure what I'm experiencing is nothing compared to Georgia heat.

**Chris Benson:** I think the thing that really gets you in Georgia is the humidity. It tends to be very humid here, and that's what usually gets people. It's not terribly hot today. I think we're around 80 degrees Fahrenheit, so it's not too bad. It's quite humid outside though.

**Daniel Whitenack:** Oh, wow. I think it's warmer here than --

**Chris Benson:** It might be.

**Daniel Whitenack:** I think we're pushing 90 Fahrenheit.

**Chris Benson:** I think that's what we're gonna be tomorrow. I think we're popping back up with you tomorrow... But we have some weather that's come through, and cooled things out... But that's the way it is; it's summertime, man.

**Daniel Whitenack:** Yeah. I've also got a few boxes sitting right next to me. I've finally decided to build a computer. I know we talked about this a couple times. I have fond memories of building computers earlier on in my life, when I was in grad school, and then before that in college, and other times... But ever since being a data scientist, I've always just had a laptop.

**Chris Benson:** Right.

**Daniel Whitenack:** I don't know, it's definitely not necessary in any sort of way to have your own personal AI machine, but since I talk about this stuff so much, it's almost like a rite of passage, I guess. I feel like I should have that experience.

**Chris Benson:** \[laughs\]

**Daniel Whitenack:** I don't know, we'll see. I've got the boxes, I've got case, RAM, hard drive and GPU...

**Chris Benson:** There you go.

**Daniel Whitenack:** ...but the rest is on its way. Currently not functional.

**Chris Benson:** So for listeners though - I know you can't see this, but Daniel and I are talking over zoom, and he has the data center background up behind him.

**Daniel Whitenack:** Mm-hm. The Zoom virtual background.

**Chris Benson:** There you go. You're building out the DGX rack there behind you.

**Daniel Whitenack:** \[04:02\] I'm not quite in the server room yet, although I do expect the room I'm in will warm up quite a bit when I turn my computer on, whenever it gets going... But yeah, I'll have to make sure and have the fan going, and maybe -- you know, eventually it will be cold here in Indiana, so maybe that will be a benefit. I don't know.

**Chris Benson:** I'm just glad to know you're not living in the server room there, sheltering in place in the data center.

**Daniel Whitenack:** \[laughs\] I'm bringing the server to me, since I'm just sitting at my dining room table... Not even in my office, because we have a family member staying in my office as a bedroom right now, during the quarantine, so...

**Chris Benson:** Gotcha.

**Daniel Whitenack:** Yeah, it should be fun. One more person in our house, and one more computer/portable heater coming soon.

**Chris Benson:** Gotcha. You know, actually you and I are doing something a little bit similar there, in that today I'm gonna buy three Amazon instances to build a Kubernetes cluster for my animal protection charity that I work on...

**Daniel Whitenack:** Oh, sweet.

**Chris Benson:** So I've gotta get the new Kubernetes cluster up and running.

**Daniel Whitenack:** Yeah, that's exciting. It will always be an interesting experience. Are you going the "manage your own deployments" sort of thing, or are you doing the EKS managed by Amazon type thing?

**Chris Benson:** No... So it's not my budget; it's the charity's budget, and it is a very small charity, with a very tight budget, so I'm simply buying the instances at rock bottom reserve prices, and then doing everything myself, to try to keep that as low as possible.

**Daniel Whitenack:** Yeah. Look into the tool Kops.

**Chris Benson:** That's exactly what I'm using.

**Daniel Whitenack:** Yeah, I've used that a good bit in the past, and it saves a lot of trouble.

**Chris Benson:** That's what I'm going with, exactly.

**Daniel Whitenack:** And Kops itself is an open source tool that's out there, and since Chris is working with the charity, and I also work with a non-profit, so open source things are a lot of times very nice to use...

**Chris Benson:** They are.

**Daniel Whitenack:** And I thought today maybe we could discuss that a bit, but more in the context of AI, I guess... So open source and AI, contributing to AI open source, open data... There's a lot of different related things there, generally under open source AI or open AI things... Not to be confused with OpenAI, the company...

**Chris Benson:** \[laughs\] There you go.

**Daniel Whitenack:** Yeah, I don't know... Does that sound interesting?

**Chris Benson:** That sounds really good. Ironically, our talk of building things, and Kubernetes clusters leads kind of right into it... Because with modern AI tooling it's largely built on Docker and Kubernetes these days, so that's perfect timing on that.

**Daniel Whitenack:** Yeah, so maybe we can start by talking about that. On the show we mention certain things very often... And I could think of many of those off the top of my head that are all open source, because I think that's probably the more standard case. So TensorFlow, PyTorch, Docker, SpaCy, Kubernetes itself... What else? A lot of these things are all open source, right?

**Chris Benson:** The software of artificial intelligence is largely built on open source, and people end up paying for hardware, or services for hardware.

**Daniel Whitenack:** Yeah.

**Chris Benson:** That's kind of how the divvy is - you budget for the hardware or the services to gain access to compute.

**Daniel Whitenack:** Yeah, and maybe we should clarify as well what we mean by open source. Maybe people are more familiar with that term, or not familiar... And there are some confusing things around it. Actually, maybe one of the confusing things is open source doesn't necessarily mean free either... So I guess my background isn't in computer science/software engineering; I'll probably have some computer science people get mad at me that there's a proper definition, but... I mean, open source - mainly, its etymology derives from the fact that you can see all the code that is there. The code is available for you to obtain and/or modify use. With TensorFlow, for example, you can go to GitHub.com/tensorflow/tensorflow - I think that's still the link, unless... You know...

**Chris Benson:** \[08:25\] Yeah... I think it's really defined by the fact that when you distribute the code, if it's open source software and you're distributing that code around, you have to distribute the code of the programs - or programs themselves - with your distribution. So you don't just get the executable that you're running...

**Daniel Whitenack:** Right. Just the binary.

**Chris Benson:** You don't get just the binary, you get the source code along with that... And typically - and I'm saying this strictly from personal experience - the vast majority of open source software I would argue is freely available for people to use... And then the way it ends up is a lot of times that licensing allows companies to integrate open source software into their own proprietary packages. And they do have to distribute that source code for that part of it, but they may also have proprietary code, depending on the licensing available, as well. Or as a service. That's another thing.

**Daniel Whitenack:** Yeah. It should be said, too - if you go to tensorflow/tensorflow on GitHub, you can see all the code that makes up TensorFlow, at least the core part of TensorFlow there. Then there is an enterprise version of TensorFlow that Google came out with recently, and some of those elements may not be open. Some of them might be open, I'm not sure... But you'll see this patterns a lot too, where you have -- I think they call it open core, where you have a core part of a tool or software that is open and you can use, and then there might be a set of additional functionalities, or maybe even an upgraded version that you have to pay for, that has some extra features, or maybe more robustness, or maybe it supports multiple users, or maybe it supports specific access controls, or other things that are more enterprisy, I guess... So that's another pattern that you'll see. But on the tensorflow/tensorflow you'll see that there's the code, if you go to that link, and then a little ways down in the code listing there's a license... And you'll see that this license is an Apache 2.0 license, a very common open source license.

**Chris Benson:** It's a very permissive one.

**Daniel Whitenack:** Yeah, very permissive. It allows you to do a lot of things with the code. But there's a bunch of other licenses as well out there. There's the MIT license...

**Chris Benson:** Which is also permissive...

**Daniel Whitenack:** Yeah, yeah. Actually, there's probably a guide out there that details all the different ones, and I think they're actually on GitHub when you're choosing a license for a project - they have a way to compare them. But yeah, some of these are more permissive than others, and allow you to do certain things with the code that you're not doing with other projects that have a different license, or something like that.

**Chris Benson:** Right.

**Daniel Whitenack:** So that's one thing to be aware of. But I think a lot of where people might get hung up with that is like if you suck that code into your own project and it's part of your suite of software, and then you sell that, there might be certain implications to that. But in general, a lot of people might use TensorFlow, for example, to train a model, and then that model is what they ship with their product, or something like that.

**Chris Benson:** Right. And that model -- which may not be proprietary in any way. I mean, it is proprietary to that company...

**Daniel Whitenack:** Yeah, to that company. And also, the code that is running or doing the inference for that model - and even actually the training code for that - is using TensorFlow; you're not just copying TensorFlow itself and selling TensorFlow. You are using TensorFlow to create custom code in the same way you'd import other libraries, and that sort of thing.

\[12:05\] This is a whole world of thought around open source software, and what licenses are good, and not good, and actually certain companies have restrictions around -- if you're using an open source project, they might allow you to use code that has a certain license, versus code that has a different license. That might be something you wanna be aware of with your own company as well.

**Chris Benson:** Absolutely. And depending on policy, they may orient on the license in terms of approvals, or they may focus on specific software itself, along with its license. But you know, all this is really relevant now to AI, and I think a lot of people that have come into AI from routes other than software, particularly open source software, are having to learn this as they go along, which I thought was one of the great reasons that we should talk about this today when you suggested it - as we see the field of AI maturing and evolving very rapidly, it is becoming integrated into what is essentially a software stack that different organizations have, and their workflows, and it is how they productively enable some of their software.

So it's really being wrapped into the software lifecycle itself... So it's not affecting people. And as we talk about this -- as software developers, we might be talking about how would we contribute to open source code and open source projects, but now it makes a lot of sense to talk about "How do we contribute to open source artificial intelligence and open data?"

**Daniel Whitenack:** Yeah... I mean, as opposed to normal software engineering workflows, data really drives how code operates in the world of AI. So how you get the data and distribute data associated with your AI project is very relevant.

Before we move on, I'll just mention too - there's an episode, \#322, from our friends at the Changelog Podcast; they talk to Manish from Dgraph about licensing, and relicensing, and all those sorts of things. I've found that episode very enlightening on these topics; so if you're interested, they dive a lot deeper into that.

**Chris Benson:** I had no idea you were gonna mention Dgraph, but that's my current hot topic for myself, so...

**Daniel Whitenack:** Oh, Dgraph is awesome.

**Chris Benson:** I'm moving into Dgraph right now for what I'm doing.

**Daniel Whitenack:** Side note - Dgraph is a graph database. It's really great, actually. The query language that you use on top of it is GraphQL, which makes it really nice in a lot of ways, and it's very performant, and... Yeah, anyway. If you're interested in graph databases, check it out. I'll give a shameless plug, because I do like that project... Which is another open source project.

**Chris Benson:** It is. It's open source, and it's a project that I'm integrating into my AI workflow at this point, for the charity that I spoke of.

**Daniel Whitenack:** Oh, awesome.

**Chris Benson:** Yeah, that's definitely awesome. Thanks for mentioning it.

**Daniel Whitenack:** Definitely. I love plugging the projects that we both use here on the podcast, especially if they're open source and there's a community around it, like Dgraph. But I guess that's one thing -- Dgraph is a database, so you're using it in your AI project, but it's not AI software necessarily, but it's the data store associated with the AI software.

**Chris Benson:** Correct. That's how I'm using it.

**Daniel Whitenack:** These sort of auxiliary, or -- I don't know what we're gonna call them... Supplemental infrastructure things are often driven by open source as well, right?

**Chris Benson:** Right. If people are wondering how that fits in - and it's not really specific to what I'm doing; this could be for a whole lot of different possibilities... If you are operating an organization and you have operational data, things that you're doing with whatever your organization is, and you need a data store to keep that, but you may also wanna provide analytics on that, you may wanna apply some AI modeling to some of that data... So it really all comes down to the fact that you're integrating AI into your software workflow. That's a good sign, that's a sign of maturity.

**Break:** \[16:08\]

**Daniel Whitenack:** So we were just getting into the topic, and you mentioned something that was really important about AI not just being about code, but being about data... And I think along with that data - a certain piece of data, which is the model itself, which is really just another piece of data... So there is the code piece, but then there is the data piece, and oftentimes there's this weirdness because code is open sourced on GitHub, but then to me it seems like "Oh, there's this very structured way to go about finding open source code", and things... And then open data is just sort of like all over the place. It's like, totally scattered and weird. I don't know if you have a similar experience...

**Chris Benson:** No, I do... I think that there's been a lot of great work trying to address that problem recently, and we'll talk about some of those as we go forward, in terms of how to find data... But yeah, I think the fortunate side is a lot of people that are already working in open source software recognizing that they need code, and they have the same problem... So it's getting tackled fairly quickly.

**Daniel Whitenack:** Yeah. Maybe before we talk about how to find data I guess there also could be licenses associated with data, right?

**Chris Benson:** Sure.

**Daniel Whitenack:** You aren't able to repost it in another place, you are or aren't able to use it for these purposes, you are or aren't able to do certain things with the data... Recently I downloaded some audio data from Mozilla's Common Voice project... So their workflow - you find the dataset that you want, then you put it in your email to download it, and when you do that, you also have to agree... I think the agreement was that you wouldn't try to personally identify the people whose voices are represented in the data...

**Chris Benson:** Yeah.

**Daniel Whitenack:** So that stipulation is very specific to that dataset, but I guess it is kind of common, in the sense that there's a lot of datasets that you could potentially try to identify people within datasets, which is an issue.

**Chris Benson:** It's an interesting juxtaposition of licensing, plus responsible AI, and ensuring that principles like protecting PII (personally identifiable information) are all integrated in. So I find that interesting that they did it that way.

**Daniel Whitenack:** Yeah. And I guess as well models being another piece of data... So just as a reminder for people, when AI people refer to a model, they're basically just referring to a representation of a network architecture, usually... So this number gets fed into this operation, and then it gets fed into this etc. Along with the parameters associated with those operations, which are called weights and biases. And all of that can be represented in data, especially if your model has 300 million parameters. You're gonna put that into a data file and store it somewhere.

**Chris Benson:** Yeah, but it is essentially a complex data structure...

**Daniel Whitenack:** \[19:59\] Yeah, it's a dataset.

**Chris Benson:** ...yeah, that is the output of your modeling.

**Daniel Whitenack:** Yeah.

**Chris Benson:** So data in, software operates on it, data out.

**Daniel Whitenack:** Yup. There's a lot of pretrained models out there... So if I'm in a GitHub repo, and it's a repo for this project, someone did a project to do object recognition, or something, and they have a license in their repo; it's like Apache 2.0, or whatever, I don't know. But then in their readme they say "You can download a pretrained model from this link", and then the link is just an S3 bucket link to download the model... I'm not actually sure what is legally implied - if anything - by what you can do with that downloaded, pretrained model.

Now, there are certain sites where maybe that's more specific in terms of what you download... But in that case, which I think is actually a very common case, this sort of "Here's my GitHub and here's a link to my model", I don't actually know if there are legal implications to what you can or can't do with that.

**Chris Benson:** Yeah, so - not being an attorney, but playing one on a podcast, I would say that that data was still distributed, and it was distributed under a legal condition, probably represented by a license... And so even if that license is short-cut, meaning it's not included in the link, because they didn't download the whole repo or something, then I would expect that that data would still fall under whatever license it was distributed under.

**Daniel Whitenack:** Yeah, it's a good question. So if there's anyone that knows more about this out there, I would be curious... So hit us up o Slack, or LinkedIn, or Twitter, and let us know. Maybe our friends at Immuta, who we had early on on the podcast...

**Chris Benson:** That's true.

**Daniel Whitenack:** I don't know if you saw, but they got a whole bunch of funding - wasn't it like 40 million, or something?

**Chris Benson:** It was substantial. I don't remember what the number was.

**Daniel Whitenack:** Yeah. Led by (I think) Intel Capital, or something... So Immuta we had on early in the podcast... So not only do they have a data product, which is very interesting, but they're also very much legal experts in these sorts of things. So if you're listening out there, let us know your thoughts.

Maybe we should turn to how to find and search for open source tools and code and data and models. What are your go-to's for that?

**Chris Benson:** Probably for me the same as most other people certainly that are in the software world, obviously it's just googling for certain terms. Googling for some particular function and saying "open source" along with that. Going to GitHub, going to blog entries that focus on open source ratings and distributions and such... Usually, it's not hard, especially in the software world, because that's been going for such a long time, and we kind of have our inroads there... So I can usually find something that is more or less what I want within just a moment or two of an initial search. Then there's diving into the tool. For a while it was a lot harder on the data side to do that, but the tools there are starting to come about as well.

**Daniel Whitenack:** Yeah, it seems like in my workflow a lot I'll almost start from known, trusted sources, and then kind of branch out from that. And what I mean by that is like - I can go to TensorFlow or PyTorch. They have extensive documentation online. So if you just search for TensorFlow documentation or PyTorch documentation... Or sometimes I'll search for "TensorFlow transfer learning tutorial", let's say. And there's one of those.

So I go there - I wanna do transfer learning with TensorFlow, TensorFlow is open source, so I can install it... And if I find the TensorFlow docs, then it'll tell me how usually there's like a Getting Started, Install TensorFlow, or they'll tell you "Hey, you can try it on Colab", or whatever.

**Chris Benson:** \[23:53\] I'm the same. Another one, kind of hitting what are kind of the forces, the big names in AI, that are reputable, and that you know that their legal teams have looked at things, and all that... There's a trust factor.

Another one that I'll use a lot, especially at work, is NVIDIA, because they have a huge amount of documentation online. So I'll start from them and see what they have; they have a bunch of partners as well... As does Google, as does Microsoft, as does Facebook, which is PyTorch...

**Daniel Whitenack:** Yeah, so there is a lot of good documentation pages out there... And I guess in order to find those you kind of have to have a little bit of domain knowledge, of like what are the key tools out there. You've already heard us mention a few like TensorFlow and PyTorch, but there's other ones... Like Chris mentioned, NVIDIA tools; I think they have various toolsets out there. There's SpaCy in the NLP world, there's of course the kind of data sciency Python toolkit, which is like Pandas and scikit-learn, and all that stuff...

I feel like we have an advantage, because we know about those things... So when I'm searching, for example, to do maybe a traditional "machine learning" thing on a smaller dataset, I might go to the scikit-learn documentation and search for how to do this thing, or that. Whereas if I'm trying to do a thing that I know is an AI thing, I might search on TensorFlow, or PyTorch examples or tutorials on that particular thing, and find certain open tutorials, and how to install the right toolkit, and that sort of thing... But I feel like I do have that advantage, and I'm not sure what the best way is to get that exposure to the main tool kit. I don't know if you have thoughts on that...

**Chris Benson:** That's a great point, and that is that we all - based on whatever problem that we're tackling at any point, we don't necessarily just use a single tool. There's not a single go-to thing that you're always gonna use for every project. If you're a TensorFlow person, you may use a lot of TensorFlow, but you probably also use some tools from NVIDIA, you use some Python tools... There's a lot of different possibilities on how you might combine a toolchain together to solve that particular problem, and it may change as you go from problem to problem.

So I think that domain knowledge is hard to come by, so probably you either need to be really focused on self-learning and trying to follow reputable sites around, or get into a course; there's a bunch of online courses - and I know we've talked about it, we have some episodes that specifically address learning... But it helps to start not at square one when you're doing this, so that you can be a little bit more efficient, quicker.

**Daniel Whitenack:** Yeah, for sure. I agree with that. If you're trying to really level up to state of the art things, I would highly recommend the website Papers With Code.

**Chris Benson:** Yeah.

**Daniel Whitenack:** You can actually search -- and there's also leader boards for common AI tasks, whether that be image recognition, or visual reasoning stuff, or other things... Speech recognition... And actually search through the leader board of papers, and then see the actual links to the tools that they use, and also the code implementation... So that's a good idea.

Even if you just browse around that site, I think, and look at the various things, you'll get a sense of like "These are the main things that people are using to do this sort of stuff. These are the main things people are using to do that sort of stuff." So I think that could be useful.

**Chris Benson:** Yeah, it is. It's interesting - you bring up a great point, that there are different types of things that you may be looking for. On one side, you might be looking for just broad data, and you might go to, for instance, Google's dataset search that they released last year, which is fantastic, because they have indexed many data sources and you can start looking, and that's one of many ways to enter into it. It's not the only one.

\[27:48\] But you might also be looking for domain expertise as well - we've had Semantic Scholar on the show before - and you might go look for some of these scientific papers that are relevant to the things that you're about to tackle. Or you might be building on top of one of those papers. So developing that domain expertise in the specific area, and then also having a diversity of data to tackle the problem with is really important. I think that's a really hard thing for people that are new into AI, is understanding all these different pieces you have to put together into your workflow to be productive as quickly as possible.

**Daniel Whitenack:** Yeah, for sure. It's a challenge, but I think the situation is better now than even a couple/few years ago.

**Chris Benson:** Oh, yeah...

**Daniel Whitenack:** So that's encouraging. There's a lot of tutorials out there for various things.

**Chris Benson:** We've had the benefit of standing on top of the software development communities' shoulders. So many of these problems that had we not had that privilege of doing would have definitely slowed down the process... So we're seeing warped speed in the AI world in terms of its evolution, largely because we can look to other places that are associated, that are related, and say "Oh, that's how it was solved. Something very similar."

**Break:** \[29:08\]

**Daniel Whitenack:** Alright, well we've talked a good bit about the tooling and the code and everything that is out there... I'm curious for you - let's say that you're approaching a problem and you're using a new toolkit. Maybe it's the Dgraph thing that you were talking about - you're wanting to get into that, or... You know, for me recently - I was doing some speech-related things; there's some new speech-related stuff out of NVIDIA that's pretty interesting...

So there's this new toolkit of things that you have access to, but one of the things that I see people struggling with is integrating that toolkit of stuff into your local machine to experiment with might not actually always be the easiest thing, because "Oh, this new toolkit actually requires this version of NumPy", and you have this version of NumPy, but if you change to this version of NumPy on your local system then you break these 14 other things that you use locally... So I'm curious how you go about that, Chris.

**Chris Benson:** So a couple of ways of entering into that answer - one, I start with the end in mind. Am I just trying to learn something new in terms of like a new skill, or a new workflow? And if I'm doing something like that, then I might stick much closer to that tutorial specifics, and stuff. And if I wanna do that, I might do it in a Docker container entirely, where I can control the environment versions of everything. If they haven't done that for me, then as I get into tutorial, I'll scan through the tutorial, see what they're using, and go ahead and set myself up a Docker container for that process. That way, I have a constrained environment that exactly meets the tutorial's focus and can get through it with fewer problems. It's worth the investment of dockerizing it ahead of time, if they haven't done that for you. So that's one thing.

But in general, if I'm not just doing a pure learning spike, where I'm just trying to figure out how to do this thing that I care about, if I'm doing it with more of a production or productivity in mind, then I think what is the environment this has to meet; I may be looking at a tutorial, but then I'll translate it into "What are the constraints that I have? What are the resources that I have available?" and I'll take a little bit of time to try to transfer what they're trying to show me there into the world that I'm living in. Because at the end of the day, if I'm not just doing a pure learning spike and I'm doing it to deploy somewhere eventually, then it needs to fit into my world. So there's a little bit of prep time there to try to get a smooth workflow on my side going.

**Daniel Whitenack:** \[32:36\] Yeah, for sure. One of the things that I do a lot is if I'm just trying to see -- let's say that I'm trying to solve a problem, like a speech recognition problem, or something... And I see there's like three different things that people are talking about using out there, three different ways of going about it, what I might do is just spin up three different Google Colab notebooks...

**Chris Benson:** Yeah.

**Daniel Whitenack:** Because whatever I do there, it's gonna get blown away; it doesn't affect my local environment at all, but it is persisted, in the sense of like the code is persisted... It is a notebook, so you sometimes have a weird state and you're not guaranteed that it's going to run in exactly the same way again, but it does give you a very quick way of knowing "Okay, I have this environment, TensorFlow/PyTorch/Pandas/SpaCy", a lot of other things are already installed... There may be a couple of things I need to install via Pip or something, but I can generally run through and get the flavor of how something is gonna feel very quickly... And oftentimes what I'll do is I'll spin up three different notebooks and try to get this thing to run in the way they're saying, and it doesn't work, and then I try a different thing to get it running in the way they say, and it's kind of annoying... And then I try a third thing, and then it seems like not exactly what I want, but it seems like the workflow is kind of nice, so then I'll start adjusting from there.

So even just finding a good starting point, where you wanna put your flag in the ground toolkitwise, it can be useful to do it in that way, from what I've seen.

**Chris Benson:** You know, if I could go back, that is the one thing I would change about -- if I don't go often do a Docker container for pure ease of learning and ease of training, nothing beats Colab, in my view. They have the best simplified interface, that has everything that you need there... So yes, given that option, I will often use Colab to go do that. And I know a lot of other people beside you and me that feel the same way.

Sometimes I find myself wishing that other tools would look at Colab, recognize the ease that they've created for their end user, and go implement that. I'd like to see that kind of ease of use everywhere.

**Daniel Whitenack:** Yeah. Well, it would be unfair, I think, to talk about all of the great things that people are putting out there in the open in terms of data and code, and not talk about how you can contribute to that, or help out a project... Or maybe it's your own project and you wanna open it up... What are the flavors or categories of contributions that you think people getting into contributing to open source AI - what are the sorts of things that they might have in their mind, that would be maybe useful things to think about contributing to?

**Chris Benson:** Some of the common categories of contribution would be obviously the code itself that is the core for that software... But code alone often is not enough. I can't count the number of times that I've tried to work with code that without great documentation and without great examples I've found to be extremely hard to utilize in a productive way... So if you don't feel that code is where you should make your contribution, then going and figuring out how to use the tool, or offering up your insights from using the tool into documentation, or create examples...

\[36:03\] I love it when people create examples, so that if I'm coming in cold and I really don't understand the tool, a lot of times that's the best way for me to ramp up - I go to an example and then I refer to the docs from there, to try to get there. So those are some of the obvious things...

And another thing that I would suggest people do is reach out to the maintainer of the project and ask them, and say "What do you need?"

**Daniel Whitenack:** A lot of times there's a Slack team, or something.

**Chris Benson:** Absolutely. And tell them you love what they're doing, and you would like to contribute, and tell them what you think you're good at contributing with, and ask them for some guidance on that... And they will love you.

Open source projects - there are cases where you have paid teams that are maintaining, obviously, but if you look at the vast numbers, the majority of maintainers out there are maintaining for free; they're not being paid to do that, on most projects... So they love it. And be sure to tell them how much you love their software as you do it; help them with data. Is there data that I could go out and we could make links to, or find data... Whatever.

**Daniel Whitenack:** Yeah. I think that's a good point. Some of the larger projects, like we've been talking about (TensorFlow and others) have a large team behind them.

**Chris Benson:** Right.

**Daniel Whitenack:** But there's a lot of really great tooling out there, smaller tools that are actually pretty key in the workflow, that are developed and maintained by maybe one or two unpaid people, that are doing it because they think that this thing is useful... So that's one thing to keep in mind also as you're using open source software - that when you're using something and it doesn't do quite the thing you want, or maybe it breaks in a certain way, the way that you go about raising that to the maintainers shouldn't be coming from a place of "Why does your tool suck so bad? You are terrible and need to do a better job."

The better way to go about it is to say "Hey, thank you so much for creating this thing. I've noticed this", to raise an issue on GitHub; you could definitely do that. But I think the even better way to go about it is to say "Okay, this thing might need a slight modification here. Maybe I could reach out to the maintainer and see if they would accept a contribution to add that feature in." Then you could actually create a pull request and contribute that, and it's a much more productive way of going about interacting with open source projects.

**Chris Benson:** And for those who don't know what a pull request is, it is a mechanism by which you essentially offer up your code to be integrated into a larger codebase... And it gives the maintainer of that codebase the change to review what you're doing, and choose to integrate it or not. And if they don't, there might be a really good reason, and they'll give you feedback typically on what that is... But they're already spending their time, so - I love what you said, Daniel, about don't just say "I need a feature." Open source is democratized software, to some degree. Go out there, talk to them ahead of time, and then say "I'd like to take a stab at writing code for this", and offer it up; they can choose to take it or not, and they may give you some guidance if they're grateful for it.

**Daniel Whitenack:** Yeah. I like what you say as well. There is a contribution process that's common to GitHub. There's a lot of jargon around that... And what we'll do is we'll include as a learning resource on this episode - there's a couple of really good blog posts out there about this whole process. There's a repo on GitHub... You maybe want to contribute -- when we're saying "contribute", it could be something small. If you see in a project's documentation that they have this error in their documentation and it's just a wording change, or maybe a change of a variable name, or whatever it is in their documentation (it's a small thing), you of course could create an issue on GitHub and say "Hey, you need to fix this", but it's super-quick and not that hard to just go to their repo, see how they have their documentation laid out in their repo, and then it's a matter of forking that, or making a copy of that repo, pulling that down to your local machine, making the change, pushing that back up to GitHub and then creating this thing, like Chris said, like the pull request. That's a no-brainer.

\[40:33\] You don't need to know that the contributors are going to want that change. They may reject it. But I think more than likely they're gonna be just happy that people found something wrong with their documentation and fixed it. So yeah, I think that that workflow -- we'll give a good link; if you're new to GitHub, if you're new to Git and this process of pull requests and all of that, we'll put a link in so that you can learn a little bit about that.

**Chris Benson:** Yeah, absolutely. Another way to contribute is if you're using that software and it's working for you well, and you're solving something that's important to you, share that process; not just what you're doing, but how you did it, how you used the software, in a blog post... That doesn't actually directly require interacting with the maintainer of the software, but it is showing appreciation, it is giving back to the community by showing how to use it effectively, and it may inform them about not only what you've done, but your workflow. And all of that is really useful to other people, and very community-minded.

**Daniel Whitenack:** Yeah, actually there is a couple of really good blog posts out there about building AI workstations - personal computer, with a GPU and all; I relied on those very, very heavily... Because it had been so long since I put together a computer of my own. My reference frame was way back when stuff was named differently, and processors were not near what they are now... So just getting a bearing of like "What range of things do I need to be looking at here, and what configurations are people going after?" That was really useful. So even if it's like a guide, "Installing CUDA and getting your new GPU running" - that sort of stuff is really useful. And of course, there's a lot of that particular blog post out there probably, but there's other things that aren't.

I'm a Pachyderm user, and we've had them on the show, and there's this new GitHub Actions thing that people might be familiar with, where you can automate tests and deployments through GitHub... And I asked in their Slack "Has anyone tried to do a data pipeline from GitHub Actions?" There were a couple people that responded in Slack, like "No, but I've been thinking about trying it", and that sort of thing... So if I end up doing that, I think that would be something that would be really great. It's probably not something that they're going to pull into their main repo maybe, because it's sort of an auxiliary thing, but it would be something that would be really nice for a blog post, so that those people out there that are trying to do that thing could find a resource and do that.

**Chris Benson:** \[43:06\] You know, as you say that, a thought occurred to me that I think is something that hasn't matured in the AI world, that needs to... And that is the fact that by comparison, if you look in the software world, not only do you have communities around specific software packages that are developed, but you also at the same time have a general sense of community around open source software that even transcends the specific language and libraries that you're in. You can go from one language to another. And there may be little changes in how the sub-communities work; there is an understanding in what is expected in open source in general. I think that we're not there yet with AI, and I think that would be something -- I know from our conversations what we'd both love to see is instead of just having specific datasets, or specific software packages, a sense of open AI and a larger community sense being built... And a sense of community...

So whether you're using PyTorch with a particular dataset, or TensorFlow, or NVIDIA stuff - it doesn't matter; there's an overall sense as you move through these communities on what to expect in that AI world.

I've met so many people in AI that did not come from the software world and did not already have that built into it, that we have some integration to do on that. I'd like to see that happen going forward here.

**Daniel Whitenack:** Yeah, and there have been some encouraging signs on that front. I think both TensorFlow and PyTorch have developed their various hub environments, where you can share setups and models and configuration and all of that... So that's kind of nice. There's this kind of sense that people are building these hubs, and I also think about, of course, the Hugging Face team, that now has just tons of models that are available in their open source project.

I saw a tweet - I was just pulling it up - from Clem, who was on the show quite a while back, from Hugging Face (we'll link to that episode). His tweet was "25 team members + 400 open source contributors + machine learning = fastest technology building I've ever seen." Which I think is definitely true. You just look at the pace with which they're developing. Being 25 actual team members now, but 400 open source contributors - there's sort of these pockets of the community, like you were talking about... So I hope that we see that growing.

**Chris Benson:** I do, too. I think that's a great way to finish... I mean, it's not just about your team; you're really standing on the shoulders of an entire community of people out there, that have contributed to tools, and made data available and all that. All of us are in that position. So as folks move forward, be thinking about how you can give back to this community and build that sense of community. Great conversation today, Daniel.

**Daniel Whitenack:** Yeah, for sure.

**Chris Benson:** It was a great idea, thank you for coming up with it.

**Daniel Whitenack:** Yeah, definitely. I hope you enjoy the hot weather, and stay safe, stay inside, and we'll talk to you soon.

**Chris Benson:** Will do. Take care.
