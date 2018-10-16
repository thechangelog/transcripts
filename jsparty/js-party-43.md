**Kevin Ball:** Hello everyone, and welcome back to another episode of JS Party, where every week we throw a party about Javascript and the web. This is KBall, one of the JS Party panelists and Changelog correspondents.

I was in Carlsbad, California just a few weeks ago for JS Conf U.S. and had the chance to talk with some amazing people. Today is a longer than normal, but packed with great content episode. I first talked with Michael Chan, aka Chantastic. We covered a range of topics, including how to start speaking at conferences, how your Twitter handle is really your rapper name, why we may be over-emphasizing the value of dry code, and the importance of metaphors we use to cover software development.

So you gave a talk yesterday...

**Michael Chan:** I did!

**Kevin Ball:** ...that I saw, and greatly enjoyed.

**Michael Chan:** Thank you.

**Kevin Ball:** Do you wanna tell a little bit about what you spoke on, so that our listeners can hear about it?

**Michael Chan:** Absolutely. The talk had a little bit of a clickbaity title; it was called "Hot garbage clean code is dead." It's kind of hard to summarize, but the idea is that we've started to fetishize certain aspects of clean code, and I think that in some ways we've forgotten what the heart of clean code is, which is to keep things changeable, keep things tidy, so that when things inevitably need to change, we can change them easily.

We all had that experience where it's very hard to change something, and this is when we get angry. We look at our screen and we're like "Who was the last idiot that did this thing?" because it's not gonna be able to do this thing, and it's gonna be really hard to change, and whatnot... And sometimes it doesn't matter if it was someone we hate, or someone that we like, or ourselves like an hour ago - we just have this thing in us where because we can't predict the future, we're angry about the present that we're in...

I think that we just keep thinking that there is some type of magical clean code enchantment that we'll be able to do that will save us from that problem... And the talk is mostly just about the idea that 90% of the job is just kind of slinging code around, moving it from here to there and the other place, and clean code won't save you from that. It's just part of the job that we come in, we find something that doesn't meet the new requirements, we couldn't have predicted the future, so that's the way it's always gonna be and now we have to change it. We can be angry about it or just accept it, and move on with our life.

**Kevin Ball:** Yeah... One of the things I loved that you talked about in that talk was around how we have this obsession with dry code - don't repeat yourself, cut it down...

**Michael Chan:** Yes.

**Kevin Ball:** And that is great when you have mature code that is no longer changing very rapidly, but dry code is also not very pliant code; it's rigid and fragile in some ways.

**Michael Chan:** \[00:04:15.11\] Yeah, it can be a liability, right? If you have very dry code -- if you prematurely dry out your code, and you don't know everything about what could possibly be added or changed about that feature, so many times you're gonna just have to hydrate it back up again to make sense of it, and then re-dry all those abstractions out.

It's so funny, because "Don't repeat yourself" has nothing to do with how much moisture is in code, right? But it does end up being a very good analogy; the analogy carries through really well in terms of the experience of what it feels like to work with dry code.

**Kevin Ball:** Absolutely. I mean, if you have a pot, once you dry it out, you're done.

**Michael Chan:** It's that thing forever.

**Kevin Ball:** And sometimes that's what you want, and one of the reasons that "Don't repeat yourself" is great is that it does create -- as you mature a system, it gets you out of this problem of "Oh, I've got this bug in one place, I have to fix it in ten", and moves down... But when you are in that stage of rapid iteration, it's painful.

**Michael Chan:** It can be really painful. One of the misconceptions about the talk - and I think something that I've had to convince a couple people out of - is that I have no intention of saying the practice of clean code is dead; I think that there are aspects of clean code that are really good... It's just that the context is critically important in determining what are the best rules to apply in this situation.

Dry is really great, as you said, with code that is known -- it is really good not to repeat yourself in situations where you're using the exact same concept, right? But clean code can often lead to things that are harder to work with... And it's not like clean code the practice is dead, but clean code often more resembles a dead thing... Like you said, like a pot - you totally dry it out, and now it's a pot forever. You have to be really dramatic sometimes about how you change that into something else. You have to break it down into whatever pots are made out of, and then kind of make it a new thing again... And I think we feel that in code a lot sometimes.

**Kevin Ball:** Definitely. And I think another big idea because we talk so much about generalization, and drying things out and making things super clean - and these are worthy things to aspire to, but we often do it prematurely... Especially folks who are just getting into the industry and haven't felt this pain over and over and over again... I like to say "Make it once. If you need it again for something else, make it again. If you need it for something else -- by the time you're on your third time, you might know enough to start generalizing it... But don't try to generalize it when you've just made it in one example or two."

**Michael Chan:** Yeah... I use this example a lot where you need a modal for something... Let's say you're making a person edit modal, and I don't know why, but we never go for just building the one thing that we need. You never sit down and type in like "make new file PersonEditModal.js", and that's the more pragmatic way to think about it - I'm making this thing, I'm gonna make it as specific as possible, and then we'll determine the general aspects of it later.

**Kevin Ball:** Right.

**Michael Chan:** We always go "I need a new modal. Modal.js", and think that that has the potential to maybe stand the test of time for whatever reason, and it almost never does. We're almost always wrong.

**Kevin Ball:** \[00:07:54.22\] "I am creating a person modal, and therefore I will create the ideal platonic modal that will stand the test of time throughout the entire lifetime of my application."

**Michael Chan:** \[laughs\] Yeah, and sometimes that moment where you have to like break the pot down and kind of like remake clay out of it is like a rewrite, and those are just -- I don't know... I prefer to do small rewrites all along the history of my app, or all along the life of my app, then one big rewrite that we have to get right at that point in time for like the rest of time.

**Kevin Ball:** Yeah, if you do a massive rewrite, you often lose a lot of embedded knowledge: edge cases, corner cases, all this sort of thing. There's another thing -- I also fall in that camp, I tend to advocate against from-the-ground rewrites, and if you're gonna do it, do it a piece at a time, carefully, scope it, make sure your interfaces are clean, so that you can try out your piece-by-piece rewrites and not lose all of that hard-won knowledge that's embedded in the code.

**Michael Chan:** Yeah... I think we don't think about rewrites granularly enough, as you're saying. It makes a lot more sense to rewrite things piece by piece, and I think when you've been around a lot, especially if you've been in the same codebase long enough to have replaced your own work, you start to realize that in some ways everything is a rewrite, and if I get in the habit of rewriting smaller chunks as more is revealed about our customers, about the products that we're making, you get better at doing those small rewrites and it becomes less attractive to do a top-down rewrite.

You kind of just identify "Hey, this thing has continually been a big pain in the butt. Let's just rewrite this part of it and know that next time it'll be a little bit easier to change the whole."

**Kevin Ball:** One thing that you also touched on your talk that I think is really applicable to this is this question of where we are drawing our metaphors from. We use a ton of language in software development that derives from traditional physical construction. We talk about architecture, we talk about...

**Michael Chan:** Engineering, development, we use frameworks, and scaffoldings, and all kinds of things.

**Kevin Ball:** Yeah. Our language is embedded in this world where you create things once, it's gotta stand the test of time, you have to do all of this upfront planning, and it's also something that we know pretty well, because the technologies have been around for thousands of years, and maybe they've changed a little bit, but...

**Michael Chan:** You're still two by fours to frame a house...

**Kevin Ball:** Exactly. If you've used the same tools... If you're in the Javascript world, your tools change every six months, practically, right? It's not the same type of thing, so perhaps another metaphor would be useful, and I liked your idea of making it a more organic metaphor.

**Michael Chan:** Yeah, it kind of goes back to that idea of rewriting. I was thinking about things that are repeated, and I was thinking about the fact that our apps aren't like something that you build up, you plan out... And this is my experience. I know that a lot of apps are still built in kind of a traditional "We're gonna build this thing for six months, it's going to get sent out, we have this big release once a year..." - a lot of software is still built like that. But I think a lot of web applications are built in a totally different way, where we put something out and then we hear what customers have to say about it and we change it, pretty quickly, sometimes immediately... And that is one of the beautiful things about what we do - we have this really tight feedback loop with our customers, but sometimes I think emotionally we still write code as if we need to get it right on day one, because that's gonna be in production in that way for a year, until the next release comes out.

\[00:12:04.10\] I think for a lot of apps we have the benefit of being able to be wrong, see what happens, and then fix the mistake later, and actually have our customers love us for it. So I've started to think about how that's a little bit more like farming - there's a seasonality to it, there are unknowns... The weather plays a lot into what we're able to deliver to our customers; customers shape the type of products that we create and get good at, and the fact that -- you know, living things don't always do exactly what we expect them to do. Sometimes they push back on us a little bit; the harvest isn't as good one year as opposed to another... And I've really been enjoying personally this idea that I come to work, and I'm going to kind of wrestle with the app that day. The weather might not be as I like it, and the response of this living thing might not be quite as I like it, but my work is just to keep at it, to keep coming, knowing the conditions are gonna be different every day, and just keep trying to get the best thing out of this product as I can.

**Kevin Ball:** Yeah... And the additional fun metaphor that you had on there was "Well, sure, a lot of code is crap code, but what's the best fertilizer?"

**Michael Chan:** Correct. \[laughs\]

**Kevin Ball:** Well, and another way of thinking about that, organic matter uses broken down, organic matter to grow and become better. The lessons that we learn writing this bad code and experiments, things like that really does improve the outcome. I mean, it's a little bit of a fun stretch, but I think there's some truth there.

**Michael Chan:** Yeah, and I think that idea that you touched on, the idea of decomposition, is really important. We like to think about creating things and building things up - that's the fun part - but we don't often think about how things break down again or come out of our app... And sometimes knowing the end helps us start better. And knowing that "Hey, at some point this is gonna get pulled out, it's gonna get replaced" or "The framework that we use today is not gonna be the framework that we use in five years." So how do we keep the things that matter around, how do we continue to-- I'm not gonna go too deep into the farming metaphor; I was tempted there for a second... \[laughter\] But how do we keep good things around and kind of let bad things fall off?

I think there are so many ways to do that, but I think sometimes -- I'll go into a couple. One of them is testing. I think sometimes we get really deep into the weeds in testing, and we forget that the tests that are gonna stand the test of time are the ones that are closest to the user, the ones where we say "The user needs to click this button and expect that this thing happens." And implementation can churn as much as it has to, as long as that end result is the same, as opposed to kind of like the closer you get to the code and away from the user -- I mean, you can be changing tests almost as much as you're changing the code, and that is a very frustrating way to live.

**Kevin Ball:** Yeah, for sure.

**Michael Chan:** I didn't get too practical in the talk, but one of the things that I talk about is how to identify code that is right before a refactor or a rewrite... And I borrowed this from Sandi Metz - she was saying that (there's a graph) a lot of code quality products show this to you; it might be hidden in some, but I know things like Code Climate has this... A churn versus complexity graph. And it looks at each file, determines how complex it is, how many logical trees there are in it, and takes that score and then says "How often are you actually touching this? How often are you making changes to it?"

If you have high complexity but there's no churn, the file might look like a mess, but it's hardworking code, and it's not costing you money regularly to make changes.

**Kevin Ball:** \[00:16:21.13\] Right.

**Michael Chan:** And then the inverse is true, too. If you have a lot of churn but there's no complexity - well, that's actually great, because it means that you are able to change it rapidly. And what you're looking for are the outliers, where churning and complexity are both very high. Those are the ones that are regularly costing you money, and when you're frustrated, that's kind of a reasonable frustration.

**Kevin Ball:** Right. And those are good places to look carefully at "How can I refactor this to be simpler?"

**Michael Chan:** Yes, absolutely. That's where you're gonna see the most benefit, and I have found that using that has really clarified a lot of my conversations with managers. So it's less this "Oh, well you just don't want me to have a clean place to work" and more like "Hey, this is the data on this thing. We're changing this thing a lot, because we obviously don't know what we're building yet, so it would behoove us to make it simpler to work on. I'll be able to turn these things around faster for you." Any PM worth their salt is going to hear that and say "Oh, well, yeah, I want you to work faster, and if this is the way to get it done, then let's do it!"

**Kevin Ball:** Yeah, absolutely. I like that as a way of kind of taking this and quantifying it for folks who perhaps aren't able to feel the pain of working in a messy codebase. And if we're honest with ourselves, that's where we are feeling the pain. It doesn't matter how ugly it is to look at if we never have to touch it.

**Michael Chan:** Yeah.

**Kevin Ball:** So I'm curious, you talked about being able to change out frameworks and things like that, but it sounds like you're also very focused on React with the podcast... So what's your thought? Is React gonna continue to dominate, or are we gonna be throwing it out in 3-4 years and putting something new in?

**Michael Chan:** Yeah, so Laurie Voss gave a really awesome talk at this year's JS Conf. He was talking about all the data that they have at Npm, and the things that they're learning about these open source projects... And he says that every popular framework has about kind of a five-year lifespan, or five-year heyday. React is about three and a half, four years into that adoption curve... So it's really unknown how long React will be able to sustain this.

Some of the interesting facts about React are that it is on multiple platforms, and so that is kind of unprecedented up to this point - the fact that you can use these components and target web, Canvas, Native, Electron... That ability is a new thing, so that's very cool. But he also posed the idea that it's very possible that in the way that jQuery kind of proved this concept of document selectors, it might also be able to prove this concept of what a first-class component should look like on the web... And if it's able to borrow his language, transcend into the browser, it is possible that we could be using React for a really long time... Or some inspired by React way of writing native components.

**Kevin Ball:** Yeah, I mean, that component-oriented architecture, whether you're using React or not - all of the modern frameworks have essentially consolidated to component-oriented architectures, with component lifecycles, and some sort of state management solution, often inspired by the Elm architecture or Flux architecture... And you see that's now there in React, but it's also there in Angular, it's also there in Vue, it's also there in Ember, it's now there in Dojo... I could just keep going on and on and on. All of these different frameworks are adopting that, because it is such a phenomenally useful abstraction for front-end development.

**Michael Chan:** \[00:20:19.09\] Yeah, the key innovation of React was how to create an isolated component, and it's amazing how far that has spread.

**Kevin Ball:** Absolutely. So you mentioned something to me and we talked a little bit about it earlier, about our Twitter handles becoming essentially our rapper names... And I kind of want to go in on that idea a little bit in terms of the personalities we assume to engage in the sort of broader tech community. Because if you think about a rapper name, that is putting on a persona - and I'm not a rap expert, but Ice Cube is not the same person as whatever the heck his actual name is, right? That is his rapper persona, that he is putting out there.

**Michael Chan:** I've heard someone put it like, you know, Madonna isn't walking around her house in like a cone brazier, right? \[laughs\] There is like a facade in front of the person that is the character.

**Kevin Ball:** Yeah. And I think there's value to that.

**Michael Chan:** Oh, yeah.

**Kevin Ball:** It can create a separation, it can give you the ability to - both for positive and negative, but I think focusing more on the positive, to put yourself out there in ways that you the underlying person might not be comfortable with at all.

**Michael Chan:** Yeah, yeah.

**Kevin Ball:** And one of the themes that came up at JS Conf when we were doing our live episode is everybody wanted to know "How do you become a speaker?" That feels like a big barrier... And you've started your own podcast, and things like that... So how has becoming Chantastic, rather than Michael or Chan - how has that changed your self-perception and ability to kind of put yourself out there?

**Michael Chan:** Man, that's a great question. I am deeply inspired by this book titled The War of Art by Steven Pressfield. It's an amazing book, and I definitely recommend it to anyone who is embarking on a creative endeavor... And not creative as an art, but creative where you are creating something.

It is an amazing book, but he talks about the ability to separate you and (I think he calls it) You Inc. This idea that no matter what you do, you need to be able to separate you, the creator of the work and You Inc, the marketer of the work. Honestly, even to be able to just establish a value for the work that you're doing... Because a lot of times, for those of us that are freelancers or are doing creative work, we have such a hard time putting a value on it, putting a number on it and asking for a fair wage for that thing.

**Kevin Ball:** Yeah, it's deeply uncomfortable to go ahead and say "Yeah, you should pay me $10,000 for this project", and in the back of your head you're going "What...?!" \[laughter\] As I've gotten into consulting, most of us - I think it's not just this industry - worldwide have hang-ups about money and self-promotion, and asking for things... And you can't have that if you're gonna run your own...

**Michael Chan:** You cannot. You have to be able to create that fracture in yourself, to be like "There's me, and I am kind of insecure about what I do, and I know all of my own warts and what it took to get here, and there's Me Inc, which is a baller and is gonna ask for what I need to make to make ends meet, and more."

**Kevin Ball:** \[00:24:02.27\] Yeah, and you'd be amazed when you start experimenting with that, because you'll ask somebody -- you'll have a number in your head, and then you're like "I've gotta ask for more. I've gotta ask for more. Okay, I'm gonna do this because I'm gonna give them two options, so then I don't feel too bad, because they can always go to the bottom one. So I'm gonna give them my number, and then I'm gonna give them my number plus 50%", and they're like "Is that all?"

**Michael Chan:** "Okay, cool." It's shocking every time. You're like "I wouldn't hire myself for that much..." \[laughs\] Back to your speaking question, I go into this industry after being laid off from my accounting job, and being on unemployment for six months, and I was like, you know what, I never wanna feel that way again. So for me it was kind of this opportunity to chase after a little bit of security, to be able to not just be a developer, but one with videos where I have like a well thumbed up talk on YouTube, with my own philosophies in the way that I think about things. I wanted to put all of that out there, so I could have friends in the industry and meet cool people.

I think my desperation to gain that comfort way outshadowed my shame and feeling like I didn't have anything to say, or whatnot. I'm constantly amazed -- every time I go to a conference I'm sitting in that speaker room with people that I have admired for a really long time and they're all stressing out about having to give a talk... And it's so humanizing. I want everyone to give talks, because I think everyone has something to say, but more than anything else, you need to sit in that room with your heroes and feel their stress when they're trying to talk to you. It's invaluable. Everyone should talk... Everyone should talk.

**Kevin Ball:** Yeah, yeah. We talked in the JS Party, the live episode that we did here, about what does that take, how you apply to a CFP, how do conferences pick their speakers, and stuff... So if you're listening to this and you're curious about that, go listen to that episode.

**Michael Chan:** Absolutely. It will be super-helpful for you.

**Kevin Ball:** And yeah, you put yourself out there... If you're having trouble or you're struggling, maybe you need a rapper name.

**Michael Chan:** You definitely need a rapper name. If your Twitter handle is just your name, you need to change it.

**Break:** \[00:26:47.12\]

**Kevin Ball:** In this next interview I spoke with Juan Pablo Buritica and Julian Duque, two of the founders of JS Conf Colombia. We discussed their experiences starting a Javascript conference in Latin America, the incredible flourishing of the Javascript and web community throughout the world, and ways for those of us who are privileged enough to work in this space to create privileged bridges to share those opportunities and our favorite language, Javascript, with those all around the world.

So the two of you are doing a tag team talk, you're working together. Can you tell us a little bit about it?

**Julian Duque:** Sure. We have been working together since 2011, helping build an amazing community in Colombia, and also defining like a framework of how other communities can start working and following the same model. We want to tell the story about the community we have built in Colombia, what we have learned, all of the challenges, all of those beautiful and rewarding moments that you can see when you see the results and the impact that the community is making... So we want to share that part of our lives with the JSConf family.

**Juan Pablo Buritica:** Right... So just how you see here, that we are at a conference, surrounded by people who are awesome and love building stuff and love software and Javascript - it is an experience that is limited to a few folks. We set out to expand that experience or make it more accessible to folks, in particular in Colombia, with the hopes of building a community that would be sort of self-feeding and would grow, and eventually we would export our experience, we would tell our people how we did it, and we would have these Colombian ambassadors all over the world speaking, not only about Colombian technology, but also about Javascript.

Eight years in, we have seen some pretty good results and we wanna share some of the learnings we had.

**Kevin Ball:** So this won't go out until after the talk, so can you give us a sneak peek of what you're gonna talk about there? What are the things that you've seen?

**Juan Pablo Buritica:** Absolutely. The title of the talk is called "The butterfly.js effect." Julian, what's the butterfly effect?

**Julian Duque:** The butterfly effect says that something as small as a flap of a butterfly at the other part of the world can cause a hurricane on this side of the world... So we want to show that with little efforts of the things we have done in the past with the community have impacted others and we have created something massive that is way bigger than us, and there is more than 50k people involved in this huge community. It has been pretty much what we are going to talk about, and it has been an amazing experience to be part of this community.

**Juan Pablo Buritica:** As ambassadors, we may have started some of these efforts. We don't take the credit for any of it... But we wanna represent, we wanna make sure that it is visible, and that folks in venues as important as JSConf US see this work, and hopefully this message goes to folks in other communities that are not tech hubs, that wanna get access to this knowledge and can get motivated and inspired to start this in their own places, whether it's some rural town in Middle America, or a remote town in the middle of the Andes.

**Kevin Ball:** That's amazing. So 50k people now involved in one of these things that started from your idea?

**Juan Pablo Buritica:** Yeah, it's a collection of meetups. Not all of them are associated, but what we've tracked now is that there's over 50,000 people related to each other in different cities in Colombia that come together to talk about software.

**Julian Duque:** And we have a centralized place where we have the most active members of those communities, their leaders, organizers, and it's a good way to start seeing how not only the cooperation and collaboration between Javascript communities all around one nation, but all their differing technologies can learn from each other. We collaborate and contribute with the Python, the Ruby community, Java functional programming... Different tech communities that are spawning all around the region.

\[00:32:28.15\] We are working on helping to sponsor them, showing how they can be better organizers, they are knowing each other, they come to maybe one of the conferences we organize in Colombia, which is like a centralized place where all of these people meet... And from those events, more communities and more efforts are always being born in the country. It's a beautiful effect.

Another thing we also want to show is that it is a cycle. This started from one small event that I was part of as an attendee, Juan Pablo was organizing, and then we met and started working together, then Juan Pablo was in JSConf US \[00:33:15.06\] back in...

**Juan Pablo Buritica:** 2013.

**Julian Duque:** 2013, and from there we started JSConf Colombia, and JSConf Colombia inspired also other JSConfs in Latin America. There is a force that are starting to appear \[unintelligible 00:33:28.11\] in other parts of Latin America, but our objective is to help them and be able to establish a framework to be able to let these other people in different parts of Latin America (not only Colombia) create something similar or even more powerful than the thing we did in our country.

**Juan Pablo Buritica:** I think from an infrastructural perspective, in countries like Colombia where technology, education is really far behind -- the education that you get in college is dictated by the job market, and the job market is usually dictated by large companies that have huge contracts with the government or huge contracts with banks, and that is the only professional experience that you can get. So unlike in the U.S., the role of being a technical programmer, or a software engineer, is considered blue-collar, it's more like labor, than a prestigious software engineer here in the States.

We believe that the only way to change this and to give access to folks to modern technologies, modern frameworks, modern experience is through communities. Communities are usually connected, they're always trying to experiment and share that knowledge. And through these communities, we can run ahead of any other infrastructure that you may find. So you can go to a meetup in Medellin and learn about Vue.js, whereas in school, in university, you will probably not even touch Javascript at all, or any front-end tooling or processes.

So in addition to building a community and sharing this knowledge, there is another intention to create an actual tech hub that is not driven by government funding or the industry. We do believe in open technologies, we do believe in the open web, and we believe that the only way we can take ownership of this is by giving access to people to this knowledge.

**Kevin Ball:** \[00:35:44.03\] I love that. I feel like so much of the tech industry - the cutting edge has always been so centralized. For something that espouses decentralization and openness, we have a ridiculous amount of the cutting edge coming out of Silicon Valley, California... Which, as much as I love Silicon Valley, is a very narrow window of humanity, and has their own set of biases, and a very clear bubble... And having this as something that is really accessible to folks worldwide is huge.

**Julian Duque:** Yeah, and being able to take that "Silicon Valley experience" or these Silicon Valley heroes, these people that you admire, that create the libraries you use, that create the technology you use, that speak at the conferences you want to attend... You know them by Twitter, by YouTube, and they are these role models that are impossible -- they must be like geniuses. You know the feeling I'm talking about.

**Kevin Ball:** Yeah.

**Julian Duque:** Once we are able to close that gap and to create a bridge between these two - a developing nation and the hub of all of the innovation, which is Silicon Valley... Once we bring these people to this country, or communities, seeing not only their technical expertise, but they know "Oh, these people are human. They have the same fears, insecurities that I have. Maybe they grew up with better opportunities or in a privileged environment, or maybe not."

You also know people that are super-famous in the Javascript or tech community that you think are super-privileged, and they also come from countries where they needed to do a lot of work to be able to earn that place and to overcome those biases and those fears... So those are a part of the impact we also see the communities experiencing - being in touch with these people, seeing that these people are just humans and they can be the same as them. This has created another culture of "stop consuming products and start building products, and start building technology." We are starting to see more people not only in Colombia, but in Latin America, with amazing startups, with amazing ideas, libraries, books, doing a lot of things, because they were able to overcome that barrier.

For us, it's powerful. At the beginning we needed to bring these people to close that barrier, but right now, we will have a JSConf Colombia in November, and almost all the speakers that were selected are pretty much new - new names, and new role models, new people that are also having the experience to grow... So it's amazing. We are coming from "These are the specific persons that had the privilege", to show that everybody can and everybody can contribute, can grow, and it's part of the change and effect we have been working on, and we believe it can be way more powerful.

**Juan Pablo Buritica:** If you could summarize our talk, I'd say it shares how we've built a bridge, mostly a privilege bridge. I was privileged enough to be in New York and have access to a very healthy tech community. I was in a position where I could bridge New York and Colombia, and I was also in a privileged position that I could bridge my network, friends from local meetups like BrooklynJS, like ManhattanJS, which are world-renowned meetups, and invite them to speak in Bogota, and in Medellin, in exchange for "Hey, I'll pay you a ticket, I'll pay your hotel. Come along."

What this ultimately gives us, or the mission is to give people in developing nations, in developing places the tools to solve their own problems. I agree very much with you that there is a center of technology in Silicon Valley that is solving problems, but in many ways Silicon Valley is solving first-world problems.

**Kevin Ball:** \[00:40:11.25\] Yeah, and even Silicon Valley problems, not even the rest of the first world...

**Juan Pablo Buritica:** Right, absolutely. So these don't apply. It is great that there's like a -- it's like a research center for the world, because you get all this funding going towards the development of new technologies and new frameworks... The ability of taking some time to invent the Javascript framework is amazing, and that's a privilege that working in the technology industry gives you, because it gives you free time that you can spend towards that.

In Latin America we are in survival mode. You can't really have that much time, because we are trying to figure out how to survive. I think the income for a programmer in Colombia is an average of $1,500/month; that's average, and it's probably a lot lower. That doesn't give you a lot of freedom to work on these interesting problems when you have to take care of your family, you have to take care of yourself.

So instead of ceasing the means of production, it's more like ceasing the means of prototyping and staging, and giving people access to tools for them to solve their own problems.

**Kevin Ball:** I love it. One question - you all are focused on Javascript, and you also mentioned that you've connected with other communities. Was there anything about Javascript in particular that made this really tick? Was there a reason for starting there, or it just happened to be the communities that you were embedded in?

**Julian Duque:** Personally, my experience -- I've been a part of other communities before; I tried to work or start a Linux community in Colombia back in 2001, a Java community... Those communities never did any click. Once I met the Javascript community, when I had the opportunity to interact with the Javascript community in Colombia, there was one community working based on the model that Juan Pablo knew in New York and in this privileged position he was in... And when I was able to be part of the family, I knew that the Javascript family is different. It's more welcoming, and you feel like you belong to something, and the people inspire you to do these things. So we are not saying "Okay, we alone created this huge beast in Latin America." We were also inspired by other people from the same community in all the parts. So this butterfly effect that we are telling - it's from our point of view or point of perspective in Colombia, but we have received the same inspiration and knowledge from the whole JS family abroad. So I will say that the Javascript family per se is very special, compared to other communities.

**Juan Pablo Buritica:** Absolutely. I think what Julian says is spot on. We are also recipients of the butterfly effect that other people started. I personally did focus on Javascript because of the community, but what predates this is when I got into technology around 2009, before that I was a line cook that ran a kitchen in Fort Lauderdale. I had moved to the States in 2007. The recession came along, I needed a job, I landed in the food industry, and I was there making my way up in the kitchen... But I also always liked building websites, and I had learned HTML and CSS because I set up the MySpace for my band, and I just -- it was a hobby to learn... And I discovered the yayQuery Podcast, with Paul Irish and Rebecca Murphy and Adam Sontag and Alex Sexton, that predates a little bit this podcast.

\[00:44:11.22\] I would listen to them when I was closing the kitchen, and I would learn about if statements and just a bunch of random stuff, and despite the fact that I was learning (I think it was) Joomla in PHP, what I was actually building sites for people on, Javascript kept calling me, and I heard about JS Conf in that podcast, the first time. Then they had a recap and were like "Oh, we went to JSConf etc.", and I was learning about the internals of this community. I sort of felt that I knew each of them. Then the first JSConf I went to, I met Adam, I also met Rebecca, Paul was there... And now, more than someone who was in my ears, in a podcast, years ago, they're folks who I consider friends.

**Kevin Ball:** That's great. Yeah, one of the things I love about podcasts is it really does create that connection. I've met multiple people here at JSConf that previously I knew because they were chiming in on our live Slack channel as we were doing the podcast. It does create this incredible community effect.

I'd like to explain a little bit more what you talked about in terms of bridging privilege, because this is a concept that I've been thinking about a lot, also being in a position of privilege. There's a great talk that I'm blanking on the spot about the speaker's name, but talking about lending privilege, and how you can lend out privilege, particularly if you're in a place of privilege... And many folks, if you are listening to this podcast, if you are a white man in the tech industry, let me tell you, you have incredible privilege already, and you can lend that out. I'd like to explore this idea of bridging to privilege as well, because I think it's a slightly different take on this idea of lending privilege, but it's really powerful.

**Juan Pablo Buritica:** The clearest example I can give you right now is the fact that anyone who speaks English is privileged enough to listen to this podcast and learn... But if you don't, you don't get access to that knowledge. And the only way to bridge it is by having access to those worlds, right? I speak Spanish, I speak English, I can take some time and translate this or interpret this to folks, and then immediately they get access.

The unfortunate portion of the technology industry is that -- there's this concept of whoever comes first, gets naming rights. Technology comes first from an English-speaking world, and everything that is interesting - or mostly everything that is interesting - has to be in English. This leaves out so many, just because they were not born into a country that speaks that language, or into a country that supports you learning that language... Then it's like a cycle of how hard it is for you to get just the basic knowledge to get started a website, because most of the resources are not in a language that you grew into.

The way we bridged it is from the first event that we launched in 2011, which was the Bogota conf, we knew that we needed to have interpreters, because we understood that probably the majority of folks who would attend this event - it was 150 of them - would not be in a position to understand technical talks in English, at the speed that they go. So we offered free interpretation.

**Kevin Ball:** That's actually a really interesting idea around -- I wonder if there is any resource out there or just a central clearing spot for folks who want to translate podcasts, posted talks, things like that, to make them accessible around the world.

**Julian Duque:** We have seen personally efforts at the open source project level... For example, the Node.js project has a very good work around the translation of the documentation and the project. They use a platform, and have collaborative translation... But I don't see it specifically like people going and translating a podcast, because it requires audio production... Maybe I can do captioning to a podcast, and that works, but doing the full translation of a podcast is difficult.

\[00:48:31.12\] But what if we start creating content in a language and we start targeting more people, and closing the bridge? Normally -- and see the same people enter into technology and they won't be at an international level, and people from a community start publishing in English, and they start creating content in English, and we're now leaving our people behind... Because we want to fit in in these global tech communities, but by trying to fit in we are forgetting about our people, our language.

Yes, I know we need to learn and we need to grow ourselves and get more and more skills, but how can we also close the gap and help others that don't have that privilege, or they are starting slowly on improving that skill for example, which is language. And that's only one part. There are more other variables that are considered privilege in a country like Colombia. For example, we organize a conference, you want to attend; the conference is in the capital of the country. In order to get there, you need to play a plane ticket, or take an 8 or 9-hour bus ride if you want to make a trip. You need to pay a ticket to go to the conference; sadly, we try to make those tickets as affordable as possible, but we need to pay the speakers, we need to pay for the conference... It requires a lot of money too, so we need to charge a ticket as affordable as possible, but even though -- these people that wanna attend and have talent, they don't have the money, they don't have the means, they don't have the resources.

Also, from the beginning we have created opportunities - scholarships, or "Okay, you wanna come? At least take the ticket for free." While we were growing, getting more sponsorships, and even we ourselves sponsored the conference with our own money or education budget from our companies, we passed from "Okay, I'm going to give you the entrance to the conference, but I will pay you to come here and I will give you a plane ticket." And it's beautiful to see -- in previous JSConfs we have had not only people in Colombia to benefit from the opportunity of scholarships, but countries like Venezuela, that are suffering right now and having very bad social conflict; we have benefitted people from that country with not only the ticket to the conference, but with plane ticket, hotel, food... It's like a full scholarship.

We have seen people that attended this conference doing the same in Venezuela, bringing the knowledge there. Even though they don't have the infrastructure, they have the passion and they're sharing knowledge and they're creating communities, and it's the same effect. But we want to work and be able to also pass that privilege to these communities, so those communities can also grow and make a huge impact.

**Juan Pablo Buritica:** Yeah, so I'll answer your original translating question, and then I'll jump back with what Julian was saying. So there is a platform called Transifex, where you can crowdsource translation for texts, and it's pretty useful; I've seen many communities use it. We have good documentation; it is very likely that someone in a different language (usually Spanish) will start translating efforts, and books, and many other things. So documentation does start getting translated fairly common, but then tutorials don't.

\[00:52:13.16\] You can find a lot of basics in Spanish, for example; once you start trying to find something a little bit more advanced, it gets very difficult. And also talks - there's not a huge culture of sharing what you learn at work, outside, and also you're not always exposed to great production challenges of how to scale 55 million requests... So you're limited by your own experience, which connects to what Julian is saying, because the moment that you can transcend the limitations and get access to the global market of work as a software developer - because you have the skills, because you have the language - then everything changes, and you get access to an income that you will very likely not have locally. This does become a self-feeding cycle.

What we do need to make sure is like folks who are able to transcend into this global market is that we pull people with us. We started and have been dragging a little bit our feet on an initiative that's called Charla, which is an online hangout that gives access to advanced and mid-level content in Spanish, over streaming, to everyone who speaks Spanish. We have a few that have recorded. I think work has gotten in the way of us keeping up to date with this, and we definitely need to bring it back, but it's one of these things that we need to continue to sponsor and provide, so that other folks can come along with us.

**Kevin Ball:** Yeah, I love the idea of accessing the global market and then bringing the community along. A number of years back - and I don't remember the name of it, but I ran into a group that was doing... They were based in a small town in Mexico, and they were doing Ruby on Rails consulting. And they had somebody living in the U.S. who was being essentially a liaison; they were doing business development, finding things, and they would do consulting work, but then they were using this to fund a school, and fund village improvement -- I mean, it was a village of several thousand people, not very large... But they were bringing this prosperity that they had been able to access by accessing the global market and bringing it back to everyone who was there, and I think there's an incredibly powerful effect that we can unlock as more and more people become willing to engage with remote work, and the tooling is getting better to make that possible...

The language is still a barrier, and having somebody who can liaison - I think in that case what they would do is have a set of, essentially, lead developers who spoke reasonably good English, who would form your primary bridge to English-speaking clients, and then junior developers who may or may not speak good English, but could work with them and access that through them.

**Julian Duque:** Yeah, that's amazing. Also, one of the things I love the most regarding this community - we have seen members of our community that started with just attending a workshop, very young (14, 15 years old), then being recipients of a scholarship for a conference, then they are working on organizing a group, then they got a super-good job abroad and they are living in Amsterdam, working for a great company, doing great things, and suddenly they can come back to the conference, but they start building bridges. And these same people that started as attendees, and worked with us, and spoke at the conferences, are contributing back.

\[00:56:02.21\] They were able to have that salary increase, that change of career path, and they're seeing the fruits of that, and they are contributing back to the community. Through the opportunity of scholarships we have other members from very disadvantaged regions in Colombia, that were able to break that wall; they're working for amazing companies out there, and they're contributing back to the region. They created a foundation, they are doing free bootcamps for the job they're in in this region... Amazing work, without any interest of profit. They just want to contribute and help the community the same way they were benefitted by the community.

**Kevin Ball:** I think folks who grow up in a rich country have trouble grappling with the idea of how big of a difference that can make. I spent a while living in Guatemala, and you would wonder - you could go through the towns there, and you could see which houses had someone living in the States, because they would be worlds nicer than the average quality house. And you'd say: "Oh, there's a 'rumesa' house". Rumesa is the word for (I know you guys know, but for our listeners) folks who send back money to their home country, and in Spanish that's "una rumesa". And you could pick it out visually. "Oh, they have somebody who's in the States. They're able to afford a quality of life that is otherwise just inaccessible", particularly more remote places and poorer countries... I know Colombia is substantially richer than Guatemala, but it still makes an incredible difference when we're able to make these connections from where you are, if you're privileged in the U.S., back to some place that doesn't have those opportunities.

**Juan Pablo Buritica:** Yeah. Colombia is richer, but also there is a higher income inequality. I think Colombia is one of the top five countries in income inequality. There's a few folks who have a lot of it. So you can see a lot of the problems, or challenges, or opportunities that Central America, Latin America, and even cities inside the states that are disconnected, that have been sort of like disenfranchised have. It's one of the reasons why we're very big supporters of companies in the States - the companies that I work for, for example - building distributed teams in the states, in cities that are not tech hubs, and also in the Americas. I think we need to support each other.

**Kevin Ball:** Absolutely. And being able to be distributed all up and down the Americas is far easier than going overseas to India or some other typical outsourcing place, because you're in the same timezone. It's really not so hard.

**Julian Duque:** It is good, but you have the challenge of infrastructure. For example, this conference in this unprivileged region - it's basically forgotten by the government. They don't have infrastructure, a lot of corruption, a lot of talented people, passionate people, they want to do a lot of things, but the infrastructure is lacking.

We were at this conference, they were able to get an amazing menu, more than 200 people attended the conference, almost all of the speakers that went to the conference - we sponsor our own trip and our own ticket to go there; I mean, we didn't ask the conference to bring us there... And there was somebody giving a talk, and the power was out. No Wi-Fi, no projector, nothing. And it comes back in less than a minute. And everybody was like "Hey, light has come back!" For us it was like a small thing, and we asked "Why are you so excited?" "Oh, it came back very fast. Normally, it takes 2-3 days for the power to come back." In that moment you say "Okay, even if these people had the opportunity to work in a distributed team for a company abroad, or whatever, they don't have the infrastructure to do it", because the same city is not guaranteeing power, internet... So it's hard in those contexts. It's very hard.

**Kevin Ball:** \[01:00:28.24\] Absolutely. So for folks listening to this who have privilege in one form or another - and as you highlight, if you're listening to this in English, you have a form of privilege - if they wanna do something about it, what are your thoughts, having been there, having been through this experience of bridging folks, what can people do?

**Juan Pablo Buritica:** Give your money away. Literally. If you're not a member from an underprivileged population, mentorship doesn't work because you don't understand the challenges; the context is completely gone. But you have money. You have tech money. So give that tech money away to any event that is outside of a tech hub, like "Hey, I just wanna sponsor one opportunity scholarship." That goes a lot further than anything else.

**Kevin Ball:** And money goes a lot further in places that aren't as bloody expensive as Silicon Valley.

**Juan Pablo Buritica:** Yes... To some extent. This is something we'll cover a little bit in our talk, but Julian was saying that we have two challenges. One of them is we need to keep our events affordable for the local population. If you are a person who makes $1,000 or $1,500/month as your income, and you have a family and all these things, you really can't afford anything past $200, which is a ton. That's a lot of money.

On the other hand, the cost structure for our conference in Colombia is very similar to one in the states. I know because I was a part of the organizing team for EmpireJS in New York, and I'm also the founder of JSConf Colombia. So I think there's a 20k, 30k difference in cost structure, but local sponsorships are impossible to get. Companies initially don't believe that you need the money, that you're gonna spend it for something else, they don't wanna give it to you... So that's really limiting. And you can't charge people locally, so you have to come up with creative ways to cut costs. For example, we don't give food at our events, like lunch, or actual meals; we give snacks... Because food is one of the most expensive things for a conference to offer.

We do pay other speakers for trips from anywhere in the world, and we put them up in a really nice hotel because they become our ambassadors. That means that we need to come here in the States, and all our friends who work at big companies are like "Hey, can you put me in touch with your sponsor, whoever handles marketing? It's unlikely you're gonna hire anyone in Colombia, you probably don't see us as a place where you market your services or your product or anything, but we can really use the money... Can you do us a favor?"

**Kevin Ball:** Yeah, that makes a ton of sense. Awesome. This has been really fun. Anything else you guys want to talk about or bring up in this?

**Juan Pablo Buritica:** You should come to Colombia. We have this conference once a year; it sells out as fast as JSConf US, which is amazing. If it sells out this fast next year, we may consider expanding our venue and welcoming more folks... So you should stop by and visit us.

**Kevin Ball:** Yeah, maybe we can get a JS Party representative down there. I'd love to come visit.

**Julian Duque:** JS Fiesta, that sounds good! So jsconf.co.

**Kevin Ball:** Alright, I'm checking it out right now... Because I don't know if I can make it time-wise, but I would love to be there.

**Julian Duque:** \[01:03:55.28\] November 16-17th, Medellin, Colombia. It's an amazing conference, an amazing city, and definitely you will have a lot of fun and learn a lot... And you can see with your own eyes the beauty of Colombia, and you will fall in love, for sure.

**Kevin Ball:** Speaking of someone who grew up in the States and has visited a number of countries in Latin America, though not Colombia - it will change your worldview; it is an incredible thing to do. If you have not spent time in Latin America, do yourself a favor and get down there, because it will just open your eyes to so many things that you take for granted, that are not true... Some of them good, some of them bad. In my experience, it really has shifted the way that I live my life, so I definitely recommend it.

**Break:** \[01:04:55.16\]

**Kevin Ball:** Tim Doherty is a staff engineer at Procore Technologies, and a long-time member of the Javascript community. We had a great discussion about technology adoption at larger companies, how to use the concept of innovation debt to advocate for modern technology stacks, and how to foster mentorship in the community.

Now, you're speaking just after we talk here, so do you wanna tell us a little bit about your talk?

**Tim Doherty:** Sure. I'm giving a talk entitled ES6 in Practice. The gist of it is that three years later, after the spec has been finalized, browsers are up to speed, but a lot of teams have barely scratched the surface in terms of what you can do with this major update to the language. A lot of it is limited to syntactic sugar, and while all of those enhancements are nice, they're not where the real meat and potatoes lie.

The talk is equal parts a dive into what I think are the important parts of ES6, and how they've played out over the past three years, and also sort of an entertaining case study in how I learned and then championed ES6 for an enterprise software company.

**Kevin Ball:** Nice. Any sneak peeks? What are the key features in your mind?

**Tim Doherty:** You know, I think everybody loves the object literal enhancements, everyone loves template literals and arrow functions and all of that good syntactic sugar. The real meaty stuff in my opinion are the entirely new features, generators, proxies, symbols, things like that. Then there's some controversial stuff, the most egregious of which being classes... And one of the key points of my talk is that three years later, Javascript still does not have classes. It's just syntactical sugar.

**Kevin Ball:** Yeah, the Javascript class syntax is still a prototype model...

**Tim Doherty:** It is, indeed.

**Kevin Ball:** ...which, you know, there are arguments for and against, but certainly we should be aware of the fact that that's what it is.

**Tim Doherty:** Absolutely. And I'm a pragmatist; I'm not one of these people that hates classes. There's a reason for their existence. I actually admire the terseness of the syntax. It just would have been nice if they could have figured out a way to do so without bringing in the class-based metaphor, because it trips up the very same developers who they were trying to court and make the syntax more approachable for.

**Kevin Ball:** Yeah, absolutely. So I'm interested to hear a little bit more about your experience evangelizing this. It sounds like doing that inside of an enterprise company - I know a lot of enterprise companies tend to be a little slow on the adoption side; I've done some work with folks who are working on apps that were essentially started ten years ago and have barely been updated... I mean, they're updated for features, but in terms of the technologies being used, not updated... So how did that go?

**Tim Doherty:** You know, it's always a tenuous process. Enterprise software companies - in our case, we're publicly owned, so we had a responsibility to be conservative to a certain extent. But at the same time, when we're talking about technology and a technology-based company, you can't afford to fall behind. You get innovation debt, which is something that's not usually recognized. That manifests itself not just in how fast your team can react to changes in the ecosystem, but also from a pure business perspective their recruiting efforts. It's really hard to position yourself in a competitive market when you're using outdated frameworks and technologies.

\[01:10:02.21\] I was part of an enterprise software architecture committee that met once every two weeks, and new ideas, new technologies had to be voted on by the committee. You made your case, you backed it up with data and numbers and cogent arguments, and then the committee voted on it. So in some ways, this was easier than other challenges, simply because it's an update to the language itself and not a framework du jour, that's going to fade out of existence... But yet, there was a lot of dubious fear, uncertainty and doubt around it.

The committee is made up mostly of current and former back-end developers, and I can empathize because I was one myself for many years... So I came to the table with sort of these tried and true guarantees... "It's a spec that's finalized. This will be part of the language, it's going to be here for a long time to come." A lot of the pushback was around the timing of it, adopting this prior to browsers having implemented it, and there there was the reassurance that the community at large is doing it. We're in a world now where transpilers are just part of our build chain... And as long as features have made it past like a stage three proposal, it's pretty safe to use them in production.

**Kevin Ball:** Absolutely.

**Tim Doherty:** So eventually I was able to sort of wear them down with enough data and enough analysis that people actually are using these tools in production, and that it was safe for us to move ahead.

**Kevin Ball:** I like the idea that you just sort of touched on there of innovation debt. Because we hear a lot about technology debt, code debt, we talk about actual debt and various things, but can you explore that concept a little bit more and how it plays out?

**Tim Doherty:** Absolutely. It actually ties into something I'm doing right now at Procore. Procore is an amazing company to work for, by the way, and we're always looking for great people, so I encourage anyone that's here at the conference to come and talk to me about opportunities we have... But one of the things they allowed us to do as an R&D organization was to crowdsource what we thought were the most important problems to tackle in the next fiscal year, and I champion debt, debt in all of its forms. There's technical debt that everybody understands, problems with the code that surface later as interest on unpaid debt.

One of the last recognized forms of debt though is innovation debt. Innovation debt happens when you fail to stay abreast of changes in technology, changes in process that can improve the way you do work... And like other forms of debt in R&D, it usually comes to a head in a really egregious way. For example, you now have a five-year-old codebase, or a ten-year-old codebase even that no developer in their right might wants to touch, including the people you have on board...

So what happens is almost invariably the good people you have leave to pursue other opportunities where they can work with later and greater technologies, and your recruiting efforts come to a standstill. So aside from the fact that often the technologies and processes bring in and of themselves tangible benefits - I mean, the reason why frameworks iterate, the reason why new ones come about is they solve a problem better than others do. So not only do you lose that, but you end up with a team that can barely stay ahead of their own code.

**Kevin Ball:** Yeah, definitely. I've seen that in some of the places I go in to train folks. The teams is frustrated, and they can see what's going on; even if you've been at the same company for ten years, working on this product, you can see what's happening in the ecosystem, and you want a piece of that.

**Tim Doherty:** It's challenging, and this is one of the things I think -- especially if you are a tech company, if you are a software company, it is really important to walk the walk. You can't just tell people they'll be working with the latest and greatest; you have to make a commitment to your team and to your recruitment efforts to stay ahead, to stay latest and greatest within reason.

There's obviously constraints around every team, and if you're publicly-traded, you may have to be a little bit more conservative than otherwise, but it's really important to stay abreast and stay ahead.

**Kevin Ball:** So you mentioned the human cost with your existing team, you mentioned the recruiting costs, and obviously the benefits of all these years of technology advancements... Are there other ways you've seen innovation debt play out?

**Tim Doherty:** \[01:13:52.19\] Sure, and one of them is -- I know the Rails framework is a really popular framework for Ruby shops; Procore is a Ruby shop. We've managed to stay relatively current, but I have heard through colleagues that have worked at other companies, other Rails shops, horror stories of the innovation debt getting so bad... They've stayed on an older version of Rails and haven't wanted to migrate that they've forked it and then maintained their own version with the various security patches that are published by the rails community... And there you have a combination of innovation debt and technical debt.

It becomes untenuous. They spend so much time maintaining that fork of the framework that their feature work comes to a stop.

**Kevin Ball:** Yeah, that's a really interesting example. The Javascript world -- I mean, Rails has been around as a framework for 10-12 years now... In Javascript world I don't know if anything has lasted that long; maybe Dojo.

**Tim Doherty:** Yeah, Dojo just released version 2, I think, after all these years. It's quite remarkable. And Dojo we have to thank for many of the innovations that we take for granted today.

**Kevin Ball:** We do, yeah.

**Tim Doherty:** The first module system really came out of Dojo, which later became -- James Burke wrote the AMD specification and RequireJS out of that work in Dojo.

**Kevin Ball:** Yeah, I mean, that's why "Dojo already did that" is a meme, because it goes around... Actually, Dylan from Dojo is doing a talk that is "React already did that", trying to play on that a little bit...

**Tim Doherty:** Very nice. I'll have to check that one out.

**Kevin Ball:** Yeah, there's definitely -- that's really interesting. So I'm curious then to learn a little bit more about how you get out of innovation. This seems like something that you've thought about a lot, you've grappled with internally... What's the pathway out?

**Tim Doherty:** Yeah, so I have some experience... This will be my 23rd year in software engineering, in one form or another. I've been at Procore going on a year now, and there's various different ways to tackle this problem, and you kind of have to divide it into your current situation, cataloging your existing debt and figuring out how to repay that, and then you look at how do you be a little smarter about not incurring debt going forward.

So as far as the existing debt, there are some tools available to us. Laurie Voss just mentioned that Npm now has audit built in, that will look at security vulnerabilities. There's also Outdated, that will show you the delta between what you have and what the latest version is, and their tools -- there's a great tool called Dependabot, that will actually open a PR for you and tell you that your version is outdated. The nice thing about that is it nudges you into action, but a human has to decide whether or not - especially if it's a major version - if the risk is high.

So you have to slice and dice those and figure out and prioritize when you can tackle your existing debt. And then going forward, it's up to your organization to make a commitment to stay on the latest stable version of the framework. That means that the delta between each update is nominal. You can use semver ranges and things like that just to automatically stay up to date with minor versions, and then you make that commitment to do the work that's required to stay on the latest major. It just requires a little due diligence, at the end of the day.

**Kevin Ball:** So have you found folks on the business side to be receptive to the concepts?

**Tim Doherty:** I have, partly because my personality style is one that I've cultivated over my career - I'm not afraid just to walk up to executives and bend their ear... And also, as part of this initiative, the leadership of our organization made it very clear that their doors are open, so I just jumped right in on that.

The hardest nut to crack was the product organization, which is almost always the case; they're focused on delivering features, they're focused on customer value... And so translating what is often a technical problem into something that product can digest I knew was gonna be the hardest.

I did manage to get a lunch with our Senior VP of Product, and talked him through this all in kind of laymen's terms... And there were a few lights that came on then. Then we had a unique confluence of events where we had this customer summit, where these customers came and talked about things that were highest priority for them, and we looked at a bunch of backlog items, and lots of these were small debt items, especially UX debt, things like the delta between what customers expect and what we deliver... And I had the SVP of product reach out to me on Slack, during the event, and say "I think I get it. We had this thing come up in one of our customer support calls, and I think that's UX debt. I wanna follow up with you; let's get some time on the calendar when you get back from JS Conf and talk about it."

**Kevin Ball:** Nice!

**Tim Doherty:** So I'm actually changing minds and getting buy-in from the people that really need to buy into it, which is the business side.

**Kevin Ball:** \[01:18:02.17\] Yeah, absolutely. I think that's one thing that we as technical people sometimes have to learn painfully over the course of a career. You need to start with the pain that they are feeling... And for the product organization, design organization, it's probably pain in terms of "I want these user experience things to happen, and it takes forever to do it, or it's really hard to do it, or it never comes out quite right", and you can kind of talk them through this conversation of "The reason this is hard to do is that we're on five generations old of Javascript and we can't do this type of thing."

**Tim Doherty:** Absolutely. And also, you know, some of the smaller issues, which in isolation seem like not such a big deal, get deprioritized in favor of shiny new features, and then all of a sudden, one of your customers experiences five or ten of those things all in one session, and the effect is devastating from a credibility perspective. So I think that's where I was really able to flip the switch with Brandon and get this thing rolling from his perspective.

**Kevin Ball:** So you talked about ES6 is one area where you're doing this... And we say ES6, but it's really modern Javascript. There was this big gap, then we had ES6, and now we've got all these kind of rolling one per year new specs coming out and stuff getting modernized, and some of the features you mentioned I think we not in the first ES6, but actually a couple of the later versions of this. What are some other areas where you are tackling innovation debt and where you've seen these things making a big difference if you can bring them on board?

**Tim Doherty:** We are very much a React shop, so the whole ecosystem that surrounds it - Redux and various abstractions on top of that, like the various side effect libraries, I've found recently that a huge portion of our codebase we're using an outdated version of Redux Loop, which is an async side effect handling library... And I was able to convince from the ground up developers just to opt in. The way I did that, another area of tech debt that I think is often unaddressed is test coverage. We saw on Laurie's talk on stats from Npm that something like 21% of Npm users (10 million users) have no testing at all; to me that's like -- I can't fathom that at this point in my career... But again, I've been around for a while... So I actually had one of these younger developers that was tackling this problem work on a tool that I had written from the ground up, with TDD, and show him how much safer and easier it is to swap out a new version of a library with a slightly different API, when there's tests to back it up. That's safe, the Red Green Refactor, and often it's a matter of fear; people are afraid to take that leap. Part of that is cultural; you have to have a culture that allows people to fail, and very quickly fix their mistakes. And the other is to show them that there's techniques we can use to make those failures a lot less and a lot less often.

**Kevin Ball:** Yeah, I think early on -- well, it's hard to say early on, because Javascript has been around for so long... But for a very long time, the testing solutions in Javascript were poor. But we're not in that boat anymore. We've actually got some very good testing solutions out there, and doing TDD Javascript across the board is much more achievable now.

**Tim Doherty:** It is, and in fact, like most of the tooling in the Javascript ecosystem, it's grown up very quickly, and we're now seeing some of the most sophisticated tooling of any stack happening in the web platform. The debuggers are outstanding, they're very advanced; the testing tooling, particularly Jest from Facebook - there's no excuse anymore not to do it.

I'm very much a mentor and an evangelist. I'm giving a course at work actually on front-end test-driven development to demystify all of this stuff and show people that it's actually not that hard... That the bigger leap is probably getting into the mindset of test first, not the tools themselves. The tools are robust and very fast.

**Kevin Ball:** That's actually another area that I've been talking with folks about and I'd be interested to explore with you. Many of the people that I have talked with have highlighted that we as an industry have a bit of a mentorship gap. As the industry started to blow up with the most recent round of big tech companies, there was a reaction of "Oh, we've gotta have all these bootcamps to help people get into the industry", and as a result, we have a glut of entry-level folks, but we don't globally do very well at getting people from "Okay, I'm started, I'm entry-level, or 1-2 years in" to "How do I progress to become a more and more senior developer?" It sounds like you've got some systems in place within the company. Can you talk a little bit about how those work and your experience both there and in other places in terms of mentorship?

**Tim Doherty:** \[01:22:30.02\] Absolutely. That's been something that I've very much focused on in my career, and I had some people early in my career that took me under their wing and helped me grow as a developer, and I've wanted to give back ever since. I really enjoy learning, because learning benefits not just the student, but also the teacher. If you wanna learn something, the best way to learn it is to teach it.

At Procore, they're very much a learning organization, so we have funding from the state of California for structured education programs, and we also do lots of informal trainings on the job; we have lunch-and-learns at least once a week, and we have these formal dev academy courses. The TDD one that I'm teaching is coming up in September.

The organization very much focuses on the growth and development of its employees, so we encourage pair programming, mob programming, all sorts of things that should encourage young developers to learn from those who have been around for some time... And then personally, I took over stewardship of Santa Barbara Javascript meetup about four years ago. It was languishing, like meetups do...

**Kevin Ball:** They tend to, yeah...

**Tim Doherty:** Yeah, people take on a responsibility and don't realize what's actually involved in running a meetup.

**Kevin Ball:** Or life changes.

**Tim Doherty:** Exactly.

**Kevin Ball:** I started a meetup and ran it for three years, and then I had kids and I was like, "Well, shoot, I can't do this anymore."

**Tim Doherty:** Yeah, so I've got two kids and a step-son, and I'm also a president at Paradise Dive Club in Santa Barbara... And I work full-time, and I run the Santa Barbara Javascript meetup, so what's your excuse?

**Kevin Ball:** Alright, man... What's your secret?!

**Tim Doherty:** No, I'm totally kidding, but when I took over that meetup, there were two things that I had in mind. First and foremost was to create a community in Santa Barbara for the local Javascript community that was safe, and that no topic was out of bounds, and that younger, inexperienced people could come and ask any questions they want without feeling like they're being ridiculed.

Then the second was to provide the opportunity for people to connect from a mentor/mentee relationship, as well as an employer/employee relationship. So we've had some really successful couplings, of people finding jobs and people finding tutors, and these kinds of things. The community now, four years later, is thriving.

**Kevin Ball:** That's the idea of deliberately focusing on connecting mentors and mentees; it's a good one, and it's one I wish I'd known when I started San Diego Javascript back in 2011, or whatever it was... Because we had a focus early on on getting everybody able to speak, and connecting employers and employees; it was a smaller tech scene at the time, and particularly front-end web scene... So we always had "Who's hiring? Who's looking for work?", things like that.

\[01:24:47.18\] But I think if you're running a meetup, having just a brief section of "Who's looking for mentorship? Who's willing or interested in mentoring?" I mean, it doesn't take long. A minute at the beginning or the end of a meeting... That's all we usually did for hiring - we'd say "Who's hiring? Who's looking to hire? Okay, everybody who's raised their hand, go find one of the other folks."

**Tim Doherty:** Yeah. If I can cross over to my other major passion, which is scuba diving - every time you're on a dive boat, that's the first thing they ask, "Who needs a buddy?" And then those people that came single and don't have a buddy, you mentor him out, you go out diving together.

**Kevin Ball:** Yes. It's so key, and that can fill some of that gap... Because certainly, there are plenty of folks out there who wanna teach, who are happy to teach, who are happy to help you... Especially for motivated folks. This is something that I don't know how exactly you bridge in a meetup, but I've found folks will reach out to me and say "Hey, I want a mentor", and I'm like "Great. I'm willing to mentor folks, but what have you done so far? What are you stuck on?" "Oh, I'm just getting started. I haven't checked anything out."

**Tim Doherty:** Yeah.

**Kevin Ball:** "Well, I'm not sure what you want me to do for you. A lot of this is online, you've just gotta start." Whereas if you come into a mentoring and say "Hey, I've got a question. Can you help me? I've been trying to figure this out and I'm stuck", almost -- I won't say anybody, but very large numbers of senior folks will happily sit down and help you figure out a specific problem, and if you continue to show interest and excitement... I've got a couple folks that I mentor regularly based on that, and it comes from showing commitment and trying to do it yourself, but also being willing to ask for help.

**Tim Doherty:** Absolutely. And I even take that one step further, both at work and outside, in that if there's an area that I'm passionate about, like test-driven development, for example, I will actively pursue people. We have the codebase there at Procore - again, it's a younger organization, and so the front-end test coverage isn't where I'd like it to be, so I've basically just gone and identified tools with lower test coverage and then just approached those folks directly and said "Hey, are you guys interested in learning how to write tests, and write good tests, and bump your code coverage up?" Then I take an active role in getting the mentees to come to me.

Then the other thing we've done with the Javascript meetup, in addition to the monthly talks where we have someone stand up and talk about something, as we've done these kind of pair-in-the-pub things - one of my co-organizers, they have a little pub in their startup, and we just get people and tell them to bring their laptops and a problem they're working on, and we're there for them to help them work through things. So to your point, that's a great way to have a focused conversation and get them started.

**Kevin Ball:** Absolutely. And as you mentioned earlier, every time you do that as a mentor, you will learn something.

**Tim Doherty:** Oh, yeah.

**Kevin Ball:** Folks will ask a question, and it'll twist the way you've been thinking about it, and you'll learn something new, even if it's something you've been doing for 20 years.

**Tim Doherty:** Sure. Well, you know, as I'll cover in my talk, I'd been following this spec for a little while as ES6 was coming to fruition, and I was really interested in going deep and learning it myself, and so I went and put together a three-part series of talks and hands-on test-driven coding exercises that explore the entire surface area of the spec, everything in ES6, and that forced me to get up in front of people and know my s\*\*t before I actually started opening my mouth and talking about it. Then I was able to sit with people, with their laptops, and walk them through, like "This is how it actually works." That's where the real learning happens, in my opinion.
