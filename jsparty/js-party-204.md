**Amal Hussein:** Hey, everybody. We're so excited to be back this week with a very special, special, special guest. I know I say that every week. All of our guests are really special, and I feel like I have this thing called recency bias, where the one talking to right now feels like the most special. So Salma, you are the most special. Welcome, Salma. Salma Alam-Naylor is joining us today. Welcome.

**Salma Alam-Naylor:** Thank you. Thank you for having me. It's a pleasure to be here in this party. The party music at the beginning was a joy to dance to. I'm ready. I'm hyped. Let's go!

**Amal Hussein:** Let's do this! And we have K-Ball, not to be mistaken with disco ball, right? ...for the party. Has anybody ever made that connection - K-Ball, JS Party, disco ball...? No?

**Kevin Ball:** Growing up with the last name "Ball", I have heard them all.

**Amal Hussein:** Oh...

**Kevin Ball:** I have heard them all. There are so many fun name jokes you can be on the receiving end of if your last name is Ball. So yes, disco ball has happened before.

**Amal Hussein:** Okay. Well, I mean, it's just coincidental, because our logo for the podcast is a disco ball. So it just feels very on-brand.

**Kevin Ball:** I dance hustle, which is a disco dance.

**Amal Hussein:** Right. Right. A future show episode. So we're really excited to be welcoming Salma on the show today, because we're going to be talking about a super-important topic. And I have a backstory to kind of share with you all before we get into Salma's intro, because the way I met Salma was, actually, I saw her talk being advertised on the internet, and I was like, "This sounds amazing. I want to go to there." And I showed up. I wasn't part of this meetup community. It was a lovely meetup community, based out of England, called Async JS, I think, right?

**Salma Alam-Naylor:** In Brighton. Yeah.

**Amal Hussein:** Brighton. Yes. Yeah. Brighton is in England, right? So--

**Salma Alam-Naylor:** Yes.

**Amal Hussein:** ...ballpark. I went to this online meetup event, and Salma gave this incredible talk that just really-- it had me thinking for days afterwards. Salma, I'm so excited to have you here. Can you tell us a little bit about yourself?

**Salma Alam-Naylor:** I have a very varied history. I'll start from now and go backwards. So I'm currently a developer advocate for Contentful, advocating for web development best practices and JAMstack-based architecture and approaches and frameworks. My tagline is "I help developers build stuff, learn things, and love what they do". And I think that will become relevant later as to why I do what I do; because it's not just about tech and the latest, fancy Web 3.0 stuff or whatever. It's more than that, and it's about the people, which will become important.

Before that, I was a tech lead for five or six years, specializing in frontend. I was working in Manchester, in the UK, at a variety of different places, including agencies, global e-commerce, startups and other stuff. And then before that, I was working as a music teacher in secondary schools for 11 to 18-year-olds. So I've got that education background, experience, qualification that I think is really integral to what I do now.

At that time, I was also a musical comedian, so I was telling jokes in the form of songs on stage around the UK. And before that, I was a freelance professional musician. I just graduated out of music college. I did composition as my degree. I was in a band. We toured the country, we got an album on Spotify, and--

**Kevin Ball:** Whoa... Whoa, whoa, whoa, whoa. Is it still there?

**Salma Alam-Naylor:** It is.

**Kevin Ball:** Alright. That's got to be in the show notes.

**Amal Hussein:** I'm typing as we speak.

**Salma Alam-Naylor:** It was 2008. It was released in 2008, so it's a long time ago. So that's me. But I always did tech when I was younger. I tried. I mean, there was very little that you could actually do with the internet in its infancy in the '90s, in a very rural place in England. And so, I think maybe if I was a child now, maybe things would be a lot more different. But actually, I do not regret any of my life choices or career route, because I think that's what's ultimately brought me here, with all of the different bits of experience that helped me write talks that Amal likes so much.

**Amal Hussein:** Yeah. Wow. Oh, my God.

**Kevin Ball:** Amal, I'm noticing a trend in your invited speakers. Last week was Broadway. This week it's touring in a band... Seriously, good picks.

**Amal Hussein:** Well, I mean, I'm an intersectional person myself, as are you K-Ball. What can I say? Intersectional people are, I think, the future, right? And they're, thus, very exciting people. Salma, that's a pretty incredible background. Thank you for sharing that. And I can say, firsthand - I haven't attended one of your talks - you really are a very passionate person, and I think you have this way of explaining things that, clearly, I think now knowing your educator background, I can see it. So kudos.

So your talk, this famous talk that we keep skirting around, it was titled, How to Prevent the Collapse of Society by Building an Accessible Web. So can you speak a little bit more to that title?

**Salma Alam-Naylor:** I have a strange fascination with the impending apocalypse. I have always wanted to prepare for it since I was a child. I'm actually moving house in like a month and a half or so, and I feel like creating a special room in that house to build up a ton of supplies for when the apocalypse finally does come. And I used to have weird fantasies about the apocalypse, maybe because what the world looks like with social media, and the things that are going on, the world looks like it's heading that way, in many ways. So as a survivalist, as someone who wants to live, as someone who has a child who needs to survive for their family legacy to live on, I want to prepare for the apocalypse. And I think if you put this kind of spin on web development and thinking about how we would need to survive when the apocalypse is here, I think it helps us put into perspective what we need to be thinking about today.

So for example, setting the scene in the talk: the apocalypse has arrived. It's 2031, and there are no computers, really, as we know them now. All of the display screens are broken. They've been bashed up in all the fights for food, and the internet is really, really slow. So you can't see things, which is kind of meant to be emulating people who can't see very well, or can't see at all, who are having to use technology today to help them live their lives. And also, the internet is really, really slow. And actually, one of the biggest nuggets of information that I've found when I researched for this talk was that in the whole world in 2021, the average internet speed is just marginally faster than the simulated slow 3G speed in Chromium DevTools. And so, if most of the world is operating on really slow internet, performance is key, right?

And so if you're thinking about the apocalypse, when you need this life-saving information, you need to get that life-saving information as soon as possible when the zombies are hitting on your door, or whatever is happening in the apocalypse. If you have a slow web connection and the website is slow to load and it isn't performant, everyone's going to die. So if you can't see the content, how can you get that content to users in the apocalypse, if their screens are all broken? And if the internet is slow, how can you ensure that information is sent to people in a timely manner, so they don't die in the apocalypse? That is the premise of the talk.

**Amal Hussein:** Dun, dun, dun... So first of all, this premise of the impending apocalypse-- we're going to try not to make this show depressing, but yeah, no, real talk. Yeah. That's a very real sentiment that I think many of us have been feeling for quite some time. However, I think this constraint, this imaginary world constraint of not being able to, maybe, see well because there's dust, or not having good access to consistent electricity, or not having good access to high-speed internet - these are constraints that, I think, help build empathy in a way that's using storytelling, that I think is oddly a relatable factor for engineers, right? I feel like engineers are really into zombies and impending death by zombies, and stuff like that, and so, it's an interesting spin.

**Salma Alam-Naylor:** So we know too much already, us engineers. We need to do more to prevent what's coming and help save the world with our accessibility skills and our performance skills on the web, surely, right?

**Kevin Ball:** Can I detour slightly and ask, what goes into a survivalist shelter in the UK? I know in the US, all the survivalists are all about guns and ammo, and things like that. But my understanding is that's a little less accessible there.

**Amal Hussein:** Victoria sponge, and spotted dick, and trifles, and whatever the hell else.

**Salma Alam-Naylor:** \[laughs\] I was more going along the lines of baked beans and all the different beans and cans of chopped tomatoes, probably jars of pickled eggs and pickled things, and jam, and toilet roll; because we know what happens with toilet roll, in any kind of crisis.

**Amal Hussein:** Right. So I'm going to compose myself here.

**Kevin Ball:** And apparently, text to speech as well; something that should be going in there.

**Kevin Ball:** Yes. As many kind of devices that are hardware - no screens - as many accessibility devices as possible need to go into the shelter. Yes.

**Amal Hussein:** Right.

**Salma Alam-Naylor:** Good.

**Amal Hussein:** Right.

**Kevin Ball:** IP over radio wave, things like that.

**Salma Alam-Naylor:** Uh-huh. Uh-huh.

**Amal Hussein:** K-Ball, I think we need a whole spinoff show, my friend.

**Salma Alam-Naylor:** How to survive in the apocalypse.

**Amal Hussein:** Right, as a software engineer, specifically.

**Salma Alam-Naylor:** It's a good user story. That's a good user story.

**Amal Hussein:** Right. We need to start setting up land parties again, and all kinds of things.

**Salma Alam-Naylor:** Yeah.

**Amal Hussein:** But anyway, so you keep talking about accessibility and performance, performance and accessibility... Are we just saying that accessibility is performance, performance is accessibility? Because it really just feels like some of these things are so related there, almost interchangeable at times...

**Salma Alam-Naylor:** I think performance is a key part of accessibility, to be honest, especially when we look at the average internet speed across the world, and we look at the variety of devices that people are using across the world, and the variety of browsers people are using across the world.

I am a big believer that tech is a big enabler to get out of poverty and to get an education. If you have an internet connection, you can learn, you have the world. We're not talking about Encarta 95 anymore; we're talking about the whole world at your fingertips. So if somebody in deep, deep poverty in Africa or in South America has access to an internet connection, they have the world at their feet. And if they cannot access that information, like in the apocalypse, they can't access it, then they can't get out of where they are. And I think that's happening more and more. You hear stories, "Tech changed my life", because it's an industry that is growing, it is thriving. There's so much money in it. And at the moment, unfortunately, in this capitalist society, we need money to live and thrive and blah, blah, blah. But if people have access to this information in their hands-- because mobile devices are so much more popular than desktop devices across the world... Everyone's got a mobile phone.

If you have a website or something that works effectively on a phone, on small screens, at small resolutions, big resolutions, on a slow internet connection, you have-- and it's not just about accessibility; it's about access to information, isn't it? It's about access to critical, life-saving, life-changing information. And performance is a big part of that, because if your site is slow, if your site crashes, if your site is bloated, if your images are too big, and you are robbing the internet user of their bandwidth with your large files and your large images and your slow nonsense load times, then you are doing the world a disservice, potentially. That's a profound, ridiculously silly statement, but perhaps you are. Perhaps you are depriving the next generation of people who will be able to take themselves out of poverty as a result of access to information on the internet.

**Break:** \[15:12\]

**Amal Hussein:** So Salma, that was really, really profound. And obviously, that's going to be a running theme for me here, being inspired, for the next 30, 40 minutes. However, you've kind of skirted around this - how does accessibility affect new internet users or folks maybe even remote parts of the world? But I think, for me, the core problem is I just feel like developers don't care. It pains me to say that. And so, my question to you is, "Does accessibility have a marketing problem?" And if we just-- I know we said, "Hey, they're not exactly the same thing", right? Accessibility is not perf, perf is not accessibility, right? There's a Venn diagram relationship here.

**Salma Alam-Naylor:** Yes.

**Amal Hussein:** Right? But what if we just squinted our eyes a little bit, and just renamed accessibility performance, and then, all of a sudden, we'd get a bajillion nerds to care about it, because there's all of a sudden this gamification? What do you think?

**Salma Alam-Naylor:** I think that's an interesting take, and there's so much to unpack in that question that you asked. The first thing I will say is that I believe developers do care. The developers that I have spoken with, the developers in the communities that I've been part of, the developers in the product teams that I've worked on - they care 100%. But I think this is what we were talking about at the meetup in Brighton--

**Amal Hussein:** Oh, yes.

**Salma Alam-Naylor:** ...it's that companies don't care, corporations don't care, budgets don't care. And there's no room in the budget to make our sites accessible. There's no time in the time budget to make our sites accessible. You just have to ship this feature, because we want to make money and grow, capitalism, blah-blah. And so I think it's an industry problem, because the people who are controlling the industry, the people who are at the top and making these high-level decisions about what features need to go in products and what needs to go where - that gets totally lost in the journey of the ticket from the left to the right of the board, because it takes time. Accessibility takes so much time. It takes proper testing, proper QA by people who actually have disabilities and who have those impairments, and who have that experience of using devices and the internet in the way that they do.

The spectrum of the people who have types of disabilities is so varied as well, that to test for every single eventuality would also take a very, very long time. And so developers try and make the most of it, I think, but they get talked down. They say, "No, we don't have time for that. Sorry. Just ship the feature, please." And I've been on developer teams where everyone is so upset that they are not allowed to make the sites accessible, because it's not in the user story or in the budget, or it's a progressive enhancement later on.

Now, I think perhaps this marketing problem that you speak of-- so I talk a lot about how it generally falls upon marginalized, oppressed people to try and fix these problems in the world. And what you see on places like Twitter is that it's always the people who have these disabilities who have to advocate for themselves. That in itself is a problem, because the minority are advocating for something that should be for the majority. And you don't get people in positions of power who are "completely able" because they don't have that empathy, and they don't have that time, and they're not close to those people... Because as we know, tech is not diverse. Tech is, a lot of the time, full of white privileged men at the top in the C-suites, and they don't know.

The thing is, what's interesting is that one day, one of those people could have an accessibility issue. One day, one of those people could lose an eye, or lose the use of an arm, or a leg, or their hearing. These things happen to people, sometimes temporarily, sometimes permanently. Then will they think it's important? And so, I think there's a distinct, big lack of empathy at the top of tech. And I'm not saying it's completely devoid of that. There are definitely places that are talking about this and advocating for it. But it all comes down to the fact that marginalized people have to advocate for themselves, and they are not in positions of power to be able to make those changes because of the way the world, unfortunately, is structured.

**Kevin Ball:** Question.

**Salma Alam-Naylor:** Yeah.

**Kevin Ball:** Coming back to this idea of a marketing problem that Amal was talking about... Because I think, to your point, that's a very deep root cause, and it's not going to be a quick one to be addressed. I think there is a lot of really interesting activity going on in terms of trying to both surface the extent to which tech is dominated by certain majority groups and address that issue, and I always have to be careful talking about this, because I'm one of those white dudes.

**Amal Hussein:** It's safe to that you're not a problematic person, though, K-Ball, for the record.

**Kevin Ball:** I try. I mean, one of the things that I always try to remember is that ally is not a permanent state, right? Allyship is an act. So I could be problematic tomorrow, if I'm not careful. You have to constantly be paying attention, because when you are not hit in the face with whether it's accessibility issue, a privilege issue, something else... If it's not causing you a problem, it's easy to have it skate out of your eyes.

But where I wanted to kind of go is say - are there incentive structures we could talk about around accessibility that do hit those folks currently in power in places they care? And one I want to go into is profit. How much money is lost by having your e-commerce site be inaccessible? How much types of profit might be missed? We talk about accessibility referring to particular disabilities, and an ability to access things. But to me, accessibility is about machine readability: we're taking a site that previously required a human to make sense of it, and applying a bunch of things that allow machines to make sense of it, so that they can translate it to humans in different ways. And that machine translatability also, potentially, opens a whole range of possible applications and profit and other things that those folks at the top might well care about, even if they do not have empathy for folks who are necessarily needing these things.

**Salma Alam-Naylor:** That's the thing as well. Think about how many more people could use your site and buy things from your site if they could navigate it effectively. Now, I don't wish to hate on any companies or developers right now, but in my talk, I actually have some very extensive examples of accessibility issues on one of the most popular websites in the world, which is AliExpress. And if that is one of the most popular websites in the world already and it's completely not navigable with a screen reader currently, or when I was writing this talk, think about how, if AliExpress could optimize the use of their website with the machine readability that you're talking about. That could double, triple, quadruple in profit and size.

**Amal Hussein:** Yeah, I think that's exactly it. You kind of hit the nail. It's like, you don't even know how good you could be, right? So it's not like you can even say, "Hey, you're losing 5% opportunity", because you know, much like compound interest, this stuff is exponential, right? So I think that's a really fascinating point.

And to circle back to my marketing problem question 0 I just feel like, as a tech leader, I always encourage engineers like, "Hey, you want to work on tech debt, you want to work on writing more tests - that sounds awesome. But market it appropriately. Tie that to a business value." And I think that's kind of the point that K-Ball is making as well, is "Hey, is there a way to tie this to a business value?" And I think, for me, that's where maybe metrics come into play a little bit. This stuff is so complex. There's no fully accessible proof tooling suite that you can add to your website. There's a combination of lots of different things, along with lots of different manual efforts. And every app is a snowflake, because of its content and whatever else, and user base, and language support. And so, I'm just curious, where does it even come-- how do you even start to wrap your head around, "Okay. Well, I want to make my site accessible"? Where do I start? Because it's quite daunting.

**Salma Alam-Naylor:** I've just had an idea for a new web standard that potentially could change the game. You know how there's requirements for like GDPR and all these cookie consent and all these compliance regulations to put particular things on your website when people are visiting them? How about in the footer or somewhere prominent on your website you need to display the accessibility scores that you get from WebAIM or WCAG, and then have to display them. And then maybe those kind of websites that score low - you have no choice, it's law to display them now, and the websites that score low get ranked way down in Google... And gamify it, like you were saying, like that. Let's put some numbers on it, put public numbers. Let's make sure that people understand what this actually means. So you're talking about tooling, you're talking about using automated tools and things to make sites accessible. It's so proven that those things don't work, especially in terms of speed.

**Amal Hussein:** It's a half measure.

**Salma Alam-Naylor:** Exactly. And it's, "Oh, we're doing accessibility, because we're putting an overlay on our site", or, "We're putting it through a tool, or this, and the other." The key thing, I think, with accessibility is that because it is for humans; humans need to do it. Humans need to have that empathy in order to do it. And I think using an automated tool to do a half-measure job is not how we should be thinking about it. We, every day, are building websites for people to use. We're not building websites for machines to use. And I think what I like to bring to tech is the kind of human-centered element. Like, "Can you think about the people who are going to be browsing your page and how they might be browsing it? And let's design it for them, not for you. Let's not write ridiculous, silly spaghetti code because we can, and because it looks cool, and because no one else can understand it, so you do it like a genius. Let's build things for people, right? And let's enjoy these people using it. Otherwise, what really is the point?"

**Kevin Ball:** Yeah. What are we doing, actually, if we're not making people happy?

**Salma Alam-Naylor:** No.

**Kevin Ball:** So one thing I think that might be helpful is talking loudly about those costs for folks and making, once again, that business case. So one thing you could do, like GDPR, is you could legislate it and say, "Okay, you must do this." And that's a hammer, but that's a very slow process to get that to actually happen and apply.

And I remember, nobody used to care about performance either. And then Amazon published this study and they said, "Every 100 milliseconds is a percent of profit", and suddenly, everybody started caring about performance, and it was pushing and pushing. And then beyond that, Google started to say, okay, if sites are really slow, that impacts their use, because people would not be as satisfied with Google, because they blame everything on Google, and Google started ranking for that.

So if we can start getting, once again, these incentives-- and I was looking around. It looks like there is a study on the Level Access blog, which I have no idea who this is... They have less cache than Amazon, certainly, and things like that. But I was looking at cost to e-commerce, and they pegged it as something like 10%-ish of online shoppers would click away from your site if it's difficult to use with a screen reader or something like that. So it's not as clean as every 100 milliseconds gets you 1%, but it is pretty compelling to say, okay, if you're below some bar, you're losing 10% of your revenue. I'll post that link in the JS Party channel.

**Amal Hussein:** And is that a correlation just saying websites that happen to be bad for screen readers are also just-- people are also just less...

**Kevin Ball:** No, they're specifically for the screen reader folks.

**Amal Hussein:** Okay. Okay. Got it.

**Kevin Ball:** The numbers they're saying here is 71% of shoppers with disabilities will click away from your website if it's too difficult to use. And the majority will pay more money for the same item on a competitor website, if that site is more accessible. And then they tried to track what percentage of online customers are in this group. And this study, which was in 2016, pegged it at 10% of online shoppers in the UK.

**Amal Hussein:** Fascinating. I think maybe what we're trying to really suss out here is, are there metrics that could help drive this conversation \[29:17\] I think, business leaders caring, right? And it really sucks, because it kind of comes back to that earlier point you were making, Salma, around, "Hey, my C-suite is the one that actually doesn't care. It's not the developers", right? And so, I don't know. It's a tough nut to crack.

**Salma Alam-Naylor:** I'm hopeful that maybe in 30 to 50 years - it's a long time to wait - when the C-suites have diversified because they've all--

**Amal Hussein:** I thought you were going to say, "When they die." I was like, "Wow, Salma, that's morbid."

**Salma Alam-Naylor:** When they diversify... Because tech is becoming more and more a place where, like you said, these intersectional people are entering those late-stage career tech converts and things like that. The landscape, I think/I hope would be pretty different in 50 years. And so, maybe it will happen, because we'll have that representation at the top. We'll have disabled people on C-suites. We'll have people who find it difficult to use internet in traditional ways in positions of "power".

And I think the generation that's coming underneath us is very, very dedicated to that type of cause, I think, and things have to change. Surely, they have to change. I mean, look at what's happened to the internet since 2000. That's 20 years. And think what could happen in the next 20 years. Things are changing exponentially, right? And who knows what the future might bring as long as we keep talking about it, and educating the people that are coming after us about it, and showing people the way. We are in that middle transition point where - okay, the internet is a thing now. It's in our lives. It's never going. Everyone does everything on the internet now, especially because of what we've been through in the last two years. And so, we need to enable people.

Some of the things that have happened in the UK, actually, since getting of the pandemic, the way like -- there used to be shops that you'd go to where you'd have to ask, "Do you take contactless?" And now everyone takes contactless. And those societal changes, whether it's a pandemic or not - things happen, sometimes, when you least expect them. I do have high hopes. I hope that when I'm 75 and still doing JS Party podcasts, that I can reflect on this and say, "Yeah, we did a good job by not shutting up about it and advocating for the people who need better access to information on the web."

**Kevin Ball:** I also wonder how much of this is cyclical... Because when the web first was born, people were just using HTML. And HTML is extremely accessible, because it's very machine-readable. And then we started to try to build much more full-featured applications, and maneuver things with CSS into all sorts of dimensions, and have JavaScript that makes all these types of interactivity that was not naturally accessible, and didn't have accessibility baked in, in the way that native components and HTML did. And there was this rapid flowering, and everything was done in the new way, and everyone was doing their own thing, and all of these different things. And it feels like that is actually starting to calm down in some ways. There's still a lot going on in the JavaScript ecosystem, but there's also some consolidation.

UI frameworks are starting to solidify much more. Many of them are baking in accessibility much more. More and more, things around that interactivity, and JavaScript is kind of getting baked in at the browser level. And so, I wonder if we're actually at a place where some of the tooling is now catching up again, and going to make it much easier to be accessible by default. Because I think that's the other piece of this, is if your platform makes it easy to write accessible and hard to write not accessible, you're going to write accessible by default, because that's the shortest path to delivery, the same way right now, the shortest path to delivery is not baking in accessibility.

**Amal Hussein:** Yeah. And actually, K-Ball, I think I'm going to-- Salma, I want to riff off of that, because interestingly enough, Google's taken that strategy in terms of how Google wants to influence the web being a faster place... So instead of asking library authors, "Hey, please, reduce your bundle size. Hey, this, that", they have just taken the route of making the actual frameworks, like Next.js, tools that developers use at mass, better and faster, right? That's a shift in strategy, kind of like the one that K-Ball was speaking to... But I wanted to share that as an example of something that you have people that are on staff being paid by Google, that are also contributing to Next.js full time, in that ecosystem. So I'm just saying, if you can't beat them, sneak up behind them and beat them there...? I don't know. \[laughs\]

**Kevin Ball:** If you can't convince them to change, give them free tools that make the change easy for them.

**Amal Hussein:** Right. Right. Right. Exactly, right. There we go. Thank you. Much better said.

**Salma Alam-Naylor:** K-Ball, you make a really good point about things being cyclical. I've been doing a lot of work on the history of the JAMstack over the last couple of months, and how web development changed from 2011 to 2021. And one of the things we saw in 2011, 2010, these JavaScript frameworks were just being born. There was Backbone.js and AngularJS, and everyone was like, "Oh, JavaScript is a thing now, right? We can do everything. We can make things feel fast because, they're single-page applications."

**Amal Hussein:** All those thick clients.

**Salma Alam-Naylor:** ...yeah, that don't need to go back and forward from the server. "This is the future." And it's a little bit like -- you know how maybe you go to university or college, and you have mega parties for the first couple of months, and you go wild. You go right in deep and you write JavaScript, and JavaScript only, and your JavaScript creates your HTML React, JSX compiles to some kind of HTML with all this other stuff, and you go in deep... But then you start to mature and you start to realize, actually, maybe this isn't the answer. And so some of the newer more forward-looking frameworks now such as Astro and Svelte Kit, they are definitely more concerned with removing as much JavaScript as possible in the client, because we know the performance implications.

In the talk that I gave that Amal saw, I analyzed my Next.js application, my personal website. Again, I love Next.js, nothing against it. But I pre-render everything on my homepage, and yet I'm still getting 30 JavaScript files delivered to the client, when I should just get an HTML document. I did some comparisons between JavaScript framework with static HTML and CSS, and the performance implications from the size of the bundle you're getting delivered to the browser - going back to the apocalypse when things need to be as quick and as small as possible; it was astronomical, the difference. And yes, these frameworks can help architect large-scale front-end applications. They're not just websites anymore. They are products.

But I guess the question you can ask yourself is, do you really need that big JavaScript framework? How about, like K-Ball is saying, just write some HTML, just write some CSS. Make it lean if you don't need that. And I think that's what's really nice about Svelte kit because there's now this switch where you can just render HTML, and no JavaScript. And Astro is trying to get you as little JavaScript as possible, and it's zero by default.

So I think it's cyclical. We're coming back to the web of the '90, but we've learned so much. I think we had to go on that frat party journey to understand where the pitfalls were and to have a bit of fun along the way. And now we've come out of it, we're like, "Okay, I don't need to go wild anymore. Let's be sensible and let's be mature and let's grow up." And so, I think the web is shifting, it's growing up, it's maturing. And I think it is down to people, like developer advocates and people working on these frameworks, to try and push that and educate people in that direction, especially newer developers who are often encouraged by the industry to just jump straight in on the newest, latest and greatest JavaScript framework that delivers too much JavaScript to your browser. So it's a cumulative community effort, I think, is what's needed.

**Amal Hussein:** Yeah. I think that pressure's coming from Twitter. The Twitter-driven development; it's very real. This is an incredible segue into something that I want to get into next, which is really talking about, like, is JavaScript a liability, actually? So stay tuned for that, and more, in our next segment, with the lovely Salma. We'll be right back.

**Break:** \[38:19\]

**Amal Hussein:** So Salma, I'm loving this analogy of drinking too much, drinking too much JavaScript in this case, and learning like "Hey, we've got to take it easy. We've got to build up a tolerance." But also JavaScript, in large doses, can be a little dangerous, perhaps. And I think you're on the money with saying that we needed to feel that burn first-hand, or else we would never or have known, right? I love that. Don't you love that, K-Ball? I can see you smiling, you're just like, "Yup."

**Kevin Ball:** I'm just now playing with this JavaScript party, because we are at the JS Party.

**Salma Alam-Naylor:** We are.

**Amal Hussein:** We are.

**Kevin Ball:** And I feel like some episodes are like we're shooting shots, and some episodes it's like chilling with a beer, right?

**Amal Hussein:** True that.

**Kevin Ball:** And I'm personally much more of a chilling with a beer type of person, but--

**Amal Hussein:** I'm into shots. \[laughs\]

**Kevin Ball:** ...sometimes you need more JavaScript.

**Amal Hussein:** Not into shots in real life. Just shots of JavaScript. But yeah, no, I'm with you, K-Ball. So this is a super-powerful analogy, Salma. I'm going to use it in the future and I will attribute it to you. I love it. And so, we have two billion websites, and growing, on the internet, right? Internet's a really big place. Only 2% of that, by the way, is React, if even... So just FYI; just to wrap your head around the scale. And 95% those two billion websites, according to a stat that I found on your slides, use JavaScript... Which makes me think, "Wow, 5% of the web uses no JavaScript? That's cool." But also, it makes me think -- you're talking about the apocalypse, and internet connectivity, and you're talking about resilience, and I'm like, "JavaScript isn't resilient; JavaScript times out a lot." What was it -- you said the folks at BuzzFeed put together some stats on their website. Y'all are very familiar with BuzzFeed, creator and feeder of memes and internet culture. So they get a ton of hits per month, and from all kinds of devices, and their numbers were about 156 million requests for JavaScript files per year timeout. That averaged just to about 13 million failed requests a month, right? So that could be somebody's internet cut-off, that could be just a bit flip, if something's going on with the CDN... Lots of reasons. But that's a lot of JavaScript failing. And so, how do we plan for that resilience? Because it seems like the answer is HTML, but I don't see anybody really planning for HTML. So I'm just trying to -- obviously, frameworks like Astro are pushing the needle, but that's very bleeding edge, right? So how do we plan for this resilience?

**Salma Alam-Naylor:** I think it's a lot about how developers are allowed to explore and educate and develop themselves within their day jobs. I'm a very lucky person in that I get to play with tech as my day job. I don't have to build large-scale products for clients who are paying me money. And so I get to see the trade-offs, I get to experiment, I get to go down these rabbit holes...

Today on my Twitch stream I was looking at front-loading, and I went down a huge rabbit hole about how fonts apparently optimized in Next.js. And I don't even think they are, but they are somewhat... But they're not, really. Fonts are a whole other podcast. So I think if developers are allowed to educate themselves and go on these journeys themselves, a bit like the JavaScript frat party journey, I think they'll be able to make more informed decisions about tech choices in their companies.

A lot of the time I think you see people say, "Oh, yeah, we'll just use React. I'll just use Next. Oh, we'll just use Angular. I'll just use this", because that's what everyone else has used, so that's what they know how to use. But actually, is there something else? Maybe at a company that's building a random product, they could actually build their own framework, which solves some of these problems already, and you don't write your own framework.

**Amal Hussein:** It's going to be called Best.js, a.k.a. Not the Best JS, actually. Please use open source tools when and if possible, kids...

**Salma Alam-Naylor:** It's a running joke, isn't it, that - how many JavaScript frameworks have been released this second, because they're a lot. But people are experimenting, which is great. But I think, again, if you go back to real-world developers, real-world people who are working in tech, there's patterns that you fall into in teams, because again, if there's no time for accessibility in the budget, there's definitely no time to educate yourself on, actually, the future of the web, and whether you should be using that framework, or how you can reduce the loading time by using less JavaScript and being a little bit more innovative. There's no time, really, for innovation in the general tech industry in most people's day-to-day jobs, because there's no space, because time is money, and money makes the world go round.

**Amal Hussein:** Money is time. Yeah, I hear you. Well, you know what song I'm playing in my head right now? I'm playing, "I got 99 problems, and web fonts are one." \[laughs\] It seems like -- oh my God, Salma, so many things...

**Salma Alam-Naylor:** Where fonts are probably about 20 of those problems, actually.

**Amal Hussein:** Right. And speaking of problems 0 so you talk about there isn't enough time in the day, but there are some really low-hanging offenses on the internet, aren't there? You shared some of the top 10 common errors, and I couldn't believe how simple they were. It might take you a total of 30 minutes to fix most of these on your own personal sites. So do you want to just run through them real quick for us, Salma?

**Salma Alam-Naylor:** So the quick ones to fix and to always bear in mind - and I guess, this is where the frameworks have to help us - is alternative texts on images, right? The amount of times you see blank alternative text or no alt attribute... This is the attribute that reads out the description of the image for people who use screen readers. And also, sometimes it's absolutely bobbins alternative text. Picture of a chair, "Describe that chair to me, please." I love writing a really colorful alternative text for people... Especially on Twitter when I'm adding pictures, I write sentences and sentences to describe every single part of the image. It's like little Easter eggs for people who are using screen readers. I think it's a really fun thing to do.

Missing form input labels. This one, missing form input labels, plus low contrast text, I think is a symptom of the web is designed by designers today. And designers also don't necessarily have the time-space/budget to educate themselves on actually how a webpage should be made up. And then couple that with a fresh developer who's working with a new JavaScript framework, who doesn't have time to be mentored; they've just got to get these features out. These designers and developers need to work together to create beautiful functional-- it should be function over form.

**Amal Hussein:** No pun intended.

**Salma Alam-Naylor:** No pun intended... And make sure that designers also have that knowledge about how a page should be machine-readable, right? I think maybe designers should go on HTML courses and have a look, actually, at how the web-- I mean, there's lots of design trends on the web, isn't there? And I think that can overtake stuff, because people want stuff to look new and flashy and pretty... But these low contrast things and missing form labels...

Another one - empty links. There's this big trend, obviously, of having social icons on your webpages as SVGs or something, wrapped in links, to your social profiles. But if it's just an SVG with no context, with no ARIA role and description or title or anything, and the link doesn't have a title, it really is completely like looking at nothing if you're using a screen reader. There's no context, there's no anything. And again, empty buttons. Empty buttons. Because the text is added with CSS or some other icon, SVG, or something. How am I meant to add this to my basket if it's just got an icon on with no description or title or any contextual thing? And again, very symptomatic of this whole single-page application - you click a button, JavaScript makes all this stuff happen and you add something to your basket. If that was not in a JavaScript framework and you had to use a proper server-side redirect link to add something to your basket with query parameters, that would actually be slightly better without the JavaScript framework, even if you didn't really pay that much more attention to accessibility. Without JavaScript, it would've been better already.

**Amal Hussein:** Yeah. It would've been more reproducible.

**Salma Alam-Naylor:** Yeah.

**Amal Hussein:** And I think people forget-- some of the stuff you were sharing on your slides, people doing really clever stuff with CSS and lots of dynamic content, stuff that shouldn't be dynamic... It's almost like we decided to do everything with JavaScript as opposed to... You know, think about the web in these three layers, where it's like the DOM for structure, JavaScript for interactivity, and CSS for design. We've kind of gone full hay on the structure being created by JavaScript, right? Kind of a crazy place to be.

**Salma Alam-Naylor:** I mean, CSS is created with JavaScript these days, isn't it? You have CSS-in-JS everywhere. I've tried a lot of these, especially getting to grips with something like Tailwind, where to add a tech shadow, I have to write JavaScript inside the configuration. And it's just like "Why? Why? Just let me--"

**Amal Hussein:** Yeah, yeah, yeah. No, honestly, I think it's just -- ultimately, you have a hammer, you see everything as a nail, right? And I think for us, as engineers that write primarily with JavaScript, JavaScript is our hammer. And I think JavaScript being the hammer, this is the result, right? And this is the frat party hangover that we're, hopefully, trying to reel ourselves back from.

So that's really interesting. We'll share a link to your slides where everybody can see some of these offenses... But low contrast, missing all text, missing input from labels, empty links, missing document language attributes, empty buttons... These are on a massive number of websites on the internet.

**Salma Alam-Naylor:** An interesting fact is is that when WebAIM surveyed one million homepages for accessibility in 2021, there's an average of 51.4 errors per page, across one million homepages. And that's just the homepage. That's just the landing page. It's not even the functional parts of the website. 51.4 errors on one single page.

**Amal Hussein:** Yeah.

**Kevin Ball:** Well, so let's get a little tactical here... Because we've done a lot of, "Here's the problem. There's a big problem", and there is a big problem, right? And I think there's many places this comes from; that over-dependence on JavaScript... All of engineering is trade-offs, right? There are some beautiful things you get out of having only having to worry about a single framework that's all interconnected and can all be tied together, but there are some drawbacks, and we've been highlighting those.

But let's talk a little bit about what are some just tactical things people can do to start eating away at this. And one thing I want to put out there is - we already have tools for catching these obvious errors, right? It's really easy to add some basic linting rules in your project. You probably are -- if you're writing a bunch of JavaScript, I hope you already have a JavaScript linter in there; you can add a linter that checks, "Hey, do all of my images have all text? Do all of my form inputs have labels?"

And those are things that impact accessibility, but the label one - that impacts everyone. Every time I go to a site and I'm like, "Oh, yeah, auto-fill my information", and it goes blehh and chokes on it and stuff isn't there, I'm like, "Oh, you are not labeling your form, so all of my auto-fill is not working. So I'm going to bounce. This is 2021. I'm not going to spend five minutes filling out your form. I've filled that out before. My browser takes care of that if you do your work right."

**Salma Alam-Naylor:** And I think there are a myriad tools out there that I use throughout the development process. And I think a lot of the time people will look at accessibility when the thing is finished. But I think it's something to bear in mind as you develop "Every section of code you write, let's check it."

I use axe DevTools, which is a Chromium extension. It catches some great, great things; it looks at color contrast, it looks at the semantic HTML. I use WAVE Evaluation Tool, which does a very similar thing, but also which focuses very much on ARIA as well, and how you structure your page semantically. Lighthouse tools give you some accessibility tips... And a color contrast checker, I use as well...

I think one of the most important things to remember in this journey is check often, with a variety of tools. Because not all tools will check everything, and you have to use your judgment sometimes. Because, for example, there's an accessibility error on my homepage where I have a hidden skip link in the header for screen reader users, but it doesn't show for people who are looking at it. That's on purpose, because it's for the semanticness of the page, but my accessibility tools will catch that.

So you have to understand, actually, what you're trying to achieve. Just like you commit little and often, check accessibility little and often, so it doesn't become this huge mammoth problem when you are about to release your product. Bake it in from the beginning and factor into your user stories, factor into your testing and your QA. Then it'll just be part of your life and won't even be a big thing anymore.

**Amal Hussein:** Yeah. I love that. I love this accessibility-as-you-go mindset, because I can say, I don't always have that. For me, it is this thing that's like pre-production. Before I release, let's do a bunch of checks and then change all of our code, because we messed it up so bad, right? Very common mistake and pitfall, everyone. And this is where I think some of that onus needs to come from us, where we need to shift our mental model about brushing our teeth every day versus once a month, right? A little accessibility every day goes a long way.

**Salma Alam-Naylor:** It's the 1% thing. You talk about if you get 1% better every day or something like that, then you end up, over time, like a million percent better. I mean, the maths are wrong, but that kind of thing - just little and often.

**Amal Hussein:** Yeah.

**Kevin Ball:** But I think those tools and the systems are really important. I've been paying attention to accessibility for years now, and I am not great, honestly. It's not something that I continuously do all the time, except to the extent that I've baked it into my systems and tools. And so, having the lynching rules, having the "every check-in must include an axe report", or whatever the set of things are, but make it part of the system. As long as it's individual developer responsibility, it's never going to happen.

**Salma Alam-Naylor:** Very true.

**Amal Hussein:** Yeah. I would say one more thing to maybe add to this list of things to do, is consider having a design system, and if you're a small team, just a centralized place for all of your components... Because what you can do then is-- you know, with the centralized area, it's one place to fix stuff. There's no like "50 files change in this PR", right? So if you can kind of centralize that as much as possible, any improvements that you make to ARIA, as well as including ARIA as part of the contract to use the components that you're creating... Like, "Hey, I'm going to make a button component. I'm going to make sure that this button is never going to be actually empty. I'm going to make sure that the content for this button isn't created by JavaScript", whatever it is. So all of those things are things that you can try to centralize and export, to make your life easy.

So Salma, to make sure that we have some time to talk about JAMstack, can you tell us about what is JAMstack? I know you're a huge advocate of it. And just, can you explain to our guests why it's one path for maybe more accessible web applications?

**Salma Alam-Naylor:** So the biggest thing with JAMstack in terms of accessibility, really, is the speed that you can get something from X to Y, because of this whole CDNs at the edge architecture. So for those of you who don't really know much about the JAMstack, it started in 2015. JAM stood for JavaScript APIs and Markup. It was after the whole Angular, Backbone.js, React thing started happening. It came about as a little ecosystem of you built stuff with JavaScript, that connected to APIs and got data from places, and compiled down to prerenders, static HTML at build time and served from a CDN. And the CDN thing is the key here, and how that has grown.

It's supposed to be fast because it's meant to be static stuff, served from CDNs all around the world, closest to where you are, regardless. So you're not waiting seconds and seconds and seconds to contact a server on the west coast if you are in Germany, that kind of thing. And so, that's where the speed aspect and the accessibility aspect around the world -- websites on the JAMstack are inherently accessible around the world, because of that architecture on the edge. And it was obviously meant to be super-speedy sites, because you've compiled everything down to just HTML. There's no JavaScript delivered, it's just static.

The first static site generator was Jekyll. You could enhance that with client-side JavaScript, but the whole premise was just deliver HTML to your browser and CSS, and have a great time. Obviously, now with how JAMstack has now expanded and the ecosystem is rich, there's now over 300 static site generators in the JAMstack ecosystem. Everyone's trying something different, with all these new bleeding edge ones coming out as well to try and solve the JavaScript problem. But basically, people saw the JAMstack as a way to get stuff out quickly, get it to people quickly using what we knew JavaScript could do at the time. And now there's serverless, so you can create your own APIs in your frontend frameworks, you can do all sorts of fancy stuff, and it can scale.

I was looking at the results of the 2021 JAMstack Community Survey, and in the top five types of sites now on the JAMstack, there's B2B and e-commerce. So e-commerce is starting to thrive on the JAMstack because of its capabilities. But again, we come to this whole problem - do you really need this much JavaScript to create an e-commerce site, really? And are you using the JAMstack? And why are you using the JAMstack for e-commerce? Is it just because it's cool? What are your reasonings--

**Amal Hussein:** Versus server-side rendered?

**Salma Alam-Naylor:** Yeah, exactly. And what's great now is, obviously, you can get server-side rendering on the JAMstack as well. You can get everything on the JAMstack. You can get all sorts of rendering.

**Amal Hussein:** We're going to have to come back and do another show on JAMstack. No, really, because I think the landscape has really changed since I've taken a look at, "What is this JAMstack thing people are going nuts about?", right? I think JAMstack has grown to be a bigger bubble, and I'm eager to maybe try to break that down a little bit, but that's really fascinating. And so, how do the Google core web vitals play into JAMstack applications? I guess, do you want to maybe just share what some of the core Google web vitals are?

**Salma Alam-Naylor:** So it's really interesting... These core web vitals have been around for quite a little while, but since June of 2021, they're actually now actively used to rank sites in Google search results. So this is the whole gamification thing. So if your site doesn't get good marks in these core web vitals, you'll be penalized on the search pages, and we know no one really goes past page one.

So the core web vitals measure loading performance with large contentful paint, and if your site does not have the largest contentful paint and load most of it in within 2.5 seconds, that's when you'll get penalized. So that's still a long time to wait in this day and age, when we need stuff now, now, now. And in the apocalypse, 2.5 seconds is still actually quite a long time.

There's the first input delay, which measures interactivity, and pages should have an FID of 100 milliseconds or less that can be usable. Have you ever gone to a website where you're trying to click in a form field, or you're trying to do something like click a button, and the JavaScript hasn't initiated that button click, and it's like, "Arrgh, what's going on?", and then you bounce right off?

**Amal Hussein:** Yeah. We call it the uncanny valley. That's kind of the popular term, I think. It's because, yeah, it looks like it works, but it doesn't. Not yet. Give it a few minutes, or a few seconds.

**Salma Alam-Naylor:** 100 milliseconds. It's not very long.

**Amal Hussein:** Not for my brain, Salma. That's like--

**Salma Alam-Naylor:** Yeah.

**Amal Hussein:** No, I'm just kidding.

**Salma Alam-Naylor:** And the third one, which is the one I talk about the most, is a cumulative layout shift, which measures visual stability. So have you ever, again, gone to a website where things start loading and, "Oh, I want to click that button. But oh, wait", as I go to click the button, some nonsense loads in, slots in via JavaScript, and I click that nonsense button instead, and oh, I've charged myself $100 because I clicked the wrong thing, because of CLS. Your CLS score should be less than 0.1. I don't know entirely how it's measured in terms of pixels and moving things on the page, but it's there all the time. It's even in my password manager on my phone. When I open the passwords up, I go to click the top password. But most of the time that I do, there's another button that moves...

**Kevin Ball:** It moves. Yes. Oh, my gosh, it's annoying.

**Salma Alam-Naylor:** Are you on Dashlane as well?

**Kevin Ball:** No.

**Salma Alam-Naylor:** Oh, interesting.

**Kevin Ball:** I use 1Password, but I've hit the same thing where--

**Salma Alam-Naylor:** Interesting.

**Kevin Ball:** ...I'm ready to click, and it's like, "Uh-ooh!"

**Amal Hussein:** I've had the same issue with 1Password and every password manager.

**Salma Alam-Naylor:** Yeah. It's just-- so, I have to wait. I have to wait. I've trained myself to wait and it's difficult.

**Amal Hussein:** It's a forms thing.

**Salma Alam-Naylor:** Yeah. So largest contentful paint, first input delay, and cumulative layout shift - those three things together, again, another way to measure performance, but also accessibility. Cumulative layout shift is an accessibility problem, especially for people who aren't used to using the internet and aren't used to knowing what CLS is, especially older people who are starting to get into the internet, and even younger people. Think of the kids who are starting to use the internet, and they click a button accidentally and they cost their parents hundreds of dollars, or something like that, you know?

**Amal Hussein:** Yeah.

**Salma Alam-Naylor:** There's that kind of accessibility as well.

**Kevin Ball:** If they can click anything on the page and cost $100, they're going to click it. It doesn't matter if it's shifting or not.

**Amal Hussein:** well, I was just thinking -- think about that 11-year-old that's used a browser for the first time. They've had iPhone since they were two, but this is their first time leaving an app where everything isn't preloaded with the binary that you download. You know what I mean?

**Kevin Ball:** After virtual school, they don't exist.

**Amal Hussein:** No, I'm just joking. Yeah, I know what you mean. Yeah. Pre-COVID, I would say, good chance that maybe your 11-year-old has been on the internet for seven years, but hasn't actually ever used a browser, right? It's crazy how everybody is in the native world in younger generations... But anyways.

**Salma Alam-Naylor:** So I guess this is the crossover, the Venn diagram happens with accessibility and performance. Core web vitals are measuring a bottom line performance, but there are accessibility concerns that come part and parcel with that crossover in terms of who is using the page and how they are able to use it because of how you build it.

**Amal Hussein:** Yeah. No, that's awesome. I mean, this has been a really insightful and punny talk, or conversation, I should say. I learned a lot and-- I don't know, how about you, K-Ball?

**Kevin Ball:** Oh, yeah. Plus it's fun.

**Amal Hussein:** Very fun.

**Kevin Ball:** We've got some great possible show titles coming, around the apocalypse and frat parties and other things. We'll see what-- I think this metaphor of JavaScript as a frat party versus hanging over beers, versus whatever, I think that's going to stick around. I don't know.

**Amal Hussein:** I think so, too. You invented it. It was invented here.

**Kevin Ball:** It is the JS Party, so...

**Salma Alam-Naylor:** Yeah, I'm an innovator. You heard it first here, people...

**Amal Hussein:** So Salma, where can people find you online? How can they connect with you?

**Salma Alam-Naylor:** You can find me as White Panther everywhere; whitep4nth3r if you use a screen reader. I have really tried to read out alternative things for screen readers. I haven't cracked that yet, because I really want people to know me as White Panther rather than silly numbers, but that's-- it was a joke name, and I'm stuck with it. You can find me on Twitter, GitHub, whitep4nth3r.com, and Twitch and YouTube, all over the internet.

**Amal Hussein:** And you're a streamer, right? You're on the live internet.

**Salma Alam-Naylor:** I stream on Twitch twice a week. I do. I'm trying to work on the YouTubes a bit more, but it's time-consuming. I wish I could find anyone out there, a video editor, who can tell a story with tech... Because live streams are very hard to whittle down to a sensible time when you need to tell a story and show progress if you haven't built it yourself. It's a very, very, very niche skill. And if someone can have this skill, they will make a lot of money, because they can sell services very, very well.

**Amal Hussein:** Yeah. I second that. So Salma, again, it's been an absolute pleasure having you on today. Thank you for educating us and making us think and making us laugh. It's been a pleasure. So I guess, I'm going to leave you with some closing thoughts... Some of this is from Salma's mouth directly. I'm going to quote you. "In the apocalypse, time to interactive is the difference between life and death." End quote. Salma. And for me, my quote is, "Who needs accessible websites, kids? Trick question. Everybody." It's everyone. Everyone needs accessible websites. So be inclusive, everyone. Have a phenomenal Thanksgiving or holiday season or whatever you celebrate, and we'll catch you all next week.

**Salma Alam-Naylor:** Thank you.

**Amal Hussein:** Buh-bye.
