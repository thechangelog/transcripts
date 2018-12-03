**Daniel Whitenack:** Hello, Chris! How's it going today?

**Chris Benson:** Doing really well. How are you today, Daniel?

**Daniel Whitenack:** I'm doing good. I know in one of our previous news and updates show we started going down the rabbit hole of AI and art, and I'm really excited today because we have Brett Gaylor here with us, from Mozilla. He's really working at the intersection of AI and media. Really excited to have you here, Brett. Welcome!

**Brett Gaylor:** Thanks! Nice to be here. Hi Chris, hi Daniel!

**Daniel Whitenack:** Brett, why don't you give us a little bit of a background of how you got involved in AI, and media, and Mozilla? Give us a little bit of background about yourself.

**Brett Gaylor:** Sure. I'm a documentary filmmaker; that's usually how I describe the work that I do... But actually, scratch that. I would call myself a documentarian. I'm kind of platform-agnostic to be nerdy.

**Daniel Whitenack:** I like it!

**Brett Gaylor:** \[laughs\] Yeah, I make creative non-fiction work on the internet, about the internet, using the internet. It's a three-part trifecta there. I made some feature documentaries; one of them was about remix culture... It's called "RiP!: A Remix Manifesto." That was in the early oughts - around '06, '07, '08 we were seeing the internet become a place with an emerging folk culture of people taking media and remixing it, downloading it to their computer, and that full process was really creating a lot of anxiety in the traditional legacy media, but also pointing a way towards a more participatory culture of the internet... So I made a documentary about that period of time.

It was a really hopeful time for those of us who were involved in the internet's early days; it felt like this really democratic moment, where anybody who wanted to participate in the culture around them was suddenly able to do that much more easily, and to be able to find a good global audience all around the world.

**Daniel Whitenack:** The internet was going to democratize everything and solve all our problems...

**Brett Gaylor:** Wasn't it...?!

**Chris Benson:** Didn't it do that...?

**Brett Gaylor:** Well, yeah, and Nazis. So yes, the internet did do this, but then we sort of saw a few cracks in the utopian landscape, and around 2013 I started thinking about the ways in which the business model of the internet was leading to an increasing amount of collection of personal data about people that use the internet, and sort of this creeping surveillance capitalism model that was beginning to emerge as the sort of de-facto... Especially since in that earlier moment that I described in the internet's evolution, it was like "Oh wow, and here's another great platform - Facebook. It's gonna encourage us to share everything, and connect all the people..."

**Chris Benson:** \[laughs\] Boy, it did it!

**Brett Gaylor:** It really did. They were really, really good at encouraging us to share things. So at that time I had started to work at Mozilla and had created with a lot of amazing community members a system called Popcorn.js, which was essentially a way to synchronize a piece of media like a video or an audio file with web events. So you could say "At this time, make the web page do this, or pull in this piece of data, or fire this Javascript command." And I thought "What would it be like to make a documentary about online privacy, that would play like a movie, but it included your data?" That was the inspiration behind Do Not Track, which turned into quite a large documentary series that was produced with the National Film Board of Canada and several partners in France... And it did really well. It kind of played around the world, it received a Peabody Award, which is a recognition of media--

**Daniel Whitenack:** Congrats!

**Brett Gaylor:** Thank you. It was fun. That year it was David Letterman, and the folks behind Mr. Robot, and just some amazing media, and it was cool to see documentary work about the internet in the mix of important social issues.

**Daniel Whitenack:** And it probably also illustrates people's genuine interest and concern over the topic as well, I would imagine.

**Chris Benson:** I also just wanted to note that I find it ironic that as we record this today, it happens to be election day in America, and a lot of these issues are very top of mind as we're going through that.

**Brett Gaylor:** Yeah, that was definitely not the case when we started to make Do Not Track, but over the course of making the series it became much more relevant. For instance, one of the episodes (the third episode) was about -- if you look at it now, it's kind of naive... It's like "What could you know about somebody from their Facebook profile?" and we're like "We found this niche study by researchers at Cambridge University who feel that they're able to predict your personality based on your likes on Facebook."

**Daniel Whitenack:** Wow...

**Brett Gaylor:** And that was the AI researcher Michal Kosinski who basically created this model where you could correlate a person's likes on Facebook to a really high degree with their psychological profile. So it was a vetted and peer-reviewed study where I think what they did was took interviews with people's family members and their friends and psychologists, and sort of plotted you on what's called the OCEAN model, which stands for Openness, Consciensiousness, Extraversion, Agreeableness and Neuroticism. So that's your OCEAN model; you exist somewhere in an axis of all those points. What Kosinski was able to do was correlate -- the one that we always used was apparently if you like The Dark Knight, that correlated really highly with a low score in extraversion, for example.

\[00:07:54.05\] Basically, they took a large group of likes on Facebook, and then did these interviews with folks and sort of said "Here it is." I could log in with my Facebook ID and it would look at all my likes, and then say "Here it is - you're this open, or you're this neurotic." The nuts thing is it was pretty accurate.

Anyway, that became an API called Apply Magic Sauce, and we used that in the Do Not Track documentary, to use people's personal data to show how these emerging -- this is AI, really, and it was starting to work.

Then what happened after the film came out, or probably while we were making it, was this startup called Cambridge Analytica requested the licensing of that API. They were denied by the University of Cambridge, and then they were like "Well, we're just gonna basically copy their approach, and out of spite, we'll call our company Cambridge Analytica", and the rest is history.

**Daniel Whitenack:** It seems like some of us are familiar with the rest of that story...

**Chris Benson:** We've heard of that!

**Brett Gaylor:** Yeah, the rest of the story is -- it's interesting, he actually has another very controversial paper, I don't know if you've seen it... It attempts to guess a sexual orientation based on a Facebook profile photo.

**Daniel Whitenack:** Yeah, I've seen this.

**Brett Gaylor:** He tends to create these highly controversial mind bomb studies that kind of illustrate some of the bleeding edge dragons of these emergent machine learning or AI systems.

**Daniel Whitenack:** I know recently in your profile you're kind of heading up these creative media awards for Mozilla... Was all of that that you've mentioned kind of in the mix, leading up to Cambridge Analytica and all of those things - is that part of the driver for that work and how you got involved in that, or...?

**Chris Benson:** And also, could you take a second and just describe Mozilla for anyone in our audience who isn't familiar with it? They may know Firefox, but just kind of give a quick intro as you answer...

**Brett Gaylor:** Yeah, you guys gotta keep me on track, too...

**Daniel Whitenack:** All good stuff!

**Chris Benson:** This is good, man.

**Brett Gaylor:** This could be a long answer, but I'll keep it short. Yeah, so most people are familiar with Firefox, but Firefox is one aspect of the mission of the Mozilla Foundation, which is a project basically to keep the internet open and accessible public resource for all of humanity. We're guided by a manifesto, which I would encourage anybody to check out online... And it really comes out of the recognition that the Firefox project and the open source code is a useful instrument in the market to make sure that there is some web browser and user agent that exists in the world that is independent and is not--

**Chris Benson:** Corporate-driven...

**Brett Gaylor:** Yeah, exactly. However, we don't disparage commercial interest on the internet, and we value independence at the same time. So Firefox is one thing that Mozilla does, but the Mozilla Foundation that I work with also does various interventions to ensure what we call "internet health." We see the internet as an ecosystem, and for that ecosystem to be healthy, we need to tend it. Imagine that the internet was like the ocean - well, if you want the ocean to continue to be healthy, you've gotta make sure people aren't polluting it, or somebody hasn't over-fished it, and sometimes that requires work. For us, that work is giving out grants and awards to promising approaches to internet health... We also have a really robust fellows program. We support leaders in this effort to keep the internet healthy, so that could be like a policy person, like a lawyer, or it could be a technologist, or it could be an activist, or in my case it's media makers who are trying to explain this stuff to the public.

**Chris Benson:** \[00:12:03.06\] That sounds incredibly dynamic as a mission from Mozilla, because this is evolving so quickly, and I guess it has to really keep track of new developments that are coming out, and obviously AI, as we're talking about that... How is Mozilla involved in AI? How does it use it internally, and where is it taking that? How is it choosing to participate?

**Brett Gaylor:** At Mozilla we kind of recognize that these emergent AI systems are just becoming part of our computing environment. What's the quote? It's like, "When you're fundraising, it's AI. When you're hiring, it's machine learning. And when you're implementing, it's linear regression..." \[laughs\] So we have some of the best minds in engineering that think about the technical infrastructure of the internet, and just a lot of the elements of this computing environment now feature some of these computing principles... Trying to look at large patterns, trying to build systems that evolve over time - that's just kind of the part of the way that you make software these days, so we want those systems to have the same kind of values that we expect and push for in other aspects of the internet. We want it to be transparent, so you understand how it works. We don't want more data collected about you than is necessary. We want other engineers to be able to see the code so that they can confirm that there isn't bias in those systems; we want the internet to be built by as wide a cross-section of society as possible. By that I mean it isn't just engineers in Silicon Valley who are creating these systems, they are consulting with civil society, they are consulting with potentially the groups that are evaluated by these systems.

So that's a complicated answer to kind of a big question, like "What does Mozilla think about AI?" We think that it needs to serve humanity, and we think that it needs to be open and free and healthy.

**Chris Benson:** Okay, sign me up. I'm ready.

**Daniel Whitenack:** Yeah... That's a good answer. I'm wondering if -- and maybe this is a more personal question as well, but in terms of the current trajectory of AI as a community, as practitioners, as researchers, do you see the community embracing those sorts of values, or do you see it kind of steering in another direction that's maybe concerning to you?

**Brett Gaylor:** I think there's some really positive signs that the computer science community is realizing that you need to think about the social implications of what you build, and that's why Mozilla is making efforts to support that. We just launched a program, Promising Approaches to Ethics in Computer Science Education, for instance.

If you look at what's come out of Google a lot lately - there's some promising signs from both employees, and management, that they recognize that there needs to be some bright lines that separate where artificial intelligence technology should not be monetized. The examples of not wanting to have their technology used in military contracts, for example, or you're seeing a lot of employees of Amazon, for instance, not want those facial recognition technologies used in immigration or other really sensitive areas where you need a lot of public oversight and transparency in how those systems are built. I think that's happening.

\[00:15:49.01\] What maybe concerns me is the speed at which all this is changing, and a feeling that there's sort of a manifest destiny in the way that these technologies are built. So it's like "Any place where we could collect data, let's just collect it, and then we'll assume that there will be a use for that, that a machine learning algorithm yet to be invented will solve." I think you see that a little bit in maybe what's promised to governments or cities, about how they can save money or make difficult decisions at scale using machine learning or artificial intelligence.

I don't know if you guys are familiar with this report that ProPublica did on the U.S. justice system where some states were using machine learning systems to predict people's probability of reoffense...

**Chris Benson:** I am familiar with it, I've read up on it...

**Brett Gaylor:** Yeah... So that's an area where it's like, you know, maybe we should just let the humans continue to make these decisions, because it's very difficult to see where exactly bias can occur, because these algorithms are so complex, and it's so difficult to give them data that isn't collected in a manner that doesn't reinforce an existing bias of the past. That's a real concern about these automated decision-making systems - often times they just reinforce previous inequalities, or frankly, racist systems that have evolved.

**Chris Benson:** Yeah... In that report, you mentioned, if I recall, there was an inappropriate bias against African-Americans as a result of that... Correct me if I'm wrong, but I think that's what the result was.

**Brett Gaylor:** If anybody is interested, just look up ProPublica -- the report is called "Machine bias." It basically took two people that were eligible for bail, and the system basically predicts whether one person is going to reoffend or not... Two people with similar crimes, an African-American woman and a Caucasian man, and while the man actually had much more serious previous offenses, the African-American woman was denied her bail, because she was assessed to be a higher risk than the man. So why is that? Is that because African-Americans in the United States are incarcerated at a higher level than Caucasian people? That's true. Does that mean that that specific woman is more likely to reoffend than that man? No, it does not. But the system assessed them this way because it's looking at this history in the United States that unfortunately incarcerates black people at a much higher level than it does white people.

What happened in this case is the man got bail, and he reoffended, and she didn't get bail; she was left in jail for a longer period of time. That's just sort of like doubling down on some of the problems that we see in these systems. In this case, it's reinforcing problems of the past.

**Daniel Whitenack:** We recently had a talk with Lindsey Zuloaga, who works in hiring, and we were talking about some of the biases there as well, and some of these things come up very subtly... She was talking about just the fact that you have fewer women applicants, for example, in software engineering positions, and thus you have less data. If only one woman applies for the position in software engineering, and the AI for whatever reason determines that that wasn't a good candidate, then it can generalize to all women applying in software engineering... So these things come up, and they have a huge impact on people's real lives.

I know that we're gonna talk here in a second about some of the awards that Mozilla has given out recently, but I know that those are focused around AI's impact on society... Are these the types of impacts on society that you're imagining, in terms of maybe a biased AI giving certain people privilege, or whatever it is? Or in general, how do you see the biggest impacts that AI is having now and maybe in the near future?

**Brett Gaylor:** \[00:20:17.05\] Yeah, that's exactly right. Basically, the way that we framed it is projects that use this kind of media advocacy to highlight some of these unintended consequences of artificial intelligence, and places where we wanna be thoughtful about how we apply it, so we're awarding media makers who are exploring these topics in a way that laypeople can understand, that unlike the three of us, don't think about this stuff obsessively every day, but for the first time.

When you talk to people about AI - I'm sure you both get this all the time - if you were to talk to somebody at a Christmas party, they'd be like "Oh, you mean like Terminator?"

**Daniel Whitenack:** Exactly.

**Brett Gaylor:** You're like, "You know, problems in the future with AI...", "You mean that the robots are coming for all of us?"

**Chris Benson:** You mean they're not?

**Brett Gaylor:** Well, maybe... And there is some real stuff happening right now in the world, that we wanna be thoughtful of, and that actually can be either course-corrected, or with intention and thoughtful design, and the proper application of ethics can maybe turn out alright and we don't have to worry about a future robot invasion. So it's these questions of bias, but it's also -- I mean, I could talk about some of them... There's one that I'm really excited about, it's called "Stealing your feelings", by a really fun and funny engineer/comedian, which is a fun mix that you don't often get...

**Daniel Whitenack:** It's the perfect combo.

**Brett Gaylor:** I know, right? So Noah has created this project that looks at facial recognition systems, and specifically patents that Snapchat has recently filed to be able to do facial recognition on groups of people. What he's gonna do is use the webcam of your computer to in real-time analyze what your face is doing while you're watching the film, so that he can either shock you, or make you laugh, or make you surprised, or make you angry, and the film can react to your emotions while you're watching it. That is the perfect example of what we wanna do, because an audience that watches it -- it's not like you're just telling them that cameras can detect your feelings, you're showing them; their feelings will be detected in real-time, and that will change the movie. So that's one... And that's not necessarily bias, but it's an issue.

**Chris Benson:** A little bit creepy...

**Brett Gaylor:** A little bit creepy...

**Chris Benson:** Good use of masking tape on your laptop...

**Brett Gaylor:** \[laughs\] Exactly. It might lead to duct tape flying off the shelves... There's a fun one called "A week with Wanda", that basically simulates an AI that tries to be helpful in your life, but goes off the rails and starts to suggest things to you that you may or may not want. This one's gonna be all done with -- it's like an episodic, serialized e-mail exchange with you... The AI might one week be like "Oh, I noticed that you wanted to spend more time with quality friends, so I went ahead and deleted half of your Facebook friends, because you don't talk to them anymore." The idea is that this AI is being a little bit too keen and too helpful.

There's one called "Survival of the best fit", which does address a lot of the issues that you were mentioning, Daniel, about biases in workplace hiring. They wanna show that by simulating a job application process.

\[00:23:43.15\] Another one that I'm super-excited about is called "The training commission." It's basically like a work of creative fiction; stay with me here... It's a speculative fiction from the future, that takes places when a Truth and Reconciliation committee is struck to see what happened with an artificial intelligence... Basically, something cataclysmic happened in society, so this AI -- we don't exactly know what happened. Did the AI assume that it needed to fix some part of the way that humanity was structured? What exactly happened? We have to piece together what happened in this story by the events that are told to us about this Truth and Reconciliation Commission. I'm murdering this one; Ingrid is gonna be really sad to hear my explanation.

And then there's another great one called "What do you see?" that examines the difference between what an image recognition sees and what a human sees, so it uses a lot of these edge cases of where AI systems can't understand... It shows a picture of somebody wearing a mask, for example. This one "Mate me or eat me" is gonna be all about bias in dating apps, and is basically like a game where you swipe right or left to choose which monster you want to date, and then it will show in that process how quickly bias and reinforcement can lead to discrimination within those certain dating systems.

**Daniel Whitenack:** Brett, I'm thoroughly interested and intrigued by all these projects that you've just mentioned... I have a general question about all these. Given that Chris and I are (I guess you would call us) AI practitioners, I'm really interested to hear your perspective on why you think that in this effort to explain how AI works and expose some of these things, like bias and other things, why it's so important to involve creative people - maybe artists, and like you were mentioning, comedians, filmmakers, writers - why it's essential that we involve those people in helping us tell that story.

**Brett Gaylor:** I think it's really important to involve creative people because often their job is to give a language to things that we don't know how to talk about yet. If you think about your friends that are obsessing over these topics, when they encounter something that we might call machine learning or artificial intelligence, where a decision is taken that they didn't understand, they might just call it creepy. They don't have the contours of how they should feel about these systems and where they might affect them. One of the rules of creative people is to map out that landscape, and also to actually map it out emotionally.

**Chris Benson:** Would this be in the idea of design thinking, in terms of applying that methodology to this creatively?

**Brett Gaylor:** That's a good way of thinking about it.

**Chris Benson:** Kind of going and analyzing what you're trying to get to almost from scratch, and then figuring out how this fits in... Is that where you're going with it?

**Brett Gaylor:** Yeah. It's interesting, we try to think about the impact that these projects will have with their intended audience, and we work with the people that we award in this way to really get them thinking about "Who is this for? What change do you want to see in that person?" We talked to Noah about this, and he was like "Oh, it's for millennials, and I want them to feel angry." It's like, okay, then that's gonna shape how you create that work, the platforms that it goes out onto, the references that will be included in it, the tone, the length, all of that.

\[00:27:51.28\] So it's important for creative people to be leading the charge in that because that's their job and their work - to create a reaction in people. We need that in these sort of early days of creating a multidisciplinary approach to responsibly building these AI systems, because we need to know what people think about AI in their lives, and what people think about machine learning. We know some of the right policies, interventions and some of the right design questions that need to be asked; we need to quickly help the public catch up to where people at the leading edge of this stuff have been thinking.

If you think about all the questions of bias - there are really concrete proposals of how you can design these systems, but they're not gonna get traction if the public doesn't understand them or understand the urgency to them.

**Chris Benson:** So where does that take you...? If you start getting a handle on public perception of these technologies and how they're affecting their life, what do you as an artist go do with that? How do you take that new information and do something productive with it?

**Brett Gaylor:** It's not necessarily about -- let me see how I wanna dig into that one... I think this work is the most effective when the makers really understand the change they want to see in a member of the audience. Going back to that example of Noah, if you feel like you want to anger this person, then what can you expect that that person would be willing to do once you've achieved that emotion? Do you want them to delete Snapchat, or do you want them to write to their member of Congress, or do you want them to share with a friend, or do you want them to complete a quick survey? If you're able to incite the curiosity or the emotion that you intend, you sort of have a little bit of a window where you can get people to do things.

**Chris Benson:** So if they have at this point a sense of awareness and some perception of that, that AI is involved - going back to Noah's project, where the camera is being used to do emotion detection based on facial reactions... Does the awareness itself -- in other words, if you are the viewer of that show, and you're looking at your laptop or TV with a camera on it, does that awareness change the reality that you're in? In other words, if I'm a viewer and I don't know that AI is being used in this, and the movie is reacting, how is that different from if I'm a savvy person regarding AI and I know that's happening with the camera that's looking at me right now, and I'm still experiencing -- how does that change the reality that the person is engaged in?

**Brett Gaylor:** You mean how is it different if they just are told that, versus if they feel it in their bones?

**Chris Benson:** We've kind of debated the idea of the public being aware of "how AI works" and why is that important, and what is the meaning of our life when you have an educated person in the audience and they're aware of their experience being shaped by AI, versus someone that's not. Where does it matter, or does it not matter at all?

**Brett Gaylor:** I think it matters. It's interesting, I was just in London at the Mozilla Festival, and inside the tube there was all these ads for programs that would teach young people how to code, and the way that they were trying to get kids to do this was presenting it as magic. It was like "You have this magic wand, and if you know the spells, you can cast them and you can make the world whatever you want." I think that's a terrible approach, because that's not magic, it's actually humans that make really specific and concrete decisions that lead to really specific outcomes.

So to answer your question, I think that the opportunity that we have to show people how these systems are built is to realize that none of this stuff is a foregone conclusion. If we don't like the way that these systems make us feel, or we don't like the effects that they have on some of the more vulnerable members of society, there's an opportunity to change that.

\[00:32:01.04\] And when you see how it is working with your data or with an algorithm that's presented to you, and you see "Oh, I get it. It takes these three things and compares them", and then says "Okay, these two are alike and this one isn't alike" and you can sort of see how that can lead to things like confirmation bias, you can see the system, then you're much more likely to say "Oh, this can be changed. These people are just doing it wrong", in the same way that if you're building a bridge, this is how you build it so that it won't fall down. So we need to add those principles to the ways in which you design these AI systems... Like "Oh yeah, you can't use data like that, because it's clearly biased." You just give people the clear understanding that none of this is to be taken for granted; it's all up for design.

**Daniel Whitenack:** Yeah, I'm really glad you brought that up, because frequently I have this moment when I am teaching corporate workshops to people that haven't done machine learning or AI before, there's this moment - and I literally see it in their eyes - where it's almost like a disappointment, because they think that they were going to learn something magical and level up and be wizards, but they really just find out that machine learning and AI is actually a set of well-defined functions that you execute in code, and it's really just kind of a way of combining those in a certain process. It's not like you sprinkle fairy dust over your computer and then the magical AI comes about.

So I'm really glad that you brought that up. I think it's an important thing, even for technical people, to realize that this isn't a magical thing that is outside of our control, but it does have design behind it.

**Chris Benson:** Daniel, I think you're totally misleading your workshops though, because you walk into the classroom with a wizard's hat and the robes on, and everything... \[laughter\] I'm just saying, I think you're setting them up.

**Daniel Whitenack:** Yeah... Well, Brett is wanting creative people to be involved, so I do my part. I was wondering, from that perspective - Brett, there is this group of practitioners, like Chris and I, there's researchers, and then there's maybe artists or designers or filmmakers or whatever it is that can help tell this story... What opportunities are there for practitioners like us or other people to maybe lend a hand in telling this story along with creators or designers? Because I'm imagining these projects that you're funding - maybe the lead person is like a filmmaker or whoever it is, but like you were talking about with the feeling recognition thing, there is a technical element to that that has to be built and figured out... So how can we as practitioners engage with creative people to tell these stories?

**Brett Gaylor:** Actually, all of these projects do incorporate some type of AI within the actual creative approach, but they all actually have to have a real algorithm that does this creative piece within it. Almost all of these folks that we're supporting are kind of these hybrid folks that are creative people AND have an ability to tinker in engineering.

Having said that, there's one that's a really fun project - it's called "Do not draw a penis." This is basically a comment on the sort of algorithmic censorship process that you see in systems like YouTube or other kind of user-generated content systems, because all those systems are now applying machine learning to ensure that nothing bad happens on these platforms.

**Daniel Whitenack:** Right, like nudity detection, and certain things...

**Brett Gaylor:** \[00:35:51.19\] Yes. They also - it has to be noted - employ thousands of people, unfortunately, to have to look at a lot of those images, so that we don't have to... And they also employ some of these systems. Now, this particular project - basically, it presents you with a blank canvas, it invites you to draw whatever you want, and knowing the internet, some people are gonna draw (guess what?!) penises. So the program will basically detect that and tell them "Hey, you shouldn't be drawing that! This is a safe for work project" and kind of like turn their penis into a flower, or a tree. That project uses object-recognition libraries, projects like Google Quick Draw, but of course, there is no penis detection within that system. So they've had to create their own huge library of (you guessed it) thousands and thousands of crudely-drawn penises, collected from the wide reaches of the internet.

My point here - and I have one - is that a lot of these projects use existing libraries and existing approaches, so the more of that stuff that can be open-sourced, the more creative people can be. They can innovate on the content layer, if you will, of the project, rather than having to create the entire stack of artificial intelligence systems that are needed.

**Chris Benson:** That is a tool that would make a big impact right now on my family's life. I have a first-grader, and we're very active about going in the classroom and participating, and they're all at that stage where penises or anything else you can think of (farts etc.) are funny and cool, and they're trying to figure that out in the world, and a tool like that would actually be a delightful thing at this moment in my life.

**Brett Gaylor:** Oh yeah, I have a kid in grade two, and it's like you just give him a blank sheet of paper and he draws the poop emoji on everything. \[laughter\] It's like, "Dude, enough with the poop emoji!"

**Chris Benson:** Yup, been there.

**Brett Gaylor:** But imagine an AI system that each time he tried to draw the poop emoji is like "You're not allowed to do that!" I don't think we wanna live in that future either, where his pen is embedded with a naughtiness filter that when it goes onto any blank sheet of paper, it sort of censors what he's saying.

**Chris Benson:** That's a good point.

**Brett Gaylor:** But that's kind of the reality that some of these systems are building. If we assume and agree that the future creative pallet of our children is gonna be the internet, we really wanna make sure that we're not preventing them from expressing themselves.

**Chris Benson:** That's a great point.

**Brett Gaylor:** I don't wanna see penises all over everything, and I don't wanna live in a world where certain combinations of lines cannot exist on a blank canvas. Tough stuff. We're gonna solve it from Mozilla; you heard it here first.

**Daniel Whitenack:** \[laughs\] Awesome. Going back to one thing that was mixed into that whole conversation was you mentioned open source, and I think one of the things that I got out of that was one of the ways that maybe we as AI practitioners can help tell these stories and help make more transparent how AI works is actually to put our work out there in an open way, and to create tools and documentation and pre-trained models and those sorts of things, and put them out in the open so creative people can use them and try to understand what they're doing and what they're capable of, and that sort of thing. Would you agree?

**Brett Gaylor:** Yeah, absolutely. All this creative exploration that we sponsor at Mozilla -- we encourage people to release their stuff under open licenses, and in fact, sometimes require it... But it's so true that you can just get so much further if you can a) see what other people have done in this realm, and then b)like "Oh, there's a library for this exact thing that I wanna do" and you just go and get it. Yeah, I absolutely, totally agree with you. That's a thing that the community can really help with.

\[00:40:03.13\] And there's other ways, of like peer review, or just participating in systems like GitHub, when people have questions or pull requests or stuff like that; just be active and know that you could never anticipate that somebody is gonna build a facial recognition movie out of a library that you make, but sometimes those weird uses that they didn't need to ask you for permission for are some of the most delightful and unexpected things that can happen on the internet, so... Do more of that.

**Daniel Whitenack:** I think one interesting piece of this that I'm kind of curious to see is as more creative people utilize a lot of the open stuff that's out there, I think that they're actually going to be able to help us probe some of these implications in ways that the practitioners haven't even thought of, and I'm thinking of the chatbot that Microsoft released that turn into a Nazi in however many days, or whatever it is... Sometimes the practitioners or researchers sense this cycle between research and releasing model code and all of that on GitHub is so quick now; I think having people probe those questions and think about the implications is also important for the other side... So it's important for us to release things in the open so that people can use it, but it's also important for us to look at what the creative people are doing with what we're releasing, because it can help shed some light on the implications of what we're actually doing.

**Brett Gaylor:** I agree.

**Daniel Whitenack:** Where can we find out more about the projects that Mozilla is funding through this program?

**Brett Gaylor:** We tend to help support these projects at the release, so if you're following us on Twitter, that's probably one of the easiest ways. We have a nice blog post up about the awardees, that folks could probably find fairly easy. And we're anticipating that these will all be released sometime over the course of the next year. Everything is meant to be done by June, but they'll all have different release dates, depending on the complexity of their project. So I think just keeping in touch with Mozilla...

We do have a mailing list as well that we tend to send this stuff out on, if folks are not subscribed to too many mailing lists... But I think the best way for people to keep in touch with these projects is just to follow us on Twitter, @mozilla. We also have a mailing list if people are interested, and there's a blog post that should give links to the creators of the project. Poke around and see what else these folks have made, if you're interested in this type of work.

**Chris Benson:** This has been a really cool conversation for us, in terms of the intersection of creativity and different forms of art and communication, as opposed to AI. We got into where you talk about ethics a lot, but I think we need to have even more conversations about the larger world, people outside of just AI in the traditional sense, doing this, so... Thank you so much.

**Brett Gaylor:** Yeah, it was a pleasure. Thank you to both of you.
