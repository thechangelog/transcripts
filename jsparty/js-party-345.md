**Jerod Santo:** Hello party people. It's Jerod, your internet friend, and today I have something special for you, a one-on-one, with myself, of course, and with Tom Occhino, who is the chief product officer at Vercel. Tom, welcome to JS Party.

**Tom Occhino:** Thank you so much, Jerod. Really good to be here. I appreciate you having me on the show.

**Jerod Santo:** You bet. I had to check notes; not because I didn't know your position, but because you recently changed positions, right? You were previously VP of engineering frameworks, and now you're chief product officer. So I assume that's a promotion, right?

**Tom Occhino:** Yeah, sort of. When I ultimately ended up deciding to join, we thought the right role is probably in engineering, probably leadership. We've already got a great VP of engineering, but maybe we could have two sides of engineering.

**Jerod Santo:** Like a framework side...

**Tom Occhino:** Infrastructure, and frameworks, and platform. And shortly after I joined, it very quickly became clear that the opportunity was going to be to help engineering, product, design and a couple of other functions coordinate, and sort of orchestrating the product development process, and some other things. So we can talk more about that.

**Jerod Santo:** Refining, refining.

**Tom Occhino:** Yeah.

**Jerod Santo:** Well, you go way back with React...
**Tom Occhino:** All the way to the beginning, yeah.

**Jerod Santo:** I actually found you way back... So on another show we do called The Changelog we did an episode about React, way back; not at the beginning... You predated me. But it was 2015, and I actually found you in my email history, because you were almost on that show. It ended up being Christopher Chedeau and Spencer Ahrens.

**Tom Occhino:** Nice.

**Jerod Santo:** But your name was on the list of people that were going to be on that show... So you've been doing the React thing for a very long time.

**Tom Occhino:** Yeah. I like to say that anybody you can come up with who was associated with React, or React Native, or JavaScript infrastructure at the beginning, they were sort of like on my team or in my org at Facebook. So yeah, Chedeau - I worked with him for a long time. Spencer Ahrens - great guy. But yeah, all the way back to the very beginning. Jordan Walk ended up joining my team, and showing me this thing that he had created... We gave it five minutes and then we turned it into React.

**Jerod Santo:** That sounds so easy when you say it like that. What were your initial thoughts? Were you impressed? Were you scared? Were you excited?

**Tom Occhino:** My initial thoughts, very honestly, were "Oh gosh, Jordan. Please go away. We have too many JavaScript frameworks. We certainly don't need another one." But I think one of the reasons Jordan came to talk to me was because the part of the company that I was part of, which was called Product Infrastructure - this was the type of thing we did. We built tools to enable developers to be more efficient. So it's kind of in my nature. I'm a technologist. I'm curious. I'm like "Okay, I don't have time for this, but I want to learn more."

And once he started showing it to me, and once I saw the potential here, I started taking it much more seriously than just like a little side project. So yeah, my initial thoughts were like "Please go away." And then after a couple of days, I was like "Wait a minute, there's something here."

**Jerod Santo:** Was that then something that you had to advocate for inside of Facebook? Because lots of engineering -- engineering culture... Was it a bottom-up kind of a thing? Was it a middle-out? Was it a top-down? How did it actually get adopted?

**Tom Occhino:** Yeah, I think product direction at Facebook was a combination of top-down and bottom-up. But certainly, engineering and technology choices were very much bottoms-up. And so it absolutely was something I had to advocate for.

And I think the way that Jordan actually made his way to me, he actually was in the ads org, which was they were building some really cool - especially for the time, some really sophisticated client-side apps. And when he came to me, he was like "Look, I talked to everybody in the ads org and they're not interested. We have too much to do. They don't have time for a Skunk Works new framework. What do you think?" So actually, by the time he got into me, he was kind of looking for an advocate internally.

And yeah, we found on the product infrastructure team a number of folks that would kick the tires and test it out and sort of validate that there was something important here. And then I became the primary advocate internally for not just React, but also eventually open sourcing it, which almost didn't happen.

**Jerod Santo:** Why not?

**Tom Occhino:** Yeah, it's a good question. I think there were as many folks internally that thought that open sourcing something was a bad idea, as folks who were very experienced with, familiar with, passionate about open source that thought it was a good idea. And so the reality was -- it wasn't just like "Oh, we built a thing. It's good. Now we open source it, right?" It was like "Wait, what are you talking about?"
\[08:17\] We had some folks from Microsoft who sort of cut their teeth under Bill Gates. Bill Gates, early days, did not like open source... And we had a number of folks who actually thought that "Well, wait a minute... It does seem like we have something here. Shouldn't we consider whether or not this is a strategic advantage for us?"

**Jerod Santo:** For sure.

**Tom Occhino:** But luckily, counterbalancing that, we had a number of people who were very passionate about open source, myself included... And our CTO. Ultimately, when it came back to it, the CTO was very supportive, and ended up through a series of conversations helping us overrule the kind of vocal minority that were anti open source. And then I think this was the first open source project of the modern Facebook open source era. And it paved the way for lots and lots of other projects, including, for example, PyTorch, and some other projects that came afterwards.

**Jerod Santo:** Yeah, that episode we did was 2015, and we were talking GraphQL, we were talking React Native, of course, which these are all on the tail of React... But even outside of web dev, like you said, inside of Facebook, there was epic projects like PyTorch, which have really sort of defined an industry or an ecosystem in the open source world as well, in their own right.

Looking back now - because I think the first initial release was 2013, but probably it was announced at... Was it JSConf in 2012...?

**Tom Occhino:** Yeah. JSConf US 2013. But we definitely were working on it in earnest in 2012.

**Jerod Santo:** Yeah. And then from my perspective, the initial reaction was not overwhelmingly positive, because of JSX specifically. We were kind of like "What is this thing?"

**Tom Occhino:** That was really generous. You said the initial reaction was not overly positive. The initial reaction was terrible. People hated it. Actually, I think this isn't on the audience... This was on us. I think the story that we told worked pretty well for an internal audience that knew where we came from... And what came before this actually led to this. And if you're looking internally, you're like "Oh, yeah, this is the evolution of that other thing that we have." But externally, I think the community was solving a bunch of different problems. They were talking about more efficient two-way data binding, they were talking about constructs like object.observe being programming language features that should be in JS, and we were talking about "Oh, you don't need any of that." So we came up and were like "Look at these Facebook folks. They have no idea what they're talking about. The rest of the industry's over here and Facebook's doing this weird thing." And the famous quote was "Look at you guys, challenging established best practices."

And it wasn't until, actually, the next conference, JSConf EU, later that same year, where Pete Hunt actually embraced that mantra. He's like "Actually, that is what we're doing. We are challenging established best practices, because we think they're not good, or because we think they could be better." Yeah, the initial reception was not great.

**Jerod Santo:** What changed the tide? How did it start to take over then?

**Tom Occhino:** Yeah, the same thing that changed my perception, which was giving it five minutes and playing with it, started to happen in the community. Very, very slowly at first, and then all at once. I think there was an engineer at -- I think it was Code Academy; or Khan Academy, apologies. Sophie Alpert, who had just started tinkering with it. And we had set up IRC channels so that people could tinker with it and give us feedback and play with it. It was very early.

There was almost nobody using it yet. Certainly nobody using it at scale or in production. But Sophie Alpert not only started using it, but also started suggesting things to make it more approachable for folks, and to make it better, and eventually, became our first external contributor. So at that point, all of the contributors were internal. But Sophie became the first external contributor, and started actually making it better, and making it more approachable, and started answering questions on Stack Overflow, and getting involved and turning it into a thing that wasn't just a tool for internal Facebook teams to use.

\[12:19\] So I would say very slowly over the course of the next six months it started to pick up a little bit of traction, and then sometime during 2014 it started to become real. And that's when Christopher Chedeau on the team was like "Tomo, I'm seeing 25 tweets a day about React." Can you imagine? It was crazy. We're like "Whoa, who are all these people that are using this thing?" He's like "Maybe we should start organizing a conference." And it was that organic and that bottoms-up.

And one of the things I really take pride in is the fact that at no point in the history of React has anyone who worked on React told you "Behold! We've solved the internet. We've done something amazing. You need to try it." There has never been any amount of sort of pushing React on anyone. It's always been "Hey, here's something that solves a set of problems for us that we're pretty excited about. Give it a try. If you like it too, let's talk. Let's collaborate. If not, no sweat. There's lots of great solutions out there, this is just one of many."
And so I really love that the whole time our narrative was this not sort of in-your-face, you-must-try-it, that is too prevalent today. And that's what I think led to this slow burn of adoption. This sort of everybody giving it five minutes at a time and saying "Wow, there's something important here."

**Jerod Santo:** Right. There's an interesting relationship between that organic growth with React, and yet Facebook's large microphone. And not just the microphone, but just the clout that you guys get by being engineering at scale. And oftentimes with open source projects and small shops or indie devs we look to a Facebook or a Google or a Microsoft, or whoever, and say "Well, this is good because it's good for them." And I think that's true sometimes, and I think in the case of React and in lots of scenarios it is true, but it's also false sometimes. And I wonder how you see that from your perspective, because just because it's from Facebook doesn't mean it's good, and yet there's people that will think that. And sometimes that can help grow adoption as well.

**Tom Occhino:** Yeah, I think the perception really helps, that "Okay, this is battle-tested. They're using it in production. If it's good enough for them, it's good enough for me." But the counter to that is "I don't really have their scale. I don't really have their problems of massive engineering teams. It's just me and a partner, and we're just building this thing, and who knows if it'll even be anything." So one of the things that I think differentiated React from potentially other solutions was this idea that we always cared about the zero to one case as much as we cared about the 10,000-foot massive team, massive codebase situation. And in fact, over time, React's API surface area actually tried to simplify itself to lower the barrier entry with every release; lower the barrier to entry, rather than saying "Oh, here's all these new things we created for Facebook scale."

So I think we've ended up striking the right balance between you get the credibility and the confidence knowing that this is running in production at scale for a behemoth like Facebook, but you also get that very low barrier to entry, easy to get started etc. And those two things, I think, combined are what made it start to take off.

**Jerod Santo:** So the rest is history, of course... There's a React.js doc, isn't there, at this point? The Honeypot folks...

**Tom Occhino:** There is a Honeypot documentary, very well done by them. After I left Facebook, that's kind of how I got pulled back into this world.

**Jerod Santo:** Were you on that? I assume you're on there.

**Tom Occhino:** \[15:59\] I am on that, and we go into a bit more detail, and there's some examples and some fun anecdotes about the open source release, and what was happening internally... Definitely check that out if you haven't.

**Jerod Santo:** Yeah. So if you want the deep dive on the history of React, we love those Honeypot documentaries, for no other reason than that they're good and they talk about things that interest me. For a long time here at Changelog we wanted to do those kind of film documentaries, and we just never had the skill set or the money or the drive to actually get it done... But we wanted something like that to exist. We're like "Someone should tell stories with video, of Node, of React, of these things." And I'm just happy that somebody did it, because now I just get to watch them when they come out.

**Tom Occhino:** Same.

**Jerod Santo:** Yeah, super-cool.

**Break**: \[16:49\]

**Jerod Santo:** So what brought you then -- you were at Facebook for a long time, I think 12 years if I read your LinkedIn correctly, maybe more...

**Tom Occhino:** Yeah.

**Jerod Santo:** What brought you to Vercel then?

**Tom Occhino:** Yeah, so actually during COVID, when I ultimately decided to leave Facebook, I got my org to a really good place. I'd hired two senior leaders to lead the two sides of the org, the React side and the web core, web platform side... And I was feeling -- during COVID I was very isolated, and I was like "Okay, it's been a long run. We've had a lot of fun. I feel like we've gotten to a good place. Now I can take a break." And I didn't really actually -- when I left, it was very good terms. I still talk to my old team often. But I didn't really have any intention of doing anything else. I wasn't ready to go back to work, I wasn't going to start my own thing. I just wanted to kind of explore and tinker and build things.

I did that for a little while, and I kind of started to get a little bit antsy. I was like "It turns out I have a lot of energy left. I have some gas left in the tank" after about six months. But the other thing that happened is actually because of the filming of the React documentary, I got to like connect again with these old friends and former colleagues.

**Jerod Santo:** That's cool.

**Tom Occhino:** One of those people was Sebastian Markbåge. He was living in New York at the same time, and we got to talking about this sort of like next wave, and "Here's the next innovation that's coming." And he's telling me about Next.js, and he was at Vercel. And he's like "You know what? Actually, you should join us." So I connected with the CEO, Guillermo Rauch, who I've known actually since 2006. He and I actually were both core contributors to the MooTools JavaScript library. So we go way back.

**Jerod Santo:** You're a core contributor to MooTools?

**Tom Occhino:** Yeah, yeah. One of the first. Yeah, we go way back.

**Jerod Santo:** Wow. That gets you some serious street cred with me.

**Tom Occhino:** Yeah, I think I'm actually the one that implemented Flatten, and ruined JavaScript for the rest of the world. So I'm reluctant to even talk about it.

**Jerod Santo:** \[laughs\]

**Tom Occhino:** So yeah, I had known Guillermo and Sebastian and some others for a long time, and so I started talking about "What is it that Vercel's actually trying to do? Is this just like monetizing an open source library?" That seems ill-advised. And it wasn't. It's actually significantly more ambitious. And I just kind of got hooked.

So we started talking about -- and we kind of opened with this, but we started talking about "Alright, if I was to join, what's the right role? What's the right shape?" And in true Sheryl Sandberg fashion, I was like "Look, this is a rocket ship.

I'll take whatever seat, and we'll figure it out in post." And yeah, the rest is kind of history. I think it took about -- I was fun-employed between Facebook and Vercel for about 18 months. Maybe not even. But yeah, then I was ready to get back to work. And I have an amazing team here, and I really love what we're doing.

**Jerod Santo:** You're too young to just ride off into the sunset. Don't you think? That gets boring.

**Tom Occhino:** I'm pretty gray, but yeah, no, I agree. I have too much energy left.

**Jerod Santo:** \[laughs\] Unless you can find something completely different that you absolutely love, and you can do that. You have to sink yourself into something, otherwise... A lot of people, when they retire, if they don't have something else, then honestly they just die pretty quickly thereafter. I think we have to be active in thinking and striving in our lives to have a reason to keep going.

**Tom Occhino:** I completely agree.

**Jerod Santo:** So that is very cool. Next.js is fascinating to me. A lot of lines draw back to React, of course, in addition to the tech.

Obviously, it's a React framework, so it's built on the same principles. But as a strategic move by Vercel, it's a similar thing as React, but in two completely different scenarios. For Facebook, it was open sourcing. Maybe it gets Facebook some engineering benefits of making - I mean, it certainly did - them more attractive to engineers.

\[24:09\] People are pre-trained on your technology when they come in the door. That's pretty nice. So there's a lot of hiring benefits for Facebook, and maybe some goodwill out there. But for Vercel, this is really great marketing, basically. This is a really smart way of just getting people onto your platform, is like build a framework that they're going to use.

**Tom Occhino:** Yeah, absolutely. I think there's a lot of top of funnel... But the other thing that I really like here is - and I want to get this point right. Vercel's reached a point now where we don't build Next.js to make money. We make money with this managed infrastructure business in order to keep building Next.js. So it's nuanced, but it's actually really important. A lot of people think "Oh, monetizing open source can never work at scale long-term, and so you have to find a more durable, more sustainable way to fund open source development." And the most durable, sustainable way we've found to fund open source development is to be really passionate about open source. And the sort of - I don't know, rising tide lifts all boats, associated with the innovation that you can kind of give back.

So the thing that I really like about Next.js is that obviously the way that Facebook uses React, they have to fill in a lot of other gaps and answer a lot of questions. How do you do data fetching? How do you do routing? How do you do server rendering? And all those things end up being very tied to Facebook's infrastructure, and kind of bespoke. But if you want to use the full power of React outside of Facebook, you kind of do need a framework. And I think even at the most recent React Conf, the core team has kind of admitted this. It's like "Look, the best way to use React is with a React framework." And it fills in a lot of those gaps for you.

The thing that I really love about Next.js is we can actually build the framework and the infrastructure in tandem. It turns out we have opinions about software architecture. And at the end of the day, we're trying to enable this sort of pretty great developer experience that leads to an exceptional user experience. And performance is paramount as part of that.

And when we build these two things in tandem, it turns out you get the same benefits that Facebook gets from building their own frameworks, and building their own infrastructure. Or that Apple gets from building their own software and their own hardware.

So we kind of innovate in tandem, and we create something that is extremely cohesive. If you author your code this way, we can automatically deploy optimized infrastructure that way, and then we're not done. Once we get it working and we've proven that we have this highly cohesive end-to-end stack, now we can actually generalize. Now we can codify the seams between the frontend and the backend and say, "Okay, we've created something that's highly cohesive, but we've given it loose coupling." So you can take Next.js and you can run it on your own. You can self-host it, you can run it on other providers... Or you can take Vercel's managed infrastructure and you can target the same build output API with your framework, and you can run it on Vercel's managed infrastructure.

So this kind of framework-defined infrastructure thing I think is something that used to only be big tech. Google had their version of this, Facebook has their version of this, Amazon has their version of this... But now we have that for the rest of the world. So yeah, the thing I love most about this JavaScript framework, Next.js, is that it influences the infrastructure that gets provisioned on behalf of your application.

**Jerod Santo:** Right. A lot of devs have found that deploying Next.js to non-Vercel things is not straightforward. Now maybe that story has changed and I'm outdated, but I'm curious, from your standpoint, is that then a factor of that window function between this time when you're building the infra and then you're creating the seams, and doing the other things, and it's going to get better, or maybe it's getting better? Can you speak to that?

**Tom Occhino:** \[27:56\] Yeah, it's probably a function of two things. One is that sort of window between innovation and generalization. But the other is actually the way that you deploy Next.js yourself and all of the things that you have to consider, there actually just is a lot associated with hosting a sophisticated application. And so the steps that you have to go through - we can document them all, and we have, and it's gotten a lot better in even just the past month or so. But it still is a process. "Here's a bunch of different things that you need to set up on your own." And actually, I think that's great for anybody who likes that type of work. We document it very well, and we'll continue to refine and simplify over time. I think it's going to get better and better as we go. Like, for example, you used to have to install special dependencies in order to do image optimization, and now it's kind of taken care of for you automatically... We'll continue to refine and make it better. But I think the value proposition of something like Vercel is "Okay, there's a lot that goes into this, and that's not necessarily how I want to spend my time." If people love to spend their time that way, that's great. We should compare notes, because we have some folks that like to spend their time that way as well. But for me, I'm more focused on the end user experience. I really just want to build my thing and I don't want to think about how it gets supplied. I just want to git push and then it's done.

So yeah, we're trying to strike the right balance between making it fully self-serviceable and fully self-hostable, and for the people who don't want to think about that, here's a great way to host it. We think that Vercel is probably the best way to host Next.js, but if you want to tinker on your own, if you want to host it yourself, we'll provide you with all the tools and we're committed to continuing to make that better and better over time.

**Jerod Santo:** Can we go back to the DX versus UX thing? Because I think I heard you say something that I tend to agree with, but a lot of people disagree with, which - a lot of people say the developer experience and the user experience are almost always diametrically opposed. Like, you're picking one or the other. And so you pick developer experience and you ruin the user experience. And of course, that's the most extreme side of that particular argument; they're shades of gray.

I don't believe that's always the case. I recognize there are trade-offs that you can make, but I'd just love your thoughts on this, because I think that we are aligned on it, and I'd love to have your ammunition for my future conversations.

**Tom Occhino:** Absolutely. I do not think that this should be a trade-off at all. And I'll give one example of the opposite case than what you described. In order to enable a truly exceptional user experience, the developer experience was so bad that nobody wanted to contribute to the thing, and so it eventually just died. Facebook built an app called Paper for iOS, and it was around the time that the iPhone 4S was released. It was such an incredible app, ahead of its time. Every gesture was smooth, everything was 60 frames per second animation. It was built on a technology called Async Display Kit, but it was so manual. Everything was very hard to work with as a developer, and it was very easy to get things wrong. One sort of line out of place and you were segfaulting the app and hard-crashing, because it was doing direct memory access, direct access to underlying canvas painted views.

And so unequivocally, you could use this app and you'd be like "This is the best feeling app I've ever used. It's an amazing user experience." But because the developer experience was so -- it was full of what we call footguns, or it didn't enable developers to fall into the pit of success, developers didn't want to work on it. And so that great user experience - there were two or three people who had it in their head, that could make changes, but ultimately the app kind of just didn't scale, and we kind of shut it down eventually. We took some of the lessons and some of the tech and incorporated it into the main Facebook app, but Paper didn't live on.

And then on the other hand I think every day we're confronted with software that we use, that is clearly optimized for sort of time to market, and nobody really put any care or craft into it, and it's just like "Look, I can tell you just kind of like put this out there, and it solves a purpose, it solves a need, but it's not where I want to spend a bunch of my time. It's not a delightful, exceptional user experience."
\[32:07\] So my strong belief - and actually I think at one of the React Conf keynotes I gave a whole spiel about this... The only reason to invest in a great developer experience is in service of creating an exceptional user experience, and then being able to evolve your app and keep it relevant over time, while preserving and maintaining and enhancing the user experience.

I think that these two things go hand in hand, and you should be focused on - as a framework author, as a platform author, you should be focused on great developer APIs that by default create great user experiences. We've seen quite a bit of this in Swift and Swift UI. I think Apple's doing a pretty good job here of making it so that "Hey, if you just write your code this way, look at the great user experience you get." And you're like "Oh my gosh, this code is easier to write." And that's what I love about React as well. Because we have this component as the isolation boundary, component as the sort of logical "This is my container", I can optimize the insides of that component and the user experience associated with that component, and maintain the same contract with the rest of the application, and then somebody else can work on this piece and that piece. And even though we're working on different parts, because we've maintained these contracts, we can have a really good-feeling application. I can continue to refine my one component and make it better and better and better, without degrading any of the rest of the app. So yeah, I think they go hand in hand.

**Jerod Santo:** Yeah, so React really -- that's what I think React's legacy will be, is it introduced this component as... I think it was even Guillermo who said "We have a new atomic unit or elemental thing in web development, which is now the component", which - thanks to React for that; the one-way data flow... All the stuff that comes in the isolation. But there are other ways of making components, and there are plenty of people who are vying for you to make components their way. And I'm just wondering how tied to React Next.js is as a framework? ...because perhaps something else comes along which does that thing better than React. Is Next and React at this point - they've merged into a singular autonoma, or...? Is there seams in there? Is there ever a future in which Next is an awesome framework, but not the React framework?

**Tom Occhino:** Yeah, it's a good question. I think there are enough seams in there. I wouldn't describe them as inextricably coupled, but I think extremely spiritually-aligned. And Next.js does see itself as sort of filling in the rest of the story with React as the right primitive.

I actually think there's no reason to want to move off of React, especially given that there's a series of problems that just we don't need to solve anymore, that are solved by React. So my sort of take here is it would be a huge distraction to try to decouple them. But there are seams, and there are sort of "This is clearly Next.js's responsibility, this is clearly React's responsibility."

That said, I think I actually really love to see the proliferation of frameworks and new ideas. One of the things I loved seeing was the React team leaned so heavily into the compiler, the new React compiler that was just released in beta recently... That work stream was heavily influenced by the existence of Svelte. The React team really looked up to sort of Rich Harris and the team working on Svelte, and there were a ton of great ideas there... And so I think they've been influenced in that direction. And then also Svelte was influenced from React, of course.

And then zooming out even more, I actually am very okay with there being lots and lots of ways to do things, including just based on preference, and including just for niche use cases. So if somebody else prefers the way that you write code in Svelte, or Solid, or Vue, the thing that I care most about is that all of those technologies deploy to the web platform. I am a web zealot. I cut my teeth making web pages. I believe in this sort of like openness and infinite availability of the web.

\[36:12\] So I think it would be a distraction for Next.js to say "Oh, we could re-platform on top of some other component architecture." But I love the existence of other component architectures, if that makes sense.

**Jerod Santo:** Sure, to push the industry forward and all that.

**Tom Occhino:** Yeah.

**Jerod Santo:** If I was to categorize the JavaScript in-browser history and eras - maybe you have the MooTool era... But in the last two decades, you really had a jQuery era, and then you have had a React era. And other things are in there, but those two are kind of the foundational things.

**Tom Occhino:** Yeah, and like Backbone in between, right? It went jQuery, and then there's like a Backbone MVC...

**Jerod Santo:** Yeah. I mean, Backbone kind of pointed out why the jQuery style falls short in mass, which is why components were so powerful. jQuery eventually became part of the web platform. I mean, querySelectorAll()... I mean, the query selectors and that style of programming really was - and the API was spectacular - jQuery's biggest innovation, right? And they were smoothing over the rough edges. But querySelectorAll() pretty much makes jQuery not necessary. And so building something in -- I don't know if web components will get us there, but if React could be built in components - if web components could get us there; I'm curious your thoughts on that - wouldn't React potentially not be necessary? Like jQuery isn't.

**Tom Occhino:** Yeah, I think you could get there. I think it's harder to innovate inside of the web platform itself, than on top of it.

**Jerod Santo:** Couldn't they just formalize around the innovation that's happened, like they did with jQuery?

**Tom Occhino:** Yeah, what you could do is you could basically spec the current behavior, and you could say "Okay, now we want multiple implementations of React." And one of those implementations can be lowered into the browser itself. And so the entire reconciliation process... And in many ways, the optimizations that browsers have been making has made some of the early value propositions of React not necessary anymore. The DOM is fast now. One of the value props of the virtual DOM was like "Ooh, you don't want to change the DOM. It's slow." And then browser vendors were like "Oh, we could just fix that." So I think it has pushed a bunch of innovation. I don't know that the API surface area makes sense as sort of like first-party embedded, but if there's anything that we can move from the framework down into the platform, that's probably a win for everybody. At this point, I think it really happens in the sort of primitives that make up React, but...

As an example, one of the things we used to try to do with React is anything that's built on top of React that has to jump through hoops, we used to evaluate "Are there things we can do in the framework that make it so that your thing that sits on top is thinner and thinner?" So it's truly like your API surface area without all the guts. And there's been a lot of that innovation, and I think state management libraries and routers and things have been able to get thinner and thinner as React has exposed new primitives. And the web platform could do the exact same thing for React. So I imagine a world where actually React gets thinner and thinner, because the web platform supports more of these things natively.

And the good news is all of the people building at all layers of the stack, whether it's the web platform, React core, Next.js, or the things that sit on top of all of these - they all talk. And so we are looking for opportunities to kind of move things down in the stack.

**Jerod Santo:** Can you speak to the viability of web components as that primitive?

**Tom Occhino:** I've never really used them for anything serious... And I think one of the things that people have criticized web components for is being a completely parallel track. So as I talked about moving things lower in the stack, it wasn't like web components were like "Okay, we're going to take these things that you need inside of React, and we're going to move them into the web platform, and then React could get thinner." It was "No, no, no. You don't need React. We're going to do the whole thing." And for that reason, I think it always felt like a parallel track.

\[40:11\] Nothing against web components. Actually, the underlying initial hypothesis for why web components needed to exist is great. And in fact, I had a conversation with the team building them, many, many years ago, about how the intention was to say "Look, you have built-in components like the select box. We just want to make it so you can build other built-in components for the browser, for the web platform." And I love that. That's fantastic. There's room for that.

And anything that was built on top of or with web components, I think the tone was very not collaborative. It was sort of like "No, no, no, you're doing it wrong. You need to do it our way instead", and that created this unnecessary rift between the two worlds.

One of the things that React wasn't able to do early on, and I think it only got fixed later in React 16 or something like that, was support for web components, like custom properties. And so that created, for a long time, until there was a major release where we could do a breaking change, that created these two parallel tracks as well. So certainly we could have done more to kind of collaborate, but I don't think that much about web components as a way of lowering down into the platform. I think of it as sort of a parallel track.

**Break**: \[41:32\]

**Jerod Santo:** You mentioned Svelte as an inspiration for some lower-level parts of React, and vice versa. Svelte now a Vercel-backed project; Rich Harris works at Vercel as the chief product officer. How do you view Svelte as a product officer?

**Tom Occhino:** Yeah, one of the things that is really nice, as I mentioned, about our managed infrastructure is we've created very high cohesion between Next.js and our framework-defined infra, but loose coupling. So there's a seam that is described as this build output API. And because Svelte targets the build output API, it works really well on Vercel. And we have a number of customers - I don't know if I can disclose the names, but we have a number of customers at Vercel that use --

**Jerod Santo:** You can do it.

**Tom Occhino:** \[laughs\] that use Svelte.

**Jerod Santo:** I give you permission.

**Tom Occhino:** Yeah. Well, I guess you could go see their websites, but... Logitech is one site that uses Svelte, and works really well on our managed infrastructure. So I love the idea that customers can come along and say "Okay, we want to use this framework, but we want to deploy to your managed infrastructure and use your developer experience platform, and we can kind of support that." So yeah, I love delivering value to customers by way of sort of meeting them where they are, and enabling them to be successful.

**Jerod Santo:** So is that a circumstance where Rich has kind of carte blanche to work on whatever he wants? Is there oversight? I don't know how it would work inside of an org.

**Tom Occhino:** Yeah, very minimal oversight. I mean, because we believe in funding open source in a sort of sustainable and durable way, we check in with the team on the roadmap, and we connect them with any customers that use Svelte as often as we can... But mostly we kind of let them drive. And we would be willing to do this with other frameworks as well. I think we've talked to many other frameworks about if they would want a similar setup. And most of them are not interested, and they want to kind of do their own thing... But yeah, Rich and the team are great, and the Svelte 5 release is extremely exciting. So if you haven't played with that yet, please play with it.

**Jerod Santo:** Haven't played with it, read the blog post... Very excited and 100% agree. I think that's cool. I think especially if they have relative amounts of autonomy... Obviously, when you work for somebody, you work for that person/org. But certain things just come along with having a job. But letting him -- I think he's the kind of guy, letting him lose is just like good for the world.

**Tom Occhino:** That's absolutely right. I think the innovation that that team comes up with that ends up influencing everything else is net positive for everyone. So I'm very excited about that.

**Jerod Santo:** So you're fresh off of Next.js Conf... I think it was just last week, right?

**Tom Occhino:** That's right.

**Jerod Santo:** What's hot and new and exciting? What's going on in the world?

**Tom Occhino:** Oh, good question. So I'll rewind back to sort of two years ago, Next.js Conf. I think the team introduced this new router, and really -- we never really talked about it this way, but it was kind of a Next.js rewrite. And because you could kind of use these two things side by side, it didn't appear as though it was a rewrite. But basically, we introduced the app router. And the app router was the first kind of way that you could use React server components in production and at scale, and we've been evolving both React... Multiple members of the React core team work here at Vercel, on React. And we've been kind of evolving Next.js on top of React.

And one of the early sort of -- I don't want to call it a misstep, but maybe like oversights, was we didn't really think about preserving one of those things I mentioned earlier was so paramount for React, which is that really low barrier to entry. So we kind of exposed you to the sophistication, like all of the complexity and all of the sophistication associated with building something very big, very complex, kind of all at once. There was all of these export const dynamic, \[unintelligible 00:47:55.19\] all this configuration and all of this weird unstable cache API... And there was all this complexity. And even though we had proven in production that you can create an exceptional user experience with this technology stack, it wasn't as approachable as Next.js was known for.

\[48:17\] Next.js used to be so simple. It's like "Look, put your data fetching code here. You've used files, each file becomes its own route..." It's so simple. But AppRouter started out a bit more sophisticated, a bit more front-loaded of complexity. So what we've been doing for the last two years is kind of refining.

I think in 2023 we introduced our North Star, which is this idea of partial pre-rendering, which builds on -- I could talk for hours just about the evolution of something at Facebook called BigPipe, that turned into something else, that eventually will be this partial pre-rendering... But the idea here is we can give end users the best possible user experience with very minimal developer intervention. Here's what I mean. We can take all of the static parts of a page, we can render them, we can cache them at the edge, and then as soon as the user loads the page, we can load that static shell, and then stream all the dynamic content into the page. This is our sort of North Star. You get fast initial render, fast time to first byte, and you get streaming dynamic content coming in.

So we introduced our North Star in 2023, and we're like "This is partial pre-rendering, this is what we've been building for some time, and this is where we're going." Then we started using it more and more outside of just our one or two use cases, and we started getting feedback from developers about how many hoops you had to jump through to make this work.

So the feedback was really like "I love the user experience, it's amazing, but the developer experience is really clunky. It's really hard to get right. And so I don't even know if I want to use this thing. I don't know if the user experience is worth it." And so just like what we were talking about earlier, if you have a great user experience but a crappy developer experience, you won't get people to be able to use the thing.

So we kind of -- we didn't go back to the drawing board, but we kind of just kept refining and iterating. And what we realized was we needed a simpler mental model for how you determine what's static and what's dynamic. And that led us to kind of what we announced at Next.js Conf this year, which is - internally, the sort of body of work is called Dynamic IO, but it manifests itself as a used cache API.

So by default, you can say that my entire page is just static, but my entire page is just dynamic as you'd expect, but this piece is static and I want it to be cached, or vice versa. So a much simpler mental model that people were kind of finally like "Oh my gosh, you got rid of that weird, implicit automatic fetch caching behavior that when I refresh the page I didn't know why I wasn't getting new data..." We just fixed a lot of the papercuts and foot guns associated with caching, which manifests itself as a much better developer experience, ultimately in service of that great, great end user experience. That's part one. I think the other meaningful thing that we talked about actually was self-hosting of Next.js. Because for the past year and a half-ish the team's been kind of heads down refining this model and making this better, we actually haven't focused much on Next.js outside of Vercel. We've just been trying to prove this innovation, prove this hypothesis. And once we finally got it to a place where we had kind of exit velocity, like "Okay, finally, we know this is going to work." Then we started going through the GitHub issues, and we came up \[unintelligible 00:51:33.22\] and we're like "Oh my gosh, look at all of these quality of life improvements that are missing." The image optimization one I mentioned, and a bunch of other things. "And look at how many people are just asking us for a really straightforward guide to self-host Next.js out of Vercel." And the team was so excited to work on this.

All of them have been working on Next.js for -- I mean, not all of them, but many of the team members on Next.js have been working on Next.js since before Vercel was even a business, and so they're really passionate about making the framework really, really good. So the other thing we kind of announced here is both better support for self-hosting Next.js, and a commitment to kind of working with other cloud providers that aren't Vercel, to make it easier to host Next.js.
\[52:18\] So two very important work streams, one on the innovation side, and one on the sort of a generalization side. And actually, this ties directly back to how we opened the thing, which is innovation first, and then generalization after.

**Jerod Santo:** Right. I mean, that's great to hear. I think if you took a pulse of the overall sentiment towards both Vercel and Next.js, which are brand-aligned and linked, that people are happy, but if they're unhappy about anything, it's the hosting story. And of course, when Vercel is incentivized to make that the best place to host Next.js, or maybe - even easier - the only place you host Next.js, that starts to like bug people and they start to think "I don't really wanna -- not only do I not wanna give Vercel my money, but I don't wanna use Next.js because of that reason, because they're incentivized to make that the only place that's even possible or easy to do that." And so the fact that you guys are investing on that both is great for the community, but also I think it's just smart business by taking that whole angst out.

**Tom Occhino:** Yeah, I completely agree. One of the things we saw in the early days of React was because React became relevant outside of Facebook, people working at Facebook believed that the technology stack that they were using and the skills that they were learning were relevant, and so they stayed around a long time. They didn't feel like their skills were being sort of "This only applies to this technology stack, it only applies to this company", so they didn't feel locked in. And I think with Next.js, we need people who use Next.js to not feel like they're locked into Vercel, or they just won't use Next.js. So it's somewhat counterintuitive, but the best thing you can do to grow both Next.js adoption and probably Vercel usage is make it very clear how to use them independently.

And so yeah, we've seen lots and lots of companies do different things in this space. One of the nice features of my background and Guillermo's background is that we both are very passionate independently about open source itself. That's where we started. I started out on MooTools, and we've been kind of web zealots ever since.

So yeah, I think telling that story is really important, because if the only thing you ever hear is that these things don't work independently, "This is about lock-in", or "You can only use them together, and this is about funneling usage into Vercel", if that's the only thing you hear, you'll eventually just be like "Yeah, that must be true." But once we're like "No, no, no. Actually, here's how it works, and here's how we innovate, and then here's how we generalize, and here's the proof", people are like "Oh, okay, great. There is a narrative here. There is a story here. There is intentionality here. It's not just this sort of funnel." So that's why I say we don't build Next.js to make money, we make money to build Next.js, and Svelte, and other technologies as well.

**Jerod Santo:** On the money-making front, this is something that I don't think is Vercel-specific, but it's more like cloud hosting problems, is generous free tiers, or zero credit card required. Maybe you've got to put it in, but just no cost to get started, and then a surprise bill when something happens that you didn't realize your side project gets a little bit of action, or whatever happens. And then this is bad for your overall image, because people are posting pictures like "Oh, look what Vercel did to me, $5,000 overnight." As a product guy, you're certainly trying to solve that problem too, aren't you?

**Tom Occhino:** Absolutely. I love this topic, too. So the way that we think about the phenomenon you've described is like "Oh, my app went viral. I wasn't prepared for it." And Vercel handled it really well. You auto-scale infrastructure to make it so I could meet the demand, but now I have to pay for that infrastructure.

**Jerod Santo:** Yeah, I'd rather get the slash dot effect and not have to pay, right?

**Tom Occhino:** \[56:08\] \[laughs\] So do you know the expression "In life there are no such things as solutions, we only have the ability to trade off one set of problems for a different set of problems." I think there are no solutions, only trade-offs. And I have to find attribution for the quote.

What we've done is we've traded denial of service, which is "Oh, a lot of people visited my host and it went down." We've traded that for something that we affectionately call denial of wallet, which is like "Hey, we're not going to go down, but we're going to provision a lot of compute, and that compute costs money."

So here's how we're thinking about solving the denial of wallet problem. The first thing is, we have to have spend controls. If you're building your profile or portfolio website, there's no world where you're willing to spend more than 20 bucks a month to host this thing. It's like, look, it's not a business. So spend management and the controls to get it right. And we have some of those things, but I actually don't want that at all. I want our platform to be so smart that we know the difference and that we alert you when something is happening, such that every time you have that, not only are your costs under control, because we've reduced the underlying costs of running and provisioning that compute - which we're working on with things like in-function concurrency we could get into - but you don't have to think about it also because you know what happens when that happens, in advance. You're going to get an alert. You're going to be able to have control, you're going to be able to say "I want to use the firewall to be able to rate-limit, or block, or slow traffic." But in the fullness of time, we make this zero configuration and we just take care of it for you.

And so our platform is getting smarter and smarter to be able to not have the denial of wallet problem. We actually have an active initiative around preventing denial of wallet. So yeah, the sort of like serverless, the original serverless pitfall, which is like "Wow, this thing is working too well."

**Jerod Santo:** Yeah, that's really cool. Are you all still on top of AWS? You're a layer two cloud, is that right?

**Tom Occhino:** Yeah, we have a lot of underlying providers, but we are very much a partner with AWS on a lot of stuff. So in some ways you can kind of consider Vercel or parts of Vercel a control plane over AWS... But we have other providers underneath that we kind of stitch together seamlessly.

**Jerod Santo:** I see. So not AWS only, but you're still sitting on top of other people's clouds.

**Tom Occhino:** That's right.

**Jerod Santo:** Some of your competitors don't have that problem or that solution. They can run their own stuff. And I think if you're trying to optimize for not denying wallets, one way you could do that - I'm not suggesting this as a product roadmap, but I'm just curious about it. Like "Hey, let's just go down a layer and run our own stuff." Is there initiatives for that? Is that something you guys are thinking of?

**Tom Occhino:** Yeah. Again, as I said before, there are no such things as solutions, only trade-offs.

**Jerod Santo:** Sure.

**Tom Occhino:** But what we would have to trade off is our time spent building an enterprise-grade development platform and framework-defined managed infrastructure, to building actual infrastructure. And I think at least for now, we don't see the need. We actually believe that what's happening is - and I don't mean to aggrandize it, but there's this human progress thing that's happening. In the early days of the internet, there were a small set of individuals that had to rack-mount machines. And then - I just remembered the stories from early Facebook, where we literally would drive to data centers and plug machines in. Then, eventually AWS comes along, and things like at GCP, Azure DevOps, and they say, "Hey, now anybody can provision compute from the comfort of your own home or office." And then something like Vercel comes along and says, "You don't really have to think about provisioning your own compute. We'll kind of do it for you automatically." So I think that arc is human progress.

\[01:00:03.22\] So now, the way that it would make sense for us to want to provision our own machines and actually rack-mount our own machines is if we get to a place where that's actually the only way for us to optimize our margins. And we have so much efficiency left. We have so much opportunity to, just in the software layer, make our margins and our product offering -- you know, better margin and more compelling product offering, so that we don't need to look at hardware yet. So no active explorations into hardware.

**Jerod Santo:** Gotcha.

**Tom Occhino:** I've mentioned this twice now, but you should check out the in-function concurrency.

**Jerod Santo:** I was just gonna ask you to go into it, because that seems like one of the ways you're squeezing efficiency.

**Tom Occhino:** That's right, yeah. I mean, since the advent of serverless, there's been this relationship between one request to one VM... And what we've done is we've sort of just actually taken advantage of the idea that most of the time these workloads are sitting idle; either disk IO, or fetching from the network, or actually nowadays, the biggest one is calling out to LLMs. These are expensive, costly wait time. And the CPU's kind of sitting idle while you wait on IO. And so what we've been able to do is we can actually send multiple requests to the same VM, and we're seeing somewhere between 12.5% and 47% efficiency gains just with the concurrency of two.

**Jerod Santo:** Nice.

**Tom Occhino:** And we have a lot more to do there. So we have another year's worth of the roadmap just optimizing that. So sure, we could absolutely drive to a data center and start building around the world... And we won't need to do that for a very long time.

**Jerod Santo:** Let's finish -- you said LLM, that's the magic word. Let's finish -- every podcast has to have some sort of AI chapter, and this is our AI chapter.

**Tom Occhino:** Of course, of course.

**Jerod Santo:** V0. Tell us about V0.

**Tom Occhino:** Yeah, V0, I think, started with this realization that if I can ask the LLMs for lots of things, why can't I ask them to get me started on my app? And that's where V0 came from. And it turns out the LLMs are pretty good at outputting React code, and web-compatible code... So we kind of just started tinkering and exploring it. And I think what we initially thought would just be this tool for getting started. I used to literally generate something with V0, copy it into an app, and that would be my starting point. And then I would just continue building from there. We now see it as a little bit more compelling than that, and I think we're kind of starting to see this. But this is an iteration platform where I have an idea, and the quickest way for me to sort of test that idea is to just tell V0 "Build this thing and tweak it this way, and do that thing."

And so we're starting to see not just getting started, but actually full kind of application development happening in it. And the thing that I think is most interesting about it is actually not -- this is kind of repeatable; we're seeing something similar. GitHub released Spark yesterday, which I think is the same thing... Claude, Sonnet, Artifacts is kind of something like this, \[unintelligible 01:03:10.12\] generate code now... So everybody's kind of like - first mover doesn't really matter when you're in a saturated space. Everybody's built the same, or something very similar.

What's really interesting about V0 is we're observing other parts of the organization use it to build tools that they need, that our engineering team doesn't have context on, or really doesn't have the motivation to build. And so it's been really interesting to see how it has turned many technical-leaning, but non-developers into developers. We have a demo day every Friday, and every Friday for the past three months, there has been someone from some part of the company saying "Here's how the customer success team built this tool to make ourselves more efficient. Here's how the docs team built this tool to sort of categorize and triage." And all of them are using V0.

\[01:04:01.08\] So we think the opportunity here is turning sort of everybody into a developer. We have a billboard in San Francisco that says "Everybody can cook." Internally we say "Let them cook." They're working on something, they're building something. And now, everybody can build, everybody can cook.

So yeah, it's been going really well. We're excited about it, we've got a very exciting roadmap planned... Yeah. What else do you want to know?

**Jerod Santo:** Well, I mean, you answered most of my questions. I was thinking - I look at something like this from the outside, and of course, like you said, a lot of people are trying to do this same thing. You guys are pretty early on, but it doesn't matter when there's hundreds of them going. And I think, not knowing Vercel very well from the inside, just as a viewer, I'm like, is this thing a distraction? "Is this like they had to do an AI thing, and that's what this is, and it's fun and it's cool, but is it like helpful?" But like I said, you answered some of that question, because internally you're getting a lot of benefits, even if it doesn't become a rocket ship product for you. It's still a benefit to the teams there.

**Tom Occhino:** Yeah, absolutely. And I think in many ways -- you know, we used to talk about the fact that Vercel had these two products, our managed infrastructure and our developer experience platform, and like previews, and comments, and preview deployments and stuff... But really, all of that was part of the same workflow, and it didn't really work separately. Like, you're using all of this together, so that's that frontend cloud. But vZero really kind of is a second product for us, because companies that can't, or have no need to host their managed infrastructure workloads on Vercel are very interested in vZero. And companies that are already using our managed infrastructure can add this on with minimal sort of change to their existing workflow.

So yeah, it's not a distraction. I think it started out as an exploration, that we believe is even more valuable for us internally than we had initially anticipated, and we kind of just doubled down on that.

**Jerod Santo:** So is it specifically outputting React slash Next.js apps? Is it bigger than that? Or that's what it makes?

**Tom Occhino:** By default, it does. You can tell it to output whatever you want, and it actually generates Python now, and you can output sort of any code, or any framework... But yeah, by default it outputs what it kind of knows the best. I think the thing that we seeded it with early on was all of Vercel's documentation, all of the Next.js documentation, all the React documentation... And it's a little bit self-serving. The reason initially was because that's what our stack looks like, and that's the stack that we work with most often... So that's where it started. But certainly, it's expanded over time and we can kind of shove more guides and examples and documentation in it, that has taught it to do other things. So you can say "Output a simple Svelte app that does X, Y, Z." Or "Output a sophisticated Svelte dashboard that can use this", and it knows how to do that.

**Jerod Santo:** I like the idea of telling it to generate something that's not sophisticated. You know, like, "Give me an unsophisticated thing. Please, only terrible code this time around..."

**Tom Occhino:** Especially if you're learning to program though, actually this is one of the things that really stood out for me, was once I started using V0, I sort of stopped using Google and Stack Overflow to answer questions. I had this very -- it's pretty simple, but I like my code... I have this app that's like, I wanted to add a sound to the buttons, because when I used the thing on mobile, I wanted to know that I was tapping the buttons. We don't have a web vibration API yet. It's a whole thing. So normally, what I would do is I would just be like "How do I add sound?" I've done this before, but I don't want to -- I just want to look it up.

**Jerod Santo:** Yeah.

**Tom Occhino:** I just had V0, like, you know," Can you add sound to these buttons?" The piece that I didn't remember was like how to synthesize your own sound, rather than loading in a file. And it's just like "Yeah, I'll just create a simple synthesizer for you, and you can copy-paste this." And I took that and I put it in my app. And I don't use -- I don't really need to look up. Yeah, I don't really need to look up docs anymore. I just ask the question, and I get it. It's really cool.

**Jerod Santo:** So does this live in a browser tab, or does it integrate into your editor? How do you use it?

**Tom Occhino:** Yeah, I use it in a browser tab. I think there's a world where we could integrate it into editors. I don't know, I think that space is saturated and somewhat uninteresting. If you're targeting developers and changing developer workflow, that's great. GitHub says there's a hundred million developers in the world. That's impressive. And I don't know, I've got product managers, customer success reps and sales engineers using this thing and they don't necessarily have VS Code installed. So I don't know, I believe in the web. I think it'll be in a browser tab for a while, but maybe there'll be a role for a native application, or a desktop application, or an IDE integration soon. We're exploring all of them.

**Jerod Santo:** Yeah. I think as it gets more powerful, you'll have more people wanting power tools to use with it. And you'll probably always have the people that want to just use it in a browser tab. But I think eventually, with adoption, it makes sense to go deeper into those integrations. Did you train it then on -- you'd mentioned some docs, and stuff, but did you start... How'd y'all build the thing? It was like a foundation model that you fine-tuned, or start from fresh, fire up some AWS EC2 instances with big GPUs?

**Tom Occhino:** Yeah, no, we trained our own models, and fed them a lot of the context that was most relevant to our initial use cases, and it's just kind of grown from there, so...

**Jerod Santo:** Very cool. Well, Tom, this has been a blast. I enjoyed meeting you and talking with you. Anything that I didn't ask you that you were hoping to talk about today?

**Tom Occhino:** I think we covered most of it. We covered a lot of ground.

**Jerod Santo:** Yeah, man.

**Tom Occhino:** It's a lot of fun.

**Jerod Santo:** It was a lot of fun. Appreciate it. To our listener, all the links to all the things mentioned here on today's show. Even you can go back -- if you want a bit of history and you don't want to go through the multi-hour React documentary, we have a podcast we did in 2015, episode 149, which is like a 600-old episode, all about these topics, with Tom's coworkers, colleagues... And that might be kind of fun for a little bit of history; the raw, unedited history of a conversation.

**Tom Occhino:** Absolutely.

**Jerod Santo:** So I'll put that in there as well. Tom, thanks so much. Appreciate your work and your thoughts today.

**Tom Occhino:** Thank you so much for having me.
