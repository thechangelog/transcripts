**Daniel Whitenack:** Welcome to another Fully Connected episode of Practical AI. This is where Chris and I keep you fully connected with everything that's happening in the AI community. We'll take some time to dissect the latest news in the AI world and dig into some learning resources to help you level up your machine learning game. I'm Daniel Whitenack, I'm a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a tech strategist with Lockheed Martin. How're you doing, Chris?

**Chris Benson:** I'm very well today, Daniel. It's been an interesting week in various types of AI news, and I've noticed some themes that we can jump into along the way of some fairly substantial concerns, I'd say. The world evolves...

**Daniel Whitenack:** Yes. Well, on a slightly less on-topic note, but definitely newsworthy - I don't know if you're gonna watch Rings of Power today or tomorrow, or you've already watched it...

**Chris Benson:** Not yet.

**Daniel Whitenack:** Yeah. So neither of us have watched it, so you're not going to spoil anything for me, because I haven't watched it either... But tomorrow, our family - we're going to have a bit of a marathon and watch through Peter Jackson's Lord of the Rings, and then we're going to watch Rings of Power. So it's going to be an all-day affair. And I'm sort of basically trying to ignore anything I'm hearing about whether Rings of Power is good or bad, reserving judgment until I see it.

**Chris Benson:** So yeah, that is -- I don't know that we've ever talked about this, because it's not directly in the AI world, but that I grew up as a fanatical Tolkien fan. And not only Lord of the Rings, and obviously The Hobbit, but The Silmarillion and all the other stories that most people don't ever want to read, I've read them all. I've read them all multiple times. So I'm one of those a little bit slightly nut job types... It's my favorite set of stories in the world. So yes, here's the conflict. My wife and my daughter aren't as enthusiastic as I am. So they like it, but not like I do.

**Daniel Whitenack:** Neither is anyone in my life, really...

**Chris Benson:** Yeah. So the big thing about Rings of Power coming out was "Do I just watch them? Or do we do it as a family?" And my wife's like "Yeah, we would like to watch it", but they don't have the urgency. So now that it was released last night, Daniel, as we are recording this, I am sitting here, waiting, like "When are they going to be ready to do this?" Part of me wants to selfishly just go watch it. But no, no, I'm gonna be a good family man.

**Daniel Whitenack:** \[04:18\] I mean, for someone like you, with that sort of background, you're getting this like visual sense of things we haven't seen in other movies, like The dwarf Kingdoms and such, which is going to be really interesting... I hope it's really awesome, but it's different. It's definitely different. So there's a lot --

**Chris Benson:** They've taken license with the story.

**Daniel Whitenack:** Yeah. I mean, which one would probably expect...

**Chris Benson:** I agree. And Peter Jackson though, he did a great job. He took some license with the story, but he pulled it off pretty well, in my view. They've taken more license at Amazon with this story, so I'm -- I'm one of those people who has read The Silmarillion many times and I know all the detail, and I'm gonna be trying so hard not to let it just irritate the crap out of me. But I'm looking forward to it because of the scope and level of quality that it's supposed to have.

**Daniel Whitenack:** Yes. Well, speaking of creativity, and license, and all those things, I think -- and this is one of the topics you brought up to me - one of the big areas that we're seeing just kind of explode is, I would say... I mean, in one sense, AI and creativity, but in a sort of broader sense, an expansion of the things that AI is doing in a creative sphere that is paralleling, a lot of what humans could do... And particularly, I think the most obvious one that we've seen recently is both DALL-E, Stable Diffusion, all of these models that are sort of text-to-image models. So yeah, it brings up really interesting questions around -- well, I think really fun things. First of all, really positive and fun things around just the ability of maybe non-artistic people like myself, who... I'm not a designer, I'm not a painter necessarily... I took art in high school. But the things that I could do creatively with these tools is amazing and fun, and that's a really -- from my perspective, there's this sort of really fun, positive element about it. I don't know, do you see that side of things?

**Chris Benson:** Yeah. And by the way, I'm looking forward to going and touring the Louvre at some point in future years, and seeing a Daniel Whitenack AI original up there... Because you know that's gonna happen.

**Daniel Whitenack:** Yeah. Well, what do you think, is the attribution of these works -- how should one attribute one of these AI-augmented artworks?

**Chris Benson:** So I don't know that I have the answer... And I can see both sides as we talk about this, because as we are talking about some of these articles that we've seen, one of them, which was maybe on vice.com, is an AI-generated artwork won first place in the State Fine Arts Competition, and artists are pissed. So I think that's going to happen a lot. I think the question then becomes, if you want to talk about artwork, you have to be specific. I'm so biased, coming from this AI community... But it's a set of tools, just like Adobe Photoshop was for many years in the digital space... And now, AI is another set of tools, and I personally see it as perfectly legitimate. But there may have to be competitions that specify "by the human hand", in a non-digital format, kind of thing. I don't know. It's not just coming; it's here, and it's here in a big way, and only more of it.

**Daniel Whitenack:** \[07:58\] Yeah. And we are Practical AI here, so people are wondering how they can practically do some of these things. One of the examples is DALL-E; you can request access and use DALL-E, which now includes sort of extra features in painting, and other things. It's funny, Chris - we talked about DALL-E recently; it almost seems like we've moved on from DALL-E, and now Stable Diffusion is the thing... And you can see how things fast things move in the AI world.

Now, at the time we're recording this, Stable Diffusion is the new new, and you can use -- there's actually... From Stability, there's dreamstudio.ai, which is a -- you can sign up and do this sort of also AI-assisted creativity work within that Dream Studio app. So if you're wanting to get hands on in a practical way with these models, it's not that hard at this point, whether you're doing that on a Hugging Face space, or in Dream Studio, or in the DALL-E interface... There's multiple on-ramps to this.

**Chris Benson:** Yeah, I agree in. It's interesting... I do think that this is going to open up the spaces in a big way. Can you talk a little bit -- because I know we've talked about DALL-E quite a lot over recent episodes, so listeners probably are fairly familiar with it if they've been with us for a short while at least... Can you talk a little bit about Stable Diffusion at a high level, like what do you know of that's different? I know it may not be your specialty.

**Daniel Whitenack:** Yeah, it isn't really my specialty. I think that there are differences with the sort of modeling technique and the data and the way they did it. I think though one of the interesting things is with Stable Diffusion being more of an open approach, where DALL-E was sort of released in a very guarded way, with a sort of waitlist type thing that we've seen from OpenAI... Last time we talked, I think just used the public Hugging Face space to generate Stable Diffusion output on Hugging Face; there's this Dream studio thing... So I think it is kind of -- it's in the same stream as DALL-E and other diffusion models that we've seen. So we're still in this sort of stream of diffusion models. but I think the power of openness and community is part of what has driven the Stable Diffusion model to just like explode, and kind of - in some senses, people move on from DALL-E to Stable Diffusion. So that's a really interesting point in terms of openness, and how openness drives adoption of things as well, I guess.

**Chris Benson:** Yeah. So to turn a little bit, as we've been talking about kind of this new intrusion, if you will, into artistic output, and the fact that the folks that have been doing it the traditional way aren't so keen about it at this point - it has implications in a much larger way than just whether we like the art, and whether we care about it being AI-driven. It affects people's livelihoods. It affects jobs. And this is a recurring theme that we've talked about over time, that I don't think is a thing going away anytime soon... And that's how these things intrude into livelihood that were previously very human-centric, and start affecting jobs

There was another article that I ran across in the register; the article's title is "Goodbye. humans. Call centers could save $80 billion by switching to AI." And I don't think that's news to anybody, quite honestly. I think that we've seen automation occurring for quite some time; it would be natural to have AI models moving into those situations. It calls out the fact that all of these things are driven by economics. As AI is ever-increasingly present in the automation of previously human jobs is gonna be the economics driving that. I don't have anything up in front of me, but I remember in a very different industry there was the thing we talked about briefly, about McDonald's automating the food service a while back... So we're gonna see it everywhere.

\[12:20\] So as we do this, I think one of the challenges in front of us is recognizing it's hitting almost every industry. It hits medical doctors... One of the earliest things was radiographs, but there's so many other areas; cancer diagnosis... We've talked about many of these. We've talked about, obviously, airline pilots, we've talked about fast food... This is really hitting the gamut of industry. There's really no safe place.

**Daniel Whitenack:** I was kind of surprised... As you know, Chris, my wife and I are vegetarian, so when we're traveling, we have our sort of quick spots where we know there's something that is not meaty. And one of those places is White Castle, which has been interesting over time; I've noticed they've sort of been early adopters of things like the impossible meats, sort of plant or non-meat alternative meats, which was kind of surprising for me when they did that. But one of the last times I was coming down from Chicago, I was going through the drive-thru and now they have in the drive-thru an AI assistant that does some of the drive-thru interactions at certain times of the day.

**Chris Benson:** Not surprised.

**Daniel Whitenack:** I think not at all times, but at certain times of the day. And I was just totally -- I shouldn't have been shocked, because we talk about this every week, but I was surprised at just the... Yeah, it's there, and they're using it, and this is like in rural Indiana... An AI drive-thru thing.

**Chris Benson:** It's been happening for a while. It's just gradually trickling through every industry. And it's funny that you say that, because I actually went through a Chick-fil-A - sorry, Chick-fil-A people, because I'm about to say something not nice... But I was in the drive-thru and they had done this where they have the human teenagers trying to optimize the drive-thru to handle the traffic, and they're walking around...

**Daniel Whitenack:** It's like parallel processing, yeah...

**Chris Benson:** Yeah. And coming from this that we do, I was sitting in the car going, "Yeah, you're all gonna get automated away pretty soon..." In my head. I wasn't saying that to them.

**Daniel Whitenack:** \[laughs\] Hopefully not.

**Chris Benson:** That's literally what I was thinking in the drive-thru. I was "Yeah, this isn't gonna last as long as you think." But we're seeing that, and we're seeing it everywhere. I mean, software developers, we who develop software now have some tools that are AI driven by GitHub, for instance... That is one step toward that. So where do we go from here, Daniel? ...just to ask a really hard, giant, global question. At some point, people are going to start to notice.

**Daniel Whitenack:** I don't know that I have the answer. I think we're still though at a point where - yeah, there's certain things that fit within the distributions that models know. We talked about sort of apparent coherence in models recently, and I think there's things that fit within the distribution of what models know about...

So there's probably two things. One is what are those areas where we don't have good datasets and models don't know the distributions of things to put together, and those are still very -- those will be where we shift sort of human focus, I think... But then also, even where we do have datasets and we're automating call centers or something, it even stresses more the biases and the openness of data and models, because those biases are gonna hit really hard when they start affecting people's lives.

**Break:** \[15:58\]

**Chris Benson:** So another thing that I noticed since last week was there was a lot of interesting things having to do with AI interactions that had to do with government. And we're seeing that because, as we've talked about a number of times, the political, social, cultural and legal frameworks that we all live within, which all have a lot of commonality, even across different countries - they still haven't kept up with the technology. And so we have another big question going forward, is "What is the role of AI when it comes to the different types of feedback loops that are present between government and its citizens, and how does that affect it?"

One thing that was sort of humorous, I suppose, especially if it's not happening to you, was that there were some articles out about in France they've released a -- not released, but they're using a model in the French government to identify swimming pools from satellite imagery. And apparently - I did not know this; apparently, if you're in France, and have a pool, that pool is taxed. And so it affects the tax base, and it affects how many... And apparently there were tens of thousands of undeclared pools in France.

**Daniel Whitenack:** How dare they?

**Chris Benson:** How dare they not declare their pool?

**Daniel Whitenack:** How dare they swim...?

**Chris Benson:** So apparently, there were more than a few French citizens that were a little surprised to receive a tax notification that "We're now taxing your pool", that they had not previously declared. It's a little funny to me, because I don't have a pool, and I'm not in France, I'm in the US... But it does raise the question of such tools can be used anywhere, by any government, and for pretty much anything that they that they can do with the dataset. So that was one thing. What do you think of that? You don't have a pool, do you?

**Daniel Whitenack:** It is interesting... I think we were just talking about how AI models are affecting people's lives, but these very practical things about how the model is built show up almost immediately. One of the articles that we can include in our show notes is talking about these this pool model, that at first the system confused solar panels for swimming pools with an error rate of 30%, but DGFIP - I'm assuming that's the government agency, or whatever that's doing this - says that it has since increased the accuracy. So I think that's one of these cases where "Can a model--" I mean, in a very practical sense, outside of the implications of it in a government rule sense, a model can do this, no doubt. But it doesn't do it perfectly.

So as a practitioner in the French government, if you are one of those practitioners, how do you anticipate and deal with those biases in the system and your understanding of your data? I would say that if you do some work up front to sort of understand behavior, also do some human evaluation to understand how the model is behaving, if you analyze the biases in your data set, and then you release in a way that is taking into account those behaviors of your model, then people might still be angry, but they're gonna be angry that the government is taxing them for their pool. They're not necessarily going to be as angry as, "Hey, the government is taxing me for my pool that doesn't exist, and only is thought to exist because I have solar panels on my house, and I'm trying to save the environment." You know, that's probably a different scenario.

\[20:07\] So I don't know the full details of what they did in terms of that side of things, but I think as a practitioner, there's a lesson here that as you release these models, and they are influencing people's lives, the very fact that these won't behave in maybe the way that you always assume that they will, that has to be factored in up front.

**Chris Benson:** I agree with you. Not only that, but we tend to -- as we've been tracking what's happening in the world over the years we've been doing the show, and we tend to gravitate naturally toward kind of the new stuff coming out, and all that... And what I was struck about is this is -- I don't know the details, but this looks to me like probably a fairly simple, by today's standards, old-fashioned convolutional model, I would guess, that was doing this. I don't think it's necessarily the most cutting-edge deep learning of 2022... And I'm not being critical of those; if we happen to have listeners, I'm just saying you're being very practical, in that you're using a technology that's been around for a while to do that... It's really mundane, but with some fairly substantial effect, it probably did not cost very much to put this model together, and train it and get it better compared to many of the things we talked about now. And yet, they note that a 30 square meter swimming pool will result in about 200 Euros of extra taxes per year. So every pool is another 200 Euros that they can do. And apparently, that has amassed something along the order of 10 million Euros in new revenue for the French government. So enough to easily pay for the time of your data scientists that are working on that, plus quite a bit more. So I would not be surprised to see a lot more.

**Daniel Whitenack:** Yeah, and I wonder too the -- so if if you're generating that amount... I'm thinking of -- you know the model that I'm thinking of, Chris, is... I don't know if you had this happen in your town, but the bird scooters or these electric scooters that are in cities, right?

**Chris Benson:** Yeah, I've used them.

**Daniel Whitenack:** I mean, I can't comment on their whole strategy, but my impression of their strategy was "We're going to show up overnight in your town and drop hundreds of scooters on the streets... And we'll deal with the legal implications later." So they are prioritizing adoption above the legal implications of the problems that they might see. And I think it worked. The companies that did that, they saw the trend coming and they received a lot of adoption up front, and they likely received a bump in revenue, versus the legal implications of what they're doing.

So maybe in a more pessimistic sense, one could take the perspective, if you're the French government - well, you say your thing's 70% accurate? Well, just release it, because we'll get enough revenue that we can take care of any of the legal things that come up from us doing this. That's maybe a more cynical view of the practicalities of it, but that's very much a business decision, right?

**Chris Benson:** It is. It's funny... I think I'm usually the more cynical of the two of us in terms of what we bring, but you raised a great point... Speaking of cynical, did you see the Nvidia news over this past week? Nvidia has been having kind of an ongoing, very public conversation with the US government about whether or not they can have A-100 and H-100 chips in China... Which is relevant, because there is a little concealed kind of competition in many areas, economically, militarily, all sorts of implications between China and the West, with the US probably being kind of the center of that... And so for national security reasons, there's this ongoing whether or not they can do that. I won't jump at -- what do you think of that? I'm kind of biased. I'm already in the defense industry, so I have some thoughts on that... But what do you think? How did that strike you when you found out this was going on?

**Daniel Whitenack:** \[24:22\] I see a variety of perspectives here, I guess. I know the supply chain stuff is all messed up around the world, and so to some degree, people are just looking for "What jurisdictions do I need to partner with business-wise to run my business?" But there are a lot of other implications there too, around security things, and that sort of thing. And I know, in listening to the IRL Podcast from Mozilla recently, talking about sort of balances of power that are happening with different countries around the world - that's something to consider as well. I don't know, what did it trigger in your mind?

**Chris Benson:** Well, I can see -- like you, I can see multiple sides to this. I'm part of this AI community, and certainly, that part of me goes, "Well, that's not a very sensible thing to go do. That impacts a lot of livelihoods, and all that." The defense side of me is very aware of that competition, and so as a strategic move that I don't think could last-- if that were to stand, the Chinese would go and create their own capability, but that might take time. So I can see all sides of the story.

I don't know that this particular move, the way it's being done is the most effective way for U.S. to secure its interests in the long-term, but I wasn't at all surprised that that was -- I mean, right now, we've talked about, in multiple shows, that AI is a power lever in the world. It is for governments, it is for companies, it is for individuals; it is one of the key ways of filling power vacuums now, and changing who has the power. So I think we're gonna see all sorts of things all over the place, across the land. You see the same thing in a non-government sense, between corporations. And we saw it with artists this week, as we talked about a little while ago.

**Daniel Whitenack:** Yeah. One of the things I think is interesting - I guess this gets to some of the power dynamics... One of the things that was surprising to me - and I don't know the stats on DALL-E, but I saw on Twitter that Stable Diffusion, the news Stable Diffusion model, they're talking about pricing in terms of the market value of that training. And I'm seeing that tweet from one of the team is that they used 256 A-100s in the cloud for 150k hours. So at market price, Stable Diffusion costs 600k. So 600k is by no means a small amount of money for most individual humans, but 600k, in a government sense, or in a large company sense is nothing, right?

**Chris Benson:** It's not even a rounding error.

**Daniel Whitenack:** Right, exactly. So I do find it interesting that because of how the infrastructure around this is being commoditized, and the tooling around workflows, and MLOps, and distributed training, and all of these things is getting better. In some degrees, I see this as sort of also a positive shift, I guess, in terms of what's possible maybe for smaller teams, that can still like make an impact, release a thing that takes the industry by storm, for a number that's not like something that's restricted to nation-states, right?

\[27:56\] Before, I think you had these sort of models that were being released where this is out of reach of anyone but big tech and a nation-state. And it's very interesting to me that something like Stable Diffusion - again, not a small amount of money for like -- if I'm myself, and I'm an independent researcher, 600k is a lot of money.

**Chris Benson:** You don't have that in your checking account right now?

**Daniel Whitenack:** I wish I did. But it's reasonable to think "Well, if I really wanted to, and maybe I live in the Bay Area, I could sell my house for 600k and train a model", right? But there's a route to that sort of money for -- or a small amount of seed funding in terms of a startup, or something like that.

**Chris Benson:** It's attainable.

**Daniel Whitenack:** Right.

**Chris Benson:** If you really are motivated, it's attainable.

**Daniel Whitenack:** Yeah. And I realize that also I'm kind of revealing my Western biases here. That sort of money is not within reach for basically the majority of the world. But it is encouraging to me that this sort of innovation can happen from small teams, and isn't restricted to sort of nation-state actors or big tech. So yeah, that's encouraging.

**Chris Benson:** It's a great point. That would be expected over time. With all technologies - they come out, they're at their most expensive and they're most inaccessible, and then eventually, they become cheaper and more accessible, and we're seeing that happen.

**Break:** \[29:27\]

**Daniel Whitenack:** Well, Chris, I think there's a number of things that I ran across, that are in some way related to the things that we've been talking about, in one way or another. One of the interesting articles that I think everyone should take a look at was posted on the Hugging Face blog on August 31st of this year, 2022, and it's talking about the Open RAIL licensing, so toward open and responsible AI licensing frameworks. And I think this is really, really relevant for people, and people should take note, because this is the licensing mechanism that was used in the recent releases of the BigScience BLOOM model - which is kind of the latest, greatest large language model - and Stable Diffusion, which we've been talking about the whole episode.

So you can actually go in this blog post and you can see the links to the Open RAIL licenses for BLOOM and for Stable Diffusion... And what I think they argue here is basically, machine learning models or AI models have in one way or another been licensed under licenses that mostly have been applied in the past to either software or content. So like software on GitHub I might license as MIT or Apache II, something like that. There's various implications of that. And if I release content, like setup pictures, or something, I could do that under Creative Commons, for example. Or like a book, if I wanted to make it more permissively licensed under Creative Commons, something like that. And over time, people are like "Well, which of these do I use for models?" Because a model is sort of like an asset, it's files, and in some way it has relations or similarities to content, and in other ways - well, it does have code associated with it, training, there's a model definition, there's config... That sort of similarity with code. So do one or one or both of these fit better?

\[32:30\] And I think there's additional things with models that maybe don't fit either one of those cases. There's things around biases, the use of the model, the limitations of the model - that's really not in common with code, right? Because in code, generally, if it's deterministic, you have an API endpoint and it does a thing, and you can look at the code and understand what it does. Like, it does a thing. That's all it does. But with a model, there's sort of like behavioral and bias things that aren't in common. I don't know over time if you've run across these sorts of licensing things with models, in terms of the fit of sort of datasets, code, models, and what's licensed where...

**Chris Benson:** I have. And I think a lot of people in the community at large have. It's a natural question to ask. You and I are fond of saying "You have to have software with your model to get stuff out there", and software is pretty well established, as you just pointed out with the open source models; and you have some choices. And I think they're fairly well understood today. And especially with Creative Commons, and such as that as well. This has been a big ambiguous area for a lot of people not understanding, so I think it's long overdue. Glad to see it came from Hugging Face, because they always put out fantastic stuff, as we're often fond of talking about... How would you describe that a little bit of the differences -- recognizing bias, how would they approach kind of doing the licensing that accommodates bias, for those who haven't had a chance to look at the article? What's different, or what's new there they might not have seen in those other categories of open source licensing of some sort?

**Daniel Whitenack:** Yeah, so I think that there's commonalities with other open licensing structures or mechanisms that maybe we're used to from the AI world... But here there's really two kind of pieces of what makes this interesting. One is it's open. So that's like one aspect of it, open access. So that's like an access thing. But then the other side of it is responsible use. And that's really kind of where this RAIL component comes in.

So they build off of this idea of RAIL, or Responsible AI Licensees, and these - you can go to also the RAIL... There's a RAIL page, which talks about the RAIL licensing effort, which has been talked about in an ACM paper, Behavioral Use Licensing for Responsible AI... But basically, these RAIL licenses say they include behavioral use clauses which grant permissions for specific use cases and/or restrict certain use cases.

So if you think of a model - again, it has similarities with open data or open code, but it also has this behavioral aspect to it. And so what the Open RAIL license kind of does is it grants sort of permissive access, and redistribution, and that sort of thing, as you might expect, with an open license, but then it has these clauses which talk about responsible use. So I can give an example here...

**Chris Benson:** That'd be good. That's the one thing I'm wondering about it. Responsible is kind of an ambiguous--

**Daniel Whitenack:** \[35:58\] It is. Well, and I think that the structure -- really the Open RAIL license is, I think, a structure. And the Open RAIL license that you would adopt for your model... Maybe you could adopt sort of Stable Diffusion's Open RAIL model if you have a similar model, but other models are going to have other implications. So you have some flexibility in the responsible use clauses.

For the Stable Diffusion license, I'm just looking here, there's sort of attachment A all the way at the bottom, and it talks about use restrictions. And this is really this kind of clause that in my understanding is really important here. And they talk about you agree to not use the model or derivatives of the model, and then they have a bunch of things. So one of those things is in any way that violates applicable laws. That's okay, so kind of boring... But if you if you go down a little bit, there's very interesting ones, right? You agree to not use the model to defame, disparage or otherwise harass others. And there's other kind of interesting ones, maybe specific to behaviors that they anticipated use of the model, but they wanted to avoid.

There's one that says, "You agree to not use the model to provide medical advice and medical results interpretation." So obviously, you could generate images with Stable Diffusion, or maybe interpret images with such a model, that are medical-related, right? Medical imagery is a type of imagery, right? So maybe that's a use that they anticipated and had internal discussions about. And so there's all of these use restrictions or clauses that go into the sort of RAIL part of the Open RAIL license. So it's still open in terms of access and distribution type of things, but then there's these clauses around responsibility that are explicitly included.

**Chris Benson:** That's interesting. Whereas I know you and I are very focused on kind of AI ethical topics and the responsibilities associated with that, I find the explicit call-out potentially short-sighted in terms of unexpected outcomes and consequences... So I'll have to go through that in-depth after the show and see what I think about some of those ideas, and see if I can come up with any that I think maybe weren't what they were thinking, just as a fun exercise.

**Daniel Whitenack:** Yeah. And I think that that's always a -- it's probably an... I mean, it's a preexisting problem with any licenses, right? You can only anticipate so much. I'm reading some of the frequently asked questions from the BLOOM Open RAIL license, and one of the one of the explicit frequently asked questions is" Does the license cover every harmful use case?" So this is their response... Maybe that's useful for this discussion. They say "No, we recognize that the list of use base restrictions does not conceivably represent everything one could possibly do with our work. We focus on use cases which could be feasible for the model at this time. The license is a start by us at exploring how such real licenses could be used to mitigate harm, and we hope that these first set of provisions can evolve into more comprehensive provisions over time, with community engagement." So I think they also recognize this explicitly, right? You can never anticipate everything.

In some of the discussions we've had on the podcasts over time, around responsible use of AI and ethics, I think there's this obligation on the developer's part to reasonably try to anticipate harmful uses of what they're doing, with the understanding that you're not going to anticipate anything, but at least if you made an effort to anticipate some things, then some of those things are anticipated, and you're not just sort of chucking your thing out into the world and seeing what happens.

**Chris Benson:** \[40:05\] I think for each item they need to have a little parentheses behind it and it says, "and the kinds of things that you know I'm referring to..."

**Daniel Whitenack:** Etcetera, dot, dot, dot. Yeah, that sort of thing. Yeah. So, I think this is really--

**Chris Benson:** It's a good start.

**Daniel Whitenack:** It's a good start. I think it opens dialogue as well, which on my team we're thinking a lot about these things in terms of datasets and models that we release. So it's really good to have some sort of open dialogue around these things, I think.

**Chris Benson:** I agree. I think if this is a start, and the conversation can kind of evolve, as did open source licenses on the software side - that was an ongoing... You know, there were many iterations.

**Daniel Whitenack:** Well, there's still not agreement.

**Chris Benson:** And there's still no agreement, but it's much more mature than it was, say, early in my career.

**Daniel Whitenack:** Right.

**Chris Benson:** And so hopefully, this is the start of the conversation on the model side.

**Daniel Whitenack:** At the end here, I think -- I mean, what we've been talking about is hopefully very practical, but we can provide people with a couple of practical learning resources that have come across our desks over the past week. One that I think fits right into our theme of Practical AI and the things that we care about is an upcoming conference that actually started out of a sort of viral tweet on Twitter called Normconf. This is a completely -- as far as I understand, a completely free and online event, but with an amazing list of speakers. A really, really great list of sort of AI, machine learning, data science, tech speakers... And what they say is "What if there was a conference all about the mundane behind the scenes, how the sausage is made, middlebrow, unsexy, normcore stuff in the data and ML parts of the tech world?" And so that's the goal, to talk about all of those things that aren't probably what is the latest diffusion model, but "I tried to train this diffusion model and I'm having trouble with my infrastructure and data, and can't make it work" sort of problems. So you can see even people that we've had on the show here are represented --

**Chris Benson:** Yeah, I was recognizing that...

**Daniel Whitenack:** Yeah, are represented in the list of speakers.

**Chris Benson:** And future guests for our show are surely coming from this list.

**Daniel Whitenack:** I certainly hope future guests, yeah. If you're out there and you're speaking at Normconf, let us know.

**Chris Benson:** Just reach out to us.

**Daniel Whitenack:** I think this is just a great, focused, practical thing that will be happening, and I hope it continues to happen... But I'm certainly excited to listen in and see the set of content that they're putting together.

**Chris Benson:** Me too. I'm all over this, so I'm gonna register right now.

**Daniel Whitenack:** Yeah, cool. Well, Chris, I've enjoyed chatting through things as always with you, and hope that you have a good Labor Day. It's about Labor Day here in the US, so we've got a long, long weekend... But enjoy the holiday, and good to chat as always.

**Chris Benson:** You too, Daniel. Have a good weekend. Take care.
